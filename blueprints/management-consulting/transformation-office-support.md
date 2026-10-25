---
id: management-consulting.transformation-office-support
name: Transformation Office Support
description: "A working transformation office for a client: an agreed value target and baseline, stage gates that mean something, a weekly and monthly governance rhythm, value reconciled with finance and a board report people trust."
category: business
version: 1.0.0
tags: [management-consulting, transformation-office-support, knowledge-worker, transformation-office, pmo, value-tracking, stage-gates, governance]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - risk-register
    - meeting-notes
    - metrics-log
    - onboarding-30-60-90
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Transformation Office Support
          description: "Running a transformation office for a client: initiative pipeline, stage gates, value tracking, governance meetings and reporting to the board."
          projects:
            - name: Transformation value target signed off by the CFO
              description: |-
                ## Purpose
                Programmes launched on a slogan such as "world-class cost base" spend their first quarter arguing about what success means. A single headline target, for example a run-rate EBITDA improvement of a stated amount by a stated month, split by lever and business unit and signed by the chief financial officer, gives every later gate, report and argument something fixed to refer back to.

                ## Milestones
                1. One headline target written with its metric, amount, measurement basis and date.
                2. The target split across levers and business units, with the split adding back to the total.
                3. A stretch figure and a committed figure distinguished, so reporting uses the right one.
                4. Written sign-off from the CFO and the transformation sponsor filed in the programme folder.

                ## Notes
                Agree whether the target is gross or net of the costs to achieve before anyone celebrates a number. Changing that basis halfway through is the most common source of board distrust.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A headline value target with metric, basis, amount and date, split by lever and business unit, signed off in writing by the CFO and sponsor."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the target language used in the board paper or engagement letter"
                - "Draft the target as one sentence with metric, basis, amount and date"
                - "Build the split by lever and business unit and check it sums to the total"
                - "Book thirty minutes with the CFO to agree the committed and stretch figures"
                - "File the signed target where the whole transformation office can find it"
            - name: Transformation office charter and decision rights
              description: |-
                ## Purpose
                Without written authority a transformation office becomes a reporting service that business units humour and then ignore. A two-page charter saying what the office can decide alone, what it recommends to the steering group and what it simply records stops the first stalled initiative turning into a political fight about who is allowed to ask.

                ## Milestones
                1. The office's purpose stated in two sentences the sponsor agrees with.
                2. A decision rights table covering gate approvals, value sign-off, initiative stops and escalations.
                3. The relationship to finance, the project management office and business unit heads written down.
                4. The charter approved by the sponsor and sent to every business unit head.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A charter with a decision rights table approved by the sponsor and circulated to all business unit heads within three weeks of install."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the ten decisions the office will meet most often in the first quarter"
                - "Mark each decision as decide, recommend or record"
                - "Ask the agent to draft a two-page charter from the decision table"
                - "Walk the sponsor through the draft and capture their changes"
                - "Send the approved charter to business unit heads with a short cover note"
            - name: Stage gate definitions from idea to realised value
              description: |-
                ## Purpose
                Most tracking programmes use five or six levels, from a raw idea through validated, planned and executed to value showing in the accounts, but the labels are worthless unless everyone means the same thing by them. Exit criteria for each gate, stated as evidence rather than opinion, decide how much of the pipeline the board can believe.

                ## Milestones
                1. A gate ladder of five or six levels, each with a one-line name and meaning.
                2. Exit criteria for every gate written as documents or facts that must exist.
                3. The approver for each gate named, including where finance must sign.
                4. A worked example initiative walked through every gate and tested with two owners.
                5. The final definitions published in the tracker and the owner guide.

                ## Notes
                Keep the step from executed to realised under finance's control. If initiative owners can promote their own value into the realised column, the totals will drift upward every month.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published gate ladder with evidence-based exit criteria and a named approver at each level, tested on at least one real initiative."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect gate definitions from two previous programmes or the firm's library"
                - "Draft exit criteria for each gate as evidence that must be attached"
                - "Name the approver for each gate and confirm finance owns the last step"
                - "Test the ladder by walking one live initiative through every gate"
            - name: One-page initiative charter standard
              description: |-
                ## Purpose
                When every business unit describes its initiatives differently, the transformation office spends its week translating instead of challenging. A standard one-page charter with the same fields in the same order, covering owner, problem, value, KPI, milestones, dependencies and risks, makes initiatives comparable and makes gaps visible at a glance.

                ## Milestones
                1. A list of required and optional fields agreed with the sponsor and finance.
                2. A one-page charter layout matching the fields in the tracking tool.
                3. Three real initiatives written up in the new format as examples.
                4. The standard and the examples shared with every initiative owner.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page initiative charter standard, mirrored in the tracker, with three completed examples sent to all initiative owners."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the fields the gate criteria and board report actually need"
                - "Cut any field that no meeting or report will ever read"
                - "Lay out the one-page charter in the order owners will think about it"
                - "Rewrite three existing initiatives in the new format as examples"
            - name: Financial baseline agreed with finance
              description: |-
                ## Purpose
                Every saving is measured against something, and if the baseline is not fixed early, owners will pick whichever year or budget makes their number look best. Agreeing the baseline period, the adjustments for one-offs, inflation and volume, and the version of the accounts it comes from protects the programme from its own enthusiasm.

                ## Milestones
                1. The baseline period and source system named, for example the last twelve months of management accounts.
                2. One-off items, acquisitions and disposals adjusted out with each adjustment documented.
                3. Rules for inflation, volume and currency effects written down.
                4. The baseline by business unit and cost line locked and signed by the finance lead.

                ## Notes
                Ask finance to hold a frozen copy of the baseline file. Restated accounts later in the year are normal, and you will need to show what the original numbers were.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A locked baseline by business unit and cost line, with every adjustment documented and signed by the finance lead."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask finance which accounts version and period they would defend to the board"
                - "List one-off items and portfolio changes to adjust out of the baseline"
                - "Write the rules for inflation, volume and currency effects"
                - "Get the locked baseline signed and archive a frozen copy"
            - name: Value counting rules for the programme
              description: |-
                ## Purpose
                Run-rate or in-year, gross or net of costs to achieve, cost avoidance or only hard savings, margin or revenue for commercial levers: each of these choices can move the reported total by a third. Written counting rules, decided once with finance, end the monthly arguments and let two analysts arrive at the same number from the same evidence.

                ## Milestones
                1. A rules page covering run-rate, in-year, recurring and one-off value.
                2. A clear position on cost avoidance, working capital and revenue initiatives.
                3. Worked examples for each rule using real initiatives.
                4. The rules approved by the CFO and linked from every report.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A CFO-approved counting rules page with worked examples, referenced in the footer of every transformation report."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a position on run-rate versus in-year reporting"
                - "Decide with finance whether cost avoidance is reported, and where"
                - "Write a worked example for each rule from a live initiative"
                - "Add a link to the rules in the footer of the dashboard and board pack"
            - name: Named owner and finance validator for every initiative
              description: |-
                ## Purpose
                Initiatives owned by a committee or by the consultants are the ones that stall at the planning gate. Giving each initiative one accountable line manager who will run it after the consultants leave, and one finance partner who will validate its value, turns the tracker from a wish list into a set of personal commitments.

                ## Milestones
                1. Every initiative in the tracker carries one owner and one finance validator by name.
                2. No owner is a consultant, and no person owns more initiatives than they can manage.
                3. Each owner has confirmed the assignment in writing or in a meeting.
                4. A list of unowned initiatives escalated to the sponsor with proposed names.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "One hundred percent of active initiatives show a confirmed client owner and finance validator in the tracker."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the tracker and filter for initiatives with no owner or validator"
                - "Count initiatives per owner and flag anyone carrying too many"
                - "Propose names for every gap and agree them with the business unit heads"
                - "Escalate any initiative still unowned after two weeks to the sponsor"
            - name: Transformation office team and roles
              description: |-
                ## Purpose
                Most transformation offices need five to ten people: a lead, analysts who run the tracker and meetings, a finance lead, a change lead and often lever or business unit coordinators. Deciding which roles the client fills from day one, rather than leaving them all to the consultants, is the single biggest factor in whether the office survives the handover.

                ## Milestones
                1. A role list with responsibilities for each seat in the office.
                2. Each seat marked as client, consultant or shared, with a named person.
                3. A target date for every consultant-held seat to pass to a client person.
                4. The team list shared with the sponsor and the business unit heads.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A transformation office team list with named people in every role and a handover date for each consultant-held seat."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the roles the office needs for the size of this programme"
                - "Mark which roles the client can fill now and which need consultants first"
                - "Agree names for the client seats with the sponsor"
                - "Write a handover date against every consultant-held seat"
            - name: Choosing the initiative tracking tool
              description: |-
                ## Purpose
                Spreadsheets are quick to start and painful at two hundred initiatives with forty editors, while dedicated transformation tracking platforms bring workflow and audit trails at a licence cost and a set-up effort. Choosing deliberately, against the size of the programme, the client's IT rules and who will own the tool after you leave, saves a painful migration in month four.

                ## Milestones
                1. Requirements written: number of initiatives, users, gate workflow, finance sign-off and reporting.
                2. Two or three options compared, including a well-built spreadsheet.
                3. Client IT and data security requirements checked for each option.
                4. A choice recorded with cost, owner after handover and set-up date.

                ## Notes
                Start from the **Purchase decision** template. Ask who will pay the licence in year two; tools chosen by the consultants are often switched off the month they leave.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tool decision comparing at least two options against written requirements, with a named client owner after handover."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Estimate initiatives, users and reports the tool must handle in year one"
                - "Shortlist two platforms and a structured spreadsheet option"
                - "Ask client IT which data and access rules apply to each option"
                - "Record the decision and the client owner who will run it after handover"
            - name: Governance calendar for the transformation
              description: |-
                ## Purpose
                Governance works when every initiative knows when it will be reviewed and every executive knows when decisions will be asked of them. Mapping the weekly owner reviews, gate panels, monthly executive meeting and quarterly board slot into one calendar, aligned to the month-end close, stops reporting falling a week behind the numbers.

                ## Milestones
                1. Each governance forum listed with purpose, chair, attendees and frequency.
                2. Meeting dates set against the month-end close so value numbers are ready in time.
                3. Invitations for the first quarter sent from the right diaries.
                4. The calendar published on one page and attached to the charter.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page governance calendar covering every forum for the next quarter, with invitations sent and dates aligned to the close."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask finance for the month-end close calendar for the next two quarters"
                - "List each forum with chair, attendees and frequency"
                - "Place the monthly executive meeting after the value numbers are ready"
                - "Send first-quarter invitations through the executive assistants"
            - name: Weekly initiative owner check-ins
              description: |-
                ## Purpose
                Owners rarely volunteer that a milestone has slipped, but they will tell you in a fifteen-minute call if you ask the same three questions every week. A short standing check-in with each owner or lever lead catches slippage while it is still a few days and keeps the tracker current without a chase email.

                ## Milestones
                1. A rota of short weekly check-ins covering every active initiative or lever.
                2. The same three questions asked each time: milestones, value, blockers.
                3. Tracker updates made during or straight after each call.
                4. Blockers that need help routed to the right forum within the week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ninety percent of active initiatives have a tracker update dated within the last seven days, every week for a quarter."
                cadence: rolling
              tasks:
                - "Build the check-in rota by lever and owner"
                - "Run the owner check-ins and update the tracker in the call @recurring(weekly:tue)"
                - "Route each new blocker to the gate panel or steering group"
                - "Agree a fortnightly rhythm for owners who are consistently on track"
            - name: Weekly gate movement and pipeline report
              description: |-
                ## Purpose
                The board cares about realised value, but the leading signal is movement through the gates: which initiatives advanced, which slipped back and how much value sits at each level. A short weekly pipeline report, the same layout every week, lets the sponsor see in a minute whether the funnel is filling or stalling.

                ## Milestones
                1. A fixed report layout showing value by gate and movement since last week.
                2. A short list of initiatives that moved forward, moved back or went quiet.
                3. The report sent to the sponsor and lever leads on the same day each week.
                4. A record of past reports kept so trends can be shown.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pipeline report in the same layout is sent every week for twelve consecutive weeks, with gate movements listed."
                cadence: rolling
              tasks:
                - "Design the one-page pipeline layout with value by gate"
                - "Pull gate movements from the tracker and send the report @recurring(weekly:thu)"
                - "Flag any initiative with no movement for six weeks in the report"
                - "Archive each report in a dated folder"
            - name: Monthly value reconciliation with finance
              description: |-
                ## Purpose
                The tracker says one number and the management accounts say another, and the board will believe the accounts. Sitting with the finance lead each month after the close to reconcile tracked value to actual P&L movement, line by line for the large initiatives, is what makes the realised column worth reporting.

                ## Milestones
                1. A reconciliation template linking initiatives to cost centres or P&L lines.
                2. The ten largest initiatives reconciled to actuals each month.
                3. Differences explained and either corrected in the tracker or noted as timing.
                4. Finance sign-off on the realised value figure before it goes into any report.

                ## Notes
                Schedule this the working day after finance releases the monthly results, not before. Reconciling against provisional numbers doubles the work.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's realised value figure is signed off by finance, with the ten largest initiatives reconciled to actuals."
                cadence: rolling
              tasks:
                - "Map the largest initiatives to the cost centres or P&L lines they affect"
                - "Reconcile tracked value to the month's actuals with the finance lead @recurring(monthly:8)"
                - "Correct the tracker or note timing differences for every gap"
                - "Record finance's sign-off on the realised figure"
            - name: Monthly executive transformation dashboard
              description: |-
                ## Purpose
                Executives give the transformation perhaps ten minutes a month, so the dashboard has to show in one page whether the programme is on track against target, where the gaps are and what decisions are needed. Building it once with a fixed layout and the same definitions every month makes changes visible instead of buried.

                ## Milestones
                1. A one-page layout: value against target, pipeline by gate, top risks and decisions requested.
                2. Every number traceable to the tracker and the finance reconciliation.
                3. The dashboard issued two working days before the executive meeting.
                4. A short commentary in plain sentences under each chart.

                ## Notes
                Start from the **Metrics log** template to keep each month's headline numbers in one place, so trend lines do not depend on finding old decks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page dashboard in a fixed layout is issued two working days before every monthly executive meeting for six months."
                cadence: rolling
              tasks:
                - "Sketch the one-page layout and agree it with the sponsor"
                - "Build and issue the executive dashboard from reconciled numbers @recurring(monthly:12)"
                - "Write two lines of commentary under each chart"
                - "Add the month's headline figures to the metrics log"
            - name: Programme risk and issue register
              description: |-
                ## Purpose
                Transformation risks are rarely technical: a union negotiation, a supplier contract that cannot be exited, a business unit head who has quietly stopped attending. A single register for programme-level risks and issues, reviewed weekly and owned by named people, makes those visible before they become a missed quarter.

                ## Milestones
                1. One register with likelihood, impact, owner, mitigation and review date for each entry.
                2. Programme-level risks separated from risks inside individual initiatives.
                3. A weekly review that closes, updates or escalates every open entry.
                4. The top five risks shown in the monthly dashboard.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A programme risk register with owners and dates for every entry, reviewed weekly, with the top five risks in each dashboard."
                cadence: rolling
              tasks:
                - "Seed the register with risks raised in the first owner check-ins"
                - "Review open risks and issues with the office lead @recurring(weekly:mon)"
                - "Assign a named owner and review date to every entry"
                - "Copy the top five risks into the monthly dashboard"
            - name: Cross-initiative dependency tracker
              description: |-
                ## Purpose
                Procurement savings that depend on a system change, or a headcount reduction that depends on a process redesign in another business unit, slip if nobody watches the join. Recording dependencies between initiatives, and the date each one is needed, shows the sponsor where one late delivery would knock over several others.

                ## Milestones
                1. Every dependency recorded with the giving initiative, receiving initiative and date needed.
                2. Dependencies on shared functions such as IT, HR and legal visible in one view.
                3. The five most critical dependencies reviewed each month with both owners.
                4. Missed dependency dates escalated within a week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dependency list covering all active initiatives, with the five most critical reviewed with both owners every month."
                cadence: rolling
              tasks:
                - "Ask each owner which other initiatives or functions they depend on"
                - "Record each dependency with the date it is needed"
                - "Review the five most critical dependencies with both owners @recurring(monthly:15)"
                - "Escalate any missed dependency date to the gate panel"
            - name: Gate review panel routine
              description: |-
                ## Purpose
                Gates only protect the pipeline if someone actually reviews the evidence before an initiative moves. A short weekly panel, with the office lead, a finance representative and the relevant lever lead, approves, returns or rejects gate requests against the written criteria and gives owners a fast, predictable answer.

                ## Milestones
                1. A standing panel with named members and a quorum rule.
                2. A submission deadline so papers arrive a day before the panel.
                3. Each decision recorded as approved, returned with reasons or rejected.
                4. An average decision time of one week or less from submission.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Gate requests receive a recorded decision within seven days of submission, every week for a quarter."
                cadence: rolling
              tasks:
                - "Agree panel members, quorum and the submission deadline"
                - "Run the gate panel and record each decision with reasons @recurring(weekly:wed)"
                - "Send owners the outcome and any missing evidence the same day"
                - "Track average days from submission to decision"
            - name: Decision and action log for governance meetings
              description: |-
                ## Purpose
                Steering groups and executive meetings agree things that nobody can find three weeks later, and the same issue is debated again. Keeping one running log of decisions and actions across every transformation forum, with owners and dates, gives the office the authority to say this was already decided, on this date.

                ## Milestones
                1. One log for all forums with date, forum, decision or action, owner and due date.
                2. Entries added within one working day of each meeting.
                3. Open actions reviewed weekly and chased before they go overdue.
                4. Overdue actions listed at the start of the next meeting.

                ## Notes
                Start from the **Meeting notes** template for each forum, and copy only the decisions and actions into the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every governance meeting's decisions and actions are in the log within one working day, and overdue actions open each next meeting."
                cadence: rolling
              tasks:
                - "Set up the decision and action log with the agreed columns"
                - "Chase open actions and update the log @recurring(weekly:fri)"
                - "Add entries from each meeting within one working day"
                - "Put overdue actions at the top of each meeting's agenda"
            - name: Quarterly board transformation report
              description: |-
                ## Purpose
                Boards ask three questions about a transformation: are we on track to the target, is the value real, and what do you need from us. A quarterly report of three or four pages, built from the same reconciled numbers as the executive dashboard and written in plain sentences, answers those questions without the board needing to read the tracker.

                ## Milestones
                1. A standing structure: progress against target, realised versus forecast value, key risks, asks of the board.
                2. Numbers matched exactly to the finance-signed monthly figures.
                3. The draft reviewed by the CFO and sponsor a week before papers close.
                4. Board questions and answers recorded for the next report.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each quarter's board report uses finance-signed figures and is approved by the CFO and sponsor before the board papers deadline."
                cadence: cyclic
              tasks:
                - "Ask the company secretary for the board papers deadlines this year"
                - "Draft the quarterly board report from the latest reconciled figures @recurring(quarterly)"
                - "Book the CFO and sponsor review a week before papers close"
                - "Record the board's questions and answers after the meeting"
            - name: Tracker data quality sweep
              description: |-
                ## Purpose
                Trackers with stale milestones, missing owners and initiatives that have sat at the same gate for months stop being believed, and then stop being updated. A monthly sweep against a short checklist of data rules keeps it clean enough that the dashboard can be built straight from it.

                ## Milestones
                1. A checklist of data rules: owner present, dates in the future, value matches gate, evidence attached.
                2. A monthly exception list sent to owners with what needs fixing.
                3. Exceptions down to fewer than one in ten initiatives.
                4. Repeat offenders raised with the lever leads.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fewer than ten percent of active initiatives fail a data rule at the monthly sweep for three months running."
                cadence: rolling
              tasks:
                - "Write six data rules every initiative record must pass"
                - "Run the data rules and send each owner their exceptions @recurring(monthly:26)"
                - "Count exceptions and track the rate month by month"
                - "Raise owners with repeat exceptions with their lever lead"
            - name: Idea funnel for new initiatives
              description: |-
                ## Purpose
                Pipelines decay: some initiatives deliver less than planned and some are stopped, so a programme that stops generating ideas after the first wave usually lands below target. A simple standing route for new ideas, from any employee or lever lead into the first gate, keeps the pipeline above the target with a sensible buffer.

                ## Milestones
                1. A short idea form and a single place to send it.
                2. A monthly triage that accepts, merges or declines each idea with a reason.
                3. The pipeline held at a stated buffer above target, for example a third.
                4. Accepted ideas given an owner and entered at the first gate.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Total pipeline value stays at or above the agreed buffer over target, with new ideas triaged every month."
                cadence: rolling
              tasks:
                - "Create a five-question idea form and share where to send it"
                - "Triage new ideas with the lever leads @recurring(monthly:18)"
                - "Reply to every idea submitter with the outcome"
                - "Compare pipeline value with target plus buffer each month"
            - name: Building an EBITDA bridge from baseline to actual
              description: |-
                ## Purpose
                Executives want to see how the business got from baseline profit to this year's profit, and how much of the change is the transformation rather than volume, price, inflation or currency. Learning to build that bridge cleanly, and to explain each bar, is the skill that separates a transformation office the CFO trusts from one they tolerate.

                ## Milestones
                1. The standard bridge categories for this client listed and defined.
                2. A practice bridge built from last year's actuals with finance's help.
                3. Transformation value shown as its own bar, reconciled to the tracker.
                4. The bridge explained aloud to a colleague in under three minutes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bridge from baseline to actual EBITDA with a separate, reconciled transformation bar, reviewed and accepted by the finance lead."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask finance for the bridge categories they use in the annual results"
                - "Build a practice bridge from last year's actuals"
                - "Isolate the transformation bar and reconcile it to the tracker"
                - "Present the bridge to the finance lead and note their corrections"
            - name: Evidence standards for realised value
              description: |-
                ## Purpose
                A signed supplier contract, a person off the payroll, a lower invoice price and a closed site are evidence; an owner's spreadsheet saying the saving has happened is not. Learning to tell the difference, and writing down the evidence each type of lever needs, is what lets the transformation office say no politely and consistently.

                ## Milestones
                1. An evidence list by lever type: procurement, workforce, footprint, commercial and working capital.
                2. Examples of acceptable and unacceptable evidence for each.
                3. The list agreed with finance and attached to the gate criteria.
                4. Five recent realised claims checked against the new standard.

                ## Notes
                Expect pressure to count value early near quarter end. A written standard, agreed in advance, is far easier to hold than a judgement made under that pressure.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An evidence standard by lever type, agreed with finance, applied to at least five realised value claims."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the lever types in the programme"
                - "Write acceptable and unacceptable evidence for each lever type"
                - "Agree the evidence list with the finance lead"
                - "Check five recent realised claims against the standard"
            - name: Challenging an initiative business case
              description: |-
                ## Purpose
                Initiative owners often double-count, assume full-year value from month one or ignore the costs to achieve, and they are usually senior to the analyst reviewing them. Practising a standard set of challenge questions, asked with curiosity rather than suspicion, lets you improve the number without losing the owner's goodwill.

                ## Milestones
                1. A list of ten challenge questions covering baseline, ramp-up, overlap, costs and risk.
                2. Three business cases reviewed using the questions, with changes recorded.
                3. Feedback from one owner on how the challenge felt.
                4. The questions shared with the rest of the office.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten written challenge questions used on three business cases, with the value changes from each review recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write ten challenge questions from past gate rejections"
                - "Use the questions on three business cases at the planning gate"
                - "Record how much each case changed after challenge"
                - "Ask one owner for honest feedback on the review"
            - name: Milestone plans that show the critical path
              description: |-
                ## Purpose
                Twenty milestones with no sense of which three really matter tell the office nothing about risk. Learning to build initiative plans around the few milestones that release value, such as a contract signature or a consultation closing, makes slippage obvious and lets check-ins focus on the right dates.

                ## Milestones
                1. The critical milestones identified for five large initiatives.
                2. Each critical milestone linked to the value it releases.
                3. Plans trimmed to the milestones the office will actually track.
                4. A one-page guide for owners on writing milestone plans.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five large initiatives have plans marking critical milestones linked to value, and an owner guide is published."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick the five largest initiatives by value"
                - "Mark the milestones on each that release value"
                - "Remove milestones the office will never track"
                - "Write a one-page owner guide to milestone plans"
            - name: KPI trees linking operations to value
              description: |-
                ## Purpose
                Financial value shows up months after the operational change that causes it, so the office needs operational indicators that predict it: supplier price per unit, overtime hours, conversion rate, days sales outstanding. A KPI tree for each lever links those indicators to value, and lets the office see trouble a quarter early.

                ## Milestones
                1. A KPI tree for each major lever from operational driver to financial value.
                2. One or two leading indicators chosen per initiative, with data sources named.
                3. Baselines recorded for each indicator.
                4. Leading indicators added to the monthly dashboard.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Each major lever has a KPI tree, and the monthly dashboard shows at least one leading indicator per large initiative."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw a KPI tree for the largest lever with its owner"
                - "Pick one or two leading indicators per large initiative"
                - "Confirm the data source and baseline for each indicator"
                - "Add the leading indicators to the dashboard"
            - name: Status writing for a two-minute board read
              description: |-
                ## Purpose
                Transformation status written as "workstream progressing well, some challenges" tells a director nothing. Practising a tighter style, where every status line says what changed, what it means for value and what is needed, makes reports shorter and gets faster decisions.

                ## Milestones
                1. A status line format: what changed, impact on value, ask.
                2. Ten old status updates rewritten in the new format.
                3. A peer or manager review of the rewrites.
                4. The format adopted in the weekly and monthly reports.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten status updates rewritten in a what changed, impact, ask format and the format used in every report for a month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect ten vague status updates from past reports"
                - "Ask the agent to suggest tighter rewrites, then edit them yourself"
                - "Get your manager to mark which rewrites work"
                - "Use the format in next week's pipeline report"
            - name: Running a thirty-minute initiative review
              description: |-
                ## Purpose
                Lever reviews that run for ninety minutes and walk every initiative line by line exhaust everyone and decide little. Learning to run them by exception, showing only red and amber items, pre-reading the tracker and closing each item with a decision or an action, gives owners their time back and makes the meeting worth attending.

                ## Milestones
                1. A standard agenda based on exceptions rather than a full walk-through.
                2. Pre-read sent a day ahead with the items to discuss.
                3. Every item closed with a decision, an action or a deferral with a date.
                4. Three reviews run to thirty minutes or less.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three consecutive lever reviews run to thirty minutes or less with every discussed item closed by a decision or action."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Rewrite the review agenda to cover red and amber items only"
                - "Send a one-page pre-read the day before"
                - "Close each item aloud with a decision, action or dated deferral"
                - "Time the next three reviews and note what ran over"
            - name: Portfolio prioritisation by value and effort
              description: |-
                ## Purpose
                Two hundred initiatives cannot all get the same attention, and a few large ones usually carry most of the value. Ranking the portfolio by value, confidence and effort, and agreeing with the sponsor which initiatives get weekly scrutiny and which get monthly, puts the office's limited hours where the money is.

                ## Milestones
                1. Every initiative scored on value, confidence and effort with a short scale.
                2. A small set of priority initiatives agreed for weekly review.
                3. Low-value initiatives grouped or moved to a lighter reporting rhythm.
                4. The prioritisation repeated each quarter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored portfolio with an agreed priority list, refreshed each quarter and reflected in the review rhythm."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Score every initiative on value, confidence and effort"
                - "Sort the portfolio and find where most of the value sits"
                - "Agree the weekly priority list with the sponsor"
                - "Rescore the portfolio and refresh the priority list @recurring(quarterly)"
            - name: Stopping or pausing stalled initiatives
              description: |-
                ## Purpose
                Every programme has initiatives that have sat at the same gate for months, kept alive because nobody wants to admit they will not deliver. Clear rules for when an initiative is paused, stopped or replaced, applied in the open, keep the pipeline honest and free owners for work that will land.

                ## Milestones
                1. Written rules, for example no gate movement in eight weeks triggers a review.
                2. A list of initiatives meeting the rules, reviewed with each owner.
                3. Each one recorded as continued with a new plan, paused or stopped.
                4. Lost value replaced through the idea funnel.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Stop and pause rules approved by the sponsor and applied to every stalled initiative, with each outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft the stop and pause rules for the sponsor to approve"
                - "List initiatives that have not moved gates in eight weeks"
                - "Meet each owner and record continue, pause or stop"
                - "Report stopped value and its replacement in the next dashboard"
            - name: Locking transformation value into the budget
              description: |-
                ## Purpose
                Savings that are delivered but not removed from next year's budget tend to be spent again, and the programme's value quietly disappears. Working with finance so that validated value is taken out of the budget and, where the client wants it, reflected in managers' scorecards is what makes the gains stick.

                ## Milestones
                1. The budget calendar and the point where transformation value is applied agreed with finance.
                2. Validated run-rate value by cost centre fed into the budget build.
                3. Business unit budgets checked to show the reduction.
                4. A sponsor decision recorded on whether value targets link to incentives.

                ## Notes
                Incentive design is the client's HR and remuneration committee's decision. The office's job is to give them reliable numbers, not to set the scheme.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Validated run-rate value is visible as a reduction in next year's business unit budgets, confirmed by finance."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask finance when the budget build starts and how value can be applied"
                - "Provide validated run-rate value by cost centre to the budget team"
                - "Check the submitted budgets show the agreed reductions"
                - "Record the sponsor's decision on incentive links"
            - name: Cutting the reporting burden on initiative owners
              description: |-
                ## Purpose
                When owners spend two hours a week feeding the transformation office, the office has become part of the problem it was created to solve. Reviewing every field, report and meeting the office asks of owners, and removing what nobody uses, improves both data quality and goodwill.

                ## Milestones
                1. A list of every request the office makes of owners, with time taken for each.
                2. Each request matched to the report or decision that uses it.
                3. Unused fields and duplicate reports removed.
                4. Owner time per week measured again after the changes.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Owner reporting time per week is measured before and after, with at least a quarter of the requests removed or merged."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask five owners how long office requests take each week"
                - "List every field, report and meeting asked of owners"
                - "Remove anything no report or decision uses"
                - "Measure owner time again a month later"
            - name: Value leakage investigation from tracker to P&L
              description: |-
                ## Purpose
                When the tracker shows a large realised figure and the profit line has not moved, the board will eventually notice. Investigating the gap, whether it comes from volume, inflation, offsetting cost growth or claims that were never real, and explaining it plainly is better done by the office before someone else does it.

                ## Milestones
                1. The gap between tracked value and P&L movement sized by business unit.
                2. Causes sorted into volume, inflation, offsetting growth, timing and invalid claims.
                3. Invalid claims removed from the tracker with owners told why.
                4. A short note to the sponsor explaining the gap and the corrections.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written explanation of the gap between tracked and P&L value by cause, with invalid claims corrected in the tracker."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Size the gap between tracked value and P&L movement by business unit"
                - "Ask finance for volume, inflation and other movements in the same period"
                - "Test the largest realised claims against their evidence"
                - "Write the sponsor a one-page note on causes and corrections"
            - name: Rebasing targets after a major business change
              description: |-
                ## Purpose
                An acquisition, a disposal, a currency shock or a big change in volumes can make the original baseline and target meaningless. Handling a rebase openly, with the logic written down and approved, keeps the programme credible instead of looking like it moved the goalposts.

                ## Milestones
                1. The triggering event and its effect on baseline and target sized.
                2. Options set out: rebase, adjust, or report on the old basis with a note.
                3. A decision taken by the sponsor and CFO and recorded.
                4. All reports updated with a clear note on the new basis and the date it changed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded sponsor and CFO decision on rebasing, with every report from that date carrying a note on the basis used."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Size the effect of the change on baseline and target"
                - "Write up the three options with pros and cons"
                - "Take the options to the sponsor and CFO for a decision"
                - "Add a basis note to every report after the change"
            - name: Costs to achieve tracked against the value case
              description: |-
                ## Purpose
                Severance, consultants, systems and double running costs can eat a large share of the first year's value, and boards increasingly ask for net figures. Tracking costs to achieve by initiative alongside value shows the real payback and avoids an awkward surprise when the CFO asks.

                ## Milestones
                1. Cost categories agreed with finance: people, external spend, systems, one-off running costs.
                2. Forecast costs captured for every initiative at the planning gate.
                3. Actual costs reconciled monthly from finance records.
                4. Net value and payback shown in the executive dashboard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every initiative past the planning gate shows forecast and actual costs to achieve, with net value in the monthly dashboard."
                cadence: rolling
              tasks:
                - "Agree the cost categories with finance"
                - "Add a costs to achieve field to the planning gate criteria"
                - "Reconcile actual costs to achieve from finance records @recurring(monthly:10)"
                - "Show net value and payback in the dashboard"
            - name: Transformation office launch fortnight
              description: |-
                ## Purpose
                The first two weeks set the tone: whether the office is seen as a helpful engine or a reporting tax. A planned launch covering the sponsor's announcement, owner briefings, tracker access, the first check-ins and a first pipeline report gets the rhythm running before anyone forms an opinion.

                ## Milestones
                1. A sponsor message announcing the office and its purpose sent to all owners.
                2. Every initiative owner briefed and given tracker access.
                3. First-round check-ins completed with every owner.
                4. The first weekly pipeline report issued by the end of week two.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within fourteen days all owners are briefed with tracker access and the first pipeline report has been issued."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Draft the sponsor's launch message for their approval"
                - "Book short briefings for every initiative owner"
                - "Confirm tracker access for every owner and finance validator"
                - "Issue the first pipeline report at the end of week two"
            - name: Initiative owner onboarding session
              description: |-
                ## Purpose
                Owners join a programme with little idea what a gate is, what evidence they need or why finance keeps rejecting their claims. A sixty-minute onboarding session covering the gates, the charter, counting rules and the weekly rhythm, repeated for each new wave, saves dozens of one-to-one explanations.

                ## Milestones
                1. A short slide pack covering gates, charters, counting rules and the rhythm.
                2. A worked example initiative taken from idea to realised.
                3. The session delivered to all current owners.
                4. A recording or written guide for owners who join later.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All current initiative owners attend a sixty-minute onboarding session, and a guide exists for later joiners."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Outline the session around one worked example initiative"
                - "Build a short pack covering gates, charters and counting rules"
                - "Run the session and collect owners' questions"
                - "Turn the questions into a written guide for later joiners"
            - name: Hundred-day transformation review
              description: |-
                ## Purpose
                Around day one hundred the sponsor needs an honest view of whether the programme is on course, and the office needs to fix what is not working before habits set. A structured review of value, pipeline, governance and the office itself gives the steering group a basis for course corrections.

                ## Milestones
                1. Value and pipeline compared with the trajectory needed to reach target.
                2. Feedback gathered from ten owners and three executives.
                3. Three to five changes to the office or governance proposed.
                4. Decisions on the changes recorded by the steering group.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A hundred-day review with value against trajectory, stakeholder feedback and recorded steering group decisions on proposed changes."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Plot value and pipeline against the trajectory to target"
                - "Interview ten owners and three executives on what works"
                - "Propose three to five changes with reasons"
                - "Record the steering group's decisions on each change"
            - name: Second wave initiative launch
              description: |-
                ## Purpose
                First waves pick the obvious ideas, and by month five or six the pipeline usually needs a second wave to stay on target. Planning that wave deliberately, with fresh diagnostics, new owners and a launch date, keeps the programme from depending on its first-wave initiatives overperforming.

                ## Milestones
                1. The value gap the second wave must close sized against target and buffer.
                2. Candidate levers and business units chosen for new diagnostics.
                3. New initiatives entered at the first gate with owners named.
                4. A launch session held and the new initiatives added to the review rhythm.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A second wave of initiatives, sized to close the stated gap, is entered in the tracker with owners and launched."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Size the gap between pipeline and target plus buffer"
                - "Choose the levers and units for second wave diagnostics"
                - "Enter new initiatives at the first gate with named owners"
                - "Hold the second wave launch and add initiatives to the rota"
            - name: Year-end value certification
              description: |-
                ## Purpose
                At year end the programme's realised value goes into the annual report, investor messages or management bonuses, so it must stand up to scrutiny from finance and sometimes the auditors. A formal certification, initiative by initiative for the large ones, gives the CFO a number they will put their name to.

                ## Milestones
                1. The year's realised value reconciled to the audited or final accounts.
                2. Evidence files checked for the initiatives making up most of the value.
                3. A certification note signed by the CFO or finance lead.
                4. Lessons on evidence and counting fed into next year's rules.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A certified annual realised value figure, reconciled to the final accounts and signed by the CFO or finance lead."
                cadence: cyclic
                effort_hours_estimate: "20"
              tasks:
                - "Agree the certification timetable with finance before year end"
                - "Check evidence files for the initiatives carrying most value"
                - "Prepare and certify the year's realised value with finance @recurring(yearly)"
                - "Update counting rules with lessons from the certification"
            - name: Handing the transformation office to the client
              description: |-
                ## Purpose
                Consultants leave and the office either keeps running under client people or collapses into a quarterly spreadsheet. Planning the handover months ahead, with client staff chairing meetings, owning the tracker and producing the dashboard before the consultants go, is the measure of whether the work lasts.

                ## Milestones
                1. A handover plan with dates for each role, meeting and report.
                2. Client staff chairing the gate panel and owner check-ins for at least a month before exit.
                3. The tracker, rules, templates and archive transferred with access confirmed.
                4. A sponsor sign-off that the client team runs the office unaided.
              priority: high
              deadlineOffsetDays: 300
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Client staff have run every office routine unaided for a month, and the sponsor has signed off the handover."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Draft a handover plan with a date for every role and routine"
                - "Have client staff chair the gate panel while you observe"
                - "Transfer the tracker, rules and archive and confirm access"
                - "Ask the sponsor to sign off the handover"
            - name: First posting to a transformation office as an analyst
              description: |-
                ## Purpose
                Junior consultants are often put in the transformation office because it needs hands, and it can feel like administration. Treating it as a vantage point, where you see the whole client, learn finance and get senior exposure, turns the posting into one of the most useful early roles you can have.

                ## Milestones
                1. The tracker, gate ladder and counting rules understood well enough to explain.
                2. A working relationship with the finance lead and two lever leads.
                3. One improvement to a report or routine shipped under your name.
                4. Written feedback from your manager at the midpoint and end of the posting.

                ## Notes
                Start from the **Onboarding 30/60/90** template to plan your first three months on the posting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 30/60/90 plan completed, one shipped improvement and written manager feedback at the midpoint and end of the posting."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a 30/60/90 plan and share it with your manager"
                - "Ask the finance lead for an hour on how the accounts are built"
                - "Pick one report or routine to improve and agree it with your manager"
                - "Note one thing you learned about the client each week @recurring(weekly:thu)"
            - name: Leading a transformation office as engagement manager
              description: |-
                ## Purpose
                An engagement manager running a transformation office is balancing the sponsor's need for momentum, finance's need for rigour, owners' patience and a consulting team that may be stretched across levers. Setting out how you will spend your week, and keeping the partner informed, prevents the office from drifting into pure reporting.

                ## Milestones
                1. A weekly time plan across sponsor, finance, lever leads and the team.
                2. A fortnightly one-to-one with the sponsor in the calendar.
                3. A weekly note to the partner on value, risks and client mood.
                4. A plan for each team member's development on the engagement.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A weekly partner note sent every week and a fortnightly sponsor one-to-one held for the life of the engagement."
                cadence: rolling
              tasks:
                - "Block your week across sponsor, finance, lever leads and team"
                - "Book a fortnightly one-to-one with the sponsor"
                - "Send the partner a short note on value, risks and mood @recurring(weekly:fri)"
                - "Agree a development goal with each team member"
            - name: Client secondee in the transformation office
              description: |-
                ## Purpose
                Secondees from the client business are the people who will run the office after the consultants leave, yet they are often given the least interesting work. Planning a secondment so the client person learns the methods, builds their own relationships and takes on visible roles is what makes the handover real.

                ## Milestones
                1. Secondment goals agreed with the secondee and their home manager.
                2. The secondee owning at least one routine end to end within six weeks.
                3. A monthly review of progress against goals.
                4. A return or permanent role agreed before the secondment ends.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The secondee owns at least one office routine within six weeks and has a monthly goal review for the whole secondment."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree secondment goals with the secondee and their home manager"
                - "Hand the secondee one routine to run end to end"
                - "Review progress against goals with the secondee @recurring(monthly:3)"
                - "Agree the secondee's next role before the secondment ends"
            - name: Interim transformation office lead as an independent
              description: |-
                ## Purpose
                Independent consultants are often hired to run a transformation office alone, with client analysts and no firm behind them. Setting scope, reporting lines, a clear end date and a handover plan in the contract, and bringing your own templates, protects both you and the client from an open-ended role.

                ## Milestones
                1. Scope, reporting line and end date written into the contract.
                2. Your own tracker, gate and dashboard templates ready to adapt.
                3. Client analysts assigned to the office from week one.
                4. A handover milestone agreed before the contract's end date.

                ## Notes
                Check whether the client expects you to own outcomes or run the process. Being held to a savings number you do not control is a common source of disputes.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A contract stating scope, reporting line, end date and handover milestone, with client analysts assigned in the first week."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write scope, reporting line and end date into the contract draft"
                - "Prepare your own tracker and dashboard templates to adapt"
                - "Ask the sponsor to assign client analysts before you start"
                - "Agree a handover milestone with the sponsor"
            - name: Integration management office for merger synergies
              description: |-
                ## Purpose
                After a merger the transformation office becomes an integration management office tracking synergies promised to investors, often under clean team rules before completion. Adapting the gates, counting rules and governance to tracking synergies, including revenue and cost synergies and their phasing, keeps the deal case honest.

                ## Milestones
                1. The synergies in the deal case translated into trackable initiatives.
                2. Clean team and competition law limits on pre-completion data confirmed with counsel.
                3. Counting rules adapted for cost and revenue synergies and dis-synergies.
                4. Reporting on synergies aligned to what investors were told.

                ## Notes
                Before completion, information sharing between the two companies is restricted. Follow the client's legal advice on what the integration office can see.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "The synergies promised in the deal case are loaded as tracked initiatives under counsel-approved data rules, with reporting matched to investor commitments."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Get the deal case from the deal team and list each promised saving"
                - "Ask counsel which data the office may see before completion"
                - "Adapt counting rules for revenue synergies and dis-synergies"
                - "Match reporting on synergies to what investors were told"
            - name: Valuing technology and enabling initiatives
              description: |-
                ## Purpose
                A new ERP, a data platform or a process redesign often enables value elsewhere without delivering any directly, and programmes either ignore it or double-count it. A clear treatment, where enablers are tracked by milestones and the value sits with the initiatives that depend on them, keeps the totals clean and the enablers visible.

                ## Milestones
                1. Enabling initiatives identified and tagged in the tracker.
                2. A rule that value sits with dependent initiatives, not the enabler.
                3. Milestone and adoption measures set for each enabler.
                4. Enabler delays shown with the dependent value at risk.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every enabling initiative is tagged with milestone measures and the dependent value at risk shown in the dashboard."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Tag enabling initiatives in the tracker"
                - "Link each enabler to the initiatives that depend on it"
                - "Set milestone and adoption measures for each enabler"
                - "Show dependent value at risk when an enabler slips"
            - name: Risk-weighted forecast of programme value
              description: |-
                ## Purpose
                Adding up every initiative's planned value overstates what will land, because early-gate ideas often deliver a fraction of their plan. Applying probabilities by gate, calibrated against the programme's own history, gives the board a forecast it can plan around and shows how much pipeline is really needed.

                ## Milestones
                1. Conversion rates by gate calculated from the programme's own history.
                2. A risk-weighted forecast built for the year and the full target date.
                3. The forecast compared with the unweighted total in the board report.
                4. Probabilities recalibrated each quarter as history grows.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk-weighted value forecast using gate probabilities from the programme's own history, recalibrated each quarter."
                cadence: rolling
              tasks:
                - "Calculate how much planned value each gate has delivered so far"
                - "Build a risk-weighted forecast to the target date"
                - "Recalibrate gate probabilities and refresh the forecast @recurring(quarterly)"
                - "Show weighted and unweighted totals side by side for the board"
            - name: Benefits realisation audit a year after close
              description: |-
                ## Purpose
                Twelve months after a programme ends, the question is whether the value is still there or has crept back. An audit of the largest initiatives, comparing the run-rate at close with today's actuals, gives the client an honest record and is a strong basis for any follow-on conversation.

                ## Milestones
                1. The largest initiatives at close listed with their run-rate value.
                2. Current actuals obtained for each from finance.
                3. Sustained, partly eroded and lost value sorted with causes.
                4. A short report to the sponsor or their successor.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written audit of the largest initiatives comparing run-rate at close with current actuals, shared with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the largest initiatives and their run-rate at close"
                - "Ask finance for current actuals on each"
                - "Sort value into sustained, eroded and lost with causes"
                - "Send a short audit report to the sponsor"
            - name: Transformation office maturity assessment
              description: |-
                ## Purpose
                Offices differ widely in how much they decide versus record, how clean their data is and how far finance trusts them. Scoring the office yearly against a simple maturity scale, covering governance, value discipline, data, capability and handover readiness, shows the client where to invest and gives you a reusable diagnostic.

                ## Milestones
                1. A maturity scale of five dimensions with four levels each.
                2. The office scored with evidence for each rating.
                3. Two or three improvements chosen for the next year.
                4. The assessment repeated yearly and compared with the last.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A scored maturity assessment with evidence on five dimensions and two or three agreed improvements, repeated yearly."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Draft a five-dimension maturity scale with four levels each"
                - "Score the office and note the evidence for each rating"
                - "Agree two or three improvements with the sponsor"
                - "Repeat the maturity assessment and compare with last year @recurring(yearly)"
---

# Transformation Office Support

A transformation office is the small team that keeps a programme of dozens or hundreds of initiatives honest: it decides what counts as value, moves initiatives through stage gates, chases owners, reconciles the numbers with finance and tells the board the truth. This area starts with foundations (the value target, the charter, gate definitions, the baseline, counting rules and the governance calendar), then the operating routines that run every week and month, skills such as EBITDA bridges, evidence standards and business case challenge, decisions about prioritisation, stopping initiatives and locking value into the budget, the dated moments from launch to handover, variants for analysts, engagement managers, client secondees, interim leads and merger integration offices, and finally specialist work on enabling initiatives, risk-weighted forecasts and audits after the programme closes.

The rhythm is a Monday risk review, Tuesday owner check-ins, a Wednesday gate panel, a Thursday pipeline report and a Friday decision log, then monthly value reconciliation after the close, the executive dashboard and a tracker data sweep, with quarterly board reports and reprioritisation and a yearly value certification. The Purchase decision, Risk register, Meeting notes, Metrics log and Onboarding 30/60/90 templates pair with the tracking tool choice, the risk register, the decision log, the executive dashboard and the analyst's first posting. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
