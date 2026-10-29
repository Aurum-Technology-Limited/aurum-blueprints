---
id: strategy-leadership.organisation-redesign
name: Organisation Redesign
description: "A clear case and design criteria, an honest map of today's structure, scored options, detailed reporting lines and role profiles, fair selection, and an announcement and transition handled with care."
category: business
version: 1.0.0
tags: [strategy-leadership, organisation-redesign, manager, enterprise, org-design, restructuring, spans-and-layers, reporting-lines]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - skills-matrix
    - reading-queue
    - feedback-themes
    - metrics-log
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Organisation Redesign
          description: "Redesigning structure, reporting lines and team boundaries to fit the strategy, and managing the transition with care."
          projects:
            - name: Case for redesign in one page
              description: |-
                ## Purpose
                Structure is the most expensive lever a leader can pull, and many redesigns start because a new executive wants a different chart rather than because the strategy needs one. Writing one page on the specific problems structure must solve, such as slow product decisions, duplicated customer teams or unclear ownership of a market, tells you whether a redesign is the answer or whether a process or people change would do.

                ## Milestones
                1. Three to five concrete symptoms written down, each with an example from the last six months.
                2. Each symptom traced to a cause: structure, process, people, incentives or systems.
                3. A sentence stating which causes a structural change would actually fix.
                4. The sponsor's agreement, recorded, that a redesign is justified or that it is not.

                ## Notes
                If most causes turn out to be process or people, say so. A redesign that fixes the wrong cause costs a year of disruption and leaves the symptoms in place.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page case for redesign, listing symptoms and causes, with the sponsor's go or no-go decision recorded on it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List five recent failures that people blamed on the structure"
                - "Trace each failure to its cause with the people involved"
                - "Draft the one-page case with symptoms, causes and what structure fixes"
                - "Book an hour with the sponsor to agree go or no-go"
            - name: Design criteria agreed with the sponsor
              description: |-
                ## Purpose
                Without written criteria, every option looks good to whoever drew it and the final choice becomes a contest of personalities. Six to eight criteria drawn from the strategy, such as a single owner for each customer segment or no more than six layers to the front line, give the design team a fair test and the sponsor a defensible reason for the final choice.

                ## Milestones
                1. Strategic priorities for the next three years translated into what the organisation must be good at.
                2. Six to eight design criteria written as testable statements.
                3. Criteria weighted, with the two that cannot be traded away marked.
                4. Criteria signed off by the sponsor before any option is drawn.

                ## Notes
                Write the criteria before anyone sketches boxes. Criteria written after the favourite option exists tend to describe that option.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off list of six to eight weighted design criteria, dated before the first structural option was drafted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the strategy's three year priorities into a single list"
                - "Write each capability the strategy needs as a testable design criterion"
                - "Weight the criteria with the sponsor and mark the two non-negotiables"
                - "File the signed-off criteria where the design team works"
            - name: As-is organisation map with headcount and cost
              description: |-
                ## Purpose
                Most leaders carry an out-of-date chart in their head, and the HR system's version usually has missing vacancies, contractors left off and people reporting to someone who left last year. Building one verified map of every position, with grade, cost, location and manager, is the base every option, cost model and selection decision will rest on.

                ## Milestones
                1. A position-level extract from the HR system, including vacancies and contractors.
                2. Reporting lines checked with each unit head and corrected.
                3. Fully loaded cost, grade and location attached to every position.
                4. A dated as-is chart and data file locked as the baseline.

                ## Notes
                Keep the baseline file restricted to the design team. Position-level cost data is among the most sensitive information in the redesign.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A verified as-is position file and chart, checked by every unit head, with cost and grade on each position and a baseline date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Request a position-level extract from HR including vacancies and contractors"
                - "Send each unit head their slice of the chart to correct"
                - "Add fully loaded cost, grade and location to each position"
                - "Lock the corrected file as the dated baseline"
            - name: Spans and layers baseline
              description: |-
                ## Purpose
                Layers slow decisions and narrow spans add cost, but both are invisible until they are counted. Calculating the number of layers from the chief executive to the front line and the span of every manager shows where the hierarchy has grown by accident, for example managers with one or two reports or six layers in a unit of eighty people.

                ## Milestones
                1. Layer count from the top to every front-line position calculated.
                2. Span of control for every manager listed, with the median by unit.
                3. Managers with fewer than three direct reports flagged with the reason.
                4. A one-page summary of where layers and spans sit outside the agreed range.

                ## Notes
                There is no universal right span. Work that is routine and similar supports wider spans than expert or highly varied work, so set the range by type of work, not one number.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A spans and layers summary covering every manager, with narrow spans and excess layers flagged against a range set by type of work."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count the layers from the top to each front-line role in the baseline"
                - "Calculate the span of every manager and the median by unit"
                - "Flag managers with fewer than three reports and note why"
                - "Agree a span range for each type of work with the design team"
            - name: Activity analysis of where time really goes
              description: |-
                ## Purpose
                Charts show who reports to whom, not what people do all week. A short activity survey, asking each team to split time across eight to twelve activities such as customer support, reporting or approvals, reveals duplicated work across units and the activities nobody owns, which is the real material for redesign.

                ## Milestones
                1. An activity list of eight to twelve categories agreed with unit heads.
                2. Time splits collected from at least eighty percent of teams.
                3. Activities performed in three or more units identified as duplication.
                4. Activities with no clear owner listed for the design team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An activity analysis with returns from at least eighty percent of teams, naming duplicated and unowned activities."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft an activity list of eight to twelve categories"
                - "Test the list with two unit heads and adjust the wording"
                - "Send the time split survey to every team lead with a ten day return date"
                - "Ask the agent to summarise duplicated and unowned activities from the returns"
            - name: Redesign governance and confidentiality set-up
              description: |-
                ## Purpose
                A redesign touches people's jobs, so rumours start the day the design team first meets. Setting up a named sponsor, a small design team, a steering group and written rules on who sees which documents keeps the work moving and prevents a half-finished option leaking as a done deal.

                ## Milestones
                1. Sponsor, design lead and design team members named with their time commitment.
                2. A steering group with a decision remit and meeting dates set.
                3. A confidentiality rule written for each document type, with an access list.
                4. Codenames chosen for options so drafts do not reveal names or units.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page governance note naming sponsor, design team and steering group, with a document access list in force."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Name the sponsor and design lead and agree their weekly time"
                - "Choose four to six design team members from HR, finance and the business"
                - "Set up a restricted folder with a written access list"
                - "Agree codenames for the options before the first workshop"
            - name: Employment law and consultation ground rules
              description: |-
                ## Purpose
                Changing reporting lines, roles or locations can trigger legal duties to inform and consult staff or their representatives, and the rules differ widely between countries and by the number of people affected. Getting advice from your employment lawyer and HR before options are fixed sets the timeline and stops a design choice becoming a legal problem later.

                ## Milestones
                1. Countries, sites and approximate numbers potentially affected listed for counsel.
                2. Written advice received on information, consultation and notification duties.
                3. Any works council, union or collective agreement obligations recorded.
                4. Minimum consultation periods built into the redesign timeline.

                ## Notes
                This project prepares the questions and records the answers. The legal conclusions come from your employment lawyer, not from the design team.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written employment law advice on file covering every affected country, with its consultation periods reflected in the timeline."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List affected countries, sites and approximate headcount ranges"
                - "Brief the employment lawyer and HR lead on the scope of change"
                - "Record any representative bodies and collective agreements that apply"
                - "Add minimum consultation periods to the redesign timeline"
            - name: Redesign risk register
              description: |-
                ## Purpose
                Redesigns fail in predictable ways: a key engineer resigns, a large customer loses its contact, a regulated role goes uncovered for a month or the payroll cutover misses a pay run. A register kept from the first week, reviewed monthly, turns those predictable failures into owned actions.

                ## Milestones
                1. Twelve to twenty risks listed across people, customers, regulation, systems and delivery.
                2. Each risk scored for likelihood and impact with a named owner.
                3. Flight-risk key people identified, with a retention conversation planned for each.
                4. A monthly review of the register held and recorded.

                ## Notes
                Start from the **Risk register** template. Keep the key person list separate and restricted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register of at least twelve owned risks, reviewed and updated every month until the post-implementation review."
                cadence: rolling
              tasks:
                - "Run a 45 minute risk brainstorm with the design team"
                - "Score each risk and assign an owner"
                - "Identify key people whose departure would stall delivery"
                - "Review and update the redesign risk register @recurring(monthly:6)"
            - name: Capability gap map against the strategy
              description: |-
                ## Purpose
                A new structure often needs capabilities the current one never had, such as pricing, data engineering or key account management, and drawing boxes for them does not create them. Mapping required capabilities against where they sit today shows which can be moved, which must be built and which must be hired, before the design assumes they exist.

                ## Milestones
                1. Capabilities the strategy requires listed with a short definition each.
                2. Current strength and location of each capability rated by unit.
                3. Gaps classified as move, build, hire or partner.
                4. The gap map shared with the design team and reflected in the criteria.

                ## Notes
                Start from the **Skills matrix** template, rating capabilities by unit rather than by person.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A capability gap map rating each required capability by unit, with every gap marked move, build, hire or partner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the capabilities the strategy requires in plain words"
                - "Rate each capability by unit with the unit heads"
                - "Classify every gap as move, build, hire or partner"
                - "Share the gap map with the design team"
            - name: Weekly design team working session
              description: |-
                ## Purpose
                Design work stalls when it lives in people's spare hours between their day jobs. A fixed two hour weekly session with a short agenda, decisions taken and actions assigned, keeps options, data and role profiles moving at the same pace and stops one workstream racing ahead of the others.

                ## Milestones
                1. A standing two hour slot booked for the design team for the life of the redesign.
                2. A standard agenda used: data, options, open questions, actions.
                3. Actions and decisions recorded within a day of each session.
                4. Attendance above eighty percent across the design phase.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly design sessions held with notes and actions filed within a day, and attendance above eighty percent through the design phase."
                cadence: rolling
              tasks:
                - "Book a standing two hour slot for the design team"
                - "Write the standard four part agenda at the top of the notes file"
                - "Hold the design team working session @recurring(weekly:tue)"
                - "Send decisions and actions to the team after each session"
            - name: Sponsor checkpoint and decision log
              description: |-
                ## Purpose
                Designs drift when the sponsor sees them only at the end and then asks for something different. A thirty minute weekly checkpoint, with every sponsor decision written into a running log, keeps the work aligned and gives a clear record of why each choice was made if it is challenged during consultation.

                ## Milestones
                1. A weekly thirty minute checkpoint with the sponsor in both diaries.
                2. A decision log with date, decision, reason and who was consulted.
                3. Every open question needing the sponsor raised within a week of arising.
                4. The log handed over intact to the implementation lead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A decision log with an entry for every sponsor decision, dated and reasoned, kept from the first checkpoint to go-live."
                cadence: rolling
              tasks:
                - "Set up the decision log with date, decision, reason and consulted columns"
                - "Hold the sponsor checkpoint and update the decision log @recurring(weekly:thu)"
                - "Send the sponsor three open questions ahead of each checkpoint"
            - name: Leak and access control review
              description: |-
                ## Purpose
                Option papers with names on them are the documents most likely to be forwarded, printed or left on a shared screen. A short monthly check of who has access, which versions exist and what has been shared outside the design team catches drift before it becomes a leak that forces an early announcement.

                ## Milestones
                1. Every redesign document listed with its access group.
                2. Access removed for anyone who has left the design team.
                3. Old option versions archived out of the working folder.
                4. A holding statement drafted in case of a leak.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly access review recorded for the redesign folder, with a holding statement ready before the first option paper is shared."
                cadence: rolling
              tasks:
                - "Draft a three sentence holding statement for use if plans leak"
                - "Review access to the redesign folder and remove leavers @recurring(monthly:3)"
                - "Archive superseded option versions out of the working folder"
            - name: Headcount and vacancy freeze reconciliation
              description: |-
                ## Purpose
                Between baseline and go-live, people leave, vacancies get filled and new roles appear, so the design quietly stops matching reality. A monthly reconciliation of starters, leavers and approved hires against the baseline, with a vacancy freeze in affected units, keeps the cost model and selection pools accurate.

                ## Milestones
                1. A vacancy freeze or approval rule agreed for units in scope.
                2. Starters, leavers and moves reconciled against the baseline each month.
                3. Differences fed into the cost model and selection pools.
                4. A clean reconciled headcount on the day before go-live.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly reconciliations recorded against the baseline, with a final reconciled headcount signed off by HR and finance before go-live."
                cadence: rolling
              tasks:
                - "Agree the vacancy approval rule for units in scope with the sponsor"
                - "Reconcile starters, leavers and moves against the baseline @recurring(monthly:9)"
                - "Send differences to the cost model owner and selection lead"
            - name: Position data hygiene in the HR system
              description: |-
                ## Purpose
                Reporting lines in the HR system drive approvals, payroll, access rights and every future org chart, yet they decay within months after a redesign. A monthly check of positions without managers, managers who have left and people in the wrong cost centre keeps the structure you designed the one the systems actually run.

                ## Milestones
                1. A standard exception report agreed with the HR systems team.
                2. Positions with no manager, departed managers and wrong cost centres listed each month.
                3. Every exception corrected or assigned within two weeks.
                4. Exception count trending down for three consecutive months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly position exception report run, with exceptions under five percent of positions for three months running."
                cadence: rolling
              tasks:
                - "Agree the exception report fields with the HR systems team"
                - "Run the position exception report and assign fixes @recurring(monthly:14)"
                - "Chase exceptions older than two weeks with the unit owner"
            - name: Quarterly spans and layers health check
              description: |-
                ## Purpose
                Structures creep back: a new manager role here, a one-report team lead there, and in two years the layers you removed are back. Re-running the spans and layers count every quarter against the range you set catches creep while it is still one or two cases rather than a second redesign.

                ## Milestones
                1. The spans and layers calculation set up to run from a standard HR extract.
                2. Results compared each quarter against the agreed ranges.
                3. New exceptions discussed with the relevant unit head.
                4. A four quarter trend kept in a simple log.

                ## Notes
                Start from the **Metrics log** template with median span, layer count and number of single-report managers as the three lines.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly spans and layers checks logged, each with exceptions raised with the unit head concerned."
                cadence: rolling
              tasks:
                - "Set up the spans and layers calculation on the standard HR extract"
                - "Run the spans and layers check and log the results @recurring(quarterly)"
                - "Raise new narrow spans or added layers with the unit head"
            - name: Cutover issue log and daily stand-up
              description: |-
                ## Purpose
                The first two to three weeks after new reporting lines go live produce dozens of small failures: approvals routed to the old manager, people missing from distribution lists, access requests stuck. A fifteen minute daily stand-up with HR, IT, finance and the business, working from one issue log, closes them before they become the story of the redesign.

                ## Milestones
                1. One issue log open to HR, IT, finance and unit heads.
                2. A fifteen minute stand-up held each working day for the first three weeks.
                3. Each issue owned, with a target fix date.
                4. Open issues below five before the stand-up is stopped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Daily stand-ups held for at least three weeks after go-live, ending with fewer than five open issues in the log."
                cadence: phased
              tasks:
                - "Create the cutover issue log with owner and target date columns"
                - "Invite HR, IT, finance and unit heads to a fifteen minute stand-up"
                - "Run the cutover stand-up and update the issue log @recurring(daily)"
                - "Stop the stand-up once open issues fall below five"
            - name: Employee questions log and weekly FAQ
              description: |-
                ## Purpose
                Once a redesign is announced, the same twenty questions arrive through managers, HR inboxes and town halls, often answered differently each time. Collecting every question in one log and publishing a refreshed FAQ each week gives consistent answers and shows the design team which worries are growing.

                ## Milestones
                1. A single intake route for questions open to all staff and managers.
                2. Every question logged and grouped into themes.
                3. A refreshed FAQ published each week of the transition.
                4. Answers checked by HR and, where needed, counsel before publishing.

                ## Notes
                Start from the **Feedback themes** template to group the questions. A rising theme is usually a sign the announcement left something out.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A questions log grouped by theme and a weekly FAQ published for every week from announcement to go-live."
                cadence: rolling
              tasks:
                - "Set up one question intake form and tell managers how to use it"
                - "Group new questions into themes and refresh the FAQ @recurring(weekly:fri)"
                - "Ask HR to check each new answer before it goes out"
            - name: Monthly manager pulse in the new units
              description: |-
                ## Purpose
                Managers in a new structure are the first to know whether the boundaries work, but they rarely say so unless asked. A five question pulse to every people manager each month for the first six months, covering clarity of scope, handoffs and workload, gives early warning of seams that need fixing.

                ## Milestones
                1. Five pulse questions agreed and tested with two managers.
                2. The pulse sent to every people manager in scope each month.
                3. Results compared by unit and against the previous month.
                4. Two or three fixes agreed each month from the results.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly manager pulses run after go-live, each with a response rate above sixty percent and agreed fixes recorded."
                cadence: rolling
              tasks:
                - "Write five pulse questions on scope, handoffs and workload"
                - "Send the manager pulse and compare results by unit @recurring(monthly:20)"
                - "Agree two or three fixes from each pulse with the sponsor"
            - name: Annual structure review against the strategy
              description: |-
                ## Purpose
                Strategy moves every year and structure tends not to, until the gap is big enough to need another disruptive redesign. A yearly review, testing the current structure against the latest strategy and the original design criteria, lets you make small adjustments instead of large ones.

                ## Milestones
                1. The latest strategy priorities compared with the original design criteria.
                2. Each criterion rated as still met, partly met or not met.
                3. Small structural adjustments proposed for the year ahead.
                4. The review and its decisions filed with the leadership team's records.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly structure review rating each design criterion, with agreed adjustments recorded by the leadership team."
                cadence: cyclic
              tasks:
                - "Put the latest strategy priorities beside the original design criteria"
                - "Hold the annual structure review with the leadership team @recurring(yearly)"
                - "Record agreed adjustments and their owners"
            - name: Reading on structural archetypes
              description: |-
                ## Purpose
                Leaders often redesign from the one structure they have worked in, which narrows the options before the work starts. Reading on the main archetypes, functional, divisional by product or region, matrix, front-back and network, and the trade-offs each makes between scale, speed and customer focus, widens the set of options the design team considers.

                ## Milestones
                1. A reading list of four to six sources on organisation design chosen.
                2. A one-paragraph note on each archetype's strengths and failure modes.
                3. Two organisations you know mapped to an archetype with the reason.
                4. A short briefing on archetypes shared with the design team.

                ## Notes
                Start from the **Reading queue** template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A briefing note covering at least five structural archetypes with strengths and failure modes, shared with the design team."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose four to six books or papers on organisation design"
                - "Write a paragraph on each archetype's strengths and failure modes"
                - "Map two organisations you know to an archetype"
                - "Share a two page archetype briefing with the design team"
            - name: Star model diagnosis of the current organisation
              description: |-
                ## Purpose
                Structure is only one of five linked elements in the widely used Star model, alongside strategy, processes, rewards and people practices, and a new chart that ignores the other four rarely holds. Diagnosing the current organisation against all five shows what else must change for the new structure to work.

                ## Milestones
                1. The five elements of the model studied with one worked example.
                2. The current organisation described against each element in a paragraph.
                3. Misalignments between structure and the other four elements listed.
                4. Required non-structural changes added to the redesign plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A five-element diagnosis of the current organisation, with at least three non-structural changes added to the redesign plan."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a summary of the Star model with one worked example"
                - "Describe the current organisation against each of the five elements"
                - "List where structure and rewards or processes pull apart"
                - "Add the non-structural changes to the redesign plan"
            - name: Organisation modelling in a spreadsheet
              description: |-
                ## Purpose
                Every option needs a headcount, cost, spans and layers answer, and recalculating by hand for each variant is slow and error-prone. Learning to build a position-level model, where moving a team between units updates cost and spans automatically, lets the design team test ten variants in an afternoon.

                ## Milestones
                1. A position-level model built from the baseline file.
                2. Formulas for unit cost, headcount, spans and layers that update on any move.
                3. The model tested by recreating the as-is totals exactly.
                4. Two options run through the model and checked by finance.

                ## Notes
                Dedicated organisation design tools exist and are worth trialling for very large redesigns, but a well-built spreadsheet handles most organisations under a few thousand people.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A position-level model that reproduces the as-is totals exactly and has run at least two options checked by finance."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Copy the baseline file into a new modelling workbook"
                - "Build formulas for unit cost, headcount, spans and layers"
                - "Check the model reproduces the as-is totals"
                - "Run two options through the model and send them to finance"
            - name: Writing role profiles with clear accountabilities
              description: |-
                ## Purpose
                Most job descriptions list tasks and competencies but never say what the role is accountable for or where its scope ends, which is exactly what a redesign must make clear. Practising a short profile format, purpose, five accountabilities, decision scope, key interfaces and measures, gives every new role a boundary people can test.

                ## Milestones
                1. A one-page role profile format agreed with HR.
                2. Three pilot profiles written for roles with known overlap.
                3. Overlaps between the pilot profiles found and resolved.
                4. A short writing guide shared with every manager drafting profiles.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page role profile format with three pilot profiles and a writing guide issued to every manager drafting profiles."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft a one-page profile format with HR"
                - "Write three pilot profiles for roles that overlap today"
                - "Resolve overlaps between the pilots with the role holders' managers"
                - "Issue a one-page writing guide to managers drafting profiles"
            - name: Handoff design between new units
              description: |-
                ## Purpose
                Every boundary you draw creates a handoff, and most structural problems after a redesign live in the seams: a sale passed to delivery with half the information, or a support request bounced between two teams. Designing the five to ten most important handoffs explicitly, with inputs, outputs and service levels, makes the boundaries work from day one.

                ## Milestones
                1. The five to ten highest-volume or highest-risk handoffs between new units listed.
                2. Each handoff described with its trigger, inputs, outputs and service level.
                3. Both sides of each handoff agreed to the description.
                4. Handoff performance reviewed each quarter after go-live.

                ## Notes
                Keep this to the handoffs between units. Who holds which decisions across the organisation is a wider question best handled as its own piece of work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least five critical handoffs documented with service levels, agreed by both sides and reviewed quarterly after go-live."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the handoffs between new units with the highest volume or risk"
                - "Write the trigger, inputs, outputs and service level for each"
                - "Get sign-off on each handoff from both unit heads"
                - "Review handoff performance with both sides @recurring(quarterly)"
            - name: Practising the role change conversation
              description: |-
                ## Purpose
                Managers telling someone their role is changing or at risk often over-explain, apologise, or promise things they cannot deliver, and the person remembers that conversation for years. Rehearsing a short structure, the message first, the reason, what happens next and where support sits, with HR playing the employee, makes the real conversations clearer and kinder.

                ## Milestones
                1. A conversation outline agreed with HR and counsel.
                2. Each manager delivering conversations rehearsed at least twice.
                3. A list of things managers must not promise shared and understood.
                4. Support contacts and next steps printed for each conversation.

                ## Notes
                Lead with the message in the first minute. People cannot listen to context while waiting to hear whether they still have a job.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every manager delivering role change conversations has rehearsed twice with HR, using an outline approved by counsel."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the conversation outline with HR and counsel"
                - "Schedule two rehearsals for each manager with HR playing the employee"
                - "Write the list of things managers must not promise"
                - "Print support contacts and next steps for each conversation"
            - name: Job levelling basics with the reward team
              description: |-
                ## Purpose
                New structures create new roles, and if they are graded by negotiation rather than method, the redesign seeds pay inequity that surfaces in the next equal pay review. Learning how your organisation's levelling framework works, and testing each new role against it with the reward team, keeps grading consistent across units.

                ## Milestones
                1. The organisation's levelling framework and its factors understood.
                2. Every new or materially changed role sized against the framework.
                3. Level outcomes reviewed for consistency across units.
                4. Any roles moving grade flagged with the cost impact.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every new or changed role levelled by the reward team using the framework, with grade moves and their cost listed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the reward team for a walkthrough of the levelling framework"
                - "Submit each new or changed role profile for levelling"
                - "Compare level outcomes across units for consistency"
                - "List grade moves with their cost for the cost model"
            - name: Three structural options scored against the criteria
              description: |-
                ## Purpose
                One proposed structure invites only yes or no, while three real options force the leadership team to discuss trade-offs. Drafting three distinct options, for example organised by customer segment, by product and by region, and scoring each against the agreed criteria with cost and risk, makes the final choice explicit and defensible.

                ## Milestones
                1. Three genuinely different options drawn to the second layer.
                2. Each option scored against every weighted design criterion.
                3. Cost, transition risk and number of people affected estimated for each.
                4. A preferred option chosen by the steering group with reasons recorded.

                ## Notes
                Include a modified status quo as one of the three if it is credible. It sharpens the case for change, or reveals there isn't one.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three options scored against the weighted criteria, with the steering group's choice and its reasons recorded in the decision log."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Sketch three distinct options to the second layer"
                - "Score each option against the weighted design criteria"
                - "Run each option through the organisation model for cost and spans"
                - "Present the scored options to the steering group for a decision"
            - name: Deciding on dual reporting lines
              description: |-
                ## Purpose
                Matrix structures promise both functional depth and business focus, and often deliver confusion over who sets objectives, who approves leave and who decides when the two bosses disagree. Deciding deliberately where dual reporting is worth it, and writing how the solid and dotted lines work, avoids an accidental matrix.

                ## Milestones
                1. Every proposed dual reporting line listed with the reason for it.
                2. Each tested against whether a single line plus a clear handoff would do.
                3. For lines that remain, a written rule on objectives, reviews and tie-breaks.
                4. Both managers in each dual line briefed on the rule.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on each proposed dual reporting line, with written rules for objectives, reviews and tie-breaks where kept."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every proposed dual reporting line and why it exists"
                - "Test each against a single line with a defined handoff"
                - "Write the objectives, review and tie-break rule for lines kept"
                - "Brief both managers in each dual line together"
            - name: Centralise or devolve a support function
              description: |-
                ## Purpose
                Finance, HR, IT and procurement swing between central and embedded models every few years, often without a clear reason either time. Deciding with evidence, comparing cost, service quality and specialist depth under a central, embedded or hub-and-spoke model, settles the question for longer and gives business units a service they can rely on.

                ## Milestones
                1. The function's current cost, headcount and service levels documented.
                2. Central, embedded and hub-and-spoke models described for this function.
                3. Business unit heads' service needs gathered in short interviews.
                4. A chosen model recorded with the service levels it must meet.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of central, embedded or hub-and-spoke for the function, with cost comparison and committed service levels."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Document the function's current cost, headcount and service levels"
                - "Interview four business unit heads about the service they need"
                - "Compare cost and service under the three models"
                - "Record the chosen model and its service levels in the decision log"
            - name: Choosing the primary axis for team boundaries
              description: |-
                ## Purpose
                Below the top layer, teams can be grouped by product, customer segment, geography, process step or skill, and the choice decides which conversations are easy and which cross a boundary. Picking the primary axis for each unit deliberately, based on where coordination matters most, puts the most frequent collaboration inside teams.

                ## Milestones
                1. The main coordination needs of each unit described in a short paragraph.
                2. Candidate grouping axes listed for each unit.
                3. The axis that keeps the most frequent collaboration inside teams chosen.
                4. Secondary coordination needs covered by a named mechanism.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A primary grouping axis recorded for each unit, with the mechanism named for coordination that crosses team boundaries."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask each unit head where their teams coordinate most often"
                - "List candidate grouping axes for each unit"
                - "Choose the axis that keeps frequent collaboration inside teams"
                - "Name the mechanism for coordination that crosses boundaries"
            - name: Removing a management layer
              description: |-
                ## Purpose
                Taking out a layer is one of the most common redesign moves and one of the hardest to do well, because it widens spans, changes careers and can leave senior specialists without a route up. Planning it explicitly, covering who absorbs the work, how spans change and what the affected managers are offered, avoids the layer quietly reappearing within a year.

                ## Milestones
                1. The layer to be removed and the positions in it identified.
                2. The work that layer did today listed and reassigned.
                3. New spans for the managers above checked against the agreed range.
                4. Options for each affected manager agreed with HR, including expert career routes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A layer removal plan showing reassigned work, new spans within range and an agreed option for every affected manager."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Identify the positions in the layer being removed"
                - "List the work that layer does and who will take it on"
                - "Check the new spans of the managers above"
                - "Agree options for each affected manager with HR"
            - name: Detailed design down to team level
              description: |-
                ## Purpose
                A chart that stops at the second layer leaves the hardest questions for managers to settle in the corridor. Detailed design takes the chosen option down to every team and position, with each person's future role, manager and location, so selection, consultation and systems work can start from one agreed file.

                ## Milestones
                1. Every unit drawn to team level with positions, grades and locations.
                2. Each existing position mapped to a future position, a pool or at risk.
                3. Detailed design checked against the cost model and spans range.
                4. The detailed design file signed off by the steering group.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off detailed design file mapping every current position to a future position, a selection pool or at risk."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Draw each unit to team level with the unit head"
                - "Map every current position to a future position, pool or at risk"
                - "Reconcile the detailed design with the cost model"
                - "Take the detailed design file to the steering group for sign-off"
            - name: Fair selection into new roles
              description: |-
                ## Purpose
                How people are placed into the new structure decides whether staff see the redesign as fair, and it is where legal challenges usually come from. A written selection process, covering direct mapping, ring-fenced pools, selection criteria, panels and appeals, applied the same way in every unit, protects people and the organisation.

                ## Milestones
                1. Rules for direct mapping and ring-fenced pools written and approved by HR and counsel.
                2. Selection criteria set for each pooled role from its profile.
                3. Panels trained and every decision recorded against the criteria.
                4. An appeal route published and every appeal answered in writing.

                ## Notes
                Check selection outcomes by gender, age, ethnicity and other protected characteristics before they are communicated, and investigate any unexpected pattern.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every affected person placed through a documented process, with decisions recorded against criteria and appeals answered in writing."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write mapping and pooling rules and send them to HR and counsel"
                - "Set selection criteria for each pooled role"
                - "Train selection panels on the criteria and record keeping"
                - "Review outcomes for unexpected patterns before they are shared"
            - name: Cost model of the new structure
              description: |-
                ## Purpose
                Sponsors approve redesigns on a cost number that often omits severance, overlap periods, relocation, recruitment and system changes. A full model of one-off costs and run-rate cost, compared with the baseline and reviewed with finance, makes the financial case honest and gives a figure to track after go-live.

                ## Milestones
                1. Run-rate cost of the new structure calculated from the detailed design.
                2. One-off costs estimated: severance, overlap, hiring, relocation, systems.
                3. Payback period calculated and reviewed with finance.
                4. Actual run-rate tracked against plan for the first year.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A finance-reviewed cost model showing run-rate change, one-off costs and payback, with actuals tracked for twelve months."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Calculate the run-rate cost from the detailed design"
                - "Estimate each one-off cost category with HR and finance"
                - "Work out the payback period and review it with finance"
                - "Set up a twelve month tracker of actual run-rate against plan"
            - name: Big-bang or phased implementation decision
              description: |-
                ## Purpose
                Moving everyone on one date ends the uncertainty quickly but concentrates risk, while phasing reduces risk and stretches the anxiety over months. Deciding the sequence deliberately, considering consultation timelines, peak trading periods, system cutover and how interdependent the units are, avoids a go-live date set by the diary alone.

                ## Milestones
                1. Constraints listed: consultation periods, peak seasons, system cutovers, year-end.
                2. Big-bang and two phased sequences sketched with their risks.
                3. A sequence chosen and dated with the sponsor.
                4. The chosen sequence reflected in the communication and consultation plans.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded implementation sequence with dates, chosen against listed constraints and reflected in the communication plan."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List consultation, seasonal and system constraints on timing"
                - "Sketch a big-bang and two phased sequences"
                - "Agree the sequence and dates with the sponsor"
                - "Update the communication and consultation plans to match"
            - name: Announcement day plan
              description: |-
                ## Purpose
                People forgive a hard decision more readily than a chaotic announcement where they hear about their job from a colleague's message. A minute-by-minute plan for the day, who is told first, in what order, by whom and with which materials, makes sure everyone affected hears it directly and on the same day.

                ## Milestones
                1. The sequence set: steering group, leaders, managers, affected individuals, all staff, external parties.
                2. Every individual conversation scheduled with a named manager and HR support.
                3. Announcement materials, FAQ and holding statements approved.
                4. A debrief held at the end of the day with any issues logged.

                ## Notes
                Avoid Fridays and the days before public holidays, so people are not left alone with the news without anyone to ask.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every affected person told directly by their manager on announcement day, in the planned sequence, with a same-day debrief recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draft the announcement sequence from steering group to all staff"
                - "Schedule every individual conversation with a manager and HR support"
                - "Ask the agent to draft the all-staff message from the decision log"
                - "Book a debrief with HR and the sponsor for the end of the day"
            - name: Manager briefing before the announcement
              description: |-
                ## Purpose
                Managers are asked to explain a structure they saw for the first time an hour ago, while also worrying about their own role. Briefing them the day before, with their own outcome settled first, the rationale, their team's changes and a short script, turns them into credible messengers instead of fellow casualties.

                ## Milestones
                1. Each manager's own outcome communicated before they brief anyone else.
                2. A briefing pack with rationale, new chart, team changes and script.
                3. A briefing session held with time for questions.
                4. Managers' remaining questions answered before announcement day.
              priority: medium
              deadlineOffsetDays: 95
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every manager with affected staff briefed the day before announcement, with their own outcome known and a pack in hand."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Tell each manager their own outcome before the group briefing"
                - "Build the briefing pack with rationale, chart and script"
                - "Run the briefing session with an hour for questions"
                - "Answer remaining manager questions in writing that evening"
            - name: Formal consultation meetings
              description: |-
                ## Purpose
                Where consultation is required, it must be genuine: proposals can change, and the record has to show that representatives' points were considered. Running a planned series of meetings, with minutes, written responses and a log of what changed, meets the obligation and often improves the design.

                ## Milestones
                1. A meeting schedule agreed with representatives or affected staff.
                2. Minutes of every meeting agreed and filed.
                3. Every proposal from representatives answered in writing.
                4. A summary of changes made as a result of consultation published.

                ## Notes
                Agree the format of the record with your employment lawyer before the first meeting. The obligations themselves vary by country and are set in the ground rules project.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All planned consultation meetings held with agreed minutes, written answers to every proposal and a published summary of changes."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree the consultation meeting schedule with representatives"
                - "Review consultation responses and draft written answers @recurring(weekly:mon)"
                - "File agreed minutes after each meeting"
                - "Publish a summary of what changed as a result of consultation"
            - name: Go-live day for new reporting lines
              description: |-
                ## Purpose
                On go-live day the HR system, payroll, approval routes, access rights, email groups and the org chart must all reflect the new structure at once, and any one of them lagging makes the change feel unreal. A dated cutover checklist with owners, tested a week before, makes the day uneventful.

                ## Milestones
                1. A cutover checklist covering HR system, payroll, approvals, access, groups and charts.
                2. A dry run completed a week before with failures fixed.
                3. Every system updated on go-live day and spot-checked.
                4. New managers confirmed as able to see and approve for their teams.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All systems reflect the new structure on go-live day, with a dry run completed and new managers confirmed able to approve for their teams."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the cutover checklist with an owner per system"
                - "Run a dry run one week before go-live"
                - "Spot-check ten managers' approval rights on go-live day"
                - "Publish the new organisation chart once systems match"
            - name: First team sessions in the new units
              description: |-
                ## Purpose
                People who have just been moved into a new unit often know their new manager's name and little else. A two hour first session for each new team, covering purpose, priorities, how work comes in and goes out, and who does what, gets real work going quickly and surfaces confusion early.

                ## Milestones
                1. A standard two hour first session agenda given to every new unit manager.
                2. First sessions held in every new team within three weeks of go-live.
                3. Each team's purpose and top priorities written down.
                4. Open questions from the sessions passed to the issue log.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every new team has held a first session within three weeks of go-live, with purpose and priorities recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a two hour first session agenda for new teams"
                - "Send the agenda and a facilitation note to each new unit manager"
                - "Track which teams have held their first session"
                - "Pass open questions from the sessions to the cutover issue log"
            - name: Post-implementation review at 100 days
              description: |-
                ## Purpose
                Redesigns are rarely evaluated, so organisations repeat the same mistakes in the next one. A structured review at around 100 days, checking the original symptoms, the design criteria, the cost model, attrition and manager feedback, tells you what worked, what needs adjusting and what to do differently next time.

                ## Milestones
                1. Original symptoms and design criteria reassessed with current evidence.
                2. Run-rate cost, attrition and key person retention compared with plan.
                3. Manager pulse and employee feedback themes summarised.
                4. Adjustments agreed and lessons written up for the next redesign.
              priority: medium
              deadlineOffsetDays: 250
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A post-implementation review report covering symptoms, criteria, cost and attrition, with adjustments agreed by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book the review with the sponsor around 100 days after go-live"
                - "Gather cost, attrition, pulse and feedback data"
                - "Reassess the original symptoms and each design criterion"
                - "Write up adjustments and lessons for the next redesign"
            - name: Redesigning your own department as a manager
              description: |-
                ## Purpose
                Middle managers often redesign a department of twenty to two hundred people with no design team, a sceptical HR partner and their own team watching. A lighter version of the full method, with a short case, two options, your HR partner involved from day one and your own manager's sign-off, keeps it proportionate without skipping the steps that protect people.

                ## Milestones
                1. A one-page case and two options agreed with your own manager.
                2. Your HR business partner involved before any team member is told.
                3. Role profiles and selection approach approved by HR.
                4. The change announced and a check-in with each team member held within a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A departmental redesign approved by your manager and HR, announced, with a check-in held with every team member within a month."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write a one-page case and two options for your department"
                - "Book your HR business partner before talking to anyone in the team"
                - "Get your own manager's sign-off on the preferred option"
                - "Hold a check-in with each team member after the change @recurring(monthly:5)"
            - name: Redesign under a cost reduction target
              description: |-
                ## Purpose
                When the redesign exists mainly to remove cost, there is a strong temptation to cut evenly across units, which protects nobody's priorities. Starting from the strategy, protecting the capabilities that matter most and taking deeper cuts where work can stop entirely, reaches the target while keeping the organisation able to deliver.

                ## Milestones
                1. The cost target confirmed as run-rate, one-off or both, with a date.
                2. Protected capabilities named and agreed with the sponsor.
                3. Work that can stop entirely identified before any role reductions.
                4. Savings tracked monthly against the target after go-live.

                ## Notes
                Stopping work comes before removing roles. Cutting people while keeping all the work leaves the survivors with an impossible load and drives the attrition you can least afford.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A reduction plan meeting the agreed cost target, with protected capabilities named and monthly savings tracked for a year."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Confirm the cost target, its type and its date with finance"
                - "Agree the protected capabilities with the sponsor"
                - "List work that can stop entirely before planning role reductions"
                - "Track actual savings against the target @recurring(monthly:11)"
            - name: Multi-country redesign coordination
              description: |-
                ## Purpose
                Enterprise redesigns spanning several countries meet different consultation rules, notice periods, representative bodies and cultural expectations, so one global date rarely works. Coordinating through a country tracker, local HR leads and counsel in each jurisdiction lets the global design land at a pace each country's rules allow.

                ## Milestones
                1. A country tracker with local consultation requirements, timelines and HR lead.
                2. Local counsel's advice recorded for each country.
                3. Country-level announcement and go-live dates set within the global sequence.
                4. Monthly status reviewed across all countries until the last go-live.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A country tracker covering every affected country with local advice, dates and status reviewed monthly until the final go-live."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Build a country tracker with requirements, dates and local HR lead"
                - "Brief local counsel in each country with the same scope note"
                - "Set country-level dates inside the global sequence"
                - "Review status across all countries with local HR leads @recurring(monthly:22)"
            - name: Leading a redesign that changes your own role
              description: |-
                ## Purpose
                Senior leaders are sometimes asked to design a structure in which their own role shrinks, merges or disappears, and staff will read every choice for self-interest. Declaring the conflict, stepping out of decisions about your own seat and agreeing your own outcome early with the sponsor keeps the design credible and lets you lead it with a clear head.

                ## Milestones
                1. The conflict of interest declared in writing to the sponsor.
                2. Decisions about your own role delegated to the sponsor or steering group.
                3. Your own outcome and timeline agreed before the design is final.
                4. Your role in the transition, whatever the outcome, agreed and communicated.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written conflict declaration and an agreed personal outcome recorded with the sponsor before the detailed design is signed off."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a short note to the sponsor declaring the conflict"
                - "Agree which decisions you will step out of"
                - "Book a conversation with the sponsor about your own outcome"
                - "Agree and announce your role during the transition"
            - name: Support for leavers and those who stay
              description: |-
                ## Purpose
                People leaving through a redesign judge the organisation by how the last weeks feel, and those who stay judge it by how the leavers were treated. Organising practical support for leavers, such as outplacement, references and time for interviews, alongside regular check-ins with remaining staff, protects reputation and the morale of the people you need.

                ## Milestones
                1. A support package for leavers agreed with HR, including outplacement and references.
                2. Each leaver offered a conversation about their support and exit date.
                3. Remaining team members checked in with monthly for six months.
                4. Workload of remaining staff reviewed where roles were removed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every leaver offered the agreed support package, and remaining staff checked in with monthly for six months after go-live."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree the leaver support package with HR"
                - "Offer each leaver a conversation about support and exit date"
                - "Review the workload of teams that lost roles"
                - "Check in with remaining staff in affected teams @recurring(monthly:17)"
            - name: Restructuring after headcount has doubled
              description: |-
                ## Purpose
                An organisation that has doubled in three years usually still runs on the structure it had at half the size, with senior people holding spans of fifteen and informal routes doing the real coordinating. Redesigning for the next doubling, rather than the current size, adds the management layer, the specialist functions and the clear unit boundaries that growth now requires.

                ## Milestones
                1. Growth plan headcount for the next two years agreed as the design basis.
                2. Overloaded spans and informal coordination routes identified.
                3. A structure designed for the planned size, not the current one.
                4. New management roles filled or recruitment started.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A structure sized for the two year growth plan, approved, with every new management role filled or in recruitment."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree the two year headcount plan as the design basis"
                - "List leaders with spans over twelve and informal coordination routes"
                - "Design the structure for the planned size"
                - "Start recruitment for the new management roles"
            - name: Building an internal organisation design practice
              description: |-
                ## Purpose
                Large organisations redesign some part of themselves every year, yet most rebuild the method, data and templates from scratch each time or pay consultants to do it. A small internal practice, with a standard method, a shared toolkit and trained people in HR, makes each redesign faster, cheaper and more consistent.

                ## Milestones
                1. A standard redesign method written, from case to post-implementation review.
                2. A toolkit of templates, models and checklists stored in one place.
                3. Three to five HR partners trained and paired on a live redesign.
                4. Lessons from each redesign added to the method every quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written redesign method and toolkit in use, with at least three trained HR partners and quarterly lessons added."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the standard redesign method on two pages"
                - "Collect templates, models and checklists into one toolkit folder"
                - "Pair three HR partners with the next live redesign"
                - "Add lessons from recent redesigns to the method @recurring(quarterly)"
            - name: Product and platform team boundaries in technology
              description: |-
                ## Purpose
                In technology organisations, team boundaries shape the software as much as the other way round, and teams carved by layer or skill end up waiting on each other for every change. Designing stream-aligned product teams, a small number of platform teams and clear interaction modes cuts dependencies and lets teams ship without constant coordination.

                ## Milestones
                1. Current team dependencies mapped from the last quarter's work.
                2. Stream-aligned teams defined around products or customer journeys.
                3. Platform and enabling teams sized to serve them, with interaction modes written.
                4. Cross-team dependencies reviewed each quarter after the change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A team boundary design with interaction modes for every team, and quarterly dependency counts showing fewer cross-team waits."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Map last quarter's cross-team dependencies from the work tracker"
                - "Define stream-aligned teams around products or customer journeys"
                - "Write the interaction mode between each platform and product team"
                - "Count cross-team dependencies and adjust boundaries @recurring(quarterly)"
            - name: Front-back customer structure design
              description: |-
                ## Purpose
                Organisations selling several products to the same large customers often find each product team calling on the same client with no one owning the relationship. A front-back design, with customer-facing units owning segments and product units behind them, can fix that, but only if pricing, targets and the internal transfer of work are designed alongside the boxes.

                ## Milestones
                1. Customer overlap across product units quantified from sales data.
                2. Front units defined by segment with clear account ownership rules.
                3. Back units' service commitments and internal pricing or crediting rules written.
                4. Targets and incentives for front and back aligned and approved.

                ## Notes
                Front-back is among the hardest structures to run. Pilot it in one segment before rolling it out across the organisation.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A front-back design decision for at least one segment, with account ownership, crediting rules and aligned targets approved."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pull sales data on customers buying from more than one product unit"
                - "Define front units by segment and write account ownership rules"
                - "Draft crediting rules between front and back units with finance"
                - "Choose one segment to pilot the front-back design"
---

# Organisation Redesign

This area is for senior managers and enterprise leaders who need the structure, reporting lines and team boundaries to fit a strategy that has moved on. It starts with the foundations (why redesign at all, the criteria, an accurate picture of today, governance and the legal ground rules), then the operating machinery that runs a redesign week to week, the skills of structural thinking and role design, the big choices from options to selection and sequencing, the dated moments of announcement, consultation and go-live, the situations managers and large organisations meet, and finally the specialist work of building a lasting design capability.

What repeats is a weekly design team session, sponsor checkpoint and questions review, a daily issue stand-up during cutover, monthly headcount reconciliation, position data and risk reviews on different days, quarterly spans and layers and interface checks, and a yearly structure review against the strategy. The Risk register, Skills matrix, Reading queue, Feedback themes and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
