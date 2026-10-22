---
id: relationships.couples-counselling
name: Couples Counselling
description: "A safe and well-chosen start with the right couples therapist, sessions that tackle your recurring problems, homework you actually practise at home, and a plan for ending well."
category: personal
version: 1.0.0
tags: [relationships, couples-counselling, everyone, couples-therapy, therapist-search, session-notes, homework]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - meeting-notes
    - habit-tracker
    - metrics-log
    - reading-queue
    - feedback-themes
  pillars:
    - name: Relationships & Friendship
      emoji: "🤝"
      description: "The people who make a life: a partner, close friends, wider circles and new connections, kept in good repair through attention, honest conversations, shared plans and the occasions worth marking."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Couples Counselling
          description: "Finding a couples therapist, working on recurring problems in sessions and practising new patterns at home between appointments."
          projects:
            - name: Agreeing together to try couples counselling
              description: |-
                ## Purpose
                Counselling works best when both partners walk in having chosen to be there, even if one is more hopeful than the other. A calm conversation about what you each hope for, what worries you, and a trial of six sessions turns a vague threat of 'we should see someone' into a shared decision.

                ## Milestones
                1. A quiet time chosen to raise counselling, away from the last argument.
                2. Each partner's hopes and fears about counselling said out loud and written down.
                3. A trial length agreed, typically six to eight sessions, with a review at the end.
                4. A clear yes, or a date to talk about it again.

                ## Notes
                Present counselling as looking after the relationship, not as proof that one person is the problem. Proposing it in the middle of a row almost always gets a no.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Both partners have agreed to a trial of a set number of sessions, or a date to revisit the idea is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write two sentences on what you hope counselling could change, without blame"
                - "Pick a calm moment this week to suggest counselling to your partner"
                - "Ask your partner what would make counselling feel worth trying or risky"
                - "Agree the number of trial sessions and when you will review them"
            - name: Safety check before starting couples work
              description: |-
                ## Purpose
                Joint sessions rely on both people being able to speak honestly without paying for it at home afterwards. Where there is fear, threats, control over money or movement, or any physical harm, most therapists advise individual support and safety planning first, and couples work only later if at all. Checking this privately before booking protects the person at risk and the counselling itself.

                ## Milestones
                1. A private, honest answer to whether you ever feel afraid of your partner's reaction.
                2. A national domestic abuse helpline number saved somewhere safe, whether or not it is needed.
                3. A decision recorded on whether joint counselling, individual support or both comes first.
                4. Any safety concern mentioned to the therapist in an individual call before joint sessions begin.

                ## Notes
                This is a planning step, not a diagnosis. If you are in danger now, call your local emergency number. Recognising controlling patterns and planning to leave belongs with specialist support services rather than couples counselling.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A private decision on whether joint sessions are safe to start is recorded, with a support helpline number saved."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Answer privately whether you ever change what you say for fear of your partner's reaction"
                - "Save the number for your national domestic abuse helpline in a safe place"
                - "Decide whether individual support should come before joint sessions"
                - "Ask any shortlisted therapist how they screen for safety at the start"
            - name: Naming the three problems you want help with
              description: |-
                ## Purpose
                Couples who arrive saying 'we just argue' spend the first sessions working out what they argue about. Each partner writing their own list, then agreeing on the three problems that come up most and cost most, gives the therapist a clear starting brief and gives you a way to tell later whether anything has changed.

                ## Milestones
                1. Each partner's private list of the recurring problems, with a recent example of each.
                2. The two lists compared and the overlaps marked.
                3. Three shared problems written in neutral words neither partner objects to.
                4. A sentence for each on what better would look like in three months.

                ## Notes
                Write the problems as patterns, not charges: 'we stop talking for days after a disagreement about money' rather than 'he sulks'.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page list of three agreed problems, each with an example and a three-month picture of better, is ready to share with the therapist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the arguments or silences that keep repeating, each with one recent example"
                - "Swap lists with your partner and mark the problems you both named"
                - "Rewrite the top three in wording you both accept as fair"
                - "Describe what each problem would look like if it were better in three months"
            - name: Paying for counselling without money rows
              description: |-
                ## Purpose
                A session typically costs as much as a good meal out for two, every week or fortnight, so cost is a common reason couples stop after three appointments. Checking health insurance, employee assistance programmes, sliding-scale fees, low-cost community services and training clinics, then setting a monthly counselling budget you both accept, keeps money from becoming a new argument.

                ## Milestones
                1. Any cover through health insurance or an employee assistance programme confirmed in writing.
                2. Low-cost options found: sliding-scale therapists, charities, community services or university training clinics.
                3. A monthly counselling budget agreed for at least the trial period.
                4. A decision on whose account pays and how missed-session fees are handled.

                ## Notes
                Start from the **Monthly budget and bills** template. Employee assistance programmes often cover a few free sessions but may not offer couples work, so ask specifically.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A monthly counselling budget covering the trial period is agreed by both partners, with any insurance or workplace cover confirmed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your health insurance and workplace benefits for couples counselling cover"
                - "Search for sliding-scale, charity and training clinic couples services near you"
                - "Agree a monthly counselling budget and which account it comes from"
                - "Compare counselling spend against the budget @recurring(monthly:9)"
            - name: Shortlisting qualified couples therapists
              description: |-
                ## Purpose
                Plenty of good individual therapists see couples occasionally, but couples work is its own skill, and an untrained therapist can end up taking sides. Searching professional directories for therapists with specific couples training, such as Emotionally Focused Therapy, the Gottman Method or Integrative Behavioural Couple Therapy, and checking their registration, gives you a shortlist worth calling.

                ## Milestones
                1. Two or three professional directories or registers for your country searched.
                2. Five therapists listed with their couples training, registration, fees and availability.
                3. Each candidate's registration with a recognised professional body checked.
                4. A shortlist of three that both partners are willing to call.

                ## Notes
                Ask how much of their caseload is couples. A therapist who sees mostly couples is usually more comfortable keeping both people in the room when things get heated.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shortlist of three registered therapists with named couples training, fees and availability is agreed by both partners."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search two professional therapy directories for couples specialists near you or online"
                - "Note each therapist's couples training, registration, fee and available times"
                - "Check each registration number on the professional body's public register"
                - "Agree with your partner which three therapists to contact"
            - name: Consultation calls with three therapists
              description: |-
                ## Purpose
                Most couples therapists offer a free fifteen-minute call, and the fit between you and the therapist predicts more about results than the method on their website. Calling three, with the same questions and both partners listening where possible, lets you compare like with like and choose someone you both trust.

                ## Milestones
                1. One list of six to eight questions used for every call.
                2. Three consultation calls held, with both partners on at least two of them.
                3. Each therapist scored separately by each partner on warmth, clarity and fit.
                4. One therapist chosen and the first appointment booked.

                ## Notes
                Useful questions: how they work with couples, whether they see partners individually, how they handle one partner leaning out, their cancellation policy, and how they measure progress.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three consultation calls completed with written scores from both partners, and a first appointment booked with the chosen therapist."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write six to eight questions to ask every therapist you call"
                - "Book free consultation calls with the three shortlisted therapists"
                - "Score each therapist separately right after the call, then compare"
                - "Book the first appointment with the therapist you both chose"
            - name: Online, in-person or mixed sessions
              description: |-
                ## Purpose
                Video sessions save travel time and widen the choice of therapists, but some couples find it harder to stay present at the kitchen table where they usually argue. Weighing privacy at home, travel time, childcare and how heated sessions get helps you choose a format, or a mix, that you will keep up for months.

                ## Milestones
                1. Travel time and cost to the nearest suitable therapist worked out.
                2. A private room at home identified for video sessions, with headphones if children are in.
                3. Each partner's preference and reasons written down.
                4. A format chosen, with a plan to review it after four sessions.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A session format is chosen and written down with the reasons, and a review point after four sessions is set."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Time the trip to the therapist's room at your likely session hour"
                - "Test a video call from the room you would use at home"
                - "Share your format preference and reasons with your partner"
                - "Record the chosen format and the date you will review it"
            - name: Intake forms and assessment preparation
              description: |-
                ## Purpose
                Many couples therapists begin with an assessment: questionnaires, a joint session and one individual session each, before suggesting a plan. Filling the forms in honestly and separately, and preparing a short relationship history, means those early sessions are spent on understanding rather than on dates and names.

                ## Milestones
                1. Each partner's intake forms completed separately and returned on time.
                2. A one-page relationship timeline: how you met, moves, children, losses and turning points.
                3. Each partner's notes on what they want the therapist to know in their individual session.
                4. Any medical, mental health or medication details the therapist asked for supplied.

                ## Notes
                Fill in questionnaires without comparing answers. Differences between your scores are useful information for the therapist, not something to agree in advance.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Both partners' intake forms are returned and a one-page relationship timeline is ready before the first assessment session."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the therapist's intake pack and note the return date"
                - "Complete your own forms without comparing answers with your partner"
                - "Draft a one-page timeline of the relationship's main events together"
                - "Jot down what you want to say in your individual assessment session"
            - name: Protected session slot, travel and childcare
              description: |-
                ## Purpose
                Sessions get cancelled for ordinary reasons: a late meeting, no babysitter, a long commute. Fixing a regular slot both diaries protect, with travel time and childcare arranged for the whole trial period, removes the most common reason couples drift out of counselling by week five.

                ## Milestones
                1. A regular day and time that suits both work patterns agreed with the therapist.
                2. Both calendars blocked for the session plus travel and a little time afterwards.
                3. Childcare or a back-up carer arranged for every session in the trial.
                4. A rule agreed for what happens if one partner cannot attend.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A recurring session slot is blocked in both calendars with childcare arranged for every session of the trial."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare both work calendars to find a slot you can hold for three months"
                - "Block the session, travel and thirty minutes afterwards in both calendars"
                - "Arrange childcare or a back-up carer for the trial sessions"
                - "Agree whether one partner attends alone if the other has to cancel"
            - name: Confidentiality and secrets policy with your therapist
              description: |-
                ## Purpose
                Therapists differ on what happens to something one partner says in an individual session: some hold a 'no secrets' policy, others keep individual material private. Knowing the policy, and the legal limits of confidentiality where you live, before anyone discloses anything prevents a later sense of betrayal by either your partner or the therapist.

                ## Milestones
                1. The therapist's written confidentiality policy read by both partners.
                2. Their approach to secrets shared in individual sessions understood.
                3. The situations where they must break confidentiality noted.
                4. Any questions about notes, records and data storage answered.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Both partners can state the therapist's policy on individual disclosures and the limits of confidentiality, and it is noted in your counselling file."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the therapist for their written confidentiality and records policy"
                - "Read it separately, then note anything either of you finds unclear"
                - "Ask in the first session how individual disclosures are handled"
                - "Write the policy in three lines at the front of your counselling notes"
            - name: Notes after every counselling session
              description: |-
                ## Purpose
                A week after a session most people remember the uncomfortable moment and forget the insight that followed it. Writing a few lines each, soon after the session, on what was understood, what was agreed and the homework set, turns fifty minutes of talk into something you can actually use between appointments.

                ## Milestones
                1. A shared or separate notes file with a heading for each session.
                2. Three lines per session: one insight, one agreement, one piece of homework.
                3. The notes reread together before each following session.
                4. A running list of agreements that have held and ones that slipped.

                ## Notes
                Start from the **Meeting notes** template. Write insights in your own words; quoting the therapist back at your partner rarely goes well.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every session in the last two months has at least three lines of notes covering an insight, an agreement and the homework."
                cadence: rolling
              tasks:
                - "Create a counselling notes file with a section for each session"
                - "Write one insight, one agreement and the homework within a day of each session"
                - "Reread the last two sessions' notes before the next appointment @recurring(weekly)"
                - "Move agreements that keep slipping onto a list to raise in session"
            - name: Pre-session agenda talk
              description: |-
                ## Purpose
                Couples often spend the first twenty minutes of a session deciding what to talk about, or one partner arrives with a topic the other did not expect. A fifteen-minute talk a day or two before each appointment, choosing one or two themes and flagging anything sensitive, makes sessions more focused and less ambushing.

                ## Milestones
                1. A standing fifteen-minute slot agreed a day or two before each session.
                2. A simple format: what happened since last time, what each wants to bring, what feels risky.
                3. No more than two themes chosen for each session.
                4. Agreement that either partner can still raise something new with warning.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Before eight consecutive sessions you have agreed at most two themes, recorded in your notes."
                cadence: rolling
              tasks:
                - "Agree a fifteen-minute slot for an agenda talk before sessions"
                - "Hold the agenda talk and pick at most two themes @recurring(weekly:sun)"
                - "Flag any topic that feels risky so it is not a surprise in the room"
                - "Write the chosen themes at the top of the next session's notes"
            - name: Between-session homework tracker
              description: |-
                ## Purpose
                Therapists set homework because change happens in the kitchen on a Tuesday, not in the consulting room. Couples who track whether the exercise was done, and what got in the way, make faster progress and can tell the therapist honestly what is and is not working.

                ## Milestones
                1. Each homework task written down with who does it and how often.
                2. A weekly tick or cross for each partner against each task.
                3. A note of what got in the way whenever a task was missed.
                4. The tracker brought to each session and used to start the conversation.

                ## Notes
                Start from the **Habit tracker** template. A missed task is information, not a failure: bring the reason, not an apology.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Homework from at least eight sessions is tracked weekly by both partners, with reasons noted for missed tasks."
                cadence: rolling
              tasks:
                - "Set up a homework tracker with a row per task and a column per week"
                - "Mark this week's homework done or missed and note why @recurring(weekly:wed)"
                - "Bring the tracker to each session and start with what was hardest"
                - "Remove finished tasks once the therapist agrees they are established"
            - name: Monthly progress score on your counselling goals
              description: |-
                ## Purpose
                Change in counselling is slow and uneven, and a bad week can make months of work feel wasted. Each partner privately scoring the three agreed problems and overall satisfaction from one to ten each month gives a trend line you can show the therapist, and a reality check on both good and bad weeks.

                ## Milestones
                1. A score sheet with the three agreed problems and an overall satisfaction line.
                2. A baseline score from each partner taken before or at the first session.
                3. Monthly scores recorded separately, then shared.
                4. The trend reviewed with the therapist at least every three months.

                ## Notes
                Start from the **Metrics log** template. Some therapists use a standard short questionnaire each session; if yours does, log those scores here instead of inventing your own.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Six months of monthly scores from both partners are recorded and the trend has been discussed with the therapist."
                cadence: rolling
              tasks:
                - "Create a score sheet with the three problems and an overall satisfaction line"
                - "Record your baseline scores before the first session"
                - "Score each problem privately, then share your scores @recurring(monthly:14)"
                - "Take the last three months of scores to the next session"
            - name: Post-session wind-down routine
              description: |-
                ## Purpose
                Sessions stir things up, and the drive home is where many couples restart the argument the therapist had just calmed. Agreeing a short routine for the hour after each appointment, such as quiet travel, a walk or food, and a later time to talk, protects what the session achieved.

                ## Milestones
                1. A rule agreed for the first hour after sessions, such as no rehashing in the car.
                2. A small comforting ritual chosen: a walk, a coffee, a meal out.
                3. A set time later in the week for anything that needs more discussion.
                4. The routine reviewed after four sessions and adjusted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive sessions are followed by the agreed wind-down routine without a rehash argument on the way home."
                cadence: rolling
              tasks:
                - "Agree what you will and will not discuss in the hour after a session"
                - "Choose a small ritual to follow each appointment"
                - "Set a later time in the week to pick up anything left unfinished"
                - "Check after four sessions whether the routine is helping"
            - name: Ten-minute daily practice slot
              description: |-
                ## Purpose
                Skills from counselling, such as a soft start to a complaint, a reflective summary or a bid for connection, only become automatic with repetition on calm days. A fixed ten minutes each day, often after dinner or before bed, to practise this fortnight's skill keeps the work alive between appointments without turning evenings into therapy.

                ## Milestones
                1. A daily ten-minute slot both partners can usually keep.
                2. One skill from the latest session chosen as the current focus.
                3. At least five practice days a week recorded for a month.
                4. Practice moved to a new skill whenever the therapist sets one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ten-minute daily practice is recorded on at least five days a week for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Choose a ten-minute daily slot that survives a normal busy week"
                - "Name the one skill from the latest session you will practise"
                - "Practise the current counselling skill together for ten minutes @recurring(daily)"
                - "Tell the therapist which skill is starting to feel natural"
            - name: Flare-up plan for between appointments
              description: |-
                ## Purpose
                The recurring fight does not wait for the next session, and couples in counselling often worry that one bad row undoes everything. A short written plan for what each of you does when the familiar argument starts, built with the therapist, gives you a way to stop, cool down and bring the issue to the room instead.

                ## Milestones
                1. The early signs of the recurring fight described for each partner.
                2. A pause signal and a minimum cool-down time agreed, usually twenty minutes or more.
                3. A plan for where each partner goes and what they do during the pause.
                4. A rule for bringing the unresolved issue to the next session.
                5. The plan reviewed with the therapist and adjusted.

                ## Notes
                If a flare-up ever involves threats, damage to property or physical harm, stop joint sessions and contact the therapist individually and a support service.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written flare-up plan agreed by both partners and reviewed with the therapist is kept where you can both find it."
                cadence: rolling
              tasks:
                - "Write down the first three signs that the recurring fight is starting"
                - "Agree a pause signal and how long a cool-down lasts"
                - "Ask the therapist to review your plan in the next session"
                - "Reread the flare-up plan together @recurring(monthly:3)"
            - name: Quarterly goal review with your therapist
              description: |-
                ## Purpose
                Counselling can drift into a weekly venting space unless the goals are revisited. Asking for a review session every three months, with your notes and scores in hand, lets the three of you check which problems have shifted, which have not, and whether the plan or the focus should change.

                ## Milestones
                1. A review session requested every three months.
                2. Notes, homework tracker and scores brought to the review.
                3. Each original problem marked improved, unchanged or worse, by each partner.
                4. Goals for the next quarter agreed and written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A review session is held each quarter and updated goals are recorded in your notes afterwards."
                cadence: cyclic
              tasks:
                - "Ask the therapist to set aside part of a session for a quarterly review"
                - "Gather notes, homework records and scores before the review @recurring(quarterly)"
                - "Mark each original problem as better, same or worse"
                - "Write down the goals agreed for the next three months"
            - name: Booking, cancellation and attendance routine
              description: |-
                ## Purpose
                Most therapists charge for late cancellations, and gaps of a month or more between sessions often mean starting the next one from scratch. A monthly habit of confirming the next month's dates against both calendars, and knowing the cancellation rules, keeps attendance steady and avoids surprise fees.

                ## Milestones
                1. The therapist's cancellation window and fee written down.
                2. Next month's sessions confirmed in both calendars by the last week of the month.
                3. Holidays and work trips flagged to the therapist at least a month ahead.
                4. Attendance over the trial period checked and any gaps discussed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over six months no session is missed through a booking error and next month's dates are always confirmed in advance."
                cadence: rolling
              tasks:
                - "Note the therapist's cancellation window and late fee in your calendar"
                - "Confirm next month's session dates in both calendars @recurring(monthly:25)"
                - "Tell the therapist about holidays and work trips a month ahead"
            - name: Private reflection log between sessions
              description: |-
                ## Purpose
                Some of the most useful material in counselling comes from noticing your own reactions during the week: the moment you went quiet, the comment that stung, the time you nearly snapped and did not. A short private log, kept by each partner separately, makes it easier to speak about your own part in session rather than only your partner's.

                ## Milestones
                1. A private notebook or note each, not shared unless you choose.
                2. A weekly entry on one reaction you noticed in yourself.
                3. At least one entry a month brought to a session in your own words.
                4. A pattern in your own reactions noticed after two months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each partner has written at least one private entry a week for two months and brought one to a session."
                cadence: rolling
              tasks:
                - "Set up a private note or notebook that is yours alone"
                - "Write about one reaction you noticed in yourself this week @recurring(weekly:thu)"
                - "Choose one entry to talk about at the next session"
            - name: Mapping your recurring fight cycle
              description: |-
                ## Purpose
                Most couples therapists, whatever their method, help partners see the repeating loop: one pushes for closeness or answers, the other withdraws, which makes the first push harder. Drawing your own cycle with the therapist, in plain words with both sides' feelings, makes the cycle the shared problem rather than each other.

                ## Milestones
                1. The last three big arguments described step by step.
                2. Each partner's typical move and the feeling behind it named.
                3. A drawing or written loop of the cycle agreed in session.
                4. A name for the cycle you can both use when it starts at home.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written map of your cycle, with each partner's move and feeling, is agreed in session and kept with your notes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the steps of your last big argument, from trigger to silence"
                - "Ask the therapist to help you draw the loop in the next session"
                - "Give the cycle a neutral name you can both use at home"
                - "Notice and name the cycle aloud once when it starts this week"
            - name: Learning the method your therapist uses
              description: |-
                ## Purpose
                Emotionally Focused Therapy, the Gottman Method, Integrative Behavioural Couple Therapy and Imago each have their own language and exercises. Reading one book or a few reputable articles on your therapist's approach, separately and then together, makes their questions less puzzling and the homework easier to understand.

                ## Milestones
                1. The name of your therapist's main approach confirmed.
                2. One book or set of articles on it chosen, ideally one the therapist recommends.
                3. Each partner's three takeaways written down.
                4. One idea from the reading discussed in session.

                ## Notes
                Start from the **Reading queue** template. Avoid using the book as ammunition: underline what applies to you, not your partner.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Both partners have read the same introduction to the therapist's method and each has shared three takeaways."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the therapist which approach they use and what they would recommend reading"
                - "Add the recommended book or articles to your reading queue"
                - "Write three takeaways each once you have finished"
                - "Bring one idea from the reading to a session"
            - name: Speaking about your own experience in session
              description: |-
                ## Purpose
                Sessions stall when each partner spends the time describing what the other does wrong. Practising how to start with your own feeling and need, as in 'I felt shut out when the plans changed and I wanted to be asked', gives the therapist something to work with and makes it far easier for your partner to listen.

                ## Milestones
                1. The difference between describing yourself and describing your partner understood.
                2. Three recent complaints rewritten as your feeling plus your need.
                3. The format used at least once in each of four sessions.
                4. The therapist's feedback on how it lands noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each partner has rewritten three complaints as feeling plus need and used the format in four sessions."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Rewrite three recent complaints as what you felt and what you needed"
                - "Read them aloud to yourself until they sound natural"
                - "Use the format at least once in the next session"
                - "Ask the therapist how it came across"
            - name: Noticing flooding and calling a pause in session
              description: |-
                ## Purpose
                When the heart races and the mind narrows, nobody can listen or learn, and sessions where one partner is flooded go round in circles. Learning your own early signs, and agreeing with the therapist a simple way to ask for a pause in the room, keeps sessions useful even on hard topics.

                ## Milestones
                1. Each partner's physical signs of being overwhelmed written down.
                2. A pause signal agreed with the therapist for use in session.
                3. A calming method practised: slow breathing, feet on the floor, a glass of water.
                4. The signal used at least once and the session resumed afterwards.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Both partners can name their flooding signs, and a pause signal has been agreed with the therapist and used successfully."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List the body signs that tell you you are overwhelmed"
                - "Agree a pause signal with the therapist at the start of the next session"
                - "Practise slow breathing for two minutes on three calm days"
                - "Note after the session whether you used the signal and what helped"
            - name: Practising therapy listening exercises at home
              description: |-
                ## Purpose
                Many therapists teach a structured listening exercise in session: one speaks for a few minutes, the other summarises and checks, then they swap. It feels awkward at first and works only with repetition, so practising on low-stakes topics at home builds the skill before you need it for the hard ones.

                ## Milestones
                1. The exact steps of the exercise written down after the session that taught it.
                2. A list of ten low-stakes topics to practise on.
                3. Four weekly practice rounds completed on easy topics.
                4. One medium-stakes topic handled with the exercise and reported back in session.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Four practice rounds on easy topics and one on a medium topic are completed and discussed with the therapist."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down the steps of the listening exercise exactly as taught"
                - "List ten easy topics such as holiday ideas or a film you both saw"
                - "Run one listening practice round on an easy topic @recurring(weekly:sat)"
                - "Try the exercise on one medium topic and report back in session"
            - name: Finding the softer feelings under anger
              description: |-
                ## Purpose
                Anger, criticism and coldness are usually the visible layer, with hurt, fear of not mattering or shame underneath. Therapists spend a lot of time helping partners reach and say those softer feelings, because a partner can respond to 'I am scared you do not need me' in a way they never can to 'you are always out'.

                ## Milestones
                1. A list of feeling words beyond angry, fine and stressed, kept handy.
                2. Three recent angry moments explored for the feeling underneath.
                3. One softer feeling said aloud to your partner in session.
                4. Your partner's response to it noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each partner has identified the softer feeling under three recent angry moments and shared one of them in session."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find a feelings word list and keep it on your phone"
                - "Pick three recent angry moments and ask what you feared in each"
                - "Say one softer feeling aloud to your partner in the next session"
                - "Write down how your partner responded and how that felt"
            - name: Tracing triggers back to your family history
              description: |-
                ## Purpose
                Reactions that seem out of proportion often make sense once you see the family you grew up in: a parent who went silent, money that was always tight, shouting that meant danger. Some therapists draw a family map with each partner; doing the groundwork helps you each understand why certain moments land so hard.

                ## Milestones
                1. A simple family map for each partner covering two generations.
                2. How conflict, affection and money were handled in each family noted.
                3. Two links drawn between family patterns and your reactions today.
                4. Those links shared in session with the therapist's help.

                ## Notes
                This can bring up painful memories. If it does, pace it with the therapist and consider individual support alongside.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each partner has a two-generation family map and has shared two links between family patterns and present reactions in session."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Sketch your family over two generations with names and relationships"
                - "Note how your family handled arguments, affection and money"
                - "Write two ways those patterns show up in your relationship now"
                - "Ask the therapist to make time to discuss your family map"
            - name: Session eight review to continue, change or stop
              description: |-
                ## Purpose
                Around eight sessions in, most couples have a sense of whether counselling is helping, even if the big problems are not solved. A planned review, using your scores, notes and an honest conversation with the therapist, lets you decide to continue, change frequency or focus, try another therapist, or pause, rather than drifting.

                ## Milestones
                1. Scores and notes from the first eight sessions gathered.
                2. Each partner's private view on what has changed written down.
                3. The review raised with the therapist and their view heard.
                4. A decision recorded: continue as is, change something, or stop, with reasons.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded decision to continue, change or stop counselling is made after eight sessions, with each partner's reasons noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect your notes and scores from the first eight sessions"
                - "Write privately what has changed, what has not and what you want next"
                - "Ask the therapist for a review in the ninth session"
                - "Record the decision and the reasons for it"
            - name: Raising a concern about therapist fit
              description: |-
                ## Purpose
                It is common for one partner to feel the therapist is siding with the other, or to feel unheard, and many couples quietly stop going instead of saying so. A good couples therapist expects this feedback and uses it, so preparing to raise it calmly, in session or in a short message, often repairs the fit.

                ## Milestones
                1. The concern described in specific moments rather than a general feeling.
                2. A decision on whether to raise it jointly or in an individual call.
                3. The concern raised with the therapist.
                4. The therapist's response and any agreed change noted, with a date to reassess.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A specific concern about the therapist has been raised and their response and any agreed change are recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down two specific moments when you felt unheard or sided against"
                - "Decide whether to raise it in session or in a short individual call"
                - "Raise the concern using the specific moments you noted"
                - "Note what changes were agreed and reassess after two sessions"
            - name: Switching therapists without starting from zero
              description: |-
                ## Purpose
                Sometimes the fit does not improve, or the therapist moves, retires or lacks experience with what has come up. A short handover summary of your problems, your cycle, what has helped and what has not lets a new therapist start from where you are, and asking the old therapist for a referral can save weeks.

                ## Milestones
                1. The reasons for switching agreed between you.
                2. A one-page summary of goals, cycle, homework that worked and sticking points.
                3. A referral or suggestions requested from the current therapist where appropriate.
                4. A closing session or message to end the old arrangement respectfully.
                5. A first appointment booked with the new therapist.

                ## Notes
                Ask the agent to draft the one-page handover from your session notes, then edit it together so it reads fairly to both of you.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page handover summary is written and agreed, and a first appointment with a new therapist is booked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree in a sentence each why you want to change therapist"
                - "Ask the agent to draft a one-page handover from your session notes"
                - "Ask your current therapist for referral suggestions"
                - "Book a first appointment with the new therapist"
            - name: Adding individual therapy alongside couples work
              description: |-
                ## Purpose
                Depression, anxiety, trauma, addiction or grief can need more attention than a joint session allows, and couples therapists sometimes suggest one or both partners get individual support too. Deciding together who would benefit, finding a separate therapist and agreeing how the two pieces of work fit avoids overlap and divided loyalties.

                ## Milestones
                1. The couples therapist's view on individual work asked for.
                2. A separate individual therapist chosen, not the same person as the couples therapist.
                3. Agreement on what, if anything, is shared between the two therapists.
                4. Monthly reflection on how the two pieces of work are fitting together.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on individual therapy is recorded, and if chosen, a separate therapist is booked with an agreed approach to sharing information."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your couples therapist whether individual work would help either of you"
                - "Search for an individual therapist who is separate from your couples therapist"
                - "Agree what you are each comfortable having shared between therapists"
                - "Note how individual and couples work are fitting together @recurring(monthly:28)"
            - name: Weekly or fortnightly session frequency
              description: |-
                ## Purpose
                Weekly sessions build momentum early on and help in a crisis, while fortnightly ones halve the cost and leave more time for homework. Choosing a frequency on purpose, with your therapist's view and your budget in mind, and agreeing when to revisit it, beats letting it be set by whatever slots are free.

                ## Milestones
                1. The therapist's recommendation for your situation heard.
                2. The cost of each option over three months worked out.
                3. A frequency chosen with a reason both of you accept.
                4. A date set to reconsider the frequency.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A session frequency is chosen with a written reason and a date to reconsider it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the therapist what frequency they suggest for the next three months"
                - "Work out the three-month cost of weekly and fortnightly sessions"
                - "Agree the frequency and write down why"
                - "Put a reminder in both calendars to reconsider it"
            - name: Weighing an intensive couples weekend
              description: |-
                ## Purpose
                Some therapists offer intensives: two or three full days of work, often away from home, which can move a stuck couple faster than months of weekly hours. They cost more up front and need careful aftercare, so weighing the evidence, the price and the follow-up plan is worth doing before booking.

                ## Milestones
                1. Two or three intensive programmes compared on method, length, cost and follow-up.
                2. Your current therapist's view on whether an intensive suits you.
                3. Time off, travel and childcare costed.
                4. A decision recorded, with a follow-up plan if you go.

                ## Notes
                Keep the written comparison in your counselling notes. An intensive without follow-up sessions often fades within weeks.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on an intensive is made after comparing at least two programmes on cost, method and follow-up."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find two or three couples intensive programmes and their costs"
                - "Ask your therapist whether an intensive would suit your situation"
                - "Cost the time off, travel and childcare an intensive would need"
                - "Decide together and, if booking, agree follow-up sessions afterwards"
            - name: Deciding what to tell family and friends
              description: |-
                ## Purpose
                Friends and relatives can be a support or a source of pressure, and one partner telling their mother everything can feel like betrayal to the other. Agreeing who knows you are in counselling, what is shared and what is private protects the work and stops sessions being spent on leaks.

                ## Milestones
                1. Each partner's comfort level with others knowing written down.
                2. A list of people who will be told, and what they will be told.
                3. A shared line for anyone who asks, such as 'we are putting time into us'.
                4. An agreement that details from sessions stay between the two of you and the therapist.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written agreement lists who knows about counselling and what may be shared, signed off by both partners."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down who, if anyone, you would like to tell about counselling"
                - "Compare lists and agree who will be told and how much"
                - "Agree a one-line answer for anyone who asks"
                - "Agree that session details stay private unless you both consent"
            - name: Stepping down to maintenance sessions
              description: |-
                ## Purpose
                When the original problems have eased, many couples move from weekly sessions to monthly or occasional check-ins rather than stopping abruptly. A planned step-down, with the therapist's agreement and a clear rule for when to step back up, keeps progress steady while freeing time and money.

                ## Milestones
                1. Agreement with the therapist that you are ready to reduce frequency.
                2. A maintenance rhythm chosen, such as monthly for three months.
                3. Two or three warning signs agreed that would mean returning to more frequent sessions.
                4. A brief monthly couple review held between the maintenance sessions.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A maintenance rhythm and step-up warning signs are agreed with the therapist and three monthly maintenance sessions are completed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the therapist whether you are ready to move to less frequent sessions"
                - "Agree a maintenance rhythm and when it will be reviewed"
                - "Write down the warning signs that mean booking extra sessions"
                - "Hold a twenty-minute couple review between maintenance sessions @recurring(monthly:18)"
            - name: Assessment feedback session
              description: |-
                ## Purpose
                After the assessment sessions, many therapists give feedback: how they see your relationship, the cycle, strengths, and what they propose working on. Preparing questions and listening for both the strengths and the concerns helps you leave with a plan you both understand and agree with.

                ## Milestones
                1. Questions prepared by each partner for the feedback session.
                2. The therapist's summary of strengths, cycle and focus written down that day.
                3. Any disagreement with the summary raised in the session.
                4. A treatment plan and expected number of sessions agreed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The feedback session is attended and the therapist's summary and agreed plan are written in your notes the same day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three questions each for the assessment feedback session"
                - "Write down the strengths and concerns the therapist names"
                - "Say so in the session if part of the summary does not fit"
                - "Record the agreed plan and expected number of sessions"
            - name: Bringing a difficult disclosure to a session
              description: |-
                ## Purpose
                Some things are hard to say at home and need the therapist's help: a debt, an addiction, an affair, a wish to leave, a change in sexual feelings. Planning how and when to raise it, often with an individual conversation with the therapist first, makes it more likely the session holds both of you through the fallout.

                ## Milestones
                1. What you need to disclose written down plainly for yourself.
                2. An individual call or session with the therapist to plan the disclosure.
                3. A session chosen with enough time and support afterwards.
                4. The disclosure made and a plan for the following week agreed.

                ## Notes
                Check the therapist's confidentiality policy first. Rebuilding trust after infidelity is substantial work in its own right; this project is only about bringing the disclosure safely into the room.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The disclosure has been made in a session planned with the therapist, and a support plan for the following week is written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down plainly what you need to say and why now"
                - "Ask the therapist for an individual call to plan the disclosure"
                - "Choose a session with free time and support around it"
                - "Agree in session how you will both get through the following week"
            - name: Session after a major blow-up
              description: |-
                ## Purpose
                A big argument between appointments can feel like proof that counselling is failing, when it is often the most useful material you will bring. Preparing for that session, each writing what happened and what you felt, without rehearsing your case, turns a setback into a session where the cycle can be seen clearly.

                ## Milestones
                1. The blow-up described by each partner in writing within two days.
                2. The therapist told in advance that this is the topic.
                3. The argument slowed down in session to find where the cycle started.
                4. One change agreed for next time the same trigger appears.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The blow-up is unpicked in session and one specific change for the next time is recorded in your notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what happened and what you felt, within two days"
                - "Let the therapist know before the session what you want to bring"
                - "Ask the therapist to slow the argument down step by step"
                - "Record the one change you will try next time"
            - name: Final session and ending plan
              description: |-
                ## Purpose
                Ending counselling well matters as much as starting it: couples who simply stop booking lose the chance to see how far they have come and what to watch for. A planned final session, reviewing progress, naming what helped and agreeing how you would come back if needed, gives the work a proper close.

                ## Milestones
                1. The ending agreed with the therapist at least two sessions ahead.
                2. Before and after scores on the original problems compared.
                3. A list of the three tools that helped most, in your own words.
                4. An agreement on when and how you would return.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A final session is held with a written comparison of scores, a list of the tools that helped and a return plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree an ending date with the therapist two sessions in advance"
                - "Compare your first and latest scores on the original problems"
                - "Write the three tools that helped most in your own words"
                - "Agree what would make you book a session again"
            - name: Six-month booster session
              description: |-
                ## Purpose
                Old patterns creep back slowly, often around stress such as a new job, a move or a family illness. Booking a single check-up session six months after ending, with your notes and current scores, catches drift early, when a session or two can fix what would otherwise take months.

                ## Milestones
                1. A booster session booked or diarised six months after the final session.
                2. Current scores on the original problems taken beforehand.
                3. Any early warning signs noticed since ending written down.
                4. A decision after the session: all well, or a short run of sessions.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A booster session is held about six months after ending, with current scores compared and a follow-up decision recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put a reminder in both calendars six months after your final session"
                - "Score the original problems again before the booster"
                - "List any warning signs you have noticed since ending"
                - "Decide after the session whether a short run of sessions is needed"
            - name: Counselling with a reluctant partner
              description: |-
                ## Purpose
                It is common for one partner to want counselling and the other to dread it, fearing blame, exposure or a step towards separation. Lowering the stakes, with a single trial session, letting the reluctant partner help choose the therapist, or starting alone, often turns a no into a cautious yes without pressure.

                ## Milestones
                1. The reluctant partner's specific worries heard and written down without argument.
                2. One or two concessions offered, such as choosing the therapist or a one-session trial.
                3. A decision on whether to start alone if your partner still declines.
                4. A date to revisit the question if the answer is still no.

                ## Notes
                Going alone is not a failure. Individual sessions focused on the relationship can change the dynamic, and many partners join later.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your partner's worries are written down, a low-stakes offer has been made, and either a first session or a plan to go alone is booked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your partner what worries them most about counselling and just listen"
                - "Offer them the final say on which therapist you see"
                - "Suggest a single trial session with no commitment beyond it"
                - "Book an individual session for yourself if your partner still declines"
            - name: Counselling with young children at home
              description: |-
                ## Purpose
                Babies and young children squeeze out the time, sleep and childcare that counselling needs, and parenting disagreements are often the very topic in the room. Planning session times around naps and bedtimes, lining up reliable childcare and keeping children out of earshot of video sessions makes counselling possible in the busiest years.

                ## Milestones
                1. Session times chosen around bedtimes, nursery hours or a regular sitter.
                2. Two reliable childcare options for session slots.
                3. A rule that video sessions only happen when children cannot overhear.
                4. Parenting disagreements listed for the therapist where they belong in the work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two months of sessions are attended without a cancellation for childcare, with children never within earshot of a session."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Map nap, nursery and bedtime hours to find possible session slots"
                - "Line up two people who can look after the children during sessions"
                - "Confirm the sitter for the next session @recurring(weekly:fri)"
                - "List parenting disagreements to raise with the therapist"
            - name: Counselling across cultures, languages or faiths
              description: |-
                ## Purpose
                Partners from different cultures, faiths or first languages can find that a therapist misreads family obligations, religious values or the way feelings are expressed. Looking for a therapist with relevant experience, or one who asks good questions about it, and deciding which language sessions happen in, keeps both partners fully heard.

                ## Milestones
                1. The cultural, faith or language differences that matter in your relationship listed.
                2. Therapists asked in consultation about their experience with similar couples.
                3. A decision on session language, or on using a therapist who shares both.
                4. Any family or faith expectations explained to the therapist early.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A therapist is chosen after asking about cultural or faith experience, and the session language is agreed by both partners."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the cultural, faith or language differences you want the therapist to understand"
                - "Ask each therapist you consult about their experience with couples like you"
                - "Agree which language or languages sessions will use"
                - "Brief the therapist early on family and faith expectations"
            - name: Counselling when one partner has a mental health condition
              description: |-
                ## Purpose
                Depression, anxiety, ADHD, bipolar disorder or trauma symptoms shape a relationship, and couples work goes better when it allows for them rather than treating them as character flaws. Coordinating with the partner's own clinician, with their consent, and helping the therapist understand the condition keeps sessions fair to both of you.

                ## Milestones
                1. The partner with the condition decides what the couples therapist should know.
                2. Consent agreed, if wanted, for the couples therapist and individual clinician to talk.
                3. The ways the condition shows up in your arguments described in session.
                4. A monthly check on whether symptoms and the relationship work are being balanced.

                ## Notes
                Medication and treatment decisions stay with the individual clinician. The couples project is about understanding and fairness, not managing someone's treatment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The couples therapist has the information the affected partner chose to share, and how the condition affects your cycle is written in your notes."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Let the affected partner decide what the couples therapist should know"
                - "Agree whether the two clinicians may speak, and put consent in writing"
                - "Describe in session how symptoms show up in your arguments"
                - "Talk about how symptoms and counselling are balancing @recurring(monthly:21)"
            - name: Finding an affirming therapist as a queer couple
              description: |-
                ## Purpose
                Same-sex, bisexual, trans and other queer couples sometimes spend early sessions educating a therapist or defending their relationship's shape. Checking for specific experience and affirming practice before booking means sessions can go straight to the problems you came with.

                ## Milestones
                1. Directories or community lists of affirming therapists searched.
                2. Consultation questions written about experience with couples like yours.
                3. Each candidate's answers compared on comfort, knowledge and assumptions.
                4. A therapist chosen whom both partners felt understood by.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A therapist is chosen after both partners have asked affirming-practice questions and agreed they felt understood."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search affirming therapist directories and community recommendations"
                - "Write consultation questions about their experience with couples like yours"
                - "Note any assumptions a therapist made during consultation"
                - "Choose the therapist you both felt understood by"
            - name: Counselling across different schedules or locations
              description: |-
                ## Purpose
                Shift work, frequent travel or living in different cities can make joint sessions feel impossible. Video sessions with each partner in a private space, a regular slot that fits both rotas and written homework you can do apart keep counselling going when you cannot sit on the same sofa.

                ## Milestones
                1. A therapist found who offers video sessions with partners in two locations.
                2. A slot that fits both rotas or time zones agreed for at least two months.
                3. Homework adapted for partners apart, such as written exchanges or shared voice notes.
                4. In-person sessions planned for times you are together, where possible.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two months of sessions are attended from separate locations or rotas with homework adapted for being apart."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your therapist whether they run sessions with partners in two places"
                - "Compare both rotas or time zones for a regular slot"
                - "Agree a written homework exchange for weeks apart @recurring(weekly:tue)"
                - "Plan an in-person session for a time you are together"
            - name: Counselling later in life
              description: |-
                ## Purpose
                Retirement, ill health, caring for a partner or adult children moving back can unsettle a long marriage, and older couples are sometimes reluctant to seek help after decades together. Finding a therapist comfortable with later-life issues, and naming the changes behind the tension, makes counselling feel relevant rather than something for younger couples.

                ## Milestones
                1. The recent changes behind the tension listed: retirement, health, caring, family.
                2. A therapist asked about their experience with long marriages and later life.
                3. Practical needs sorted: hearing, mobility, daytime slots, video help.
                4. Goals agreed that reflect this stage, not the early years of the marriage.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A therapist experienced with later-life couples is booked, with practical needs met and goals written for this stage of life."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the changes of the last few years that sit behind the tension"
                - "Ask therapists about their work with long marriages and later life"
                - "Arrange any hearing, mobility or technology help for sessions"
                - "Write goals for counselling that fit this stage of your lives"
            - name: Discernment counselling when one partner is leaning out
              description: |-
                ## Purpose
                When one partner wants to work on the relationship and the other is close to leaving, ordinary couples therapy often stalls. Discernment counselling is a short, structured approach, usually up to five sessions, that helps each partner decide between staying as things are, separating, or committing to a set period of full couples therapy.

                ## Milestones
                1. A therapist trained in discernment counselling found.
                2. Each partner's position, leaning in or leaning out, acknowledged without pressure.
                3. Up to five sessions attended with individual time for each partner.
                4. One of three paths chosen and written down, with next steps.

                ## Notes
                If the chosen path is separation, the practical and legal steps belong with separation support and legal advice, not here.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A discernment process of up to five sessions is completed and one of the three paths is chosen and recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Search for therapists trained in discernment counselling"
                - "Each write privately where you stand and what would change your mind"
                - "Attend the discernment sessions, using the individual time honestly"
                - "Write down the path chosen and the first step on it"
            - name: Relapse prevention plan after counselling
              description: |-
                ## Purpose
                The gains of counselling fade fastest when couples forget what the early signs of the old cycle looked like. A one-page plan listing those signs, the tools that helped and the steps to take, from a home conversation to booking a session, keeps the work alive for years after the last appointment.

                ## Milestones
                1. Your three earliest warning signs of the old cycle written down.
                2. The tools that helped most listed with a line on how to use each.
                3. A step-up plan: talk at home, reread notes, book a session.
                4. A quarterly check against the warning signs and a yearly review of the plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A one-page relapse prevention plan exists and has been checked against at least two quarterly warning-sign reviews."
                cadence: rolling
              tasks:
                - "Write your three earliest warning signs of the old cycle"
                - "List the counselling tools that helped and how to use each"
                - "Check together for any warning signs this quarter @recurring(quarterly)"
                - "Rewrite the plan on the anniversary of ending counselling @recurring(yearly)"
            - name: Year of sessions pattern review
              description: |-
                ## Purpose
                Session by session, it is hard to see which themes keep returning and which have quietly resolved. Reading a year of notes and scores, grouping topics into themes and counting how often each came up, shows what counselling has changed and what remains the deeper work.

                ## Milestones
                1. A year of session notes and scores read through in one sitting.
                2. Topics grouped into five to eight themes with a count for each.
                3. Each theme marked resolved, improving or still live.
                4. The review shared with the therapist or kept for the next round of work.

                ## Notes
                Start from the **Feedback themes** template. Ask the agent to group your notes into themes first, then check its grouping against your own memory.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written review groups a year of sessions into themes, each marked resolved, improving or still live."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Gather a year of session notes and monthly scores in one place"
                - "Ask the agent to group the session topics into five to eight themes"
                - "Mark each theme as resolved, improving or still live"
                - "Repeat the theme review each year you keep notes @recurring(yearly)"
---

# Couples Counselling

This area is for couples who have decided, or are close to deciding, that the same arguments and silences need a trained third person in the room, and for the partner who is still unsure. It starts with the foundations (agreeing to go, a safety check, naming the problems, paying for it and choosing a therapist), then the routines that make weekly or fortnightly sessions pay off, the skills that therapists teach most often, the decisions about fit, frequency and individual support, the sessions worth preparing for, variants for situations such as a reluctant partner, young children or different cultures, and finally discernment work and keeping the gains once counselling ends.

What repeats is a short agenda talk before each session, notes afterwards, a weekly homework check, a daily practice slot, a private reflection each week, a monthly progress score and spending check, and quarterly goal and relapse reviews. The Monthly budget and bills, Meeting notes, Habit tracker, Metrics log, Reading queue and Feedback themes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
