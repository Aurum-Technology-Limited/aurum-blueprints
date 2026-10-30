---
id: strategy-leadership.cross-functional-strategic-alignment
name: Cross-Functional Strategic Alignment
description: "Get departments pulling the same way: one shared priority list, mapped dependencies, a fair escalation path for conflicts, a planning interlock and the habits that keep teams aligned between plans."
category: business
version: 1.0.0
tags: [strategy-leadership, cross-functional-strategic-alignment, manager, enterprise, team, dependencies, interlock, matrix-working]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - risk-register
    - one-on-one
    - feedback-themes
    - metrics-log
    - purchase-decision
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Cross-Functional Strategic Alignment
          description: "Getting departments to pull in the same direction on shared priorities, resolving conflicts and managing dependencies between teams."
          projects:
            - name: One shared priority list across departments
              description: |-
                ## Purpose
                When sales, product, operations and finance each keep their own top ten, the organisation has forty priorities and none of them win the argument for people or money. A single ranked list of no more than seven cross-functional priorities, agreed by every department head, gives teams a tie-breaker they can point to when two requests collide.

                ## Milestones
                1. Every department's current priorities collected on one sheet, with owners and expected outcomes.
                2. Duplicates and near-duplicates merged, leaving a long list of distinct priorities.
                3. A ranked list of no more than seven priorities, each with a one-line reason for its position.
                4. The ranked list signed off by every department head and published where all teams can see it.

                ## Notes
                Rank, do not group. A list of seven equal priorities settles nothing when two of them want the same engineer in the same week.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ranked list of at most seven cross-functional priorities is signed off by every department head and published to all teams."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask each department head for their current top five priorities in writing"
                - "Paste every priority onto one sheet with its owner and intended outcome"
                - "Merge duplicates and flag priorities that pull against each other"
                - "Run a ranking session with department heads to agree the top seven"
                - "Publish the ranked list on the shared workspace with the date agreed"
            - name: Function interface map of who owns what
              description: |-
                ## Purpose
                Much cross-team friction comes from work nobody owns or two teams both think they own, such as pricing changes, customer onboarding or data quality. Mapping each function's core outputs and the handovers between them shows the gaps and overlaps on one page, before they turn into arguments.

                ## Milestones
                1. Each department's main outputs listed in a sentence each, confirmed by its head.
                2. The handovers between departments drawn as a simple map with the item passed and the receiving team.
                3. Gaps (work nobody owns) and overlaps (work two teams claim) marked on the map.
                4. An owner agreed for every gap and overlap, recorded on the map.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page interface map shows every department's outputs and handovers, with an agreed owner for each gap and overlap found."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the six to ten departments that touch your top priorities"
                - "Ask each head to name the three outputs their team exists to deliver"
                - "Draw the handovers between teams on a single page"
                - "Mark gaps and double claims in a different colour"
                - "Agree an owner for each marked item with the heads involved"
            - name: Dependency map for the top priorities
              description: |-
                ## Purpose
                Most cross-functional delays are not caused by one slow team but by a dependency that nobody wrote down until it was late. Listing, for each top priority, what every team needs from every other team and by when turns hidden assumptions into commitments that can be tracked.

                ## Milestones
                1. Each top priority broken into the contributions needed from each department.
                2. Every dependency recorded with the giving team, receiving team, item and needed-by month.
                3. Dependencies that sit on more than one priority's critical path highlighted.
                4. Each giving team's lead has confirmed or challenged the dates for their dependencies.

                ## Notes
                A dependency is only real when the giving team has said yes to it. Anything the receiving team has assumed but not asked for goes in a separate column marked unconfirmed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every top priority has a dependency list with giver, receiver, item and month, and each giving team has confirmed or disputed its dates."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick the first priority and list what each department must contribute"
                - "Record each dependency with giver, receiver, item and needed-by month"
                - "Repeat the exercise for the remaining top priorities"
                - "Send each giving team its list and ask for confirmation within a week"
                - "Highlight dependencies that block more than one priority"
            - name: Alignment diagnostic interviews with department heads
              description: |-
                ## Purpose
                Before fixing alignment, find out where it actually breaks: in planning, in budgets, in handoffs, or in leaders quietly disagreeing about the strategy. Thirty-minute interviews with every department head, asking the same eight questions, usually surface three or four root causes that no meeting has named aloud.

                ## Milestones
                1. A fixed set of eight interview questions written and tested on one friendly peer.
                2. Interviews held with every department head and two or three of their direct reports.
                3. Answers coded into themes, with the number of people raising each.
                4. A two-page diagnostic shared with the leadership team, naming the top root causes.

                ## Notes
                Ask each leader to state the strategy in two sentences. Comparing those answers side by side is often the most useful page of the whole diagnostic.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-page diagnostic built from interviews with every department head names the top alignment root causes and is shared with the leadership team."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Write eight interview questions, including one asking for the strategy in two sentences"
                - "Book thirty-minute interviews with every department head"
                - "Take notes against the same question order in each interview"
                - "Ask the agent to group the interview notes into themes with counts"
                - "Draft the two-page diagnostic and share it with the leadership team"
            - name: Shared outcome measures for joint priorities
              description: |-
                ## Purpose
                If marketing is measured on leads, sales on bookings and service on response time, each team can hit its number while the customer outcome slips. Giving every joint priority one or two outcome measures that the contributing departments share puts their success on the same scoreboard.

                ## Milestones
                1. One or two outcome measures written for each joint priority, defined so the result cannot be gamed by one team alone.
                2. A baseline value and data source agreed for every measure.
                3. Each contributing department head has accepted the shared measure as part of their own goals.
                4. The shared measures added to the published priority list.

                ## Notes
                Keep each department's own operating metrics; the shared measure sits above them rather than replacing them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each joint priority has one or two shared outcome measures with a baseline and data source, accepted in writing by every contributing department head."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List which departments contribute to each joint priority"
                - "Draft one outcome measure per priority that no single team controls"
                - "Confirm the data source and current baseline with the analytics owner"
                - "Get each contributing head to accept the measure in writing"
            - name: Cross-team conflict escalation path
              description: |-
                ## Purpose
                Without an agreed route, cross-team conflicts either fester for weeks or jump straight to the chief executive with half the facts. A written path that says who talks first, what goes in a short escalation note, who decides and how fast lets most conflicts settle at the lowest level and the rest reach a decision within days.

                ## Milestones
                1. A three-step path written: team leads, then department heads, then a named senior decider.
                2. A one-paragraph escalation note format covering the conflict, the options and each side's case.
                3. A target turnaround agreed for each step, such as three working days.
                4. The path shared with all managers and used on at least one live conflict.

                ## Notes
                Insist that both sides write the escalation note together. Joint notes resolve a surprising number of conflicts before anyone has to decide.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written three-step escalation path with a joint note format and turnaround times is shared with every manager and has been used on one real conflict."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Name the senior decider for conflicts between each pair of departments"
                - "Write the joint escalation note format in one paragraph"
                - "Agree turnaround times for each step with department heads"
                - "Brief all managers on the path in their next team meeting"
            - name: Single visible register of cross-functional initiatives
              description: |-
                ## Purpose
                Alignment depends on everyone seeing the same picture, yet cross-team initiatives usually live in five spreadsheets, a slide deck and someone's head. One register listing every initiative that needs more than one department, with its priority rank, lead, contributing teams and status, becomes the place every planning conversation starts.

                ## Milestones
                1. Every live initiative involving two or more departments listed in one register.
                2. Each entry showing priority rank, lead, contributing teams, stage and next milestone.
                3. Initiatives with no link to a shared priority flagged for review.
                4. The register shared read-only with all managers and updated by named owners.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single register lists every cross-functional initiative with rank, lead, teams and stage, and every manager can open it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each department for its live initiatives that need another team"
                - "Set up the register with rank, lead, teams, stage and next milestone columns"
                - "Flag initiatives that do not link to any shared priority"
                - "Share the register with all managers and name who updates each row"
            - name: Single accountable lead for each joint initiative
              description: |-
                ## Purpose
                Joint initiatives co-owned by two directors often belong to neither when a hard call is needed. Naming one accountable lead per initiative, and listing who contributes, who is consulted and who is kept informed, means there is always a person who can say what happens next.

                ## Milestones
                1. One accountable lead named for every initiative in the register.
                2. Contributing, consulted and informed teams listed for each initiative.
                3. Each lead's authority over contributed staff time stated in a sentence.
                4. The assignments confirmed by the department heads who lend people.

                ## Notes
                This sets ownership for individual initiatives only. Organisation-wide rules on who decides what belong in a separate decision rights exercise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every cross-functional initiative has one named accountable lead, with contributor and consulted teams listed and confirmed by the lending heads."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark initiatives in the register that have two or more named owners"
                - "Propose a single accountable lead for each marked initiative"
                - "List contributor, consulted and informed teams beside each lead"
                - "Confirm the assignments with the heads who lend staff"
            - name: Cross-team friction survey baseline
              description: |-
                ## Purpose
                Leaders tend to underestimate how much time their people lose waiting on other teams. A short anonymous survey asking staff where they get blocked, by which team and for how long gives a baseline to measure every later fix against.

                ## Milestones
                1. A survey of no more than eight questions written, including hours lost per week to waiting.
                2. The survey sent to all staff on cross-functional work, with a response rate above 40 percent.
                3. Results summarised by team pair, showing where friction is most often reported.
                4. The top three friction points shared back with staff along with what will happen next.

                ## Notes
                Start from the **Feedback themes** template. Always share results back; a survey that disappears teaches people not to answer the next one.
              priority: medium
              deadlineOffsetDays: 28
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A friction survey with at least a 40 percent response rate is summarised by team pair and its top three findings shared back with staff."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft eight survey questions including hours lost waiting each week"
                - "Send the survey to everyone working on cross-team initiatives"
                - "Summarise answers by which team was waiting on which"
                - "Share the top three friction points and next steps with staff"
            - name: Weekly cross-functional dependency stand-up
              description: |-
                ## Purpose
                Dependencies drift a little every week, and by the time a monthly review notices, the slip is already a month old. A fifteen-minute weekly stand-up with one person from each contributing team, covering only dependencies due in the next three weeks, catches slips while they are still small enough to fix.

                ## Milestones
                1. A standing fifteen-minute slot with one named attendee per contributing team.
                2. An agenda limited to dependencies due in the next three weeks and new blockers.
                3. A running action list with owner and date for every slip raised.
                4. Fewer than one in five dependencies arriving late, measured over a quarter.

                ## Notes
                Keep status updates out. If a dependency is on track, nobody needs to say so aloud.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly dependency stand-up runs for a full quarter with an action list, and fewer than one in five tracked dependencies land late."
                cadence: rolling
              tasks:
                - "Book a recurring fifteen-minute slot with one person per contributing team"
                - "Filter the dependency map to items due in the next three weeks"
                - "Run the dependency stand-up and update the action list @recurring(weekly:tue)"
                - "Count late dependencies at the end of each quarter"
            - name: Monthly cross-functional priority review
              description: |-
                ## Purpose
                Priorities agreed in January rarely survive March untouched, and teams quietly re-rank them if nobody does it openly. A monthly hour with department heads to look at progress on the shared priorities, resolve the conflicts raised and confirm or change the ranking keeps everyone working from the same list.

                ## Milestones
                1. A monthly hour booked with every department head for the year.
                2. A standard pack: progress on each priority, open conflicts and proposed ranking changes.
                3. Decisions and ranking changes recorded and sent to all managers within two days.
                4. No ranking change made outside the review without a recorded reason.

                ## Notes
                Start from the **Meeting notes** template. Circulate the pack two days ahead so the hour goes on decisions rather than reading.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly priority review is held with all department heads, and its decisions are circulated to managers within two days each time."
                cadence: rolling
              tasks:
                - "Book a monthly hour with all department heads for the next twelve months"
                - "Prepare and circulate the review pack two days ahead @recurring(monthly:9)"
                - "Send decisions and ranking changes to all managers after each review"
                - "Note any ranking change made outside the review and its reason"
            - name: Quarterly planning interlock between departments
              description: |-
                ## Purpose
                Teams that plan their quarter in isolation discover in week three that they each assumed the other would do the integration work. An interlock where each department presents its draft quarterly plan to the others, and dependencies are accepted or declined on the spot, turns separate plans into one that fits together.

                ## Milestones
                1. A fixed interlock week in each quarter, two weeks before plans lock.
                2. Each department's draft plan shared in a standard one-page format ahead of the session.
                3. Every dependency request answered with accept, decline or accept with a changed date.
                4. Declined requests escalated or dropped, and the agreed dependencies added to the map.

                ## Notes
                Declining is a useful answer. An interlock where every request is accepted usually means teams are overcommitted and will slip later.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each quarter, every department's plan passes through an interlock and every dependency request is recorded as accepted, declined or redated."
                cadence: cyclic
              tasks:
                - "Choose the interlock week for each quarter two weeks before plans lock"
                - "Send every department the one-page draft plan format"
                - "Run the interlock session and record each dependency answer @recurring(quarterly)"
                - "Update the dependency map with the accepted items"
            - name: Dependency risk register
              description: |-
                ## Purpose
                Some dependencies are riskier than others: a supplier contract owned by procurement, a regulatory sign-off, a single specialist shared by three programmes. Keeping those few high-risk dependencies in a register with likelihood, impact, owner and a fallback plan means the response is ready before the risk lands.

                ## Milestones
                1. Every dependency on the critical path of a top priority assessed for likelihood and impact.
                2. The ten highest-risk dependencies entered with owner and fallback plan.
                3. A monthly update rhythm with owners revising each rating.
                4. At least one fallback plan rehearsed or triggered and the outcome noted.

                ## Notes
                Start from the **Risk register** template. Keep it short: a register of eighty risks gets read by nobody.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register of the ten highest-risk dependencies, each with owner and fallback, is updated every month for six months."
                cadence: rolling
              tasks:
                - "Rate critical-path dependencies for likelihood and impact"
                - "Enter the ten highest-risk items with an owner and fallback plan"
                - "Ask owners to revise ratings and fallbacks @recurring(monthly:14)"
                - "Review which fallback plans have been tested so far"
            - name: Peer one-to-ones with counterpart department heads
              description: |-
                ## Purpose
                Most cross-functional problems are solved, or made worse, in the relationship between two peers long before any forum sees them. A regular thirty-minute conversation with each counterpart whose work most affects yours builds the trust that makes hard trade-offs quicker and less personal.

                ## Milestones
                1. The four or five peers whose decisions most affect your team named.
                2. A monthly thirty-minute slot booked with each of them.
                3. A shared running note per peer, with open asks in both directions.
                4. At least one conflict resolved directly between peers instead of being escalated.

                ## Notes
                Start from the **1:1** template. Ask each peer what your team does that makes their job harder; then do something about one item before the next meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly one-to-ones are held with four or five counterpart heads for six months, each with a running note of open asks."
                cadence: rolling
              tasks:
                - "Name the five peers whose work most affects your team"
                - "Book a monthly thirty-minute slot with each of them"
                - "Update each running note with open asks in both directions @recurring(monthly:20)"
                - "Ask each peer which of your team's habits makes their work harder"
            - name: Monthly capacity clearing for shared specialists
              description: |-
                ## Purpose
                Data analysts, designers, legal reviewers and integration engineers are often shared across every priority, and whoever shouts loudest gets them. A monthly clearing session that allocates these scarce people against the ranked priority list replaces lobbying with a visible, fair rule.

                ## Milestones
                1. The shared specialist roles that limit cross-functional work listed with available hours.
                2. Requests for the coming month gathered against named priorities.
                3. Allocations made in rank order, with unfunded requests recorded and told to the requester.
                4. Specialist managers report fewer unplanned interruptions after three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Shared specialist time is allocated monthly against the ranked priority list, with unfunded requests recorded, for at least six months."
                cadence: rolling
              tasks:
                - "List shared specialist roles and their available hours per month"
                - "Collect next month's requests, each tied to a ranked priority"
                - "Allocate specialist time in priority order and publish the result @recurring(monthly:3)"
                - "Tell each requester whose ask was not funded and why"
            - name: Cross-team conflict log
              description: |-
                ## Purpose
                Recurring conflicts between the same two teams are usually a symptom of a structural problem, but that pattern only shows when conflicts are written down. A simple log of each conflict, the teams, the cause, how it was settled and how long it took reveals which interfaces need fixing rather than refereeing.

                ## Milestones
                1. A log with columns for date, teams, cause, level resolved and days to resolve.
                2. Every escalated conflict entered within a week of being raised.
                3. A quarterly pattern summary showing the most frequent team pairs and causes.
                4. One structural fix agreed for the most frequent pair.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every escalated conflict for two quarters is logged with cause and days to resolve, and one structural fix is agreed for the most frequent team pair."
                cadence: rolling
              tasks:
                - "Set up the conflict log with the five agreed columns"
                - "Enter the week's raised conflicts and their status @recurring(weekly:fri)"
                - "Summarise the most frequent team pairs and causes each quarter"
                - "Propose a structural fix for the pair that appears most often"
            - name: Alignment health measures
              description: |-
                ## Purpose
                Alignment is hard to see directly, but its effects are measurable: the share of dependencies delivered on time, days to settle an escalation, the share of initiatives linked to a ranked priority and staff hours lost to waiting. Tracking four or five of these each quarter shows whether the effort is working or just producing more meetings.

                ## Milestones
                1. Four or five alignment measures chosen, each with a data source and owner.
                2. A baseline recorded for every measure.
                3. Quarterly values recorded and compared with the baseline.
                4. A short note to the leadership team each quarter on what moved and why.

                ## Notes
                Start from the **Metrics log** template. Good starter measures: on-time dependencies, median days to resolve escalations, percentage of initiatives linked to a ranked priority.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four or five alignment measures have a baseline and at least three quarterly readings, each followed by a note to the leadership team."
                cadence: cyclic
              tasks:
                - "Choose four or five alignment measures and name a data owner for each"
                - "Record the baseline value for every measure"
                - "Log the quarterly values and write a short note on what moved @recurring(quarterly)"
            - name: Change control for agreed priorities
              description: |-
                ## Purpose
                New urgent requests arrive every week, and if each one is quietly accepted, the agreed priorities are hollowed out without anyone deciding to drop them. A light change process, where any new cross-functional request must name what it displaces, keeps the list honest while still allowing real changes.

                ## Milestones
                1. A one-paragraph request form asking for the outcome, teams affected and what it displaces.
                2. A named owner who batches requests for the monthly priority review.
                3. Every accepted request recorded with the item it displaced.
                4. Fewer unplanned cross-team requests landing directly on teams after two quarters.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All new cross-functional requests go through a written form naming what they displace, and every accepted change is recorded against the priority list."
                cadence: rolling
              tasks:
                - "Write the one-paragraph request form with a displaces field"
                - "Name the owner who batches requests for the priority review"
                - "Batch and triage new requests before each priority review @recurring(monthly:24)"
                - "Record each accepted change beside the item it displaced"
            - name: Weekly status page for joint programmes
              description: |-
                ## Purpose
                Department heads asking each other for updates in chat is a sign there is no shared status. A one-page weekly status for each joint programme, with traffic lights against the next milestone and the help needed from other teams, cuts update requests and makes asks visible to the people who can meet them.

                ## Milestones
                1. A one-page status format with milestone, colour, reason and help needed from other teams.
                2. Each programme lead posting the page by the same day every week.
                3. Help-needed items picked up at the dependency stand-up.
                4. Fewer ad hoc update requests reported by programme leads after two months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every joint programme posts a one-page status with a help-needed section each week for three months."
                cadence: rolling
              tasks:
                - "Agree the one-page status format with programme leads"
                - "Post each joint programme's status page @recurring(weekly:thu)"
                - "Move help-needed items onto the dependency stand-up agenda"
            - name: Influencing peers without positional authority
              description: |-
                ## Purpose
                Cross-functional work mostly means asking people who do not report to you to change their plans. Practising a small set of influence habits, such as framing asks in the other team's goals, trading favours openly and bringing data rather than opinion, makes those asks land more often and cost less goodwill.

                ## Milestones
                1. Two books or courses on influence without authority worked through, with notes.
                2. Your three hardest current cross-team asks reframed in the receiving team's terms.
                3. Each reframed ask made and the outcome recorded.
                4. Feedback from two peers on how your requests come across.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three real cross-team asks are reframed in the receiving team's goals, made and their outcomes recorded, with feedback from two peers."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Pick one book or course on influencing without authority"
                - "Write down your three hardest open asks of other teams"
                - "Rewrite each ask in terms of the other team's own targets"
                - "Ask two peers how your requests usually come across"
            - name: Facilitating trade-off conversations between departments
              description: |-
                ## Purpose
                When two departments want incompatible things, a meeting without a method becomes a debate won by the most senior or most stubborn person. Learning to facilitate a structured trade-off, with options laid side by side against the shared priorities, lets the group choose rather than argue.

                ## Milestones
                1. A simple trade-off format chosen, such as options against criteria with an explicit cost of each.
                2. The format practised on a low-stakes disagreement.
                3. The format used to settle one real cross-department conflict, with the decision recorded.
                4. A short reflection on what to change next time.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A structured trade-off format has been used to settle one real cross-department conflict, with the options and decision recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose a trade-off format with options, criteria and the cost of each"
                - "Practise the format on a small disagreement within your team"
                - "Facilitate a real cross-department trade-off using the format"
                - "Write a short note on what worked and what to change"
            - name: Negotiating shared timelines and resources
              description: |-
                ## Purpose
                Most cross-team negotiations are treated as a fixed pie, so one side wins the date and the other resents it. Interest-based negotiation, which separates what each team says it needs from why it needs it, often finds a sequence or scope that gives both sides the part they care about.

                ## Milestones
                1. The basics of interest-based negotiation learned from one recognised source.
                2. A preparation sheet written for one live negotiation: your interests, theirs, options and your walk-away.
                3. The negotiation held and the agreement written down by both sides.
                4. A second negotiation prepared with the same sheet.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two cross-team negotiations are prepared with a written interests sheet and each ends in an agreement both sides have recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read a recognised introduction to interest-based negotiation"
                - "Write a preparation sheet for one live timeline or resource negotiation"
                - "Hold the negotiation and send both sides a written summary"
                - "Prepare the next negotiation with the same sheet"
            - name: Learning the economics of a neighbouring function
              description: |-
                ## Purpose
                Conflicts with finance, operations or sales often come from not understanding what drives their numbers, such as margin per order, utilisation or quota timing. Spending a few hours learning how a neighbouring function is measured and what keeps its head awake makes your requests realistic and your compromises smarter.

                ## Milestones
                1. One neighbouring function chosen, based on where most of your conflicts occur.
                2. A shadowing session or interview with someone in that function completed.
                3. A one-page note on its key measures, calendar pressures and constraints.
                4. One request to that function rewritten in light of what you learned.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note on a neighbouring function's measures and pressures exists, based on a shadowing session, and one request has been rewritten with it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick the function you clash with most often"
                - "Ask its head for an hour of shadowing or an interview"
                - "Write one page on its measures, calendar pressures and constraints"
                - "Rewrite your next request to that function using the note"
            - name: Writing dependency requests other teams can accept
              description: |-
                ## Purpose
                Vague requests such as 'we need data support in Q3' get vague answers and late delivery. A short request that states the item, the date, the quality bar, the priority it serves and what happens if it is late gives the other team enough to plan and a real basis to say yes or no.

                ## Milestones
                1. A five-part request format written: item, date, quality bar, priority served, cost of delay.
                2. Three current requests rewritten in the format.
                3. The format shared with your team for all cross-team asks.
                4. Receiving teams confirm the new requests are easier to plan against.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A five-part request format is in use by your team, and three live requests have been rewritten and accepted or declined clearly."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the five-part dependency request format"
                - "Rewrite your three open requests to other teams in the format"
                - "Ask the agent to check each rewritten request for missing dates or quality bars"
                - "Share the format with your team for all future asks"
            - name: Queues and handoffs through a systems lens
              description: |-
                ## Purpose
                Work that crosses three teams spends most of its life waiting in someone's queue, not being worked on. Learning the basics of flow, such as work in progress limits, queue time and the effect of batch size, explains why cross-functional delivery is slow and points to fixes that do not need more people.

                ## Milestones
                1. The core ideas of flow and queues learned from one practical book or course.
                2. One cross-team process traced end to end, with touch time and wait time for each step.
                3. The longest wait identified and its cause written down.
                4. One change proposed to the teams involved, such as a smaller batch or a work in progress limit.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One cross-team process is traced with touch and wait times per step, and a change to its longest wait is proposed to the teams involved."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose a practical book or course on flow and queues"
                - "Trace one request through every team it touches, noting wait times"
                - "Find the longest wait and ask the owning team what causes it"
                - "Propose one flow change to the teams involved"
            - name: Cross-functional pre-mortem before a joint launch
              description: |-
                ## Purpose
                Teams rarely tell each other in advance what they fear will go wrong, so the risks sit in separate heads until the launch fails. A pre-mortem, where each function imagines the initiative has failed and writes down why, surfaces cross-team risks in an hour and gives people permission to say the awkward thing.

                ## Milestones
                1. A pre-mortem method learned and a facilitator chosen who is not the initiative lead.
                2. A session held with at least one person from every contributing function.
                3. Failure causes grouped and the top five turned into mitigation actions with owners.
                4. Mitigations added to the dependency risk register.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A pre-mortem with every contributing function produces five owned mitigation actions, all entered in the risk register."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read a short guide to running a pre-mortem"
                - "Choose a facilitator who is not the initiative lead"
                - "Run the session with one person from every contributing function"
                - "Turn the top five failure causes into owned mitigations"
            - name: Retiring duplicate initiatives across departments
              description: |-
                ## Purpose
                Large organisations routinely find two or three teams building versions of the same thing, such as separate customer dashboards or competing supplier reviews. Finding and merging those duplicates frees people and money for the shared priorities and removes a quiet source of rivalry.

                ## Milestones
                1. The initiative register reviewed for initiatives with overlapping outcomes.
                2. A short case for each overlap: what each version does, cost to date and users.
                3. A decision for each overlap: merge, stop one, or keep both with a stated reason.
                4. Released people and budget reassigned to ranked priorities.

                ## Notes
                Stopping someone's project is personal. Thank the team in public and give them a visible role in the surviving version.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every overlapping initiative found has a recorded decision to merge, stop or keep, and released resources are reassigned to ranked priorities."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Scan the initiative register for overlapping outcomes"
                - "Write a short case for each overlap with cost to date and users"
                - "Take each overlap to the priority review for a decision"
                - "Reassign released people and budget to ranked priorities"
            - name: Fixing the sales to delivery handoff
              description: |-
                ## Purpose
                Promises made in the sale that delivery or product cannot keep are one of the most common and expensive cross-functional failures. Agreeing what a deal must include before it is handed over, and a short joint review on larger deals, cuts rework, discounts and unhappy first months for customers.

                ## Milestones
                1. The last ten handoffs reviewed for what was missing or promised wrongly.
                2. A handoff checklist agreed by sales and delivery leaders.
                3. A joint review step for deals above an agreed size or complexity.
                4. Rework or escalations in the first ninety days measured before and after.

                ## Notes
                The same approach works for any handoff between two functions, such as product to support or procurement to operations.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A handoff checklist and joint review step are in use, with first-ninety-day escalations measured before and after the change."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pull the last ten handoffs and note what was missing in each"
                - "Draft a handoff checklist with sales and delivery leads"
                - "Set the deal size that triggers a joint review"
                - "Measure first-ninety-day escalations before and after the change"
            - name: Shared definitions of lead, customer and churn
              description: |-
                ## Purpose
                When marketing, sales, finance and service each count customers differently, every cross-team meeting starts with an argument about whose number is right. Agreeing one written definition for the handful of terms that cross functional lines turns those arguments into conversations about what to do.

                ## Milestones
                1. The ten terms most often disputed across functions listed.
                2. Each function's current definition recorded side by side.
                3. One agreed definition per term, with the system that holds it.
                4. The definitions published and reporting updated to use them.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published glossary of the ten most disputed cross-functional terms is agreed by each function head and used in reporting."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the ten terms that cause the most cross-team number disputes"
                - "Collect each function's current definition of every term"
                - "Agree one definition per term with the function heads"
                - "Ask the reporting owner to update dashboards to the agreed definitions"
            - name: Common planning calendar across functions
              description: |-
                ## Purpose
                Finance closes its budget in one month, product plans its roadmap in another and sales sets quotas in a third, so every plan is built on another team's stale assumptions. A single calendar that sequences these cycles so each feeds the next stops the yearly scramble of replanning.

                ## Milestones
                1. Every function's planning, budgeting and target-setting dates collected.
                2. Places where one plan depends on another that is not yet finished marked.
                3. A proposed sequence agreed by function heads and finance.
                4. The calendar published for the coming year and reviewed annually.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One planning calendar sequencing every function's cycles is agreed by function heads and finance and published for the year."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect planning, budget and target dates from every function"
                - "Mark where one plan relies on another that is not yet done"
                - "Agree a new sequence with function heads and finance"
                - "Review the planning calendar before the new cycle starts @recurring(yearly)"
            - name: Choosing a shared work tracking tool
              description: |-
                ## Purpose
                Teams on three different tracking tools cannot see each other's dependencies without someone copying updates by hand. Choosing whether to standardise, connect the existing tools or accept a light shared layer on top is a real decision with costs, and making it deliberately avoids a forced migration nobody uses.

                ## Milestones
                1. Current tools and the teams using them listed.
                2. Three options compared: standardise, integrate, or a shared summary layer.
                3. Each option scored on cost, migration effort and visibility of dependencies.
                4. A decision recorded with the reason and a pilot team named.

                ## Notes
                Start from the **Purchase decision** template. The visibility problem is usually fixed by agreeing fields and a weekly update, not by the tool itself.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on standardising, integrating or layering work tracking tools, scored on cost and visibility, with a pilot team named."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every tracking tool in use and the teams on each"
                - "Compare standardise, integrate and summary layer options"
                - "Score each option on cost, migration effort and dependency visibility"
                - "Record the decision and name a pilot team"
            - name: Aligning incentives with shared priorities
              description: |-
                ## Purpose
                People follow what they are paid and promoted for, so if bonuses reward only departmental targets, alignment work will lose every time it competes. Working with HR to put a share of each leader's goals on the shared outcome measures makes cooperation part of the job rather than a favour.

                ## Milestones
                1. Current bonus and goal structures for department heads reviewed with HR.
                2. A proposal for the share of goals tied to shared outcome measures.
                3. The proposal agreed by the executive team and HR.
                4. The new goals in place for the next performance cycle.

                ## Notes
                Pay and contract changes have legal and employee relations aspects; let HR and, where needed, employment counsel lead on how they are made.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An agreed share of each department head's goals is tied to shared outcome measures and in place for the next performance cycle."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Book time with HR to review department head goal structures"
                - "Draft a proposal for the share of goals tied to shared measures"
                - "Take the proposal to the executive team with HR"
                - "Confirm the new goals before the next performance cycle starts"
            - name: Joint budget pool for cross-functional initiatives
              description: |-
                ## Purpose
                Initiatives that need money from three departmental budgets often stall while each department waits for the others to commit first. A small central pool, or an agreed rule for splitting costs, lets a ranked cross-functional priority start without three separate budget fights.

                ## Milestones
                1. The last year's stalled cross-functional initiatives reviewed for budget causes.
                2. Two options compared with finance: a central pool or a cost-sharing rule.
                3. A decision recorded on size, owner and approval route.
                4. The first initiative funded through the new route.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A central pool or cost-sharing rule for cross-functional initiatives is agreed with finance, and one initiative has been funded through it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List initiatives that stalled last year over budget splits"
                - "Compare a central pool and a cost-sharing rule with finance"
                - "Record the decision on size, owner and approval route"
                - "Fund the first ranked initiative through the new route"
            - name: Trimming the alignment meeting load
              description: |-
                ## Purpose
                Alignment efforts tend to add meetings until managers spend more time coordinating than delivering. Auditing every cross-functional forum against its purpose and attendance, then cutting or merging the weak ones, protects the forums that matter and gives hours back.

                ## Milestones
                1. Every recurring cross-functional meeting listed with purpose, length and attendees.
                2. Each meeting rated on whether it produces decisions or only updates.
                3. Weak meetings cancelled, merged or shortened, with the changes announced.
                4. Hours saved per manager per month calculated.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All recurring cross-functional meetings are audited, at least a quarter of meeting hours are cut or merged, and the hours saved are reported."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export every recurring cross-team meeting from the shared calendar"
                - "Rate each meeting as decision-making or update-only"
                - "Cancel or merge the update-only meetings and announce the change"
                - "Calculate the hours saved per manager per month"
            - name: Annual cross-functional planning workshop
              description: |-
                ## Purpose
                A one-day workshop where every department head builds next year's shared priorities in the same room does more for alignment than a dozen rounds of document comments. Prepared well, with the diagnostic, the friction survey and draft plans in hand, it ends with a ranked list and a dependency map that everyone helped draw.

                ## Milestones
                1. A date, venue and neutral facilitator confirmed for the workshop.
                2. Pre-reads sent a week ahead: diagnostic, survey results and each department's draft plan.
                3. The workshop held, ending with a draft ranked priority list and dependency map.
                4. The outputs written up and confirmed by every head within a week.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A planning workshop with every department head produces a draft ranked priority list and dependency map, confirmed in writing within a week."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose a date and book a neutral facilitator"
                - "Collect each department's draft plan for the pre-read pack"
                - "Send pre-reads a week before the workshop"
                - "Write up the workshop outputs and ask every head to confirm"
            - name: Launch readiness review across functions
              description: |-
                ## Purpose
                A product, service or system launch touches sales, support, operations, legal and finance, and any one of them unready can turn launch day into a crisis. A readiness review a fortnight out, where each function confirms its part against a checklist, gives time to delay or fix rather than apologise.

                ## Milestones
                1. A readiness checklist with one section per function and a named signer for each.
                2. The review held two weeks before launch with every signer present.
                3. Each function marked ready, ready with conditions, or not ready.
                4. A go, delay or reduced-scope decision recorded with its reasons.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A cross-functional readiness review two weeks before launch records each function's status and a go, delay or reduced-scope decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the readiness checklist with one section per function"
                - "Name a signer for each function's section"
                - "Hold the review two weeks before the launch date"
                - "Record the go, delay or reduced-scope decision and why"
            - name: Joint retrospective after a cross-functional delivery
              description: |-
                ## Purpose
                Each team usually runs its own retrospective, so the lessons about how teams worked together are never captured. One retrospective with every contributing function, focused on handoffs, decisions and dependencies rather than individual performance, produces fixes that improve the next joint delivery.

                ## Milestones
                1. A retrospective booked within three weeks of the delivery, with every function represented.
                2. A timeline of key handoffs, decisions and slips prepared in advance.
                3. Three to five cross-team improvements agreed, each with an owner.
                4. Improvements checked at the next quarterly interlock.

                ## Notes
                Keep the discussion on the system, not on people. If someone is singled out, the next retrospective will be polite and useless.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A joint retrospective with every contributing function agrees three to five owned cross-team improvements, checked at the next interlock."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the joint retrospective within three weeks of delivery"
                - "Prepare a timeline of handoffs, decisions and slips"
                - "Run the session and agree three to five owned improvements"
                - "Add the improvements to the next interlock agenda"
            - name: Mid-year priority reset session
              description: |-
                ## Purpose
                By mid-year, markets, budgets and people have moved enough that some priorities no longer deserve their rank. A half-day reset with department heads, looking honestly at progress and changed conditions, lets the organisation drop or reorder priorities on purpose instead of by neglect.

                ## Milestones
                1. Progress against every shared priority summarised on one page.
                2. Changes in market, budget or capacity since the plan was set listed.
                3. The reset session held and a revised ranking agreed.
                4. The revised list and the reasons for each change sent to all managers.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A mid-year reset session produces a revised priority ranking, sent to all managers with the reason for each change."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Summarise progress on every shared priority on one page"
                - "List changes in market, budget and capacity since the plan was set"
                - "Hold the half-year reset session with department heads @recurring(yearly)"
                - "Send the revised list and reasons to all managers"
            - name: Joint review of a key customer account
              description: |-
                ## Purpose
                Large customers experience the whole organisation at once, and their complaints often trace back to two teams not talking. A review of one key account with sales, service, product and finance in the room shows the customer's view of how aligned you are, and usually produces fixes faster than any internal survey.

                ## Milestones
                1. One key account chosen and its history gathered from each function.
                2. A single page summarising revenue, open issues, promises made and satisfaction signals.
                3. The review held with every function that serves the account.
                4. Agreed actions shared with the account owner and checked a quarter later.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A joint account review with every serving function produces an action list for one key customer, checked again a quarter later."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Choose one key account that has raised issues with several teams"
                - "Ask each function for its history with the account"
                - "Hold a joint account review with each serving function @recurring(quarterly)"
                - "Share the agreed actions with the account owner"
            - name: Working well in a matrix role
              description: |-
                ## Purpose
                Many managers in larger organisations report to a functional head and a business or regional lead at the same time, and get conflicting instructions from both. Agreeing with both bosses how priorities, time and appraisal are split turns a daily tug of war into a known set of rules.

                ## Milestones
                1. Both reporting lines and what each expects from you written down.
                2. A three-way conversation held to agree how time and priorities are split.
                3. A rule agreed for what happens when the two bosses' asks clash.
                4. Both bosses contributing to your appraisal on an agreed basis.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Both bosses in a matrix role have agreed in writing how your time is split and how clashing requests are settled."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write down what each of your two bosses expects this quarter"
                - "Book a three-way meeting with both bosses"
                - "Agree a rule for settling clashing requests"
                - "Confirm how each boss will contribute to your appraisal"
            - name: Inheriting cross-team commitments as a new manager
              description: |-
                ## Purpose
                A manager taking over a team also inherits promises the previous manager made to other departments, some written, many not. Finding and confirming those commitments in the first month avoids discovering them when another team escalates a missed date.

                ## Milestones
                1. Every known commitment to other teams listed from handover notes, the register and the team.
                2. Each counterpart manager asked what they believe your team owes them.
                3. Commitments confirmed, renegotiated or formally released.
                4. The confirmed list added to the dependency map under your name.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within a month of starting, every inherited cross-team commitment is listed and confirmed, renegotiated or released with the counterpart."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your predecessor for every promise made to other teams"
                - "Ask each counterpart manager what they think your team owes them"
                - "Confirm, renegotiate or release each commitment in writing"
                - "Add the confirmed commitments to the dependency map"
            - name: Handling conflicting asks from two departments
              description: |-
                ## Purpose
                Individual team members are often the ones squeezed when two departments both expect their time this week. Knowing how to flag a clash, what to say and who settles it lets a team member stop guessing and stop working evenings to satisfy both.

                ## Milestones
                1. A short team guide on what counts as a clash and how to raise it.
                2. A standard message format for flagging a clash to both requesters and your manager.
                3. The guide used on at least three clashes, each settled within a week.
                4. Team members report fewer weeks with competing urgent requests.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A team guide and message format for flagging clashing requests is in use, with three clashes settled within a week each."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your team for recent examples of clashing requests"
                - "Write a short guide on spotting and raising a clash"
                - "Draft a standard message for flagging a clash to both requesters"
                - "Review how the last three clashes were settled at a team meeting"
            - name: Aligning regional teams with global priorities
              description: |-
                ## Purpose
                Regional or country teams face local customers, regulations and competitors, and global priorities can look irrelevant from there. A clear split of what is set globally, what is adapted locally and what is decided locally, with a regular check-in, keeps regions aligned without making them ask permission for everything.

                ## Milestones
                1. A list of decisions sorted into global, adapted locally and local.
                2. Each region's plan mapped to the global priorities, with deliberate local differences stated.
                3. A monthly global and regional leads call established.
                4. Regional leads confirm the split is workable after one quarter.

                ## Notes
                Time zones matter: rotate the call time so the same region is not always joining at night.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written global, adapted and local decision split exists, each region's plan maps to global priorities, and a monthly leads call has run for a quarter."
                cadence: rolling
              tasks:
                - "Sort recurring decisions into global, adapted locally and local"
                - "Ask each region to map its plan to the global priorities"
                - "Hold the global and regional leads call on a rotating time @recurring(monthly:11)"
                - "Ask regional leads after a quarter whether the split works"
            - name: Working with shared services as an internal customer
              description: |-
                ## Purpose
                Shared services such as IT, HR, finance operations and procurement serve every department, so their priorities are set by whoever asks first or loudest. Agreeing service levels and a quarterly priority conversation between the service and the business teams it serves turns complaints into a plan both sides can hold each other to.

                ## Milestones
                1. The main services each shared function provides listed with current turnaround times.
                2. Service levels for the top five services agreed with business leaders.
                3. A quarterly conversation set up where business teams rank the service's improvement backlog.
                4. Service level performance reported to business leaders each quarter.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Service levels for the top five shared services are agreed, and business teams rank the improvement backlog every quarter for a year."
                cadence: cyclic
              tasks:
                - "List the services each shared function provides and their turnaround"
                - "Agree service levels for the top five services with business leaders"
                - "Hold the quarterly backlog ranking with business teams @recurring(quarterly)"
                - "Report service level performance to business leaders"
            - name: Re-mapping dependencies after a reorganisation
              description: |-
                ## Purpose
                Restructures move people and team boundaries, and the old dependency map quietly becomes fiction. Rebuilding the map in the first two months after a restructure, with new owners confirmed, prevents work from falling into the gaps between old and new teams.

                ## Milestones
                1. Every dependency on the old map checked against the new structure.
                2. Orphaned dependencies (owner moved or team dissolved) given new owners.
                3. New dependencies created by the new structure added.
                4. The updated map confirmed by all new team leads.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within two months of a reorganisation, every dependency has a confirmed owner in the new structure and the map is signed off by new team leads."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check each dependency on the old map against the new structure"
                - "List orphaned dependencies whose owner moved or team was dissolved"
                - "Assign new owners to orphaned dependencies with the new team leads"
                - "Ask each new team lead to confirm the updated map"
            - name: Aligning a team that sits between two departments
              description: |-
                ## Purpose
                Some teams, such as revenue operations, product operations or a business partnering team, exist precisely to connect two departments and can end up trusted by neither. Writing down what the team owns, whom it serves and how it handles requests from both sides gives it a mandate rather than two sets of demands.

                ## Milestones
                1. A team charter naming what the team owns, serves and does not do.
                2. The charter agreed with the heads of both departments it connects.
                3. A single intake for requests from both sides, ranked against shared priorities.
                4. Both departments rate the team's usefulness after a quarter.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A bridging team has a charter agreed by both departments it connects, a single ranked intake, and a usefulness rating from both after a quarter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft the team charter: owns, serves and does not do"
                - "Agree the charter with the heads of both departments"
                - "Set up one intake for requests from both sides"
                - "Ask both departments to rate the team after a quarter"
            - name: Critical path analysis across programmes
              description: |-
                ## Purpose
                Experienced alignment leads look past individual programmes to the few dependencies that sit on the critical path of several at once, such as a data platform or a shared contract renewal. Mapping those chains across the portfolio shows where a single slip delays three priorities, and where extra investment buys the most time.

                ## Milestones
                1. Dependencies from every programme combined into one portfolio view.
                2. The chains that sit on two or more programmes' critical paths identified.
                3. Slack (how late each item can be without delaying an outcome) estimated for each chain.
                4. A recommendation to the leadership team on where to add capacity or resequence.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A portfolio critical path view identifies shared dependency chains with estimated slack, and a recommendation is presented to the leadership team."
                cadence: rolling
              tasks:
                - "Combine every programme's dependencies into one portfolio view"
                - "Mark chains that sit on two or more critical paths"
                - "Ask the agent to summarise the chains with the least slack"
                - "Refresh the shared critical path chains with programme leads @recurring(monthly:27)"
            - name: Tracing team work back to shared priorities
              description: |-
                ## Purpose
                Even with a clear priority list, a sample of what teams are actually working on often shows a third of effort going elsewhere. Tracing a random sample of team work items back to the shared priorities, once a year, shows how far the strategy really reaches and which teams need help connecting.

                ## Milestones
                1. A random sample of work items drawn from at least six teams.
                2. Each item traced to a ranked priority, a departmental priority or neither.
                3. The share of effort on each category reported by team.
                4. Teams with the weakest link given help to reconnect their plans.

                ## Notes
                Report findings as a property of the planning system, not a judgement on teams. Unlinked work is often legitimate operational work that needs naming, not stopping.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly trace of sampled work items from six or more teams reports the share linked to ranked priorities, by team."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Draw a random sample of work items from at least six teams"
                - "Trace each item to a ranked priority, a departmental priority or neither"
                - "Report the share of effort in each category by team"
                - "Repeat the trace before each annual planning workshop @recurring(yearly)"
            - name: Setting up a small alignment office
              description: |-
                ## Purpose
                In larger organisations, the registers, interlocks and reviews in this area need someone to run them, or they fade within two quarters. A small alignment office, often two or three people sitting with the strategy or programme function, keeps the machinery running and gives department heads a neutral broker.

                ## Milestones
                1. The alignment office's remit written: what it runs, what it does not decide.
                2. A head and one or two analysts named, with time formally allocated.
                3. Ownership of the register, interlock, stand-up and health measures handed to the office.
                4. Department heads rate the office's neutrality and usefulness after two quarters.

                ## Notes
                Keep decisions with the leaders. An office that starts deciding priorities loses its neutrality and its welcome.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An alignment office with a written remit and named staff owns the register, interlock and health measures, rated by department heads after two quarters."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write a one-page remit for the alignment office"
                - "Agree headcount and time allocation with the executive sponsor"
                - "Hand over the register, interlock and health measures to the office"
                - "Survey department heads on the office after two quarters"
            - name: Value stream teams around a customer outcome
              description: |-
                ## Purpose
                Where handoffs between functions are the main source of delay, some organisations stop coordinating separate departments and instead form a standing team around one customer outcome, such as getting a new client live. Designing and piloting one such team, with members drawn from each function, tests whether the structure removes the friction before anyone redraws the organisation chart.

                ## Milestones
                1. One customer outcome chosen where handoffs cause the most measurable delay.
                2. A pilot team designed with members from each function and a single lead.
                3. Baseline cycle time and quality measured before the pilot starts.
                4. A six-month pilot completed and results compared with the baseline.
                5. A decision recorded to scale, adjust or stop the model.

                ## Notes
                Agree in advance how members' line managers will appraise them, or the pilot will be undermined by old reporting lines.
              priority: low
              deadlineOffsetDays: 210
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A six-month value stream pilot is completed with cycle time compared to baseline and a recorded decision to scale, adjust or stop."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Pick the customer outcome where handoffs cause the most delay"
                - "Measure current cycle time and quality for that outcome"
                - "Design the pilot team with one member per function and a single lead"
                - "Agree with line managers how pilot members will be appraised"
                - "Compare pilot results with the baseline after six months"
---

# Cross-Functional Strategic Alignment

This area is for the manager, department head or team caught between functions that each have their own plan, and who needs those plans to add up to the same strategy. It starts with the foundations (a shared priority list, an interface map of who owns what, the dependency map, a diagnostic of where alignment breaks and an escalation path for conflicts), then the operating machinery of stand-ups, interlocks and registers, the skills of influencing and negotiating across lines, the decisions that remove duplicate work and broken handoffs, the dated workshops and reviews, situations such as matrix roles, regional teams and shared services, and finally the specialist work of portfolio critical paths and value stream teams.

What repeats is the alignment rhythm: a weekly dependency stand-up, conflict log and status page, monthly priority reviews, peer one-to-ones, capacity clearing and risk register updates, and a quarterly planning interlock and alignment health check. The **Meeting notes**, **Risk register**, **1:1**, **Feedback themes**, **Metrics log** and **Purchase decision** templates pair with the priority review, the dependency risk register, peer one-to-ones, the friction survey, alignment measures and the choice of a shared tracking tool. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
