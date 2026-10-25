---
id: management-consulting.engagement-kickoff
name: Engagement Kickoff
description: "A first-fortnight system for consulting engagements: scope confirmed in writing, the client team mapped, governance agreed, data and interviews requested early and a day-by-day first week."
category: business
version: 1.0.0
tags: [management-consulting, engagement-kickoff, knowledge-worker, freelancer, kickoff, scope, governance, first-week-plan]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - risk-register
    - meeting-notes
    - feedback-themes
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Engagement Kickoff
          description: "Starting a consulting engagement well: confirming scope, the client team, governance, data requests, the interview schedule and a first-week plan."
          projects:
            - name: Line-by-line read of the signed statement of work
              description: |-
                ## Purpose
                Most scope disputes three weeks in trace back to a sentence in the engagement letter that nobody on the delivery team read closely. Reading the signed statement of work before day one, and marking every deliverable, assumption, exclusion and client obligation, means you start the engagement knowing exactly what was sold and what was not.

                ## Milestones
                1. The signed statement of work and any proposal it references saved in the engagement folder.
                2. Every deliverable, due date and acceptance condition listed in a single table.
                3. Exclusions and client obligations, such as data access or named staff time, highlighted separately.
                4. Ambiguous clauses noted with a question for the partner or the person who sold the work.

                ## Notes
                If you were not on the proposal, ask whoever sold it what was said in the room. Verbal promises matter as much as the contract and rarely appear in it.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of every deliverable, exclusion and client obligation from the signed statement of work exists, with open questions sent to the partner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Save the signed statement of work and proposal into the engagement folder"
                - "List each deliverable with its due date and acceptance condition"
                - "Highlight every exclusion and every obligation that sits with the client"
                - "Ask the selling partner what was promised verbally but not written down"
            - name: One-page scope confirmation note for the sponsor
              description: |-
                ## Purpose
                A sponsor who signed a contract eight weeks ago may now remember a different project. A one-page note restating the objective, the questions the work will answer, what is in and out of scope and the key dates, agreed by email in week one, gives both sides the same reference when someone later asks for more.

                ## Milestones
                1. A single page stating the objective, the key questions, in scope, out of scope and the main dates.
                2. The note reviewed by your partner or engagement lead before it goes to the client.
                3. The sponsor's written agreement, or their edits, received and filed.
                4. The final note pinned at the top of the shared engagement folder.

                ## Notes
                Keep it to one page. A long note invites line edits; a short one invites a yes.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The sponsor has confirmed a one-page scope note in writing within the first ten days, and it is filed in the shared folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the objective and three to five key questions in plain words"
                - "Write two short lists, in scope and out of scope"
                - "Get your partner to review the note before it is sent"
                - "Send the note to the sponsor and ask for agreement or edits by email"
            - name: Client stakeholder map with influence and stance
              description: |-
                ## Purpose
                Engagements stall when the team discovers in week five that the finance director was never consulted and quietly opposes the work. Mapping every client stakeholder at the start, with their role, influence, likely stance and who on your team owns the relationship, turns surprises into a plan for who to meet first.

                ## Milestones
                1. Every named client stakeholder listed with title, reporting line and role in the engagement.
                2. Each person rated for influence over the outcome and likely stance toward the work.
                3. An owner on the consulting team assigned to each important relationship.
                4. Three to five people flagged for an early one-to-one before the first steering meeting.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stakeholder map covering every named client stakeholder exists, with influence, stance and a team owner for each key person."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the sponsor for the client organisation chart and attendee lists"
                - "Rate each stakeholder for influence and likely stance"
                - "Assign a consulting team owner to every high influence stakeholder"
                - "Refresh the stakeholder map with anything learned this month @recurring(monthly:27)"
            - name: Pre-kickoff conversation with the client sponsor
              description: |-
                ## Purpose
                Thirty minutes alone with the sponsor before the formal kickoff is where you hear what success really means to them, which colleagues to handle carefully and what nearly stopped the project being approved. It is the cheapest insurance in the whole engagement and almost always welcomed.

                ## Milestones
                1. A thirty-minute call or meeting with the sponsor held before the formal kickoff.
                2. Their definition of a successful outcome written in their own words.
                3. Sensitive people, topics and past initiatives noted privately.
                4. Agreement on what the sponsor will say to open the kickoff meeting.

                ## Notes
                Ask what happened to the last consultants or the last attempt at this problem. The answer tells you what to avoid repeating.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "A private pre-kickoff conversation with the sponsor is held and their success definition and sensitivities are recorded before kickoff day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Email the sponsor's assistant to book thirty minutes before kickoff"
                - "Prepare five open questions about success, risks and past attempts"
                - "Write up the sponsor's answers in your private notes the same day"
                - "Agree the sponsor's opening remarks for the kickoff meeting"
            - name: Governance and decision rights for the engagement
              description: |-
                ## Purpose
                Without agreed governance, decisions drift to whoever shouts loudest and the team waits for approvals nobody knows how to give. Setting out at the start who decides what, which forums meet how often and how issues escalate gives every later steering meeting and sign-off a clear home.

                ## Milestones
                1. The forums named, such as steering committee, working team and sponsor check-in, with membership and frequency.
                2. Decision rights stated for scope changes, deliverable sign-off and access to people and data.
                3. An escalation path written for blocked data, unavailable staff and disagreements.
                4. First dates for each forum placed in the right calendars.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page governance sheet with forums, members, frequency, decision rights and escalation path is agreed with the sponsor and the first meetings are booked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the list of forums with members and how often each meets"
                - "Write who signs off scope changes and each deliverable"
                - "Agree an escalation path for blocked data and unavailable staff"
                - "Book the first steering committee and working team dates"
            - name: First data request sent in week one
              description: |-
                ## Purpose
                Client data rarely arrives in less than two weeks, so a request sent on day eight costs a fortnight of analysis time. Sending a first, prioritised request in the opening days, with a named client owner and a requested date for each item, gives the analysis a fighting chance of starting on schedule.

                ## Milestones
                1. A request list of the data the first phase needs, each item described precisely enough to find.
                2. Every item marked must have or nice to have, with a requested date.
                3. A named client owner agreed for each item or group of items.
                4. The request sent and acknowledged by the client lead by the end of week one.

                ## Notes
                Ask for what exists, not what you wish existed. A request for a perfect dataset gets a polite silence; a request for last year's monthly export gets a file.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A prioritised data request with owners and dates is sent and acknowledged by the client lead within the first week."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the data the first phase analyses cannot start without"
                - "Mark each item must have or nice to have and add a requested date"
                - "Ask the client lead to name an owner for each data item"
                - "Send the request and get an acknowledgement by Friday"
            - name: Interview schedule for the first three weeks
              description: |-
                ## Purpose
                Senior client diaries fill weeks ahead, so interviews booked late either slip or get squeezed into fifteen minutes. Building a schedule of who to interview, in what order and when, and getting an assistant or client coordinator to book it in week one, keeps the early fact base on time.

                ## Milestones
                1. A list of interviewees drawn from the stakeholder map, with the reason for each.
                2. Interviews ordered so senior and sceptical voices come early.
                3. Slots requested through a client coordinator or executive assistants.
                4. At least two thirds of the first three weeks of interviews confirmed in calendars.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An interview schedule covering the first three weeks exists with at least two thirds of slots confirmed by the end of week two."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the interviewee list from the stakeholder map"
                - "Order the list so senior and sceptical people come first"
                - "Ask the client coordinator to book the slots in one batch"
                - "Track which slots are confirmed, pending or refused"
            - name: Day-by-day plan for the first week on site
              description: |-
                ## Purpose
                Arriving on Monday without a plan means the first days go on waiting for badges and asking where to sit. Writing what happens each day of week one, who is where, which meetings are set and what each person should have produced by Friday, makes the team look prepared to the client from the first hour.

                ## Milestones
                1. A one-page plan with each day of week one and its fixed meetings.
                2. Named tasks and Friday outputs for every team member.
                3. Buffer time held for access problems and unplanned client requests.
                4. The plan shared with the team and the client lead before Monday.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A day-by-day week-one plan with Friday outputs per person is shared with the team and the client lead before the first day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Block out every fixed meeting already set for week one"
                - "Write the Friday output each team member owns"
                - "Leave half a day of buffer for access and logistics problems"
                - "Share the plan with the team and the client lead on Friday before start"
            - name: Site access, systems and onboarding logistics
              description: |-
                ## Purpose
                Badges, laptops, client email accounts, VPN tokens, signed confidentiality forms and a room to work in are dull, but a missing one can idle a team for days. Listing every access need and chasing it before the start date protects the first week's plan.

                ## Milestones
                1. A list of every access item each team member needs, with the client contact who arranges it.
                2. Confidentiality agreements and any client policies signed and returned.
                3. Building access, a team room and any system accounts confirmed for day one.
                4. A fallback agreed for anything that will not be ready on time.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every team member has building access, a place to work and the system accounts they need by the end of day two."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List badges, accounts, devices and forms each team member needs"
                - "Send the list to the client contact who handles onboarding"
                - "Return signed confidentiality forms before the start date"
                - "Agree a fallback plan for any account that will be late"
            - name: Kickoff deck with objectives, approach and timeline
              description: |-
                ## Purpose
                Kickoff decks swell to forty pages that nobody remembers. A short deck of eight to twelve pages covering objectives, key questions, approach by phase, team, governance, what you need from the client and the next four weeks gives the room one clear picture and something to point back to.

                ## Milestones
                1. A storyline agreed with the partner before any slides are built.
                2. Eight to twelve pages covering objectives, approach, team, governance, client asks and timeline.
                3. A page of specific asks: data, interviewees, decisions and time from named people.
                4. The deck reviewed by the sponsor at least a day before the meeting.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A kickoff deck of no more than twelve pages, including a page of named client asks, is reviewed by the sponsor before the meeting."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the deck storyline as page titles before building any slides"
                - "Build a page listing exactly what the team needs from the client"
                - "Ask the agent to tighten the page titles into short action statements"
                - "Send the draft to the sponsor for comments a day before kickoff"
            - name: Kickoff readiness checklist for every new engagement
              description: |-
                ## Purpose
                Every consultant forgets something at a start: the cost code, the conflict check, the client's travel policy. A standing checklist you run at the start of each engagement catches the same omissions every time, and pruning it each quarter keeps it short enough to actually use.

                ## Milestones
                1. A checklist of thirty or fewer items grouped into before signing, before day one, week one and week two.
                2. The checklist used on at least one engagement start.
                3. Items that were never relevant removed after each use.
                4. A copy stored where you can find it when the next engagement is confirmed.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A readiness checklist of thirty or fewer items has been run on an engagement start and pruned at least once a quarter."
                cadence: rolling
              tasks:
                - "Write down everything you forgot at your last two engagement starts"
                - "Group the items into before signing, before day one, week one and week two"
                - "Run the checklist on the next engagement start"
                - "Remove checklist items that were not used last quarter @recurring(quarterly)"
            - name: RAID log opened on day one
              description: |-
                ## Purpose
                Risks, assumptions, issues and dependencies spotted in week one are usually forgotten by week three, then reappear as a crisis. Opening a RAID log on day one, with an owner and next step for each line, and reviewing it every Friday, keeps early warnings visible to the engagement lead.

                ## Milestones
                1. A RAID log created in the shared engagement folder on the first day.
                2. Assumptions from the statement of work copied in as the first entries.
                3. Each open item given an owner, a next step and a date.
                4. A Friday review of the log held every week of the engagement.

                ## Notes
                Start from the **Risk register** template. Keep the log for the team; share a filtered version with the client.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A RAID log exists from day one, every open item has an owner and date, and it has been reviewed every Friday of the engagement so far."
                cadence: rolling
              tasks:
                - "Create the RAID log in the shared engagement folder"
                - "Copy the contract assumptions in as the first entries"
                - "Give every open item an owner, a next step and a date"
                - "Review and close items in the RAID log with the team @recurring(weekly:fri)"
            - name: Weekly sponsor status note during the first month
              description: |-
                ## Purpose
                Sponsors who hear nothing for two weeks start to imagine problems. A short written note each week of the first month, covering progress, what is coming, what you need from them and any risk, builds trust early and gives you a record if timelines later slip because of client delays.

                ## Milestones
                1. A status note format agreed with the sponsor in the first week.
                2. Each note fitting on a phone screen: done, next, needs and risks.
                3. Notes sent on the same day every week for at least four weeks.
                4. Any client-side delay recorded in the note in the week it happened.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly status notes have been sent to the sponsor on the agreed day, each with progress, next steps, needs and risks."
                cadence: rolling
              tasks:
                - "Agree the day and format of the weekly note with the sponsor"
                - "Write a four heading note template: done, next, needs, risks"
                - "Send the weekly status note to the sponsor @recurring(weekly:thu)"
                - "Record any client-side delay in the note the week it happens"
            - name: Daily team huddle through the launch weeks
              description: |-
                ## Purpose
                In the first fortnight, plans change daily as access, data and interviews come and go. A fifteen-minute stand-up each morning, covering yesterday's progress, today's priorities and anything blocked, catches problems while they are still small and keeps juniors from working on the wrong thing.

                ## Milestones
                1. A fixed time and place, or call link, set for a fifteen-minute daily huddle.
                2. Three standard questions used every day: done, today, blocked.
                3. Blockers raised in the huddle owned by a named person before it ends.
                4. The huddle reviewed after two weeks and kept, shortened or replaced.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fifteen-minute daily huddle runs for the first two weeks, with every raised blocker given an owner the same day."
                cadence: rolling
              tasks:
                - "Set a fixed time and call link for the daily huddle"
                - "Agree the three huddle questions with the team"
                - "Run the fifteen-minute team huddle and assign every blocker @recurring(daily)"
                - "Decide after two weeks whether the huddle stays daily"
            - name: Data request tracker with twice-weekly chasing
              description: |-
                ## Purpose
                Data requests sent once and never chased get answered last. Keeping a tracker of every requested item, its owner, status and date, and chasing outstanding items twice a week in a friendly, specific way, is the routine that separates teams who start analysis in week two from those still waiting in week four.

                ## Milestones
                1. A tracker listing every requested item with owner, date asked, date due and status.
                2. Outstanding items chased twice a week by named message or call.
                3. Items more than a week overdue raised with the client lead.
                4. Received data logged with date, version and where it is stored.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every requested data item sits in a tracker with status, and no item is more than a week overdue without being escalated to the client lead."
                cadence: rolling
              tasks:
                - "Set up the tracker with owner, date asked, date due and status"
                - "Chase every outstanding data item with its owner @recurring(weekly:tue,fri)"
                - "Raise items more than a week overdue with the client lead"
                - "Log each file received with its date, version and location"
            - name: Interview logistics confirmed a week ahead
              description: |-
                ## Purpose
                Interviews cancelled the morning of the meeting waste prepared guides and team time. Checking every Wednesday that next week's interviews are still confirmed, rooms or call links are set and the interviewer and note-taker are named means the schedule survives contact with busy client diaries.

                ## Milestones
                1. A list of next week's interviews with interviewer, note-taker and location.
                2. Each interviewee's attendance reconfirmed by the coordinator or assistant.
                3. Replacement slots requested for any cancellation within two days.
                4. Interview briefing material sent to interviewees who asked for it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every interview for the following week is reconfirmed by Wednesday with interviewer, note-taker and location named."
                cadence: rolling
              tasks:
                - "List next week's interviews with interviewer and note-taker"
                - "Reconfirm next week's interviews with the client coordinator @recurring(weekly:wed)"
                - "Request replacement slots for any cancellation within two days"
                - "Send the short briefing note to interviewees who asked for one"
            - name: Lessons log from every kickoff you run
              description: |-
                ## Purpose
                Experience only compounds if you write it down. A short log, one entry per engagement start, recording what went well, what went wrong and what you would do differently, becomes after a few years the most valuable kickoff guide you own, especially for independents who have no firm methodology behind them.

                ## Milestones
                1. A log with one entry per engagement start, kept in your own files.
                2. Each entry noting what worked, what failed and one change for next time.
                3. Repeated themes across entries highlighted.
                4. At least one change from the log made to your checklist or templates.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The lessons log has an entry for every recent engagement start and at least one change has been carried into your checklist or templates."
                cadence: rolling
              tasks:
                - "Create a lessons log with columns for worked, failed and change next time"
                - "Write entries for your last two engagement starts from memory"
                - "Read the lessons log and carry one change into your templates @recurring(monthly:23)"
                - "Highlight any theme that appears in three or more entries"
            - name: Personal kickoff template pack
              description: |-
                ## Purpose
                Rebuilding a scope note, stakeholder map, data request and kickoff deck from scratch every engagement wastes two days you do not have. A small pack of your own blank templates, cleaned of any client information, lets you produce first drafts on the afternoon an engagement is confirmed.

                ## Milestones
                1. Blank templates for the scope note, stakeholder map, governance sheet, data request, interview schedule and kickoff deck.
                2. Every template scrubbed of client names, figures and logos.
                3. The pack stored in one folder you can copy in a minute.
                4. The pack refreshed with improvements once a quarter.

                ## Notes
                Never carry a previous client's real content into a template. Your firm's rules and your confidentiality agreements apply to old work too.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder of six blank, client-free kickoff templates exists and has been used to draft at least one real kickoff."
                cadence: rolling
              tasks:
                - "List the six documents you build at every engagement start"
                - "Create a blank version of each with no client content"
                - "Store the pack in one folder you can copy quickly"
                - "Update the kickoff template pack with this quarter's improvements @recurring(quarterly)"
            - name: Sixty-day look-ahead of engagement starts
              description: |-
                ## Purpose
                Kickoffs go badly when they arrive as a surprise: a proposal is accepted on Thursday and the client wants the team on Monday. A monthly look at every signed or likely start in the next sixty days, with the preparation each one needs, gives you time to read, book travel and line up people.

                ## Milestones
                1. A list of signed and likely engagement starts in the next sixty days.
                2. Each start marked with its preparation needs and who is available.
                3. Clashes between starts spotted and raised with the partner or client early.
                4. Preparation time blocked in your calendar for each confirmed start.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A sixty-day list of upcoming engagement starts is reviewed every month and every confirmed start has preparation time blocked in the calendar."
                cadence: rolling
              tasks:
                - "List every signed or likely engagement start in the next sixty days"
                - "Review upcoming engagement starts for the next sixty days @recurring(monthly:5)"
                - "Block preparation time in the calendar for each confirmed start"
                - "Raise any clash between two starts with the partner or client"
            - name: Decision and action log from the first meetings
              description: |-
                ## Purpose
                The kickoff meeting and the first working sessions produce a dozen small decisions and actions that nobody writes down, then everybody remembers differently. A single running log of decisions and actions, read out at the start of each team meeting, settles disagreements before they start.

                ## Milestones
                1. One shared log of decisions and actions, with date, owner and source meeting.
                2. Every decision from the kickoff meeting entered within a day.
                3. Open actions read at the start of each weekly team meeting.
                4. Closed actions marked with the date they were done.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A decision and action log with dates and owners holds every kickoff decision and is reviewed at each weekly team meeting."
                cadence: rolling
              tasks:
                - "Create the decision and action log in the shared folder"
                - "Enter every decision from the kickoff meeting within a day"
                - "Read open actions aloud at the weekly team meeting @recurring(weekly:mon)"
                - "Mark each closed action with the date it was done"
            - name: Scoping questions that expose the real problem
              description: |-
                ## Purpose
                Clients often describe a symptom, such as falling margins, when the question they need answered is something narrower or quite different. Practising a small bank of scoping questions, and using them in the first conversations, helps you agree the right problem before the team spends three weeks on the wrong one.

                ## Milestones
                1. A bank of ten to fifteen scoping questions covering objective, decision, constraints, history and success.
                2. The questions tried in at least two real or practice conversations.
                3. Answers from one engagement compared with the signed scope to spot gaps.
                4. The weakest three questions rewritten after use.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tested bank of at least ten scoping questions exists and has been used in two conversations, with the weakest rewritten."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write ten questions about the decision the client actually needs to make"
                - "Add questions on constraints, past attempts and what success looks like"
                - "Use the questions in your next client or practice conversation"
                - "Rewrite the three questions that produced the vaguest answers"
            - name: Pre-kickoff client briefing pack
              description: |-
                ## Purpose
                Walking into a kickoff without knowing the client's last results, strategy statements or recent leadership changes is visible within minutes. A short briefing pack built from public sources and the proposal, read by every team member before day one, lets the team ask sharper questions from the start.

                ## Milestones
                1. Public material gathered: annual report, recent results, strategy statements and news from the last year.
                2. A three to five page briefing covering the business, the industry, recent events and leadership.
                3. Five questions the briefing raises for the first client meetings.
                4. Every team member confirmed as having read the pack before day one.

                ## Notes
                Use public and firm-approved sources only. Do not use material from another client's engagement.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A briefing pack of no more than five pages with five open questions is read by every team member before the first day."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Download the client's latest annual report and recent results"
                - "Ask the agent to summarise the last year of public news about the client"
                - "Write a three to five page briefing with five open questions"
                - "Confirm each team member has read the pack before day one"
            - name: Writing a one-page engagement charter
              description: |-
                ## Purpose
                Scope notes, governance sheets and timelines live in separate files, and new joiners rarely read all of them. Learning to compress the whole engagement onto one page, with objective, questions, deliverables, team, governance, dates and ground rules, is a skill that pays back on every engagement and every handover.

                ## Milestones
                1. A one-page charter drafted for a current or recent engagement.
                2. The charter tested by giving it to someone outside the team and asking them to explain the engagement back.
                3. Gaps found in that test fixed in the next version.
                4. A blank charter format added to your template pack.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page engagement charter has been written and tested on someone outside the team, who could explain the engagement back correctly."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft a one-page charter for your current or last engagement"
                - "Ask a colleague outside the team to explain the engagement back from it"
                - "Fix whatever they misunderstood in the next version"
                - "Save a blank charter format in your kickoff template pack"
            - name: Running the kickoff session in the room
              description: |-
                ## Purpose
                A kickoff meeting is the client's first experience of how your team runs a room. Practising the opening, the timing, how to draw out quiet senior people and how to close with agreed next steps makes the session feel like the start of joint work rather than a sales presentation.

                ## Milestones
                1. A run sheet for a ninety-minute kickoff with timings for each section.
                2. The opening five minutes rehearsed aloud at least twice.
                3. A planned question for each senior attendee to bring them into the discussion.
                4. A closing segment that reads back decisions and next steps before people leave.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A timed run sheet exists and the opening and close have been rehearsed aloud before the kickoff meeting."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a ninety-minute run sheet with timings for each section"
                - "Rehearse the opening five minutes aloud twice"
                - "Prepare one question for each senior attendee"
                - "Script a closing read-back of decisions and next steps"
            - name: Scope boundary language for early requests
              description: |-
                ## Purpose
                In week one, helpful clients ask for extra analyses in passing, and saying yes to each feels like good service until the timeline collapses. Having a few practised phrases that acknowledge the request, note it and route it to the change process lets you protect scope without sounding defensive.

                ## Milestones
                1. Four or five phrases written for acknowledging, parking and routing out-of-scope requests.
                2. The phrases practised aloud with a colleague in a short role play.
                3. Every out-of-scope request in the first month recorded in a parking list.
                4. The parking list reviewed with the sponsor at the next check-in.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written set of scope boundary phrases has been practised in role play and every early out-of-scope request is recorded in a parking list."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write five phrases that acknowledge and park an extra request"
                - "Role play three out-of-scope requests with a colleague"
                - "Start a parking list for requests outside the agreed scope"
                - "Review the parking list with the sponsor at the next check-in"
            - name: Client glossary of terms and acronyms
              description: |-
                ## Purpose
                Every client has its own language: product codes, internal team names, acronyms for systems and old programmes. Building a glossary in the first week, and adding to it as you go, stops the team nodding along in meetings and lets new joiners follow conversations from their first day.

                ## Milestones
                1. A shared glossary started on day one with terms from the briefing pack.
                2. New terms added after each early meeting, with a plain definition.
                3. Doubtful definitions checked with a friendly client counterpart.
                4. The glossary handed to every new team member at their start.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A shared glossary of client terms with checked definitions exists and is given to every new team member."
                cadence: rolling
              tasks:
                - "Start the glossary with terms from the briefing pack"
                - "Add new terms heard in meetings this week to the glossary @recurring(weekly:fri)"
                - "Check doubtful definitions with a friendly client counterpart"
                - "Send the glossary to every new joiner on their first day"
            - name: Information handling rules agreed at kickoff
              description: |-
                ## Purpose
                Client files end up on personal laptops, sent to the wrong address or kept long after the engagement because nobody agreed the rules at the start. Agreeing where client data lives, who can see it, how it is shared and when it is deleted, before the first file arrives, protects the client and your firm.

                ## Milestones
                1. The client's information security requirements obtained and read.
                2. One approved location agreed for all client data, with access by named people.
                3. Rules for sharing, printing and personal data written in a short team note.
                4. Access lists checked against the current team every month.

                ## Notes
                Personal data has legal duties attached in most countries. Ask the client's data protection lead or your firm's risk team where the rules are unclear.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A short team note on information handling exists, all client data sits in one approved location and access lists are checked monthly."
                cadence: rolling
              tasks:
                - "Ask the client for their information security requirements"
                - "Agree one approved location for all client data"
                - "Write a half-page team note on sharing, printing and personal data"
                - "Check data access lists against the current team @recurring(monthly:14)"
            - name: Choosing the on-site and remote rhythm
              description: |-
                ## Purpose
                Five days on site every week is expensive and tiring; fully remote can leave the client feeling unattended. Choosing a rhythm in week one, based on where the key people sit, when interviews happen and what the client expects, avoids months of drifting travel patterns that suit nobody.

                ## Milestones
                1. Client expectations on presence asked about directly.
                2. Two or three rhythm options compared on client contact, travel cost and team wellbeing.
                3. A chosen rhythm agreed with the sponsor and the team.
                4. A date set to review the rhythm after the first month.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written on-site and remote rhythm is agreed with the sponsor and team in week one, with a review date one month out."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the sponsor how often they expect the team on site"
                - "Compare two or three rhythms on contact, cost and team wellbeing"
                - "Agree the chosen rhythm with the sponsor and the team"
                - "Put a date in the calendar to review the rhythm after a month"
            - name: Collaboration tools and shared folder set-up
              description: |-
                ## Purpose
                Teams lose hours when half the files sit in the client's system, half in the firm's and the rest in email. Deciding in week one which platform holds working files, which holds client-facing ones, and who has access, gives everyone one place to look and keeps version confusion out of the first deliverables.

                ## Milestones
                1. The client's and the firm's rules on permitted tools checked.
                2. One platform chosen for team working files and one for shared client files.
                3. A folder structure set up with clear names for phases and deliverables.
                4. Access granted to named people only, with an owner for the permissions.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One team platform and one client-shared platform are chosen, a folder structure exists and permissions have a named owner."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which tools the client and your firm allow"
                - "Choose one platform for team files and one for shared client files"
                - "Create a folder structure by phase and deliverable"
                - "Name one person to own folder permissions"
            - name: Scope change protocol agreed at the start
              description: |-
                ## Purpose
                Change requests are easier to agree before anyone wants one. Setting out at kickoff how new requests are raised, assessed for effort and cost, approved and recorded means the first real change becomes a short conversation instead of an argument about what was in the original letter.

                ## Milestones
                1. A short protocol for raising, sizing and approving scope changes.
                2. The approver named for changes that affect cost, time or deliverables.
                3. A change log created and shown to the sponsor.
                4. The change log reviewed at the weekly working team meeting.

                ## Notes
                For independents, put the change protocol in writing even when the client relationship is friendly. It protects the friendship as much as the fee.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written scope change protocol with a named approver and a change log is agreed with the sponsor in the first two weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a half-page protocol for raising and approving scope changes"
                - "Name the client approver for changes to cost, time or deliverables"
                - "Show the change log to the sponsor and agree how it is used"
                - "Review the scope change log at the working team meeting @recurring(weekly:wed)"
            - name: Engagement success measures agreed with the sponsor
              description: |-
                ## Purpose
                If nobody agrees what a good outcome looks like, the engagement will be judged on mood. Agreeing three to five measures at the start, such as a decision taken by a date, a savings target validated by finance or an adopted operating model, gives the team a target and the sponsor a way to defend the work.

                ## Milestones
                1. Three to five success measures drafted from the sponsor's own words.
                2. Each measure made checkable, with how and when it will be judged.
                3. The measures agreed with the sponsor in writing.
                4. Progress against the measures discussed with the sponsor every month.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Three to five checkable success measures are agreed with the sponsor in writing and discussed with them monthly."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Draft three to five success measures from the sponsor conversation"
                - "Make each measure checkable with a method and a date"
                - "Get the sponsor's written agreement to the measures"
                - "Discuss progress on the success measures with the sponsor @recurring(monthly:18)"
            - name: Two-week kickoff retrospective
              description: |-
                ## Purpose
                By the end of week two you know what went wrong with the start, but the memory fades quickly once delivery pressure rises. A forty-five-minute team retrospective, with a short check-in from the client lead, turns those lessons into two or three changes for the rest of the engagement and the next kickoff.

                ## Milestones
                1. A forty-five-minute retrospective held with the whole team at the end of week two.
                2. The client lead's view on the start gathered beforehand.
                3. Two or three changes agreed for the rest of the engagement.
                4. The main lessons copied into your kickoff lessons log.

                ## Notes
                Start from the **Feedback themes** template to group what people said.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A retrospective is held by day twenty-one, two or three agreed changes are recorded, and the lessons are copied into the kickoff lessons log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book forty-five minutes with the team at the end of week two"
                - "Ask the client lead for three sentences on how the start felt"
                - "Agree two or three changes for the rest of the engagement"
                - "Copy the main lessons into your kickoff lessons log"
            - name: Pre-mortem on the engagement in week one
              description: |-
                ## Purpose
                Imagining that the engagement has failed, and asking why, surfaces the risks people are too polite to raise in a kickoff. A thirty-minute pre-mortem with the consulting team in week one, and a lighter version with the sponsor, usually finds two or three real threats that can still be headed off.

                ## Milestones
                1. A thirty-minute team session where each person writes reasons the engagement failed.
                2. Reasons grouped and the top three threats chosen.
                3. A mitigation and owner set for each top threat and added to the RAID log.
                4. The top threats discussed briefly with the sponsor.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A pre-mortem in week one produces three named threats, each with a mitigation and owner in the RAID log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book thirty minutes with the team for a pre-mortem in week one"
                - "Ask each person to write three reasons the engagement failed"
                - "Choose the top three threats and add mitigations to the RAID log"
                - "Raise the top threats briefly with the sponsor"
            - name: Consulting team roles and working norms
              description: |-
                ## Purpose
                A new team assembled for an engagement often has unspoken assumptions about hours, weekend work, review cycles and who talks to which client person. Agreeing roles and a handful of norms in the internal launch saves friction in week three and makes it easier for juniors to raise concerns.

                ## Milestones
                1. Each team member's role and client counterparts written down.
                2. Norms agreed on working hours, response times, reviews and weekends.
                3. Each person's personal constraints, such as a school run or religious observance, known to the lead.
                4. Norms checked briefly at the weekly team meeting during the first month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written list of team roles, client counterparts and working norms is agreed at the internal launch and checked weekly in month one."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write each team member's role and client counterparts"
                - "Agree norms on hours, response times, reviews and weekends"
                - "Ask each person privately about constraints the lead should know"
                - "Check team norms for ten minutes at the weekly team meeting @recurring(weekly:mon)"
            - name: Formal kickoff meeting with client leadership
              description: |-
                ## Purpose
                The formal kickoff is where the client leadership hears the objective, meets the team and agrees what they owe the work in data, people and decisions. Treating it as a dated event with a room, attendee list, run sheet and a follow-up note within a day makes it the launch point everyone refers back to.

                ## Milestones
                1. Date, room or call link and the full attendee list confirmed by the sponsor.
                2. The kickoff deck and run sheet ready the day before.
                3. The meeting held, with decisions and asks recorded as it happens.
                4. A follow-up note with decisions, actions and owners sent within one working day.

                ## Notes
                Start from the **Meeting notes** template for the record and the follow-up note.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The kickoff meeting is held within the first two weeks and a follow-up note with decisions, actions and owners goes out within one working day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the date, room and attendee list with the sponsor"
                - "Print or share the deck and run sheet the day before"
                - "Name a team member to record decisions and asks in the meeting"
                - "Send the follow-up note with actions and owners within a working day"
            - name: Internal team launch the day before kickoff
              description: |-
                ## Purpose
                Teams that meet each other for the first time in front of the client look disorganised. A two-hour internal launch the day before, covering the scope, the stakeholder map, roles, the week-one plan and a rehearsal of the kickoff, means everyone walks in knowing their part and the client's sensitivities.

                ## Milestones
                1. A two-hour internal session booked with every team member and the partner.
                2. Scope, stakeholders, roles and the week-one plan walked through.
                3. The kickoff meeting rehearsed once, including likely awkward questions.
                4. Open questions from the team answered or assigned before the client kickoff.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An internal team launch with the partner is held before the client kickoff, including a rehearsal and answers to open team questions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book two hours with the team and partner the day before kickoff"
                - "Walk through scope, stakeholders, roles and the week-one plan"
                - "Rehearse the kickoff and list the likely awkward questions"
                - "Assign owners to every open question raised by the team"
            - name: Week-one site visit and floor walk
              description: |-
                ## Purpose
                Slides and data tell you how the client describes its business; a morning in the warehouse, branch, call centre or plant tells you how it runs. A planned visit in the first week, with a host and a short list of things to look for, gives the team context that makes every later interview sharper.

                ## Milestones
                1. A host and date agreed for a site visit in week one.
                2. A short list of what to look for and who to meet prepared.
                3. Safety, dress and confidentiality rules for the site checked in advance.
                4. Observations written up by the team within a day of the visit.

                ## Notes
                Follow the site's safety induction in full, even for a short walk. It is also a quick lesson in how the client thinks about risk.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A site visit with a client host happens in the first week and written observations are shared with the team within a day."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the client lead for a host and a date for a site visit"
                - "Write a short list of what to observe and who to meet"
                - "Check the site's safety and dress requirements before going"
                - "Write up observations within a day of the visit"
            - name: End of week one sponsor check-in
              description: |-
                ## Purpose
                The first Friday is the moment to show the sponsor what the team has done, what has not arrived and what you need next. A short check-in with a one-page summary catches early frustration on either side and secures help with blocked data or unavailable people before week two begins.

                ## Milestones
                1. Thirty minutes with the sponsor booked for the end of week one.
                2. A one-page summary of progress, blocked items and asks prepared.
                3. Blocked items given an owner on the client side in the meeting.
                4. Agreed changes to the week-two plan shared with the team the same day.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An end of week one sponsor check-in is held with a one-page summary and every blocked item leaves with a client owner."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book thirty minutes with the sponsor for the first Friday"
                - "Prepare a one-page summary of progress, blockers and asks"
                - "Get a client owner for each blocked item in the meeting"
                - "Share changes to the week-two plan with the team that afternoon"
            - name: First working team session with client counterparts
              description: |-
                ## Purpose
                Steering committees set direction, but the day-to-day work happens with client counterparts in finance, operations or IT who have their own jobs to do. A first working session that agrees how you will work together, how often you meet and what they will see before their bosses do sets up a partnership instead of a requisition.

                ## Milestones
                1. Client counterparts for each workstream named and invited.
                2. A first session held covering roles, meeting rhythm and review of materials.
                3. Agreement that counterparts see findings before their seniors do.
                4. A recurring working team slot in everyone's calendar.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first working team session with named client counterparts is held and a recurring working team slot is in everyone's calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the client counterpart for each workstream"
                - "Agree the working team meeting rhythm in the first session"
                - "Promise counterparts an early look at findings before their seniors"
                - "Send a recurring calendar invite for the working team slot"
            - name: Solo kickoff as an independent consultant
              description: |-
                ## Purpose
                Without a team, an independent is the partner, the manager and the analyst at once, and the client may treat you as an extra employee. A deliberate solo kickoff, with written scope, your own governance, clear working days and a protected admin slot, keeps a small engagement from expanding into unpaid full-time work.

                ## Milestones
                1. Scope, deliverables and working days confirmed in writing with the client.
                2. A single client point of contact and a weekly check-in agreed.
                3. Your invoicing dates and the client's purchase order or supplier number confirmed.
                4. A weekly admin block in your calendar for invoicing, notes and planning.

                ## Notes
                Ask about the client's supplier registration and payment terms at kickoff. Many first invoices are late because a supplier form was never filed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Written scope and working days, a single client contact, confirmed invoicing details and a weekly admin block are all in place by the end of week one."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Confirm your working days and deliverables with the client by email"
                - "Ask the client to complete supplier registration and give a purchase order"
                - "Agree a single client contact and a weekly check-in time"
                - "Hold your admin block for invoicing, notes and next week's plan @recurring(weekly:fri)"
            - name: Kickoff as a subcontractor on a larger firm's engagement
              description: |-
                ## Purpose
                As a subcontractor you work on someone else's client, under their brand and their rules about who speaks to whom. Clarifying at the start whose name is on your slides, whether you may contact the client directly and how your work is reviewed avoids the mistakes that end subcontracting relationships.

                ## Milestones
                1. The prime firm's rules on branding, email addresses and client contact confirmed.
                2. Your role and reporting line stated in the prime firm's kickoff materials.
                3. The review route for your work agreed with the prime's engagement manager.
                4. Timesheet and invoice arrangements with the prime firm confirmed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Branding, client contact rules, review route and invoicing arrangements are confirmed in writing with the prime firm before the client kickoff."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the prime firm which brand and email address you use with the client"
                - "Confirm whether you may contact client staff directly"
                - "Agree how your work is reviewed before the client sees it"
                - "Confirm timesheet and invoice arrangements with the prime firm"
            - name: Joining an engagement already under way
              description: |-
                ## Purpose
                Arriving in week four means the team has context you lack and no time to give it. A structured first three days, reading the key documents in a set order, meeting your client counterpart and agreeing your first deliverable with the manager, lets you contribute by the end of the week instead of the end of the month.

                ## Milestones
                1. The scope note, latest steering pack, RAID log and workplan read in that order.
                2. A thirty-minute handover with the person whose work you are taking on.
                3. An introduction to your client counterpart within the first two days.
                4. A first deliverable and its due date agreed with the engagement manager.

                ## Notes
                Ask for the glossary and the stakeholder map first. They save more time than any other document.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Within three days of joining, the key documents are read, a handover is done, the client counterpart is met and a first deliverable is agreed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the manager for the scope note, steering pack, RAID log and workplan"
                - "Book a thirty-minute handover with the person you are replacing"
                - "Request an introduction to your client counterpart"
                - "Agree your first deliverable and its due date with the manager"
            - name: First engagement start as a new analyst
              description: |-
                ## Purpose
                On a first engagement, an analyst often does not know which questions are fine to ask or what good looks like in week one. A short personal plan, covering what to read, who to meet, how to take notes and when to ask your manager for a check, makes the first fortnight a confident start rather than a blur.

                ## Milestones
                1. The briefing pack, scope note and stakeholder map read before day one.
                2. A notebook or file set up for meeting notes and questions to ask later.
                3. A fifteen-minute check with the manager booked at the end of each of the first five days.
                4. One piece of work delivered in week one with the manager's feedback noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A new analyst has read the starting documents, held five daily manager checks and recorded feedback on a first week-one deliverable."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the briefing pack and scope note before your first day"
                - "Set up a notes file with a running list of questions"
                - "Book fifteen minutes with your manager at the end of each day"
                - "Write down the feedback on your first piece of work"
            - name: First kickoff as a newly promoted manager
              description: |-
                ## Purpose
                Managers new to the role often still do the analyst work while the kickoff tasks that only they can do go undone. Planning your first kickoff around manager-only jobs, such as the sponsor relationship, governance, the scope note and the team plan, makes the step up visible to the partner and the client.

                ## Milestones
                1. A list separating manager-only kickoff tasks from those you will delegate.
                2. Sponsor conversation, governance and scope note owned and done by you.
                3. Team tasks for week one delegated with clear outputs.
                4. A short debrief with the partner after week two on what to change.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Manager-only kickoff tasks are done personally, team tasks are delegated with outputs, and a partner debrief is held after week two."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the kickoff tasks only the manager can do"
                - "Delegate week-one analysis tasks with clear outputs"
                - "Ask the partner what they want to see from you in the first fortnight"
                - "Book a debrief with the partner at the end of week two"
            - name: Remote kickoff with a distributed client team
              description: |-
                ## Purpose
                When the client team spans three time zones and the consultants rarely travel, the usual hallway conversations never happen. A remote kickoff with deliberate written communication, time-zone-aware meetings, cameras-on introductions and a short Monday plan by message makes up for the missing room.

                ## Milestones
                1. Client and team time zones mapped and a fair meeting window chosen.
                2. A video kickoff held with short personal introductions from everyone.
                3. One shared channel agreed for day-to-day questions.
                4. A written Monday plan sent to the whole group every week of the first month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A remote kickoff is held in a fair time window, a shared channel is in use and a written Monday plan has gone out for four weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Map the time zones of every client and team member"
                - "Choose a meeting window that does not always favour one region"
                - "Agree one shared channel for daily questions"
                - "Send a written plan for the week to the whole group @recurring(weekly:mon)"
            - name: Inception report for a terms of reference engagement
              description: |-
                ## Purpose
                Public sector and donor-funded consultancies often require an inception report within a few weeks of signing, restating the terms of reference, the method, the workplan, risks and any proposed changes. Delivering it on time and well written sets the tone with the task manager and is often a payment milestone.

                ## Milestones
                1. The terms of reference and contract checked for the inception report's due date, contents and approval route.
                2. An inception mission or meetings with the client and key stakeholders held.
                3. A draft report covering understanding, method, workplan, risks and proposed adjustments.
                4. The report submitted on time and comments resolved into an approved version.

                ## Notes
                Propose any change to the terms of reference in the inception report itself. It is usually the easiest moment to adjust scope formally.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An inception report matching the terms of reference is submitted by its contractual due date and approved by the client task manager."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find the inception report due date and required contents in the contract"
                - "Plan inception meetings with the client and key stakeholders"
                - "Draft the understanding, method, workplan and risk sections"
                - "Submit the report and log every comment until it is approved"
            - name: Multi-workstream kickoff across business units
              description: |-
                ## Purpose
                Large engagements run four or five workstreams in different parts of the client, each with its own sponsor and data owners. Launching them together, with one integrated plan, shared governance and a weekly dependency check, stops workstreams asking the same people for the same data and contradicting each other later.

                ## Milestones
                1. One integrated plan showing every workstream's milestones on a single page.
                2. Shared governance with a single steering committee and named workstream sponsors.
                3. A combined data request and interview schedule with duplicates removed.
                4. A weekly cross-workstream dependency check running from week one.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An integrated one-page plan, shared governance and a de-duplicated data request exist within thirty days, and dependency checks run weekly."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Put every workstream's milestones on one integrated page"
                - "Merge workstream data requests and remove duplicates"
                - "Name a client sponsor for each workstream"
                - "Hold the cross-workstream dependency check @recurring(weekly:tue)"
            - name: Reset of an engagement that started badly
              description: |-
                ## Purpose
                Sometimes the first month goes wrong: scope was misunderstood, the sponsor changed or the team lost the client's confidence. A deliberate reset, naming what went wrong, re-agreeing scope and governance and showing quick evidence of progress, can save the relationship if it happens before the next steering committee.

                ## Milestones
                1. An honest internal diagnosis of what went wrong, agreed with the partner.
                2. A frank conversation with the sponsor acknowledging the problems.
                3. A revised scope note, plan and governance agreed in writing.
                4. A visible piece of progress delivered within two weeks of the reset.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A revised scope note and plan are agreed with the sponsor and a visible piece of progress is delivered within two weeks of the reset."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-page honest diagnosis of what went wrong"
                - "Agree the diagnosis and the reset approach with the partner"
                - "Hold a frank reset conversation with the sponsor"
                - "Deliver one visible piece of progress within two weeks"
            - name: Kickoff alongside other advisers already on site
              description: |-
                ## Purpose
                Clients frequently have auditors, lawyers, a technology vendor or another consulting firm working in parallel. Agreeing early who does what, where your scope stops and theirs starts, and how information is shared, avoids duplicated interviews and turf disputes in front of the client.

                ## Milestones
                1. Every other adviser on the client's related work listed with their scope.
                2. Overlaps and handoffs identified and raised with the sponsor.
                3. An agreed approach to joint interviews, shared data and confidentiality between advisers.
                4. A named contact in each adviser team.

                ## Notes
                Never share your firm's methods or another client's information with a rival adviser. Agree with the sponsor what each adviser may see.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of other advisers with their scope and a named contact exists, and the sponsor has agreed how overlaps and shared data are handled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the sponsor which other advisers are working on related topics"
                - "Write each adviser's scope beside yours and mark overlaps"
                - "Agree rules for joint interviews and shared data with the sponsor"
                - "Get a named contact in each adviser team"
            - name: Confidential kickoff for a sensitive project
              description: |-
                ## Purpose
                Restructurings, acquisitions and leadership changes need a different start: code names, need-to-know lists, off-site working and careful interview cover stories. Planning the confidentiality of the kickoff itself prevents a leak that can damage morale, the deal or the client's share price before the work has begun.

                ## Milestones
                1. A code name and a need-to-know list agreed with the sponsor.
                2. Working location, file storage and meeting titles chosen to avoid revealing the project.
                3. An agreed explanation for staff who ask why consultants are present.
                4. Every team member briefed on the rules and any insider list obligations noted with the client's legal team.

                ## Notes
                Where the client is listed or the project is price sensitive, the client's legal or compliance team decides the rules. Follow them exactly and ask before you act.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A code name, need-to-know list, cover explanation and storage rules are agreed with the sponsor and legal team, and every team member is briefed before kickoff."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree a code name and need-to-know list with the sponsor"
                - "Ask the client's legal team for any insider list or disclosure rules"
                - "Choose meeting titles and storage that do not reveal the project"
                - "Brief every team member on the confidentiality rules before kickoff"
---

# Engagement Kickoff

The first two weeks of an engagement decide most of what follows: whether scope is understood the same way on both sides, whether the data and the interviews arrive in time, and whether the sponsor trusts the team. This area starts with foundations (the signed scope read properly, a stakeholder map, governance, the first data request, the interview schedule and a day-by-day first week), then the operating routines that run during launch, the skills of scoping questions and kickoff charters, decisions about location, tools and change control, the kickoff events themselves, variants for solo independents, subcontractors, late joiners and new managers, and finally specialist starts such as inception reports, multi-workstream launches and rescues.

During a launch the rhythm is a daily team huddle, twice-weekly data chasing, a weekly RAID log review and a weekly status note to the sponsor, with monthly checks of access lists, success measures and your lessons log, and a quarterly refresh of your kickoff template pack. The Operational checklist, Risk register, Meeting notes and Feedback themes templates pair with the readiness checklist, the RAID log, the kickoff meeting record and the two-week retrospective. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
