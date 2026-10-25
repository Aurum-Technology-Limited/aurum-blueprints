---
id: software-engineering.engineering-interview-loops
name: Engineering Interview Loops
description: "Role scorecards, structured questions, anchored rubrics, fair take-homes and evidence-based debriefs, plus the routines that keep an engineering interview loop fast, consistent and kind to candidates."
category: business
version: 1.0.0
tags: [software-engineering, engineering-interview-loops, manager, engineer, team, hiring, interviewing, scoring-rubrics]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - metrics-log
    - meeting-notes
    - feedback-themes
    - training-program
    - purchase-decision
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Engineering Interview Loops
          description: "Designing fair technical interviews, take-home tasks and scoring rubrics that predict on-the-job performance and respect candidates' time."
          projects:
            - name: Role scorecard before the first interview
              description: |-
                ## Purpose
                Loops go wrong before anyone is interviewed, when the hiring manager and the panel each carry a different picture of the role in their heads. A one-page scorecard naming the outcomes expected in the first year, the four to six competencies that matter and the ones that do not, gives every interviewer the same target. Write it before the job advert goes live, because a scorecard written after the first candidates arrive tends to describe whoever impressed you most.

                ## Milestones
                1. A scorecard listing three to five outcomes the hire should deliver in their first twelve months.
                2. Four to six competencies named, each with a sentence on what strong looks like at this level.
                3. A short list of nice-to-haves explicitly marked as not required.
                4. The scorecard agreed by the hiring manager, one senior engineer and the recruiter.

                ## Notes
                Start from the **Skills matrix** template. If a competency cannot be assessed by any stage of the loop, either add a stage or drop it from the scorecard.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off one-page scorecard with first-year outcomes and four to six competencies exists for the open role before interviews start."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write three outcomes this hire should deliver in their first year"
                - "List every competency the panel mentions and cut it down to six"
                - "Mark the nice-to-haves that must not block an offer"
                - "Get sign-off from the hiring manager, a senior engineer and the recruiter"
            - name: Interview loop map for one role
              description: |-
                ## Purpose
                Candidates often meet five people who all ask about the same project while nobody tests debugging or collaboration at all. Mapping each stage to the competencies it assesses, its owner, its length and its pass rule exposes the gaps and the duplicates in one table. Begin with a single role you are hiring for now, then reuse the shape.

                ## Milestones
                1. A table of every stage from recruiter screen to final interview with owner and duration.
                2. Each scorecard competency assigned to at least one stage and no more than two.
                3. A total candidate time figure, including any take-home, written at the top.
                4. Duplicate or untested competencies resolved by changing a stage.

                ## Notes
                A useful default for a mid-level role is a screen, one technical stage, one design or code review stage and one behavioural stage. More stages rarely add signal.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A loop map exists in which every scorecard competency is covered by one or two stages and total candidate time is stated."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every stage the current loop uses, with owner and length"
                - "Draw a grid of stages against scorecard competencies"
                - "Mark competencies tested three or more times and those not tested at all"
                - "Redesign one stage to close the biggest gap"
            - name: Written hiring bar and decision rules
              description: |-
                ## Purpose
                Without a written rule, offers are decided by whoever argues hardest in the debrief or by a vague sense of fit. Agreeing in advance what counts as a hire, how a single strong no is treated and who makes the final call protects candidates from mood and protects the team from regret. Settle it while there is no candidate on the table to argue about.

                ## Milestones
                1. A rule for what combination of stage scores leads to an offer.
                2. A stated position on how one strong objection is handled.
                3. The final decision maker named, with the circumstances in which they can overrule the panel.
                4. The rules shared with every interviewer on the panel.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page set of hire and no-hire rules, naming the decision maker, has been shared with the full interview panel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect the last five hiring decisions and how each was reached"
                - "Draft a rule for combining stage scores into a decision"
                - "Agree how a single strong no is handled and who can overrule it"
                - "Share the rules with the panel before the next debrief"
            - name: Baseline of the current hiring funnel
              description: |-
                ## Purpose
                Most teams cannot say how many candidates reach each stage, how long the loop takes from first call to offer, or why offers are declined. A baseline from the last six months of applicant tracking data shows where candidates actually drop out and gives every later change something to be compared against.

                ## Milestones
                1. Candidate counts at each stage for the last six months, for each open role.
                2. Median days from application to offer and from final interview to decision.
                3. Offer acceptance rate with the declared reasons for declines.
                4. The two stages with the largest drop or longest wait identified.

                ## Notes
                Start from the **Metrics log** template. Keep candidate names out of the baseline; counts and durations are enough.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A funnel baseline with stage counts, median time to offer and acceptance rate for the last six months is recorded in the metrics log."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export six months of stage data from the applicant tracking system"
                - "Count candidates entering and leaving each stage per role"
                - "Calculate median days from application to offer"
                - "Note the two stages with the worst drop or wait"
            - name: Qualified interviewer pool and stage owners
              description: |-
                ## Purpose
                Scheduling slows down when the same three senior engineers carry every interview, and they get noisy when people interview for stages they were never trained on. A named pool, showing who is qualified for which stage and who is still shadowing, makes scheduling faster and keeps quality consistent as the team grows.

                ## Milestones
                1. A list of every interviewer with the stages they are qualified to run.
                2. Shadowing interviewers marked separately with their target qualification date.
                3. At least three qualified interviewers for every stage of the loop.
                4. The list shared with recruiting so they schedule only qualified people.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A shared interviewer list shows at least three qualified people for every stage, with shadowing interviewers marked."
                cadence: rolling
              tasks:
                - "List everyone who has interviewed in the last six months and their stages"
                - "Mark who is qualified and who is still shadowing"
                - "Flag any stage with fewer than three qualified interviewers"
                - "Refresh the interviewer list with the team leads @recurring(quarterly)"
            - name: Candidate guide to the interview process
              description: |-
                ## Purpose
                Candidates perform better and drop out less when they know what each stage involves, how long it takes, what languages they can use and when they will hear back. A short guide sent after the first call removes guesswork, reduces repetitive questions to recruiters and shows the respect for their time the loop claims to have.

                ## Milestones
                1. A one-page guide describing every stage, its length and what is assessed.
                2. Clear statements on allowed languages, tools and reference material.
                3. A promised response time after each stage that the team can actually meet.
                4. A line on how to ask for adjustments or accommodations.
                5. The guide sent automatically to every candidate after the first screen.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every candidate who passes the first screen receives a one-page guide stating each stage, its length and the response time."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to draft a one-page candidate guide from the loop map"
                - "Have a recent hire read it and mark anything unclear"
                - "Set it up as the standard email after the first screen"
                - "Check the guide still matches the live loop @recurring(quarterly)"
            - name: Structured interview question bank, first version
              description: |-
                ## Purpose
                When each interviewer invents questions on the morning of the interview, two candidates for the same role face completely different tests and the scores cannot be compared. A bank of vetted questions per stage, each with what it measures, expected strong and weak answers and follow-up prompts, is the backbone of a structured interview.

                ## Milestones
                1. Three to five questions per stage, each mapped to a scorecard competency.
                2. Each question with notes on what a strong, adequate and weak answer contains.
                3. Two or three planned follow-up probes per question.
                4. Every question tried on at least one current engineer before use.

                ## Notes
                Prefer problems drawn from your real work, simplified, over puzzles. A question that only tests whether someone has seen the trick before measures preparation, not ability.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A question bank with three or more mapped, annotated and trialled questions for every loop stage is stored where all interviewers can reach it."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Gather the questions interviewers currently use for each stage"
                - "Remove trick and trivia questions that no job task resembles"
                - "Write strong, adequate and weak answer notes for each kept question"
                - "Trial each new question on a current engineer and time it"
            - name: Scoring rubric with behavioural anchors
              description: |-
                ## Purpose
                A score of three out of four means something different to every interviewer unless each level is tied to observable behaviour. Anchoring each competency with examples of what a candidate said or did at each level turns scoring from impression into evidence and makes calibration possible.

                ## Milestones
                1. A four-point scale with a written definition for each point.
                2. Two or three behavioural anchors for every competency at every level.
                3. A rule that each score must cite evidence from the interview.
                4. The rubric built into the feedback form interviewers fill in.

                ## Notes
                Start from the **Skills matrix** template. Avoid a middle score on an odd-numbered scale; it becomes the place undecided interviewers hide.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every competency on the scorecard has written behavioural anchors at each of four levels, embedded in the interview feedback form."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose a four-point scale and define each point in one sentence"
                - "Write behavioural anchors for each competency at each level"
                - "Test the rubric by scoring two old interview write-ups with a colleague"
                - "Add the anchors to the feedback form"
            - name: Interview feedback form and submission rule
              description: |-
                ## Purpose
                Feedback written a week later is mostly reconstructed memory, and feedback written after hearing others in the debrief is mostly agreement. A short form with evidence fields per competency, a recommendation and a rule that it is submitted before the debrief and within one working day keeps each voice independent.

                ## Milestones
                1. A form with evidence and score fields for each competency the stage covers.
                2. A separate overall recommendation field with a one-line reason.
                3. Other interviewers' feedback hidden until your own is submitted.
                4. A one working day submission rule agreed by the panel.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A feedback form with per-competency evidence fields is live in the tracking system, and feedback is hidden until each interviewer submits their own."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the form fields from the rubric for one stage"
                - "Turn on the setting that hides others' feedback until submission"
                - "Agree the one working day rule at the next team meeting"
                - "Roll the form out to every stage once the first works"
            - name: Fair and lawful interviewing checklist
              description: |-
                ## Purpose
                Well-meaning engineers ask about family plans, age, nationality or health as small talk, and those questions can expose candidates to unfair treatment and the company to claims. A one-page checklist of topics to avoid, how to answer candidate questions about benefits, and how to record adjustments, agreed with your people team, protects everyone. Rules differ by country, so the content comes from HR or employment counsel, not from the engineering team.

                ## Milestones
                1. A checklist of topics interviewers must not raise, confirmed by HR or employment counsel.
                2. Standard answers for candidate questions on benefits, visas and flexible working.
                3. A note on how to handle a candidate who volunteers protected information.
                4. Every active interviewer has read and acknowledged the checklist.

                ## Notes
                This is organisational, not legal advice. Ask your people team which local rules apply and record who confirmed the wording.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An HR-confirmed one-page interviewing checklist exists and every active interviewer has acknowledged reading it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the people team for the topics interviewers must avoid locally"
                - "Draft standard answers to common candidate questions about benefits and visas"
                - "Have HR or employment counsel confirm the final checklist"
                - "Collect an acknowledgement from every active interviewer"
            - name: Monday hiring sync for open roles
              description: |-
                ## Purpose
                Strong candidates are lost in the gaps between people: a recruiter waiting on a hiring manager, a debrief nobody scheduled, an offer stuck in approval. A fifteen-minute Monday sync that walks every candidate in the late stages, names the next action and its owner, keeps the loop moving at the speed candidates expect.

                ## Milestones
                1. A standing fifteen-minute slot with the hiring manager and recruiter.
                2. A board or list showing every candidate past the first screen with their next step.
                3. Every late-stage candidate leaving the sync with a named owner and a date.
                4. No candidate waiting more than five working days without contact.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly sync runs for every open role and no late-stage candidate goes more than five working days without contact."
                cadence: rolling
              tasks:
                - "Book a recurring fifteen-minute slot with the recruiter"
                - "Set up a candidate board showing stage and next action"
                - "Walk every late-stage candidate and assign the next step @recurring(weekly:mon)"
                - "Flag any candidate with no contact in five working days"
            - name: Overdue scorecard chase
              description: |-
                ## Purpose
                Every loop is only as fast as its slowest interviewer, and missing feedback is the most common reason a strong candidate accepts another offer while you wait. A twice-weekly check for unsubmitted feedback, with a polite nudge and escalation after two days, keeps the one working day rule real.

                ## Milestones
                1. A saved view in the tracking system listing interviews with no feedback.
                2. Nudge wording agreed so reminders feel routine rather than personal.
                3. Escalation to the hiring manager after two working days.
                4. Median feedback time under one working day for a full month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Median time from interview to submitted feedback stays under one working day for a calendar month."
                cadence: rolling
              tasks:
                - "Create a saved view of interviews with missing feedback"
                - "Write a short reminder message interviewers will not mind receiving"
                - "Chase every overdue scorecard from the saved view @recurring(weekly:tue,fri)"
                - "Escalate feedback more than two working days late to the hiring manager"
            - name: Monthly funnel and time-to-decision review
              description: |-
                ## Purpose
                Problems in a loop show up first as numbers: a stage whose pass rate suddenly drops, a widening gap between final interview and offer, a run of declined offers. Looking at the same handful of figures every month catches drift before it costs you candidates, and gives you facts to bring to recruiting rather than impressions.

                ## Milestones
                1. Stage pass rates, time to decision and acceptance rate logged monthly.
                2. Each month compared with the baseline and the previous month.
                3. One named change agreed whenever a figure moves by more than a quarter.
                4. A quarterly summary shared with the engineering leadership.

                ## Notes
                Start from the **Metrics log** template. Small numbers swing wildly; look at three months together before drawing conclusions on a low-volume role.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Funnel figures are logged every month for six months, and each large movement has a recorded response."
                cadence: rolling
              tasks:
                - "Pick the five funnel figures you will track every month"
                - "Log stage pass rates and time to decision @recurring(monthly:8)"
                - "Write one line on the biggest change since last month"
                - "Share a quarterly funnel summary with engineering leadership @recurring(quarterly)"
            - name: Question bank refresh and leak check
              description: |-
                ## Purpose
                Interview questions leak to candidate forums within months, and once a question is posted with solutions it measures preparation rather than skill. A quarterly pass that searches for your questions online, retires the leaked or tired ones and adds trialled replacements keeps the bank honest.

                ## Milestones
                1. Each question in the bank searched for online and marked as clean or leaked.
                2. Leaked questions retired or substantially changed.
                3. At least one new trialled question added per stage each quarter.
                4. A changelog noting what was retired and why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every quarter the bank is searched for leaks, leaked questions are retired and each stage gains one trialled question."
                cadence: cyclic
              tasks:
                - "Search candidate forums for the wording of each current question"
                - "Retire or rework every leaked question"
                - "Run the quarterly question bank refresh with stage owners @recurring(quarterly)"
                - "Record retired and new questions in the bank changelog"
            - name: Interviewer load balancing
              description: |-
                ## Purpose
                Interviewing is real work that rarely shows up in sprint planning, so the generous few burn out while others never take a slot. A monthly look at interview counts per person, with a soft cap and recognition in performance reviews, spreads the load and keeps your best interviewers willing.

                ## Milestones
                1. Interview hours per person for the last month pulled from calendars or the tracking system.
                2. A soft cap agreed, for example four interviews a week per engineer.
                3. Anyone over the cap for two months moved off the schedule for a fortnight.
                4. Interviewing contribution recorded as part of performance conversations.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No interviewer exceeds the agreed weekly cap for two consecutive months, checked monthly from interview counts."
                cadence: rolling
              tasks:
                - "Pull last month's interview count for each interviewer"
                - "Agree a soft weekly cap with the engineering leads"
                - "Review interview load and rebalance the rota @recurring(monthly:15)"
                - "Add interviewing to the evidence used in performance reviews"
            - name: Candidate experience survey and themes
              description: |-
                ## Purpose
                Rejected candidates talk to other engineers, and a loop that feels disrespectful damages hiring for years. A short survey sent to every candidate who reaches a technical stage, hired or not, and a monthly read of the themes, tells you which stages feel unfair, too long or poorly run.

                ## Milestones
                1. A survey of no more than five questions sent after every technical stage outcome.
                2. Responses kept anonymous to interviewers.
                3. Monthly themes recorded with the stage they relate to.
                4. One change made in response to a recurring theme each quarter.

                ## Notes
                Start from the **Feedback themes** template. Send the survey after the decision, not before, or rejected candidates will assume it affects the outcome.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A post-decision candidate survey runs continuously, themes are recorded monthly and at least one change per quarter is traced to them."
                cadence: rolling
              tasks:
                - "Write a five-question candidate survey with one free-text field"
                - "Set the tracking system to send it after each decision"
                - "Read the survey responses and update the themes page @recurring(monthly:20)"
                - "Pick one theme to act on each quarter"
            - name: Evidence-first debrief meetings
              description: |-
                ## Purpose
                Debriefs drift into a contest of confidence where the most senior voice sets the outcome and evidence appears only to support it. A fixed agenda, where each interviewer reads their submitted evidence before anyone states a recommendation and the decision maker speaks last, keeps the discussion on what the candidate actually did.

                ## Milestones
                1. A standard debrief agenda with evidence first and recommendations second.
                2. The most senior person speaking last on every debrief.
                3. A written decision with its main reasons recorded within the hour.
                4. Debriefs held within two working days of the final interview.

                ## Notes
                Start from the **Meeting notes** template. If the debrief turns up a question nobody can answer from the evidence, the answer is usually a follow-up call, not a guess.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every debrief follows the evidence-first agenda and has a written decision with reasons recorded within two working days of the final interview."
                cadence: rolling
              tasks:
                - "Write a debrief agenda with evidence read-out before recommendations"
                - "Ask the hiring manager to speak last at the next debrief"
                - "Record the decision and its reasons before people leave the call"
                - "Audit one past debrief record against the agenda @recurring(monthly:12)"
            - name: Quarterly rubric calibration session
              description: |-
                ## Purpose
                Even with anchors, interviewers drift: one becomes a harsh grader, another starts rewarding confidence. Scoring the same recorded or written-up interview independently, then comparing and discussing the gaps, pulls the panel back to a shared standard and surfaces anchors that need rewording.

                ## Milestones
                1. One anonymised interview write-up or recording, with consent, chosen as the calibration case.
                2. Every active interviewer scoring it independently before the session.
                3. Score spreads of more than one point discussed and the anchor clarified.
                4. Rubric changes recorded and sent to the panel.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A calibration session runs every quarter and the spread of interviewer scores on the shared case narrows over two sessions."
                cadence: cyclic
              tasks:
                - "Choose an anonymised write-up to use as the calibration case"
                - "Ask every interviewer to score it before the session"
                - "Hold the calibration session and compare score spreads @recurring(quarterly)"
                - "Reword any anchor that produced a spread of two points or more"
            - name: Interview scheduling agreement with recruiting
              description: |-
                ## Purpose
                Calendar tennis, cancelled slots and interviewers who accept and forget can add a week to every loop. A written agreement with recruiting on reserved interview blocks, booking lead times, reschedule rules and who tells the candidate what, turns scheduling from a weekly scramble into a routine.

                ## Milestones
                1. Two reserved interview blocks per qualified interviewer each week.
                2. Agreed lead times for booking and a rule for interviewer cancellations.
                3. A named person responsible for every message to the candidate.
                4. The time from passing a screen to the next interview under five working days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written scheduling agreement is in use and median time from screen to next interview stays under five working days."
                cadence: rolling
              tasks:
                - "Ask each qualified interviewer to reserve two weekly blocks"
                - "Agree booking lead times and cancellation rules with the recruiter"
                - "Check next week's interview blocks are booked or released @recurring(weekly:wed)"
                - "Measure screen-to-next-interview time at the end of the month"
            - name: New interviewer training programme
              description: |-
                ## Purpose
                Most engineers start interviewing after a single conversation and a link to the question bank, and their first dozen interviews are the noisiest. A short programme covering the scorecard, the rubric, structured questioning, note taking and the fairness checklist, followed by observed practice, makes new interviewers useful from the start.

                ## Milestones
                1. A two to three hour training session covering scorecard, rubric, questions and fairness.
                2. A mock interview with a colleague playing the candidate, observed and debriefed.
                3. Written feedback from the trainer on the mock interview.
                4. Trainees added to the shadow pathway once the session is complete.

                ## Notes
                Start from the **Training program** template. Record a sample interview with a willing colleague; it is the best teaching material you will have.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A repeatable interviewer training session and mock interview exist, and the next three new interviewers complete both before shadowing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Outline the session covering scorecard, rubric, questions and fairness"
                - "Record a sample interview with a colleague playing the candidate"
                - "Run the first training session with the next new interviewers"
                - "Collect trainee feedback and revise the session"
            - name: Shadow and reverse-shadow pathway
              description: |-
                ## Purpose
                Watching two interviews, then running two while an experienced interviewer watches, is the cheapest way to make sure a new interviewer applies the rubric the way the panel does. A defined pathway with a sign-off step stops people being added to the rota just because the calendar is full.

                ## Milestones
                1. A rule of two shadowed and two reverse-shadowed interviews per stage.
                2. A short observation checklist the experienced interviewer fills in.
                3. A sign-off conversation before the new interviewer is added to the pool.
                4. Shadow scores compared with the lead interviewer's to check alignment.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every newly qualified interviewer has completed two shadow and two reverse-shadow interviews with a signed observation checklist."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-page observation checklist for reverse-shadow interviews"
                - "Pair each trainee with an experienced interviewer for their stage"
                - "Compare the trainee's scores with the lead's after each shadow"
                - "Hold a sign-off conversation before adding them to the pool"
            - name: Writing evidence-based interview feedback
              description: |-
                ## Purpose
                Feedback such as 'strong communicator, good culture add' gives the debrief nothing to weigh and can hide bias. Learning to write what the candidate said and did, tied to a competency and a rubric level, makes your voice count in the debrief and makes your decisions defensible if questioned later.

                ## Milestones
                1. A personal checklist: observed behaviour, competency, rubric level, no adjectives without evidence.
                2. Three past feedback forms rewritten against the checklist.
                3. Feedback from a senior interviewer on one rewritten form.
                4. Every new form for a month written to the checklist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three rewritten feedback forms and one month of new forms meet the evidence checklist, confirmed by a senior interviewer's review."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a four-point evidence checklist for your own feedback"
                - "Rewrite three of your past feedback forms against it"
                - "Ask a senior interviewer to review one rewritten form"
                - "Reread one of your recent forms against the checklist @recurring(monthly:26)"
            - name: Probing follow-ups in coding interviews
              description: |-
                ## Purpose
                The first answer to a coding problem tells you little; the follow-ups show whether the candidate understands what they wrote. Practising a ladder of probes, from testing and edge cases to complexity, trade-offs and how they would change the code for a new requirement, turns a pass or fail exercise into a rich read on ability.

                ## Milestones
                1. A ladder of five to eight follow-up probes for each coding question you use.
                2. Two practice interviews with a colleague using the ladder.
                3. A note on how to give hints without solving the problem for the candidate.
                4. Feedback forms that record which probes the candidate handled.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each coding question you run has a written probe ladder, practised in two mock interviews and reflected in your feedback forms."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write five follow-up probes for your main coding question"
                - "Decide in advance which hints you will give and when"
                - "Run two practice interviews with a colleague using the probes"
                - "Add a probes-handled field to your feedback notes"
            - name: Running a system design interview
              description: |-
                ## Purpose
                Design interviews are the hardest to run well: too little steering and the candidate wanders, too much and you are scoring your own design. Learning to set a realistic prompt, let the candidate drive the requirements, push on scale and failure, and score against anchors rather than your favourite architecture, makes this stage fair for senior hires.

                ## Milestones
                1. One design prompt drawn from a real system, simplified to fit 45 minutes.
                2. A list of the areas a strong answer covers at mid, senior and staff level.
                3. A set of interviewer prompts for when the candidate is stuck or off track.
                4. Two mock design interviews run and debriefed with a colleague.

                ## Notes
                Score the reasoning and trade-offs the candidate states, not whether their diagram matches the one you would draw.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A design prompt with level-specific expectations and steering prompts exists and has been used in two debriefed mock interviews."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick a real system and simplify it into a 45 minute prompt"
                - "Write what a strong answer covers at each level"
                - "Prepare steering prompts for stuck or wandering candidates"
                - "Run two mock design interviews and compare notes afterwards"
            - name: Behavioural interviews with past-behaviour evidence
              description: |-
                ## Purpose
                Hypothetical questions such as 'how would you handle a disagreement' invite rehearsed answers; questions about what someone actually did produce evidence. Practising past-behaviour questions with situation, action and result follow-ups gives the behavioural stage the same rigour as the technical ones.

                ## Milestones
                1. Two past-behaviour questions for each behavioural competency on the scorecard.
                2. Follow-ups that ask what the candidate personally did and what happened next.
                3. A practice interview where you note situation, action and result separately.
                4. Rubric anchors for the behavioural competencies checked against real answers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each behavioural competency has two past-behaviour questions with follow-ups, practised in at least one mock interview."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Rewrite any hypothetical behavioural questions as past-behaviour ones"
                - "Write follow-ups that separate the candidate's actions from the team's"
                - "Run a practice interview noting situation, action and result"
                - "Check the behavioural anchors against the practice answers"
            - name: Recognising and reducing interviewer bias
              description: |-
                ## Purpose
                Interviewers reward candidates who resemble them, went to familiar schools, or happen to share their preferred language, and they rarely notice. Learning the common patterns, such as halo effects, similarity and first impressions, then building small structural checks into your own interviews, does more than awareness alone.

                ## Milestones
                1. Notes on five common interview biases with an example of each from software hiring.
                2. Two personal guardrails adopted, such as scoring before reading the CV or writing evidence before a recommendation.
                3. One of your past feedback forms reviewed for language that reflects bias.
                4. A short session run with the panel on the guardrails.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two written bias guardrails are in use in your interviews and shared with the panel in a short session."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a short note on five common interview biases"
                - "Choose two guardrails to apply in every interview you run"
                - "Review one of your old feedback forms for loaded language"
                - "Share the guardrails with the panel in a twenty-minute session"
            - name: Answering candidate questions honestly
              description: |-
                ## Purpose
                The last ten minutes of each interview, when candidates ask their questions, shape whether a good engineer accepts. Interviewers who oversell the codebase or dodge questions about on-call and deadlines create early regretted leavers. Preparing honest, consistent answers about the team's real work, tooling and challenges helps the right people say yes.

                ## Milestones
                1. A list of the ten questions candidates ask most often.
                2. Agreed honest answers, including the team's known weaknesses.
                3. Every interviewer briefed on what they can and cannot discuss, such as pay.
                4. Candidate survey scores on honesty tracked for a quarter.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A shared page of honest answers to the ten most common candidate questions is used by all interviewers for a quarter."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the ten questions candidates ask most often"
                - "Write honest answers, including where the team is struggling"
                - "Agree which topics interviewers hand to the recruiter"
                - "Share the page with every interviewer before their next slot"
            - name: Take-home versus live coding decision
              description: |-
                ## Purpose
                Take-home tasks give nervous candidates room to show their best work but cost them unpaid evenings and favour people with free time; live coding is quicker but rewards performing under observation. Deciding deliberately, perhaps offering candidates a choice, beats inheriting whatever the last hiring manager used.

                ## Milestones
                1. The options listed: take-home, live coding, pairing in a real codebase and candidate choice.
                2. Each option scored on signal, candidate time, fairness and interviewer time.
                3. Candidate survey data and recent hires' opinions considered.
                4. A decision recorded with the reasons and a date to revisit it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the technical stage format, with each option scored on the same four criteria and a review date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the technical stage formats you could realistically run"
                - "Score each format on signal, candidate time, fairness and interviewer time"
                - "Ask five recent hires which format they would have preferred"
                - "Record the decision and a date to revisit it"
            - name: Time-capped take-home task design
              description: |-
                ## Purpose
                Take-homes that say 'should take two hours' and actually take ten punish candidates with jobs and caring responsibilities. Designing a task with a real time cap, a clear brief, a starter repository and a marking guide, then timing it with engineers who have not seen it, makes the format fair.

                ## Milestones
                1. A task brief with a stated time cap of three hours or less.
                2. A starter repository so candidates do not spend time on setup.
                3. A marking guide tied to the rubric, shared with every reviewer.
                4. Completion time measured with two engineers who had not seen the task.
                5. A follow-up discussion stage where the candidate walks through their work.

                ## Notes
                If the median trial takes longer than the cap, cut scope rather than raising the cap.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A take-home brief, starter repository and marking guide exist, and two fresh engineers finished the task within the stated cap."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write a task brief based on a simplified real problem with a time cap"
                - "Build a starter repository with tests and setup already working"
                - "Write a marking guide tied to the rubric anchors"
                - "Re-time the task with an engineer who has not seen it @recurring(quarterly)"
            - name: Pair-programming stage in a realistic codebase
              description: |-
                ## Purpose
                Whiteboard algorithms test a narrow skill most engineers rarely use; adding a small feature to a realistic codebase with an interviewer as a pair shows reading unfamiliar code, testing, asking questions and collaborating. Building a purpose-made practice repository makes that stage repeatable without exposing your real code.

                ## Milestones
                1. A small practice repository with a plausible domain, tests and a few rough edges.
                2. Three feature or bug tasks of increasing difficulty.
                3. Interviewer guidance on how much to help as a pair.
                4. The stage trialled with two internal engineers and adjusted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A practice repository with three graded tasks and interviewer guidance has been trialled twice internally and added to the loop."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Sketch a small domain for the practice repository"
                - "Build the repository with tests and a few deliberate rough edges"
                - "Write three tasks of increasing difficulty"
                - "Trial the stage with two internal engineers"
            - name: Code review exercise as an interview stage
              description: |-
                ## Purpose
                Reviewing someone else's pull request is a daily task and a strong signal of judgement, communication and taste, yet few loops test it. A seeded pull request with a mix of real bugs, design issues and style nits lets you see what a candidate notices first and how they phrase criticism.

                ## Milestones
                1. A pull request seeded with three bugs, two design issues and some style nits.
                2. A marking guide separating what a mid, senior and staff engineer would usually catch.
                3. Scoring on the tone and clarity of comments as well as what was found.
                4. The exercise trialled with two engineers and its length adjusted.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A seeded pull request and level-based marking guide exist and have been trialled with two engineers inside 45 minutes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a pull request against the practice repository"
                - "Seed it with three bugs, two design issues and style nits"
                - "Write a marking guide by level, including comment tone"
                - "Trial it with two engineers and cut it to fit 45 minutes"
            - name: Choosing a coding interview platform
              description: |-
                ## Purpose
                Shared editors, assessment platforms and recorded interview tools vary widely in language support, accessibility, candidate privacy and cost per seat. Comparing two or three against your actual loop, rather than buying the one a recruiter used before, avoids paying for features that push you towards puzzle-style testing.

                ## Milestones
                1. Requirements listed: languages, pairing support, accessibility, data retention and cost.
                2. Two or three platforms trialled on a mock interview.
                3. Data handling terms checked with whoever owns privacy.
                4. A decision recorded with the cost and the review date.

                ## Notes
                Start from the **Purchase decision** template. A plain shared editor and a video call is a perfectly good default for many teams.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A platform decision is recorded comparing at least two options on the same requirements, with privacy terms checked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the requirements list for an interview coding tool"
                - "Trial two or three platforms on a mock interview"
                - "Ask the privacy owner to check data retention terms"
                - "Record the choice, cost and review date"
            - name: Shortening the loop to the stages that add signal
              description: |-
                ## Purpose
                Loops grow by accretion: a stage added after one bad hire, another to involve a new team lead. Checking which stages ever changed a decision, using past debriefs, often shows one or two could go, cutting candidate time and the offers lost to faster competitors.

                ## Milestones
                1. The last twenty debrief records reviewed for which stages changed the outcome.
                2. Stages that never changed a decision listed with their candidate time.
                3. A shorter loop proposed and agreed with the hiring managers.
                4. Time to offer measured for the first ten candidates through the new loop.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on removing or merging stages is recorded from twenty past debriefs, and time to offer is measured for the next ten candidates."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull the last twenty debrief records"
                - "Mark which stage, if any, changed each outcome"
                - "Propose a shorter loop to the hiring managers"
                - "Measure time to offer for the next ten candidates"
            - name: AI assistant policy for candidates
              description: |-
                ## Purpose
                Coding assistants are now part of daily work for most candidates, and loops that silently ban them, or silently allow them, produce inconsistent and unfair results. A clear policy per stage, stated in the candidate guide, and tasks designed so that using an assistant well is part of what you assess, keeps the loop relevant.

                ## Milestones
                1. A decision for each stage on whether AI assistants are allowed, required or not allowed.
                2. The policy stated in the candidate guide and every task brief.
                3. Rubric anchors updated where assistant use is allowed, such as reviewing and verifying generated code.
                4. Interviewers briefed on what to do when the policy is not followed.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A per-stage AI assistant policy is written into the candidate guide and every task brief, with matching rubric anchors."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each stage and decide whether assistants are allowed there"
                - "Add the policy to the candidate guide and task briefs"
                - "Update anchors to score verification of generated code"
                - "Review the policy against the tools candidates actually use @recurring(yearly)"
            - name: Candidate adjustments and accessibility process
              description: |-
                ## Purpose
                Candidates who are deaf, dyslexic, neurodivergent or have a disability often need small changes, such as extra time, written questions or a different tool, and many will not ask unless invited. A clear way to request adjustments, a list of what you routinely offer and a named owner removes the awkwardness and keeps the loop measuring the job, not the format.

                ## Milestones
                1. A sentence inviting adjustment requests in every interview invitation.
                2. A list of routinely offered adjustments, such as extra time or questions in writing.
                3. A named person who handles requests and briefs interviewers confidentially.
                4. The coding platform and video tools checked for screen reader and caption support.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every interview invitation invites adjustment requests, and a named owner and a list of standard adjustments are in place."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add an adjustments sentence to the interview invitation template"
                - "List the adjustments you can offer without approval"
                - "Name the person who handles requests and briefs interviewers"
                - "Test the coding tool with a screen reader and live captions"
            - name: Hiring push for a new five-person team
              description: |-
                ## Purpose
                Hiring five engineers in a quarter is a different problem from filling one seat: interviewer hours triple, debriefs pile up, and the bar slips under pressure. Treating it as a dated event, with a capacity plan, a weekly pipeline review and a protected hiring bar, gets the team formed without lowering standards.

                ## Milestones
                1. A target of five offers accepted, with the roles and levels defined.
                2. Interviewer hours estimated from expected pass rates and booked in advance.
                3. A weekly pipeline review by stage for the duration of the push.
                4. A check that offers made in the push meet the written hiring bar.
                5. A short retrospective once the fifth offer is accepted.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Five offers are accepted within the push window, each meeting the written hiring bar, with a retrospective recorded."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Work out how many candidates each stage needs to reach five hires"
                - "Book interviewer capacity for the whole push"
                - "Review the pipeline stage by stage with the recruiter @recurring(weekly:fri)"
                - "Hold a retrospective once the fifth offer is accepted"
            - name: Graduate and early-career hiring day
              description: |-
                ## Purpose
                Graduate and bootcamp candidates have thin CVs, little interview practice and many offers arriving at once, so a normal loop serves them badly. A single assessment day, with a short pair-programming task, a group design exercise and a conversation, lets you see many candidates fairly and decide within a week.

                ## Milestones
                1. A date, venue or video setup and a candidate cap agreed.
                2. Exercises adapted for early-career candidates with rubrics to match.
                3. Interviewers and hosts briefed, with timings for every room.
                4. Decisions communicated to every candidate within five working days.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The hiring day runs with adapted exercises and rubrics, and every candidate hears the outcome within five working days."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Pick a date and agree the number of candidate places"
                - "Adapt the pair-programming task and rubric for early-career candidates"
                - "Brief interviewers and hosts with a minute-by-minute run sheet"
                - "Send every candidate their outcome within five working days"
            - name: Dry run of a redesigned loop
              description: |-
                ## Purpose
                New loops always contain surprises: a task that takes twice as long, a question two interviewers both ask, a rubric anchor nobody understands. Running the full loop on two or three internal engineers who volunteer as candidates finds those problems before a real candidate does.

                ## Milestones
                1. Two or three internal volunteers booked through the full loop.
                2. Every stage run with its real interviewer, question and rubric.
                3. Timings, overlaps and confusing questions noted in a debrief.
                4. Fixes made before the first external candidate is invited.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The full redesigned loop has been run on at least two internal volunteers and the resulting fixes made before external use."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask two or three engineers from another team to act as candidates"
                - "Book every stage with its real interviewer"
                - "Hold a debrief on timings, overlaps and confusing questions"
                - "Fix the issues before inviting the first external candidate"
            - name: Annual hiring process retrospective
              description: |-
                ## Purpose
                Twelve months of hiring hold most of the evidence you need: who was hired, who declined, how new hires are doing and what candidates said. An annual retrospective with hiring managers and the most active interviewers turns that into a short list of changes for next year instead of repeating the same loop by default.

                ## Milestones
                1. The year's funnel, acceptance and survey figures gathered in one place.
                2. Hiring managers' views on new hires' first months collected.
                3. Three to five changes agreed for the coming year with owners.
                4. Last year's agreed changes checked off or explained.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "An annual retrospective produces three to five owned changes to the loop and reports on the previous year's changes."
                cadence: cyclic
              tasks:
                - "Gather the year's funnel, acceptance and survey figures"
                - "Ask each hiring manager how this year's hires are doing"
                - "Run the annual hiring retrospective and agree owned changes @recurring(yearly)"
                - "Report on last year's changes at the start of the session"
            - name: Founder hiring the first five engineers
              description: |-
                ## Purpose
                Founders hiring their first engineers usually have no recruiter, no rubric and a strong pull to hire friends or whoever is available. A lightweight loop, with a scorecard, one realistic paid work sample, a conversation about values and a reference check, gives a small company most of the rigour of a large one at a fraction of the effort.

                ## Milestones
                1. A scorecard for the first engineering role, focused on ownership and breadth.
                2. A paid work sample of half a day or less, with a clear brief.
                3. Two references taken for every finalist with the same questions.
                4. A decision rule written down before meeting the first candidate.

                ## Notes
                Paying for a longer work sample is fair to candidates and signals that you value their time. Agree the rate before sending the task.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written early-stage loop with scorecard, paid work sample, reference questions and a decision rule is used for every early engineering hire."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a scorecard for your first engineering hire"
                - "Design a paid work sample that fits in half a day"
                - "Write five reference questions to use for every finalist"
                - "Decide your hire rule before the first interview"
            - name: First-time hiring manager setup
              description: |-
                ## Purpose
                New engineering managers inherit an open role in their first weeks and are expected to run the loop with no training and no idea what the recruiter needs from them. A short setup, covering the scorecard, an intake meeting, a weekly time commitment and the decision rules, avoids the slow, inconsistent first hire that sets the wrong tone.

                ## Milestones
                1. An intake meeting with the recruiter held and its outcomes recorded.
                2. The role scorecard and loop map reviewed or written.
                3. Weekly time protected for screening, interviews and the hiring sync.
                4. A mentor among experienced hiring managers named.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A new hiring manager has held a recruiter intake, approved a scorecard and loop map, and protected weekly hiring time."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book an intake meeting with the recruiter for your open role"
                - "Review or write the scorecard and loop map for the role"
                - "Protect two weekly slots for hiring work @recurring(weekly:thu)"
                - "Ask an experienced hiring manager to mentor your first hire"
            - name: Joining an interview panel as an engineer
              description: |-
                ## Purpose
                Engineers are often added to a panel with a calendar invite and a question to ask, then left to guess what good looks like. Preparing properly for your first few interviews, by reading the scorecard, rehearsing your question and writing feedback the same day, makes your vote count and the candidate's hour worthwhile.

                ## Milestones
                1. The role scorecard and your stage's rubric read before your first interview.
                2. Your question rehearsed with a colleague, including the follow-ups.
                3. A five-minute preparation routine you run before each interview.
                4. Feedback for your first three interviews submitted the same day.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Your first three interviews are each prepared with the scorecard and rubric, and feedback for each is submitted the same day."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the scorecard and your stage's rubric"
                - "Rehearse your question and follow-ups with a colleague"
                - "Write a five-minute pre-interview checklist for yourself"
                - "Submit feedback the same day for each of your first three interviews"
            - name: Fully remote loop across time zones
              description: |-
                ## Purpose
                Remote loops fail on logistics more than on content: a candidate in a different time zone asked to interview at night, a shared editor that will not load, an interviewer whose camera is off. A remote playbook covering time windows, tooling checks, video etiquette and a backup plan keeps remote interviews as fair as in-person ones.

                ## Milestones
                1. Interview windows that fall within the candidate's working hours.
                2. A tooling check link sent to candidates the day before.
                3. A backup plan for dropped calls, including who calls whom.
                4. Interviewer video and note-taking etiquette written down.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A remote interview playbook covering time windows, tooling checks and dropped-call backup is in use for every remote candidate."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set the rule that interviews fall inside the candidate's working day"
                - "Write a tooling check message sent the day before"
                - "Agree a dropped-call backup plan with recruiting"
                - "Write two lines of video etiquette for interviewers"
            - name: Junior and apprentice loop without degree filters
              description: |-
                ## Purpose
                Degree requirements and algorithm-heavy screens screen out self-taught engineers, apprentices and career changers who would do well in the role. A loop designed for potential, with a guided exercise, a code reading task and a learning conversation, widens the pool and measures what juniors will actually do in their first year.

                ## Milestones
                1. Degree and years-of-experience requirements removed from the advert.
                2. A guided exercise where the interviewer helps as a senior colleague would.
                3. A code reading task in place of an algorithm puzzle.
                4. Rubric anchors rewritten around learning speed and asking good questions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A junior loop with no degree filter, a guided exercise, a code reading task and learning-focused anchors is used for every junior role."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Remove degree and years requirements from the junior advert"
                - "Design a guided exercise with planned interviewer help"
                - "Write a code reading task using the practice repository"
                - "Rewrite anchors around learning speed and questions asked"
            - name: Internal transfer and boomerang hire loop
              description: |-
                ## Purpose
                Internal transfers and returning former employees are often waved through or, worse, put through a full external loop that ignores what you already know. A shorter, explicit loop, using existing performance evidence and focusing on the gaps for the new role, is faster and fairer to everyone.

                ## Milestones
                1. A written rule for which stages internal and returning candidates skip.
                2. A standard way to gather performance evidence with the candidate's knowledge.
                3. One focused stage for skills the new role needs that the old one did not.
                4. Decisions recorded against the same hiring bar as external hires.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written internal and returning-candidate loop exists and is used for every transfer, with decisions recorded against the standard bar."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide which stages internal and returning candidates skip"
                - "Agree with HR how performance evidence is gathered and shared"
                - "Design one focused stage for the new role's gaps"
                - "Record transfer decisions against the standard hiring bar"
            - name: Checking interview scores against performance
              description: |-
                ## Purpose
                Few teams ever check whether their interview scores predict how hires perform, so the loop's worth is assumed rather than known. Comparing stage scores with performance ratings or manager assessments after a year, even on small numbers, shows which stages carry signal and which are noise.

                ## Milestones
                1. Stage scores for every hire from the last two years gathered with HR's agreement.
                2. Twelve-month performance assessments matched to each hire.
                3. A simple comparison per stage showing where scores and performance line up.
                4. One stage changed or removed based on the findings.

                ## Notes
                Numbers will be small and you only see people you hired, so treat the results as hints, not proof. Keep the analysis confidential and aggregated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A confidential comparison of stage scores against twelve-month performance for recent hires is recorded and leads to one loop change."
                cadence: rolling
              tasks:
                - "Agree with HR what data can be used and how it is protected"
                - "Match stage scores to twelve-month assessments for recent hires"
                - "Compare scores and performance for each stage"
                - "Add newly eligible hires to the comparison @recurring(quarterly)"
            - name: Stage pass rates by candidate group
              description: |-
                ## Purpose
                A stage that passes one group of candidates at a much lower rate than another may be measuring something other than the job. Reviewing pass rates by group each quarter, using data your people team holds and is allowed to analyse, flags stages worth redesigning before the pattern becomes entrenched.

                ## Milestones
                1. The people team confirms which group data may be analysed and how.
                2. Pass rates by stage and group produced in aggregate, never per candidate.
                3. Stages with large gaps reviewed for job relevance and question wording.
                4. Changes and their effect on later quarters recorded.

                ## Notes
                Local law governs what data can be collected and how it is used. The people team or employment counsel decides that, not the engineering team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Quarterly aggregated pass rates by stage and group are reviewed with the people team, and any large gap has a recorded response."
                cadence: cyclic
              tasks:
                - "Ask the people team what group data can be used and how"
                - "Produce aggregated pass rates by stage and group"
                - "Review aggregated pass rates with the people team @recurring(quarterly)"
                - "Record what was changed in response to any large gap"
            - name: Independent bar raiser programme
              description: |-
                ## Purpose
                As a company grows, hiring managers under pressure to fill seats drift below the bar. An independent interviewer from outside the hiring team, trained to hold the standard and able to veto, keeps quality even across teams, but only works with careful selection and regular review.

                ## Milestones
                1. Selection criteria for bar raisers and the first four people chosen.
                2. Bar raisers trained on the rubric, debrief facilitation and their veto rules.
                3. A bar raiser on every final loop, from outside the hiring team.
                4. A monthly review of vetoes and overrides with the bar raiser group.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every final loop includes a trained bar raiser from outside the hiring team, and vetoes are reviewed monthly."
                cadence: rolling
              tasks:
                - "Write the selection criteria for bar raisers"
                - "Choose and train the first four bar raisers"
                - "Assign a bar raiser to every final loop"
                - "Review vetoes and overrides with the bar raisers @recurring(monthly:4)"
            - name: Level calibration at offer time
              description: |-
                ## Purpose
                Offering a senior title to someone who interviewed at mid level, or the reverse, creates pay gaps and painful corrections a year later. A short levelling step, where the evidence from the loop is mapped to the career ladder's level descriptions by someone outside the hiring team, makes the level a judgement from evidence rather than negotiation.

                ## Milestones
                1. Each competency's evidence mapped to the ladder's level descriptions.
                2. A levelling reviewer from outside the hiring team confirming the level.
                3. A rule for what happens when the candidate's expectation differs from the evidence.
                4. Levelling decisions logged with their main evidence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every offer has a logged level, confirmed by a reviewer outside the hiring team against the ladder's descriptions."
                cadence: rolling
              tasks:
                - "Map the loop's competencies to the career ladder's levels"
                - "Name a levelling reviewer outside each hiring team"
                - "Write the rule for candidates expecting a different level"
                - "Log the level and main evidence for every offer"
            - name: Staff-plus and engineering manager loops
              description: |-
                ## Purpose
                Standard loops under-test what matters most for staff engineers and engineering managers: influence without authority, technical strategy, developing people and handling conflict. Designing separate loops, with an architecture strategy conversation, a past-project deep review and a people scenario, avoids hiring senior people on coding speed alone.

                ## Milestones
                1. Scorecards for staff engineer and engineering manager roles agreed.
                2. A technical strategy conversation built around a real past decision of the candidate's.
                3. A people stage for managers covering feedback, hiring and performance issues.
                4. Interviewers for these loops drawn from staff-level engineers and senior managers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Separate staff engineer and engineering manager loops with their own scorecards and senior interviewers are in use."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write scorecards for staff engineer and engineering manager roles"
                - "Design a strategy conversation around a candidate's past decision"
                - "Design a people stage for manager candidates"
                - "Name the senior interviewers for each loop"
---

# Engineering Interview Loops

An engineering interview loop is a measuring instrument, and most loops were assembled one interviewer at a time rather than designed. These projects start with the foundations (a scorecard for the role, a loop map, a written hiring bar, rubrics, a question bank and fairness basics), move through the weekly and monthly routines that keep candidates moving and feedback honest, then the interviewing skills themselves, the format decisions such as take-home versus live coding, hiring events, situations from a founder's first hires to remote and junior loops, and specialist work like checking whether the loop actually predicts performance.

What repeats is a Monday hiring sync, a twice-weekly chase for overdue scorecards, a Wednesday scheduling check, monthly looks at funnel numbers, interviewer load and candidate survey themes, and quarterly rubric calibration, question bank refreshes and pass-rate reviews. The Skills matrix, Metrics log, Meeting notes, Feedback themes, Training program and Purchase decision templates pair with the projects that need a record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
