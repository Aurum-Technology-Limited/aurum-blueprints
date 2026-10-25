---
id: management-consulting.steering-committee-meetings
name: Steering Committee Meetings
description: "A working system for consulting steering committees: terms of reference, pre-wiring each member, a deck built around decisions, minutes out within a day and actions chased until they close."
category: business
version: 1.0.0
tags: [management-consulting, steering-committee-meetings, knowledge-worker, steering-committee, governance, pre-wiring, decision-making, minutes]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - operational-checklist
    - feedback-themes
    - board-meeting
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Steering Committee Meetings
          description: "Preparing and running steering committees: pre-wiring key stakeholders, the deck, decisions requested, minutes and actions after the meeting."
          projects:
            - name: Steering committee terms of reference
              description: |-
                ## Purpose
                Many engagement steering committees run for months without anyone writing down what they are for, which is why they drift into hour-long status updates. A two-page terms of reference agreed at the first meeting fixes the purpose, the members, the quorum, the decisions it owns and how often it meets, so every later argument about whether something belongs on the agenda has an answer.

                ## Milestones
                1. A two-page draft covering purpose, members, chair, quorum, frequency and decisions in scope.
                2. The draft reviewed by the engagement partner and the client sponsor before circulation.
                3. The terms of reference approved and recorded in the minutes of the first meeting.
                4. The approved version saved in the engagement governance folder with a version number.

                ## Notes
                Keep it short enough to read in the meeting. A terms of reference nobody has read protects nobody when a member later claims a decision was outside the committee's remit.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A terms of reference naming purpose, members, quorum, frequency and decisions in scope is approved and minuted at the first steering committee."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find any existing governance document the client already uses for programmes"
                - "Draft a two-page terms of reference with purpose, members, quorum and frequency"
                - "Send the draft to the partner and the client sponsor for comment"
                - "Table the terms of reference for approval at the first steering committee"
            - name: Committee membership and attendance map
              description: |-
                ## Purpose
                Fourteen people around a table rarely decides anything, and one missing finance director can stall a budget decision for a month. Mapping who sits on the committee, what each person controls, who they would send as a substitute and how reliably they attend tells you early whether the room can actually make the calls the engagement needs.

                ## Milestones
                1. A list of every member with role, budget or people they control and their executive assistant's name.
                2. A named substitute agreed for each member who controls a decision.
                3. Members with no decision role moved to an attendee or distribution list with the sponsor's agreement.
                4. Attendance for each meeting recorded beside each name.

                ## Notes
                Aim for six to nine voting members. If the sponsor insists on more, ask which of them would be missed if they stopped coming.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A membership map lists each member's decision role and named substitute, and the sponsor has agreed who is a voting member."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every proposed member with their title and what they control"
                - "Ask the sponsor who each member would send if they could not attend"
                - "Get the executive assistant contact for every member"
                - "Agree with the sponsor which people move to the distribution list only"
                - "Update attendance beside each member's name after every meeting @recurring(monthly:14)"
            - name: Meeting calendar set for the whole engagement
              description: |-
                ## Purpose
                Senior diaries fill eight to twelve weeks ahead, so a steering committee booked two weeks out loses half its members. Setting every date for the engagement in the first week, timed to land after each phase gate rather than at arbitrary monthly points, means the decisions arrive when the work needs them.

                ## Milestones
                1. Every steering committee date for the engagement mapped against the phase plan and its gates.
                2. Invitations sent to all members through their assistants for the full series.
                3. A room or video link booked for each date, with a fallback if the room is lost.
                4. Paper deadlines and pre-wiring windows marked on the team calendar for each meeting.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All steering committee dates for the engagement are accepted by at least three quarters of voting members, with paper deadlines on the team calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Lay the engagement phase gates on a calendar and pick a date after each"
                - "Send the full series of invitations through each member's assistant"
                - "Book rooms and video links for every date in the series"
                - "Mark the paper deadline and pre-wiring window before each meeting"
            - name: Decision rights matrix for the committee
              description: |-
                ## Purpose
                Teams bring a vendor choice to the steering committee only to hear the CFO say it was hers to make all along. A one-page matrix showing which decisions the committee takes, which it only notes and which belong to working teams or individual executives stops the room spending forty minutes on something it cannot decide.

                ## Milestones
                1. The ten to fifteen decisions the engagement will need listed by phase.
                2. Each decision assigned to the committee, a named executive or the working team.
                3. Spending and scope thresholds above which a decision must come to the committee agreed.
                4. The matrix attached to the terms of reference and shown at the first meeting.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A decision rights matrix with named owners and thresholds is agreed with the sponsor and attached to the terms of reference."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the decisions the engagement will need in each phase"
                - "Mark each one as committee, named executive or working team"
                - "Propose spending and scope thresholds that trigger a committee decision"
                - "Walk the sponsor through the matrix before it goes to the committee"
            - name: Fixed deck skeleton for every meeting
              description: |-
                ## Purpose
                When the deck changes shape every month, members spend the first ten minutes working out where things are. A fixed skeleton, with the decisions requested on page two, a one-page status, the risks that need the room and appendices behind a divider, lets members go straight to what matters and lets the team build each pack faster.

                ## Milestones
                1. A skeleton of eight to twelve pages with a fixed order: decisions, status, risks, next period, appendix.
                2. A decisions requested page placed second, straight after the agenda.
                3. Page templates with placeholders saved in the engagement folder.
                4. The skeleton agreed with the engagement manager and used for the first pack.

                ## Notes
                Put decisions before status. If the status page comes first, the meeting will spend its energy there and reach the decisions with five minutes left.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved deck skeleton with decisions on page two is used unchanged in structure for at least three consecutive meetings."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect two past steering committee decks from the firm's library for reference"
                - "Draft the page order with decisions requested on page two"
                - "Build placeholder pages for status, risks, next period and appendix"
                - "Agree the skeleton with the engagement manager before the first pack"
            - name: Pre-read and paper deadline rules
              description: |-
                ## Purpose
                Packs sent the night before are not read, and members who have not read them ask the questions the pages already answer. A simple rule, papers out three working days before with nothing new added after, protects the meeting and gives the team a fixed internal deadline to plan against.

                ## Milestones
                1. A paper deadline agreed with the chair, such as three working days before each meeting.
                2. An internal lock date two days earlier for partner review.
                3. A rule for late items written down: verbal update only, or wait for the next meeting.
                4. The rules included in the terms of reference and the team's preparation countdown.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The chair has agreed a written paper deadline and late-item rule, and the next pack goes out on that deadline."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Propose a paper deadline and internal lock date to the engagement manager"
                - "Agree the late-item rule with the chair before the next meeting"
                - "Add the deadline and rule to the terms of reference"
            - name: Minutes and action log format
              description: |-
                ## Purpose
                Minutes that read like a transcript bury the three decisions that mattered, and an action list without owners and dates is a wish list. Settling one format before the first meeting, with decisions, actions and key points kept apart, makes the minutes quick to write, quick to approve and easy to search months later.

                ## Milestones
                1. A minutes format with sections for attendees, decisions, actions, risks raised and key discussion points.
                2. An action log with columns for number, action, owner, due date, status and closing note.
                3. A numbering scheme for decisions and actions that carries across meetings.
                4. The format agreed with the chair's office and used for the first meeting.

                ## Notes
                Start from the **Meeting notes** template and add the decision and action numbering. Record what was decided, not who said what.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A minutes format and numbered action log are agreed with the chair's office and used for the first steering committee."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the chair's office whether the client has a house minutes format"
                - "Set up the minutes page with separate decision and action sections"
                - "Build the action log with owner, due date and status columns"
                - "Choose a numbering scheme that carries across meetings"
            - name: Escalation route into the committee
              description: |-
                ## Purpose
                Without a defined route, issues either never reach the committee or arrive as a surprise from a member who heard it in a corridor. Agreeing what gets escalated, by whom, through which form and how far ahead, means the committee sees problems when they can still be fixed and working teams know when to solve things themselves.

                ## Milestones
                1. Criteria for escalation written: budget variance, slipped milestones, unresolved disagreements between workstreams.
                2. A one-page escalation form with the issue, options, recommendation and decision needed.
                3. A rule that the engagement manager screens escalations before they enter the pack.
                4. The route explained to workstream leads on both client and firm sides.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written escalation criteria and a one-page form exist, and every workstream lead has been briefed on the route."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft escalation criteria for budget, timeline and unresolved disagreements"
                - "Create a one-page escalation form with options and a recommendation"
                - "Brief workstream leads on when and how to escalate"
            - name: Baseline status and success measures for the first pack
              description: |-
                ## Purpose
                Status pages mean nothing unless the committee agreed what on track looks like at the start. Setting a baseline for scope, milestones, budget and the three to five success measures in the first pack gives every later red, amber or green rating something to be measured against.

                ## Milestones
                1. Baseline milestones and dates taken from the agreed workplan.
                2. Three to five success measures agreed with the sponsor, each with a definition and owner.
                3. Rating rules written down: what makes a milestone amber, what makes it red.
                4. The baseline page approved at the first meeting and recorded in the minutes.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A baseline page with milestones, success measures and written rating rules is approved and minuted at the first steering committee."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull baseline milestones and dates from the agreed workplan"
                - "Agree three to five success measures with the sponsor"
                - "Write the rules for amber and red ratings in one paragraph"
                - "Put the baseline page in the first pack for approval"
            - name: Ten-day preparation countdown
              description: |-
                ## Purpose
                Packs built in the last 48 hours are the ones with numbers that do not tie and decisions nobody pre-wired. A fixed countdown, with the storyline agreed on day ten, drafts on day seven, partner review on day five and papers out on day three, turns every meeting into a routine the team can run without heroics.

                ## Milestones
                1. A dated countdown with owners for storyline, drafts, partner review, pre-wiring and dispatch.
                2. The countdown started on day ten for each meeting.
                3. Partner review completed before pre-wiring starts.
                4. Papers dispatched on the agreed deadline for three meetings in a row.

                ## Notes
                Start from the **Operational checklist** template and keep one checklist per meeting so you can see where time was lost.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive packs follow the countdown and go out on the agreed paper deadline."
                cadence: cyclic
              tasks:
                - "Write the countdown with a date and owner for each step"
                - "Hold a storyline meeting ten working days before each committee @recurring(monthly:2)"
                - "Book the partner review slot five days before each meeting @recurring(monthly:7)"
                - "Note after each meeting which step ran late and why"
            - name: Pre-wiring round with each member
              description: |-
                ## Purpose
                No decision of consequence should be heard for the first time in the steering committee itself. A short conversation with each voting member in the week before, walking through the decision, hearing objections and adjusting the recommendation, turns the meeting into a confirmation and surfaces any blocker while there is still time to deal with it.

                ## Milestones
                1. A pre-wiring list for each meeting naming who speaks to which member.
                2. Every voting member briefed on each decision before the papers go out.
                3. Objections and conditions recorded and reflected in the final pages.
                4. No decision in three consecutive meetings blocked by an objection first raised in the room.

                ## Notes
                Fifteen minutes is usually enough. Ask what would stop them supporting the recommendation, not whether they support it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every voting member is pre-wired before each of three consecutive meetings, with objections logged and addressed in the pack."
                cadence: cyclic
              tasks:
                - "Split the voting members between the partner, manager and sponsor"
                - "Book fifteen-minute pre-wiring calls the week before each meeting @recurring(monthly:9)"
                - "Log each member's objections and conditions in one place"
                - "Change the decision pages to answer the objections you heard"
            - name: Weekly action log chase
              description: |-
                ## Purpose
                Actions agreed in a steering committee are the first thing to slip, because owners leave the room and go back to their day jobs. A weekly chase, a short note to each owner and an updated log, means the next meeting opens with closed actions rather than a page of overdue ones nobody wants to talk about.

                ## Milestones
                1. Every open action carrying an owner and a due date.
                2. A weekly note sent to each owner with an open action.
                3. Overdue actions flagged to the engagement manager before the pack is drafted.
                4. Fewer than one in five actions overdue at the start of each meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The action log is updated weekly and fewer than one in five actions are overdue at the start of each steering committee."
                cadence: rolling
              tasks:
                - "Check that every open action has one owner and a date"
                - "Send a short update request to each action owner @recurring(weekly:tue)"
                - "Flag overdue actions to the engagement manager before drafting starts"
            - name: Minutes issued within one working day
              description: |-
                ## Purpose
                Minutes that arrive a week later get disputed, because memories have moved and positions have hardened. Issuing a draft to the chair within one working day, and to members once the chair approves, fixes the decisions while everyone still remembers them the same way.

                ## Milestones
                1. A note-taker named for each meeting with a back-up.
                2. Draft minutes sent to the chair within one working day.
                3. Approved minutes circulated to members within three working days.
                4. Minutes from the previous meeting confirmed as the first agenda item each time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Draft minutes for three consecutive meetings reach the chair within one working day and members within three."
                cadence: rolling
              tasks:
                - "Name a note-taker and a back-up for the next meeting"
                - "Block two hours after each meeting to write the draft minutes @recurring(monthly:20)"
                - "Send the draft to the chair and chase approval the next day"
                - "Add confirmation of the last minutes as the first agenda item"
            - name: Running decision log across meetings
              description: |-
                ## Purpose
                Six months into an engagement, someone will ask when the committee agreed to drop a market or move a go-live date, and the answer will be buried in one of twelve sets of minutes. A single decision log, with the date, the decision, the rationale and any conditions, answers that in thirty seconds and stops decisions being quietly reopened.

                ## Milestones
                1. Every decision from past minutes copied into a single log with number and date.
                2. Each entry carrying the rationale and any conditions attached.
                3. Reversed or amended decisions linked to the original entry.
                4. The log reviewed each month and attached to the pack appendix.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A decision log covering every committee decision since the start is current within a week of each meeting."
                cadence: rolling
              tasks:
                - "Copy every decision from past minutes into one numbered log"
                - "Add the rationale and conditions to each entry"
                - "Update the log and link any reversals to the original decision @recurring(monthly:12)"
            - name: Honest status rating check
              description: |-
                ## Purpose
                Watermelon reporting, green outside and red inside, is the most common way steering committees lose trust in a consulting team. A short monthly check of every rating against the written rules, with the engagement manager asking what would have to happen for each green to be amber, keeps the status page believable when real bad news arrives.

                ## Milestones
                1. Each rating on the status page checked against the written amber and red rules.
                2. Any green item with a known open issue reconsidered with the workstream lead.
                3. Ratings changed before papers go out, not explained away in the room.
                4. A short record of rating changes and the reason kept for each meeting.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every status rating is checked against written rules before each pack goes out, with changes and reasons recorded."
                cadence: rolling
              tasks:
                - "Print the written amber and red rules next to the draft status page"
                - "Review each rating with its workstream lead before the pack locks @recurring(monthly:5)"
                - "Record every rating change and the reason in a short log"
            - name: Briefings for absent and substitute members
              description: |-
                ## Purpose
                Any member who missed the meeting can undo a decision a week later simply by saying they were never consulted. Calling every absent member within two days, and briefing substitutes before they attend so they can speak for their principal, closes the gap that lets settled decisions reopen.

                ## Milestones
                1. Absent members identified from the attendance record after each meeting.
                2. Each absent member called within two working days with the decisions and their actions.
                3. Substitutes briefed before the meeting on the decisions and their principal's mandate.
                4. Any objection from an absent member raised with the chair straight away.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every absent member is briefed within two working days of each meeting, with any objection passed to the chair."
                cadence: rolling
              tasks:
                - "Check the attendance record for absences after each meeting"
                - "Call each absent member with the decisions that affect them @recurring(monthly:16)"
                - "Ask substitutes before the meeting what their principal has authorised them to agree"
            - name: Member pulse after each meeting
              description: |-
                ## Purpose
                Members rarely tell the consulting team the meetings are too long or the pack too dense until the sponsor mentions it at the end. A two-question pulse after each meeting, asking whether the time was well used and what to change, surfaces that early and gives the team evidence when proposing changes to format.

                ## Milestones
                1. A two-question pulse sent to every member within a day of each meeting.
                2. Responses grouped into themes after three meetings.
                3. One change made to the format or pack in response to the themes.
                4. The change and its reason mentioned to members at the next meeting.

                ## Notes
                Start from the **Feedback themes** template. Ask by message or a quick call rather than a long survey; senior members answer two questions, not ten.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Pulse responses from at least half the members are grouped into themes and one format change is made within three meetings."
                cadence: rolling
              tasks:
                - "Write the two pulse questions and agree them with the engagement manager"
                - "Send the pulse to every member the day after each meeting @recurring(monthly:18)"
                - "Group the responses into themes after the third meeting"
            - name: Quarterly terms of reference review
              description: |-
                ## Purpose
                Engagements change phase, members change jobs and a committee set up for diagnosis is often wrong for implementation. Reviewing the terms of reference, membership and frequency each quarter keeps the committee matched to the work rather than to how things looked at kickoff.

                ## Milestones
                1. Membership checked against current roles and decision needs.
                2. Frequency and length checked against the coming phase.
                3. Proposed changes agreed with the sponsor before they reach the committee.
                4. An updated terms of reference approved and minuted with a new version number.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The terms of reference are reviewed each quarter, with any changes approved and minuted under a new version number."
                cadence: cyclic
              tasks:
                - "Compare the current membership list with who now holds each role"
                - "Review the terms of reference against the next phase of work @recurring(quarterly)"
                - "Agree proposed changes with the sponsor before tabling them"
            - name: Writing a decision request page
              description: |-
                ## Purpose
                Most steering committee pages describe work; very few ask for a decision in a way the room can answer. Practising one page format, with the decision in the title, two or three options, the recommendation, the cost of each and what happens if the committee does not decide, is the single most useful writing skill for this meeting.

                ## Milestones
                1. A page format with the decision as the title, options, recommendation, consequences and the question to the committee.
                2. Three past decision pages from the firm's library rewritten in that format.
                3. Each rewrite reviewed by a manager for clarity in under two minutes of reading.
                4. The format used for every decision in the next real pack.

                ## Notes
                End the page with the exact words you want minuted, such as: the committee approves option B with a budget of up to the stated amount.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three practice decision pages are reviewed by a manager and every decision in the next real pack uses the format."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find three past steering committee decision pages in the firm's library"
                - "Rewrite each with the decision as the title and two or three options"
                - "Add the consequence of no decision to each page"
                - "Ask a manager to read each page and say what they would decide"
            - name: Scripting the chair's run of show
              description: |-
                ## Purpose
                Client chairs are busy executives who often open the pack ten minutes before the meeting. A one-page run of show, with timings, the question to put for each decision and the words to close each item, lets the chair run a tight meeting without the consulting team appearing to run it for them.

                ## Milestones
                1. A one-page run of show with timings for each agenda item.
                2. For each decision, the question the chair should put and the proposed wording to minute.
                3. A short briefing with the chair or their chief of staff before the meeting.
                4. The run of show used in two meetings, with timings compared to actuals.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page run of show is briefed to the chair before two meetings, and actual timings are recorded against it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft a run of show with minutes allocated to each agenda item"
                - "Write the question the chair should put for each decision"
                - "Book fifteen minutes with the chair's chief of staff to walk through it"
                - "Record actual timings against the plan after the meeting"
            - name: Timeboxing a sixty-minute agenda
              description: |-
                ## Purpose
                Ninety minutes of agenda squeezed into an hour always loses the last item, and the last item is usually the decision. Learning to build the agenda backwards from the decisions, with status capped at ten minutes and a buffer at the end, keeps the meeting on its purpose.

                ## Milestones
                1. Agendas from the last three meetings compared with how long each item actually took.
                2. A standard split agreed, such as ten minutes status, forty minutes decisions, ten minutes buffer and close.
                3. Decisions placed early in the agenda for the next meeting.
                4. The next two meetings finished on time with every decision taken.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two consecutive meetings finish on time with every decision on the agenda taken."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Compare the last three agendas with actual time spent on each item"
                - "Propose a standard time split to the engagement manager"
                - "Move decisions ahead of status in the next agenda"
            - name: Handling off-agenda questions in the room
              description: |-
                ## Purpose
                Halfway through, a member raises a new issue, the room follows, and the decision you came for never happens. Practising a few ways to acknowledge, park and assign an off-agenda point, and agreeing with the chair in advance that you may suggest it, protects the agenda without making the member feel dismissed.

                ## Milestones
                1. Three phrases written and rehearsed for parking an off-agenda point politely.
                2. A parking list agreed with the chair as part of the run of show.
                3. Every parked item given an owner and a date in the minutes.
                4. Two meetings in which a parked item was handled without losing an agenda decision.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two meetings handle at least one off-agenda point through the parking list, with owners and dates in the minutes."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write three phrases for parking an off-agenda point"
                - "Agree with the chair that a parking list will be used"
                - "Rehearse the phrases with a colleague playing a difficult member"
            - name: Presenting a red status to the committee
              description: |-
                ## Purpose
                The first time a consulting team reports red, the room watches how they handle it more than the issue itself. Preparing a red item properly, with what happened, the impact in money or weeks, the options to recover and the decision needed, keeps the conversation on recovery rather than blame.

                ## Milestones
                1. A red-status page format with cause, impact, recovery options and the decision needed.
                2. The sponsor told before the papers go out, so the red is never a surprise.
                3. A rehearsal of the item with the partner, including the hardest likely question.
                4. The recovery decision minuted with an owner and a review date.

                ## Notes
                State the impact in the committee's own units, such as weeks of delay or budget, not in team effort. Never let the first mention of a red be in the meeting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A red item is presented with cause, impact and recovery options, the sponsor told in advance, and a recovery decision minuted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft the red page with cause, impact and two recovery options"
                - "Tell the sponsor about the red before the papers go out"
                - "Rehearse the item with the partner and list the hardest questions"
            - name: Steering discussion back to the decision
              description: |-
                ## Purpose
                Senior groups like to discuss, and good discussion still has to end in a decision someone can minute. Learning to summarise what you have heard, test for agreement and name the decision out loud, without taking the chair's role, is what separates a team that informs a committee from one that helps it decide.

                ## Milestones
                1. A short summary formula written: what I heard, what it means for the decision, the proposed wording.
                2. The formula practised in two internal team meetings.
                3. One real committee item in which the team summarised and the chair confirmed the decision.
                4. Feedback from the partner on the intervention recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The summary formula is used on at least one real committee item, leading to a minuted decision, with partner feedback recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a three-part summary formula on a card"
                - "Practise it in two internal team meetings"
                - "Ask the partner for feedback on how it landed in the committee"
            - name: Live note-taking for decisions and actions
              description: |-
                ## Purpose
                Note-takers who try to capture everything miss the moment the chair actually decides. Practising a note-taking layout that captures decisions, actions and owners first, and discussion only where it explains a decision, makes the draft minutes almost write themselves.

                ## Milestones
                1. A note-taking page with columns for decisions, actions, owners and dates.
                2. Notes from one internal meeting turned into minutes in under one hour.
                3. Notes from a real committee checked against the partner's recollection of decisions.
                4. Draft minutes from your notes accepted by the chair with no changes to decisions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Draft minutes written from your notes are accepted by the chair with no corrections to the recorded decisions."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Set up a note page with decision, action, owner and date columns"
                - "Take notes in one internal meeting and time how long the minutes take"
                - "Check your committee notes with the partner straight after the meeting"
            - name: Cutting the pack to twelve pages
              description: |-
                ## Purpose
                Packs creep from fifteen pages to forty as every workstream adds its own update, and members stop reading. Cutting the main pack to twelve pages or fewer, with everything else in a clearly marked appendix, tells the committee what the team thinks matters and gets the main pages read.

                ## Milestones
                1. The last pack audited page by page: decision, needed context or appendix.
                2. A page budget agreed per workstream for the main pack.
                3. The next pack at twelve main pages or fewer, with the rest in the appendix.
                4. Member pulse showing the shorter pack was read before the meeting.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two consecutive packs hold twelve main pages or fewer, with all other material in a labelled appendix."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Label every page of the last pack as decision, context or appendix"
                - "Agree a page budget for each workstream with their leads"
                - "Ask the agent to draft one-line summaries for pages moving to the appendix"
                - "Build the next pack within the twelve-page budget"
            - name: Moving from status updates to decision-led agendas
              description: |-
                ## Purpose
                Committees that spend most of their time on status have usually stopped being asked for decisions. Switching the agenda so that every item ends in a decision, a request for input or an explicit note that it is information only, with status moved to the pre-read, gives senior members a reason to attend.

                ## Milestones
                1. The last three agendas classified item by item as decision, input or information.
                2. A proposal to the sponsor to move information items into the pre-read.
                3. The next agenda listing each item's purpose next to its title.
                4. Two meetings in which at least two thirds of the time went to decisions or input.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two consecutive agendas mark each item's purpose and give at least two thirds of meeting time to decisions or input."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Classify each item in the last three agendas by purpose"
                - "Propose moving information items to the pre-read in a note to the sponsor"
                - "Add a decision, input or information label to every item on the next agenda"
            - name: In-person, hybrid or virtual format choice
              description: |-
                ## Purpose
                Hybrid meetings where six people sit in a boardroom and three dial in from airports tend to exclude the remote three from every decision. Choosing the format deliberately for each phase, and setting rules for the one you choose, saves the remote members from being an afterthought.

                ## Milestones
                1. The likely location of each member for the coming phase mapped.
                2. Formats compared for decision quality, travel cost and member preference.
                3. A format chosen with the chair and noted in the terms of reference.
                4. Rules written for the chosen format, such as cameras on or everyone on their own screen if anyone is remote.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A format for the coming phase is chosen with the chair, written into the terms of reference, with rules for running it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Map where each member is likely to be on meeting dates"
                - "Compare in-person, hybrid and virtual on decisions, cost and preference"
                - "Agree the format and its rules with the chair"
            - name: Setting meeting frequency for each phase
              description: |-
                ## Purpose
                Monthly meetings suit a diagnostic but can be too slow for a mobilisation and too frequent for a long implementation. Matching frequency to how many decisions each phase will produce, and to how fast they are needed, avoids both decisions waiting a month and meetings with nothing to decide.

                ## Milestones
                1. Expected decisions counted per phase from the decision rights matrix.
                2. Options set out: fortnightly, monthly, at phase gates only, or monthly with a decision call in between.
                3. A frequency agreed with the sponsor for each phase.
                4. The calendar adjusted and members told of the change.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A frequency for each phase is agreed with the sponsor, recorded, and reflected in the meeting calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the decisions expected in each phase"
                - "Set out three frequency options with their trade-offs"
                - "Agree the frequency with the sponsor and update the calendar"
            - name: Merging overlapping governance forums
              description: |-
                ## Purpose
                Large clients often run an executive committee, a programme board and a steering committee that all see the same pages, and decisions bounce between them. Mapping the forums and proposing which decisions belong where, or merging two of them, can save senior members hours a month and remove the decision ping-pong.

                ## Milestones
                1. Every forum that touches the engagement listed with members, frequency and decisions taken.
                2. Overlaps in membership and decisions shown on a single page.
                3. A proposal to merge, separate or re-sequence forums agreed with the sponsor.
                4. The agreed change recorded in each forum's terms of reference.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page forum map and an agreed proposal for merging or re-sequencing forums are recorded in each affected terms of reference."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every forum that sees engagement material and who sits on each"
                - "Show overlapping members and decisions on one page"
                - "Draft a proposal to merge or re-sequence forums for the sponsor"
            - name: One-page dashboard replacing workstream updates
              description: |-
                ## Purpose
                Five workstream leads each presenting five minutes of narrative status uses half the meeting and tells the committee little. A single dashboard page with milestones, measures, risks and budget across all workstreams, and only exceptions discussed, gives the committee the whole picture in two minutes.

                ## Milestones
                1. A dashboard layout with one row per workstream and columns for milestones, measures, risks and budget.
                2. Data owners named for each cell, with a submission deadline.
                3. The dashboard used in place of workstream slides in one meeting.
                4. Discussion limited to items rated amber or red.

                ## Notes
                Agree the layout with the sponsor first. Some chairs want to hear each lead speak, and a dashboard that the chair dislikes will not last.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page dashboard replaces workstream status slides for two consecutive meetings, with discussion limited to exceptions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the dashboard layout with one row per workstream"
                - "Name a data owner and deadline for each cell"
                - "Show the layout to the sponsor before using it"
                - "Replace workstream slides with the dashboard in the next pack"
            - name: Deferred decisions audit
              description: |-
                ## Purpose
                Deferring a decision once is prudent; deferring it three times usually means it is blocking the engagement. A monthly look at every item the committee has pushed back, with the reason and the cost of the delay, shows the sponsor where the real obstacles are and gives the team grounds to force a call.

                ## Milestones
                1. Every deferred item in the minutes listed with the number of times deferred.
                2. The reason and the cost of delay in weeks or money estimated for each.
                3. Items deferred twice or more raised with the sponsor before the next pack.
                4. Each long-deferred item either decided, withdrawn or given a firm date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No item stays deferred for more than two meetings without being raised with the sponsor and given a firm date or withdrawn."
                cadence: rolling
              tasks:
                - "List every deferred item in past minutes with a deferral count"
                - "Estimate the cost of delay for each deferred item"
                - "Review deferred items and raise repeats with the sponsor @recurring(monthly:22)"
                - "Send the sponsor a note on any item deferred twice @recurring(monthly:24)"
            - name: Mobilisation steering committee
              description: |-
                ## Purpose
                The first meeting sets the habits for every one after it. Approving the terms of reference, the baseline, the governance route and the first decisions in the mobilisation meeting, rather than spending it on introductions and a methodology tour, shows the committee from day one that this forum decides things.

                ## Milestones
                1. A pack with terms of reference, baseline, decision rights and two or three early decisions.
                2. Every voting member pre-wired on the terms of reference and early decisions.
                3. The terms of reference, baseline and early decisions approved and minuted.
                4. Minutes issued within one working day.

                ## Notes
                Keep the methodology to one page. Members care about what they will be asked to decide and when.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The mobilisation meeting approves the terms of reference, baseline and at least two early decisions, with minutes issued within one working day."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose two or three early decisions the committee can take in the first meeting"
                - "Build the mobilisation pack on the fixed skeleton"
                - "Pre-wire every voting member on the terms of reference"
                - "Issue the minutes within one working day of the meeting"
            - name: Interim findings steering committee
              description: |-
                ## Purpose
                The midpoint meeting is where early findings meet the committee's assumptions, and where a member whose area looks bad will push back hardest. Preparing it as a decision on direction, not a preview of the final answer, lets the committee steer the second half of the work while there is time to change course.

                ## Milestones
                1. Three to five emerging findings, each with its evidence and confidence level.
                2. A direction decision framed for the committee, such as which options to take forward.
                3. Members whose areas are affected briefed one to one before the papers go out.
                4. The direction decision minuted and the workplan adjusted within a week.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The interim meeting minutes a decision on which options go forward, and the workplan is updated within a week."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List the emerging findings with evidence and a confidence rating"
                - "Frame the direction decision the committee is asked to take"
                - "Brief members whose areas are affected before papers go out"
                - "Update the workplan within a week of the decision"
            - name: Go or no-go gate for a pilot
              description: |-
                ## Purpose
                Gate meetings fail when the criteria are argued about on the day. Agreeing the go criteria weeks before the pilot ends, reporting results against each one plainly and setting out what go, no-go and go with conditions would each mean, turns a tense meeting into a straightforward call.

                ## Milestones
                1. Gate criteria agreed with the committee before the pilot ends.
                2. Pilot results reported against each criterion with the evidence behind them.
                3. The consequences of go, no-go and conditional go set out on one page.
                4. The gate decision and any conditions minuted with owners.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The gate meeting records go, no-go or conditional go against criteria agreed in advance, with conditions owned and dated."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Agree the gate criteria with the committee before the pilot ends"
                - "Report pilot results against each criterion with evidence"
                - "Set out what each outcome would mean on one page"
                - "Minute the decision and any conditions with owners and dates"
            - name: Scope or budget change request
              description: |-
                ## Purpose
                Asking a steering committee for more time or money is where consulting teams most often lose credibility, usually by arriving with a surprise and no options. A change request with the reason, the options including doing less, the cost of each and the sponsor's support secured beforehand makes it a business decision rather than an admission.

                ## Milestones
                1. A change request page with reason, options, cost and impact on outcomes.
                2. A do-less option included alongside any extension.
                3. The sponsor and the client's finance member pre-wired and supportive.
                4. The decision minuted and the contract or workplan amended to match.

                ## Notes
                Agree the commercial side with your partner and the client's procurement owner outside the room. The committee approves the change; the contract still needs to follow.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A change request with at least two options including a do-less option is decided and minuted, and the workplan or contract is amended."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the reason for the change in two sentences"
                - "Set out at least two options including doing less"
                - "Pre-wire the sponsor and the finance member on the options"
                - "Ask the partner to align the contract change after the decision"
            - name: Extraordinary steering committee at short notice
              description: |-
                ## Purpose
                Failed go-lives, regulator letters and key suppliers pulling out can all need a decision before the next scheduled meeting. Knowing in advance how to call an extraordinary meeting, who must attend for quorum and what a two-page emergency paper looks like means the team responds in hours, not days.

                ## Milestones
                1. The terms of reference state who can call an extraordinary meeting and what quorum it needs.
                2. A two-page emergency paper format with the situation, options and decision needed.
                3. Mobile numbers or assistants' contacts for every voting member kept current.
                4. A dry run of the call-out with the chair's office.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The terms of reference cover extraordinary meetings, a two-page emergency paper format exists and member contacts are current."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a clause on extraordinary meetings and quorum to the terms of reference"
                - "Create a two-page emergency paper format"
                - "Collect current contacts for every voting member and their assistant"
            - name: Closing steering committee and governance handover
              description: |-
                ## Purpose
                Once the consulting team leaves, the committee either hands over cleanly to a client-owned forum or quietly stops, and open actions die with it. A closing meeting that confirms outcomes against the baseline, closes or transfers every action and names the client forum that takes over keeps the work alive after the engagement ends.

                ## Milestones
                1. Outcomes reported against the baseline and success measures.
                2. Every open action closed or transferred to a named client owner.
                3. A client-owned forum agreed to take over, with its own chair and dates.
                4. The decision log and action log handed to the new forum's secretary.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The closing meeting reports outcomes against the baseline and minutes the transfer of every open action to a named client forum."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Compare outcomes with the baseline and success measures"
                - "Close or transfer every open action to a client owner"
                - "Agree with the sponsor which client forum takes over"
                - "Hand the decision and action logs to that forum's secretary"
            - name: First steering committee as an analyst
              description: |-
                ## Purpose
                Analysts usually own the pages, the numbers and the minutes for a steering committee, and rarely speak in it. Treating the first one as a chance to learn how senior people read a pack, where questions land and which pages nobody turned to makes the second pack noticeably better.

                ## Milestones
                1. Every number on your pages tied to a source before the internal lock date.
                2. A one-page backup sheet with the figures most likely to be asked about.
                3. Notes taken on which pages drew questions and which were skipped.
                4. A short debrief with your manager on what to change for the next pack.

                ## Notes
                Sit where you can see the members' faces. The pages they flick past tell you as much as the questions they ask.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every number on your pages is tied to a source, and a debrief with your manager records three changes for the next pack."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Tie every number on your pages to its source file"
                - "Prepare a one-page backup of the figures most likely to be asked"
                - "Note which pages drew questions and which were skipped"
                - "Book a fifteen-minute debrief with your manager after the meeting"
                - "Spend fifteen minutes after each meeting noting one change for the next pack @recurring(monthly:27)"
            - name: Taking over a steering committee mid-engagement
              description: |-
                ## Purpose
                Managers rotating onto an engagement inherit a committee with history: decisions made, tensions between members and promises the previous manager made. Reading the record and meeting each member before chairing your first pack avoids repeating a settled argument or breaking an unwritten agreement.

                ## Milestones
                1. All past minutes, the decision log and the action log read.
                2. A handover call with the previous manager about members and open commitments.
                3. A short introductory call with each voting member before your first meeting.
                4. A list of inherited commitments confirmed with the sponsor.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Before your first meeting, every voting member has had an introductory call and inherited commitments are confirmed with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read all past minutes and the decision and action logs"
                - "Ask the agent to summarise open actions and repeated debates from the minutes"
                - "Hold a handover call with the previous manager about each member"
                - "Book short introductions with each voting member"
            - name: Light steering committee for a small client
              description: |-
                ## Purpose
                An independent consultant working with a mid-sized business often has no PMO, no chief of staff and an owner who chairs everything. A lighter version, five members, a six-page pack and a one-page minutes note you write yourself, still gives you the decisions and the record without burying a small client in process.

                ## Milestones
                1. Membership kept to five or fewer with the owner or managing director as chair.
                2. A six-page pack format covering decisions, status, risks and next steps.
                3. A one-page minutes note sent the same day.
                4. Three meetings held at the agreed frequency without a missed decision.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Three meetings with five or fewer members are held using a six-page pack, each with same-day minutes."
                cadence: rolling
              tasks:
                - "Agree a membership of five or fewer with the owner"
                - "Build a six-page pack format from the fixed skeleton"
                - "Send a one-page minutes note on the day of each meeting"
                - "Hold a short monthly decision check-in with the owner @recurring(monthly:11)"
            - name: Committee chaired by the chief executive
              description: |-
                ## Purpose
                When the chief executive chairs, members defer, pre-wiring matters even more and the pack is read in the five minutes before. Preparing for that room means a shorter pack, the chief executive's chief of staff as your main contact and a clear sense of which decisions they want brought to them and which they want settled below.

                ## Milestones
                1. A briefing call with the chief executive's chief of staff on preferences and sensitivities.
                2. The main pack cut to the decisions the chief executive wants to take.
                3. Pre-wiring done with direct reports before the chief executive sees the pack.
                4. Feedback from the chief of staff after the meeting recorded.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The pack is agreed with the chief of staff, direct reports are pre-wired, and post-meeting feedback is recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the chief of staff how the chief executive likes to read papers"
                - "Cut the pack to the decisions the chief executive wants"
                - "Pre-wire each direct report before the chief executive sees the pack"
                - "Ask the chief of staff for feedback the day after"
            - name: Formal project board with published papers
              description: |-
                ## Purpose
                Some clients, especially regulated businesses and public bodies, run steering committees as formal boards with numbered papers, declared interests and minutes that may be audited or released. Running to that standard means papers drafted for a reader who was not in the room and minutes that would stand up to scrutiny years later.

                ## Milestones
                1. The client's governance secretary consulted on paper formats, numbering and retention rules.
                2. Each paper with a cover sheet stating purpose, decision sought and any conflicts.
                3. A declarations of interest item at the start of every meeting.
                4. Minutes approved through the secretary and filed under the client's retention rules.

                ## Notes
                Start from the **Board meeting** template. Write every paper as if it will be read by an auditor who knows nothing about the engagement.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every paper carries a cover sheet, declarations are minuted and approved minutes are filed under the client's retention rules."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Meet the governance secretary about paper formats and retention"
                - "Draft a paper cover sheet with purpose, decision sought and conflicts"
                - "Add declarations of interest as the first agenda item"
                - "File approved minutes in line with the client's retention rules"
            - name: Committee shared with other advisory firms
              description: |-
                ## Purpose
                On large programmes a strategy firm, a systems integrator and an audit firm may all report to the same committee, each wanting its own pages and its own credit. Agreeing one pack, one secretary and clear ownership of each section stops the meeting turning into three pitches and keeps the client's decisions at the centre.

                ## Milestones
                1. A single pack owner and secretary agreed with the client and the other firms.
                2. Section ownership written down for each firm.
                3. A joint preparation call before every paper deadline.
                4. Joint risks and dependencies shown on one shared page.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "One pack with named section owners from each firm and a shared risks page is used for two consecutive meetings."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Propose to the client a single pack owner and secretary"
                - "Write down which firm owns each section"
                - "Set up a joint preparation call before each paper deadline"
            - name: Contested decision position map
              description: |-
                ## Purpose
                When members disagree, pre-wiring each in turn is not enough; you need to know who can move, what each needs and who influences whom. A position map for a contested decision, built from the pre-wiring calls and reviewed with the partner and sponsor, shows where the decision can land and what concession unlocks it.

                ## Milestones
                1. Each voting member's position on the decision recorded as support, conditional, neutral or opposed.
                2. What each conditional or opposed member needs written in a sentence.
                3. Influence links between members noted from the sponsor's knowledge.
                4. A plan agreed with the partner and sponsor for reaching a decision.

                ## Notes
                Keep the map within the core team. A written record of who opposes what is sensitive if it leaves the room.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A position map covering every voting member and a plan to reach the decision are agreed with the partner and sponsor before papers go out."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record each member's position on the contested decision"
                - "Write what each opposed or conditional member needs to move"
                - "Review the map and a plan with the partner and sponsor"
            - name: Working with a divided committee
              description: |-
                ## Purpose
                Some committees split into camps, often along business unit lines, and stop deciding anything that favours one side. Recognising the pattern early, separating facts from positions, offering options that share the cost and agreeing with the chair how ties are broken can keep the engagement moving without the consulting team taking sides.

                ## Milestones
                1. The pattern of split decisions identified from the minutes and decision log.
                2. A neutral fact base for the disputed issue agreed with both camps before the meeting.
                3. At least one option that shares cost or benefit across the camps.
                4. A tie-break rule agreed with the chair and recorded in the terms of reference.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A disputed decision is taken on an agreed fact base, with a tie-break rule recorded in the terms of reference."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Mark split or deferred decisions in the decision log"
                - "Agree the fact base for the disputed issue with both camps"
                - "Design an option that shares the cost across the camps"
                - "Agree a tie-break rule with the chair"
            - name: Programme steering with workstream sub-committees
              description: |-
                ## Purpose
                Programmes with six workstreams cannot bring every decision to one committee, so they need sub-committees with delegated authority and a clear route upward. Designing that tier, with delegation limits, timing so sub-committees meet before the main one and a single summary page each, keeps the top committee on the decisions only it can take.

                ## Milestones
                1. Sub-committees defined with chairs, members and delegated decision limits.
                2. A calendar placing each sub-committee one week before the main committee.
                3. A one-page summary format for each sub-committee into the main pack.
                4. Two cycles run with no decision bypassing the agreed route.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Sub-committees with delegated limits run two cycles a week before the main committee, each feeding a one-page summary."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Define each sub-committee's chair, members and delegated limits"
                - "Schedule sub-committees one week before the main committee"
                - "Create the one-page summary format for the main pack"
                - "Check the decision log after two cycles for decisions that skipped the route"
            - name: Committee spread across time zones and languages
              description: |-
                ## Purpose
                Regional committees with members in Port of Spain, London and Singapore have no comfortable hour, and members reading in a second language need papers earlier and plainer. Planning for both, a rotating slot, earlier papers, plain-language pages and a glossary, keeps distant members as engaged as those in the head office.

                ## Milestones
                1. Members' time zones mapped and a slot or rotation agreed with the chair.
                2. Papers sent one extra working day earlier than the standard deadline.
                3. Pages checked for idioms, acronyms and long sentences before dispatch.
                4. A glossary of programme terms attached to the pack appendix.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Papers go out one day earlier than standard with a glossary, and a meeting slot or rotation is agreed for all time zones."
                cadence: rolling
              tasks:
                - "Map each member's time zone and working hours"
                - "Agree a slot or rotation with the chair"
                - "Build a glossary of programme terms for the appendix"
                - "Check each pack for idioms and unexplained acronyms @recurring(monthly:25)"
            - name: Governance health review for a programme
              description: |-
                ## Purpose
                Experienced managers are sometimes asked to review a client's steering arrangements when a programme is struggling. A structured review of terms of reference, decision speed, attendance, action closure and pack quality, scored against simple measures, gives the sponsor an evidence-based picture of what to fix.

                ## Milestones
                1. Measures defined: days from issue to decision, attendance, action closure rate and pack length.
                2. Six months of minutes, packs and logs scored against the measures.
                3. Short interviews with three to five members on what works and what does not.
                4. A findings page with three to five recommendations presented to the sponsor.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A governance review scoring six months of meetings against at least four measures is presented to the sponsor with recommendations."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Define four measures of steering committee health"
                - "Score six months of minutes and packs against the measures"
                - "Interview three to five members about what works"
                - "Present three to five recommendations to the sponsor"
            - name: Personal steering committee playbook
              description: |-
                ## Purpose
                After a few engagements you will have a countdown, a deck skeleton, decision page formats and lessons on what goes wrong, scattered across old folders. Pulling them into one playbook you can take to every new engagement makes your first committee on the next project faster and lets you coach juniors with something concrete.

                ## Milestones
                1. Templates for terms of reference, deck skeleton, decision page, minutes and countdown collected in one folder.
                2. Client and confidential details removed from every template.
                3. A one-page list of lessons from past committees.
                4. The playbook shared with at least one junior colleague and their feedback noted.

                ## Notes
                Strip client names, figures and logos before anything leaves the engagement folder. Your firm's knowledge rules decide what you may keep.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A playbook folder holds five cleaned templates and a lessons page, and has been used by at least one junior colleague."
                cadence: rolling
              tasks:
                - "Collect your best terms of reference, skeleton and decision page"
                - "Remove client names, figures and logos from every template"
                - "Write one page of lessons from past committees"
                - "Add new lessons from each engagement's closing meeting @recurring(quarterly)"
---

# Steering Committee Meetings

A steering committee is where an engagement gets its decisions, its money and its cover, and most of what happens in the room is settled in the ten days before it. This area starts with foundations (terms of reference, membership, decision rights, a fixed deck skeleton, paper deadlines and a minutes format), then the operating cycle of preparation, pre-wiring, minutes, action chasing and honest status, the skills of writing decision pages and running a tight agenda, decisions about frequency, format and forum overlap, the set-piece meetings from mobilisation to close, variants for analysts, incoming managers, independents and formal project boards, and finally specialist work such as divided committees and multi-workstream programmes.

The rhythm follows the meeting: a preparation countdown, a pre-wiring round and a member pulse each cycle, a weekly action chase, monthly checks of the decision log, status ratings and deferred items, and a quarterly look at the terms of reference. The Meeting notes, Operational checklist, Feedback themes and Board meeting templates pair with the minutes, the preparation countdown, the post-meeting pulse and the formal project board. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
