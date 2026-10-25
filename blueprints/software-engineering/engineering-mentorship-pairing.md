---
id: software-engineering.engineering-mentorship-pairing
name: Engineering Mentorship & Pairing
description: "Mentoring that has goals and a rhythm, pairing and mob sessions that actually spread knowledge, and the habits that let senior and junior engineers learn from each other on purpose."
category: business
version: 1.0.0
tags: [software-engineering, engineering-mentorship-pairing, engineer, manager, mentoring, pair-programming, mob-programming, knowledge-sharing]
author: Aurum Technology
starter_structure:
  templates:
    - development-plan
    - skills-matrix
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
        - name: Engineering Mentorship & Pairing
          description: "Growing engineers through mentoring, pair and mob programming, and deliberate knowledge sharing between senior and junior team members."
          projects:
            - name: Six-month mentoring goal statement
              description: |-
                ## Purpose
                Most mentoring stalls because nobody can say what the mentee is trying to get better at, so every session drifts into whatever broke that week. Writing two or three goals for the next six months, each tied to work you will actually do, gives a mentor something to steer by and gives you a way to tell whether it worked.

                ## Milestones
                1. Two or three goals written, each naming a skill and a piece of real work that will exercise it.
                2. Each goal has a visible sign of progress, such as leading a design review or owning a service's deploys.
                3. The goals shared with your manager so project choices can support them.
                4. A date six months out set to judge each goal as met, partly met or dropped.

                ## Notes
                Start from the **Development plan** template. Goals like "get better at backend" are too wide to mentor; "design and ship one queue-based job end to end" is mentorable.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written statement of two or three six-month goals, each linked to a real piece of work, shared with your manager and a mentor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the three pieces of work in the next quarter you most want to do well"
                - "Turn each into a goal naming the skill it would stretch"
                - "Write the visible sign of progress next to each goal"
                - "Share the goals with your manager and ask which projects fit them"
                - "Reread the goals and mark each as on track, stuck or changed @recurring(quarterly)"
            - name: Finding a mentor outside your reporting line
              description: |-
                ## Purpose
                Your manager judges your performance, which makes it hard to admit what you do not understand. A mentor from another team, a senior engineer you admire or someone at another company can hear the half-formed questions and give advice with no stake in your rating.

                ## Milestones
                1. A shortlist of three possible mentors, each with a sentence on what you would learn from them.
                2. A short, specific request sent to the first choice, naming your goals and the time you are asking for.
                3. A yes, or a referral to someone better placed, recorded.
                4. A first session booked within two weeks of the yes.

                ## Notes
                Ask for a trial of three sessions rather than an open-ended commitment. A bounded request is much easier to say yes to.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A named mentor outside your reporting line has agreed to at least three sessions and the first one is in the calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down three engineers whose work you would like to learn from"
                - "Note what specifically you would ask each of them about"
                - "Send a short request to your first choice offering three trial sessions"
                - "Book the first session as soon as someone agrees"
            - name: Mentoring working agreement and first session
              description: |-
                ## Purpose
                The first conversation sets expectations that are awkward to change later: how often you meet, who sets the agenda, what stays private and how either side ends it. Agreeing these in writing at the start prevents the slow fade where sessions get cancelled and nobody says why.

                ## Milestones
                1. A first session held where both sides shared background and what they hope to get from it.
                2. A one-page agreement covering frequency, length, agenda ownership, confidentiality and how to pause or end.
                3. The mentee's goals read and questioned by the mentor.
                4. The next three sessions booked as recurring calendar events.

                ## Notes
                Make the mentee own the agenda. Mentors who prepare every session end up lecturing, and mentees who bring nothing learn little.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written mentoring agreement both people have read, with the next three sessions already booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Send your goals to the mentor two days before the first session"
                - "Agree frequency, length and who sets the agenda during the session"
                - "Write down what stays confidential and how either side can end it"
                - "Book the next three sessions as a recurring calendar event"
            - name: Pairing environment ready on your machine
              description: |-
                ## Purpose
                Ten minutes lost to screen-share lag, an unreadable font size or a missing audio headset at the start of every pairing session adds up to hours a month and quietly kills the habit. Getting your editor's live-share extension, a decent headset and a large readable font set up once removes the friction before it starts.

                ## Milestones
                1. A collaborative editing extension or shared terminal tool installed and tested with a colleague.
                2. A headset with a microphone that sounds clear on a call.
                3. A pairing font size and high-contrast theme saved as a profile you can switch to in one step.
                4. A trial session where the other person drove on your machine without asking you to fix anything.

                ## Notes
                Remote pairing with screen sharing alone means only one person can type. A tool that gives both people a cursor makes switching roles far easier.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A 30-minute trial pairing session completed where both people typed on the shared environment without setup problems."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Install a collaborative editing extension in your main editor"
                - "Save a pairing profile with a large font and high-contrast theme"
                - "Test your headset on a call and replace it if colleagues struggle to hear"
                - "Run a 30-minute trial pairing session with a colleague driving"
            - name: Personal skills map for mentoring sessions
              description: |-
                ## Purpose
                Mentees often ask for help with whatever feels urgent and miss the gaps that are holding them back. Rating yourself honestly across a dozen skills, from reading unfamiliar code to estimating and writing design docs, then asking your mentor to rate you too, shows where sessions should spend their time.

                ## Milestones
                1. A list of ten to fifteen skills relevant to your role, each with a one-line description.
                2. Your own rating of each on a simple four-point scale.
                3. Your mentor's rating beside yours, with the biggest disagreements circled.
                4. Two skills chosen as the focus for the next quarter of sessions.

                ## Notes
                Start from the **Skills matrix** template. The disagreements matter more than the scores: they show where your picture of yourself is off.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A skills map with both your rating and your mentor's for each skill, and two focus skills named for the quarter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List ten to fifteen skills your role really uses"
                - "Rate yourself on each from one to four"
                - "Ask your mentor to rate you without seeing your scores"
                - "Pick the two skills with the biggest gap or disagreement to focus on"
                - "Rerate yourself and compare with last time @recurring(quarterly)"
            - name: Mentoring session notes system
              description: |-
                ## Purpose
                Advice given in a session is forgotten within a week unless someone writes it down, and the same question gets asked three months later. A single running notes page per relationship, with the question, the advice and what you tried, turns sessions into a record you can both look back on.

                ## Milestones
                1. One running notes page per mentoring relationship, kept by the mentee.
                2. A fixed structure for each entry: date, topics, advice, actions, outcome of last actions.
                3. Notes shared with the mentor so they can read them before the next session.
                4. Three sessions recorded in the new format.

                ## Notes
                Start from the **Meeting notes** template. Keep private reflections in a separate page if the shared one would make you hold back.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared running notes page with at least three dated session entries, each listing actions and the outcome of the previous ones."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create one running notes page for each mentoring relationship"
                - "Add headings for topics, advice, actions and outcome of last actions"
                - "Share the page with your mentor and ask them to read it before sessions"
                - "Fill in the outcome of last time's actions at the start of each entry"
            - name: Team pairing working agreement
              description: |-
                ## Purpose
                Pairing fails on small things: one person hogging the keyboard, no breaks for two hours, someone checking messages while the other talks, or a pair that never asks whether the other person even wanted to pair. A one-page team agreement on roles, breaks, switching, and opting out makes pairing feel safe enough to keep doing.

                ## Milestones
                1. A team discussion where people shared what has made pairing good and bad for them.
                2. A written agreement covering role switching, break intervals, notifications, and how to decline or end a session.
                3. The agreement linked from the team's working-practices page.
                4. A review date set after one month of using it.

                ## Notes
                Include a clear way to say no. Pairing that people feel they cannot refuse turns into resentment, especially for introverts and people with caring duties at odd hours.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page pairing agreement agreed by the whole team and linked from its working-practices page, with a one-month review date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each teammate for one good and one bad pairing experience"
                - "Draft rules on switching roles, breaks and notifications"
                - "Add a plain way to decline or end a pairing session"
                - "Agree the draft in a team meeting and link it from the team page"
            - name: When to pair and when to work solo
              description: |-
                ## Purpose
                Routine changes waste two people's time when paired, yet a no-pairing team leaves risky or unfamiliar work to one person. A short team rule of thumb, for example pair on unfamiliar codebases, security-sensitive changes and onboarding tickets, solo on well-understood chores, makes the choice quick and consistent.

                ## Milestones
                1. A list of the last twenty tickets, each marked as one that would or would not have benefited from pairing.
                2. Three or four criteria that predict when pairing pays off.
                3. The criteria written into the team's ticket template as a pair-or-solo prompt.
                4. One sprint where the criteria were used and the results discussed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written pair-or-solo criteria added to the ticket template and used for one full sprint, with a short retrospective note."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the last twenty closed tickets into a list"
                - "Mark which ones a pair would have finished better or faster"
                - "Write three or four criteria from the pattern you see"
                - "Add a pair-or-solo prompt to the ticket template"
            - name: Mentor readiness check before taking a mentee
              description: |-
                ## Purpose
                Saying yes to a mentee while already overloaded leads to cancelled sessions that do more harm than a polite no. Checking your available hours, the topics you can genuinely help with and the ones you cannot, before agreeing, means you start with a realistic offer.

                ## Milestones
                1. Your realistic monthly hours for mentoring written down after looking at your calendar.
                2. A list of topics you can mentor well and a list you would refer elsewhere.
                3. A short mentor profile a mentee or programme can read.
                4. A decision to take one mentee, take none for now, or offer office hours instead.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written mentor profile listing available hours, strong topics and referral topics, and a recorded decision on taking a mentee."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look at the last month of your calendar and count truly free hours"
                - "List topics you can mentor on with confidence"
                - "List topics you would rather refer to someone else"
                - "Write a five-line mentor profile from those lists"
            - name: Twice-monthly mentoring session rhythm
              description: |-
                ## Purpose
                Mentoring works through repetition: small adjustments every two weeks beat a long conversation every quarter. A fixed twice-monthly slot, protected like any other meeting and with the mentee bringing a written agenda, keeps the relationship moving when work gets busy.

                ## Milestones
                1. Two sessions a month in the calendar, at the same times, for the next six months.
                2. An agenda sent by the mentee at least a day before each session.
                3. No more than one session in a quarter cancelled without being moved.
                4. Actions from each session recorded and checked at the next.

                ## Notes
                Thirty to forty-five minutes is enough. Longer sessions tend to wander.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten of the twelve sessions scheduled in a six-month period held, each with a written agenda and recorded actions."
                cadence: rolling
              tasks:
                - "Book two recurring mentoring slots a month for the next six months"
                - "Send the agenda for the early-month session a day ahead @recurring(monthly:8)"
                - "Send the agenda for the late-month session a day ahead @recurring(monthly:22)"
                - "Move rather than cancel any session that clashes with other work"
            - name: Weekly protected pairing block
              description: |-
                ## Purpose
                Ad hoc pairing that happens only when someone is stuck becomes a rescue service rather than a way to learn. A standing two-hour block each week where you pair with a different colleague on real work builds the habit and spreads knowledge of the codebase steadily.

                ## Milestones
                1. A two-hour pairing block in your calendar every week, marked as focus time.
                2. A partner and a ticket chosen by the day before each block.
                3. At least three different partners paired with in the first two months.
                4. A one-line note after each block on what either of you learned.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly pairing blocks held on at least eight of ten consecutive weeks, with three or more different partners."
                cadence: rolling
              tasks:
                - "Block two hours a week in your calendar for pairing"
                - "Pick a partner and a ticket for the next pairing block @recurring(weekly:tue)"
                - "Write one line after each block on what was learned"
                - "Count your distinct pairing partners at the end of each month"
            - name: Friday team mob programming session
              description: |-
                ## Purpose
                Mob programming, with the whole team at one screen and one person typing, is the fastest way to align on how a tricky area of the code should work and to share it with everyone at once. A weekly 90-minute session on a real ticket, with a strict rotation timer, keeps it focused and stops it turning into a meeting.

                ## Milestones
                1. A weekly 90-minute slot the whole team has accepted.
                2. A rotation timer in use, with the typist changing every ten minutes or so.
                3. A real ticket picked in advance for each session, ideally one that touches a poorly understood area.
                4. A short retrospective after the first four sessions, with changes agreed.

                ## Notes
                The typist only types what the group directs; ideas go through the mob, not the keyboard. That rule is what makes it work.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Mob sessions held on at least six of eight Fridays, each on a real ticket and with a rotation timer, plus one retrospective."
                cadence: rolling
              tasks:
                - "Book a weekly 90-minute mob slot for the whole team"
                - "Install a mob rotation timer that everyone can see"
                - "Choose the ticket for this week's mob session @recurring(weekly:fri)"
                - "Run a short retrospective after the fourth session"
            - name: Weekly learning log for mentees
              description: |-
                ## Purpose
                Mentees rarely notice their own progress, which makes it hard to bring useful topics to sessions or to talk about growth later. Five minutes each week writing what you learned, what confused you and what you want to ask turns into a ready-made agenda and a record of how far you have come.

                ## Milestones
                1. A learning log with a weekly entry of three short lines: learned, confused by, want to ask.
                2. Twelve consecutive weekly entries.
                3. Questions from the log used to build at least four session agendas.
                4. A quarterly reread that picks out the three biggest things learned.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly log entries exist and at least four mentoring agendas drew on them."
                cadence: rolling
              tasks:
                - "Create a learning log page with three headings"
                - "Write this week's learned, confused-by and want-to-ask lines @recurring(weekly:thu)"
                - "Copy the want-to-ask lines into your next mentoring agenda"
                - "Reread the last three months and list the three biggest things learned"
            - name: Monthly internal tech talk series
              description: |-
                ## Purpose
                A lot of what senior engineers know never gets written down because nobody asks for it. A monthly 30-minute talk, given by a different person each time and recorded, moves that knowledge out of one head and gives less experienced engineers a low-stakes first chance to present.

                ## Milestones
                1. A speaker rota covering the next six months, mixing senior and junior speakers.
                2. A recurring 30-minute slot that most of the team can attend.
                3. Each talk recorded and linked from one index page.
                4. At least two talks given by engineers who had never presented before.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly talks held and recorded on one index page, with at least two given by first-time speakers."
                cadence: rolling
              tasks:
                - "Ask five people to give a 30-minute talk in the next six months"
                - "Book a recurring monthly talk slot"
                - "Confirm the speaker and topic for this month's talk @recurring(monthly:14)"
                - "Add each recording to the talk index page"
            - name: Pair rotation schedule across the team
              description: |-
                ## Purpose
                Left alone, people pair with the same one or two friends, so knowledge stays in clusters and newer engineers get left out. A simple monthly rotation, so everyone pairs with everyone over a quarter, spreads context and builds working relationships across seniority levels.

                ## Milestones
                1. A rotation grid showing which pairs meet each week for the next quarter.
                2. Every engineer paired with at least half the team by the end of the quarter.
                3. New starters paired with the most experienced people in their first month.
                4. A tally of pairings shared at the quarterly retrospective.

                ## Notes
                Rotation is a default, not a rule. If a pair is deep in a hard problem, let them keep going and swap next week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A published rotation grid for the quarter, with every engineer having paired with at least half the team by its end."
                cadence: rolling
              tasks:
                - "List everyone on the team in a rotation grid"
                - "Fill in pairings for the next four weeks so no pair repeats"
                - "Publish next month's pairings in the team channel @recurring(monthly:3)"
                - "Count each engineer's distinct partners at quarter end"
            - name: Quarterly mentoring relationship review
              description: |-
                ## Purpose
                Mentoring relationships can carry on for months after they stop helping, out of politeness on both sides. A quarterly conversation about what has changed, whether the goals still fit and whether to continue, refocus or end gives both people permission to be honest.

                ## Milestones
                1. Progress against each goal reviewed with examples from real work.
                2. A decision recorded: continue, change focus, reduce frequency or end.
                3. Updated goals written if the relationship continues.
                4. Feedback exchanged both ways on how the sessions are run.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter ends with a recorded continue, refocus or end decision and two-way feedback on the sessions."
                cadence: cyclic
              tasks:
                - "Gather examples of progress on each goal from the last quarter"
                - "Hold the review conversation and record the decision @recurring(quarterly)"
                - "Ask your mentor what you could do to make sessions more useful"
                - "Rewrite the goals if the relationship is continuing"
            - name: Mentoring and pairing feedback themes
              description: |-
                ## Purpose
                Single comments after a session are easy to dismiss, but the same note from five people is a pattern. Collecting short feedback from pairing partners and mentees each month and grouping it into themes shows what you do well as a teacher and partner, and what keeps getting in the way.

                ## Milestones
                1. A two-question feedback request sent to recent pairing partners or mentees.
                2. Responses grouped into a handful of named themes.
                3. One theme chosen to work on in the next month.
                4. Three months of themes compared to see what has shifted.

                ## Notes
                Start from the **Feedback themes** template. Ask "what should I keep doing" and "what should I change"; open questions get more honest answers than ratings.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Three months of grouped feedback themes recorded, each month with one theme chosen to work on."
                cadence: rolling
              tasks:
                - "Write a two-question feedback request for pairing partners"
                - "Send it to this month's partners and sort replies into themes @recurring(monthly:26)"
                - "Pick one theme to work on next month"
                - "Compare three months of themes side by side"
            - name: Senior engineer office hours
              description: |-
                ## Purpose
                Junior engineers often sit stuck for a day rather than interrupt someone senior who looks busy. A weekly hour where a senior engineer is explicitly available for questions, code walkthroughs and quick pairing turns those interruptions into an expected, unhurried slot.

                ## Milestones
                1. A weekly one-hour office hours slot announced to the team.
                2. A shared sign-up list so people can say in advance what they want to look at.
                3. At least four sessions in the first two months with someone attending.
                4. A short list of the most asked questions, turned into notes for the team wiki.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Weekly office hours run for two months with attendance in at least four sessions and a written list of common questions."
                cadence: rolling
              tasks:
                - "Choose a weekly hour and announce office hours to the team"
                - "Create a sign-up list where people note their question"
                - "Check the sign-up list and prepare for office hours @recurring(weekly:wed)"
                - "Write up the three most asked questions for the team wiki"
            - name: Driver and navigator role practice
              description: |-
                ## Purpose
                Many people who say they pair are really watching someone else code. Practising the driver and navigator split properly, where the navigator thinks ahead about design and the driver focuses on the next few lines, and swapping every 15 to 25 minutes, makes both people work and both people learn.

                ## Milestones
                1. The roles and their responsibilities explained in a sentence each, in your own words.
                2. Five pairing sessions using a timer to swap roles.
                3. A note after each session on where the roles blurred or broke down.
                4. A comfortable swap interval found that both partners agree on.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five timed driver and navigator sessions completed, with notes on breakdowns and an agreed swap interval."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write one sentence on what each role is responsible for"
                - "Set a 20-minute swap timer for your next pairing session"
                - "Note where the navigator started dictating keystrokes"
                - "Agree a swap interval with your regular partners"
            - name: Strong-style pairing with a less experienced partner
              description: |-
                ## Purpose
                In strong-style pairing, an idea must go through someone else's hands: the navigator with the idea explains it, and the driver types it. When the senior person navigates and the junior person drives, the junior gets the keyboard time and the senior has to explain intent instead of silently coding, which is where most of the teaching happens.

                ## Milestones
                1. The strong-style rule explained to a partner before starting.
                2. Three sessions where the more experienced person navigated and never touched the keyboard.
                3. Navigation pitched at the right level: intent first, then location, then detail only when needed.
                4. The junior partner's view of the sessions recorded.

                ## Notes
                Start navigation at the highest level the driver can act on, such as "we need a guard for empty input", and only drop to specific keystrokes if they are stuck.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three strong-style sessions completed with the senior navigating throughout and the junior partner's feedback recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Explain the strong-style rule to your partner before starting"
                - "Navigate a full session without touching the keyboard"
                - "Notice when you dropped to keystroke-level instructions and why"
                - "Ask your partner whether the level of instruction felt right"
            - name: Asking for help well as a mentee
              description: |-
                ## Purpose
                Vague questions like "it doesn't work" cost both people time, and fear of looking slow keeps juniors silent for hours. Learning to time-box being stuck, then ask with context, what you tried and what you expected, gets faster answers and earns more of a senior's time.

                ## Milestones
                1. A personal time-box for being stuck before asking, for example 30 to 60 minutes.
                2. A short question format: goal, what happened, what you expected, what you tried.
                3. Ten questions asked using the format, with the response time noted.
                4. A mentor's view on whether the questions got clearer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Ten help requests sent in the four-part format within a time-box, and your mentor has commented on the change."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick a stuck time-box you will hold yourself to"
                - "Write the four-part question format somewhere you will see it"
                - "Use the format for your next ten help requests"
                - "Ask your mentor whether your questions have become easier to answer"
            - name: Teaching with questions instead of answers
              description: |-
                ## Purpose
                Giving the answer is quicker today and slower forever, because the mentee learns where to find you rather than how to think. Practising questions like "what would you check first?" or "what does the error actually say?" builds a junior's own debugging and design reasoning.

                ## Milestones
                1. A short bank of ten guiding questions for debugging, design and code reading.
                2. Five mentoring or pairing sessions where you asked before you told.
                3. A note on each session of when a question worked and when telling was the better call.
                4. A personal rule for when to just give the answer, for example under incident pressure.

                ## Notes
                Questions are not always better. When production is down or the mentee is exhausted, give the answer and explain afterwards.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written bank of ten guiding questions used across five sessions, plus a written rule for when to give direct answers."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write ten guiding questions for debugging, design and code reading"
                - "Keep the question bank open during your next mentoring session"
                - "Note one moment per session where a question beat an answer"
                - "Write your rule for when to give the answer directly"
            - name: Ping-pong test-driven pairing
              description: |-
                ## Purpose
                Ping-pong pairing splits test-driven development between two people: one writes a failing test, the other makes it pass and writes the next failing test. It keeps both people engaged, forces small steps and is one of the best ways to teach testing habits without a lecture.

                ## Milestones
                1. A small kata or real ticket picked that suits test-first work.
                2. Three ping-pong sessions completed with strict alternation.
                3. Steps kept small enough that each turn takes under five minutes.
                4. A short note on what each partner learned about testing or design.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three ping-pong pairing sessions completed with strict turn-taking and a written note of lessons from each partner."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose a kata or small ticket suited to test-first work"
                - "Agree the ping-pong rules with your partner before starting"
                - "Keep each turn under five minutes during the session"
                - "Write down one testing lesson each of you took away"
            - name: Explaining a system at the whiteboard
              description: |-
                ## Purpose
                Senior engineers often understand a system so well that they skip the steps a newcomer needs. Practising a 20-minute whiteboard or diagram walk-through of one service, starting from a user request and following it through, is a teaching skill that pays off in every mentoring session and design discussion.

                ## Milestones
                1. One service chosen and its request path sketched on a single page.
                2. A 20-minute walk-through given to a less experienced engineer.
                3. The listener's questions noted as gaps in the explanation.
                4. A revised diagram saved where the team can find it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page diagram of a service's request path, revised after a 20-minute walk-through with a less experienced engineer."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose one service and sketch a single request path through it"
                - "Give a 20-minute walk-through to a less experienced engineer"
                - "Write down every question they asked"
                - "Redraw the diagram to answer those questions"
            - name: Mentoring and pairing reading list
              description: |-
                ## Purpose
                There is a good body of writing on pair and mob programming, technical mentoring and teaching programmers, and most engineers have read none of it. A short reading list worked through at one item a month gives you names for things you already half do and techniques you have not tried.

                ## Milestones
                1. A list of six books, articles or talks on pairing, mobbing and mentoring.
                2. One item finished each month.
                3. One technique from each item tried in a real session.
                4. Short notes on what worked, kept with the list.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six items on mentoring and pairing read over six months, each with one technique tried and a note on the result."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask two experienced engineers for their favourite writing on pairing"
                - "Build a reading queue of six items"
                - "Read this month's item and note one technique to try @recurring(monthly:11)"
                - "Record how the technique went in a real session"
            - name: Choosing a remote pairing tool for the team
              description: |-
                ## Purpose
                A team where everyone uses a different screen-sharing or co-editing tool spends the first ten minutes of every session working out how to connect. Comparing two or three options on latency, editor support, security approval and cost, then standardising, removes that friction for good.

                ## Milestones
                1. Three candidate tools shortlisted, including whatever the company already licenses.
                2. Each tested in a real pairing session by at least two people.
                3. Security and licensing questions answered by the right internal team.
                4. One tool chosen and a setup guide written for the team.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One remote pairing tool chosen after real-session tests of three options, with security sign-off and a setup guide published."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the pairing tools the team already uses and any the company licenses"
                - "Shortlist three and test each in a real session"
                - "Ask the security team whether the preferred tool is approved"
                - "Write a one-page setup guide for the chosen tool"
            - name: Checking whether pairing is paying off
              description: |-
                ## Purpose
                Two people on one ticket is a visible cost, and a sceptical manager or teammate will ask whether it is worth it. Tracking a few honest signals, such as review turnaround on paired changes, defects found later, and how many people can now work in each area, gives a grounded answer instead of opinions.

                ## Milestones
                1. Three signals chosen that the team can measure without new tooling.
                2. A baseline taken from the quarter before pairing increased.
                3. The same signals measured after a quarter of regular pairing.
                4. A short write-up shared with the team and manager.

                ## Notes
                Do not judge pairing on lines of code or tickets closed per person; it will always look worse on those and better on what matters.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A before and after comparison of three agreed signals across one quarter, shared with the team and manager."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Agree three signals the team can measure from existing tools"
                - "Record a baseline for each from last quarter"
                - "Measure the signals again and write a short comparison @recurring(quarterly)"
                - "Share the comparison at the team retrospective"
            - name: Knowledge silo map and pairing targets
              description: |-
                ## Purpose
                Every team has a service, a deploy script or a billing integration that only one person really understands, and it becomes a crisis the week they are on holiday. Mapping who knows each area and pairing deliberately on the riskiest single-person areas turns pairing into risk reduction.

                ## Milestones
                1. A grid of the team's main components against who could change each confidently.
                2. Areas with only one confident person marked as silos.
                3. A pairing target set for the top three silos, with a second person named for each.
                4. A refreshed map showing at least two silos closed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A component-by-person knowledge map exists and at least two single-person areas now have a second confident engineer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the team's main components and services"
                - "Ask each engineer which they could change confidently today"
                - "Name a second person to pair into each of the top three silos"
                - "Refresh the knowledge map and mark silos closed @recurring(quarterly)"
            - name: Designing a team mentoring programme
              description: |-
                ## Purpose
                Informal mentoring tends to reach the confident and well-connected and miss the quiet engineer who needs it most. A light programme with opt-in sign-up, matching, a six-month cycle and a short check-in on how it went makes mentoring available to everyone on the team or department.

                ## Milestones
                1. A one-page programme outline with purpose, cycle length, time commitment and opt-out route.
                2. A sign-up form for mentors and mentees with goals and availability.
                3. A first cohort matched and introduced.
                4. An end-of-cycle survey and a short report on what to change.

                ## Notes
                Keep mentoring separate from performance reviews. If mentees think their mentor reports on them, they stop being honest.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A first cohort of matched mentoring pairs has completed a six-month cycle and an end-of-cycle report has been shared."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write a one-page outline of the mentoring programme"
                - "Build a sign-up form asking for goals and availability"
                - "Match the first cohort and send introductions"
                - "Run an end-of-cycle survey and write up the changes"
            - name: Matching mentors and mentees fairly
              description: |-
                ## Purpose
                Matching by who knows whom repeats existing networks, and matching by seniority alone ignores what the mentee is trying to learn. A simple scoring of goals against mentor strengths, availability and time zone, with a check for conflicts like reporting lines, gives better pairs and a process people trust.

                ## Milestones
                1. Matching criteria written down and ordered by importance.
                2. Reporting-line and conflict-of-interest exclusions defined.
                3. Each proposed pair scored against the criteria.
                4. A swap route for pairs that do not click after two sessions.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Written matching criteria with exclusions have been used to form each pair, and a no-fault swap route is published."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the matching criteria in order of importance"
                - "Define which relationships rule out a match"
                - "Score each proposed pair against the criteria"
                - "Publish a no-fault way to swap after two sessions"
            - name: Restarting a mentoring relationship that has stalled
              description: |-
                ## Purpose
                Sessions slipping from every two weeks to every two months is the most common way mentoring ends, usually without anyone deciding it should. Naming the stall, finding the cause, whether goals went stale, the mentor got busy or the sessions stopped feeling useful, and choosing to reset or close it properly, is better than letting it fade.

                ## Milestones
                1. The date of the last three sessions checked to confirm the slide.
                2. A direct, blame-free message sent asking whether to reset or close.
                3. The cause named in the conversation that follows.
                4. A reset plan with new goals and dates, or a closing session booked.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A stalled relationship has a recorded reset plan with new session dates, or has been closed with a final session."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the dates of your last three mentoring sessions"
                - "Send a short message asking whether to reset or wrap up"
                - "Talk through what caused the slide"
                - "Book new sessions or a closing conversation"
            - name: Making mentoring time visible in team capacity
              description: |-
                ## Purpose
                When mentoring and pairing are invisible, they look like lower output from senior engineers and get squeezed out first under deadline pressure. Counting mentoring hours explicitly in sprint capacity, and saying so in planning, protects the time and makes the cost an honest, agreed choice.

                ## Milestones
                1. Each senior engineer's mentoring and office hours estimated per sprint.
                2. Those hours subtracted from capacity in sprint planning.
                3. The manager and product partner briefed on why.
                4. A monthly check that the planned hours were actually spent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Mentoring hours are a named line in sprint capacity for three consecutive sprints and checked monthly against actual time."
                cadence: rolling
              tasks:
                - "Ask each senior engineer how many hours they spend mentoring per sprint"
                - "Add mentoring hours as a line in sprint capacity"
                - "Explain the change to the product partner"
                - "Compare planned and actual mentoring hours @recurring(monthly:19)"
            - name: First team mob programming day
              description: |-
                ## Purpose
                A full day of mobbing on one meaningful problem, such as a gnarly bug or a small feature in an unfamiliar area, shows a team what mobbing can do far better than an hour ever can. Planning the problem, the room or call, the rotation and the breaks in advance stops it collapsing into a long meeting.

                ## Milestones
                1. A problem chosen that is real, contained and benefits from many eyes.
                2. A date agreed with the whole team and calendars cleared.
                3. A facilitator, rotation timer and break schedule set up.
                4. A retrospective held at the end with a decision on whether to repeat.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full mob programming day held with the whole team on a chosen problem, followed by a retrospective and a repeat decision."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick a contained, real problem suited to a full day of mobbing"
                - "Agree a date and ask everyone to clear their calendars"
                - "Name a facilitator and plan breaks every 50 minutes"
                - "Run a retrospective at the end of the day"
            - name: Pair-on-everything week experiment
              description: |-
                ## Purpose
                Teams argue for months about whether pairing is worth it without ever trying it properly. A one-week experiment where every ticket is paired, with a few agreed signals measured before and after, gives the team its own evidence and a feel for where pairing helps and where it drags.

                ## Milestones
                1. A week chosen with no major release or on-call crunch.
                2. Signals agreed beforehand, such as review wait time, rework and how people felt.
                3. Every ticket that week worked on by a pair.
                4. A team retrospective and a written decision on how much to pair afterwards.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A full week of paired work completed and a written team decision on future pairing, backed by the agreed signals."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a quiet week for the experiment"
                - "Agree three signals to compare before and after"
                - "Pair every ticket that week"
                - "Hold a retrospective and record the team's decision"
            - name: Shadow day with a staff engineer
              description: |-
                ## Purpose
                Much of what senior engineers do, deciding what not to build, unblocking other teams, reading a design doc for risk, is invisible from inside a ticket queue. Spending a day shadowing a staff or principal engineer, with permission and a debrief, shows a mid-level engineer what that work looks like.

                ## Milestones
                1. A staff or principal engineer agreed to be shadowed for a day.
                2. Questions prepared in advance about how they choose what to work on.
                3. Notes taken through the day on meetings, decisions and interruptions.
                4. A debrief held and three takeaways written down.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A shadow day completed with a debrief and three written takeaways about senior engineering work."
                cadence: one-shot
                effort_hours_estimate: "9"
              tasks:
                - "Ask a staff or principal engineer whether you can shadow them for a day"
                - "Prepare five questions about how they choose their work"
                - "Take notes on each meeting and decision during the day"
                - "Write three takeaways after the debrief"
            - name: Coaching a mentee through their first talk
              description: |-
                ## Purpose
                Giving a first internal talk or meetup presentation is one of the fastest confidence builders for a junior engineer, and one of the most nerve-racking. A mentor who helps pick the topic, reviews the outline and runs a rehearsal turns a scary one-off into a good experience they will want to repeat.

                ## Milestones
                1. A topic chosen that the mentee knows well from their own work.
                2. An outline reviewed by the mentor with three concrete suggestions.
                3. A full rehearsal held with timing and feedback.
                4. The talk given and a short debrief held within a week.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The mentee has given a talk after one outline review and one timed rehearsal, and a debrief has been held."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Brainstorm three talk topics drawn from the mentee's recent work"
                - "Review the outline and give three concrete suggestions"
                - "Run a timed rehearsal with one or two friendly listeners"
                - "Hold a debrief within a week of the talk"
            - name: Closing session for a mentoring relationship
              description: |-
                ## Purpose
                Good mentoring relationships should end on purpose, once the goals are met or the mentee has outgrown them, rather than fizzle. A closing session that looks back at the original goals, records what changed and agrees how to stay in touch leaves both people with a clear sense of what it achieved.

                ## Milestones
                1. The original goals and the session notes reread before the meeting.
                2. A closing conversation on what changed, what helped and what did not.
                3. A short summary written by the mentee and shared with the mentor.
                4. An agreement on informal contact afterwards.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A closing session held and a written summary of outcomes against the original goals shared by the mentee."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Reread the original goals and the session notes"
                - "Book a closing session with the mentor"
                - "Write a half-page summary of what changed"
                - "Agree how you will keep in touch"
            - name: Mentoring a career changer or bootcamp graduate
              description: |-
                ## Purpose
                Engineers who arrive from bootcamps or other careers often bring strong habits from previous work but have gaps in fundamentals like data structures, version control workflows or reading large codebases. Mentoring them well means valuing what they bring while filling those gaps in order, without making them feel behind.

                ## Milestones
                1. A conversation about their previous career and which skills carry over.
                2. A list of the three fundamentals gaps that matter most for their current work.
                3. A plan pairing them on tickets that build each gap in order.
                4. A check after three months on which gaps have closed.

                ## Notes
                Ask about their previous work early. A former teacher, nurse or accountant often already explains, prioritises and checks work better than many engineers.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A three-month mentoring plan addressing three named fundamentals gaps, with a recorded check on progress at the end."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask about their previous career and which skills carry over"
                - "Agree the three fundamentals gaps that matter most now"
                - "Pick tickets to pair on that build each gap in turn"
                - "Review progress on each gap after three months"
            - name: Mentoring and pairing across time zones
              description: |-
                ## Purpose
                When mentor and mentee share only an hour or two of working day, sessions get squeezed and pairing rarely happens. Combining a short live overlap slot with asynchronous habits, recorded walk-throughs, written questions and handover notes on shared branches, keeps mentoring alive across distance.

                ## Milestones
                1. The working-hours overlap mapped and one live slot a fortnight chosen within it.
                2. An async channel or document for questions between sessions.
                3. Recorded code walk-throughs used at least twice in place of live explanation.
                4. A handover note habit for any work passed between time zones.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A live overlap slot held every fortnight for two months, with an async question log and at least two recorded walk-throughs."
                cadence: rolling
              tasks:
                - "Map both working days and find the overlap"
                - "Create an async question document for between sessions"
                - "Post a written check-in to your mentor or mentee @recurring(weekly:mon)"
                - "Record a short walk-through instead of explaining live"
            - name: Becoming a first-time mentor as a new senior
              description: |-
                ## Purpose
                Newly promoted senior engineers are often handed a mentee with no preparation, and fall back on either lecturing or fixing everything themselves. Planning your first mentoring relationship, with your own mentor or manager to talk it through, avoids the common mistakes and makes it rewarding for both of you.

                ## Milestones
                1. A conversation with an experienced mentor about what they wish they had known.
                2. Your mentor profile and working agreement drafted before the first session.
                3. The first six sessions held, with notes on what felt hard.
                4. A check-in with your own mentor or manager on how it is going.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Six mentoring sessions held in your first relationship, with notes and one review conversation with your own mentor or manager."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask an experienced mentor what they wish they had known at the start"
                - "Draft your working agreement before meeting your mentee"
                - "Note after each session what felt hard"
                - "Review the first six sessions with your manager or own mentor"
            - name: Mentoring versus managing your own reports
              description: |-
                ## Purpose
                Engineering managers often try to mentor their own reports, but advice from the person who sets your pay always carries weight it should not. Being clear with each report about when you are coaching and when you are evaluating, and connecting them with mentors elsewhere, gets them honest support without blurring the line.

                ## Milestones
                1. Each report asked whether they have a mentor outside the team.
                2. Introductions made for those who want one.
                3. A habit of saying whether a conversation is coaching or evaluation.
                4. Each report's mentor arrangement checked once a quarter.

                ## Notes
                You can still coach your reports. Just name it, and never use what they said in a coaching moment against them in a review.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every report who wants a mentor outside the reporting line has one, and arrangements are checked quarterly."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask each report whether they have a mentor outside the team"
                - "Introduce interested reports to suitable mentors"
                - "Say at the start of a conversation whether it is coaching or evaluation"
                - "Check each report's mentoring arrangement at quarter end"
            - name: Summer intern mentoring plan
              description: |-
                ## Purpose
                Interns have ten to twelve weeks to learn a codebase, ship something meaningful and decide whether they want to come back, and mentors usually find out how hard that is in week three. A plan with a scoped project, a pairing schedule front-loaded into the first fortnight and a demo date makes the summer work for both sides.

                ## Milestones
                1. A scoped intern project that can ship in eight weeks with room to stretch.
                2. Daily pairing in the first two weeks, tapering to twice a week.
                3. A midpoint check with honest feedback.
                4. A final demo to the team and a written handover of the work.

                ## Notes
                Scope the project to half of what you think an intern can do. It will still take the whole summer.
              priority: high
              deadlineOffsetDays: 84
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The intern demoed a shipped project to the team by week twelve, after a midpoint feedback check and a front-loaded pairing schedule."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Scope an intern project that could ship in eight weeks"
                - "Book daily pairing for the intern's first two weeks"
                - "Hold a midpoint check with written feedback"
                - "Schedule the final demo and write the handover notes"
            - name: Pairing across working styles and access needs
              description: |-
                ## Purpose
                Pairing assumes a lot: talking while thinking, sustained eye contact with a screen, quick verbal back-and-forth. Engineers who are neurodivergent, hard of hearing, have chronic fatigue or simply think better in silence can find standard pairing exhausting, and small changes like text chat, shorter sessions or thinking pauses make it work.

                ## Milestones
                1. A private, optional way for teammates to share what helps them pair well.
                2. A short menu of adjustments the team supports, such as captions, chat-based navigation or 45-minute limits.
                3. Adjustments added to the team pairing agreement.
                4. A check after two months with those who asked for changes.

                ## Notes
                Never ask people to disclose why. A plain "what helps you pair well?" is enough.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published menu of supported pairing adjustments added to the team agreement, and a two-month check with those who use it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send an optional private question on what helps people pair well"
                - "Draft a menu of pairing adjustments the team will support"
                - "Add the menu to the team pairing agreement"
                - "Follow up privately after two months with those who used it"
            - name: Reverse mentoring from junior engineers
              description: |-
                ## Purpose
                Junior engineers often know newer tools, frameworks and community norms better than people who learned the craft a decade ago. Setting up a monthly reverse mentoring session, where a junior teaches a senior or manager something specific, flattens the hierarchy and keeps senior people current.

                ## Milestones
                1. A junior engineer and a topic they know well agreed.
                2. A monthly session in the calendar, led by the junior.
                3. One new tool or practice adopted by the senior as a result.
                4. Both people's view of the arrangement recorded after three months.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three monthly reverse mentoring sessions held, with at least one new tool or practice adopted by the senior participant."
                cadence: rolling
              tasks:
                - "Ask a junior engineer what they know that you do not"
                - "Book a monthly session that they lead"
                - "Prepare a question for the reverse mentoring session @recurring(monthly:24)"
                - "Try one tool or practice they showed you on real work"
            - name: Mentoring a senior engineer towards wider technical scope
              description: |-
                ## Purpose
                Senior engineers who are excellent inside their own team often struggle with the next step, which is influence across teams: writing a proposal others adopt, aligning two groups or spotting a risk nobody owns. Mentoring at this level is less about code and more about choosing problems, writing persuasively and building trust.

                ## Milestones
                1. One cross-team problem chosen that the mentee could lead.
                2. A written proposal for it reviewed in a mentoring session.
                3. The proposal presented to the affected teams.
                4. A debrief on what moved people and what did not.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The mentee has presented a reviewed cross-team proposal to the affected teams and a debrief has been recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List cross-team problems that nobody currently owns"
                - "Pick one the mentee could lead and agree the first step"
                - "Review the mentee's written proposal in a session"
                - "Debrief after the proposal is presented"
            - name: Peer mentoring circle for underrepresented engineers
              description: |-
                ## Purpose
                Engineers from underrepresented groups often have fewer people who share their experience in the room, and one-to-one mentoring alone can be hard to find. A small peer circle of five or six people meeting monthly, with a rotating host and a shared topic, gives practical advice and support without depending on one senior sponsor.

                ## Milestones
                1. Five or six members recruited, with agreement on purpose and confidentiality.
                2. A monthly meeting time and a rotating host schedule.
                3. A topic list drawn from members, such as negotiating scope or handling interruptions in meetings.
                4. A six-month check on whether to continue, grow or split.

                ## Notes
                Membership and topics belong to the circle. Managers can fund and protect the time, but should not attend unless invited.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A peer circle of five or six members has met monthly for six months with rotating hosts and an agreed confidentiality rule."
                cadence: rolling
              tasks:
                - "Invite five or six peers to a first conversation about a circle"
                - "Agree purpose, confidentiality and a rotating host schedule"
                - "Confirm the host and topic for this month's circle @recurring(monthly:16)"
                - "Review the circle's format after six months"
            - name: Mentor guild for developing other mentors
              description: |-
                ## Purpose
                Once a team or department has several mentors, the quality varies widely and new mentors learn by trial and error. A monthly mentor guild where mentors bring anonymised problems, share techniques and pair new mentors with experienced ones raises the standard across the board.

                ## Milestones
                1. A monthly guild meeting with mentors from across teams.
                2. A rule that cases are shared without identifying mentees.
                3. New mentors paired with an experienced mentor for their first cycle.
                4. A short shared page of techniques that have worked.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A mentor guild has met monthly for six months, with every new mentor paired with an experienced one and a shared techniques page."
                cadence: rolling
              tasks:
                - "Invite current mentors across teams to a first guild meeting"
                - "Agree the rule for sharing cases without naming mentees"
                - "Collect agenda items from mentors before the guild meets @recurring(monthly:5)"
                - "Pair each new mentor with an experienced one"
            - name: Facilitating mob programming across several teams
              description: |-
                ## Purpose
                Mobbing within one team is manageable, but running mobs that bring together engineers from three teams to untangle a shared integration or agree a common library needs real facilitation. Learning to set a clear goal, manage strong voices, keep rotation honest and capture decisions makes cross-team mobs productive instead of political.

                ## Milestones
                1. A cross-team problem picked where shared understanding is the bottleneck.
                2. A facilitation plan covering goal, rotation, decision capture and how to handle disagreement.
                3. Two cross-team mobs facilitated.
                4. Decisions and follow-ups published to all teams within a day of each session.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two cross-team mob sessions facilitated with a written plan, and decisions published to all teams within a day of each."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose a cross-team problem where shared understanding is missing"
                - "Write a facilitation plan with goal, rotation and decision capture"
                - "Facilitate the first cross-team mob session"
                - "Publish decisions and follow-ups to every team the next day"
            - name: Pairing with an AI coding assistant as a third seat
              description: |-
                ## Purpose
                AI coding assistants can make pairing sessions faster, but they also let a junior skip the reasoning a pairing session is meant to build. Agreeing how the assistant joins the pair, when to ask it, who reviews its output and when to switch it off for learning, keeps the human teaching intact.

                ## Milestones
                1. A short set of team rules for using an assistant during pairing.
                2. Three sessions run with the rules, alternating assistant on and assistant off.
                3. Notes on where the assistant helped and where it short-circuited learning.
                4. The rules updated and added to the pairing agreement.

                ## Notes
                A useful default: juniors explain any suggested code aloud before accepting it. If they cannot, the pair writes it by hand.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Team rules for AI assistants in pairing tested over three sessions and added to the pairing agreement."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to draft starter rules for using an assistant in pairing"
                - "Run three sessions alternating assistant on and off"
                - "Note where the assistant helped and where it skipped learning"
                - "Add the revised rules to the team pairing agreement"
            - name: Apprenticeship pairing curriculum for a junior hire
              description: |-
                ## Purpose
                The strongest way to grow a junior engineer is a structured apprenticeship: a planned sequence of paired work moving from observing, to driving with guidance, to leading with a senior watching. Writing that sequence as a twelve-week curriculum, tied to real areas of the codebase, makes progress visible and repeatable for the next hire.

                ## Milestones
                1. A twelve-week curriculum split into observe, guided and lead stages.
                2. Each stage tied to real components and ticket types.
                3. Clear signals for moving from one stage to the next.
                4. The curriculum run once and revised for the next junior.

                ## Notes
                Start from the **Development plan** template for the junior's side of the plan.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A twelve-week staged pairing curriculum has been run with one junior engineer and revised afterwards for reuse."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Outline three stages: observe, guided and lead"
                - "Map each stage to real components and ticket types"
                - "Write the signals for moving between stages"
                - "Revise the curriculum after the first junior completes it"
---

# Engineering Mentorship & Pairing

This area is for engineers who want to grow faster by learning alongside someone, for the senior engineers doing the teaching, and for managers who want knowledge to stop living in one person's head. It starts with the foundations (a mentoring goal, finding a mentor, a working agreement and a pairing setup that works), then the routines that keep sessions, pairing blocks and mob time happening, the pairing and teaching skills themselves, the decisions about tools, matching and programme design, the events worth running, the situations that change the approach, and finally the advanced work of mentoring mentors and facilitating at scale.

What repeats is a mentoring session twice a month, a weekly pairing block, a Friday mob session, weekly office hours and a learning log, a monthly pair rotation and talk, and a quarterly look at whether each relationship is still worth the time. The Development plan, Skills matrix, Meeting notes, Feedback themes and Reading queue templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
