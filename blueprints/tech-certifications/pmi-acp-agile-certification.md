---
id: tech-certifications.pmi-acp-agile-certification
name: PMI-ACP Agile Certification
description: "A route to the PMI-ACP: eligibility and agile experience records, the training hours, an audit-ready application, study across Scrum, Kanban, XP and Lean, timed mocks, exam day and the first renewal cycle."
category: personal
version: 1.0.0
tags: [tech-certifications, pmi-acp-agile-certification, knowledge-worker, pmi, agile, exam-prep, scrum, kanban]
author: Aurum Technology
starter_structure:
  templates:
    - course
    - purchase-decision
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
        - name: PMI-ACP Agile Certification
          description: "Preparing for PMI's agile credential: the experience and training needed, the agile mindset, value delivery and team practices across Scrum, Kanban and others."
          projects:
            - name: PMI-ACP eligibility check against your agile work
              description: |-
                ## Purpose
                PMI asks for a minimum amount of project experience, a further amount spent working on agile teams or with agile methods inside a recent window, and a set number of contact hours of agile training. Checking your own history against the current handbook before paying for anything tells you whether to apply this quarter, in a named month, or to build more agile time first.

                ## Milestones
                1. The current PMI-ACP eligibility rules read in the certification handbook and the version date noted.
                2. Your education level matched to the experience route it puts you on.
                3. A rough count of months on agile teams inside the lookback window.
                4. A written verdict: eligible now, eligible from a named month, or not yet.

                ## Notes
                The rules were revised with the newer exam, so ignore blog posts and course pages that quote older figures. Trust only the handbook downloaded from PMI on the day you check.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated note records the eligibility route that applies to you, your counted months of agile experience and the month you can apply."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current PMI-ACP certification handbook from the PMI website"
                - "Note the experience, lookback window and training hours for your education level"
                - "List every agile team or initiative you worked on in that window with start and end months"
                - "Write your eligibility verdict and the earliest month you could apply"
            - name: Exam content outline and handbook folder
              description: |-
                ## Purpose
                Every serious PMI-ACP plan starts from two documents: the examination content outline, which lists the domains and tasks the questions are written against, and the handbook, which sets the rules for applying, scheduling, rescheduling and retakes. Keeping both, dated, in one folder stops you studying from a course built on an outline that has since been replaced.

                ## Milestones
                1. The current examination content outline and handbook saved in one folder with their version dates.
                2. The domains and their task statements copied into a single study checklist.
                3. The rescheduling, cancellation and retake rules summarised in five lines.
                4. A standing quarterly check for outline changes in place.

                ## Notes
                At the time of writing the outline groups content into domains for the agile mindset, leadership, product and delivery. Confirm the current names and any weightings against PMI's own document, not a training provider's summary.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder holds the dated outline and handbook, plus a one-page checklist of every domain task statement."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the PMI-ACP examination content outline and save it with today's date"
                - "Copy every domain and task statement into a study checklist"
                - "Summarise the reschedule, cancellation and retake rules from the handbook"
                - "Check the PMI website for a new outline or handbook version @recurring(quarterly)"
            - name: Agile experience inventory for the application
              description: |-
                ## Purpose
                The application asks you to describe the agile work you did, on which teams, for how long and in what role, and an auditor may later ask a manager or client to confirm it. Building the inventory from calendars, sprint reports and old board exports now, while the details are findable, makes the application an afternoon's typing rather than a week of guessing.

                ## Milestones
                1. A table of every qualifying team or initiative with dates, organisation, role and the methods used.
                2. Overlapping months identified so time is not counted twice.
                3. A named verifier with current contact details beside each entry.
                4. Supporting evidence (sprint reports, board screenshots, role descriptions) filed per entry.

                ## Notes
                Ask each verifier informally now whether they would confirm the dates if audited. A manager who has left the company is still a valid verifier if you can reach them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory lists every qualifying agile engagement with non-overlapping dates, a role, the methods used and a reachable verifier."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Open last year's calendar and note every sprint planning or review you attended"
                - "Build a table of teams, dates, role, methods and verifier"
                - "Mark any months that overlap between engagements"
                - "Message each verifier to check they would confirm your dates"
            - name: Choosing agile training for the contact hours
              description: |-
                ## Purpose
                Contact hours only count when they cover agile practices and come from a provider whose certificate states the hours, the dates and the topics. Comparing three options (a PMI Authorized Training Partner course, an employer programme and a self-paced online course) on cost, schedule and how closely each follows the current outline avoids paying twice when the first certificate turns out not to qualify.

                ## Milestones
                1. Three training options compared on price, format, dates and alignment with the current outline.
                2. Confirmation that each option's certificate states contact hours and topics.
                3. A provider chosen and the course booked or started.
                4. The completion certificate saved in the application folder.

                ## Notes
                Start from the **Course** template. Hours from a Scrum or Kanban class you already took may count if the certificate shows the hours; check before buying more.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A booked or completed agile training course whose certificate states the contact hours, saved in the application folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the certificates from any agile classes you have already taken"
                - "Shortlist three training options and note their hours, price and dates"
                - "Ask each provider whether the course follows the current PMI-ACP outline"
                - "Book the chosen course and add the session dates to your calendar"
            - name: PMI membership and exam fee decision
              description: |-
                ## Purpose
                PMI charges members less for the exam and for retakes, and membership includes digital standards and practice guides you will use while studying. Working out the total cost on both routes, including one possible retake, shows whether membership pays for itself and gives you a single number to put in front of an employer.

                ## Milestones
                1. Current member and non-member exam and retake fees noted from the PMI website.
                2. Total cost compared on both routes, with and without one retake.
                3. A decision on membership recorded with the reason.
                4. The final budget figure written into the study plan.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A note shows the full cost on the member and non-member routes and records which you chose."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note the current member and non-member PMI-ACP fees and retake fees"
                - "Add the membership fee and compare totals with one retake included"
                - "Check whether your local PMI chapter offers study groups for members"
                - "Record the decision and the total budget in your study plan"
            - name: Diagnostic practice test and baseline score
              description: |-
                ## Purpose
                Experienced agile practitioners often find their workplace habits differ from the answers PMI expects, and the gap only shows under exam conditions. One timed diagnostic before studying gives a baseline per domain, shows which methods you barely know, and sets the size of the study plan.

                ## Milestones
                1. A timed diagnostic test of at least 50 questions sat without notes.
                2. Scores broken down by domain and by method where the tool allows.
                3. The three weakest areas named in writing.
                4. The baseline recorded as the first row of a score tracker.

                ## Notes
                Do not study first. A flattering baseline is useless; you want to see where your workplace version of Scrum differs from the textbook one.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline score by domain from a timed diagnostic is recorded, with the three weakest areas named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find a free or trial PMI-ACP diagnostic test of at least 50 questions"
                - "Sit it timed, in one go, without notes"
                - "Record the score per domain in a new tracker"
                - "Write down the three weakest areas and one surprise from the review"
            - name: PMI-ACP study calendar to a target exam month
              description: |-
                ## Purpose
                Most working candidates need two to four months of steady study, and the plan fails when it is a goal rather than dated blocks in a calendar. Counting back from a target exam month gives weekly topics, mock dates and a buffer for a busy release or a sick child.

                ## Milestones
                1. A target exam month chosen, given your eligibility and training dates.
                2. A week-by-week topic plan covering every domain and method.
                3. Mock exam dates fixed at regular intervals, with the last one about ten days before the exam.
                4. Two buffer weeks built in and study blocks entered in your calendar.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar shows dated weekly study blocks, mock exam dates and two buffer weeks up to a named target month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a target exam month and write it at the top of your plan"
                - "Lay out the weekly topics from the outline checklist"
                - "Put each mock exam date in the calendar"
                - "Block your study sessions in the calendar for the whole plan"
            - name: Submitting the PMI-ACP application and audit pack
              description: |-
                ## Purpose
                Once submitted, the application can be selected for audit, which pauses scheduling until PMI receives signed verification and training certificates. Preparing the audit pack before you press submit means an audit costs a few days instead of a stalled month, and keeps the eligibility period working for you.

                ## Milestones
                1. Every experience entry written in PMI's format, with dates matching the inventory.
                2. Training certificate and verifier details ready in one folder.
                3. The application submitted and the confirmation saved.
                4. Approval or audit outcome recorded with the eligibility period end date.

                ## Notes
                Write descriptions in agile terms PMI recognises: backlog refinement, iteration reviews, retrospectives, WIP limits. Keep each to the role you played, not what the team did without you.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The application is submitted, approved or cleared from audit, and the eligibility period end date is in your calendar."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to draft each experience description from your inventory table"
                - "Edit each description so it names your role and the agile practices used"
                - "Assemble the training certificate and verifier details in one folder"
                - "Submit the application and note the eligibility end date in your calendar"
            - name: Two weekday and one weekend study sessions routine
              description: |-
                ## Purpose
                Short, fixed sessions beat occasional long ones for a credential that tests recognition across many methods. Two weekday evenings and a longer Saturday slot, protected the way you would protect a sprint review, keep the plan moving through release crunches.

                ## Milestones
                1. Three study slots fixed in the calendar and agreed with your household.
                2. A one-line plan for each session written before it starts.
                3. Four consecutive weeks with all three sessions kept.
                4. A short note of what to change after the first month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Study sessions held on at least 10 of the 12 planned slots across four consecutive weeks, logged in the calendar."
                cadence: rolling
              tasks:
                - "Pick two weekday evenings and a Saturday slot and block them"
                - "Write the topic for each session the night before"
                - "Hold a 75-minute study session on the planned topic @recurring(weekly:tue,thu)"
                - "Spend a longer Saturday session on the week's weakest topic @recurring(weekly:sat)"
            - name: Wrong answer log and weekly pattern review
              description: |-
                ## Purpose
                Wrong answers carry more information than right ones: a pattern of choosing the manager's fix over the team's, or escalating before coaching, shows up only when misses are logged together. A weekly review of the log turns scattered errors into two or three rules you can apply in the exam.

                ## Milestones
                1. A log with the question topic, your answer, the expected answer and the reason you missed it.
                2. Misses tagged by cause: knowledge gap, misread question or workplace habit.
                3. A short list of personal answering rules drawn from the patterns.
                4. Repeat misses on the same idea falling across four weekly reviews.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A wrong-answer log reviewed weekly for at least six weeks, with a written list of personal answering rules."
                cadence: rolling
              tasks:
                - "Set up a wrong answer log with columns for topic, cause and lesson"
                - "Tag each logged miss as knowledge, misreading or workplace habit"
                - "Review the week's misses and update your answering rules @recurring(weekly:sun)"
                - "Retest yourself on last month's misses before the next mock"
            - name: Monthly full-length timed mock exam
              description: |-
                ## Purpose
                Sitting a full mock in one block tests stamina and timing as well as knowledge, and shows whether a gain in one domain held up under pressure. A mock each month, on a fixed day, gives the score tracker its real data points and the readiness decision its evidence.

                ## Milestones
                1. A full-length mock sat under exam conditions each month.
                2. Time per question checked against the time available.
                3. Every wrong and guessed answer moved into the wrong answer log.
                4. Three consecutive mocks at or above your readiness target.

                ## Notes
                Sit mocks at the same time of day as your likely exam slot, with the same break pattern the handbook allows.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three full-length timed mocks sat on schedule, each scored by domain and logged."
                cadence: rolling
              tasks:
                - "Choose the simulator you will use for every mock"
                - "Sit a full-length mock under exam conditions @recurring(monthly:9)"
                - "Move every wrong and guessed answer into the wrong answer log"
                - "Note your average time per question against the time available"
            - name: Agile terms and artefacts flashcard deck
              description: |-
                ## Purpose
                The exam assumes you know the difference between a spike and a tracer bullet, a burn-up and a burndown, cycle time and lead time, without stopping to think. A spaced-repetition deck built from your own misses covers the vocabulary of half a dozen methods in a few minutes a day.

                ## Milestones
                1. A deck of at least 150 cards covering terms from Scrum, Kanban, XP, Lean, DSDM, FDD and Crystal.
                2. Every new term from a wrong answer added within a day.
                3. Daily reviews kept for four weeks.
                4. Fewer than one card in ten failing on review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A flashcard deck of 150 or more agile terms reviewed daily for four weeks with a failure rate under 10 percent."
                cadence: rolling
              tasks:
                - "Install a spaced-repetition app and create a PMI-ACP deck"
                - "Add 20 cards from the methods you know least"
                - "Clear the day's flashcard reviews @recurring(daily)"
                - "Add a card for every unfamiliar term in the wrong answer log"
            - name: One agile practice tried at work each week
              description: |-
                ## Purpose
                Exam questions reward people who have watched a practice work and fail, not people who memorised its name. Trying one practice each week, a WIP limit, a fist of five, a definition of ready, and noting what happened, ties the content to experience you can recall under pressure.

                ## Milestones
                1. A list of 12 practices you have not used, drawn from the outline.
                2. One practice tried and a three-line note written each week.
                3. At least one practice adopted by the team for good.
                4. The notes linked to the matching topics in your study checklist.

                ## Notes
                Ask before changing how the team works. A small personal experiment, such as limiting your own WIP, needs nobody's permission.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly practice notes written, each naming the practice, what happened and the related outline task."
                cadence: rolling
              tasks:
                - "List 12 agile practices from the outline you have never used"
                - "Choose this week's practice and tell your team lead"
                - "Write a three-line note on how this week's practice went @recurring(weekly:fri)"
                - "Link each note to its topic in the study checklist"
            - name: Domain score tracker
              description: |-
                ## Purpose
                Overall scores hide a weak domain that can sink the exam. Tracking scores per domain from every mock and the daily sets shows whether weak spots are actually closing and gives the go or postpone decision a chart rather than a feeling.

                ## Milestones
                1. A tracker with a row per mock and a column per domain.
                2. The diagnostic baseline entered as the first row.
                3. A target score per domain written at the top.
                4. Three months of entries with a trend line per domain.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A domain score tracker holds at least three monthly entries and shows each domain against its target."
                cadence: rolling
              tasks:
                - "Create a score tracker with a column for each domain"
                - "Enter the diagnostic baseline and your target per domain"
                - "Add the month's mock and daily set scores to the tracker @recurring(monthly:12)"
            - name: Study partner weekly check-in
              description: |-
                ## Purpose
                A study partner who is also sitting the PMI-ACP, or has just passed it, catches the questions you would argue yourself out of. Fifteen minutes a week, comparing two hard questions each and the week's plan, keeps both of you honest without turning into a book club.

                ## Milestones
                1. A partner found through a local PMI chapter, an online group or work.
                2. A fixed weekly slot agreed.
                3. Two hard questions each discussed every week.
                4. Eight weeks of check-ins held.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly check-ins held with a named study partner, each covering at least two hard questions."
                cadence: rolling
              tasks:
                - "Post in your local PMI chapter or an online group to find a partner"
                - "Agree a fixed 15-minute weekly slot"
                - "Bring two hard questions to the study partner check-in @recurring(weekly:wed)"
            - name: Monthly study plan review and reset
              description: |-
                ## Purpose
                A study plan is a backlog: it should be re-prioritised against new information, not followed blindly. A monthly reset using the latest mock, the wrong answer log and the calendar keeps the plan honest about what is left and whether the target month still holds.

                ## Milestones
                1. The month's mock score and wrong answer patterns reviewed together.
                2. The next month's topics re-ordered by weakness.
                3. The target month confirmed or moved with a written reason.
                4. Finished topics ticked off the outline checklist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated monthly note records the latest scores, the re-ordered topics and whether the target month holds."
                cadence: rolling
              tasks:
                - "Compare the latest mock with the wrong answer log patterns"
                - "Re-order the next four weeks of topics by weakness"
                - "Hold a 30-minute study plan reset and write the decision down @recurring(monthly:28)"
            - name: Agile Manifesto values and twelve principles
              description: |-
                ## Purpose
                Many PMI-ACP questions are decided by a principle rather than a practice: when two answers both look reasonable, the one closer to the Manifesto usually wins. Knowing the four values and twelve principles well enough to name which one a scenario is testing removes a whole class of guesses.

                ## Milestones
                1. The four values and twelve principles written out from memory.
                2. Each principle paired with one example from your own work.
                3. Twenty practice questions answered by naming the principle first.
                4. A one-page crib sheet of principle-to-scenario pairs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can write all four values and twelve principles from memory, and a crib sheet pairs each with a scenario."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the Agile Manifesto and its principles slowly once"
                - "Write each principle beside one example from your work"
                - "Answer 20 questions by naming the principle before choosing"
                - "Write the twelve principles from memory before a study session @recurring(monthly:3)"
            - name: Agile mindset and adaptive behaviour scenarios
              description: |-
                ## Purpose
                Questions on mindset test how you think when a plan meets reality: welcoming late change, learning from failure, choosing experiments over certainty. People coming from tightly controlled environments tend to pick the safe, documented answer, and lose marks. Practising these scenarios shifts that reflex.

                ## Milestones
                1. The mindset tasks in the outline listed with an example of each.
                2. Fifty mindset scenario questions answered and reviewed.
                3. Your three most common wrong instincts written down.
                4. Accuracy on mindset questions at or above target in a mock.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fifty mindset scenario questions reviewed, a list of your wrong instincts written, and the mindset score at target in a mock."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List each mindset task from the outline with a real example"
                - "Answer 25 mindset questions and review every miss"
                - "Write down your three most common wrong instincts"
                - "Answer 25 more and compare accuracy with the first set"
            - name: Servant leadership and self-organising teams
              description: |-
                ## Purpose
                Leadership questions describe a team in trouble, conflict, a missed commitment, a dominant voice, and ask what the agile leader does first. The expected answer is usually to facilitate, coach or remove an obstacle rather than decide for the team. Studying team development models and conflict levels gives you the vocabulary to spot that answer quickly.

                ## Milestones
                1. Notes on servant leadership, team development stages and levels of conflict.
                2. A table of common team problems with the facilitating response for each.
                3. Forty leadership scenario questions answered and reviewed.
                4. The leadership domain at or above target in a mock.

                ## Notes
                Watch for answers that sound kind but bypass the team, such as quietly fixing the problem yourself. They are usually wrong.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A problem-to-response table and 40 reviewed leadership questions, with the domain at target in a mock."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Summarise servant leadership and team development stages on one page"
                - "Build a table of team problems and the facilitating response"
                - "Answer 40 leadership questions and review every miss"
                - "Discuss one leadership scenario with your study partner"
            - name: Product value, backlog and stakeholder practices
              description: |-
                ## Purpose
                Product questions cover how value is defined, ordered and checked: personas, story mapping, MoSCoW and other prioritisation schemes, minimum viable products and frequent reviews with stakeholders. Building a small backlog for a real or imagined product, using each technique once, makes the terms stick far better than reading definitions.

                ## Milestones
                1. A practice backlog of 20 user stories with acceptance criteria.
                2. The backlog prioritised two ways and the differences noted.
                3. A story map and a minimum viable release slice drawn.
                4. Forty product questions answered and reviewed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice backlog with a story map and two prioritisations exists, and 40 product questions have been reviewed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick a product you know and write 20 user stories for it"
                - "Prioritise the backlog with MoSCoW and with a value and effort grid"
                - "Draw a story map and mark a minimum viable release"
                - "Answer 40 product questions and review every miss"
            - name: Delivery, flow and quality practices
              description: |-
                ## Purpose
                Delivery questions ask how a team keeps work flowing and quality high: definitions of done, frequent small releases, continuous integration, reducing waste and handling defects and technical debt. Mapping each practice to the problem it solves lets you choose the right one when a question describes only the symptom.

                ## Milestones
                1. A table of delivery practices, each paired with the problem it addresses.
                2. A sample definition of done written for a team you know.
                3. Forty delivery questions answered and reviewed.
                4. The delivery domain at or above target in a mock.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice-to-problem table and a sample definition of done exist, and the delivery domain is at target in a mock."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List delivery practices from the outline beside the problem each solves"
                - "Write a definition of done for a team you work with"
                - "Answer 40 delivery questions and review every miss"
                - "Explain technical debt and its trade-offs aloud in two minutes"
            - name: Scrum as the exam tests it
              description: |-
                ## Purpose
                Scrum is the method most candidates know best and still lose marks on, because their workplace version has drifted: a sprint extended, a manager running the daily scrum, a backlog nobody orders. Rereading the Scrum Guide and comparing it line by line with how your team works shows where your instincts will mislead you.

                ## Milestones
                1. The current Scrum Guide read in full.
                2. A list of every way your team's Scrum differs from the Guide.
                3. The accountabilities, events and artefacts written from memory.
                4. Thirty Scrum questions answered with fewer than three misses.

                ## Notes
                This is exam knowledge, not a Scrum Master course. If you also want a Scrum credential, keep that plan in its own area.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of differences between your team's practice and the Scrum Guide, and 30 Scrum questions with fewer than three misses."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the current Scrum Guide in one sitting"
                - "List every difference between the Guide and your team's practice"
                - "Write the accountabilities, events and artefacts from memory"
                - "Reread the Scrum Guide's events section before a mock @recurring(monthly:20)"
            - name: Kanban, flow metrics and WIP limits
              description: |-
                ## Purpose
                Kanban questions turn on a handful of ideas that are easy to mix up: pull versus push, WIP limits, cycle time versus lead time, throughput and reading a cumulative flow diagram. Running a small personal Kanban board for three weeks and drawing its cumulative flow by hand makes the metrics concrete.

                ## Milestones
                1. A personal Kanban board with explicit WIP limits run for three weeks.
                2. Cycle time and throughput calculated from your own cards.
                3. A cumulative flow diagram drawn and a bottleneck identified on it.
                4. Thirty Kanban and flow questions answered and reviewed.

                ## Notes
                Little's Law links WIP, throughput and cycle time. Work one example by hand rather than memorising the formula.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A three-week personal Kanban board with calculated cycle time, a hand-drawn cumulative flow diagram and 30 reviewed questions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set up a personal Kanban board with a WIP limit on each column"
                - "Record start and finish dates on every card for three weeks"
                - "Calculate cycle time and throughput and draw a cumulative flow diagram"
                - "Answer 30 Kanban and flow questions and review every miss"
            - name: Extreme Programming practices for non-developers
              description: |-
                ## Purpose
                XP is the method many project managers and analysts know least, yet questions on pair programming, test-driven development, refactoring, continuous integration and collective code ownership appear regularly. Learning what each practice is for, and watching a developer do one, is enough to answer them confidently.

                ## Milestones
                1. The XP values and core practices summarised on one page.
                2. Thirty minutes spent watching or pairing with a developer on test-driven work.
                3. Each practice linked to the risk it reduces.
                4. Twenty XP questions answered and reviewed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page XP summary, a note from a pairing or observation session and 20 reviewed XP questions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Summarise the XP values and core practices on one page"
                - "Ask a developer if you can watch a test-driven session for 30 minutes"
                - "Link each XP practice to the risk it reduces"
                - "Answer 20 XP questions and review every miss"
            - name: Lean thinking and value stream mapping
              description: |-
                ## Purpose
                Lean ideas run through the exam: the seven wastes, flow, pull, building quality in and mapping a value stream to find delay. Mapping one real process from request to delivery, with wait times marked, gives you a worked example to reason from when a question describes waste in disguise.

                ## Milestones
                1. The Lean principles and the seven wastes listed with a software example of each.
                2. A value stream map of one real process with process and wait times.
                3. Process cycle efficiency calculated for that map.
                4. Twenty Lean questions answered and reviewed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A value stream map of a real process with wait times and an efficiency figure, plus 20 reviewed Lean questions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the seven wastes with a software or office example of each"
                - "Map one real process from request to delivery with wait times"
                - "Calculate process cycle efficiency for the map"
                - "Answer 20 Lean questions and review every miss"
            - name: Relative estimation, velocity and release planning
              description: |-
                ## Purpose
                Estimation questions mix story points, ideal days, planning poker, affinity estimating, velocity and burn charts, and they often hide a trap, such as comparing velocity between teams. Working a small release plan from estimates to a burn-up chart lets you answer the arithmetic and spot the trap.

                ## Milestones
                1. Notes on story points, ideal days, planning poker and affinity estimating.
                2. A practice release plan from a backlog and three sprints of velocity.
                3. A burn-up and a burndown drawn for the same data.
                4. Twenty estimation questions answered and reviewed.

                ## Notes
                Velocity is a planning tool for one team. Any answer that uses it to rank teams or individuals is almost always wrong.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A worked release plan with burn-up and burndown charts exists, and 20 estimation questions are reviewed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Summarise the main estimation techniques on one page"
                - "Estimate your practice backlog with planning poker cards"
                - "Build a release plan from three sprints of sample velocity"
                - "Draw a burn-up and a burndown from the same numbers"
            - name: DSDM, FDD and Crystal at exam depth
              description: |-
                ## Purpose
                Less common methods appear less often but cost marks when they do, because few candidates have used them. A page each on DSDM, Feature-Driven Development and the Crystal family, covering what each emphasises and its signature terms, is all the depth the exam needs.

                ## Milestones
                1. One page each on DSDM, FDD and Crystal.
                2. A comparison table of all the methods studied, by focus and signature practice.
                3. Signature terms added to the flashcard deck.
                4. Fifteen questions on these methods answered and reviewed.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One-page summaries of DSDM, FDD and Crystal and a method comparison table are in the study folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one page on DSDM's principles and timeboxing"
                - "Write one page each on FDD and the Crystal family"
                - "Build a comparison table of every method you have studied"
                - "Add the signature terms of each method to the flashcard deck"
            - name: Hybrid approaches and tailoring scenarios
              description: |-
                ## Purpose
                Real organisations run agile teams inside predictive programmes, and the exam asks how to fit the two together: governance gates, fixed-price contracts, distributed teams and regulated work. Studying how to tailor agile practices to those constraints prepares you for the longest, most ambiguous scenarios.

                ## Milestones
                1. Notes on tailoring for distributed teams, contracts, compliance and large programmes.
                2. Two real examples from your work of agile inside a predictive setting.
                3. Agile contract types summarised with when each fits.
                4. Twenty hybrid scenario questions answered and reviewed.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Tailoring notes, two worked examples from your own work and 20 reviewed hybrid scenario questions are in the study folder."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the hybrid and tailoring guidance in your main study text"
                - "Write up two examples of agile work inside a predictive programme"
                - "Summarise agile-friendly contract types and when each fits"
                - "Answer 20 hybrid scenario questions and review every miss"
            - name: Reading PMI-ACP situational questions
              description: |-
                ## Purpose
                Situational questions often give four plausible actions and ask for the best or the first. Learning to find the keyword, rule out answers that bypass the team or skip to escalation, and choose between two survivors with a principle is a skill in its own right, separate from knowing the content.

                ## Milestones
                1. A written routine for reading a scenario question in under a minute.
                2. A list of answer patterns that are usually wrong.
                3. Fifty situational questions answered using the routine.
                4. Fewer misreads logged in the wrong answer log over four weeks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written question-reading routine, used on 50 situational questions, with misreads falling over four weeks."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a four-step routine for reading a scenario question"
                - "List answer patterns that are usually wrong, such as escalating first"
                - "Answer 50 situational questions using the routine"
                - "Compare misread counts in the log before and after"
            - name: Facilitating a retrospective with your team
              description: |-
                ## Purpose
                Retrospectives, and the facilitation techniques behind them, appear across several domains, and running one is the quickest way to understand why the exam values them. Offering to facilitate one retrospective for your team, using a format you have not tried, gives you a story and a skill at once.

                ## Milestones
                1. A retrospective format chosen, with the five stages planned.
                2. One retrospective facilitated for your team.
                3. At least one improvement action agreed and owned.
                4. A short note on what worked and what you would change.

                ## Notes
                Ask the usual facilitator first and keep the session to the team's normal length. Your role is to run the format, not to fix the team.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "One retrospective facilitated with an agreed improvement action and a written reflection note."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the team's usual facilitator if you can run the next retrospective"
                - "Choose a format and plan the five stages"
                - "Run the retrospective and record the agreed action"
                - "Join or run a retrospective and log the format used @recurring(monthly:24)"
            - name: Choosing a question bank and exam simulator
              description: |-
                ## Purpose
                Question banks differ widely in quality, and one written for the older outline can teach answers PMI no longer expects. Comparing two or three on alignment with the current outline, explanation quality and the realism of full mocks is worth an hour before you commit months of practice to one.

                ## Milestones
                1. Two or three simulators shortlisted with price and access period.
                2. Each checked for the outline version it claims to follow.
                3. Free samples tried and the explanations compared.
                4. One simulator bought, with its access end date noted.

                ## Notes
                Start from the **Purchase decision** template. Check the access period runs past your target month plus a possible retake.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One simulator aligned with the current outline is bought, and its access end date is after your target exam month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Shortlist three PMI-ACP simulators with price and access period"
                - "Check which outline version each claims to follow"
                - "Try a free sample from each and compare the explanations"
                - "Buy the chosen simulator and note its access end date"
            - name: Core reading list for the PMI-ACP
              description: |-
                ## Purpose
                Candidates commonly drown in books. A short list, PMI's agile practice guide, one PMI-ACP prep book aligned to the current outline, the Scrum Guide and one Kanban text, read in a fixed order, covers the ground without wasting weeks on overlap.

                ## Milestones
                1. No more than five texts chosen and listed in reading order.
                2. Each text mapped to the weeks of the study calendar.
                3. Each text finished with a one-page summary.
                4. Anything off the list parked for after the exam.

                ## Notes
                Start from the **Reading queue** template. Check the publication date of any prep book against the outline date.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A reading list of five texts or fewer, each finished and summarised on one page before the exam."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Pick no more than five texts and set their reading order"
                - "Check each prep book's publication date against the outline date"
                - "Read one chapter and write a three-line summary @recurring(weekly:mon)"
                - "Write a one-page summary when each text is finished"
            - name: Online proctored or test centre decision
              description: |-
                ## Purpose
                Most candidates can sit the exam at a test centre or online with a remote proctor, and the choice matters more than people expect: home exams fail on noise, internet drops and room rules, centres on travel and slot availability. Deciding early, with a system check if you lean online, avoids a lost exam fee.

                ## Milestones
                1. Current delivery options and rules read in the handbook.
                2. The nearest test centre located and travel time noted.
                3. The online system check passed on the machine you would use, if considering online.
                4. A decision recorded with the reason.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of online or test centre delivery, backed by a passed system check or a confirmed centre location."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the online and test centre delivery rules in the handbook"
                - "Find the nearest test centre and its travel time"
                - "Run the online system check on the computer you would use"
                - "Record your delivery choice and the reason"
            - name: Closing the weakest domain after the first mock
              description: |-
                ## Purpose
                After the first full mock, one domain usually sits well below the rest, and spreading effort evenly leaves it there. A focused three-week sprint on that domain, with targeted questions and a retest, moves the overall score more than another round of general revision.

                ## Milestones
                1. The weakest domain named from the first mock and the tracker.
                2. A three-week sprint of topics and question sets for that domain.
                3. One hundred targeted questions answered and reviewed.
                4. A retest showing the domain at or near target.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A targeted retest shows the previously weakest domain at or within five points of its target."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Name the weakest domain from the first mock and the tracker"
                - "Plan a three-week sprint of topics for that domain"
                - "Answer 100 targeted questions on that domain"
                - "Sit a domain retest and record the result"
            - name: Making the case for employer support
              description: |-
                ## Purpose
                Many employers pay for training, the exam or study time if asked in terms of the team's work rather than personal ambition. A one-page case linking the PMI-ACP to a delivery problem your organisation has, with a full cost and a modest ask, gets a clearer answer than a hallway request.

                ## Milestones
                1. The organisation's training or certification policy found.
                2. A one-page case with costs, time and the benefit to the team.
                3. The case discussed with your manager.
                4. The outcome and any conditions, such as a stay clause, recorded.

                ## Notes
                Read any repayment or stay clause before you sign. It can matter more than the amount offered.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page case was presented to your manager and the funding decision and its conditions are recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your organisation's training and certification policy"
                - "Write a one-page case with full costs and the benefit to the team"
                - "Book 20 minutes with your manager to discuss it"
                - "Record the decision and any repayment conditions"
            - name: PMI-ACP or a framework certificate decision
              description: |-
                ## Purpose
                For some people a single-framework credential is a better first step than the PMI-ACP, and for others the PMI-ACP's breadth across methods is exactly the point. Writing down what your next role needs, and what each option proves, settles the question before you spend on the wrong one.

                ## Milestones
                1. Three target job adverts reviewed for which credentials they name.
                2. The PMI-ACP compared with one framework certificate on cost, prerequisites and what it proves.
                3. A decision recorded with the order you will take them in, if both.
                4. The decision shared with your manager or mentor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names which credential you will take first, backed by three job adverts and a cost comparison."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save three job adverts for the role you want next"
                - "Note which agile credentials each advert names"
                - "Compare the PMI-ACP with one framework certificate on cost and prerequisites"
                - "Write your decision and the order you will take them in"
            - name: Exam readiness go or postpone decision
              description: |-
                ## Purpose
                Booking too early wastes a fee and confidence, booking too late lets the eligibility period run down. A clear readiness rule written in advance, such as three mocks in a row at your target with no domain below a floor, turns an anxious judgement into a check.

                ## Milestones
                1. A written readiness rule set before the second mock.
                2. The last three mock results checked against the rule.
                3. A go or postpone decision recorded with the date.
                4. If postponing, a new target date and the topics to fix.

                ## Notes
                Write the rule before you see the scores. Rules written afterwards tend to bend to the result.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated go or postpone decision is recorded against a readiness rule written before the second mock."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your readiness rule before the second mock"
                - "Check the last three mocks against the rule"
                - "Record a go or postpone decision with the date"
                - "Set a new target date and topic list if postponing"
            - name: Booking the PMI-ACP exam slot
              description: |-
                ## Purpose
                Popular slots, weekends and early mornings fill weeks ahead, and the eligibility period has a hard end date. Booking as soon as the readiness rule says go, at the time of day your mocks went best, gives a fixed date to work back from.

                ## Milestones
                1. Eligibility period end date confirmed.
                2. A slot booked at your preferred time of day.
                3. The confirmation and the reschedule deadline saved.
                4. The final two weeks planned in the calendar.
              priority: high
              deadlineOffsetDays: 110
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An exam slot is booked inside the eligibility period, with the confirmation and reschedule deadline saved."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Confirm the end date of your eligibility period"
                - "Book a slot at the time of day your mocks went best"
                - "Save the confirmation and note the reschedule deadline"
                - "Block the final two weeks of study in the calendar"
            - name: Final two weeks before the PMI-ACP exam
              description: |-
                ## Purpose
                The last fortnight is for consolidation, not new material: a final mock about ten days out, a focused pass through the wrong answer log, the crib sheets and enough sleep. Planning those days in advance stops panic-studying a method you have barely touched.

                ## Milestones
                1. A final full mock sat about ten days before the exam.
                2. The wrong answer log and answering rules reviewed twice.
                3. Crib sheets condensed into one page per domain.
                4. The last two days kept light, with no new material.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The final mock, two log reviews and one-page domain sheets are complete before the last two days."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Sit the final full mock about ten days before the exam"
                - "Condense your notes into one page per domain"
                - "Review the wrong answer log and answering rules twice"
                - "Plan two light days before the exam with no new topics"
            - name: PMI-ACP exam day plan
              description: |-
                ## Purpose
                Small failures on the day, an expired ID, a name mismatch with the booking, a webcam that will not start, cost people their attempt. A written plan for ID, timing, breaks and pacing means the only thing left to think about is the questions.

                ## Milestones
                1. ID checked against the name on the booking.
                2. Travel or room set-up planned, with arrival or check-in time.
                3. A pacing plan with time checkpoints through the exam.
                4. A plan for breaks and what to eat and drink.

                ## Notes
                For an online exam, clear the desk and walls the night before and have a phone ready for the proctor's room scan if required.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written exam day plan covers ID, arrival or check-in, pacing checkpoints and breaks, and the exam is sat as booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your ID matches the name on the booking exactly"
                - "Plan travel or room set-up and the check-in time"
                - "Write pacing checkpoints for the exam"
                - "Lay out ID, water and snacks the night before"
            - name: Results, certificate and digital badge
              description: |-
                ## Purpose
                Passing starts the renewal clock and is worth recording properly: the result report shows performance by domain, the certificate number goes on your CV, and the digital badge can be shared. Doing it all in the first week, while you remember the exam, also leaves notes useful to colleagues who follow.

                ## Milestones
                1. The result report saved with the domain ratings.
                2. The certificate number and expiry date recorded.
                3. The digital badge claimed and added to your profile.
                4. A short note of what helped most, for colleagues.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The result report, certificate number, expiry date and badge are recorded, and a lessons note is written."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save the result report and its domain ratings"
                - "Record the certificate number and expiry date"
                - "Claim the digital badge and add it to your profile and CV"
                - "Write a short note of what helped most for colleagues"
            - name: Retake plan after a below target result
              description: |-
                ## Purpose
                A failed attempt is common and the result report shows exactly where the gap was. Reading it calmly, checking the retake rules and booking a second attempt within the eligibility period, with a short plan aimed at the weak domains, turns a setback into a few more weeks of study.

                ## Milestones
                1. The result report read and the weak domains named.
                2. Retake rules, waiting period and fee confirmed in the handbook.
                3. A four to six week plan aimed at the weak domains.
                4. The retake booked inside the eligibility period.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A retake is booked inside the eligibility period with a written plan targeting the domains rated below target."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the result report and list the domains below target"
                - "Check the retake rules and fee in the handbook"
                - "Plan four to six weeks of study on those domains"
                - "Book the retake inside the eligibility period"
            - name: PMI-ACP for a PMP holder adding agile
              description: |-
                ## Purpose
                PMP holders know the PMI question style but often carry predictive reflexes, such as protecting the baseline or controlling scope change, that cost marks here. A plan that skips what you already know and drills the agile mindset and team-led answers gets you exam-ready faster.

                ## Milestones
                1. Topics you already know from the PMP struck off the checklist.
                2. A list of predictive reflexes that conflict with agile answers.
                3. Mindset and leadership questions drilled until at target.
                4. Experience entries written so agile work is not double-counted with PMP entries.

                ## Notes
                PDUs earned for one PMI credential may also count toward another. Check the current rules in the renewal handbook.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written list of predictive reflexes and mindset and leadership scores at target in a mock."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Strike off outline topics you already know well from the PMP"
                - "List predictive reflexes that clash with agile answers"
                - "Drill mindset and leadership questions until both are at target"
                - "Check whether PDUs can count toward both credentials"
            - name: PMI-ACP for a waterfall project manager
              description: |-
                ## Purpose
                If your organisation runs mostly predictive projects, the experience requirement and the mindset questions are both harder. A plan that finds or creates real agile work, a pilot team, an iterative workstream or a Kanban board for operational work, builds the experience and the instincts together.

                ## Milestones
                1. One agile opportunity at work identified and agreed with your manager.
                2. At least three months of documented agile practice on it.
                3. A mentor who works on an agile team found.
                4. Your experience inventory updated with the new work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three months of documented agile practice on a named piece of work are in your experience inventory, with a verifier."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List three pieces of work that could run iteratively"
                - "Propose one as an agile pilot to your manager"
                - "Find a mentor who works on an agile team"
                - "Document each iteration's practice and outcome in the inventory"
            - name: PMI-ACP for developers, testers and analysts
              description: |-
                ## Purpose
                Team members often have deep agile experience but have never framed it in leadership and stakeholder terms, which is where many questions sit. Studying from the coordinator's view, how a backlog is ordered, how conflict is handled, how value is shown to sponsors, fills the gap and helps a move into a delivery or coaching role.

                ## Milestones
                1. Outline tasks you have done yourself marked, and those you have only watched.
                2. Two conversations with your delivery lead or Scrum Master about how they handle the watched tasks.
                3. Leadership and product questions drilled until at target.
                4. Experience descriptions written to show your role in agile practice, not only the code or tests.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Leadership and product domain scores are at target in a mock, and experience descriptions name your own agile practice."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Mark outline tasks as done yourself or only watched"
                - "Ask your delivery lead how they handle two of the watched tasks"
                - "Drill leadership and product questions until both are at target"
                - "Rewrite experience descriptions to show your agile role"
            - name: Studying for the PMI-ACP as a working parent
              description: |-
                ## Purpose
                With children, study time is fragmented and evenings are unreliable, so a plan built on long sessions breaks in the first week. Short blocks, early mornings, a phone question bank for waiting rooms and a weekly agreement with your partner about who covers which evening make the plan survivable.

                ## Milestones
                1. Study blocks of 25 to 45 minutes mapped onto the real family week.
                2. A weekly handover agreed with your partner or a relative for two evenings.
                3. A phone question bank set up for short waits.
                4. A realistic target month, later than the single-person plan if needed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive weeks of the agreed study blocks kept, with a weekly handover with your partner or relative."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map the family week and mark realistic 25 to 45 minute blocks"
                - "Install the question bank app on your phone"
                - "Agree the week's study evenings with your partner @recurring(weekly:sun)"
                - "Move the target month if the blocks do not add up"
            - name: PMI-ACP in a second language
              description: |-
                ## Purpose
                Scenario questions are long and turn on words such as first, best and most likely, which is harder when English is not your first language. Checking whether PMI offers the exam or language aids for your language, and practising timed reading, protects marks you know the answers to.

                ## Milestones
                1. Current language options and aids checked in the handbook.
                2. A glossary of agile terms in both languages.
                3. Timed reading practice on long scenario questions.
                4. Mock pacing within the time available.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A two-language glossary exists and two timed mocks are finished within the time available."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check the handbook for language options and aids"
                - "Build a two-language glossary of agile terms"
                - "Practise reading long scenario questions against a timer"
                - "Check your pacing in the next two mocks"
            - name: Agile coaching portfolio after the PMI-ACP
              description: |-
                ## Purpose
                Passing opens interviews, but agile coaching and delivery lead roles are won on evidence: teams you helped, metrics that moved, practices that stuck. Collecting short case notes month by month after passing builds a portfolio that makes the PMI-ACP more than a line on a CV.

                ## Milestones
                1. A portfolio structure with situation, intervention and result for each case.
                2. Three case notes written from your own work.
                3. At least one case with a before and after metric, such as cycle time.
                4. The portfolio used in a review, interview or promotion case.

                ## Notes
                Start from the **Development plan** template. Strip client and employer names from anything you share.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A portfolio of at least three anonymised case notes, one with a before and after metric, used in a review or interview."
                cadence: rolling
              tasks:
                - "Set up a portfolio with situation, intervention and result headings"
                - "Write the first case note from a team you helped"
                - "Add one new anonymised case note @recurring(monthly:18)"
                - "Use the portfolio in your next review or interview"
            - name: First PMI-ACP renewal cycle plan
              description: |-
                ## Purpose
                Your PMI-ACP lasts for a fixed cycle and renews only with enough PDUs reported in the right categories, and the deadline arrives quietly. Planning the cycle in the first month after passing, with free and work-based PDU sources, keeps renewal cheap and avoids a last-minute scramble.

                ## Milestones
                1. The current PDU requirement and categories noted from the renewal handbook.
                2. The cycle end date in your calendar with a reminder six months before.
                3. A list of free and work-based PDU sources.
                4. PDUs reported as they are earned, with evidence saved.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The cycle end date is in the calendar and PDUs are reported each quarter with evidence saved, on track to the requirement."
                cadence: cyclic
              tasks:
                - "Note the current PDU requirement and categories for the PMI-ACP"
                - "Add the cycle end date and a six-month reminder to your calendar"
                - "List free and work-based PDU sources"
                - "Report the quarter's PDUs with evidence on the PMI site @recurring(quarterly)"
            - name: Mentoring a colleague through the PMI-ACP
              description: |-
                ## Purpose
                Once you have passed, you are the most useful resource a colleague starting out can have: you know which rules tripped you, which question bank worked and how the audit went. Mentoring one person through their application and study plan makes your own knowledge last and builds an agile community at work.

                ## Milestones
                1. One colleague agreed as a mentee with a target month.
                2. Your eligibility, application and study notes shared, with anything confidential removed.
                3. A monthly check-in held until their exam.
                4. Their result recorded and lessons added to your notes.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "One colleague mentored with monthly check-ins through to their exam, and the outcome recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Offer to mentor one colleague who is considering the PMI-ACP"
                - "Share your study notes and application tips"
                - "Hold a monthly mentoring check-in until their exam"
                - "Add their lessons to your own notes after the exam"
---

# PMI-ACP Agile Certification

This area is for people who already work on agile teams, as a delivery lead, analyst, developer, tester or project manager, and want PMI's Agile Certified Practitioner credential to show for it. It starts with foundations (eligibility, the agile experience inventory, the training hours, a baseline score, a dated study calendar and an application that survives an audit), then the weekly study machinery, the content itself across the agile mindset, leadership, product and delivery and the methods behind them (Scrum, Kanban, XP, Lean, DSDM, FDD and Crystal), the decisions about question banks, delivery mode and readiness, booking and exam day, plans for PMP holders, waterfall project managers, team members, working parents and second-language candidates, and specialist work such as coaching evidence and the first renewal cycle.

The rhythm is two weekday study sessions and a longer Saturday one, daily flashcards, a weekly wrong-answer review, a study partner check-in and one agile practice tried at work each Friday, a monthly timed mock, domain score update and plan reset, and quarterly checks for outline changes and earned PDUs. The Course, Purchase decision, Metrics log, Reading queue and Development plan templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
