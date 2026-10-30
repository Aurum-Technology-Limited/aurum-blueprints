---
id: strategy-leadership.business-unit-portfolio-review
name: Business Unit Portfolio Review
description: "Comparable numbers for every unit, agreed criteria, a clear invest, harvest, fix or exit role for each business, and the review rhythm, board papers and exit work that follow from it."
category: business
version: 1.0.0
tags: [strategy-leadership, business-unit-portfolio-review, enterprise, manager, portfolio-strategy, capital-allocation, divestment, corporate-strategy]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
    - remediation-plan
    - meeting-notes
    - board-meeting
    - reading-queue
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Business Unit Portfolio Review
          description: "Reviewing a portfolio of businesses, products or programmes to decide where to invest, harvest, fix or exit."
          projects:
            - name: Portfolio review charter and scope
              description: |-
                ## Purpose
                Portfolio reviews stall when nobody agreed at the start what counts as a unit, who decides, and whether exits are genuinely on the table. A one-page charter signed off by the chief executive settles the question before the first spreadsheet is built, and stops unit heads treating the review as a budget negotiation.

                ## Milestones
                1. A list of what is in scope: business units, product lines, programmes or legal entities, with anything excluded named and explained.
                2. The decision owner, the review team and the role of the board written down.
                3. A plain statement of which outcomes are possible, including sale or closure, agreed with the chief executive.
                4. A timetable from data request to board decision with four or five dated gates.
                5. The charter shared with unit heads in a short briefing.

                ## Notes
                If exits are ruled out before you start, say so in the charter. A review that pretends every option is open when it is not loses the trust of unit leaders for years.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page review charter covering scope, decision owner, possible outcomes and dated gates has been approved by the chief executive."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a one-page outline of scope, owner and outcomes for the review"
                - "Agree with the chief executive whether sale and closure are possible outcomes"
                - "Set four or five dated gates between data request and board decision"
                - "Brief unit heads on the charter and record their questions"
            - name: Inventory of units, product lines and programmes
              description: |-
                ## Purpose
                Most groups cannot produce a single list of everything they run, because acquisitions, joint ventures and pet programmes sit in different reporting lines. Building one inventory with a named owner, revenue, headcount and legal entity for each item is the base every later comparison stands on.

                ## Milestones
                1. One register listing every unit, product line and programme in scope, with owner, revenue, headcount and legal entity.
                2. Joint ventures, minority stakes and shared platforms flagged separately from wholly owned units.
                3. Items that overlap or duplicate each other marked for discussion.
                4. The register checked against the latest management accounts so nothing material is missing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A single portfolio register reconciles to group revenue within two per cent and names an owner for every item."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export the current segment and cost centre list from the finance system"
                - "Add joint ventures, minority stakes and internal programmes the list misses"
                - "Reconcile total register revenue to the last audited accounts"
                - "Ask each owner to confirm their line and correct headcount"
            - name: Comparable unit profit and loss statements
              description: |-
                ## Purpose
                Units are often measured on different bases: one reports after central charges, another before, a third books group-wide contracts as its own. Restating every unit onto the same definitions of revenue, contribution and operating profit is tedious, and it is the step that decides whether the review is believed.

                ## Milestones
                1. A written definition of revenue, contribution and operating profit used for every unit.
                2. Three years of history and the current year forecast restated on those definitions.
                3. Intercompany sales and transfer prices identified and treated the same way in every unit.
                4. Restated figures agreed by each unit finance lead and the group finance director.

                ## Notes
                Keep a bridge from each unit's own reported numbers to the restated ones. Unit heads will challenge the restatement, and the bridge ends the argument quickly.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every unit has three years of restated profit and loss on common definitions, signed off by its finance lead and the group finance director."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Write one-paragraph definitions of revenue, contribution and operating profit"
                - "Request three years of unit accounts in a common format from each finance lead"
                - "Build a bridge from reported to restated profit for each unit"
                - "Hold a sign-off call with the group finance director on the restated set"
            - name: Cash generation and capital employed by unit
              description: |-
                ## Purpose
                Profit alone flatters units that tie up large amounts of inventory, receivables or plant. Measuring each unit's operating cash flow, capital expenditure and capital employed shows which businesses fund the group and which quietly consume it, which is usually the most surprising page of the whole review.

                ## Milestones
                1. Capital employed for each unit, split into fixed assets and working capital, on one agreed method.
                2. Three years of operating cash flow and capital expenditure for each unit.
                3. Cash conversion and return on capital employed calculated for every unit.
                4. A one-page chart ranking units by cash generated and cash consumed.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each unit has three years of operating cash flow, capital expenditure and capital employed on one method, ranked on a single page."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Agree with finance how shared assets are split between units"
                - "Collect year-end working capital balances for each unit for three years"
                - "Calculate cash conversion and return on capital employed per unit"
                - "Draw the cash generated versus cash consumed chart for the review pack"
            - name: Shared cost and central charge allocation rules
              description: |-
                ## Purpose
                Central costs such as IT, property, finance and brand often equal several points of margin, and how they are spread can turn a profitable unit into a loss maker on paper. Agreeing allocation rules that follow real usage, and showing results before and after allocation, keeps the review from being decided by an accounting convention.

                ## Milestones
                1. A list of every central cost pool above an agreed size, with its current allocation method.
                2. A usage driver chosen for each pool, such as headcount, transactions or floor space.
                3. Unit profit shown both before and after central charges.
                4. Costs that would not disappear if a unit left the group identified as likely stranded costs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written allocation rules for every major central cost pool are agreed by the finance director, with unit profit shown before and after charges."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List central cost pools above the agreed threshold with their current method"
                - "Propose a usage driver for each pool and test it on last year's figures"
                - "Mark which central costs would remain if a unit were sold"
                - "Agree the final rules with the finance director in writing"
                - "Revisit allocation drivers before each budget round @recurring(yearly)"
            - name: Review criteria and scoring rubric
              description: |-
                ## Purpose
                Without agreed criteria, the review becomes a contest of the most persuasive unit heads. A short rubric covering market attractiveness, competitive position, financial returns, cash, strategic fit and the centre's ability to add value, with weights agreed before any unit is scored, makes the final roles defensible.

                ## Milestones
                1. Five to seven criteria chosen, each with a one-line definition and the evidence that will be used.
                2. Weights agreed by the executive team before any unit is scored.
                3. A one to five scale described in words for each criterion.
                4. The rubric tested on two units to check it separates them sensibly.

                ## Notes
                Fix the weights before you see the scores. Changing them afterwards to rescue a favourite unit is the most common way reviews lose credibility.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A rubric of five to seven weighted criteria, each with a described scale, is approved by the executive team before scoring begins."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft five to seven criteria with a one-line definition each"
                - "Run a 45-minute session for the executive team to agree weights"
                - "Write a one to five scale description for each criterion"
                - "Trial the rubric on two contrasting units and adjust wording"
            - name: Market attractiveness assessment for each unit
              description: |-
                ## Purpose
                Strong units in shrinking, low-margin markets face a different future from an average unit in a growing one. Rating each unit's market on size, growth, profit pool, cyclicality and regulatory direction, from external sources rather than the unit's own plan, gives the attractiveness half of every portfolio grid.

                ## Milestones
                1. For each unit, a defined served market with its current size and expected growth rate.
                2. Typical industry margins and the trend in them recorded from external sources.
                3. Major threats such as substitution, regulation or new entrants noted per market.
                4. An attractiveness score for each unit on the agreed rubric, with sources cited.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every unit has a market attractiveness score with cited external sources for size, growth and margin."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Define the served market for each unit in one sentence"
                - "Gather market size and growth estimates from industry reports or analysts"
                - "Note industry margin ranges and their five-year direction"
                - "Score each market on the rubric and attach the sources"
            - name: Competitive position assessment for each unit
              description: |-
                ## Purpose
                Unit plans tend to describe themselves as leaders. Placing each unit against its two or three strongest competitors on relative share, cost position, customer retention and pricing power shows whether the unit can win in its market or is simply present in it.

                ## Milestones
                1. The two or three strongest competitors named for each unit.
                2. Relative market share estimated for each unit against its largest rival.
                3. Evidence of cost position, pricing power and customer retention gathered per unit.
                4. A competitive position score on the rubric, reviewed with the unit head.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each unit has a competitive position score backed by relative share and at least two pieces of external evidence."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask each unit head to name their three strongest competitors"
                - "Estimate relative market share against the largest rival for each unit"
                - "Collect customer retention and price realisation data from each unit"
                - "Review each draft score with the unit head and note disagreements"
            - name: Parenting advantage test for each unit
              description: |-
                ## Purpose
                Good businesses can still sit in the wrong group if the centre adds nothing, or actively slows them down. Asking for each unit what the group provides that a different owner could not, and what it costs the unit to belong, is the question that most often separates a hold from an exit.

                ## Milestones
                1. The specific value the centre adds to each unit listed, such as shared customers, purchasing scale, talent or capital access.
                2. The costs of group ownership for each unit listed, including charges, slower decisions and conflicting priorities.
                3. A view on whether another owner, such as a competitor or a financial buyer, would run the unit better.
                4. A parenting fit rating per unit agreed by the executive team.

                ## Notes
                Ask unit heads directly what they would do differently with a different owner. The answers are often frank and very useful.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every unit has a written parenting fit rating stating what the centre adds, what ownership costs and who might be a better owner."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Interview each unit head on what the group helps and hinders"
                - "List synergies that are actually realised today, with evidence"
                - "Name the most likely alternative owner for each unit"
                - "Agree a parenting fit rating per unit at the executive meeting"
            - name: First invest, harvest, fix or exit role for each unit
              description: |-
                ## Purpose
                All the analysis exists to give each unit a clear role it can plan against. Assigning invest, harvest, fix or exit to every unit, with the one or two reasons and the targets that come with that role, turns the review from a report into a set of instructions.

                ## Milestones
                1. Every unit placed in one of the four roles, with no unit left unclassified.
                2. Two or three sentences of rationale per unit tied to the rubric scores.
                3. Role-specific expectations set: growth and investment for invest, cash for harvest, a dated recovery target for fix, a route and timetable for exit.
                4. Roles approved by the chief executive and ready for the board.

                ## Notes
                Resist a fifth role called hold or maintain. It becomes the place where every hard decision is parked.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each unit has an approved role from invest, harvest, fix or exit, with written rationale and role-specific targets."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Plot every unit on attractiveness against competitive position"
                - "Propose a role for each unit with a two-sentence rationale"
                - "Set the headline target that comes with each unit's role"
                - "Take the proposed roles to the chief executive for approval"
            - name: Quarterly portfolio performance review
              description: |-
                ## Purpose
                Roles set once a year drift unless someone checks each quarter whether units are delivering what their role demands. A short quarterly review that looks at the whole portfolio on one page, rather than unit by unit, catches the fix unit that is not fixing and the invest unit that is not growing.

                ## Milestones
                1. A one-page portfolio summary showing each unit's role, key targets and actual results.
                2. A standing 90-minute review slot in the executive calendar each quarter.
                3. Units off track by an agreed margin flagged with a named follow-up.
                4. Decisions and follow-ups from each quarter recorded and checked at the next.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly portfolio reviews are held in a year, each with a one-page summary and a recorded list of follow-ups."
                cadence: rolling
              tasks:
                - "Design the one-page portfolio summary layout"
                - "Book a 90-minute quarterly slot with the executive team"
                - "Prepare and circulate the portfolio summary before each review @recurring(quarterly)"
                - "Check last quarter's follow-ups at the start of each review"
            - name: Unit economic profit and return tracking
              description: |-
                ## Purpose
                Revenue growth hides units that earn less than the cost of the capital they use. Tracking economic profit and return on capital for each unit monthly, against the group's cost of capital set by finance, shows which units are creating value and which are growing while destroying it.

                ## Milestones
                1. The group cost of capital used for the tracker confirmed with the finance director.
                2. Monthly economic profit and return on capital calculated for every unit.
                3. A twelve-month rolling view showing the trend for each unit.
                4. Units below the cost of capital for two consecutive quarters flagged automatically.

                ## Notes
                Start from the **Metrics log** template. Use one cost of capital for all units at first; adding risk adjustments by unit invites endless argument.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Economic profit and return on capital are updated monthly for every unit, with a flag on any unit below the cost of capital for two quarters."
                cadence: rolling
              tasks:
                - "Confirm the cost of capital figure with the finance director"
                - "Set up the tracker with one row per unit and a twelve-month view"
                - "Update unit economic profit and return on capital @recurring(monthly:12)"
                - "Flag units below the cost of capital for two quarters to the chief executive @recurring(quarterly)"
            - name: Monthly unit data pack
              description: |-
                ## Purpose
                Every review gets slower when the numbers have to be rebuilt from scratch. Keeping a monthly pack of restated revenue, margin, cash and capital for every unit, in the same format each time, means the quarterly and annual reviews start from trusted figures rather than a data request.

                ## Milestones
                1. A fixed template with the same measures for every unit.
                2. A named finance owner and a monthly date by which the pack is complete.
                3. Restatement adjustments from the review built into the monthly process.
                4. Twelve consecutive months of packs stored in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A unit data pack in a fixed format is completed by the agreed working day every month for twelve consecutive months."
                cadence: rolling
              tasks:
                - "Agree the fixed list of measures for the monthly pack with finance"
                - "Name the finance owner and the working day the pack is due"
                - "Check the monthly pack is complete and consistent @recurring(monthly:9)"
                - "Send the completed pack to the executive team and file it @recurring(monthly:10)"
            - name: Fix plan check-ins for underperforming units
              description: |-
                ## Purpose
                Without a dated recovery plan, a fix role becomes a permanent excuse. Monthly check-ins on each fix unit's plan, against milestones agreed at the review, give the unit leader support and give the group an early, fair basis for deciding when fixing has failed.

                ## Milestones
                1. A written recovery plan for each fix unit with three to five dated milestones.
                2. A monthly 30-minute check-in held with each fix unit leader.
                3. Each milestone recorded as met, late or missed.
                4. A pre-agreed point at which a missed plan triggers an exit discussion.

                ## Notes
                Start from the **Remediation plan** template. Agree the trigger for an exit discussion at the start, when it feels fair, not after the second missed milestone.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fix unit has a dated recovery plan, monthly check-ins are logged and an exit trigger is written into the plan."
                cadence: rolling
              tasks:
                - "Agree three to five dated recovery milestones with each fix unit leader"
                - "Write the exit discussion trigger into each recovery plan"
                - "Hold the fix unit check-in and log milestone status @recurring(monthly:18)"
                - "Report fix unit progress to the chief executive @recurring(quarterly)"
            - name: Cash discipline routine for harvest units
              description: |-
                ## Purpose
                Harvest units are told to maximise cash, but without a routine they keep asking for growth capital and launching new lines out of habit. A simple monthly view of cash delivered against target, with a stricter approval route for any new investment, keeps the role honest without starving the business of maintenance spend.

                ## Milestones
                1. A cash delivery target set for each harvest unit for the year.
                2. A rule that capital requests from harvest units above a threshold go to the group, with a payback test.
                3. Maintenance capital expenditure protected and separated from growth spend.
                4. Monthly cash delivered compared with target and reported.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each harvest unit has an annual cash target, a stricter capital approval rule and a monthly record of cash delivered against target."
                cadence: rolling
              tasks:
                - "Set the annual cash delivery target for each harvest unit"
                - "Write the capital approval rule for harvest units and circulate it"
                - "Compare harvest unit cash delivered with target @recurring(monthly:22)"
                - "Review maintenance spend levels with each harvest unit head @recurring(quarterly)"
            - name: Annual portfolio deep review
              description: |-
                ## Purpose
                Markets move, competitors consolidate and a unit that deserved investment three years ago may now be a harvest. Once a year the whole portfolio deserves a full reassessment against the rubric, with every role open to change, timed so that conclusions feed the budget rather than following it.

                ## Milestones
                1. The deep review scheduled to finish before the budget round starts.
                2. Market and competitive scores refreshed for every unit.
                3. Each unit's role confirmed or changed, with reasons for any change.
                4. Capital and headcount guidance for the budget issued from the review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full portfolio reassessment is completed each year before the budget round, with every role confirmed or changed in writing."
                cadence: cyclic
              tasks:
                - "Confirm the budget timetable and work back to a deep review deadline"
                - "Start the annual deep review and request refreshed unit data @recurring(yearly)"
                - "Refresh market and competitive scores for every unit"
                - "Issue budget guidance by unit role once roles are confirmed"
            - name: Portfolio watch list and trigger thresholds
              description: |-
                ## Purpose
                Problems in a unit usually show in a few leading signals months before they reach the profit line: lost key accounts, falling price realisation, rising warranty costs. A short watch list with agreed thresholds for each unit means a role review starts when the signal appears, not when the year-end numbers arrive.

                ## Milestones
                1. Three to five leading signals chosen for each unit with its leader.
                2. A threshold set for each signal that triggers a conversation.
                3. The watch list reviewed every quarter and breaches recorded.
                4. Every breach followed by a written note of what was decided.

                ## Notes
                Start from the **Risk register** template, one row per signal, so breaches and responses sit in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every unit has three to five leading signals with thresholds, reviewed quarterly, with a decision note for each breach."
                cadence: rolling
              tasks:
                - "Agree three to five leading signals with each unit leader"
                - "Set a trigger threshold for every signal on the watch list"
                - "Review the watch list and record any breaches @recurring(quarterly)"
                - "Collect the latest signal readings from each unit leader @recurring(monthly:5)"
                - "Write a decision note for each breached threshold"
            - name: Quarterly unit leader portfolio dialogues
              description: |-
                ## Purpose
                Unit leaders who only hear about their role at the annual review feel ambushed by it. A quarterly one-to-one between the group chief executive or strategy head and each unit leader, focused on the role and its targets rather than operational detail, builds the trust needed when a role has to change.

                ## Milestones
                1. A standing quarterly slot with each unit leader.
                2. A simple agenda: role, progress against role targets, market changes, what the centre should do differently.
                3. Notes kept from every dialogue and shared with the unit leader.
                4. Concerns raised by unit leaders tracked to a response.

                ## Notes
                Start from the **Meeting notes** template so the four agenda points stay the same every quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each unit leader has four portfolio dialogues a year, with shared notes and a tracked response to every concern raised."
                cadence: rolling
              tasks:
                - "Book a quarterly hour with each unit leader for the year"
                - "Hold the portfolio dialogues with every unit leader @recurring(quarterly)"
                - "Share notes from each dialogue within two working days"
                - "Track each unit leader concern to a written response"
            - name: Exit pipeline register
              description: |-
                ## Purpose
                Exits take one to three years from decision to completion, and losing track of their status is costly. A register of every unit with an exit role, its preferred route, stage, adviser, expected timing and separation issues lets the executive team and board see the whole disposal programme at once.

                ## Milestones
                1. Every exit unit listed with route, stage, owner and expected timing.
                2. Key separation issues such as shared contracts, people and systems noted per unit.
                3. The register reviewed each quarter with the finance director.
                4. Any unit that has sat at the same stage for two quarters escalated.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An exit register covering route, stage, owner and timing is reviewed quarterly, with stalled exits escalated after two quarters."
                cadence: rolling
              tasks:
                - "List every exit unit with its preferred route and owner"
                - "Note the main separation issues for each exit unit"
                - "Review exit register progress with the finance director @recurring(quarterly)"
                - "Escalate any exit that has not moved stage in two quarters"
            - name: Capital allocation calendar tied to unit roles
              description: |-
                ## Purpose
                Capital still tends to follow last year's budget rather than this year's portfolio roles. Setting a calendar that links each budget and capital approval point to unit roles, with invest units considered first and harvest units capped, makes the review change where money actually goes.

                ## Milestones
                1. The budget and capital approval dates for the year mapped on one calendar.
                2. A rule for how much capital each role can expect as a share of the total.
                3. Capital requests above a threshold tagged with the unit's role.
                4. A year-end comparison of capital actually allocated by role against intent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every capital request above the threshold is tagged with its unit role and a year-end report compares allocation by role with the agreed shares."
                cadence: cyclic
              tasks:
                - "Map budget and capital approval dates onto a single calendar"
                - "Propose capital shares by unit role for executive agreement"
                - "Tag capital requests with unit role at each approval round @recurring(monthly:26)"
                - "Produce the year-end allocation by role comparison"
            - name: Portfolio grids and their limits
              description: |-
                ## Purpose
                Growth-share and attractiveness-strength grids are useful for a first picture and misleading when used as the decision. Learning how each grid is built, what it leaves out, such as cash needs, interdependence between units and the centre's role, lets you use the pictures without letting them decide for you.

                ## Milestones
                1. The growth-share matrix and the nine-box attractiveness grid each drawn for your own portfolio.
                2. A written list of what each grid misses for your units.
                3. One worked example where a grid's suggestion would have been wrong and why.
                4. A choice of which grid, if any, goes in the board paper.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Both standard grids have been drawn for the portfolio and a written note records what each misses and which will be used."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a reputable explanation of the growth-share matrix and its critiques"
                - "Draw both grids using your own unit data"
                - "Write down three things each grid ignores for your portfolio"
                - "Decide which grid to show the board and note why"
            - name: Economic profit and return on capital basics
              description: |-
                ## Purpose
                Leaders who are fluent in revenue and margin are often less sure about capital-based measures, which are the ones a portfolio review depends on. Working through how economic profit, return on capital and cost of capital are calculated, using one of your own units, makes the tracker and the board debate easier to lead.

                ## Milestones
                1. The definitions of capital employed, return on capital and economic profit understood and written in your own words.
                2. A full worked calculation for one unit agreed with finance.
                3. The main distortions understood, such as old depreciated assets, leases and acquisition goodwill.
                4. A one-page explainer ready for unit leaders.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked economic profit calculation for one unit is checked by finance and turned into a one-page explainer for unit leaders."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask finance for one unit's capital employed and operating profit"
                - "Work through economic profit for that unit step by step"
                - "List how goodwill, leases and old assets distort the result"
                - "Ask the agent to draft a one-page explainer from your worked example"
            - name: Sum-of-the-parts valuation literacy
              description: |-
                ## Purpose
                Boards and investors increasingly ask whether the group is worth more in pieces than together. Understanding how analysts value each unit separately with peer multiples or cash flow, then add up and subtract central costs and debt, lets you anticipate the question and test whether a gap exists, while leaving the formal valuation to qualified advisers.

                ## Milestones
                1. The method understood: unit values, central cost deduction, net debt and the resulting comparison with group value.
                2. Listed peer companies identified for each unit as rough reference points.
                3. An indicative, clearly labelled internal sum-of-the-parts drafted with finance.
                4. A list of questions to put to corporate finance advisers if the gap looks material.

                ## Notes
                Treat this as an internal sense check. Any figure used externally or in a transaction needs advisers and proper governance.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An indicative internal sum-of-the-parts view, labelled as such and reviewed by finance, exists alongside a list of questions for advisers."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read two analyst notes that use sum-of-the-parts on companies in your sector"
                - "List listed peers for each unit with finance"
                - "Draft an indicative internal view and label it clearly"
                - "Write the questions you would ask an adviser about any gap"
            - name: Reading unit working capital and cash conversion
              description: |-
                ## Purpose
                Two units with the same margin can generate very different cash because of payment terms, stock levels and project billing. Learning to read receivable days, inventory days and payable days for each unit, and what normal looks like in its industry, helps you challenge cash plans in review meetings rather than accepting them.

                ## Milestones
                1. Receivable, inventory and payable days calculated for each unit for three years.
                2. Industry norms gathered for each unit's sector.
                3. The two units with the largest gap to norm identified with a likely cause.
                4. Three questions on working capital added to each unit's review.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Working capital days for every unit are compared with sector norms and the two largest gaps have a stated cause."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Calculate receivable, inventory and payable days for each unit"
                - "Find typical working capital days for each unit's sector"
                - "Identify the two units furthest from their sector norm"
                - "Add three working capital questions to the review agenda"
            - name: Corporate strategy and parenting reading
              description: |-
                ## Purpose
                The ideas behind portfolio reviews, such as parenting advantage, the better owner test and the dangers of diversification, come from a small body of corporate strategy writing. Reading the core texts once, and noting how they apply to your group, gives you language that unit leaders and directors recognise.

                ## Milestones
                1. A reading list of five to eight books, articles or case studies on corporate strategy and parenting.
                2. Notes on each, with one implication for your portfolio.
                3. A short summary of the better owner test written for your executive team.
                4. Two ideas from the reading tried in the next review.

                ## Notes
                Start from the **Reading queue** template. Classic texts on corporate-level strategy and parenting advantage remain the best starting point.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least five corporate strategy readings are completed, each with a recorded implication for the portfolio, and a better owner summary is shared."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Build a reading list of five to eight corporate strategy sources"
                - "Read one source a fortnight and note one implication each time"
                - "Write a one-page better owner summary for the executive team"
                - "Choose two ideas from the reading to use in the next review"
            - name: Divestment and spin-off case histories
              description: |-
                ## Purpose
                Exits fail in predictable ways: delayed too long, sold at the bottom of the cycle, separated poorly or announced before people were told. Studying a handful of public cases from your sector or a similar one, what drove them and how they went, gives you patterns to avoid before you start your own.

                ## Milestones
                1. Five public divestments, spin-offs or closures chosen from your sector or a comparable one.
                2. For each, the stated rationale, the route chosen, timing and what happened afterwards.
                3. Common mistakes and good practices drawn out across the cases.
                4. Lessons added to your exit route and communication planning.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five exit case histories are summarised with rationale, route and outcome, and at least three lessons are written into exit planning."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick five public exits from your sector or a similar one"
                - "Summarise each case's rationale, route and outcome on one page"
                - "Draw out the three most common mistakes across the cases"
                - "Add the lessons to the exit route decision notes"
            - name: Fix or exit decision for a persistent underperformer
              description: |-
                ## Purpose
                Almost every portfolio has one unit that has missed its plan for three or more years while each new leader promises a recovery. Making an explicit fix or exit decision, with a costed recovery case set against realistic exit values and closure costs, ends the drift and frees management attention either way.

                ## Milestones
                1. Five years of plan versus actual for the unit laid side by side.
                2. A recovery case with the investment, actions and time needed, tested by someone outside the unit.
                3. Indicative exit values and closure costs from finance and, where appropriate, advisers.
                4. A recorded decision with the reasons and, if fix is chosen, a final dated trigger.

                ## Notes
                Ask what you would pay to buy this unit today if you did not own it. If the answer is nothing, the fix case needs to be exceptional.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A fix or exit decision is recorded for the underperforming unit, comparing a tested recovery case with exit values and closure costs."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Put five years of plan against actual for the unit on one page"
                - "Ask an independent reviewer to test the recovery case"
                - "Obtain indicative exit and closure cost estimates from finance"
                - "Present the fix or exit options to the chief executive with a recommendation"
            - name: Harvest plan for a mature unit
              description: |-
                ## Purpose
                Harvesting well is a skill, not neglect. A mature unit in a declining market can return large amounts of cash for years if pricing, product range, cost base and investment are managed deliberately, and lose value quickly if staff sense abandonment and leave.

                ## Milestones
                1. A five-year cash profile for the unit under a harvest approach.
                2. Decisions on pricing, range simplification and cost base written into the plan.
                3. A retention plan for the people the unit cannot run without.
                4. A point at which harvest turns into sale or closure considered and noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A harvest plan for the unit sets out a five-year cash profile, pricing and cost decisions, key staff retention and a future exit point."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Model the unit's cash over five years under a harvest approach"
                - "Agree pricing and range decisions with the unit leader"
                - "Identify key staff and agree retention terms with HR"
                - "Note when harvest should give way to a sale or closure review"
            - name: Investment case for a growth unit
              description: |-
                ## Purpose
                An invest role means nothing if the unit's plan stays the same size. Building an investment case that sets out how much extra capital and talent the unit needs, what it will deliver and by when, and how progress will be checked, turns the role into a funded commitment with clear accountability.

                ## Milestones
                1. A growth plan with the additional investment required over three years.
                2. Revenue, margin and return targets tied to the investment, with milestones.
                3. The capability gaps such as people, technology or channels named and costed.
                4. The case approved, with stage gates for releasing the investment.

                ## Notes
                Release money in stages against milestones. A single upfront allocation removes the reason to check progress.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved three-year investment case for the growth unit sets targets, costed capability gaps and stage gates for releasing funds."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the unit leader for a three-year plan with the investment it needs"
                - "Test the revenue and return assumptions against market data"
                - "Cost the capability gaps the plan relies on"
                - "Set stage gates for releasing the investment and get approval"
            - name: Product line rationalisation within a unit
              description: |-
                ## Purpose
                Inside many units, a long tail of products or service lines earns little and adds complexity in operations, sales and support. Ranking lines by contribution after cost-to-serve, and deciding which to reprice, simplify or withdraw, often lifts a unit's margin faster than any growth initiative.

                ## Milestones
                1. Every product or service line ranked by revenue and by contribution after cost-to-serve.
                2. The tail of lines below an agreed contribution threshold identified.
                3. A decision for each tail line: keep, reprice, simplify or withdraw.
                4. Customer and contract implications checked before withdrawal.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each tail product line has a recorded keep, reprice, simplify or withdraw decision based on contribution after cost-to-serve."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Export revenue and direct cost by product line for the last year"
                - "Estimate cost-to-serve for each line with operations and sales"
                - "Rank lines by contribution and mark the tail"
                - "Agree a decision for each tail line with the unit leader"
            - name: Stop or continue review of internal programmes
              description: |-
                ## Purpose
                Internal programmes such as shared platforms, transformation workstreams or regional initiatives rarely face the scrutiny a business unit does, yet together they can consume as much money. Putting each through a simple stop or continue test on cost, delivered benefit and strategic link shows which deserve to keep running.

                ## Milestones
                1. A list of internal programmes above a cost threshold, with sponsor and annual spend.
                2. Delivered benefits to date set against the original case for each.
                3. A stop, continue or reshape recommendation for each programme.
                4. Freed budget identified and offered back to invest units.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every internal programme above the cost threshold has a recorded stop, continue or reshape decision and any freed budget is quantified."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List internal programmes above the cost threshold with their sponsors"
                - "Ask each sponsor for benefits delivered against the original case"
                - "Recommend stop, continue or reshape for each programme"
                - "Total the budget freed and propose where it should go"
            - name: Redrawing unit boundaries for the review
              description: |-
                ## Purpose
                Sometimes the units in the accounts are not real businesses: a strong and a weak line share one profit and loss, or one market is split across three divisions. Redefining review units around distinct customers, competitors and economics, before roles are assigned, prevents good lines being exited with bad ones.

                ## Milestones
                1. Each reported unit tested for whether it serves one market with one set of competitors.
                2. Units that mix very different economics split for review purposes.
                3. Fragments of one market across divisions combined for review purposes.
                4. The revised review unit list agreed, with a bridge to reported segments.

                ## Notes
                This changes how units are analysed, not the reporting lines. Any change to structure belongs to a separate organisation design process.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A revised list of review units, each with distinct customers and competitors, is agreed and bridged to reported segments."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Test each reported unit against the one market, one competitor set rule"
                - "Propose splits and combinations for review purposes"
                - "Build a bridge from review units to reported segments"
                - "Agree the revised review unit list with the finance director"
            - name: Choosing the exit route for a unit
              description: |-
                ## Purpose
                Once a unit is marked for exit, the route matters as much as the decision: a trade sale, a sale to a financial buyer, a spin-off, a management buyout, a joint venture or a managed closure each bring different value, timing, risk and effect on people. Comparing routes on the same criteria, with advisers for the legal, tax and market questions, gives the board a choice it can defend.

                ## Milestones
                1. The realistic exit routes for the unit listed, with the main conditions for each.
                2. Each route compared on value, time to complete, execution risk, people impact and separation complexity.
                3. Legal, tax and market questions referred to the appropriate advisers.
                4. A preferred route and a fallback recommended to the board.

                ## Notes
                This project prepares the choice. The transaction itself needs corporate finance, legal and tax advisers and proper board governance.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board paper recommends a preferred and a fallback exit route for the unit, compared on five stated criteria with adviser input recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the realistic exit routes for the unit with their conditions"
                - "Score each route on value, time, risk, people and separation"
                - "Brief legal, tax and corporate finance advisers on the shortlist"
                - "Draft the board recommendation with a preferred and fallback route"
            - name: Hold value versus sale value comparison
              description: |-
                ## Purpose
                A unit should usually leave when someone else will pay more for it than it is worth to you. Comparing the value of keeping the unit, on a realistic plan, with an estimated net sale value after costs, tax and stranded costs is the core test behind any exit, and it frequently shows that a sale is closer or further than people assumed.

                ## Milestones
                1. A realistic hold value based on the unit's plan, adjusted for past plan delivery.
                2. An indicative sale value range from peer transactions or advisers.
                3. Transaction costs, likely tax and stranded costs deducted to give net proceeds.
                4. A written comparison stating which is higher and how sensitive the answer is.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of hold value and net sale value, with sensitivity ranges, exists for every unit being considered for exit."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Haircut the unit plan by its historical delivery rate"
                - "Gather peer transaction multiples with finance or advisers"
                - "Deduct costs, tax estimates and stranded costs from sale value"
                - "Write up the comparison with a simple sensitivity table"
            - name: Reallocating resources from harvest to invest units
              description: |-
                ## Purpose
                Portfolio roles only matter if money and people actually move. Setting an explicit target for how much capital, operating budget and senior talent shifts from harvest and exit units to invest units over two budget cycles, and tracking it, is how a review changes the shape of the group.

                ## Milestones
                1. The current split of capital, operating budget and senior talent by unit role measured.
                2. A target split agreed for two budget cycles from now.
                3. Named moves of senior people from harvest to invest units planned.
                4. Progress against the target split reported at the annual review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A target split of capital, budget and senior talent by role is agreed and progress against it is reported at the next annual review."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Measure today's split of capital and budget by unit role"
                - "Agree a target split for two budget cycles ahead"
                - "Identify senior people who could move to invest units"
                - "Report actual against target split at the annual review"
            - name: Executive team portfolio offsite
              description: |-
                ## Purpose
                Portfolio roles that the executive team has not argued over together will be undermined in the corridors afterwards. A one or two day offsite with the full fact base, where each unit's proposed role is debated and settled, gives the decisions shared ownership before they go to the board.

                ## Milestones
                1. A fact pack for each unit circulated a week before the offsite.
                2. An agenda that gives each unit a fixed slot and leaves time for portfolio-wide trade-offs.
                3. Unit heads present for their own slot and absent for the debate on roles, if that is the agreed approach.
                4. Agreed roles and dissenting views recorded before the team leaves.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The executive offsite ends with a recorded role for every unit and a note of any dissenting views."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Choose a date and venue for a one or two day offsite"
                - "Assemble and circulate the unit fact pack a week ahead"
                - "Agree with the chief executive how unit heads take part"
                - "Record agreed roles and dissent at the close of the offsite"
            - name: Board paper on portfolio roles
              description: |-
                ## Purpose
                Directors need to see the reasoning, not just the conclusions, especially where a role implies a sale or closure. A clear board paper that explains the criteria, shows each unit's scores and role, and sets out the financial effect of the proposed portfolio gives the board what it needs to challenge and approve.

                ## Milestones
                1. An executive summary of one page with the proposed roles and their financial effect.
                2. The criteria, scores and rationale for each unit in an appendix.
                3. Risks and alternatives considered for each exit or fix role.
                4. Board approval or requested changes minuted.

                ## Notes
                Start from the **Board meeting** template. Brief the chair before the paper is circulated, especially on any proposed exit.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The board has received the portfolio paper and the minutes record approval of unit roles or the changes requested."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draft the one-page executive summary of proposed roles"
                - "Ask the agent to turn the unit scoring sheets into a consistent appendix"
                - "Brief the chair on proposed exits before circulation"
                - "Record the board's decision and any requested changes"
            - name: Communicating portfolio decisions to affected units
              description: |-
                ## Purpose
                People in a unit marked for harvest or exit will hear rumours within days of the board meeting. Planning who is told what, in what order and by whom, within the limits set by legal advisers and any market disclosure rules, protects trust and the value of the business being sold.

                ## Milestones
                1. A sequence for telling unit leaders, their teams, key customers and other units.
                2. Messages for each unit role written and checked by legal and HR advisers.
                3. Unit leaders briefed in person before any wider announcement.
                4. Questions from staff gathered and answered within an agreed time.

                ## Notes
                Where listed company disclosure or consultation rules apply, take advice on timing before anyone outside the decision group is told.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every affected unit leader is briefed in person before wider announcement, using messages approved by legal and HR advisers."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Map the order in which groups hear about the decisions"
                - "Draft messages for each role and send them for legal and HR review"
                - "Brief each affected unit leader in person"
                - "Set up a way to collect and answer staff questions"
            - name: Investor narrative for portfolio changes
              description: |-
                ## Purpose
                For listed or investor-backed groups, portfolio changes alter the equity story, and investors will judge whether the remaining group is more focused and better run. Preparing a consistent narrative on why units were kept, fixed or exited, with the investor relations team and advisers, avoids mixed messages at results or an investor day.

                ## Milestones
                1. A short statement of what the group will look like after the changes and why.
                2. Answers to the ten hardest questions investors are likely to ask.
                3. Consistency checked across the results statement, presentation and spokespeople.
                4. Disclosure timing agreed with advisers.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A portfolio narrative and question bank are agreed with investor relations and advisers before the next results or investor event."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-paragraph description of the group after the changes"
                - "List the ten hardest investor questions with draft answers"
                - "Check the narrative against the results statement and slides"
                - "Agree disclosure timing with investor relations and advisers"
            - name: One-year look back on portfolio decisions
              description: |-
                ## Purpose
                Few groups check whether last year's portfolio decisions worked: whether fix units recovered, invest units grew and exits delivered the expected proceeds. A dated look back a year after the board decision builds the evidence for the next review and shows the board the process has teeth.

                ## Milestones
                1. Each unit's role and targets from the decision compared with what happened.
                2. Exits compared with expected timing and net proceeds.
                3. Two or three lessons about the review process itself recorded.
                4. Findings presented to the executive team and board.
              priority: medium
              deadlineOffsetDays: 400
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A look back report comparing each unit's outcome with its role targets is presented to the board within fifteen months of the decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set a date one year after the board decision for the look back"
                - "Compare each unit's results with its role targets"
                - "Compare exits with expected timing and proceeds"
                - "Present findings and process lessons to the board"
            - name: New group leader's first portfolio review
              description: |-
                ## Purpose
                Newly appointed group chief executives and strategy directors are expected to have a view on the portfolio within months, often before they know the units well. Running a light first review in the first six months, with honest caveats, sets a baseline and earns the right to a fuller review in year two.

                ## Milestones
                1. Visits or calls with every unit leader completed in the first 60 days.
                2. A light version of the inventory, financials and cash by unit assembled.
                3. Initial hypotheses on each unit's role written and tested privately with the chair.
                4. A plan for a full review in the following year agreed.

                ## Notes
                Avoid announcing roles in the first months. Early hypotheses shared too widely become positions that are hard to revisit.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written set of initial unit role hypotheses, tested with the chair, and an agreed plan for a full review exist within six months of starting."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Schedule visits or calls with every unit leader in the first 60 days"
                - "Ask finance for a light pack of revenue, profit and cash by unit"
                - "Write initial role hypotheses for each unit"
                - "Test the hypotheses privately with the chair"
            - name: Business unit leader's preparation for review
              description: |-
                ## Purpose
                For a unit or product line head, the group's portfolio review can decide their budget, their team's future and their own career. Preparing an honest self-assessment against the group's criteria, with a clear case for the role you believe fits, is far more persuasive than defending last year's plan.

                ## Milestones
                1. The group's review criteria and timetable obtained and understood.
                2. A self-assessment of your unit against each criterion with evidence.
                3. A proposed role for the unit with the targets you would commit to.
                4. Your team briefed on the process without speculation about outcomes.

                ## Notes
                If your unit is likely to be a harvest or exit, say what would make that go well. Leaders who help shape a difficult outcome are trusted with the next role.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A self-assessment against every group criterion and a proposed role with committed targets are submitted before the review deadline."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the review team for the criteria and timetable"
                - "Score your unit against each criterion with evidence"
                - "Write the role you propose and the targets you would commit to"
                - "Brief your team on how the review works"
            - name: Product portfolio review for a divisional manager
              description: |-
                ## Purpose
                A divisional or product director often runs a mini portfolio of product families, brands or service lines without a group process to lean on. Applying a simplified version of the review, with three criteria and the same four roles, helps decide where the division's own budget and best people should go next year.

                ## Milestones
                1. Every product family in the division listed with revenue, contribution and growth.
                2. Three criteria chosen and each family scored.
                3. Invest, harvest, fix or exit roles proposed for each family.
                4. The division's next budget built around those roles and agreed with your manager.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each product family in the division has an agreed role and the next divisional budget reflects those roles."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List product families with revenue, contribution and growth"
                - "Choose three scoring criteria with your manager"
                - "Score each family and propose a role"
                - "Rebuild the divisional budget around the agreed roles"
            - name: Portfolio review in a diversified or family-controlled group
              description: |-
                ## Purpose
                Diversified groups and family-controlled holding companies often own businesses for reasons beyond returns: heritage, a founder's attachment, employment in a home town. Making those non-financial reasons explicit and weighting them openly, alongside the financial criteria, allows honest decisions without pretending the reasons do not exist.

                ## Milestones
                1. The non-financial reasons for owning each unit written down with the owners or controlling shareholders.
                2. A decision on how much weight those reasons carry in the rubric.
                3. Units held mainly for non-financial reasons identified, with the cost of holding them estimated.
                4. Owners' agreement on how such units will be reviewed in future.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Non-financial reasons for holding each unit are documented with the owners and the estimated cost of holding them is recorded."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Interview owners about why each unit is held"
                - "Propose how non-financial reasons are weighted in the rubric"
                - "Estimate the annual cost of holding units kept for those reasons"
                - "Agree with owners how these units are reviewed going forward"
            - name: Portfolio review in a cash-constrained year
              description: |-
                ## Purpose
                When debt covenants tighten or a downturn hits, the review has to answer a sharper question: which units must be protected, which can release cash quickly and which could be sold to strengthen the balance sheet. Running the review against a cash scenario agreed with finance stops the group making panic cuts to the units it will need later.

                ## Milestones
                1. A downside cash scenario agreed with the finance director.
                2. Each unit rated on cash it could release within twelve months.
                3. Units that must be protected through the downturn named with reasons.
                4. A ranked list of cash actions by unit, including possible disposals, presented to the board.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked list of cash actions by unit, tested against an agreed downside scenario, is presented to the board."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Agree a downside cash scenario with the finance director"
                - "Estimate cash each unit could release within twelve months"
                - "Name the units to protect and write down why"
                - "Rank cash actions by unit and take them to the board"
            - name: Review of a mid-sized company's few product lines
              description: |-
                ## Purpose
                Companies with three to five product lines rarely call it a portfolio review, yet the same questions apply: which line gets the next hire, the marketing budget and the leadership attention. A lighter process, run by the leadership team over a few weeks, gives a mid-sized business the same clarity without a group strategy function.

                ## Milestones
                1. Profit and cash by product line separated, even if roughly.
                2. Each line rated on market growth, competitive strength and fit with the company's direction.
                3. A role for each line agreed by the leadership team.
                4. Hiring, marketing and development budgets for the next year aligned to those roles.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each product line has a role agreed by the leadership team and next year's hiring and marketing budgets follow those roles."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Split last year's profit and cash by product line with your accountant"
                - "Rate each line on growth, strength and fit"
                - "Agree a role per line at a leadership team meeting"
                - "Align next year's hiring and marketing budget to the roles"
            - name: Separation readiness for a carve-out
              description: |-
                ## Purpose
                Units that have lived inside a group for years share systems, contracts, people, sites and brands, and buyers discount heavily for every unresolved dependency. Mapping and planning the separation before a sale process starts, including transitional services the group may need to provide, protects value and shortens the timetable.

                ## Milestones
                1. Every shared system, contract, site, brand and person mapped between the unit and the group.
                2. A standalone cost estimate for the unit outside the group.
                3. A draft list of transitional services the group would provide and for how long.
                4. A separation plan reviewed with legal and corporate finance advisers.

                ## Notes
                Standalone costs are almost always higher than the central charges the unit pays today. Buyers will find this, so estimate it first.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A separation plan with a dependency map, standalone cost estimate and draft transitional services list is reviewed with advisers before any sale process starts."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Map shared systems, contracts, sites and people for the unit"
                - "Estimate the unit's standalone costs with finance"
                - "Draft the list of transitional services and durations"
                - "Review the separation plan with legal and corporate finance advisers"
            - name: Stranded cost reduction after an exit
              description: |-
                ## Purpose
                When a unit leaves, the central costs it used to absorb stay behind: the office space, the finance team, the IT contracts. Planning how those stranded costs will be removed, with owners and dates, is what makes an exit improve the remaining group rather than quietly lowering its margin.

                ## Milestones
                1. Stranded costs estimated by cost pool before the exit completes.
                2. A reduction plan with an owner and date for each pool.
                3. Transitional service income and costs tracked until they end.
                4. Actual stranded cost removed reported at six and twelve months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stranded cost reduction plan with owners and dates exists, and removed costs are reported at six and twelve months after the exit."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Estimate stranded costs by central pool before completion"
                - "Assign an owner and target date to each cost pool"
                - "Track transitional service income and costs until they end"
                - "Report stranded cost removed at six and twelve months"
            - name: Activist and conglomerate discount preparedness
              description: |-
                ## Purpose
                Listed groups whose shares trade below the sum of their parts attract activist investors who will publish their own portfolio review. Testing your portfolio the way an activist would, and preparing a clear answer on why each unit belongs, means the board is not reacting for the first time to an open letter.

                ## Milestones
                1. The group's discount or premium to an indicative sum of the parts estimated.
                2. The units an activist would most likely push to separate identified, with their likely argument.
                3. A board-approved position on each of those units.
                4. A response protocol agreed with advisers, covering who speaks and when.

                ## Notes
                Keep this work within a small group and under adviser guidance. Market sensitivity and disclosure obligations apply.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The board has approved a position on each unit most likely to be targeted, and a response protocol is agreed with advisers."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Estimate the group's discount to an indicative sum of the parts"
                - "Write the separation argument an activist would make for each likely target"
                - "Prepare the board's position on each likely target unit"
                - "Agree a response protocol with legal and investor relations advisers"
            - name: Portfolio balance across cycles, risks and geographies
              description: |-
                ## Purpose
                Individually sound units can still form a fragile portfolio if they all depend on the same customer sector, commodity, currency or economic cycle. Checking how the units move together, and where concentration sits, adds a whole-portfolio view that unit-by-unit roles miss.

                ## Milestones
                1. Revenue and profit by unit mapped against end markets, geographies and major input costs.
                2. Historic correlation of unit results through at least one downturn examined.
                3. The two or three largest shared exposures named and quantified.
                4. A view on whether any role should change to improve balance, recorded for the annual review.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The portfolio's two or three largest shared exposures are quantified and a recorded view on balance feeds the annual review."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Map each unit's revenue by end market, geography and key input"
                - "Look at how unit results moved together in the last downturn"
                - "Quantify the largest shared exposures across the portfolio"
                - "Record a view on balance for the next annual review"
---

# Business Unit Portfolio Review

This area is for the group chief executive, strategy director or divisional head who has to look across several businesses, product lines or programmes and decide which ones get more money, which are run for cash, which get one last chance to fix and which leave. It starts with the foundations (scope, a clean inventory, comparable unit financials, cash and capital by unit, criteria and a first role for each unit), then the operating rhythm that keeps those roles honest, the analytical skills behind a credible review, the hard decisions on fixing, harvesting, investing and exiting, the offsites and board papers where decisions get made, variants for new leaders, unit heads and different kinds of group, and finally the specialist work of separations, stranded costs and investor pressure.

What repeats is a monthly unit data pack and value tracking, monthly fix-plan check-ins, quarterly performance reviews and unit leader dialogues, a quarterly look at the watch list and exit pipeline, and a yearly deep review that resets every unit's role. The **Metrics log**, **Risk register**, **Remediation plan**, **Meeting notes**, **Board meeting** and **Reading queue** templates pair with the data pack, the watch list, fix plans, unit dialogues, the board paper and the case history reading. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
