---
id: management-consulting.hypothesis-driven-workplans
name: Hypothesis-Driven Workplans
description: "Workplans that start from an answer: a day-one hypothesis, analyses mapped to it with sources, owners and dates, weekly answer rewrites, and stop rules that keep effort on what changes the recommendation."
category: business
version: 1.0.0
tags: [management-consulting, hypothesis-driven-workplans, knowledge-worker, hypotheses, workplans, project-planning, problem-solving]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - risk-register
    - metrics-log
    - purchase-decision
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Hypothesis-Driven Workplans
          description: "Turning hypotheses into a workplan: analyses needed, data sources, owners, dates and an early answer that gets revised as evidence comes in."
          projects:
            - name: Day-one answer to the key question
              description: |-
                ## Purpose
                Within the first two days of an engagement, writing down what you think the answer is, in one sentence with a number attached, gives the whole team something to test instead of a topic to explore. The early answer will be partly wrong, and that is the point: a wrong answer stated clearly gets corrected in a week, while no answer drifts for a month.

                ## Milestones
                1. The key question restated in one sentence the client sponsor would recognise.
                2. A one-sentence day-one answer, with the size of the prize or the main lever named.
                3. Three to five supporting hypotheses that would each have to be true for the answer to hold.
                4. The answer dated and saved as version one, so later revisions can be compared against it.

                ## Notes
                Keep the day-one answer in the workplan file, not in your head. Teams that never write it down tend to collect data first and argue about the answer in the final week.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated version-one answer with three to five supporting hypotheses sits at the top of the workplan within the first week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rewrite the key question in one sentence and check it with the manager"
                - "Write the one-sentence answer you would give if asked today"
                - "List the three to five things that must be true for that answer to hold"
                - "Save the answer as version one with today's date in the workplan"
            - name: Client decision the workplan must support
              description: |-
                ## Purpose
                A workplan built to understand the market never ends; one built to help a named executive decide whether to enter that market before a board date has a natural finish line. Writing down the decision, who makes it, by when, and what they would need to see to decide makes every later prioritisation call easier.

                ## Milestones
                1. The decision written as a choice between two or three named options.
                2. The decision-maker and the date of the decision recorded.
                3. The criteria the decision-maker will use listed, in their own words where possible.
                4. Each top-level hypothesis linked to at least one of those criteria.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-paragraph decision statement names the options, the decision-maker, the date and the criteria, and links each to the hypotheses."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the client decision as a choice between two or three options"
                - "Ask the manager who makes the decision and by what date"
                - "List the criteria the decision-maker has said matter to them"
                - "Link each top-level hypothesis to one of those criteria"
            - name: Writing hypotheses that can be proven wrong
              description: |-
                ## Purpose
                Most weak workplans start from hypotheses that cannot fail, such as 'costs could be reduced' or 'there may be growth in Asia'. Rewriting each one as a specific claim with a threshold, for example 'procurement spend is at least 8 percent above the peer median', tells you exactly what analysis to run and what result would kill it.

                ## Milestones
                1. Every supporting hypothesis rewritten with a direction, a size and a scope.
                2. A disproof condition written beside each hypothesis: the result that would make you drop it.
                3. Vague hypotheses either sharpened or removed from the list.
                4. The manager agreeing that each hypothesis can be tested within the engagement timeline.

                ## Notes
                A useful check: if no possible data could make you abandon a hypothesis, it is a belief, not a hypothesis.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each hypothesis on the list has a numeric threshold and a written disproof condition, reviewed by the manager."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark each current hypothesis as specific, vague or untestable"
                - "Add a direction, a size and a scope to every vague hypothesis"
                - "Write the result that would disprove each hypothesis beside it"
                - "Walk the rewritten list through with the manager in ten minutes"
            - name: Hypothesis to analysis mapping grid
              description: |-
                ## Purpose
                An analysis with no hypothesis above it is usually curiosity, and a hypothesis with no analysis below it never gets tested. A grid with each hypothesis on a row, the one or two analyses that would test it, and the result expected if it is true makes gaps and orphan analyses visible at a glance.

                ## Milestones
                1. Every hypothesis linked to at least one named analysis.
                2. Every analysis linked back to a hypothesis, with orphans flagged.
                3. An expected result written for each analysis before any data is pulled.
                4. The grid stored as the first tab of the workplan file.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A grid exists in which no hypothesis lacks an analysis and no analysis lacks a hypothesis, each with an expected result written in advance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create a grid with columns for hypothesis, analysis and expected result"
                - "Fill in one row for each hypothesis and analysis pair"
                - "Flag any analysis that does not test a listed hypothesis"
                - "Write the result you expect from each analysis before running it"
            - name: Workplan file with standard columns
              description: |-
                ## Purpose
                Every team member should be able to open one file and see, for each analysis, the hypothesis it tests, the data it needs, who owns it, when it is due, its status and the page or table it feeds. Setting those columns once, in a shared spreadsheet, saves the weekly argument about where the latest version lives.

                ## Milestones
                1. One shared workplan file with columns for hypothesis, analysis, data source, owner, due date, status and end product.
                2. Status values limited to a short fixed list: not started, in progress, blocked, done and dropped.
                3. The file linked from the team channel and the engagement folder.
                4. A version note at the top showing who last changed it and when.

                ## Notes
                Keep it in one place. Copies sent around as attachments are how two people end up running the same analysis.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared workplan file with the seven standard columns and a fixed status list is linked from the team channel."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the shared workplan spreadsheet with the seven standard columns"
                - "Set a drop-down list for the five allowed status values"
                - "Copy the hypothesis and analysis rows across from the mapping grid"
                - "Pin the file link in the team channel"
            - name: Data source named for every analysis
              description: |-
                ## Purpose
                Analyses stall far more often on missing data than on hard maths. Naming the source for each line (a client system extract, a public filing, a survey, an expert call, a paid database) and how long it will take to arrive shows within days which hypotheses can be tested in time and which need a proxy.

                ## Milestones
                1. A data source and a realistic arrival date entered for every analysis line.
                2. Lines with no available source flagged, each with a proxy proposed.
                3. Client-held data grouped so it can go into one request rather than ten.
                4. Analyses whose data cannot arrive before the interim review moved or redesigned.

                ## Notes
                Writing the detailed data request is separate work; here the job is knowing which analysis depends on which source and when.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every workplan line shows a named source and an expected arrival date, with unavailable sources flagged and a proxy proposed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the most likely data source beside every analysis line"
                - "Estimate when each source could realistically arrive"
                - "Flag lines with no source and suggest a proxy for each"
                - "Group the client-held items into one list for the data request"
            - name: One owner and one date on every line
              description: |-
                ## Purpose
                An analysis owned by the team is owned by nobody. Putting one name and one date on each line, worked back from the interim and final review dates, turns the workplan from a wish list into a schedule people can be held to and can push back on early.

                ## Milestones
                1. A single named owner on every analysis line.
                2. Due dates set by working back from the interim and final review dates.
                3. Each owner confirming their lines and dates are achievable.
                4. Nobody carrying more lines in one week than their available days allow.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every line has exactly one owner and a due date that the owner has confirmed as achievable."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark the interim and final review dates at the top of the workplan"
                - "Assign one owner to each analysis line"
                - "Set each due date by working back from the next review"
                - "Ask each owner to confirm or challenge their dates by end of day"
            - name: Prioritising analyses by impact on the answer
              description: |-
                ## Purpose
                Teams typically list twice as many analyses as the timeline allows. Scoring each one on how much it could move the answer and how many days it costs, then placing them on a simple two-by-two, shows which few to start this week and which to drop before anyone loses a weekend to them.

                ## Milestones
                1. Each analysis scored from one to three on answer impact and on effort.
                2. A two-by-two showing quick wins, big bets, nice-to-haves and drops.
                3. The top five analyses started first, with the drops agreed with the manager.
                4. The ranking revisited whenever a hypothesis is confirmed or refuted.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ranked list of analyses exists with at least a fifth of the original lines dropped or deferred, agreed with the manager."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Score every analysis line on answer impact from one to three"
                - "Estimate every line's effort in working days"
                - "Plot the lines on a two-by-two and name the drops"
                - "Agree the start order and the drops with the manager"
            - name: Workplan sign-off with the engagement manager
              description: |-
                ## Purpose
                Before analysis starts in earnest, a forty-five-minute walk through the workplan with the manager catches misread priorities, unrealistic dates and analyses the partner has already seen fail elsewhere. Doing it at the end of week one costs an hour; discovering the gaps at the interim review costs a fortnight.

                ## Milestones
                1. A forty-five-minute session held with the manager on the full workplan.
                2. Changes agreed in the session made in the file the same day.
                3. Any analysis the partner wants added or removed recorded with the reason.
                4. The reviewed version saved and dated as the baseline plan.

                ## Notes
                Start from the **Meeting notes** template to capture each change and who asked for it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dated baseline workplan exists that reflects changes agreed in a manager review held before the end of week two."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book forty-five minutes with the manager before the end of week one"
                - "Send the workplan file the evening before the session"
                - "Make every agreed change in the file on the same day"
                - "Save the reviewed version as the dated baseline"
            - name: Three-times-weekly workplan check-in
              description: |-
                ## Purpose
                Fifteen minutes on Monday, Wednesday and Friday, standing at the workplan rather than a slide, is enough to catch blocked analyses before they cost a day. Each owner says what is done, what is blocked and whether anything they found changes a hypothesis.

                ## Milestones
                1. A recurring fifteen-minute slot held on three days a week.
                2. Owners updating their status in the file before the check-in, not during it.
                3. Every blocked line leaving the check-in with a named person to unblock it.
                4. Findings that affect a hypothesis noted for the weekly hypothesis review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Check-ins run on three days a week for a full engagement, with every blocked line given an unblocking owner the same day."
                cadence: rolling
              tasks:
                - "Book a recurring fifteen-minute slot on Monday, Wednesday and Friday"
                - "Run the check-in asking what is done, blocked or changed @recurring(weekly:mon,wed,fri)"
                - "Ask owners to update their status lines before each check-in"
                - "Write the unblocking owner beside every blocked line"
            - name: Weekly hypothesis status review
              description: |-
                ## Purpose
                Once a week, every hypothesis should be marked confirmed, refuted, weakened or still open, with the evidence that moved it. Without this habit the workplan tracks tasks completed while nobody notices that the core hypothesis quietly died on Tuesday.

                ## Milestones
                1. A status and a one-line evidence note beside every hypothesis each week.
                2. Refuted hypotheses removed from active work, with the analyses beneath them stopped or redirected.
                3. New hypotheses that emerged from the evidence added with their own analyses.
                4. A weekly snapshot of statuses kept so the trend can be shown later.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For every week of the engagement, each hypothesis has a recorded status and a one-line evidence note."
                cadence: rolling
              tasks:
                - "Add status and evidence note columns beside each hypothesis"
                - "Mark every hypothesis confirmed, refuted, weakened or open @recurring(weekly:thu)"
                - "Stop or redirect the analyses under any refuted hypothesis"
                - "Save a copy of the statuses as that week's snapshot"
            - name: Evidence log tied to hypotheses
              description: |-
                ## Purpose
                Findings arrive in emails, interview notes, model outputs and corridor conversations, and by week four nobody can say where the 12 percent figure came from. A single log, one line per piece of evidence with its source, date and the hypothesis it supports or undercuts, makes the answer traceable and the final fact check faster.

                ## Milestones
                1. An evidence log with columns for finding, source, date, hypothesis and direction.
                2. Each finding marked as supporting, undercutting or neutral to its hypothesis.
                3. Every number in the current answer traceable to a log line.
                4. Weak single-source findings marked as needing a second source.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every number in the current answer can be traced to a dated log line that names its source."
                cadence: rolling
              tasks:
                - "Create the evidence log with finding, source, date, hypothesis and direction columns"
                - "Log the week's findings with their sources @recurring(weekly:tue)"
                - "Mark single-source findings that need a second source"
                - "Check that each number in the current answer has a log line"
            - name: Friday rewrite of the current answer
              description: |-
                ## Purpose
                Revising the answer weekly, in writing, is what makes a workplan hypothesis-driven rather than merely organised. Each Friday the one-sentence answer and its supporting points are rewritten from that week's evidence, and the differences from last week show the team and the manager exactly what has been learned.

                ## Milestones
                1. A new dated version of the answer written every Friday.
                2. Changes from the previous version marked and explained in one line each.
                3. The answer shared with the manager before the weekend.
                4. Workplan lines added, changed or dropped to match the new answer.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated answer version exists for every week of the engagement, each with its changes from the previous week explained."
                cadence: rolling
              tasks:
                - "Rewrite the one-sentence answer from this week's evidence @recurring(weekly:fri)"
                - "Mark what changed since last week's version and why"
                - "Send the new version to the manager before you log off"
                - "Remove the workplan lines the new answer makes unnecessary"
            - name: Workplan change log and re-plan rule
              description: |-
                ## Purpose
                Workplans change constantly, and the danger is not change but silent change: a date slipping three times with nobody deciding anything. A short change log plus a rule, for example that any slip over two days or any new line over a day of effort needs the manager's yes, keeps the plan honest without freezing it.

                ## Milestones
                1. A change log tab recording date, line, change, reason and approver.
                2. A written re-plan rule agreed with the manager.
                3. Every slip of more than two days logged with a decision attached.
                4. Lines that keep slipping spotted and escalated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A change log records every slip over two days, each approved under a written re-plan rule."
                cadence: rolling
              tasks:
                - "Add a change log tab with date, line, change, reason and approver"
                - "Write the re-plan rule in two sentences and agree it with the manager"
                - "Scan the change log for lines that slip repeatedly @recurring(weekly:mon)"
                - "Escalate any line that has slipped twice"
            - name: Stop rule for analyses that cannot change the answer
              description: |-
                ## Purpose
                Halfway through, some analyses have already done their job and others never will, yet both keep consuming days because nobody formally stops them. A standing question for every line, whether an opposite result would change the recommendation, lets the team close work that no longer matters.

                ## Milestones
                1. The so-what question written into the workplan as a column.
                2. Every open line answered yes or no against that question.
                3. Lines answering no closed or reduced to a one-hour sanity check.
                4. Freed days reassigned to the analyses that most affect the answer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each open line has a recorded so-what answer, and lines that cannot change the recommendation are closed within a week."
                cadence: rolling
              tasks:
                - "Add a so-what column to the workplan"
                - "Ask of each open line whether an opposite result would change the recommendation"
                - "Close or shrink the lines that answer no @recurring(weekly:wed)"
                - "Reassign the freed days to the highest-impact lines"
            - name: Data arrival and dependency tracker
              description: |-
                ## Purpose
                When an analysis depends on a client extract, an expert call and another team's model, one late item can idle an analyst for a week. A small tracker of what each line is waiting for, from whom and since when shows the bottlenecks early enough to chase or redesign.

                ## Milestones
                1. Every dependency listed with the line it blocks, the person responsible and the date requested.
                2. Items outstanding more than three working days chased through the agreed client contact.
                3. A fallback approach noted for every dependency older than a week.
                4. The tracker summarised in one line at each check-in.

                ## Notes
                Start from the **Risk register** template if you prefer to keep dependencies alongside the other engagement risks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every dependency has a requested date and a responsible person, and nothing older than a week lacks a fallback plan."
                cadence: rolling
              tasks:
                - "List each dependency with the line it blocks and who owns it"
                - "Check what has arrived and what is still outstanding @recurring(daily)"
                - "Chase items more than three working days late through the client contact"
                - "Write a fallback approach for anything outstanding over a week"
            - name: Monthly personal workplan retrospective
              description: |-
                ## Purpose
                Across engagements the same mistakes repeat: estimates too low, hypotheses too vague, data assumed to exist. Twenty minutes once a month comparing what you planned with what happened builds a personal list of corrections that makes each next plan better.

                ## Milestones
                1. A short retrospective note written each month.
                2. Planned and actual effort compared for at least five lines.
                3. One correction chosen to apply to the next workplan.
                4. A running list of corrections kept in one note.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A retrospective note exists for each month, with at least one named correction carried into the next workplan."
                cadence: rolling
              tasks:
                - "Open last month's workplans and pick five lines to compare"
                - "Write the monthly retrospective with one correction @recurring(monthly:12)"
                - "Add the correction to your running list"
                - "Read the list before drafting your next workplan"
            - name: Weekly capacity check against the workplan
              description: |-
                ## Purpose
                A plan that needs eleven analyst days in a week where the team has seven will slip, however hard everyone works. Summing the effort due each week by person and comparing it with their real days, after client meetings, travel and training, surfaces overload before Thursday night.

                ## Milestones
                1. Effort in days entered for every open line.
                2. Available days per person for the coming week recorded.
                3. Load compared with availability, with anyone over 100 percent flagged.
                4. Overloads resolved by moving dates, moving owners or cutting lines.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each week starts with nobody scheduled above their available days, or with a recorded decision about the overload."
                cadence: rolling
              tasks:
                - "Add an effort-in-days column to every open line"
                - "Record each person's available days for the coming week"
                - "Compare load with availability and flag overloads @recurring(weekly:mon)"
                - "Resolve each overload by moving a date, an owner or a line"
            - name: Weekly hypothesis practice on listed companies
              description: |-
                ## Purpose
                Generating good hypotheses quickly is a skill that improves with repetition outside client work. Taking one published results announcement each week, writing a key question, a day-one answer and three testable hypotheses in thirty minutes, then checking against what the company later did, builds the instinct cheaply.

                ## Milestones
                1. A practice note format: question, answer, three hypotheses and their disproof conditions.
                2. Ten practice notes completed over ten weeks.
                3. At least three notes revisited against later results or announcements.
                4. A short list of patterns in where your hypotheses went wrong.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten practice notes are complete, three of them checked against later public results, with a written list of error patterns."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick a listed company with a recent results announcement"
                - "Write a key question, an answer and three hypotheses in thirty minutes @recurring(weekly:sat)"
                - "Revisit an older note when that company reports again"
                - "Note the pattern behind each hypothesis that turned out wrong"
            - name: Analysis specs a colleague can run alone
              description: |-
                ## Purpose
                Handing an analyst a line that says look at churn produces three days of charts; handing them a half-page spec produces the answer. A spec states the hypothesis, the exact question, the data and cut, the expected result, the end product and the deadline, so the person running it can work without you.

                ## Milestones
                1. A half-page spec format with six headings agreed with the team.
                2. Specs written for the five highest-priority lines.
                3. Each spec explained back by its owner, with questions answered before work starts.
                4. Rework on specified lines compared with lines handed over verbally.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Specs exist for the five highest-priority lines, and each owner confirmed their understanding before starting."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft a half-page spec format with six headings"
                - "Write specs for the five highest-priority analysis lines"
                - "Ask each owner to explain their spec back in two minutes"
                - "Compare rework on specified lines with verbal handovers at week end"
            - name: Calibrating your analysis effort estimates
              description: |-
                ## Purpose
                Most consultants underestimate analysis effort by half, mostly in cleaning data and in the second round of cuts the manager asks for. Logging estimated and actual hours for every line you own over two months gives you a personal multiplier to apply to every future workplan.

                ## Milestones
                1. Estimated hours recorded before starting each line.
                2. Actual hours recorded when each line closes.
                3. At least twenty lines logged and an average ratio of actual to estimate calculated.
                4. The ratio applied to the estimates in your next workplan.

                ## Notes
                Start from the **Metrics log** template, one row per analysis line.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty or more lines are logged with estimated and actual hours, and a personal ratio is calculated and applied."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Set up a log with line, estimate, actual and reason for any gap"
                - "Write your estimate down before starting any new line"
                - "Total the month's estimates against actual hours @recurring(monthly:20)"
                - "Apply your ratio to the next workplan you draft"
            - name: Rough first cuts before full analyses
              description: |-
                ## Purpose
                Ninety minutes spent on a rough version of an analysis, using public figures and stated assumptions, often tells you whether the full two-week version is worth running. Practising first cuts, writing down the rough result and later comparing it with the finished analysis, teaches you when rough is good enough.

                ## Milestones
                1. First cuts completed for three analyses before their full versions.
                2. Each first cut's result and assumptions recorded.
                3. Each first cut compared with the final result and the gap measured.
                4. A rule of thumb written for when a first cut is enough.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three first cuts are compared with their full analyses, with the gaps measured and a written rule for when rough suffices."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose three upcoming analyses that could be roughed out first"
                - "Spend ninety minutes on a first cut of the first one"
                - "Record each first-cut result and its assumptions"
                - "Compare each first cut with the full result when it lands"
            - name: Guarding against confirmation bias in the evidence
              description: |-
                ## Purpose
                Once a team has said the answer aloud to the client, evidence that supports it gets accepted fast and evidence against it gets picked apart. Deliberately recording the strongest disconfirming finding each month and asking a colleague outside the team to argue the opposite keeps the answer honest.

                ## Milestones
                1. The strongest finding against the current answer written down each month.
                2. A colleague outside the team asked to argue the opposite case once per engagement.
                3. Dismissed findings re-checked against the same standard as supporting ones.
                4. Any change to the answer prompted by disconfirming evidence recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For every month of an engagement, the strongest disconfirming finding is recorded along with how the team responded."
                cadence: rolling
              tasks:
                - "Write down the strongest evidence against the current answer @recurring(monthly:8)"
                - "Ask a colleague outside the team to argue the opposite for twenty minutes"
                - "Re-check one dismissed finding with the rigour given to supporting ones"
                - "Record whether the answer changed and why"
            - name: Matching hypothesis types to analysis types
              description: |-
                ## Purpose
                Different hypotheses need different tests: a claim about size needs a sizing or baseline, a claim about cause needs a driver analysis or a natural comparison, and a claim about feasibility needs interviews or a pilot. A one-page reference matching the two stops teams running a benchmark when the question was really about cause.

                ## Milestones
                1. Four or five hypothesis types defined, each with a plain example.
                2. One to three suitable analysis types listed for each hypothesis type.
                3. The current workplan checked against the reference, with mismatches fixed.
                4. The reference page kept with your workplan files.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page reference matches hypothesis types to analysis types and has been used to correct at least one mismatch in a live workplan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the hypothesis types you meet most, such as size, cause and feasibility"
                - "Write one to three suitable analysis types beside each"
                - "Check each line of your current workplan against the reference"
                - "Ask the agent to suggest analyses for any hypothesis type you left thin"
            - name: Status lines that say what was learned
              description: |-
                ## Purpose
                Status entries like working on it or 80 percent done tell a manager nothing. Writing each status as what was found and what it means for the hypothesis, for example 'margin gap confirmed at 4 points, mostly freight', turns the workplan itself into a summary of the engagement's progress.

                ## Milestones
                1. A status format agreed: finding, effect on hypothesis, next step.
                2. All your own open lines rewritten in that format.
                3. The team using the format for a full week.
                4. The manager able to read the week's progress from the file without a meeting.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For one full week every status line in the workplan states a finding and its effect on a hypothesis."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Agree a three-part status format with the team"
                - "Rewrite your own open status lines in the new format"
                - "Point out activity-only status lines at the next check-in"
                - "Ask the manager whether the file now tells the week's story"
            - name: Choosing the workplan tool for the team
              description: |-
                ## Purpose
                Teams argue about spreadsheets, task boards and slide-based workplans as if the format were the work. Choosing one deliberately against three criteria (the client can view it, everyone can edit it, it shows hypotheses beside tasks) ends the argument and avoids duplicate trackers.

                ## Milestones
                1. Three candidate formats listed, such as a shared spreadsheet, a task board and a slide workplan.
                2. Each scored against the same criteria, including client access and confidentiality rules.
                3. One format chosen and recorded with the reason.
                4. Any duplicate trackers retired.

                ## Notes
                Start from the **Purchase decision** template if the choice involves a paid tool. Check the firm's rules on where client data may be stored before choosing anything cloud-based.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One workplan format is chosen against written criteria, with the reason recorded and duplicate trackers retired."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the formats the team currently uses or has proposed"
                - "Score each against client access, editing and hypothesis visibility"
                - "Check the firm's data storage rules for each option"
                - "Record the choice and retire the duplicate trackers"
            - name: Exploration period or hypothesis from day one
              description: |-
                ## Purpose
                Not every question suits a hypothesis on day one: a market the team knows nothing about may need a week of open exploration first. Deciding explicitly how long to explore, with a fixed date by which a hypothesis must be written, avoids both premature answers and endless fact-finding.

                ## Milestones
                1. The team's knowledge of the problem rated honestly at the start.
                2. An exploration period of a fixed number of days agreed, or skipped.
                3. The questions the exploration must answer written down.
                4. A hypothesis written on the agreed date, however incomplete the picture feels.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the exploration period exists, and a hypothesis was produced on or before the agreed date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rate how much the team already knows about the problem from one to five"
                - "Agree a fixed exploration period or decide to skip it"
                - "List the questions the exploration must answer"
                - "Put the hypothesis deadline into the workplan"
            - name: Cutting the workplan for a shortened timeline
              description: |-
                ## Purpose
                Clients bring board meetings forward and budgets get trimmed, and a six-week plan suddenly has four. Re-planning by keeping the analyses that most affect the decision, replacing slow ones with first cuts and saying plainly what will be less certain protects the answer instead of thinning everything equally.

                ## Milestones
                1. The new end date and the decision it serves confirmed.
                2. Each line marked keep, shrink or drop against its impact on the decision.
                3. Slow analyses replaced with faster proxies where the loss is acceptable.
                4. A short note for the sponsor listing what will be less certain as a result.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A re-cut workplan fits the new end date and comes with a sponsor note on reduced certainty, approved by the manager."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the new end date and the decision it must support"
                - "Mark every line keep, shrink or drop"
                - "Swap slow analyses for faster proxies where the loss is acceptable"
                - "Draft a short note for the sponsor on what will be less certain"
            - name: Standard of proof for each hypothesis
              description: |-
                ## Purpose
                Some teams stop too early on one convincing chart, while others keep testing a settled point because nobody said it was settled. Agreeing a standard of proof per hypothesis, such as two independent sources, a result outside a stated range, or a client owner who accepts the number, tells everyone when to move on.

                ## Milestones
                1. A standard of proof written for each top-level hypothesis.
                2. The standards agreed with the manager before results arrive.
                3. Hypotheses declared confirmed only when their standard is met.
                4. Lines under confirmed hypotheses closed within two days.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each top-level hypothesis has a written standard of proof agreed before results, and confirmed ones close within two days."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a standard of proof for each top-level hypothesis"
                - "Agree the standards with the manager before results arrive"
                - "Declare a hypothesis confirmed only when its standard is met"
                - "Close the remaining lines under each confirmed hypothesis"
            - name: Replacing a refuted lead hypothesis
              description: |-
                ## Purpose
                When the central hypothesis fails in week three, the temptation is to keep the workplan and reword the conclusion. Replacing it properly means drafting two or three alternative answers, choosing the most likely, rebuilding the analyses beneath it and telling the manager the same day.

                ## Milestones
                1. The refutation and its evidence written in three sentences.
                2. Two or three alternative answers drafted.
                3. One chosen as the new lead, with its supporting hypotheses.
                4. Workplan lines rebuilt beneath it, with obsolete lines dropped and logged.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within three working days of a refutation, a new lead hypothesis and rebuilt workplan lines are in the file and the manager has been told."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the refutation and its evidence in three sentences"
                - "Draft two or three alternative answers to the key question"
                - "Choose the new lead answer together with the manager"
                - "Rebuild the analysis lines beneath the new lead"
            - name: Gating analyses that depend on earlier results
              description: |-
                ## Purpose
                Some analyses only matter if an earlier one comes back a certain way: there is no point sizing an adjacent market if the core market test fails. Mapping which lines depend on which results, and choosing deliberately what runs in parallel and what waits, saves days without delaying the answer.

                ## Milestones
                1. Dependencies between analysis results drawn as a simple sequence.
                2. Lines that depend on an uncertain earlier result marked as gated.
                3. Gated lines given a decision date rather than a start date.
                4. The team briefed on which lines are gated and why.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Gated lines are marked in the workplan with a decision date and the result they are waiting on."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sketch which analyses depend on the result of another"
                - "Mark the gated lines in the workplan"
                - "Give each gated line a decision date and its trigger result"
                - "Brief the team on the gates at the next check-in"
            - name: Triage for client requests outside the hypotheses
              description: |-
                ## Purpose
                Clients ask for one more cut constantly, and each request is small until the workplan carries twenty of them. A simple triage, asking which hypothesis or decision a request serves and what it displaces, lets you say yes, later or no with a reason the client counterpart accepts.

                ## Milestones
                1. A requests list capturing each ask, who made it and the date.
                2. Each request triaged as serving a hypothesis, nice to know, or new scope.
                3. New-scope requests passed to the manager rather than absorbed.
                4. Accepted requests added as workplan lines with owners and dates.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Every client request is logged and triaged, and no new-scope request entered the workplan without the manager's agreement."
                cadence: rolling
              tasks:
                - "Start a requests list with the ask, the requester and the date"
                - "Ask of each request which hypothesis or decision it serves"
                - "Pass new-scope requests to the manager the same day"
                - "Add accepted requests to the workplan with an owner and a date"
            - name: Audit of analyses that never reached the deck
              description: |-
                ## Purpose
                On many engagements a third of the analyses never appear in any client document. Looking back at a finished engagement and tagging every line as used, used as backup, or unused shows which kinds of analysis you habitually over-plan.

                ## Milestones
                1. Every line of a finished workplan tagged used, backup or unused.
                2. Days spent on unused lines totalled.
                3. The two most common kinds of unused analysis named.
                4. A planning rule written to avoid them next time.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One finished workplan is fully tagged, with unused days totalled and a planning rule written each quarter."
                cadence: cyclic
              tasks:
                - "Open the final deck and the final workplan side by side"
                - "Tag each line used, backup or unused"
                - "Total the days spent on unused lines and name the two commonest kinds"
                - "Repeat the audit on your latest finished engagement @recurring(quarterly)"
            - name: Partner problem-solving session on the workplan
              description: |-
                ## Purpose
                Partners have usually seen the same question at three other clients and can kill a bad hypothesis in two minutes. A structured ninety-minute problem-solving session in week two, with the day-one answer, the hypotheses and the top analyses on one page, gets that experience into the plan before effort is spent.

                ## Milestones
                1. A one-page summary of the answer, hypotheses and top analyses sent a day ahead.
                2. The session held with the partner, manager and workstream leads.
                3. Hypotheses the partner challenged recorded with the reasoning.
                4. The workplan updated within a day of the session.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A partner problem-solving session is held by the end of week two, its challenges recorded and the workplan updated within a day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book ninety minutes with the partner during week two"
                - "Prepare a one-page view of the answer, hypotheses and top analyses"
                - "Record each challenge the partner raises and the reasoning behind it"
                - "Update the workplan within a day of the session"
            - name: Midpoint answer check before the interim review
              description: |-
                ## Purpose
                Two weeks before an interim review is the last moment to change course without a scramble. A midpoint check asks three questions: is the answer clear enough to present, which hypotheses are still open, and which analyses must land before the review to make the answer credible.

                ## Milestones
                1. The current answer read by someone outside the team, who can restate it.
                2. Open hypotheses listed with what is needed to close each.
                3. Must-land analyses for the interim review marked in the workplan.
                4. Lines that will not land by the review moved to the second half.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Two weeks before the interim review, must-land analyses are marked, the rest re-dated, and the answer restated by an outsider."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a colleague outside the team to read and restate the current answer"
                - "List the open hypotheses and what would close each"
                - "Mark the analyses that must land before the interim review"
                - "Move the remaining lines to dates after the review"
            - name: Workplan reset after the interim review
              description: |-
                ## Purpose
                Interim reviews almost always change the plan: the client accepts some findings, rejects others and adds a question. Resetting the workplan within two days, with a new version of the answer, closes the gap between what was agreed in the room and what the team works on next.

                ## Milestones
                1. Feedback from the review listed as accepted, challenged or new question.
                2. The answer revised to a new version that reflects the review.
                3. Workplan lines added, dropped or re-dated for the second half.
                4. The reset plan walked through with the team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within two working days of the interim review, a revised answer and a reset workplan are in the file and briefed to the team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the review feedback as accepted, challenged or new question"
                - "Write the next version of the answer"
                - "Add, drop and re-date lines for the second half"
                - "Walk the team through the reset plan"
            - name: Final fortnight evidence gap close-out
              description: |-
                ## Purpose
                In the last two weeks the workplan's job changes from finding the answer to proving it. Listing every claim in the draft recommendation, checking each has evidence in the log, and running only the analyses that close real gaps keeps the final days from filling up with new exploration.

                ## Milestones
                1. Every claim in the draft recommendation listed.
                2. Each claim matched to its evidence or marked as a gap.
                3. Gap-closing analyses assigned with owners and dates in the final week.
                4. New exploratory lines frozen unless the manager approves them.
              priority: medium
              deadlineOffsetDays: 70
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "In the final fortnight every claim in the recommendation is matched to logged evidence or to a dated gap-closing line."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each claim in the draft recommendation"
                - "Match every claim to evidence in the log or mark it as a gap"
                - "Assign gap-closing analyses with owners and dates"
                - "Freeze new exploratory lines unless the manager approves"
            - name: Hypothesis post-mortem after the engagement
              description: |-
                ## Purpose
                Comparing the version-one answer with the final one is the most honest feedback a consultant gets on their judgement. An hour after the engagement ends, laying out every answer version and every hypothesis outcome shows which instincts were right and which assumptions were wrong.

                ## Milestones
                1. All dated answer versions laid side by side.
                2. Every hypothesis tagged confirmed, refuted or never tested.
                3. Three lessons written on what the early answer got right and wrong.
                4. The lessons shared with the team or the firm's knowledge contact.

                ## Notes
                Start from the **Meeting notes** template if the team runs the post-mortem together.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A post-mortem note comparing answer versions and hypothesis outcomes, with three lessons, is written within two weeks of the engagement ending."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect every dated answer version from the engagement"
                - "Tag each hypothesis confirmed, refuted or never tested"
                - "Write three lessons about your early judgement"
                - "Share the note with the team"
            - name: First workplan lines as a new analyst
              description: |-
                ## Purpose
                New analysts usually receive two or three lines of someone else's workplan and are judged on whether they land them on time and say what they found. Understanding the hypothesis behind each line, asking about the expected result and flagging problems on day one rather than day four is most of what good looks like in the first months.

                ## Milestones
                1. The hypothesis behind each assigned line written in your own words.
                2. The expected result and end product confirmed with the person who assigned it.
                3. Any data or timing problem flagged within one working day.
                4. Each line closed with a finding stated, not just a file attached.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three assigned lines are closed on time, each with a stated finding and its effect on the hypothesis."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the hypothesis behind each of your lines in your own words"
                - "Ask what result is expected and what output is wanted for each line"
                - "Flag any data or timing problem within one working day"
                - "Close each line with a one-sentence finding"
            - name: Associate owning a workstream workplan
              description: |-
                ## Purpose
                The step from running analyses to owning a workstream's plan is where many associates struggle, because suddenly the job is deciding what not to do. Building the workstream's hypotheses, lines and dates yourself, then defending them to the manager, is the clearest practice of that shift.

                ## Milestones
                1. A workstream-level answer and three to five hypotheses written by you.
                2. The workstream's lines, owners and dates drafted without a starting plan from the manager.
                3. The plan defended in a review, with changes accepted or argued.
                4. At least two lines cut on your own judgement, with the reason recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A workstream workplan drafted by the associate is reviewed by the manager, with at least two self-initiated cuts recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft the workstream answer and its supporting hypotheses"
                - "Build the workstream lines, owners and dates from scratch"
                - "Present the plan to the manager and note each challenge"
                - "Record the lines you chose to cut and why"
            - name: Integrated workplan across workstreams
              description: |-
                ## Purpose
                With three or four workstreams, the risk for a manager is four good plans that do not add up to one answer. An integrated page with the top-level answer, each workstream's hypotheses and the handoffs between them reveals duplicated analyses and conflicting assumptions early.

                ## Milestones
                1. One integrated page linking each workstream's hypotheses to the overall answer.
                2. Shared assumptions such as market size or base year agreed once for all workstreams.
                3. Handoffs between workstreams dated in the plan.
                4. Duplicated or conflicting analyses resolved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A single integrated workplan page is kept current weekly, with shared assumptions recorded once and no duplicated analyses."
                cadence: rolling
              tasks:
                - "Build one page linking each workstream's hypotheses to the overall answer"
                - "Agree the shared assumptions once for all workstreams"
                - "Check handoffs and conflicting assumptions across workstreams @recurring(weekly:tue)"
                - "Merge or drop any duplicated analyses"
            - name: Two-week diagnostic sprint workplan
              description: |-
                ## Purpose
                Short diagnostics, often sold as a first phase, leave no time for a slow start: the answer must exist by day three and the evidence by day eight. A compressed plan with no more than ten lines, daily status and a hard stop on new analysis by day seven fits the format.

                ## Milestones
                1. A day-two answer and no more than ten analysis lines.
                2. Every line due by day eight.
                3. New analysis stopped on day seven, leaving the last days for synthesis.
                4. A short list of questions for a possible second phase.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A diagnostic is delivered within two weeks from a plan of ten lines or fewer, with a list of second-phase questions."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write the day-two answer and cap the plan at ten lines"
                - "Set every line's due date no later than day eight"
                - "Stop new analysis on day seven"
                - "List the open questions that could form a second phase"
            - name: Team-of-one workplan for solo engagements
              description: |-
                ## Purpose
                Working alone, you are the analyst, the manager and often the client's only outside voice, so nobody catches a plan that is too big. A lean workplan with honest day estimates, a weekly answer update to the client and a fixed planning slot keeps a solo engagement inside its budget.

                ## Milestones
                1. A workplan sized to the fee, with planned days matching days sold plus a small buffer.
                2. A short weekly answer update sent to the client sponsor.
                3. A fixed weekly planning slot kept for the length of the engagement.
                4. Overruns spotted by week two and raised with the client.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Planned days match sold days within a 10 percent buffer, and an answer update reached the client every week."
                cadence: rolling
              tasks:
                - "Compare planned workplan days with the days in the contract"
                - "Review the plan in your weekly planning slot @recurring(weekly:sun)"
                - "Send the client a short weekly answer update"
                - "Raise any overrun with the client by the end of week two"
            - name: Internal strategy team workplan
              description: |-
                ## Purpose
                Corporate strategy and transformation teams use the same method under different constraints: no fixed end date, stakeholders who outrank the team, and data owned by colleagues with day jobs. Agreeing a decision date with the sponsor and sending a monthly answer update turns an open-ended internal project into one with a finish line.

                ## Milestones
                1. A sponsor-agreed decision date for the work.
                2. Data owners in other departments named on the lines that need them.
                3. A monthly written answer update sent to the sponsor.
                4. The work closed or re-chartered when the decision date arrives.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The internal workplan has a sponsor-agreed decision date, named data owners and a monthly answer update sent until the decision."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree a decision date with the internal sponsor"
                - "Name the data owner in each department on the lines that need them"
                - "Send the sponsor a written answer update @recurring(monthly:3)"
                - "Close or re-charter the work on the decision date"
            - name: Distributed team workplan across time zones
              description: |-
                ## Purpose
                Once half the team sits offshore or several hours away, the check-in that works in one room stops working. A workplan written so anyone can pick up a line overnight, with specs attached, status updated before handover and one written update a week, keeps work moving instead of waiting for the next call.

                ## Milestones
                1. A handover window agreed between locations.
                2. Each line handed across with its spec and expected output attached.
                3. Status updated by each location before its handover.
                4. A weekly written update replacing at least one live meeting.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a month every handover includes updated status and specs, and one weekly written update replaces a live meeting."
                cadence: rolling
              tasks:
                - "Agree a daily handover window between the locations"
                - "Attach a spec and expected output to every line handed across"
                - "Ask each location to update status before its handover"
                - "Post the weekly written workplan update @recurring(weekly:thu)"
            - name: Commercial due diligence workplan
              description: |-
                ## Purpose
                Diligence for an investor runs two to four weeks around one fixed question: does the business plan hold up? The workplan starts from the plan's key claims, such as market growth, share gains and margin expansion, turns each into a hypothesis with a threshold, and plans the expert calls, customer research and data room analysis that test them.

                ## Milestones
                1. Each key claim in the business plan written as a testable hypothesis.
                2. Analyses mapped to data room items, expert calls and customer research.
                3. A red, amber or green view of each claim ready for the midpoint call.
                4. Remaining lines dated to land before the final report.

                ## Notes
                Handle the data room under the engagement's confidentiality terms; the workplan should name documents, not copy their contents.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every business plan claim has a hypothesis, an analysis and a status, with a red, amber or green view ready by the midpoint."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the five to eight claims the business plan depends on"
                - "Turn each claim into a hypothesis with a threshold"
                - "Map each hypothesis to data room items, calls or customer research"
                - "Prepare a red, amber or green status of each claim for the midpoint"
            - name: Survey and market test lines in the workplan
              description: |-
                ## Purpose
                If a hypothesis can only be tested with new primary data, a customer survey or an in-market test, the workplan must carry design, fieldwork and analysis as separate lines with their own lead times. Fixing the sample, the questions tied to each hypothesis and the decision rule before fieldwork stops the data being mined for whatever looks interesting.

                ## Milestones
                1. Each survey question or test metric linked to a named hypothesis.
                2. Sample size and segments agreed with a research specialist or vendor.
                3. Design, fieldwork and analysis entered as separate dated lines.
                4. A decision rule written before results arrive.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every survey question or test metric maps to a hypothesis, and the decision rule is written before fieldwork starts."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Link each draft survey question to the hypothesis it tests"
                - "Agree sample size and segments with a research specialist"
                - "Enter design, fieldwork and analysis as separate dated lines"
                - "Write the decision rule before any results arrive"
            - name: Competing hypotheses under high uncertainty
              description: |-
                ## Purpose
                Questions such as how fast a new technology will be adopted, or what a regulatory change will do, can have two or three plausible answers with no clear favourite. Running competing hypotheses side by side, with analyses chosen because they discriminate between them, and re-weighting each month as evidence lands, avoids betting the engagement on one guess.

                ## Milestones
                1. Two or three competing answers written with rough starting weights.
                2. Analyses chosen for how well they separate the answers, not for coverage.
                3. Weights updated along with the evidence that moved them.
                4. A point agreed at which one answer becomes the lead.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Competing answers are carried with dated weight updates, and the point at which one became the lead is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the two or three competing answers with starting weights"
                - "Pick the analyses that would separate the answers most clearly"
                - "Re-weight the answers from the latest evidence @recurring(monthly:15)"
                - "Agree the evidence point at which one answer becomes the lead"
            - name: Coaching a team in hypothesis-led planning
              description: |-
                ## Purpose
                Experienced managers and principals multiply their effect by teaching juniors to plan this way rather than fixing their plans at midnight. A short, repeatable session, with a practice question, hypotheses drafted alone and then compared and challenged, builds the habit across a team over a few months.

                ## Milestones
                1. A sixty-minute session format with a practice question and a debrief.
                2. Sessions run with the team at a set interval.
                3. Each junior's hypotheses compared with a model answer and discussed.
                4. Juniors drafting their own first workplans with fewer corrections over time.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Coaching sessions run monthly for a quarter, and juniors' workplans need fewer manager corrections by the third session."
                cadence: rolling
              tasks:
                - "Choose a practice question from a public case or a past engagement"
                - "Run the sixty-minute hypothesis session with the team @recurring(monthly:25)"
                - "Compare each junior's hypotheses with a model answer"
                - "Track the corrections needed on each junior's next workplan"
            - name: Red team challenge of the lead hypothesis
              description: |-
                ## Purpose
                Before the answer goes to senior client executives, a small group from outside the engagement spends two hours trying to break it: alternative explanations, weak evidence, missing analyses. Planning the red team into the workplan, with time afterwards to respond, means the hardest questions are asked internally first.

                ## Milestones
                1. Two or three red team members chosen from outside the team.
                2. The answer, evidence log and workplan sent to them in advance.
                3. A two-hour challenge session held, with objections recorded.
                4. Each objection answered, fixed or accepted as a stated limitation.

                ## Notes
                Respect client confidentiality: red team members should be covered by the same confidentiality terms, or see a sanitised version.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A red team session is held before the final readout, with every objection recorded and answered, fixed or noted as a limitation."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose two or three colleagues outside the engagement as the red team"
                - "Send them the answer, evidence log and workplan two days ahead"
                - "Hold the two-hour challenge and record every objection"
                - "Answer, fix or state as a limitation each objection raised"
---

# Hypothesis-Driven Workplans

This area is for the consultant, in a firm or in-house, who wants every analysis on an engagement to exist because it tests something, and an answer on paper long before the final week. It runs from foundations (the day-one answer, the client decision, falsifiable hypotheses, the mapping grid, the workplan file, sources, owners and priorities), through the weekly machinery of check-ins, hypothesis reviews, evidence logs and answer rewrites, to the skills of writing specs, estimating effort and resisting confirmation bias, decisions about cutting and gating work, dated moments such as the partner session and the interim reset, variants for analysts, associates, managers, solo and internal teams, and specialist work like diligence plans, competing hypotheses and red teams.

What repeats is a check-in three times a week, a daily look at outstanding data, weekly hypothesis status, evidence logging, capacity and stop-rule reviews, the Friday answer rewrite, and monthly rhythms for retrospectives, estimate tracking, bias checks, scenario re-weighting and coaching, spread across different days. The **Meeting notes**, **Risk register**, **Metrics log** and **Purchase decision** templates pair with the manager sign-off and post-mortem, the dependency tracker, effort estimates and the tool choice. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
