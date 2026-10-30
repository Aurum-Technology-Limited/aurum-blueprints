---
id: strategy-leadership.executive-team-meeting-rhythm
name: Executive Team Meeting Rhythm
description: "A leadership meeting calendar where the weekly, monthly and quarterly forums each have one job, with pre-reads, a decision log, an action register and a yearly reset that keeps updates out of the room."
category: business
version: 1.0.0
tags: [strategy-leadership, executive-team-meeting-rhythm, manager, enterprise, leadership-meetings, decision-log, agenda-design, operating-rhythm]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - purchase-decision
    - metrics-log
    - feedback-themes
    - onboarding-plan
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Executive Team Meeting Rhythm
          description: "Designing the leadership team's weekly, monthly and quarterly meetings so time goes on decisions and strategy rather than updates."
          projects:
            - name: Audit of current leadership meeting hours
              description: |-
                ## Purpose
                Most executive teams cannot say how many hours a month they spend together, or what share of that time produced a decision. Pulling eight weeks of calendars and classifying every leadership meeting as decision, discussion or update gives a factual starting point that ends arguments about whether the rhythm needs changing.

                ## Milestones
                1. Eight weeks of every recurring and ad hoc meeting attended by three or more executives listed with duration and attendees.
                2. Each meeting tagged by its main use: decision, discussion, update or social.
                3. A total of executive hours per month and the share spent on updates calculated.
                4. A one-page summary of findings shared with the chief executive.

                ## Notes
                Count person-hours, not meeting hours: a 90-minute meeting with nine executives costs more than thirteen hours of senior time.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page audit showing monthly executive meeting hours and the share spent on updates, reviewed by the chief executive."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export eight weeks of the chief executive's calendar to a spreadsheet"
                - "Mark every meeting with three or more executives present"
                - "Tag each meeting as decision, discussion, update or social"
                - "Calculate monthly person-hours and the share spent on updates"
                - "Share a one-page summary of the findings with the chief executive"
            - name: One-page charter for each executive forum
              description: |-
                ## Purpose
                When the weekly meeting, the monthly review and the quarterly session all cover the same ground, nobody knows where a topic belongs and everything lands in the next meeting. A short charter per forum, stating its single purpose, decision rights, attendees, length and inputs, gives every topic an obvious home.

                ## Milestones
                1. A charter drafted for each standing leadership forum, no longer than one page.
                2. Each charter stating the forum's purpose in one sentence and the decisions it may take.
                3. Overlaps between forums removed so each topic type has exactly one home.
                4. Charters agreed by the executive team and stored where every member can find them.

                ## Notes
                If a forum's purpose cannot be written in one sentence, it is probably two meetings, or none.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every standing executive forum has a one-page charter with purpose, decision rights, attendees and length, agreed by the team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every standing forum the executive team holds today"
                - "Write a one-sentence purpose for each forum"
                - "Mark where two forums claim the same type of topic"
                - "Draft a one-page charter per forum with attendees, length and inputs"
                - "Table the charters for agreement at the next executive meeting"
            - name: Splitting tactical and strategic agendas
              description: |-
                ## Purpose
                Urgent operational issues always beat important strategic ones when they share an agenda, which is why so many leadership teams never get to the item marked strategy at the bottom. Holding tactical and strategic topics in separate meetings, with a rule for which goes where, protects time for the questions that shape the next three years.

                ## Milestones
                1. A written test for classifying a topic as tactical or strategic.
                2. The last three months of agenda items sorted using that test.
                3. Separate standing slots agreed for tactical and strategic topics.
                4. A rule that strategic items cannot be bumped by tactical ones without the chair's say-so.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Tactical and strategic topics have separate standing meetings, with a written classification test agreed by the executive team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect agendas from the last twelve executive meetings"
                - "Sort each item as tactical or strategic using a one-line test"
                - "Count how often strategic items were deferred or cut short"
                - "Propose separate standing slots for each type to the chief executive"
            - name: Twelve-month leadership meeting calendar
              description: |-
                ## Purpose
                Quarterly reviews that are scheduled a fortnight ahead lose half the team to travel and customer commitments. Fixing every weekly, monthly and quarterly leadership meeting for the next twelve months, aligned to the financial year and the board dates, means diaries bend around the rhythm rather than the other way round.

                ## Milestones
                1. The financial year-end, board meeting dates and budget deadlines marked on one calendar.
                2. Weekly, monthly and quarterly slots placed for the full year, avoiding known holidays.
                3. Invitations sent to all executives with the year's series in their diaries.
                4. A short list of known clashes resolved before the first quarter starts.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every leadership meeting for the next twelve months is in every executive's diary, aligned with board and budget dates."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Get the board meeting dates and budget deadlines for the coming year"
                - "Mark public holidays across every country the executives work in"
                - "Place the quarterly reviews first, then the monthly sessions, then the weekly slot"
                - "Send the full year of invitations to every executive and their assistants"
            - name: Chair, timekeeper and scribe roles
              description: |-
                ## Purpose
                A chief executive who chairs, takes notes and argues a position all at once does none of them well. Assigning a chair, a timekeeper and a scribe for each forum, and writing down what each role does, makes the meeting run without anyone having to play three parts.

                ## Milestones
                1. A short description of the chair, timekeeper and scribe roles written for each forum.
                2. A named person or rotation agreed for each role.
                3. The scribe's output defined: decisions, owners and dates, sent within one working day.
                4. The roles tried for four meetings and adjusted once.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each executive forum has a named chair, timekeeper and scribe with written role descriptions, used for at least four meetings."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write three sentences describing each of the chair, timekeeper and scribe roles"
                - "Agree who holds each role or how it rotates"
                - "Tell the scribe exactly what the notes must contain and by when"
                - "Review how the roles worked after the fourth meeting"
            - name: Executive decision log
              description: |-
                ## Purpose
                Leadership teams regularly reopen decisions they already made because nobody can remember what was agreed or why. A single log recording each decision, its date, the options considered, the owner and the conditions under which it would be revisited stops relitigating and lets absent executives catch up in minutes.

                ## Milestones
                1. A decision log created with fields for date, decision, options considered, rationale, owner and review trigger.
                2. The last three months of significant decisions entered from minutes and memory.
                3. A rule agreed that a decision exists only once it is in the log.
                4. Every executive given read access and shown how to search it.

                ## Notes
                Keep the rationale to two or three sentences. A log that takes ten minutes per entry stops being kept by the second month.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared decision log holds every executive decision from the past three months and each new one within two working days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set up the decision log with its six fields in a shared space"
                - "Back-fill decisions from the last three months of minutes"
                - "Agree with the chief executive that unlogged decisions do not count"
                - "Enter the week's executive decisions in the log @recurring(weekly:wed)"
            - name: Cross-forum action register
              description: |-
                ## Purpose
                Actions agreed in a meeting tend to live in one person's notebook and resurface only when someone asks. Keeping one register across all leadership forums, with an owner, a due date and a status for every action, means the opening of each meeting can be a two-minute review of what slipped instead of a round of reminders.

                ## Milestones
                1. One action register in use across every executive forum.
                2. Every action written with a single owner and a due date, never a team or a department.
                3. Open actions reviewed in the first five minutes of each weekly meeting.
                4. Actions older than sixty days either closed, re-dated or dropped by name.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All executive actions sit in one register with a named owner and due date, and none is older than sixty days without a decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather open actions from the last six weeks of meeting notes"
                - "Rewrite each one with a single named owner and a due date"
                - "Put the register on screen at the start of the next weekly meeting"
                - "Close or re-date every action older than sixty days"
            - name: Pre-read standard and paper deadline
              description: |-
                ## Purpose
                Papers that arrive the night before, or are presented slide by slide in the room, turn decision meetings into reading sessions. A standard for length, format and a submission deadline, typically two working days ahead, gives executives time to read and arrive with a view.

                ## Milestones
                1. A paper standard agreed: maximum length, a decision requested on page one, options and a recommendation.
                2. A submission deadline set for each forum and published to everyone who writes papers.
                3. A rule for late papers agreed, usually that the item moves to the next meeting.
                4. Two full cycles of meetings run with papers meeting the standard.

                ## Notes
                Start from the **Meeting notes** template for the agenda that accompanies each pack, so papers and agenda always travel together.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written paper standard and deadline are in use, and two cycles of meetings have run with papers circulated on time."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect the last ten papers taken to the executive team"
                - "Note their length and whether page one states the decision needed"
                - "Draft a one-page paper standard with a submission deadline"
                - "Agree the rule for late papers with the chief executive"
                - "Send the standard to every regular paper author"
                - "Check how many papers met the standard and deadline last month @recurring(monthly:9)"
            - name: Attendance rules and guest protocol
              description: |-
                ## Purpose
                Leadership meetings quietly grow as deputies, specialists and chiefs of staff are invited for one item and never leave, and a room of fifteen cannot argue honestly. Clear rules on who attends each forum, when guests join and leave, and how a deputy may stand in keep the room small enough to decide.

                ## Milestones
                1. A list of standing members for each forum, with the reason each attends.
                2. A guest protocol: invited for a named item, joining at a set time and leaving after it.
                3. A rule on deputies covering whether they may attend and whether they may decide.
                4. Attendance for the last month checked against the rules and gaps closed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each forum has a written membership list and guest protocol, and a month of attendance matches the rules."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List everyone who attended executive meetings in the last month"
                - "Mark who is a standing member and who came for one item"
                - "Write the guest and deputy rules in five sentences or fewer"
                - "Agree the membership list with the chief executive"
            - name: Weekly tactical leadership meeting
              description: |-
                ## Purpose
                Every week brings a handful of cross-functional problems that need several executives at once, and a short, tightly run tactical meeting clears them before they escalate. Keeping it to 60 to 90 minutes, opening with a lightning round of priorities and the action register, then working the live issues in order of impact, makes it the meeting people protect.

                ## Milestones
                1. A fixed weekly slot, length and room or video link in everyone's diary.
                2. A standing format: lightning round, action register, then live issues ranked by impact.
                3. Decisions and actions sent out within one working day of each meeting.
                4. Fewer than one meeting in ten cancelled over a quarter.

                ## Notes
                Start from the **Meeting notes** template for the running agenda. Resist adding standing departmental updates: they belong in writing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly tactical meeting runs at least nine weeks in ten over a quarter, with decisions and actions circulated within one working day."
                cadence: rolling
              tasks:
                - "Book a fixed weekly slot and send the standing format to all members"
                - "Chair the weekly tactical meeting using the standing format @recurring(weekly:mon)"
                - "Rank live issues by impact before the lightning round ends"
                - "Count cancellations and overruns at the end of each quarter"
            - name: Thursday agenda build from live issues
              description: |-
                ## Purpose
                Agendas recycled from last week's template fill up with the same standing items whether or not anything has changed. Building each week's tactical agenda on Thursday from the issues executives have raised, the action register and anything escalated from below keeps the meeting about what is actually live.

                ## Milestones
                1. A simple intake where executives post issues for the weekly meeting by Wednesday evening.
                2. A Thursday routine that ranks submitted issues and drafts the agenda.
                3. The agenda and any short papers sent to members by Friday midday.
                4. Standing items that carried no new information for four weeks removed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly agenda is built from submitted issues and circulated by Friday midday for at least ten weeks running."
                cadence: rolling
              tasks:
                - "Set up a shared list where executives post issues for the weekly meeting"
                - "Rank submitted issues and draft next week's agenda @recurring(weekly:thu)"
                - "Send the agenda and papers to members by Friday midday"
                - "Remove any standing item that carried no news for four weeks"
            - name: Monthly strategic topic session
              description: |-
                ## Purpose
                Strategic questions such as a pricing model, a market exit or the shape of the organisation need two or three uninterrupted hours with good preparation, which the weekly meeting can never give. A monthly session devoted to one or two strategic topics, each with a pre-read and a named owner, gives the team the time to actually think together.

                ## Milestones
                1. A monthly half-day or three-hour slot reserved for strategic topics only.
                2. A rolling list of candidate strategic topics with an owner for each.
                3. Each session limited to two topics, each with a pre-read sent five working days ahead.
                4. A logged outcome for every topic: decided, needs more work, or dropped.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly strategic session runs at least ten times a year, each topic ending with a logged outcome."
                cadence: rolling
              tasks:
                - "Draft a list of six strategic topics the team keeps postponing"
                - "Choose and brief the owners for next month's two topics @recurring(monthly:5)"
                - "Send the pre-reads five working days before the session"
                - "Hold the monthly strategic session and log each outcome @recurring(monthly:14)"
            - name: Quarterly leadership review
              description: |-
                ## Purpose
                Once a quarter the team needs to step back from the week and ask whether priorities, resources and its own way of working still fit. A full-day review with a standard structure, covering the last quarter's results, the next quarter's three to five priorities and how the team itself worked, ties the rhythm to the strategy.

                ## Milestones
                1. A standard quarterly agenda: look back, priorities for next quarter, team health.
                2. Inputs requested three weeks ahead and circulated one week ahead.
                3. Three to five agreed priorities for the next quarter, each with an owner.
                4. One change to how the team meets agreed and logged at every review.

                ## Notes
                Keep the review of individual initiatives brief here. The full execution review has its own forum; this one is about choices for the quarter ahead.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Four quarterly reviews a year, each producing three to five owned priorities and one logged change to the meeting rhythm."
                cadence: cyclic
              tasks:
                - "Write the standard three-part agenda for the quarterly review"
                - "Request inputs from each executive three weeks before the review @recurring(quarterly)"
                - "Book a venue away from the usual meeting room"
                - "Record the agreed priorities and the rhythm change in the decision log"
            - name: Tuesday cascade of executive decisions
              description: |-
                ## Purpose
                Decisions that stay in the executive room create rumours, contradictory messages and teams working on things already stopped. A short written cascade after each weekly meeting, telling direct reports what was decided, what was not and what they can share, keeps the next layer of managers acting on the same information within a day.

                ## Milestones
                1. A cascade format agreed: decisions, what changes for teams, what is confidential.
                2. The cascade sent to all direct reports of executives by Tuesday each week.
                3. Each executive briefing their own team from the same text.
                4. A quarterly check with managers that the cascade arrives and is useful.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written cascade of executive decisions reaches every executive's direct reports by Tuesday in at least ten weeks out of twelve."
                cadence: rolling
              tasks:
                - "Agree a three-part cascade format with the executive team"
                - "Send the written cascade of the week's decisions to all direct reports @recurring(weekly:tue)"
                - "Ask five managers each quarter whether the cascade reached them in time"
                - "Adjust the format after the first quarterly check"
            - name: Friday action register sweep
              description: |-
                ## Purpose
                An action register is only useful if it reflects reality, and actions drift out of date within a week. A fifteen-minute Friday sweep, chasing owners for status and flagging anything overdue, means Monday's review takes two minutes and nothing slips silently.

                ## Milestones
                1. A Friday slot in the chief of staff's or chair's diary for the sweep.
                2. Every open action carrying a status updated in the last seven days.
                3. Overdue actions flagged to their owners before the weekend.
                4. A monthly count of on-time completion kept for the team to see.

                ## Notes
                Start from the **Metrics log** template for the monthly on-time completion figure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The action register is swept every Friday and the monthly on-time completion rate is logged for six months running."
                cadence: rolling
              tasks:
                - "Block fifteen minutes every Friday afternoon for the sweep"
                - "Update every open action's status and flag overdue ones @recurring(weekly:fri)"
                - "Record the month's on-time completion rate @recurring(monthly:28)"
                - "Raise any action overdue twice running at the next weekly meeting"
            - name: Monthly parking lot clean-out
              description: |-
                ## Purpose
                Every leadership team keeps a list of topics deferred for later, and it quietly becomes a graveyard of things nobody will ever discuss. Reviewing the parking lot once a month, and giving each item a home, a date or a polite death, keeps it short and honest.

                ## Milestones
                1. One parking lot list shared across all executive forums.
                2. Each item carrying the date it was parked and who raised it.
                3. A monthly review that assigns each item to a forum, an owner outside the meeting, or the bin.
                4. No item older than ninety days left on the list.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The parking lot is reviewed monthly and holds no item older than ninety days for six consecutive months."
                cadence: rolling
              tasks:
                - "Merge every forum's deferred topics into one parking lot"
                - "Add the date parked and the person who raised each item"
                - "Assign, schedule or drop every parking lot item @recurring(monthly:19)"
                - "Tell the person who raised each dropped item why it was dropped"
            - name: Meeting effectiveness pulse
              description: |-
                ## Purpose
                Executives rarely tell the chief executive in the room that a meeting wasted their time, but they will answer three anonymous questions. A short monthly pulse on whether each forum produced decisions, used time well and allowed honest challenge gives the chair a trend line instead of hallway complaints.

                ## Milestones
                1. Three questions agreed, scored one to five, with one free-text box.
                2. The pulse sent to all members of each forum monthly and kept anonymous.
                3. Results tracked over time per forum.
                4. One change made in response to each quarter's results and announced to the team.

                ## Notes
                Start from the **Feedback themes** template to group the free-text answers. Anonymity matters more than question design in a team of eight.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly three-question pulse runs for each forum with response rates above 70 percent, and one change per quarter is made in response."
                cadence: rolling
              tasks:
                - "Write the three pulse questions and a free-text box"
                - "Send the anonymous meeting pulse to every forum member @recurring(monthly:26)"
                - "Chart each forum's scores over the last three months"
                - "Announce the one change the team will make in response @recurring(quarterly)"
            - name: Quarterly diary protection check
              description: |-
                ## Purpose
                A rhythm planned for the year erodes week by week as customer visits, travel and one-off meetings land on top of it. Checking every executive's diary once a quarter against the next three months of leadership dates catches conflicts while they can still be moved.

                ## Milestones
                1. The next three months of leadership meetings compared with each executive's diary.
                2. Every clash listed and either resolved or accepted with a named deputy.
                3. Assistants briefed that leadership slots are fixed unless the chair agrees otherwise.
                4. Attendance at last quarter's meetings compared with the target.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, every clash with the next three months of leadership meetings is resolved or assigned a deputy before the quarter starts."
                cadence: cyclic
              tasks:
                - "Ask each executive's assistant for diary access to the next three months"
                - "Check every diary against the leadership calendar for clashes @recurring(quarterly)"
                - "Agree a fix or a named deputy for each clash"
                - "Report last quarter's attendance rate to the chief executive"
            - name: Yearly reset of the meeting rhythm
              description: |-
                ## Purpose
                Rhythms designed for a 200-person company strain at 800, and a structure that suited last year's strategy may not suit this year's. A yearly reset, timed just before the new financial year, reviews every forum against its charter and the pulse data and decides what to keep, merge or stop.

                ## Milestones
                1. A year of pulse scores, attendance and action completion pulled together.
                2. Each forum assessed against its charter: still needed, changed or stopped.
                3. Revised charters and next year's calendar agreed by the team.
                4. The changes explained to direct reports and assistants before the new year begins.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every forum is formally kept, changed or stopped each year, with revised charters and next year's calendar published before year-end."
                cadence: cyclic
              tasks:
                - "Gather the year's pulse scores, attendance and action completion figures"
                - "Score each forum against its charter and the year's data @recurring(yearly)"
                - "Propose what to keep, merge or stop to the executive team"
                - "Publish revised charters with next year's calendar"
            - name: Chairing an executive meeting
              description: |-
                ## Purpose
                Chairing peers is different from chairing a team you manage: the people around the table are senior, opinionated and often more expert than the chair on the topic. Practising the core moves, framing the decision, drawing out quiet voices, cutting off repetition and summarising to a close, makes meetings shorter and decisions clearer.

                ## Milestones
                1. Five chairing moves written down with a phrase for each.
                2. Two meetings chaired with a colleague observing and noting which moves were used.
                3. Feedback from the observer gathered and one habit chosen to change.
                4. A further two meetings chaired showing that habit changed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four executive meetings chaired with an observer, and one specific chairing habit shown to have changed in the observer's notes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write five chairing moves and a phrase you would use for each"
                - "Ask a trusted peer to observe your next two meetings"
                - "Note which moves you used and which you avoided"
                - "Pick one habit to change and tell the observer"
            - name: Writing a five-minute decision paper
              description: |-
                ## Purpose
                Executive papers written as background reports bury the actual request on page six. Learning to write a two-page paper that opens with the decision required, lays out real options with their costs and ends with a recommendation means the meeting can spend its time on the choice.

                ## Milestones
                1. A paper structure written: decision needed, context, options, recommendation, risks.
                2. Two past papers rewritten into the new structure.
                3. One new paper taken to the executive team in the new structure.
                4. A colleague confirming they understood the request within five minutes of reading.

                ## Notes
                Two genuine options plus doing nothing beats one recommendation dressed as three.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-page decision paper is taken to the executive team and a reader confirms they grasped the request within five minutes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find two long papers that went to the executive team this year"
                - "Rewrite one so the decision needed is in the first two lines"
                - "Ask the agent to cut the rewritten paper to two pages without losing the options"
                - "Test the paper on a colleague and time how long they take to get it"
            - name: Productive conflict in the leadership room
              description: |-
                ## Purpose
                Leadership teams that never disagree in the meeting usually disagree afterwards, in corridors and in what each executive actually does. Practising structured ways to surface disagreement, such as asking each member to state a position before discussion or naming a devil's advocate, gets the real argument into the room.

                ## Milestones
                1. Three techniques chosen for surfacing disagreement in meetings.
                2. Each technique tried at least once on a live decision.
                3. Members asked whether the decision felt better tested than usual.
                4. The technique that worked best written into the forum's standing format.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three conflict techniques are tried on live decisions and the most useful one is written into a forum's standing format."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read about three techniques for surfacing disagreement in meetings"
                - "Pick the next contested decision to try the first technique on"
                - "Ask two members afterwards whether the debate felt more honest"
                - "Add the best technique to the forum's charter"
            - name: Choosing how a decision is made in the room
              description: |-
                ## Purpose
                Many meeting arguments are really about how the decision will be made: by consensus, by the chair after discussion, or by the accountable executive. Learning to state the decision method at the start of each item ends the frustration of people who thought they had a vote and discovered they did not.

                ## Milestones
                1. Three or four decision methods described in a sentence each.
                2. Every decision item on the agenda labelled with its method for a month.
                3. Members surveyed on whether the labels reduced confusion.
                4. The labelling made a standing part of the agenda format.

                ## Notes
                This is about the mechanics in the meeting. Who owns which decisions across the organisation is a wider question with its own framework.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For one month every decision item is labelled with its method, and the labels become part of the standing agenda format."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write one-line descriptions of three decision methods"
                - "Label each decision item on next week's agenda with its method"
                - "Ask members after a month whether the labels helped"
                - "Add the method label to the standing agenda format"
            - name: Contributing well as a non-chair member
              description: |-
                ## Purpose
                Executives often treat the leadership meeting as a place to defend their function and stay quiet on everything else. Learning to contribute as an owner of the whole business, by reading every paper, asking one testing question per item and offering resources from your own area, raises the quality of the whole team's decisions.

                ## Milestones
                1. Every paper for one month read before the meeting, with one question written for each.
                2. At least one contribution made on an item outside your own function in each meeting.
                3. A peer's view sought on whether your contributions changed.
                4. A personal rule written for how you prepare for executive meetings.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "For four weeks, every pre-read has a written question and each meeting includes a contribution outside your own function."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Block an hour before each meeting to read every paper"
                - "Write one testing question for each agenda item"
                - "Speak on at least one item outside your function each meeting"
                - "Ask a peer after a month whether your contributions changed"
            - name: Minutes that record decisions, not discussion
              description: |-
                ## Purpose
                Minutes written as a transcript of who said what take hours to produce and nobody reads them. Learning to take notes that record only the decision, the owner, the date and any dissent worth noting produces a one-page record that is out within a day and actually used.

                ## Milestones
                1. A one-page minutes format with decisions, actions and noted dissent only.
                2. Three meetings minuted in the new format.
                3. Minutes sent within one working day for each of those meetings.
                4. Members confirming they prefer the new format over the old.

                ## Notes
                Start from the **Meeting notes** template and strip it to decisions, actions and dissent.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three meetings in a row are minuted on one page with decisions, actions and dissent, each sent within one working day."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Compare the last three sets of minutes for length and usefulness"
                - "Draft a one-page format with decisions, actions and dissent"
                - "Minute the next three meetings in the new format"
                - "Ask members which format they prefer"
            - name: Moving status updates into writing
              description: |-
                ## Purpose
                The round-the-table update, where each executive spends ten minutes on their function, often eats half of a leadership meeting and rarely changes anything. Replacing it with short written updates posted before the meeting, read in advance, frees that time for issues that need several people at once.

                ## Milestones
                1. A written update format of no more than five lines per executive.
                2. A deadline for posting updates before each weekly meeting.
                3. The spoken update round removed from the agenda.
                4. Meeting time saved measured over a month.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The spoken update round is removed and written updates are posted before at least nine meetings in ten for a month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Time the update round in the next two weekly meetings"
                - "Draft a five-line written update format"
                - "Agree a posting deadline for updates with the team"
                - "Remove the update round from the agenda and measure the time saved"
            - name: Written decisions between meetings
              description: |-
                ## Purpose
                Between weekly meetings, small decisions that need two or three executives either wait up to seven days or get made in a corridor with nobody else told. A written decision thread, with a proposal, a response deadline of two working days and a rule that silence counts as agreement, clears routine choices without a meeting and still leaves a record.

                ## Milestones
                1. Criteria for which decisions may be taken in writing rather than in the room.
                2. A thread format: proposal, options, deadline, and the decision method stated.
                3. A rule agreed on how silence and objections are treated.
                4. Every written decision copied into the decision log within a day of closing.

                ## Notes
                Keep anything contested, irreversible or affecting people's jobs for the live meeting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written decision threads follow an agreed format and response deadline, and every one closed in a quarter appears in the decision log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List five recent decisions that waited a week for the meeting"
                - "Draft criteria for decisions that can be made in writing"
                - "Agree the two-day response deadline and the silence rule"
                - "Copy each closed thread's outcome into the decision log"
            - name: Choosing an agenda and decision tracking tool
              description: |-
                ## Purpose
                Agendas in email, decisions in a document, actions in a spreadsheet and papers in a shared drive mean nobody has the full picture. Choosing one tool, or a small connected set, for agendas, papers, decisions and actions makes the rhythm cheaper to run and easier to join.

                ## Milestones
                1. Requirements written: agendas, paper storage, decision log, action tracking, access control.
                2. Three options compared, including the tools already licensed.
                3. A chosen option with its cost and the person who will administer it.
                4. Existing decisions and actions moved into it.

                ## Notes
                Start from the **Purchase decision** template. Check what your existing collaboration suite already does before buying a dedicated board or meeting portal.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One tool or connected set is chosen against written requirements, with existing decisions and actions migrated into it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the five requirements the tool must meet"
                - "Check what the current collaboration software already offers"
                - "Compare three options on cost, security and ease of use"
                - "Move the decision log and action register into the chosen tool"
            - name: In person, hybrid or remote format for each forum
              description: |-
                ## Purpose
                Hybrid meetings where half the team is in a room and half on screens tend to sideline the remote half. Deciding a format per forum, for example remote for the weekly tactical and in person for the quarterly review, gives each meeting the conditions it needs and lets executives plan travel around it.

                ## Milestones
                1. The cost of travel and the value of being together estimated for each forum.
                2. A format chosen for each forum and written into its charter.
                3. Hybrid etiquette agreed where hybrid is unavoidable, such as everyone on their own screen.
                4. The format reviewed after one quarter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each forum has a stated format in its charter and the choice is reviewed once after a quarter of use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List where each executive is based and how often they travel"
                - "Choose a format for each forum and note the reason"
                - "Agree hybrid etiquette for any forum that stays hybrid"
                - "Review whether the formats worked after one quarter"
            - name: Rationalising committees below the executive
              description: |-
                ## Purpose
                Large organisations accumulate steering groups and committees that report into the executive team, often with overlapping remits and the same five people attending. Mapping them and deciding which to keep, merge or close frees senior diaries and makes it clear which topics reach the executive and by which route.

                ## Milestones
                1. Every committee and steering group that reports to the executive listed with its chair and members.
                2. Each one checked for a clear remit and a decision it actually takes.
                3. A recommendation to keep, merge or close each one.
                4. The agreed changes made and the reporting route into the executive written down.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every sub-executive committee is kept, merged or closed by recorded decision, and its reporting route into the executive is written down."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask each executive to list the committees they chair or attend"
                - "Map which committees report into which executive forum"
                - "Mark committees with no clear remit or decision"
                - "Recommend keep, merge or close for each and table it"
            - name: Meeting length experiment
              description: |-
                ## Purpose
                Meetings expand to fill the slot, so a two-hour weekly meeting usually contains about seventy minutes of real work. Running the weekly meeting at a shorter length for six weeks, and comparing decisions made and pulse scores, settles the right length with evidence instead of preference.

                ## Milestones
                1. A baseline of current length, overrun and decisions per meeting taken over four weeks.
                2. The meeting run at a shorter length for six weeks.
                3. Decisions per meeting and pulse scores compared between the two periods.
                4. A length chosen and written into the charter.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A six-week trial of a shorter weekly meeting is compared against a four-week baseline and the chosen length is written into the charter."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Record length, overrun and decisions for four weekly meetings"
                - "Announce a six-week trial at a shorter length"
                - "Compare decisions per meeting and pulse scores across the two periods"
                - "Write the chosen length into the forum's charter"
            - name: Dashboard-first monthly business meeting
              description: |-
                ## Purpose
                Monthly business meetings built around each function presenting its own slides spend most of the time on reading numbers aloud. Sending a standard dashboard ahead and opening the meeting on the three or four exceptions it shows turns the hour into problem solving.

                ## Milestones
                1. A single standard dashboard agreed for the monthly meeting.
                2. The dashboard sent three working days before each meeting.
                3. Function slide decks removed from the agenda.
                4. Each meeting opening with exceptions only, chosen by the chair in advance.

                ## Notes
                Which indicators belong on the dashboard is a separate design job. This project is about how the meeting uses it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three monthly meetings in a row run from a pre-sent dashboard with no function slide decks, opening on chosen exceptions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count the slides presented at the last monthly business meeting"
                - "Agree one standard dashboard to replace the function decks"
                - "Set the dashboard to go out three working days before the meeting"
                - "Choose the three exceptions to open the next meeting with"
            - name: Escalation route onto the executive agenda
              description: |-
                ## Purpose
                When nobody knows how to get an issue in front of the executive team, managers either escalate everything by email to the chief executive or nothing until it becomes a crisis. A simple, published route with criteria for what deserves executive time keeps the agenda for the right problems and stops ambushes.

                ## Milestones
                1. Criteria written for what warrants an executive agenda slot.
                2. A route defined: who to ask, by when, in what format.
                3. The route published to senior managers.
                4. Escalations over the following quarter checked against the criteria.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published escalation route with criteria is in use, and a quarter of escalations is checked against it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the last ten issues that reached the executive unexpectedly"
                - "Write three criteria for what deserves executive agenda time"
                - "Publish the route and its deadline to senior managers"
                - "Check the next quarter's escalations against the criteria"
            - name: Launching the new rhythm with the team
              description: |-
                ## Purpose
                A redesigned rhythm announced by email is ignored by the third week. Launching it at a dedicated session, walking through the charters, the calendar and the paper standard, and agreeing a trial period gives the executives ownership of the change.

                ## Milestones
                1. A launch session held with every executive present.
                2. Charters, calendar, paper standard and roles walked through and questions answered.
                3. A trial period of one quarter agreed with a review date.
                4. Assistants and regular paper authors briefed the same week.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A launch session is held with all executives, a one-quarter trial agreed, and assistants and paper authors briefed within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a 90-minute launch session with every executive"
                - "Prepare a short pack with charters, calendar and paper standard"
                - "Agree a one-quarter trial and set the review date"
                - "Brief assistants and paper authors in the same week"
            - name: First quarterly review in the new format
              description: |-
                ## Purpose
                The first quarterly review sets expectations for every one after it, so it is worth preparing far more carefully than later ones. Running it with full inputs, an external venue and a clear agenda shows the team what the forum is for and what good preparation looks like.

                ## Milestones
                1. A venue booked and the agenda shared four weeks ahead.
                2. Every executive's inputs received a week before.
                3. Three to five priorities for the next quarter agreed on the day.
                4. A short note sent within two days of what was decided and what the team will do differently.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first quarterly review runs with all inputs received on time and a follow-up note sent within two days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book the venue and share the agenda four weeks ahead"
                - "Chase any executive inputs missing a week before"
                - "Run the day against the three-part agenda"
                - "Send the follow-up note within two days"
            - name: Meeting schedule for budget season
              description: |-
                ## Purpose
                Budget weeks push the normal rhythm aside and the team either cancels everything or holds long, unstructured sessions. Planning a temporary schedule for the budget period, with dedicated review slots and the weekly meeting shortened, keeps decisions moving while the numbers get done.

                ## Milestones
                1. The budget timetable obtained from finance with key review dates.
                2. A temporary meeting schedule for the period agreed.
                3. The weekly meeting kept but shortened rather than cancelled.
                4. The normal rhythm restored on a stated date.

                ## Notes
                The content of the budget belongs to the planning cycle. This is only about the meetings around it.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A temporary budget-season meeting schedule is published with a stated return date, and the weekly meeting is not cancelled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get the budget timetable and review dates from the finance director"
                - "Draft a temporary schedule for the budget weeks"
                - "Shorten the weekly meeting for the period instead of cancelling it"
                - "Announce the date the normal rhythm returns"
            - name: Aligning the executive calendar to board dates
              description: |-
                ## Purpose
                Board papers that are signed off in a rush the night before usually reveal an executive calendar out of step with the board's. Placing an executive session two to three weeks before each board meeting, and a debrief in the week after, gives time to agree positions and act on what directors said.

                ## Milestones
                1. Board dates for the year set beside the executive calendar.
                2. A pre-board executive session placed two to three weeks before each board meeting.
                3. A post-board debrief slot placed in the following week.
                4. Board actions carried into the executive action register after each debrief.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "Every board meeting in the year has a pre-board executive session and a post-board debrief in the calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Get the board dates and paper deadlines from the company secretary"
                - "Place a pre-board executive session before each board meeting"
                - "Add a post-board debrief in the week after each one"
                - "Agree that board actions go straight into the action register"
            - name: Six-month retrospective on the rhythm
              description: |-
                ## Purpose
                Six months in, the new rhythm will have drifted in places: meetings running long, papers arriving late, a forum nobody values. A structured retrospective using the pulse scores, action completion rate and the decision log shows what to keep and what to fix before habits harden.

                ## Milestones
                1. Six months of pulse scores, attendance and action completion gathered.
                2. Each executive asked one keep, one stop and one start for the rhythm.
                3. A short list of changes agreed by the team.
                4. Charters updated to reflect the changes.

                ## Notes
                Start from the **Feedback themes** template to group the keep, stop and start answers.
              priority: medium
              deadlineOffsetDays: 190
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A six-month retrospective is held using pulse and completion data, and the agreed changes appear in updated charters."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull six months of pulse, attendance and action completion figures"
                - "Ask each executive for one keep, one stop and one start"
                - "Ask the agent to group the answers into themes"
                - "Update the charters with the agreed changes"
            - name: Inheriting a meeting rhythm as a new chief executive
              description: |-
                ## Purpose
                Arriving as chief executive means inheriting a calendar shaped by the predecessor's habits, and changing it on day one signals disrespect while leaving it alone wastes the honeymoon. Observing the existing rhythm for six to eight weeks, then changing it once with clear reasons, gets a better system without a needless fight.

                ## Milestones
                1. Six weeks of the existing meetings attended without changing them.
                2. Each executive asked privately what works and what does not.
                3. A proposed new rhythm with reasons for each change.
                4. The new rhythm agreed and launched in one step rather than piecemeal.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "After six weeks of observation and private conversations with each executive, one revised rhythm is agreed and launched."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Attend every existing forum for six weeks without changing them"
                - "Ask each executive privately what to keep and what to drop"
                - "Draft the revised rhythm with a reason for each change"
                - "Launch the revised rhythm in one announcement"
            - name: Chief of staff as owner of the rhythm
              description: |-
                ## Purpose
                In larger organisations the chief of staff often ends up running the leadership rhythm without a clear mandate, chasing papers and actions on goodwill. Writing down what the chief of staff owns, from agenda building to minutes and follow-up, and what remains with the chief executive, makes the role effective and sustainable.

                ## Milestones
                1. A list of every rhythm task currently done and who does it.
                2. A written split of what the chief of staff owns and what the chief executive keeps.
                3. The mandate communicated to the executive team so chasing carries authority.
                4. A review after one quarter of what the role should add or drop.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written mandate for the chief of staff's rhythm duties is shared with the executive team and reviewed after one quarter."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every rhythm task and who does it today"
                - "Draft the split of ownership with the chief executive"
                - "Announce the chief of staff's mandate to the executive team"
                - "Review the mandate with the chief executive after a quarter"
            - name: Executive team spread across time zones
              description: |-
                ## Purpose
                When the leadership team spans eight or more hours of time difference, a fixed weekly slot always lands in someone's evening. Rotating the inconvenient slot fairly, shifting more work to written pre-reads and decision threads, and meeting in person each quarter keeps a global team functioning without burning out the same people.

                ## Milestones
                1. Each executive's working hours mapped and the overlap window identified.
                2. A rotation agreed so no one carries the late or early slot every week.
                3. Decisions that do not need a live meeting moved to written threads with a deadline.
                4. In-person quarterly reviews scheduled across locations.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written time-zone rotation and written decision process are agreed, and over a quarter no executive takes the antisocial slot more than half the time."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Map every executive's working hours in one shared view"
                - "Publish next month's rotation of the inconvenient slot @recurring(monthly:3)"
                - "Set a rule for decisions that can be made in a written thread"
                - "Rotate the location of the quarterly review"
            - name: High-tempo cadence for a critical period
              description: |-
                ## Purpose
                Crises, major launches and cash squeezes can call for a daily leadership check-in, but those temporary stand-ups have a habit of becoming permanent. Setting the high-tempo cadence up with a clear format, a fifteen-minute limit and a stated end condition lets the team move fast and return to the normal rhythm deliberately.

                ## Milestones
                1. A daily or twice-weekly check-in format limited to fifteen minutes.
                2. A written trigger for starting and an end condition for stopping it.
                3. The normal weekly meeting kept, shortened if needed.
                4. A recorded decision to end the high-tempo cadence and return to normal.

                ## Notes
                Running the crisis itself is a wider job. This is only about the meeting tempo while it lasts.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A temporary check-in runs with a written end condition and is formally stopped by a recorded decision."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the trigger and end condition for a high-tempo cadence"
                - "Draft a fifteen-minute check-in format with three questions"
                - "Keep the weekly meeting in the diary during the period"
                - "Record the decision to return to the normal rhythm"
            - name: Combining two leadership calendars after a merger
              description: |-
                ## Purpose
                After a merger or acquisition both leadership teams bring their own meetings, terms and habits, and running both in parallel doubles the time while hiding the real decisions. Agreeing one interim rhythm within the first month, with clear membership, avoids two power centres forming.

                ## Milestones
                1. Both teams' forums listed side by side with purpose and members.
                2. One interim rhythm agreed with a single weekly forum for the combined team.
                3. Duplicated meetings stopped by a stated date.
                4. A review of the interim rhythm set for six months out.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Within a month of completion, one interim rhythm replaces both teams' meetings and duplicated forums stop by a stated date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List both leadership teams' standing meetings side by side"
                - "Propose one interim rhythm with a single weekly forum"
                - "Set the date the duplicated meetings stop"
                - "Book a six-month review of the interim rhythm"
            - name: Bringing a new executive into the rhythm
              description: |-
                ## Purpose
                Newly appointed executives usually learn the team's meeting rules by breaking them, sending a forty-page paper or bringing a deputy unannounced. A short induction to the rhythm, covering charters, paper standard, decision log and a buddy for the first month, gets them contributing properly in weeks rather than quarters.

                ## Milestones
                1. An induction pack with charters, calendar, paper standard and recent decision log entries.
                2. A buddy from the existing team assigned for the first month.
                3. A pre-meeting briefing before their first weekly and monthly meetings.
                4. A conversation at day thirty about what was confusing.

                ## Notes
                Start from the **Onboarding plan** template and add the rhythm items to the wider induction.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A new executive receives the rhythm pack and a buddy before their first meeting, and a day-thirty check is held."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Assemble the rhythm induction pack for the new executive"
                - "Ask an established executive to act as buddy for a month"
                - "Brief the new executive before their first weekly meeting"
                - "Hold a day-thirty conversation about what was confusing"
            - name: Group and divisional meeting cascade
              description: |-
                ## Purpose
                In a group with several divisions, divisional leadership meetings often run on a schedule that has nothing to do with the group's, so decisions arrive too late to inform each other. Sequencing the divisional and group forums, so divisional meetings feed the group and the group's decisions reach divisions within days, makes the whole structure behave as one rhythm.

                ## Milestones
                1. Every division's leadership calendar mapped against the group calendar.
                2. A sequence agreed so divisional reviews come before group reviews each month and quarter.
                3. A standard flow of inputs upwards and decisions downwards with deadlines.
                4. A quarter of the sequenced rhythm run and gaps fixed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Divisional and group meetings follow an agreed sequence for a full quarter, with inputs and decisions flowing to stated deadlines."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Collect each division's leadership calendar for the next quarter"
                - "Lay them against the group calendar on one timeline"
                - "Propose a sequence with input and decision deadlines"
                - "Run one quarter of the sequence and list where it broke"
            - name: Cost of executive meeting time
              description: |-
                ## Purpose
                Meeting time feels free to leadership teams because it never appears on a budget line. Putting an approximate cost per hour on each forum, using loaded salary bands rather than individual pay, makes trade-offs visible when someone proposes another standing meeting.

                ## Milestones
                1. An approximate loaded hourly cost for executive time agreed with finance.
                2. A cost per occurrence and per year calculated for each forum.
                3. The figures shown alongside the decisions each forum made over the year.
                4. A rule that any new standing forum states its annual cost.

                ## Notes
                Use salary bands, not real salaries, so nobody's pay is exposed in the analysis.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each forum's annual cost in executive time is calculated from salary bands and shown beside its decisions for the year."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree a loaded hourly cost band for executive time with finance"
                - "Multiply by attendees and length for each forum"
                - "Set each forum's annual cost beside its decisions from the log"
                - "Propose the rule that new forums state their annual cost"
            - name: Strategic versus operational share of agenda time
              description: |-
                ## Purpose
                Many teams say they want to spend half their time on strategy and, when measured, spend about a tenth. Tagging every agenda item by type and minutes used over a quarter shows where the time really goes and lets the team set and hold a target share.

                ## Milestones
                1. Every agenda item for one quarter tagged as strategic, operational or governance with minutes used.
                2. The share of time per type calculated for each forum.
                3. A target share agreed by the team.
                4. The share measured again the next quarter and compared.

                ## Notes
                Start from the **Metrics log** template to keep the quarterly shares side by side.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two consecutive quarters of agenda time are tagged and measured against an agreed target share for strategic topics."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the scribe to log minutes used per agenda item"
                - "Tag each item as strategic, operational or governance"
                - "Calculate the quarter's share per type for each forum"
                - "Measure the strategic share of agenda time against the target @recurring(quarterly)"
            - name: Rotating chair to develop the bench
              description: |-
                ## Purpose
                Where the chief executive always chairs, other executives never practise running a room of peers, a skill they will need for divisional or chief executive roles. Rotating the chair of the weekly tactical meeting among selected executives, with the chief executive as an ordinary member, builds that skill and often improves the meeting.

                ## Milestones
                1. The executives who will rotate the chair chosen and briefed.
                2. A rotation of at least one month per chair scheduled.
                3. Each rotating chair given feedback after their month.
                4. A decision on whether to keep the rotation after two cycles.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least three executives each chair the weekly meeting for a month and receive written feedback."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose three executives to rotate the weekly chair"
                - "Brief them on the standing format and the chair's role"
                - "Give each chair written feedback at the end of their month"
                - "Decide after two cycles whether to keep rotating"
            - name: Decision quality review from the log
              description: |-
                ## Purpose
                Decision logs become valuable once there is a year of it to learn from. Sampling twenty past decisions, checking which were reversed, delayed or delivered and what the paper and debate looked like for each, shows the team which meeting habits produce good decisions.

                ## Milestones
                1. Twenty decisions from at least six months ago sampled from the log.
                2. Each marked as delivered, reversed, delayed or abandoned.
                3. Patterns noted in how those decisions were prepared and debated.
                4. Two changes to the rhythm agreed from the patterns.

                ## Notes
                Judge the process, not the outcome alone. A good decision can turn out badly through luck.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Twenty logged decisions are reviewed for outcome and process, and two rhythm changes are agreed from the findings."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick twenty decisions logged at least six months ago"
                - "Mark each as delivered, reversed, delayed or abandoned"
                - "Ask the agent to summarise patterns across the papers and minutes"
                - "Agree two rhythm changes with the team from the findings"
            - name: External observation of the executive meeting
              description: |-
                ## Purpose
                After a year or two, the team stops noticing its own habits: who always speaks first, which topics get waved through, where the chair dominates. Inviting an experienced external facilitator to observe two meetings and report back gives an outside view that internal pulses rarely produce.

                ## Milestones
                1. An observer chosen with experience of senior team facilitation.
                2. Two meetings observed, one weekly and one monthly or quarterly.
                3. A written report of observed patterns shared with the team.
                4. Three changes agreed and reviewed after a quarter.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An external observer attends two executive meetings and reports, and three agreed changes are reviewed after one quarter."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask two peers for names of facilitators who observe senior teams"
                - "Agree the brief and confidentiality terms with the chosen observer"
                - "Schedule observation of one weekly and one quarterly meeting"
                - "Discuss the report with the team and agree three changes"
---

# Executive Team Meeting Rhythm

This area is for chief executives, chiefs of staff and senior managers who own the leadership team's calendar and suspect that most of its meeting hours go on reports anyone could read. It starts with the foundations (an audit of today's meetings, a charter for each forum, a decision log and a pre-read standard), then the weekly, monthly and quarterly machinery, the chairing and paper-writing skills, the design decisions, the dated launches and retrospectives, the situations that bend the rhythm, and finally the analysis an experienced operator runs on a mature rhythm.

What repeats is the Monday tactical meeting and its Thursday agenda build, a Tuesday cascade of decisions, a Friday sweep of the action register, a monthly strategic topic, a quarterly review and calendar check, and a yearly reset of the whole rhythm. The Meeting notes, Purchase decision, Metrics log, Feedback themes and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
