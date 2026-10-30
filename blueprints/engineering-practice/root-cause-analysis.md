---
id: engineering-practice.root-cause-analysis
name: Root Cause Analysis
description: "Investigations that find the real reason equipment failed or an incident happened: trigger levels, evidence and timelines, five whys, fishbone and fault trees, honest causal statements and corrective actions checked for effect."
category: business
version: 1.0.0
tags: [engineering-practice, root-cause-analysis, engineer, manager, incident-investigation, five-whys, fault-tree, corrective-actions]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - vendor
    - remediation-plan
    - meeting-notes
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Root Cause Analysis
          description: "Finding why an engineering failure or incident happened: evidence gathering, timelines, five whys, fishbone and fault tree methods, and corrective actions that stick."
          projects:
            - name: Investigation trigger criteria and RCA levels
              description: |-
                ## Purpose
                Without written triggers, investigations happen when someone senior is annoyed and skip the quiet repeat failures that cost the most. A short matrix that maps event severity, potential severity and repetition to three investigation levels (a single-person five whys, a facilitated team RCA, a full independent investigation) tells everyone what gets looked at and how hard.

                ## Milestones
                1. Three investigation levels defined, each with the method, team size and target completion time.
                2. Triggers written for actual and potential severity, including near misses with high potential.
                3. A repeat-event trigger set, for example the same failure on the same asset three times in twelve months.
                4. The matrix approved by the site leadership team and published with the incident reporting procedure.

                ## Notes
                Rate potential severity as well as actual. A dropped object that missed someone by a metre deserves more than a minor first-aid case.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page trigger matrix with three investigation levels and repeat-event triggers is approved and published with the incident procedure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the last twelve months of incidents and failures and the depth each got"
                - "Draft three investigation levels with method, team and time limit"
                - "Write severity, potential severity and repeat-event triggers for each level"
                - "Take the matrix to the leadership meeting for approval"
                - "Recheck the trigger matrix against the year's events @recurring(yearly)"
            - name: Investigation procedure and terms of reference
              description: |-
                ## Purpose
                Most weak investigations go wrong in the first hour, when nobody agrees what is in scope, who leads or who the report goes to. A procedure with a one-page terms of reference form fixes the scope, lead investigator, team, sponsor, deadline and the questions to answer before anyone starts asking why.

                ## Milestones
                1. A procedure covering notification, appointment of a lead, scope, evidence, analysis, report and action follow-up.
                2. A one-page terms of reference form with scope boundaries and questions the investigation must answer.
                3. Roles written for the sponsor, lead investigator, team members and the person who owns the actions.
                4. The procedure trialled on one live investigation and corrected from what that showed.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved investigation procedure and terms of reference form, used on at least one real investigation and revised afterwards."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect the current incident procedure and two recent investigation reports"
                - "Ask the agent to draft a one-page terms of reference form from the procedure"
                - "Write the sponsor, lead and action owner roles in plain sentences"
                - "Trial the form on the coming level two investigation and note the gaps"
            - name: First-hour evidence preservation kit
              description: |-
                ## Purpose
                Fragile evidence disappears fast: a gasket thrown in the skip, a valve reset, a historian buffer overwritten, a witness who goes home and talks it over. A packed kit and a one-page first-hour checklist let the first responder on shift photograph, tag, quarantine and record before the clean-up starts.

                ## Milestones
                1. A checklist ordering evidence by fragility: people, position, parts, paper and electronic data.
                2. A kit packed with camera, evidence tags and bags, scale rulers, marker pens, barrier tape and a log sheet.
                3. A request route agreed with the control systems team to freeze historian and alarm data on demand.
                4. Shift supervisors briefed on when to use the kit and who to call next.

                ## Notes
                Evidence collection never overrides making the area safe. Recovery of parts from a live system goes through the permit to work like any other job.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packed evidence kit and a one-page first-hour checklist are in the control room and every shift supervisor has been briefed on them."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the first-hour checklist in order of how fast each type of evidence decays"
                - "Buy tags, bags, scale rulers and a camera for the kit"
                - "Agree with the control systems team how to freeze historian and alarm data"
                - "Brief each shift supervisor on the kit at their next handover"
                - "Check the kit is complete and the camera is charged @recurring(monthly:3)"
            - name: Trained investigator and facilitator roster
              description: |-
                ## Purpose
                If a serious event lands, the worst time to find out that the only trained facilitator left last year is that afternoon. A named roster of lead investigators and facilitators, with their training date and the levels they can lead, lets the sponsor appoint someone credible within hours.

                ## Milestones
                1. A roster naming each trained investigator, their method training and the highest level they may lead.
                2. At least two people able to lead a level two investigation on every shift pattern or rota.
                3. A training gap list with dates booked for the next course.
                4. The roster held with the incident procedure where the duty manager can find it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A roster showing at least two qualified level two leads per rota, with training dates and booked refreshers for any gaps."
                cadence: rolling
              tasks:
                - "List everyone who has led or facilitated an investigation in the last two years"
                - "Record each person's training and the level they can lead"
                - "Book a course place for each rota short of two qualified leads"
                - "Update the roster for leavers, joiners and expired training @recurring(quarterly)"
            - name: Investigation register and case numbering
              description: |-
                ## Purpose
                Investigations scattered across email threads and personal drives cannot be trended, audited or found when the same pump fails again. One register with a case number, asset tag, event date, level, lead, status and links to the report and actions turns a pile of documents into a record the site can learn from.

                ## Milestones
                1. A register with agreed fields, held in one controlled location.
                2. A case numbering format linked to the event date and site.
                3. The last two years of investigations entered with asset tags and status.
                4. Read access given to engineers and supervisors, edit access limited to the coordinators.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single investigation register holds every investigation from the last two years with case number, asset tag, level, status and report link."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the register fields with the health and safety coordinator"
                - "Set the case numbering format and write it at the top of the register"
                - "Enter the last two years of investigations from email and shared drives"
                - "Set read and edit permissions on the register"
            - name: Site cause classification scheme
              description: |-
                ## Purpose
                Trending causes only works if two investigators would put the same cause in the same box. A short classification scheme, covering equipment and design, procedures, training and competence, communication, supervision, organisation and external causes, with definitions and examples, makes the quarterly trend mean something.

                ## Milestones
                1. Seven to ten top-level cause categories, each with a definition and two worked examples.
                2. Sub-categories kept to a number people can remember without a lookup table.
                3. Five past investigations classified independently by two people and the differences resolved.
                4. The scheme built into the investigation register as a fixed list.

                ## Notes
                Keep "human error" out of the scheme as a cause. It describes what happened, not why, and it ends analysis too early.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written cause scheme with definitions and examples, tested by two people classifying five reports with at least four matching."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft top-level cause categories with a definition for each"
                - "Pick five past reports and classify them separately with a colleague"
                - "Rewrite any definition that caused a disagreement"
                - "Add the categories to the register as a fixed drop-down list"
                - "Review categories that are never or always used @recurring(yearly)"
            - name: Just culture ground rules for investigations
              description: |-
                ## Purpose
                People will only tell investigators what really happened if they trust that honest mistakes will not be punished, while reckless acts still are. Written ground rules, agreed with leadership and worker representatives, separate the learning investigation from any disciplinary process and say so to every witness at the start.

                ## Milestones
                1. A one-page statement separating the investigation from any disciplinary route.
                2. A decision aid distinguishing honest error, at-risk behaviour and reckless conduct.
                3. Agreement from the site leader, human resources and worker or union representatives.
                4. A short script investigators read to each witness before the interview starts.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed ground rules statement and witness script, agreed by leadership, human resources and worker representatives, used in every interview."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read two recent reports for wording that blames individuals"
                - "Draft the ground rules statement with human resources"
                - "Meet worker representatives to agree the wording"
                - "Write the witness opening script and add it to the interview pack"
            - name: Quality audit of the last 20 investigation reports
              description: |-
                ## Purpose
                Before changing anything, find out how good the current reports are. Scoring the last twenty against a few blunt questions (was there a timeline, was each cause supported by evidence, did any action change a system rather than a person, did the event recur) shows exactly where the programme is weak.

                ## Milestones
                1. A scoring sheet with six to eight yes or no questions.
                2. Twenty recent reports scored, ideally by two people.
                3. The proportion ending in retraining or reminders, and the proportion with repeat events, worked out.
                4. A one-page summary of the three biggest weaknesses taken to the site leadership.

                ## Notes
                Expect to find that many reports end at "operator did not follow procedure" and that the actions are reminders. That is the baseline, not a scandal.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Twenty reports scored against a written sheet, with a one-page summary of the three main weaknesses presented to site leadership."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write six to eight yes or no scoring questions"
                - "Pull the last twenty investigation reports from the register"
                - "Score each report and check the register for repeat events"
                - "Write the one-page weakness summary for leadership"
                - "Score a fresh sample of ten reports against the same sheet @recurring(yearly)"
            - name: RCA method selection guide
              description: |-
                ## Purpose
                Five whys suits a simple, single-path failure, a fishbone suits a chronic quality problem, a fault tree suits a top event with several ways to happen, and barrier analysis suits an incident where defences failed. A one-page guide pointing investigators to the right method for each type of problem stops every case being forced through the same tool.

                ## Milestones
                1. Five or six methods described in two lines each, with when to use and when not to.
                2. A simple decision path from problem type to method.
                3. One worked example for each method taken from the site's own past events.
                4. The guide checked by two experienced investigators.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page method guide covering at least five methods, each with a site example, reviewed by two experienced investigators."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the methods your site has used in the last three years"
                - "Write when to use and when not to use each method"
                - "Match one past site event to each method as an example"
                - "Ask two experienced investigators to check the decision path"
            - name: Weekly corrective action status review
              description: |-
                ## Purpose
                Corrective actions drift because nobody asks about them until the audit. Fifteen minutes a week with the action owners, walking the open list oldest first, keeps due dates honest, surfaces blocked actions early and shows the team that investigations lead somewhere.

                ## Milestones
                1. One action list drawn from the register, sorted by age and risk.
                2. A fixed weekly fifteen-minute slot with action owners or their delegates.
                3. Every overdue action given a reason, a new date or an escalation.
                4. Open and overdue counts recorded each week.

                ## Notes
                Start from the **Meeting notes** template. Do not let owners close an action by email alone; ask for the evidence, such as the revised drawing or the issued procedure.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly action review held for twelve consecutive weeks, with open and overdue counts recorded each time."
                cadence: rolling
              tasks:
                - "Export open corrective actions from the register sorted by age"
                - "Book a recurring fifteen-minute slot with the action owners"
                - "Walk the open action list oldest first with the owners @recurring(weekly:mon)"
                - "Ask for closure evidence before marking any action complete"
            - name: Monthly investigation report peer review
              description: |-
                ## Purpose
                Second readers catch the jump in logic that the lead investigator cannot see after three weeks inside the case. A monthly session where two investigators review each other's draft against the audit questions raises the standard faster than any course.

                ## Milestones
                1. A peer review checklist built from the report quality audit questions.
                2. A pairing rota so nobody reviews their own team's case.
                3. Every level two and three report peer reviewed before issue.
                4. Common review comments collected for the next training refresher.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every level two and three report in a quarter carries a signed peer review against the checklist before issue."
                cadence: rolling
              tasks:
                - "Turn the audit scoring questions into a peer review checklist"
                - "Set up a pairing rota across teams"
                - "Hold the peer review session for draft reports @recurring(monthly:12)"
                - "Log the most common review comments in the register notes"
            - name: Effectiveness checks on closed actions
              description: |-
                ## Purpose
                An action can be complete and still useless: the procedure was reissued but nobody reads it, the guard was fitted but is left open. Checking closed actions three to six months later, by looking at the asset, the work and the recurrence data, proves whether the fix worked.

                ## Milestones
                1. An effectiveness check date set for every action at closure.
                2. A short check method for each action type: field look, record sample, interview or failure data.
                3. Each check recorded as effective, partly effective or not effective.
                4. Ineffective actions reopened with a new owner and date.

                ## Notes
                Recurrence of the original failure mode is the best single test. If the event comes back, the root cause was probably not found.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every action closed six months ago or more has a recorded effectiveness result, and each not effective one has been reopened."
                cadence: rolling
              tasks:
                - "Add an effectiveness check date field to the action register"
                - "Write a one-line check method for each action type"
                - "Run the effectiveness checks that fell due this month @recurring(monthly:20)"
                - "Reopen any action found not effective with a new owner"
            - name: Quarterly cause trend and repeat event analysis
              description: |-
                ## Purpose
                Single investigations explain single events; trends explain the site. Each quarter, counting causes by category, asset type and unit, and listing events that repeated despite closed actions, shows where the system keeps producing the same failure and where management attention belongs.

                ## Milestones
                1. Cause counts by category, unit and asset type for the quarter and the rolling year.
                2. A list of repeat events, with the earlier investigation and its actions linked.
                3. Two or three themes written up in plain language.
                4. The trend discussed at the leadership meeting, with any decisions recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A quarterly trend pack with cause counts, repeat events and two or three themes is presented to leadership and its decisions are recorded."
                cadence: cyclic
              tasks:
                - "Export the quarter's investigations with cause categories"
                - "Ask the agent to summarise recurring themes across the quarter's reports"
                - "Build the cause trend and repeat event pack @recurring(quarterly)"
                - "Record leadership decisions from the trend discussion"
            - name: Weekly near miss and minor event triage
              description: |-
                ## Purpose
                Near misses and small failures are cheap lessons, but only if someone reads them. A short weekly triage, with a supervisor, an engineer and a safety representative, decides which reports need a quick five whys, which need a team RCA, and which are simply closed with feedback to the reporter.

                ## Milestones
                1. A fixed weekly triage meeting with three named roles.
                2. Each new report assigned a level from the trigger matrix within a week.
                3. Feedback sent to every reporter on what happened to their report.
                4. Triage decisions logged in the investigation register.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every near miss and minor event report is triaged within seven days and every reporter receives written feedback."
                cadence: rolling
              tasks:
                - "Name the supervisor, engineer and safety representative for triage"
                - "Triage new near miss and minor event reports @recurring(weekly:tue)"
                - "Send each reporter a two-line note on the outcome"
                - "Log each triage decision against the case number"
            - name: Lessons learned bulletin
              description: |-
                ## Purpose
                An investigation that only its team reads teaches six people. A one-page monthly bulletin, written for operators and technicians, with a photo, what happened, why it happened and what changed, spreads the lesson to the shifts and sister sites that will meet the same problem.

                ## Milestones
                1. A one-page bulletin format with photo, what happened, why and what changed.
                2. A distribution list covering all shifts, contractors and sister sites.
                3. The bulletin read out at toolbox talks as well as emailed.
                4. A simple archive searchable by asset type and cause.

                ## Notes
                Remove names and anything that identifies individuals. The bulletin is about the system, not the people.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A lessons learned bulletin is issued every month for six months and logged as read at toolbox talks on each shift."
                cadence: rolling
              tasks:
                - "Design the one-page bulletin layout"
                - "Build the distribution list with shift supervisors and sister sites"
                - "Write and issue this month's lessons learned bulletin @recurring(monthly:26)"
                - "Ask supervisors to log the bulletin at their toolbox talk"
            - name: Overdue action escalation route
              description: |-
                ## Purpose
                Some actions stall because the owner has no budget, no authority or no time, and the weekly review cannot fix that. A written escalation route, from owner to department head to site leader at set ages, gets stuck actions in front of someone who can unblock them or formally accept the risk.

                ## Milestones
                1. Escalation steps written at fixed ages past the due date.
                2. A risk acceptance form for actions that will not be done, signed at the right level.
                3. The route approved by the site leadership.
                4. A monthly escalation list issued to department heads.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No corrective action is more than ninety days overdue without either an escalation record or a signed risk acceptance."
                cadence: rolling
              tasks:
                - "Draft escalation steps at thirty, sixty and ninety days overdue"
                - "Write a short risk acceptance form for actions that will not proceed"
                - "Get the route approved at the leadership meeting"
                - "Issue the overdue action escalation list to department heads @recurring(monthly:5)"
            - name: Investigation timeliness and quality metrics
              description: |-
                ## Purpose
                Managers need a few numbers that show whether the programme works, not a dashboard of thirty. Tracking days to report, actions overdue, effectiveness rate and repeat events each month tells the leadership team whether to invest more or step back.

                ## Milestones
                1. Four or five metrics defined with exact counting rules.
                2. Twelve months of history worked out from the register.
                3. A monthly update to the same chart and table.
                4. Targets agreed with the leadership team for the year.

                ## Notes
                Start from the **Metrics log** template. Avoid counting investigations completed as a success measure; it rewards shallow reports.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log with at least four defined measures and twelve months of history is updated monthly and reviewed by leadership."
                cadence: rolling
              tasks:
                - "Write the counting rule for each metric"
                - "Work out twelve months of history from the register"
                - "Update the investigation metrics log @recurring(monthly:8)"
                - "Agree yearly targets for each metric with the leadership team"
            - name: Annual RCA programme review
              description: |-
                ## Purpose
                Once a year the leadership team should ask whether investigations are reducing repeat events or just producing paper. A review of the year's metrics, trend themes, audit scores and staff feedback ends with three changes to make in the next year, owned by named managers.

                ## Milestones
                1. A year-end pack of metrics, trends, audit scores and investigator feedback.
                2. A short survey of people interviewed during investigations on whether they felt treated fairly.
                3. A leadership review meeting held and minuted.
                4. Three programme changes agreed, each with an owner and a date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A minuted annual review ends with three named programme changes, each with an owner and a target date."
                cadence: cyclic
              tasks:
                - "Collect the year's metrics, trend packs and audit scores"
                - "Send a five-question survey to people interviewed this year"
                - "Hold the annual RCA programme review with leadership @recurring(yearly)"
                - "Record three changes with owners and dates"
            - name: Evidence store and retention housekeeping
              description: |-
                ## Purpose
                Failed parts and samples pile up in a corner of the workshop until someone throws away the one needed for a claim or a legal hold. A labelled evidence store with a retention rule for each case level keeps what matters, releases what does not and protects the chain of custody.

                ## Milestones
                1. A lockable store with shelves labelled by case number.
                2. A retention rule for each investigation level, agreed with legal or insurance advisers.
                3. A custody log recording who took items out and when.
                4. Items past retention released in writing by the case sponsor.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every item in the evidence store carries a case number and custody log entry, and nothing is past its retention date without a signed release."
                cadence: rolling
              tasks:
                - "Find a lockable space for the evidence store"
                - "Ask legal or the insurer how long to keep evidence for each level"
                - "Start a custody log for each stored item"
                - "Walk the evidence store and release items past retention @recurring(quarterly)"
            - name: Interviewing witnesses after an incident
              description: |-
                ## Purpose
                Memory degrades within days and is easily reshaped by group discussion and leading questions. Learning to run a cognitive-style interview, open questions first, the witness's own account before any challenge, and notes read back at the end, turns witnesses into reliable evidence rather than defensive storytellers.

                ## Milestones
                1. The structure of a cognitive interview learned and written on a card.
                2. Two practice interviews run with colleagues on a past event, with feedback.
                3. An interview note template with space for verbatim quotes and read-back confirmation.
                4. One real interview conducted using the structure and reviewed with an experienced investigator.

                ## Notes
                Interview people separately and as soon as they are fit and willing. Offer a companion or representative if they want one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two practice interviews and one real interview completed using the cognitive structure, with written feedback from an experienced investigator."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read a short guide to cognitive interviewing for investigators"
                - "Write the interview structure on a pocket card"
                - "Run two practice interviews with colleagues on a past event"
                - "Ask an experienced investigator to sit in on your next real interview"
            - name: Building a sequence of events timeline
              description: |-
                ## Purpose
                Timelines are the backbone of every good investigation: it shows what is known, what is assumed and where the gaps are. Practising the build, with events from interviews, logs, historian trends, permits and maintenance records, each tagged by source and confidence, makes the later analysis far harder to argue with.

                ## Milestones
                1. A timeline format with time, event, source and confidence for each line.
                2. Clocks reconciled across the control system, alarm log, access system and phones.
                3. A practice timeline built for a closed past event from its original records.
                4. Gaps and conflicts marked and turned into questions for interviews.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A practice timeline for a past event with source and confidence on every line, and clock offsets between systems recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick a closed past event with good records for practice"
                - "Check the clock offsets between the control system, alarm log and access system"
                - "Build the timeline with source and confidence on each line"
                - "Mark every gap or conflict as a question for an interview"
            - name: Five whys with evidence at every step
              description: |-
                ## Purpose
                Five whys is the most used and most abused method: chains that jump to a convenient answer, stop at a person, or follow only one branch. Practising it with a rule that every why must be backed by a fact, and that branches are allowed, turns a quick tool into a reliable one for simple failures.

                ## Milestones
                1. The evidence-at-every-step rule and branching approach understood.
                2. Three past five whys from the register rewritten with evidence for each step.
                3. The point where each chain moved from physical cause to system cause marked.
                4. A short worked example added to the method selection guide.

                ## Notes
                Stop when you reach a cause the site can control and change, not at the fifth why by rule. Some chains need three, some need eight.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three historical five whys analyses rewritten with evidence noted for every step, and one added as a worked example to the guide."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull three past five whys analyses from the register"
                - "Note the evidence behind each step and mark steps that have none"
                - "Rewrite each chain with branches where the facts demand them"
                - "Add the best rewritten chain to the method selection guide"
            - name: Fishbone diagrams beyond brainstorming
              description: |-
                ## Purpose
                Fishbones filled with every idea in the room are a list of suspects, not an analysis. Learning to use the six categories to generate hypotheses and then test each one against data, ruling causes in or out with evidence, makes it a useful tool for chronic quality and performance problems.

                ## Milestones
                1. A fishbone built for a real chronic problem with a tightly written problem statement.
                2. Each candidate cause marked as confirmed, ruled out or untested.
                3. A test plan written for the untested causes: data, inspection or trial.
                4. The surviving causes carried into a corrective action plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A fishbone for a real chronic problem in which every candidate cause is marked confirmed, ruled out or untested with a test plan."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose a chronic problem with at least six months of data"
                - "Write a problem statement naming what, where, when and how much"
                - "Run a fishbone session and list every candidate cause"
                - "Test each candidate against the data and mark the result"
            - name: Fault tree analysis for a single top event
              description: |-
                ## Purpose
                Where a failure can happen through several combinations of equipment faults and human actions, a fault tree shows them all and which combinations are most likely. Building one for a real top event, with AND and OR gates and basic events tied to evidence, is the step from qualitative RCA to structured logical analysis.

                ## Milestones
                1. The gate types, basic events and minimal cut sets understood.
                2. A top event defined precisely for a recent failure.
                3. A tree drawn to basic events, with each branch marked as confirmed or eliminated by evidence.
                4. The minimal cut sets listed and checked by a second engineer.

                ## Notes
                Keep the first tree qualitative. Adding failure rates is a separate skill and the data is often weaker than the logic.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A fault tree for a real top event with every branch marked confirmed or eliminated and its minimal cut sets checked by a second engineer."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Work through a fault tree tutorial covering gates and cut sets"
                - "Define the top event for a recent failure in one sentence"
                - "Draw the tree down to basic events on a large sheet"
                - "Mark each branch confirmed or eliminated with its evidence"
                - "Ask a second engineer to check the minimal cut sets"
            - name: Change analysis and barrier analysis
              description: |-
                ## Purpose
                Two quick, powerful methods are often skipped. Change analysis compares the failed situation with a similar one that worked and lists every difference, while barrier analysis lists the defences that should have stopped the event and asks why each one failed, was missing or was bypassed.

                ## Milestones
                1. A change analysis table completed for a past event against a comparable success.
                2. A barrier analysis for the same event listing each barrier and its state.
                3. Findings from both compared with the original report's conclusions.
                4. A note on when each method earns its place in a team RCA.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Change and barrier analyses completed on one past event, with a written comparison against the original report's conclusions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick a past event that has a comparable success to compare against"
                - "List every difference between the failed and successful situations"
                - "List each barrier that should have stopped the event and its state"
                - "Compare both analyses with what the original report concluded"
            - name: Human factors in investigations
              description: |-
                ## Purpose
                Behind most actions labelled operator error are conditions that made the error likely: fatigue, poor labels, alarm floods, confusing procedures, time pressure. Learning a performance shaping factors checklist and how to ask about each one lets you find the conditions to fix instead of the person to retrain.

                ## Milestones
                1. A performance shaping factors checklist adopted, covering task, equipment, environment, people and organisation.
                2. The difference between slips, lapses, mistakes and violations understood with site examples.
                3. One past report re-examined with the checklist and the missed factors listed.
                4. Human factors questions added to the interview card.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One past operator error report re-examined with a performance shaping factors checklist, with at least three contributing conditions identified."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read an introduction to human error types and performance shaping factors"
                - "Choose a past report that concluded operator error"
                - "Work through the checklist for that event and list the conditions found"
                - "Add three human factors questions to the interview card"
            - name: Writing causal statements and reports
              description: |-
                ## Purpose
                Reports are judged by whether a manager who was not there can act on it. Learning to write causal statements that link cause, effect and event in one sentence, and a report that moves from summary to timeline to analysis to actions without opinion, makes findings hard to dismiss and easy to fund.

                ## Milestones
                1. A causal statement pattern adopted: this cause led to this effect, which increased the likelihood of the event.
                2. A report structure with a one-page summary a manager can read in two minutes.
                3. One recent report rewritten to the new structure.
                4. The rewritten report reviewed by its sponsor for clarity.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One report rewritten with formal causal statements and a one-page summary, and confirmed by its sponsor as clearer than the original."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write three causal statements for a recent investigation"
                - "Draft a one-page summary of that investigation for a manager"
                - "Rewrite the full report to the new structure"
                - "Ask the original sponsor to compare the two versions"
            - name: Physical failure evidence basics
              description: |-
                ## Purpose
                Engineers leading investigations need enough failure analysis knowledge to recognise what a broken part is telling them and when to call a metallurgist. Learning to tell fatigue from overload fractures, the main corrosion and wear forms, and how to protect a fracture surface preserves evidence that is often destroyed in the first hour.

                ## Milestones
                1. The visual signs of fatigue, ductile and brittle overload fractures recognised from reference photos.
                2. The common corrosion and wear mechanisms for your plant's materials listed.
                3. Rules for handling fracture surfaces written into the evidence checklist.
                4. One failed part from the evidence store examined with a metallurgist or materials engineer.

                ## Notes
                Never fit broken halves back together to see how they match. It damages the surfaces the laboratory needs.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fracture handling rules added to the evidence checklist and one stored failed part examined with a materials specialist."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Study a reference set of fracture surface photographs"
                - "List the corrosion and wear mechanisms likely in your plant"
                - "Add fracture surface handling rules to the evidence checklist"
                - "Book an hour with a materials engineer to examine a stored part"
            - name: Choosing RCA software or a structured workbook
              description: |-
                ## Purpose
                Dedicated RCA software can enforce method, link evidence and trend causes, but it costs licences and training and can turn analysis into form-filling. Comparing two or three tools against a well-built workbook, scored on the site's real needs, gives a decision the investigators will actually use.

                ## Milestones
                1. Requirements written from the investigators' and managers' needs.
                2. Two or three tools and a workbook option scored against the same criteria.
                3. A trial of the preferred option on one real investigation.
                4. A recorded decision with cost, rollout plan and owner.

                ## Notes
                Start from the **Purchase decision** template. Check that whatever you choose can export the register if you change tools later.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tool decision comparing at least three options on written criteria, informed by one live trial."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Interview three investigators about what slows them down"
                - "Write the requirements list with must-have and nice-to-have"
                - "Score two or three tools and a workbook against the list"
                - "Trial the preferred option on the next team investigation"
            - name: Corrective actions that change the system
              description: |-
                ## Purpose
                Retraining and reminders are the most common corrective actions and the least effective. Rewriting the site's action standard around the hierarchy of controls, with a preference for eliminating the hazard, changing the design or adding an engineered barrier, and with every action specific, owned and dated, is the single biggest improvement most programmes can make.

                ## Milestones
                1. An action standard ranking actions from elimination and design change down to training and reminders.
                2. A rule that a training-only action needs written justification from the sponsor.
                3. Open actions in the register re-graded against the hierarchy.
                4. The share of system-level actions tracked from this quarter on.

                ## Notes
                Start from the **Remediation plan** template. Design changes that come out of an investigation still go through management of change before they are made.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved action standard based on the hierarchy of controls, with all open actions re-graded and the share of system-level actions reported."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count how many open actions are training or reminders only"
                - "Draft the action standard ranked by the hierarchy of controls"
                - "Re-grade every open action against the standard"
                - "Present the standard and the re-graded list to leadership"
            - name: External failure analysis laboratory arrangement
              description: |-
                ## Purpose
                Once a shaft, weld or bearing has failed, the answer often sits under a microscope the site does not own. Arranging a laboratory in advance, with agreed scope, turnaround, costs, chain of custody and sample shipping, means the part goes out within days instead of sitting in a bag for months.

                ## Milestones
                1. Two laboratories compared on capability, turnaround, cost and accreditation.
                2. A framework order or call-off arrangement in place with the chosen laboratory.
                3. A sample submission form and shipping method agreed, including chain of custody.
                4. One past sample sent as a trial and the report quality judged.

                ## Notes
                Start from the **Vendor** template. Ask the laboratory what it needs before you clean, cut or package anything.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A call-off arrangement with an accredited failure analysis laboratory is in place and one trial sample has been reported on."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask colleagues and sister sites which laboratories they trust"
                - "Request scope, turnaround and price from two laboratories"
                - "Set up a call-off order with the chosen laboratory"
                - "Send one stored sample as a trial with the custody form"
                - "Review the laboratory's turnaround and report quality @recurring(yearly)"
            - name: Reopening shallow operator error investigations
              description: |-
                ## Purpose
                Old reports that stopped at operator error usually left the real cause in place, and some of those events have already come back. Picking the five highest-potential ones from the quality audit and reopening them with a proper timeline and human factors analysis fixes real risks and shows the workforce the culture has changed.

                ## Milestones
                1. Five past investigations chosen by potential severity and recurrence.
                2. Each reopened with a short terms of reference and a new lead.
                3. Revised causes and actions recorded against the original case number.
                4. The outcome explained to the people originally named, where they are still on site.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Five past operator error investigations reopened, each with revised causes and system-level actions recorded against the original case."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Rank the operator error reports from the audit by potential severity"
                - "Write a short terms of reference for the top five"
                - "Run a timeline and human factors review on each case"
                - "Meet the people originally named to explain the new findings"
            - name: Rules for reopening a closed investigation
              description: |-
                ## Purpose
                New evidence turns up after a report is issued: a laboratory result, a second failure, a contractor's log. Agreeing when an investigation must be reopened, who decides and how the revised findings are issued stops people quietly ignoring evidence that contradicts a signed report.

                ## Milestones
                1. Written reopening triggers, such as new evidence, recurrence or an ineffective action.
                2. The person who decides on reopening named for each investigation level.
                3. A revision method for reports, with the change and reason recorded.
                4. The rules added to the investigation procedure.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Reopening triggers, decision owners and a report revision method are written into the approved investigation procedure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List past cases where new evidence arrived after the report"
                - "Draft the reopening triggers and decision owners"
                - "Write the report revision method with a change record"
                - "Add the rules to the investigation procedure"
            - name: Feeding RCA actions into work and change systems
              description: |-
                ## Purpose
                Actions held only in the investigation register compete badly with the maintenance backlog and the change pipeline. A clear handoff, where each action becomes a work order, a change request or a document revision with a cross-reference back to the case, means the work gets planned and the investigation can see its progress.

                ## Milestones
                1. Each action type mapped to its home system: work order, change request, document revision or training record.
                2. A cross-reference field added in both directions.
                3. Open actions checked to see that each has a live record in its home system.
                4. The handoff step written into the investigation procedure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every open corrective action has a cross-referenced record in its home system, and the handoff step is in the procedure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Map each corrective action type to the system that will deliver it"
                - "Ask the maintenance planner to add a case number field to work orders"
                - "Check each open action has a live record in its home system"
                - "Write the handoff step into the investigation procedure"
            - name: Historian and alarm data extraction for investigations
              description: |-
                ## Purpose
                Process data is the most objective witness, but extracting it well takes skill and the raw buffers may only hold a few weeks. A standard extraction routine, with tag lists, time windows, sample rates and alarm and event logs saved in an unaltered form, gives every investigation a consistent and defensible data set.

                ## Milestones
                1. Historian and alarm log retention periods confirmed with the control systems team.
                2. A standard extraction request listing tags, window, sample rate and format.
                3. A plotting template showing trends with alarms and operator actions overlaid.
                4. The routine tested on one past event and timed.

                ## Notes
                Ask for raw data, not compressed or averaged values. Compression can hide the spike that started the event.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested data extraction routine and plotting template that produce raw trends with alarms overlaid for a past event within one working day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the control systems team how long historian and alarm data are kept"
                - "Write the standard extraction request with tags, window and sample rate"
                - "Build a plotting template with alarms and operator actions overlaid"
                - "Test the routine on a past trip and record how long it took"
            - name: First 72 hours of a major incident investigation
              description: |-
                ## Purpose
                After a serious incident, the first three days decide what evidence survives and how the investigation is seen. A rehearsed plan for appointing the lead, setting terms of reference, securing the scene with the emergency team, starting interviews and briefing regulators and families through the right channels keeps the effort orderly when everyone is under strain.

                ## Milestones
                1. A 72-hour plan with hour-by-hour priorities and named roles.
                2. Contact routes for regulators, insurers, legal advisers and the corporate team listed.
                3. A tabletop exercise run with the leadership team on a realistic scenario.
                4. Lessons from the exercise written back into the plan.

                ## Notes
                The emergency response and the scene release decisions belong to the incident commander and, where they apply, the authorities. The investigation works within them.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written 72-hour investigation plan tested in a tabletop exercise with the leadership team, with the lessons incorporated."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Draft the 72-hour plan with priorities for each block of hours"
                - "List the regulator, insurer and legal contacts with out-of-hours numbers"
                - "Book a two-hour tabletop exercise with the leadership team"
                - "Update the plan with what the exercise exposed"
            - name: Facilitating a two-day team RCA workshop
              description: |-
                ## Purpose
                Level two investigations usually come down to a workshop where operators, technicians, engineers and a supervisor work through the timeline and analysis together. Planning the agenda, the evidence pack, the room and the facilitation so that quiet voices are heard and the group does not jump to a pet theory is a skill worth preparing for each time.

                ## Milestones
                1. Attendees confirmed from operations, maintenance, engineering and supervision, with shift cover arranged.
                2. An evidence pack with the timeline, photos, data plots and interview summaries issued a day before.
                3. The workshop run to an agenda, with causes and draft actions recorded.
                4. A workshop record issued to attendees within two days.

                ## Notes
                Start from the **Meeting notes** template for the workshop record. Keep the manager who owns the area out of the room for the analysis sessions if their presence silences people.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two-day workshop held with all four disciplines present, and a record of causes and draft actions issued within two days."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Confirm attendees and shift cover with the area supervisor"
                - "Prepare the evidence pack with timeline, photos and data plots"
                - "Write the two-day agenda with time boxes for each method"
                - "Issue the workshop record to attendees after the session"
            - name: Presenting findings to the leadership team
              description: |-
                ## Purpose
                Leaders who were not involved will decide whether the actions get budget, often in a twenty-minute slot. A short presentation that walks from what happened to why, shows the evidence for each cause and asks for specific decisions turns a report into funded work.

                ## Milestones
                1. A presentation of eight slides or fewer: event, timeline, causes with evidence, actions and decisions needed.
                2. Costs and owners worked out for each proposed action.
                3. A rehearsal with the sponsor, including the hard questions.
                4. Decisions from the meeting recorded and sent to action owners.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Findings presented to leadership in eight slides or fewer, with each proposed action given an owner, a budget decision and a date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft eight slides from the report summary"
                - "Cost each proposed action with its owner"
                - "Rehearse the presentation with the sponsor"
                - "Send the recorded decisions to each action owner"
            - name: Regulator or insurer review of an investigation
              description: |-
                ## Purpose
                After a reportable incident, a regulator, insurer or corporate auditor may examine the investigation as closely as the event itself. Preparing a clean file, with terms of reference, evidence log, interview notes, analysis, report and action status, and agreeing with legal advisers what is shared, lets the review go smoothly and shows the site takes it seriously.

                ## Milestones
                1. The legal adviser consulted on privilege and what may be disclosed.
                2. An indexed investigation file assembled with the evidence log and custody records.
                3. Action status brought up to date with closure evidence.
                4. A single point of contact named for the reviewer's questions.

                ## Notes
                Legal privilege and disclosure rules differ by country and by purpose of the investigation. Take advice before the investigation starts if a regulator is already involved.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An indexed investigation file, cleared by legal advisers, is delivered to the reviewer by the agreed date with current action status."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Call the legal adviser about privilege and disclosure"
                - "Assemble the indexed investigation file"
                - "Update every action's status with closure evidence"
                - "Name the single point of contact for the reviewer"
            - name: Joint investigation with a vendor or contractor
              description: |-
                ## Purpose
                When a vendor's equipment or a contractor's work is involved, each side guards its liability and the truth can get lost between them. Agreeing a joint terms of reference, shared evidence access, who holds the failed parts and how disagreements are recorded keeps the investigation technical rather than contractual.

                ## Milestones
                1. A joint terms of reference signed by both parties.
                2. An evidence access and custody arrangement agreed in writing.
                3. Joint inspections and tests witnessed by both sides.
                4. A final report with any points of disagreement stated clearly rather than buried.

                ## Notes
                Check the contract's warranty and notification clauses with the contracts team before agreeing anything about liability.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A joint investigation report signed by both parties, with evidence custody records and any disagreements stated explicitly."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the contracts team about warranty and notification clauses"
                - "Draft a joint terms of reference with the vendor or contractor"
                - "Agree in writing who holds the failed parts"
                - "Schedule joint inspections with witnesses from both sides"
            - name: Your first investigation as a new lead
              description: |-
                ## Purpose
                Being handed your first investigation, often as a young engineer with a senior sponsor and an anxious crew, is daunting. A plan for the first two weeks, with an experienced mentor, a clear terms of reference and a checklist of what a good report needs, turns it into a solid piece of work and a big step in competence.

                ## Milestones
                1. An experienced investigator agreed as mentor for the case.
                2. The terms of reference clarified with the sponsor in a first meeting.
                3. Evidence, timeline and interviews completed using the site's standard tools.
                4. The report peer reviewed and a short reflection written on what you would do differently.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A first investigation report issued on time with mentor sign-off, peer review and a written personal reflection."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask an experienced investigator to mentor you on this case"
                - "Meet the sponsor to confirm scope and deadline"
                - "Build the timeline before forming any theory of cause"
                - "Write a one-page reflection after the peer review"
            - name: Sponsoring an investigation as a manager
              description: |-
                ## Purpose
                Sponsoring an investigation means setting its scope, resources and deadline, then resisting the urge to steer it toward a comfortable answer, especially when the causes point at the manager's own decisions. Knowing the sponsor's job, and what to avoid, is what lets the team find the uncomfortable truth.

                ## Milestones
                1. The terms of reference issued within a day of the event, with time and people released.
                2. Weekly check-ins limited to progress, obstacles and resources, not conclusions.
                3. Findings accepted or challenged only on evidence, in writing.
                4. Actions owned at the right level, including those that fall to the sponsor.

                ## Notes
                If the causes point to your own budget, staffing or priority decisions, say so first. Teams watch what the sponsor does with that finding more than anything else.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One sponsored investigation completed with terms of reference issued within a day, weekly check-ins held and any challenge to findings recorded with evidence."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Issue the terms of reference and release the team's time"
                - "Hold a twenty-minute check-in each week on progress and obstacles"
                - "Write down any challenge to findings with the evidence behind it"
                - "Take ownership of actions that fall within your own decisions"
            - name: Investigating when you were involved
              description: |-
                ## Purpose
                Engineers are sometimes asked to investigate a failure of equipment they designed, specified or approved, or a job they supervised. Declaring the conflict, stepping back from the lead role and acting as a witness and technical source keeps the findings credible and protects you from accusations of a cover-up.

                ## Milestones
                1. The interest declared in writing to the sponsor before the investigation starts.
                2. A lead appointed who had no part in the design or decision.
                3. Your role defined as technical input and witness, with your own account recorded first.
                4. Findings about your own work accepted, challenged on evidence or recorded as a dissent.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "A written declaration of interest made, an independent lead appointed and your technical input recorded separately in the investigation file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a declaration of your involvement to the sponsor"
                - "Suggest an independent lead with the right technical background"
                - "Give your own account as a witness before reading others' statements"
                - "Record any dissent with the evidence behind it"
            - name: Lean RCA for a small site or team
              description: |-
                ## Purpose
                Small plants, workshops and contractor firms cannot staff a full investigation programme, but still have failures worth learning from. A stripped-down approach, one-page form, a trigger rule, a monthly half-hour review and a link to a larger partner or consultant for serious events, delivers most of the value for a fraction of the effort.

                ## Milestones
                1. A one-page investigation form combining timeline, five whys and actions.
                2. A simple trigger rule for when to use it and when to call in outside help.
                3. An outside investigator or consultant identified for serious events.
                4. Three months of events run through the form and reviewed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page RCA form and trigger rule in use for three months, with a named outside investigator for serious events."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a one-page form with timeline, five whys and actions"
                - "Write a one-line rule for when outside help is needed"
                - "Identify an outside investigator and agree their day rate"
                - "Review the month's events using the form for three months"
            - name: Supporting the affected team after a serious event
              description: |-
                ## Purpose
                People involved in a serious incident may be shocked, guilty or afraid of blame, and an investigation can add to that. A manager who arranges support, keeps the team informed of progress, explains how findings will be used and shares the final outcome first with those affected keeps trust and makes the next report more honest.

                ## Milestones
                1. Support arranged through the employee assistance programme or occupational health.
                2. The affected team told how the investigation will run and how statements will be used.
                3. Progress updates given at agreed intervals.
                4. Findings shared with the affected team before general release.

                ## Notes
                Keep updates factual and avoid commenting on causes before the investigation finishes.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Support offered to every person involved, progress updates given at agreed intervals and findings briefed to the affected team before release."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Contact occupational health or the assistance programme about support"
                - "Brief the affected team on how the investigation will work"
                - "Set dates for progress updates to the team"
                - "Brief the team on the findings before the report is released"
            - name: Organisational and latent cause analysis
              description: |-
                ## Purpose
                Experienced investigators look past the failed part and the missed step to the decisions that set them up: deferred maintenance budgets, staffing cuts, production targets, unclear ownership, drift in standards. Tracing causes up to these organisational factors, carefully and with evidence, is what stops the next different-looking event with the same origin.

                ## Milestones
                1. An organisational factors framework chosen, covering resources, goals, structure, oversight and culture.
                2. Two significant past investigations extended to the organisational level.
                3. Findings phrased as conditions and decisions, not individual blame.
                4. The findings discussed with senior leadership and their response recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two past investigations extended to organisational causes with evidence, and senior leadership's response to the findings recorded."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Read two published major accident reports for organisational findings"
                - "Choose an organisational factors framework for the site"
                - "Extend two past investigations to the organisational level"
                - "Present the findings to senior leadership and record the response"
            - name: Common cause review across sites
              description: |-
                ## Purpose
                Companies with several sites often investigate the same failure in each without anyone noticing. Pooling investigations from all sites once a year, coded with a shared cause scheme, finds common causes in purchasing, standards, design templates or corporate procedures that no single site could fix alone.

                ## Milestones
                1. Investigation data from each site gathered in a shared format.
                2. A common cause scheme agreed between sites.
                3. Causes and failure modes appearing at two or more sites listed.
                4. Corporate-level actions proposed to the engineering or operations function.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A cross-site review identifies causes shared by two or more sites and proposes corporate-level actions with named owners."
                cadence: cyclic
              tasks:
                - "Ask each site's coordinator for a year of investigations in a shared format"
                - "Agree the shared cause scheme with the site coordinators"
                - "List causes that appear at two or more sites"
                - "Run the cross-site common cause review @recurring(yearly)"
            - name: Intermittent and no-fault-found failures
              description: |-
                ## Purpose
                Trips that clear themselves, faults that vanish when the technician arrives and parts returned as no fault found are among the hardest problems to solve and the most expensive to ignore. Specialist techniques, event data capture, deliberate stress testing, is and is not analysis and careful logging across occurrences, turn a frustrating mystery into a solvable one.

                ## Milestones
                1. Every occurrence logged with time, conditions, operating state and what was replaced.
                2. An is and is not analysis completed for the failure.
                3. Data capture set up to record the next occurrence in detail.
                4. Hypotheses tested one at a time and the result recorded.

                ## Notes
                Replacing several parts at once may stop the fault and leave you with no idea which change fixed it. Change one thing per test.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An intermittent fault traced to a confirmed cause by testing hypotheses one at a time, with every occurrence logged."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Start a log of every occurrence with conditions and parts changed"
                - "Complete an is and is not table for the fault"
                - "Ask the control systems team to set up event capture for the next trip"
                - "Test the strongest hypothesis by changing one thing at a time"
            - name: Kepner-Tregoe style problem specification
              description: |-
                ## Purpose
                For chronic or puzzling deviations, a disciplined specification of what the problem is and is not, by what, where, when and extent, narrows the possible causes before any brainstorming. Mastering this approach gives senior engineers a way to cut through competing theories in a room of experts.

                ## Milestones
                1. The specification, distinction and change steps of the method understood.
                2. One live chronic problem specified fully with is and is not data.
                3. Possible causes tested against the specification and most eliminated.
                4. The most likely cause verified by inspection, data or trial.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A completed problem specification for a live chronic problem, with candidate causes tested against it and the surviving cause verified."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Study the problem specification method with a worked example"
                - "Choose a live chronic deviation with good data"
                - "Fill in the what, where, when and extent for is and is not"
                - "Test each candidate cause against the specification"
            - name: Systems-theoretic analysis with STAMP and CAST
              description: |-
                ## Purpose
                Linear chain methods struggle with accidents arising from interactions between control systems, people and organisations with no single failed part. Applying a systems-theoretic approach such as CAST, modelling the control structure and asking why each controller made unsafe decisions, is the frontier for complex automated plant and multi-party operations.

                ## Milestones
                1. The STAMP model and the CAST process studied from the published handbook.
                2. A control structure diagram drawn for a past complex event.
                3. Each controller's unsafe actions and the reasons behind them listed.
                4. Findings compared with the original linear analysis and the differences written up.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A CAST analysis of one past complex event, with a control structure diagram and a written comparison against the original findings."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Read the CAST handbook's introduction and worked example"
                - "Choose a past event involving automation and several parties"
                - "Draw the control structure for that event"
                - "Write up what CAST found that the original analysis missed"
---

# Root Cause Analysis

Root Cause Analysis is for engineers who lead or join investigations after a failure, a trip or an incident, and for the managers who sponsor them and own the actions that follow. It starts with foundations (trigger levels, a procedure, evidence preservation, a fair interview culture and an honest look at past reports), moves through the standing machinery of action reviews, effectiveness checks and trend analysis, then the core methods from timelines and five whys to fault trees and barrier analysis, improvement decisions, dated investigations and presentations, situations for new investigators and sponsors, and finally specialist work on organisational causes, common causes across sites and systems-theoretic models.

The rhythm is weekly for open corrective actions and event triage, monthly for report peer review, effectiveness checks, escalations, metrics and lessons learned, quarterly for cause trends and evidence housekeeping, and yearly for the programme review. The Metrics log, Purchase decision, Vendor, Remediation plan and Meeting notes templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
