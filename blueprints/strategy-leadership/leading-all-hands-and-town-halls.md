---
id: strategy-leadership.leading-all-hands-and-town-halls
name: Leading All-Hands and Town Halls
description: "All-hands and town halls people attend and trust: a clear purpose and format, honest question handling, a production rhythm, hard announcements done well and proof that people leave more aligned."
category: business
version: 1.0.0
tags: [strategy-leadership, leading-all-hands-and-town-halls, manager, founder, team, town-hall, internal-communications, q-and-a]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - meeting-notes
    - feedback-themes
    - metrics-log
    - purchase-decision
    - risk-register
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Leading All-Hands and Town Halls
          description: "Running all-hands meetings and town halls that explain strategy, answer hard questions honestly and leave people more aligned."
          projects:
            - name: All-hands purpose and audience statement
              description: |-
                ## Purpose
                Most all-hands drift into a parade of departmental updates because nobody wrote down what the meeting is for. A short statement naming the audience, the two or three jobs the session does (explain strategy, answer questions, recognise work) and what it deliberately does not do gives every agenda decision a test to pass.

                ## Milestones
                1. A one-paragraph purpose statement naming who the all-hands is for and the jobs it does.
                2. A short list of what the all-hands is not for, such as routine status updates.
                3. The statement agreed with the co-founders or leadership team.
                4. The statement pinned in the all-hands planning folder and read before each agenda is set.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written purpose statement for the all-hands, agreed by the leadership team and stored where every agenda is drafted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down in one sentence why the all-hands exists today"
                - "List the three jobs the session must do and two it should drop"
                - "Share the draft with the leadership team for comment"
                - "Pin the agreed statement at the top of the planning folder"
            - name: Audit of the last six all-hands
              description: |-
                ## Purpose
                Before changing anything, look at what the meeting has actually been. Pulling the agendas, recordings, attendance and questions from the last six sessions shows how many minutes went on updates versus strategy and questions, which topics were dodged, and whether attendance is quietly falling.

                ## Milestones
                1. Agendas, recordings and attendance numbers gathered for the last six sessions.
                2. Minutes per agenda segment tallied into updates, strategy, recognition and Q&A.
                3. Every question asked listed, with whether it was answered live, later or never.
                4. A one-page summary of three patterns worth changing.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page audit covering six sessions, with time per segment, attendance trend and answered rate for questions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the agendas and recordings for the last six all-hands"
                - "Time each segment and sort it into updates, strategy, recognition or Q&A"
                - "List every question asked and mark how it was answered"
                - "Write a one-page summary of the three patterns to change"
            - name: All-hands cadence, length and format decision
              description: |-
                ## Purpose
                Monthly or quarterly, 30 or 60 minutes, in person, hybrid or fully remote: each choice changes who comes and what can be covered. Deciding these once, with reasons, stops the format being reinvented every time a new leader joins or the calendar gets crowded.

                ## Milestones
                1. Two or three cadence and length options written out with their trade-offs.
                2. The view of a sample of staff from different teams and locations gathered.
                3. A decision recorded on frequency, length and in-person, hybrid or remote format.
                4. A date set to revisit the decision in a year.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded decision on all-hands frequency, length and format, with the reasons and a review date a year out."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write out three cadence and length options with their trade-offs"
                - "Ask eight people across teams and sites which option suits them"
                - "Record the chosen frequency, length and format with reasons"
                - "Revisit the all-hands format against attendance and pulse scores @recurring(yearly)"
            - name: Standing all-hands agenda skeleton
              description: |-
                ## Purpose
                Using a repeatable running order means each session starts from structure rather than a blank page, and staff learn where the parts they care about sit. A typical skeleton for 45 minutes puts context and strategy first, a short wins segment in the middle and at least a third of the time on questions at the end.

                ## Milestones
                1. A running order with named segments and minutes for each.
                2. At least a third of the time protected for live questions.
                3. Rules for what earns a slot, such as a decision or change that affects many people.
                4. The skeleton used for the next session without changes to its timings.

                ## Notes
                The most common failure is letting the Q&A absorb every overrun. Cut a segment rather than the questions.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written agenda skeleton with timed segments, a protected Q&A block of at least a third of the session, and slot rules."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a running order with minutes against each segment"
                - "Protect a Q&A block of at least a third of the session"
                - "Write two or three rules for what earns an agenda slot"
                - "Use the skeleton for the next session and note where it overran"
            - name: All-hands roles and owners
              description: |-
                ## Purpose
                When one leader is host, producer, timekeeper and question reader at once, something slips: the stream fails, the timing collapses or the hard question never gets read out. Naming a host, a producer, a Q&A moderator, a technical lead and a note taker, each with a deputy, makes the session survive holidays and illness.

                ## Milestones
                1. Five roles defined in a sentence each: host, producer, moderator, technical lead, note taker.
                2. A named owner and deputy for every role.
                3. Hand-offs agreed, such as when the producer gives the host the final running order.
                4. The role list stored with the run sheet.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A role list naming an owner and deputy for host, producer, moderator, technical lead and note taker, stored with the run sheet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-line description for each of the five all-hands roles"
                - "Ask a named owner and a deputy to take each role"
                - "Agree when the running order and slides pass from producer to host"
                - "Save the role list next to the run sheet"
            - name: Question intake channel with an anonymous option
              description: |-
                ## Purpose
                People ask the questions that matter only when they have somewhere safe to put them, before the meeting as well as during it. A single intake channel, open all month, with an anonymous option and upvoting, surfaces what the organisation is actually worried about rather than what the confident few say into a microphone.

                ## Milestones
                1. One channel chosen for questions, open between sessions as well as live.
                2. An anonymous option switched on, with the rules on moderation published.
                3. Upvoting enabled so the most shared concerns rise to the top.
                4. The channel announced to every team, including sites without regular desk access.
                5. At least ten questions submitted before the next session.

                ## Notes
                Publish the moderation rule plainly: questions are removed only for abuse or personal details about a named colleague, never because they are uncomfortable.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A live question channel with anonymous submission and upvoting, published moderation rules and ten or more questions before the next session."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick the single place where all-hands questions will be collected"
                - "Switch on anonymous submission and upvoting"
                - "Write and publish a two-sentence moderation rule"
                - "Announce the channel in every team channel and on site noticeboards"
            - name: Hybrid room, stream and audio set-up
              description: |-
                ## Purpose
                Remote attendees forgive plain slides but not audio they cannot hear or questions from the room they cannot follow. Fixing the microphones, the stream, the camera angle and the way room questions reach remote people before the next session is the single largest improvement most hybrid town halls can make.

                ## Milestones
                1. A room with a mic for the speaker and a handheld or roaming mic for audience questions.
                2. A stream or meeting link tested from a home connection and a phone.
                3. A rule that every room question is repeated or asked into a mic.
                4. A full technical rehearsal completed two days before the session.
                5. A fallback plan written for a failed stream, such as a dial-in or a recording within the hour.

                ## Notes
                Start from the **Operational checklist** template for the technical rehearsal.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A hybrid set-up rehearsed end to end, with audience mics, a tested stream and a written fallback for stream failure."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book the room and check what microphones it has for the audience"
                - "Join a test stream from a home connection and a phone"
                - "Run a full technical rehearsal two days before the session"
                - "Write the fallback plan for a failed stream"
            - name: Captions, recordings and slides for everyone
              description: |-
                ## Purpose
                Colleagues who are deaf or hard of hearing, working in a second language, on a night shift or on leave all miss the all-hands unless it is built for them. Live captions, a recording with a searchable transcript and slides shared on the day make the meeting reach the whole organisation rather than whoever was free at 4pm.

                ## Milestones
                1. Live captions switched on and checked for accuracy on names and product terms.
                2. Slides sent to attendees at the start of the session for screen readers and small screens.
                3. A recording and transcript published within a working day.
                4. A short request sent to colleagues asking what still gets in the way.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The next three sessions each have live captions, slides shared on the day and a recording with transcript published within a working day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Turn on live captions and add company names and terms to the dictionary"
                - "Share the slide file in the chat when the session starts"
                - "Ask three colleagues who rely on access features what still gets in the way"
                - "Check captions, transcript and slide sharing worked after the session @recurring(monthly:10)"
            - name: A time slot that works across zones and shifts
              description: |-
                ## Purpose
                Holding the session at 5pm in head office makes it midnight for one office and the middle of a shift for the warehouse. Mapping where people are and when they can actually stop work shows whether one slot can work, or whether a repeat session or a rotating time is fairer.

                ## Milestones
                1. Headcount mapped by time zone and by shift pattern.
                2. The share of staff who can attend each candidate slot calculated.
                3. A decision between one slot, a repeat session or a rotating time.
                4. The slot published for the next twelve months.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A published twelve-month schedule of all-hands slots, chosen from the share of staff able to attend each option."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export headcount by location and shift pattern from the HR system"
                - "Count who can attend each of three candidate slots"
                - "Choose one slot, a repeat session or a rotating time"
                - "Publish the next twelve months of dates"
            - name: Monthly all-hands production run sheet
              description: |-
                ## Purpose
                Behind every session that looks effortless sits a list: speakers confirmed, slides in by a deadline, the stream tested, questions pulled, captions on. Running the same run sheet every month, counting back from the session date, removes most of the scramble on the morning itself.

                ## Milestones
                1. A run sheet with every step from speaker confirmation to publishing the recording.
                2. A slide deadline set for three working days before the session and kept.
                3. A named owner against every line.
                4. Three consecutive sessions run from the sheet with no missed step.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive all-hands run from the same run sheet, with slides in three working days ahead and no missed step."
                cadence: rolling
              tasks:
                - "List every production step from speaker invite to publishing the recording"
                - "Draft the running order and confirm speakers for the next session @recurring(monthly:8)"
                - "Chase slides from every speaker three working days before the session"
                - "Note any step that was missed and add it to the sheet"
            - name: Weekly question backlog sweep
              description: |-
                ## Purpose
                Questions that arrive between sessions go stale if they wait a month, and the urgent ones deserve an answer this week. A short weekly sweep sorts new questions into answer now in writing, take to the next session or route to the right owner, so nothing sits unread.

                ## Milestones
                1. A backlog with a status for every open question.
                2. A weekly 20-minute sweep held with the moderator.
                3. Each question tagged answer now, next session or route to an owner.
                4. No question older than four weeks without a response.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every question in the backlog has a status, and none is older than four weeks without a published response."
                cadence: rolling
              tasks:
                - "Add a status column to the question backlog"
                - "Sort new questions into answer now, next session or route @recurring(weekly:fri)"
                - "Send routed questions to a named owner with a reply-by date"
                - "Flag any question older than four weeks to the host"
            - name: Leadership prep huddle before each session
              description: |-
                ## Purpose
                Town halls go wrong when leaders contradict each other live or are surprised by a question everyone else saw coming. A 30-minute huddle a few days before, going through the top upvoted questions and agreeing who answers what and how much can be said, keeps the leadership team consistent without scripting it.

                ## Milestones
                1. A standing 30-minute huddle booked three working days before each session.
                2. The top ten questions reviewed, each with a named answerer.
                3. Limits agreed on what cannot yet be shared, with the honest reason why.
                4. No live contradiction between leaders in the next three sessions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A prep huddle held before each of the next three sessions, with the top ten questions assigned to named answerers."
                cadence: rolling
              tasks:
                - "Book a standing 30-minute huddle three working days before each session"
                - "Review the ten most upvoted questions with the leadership team @recurring(monthly:5)"
                - "Agree who answers each question and what cannot be shared yet"
                - "Send the host a one-page brief after the huddle"
            - name: Follow-up notes and recording within a day
              description: |-
                ## Purpose
                Half the organisation learns what was said from the follow-up, not the session. A short written note with the key messages, decisions, the recording link and the questions still open, sent within a working day, stops the corridor version from becoming the official one.

                ## Milestones
                1. A follow-up note format of no more than one screen.
                2. Key messages, decisions and open questions in every note.
                3. The recording link and transcript included.
                4. Notes sent within one working day for three sessions running.

                ## Notes
                Start from the **Meeting notes** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Follow-up notes with key messages, decisions, open questions and the recording link sent within one working day for three sessions running."
                cadence: rolling
              tasks:
                - "Set up a one-screen follow-up note format"
                - "Ask the agent to draft the follow-up note from the transcript"
                - "Send the follow-up note and recording link to all staff @recurring(monthly:12)"
                - "List the questions still open at the bottom of each note"
            - name: Published answers to questions not reached live
              description: |-
                ## Purpose
                Nothing kills a question channel faster than letting unanswered questions vanish when the clock runs out. Publishing a written answer to every remaining question within two weeks, with the name of the leader who answered, shows the questions were heard and builds the habit of asking.

                ## Milestones
                1. A shared page where written answers are published after each session.
                2. Every question not reached live answered in writing within two weeks.
                3. Each answer attributed to a named leader.
                4. A link to the answers page in every follow-up note.

                ## Notes
                If a question cannot be answered, say so and say when it might be. Silence reads as evasion.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every question not reached live has a named written answer published within two weeks of the session."
                cadence: rolling
              tasks:
                - "Create the shared page for written answers"
                - "Assign each unanswered question to a named leader"
                - "Publish the written answers from the last session @recurring(monthly:15)"
                - "Add the answers page link to the next follow-up note"
            - name: Two-question pulse after every session
              description: |-
                ## Purpose
                Leaders usually judge an all-hands by how it felt from the stage, which is the least reliable seat. A two-question pulse sent straight after (how useful was it, and what should change) gives a score to track and a stream of specific suggestions.

                ## Milestones
                1. Two questions fixed and kept the same across sessions.
                2. The pulse sent within an hour of every session.
                3. Response rate and score recorded each time.
                4. Comment themes summarised and one change made per quarter from them.

                ## Notes
                Start from the **Feedback themes** template to group comments.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A two-question pulse sent after every session, with score and response rate logged and one change made each quarter from the comments."
                cadence: rolling
              tasks:
                - "Write the two pulse questions and keep them fixed"
                - "Send the pulse within an hour of the session ending @recurring(monthly:13)"
                - "Group the comments into themes after each pulse"
                - "Pick one change a quarter from the strongest theme"
            - name: All-hands metrics log
              description: |-
                ## Purpose
                Attendance, live and recorded views, questions submitted, share answered and pulse score, tracked month by month, tell you whether the all-hands is earning people's time. A log kept for a year is also the evidence you need when someone proposes cancelling it or doubling its length.

                ## Milestones
                1. Five measures chosen and defined: attendance, recording views, questions, answered share, pulse score.
                2. A log with a row per session.
                3. The log updated within a week of each session.
                4. A short trend note written each quarter.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log with five defined measures, updated within a week of every session, with a quarterly trend note."
                cadence: rolling
              tasks:
                - "Define the five measures and where each number comes from"
                - "Set up the log with a row per session"
                - "Enter the latest session's numbers in the log @recurring(monthly:20)"
                - "Write a three-line trend note at the end of each quarter"
            - name: Quarterly strategy and results town hall
              description: |-
                ## Purpose
                Monthly all-hands are good for news, but once a quarter people need the bigger picture: where the strategy stands, what the results say and what changes for the next three months. A longer, more prepared quarterly town hall ties the regular sessions back to the plan.

                ## Milestones
                1. A quarterly session booked in the calendar for the year.
                2. Each session covers progress against the stated priorities, results and what changes next.
                3. Every priority shown with an honest status, including the ones off track.
                4. Questions on the quarter answered live or in writing within two weeks.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Four quarterly town halls held in a year, each reporting honest status on every stated priority."
                cadence: cyclic
              tasks:
                - "Book four quarterly town hall dates for the year"
                - "Pull status on each strategic priority from the plan owners"
                - "Prepare and rehearse the quarterly strategy and results town hall @recurring(quarterly)"
                - "Mark priorities that are off track as plainly as the ones on track"
            - name: Recognition and wins segment pipeline
              description: |-
                ## Purpose
                Recognition that always goes to sales or to the loudest team breeds resentment, and a scramble for wins the day before produces the same names. A running list of nominations from across the organisation, with a light rule for spreading credit, makes the segment something people look forward to.

                ## Milestones
                1. A nomination form or channel open to everyone.
                2. A rule that no team is featured in consecutive sessions.
                3. Two or three wins chosen per session, each naming the people involved.
                4. A record of which teams were featured over the year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every team has been featured at least once across twelve months, recorded in the recognition log."
                cadence: rolling
              tasks:
                - "Open a nomination form for wins and the people behind them"
                - "Choose two or three wins for the next session from the nominations @recurring(monthly:3)"
                - "Check the log so no team is featured twice in a row"
                - "Tell nominated people a week ahead that they will be named"
            - name: Speaker rotation beyond the leadership team
              description: |-
                ## Purpose
                When only the founders or executives ever speak, the all-hands becomes a broadcast and the rest of the organisation stays invisible. Rotating a slot to an engineer, a support lead or a site manager to explain their work gives people a reason to tune in and builds speakers for the future.

                ## Milestones
                1. One slot per session reserved for a speaker outside the leadership team.
                2. A list of upcoming speakers for the next three sessions.
                3. Each guest speaker offered a 30-minute prep session.
                4. A year of sessions with at least eight different guest speakers.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least eight different speakers from outside the leadership team presented across twelve months of sessions."
                cadence: rolling
              tasks:
                - "Reserve one ten-minute slot per session for a guest speaker"
                - "Ask managers to suggest people with work worth showing"
                - "Confirm the guest speaker three sessions ahead @recurring(monthly:25)"
                - "Offer each guest a 30-minute prep session with the host"
            - name: Manager cascade after each town hall
              description: |-
                ## Purpose
                Town hall messages land in team meetings, not on the stage. Giving managers a short brief the day before, with the key messages, the likely questions and what they can say, means the next day's team conversations reinforce the session rather than contradict it.

                ## Milestones
                1. A one-page manager brief sent the day before each session.
                2. Key messages, likely questions and suggested answers in every brief.
                3. Managers asked to cover the session in their next team meeting.
                4. Questions from team meetings fed back into the backlog.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A manager brief sent before each session, with at least half of managers confirming they discussed it with their team."
                cadence: rolling
              tasks:
                - "Draft a one-page brief template for managers"
                - "Send managers the brief the day before each session @recurring(monthly:11)"
                - "Ask managers to cover the session in their next team meeting"
                - "Add questions raised in team meetings to the backlog"
            - name: Answering hard questions honestly on stage
              description: |-
                ## Purpose
                The question about pay, layoffs or a failed launch is the moment people decide whether the town hall is worth attending. Practising a simple structure (acknowledge the concern, give the straight answer or the honest limit, say what happens next) with a colleague playing the sceptic makes the real answer calmer and shorter.

                ## Milestones
                1. A list of the ten hardest questions likely in the next quarter.
                2. A spoken answer under 90 seconds drafted for each.
                3. Two practice rounds with a colleague asking the questions as bluntly as possible.
                4. A recorded practice watched back and one habit to drop noted.

                ## Notes
                Avoid answering a question with a different, easier one. People notice every time.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Spoken answers under 90 seconds prepared for the ten hardest likely questions, practised twice with a colleague."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the ten hardest questions you could be asked next quarter"
                - "Draft a 90-second answer to each using acknowledge, answer, next step"
                - "Ask a colleague to put the questions to you as bluntly as they can"
                - "Record one practice and note the habit you most want to drop"
            - name: Saying I do not know yet, with a follow-up date
              description: |-
                ## Purpose
                Leaders under pressure fill silence with a guess, then spend months walking it back. Learning to say you do not know, or cannot share yet, and to give a date by which you will come back, keeps trust intact and turns the open question into a visible commitment.

                ## Milestones
                1. Three phrasings practised for not knowing, not deciding yet and not being able to share.
                2. Every live not-yet answer logged with a promised date.
                3. Each logged commitment closed by its date or updated publicly.
                4. No guessed answer later contradicted over a quarter.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every not-yet answer given live over a quarter is logged with a date and closed or updated publicly by that date."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write three short phrasings for not knowing, not decided and cannot share"
                - "Practise them aloud with the moderator before the next session"
                - "Log every not-yet answer with the date you promised"
                - "Close or update each logged commitment by its date"
            - name: Telling the strategy in ten spoken minutes
              description: |-
                ## Purpose
                Nobody in the room will remember a strategy that takes 40 slides to explain. Building a ten-minute spoken version (where we are, what we are choosing, what we are not doing and what it means for your team) gives people something they can repeat to a new joiner.

                ## Milestones
                1. A ten-minute talk outline with four parts: situation, choices, what we stop, what it means for teams.
                2. No more than six slides, each with one point.
                3. Two concrete examples of the strategy changing a real decision.
                4. Three colleagues able to summarise the talk in a sentence after a run-through.

                ## Notes
                This is the spoken version for the room. The written strategy memo is a different project with its own audience.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A ten-minute strategy talk of six slides or fewer that three test listeners can summarise in a sentence."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Outline the talk in four parts: situation, choices, stops, team impact"
                - "Pick two real decisions the strategy changed as examples"
                - "Cut the slides to six with one point each"
                - "Run it for three colleagues and ask each for a one-sentence summary"
            - name: Slides that work in a hall and on a phone
              description: |-
                ## Purpose
                Town hall slides are seen on a projector at the back of a canteen and on a phone screen in a van. Learning a few rules (one idea per slide, large type, charts with one message, no dense tables) makes the content readable everywhere and shortens the talk.

                ## Milestones
                1. A short slide style guide: minimum font size, one idea per slide, chart titles that state the point.
                2. A master template built to the guide.
                3. The last session's deck rebuilt to the guide as a worked example.
                4. Guest speakers sent the guide with their invitation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page slide guide and master template, with a rebuilt example deck, sent to every speaker with their invitation."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "View the last deck on a phone and note every slide you cannot read"
                - "Write a one-page slide guide with a minimum font size"
                - "Rebuild the last deck to the guide as an example"
                - "Send the guide to every speaker with their invitation"
            - name: Moderating a live Q&A fairly
              description: |-
                ## Purpose
                Whoever moderates decides which questions get asked, and so decides whether the Q&A is credible. Learning to read top-voted questions word for word, mix anonymous and named voices, follow up when an answer misses the point and keep time is a skill worth practising before it matters.

                ## Milestones
                1. Moderation rules written: read top-voted questions verbatim, no softening, no screening out discomfort.
                2. A practice session run with a mock question queue.
                3. One follow-up question asked when an answer missed the point.
                4. A sample of three sessions checked for whether the top-voted questions were all asked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written moderation rules, a practice run, and three sessions in which every one of the top five voted questions was read out."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the moderation rules and share them with the host"
                - "Run a 20-minute practice with a mock question queue"
                - "Read the top-voted questions word for word in the next session"
                - "Check afterwards that the top five questions were all asked"
            - name: Explaining numbers to a non-finance audience
              description: |-
                ## Purpose
                Revenue, margin, burn and runway mean little to most staff until someone explains what they mean for jobs, hiring and pay. Learning to present three or four numbers with plain definitions, a comparison and the so-what makes results updates useful rather than intimidating.

                ## Milestones
                1. The three or four numbers that matter most chosen with the finance lead.
                2. A plain one-line definition written for each.
                3. Each number shown against last period and the plan.
                4. A test run with two colleagues outside finance who can explain each number back.

                ## Notes
                Check with finance and, for listed companies, with legal what can be shared internally and when.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three or four key numbers presented with plain definitions and comparisons, explained back correctly by two non-finance colleagues."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree with the finance lead the three or four numbers to show"
                - "Write a one-line plain definition for each number"
                - "Chart each against last period and the plan"
                - "Ask two colleagues outside finance to explain the numbers back"
            - name: Rehearsal and timing discipline
              description: |-
                ## Purpose
                Unrehearsed speakers run long, and the overrun almost always comes out of the questions. A timed run-through the day before, with a visible clock on the day and a producer who can cut a segment, keeps the session to time and protects the Q&A.

                ## Milestones
                1. A timed run-through held the day before each session.
                2. Every segment within a minute of its slot in rehearsal.
                3. A visible countdown clock for speakers on the day.
                4. Three sessions running to time with the Q&A block intact.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three consecutive sessions finish on time with the full Q&A block intact, after a timed rehearsal the day before each."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book a 45-minute timed run-through the day before the session"
                - "Time each speaker against their slot in rehearsal"
                - "Set up a countdown clock visible to speakers"
                - "Agree with the producer which segment gets cut if time runs short"
            - name: Anonymous versus named questions decision
              description: |-
                ## Purpose
                Anonymity brings out the real worries but also the occasional cheap shot; named questions are more civil but quieter. Looking at your own question data and staff views, then choosing a policy with clear moderation rules, settles an argument that otherwise resurfaces after every awkward session.

                ## Milestones
                1. Share of anonymous and named questions over the last six sessions counted.
                2. Examples of abusive or unfair questions, if any, reviewed with HR.
                3. A policy chosen: anonymous allowed, named only, or anonymous with moderation.
                4. The policy and its reasons published to staff.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A published question policy with its reasons, based on six sessions of question data."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count anonymous and named questions over the last six sessions"
                - "Review any abusive or unfair questions with HR"
                - "Choose the question policy and write down the reasons"
                - "Publish the policy in the question channel"
            - name: Question and polling tool selection
              description: |-
                ## Purpose
                Your question tool shapes the meeting: whether people can upvote, stay anonymous, join from a phone without an account or see questions in their own language. Comparing three options against the same criteria avoids buying whatever the last vendor demoed.

                ## Milestones
                1. Five criteria written: anonymity, upvoting, phone access without login, integration with the meeting platform, data storage.
                2. Three tools compared against the criteria.
                3. A pilot run in one session.
                4. A choice recorded with cost and renewal date.

                ## Notes
                Start from the **Purchase decision** template. Check with IT where question data is stored before using it for anonymous questions.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A question tool chosen against five written criteria after a one-session pilot, with cost and renewal date recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the five criteria the question tool must meet"
                - "Compare three tools against the criteria"
                - "Pilot the leading tool in one session"
                - "Record the choice with cost and renewal date"
            - name: Live versus prerecorded segments
              description: |-
                ## Purpose
                Prerecording the polished parts (a product demo, a customer story, an update from a distant site) frees live time for questions and removes the riskiest technical moments. Too much prerecording, though, turns the town hall into a video playlist that nobody attends live.

                ## Milestones
                1. Each recurring segment labelled live, prerecorded or either.
                2. A rule that leadership answers and Q&A are always live.
                3. One prerecorded segment trialled and timed.
                4. Pulse scores compared for the session with and without it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule on which segments are live and which may be prerecorded, tested in one session and compared on pulse score."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Label each recurring segment live, prerecorded or either"
                - "Write the rule that leadership answers and Q&A stay live"
                - "Trial one prerecorded demo or site update"
                - "Compare the pulse score with the previous session"
            - name: Cutting the all-hands to 45 minutes
              description: |-
                ## Purpose
                Sessions creep from 45 minutes to 75 as each team adds an update, and attendance falls with every extra quarter hour. Moving routine updates to a written digest and holding the session to 45 minutes usually raises both attendance and the share of time on questions.

                ## Milestones
                1. Every update segment from the last three sessions listed with its length.
                2. Routine updates moved to a written digest sent before the session.
                3. The session held to 45 minutes for three months.
                4. Attendance and Q&A share compared before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three months of sessions held to 45 minutes, with routine updates in a written digest and attendance compared before and after."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every update segment from the last three sessions with its length"
                - "Tell department heads their routine updates move to a written digest"
                - "Send the first written digest two days before the session"
                - "Compare attendance and Q&A share after three months"
            - name: Bringing frontline and shift staff into the town hall
              description: |-
                ## Purpose
                Drivers, store staff, nurses and plant operators often cannot join a midday stream, and town halls built around office workers tell them they matter less. Paid time to attend, a site screening, a repeat session at shift change or a site visit by the host closes the gap.

                ## Milestones
                1. Frontline attendance measured separately from office attendance.
                2. Two or three site managers asked what would make attendance possible.
                3. At least one change made, such as paid attendance time or a repeat session at shift change.
                4. Frontline attendance and questions tracked for the next three sessions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One change made for frontline access, with frontline attendance and question counts tracked separately for three sessions."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Split the last session's attendance into frontline and office staff"
                - "Ask three site managers what would make attendance possible"
                - "Agree with HR and operations whether attendance time is paid"
                - "Track frontline attendance and questions for three sessions"
            - name: Town halls for a multilingual workforce
              description: |-
                ## Purpose
                Where a large share of staff work in another language, an English-only town hall reaches them second hand, if at all. Live interpretation for the main languages, translated captions or a translated follow-up note within a day means the same message reaches everyone at the same time.

                ## Milestones
                1. Headcount by main working language established.
                2. An approach chosen per language: live interpretation, translated captions or translated notes.
                3. Company terms and product names given agreed translations.
                4. The next session delivered in every language over a tenth of the workforce uses.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every language spoken by more than a tenth of staff has interpretation, translated captions or a translated note within a day of the session."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find out how many staff work mainly in each language"
                - "Choose interpretation, captions or translated notes for each language"
                - "Build a glossary of company terms with agreed translations"
                - "Have one native speaker per language check the first translated note"
            - name: Reviving a town hall people stopped attending
              description: |-
                ## Purpose
                When attendance has halved and the questions have dried up, the problem is rarely the slides: it is usually that hard questions went unanswered or the content repeated what people already knew. Asking non-attenders directly, then making two visible changes and saying so, is how a tired format earns its audience back.

                ## Milestones
                1. Ten to fifteen people who stopped attending asked why, in short conversations.
                2. The two most common reasons named.
                3. Two changes announced in response, with the link to what people said.
                4. Attendance and questions back above the level of six months ago.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Two announced changes based on interviews with ten or more non-attenders, and attendance back above its level six months earlier."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick ten to fifteen people who stopped attending and ask them why"
                - "Write down the two most common reasons"
                - "Announce two changes and link them to what people said"
                - "Compare attendance after three sessions with six months ago"
            - name: Annual kickoff all-hands
              description: |-
                ## Purpose
                January, or whenever your year begins, brings the one session where most people will listen to the whole strategy. A kickoff that reviews last year honestly, sets out the three or four priorities for this one and shows each team where it fits sets the tone for every quarterly session after it.

                ## Milestones
                1. A date, venue or platform booked eight weeks ahead.
                2. Last year reviewed in a few honest slides, misses included.
                3. This year's three or four priorities presented with an owner each.
                4. Every department able to say which priority it serves.
                5. Recording, slides and priorities published the same week.

                ## Notes
                Start from the **Operational checklist** template for logistics and rehearsal.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kickoff held with last year reviewed, three or four priorities presented with owners, and materials published within a week."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Book the kickoff date and venue or platform eight weeks ahead"
                - "Draft three honest slides on what last year delivered and missed"
                - "Confirm the year's priorities and owners with the leadership team"
                - "Publish the recording, slides and priorities the same week"
            - name: Announcing difficult news at an all-hands
              description: |-
                ## Purpose
                Restructures, site closures, missed targets or a cancelled bonus will be judged by how they were told. Planning the sequence (who hears first, what the all-hands says, where people go next), preparing for the hardest questions and checking with HR and legal turns a dreaded meeting into one people later describe as fair.

                ## Milestones
                1. The sequence agreed: affected people and managers told before the all-hands.
                2. Key messages and the hardest twenty questions prepared, checked by HR and legal.
                3. Support set up for the same day: managers briefed, HR sessions, any employee assistance service.
                4. The session held with time for questions and a written summary sent within the hour.
                5. A follow-up session or written answers within a week.

                ## Notes
                Start from the **Risk register** template. Employment consultation rules vary by country, so take advice from HR and an employment lawyer before announcing anything that affects jobs.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A difficult announcement delivered after affected people were told first, with HR and legal sign-off, a same-hour written summary and a follow-up within a week."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Map who must hear the news before the all-hands and in what order"
                - "List the twenty hardest questions and draft honest answers"
                - "Have HR and legal review the messages and answers"
                - "Brief managers and set up same-day support before the session"
            - name: Results day town hall
              description: |-
                ## Purpose
                On the day annual or half-year results are published, staff read the headlines in the press before hearing from their own leaders. A town hall timed just after release, explaining what the numbers mean for teams and answering questions, keeps the internal story ahead of the external one.

                ## Milestones
                1. The town hall timed for just after the public release, agreed with the company secretary or legal.
                2. What can and cannot be said internally before release confirmed in writing.
                3. A plain-language explanation of the results and what they mean for teams prepared.
                4. Questions answered live or in writing within a week.

                ## Notes
                For listed companies, inside information rules apply. Never share results internally before public release unless legal has confirmed it.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A results town hall held after public release, with internal disclosure limits confirmed in writing by legal beforehand."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask legal or the company secretary what can be shared and when"
                - "Book the town hall for just after the public release"
                - "Draft a plain-language explanation of what the results mean for teams"
                - "Prepare answers to the five questions staff will ask first"
            - name: Day-one town hall for a newly joined company
              description: |-
                ## Purpose
                On the day an acquisition or merger is announced, the people joining hear rumours from every direction. A town hall for them on day one, run jointly by both leaders, saying what changes now, what does not, and when they will know the rest, sets the tone for everything that follows.

                ## Milestones
                1. Both leaders agreed on the session and its key messages.
                2. A clear list of what changes now, what stays the same and what is not yet decided.
                3. The fifteen likeliest questions answered, including pay, roles and location.
                4. The session held on announcement day with written answers within a week.

                ## Notes
                Check with legal what can be said before the deal completes.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A joint town hall held on announcement day with both leaders, followed by written answers to all questions within a week."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Agree with the other leader the three key messages for day one"
                - "Write what changes now, what stays and what is undecided"
                - "Draft answers to the fifteen likeliest questions with HR"
                - "Check with legal what can be said before the deal completes"
            - name: A new leader's first town hall
              description: |-
                ## Purpose
                Staff form a view of a new chief executive or division head from the first town hall, often before any decision is made. Using that session to say what you have heard, what you do not yet know and how you will decide, rather than announcing a plan, earns time to get the plan right.

                ## Milestones
                1. Twenty or more conversations held with staff at different levels before the session.
                2. Three themes from those conversations ready to share.
                3. A clear statement of what you will and will not decide in the first months.
                4. An open Q&A of at least half the session.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first town hall held after twenty or more staff conversations, sharing three themes heard, with half the session on Q&A."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book twenty short conversations with staff at different levels"
                - "Note the three themes that come up most"
                - "Write what you will and will not decide in your first months"
                - "Give at least half the first town hall to open questions"
            - name: Milestone celebration all-hands
              description: |-
                ## Purpose
                Tenth anniversaries, funding rounds, a big customer win or a product launch each deserve a session that feels different from the usual monthly. Planning a celebration that thanks people by name, tells the story of how the organisation got here and still leaves room for questions makes the moment last.

                ## Milestones
                1. The milestone and date confirmed, with any legal limits on what can be announced.
                2. A short story of how the organisation got here, with names and early photos.
                3. People who made the milestone possible thanked by name.
                4. A short Q&A kept, so the celebration does not feel like spin.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A celebration session held on the milestone date, naming the people who made it possible and keeping a Q&A slot."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the milestone date and anything that cannot yet be announced"
                - "Gather early photos and stories from long-serving colleagues"
                - "List the people to thank by name"
                - "Keep a ten-minute Q&A in the celebration running order"
            - name: A founder's first all-hands at fifteen people
              description: |-
                ## Purpose
                At fifteen people the founder can still talk to everyone at lunch, so a formal all-hands feels odd, yet this is when the habits form. Starting a short monthly session now, with the numbers, the plan and open questions, makes it normal before the company doubles and the founder can no longer reach everyone.

                ## Milestones
                1. A 30-minute monthly slot booked for the whole company.
                2. Cash runway, customers and the plan shared plainly, within what the founders agree is safe to share.
                3. Every question answered, or logged with a date.
                4. Six sessions held without cancelling.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six monthly all-hands held without cancellation, each sharing the plan and key numbers and answering or logging every question."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a 30-minute monthly all-hands for the whole company"
                - "Agree with co-founders which numbers you will share openly"
                - "Open the first session with the plan and what keeps you up at night"
                - "Log any question you could not answer with a date"
            - name: Scaling the all-hands from 50 to 300 people
              description: |-
                ## Purpose
                What worked as a friendly chat at 50 breaks at 300: the open mic favours the confident, updates run long and new joiners miss the context. Redesigning the format in stages, with questions in advance, a moderator and a standing primer for new starters, keeps the session personal as headcount grows.

                ## Milestones
                1. Pre-submitted questions and a moderator introduced.
                2. A five-minute context primer for anyone who joined since the last session.
                3. Department updates moved to a written digest.
                4. The format reviewed each time headcount grows by half.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A redesigned format with pre-submitted questions, a moderator, a new joiner primer and a written digest, reviewed at each 50 percent headcount growth."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Introduce pre-submitted questions and name a moderator"
                - "Add a five-minute primer for people who joined since the last session"
                - "Move department updates into a written digest"
                - "Check headcount growth against the format and adjust @recurring(quarterly)"
            - name: Department all-hands for a functional leader
              description: |-
                ## Purpose
                A head of engineering, sales or operations with 40 to 200 people needs their own all-hands to translate the company strategy into what the department does this quarter. Keeping it short, linked to the company session and heavy on the department's own questions avoids repeating the company all-hands with smaller slides.

                ## Milestones
                1. A monthly department session set for the week after the company all-hands.
                2. Each session links company priorities to department goals.
                3. At least half the time spent on the department's own questions.
                4. Pulse score tracked alongside the company session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly department sessions held the week after the company all-hands, with half the time on questions and a tracked pulse score."
                cadence: rolling
              tasks:
                - "Book the department session for the week after the company all-hands"
                - "Map each company priority to the department's goals"
                - "Run the department all-hands with half the time on questions @recurring(monthly:18)"
                - "Send the same pulse questions as the company session"
            - name: Presenting at the all-hands for the first time
              description: |-
                ## Purpose
                For an individual contributor, a ten-minute slot in front of the whole company can be the most visible moment of the year. Preparing a short, concrete story of the work, rehearsing twice and knowing how to handle a question you cannot answer makes it a good moment rather than a stressful one.

                ## Milestones
                1. The point of the ten minutes written in one sentence.
                2. A talk built around one problem, what the team did and what changed.
                3. Two timed rehearsals, one in front of a colleague.
                4. A plan for a question you cannot answer: say so and offer to follow up.
              priority: low
              frontmatter:
                mode: learning
                output_kind: event-completion
                success_criteria: "A ten-minute all-hands slot delivered within time after two rehearsals, with any unanswered question followed up within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the point of your slot in one sentence"
                - "Build the talk around one problem, the work and the result"
                - "Rehearse twice with a timer, once in front of a colleague"
                - "Follow up on any question you could not answer within a week"
            - name: Producing the town hall as chief of staff or comms lead
              description: |-
                ## Purpose
                Whoever makes the town hall happen is usually not the person on stage, and the job is invisible until it fails. Writing down the producer role, the lead times, the escalation path and the authority to cut a segment makes the work repeatable and gives it the standing it needs.

                ## Milestones
                1. A role description for the producer, including the authority to cut segments.
                2. Lead times agreed with leaders for slides, speakers and questions.
                3. An escalation path for late changes and technical failure.
                4. A monthly technical check of the room and platform.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written producer role with agreed lead times and an escalation path, signed off by the host, with a monthly technical check kept."
                cadence: rolling
              tasks:
                - "Write the producer role, including authority to cut a segment"
                - "Agree slide, speaker and question lead times with the host"
                - "Write the escalation path for late changes and stream failure"
                - "Test the room, stream and caption set-up before the session @recurring(monthly:27)"
            - name: Asynchronous all-hands for a remote-first company
              description: |-
                ## Purpose
                Once the team spans eleven time zones, any live slot excludes someone. A recorded leadership update released on a fixed day, followed by a written ask-me-anything thread open for 48 hours, can reach everyone equally and produce more considered questions than a live call.

                ## Milestones
                1. A fixed release day for a recorded update of under 20 minutes.
                2. A written ask-me-anything thread open for 48 hours after release.
                3. Every question answered in the thread by a named leader.
                4. A short live session kept once a quarter for those who want it.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three async cycles completed, each with a recording under 20 minutes and every thread question answered within 48 hours."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick a fixed release day for the recorded update"
                - "Record an update under 20 minutes"
                - "Open a written ask-me-anything thread for 48 hours"
                - "Answer every thread question with a named leader"
            - name: Town halls during union negotiations
              description: |-
                ## Purpose
                During collective bargaining or a consultation period, what a leader says at a town hall can breach agreements, undermine the process or be quoted at the table. Agreeing with employee relations and legal what topics are off limits, and saying openly that they are, keeps the session honest without creating new problems.

                ## Milestones
                1. Employee relations and legal briefed on the session and its agenda.
                2. A written list of topics that cannot be discussed while talks continue.
                3. A plain explanation for staff of why those topics are off limits.
                4. Questions on off-limit topics logged and answered when talks allow.

                ## Notes
                Labour law differs widely between countries and sectors. Treat this as preparation and take advice from your employment lawyer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of off-limit topics agreed with legal before the session, and every logged question answered once talks allow."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Brief employee relations and legal on the planned agenda"
                - "Write the list of topics that cannot be discussed during talks"
                - "Draft a plain explanation for staff of why"
                - "Log off-limit questions to answer once talks allow"
            - name: Open-book finances in the all-hands
              description: |-
                ## Purpose
                Some leaders share the full profit and loss with every employee, on the view that people make better decisions when they see the numbers. Doing it well takes a few guardrails: what stays confidential, how to read the figures and a regular rhythm so the numbers become familiar rather than alarming.

                ## Milestones
                1. A decision recorded on how much of the accounts to share, agreed with the board or owners.
                2. A short guide on reading the main lines of the accounts.
                3. Confidential items, such as individual pay, explicitly excluded.
                4. Financials shared every quarter with a plain commentary.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Financials shared with all staff each quarter for a year, with an agreed scope, a reading guide and named exclusions."
                cadence: cyclic
              tasks:
                - "Agree with the board or owners how much of the accounts to share"
                - "Write a one-page guide to reading the main lines"
                - "List the confidential items that are never shared"
                - "Present the quarter's financials with a plain commentary @recurring(quarterly)"
            - name: Leak planning for sensitive town halls
              description: |-
                ## Purpose
                Anything said to 500 people may be on social media or in a journalist's inbox within the hour. Assuming a sensitive session will leak, and preparing the external statement, the press contact and the order of telling customers and partners, means a leak becomes a timing problem rather than a crisis.

                ## Milestones
                1. Every planned message tested for how it would read quoted out of context.
                2. An external holding statement drafted and approved.
                3. The press office or spokesperson on standby during and after the session.
                4. Key customers and partners told before or at the same time where needed.

                ## Notes
                Start from the **Risk register** template to list leak scenarios and responses.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An approved holding statement, a named spokesperson on standby and a telling order for customers and partners, ready before the session."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read each planned message as if it were a newspaper quote"
                - "Draft and approve an external holding statement"
                - "Put the spokesperson on standby for the session window"
                - "Agree the order for telling key customers and partners"
            - name: Priority recall check after town halls
              description: |-
                ## Purpose
                The real test of a town hall is whether people can name what matters afterwards. A short quarterly survey asking staff to list the top priorities in their own words, scored against the actual ones, shows whether the message is landing and in which teams it is not.

                ## Milestones
                1. A three-question recall survey written in free text.
                2. Answers scored against the stated priorities.
                3. Recall broken down by department and level.
                4. One change made to the next town hall for the lowest-recall group.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarterly priority recall score by department, with one change to the next town hall aimed at the lowest group."
                cadence: cyclic
              tasks:
                - "Write a three-question recall survey in free text"
                - "Send the recall survey two weeks after the quarterly town hall @recurring(quarterly)"
                - "Ask the agent to score answers against the stated priorities"
                - "Plan one change for the department with the lowest recall"
---

# Leading All-Hands and Town Halls

This area is for the founder, executive or department head who stands in front of the whole organisation, and for the chief of staff or comms lead who makes the session run. It starts with the foundations (what the all-hands is for, an honest audit of the last few, the format, roles, question intake, the room and platform, access for everyone), moves through the monthly production machinery, the speaking and Q&A skills that earn trust, the decisions that reshape a tired format, the dated sessions such as the annual kickoff and a difficult announcement, versions for founders, team leads and first-time presenters, and finally specialist work on labour relations, open-book finances, leaks and measuring alignment.

What repeats is the cycle around each session: a weekly sweep of the question backlog, a prep huddle and run sheet before, notes, recording, published answers and a two-question pulse after, a monthly metrics entry and a quarterly strategy town hall with a priority recall check. The **Operational checklist**, **Meeting notes**, **Feedback themes**, **Metrics log**, **Purchase decision** and **Risk register** templates pair with the run sheet, the follow-up notes, the pulse survey, the metrics log, the question tool choice and sensitive announcements. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
