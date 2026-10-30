---
id: tech-certifications.cisa-it-audit-certification
name: CISA IT Audit Certification
description: "A route to ISACA's CISA: the experience route, a dated study plan across all five domains, weekly practice and mocks, booking and exam day, then the certification application, CPE and putting audit skill to work."
category: personal
version: 1.0.0
tags: [tech-certifications, cisa-it-audit-certification, knowledge-worker, isaca, it-audit, assurance, exam-prep]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - course
    - metrics-log
    - reading-queue
    - development-plan
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: CISA IT Audit Certification
          description: "Studying for ISACA's CISA: the audit process, IT governance, systems acquisition and operations, protecting information assets, and the work experience needed to certify."
          projects:
            - name: CISA eligibility and experience route check
              description: |-
                ## Purpose
                ISACA lets you sit the CISA exam before you have the work experience, but you only become certified once enough years of information systems audit, control, assurance or security work are verified, with limited substitutions for degrees and related roles. Checking your own history against the current rules now tells you whether you will certify straight after passing or need to plan a gap, and whether the exam is the right first step at all.

                ## Milestones
                1. The current CISA experience requirement and allowed substitutions read on ISACA's site and dated.
                2. Your roles since leaving education listed with dates and a line on audit, control or security content in each.
                3. A rough count of qualifying years, with any substitution you would claim noted beside it.
                4. A decision recorded: certify straight after passing, or pass now and certify on a named later date.

                ## Notes
                Experience is counted within a window before applying and passing is valid for a limited period, so a candidate far from the requirement should check both limits before booking.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note states your qualifying years, any substitution claimed and the date you expect to be able to certify."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open the CISA certification requirements page and save a dated copy"
                - "List every role since education with start and end months"
                - "Mark which roles involved audit, control, assurance or security work"
                - "Write down the date you expect to meet the experience requirement"
            - name: CISA exam outline and candidate guide folder
              description: |-
                ## Purpose
                Everything ISACA publishes about the exam lives in a few documents: the job practice domains and task statements, the candidate guide with identification and rescheduling rules, and the score report explanation. One folder with dated copies means you study to the current outline rather than to a forum post, and you notice when ISACA revises it.

                ## Milestones
                1. The current CISA exam content outline saved, with its effective date.
                2. The candidate guide saved, with identification, rescheduling and retake rules highlighted.
                3. A one-page summary of the five domains and their task statements in your own words.
                4. A note of the current question format, duration and scoring checked on ISACA's site, not taken from memory.

                ## Notes
                Do not trust question counts, durations or fees quoted by course sellers. Read them on ISACA's own pages and write the date you checked.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder holds the dated exam outline, the candidate guide and a one-page domain summary you wrote yourself."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the current CISA exam content outline from ISACA"
                - "Save the candidate guide and highlight the identification rules"
                - "Write a one-page summary of the five domains in your own words"
                - "Check ISACA for any change to the CISA outline @recurring(quarterly)"
            - name: ISACA membership and exam fee decision
              description: |-
                ## Purpose
                Membership lowers the exam registration fee and includes resources such as journals and some free CPE, but it is an annual cost, and many employers will pay one or both. Working out the real total for your situation before registering avoids paying the higher rate by accident or joining a local chapter you will never use.

                ## Milestones
                1. Member and non-member exam fees compared from ISACA's current price list.
                2. The annual membership cost, including any local chapter fee, written down.
                3. Your employer asked whether it pays membership, the exam or both.
                4. A decision recorded on joining, with the total you will pay out of pocket.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison shows the out-of-pocket total with and without membership and the option you chose."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note the member and non-member CISA exam fees from ISACA's site"
                - "Find the membership fee for your nearest local chapter"
                - "Ask your manager or HR what the employer reimburses"
                - "Record the total cost of the option you chose"
            - name: Diagnostic question set and domain baseline
              description: |-
                ## Purpose
                Most candidates assume their weak domain is the one furthest from their job and are often wrong, because CISA questions test an auditor's judgement rather than technical recall. A timed diagnostic of mixed questions before studying gives a score per domain, so the study plan spends hours where the marks are lost.

                ## Milestones
                1. A mixed diagnostic of questions covering all five domains answered under time pressure.
                2. A score per domain written down, with the date.
                3. The two weakest domains named and the reason for most wrong answers noted.
                4. The baseline copied into your domain score tracker.

                ## Notes
                Take it cold. A baseline after a week of reading tells you less.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline score for each of the five domains is recorded, with the two weakest named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set aside a quiet hour for a timed mixed question set"
                - "Answer the diagnostic without notes and record the time taken"
                - "Work out a score per domain from the results"
                - "Write the reason behind each wrong answer in one line"
            - name: CISA study calendar to a target exam window
              description: |-
                ## Purpose
                Candidates who work full time often take three to six months, and a plan without a target date drifts. Counting back from a chosen exam window, with domains weighted by your baseline and the outline, turns the syllabus into weeks you can see and protect.

                ## Milestones
                1. A target exam month chosen and written at the top of the plan.
                2. Each domain given a block of weeks sized by its share of the outline and your baseline.
                3. Two buffer weeks and a final revision fortnight kept free.
                4. Monthly mock exam dates marked on your calendar.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated calendar runs from today to the target exam month with domain blocks, mock dates and two buffer weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a target exam month and write it down"
                - "Count the study weeks between now and that month"
                - "Assign each domain its block of weeks using your baseline"
                - "Put the monthly mock exam dates in your calendar"
            - name: Core CISA study materials
              description: |-
                ## Purpose
                Most candidates pair ISACA's review manual for the content and its questions, answers and explanations database for practice, with third-party books, videos and question banks of mixed quality around them. Choosing deliberately, and checking that each item matches the current outline, keeps the budget down and stops you studying from three conflicting sources.

                ## Milestones
                1. Three or four candidate resources listed with price, edition and the outline version they cover.
                2. Each scored on match to the current outline, quality of explanations and price.
                3. A primary text and one question source chosen.
                4. Out-of-date editions and duplicate resources ruled out in writing.

                ## Notes
                Start from the **Purchase decision** template. A question bank written for an older outline can teach you answers that are no longer the best ones.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One primary text and one question source are bought or borrowed, each confirmed to match the current exam outline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the review manual, question database and two other options"
                - "Check which outline version each resource says it covers"
                - "Score each option on outline match, explanations and price"
                - "Buy or borrow the primary text and question source you chose"
            - name: Work experience inventory mapped to the five domains
              description: |-
                ## Purpose
                Later, the certification application asks for experience by domain, signed off by people who supervised you, and memory fades fast. Writing an inventory now, engagement by engagement, also shows which domains you already know from work and which only exist for you in the review manual.

                ## Milestones
                1. Each audit, control, assurance or security assignment listed with dates and your role.
                2. Every assignment tagged to one or more of the five CISA domains.
                3. A likely verifier named for each period, with current contact details.
                4. Domains with no work experience flagged for extra study.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A table lists your qualifying assignments with dates, domain tags and a named verifier for each period."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Start a table with assignment, dates, role and domain columns"
                - "Fill in the last three years of assignments from timesheets or reports"
                - "Tag each assignment to the CISA domains it touched"
                - "Name a verifier for each period and check they can still be reached"
            - name: Employer sponsorship and study leave request
              description: |-
                ## Purpose
                Audit firms, banks and public bodies often fund CISA because it supports their IT audit work and regulatory expectations, but they rarely offer it unprompted. A short written case, with costs and what the team gains, makes a yes more likely and settles study leave before busy season eats it.

                ## Milestones
                1. The training or certification policy at your organisation found and read.
                2. A one-page case written covering cost, timing and benefit to the team.
                3. The request discussed with your manager and the outcome recorded.
                4. Any repayment clause or minimum service period read and accepted or declined.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written answer from your manager on funding and study leave is filed, including any repayment terms."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your organisation's training and certification policy"
                - "Ask the agent to draft a one-page sponsorship case from your cost notes"
                - "Book fifteen minutes with your manager to discuss it"
                - "File the decision and any repayment clause with your study plan"
            - name: Four study sessions a week routine
              description: |-
                ## Purpose
                Steady sessions beat weekend cramming for an exam that rewards judgement built up over time. Fixing two weekday evenings and two longer weekend blocks, and treating them like meetings, keeps the calendar moving even in a heavy audit month.

                ## Milestones
                1. Four recurring sessions in your calendar with start and end times.
                2. A set place to study with materials left ready.
                3. A missed-session rule agreed with yourself, such as moving it within 48 hours.
                4. Four straight weeks with at least three sessions completed.

                ## Notes
                Start from the **Course** template if you want each session's chapter and questions logged in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your log shows at least three completed study sessions in each of four consecutive weeks."
                cadence: rolling
              tasks:
                - "Block two weekday evening sessions in your calendar"
                - "Study the current chapter for ninety minutes @recurring(weekly:tue,thu)"
                - "Hold a longer weekend block for questions and review @recurring(weekly:sat)"
                - "Write a missed-session rule at the top of your plan"
            - name: Wrong-answer log with a weekly pattern review
              description: |-
                ## Purpose
                Every wrong practice answer has a reason: you did not know the content, misread the question, or picked a technically correct option that was not what an auditor would do first. Logging the reason and reviewing the week's errors shows which of these is costing you marks, and the fix for each is different.

                ## Milestones
                1. A log with columns for domain, topic, your answer, the best answer and the reason.
                2. Every wrong answer from practice entered within a day.
                3. A weekly count of errors by reason and by domain.
                4. One change to your study made each week from what the log shows.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log has entries for every practice session for six weeks, with a weekly tally and one action per week."
                cadence: rolling
              tasks:
                - "Set up the log with domain, topic, answer and reason columns"
                - "Enter each wrong answer with the explanation in your own words"
                - "Review the week's wrong answers and tally them by reason @recurring(weekly:sun)"
                - "Write one study change for next week from the tally"
            - name: Daily twenty-question practice set
              description: |-
                ## Purpose
                Short daily sets build the pattern recognition the exam rewards: spotting what the question really asks, which answer is the auditor's first step, and which is merely true. Twenty questions on the commute or at lunch adds up to thousands by exam day without needing a free evening.

                ## Milestones
                1. A question source set up on your phone or laptop.
                2. A daily slot chosen that survives a busy workday.
                3. Twenty mixed or domain-focused questions answered most days for a month.
                4. Daily scores feeding the domain tracker.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 22 daily question sets are recorded in each of two consecutive months."
                cadence: rolling
              tasks:
                - "Install or bookmark your question database on your phone"
                - "Choose a daily slot such as lunch or the commute"
                - "Answer twenty practice questions and note the score @recurring(daily)"
                - "Switch the set to your weakest domain once a week"
            - name: Monthly full-length timed mock exam
              description: |-
                ## Purpose
                Pacing and stamina are separate skills from knowing the content, and the only way to build them is a full-length sitting under exam conditions. One mock a month shows whether scores are rising across domains and whether you run short of time in the final hour.

                ## Milestones
                1. A full-length mock taken under timed, closed-book conditions.
                2. The score per domain and time per question recorded.
                3. Wrong answers moved into the wrong-answer log.
                4. Three monthly mocks completed, with the trend visible.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three full-length timed mocks are recorded a month apart, each with a score per domain and timing notes."
                cadence: rolling
              tasks:
                - "Book the first mock as a blocked half day in your calendar"
                - "Sit a full-length timed mock exam without notes @recurring(monthly:12)"
                - "Record the score per domain and where you lost time"
                - "Move every wrong answer into the wrong-answer log"
            - name: Domain score tracker
              description: |-
                ## Purpose
                Scores from daily sets and mocks are noisy one at a time and meaningful as a trend. A simple tracker of scores per domain by week shows when a domain has moved from weak to safe and when a strong one is slipping because you stopped practising it.

                ## Milestones
                1. A tracker with one column per domain and one row per week.
                2. The diagnostic baseline entered as the first row.
                3. Weekly averages from daily sets and mocks added.
                4. A target score per domain written beside each column.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker holds weekly scores for all five domains for at least eight weeks, with a target beside each."
                cadence: rolling
              tasks:
                - "Create the tracker with five domain columns"
                - "Enter your diagnostic scores as the first row"
                - "Add the month's domain averages and mark the trend @recurring(monthly:13)"
                - "Write a target score beside each domain"
            - name: Audit terms and controls flashcard deck
              description: |-
                ## Purpose
                CISA questions turn on precise words: compensating versus detective controls, inherent versus residual risk, recovery point versus recovery time objective. A spaced-repetition deck of terms, control types and frameworks, built from your own wrong answers, keeps the vocabulary sharp without rereading chapters.

                ## Milestones
                1. A flashcard app or paper box set up with a deck per domain.
                2. At least 150 cards written in your own words from the manual and wrong answers.
                3. Daily reviews kept for a month.
                4. Cards you always get right retired and new ones added weekly.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A deck of at least 150 cards across five domains shows daily reviews for 30 days."
                cadence: rolling
              tasks:
                - "Set up a spaced-repetition app with one deck per domain"
                - "Write twenty cards from your first chapter and wrong answers"
                - "Review the day's due flashcards @recurring(daily)"
                - "Retire cards you have answered right five times running"
            - name: Weekly study partner check-in
              description: |-
                ## Purpose
                A colleague or someone from a local ISACA chapter group who is sitting the same exam keeps you honest on the weeks motivation drops. A short weekly call to compare scores and argue over one hard question teaches the auditor's reasoning faster than reading the explanation alone.

                ## Milestones
                1. A study partner or small group found through work, the chapter or an online community.
                2. A fixed weekly slot agreed.
                3. Each call covering progress against plan and one disputed question.
                4. Six weekly calls held.

                ## Notes
                Keep client names and findings out of the conversation. Talk about controls in general terms.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six weekly partner calls are logged, each with the question discussed and the agreed best answer."
                cadence: rolling
              tasks:
                - "Ask in your team or local chapter who else is sitting CISA"
                - "Agree a thirty-minute weekly slot with your partner"
                - "Bring one disputed question to the call and agree the answer @recurring(weekly:wed)"
                - "Record the agreed reasoning in your wrong-answer log"
            - name: Monthly study plan reset
              description: |-
                ## Purpose
                Plans written at the start rarely survive an audit fieldwork month or a year-end close. A short monthly reset against the calendar, the tracker and the target date keeps the plan honest and forces an early decision if the exam window needs to move.

                ## Milestones
                1. Hours studied and topics covered compared with the plan each month.
                2. Domain blocks for the next month adjusted to the tracker.
                3. The target exam window confirmed or moved, with the reason written down.
                4. The next month's sessions and mock date in the calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated reset note exists for each study month, recording progress, adjustments and the confirmed exam window."
                cadence: rolling
              tasks:
                - "Total last month's study hours from your log"
                - "Compare progress with the calendar and reset the next month @recurring(monthly:28)"
                - "Confirm or move the target exam window in writing"
                - "Put next month's sessions and mock in the calendar"
            - name: Weekly note on one real control at work
              description: |-
                ## Purpose
                Abstract content sticks when you can point to it at work: the change approval in your ticketing system, the quarterly access review, the backup restore test nobody has run. One short note a week linking a study topic to a control you have seen makes revision vivid and gives you interview material later.

                ## Milestones
                1. A notes page set up with columns for topic, control seen and what an auditor would test.
                2. One entry written each week of study.
                3. At least one entry per domain.
                4. Notes kept free of client names and confidential details.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least twelve weekly entries exist, covering all five domains, with no confidential client details."
                cadence: rolling
              tasks:
                - "Set up a page with topic, control and test columns"
                - "Write a note linking this week's topic to a control you have seen @recurring(weekly:fri)"
                - "Add what evidence an auditor would ask for to each note"
                - "Check entries for client names and remove any"
            - name: Thinking like an IS auditor in exam questions
              description: |-
                ## Purpose
                Many wrong answers come from choosing what an engineer or manager would do instead of what an auditor would do: fix the problem rather than report it, or test before understanding the risk. Studying how questions use words such as FIRST, BEST and MOST, and the auditor's place in the organisation, lifts scores across every domain at once.

                ## Milestones
                1. A list of the qualifier words used in questions and what each asks for.
                2. Twenty past wrong answers re-sorted by whether you acted as auditor or as manager.
                3. A short rule sheet written, such as understand risk before testing and report rather than fix.
                4. A fresh question set answered with the rule sheet beside you, and the score compared.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page rule sheet on auditor reasoning exists and a following question set scores higher than your last comparable set."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the qualifier words in your last fifty practice questions"
                - "Re-sort twenty wrong answers by auditor versus manager thinking"
                - "Write a one-page rule sheet of auditor reasoning"
                - "Answer a fresh set with the sheet and compare the score"
            - name: Audit standards, ITAF and the code of ethics
              description: |-
                ## Purpose
                The first domain rests on ISACA's IT Audit Framework, its standards and guidelines, and the Code of Professional Ethics every certified member agrees to. Reading the source documents once, not just the manual's summary, makes questions on independence, due care and audit charters much easier, and you sign the code when you apply.

                ## Milestones
                1. The current ITAF, audit standards and Code of Professional Ethics saved from ISACA.
                2. The standards on independence, planning, evidence and reporting summarised in a page.
                3. Three realistic independence conflicts written out with the right response.
                4. A reading list of further ISACA guidance kept for later.

                ## Notes
                Start from the **Reading queue** template for the guidance documents and ISACA Journal articles you want to get to.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of the audit standards and three worked independence scenarios are in your study folder."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Download the current ITAF and Code of Professional Ethics"
                - "Summarise the independence, evidence and reporting standards in a page"
                - "Write three independence conflicts and the response each needs"
                - "Read one ISACA Journal audit article and add a note @recurring(monthly:16)"
            - name: Domain 1, risk-based audit planning
              description: |-
                ## Purpose
                Planning is where the information system auditing process domain starts: the audit charter, risk assessment, control objectives and choosing what to audit with limited hours. Learning to build a risk-based plan, and to tell inherent, control and detection risk apart, is the foundation every other domain's questions assume.

                ## Milestones
                1. The planning chapter studied with notes on charters, risk assessment and audit scope.
                2. A sample risk-based audit plan sketched for an imaginary organisation.
                3. Inherent, control, detection and residual risk explained in your own words.
                4. A planning-focused question set scored above your baseline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sample risk-based audit plan is written and a planning question set scores above your Domain 1 baseline."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the audit planning chapter and note each risk type"
                - "Sketch a one-page risk-based audit plan for an imaginary firm"
                - "Explain the four risk types aloud without notes"
                - "Answer a planning question set and log the score"
            - name: Domain 1, evidence, sampling and reporting
              description: |-
                ## Purpose
                Fieldwork questions ask which evidence is most reliable, when statistical sampling suits a test, how computer-assisted audit techniques and data analytics help, and how findings are reported and followed up. These are judgement calls with one best answer, and they appear wherever an audit is described.

                ## Milestones
                1. Evidence types ranked by reliability with a reason for each.
                2. Attribute, variable and judgemental sampling compared in a short table.
                3. Uses of data analytics and continuous auditing noted with one example each.
                4. A model finding written with condition, criteria, cause, effect and recommendation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sampling comparison table and one model audit finding are written, and a fieldwork question set beats your baseline."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Rank six evidence types by reliability and write why"
                - "Build a table comparing the main sampling methods"
                - "Write one model finding with all five elements"
                - "Answer a fieldwork and reporting question set and log the score"
            - name: Domain 2, IT governance and frameworks
              description: |-
                ## Purpose
                Governance questions test whether IT strategy follows business strategy, who owns which decision, and how frameworks such as COBIT, ISO 27001 and ITIL fit together. Candidates from technical roles often find this the least familiar domain, so it deserves its own block rather than a skim.

                ## Milestones
                1. The governance chapter studied with notes on board, steering committee and management roles.
                2. A one-page map of the main frameworks and what each is for.
                3. Policies, standards, procedures and guidelines distinguished with an example of each.
                4. A governance question set scored above your baseline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A framework map and a policy hierarchy example are written and a governance question set beats your Domain 2 baseline."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the governance chapter and list who decides what"
                - "Draw a one-page map of COBIT, ISO 27001 and ITIL"
                - "Write one example each of a policy, standard, procedure and guideline"
                - "Answer a governance question set and log the score"
            - name: Domain 2, IT risk, vendors and performance
              description: |-
                ## Purpose
                Domain 2's management half covers enterprise risk, IT resource and vendor management, outsourcing and cloud contracts, quality and performance measurement. These questions often hide in long scenarios about a third party, so practising them as scenarios rather than definitions pays off.

                ## Milestones
                1. Risk appetite, tolerance and treatment options explained in your own words.
                2. A checklist of what an auditor reviews in an outsourcing or cloud contract.
                3. Service level agreements, right-to-audit clauses and assurance reports such as SOC reports noted.
                4. A scenario question set on vendors and risk scored above baseline.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An outsourcing contract review checklist is written and a vendor and risk scenario set beats your baseline."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the four risk treatment options with an example each"
                - "Draft a checklist for auditing a cloud or outsourcing contract"
                - "Note what an assurance report covers and what it leaves out"
                - "Answer a vendor and risk scenario set and log the score"
            - name: Domain 3, acquisition and project controls
              description: |-
                ## Purpose
                Systems acquisition questions ask when the auditor should be involved in a project, what a business case and feasibility study must show, and which controls belong in each phase of the development life cycle. Knowing the phases and the auditor's role in each turns long project scenarios into quick decisions.

                ## Milestones
                1. The phases of the system development life cycle listed with the key control in each.
                2. Business case, feasibility study and requirements sign-off explained.
                3. Agile and traditional development compared from an audit point of view.
                4. An acquisition question set scored above your baseline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A life cycle control table is written and an acquisition question set beats your Domain 3 baseline."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the development life cycle phases with one control each"
                - "Write what an auditor checks in a business case"
                - "Compare agile and waterfall audit concerns in a short table"
                - "Answer an acquisition question set and log the score"
            - name: Domain 3, testing, go-live and post-implementation review
              description: |-
                ## Purpose
                Implementation, the second half of Domain 3, covers testing types, data conversion, cutover approaches and the post-implementation review. Questions often turn on the order of steps or on who should sign off, and a timeline you can draw from memory makes them much easier.

                ## Milestones
                1. Unit, integration, system, user acceptance and regression testing distinguished.
                2. Parallel, phased and direct cutover compared with the risk of each.
                3. Data conversion controls and reconciliation steps listed.
                4. The purpose and timing of a post-implementation review written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A go-live timeline from testing to post-implementation review is drawn from memory and checked against the manual."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a line on each testing type and who signs it off"
                - "Compare the three cutover approaches and their risks"
                - "List the controls that check a data conversion is complete"
                - "Draw the go-live timeline from memory and correct it"
            - name: Domain 4, IT operations and change management
              description: |-
                ## Purpose
                Operations questions cover job scheduling, change, configuration, release, problem and incident management, and the controls that stop an emergency fix bypassing approval. Anyone who has worked near a service desk will recognise the practices, but the exam asks about them through the auditor's eyes.

                ## Milestones
                1. Change, problem and incident management distinguished with the control each needs.
                2. The emergency change path and its after-the-fact review explained.
                3. Logging, monitoring and capacity management noted with what an auditor tests.
                4. An operations question set scored above your baseline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of operations processes with the auditor's test for each is written and an operations set beats your Domain 4 baseline."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the difference between incident, problem and change in three lines"
                - "Describe how an emergency change should be reviewed afterwards"
                - "List what an auditor tests in logging and monitoring"
                - "Answer an operations question set and log the score"
            - name: Domain 4, business continuity and disaster recovery
              description: |-
                ## Purpose
                Resilience questions are among the most predictable once the vocabulary is solid: business impact analysis comes before strategy, recovery time and recovery point objectives drive site and backup choices, and plans must be tested. Getting the order of these steps right is worth many marks.

                ## Milestones
                1. The business continuity steps written in order from business impact analysis to testing.
                2. Recovery time and recovery point objectives explained with an example.
                3. Hot, warm, cold and cloud recovery options compared by cost and speed.
                4. Test types from checklist review to full interruption listed by disruption.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page continuity sequence and recovery site comparison are written and a resilience question set beats your baseline."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the continuity planning steps in order on one page"
                - "Explain RTO and RPO with an example from a real service"
                - "Compare recovery site options by cost and speed"
                - "Answer a continuity question set and log the score"
            - name: Domain 5, identity and logical access controls
              description: |-
                ## Purpose
                Protecting information assets is the domain candidates from security roles expect to find easy and then lose marks on, because questions ask about the auditor's view of access: provisioning, segregation of duties, privileged accounts and periodic reviews. Studying it as a set of controls to test, not as technology, closes that gap.

                ## Milestones
                1. The access life cycle from request to removal written with the control at each step.
                2. Segregation of duties conflicts listed for a typical finance system.
                3. Authentication factors and privileged access controls summarised.
                4. An access control question set scored above your baseline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An access life cycle with controls and a segregation of duties list are written and an access set beats your Domain 5 baseline."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the access life cycle from request to removal"
                - "List five segregation of duties conflicts in a finance system"
                - "Summarise how privileged accounts should be controlled and reviewed"
                - "Answer an access control question set and log the score"
            - name: Domain 5, network, encryption, physical and privacy controls
              description: |-
                ## Purpose
                Beyond access, Domain 5 spans firewalls and network segmentation, encryption and key management, physical and environmental controls, data classification and privacy. Breadth is the challenge, so a one-page summary per topic with the auditor's main question for each works better than rereading long chapters.

                ## Milestones
                1. One-page summaries for network security, encryption, physical controls and privacy.
                2. Symmetric and asymmetric encryption and digital signatures explained simply.
                3. Data classification and retention linked to the privacy controls they support.
                4. A mixed Domain 5 question set scored above your baseline.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four one-page topic summaries exist and a mixed Domain 5 question set beats your baseline."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-page summary of network security controls"
                - "Explain symmetric, asymmetric encryption and signatures on one page"
                - "Link data classification to privacy and retention controls"
                - "Answer a mixed Domain 5 question set and log the score"
            - name: Instructor-led review course or self-study decision
              description: |-
                ## Purpose
                A review course from a chapter or training firm adds structure, a cohort and a tutor, at a price that can exceed the exam fee, while self-study suits people who already work in audit and study well alone. Deciding on evidence, your baseline, your calendar and your budget, avoids paying for a course you then skip.

                ## Milestones
                1. Two or three course options listed with format, dates, price and outline version.
                2. Your baseline and available hours compared with what the course assumes.
                3. Past attendees asked about the tutor and the materials.
                4. A course booked or a self-study choice recorded with the reason.

                ## Notes
                Start from the **Course** template if you enrol, so sessions and homework sit with your plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the course booked or confirms self-study, with cost and reason."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your local ISACA chapter for its next review course dates"
                - "List two other course options with price and format"
                - "Ask one past attendee what the course was really like"
                - "Record the decision and its cost in your plan"
            - name: Closing the weakest domain after the first mock
              description: |-
                ## Purpose
                After the first full mock one domain is usually clearly behind, and spreading time evenly leaves it there. A focused three-week block on that domain, with its own question sets and a retest, often moves the overall score more than another lap of everything.

                ## Milestones
                1. The weakest domain named from the first mock and the tracker.
                2. The topics behind most errors in that domain listed.
                3. A three-week block of reading and domain-only questions completed.
                4. A retest showing the domain score at or above your target.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A domain-only retest after three focused weeks shows the weakest domain at or above its target score."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Name your weakest domain from the mock and the tracker"
                - "List the topics behind most of that domain's errors"
                - "Swap three weeks of mixed sets for domain-only sets"
                - "Retest the weakest domain with a fifty-question set @recurring(monthly:22)"
            - name: Remote proctored or test centre decision
              description: |-
                ## Purpose
                ISACA offers the exam at test centres and, in many countries, by remote proctoring at home, each with its own rules. Remote sittings demand a clear room, a reliable connection and a compatible computer, and some candidates on island or rural connections find a centre far less risky.

                ## Milestones
                1. The current delivery options and rules for your country checked on ISACA's site.
                2. Nearest test centre locations and available dates noted.
                3. Your computer, webcam and connection run through the provider's system check.
                4. A delivery mode chosen with the reason recorded.

                ## Notes
                Run the system check on the exact computer and network you would use on the day, not a different one.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A delivery mode is chosen and, for remote sitting, the system check has passed on the computer you will use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check ISACA's current delivery options for your country"
                - "Find the nearest test centre and its available dates"
                - "Run the remote proctoring system check on your own computer"
                - "Record the delivery mode you chose and why"
            - name: Exam readiness go or postpone decision
              description: |-
                ## Purpose
                Booking too early wastes a fee and a summer; postponing forever means never sitting. Setting a readiness rule in advance, such as two mocks at or above your target with no domain far behind, makes the decision about evidence rather than nerves.

                ## Milestones
                1. A readiness rule written before the second mock.
                2. The last two mocks and the tracker compared with the rule.
                3. A go or postpone decision recorded with the date.
                4. If postponing, a new target window and the domains to fix written down.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated go or postpone decision is recorded against a readiness rule written before the second mock."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your readiness rule in one sentence"
                - "Compare your last two mock scores with the rule"
                - "Record a go or postpone decision with today's date"
                - "Set a new window and fix list if you postpone"
            - name: Experience substitution and waiver evidence pack
              description: |-
                ## Purpose
                Candidates relying on a degree, another credential or related work to cover part of the experience requirement need evidence that ISACA will accept, and transcripts or letters from past employers can take weeks. Gathering it before you pass means the certification application is not held up afterwards.

                ## Milestones
                1. The substitutions you plan to claim checked against ISACA's current rules.
                2. Certified transcripts or credential certificates requested.
                3. Letters or contact details for verifiers at past employers confirmed.
                4. All evidence saved in one folder, named by what it proves.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder holds the evidence for every substitution you will claim, each file named by the requirement it supports."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check which substitutions apply to your degree or credentials"
                - "Request a certified transcript from your university"
                - "Contact past managers who could verify earlier experience"
                - "Save every document in one folder named by what it proves"
            - name: Testing one IT general control at work
              description: |-
                ## Purpose
                Studying a walkthrough is not the same as doing one. With your manager's agreement, testing a single IT general control, such as quarterly user access reviews or change approval, from understanding the process to concluding on evidence, makes the audit process domain real and adds a verifiable item to your experience record.

                ## Milestones
                1. One IT general control chosen with your manager and the control owner.
                2. A walkthrough documented with the process, the control and the evidence it leaves.
                3. A small sample tested and exceptions noted.
                4. A short conclusion written and reviewed by a more senior auditor.

                ## Notes
                Do this only inside an authorised engagement or with your manager's approval, and keep the working papers in the organisation's systems, not your study notes.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A walkthrough, sample test and reviewed conclusion for one IT general control are filed in the organisation's audit system."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree one IT general control to test with your manager"
                - "Document a walkthrough with the control owner"
                - "Test a small sample and record any exceptions"
                - "Ask a senior auditor to review your conclusion"
            - name: Booking the CISA exam appointment
              description: |-
                ## Purpose
                Registering with ISACA and then scheduling with the testing provider are separate steps, and the window to schedule after registering is limited. Booking once you are on track, for a slot that fits your energy and avoids busy season, turns the plan into a fixed date.

                ## Milestones
                1. Registration completed on ISACA's site with the fee paid or sponsored.
                2. The scheduling window after registration written in your calendar.
                3. An exam date and time booked with the testing provider.
                4. The confirmation, rescheduling deadline and identification rules saved.

                ## Notes
                Check that the name on your ISACA profile matches your identification exactly. A mismatch can stop you sitting.
              priority: high
              deadlineOffsetDays: 110
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A confirmed exam appointment is booked and the rescheduling deadline is in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check your ISACA profile name matches your passport or ID"
                - "Register for the exam on ISACA's site"
                - "Book a date and time with the testing provider"
                - "Save the confirmation and the rescheduling deadline"
            - name: Final fourteen days before the CISA exam
              description: |-
                ## Purpose
                The last two weeks are for consolidating, not new material: one final mock, the wrong-answer log, the rule sheet and the flashcards, with sleep protected. A written plan for these days stops last-minute panic reading of the whole manual.

                ## Milestones
                1. A day-by-day plan for the final fourteen days written.
                2. One final full mock taken no later than a week before the exam.
                3. The wrong-answer log and auditor rule sheet reviewed twice.
                4. The last two days kept light, with nothing new studied.
              priority: high
              deadlineOffsetDays: 125
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fourteen-day plan exists and the final mock is completed at least seven days before the exam date."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write a day-by-day plan for the last fourteen days"
                - "Book the final mock no later than seven days before the exam"
                - "Review the wrong-answer log and rule sheet twice"
                - "Clear your work calendar for the day before the exam"
            - name: CISA exam day plan
              description: |-
                ## Purpose
                Small things go wrong on exam day: the wrong ID, a late arrival, a room that fails the remote check, a pacing plan forgotten under pressure. A one-page plan for the day, checked the evening before, leaves your attention for the questions.

                ## Milestones
                1. Identification, confirmation and travel route or room set-up checked the evening before.
                2. A pacing plan written with time checkpoints.
                3. A rule for flagging and returning to hard questions agreed with yourself.
                4. The exam sat and a short note made of how it felt.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exam is sat on the booked date with the day plan followed and a short debrief note written that evening."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a pacing plan with three time checkpoints"
                - "Lay out identification and confirmation the night before"
                - "Plan the route or clear and test the room for a remote sitting"
                - "Write a short debrief note the evening after the exam"
            - name: Results, score report and next step
              description: |-
                ## Purpose
                A pass is the start of the certification application, not the end, and a fail comes with a domain breakdown that is the best guide to a retake. Reading the score report carefully and deciding the next step within a week keeps momentum either way.

                ## Milestones
                1. The official result and score report saved.
                2. Domain performance compared with your mock scores.
                3. Next step chosen: start the certification application or plan a retake.
                4. Your sponsor or manager told the outcome.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The score report is saved and a next step, application or retake, is recorded within a week of the result."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Save the official score report in your study folder"
                - "Compare each domain result with your last mock"
                - "Choose the next step and write it in your plan"
                - "Tell your manager or sponsor the result"
            - name: Retake plan after a below-target result
              description: |-
                ## Purpose
                Many good auditors need a second attempt, often because of question technique rather than knowledge. A retake plan built from the score report, with the auditor rule sheet revisited and the weak domains rebuilt, has a far better chance than repeating the same study.

                ## Milestones
                1. The score report read and the two weakest areas named.
                2. Retake rules and waiting periods checked on ISACA's site.
                3. A six to ten week plan written around those areas and question technique.
                4. A new exam date booked.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated retake plan addresses the weakest areas from the score report and a new exam date is booked."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Name the two weakest areas from your score report"
                - "Check ISACA's current retake rules and waiting period"
                - "Write a six to ten week plan around those areas"
                - "Book the new exam date"
            - name: CISA certification application after passing
              description: |-
                ## Purpose
                Passing the exam does not make you a CISA. You apply with your verified work experience, agree to the code of ethics and continuing education policy, and pay a processing fee, within the time limit ISACA sets after passing. Preparing verifiers early means the application goes in weeks after the result, not months.

                ## Milestones
                1. The current application form and instructions downloaded.
                2. Experience entries completed from your inventory, by domain.
                3. Each verifier briefed and their signed verification returned.
                4. The application submitted and the approval confirmation saved.

                ## Notes
                Give verifiers a filled-in summary of the dates and work they are confirming. They are busy, and a blank form sits in an inbox.
              priority: high
              deadlineOffsetDays: 210
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete CISA application with signed experience verifications is submitted, and the approval is saved when it arrives."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Download the current CISA application and instructions"
                - "Copy your experience entries from the inventory by domain"
                - "Send each verifier a pre-filled summary to confirm and sign"
                - "Submit the application and save the confirmation"
            - name: CISA for an external auditor from a financial audit background
              description: |-
                ## Purpose
                Financial statement auditors moving into IT audit already understand evidence, sampling and reporting but often meet change management, network security and development life cycles for the first time. A plan that leans on audit strengths and spends extra time on Domains 3 and 4, scheduled around busy season, fits that profile.

                ## Milestones
                1. Busy season months blocked out of the study calendar.
                2. Extra weeks added for acquisition and operations domains.
                3. A shadowing session with the firm's IT audit team arranged.
                4. Two IT general controls engagements logged for your experience record.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A study calendar avoids busy season, gives extra weeks to Domains 3 and 4, and includes one IT audit shadowing session."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Mark busy season months as no-new-content weeks"
                - "Add two extra weeks each for Domains 3 and 4"
                - "Ask the IT audit team if you can shadow one walkthrough"
                - "Log any IT general controls work in your experience inventory"
            - name: CISA for an IT or security professional moving into audit
              description: |-
                ## Purpose
                Engineers, administrators and security analysts know the technology but tend to answer as the person who fixes things. The switch to an assurance mindset, independence, evidence and reporting rather than remediation, is the main study task, along with the governance domain they rarely see.

                ## Milestones
                1. Domain 1 and Domain 2 given the largest study blocks.
                2. The auditor rule sheet reviewed before every question set for a month.
                3. One conversation held with an IT auditor about what they test in your systems.
                4. Your experience inventory checked for roles that count as control or security work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Domain 1 and 2 scores in the tracker reach your target and the experience inventory marks which technical roles qualify."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Move the largest study blocks to Domains 1 and 2"
                - "Read your auditor rule sheet before each question set"
                - "Ask an IT auditor what they test in systems you run"
                - "Mark which of your technical roles count as qualifying experience"
            - name: CISA for an internal auditor adding IT depth
              description: |-
                ## Purpose
                Internal auditors often hold or study for a general audit credential and need CISA to lead technology engagements and talk credibly to IT. Tying study to the internal audit plan, such as a coming cloud or ERP review, gives each domain a live use and builds the case for an IT audit role.

                ## Milestones
                1. Upcoming technology engagements in the audit plan listed.
                2. Each engagement matched to the CISA domains it draws on.
                3. One engagement volunteered for with a specific IT scope.
                4. A short note to the chief audit executive on the IT skills you are building.

                ## Notes
                Start from the **Development plan** template to tie the credential to your audit career goals.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A development plan links three upcoming technology engagements to CISA domains and names one you have volunteered for."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List technology engagements in this year's audit plan"
                - "Match each engagement to the CISA domains it uses"
                - "Volunteer for one engagement with an IT scope"
                - "Send your head of audit a short note on the skills you are building"
            - name: Studying for CISA as a working parent
              description: |-
                ## Purpose
                With a job and children, evenings are unreliable and long weekend blocks are rare. A plan built on early mornings, the daily question set, a longer exam window and an agreement at home about protected hours is more realistic than copying a single person's schedule.

                ## Milestones
                1. Realistic weekly study hours agreed with your partner or support network.
                2. Study slots placed where they survive school runs and bedtimes.
                3. The target exam window lengthened to match the real hours.
                4. Childcare arranged for the mock exams and exam day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly study agreement exists at home and childcare is booked for every mock date and the exam day."
                cadence: rolling
              tasks:
                - "Agree a realistic weekly hours figure with your partner"
                - "Move study slots to early mornings or nap times"
                - "Agree the coming week's study slots at home @recurring(weekly:sun)"
                - "Arrange childcare for the mock dates and exam day"
            - name: Sitting CISA in a second language
              description: |-
                ## Purpose
                ISACA offers the exam in several languages, but materials, question banks and colleagues are often in English, and long scenario questions punish slow reading. Deciding on the exam language early and building reading speed in it avoids losing marks to the clock rather than to the content.

                ## Milestones
                1. The languages currently offered checked on ISACA's site and one chosen.
                2. Study materials found in the chosen language or a bilingual glossary built.
                3. Reading speed on long scenario questions timed and improved.
                4. A full mock taken in the exam language within the time limit.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A full mock in the chosen exam language is finished within the time allowed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check which languages the exam is offered in today"
                - "Start a bilingual glossary of audit and control terms"
                - "Add ten new audit terms to the glossary @recurring(weekly:mon)"
                - "Time yourself on ten long scenario questions"
            - name: CISA CPE plan and annual maintenance
              description: |-
                ## Purpose
                Once certified, ISACA requires a minimum of continuing professional education each year and a larger total over each three-year period, an annual maintenance fee, and records kept in case you are audited. A simple yearly plan using webinars, chapter meetings, audit training and work learning makes renewal routine rather than a December scramble.

                ## Milestones
                1. The current CPE policy, yearly minimum and three-year total checked on ISACA's site.
                2. A CPE log set up with date, activity, hours and evidence.
                3. A yearly plan of chapter events, webinars and courses that meets the requirement.
                4. The annual fee paid and CPE reported on time.

                ## Notes
                Keep certificates of attendance for each activity. Audited members must produce them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The CPE log shows at least the yearly minimum with evidence, and the annual fee and report are filed by ISACA's deadline."
                cadence: cyclic
              tasks:
                - "Read the current CISA CPE policy and note the deadlines"
                - "Set up a CPE log with evidence links"
                - "Log CPE hours and save the certificates @recurring(monthly:20)"
                - "Pay the maintenance fee and report CPE to ISACA @recurring(yearly)"
            - name: Designing an ITGC testing programme
              description: |-
                ## Purpose
                Experienced IT auditors are judged on the programmes they design: which IT general controls matter for a system, what evidence proves each, and how testing ties back to the financial or operational risk. Turning CISA knowledge into a reusable test programme for access, change, operations and development is the step from passing to leading.

                ## Milestones
                1. The key risks for one in-scope system or application listed.
                2. Controls mapped across access, change, operations and development.
                3. Test steps, evidence and sample approach written for each control.
                4. The programme reviewed by an audit manager and adopted or adapted.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written ITGC test programme with risks, controls, steps and evidence is reviewed by an audit manager."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick one in-scope system and list its key risks"
                - "Map controls under access, change, operations and development"
                - "Ask the agent to draft test steps for each control from your map"
                - "Send the programme to an audit manager for review"
            - name: Mentoring colleagues through their CISA
              description: |-
                ## Purpose
                Explaining the auditor's reasoning to someone else is the fastest way to keep it sharp, and teams with several CISAs carry more weight with regulators and clients. A light monthly mentoring circle, with your study materials shared, also counts towards CPE in many cases.

                ## Milestones
                1. Two or three colleagues sitting CISA invited to a mentoring circle.
                2. Your study plan, rule sheet and flashcards cleaned up and shared.
                3. Monthly sessions held on one domain or question technique each.
                4. Any eligible hours recorded in your CPE log.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "At least four monthly mentoring sessions are held and logged, with materials shared to each mentee."
                cadence: rolling
              tasks:
                - "Ask who in your team or chapter is starting CISA"
                - "Tidy your rule sheet and flashcards for sharing"
                - "Run a one-hour mentoring session on one domain @recurring(monthly:5)"
                - "Check whether the sessions count towards your CPE"
            - name: Choosing the credential after CISA
              description: |-
                ## Purpose
                CISA often leads to a second credential: risk (CRISC), security management (CISM), privacy (CDPSE), or a cloud or data audit certificate. Choosing by where your audit career is heading, rather than by what colleagues hold, keeps the next round of study worth the evenings it costs.

                ## Milestones
                1. Two-year career goal in audit, risk or security written in one sentence.
                2. Three possible next credentials compared on fit, experience needed and cost.
                3. A manager or mentor asked which credential the market values for that goal.
                4. A choice recorded, or a decision to wait, with a review date.

                ## Notes
                Start from the **Development plan** template so the next credential sits inside your career plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the next credential or a wait, with the career goal it serves and a review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your two-year audit career goal in one sentence"
                - "Compare three next credentials on fit, experience and cost"
                - "Ask a mentor which one the market values for that goal"
                - "Record the choice and a review date"
---

# CISA IT Audit Certification

This area is for auditors, accountants, risk analysts and IT people who want ISACA's Certified Information Systems Auditor credential and the way of thinking behind it. It starts with foundations (the experience route, the exam outline, materials, a baseline score and a dated plan), then the weekly study machinery, the five domains from the audit process through governance, acquisition, operations and resilience to protecting information assets, the decisions about courses, proctoring and readiness, booking, exam day and the certification application, plans for external auditors, IT and security staff, internal auditors, working parents and second-language candidates, and specialist work such as CPE, ITGC testing and mentoring others.

The rhythm is four study sessions a week with a short daily question set and flashcards, a weekly wrong-answer review, partner call and note on one real control, a monthly timed mock, score update, weakest-domain retest and plan reset, quarterly checks for outline changes, and a yearly CPE report once certified. The Purchase decision, Course, Metrics log, Reading queue and Development plan templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
