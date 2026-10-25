---
id: management-consulting.workshop-facilitation
name: Workshop Facilitation
description: "Client workshops that end in decisions: a clear objective, a timed agenda and exercises, prework that arrives, a room you can manage and a write-up within two days."
category: business
version: 1.0.0
tags: [management-consulting, workshop-facilitation, knowledge-worker, freelancer, facilitation, workshop-design, remote-workshops, decision-making]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - meeting-notes
    - feedback-themes
    - development-plan
    - risk-register
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Workshop Facilitation
          description: "Designing and facilitating client workshops: objectives, agenda and exercises, prework, managing the room and turning outputs into decisions."
          projects:
            - name: One-sentence workshop objective and decision statement
              description: |-
                ## Purpose
                Workshops fail most often because nobody agreed what the room is meant to produce, so the session drifts into a long status meeting. Writing one sentence that names the decision or output, and getting the sponsor to sign it off, gives every later choice about people, agenda and exercises a test to pass.

                ## Milestones
                1. A single sentence stating the output, in the form: by the end, this group will have decided or produced a named thing.
                2. Three to five criteria that say what a good output looks like.
                3. The sponsor's written agreement to the objective and criteria.
                4. A short list of topics that are explicitly out of bounds for this session.

                ## Notes
                If the objective needs the word and twice, you probably have two workshops. Split them or drop one.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-sentence workshop objective with success criteria and an out-of-bounds list is agreed in writing with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft the workshop objective as a single sentence ending in a decision or output"
                - "Write three to five criteria for a good result"
                - "List the topics this session will not cover"
                - "Send the objective to the sponsor and ask for a yes or edits by email"
            - name: Participant map with roles and decision rights
              description: |-
                ## Purpose
                Who sits in the room decides what the room can conclude: leave out the person who owns the budget and the output is a recommendation nobody can action. A participant map that shows each person's role, interest, likely position and authority lets you invite the right twelve, not the polite thirty.

                ## Milestones
                1. A list of candidate participants with role, team and what they can decide.
                2. Each person marked as decider, contributor, expert input or observer.
                3. Likely positions and sensitivities noted for anyone expected to resist.
                4. A final invite list of a workable size, agreed with the sponsor, with reasons for anyone left out.

                ## Notes
                Eight to fifteen people is a comfortable range for a working session. Beyond that, plan table hosts or split groups.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A participant map naming each invitee's role and decision rights exists, and the final invite list is confirmed with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List everyone who could plausibly attend with their role and team"
                - "Mark each person as decider, contributor, expert or observer"
                - "Note likely positions for anyone you expect to push back"
                - "Agree the final invite list and its size with the sponsor"
            - name: Timed agenda built backwards from the output
              description: |-
                ## Purpose
                An agenda written as a list of topics tells nobody what happens in each block. Building it backwards from the final output, with each block producing an input the next one needs and a realistic minute count, shows quickly whether the day is possible and where it will run long.

                ## Milestones
                1. The final output written at the bottom of the page and each earlier block working back from it.
                2. Every block given an output, a method and a time in minutes.
                3. Breaks and a ten to fifteen percent buffer built into the timings.
                4. A participant-facing version without facilitator notes, reviewed by the sponsor.

                ## Notes
                Most first drafts are 30 percent too full. Cut a block rather than shrinking every block.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A timed agenda exists in which every block names an output, a method and minutes, with a buffer, and a participant version has been shared."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the final output at the bottom of a blank agenda"
                - "Work backwards and name the input each block must produce"
                - "Give every block a method and a time in minutes"
                - "Cut blocks until a 10 percent buffer fits"
            - name: Venue and logistics checklist for in-person sessions
              description: |-
                ## Purpose
                A room with fixed boardroom seating, no wall space and a projector that will not talk to your laptop can sink a well-designed workshop before the first exercise. A standard logistics checklist covering room layout, walls, catering, access and timings means you ask the client for the right things two weeks ahead, not at 8:45 on the day.

                ## Milestones
                1. A reusable checklist covering room size, layout, wall space, screens, power, catering, access and parking.
                2. The checklist sent to the client contact for the next workshop with a reply date.
                3. A floor plan or photo of the room seen before the day.
                4. A fallback noted for the two things most likely to go wrong.

                ## Notes
                Start from the **Operational checklist** template. Cabaret seating, round tables of five or six, suits most working sessions better than a boardroom.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A logistics checklist is in use and the room for the next workshop has been confirmed against it at least a week before the session."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a logistics checklist covering room, walls, tech, catering and access"
                - "Send it to the client contact with a date for replies"
                - "Ask for a photo or floor plan of the room"
                - "Note a fallback for the screen and the wall space"
                - "Update the checklist with lessons from recent sessions @recurring(quarterly)"
            - name: Remote workshop platform and board set-up
              description: |-
                ## Purpose
                Remote sessions break on small things: participants who cannot open the whiteboard link, breakout rooms nobody has rehearsed, or a board so busy people get lost in it. Setting up the video platform, the board, permissions and a test link, then running a fifteen-minute technical check with one client participant, removes most of those failures.

                ## Milestones
                1. The video platform and whiteboard confirmed as allowed by the client's IT policy.
                2. A board with one clearly labelled frame per agenda block and a parking area.
                3. Breakout rooms and board permissions tested with a colleague.
                4. A short how-to note for participants sent with the calendar invite.

                ## Notes
                Ask about client IT restrictions first. Many organisations block some whiteboard tools, and finding out on the day wastes the opening half hour.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested remote board and video set-up exists for the next session, with the participant how-to note sent at least three days before."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the client which video and whiteboard tools their IT allows"
                - "Build one board frame per agenda block plus a parking area"
                - "Test breakouts and edit permissions with a colleague"
                - "Send participants a short how-to note with the link"
                - "Test your audio, camera and board shortcuts @recurring(monthly:8)"
            - name: Portable facilitator kit
              description: |-
                ## Purpose
                Relying on the client's stationery cupboard means dried markers, tiny sticky notes and no tape that holds paper to a wall. A kit you own and restock, packed in one bag, makes every in-person workshop start on time whatever building you are in.

                ## Milestones
                1. A packing list covering markers, large sticky notes, dots, tape, flip chart paper, timer and extension lead.
                2. The kit bought and packed in a single bag or case.
                3. A restock note kept inside the bag.
                4. A small spare kit for a co-facilitator or table host.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packed facilitator kit matching a written packing list is ready, with a restock note inside."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the packing list for a full in-person workshop"
                - "Buy chisel-tip markers and large square sticky notes"
                - "Pack the kit into one bag with a restock note inside"
                - "Restock the kit after each in-person session @recurring(quarterly)"
            - name: Starter exercise library of twelve methods
              description: |-
                ## Purpose
                Facilitators who know three exercises use them for everything, and a brainstorm is a poor tool for prioritising or for surfacing risks. A library of twelve methods, each with its purpose, group size, time and materials, lets you pick the method for the job instead of the one you happen to remember.

                ## Milestones
                1. Twelve methods recorded, spread across opening, generating ideas, sorting, prioritising, deciding and closing.
                2. Each method written up with purpose, group size, minutes, materials and a common failure.
                3. At least three methods with a remote version noted.
                4. The library saved where you can search it during design.

                ## Notes
                A useful starter set: check-in question, silent brainstorm, affinity sorting, dot voting, impact and effort grid, pre-mortem, fishbone, gallery walk, 1-2-4-all, fist to five, decision matrix and a one-word close.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A searchable library of twelve workshop methods exists, each with purpose, group size, timing, materials and a remote version where relevant."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a library page with columns for purpose, size, minutes and materials"
                - "Write up the four methods you already use well"
                - "Add eight more covering prioritising, deciding and risk"
                - "Note a remote version for at least three of them"
            - name: Working agreements for the room
              description: |-
                ## Purpose
                Laptops open, phones on the table and the most senior voice taking every question are the default unless something else is agreed at the start. Three or four working agreements, proposed by you and confirmed by the group in the first ten minutes, give you permission to intervene later without it feeling personal.

                ## Milestones
                1. A short set of default agreements drafted, such as devices away during exercises and one conversation at a time.
                2. A two-minute opening script that proposes them and invites one addition from the group.
                3. The agreements posted visibly on a wall or the board for the whole session.
                4. A note after each workshop on whether you had to refer back to them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written set of working agreements and an opening script exist and have been used to open at least one workshop."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Draft four working agreements in plain language"
                - "Write a two-minute opening that proposes them"
                - "Print or post them where the group can see them all day"
                - "Note after the session whether you needed to refer back"
            - name: Recorded baseline of your facilitation
              description: |-
                ## Purpose
                Most facilitators have never watched themselves run a room, so they do not know they talk for 70 percent of the time or answer their own questions. Recording one internal session, with permission, and scoring it against a short rubric gives an honest starting point for every skill project later in this area.

                ## Milestones
                1. Permission obtained to record one internal or practice session.
                2. The recording reviewed against a rubric: talk time, question types, instructions, time keeping and closing.
                3. Three strengths and three gaps written down.
                4. One gap chosen as the focus for the next month.

                ## Notes
                Never record a client workshop without explicit permission from every participant and the sponsor. An internal team session or a practice run is safer.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recorded session has been scored against a five-part rubric, with three strengths, three gaps and one focus gap written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your team for permission to record an internal session"
                - "Write a five-part rubric for scoring the recording"
                - "Watch the recording and estimate your share of talk time"
                - "Choose one gap to work on for the next month"
            - name: Two-week workshop countdown routine
              description: |-
                ## Purpose
                Every workshop needs the same dozen things confirmed in the same order, and forgetting one of them (the room, the prework, the senior attendee's diary) costs far more than checking. A countdown from fourteen days out to the morning of the session turns that into a routine you follow rather than remember.

                ## Milestones
                1. A countdown list with steps at fourteen, seven, three and one day before and on the morning.
                2. The countdown applied to the next scheduled workshop.
                3. Attendance confirmed for every decider three days before.
                4. One improvement added to the countdown after each use.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The last three workshops each went through the full countdown, with attendance of deciders confirmed three days before."
                cadence: rolling
              tasks:
                - "Write the countdown steps for fourteen, seven, three and one day out"
                - "Check upcoming workshops against the countdown @recurring(weekly:mon)"
                - "Confirm deciders' attendance three days before each session"
                - "Add one improvement to the countdown after each workshop"
            - name: Prework pack and reminder sequence
              description: |-
                ## Purpose
                Prework that arrives the night before is not read, and a group that has not read it spends the first hour catching up. A short pack, sent a week ahead with a clear ask and two reminders, lets the session start at the discussion instead of the briefing.

                ## Milestones
                1. A prework pack of no more than five pages or a ten-minute read.
                2. A clear ask: read this, answer these two questions, bring this data.
                3. The pack sent seven days ahead and reminders sent three days and one day before.
                4. Prework responses collated into a one-page summary to open the session.

                ## Notes
                Ask participants to submit a short answer, not just read. A submitted answer tells you who has done it and gives you material for the opening.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For each workshop, prework is sent seven days ahead and at least two-thirds of participants submit a response before the session."
                cadence: rolling
              tasks:
                - "Cut the prework to five pages or a ten-minute read"
                - "Write two questions participants must answer before the session"
                - "Check which prework packs and reminders are due this week @recurring(weekly:wed)"
                - "Collate responses into a one-page opening summary"
            - name: Facilitator run sheet for the day
              description: |-
                ## Purpose
                The agenda participants see is not the document you facilitate from. A run sheet with exact start times, the instructions you will say word for word, materials per block, who does what and what you will cut if you run late keeps you calm when the morning slips by twenty minutes.

                ## Milestones
                1. A run sheet with clock times, block outputs, spoken instructions and materials for each block.
                2. Roles for any co-facilitator, note taker or producer marked block by block.
                3. A cut list naming which blocks shrink or go if time is lost.
                4. The run sheet rehearsed once aloud before the day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each workshop has a run sheet with clock times, scripted instructions, roles and a cut list, rehearsed once before the day."
                cadence: rolling
              tasks:
                - "Convert the timed agenda into clock times for the actual day"
                - "Script the instructions for each exercise in two or three sentences"
                - "Mark who runs, captures and produces each block"
                - "Write a cut list for when the session runs twenty minutes late"
                - "Update your master run sheet template with recent lessons @recurring(monthly:12)"
            - name: Same-day capture of workshop outputs
              description: |-
                ## Purpose
                Walls of sticky notes look like progress but mean little by the next morning, when the cleaners have been in and nobody can read the handwriting. Photographing every wall and flip chart before anyone leaves, and typing the key clusters the same evening, preserves the evidence the write-up will depend on.

                ## Milestones
                1. Every wall, flip chart and board frame photographed or exported before the room is cleared.
                2. Photos named by agenda block and saved to the engagement folder.
                3. Key clusters, votes and decisions typed up the same day.
                4. Anything illegible flagged for a quick check with the author.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "After each workshop, all outputs are photographed or exported and the key clusters and votes are typed up within 24 hours."
                cadence: rolling
              tasks:
                - "Photograph every wall and flip chart before the room is cleared"
                - "Name and save the photos by agenda block"
                - "Type up clusters, vote counts and decisions the same evening"
                - "Ask authors to clarify any note that cannot be read"
                - "Back up the week's workshop photos and board exports @recurring(weekly:fri)"
            - name: 48-hour write-up with decisions and owners
              description: |-
                ## Purpose
                Momentum from a good workshop fades within days, and a write-up that arrives a fortnight later reads like history. Sending a short write-up within 48 hours, leading with what was decided, who owns each action and by when, turns the session's energy into commitments people can be held to.

                ## Milestones
                1. A write-up opening with decisions made, followed by actions with owners and dates.
                2. Open questions and parked items listed with a proposed route for each.
                3. Raw outputs attached as an appendix rather than in the body.
                4. The write-up sent within 48 hours and confirmed by the sponsor.

                ## Notes
                Start from the **Meeting notes** template. Keep the body to two pages; the appendix can be as long as it needs to be.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every workshop has a write-up sent within 48 hours that lists decisions, actions with owners and dates, and parked items."
                cadence: rolling
              tasks:
                - "Ask the agent to draft the write-up from your typed clusters and notes"
                - "Put decisions first, then actions with owners and dates"
                - "List parked items with a proposed route for each"
                - "Send within 48 hours and ask the sponsor to confirm"
                - "Check every workshop from the past week has a sent write-up @recurring(weekly:tue)"
            - name: Fortnightly chase of workshop actions
              description: |-
                ## Purpose
                Actions agreed in a workshop are the first to slip because they were never added to anyone's own list. A fortnightly check of every open action, with a short message to owners and a note to the sponsor on anything stuck, is what makes the next workshop with this client credible.

                ## Milestones
                1. A single action tracker holding every action from every workshop on the engagement.
                2. Owners contacted every two weeks for a status in one line.
                3. Stuck actions raised with the sponsor with a suggested fix.
                4. Closed actions marked with the date and outcome.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An action tracker covers all workshop actions on the engagement and is updated every two weeks, with stuck items raised to the sponsor."
                cadence: rolling
              tasks:
                - "Move all workshop actions into one tracker with owners and dates"
                - "Message owners for a one-line status @recurring(monthly:3)"
                - "Message owners again mid-month for a one-line status @recurring(monthly:17)"
                - "Raise any action stuck for a month with the sponsor"
            - name: Participant feedback after every session
              description: |-
                ## Purpose
                Facilitators tend to judge a workshop by how it felt from the front, which is a poor guide to whether participants found it useful. A three-question survey sent the same day, with results sorted into themes over several sessions, shows what to keep and what to change.

                ## Milestones
                1. A three-question survey: usefulness score, what worked, what to change.
                2. The survey sent within a day of each workshop.
                3. Responses grouped into themes across sessions.
                4. One change to your practice made from each round of themes.

                ## Notes
                Start from the **Feedback themes** template. A response rate above half is good for a voluntary survey; a QR code shown at the close helps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A three-question survey is sent within a day of every workshop and its responses are grouped into themes at least once a quarter."
                cadence: rolling
              tasks:
                - "Write a three-question feedback survey"
                - "Show a QR code for the survey in the closing minutes of each workshop"
                - "Group survey responses into themes @recurring(quarterly)"
                - "Pick one change to make from the latest themes"
                - "Read new survey responses and note any repeat complaint @recurring(monthly:28)"
            - name: Monthly facilitation practice log
              description: |-
                ## Purpose
                Facilitation improves through deliberate practice, not through running more sessions on autopilot. A monthly log of what you tried, what happened and what you will try next, kept for a year, is the record that turns ordinary experience into skill and gives you real examples for reviews.

                ## Milestones
                1. A log with one entry per session: method tried, what happened, what to try next.
                2. A monthly review of entries with one practice goal for the month ahead.
                3. Six months of entries showing at least three goals met.
                4. Two or three stories drawn from the log for your performance review.

                ## Notes
                Start from the **Development plan** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A practice log has at least one entry per session for six months, with a monthly goal set and reviewed."
                cadence: rolling
              tasks:
                - "Set up a practice log with three columns"
                - "Write an entry within a day of each session you run"
                - "Review the month's entries and set one practice goal @recurring(monthly:26)"
                - "Pull two strong examples for your next review"
                - "Read one facilitation article or book chapter @recurring(monthly:14)"
            - name: Quarterly refresh of the exercise library
              description: |-
                ## Purpose
                Libraries rot: methods you never use clutter the list and the ones that worked brilliantly last quarter were never written down. A quarterly pass that adds what you learned, retires what failed and updates timings from real sessions keeps the library a working tool.

                ## Milestones
                1. Methods used in the quarter updated with real timings and group sizes.
                2. At least one new method added from a colleague, a book or a session you attended.
                3. Methods unused for a year moved to an archive section.
                4. Remote versions checked against the whiteboard tool you now use.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The exercise library shows a dated update each quarter, with at least one method added and timings revised from real use."
                cadence: cyclic
              tasks:
                - "Update timings for every method used this quarter @recurring(quarterly)"
                - "Add one new method from a colleague or a session you attended"
                - "Archive methods you have not used for a year"
                - "Check remote versions still work in your current board tool"
            - name: Asking open questions that move the room
              description: |-
                ## Purpose
                Closed questions get yes or no, leading questions get your answer back, and a group soon learns the facilitator already knows what they want. Practising open, probing and summarising questions until they are reflex is the single skill that most changes the quality of what a room produces.

                ## Milestones
                1. A personal bank of twenty open and probing questions sorted by purpose.
                2. Three sessions where you counted your open versus closed questions.
                3. A ratio of at least three open questions for each closed one in your latest session.
                4. A habit of summarising back before moving on, observed by a colleague.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A question bank of twenty exists and a colleague's tally from a real session shows at least three open questions for each closed one."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write twenty open and probing questions sorted by purpose"
                - "Ask a colleague to tally your open and closed questions in a session"
                - "Practise summarising back before each transition"
                - "Compare the tally after three sessions"
                - "Review one session tally for question types @recurring(monthly:21)"
            - name: Divergent then convergent exercise design
              description: |-
                ## Purpose
                Groups asked to generate ideas and judge them at the same time produce fewer, safer ideas and argue about each one. Learning to separate the wide phase from the narrowing phase, with different rules, methods and energy for each, is what makes ideation exercises produce something worth choosing from.

                ## Milestones
                1. Three diverging methods practised, such as silent brainstorm, brainwriting and worst possible idea.
                2. Three converging methods practised, such as affinity sorting, dot voting and criteria scoring.
                3. A workshop block designed with a visible switch between the two phases.
                4. A note on how many ideas each phase produced and kept.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one workshop block has been run with separate diverging and converging phases, with idea counts for each recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read up on three diverging and three converging methods"
                - "Design one block with a clear switch between phases"
                - "Run it with your team as a practice"
                - "Record how many ideas were generated and how many kept"
            - name: Drawing out quiet voices and managing dominant ones
              description: |-
                ## Purpose
                The loudest person in the room is rarely the best informed, and the most senior is often the one people defer to before they have thought. A short repertoire of moves, such as silent writing first, round robins, pairs before plenary and naming airtime kindly, gives the whole group a fair hearing without embarrassing anyone.

                ## Milestones
                1. Six specific moves written down for balancing participation.
                2. A pre-agreed private signal or word with the sponsor for when a senior voice is crowding the room.
                3. Two sessions where you used at least three of the moves deliberately.
                4. Feedback from a participant or colleague on whether the room felt balanced.

                ## Notes
                Silent individual writing before any discussion is the most reliable equaliser. It costs three minutes and changes who speaks.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six participation moves are written down and at least three were used deliberately in two sessions, with feedback recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down six moves for balancing who speaks"
                - "Agree a private signal with the sponsor for crowded discussions"
                - "Use three of the moves deliberately in your next session"
                - "Ask a colleague whether the room felt balanced"
            - name: Live visual capture on flip charts and boards
              description: |-
                ## Purpose
                A group that can see its own words captured accurately trusts the process and stops repeating itself. Practising clear block lettering, simple icons, headers and layouts for capture means you, or the note taker, can keep a readable record in real time instead of a scrawl that needs translating later.

                ## Milestones
                1. A lettering style that is readable from the back of a room.
                2. A set of ten simple icons for people, money, time, risk, decision and similar.
                3. Three capture layouts practised: list, grid and timeline.
                4. One real session captured live and the charts photographed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten icons and three layouts have been practised and one real session was captured live on charts readable from the back of the room."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Practise block capitals on a flip chart for twenty minutes"
                - "Draw ten simple icons until each takes under five seconds"
                - "Try list, grid and timeline layouts on one topic"
                - "Capture a real session live and photograph the charts"
            - name: Time keeping and agenda recovery in the moment
              description: |-
                ## Purpose
                Every workshop runs late somewhere, and the facilitator who silently squeezes the last block leaves the decision until five minutes before people leave for their trains. Practising visible time keeping and a few recovery moves, such as making a cut with the group or parking a topic with an owner, protects the part of the day that matters most.

                ## Milestones
                1. A visible timer or clock used in every session.
                2. Three recovery moves written down with the words you will use.
                3. One session where you renegotiated the agenda openly with the group.
                4. The final decision block starting on time in your last three workshops.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "The final decision block started within five minutes of plan in three consecutive workshops."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Put a visible timer on screen or the wall in every session"
                - "Write three recovery moves with the words you will say"
                - "Agree a time check signal with your co-facilitator"
                - "Record whether the decision block started on time"
            - name: Handling open conflict in a workshop
              description: |-
                ## Purpose
                When two senior participants disagree in public, the room goes quiet and watches what the facilitator does. Learning to slow the exchange down, separate positions from interests, make the disagreement visible on the wall and decide whether to resolve it now or route it elsewhere turns a tense moment into useful material.

                ## Milestones
                1. A short sequence for live conflict: pause, reflect both views, separate facts from preferences, choose a route.
                2. Two practice scenarios rehearsed with a colleague playing the difficult role.
                3. A list of acceptable routes, such as a side conversation, a sponsor decision or a data request.
                4. A reflection written after the next real disagreement you handled.

                ## Notes
                You are not there to win the argument for either side. Your job is to make the disagreement clear enough that the right person can decide it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written conflict sequence exists, two scenarios have been rehearsed and a reflection on one real disagreement is recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a four-step sequence for handling live disagreement"
                - "Rehearse two scenarios with a colleague playing the hard role"
                - "List the routes you can offer when it cannot be settled in the room"
                - "Write a reflection after the next disagreement you handle"
            - name: Prioritisation and voting methods compared
              description: |-
                ## Purpose
                Dot voting is quick but easily gamed by the first person to vote, while weighted scoring is fair but slow and invites arguments about weights. Knowing the trade-offs of five or six methods, and which suits which decision, lets you choose deliberately and explain the choice to a sceptical sponsor.

                ## Milestones
                1. Five methods summarised with speed, fairness, transparency and best use: dot voting, impact and effort grid, forced ranking, weighted criteria and fist to five.
                2. A rule of thumb for which method to use by group size and decision stakes.
                3. Two methods trialled on the same list in a practice session and results compared.
                4. One-paragraph explanations ready to give a sponsor for each method.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison of five prioritisation methods with a selection rule exists, and two methods have been trialled on the same list."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise five prioritisation methods in a comparison table"
                - "Write a rule of thumb for choosing between them"
                - "Trial two methods on the same list with your team"
                - "Draft a one-paragraph explanation of each for a sponsor"
            - name: Remote facilitation craft for video sessions
              description: |-
                ## Purpose
                Running a session over video is a different craft: energy drops after 90 minutes, silence feels longer, and you cannot see who is lost. Practising tighter blocks, frequent changes of mode, chat and board participation and clean breakout instructions makes remote workshops productive rather than a long presentation.

                ## Milestones
                1. A remote design rule set: blocks under 20 minutes, a change of mode every 10, breaks every hour.
                2. Breakout instructions written so they can be read again in the room.
                3. A producer role defined for running tech while you facilitate.
                4. Two remote sessions run and reviewed against the rule set.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A remote design rule set exists and two remote sessions have been reviewed against it with improvements noted."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write your remote design rules for block length and breaks"
                - "Post breakout instructions in the chat and on the board"
                - "Define a producer role and brief a colleague on it"
                - "Review two remote sessions against your rules"
            - name: Choosing in-person, remote or hybrid format
              description: |-
                ## Purpose
                Hybrid sessions, with some people in a room and others on a screen, are the hardest to run well and often leave remote participants as spectators. Deciding the format deliberately against the objective, travel, budget and the kind of thinking needed, and recording why, avoids defaulting to whatever the calendar suggests.

                ## Milestones
                1. The objective, participants' locations, budget and the type of work written down.
                2. The three formats scored against those factors.
                3. A recommendation sent to the sponsor with the main trade-off named.
                4. If hybrid is chosen, an equal-experience plan such as everyone on their own laptop.

                ## Notes
                If you must go hybrid, a common fix is one laptop per person even in the room, so everyone works on the same board.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The format for the next workshop is chosen against written criteria and confirmed with the sponsor, with an equal-experience plan if hybrid."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List participants' locations and travel constraints"
                - "Score in-person, remote and hybrid against the objective"
                - "Send a format recommendation to the sponsor"
                - "Write the equal-experience plan if the answer is hybrid"
            - name: Digital whiteboard tool decision
              description: |-
                ## Purpose
                Switching whiteboard tools between clients means relearning shortcuts and rebuilding templates each time. Comparing two or three tools on client IT acceptance, guest access, templates, export and cost, then standardising on one with a fallback, saves hours across a year of workshops.

                ## Milestones
                1. Two or three tools compared on guest access, IT acceptance, templates, export and price.
                2. Each tool tested by building the same simple board.
                3. One primary tool and one fallback chosen with reasons.
                4. Your standard board templates rebuilt in the chosen tool.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A primary and fallback whiteboard tool are chosen from a written comparison, with standard templates built in the primary."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List what clients typically allow and what you need from a board"
                - "Build the same test board in two or three tools"
                - "Choose a primary and fallback and write down why"
                - "Rebuild your standard templates in the primary tool"
            - name: Splitting roles with a co-facilitator and producer
              description: |-
                ## Purpose
                Running the room, capturing the content, watching the clock and fixing the tech at once is how facilitators miss what matters. Agreeing clear roles with a co-facilitator, a note taker or a remote producer, block by block, and a handover signal between you, lets each person do one job well.

                ## Milestones
                1. A role card for lead facilitator, co-facilitator, capture and producer.
                2. Roles assigned block by block on the run sheet.
                3. Handover and rescue signals agreed before the session.
                4. A ten-minute debrief between facilitators after the workshop.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Role cards exist and the last workshop with more than one facilitator had roles assigned per block and a debrief held."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a short role card for each facilitation role"
                - "Assign roles block by block on the run sheet"
                - "Agree handover and rescue signals with your co-facilitator"
                - "Hold a ten-minute debrief after the session"
            - name: Post-mortem of a workshop that went badly
              description: |-
                ## Purpose
                Every facilitator has a session where the senior attendee left at lunch, the exercise fell flat or the output was unusable. Reviewing it calmly within a week, separating design faults from facilitation faults from things outside your control, gives you the changes that stop it happening again.

                ## Milestones
                1. A timeline of what happened, written from notes and memory within a week.
                2. Causes sorted into design, facilitation, logistics and outside your control.
                3. Two or three specific changes to your design or routine.
                4. Any repair needed with the sponsor or participants made.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written review of the session sorts causes into four groups and names two or three changes, with any repair with the sponsor done."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a timeline of the session from your notes"
                - "Sort each problem into design, facilitation, logistics or outside control"
                - "Choose two or three changes for next time"
                - "Offer the sponsor a short follow-up to recover the output"
            - name: Cutting a full-day workshop to half a day
              description: |-
                ## Purpose
                Senior diaries rarely allow a full day, and the request to do the same in three hours arrives late. Redesigning an agenda for half the time, by moving content into prework, dropping lower-value blocks and narrowing the objective, is a skill worth having before the request comes.

                ## Milestones
                1. Each block of the full-day agenda rated for its contribution to the final output.
                2. Content that can be read moved into prework.
                3. A half-day agenda with a narrower but still decision-ready objective.
                4. The trade-off explained to the sponsor in two sentences.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A half-day version of a full-day agenda exists with prework, a narrowed objective and a two-sentence trade-off agreed with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rate each block of a full-day agenda for its contribution"
                - "Move briefing content into prework"
                - "Narrow the objective to what three hours can decide"
                - "Explain the trade-off to the sponsor in two sentences"
            - name: Accessibility and inclusion review of workshop design
              description: |-
                ## Purpose
                Standing exercises, tiny fonts on slides, fast-paced English and evening sessions across time zones all quietly exclude people who then contribute less. Reviewing a design against a short accessibility and inclusion checklist, and asking participants about needs in the invite, widens who can take full part.

                ## Milestones
                1. A checklist covering mobility, vision, hearing, language, time zones, faith and caring commitments.
                2. A line in invitations asking about access needs.
                3. One workshop design reviewed and at least two changes made.
                4. Seated and remote alternatives noted for any standing or physical exercise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inclusion checklist exists, invites ask about access needs, and one design has been changed in at least two places as a result."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a short accessibility and inclusion checklist"
                - "Add an access needs question to your invite template"
                - "Review your next design and make at least two changes"
                - "Note seated alternatives for any standing exercise"
            - name: Turning workshop outputs into a decision note
              description: |-
                ## Purpose
                Some workshops end with a shortlist rather than a decision, and the decider was not in the room. A two-page decision note that sets out the options the group produced, the criteria, the group's view and what is being asked of the decider bridges the gap between the wall of notes and a recorded choice.

                ## Milestones
                1. Options from the workshop stated in plain words with the group's scoring.
                2. The criteria and any dissenting views shown honestly.
                3. A single clear ask of the decider with a date.
                4. The decision recorded and fed back to participants.

                ## Notes
                Show the participants the note before it goes up. If they do not recognise their own conclusions, the note will not survive the first question.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A two-page decision note built from workshop outputs is accepted by the decider, and the decision is fed back to participants within two weeks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the options and scores the group produced"
                - "Write the criteria and any dissenting views"
                - "Draft one clear ask of the decider with a date"
                - "Share the decision back with everyone who attended"
            - name: Problem framing workshop at the start of an engagement
              description: |-
                ## Purpose
                Early in an engagement, client leaders often hold different versions of the problem, and the team builds the wrong analysis if nobody notices. A half-day framing workshop that surfaces each leader's view, agrees the core question and the constraints, and names what success looks like gives the team one problem to solve.

                ## Milestones
                1. Prework collecting each leader's one-sentence version of the problem.
                2. A session that compares the versions side by side and agrees one core question.
                3. Constraints, success measures and out-of-bounds topics agreed.
                4. The agreed problem statement circulated within two days.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A framing workshop has produced one agreed core question with constraints and success measures, circulated within two days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask each leader for a one-sentence version of the problem"
                - "Lay the versions side by side as the opening exercise"
                - "Facilitate agreement on one core question and constraints"
                - "Circulate the agreed problem statement within two days"
            - name: Leadership team strategy offsite
              description: |-
                ## Purpose
                Offsites carry high expectations and high cost: a leadership team away for two days wants to come back with something more than a list of themes. Designing the offsite around a few big choices, with prework, a mix of plenary and small group work and a closing commitment, makes the time away worth what it cost.

                ## Milestones
                1. Three to five strategic choices the offsite will address, agreed with the CEO or sponsor.
                2. Prework and pre-interviews summarised into a short opening pack.
                3. A two-day design that alternates plenary, small groups and breaks.
                4. Commitments recorded with owners and a follow-up date before people leave.

                ## Notes
                Plan the evening as carefully as the day. Informal time is often where the hardest conversations finally happen, but it needs a light structure and a clear end.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An offsite is delivered that addresses three to five agreed choices and closes with commitments that have owners and a follow-up date."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Agree three to five strategic choices with the sponsor"
                - "Summarise prework and interviews into a short opening pack"
                - "Design two days alternating plenary and small group work"
                - "Record commitments with owners before the group leaves"
            - name: Current-state process mapping workshop
              description: |-
                ## Purpose
                Process maps drawn by consultants from documents rarely match how work really flows, and the people who do the work know where it breaks. A mapping workshop with the front-line staff and their managers, using a wall or board, captures the real steps, hand-offs and pain points in a few hours.

                ## Milestones
                1. Start and end points of the process agreed before the session.
                2. Participants drawn from every team that touches the process.
                3. A wall map of steps, hand-offs, delays and pain points built by the group.
                4. The map photographed, redrawn and checked back with two participants.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A current-state map built by the people who do the work, with pain points marked, is redrawn and validated by two participants."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the start and end points of the process with the sponsor"
                - "Invite someone from every team that touches the process"
                - "Build the map on the wall with pain points in a different colour"
                - "Check the redrawn map with two participants"
            - name: Options evaluation and prioritisation workshop
              description: |-
                ## Purpose
                Midway through an engagement the team usually has more options than the client can pursue, and choosing by debate favours whoever argues best. A workshop that agrees criteria first, scores the options in small groups and then debates only the close calls produces a shortlist the group will defend.

                ## Milestones
                1. Options described on one page each in a consistent format.
                2. Criteria and weights agreed before any option is discussed.
                3. Small groups scoring options and comparing scores in plenary.
                4. A shortlist with the reasoning recorded and the close calls flagged.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A workshop agrees criteria before scoring and produces a shortlist with recorded reasoning, accepted by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write each option on one page in the same format"
                - "Agree criteria and weights at the start of the session"
                - "Have small groups score options before plenary discussion"
                - "Record the shortlist and the reasoning behind close calls"
            - name: Pre-mortem risk workshop for a plan
              description: |-
                ## Purpose
                Teams that have just agreed a plan are the least likely to see its weaknesses. A pre-mortem asks the group to imagine the plan has failed a year from now and write down why, which surfaces risks people would not raise in a normal review and gives the plan a risk register owned by the people who will carry it out.

                ## Milestones
                1. A one-page plan summary shared before the session.
                2. Individual silent writing of failure reasons, then clustering.
                3. Top risks rated for likelihood and impact by the group.
                4. A risk register with owners and mitigations for the top five.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A pre-mortem has produced a risk register with owners and mitigations for the top five risks, shared within two days."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Share a one-page plan summary before the session"
                - "Run ten minutes of silent writing on why the plan failed"
                - "Cluster and rate the risks with the group"
                - "Assign owners and mitigations for the top five"
            - name: End-of-engagement retrospective with the client team
              description: |-
                ## Purpose
                Client teams rarely get a structured chance to say what they would do differently with consultants, and the firm rarely hears it directly. A ninety-minute retrospective at the end of an engagement, covering what worked, what did not and what the client will keep doing, produces candid lessons and a better relationship for the next piece of work.

                ## Milestones
                1. A retrospective format agreed with the sponsor, such as keep, stop, start.
                2. Both client and consultant team members present.
                3. Themes captured and agreed in the room.
                4. A short lessons note shared with both teams within a week.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A retrospective with both teams has been held and a lessons note shared with both within a week."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree a keep, stop, start format with the sponsor"
                - "Invite both client and consultant team members"
                - "Capture themes and confirm them before the close"
                - "Share a short lessons note within a week"
            - name: First workshop as note taker and junior facilitator
              description: |-
                ## Purpose
                New analysts often join a workshop as note taker and are handed one small exercise to run. Treating that first time as a project, by preparing your capture template, rehearsing your block and asking for specific feedback afterwards, turns a minor role into the start of a reputation for running rooms.

                ## Milestones
                1. A capture template prepared with headers for each agenda block.
                2. Your own block rehearsed aloud with timings.
                3. Notes typed up and sent to the lead within 24 hours.
                4. Specific feedback requested and written down.

                ## Notes
                Ask the lead before the day which signals they will use with you, such as wanting a time check or a quick summary.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Typed notes reach the lead facilitator within 24 hours and specific feedback on your own block is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Prepare a capture template with headers for each block"
                - "Rehearse your exercise instructions aloud with a timer"
                - "Send typed notes to the lead within 24 hours"
                - "Ask the lead for two specific pieces of feedback"
            - name: Independent facilitation service package
              description: |-
                ## Purpose
                Independent consultants who facilitate tend to quote by the day and then absorb unpaid design, prework and write-up time. A defined package, such as discovery call, design, the session and a 48-hour write-up, with the hours each takes made explicit, makes your offer clearer to buyers and your days honest.

                ## Milestones
                1. Your real hours for design, prework, delivery and write-up measured on two past workshops.
                2. Two or three named packages with what each includes and excludes.
                3. A one-page description of the packages for prospective clients.
                4. One proposal sent using a package rather than a day rate.

                ## Notes
                Design and write-up usually take one to two times the session length. Price for that, and agree the number of design revisions up front.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page description of two or three facilitation packages, based on measured hours, has been used in at least one proposal."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Total the real hours spent on your last two workshops"
                - "Define two or three packages with inclusions and exclusions"
                - "Write a one-page package description for clients"
                - "Use a package in your next proposal"
            - name: Client briefing call before designing a workshop
              description: |-
                ## Purpose
                Freelance facilitators are often asked to design a session from a one-line email, and the real purpose only appears on the day. A structured briefing call, covering the objective, who decides, history, politics and what happens after, uncovers the brief behind the brief before any design work starts.

                ## Milestones
                1. A list of ten briefing questions covering purpose, people, history, politics and follow-up.
                2. A briefing call held with the commissioning client.
                3. A one-page brief written back to the client for confirmation.
                4. Any red flags, such as a predetermined answer, raised directly.

                ## Notes
                If the client already knows the answer and wants the workshop to endorse it, say so plainly. You can still help, but the design and the promise to participants change.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A one-page workshop brief from a structured call has been confirmed in writing by the commissioning client before design starts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write ten briefing questions for the commissioning client"
                - "Hold the call and take notes against each question"
                - "Send a one-page brief back for confirmation"
                - "Raise any sign that the answer has already been decided"
            - name: Facilitating sessions for senior executives
              description: |-
                ## Purpose
                Executive teams have little patience for icebreakers, sticky notes they see as childish or exercises that waste their time. Designing for them means fewer, sharper exercises, more pre-reading, a facilitator confident enough to hold the room, and private conversations with the most senior person beforehand.

                ## Milestones
                1. A one-to-one with the most senior attendee before the session.
                2. Exercises framed in business terms with a clear reason for each.
                3. At least one exercise that forces a trade-off rather than a list.
                4. Feedback from the sponsor on whether the session felt worth executive time.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "An executive session has been delivered after a one-to-one with the senior attendee, and the sponsor's feedback on its value is recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Book a short one-to-one with the most senior attendee"
                - "Reframe each exercise with its business reason"
                - "Build in one exercise that forces a trade-off"
                - "Ask the sponsor whether the session was worth executive time"
            - name: Cross-cultural and multilingual workshop design
              description: |-
                ## Purpose
                Groups that span countries and languages differ in how openly they disagree with seniors, how they treat silence and how fast they think in a second language. Adapting the design with more written work, slower pacing, clear visual instructions and, where needed, interpretation gives everyone a fair chance to contribute.

                ## Milestones
                1. Participants' languages, time zones and cultural norms around hierarchy noted.
                2. Instructions written in plain language and shown on screen or the wall.
                3. More silent and written exercises than in a single-culture design.
                4. Interpretation or bilingual table hosts arranged where needed.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A workshop design adapted for language and culture, with written instructions and more written exercises, has been delivered and reviewed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the languages, time zones and hierarchy norms in the group"
                - "Rewrite instructions in plain language for display"
                - "Swap one discussion block for a written exercise"
                - "Arrange interpretation or bilingual table hosts if needed"
            - name: Large-group session for fifty or more people
              description: |-
                ## Purpose
                Methods that work for twelve people collapse at sixty: plenary discussion becomes speeches and nobody can see the wall. Large-group sessions need table hosts, structured table work, a harvest method to bring results back, and much tighter logistics.

                ## Milestones
                1. Tables of six to eight with a briefed host for each.
                2. A table worksheet that produces the same output format from every table.
                3. A harvest method such as a gallery walk, a digital form or a reporter from each table.
                4. Outputs consolidated and fed back to all participants within a week.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A session for fifty or more ran with briefed table hosts and a consistent table worksheet, and consolidated outputs went to all participants within a week."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Recruit and brief one host for each table"
                - "Design a worksheet that gives every table the same output format"
                - "Choose a harvest method for bringing results back"
                - "Send consolidated outputs to all participants within a week"
            - name: Facilitating a contentious stakeholder alignment session
              description: |-
                ## Purpose
                Some workshops exist because two departments or two executives are already in conflict, and a badly handled session can harden positions. Separate interviews beforehand, a design that starts from shared facts and interests, careful sequencing and agreed rules on what happens to the output let the group find what it can agree on.

                ## Milestones
                1. A private conversation with each main party before design starts.
                2. A map of shared interests, real disagreements and misunderstandings.
                3. A design that builds agreement on facts before tackling options.
                4. A written record of what was agreed, what remains open and who decides the open points.

                ## Notes
                If the conflict is about a person or a grievance rather than a business question, a workshop is the wrong tool. Point the sponsor to HR or a mediator.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "After private conversations with each party, a session records agreed points, open points and who decides each open point."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Hold a private conversation with each main party"
                - "Map shared interests and real disagreements"
                - "Sequence the design from shared facts to options"
                - "Record agreed points, open points and who decides each"
            - name: Workshop series design across an engagement
              description: |-
                ## Purpose
                Long engagements often need four to eight workshops that build on each other, and designing each in isolation leads to repeated debates and lost decisions. A series plan that shows how each session's output feeds the next, with a consistent format and a decision log across all of them, gives the client a visible thread from start to finish.

                ## Milestones
                1. A one-page series map showing every workshop, its output and what it feeds.
                2. A consistent opening, closing and write-up format used in every session.
                3. A running decision log carried from one workshop to the next.
                4. A mid-series check with the sponsor on whether the sequence still fits.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A series map and a running decision log exist for an engagement, and every session in the series has used the same opening and write-up format."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw a one-page map of every workshop and its output"
                - "Set a standard opening, closing and write-up format"
                - "Start a decision log that carries across sessions"
                - "Review the sequence with the sponsor at the midpoint"
                - "Update the series decision log after each session @recurring(weekly:thu)"
            - name: Advanced facilitation training or certification decision
              description: |-
                ## Purpose
                After a dozen or so workshops, structured training can close gaps that experience alone does not, and some public sector and development clients ask for a recognised facilitation credential. Comparing a few options on content, assessment, cost and recognition, against your own gaps and goals, leads to a clear choice rather than an impulse booking.

                ## Milestones
                1. Your top three gaps from the practice log written down.
                2. Three courses or certifications compared on content, assessment, time, cost and recognition.
                3. A choice made, or a deliberate decision to wait, with reasons.
                4. If you go ahead, dates booked and funding agreed with your firm where relevant.

                ## Notes
                Check whether your clients or your firm actually value a credential before paying for one. Practice with feedback often matters more.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of three training options against your top gaps ends in a recorded decision to book one or to wait."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List your top three gaps from the practice log"
                - "Ask two clients or partners whether a credential matters to them"
                - "Compare three options on content, cost and recognition"
                - "Record your decision and the reasons"
            - name: Teaching client staff to run their own workshops
              description: |-
                ## Purpose
                Clients who depend on consultants to run every workshop stall when the team leaves. Coaching two or three client staff through design, co-facilitation and then solo delivery, with your templates handed over, leaves a capability that keeps working after the engagement ends.

                ## Milestones
                1. Two or three client staff chosen with their managers' agreement.
                2. A short session on design principles and your core methods.
                3. Each person co-facilitating one block, then leading one session with you observing.
                4. Templates, the exercise library extract and the write-up format handed over.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least two client staff have each led a session with you observing, and the templates and methods have been handed over."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree two or three client staff with their managers"
                - "Run a ninety-minute session on design and core methods"
                - "Observe each person leading a session and give written feedback"
                - "Hand over templates, methods and the write-up format"
            - name: Facilitation playbook for your practice or firm
              description: |-
                ## Purpose
                Experienced facilitators carry their method in their heads, which makes it hard to delegate and impossible for a growing team to copy. A short playbook of your design principles, standard agendas for the five most common workshop types, templates and quality checks lets others deliver to the same standard.

                ## Milestones
                1. Design principles written in one page.
                2. Standard agendas for the five most common workshop types you run.
                3. Templates for the brief, run sheet and write-up collected in one place.
                4. The playbook tested by a colleague designing a workshop from it alone.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A playbook with principles, five standard agendas and templates exists, and a colleague has designed a workshop from it without help."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write your design principles on one page"
                - "Ask the agent to turn your five most common agendas into standard formats"
                - "Collect brief, run sheet and write-up templates in one folder"
                - "Ask a colleague to design a workshop using only the playbook"
                - "Review the playbook against the past year of workshops @recurring(yearly)"
---

# Workshop Facilitation

A good client workshop looks effortless and is almost entirely preparation: one decision the session exists to make, the right people in the room, exercises chosen for the job and a write-up that turns sticky notes into commitments. This area starts with foundations (the objective, the participant map, the agenda, the room and the remote set-up, your kit and an exercise library), then the operating routines around every session, the core facilitation skills, decisions about format, tools and co-facilitation, the workshop types consultants run most often, variants for juniors, independents and senior or large groups, and finally specialist work such as contentious alignment sessions, multi-workshop series and teaching clients to facilitate themselves.

The rhythm is a two-week countdown and prework reminders before each session, a write-up within 48 hours, a fortnightly action chase afterwards, a monthly practice log and a quarterly refresh of your exercise library and kit. The Operational checklist, Meeting notes, Feedback themes, Development plan and Risk register templates pair with the logistics checklist, the write-up, participant feedback, your skills plan and the pre-mortem. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
