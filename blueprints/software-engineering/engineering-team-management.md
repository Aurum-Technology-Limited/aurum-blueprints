---
id: software-engineering.engineering-team-management
name: Engineering Team Management
description: "A working system for leading engineers: one-to-ones that matter, feedback given early, clear delegation, protected focus time, honest planning and delivery that stays on track."
category: business
version: 1.0.0
tags: [software-engineering, engineering-team-management, manager, engineer, one-to-ones, feedback, delegation, focus-time]
author: Aurum Technology
starter_structure:
  templates:
    - person
    - one-on-one
    - development-plan
    - meeting-notes
    - feedback-themes
    - reading-queue
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Engineering Team Management
          description: "Leading a team of engineers through one-to-ones, feedback, delegation, planning and protecting focus time while keeping delivery on track."
          projects:
            - name: First thirty days listening tour
              description: |-
                ## Purpose
                A new manager who changes things in week two usually fixes the wrong problem and spends credibility doing it. Thirty days of structured conversations with every engineer, your own manager, the product partner and two or three neighbouring teams gives you a written picture of what is working, what hurts and what people expect from you. It also tells the team that you listen before you act.

                ## Milestones
                1. A conversation held with every engineer on the team, each asked the same five questions.
                2. Separate conversations held with your manager, the product lead and at least two partner teams.
                3. A one-page summary of themes, written without names attached to any quote.
                4. Three early priorities chosen from the themes and shared back with the team.

                ## Notes
                Good default questions: what should I not change, what slows you down, what do you wish the last manager had done, what are you hoping to learn this year, and what should I know that nobody will tell me.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every engineer and at least four stakeholders interviewed, with a themes summary and three priorities shared with the team within thirty days."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Write the five questions you will ask every engineer"
                - "Book a forty-five minute conversation with each person on the team"
                - "Book separate conversations with your manager and the product lead"
                - "Group your notes into themes and remove anything that identifies a person"
                - "Present the themes and three priorities at the next team meeting"
            - name: Team charter with mission and boundaries
              description: |-
                ## Purpose
                Teams that cannot say in two sentences what they own and what they do not end up absorbing every request that lands near them. A short charter naming the mission, the systems and decisions the team owns, the customers it serves and the things it explicitly does not do gives you something to point at when work arrives from the side. Write it with the team so they defend it too.

                ## Milestones
                1. A two-sentence mission the whole team can repeat without notes.
                2. A list of owned systems, services and decisions, agreed with neighbouring teams.
                3. An explicit not-our-job list of at least three things the team will redirect.
                4. The charter published where partner teams and new joiners will find it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published one-page charter with mission, owned systems and an explicit out-of-scope list, reviewed by the team and two partner teams."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a rough mission in two sentences to react to, not to approve"
                - "Run a one-hour session where the team edits the mission and owned systems"
                - "Ask two neighbouring teams to check the ownership list for gaps and overlaps"
                - "Publish the charter and link it from the team channel description"
            - name: Profile page for each engineer
              description: |-
                ## Purpose
                Managers with six to ten reports forget who wanted to learn Kubernetes, whose partner is due in March and who prefers feedback in writing. A short private profile per person, holding their goals, strengths, working preferences and the context they have chosen to share, turns one-to-ones from small talk into continuity. Keep it factual and something you would be comfortable for them to read.

                ## Milestones
                1. One profile page per engineer with role, start date and current focus.
                2. Each person's stated goals and preferred ways of receiving feedback recorded in their words.
                3. Known constraints such as caring duties or planned leave noted where the person shared them.
                4. A habit of updating the page within a day of each one-to-one.

                ## Notes
                Start from the **Person** template. Write nothing you would not be happy for the engineer to see if they asked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every direct report has a profile page with goals, feedback preferences and current focus, each updated within the last month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create one profile page for each direct report"
                - "Copy each person's stated goals from your listening tour notes"
                - "Ask each engineer how they prefer to receive feedback and record the answer"
                - "Add a link to the profile from your one-to-one notes for that person"
            - name: Weekly one-to-one schedule and format
              description: |-
                ## Purpose
                One-to-ones that get cancelled whenever a deadline looms teach engineers that they come second to the roadmap. Setting a fixed weekly or fortnightly slot for each report, with a shared running agenda the engineer owns, makes the meeting theirs rather than a status update for you. Thirty minutes weekly is a sensible default for most teams.

                ## Milestones
                1. A recurring slot booked with every direct report, weekly or fortnightly by agreement.
                2. A shared running agenda document created for each person.
                3. A clear agreement that status updates belong elsewhere and this time is theirs.
                4. A rule written down for what happens when a slot has to move, rather than be dropped.

                ## Notes
                Start from the **1:1** template. Move a one-to-one if you must, but almost never cancel one.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every report has a recurring one-to-one in both calendars and a shared agenda document they have added to at least once."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each engineer whether they want weekly or fortnightly one-to-ones"
                - "Book the recurring slots, avoiding their longest focus blocks"
                - "Create a shared agenda document for each person with their name first"
                - "Explain at the team meeting that one-to-ones move but do not get cancelled"
            - name: Team working agreements
              description: |-
                ## Purpose
                Friction on a team often comes from unspoken assumptions: whether a chat message needs an answer in ten minutes or by tomorrow, when people are expected online, who may merge on Friday afternoon. Writing a short set of working agreements together, covering core hours, response times, meeting norms and how disagreements are settled, removes a whole category of quiet resentment.

                ## Milestones
                1. Agreed core collaboration hours that suit every time zone on the team.
                2. Expected response times written for chat, email, review requests and pages.
                3. Meeting norms agreed, including when cameras, agendas and notes are expected.
                4. A simple rule for settling technical disagreements that stall for more than a day.
                5. The agreements published and dated, with a review planned in three months.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated working agreements page covering hours, response times, meetings and disagreement, agreed by every team member."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect three things that annoy each person about how the team communicates"
                - "Run a forty-five minute session to draft the agreements together"
                - "Publish the page and ask everyone to react with agreement or objections"
                - "Put a review of the agreements in the calendar three months out"
            - name: Manager calendar with maker and manager blocks
              description: |-
                ## Purpose
                Left alone, a manager's calendar fills from the outside in, and within a month there is no room left to think, write or review a design properly. Shaping a default week, with one-to-ones clustered, two long blocks for deep work, a slot for reviewing team output and a deliberate gap for walk-ups, keeps the important but quiet work alive.

                ## Milestones
                1. A default week drawn on paper with blocks for one-to-ones, deep work and reviews.
                2. One-to-ones clustered on two or three days instead of scattered across five.
                3. Two recurring deep work blocks of at least two hours each defended in the calendar.
                4. Recurring meetings you do not need declined or delegated.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your calendar shows two protected deep work blocks each week and one-to-ones grouped on no more than three days, held for four straight weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export last month's calendar and count hours by meeting type"
                - "Sketch the default week you want on a single page"
                - "Move one-to-ones so they sit on two or three days"
                - "Book two recurring two-hour deep work blocks and mark them busy"
            - name: Stakeholder map and expectations
              description: |-
                ## Purpose
                Product, design, support, sales and your own manager all want something from the team, and they rarely want the same thing. Mapping who depends on the team, what each one expects, how often they need to hear from you and what would make them lose confidence lets you manage those relationships on purpose instead of reacting to the loudest one.

                ## Milestones
                1. Every regular stakeholder listed with what they need from the team.
                2. Each one asked directly how they would judge the team a success this quarter.
                3. A communication rhythm agreed per stakeholder, from weekly to quarterly.
                4. Two or three relationships flagged as at risk with a first step written for each.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A stakeholder table with needs, success measures and contact rhythm for each person, confirmed by at least three of them."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List everyone outside the team who regularly asks the team for work"
                - "Ask each one what a great quarter from your team would look like"
                - "Agree how often each stakeholder wants an update and in what form"
                - "Mark the relationships that feel strained and pick one first step for each"
            - name: Delivery health baseline for the team
              description: |-
                ## Purpose
                Before promising anything new you need to know what the team is already committed to, how much of it is late and how much time disappears into unplanned work. A baseline of in-flight commitments, their real status and a rough split of planned versus unplanned time gives you the facts for your first honest conversation with leadership.

                ## Milestones
                1. Every in-flight commitment listed with owner, promised date and current confidence.
                2. Commitments nobody remembers agreeing to identified and raised with whoever asked.
                3. A rough percentage of the last month spent on planned work, support and interruptions.
                4. A short written summary shared with your manager, including what is at risk.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written delivery baseline lists every live commitment with a confidence rating and a planned versus unplanned time split, reviewed with your manager."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull every open epic and promised date from the tracker into one list"
                - "Ask each owner for a red, amber or green confidence on their item"
                - "Estimate last month's split of planned, support and interrupt work"
                - "Walk your manager through the baseline and the items at risk"
            - name: Role expectations conversation with each engineer
              description: |-
                ## Purpose
                Many engineers cannot say what their manager expects of them at their level, and they find out at review time when it is too late to act. Holding one conversation per person that sets out what good looks like in their role this half, using your company's levels where they exist, and writing down two growth goals they actually want removes the surprise from the next review.

                ## Milestones
                1. Each engineer's current level and the written expectations for it shared and discussed.
                2. Two strengths and one gap agreed with each person in plain language.
                3. Two growth goals per person that they chose, with a first step each.
                4. A short development plan saved where both of you can see it.

                ## Notes
                Start from the **Development plan** template. Defining levels themselves belongs to the career ladder, not here.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Every report has a written development plan with agreed expectations and two self-chosen goals, created within forty-five days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the written expectations for each engineer's current level"
                - "Write your honest view of each person's two strengths and one gap"
                - "Hold a dedicated hour with each engineer to agree goals"
                - "Save each development plan and link it from their profile page"
            - name: Running one-to-ones that build trust
              description: |-
                ## Purpose
                Booking one-to-ones is the easy part; keeping them useful for months is the work. A light routine of reading the engineer's agenda first, asking at least one open question about how they are really doing, writing three lines of notes and closing every action you took on keeps the meeting valuable rather than ritual.

                ## Milestones
                1. Every one-to-one held or moved, none silently dropped, for a full quarter.
                2. Three lines of notes recorded after each meeting.
                3. Open actions from one-to-ones reviewed monthly and closed or explained.
                4. At least one career or wellbeing topic covered with each person each month.

                ## Notes
                If an engineer has nothing to raise for three weeks in a row, ask whether the format still suits them rather than letting it fade.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarter of one-to-ones held for every report with notes recorded and no action from you left open more than four weeks."
                cadence: rolling
              tasks:
                - "Read each engineer's agenda the morning before their one-to-one"
                - "Hold each scheduled one-to-one and write three lines of notes @recurring(weekly)"
                - "Review every open one-to-one action you own and close or update it @recurring(monthly:3)"
                - "Ask each person once a month what you could do differently as their manager"
            - name: Weekly team meeting with a shared agenda
              description: |-
                ## Purpose
                Status rounds in a team meeting waste the one hour everyone is in the same place. Keeping a shared agenda that anyone can add to, putting decisions and discussion first, moving updates to writing and ending with named owners turns it into the place the team actually decides things together.

                ## Milestones
                1. A standing shared agenda that every team member has added to at least once.
                2. Status updates moved to a written thread posted before the meeting.
                3. Every meeting ending with decisions and owners recorded in the notes.
                4. The meeting finishing on time for six weeks in a row.

                ## Notes
                Start from the **Meeting notes** template. Rotate the facilitator so the meeting does not depend on you.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive team meetings run from a shared agenda, each with recorded decisions and owners and none overrunning."
                cadence: rolling
              tasks:
                - "Create a shared running agenda with sections for decisions, discussion and notices"
                - "Ask the team to post written updates in the channel the day before"
                - "Run the team meeting from the shared agenda and record owners @recurring(weekly:tue)"
                - "Set up a facilitator rotation and publish the order"
            - name: Friday update to leadership
              description: |-
                ## Purpose
                Leaders who hear nothing assume the worst, and leaders who hear only bad news at the last minute stop trusting the team's dates. A short written update every Friday, covering what shipped, what is at risk, what you need from them and one thing worth celebrating, builds a record of honesty that buys the team room when something does slip.

                ## Milestones
                1. A fixed five-part format agreed with your manager.
                2. Updates sent every Friday for eight weeks without a gap.
                3. Every risk raised at least two weeks before it would hit a promised date.
                4. Your manager confirming the update replaces at least one status meeting.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly updates sent in the agreed format, with risks flagged before dates were missed."
                cadence: rolling
              tasks:
                - "Agree the update's sections and length with your manager"
                - "Draft and send the weekly update before end of day @recurring(weekly:fri)"
                - "Keep a running note during the week of wins and risks to draw from"
                - "Ask your manager after a month which meeting the update can replace"
            - name: Focus time protection for the team
              description: |-
                ## Purpose
                Engineers need long, uninterrupted stretches to do their best work, and every fifteen-minute meeting dropped into the middle of an afternoon destroys one. Agreeing team-wide meeting-free blocks, batching recurring meetings into one part of the week and checking the team's meeting load monthly keeps those stretches from being eaten away.

                ## Milestones
                1. At least two meeting-free half days a week agreed and marked in every calendar.
                2. Recurring team meetings moved together into one or two days.
                3. A monthly count of meeting hours per engineer, with anyone above the agreed limit raised.
                4. Partner teams told about the focus blocks and asked to respect them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two meeting-free half days a week are in every engineer's calendar and the monthly meeting-load check has run three months in a row."
                cadence: rolling
              tasks:
                - "Ask the team which half days they would most like free of meetings"
                - "Block the agreed focus time in a shared team calendar"
                - "Check each engineer's meeting hours against the agreed limit @recurring(monthly:8)"
                - "Tell partner teams about the focus blocks in a short written note"
            - name: Running feedback log for every report
              description: |-
                ## Purpose
                Review season goes badly when a manager tries to remember six months of work in an evening and ends up writing about the last three weeks. Writing a dated note each week about something specific each person did, good or needing change, and telling them at the time, means feedback arrives while it is useful and reviews write themselves.

                ## Milestones
                1. A private feedback log per engineer with dated entries.
                2. At least one specific entry per person per week for a quarter.
                3. Every entry that matters already shared with the person within a week.
                4. A balance check showing no one has only critical or only positive notes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each report's log holds at least twelve dated, specific entries over a quarter, and each important one was shared within a week."
                cadence: rolling
              tasks:
                - "Create a private dated feedback log for each direct report"
                - "Write one specific observation for each engineer @recurring(weekly:thu)"
                - "Mark which entries you have shared and share any you have not"
                - "Scan each log for balance at the end of the month"
            - name: Monthly team retrospective
              description: |-
                ## Purpose
                Sprint ceremonies look at the work; a monthly retrospective looks at how the team works together, which is where most long-running friction lives. An hour each month, with a changing format, a safe space to say what is hard and no more than two actions with owners, gives the team a regular way to fix its own problems instead of waiting for you to notice.

                ## Milestones
                1. A monthly retrospective held for three months running, with a different format each time.
                2. No more than two actions agreed per retrospective, each with an owner.
                3. Last month's actions reviewed at the start of every session.
                4. At least one action that came from the team, not the manager, completed.

                ## Notes
                Sprint retrospectives on delivery belong with sprint planning; keep this one about collaboration, workload and how people feel.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly retrospectives held with recorded actions, and at least four of those actions completed."
                cadence: rolling
              tasks:
                - "Pick three retrospective formats to rotate through"
                - "Run the monthly team retrospective and record two actions @recurring(monthly:22)"
                - "Open each session by checking last month's actions"
                - "Ask a different engineer to facilitate each month"
            - name: Ownership map for team areas
              description: |-
                ## Purpose
                When everything belongs to the manager, the manager becomes the bottleneck and nobody grows. A map of the team's systems, rituals and relationships, with a named engineer owning each one and a second person learning it, spreads responsibility, reduces single points of failure and gives people visible scope to point to at review time.

                ## Milestones
                1. Every system, recurring process and partner relationship listed in one table.
                2. A named owner and a named backup for each row.
                3. No engineer owning more than they agreed to carry.
                4. The map reviewed quarterly as people join, leave or change focus.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A published ownership table where every row has an owner and a backup, reviewed at least once a quarter."
                cadence: rolling
              tasks:
                - "List everything you personally own today that someone else could"
                - "Offer each item to an engineer whose goals it fits and record the backup"
                - "Publish the ownership table in the team space"
                - "Review owners and backups for changes in the team @recurring(quarterly)"
            - name: Quarterly team planning cycle
              description: |-
                ## Purpose
                Plans written by the manager alone get delivered reluctantly, and plans with no slack get missed. A quarterly cycle that starts from company goals, invites engineers to propose work, reserves an explicit share for maintenance and unplanned work, and ends with a short written plan the team helped build gives you commitments that people believe in.

                ## Milestones
                1. Company and department goals for the quarter gathered before planning starts.
                2. Proposals collected from engineers, product and support.
                3. A capacity figure that reserves time for leave, support and maintenance.
                4. A one-page plan with three to five outcomes, agreed with product and shared upward.
                5. A mid-quarter check against the plan recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each quarter ends with a one-page plan of three to five outcomes, a capacity reservation and a recorded mid-quarter check."
                cadence: cyclic
              tasks:
                - "Collect the company goals that the team's work should serve"
                - "Start the quarterly planning round and invite proposals from the team @recurring(quarterly)"
                - "Work out capacity after leave, support load and maintenance"
                - "Write the one-page plan and review it with the product lead"
            - name: Quarterly team health check
              description: |-
                ## Purpose
                Engineers often tell a survey what they will not say in a one-to-one. A short anonymous health check each quarter, with the same eight to ten questions on workload, clarity, psychological safety, tooling and growth, shows trends over time and gives the team proof that raising something leads to change.

                ## Milestones
                1. A fixed set of eight to ten questions with a simple rating scale.
                2. The first round run with at least eighty percent of the team responding.
                3. Results shared back with the team within a week, including the uncomfortable ones.
                4. One or two actions chosen with the team and reported on next quarter.

                ## Notes
                Start from the **Feedback themes** template. With fewer than five people, anonymity is thin, so discuss results as a group instead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Four quarterly rounds over a year with at least eighty percent response, each followed by shared results and named actions."
                cadence: cyclic
              tasks:
                - "Choose eight to ten questions and fix the rating scale"
                - "Send the anonymous team health check @recurring(quarterly)"
                - "Share the results with the team within a week of closing"
                - "Agree one or two actions and add them to the team agenda"
            - name: Manager's Friday review
              description: |-
                ## Purpose
                Without a weekly pause, a manager's week becomes a list of reactions and the important but not urgent things, such as a promotion case or a struggling engineer, slip for months. Thirty minutes every Friday to review the week, check each report in your head, clear your inbox of decisions and choose next week's three priorities keeps you managing on purpose.

                ## Milestones
                1. A thirty-minute Friday slot held for eight weeks in a row.
                2. A short checklist covering people, delivery, stakeholders and your own learning.
                3. Three priorities written for the following week every Friday.
                4. Last week's priorities marked done or carried forward with a reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive Friday reviews completed, each producing three written priorities for the next week."
                cadence: rolling
              tasks:
                - "Write a one-page review checklist covering people, delivery and stakeholders"
                - "Run the Friday review and write next week's three priorities @recurring(weekly:fri)"
                - "Ask yourself which report you have thought about least this week"
                - "Mark last week's priorities done or carried with a reason"
            - name: Recognition and wins log
              description: |-
                ## Purpose
                The quiet work that keeps a team healthy, such as fixing the flaky build, mentoring a newcomer or untangling a support escalation, rarely gets noticed outside the team. Keeping a running log of wins, thanking people publicly and specifically, and passing the best ones up to leadership makes that work visible and gives everyone evidence for their next review.

                ## Milestones
                1. A shared wins log the whole team can add to.
                2. At least one specific public thank-you per engineer each quarter.
                3. The best wins included in leadership updates with names attached.
                4. A monthly check that recognition is spread fairly across the team.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every engineer receives at least one specific public recognition a quarter and the monthly fairness check runs for three months."
                cadence: rolling
              tasks:
                - "Create a shared wins log and invite the team to add to it"
                - "Thank someone publicly for a specific piece of glue work this week"
                - "Check who has and has not been recognised this month @recurring(monthly:27)"
                - "Copy the strongest wins into your next leadership update"
            - name: Giving specific behavioural feedback
              description: |-
                ## Purpose
                Vague feedback such as "be more senior" or "great job" helps no one and can feel unfair. Practising a simple structure, describing the situation, the behaviour you saw and its impact, then asking the person for their view, makes feedback easier to give, easier to hear and much more likely to change what happens next time.

                ## Milestones
                1. One feedback model learnt well enough to use without notes.
                2. Five pieces of positive feedback given using the structure.
                3. Three pieces of corrective feedback given within a week of the event.
                4. A note after each one on how it landed and what you would change.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight pieces of structured feedback delivered within a month, each followed by a written reflection on how it landed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a short guide to situation, behaviour and impact feedback"
                - "Write out three real examples from the last fortnight using the model"
                - "Deliver one piece of positive feedback with the structure this week"
                - "Deliver one corrective piece within a week of the event and reflect after"
            - name: Preparing for difficult conversations
              description: |-
                ## Purpose
                Most managers delay hard conversations about missed commitments, behaviour or disappointing review outcomes, and the delay makes them harder. Learning to prepare one properly, by writing the one sentence you need the person to hear, the evidence, the likely reactions and the outcome you want, lets you have the conversation early, calmly and fairly.

                ## Milestones
                1. A preparation template with headline, evidence, reactions and desired outcome.
                2. Two rehearsals with a peer manager or coach playing the other person.
                3. One real difficult conversation held within two weeks of deciding it was needed.
                4. A follow-up note sent to the person summarising what was agreed.

                ## Notes
                For anything touching misconduct, health or legal risk, speak to your HR partner before the conversation, not after.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one difficult conversation prepared on the template, rehearsed and held, with a written follow-up sent within a day."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-page preparation template for hard conversations"
                - "List the conversation you have been putting off longest"
                - "Rehearse it with a peer manager playing the other person"
                - "Hold the conversation and send a written summary the same day"
            - name: Coaching engineers with questions
              description: |-
                ## Purpose
                Former senior engineers turned managers tend to answer every technical question themselves, which is fast this week and leaves the team dependent on them for years. Practising coaching questions, such as what options have you considered, what would you do if I were not here, what is the riskiest part, builds engineers who can solve problems without you in the room.

                ## Milestones
                1. A list of ten coaching questions kept where you can see it during one-to-ones.
                2. A two-week trial of answering technical questions with a question first.
                3. Two engineers who now bring a proposed answer when they bring a problem.
                4. A note of the situations where telling, not coaching, was the right call.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-week coaching trial completed with a written log of at least ten coached conversations and the outcome of each."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write ten open coaching questions on a card or pinned note"
                - "Answer the next five technical questions with a question first"
                - "Log each coached conversation and what the engineer decided"
                - "Ask two engineers to bring a proposed answer with every problem"
            - name: Delegating with clear levels of authority
              description: |-
                ## Purpose
                Delegation fails when the engineer thinks they own a decision and the manager thinks they were only asked for a recommendation. Learning to state the level of authority when you hand something over, from investigate and report to decide and inform me afterwards, prevents both micromanagement and nasty surprises.

                ## Milestones
                1. A simple five-level delegation scale written and shared with the team.
                2. Every new piece of delegated work handed over with its level stated.
                3. Three tasks moved up a level as the engineer showed they were ready.
                4. No delegated decision reversed by you without first talking to the owner.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten delegated items in a month each handed over with a stated authority level, and at least three moved up a level."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a five-level delegation scale in plain language"
                - "Explain the scale to the team at the next team meeting"
                - "State the level explicitly on the next three things you hand over"
                - "Review delegated items at month end and raise levels where earned"
            - name: Managing up to your own manager
              description: |-
                ## Purpose
                Your manager decides much of what reaches your team, from headcount to deadlines, yet many engineering managers only talk to them when something is on fire. Learning what your manager is measured on, how they like to receive news and what they worry about lets you bring problems with options and get decisions faster.

                ## Milestones
                1. Your manager's top three goals for the half written in your own words.
                2. Their preferred format and timing for bad news agreed openly.
                3. Every escalation brought with at least two options and a recommendation.
                4. A quarterly conversation held about how you can make their job easier.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note of your manager's goals and preferences exists, and the last three escalations each came with options and a recommendation."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your manager what they are measured on this half"
                - "Ask how and when they want to hear bad news"
                - "Rewrite your next escalation with two options and a recommendation"
                - "Book a quarterly conversation about what would help them most"
            - name: Negotiating scope and dates with product
              description: |-
                ## Purpose
                Teams that say yes to every date and every feature end up shipping late and tired. Learning to negotiate, by separating the fixed date from the flexible scope, offering a smaller first version, naming what would have to be dropped and putting the trade-off in writing, protects the team's credibility and its evenings.

                ## Milestones
                1. A standard way of presenting options as scope, date and risk trade-offs.
                2. One upcoming commitment renegotiated with a smaller first release.
                3. Every agreed trade-off written down and shared with the product lead.
                4. Fewer late-stage scope additions over the following quarter than the last.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least two commitments agreed through written scope and date trade-offs, with the agreement shared with product in the same week."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a one-page options format showing scope, date and risk"
                - "Pick the next commitment where scope and date are in tension"
                - "Offer the product lead two smaller first versions to choose from"
                - "Send a written summary of the agreed trade-off the same day"
            - name: Engineering management reading programme
              description: |-
                ## Purpose
                Most engineering managers are promoted for technical skill and learn management by accident. A modest programme of one management book or a few long articles a month, with a short note on what you will try as a result, turns reading into changed behaviour rather than a growing pile of unread titles.

                ## Milestones
                1. A list of six books or long reads on engineering management chosen.
                2. One title finished each month for six months.
                3. One practice tried from each title and its result written down.
                4. Two of those practices kept as part of how you run the team.

                ## Notes
                Start from the **Reading queue** template. Mix classic people-management books with ones written by working engineering leaders.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six titles read over six months, each with a written note of one practice tried and whether it was kept."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask two experienced managers for their most useful management book"
                - "Build a reading list of six titles in priority order"
                - "Write a short note on one practice to try from this month's title @recurring(monthly:12)"
                - "Review which practices you kept at the end of six months"
            - name: Team meeting audit and cut
              description: |-
                ## Purpose
                Recurring meetings accumulate quietly, and a team of eight can lose forty hours a week to meetings nobody would create today. Auditing every recurring meeting, asking what decision or outcome it produces, and cutting, shortening or moving to writing the ones that do not earn their slot hands time straight back to engineering.

                ## Milestones
                1. Every recurring meeting the team attends listed with length, attendees and purpose.
                2. Each meeting rated by the team as keep, shorten, make async or stop.
                3. At least twenty percent of recurring meeting hours removed or shortened.
                4. A rule agreed that any new recurring meeting needs a stated purpose and end date.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Total recurring meeting hours for the team cut by at least twenty percent, with the before and after figures recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every recurring meeting the team attends with its total weekly cost"
                - "Ask the team to vote keep, shorten, async or stop on each"
                - "Cancel or change the meetings the team agreed to cut"
                - "Record the before and after meeting hours for the team"
            - name: Splitting a team that has outgrown itself
              description: |-
                ## Purpose
                Beyond about eight engineers, stand-ups drag, one-to-ones crowd the manager's week and nobody can hold the whole system in their head. Deciding whether and how to split, by product area, customer or system, with clear ownership and a lead for each half, is better done deliberately than after the team has already fractured informally.

                ## Milestones
                1. The signs of overload written down with evidence such as meeting length and review delays.
                2. Two or three ways of splitting compared on ownership, dependencies and people fit.
                3. A recommendation agreed with your manager and the product lead.
                4. Each engineer told their new team in a one-to-one before any group announcement.
                5. New charters and ownership maps published for both teams.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on whether and how to split the team, with both new teams having a charter and a named lead."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write down the evidence that the team has grown too large"
                - "Sketch two or three possible splits and their dependencies"
                - "Review the options with your manager and product lead"
                - "Tell each engineer about their placement one to one before announcing"
            - name: Deciding how much the manager codes
              description: |-
                ## Purpose
                Managers who code on the critical path become the blocker the moment a reorg or a hiring push takes their week, and those who never touch the code lose judgement. Deciding deliberately what kind of technical work you do, such as reviews, small fixes, spikes or none, and telling the team, sets clear expectations on both sides.

                ## Milestones
                1. Last month's time spent on hands-on technical work measured.
                2. A written choice of which technical work you will and will not do.
                3. A rule that you never own work on the critical path of a commitment.
                4. The decision explained to the team and revisited after a quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on your hands-on technical role, shared with the team, and no critical-path ticket assigned to you in the following quarter."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the hours you spent coding and reviewing last month"
                - "List the technical activities that help the team most when you do them"
                - "Write your decision and the rule about critical-path work"
                - "Explain the decision at the team meeting and invite questions"
            - name: Limiting work in progress across the team
              description: |-
                ## Purpose
                Six engineers with fifteen pieces of work started finish less than the same six with six items open, because every engineer is switching and waiting. Agreeing a work in progress limit, making it visible on the board and swarming on blocked items before starting new ones shortens cycle times and reduces the half-finished work that rots.

                ## Milestones
                1. The current number of items in progress counted and compared with team size.
                2. A team-wide limit agreed, usually close to the number of engineers.
                3. The limit shown on the board, with a rule for what happens when it is reached.
                4. Average time from start to done compared before and after six weeks.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agreed work in progress limit is visible on the board, and six weeks of before and after cycle time figures are recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count how many items are in progress right now and how old they are"
                - "Propose a work in progress limit at the team meeting"
                - "Add the limit to the board and agree what to do when it is hit"
                - "Compare start to done times after six weeks"
            - name: Fair share of interesting and glue work
              description: |-
                ## Purpose
                Without attention, the same people get the visible feature work while others quietly absorb support tickets, release chores and meeting notes, and the second group stalls at review time. Reviewing who did what over the last quarter and rebalancing on purpose is one of the most practical fairness moves a manager can make.

                ## Milestones
                1. Last quarter's work for each engineer sorted into visible project work and glue work.
                2. Any person carrying a clearly larger share of glue work identified.
                3. Next quarter's assignments adjusted so stretch work is spread more evenly.
                4. Glue work named and credited in reviews, not just assigned.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A quarterly allocation review exists for every engineer and the next quarter's plan gives each person at least one visible stretch item."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what each engineer worked on last quarter from the tracker"
                - "Mark each item as visible project work or glue work"
                - "Rebalance next quarter so each person has one stretch item"
                - "Add a line about glue work to each person's feedback log"
            - name: Async-first communication norms
              description: |-
                ## Purpose
                Teams spread across time zones, or simply full of people who need focus, lose hours to questions that could have waited for a written answer. Agreeing what goes in writing by default, how decisions are recorded, where long discussions live and when a call really is faster, cuts interruptions and gives people who were not in the room the same information.

                ## Milestones
                1. A short list of topics that are written first by default, such as proposals and status.
                2. One place agreed for decisions, and a habit of linking to it.
                3. A guideline for when to switch from a thread to a call.
                4. A month-on-month drop in ad hoc meetings recorded by the team.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published async norms page is in use and the team reports fewer ad hoc calls after one month than before."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the team which interruptions could have been a written message"
                - "Draft a one-page set of async norms and circulate it"
                - "Agree the single place where team decisions are recorded"
                - "Count ad hoc calls for a week before and a month after"
            - name: Stay conversations to reduce regretted leavers
              description: |-
                ## Purpose
                Exit interviews arrive too late to change anything. A stay conversation asks a valued engineer, while they are still happy enough to answer honestly, what keeps them here, what might tempt them away and what one change would make the next year better. Running one with every report once a year catches problems while there is still time to act.

                ## Milestones
                1. Five stay questions written and tested on one engineer.
                2. A stay conversation held with every report within a quarter.
                3. A private retention risk view noting any person likely to leave within a year.
                4. One concrete action agreed for each person flagged at risk.
              priority: medium
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Every report has had a stay conversation in the last twelve months and each person flagged at risk has a recorded action."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write five stay questions, including what would make you leave"
                - "Book a stay conversation separate from the usual one-to-one"
                - "Note any retention risk and one action for each person flagged"
                - "Repeat the stay conversations with the whole team @recurring(yearly)"
            - name: Performance review season preparation
              description: |-
                ## Purpose
                Reviews written the night before calibration are unfair to the engineer and painful for you. Starting six weeks out, gathering evidence from the feedback log, peer input and shipped work, drafting early and leaving time for calibration and delivery, produces reviews that are specific, defensible and contain no surprises.

                ## Milestones
                1. The company review timeline and rating guidance read and the dates in your calendar.
                2. Peer feedback requested for every report at least four weeks before drafts are due.
                3. A first draft for every engineer written from the feedback log and shipped work.
                4. Ratings checked for consistency across the team before calibration.
                5. Every review delivered in a dedicated conversation, with nothing in it the person has not heard before.
              priority: high
              deadlineOffsetDays: 42
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every report receives a written review delivered in person by the company deadline, drafted at least a week before calibration."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Put every review cycle deadline in your calendar with reminders"
                - "Ask each engineer to nominate two or three peers for feedback"
                - "Ask the agent to summarise each feedback log into themes for a first draft"
                - "Block time for each review delivery conversation after calibration"
            - name: Team offsite planning and delivery
              description: |-
                ## Purpose
                A day or two away from the usual channels lets a team reset relationships, settle long-running debates and plan the next half with more honesty than a video call allows. A good offsite has a small number of stated goals, a mix of work and social time, and a written set of outcomes that the team follows up afterwards.

                ## Milestones
                1. Two or three goals for the offsite agreed with the team.
                2. Venue, date, budget and travel confirmed, with accessibility and caring needs checked.
                3. An agenda balancing planning, problem-solving and social time.
                4. A written list of outcomes and owners shared within three days of returning.

                ## Notes
                Check dietary needs, travel limits and caring responsibilities privately; not everyone can travel or stay overnight.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An offsite held with a published agenda and a written outcomes list with owners shared within three days."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the team what two things the offsite should achieve"
                - "Get the budget approved and shortlist two dates"
                - "Draft the agenda and share it a week before"
                - "Write up outcomes and owners within three days of returning"
            - name: Handling a resignation and handover
              description: |-
                ## Purpose
                When an engineer resigns, the next two weeks decide whether knowledge walks out with them and whether the rest of the team worries who is next. A calm plan covering the conversation itself, what to tell the team and when, a handover of owned systems and relationships, and a warm send-off protects both the project and the relationship.

                ## Milestones
                1. The resignation acknowledged privately and HR informed the same day.
                2. Owned systems, rituals and relationships listed with new owners agreed.
                3. The team told in a way the leaving engineer has agreed to.
                4. Handover sessions recorded or written up before the last day.
                5. An exit conversation held and its lessons noted.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every system and relationship the leaver owned has a new named owner and written handover before their last day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Thank the engineer and ask how they want the team to be told"
                - "Inform HR and your manager on the same day"
                - "List everything they own from the ownership map and agree new owners"
                - "Schedule handover sessions for each system before their last day"
            - name: Announcing a reorganisation to the team
              description: |-
                ## Purpose
                Reorganisations go badly when people learn about them through rumour or a slide deck with no time for questions. Preparing the message, telling those most affected individually first, then the team together, with honest answers about what you do not yet know, keeps trust intact even when the news is unwelcome.

                ## Milestones
                1. The facts of the change and its reasons written in plain language.
                2. A list of the people most affected, each told individually before the group.
                3. A team session held with time reserved for questions.
                4. A written frequently asked questions note shared within a day.
                5. A follow-up one-to-one with every engineer in the following week.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every affected engineer told individually before the group session, and a written question and answer note shared within one day of it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the change and its reasons in five plain sentences"
                - "List who is most affected and book individual conversations first"
                - "Hold the team session and leave half the time for questions"
                - "Share a written question and answer note within a day"
            - name: Supporting the team through a launch crunch
              description: |-
                ## Purpose
                A big launch can pull a team into weeks of long days that leave people exhausted and resentful. Planning the human side, with agreed working hours, a clear stop rule for late nights, cover for parents and carers, food and thanks during the push and real recovery time afterwards, gets the launch out without spending the team's goodwill for the year.

                ## Milestones
                1. The crunch period given a fixed start and end date, agreed with leadership.
                2. A rule written for the latest anyone works and how extra hours are given back.
                3. Personal constraints such as childcare collected privately and planned around.
                4. Recovery days scheduled for the week after launch.
                5. A short review of the crunch held within a fortnight.

                ## Notes
                Release mechanics live with release management; this project is about the people doing the work.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A launch crunch with a written end date, hours rule and recovery days, followed by a review within two weeks."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree a firm end date for the extra push with leadership"
                - "Write the rule for latest working hours and time given back"
                - "Ask each engineer privately about constraints during the crunch"
                - "Book recovery days for the week after launch"
            - name: Annual headcount and budget request
              description: |-
                ## Purpose
                Headcount is usually decided once a year, and teams that turn up with a vague request get nothing. A written case linking each requested role to an outcome the company cares about, the cost of not hiring and the current load on the team gives your manager something they can defend in the planning room.

                ## Milestones
                1. Current team load documented with evidence such as support volume and delayed roadmap items.
                2. Each requested role tied to a named outcome and its business impact.
                3. Non-headcount needs such as tools, training and travel costed.
                4. A two-page case submitted to your manager before the planning deadline.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A two-page headcount and budget case with costed roles and outcomes submitted before the company planning deadline."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your manager for the planning deadline and the format they need"
                - "Gather evidence of current load from the tracker and support queue"
                - "Write a short case for each role tied to an outcome"
                - "Cost training, tooling and travel alongside the roles"
            - name: Moving from peer to manager of former teammates
              description: |-
                ## Purpose
                Being promoted to manage the people you used to code alongside changes every relationship overnight, even if nobody says so. Having an honest conversation with each former peer about what changes and what does not, stepping back from the technical decisions you used to own and finding a new peer group of managers makes the first ninety days far less awkward.

                ## Milestones
                1. An individual conversation held with every former peer about the change.
                2. A written list of decisions you used to own, each handed to a named engineer.
                3. A peer group of at least two other managers to talk to regularly.
                4. A review with your own manager at ninety days on how the transition is going.

                ## Notes
                Expect at least one former peer who wanted the role. Raise it kindly and directly rather than hoping it fades.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every former peer has had a transition conversation and every technical decision you used to own has a new named owner within ninety days."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Book a transition conversation with each former teammate"
                - "List the technical decisions you used to make yourself"
                - "Hand each decision to a named engineer and tell the team"
                - "Ask two other managers to meet for coffee every month"
            - name: Tech lead role without direct reports
              description: |-
                ## Purpose
                Tech leads are often expected to steer design, unblock people and keep delivery on track without any formal authority or a written role. Agreeing with the engineering manager exactly which decisions the lead owns, which stay with the manager and how the two of you split people and technical concerns prevents the classic double-management mess.

                ## Milestones
                1. A written split of responsibilities between the tech lead and the engineering manager.
                2. The split shared with the team so they know who to ask about what.
                3. A weekly sync between lead and manager agreed.
                4. A review of the split after one quarter, with changes recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A responsibility split between tech lead and manager is written, shared with the team and reviewed after one quarter."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the decisions and duties that are currently unclear between lead and manager"
                - "Draft a two-column split and agree it with the engineering manager"
                - "Present the split to the team at the next team meeting"
                - "Book a quarterly review of the split"
            - name: Leading a team across time zones
              description: |-
                ## Purpose
                When the team spans six or more hours, the people furthest from head office get the worst meeting times and miss the hallway decisions. Mapping overlap hours, rotating meeting times fairly, writing decisions down and giving each location clear ownership turns a distributed team into one team rather than a main office and satellites.

                ## Milestones
                1. A map of every engineer's working hours and the team's real overlap window.
                2. Recurring meetings that rotate times so no location always takes the late slot.
                3. Each location owning at least one area end to end.
                4. A visit or in-person meeting plan agreed within the year's budget.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A published overlap map exists, recurring meeting times rotate monthly and no location has taken the inconvenient slot more than half the time over a quarter."
                cadence: rolling
              tasks:
                - "Map every engineer's local working hours on one chart"
                - "Identify the overlap window and move key meetings into it"
                - "Rotate the time of the main team meeting between locations @recurring(monthly:1)"
                - "Give each location ownership of at least one area"
            - name: Getting more from your own one-to-ones
              description: |-
                ## Purpose
                Engineers often treat one-to-ones as something the manager runs, and then wonder why nothing changes for them. Coming with your own agenda, asking directly for feedback, raising career goals and blockers in writing, and following up on what was promised makes the meeting work for you, whatever your manager's style.

                ## Milestones
                1. A running agenda you own, updated before every meeting.
                2. One direct request for feedback each month with the answer written down.
                3. Your career goals stated clearly and a first step agreed with your manager.
                4. Every action your manager promised tracked and followed up kindly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your agenda was updated before every one-to-one for two months and contains at least two recorded pieces of feedback and an agreed career step."
                cadence: rolling
              tasks:
                - "Create a shared one-to-one agenda document if one does not exist"
                - "Add your topics to the agenda before your next one-to-one @recurring(weekly:wed)"
                - "Ask your manager what one thing would make your work more valuable"
                - "Write your career goal in one sentence and raise it this month"
            - name: Inheriting a struggling team
              description: |-
                ## Purpose
                Taking over a team with missed dates, low morale or a recent departure needs a different start from taking over a healthy one. Separating the immediate stabilising moves, such as cutting scope and fixing one painful process, from the slower trust-building work, and reporting honestly upward on the timeline, gives the team a chance to recover before anyone gives up on it.

                ## Milestones
                1. A written diagnosis of the top three causes, built from conversations rather than assumptions.
                2. At least one commitment renegotiated to give the team breathing room.
                3. One quick visible improvement the team asked for delivered within thirty days.
                4. A ninety-day recovery plan agreed with your manager, with honest milestones.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written diagnosis and ninety-day recovery plan agreed with your manager, with one team-requested improvement delivered in the first month."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask each engineer what one change would help most right now"
                - "Write a diagnosis of the top three causes of the team's struggles"
                - "Renegotiate the most unrealistic commitment with its stakeholder"
                - "Deliver the quickest improvement the team asked for"
            - name: Cover plan for the manager's extended leave
              description: |-
                ## Purpose
                Parental leave, a sabbatical or a long illness should not leave the team without someone to approve leave, run one-to-ones and speak for them. A cover plan naming who handles which duties, with written context for each report, open decisions and stakeholder notes, lets you switch off properly and gives an acting lead a real development opportunity.

                ## Milestones
                1. Every management duty listed with a named cover person.
                2. A short handover note for each report agreed with them.
                3. Open decisions and in-flight hiring written up with a recommended course.
                4. Stakeholders told who to contact and from when.
                5. A return plan for your first two weeks back.

                ## Notes
                Leave entitlements and any keeping-in-touch arrangements are set by your employer and local law; confirm them with HR rather than assuming.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cover plan with a named owner for every duty, a handover note per report and stakeholder notice is complete two weeks before leave starts."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every recurring duty you perform as manager"
                - "Agree a cover person for each duty with your own manager"
                - "Write a handover note for each report and share it with them"
                - "Tell stakeholders who to contact while you are away"
            - name: Supporting an engineer who is underperforming
              description: |-
                ## Purpose
                Underperformance handled late becomes a crisis for the engineer, the team and you. Acting early, by naming the gap clearly with examples, finding out whether the cause is skill, clarity, motivation or something outside work, agreeing a written support plan with check-ins and involving HR when a formal process is needed, is fairer to everyone.

                ## Milestones
                1. The performance gap described with dated, specific examples.
                2. A conversation held to understand the cause from the engineer's side.
                3. A written support plan with clear expectations, help offered and check-in dates.
                4. Fortnightly check-ins recorded, with progress or lack of it noted honestly.
                5. A clear outcome reached and documented, with HR involved where policy requires.

                ## Notes
                Follow your company's performance policy and involve HR before anything formal. Health or personal issues may need adjustments; ask HR rather than deciding alone.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written support plan with dated check-ins exists, every check-in is recorded and a documented outcome is reached within the agreed period."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write down three specific, dated examples of the performance gap"
                - "Speak to your HR partner about policy before the first formal step"
                - "Hold a conversation to hear the engineer's view of the cause"
                - "Agree a written support plan with fortnightly check-in dates"
            - name: Skip-level meetings for managers of managers
              description: |-
                ## Purpose
                Once you manage managers, you lose direct sight of how engineers actually experience the team. Regular skip-level conversations, in small groups or one to one, done in a way that supports rather than undermines the line manager, give you early warning of problems and let engineers see the wider organisation.

                ## Milestones
                1. A skip-level format agreed with each of your managers before the first session.
                2. Every engineer two levels down met at least once a quarter.
                3. Themes shared back with each manager without attributing comments.
                4. One organisational change made in response to skip-level themes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every engineer two levels down has had a skip-level conversation in the last quarter and themes were shared with their manager each time."
                cadence: rolling
              tasks:
                - "Agree the skip-level format and ground rules with each manager"
                - "Draw up a quarterly schedule that covers every engineer"
                - "Hold this month's skip-level sessions and note themes @recurring(monthly:18)"
                - "Share unattributed themes with the relevant manager"
            - name: Spotting and reducing burnout on the team
              description: |-
                ## Purpose
                Burnout rarely announces itself; it shows up as cancelled leave, late-night commits, shorter review comments and a quieter person in one-to-ones. Watching a few signals monthly, raising them early and privately, and changing workload rather than offering a wellness webinar is how managers actually prevent it.

                ## Milestones
                1. A short list of workload signals chosen, such as out-of-hours activity, pages and leave taken.
                2. A monthly check of those signals for every engineer.
                3. A private conversation held within a week whenever someone shows several signals.
                4. At least one workload change made as a result, such as moving a project or adding cover.

                ## Notes
                You are not a clinician. Point people to the employee assistance programme or their doctor where appropriate and focus on the workload you control.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly workload signal check has run for three months, and every engineer flagged was spoken to within a week."
                cadence: rolling
              tasks:
                - "Choose three or four workload signals you can see without surveillance"
                - "Review hours, pages and leave taken for each engineer @recurring(monthly:25)"
                - "Book a private check-in with anyone showing several signals"
                - "Find out how the employee assistance programme works and where to point people"
            - name: Resolving conflict between two engineers
              description: |-
                ## Purpose
                Two engineers who cannot work together slow every review and design discussion they share, and the rest of the team learns to route around them. Hearing each side separately, separating the technical disagreement from the personal friction, bringing them together with clear ground rules and agreeing specific behaviour changes resolves most conflicts before they need HR.

                ## Milestones
                1. Each engineer heard separately with notes of their account.
                2. The technical disagreement, if any, settled by a clear decision process.
                3. A joint conversation held with agreed ground rules.
                4. Two or three specific behaviour agreements written and shared with both.
                5. A check-in after a month on whether the agreements are holding.

                ## Notes
                If either account involves harassment, discrimination or safety, stop and involve HR immediately rather than mediating yourself.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Both engineers have agreed written behaviour commitments and a one-month check-in confirms they are holding or escalates the issue."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Meet each engineer separately and write down their account"
                - "Decide the open technical question through the team's normal process"
                - "Hold a joint conversation with ground rules agreed in advance"
                - "Book a one-month check-in on the agreements"
---

# Engineering Team Management

Managing engineers is mostly a handful of small routines done well and a few hard conversations done on time, and this area is written for the new or experienced engineering manager, and for the engineer who wants to get more from the person managing them. It starts with foundations (a listening tour, a team charter, working agreements, one-to-ones, a delivery baseline), then the weekly and monthly operating rhythm, the core skills of feedback, coaching, delegation and scope negotiation, decisions about meetings, team shape and how much the manager should code, dated events such as review season, offsites and resignations, situations like managing former peers or a remote team, and specialist work on underperformance, conflict, burnout and managing managers.

What repeats is weekly one-to-ones, a Tuesday team meeting, a Thursday feedback note, a Friday update and review, a monthly retrospective, meeting-load check, recognition round and skip-level, a quarterly planning cycle, health survey and ownership review, and a yearly round of stay conversations. The Person, 1:1, Development plan, Meeting notes, Feedback themes and Reading queue templates pair with the projects that keep a record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
