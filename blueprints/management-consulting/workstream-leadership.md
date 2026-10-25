---
id: management-consulting.workstream-leadership
name: Workstream Leadership
description: "Run one workstream of an engagement well: a one-page charter, a daily team check-in, reviews that raise quality, a working relationship with the client counterpart and crisp weekly reporting to your manager."
category: business
version: 1.0.0
tags: [management-consulting, workstream-leadership, knowledge-worker, manager, team-leadership, daily-check-in, client-counterpart, analysis-quality]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - meeting-notes
    - risk-register
    - one-on-one
    - feedback-themes
    - development-plan
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Workstream Leadership
          description: "Leading a workstream on an engagement: daily check-ins with the team, quality of analysis, the client counterpart relationship and reporting to the manager."
          projects:
            - name: One-page workstream charter
              description: |-
                ## Purpose
                Workstreams drift when the lead and the manager carry slightly different pictures of what the workstream is for. Writing one page with the workstream's key question, its deliverables, what it hands to other workstreams and what it does not cover gives everyone, including the client counterpart, the same reference from day one.

                ## Milestones
                1. One page stating the workstream's key question, three to five sub-questions and the deliverables with dates.
                2. An explicit out-of-scope list covering at least the two topics most likely to creep in.
                3. Inputs needed from and outputs owed to other workstreams named, with the person on each side.
                4. The charter agreed by your engagement manager and shared with the client counterpart.

                ## Notes
                Write the key question as a question the client would recognise, not as an activity. "Which three plants should close by 2027" beats "plant footprint analysis".
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page workstream charter with key question, deliverables, interfaces and exclusions is signed off by the engagement manager within the first week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the workstream's key question and sub-questions in plain words"
                - "List each deliverable with its due date and the format the manager expects"
                - "Write the out-of-scope list and the interfaces with other workstreams"
                - "Walk your engagement manager through the charter and capture edits"
            - name: Expectations conversation with the engagement manager
              description: |-
                ## Purpose
                New workstream leads often guess what they are allowed to decide and then either escalate everything or surprise their manager in front of the client. A thirty-minute conversation in the first days settles decision rights, how often the manager wants to see work, how they like bad news and what a good week looks like to them.

                ## Milestones
                1. A list of decisions you take alone, decisions you take and report, and decisions that need the manager first.
                2. The manager's preferred review rhythm and format for work in progress written down.
                3. How and how fast the manager wants to hear about problems agreed.
                4. Two or three things the manager wants you to grow in on this engagement noted.

                ## Notes
                Bring a draft of the decision list rather than asking an open question. Managers edit faster than they author.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written note of decision rights, review rhythm and escalation preferences exists and the manager has confirmed it by message."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a three-column list of decisions you expect to own, report or escalate"
                - "Book thirty minutes with your engagement manager this week"
                - "Ask how and when they want to see work in progress"
                - "Send a short follow-up note confirming what was agreed"
            - name: Workstream team roster and strengths map
              description: |-
                ## Purpose
                Knowing that an analyst is strong in modelling but has never run a client interview changes how you staff every task in the first fortnight. A short roster with each person's skills, availability, other commitments and development goals lets you assign work to stretch people without putting the deliverable at risk.

                ## Milestones
                1. Each team member's role, location, working days and other commitments recorded.
                2. Strengths and gaps for modelling, research, interviews and slide writing noted for each person.
                3. One development goal per person captured from a short conversation with them.
                4. First fortnight of task assignments set against the map.

                ## Notes
                Start from the **Skills matrix** template. Include any client staff seconded to the workstream, not only consultants.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A roster covering every team member's availability, strengths, gaps and one development goal is used to set the first two weeks of assignments."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every person on the workstream with role, location and working days"
                - "Ask each person which kinds of analysis they enjoy and which they want to learn"
                - "Score strengths and gaps for each person across five task types"
                - "Assign the first fortnight of work with one stretch task per person"
            - name: First meeting with the client counterpart
              description: |-
                ## Purpose
                Your client counterpart decides how quickly you get data, introductions and honest views, and they are usually doing this on top of a full job. A first one-to-one that asks what they need from the work, what worries them and how they like to be kept informed builds the relationship before the first data request lands on their desk.

                ## Milestones
                1. A one-to-one held in the first week, in person where possible.
                2. The counterpart's own goals for the workstream and their main concerns written down.
                3. Their preferred meeting time, channel and level of detail agreed.
                4. A standing weekly slot booked in both calendars.

                ## Notes
                Start from the **Meeting notes** template. Ask what happened the last time consultants worked in their area. The answer tells you what to avoid.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A first counterpart meeting is held and recorded, with their goals, concerns and preferred rhythm noted and a weekly slot in both calendars."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your manager what they know about the counterpart and their position"
                - "Prepare five open questions about their goals and concerns"
                - "Hold the meeting and write up notes the same day"
                - "Book a recurring weekly slot that suits the counterpart's diary"
            - name: Workstream analysis tracker
              description: |-
                ## Purpose
                A list of analyses held in the lead's head disappears the first day the lead is ill or pulled into a partner meeting. A shared tracker with each analysis, the question it answers, the owner, the data it needs, its status and its next review date shows the whole team and your manager where the workstream really stands.

                ## Milestones
                1. Every planned analysis listed against the sub-question it answers.
                2. An owner, data dependency, due date and status for each line.
                3. A simple status scheme agreed with the team and used consistently.
                4. The tracker linked from the team channel and the engagement manager's view.

                ## Notes
                Keep status to four values such as not started, in progress, in review and done. More options make every update an argument.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared tracker lists every analysis with owner, question, data dependency, due date and status, and the engagement manager can open it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up the tracker with columns for question, owner, data, due date and status"
                - "Enter every analysis from the charter and the engagement workplan"
                - "Agree the four status values with the team"
                - "Share the tracker link with the team and your engagement manager"
            - name: Daily check-in format for the team
              description: |-
                ## Purpose
                Teams without a fixed morning touchpoint discover blockers at six in the evening, when nothing can be done about them. Designing a fifteen-minute check-in with the same three questions, a fixed time and a rule that problem solving happens afterwards keeps the daily meeting short enough that people actually want to attend.

                ## Milestones
                1. A fixed time and place, or call link, agreed with the whole team.
                2. Three standard questions written down: what was finished, what is next, what is blocked.
                3. A rule that detailed problem solving moves to a follow-on huddle with only the people needed.
                4. The first five check-ins run and adjusted on team feedback.

                ## Notes
                Hold it standing up if you are in a client team room. Twelve minutes is a good target; past twenty it has become a working session.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written daily check-in format with fixed time and three questions has run for five consecutive working days in under twenty minutes each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Propose a check-in time that fits client hours and travel days"
                - "Write the three standard questions in the team channel"
                - "Run the first check-in and time it"
                - "Ask the team after day five what to change"
            - name: Interface map with other workstreams
              description: |-
                ## Purpose
                Two workstreams sizing the same cost base in different ways is one of the most common causes of a confused steering committee. Mapping where your workstream depends on others, shares data with them or overlaps in topic, and naming the counterpart lead for each, prevents duplicate analyses and conflicting numbers reaching the client.

                ## Milestones
                1. Each other workstream listed with its lead and the points where it touches yours.
                2. Shared data sets and the agreed single source for each identified.
                3. Overlapping topics allocated to one workstream or explicitly shared.
                4. A short cross-workstream sync in place with the other leads.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A map of every dependency and overlap with other workstreams, with owners and agreed data sources, has been reviewed with the other leads."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every other workstream and its lead"
                - "Mark each data set and topic your workstream shares with another"
                - "Agree with each lead who owns overlapping topics"
                - "Hold a fifteen-minute sync with the other workstream leads @recurring(weekly:thu)"
            - name: Weekly reporting format for the engagement manager
              description: |-
                ## Purpose
                Managers running three or four workstreams want the same shape of update from each lead so they can compare them in five minutes. Agreeing a fixed format, covering the current answer, progress against the tracker, risks and what you need from them, turns the weekly report into a tool rather than a chore.

                ## Milestones
                1. A one-page format agreed with the manager, with no more than five sections.
                2. A colour or status convention for each deliverable that the manager accepts.
                3. A first report sent in the agreed format.
                4. The manager's feedback on the first report built into the template.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page weekly report format is agreed with the engagement manager and the first report has been sent and commented on."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your manager to show you an update from a past lead they found useful"
                - "Draft a five-section one-page report format"
                - "Send the first weekly report using the format"
                - "Adjust the format after the manager's comments"
            - name: Escalation rules for the workstream
              description: |-
                ## Purpose
                Problems that sit with a workstream lead for a week while they try to fix them alone become problems the partner hears about from the client. Writing down which issues you escalate the same day, which go in the weekly report and which you handle yourself makes escalation a routine rather than an admission of failure.

                ## Milestones
                1. Three tiers of issue defined with an example of each from consulting work.
                2. Same-day triggers listed, such as a missed client data deadline or a number that contradicts the emerging answer.
                3. The rules shared with the team so they know what to bring to you straight away.
                4. The rules confirmed by the engagement manager.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written three-tier escalation rule with same-day triggers is agreed by the manager and shared with the workstream team."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write three tiers of issue with one example each"
                - "List the triggers that mean a same-day message to the manager"
                - "Share the rules with the team at the next check-in"
                - "Ask the manager to confirm or change the triggers"
            - name: Daily team check-in routine
              description: |-
                ## Purpose
                Once the format exists, the value comes from running it every day the team is working, including the days the lead is busy. Keeping the check-in short, noting blockers in the tracker and following up on each one before lunch is what turns a meeting into a working system.

                ## Milestones
                1. The check-in held on every working day of the engagement.
                2. Every blocker raised logged in the tracker with an owner.
                3. Each blocker followed up within the same working day.
                4. A deputy named to run the check-in when you are away.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The check-in runs on at least nine of every ten working days, and every blocker raised has a named owner in the tracker by the end of that day."
                cadence: rolling
              tasks:
                - "Run the fifteen-minute morning check-in with the team @recurring(daily)"
                - "Log each blocker in the tracker with an owner"
                - "Name a deputy to run the check-in when you are at the client or travelling"
            - name: Twice-weekly review of team output
              description: |-
                ## Purpose
                Reviewing work only when it is meant to be finished means finding a wrong approach after three days of effort. Setting two fixed review points each week, where every analyst shows work in progress for twenty minutes, catches wrong turns early and spreads your review load instead of piling it into Thursday night.

                ## Milestones
                1. Two fixed review slots each week in every analyst's calendar.
                2. Work shown in progress, not only when complete.
                3. Review comments written down and agreed before the analyst leaves.
                4. Late-night rework on review days visibly reduced after a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each analyst has two review slots a week in the calendar and written comments exist for at least eight in ten of them over a month."
                cadence: rolling
              tasks:
                - "Book two twenty-minute review slots with each analyst"
                - "Review work in progress with each analyst @recurring(weekly:mon,thu)"
                - "Write your comments as a short numbered list the analyst can tick off"
                - "Ask the team after four weeks whether the reviews are catching problems earlier"
            - name: Friday status note to the engagement manager
              description: |-
                ## Purpose
                A short written note at the end of each week gives your manager what they need for the partner call and the sponsor update without a meeting. Sending it every Friday, in the agreed format, with the current answer stated plainly, also builds a record of how the workstream's thinking changed.

                ## Milestones
                1. A note sent every Friday the engagement is running.
                2. Each note opens with the current best answer in one or two sentences.
                3. Risks and requests for the manager listed with what you need and by when.
                4. Past notes kept in one folder as a running record.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A status note in the agreed format reaches the engagement manager every Friday, with no more than one week missed per quarter."
                cadence: rolling
              tasks:
                - "Send the weekly status note to the engagement manager @recurring(weekly:fri)"
                - "Open each note with the current best answer"
                - "File each note in the workstream reporting folder"
            - name: Weekly counterpart check-in
              description: |-
                ## Purpose
                Client counterparts who only hear from the workstream when something is needed start to feel managed rather than involved. A standing weekly slot where you share what was learned, preview what is coming and ask what they are hearing from colleagues keeps them an ally and surfaces political problems before they reach the sponsor.

                ## Milestones
                1. The weekly meeting held, or moved rather than cancelled, every week.
                2. Each meeting shares one finding, one upcoming request and one question for them.
                3. Notes and agreed actions sent to the counterpart within a day.
                4. Anything they raise about senior stakeholders passed to the engagement manager.

                ## Notes
                Never show the counterpart a finding about their own area for the first time in a group meeting. Preview it with them one to one.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The counterpart meeting has taken place in at least nine of every ten weeks, with written actions sent after each one."
                cadence: rolling
              tasks:
                - "Hold the weekly check-in with your client counterpart @recurring(weekly:tue)"
                - "Pick one finding to preview before each meeting"
                - "Send a short note of actions the same day"
                - "Pass on stakeholder concerns to your manager"
            - name: Workstream risk and issue log
              description: |-
                ## Purpose
                Risks that live in conversation are forgotten until they happen. A short log of what could stop the workstream delivering, such as late data, an unavailable interviewee or an analysis that may not support the hypothesis, reviewed every Wednesday, gives you two days before the Friday report to act on the worst ones.

                ## Milestones
                1. A log with each risk, its likelihood, its impact, an owner and the next action.
                2. Issues that have already happened tracked separately from risks.
                3. The log reviewed weekly and stale items closed.
                4. The top two risks carried into each Friday status note.

                ## Notes
                Start from the **Risk register** template. If the engagement already has a RAID log, keep yours as a filtered view of it rather than a second copy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The workstream risk log is reviewed every week, each open item has an owner and next action, and the top risks appear in every status note."
                cadence: rolling
              tasks:
                - "Create the log with likelihood, impact, owner and next action columns"
                - "Review and update the risk log with the team @recurring(weekly:wed)"
                - "Close or downgrade any risk that has not moved in three weeks"
                - "Copy the top two risks into the Friday note"
            - name: Analysis source tie-out spot checks
              description: |-
                ## Purpose
                Most embarrassing client moments come from a number on a page that does not tie back to its source, not from a wrong idea. Picking three numbers from the workstream's current pages each month and tracing them to the raw data yourself keeps your own standard visible and catches systematic errors before they spread across a deck.

                ## Milestones
                1. Three numbers chosen at random from current workstream pages each month.
                2. Each traced back to the source file and the calculation checked.
                3. Any error fixed everywhere it appears, not only on the page checked.
                4. Patterns in errors shared with the team without naming individuals.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three randomly chosen numbers are traced to source each month, with errors and fixes recorded in the tracker."
                cadence: rolling
              tasks:
                - "Trace three random numbers on current pages back to their sources @recurring(monthly:9)"
                - "Record what you checked and what you found in the tracker"
                - "Search the deck for every other place a wrong number appears"
                - "Share the error pattern with the team at the next check-in"
            - name: Fortnightly one-to-ones with each team member
              description: |-
                ## Purpose
                On a busy engagement every conversation with an analyst is about the next deliverable, and nobody asks how they are finding the work. A fortnightly thirty minutes with each person about their workload, what they are learning and what they need from you is where small problems get fixed and good people decide to stay.

                ## Milestones
                1. A thirty-minute slot with each team member every two weeks.
                2. Each conversation covering workload, learning and one piece of feedback in each direction.
                3. Actions from each one-to-one written down and followed up.
                4. Concerns about wellbeing passed on to the engagement manager or staffing as agreed with the person.

                ## Notes
                Start from the **1:1** template. Let the team member set at least half of the agenda.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every team member has had a one-to-one at least every two weeks over the engagement, each with written actions."
                cadence: rolling
              tasks:
                - "Book the first round of one-to-ones with each team member"
                - "Hold one-to-ones with each team member @recurring(monthly:5)"
                - "Hold the second round of the month's one-to-ones @recurring(monthly:19)"
                - "Follow up each action you agreed to before the next one-to-one"
            - name: Team hours and weekend work check
              description: |-
                ## Purpose
                Relying on late nights to hit every deadline burns out their best analyst by week six. Looking at actual hours and weekend work each month, against what the firm and the team consider sustainable, gives you evidence to reshape the plan or ask your manager for help before someone quietly asks to be rolled off.

                ## Milestones
                1. A rough record of late finishes and weekend work for each team member.
                2. Any person regularly working well past the team norm noticed and spoken to.
                3. Root causes named, such as late reviews, client deadlines or rework.
                4. At least one change made to the plan or review rhythm when hours run high.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Hours and weekend work are reviewed monthly and any person consistently above the team norm has a discussed plan to bring it down."
                cadence: rolling
              tasks:
                - "Ask the team to note late finishes and weekend hours each week"
                - "Review team hours and weekend work @recurring(monthly:14)"
                - "Talk privately with anyone well above the team norm"
                - "Raise sustained high hours with your engagement manager with a proposed fix"
            - name: Answer-first page for the workstream
              description: |-
                ## Purpose
                Teams that only build analyses and leave the answer to the last week end up with forty pages and no point of view. Keeping one page that states the workstream's current best answer to its key question, the evidence for it and what would change it, updated every Monday, keeps the team's effort pointed at what matters.

                ## Milestones
                1. A single page with the current answer, three supporting points and the open questions.
                2. The page updated every Monday from the previous week's findings.
                3. The team using the page to decide which analyses to stop or start.
                4. The page shared with the engagement manager before weekly problem solving.

                ## Notes
                It is fine for the answer to change. A page that never changes probably means nobody is testing it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An answer-first page exists for the workstream and has been updated every Monday for the life of the engagement."
                cadence: rolling
              tasks:
                - "Write a first version of the workstream's best answer today"
                - "Update the answer-first page from last week's findings @recurring(weekly:mon)"
                - "Mark which analyses support, challenge or do not touch the current answer"
                - "Ask the agent to compare this week's page with last week's and list what changed"
            - name: Client staff capacity and access check
              description: |-
                ## Purpose
                Client analysts, system access and a finance contact for extracts are easy to take for granted, and work can stall for a week when one of those quietly disappears. Checking each month that named client staff still have time for you, that system access still works and that approvals are not about to expire avoids a gap nobody noticed until a deadline.

                ## Milestones
                1. A list of client people, systems and approvals the workstream depends on.
                2. Each dependency confirmed monthly with the person who controls it.
                3. Gaps raised with the counterpart with a proposed fix.
                4. Planned leave of key client contacts recorded in the tracker.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every client person, system and approval the workstream relies on is confirmed each month, with any gap raised with the counterpart within a week."
                cadence: rolling
              tasks:
                - "List every client person, system and approval the workstream relies on"
                - "Confirm client staff time, access and approvals are still in place @recurring(monthly:22)"
                - "Ask the counterpart about planned leave in the next six weeks"
                - "Raise any gap with the counterpart with a suggested solution"
            - name: Monthly workstream retrospective
              description: |-
                ## Purpose
                Teams repeat the same irritations for an entire engagement when nobody stops to name them. Thirty minutes a month asking what helped, what got in the way and what to try next, with one change agreed and tested, keeps the workstream improving while the work is still live.

                ## Milestones
                1. A thirty-minute retrospective held each month with the whole workstream team.
                2. Themes grouped and one change chosen for the next month.
                3. The change reviewed at the following retrospective.
                4. A running list of themes kept for future engagements.

                ## Notes
                Start from the **Feedback themes** template. Speak last yourself, or the team will echo you.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A retrospective is held each month, one change is agreed each time and its effect is reviewed at the next session."
                cadence: rolling
              tasks:
                - "Run the monthly retrospective with the workstream team @recurring(monthly:27)"
                - "Group what people say into themes before choosing a change"
                - "Agree one change and name who will try it"
                - "Review last month's change at the start of each retrospective"
            - name: Briefing an analysis so it comes back right
              description: |-
                ## Purpose
                A one-line request such as "look at churn" produces three days of work that answers a different question. Learning to brief every analysis with the question it answers, a sketch of the output, the likely data, the level of precision needed and a first check-in time halves rework and makes junior team members visibly better.

                ## Milestones
                1. A five-part briefing checklist written and kept to hand.
                2. Ten analyses briefed using the checklist, each with a hand-drawn output sketch.
                3. A first check-in agreed within a day of each brief.
                4. Rework on briefed analyses compared with earlier ones in a short note.

                ## Notes
                The sketch matters most. A box with axes labelled and a rough shape tells the analyst more than a paragraph.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten analyses have been briefed with the five-part checklist and sketch, and a written comparison of rework before and after exists."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a five-part briefing checklist: question, sketch, data, precision, check-in"
                - "Brief your next analysis using the checklist and a hand-drawn sketch"
                - "Ask the analyst to play back the brief in their own words"
                - "Note how much rework each briefed analysis needed"
            - name: Reviewing analysts' work without redoing it
              description: |-
                ## Purpose
                Leads who fix every page themselves become the bottleneck and teach the team nothing. Practising review that asks questions first, separates must-fix from nice-to-have and hands the work back with clear comments builds the team's skill and frees your evenings for the problem solving only you can do.

                ## Milestones
                1. A review order agreed with yourself: logic first, numbers second, formatting last.
                2. Comments split into must-fix and optional on every review.
                3. Ten reviews done where you made no edits yourself.
                4. The analyst's second draft quality noted for each of those reviews.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten reviews completed with written must-fix and optional comments and no direct edits by the lead, with second-draft quality recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write your review order on a card: logic, numbers, then formatting"
                - "Ask the analyst what they think is weakest before you comment"
                - "Label each comment must-fix or optional"
                - "Hand the work back rather than editing the file yourself"
            - name: Feedback in the moment on a live project
              description: |-
                ## Purpose
                Feedback saved for the end-of-project review arrives too late to change anything on this engagement. Practising short, specific feedback within a day of what happened, positive and corrective, and noting what you gave, makes evaluations at the end easier to write and fairer to the person.

                ## Milestones
                1. A simple structure chosen: situation, behaviour, effect, and what to do next time.
                2. At least one piece of feedback given to each team member every week.
                3. A private record kept of feedback given, with dates.
                4. Each team member asked how the feedback is landing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every team member has received specific feedback at least weekly for a month, with a dated private record of what was said."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose a feedback structure and write it in your notebook"
                - "Give one specific piece of feedback to a team member today"
                - "Review your record of feedback given to each person @recurring(monthly:8)"
                - "Ask each team member whether the feedback is useful and timely"
            - name: Team problem-solving sessions
              description: |-
                ## Purpose
                The best ideas in a workstream rarely come from the lead alone, but unstructured brainstorms waste an afternoon. Learning to run a forty-five-minute session with a clear question, the evidence on the wall, silent idea generation first and a decision at the end gets more from the team and teaches them how consultants think.

                ## Milestones
                1. A session format written with question, evidence, silent ideas, discussion and decision.
                2. Three sessions run on real workstream questions.
                3. A decision or next analysis recorded from each session.
                4. Junior team members' contributions visibly part of the outcome.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three problem-solving sessions have been run in the written format, each ending with a recorded decision or next analysis."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a forty-five-minute problem-solving session format"
                - "Pick a live workstream question that is genuinely open"
                - "Put the key evidence on one page before the session"
                - "Record the decision and the next analysis at the end"
            - name: Three-line upward updates
              description: |-
                ## Purpose
                Managers and partners read updates on a phone between meetings, so a lead who writes paragraphs is not read at all. Practising updates of three lines, covering what we now believe, what changed and what I need from you, makes you easier to manage and more likely to get help when it matters.

                ## Milestones
                1. A three-line update structure written down.
                2. Twenty updates sent in the structure across chat and email.
                3. The manager's replies reviewed for whether the ask was understood first time.
                4. The structure adjusted to the manager's style.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Twenty upward updates in the three-line structure have been sent, and the share needing a clarifying reply has fallen."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the three-line structure: belief, change, ask"
                - "Rewrite your last long update to the manager in three lines"
                - "Send every update this week in the structure"
                - "Count how many updates needed a clarifying reply"
            - name: Coaching a client secondee on the team
              description: |-
                ## Purpose
                Client staff seconded to a workstream often get the dull tasks and go back to their jobs having learned little, which undermines implementation later. Giving a secondee real ownership of one analysis, coaching them on the consulting methods involved and crediting them in front of their own leadership builds capability the client keeps.

                ## Milestones
                1. One analysis owned end to end by the secondee.
                2. Two or three methods, such as issue trees or action titles, taught on the job.
                3. A monthly check on what they are learning and what they want next.
                4. Their contribution named in a meeting their own managers attend.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "The secondee has owned at least one analysis from brief to final page and their contribution has been credited in front of their leadership."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the secondee what they want to take back to their job"
                - "Give them ownership of one analysis with a clear brief"
                - "Check in on their learning goals with the secondee @recurring(monthly:16)"
                - "Credit their work by name in the next client meeting"
            - name: Sizing analyses and holding the workstream scope
              description: |-
                ## Purpose
                Every interesting client question becomes another analysis unless someone says it costs three days. Practising quick effort estimates for each requested analysis, and offering a trade with something already planned, lets you say yes to what matters without quietly stretching the team past the deadline.

                ## Milestones
                1. A rough effort estimate in person-days for every analysis in the tracker.
                2. Each new request logged with an estimate before anyone starts it.
                3. New requests answered with a trade-off rather than a flat yes or no.
                4. Requests outside the workstream charter referred to the engagement manager.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every analysis in the tracker carries an effort estimate, and every new request in the last month was logged with a trade-off before work began."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Estimate effort in person-days for every analysis in the tracker"
                - "Add a column for requests and who asked for them"
                - "Answer the next new request with an estimate and a proposed trade"
                - "Refer anything outside the charter to your engagement manager"
            - name: Rebalancing work when one analyst is overloaded
              description: |-
                ## Purpose
                Workloads drift: the analyst who is quickest ends up with half the workstream while another waits on data. Reviewing assignments against capacity and moving work deliberately, with a proper handover, protects both the overloaded person and the deliverable.

                ## Milestones
                1. Each person's current tasks and estimated days listed side by side.
                2. Overload identified against a reasonable working week.
                3. Specific tasks moved with a handover conversation for each.
                4. The tracker updated and the team told why the change was made.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A rebalanced assignment list exists, each moved task had a handover, and no team member is carrying more than the agreed working week."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each person's open tasks with estimated days"
                - "Pick the tasks that can move without losing context"
                - "Run a short handover for each moved task"
                - "Update the tracker and explain the change at the check-in"
            - name: Stopping an analysis that is not working
              description: |-
                ## Purpose
                Some analyses stall because the data does not exist, or keep producing answers nobody would act on. Deciding deliberately whether to stop, simplify or replace an analysis, rather than letting it drag, returns days to the team and avoids a weak page reaching the final deck.

                ## Milestones
                1. The stalled analysis tested against three questions: is the data there, will the answer change a decision, is there a simpler proxy.
                2. A decision to stop, simplify or replace recorded with the reason.
                3. The manager told before the client hears about any change.
                4. The analyst who did the work thanked and moved to something useful.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision with reasons exists for the stalled analysis, and the freed time has been reassigned in the tracker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask whether the answer would change any client decision"
                - "Check whether a simpler proxy would do the same job"
                - "Record the decision and reason in the tracker"
                - "Tell the manager before the change reaches the client"
            - name: Recovery plan for a slipping workstream
              description: |-
                ## Purpose
                Workstreams usually slip a day at a time, so by the time the manager notices, a deliverable is a week late. Writing a short recovery plan as soon as two milestones slip, with what will be cut, what help is needed and a new date, shows control and gives your manager something to approve rather than something to fix.

                ## Milestones
                1. The size of the slip stated in days against each affected deliverable.
                2. Causes named honestly, including any that sit with you.
                3. A plan with scope cuts, extra resource requests and a revised date.
                4. The plan agreed with the manager and the counterpart told what changes for them.

                ## Notes
                Bring the plan with the bad news, not after it. The first conversation sets how much trust you keep.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recovery plan with sized slip, causes, cuts and a revised date is agreed with the engagement manager within two days of the slip being spotted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Measure the slip in days against each deliverable"
                - "Write down the causes, including your own part"
                - "Draft the cuts and help needed to reach a revised date"
                - "Walk the manager through the plan the same day @priority(high)"
            - name: Resetting a strained counterpart relationship
              description: |-
                ## Purpose
                Counterparts turn cool for reasons that are usually fixable: a finding they saw first in a meeting, too many data requests, or a feeling the team is going around them. A deliberate reset, starting with a private conversation that asks what went wrong, often restores access faster than escalating to the sponsor.

                ## Milestones
                1. Signs of strain written down factually, such as missed meetings or slow data.
                2. A private conversation held that asks for their view first.
                3. One or two concrete changes agreed with them.
                4. The relationship reviewed with the engagement manager after two weeks.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A private reset conversation has been held, agreed changes are written down and the counterpart is attending the weekly meeting again within three weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the factual signs that the relationship has strained"
                - "Ask your manager whether anything happened above your level"
                - "Hold a private conversation and listen before explaining"
                - "Agree and write down one or two changes with the counterpart"
            - name: Workstream file and version conventions
              description: |-
                ## Purpose
                Three analysts saving "final_v3_new" into different folders is how the wrong chart reaches the sponsor. Choosing folder structure, file naming and a rule for where the current version lives, then tidying monthly, costs an hour and prevents a whole category of errors.

                ## Milestones
                1. A folder structure agreed for working files, sources, reviews and client-ready pages.
                2. A naming rule with date and initials adopted by everyone.
                3. One clear location for the current master of each deliverable.
                4. Superseded versions archived monthly.
              priority: low
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written folder and naming convention is in use by the whole team, with a single named master file for each deliverable."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Propose a folder structure and naming rule in the team channel"
                - "Move existing files into the agreed structure"
                - "Name the master file for each deliverable in the tracker"
                - "Archive superseded versions in the workstream folder @recurring(monthly:28)"
            - name: Cutting review rework cycles
              description: |-
                ## Purpose
                Pages that go through five rounds of comments between you, the manager and the partner eat days the workstream does not have. Tracking why pages come back, and fixing the top cause, whether unclear briefs, late partner input or inconsistent styles, can cut rounds roughly in half.

                ## Milestones
                1. The number of review rounds recorded for each page over two weeks.
                2. The reasons for each round grouped into causes.
                3. One change made against the most common cause.
                4. Review rounds measured again two weeks later.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Review rounds per page have been measured before and after one targeted change, with the result recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Add a review rounds column to the tracker"
                - "Note the reason every time a page comes back"
                - "Group the reasons and pick the biggest cause"
                - "Ask the agent to summarise review reasons from the tracker into themes"
            - name: Supporting a team member who is struggling
              description: |-
                ## Purpose
                An analyst missing deadlines or producing weak work is often overloaded, unclear on what good looks like or dealing with something outside work. Addressing it early and privately with specific examples, agreeing a short support plan and involving your manager and the person's staffing or career contact gives them a fair chance and protects the workstream.

                ## Milestones
                1. Specific, dated examples of the gap written down.
                2. A private conversation held that asks for their view first.
                3. A two-week support plan with clear expectations and extra coaching.
                4. Your manager and the person's career contact informed as the firm's process expects.

                ## Notes
                Start from the **Development plan** template. Keep notes factual and follow your firm's people process; serious performance or wellbeing issues belong with the manager and HR, not the workstream lead alone.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written two-week support plan with specific expectations exists, has been discussed with the team member and is known to the engagement manager."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write down three dated examples of the gap"
                - "Hold a private conversation and ask how they see it"
                - "Agree a two-week plan with clear expectations and support"
                - "Tell your engagement manager what you have agreed"
            - name: Workstream input to the steering committee pack
              description: |-
                ## Purpose
                When the engagement manager builds a steering committee deck, each workstream usually gets two or three pages and a few minutes. Delivering your pages early, with the decision you need from the committee, the evidence and your counterpart already in agreement, makes your workstream the easy part of the meeting.

                ## Milestones
                1. The manager's deadline and page allocation confirmed two weeks out.
                2. Draft pages with action titles delivered three days before the manager's deadline.
                3. The counterpart walked through the pages before the pack is circulated.
                4. Likely questions and your answers written for the manager.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Workstream pages, previewed with the counterpart and with likely questions answered, reach the engagement manager before their deadline."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm your page allocation and deadline with the manager"
                - "Draft the pages and state the decision you need from the committee"
                - "Preview the pages with your counterpart"
                - "Write likely questions with short answers for the manager"
            - name: Mid-point workstream review with manager and partner
              description: |-
                ## Purpose
                Halfway through an engagement is the last moment to change direction cheaply. A planned review where you present the answer so far, what the remaining weeks will produce and where you are unsure lets the partner redirect effort before the team builds pages nobody will use.

                ## Milestones
                1. A short pack with the current answer, evidence, remaining plan and open risks.
                2. The review held with manager and partner at roughly the midpoint.
                3. Changes to direction recorded and reflected in the tracker within two days.
                4. The team briefed on what changed and why.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A mid-point review has been held with the manager and partner, and resulting changes appear in the tracker within two working days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the manager to book the mid-point review with the partner"
                - "Build a five-page pack around the current answer"
                - "List the three places you are least confident"
                - "Brief the team on changes the day after the review"
            - name: Partner problem-solving session on workstream pages
              description: |-
                ## Purpose
                Partners often see a page once before the client does, and a lead who sends a full deck with no framing gets scattered comments. Preparing a focused session with the three hardest questions, a draft storyline and options where you need judgement turns a short partner slot into real direction.

                ## Milestones
                1. Three specific questions where partner judgement is needed.
                2. A draft storyline of no more than ten pages to react to.
                3. Partner direction captured in writing during the session.
                4. Changes made and confirmed with the manager within two days.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A partner session has been held on three named questions, with direction captured and changes completed within two working days."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the three questions where you most need partner judgement"
                - "Cut the material to a ten-page draft storyline"
                - "Capture the partner's direction in writing during the session"
                - "Confirm the changes with your manager"
            - name: Workstream handover when rolling off
              description: |-
                ## Purpose
                Leads roll off before engagements end more often than they expect, and a rushed handover loses the context that made the work make sense. A written handover covering the answer, the tracker, open risks, the counterpart relationship and where every file lives lets the next person run the workstream from their first morning.

                ## Milestones
                1. A handover note covering answer, status, risks, relationships and files.
                2. A live walkthrough with the incoming lead.
                3. An introduction made to the counterpart in person or on a call.
                4. Your availability for questions agreed for the first two weeks.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written handover note exists, the incoming lead has been walked through it and introduced to the counterpart before your last day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the handover note with answer, status, risks and file locations"
                - "Walk the incoming lead through the tracker and open risks"
                - "Introduce the incoming lead to the client counterpart"
                - "Agree how they can reach you in the first two weeks"
            - name: End-of-engagement reviews for the team
              description: |-
                ## Purpose
                Evaluations written from memory a month after roll-off are vague and unfair, and they shape promotions. Writing each team member's review within a week of the workstream ending, using your feedback record and specific examples, gives them evidence for their next promotion discussion and you a reputation as a lead people want to work for.

                ## Milestones
                1. Each team member asked for a self-assessment before you write.
                2. A review written for each person with dated, specific examples.
                3. Each review discussed with the person, not only submitted.
                4. Upward feedback on your own leadership requested from the team.

                ## Notes
                Write to your firm's evaluation criteria, and be as specific about strengths as about gaps.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written review with specific examples is submitted and discussed for every team member within a week of the workstream ending."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask each team member for a short self-assessment"
                - "Pull dated examples from your feedback record"
                - "Write and submit each review against the firm's criteria"
                - "Ask the team for upward feedback on your leadership"
            - name: First workstream as a newly promoted consultant
              description: |-
                ## Purpose
                The jump from analyst to workstream lead means doing less analysis yourself and more briefing, reviewing and talking to the client, which many new leads resist for the first month. Setting yourself a few deliberate goals for the first workstream, and asking for feedback halfway, makes the shift faster and shows in your next review.

                ## Milestones
                1. Three goals for your first workstream agreed with your manager, such as no direct edits to analysts' work.
                2. A weekly note to yourself on time spent doing versus leading.
                3. Feedback from manager and team requested at the midpoint.
                4. A short reflection written at the end for your career counsellor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three agreed goals, a mid-point feedback round and an end reflection exist for the first workstream you lead."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write three goals for leading your first workstream"
                - "Agree the goals with your engagement manager"
                - "Note each Friday how much time you spent doing versus leading"
                - "Ask for feedback from the manager and team at the midpoint"
            - name: Engagement manager overseeing several workstream leads
              description: |-
                ## Purpose
                Managers with three or four workstream leads can slip into running every workstream themselves, which leaves leads without growth and the manager without time to think. Setting a common rhythm for all leads, a weekly session across them and clear rules for when you step in keeps the engagement integrated while each lead owns their part.

                ## Milestones
                1. The same charter, tracker and reporting format used by every workstream.
                2. A weekly session with all leads to integrate the answer across workstreams.
                3. Written rules for when you step into a workstream directly.
                4. Each lead given one piece of development feedback per fortnight.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All workstreams use one reporting format, a weekly leads session is held and each lead has received fortnightly development feedback for a month."
                cadence: rolling
              tasks:
                - "Share one charter, tracker and report format with every lead"
                - "Hold the weekly integration session with all workstream leads @recurring(weekly:mon)"
                - "Write down when you will step into a workstream directly"
                - "Give each lead one piece of development feedback every two weeks"
            - name: Leading a workstream staffed mostly by client employees
              description: |-
                ## Purpose
                Some engagements, especially implementation phases, give you one consultant and four client staff who report elsewhere. Leading people you do not manage means agreeing their time with their line managers, explaining consulting methods without jargon and recognising their work in their own organisation.

                ## Milestones
                1. Each client team member's time commitment agreed in writing with their line manager.
                2. A short induction on how the workstream works delivered to the client team.
                3. Methods such as the tracker and review rhythm adapted to client working hours.
                4. Each person's line manager given a short note of their contribution at the end.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Written time commitments exist for every client team member and each of their line managers has received a contribution note at the end."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree each client team member's weekly hours with their line manager"
                - "Run a one-hour induction on the tracker, check-ins and reviews"
                - "Move the check-in time to suit client working hours"
                - "Send each line manager a contribution note at the end"
            - name: Leading a remote or split-site workstream
              description: |-
                ## Purpose
                When half the team is at the client site and half is remote, information flows to whoever is in the room and the others fall behind. Setting written norms for channels, response times, meeting links and decisions made on site keeps everyone working from the same picture.

                ## Milestones
                1. Written team norms for channels, response times and core hours.
                2. Every check-in and review run with a call link, even when most people are in the room.
                3. Decisions made on site posted in the team channel the same day.
                4. Remote team members asked monthly whether they feel informed.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Written remote norms are in place, every decision is posted to the channel the same day and remote members report feeling informed in a monthly check."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write team norms for channels, response times and core hours"
                - "Add a call link to every recurring workstream meeting"
                - "Post site decisions in the team channel by the end of each day"
                - "Ask remote team members whether they feel informed"
            - name: Leading a workstream while staffed on a second engagement
              description: |-
                ## Purpose
                Being split across two engagements is common for experienced consultants and means each team sees you only part of the week. Agreeing in advance which days belong to which client, who deputises when you are away and how urgent issues reach you protects both teams and both managers from surprise.

                ## Milestones
                1. Days or half-days allocated to each engagement and agreed with both managers.
                2. A deputy named on each workstream with clear authority while you are away.
                3. Both teams told how to reach you urgently.
                4. The split reviewed with both managers after a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split of time agreed by both managers exists, with a named deputy on each workstream and a review after one month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Propose a weekly split of days to both engagement managers"
                - "Name and brief a deputy on each workstream"
                - "Plan the week's split across both engagements @recurring(weekly:sun)"
                - "Review the split with both managers after a month"
            - name: Industry hire leading a first consulting workstream
              description: |-
                ## Purpose
                Experienced hires from industry often know the client's world better than anyone on the team but have not yet absorbed consulting habits such as answer-first pages, tight briefs and weekly reporting. Pairing your expertise with those routines deliberately, and asking a peer lead to review your first fortnight, gets you credibility with both the client and the team.

                ## Milestones
                1. A peer workstream lead asked to act as a guide for the first month.
                2. Firm conventions for slides, reviews and reporting learned and applied.
                3. Your industry knowledge offered as a briefing to the team in week one.
                4. Feedback from the peer guide gathered after two weeks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A peer guide has reviewed your first two weeks, and you have delivered an industry briefing to the team and applied firm reporting conventions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask an experienced workstream lead to guide you for a month"
                - "Collect the firm's slide, review and reporting conventions"
                - "Run a one-hour industry briefing for the team"
                - "Ask your peer guide for feedback after two weeks"
            - name: Workstream on a fixed two-week diligence clock
              description: |-
                ## Purpose
                Commercial due diligence and similar sprints leave no slack: the answer is due on a fixed date whether or not data arrives. Planning backwards from the final readout, setting a day-by-day plan, deciding upfront what you will assume if data is late and running two check-ins a day keeps a short workstream on time.

                ## Milestones
                1. A day-by-day plan working back from the final deadline.
                2. Fallback assumptions agreed with the manager for each critical data source.
                3. A morning and late-afternoon check-in schedule for the sprint.
                4. The final pages delivered on the due date with assumptions labelled.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A two-week workstream delivers its final pages on the due date, with every fallback assumption labelled on the page it affects."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write the day-by-day plan backwards from the final deadline"
                - "Agree fallback assumptions for each critical data source"
                - "Add a late-afternoon check-in for the length of the sprint"
                - "Label every assumption on the pages it affects"
            - name: Confidential workstream on a sensitive topic
              description: |-
                ## Purpose
                Restructuring, site closure and headcount work often runs on a need-to-know basis, even inside the client. Setting access rules, code names, meeting locations and a clear list of who may see what protects the people affected and the client's legal position, and stops a leak that could end the engagement.

                ## Milestones
                1. A named list of people allowed to see the workstream's materials, agreed with the manager and sponsor.
                2. A code name and restricted folder in use.
                3. Rules for printing, screens in public places and meeting rooms written and briefed.
                4. Any suspected breach reported to the engagement manager the same day.

                ## Notes
                Follow your firm's and the client's confidentiality and legal guidance. When in doubt about what can be shared, ask the engagement manager before acting.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An agreed access list, code name, restricted folder and written handling rules are in place before any sensitive analysis begins."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree the named access list with your manager and the sponsor"
                - "Set up a restricted folder under a code name"
                - "Brief the team on printing, screen and meeting room rules"
                - "Check folder access against the list @recurring(monthly:3)"
            - name: Working with an offshore analytics or research team
              description: |-
                ## Purpose
                Many firms give workstreams access to a delivery centre for research, data cleaning or modelling, but briefs written in the team room often fail across time zones. Writing tight requests, agreeing turnaround times and building a review step for returned work lets you use that capacity without adding errors.

                ## Milestones
                1. The centre's services, turnaround times and request process understood.
                2. A written request template with question, sources, format and deadline.
                3. Three requests completed and reviewed against the brief.
                4. Turnaround and quality noted for future planning.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three requests to the offshore team have been completed using a written template, with turnaround and quality recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the delivery centre's service list and request process"
                - "Write a request template with question, sources, format and deadline"
                - "Send the first request before the end of your working day so it runs overnight"
                - "Review returned work against the brief before it enters the tracker"
            - name: Mentoring a first-time workstream lead
              description: |-
                ## Purpose
                Once you have led a few workstreams, the most useful thing you can offer is helping someone through their first. A short mentoring arrangement, with weekly conversations about their charter, team and counterpart, passes on the habits that took you a year to learn and is noticed in promotion discussions.

                ## Milestones
                1. A first-time lead identified with their manager's agreement.
                2. Weekly thirty-minute conversations for the first six weeks of their workstream.
                3. Your charter, tracker and report templates shared with them.
                4. Their reflections and your own written up at the end.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "A first-time workstream lead has had six weekly mentoring conversations, and both of you have written short reflections."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Offer to mentor a first-time lead through your staffing contact"
                - "Share your charter, tracker and report templates with them"
                - "Hold a thirty-minute mentoring conversation each week for six weeks"
                - "Write a short reflection with them at the end"
            - name: Personal workstream leadership playbook
              description: |-
                ## Purpose
                After several engagements, experienced leads have a set of routines that work, but they live in memory and get rebuilt every time. Writing a short playbook of your charter, check-in, review, reporting and handover practices, with lessons from each engagement, makes every next workstream faster to start and easier to teach.

                ## Milestones
                1. A playbook of no more than ten pages covering setup, rhythm, quality and handover.
                2. Your templates for charter, tracker and status note attached.
                3. Lessons from at least three past workstreams added.
                4. The playbook updated after each engagement.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written playbook with attached templates and lessons from at least three workstreams exists and has a dated update from the latest engagement."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Outline the playbook in sections: setup, rhythm, quality, handover"
                - "Attach your charter, tracker and status note templates"
                - "Write three lessons from your last three workstreams"
                - "Add one lesson from the latest engagement to the playbook @recurring(quarterly)"
---

# Workstream Leadership

Leading a workstream is the first time in consulting that the work is no longer only yours: you own a slice of the answer, two or three people producing analysis, a client counterpart who has a day job, and a manager who needs to know by Friday whether your part will land. This area starts with foundations (a workstream charter, the expectations conversation with your manager, a team roster, the first counterpart meeting, a tracker and a check-in format), then the operating routines that run every week, the skills of briefing and reviewing analysis, decisions for when the plan slips or a relationship strains, the dated reviews and handovers, variants for new leads, managers of leads, client-staffed and remote teams, and finally specialist situations such as confidential workstreams and offshore support.

The rhythm is a short daily check-in, review of team output on Mondays and Thursdays, a Tuesday counterpart meeting, a Wednesday risk review and a Friday status note to your manager, with monthly one-to-ones, hours checks and a team retrospective. The Skills matrix, Meeting notes, Risk register, 1:1, Feedback themes and Development plan templates pair with the team roster, the counterpart meetings, the risk log, the one-to-ones, the retrospective and support for a struggling team member. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
