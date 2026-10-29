---
id: strategy-leadership.strategy-execution-reviews
name: Strategy Execution Reviews
description: "A register of every strategic initiative, status definitions people trust, a monthly review run by exception, quarterly reallocation of money and people, and the habits that catch stalled work early."
category: business
version: 1.0.0
tags: [strategy-leadership, strategy-execution-reviews, manager, enterprise, execution, initiative-portfolio, resource-reallocation, delivery-governance]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - risk-register
    - remediation-plan
    - purchase-decision
    - metrics-log
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Strategy Execution Reviews
          description: "Holding regular reviews of whether the strategy is being delivered, spotting stalled initiatives early and reallocating resources."
          projects:
            - name: Single register of strategic initiatives in flight
              description: |-
                ## Purpose
                Most leadership teams cannot say, within a week of asking, how many strategic initiatives are running, who owns each one and what they cost. A single register with one row per initiative is the base every execution review stands on, and building it usually turns up duplicates, zombie projects and work nobody formally approved.

                ## Milestones
                1. Every initiative above an agreed size threshold listed with sponsor, delivery lead, budget and start date.
                2. Duplicate and overlapping initiatives flagged and either merged or marked for a decision.
                3. Initiatives with no named sponsor listed separately for the first review.
                4. The register held in one shared location, with one person responsible for keeping it current.

                ## Notes
                Set a threshold, such as a minimum number of person months or a budget line above a figure you choose, so the register holds strategic work and not every improvement ticket.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register listing every initiative above the agreed threshold, each with sponsor, lead, budget and start date, is shared with the leadership team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the size threshold that makes an initiative strategic enough to register"
                - "Ask each executive for every initiative in their function above the threshold"
                - "Merge the returns into one register and flag duplicates and orphans"
                - "Name the register keeper and the shared location"
                - "Reconcile the register against finance project codes @recurring(quarterly)"
            - name: Tracing every initiative to a strategic objective
              description: |-
                ## Purpose
                Initiatives drift from the strategy that justified them, and new ones get approved because they sound sensible rather than because they serve a stated objective. Tracing each register entry to one objective shows which objectives have no real work behind them and which initiatives have no objective at all.

                ## Milestones
                1. Each initiative linked to exactly one primary strategic objective.
                2. Objectives with no initiative, or only token work, listed for the leadership team.
                3. Orphan initiatives listed with a proposed stop, merge or justify decision.
                4. The share of budget and people going to each objective shown on one page.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every registered initiative is mapped to one objective, and a one-page view shows budget by objective and the list of orphans."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the strategic objectives exactly as the approved strategy states them"
                - "Assign each register entry to one primary objective with its sponsor"
                - "Total the budget and people behind each objective"
                - "Send the orphan list to sponsors asking them to justify, merge or stop"
            - name: Terms of reference for the execution review
              description: |-
                ## Purpose
                Without written terms, an execution review slides into a status meeting where updates are read aloud and nothing is decided. Terms of reference set what the forum is for, who attends, what it may decide on budget and people, and what goes up to the board, so sponsors arrive expecting to be asked for decisions.

                ## Milestones
                1. A one-page charter stating purpose, membership, quorum and frequency.
                2. Decision powers written down, including the size of budget move the forum can approve.
                3. An escalation route to the chief executive or board described for decisions above that limit.
                4. The charter agreed by the chief executive and circulated to all sponsors.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off charter with membership, decision limits and escalation route has been circulated to every initiative sponsor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the purpose of the review in two sentences"
                - "Write the budget and headcount limits the forum may move without escalation"
                - "Agree membership and the quorum needed for a decision"
                - "Circulate the charter to sponsors with the date of the first review"
            - name: Status definitions that mean the same to everyone
              description: |-
                ## Purpose
                Green from one sponsor means on plan, from another it means not yet in trouble, and that difference hides slipping work until it is too late to fix. Written thresholds for red, amber and green on schedule, cost, scope and expected benefit make status comparable across the portfolio and much harder to bend.

                ## Milestones
                1. Thresholds for each colour written for schedule, cost, scope and benefit forecast.
                2. A rule for the overall status agreed, such as the worst dimension wins.
                3. Definitions tested on three live initiatives and adjusted where they gave odd results.
                4. Definitions printed on the status template so nobody has to look them up.

                ## Notes
                Many organisations add a fourth state, such as blue for complete or grey for paused, so stopped work does not keep showing as green.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written red, amber and green thresholds for four dimensions are agreed and printed on the status template."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the status rules each function uses today"
                - "Draft thresholds for schedule slip, cost variance, scope change and benefit forecast"
                - "Test the draft on three live initiatives with their leads"
                - "Publish the agreed definitions with the status template"
            - name: Milestone and benefit baseline for each initiative
              description: |-
                ## Purpose
                Reviews cannot show slippage if nobody wrote down what was promised. Locking a baseline of five to eight dated milestones, the budget and the expected benefit for each initiative gives every later review something to measure against, and makes re-planning a visible decision rather than a quiet edit.

                ## Milestones
                1. Every high-priority initiative has five to eight dated milestones that each prove progress.
                2. Approved budget and expected benefit, with its measure and timing, recorded against each.
                3. Baselines frozen with a date, and the original copies kept unchanged.
                4. A simple change rule agreed for when a baseline may be reset and who approves it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each high-priority initiative has a dated, frozen baseline of milestones, budget and benefit, with a written rule for approving changes."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask each delivery lead for five to eight dated milestones in a common format"
                - "Send back milestones that describe activity rather than a finished result"
                - "Record budget and expected benefit next to the milestones"
                - "Freeze the baseline and store the dated copy where it cannot be edited"
            - name: One-page initiative status return
              description: |-
                ## Purpose
                Long status packs get skimmed and short ones get gamed, so the format matters as much as the meeting. One page per initiative, with status against the agreed definitions, the next three milestones, the top risk and a clear ask of the review, keeps preparation under an hour and puts decisions at the top.

                ## Milestones
                1. A single-page format with status, milestones, spend, top risk and the decision needed.
                2. The format trialled by four delivery leads and cut where they found it slow.
                3. A short guide with one good and one poor example.
                4. All initiatives submitting in the new format for one full cycle.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every initiative submits a one-page return in the agreed format for a full review cycle."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sketch the one-page layout with the ask of the review in the top box"
                - "Trial it with four delivery leads and time how long each takes"
                - "Write the guide with a good and a poor example side by side"
                - "Retire the old status pack and announce the switch date"
            - name: Execution review calendar for the year
              description: |-
                ## Purpose
                Reviews land badly when they fall the day after the board pack goes out or a week before the month's numbers close. Setting a year of review dates against the board cycle, the month-end close and the planning calendar means decisions are made with current figures and reach the board in time.

                ## Milestones
                1. Twelve monthly and four quarterly review dates set for the year.
                2. Each date checked against month-end close, board pack deadlines and the planning cycle.
                3. Status cut-off and pre-read dates fixed relative to each review.
                4. Invitations in every member's calendar for the full year.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A year of review dates, cut-offs and pre-read deadlines is in members' calendars, with none clashing with close or board deadlines."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get the board, close and budget dates for the next twelve months"
                - "Place review dates five to eight working days after each close"
                - "Set the status cut-off and pre-read dates for each review"
                - "Roll the review calendar forward another year each autumn @recurring(yearly)"
            - name: Delivery capacity against commitments
              description: |-
                ## Purpose
                Strategies stall most often because the organisation has promised more initiatives than it has people to deliver, and the same twenty specialists are booked three times over. Comparing the people and money committed across the register with what is actually available shows where the overload sits before it surfaces as missed milestones.

                ## Milestones
                1. The scarce roles that limit delivery listed with their total allocation across initiatives.
                2. People allocated above 100 percent identified by name and function.
                3. Committed spend set against the approved budget, with any gap stated.
                4. An overcommitment summary taken to a review with options to resolve it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A capacity summary shows allocation for every scarce role and committed versus approved spend, and has been discussed at a review."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the ten to twenty roles that most limit delivery"
                - "Ask each delivery lead how much of those people's time their plan assumes"
                - "Total the assumptions and flag anyone above full allocation"
                - "Refresh the capacity view before each reallocation round @recurring(quarterly)"
            - name: Sponsor and delivery lead agreement per initiative
              description: |-
                ## Purpose
                Each initiative needs one executive who answers for the outcome and one person who runs the work, and confusion between the two sits behind many stalls. A short written agreement per initiative sets what the sponsor will do, how often they will meet the lead and what the lead can decide alone.

                ## Milestones
                1. One sponsor and one delivery lead named for every registered initiative.
                2. Sponsor duties written down: unblocking, funding calls and attendance at reviews.
                3. The lead's own decision limits on scope, spend and people recorded.
                4. Agreements signed by both and filed with the register.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every registered initiative has a short sponsor and lead agreement, signed by both, filed with the register."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find initiatives where sponsor and lead are the same person or unclear"
                - "Draft a half-page agreement with duties and decision limits"
                - "Hold a 30-minute conversation with each pair to fill it in"
                - "File the signed agreements alongside the register entries"
            - name: Monthly strategy execution review
              description: |-
                ## Purpose
                Once a month the leadership team needs ninety minutes on whether the strategy is being delivered, separate from the operating meeting where it always loses out to this week's fires. Run by exception, with green items taken as read, the review spends its time on red and amber initiatives and leaves with decisions written down.

                ## Milestones
                1. Reviews held every month for six consecutive months with a quorum present.
                2. Pre-reads issued three working days ahead every time.
                3. At least two thirds of agenda time spent on red and amber items and decisions.
                4. Every review closed with a written list of decisions and owners.

                ## Notes
                Start from the **Meeting notes** template. Keep the review apart from the weekly operating meeting, or strategy items will be pushed off the agenda.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews are held with pre-reads on time and a written decision list from each."
                cadence: rolling
              tasks:
                - "Issue the pre-read pack three working days before the review @recurring(monthly:3)"
                - "Chair the review by exception, starting with red initiatives @recurring(monthly:10)"
                - "Publish decisions and owners within 24 hours of each review"
                - "Ask the agent to draft a one-paragraph summary of each month's decisions"
            - name: Monthly status returns from initiative leads
              description: |-
                ## Purpose
                The review is only as good as the returns that feed it, and late or copied-forward updates are the first sign a process is dying. A fixed cut-off, a named chaser and a quick quality check turn status reporting into a dependable monthly habit for every delivery lead.

                ## Milestones
                1. A fixed cut-off day each month, known to all leads.
                2. Ninety percent of returns in by the cut-off for three months running.
                3. Returns copied forward unchanged spotted and sent back.
                4. A late-return list shared with the sponsors concerned each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months running, at least 90 percent of status returns arrive by the cut-off day and none are copied forward unchanged."
                cadence: rolling
              tasks:
                - "Remind leads of the status cut-off two days ahead @recurring(monthly:5)"
                - "Compare each return with last month's to catch copied-forward text"
                - "Send the late-return list to the sponsors concerned"
                - "Note any lead who has missed two cut-offs for a sponsor conversation"
            - name: Quarterly resource reallocation round
              description: |-
                ## Purpose
                Annual budgets lock money into initiatives for twelve months, even when some stall in month three and others are starving. A quarterly round in which sponsors offer to release or bid for money and people makes moving resources normal rather than a crisis measure, and gives the review real teeth.

                ## Milestones
                1. A standard form for releasing or requesting budget and named people.
                2. Release offers and requests collected two weeks before each quarterly review.
                3. Decisions made in the review, within the charter's limits, with reasons recorded.
                4. Finance and HR records updated to match the decisions within ten working days.

                ## Notes
                Ask for releases before requests. Sponsors who must offer something back each quarter tend to make more honest bids.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly rounds are completed in a year, each with recorded decisions and budget records updated within ten working days."
                cadence: cyclic
              tasks:
                - "Send sponsors the release and request form two weeks before the quarterly review @recurring(quarterly)"
                - "Rank requests against the strategic objectives they serve"
                - "Confirm finance and HR have actioned every agreed move @recurring(quarterly)"
                - "Report the total moved each quarter in the review pack"
            - name: Early warning list of stalling initiatives
              description: |-
                ## Purpose
                Initiatives rarely fail suddenly: they go quiet first, with missed meetings, unchanged milestones and a sponsor who stops turning up. Scanning the register each month against a few simple warning signs catches stalls months before the status turns red, while there is still time to act.

                ## Milestones
                1. Five or six warning signs written down, such as no milestone met in sixty days.
                2. A monthly scan of the register against those signs.
                3. Flagged initiatives discussed at the next review, even when their status is green.
                4. A record of how many flagged initiatives later turned red, to test the signs.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly warning scan is run against written signs, and every flagged initiative appears on the next review agenda."
                cadence: rolling
              tasks:
                - "Write the warning signs, including sponsor absence and unchanged milestones"
                - "Scan the register against the warning signs @recurring(monthly:8)"
                - "Add flagged initiatives to the review agenda with the sign that triggered them"
                - "Check once a year whether flagged items went on to turn red"
            - name: Review decision and action log
              description: |-
                ## Purpose
                Decisions made in a review and never followed up do more harm than no decision, because people learn the forum has no consequences. One log of every decision and action, with owner and due date, chased weekly and opened at the start of each review, closes that gap.

                ## Milestones
                1. A log holding decision, owner, due date and status for every review outcome.
                2. Overdue actions chased every week by the review secretary.
                3. Each review opening with the overdue list.
                4. Fewer than one in five actions overdue for three consecutive months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months, fewer than 20 percent of logged actions from execution reviews are overdue."
                cadence: rolling
              tasks:
                - "Set up the log with decision, owner, due date and status columns"
                - "Chase owners of review actions due this week @recurring(weekly:fri)"
                - "Put the overdue list as the first item on every review agenda"
                - "Close actions only when the owner shows evidence of completion"
            - name: Execution risk and issue register
              description: |-
                ## Purpose
                Each initiative tracks its own risks, but the ones that sink a strategy often span several: a shared supplier, a regulatory approval, one overloaded platform team. A portfolio register of the top execution risks, reviewed monthly, puts those cross-cutting threats in front of people with the authority to act.

                ## Milestones
                1. The top fifteen to twenty execution risks across initiatives, each with an owner and response.
                2. Risks affecting more than one initiative marked as portfolio risks.
                3. The register reviewed every month, with new and closed risks noted.
                4. The top five risks shown in the review pack each month.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A portfolio risk register with owners and responses is reviewed monthly, and its top five risks appear in every review pack."
                cadence: rolling
              tasks:
                - "Pull the top three risks from each initiative's latest return"
                - "Group risks that touch several initiatives into portfolio risks"
                - "Review owners and responses for the portfolio risks @recurring(monthly:18)"
                - "Retire risks that have passed and record why"
            - name: Benefits realisation tracking after delivery
              description: |-
                ## Purpose
                Many initiatives are declared complete when the system goes live or the new team is hired, and nobody checks whether the promised revenue, saving or customer gain ever arrived. Tracking benefits for up to two years after delivery shows which kinds of initiative actually pay back, which sharpens every future funding decision.

                ## Milestones
                1. Every completed initiative has a benefit owner who stays responsible after closure.
                2. Benefit measures checked each quarter against the baseline forecast.
                3. Shortfalls explained in a sentence and reported at the review.
                4. A yearly summary of forecast against realised benefit by initiative type.

                ## Notes
                Agree with finance how each benefit will be counted before delivery, or every saving will be argued about later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each closed initiative has a benefit owner, and realised against forecast benefit is reported every quarter for at least two years."
                cadence: rolling
              tasks:
                - "Name a benefit owner for each initiative due to close this year"
                - "Agree the counting method for each benefit with finance"
                - "Collect realised benefit figures from benefit owners @recurring(quarterly)"
                - "Summarise forecast against realised benefit for the year-end review"
            - name: Weekly execution pulse for the chief executive
              description: |-
                ## Purpose
                Between monthly reviews, a chief executive needs to know if something important has broken, without calling another meeting. A short Monday note covering the three most at-risk initiatives, any milestone missed last week and decisions waiting keeps the top of the organisation close to delivery for very little overhead.

                ## Milestones
                1. A fixed short format for the Monday note, readable in five minutes.
                2. The note sent every Monday by a named owner, usually the chief of staff.
                3. Chief executive follow-up questions logged and answered within the week.
                4. The format reviewed after one quarter and trimmed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A Monday execution note is issued for twelve consecutive weeks, and every chief executive follow-up is answered within the week."
                cadence: rolling
              tasks:
                - "Agree the three headings for the Monday note with the chief executive"
                - "Send the execution pulse note to the chief executive @recurring(weekly:mon)"
                - "Log follow-up questions and the answers given"
                - "Trim the format after twelve weeks based on what was actually read"
            - name: Spend against plan check with finance
              description: |-
                ## Purpose
                Initiative leads often report green on milestones while spending runs well ahead of or behind plan, and both tell you something. A monthly reconciliation with finance of actual spend against each initiative's budget catches overspend early and exposes money sitting unused that could be moved elsewhere.

                ## Milestones
                1. Each initiative mapped to finance cost codes so actuals can be pulled.
                2. Monthly actual against budget shown for every initiative.
                3. Variances above an agreed percentage explained by the lead in one line.
                4. Persistent underspends feeding the next quarterly reallocation round.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly actual against budget is shown for every initiative, with an explanation for every variance above the agreed threshold."
                cadence: rolling
              tasks:
                - "Agree cost codes for each initiative with the finance business partner"
                - "Pull actual spend against budget for every initiative @recurring(monthly:15)"
                - "Ask leads to explain variances above the threshold in one line"
                - "Carry persistent underspends forward to the reallocation round"
            - name: Annual execution retrospective before planning
              description: |-
                ## Purpose
                Planning cycles tend to repeat the same mistakes: too many initiatives, optimistic dates and benefits nobody tracked. A yearly retrospective of what was promised, delivered, stopped and moved, written before planning starts, gives the planners evidence instead of memory.

                ## Milestones
                1. A count of initiatives started, completed, stopped and still running for the year.
                2. Average milestone slip and benefit shortfall calculated.
                3. Three to five lessons written as rules for next year's plan.
                4. The retrospective presented to the planning team before targets are set.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written retrospective with delivery statistics and at most five lessons reaches the planning team before next year's targets are set."
                cadence: cyclic
              tasks:
                - "Schedule the retrospective six weeks before planning starts @recurring(yearly)"
                - "Pull the year's counts of started, completed and stopped initiatives"
                - "Calculate average milestone slip against the frozen baselines"
                - "Write the lessons as rules the next plan must follow"
            - name: Quarterly progress review by strategic objective
              description: |-
                ## Purpose
                Monthly reviews look at initiatives one by one, which can hide an entire objective drifting while each of its initiatives reports amber. Once a quarter, stepping up a level and reviewing each objective as a whole, with its initiatives, spend and evidence together, shows where the strategy itself is behind.

                ## Milestones
                1. A one-page view per strategic objective combining its initiatives, spend and evidence.
                2. Each objective given an overall judgement: on course, at risk or off course.
                3. Objectives off course for two quarters escalated with options.
                4. Quarterly judgements kept in one table to show the trend.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every quarter, each strategic objective has a recorded on course, at risk or off course judgement based on a one-page view."
                cadence: cyclic
              tasks:
                - "Build a one-page view for each objective from the register"
                - "Judge each objective on course, at risk or off course @recurring(quarterly)"
                - "Escalate objectives off course for two quarters with options"
                - "Keep the quarterly judgements in a single table"
            - name: Asking questions that reveal real initiative status
              description: |-
                ## Purpose
                Watermelon reporting, green outside and red inside, survives because reviewers ask whether things are on track and accept a yes. Learning a small set of probing questions, such as what would have to be true to hit the next milestone, changes what people bring to the review.

                ## Milestones
                1. A list of ten questions that test status claims, written in your own words.
                2. The questions used in at least three reviews.
                3. Two cases noted where a question surfaced a problem the return did not show.
                4. The questions shared with the other review members.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal list of ten probing questions has been used in three reviews, with two documented cases where it surfaced hidden problems."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write ten questions that test the evidence behind a green status"
                - "Use three of them on every red or amber item at the next review"
                - "Note what each question surfaced that the return did not show"
                - "Share the question list with the other review members"
            - name: Reading burn rate and earned value without a project office
              description: |-
                ## Purpose
                Executives do not need full earned value management, but they do need to see when an initiative has spent sixty percent of its budget and delivered thirty percent of its milestones. Learning the few simple ratios behind earned value lets you read a status return and find the right question in minutes.

                ## Milestones
                1. Planned value, earned value and actual cost explained in your own words.
                2. Cost and schedule performance ratios worked out for two live initiatives.
                3. A rule of thumb written for when a ratio should trigger a question.
                4. The two ratios added to the status return for large initiatives.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Cost and schedule ratios have been calculated for two live initiatives, and a written trigger rule has been added to the status return."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a short introduction to earned value from a project management body"
                - "Work the ratios by hand for two live initiatives"
                - "Write the threshold at which a ratio triggers a review question"
                - "Add the two ratios to the return for initiatives above a set budget"
            - name: Sunk cost and escalation of commitment in reviews
              description: |-
                ## Purpose
                Leaders keep funding failing initiatives because of what has already been spent, because the sponsor is senior or because stopping feels like admitting a mistake. Understanding how escalation of commitment works, and building small counters into the review, makes it easier to judge work on its future merits alone.

                ## Milestones
                1. The main research findings on escalation of commitment summarised on one page.
                2. Two past initiatives in your organisation reviewed for signs of escalation.
                3. One counter added to the review, such as asking whether you would start this today.
                4. The counter used on at least two stop or continue decisions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary exists, two past cases have been reviewed, and one anti-escalation question has been used in two stop or continue decisions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read one book chapter or paper on escalation of commitment"
                - "Pick two past initiatives that ran on too long and note the signs"
                - "Add the question, would we start this today, to the review agenda"
                - "Record the stop or continue decisions where the question was used"
            - name: Telling a strategy problem from an execution problem
              description: |-
                ## Purpose
                When results disappoint, leaders blame execution by default, yet sometimes the work was delivered well and the strategy was wrong, and sometimes the reverse. A simple diagnosis that separates assumptions that failed from work that was not done stops the organisation fixing the wrong thing.

                ## Milestones
                1. The key assumptions behind each strategic objective listed.
                2. One disappointing objective diagnosed as assumptions wrong, work not done, or both.
                3. The diagnosis method written as a short checklist.
                4. The checklist used once in a quarterly review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short diagnosis checklist exists and has been applied to at least one under-performing objective in a quarterly review."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the key assumptions behind each strategic objective"
                - "Pick one objective that is behind and test which assumptions held"
                - "Write the diagnosis steps as a short checklist"
                - "Run the checklist on one objective at the next quarterly review"
            - name: Writing milestones that prove progress
              description: |-
                ## Purpose
                Milestones such as requirements gathering started or vendor engaged can be ticked off for a year while nothing changes for customers. Learning to write milestones as observable finished results, with the evidence named, is the single biggest improvement most review processes can make.

                ## Milestones
                1. The difference between activity and result milestones explained with five examples.
                2. Milestones for two initiatives rewritten with their delivery leads.
                3. Each rewritten milestone naming the evidence that will show it is met.
                4. A short milestone writing guide added to the status return guide.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Milestones for two initiatives have been rewritten as evidenced results, and a short writing guide has been published to all leads."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Collect ten real milestones from current returns and sort them into activity or result"
                - "Rewrite two initiatives' milestones with their leads"
                - "Name the evidence for each rewritten milestone"
                - "Add a half-page milestone guide to the status return guide"
            - name: Pre-mortem on the largest initiative
              description: |-
                ## Purpose
                Imagining that an initiative has failed a year from now and asking why produces risks people would never raise in a normal planning meeting. Learning to run a pre-mortem, and holding one on the largest initiative, gives the review a list of specific failure modes to watch.

                ## Milestones
                1. The pre-mortem method understood and a 60-minute agenda written.
                2. One pre-mortem held with the delivery team and sponsor.
                3. The top failure modes turned into warning signs or portfolio risks.
                4. A decision on which future initiatives should get a pre-mortem.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pre-mortem has been held on the largest initiative and its top failure modes added to the risk register or warning signs."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read a short guide to the pre-mortem method"
                - "Book 60 minutes with the delivery team of the largest initiative"
                - "Run the session, collecting failure reasons silently before discussion"
                - "Add the top five failure modes to the risk register"
            - name: Chairing a review that ends in decisions
              description: |-
                ## Purpose
                Reviews drift into discussion when the chair lets each sponsor present rather than pressing for the decision needed. Practising a few chairing habits, such as stating the decision at the start of each item and closing with who does what by when, shortens reviews and lifts their value.

                ## Milestones
                1. A personal chairing checklist of no more than eight points.
                2. Each agenda item framed by the decision needed, not the initiative name.
                3. Two reviews chaired with a colleague observing and giving feedback.
                4. Review length and number of decisions compared before and after.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two reviews have been chaired using a written checklist, with observer feedback and a before and after count of decisions made."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a chairing checklist of no more than eight points"
                - "Reword the next agenda so each item names the decision needed"
                - "Ask a trusted colleague to observe and give feedback"
                - "Compare decisions made per hour before and after"
            - name: Stop, continue or reshape test for live initiatives
              description: |-
                ## Purpose
                Organisations are good at starting initiatives and poor at stopping them, so the portfolio grows until everything moves slowly. A short scored test applied each quarter to the weakest initiatives forces an explicit choice to continue, reshape or stop, and releases people for the work that matters most.

                ## Milestones
                1. Five scoring questions agreed, such as strategic fit, evidence of progress and remaining cost.
                2. The test applied to the three lowest-scoring initiatives each quarter.
                3. Each decision recorded with its reasons and explained to the team.
                4. At least one initiative stopped or reshaped in the first year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The scored test is applied to at least three initiatives every quarter, with decisions and reasons recorded."
                cadence: cyclic
              tasks:
                - "Agree five scoring questions with the leadership team"
                - "Score the three weakest initiatives before each quarterly review @recurring(quarterly)"
                - "Record the decision and reasons for each scored initiative"
                - "Tell the affected teams the outcome in person within a week"
            - name: Recovery plan for a red initiative
              description: |-
                ## Purpose
                Once an initiative has been red for two reviews, more status reports will not help: it needs a short, dated recovery plan or a stop decision. Building that plan with the delivery team, a fresh baseline and an explicit check date gives the review a clear way to judge whether recovery is real.

                ## Milestones
                1. Root causes of the slip identified with the delivery team.
                2. Options compared: rescope, add resource, extend or stop.
                3. A recovery plan with a new baseline and a check date approved by the review.
                4. Recovery judged at the check date and recorded as recovered, reshaped or stopped.

                ## Notes
                Start from the **Remediation plan** template. Set the check date no more than ninety days out, or the plan becomes another way of waiting.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A recovery plan with a new baseline and a check date has been approved, and the outcome at that date has been recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Hold a 90-minute root cause session with the delivery team"
                - "Lay out rescope, resource, extend and stop options with their costs"
                - "Take the chosen option and new baseline to the review for approval"
                - "Diarise the recovery check date and the decision it will force"
            - name: Limiting the number of initiatives in flight
              description: |-
                ## Purpose
                Running thirty initiatives at half speed delivers less than running twelve at full speed, because people switch between them and dependencies pile up. Setting a ceiling on initiatives in flight, matched to the capacity view, means every new start requires a finish or a stop.

                ## Milestones
                1. A ceiling on concurrent strategic initiatives agreed by the leadership team.
                2. A one-in, one-out rule written into the review charter.
                3. The live portfolio brought down to the ceiling within two quarters.
                4. A queue of approved but unstarted initiatives kept visible.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ceiling on concurrent initiatives is written into the charter and the live portfolio is at or below it within two quarters."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compare the current initiative count with the capacity view"
                - "Propose a ceiling and a one-in, one-out rule to the leadership team"
                - "Choose which initiatives to pause or stop to reach the ceiling"
                - "Publish the queue of approved initiatives waiting to start"
            - name: Strategic reserve for in-year reallocation
              description: |-
                ## Purpose
                Reallocation is hard when every unit of budget has already been promised to someone. Holding back a small reserve, often a few percent of the change budget, gives the review money to back initiatives that are working without first fighting to take it from others.

                ## Milestones
                1. A reserve size agreed with the finance director.
                2. Rules for drawing on the reserve written into the charter.
                3. Reserve balance and draws reported in each review pack.
                4. Unused reserve released on a set date near year end.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A reserve with written draw rules is agreed with finance, and its balance appears in every review pack."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Model two or three reserve sizes with the finance director"
                - "Write the draw rules covering who can bid, the evidence needed and the limits"
                - "Show the reserve balance and draws in the review pack @recurring(monthly:24)"
                - "Set the date for releasing any unused reserve"
            - name: Choosing portfolio software or a shared workbook
              description: |-
                ## Purpose
                Portfolio software promises live dashboards but often fails because nobody keeps it updated, while a well-kept shared workbook can serve forty initiatives perfectly well. Comparing two or three tools against your real needs, and the update burden on leads, gives a decision you will not regret in a year.

                ## Milestones
                1. Requirements written: number of initiatives, users, reports and links to finance.
                2. Two or three tools and a workbook option scored against them.
                3. Update effort for leads estimated for each option.
                4. A decision recorded with the reasons and a date to revisit it.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between portfolio software and a workbook, scored against written requirements, with a date to revisit it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the requirements on one page with the register keeper"
                - "Arrange demonstrations of two portfolio tools"
                - "Score each option, including the workbook, on update effort for leads"
                - "Record the decision and set a date to revisit it"
            - name: Cutting the reporting burden on delivery teams
              description: |-
                ## Purpose
                Delivery leads in large organisations can spend a day a month filling in status packs for different audiences, time taken straight from the work. Auditing every report requested of initiative teams and cutting the duplicates gives that time back and makes the remaining returns more honest.

                ## Milestones
                1. Every recurring report asked of initiative teams listed with its audience.
                2. Time spent on reporting estimated by a sample of leads.
                3. Duplicate or unread reports stopped, with the requesters' agreement.
                4. Time saved measured three months later.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Duplicate reports are stopped, and leads' reported time on status reporting is lower three months later."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask five delivery leads to list every report they produce each month"
                - "Estimate hours per report and who actually reads each one"
                - "Agree with requesters which reports to stop or merge"
                - "Survey the same leads three months later on time spent"
            - name: Moving key people between initiatives
              description: |-
                ## Purpose
                Money is easy to move in a spreadsheet; scarce people are not, and their line managers resist. Agreeing how the review can reassign named specialists between initiatives, with notice periods and the line manager's role spelt out, makes the most powerful reallocation lever actually usable.

                ## Milestones
                1. A list of roles the review may reassign between initiatives.
                2. A notice period and handover rule agreed with HR and line managers.
                3. At least one reassignment made through the process and reviewed.
                4. Feedback from the people moved recorded and the process adjusted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written people reallocation rule is agreed with HR, and at least one reassignment has been made and reviewed through it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree with HR which roles the review may reassign"
                - "Set a notice period and handover rule with line managers"
                - "Use the process for the next request for a scarce specialist"
                - "Ask the person moved how the change was handled"
            - name: First review under the new format
              description: |-
                ## Purpose
                The first review sets expectations for every one after it, so it deserves to be treated as an event rather than just another meeting. Preparing it carefully, with clean returns, a rehearsed chair and two real decisions on the agenda, shows sponsors the forum is going to decide things.

                ## Milestones
                1. All initiatives submitted in the new format by the cut-off.
                2. At least two genuine decisions placed on the agenda.
                3. The chair briefed and the running order rehearsed.
                4. Feedback from members gathered within a week.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first review is held on schedule with at least two decisions made and member feedback collected within a week."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick two real decisions to put in front of the first review"
                - "Check every return against the format a week before the meeting"
                - "Rehearse the running order with the chair"
                - "Send a three-question feedback note to members after the review"
            - name: Mid-year strategy delivery checkpoint
              description: |-
                ## Purpose
                Six months in, the plan has met reality, and it is the last point where moving money can still change the year's outcome. A half-day checkpoint looks at the whole portfolio, objective by objective, and decides what to accelerate, cut and defer for the second half.

                ## Milestones
                1. Progress against each strategic objective shown on one page.
                2. Initiatives sorted into accelerate, hold, reshape and stop.
                3. Second-half resource moves agreed and recorded.
                4. A short note to the organisation explaining the changes.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A mid-year checkpoint is held, with every initiative sorted and second-half resource moves recorded and communicated."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Book a half-day for the leadership team around month six"
                - "Prepare a one-page view of progress by strategic objective"
                - "Sort every initiative into accelerate, hold, reshape or stop"
                - "Write a short note to staff on what is changing and why"
            - name: Execution report to the board
              description: |-
                ## Purpose
                Boards hear plenty about financial results and far less about whether the strategy they approved is being delivered. A clear execution report covering objectives, the few initiatives that matter most, what was stopped and what was moved gives directors something to challenge and builds trust that the executive is honest about slippage.

                ## Milestones
                1. A two to four page execution report format agreed with the chair.
                2. The first report sent with the board pack on time.
                3. Stopped initiatives and reallocations reported openly.
                4. Board questions and requested changes to the format recorded.

                ## Notes
                Show what was stopped as well as what was delivered. Directors trust a report that admits slippage more than one where everything is green.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An execution report in an agreed format has gone to the board with its pack, and directors' questions are recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the report format and length with the board chair"
                - "Draft the first report, including initiatives stopped and money moved"
                - "Ask the agent to check the draft for claims that lack evidence"
                - "Record board questions and any changes they want to the format"
            - name: Closure review for a finished or stopped initiative
              description: |-
                ## Purpose
                Initiatives that end without a closure review leave loose budget, open contracts and lessons that vanish with the team. A short closure session confirms what was delivered against baseline, hands benefits to an owner, frees the people and money, and records two or three lessons.

                ## Milestones
                1. Delivery against the baseline milestones and budget recorded.
                2. Benefits handed to a named owner, with measures and dates.
                3. Remaining budget, contracts and people released.
                4. Two or three lessons added to the shared lessons log.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A closure note records delivery against baseline, the benefit owner, released resources and at least two lessons."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a 60-minute closure session with the sponsor and lead"
                - "Compare delivered milestones and spend with the frozen baseline"
                - "Confirm budget codes are closed and contracts ended"
                - "Add the lessons to the shared lessons log"
            - name: Independent review of the execution process
              description: |-
                ## Purpose
                An outside look at whether reviews really lead to decisions, whether status is reported honestly and whether reallocations happen as the charter says is worth inviting before the board asks for it. Preparing for an internal audit or peer review of the process, and acting on its findings, strengthens the forum's standing with sponsors and directors.

                ## Milestones
                1. Scope agreed with internal audit or an independent peer.
                2. An evidence pack ready: charter, logs, returns and reallocation records.
                3. Findings received and a response agreed with owners and dates.
                4. Findings closed or carried into next year's plan.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An independent review of the execution process has been completed, and every finding has an agreed response with an owner and date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask internal audit whether the execution process can join next year's audit plan"
                - "Gather the charter, decision log and reallocation records for the evidence pack"
                - "Agree responses to the findings with owners and dates"
                - "Report progress on closing findings at the quarterly review"
            - name: Re-planning the portfolio after a major shock
              description: |-
                ## Purpose
                A lost contract, a funding cut, a regulatory change or a sharp market fall can make the current portfolio wrong overnight. A structured re-planning session within a few weeks, testing each initiative against the new situation, avoids both freezing everything and carrying on as if nothing happened.

                ## Milestones
                1. The shock's effect on each strategic objective written in a sentence.
                2. Each initiative marked keep, change, pause or stop under the new conditions.
                3. Freed money and people redirected or held in reserve.
                4. The revised portfolio communicated to sponsors and teams.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Within six weeks of the shock, every initiative has a recorded keep, change, pause or stop decision and the revised portfolio is communicated."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write one sentence on how the shock changes each objective"
                - "Call a half-day session with the leadership team within three weeks"
                - "Mark every initiative keep, change, pause or stop"
                - "Brief sponsors on the revised portfolio before wider communication"
            - name: Taking over a stalled strategy as a new executive
              description: |-
                ## Purpose
                Executives often arrive to find a strategy approved a year ago, twenty initiatives in flight and little delivered. Spending the first two months building an honest picture of execution, before launching anything new, lets you decide what to keep on evidence rather than inheriting every commitment.

                ## Milestones
                1. Every inherited initiative listed with its real status, found by talking to the leads.
                2. Three to five root causes of the stall written down.
                3. A keep, reshape or stop proposal for each inherited initiative.
                4. The proposal agreed with your boss and peers.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Within ninety days, every inherited initiative has a keep, reshape or stop proposal agreed with your boss."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Meet each inherited initiative lead one to one within the first month"
                - "Write the real status of each initiative in your own words"
                - "List the root causes of the stall"
                - "Take your keep, reshape or stop proposal to your boss"
            - name: Execution reviews across a group of business units
              description: |-
                ## Purpose
                In a group, each business unit runs its own initiatives and reviews, and the group executive sees only what units choose to share. A light group-level review, using common definitions and a quarterly return on the group's strategic initiatives, gives the centre a true view without duplicating the units' own work.

                ## Milestones
                1. Group strategic initiatives distinguished from unit-only ones.
                2. Common status definitions adopted by every unit.
                3. A quarterly group return consolidated and reviewed by the group executive.
                4. Resource moves between units considered at least once a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All business units submit a quarterly return using common definitions, and the group executive reviews the consolidated view each quarter."
                cadence: rolling
              tasks:
                - "Agree with unit heads which initiatives count as group strategic"
                - "Ask every unit to adopt the common status definitions"
                - "Consolidate the business unit execution returns @recurring(quarterly)"
                - "Put cross-unit resource moves on the agenda once a year"
            - name: Execution reviews in a mid-sized company without a project office
              description: |-
                ## Purpose
                Firms of a few hundred people rarely have a portfolio office, so the review has to run on a chief of staff's or finance lead's spare hours. Keeping it to one register, one page per initiative and one meeting a month makes it sustainable on roughly a day a month of administration.

                ## Milestones
                1. One named owner for the process, with their time agreed with their manager.
                2. Register and returns kept in one shared workbook.
                3. Administration time measured and kept to about one day a month.
                4. The process running for a full quarter without a lapse.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The review process runs for a full quarter on about one day a month of administration, recorded by its owner."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree with the chief executive who owns the process and for how many hours"
                - "Set up the register and return in one shared workbook"
                - "Track administration hours spent each month for a quarter"
                - "Cut any step that takes time but has not changed a decision"
            - name: Execution reviews during a cost reduction programme
              description: |-
                ## Purpose
                When costs are being cut, strategic initiatives compete with savings targets for the same people and money, and reviews can quickly become budget fights. Running reviews with savings shown alongside strategic progress, and protecting a small set of critical initiatives by name, keeps the strategy alive through the cuts.

                ## Milestones
                1. A short list of protected initiatives agreed by the leadership team.
                2. Savings initiatives tracked in the same register and format.
                3. Each review showing strategic progress and savings together.
                4. The protected list revisited at each quarterly round.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A protected initiative list is agreed, and every review shows savings and strategic progress side by side for the length of the programme."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Propose three to five protected initiatives with reasons"
                - "Add savings initiatives to the register using the same return"
                - "Show savings and strategic progress on the same page of the pack"
                - "Revisit the protected list at each quarterly round"
            - name: Joint programme reviews with a partner organisation
              description: |-
                ## Purpose
                Strategic initiatives run with a partner, joint venture or major supplier fall between two governance systems and slip without either side noticing. A joint review with shared milestones, a shared action log and a clear escalation route on each side keeps partnered work as visible as internal work.

                ## Milestones
                1. Shared milestones and status definitions agreed with the partner.
                2. A joint review held at an agreed frequency with named attendees from both sides.
                3. A shared action log both organisations can see.
                4. An escalation route on each side written down.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Joint reviews are held at the agreed frequency with shared milestones, a shared action log and a written escalation route."
                cadence: rolling
              tasks:
                - "Agree shared milestones and status definitions with the partner lead"
                - "Set the frequency and attendees for the joint review"
                - "Set up an action log both organisations can see"
                - "Write each side's escalation route on one page"
            - name: Presenting a red initiative to the review as its lead
              description: |-
                ## Purpose
                For a manager leading an initiative, walking into a senior review with a red status can feel like a career risk, so many delay it until the problem is unfixable. Preparing a short, factual account with the cause, the options and the decision you need turns a red status into a credible request for help.

                ## Milestones
                1. The cause of the slip written in three sentences without blame.
                2. Two or three options with cost and timing for each.
                3. A clear ask of the review stated at the top of the return.
                4. The review's decision and your next steps written up the same day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A red status has been presented with cause, options and a single ask, and the review's decision was written up the same day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the cause of the slip in three plain sentences"
                - "Cost two or three recovery options with your team"
                - "Tell your sponsor before the review so they are not surprised"
                - "Write up the decision and next steps for your team the same day"
            - name: Setting up a strategy delivery office
              description: |-
                ## Purpose
                Once the portfolio passes thirty or forty initiatives, or a large transformation is under way, part-time administration stops being enough. A small delivery office of two to five people, with a remit to run the cadence, challenge status and support recovery, keeps the process honest without becoming a bureaucracy that takes ownership away from sponsors.

                ## Milestones
                1. A remit separating what the office does from what sponsors and leads still own.
                2. Size, roles and reporting line agreed, usually to the chief executive or chief operating officer.
                3. Staff recruited or seconded with delivery and finance experience.
                4. Success measures for the office itself set and reviewed after a year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A delivery office with a written remit, agreed reporting line and staff in post is running the review cadence, with its own success measures set."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write a one-page remit stating what the office will and will not do"
                - "Agree the reporting line and size with the chief executive"
                - "Second or recruit people with delivery and finance experience"
                - "Set three measures to judge the office after its first year"
            - name: Reference class forecasting for initiative dates and costs
              description: |-
                ## Purpose
                Plans assume the best case, and almost every portfolio shows the same pattern of late, over-budget initiatives. Using your own history of past initiatives to adjust new forecasts, known as the outside view, gives the review realistic dates and budget contingency before money is committed.

                ## Milestones
                1. Planned and actual duration and cost gathered for at least fifteen past initiatives.
                2. Typical overrun ranges calculated by initiative type.
                3. New initiative forecasts shown next to the adjusted reference class figure.
                4. A contingency policy set from the data.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Overrun ranges from at least fifteen past initiatives are calculated and shown beside every new initiative's forecast."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Gather planned and actual duration and cost for fifteen past initiatives"
                - "Group them by type and work out typical overruns"
                - "Show the adjusted forecast beside the plan for each new proposal"
                - "Propose a contingency rule based on the overrun data"
            - name: Portfolio milestone hit rate trend
              description: |-
                ## Purpose
                A single green or red describes one initiative; the trend in how often the whole portfolio hits its milestones tells you whether the organisation is getting better at execution. Tracking the share of baseline milestones met on time, month by month, gives the leadership team one honest measure of its own delivery capability.

                ## Milestones
                1. Milestone hit rate defined as met within an agreed tolerance of the baseline date.
                2. The monthly figure calculated from the register for twelve months.
                3. The trend shown in the review pack with a short comment.
                4. Two or three changes made in response to the trend and their effect noted.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The portfolio milestone hit rate is calculated and shown in the review pack every month for twelve months."
                cadence: rolling
              tasks:
                - "Define a milestone as met when it lands within an agreed number of days of baseline"
                - "Calculate the portfolio milestone hit rate @recurring(monthly:27)"
                - "Plot the trend in the review pack with a two-line comment"
                - "Ask the agent to compare this quarter's slipped milestones for common causes"
            - name: Linking execution reviews to a rolling forecast
              description: |-
                ## Purpose
                Reallocation decisions are far easier when the budget itself moves every quarter rather than once a year. Connecting the execution review to a rolling quarterly forecast, so approved moves flow straight into the financial outlook, turns reallocation from an exception into the normal way money is managed.

                ## Milestones
                1. Agreement with finance on how review decisions feed the rolling forecast.
                2. Initiative budgets held at a level the forecast can move each quarter.
                3. Two quarters of reallocation decisions reflected in the forecast within a fortnight.
                4. A review of what the change did to the speed of reallocation.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "For two consecutive quarters, reallocation decisions have appeared in the rolling forecast within two weeks of being made."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Meet the finance director to map how review decisions reach the forecast"
                - "Agree the level at which initiative budgets will be forecast"
                - "Check each reallocation shows up in the next forecast"
                - "Measure the time from decision to forecast update over two quarters"
---

# Strategy Execution Reviews

This area is for executives, chiefs of staff and portfolio leads who need to know, month by month, whether the strategy is actually being delivered, and to act when it is not. It starts with the foundations (a register of initiatives, a review charter, status definitions, baselines and a capacity view), then the review machinery, the skills that make reviews sharper, decisions such as stopping work and holding a reserve, dated events like the first review and the board report, situations from inheriting a stalled strategy to running reviews across a group, and finally specialist work such as a delivery office and reference class forecasting.

What repeats is a monthly cycle of status cut-off, warning scan, spend check, pre-read and review, with a Friday action chase and a Monday pulse note in between, quarterly reallocation rounds, objective reviews and stop tests, and a yearly retrospective before planning begins. The Meeting notes, Risk register, Remediation plan, Purchase decision and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
