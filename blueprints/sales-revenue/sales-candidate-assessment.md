---
id: sales-revenue.sales-candidate-assessment
name: Sales Candidate Assessment
description: "A sales hiring process that predicts success: a scorecard built from your best sellers, role plays and mock calls with anchored scoring, disciplined debriefs and reference checks, and reviews that show which hires worked."
category: business
version: 1.0.0
tags: [sales-revenue, sales-candidate-assessment, manager, founder, enterprise, sales-hiring, role-play, reference-checks]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - person
    - meeting-notes
    - metrics-log
    - purchase-decision
    - vendor
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales Candidate Assessment
          description: "Defining the seller profile you need, designing role plays and mock calls, and checking references so sales hires succeed rather than churn."
          projects:
            - name: Lessons from past sales hires who left early
              description: |-
                ## Purpose
                Before designing anything new, look at the last eight to twelve sellers you hired and sort them into those who hit plan, those who scraped by and those who left or were let go inside eighteen months. The pattern in the misses, such as hiring for confidence over preparation or skipping references, tells you which part of the current process is failing and where the new assessment must be strongest.

                ## Milestones
                1. A list of every seller hired in the last two or three years, with start date, leaving date if any and attainment in their first full year.
                2. Each hire grouped as succeeded, borderline or churned, using the same rule for all.
                3. The original interview notes and scores found for as many of them as possible.
                4. Three to five written patterns that separate the churned hires from the successful ones.

                ## Notes
                Keep the review about the process, not about blaming the managers who hired. Where notes are missing, that is itself a finding.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written review of at least eight past sales hires names three or more patterns that distinguished early leavers from sellers who reached plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every seller hired in the last three years with start and leaving dates"
                - "Pull first-year attainment for each hire from sales operations or finance"
                - "Find the interview notes and scores kept for each hire"
                - "Write three to five patterns that separate early leavers from successes"
            - name: Seller success profile from your top performers
              description: |-
                ## Purpose
                Your best current sellers are the clearest evidence of what works in your market, with your deal size, cycle length and buyer. Interviewing three or four of them, and comparing them with average performers, produces a profile grounded in your business rather than a generic list of traits like drive and resilience.

                ## Milestones
                1. Three or four top performers and two average performers identified using attainment over at least four quarters.
                2. A short interview held with each about how they prospect, run discovery and rescue a stalled deal.
                3. Behaviours that top performers share and average performers lack written as observable actions.
                4. A one-page success profile agreed with the sales leader.

                ## Notes
                Describe behaviour you could see in a role play or hear in a reference call, such as 'books the next meeting before ending every call', not personality labels.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page success profile, built from interviews with at least five current sellers, lists observable behaviours and is signed off by the sales leader."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick top and average performers using four quarters of attainment"
                - "Book a thirty-minute interview with each chosen seller"
                - "Ask each seller to walk through their last won and last lost deal"
                - "Write the shared behaviours of top performers as observable actions"
                - "Refresh the profile with the latest year's results @recurring(yearly)"
            - name: Role scorecard for the open sales seat
              description: |-
                ## Purpose
                A job description lists duties; a scorecard says what the person must achieve in their first twelve months and which five or six competencies will get them there. Writing it before the first interview stops each interviewer hiring against their own mental picture, and gives every later exercise a fixed standard to measure against.

                ## Milestones
                1. The mission of the role written in one or two sentences, naming segment, deal size and sales motion.
                2. Three to five measurable outcomes for the first twelve months, such as pipeline created, revenue closed or new accounts opened.
                3. Five or six competencies tied to those outcomes, each with a one-line definition.
                4. The scorecard approved by the hiring manager, the sales leader and the recruiter or HR partner.

                ## Notes
                Keep it to one page. If a competency cannot be tested anywhere in the interview loop, either design a test for it or drop it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page scorecard with mission, twelve-month outcomes and no more than six defined competencies is approved before the first candidate is interviewed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the role's mission in two sentences, naming segment and deal size"
                - "List three to five outcomes the hire must reach in twelve months"
                - "Choose five or six competencies that drive those outcomes"
                - "Get sign-off on the scorecard from the sales leader and HR partner"
            - name: Must-have and trainable criteria for the role
              description: |-
                ## Purpose
                Many sales hiring mistakes come from rejecting good candidates for things you could teach in a month, like your CRM or your product, while waving through gaps you cannot fix, like poor preparation or a loose relationship with the truth. Sorting every criterion into must-have, strong preference and trainable makes screening faster and more honest.

                ## Milestones
                1. Every requirement from the job advert and scorecard listed in one place.
                2. Each one marked must-have, strong preference or trainable, with a reason.
                3. Industry experience and specific tools challenged explicitly rather than assumed to be must-haves.
                4. A final must-have list of five items or fewer, shared with everyone who screens.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list sorts every role requirement into must-have, preference or trainable, with no more than five must-haves, and every screener uses it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy every requirement from the advert and scorecard into one list"
                - "Mark each requirement must-have, preference or trainable with a reason"
                - "Challenge whether industry experience is truly a must-have"
                - "Share the final must-have list with the recruiter and every screener"
                - "Revisit the must-have list against the latest hiring outcomes @recurring(yearly)"
            - name: Interview loop map for sales roles
              description: |-
                ## Purpose
                Without a map, candidates meet five people who all ask about their biggest deal while nobody tests prospecting or written follow-up. A loop map sets out each stage from screen to final round, which competencies it tests, how long it takes and who runs it, so every competency on the scorecard is tested at least twice and none is tested five times.

                ## Milestones
                1. Every stage of the loop listed in order with its length and owner.
                2. Each scorecard competency assigned to at least two stages.
                3. At least one stage where the candidate performs a live sales task rather than describing one.
                4. The whole loop fitting within three weeks from first screen to decision.

                ## Notes
                Four or five stages is usually enough for an individual seller. Each extra stage adds time and loses the best candidates first, because they have other offers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written interview loop shows every stage, owner and duration, with each competency tested in at least two stages and a decision possible within three weeks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draw the current interview stages from first screen to offer"
                - "Map each scorecard competency to the stages that test it"
                - "Add a live sales exercise stage if none exists"
                - "Cut or merge stages until the loop fits in three weeks"
            - name: Anchored scoring rubric for each competency
              description: |-
                ## Purpose
                A score of 3 means something different to every interviewer unless it is tied to examples. An anchored rubric describes what a 1, 2, 3 and 4 look like for each competency in plain behaviour, so a strong discovery role play scores the same whether the hiring manager or a peer seller ran it.

                ## Milestones
                1. A four-point scale chosen, with no middle score to hide in.
                2. Each competency given a written example of a 1, a 2, a 3 and a 4.
                3. The rubric tested by two interviewers scoring the same recorded role play.
                4. Wording revised wherever the two scores differed by more than one point.

                ## Notes
                Start from the **Skills matrix** template. Rewrite anchors from real candidate answers once you have them; invented examples drift towards the obvious.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every scorecard competency has four written anchors, and two interviewers scoring the same recorded exercise land within one point on each."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set up a four-point scale in the skills matrix template"
                - "Write an example of a 1, 2, 3 and 4 for each competency"
                - "Have two interviewers score the same recorded role play"
                - "Rewrite the anchors where their scores differed by more than one point"
            - name: Interviewer assignments by competency
              description: |-
                ## Purpose
                Interviewers who try to assess everything end up assessing likeability. Giving each interviewer two competencies to own, with their questions or exercise prepared in advance, produces deeper evidence and turns the debrief into a set of specific findings rather than five general impressions.

                ## Milestones
                1. Each interviewer in the loop assigned two competencies at most.
                2. A short question set or exercise brief prepared for each assignment.
                3. Assignments written into the interview invitation so every interviewer knows their focus.
                4. No competency left without an owner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every interviewer has a written assignment of no more than two competencies with prepared questions, and every competency has an owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every interviewer currently in the sales loop"
                - "Assign each interviewer no more than two competencies"
                - "Write three questions or an exercise brief for each assignment"
                - "Add each interviewer's focus to the calendar invitation template"
            - name: Candidate evidence file for every applicant
              description: |-
                ## Purpose
                Evidence scattered across email, chat messages and memory is lost by the debrief, and a disputed decision cannot be explained later. One file per candidate holding the CV, screen notes, scorecards, exercise outputs and reference notes keeps every decision traceable and makes the debrief faster.

                ## Milestones
                1. A standard file structure for candidates agreed with HR, including how long files are kept.
                2. Each active candidate given a file with their CV and screen notes.
                3. Scorecards and exercise outputs added within a day of each stage.
                4. Files of finished candidates closed and kept or deleted according to the agreed retention rule.

                ## Notes
                Start from the **Person** template. Candidate records are personal data, so agree access and retention with HR to follow your local data protection rules.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active sales candidate has one file holding CV, stage notes and scorecards, kept under a retention rule agreed with HR."
                cadence: rolling
              tasks:
                - "Agree a candidate file structure and retention period with HR"
                - "Create a file for each active candidate with CV and screen notes"
                - "Add each scorecard and exercise output within a day of the stage"
                - "Close out files of candidates who have finished the process @recurring(monthly:28)"
            - name: Lawful and fair interview question review
              description: |-
                ## Purpose
                Sales interviewers often improvise, and casual questions about family plans, age, nationality or health can breach employment law and put off strong candidates. Reviewing the question bank and exercise briefs with HR or an employment adviser, then briefing every interviewer, removes the risk without making interviews stiff.

                ## Milestones
                1. Every question and exercise brief in the loop collected in one document.
                2. The document reviewed by HR or an employment adviser for your country.
                3. Risky questions removed or reworded, and topics to avoid listed for interviewers.
                4. Every interviewer briefed on the list before their next interview.

                ## Notes
                This organises the review; the judgement on what is lawful belongs to HR or your employment adviser. Rules on asking about salary history, for example, differ between countries and regions.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A question bank reviewed by HR or an employment adviser is in use, and every interviewer has been briefed on the topics to avoid."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect every interview question and exercise brief into one document"
                - "Send the document to HR or an employment adviser for review"
                - "Remove or reword every question they flag"
                - "Brief every interviewer on the topics to avoid"
                - "Re-check the question bank with HR @recurring(yearly)"
            - name: Candidate experience standards for sales hiring
              description: |-
                ## Purpose
                Good sellers judge your company by how you run the process, and they are usually comparing it with two or three others at the same time. Written standards, such as replying within two working days, sending exercise briefs at least three days ahead and giving a decision within a week of the final round, keep the best candidates in the loop and protect your reputation in a small market.

                ## Milestones
                1. Response time standards written for each stage of the process.
                2. A standard briefing email for each exercise explaining what is assessed and how.
                3. Every active candidate's last contact date visible to the hiring manager.
                4. Finalists' views on the process collected after each decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written response standards are in place and at least 90 percent of candidate contacts in a quarter meet them."
                cadence: rolling
              tasks:
                - "Write a response time standard for each hiring stage"
                - "Draft a briefing email for each exercise in the loop"
                - "Check the last contact date of every active candidate @recurring(weekly:wed)"
                - "Ask every finalist two questions about the process after the decision"
            - name: Weekly sales hiring pipeline review
              description: |-
                ## Purpose
                Open sales seats cost revenue every week they stay empty, and candidates stall quietly between stages. A twenty-minute weekly review of every open seat, each candidate's stage and the next action keeps the process moving and shows early when the top of the funnel is too thin.

                ## Milestones
                1. A standing weekly slot with the hiring manager and recruiter.
                2. A single view of every open seat and candidate by stage.
                3. Every candidate given a named next action and date.
                4. Seats with fewer than three candidates in assessment flagged for more sourcing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly reviews held, each ending with a next action and owner for every active candidate."
                cadence: rolling
              tasks:
                - "Book a twenty-minute weekly slot with the recruiter"
                - "Build one view of open seats and candidates by stage"
                - "Review every candidate's stage and next action @recurring(weekly:mon)"
                - "Flag any seat with fewer than three candidates in assessment"
            - name: Written scorecards before any debrief
              description: |-
                ## Purpose
                Once people hear the hiring manager's opinion, their own memory of the interview bends towards it. Requiring every interviewer to submit a written score with evidence within 24 hours, before anyone discusses the candidate, is the cheapest fix there is for groupthink in sales hiring.

                ## Milestones
                1. A rule agreed that scores are submitted before discussion and within 24 hours.
                2. A short scorecard form with a score and two lines of evidence per competency.
                3. Debriefs postponed when scorecards are missing rather than held without them.
                4. On-time submission reaching 95 percent across a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over one quarter, at least 95 percent of interview scorecards are submitted within 24 hours and before the debrief."
                cadence: rolling
              tasks:
                - "Agree the submit-before-discussion rule with every interviewer"
                - "Create a scorecard form with a score and evidence per competency"
                - "Chase missing scorecards for the week's interviews @recurring(weekly:fri)"
                - "Postpone any debrief where a scorecard is missing"
            - name: Evidence-led debrief after every final round
              description: |-
                ## Purpose
                Debriefs often turn into a contest of confidence, where the loudest interviewer decides. A structured debrief that goes competency by competency, reads out evidence first and only then asks for a hire or no-hire call produces decisions you can explain to the candidate, to leadership and, a year later, to yourself.

                ## Milestones
                1. A fixed debrief agenda: scores read, evidence by competency, concerns, then the decision.
                2. A named facilitator who is not the hiring manager.
                3. Every debrief ending with a written decision and the main reason.
                4. Open concerns turned into specific questions for the reference check.

                ## Notes
                Start from the **Meeting notes** template. Ask the most junior interviewer to speak first so seniority does not set the tone.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every final-round debrief over a quarter follows the agenda and ends with a written decision, reason and any reference questions."
                cadence: rolling
              tasks:
                - "Write a four-part debrief agenda and share it with interviewers"
                - "Choose a debrief facilitator who is not the hiring manager"
                - "Record the decision and main reason in the meeting notes"
                - "Turn each open concern into a question for the reference calls"
            - name: Monthly interviewer calibration session
              description: |-
                ## Purpose
                Even with a good rubric, interviewers drift: one becomes a hard marker, another starts rewarding polish over substance. A monthly forty-five minute session where everyone scores the same recorded role play or answer, then compares, keeps scores comparable and catches drift before it costs you a good hire.

                ## Milestones
                1. A monthly session in the calendar for everyone in the loop.
                2. A recorded exercise or anonymised answer prepared for each session, used with consent.
                3. Each interviewer's score compared with the group median.
                4. Interviewers who differ by more than a point on several competencies given one-to-one support.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly calibration sessions held, with the spread of scores on the shared exercise narrowing to one point or less."
                cadence: rolling
              tasks:
                - "Get candidate consent to use recorded exercises for interviewer training"
                - "Pick one recorded role play or anonymised answer for the session"
                - "Run the calibration session and compare scores @recurring(monthly:12)"
                - "Note any interviewer who is consistently a point above or below the group"
            - name: Hiring funnel pass-through rates by stage
              description: |-
                ## Purpose
                If 80 percent of candidates pass the screen but only one in ten passes the role play, the screen is not doing its job. Tracking how many candidates enter and pass each stage, by role and by source, shows where the process is too loose, too strict or too slow.

                ## Milestones
                1. Counts of candidates entering and passing each stage for the last two hiring rounds.
                2. Pass-through rate and average days per stage calculated for each role type.
                3. Results split by source, such as referral, recruiter, inbound applicant and direct outreach.
                4. One change agreed for the stage with the most surprising rate.

                ## Notes
                Start from the **Metrics log** template. Small numbers swing wildly, so look at the trend over several months before redesigning a stage.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly log shows pass-through rate and days per stage for each sales role, and one process change has been made from it."
                cadence: rolling
              tasks:
                - "Count candidates entering and passing each stage for the last two rounds"
                - "Set up a metrics log with pass rate and days per stage"
                - "Update stage counts and pass-through rates @recurring(monthly:20)"
                - "Split pass rates by candidate source and note the strongest source"
            - name: Quarterly quality-of-hire review
              description: |-
                ## Purpose
                An assessment process is only as good as the sellers it lets through. Comparing each hire's interview scores with how they are doing at three, six and twelve months, against ramp targets and their manager's view, shows which exercises predict success and which only predict who interviews well.

                ## Milestones
                1. A list of every sales hire from the last two years with their interview scores by competency.
                2. Each hire's status at three, six and twelve months recorded: ramp progress, attainment and whether they stayed.
                3. Exercises or competencies whose scores bear no relation to later performance identified.
                4. One change to the loop agreed each quarter, or a note that none is needed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews completed in a year, each comparing hire scores with later results and recording a decision on the loop."
                cadence: rolling
              tasks:
                - "List recent hires with their interview scores by competency"
                - "Ask each hire's manager for a short rating at three, six and twelve months"
                - "Compare scores with later results and note any mismatch @recurring(quarterly)"
                - "Record one change to the loop or the reason none is needed"
            - name: Role play scenario bank
              description: |-
                ## Purpose
                Using the same role play for two years means candidates share it online and current sellers coach their friends through it. A bank of four to six scenarios per role, each with a buyer brief, hidden objections and scoring notes, lets you rotate scenarios while keeping difficulty and scoring comparable.

                ## Milestones
                1. Four to six scenarios written for each sales role, based on real anonymised deals.
                2. Each scenario holding a candidate brief, a buyer brief with hidden information and scoring notes.
                3. Every scenario trialled with a current seller to check its difficulty.
                4. One scenario retired or rewritten each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A bank of at least four tested scenarios per sales role exists, with one rotated out each quarter."
                cadence: rolling
              tasks:
                - "Pick four recent real deals to turn into anonymised scenarios"
                - "Write a candidate brief and a buyer brief for each scenario"
                - "Trial each scenario with a current seller and adjust the difficulty"
                - "Retire or rewrite the most used scenario in the bank @recurring(quarterly)"
            - name: Trained interviewer bench
              description: |-
                ## Purpose
                When only the hiring manager and one peer can run a role play, hiring stops every time one of them is on leave or behind on their own number. A bench of trained interviewers, each signed off after shadowing and reverse shadowing, keeps the loop running and spreads the time cost across the team.

                ## Milestones
                1. A minimum number of trained interviewers set for each stage.
                2. A training route written: rubric briefing, two shadowed interviews, one reverse-shadowed interview.
                3. Each new interviewer signed off by an experienced one.
                4. Bench size checked against open seats every month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two signed-off interviewers cover every assessment stage, checked monthly against the number of open seats."
                cadence: rolling
              tasks:
                - "Set a minimum number of trained interviewers per stage"
                - "Write the shadow and reverse-shadow training route"
                - "Sign off each new interviewer after a reverse-shadowed interview"
                - "Check bench size against open seats @recurring(monthly:3)"
            - name: Bias and adverse impact review of assessment scores
              description: |-
                ## Purpose
                Role plays and culture-fit conversations are where bias creeps into sales hiring, often favouring candidates who sound like the existing team. Looking at pass rates and scores by stage across groups, with HR and within data protection rules, shows whether any stage screens people out for reasons unrelated to selling.

                ## Milestones
                1. HR agreement on which candidate data can be analysed and how it is anonymised.
                2. Pass rates by stage compared across the groups HR can report on.
                3. Any stage with a large gap examined question by question.
                4. Changes made to wording, scenarios or panel make-up where a stage shows an unexplained gap.

                ## Notes
                Treat this as a review led with HR, not a legal judgement. Small numbers can mislead, so look across a full year of candidates.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly review with HR compares stage pass rates across groups and records action on any stage with an unexplained gap."
                cadence: cyclic
              tasks:
                - "Agree with HR which candidate data can be analysed"
                - "Compare pass rates by stage across groups for the past year"
                - "Examine any stage with a large gap question by question"
                - "Repeat the pass rate review with HR @recurring(yearly)"
            - name: Behavioural questions that test sales competencies
              description: |-
                ## Purpose
                Asking how a candidate would handle a difficult buyer invites a rehearsed theory. Questions about what they actually did, followed by three or four probes for names, numbers and their own part in it, separate sellers who have done the work from those who watched someone else do it.

                ## Milestones
                1. Two past-behaviour questions written for each scorecard competency.
                2. A set of standard probes learned: what exactly did you do, what happened next, what would the buyer say about it.
                3. Three mock interviews practised with a colleague acting as the candidate.
                4. Answers that drift into 'we' or hypotheticals noticed and redirected in practice.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two tested past-behaviour questions exist for every competency, and the interviewer has practised probing in three mock interviews."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write two past-behaviour questions for each competency on the scorecard"
                - "Learn four standard probes for names, numbers and personal role"
                - "Practise three mock interviews with a colleague as the candidate"
                - "Add one new question drawn from a real interview to the bank @recurring(monthly:16)"
            - name: Verifying quota attainment and deal claims
              description: |-
                ## Purpose
                Almost every sales CV says top performer and 140 percent of quota. Learning to ask for quota size, attainment by year, rank on the team, average deal size and cycle length, and checking that they add up, quickly separates real track records from inflated ones.

                ## Milestones
                1. A standard set of track record questions used in every screen.
                2. Each candidate's claimed numbers written down year by year.
                3. A simple consistency check: average deal size times deals closed against claimed revenue.
                4. Any claim that does not add up raised with the candidate and noted for the reference check.

                ## Notes
                Some candidates cannot share exact figures because of confidentiality. Ranges and team rankings are usually enough; refusing everything is worth probing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Track record questions are used in every screen, and every finalist's claimed numbers have been checked for consistency and recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the five track record questions to ask in every screen"
                - "Record each candidate's quota and attainment year by year"
                - "Check average deal size and deal count against claimed revenue"
                - "Note claims that do not add up as questions for referees"
            - name: Playing a credible buyer in role plays
              description: |-
                ## Purpose
                A role play is only as good as the person playing the buyer. Interviewers who give everything away in the first minute, or who stonewall for sport, make strong candidates look weak and weak ones look strong. Practising one consistent buyer persona, with information released only when it is earned, makes the exercise fair and repeatable.

                ## Milestones
                1. One buyer persona learned per scenario, including role, priorities and hidden pain.
                2. Clear rules written for when each piece of hidden information is revealed.
                3. Two practice runs completed with current sellers, with feedback on realism.
                4. Consistent behaviour across candidates confirmed by a second observer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The interviewer has run two practice role plays as the buyer, with a second observer confirming information was released by the written rules."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the buyer brief and mark what is revealed only when asked"
                - "Write rules for when each hidden detail is released"
                - "Run two practice role plays with current sellers as candidates"
                - "Ask a second observer to check you played each candidate the same way"
            - name: Testing coachability with a feedback and rerun loop
              description: |-
                ## Purpose
                Coachability predicts ramp speed better than polish, but it cannot be judged from what candidates say about themselves. Stopping a role play after ten minutes, giving one specific piece of feedback and running the next part again shows directly whether the candidate can hear it, accept it and apply it.

                ## Milestones
                1. A standard pause point and feedback script added to each role play.
                2. One piece of feedback per candidate chosen from what they actually did.
                3. A rubric line for coachability that scores the change after feedback rather than the starting point.
                4. The loop run with at least three candidates and their scores compared.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A feedback and rerun step with its own rubric line is part of every role play and has been used with at least three candidates."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose a pause point about ten minutes into each role play"
                - "Write a short script for giving one piece of feedback"
                - "Add a coachability line to the rubric that scores the rerun"
                - "Run the loop with three candidates and compare their scores"
            - name: Probing past rehearsed interview answers
              description: |-
                ## Purpose
                Experienced sellers interview well because selling themselves is the job. Rehearsed stories about the big deal come out smooth and identical every time; going two or three layers below the story, to the week the deal nearly died or the email they sent the champion, reveals whether the candidate was driving or riding along.

                ## Milestones
                1. A list of the stories sales candidates most often rehearse and the probes that test them.
                2. Follow-up questions practised that ask for specific days, documents and people.
                3. Candidates compared on their answers at the second and third probe rather than the opening.
                4. Two examples written up where probing changed the interviewer's view.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The interviewer has a written set of layered probes and two documented cases where probing changed an assessment."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the five stories sales candidates most often rehearse"
                - "Write three layered follow-up probes for each story"
                - "Use the probes in the next three interviews you run"
                - "Write up any case where probing changed your view of a candidate"
            - name: Reference calls that get past polite answers
              description: |-
                ## Purpose
                Most referees are chosen by the candidate and will say something kind. Asking them to rate specific scorecard behaviours, compare the candidate with others they managed and describe the coaching the person needed gives information you can use. A former direct manager, spoken to with the candidate's consent, is worth more than three friendly peers.

                ## Milestones
                1. A reference script built around the scorecard competencies.
                2. Questions that ask for comparison, such as where the candidate ranked on the team.
                3. At least one former direct manager in every reference set, agreed with the candidate.
                4. Notes from each call recorded against the competencies, not as a general impression.

                ## Notes
                Check with HR what consent and data rules apply to references in your country before calling anyone the candidate did not name.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A competency-based reference script is in use, and each finalist's references include a former manager, with notes recorded by competency."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a reference script with questions mapped to each competency"
                - "Add ranking questions such as where they placed on the team"
                - "Ask each finalist for consent to speak to a former manager"
                - "Record reference notes against each competency on the day of the call"
            - name: Reading a sales CV for context and fit
              description: |-
                ## Purpose
                Past success selling a market leader's product to warm inbound leads may not transfer to a startup with no brand, and the reverse is true too. Reading each CV for company stage, sales motion, deal size, buyer seniority and tenure pattern, before looking at the claimed numbers, tells you whether that success is likely to repeat in your seat.

                ## Milestones
                1. A short set of context questions for screening CVs: stage, motion, deal size, buyer and cycle length.
                2. Your own role described in the same terms for comparison.
                3. Tenure patterns read in context, such as acquisitions, layoffs or fixed contracts.
                4. Screen notes recording context fit separately from track record.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every screened CV has notes on context fit across five factors, recorded separately from the candidate's claimed results."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Describe your open seat by stage, motion, deal size, buyer and cycle"
                - "Write five context questions to apply to every sales CV"
                - "Screen the next ten CVs using the context questions"
                - "Record context fit separately from track record in the screen notes"
            - name: Mock cold call exercise for prospecting roles
              description: |-
                ## Purpose
                For sales development and new business roles, the job is getting a busy stranger to agree to a meeting. A five-minute mock cold call to an interviewer playing a sceptical prospect, with a short brief sent a day ahead, shows preparation, tone, handling of a brush-off and whether the candidate actually asks for the meeting.

                ## Milestones
                1. A one-page prospect brief with company, role and one public trigger event.
                2. A buyer script with two brush-offs and one genuine objection.
                3. Scoring notes covering opener, relevance, objection handling and the ask.
                4. The exercise trialled with two current sales development reps before use.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested mock cold call exercise with brief, buyer script and scoring notes is used with every candidate for a prospecting role."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page prospect brief based on a real anonymised account"
                - "Script two brush-offs and one genuine objection for the buyer"
                - "Write scoring notes for opener, relevance, objection and ask"
                - "Trial the call with two current reps and adjust the difficulty"
            - name: Discovery role play with a scripted buyer brief
              description: |-
                ## Purpose
                Discovery is where most deals are won or lost, and where interviews reveal the most about a seller. A twenty-minute role play with a buyer who has a hidden problem, a budget constraint and a second decision maker tests whether the candidate asks before they pitch, follows up on what they hear and confirms a next step.

                ## Milestones
                1. A candidate brief and a buyer brief with three hidden facts to uncover.
                2. Scoring notes for questioning depth, listening, qualification and next steps.
                3. A rule that the buyer reveals hidden facts only when asked a good question.
                4. The role play trialled with two current sellers and the timing confirmed.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A discovery role play with both briefs, three hidden facts and scoring notes has been trialled with two current sellers and is used in every closing-role loop."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose a realistic buyer problem from a recent anonymised deal"
                - "Write three hidden facts the candidate must uncover"
                - "Draft scoring notes for questions, listening, qualification and next step"
                - "Trial the role play with two current sellers"
            - name: Mock pitch or demo for closing roles
              description: |-
                ## Purpose
                Account executives must turn what they learned in discovery into a clear story for the buyer. Asking finalists to give a fifteen-minute pitch or demo to a small panel, built from the notes of their earlier role play, tests structure, tailoring and how they handle interruptions, without asking for unpaid consulting work.

                ## Milestones
                1. A brief linking the pitch to the candidate's earlier discovery role play.
                2. Clear limits on preparation, such as two hours at most and no custom slides required.
                3. A panel of two or three with assigned buyer roles and planned interruptions.
                4. Scoring notes for structure, relevance to the stated pain and handling of questions.

                ## Notes
                Never ask candidates to pitch to your real prospects or produce work you will use. It is unfair and, in some places, raises employment questions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A finalist pitch exercise with capped preparation time, panel roles and scoring notes is in use for every closing role."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a pitch brief that builds on the discovery role play"
                - "Set a preparation limit and state it in the brief"
                - "Assign buyer roles and two planned interruptions to the panel"
                - "Write scoring notes for structure, relevance and handling questions"
            - name: Objection and negotiation role play
              description: |-
                ## Purpose
                Late-stage pressure, such as a buyer asking for 30 percent off or pushing the decision into next quarter, separates sellers who protect value from those who give it away. A short role play with a procurement-style buyer and a set of planned asks shows whether the candidate trades rather than concedes and keeps the deal moving.

                ## Milestones
                1. A late-stage scenario with a price, a timing and a terms ask scripted for the buyer.
                2. A list of acceptable trades and a walk-away point in the candidate brief.
                3. Scoring notes for asking questions before conceding, trading and confirming agreement.
                4. The scenario tested with one senior seller and adjusted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A negotiation role play with three scripted asks, a candidate brief and scoring notes has been tested with a senior seller and used in the final round."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Script three late-stage asks for the buyer: price, timing and terms"
                - "Give the candidate a brief with allowed trades and a walk-away point"
                - "Write scoring notes for questioning, trading and confirming"
                - "Test the scenario with one senior seller"
            - name: Written follow-up email exercise
              description: |-
                ## Purpose
                Much of selling is written: recaps, proposals and nudges to a buyer who has gone quiet. Asking each candidate to send a follow-up email within two hours of their role play shows whether they listened, can summarise clearly and propose a concrete next step, and it takes an interviewer five minutes to score.

                ## Milestones
                1. A standard instruction given to candidates at the end of each role play.
                2. Scoring notes covering accuracy of the recap, clarity, length and the proposed next step.
                3. Emails scored by someone who did not run the role play.
                4. Scores added to the candidate's evidence file before the debrief.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every role play ends with a follow-up email task, and each email is scored against written notes before the debrief."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the instruction given to candidates after each role play"
                - "Draft scoring notes for recap, clarity, length and next step"
                - "Ask a second interviewer to score each email"
                - "Add the email and its score to the candidate file"
            - name: Account plan case for enterprise sellers
              description: |-
                ## Purpose
                Enterprise sellers spend months on a few accounts with many stakeholders, and a short role play misses that skill entirely. A case built from a public annual report and a fictional org chart, where the candidate sets out stakeholders, entry points and a first-quarter plan, tests commercial thinking and account strategy in about an hour of preparation.

                ## Milestones
                1. A case pack with a public company profile, a fictional org chart and a short deal history.
                2. Case questions asking for stakeholders, risks and a ninety-day plan for the account.
                3. A thirty-minute discussion format where the panel challenges the plan.
                4. Scoring notes for business understanding, stakeholder thinking and realism.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An enterprise account plan case with case pack, discussion format and scoring notes has been used with at least two finalists."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a public company and gather its latest annual report"
                - "Draw a fictional org chart with five stakeholders and one blocker"
                - "Write the case questions and the discussion format"
                - "Write scoring notes for business understanding and stakeholder thinking"
            - name: Deciding whether to use sales aptitude or personality tests
              description: |-
                ## Purpose
                Vendors sell sales aptitude and personality tests with confident claims; some are useful, while others add cost and legal risk with little evidence behind them. Comparing two or three options on published validity evidence, candidate time, cost per candidate and how results would be used gives you a clear yes, no or limited trial.

                ## Milestones
                1. The question a test would answer written down, such as screening high volumes or adding a view at final round.
                2. Two or three tests compared on validity evidence, candidate time, cost and accessibility.
                3. HR or an employment adviser consulted on fairness and data rules for the shortlisted options.
                4. A recorded decision: no test, a limited trial or adoption, with how results will be weighted.

                ## Notes
                Start from the **Purchase decision** template. A test should never decide a hire on its own; treat it as one input alongside the exercises.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on aptitude or personality testing, comparing at least two options on evidence, cost and fairness, is recorded with HR input."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the one question a test would need to answer for you"
                - "Shortlist two or three tests and request their validity evidence"
                - "Ask HR about fairness and data rules for each option"
                - "Record the decision and how any results would be weighted"
            - name: Briefing a sales recruiter against your scorecard
              description: |-
                ## Purpose
                External recruiters screen for what they think you want, which is often years of experience and a recognisable logo. Choosing a recruiter who specialises in sales roles and briefing them with the scorecard, must-haves and the first exercise means the shortlist arrives already filtered on the things that predict success in your seat.

                ## Milestones
                1. Two or three recruiters compared on sales specialism, fee and screening method.
                2. One chosen and given the scorecard, must-have list and examples of strong and weak CVs.
                3. The recruiter's screen questions agreed and aligned to the competencies.
                4. The first five submitted candidates reviewed together and the brief adjusted.

                ## Notes
                Start from the **Vendor** template. Ask how the recruiter checks claimed quota attainment before submitting anyone.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A specialist recruiter is engaged with a written brief built on the scorecard, and the brief has been reviewed after the first five candidates."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare two or three recruiters on sales specialism, fee and method"
                - "Send the chosen recruiter the scorecard and must-have list"
                - "Agree the recruiter's screen questions against the competencies"
                - "Review the first five submitted candidates together and adjust the brief"
            - name: Hiring decision rules and veto rights
              description: |-
                ## Purpose
                Disputes after a debrief usually come from rules nobody wrote down: whether one strong no outweighs three yeses, whether the sales leader can overrule the panel, whether a near miss can be reconsidered later. Agreeing these rules before the next round keeps decisions consistent and quick.

                ## Milestones
                1. A written rule for how scores combine into a decision, including any must-pass competencies.
                2. Who decides, who can veto and on what grounds written down.
                3. A rule for close calls, such as an extra exercise or a second reference rather than a second full loop.
                4. The rules shared with all interviewers and applied in the next three decisions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written decision rules covering score thresholds, decision rights, veto grounds and close calls have been applied to three consecutive hiring decisions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write how scores combine into a hire or no-hire decision"
                - "Name who decides and who can veto, with the grounds for a veto"
                - "Agree how a close call is resolved without repeating the loop"
                - "Share the rules with every interviewer before the next debrief"
            - name: Paid work trial or ride-along day
              description: |-
                ## Purpose
                For some roles, especially field sales and the first hire in a small business, a paid day working alongside the team tells you more than another interview. Deciding whether to offer one, what the candidate will do and how it is paid and scored avoids a vague day that tells nobody anything.

                ## Milestones
                1. A decision on whether a trial day fits the role, recorded with the reason.
                2. A plan for the day with specific tasks such as call preparation, joining a customer meeting and a debrief.
                3. Pay, confidentiality and any insurance points agreed with HR or an adviser.
                4. Scoring notes linked to the scorecard, with feedback given to the candidate at the end of the day.

                ## Notes
                Keep the trial short and paid. Candidates in current jobs may not be able to take a day off, so offer an alternative such as an evening session.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on trial days exists, with a written plan, payment terms and scoring notes if one is offered."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide whether a trial day suits this role and write down why"
                - "Plan the tasks for the trial day hour by hour"
                - "Agree pay and confidentiality terms for the day with HR"
                - "Write scoring notes and a feedback slot for the end of the day"
            - name: Final-round assessment day for a sales development cohort
              description: |-
                ## Purpose
                When hiring four or more sales development reps at once, one-by-one interviews take weeks and scores drift between candidates. Running a single assessment day with a cold call, a discovery role play, a written exercise and a short interview for six to ten finalists gives side-by-side evidence and a decision within forty-eight hours.

                ## Milestones
                1. A date set with rooms or video links, interviewers and a timetable for every candidate.
                2. All exercises and briefs ready, with buyers briefed the day before.
                3. Every candidate taken through the same exercises, with scores submitted by the end of the day.
                4. A cohort debrief held and decisions sent within two working days.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An assessment day is held for at least six finalists, with all scores submitted the same day and decisions sent within two working days."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Set the date and confirm interviewers and rooms or video links"
                - "Build a timetable that rotates each candidate through every exercise"
                - "Brief every buyer and interviewer the day before"
                - "Hold the cohort debrief and send decisions within two working days"
            - name: Reference and background checks before the offer
              description: |-
                ## Purpose
                Checks done after an offer is signed rarely change anything. Completing references and any background or right-to-work checks once a preferred candidate is chosen, but before the offer is final, gives you time to act on a concern and to plan the first months around any development point.

                ## Milestones
                1. The candidate told which checks will be done and their consent recorded.
                2. Two or three references completed, including one former manager.
                3. Any background, right-to-work or qualification checks your country requires completed through HR.
                4. Concerns from the debrief either cleared or turned into a development point for the first months.

                ## Notes
                Which checks are allowed or required depends on your country and the role. Let HR or a licensed screening provider run them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "References and required checks for the chosen candidate are complete and reviewed before the offer is confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Tell the candidate which checks will be done and record their consent"
                - "Book reference calls with one former manager and one peer or customer"
                - "Ask HR to start any required background and right-to-work checks"
                - "Write up how each debrief concern was cleared or carried forward"
            - name: Selling the role to your preferred finalist
              description: |-
                ## Purpose
                Strong sellers usually have more than one option, and they are assessing you as hard as you are assessing them. Planning a final conversation that answers their real questions about territory, inherited pipeline, team attainment and the manager, with honest figures, wins the candidate you want and avoids a hire who leaves at month four.

                ## Milestones
                1. The finalist's top three concerns written down from earlier conversations.
                2. Honest figures prepared on territory, inherited pipeline and how many current sellers hit quota.
                3. A conversation with a current seller offered so the finalist can ask freely.
                4. The outcome recorded, including any concern that nearly cost the hire.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A final conversation is held using honest territory and attainment figures, and the finalist's decision and main reasons are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the finalist's top three concerns from earlier conversations"
                - "Prepare honest figures on territory, pipeline and team attainment"
                - "Offer the finalist a call with a current seller"
                - "Record the decision and the reasons the finalist gave"
            - name: Feedback calls to unsuccessful finalists
              description: |-
                ## Purpose
                Finalists invest hours in role plays and presentations, and in a small sales market they talk to each other. A short, specific feedback call within a week, drawn from the scorecard, protects your reputation, sometimes turns a near miss into a future hire and tests whether your reasoning holds up when said aloud.

                ## Milestones
                1. A short feedback note prepared for each finalist from their scores and evidence.
                2. Feedback given by phone or video within a week of the decision.
                3. Wording checked with HR wherever there is any risk of dispute.
                4. Strong near misses added to a list for future roles, with their agreement.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every unsuccessful finalist in a round receives specific feedback within a week, and near misses who agree are recorded for future roles."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft two strengths and one gap for each unsuccessful finalist"
                - "Ask the agent to tighten each feedback note into three plain sentences"
                - "Call each finalist within a week of the decision"
                - "Ask strong near misses whether you may contact them about future roles"
            - name: Hiring sprint for a new sales team or region
              description: |-
                ## Purpose
                Opening a region or a new segment can mean hiring five to fifteen sellers in a quarter, and quality usually drops as the pressure rises. A sprint plan with interviewer capacity, a frozen loop, weekly calibration and a firm rule against lowering the bar keeps the standard steady at volume.

                ## Milestones
                1. Hiring numbers and start dates agreed, with interviewer hours per week calculated.
                2. The loop, exercises and rubric frozen for the length of the sprint.
                3. Weekly calibration across all interviewers held through the sprint.
                4. A written review at the end comparing pass rates and scores across the sprint's weeks.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All planned seats are filled or deliberately left open by the sprint end, with no change to pass thresholds and a written review completed."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree the number of seats and the target start dates"
                - "Calculate the interviewer hours needed each week of the sprint"
                - "Freeze the loop and rubric for the length of the sprint"
                - "Compare pass rates week by week in an end-of-sprint review"
            - name: Founder hiring the first salesperson
              description: |-
                ## Purpose
                Founders who have sold the product themselves often hire a first seller who is charming in interview but needs a playbook, marketing leads and a brand that do not exist yet. Assessing for comfort with ambiguity, self-sourced pipeline and willingness to write the process down, and testing with your own real objections, makes the first hire far less of a gamble.

                ## Milestones
                1. A decision on whether the first hire is a builder who can create process or a closer who needs it.
                2. A role play built from the objections you hear most in your own deals.
                3. Questions on how each candidate built pipeline without inbound leads or a known brand.
                4. At least one reference from a manager at an early-stage company.

                ## Notes
                If you have no sales background, ask an experienced seller or adviser to sit in on the role play and score it with you.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A first salesperson is chosen after a role play built on the founder's real objections and a reference from an early-stage manager."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Decide whether you need a builder or a closer and write down why"
                - "List the five objections you hear most in your own deals"
                - "Build a role play where you play the buyer using those objections"
                - "Ask an experienced seller or adviser to co-score the role play"
            - name: Founder assessing a first head of sales
              description: |-
                ## Purpose
                Hiring a first sales leader is one of the most expensive mistakes a founder can make, and leaders from large companies often struggle without the team and systems they are used to. Testing whether candidates will sell personally for the first months, how they hire and how they plan, using your actual numbers, matters more than their logo history.

                ## Milestones
                1. A written view of whether you need a player-coach or a leader of an existing team.
                2. A case using your real pipeline and targets, asking for a first-quarter plan.
                3. Questions on the last three sellers each candidate hired and how each turned out.
                4. References from both a former manager and a former direct report.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A head of sales is chosen after a case on the company's real pipeline and references from both a former manager and a former direct report."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Decide whether you need a player-coach or a team leader"
                - "Prepare an anonymised pack of your pipeline, targets and win rates"
                - "Ask each finalist to present a first-quarter plan from that pack"
                - "Ask about the last three sellers they hired and how each turned out"
                - "Book references with a former manager and a former direct report"
            - name: Assessing a front-line sales manager candidate
              description: |-
                ## Purpose
                The best seller on the team often makes a poor manager, because the job changes from closing to coaching and inspecting. Assessing manager candidates with a recorded call to coach, a pipeline to inspect and a performance conversation to hold shows how they will spend their week, not how they used to sell.

                ## Milestones
                1. A recorded call, used with consent, that the candidate reviews before coaching a seller on it.
                2. A short sample pipeline the candidate inspects, naming the deals they would challenge and why.
                3. A role play of a conversation with a seller who has missed target twice.
                4. Scores weighted towards coaching and inspection rather than personal sales record.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A manager assessment with a coaching exercise, a pipeline inspection and a performance conversation role play has been used with at least two candidates."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose a recorded call, with consent, for the coaching exercise"
                - "Build a ten-deal sample pipeline with three hidden problems"
                - "Write a role play brief for a seller who has missed target twice"
                - "Weight the rubric towards coaching and inspection scores"
            - name: Consistent assessment across regions in a large sales organisation
              description: |-
                ## Purpose
                In an enterprise with sales teams in several countries, each region tends to invent its own loop, so a 3 in one office is a 4 in another and internal transfers become awkward. A shared core of scorecard, exercises and rubric, with agreed local variations for language and market, makes hires comparable and lets talent teams see quality across the business.

                ## Milestones
                1. Current loops in each region collected and compared.
                2. A shared core of competencies, exercises and rubric agreed with regional leaders.
                3. Permitted local variations listed, such as language, scenarios and legal checks.
                4. A cross-region calibration session held each quarter using recorded exercises.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared core assessment is used in every region, with local variations listed and a quarterly cross-region calibration recorded."
                cadence: rolling
              tasks:
                - "Collect the current interview loop from each regional sales leader"
                - "Agree a shared core of competencies, exercises and rubric"
                - "List the local variations each region may make"
                - "Run a cross-region calibration call with recorded exercises @recurring(quarterly)"
            - name: Assessing career changers and internal applicants into sales
              description: |-
                ## Purpose
                Teachers, hospitality staff, customer success managers and support agents can make excellent sellers, but a loop built around quota history screens them out at the first question. Replacing track record questions with evidence of persuasion, resilience and learning speed from their own work, and leaning on the role plays, gives them a fair test against the same bar.

                ## Milestones
                1. Alternative screening questions written for candidates without a sales history.
                2. The role plays kept identical so the bar does not move.
                3. A short preparation pack offered to every candidate so newcomers are not caught out by jargon.
                4. For internal applicants, any conversation with their current manager agreed with the applicant first.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Alternative screen questions and a preparation pack exist, and career changers have been assessed on the same role plays and rubric as experienced sellers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write three screen questions that replace quota history for newcomers"
                - "Write a one-page pack explaining the sales terms used in the role plays"
                - "Agree with each internal applicant before speaking to their manager"
                - "Check that newcomers' role play scores use the same rubric as everyone else"
            - name: Fully remote assessment for distributed sales hires
              description: |-
                ## Purpose
                Remote sellers spend their days on video and phone, so a remote loop can be a better test than an office visit, but only if it runs well. Planning the video tool, time zones, recording consent and a backup for dropped connections keeps the experience fair for candidates wherever they live.

                ## Milestones
                1. A video and phone setup tested for every exercise, with a backup dial-in.
                2. Time zone rules so no candidate is interviewed outside reasonable local hours.
                3. Consent recorded for any recording, with a rule for how recordings are stored and deleted.
                4. A short technical check offered to each candidate before the first exercise.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every remote assessment stage has a tested setup, a backup, a recording consent process and time zone rules written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Test each exercise on the video tool with a colleague in another location"
                - "Set a backup dial-in for every remote stage"
                - "Write the recording consent wording and storage rule with HR"
                - "Offer each candidate a five-minute technical check before their first exercise"
            - name: Two-year validity study of assessment scores
              description: |-
                ## Purpose
                Quarterly reviews show warning signs, but with fifteen or more hires over two years you can test properly whether each exercise predicts ramp time, attainment and retention. Working with HR analytics or a finance partner to compare scores with outcomes gives evidence for dropping weak exercises and defending strong ones to leadership.

                ## Milestones
                1. At least fifteen hires with full interview scores and twelve-month outcomes gathered.
                2. Each exercise and competency compared with ramp time, attainment and retention.
                3. Exercises with no link to outcomes flagged for redesign or removal.
                4. A short written summary shared with the sales leadership team.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written study comparing assessment scores with twelve-month outcomes for at least fifteen hires has been shared with sales leadership."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Check you have full scores and outcomes for at least fifteen hires"
                - "Ask HR analytics or finance to help compare scores with outcomes"
                - "Flag exercises whose scores show no link to later results"
                - "Ask the agent to draft a one-page summary of the findings for leadership"
                - "Add the latest year's hires and outcomes to the study @recurring(yearly)"
            - name: Pipeline case for assessing forecasting judgement
              description: |-
                ## Purpose
                Senior sellers and sales leaders are paid for judgement as much as activity: knowing which deals are real and saying so out loud. A case with twenty anonymised deals, each with stage, last activity and buyer notes, where the candidate builds a forecast and explains the calls, reveals optimism, rigour and honesty in about an hour.

                ## Milestones
                1. Twenty anonymised deals from a past quarter assembled, with the real outcomes known.
                2. A candidate brief asking for a commit figure, a best case and a list of deals to challenge.
                3. Scoring notes comparing the candidate's calls with what actually happened.
                4. The case trialled with one current sales leader before use.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twenty-deal forecasting case with known outcomes and scoring notes has been trialled and used with at least one senior candidate."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick twenty deals from a past quarter whose outcomes are known"
                - "Anonymise customer names and remove any confidential pricing"
                - "Write a brief asking for commit, best case and deals to challenge"
                - "Trial the case with one current sales leader"
            - name: Sales hiring assessment playbook for other managers
              description: |-
                ## Purpose
                Once the loop works for one team, other managers will either copy it badly or keep their own. A short playbook with the scorecard method, exercises, rubrics, debrief rules and examples of strong and weak answers lets any hiring manager run the same assessment and gets new interviewers ready faster.

                ## Milestones
                1. Every working part of the loop gathered in one document with short instructions.
                2. Two or three anonymised examples of strong and weak answers for each exercise.
                3. The playbook tested by a manager who has not used the loop before.
                4. An owner and a yearly review date set.

                ## Notes
                Keep candidate examples anonymised and remove anything that could identify a real person.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A tested assessment playbook with anonymised examples is used by at least one other hiring manager and has a named owner."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Gather the scorecard, exercises, rubrics and debrief rules into one document"
                - "Add anonymised strong and weak answers for each exercise"
                - "Ask a manager new to the loop to run one round from the playbook"
                - "Review and update the playbook with its owner @recurring(yearly)"
---

# Sales Candidate Assessment

This area is for anyone who hires sellers: a founder making the first sales hire, a front-line manager filling a seat, or an enterprise sales leader keeping standards steady across regions. It starts with the foundations (lessons from past hires, a success profile, the role scorecard, the interview loop and an anchored rubric), moves to the weekly machinery of pipeline reviews, written scorecards, debriefs and calibration, then the interviewing skills, the role plays and case exercises themselves, the dated rounds and checks, situations for founders, managers and large organisations, and finally validity studies and a playbook other managers can run.

What repeats is a Monday hiring pipeline review, a Wednesday check on candidate response times and a Friday chase for missing scorecards, with monthly calibration, funnel and interviewer bench checks, quarterly quality-of-hire reviews and scenario rotation, and a yearly refresh of the success profile, question bank and bias review. The Skills matrix, Person, Meeting notes, Metrics log, Purchase decision and Vendor templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
