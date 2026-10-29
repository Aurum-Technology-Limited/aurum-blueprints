---
id: strategy-leadership.executive-kpi-scorecard
name: Executive KPI Scorecard
description: "A short list of executive indicators tied to strategy, each with one owner, a written definition, a target and thresholds, issued on time and reviewed by exception every month."
category: business
version: 1.0.0
tags: [strategy-leadership, executive-kpi-scorecard, manager, enterprise, kpis, scorecard, performance-measurement, metrics]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - meeting-notes
    - risk-register
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Executive KPI Scorecard
          description: "Choosing the handful of indicators leaders watch to judge strategic progress, with owners, targets and a regular review."
          projects:
            - name: Scorecard purpose and audience statement
              description: |-
                ## Purpose
                Most executive scorecards drift because nobody wrote down which decisions they exist to inform or who must read them. A half-page statement naming the audience (the executive team, the board, or both), the decisions the scorecard feeds and how often it is read becomes the test every proposed metric has to pass.

                ## Milestones
                1. A list of the five to eight recurring decisions the scorecard should inform.
                2. The primary audience named, with the board treated as a separate reader if it also receives the scorecard.
                3. The review frequency and issue date agreed with the chief executive.
                4. A half-page purpose statement approved by the executive team and filed with the scorecard.

                ## Notes
                Keep the board version and the management version distinct from the start. Directors need fewer, slower indicators than the executive team.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A half-page scorecard purpose statement, naming audience, decisions and review frequency, approved at an executive team meeting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the decisions you wish the current reports helped you make"
                - "Ask the chief executive which three questions they want answered every month"
                - "Draft the half-page purpose statement with audience and frequency"
                - "Table the statement for approval at the next executive team meeting"
            - name: Inventory of metrics executives already receive
              description: |-
                ## Purpose
                Before adding anything, find out what the executive team is already sent: the finance pack, sales dashboards, operations reports and the board pack often carry two hundred numbers between them, with three versions of revenue. A single inventory shows the duplication, the gaps and which numbers anyone actually uses.

                ## Milestones
                1. Every recurring report sent to executives in the last quarter listed with sender, frequency and audience.
                2. Each metric in those reports logged once, with duplicates and conflicting definitions flagged.
                3. Each executive's answer recorded on which numbers they genuinely look at.
                4. A one-page summary of overlaps, conflicts and gaps shared with the scorecard sponsor.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An inventory of every metric in recurring executive reports, with duplicates and conflicting definitions flagged and a one-page summary shared with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect the last three months of recurring reports sent to the executive team"
                - "Ask the agent to merge the report contents into one deduplicated metric list"
                - "Interview each executive for 20 minutes on which numbers they really use"
                - "Write the one-page overlaps and gaps summary for the sponsor"
            - name: Mapping each strategic priority to an indicator
              description: |-
                ## Purpose
                A scorecard that is not anchored to the strategy turns into an operations report. Taking each priority in the current strategy and asking what would be measurably different in eighteen months if it worked produces candidate indicators that test the strategy itself, not just activity.

                ## Milestones
                1. Each strategic priority written as one sentence with the outcome it is meant to change.
                2. Two or three candidate indicators proposed for each priority.
                3. Priorities with no measurable outcome flagged back to the strategy owner.
                4. A one-page map from priority to candidate indicator reviewed by the executive team.

                ## Notes
                If a priority cannot be measured at all, that is usually a sign the priority is vague, not that measurement is impossible.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page map linking every current strategic priority to at least one candidate indicator, reviewed by the executive team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the current strategic priorities from the latest approved strategy document"
                - "Write what would be measurably different in 18 months for each priority"
                - "Propose two or three candidate indicators per priority"
                - "Send priorities without a measurable outcome back to their owners"
            - name: Shortlisting a dozen executive indicators
              description: |-
                ## Purpose
                Leaders can hold roughly eight to fifteen numbers in their heads at once; beyond that the scorecard becomes a reference document nobody reads. Scoring the candidate list against the same criteria (strategic link, controllability, data quality, frequency) and cutting hard gives the executive team a shortlist they can genuinely discuss each month.

                ## Milestones
                1. Every candidate indicator scored against the same four or five criteria.
                2. A shortlist of no more than fifteen indicators, balanced across financial, customer, operational and people outcomes.
                3. The rejected indicators listed with where they will live instead, such as a functional dashboard.
                4. The shortlist agreed by the executive team with any dissent recorded.

                ## Notes
                Most dropped metrics are still useful, just not at executive level. Saying where each one goes makes the cut far easier to agree.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "No more than fifteen indicators agreed by the executive team, each scored against the same criteria, with every rejected one assigned a home elsewhere."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree four or five scoring criteria with the scorecard sponsor"
                - "Score every candidate indicator against the criteria in one sheet"
                - "Check the shortlist covers financial, customer, operational and people outcomes"
                - "Run a 90-minute session for the executive team to agree the final cut"
            - name: One-page definition card for each indicator
              description: |-
                ## Purpose
                Arguments in review meetings are often really arguments about definitions: whether churn counts downgrades, whether revenue is booked or recognised. A definition card for each indicator, covering formula, data source, frequency, owner and known caveats, settles those arguments once and lets a new analyst rebuild the number without asking.

                ## Milestones
                1. A definition card format agreed with fields for formula, source system, frequency, owner, target and caveats.
                2. A completed card for every shortlisted indicator.
                3. Each card checked by the data owner and the finance team for consistency with statutory figures.
                4. All cards stored in one shared location linked from the scorecard.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A completed definition card for every scorecard indicator, signed off by its data owner and stored in one linked location."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the fields every definition card must contain"
                - "Ask the agent to draft first-pass cards from the inventory and report footnotes"
                - "Have each data owner correct and sign off their cards"
                - "Link the finished cards from the scorecard itself"
            - name: Naming a single owner for every indicator
              description: |-
                ## Purpose
                An indicator owned by the whole executive team is owned by nobody, and red numbers then sit unexplained for months. Naming one accountable executive per KPI, plus a named analyst who produces it, makes clear who writes the commentary, who proposes the recovery action and who answers in the review.

                ## Milestones
                1. One accountable executive named for each indicator, with no indicator shared.
                2. A named analyst or team responsible for producing each number.
                3. Each owner's acceptance confirmed in writing, including the monthly commentary deadline.
                4. The owner and producer listed on each definition card and on the scorecard.

                ## Notes
                Where an outcome genuinely depends on two functions, pick the one with the most influence and give the other a supporting role in the commentary.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every scorecard indicator has exactly one accountable executive and one named producer, each confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft an owner and a producer for each shortlisted indicator"
                - "Settle indicators with two plausible owners in a short call with the chief executive"
                - "Send each owner their indicators and monthly commentary deadline to confirm"
                - "Add owners and producers to every definition card"
            - name: Baseline history for each scorecard indicator
              description: |-
                ## Purpose
                Targets set without history are guesses, and a single month's value says nothing about trend or normal variation. Rebuilding eight to twelve quarters of history for every indicator, on the current definition, shows the starting point, the seasonality and how much the number moves on its own.

                ## Milestones
                1. Eight to twelve quarters of history rebuilt for each indicator on its current definition.
                2. Breaks in the series, such as system migrations or definition changes, marked and explained.
                3. Seasonal patterns and the normal range of variation noted for each indicator.
                4. The baseline values recorded in a metrics log alongside the definition cards.

                ## Notes
                Start from the **Metrics log** template. Where history cannot be rebuilt, say so on the scorecard rather than inventing a back series.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A metrics log holding at least eight quarters of history for each indicator, with every series break explained."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask each producer how far back their indicator can be rebuilt"
                - "Rebuild the quarterly history on the current definition"
                - "Mark series breaks and note the reason for each"
                - "Record the baselines and normal range in the metrics log"
            - name: Targets and tolerance bands for every indicator
              description: |-
                ## Purpose
                Red, amber and green only mean something when the thresholds are set in advance and written down. Agreeing a target for the year, a trajectory by quarter and the tolerance band that triggers amber or red stops colour being chosen after the fact to suit the story.

                ## Milestones
                1. An annual target for each indicator, tied to the approved plan or budget.
                2. A quarterly or monthly trajectory so progress can be judged before year end.
                3. Amber and red thresholds written for each indicator, with the rule for direction of travel.
                4. Targets and thresholds approved by the executive team and locked for the year.

                ## Notes
                Set tolerance bands wider than normal month-to-month variation, or the scorecard will flash amber on noise.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every indicator has an approved annual target, a period trajectory and written amber and red thresholds, locked for the year."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull the plan or budget figures that each target must reconcile to"
                - "Draft a target and quarterly trajectory for each indicator with its owner"
                - "Set amber and red thresholds wider than the normal monthly variation"
                - "Get the full set approved and record the lock date"
            - name: Choosing a scorecard tool or staying in a spreadsheet
              description: |-
                ## Purpose
                Business intelligence suites, dedicated performance management software and a well-built spreadsheet can all carry an executive scorecard, and the expensive option often fails on adoption. Comparing two or three options against data connections, commentary fields, access control and total cost keeps the choice honest.

                ## Milestones
                1. Requirements written, including data sources, commentary, permissions and board access.
                2. Two or three options shortlisted, including the existing spreadsheet or BI tool.
                3. Each option scored with an indicative three-year cost.
                4. A decision recorded, with the owner of the tool and the date it goes live.

                ## Notes
                Start from the **Purchase decision** template. Many organisations should run the first year in tools they already have and buy only once the scorecard has stabilised.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tool decision with a three-year cost and a named owner, chosen from at least two scored options."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the must-have features, including a commentary field per indicator"
                - "Ask the data team what the current BI platform can already do"
                - "Score two or three options against the requirements and cost"
                - "Record the decision and name the tool owner"
            - name: Monthly scorecard production calendar
              description: |-
                ## Purpose
                Scorecards lose credibility when they arrive late or change between drafts. A fixed production calendar, with a data cut-off, a build day, a commentary deadline and an issue date, means the executive team receives the same trusted pack on the same working day every month.

                ## Milestones
                1. A production calendar with cut-off, build, commentary and issue days aligned to the finance close.
                2. A named producer and a back-up for the scorecard build.
                3. Three consecutive months issued on the agreed date.
                4. A short run sheet that lets the back-up build the scorecard without help.

                ## Notes
                Align the cut-off with the month-end close. Issuing before finance has closed guarantees restatements.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The scorecard has been issued on its agreed working day for three consecutive months, built from the documented run sheet."
                cadence: rolling
              tasks:
                - "Agree the cut-off and issue days against the finance close calendar"
                - "Write the run sheet for building the scorecard"
                - "Lock the data cut-off and request the monthly build @recurring(monthly:3)"
                - "Issue the scorecard to the executive team @recurring(monthly:6)"
            - name: Monthly executive scorecard review
              description: |-
                ## Purpose
                Reading the scorecard is not the same as reviewing it. A 45-minute monthly slot, run by exception (only reds, ambers and surprising greens), with each owner presenting cause and next step, keeps the discussion on the few indicators that need a decision.

                ## Milestones
                1. A standing 45-minute slot in the executive calendar dedicated to the scorecard.
                2. A by-exception agenda covering only red, amber and unexpectedly green indicators.
                3. Each discussion ending with a recorded decision or action and an owner.
                4. Notes from each review circulated within two working days.

                ## Notes
                Start from the **Meeting notes** template. If more than a third of indicators are red every month, the problem is the targets or the strategy, not the review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly reviews held by exception, each with recorded decisions and notes circulated within two working days."
                cadence: rolling
              tasks:
                - "Book a standing 45-minute monthly scorecard slot with the executive team"
                - "Draft the by-exception agenda format"
                - "Hold the monthly scorecard review @recurring(monthly:10)"
                - "Circulate decisions and actions within two working days of each review"
            - name: Owner commentary for red and amber indicators
              description: |-
                ## Purpose
                Numbers without commentary invite speculation, and commentary that just restates the number wastes everyone's time. A three-line standard for every red or amber indicator (what happened, why, and what you will do by when) makes the review faster and puts accountability in writing.

                ## Milestones
                1. A three-line commentary standard written with a good and a poor example.
                2. Every red and amber indicator carrying owner commentary on issue day.
                3. Commentary that names a cause and a dated action, not just a description.
                4. A quarterly check of commentary quality fed back to owners.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months, every red or amber indicator carries commentary naming a cause and a dated action by issue day."
                cadence: rolling
              tasks:
                - "Write the three-line commentary standard with one good and one poor example"
                - "Brief each owner on the standard in a 15-minute call"
                - "Write commentary for every red or amber indicator you own @recurring(monthly:5)"
                - "Ask the agent to flag commentary that names no cause or no date"
            - name: Weekly leading indicator flash
              description: |-
                ## Purpose
                Monthly scorecards tell leaders what happened four to six weeks ago. A short Monday note on the two or three leading indicators that move fastest, such as pipeline created, order intake or service backlog, gives early warning without adding another meeting.

                ## Milestones
                1. Two or three leading indicators chosen that update weekly and move ahead of the monthly results.
                2. A five-line flash format agreed with the executive team.
                3. The flash sent every Monday morning for a full quarter.
                4. A review after one quarter of whether the flash changed any decision.

                ## Notes
                Start from the **Metrics log** template. Drop the flash if after a quarter nobody can name a decision it informed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly leading indicator flash sent every Monday for a full quarter, with a written review of whether it changed decisions."
                cadence: rolling
              tasks:
                - "Pick the two or three fastest-moving leading indicators"
                - "Agree a five-line flash format with the chief executive"
                - "Send the Monday flash of leading indicators @recurring(weekly:mon)"
                - "Note any decision the flash prompted in the metrics log"
            - name: Pre-issue data quality checks
              description: |-
                ## Purpose
                One wrong number in an executive pack can cost the scorecard a year of trust. A short pre-issue check, reconciling financial indicators to the ledger, people indicators to the HR system and each value to its normal range, catches most errors before anyone senior sees them.

                ## Milestones
                1. A checklist of reconciliations and range checks for each indicator.
                2. Financial indicators reconciled to the ledger every month before issue.
                3. Values outside their normal range investigated and explained before issue.
                4. A log of errors caught and corrected, reviewed each quarter for root causes.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Pre-issue checks completed and logged before every scorecard issue for six months, with no corrections needed after issue."
                cadence: rolling
              tasks:
                - "Write the reconciliation and range check for each indicator"
                - "Reconcile financial indicators to the ledger before issue @recurring(monthly:4)"
                - "Investigate every value outside its normal range before sign-off"
                - "Log each error caught with its root cause"
            - name: Escalation rule for persistent red indicators
              description: |-
                ## Purpose
                Indicators that stay red month after month teach the organisation that red is acceptable. A written rule, for example two consecutive reds trigger a recovery plan and three bring the owner to a dedicated session with the chief executive, turns the colour into a consequence.

                ## Milestones
                1. A written escalation rule agreed by the executive team.
                2. Each indicator's run of red periods tracked in the scorecard file.
                3. A recovery plan format with cause, actions, dates and expected effect.
                4. Every indicator meeting the trigger carrying a recovery plan within one month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written escalation rule in use, with every indicator red for two consecutive periods carrying a recovery plan within a month."
                cadence: rolling
              tasks:
                - "Draft the escalation rule for consecutive red periods"
                - "Get the rule agreed at the next scorecard review"
                - "Check which indicators have been red two periods running @recurring(monthly:11)"
                - "Request a recovery plan from each owner who meets the trigger"
            - name: Quarterly keep, change or drop test
              description: |-
                ## Purpose
                Scorecards accumulate indicators the way inboxes accumulate newsletters. A quarterly half-hour asking of each KPI whether it informed a decision, whether it still ties to a live priority and whether the data is trusted keeps the list short and current.

                ## Milestones
                1. Three test questions agreed for every indicator.
                2. Each indicator marked keep, change or drop at the end of every quarter.
                3. Changes and drops logged with the reason and approved by the sponsor.
                4. The scorecard staying at or below its agreed maximum number of indicators.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, every indicator has a recorded keep, change or drop decision and the scorecard stays at or below its agreed size."
                cadence: rolling
              tasks:
                - "Write the three keep, change or drop questions"
                - "Run the keep, change or drop test on every indicator @recurring(quarterly)"
                - "Log each change or drop with its reason"
                - "Get changes approved by the scorecard sponsor before the next issue"
            - name: Definition change log and history restatement
              description: |-
                ## Purpose
                Quietly changing how a KPI is calculated makes this year look better or worse than last year for reasons that have nothing to do with performance. A change log, with approval before any edit and a rule for restating history, keeps trends honest and lets anyone trace why a number moved.

                ## Milestones
                1. A change log recording every definition, source or target change with date, reason and approver.
                2. A rule agreed on when history is restated and when a series break is shown instead.
                3. Every change since launch captured in the log.
                4. A quarterly check that live calculations match the logged definitions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A change log covering every definition change since launch, with a quarterly check that live calculations match it."
                cadence: rolling
              tasks:
                - "Set up the change log with date, reason, approver and restatement fields"
                - "Back-fill any definition changes made since launch"
                - "Agree the rule for restating history versus showing a break"
                - "Compare live calculations with the logged definitions @recurring(quarterly)"
            - name: Annual scorecard reset with the planning cycle
              description: |-
                ## Purpose
                Each new strategy or annual plan should change at least part of the scorecard, yet many organisations carry the same indicators for years after the priorities have moved. Tying a reset to the planning calendar means indicators, targets and owners are refreshed once a year, on purpose.

                ## Milestones
                1. The reset scheduled to start when strategy and budget drafts are due.
                2. Every indicator retested against the new priorities.
                3. New targets and thresholds set from the approved plan.
                4. The refreshed scorecard issued for the first month of the financial year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A refreshed scorecard, with indicators retested against the new priorities and new targets set, issued for the first month of the financial year."
                cadence: cyclic
              tasks:
                - "Find the date strategy and budget drafts are due in the planning calendar"
                - "Start the scorecard reset when strategy drafts are due @recurring(yearly)"
                - "Retest every indicator against the new priorities"
                - "Issue the refreshed scorecard for month one of the new year"
            - name: Action tracker for scorecard review decisions
              description: |-
                ## Purpose
                Reviews that end in agreed actions nobody follows up are worse than no review at all, because they teach people that commitments are theatre. A simple tracker, read at the start of every review, closes the loop between what was decided and what moved.

                ## Milestones
                1. A tracker holding every action with owner, due date and linked indicator.
                2. Open actions reviewed in the first five minutes of each scorecard review.
                3. Overdue actions chased before the review, not in it.
                4. A quarterly count of actions closed on time shared with the executive team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every review action sits in the tracker with an owner and date, and at least four in five close on time over a quarter."
                cadence: rolling
              tasks:
                - "Set up the tracker with owner, due date and linked indicator"
                - "Add the actions from the last scorecard review"
                - "Chase every overdue action before the next review @recurring(monthly:8)"
                - "Report the on-time closure rate at quarter end"
            - name: Pairing leading and lagging indicators
              description: |-
                ## Purpose
                Lagging indicators like revenue, margin and attrition confirm results; leading indicators like qualified pipeline, first-time fix rate or completed manager one-to-ones give time to act. Learning to pair each lagging outcome with a plausible leading driver, and to test the link, is the core skill of scorecard design.

                ## Milestones
                1. The difference between leading and lagging indicators explained in your own words with three examples from your business.
                2. Each lagging indicator on the scorecard paired with at least one candidate leading indicator.
                3. The assumed causal link for each pair written as a sentence.
                4. Two pairs tested against history to see whether the leading measure moved first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every lagging indicator on the scorecard has a paired leading indicator with a written causal assumption, and two pairs are tested against history."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read one practitioner chapter on leading and lagging indicators"
                - "Pair each lagging scorecard indicator with a candidate leading measure"
                - "Write the causal assumption behind each pair"
                - "Test two pairs against the historical data"
            - name: Reading variation with process behaviour charts
              description: |-
                ## Purpose
                Executives routinely react to month-on-month changes that are pure noise, demanding explanations for a number that has done nothing unusual. Process behaviour charts, often called XmR charts, separate routine variation from genuine signals and cut a good deal of wasted discussion from reviews.

                ## Milestones
                1. The idea of natural process limits understood and explained to a colleague.
                2. XmR charts built for three scorecard indicators from their history.
                3. The signal rules applied to the last twelve months of each.
                4. A recommendation on which indicators should be shown as charts in the scorecard.

                ## Notes
                Donald Wheeler's short book on understanding variation is the usual starting point and needs no statistics background.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "XmR charts built for three scorecard indicators, with signals identified over twelve months and a written recommendation on display."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read an introduction to process behaviour charts and natural process limits"
                - "Build XmR charts for three indicators in a spreadsheet"
                - "Apply the signal rules to the last twelve months"
                - "Show at the next review which month-on-month moves were noise"
            - name: Ratio, average and mix traps in executive metrics
              description: |-
                ## Purpose
                Margin can rise while profit falls, average order value can climb because small customers left, and a blended rate can improve in every region yet worsen overall. Working through these traps with your own data protects the executive team from celebrating, or punishing, the wrong thing.

                ## Milestones
                1. Mix effects, denominator changes and averages of averages explained with an example from your scorecard.
                2. Every ratio indicator shown alongside its numerator and denominator.
                3. One historical case where a ratio moved for a mix reason written up.
                4. A rule added to the definition cards for how ratio indicators are presented.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every ratio indicator on the scorecard displays its numerator and denominator, and one mix-effect case from history is written up."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every ratio and average on the current scorecard"
                - "Show the numerator and denominator beside each ratio"
                - "Find one past month where a ratio moved because of mix"
                - "Add a presentation rule for ratios to the definition cards"
            - name: Balanced scorecard and its alternatives compared
              description: |-
                ## Purpose
                Kaplan and Norton's balanced scorecard, stakeholder scorecards, a single north star metric and the KPI tree each make different assumptions about how strategy works. Understanding what each framework is good and bad at helps you choose a structure deliberately instead of inheriting one from a consultant's slide.

                ## Milestones
                1. Four scorecard frameworks summarised on one page with strengths and weaknesses.
                2. Two organisations' published approaches compared, for example from annual reports.
                3. A recommendation on which structure fits your strategy, with reasons.
                4. The recommendation discussed with the scorecard sponsor.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of four scorecard frameworks with a written recommendation discussed with the sponsor."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a summary of the original balanced scorecard and its strategy maps"
                - "Compare it with a north star metric and a stakeholder scorecard"
                - "Look at how two listed companies present their KPIs in annual reports"
                - "Write a one-page recommendation for your scorecard structure"
            - name: Unit economics indicators for non-finance executives
              description: |-
                ## Purpose
                Contribution margin per customer, acquisition cost payback, net revenue retention and cash conversion explain whether growth is creating or consuming value. Executives outside finance often nod along to these numbers; being able to rebuild them from first principles makes your review questions far sharper.

                ## Milestones
                1. Five unit economics measures defined and worked through with your own figures.
                2. The measures most relevant to your business model identified.
                3. Each one reconciled to the finance pack with the finance team.
                4. A decision on whether any of them belongs on the executive scorecard.

                ## Notes
                This is about reading the numbers well, not accounting or investment advice. Agree the treatment of anything unusual with your finance director.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five unit economics measures rebuilt from company figures with the finance team, and a recorded decision on scorecard inclusion."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the finance team for a one-hour walk-through of unit economics"
                - "Rebuild five unit economics measures from last year's figures"
                - "Identify which measures matter most for your business model"
                - "Decide with the sponsor whether any belong on the scorecard"
            - name: Customer and people indicators that hold up to scrutiny
              description: |-
                ## Purpose
                Net promoter scores, engagement indices and headline attrition are popular because they are easy to collect, but they are noisy and easy to game. Learning their weaknesses and the stronger alternatives, such as gross revenue retention, complaint resolution time or regretted attrition among high performers, gives the scorecard non-financial measures the board can trust.

                ## Milestones
                1. Known weaknesses of three popular customer and people metrics written up.
                2. Two stronger alternatives identified for each, with data availability checked.
                3. The current customer and people indicators reassessed against what was learned.
                4. Any proposed replacement put through the keep, change or drop test.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written assessment of current customer and people indicators, with at least one stronger alternative proposed and tested."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a critique of net promoter score as an executive measure"
                - "List the customer and people indicators on today's scorecard"
                - "Check with HR and customer teams which alternatives have reliable data"
                - "Propose one replacement through the keep, change or drop test"
            - name: One-page scorecard layout design
              description: |-
                ## Purpose
                Speedometer dials, traffic lights without trends and twelve colours per page make a scorecard look busy and say little. A single page with consistent rows, a small trend line, value against target and the owner for each indicator lets an executive read it in under five minutes.

                ## Milestones
                1. Two or three published examples of good dashboard design studied.
                2. A one-page layout drafted with value, target, trend and owner for each indicator.
                3. The layout tested with three executives, timing how long it takes to answer five questions.
                4. A final layout adopted and documented in the run sheet.

                ## Notes
                Stephen Few's work on dashboard design and Edward Tufte's sparklines are useful references. Avoid gauges, which use a lot of space to show one number.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page scorecard layout adopted after testing with three executives, each able to answer five set questions in under five minutes."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Collect three examples of dashboards you find easy to read"
                - "Sketch a one-page layout with value, target, trend and owner"
                - "Time three executives answering five questions from the draft"
                - "Document the final layout in the run sheet"
            - name: Asking better questions in a KPI review
              description: |-
                ## Purpose
                The most common review question, why is this red, invites a defensive story. Questions such as what changed, what we would expect to see next month if your explanation is right, and what help you need lead to causes and commitments instead. Practising them over a quarter changes the tone of the review.

                ## Milestones
                1. A list of ten review questions that probe cause, evidence and support.
                2. Three questions used deliberately in each review for a quarter.
                3. Feedback gathered from two owners on how the review feels from their side.
                4. A short note of which questions produced the best discussion.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Ten review questions written and used in three consecutive monthly reviews, with feedback from two owners recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write ten review questions that probe cause, evidence and support"
                - "Pick three to use in the next scorecard review"
                - "Ask two owners how the review feels from their side"
                - "Note which questions led to the clearest commitments"
            - name: Spotting gaming and Goodhart effects
              description: |-
                ## Purpose
                When a measure becomes a target, people find ways to hit it that miss the point: closing tickets that are not resolved, booking deals that later cancel, hiring quickly to meet a headcount number. Learning the common patterns and pairing each indicator with a counter-indicator keeps the scorecard honest.

                ## Milestones
                1. Likely gaming patterns for each scorecard indicator listed with their warning signs.
                2. A counter-indicator paired with each indicator at risk, such as reopen rate beside closures.
                3. Two suspicious patterns from the last year investigated.
                4. Findings shared with the executive team without blaming individuals.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each at-risk indicator has a paired counter-indicator, and two suspicious patterns from the past year have been investigated and reported."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a short account of Goodhart's law and Campbell's law"
                - "List how each scorecard indicator could be gamed"
                - "Pair each at-risk indicator with a counter-indicator"
                - "Investigate two suspicious patterns from the past year"
            - name: Cutting an inherited scorecard back from forty metrics
              description: |-
                ## Purpose
                Many inherited scorecards carry thirty to sixty indicators because every function asked for its own line and nobody ever removed one. Cutting back to fifteen or fewer, with each removed metric given a home in a functional dashboard, restores the scorecard's job as a tool for executive attention.

                ## Milestones
                1. Every current indicator listed with its owner, the last decision it informed and its strategic link.
                2. A proposed cut to fifteen or fewer, with the destination of each removed metric.
                3. Each executive briefed one to one on the cuts affecting their function.
                4. The reduced scorecard issued and the removed metrics confirmed in their new home.

                ## Notes
                Expect resistance framed as a loss of visibility. Offering a functional appendix that is circulated but not discussed usually settles it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A scorecard reduced to fifteen or fewer indicators, with every removed metric confirmed in a functional dashboard."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every current indicator with the last decision it informed"
                - "Draft the cut to fifteen indicators with a home for each removed one"
                - "Brief each executive one to one on the cuts in their area"
                - "Issue the reduced scorecard and confirm the removed metrics have moved"
            - name: Cascaded or separate business unit scorecards
              description: |-
                ## Purpose
                Groups with several divisions face a design choice: cascade the executive indicators so each unit reports the same measures, or let units choose their own with only a few shared lines. Each route has costs in comparability, relevance and reporting effort, and the choice should be made once, deliberately.

                ## Milestones
                1. The two options and a hybrid described with their costs and benefits.
                2. Each unit head's view gathered on which indicators genuinely drive their business.
                3. A decision on which indicators are mandatory for all units and which are local.
                4. The decision written into the scorecard purpose statement.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision listing the mandatory group indicators and the freedom units have, written into the scorecard purpose statement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Describe the cascaded, separate and hybrid options on one page"
                - "Ask each unit head which three indicators best show their performance"
                - "Propose the split between mandatory and local indicators"
                - "Record the decision in the scorecard purpose statement"
            - name: Deciding whether targets mean stretch, plan or forecast
              description: |-
                ## Purpose
                A green indicator against a stretch target and a green against a cautious budget mean different things, and mixing the two on one page confuses everyone. Deciding whether scorecard targets are the budget, a stretch ambition or the latest forecast, and labelling any exceptions, makes the colours comparable.

                ## Milestones
                1. The three target types defined with an example of each.
                2. Each current target classified by type.
                3. A rule agreed for which type the scorecard uses, with exceptions labelled.
                4. The rule added to the definition card format.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded rule on the target type the scorecard uses, with every current target classified and exceptions labelled on the page."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-line definition of stretch, plan and forecast targets"
                - "Classify each current target by type with its owner"
                - "Agree the scorecard rule at the next review"
                - "Add a target type field to every definition card"
            - name: Deciding how far executive bonuses follow the scorecard
              description: |-
                ## Purpose
                Tying executive variable pay to scorecard indicators sharpens attention but raises the stakes for gaming, target negotiation and definitional disputes. Working through the options with the remuneration committee and its advisers, before the next bonus year starts, avoids a link that looks neat on paper and corrodes the review in practice.

                ## Milestones
                1. The options described, from no link to a formula-driven share of bonus.
                2. The gaming and target-setting risks of each option written down.
                3. Advice obtained from the remuneration committee and its advisers on governance and disclosure.
                4. A decision recorded before the bonus year begins.

                ## Notes
                Pay design has legal, tax and disclosure consequences. Treat this as preparing the decision for the remuneration committee, not making it alone.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A remuneration committee decision on the link between the scorecard and bonuses, recorded before the bonus year begins, with gaming risks documented."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the remuneration committee chair when bonus metrics must be fixed"
                - "Write up the options and the gaming risks of each"
                - "Prepare a paper for the remuneration committee and its advisers"
                - "Review how bonus indicators performed with the committee @recurring(yearly)"
            - name: Replacing vanity metrics with outcome measures
              description: |-
                ## Purpose
                Website visits, app downloads, training hours delivered and initiatives launched are easy to grow and say little about whether the strategy is working. Replacing each with the outcome it was meant to signal, such as active customers, revenue from new products or skills certified, makes the scorecard harder to look good on.

                ## Milestones
                1. Every activity or volume indicator on the scorecard identified.
                2. The outcome each was meant to signal written beside it.
                3. A measurable outcome indicator proposed for each, with data availability confirmed.
                4. At least two vanity indicators replaced on the live scorecard.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least two activity or volume indicators replaced on the live scorecard by outcome indicators with confirmed data."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark every activity or volume indicator on the scorecard"
                - "Write the outcome each one was meant to signal"
                - "Check whether the outcome data exists and is reliable"
                - "Replace two vanity indicators through the change log"
            - name: Automating the scorecard data feeds
              description: |-
                ## Purpose
                Hand-built scorecards drawn from a dozen exports take days, break when one analyst is on leave and invite copy and paste errors. Automating the feeds for indicators with stable definitions, working with the data team, cuts production time and lets the producer spend effort on checking instead of compiling.

                ## Milestones
                1. Each indicator rated by how manual its production is today.
                2. Automated feeds built for the indicators with stable definitions and reliable sources.
                3. Automated values checked in parallel with the manual build for two months.
                4. Production time measured before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Automated feeds running for most stable indicators, validated against two months of parallel manual builds, with production time measured."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Time how long the current monthly build takes, step by step"
                - "Agree with the data team which indicators to automate first"
                - "Run automated and manual builds in parallel for two months"
                - "Check the feed run log for failed loads before each build @recurring(monthly:2)"
            - name: Key risk indicators beside the performance KPIs
              description: |-
                ## Purpose
                Performance indicators show whether the strategy is moving; key risk indicators show whether something could derail it, such as safety incidents, cyber exposure, customer concentration or regulatory breaches. Adding a short risk panel tied to the risk register gives the executive team both views on one page.

                ## Milestones
                1. Five to eight key risk indicators chosen from the top risks in the register.
                2. A threshold for each agreed with the risk owner and linked to risk appetite.
                3. A risk panel added to the scorecard without pushing it beyond one page.
                4. Breaches of risk thresholds escalated through the same route as red KPIs.

                ## Notes
                Start from the **Risk register** template if you do not already keep one. Agree thresholds with the risk function and, where relevant, the audit or risk committee.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A panel of five to eight key risk indicators with agreed thresholds appears on the scorecard and is reviewed every quarter."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick the top five risks from the current risk register"
                - "Agree a measurable indicator and threshold for each with its risk owner"
                - "Add the risk panel to the one-page layout"
                - "Review key risk indicators against appetite with each risk owner @recurring(quarterly)"
            - name: Reconciling the scorecard with the management accounts
              description: |-
                ## Purpose
                Nothing derails a review faster than the finance director's revenue figure differing from the scorecard's. Agreeing that every financial indicator is drawn from the closed ledger, with the same cut-off and definitions as the management accounts, removes the argument and makes the scorecard the place the conversation starts.

                ## Milestones
                1. Every financial indicator on the scorecard matched to its line in the management accounts.
                2. Differences in timing, definition or source explained and resolved.
                3. A written rule that financial indicators come from the closed ledger only.
                4. Two consecutive months issued with no differences between the two packs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two consecutive months of scorecard financial indicators matching the management accounts exactly, under a written single-source rule."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Put last month's scorecard beside the management accounts line by line"
                - "List every difference with its cause"
                - "Agree the single-source rule with the finance director"
                - "Confirm two consecutive months match exactly"
            - name: Launching the new scorecard to the leadership team
              description: |-
                ## Purpose
                Dropped into inboxes without explanation, a new scorecard is read once and filed. Presenting it at a leadership meeting, explaining why each indicator is there, how colours are set and what owners will be asked to do, sets the expectations that make the first reviews work.

                ## Milestones
                1. A 30-minute presentation covering purpose, indicators, colour rules and owner duties.
                2. Each owner briefed beforehand so there are no surprises in the room.
                3. Questions and objections from the meeting captured and answered in writing.
                4. The first live scorecard issued within a month of the launch.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The scorecard presented at a leadership meeting, questions answered in writing, and the first live issue sent within a month."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a 30-minute slot at the next leadership team meeting"
                - "Brief each owner on their indicators before the launch"
                - "Present purpose, indicators, colour rules and owner duties"
                - "Answer the questions raised in a short written note afterwards"
            - name: First full-year scorecard retrospective
              description: |-
                ## Purpose
                After twelve issues there is enough evidence to judge the scorecard itself: which indicators drove decisions, which were ignored, where definitions caused trouble and whether the review improved. A structured retrospective at the year mark feeds directly into the annual reset.

                ## Milestones
                1. Twelve months of decisions and actions traced back to the indicators that prompted them.
                2. Indicators that drove no decision in the year identified.
                3. Feedback gathered from every owner and two board members.
                4. A list of changes agreed for the reset, with owners.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written retrospective after twelve issues, with feedback from every owner and two directors and an agreed list of changes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the review notes and action tracker for the past twelve months"
                - "Trace which indicators prompted each decision"
                - "Send a five-question survey to owners and two directors"
                - "Agree the change list for the annual reset"
            - name: Year-end KPI summary for the board
              description: |-
                ## Purpose
                Directors want to see the year's indicators against target, with a short honest account of what went well, what missed and what changes next year. Preparing that summary for the year-end board meeting, separate from the monthly management pack, keeps the board conversation at the right altitude.

                ## Milestones
                1. Year-end values for every board-level indicator confirmed against the closed accounts.
                2. A one-page summary with target, outcome and a sentence of commentary for each.
                3. Proposed changes to next year's indicators and targets set out for the board.
                4. The summary in the board pack by the paper deadline.

                ## Notes
                Check with the company secretary on the paper deadline and whether any figures will later appear in published reports.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-page year-end KPI summary, reconciled to the closed accounts, in the board pack by the paper deadline."
                cadence: cyclic
              tasks:
                - "Ask the company secretary for the year-end board paper deadline @recurring(yearly)"
                - "Confirm year-end values against the closed accounts"
                - "Draft the one-page summary with commentary for each indicator"
                - "Set out proposed changes to next year's indicators"
            - name: Preparing KPI disclosure for an investor day
              description: |-
                ## Purpose
                Listed and investor-backed companies increasingly publish operating KPIs, and once published an indicator is very hard to stop reporting or redefine. Preparing for an investor or analyst day means choosing which internal indicators to disclose, aligning definitions with what auditors and legal counsel will accept, and rehearsing the explanation.

                ## Milestones
                1. A shortlist of internal indicators considered for external disclosure, with the risks of each.
                2. Definitions reviewed with investor relations, finance, auditors and legal counsel.
                3. A disclosure decision recorded with the reasons.
                4. Executives rehearsed on explaining each disclosed indicator and its definition.

                ## Notes
                Disclosure rules vary by market and listing venue. Treat legal and investor relations sign-off as mandatory, not a courtesy.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A recorded disclosure decision for an investor day, reviewed by legal counsel and investor relations, with executives rehearsed."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask investor relations which operating KPIs peers disclose today"
                - "Shortlist internal indicators that could be disclosed"
                - "Review definitions with finance, auditors and legal counsel"
                - "Rehearse the executive explanation of each disclosed indicator"
            - name: Mid-year decision on re-basing targets
              description: |-
                ## Purpose
                Halfway through the year, a market shock or a strategy change can make some targets meaningless, while others are simply being missed. A deliberate mid-year checkpoint, with clear criteria for when a target may be re-based and when it must stand, prevents both rigid irrelevance and quiet goalpost moving.

                ## Milestones
                1. Criteria written for when a target may be re-based, such as a material external change.
                2. Each indicator's half-year position reviewed against the criteria.
                3. Any re-based target approved by the executive team and logged with its original value.
                4. Original and re-based targets shown side by side on the scorecard for the rest of the year.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A recorded mid-year decision for every indicator, with any re-based target approved and shown beside its original value."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the criteria for re-basing a target mid-year"
                - "Review each indicator's half-year position against the criteria"
                - "Get any re-based targets approved and logged"
                - "Show original and re-based targets side by side on the scorecard"
            - name: Inheriting a scorecard as a newly appointed executive
              description: |-
                ## Purpose
                New executives usually inherit indicators, targets and commentary habits chosen by their predecessor, and it is easy either to defend them blindly or to discard them too soon. A 30-day assessment of the indicators you now own, before proposing changes, builds credibility with the chief executive and avoids resetting baselines you will later need.

                ## Milestones
                1. Every indicator you now own listed with its definition, target and recent trend.
                2. The history behind each target understood from your predecessor, finance or the producer.
                3. Indicators you would keep, change or challenge identified with reasons.
                4. Proposed changes agreed with the chief executive and logged.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Within 30 days of starting, a written assessment of every indicator you own, with proposed changes agreed with the chief executive."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every scorecard indicator now assigned to you"
                - "Ask the producer and finance how each target was set"
                - "Mark each one keep, change or challenge with a reason"
                - "Take your proposals to the chief executive at your next one-to-one"
            - name: Business unit scorecard within a group
              description: |-
                ## Purpose
                Leading a division means answering to the group's mandatory indicators while running the business on measures that fit your own market. Building a unit scorecard that carries the group lines unchanged and adds four or five local ones keeps head office satisfied and your own team focused.

                ## Milestones
                1. The group's mandatory indicators and definitions obtained from group finance.
                2. Four or five local indicators chosen for the unit's own strategy.
                3. A unit scorecard in the group's format with the local section clearly marked.
                4. The unit scorecard sent to group finance on its submission date each month.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A unit scorecard carrying every mandatory group indicator plus four or five local ones, submitted on time to group finance for three months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Request the mandatory indicator list and definitions from group finance"
                - "Choose four or five local indicators with your leadership team"
                - "Build the unit scorecard in the group format"
                - "Submit the unit scorecard to group finance @recurring(monthly:7)"
            - name: First formal scorecard for a fast-growing company
              description: |-
                ## Purpose
                Somewhere between fifty and three hundred staff, the founder's spreadsheet and gut feel stop being enough, and each new executive brings their own dashboards. Introducing a first formal scorecard at this stage, deliberately small and owned by the leadership team, sets the habit before reporting sprawl sets in.

                ## Milestones
                1. The numbers the chief executive already checks weekly captured as a starting list.
                2. A first scorecard of eight to ten indicators with owners and simple definitions.
                3. A monthly review held for the first quarter.
                4. A decision at the end of the quarter on what to formalise next.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scorecard of eight to ten owned indicators reviewed monthly for a full quarter, with a recorded decision on what to formalise next."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the chief executive which numbers they check every week"
                - "Draft eight to ten indicators with simple one-line definitions"
                - "Assign an owner from the leadership team to each"
                - "Decide at quarter end what to formalise next"
            - name: Scorecard focus during a downturn
              description: |-
                ## Purpose
                When revenue falls or cash tightens, a scorecard built for growth points attention at the wrong things. Temporarily promoting cash, liquidity, cost run-rate and customer retention indicators, and reviewing them weekly, gives the executive team the view a downturn demands without abandoning the strategic measures.

                ## Milestones
                1. A temporary downturn panel of cash, liquidity, cost and retention indicators agreed.
                2. A weekly review of the panel for as long as conditions last.
                3. Strategic indicators kept on the scorecard, with targets reviewed under the mid-year criteria.
                4. An exit condition agreed for returning to the normal scorecard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A downturn panel reviewed weekly while conditions last, with a written exit condition for returning to the normal scorecard."
                cadence: phased
              tasks:
                - "Agree four downturn indicators with the finance director"
                - "Update the 13-week cash view for the executive team @recurring(weekly:fri)"
                - "Keep the strategic indicators visible below the downturn panel"
                - "Write the exit condition for returning to the normal scorecard"
            - name: Scorecard alongside statutory performance indicators
              description: |-
                ## Purpose
                Public bodies and regulated firms already report a long list of mandated indicators to ministries or regulators, and these can crowd out the measures of the organisation's own strategy. Separating the statutory set from a short strategic scorecard, while showing both to the board, keeps compliance visible and strategy discussable.

                ## Milestones
                1. All statutory or regulatory indicators listed with their reporting body and frequency.
                2. The overlap between statutory and strategic indicators identified.
                3. A short strategic scorecard laid out alongside a separate compliance panel.
                4. The board's agreement on how each set is reviewed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A strategic scorecard and a separate statutory panel, each with its review route agreed by the board."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every indicator you must report to a regulator or ministry"
                - "Mark which statutory indicators also measure your strategy"
                - "Lay out the strategic scorecard and the compliance panel separately"
                - "Agree the review route for each set with the board chair"
            - name: Harmonising KPI definitions after a merger
              description: |-
                ## Purpose
                Two merged organisations rarely define customers, churn, headcount or even revenue the same way, and a combined scorecard built from both without reconciliation is fiction. Agreeing common definitions early, and restating at least a year of history on them, gives the new leadership team a scorecard it can believe.

                ## Milestones
                1. Each legacy definition of every combined indicator documented side by side.
                2. One common definition agreed for each indicator.
                3. At least four quarters of history restated on the common definitions.
                4. The first combined scorecard issued with differences from legacy reporting explained.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A combined scorecard on agreed common definitions, with at least four quarters of restated history and legacy differences explained."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Collect both legacy definitions for every indicator in the combined scorecard"
                - "Ask the agent to tabulate the definition differences side by side"
                - "Agree one common definition per indicator with both finance teams"
                - "Restate four quarters of history on the common definitions"
            - name: Driver tree for the headline financial indicator
              description: |-
                ## Purpose
                Experienced scorecard owners break the headline number, often operating profit or free cash flow, into a tree of drivers until each branch reaches something a manager controls. The tree shows which indicators deserve a place on the scorecard and makes it obvious when a red result traces to a single branch.

                ## Milestones
                1. The headline indicator decomposed into drivers at three or four levels.
                2. Each branch checked to add up arithmetically to its parent.
                3. The sensitivity of the headline to a one percent change in each driver calculated.
                4. Scorecard indicators reselected or confirmed using the tree.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A driver tree for the headline indicator that adds up arithmetically, with driver sensitivities calculated and used to confirm scorecard choices."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose the headline indicator to decompose with the finance director"
                - "Break it into drivers until each branch reaches a controllable measure"
                - "Calculate the effect of a one percent change in each driver"
                - "Compare the tree's biggest drivers with the current scorecard"
            - name: Testing whether leading indicators actually predict
              description: |-
                ## Purpose
                Most scorecards assume their leading indicators predict results, and few ever check. With two or three years of data, a simple lead-lag analysis shows which leading measures moved ahead of outcomes and which are just activity that happens to correlate, so the scorecard can drop the ones that do not earn their place.

                ## Milestones
                1. Two or three years of monthly data assembled for each leading and lagging pair.
                2. Lead-lag correlations calculated for lags of one to six months.
                3. Pairs with no predictive relationship flagged, with the caveat that correlation is not cause.
                4. Findings and proposed scorecard changes presented to the executive team.

                ## Notes
                Ask an analyst to check the method. Short series and seasonal patterns easily produce false relationships.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A lead-lag analysis over at least two years for every leading indicator, with findings and proposed changes presented to the executive team."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Assemble two years of monthly data for each leading and lagging pair"
                - "Calculate lead-lag correlations for lags of one to six months"
                - "Flag pairs with no predictive relationship"
                - "Rerun the lead-lag analysis with the latest year of data @recurring(yearly)"
            - name: Group metric dictionary and KPI governance
              description: |-
                ## Purpose
                In large organisations the same indicator name is calculated a dozen ways across units, tools and reports. A governed metric dictionary, with a small council that approves new or changed definitions, gives the executive scorecard and every downstream dashboard one shared language.

                ## Milestones
                1. A metric dictionary holding the approved definition, owner and source for every executive and unit indicator.
                2. A small governance council named, with a charter and an approval process.
                3. Reporting tools pointing at dictionary definitions rather than local copies.
                4. A quarterly council meeting held with decisions logged.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published metric dictionary covering every executive and unit indicator, governed by a council that has met each quarter for a year."
                cadence: rolling
              tasks:
                - "Ask the data team where metric definitions live today"
                - "Draft the charter and membership for a metric governance council"
                - "Load the approved scorecard definitions into the dictionary first"
                - "Hold the metric governance council meeting @recurring(quarterly)"
---

# Executive KPI Scorecard

This area is for executives and senior managers who need a handful of numbers that genuinely show whether the strategy is working, whether you are building a first scorecard or rescuing one that has grown to forty lines. It starts with the foundations (purpose, an inventory of existing reports, the link to strategy, a shortlist, definitions, owners, baselines and targets), then the monthly machinery, the measurement skills that sharpen reviews, the decisions that keep the scorecard honest, dated moments such as the launch and the year-end board summary, situations from inheriting a scorecard to a merger, and finally the specialist work of driver trees and lead-lag testing.

What repeats is a monthly cycle of data cut-off, pre-issue checks, owner commentary, issue and a by-exception review, alongside a Monday leading indicator flash, quarterly keep, change or drop tests and risk indicator reviews, and a yearly reset tied to the planning calendar. The Metrics log, Purchase decision, Meeting notes and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
