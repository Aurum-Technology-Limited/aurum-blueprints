---
id: software-engineering.sprint-planning-estimation
name: Sprint Planning & Estimation
description: "Tickets that are ready before planning, an estimation method the team trusts, sprint commitments sized to real capacity and forecasts given as ranges rather than promises."
category: business
version: 1.0.0
tags: [software-engineering, sprint-planning-estimation, engineer, team, agile, estimation, backlog-refinement, forecasting]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - product-spec
    - risk-register
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sprint Planning & Estimation
          description: "Breaking work into tickets, estimating effort, committing to sprints and improving predictability without turning estimates into promises."
          projects:
            - name: Sprint length and planning day decision
              description: |-
                ## Purpose
                Teams that drift between one, two and three week sprints never build a velocity worth reading, because every number is measured against a different yardstick. Choosing one length, one planning day and one review day, and holding them for at least six sprints, gives every later estimate and forecast in this area a stable base.

                ## Milestones
                1. Sprint length chosen, with the reason written in two sentences.
                2. Planning, review and retrospective days fixed on the shared team calendar.
                3. Public holidays and release freezes for the next six months marked against the sprint calendar.
                4. The team agreed not to change the length again for at least six sprints.

                ## Notes
                Two weeks is the common default. One week suits teams with lots of interrupts; three or four weeks usually hides problems until it is too late to react.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded sprint length and fixed planning, review and retrospective days are on the team calendar for the next six sprints."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count how many sprint lengths the team has used in the last six months"
                - "Propose one length and one planning day in the team channel"
                - "Book recurring planning, review and retrospective slots for six sprints"
                - "Mark public holidays and freeze weeks against each sprint"
            - name: Definition of ready for incoming tickets
              description: |-
                ## Purpose
                Half the time lost in planning goes on tickets nobody can estimate: no acceptance criteria, an open design question, a dependency on another team. A short definition of ready, checked during refinement, keeps those tickets out of the sprint until they can be sized and started on day one.

                ## Milestones
                1. A checklist of five to seven conditions a ticket must meet before it can enter a sprint.
                2. Each condition tested against ten recent tickets to see how many would have passed.
                3. The checklist pinned in the tracker and added to the ticket template.
                4. Product owner and engineers agreed that unready tickets wait rather than slip in.

                ## Notes
                Keep it short. A definition of ready with fifteen items becomes a gate nobody passes, and the team quietly stops using it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A definition of ready of no more than seven conditions is published in the tracker and applied to every ticket in the next two refinement sessions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull ten tickets that stalled or were sent back in the last two sprints"
                - "Note what was missing from each when work started"
                - "Draft five to seven ready conditions from those gaps"
                - "Agree the checklist with the product owner and pin it in the tracker"
            - name: Team definition of done everyone signs
              description: |-
                ## Purpose
                When one engineer counts a ticket as done at merge and another waits for production, velocity measures nothing and carry-over hides in plain sight. Writing a single definition of done covering code review, tests, documentation and deployment makes every point the team reports mean the same thing.

                ## Milestones
                1. A definition of done covering review, automated tests, documentation, deployment and product sign-off.
                2. Each item phrased so anyone can check it in under a minute.
                3. The definition agreed in a team meeting and linked from every sprint board.
                4. Tickets in the next sprint closed only when every item is met.

                ## Notes
                If the team cannot yet deploy every ticket within the sprint, say so in the definition rather than pretending. Hidden undone work is the main reason forecasts slip.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written definition of done is linked from the sprint board, and every ticket closed in the following sprint meets all of its items."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each engineer when they consider a ticket finished"
                - "Write one definition that covers review, tests, docs and deployment"
                - "Link the definition from the sprint board header"
                - "Reread the definition of done with the team and update it @recurring(quarterly)"
            - name: One ordered backlog with a single owner
              description: |-
                ## Purpose
                Requests that live in chat threads, a spreadsheet and three tracker projects cannot be planned, because nobody can see what is really next. Pulling everything into one backlog, ordered top to bottom by one named person, turns planning from a negotiation into a conversation about the top fifteen items.

                ## Milestones
                1. Every open request moved into one tracker project or board.
                2. One person named as the owner of the order, with a deputy for absences.
                3. The backlog ordered strictly, with no two items sharing the same rank.
                4. Duplicates and requests older than a year closed with a comment.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All open work sits in a single strictly ordered backlog owned by one named person, with the top twenty items reordered every week."
                cadence: rolling
              tasks:
                - "List every place the team currently receives work requests"
                - "Move open requests from those places into one backlog"
                - "Name the backlog owner and a deputy in the team charter"
                - "Reorder the top twenty backlog items with the product owner @recurring(weekly:tue)"
            - name: Ticket template with acceptance criteria
              description: |-
                ## Purpose
                Estimates are only as good as the ticket being estimated, and a one-line title invites five engineers to imagine five different pieces of work. A ticket template with a user outcome, acceptance criteria, out-of-scope notes and known risks gives everyone in planning the same picture before anyone holds up a card.

                ## Milestones
                1. A ticket template with sections for outcome, acceptance criteria, out of scope, risks and links.
                2. The template set as the default for stories and tasks in the tracker.
                3. Five existing backlog tickets rewritten in the template as examples.
                4. The team agreed that tickets without acceptance criteria are not estimated.

                ## Notes
                For larger features, start from the **Product spec** template and link the spec from each child ticket rather than copying it in.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The tracker's default ticket template includes acceptance criteria and out-of-scope sections, and five backlog tickets are rewritten in it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a ticket template with outcome, acceptance criteria, scope and risks"
                - "Set the template as the default in the tracker"
                - "Rewrite the top five backlog tickets in the new format"
                - "Show the before and after versions at the next refinement"
            - name: Choosing the estimation unit for the team
              description: |-
                ## Purpose
                Story points, ideal days, T-shirt sizes and simple ticket counts all work, but mixing them, or switching every quarter, makes history useless. Comparing the options against how your team is asked for dates, then picking one and writing down why, ends the recurring argument and lets the numbers accumulate.

                ## Milestones
                1. Four options compared: story points, ideal days, T-shirt sizes and counting tickets.
                2. Each option scored on effort to estimate, usefulness for forecasting and risk of being read as a promise.
                3. One unit chosen, with the scale written down, such as a modified Fibonacci series.
                4. The decision and its reasons recorded where new joiners will find it.

                ## Notes
                Whatever unit you choose, never convert points to hours for reporting. The moment points become hours, they become promises.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names one estimation unit and its scale, with reasons, and the team uses only that unit from the next sprint."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down how stakeholders currently ask the team for dates"
                - "Score points, ideal days, T-shirt sizes and ticket counts on three criteria"
                - "Choose one unit and the exact scale the team will use"
                - "Record the decision and reasoning in the team handbook"
            - name: Reference stories for relative sizing
              description: |-
                ## Purpose
                Relative estimation drifts when the team has nothing to compare against, and a three gradually becomes what used to be a five. Picking a small set of finished tickets as anchors, one for each size on the scale, gives every planning session a shared ruler and lets new joiners calibrate in a week.

                ## Milestones
                1. One completed ticket chosen as the anchor for each value on the scale.
                2. Each anchor annotated with why it got that size: unknowns, effort and risk.
                3. The anchors listed on a single page linked from the planning board.
                4. Anchors checked once a quarter and replaced if the codebase has moved on.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page set of reference stories, one per scale value with notes, is linked from the planning board and used in the next three planning sessions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull twenty finished tickets the team remembers well"
                - "Agree one anchor ticket for each value on the scale"
                - "Write two lines on each anchor explaining its size"
                - "Check the anchors still represent current work @recurring(quarterly)"
            - name: Velocity baseline from the last six sprints
              description: |-
                ## Purpose
                Most teams commit to what they hope to finish rather than what they have finished. Pulling completed work from the last six sprints, with the range and not just the average, gives an honest starting number for the next commitment and the first real input to any forecast.

                ## Milestones
                1. Completed points or ticket counts for each of the last six sprints in one table.
                2. Sprints with unusual capacity, such as holidays or incidents, flagged.
                3. The median, lowest and highest sprint calculated.
                4. The next sprint commitment set at or below the median.

                ## Notes
                Record the numbers in the **Metrics log** template. If the team has fewer than six sprints of history, use what exists and widen the range.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of six sprints of completed work with median, low and high is recorded, and the next commitment is set at or below the median."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Export completed work for the last six sprints from the tracker"
                - "Flag sprints affected by holidays, incidents or team changes"
                - "Calculate the median, lowest and highest completed totals"
                - "Share the range with the team before the next planning session"
            - name: Team capacity calendar for leave and on-call
              description: |-
                ## Purpose
                Planning a sprint as if all six engineers are present, when two are on leave and one is on call, fails on the first morning. A shared capacity calendar showing leave, training, on-call and public holidays lets planning start from available person-days instead of a headcount.

                ## Milestones
                1. A shared calendar or sheet with leave, on-call, training and holidays for every engineer.
                2. A simple formula turning available days into a share of normal capacity.
                3. Capacity for the next sprint shown at the top of the planning agenda.
                4. Engineers updating their own entries without reminders.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every planning session opens with a capacity figure taken from a calendar that covers leave, on-call, training and holidays for the whole team."
                cadence: rolling
              tasks:
                - "Set up a shared capacity sheet with one row per engineer"
                - "Add the on-call rota and public holidays for the next three months"
                - "Show the capacity percentage at the top of the planning agenda"
                - "Ask everyone to add new leave and training to the capacity sheet @recurring(monthly:24)"
            - name: Weekly backlog refinement session
              description: |-
                ## Purpose
                Planning meetings run long when the team is reading tickets for the first time. A standing refinement session, an hour a week with the product owner and two or three engineers, keeps the next two sprints of work ready, estimated and split before anyone walks into planning.

                ## Milestones
                1. A weekly one-hour refinement slot with a rotating pair of engineers.
                2. At least two sprints of ready, estimated work at the top of the backlog.
                3. Open questions from refinement assigned and answered before the next session.
                4. Planning sessions finishing inside their timebox for three sprints running.

                ## Notes
                Rotate engineers so knowledge spreads, but keep one person who knows the area in every session.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The backlog holds at least two sprints of ready, estimated tickets at every planning session for a full quarter."
                cadence: rolling
              tasks:
                - "Book a recurring one-hour refinement slot with the product owner"
                - "Set a rota so two engineers attend each session"
                - "Run refinement on the next items below the ready line @recurring(weekly:wed)"
                - "Track open questions from refinement as subtasks with owners"
            - name: Timeboxed sprint planning meeting
              description: |-
                ## Purpose
                Two-hour planning meetings that drag into a third hour are usually a refinement session in disguise. Giving planning a fixed agenda (capacity, sprint goal, pull work to the forecast, break down, confirm) and a timebox of about two hours for a two-week sprint makes it a decision meeting the team does not dread.

                ## Milestones
                1. A written planning agenda with times against each section.
                2. Capacity and the velocity range presented in the first ten minutes.
                3. A sprint goal agreed before tickets are pulled in.
                4. Three consecutive planning sessions finished within the timebox.

                ## Notes
                Capture the goal, commitment and open risks with the **Meeting notes** template so the review can compare plan with outcome.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Planning follows a written agenda, ends within its timebox and produces a recorded sprint goal and commitment for three sprints in a row."
                cadence: cyclic
              tasks:
                - "Write a planning agenda with timings for each section"
                - "Send capacity and the velocity range to the team a day before planning"
                - "Agree the sprint goal before pulling any tickets"
                - "Note what overran after each planning and adjust the agenda"
            - name: Mid-sprint scope and risk check
              description: |-
                ## Purpose
                Most sprints are lost quietly in the middle, when a ticket turns out three times bigger and nobody says so until the review. A fifteen-minute check halfway through, looking only at the sprint goal and the riskiest tickets, gives the team time to swap work out instead of explaining afterwards why it slipped.

                ## Milestones
                1. A fifteen-minute slot halfway through each sprint, separate from the stand-up.
                2. The sprint goal and the three riskiest tickets reviewed every time.
                3. Any scope swap agreed with the product owner and noted on the board.
                4. Fewer than one sprint in four ending with the goal missed by surprise.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A mid-sprint check happens in every sprint for a quarter, and any scope changes it triggers are recorded on the board."
                cadence: rolling
              tasks:
                - "Add a fifteen-minute scope check to the middle of the sprint"
                - "Review the sprint goal and the three riskiest tickets in the check @recurring(weekly:thu)"
                - "Agree any swaps with the product owner on the spot"
                - "Label swapped tickets so they show in the retrospective"
            - name: Sprint review that compares plan with outcome
              description: |-
                ## Purpose
                Reviews that only demo finished features miss the most useful number in the room: how close the team got to its own plan. Opening each review with the sprint goal, the commitment and what actually shipped builds the habit of honest comparison, and gives stakeholders a calmer way to hear about slippage.

                ## Milestones
                1. Each review opens with the goal, the commitment and the completed total.
                2. Anything not finished is named, with a sentence on why.
                3. Stakeholder questions about dates answered with the current forecast range.
                4. Plan versus outcome recorded for every sprint in one running table.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every sprint review for a quarter opens with plan versus outcome, and the figures are added to one running table."
                cadence: cyclic
              tasks:
                - "Add a plan versus outcome slide to the review agenda"
                - "Fill in committed and completed totals before each review"
                - "Name unfinished tickets and the reason in one sentence each"
                - "Append the figures to the running plan versus outcome table"
            - name: Retrospective focused on predictability
              description: |-
                ## Purpose
                Generic retrospectives drift towards tooling complaints and lunch. Running one retrospective in every three around a single question, why the team finished more or less than it planned, surfaces the patterns that really move predictability: late-arriving requirements, under-sized testing, review queues.

                ## Milestones
                1. One retrospective in three dedicated to the gap between plan and outcome.
                2. Causes of the gap grouped into a short list of recurring themes.
                3. One concrete action chosen per retrospective, with an owner and a check date.
                4. The previous action reviewed at the start of each predictability retrospective.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three predictability retrospectives in a row each produce one owned action, and each action is checked at the following one."
                cadence: cyclic
              tasks:
                - "Bring the plan versus outcome table to the retrospective"
                - "Group the causes of each gap into themes on a shared board"
                - "Choose one predictability action and name its owner"
                - "Check progress on the latest predictability action @recurring(monthly:26)"
            - name: Carry-over log for unfinished tickets
              description: |-
                ## Purpose
                Tickets that roll from sprint to sprint are the clearest signal that estimates or slicing are off, yet most trackers quietly reset them. Logging every carried ticket, with how many sprints it has rolled and why, shows whether the problem is size, dependencies or interruptions.

                ## Milestones
                1. A log with ticket, original estimate, sprints carried and reason.
                2. A label in the tracker that marks carried tickets automatically or by hand.
                3. A monthly summary of carry-over by cause.
                4. Any ticket carried three times split or sent back to refinement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A carry-over log is updated every sprint, and no ticket has been carried more than three sprints without being split or refined again."
                cadence: rolling
              tasks:
                - "Create a carried-over label in the tracker"
                - "Start a carry-over log with ticket, estimate, sprints carried and cause"
                - "Summarise carry-over by cause and share it with the team @recurring(monthly:8)"
                - "Send any ticket carried three times back to refinement"
            - name: Unplanned work and interrupt tracking
              description: |-
                ## Purpose
                Production fixes, urgent requests from sales and help for other teams eat into every sprint, and if nobody counts them the team looks slow when it is really busy. Tagging unplanned work as it lands, and totalling it weekly, shows how much capacity the sprint really has and gives the team evidence when it asks for protection.

                ## Milestones
                1. An unplanned label used on every interrupt ticket, created at the moment it arrives.
                2. A weekly total of unplanned tickets and time, by source.
                3. A monthly chart showing unplanned work as a share of capacity.
                4. The next sprint commitment adjusted by the average unplanned share.

                ## Notes
                Interrupts that arrive in chat count too. Create a ticket for anything over thirty minutes, even after the fact.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Unplanned work is tagged and totalled every week for two months, and planning uses its average share to set the commitment."
                cadence: rolling
              tasks:
                - "Create an unplanned label and explain it in the team channel"
                - "Tally unplanned tickets and hours by source @recurring(weekly:fri)"
                - "Chart unplanned work as a share of capacity for the month @recurring(monthly:28)"
                - "Reduce the next commitment by the average unplanned share"
            - name: Monthly roadmap forecast refresh
              description: |-
                ## Purpose
                Dates given in January and never revisited become promises by March. Refreshing the forecast for each major roadmap item monthly, using current throughput and remaining scope, means stakeholders hear about drift in small steps instead of one bad surprise.

                ## Milestones
                1. Each roadmap item listed with remaining scope in tickets or points.
                2. A forecast range, earliest likely to latest likely, worked out from recent throughput.
                3. Changes since the last forecast highlighted with the reason.
                4. The refreshed forecast sent to stakeholders in the same format every month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A forecast range for every roadmap item is refreshed and sent to stakeholders in the same format every month for a quarter."
                cadence: rolling
              tasks:
                - "List roadmap items with their remaining scope"
                - "Recalculate the forecast range for each item from recent throughput @recurring(monthly:12)"
                - "Ask the agent to draft a short stakeholder note highlighting changes"
                - "Send the forecast note to stakeholders and file it with past versions"
            - name: Estimate accuracy review
              description: |-
                ## Purpose
                Without looking back, teams never learn which kinds of work they underestimate. Comparing estimate with cycle time for the month's closed tickets, grouped by type, usually reveals one or two consistent blind spots, such as anything touching the payments service or any ticket involving a migration.

                ## Milestones
                1. Closed tickets for the month exported with estimate, type and cycle time.
                2. Cycle time spread shown for each estimate size.
                3. The work types with the widest spread named.
                4. One change to refinement agreed for the worst blind spot.

                ## Notes
                Look at the spread, not individual misses. A five that took twice as long is normal; fives that range from one day to three weeks mean the size is not telling you anything.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A monthly comparison of estimate size and cycle time is recorded for three months, with one refinement change agreed from it."
                cadence: rolling
              tasks:
                - "Export last month's closed tickets with estimate, type and cycle time"
                - "Plot cycle time against estimate size for the month @recurring(monthly:20)"
                - "Name the work types with the widest spread"
                - "Agree one refinement change for the worst blind spot"
            - name: Stale ticket sweep for backlog hygiene
              description: |-
                ## Purpose
                Eight hundred open tickets are not a plan, they are an archive nobody dares delete. Sweeping monthly for tickets untouched in ninety days, and closing or rewriting them, keeps the backlog short enough to order and makes refinement time go to work that might actually happen.

                ## Milestones
                1. A saved filter for tickets untouched in ninety days.
                2. Each stale ticket closed, merged or rewritten in the ticket template.
                3. Backlog size below an agreed ceiling, such as three months of work.
                4. Closed tickets left searchable so nothing is truly lost.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The backlog stays below its agreed ceiling for a quarter, and no open ticket is older than ninety days without an update."
                cadence: rolling
              tasks:
                - "Save a filter for backlog tickets untouched in ninety days"
                - "Close, merge or rewrite each stale ticket @recurring(monthly:5)"
                - "Agree a backlog ceiling with the product owner"
                - "Archive whole epics that have had no activity for two quarters @recurring(quarterly)"
            - name: Splitting stories into thin vertical slices
              description: |-
                ## Purpose
                Big tickets are where estimates fail, and the usual fix, splitting by layer into a backend ticket and a frontend ticket, produces pieces that cannot be shipped or tested alone. Practising vertical splitting patterns (by workflow step, by business rule, by data variation, happy path first) lets the team turn a thirteen into three twos that each deliver something.

                ## Milestones
                1. Five splitting patterns written up with one example each from your own product.
                2. Three large backlog tickets split in a practice session.
                3. Every resulting slice deliverable and testable on its own.
                4. The patterns added to the refinement checklist.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three large backlog tickets are split into vertical slices that each meet the definition of done, using patterns written up for the team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a short guide to story splitting patterns"
                - "Pick three backlog tickets estimated at the top of the scale"
                - "Run a forty-five minute splitting practice with two engineers"
                - "Add the five patterns to the refinement checklist"
            - name: Planning poker that avoids anchoring
              description: |-
                ## Purpose
                Estimation sessions where the senior engineer speaks first produce the senior engineer's estimate, with extra steps. Running planning poker properly (simultaneous reveal, highest and lowest explain, re-vote once, then move on) brings out the hidden risks that a junior tester or a new joiner can see.

                ## Milestones
                1. The team using simultaneous reveal for every estimate, in person or with a remote tool.
                2. Outliers explaining their reasoning before any re-vote.
                3. A rule of at most two rounds, with the larger value taken if still split.
                4. Average estimation time per ticket under five minutes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three refinement sessions in a row use simultaneous reveal with outlier explanations and average under five minutes per ticket."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose a deck or remote estimation tool the team can use"
                - "Explain the reveal, explain, re-vote rule at the start of refinement"
                - "Time how long each ticket takes to estimate in the next session"
                - "Note risks raised by outliers on the ticket itself"
            - name: Acceptance criteria written as examples
              description: |-
                ## Purpose
                Vague criteria such as 'works on mobile' hide most of the work in the gaps. Writing criteria as concrete examples, in a given, when, then shape or a simple table of inputs and expected results, flushes out edge cases during refinement, when they cost minutes, rather than during testing, when they cost days.

                ## Milestones
                1. The team practised rewriting five vague criteria as concrete examples.
                2. A short guide with good and bad criteria from your own tickets.
                3. Every ticket entering the sprint carrying at least three example-based criteria.
                4. Testers confirming fewer surprises found late in the sprint.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For two sprints, every ticket entering the sprint has at least three acceptance criteria written as concrete examples."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect five vague acceptance criteria from recent tickets"
                - "Rewrite each as given, when, then examples with a tester"
                - "Write a one-page guide showing the before and after versions"
                - "Check criteria against the guide during refinement for two sprints"
            - name: Timeboxed spikes for unknown work
              description: |-
                ## Purpose
                Some tickets cannot be estimated because nobody knows how the third-party API behaves or whether the old library can be upgraded. A spike with a fixed timebox and a written question to answer turns that fog into an estimate, without becoming a fortnight of open-ended exploration.

                ## Milestones
                1. A spike ticket format with the question, the timebox and the expected output.
                2. Spikes capped at one or two days and estimated by their timebox alone.
                3. Every finished spike producing either an estimate or a recommendation not to proceed.
                4. Spike findings linked from the tickets they unblocked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every spike in a quarter has a written question and timebox, and each ends with an estimate or a recorded decision not to proceed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a spike ticket format with question, timebox and output"
                - "Turn the next unestimable ticket into a spike"
                - "Stop the spike at its timebox and write up what was learned"
                - "Link the spike write-up from the tickets it unblocks"
            - name: Monte Carlo forecasting from throughput
              description: |-
                ## Purpose
                Averages lie about delivery dates, because half the time you finish later than the average says. Running a simple Monte Carlo simulation over past weekly throughput gives answers like 'eighty-five percent likely by 14 March', which are both more honest and easier for stakeholders to plan around.

                ## Milestones
                1. Twelve or more weeks of throughput, tickets finished per week, collected.
                2. A spreadsheet or tool that samples past weeks to forecast remaining work.
                3. A forecast at fifty, seventy and eighty-five percent confidence for one real item.
                4. The forecast compared with the actual finish once the item ships.

                ## Notes
                Ticket counts work surprisingly well here once tickets are sliced to a similar size. You do not need story points for this method.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One real roadmap item has a Monte Carlo forecast at three confidence levels, later compared with its actual finish date."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Export weekly throughput for the last twelve weeks"
                - "Build or adopt a Monte Carlo spreadsheet that samples past weeks"
                - "Forecast one roadmap item at fifty, seventy and eighty-five percent"
                - "Record the forecast so it can be checked against the real finish"
            - name: Three-point estimates for larger pieces of work
              description: |-
                ## Purpose
                When someone asks how long a whole feature will take, a single number hides the uncertainty that everyone in the room feels. Asking for optimistic, likely and pessimistic figures, and combining them with a simple weighted formula, produces a range that shows where the risk is and why.

                ## Milestones
                1. The team practised giving optimistic, likely and pessimistic figures for three features.
                2. A sheet that turns three-point inputs into an expected value and a range.
                3. The widest ranges traced back to a named risk or unknown.
                4. Three-point figures used in the next feature-level estimate requested by stakeholders.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The next feature-level estimate given to stakeholders is a three-point range with the main risks behind its width written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick three features the team has been asked to size"
                - "Collect optimistic, likely and pessimistic figures from each engineer"
                - "Combine them into an expected value and range in a sheet"
                - "Write the risk behind each wide range next to the figure"
            - name: Reading burn-up and cumulative flow charts
              description: |-
                ## Purpose
                Burndown charts show whether the sprint is on track, but they hide scope that keeps growing. Learning to read a burn-up chart, which shows scope and progress as separate lines, and a cumulative flow diagram, which shows where work queues up, tells the team whether it is slow or simply being handed more.

                ## Milestones
                1. A burn-up chart set up for the current release or epic, with scope shown separately.
                2. A cumulative flow diagram for the board, by column.
                3. The team able to point to scope growth and queues on both charts.
                4. One bottleneck found from the cumulative flow diagram and discussed in a retrospective.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A burn-up chart and a cumulative flow diagram are live for the team, and one bottleneck found from them has been discussed in a retrospective."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Turn on the burn-up chart for the current epic in the tracker"
                - "Add a cumulative flow diagram for the team board"
                - "Walk the team through both charts for ten minutes in review"
                - "Bring the widest band on the flow diagram to the next retrospective"
            - name: Story points versus no-estimates trial
              description: |-
                ## Purpose
                Some teams spend hours a sprint estimating and get forecasts no better than counting tickets. Running both side by side for three sprints, forecasting with points and with ticket counts, settles with your own data whether estimation effort is buying you anything.

                ## Milestones
                1. Three sprints where both points and ticket counts are recorded.
                2. Forecasts from each method compared with actual delivery.
                3. Time spent estimating each sprint noted.
                4. A recorded decision to keep points, switch to counts or use counts with a size cap.

                ## Notes
                Counting only works when tickets are sliced small and similar. Pair this trial with a ticket size cap.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A three-sprint comparison of points and ticket counts is written up, and the team records which method it will use and why."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree to record both points and ticket counts for three sprints"
                - "Note time spent in estimation each sprint"
                - "Compare each method's forecast with what was delivered"
                - "Record the decision and share it with stakeholders"
            - name: Scrum or Kanban decision for the team
              description: |-
                ## Purpose
                Forced into fixed sprints, a support-heavy platform team spends half its planning time apologising, while a product team on pure Kanban can lose the rhythm of goals and reviews. Comparing how much of your work is planned versus reactive, and what stakeholders need from you, gives a reasoned choice rather than whatever the last manager preferred.

                ## Milestones
                1. The share of planned versus reactive work over the last two months measured.
                2. Stakeholder needs for dates and visibility listed.
                3. Scrum, Kanban and a hybrid scored against those facts.
                4. A choice recorded with a date to revisit it after three months.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision between Scrum, Kanban or a hybrid, based on measured planned and reactive work, is recorded with a review date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Measure planned versus reactive tickets for the last two months"
                - "List what stakeholders need from the team on dates and visibility"
                - "Score Scrum, Kanban and a hybrid against those findings"
                - "Record the choice and book a review in three months"
            - name: Sprint goals written as one outcome
              description: |-
                ## Purpose
                A sprint goal that reads 'finish tickets 401 to 417' gives the team nothing to protect when scope has to change mid-sprint. Writing each goal as a single outcome a user or stakeholder would notice lets engineers make trade-offs on their own and makes the review easier to judge.

                ## Milestones
                1. A one-sentence goal format focused on an observable outcome.
                2. The last three sprint goals rewritten in the new format as practice.
                3. Each new sprint goal written before tickets are pulled in.
                4. Goal met or missed recorded for every sprint in the plan versus outcome table.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four sprints in a row each have a single outcome goal agreed before work is pulled in, with goal met or missed recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Rewrite the last three sprint goals as single outcomes"
                - "Add a goal line to the top of the sprint board"
                - "Agree the goal first in the next planning session"
                - "Record goal met or missed beside the sprint totals"
            - name: Capacity buffer policy for interrupts
              description: |-
                ## Purpose
                Committing a hundred percent of capacity guarantees a missed sprint the first time production breaks. Setting an explicit buffer, based on your measured unplanned work, and agreeing what fills it on a quiet sprint, turns interrupts from failures into part of the plan.

                ## Milestones
                1. A buffer percentage set from at least six weeks of unplanned work data.
                2. Rules written for what can claim the buffer and who decides.
                3. A pre-agreed list of small tickets to pull in when the buffer is unused.
                4. Buffer use compared with the policy every month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written buffer policy based on measured unplanned work is in use, and actual buffer use is compared with it monthly for a quarter."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Take the average unplanned share from the interrupt log"
                - "Propose a buffer percentage and the rules for claiming it"
                - "List small tickets to pull in when the buffer is unused"
                - "Compare actual buffer use with the policy @recurring(monthly:16)"
            - name: Board columns that match the real workflow
              description: |-
                ## Purpose
                Three columns called To do, In progress and Done hide where work really waits: code review, a test environment, a product sign-off. Redrawing the columns to match the real steps, with work-in-progress limits on the slowest ones, makes queues visible during planning and stand-ups.

                ## Milestones
                1. The actual steps a ticket goes through mapped from five recent tickets.
                2. Board columns updated to match, including waiting states.
                3. Work-in-progress limits set on review and testing columns.
                4. The team using the new board for two sprints before any further change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The team board shows every real workflow step including waiting states, with work-in-progress limits on at least two columns."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Trace five recent tickets through every step they actually took"
                - "Draw the real workflow including waiting states"
                - "Update the board columns to match the drawing"
                - "Set work-in-progress limits on review and testing"
            - name: Ticket size cap for sprint work
              description: |-
                ## Purpose
                Every carry-over log tells the same story: the large tickets are the ones that roll. Agreeing a cap, such as nothing above five points or three days enters a sprint, forces splitting in refinement and makes daily progress visible.

                ## Milestones
                1. A size cap agreed and written into the definition of ready.
                2. Every ticket above the cap in the next two sprints split before planning.
                3. Carry-over of large tickets compared before and after the cap.
                4. Exceptions recorded with the reason they could not be split.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "No ticket above the agreed size cap enters a sprint for two months, except recorded exceptions with reasons."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which estimate sizes carried over most in the log"
                - "Propose a size cap and add it to the definition of ready"
                - "Split every over-cap ticket in the next refinement"
                - "Record any exception and the reason it stayed large"
            - name: Policy on estimating bugs and chores
              description: |-
                ## Purpose
                Teams argue endlessly about whether bugs get points, and the inconsistent answer distorts velocity in both directions. Deciding once whether bugs, chores and support tickets are estimated, counted or simply timeboxed keeps the numbers comparable sprint to sprint.

                ## Milestones
                1. The options listed: estimate everything, estimate features only, or count and timebox.
                2. The effect of each option on velocity explained in a paragraph.
                3. A policy chosen and written into the team handbook.
                4. The tracker set up so the policy is easy to follow.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written policy on whether bugs, chores and support tickets are estimated is in the team handbook and followed for two sprints."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List how bugs and chores have been handled in the last four sprints"
                - "Explain the effect of each option on velocity"
                - "Choose a policy with the team and write it down"
                - "Adjust tracker issue types so the policy is easy to follow"
            - name: First sprint under the new planning process
              description: |-
                ## Purpose
                After the foundations are in place, the first sprint that uses them is where the gaps show. Treating it as a deliberate pilot, with the new definitions, agenda and capacity figure, and a short review at the end, catches problems before they become habits.

                ## Milestones
                1. A pilot sprint chosen and announced to stakeholders.
                2. Planning run with the new agenda, capacity figure and definitions.
                3. A list of what worked and what did not collected throughout the sprint.
                4. Two or three adjustments agreed at the pilot retrospective.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One full sprint is run with the new process, and the pilot retrospective records two or three agreed adjustments."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Announce the pilot sprint and what is changing"
                - "Run planning with the new agenda and capacity figure"
                - "Keep a shared note of process friction during the sprint"
                - "Agree two or three adjustments at the pilot retrospective"
            - name: Quarterly planning session for the team
              description: |-
                ## Purpose
                Sprints answer what happens in the next two weeks; stakeholders want to know what happens this quarter. A half-day quarterly session, with capacity for the quarter, ordered objectives and a forecast showing what fits, ties sprint planning to the roadmap without pretending to plan every ticket.

                ## Milestones
                1. Quarter capacity worked out from the capacity calendar and velocity range.
                2. Objectives for the quarter ordered and sized at epic level.
                3. A line drawn showing what is likely, possible and unlikely to fit.
                4. The plan shared with stakeholders within two days of the session.

                ## Notes
                Keep the risks raised in the session in the **Risk register** template so they are reviewed, not forgotten.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A quarterly plan with capacity, ordered objectives and a likely, possible and unlikely line is shared within two days of each session."
                cadence: cyclic
              tasks:
                - "Book a half-day quarterly planning session @recurring(quarterly)"
                - "Calculate quarter capacity from the calendar and velocity range"
                - "Size each objective at epic level before the session"
                - "Share the plan with likely, possible and unlikely lines"
            - name: Date commitment conversation with stakeholders
              description: |-
                ## Purpose
                Sooner or later someone senior asks for a date they can put in front of a customer or the board. Preparing for that conversation, with a forecast range, the assumptions behind it and the trade-offs that would move it, keeps an estimate from being quietly converted into a contractual promise.

                ## Milestones
                1. A forecast range at two confidence levels prepared for the item in question.
                2. The assumptions behind the range written in plain language.
                3. Two or three options listed that would bring the date forward, such as cutting scope.
                4. The agreed date and its conditions written down and sent after the meeting.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written summary of the agreed date, its confidence level and its conditions is sent to stakeholders within a day of the meeting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Prepare a forecast range at fifty and eighty-five percent confidence"
                - "Write the assumptions behind the range in plain language"
                - "List scope cuts or staffing changes that would move the date"
                - "Send a written summary of the agreed date and conditions"
            - name: Holiday period sprint plan
              description: |-
                ## Purpose
                Sprints over year-end or a long summer break run at half capacity, with change freezes and nobody available to approve anything. Planning that period on purpose, with a lighter commitment, independent tickets and fewer dependencies, avoids a January full of half-finished work.

                ## Milestones
                1. Holiday capacity worked out from the leave calendar.
                2. Freeze dates and approval gaps listed.
                3. A sprint commitment of small, independent tickets sized to the reduced capacity.
                4. A handover note for anything left in progress over the break.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The holiday sprint commitment is sized to measured reduced capacity and every in-progress ticket has a handover note before the break."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Collect everyone's leave for the holiday weeks"
                - "List freeze dates and missing approvers"
                - "Fill the sprint with small tickets that need no other team"
                - "Write handover notes for tickets still in progress before the break"
            - name: Story mapping workshop for a new epic
              description: |-
                ## Purpose
                New epics often arrive as a paragraph and a deadline, with the team asked how long it will take. A half-day story mapping workshop, laying out the user's steps left to right and the detail top to bottom, produces a first release slice and a backlog that can be estimated properly.

                ## Milestones
                1. The user activities for the epic laid out in order on a map.
                2. Stories under each activity, ordered by necessity.
                3. A first release line drawn across the map.
                4. Stories above the line written as tickets and ready for refinement.

                ## Notes
                Record the decisions in the **Meeting notes** template. Invite a designer and a tester as well as engineers.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A story map for the new epic exists with a first release line, and every story above the line is a ticket in the backlog."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a half-day workshop with product, design, testing and engineering"
                - "Lay out the user's steps for the epic from left to right"
                - "Draw the first release line across the map"
                - "Turn the stories above the line into tickets"
            - name: Lightweight planning for a team of two or three
              description: |-
                ## Purpose
                Full Scrum ceremonies for three engineers can eat a tenth of the week. Small teams still need a backlog order, a weekly commitment and a way to answer when things will be ready, but they can fold refinement, planning and review into one short meeting.

                ## Milestones
                1. One combined weekly meeting covering review, refinement and planning in under an hour.
                2. A single ordered list of the next two weeks of work.
                3. Throughput tracked as tickets per week rather than points.
                4. A forecast answer ready for the next date question, in one sentence.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A small team runs one combined weekly planning meeting under an hour for six weeks and can give a throughput-based forecast on request."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Replace separate ceremonies with one weekly meeting under an hour"
                - "Keep a single ordered list of the next two weeks of work"
                - "Count tickets finished each week in a simple sheet"
                - "Write a one-sentence forecast for the current top priority"
            - name: Asynchronous refinement across time zones
              description: |-
                ## Purpose
                When the team spans eight hours, a live refinement session leaves someone estimating at midnight. Moving reading, questions and first estimates into the tracker asynchronously, and keeping a short live slot only for disagreements, keeps everyone's voice in the estimate without wrecking anyone's evening.

                ## Milestones
                1. A written routine: tickets posted for refinement by a set time each week.
                2. Questions and estimates added asynchronously within two working days.
                3. A short live slot, in the overlap hours, reserved for split estimates.
                4. Engineers in every time zone contributing to at least most estimates.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four weeks, every ticket entering the sprint has asynchronous estimates from engineers in each time zone, with live time used only for split votes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Map each engineer's working hours and the overlap window"
                - "Post tickets for asynchronous refinement by a fixed day each week"
                - "Collect estimates in the tracker using a hidden-vote field or tool"
                - "Reserve the overlap slot for tickets with split estimates"
            - name: Calibrating a new engineer's estimates
              description: |-
                ## Purpose
                New joiners either stay silent in estimation or guess wildly, because they have not yet seen what a three looks like in this codebase. Pairing them with the reference stories, and tracking their estimates against the team's for a few sprints, gets them contributing useful numbers within a month.

                ## Milestones
                1. The new engineer walked through the reference stories in a thirty-minute session.
                2. Their private estimates recorded alongside the team's for two sprints.
                3. Large gaps discussed one-to-one, not in the meeting.
                4. The engineer voting openly in planning poker by their third sprint.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A new engineer's estimates are within one scale step of the team consensus for most tickets by their third sprint."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Walk the new engineer through the reference stories"
                - "Ask them to note private estimates during refinement for two sprints"
                - "Compare their estimates with the team's in a short one-to-one"
                - "Invite them to vote openly from the third sprint"
            - name: Estimating your own work under a deadline
              description: |-
                ## Purpose
                Individual engineers are often asked for a quick 'how long' in a corridor, and the answer they give becomes the plan. Building a personal habit of breaking the task into pieces, adding time for review and testing, and giving a range with a confidence level makes your own estimates more reliable and easier to defend.

                ## Milestones
                1. A personal checklist for estimating: break down, add review and test time, add unknowns.
                2. Your own estimates and actuals logged for twenty tasks.
                3. Your personal ratio of actual to estimated time calculated.
                4. Corridor estimates answered with a range and a promise to confirm later.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Twenty personal estimates and actuals are logged, with a calculated personal ratio used to adjust the next estimate you give."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a five-line personal checklist for estimating a task"
                - "Log your estimate before starting each of your next twenty tasks"
                - "Log the actual time when each task is done"
                - "Work out your personal ratio of actual to estimated time"
            - name: Fixed-price bid estimate for client work
              description: |-
                ## Purpose
                Agencies and contractors often estimate once, sign a fixed price and live with the result for six months. Building the bid from a broken-down scope, explicit assumptions, a contingency sized to the unknowns and a clear change process protects both the team and the client from a number guessed in a sales call.

                ## Milestones
                1. Scope broken down to items of no more than a few days each.
                2. Assumptions and exclusions written as a numbered list the client can read.
                3. Contingency sized to named risks rather than a flat percentage.
                4. A change request process described in the proposal.

                ## Notes
                Contract terms, pricing and liability are for your commercial and legal advisers. This project covers the engineering estimate that feeds them.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A fixed-price estimate with a detailed breakdown, numbered assumptions, risk-based contingency and a change process is delivered to the commercial lead."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Break the client's scope into items of a few days or less"
                - "Write assumptions and exclusions as a numbered list"
                - "Size contingency against each named risk"
                - "Describe the change request process for the proposal"
            - name: Merging two teams' backlogs and velocity
              description: |-
                ## Purpose
                After a reorganisation, two teams with different estimation habits are suddenly one team with one sprint, and neither set of numbers means anything. Re-baselining on purpose (shared reference stories, a merged backlog and three sprints of fresh data) avoids months of forecasts built on incompatible scales.

                ## Milestones
                1. Both backlogs merged into one ordered list with duplicates removed.
                2. A new set of reference stories agreed by engineers from both teams.
                3. Old velocity figures retired and three sprints of new data collected.
                4. Stakeholders told that forecasts are provisional until the new baseline exists.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The merged team has one ordered backlog, shared reference stories and a new velocity baseline from three sprints of data."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Export both backlogs and remove duplicates"
                - "Agree new reference stories with engineers from both teams"
                - "Tell stakeholders forecasts are provisional for three sprints"
                - "Record the first three sprints of combined throughput"
            - name: Cross-team dependency board for planning
              description: |-
                ## Purpose
                A sprint that depends on another team's API change is a sprint planned on someone else's capacity. Keeping a shared board of cross-team dependencies, each with an owner, a needed-by sprint and a status, lets planning spot blocked work before it is committed.

                ## Milestones
                1. A shared board listing every cross-team dependency for the next two sprints.
                2. Each dependency with a requesting team, providing team, needed-by sprint and status.
                3. The board checked at the start of every planning session.
                4. Dependencies at risk raised with the other team before the sprint begins.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a quarter, no ticket with an unconfirmed cross-team dependency enters a sprint without being flagged on the dependency board."
                cadence: rolling
              tasks:
                - "Set up a shared dependency board with neighbouring teams"
                - "List every dependency for the next two sprints with owners"
                - "Update dependency statuses before each planning session @recurring(weekly:mon)"
                - "Raise at-risk dependencies with the providing team lead"
            - name: Multi-team programme forecast
              description: |-
                ## Purpose
                A programme spanning four teams finishes when the slowest critical path finishes, not when the average team does. Combining each team's throughput and remaining scope into one probabilistic forecast, with the dependencies between them, shows which team is the real constraint and how confident the programme date is.

                ## Milestones
                1. Remaining scope and twelve weeks of throughput collected from each team.
                2. Dependencies between teams mapped as a simple sequence.
                3. A combined forecast at seventy and eighty-five percent confidence.
                4. The constraining team identified and the forecast refreshed monthly with programme leads.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A programme-level forecast at two confidence levels, naming the constraining team, is shared with programme leads and refreshed monthly."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect remaining scope and weekly throughput from each team"
                - "Map the dependencies between teams in sequence"
                - "Run a combined Monte Carlo forecast for the programme"
                - "Ask the agent to summarise which team is the constraint and why"
            - name: Estimating research and machine learning work
              description: |-
                ## Purpose
                Model training, data investigations and algorithm research do not have a known path, and story points pretend they do. Planning them as a series of timeboxed experiments, each with a question and a stop rule, gives stakeholders progress they can see without inventing an estimate for the unknowable.

                ## Milestones
                1. Research work broken into experiments with a question, a timebox and a success threshold.
                2. A stop rule written for each line of work: what result means abandon or change direction.
                3. Research experiments tracked separately from delivery velocity.
                4. Stakeholders updated on experiments completed and learned, not points burned.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All research work in a quarter is planned as timeboxed experiments with written stop rules and reported separately from delivery velocity."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List open research questions on the current roadmap"
                - "Turn each question into a timeboxed experiment with a threshold"
                - "Write a stop rule for each line of research"
                - "Report research progress separately from sprint velocity"
            - name: Cost of delay and WSJF backlog ordering
              description: |-
                ## Purpose
                Ordering a backlog by gut feel or loudest voice means expensive delays hide behind popular features. Scoring the top items by cost of delay divided by size, often called weighted shortest job first, gives the product owner a defensible order and shows stakeholders why their item sits where it does.

                ## Milestones
                1. Scoring scales for business value, time criticality and risk reduction agreed.
                2. The top twenty backlog items scored with the product owner and a stakeholder.
                3. The backlog reordered by score, with deliberate exceptions noted.
                4. Scores revisited every quarter as conditions change.

                ## Notes
                The scores are relative and rough. Treat them as a way to structure the argument, not to settle it with false precision.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The top twenty backlog items carry cost of delay scores and are ordered by them, with exceptions recorded and scores refreshed each quarter."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Agree scales for value, time criticality and risk reduction"
                - "Score the top twenty backlog items with the product owner"
                - "Reorder the backlog by score and note any exceptions"
                - "Rescore the top of the backlog with stakeholders @recurring(quarterly)"
            - name: Cycle time percentiles as a service expectation
              description: |-
                ## Purpose
                Teams moving beyond velocity often find cycle time more useful: how long a ticket takes from start to done. Publishing the eighty-fifth percentile as a service level expectation ('most tickets finish within six days') answers 'when will my small request be done' without any estimation at all.

                ## Milestones
                1. Cycle time for the last three months of tickets calculated.
                2. The fiftieth and eighty-fifth percentiles worked out by ticket type.
                3. A service level expectation published for each type.
                4. Ageing tickets that pass the eighty-fifth percentile flagged in stand-up.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A published service level expectation based on the eighty-fifth percentile cycle time is refreshed monthly, and tickets older than it are flagged."
                cadence: rolling
              tasks:
                - "Export start and finish dates for three months of tickets"
                - "Calculate the fiftieth and eighty-fifth percentile cycle times by type"
                - "Publish the service level expectation on the team page"
                - "Refresh the cycle time percentiles and flag ageing tickets @recurring(monthly:3)"
            - name: Calibration training for ranged estimates
              description: |-
                ## Purpose
                Most engineers who say they are ninety percent sure are right far less often than that. Calibration practice, giving ranges for trivia and then for real tickets and scoring how often the truth lands inside, measurably narrows overconfidence and makes every range the team gives more trustworthy.

                ## Milestones
                1. A baseline calibration exercise of twenty questions completed by each engineer.
                2. Each person's hit rate on ninety percent ranges calculated.
                3. Monthly practice on real tickets with ranges logged and scored.
                4. Team hit rate on ninety percent ranges moved closer to ninety percent.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "After three months of practice, the team's measured hit rate on ninety percent confidence ranges is recorded and closer to ninety than at baseline."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Run a twenty-question calibration exercise with the team"
                - "Score how often each person's range contained the answer"
                - "Log ranged estimates on real tickets and score them @recurring(monthly:18)"
                - "Share the team hit rate in a retrospective each quarter"
---

# Sprint Planning & Estimation

Sprint planning and estimation is the craft of turning a pile of requests into small, well understood tickets, sizing them honestly and committing to an amount of work the team can actually finish, so that dates people hear are forecasts with a range and not guesses that harden into promises. These projects start with the foundations (sprint length, definitions of ready and done, one ordered backlog, an estimation unit and a velocity baseline), move through the routines of refinement, planning, mid-sprint checks and forecast refreshes, then the skills of splitting stories and forecasting with ranges, the decisions about process and policy, dated events such as quarterly planning, situations from a two-person team to a fixed-price bid, and specialist work like multi-team forecasts and calibration training.

What repeats is a Tuesday reorder of the top of the backlog, a Wednesday refinement session, a Thursday scope check and a Friday tally of unplanned work, plus monthly reviews of carry-over, estimate accuracy, cycle time and the roadmap forecast, and quarterly checks of reference stories, the definition of done and the priority scores. The Meeting notes, Metrics log, Product spec and Risk register templates pair with the projects that need a record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
