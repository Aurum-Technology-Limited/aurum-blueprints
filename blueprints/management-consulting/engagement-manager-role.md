---
id: management-consulting.engagement-manager-role
name: Engagement Manager Role
description: "Run engagements as the manager: an agreed split of work with your partner, a plan and budget you can defend, a weekly operating rhythm, a team that grows, and top-down problem solving that keeps the answer moving."
category: business
version: 1.0.0
tags: [management-consulting, engagement-manager-role, knowledge-worker, manager, engagement-management, team-management, engagement-economics, partner-relationship]
author: Aurum Technology
starter_structure:
  templates:
    - development-plan
    - risk-register
    - meeting-notes
    - metrics-log
    - one-on-one
    - feedback-themes
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Engagement Manager Role
          description: "Running engagements as a manager: planning the work, managing the team, the client relationship, top-level problem solving and the partner relationship."
          projects:
            - name: Role split agreement with your engagement partner
              description: |-
                ## Purpose
                Partners differ enormously in how much they want to touch: some write the storyline themselves, others appear for steering committees only. Agreeing in the first week who owns the client relationship at each level, who reviews what before it goes out and which decisions you can take alone stops the two of you either duplicating work or each assuming the other has it.

                ## Milestones
                1. A written split of ownership covering client relationships, storyline, team staffing, budget and quality sign-off.
                2. A list of decisions you take alone, decisions you take and report, and decisions that need the partner first.
                3. The partner's preferred way to receive updates, drafts and bad news recorded.
                4. The agreement confirmed by the partner in writing and revisited once at the midpoint.

                ## Notes
                Bring a draft rather than an open question. Most partners will correct a list in five minutes but will not write one.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page role split between you and the partner, covering five ownership areas and three tiers of decision rights, is confirmed by the partner in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page ownership split between you and the partner"
                - "Sort twenty likely decisions into alone, report after and partner first"
                - "Book forty minutes with the partner to walk through the draft"
                - "Send the agreed version back as a short confirmation note"
            - name: Engagement economics baseline
              description: |-
                ## Purpose
                Every engagement has a fee, a team cost and an expense budget, and the manager is usually the person who first notices when they stop adding up. Building a baseline of planned team weeks, expected expenses and the margin the firm expects lets you see in week three, not week ten, whether the engagement is on track to make money.

                ## Milestones
                1. Planned weeks for every team member, by week, entered against the agreed fee.
                2. Expected travel, expert call and research costs estimated with the assumptions written down.
                3. The firm's target margin or realisation figure for this engagement confirmed with the partner or finance.
                4. A single tracker showing planned versus actual cost that updates from the time system each week.

                ## Notes
                Ask finance which cost rates to use. Managers who use list rates instead of internal cost rates often find their margin looks better than it is.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A budget tracker with planned team weeks, expenses and target margin exists by the end of week two and has been checked by the partner or the finance team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Request the signed fee, payment schedule and cost rates from finance"
                - "Enter planned weeks for each team member against the fee"
                - "Estimate travel and expert costs and note each assumption"
                - "Review the baseline margin with the partner before the first invoice"
            - name: Week-by-week engagement plan to the final readout
              description: |-
                ## Purpose
                Kickoff documents tend to stop at the first fortnight, and by week four nobody can say what has to be true by week eight. A single page laying out every week to the final readout, with the client meetings, interim deliverables and the point at which each workstream must have its answer, is what lets you spot slippage while it can still be absorbed.

                ## Milestones
                1. Every week to the final readout shown on one page, with fixed client meetings marked.
                2. For each workstream, the week by which its first answer and its final answer are due.
                3. Interim deliverables and partner review points placed with at least two working days of buffer before each.
                4. Holidays, client blackout dates and team leave entered.
                5. The plan shared with the team and the client project lead, with a named version date.

                ## Notes
                Work backwards from the final readout. A plan built forwards from kickoff almost always leaves the last two weeks overloaded.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page plan covering every week to the final readout, with workstream answer dates and buffers, is shared with the team and client project lead by day fourteen."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the final readout date at the right edge of a blank week grid"
                - "Place fixed client meetings and partner reviews on the grid"
                - "Set first-answer and final-answer weeks for each workstream"
                - "Add holidays, leave and two-day buffers before each review"
                - "Share version one with the team and client project lead"
            - name: Team charter on hours, availability and norms
              description: |-
                ## Purpose
                Unspoken norms on late nights, weekend messages and reply times are where team resentment starts, and the manager sets them whether they mean to or not. A short charter agreed with the team in the first days, covering protected evenings, how urgent requests are flagged and when the team stops for the week, makes the hours visible and gives people permission to protect their time.

                ## Milestones
                1. One protected evening per person per week agreed and recorded.
                2. Rules on weekend work, response times and how to flag something genuinely urgent written down.
                3. A daily start and end anchor agreed, such as a fixed morning huddle and a latest review time.
                4. The charter read back to the team after three weeks and changed where it has not held.

                ## Notes
                The charter only works if you follow it yourself. A manager who sends drafts at midnight teaches the team that midnight is the real deadline, whatever the charter says.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written team charter with protected evenings, weekend rules and urgency flags is agreed by every team member by day ten and reviewed at week three."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each team member which evening matters most to them"
                - "Draft weekend, response time and urgent flag rules on one page"
                - "Agree the charter together in a twenty-minute team session"
                - "Set a week-three point to read the charter back and adjust it"
            - name: Development goals for each team member
              description: |-
                ## Purpose
                An eight-week engagement is long enough for an analyst to learn to run a client interview or own a model, but only if someone decides that on day one. Agreeing one or two specific development goals with each person, and designing their work so they get the chance, turns the engagement into the evidence their next review will need.

                ## Milestones
                1. One or two development goals agreed with each team member, written as something they will have done.
                2. Each goal linked to a specific piece of work on this engagement.
                3. A midpoint check on each goal held and the outcome noted.
                4. Evidence against each goal ready for the end-of-engagement evaluation.

                ## Notes
                Start from the **Development plan** template. Ask what their last reviewer said they should work on before proposing goals of your own.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every team member has one or two written development goals tied to named engagement work, checked at the midpoint and evidenced at the end."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask each person for the feedback themes from their last review"
                - "Agree one or two goals per person framed as things they will have done"
                - "Match each goal to a concrete task in the engagement plan"
                - "Note the midpoint check for each goal in your one-to-one notes"
            - name: Client working team map and capacity
              description: |-
                ## Purpose
                Client staff assigned to the engagement usually still have their full day jobs, and a plan that assumes their time is a plan that slips. Mapping who on the client side works with each workstream, how many hours a week they really have and who approves their data releases shows where the plan depends on people who cannot deliver.

                ## Milestones
                1. Every client team member listed with their role, workstream and realistic weekly hours.
                2. The person who approves data and access requests named for each client function.
                3. Dependencies in the plan on specific client people marked.
                4. Two or three capacity risks raised with the client project lead with a proposed fix.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A client team map with hours, approvers and plan dependencies is complete, and the top capacity risks have been discussed with the client project lead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every named client team member and their workstream"
                - "Ask the client project lead how many hours each person truly has"
                - "Mark plan tasks that depend on one client person"
                - "Raise the two biggest capacity gaps with the client project lead"
            - name: Engagement operating calendar
              description: |-
                ## Purpose
                Without a fixed weekly rhythm the manager spends the week in reactive calls and reviews happen whenever someone remembers. Placing the recurring sessions, team problem solving, partner check-in, client check-in, one-to-ones and the Friday budget look, on the calendar for the whole engagement gives everyone predictable moments to bring work and questions.

                ## Milestones
                1. Recurring slots for team problem solving, partner check-in, client check-in, one-to-ones and budget review booked to the end date.
                2. At least two half-days a week kept free of meetings for your own thinking.
                3. The rhythm shared with the team and client project lead on one page.
                4. The calendar adjusted once after the first fortnight based on what did not work.

                ## Notes
                Book the slots for the full engagement in week one. Recurring meetings added later always lose to meetings already in place.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every recurring engagement meeting is in the calendar to the end date, with two protected thinking half-days per week, within the first seven days."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose fixed days for each recurring session in the weekly rhythm"
                - "Book all recurring slots through to the final readout"
                - "Block two half-days a week for your own thinking time"
                - "Send the team and client lead a one-page rhythm summary"
            - name: Engagement risk register
              description: |-
                ## Purpose
                Most engagements that go badly showed warning signs by week three: a data set that never arrived, a stakeholder who skipped two meetings, a workstream with no clear owner. Keeping a short register of the eight to twelve risks that could damage the answer, the timeline or the relationship, each with an owner and a next step, turns vague unease into specific action.

                ## Milestones
                1. A register of eight to twelve risks covering data, people, scope, timeline and client politics.
                2. An owner, likelihood, impact and next step recorded for each risk.
                3. The top three risks shared with the partner each week.
                4. Closed risks kept in the register with how they were resolved.

                ## Notes
                Start from the **Risk register** template. Write each risk as a cause and an effect, such as "Finance data late, so the cost baseline slips past week four".
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register of at least eight risks with owners and next steps is in use by day fourteen and reviewed every week to the end of the engagement."
                cadence: rolling
              tasks:
                - "Ask each workstream lead for the two risks that worry them most"
                - "Write each risk as a cause and an effect with an owner"
                - "Update risk ratings, owners and next steps @recurring(weekly:wed)"
                - "Send the top three risks to the partner before the weekly check-in"
            - name: Your own time budget as a manager
              description: |-
                ## Purpose
                New managers often discover by week four that they spend most of their week in meetings and redoing slides, with no time left for the thinking only they can do. Deciding how a sixty-hour week should split between problem solving, team, client, partner and administration, then checking the calendar against it, shows where your time is leaking.

                ## Milestones
                1. A target split of your week across problem solving, team, client, partner and administration.
                2. Two weeks of actual time recorded against the same categories.
                3. The three biggest gaps between target and actual named.
                4. One change made for each gap, such as delegating a recurring task or cutting a meeting.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written target split of your week is compared against two weeks of recorded time, with three gaps named and a change made for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your target split of a working week across five categories"
                - "Tag two weeks of calendar entries against the categories"
                - "Name the three largest gaps and one fix for each"
                - "Check your calendar against your time budget @recurring(monthly:5)"
            - name: Team problem-solving sessions three times a week
              description: |-
                ## Purpose
                The manager's most valuable hour is the one spent at a whiteboard with the team deciding what the latest analysis means and what to do next. Three short sessions a week, each starting from the open questions rather than a status round, keep the team working on the questions that matter and stop analysts disappearing into analysis nobody asked for.

                ## Milestones
                1. Three fixed thirty to forty-five minute sessions a week in the calendar.
                2. Each session opening with the two or three open questions, not a status round.
                3. Decisions and next analyses from each session captured in a shared note within an hour.
                4. Team members bringing their own questions to the session without being asked.

                ## Notes
                Keep status out of these sessions. If people need to report progress, use a written tracker the night before.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Problem-solving sessions run three times a week for the whole engagement, each with a written list of decisions and next analyses shared within an hour."
                cadence: rolling
              tasks:
                - "Write the three open questions on the board before each session"
                - "Run a forty-minute problem-solving session with the team @recurring(weekly:mon,wed,fri)"
                - "Post the decisions and next analyses in the team channel within an hour"
                - "Ask a different team member to lead one question each week"
            - name: Weekly partner check-in
              description: |-
                ## Purpose
                Partners who hear nothing for a week tend to arrive with surprises of their own, often a new idea from a conversation with the client's chief executive. A fixed thirty-minute check-in each week, with a short written agenda sent the day before, keeps the partner close to the answer, gives you a place to ask for help and avoids the late rewrite.

                ## Milestones
                1. A weekly slot that the partner protects, with a written agenda sent the day before.
                2. Each check-in covering the emerging answer, the top risks, budget and asks for help.
                3. Notes and the partner's decisions recorded and sent back the same day.
                4. Partner surprises in front of the client reduced to none in the second half of the engagement.

                ## Notes
                Start from the **Meeting notes** template. Put your asks of the partner first on the agenda, not last, or they will run out of time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A partner check-in with a pre-sent agenda and same-day notes happens every week of the engagement, with no more than one missed week."
                cadence: rolling
              tasks:
                - "Send a five-line agenda with your asks first the day before"
                - "Hold the weekly check-in with the partner @recurring(weekly:thu)"
                - "Send notes and the partner's decisions back the same afternoon"
                - "Log any request from the partner that changes scope or plan"
            - name: Friday budget and burn review
              description: |-
                ## Purpose
                Engagement budgets rarely break in one moment; they erode through an extra analyst week here and an unplanned trip there. Checking actual time and expenses against plan every Friday, and writing one sentence on why any line moved, lets you have the conversation with the partner while there are still options.

                ## Milestones
                1. Actual hours and expenses compared to plan each Friday.
                2. Any variance over a threshold you agreed with the partner explained in a sentence.
                3. A forecast to completion updated each week.
                4. No budget overrun reaching the partner for the first time at month end.

                ## Notes
                Start from the **Metrics log** template. Make sure the team enters time by Friday lunchtime, or the review is always a week late.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Budget versus actual and a forecast to completion are updated every Friday, with every variance over the agreed threshold explained in writing."
                cadence: rolling
              tasks:
                - "Agree a variance threshold with the partner that triggers a note"
                - "Remind the team to submit time by Friday lunchtime"
                - "Compare actual hours and expenses to plan and update the forecast @recurring(weekly:fri)"
                - "Write one sentence on each variance over the threshold"
            - name: Weekly one-to-ones with each team member
              description: |-
                ## Purpose
                Team members on a busy engagement rarely raise a problem in a team meeting, whether it is a struggling relationship with a client counterpart or a family issue at home. A short weekly one-to-one with each person, run on their agenda first, is where small problems surface before they become a resignation or a missed deliverable.

                ## Milestones
                1. A weekly fifteen to twenty-five minute slot with every team member.
                2. The team member's agenda taken first in each conversation.
                3. Progress on their development goals touched every second week.
                4. Notes kept privately with any commitments you made followed up within a week.

                ## Notes
                Start from the **1:1** template. Move the slot rather than cancel it when the week is busy; cancelling tells people they come second.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every team member has a one-to-one at least weekly for the engagement, with notes kept and every commitment you made closed within a week."
                cadence: rolling
              tasks:
                - "Book a recurring slot with each team member for the engagement"
                - "Hold one-to-ones with each team member @recurring(weekly:tue)"
                - "Ask what would make next week better before giving your own topics"
                - "Close any promise you made in a one-to-one within seven days"
            - name: Weekly cross-workstream answer review
              description: |-
                ## Purpose
                Workstream leads naturally optimise their own piece, and nobody but the manager is looking at whether the pieces still add up to one answer. Each Wednesday, taking the latest findings from every workstream and asking whether the overall recommendation has changed, what now contradicts what, and which analysis would most change the answer, keeps the engagement converging rather than spreading.

                ## Milestones
                1. A one-paragraph statement of the overall answer as it stands, updated each Wednesday.
                2. Contradictions between workstreams listed and assigned to someone to resolve.
                3. The one analysis that would most change the answer chosen for the following week.
                4. Changes in the answer recorded with the date and the evidence that caused them.

                ## Notes
                If the answer has not moved for three weeks, either you have found it or the team is doing work that does not test it. Ask which.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated paragraph stating the overall answer, with contradictions and the next decisive analysis, is updated every Wednesday of the engagement."
                cadence: rolling
              tasks:
                - "Collect a three-line findings note from every workstream lead"
                - "Rewrite the overall answer paragraph and list contradictions @recurring(weekly:wed)"
                - "Choose the single analysis most likely to change the answer"
                - "Keep a dated log of each change to the overall answer"
            - name: Team hours and wellbeing pulse
              description: |-
                ## Purpose
                By the time someone tells you they are exhausted, they have usually been exhausted for weeks. Looking at logged hours every week and running a two-question anonymous pulse each month gives you early, honest signals on sustainability, and gives the team evidence that you notice.

                ## Milestones
                1. Each person's weekly hours reviewed against the team charter.
                2. A two-question anonymous pulse on workload and support run monthly.
                3. Any person above the agreed hours for two weeks running discussed in their one-to-one.
                4. One visible change made after each pulse and told back to the team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly hours are checked for every team member and a monthly anonymous pulse runs, with at least one change reported back to the team after each pulse."
                cadence: rolling
              tasks:
                - "Set up a two-question anonymous form on workload and support"
                - "Scan the team's logged hours against the charter @recurring(weekly:sat)"
                - "Send the anonymous workload pulse to the team @recurring(monthly:12)"
                - "Tell the team one change you are making after each pulse"
            - name: Client project lead weekly check-in
              description: |-
                ## Purpose
                Your client project lead is the person who unlocks data, books executives and warns you when the mood changes, and they are usually not the sponsor. A thirty-minute check-in each week on progress, upcoming asks of their organisation and anything they are hearing internally keeps this working relationship strong and makes the sponsor conversations easier.

                ## Milestones
                1. A weekly thirty-minute slot with the client project lead for the engagement.
                2. Upcoming asks of the client organisation sent two days before each check-in.
                3. Internal signals from the client lead recorded and fed into the risk register.
                4. The client lead previewing key findings before they reach senior stakeholders.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly check-in with the client project lead happens for the whole engagement, with asks sent in advance and signals logged in the risk register."
                cadence: rolling
              tasks:
                - "Agree a fixed weekly slot with the client project lead"
                - "Send the coming week's asks of their organisation in advance"
                - "Hold the weekly check-in with the client project lead @recurring(weekly:tue)"
                - "Add anything they hear internally to the risk register"
            - name: Scope change log
              description: |-
                ## Purpose
                Scope creep on consulting engagements almost never arrives as a formal request; it arrives as a helpful question in a corridor that becomes two analyst weeks. Logging every request outside the agreed scope, with its estimated effort and what was agreed, gives you and the partner the evidence for a change order or a trade-off conversation.

                ## Milestones
                1. Every out-of-scope request logged with who asked, when and the estimated effort.
                2. Each request marked as absorbed, traded for something else, deferred or priced.
                3. The cumulative effort of absorbed requests visible to the partner.
                4. Any request above an agreed size discussed with the partner before work starts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A scope change log records every out-of-scope request with effort and outcome, and its total absorbed effort is reviewed with the partner each week."
                cadence: rolling
              tasks:
                - "Create a log with requester, date, effort and outcome columns"
                - "Ask the team to tell you about any new client request the same day"
                - "Review new requests and their estimated effort @recurring(weekly:mon)"
                - "Show the partner the total effort absorbed so far"
            - name: Monthly engagement health review
              description: |-
                ## Purpose
                Week to week the manager sees trees; once a month it is worth stepping back and asking whether the engagement as a whole is healthy. A structured review with the partner covering client satisfaction, the answer, team morale, budget and the likelihood of follow-on interest catches the slow problems that weekly check-ins miss.

                ## Milestones
                1. A one-page health score covering client, answer, team, budget and relationship, rated red, amber or green.
                2. A written reason for every amber or red rating.
                3. One action per amber or red area agreed with the partner.
                4. Ratings compared month on month so trends are visible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A five-dimension health rating with reasons and actions is completed with the partner every month, with ratings tracked across months."
                cadence: rolling
              tasks:
                - "Draft a one-page health score with five rated dimensions"
                - "Rate the engagement and write reasons for each amber or red"
                - "Review the health score with the partner @recurring(monthly:20)"
                - "Compare this month's ratings with last month's"
            - name: Friday look-ahead for the next week
              description: |-
                ## Purpose
                Teams that start Monday not knowing what the week is for lose half a day finding out. Spending forty-five minutes each Friday writing what each person must deliver next week, which client meetings are coming and where the plan is tight lets the team start Monday working, and lets you take the weekend off.

                ## Milestones
                1. A weekly note naming each person's deliverables for the coming week.
                2. Next week's client meetings and their preparation owners listed.
                3. Tight points in the plan flagged with a fallback.
                4. The note sent before the team leaves on Friday.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A look-ahead note listing each person's deliverables and next week's client meetings is sent to the team before close of business every Friday."
                cadence: rolling
              tasks:
                - "Draft a look-ahead format with people, deliverables, meetings and risks"
                - "Write and send the next-week look-ahead to the team @recurring(weekly:fri)"
                - "Mark any day where two deliverables collide"
                - "Ask the agent to draft the look-ahead from your week's notes"
            - name: Monthly feedback round with the team
              description: |-
                ## Purpose
                Feedback saved for the end-of-engagement evaluation arrives too late to act on and too vague to be fair. A monthly round where you give each person two specific pieces of feedback and ask them for one about you builds the record the evaluation needs and shows the team that feedback goes both ways.

                ## Milestones
                1. Two specific pieces of feedback, one strength and one to work on, given to each person monthly.
                2. One piece of feedback about your own management asked for from each person.
                3. Themes across the team recorded after each round.
                4. One change in your own behaviour made and named to the team after each round.

                ## Notes
                Start from the **Feedback themes** template. Describe what you saw and its effect, not the person's character.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every team member receives two specific pieces of written feedback each month, and you record at least one piece of feedback about your own management from each."
                cadence: rolling
              tasks:
                - "Note specific moments of strong and weak work as they happen"
                - "Give each person a strength and an area to work on @recurring(monthly:26)"
                - "Ask each person for one thing you should do differently"
                - "Record the themes and the change you will make"
            - name: Briefing analysts with a five-part task brief
              description: |-
                ## Purpose
                A large share of rework on engagements traces back to a two-line request sent late at night. Learning to brief every substantial task with the question, the expected answer shape, the data to use, the time it should take and when you will check in halves the rework and teaches analysts to think about the output before they start.

                ## Milestones
                1. A five-part brief format written down: question, answer shape, sources, time box and check-in.
                2. Ten tasks briefed in this format over two weeks.
                3. A sketch of the expected exhibit attached to at least half the briefs.
                4. Rework on briefed tasks compared with your usual briefing and the difference noted.

                ## Notes
                The time box is the part most managers leave out, and it is the one that stops a two-hour question taking two days.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten tasks have been briefed with all five parts, and you have recorded how much rework they needed compared with tasks briefed the old way."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the five-part brief format as a short saved note"
                - "Brief the next substantial task in all five parts"
                - "Sketch the expected exhibit on paper and attach it to the brief"
                - "Count the rework on ten briefed tasks after two weeks"
            - name: Reviewing team work in twenty minutes
              description: |-
                ## Purpose
                Managers who review a deck page by page, fixing fonts, run out of time before they reach the question of whether the pages say anything true. A review method that starts with the titles read in sequence, then the logic, then the evidence for the riskiest claims, and only then the formatting, lets you review more work in less time and gives sharper feedback.

                ## Milestones
                1. A written review order: titles in sequence, logic, evidence for risky claims, then polish.
                2. Five reviews done in twenty minutes or less using the order.
                3. Feedback given as the three most important changes before any detailed comments.
                4. Formatting fixes delegated to the author with a checklist rather than made by you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five team documents have been reviewed in twenty minutes or less each using a written review order, with the top three changes given before detailed comments."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write your four-step review order on a card"
                - "Time your next review and stop at twenty minutes"
                - "Open each review with the three most important changes"
                - "Hand formatting fixes back to the author with a checklist"
            - name: Coaching the team by asking rather than telling
              description: |-
                ## Purpose
                Giving the team the answer is faster today, but it means every problem comes back to you and nobody learns to solve the next one. Practising a handful of coaching questions, such as what would have to be true, what the client would ask first and what the simplest test is, builds a team that brings you options instead of questions.

                ## Milestones
                1. Five go-to coaching questions written down.
                2. Three problem-solving sessions run where you ask before you suggest.
                3. Team members proposing their own next step before you give yours, noted on three occasions.
                4. A note on where asking wasted time and telling would have been right.

                ## Notes
                Coaching is not withholding. When a deadline is hours away and the answer is clear, say it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have used a written set of five coaching questions in three sessions and recorded three occasions when team members proposed their own next step first."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write five coaching questions you can use under time pressure"
                - "Hold back your own suggestion for the first ten minutes of a session"
                - "Note each time a team member proposes the next step first"
                - "Write down one case where telling would have been better"
            - name: Estimating analysis effort before committing
              description: |-
                ## Purpose
                Managers say yes to a client request in the room and then find it needs three analyst weeks. Practising quick effort estimates, breaking an analysis into data access, cleaning, analysis and pages, then comparing against what it really took, makes you much better at saying what something will cost before you agree to it.

                ## Milestones
                1. A simple estimating method splitting work into access, cleaning, analysis and pages.
                2. Ten analyses estimated before they start.
                3. Actual effort recorded for the same ten.
                4. Your typical estimating error worked out and a correction factor written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten analyses have been estimated in advance and compared with their actual effort, giving you a written correction factor for future estimates."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the four effort components you will estimate each time"
                - "Estimate the next ten analyses before work starts"
                - "Ask analysts to record actual hours on each of the ten"
                - "Calculate your average error and note the correction factor"
            - name: Delegation map for a new engagement manager
              description: |-
                ## Purpose
                Recently promoted managers often keep doing the analyst and associate work they were praised for, and the team stops growing while the manager works until two in the morning. Mapping the tasks you still do yourself against who could do them, and handing over three of them with proper support, frees time for the work only the manager can do.

                ## Milestones
                1. A list of every recurring task you did in the last two weeks.
                2. Each task marked as manager only, delegable now or delegable with coaching.
                3. Three tasks handed over with a brief and an agreed check-in.
                4. The hours freed and where you spent them recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three tasks you previously did yourself are delegated with briefs and check-ins, and the hours freed are recorded alongside what you used them for."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every task you did yourself in the last two weeks"
                - "Mark each task manager only, delegable now or with coaching"
                - "Hand over three tasks with a brief and a check-in date"
                - "Record the hours freed and how you used them"
            - name: Difficult feedback conversations on the team
              description: |-
                ## Purpose
                Every manager eventually has to tell someone their work is not at the level the role needs, and most put it off until the evaluation, where it lands as a shock. Preparing and practising the conversation, with specific examples, the effect on the engagement and what good would look like, makes it shorter, fairer and more likely to change something.

                ## Milestones
                1. A simple structure for the conversation: specific example, effect, expectation and support.
                2. One practice run with a peer manager or coach.
                3. The real conversation held within a week of the issue appearing.
                4. A follow-up two weeks later with the outcome recorded.

                ## Notes
                Check with your staffing or people team before the conversation if the issue might become formal. They will know what must be documented.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One difficult feedback conversation has been prepared using a written structure, practised once and held within a week, with a recorded two-week follow-up."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the specific examples, the effect and what good looks like"
                - "Practise the opening two minutes with a peer manager"
                - "Hold the conversation in private within a week of the issue"
                - "Book a two-week follow-up and record what changed"
            - name: The two-minute partner update
              description: |-
                ## Purpose
                On four engagements at once, a partner often gives you two minutes in a corridor or on a call between flights. Practising an update that gives the answer so far, the one decision you need and the one risk they should know about, in that order, means you get decisions instead of a promise to talk later.

                ## Milestones
                1. A three-part update format: the answer, the decision needed, the risk.
                2. Five updates given in the format, each under two minutes.
                3. Decisions received in the moment counted against before.
                4. The same format used for written updates by message.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five partner updates have been given in the three-part format in under two minutes each, with the number of on-the-spot decisions recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write today's answer, decision and risk in three sentences"
                - "Time yourself saying them aloud and cut to under two minutes"
                - "Use the format for the next five partner updates"
                - "Rewrite your next partner message in the same three parts"
            - name: Engagement financial measures a manager reads
              description: |-
                ## Purpose
                Firms judge managers partly on the economics of their engagements, yet many managers cannot explain how their firm calculates realisation, margin or the team pyramid ratio. Learning the handful of measures your firm uses, and how your decisions move each one, makes budget conversations with the partner and finance much shorter.

                ## Milestones
                1. Your firm's definitions of realisation, margin and team pyramid ratio written in your own words.
                2. The effect of adding one analyst week, one manager week and one trip worked out on a past engagement.
                3. Those measures for your current engagement calculated.
                4. Two questions you could not answer resolved with finance.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can state your firm's definitions of three engagement financial measures and have calculated them for your current engagement, checked by finance."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find your firm's internal definitions of engagement financial measures"
                - "Rewrite each definition in one plain sentence"
                - "Work out how one extra analyst week moves each measure"
                - "Ask finance to check your figures for the current engagement"
            - name: Pushing back on a scope request without losing goodwill
              description: |-
                ## Purpose
                A client manager asks for an extra market to be added to the analysis, and saying yes means the core question gets less attention. Preparing a response that acknowledges the need, shows the cost in time or depth, and offers two options, such as a trade, a lighter version or a later phase, keeps the relationship and the plan intact.

                ## Milestones
                1. The request and its estimated effort written down.
                2. Two or three options prepared, each with what it would cost the current scope.
                3. The partner's position on the options agreed before you reply to the client.
                4. The client's choice recorded in the scope change log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A significant scope request has been answered with at least two costed options agreed with the partner, and the client's choice is recorded in the scope log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Estimate the effort of the new request in team days"
                - "Prepare a trade option, a lighter option and a later-phase option"
                - "Agree the preferred option with the partner before replying"
                - "Write the client's choice into the scope change log"
            - name: Re-plan when the engagement falls behind
              description: |-
                ## Purpose
                When a key data set arrives three weeks late, the original plan becomes fiction, and teams that keep pretending end up working weekends to hit dates nobody believes. A deliberate re-plan, deciding what moves, what shrinks and what the client is told, gives everyone a plan they can trust again.

                ## Milestones
                1. The cause and size of the delay written down in days.
                2. A revised plan showing which deliverables move, shrink or stay.
                3. The partner's agreement to the revised plan secured.
                4. The client project lead told about the new plan with the reasons and what is protected.

                ## Notes
                Re-plan once, properly. Three small re-plans in a month are worse for client trust than one honest one.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A revised engagement plan, approved by the partner and explained to the client project lead, replaces the original within a week of the delay being known."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the cause of the delay and its size in working days"
                - "Mark each remaining deliverable as move, shrink or protect"
                - "Take the revised plan to the partner for approval"
                - "Explain the new plan to the client project lead in person"
            - name: Choosing what to cut when the team is overloaded
              description: |-
                ## Purpose
                When every analysis feels essential, teams try to do them all and do none of them well. Ranking the open work by how much it would change the answer and how much the client cares, then explicitly cutting or parking the bottom third, is one of the clearest decisions a manager makes.

                ## Milestones
                1. All open analyses listed with their effort remaining.
                2. Each rated for effect on the answer and importance to the client.
                3. The bottom third parked or cut with the partner's agreement.
                4. The team told what was cut and why, so nobody keeps working on it quietly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Open analyses have been ranked on two criteria and at least the bottom third cut or parked, with the decision shared with the team and the partner."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every open analysis with the effort left on each"
                - "Score each one for effect on the answer and client importance"
                - "Agree the cut list with the partner"
                - "Tell the team in writing which analyses stop today"
            - name: Deciding whether to escalate a performance concern
              description: |-
                ## Purpose
                A team member who keeps missing quality or deadlines puts the deliverable and the rest of the team at risk, but escalating too fast can damage a career over one bad engagement. Working through the evidence, the support already given and the effect on the client helps you decide between more coaching, a role change on the team or a conversation with the people team.

                ## Milestones
                1. Specific dated examples of the concern written down.
                2. The support and feedback already given listed.
                3. Options compared: more coaching, a changed role, or formal escalation.
                4. A decision made and the next step taken within a week.

                ## Notes
                Talk to your firm's people or staffing team early and confidentially. Formal processes usually need documented feedback, and they can tell you what is required.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written record of examples, support given and options exists, and a decision on coaching, role change or escalation is taken and acted on within a week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write dated examples of the missed quality or deadlines"
                - "List the feedback and support you have already given"
                - "Ask the people team confidentially what a formal route requires"
                - "Choose coaching, a role change or escalation and act on it"
            - name: Asking the partner for extra staff or budget
              description: |-
                ## Purpose
                Managers often wait until the team is breaking before asking for help, and by then the answer is usually no. A short, evidenced case showing the gap between remaining work and remaining capacity, the options considered and the cost of each, gives the partner something to decide on rather than a complaint.

                ## Milestones
                1. Remaining work in team days compared with remaining capacity.
                2. Options set out: extra staff, a scope trade, a longer timeline, or absorbing the gap.
                3. The cost and effect on the answer of each option estimated.
                4. The partner's decision recorded and the plan updated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page case comparing remaining work with capacity and at least three costed options has been put to the partner, with the decision recorded in the plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Total the remaining work in team days by workstream"
                - "Compare it with the team's remaining available days"
                - "Cost three options including a scope trade"
                - "Put the one-page case to the partner and log the decision"
            - name: Changing approach when the lead hypothesis fails
              description: |-
                ## Purpose
                Halfway through, the evidence says the growth problem is not pricing after all, and the team has six weeks of slides built on that idea. Deciding quickly whether to pivot, how to tell the partner and the client, and what work can be salvaged is a defining manager moment, and doing it a week early is worth more than any polished page.

                ## Milestones
                1. The evidence against the lead hypothesis written on one page.
                2. The new leading explanation stated, with the analyses needed to test it.
                3. The partner briefed and agreed on the pivot within two days.
                4. The client project lead told in advance of any senior meeting, with what is kept from the earlier work.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page case for changing the lead hypothesis is agreed with the partner within two days of the evidence appearing, and the client lead is told before any senior meeting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise on one page the evidence against the lead hypothesis"
                - "Write the new leading explanation and the tests it needs"
                - "Brief the partner on the pivot within two days"
                - "List which earlier analyses still support the new answer"
            - name: Midpoint review with the client project lead
              description: |-
                ## Purpose
                Halfway through an engagement the client has formed a view of the team, the answer and the value, and you want to hear it while you can still act. A structured midpoint conversation on what is going well, what worries them and what they need by the end often surfaces one issue that would otherwise have soured the final readout.

                ## Milestones
                1. Five questions prepared on value, team, pace, surprises and needs by the end.
                2. The conversation held at or near the midpoint of the plan.
                3. Their feedback summarised and shared with the partner.
                4. Two changes agreed and told back to the client lead.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A midpoint review with the client project lead is held near the halfway point, with written feedback shared with the partner and two changes reported back."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write five midpoint questions on value, team, pace and needs"
                - "Book forty-five minutes with the client project lead at the midpoint"
                - "Summarise their feedback for the partner the same day"
                - "Tell the client lead the two changes you are making"
            - name: Partner dry run before a major client meeting
              description: |-
                ## Purpose
                Partners who see a deck for the first time in the taxi rewrite it in the meeting, which confuses the client and deflates the team. Booking a dry run two days before any major meeting, with the partner playing the toughest client, gives time to fix the story and lets the team see their work questioned before it matters.

                ## Milestones
                1. A dry run booked at least two working days before the meeting.
                2. The likely five hardest client questions listed in advance.
                3. Changes from the dry run made and sent back to the partner.
                4. A team member, not only you, presenting at least one section in the dry run.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dry run with the partner happens two working days before a major client meeting, with the hardest questions answered and changes made beforehand."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a dry run with the partner two working days before the meeting"
                - "List the five hardest questions the client is likely to ask"
                - "Ask a team member to present one section in the dry run"
                - "Send the partner the revised pages after the dry run"
            - name: End-of-engagement evaluations for the team
              description: |-
                ## Purpose
                Evaluations written in a hurry after the team has rolled off are vague and often unfair, and they follow people into promotion discussions. Writing each one within a week of the end, using the development goals and the monthly feedback record, gives every person a specific and evidenced account of the engagement.

                ## Milestones
                1. An evaluation drafted for every team member within a week of the end date.
                2. Each evaluation citing at least three specific examples from the engagement.
                3. Progress against each person's development goals stated.
                4. Each evaluation discussed with the person before or as it is submitted.

                ## Notes
                Calibrate before submitting. Read all your evaluations side by side to check the same standard was applied to everyone.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every team member's evaluation is submitted within a week of the engagement end, with three specific examples and progress against their development goals."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather development goals and monthly feedback notes for each person"
                - "Draft each evaluation with three specific examples"
                - "Read all evaluations side by side to check consistency"
                - "Discuss each evaluation with the person before submitting"
            - name: Engagement close-out and handback
              description: |-
                ## Purpose
                The last week of an engagement is crowded with the final readout, and the closing work slips: the budget left open, files scattered across laptops, the client's data still sitting on shared drives. A deliberate close-out within ten days of the end protects confidentiality, finishes the financials and leaves the next team something usable.

                ## Milestones
                1. Final time and expenses recorded and the engagement budget closed with finance.
                2. Client data returned or deleted according to the engagement terms, with confirmation recorded.
                3. Final documents stored in the firm's official repository with a short index.
                4. A one-page lessons note shared with the partner.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within ten days of the end date, the budget is closed, client data is handled per the terms, final files are filed with an index and a lessons note is sent."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check the engagement terms for how client data must be handled"
                - "Close final time and expenses with finance"
                - "File final documents in the firm repository with an index"
                - "Write a one-page lessons note and send it to the partner"
            - name: First engagement as a newly promoted manager
              description: |-
                ## Purpose
                The step from senior associate to manager is the hardest in consulting because the skills that got you promoted, doing the analysis brilliantly, now get in the way. For a first engagement in the role, setting a short list of what you will stop doing, what you will start doing and who will give you honest feedback makes the first twelve weeks deliberate rather than survived.

                ## Milestones
                1. A stop, start and continue list for your first engagement as manager.
                2. A senior manager or partner outside the engagement agreed as a sounding board.
                3. Feedback from the partner and one team member gathered at week four.
                4. A written review of the first engagement with three things to keep and three to change.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A stop, start, continue list, a named sounding board, week-four feedback and a written end-of-engagement review exist for your first engagement as manager."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write what you will stop, start and continue doing as manager"
                - "Ask a senior manager outside the engagement to be a sounding board"
                - "Request candid feedback from the partner and one analyst at week four"
                - "Write a Friday note of one thing you learned as manager @recurring(weekly:fri)"
            - name: Joining a firm as an experienced-hire manager
              description: |-
                ## Purpose
                Experienced hires joining from industry or another firm bring real expertise but not the firm's unwritten rules, its templates, or a network of partners who trust them. A plan for the first three months, covering the firm's methods, the people who staff engagements and a first engagement where you can show your strengths, shortens the time before you are trusted with a full engagement.

                ## Milestones
                1. The firm's core engagement methods, templates and quality rules read and summarised.
                2. Coffee or calls held with ten managers and partners in your practice.
                3. A first engagement chosen where your prior expertise is directly useful.
                4. Feedback after the first engagement on where you still work like your old organisation.

                ## Notes
                Ask peers which partners shape staffing decisions. Formal staffing processes often matter less than a few people's opinions.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within ninety days, you have summarised the firm's engagement methods, met ten managers and partners and received feedback after a first engagement."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find the firm's engagement methods guide and core slide templates"
                - "List ten managers and partners in your practice to meet"
                - "Tell the staffing team where your prior expertise is strongest"
                - "Ask your first partner where you still work like your old employer"
            - name: Running two engagements at the same time
              description: |-
                ## Purpose
                Many firms ask senior managers to run two smaller engagements at once, and the usual failure is that one client feels neglected and one team runs without direction. Splitting your week deliberately, giving each team a strong deputy and keeping one combined view of both plans makes parallel engagements workable.

                ## Milestones
                1. A fixed split of days or half-days between the two engagements shared with both teams.
                2. A named deputy on each team with agreed decision rights when you are absent.
                3. One combined calendar of both engagements' key client meetings and reviews.
                4. No clash between major client meetings left unresolved more than two weeks ahead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fixed split of your week, a deputy with decision rights on each team and a combined calendar of both engagements are in place, with no unresolved clashes two weeks out."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree a split of your days between the two engagements"
                - "Name a deputy on each team and write their decision rights"
                - "Build one calendar holding both engagements' key meetings"
                - "Plan both teams' week in a single planning hour @recurring(weekly:mon)"
            - name: Managing a team spread across time zones
              description: |-
                ## Purpose
                Engagements with team members in another region or an offshore research centre can run around the clock, or can lose a day on every handover. Setting overlap hours, a written handover note and clear ownership for work that crosses the gap keeps the time difference working for the team rather than against it.

                ## Milestones
                1. Overlap hours that everyone can attend set and protected.
                2. A written handover note format used at the end of each region's day.
                3. Ownership of every task that crosses time zones assigned to one person.
                4. Meeting times rotated so the same people do not always take the late slot.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Protected overlap hours, a daily written handover note and single owners for cross-zone tasks are in place, with late meeting slots rotated fairly."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Map each team member's working hours to find the overlap"
                - "Agree a five-line handover note for the end of each region's day"
                - "Run a handover call in the overlap hours @recurring(weekly:mon,wed)"
                - "Rotate meeting times so the late slot is shared"
            - name: Returning to engagement management after a long break
              description: |-
                ## Purpose
                Coming back after parental leave, illness or a secondment means returning to a firm that has changed its tools and partners, with a life outside work that may have changed too. Planning the return, including what you need from staffing on travel and hours and how you rebuild your network, makes the first engagement back one that fits.

                ## Milestones
                1. Your needs on travel, hours and location written down before the staffing conversation.
                2. A return conversation held with staffing and a sponsoring partner.
                3. Changes in methods, tools and people during your absence caught up on.
                4. A first engagement agreed that fits the needs you set out.

                ## Notes
                Check your firm's return-to-work and flexible working policies before the staffing conversation, so you are asking for something the firm already offers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written return needs are agreed with staffing and a sponsoring partner, and a first engagement is chosen that fits them."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write your needs on travel, hours and location for the return"
                - "Read the firm's return-to-work and flexible working policies"
                - "Ask a sponsoring partner to join your staffing conversation"
                - "List the tools and people that changed while you were away"
            - name: Managing team members more senior than you
              description: |-
                ## Purpose
                Engagements often include a client secondee who has run large functions, an expert adviser or a principal from another practice, all of whom outrank you in experience. Agreeing roles explicitly, using their expertise where it is strongest and keeping the plan yours keeps the relationship respectful and the engagement on course.

                ## Milestones
                1. Each senior member's role, time and decision rights agreed in a short conversation.
                2. Their strongest expertise matched to specific questions in the plan.
                3. Disagreements on approach settled privately, never in front of the client.
                4. Their feedback on how you ran the engagement asked for at the end.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each senior team member has an agreed role and decision rights, is matched to named questions in the plan, and has given feedback on your management at the end."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book a private conversation with each senior team member on roles"
                - "Match their expertise to specific questions in the plan"
                - "Agree how you will handle disagreements on approach"
                - "Ask each for feedback on your management at the end"
            - name: Turning round an engagement in trouble
              description: |-
                ## Purpose
                Some engagements arrive at a manager already red: a client unhappy with the first interim, a team burnt out, a partner under pressure. Taking one week to diagnose the real causes, agreeing a reset with the partner and the client, and running a tighter rhythm for a month can recover the relationship and the answer.

                ## Milestones
                1. One-to-one conversations held with the partner, the client lead and every team member within a week.
                2. The three root causes of the trouble written down.
                3. A reset plan with revised scope, timeline and rhythm agreed with the partner and client.
                4. Weekly health ratings back to amber or green within four weeks.

                ## Notes
                Resist the urge to fix the slides first. Troubled engagements are usually troubled because of scope, relationships or team, and better pages rarely change that.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Within a week, root causes are written and a reset plan is agreed with the partner and client, and health ratings reach amber or green within four weeks."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Book one-to-ones with the partner, client lead and every team member"
                - "Write the three root causes of the trouble on one page"
                - "Agree a reset plan with the partner before meeting the client"
                - "Present the reset of scope, timeline and rhythm to the client lead"
            - name: Joint team with client staff and another firm
              description: |-
                ## Purpose
                Large programmes often put your team alongside client staff and a second firm, perhaps a technology integrator, each with its own reporting line and commercial interest. Agreeing one integrated plan, clear interfaces and a shared way of resolving disputes before the first argument prevents months of finger pointing.

                ## Milestones
                1. One integrated plan showing every party's deliverables and dependencies.
                2. Named interface owners between your team, the client and the other firm.
                3. A dispute route agreed for disagreements on scope or quality.
                4. A regular joint working session with the other firm's manager in place.

                ## Notes
                Check your engagement terms on what you may share with the other firm. Some plans and client data may be restricted.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "An integrated plan, named interface owners and an agreed dispute route are documented and signed off by your partner, the client lead and the other firm's manager."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Meet the other firm's manager to compare plans and dependencies"
                - "Check the engagement terms on what can be shared with them"
                - "Draft one integrated plan with named interface owners"
                - "Agree a dispute route with the client lead and the other firm"
            - name: Long implementation engagement as manager
              description: |-
                ## Purpose
                Nine months of implementation is a different job from an eight-week strategy study: team members rotate, the client team grows into the work and energy fades around month four. Planning for team rotation, regular resets and the gradual shift of ownership to client staff keeps a long engagement fresh and leaves the client capable at the end.

                ## Milestones
                1. A rotation plan showing when each team member rolls on and off, with handover overlaps.
                2. A quarterly reset of goals and plan agreed with the partner and client.
                3. A schedule for moving ownership of each workstream to named client staff.
                4. A handover note written for every team member who rolls off.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A rotation plan, quarterly resets and an ownership transfer schedule exist for the engagement, and every team member leaving writes a handover note."
                cadence: cyclic
              tasks:
                - "Draw a rotation plan with at least one week of overlap per handover"
                - "Hold a quarterly reset of goals and plan with partner and client @recurring(quarterly)"
                - "Name the client owner for each workstream and a transfer date"
                - "Ask every departing team member for a written handover note"
            - name: Confidential engagement handling as manager
              description: |-
                ## Purpose
                Some engagements, such as a merger, a site closure or a leadership change, are known to only a handful of people at the client. As manager you set the code names, document access, rules for team conversations in public and the response if something leaks, and the team takes its cue from how seriously you treat it.

                ## Milestones
                1. A code name and a restricted access list agreed with the partner and client.
                2. Rules for documents, travel conversations and devices written and briefed to the team.
                3. A leak response plan naming who is told first and by whom.
                4. Access reviewed and removed for anyone who leaves the team.

                ## Notes
                Follow your firm's confidentiality and information security policies, and ask your risk or legal team if the client's request goes beyond them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A code name, access list, team rules and a leak response plan are documented and briefed to the whole team before the work starts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree a code name and access list with the partner and client lead"
                - "Write team rules for documents, devices and public conversations"
                - "Draft a leak response naming who tells whom"
                - "Remove access the day any person leaves the team"
            - name: Proposing the engagement plan to the partner before the sale closes
              description: |-
                ## Purpose
                Before a proposal is signed, partners often ask a manager to shape the approach and team, and what goes into the proposal becomes the budget you live with. Sizing the work, the team pyramid and the timeline honestly at this stage, and saying where the fee looks thin, is the cheapest point to prevent a loss-making engagement.

                ## Milestones
                1. A draft approach, phase timeline and team shape for the proposal.
                2. Effort estimated by phase with assumptions written down.
                3. Any gap between the likely fee and the effort named to the partner.
                4. Your estimate reconciled with the final proposal before signature.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written effort estimate by phase, with assumptions and any fee gap, is given to the partner and reconciled with the proposal before it is signed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the approach by phase with a timeline"
                - "Estimate team weeks per phase and write each assumption"
                - "Tell the partner where the fee looks thin against the effort"
                - "Compare your estimate with the final proposal before signature"
            - name: Your engagement manager playbook
              description: |-
                ## Purpose
                After three or four engagements, experienced managers have a set of habits, templates and warning signs that make the next engagement easier, but few write them down. A personal playbook covering your opening week, your weekly rhythm, your review method and your top ten warning signs makes you faster and becomes the basis for coaching new managers.

                ## Milestones
                1. A playbook document with sections for set-up, rhythm, team, client, partner and close-out.
                2. Lessons from at least three past engagements added.
                3. Your own top ten warning signs listed with what you do about each.
                4. The playbook shared with one newer manager and their questions added.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A personal playbook with six sections, lessons from three engagements and ten warning signs exists and has been shared with one newer manager."
                cadence: rolling
              tasks:
                - "Create a playbook document with six section headings"
                - "Write lessons from your last three engagements into it"
                - "Ask the agent to turn your lessons notes into a warning signs list"
                - "Add one lesson from the current engagement @recurring(monthly:28)"
---

# Engagement Manager Role

The engagement manager is the person who turns a partner's sold promise into a team's weekly work: you own the plan, the budget, the people, the day-to-day client relationship and the shape of the answer, while the partner owns the relationship at the top and the final call. This area starts with foundations (the split of roles with your partner, the engagement economics, a week-by-week plan, team norms, development goals, a client working-team map, a risk register and your own time budget), then the operating routines that run the engagement, the skills of briefing, reviewing, coaching and managing up, the decisions that come when scope, time or people go wrong, the dated checkpoints and close-out, variants for new, experienced-hire, parallel, remote and returning managers, and finally specialist work such as turning round an engagement in trouble.

The rhythm is problem-solving sessions three times a week, Tuesday one-to-ones and a client project lead check-in, a Wednesday risk and answer review, a Thursday partner check-in and a Friday budget and hours review, with monthly engagement health, feedback and capacity checks. The Development plan, Risk register, Meeting notes, Metrics log, 1:1 and Feedback themes templates pair with team goals, the risk log, partner check-ins, the budget tracker, one-to-ones and the monthly feedback round. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
