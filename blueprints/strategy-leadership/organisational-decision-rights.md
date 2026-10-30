---
id: strategy-leadership.organisational-decision-rights
name: Organisational Decision Rights
description: "A clear map of who decides what, a delegation of authority people can find, escalation paths with time limits, a decision log and the review rhythm that keeps all of it true as the organisation changes."
category: business
version: 1.0.0
tags: [strategy-leadership, organisational-decision-rights, manager, enterprise, team, decision-making, delegation, governance]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - meeting-notes
    - risk-register
    - compliance-control
    - metrics-log
    - one-on-one
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Organisational Decision Rights
          description: "Clarifying who decides what, how decisions are escalated and recorded, so the organisation moves faster with fewer surprises."
          projects:
            - name: Decision pain inventory from the last quarter
              description: |-
                ## Purpose
                Before drawing any matrix, find out where decisions actually hurt: the pricing call that took nine weeks, the hire approved twice by different people, the launch nobody knew had been cancelled. Twelve to fifteen short conversations and a look back through recent emails give you a list of real cases, which is far more persuasive to a leadership team than a framework slide.

                ## Milestones
                1. Twelve or more conversations held with managers and team members across at least four functions.
                2. A list of at least fifteen recent decisions that were slow, duplicated, reversed or made by the wrong person.
                3. Each case tagged with its cost in days, money or rework where it can be estimated.
                4. The five most damaging patterns written up on one page and shared with the sponsor.

                ## Notes
                Ask for stories, not opinions. "Tell me about the last decision that got stuck" produces better material than "Are our decision rights clear?"
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of at least fifteen real decision failures from the last quarter, grouped into five patterns, is with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the three questions you will ask in every decision pain conversation"
                - "Book twenty-minute conversations with twelve people across four functions"
                - "Log each stuck, duplicated or reversed decision with its rough cost"
                - "Group the cases into patterns and draft the one-page summary"
            - name: Map of the twenty decisions that matter most
              description: |-
                ## Purpose
                Organisations make thousands of decisions, but perhaps twenty recurring ones decide most of the value: budgets, senior hires, pricing, product scope, major contracts, market entry. Naming those twenty, with how often each comes up and who makes it today, keeps the decision rights work focused on what moves the business instead of on every expense claim.

                ## Milestones
                1. A long list of recurring decisions drawn from the pain inventory, the calendar and the approval systems.
                2. The list cut to the twenty that carry the most money, risk or customer impact.
                3. For each of the twenty, its frequency and the person or forum that makes it today.
                4. The map reviewed by two senior leaders who did not build it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written list of the twenty highest-impact recurring decisions, each with its frequency and current decider, reviewed by two senior leaders."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the approval types configured in the finance and HR systems"
                - "List every recurring decision mentioned in the pain inventory"
                - "Score each decision for money, risk and customer impact"
                - "Ask two senior leaders to challenge the final twenty"
            - name: Choosing a decision rights framework
              description: |-
                ## Purpose
                RACI, RAPID, DACI and the advice process all describe roles in a decision, but they suit different cultures and mixing them causes confusion. Picking one vocabulary for the whole organisation, and writing down what each role means in your words, stops arguments about whether "consulted" means a veto.

                ## Milestones
                1. Three candidate frameworks compared on one page against the same four criteria.
                2. Two trial decisions mapped in each candidate to see which reads most clearly.
                3. One framework chosen by the sponsor, with the reason recorded.
                4. A one-paragraph definition of each role in plain language, including who holds the veto, if anyone.

                ## Notes
                Most organisations do best with a single decider role and a clear advisory role. A framework with two or more people who can each say yes is a framework that will stall.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One decision rights framework chosen and recorded, with written role definitions that state who has the final say."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Summarise RACI, RAPID and DACI on a single comparison page"
                - "Map two recent real decisions in each framework"
                - "Agree the choice with the sponsor and record the reason"
                - "Write plain-language definitions of every role in the chosen framework"
            - name: Decision rights matrix for the leadership team
              description: |-
                ## Purpose
                Leadership teams lose the most time on decisions that sit between two or three executives, where each assumes another will decide or each believes they already have. A matrix covering the twenty key decisions, with one named decider per row and the people who must be consulted or informed, turns those collisions into a document you can point to.

                ## Milestones
                1. A draft matrix with one row per key decision and one column per leadership role.
                2. Exactly one decider named for every row.
                3. Every executive's disagreements with the draft heard in a one-to-one before the group session.
                4. The matrix agreed in a leadership meeting and published where managers can find it.

                ## Notes
                If two leaders both insist on being the decider, split the decision into parts (for example budget envelope and allocation inside it) rather than naming two deciders.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published leadership decision rights matrix with one named decider for each of the twenty key decisions, agreed in a recorded leadership meeting."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Draft the matrix rows from the map of twenty key decisions"
                - "Hold a thirty-minute one-to-one with each executive on their rows"
                - "Resolve every row that still shows two deciders"
                - "Publish the agreed matrix on the leadership intranet page"
            - name: Delegation of authority schedule for spending and contracts
              description: |-
                ## Purpose
                Finance teams, auditors and new managers all need one document that says who can approve which spending, sign which contracts and commit to which hires, at what value. Writing or rebuilding the delegation of authority schedule, with thresholds by role rather than by person, closes the gap between what the policy says and what the purchasing system actually enforces.

                ## Milestones
                1. The current schedule, if any, and the thresholds configured in the finance system compared line by line.
                2. Thresholds set by role for operating spend, capital spend, contracts, hires and write-offs.
                3. Rules for sub-delegation, absence cover and splitting purchases written down.
                4. The schedule approved by the chief executive and finance lead and reflected in the system.

                ## Notes
                Agree the legal and audit implications with your finance lead and, where relevant, your company secretary or legal counsel. This project organises the document; they own the conclusions on what the law or your regulator requires.

                Start from the **Compliance control** template.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved delegation of authority schedule with role-based thresholds for five categories, matching the limits configured in the finance system."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Export the approval limits currently set in the finance system"
                - "Compare the exported limits with the written policy line by line"
                - "Draft role-based thresholds for spend, contracts, hires and write-offs"
                - "Book a sign-off meeting with the chief executive and finance lead"
            - name: Decision log set-up
              description: |-
                ## Purpose
                Six months after a decision, few people can say who made it, what alternatives were rejected or what assumption it rested on. A simple shared log with date, decision, decider, options considered and review date gives the organisation a memory, and makes reopening settled questions harder.

                ## Milestones
                1. A log created in the tool the leadership team already uses, with seven fixed fields.
                2. The last ten significant decisions entered retrospectively as examples.
                3. A rule agreed on which decisions must be logged and by whom.
                4. The log link added to the leadership meeting agenda template.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared decision log with seven fixed fields and at least ten entries exists, and the logging rule is written at the top."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the log with date, decision, decider, options, rationale, review date and link fields"
                - "Enter the last ten significant leadership decisions"
                - "Write the rule for which decisions must be logged"
                - "Add the log link to the leadership agenda template"
            - name: Escalation path with time limits
              description: |-
                ## Purpose
                Escalation is healthy when two peers genuinely cannot agree; it is corrosive when it becomes the default way to avoid a decision or win an argument. A written path that says who escalates to whom, what must be prepared and how many working days each level has to respond keeps disputes moving and makes repeat escalators visible.

                ## Milestones
                1. Escalation levels defined from team to executive, with a named role at each.
                2. A response limit in working days set for each level.
                3. A short escalation note format requiring both sides' positions and a recommended option.
                4. The path published alongside the decision rights matrix.

                ## Notes
                Require the two parties to write the escalation note together. Many disputes resolve during the writing.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published escalation path with named roles and response limits at every level, and a joint escalation note format in use."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft the escalation levels from team lead up to the executive team"
                - "Set a response limit in working days for each level"
                - "Write a one-page joint escalation note format"
                - "Publish the path next to the decision rights matrix"
            - name: One-way and two-way door decision classification
              description: |-
                ## Purpose
                Treating every decision with the same caution is why small teams wait a fortnight for permission to run a reversible test. Sorting the key decisions into those that are expensive to undo and those that can be reversed in days lets you push the reversible ones down the organisation and keep senior attention for the few that cannot be taken back.

                ## Milestones
                1. Each of the twenty key decisions classified as hard or easy to reverse, with the reason.
                2. A rule agreed that reversible decisions sit at the lowest competent level.
                3. Three reversible decisions moved down a level as a first test.
                4. The classification added as a column in the decision rights matrix.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "All twenty key decisions carry a reversibility classification in the matrix, and at least three reversible ones have moved down a level."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark each key decision as hard or easy to reverse with a one-line reason"
                - "Pick three reversible decisions to push down a level"
                - "Tell the affected managers about the change and the review date"
                - "Add the reversibility column to the decision rights matrix"
            - name: Decision rights charter signed off by the chief executive
              description: |-
                ## Purpose
                Matrices and schedules are easy to ignore unless someone senior has said, in writing, that they are how the organisation works. A short charter that sets the principles (one decider, decisions at the lowest competent level, log what matters, escalate within limits) gives managers cover to use their authority and to refuse decisions that are not theirs.

                ## Milestones
                1. A charter of no more than two pages stating five or six principles.
                2. Links from the charter to the matrix, the delegation schedule and the escalation path.
                3. The charter signed by the chief executive and sent to all people managers.
                4. A named owner and annual review date written on the charter.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed two-page decision rights charter with a named owner and review date has been sent to every people manager."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft five or six decision principles in plain language"
                - "Ask the agent to tighten the charter draft to two pages"
                - "Get the chief executive's comments and signature"
                - "Send the charter to all people managers with links to the matrix"
            - name: Weekly decision log review
              description: |-
                ## Purpose
                A decision log decays within weeks if nobody looks at it: entries go missing, review dates pass and the same question reappears on next month's agenda. Fifteen minutes every Friday to check new entries, chase missing ones and flag decisions due for review keeps the log trustworthy enough that people consult it.

                ## Milestones
                1. A standing fifteen-minute Friday slot in the log owner's calendar.
                2. Missing entries chased with the deciders within the same week.
                3. Decisions whose review date has arrived listed for the next leadership meeting.
                4. A count of entries per month kept so gaps are visible.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every significant leadership decision from the past month appears in the log, and no review date is more than a week overdue."
                cadence: rolling
              tasks:
                - "Block a fifteen-minute Friday slot for the decision log"
                - "Review new entries and chase missing ones from this week @recurring(weekly:fri)"
                - "List decisions past their review date for the next leadership agenda"
                - "Track the number of log entries per month on the log's front page"
            - name: Monthly escalation backlog clearance
              description: |-
                ## Purpose
                Escalations that wait in an executive's inbox are decisions nobody is making, and the teams behind them stop work or work around the gap. A monthly sweep of every open escalation, its age and its owner, followed by a decision or a date for each, keeps the backlog short and shows which pairs of teams escalate repeatedly.

                ## Milestones
                1. One list of every open escalation with age and the level it sits at.
                2. Each escalation older than its time limit decided or given a firm date.
                3. Pairs of teams with three or more escalations in a quarter flagged.
                4. A root cause conversation booked for each flagged pair.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No open escalation is older than its published time limit after each monthly sweep, and repeat pairs have a root cause conversation booked."
                cadence: rolling
              tasks:
                - "Collect every open escalation into one list with its age"
                - "Clear or date every escalation past its time limit @recurring(monthly:9)"
                - "Flag team pairs with three or more escalations this quarter"
                - "Book a root cause conversation for each repeat pair"
            - name: Quarterly decision rights matrix refresh
              description: |-
                ## Purpose
                Every reorganisation, new hire at executive level and new product line quietly invalidates rows of the matrix. A quarterly refresh with each executive, checking their rows against what actually happened in the last three months, keeps the document describing reality rather than the organisation as it was at launch.

                ## Milestones
                1. Each executive's rows checked against real decisions from the decision log.
                2. Rows changed by reorganisations or new roles updated.
                3. Any row where practice differs from the matrix resolved: change the practice or change the row.
                4. A change note sent to managers listing what moved and why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The matrix carries a refresh date within the last three months, and a change note for that refresh has gone to all managers."
                cadence: cyclic
              tasks:
                - "Compare last quarter's logged decisions with the matrix rows"
                - "Run the matrix refresh with each executive @recurring(quarterly)"
                - "Decide for each mismatch whether to change the practice or the row"
                - "Send a short change note to all people managers"
            - name: Annual delegation of authority review
              description: |-
                ## Purpose
                Inflation, growth and new risks make last year's thresholds wrong: a limit that once covered a small contract may now force a director to approve routine renewals, or a threshold set in a small company may be too loose for a larger one. A yearly review with finance, using a year of approval data, resets limits on evidence.

                ## Milestones
                1. Twelve months of approval data pulled by category and approver level.
                2. Categories where senior approvers rubber-stamp most requests identified.
                3. Revised thresholds proposed and agreed with finance and, where required, the board.
                4. The finance system and the published schedule updated on the same day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A revised delegation of authority schedule, based on twelve months of approval data, is approved and matches the system configuration."
                cadence: cyclic
              tasks:
                - "Request twelve months of approval data from finance"
                - "Start the delegation of authority review with the finance lead @recurring(yearly)"
                - "Find categories where senior approvers approve almost everything"
                - "Update the system and the schedule on the same day"
            - name: Post-decision reviews of big calls
              description: |-
                ## Purpose
                Leaders usually judge decisions by their outcomes, which rewards luck and punishes sound bets that went wrong. Reviewing one or two significant decisions a month against what was known at the time, who decided and how long it took builds a body of evidence about where the decision system works and where it needs changing.

                ## Milestones
                1. A short review format separating decision quality from outcome.
                2. One or two significant decisions reviewed each month from the log.
                3. Findings about the process (wrong decider, missing input, slow escalation) recorded separately from findings about the call itself.
                4. A quarterly summary of process findings fed into the matrix refresh.

                ## Notes
                Keep reviews blameless and short. The aim is to improve who decides and how, not to relitigate the choice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten post-decision reviews are completed in a year, each recording process findings separately from the outcome."
                cadence: rolling
              tasks:
                - "Write a one-page review format with process and outcome sections"
                - "Pick one significant decision from the log and review it @recurring(monthly:18)"
                - "Record process findings in a separate running list"
                - "Share the quarterly summary with the matrix owner"
            - name: Pending decisions queue for the leadership team
              description: |-
                ## Purpose
                Leadership agendas fill with updates while the decisions people are waiting for sit unspoken. A visible queue of pending decisions, each with a decider, the date it was raised and the date it is needed, makes delays obvious and lets the team spend its time on the items that are blocking others.

                ## Milestones
                1. A shared queue with decision, decider, raised date, needed-by date and who is waiting.
                2. Every item on the queue assigned exactly one decider.
                3. The queue reviewed each week, oldest blocking items first.
                4. Items closed by moving them into the decision log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pending leadership decision has a decider and needed-by date, and the median age of open items is under three weeks."
                cadence: rolling
              tasks:
                - "Set up the queue with decider, raised, needed-by and waiting fields"
                - "Ask each executive for the decisions their teams are waiting on"
                - "Review the queue oldest blocking item first @recurring(weekly:tue)"
                - "Move each closed item into the decision log"
            - name: Decision announcement standard
              description: |-
                ## Purpose
                Many decisions fail not because they were wrong but because the people affected heard about them late, second-hand or without the reasoning. A standard short announcement (what was decided, why, who decided, what changes for whom, when it will be reviewed) used for every logged decision cuts rumour and the follow-up questions that eat managers' weeks.

                ## Milestones
                1. A five-part announcement format agreed by the leadership team.
                2. A rule on which audiences hear which decisions and through which channel.
                3. A monthly check of a sample of announcements against the format.
                4. Recurring gaps fed back to the deciders concerned.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight in ten sampled decision announcements each month contain all five parts of the agreed format."
                cadence: rolling
              tasks:
                - "Draft the five-part decision announcement format"
                - "Agree which audiences hear which types of decision"
                - "Sample five announcements and check them against the format @recurring(monthly:24)"
                - "Send each decider feedback on any missing parts"
            - name: Approval cycle time tracking
              description: |-
                ## Purpose
                Slow approvals are invisible until someone measures them: a purchase order that waits eleven days, a job offer that needs four signatures, a contract stuck with legal. Tracking median and slowest approval times for five or six approval types each month shows where authority sits too high or approvers are overloaded.

                ## Milestones
                1. Five or six approval types chosen, each with a measurable start and end.
                2. A baseline median and ninetieth percentile cycle time for each.
                3. A monthly update of the figures in a simple chart.
                4. One improvement action agreed for the slowest approval type each quarter.

                ## Notes
                Start from the **Metrics log** template. Measure from the moment a complete request is submitted, not from when the approver first opens it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Median and slowest cycle times for at least five approval types are updated monthly, with one improvement action logged each quarter."
                cadence: rolling
              tasks:
                - "Choose five approval types with clear start and end timestamps"
                - "Pull the baseline cycle times from the workflow systems"
                - "Update the approval cycle time table @recurring(monthly:12)"
                - "Agree one fix for the slowest approval type with its owner"
            - name: Override and reversal log
              description: |-
                ## Purpose
                Nothing undermines delegated authority faster than a senior leader quietly overturning a decision that was not theirs to make. Recording every override and reversal, with who made it and why, makes the pattern discussable and shows whether the matrix is wrong or a leader is not respecting it.

                ## Milestones
                1. A simple log of overrides and reversals with original decider, overrider and reason.
                2. Managers told how to record an override they experience, without blame.
                3. A monthly look at the log for repeat overriders or repeat decision types.
                4. Each pattern taken to the person concerned or into the matrix refresh.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every override or reversal of a delegated decision in the year is logged, and each repeat pattern has a recorded follow-up."
                cadence: rolling
              tasks:
                - "Add an overrides tab to the decision log"
                - "Tell managers how to record an override they experience"
                - "Review the override log for repeat patterns @recurring(monthly:27)"
                - "Raise each repeat pattern with the leader concerned in private"
            - name: Decision rights briefing for new managers
              description: |-
                ## Purpose
                New managers and new executives arrive with the habits of their last organisation, where they may have had far more or far less authority. A short briefing in their first month on the charter, the matrix, their own limits and the escalation path prevents the classic first-quarter mistakes of overreaching or asking permission for everything.

                ## Milestones
                1. A thirty-minute briefing outline with the charter, matrix and their personal limits.
                2. A monthly check of new starters in management roles with HR.
                3. Every new manager briefed within thirty days of starting.
                4. Questions raised in briefings collected to improve the documents.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every manager who joins or is promoted in the year receives the decision rights briefing within thirty days of starting."
                cadence: rolling
              tasks:
                - "Write a thirty-minute briefing outline with each manager's own limits"
                - "Ask HR for the list of new and promoted managers @recurring(monthly:5)"
                - "Book each briefing within their first thirty days"
                - "Collect questions from briefings into a frequently asked list"
            - name: Learning the main decision rights frameworks
              description: |-
                ## Purpose
                Whoever leads this work will be asked why RAPID and not RACI, what an advice process is and whether consent is the same as consensus. A few weeks of focused reading and two worked examples give you enough fluency to answer without hand-waving and to adapt a framework rather than apply it blindly.

                ## Milestones
                1. One reliable source read on each of RACI, RAPID, DACI, the advice process and consent decision-making.
                2. A one-page comparison in your own words of where each works and fails.
                3. Two decisions from your own organisation mapped in two different frameworks.
                4. Your comparison discussed with one colleague who has used a different framework.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of five decision frameworks in your own words, plus two real decisions mapped in two frameworks each."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one reliable source for each of the five frameworks"
                - "Read one source a week and note where each framework fails"
                - "Map two real decisions in two different frameworks"
                - "Discuss your comparison with a colleague from another organisation"
            - name: Writing a one-page decision brief
              description: |-
                ## Purpose
                Deciders decide faster and better when the question, options, trade-offs and recommendation arrive on one page instead of in a forty-slide deck or a long thread. Practising a fixed brief format on three real decisions builds the habit, and sharing the format means people bring decisions ready to be made.

                ## Milestones
                1. A brief format with question, context, options, trade-offs, recommendation and decider.
                2. Three briefs written for real decisions and used in the meeting where they were decided.
                3. Feedback from each decider on what was missing or unnecessary.
                4. The improved format shared as the default for leadership decisions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three real decisions have been made from one-page briefs, and the revised brief format is the published default for leadership decisions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft the six-section one-page brief format"
                - "Write a brief for the next decision you are bringing to a meeting"
                - "Ask the decider what was missing or unnecessary"
                - "Share the revised format with the leadership team"
            - name: Disagree and commit practice in the leadership team
              description: |-
                ## Purpose
                Teams that need everyone to agree before acting either stall or end in a fudged compromise nobody owns. Practising an explicit disagree and commit step, where dissent is heard and recorded before the decider decides and everyone then backs the outcome publicly, lets debate be fierce without decisions being undermined in the corridors.

                ## Milestones
                1. The leadership team agrees what disagree and commit means and what it does not.
                2. A visible step in meetings where dissent is invited and recorded before the decision.
                3. Dissenting views captured in the decision log entry.
                4. A team check after three months on whether decisions are being reopened less often.

                ## Notes
                Disagree and commit only works if dissent was genuinely heard first. Skipping that step turns it into a gag.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Dissent is recorded in the decision log for every contested leadership decision over three months, and the team reviews reopened decisions at the end."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a short definition of disagree and commit for the team to agree"
                - "Add a dissent step to the leadership meeting decision items"
                - "Record dissenting views in each contested log entry"
                - "Count reopened decisions at the three-month team check"
            - name: Consent decision-making for teams
              description: |-
                ## Purpose
                Consent asks a different question from consensus: not "do we all agree" but "is anyone aware of a reason this would cause harm or that we cannot safely try". Learning and practising a consent round on team-level decisions gives a team a fast way to decide together without either a single boss deciding everything or endless discussion.

                ## Milestones
                1. The team lead has read about consent rounds and run a practice round on a low-stakes decision.
                2. The team agrees which of its decisions will use consent and which have a single decider.
                3. Five real team decisions made by consent rounds, each in under thirty minutes.
                4. A short retrospective on what to keep and change.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five team decisions have been made by consent round, and the team has a written list of which decision types use consent."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a short guide to consent rounds and objections"
                - "Run a practice consent round on a low-stakes team choice"
                - "Agree which team decisions will use consent from now on"
                - "Hold a retrospective after five real consent decisions"
            - name: Running a structured advice process
              description: |-
                ## Purpose
                In an advice process anyone may make a decision, provided they first seek advice from those affected and from people with relevant expertise, and then decide themselves. It spreads decisions widely while keeping accountability clear, but it needs a written form and a few worked examples before people trust it.

                ## Milestones
                1. A short written advice process with who must be asked and how long to wait for responses.
                2. A simple advice request form used for the first decisions.
                3. Three decisions taken through the process by people below management level.
                4. A review of whether advice was genuinely sought and how decisions held up.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three decisions have been taken through a written advice process by non-managers, with the advice record kept in the decision log."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the advice process on one page with response time limits"
                - "Create an advice request form with affected people and experts"
                - "Invite three team members to take a decision through the process"
                - "Review the three advice records and how each decision held up"
            - name: Pre-mortems and bias checks for group decisions
              description: |-
                ## Purpose
                Groups deciding together drift towards the most senior voice, anchor on the first number mentioned and underweight what could go wrong. Learning two or three simple techniques, such as a pre-mortem, silent written views before discussion and a nominated challenger, improves the quality of the calls your decision rights now route to the right people.

                ## Milestones
                1. The pre-mortem, silent first round and nominated challenger techniques understood and written up in a paragraph each.
                2. Each technique tried on at least one real leadership decision.
                3. Notes kept on what each technique surfaced that discussion alone would have missed.
                4. One or two techniques adopted as standard for high-stakes decisions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three bias-check techniques have each been used on a real decision, and at least one is written into the standard for high-stakes calls."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a paragraph on how to run a pre-mortem"
                - "Try silent written views before discussion at the next leadership decision"
                - "Nominate a challenger for one high-stakes decision"
                - "Record what each technique surfaced and choose which to keep"
            - name: Delegation levels practice for managers
              description: |-
                ## Purpose
                Delegation is rarely all or nothing: a manager can ask someone to recommend, to decide and inform, or to decide without telling. Teaching managers a simple scale of delegation levels, and having them agree a level with each report for their main recurring decisions, makes authority explicit inside teams as well as at the top.

                ## Milestones
                1. A five or seven level delegation scale written in plain words.
                2. A short session where managers place three of their own decisions on the scale.
                3. Each participating manager agrees levels with every direct report for their main decisions.
                4. Levels revisited in one-to-ones and raised as people grow.

                ## Notes
                Use the **1:1** template to keep the agreed delegation levels next to each report's notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every participating manager has a written delegation level for each direct report's main decisions, reviewed in one-to-ones."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a delegation scale with five plain-language levels"
                - "Run a forty-five minute session for managers on the scale"
                - "Agree delegation levels with each direct report"
                - "Revisit one report's delegation levels in a one-to-one @recurring(monthly:15)"
            - name: Cutting approval layers on routine spending
              description: |-
                ## Purpose
                Approval chains grow one cautious signature at a time until a routine software renewal needs four people. Mapping the chains for the most common spending types and removing every layer that has not rejected or changed a request in the last year saves days per purchase without adding real risk.

                ## Milestones
                1. Approval chains mapped for the five most common spending types.
                2. Each approver's rejection and amendment rate over twelve months calculated.
                3. Layers with near-zero rejections proposed for removal, with finance agreement.
                4. The new chains live in the system and cycle times compared after two months.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least one approval layer removed from each of the five commonest spending types, with cycle times measured before and two months after."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Map the approval chain for the five most common spending types"
                - "Calculate each approver's rejection and amendment rate"
                - "Agree the layers to remove with the finance lead"
                - "Compare cycle times two months after the change"
            - name: Unsticking a stalled cross-team decision
              description: |-
                ## Purpose
                Almost every organisation has one decision that has been in discussion for months because it belongs to two or three teams at once, such as a shared platform, a common customer process or a joint budget. Naming a single decider for it, with a deadline and a clear set of advisers, is often the fastest demonstration that the new decision rights work.

                ## Milestones
                1. One long-stalled decision chosen, with its history summarised in half a page.
                2. A single decider named by the leadership team, with advisers listed.
                3. A decision date set no more than six weeks away.
                4. The decision made, logged and announced in the standard format.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A decision stalled for at least three months is made by a single named decider within six weeks and recorded in the log."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the longest-stalled cross-team decision from the pain inventory"
                - "Summarise its history and the options in half a page"
                - "Ask the leadership team to name one decider and a date"
                - "Log and announce the decision once it is made"
            - name: Committee audit of who decides and who advises
              description: |-
                ## Purpose
                Committees multiply because each one feels necessary, yet many have no written authority, meet without deciding anything, or duplicate a decision already taken elsewhere. Listing every standing committee with its terms of reference and the decisions it actually made last year lets you close some, merge others and turn the rest into clearly deciding or clearly advisory bodies.

                ## Milestones
                1. A list of every standing committee with chair, members, frequency and hours spent.
                2. Each committee's written terms of reference found or found missing.
                3. Decisions each committee made in the last year counted from minutes.
                4. Each committee marked keep, merge, close or convert to advisory, and the changes agreed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every standing committee has a recorded keep, merge, close or advisory decision, and the surviving ones have written terms of reference."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every standing committee with chair, members and meeting hours"
                - "Find each committee's terms of reference or note they are missing"
                - "Count decisions each committee made last year from its minutes"
                - "Propose keep, merge, close or advisory for each committee"
            - name: Pricing and discount decision rights
              description: |-
                ## Purpose
                When sales, finance and product all believe they own pricing, the result is inconsistent discounts, margin leakage and customers who learn to wait for the end of the quarter. Setting out who sets list prices, who approves discounts at which depth and who handles exceptions gives sellers speed on ordinary deals and protects margin on unusual ones.

                ## Milestones
                1. The current discount levels granted in the last two quarters summarised by approver.
                2. Decision rights for list prices, standard discounts, deep discounts and non-standard terms written down.
                3. Discount bands with approver roles configured in the quoting or CRM system.
                4. A quarterly check of discounts granted against the bands.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written pricing and discount decision rights with approver bands are configured in the quoting system, and a quarterly compliance check is scheduled."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull two quarters of discounts granted with the approver for each"
                - "Draft rights for list price, standard, deep and non-standard terms"
                - "Agree the discount bands with sales and finance leads"
                - "Configure the bands in the quoting or CRM system"
            - name: Headcount and hiring approval rights
              description: |-
                ## Purpose
                Hiring decisions often pass through budget holders, HR, finance and the chief executive with nobody sure who can actually say yes, so good candidates accept other offers while approvals circulate. Separating the decision to create a role from the decision to choose a candidate and the decision on the offer package, each with one decider, shortens time to offer.

                ## Milestones
                1. The current hiring approval steps mapped with average days at each.
                2. Three separate decisions defined: open the role, choose the candidate, approve the offer.
                3. One decider per decision by level of role, with budget limits.
                4. Time from final interview to offer measured before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Hiring has three defined decisions with one decider each by role level, and time from final interview to offer is measured before and after."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Map every approval step a hire currently passes through"
                - "Split hiring into open role, choose candidate and approve offer"
                - "Name one decider for each step by role level"
                - "Measure days from final interview to offer for the next ten hires"
            - name: Product roadmap decision rights
              description: |-
                ## Purpose
                Product, engineering, sales and the executive team all have a stake in what gets built, and without clear rights the roadmap is set by whoever escalates loudest or whichever customer complains most. Agreeing who decides strategy-level themes, who decides what is in a release and who can trigger an exception for a key customer lets product teams plan with confidence.

                ## Milestones
                1. Roadmap decisions split into themes, release scope and customer exceptions.
                2. One decider and named advisers agreed for each level.
                3. A written exception route for key customer requests with a limit per quarter.
                4. The rights shared with sales and account teams in a short briefing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written roadmap decision rights for themes, release scope and customer exceptions are agreed by product, engineering and sales leads."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the last ten roadmap changes and who triggered each"
                - "Draft deciders for themes, release scope and customer exceptions"
                - "Agree an exception route with a quarterly limit"
                - "Brief sales and account teams on the new route"
            - name: Choosing a decision log and approvals tool
              description: |-
                ## Purpose
                A spreadsheet works for the first fifty decisions, but larger organisations eventually want approvals, the log and the matrix connected so that limits are enforced and records are searchable. Comparing two or three options, including improving what you already own, against the same criteria avoids buying a tool that nobody uses.

                ## Milestones
                1. Requirements written: logging, approval routing, search, permissions, audit trail and cost.
                2. Two or three options compared, including extending a tool already licensed.
                3. A two-week trial of the preferred option with one leadership team.
                4. A recorded decision with cost, owner and migration plan.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tool decision is recorded with comparison scores for at least two options, a trial result, a cost and a named owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the six requirements the tool must meet"
                - "Check whether a tool already licensed can do the job"
                - "Run a two-week trial with one leadership team"
                - "Record the decision, cost and migration owner"
            - name: Shadow approvals audit
              description: |-
                ## Purpose
                Alongside the formal approvals, most organisations have unwritten ones: the founder who must see every brand change, the finance director who expects to be asked before any supplier switch. Bringing these shadow approvals into the open lets you either make them official or retire them, so managers stop guessing whose blessing they need.

                ## Milestones
                1. Managers asked anonymously whose informal sign-off they seek before acting.
                2. A list of shadow approvals with the person, decision type and how often it occurs.
                3. Each shadow approval discussed with the person concerned.
                4. Each one made formal in the matrix or explicitly retired, and managers told.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every shadow approval named in the survey is either added to the matrix or formally retired, and managers have been told which."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Send managers a two-question anonymous survey on informal sign-offs"
                - "List each shadow approval with person and decision type"
                - "Discuss each shadow approval privately with the person concerned"
                - "Update the matrix or announce the retirement of each"
            - name: Decision rights workshop with the leadership team
              description: |-
                ## Purpose
                The draft matrix only becomes the leadership team's own when they have argued over it in the same room. A half-day workshop, prepared with the pain inventory and contested rows, aims to leave with every key decision assigned and the hardest disagreements either resolved or escalated to the chief executive with a date.

                ## Milestones
                1. Pre-reads sent a week ahead: pain inventory, framework and draft matrix with contested rows highlighted.
                2. The workshop held with every executive present for the full session.
                3. Every key decision leaves the room with one decider or a named tie-breaker and date.
                4. Notes and actions circulated within two working days.

                ## Notes
                Start from the **Meeting notes** template. Spend most of the time on the five or six contested rows, not on the ones everyone already agrees.
              priority: medium
              deadlineOffsetDays: 40
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A leadership workshop is held with every executive present, and notes recording a decider or tie-breaker for every key decision go out within two days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Book a half-day slot when every executive can attend"
                - "Send pre-reads with contested matrix rows highlighted a week before"
                - "Run the workshop with the contested rows first"
                - "Circulate notes and owners within two working days"
            - name: Launch briefing for the new decision rights
              description: |-
                ## Purpose
                Managers are the people who will use the matrix daily, and a document published without explanation gets filed and forgotten. A launch briefing for all people managers, with real examples of decisions that change hands and a clear route for questions, turns the paperwork into a change in behaviour.

                ## Milestones
                1. A thirty-minute briefing with five before-and-after examples of decisions changing hands.
                2. Sessions run for every people manager, with a recording for those who miss them.
                3. A single channel for questions, answered within three working days.
                4. The ten most common questions and answers published.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every people manager has attended or watched the launch briefing, and answers to the ten most common questions are published."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose five real decisions that change hands for the briefing"
                - "Schedule briefing sessions covering every people manager"
                - "Set up a single question channel with a three-day answer rule"
                - "Publish the ten most common questions and answers"
            - name: Board reserved matters list
              description: |-
                ## Purpose
                The board's reserved matters, the decisions only the board can take, sit at the top of every decision rights system, yet in many organisations the list is old, vague or unknown to managers. Refreshing it with the chair and company secretary, and linking it to the delegation of authority, makes the line between board and executive clear.

                ## Milestones
                1. The current reserved matters list found and compared with recent board minutes.
                2. Gaps and outdated items identified with the company secretary or legal counsel.
                3. A revised list approved at a board meeting.
                4. The delegation of authority updated so its top limits match the reserved matters.

                ## Notes
                What must be reserved to the board depends on your constitution, regulator and jurisdiction; confirm with your company secretary or legal counsel rather than copying another organisation's list.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A revised reserved matters list is approved in recorded board minutes and matches the top limits of the delegation of authority."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the current reserved matters list and the last year of board minutes"
                - "Mark gaps and outdated items with the company secretary"
                - "Submit the revised list for the next board agenda"
                - "Check the reserved matters against the delegation schedule @recurring(yearly)"
            - name: Ninety-day review of the new decision rights
              description: |-
                ## Purpose
                Ninety days after launch you can see what the documents have actually changed: whether escalations dropped, approvals sped up and overrides became rarer, or whether people quietly reverted. A dated review with real numbers and a dozen short interviews decides which parts to keep, which to fix and which rows to redraw.

                ## Milestones
                1. Escalation counts, approval cycle times and override counts compared with the baseline.
                2. Ten short interviews with managers on what changed for them.
                3. A list of rows and rules to keep, fix or drop.
                4. Findings presented to the leadership team with three recommended changes.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A ninety-day review comparing three measures with their baselines, plus ten interviews, is presented to the leadership team with three recommendations."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull escalation, cycle time and override figures against the baseline"
                - "Interview ten managers on what changed for them"
                - "Sort rows and rules into keep, fix or drop"
                - "Present three recommended changes to the leadership team"
            - name: Audit committee walkthrough of approval controls
              description: |-
                ## Purpose
                Internal or external auditors test whether approvals happen as the delegation of authority says, and a failed test becomes a finding the board must track. Preparing a walkthrough in advance, with sample transactions traced from request to approval, shows the controls work and finds the gaps before the auditors do.

                ## Milestones
                1. Twenty sample transactions across five categories traced from request to approval.
                2. Every exception explained or listed for correction.
                3. A walkthrough pack prepared with the schedule, system settings and samples.
                4. The walkthrough held and any findings given owners and dates.

                ## Notes
                Start from the **Risk register** template to track any control gaps the walkthrough finds.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A walkthrough of twenty traced transactions is held with the auditors, and every finding has an owner and a date in the risk register."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Select twenty sample transactions across five approval categories"
                - "Trace each from request to approval and note exceptions"
                - "Assemble the walkthrough pack with schedule and system settings"
                - "Give each finding an owner and date in the risk register"
            - name: Decision rights for a new team lead
              description: |-
                ## Purpose
                Taking over an existing team means inheriting decisions nobody wrote down: who approves leave, who agrees changes to the rota, who talks to the client when something goes wrong. Clarifying in the first month what you decide, what the team decides together and what goes upwards prevents early clashes with both the team and your own manager.

                ## Milestones
                1. The team's ten most frequent decisions listed with who made them under the previous lead.
                2. A conversation with your own manager confirming your limits.
                3. A team session agreeing which decisions the team makes together.
                4. A one-page team decision guide pinned in the team's shared space.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page team decision guide covering the ten most frequent decisions is agreed with the team and the team lead's manager."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the team which ten decisions come up most often"
                - "Confirm your own approval limits with your manager"
                - "Run a team session on which decisions the team makes together"
                - "Pin the one-page team decision guide in the shared space"
            - name: Decision rights in a matrix organisation
              description: |-
                ## Purpose
                Where people report to both a function and a business line, or a region and a product, every decision about priorities, people and spending can have two plausible owners. Writing down which axis leads on which decisions, and how conflicts between the two bosses are resolved, is what makes a matrix workable rather than a source of daily friction.

                ## Milestones
                1. The decision types that most often collide between the two axes listed.
                2. A lead axis chosen for each, with the other axis given a defined advisory role.
                3. A conflict rule for when the two managers disagree, with a named tie-breaker.
                4. The rules reviewed each quarter with both sets of leaders.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every colliding decision type in the matrix organisation has a lead axis and a named tie-breaker, reviewed by both sets of leaders each quarter."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the decision types that collide between function and business line"
                - "Agree a lead axis for each with both sets of leaders"
                - "Name a tie-breaker for disagreements between the two managers"
                - "Review the matrix rules with both sets of leaders @recurring(quarterly)"
            - name: Moving decisions away from the founder
              description: |-
                ## Purpose
                As an organisation grows past a hundred or so people, a founder or long-serving chief executive who still decides everything becomes the bottleneck, and capable executives leave. Choosing which decisions move to the executive team, in stages and with agreed check-ins, lets the founder let go without feeling the business has slipped out of reach.

                ## Milestones
                1. The founder's decisions over the last two months listed and sorted by type.
                2. Decisions grouped into those the founder keeps, shares and hands over.
                3. A staged handover plan with dates and the check-in for each stage.
                4. A review after six months of how the handed-over decisions went.

                ## Notes
                Agree in advance what the founder will do when they disagree with a handed-over decision: usually ask, advise and then accept, not override.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A staged plan moving at least ten decision types from the founder to executives is agreed, with a six-month review on record."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every decision the founder made in the last two months"
                - "Sort them into keep, share and hand over with the founder"
                - "Write the staged handover plan with check-in dates"
                - "Agree how the founder will respond to handed-over decisions they dislike"
            - name: Interim decision rights during a reorganisation
              description: |-
                ## Purpose
                During a reorganisation or merger the old decision rights stop applying before the new ones exist, and in the gap work either freezes or people grab authority. A short interim schedule saying who decides what until a fixed date keeps operations moving and avoids a rush of unchallenged decisions in the confusion.

                ## Milestones
                1. The decisions most at risk during the transition identified.
                2. An interim decider named for each, with an end date for the interim rules.
                3. The interim schedule sent to every affected manager on the first day of the change.
                4. The permanent rights in place, and the interim schedule withdrawn, by the end date.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An interim decision schedule with named deciders and an end date is issued on the first day of the change and withdrawn on schedule."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the decisions most likely to fall through the gap during the change"
                - "Name an interim decider and an end date for each"
                - "Send the interim schedule to affected managers on day one"
                - "Withdraw the interim schedule when the permanent rights go live"
            - name: Pre-agreed emergency decision authority
              description: |-
                ## Purpose
                In a serious incident there is no time to work out who can shut a site, pause a product, spend on an emergency supplier or speak to the press. Agreeing in calm conditions which decisions transfer to an incident lead, with what limits and for how long, means the people on the spot can act and everyone knows when normal rights resume.

                ## Milestones
                1. The decisions most likely to be needed in a serious incident listed.
                2. Emergency authority agreed for each, with spending limits and a time limit.
                3. A rule for how emergency authority is triggered and ended.
                4. The authority tested in a tabletop exercise and gaps fixed.

                ## Notes
                Keep a copy of the emergency authority offline or printed. Record emergency decisions as they happen so they can be reviewed afterwards.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written emergency decision authority with limits, trigger and end rules has been tested in at least one tabletop exercise."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the decisions an incident lead would need to take quickly"
                - "Set spending and time limits on each emergency authority"
                - "Write how emergency authority is triggered and ended"
                - "Run a ninety-minute tabletop exercise to test it"
            - name: Headquarters and regional unit decision rights
              description: |-
                ## Purpose
                Groups with country or regional units argue endlessly over what the centre controls and what local leaders decide, from pricing and hiring to brand and suppliers. Agreeing which decisions are global, which are local within global guardrails and which are fully local lets regional leaders act on their market while the centre protects what must be common.

                ## Milestones
                1. The main decision types sorted into global, local within guardrails and fully local.
                2. Guardrails written for every decision in the middle category.
                3. Each regional head and the relevant central function heads agree the split.
                4. An exception route for local leaders who need to go outside a guardrail.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed split of global, guardrailed and local decisions exists, with written guardrails and an exception route, agreed by every regional head."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Sort the main decision types into global, guardrailed and local"
                - "Write the guardrails for each guardrailed decision"
                - "Walk each regional head through the split"
                - "Publish the exception route for going outside a guardrail"
            - name: Decision rights for a self-managing team
              description: |-
                ## Purpose
                Teams given autonomy often find it means less than promised: they still need sign-off for tools, hires or schedule changes. Writing a team charter that lists what the team decides outright, what it decides within limits and what stays with management, and checking it monthly, gives the autonomy real edges.

                ## Milestones
                1. A team charter listing outright, bounded and management-held decisions.
                2. Limits written for every bounded decision, such as budget or headcount.
                3. The charter agreed by the team and its sponsoring manager.
                4. A monthly team check of decisions that hit a limit or were taken away.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A team decision charter with written limits is agreed with the sponsoring manager and checked by the team every month."
                cadence: rolling
              tasks:
                - "Draft the team's outright, bounded and management-held decisions"
                - "Set limits for each bounded decision with the sponsoring manager"
                - "Agree the charter in a team session"
                - "Review decisions that hit a limit at the team check @recurring(monthly:20)"
            - name: Decision rights for automated and AI-assisted decisions
              description: |-
                ## Purpose
                Credit limits, pricing, stock reorders, candidate screening and customer refunds are increasingly set or recommended by software, which raises the question of who owns a decision a model made. Assigning a human owner to every automated decision type, with limits on what the system may decide alone and when it must hand to a person, keeps accountability intact as automation spreads.

                ## Milestones
                1. An inventory of decisions currently made or recommended by automated systems.
                2. A named human owner for each automated decision type.
                3. Limits on what each system may decide without human review.
                4. A quarterly review of overrides, complaints and drift for each automated decision.

                ## Notes
                Check with your legal and data protection advisers whether any automated decisions about individuals carry specific obligations in your jurisdiction.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every automated decision type in the inventory has a named human owner, written limits and a quarterly review record."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the decisions systems make or recommend today"
                - "Name a human owner for each automated decision type"
                - "Write the limits beyond which a person must review"
                - "Review overrides and complaints on automated decisions @recurring(quarterly)"
            - name: Organisation-wide decision quality measures
              description: |-
                ## Purpose
                After the first year the question shifts from whether rights are clear to whether decisions are getting better and faster. A small set of measures (decision speed for key types, share of decisions reopened, share made at the intended level and a short manager survey) gives the leadership team evidence rather than anecdote.

                ## Milestones
                1. Four measures defined, each with a source and an owner.
                2. A first-year baseline for each measure.
                3. Quarterly reporting of the measures to the leadership team.
                4. One change to the decision system made each year on the strength of the measures.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four decision quality measures are reported to the leadership team every quarter against a baseline, with at least one change made each year."
                cadence: rolling
              tasks:
                - "Define four decision quality measures with sources"
                - "Write the five-question manager survey on decision clarity"
                - "Report the decision quality measures to leadership @recurring(quarterly)"
                - "Choose one change to the decision system each year from the data"
            - name: Decision rights across a group of legal entities
              description: |-
                ## Purpose
                A group with subsidiaries, joint ventures or a foundation alongside the operating company has decision rights at two levels: the management structure and the legal entities, each with its own directors and duties. Mapping where the two diverge, and making sure entity boards formally take the decisions that the law places with them, avoids decisions that are valid in practice but not on paper.

                ## Milestones
                1. A chart of every legal entity with its directors and its management owner.
                2. The decisions that must be taken by each entity's board identified with legal counsel.
                3. A group delegation linking management decisions to entity board approvals.
                4. Board calendars set so entity approvals are taken in time.

                ## Notes
                Directors' duties and what each entity's board must decide differ by jurisdiction and constitution; legal counsel or the company secretary should confirm the list.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A group delegation document maps management decisions to the entity boards that must approve them, confirmed by legal counsel."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Draw the chart of legal entities, directors and management owners"
                - "List with legal counsel the decisions each entity board must take"
                - "Draft the group delegation linking management and entity approvals"
                - "Set entity board dates so approvals land in time"
            - name: Annual decision rights maturity assessment
              description: |-
                ## Purpose
                Experienced leaders know decision systems drift back towards centralisation, especially after a bad quarter or a new chief executive. A yearly assessment against a simple maturity scale, covering clarity, delegation, speed, records and behaviour, shows whether the organisation is holding its gains and where to invest effort next year.

                ## Milestones
                1. A five-level maturity scale written for five dimensions.
                2. A yearly self-assessment by the leadership team plus a sample of managers.
                3. Results compared with the previous year and differences explained.
                4. Two priorities for the coming year agreed and added to the leadership plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A yearly maturity assessment across five dimensions is completed, compared with the previous year and turned into two agreed priorities."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Write a five-level scale for clarity, delegation, speed, records and behaviour"
                - "Run the decision rights maturity assessment @recurring(yearly)"
                - "Compare scores with the previous year and explain the differences"
                - "Agree two priorities and add them to the leadership plan"
---

# Organisational Decision Rights

This area is for leaders, managers and team leads who are tired of decisions that bounce between meetings, approvals that need six signatures and surprises when someone decides something nobody knew they could. It starts with the foundations (a pain inventory, a map of the decisions that matter, a framework, a matrix, a delegation of authority and a decision log), then the operating machinery that keeps them current, the skills of deciding well together, the specific decision rights worth fixing, the dated launches and reviews, the situations that bend the usual rules and, last, the specialist work of measuring decision quality and governing groups of entities.

What repeats is a Friday look at the decision log, a Tuesday pending decisions queue, monthly checks on escalations, approval cycle times, overrides and how decisions are announced, a quarterly refresh of the matrix and a yearly review of the delegation of authority and reserved matters. The Compliance control, Metrics log, 1:1, Purchase decision, Meeting notes and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
