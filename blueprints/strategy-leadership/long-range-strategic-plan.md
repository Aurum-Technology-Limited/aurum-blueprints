---
id: strategy-leadership.long-range-strategic-plan
name: Long-Range Strategic Plan
description: "A three to five year plan you can steer by: a clear baseline and ambition, a few big bets, the capabilities and money behind them, dated milestones, and the rhythm that keeps the plan alive."
category: business
version: 1.0.0
tags: [strategy-leadership, long-range-strategic-plan, manager, enterprise, founder, five-year-plan, big-bets, capabilities]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - board-meeting
    - metrics-log
    - skills-matrix
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Long-Range Strategic Plan
          description: "Setting a three to five year strategic direction, with the big bets, capabilities and milestones that will carry the organisation there."
          projects:
            - name: Long-range plan charter and horizon
              description: |-
                ## Purpose
                Most long-range plans fail before they start because nobody agreed what they are for: a five year vision, a capital plan, a fundraising story or a reset after a bad year. A one-page charter fixes the horizon (three or five years), the scope, the sponsor and the decisions the plan must settle, so everyone who works on it is answering the same question.

                ## Milestones
                1. A planning horizon chosen, with the reason it fits your business's investment cycle written in a sentence.
                2. The scope stated: which units, geographies and functions are in and which are out.
                3. Three to five questions the finished plan must answer, agreed with the sponsor.
                4. A one-page charter signed off by the chief executive or owner.

                ## Notes
                Pick the horizon from how long your biggest commitments take to pay back. A software firm rarely needs more than three years; a hospital group, utility or manufacturer often needs five or more.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed one-page charter states the horizon, scope, sponsor and the questions the plan will answer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down why the organisation needs a long-range plan now, in three sentences"
                - "Choose between a three and five year horizon based on payback periods"
                - "List the questions the finished plan must answer"
                - "Review the draft charter with the sponsor and get it signed off"
            - name: Planning team and decision governance
              description: |-
                ## Purpose
                A long-range plan written by the strategy lead alone becomes a document nobody owns. Naming a small core team, a steering group that makes the calls and a clear route for disagreements means the plan carries the weight of the people who will deliver it.

                ## Milestones
                1. A core team of four to seven people named, each with protected time.
                2. A steering group with a chair and a stated decision rule, such as consensus with chief executive tiebreak.
                3. A list of people to consult who are not on either group, from finance, operations and the front line.
                4. A short governance note circulated to everyone involved.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A governance note names the core team, steering group, decision rule and consultees, and has been circulated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a list of possible core team members with their current workloads"
                - "Agree with the sponsor how disagreements on the plan will be settled"
                - "Ask each core member's manager to free a set number of hours a week"
                - "Circulate the governance note to the core team and steering group"
            - name: Strategic baseline fact base
              description: |-
                ## Purpose
                Before anyone talks about year five, the team needs an honest picture of today: five years of revenue and margin by line, customer concentration, market share where it can be estimated, cost structure and the capabilities the organisation is genuinely good at. A shared fact base stops the planning sessions turning into competing anecdotes.

                ## Milestones
                1. Five years of financial history by business line in one table.
                2. Customer, product and channel mix with the top ten customers' share of revenue.
                3. A short list of distinctive capabilities, each backed by evidence.
                4. A fact pack of no more than twenty pages shared with the planning team.

                ## Notes
                Keep the pack factual. Opinions about what the numbers mean belong in the workshops, not the baseline.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A fact pack of twenty pages or fewer, covering five years of history and current capabilities, is in the planning team's hands."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask finance for five years of revenue and margin by business line"
                - "Pull the top ten customers' share of revenue for each year"
                - "Interview three operational leaders about what the organisation does best"
                - "Assemble the fact pack and send it to the planning team"
            - name: Ten-year forces and trends inventory
              description: |-
                ## Purpose
                Any five year plan has to survive forces that move slowly and then all at once: demographics, regulation, technology costs, climate exposure and shifts in how customers buy. Listing the forty or so forces that could matter and rating each for impact and certainty gives the plan an outside-in view instead of a projection of last year.

                ## Milestones
                1. A long list of external forces grouped by social, technological, economic, environmental and political.
                2. Each force rated for likely impact on the organisation and for how certain it is.
                3. The eight to ten forces with the highest impact pulled into a one-page summary.
                4. The summary discussed with the steering group.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A rated inventory of external forces with a one-page summary of the top ten, reviewed by the steering group."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to draft a long list of external forces for your sector"
                - "Rate each force for impact and certainty with two colleagues"
                - "Write the one-page summary of the highest impact forces"
                - "Add the summary to the fact pack for the steering group"
            - name: Five-year question interviews
              description: |-
                ## Purpose
                The people closest to customers and operations usually know where the organisation is heading long before the plan says so. Twenty structured conversations with leaders, staff, customers and partners, all asked the same few questions about the next five years, surface the hopes, fears and blind spots the plan must address.

                ## Milestones
                1. An interview guide of five to seven open questions agreed.
                2. At least twenty interviews held across leaders, staff, customers and partners.
                3. Themes coded and counted, with representative quotes kept anonymous.
                4. A four-page synthesis shared with the planning team.
              priority: medium
              deadlineOffsetDays: 40
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Twenty or more interviews are summarised into a four-page synthesis of themes shared with the planning team."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Draft five open questions about where the organisation should be in five years"
                - "Book twenty interview slots across four groups of people"
                - "Code each interview's notes against a shared theme list"
                - "Write the synthesis and present it at the next core team meeting"
            - name: Year-five ambition statement
              description: |-
                ## Purpose
                Without a concrete picture of the destination, a long-range plan collapses into a list of initiatives. An ambition statement describes what the organisation will look like at the end of the horizon in three or four measurable terms, such as revenue, customers served, market position or cost to serve, so every later choice can be tested against it.

                ## Milestones
                1. Two or three draft ambitions written at different levels of stretch.
                2. One ambition chosen by the steering group, with the reasoning recorded.
                3. Three or four measures attached, each with a year-five value.
                4. The statement tested on ten staff who were not in the room, and adjusted for clarity.

                ## Notes
                Ambitious is good; impossible is not. If nobody can sketch even a rough route from today, the ambition is a wish.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A year-five ambition with three or four measurable values is agreed by the steering group and recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write three draft ambitions at modest, stretching and bold levels"
                - "Attach a year-five number to each measure in every draft"
                - "Bring the drafts to the steering group for a decision"
                - "Read the chosen statement to ten staff and note what confuses them"
            - name: Momentum case and ambition gap
              description: |-
                ## Purpose
                The momentum case shows where the organisation lands in five years if it simply keeps doing what it does now, with known contracts, trends and costs rolled forward. Setting it beside the ambition shows the size of the gap the plan must close, which is the single most clarifying number in long-range planning.

                ## Milestones
                1. A momentum projection for each year of the horizon, with its assumptions listed.
                2. The gap to the ambition shown for each measure and each year.
                3. The gap split into rough chunks: what improvement can close and what needs new bets.
                4. The gap chart presented to the steering group.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A momentum case and gap chart for every ambition measure is presented to the steering group."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask finance to roll the current plan forward to the end of the horizon"
                - "List every assumption the momentum projection depends on"
                - "Chart the gap between momentum and ambition for each measure"
                - "Estimate how much of the gap ordinary improvement could close"
            - name: Strategic assumptions register
              description: |-
                ## Purpose
                Every long-range plan rests on beliefs about the future that may be wrong: market growth rates, a competitor staying out, a regulation passing, a technology getting cheaper. Writing the twenty most important assumptions down, with who owns each and what evidence would disprove it, turns hidden beliefs into things the team can check.

                ## Milestones
                1. Twenty or fewer critical assumptions written as testable statements.
                2. Each assumption rated for importance and current confidence.
                3. An owner and a disproving signal named for each.
                4. The register filed alongside the plan and linked from its summary.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists up to twenty assumptions, each with an owner, confidence rating and disproving signal."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull the assumptions from the momentum case and the ambition work"
                - "Rewrite each as a statement that could be shown to be false"
                - "Name an owner and a disproving signal for every assumption"
                - "Rank the register by importance times uncertainty"
            - name: Plan build calendar and decision gates
              description: |-
                ## Purpose
                Building a long-range plan can take three to six months, and without dated gates it drifts into the budget season and gets squeezed. A calendar with four or five decision gates, from fact base to board approval, keeps momentum and tells everyone when their input is needed.

                ## Milestones
                1. Four or five decision gates defined, each with what must be decided.
                2. Dates set for every gate, working back from the board meeting.
                3. Workshop and review slots booked in leaders' diaries.
                4. The calendar shared with everyone named in the governance note.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated build calendar with four or five decision gates is shared and the workshop slots are booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the date of the board meeting that will approve the plan"
                - "Work back from it to set dates for each decision gate"
                - "Book workshop slots in every steering group member's diary"
                - "Share the calendar with the core team and consultees"
            - name: Quarterly long-range plan health check
              description: |-
                ## Purpose
                Plans written for five years are usually checked once, when they are approved, and then forgotten. A ninety-minute quarterly review of progress against milestones, the state of the big bets and any broken assumptions keeps the plan in the leadership team's working memory without turning it into another operating review.

                ## Milestones
                1. A standing ninety-minute slot in the leadership calendar each quarter.
                2. A two-page health summary prepared before each session.
                3. A short decision log recording what was changed, kept or escalated.
                4. Four consecutive checks held in the first year.

                ## Notes
                Keep this about the long-range direction. Quarterly delivery detail belongs in execution reviews.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly health checks are held in a year, each with a written summary and decision log."
                cadence: rolling
              tasks:
                - "Book a recurring ninety-minute slot with the leadership team"
                - "Prepare the two-page plan health summary @recurring(quarterly)"
                - "Record the decisions from each check in the plan decision log"
                - "Flag any bet that has missed two milestones running to the sponsor"
            - name: Annual roll-forward of the five-year plan
              description: |-
                ## Purpose
                Rolling plans add a new final year every twelve months and drop the one just finished, so the horizon never shrinks to nothing. A yearly roll-forward, a few weeks before the budget cycle, updates the ambition, the bets and the financial path with what the year has taught you.

                ## Milestones
                1. The year just finished compared with what the plan expected.
                2. A new final year added to the horizon with its targets.
                3. Bets and milestones updated, with any changes and their reasons logged.
                4. The refreshed plan approved by the steering group before budgeting begins.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each year a refreshed five-year plan with a new final year is approved before the budget cycle starts."
                cadence: cyclic
              tasks:
                - "Diary the roll-forward six weeks before the budget cycle opens"
                - "Compare last year's actual results with the plan's expectations @recurring(yearly)"
                - "Add the new final year's targets to the plan"
                - "Log every change to bets and milestones with its reason"
            - name: Signposts and leading indicators watchlist
              description: |-
                ## Purpose
                Long-term shifts announce themselves through small signals: a pilot customer switching suppliers, a cost curve bending, a regulator's consultation paper. A watchlist of ten signposts, each tied to an assumption or bet and checked monthly, gives early warning while there is still time to adjust the plan.

                ## Milestones
                1. Ten signposts chosen, each linked to an assumption or bet.
                2. A source and a trigger level written for each signpost.
                3. A monthly log of readings kept for at least six months.
                4. At least one signpost reading discussed at a quarterly health check.

                ## Notes
                Start from the **Metrics log** template. Fewer, sharper signposts beat a dashboard nobody reads.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten signposts with sources and trigger levels are logged monthly for six months."
                cadence: rolling
              tasks:
                - "Pick ten signposts from the assumptions register and the forces inventory"
                - "Write the source and trigger level for each signpost"
                - "Record this month's signpost readings in the log @recurring(monthly:9)"
                - "Escalate any signpost that crosses its trigger to the steering group"
            - name: Monthly assumption testing log
              description: |-
                ## Purpose
                An assumptions register only helps if someone keeps asking whether each belief still holds. A short monthly pass, taking two or three assumptions at a time and looking for disproving evidence, means that by the end of the year every critical assumption has been tested at least once.

                ## Milestones
                1. A rota so every critical assumption is tested at least once a year.
                2. Evidence and a revised confidence rating recorded after each test.
                3. Any assumption that falls below the agreed confidence flagged to the sponsor.
                4. A yearly summary of which assumptions changed and why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every critical assumption has a dated test result and confidence rating within the last twelve months."
                cadence: rolling
              tasks:
                - "Draw up a rota assigning two or three assumptions to each month"
                - "Test this month's assumptions against new evidence @recurring(monthly:16)"
                - "Update the confidence rating and evidence notes in the register"
                - "Tell the sponsor about any assumption that has weakened sharply"
            - name: Capability build tracker
              description: |-
                ## Purpose
                Most long-range plans need the organisation to become good at something it is not good at today, such as data, a new channel, regulated manufacturing or a second language market. A tracker that rates each critical capability from current to target level, with dated steps, shows whether the organisation is actually building what the plan depends on.

                ## Milestones
                1. Five to eight critical capabilities named, each linked to a big bet.
                2. Current and year-five target levels described in plain terms for each.
                3. Yearly build steps with owners and budgets for each capability.
                4. A monthly rating update kept for at least two quarters.

                ## Notes
                Start from the **Skills matrix** template and treat each capability as a row rather than each person.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each critical capability has a current rating, target level, dated build steps and an owner, updated monthly."
                cadence: rolling
              tasks:
                - "List the capabilities each big bet cannot succeed without"
                - "Describe what good looks like for each capability at year five"
                - "Update each capability's rating with its owner @recurring(monthly:22)"
                - "Raise any capability that has not moved in two quarters"
            - name: Long-range financial model upkeep
              description: |-
                ## Purpose
                Built once for the board, a five year model becomes stale within months and quietly loses credibility. Keeping one owned model, updated each quarter with actuals and revised assumptions, means the plan's financial path is always current when someone asks what a change would cost.

                ## Milestones
                1. One model named as the source of truth, with an owner in finance.
                2. A change log recording each update and who made it.
                3. Quarterly actuals loaded within a month of quarter end.
                4. A one-page summary of how the five-year path moved since last quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The long-range model has an owner, a change log and quarterly actuals loaded within a month of each quarter end."
                cadence: rolling
              tasks:
                - "Agree with finance which file is the single long-range model"
                - "Add a change log tab recording every update"
                - "Load quarterly actuals and revised assumptions into the model @recurring(quarterly)"
                - "Write a one-page note on how the five-year path moved"
            - name: Plan-to-budget bridge
              description: |-
                ## Purpose
                Year one of a long-range plan has to show up in next year's budget, or the bets starve while the core business takes the money. A bridge document that lists what each bet needs next year, and checks it appears in the budget, is the link that most plans are missing.

                ## Milestones
                1. Next year's funding, headcount and capital needs listed for every big bet.
                2. Each line traced to a budget line or flagged as missing.
                3. Missing items resolved, funded or explicitly deferred by the sponsor.
                4. A one-page bridge filed with the approved budget.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every big bet's next-year needs are traced to the approved budget or recorded as deferred by the sponsor."
                cadence: cyclic
              tasks:
                - "Ask each bet owner for next year's money, people and capital needs"
                - "Match each need against the draft budget lines @recurring(yearly)"
                - "Take unfunded items to the sponsor for a decision"
                - "File the bridge alongside the approved budget"
            - name: Milestone roadmap with named owners
              description: |-
                ## Purpose
                Five years is too long to manage as one block, so the plan needs a roadmap of dated milestones, typically three or four a year per bet, each with one accountable owner. A monthly ten-minute check with owners keeps slippage visible early and stops milestones from silently moving to the right.

                ## Milestones
                1. A roadmap of dated milestones for every bet across the horizon.
                2. One named owner for each milestone, accepted in writing.
                3. A monthly status line from every owner, kept in one place.
                4. Any milestone moved more than a quarter re-approved by the steering group.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every milestone has a date and owner, and monthly status lines exist for at least six months."
                cadence: rolling
              tasks:
                - "Draft three or four dated milestones a year for each bet"
                - "Ask each owner to accept their milestones in writing"
                - "Collect a status line from every milestone owner @recurring(monthly:5)"
                - "Send moved milestones to the steering group for re-approval"
            - name: Horizon scanning reading habit
              description: |-
                ## Purpose
                Leaders who own a five year plan need a steady diet of outside thinking, not only internal reports. Half an hour a week with industry analysis, regulator publications and adjacent sectors, plus a short monthly note to the team, keeps the plan connected to the world it is meant to anticipate.

                ## Milestones
                1. A list of eight to twelve sources across industry, regulation, technology and adjacent sectors.
                2. A protected weekly reading slot in the diary.
                3. A monthly note of three things that matter for the plan sent to the core team.
                4. Six monthly notes sent.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly horizon notes have been sent to the core team, each naming three items relevant to the plan."
                cadence: rolling
              tasks:
                - "Choose eight to twelve sources outside your own industry press"
                - "Read for thirty minutes from the source list @recurring(weekly)"
                - "Send the core team three things that matter for the plan @recurring(monthly:27)"
            - name: Core long-range planning frameworks
              description: |-
                ## Purpose
                Leaders asked to write a five year plan often reach for whatever slide format they last saw. Learning a handful of proven frameworks, such as the three horizons of growth, the where-to-play and how-to-win cascade and the diagnosis, guiding policy and coherent action kernel, gives you a vocabulary and a structure that colleagues will recognise.

                ## Milestones
                1. Three frameworks studied from their original sources.
                2. Each framework summarised on one page with when to use it.
                3. One framework applied to your organisation as a rough sketch.
                4. A recommendation to the core team on which structure the plan will use.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One-page summaries of three frameworks exist, and the core team has agreed which structure the plan will use."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose three frameworks and find their original book or article"
                - "Write a one-page summary of each with when to use it"
                - "Sketch your organisation using the most promising framework"
                - "Recommend a plan structure to the core team"
            - name: Telling a strategy from a list of goals
              description: |-
                ## Purpose
                Many long-range plans are really wish lists: grow revenue, delight customers, become digital. Practising the difference between a goal and a strategy, by rewriting weak strategy statements into a diagnosis, a guiding choice and actions that fit together, is the skill that most improves the plan you eventually write.

                ## Milestones
                1. Five published or past strategy statements collected and critiqued.
                2. Each rewritten as a diagnosis, a guiding policy and coherent actions.
                3. Your own draft strategy put through the same test.
                4. A peer's honest critique of your rewrite noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five strategy statements and your own draft have each been rewritten into diagnosis, guiding policy and actions, with peer critique."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect five strategy statements from annual reports or old plans"
                - "Mark which parts are goals and which are real choices"
                - "Rewrite your own draft as diagnosis, guiding policy and actions"
                - "Ask a trusted peer to critique the rewrite"
            - name: Five-year financial modelling for leaders
              description: |-
                ## Purpose
                Non-finance leaders often accept a long-range model they cannot interrogate, which leaves them unable to spot the one assumption doing all the work. Learning to read a driver-based model, change its inputs and trace the effect on cash, margin and funding needs lets you argue about the plan on equal terms.

                ## Milestones
                1. The key drivers of your organisation's model listed with how each feeds the results.
                2. Three sensitivity changes run yourself and their effects recorded.
                3. The model's biggest single assumption identified and explained in plain words.
                4. A short session held with finance to check your understanding.

                ## Notes
                This is about reading and questioning a model, not building one from scratch. Your finance team or adviser stays the owner.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have run three sensitivities on the long-range model and can explain its largest assumption, confirmed with finance."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask finance for a read-only copy of the long-range model"
                - "List the drivers on the input sheet and what each affects"
                - "Change three drivers and note the effect on year-five cash"
                - "Book an hour with finance to check what you found"
            - name: Capability-based planning method
              description: |-
                ## Purpose
                Plans built only from targets miss the question of what the organisation must be able to do to hit them. Capability-based planning starts from the bets, works out the capabilities each requires and then the people, process, technology and data needed, which produces a far more honest investment case.

                ## Milestones
                1. The method studied from a practitioner guide or course.
                2. A capability map of your organisation drafted at one or two levels.
                3. One big bet traced from goal to capabilities to investment needs.
                4. Lessons on using the method written down for the core team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A capability map exists and one big bet has been traced through it to a list of investment needs."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Find a practitioner guide on capability-based planning"
                - "Draft a two-level capability map of your organisation"
                - "Trace one bet through the map to its investment needs"
                - "Write a page of lessons for the core team"
            - name: Case studies of long-range plans that worked and failed
              description: |-
                ## Purpose
                History is the cheapest teacher for five year plans: the firm that bet early on a shift and won, the one that read the trend right but ran out of money, the one that planned perfectly for a world that never arrived. Studying six cases closely and drawing out the patterns sharpens judgement about your own plan.

                ## Milestones
                1. Six cases chosen, three that worked and three that failed, ideally from adjacent sectors.
                2. A one-page note on each covering the bet, the timing and the outcome.
                3. Five patterns drawn across the cases.
                4. The patterns presented to the core team and checked against your draft plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six case notes and five cross-case patterns are written and discussed with the core team."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the agent for a list of documented long-range strategy successes and failures in adjacent sectors"
                - "Pick six cases and find a reliable source for each"
                - "Write a one-page note on each case"
                - "Present five patterns to the core team"
            - name: Backcasting from the year-five ambition
              description: |-
                ## Purpose
                Forecasting asks where today's path leads; backcasting starts at the destination and asks what must be true one year earlier, and the year before that, all the way back to now. Running a backcasting exercise on the ambition reveals the early moves that the momentum case never shows.

                ## Milestones
                1. The method practised once on a small, familiar goal.
                2. What must be true at each year-end written backwards from year five.
                3. The moves needed in the first eighteen months listed.
                4. The backcast compared with the milestone roadmap and gaps noted.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A year-by-year backcast from the ambition exists, with first eighteen month moves compared against the roadmap."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Practise backcasting on a one-year personal or team goal"
                - "Write what must be true at the end of each year working back from year five"
                - "List every move the backcast says must start in the next eighteen months"
                - "Compare the list with the milestone roadmap"
            - name: Facilitating long-horizon strategy conversations
              description: |-
                ## Purpose
                Leadership teams find it hard to talk about five years out: the discussion slides back to this quarter's problems or gets lost in speculation. Learning a few facilitation techniques, such as silent writing before debate, a future press release and structured disagreement, makes the planning workshops far more productive.

                ## Milestones
                1. Three facilitation techniques learned and practised with a small group.
                2. A standard opening for planning workshops that shifts people to the long view.
                3. One workshop run using the techniques, with feedback collected.
                4. A short facilitation guide written for others who will run sessions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One planning workshop has been run with the new techniques, feedback collected and a facilitation guide written."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose three techniques that move discussion to the long view"
                - "Practise them with your own team in a regular meeting"
                - "Collect written feedback after the first planning workshop"
                - "Write a two-page facilitation guide for other session leads"
            - name: Choosing the three to five big bets
              description: |-
                ## Purpose
                The gap between momentum and ambition is closed by a small number of large, multi-year moves, not by forty initiatives. Generating a long list, scoring it against the ambition, the capabilities and the money available, and committing to three to five bets is the central decision of the long-range plan.

                ## Milestones
                1. A long list of candidate bets gathered from the interviews, forces and gap work.
                2. Each candidate scored on contribution to the gap, feasibility, capability fit and cost.
                3. Three to five bets chosen, each with a one-paragraph rationale.
                4. Candidates not chosen recorded with the reason, for future refreshes.

                ## Notes
                If the bets cannot close most of the gap, either the ambition or the bets need to change. Do not hide the shortfall.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three to five big bets are chosen and recorded, each with a rationale, and rejected candidates are logged with reasons."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Compile the candidate bets from all earlier planning work"
                - "Agree four scoring criteria with the steering group"
                - "Score every candidate and rank them"
                - "Record the chosen bets and the reasons others were dropped"
            - name: Where to play and how to win by year five
              description: |-
                ## Purpose
                A long-range plan has to say which customers, markets and offers the organisation will focus on at the end of the horizon, and why it will beat the alternatives there. Writing these two choices down explicitly makes it obvious which current activities fit and which are drifting.

                ## Milestones
                1. The year-five customer segments, geographies and offers described.
                2. A clear statement of why customers will choose you over alternatives in those places.
                3. Current activities sorted into fits, partly fits and does not fit.
                4. The choices agreed by the steering group.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written where-to-play and how-to-win choices for year five are agreed, with current activities sorted against them."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Describe the customers and offers you want to lead in at year five"
                - "Write one paragraph on why those customers will choose you"
                - "Sort current activities into fits, partly fits and does not fit"
                - "Take the choices to the steering group for agreement"
            - name: Build, buy or partner for critical capabilities
              description: |-
                ## Purpose
                For each capability the plan needs, there is a real choice between growing it inside, hiring or buying it, or partnering for it, and the choice changes the cost, speed and risk of the whole plan. Making the call deliberately, capability by capability, avoids defaulting to build because it feels safest.

                ## Milestones
                1. Each critical capability assessed against the three routes.
                2. Time to capability, cost and control compared for each route.
                3. A route chosen for every capability, with the reasoning written down.
                4. Any buy or partner route passed to the relevant team to explore further.

                ## Notes
                Detailed acquisition targeting and partnership deals belong to their own work. This project only decides the route for each capability.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every critical capability has a recorded build, buy or partner decision with time, cost and control compared."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List each critical capability from the capability tracker"
                - "Estimate time, cost and control for building, buying and partnering"
                - "Choose a route for each capability and write one line of reasoning"
                - "Hand buy and partner routes to the owners who will explore them"
            - name: Year-five workforce and leadership shape
              description: |-
                ## Purpose
                Doubling a business or moving it into new markets changes who the organisation needs: different roles, different numbers, different leaders. Sketching the workforce and leadership shape at year five, and comparing it with today, shows the hiring, development and reshaping the plan quietly assumes.

                ## Milestones
                1. Headcount by major role family sketched for year five.
                2. Leadership roles the plan needs that do not exist today listed.
                3. The gap to today's workforce shown by role family.
                4. The gap shared with the people function to shape their own multi-year plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A year-five workforce sketch by role family, with the gap to today, is shared with the people function."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sketch year-five headcount by role family from the bets and model"
                - "List leadership roles the plan needs that do not yet exist"
                - "Show the gap to today's workforce by role family"
                - "Review the year-five workforce sketch with the people lead @recurring(yearly)"
            - name: Long-range funding and capital path
              description: |-
                ## Purpose
                Big bets need money over several years, and a plan that does not say where it comes from is a plan for the next fundraise or the next cut. Setting out the multi-year investment need and the possible sources, such as retained cash, borrowing, equity or grants, gives the board a funding path to examine with its advisers.

                ## Milestones
                1. Total investment needed by year and by bet taken from the model.
                2. Possible funding sources listed with their rough timing and conditions.
                3. The peak funding need and the year it falls identified.
                4. The funding path reviewed with the finance lead and external advisers.

                ## Notes
                This project organises the question. Decisions on borrowing, equity or tax structures need your finance lead and qualified advisers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A multi-year funding path showing investment need, possible sources and peak need is reviewed with finance and advisers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the investment need by year and by bet from the model"
                - "List possible funding sources with timing and conditions"
                - "Mark the year of peak funding need on the chart"
                - "Book a review of the funding path with finance and advisers"
            - name: Operating model shifts for year five
              description: |-
                ## Purpose
                Reaching a new destination usually means working differently, not only doing more: a shared service centre, a regional structure, a digital sales channel, a different supply chain. Naming the four or five operating model shifts the plan needs, and when each must land, prevents the strategy from outrunning the organisation that has to deliver it.

                ## Milestones
                1. Four or five operating model shifts named, each linked to a bet.
                2. A from-to description written for each shift.
                3. The year each shift must be in place agreed.
                4. An owner named for each shift.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four or five operating model shifts are described from-to, each with a target year and owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each bet owner how the organisation must work differently"
                - "Write a from-to description of each operating model shift"
                - "Agree the year each shift must be in place"
                - "Name an owner for each shift"
            - name: Stop list for the long-range plan
              description: |-
                ## Purpose
                Every long-range plan adds new work, and very few remove any, so the bets end up competing with legacy activities for the same people. A deliberate stop list of products, markets, projects or habits the organisation will wind down over the horizon frees the capacity the plan needs and signals that the choices are real.

                ## Milestones
                1. A list of activities that do not fit the where-to-play choices.
                2. Each candidate assessed for the capacity and cost it would free.
                3. A stop list with wind-down dates agreed by the steering group.
                4. Staff and customers affected identified, with a communication plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A stop list with wind-down dates and freed capacity is agreed by the steering group."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List current activities marked does not fit in the where-to-play work"
                - "Estimate the people and money each would free"
                - "Agree wind-down dates for the stop list with the steering group"
                - "Identify the staff and customers each stop affects"
            - name: Long-range plan pre-mortem
              description: |-
                ## Purpose
                Imagining that it is year five and the plan has failed, then asking why, surfaces risks that optimism hides during planning. A two-hour pre-mortem with the steering group produces a ranked list of failure causes, each with a mitigation or an early warning, before the plan goes to the board.

                ## Milestones
                1. A two-hour pre-mortem session held with the steering group.
                2. Failure causes written silently first, then grouped and ranked.
                3. The top ten risks entered in a risk register with owners.
                4. Mitigations or signposts added to the plan for each top risk.

                ## Notes
                Start from the **Risk register** template. The silent writing step matters: it stops the most senior voice setting the list.
              priority: high
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A pre-mortem is held and the top ten risks are in a risk register with owners and mitigations before board approval."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book a two-hour pre-mortem with the steering group"
                - "Ask everyone to write failure causes silently before discussion"
                - "Rank the causes and enter the top ten in the risk register"
                - "Add a mitigation or signpost to the plan for each top risk"
            - name: Big bets leadership workshop
              description: |-
                ## Purpose
                Bets are only real once the people who will lead them have argued about them in the same room and committed. A one or two day workshop, prepared with the fact pack, gap chart and scored candidates, gives the leadership team the time to disagree properly and leave with bets they will own.

                ## Milestones
                1. A pre-read sent at least a week before the workshop.
                2. An agenda with time for debate, not only presentations.
                3. The bets and their owners agreed in the room and written up.
                4. Open questions listed with owners and dates.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The workshop ends with written agreement on the bets, their owners and the open questions with dates."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose a date and venue away from the normal office"
                - "Send the pre-read a week before the workshop"
                - "Draft an agenda with at least half the time for debate"
                - "Write up the agreed bets and open questions within two days"
            - name: Board approval of the long-range plan
              description: |-
                ## Purpose
                Directors are asked to approve a five year plan in a single session, often with too little time to challenge it. Preparing a clear board paper that sets out the ambition, bets, funding path and main risks, and inviting directors' input early, produces a plan the board genuinely backs rather than merely notes.

                ## Milestones
                1. An early informal conversation held with the chair on the plan's direction.
                2. A board paper of ten pages or fewer with a two-page summary.
                3. The plan presented and debated at the board meeting.
                4. The board's decision and any conditions recorded in the minutes.

                ## Notes
                Start from the **Board meeting** template.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The board has approved the long-range plan, with its decision and any conditions recorded in the minutes."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Book an hour with the chair to preview the plan's direction"
                - "Draft the board paper with a two-page summary up front"
                - "Send the paper with the full pre-read period your board expects"
                - "Record the board's decision and any conditions in the plan file"
            - name: Plan launch pack for the organisation
              description: |-
                ## Purpose
                Staff who cannot explain the plan cannot act on it, and a long-range plan is usually explained once and then never again. A launch pack with a one-page summary, a short story of why and where, and a version for each team's managers, gives people something they can repeat in their own words.

                ## Milestones
                1. A one-page plan on a page approved by the chief executive.
                2. A short narrative explaining why the plan matters and what changes.
                3. A manager briefing kit with likely questions and honest answers.
                4. A follow-up check, two months after launch, on whether staff can describe the plan.
              priority: medium
              deadlineOffsetDays: 170
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A plan on a page, a narrative and a manager briefing kit are issued, with a two-month understanding check completed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft the plan on a page and get the chief executive's approval"
                - "Write the likely staff questions and honest answers"
                - "Brief managers before the plan is shared more widely"
                - "Ask twenty staff two months on to describe the plan in a sentence"
            - name: Midpoint review of the long-range plan
              description: |-
                ## Purpose
                Around the halfway point of a five year plan, the world has usually moved enough that some bets look better and others worse than when they were chosen. A deliberate midpoint review, separate from the yearly roll-forward, asks the harder question of whether the direction itself still holds.

                ## Milestones
                1. Results so far compared with the plan's path for each measure.
                2. Each bet judged as continue, change or stop, with evidence.
                3. The ambition reaffirmed or reset by the steering group.
                4. Decisions presented to the board.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A midpoint review records continue, change or stop for every bet and the ambition decision, and is presented to the board."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Set the date for the midpoint review in the plan calendar"
                - "Compare results so far with the plan's path for every measure"
                - "Ask each bet owner for a continue, change or stop case"
                - "Take the decisions to the board"
            - name: Investor and lender briefing on the plan
              description: |-
                ## Purpose
                Founders and finance leaders often need to show investors or lenders where the organisation is going over several years, and the long-range plan is the natural source. Turning it into a short, honest briefing that separates committed plans from aspirations builds credibility rather than eroding it at the first missed number.

                ## Milestones
                1. A briefing deck of twelve slides or fewer drawn from the approved plan.
                2. Committed plans and aspirations clearly separated in the deck.
                3. The deck checked by finance and, where relevant, legal for what can be disclosed.
                4. Questions raised by investors or lenders recorded and answered.

                ## Notes
                Forward-looking statements to investors can carry legal duties. Check disclosure rules with your legal adviser before sharing.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A briefing deck checked by finance and legal has been presented, with questions logged and answered."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose which parts of the plan investors or lenders need to see"
                - "Draft a twelve slide briefing separating commitments from aspirations"
                - "Ask finance and legal to review what can be disclosed"
                - "Log every question raised and send written answers"
            - name: End-of-plan retrospective and next plan handover
              description: |-
                ## Purpose
                When a long-range plan reaches its final year, the organisation has a rare chance to learn how well it plans. A retrospective comparing what was intended with what happened, and why, gives the next plan a head start and stops the same mistakes being repeated five years later.

                ## Milestones
                1. The original ambition and bets set beside the final results.
                2. Reasons for each hit and miss recorded, separating luck from judgement.
                3. Five lessons for the next plan written down.
                4. The retrospective handed to whoever leads the next plan.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A retrospective with results against ambition, reasons and five lessons is handed to the next plan's lead."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find the original approved plan and its ambition measures"
                - "Set the final results beside each measure and bet"
                - "Interview five people who led bets about what they would change"
                - "Write five lessons and hand them to the next plan's lead"
            - name: Founder's first five-year plan
              description: |-
                ## Purpose
                Founders of young companies are often told five year plans are pointless, yet hiring, fundraising and product choices all depend on a view of where the company is going. A lean first plan, with a clear ambition, two or three bets and the few things that must be true, gives the team direction without pretending to precision.

                ## Milestones
                1. A year-five ambition written in a paragraph with two or three numbers.
                2. Two or three bets that would get the company there.
                3. The five things that must be true for the plan to work listed.
                4. The plan shared with co-founders and early staff, with their challenges noted.

                ## Notes
                Keep it to a few pages. Revisit it every six months while the company is finding its market.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A short five-year plan with ambition, two or three bets and five must-be-true conditions is shared with co-founders."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a paragraph describing the company in five years"
                - "Pick the two or three bets that would get it there"
                - "List five things that must be true for the plan to work"
                - "Walk co-founders through the plan and note their challenges"
            - name: Long-range plan before a raise or exit
              description: |-
                ## Purpose
                Founders preparing to raise a large round or sell the business several years out need the plan to show a credible path to the milestones buyers or investors will judge. Shaping the long-range plan around those milestones, such as recurring revenue, margins, team depth and clean governance, avoids a scramble when the time comes.

                ## Milestones
                1. The milestones a future investor or buyer will judge listed with help from an adviser.
                2. Each milestone placed on the plan's timeline with a target value.
                3. Gaps in team, systems or governance identified with dates to close them.
                4. A yearly check of the plan against those milestones in place.

                ## Notes
                Valuation, deal structure and tax questions need a corporate finance adviser and lawyer. This project only lines the plan up with their milestones.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The plan's timeline shows dated targets for each milestone a future investor or buyer will judge, with gaps and closing dates."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask an adviser which milestones investors or buyers will judge"
                - "Place each milestone on the plan's timeline with a target"
                - "List team, systems and governance gaps with dates to close them"
                - "Check the plan against the raise or exit milestones @recurring(yearly)"
            - name: Group plan with rolled-up unit plans
              description: |-
                ## Purpose
                In a group with several business units, a long-range plan written only at the centre misses what the units know, while unit plans written alone never add up. A common template, a shared set of group assumptions and a roll-up that shows the gap between the sum of units and the group ambition make the trade-offs visible.

                ## Milestones
                1. A common long-range template and group assumptions issued to each unit.
                2. Every unit's plan submitted in the template.
                3. Unit plans rolled up and compared with the group ambition.
                4. Gaps and overlaps discussed in a session with unit heads.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "All unit plans are submitted in a common template and rolled up, with the gap to group ambition discussed with unit heads."
                cadence: cyclic
                effort_hours_estimate: "30"
              tasks:
                - "Issue the common template and group assumptions to unit heads"
                - "Collect each unit's long-range plan in the template"
                - "Roll up unit plans and chart the gap to the group ambition"
                - "Review roll-up gaps with unit heads @recurring(quarterly)"
            - name: Three-year plan for your function
              description: |-
                ## Purpose
                Functional leaders in finance, technology, operations or marketing have to turn the company's long-range plan into what their own team must become. A three year function plan, tied to the company's bets, shows the capabilities, investments and people changes the function will deliver and gives its staff a direction they can see.

                ## Milestones
                1. The company bets that depend on your function listed.
                2. The function's year-three target state described in a page.
                3. Investments, hires and capability steps placed on a three year timeline.
                4. The function plan agreed with your manager and shared with your team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-year function plan tied to company bets is agreed with your manager and shared with your team."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the company bets your function must support"
                - "Write a page describing your function in three years"
                - "Place investments, hires and capability steps on a timeline"
                - "Check the function plan against company progress @recurring(quarterly)"
            - name: New chief executive inheriting a long-range plan
              description: |-
                ## Purpose
                A new chief executive often arrives mid-way through a predecessor's plan, with staff watching to see whether it will be kept, changed or torn up. Assessing the inherited plan calmly, keeping what is working and being clear about what will change and when, avoids both blind continuity and needless upheaval.

                ## Milestones
                1. The inherited plan, its bets and its progress read in full.
                2. Conversations held with each bet owner and the board chair.
                3. Each bet judged as keep, adjust or review, with reasons.
                4. A clear message to the organisation on what stays and what will be revisited.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every inherited bet has a keep, adjust or review judgement and the organisation has been told what stays and what changes."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the inherited plan and its latest progress report"
                - "Meet each bet owner to hear the honest state of their bet"
                - "Agree with the chair which bets are open for review"
                - "Tell the organisation what stays and what will be revisited"
            - name: Long-range planning for long-lived assets
              description: |-
                ## Purpose
                In capital-heavy or regulated businesses such as utilities, hospitals, ports and manufacturing, assets last twenty years or more and regulators often expect multi-year plans. The long-range plan needs an asset view: what will need replacing, what new regulation will demand and how the investment programme fits the strategy.

                ## Milestones
                1. Major assets listed with remaining life and replacement cost.
                2. Known and likely regulatory changes over the horizon recorded.
                3. A multi-year investment programme aligned with the bets and the regulation.
                4. The programme reviewed with engineering, finance and compliance leads.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An asset register with remaining lives and a multi-year investment programme aligned to the plan is reviewed by engineering, finance and compliance."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask engineering for major assets with remaining life and replacement cost"
                - "List regulatory changes expected over the horizon"
                - "Line up the investment programme with the bets and regulation"
                - "Recheck asset lives and regulatory changes with the leads @recurring(yearly)"
            - name: Staged commitment and real options in the plan
              description: |-
                ## Purpose
                Experienced planners rarely commit the full five year investment to a bet on day one. Structuring each bet as stages, with a smaller first commitment, clear evidence that unlocks the next stage and an exit if it does not appear, keeps the plan ambitious while limiting what is lost if a bet goes wrong.

                ## Milestones
                1. Each bet split into two to four stages with the investment for each.
                2. The evidence needed to move from one stage to the next written down.
                3. An exit or pivot condition named for each bet.
                4. Stage gates added to the milestone roadmap.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every bet has two to four funded stages, stage-gate evidence and an exit condition, all on the roadmap."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Split each bet into stages with the investment for each"
                - "Write the evidence that must exist before each next stage"
                - "Agree an exit or pivot condition with each bet owner"
                - "Add the stage gates to the milestone roadmap"
            - name: Ecosystem position at the end of the horizon
              description: |-
                ## Purpose
                Over five years the organisation's position among suppliers, partners, platforms and channels can matter as much as its own products. Mapping today's ecosystem and the position you want at year five, including which relationships you depend on and which you control, exposes dependencies the plan would otherwise ignore.

                ## Milestones
                1. Today's ecosystem mapped with suppliers, partners, channels and platforms.
                2. Critical dependencies marked, with what happens if each relationship fails.
                3. The year-five ecosystem position described.
                4. Moves to reach that position added to the bets or roadmap.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An ecosystem map with critical dependencies and a year-five target position is complete, and the resulting moves are on the roadmap."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Map suppliers, partners, channels and platforms you rely on"
                - "Mark the relationships whose failure would hurt the plan most"
                - "Describe the position you want in the ecosystem at year five"
                - "Revisit critical ecosystem dependencies with bet owners @recurring(yearly)"
            - name: Financial stress test of the long-range plan
              description: |-
                ## Purpose
                Fragile plans only work if every assumption lands. Running the long-range model through a few severe but plausible shocks, such as a revenue drop, a cost spike, a delayed bet or a funding gap, shows how much headroom the plan has and which bets to slow first if the shock arrives.

                ## Milestones
                1. Three or four shocks defined with their size and duration.
                2. Each shock run through the long-range model.
                3. The point at which cash or covenants become a problem identified.
                4. A pre-agreed order for slowing bets written into the plan.

                ## Notes
                This is a financial test of one plan, not a full scenario exercise. Agree shock sizes with your finance lead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Three or four shocks are modelled, the breaking point is identified and a bet slowdown order is written into the plan."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree three or four plausible shocks with the finance lead"
                - "Run each shock through the long-range model"
                - "Note the point where cash or covenants come under strain"
                - "Agree the order in which bets would be slowed"
            - name: Linking executive incentives to plan milestones
              description: |-
                ## Purpose
                If executives are rewarded only on annual results, the long-range bets will lose every argument about money and time. Working with the remuneration committee to tie part of long-term incentives to a few plan milestones aligns personal reward with the five year direction.

                ## Milestones
                1. Current executive incentive measures compared with the plan's milestones.
                2. Two or three plan milestones proposed as long-term incentive measures.
                3. The proposal reviewed by the remuneration committee and its advisers.
                4. The approved measures written into the incentive plan.

                ## Notes
                Incentive design has legal, tax and disclosure consequences. The remuneration committee and its advisers own the final design.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The remuneration committee has decided whether to include two or three plan milestones in long-term incentives, and the decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compare current executive incentive measures with the plan milestones"
                - "Propose two or three milestones as long-term incentive measures"
                - "Take the proposal to the remuneration committee"
                - "Check incentive measures still match plan milestones @recurring(yearly)"
            - name: Strategy archive and decision record
              description: |-
                ## Purpose
                Five years is long enough for most of the people who built a plan to move on, taking the reasoning with them. A simple archive of the fact base, the options considered, the bets chosen and rejected, and every major change with its reason means future leaders can see why the organisation is where it is.

                ## Milestones
                1. One shared location holding every version of the plan and its inputs.
                2. A decision record listing each major choice with date, reason and decider.
                3. Rejected options kept with the reason they were rejected.
                4. The archive updated after every quarterly health check.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared archive holds every plan version and a dated decision record, updated after each quarterly health check."
                cadence: rolling
              tasks:
                - "Set up one shared folder for every plan version and input"
                - "Start a decision record with date, choice, reason and decider"
                - "Move rejected options and their reasons into the archive"
                - "File the latest plan changes in the decision record @recurring(quarterly)"
---

# Long-Range Strategic Plan

This area is for the leader who has to say where the organisation will be in three to five years and how it gets there, whether that is a founder writing the first real plan, a manager shaping a function's contribution or an executive steering a group. It starts with the foundations (horizon, team, baseline, ambition and the gap between momentum and ambition), moves through the operating machinery and the planning skills, then the big choices on bets, capabilities, people and money, the events that approve and launch the plan, situations for founders, executives and group leaders, and finally the specialist work of staged commitment, stress testing and plan memory.

What repeats is deliberately light: a monthly look at signposts, assumptions, capabilities and milestones, a quarterly health check and model update, and a yearly refresh that rolls the plan forward by a year. The **Risk register**, **Board meeting**, **Metrics log** and **Skills matrix** templates pair with the pre-mortem, the approval meeting, the signpost watchlist and the capability tracker. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
