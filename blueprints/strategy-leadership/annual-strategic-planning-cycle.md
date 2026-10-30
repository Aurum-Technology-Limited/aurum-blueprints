---
id: strategy-leadership.annual-strategic-planning-cycle
name: Annual Strategic Planning Cycle
description: "A yearly strategy process that runs on time: a back-scheduled calendar, an honest diagnosis, real options, a few clear priorities, targets and budgets that agree, and a plan every team can follow."
category: business
version: 1.0.0
tags: [strategy-leadership, annual-strategic-planning-cycle, manager, enterprise, team, strategic-planning, budgeting, planning-calendar]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - meeting-notes
    - feedback-themes
    - purchase-decision
    - board-meeting
    - risk-register
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Annual Strategic Planning Cycle
          description: "Running the yearly strategy process, from diagnosis and options to choices, targets and resourcing that the whole organisation can follow."
          projects:
            - name: Planning calendar back-scheduled from the plan year start
              description: |-
                ## Purpose
                Most annual plans arrive late because the cycle starts when someone remembers it, not when the date of board approval demands it. Working backwards from the first day of the plan year, through board sign-off, budget lock, unit plan submission and kickoff, gives every leader the dates months in advance. A calendar published early is the single cheapest fix for a rushed plan.

                ## Milestones
                1. The first day of the plan year and the board meeting that approves the plan both fixed on the calendar.
                2. Every stage from kickoff to launch placed backwards from those dates with owners named.
                3. Buffer of at least two weeks built in before the board pack deadline.
                4. The calendar published to all leaders and placed in their diaries.

                ## Notes
                Most organisations need twelve to sixteen weeks from kickoff to approval. Fewer than eight usually means the budget gets written before the strategy.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated planning calendar from kickoff to plan launch, with an owner per stage, sent to every executive and unit head."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the plan year start date and the board meeting that approves the plan"
                - "List every stage of the cycle and the dependency between each"
                - "Place each stage backwards from approval with a named owner"
                - "Send diary invitations for every fixed planning date"
            - name: Planning roles and process owner charter
              description: |-
                ## Purpose
                Planning slips when the chief executive thinks finance owns it, finance thinks strategy owns it and unit heads wait to be asked. A one-page charter names the process owner, the sponsor, the planning team, who writes what and who signs off, so questions have somewhere to go. It also settles the old argument about whether strategy or the budget leads.

                ## Milestones
                1. A named process owner and an executive sponsor for this year's cycle.
                2. A responsibility chart covering diagnosis, unit plans, budget, targets and approval.
                3. Finance and strategy agreed on which of them leads at each stage.
                4. The charter approved by the chief executive and shared with unit heads.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed one-page charter naming the process owner, sponsor, planning team and the approver for each planning deliverable."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down who ran each part of last year's cycle and where it stalled"
                - "Draft a responsibility chart for each planning deliverable"
                - "Agree the hand-offs between strategy and finance in one meeting"
                - "Get the chief executive to approve and circulate the charter"
            - name: Last year's plan against actual results
              description: |-
                ## Purpose
                Before writing a new plan, find out how the last one did: which priorities were delivered, which targets were hit, and which were quietly abandoned in March. Without that record the new plan repeats the same optimism. An honest scorecard also shows where the planning process itself failed, not just the execution.

                ## Milestones
                1. Every priority and headline target from last year's plan listed with its actual outcome.
                2. Each miss given a one-line cause: wrong assumption, under-resourced, deprioritised or poorly executed.
                3. Three lessons for this year's cycle written down and agreed by the executive team.
                4. The scorecard attached to the planning pack for this year.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A scorecard of last year's priorities and targets against actuals, with causes for misses and three agreed lessons, filed in the planning pack."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull last year's approved plan and its headline targets"
                - "Ask finance for the actuals against each financial target"
                - "Interview three unit heads about what slipped and why"
                - "Repeat the plan against actual review before each new cycle @recurring(yearly)"
            - name: Planning ground rules agreed by the executive team
              description: |-
                ## Purpose
                Leaders who start the cycle with different ideas of what is up for discussion waste weeks arguing about scope. Agreeing up front what is fixed from the long-range plan, how many priorities the year will carry, roughly how big the budget envelope is and what a unit plan must contain turns those arguments into one meeting. It also protects the planning team from late requests to reopen everything.

                ## Milestones
                1. A written list of what is fixed and what is open in this cycle.
                2. A maximum number of company priorities agreed, usually three to five.
                3. A required content list for every unit plan.
                4. The ground rules signed off at an executive team meeting and minuted.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One page of planning ground rules, approved and minuted at an executive meeting before kickoff."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the fixed and open items for this year's cycle"
                - "Propose a cap on the number of company priorities"
                - "Table the ground rules at the next executive team meeting"
                - "Circulate the approved rules with the planning calendar"
            - name: Planning inputs request to every function
              description: |-
                ## Purpose
                Every function holds data the diagnosis needs: sales pipeline and churn, operations capacity, people turnover, technology debt, regulatory changes. A single, early request with a template and a deadline gets comparable inputs instead of fifty slide decks in different shapes. It also gives unit heads a preview of what the cycle will ask of them.

                ## Milestones
                1. A standard input template covering performance, capacity, risks and asks.
                2. The request sent to every function head with a return date.
                3. All inputs received and logged against the template.
                4. Gaps chased and noted in the diagnosis pack.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Completed input templates received from every function head and filed in one folder before the diagnosis workshop."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the data the diagnosis will need from each function"
                - "Build a two-page input template with the same headings for all"
                - "Send the request with a return date two weeks out"
                - "Log returns and chase the missing ones by name"
            - name: Planning assumptions register for the plan year
              description: |-
                ## Purpose
                Plans built on different assumptions about inflation, exchange rates, wage settlements, pricing and market growth cannot be added up or compared. A register of the shared assumptions, each with a source and an owner, means every unit plans against the same world. When an assumption later turns out wrong, you can see exactly which parts of the plan move.

                ## Milestones
                1. Between ten and twenty planning assumptions listed with values and sources.
                2. An owner named for each assumption.
                3. The register issued to every unit before plans are drafted.
                4. Sensitivity noted for the three assumptions that move the plan most.

                ## Notes
                Keep internal assumptions such as hiring lead times and price increases in the same register as the external ones. They are wrong just as often.
              priority: high
              deadlineOffsetDays: 40
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register of at least ten dated planning assumptions, each with a source and owner, issued to all unit heads."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the assumptions last year's plan relied on, stated or not"
                - "Agree values and sources for each with finance"
                - "Name an owner for each assumption"
                - "Issue the register with the unit plan template"
            - name: One-page unit plan template
              description: |-
                ## Purpose
                When each unit writes its plan in its own format, the planning team spends weeks reformatting instead of challenging. A single one-page template with the same headings, such as the situation, the priorities, the measures, the resources asked for and the risks, makes plans comparable and forces each unit to choose. Longer appendices can follow, but the page comes first.

                ## Milestones
                1. A one-page template with fixed headings and a word limit per section.
                2. A worked example filled in by the planning team.
                3. Two unit heads asked to test the template and their comments applied.
                4. The template issued with the planning inputs request.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested one-page unit plan template with a worked example, issued to every unit head before drafting starts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose the five or six headings every unit plan must answer"
                - "Fill in a worked example for one real unit"
                - "Ask two unit heads to try the template and say what confused them"
                - "Publish the final template in the planning folder"
            - name: Customer and frontline input for the diagnosis
              description: |-
                ## Purpose
                Customers and frontline staff often know the year's real problems before the executive team does: the product gaps, the broken processes, the competitor winning on service. A short, structured round of interviews and a staff pulse, gathered before the diagnosis workshop, keeps the plan grounded in what is actually happening. It also gives people a reason to believe the plan when it arrives.

                ## Milestones
                1. Ten to fifteen customer conversations and a short frontline pulse completed.
                2. Responses grouped into five to eight themes with example quotes.
                3. The themes presented at the diagnosis workshop.
                4. A thank-you note sent to staff explaining how their input was used.

                ## Notes
                Start from the **Feedback themes** template. Ask the same three questions everywhere so themes can be counted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A themes summary from at least ten customer conversations and a frontline pulse, presented at the diagnosis workshop."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write three questions to ask customers and frontline staff"
                - "Book ten customer calls through the account managers"
                - "Run a five-minute anonymous staff pulse"
                - "Ask the agent to group the responses into themes with quotes"
            - name: Strategic diagnosis of the plan year
              description: |-
                ## Purpose
                A plan without a diagnosis is a list of goals. Naming the two or three critical challenges the organisation faces next year, such as a shrinking core market, a cost base out of line or a capability gap, gives every later choice something to answer to. The diagnosis should be short enough to read aloud and uncomfortable enough to argue about.

                ## Milestones
                1. Inputs, last year's scorecard and the assumptions register read by the executive team.
                2. A half-day diagnosis session held with the executive team.
                3. Two or three critical challenges written up in under two pages.
                4. The diagnosis approved as the starting point for options.
              priority: high
              deadlineOffsetDays: 50
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An executive-approved diagnosis of no more than two pages naming the two or three critical challenges for the plan year."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Circulate the inputs pack a week before the diagnosis session"
                - "Run the session with a single question: what must we get right next year"
                - "Draft the diagnosis in under two pages"
                - "Update the diagnosis at the start of each new cycle @recurring(yearly)"
            - name: Top-down financial envelope for the plan year
              description: |-
                ## Purpose
                Without an early sense of the money available, units write wish lists that add up to twice the budget and the cycle ends in blunt cuts. Finance and the chief executive setting a top-down envelope for revenue, margin, operating cost and capital spend, before unit plans are drafted, keeps the ambition realistic. It can move later, but it should exist from the start.

                ## Milestones
                1. A draft envelope for revenue, margin, operating cost and capital spend.
                2. The envelope tested against the assumptions register.
                3. The envelope agreed by the chief executive and finance lead.
                4. Unit-level guidance ranges issued with the planning template.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A top-down financial envelope agreed by the chief executive and finance lead, with unit guidance ranges issued before drafting."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask finance for a run-rate view of next year with no new initiatives"
                - "Agree the headline revenue and margin ambition with the chief executive"
                - "Split the envelope into guidance ranges for each unit"
                - "Send the ranges with a note on how firm they are"
            - name: Annual planning cycle runbook
              description: |-
                ## Purpose
                The knowledge of how the cycle runs usually lives in one person's head and leaves with them. A runbook of every stage, template, owner, meeting and lesson learned lets the cycle repeat cleanly each year and survive a change of planning lead. It is updated after every cycle while the pain is fresh.

                ## Milestones
                1. Every stage of the cycle written as a checklist with owners and lead times.
                2. All templates and example outputs linked from the runbook.
                3. Lessons from the last cycle added in a dedicated section.
                4. A second person able to run the cycle from the runbook alone.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A runbook covering every planning stage, with templates linked and a lessons section updated within a month of plan launch."
                cadence: cyclic
              tasks:
                - "Write the stages of the current cycle as a checklist"
                - "Link every template and last year's examples"
                - "Name a deputy who could run the cycle from the runbook"
                - "Update the runbook with lessons after each plan launch @recurring(yearly)"
            - name: Monthly planning steering group
              description: |-
                ## Purpose
                A small steering group of the process owner, finance, a business unit head and the sponsor catches slipping dates and unresolved arguments before they become a crisis at board time. Meeting monthly, and more often in the peak weeks, it makes the calls the planning team cannot. Keep it to forty-five minutes and decisions only.

                ## Milestones
                1. Four or five members named with terms of reference.
                2. A standing monthly slot booked for the year.
                3. A short agenda of dates, risks and decisions needed used every time.
                4. Decisions recorded and sent out within a day of each meeting.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A steering group that has met every month of the cycle, with decisions recorded and circulated within one working day."
                cadence: rolling
              tasks:
                - "Invite four or five members and agree terms of reference"
                - "Book a forty-five minute slot for the year"
                - "Run the steering group on dates, risks and decisions @recurring(monthly:9)"
                - "Send the decisions within a day of each meeting"
            - name: Quarterly planning assumptions refresh
              description: |-
                ## Purpose
                Inflation, exchange rates, interest costs and demand rarely stay where the plan put them. Checking the assumptions register each quarter, and flagging the ones that have moved enough to change targets or spending, gives leaders early warning instead of a surprise at year end. It also makes the next cycle start from better numbers.

                ## Milestones
                1. Each assumption checked against its source every quarter.
                2. Moved assumptions flagged with the size of the impact on the plan.
                3. A short note sent to the executive team when an assumption moves materially.
                4. The register's history kept so next year's planning can see the drift.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four dated refreshes of the assumptions register a year, each with a note to the executive team on material changes."
                cadence: rolling
              tasks:
                - "Set a materiality threshold for each assumption with finance"
                - "Check every assumption against its source @recurring(quarterly)"
                - "Send a one-paragraph note when any threshold is crossed"
                - "Keep the old values beside the new ones in the register"
            - name: Planning decision log
              description: |-
                ## Purpose
                Choices made during the cycle, such as which initiative was dropped, why a unit's budget was cut or which target was lowered, get forgotten and then reopened in spring. A simple log with the decision, the date, who made it and the reason settles those arguments and makes the plan's logic traceable. It is also the best raw material for next year's lessons.

                ## Milestones
                1. A log set up with fields for decision, date, decider, reason and what was rejected.
                2. Every steering group and executive planning decision entered.
                3. The log linked from the final plan document.
                4. A monthly check that nothing decided has gone unrecorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A decision log with every planning decision of the cycle recorded, including the reason and the option rejected."
                cadence: rolling
              tasks:
                - "Create the log with decision, date, decider, reason and rejected option"
                - "Enter the decisions already made this cycle"
                - "Check meeting notes against the log for gaps @recurring(monthly:20)"
                - "Link the log from the plan document"
            - name: Year-round parking lot for next year's plan
              description: |-
                ## Purpose
                Good ideas and hard problems surface all year, usually when there is no budget left for them. A parking lot where leaders can drop ideas, emerging threats and unfunded asks means the next diagnosis starts with a year's worth of material, not a blank page. It also gives people a fair answer to proposals that arrive mid-year: it is in the queue.

                ## Milestones
                1. A shared list open to all leaders with a short entry format.
                2. Leaders told where and how to add items.
                3. The list tidied monthly and duplicates merged.
                4. The full list fed into the next planning inputs pack.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A parking lot with entries from at least five leaders, tidied monthly and handed to the next diagnosis."
                cadence: rolling
              tasks:
                - "Set up a shared list with fields for idea, owner and size"
                - "Tell leaders at the next management meeting how to use it"
                - "Tidy and merge the parking lot entries @recurring(monthly:27)"
            - name: Strategy and budget tie-out with finance
              description: |-
                ## Purpose
                Strategy says the year is about a new segment while the budget quietly funds last year's activity. A regular tie-out between the planning lead and finance, checking that every priority has money and people against it and that no large spend sits outside the priorities, keeps the two documents saying the same thing. It matters most in the weeks before budget lock.

                ## Milestones
                1. Each company priority mapped to the budget lines that fund it.
                2. Large spending lines with no priority behind them listed and questioned.
                3. Gaps resolved before budget lock.
                4. A one-page tie-out attached to the board pack.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tie-out showing every priority funded and every budget line over the agreed size linked to a priority, signed by finance before budget lock."
                cadence: cyclic
              tasks:
                - "Book a recurring tie-out with the finance lead"
                - "Map each priority to its budget lines and headcount"
                - "Review the strategy and budget tie-out with finance @recurring(monthly:15)"
                - "List unfunded priorities and unowned spend for the steering group"
            - name: Headcount plan reconciliation
              description: |-
                ## Purpose
                People are usually the largest cost and the slowest thing to change, yet hiring plans are often agreed separately from the strategy. Reconciling planned roles with the priorities, the budget and realistic hiring lead times shows whether the plan can be staffed at all. A priority with no named people against it is not a priority.

                ## Milestones
                1. Current headcount and planned new roles listed by unit.
                2. Each new role linked to a priority or to keeping the lights on.
                3. Hiring start dates checked against realistic lead times.
                4. The reconciled plan agreed with the people team and finance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A headcount plan in which every new role is linked to a priority or run cost and agreed by finance and the people team."
                cadence: cyclic
              tasks:
                - "Get current headcount by unit from the people team"
                - "Link each requested role to a priority or run cost"
                - "Reconcile hires against the budget and lead times @recurring(monthly:12)"
                - "Flag priorities with no named people to the steering group"
            - name: Single source of truth for planning documents
              description: |-
                ## Purpose
                By budget lock most organisations have five versions of the plan in inboxes and nobody sure which was approved. One folder, a naming rule, a version history and a clear marker for the approved version stop leaders working from the wrong numbers. It takes an hour to set up and saves a week of confusion.

                ## Milestones
                1. One planning folder with agreed access for leaders and finance.
                2. A naming rule with unit, document and version.
                3. Approved versions marked and earlier ones moved to an archive.
                4. A quarterly check that the folder still reflects what is approved.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One planning folder where every approved document is marked and superseded versions are archived, checked each quarter."
                cadence: rolling
              tasks:
                - "Create the planning folder and set access"
                - "Write and share a three-part naming rule"
                - "Move old versions into an archive folder"
                - "Check the folder matches the approved plan @recurring(quarterly)"
            - name: Planning season workstream tracker
              description: |-
                ## Purpose
                During the twelve or so weeks of planning season, a dozen workstreams run at once and one late unit plan can hold up the whole consolidation. A weekly tracker of each workstream's status, next deadline and blocker, reviewed in fifteen minutes, keeps everyone honest about dates. Outside the season, pause the weekly review.

                ## Milestones
                1. Every planning workstream listed with owner and next deadline.
                2. A weekly fifteen-minute status check held through the season.
                3. Blockers escalated to the steering group within a week.
                4. The tracker closed at plan launch with final dates recorded for the runbook.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A workstream tracker updated every week of planning season, with each blocker escalated within a week of being raised."
                cadence: cyclic
              tasks:
                - "List every workstream with owner and next deadline"
                - "Run a fifteen-minute workstream status check @recurring(weekly:tue)"
                - "Escalate any blocker older than a week"
                - "Record actual dates against planned ones at plan launch"
            - name: Writing a diagnosis that names the crux
              description: |-
                ## Purpose
                Most draft diagnoses list every problem the organisation has, which means none of them gets solved. Learning to find the one or two challenges that, if handled, make the others easier, and to write them in plain words, is the core skill of strategic planning. It can be practised on past plans before it is needed on this one.

                ## Milestones
                1. One recognised text on strategy diagnosis read and summarised in a page.
                2. Last year's plan rewritten as a diagnosis, policy and actions.
                3. A practice diagnosis written for a well-known public company.
                4. Feedback on the practice diagnosis from a peer or mentor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two practice diagnoses of under one page each, with written feedback from a peer, completed before the diagnosis session."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one well-regarded book or article on strategy diagnosis"
                - "Rewrite last year's plan as diagnosis, guiding policy and actions"
                - "Write a practice diagnosis for a public company you know well"
                - "Ask a peer to say which challenge they would have chosen"
            - name: Telling strategy apart from goals and budgets
              description: |-
                ## Purpose
                Many annual plans are a revenue target, a budget and a list of projects, with no choice in them about where to compete or what to stop. Learning the difference between an ambition, a strategy and a financial plan lets you spot a hollow plan in a draft and ask the question that fixes it. The test is simple: could a sensible competitor choose the opposite?

                ## Milestones
                1. Plain definitions of vision, strategy, priorities, objectives and budget written in your own words.
                2. Three past plans sorted into which parts were choices and which were wishes.
                3. A short checklist of questions to ask of any draft plan.
                4. The checklist used on at least one unit plan this cycle.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page draft plan checklist, tested on at least one real unit plan with the gaps it found recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-line definition of each planning term you use"
                - "Highlight the real choices in three past plans"
                - "Draft five questions that expose a plan with no choices"
                - "Use the questions on one unit plan and note what they found"
            - name: Generating real strategic options for the year
              description: |-
                ## Purpose
                Planning conversations often jump from the diagnosis to the first idea anyone mentions. Learning to lay out three or four genuinely different options for each critical challenge, and to describe what would have to be true for each to work, makes the final choice a choice. It also brings dissenting views into the open early.

                ## Milestones
                1. One options method studied, such as where to play and how to win or a what would have to be true test.
                2. Three distinct options drafted for one critical challenge.
                3. The conditions each option needs written down.
                4. The method tried with a small group and refined.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three written options with conditions for success for at least one critical challenge, tested with a group before the options workshop."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick one options method and read a worked example"
                - "Draft three truly different responses to one challenge"
                - "Write what would have to be true for each to succeed"
                - "Test the exercise with three colleagues for an hour"
            - name: Setting stretch and commit targets
              description: |-
                ## Purpose
                Targets set as a percentage above last year ignore run rate, seasonality and the plan's own initiatives, and they quickly lose credibility. Learning to build a target from a baseline plus the expected effect of each priority, and to separate the number you commit to from the number you stretch for, makes targets that people believe. It also makes the year-end conversation fairer.

                ## Milestones
                1. The difference between baseline, commit and stretch written down with an example.
                2. One unit's target rebuilt from run rate plus initiatives.
                3. A rule agreed on how commit and stretch will be used in reviews.
                4. The method shared with unit heads before drafting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked target build for one unit showing baseline, initiative effects, commit and stretch, shared with unit heads."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask finance for one unit's monthly run rate for the last two years"
                - "Estimate the effect of each planned initiative separately"
                - "Write the commit and stretch numbers with the gap explained"
                - "Share the worked example with unit heads"
            - name: Driver-based planning for non-finance leaders
              description: |-
                ## Purpose
                Revenue and cost lines make sense only when leaders know what drives them: customers, price, conversion, utilisation, cost per unit. Learning to build a simple driver tree for your unit lets you argue about the drivers, which you control, rather than the totals, which you do not. It also makes plan changes much faster mid-year.

                ## Milestones
                1. A driver tree for your unit's revenue or cost with no more than ten drivers.
                2. Current values for each driver taken from real data.
                3. The plan's numbers expressed as changes in drivers.
                4. The tree checked with finance for consistency with the budget.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A driver tree for one unit with current values and planned changes, checked by finance against the budget."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Sketch the main drivers of your unit's revenue or cost"
                - "Find current values for each driver"
                - "Express next year's plan as driver changes"
                - "Walk finance through the tree and fix inconsistencies"
            - name: Facilitating planning workshops that end in choices
              description: |-
                ## Purpose
                Workshops that produce three flip charts of ideas and no decisions are the most common waste of a planning cycle. Practising the facilitation skills that move a group from divergent ideas to a ranked choice, such as clear decision rules, structured voting and naming the disagreement, makes every later session more useful. A neutral facilitator from outside the team helps for the hardest ones.

                ## Milestones
                1. A facilitation approach chosen with a clear decision rule for each session.
                2. One practice workshop run with a small team.
                3. Feedback gathered from participants on what moved the group forward.
                4. A standard workshop plan written for the options and choices sessions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice workshop run and reviewed, and a written plan for the choices workshop with its decision rule stated."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose a decision rule for each planning session in advance"
                - "Run a ninety-minute practice workshop with one team"
                - "Ask participants what helped and what stalled the group"
                - "Write the agenda and decision rule for the choices workshop"
            - name: Capacity-based resourcing of annual priorities
              description: |-
                ## Purpose
                Money is easy to move on a spreadsheet, but the scarce resource is usually a handful of skilled people already working on everything. Learning to resource priorities by named capacity, counting what share of key teams each priority needs, exposes overloaded teams before the year starts. It is the step that most often separates plans that deliver from plans that drift.

                ## Milestones
                1. The ten to twenty scarce roles or teams the plan depends on identified.
                2. Each priority's demand on those roles estimated in months or percentage of time.
                3. Overloads shown in one table.
                4. Priorities resequenced or rescoped until demand fits capacity.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A capacity table showing demand on scarce teams by priority, with no team above full capacity in the approved plan."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the scarce teams or roles the priorities depend on"
                - "Ask each priority owner to estimate demand on those teams"
                - "Build a table of demand against available capacity"
                - "Propose resequencing where any team is overloaded"
            - name: Pre-mortem of the draft annual plan
              description: |-
                ## Purpose
                Imagining it is the end of the plan year and the plan has failed, then asking why, surfaces risks that polite planning meetings never mention. A ninety-minute pre-mortem with the executive team on the near-final draft gives permission to name weak assumptions, missing owners and political problems. The best findings change the plan before it is approved.

                ## Milestones
                1. A pre-mortem session held on the near-final draft plan.
                2. Failure causes listed, grouped and ranked by likelihood and impact.
                3. Changes to the plan agreed for the top three causes.
                4. The findings recorded in the decision log.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pre-mortem held before final approval, with changes made to the plan for the top three failure causes and recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book ninety minutes with the executive team before final approval"
                - "Ask everyone to write privately why the plan failed"
                - "Group and rank the causes together"
                - "Agree changes for the top three and record them"
            - name: Top-down, bottom-up or hybrid planning approach
              description: |-
                ## Purpose
                Some organisations set targets at the top and push them down; others add up unit plans and accept the total; most end up in an awkward mix without deciding. Choosing the approach deliberately, and saying where the top sets direction and where units propose, prevents the late-cycle collision between ambition and unit plans. The right answer depends on size, maturity and how volatile the market is.

                ## Milestones
                1. Last year's approach described honestly, including where it collided.
                2. Two or three approaches compared on speed, buy-in and realism.
                3. An approach chosen and the hand-off points defined.
                4. The choice explained to unit heads at kickoff.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the planning approach with defined points where top-down guidance meets bottom-up proposals."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Describe where last year's targets and unit plans clashed"
                - "Compare top-down, bottom-up and hybrid on one page"
                - "Agree the approach with the sponsor and finance lead"
                - "Add the chosen hand-off points to the planning calendar"
            - name: Plan year timing and horizon decision
              description: |-
                ## Purpose
                The yearly plan sits between a long-range plan and a monthly forecast, and the overlap is often unclear. Deciding when in the fiscal year planning starts, how far out the annual plan looks, whether it carries a second indicative year and how it links to the rolling forecast saves arguments every cycle. A plan approved after the year has begun has already lost a quarter.

                ## Milestones
                1. The fiscal year, board calendar and budget deadlines mapped together.
                2. A decision on whether the plan carries an indicative second year.
                3. The link between the annual plan and any rolling forecast written down.
                4. The timing rule added to the runbook.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written timing rule that fixes the cycle start, the plan horizon and its link to the forecast, added to the runbook."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Map the fiscal year against board and budget deadlines"
                - "Decide whether the plan includes an indicative second year"
                - "Agree with finance how the plan and forecast relate"
                - "Write the timing rule into the runbook"
            - name: Shortening the planning cycle to ten weeks
              description: |-
                ## Purpose
                Cycles that run for five or six months consume senior attention through a third of the year and are out of date when approved. Cutting the cycle to around ten weeks, by fixing assumptions early, limiting templates, and running unit drafting in parallel, frees time for running the business. The cut needs agreement on what is left out, not just faster meetings.

                ## Milestones
                1. Last cycle's actual duration measured stage by stage.
                2. The three stages with the most waiting time identified.
                3. A ten-week calendar drafted with parallel stages.
                4. Steps that will be dropped or simplified agreed with the sponsor.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ten-week planning calendar approved by the sponsor, with the dropped or simplified steps listed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Measure how long each stage actually took last cycle"
                - "Find the three stages where work waited longest"
                - "Draft a ten-week calendar with drafting in parallel"
                - "Agree with the sponsor what will be dropped"
            - name: Planning tool or spreadsheet choice
              description: |-
                ## Purpose
                Spreadsheets emailed between thirty unit heads are fragile, but a planning software project can cost more than the problem. Comparing staying on improved spreadsheets, using the finance system's planning module and buying a dedicated tool, against the same criteria, gives a decision you can defend. The usual winner for mid-sized organisations is simpler than expected.

                ## Milestones
                1. The current pain points listed with how much time each costs.
                2. Three options compared on cost, effort to run and fit with finance systems.
                3. References taken from at least one similar organisation per tool shortlisted.
                4. A decision recorded with a budget and a timeline.

                ## Notes
                Start from the **Purchase decision** template. Do not change tools in the middle of a cycle.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between spreadsheets, a finance module and a dedicated tool, scored against the same criteria."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the problems last cycle's spreadsheets caused"
                - "Write five criteria the choice will be scored on"
                - "Shortlist and score three options"
                - "Call one reference organisation for each shortlisted tool"
            - name: Annual stop-doing list
              description: |-
                ## Purpose
                Every year's plan adds priorities, and almost none remove anything, so the organisation ends up carrying twenty initiatives with the people for eight. An explicit list of activities, projects and reports that will stop, each with an owner and a date, is the only honest way to make room. It is also the test of whether the executive team really means the new priorities.

                ## Milestones
                1. Each unit asked for two things it would stop to fund its priorities.
                2. A combined list reviewed at an executive meeting.
                3. At least five items agreed to stop, each with owner and date.
                4. The stop list published alongside the plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published list of at least five activities that will stop, each with an owner and end date, approved with the plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each unit head for two things they would stop"
                - "Combine the answers and estimate the time each frees"
                - "Agree the stop list at an executive meeting"
                - "Ask for a fresh stop-doing list in each new cycle @recurring(yearly)"
            - name: Zero-based challenge of the run budget
              description: |-
                ## Purpose
                Last year's budget plus inflation quietly funds everything that already exists, leaving little for the priorities. Challenging the largest run-cost lines from zero, asking what each buys and what would happen if it halved, finds money that can move to the plan. A full zero-based budget is heavy; the top fifteen lines usually hold most of the value.

                ## Milestones
                1. The fifteen largest run-cost lines listed with owners.
                2. Each owner's case for the line written in a paragraph.
                3. Savings options identified for at least five lines.
                4. Freed money moved to named priorities in the budget.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A challenge of the fifteen largest run-cost lines with savings agreed on at least five and the money reallocated to priorities."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask finance for the fifteen largest run-cost lines"
                - "Ask each owner what the line buys and what halving it would do"
                - "Shortlist savings options with finance"
                - "Reallocate agreed savings to named priorities"
            - name: Three to five annual company priorities
              description: |-
                ## Purpose
                An annual plan with twelve priorities has none, because every team can find its own work somewhere on the list. Narrowing to three to five priorities that answer the diagnosis, each with an executive owner, a measure and a short reason, gives the whole organisation something to remember and rank against. The ones left out should be named and parked.

                ## Milestones
                1. A long list of candidate priorities drawn from the options work.
                2. Each candidate tested against the diagnosis and the financial envelope.
                3. Three to five priorities chosen, each with an owner and a measure.
                4. The candidates not chosen recorded with the reason.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "No more than five approved company priorities, each with an executive owner and a measure, with rejected candidates recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every candidate priority from the options work"
                - "Score each against the diagnosis and the envelope"
                - "Agree the final three to five with the executive team"
                - "Record the rejected candidates in the decision log"
            - name: Budget challenge sessions with unit leaders
              description: |-
                ## Purpose
                Budget challenge sessions are where the plan meets reality: each unit head presents their plan and budget, and the chief executive and finance test whether the two match. Run well, with the same questions for every unit and decisions on the day, they are fair and fast. Run badly, they become negotiations won by whoever argues longest.

                ## Milestones
                1. A standard set of five challenge questions sent to unit heads in advance.
                2. A sixty-minute session held with every unit.
                3. Decisions from each session recorded on the day.
                4. Final unit budgets submitted within a week of their session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A challenge session held with every unit using the same questions, with decisions recorded the same day."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the five questions every unit will be asked"
                - "Schedule a sixty-minute session with each unit head"
                - "Record each session's decisions before the day ends"
                - "Chase final budgets a week after each session"
            - name: Planning kickoff for the leadership group
              description: |-
                ## Purpose
                The kickoff sets the tone for the whole cycle: what last year taught, what is fixed, the calendar, the templates and what a good unit plan looks like. Leaders who leave a ninety-minute kickoff knowing exactly what is asked of them produce better first drafts. Skip it and the planning team spends a month answering the same questions by email.

                ## Milestones
                1. The kickoff pack ready: lessons, ground rules, calendar, envelope and templates.
                2. A ninety-minute session held with all unit heads.
                3. Questions captured and answered in writing within three days.
                4. Every unit head confirmed their submission date.
              priority: medium
              deadlineOffsetDays: 28
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kickoff held with every unit head present or briefed, followed by a written answers note within three days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Assemble the kickoff pack from the foundations work"
                - "Book ninety minutes with every unit head"
                - "Send written answers to the questions raised"
                - "Hold the planning kickoff at the start of each cycle @recurring(yearly)"
            - name: Options and choices workshop
              description: |-
                ## Purpose
                One working day with the executive team, after the diagnosis and before unit plans are finalised, is where the real strategic choices of the year get made. With options prepared in advance and a clear decision rule, the day ends with priorities chosen, trade-offs named and owners agreed. Without that preparation it turns into another round of updates.

                ## Milestones
                1. Options papers for each critical challenge circulated a week before.
                2. A facilitated workshop held with the full executive team.
                3. Priorities, trade-offs and owners agreed and written up on the day.
                4. The write-up sent to attendees within two days.
              priority: medium
              deadlineOffsetDays: 70
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A workshop held with a written record of the choices, trade-offs and owners sent to attendees within two days."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Commission a two-page options paper for each critical challenge"
                - "Book a full day and a facilitator"
                - "Set the decision rule for the day in the agenda"
                - "Send the write-up of choices within two days"
            - name: Board approval of the annual plan and budget
              description: |-
                ## Purpose
                Directors approve the plan and budget once a year and they need to see the choices, the risks and the link to the long-range plan, not two hundred slides. A board paper built around the diagnosis, the priorities, the financials and the main risks, sent in time for proper reading, makes approval smooth and the challenge useful. Changes the board asks for should be tracked to closure.

                ## Milestones
                1. A board paper of under fifteen pages plus appendices, ready by the pack deadline.
                2. Key directors briefed one to one on anything contentious.
                3. The plan and budget approved, with any conditions minuted.
                4. Board-requested changes made and confirmed back to the chair.

                ## Notes
                Start from the **Board meeting** template. Ask the company secretary early about the pack deadline and format.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Board minutes recording approval of the annual plan and budget, with any conditions closed out and confirmed to the chair."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Confirm the board pack deadline and format with the company secretary"
                - "Draft the board paper around diagnosis, priorities, numbers and risks"
                - "Brief the chair and any director likely to challenge"
                - "Close each change the board requests and report back"
            - name: Annual plan launch to all staff
              description: |-
                ## Purpose
                Staff judge the plan by how they hear about it. A launch that explains why the priorities were chosen, what will stop and what it means for each team, followed by managers briefing their own people within a fortnight, turns a document into direction. A plan that only lives in a board pack changes nothing.

                ## Milestones
                1. A short launch narrative and a manager briefing kit prepared.
                2. The launch delivered by the chief executive to all staff.
                3. Every manager briefed their team within two weeks.
                4. A quick pulse taken on whether staff can name the priorities.
              priority: medium
              deadlineOffsetDays: 130
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An all-staff launch delivered and every team briefed within two weeks, with a pulse showing what share of staff can name the priorities."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the agent to draft a launch narrative from the approved plan"
                - "Build a one-page briefing kit for managers"
                - "Schedule the launch and team briefings in the same fortnight"
                - "Send a two-question pulse a month after launch"
            - name: Final plan document and one-page summary
              description: |-
                ## Purpose
                If the approved plan exists only as a board deck, a budget file and a stack of unit plans, nobody can find the version that matters. A single plan document, with a one-page summary of diagnosis, priorities, measures and owners on top, becomes the reference for the whole year. The page is what gets pinned to walls and pasted into team plans.

                ## Milestones
                1. One plan document assembled from the approved parts.
                2. A one-page summary of diagnosis, priorities, measures and owners.
                3. Both reviewed by the chief executive and finance lead for consistency.
                4. Both published in the planning folder and linked from the intranet.
              priority: medium
              deadlineOffsetDays: 125
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A published plan document with a one-page summary, checked by the chief executive and finance lead and linked for all staff."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Gather the approved diagnosis, priorities, budget and unit plans"
                - "Write the one-page summary first"
                - "Ask finance to check every number in the summary"
                - "Publish both documents and send the link to all managers"
            - name: Mid-year plan checkpoint
              description: |-
                ## Purpose
                Six months in, the world has moved and so has the organisation. A half-day checkpoint asks whether the diagnosis still holds, whether the priorities are still right and whether money and people need to move, without rewriting the plan. It also gives an early start on the inputs for next year's cycle.

                ## Milestones
                1. A short pack on priority progress, assumption changes and new issues.
                2. A half-day checkpoint held with the executive team.
                3. Any change to priorities or resources recorded in the decision log.
                4. Early notes for next year's diagnosis added to the parking lot.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A mid-year checkpoint held with decisions on priorities and resources recorded and notes added for the next cycle."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Gather priority progress and assumption changes in five pages"
                - "Hold the mid-year plan checkpoint with the executive team @recurring(yearly)"
                - "Record changes to priorities or resources"
                - "Add early notes for next year to the parking lot"
            - name: Functional plan as a department head
              description: |-
                ## Purpose
                Department heads are asked to produce a plan that fits company priorities, stays inside a budget range and still covers the day-to-day load of their function. Writing it from the company priorities downwards, then being explicit about what the department will not do, makes the budget conversation much easier. It is also the document your own team will plan from.

                ## Milestones
                1. The company priorities translated into two to four departmental priorities.
                2. Run work and improvement work separated with their costs.
                3. A one-page plan and budget submitted on time.
                4. Progress against the departmental priorities checked each month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page departmental plan linked to company priorities and submitted by the deadline, then reviewed monthly against progress."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write which company priorities your department most affects"
                - "Separate run work from improvement work and cost each"
                - "Draft the one-page plan using the unit template"
                - "Check progress against departmental priorities @recurring(monthly:6)"
            - name: Team annual plan built from the company plan
              description: |-
                ## Purpose
                Teams that receive the company plan as a slide deck often carry on with their own list of work. Spending two short sessions as a team translating the company and department priorities into what you will deliver, stop and measure this year makes the plan real at the level where work happens. Everyone on the team should be able to say how their work connects.

                ## Milestones
                1. The company and department plans read by the whole team.
                2. Two to three team priorities agreed, each linked to a higher priority.
                3. One thing the team will stop doing agreed.
                4. A quarterly team check on the plan held.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A team plan with two or three priorities linked to company priorities, one agreed stop, and a quarterly check held."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Share the company plan summary with the team before meeting"
                - "Run a ninety-minute session to agree team priorities"
                - "Agree one thing the team will stop"
                - "Hold a thirty-minute team plan check @recurring(quarterly)"
            - name: Consolidating divisional plans in a group
              description: |-
                ## Purpose
                Group planning teams receive divisional plans in different currencies, formats and degrees of optimism, and must turn them into one plan the board can approve. A consolidation method with common definitions, an intercompany check and a clear view of where group adjusts divisional numbers makes the total believable. Divisions also accept group changes more easily when the rules were known in advance.

                ## Milestones
                1. Common definitions for revenue, margin, headcount and capital issued to divisions.
                2. Divisional plans consolidated with intercompany items removed.
                3. Group adjustments listed with the reason for each.
                4. The consolidated plan reconciled to the top-down envelope.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A consolidated group plan reconciled to the envelope, with every group adjustment to a divisional plan listed and explained."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Issue a definitions sheet to every division"
                - "Consolidate the divisional submissions in one model"
                - "List every group adjustment and its reason"
                - "Reconcile the total to the top-down envelope"
            - name: Support function service plans
              description: |-
                ## Purpose
                Support functions such as finance, people, technology and legal rarely own a company priority directly but can block all of them. A service plan that lists what each business unit's priorities will need from the function, and what the function can realistically provide, turns hidden dependencies into agreed commitments. It also gives the function a fair basis for its own budget.

                ## Milestones
                1. Each unit's plan read for demands on the support function.
                2. Demands listed and sized against the function's capacity.
                3. Service commitments agreed with each unit head.
                4. Unmet demands escalated to the steering group.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A service plan for the function listing agreed commitments to each unit, with unmet demands escalated in writing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read each unit plan for what it needs from your function"
                - "Size those demands against your team's capacity"
                - "Agree service commitments with each unit head"
                - "Escalate demands you cannot meet to the steering group"
            - name: First cycle as a new head of strategy
              description: |-
                ## Purpose
                Your first planning cycle in a new organisation is judged on whether it arrives on time, not on how elegant it is. Learning how the last cycle really ran, who holds the numbers and where the politics sit, before changing anything, avoids a cycle that collapses at board time. Save the redesign for the year after.

                ## Milestones
                1. The previous planning lead, finance lead and three unit heads interviewed.
                2. Last cycle's documents and calendar collected.
                3. No more than two changes made to the process for this year.
                4. A list of bigger changes kept for after plan launch.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A first cycle delivered to the board deadline with no more than two process changes and a written list of changes for next year."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Book an hour with whoever ran the last cycle"
                - "Collect last year's calendar, templates and board paper"
                - "Choose the one or two changes worth making this year"
                - "Keep a list of larger fixes for after plan launch"
            - name: Mid-cycle plan reset after a shock
              description: |-
                ## Purpose
                Shocks such as a lost major customer, a sharp funding cut or a market collapse can land halfway through planning or soon after approval. A structured reset, which revisits the assumptions, keeps the priorities that still hold and rebuilds the financials quickly, is better than either pretending nothing changed or starting again. Leaders need a new version within weeks, not months.

                ## Milestones
                1. The assumptions the shock invalidates listed with their impact.
                2. Priorities sorted into keep, change and pause.
                3. A revised financial view agreed with finance.
                4. The reset explained to the board and to staff.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A revised plan with priorities marked keep, change or pause and new financials, communicated to the board and staff."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List which assumptions the shock has broken"
                - "Sort each priority into keep, change or pause"
                - "Rebuild the financial view with finance"
                - "Brief the board chair before telling staff"
            - name: Linking objectives and incentives to the plan
              description: |-
                ## Purpose
                Bonus schemes and personal objectives that reward last year's measures will beat this year's plan every time. Checking that executive and manager objectives reflect the new priorities, and that incentives do not reward the activities on the stop list, aligns what people are paid for with what the plan asks. The people team and remuneration committee own the scheme; the planning lead supplies the link.

                ## Milestones
                1. Executive objectives compared with the approved priorities.
                2. Incentive measures checked for conflicts with the plan or the stop list.
                3. Proposed changes sent to the people team and remuneration committee.
                4. Agreed objectives recorded for each executive.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of executive objectives and incentives against the priorities, with proposed changes sent to the people team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the people team for this year's executive objectives and measures"
                - "Compare each executive's objectives with the priorities they own"
                - "Flag incentive measures that reward stopped activity"
                - "Send proposed changes to the people team"
            - name: Risk-adjusted annual plan
              description: |-
                ## Purpose
                Every plan rests on a few things that could go badly wrong: a key hire, a large contract, a regulatory change, one supplier. Building the main risks into the plan itself, with owners, early warning signs and pre-agreed responses, means the plan has an answer ready instead of an emergency meeting. Directors increasingly expect to see this alongside the plan.

                ## Milestones
                1. Ten to fifteen plan risks listed with likelihood and impact.
                2. An owner and an early warning sign named for each.
                3. Pre-agreed responses for the top five risks.
                4. The register reviewed each quarter and changes reported.

                ## Notes
                Start from the **Risk register** template. Keep plan risks separate from the enterprise risk register but cross-reference them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A plan risk register with owners, warning signs and responses for the top five risks, reviewed every quarter."
                cadence: rolling
              tasks:
                - "List the ten risks most likely to derail the plan"
                - "Name an owner and early warning sign for each"
                - "Agree responses for the top five with their owners"
                - "Review the plan risk register with owners @recurring(quarterly)"
            - name: Planning cycle maturity review and redesign
              description: |-
                ## Purpose
                After two or three cycles, look at the process itself: how long it takes, how much senior time it eats, how often the plan changed in the year and whether staff could name the priorities. Comparing those facts with practices such as rolling quarterly planning or a lighter refresh in alternate years shows where a redesign would pay off. Change the process between cycles, never during one.

                ## Milestones
                1. Measures of duration, senior hours, plan changes and staff recall collected.
                2. Leaders surveyed on what the cycle costs and what it gives.
                3. Two or three redesign options compared, such as a rolling refresh.
                4. A redesign agreed and written into the runbook before the next kickoff.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A maturity review with four measured facts about the cycle and an agreed redesign written into the runbook before the next kickoff."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Collect duration, senior hours and plan change counts from the last cycle"
                - "Ask ten leaders what the cycle costs them and what it gives"
                - "Compare two or three redesign options on one page"
                - "Run the maturity review after each plan launch @recurring(yearly)"
---

# Annual Strategic Planning Cycle

This area is for the people who run or feed the yearly strategy process: the head of strategy or planning lead, the executive team, department heads writing functional plans and the teams who turn the company plan into their own. It starts with foundations (a back-scheduled calendar, clear roles, last year's plan against actuals, ground rules, an assumptions register and a diagnosis), then the machinery that runs the cycle and keeps strategy and budget tied together, the skills of diagnosis, options, targets and facilitation, the decisions about how you plan, the dated moments from kickoff to board approval and launch, situations for departments, teams, groups and support functions, and finally specialist work on incentives, risk and redesigning the cycle itself.

What repeats is a monthly steering group, monthly checks of the decision log, the parking lot, the budget tie-out and headcount on different days, a weekly tracker during planning season, quarterly assumption and risk refreshes, and the yearly round of review, diagnosis, kickoff, stop-doing and mid-year checkpoint. The Operational checklist, Meeting notes, Feedback themes, Purchase decision, Board meeting and Risk register templates pair with the runbook, the steering group, frontline input, tool choice, board approval and the risk-adjusted plan. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
