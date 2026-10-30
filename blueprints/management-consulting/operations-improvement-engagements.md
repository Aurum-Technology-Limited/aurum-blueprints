---
id: management-consulting.operations-improvement-engagements
name: Operations Improvement Engagements
description: "Deliver operations improvement for a client: a measured baseline, process walks and value stream maps, bottleneck and loss analysis, pilots run on the floor with supervisors, and a handover client owners can run."
category: business
version: 1.0.0
tags: [management-consulting, operations-improvement-engagements, knowledge-worker, lean, value-stream-mapping, bottleneck-analysis, process-improvement, shop-floor]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - risk-register
    - skills-matrix
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Operations Improvement Engagements
          description: "Delivering operations improvement: process walks, value stream mapping, bottleneck analysis, pilots on the floor and handover to client owners."
          projects:
            - name: Operations scope and KPI definitions agreed
              description: |-
                ## Purpose
                Operations engagements go wrong early when the client says throughput and means good units shipped, while the team measures units started. Agreeing in the first week which process steps are in scope, which three to five KPIs define success and exactly how each is calculated stops a month of arguments about whose number is right.

                ## Milestones
                1. The in-scope value streams, sites and shifts listed, with the explicit exclusions beside them.
                2. Three to five headline KPIs chosen, such as throughput per labour hour, lead time, first-pass yield or OEE.
                3. A one-line formula, data source and owner written for every KPI.
                4. The definitions signed off by the client operations director and the engagement manager.

                ## Notes
                Write the formula down even when it feels obvious. OEE alone has several versions in common use, and the planned downtime rule changes the answer by ten points or more.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed one-page KPI definition sheet with formula, source and owner for each headline measure exists within ten days of starting."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the value streams, sites and shifts the client believes are in scope"
                - "Draft a formula, source and owner for each candidate KPI"
                - "Test each formula against one week of real site data"
                - "Walk the operations director through the sheet and record sign-off"
            - name: Site safety induction and floor access
              description: |-
                ## Purpose
                No consultant should be on a production floor, a warehouse aisle or a hospital ward without the site induction, the right protective equipment and a clear idea of where they may and may not walk. Sorting this before the first walk also earns early credibility with supervisors, who notice who follows the rules.

                ## Milestones
                1. The site safety induction completed by every team member, with certificates or sign-in records kept.
                2. Protective equipment issued or bought for each person, matching the site's rules for each zone.
                3. Restricted areas, escorted zones and permit-to-work areas marked on a copy of the site map.
                4. A named site contact who escorts the team and can authorise access out of hours.

                ## Notes
                Start from the **Operational checklist** template. Ask about stop-work authority on day one: on most sites anyone, including a visitor, may and should stop an unsafe job.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every team member has a recorded site induction, the right protective equipment and a marked site map before their first floor visit."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the site health and safety lead for the induction schedule and rules"
                - "Book every team member onto the induction before their first walk"
                - "Order the protective equipment each zone requires"
                - "Mark restricted and escorted areas on a copy of the site map"
            - name: Operational data pull for the site
              description: |-
                ## Purpose
                Ops analysis lives on production logs, downtime codes, scrap records, shift rosters and order histories, and most sites hold them in three different systems plus a supervisor's notebook. Asking for twelve months of these specific extracts in week one, and walking the people who keep them through the request, saves the baseline from being built on a fortnight of whatever arrived first.

                ## Milestones
                1. A request listing each extract, its date range, its grain (by order, by shift, by machine) and the system it comes from.
                2. Owners named for production, downtime, quality, labour and maintenance data.
                3. At least nine of the twelve months received for the core production and downtime sets.
                4. Known gaps and manual records logged, with a plan to sample them by hand.

                ## Notes
                Downtime codes are often chosen by whoever is at the terminal. Ask a supervisor which codes really mean other or forgot before trusting the loss categories.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written operational data request is issued in week one and at least nine months of production and downtime data are in hand by day twenty."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the production, downtime, quality, labour and maintenance extracts needed"
                - "Find out which system or paper record holds each one"
                - "Send the request with grain and date range spelled out"
                - "Sit with the downtime data owner to decode the reason codes"
            - name: Baseline throughput, lead time and OEE
              description: |-
                ## Purpose
                Every improvement claim at the end of the engagement will be judged against the baseline, so it has to be built from data the client already trusts and checked against what you saw on the floor. A baseline covering at least twelve weeks, with normal variation shown, stops one good pilot week from being sold as a lasting gain.

                ## Milestones
                1. Each headline KPI calculated weekly for at least twelve weeks before the engagement started.
                2. The normal range of each KPI shown, not just the average.
                3. Two or three spot checks where the data was compared with a timed observation on the floor.
                4. The baseline pack reviewed and accepted by the site's finance or performance lead.

                ## Notes
                Start from the **Metrics log** template. Agree how holidays, shutdowns and unusual orders are treated before anyone sees a result, not after.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A baseline pack showing twelve or more weeks of each headline KPI with its normal range is accepted in writing by the client's performance lead."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Calculate each headline KPI by week from the extracts received"
                - "Chart the normal range of each KPI alongside its average"
                - "Time one process on the floor and compare it with the system data"
                - "Review the baseline with the site performance lead and log their edits"
            - name: First process walk with the site manager
              description: |-
                ## Purpose
                Walking the process end to end with the site manager in the first days, following one order or one batch from receipt to dispatch, shows you more than any map in the data room. It also tells you how the manager sees the operation, which problems they walk past and which ones they stop at.

                ## Milestones
                1. One order or batch followed from receipt to dispatch, with times at each step noted.
                2. Queues, rework loops, searching and waiting written down as they were seen.
                3. The manager's own top three problems recorded in their words.
                4. A one-page walk note shared with the team within a day.

                ## Notes
                Ask questions, do not offer solutions on the first walk. Supervisors hear about it within the hour if a consultant tells them how to run their line.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page walk note covering one end-to-end order with step times and the manager's top three problems is shared with the team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the site manager to pick a typical order or batch to follow"
                - "Carry a stopwatch and a clipboard sheet with columns for step and time"
                - "Ask the manager what normally goes wrong at each step"
                - "Write up the walk note the same evening"
            - name: Site stakeholder map from director to shift lead
              description: |-
                ## Purpose
                Improvements on the floor live or die with shift supervisors, maintenance leads, planners and, on many sites, worker representatives, not only with the director who signed the contract. Mapping who influences each step, who has been burned by past programmes and who can say no quietly shows where the team has to spend time.

                ## Milestones
                1. Everyone with a say over the in-scope processes listed, down to shift lead level.
                2. Each person placed by influence and current attitude to the work.
                3. Past improvement programmes and how they ended noted for each group.
                4. A named team member responsible for each key relationship.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A stakeholder map down to shift lead level, with an owner from the team for each key relationship, is in the engagement folder by week two."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every role that touches the in-scope processes on every shift"
                - "Ask two supervisors which past programmes failed and why"
                - "Place each person on an influence and attitude grid"
                - "Assign one team member to own each key relationship"
            - name: Current-state value stream map
              description: |-
                ## Purpose
                Drawn from walking the floor, a value stream map, with real cycle times, inventory between steps and information flows, shows in one picture how little of the lead time is spent adding value. It becomes the reference everyone in the client points at, so it has to be built with the people who run the process, not in the team room.

                ## Milestones
                1. Every process step from customer order to dispatch drawn with cycle time, changeover time, uptime and staffing.
                2. Inventory or queue counted between each step on at least two separate days.
                3. Information flows from planning and scheduling drawn above the material flow.
                4. A lead time ladder showing value-adding time against total lead time.
                5. The map checked step by step with the shift leads who run the process.

                ## Notes
                Draw it on paper on the wall first. A digital version made too early stops supervisors from correcting it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A current-state value stream map with measured step data and a lead time ladder is validated by the shift leads and pinned up on site."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Book two half-days on the floor to gather step data"
                - "Count inventory between each step on two different days"
                - "Draw the map on a wall sheet with the shift leads"
                - "Calculate the ratio of value-adding time to total lead time"
            - name: Process mapping kit for the team
              description: |-
                ## Purpose
                Each consultant tends to map processes in their own style, and a client then sees three different notations in one week. Agreeing a small kit (SIPOC for scope, swimlanes for handoffs, spaghetti diagrams for movement, value stream maps for flow) with a shared symbol set and a standard observation sheet makes the team's work comparable and quicker to review.

                ## Milestones
                1. A one-page guide to which map to use for which question.
                2. A shared symbol set and colour code agreed for the engagement.
                3. A printed observation sheet for timing steps and logging waste.
                4. Every team member has produced one practice map with the kit and had it reviewed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The team uses one documented mapping kit with a shared symbol set, and each member's first map has been reviewed against it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page guide matching map types to questions"
                - "Agree the symbol set and colours with the team"
                - "Print fifty observation sheets for the floor"
                - "Review each team member's first map against the guide"
            - name: Demand profile and shift pattern analysis
              description: |-
                ## Purpose
                Capacity problems are often demand problems in disguise: a line that looks short of capacity on Mondays may simply be absorbing a weekend backlog. Plotting demand by hour and day against the shift pattern, crew sizes and planned breaks shows whether the operation is staffed for the work it actually gets.

                ## Milestones
                1. Demand or order arrivals plotted by hour of day and day of week for at least eight weeks.
                2. The shift pattern, crew size and break schedule laid over the demand curve.
                3. Takt time calculated for each shift where demand is steady enough to use it.
                4. The hours where capacity and demand are furthest apart highlighted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A chart of demand by hour against staffed capacity, with takt time per shift and the worst mismatches marked, is reviewed with the site planner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull eight weeks of order arrivals by hour from the planning system"
                - "Get the current shift pattern and crew sizes from the rota"
                - "Plot demand against staffed capacity hour by hour"
                - "Calculate takt time for each shift and note where it breaks down"
            - name: Loss hypotheses across the eight wastes
              description: |-
                ## Purpose
                Going into week three with a written list of where you think the losses are, sorted by the eight wastes and sized roughly, turns the floor work from general observation into tests. It also gives the engagement manager an early view of where the value might be and which hypotheses need the most evidence.

                ## Milestones
                1. At least fifteen loss hypotheses written, each tied to a named step in the value stream.
                2. Each hypothesis tagged to one of the eight wastes, such as waiting, motion or defects.
                3. A rough size for each, in hours, units or cost per year, with the assumption stated.
                4. The top eight chosen for testing, each with the evidence that would prove or kill it.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A list of at least fifteen sized loss hypotheses, with the top eight carrying a defined test, is reviewed by the engagement manager by week three."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Go through the value stream map step by step and write down suspected losses"
                - "Tag each loss to one of the eight wastes"
                - "Size each loss roughly and write the assumption beside it"
                - "Ask the agent to sort the list by size and flag hypotheses with no test"
            - name: Twice-weekly floor time routine
              description: |-
                ## Purpose
                Teams on operations work drift back to the team room as soon as analysis gets heavy, and the client notices. Blocking two fixed floor sessions a week for every team member, with a purpose for each visit, keeps the analysis honest and keeps supervisors used to seeing you.

                ## Milestones
                1. Two floor sessions a week in every team member's calendar for the life of the engagement.
                2. A stated purpose for each session, such as testing a hypothesis or checking a pilot.
                3. A short visit note captured after each session in the shared folder.
                4. Floor time tracked so the manager can see who has fallen behind.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every team member logs at least two floor sessions with a written note in eight of every ten engagement weeks."
                cadence: rolling
              tasks:
                - "Block Tuesday and Thursday floor sessions for each team member"
                - "Spend the floor session on one hypothesis or one pilot check @recurring(weekly:tue,thu)"
                - "Write a five-line visit note in the shared folder after each session"
                - "Show floor hours per person at the team's weekly review"
            - name: Weekly KPI pack for site leadership
              description: |-
                ## Purpose
                Site leaders want to know every Friday whether the numbers are moving, and a pack that changes format every week loses their trust. A fixed one-page pack showing each headline KPI against baseline and target, with a sentence on what changed and why, becomes the shared scoreboard for the engagement.

                ## Milestones
                1. A one-page format agreed with the site director and frozen.
                2. Each headline KPI shown weekly against its baseline range and its target.
                3. One sentence of explanation for every KPI that moved outside its normal range.
                4. The pack sent by the same time every Friday.

                ## Notes
                Show the baseline range, not just the average, so a good week inside normal variation is not celebrated as a result.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page KPI pack in a frozen format is sent to site leadership every Friday for the length of the engagement."
                cadence: rolling
              tasks:
                - "Agree and freeze the pack format with the site director"
                - "Refresh the KPIs from the week's data and send the pack @recurring(weekly:fri)"
                - "Write one sentence for each KPI outside its normal range"
                - "Keep an archive of every pack sent in the engagement folder"
            - name: Tier meeting observation and coaching
              description: |-
                ## Purpose
                Daily tier meetings at the line, team and site level are where problems are meant to surface and get owners, and on most sites they have decayed into reading out yesterday's numbers. Observing them twice a week with a simple scorecard, and coaching the leaders who run them, is often the cheapest improvement on the floor.

                ## Milestones
                1. Every tier meeting in scope attended at least once and scored on time, focus and actions.
                2. A baseline score for each meeting recorded.
                3. One coaching conversation held with each meeting leader.
                4. Scores rising for at least half the meetings after four weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each in-scope tier meeting has a baseline score and a later score, and at least half have improved within four weeks of coaching."
                cadence: rolling
              tasks:
                - "Draft a five-point scorecard for tier meetings"
                - "Attend and score a tier meeting @recurring(weekly:mon,wed)"
                - "Give the meeting leader one strength and one change after each visit"
                - "Log scores in a sheet by meeting and week"
            - name: Pilot results log
              description: |-
                ## Purpose
                Pilot results get remembered as stories unless someone writes the numbers down each week, with the conditions that applied. A log of pilot KPIs, staffing, product mix and unusual events makes the end-of-pilot review a matter of reading the record rather than arguing about it.

                ## Milestones
                1. One log per pilot, with KPI, staffing, mix and event columns.
                2. Every pilot week recorded within two working days of its end.
                3. Comparison weeks or a comparison line logged in the same format.
                4. A cumulative chart of pilot against comparison kept current.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each running pilot has a weekly log entry made within two working days, with a comparison line recorded in the same format."
                cadence: rolling
              tasks:
                - "Set up the log with KPI, staffing, mix and event columns"
                - "Record the pilot week and the comparison week @recurring(weekly:thu)"
                - "Note any unusual event, such as a breakdown or a rush order"
                - "Update the cumulative pilot chart after each entry"
            - name: Floor action log with supervisors
              description: |-
                ## Purpose
                Supervisors raise dozens of small problems once they trust the team: a missing tool, a confusing work instruction, a forklift that is always late. Keeping one visible action log with an owner and date for each, and closing items fast, builds more goodwill on the floor than any presentation.

                ## Milestones
                1. One action log visible on the floor and mirrored in the engagement folder.
                2. Every item with an owner from the client side and a due date.
                3. Items reviewed weekly with supervisors and closed or re-dated.
                4. More than two thirds of items closed within three weeks of being raised.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A floor action log is reviewed weekly with supervisors, and at least two thirds of items are closed within three weeks."
                cadence: rolling
              tasks:
                - "Put up an action board next to the line and copy it into a sheet"
                - "Review open items with the supervisors @recurring(weekly:wed)"
                - "Chase any item past its date with its owner"
                - "Report the closure rate in the weekly KPI pack"
            - name: Monthly sustainment audit of implemented changes
              description: |-
                ## Purpose
                Changes on the floor slide back within weeks unless someone checks them. A short monthly audit of every implemented change, using a checklist of what the new standard looks like, catches the drift while it is still a conversation rather than a lost result.

                ## Milestones
                1. A checklist for each implemented change describing the new standard in observable terms.
                2. An audit completed every month on each change, on a different shift each time.
                3. Each lapse logged with a cause and an owner.
                4. Client supervisors running the audit themselves by the last month of the engagement.

                ## Notes
                Start from the **Operational checklist** template. Audit on nights and weekends too: changes often hold on the day shift the consultants see and slip on the others.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every implemented change is audited monthly against a written checklist, with client supervisors running the audits by engagement end."
                cadence: rolling
              tasks:
                - "Write an observable checklist for each change already implemented"
                - "Run the sustainment audit on a different shift each month @recurring(monthly:12)"
                - "Log each lapse with a cause and a client owner"
                - "Hand one audit a month to a client supervisor to lead"
            - name: Frontline idea and feedback loop
              description: |-
                ## Purpose
                Operators usually know where the losses are and have stopped mentioning them because nothing happened last time. A simple loop where ideas are written down, answered within a week and credited by name when used gives the team a stream of good ideas and shows the floor that this programme is different.

                ## Milestones
                1. A place on the floor and a simple form to raise ideas.
                2. Every idea answered within a week with a yes, a no with a reason, or a trial.
                3. Used ideas credited to the person who raised them at the tier meeting.
                4. A count of ideas raised, answered and used reported monthly.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every frontline idea raised gets a recorded answer within seven days, and the monthly counts are shared with site leadership."
                cadence: rolling
              tasks:
                - "Put up an idea board with a short form near the break area"
                - "Answer every new idea on the board @recurring(weekly:mon)"
                - "Credit used ideas by name at the tier meeting"
                - "Send the monthly count of ideas raised, answered and used to the site director"
            - name: Monthly data refresh and baseline drift check
              description: |-
                ## Purpose
                Over a three or six month engagement the client's systems change, codes get redefined and new products arrive, and a baseline built in month one can stop being comparable without anyone noticing. A monthly refresh that rechecks definitions and mix keeps the final results defensible.

                ## Milestones
                1. All operational extracts refreshed on a fixed day each month.
                2. Any change to codes, definitions or product mix logged with its date.
                3. The baseline adjusted, or the reason it was left alone, written down.
                4. The client performance lead told of every adjustment the same week.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Operational data is refreshed monthly with a written log of definition or mix changes and any baseline adjustment agreed with the client."
                cadence: rolling
              tasks:
                - "Set a fixed monthly refresh day with each data owner"
                - "Refresh extracts and compare definitions with last month @recurring(monthly:5)"
                - "Log any change to codes, definitions or product mix"
                - "Tell the performance lead about any baseline adjustment in writing"
            - name: Weekly safety and quality round on pilot areas
              description: |-
                ## Purpose
                Pilots change how people move, lift and hand off work, and a faster line that creates a new strain or a new defect is not an improvement. A short weekly round of each pilot area, looking at safety and quality before speed, catches side effects early and shows the floor what the team cares about.

                ## Milestones
                1. A short round checklist covering ergonomics, near misses, defects and housekeeping.
                2. Every pilot area walked weekly with the area supervisor.
                3. Any safety concern raised through the site's own reporting process the same day.
                4. Quality results for pilot areas compared with baseline every week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each pilot area has a weekly safety and quality round on record, and every concern found is in the site's reporting system."
                cadence: rolling
              tasks:
                - "Draft a ten-point round checklist with the site safety lead"
                - "Walk each pilot area with its supervisor @recurring(weekly:tue)"
                - "Report any safety concern through the site system the same day"
                - "Compare pilot defect rates with the baseline each week"
            - name: Time studies and work sampling practice
              description: |-
                ## Purpose
                Knowing how long work really takes is the base of every operations case, and timing people well is a skill: where to start and stop the watch, how many cycles to time, how to rate pace and when work sampling is better. Practising on a willing area before the real study saves you from numbers supervisors can pull apart.

                ## Milestones
                1. The difference between time study and work sampling, and when each fits, written in your own words.
                2. Ten or more cycles of one task timed, with elements and break points defined.
                3. A work sampling study of at least two hundred observations run on one role.
                4. Both results reviewed by an experienced operations colleague.

                ## Notes
                Always tell people what you are timing and why before you start. A hidden stopwatch ends trust on the floor for the rest of the engagement.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One time study of ten or more cycles and one work sampling study of two hundred observations are completed and reviewed by a senior colleague."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read your firm's or a standard guide to time study and work sampling"
                - "Pick a willing area and explain to the operators what you will time"
                - "Time ten cycles of one task with defined elements"
                - "Run a two hundred observation work sample on one role"
            - name: Bottleneck analysis and the theory of constraints
              description: |-
                ## Purpose
                Improving a step that is not the constraint raises nobody's output, yet most operations teams spread effort across every step. Learning to find the bottleneck from queue build-up, utilisation and starvation patterns, and then to exploit and subordinate around it, focuses the whole engagement on the step that pays.

                ## Milestones
                1. The five focusing steps of the theory of constraints written out with an example from your site.
                2. The current bottleneck identified from at least two independent signals, such as queues and utilisation.
                3. Bottleneck lost time broken down by cause for two weeks.
                4. Three ways to raise the bottleneck's effective output listed without capital spend.

                ## Notes
                Bottlenecks move. Once the first one is relieved, the next one appears, often in a support function such as quality inspection or material supply.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The bottleneck is identified from two independent signals, its lost time is broken down by cause, and three no-capital options are written up."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a short summary of the five focusing steps"
                - "Look for queues building in front of each step on two floor walks"
                - "Compare utilisation across steps from the production data"
                - "Recheck where the bottleneck sits after each change @recurring(monthly:18)"
            - name: Queueing and Little's law for service operations
              description: |-
                ## Purpose
                Contact centres, claims teams, clinics and service desks behave like queues, and utilisation targets that look efficient on paper create long waits once they pass about eighty five percent. Understanding Little's law and basic queueing behaviour lets you explain to a client why their backlog explodes and what staffing really does to wait times.

                ## Milestones
                1. Little's law applied to one real process: work in progress equals throughput times lead time.
                2. Wait time plotted against utilisation for one team using their own data.
                3. The effect of arrival variability on waiting explained in a single slide.
                4. A staffing scenario tested in a simple queueing calculator or spreadsheet.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Little's law has been checked against one real process and a wait time against utilisation chart built from client data."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work out work in progress, throughput and lead time for one team"
                - "Check whether the three numbers satisfy Little's law"
                - "Plot wait time against utilisation from a month of data"
                - "Model one staffing change in a simple queueing spreadsheet"
            - name: OEE loss tree for a constraint machine
              description: |-
                ## Purpose
                OEE as a single number tells a plant little; broken into availability, performance and quality losses, then into the six big losses and their causes, it tells the maintenance lead and the supervisor exactly where an hour went. Building one loss tree properly is the quickest way to learn the method and to get a credible case for the bottleneck.

                ## Milestones
                1. Planned time, run time, ideal cycle time and good units established for one machine.
                2. OEE split into availability, performance and quality for four weeks.
                3. Each loss broken down into the six big losses with hours attached.
                4. The top three loss causes agreed with maintenance and production leads.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A four-week OEE loss tree for one constraint machine, down to the six big losses with hours, is agreed with maintenance and production."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the ideal cycle time for the machine with the process engineer"
                - "Split four weeks of OEE into availability, performance and quality"
                - "Break each loss into the six big losses with hours"
                - "Review the top three causes with maintenance and production leads"
            - name: Changeover reduction with SMED
              description: |-
                ## Purpose
                Long changeovers force big batches, big batches create inventory and long lead times, and many sites accept a two-hour changeover as fixed. Filming one changeover, separating the work that can be done while the machine runs, and streamlining what remains often halves the time without spending money.

                ## Milestones
                1. One full changeover filmed with the operators' agreement.
                2. Every element listed with its time and marked internal or external.
                3. At least a third of internal work moved to external or removed in a trial.
                4. A new changeover standard written and trialled on two shifts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A filmed changeover is broken into timed elements, and a trialled new standard cuts the changeover time by at least a third."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the crew and their supervisor for agreement to film one changeover"
                - "List every element from the video with its time"
                - "Mark each element as internal or external with the crew"
                - "Trial the revised sequence on two shifts and time both"
            - name: Standard work and job breakdown sheets
              description: |-
                ## Purpose
                When three operators do the same job three ways, every improvement depends on who is on shift. Writing standard work with the best operator, in short steps with key points and reasons, gives a stable base to improve from and a way to train new staff quickly.

                ## Milestones
                1. The best current method for one job agreed with the operators who do it.
                2. A job breakdown sheet listing steps, key points and the reason for each key point.
                3. Two operators trained on the sheet and observed doing the job to standard.
                4. A review date set so operators can propose changes to the standard.

                ## Notes
                Standard work is the current best method, not a fixed rule. Say so out loud, or operators will read it as a stopwatch target.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A job breakdown sheet for one job is written with operators and two people have been trained and observed working to it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Watch three operators do the same job and note the differences"
                - "Agree the best method with the operators and their supervisor"
                - "Write the job breakdown sheet with steps, key points and reasons"
                - "Train two operators on the sheet and watch them run it"
            - name: Root cause sessions with operators
              description: |-
                ## Purpose
                Fix a defect or a stoppage on the symptom and it comes back next week. Running short root cause sessions at the point of the problem, with the operators involved, using a fishbone and repeated why questions, finds causes the data never shows and teaches the floor a habit it can keep.

                ## Milestones
                1. Three recurring problems chosen from the downtime or defect data.
                2. A root cause session held at the point of the problem for each, with the operators present.
                3. A tested root cause and a countermeasure recorded for each problem.
                4. Recurrence of each problem checked four weeks later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Three recurring problems each have a recorded root cause session, a countermeasure and a four-week recurrence check."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick three recurring problems from the downtime and defect data"
                - "Hold a thirty-minute session at the machine with the operators"
                - "Record the cause, the evidence and the countermeasure for each"
                - "Check each problem's recurrence four weeks after the fix"
            - name: Control charts for process stability
              description: |-
                ## Purpose
                Clients react to every bad day as if it were a crisis, and every good day as if it were a result. Learning to build and read a simple control chart separates common cause variation from special causes, and stops the team from chasing noise or claiming wins that are within the normal range.

                ## Milestones
                1. The difference between common and special cause variation explained in your own words.
                2. An individuals or XmR chart built for one KPI using at least twenty points.
                3. The chart's signals read and any special causes investigated.
                4. The chart added to the weekly KPI pack for one measure.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An XmR chart for one KPI with at least twenty points is built, its signals are investigated and it appears in the weekly pack."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a short introduction to XmR charts"
                - "Build an XmR chart for one KPI from twenty or more weeks"
                - "Investigate any point outside the control limits"
                - "Add the chart to the weekly KPI pack"
            - name: Spreadsheet capacity model for the line
              description: |-
                ## Purpose
                Clients ask what happens if demand rises fifteen percent, if a shift is added or if a machine is replaced, and a simple capacity model answers in minutes. Building one from step cycle times, uptime, crewing and product mix, and checking it against actual output, gives the engagement a tool the client can keep using.

                ## Milestones
                1. Each step's cycle time, uptime and crewing entered by product family.
                2. The model's output for last month within about five percent of actual.
                3. Three scenarios run: demand growth, an extra shift and a step improvement.
                4. A one-page guide so the site planner can update and run it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A capacity model that reproduces last month's output within about five percent is handed to the site planner with a one-page guide."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Enter cycle time, uptime and crewing for each step by product family"
                - "Check the model's monthly output against actual production"
                - "Run demand growth, extra shift and step improvement scenarios"
                - "Write the one-page guide and walk the planner through it"
            - name: Opportunity prioritisation with the client
              description: |-
                ## Purpose
                By the middle of diagnosis the team will have thirty or more ideas, and doing all of them at once spreads supervisors too thin. Scoring each opportunity on value, effort, risk and time to impact in a working session with client leaders produces a short list they own, not one the consultants handed over.

                ## Milestones
                1. Every opportunity written on one line with an estimated value and an owner area.
                2. Each scored on value, effort, risk and time to impact using agreed scales.
                3. A working session held where client leaders adjust and agree the scores.
                4. A short list of five to eight opportunities chosen for the next phase.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A scored list of opportunities exists and client leaders have agreed a short list of five to eight in a recorded session."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write every opportunity on one line with an estimated value"
                - "Score each on value, effort, risk and time to impact"
                - "Run a ninety-minute scoring session with client leaders"
                - "Record the agreed short list and send it round the same day"
            - name: Choosing the pilot line or area
              description: |-
                ## Purpose
                A pilot in the hardest area may fail for reasons unrelated to the idea, while a pilot in the easiest one convinces nobody. Choosing the pilot on representativeness, a willing supervisor, clean data and enough volume to see a result within six weeks makes the later rollout argument far easier.

                ## Milestones
                1. Three candidate areas compared on representativeness, leadership, data quality and volume.
                2. The supervisor of the preferred area has agreed to lead the pilot.
                3. A comparison area chosen for before and after measurement.
                4. The choice and its reasons recorded and agreed with the site director.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pilot area and a comparison area are chosen against four written criteria, with the supervisor and site director agreeing in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List three candidate pilot areas with volume and data quality"
                - "Talk to each candidate area's supervisor about leading a pilot"
                - "Pick a comparison area that runs similar work"
                - "Record the decision and reasons and send to the site director"
            - name: Floor pilot design and measurement plan
              description: |-
                ## Purpose
                Pilots fail to persuade when nobody agreed in advance what success looked like or how long to run. A one-page design with the change, the hypothesis, the measures, the comparison, the run length and the stop rules turns the pilot into a fair test the client will accept whatever the outcome.

                ## Milestones
                1. The change being tested described in operational terms, including who does what differently.
                2. A hypothesis with the expected movement in one or two KPIs.
                3. Run length, comparison method and minimum volume written down.
                4. Stop rules for safety, quality or service problems agreed.
                5. The design signed off by the site director and the pilot supervisor.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page pilot design with hypothesis, measures, comparison, run length and stop rules is signed by the site director before the pilot starts."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the change in terms of who does what differently"
                - "State the hypothesis and the expected KPI movement"
                - "Set the run length, comparison and stop rules"
                - "Get the design signed by the site director and pilot supervisor"
            - name: Pilot area layout and 5S reset
              description: |-
                ## Purpose
                Searching for tools, walking to fetch parts and working around clutter can take a large share of an operator's shift, and none of it shows in the system data. A spaghetti diagram before and after, with a 5S reset done by the area team, makes the gain visible and creates a cell that looks different from the rest of the floor.

                ## Milestones
                1. A spaghetti diagram of one operator's movements over an hour, before the change.
                2. Sort, set in order and shine done by the area team with the supervisor.
                3. Tool and material locations marked and a standard for the area photographed.
                4. A repeat spaghetti diagram showing the distance walked after the change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Before and after spaghetti diagrams show the change in walking distance, and a photographed area standard is posted in the cell."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draw a spaghetti diagram of one operator over an hour"
                - "Plan the 5S reset with the area supervisor and team"
                - "Mark locations and photograph the new area standard"
                - "Repeat the spaghetti diagram two weeks after the reset"
            - name: Planned maintenance versus breakdown review
              description: |-
                ## Purpose
                Sites running mostly on breakdowns lose capacity at the worst moments, and the maintenance team is usually too busy firefighting to change that. Reviewing the share of planned against reactive work, the backlog and the repeat failures on the constraint gives a fact base for rebalancing that the maintenance lead can support.

                ## Milestones
                1. Planned and reactive maintenance hours split for the last six months.
                2. The top ten repeat failures on the constraint listed with downtime.
                3. A preventive task list drafted for the top three failure modes with the maintenance lead.
                4. The planned share of maintenance tracked monthly after the change.

                ## Notes
                Any change to maintenance tasks goes through the site's own maintenance and engineering approvals. Consultants propose; the site's engineers decide.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A six-month planned versus reactive split and a preventive plan for the top three failure modes are agreed with the maintenance lead."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pull six months of work orders split by planned and reactive"
                - "List the top ten repeat failures on the constraint"
                - "Draft preventive tasks for the top three with the maintenance lead"
                - "Track the planned share of maintenance hours @recurring(monthly:8)"
            - name: Work in progress limits and a kanban loop
              description: |-
                ## Purpose
                Excess work in progress hides problems and stretches lead time, and lowering it exposes the issues the plant has been working around. Setting a limit and a pull signal between two steps, starting generously and tightening it, shows the client in a few weeks how lead time follows inventory.

                ## Milestones
                1. Work in progress counted between two steps for two weeks to set a starting limit.
                2. A pull signal agreed, such as cards, marked floor squares or bins.
                3. The limit tightened at least once after problems exposed were fixed.
                4. Lead time through the loop measured before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A kanban loop with a written limit runs between two steps and lead time through it is measured before and after."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Count work in progress between the two chosen steps for two weeks"
                - "Agree the pull signal and starting limit with both supervisors"
                - "Count work in progress at the bottleneck and compare with the limit @recurring(weekly:wed)"
                - "Measure lead time through the loop before and after"
            - name: Capital versus operating fix comparison
              description: |-
                ## Purpose
                Plant teams tend to ask for a new machine when the existing one runs at sixty percent effectiveness. Setting out, for each capacity gap, what operating fixes could deliver and what a capital option would add makes the decision honest and keeps capital requests for the gaps operating changes cannot close.

                ## Milestones
                1. Each capacity gap stated in units per week against demand.
                2. The capacity available from operating fixes estimated with the evidence behind it.
                3. Capital options costed with the client's engineering team, with lead times.
                4. A side-by-side comparison taken to the site director for a decision.

                ## Notes
                Keep the comparison operational. Investment appraisal and accounting treatment belong to the client's finance team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side comparison of operating and capital options for each capacity gap is presented and the client's decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "State each capacity gap in units per week against demand"
                - "Estimate what operating fixes could add for each gap"
                - "Ask client engineering for capital option costs and lead times"
                - "Present the comparison to the site director and record the decision"
            - name: Translating throughput gains into value
              description: |-
                ## Purpose
                A ten percent throughput gain is worth very different amounts depending on whether the site is sold out, can cut overtime or can avoid a new shift. Working out with the client's finance partner how each operational gain turns into money, and on what conditions, stops the team from claiming value the business will never see.

                ## Milestones
                1. Each operational gain matched to one value route: more sales, less overtime, avoided cost or less inventory.
                2. The conditions for each route written down, such as demand being available.
                3. Value estimated with the client finance partner using their numbers.
                4. Gains with no realistic value route marked as capacity released, not savings.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each operational gain has a written value route and condition, and the estimates are agreed with the client's finance partner."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each operational gain and its likely value route"
                - "Write the condition each value route depends on"
                - "Book an hour with the client finance partner to agree estimates"
                - "Ask the agent to draft the value summary from the agreed figures"
            - name: Kaizen week on the constraint
              description: |-
                ## Purpose
                A focused improvement week, with a cross-functional client team released from their normal jobs, can change a process faster than months of meetings. It needs careful preparation: a narrow scope, baseline data, the right people freed up, maintenance on standby and a report-out the site director attends.

                ## Milestones
                1. A charter with a narrow scope, a target and a team of six to eight client staff.
                2. Baseline data and the current-state map ready before day one.
                3. Changes trialled on the floor during the week, not just planned.
                4. A report-out to the site director with results and an open actions list.

                ## Notes
                Release the team properly. A kaizen week where people keep returning to their day jobs produces a plan, not a change.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kaizen week runs with a released client team, trials changes on the floor and ends with a report-out attended by the site director."
                cadence: one-shot
                effort_hours_estimate: "45"
              tasks:
                - "Write the kaizen charter with scope, target and team"
                - "Agree release of each team member with their manager"
                - "Book maintenance and engineering support for the week"
                - "Schedule the report-out with the site director"
            - name: Pilot launch day on the floor
              description: |-
                ## Purpose
                The first shift of a pilot sets the tone: if materials are missing or the new layout confuses people, operators decide in an hour that the change does not work. A launch plan with briefings for every shift, the team present on each shift for the first days and a clear escalation route gives the pilot a fair start.

                ## Milestones
                1. Every shift briefed on what changes, why and who to call.
                2. Materials, tools, signage and work instructions in place the day before.
                3. A consultant and a client lead on the floor for each shift in the first three days.
                4. Launch risks logged with an owner and a fallback for each.

                ## Notes
                Start from the **Risk register** template. Include a fallback to the old method for any change that could stop the line.
              priority: high
              deadlineOffsetDays: 50
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The pilot starts with every shift briefed, materials in place and team cover on every shift for the first three days."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write a launch checklist covering materials, tools, signs and instructions"
                - "Brief each shift in its start-of-shift meeting"
                - "Build a cover rota so a team member is on every shift for three days"
                - "Log launch risks and fallbacks with owners"
            - name: Mid-engagement results review with plant leadership
              description: |-
                ## Purpose
                Halfway through, plant leaders need to see whether early pilots are delivering and decide what scales next, and the team needs to know whether the target is still realistic. A review built on the pilot logs, the baseline and frank risks protects the second half from wishful planning.

                ## Milestones
                1. Pilot results against baseline and comparison shown with normal variation.
                2. Progress against the engagement target stated honestly, with a forecast.
                3. Decisions requested listed: which pilots to scale, stop or extend.
                4. Decisions and new actions recorded and circulated within two days.
              priority: medium
              deadlineOffsetDays: 70
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A mid-engagement review is held with plant leadership, decisions on each pilot are recorded and circulated within two days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull pilot logs and the baseline into one results page"
                - "Write the forecast against the engagement target"
                - "List the scale, stop or extend decision needed for each pilot"
                - "Circulate decisions and actions within two days of the review"
            - name: Handover to client process owners
              description: |-
                ## Purpose
                Results that depend on consultants being on the floor disappear when they leave. A formal handover where each improvement has a named client owner, a written standard, a KPI they review and an audit they run makes the client the owner in fact, not only on a slide.

                ## Milestones
                1. Every improvement listed with a named client owner who has accepted it.
                2. Standards, audit checklists and KPI definitions handed over in the client's own folders.
                3. Each owner has run at least two audits and one tier meeting review without the team.
                4. A handover session held where each owner presents their area to the site director.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every improvement has a named client owner who has run audits unaided and presented their area at a handover session."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List each improvement with a proposed client owner"
                - "Move standards and checklists into the client's own folders"
                - "Watch each owner run an audit without team help"
                - "Schedule the handover session with the site director"
            - name: Thirty-day post-handover check
              description: |-
                ## Purpose
                Gains usually start to slip a month after the team leaves, often because a key supervisor moved or volumes changed. A short return visit, agreed in the contract or offered as goodwill, checks the KPIs and audits and gives owners a chance to raise what is not holding.

                ## Milestones
                1. The visit date agreed with the site director before the team leaves.
                2. KPIs for the thirty days compared with the pilot results and baseline.
                3. One sustainment audit observed for each owner's area.
                4. A short note of what is holding, what is slipping and suggested fixes sent to the director.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A return visit thirty days after handover is completed and a note on what is holding and slipping is sent to the site director."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the return visit date before the team leaves site"
                - "Ask each owner for their last thirty days of KPIs"
                - "Observe one sustainment audit in each area"
                - "Send the director a note on what is holding and slipping"
            - name: Night and weekend shift visits
              description: |-
                ## Purpose
                Consultants mostly see the day shift, while nights and weekends often run with fewer supervisors, different crews and very different results. Visiting each off shift at least twice shows whether the baseline and the pilots hold beyond the hours the client's leaders see.

                ## Milestones
                1. KPIs split by shift to show where the gaps are largest.
                2. Each night and weekend shift visited at least twice, with the shift lead's agreement.
                3. Differences in staffing, methods and support written down.
                4. Off-shift findings added to the opportunity list and the pilot design.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every off shift has been visited at least twice and its differences are recorded in the opportunity list."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Split the headline KPIs by shift from the baseline data"
                - "Agree night and weekend visits with each shift lead"
                - "Note staffing, method and support differences on each visit"
                - "Add the off-shift findings to the opportunity list"
            - name: First operations engagement for a strategy generalist
              description: |-
                ## Purpose
                Consultants who have spent two years on strategy slides often arrive at a plant unsure what a changeover is and worried about looking lost in front of operators. A short self-briefing plan on the industry's process, the vocabulary and the floor etiquette, plus a weekly reflection, closes the gap in the first month.

                ## Milestones
                1. A one-page glossary of the site's process terms built in the first week.
                2. A shadowing shift completed with an operator and a supervisor.
                3. Two operations practice experts or past engagement members spoken to.
                4. A weekly written reflection kept for the first eight weeks.

                ## Notes
                Operators will forgive not knowing; they will not forgive pretending. Ask them to show you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A site glossary, one shadowing shift, two expert conversations and eight weekly reflections are completed in the first two months."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Start a glossary of process terms heard on the first walk"
                - "Ask the site manager to arrange a shadowing shift with an operator"
                - "Book calls with two colleagues who have done operations work"
                - "Write a short reflection on what you learned on the floor @recurring(weekly:fri)"
            - name: Operations work with a unionised workforce
              description: |-
                ## Purpose
                On unionised sites, changes to job content, crewing or shift patterns may need consultation under the collective agreement, and worker representatives can make or break a pilot. Understanding the agreement's relevant terms from the client's HR and employee relations team, and involving representatives early, keeps the work legitimate and the floor on side.

                ## Milestones
                1. The client's employee relations lead briefed the team on which changes require consultation.
                2. Worker representatives introduced to the work and its purpose before any pilot.
                3. Each proposed change tagged by whether it needs consultation, with the client deciding.
                4. A regular update to representatives agreed and kept.

                ## Notes
                Never assume what the agreement allows. The client's employee relations or legal team decides what needs consultation.
              priority: medium
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "The client's employee relations lead has tagged every proposed change for consultation needs and representatives receive a monthly update."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the client's employee relations lead for a briefing on the agreement"
                - "Introduce the work to worker representatives with the site director"
                - "Tag each proposed change for consultation needs with the client"
                - "Give representatives a short progress update @recurring(monthly:3)"
            - name: Hospital patient flow engagements
              description: |-
                ## Purpose
                Patient flow work applies the same tools, value streams, bottlenecks and queues, to a setting where the product is a person and the staff are clinicians with their own professional standards. Admissions, theatre schedules and discharge delays need clinical leaders as co-owners and data governance that protects patient information.

                ## Milestones
                1. A clinical lead and an operational lead named as co-owners of the work.
                2. Patient data access agreed through the organisation's information governance process.
                3. One patient pathway mapped from arrival to discharge with waits measured.
                4. Discharge or theatre delays broken down by cause with clinical input.

                ## Notes
                Clinical decisions and safety thresholds belong to clinicians. Frame every change as a question for the clinical lead, and never observe care without their agreement.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A patient pathway map with measured waits and a cause breakdown of delays is agreed with the clinical and operational co-owners."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the sponsor to name a clinical and an operational co-owner"
                - "Request patient data access through information governance"
                - "Map one pathway from arrival to discharge with measured waits"
                - "Review flow and delay data with the clinical lead @recurring(weekly:thu)"
            - name: Back-office and shared service process improvement
              description: |-
                ## Purpose
                In claims, finance operations or customer service centres the inventory is invisible, sitting in queues in workflow systems and inboxes, and the floor walk becomes a desk walk. Making the work visible through volumes, handling times, rework and backlog ageing is the first step before any of the usual tools apply.

                ## Milestones
                1. Work types, volumes and handling times listed for each team in scope.
                2. Backlog by age band built from the workflow system.
                3. Rework and failure demand, such as chasing calls, measured as a share of volume.
                4. A visual board of daily work in and work out in use in at least one team.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Work types, handling times, backlog by age and failure demand are measured and a daily work board runs in at least one team."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the work types and volumes for each team from the workflow system"
                - "Build a backlog by age band chart"
                - "Sample a hundred items to measure rework and failure demand"
                - "Review the work in and work out board with the team lead @recurring(weekly:mon)"
            - name: Warehouse and distribution centre engagements
              description: |-
                ## Purpose
                Distribution centres run on pick rates, travel distance, slotting and dock schedules, and the peaks are seasonal and sharp. Understanding how orders are released, how pickers travel and where trucks wait shows where productivity is lost before anyone talks about automation.

                ## Milestones
                1. Lines picked per hour measured by zone and picker for four weeks.
                2. Travel distance per order estimated from the slotting and order profile.
                3. Dock arrivals and dwell times charted against the shift pattern.
                4. Three productivity opportunities sized, at least one without capital spend.

                ## Notes
                Forklift and vehicle routes are high-risk areas. Walk them only with an escort and in marked walkways.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Pick rates by zone, travel distance per order and dock dwell times are measured and three sized opportunities are agreed with the site."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pull four weeks of pick data by zone and picker"
                - "Estimate travel distance per order from the slotting map"
                - "Chart dock arrivals and dwell times against shifts"
                - "Size three opportunities and review them with the site manager"
            - name: Multi-site rollout from a lighthouse site
              description: |-
                ## Purpose
                Once one site has proven the improvements, the client wants them everywhere, and copying a playbook rarely works because sites differ in mix, culture and leadership. A rollout that adapts the method to each site, uses lighthouse site staff as coaches and sequences sites by readiness spreads results without the consultant team multiplying.

                ## Milestones
                1. A playbook from the lighthouse site separating what must be the same from what may vary.
                2. Each further site scored on readiness and sequenced into waves.
                3. Lighthouse site staff assigned as coaches to the first wave.
                4. Wave one sites with their own baselines and pilot results.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A rollout playbook, a readiness-based wave plan and wave one baselines and pilot results exist, with lighthouse staff coaching."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Split the lighthouse method into fixed and adaptable parts"
                - "Score each site on readiness and draft the wave plan"
                - "Assign lighthouse staff as coaches for wave one"
                - "Review wave progress with the network operations lead @recurring(monthly:20)"
            - name: Operations maturity diagnostic across a network
              description: |-
                ## Purpose
                Executives running ten or twenty sites want to know which are strong, which are weak and where to send scarce improvement resources. A consistent diagnostic, scoring each site on performance management, standard work, problem solving, maintenance and capability with the same evidence rules, gives a comparable picture across the network.

                ## Milestones
                1. A scoring framework with five to seven dimensions and evidence rules for each level.
                2. Assessors calibrated by scoring the same site together.
                3. Every site in scope assessed within one window.
                4. A network view with each site's profile and the three priorities per site.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "All sites in scope are scored on a calibrated framework within one window, and each has three written priorities."
                cadence: cyclic
              tasks:
                - "Draft the diagnostic dimensions and evidence rules"
                - "Calibrate assessors by scoring one site together"
                - "Schedule site assessments in a single window"
                - "Rerun the diagnostic to show movement across the network @recurring(quarterly)"
            - name: Building the client's internal lean coaches
              description: |-
                ## Purpose
                The best sign an operations engagement worked is that the client no longer needs the consultants. Selecting and training a small group of internal coaches, giving them real projects under supervision and certifying them against observable skills leaves the capability behind after the team leaves.

                ## Milestones
                1. Four to eight coach candidates selected with their managers' commitment of time.
                2. A skills matrix of the tools and behaviours each coach must show.
                3. Each candidate has led one real improvement under supervision.
                4. Coaches assessed against the matrix, with gaps assigned to a development plan.

                ## Notes
                Start from the **Skills matrix** template. Protect the coaches' time in writing; a coach role added to a full job tends to vanish within a quarter.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least four internal coaches have led a supervised improvement and been assessed against a written skills matrix."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree coach selection criteria and time commitment with the site director"
                - "Build the coach skills matrix from the tools used on the engagement"
                - "Assign each coach a real improvement to lead under supervision"
                - "Hold a coaching review with each internal coach @recurring(monthly:15)"
---

# Operations Improvement Engagements

Operations improvement work is won or lost on the floor, not in the team room: you have to see the process, measure it honestly, find the constraint and then change how a shift actually runs, with the people who run it. This area starts with foundations (scope and KPI definitions, safety induction, the operational data pull, a measured baseline, the first process walk and a current-state value stream map), then the routines that run through the engagement, the analytical skills of time studies, bottleneck analysis, OEE loss trees, changeover reduction and standard work, the decisions about which opportunities and which pilot line, the dated events from kaizen week to handover, variants for hospitals, back offices, warehouses, unionised sites and multi-site rollouts, and finally network diagnostics and building the client's own coaches.

The rhythm is floor time on Tuesdays and Thursdays, tier meeting observation on Mondays and Wednesdays, a Friday KPI pack for site leadership, weekly pilot logs and safety rounds, and monthly sustainment audits and data refreshes. The Metrics log, Operational checklist, Risk register and Skills matrix templates pair with the baseline, the sustainment audit, the pilot launch and the client coach programme. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
