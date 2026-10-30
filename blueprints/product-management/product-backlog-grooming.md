---
id: product-management.product-backlog-grooming
name: Product Backlog Grooming
description: "A backlog that stays ordered, sized and current: one owner and ticket standards, weekly refinement and triage, splitting and estimation skills, clean-up decisions and situations from solo developers to platform teams."
category: business
version: 1.0.0
tags: [product-management, product-backlog-grooming, team, engineer, backlog-refinement, agile, issue-tracking, definition-of-ready]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - meeting-notes
    - risk-register
    - metrics-log
    - remediation-plan
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product Backlog Grooming
          description: "Keeping the backlog ordered, sized and free of stale tickets so each sprint starts from well-understood, ready work."
          projects:
            - name: Backlog inventory and ticket count baseline
              description: |-
                ## Purpose
                Before changing anything, count what is actually there: how many open tickets, how old they are, how many have no description or no estimate, and how many nobody has touched in six months. A one-page baseline turns a vague sense that the backlog is a mess into numbers the team can agree to fix, and gives every later clean-up something to be measured against.

                ## Milestones
                1. An export of every open ticket with type, status, created date, last updated date and estimate.
                2. Counts recorded for total open tickets, tickets older than six and twelve months, and tickets with no description.
                3. The share of tickets in each status noted, including statuses nobody uses any more.
                4. A dated one-page baseline saved where the whole team can find it.

                ## Notes
                Export rather than eyeball. Most issue trackers can produce a spreadsheet of open items with filters, and a pivot table gives the age bands in minutes.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page baseline lists total open tickets, age bands and tickets missing descriptions or estimates, taken from a full export."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export all open tickets with created and last updated dates to a spreadsheet"
                - "Count open tickets by age band, under three, three to twelve and over twelve months"
                - "Count tickets with no description, no estimate or no assignee"
                - "Write the baseline numbers on one page and share it with the team"
            - name: Named backlog owner and decision rights
              description: |-
                ## Purpose
                When everyone can reorder the backlog, the order means nothing and the top changes with whoever spoke last. Naming one person who owns the order, usually the product manager or product owner, and writing down who else can add, edit, close or reorder tickets, settles arguments before they start.

                ## Milestones
                1. One named owner of backlog order, agreed with the team lead and the engineering lead.
                2. A short rights table saying who can create, edit, close and reorder tickets.
                3. A deputy named for holidays and sick days.
                4. The rights table pinned in the tracker or the team space.

                ## Notes
                Owning the order is not owning every ticket. Engineers should still write and refine technical tickets; the owner decides where they sit.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rights table names the backlog owner, a deputy and who may create, close and reorder tickets, agreed by the team and its leads."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List everyone who currently reorders or closes tickets in the backlog"
                - "Agree the backlog owner and a deputy with the engineering lead"
                - "Write a rights table for creating, editing, closing and reordering tickets"
                - "Restrict reorder permissions in the tracker if the tool allows it"
            - name: Consolidating scattered to-do lists into one backlog
              description: |-
                ## Purpose
                Work hides in spreadsheets, chat threads, a designer's notebook and the sales team's wish list, so the official backlog is never the whole picture. Pulling every list into one tracker and retiring the rest means refinement covers all the work, and nothing surprises the team halfway through a sprint.

                ## Milestones
                1. Every place the team keeps work items listed, with an owner for each.
                2. Items from each side list either moved into the tracker or deliberately dropped.
                3. Old lists archived or marked read-only with a pointer to the tracker.
                4. An agreement that new work only counts once it is in the tracker.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All side lists of work have been moved into the tracker or archived, and each archived list carries a pointer to the backlog."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each team member where they keep work items outside the tracker"
                - "Move live items from each side list into the tracker with a source label"
                - "Mark each retired list read-only with a link to the backlog"
                - "Ask the agent to compare the side lists with the tracker and flag likely duplicates"
            - name: Backlog workflow states and board columns
              description: |-
                ## Purpose
                Many trackers carry a dozen statuses inherited from three previous processes, so tickets sit in Under Review or Triaged Two and nobody knows what that means. A short set of states with a written entry rule for each, such as New, Refining, Ready, In progress and Done, makes the board readable at a glance.

                ## Milestones
                1. A list of current statuses with the number of tickets in each.
                2. Five to seven agreed states, each with a one-line entry rule.
                3. Unused or duplicate statuses mapped to the new ones and removed.
                4. Board columns that match the agreed states, in order.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The tracker uses no more than seven statuses, each with a written entry rule, and every open ticket sits in one of them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every status in the tracker with its current ticket count"
                - "Draft five to seven states with a one-line entry rule for each"
                - "Map old statuses to new ones and bulk move the tickets"
                - "Rebuild the board columns to match the agreed states"
            - name: Ticket template with problem and acceptance criteria
              description: |-
                ## Purpose
                Tickets titled Fix login or Improve reports force engineers to chase the author before they can start. A default template with sections for the problem, who it affects, the expected outcome, acceptance criteria and links to designs or data cuts out that chasing, and makes a well-written ticket the easy option.

                ## Milestones
                1. A story template with problem, affected users, outcome, acceptance criteria and links sections.
                2. Shorter variants for bugs and for technical tasks.
                3. The templates set as defaults in the tracker for each issue type.
                4. Five existing tickets rewritten in the template as worked examples.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Default templates for stories, bugs and technical tasks are live in the tracker, with five example tickets written in them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect five recent tickets engineers had to ask questions about"
                - "Draft a story template with problem, outcome and acceptance criteria sections"
                - "Draft shorter bug and technical task variants of the template"
                - "Set each template as the default for its issue type in the tracker"
            - name: Definition of ready checklist
              description: |-
                ## Purpose
                Sprints stall when a ticket turns out to be missing a design, an API decision or access to test data halfway through. A short definition of ready, agreed by product and engineering, sets the bar a ticket must clear before it can be pulled into a sprint, so blockers are found in refinement rather than on day three.

                ## Milestones
                1. A checklist of five to eight readiness criteria agreed by the whole team.
                2. The checklist added to the Ready column description or the ticket template.
                3. A rule agreed for tickets that are urgent but not yet ready.
                4. The checklist tested on the next ten tickets moved to Ready.

                ## Notes
                Start from the **Operational checklist** template. Keep it short: a definition of ready with fifteen items becomes a gate nobody passes and everyone ignores.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A definition of ready with five to eight criteria is agreed by product and engineering and has been applied to the next ten tickets moved to Ready."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the reasons tickets stalled mid-sprint in the last three sprints"
                - "Draft five to eight readiness criteria from those reasons"
                - "Agree the checklist with engineers at the next refinement session"
                - "Review the definition of ready at a team retrospective @recurring(quarterly)"
            - name: Label, component and issue type scheme
              description: |-
                ## Purpose
                Labels multiply when anyone can create them: frontend, front-end, FE and ui all mean the same thing, and filters miss half the tickets. A small agreed scheme of issue types, components and labels, each with a one-line description, makes searching, reporting and splitting work by product area reliable.

                ## Milestones
                1. A list of every label and component with its usage count.
                2. An agreed scheme of no more than four issue types and a short set of labels and components.
                3. Duplicate labels merged and unused ones deleted.
                4. A one-page glossary of the scheme linked from the tracker.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Labels and components are reduced to an agreed list with a written glossary, and no two labels mean the same thing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export every label and component with the number of tickets using each"
                - "Group labels that mean the same thing and pick one name per group"
                - "Merge duplicates and delete labels used on fewer than three tickets"
                - "Prune labels created since the last check against the glossary @recurring(quarterly)"
            - name: Intake route for new backlog requests
              description: |-
                ## Purpose
                Requests arrive by chat message, hallway conversation and direct messages to engineers, and the ones that skip the backlog jump the queue. One published intake route, a form or a request ticket type with a few required fields, gives every request the same treatment and a status the requester can see.

                ## Milestones
                1. A request form or ticket type with required fields for problem, requester, urgency and evidence.
                2. The route published to sales, support and leadership with a short explanation.
                3. A triage status where all new requests land.
                4. Requests arriving by other routes redirected politely to the form for one month.

                ## Notes
                Make the form quicker than sending a direct message, or people will keep sending direct messages. Three or four required fields is usually the limit.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A single request form or ticket type is live and announced, and every new request for a month arrived through it or was redirected to it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the channels requests reached the team through last month"
                - "Build a request form with problem, requester, urgency and evidence fields"
                - "Announce the intake route to sales, support and leadership"
                - "Redirect requests that arrive by chat to the form with a link"
            - name: Bug severity and priority definitions
              description: |-
                ## Purpose
                Every reporter thinks their bug is critical, so a severity field without definitions ends up meaning nothing. Writing what each level means in users affected, data at risk and workarounds available, and keeping severity (how bad) separate from priority (how soon), lets bugs be ordered against feature work without a fresh debate each time.

                ## Milestones
                1. Four severity levels defined, each with a real example bug.
                2. A rule for how severity maps to response time or sprint placement.
                3. Severity and priority set up as separate fields in the tracker.
                4. Every open bug re-rated against the new definitions.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written severity definitions with examples are live in the tracker and every open bug has been re-rated against them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the last fifty bugs and note how each one was rated"
                - "Write four severity levels with an example bug for each"
                - "Agree with support and engineering how severity affects sprint placement"
                - "Re-rate every open bug against the new definitions"
            - name: First stale ticket purge
              description: |-
                ## Purpose
                Backlogs that grow for years end up with hundreds of tickets nobody will ever build, and those bury the few that matter. A first purge of anything untouched for twelve months, with a short notice and a way to rescue tickets, often removes a third of the backlog in an afternoon.

                ## Milestones
                1. A filtered list of open tickets not updated in twelve months.
                2. Owners and requesters given two weeks to claim any ticket they still need.
                3. Unclaimed tickets closed with a standard resolution and comment.
                4. Before and after counts recorded against the baseline.

                ## Notes
                Close, do not delete. A closed ticket can be reopened if someone misses it, and its history stays searchable.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every ticket untouched for twelve months has been claimed or closed with a standard comment, and the new count is recorded against the baseline."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Filter open tickets with no update in the last twelve months"
                - "Post the list to requesters with a two-week deadline to claim tickets"
                - "Bulk close unclaimed tickets with a standard stale resolution comment"
                - "Record the before and after ticket counts beside the baseline"
            - name: Weekly backlog refinement session
              description: |-
                ## Purpose
                Refinement is where tickets become ready: questions get answered, stories get split and engineers size the work they will build. An hour a week with the next candidates shared in advance and decisions written onto the tickets keeps the team two sprints ahead, instead of refining during sprint planning.

                ## Milestones
                1. A standing weekly slot of up to an hour with product, design and engineers.
                2. The next ten to fifteen candidate tickets shared a day before each session.
                3. Decisions, open questions and estimates written onto tickets during the session.
                4. Each session ending with a count of tickets moved to Ready.

                ## Notes
                Start from the **Meeting notes** template for the agenda and decisions. A common guide is about ten percent of sprint time on refinement; much more usually means tickets arrive too raw.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly refinement session has run for eight consecutive weeks, each ending with tickets moved to Ready and decisions recorded on the tickets."
                cadence: rolling
              tasks:
                - "Book a recurring one-hour refinement slot with the whole team"
                - "Share the next ten to fifteen candidate tickets the day before"
                - "Run the refinement session and write decisions onto each ticket @recurring(weekly:wed)"
                - "Note how many tickets reached Ready at the end of each session"
            - name: Twice-weekly new ticket triage
              description: |-
                ## Purpose
                New tickets left untriaged pile up into a second, invisible backlog that nobody owns. Fifteen minutes twice a week to read every new ticket, label it, link duplicates, ask for missing detail and then accept, park or decline it keeps the inbox at zero and the requester informed within days.

                ## Milestones
                1. A saved filter showing every ticket in the triage status.
                2. Two fifteen-minute triage slots in the backlog owner's calendar.
                3. Each new ticket labelled, linked and accepted, parked or declined within four working days.
                4. The untriaged count at zero at the end of each slot.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No ticket has sat in the triage status for more than four working days over a full month."
                cadence: rolling
              tasks:
                - "Create a saved filter for tickets awaiting triage"
                - "Triage every new ticket in the filter @recurring(weekly:mon,thu)"
                - "Ask the requester for missing detail before accepting a vague ticket"
                - "Decline out-of-scope requests with a short written reason"
            - name: Ready work buffer of one to two sprints
              description: |-
                ## Purpose
                Too little ready work and sprint planning turns into live refinement; too much and tickets go stale before anyone builds them. Keeping between one and two sprints of ready, estimated work at the top of the backlog, checked weekly against recent throughput, is a simple guardrail that keeps planning short.

                ## Milestones
                1. Average completed work per sprint over the last three sprints calculated.
                2. A floor and a ceiling for ready work agreed, for example one to two sprints.
                3. A weekly check of ready work against the floor and ceiling.
                4. Refinement focus adjusted whenever the buffer drops below the floor.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ready work has stayed between the agreed floor and ceiling at every weekly check for six weeks."
                cadence: rolling
              tasks:
                - "Average the completed work over the last three sprints"
                - "Agree a floor and a ceiling for ready work with the team"
                - "Compare ready work against the floor and ceiling @recurring(weekly:fri)"
                - "Move refinement focus to the next epic when ready work falls short"
            - name: Bug triage rotation among engineers
              description: |-
                ## Purpose
                Leaving all bug triage to the product manager slows it down and loses the technical judgement that tells a five-minute fix from a week of investigation. A weekly rotation in which one engineer reproduces, rates and routes new bugs spreads the load and produces better first assessments.

                ## Milestones
                1. A rotation schedule covering every engineer on the team.
                2. A four-step triage checklist: reproduce, rate severity, find the likely area, link duplicates.
                3. Each new bug reproduced or marked cannot reproduce within two working days.
                4. A handover note passed on at the end of each rotation week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every engineer has completed a triage week, and new bugs are reproduced or marked cannot reproduce within two working days."
                cadence: rolling
              tasks:
                - "Draft a rotation schedule that covers every engineer on the team"
                - "Write a four-step triage checklist for the person on rotation"
                - "Hand open bug questions to the next engineer on rotation @recurring(weekly:tue)"
                - "Track how long new bugs wait for a first assessment"
            - name: Monthly stale and duplicate ticket sweep
              description: |-
                ## Purpose
                One big purge does not stay done: tickets go stale at a steady rate and duplicates arrive with every new reporter. A short monthly sweep that closes tickets past an agreed age and merges duplicates stops the backlog drifting back to its old size.

                ## Milestones
                1. A saved filter for tickets past the agreed age limit.
                2. A saved search or report that surfaces likely duplicates by title.
                3. A sweep completed each month with closures and merges noted.
                4. The open ticket count tracked month to month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly sweeps are logged with closure and merge counts, and the open ticket count stays within ten percent of its post-purge level."
                cadence: rolling
              tasks:
                - "Save a filter for tickets older than the agreed age limit"
                - "Close or refresh stale tickets and merge duplicates @recurring(monthly:12)"
                - "Record the open ticket count after each sweep"
                - "Ask the agent to group open tickets with similar titles as duplicate candidates"
            - name: Technical debt share in every sprint
              description: |-
                ## Purpose
                Technical debt rarely wins a straight fight against features, so it either rots in the backlog or erupts as an emergency. Agreeing a standing share of each sprint, often fifteen to twenty percent, for debt tickets that engineers have written and ranked keeps the codebase healthy without a quarterly argument.

                ## Milestones
                1. Debt tickets tagged consistently and ranked by the engineering lead.
                2. A share of sprint capacity agreed between product and engineering.
                3. Each sprint plan showing the debt share alongside feature work.
                4. A monthly check of the actual share against the agreed one.

                ## Notes
                Ask engineers to write each debt ticket with its cost today, such as slower builds or repeated incidents, so the ranking is about impact rather than taste.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Debt tickets are tagged and ranked, and the agreed share of capacity has been met in at least four of the last six sprints."
                cadence: rolling
              tasks:
                - "Tag every existing technical debt ticket with one agreed label"
                - "Ask the engineering lead to rank the top ten debt tickets"
                - "Agree the share of each sprint reserved for debt work"
                - "Compare the actual debt share with the agreed share @recurring(monthly:5)"
            - name: Dependency and blocker watch list
              description: |-
                ## Purpose
                Tickets that wait on another team, a supplier or a legal review look ready until the sprint starts and then sit blocked for weeks. A watch list of external dependencies, each with an owner, a date asked and a date needed, turns hidden waiting into something you can chase before it hurts.

                ## Milestones
                1. Every ticket with an external dependency linked or flagged.
                2. A watch list with the dependency, its owner, the date asked and the date needed.
                3. Dependencies due within two sprints chased each month.
                4. Blocked tickets kept out of Ready until the dependency clears.

                ## Notes
                Start from the **Risk register** template once the list grows past a handful of items.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dependency watch list covers every flagged ticket with owner and dates, and has been reviewed monthly for three months."
                cadence: rolling
              tasks:
                - "Flag every ticket that depends on another team or supplier"
                - "Record owner, date asked and date needed for each dependency"
                - "Chase dependencies due within the next two sprints @recurring(monthly:22)"
                - "Move blocked tickets out of Ready until the dependency clears"
            - name: Closing the loop on declined requests
              description: |-
                ## Purpose
                Requesters whose tickets are quietly closed stop trusting the backlog and start lobbying engineers directly. A short, honest note whenever a ticket is declined or parked, plus a monthly summary to requesting teams of what was accepted, parked and closed, keeps the intake route credible.

                ## Milestones
                1. A standard decline message with a reason and what would change the decision.
                2. Every declined or parked ticket carrying a comment addressed to the requester.
                3. A monthly summary sent to sales, support and other requesting teams.
                4. Fewer requests arriving outside the intake route than the month before.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every declined ticket in the last month carries a reason, and a monthly status summary has gone to requesting teams three months running."
                cadence: rolling
              tasks:
                - "Write a standard decline message that gives a reason and a reopen condition"
                - "Comment on each declined or parked ticket using that message"
                - "Send requesting teams a summary of accepted, parked and closed requests @recurring(monthly:26)"
                - "Count requests that bypassed the intake route this month"
            - name: Quarterly backlog health review
              description: |-
                ## Purpose
                Backlog problems creep in slowly, so a quarterly look at a few numbers catches them before planning suffers. Comparing open ticket count, median age, the ready buffer, the share of tickets meeting the definition of ready and the share of bugs against the original baseline shows whether grooming is working.

                ## Milestones
                1. Five health measures chosen and defined, with their baseline values.
                2. A quarterly snapshot of each measure recorded.
                3. One improvement action agreed from each review.
                4. Each review shared with the team and the engineering lead.

                ## Notes
                Start from the **Metrics log** template. Five numbers looked at honestly beat a dashboard of thirty that nobody reads.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two quarterly snapshots of the five backlog health measures are recorded, each with one agreed improvement action."
                cadence: cyclic
              tasks:
                - "Choose five backlog health measures and note their baseline values"
                - "Record the quarterly snapshot of each health measure @recurring(quarterly)"
                - "Agree one improvement action from the snapshot with the team"
                - "Share the snapshot and its action with the engineering lead"
            - name: Top twenty ordering pass before planning
              description: |-
                ## Purpose
                Only the top of the backlog needs a careful order, but it needs it every sprint. Re-ordering the top twenty tickets the day before sprint planning, with a one-line reason on anything that moved more than five places, means planning starts from a list the team can trust rather than last month's ranking.

                ## Milestones
                1. The top twenty tickets reviewed before every sprint planning.
                2. A one-line reason on any ticket that moved more than five places.
                3. Tickets below the top twenty left in rough order on purpose.
                4. Planning opening with the ordered list on screen.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The top twenty has been reordered before each of the last four sprint plannings, with reasons noted for large moves."
                cadence: rolling
              tasks:
                - "Block thirty minutes the day before each sprint planning"
                - "Reorder the top twenty tickets against the current sprint goal"
                - "Comment a one-line reason on any ticket that moved more than five places"
                - "Open sprint planning with the ordered list on screen"
            - name: Splitting user stories into vertical slices
              description: |-
                ## Purpose
                Stories too big to finish in a sprint are the most common reason work carries over. Learning the standard splitting patterns, by workflow step, business rule, data variation or happy path first, lets the team turn a three-week story into several small ones that each deliver something a user can see.

                ## Milestones
                1. Five splitting patterns written up with an example from your own product.
                2. Three oversized stories in the backlog split using those patterns.
                3. Each resulting story deliverable and testable on its own.
                4. A team rule for the largest size a story may be before it must be split.

                ## Notes
                Avoid splitting by layer, such as one backend story and one frontend story. Neither delivers anything alone, and both carry the integration risk to the very end.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three oversized backlog stories have been split into independently deliverable slices, and a maximum story size rule is written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a short guide to story splitting patterns"
                - "Write five splitting patterns with examples from your product"
                - "Split three oversized stories at the next refinement session"
                - "Agree the largest story size the team will accept"
            - name: Writing testable acceptance criteria
              description: |-
                ## Purpose
                Acceptance criteria such as works well on mobile cannot be tested, so the argument about whether a ticket is done happens after it is built. Practising criteria in a given, when, then shape, with edge cases and error states written out, gives engineers and testers the same definition of done before work starts.

                ## Milestones
                1. The given, when, then format practised on five existing tickets.
                2. A short prompt list of edge cases: empty states, errors, permissions and limits.
                3. Criteria reviewed by an engineer and a tester for testability.
                4. Testable acceptance criteria present on every ticket moved to Ready for a month.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five tickets have been rewritten with given, when, then criteria reviewed by an engineer, and every Ready ticket for a month carries testable criteria."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Rewrite the acceptance criteria on five existing tickets in given, when, then form"
                - "Draft an edge case prompt list covering empty states, errors and permissions"
                - "Ask an engineer and a tester to mark any criterion they could not test"
                - "Check every newly ready ticket has testable criteria for a month"
            - name: Relative estimation with planning poker
              description: |-
                ## Purpose
                Estimates go wrong when one confident voice anchors the room, or when people estimate in hours they will never hit. Relative sizing against a few reference tickets, with everyone revealing at once, surfaces the disagreement that matters: the engineer who sees hidden complexity the others missed.

                ## Milestones
                1. Three or four reference tickets agreed as anchors for small, medium and large.
                2. A simultaneous reveal used in every estimation discussion.
                3. Wide disagreements discussed, with the reason noted on the ticket.
                4. Estimates compared with actual effort for one full sprint.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Reference tickets are agreed, and the team has estimated in two refinement sessions with simultaneous reveal, noting reasons for wide spreads."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick three or four finished tickets as small, medium and large anchors"
                - "Run estimation with everyone revealing their size at the same time"
                - "Note the reason on the ticket whenever estimates differ by two sizes or more"
                - "Compare estimates with actual effort at the end of the sprint"
            - name: Spikes and timeboxed research tickets
              description: |-
                ## Purpose
                Some tickets cannot be estimated because nobody knows how the third-party API behaves or whether the old service can take the load. A spike, a timeboxed ticket with a question to answer and a written outcome, replaces guessing with an investment of a day or two and stops open-ended research swallowing a sprint.

                ## Milestones
                1. A spike ticket format with a question, a timebox and an expected output.
                2. Two unclear tickets in the backlog turned into spikes.
                3. Each spike closed with a short written finding and follow-up tickets.
                4. A rule that a spike cannot be extended without a fresh decision.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two spikes have been completed within their timebox, each closed with a written finding and follow-up tickets."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a spike ticket format with question, timebox and expected output"
                - "Turn two unestimable tickets into spikes of two days or less"
                - "Close each spike with a written finding and follow-up tickets"
                - "Agree that extending a spike needs the backlog owner's approval"
            - name: Writing bug reports engineers can reproduce
              description: |-
                ## Purpose
                Half the time spent on a bug can go on working out how to make it happen. Teaching support, sales and product to write reports with steps, expected and actual results, environment and evidence attached cuts that time, and stops cannot reproduce being the most common resolution in the tracker.

                ## Milestones
                1. A bug report guide covering steps, expected result, actual result, environment and evidence.
                2. Two good and two weak real reports used as examples.
                3. The guide shared with support and sales in a short session.
                4. Cannot reproduce closures counted for the month before and after.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bug report guide with real examples has been shared with support and sales, and cannot reproduce closures have been compared before and after."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick two good and two weak bug reports from the last quarter"
                - "Write a one-page bug report guide using those examples"
                - "Run a twenty-minute session on the guide with support and sales"
                - "Count cannot reproduce closures for the month before and after"
            - name: Sequencing backlog items around dependencies and risk
              description: |-
                ## Purpose
                A backlog ordered only by value can put a ticket at the top that cannot start until three lower ones are done. Learning to sequence by dependency, technical risk and what each item teaches you, so enabling work and the riskiest unknowns come first, turns a ranked wish list into an order the team can actually build in.

                ## Milestones
                1. Dependencies sketched for the top thirty tickets.
                2. Enabling and high-risk tickets moved ahead of the work they unblock.
                3. The resulting sequence checked with the engineering lead.
                4. A note on the backlog explaining the main sequencing choices.

                ## Notes
                This is about the order of building, not what is worth building. Value ranking comes first; sequencing adjusts it to what is buildable.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The top thirty tickets have a dependency sketch and an order checked with the engineering lead, with the sequencing choices noted."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Sketch the dependencies between the top thirty tickets"
                - "Move enabling and high-risk tickets ahead of the work they unblock"
                - "Review the new sequence with the engineering lead"
                - "Write a short note on the backlog explaining the sequencing choices"
            - name: Facilitating refinement so engineers do the talking
              description: |-
                ## Purpose
                Refinement goes flat when the product manager reads tickets aloud and engineers nod. Facilitation habits such as asking the quietest engineer first, timeboxing each ticket, parking side debates and ending every item with a clear outcome turn the session into the place where the team's knowledge actually lands on tickets.

                ## Milestones
                1. A facilitation checklist for refinement with timeboxes and opening questions.
                2. Each ticket in a session ending as ready, needs work or split.
                3. A parking list kept for debates that need a separate conversation.
                4. Feedback gathered from two engineers after a month.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four refinement sessions have run with the facilitation checklist, each ticket ending with a recorded outcome, and feedback is gathered from two engineers."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a facilitation checklist with timeboxes and opening questions"
                - "Ask an engineer to explain each ticket back before discussing it"
                - "End every ticket in the session as ready, needs work or split"
                - "Ask two engineers what would make refinement more useful"
            - name: Challenging unclear tickets as an engineer
              description: |-
                ## Purpose
                Engineers often see the hidden complexity in a ticket first: the data migration nobody mentioned, the permission rule that breaks three screens. Learning to raise it early in refinement, as a specific question or a proposed split rather than a vague worry, saves the team from estimating fantasy and builds trust with product.

                ## Milestones
                1. A personal list of question prompts on data, permissions, performance and rollback.
                2. At least one unclear ticket per session flagged with a specific question.
                3. A split or a spike proposed for any ticket you could not estimate.
                4. A conversation with the backlog owner about how challenges are best raised.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Over four refinement sessions you have flagged at least one unclear ticket each time with a specific question, split or spike proposal."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a list of question prompts on data, permissions, performance and rollback"
                - "Read the refinement candidates the day before and note one question per ticket"
                - "Propose a split or a spike for any ticket you cannot size"
                - "Ask the backlog owner how they prefer challenges to be raised"
            - name: Backlog bankruptcy for an oversized backlog
              description: |-
                ## Purpose
                When a backlog passes several hundred tickets, grooming it item by item becomes a project nobody finishes. Declaring bankruptcy, archiving everything below a line and letting anything important come back through intake, is often the fastest route to a usable backlog, but it needs a clear decision and an honest message to stakeholders.

                ## Milestones
                1. A decision recorded on whether to archive, with the cut-off rule.
                2. Stakeholders told in advance how to rescue a ticket they still need.
                3. Tickets below the line moved to an archive project or closed with a standard comment.
                4. A ceiling agreed that keeps the new live backlog small.

                ## Notes
                Start from the **Remediation plan** template. Keep the archive searchable for at least a year; the fear of losing an idea is what stops most teams doing this.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The bankruptcy decision and cut-off rule are recorded, archived tickets remain searchable, and the live backlog is below the agreed ceiling."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compare the open ticket count with what the team finished in the last year"
                - "Draft a cut-off rule and a ceiling for the live backlog"
                - "Tell stakeholders the archive date and how to rescue a ticket"
                - "Archive tickets below the line with a standard comment"
            - name: Choosing points, sizes or no estimates
              description: |-
                ## Purpose
                Teams argue about story points for years without asking what the estimates are for. Choosing deliberately between points, t-shirt sizes, counting tickets or not estimating at all, based on whether you need forecasting, capacity planning or just a shared conversation, removes a recurring source of friction.

                ## Milestones
                1. The uses of estimates in your team listed, such as planning, forecasting and reporting.
                2. Three approaches compared against those uses.
                3. A decision recorded with the reasons and a trial length.
                4. The decision reviewed with the team after the trial.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An estimation approach has been chosen against listed uses, recorded with reasons, and reviewed after a trial of at least three sprints."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List what the team's estimates are actually used for"
                - "Compare points, sizes and ticket counts against those uses"
                - "Record the chosen approach with reasons and a trial length"
                - "Review the choice with the team when the trial ends"
            - name: Ideas parking lot outside the delivery backlog
              description: |-
                ## Purpose
                Mixing half-formed ideas with ready work makes the backlog long, slow to scan and misleading to stakeholders who assume everything in it will be built. Moving ideas to a separate, lightly kept list, and promoting them only when there is evidence and an owner, keeps the delivery backlog short and honest.

                ## Milestones
                1. A separate ideas list or project in the tracker.
                2. A written promotion rule: evidence, an owner and a rough outcome.
                3. Idea-stage tickets moved out of the delivery backlog.
                4. The ideas list reviewed each quarter for anything ready to promote.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A separate ideas list exists with a written promotion rule, and the delivery backlog holds no idea-stage tickets."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a separate ideas project or list in the tracker"
                - "Write the rule for promoting an idea to the delivery backlog"
                - "Move idea-stage tickets out of the delivery backlog"
                - "Review the ideas list for anything ready to promote @recurring(quarterly)"
            - name: Ticket age limit and auto-close rule
              description: |-
                ## Purpose
                Manual sweeps depend on someone remembering. An agreed age limit, for example 180 days without an update, enforced by a tracker automation that warns the reporter and then closes the ticket, stops stale work building up again, as long as someone checks the closures so nothing important slips.

                ## Milestones
                1. An age limit agreed by product and engineering, with exemptions such as security bugs.
                2. An automation that posts a warning and closes after a grace period.
                3. A test run on a small filter before the rule goes live.
                4. A monthly check of what the rule closed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An auto-close rule with a warning comment and agreed exemptions is live, and its closures have been checked for two months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree an age limit and its exemptions with the engineering lead"
                - "Build an automation that warns, waits and then closes stale tickets"
                - "Test the automation on a small filter before turning it on"
                - "Check last month's automatic closures for anything that matters @recurring(monthly:17)"
            - name: Reducing sprint carry-over at the source
              description: |-
                ## Purpose
                Tickets that roll from sprint to sprint are usually a refinement problem in disguise: too big, unclear or blocked from the start. Tracing the last ten carried-over tickets back to why they were not ready, and changing the refinement step that let them through, cuts carry-over more reliably than pushing the team harder.

                ## Milestones
                1. The last ten carried-over tickets listed with the reason each slipped.
                2. Reasons grouped into size, clarity, dependency and interruption.
                3. One change to refinement or the definition of ready made for the biggest group.
                4. Carry-over counted monthly for the next three months.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten carried-over tickets have documented causes, one refinement change has been made, and carry-over has been counted for three months afterwards."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the last ten tickets carried over and why each slipped"
                - "Group the reasons into size, clarity, dependency and interruption"
                - "Change one refinement step to address the largest group"
                - "Count tickets carried over at the latest sprint end @recurring(monthly:28)"
            - name: Issue tracker fields and automation clean-up
              description: |-
                ## Purpose
                Trackers gather custom fields, required dropdowns and automations from every past process owner, and each one adds friction to writing a ticket. Removing fields nobody reports on and automations nobody remembers makes creating and moving tickets quick enough that people stop working around the tool.

                ## Milestones
                1. Every custom field and automation listed with its owner and last use.
                2. Fields nobody reports on hidden or removed.
                3. Required fields cut to the few that triage actually needs.
                4. Remaining automations documented in one place.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Unused custom fields and automations have been removed, required fields cut to an agreed few, and the remaining automations documented."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every custom field and automation with its owner"
                - "Ask each owner whether the field or rule still feeds a report"
                - "Remove or hide fields and automations nobody claims"
                - "Repeat the field and automation audit @recurring(yearly)"
            - name: Making unplanned work visible in the backlog
              description: |-
                ## Purpose
                Support escalations, urgent requests and on-call fixes often bypass the backlog, so the team looks slow when it is actually busy. Logging unplanned work as lightweight tickets for a few sprints shows how much capacity it really takes, and lets planning reserve room for it rather than pretending it will not happen.

                ## Milestones
                1. A quick ticket type or label for unplanned work.
                2. Every unplanned item logged for three sprints.
                3. The share of capacity taken by unplanned work calculated.
                4. A capacity reserve for unplanned work agreed in planning.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three sprints of unplanned work are logged, its share of capacity is calculated, and a reserve is agreed for sprint planning."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Create a quick ticket type or label for unplanned work"
                - "Log every interruption as a ticket for three sprints"
                - "Calculate the share of capacity unplanned work took"
                - "Tally unplanned tickets and share the number with the team @recurring(monthly:8)"
            - name: Pre-quarter backlog reset workshop
              description: |-
                ## Purpose
                A new quarter brings new goals, and a backlog ordered for the last one quietly works against them. A half-day workshop before the quarter starts, to close what no longer fits, re-rank epics against the new goals and refine the first two sprints, means the quarter opens with work aimed at the right outcomes.

                ## Milestones
                1. The new quarter's goals summarised on one page before the workshop.
                2. Epics that no longer fit closed or moved to the ideas list.
                3. Remaining epics ranked against the new goals.
                4. The first two sprints of work refined to ready.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The reset workshop has been held before the quarter starts, with misfit epics closed and two sprints of work ready."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Summarise next quarter's goals on one page for the workshop"
                - "Book a half-day workshop with product, design and engineering leads"
                - "Close or park epics that do not serve the new goals"
                - "Book the next reset workshop before the following quarter @recurring(quarterly)"
            - name: Team ticket bash clean-up day
              description: |-
                ## Purpose
                Some backlog clean-up is too tedious for one person and goes much faster with the whole team together for an afternoon. A ticket bash, with pre-split lists, a simple four-way rule (keep, close, merge, rewrite) and a running tally, can clear hundreds of tickets and teaches everyone what a good ticket looks like.

                ## Milestones
                1. A date set with the whole team and the backlog split into equal lists.
                2. The keep, close, merge or rewrite rule written on one slide.
                3. Every ticket on the lists given an outcome by the end of the day.
                4. Totals shared and rewritten tickets reviewed at the next refinement.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The ticket bash has run, every ticket on the lists has an outcome, and the totals have been shared with the team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a date for the ticket bash with the whole team"
                - "Split the backlog into equal lists for pairs of people"
                - "Write the keep, close, merge or rewrite rule on one slide"
                - "Share the totals and thank the team the next day"
            - name: Pre-release bug backlog freeze
              description: |-
                ## Purpose
                In the weeks before a major release, the bug backlog decides what ships with known issues. Freezing new feature tickets, triaging every open bug against the release and agreeing acceptable known issues with support gives the release decision a clean list instead of a guess.

                ## Milestones
                1. A freeze date agreed after which only release bugs enter the sprint.
                2. Every open bug tagged as release blocker, fix soon or known issue.
                3. The known issues list reviewed with support before release.
                4. Blockers at zero, or the release date reconsidered.

                ## Notes
                The go or no-go call itself belongs to launch planning. This project makes sure the bug list feeding that call is accurate.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every open bug is tagged against the release, the known issues list is signed off by support, and blockers are at zero before release day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the freeze date with the engineering lead"
                - "Tag every open bug as blocker, fix soon or known issue"
                - "Review the known issues list with the support lead"
                - "Report the blocker count each day in the final release week"
            - name: Issue tracker migration cut-over
              description: |-
                ## Purpose
                Moving from one tracker to another, say from a spreadsheet or an older tool to a newer one, is the best chance you will get to leave junk behind. Deciding what migrates, mapping fields and statuses and running a trial import before a fixed cut-over date stops the new tool inheriting every old problem.

                ## Milestones
                1. A rule for what migrates, such as open tickets updated in the last year.
                2. Fields, statuses and labels mapped from old to new.
                3. A trial import checked against a sample of fifty tickets.
                4. A cut-over date after which the old tool is read-only.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Open tickets meeting the migration rule are in the new tracker, a trial import was checked, and the old tool became read-only on the cut-over date."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write the rule for which tickets migrate to the new tracker"
                - "Map fields, statuses and labels from the old tool to the new one"
                - "Run a trial import and check fifty sample tickets"
                - "Set the old tracker to read-only on the cut-over date"
            - name: Post-incident action items in the backlog
              description: |-
                ## Purpose
                Incident reviews produce a list of fixes that everyone agrees on and then nobody schedules. Turning each action item into a ticket with an owner and a target sprint, and checking them at refinement until they are done, is what stops the same outage happening twice.

                ## Milestones
                1. Each action item from the latest incident review entered as a ticket.
                2. Every action ticket labelled with the incident and given an owner.
                3. Target sprints agreed with the engineering lead.
                4. All action tickets closed or explicitly deferred with a reason.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every action item from the incident review is a labelled ticket with an owner, and all are closed or deferred with a written reason."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a ticket for each action item from the incident review"
                - "Label each ticket with the incident reference and an owner"
                - "Agree target sprints for the action tickets with the engineering lead"
                - "Ask the agent to summarise open incident action tickets before each refinement"
            - name: Inheriting a backlog from a departing product manager
              description: |-
                ## Purpose
                Taking over someone else's backlog means taking over their promises, half-finished thinking and private context. A structured handover in their last two weeks, followed by a first-month pass of your own, separates commitments you must honour from tickets you are free to rethink.

                ## Milestones
                1. A handover session covering commitments, in-flight epics and sensitive requests.
                2. Tickets with external promises tagged and their requesters noted.
                3. Your own first-pass notes on the top fifty tickets.
                4. A short note to stakeholders on what stays, what changes and when.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Promised tickets are tagged with requesters, the top fifty carry your own notes, and stakeholders have received a short note on what changes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Book a handover session before the departing product manager leaves"
                - "Tag tickets carrying promises to customers or executives"
                - "Read and annotate the top fifty tickets yourself"
                - "Send stakeholders a note on what stays and what changes"
            - name: Solo developer backlog for a one-person product
              description: |-
                ## Purpose
                One person building a product does not need sprints or story points, but still needs to know what to work on next Monday. A lightweight board with now, next and later columns, a weekly review on a Sunday evening and a hard limit on the now column keeps side projects and indie products moving without process overhead.

                ## Milestones
                1. A single board with now, next and later columns.
                2. A limit of five items in now.
                3. A weekly review that moves items between columns.
                4. Ideas captured on the phone during the week and added at the review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The solo board has held five or fewer items in now for four weeks, with a review held each week."
                cadence: rolling
              tasks:
                - "Set up one board with now, next and later columns"
                - "Move everything beyond five items out of now"
                - "Review and reorder the board for the week ahead @recurring(weekly:sun)"
                - "Keep a phone note for ideas and empty it at the weekly review"
            - name: Open-source issue tracker grooming for maintainers
              description: |-
                ## Purpose
                Popular open-source projects receive more issues than maintainers can read, and an unanswered tracker drives contributors away. Issue templates, a small label set including good first issue, saved replies and a weekly triage hour keep the tracker welcoming without consuming every evening.

                ## Milestones
                1. Issue templates for bugs and feature requests in the repository.
                2. A label set with triage, good first issue and help wanted.
                3. Saved replies for duplicates, missing information and out-of-scope requests.
                4. A weekly triage hour with the untriaged count tracked.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Issue templates and saved replies are live, and the untriaged issue count has fallen over four consecutive weekly triage hours."
                cadence: rolling
              tasks:
                - "Add bug and feature request issue templates to the repository"
                - "Create triage, good first issue and help wanted labels"
                - "Write saved replies for duplicates, missing detail and out-of-scope requests"
                - "Label and answer new issues in a one-hour triage slot @recurring(weekly:sat)"
            - name: Platform team backlog with many internal requesters
              description: |-
                ## Purpose
                Platform and infrastructure teams serve a dozen product teams, each convinced their request is the most urgent. A visible request queue, published ordering rules, a monthly review with requesting teams and a capacity split between requests and the platform's own work turn complaints about speed into informed trade-offs.

                ## Milestones
                1. A published request queue that every product team can see.
                2. Ordering rules written and shared, such as incidents first, then commitments, then the rest.
                3. A capacity split agreed between requests and the platform's own work.
                4. A monthly request review held with requesting teams.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The request queue and ordering rules are published, and three monthly reviews with requesting teams have been held."
                cadence: rolling
              tasks:
                - "Publish the request queue where every product team can see it"
                - "Write the ordering rules for requests and share them"
                - "Agree the capacity split between requests and platform work"
                - "Hold the request review with requesting teams @recurring(monthly:15)"
            - name: Client-visible backlog for agency and contract teams
              description: |-
                ## Purpose
                Agencies and contract teams often share a backlog with a client who can see every ticket and comment. Deciding what the client sees, who on their side can reorder it, and how change requests affect budget and timeline prevents scope creep arriving one ticket at a time.

                ## Milestones
                1. A client-facing view with internal tickets and notes kept separate.
                2. One named client contact with reorder rights.
                3. A change request rule linking new tickets to budget or timeline.
                4. A walkthrough of the view held with the client contact.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "The client sees a separate backlog view, one client contact holds reorder rights, and a written change request rule is agreed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set up a client-facing backlog view without internal notes"
                - "Agree one client contact who can reorder tickets"
                - "Write a change request rule tying new tickets to budget"
                - "Walk the client through the backlog view in a short call"
            - name: Asynchronous refinement across time zones
              description: |-
                ## Purpose
                Teams spread across eight or more hours of time difference cannot hold a comfortable weekly refinement call. Moving most refinement into the tickets, with questions posted by a set day, estimates added asynchronously and a short live call only for contested items, keeps work ready without asking anyone to join at midnight.

                ## Milestones
                1. A weekly async window with one day for questions and another for answers.
                2. Async estimates recorded on tickets before any live discussion.
                3. A short overlap call reserved for tickets with wide disagreement.
                4. Refinement output compared with the previous live format after a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of async refinement have run, with estimates recorded on tickets and live time limited to contested items."
                cadence: rolling
              tasks:
                - "Agree the async window with a day for questions and a day for answers"
                - "Post the week's refinement candidates with specific questions @recurring(weekly:mon)"
                - "Collect estimates on each ticket before any live call"
                - "Hold a short overlap call only for tickets with wide disagreement"
            - name: Merging two team backlogs after a reorganisation
              description: |-
                ## Purpose
                After a reorganisation, two teams can find themselves sharing a product area with two backlogs, two label sets and two definitions of done. Merging them into one, with a single owner, shared conventions and duplicates resolved, avoids the new team quietly working from separate lists for months.

                ## Milestones
                1. A single owner for the merged backlog agreed.
                2. Labels, statuses and the definition of ready reconciled.
                3. Duplicate and overlapping tickets merged.
                4. One ordered backlog in use, with the old ones archived.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One merged backlog with a single owner and reconciled conventions is in use, and both old backlogs are archived."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree one owner for the merged backlog with both team leads"
                - "Reconcile the two label sets, statuses and readiness rules"
                - "Merge duplicate and overlapping tickets from both backlogs"
                - "Archive the old backlogs once the merged one is ordered"
            - name: Throughput forecasting from backlog data
              description: |-
                ## Purpose
                Stakeholders want to know when an epic will be done, and point-based guesses are usually optimistic. Using the team's actual weekly throughput and a simple Monte Carlo simulation over the remaining tickets gives a date range with a confidence level, such as an 85 percent chance by a given week, that is honest about uncertainty.

                ## Milestones
                1. Weekly throughput for the last twelve weeks exported.
                2. A simulation spreadsheet or tool producing dates at 50 and 85 percent confidence.
                3. A forecast for one epic shared with its range and assumptions.
                4. The forecast refreshed monthly and compared with actual progress.

                ## Notes
                Forecasts assume tickets are roughly similar in size, so split the outliers first. Show the range, never a single date.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A Monte Carlo forecast for one epic, built on twelve weeks of throughput, has been shared with its range and refreshed monthly for three months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Export completed tickets per week for the last twelve weeks"
                - "Build or adopt a simple Monte Carlo forecast spreadsheet"
                - "Share one epic forecast at 50 and 85 percent confidence"
                - "Refresh the epic forecast and compare it with progress @recurring(monthly:3)"
            - name: Backlog ageing and flow analysis
              description: |-
                ## Purpose
                Averages hide where work actually waits. Plotting a cumulative flow diagram and an ageing chart by status shows whether tickets pile up in refining, wait in ready for months or stall in review, and points grooming effort at the real bottleneck.

                ## Milestones
                1. Status history for the last three months exported.
                2. A cumulative flow diagram and an age by status chart built.
                3. The status where tickets wait longest identified, with examples.
                4. One change agreed to reduce waiting in that status.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cumulative flow diagram and ageing chart are built from three months of data, and one change to the slowest status is agreed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export three months of ticket status history"
                - "Build a cumulative flow diagram from the export"
                - "Chart ticket age by status and find where work waits longest"
                - "Ask the agent to draft a bottleneck summary with three example tickets"
            - name: Coaching other teams on backlog refinement
              description: |-
                ## Purpose
                Once your own backlog is healthy, other teams will ask how you did it. Running a short coaching cycle with one team, observing their refinement, pairing on their definition of ready and checking back after a month, spreads the practice without imposing a single process on everyone.

                ## Milestones
                1. One team's refinement session observed, with notes on what already works.
                2. A pairing session held to draft their definition of ready.
                3. Two specific suggestions agreed with their backlog owner.
                4. A follow-up after a month to see what stuck.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One other team has been observed, helped to draft a definition of ready and followed up after a month, with outcomes noted."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Offer one team a coaching cycle on their refinement"
                - "Observe one of their refinement sessions and note what works"
                - "Pair with their backlog owner to draft a definition of ready"
                - "Check in after a month on which changes stuck"
---

# Product Backlog Grooming

This area is for product managers, product owners and engineers who want each sprint to start from work the team already understands. It begins with the foundations (a ticket count baseline, one owner of the order, a ticket template, a definition of ready and a first stale ticket purge), then the weekly and monthly routines that keep the backlog in shape, the splitting, acceptance criteria and estimation skills, the clean-up decisions, dated events such as a ticket bash or a tracker migration, situations from solo developers to platform and agency teams, and finally flow analysis, forecasting and coaching other teams.

What repeats is weekly refinement, twice-weekly triage, a weekly ready buffer check and bug rotation handover, monthly stale ticket, debt, dependency and carry-over checks, and a quarterly health review and reset workshop. The Operational checklist, Meeting notes, Risk register, Metrics log and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
