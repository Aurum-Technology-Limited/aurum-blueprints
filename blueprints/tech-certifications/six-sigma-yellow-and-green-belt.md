---
id: tech-certifications.six-sigma-yellow-and-green-belt
name: Six Sigma Yellow and Green Belt
description: "A route from Six Sigma Yellow Belt to a certified Green Belt: choosing the awarding body, DMAIC and the core statistics, one real improvement project with a sponsor, and the exam."
category: personal
version: 1.0.0
tags: [tech-certifications, six-sigma-yellow-and-green-belt, knowledge-worker, engineer, lean-six-sigma, dmaic, process-improvement, exam-prep]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - meeting-notes
    - portfolio-piece
    - resume
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Six Sigma Yellow and Green Belt
          description: "Earning Six Sigma Yellow and then Green Belt: DMAIC, process mapping, basic statistics, a real improvement project and the certification exam."
          projects:
            - name: Choosing between ASQ, IASSC and an employer belt programme
              description: |-
                ## Purpose
                Green Belts are awarded by professional bodies such as ASQ, by exam-only accreditors such as IASSC, by training providers and by employers' own deployment programmes, and recruiters do not weigh them equally. Comparing three routes on recognition in your sector, whether a completed project is required, cost and exam format before you study saves you from earning a belt that your next employer quietly discounts.

                ## Milestones
                1. Three candidate routes listed with their awarding body, exam format and whether a project is required.
                2. Recognition checked by searching twenty job adverts in your sector for which belts they name.
                3. Total cost for each route written down, including training, exam, retake and membership.
                4. One route chosen, with the reason recorded in two sentences.

                ## Notes
                Start from the **Purchase decision** template. A belt from a provider that sets, teaches and marks its own exam with no independent body behind it is the one most often discounted.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of three belt routes on recognition, cost, format and project requirement, with one route chosen and the reason recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List three Green Belt routes open to you, including any employer programme"
                - "Search twenty job adverts in your sector and count which belts they name"
                - "Price each route including training, exam fee, retake and membership"
                - "Record the route you chose and why in the decision note"
            - name: Green Belt eligibility and project requirement check
              description: |-
                ## Purpose
                Some bodies ask for years of work experience in areas of the Body of Knowledge, some want a signed project affidavit, and some let anyone sit the exam. Reading the current rules for your chosen route now tells you whether you can book once you are ready or must first finish a project or gather evidence of experience.

                ## Milestones
                1. The current eligibility rules for your chosen route read on the awarding body's website and dated.
                2. Your qualifying work experience listed by role, with dates and the Body of Knowledge areas it touched.
                3. A clear answer on whether a completed project, an affidavit or a sponsor signature is required.
                4. The earliest realistic month you could sit the exam written down.

                ## Notes
                Check whether the exam is open book, which reference materials are allowed and whether a particular calculator is required. These rules change and differ between bodies.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated eligibility note states the experience and project rules for your route, whether you meet them, and the earliest month you could sit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the current Green Belt eligibility rules on your awarding body's website"
                - "Note the exam format, open book rules and allowed calculators with today's date"
                - "List your roles that involved process, quality or data work"
                - "Write down whether a project affidavit or sponsor signature is required"
            - name: Body of Knowledge baseline self-assessment
              description: |-
                ## Purpose
                Every Green Belt exam is written against a published Body of Knowledge, and most candidates overrate their statistics and underrate the Define phase. Scoring yourself line by line, then checking with a diagnostic quiz, gives you a study plan aimed at your real gaps instead of the textbook's page order.

                ## Milestones
                1. The current Body of Knowledge for your route downloaded and saved.
                2. Each topic scored from 0 to 3 for how confidently you could explain and apply it.
                3. A diagnostic quiz of at least 50 questions taken and scored by topic.
                4. The five weakest topics named and ranked at the top of your study plan.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scored Body of Knowledge sheet and a diagnostic quiz result exist, with the five weakest topics ranked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the current Body of Knowledge for your belt route"
                - "Score every topic from 0 to 3 in a spreadsheet"
                - "Take a 50 question diagnostic quiz without notes"
                - "Rank your five weakest topics and put them first in the plan"
            - name: Statistical software set-up for belt work
              description: |-
                ## Purpose
                Every Green Belt project needs control charts, capability studies and hypothesis tests, and the exam expects you to read their output. Picking one tool, whether Minitab, JMP, a spreadsheet with an analysis add-in, or R or Python, and proving it can produce the six charts you will use most avoids learning software in the middle of a project.

                ## Milestones
                1. One tool chosen, with licence or trial dates noted if it is paid.
                2. A sample dataset loaded and a histogram, Pareto chart and run chart produced.
                3. An individuals control chart and a capability study run on the same data.
                4. A two-sample t-test run and its p-value and confidence interval read correctly.

                ## Notes
                Ask your employer first: many quality or engineering teams already hold a licence. Trial licences tend to expire mid-project, so start the trial when the data arrives, not when you start studying.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One statistics tool is installed and has produced a histogram, Pareto, run chart, control chart, capability study and t-test on sample data."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your quality or engineering team which statistics tool they license"
                - "Install the chosen tool and load a sample dataset"
                - "Produce a histogram, Pareto chart and run chart from the sample"
                - "Run an individuals chart, a capability study and a two-sample t-test"
            - name: Choosing a Green Belt course or self-study route
              description: |-
                ## Purpose
                Courses range from a few days of classroom teaching to self-paced online modules, and the right one depends on whether your employer pays, whether you learn better with a cohort, and whether the course includes project coaching. A written comparison of two courses against a self-study plan with a recognised handbook keeps the decision about what you need, not the best marketing.

                ## Milestones
                1. Two courses and one self-study option compared on cost, hours, format and project coaching.
                2. Each course checked for alignment with your chosen body's Body of Knowledge.
                3. Funding discussed with your manager or training budget holder.
                4. One route booked or bought, with start date recorded.

                ## Notes
                Start from the **Purchase decision** template. Project coaching from someone who has run real projects is worth more than extra video hours.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A course or self-study route is chosen from a written comparison of three options and booked with a start date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist two Green Belt courses and one recognised handbook"
                - "Compare their hours, cost, format and whether project coaching is included"
                - "Ask your manager whether the training budget covers the course"
                - "Book the chosen course or buy the handbook and note the start date"
            - name: Green Belt study calendar with an exam window
              description: |-
                ## Purpose
                Study for a Green Belt usually stretches over three to six months alongside a job, and without dates it drifts. A calendar that runs from today to a target exam window, with DMAIC phases in order, a practice exam each month and buffer weeks, makes it obvious within a fortnight when you are falling behind.

                ## Milestones
                1. A target exam month chosen, with a fallback month one cycle later.
                2. Weekly study hours agreed with yourself and anyone you share time with.
                3. Each DMAIC phase and the statistics topics assigned to specific weeks.
                4. Monthly practice exams and two buffer weeks marked on the calendar.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated study calendar runs from now to a target exam month, with each phase assigned to weeks and monthly practice exams marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a target exam month and a fallback month"
                - "Decide how many hours a week you can study, honestly"
                - "Assign Define, Measure, Analyse, Improve and Control to calendar weeks"
                - "Mark a practice exam in each month and two empty buffer weeks"
            - name: Open-book reference binder and formula sheet
              description: |-
                ## Purpose
                Where the exam allows reference material, candidates lose more time hunting through a heavy textbook than they gain from having it. A tabbed binder or formula sheet built during study, with tables, control chart constants and worked examples in the order you will need them, turns a reference into a tool.

                ## Milestones
                1. The awarding body's current rule on allowed reference material confirmed.
                2. A formula sheet covering capability indices, sigma level, sample size and common tests.
                3. Statistical tables and control chart constants tabbed for quick lookup.
                4. The binder used in at least two timed practice exams and trimmed afterwards.

                ## Notes
                If your exam is closed book, turn this into a one-page summary you rewrite from memory each week instead.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tabbed reference binder or formula sheet exists, has been used in two timed practice exams, and complies with the current exam rules."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm what reference material your exam currently allows"
                - "Write a formula sheet for Cp, Cpk, sigma level and sample size"
                - "Tab the z, t and chi-square tables and the control chart constants"
                - "Trim the binder after each timed practice exam"
            - name: Yellow Belt certificate in the first six weeks
              description: |-
                ## Purpose
                Yellow Belt study covers the vocabulary of DMAIC, basic process mapping and simple data tools, and earning it early gives you a quick win and a language your colleagues will recognise when you ask for a project. Finishing it within six weeks also tests whether your study routine works before the larger Green Belt effort.

                ## Milestones
                1. A Yellow Belt course or exam chosen that is consistent with your Green Belt route.
                2. The course material finished and notes kept on DMAIC, SIPOC and basic charts.
                3. The Yellow Belt exam or assessment passed.
                4. The certificate saved and added to your professional profile.

                ## Notes
                Some routes let you skip Yellow Belt entirely. Take it if it costs little and helps you secure a project, not because it is a prerequisite.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A Yellow Belt certificate is held within 45 days of starting and saved with your certification records."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Check whether your Green Belt route expects or skips a Yellow Belt"
                - "Enrol on a Yellow Belt course that matches your chosen body"
                - "Finish the course material and the end-of-module quizzes"
                - "Sit the Yellow Belt assessment and save the certificate"
            - name: Sponsor agreement for a Green Belt project
              description: |-
                ## Purpose
                A Green Belt project without a sponsor stalls the first time it needs data access, a process change or someone's time. Agreeing with a manager or process owner who will sponsor the work, what they want improved and how much of your time it can take, gives the project authority before it starts.

                ## Milestones
                1. A sponsor named who owns or controls the process you will work on.
                2. The business problem they care about stated in their words.
                3. Time for project work agreed in hours per week.
                4. A first tollgate date set for the end of the Define phase.

                ## Notes
                The best sponsor is the person who feels the pain of the problem every week, not the most senior person available.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named sponsor has agreed the problem, your weekly project hours and a date for the Define tollgate."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List three managers whose processes have a measurable recurring problem"
                - "Book 30 minutes with the strongest candidate to discuss sponsorship"
                - "Agree the problem, your weekly hours and data access"
                - "Put the Define tollgate date in both calendars"
            - name: Selecting a Green Belt project you can finish
              description: |-
                ## Purpose
                Most failed Green Belt projects were too big, had no data, or already had a solution someone wanted rubber-stamped. Scoring a few candidate problems against size, data availability, business value and whether the root cause is genuinely unknown picks one you can close in three to six months.

                ## Milestones
                1. At least three candidate problems listed with a rough metric for each.
                2. Each scored on scope, data availability, value and whether the cause is unknown.
                3. The chosen project narrowed to one process, one primary metric and one site or team.
                4. The choice confirmed with your sponsor and recorded.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One project is selected from at least three scored candidates, scoped to one process and metric, and confirmed by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down three recurring problems you see in your sponsor's process"
                - "Score each on scope, data, value and whether the cause is known"
                - "Narrow the winner to one process, one metric and one team"
                - "Confirm the selection with your sponsor in writing"
            - name: Weekly belt study blocks
              description: |-
                ## Purpose
                Short, protected blocks on fixed days do more for statistics than a heroic weekend before the exam. Two weekday blocks plus a weekly planning slot keep you moving through the calendar and show early when work or family is eating the time.

                ## Milestones
                1. Two study blocks on fixed days each week in the calendar.
                2. Each block tied to a specific topic from the study calendar.
                3. A weekly planning slot that checks progress against the calendar.
                4. Missed blocks counted each month and the plan adjusted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 80 percent of planned study blocks are completed in each month, recorded in the study log."
                cadence: rolling
              tasks:
                - "Block two 90 minute study slots on fixed weekdays"
                - "Work through the scheduled topic in each study block @recurring(weekly:tue,thu)"
                - "Plan next week's topics against the study calendar @recurring(weekly:sun)"
                - "Count missed blocks and move topics if you are behind"
            - name: Ten-minute daily statistics drill
              description: |-
                ## Purpose
                Exam questions on sigma level, capability and hypothesis tests are fast if you have done fifty of them and slow if you have done five. Ten minutes of calculation each day, with a calculator and no notes, builds the speed that open-book references cannot give you.

                ## Milestones
                1. A bank of at least 150 calculation questions gathered from practice books.
                2. Ten questions done on most days with time taken noted.
                3. Average time per calculation question falling month on month.
                4. Every topic in the statistics section drilled at least twice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Daily drill sheets show at least five sessions a week for a month and a falling average time per question."
                cadence: rolling
              tasks:
                - "Collect 150 calculation questions from practice books into one folder"
                - "Do ten timed statistics questions without notes @recurring(daily)"
                - "Record your average time per question at the end of each week"
                - "Rotate drill topics so no statistics section goes untouched"
            - name: Monthly timed practice exam and score log
              description: |-
                ## Purpose
                Sitting a full timed practice exam each month is the only reliable test of readiness, because it measures pacing and stamina as well as knowledge. Logging the score by DMAIC phase shows which parts of the plan are working and when you are consistently above the margin you set for booking.

                ## Milestones
                1. A source of full-length practice exams aligned to your Body of Knowledge.
                2. One timed practice exam completed each month under exam conditions.
                3. Scores logged overall and by phase in a single log.
                4. A readiness threshold set and three consecutive results compared against it.

                ## Notes
                Start from the **Metrics log** template. Pick a threshold comfortably above the pass mark you have read about, because practice exams vary in difficulty.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The score log holds a timed full-length practice exam for each month of study, scored overall and by DMAIC phase."
                cadence: rolling
              tasks:
                - "Buy or find a set of full-length practice exams for your route"
                - "Sit a full practice exam under timed conditions @recurring(monthly:12)"
                - "Log the score overall and by phase in the metrics log"
                - "Retest your weakest phase with a short quiz @recurring(monthly:19)"
            - name: Wrong-answer log and weekly review
              description: |-
                ## Purpose
                Reading the explanation for a wrong answer and moving on means you will get the same question wrong next month. Logging every miss with its topic and the reason, whether a concept gap, a misread question or a calculation slip, shows a pattern within three weeks.

                ## Milestones
                1. A wrong-answer log with columns for topic, reason and correct method.
                2. Every missed practice question entered within a day.
                3. A weekly review that reworks the misses without looking at the answer.
                4. The three most common reasons for error named and addressed in the plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The wrong-answer log is updated after every practice session and reviewed weekly, with recurring error types named."
                cadence: rolling
              tasks:
                - "Set up a wrong-answer log with topic, reason and method columns"
                - "Rework the week's missed questions without the answers @recurring(weekly:wed)"
                - "Tag each miss as concept gap, misread or calculation slip"
                - "Add the top error type to next month's study plan"
            - name: Weekly Green Belt project log
              description: |-
                ## Purpose
                Tollgate reviews, the final storyboard and any project affidavit all depend on a record of what you did, when and what the data showed. A short weekly entry saves days of reconstruction at the end and makes it easy to see when the project has quietly stalled.

                ## Milestones
                1. A project log started with the charter, sponsor and primary metric at the top.
                2. A weekly entry of actions, data gathered, decisions and blockers.
                3. Charts and files referenced by name and date in each entry.
                4. Scope changes recorded with the date and the sponsor's agreement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The project log has an entry for every week since the charter was signed, with charts referenced and scope changes dated."
                cadence: rolling
              tasks:
                - "Start the project log with charter, sponsor and primary metric"
                - "Write the week's actions, data, decisions and blockers @recurring(weekly:fri)"
                - "Check the charter still matches the work and note any scope change @recurring(monthly:27)"
                - "File charts with dated names that match the log entries"
            - name: Monthly sponsor check-in and tollgates
              description: |-
                ## Purpose
                Sponsors lose interest between tollgates, and Green Belts often reach Improve to find the sponsor wants something different. A monthly half hour, plus a formal tollgate at the end of each DMAIC phase, keeps the problem, the scope and the support aligned.

                ## Milestones
                1. A standing monthly check-in in the sponsor's calendar.
                2. A one-page update prepared for each check-in with metric, progress and asks.
                3. A tollgate held at the end of each phase with the decision recorded.
                4. Every blocker raised in a check-in closed or escalated within a month.

                ## Notes
                Start from the **Meeting notes** template. End every tollgate with an explicit go, hold or rescope decision and write it down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Meeting notes exist for a monthly sponsor check-in and for each phase tollgate, each ending with a recorded decision."
                cadence: rolling
              tasks:
                - "Book a standing monthly half hour with your sponsor"
                - "Send a one-page update and hold the sponsor check-in @recurring(monthly:20)"
                - "Record a go, hold or rescope decision at each tollgate"
                - "Chase every open blocker raised at the last check-in"
            - name: Weekly gemba walk on the project process
              description: |-
                ## Purpose
                Process maps drawn at a desk describe how people think the work happens. Going to where the work is done once a week, watching and asking rather than fixing, catches the workarounds, waits and rework that never appear in the system data.

                ## Milestones
                1. A permission or courtesy agreed with the team lead for regular visits.
                2. A walk of at least 30 minutes held most weeks, in person or by screen share for office work.
                3. Observations written up the same day, separated from opinions.
                4. At least three observations that changed the process map or data plan.

                ## Notes
                On a plant floor, follow the site's induction, PPE and permit rules on every visit, and never adjust equipment yourself.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Gemba notes exist for most weeks of the project, with at least three observations that changed the map or the data plan."
                cadence: rolling
              tasks:
                - "Ask the team lead when you can observe the process without disrupting it"
                - "Walk the process for 30 minutes and note what you see @recurring(weekly:thu)"
                - "Separate observations from opinions when writing up the notes"
                - "Update the process map with anything the walk revealed"
            - name: Quarterly Body of Knowledge re-score
              description: |-
                ## Purpose
                Confidence drifts upward faster than ability, so re-scoring the Body of Knowledge every quarter and checking it against practice exam results keeps the study plan honest. It also catches topics you have not touched since the first month.

                ## Milestones
                1. The baseline sheet re-scored topic by topic each quarter.
                2. Each self-score compared with practice exam results for that topic.
                3. Topics with a large gap between confidence and results flagged.
                4. The next quarter's study weeks rearranged around the flagged topics.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The Body of Knowledge sheet shows a dated re-score each quarter beside practice exam results, with flagged topics moved into the plan."
                cadence: rolling
              tasks:
                - "Re-score every Body of Knowledge topic from 0 to 3 @recurring(quarterly)"
                - "Compare each self-score with your practice exam results"
                - "Flag topics where confidence is higher than results"
                - "Move flagged topics into the next quarter's study weeks"
            - name: Define phase charter, SIPOC and customer voice
              description: |-
                ## Purpose
                The Define phase is where most projects succeed or fail, and the exam tests it more than candidates expect. Learning to write a problem statement with a baseline and no solution in it, a SIPOC that fixes the boundaries, and critical-to-quality requirements drawn from customer voices gives you both exam marks and a sound charter.

                ## Milestones
                1. A problem statement written for your project with metric, baseline, gap and no solution.
                2. A SIPOC drawn with start and end points agreed by the sponsor.
                3. At least five voice of the customer statements translated into measurable requirements.
                4. Practice questions on Define scored at or above your readiness threshold.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A signed charter with a solution-free problem statement and SIPOC exists, and Define practice questions meet your threshold."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Study the Define chapter of your handbook and its worked charter"
                - "Write a problem statement with metric, baseline and gap, and no solution"
                - "Draw a SIPOC and agree its boundaries with the sponsor"
                - "Turn five customer comments into measurable requirements"
            - name: Process mapping with swimlanes and value stream maps
              description: |-
                ## Purpose
                Examiners expect a Green Belt to map a process at the right level: a high-level map for scope, a swimlane for handoffs, and a value stream map showing wait and touch time. Practising on real processes until you can map one in an hour makes the Measure phase far quicker.

                ## Milestones
                1. A swimlane map of your project process with every handoff marked.
                2. A current-state value stream map with process time, wait time and inventory or queues.
                3. Value-adding and non-value-adding steps labelled and the ratio calculated.
                4. Maps checked with the people who do the work.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A swimlane map and a current-state value stream map of the project process exist and have been checked by the people who run it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Learn the standard symbols for swimlane and value stream maps"
                - "Map your project process as a swimlane with every handoff"
                - "Add process and wait times to build a value stream map"
                - "Map one other everyday process at work for practice @recurring(monthly:3)"
            - name: Data collection plans and operational definitions
              description: |-
                ## Purpose
                Two people counting defects differently will produce data that looks like variation but is really disagreement. Learning to write an operational definition for each measure, then a data collection plan covering who, when, how many and stratification factors, is the skill that makes every later chart trustworthy.

                ## Milestones
                1. An operational definition written for the primary metric and two secondary ones.
                2. A data collection plan covering source, frequency, sample size and owner.
                3. Stratification factors such as shift, team, product or day chosen in advance.
                4. A pilot week of data collected and checked for gaps.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A data collection plan with operational definitions and stratification factors exists, and a pilot week of data has been checked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write an operational definition for the project's primary metric"
                - "Choose stratification factors before collecting any data"
                - "Draft a collection plan naming source, frequency, sample and owner"
                - "Collect one pilot week and check it for missing records"
            - name: Measurement system analysis for a Green Belt
              description: |-
                ## Purpose
                If the measurement system cannot tell good from bad, every capability study and hypothesis test built on it is wrong. Running a gauge R&R for continuous data, or an attribute agreement study for pass and fail judgements, is a standard Green Belt step that many skip and examiners love to test.

                ## Milestones
                1. The difference between repeatability, reproducibility, bias and stability explained in your own words.
                2. A gauge R&R or attribute agreement study planned with parts, appraisers and trials.
                3. The study run and its result compared with common acceptance guidelines.
                4. A decision recorded on whether the measurement system is fit to use.

                ## Notes
                For office processes, the measurement system is often a person classifying tickets or invoices. An attribute agreement study among three of them is just as valid and often more revealing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed gauge R&R or attribute agreement study for the project metric exists, with a recorded decision on fitness for use."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Study gauge R&R and attribute agreement in your handbook"
                - "Plan a study with ten items, three appraisers and two trials"
                - "Run the study in your statistics tool and read the result"
                - "Record whether the measurement system is fit for the project"
            - name: Descriptive statistics, distributions and process capability
              description: |-
                ## Purpose
                Mean, standard deviation, the normal distribution and capability indices sit underneath half the Green Belt exam. Working through them on your own project data, including checking normality and calculating Cp, Cpk and sigma level, turns formulas into something you can explain to a sponsor.

                ## Milestones
                1. Mean, median, range and standard deviation calculated by hand and checked in software.
                2. A normality check run on project data and the result interpreted.
                3. Cp and Cpk calculated against the customer's specification limits.
                4. Baseline sigma level or defects per million stated for the project.

                ## Notes
                Capability only means something for a process that is stable. Look at a control chart before quoting Cpk to anyone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Baseline Cp, Cpk and sigma level for the project metric are calculated on stable data, with normality checked and recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Work the descriptive statistics chapter problems by hand"
                - "Run a normality check on your project baseline data"
                - "Calculate Cp and Cpk against the specification limits"
                - "Convert the baseline defect rate to a sigma level"
            - name: Fishbone, 5 whys and Pareto for root causes
              description: |-
                ## Purpose
                Qualitative tools in the Analyse phase generate the suspects that statistics then test, and teams that skip them end up testing whichever cause the loudest person favours. Practising a fishbone session, a 5 whys chain and a Pareto of defect types on real data gives you a list of causes worth checking.

                ## Milestones
                1. A fishbone diagram built with the people who run the process.
                2. A 5 whys chain written for the top defect type that stops at a controllable cause.
                3. A Pareto chart showing which categories account for most of the defects.
                4. A short list of suspected causes, each with a way to test it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A fishbone, a 5 whys chain and a Pareto chart exist for the project, producing a list of testable suspected causes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a 45 minute fishbone session with three process operators"
                - "Build a Pareto chart of defect categories from the baseline data"
                - "Write a 5 whys chain for the largest Pareto bar"
                - "List each suspected cause beside the data that would test it"
            - name: Hypothesis tests a Green Belt is expected to run
              description: |-
                ## Purpose
                Green Belts are expected to choose and interpret the common tests, not derive them: t-tests, paired tests, proportion tests, chi-square, one-way ANOVA, correlation and simple regression. Building a decision chart of which test fits which data, then running each one on real or textbook data, is what the exam's harder questions reward.

                ## Milestones
                1. A one-page test selection chart by data type and number of groups.
                2. Null and alternative hypotheses, p-values and type I and II errors explained in your own words.
                3. Each common test run at least once in your statistics tool.
                4. At least one suspected root cause tested on project data and the result recorded.

                ## Notes
                Factorial experiments, multiple regression and response surface designs belong to Black Belt study. Know they exist, but do not let them crowd out the basic tests.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A test selection chart exists, each common test has been run once, and one project root cause has been tested with its result recorded."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Draw a test selection chart by data type and number of groups"
                - "Run a two-sample t-test, chi-square and one-way ANOVA on textbook data"
                - "Fit a simple regression and interpret the slope and R-squared"
                - "Test one suspected root cause on your project data"
            - name: Lean tools for the Improve phase
              description: |-
                ## Purpose
                Many Green Belt fixes are lean tools rather than statistics: 5S, standard work, mistake-proofing, pull systems and quick changeover. Learning when each one fits, and which root cause it actually addresses, stops you reaching for a new form or checklist when a mistake-proof design would remove the error.

                ## Milestones
                1. Each of 5S, standard work, mistake-proofing, kanban and changeover reduction summarised with one example.
                2. Each verified root cause matched to the lean tool that addresses it.
                3. One mistake-proofing idea designed for the project's top defect.
                4. Improve phase practice questions scored at or above your threshold.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each verified root cause is matched to a lean tool, one mistake-proofing design exists, and Improve practice questions meet your threshold."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Summarise five lean tools with one workplace example each"
                - "Match every verified root cause to a lean tool that removes it"
                - "Sketch a mistake-proofing design for the top defect"
                - "Answer 30 Improve phase practice questions and log the score"
            - name: Control charts and control plans
              description: |-
                ## Purpose
                Fixes that are not held in place drift back within months, and the Control phase is how a Green Belt proves it will not. Knowing which control chart suits which data, reading the common out-of-control rules, and writing a control plan with owners and reaction steps is both an exam topic and the end of your project.

                ## Milestones
                1. A chart selection guide covering individuals, X-bar and R, p and u charts.
                2. The common out-of-control rules recognised on practice charts.
                3. A control chart built for the project metric with limits from stable data.
                4. A draft control plan naming the measure, frequency, owner and reaction plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A control chart for the project metric and a draft control plan with owner and reaction steps exist, and chart rules are recognised in practice questions."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a guide to which control chart suits which data type"
                - "Practise spotting out-of-control rules on twenty sample charts"
                - "Build a control chart for your project metric from stable data"
                - "Draft a control plan with owner, frequency and reaction steps"
            - name: Baseline data pull for the project's primary metric
              description: |-
                ## Purpose
                Without a baseline, any improvement claim is an opinion. Pulling at least several weeks of history for the primary metric, checking it against the operational definition and charting it over time shows whether the problem is as big as the charter says and whether the process is stable.

                ## Milestones
                1. Historical data for the primary metric extracted from the system of record.
                2. The extract checked against the operational definition and cleaned, with exclusions noted.
                3. A run chart or control chart of the baseline period.
                4. The baseline figure updated in the charter and agreed with the sponsor.

                ## Notes
                Ask the agent to summarise a messy extract into a cleaning log if it helps, but check every exclusion yourself.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cleaned baseline dataset and a time-ordered chart of the primary metric exist, and the charter's baseline matches them."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Request access to the system that records the primary metric"
                - "Extract the history and save a raw copy before cleaning"
                - "Ask the agent to draft a cleaning log of exclusions and their reasons"
                - "Chart the baseline over time and update the charter figure"
            - name: Verifying root causes with data before choosing fixes
              description: |-
                ## Purpose
                Teams love to jump from a fishbone to a solution, and that is how projects spend months fixing causes that were never real. Testing each suspected cause with data, or a small controlled check, leaves you with two or three verified causes that explain most of the gap.

                ## Milestones
                1. Each suspected cause listed with the test or comparison that would confirm it.
                2. Data gathered and each test run, with results recorded.
                3. Causes marked verified, rejected or unresolved.
                4. The verified causes presented at the Analyse tollgate.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cause verification table shows each suspected cause, its test, the result and a verified or rejected status, presented at the Analyse tollgate."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build a table of suspected causes and how to test each"
                - "Gather the stratified data each test needs"
                - "Mark every cause as verified, rejected or unresolved"
                - "Present the verified causes at the Analyse tollgate"
            - name: Solution selection matrix and pilot plan
              description: |-
                ## Purpose
                Once causes are verified there are usually more possible fixes than time to try them. Scoring candidates against impact on the verified causes, cost, effort and risk, then planning a small pilot for the winner, keeps the Improve phase evidence-based and gives the sponsor a clear choice.

                ## Milestones
                1. At least five candidate solutions generated with the process team.
                2. A selection matrix scoring each on impact, cost, effort and risk.
                3. A risk check such as a simple FMEA on the chosen solution.
                4. A pilot plan with scope, duration, success measure and rollback steps.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored selection matrix and a written pilot plan with success measure and rollback steps are approved by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Hold a 30 minute idea session with the process team"
                - "Score each candidate on impact, cost, effort and risk"
                - "List what could go wrong with the chosen fix and how to prevent it"
                - "Write a pilot plan with a success measure and rollback steps"
            - name: Pilot run with a before-and-after comparison
              description: |-
                ## Purpose
                A pilot proves the fix works in real conditions before it changes the whole process. Running it for long enough to collect a fair sample, then comparing before and after with the right test and a chart, gives you a result that survives a sceptical sponsor or finance partner.

                ## Milestones
                1. The pilot run for its planned duration in the agreed scope.
                2. After-data collected with the same operational definition as the baseline.
                3. A before-and-after chart and a hypothesis test showing whether the change is real.
                4. A go, adjust or stop decision recorded with the sponsor.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Pilot data compared with baseline using a chart and an appropriate test, with a recorded go, adjust or stop decision."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Brief everyone in the pilot area on the change and the dates"
                - "Collect after-data using the baseline operational definition"
                - "Plot before and after on one chart and run the right test"
                - "Agree a go, adjust or stop decision with the sponsor"
            - name: Project benefits validated with finance
              description: |-
                ## Purpose
                Claimed savings that finance has never seen are the fastest way to make Six Sigma look like theatre. Working out hard savings, cost avoidance and non-financial benefits with a finance partner, using their method and their figures, gives your project numbers that hold up on a CV and in an affidavit.

                ## Milestones
                1. The benefit categories your organisation recognises confirmed with finance.
                2. Hard savings calculated from the before-and-after data using finance's method.
                3. Soft benefits such as time, safety or customer experience described separately.
                4. The benefits summary signed off or acknowledged by finance in writing.

                ## Notes
                Never annualise a pilot result without saying so. State the period the savings cover and the assumptions behind them.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A benefits summary separating hard savings from soft benefits, with assumptions and period stated, is acknowledged by finance in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask finance which benefit categories and methods they accept"
                - "Calculate hard savings from the before-and-after data"
                - "Describe soft benefits separately with their own measures"
                - "Get the benefits summary acknowledged by finance in writing"
            - name: Control plan handover to the process owner
              description: |-
                ## Purpose
                Your Green Belt project ends when someone else owns the improved process and knows what to do if the metric drifts. Handing over a control plan, updated standard work and a live control chart, then watching it for a few months, is the difference between a closed project and a temporary fix.

                ## Milestones
                1. Standard work or procedures updated to reflect the new process.
                2. The control plan agreed with the process owner, including reaction steps.
                3. A live control chart updated by the process owner's team.
                4. Three months of stable results recorded after handover.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The process owner has signed the control plan, the team maintains the control chart, and three months of post-handover results are stable."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Update the standard work documents with the process owner"
                - "Walk the process owner through the control plan's reaction steps"
                - "Plot the latest week's point on the control chart @recurring(weekly:mon)"
                - "Review the month's control chart with the process owner @recurring(monthly:5)"
            - name: Exam readiness decision to book, delay or rethink
              description: |-
                ## Purpose
                Booking too early wastes a fee and confidence; waiting for perfect scores means never sitting. A dated decision based on three practice exam results, your weakest phase and the time left in the calendar takes the emotion out of when to book.

                ## Milestones
                1. The last three practice exam scores set against your readiness threshold.
                2. The weakest phase named with its most recent score.
                3. A decision recorded to book, delay by a set number of weeks, or change study approach.
                4. The calendar updated to match the decision.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated readiness decision cites three practice scores against the threshold and the calendar reflects it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Put your last three practice scores beside the readiness threshold"
                - "Name the weakest phase and its latest score"
                - "Decide to book, delay or change approach and write down why"
                - "Move the remaining calendar weeks to match the decision"
            - name: Booking the Green Belt exam
              description: |-
                ## Purpose
                Exam booking involves an account with the awarding body, any eligibility review, and a choice between a test centre and remote proctoring with its own room and identification rules. Doing it carefully a few weeks out avoids a rejected application or a surprise system check on the day.

                ## Milestones
                1. An account created with the awarding body and any eligibility documents submitted.
                2. Test centre or remote proctoring chosen, with its current rules read.
                3. A date booked that leaves at least three weeks of final preparation.
                4. Confirmation, identification requirements and reschedule deadline saved.

                ## Notes
                If you choose remote proctoring, run the vendor's system check on the computer and network you will use, on the same day of the week and time.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An exam date is booked, with the confirmation, identification rules and reschedule deadline saved in your records."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create or update your account with the awarding body"
                - "Read the current test centre and remote proctoring rules"
                - "Book a date at least three weeks after your last practice exam"
                - "Save the confirmation and note the reschedule deadline"
            - name: Final three weeks before the Green Belt exam
              description: |-
                ## Purpose
                The last three weeks are for consolidation, not new topics: full practice exams, the wrong-answer log, the formula sheet and sleep. A written plan stops the panic of reopening the whole textbook and keeps attention on the phases that still cost marks.

                ## Milestones
                1. Two full timed practice exams completed in the final three weeks.
                2. Every entry in the wrong-answer log reworked once more.
                3. The reference binder or one-page summary finalised.
                4. No new material started in the last four days.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The final three weeks include two timed practice exams, a full rework of the wrong-answer log and a finished reference set."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Schedule two full practice exams in the final three weeks"
                - "Review twenty flashcards from the wrong-answer log @recurring(daily)"
                - "Finalise the reference binder or one-page summary"
                - "Stop new topics four days before the exam"
            - name: Green Belt exam day plan
              description: |-
                ## Purpose
                Long multiple-choice exams with calculations reward a pacing plan more than last-minute revision. Knowing your time per question, when to flag and move on, what to bring and how you will get there or set up the room removes avoidable risk from the day.

                ## Milestones
                1. A pacing plan with time checkpoints through the exam.
                2. A flag-and-return rule for long calculation questions.
                3. Identification, approved calculator and allowed references packed the night before.
                4. Travel or remote set-up planned with a buffer of at least 30 minutes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written exam day plan covers pacing checkpoints, a flag rule, a packed kit list and travel or set-up with a buffer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out minutes per question and set three time checkpoints"
                - "Decide your rule for flagging long calculations"
                - "Pack identification, calculator and allowed references the night before"
                - "Plan the route or room set-up with a 30 minute buffer"
            - name: Final project storyboard and closing tollgate
              description: |-
                ## Purpose
                The project storyboard is how your work is judged: by the sponsor, by any awarding body that reviews projects, and later by interviewers. A clear DMAIC story on a dozen slides or an A3, with the baseline, verified causes, the fix, the before-and-after result and the control plan, closes the project properly.

                ## Milestones
                1. A storyboard or A3 drafted with one page per DMAIC phase.
                2. Each claim supported by a chart or table from the project log.
                3. The closing tollgate held with the sponsor and process owner.
                4. Formal closure recorded and any affidavit or sign-off completed.
              priority: high
              deadlineOffsetDays: 200
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A DMAIC storyboard backed by project data is presented at a closing tollgate and the project is formally signed off."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Outline the storyboard with one page per DMAIC phase"
                - "Pull the key charts from the project log into the storyboard"
                - "Rehearse the closing presentation once with a colleague"
                - "Hold the closing tollgate and complete the sign-off"
            - name: Exam result, certificate and retake plan
              description: |-
                ## Purpose
                Whatever the result, a few things need doing within days: saving the certificate or score report, updating records and, if you missed, turning the diagnostic feedback into a short retake plan while it is fresh. Many candidates who fail by a small margin pass next time with four focused weeks.

                ## Milestones
                1. The score report and any certificate downloaded and filed.
                2. The certificate number and any validity period recorded.
                3. On a pass, your profile and CV updated.
                4. On a miss, a four to eight week retake plan built from the score report.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The result is filed with certificate details recorded, and either your profile is updated or a dated retake plan exists."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the score report and certificate when they are released"
                - "Record the certificate number and validity period"
                - "Read the retake waiting period and fee if you did not pass"
                - "Build a retake plan from the weakest areas in the score report"
            - name: Green Belt in an office or service process
              description: |-
                ## Purpose
                For knowledge workers, defects are late invoices, reopened tickets, onboarding errors or slow approvals, and the data lives in workflow systems rather than on gauges. Adapting DMAIC to transactional work, with lead time, first-pass yield and error rates as metrics, makes the project credible to colleagues who have never seen a control chart.

                ## Milestones
                1. A transactional metric such as lead time, first-pass yield or error rate chosen and defined.
                2. Data extracted from the workflow, ticketing or finance system.
                3. Handoffs and queues identified on a swimlane map as the main sources of delay.
                4. Results presented in business terms such as days saved or rework avoided.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "An office or service project uses a defined transactional metric drawn from system data, with results stated in days, rework or cost."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose lead time, first-pass yield or error rate as the main metric"
                - "Find the system field that records start and end of each case"
                - "Pull the week's case data and refresh the lead time chart @recurring(weekly:mon)"
                - "Express results as days saved or rework avoided"
            - name: Green Belt for an engineer on a plant or production line
              description: |-
                ## Purpose
                Engineers on a plant or line have rich data from sensors and inspections but also safety rules, shift patterns and change control that an office project never meets. Running DMAIC there means involving operators across shifts, respecting management of change for any process adjustment, and validating gauges before trusting readings.

                ## Milestones
                1. The project registered with the site's management of change or engineering change process.
                2. Operators from every shift involved in mapping and root cause sessions.
                3. Gauges used for the project metric checked by measurement system analysis.
                4. Any process change trialled under the site's permit and approval rules.

                ## Notes
                Safety is never a trade-off in a selection matrix. Any change to equipment, settings or procedures goes through the site's approval process, and anyone can stop a trial that looks unsafe.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A plant project has its change registered under management of change, operators from every shift involved, and its gauges verified."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the site engineer how the management of change process handles trials"
                - "Invite operators from every shift to the mapping session"
                - "Schedule a gauge study on the project's critical measurement"
                - "Get written approval before trialling any process setting change"
            - name: Green Belt in a regulated setting
              description: |-
                ## Purpose
                In healthcare, pharmaceuticals, food or aviation, a process change can need validation, quality approval or ethics review before it is piloted. Building those steps into the project plan from the Define phase avoids a finished analysis that cannot legally be implemented.

                ## Milestones
                1. The quality or regulatory approvals the change will need identified with the quality team.
                2. Patient, product or data confidentiality rules for project data agreed.
                3. The pilot plan approved through the relevant change control or validation route.
                4. Updated procedures released through the controlled document system.

                ## Notes
                Ask the quality team first. They usually know a Six Sigma route through change control that has worked before.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A regulated-setting project has its required approvals identified at Define and its pilot approved through change control before it runs."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the quality team which approvals a process change would need"
                - "Agree how project data will be anonymised or restricted"
                - "Submit the pilot plan through change control or validation"
                - "Release updated procedures through the controlled document system"
            - name: Self-funded Green Belt without an employer project
              description: |-
                ## Purpose
                Candidates between roles or without employer support can still earn a credible Green Belt, but they need a real process to improve and a way to pay that does not stretch the budget. A small business, a charity, a community group or a personal process with genuine data can host the project, and a careful cost plan covers the exam.

                ## Milestones
                1. A host organisation or process found with a measurable problem and willing owner.
                2. Data access and confidentiality agreed with the host in writing.
                3. A budget for study materials, exam and any retake set aside.
                4. The project completed and written up with the host's acknowledgement.

                ## Notes
                Check whether your chosen route accepts a volunteer or personal project before you start, if a project is part of certification.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A Green Belt project is completed for a named host organisation with written data agreement and acknowledgement, within a set budget."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List three local organisations with a process you could measure"
                - "Approach one with a short offer of a free improvement project"
                - "Agree data access and confidentiality with the host in writing"
                - "Set aside a budget for materials, exam and one retake"
            - name: Studying around shift work or a young family
              description: |-
                ## Purpose
                Shift workers and parents rarely get two clean evenings a week, so the standard plan breaks within a month. A plan built on short sessions at predictable moments, such as commutes, breaks or after bedtime, with a longer block when a partner or rota allows, keeps progress steady.

                ## Milestones
                1. The predictable free moments in a typical fortnight listed.
                2. Study tasks sized to fit 15, 30 and 60 minute windows.
                3. One longer block a week agreed with your partner, family or rota.
                4. The exam window set around known busy periods such as school holidays or peak season.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A study plan of sized tasks mapped to real free moments exists, with one agreed long block a week and an exam window clear of busy periods."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the free moments in a typical fortnight of your rota"
                - "Sort study tasks into 15, 30 and 60 minute sizes"
                - "Agree one weekly long block with your partner or family"
                - "Hold the agreed long study block for the hardest topic @recurring(weekly:sat)"
            - name: Contributing as a Yellow Belt on a team project
              description: |-
                ## Purpose
                Yellow Belts usually serve on someone else's Green or Black Belt project, collecting data, mapping their part of the process and testing fixes. Doing that role well, with clear tasks and good records, builds the experience and the reputation that make your own Green Belt project easier to get.

                ## Milestones
                1. A project lead agreed who will include you on their team.
                2. Your role and deliverables written down with the lead.
                3. Data collection or mapping tasks completed to the agreed standard.
                4. Your contribution summarised in the project log for your own records.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your agreed tasks on a team improvement project are completed and summarised in writing, with the lead's acknowledgement."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask a Green or Black Belt at work whether they need a team member"
                - "Agree your role and deliverables with the project lead"
                - "Complete your data collection or mapping tasks on schedule"
                - "Write a short summary of your contribution for your records"
            - name: Green Belt project write-up for portfolio and CV
              description: |-
                ## Purpose
                Interviewers ask about the project, not the certificate. A one-page write-up with the problem, your role, the tools you used, the verified result and what you would do differently, plus a CV line with a real number, turns the belt into a story you can tell in two minutes.

                ## Milestones
                1. A one-page project summary with problem, role, tools, result and lessons.
                2. Confidential figures removed or expressed as percentages with permission.
                3. A CV line and profile entry with the belt, the awarding body and one measured result.
                4. A two-minute verbal version practised aloud.

                ## Notes
                Start from the **Portfolio piece** template, then update your CV from the **Resume** template. Ask your sponsor what you may share outside the organisation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page shareable project summary and an updated CV line with the belt and a measured result exist, cleared for external use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your sponsor which project figures you may share externally"
                - "Write a one-page summary of problem, role, tools, result and lessons"
                - "Add the belt and one measured result to your CV and profile"
                - "Refresh the write-up with any new results from the process owner @recurring(yearly)"
            - name: Second Green Belt project with less support
              description: |-
                ## Purpose
                A first project leans heavily on a coach and a forgiving sponsor. Running a second, smaller project with less help is where the method becomes yours, and it shows employers that the first result was not luck.

                ## Milestones
                1. A second project selected and chartered within six months of closing the first.
                2. Each DMAIC phase completed with fewer coaching hours than the first project.
                3. A verified before-and-after result and a control plan handed over.
                4. A comparison of the two projects noting what you did faster or better.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A second project is closed with a verified result and handed-over control plan, and a written comparison with the first exists."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Pick a smaller problem from the first project's unaddressed causes"
                - "Charter it with a sponsor and a three-month time box"
                - "Review progress against the charter on your own @recurring(monthly:8)"
                - "Write a short comparison of how the two projects went"
            - name: Running a Yellow Belt awareness session for your team
              description: |-
                ## Purpose
                Once you hold a Green Belt, the people around you are the best source of the next projects, and they need the basics to see problems as processes. A one-hour session on DMAIC, a SIPOC and a Pareto, using an example from your own work, spreads the language without turning into a course.

                ## Milestones
                1. A one-hour session outline using an example from your own project.
                2. A simple hands-on exercise such as a Pareto from real complaint data.
                3. The session delivered to at least one team.
                4. Problems raised by attendees captured as possible future projects.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-hour awareness session has been delivered to at least one team and the problems attendees raised are listed as candidate projects."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Outline a one-hour session built on your own project example"
                - "Prepare a Pareto exercise from real anonymised complaint data"
                - "Offer a short awareness session to a different team @recurring(quarterly)"
                - "List the problems attendees raise as candidate projects"
            - name: Six Sigma methods in software and IT operations
              description: |-
                ## Purpose
                Engineers in software and IT find that classic DMAIC fits incident volumes, deployment failure rates, lead time for changes and support queues, but the data is high-frequency and the process changes fast. Learning to apply control charts and capability thinking to that data, alongside the team's existing agile habits, makes Six Sigma useful rather than ceremonial in a tech team.

                ## Milestones
                1. One software or IT metric chosen, such as change failure rate or ticket reopen rate.
                2. Its data charted over time with the effect of releases or incidents marked.
                3. Common cause and special cause variation explained to the team with that chart.
                4. One improvement tested and its effect measured against the chart.

                ## Notes
                Ask the agent to draft a short note for the team explaining common and special cause with your chart, then edit it in your own words.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A software or IT metric is charted over time, its variation explained to the team, and one improvement measured against it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick one software or IT metric the team already tracks"
                - "Chart it over six months with releases and incidents marked"
                - "Ask the agent to draft a note on common and special cause using the chart"
                - "Measure one improvement against the chart"
            - name: Deciding whether and when to aim for Black Belt
              description: |-
                ## Purpose
                Black Belt is a much larger commitment in statistics and leadership, and it suits some careers far more than others. Deciding after your Green Belt, based on how much you enjoyed the analysis, whether your organisation has Black Belt roles and what employers in your field ask for, keeps you from drifting into another two years of study by default.

                ## Milestones
                1. Your enjoyment and strength in the statistics and leadership parts of the project rated honestly.
                2. Black Belt roles and requirements in your organisation or target employers checked.
                3. A conversation held with a Black Belt about what the role really involves.
                4. A decision recorded: pursue now, revisit on a date, or stay at Green Belt.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to pursue Black Belt now, revisit on a set date, or stay at Green Belt, based on a Black Belt conversation and job market check."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rate how much you enjoyed the statistics and leading parts of your project"
                - "Search job adverts in your field for Black Belt requirements"
                - "Book a coffee with a Black Belt to ask what the role involves"
                - "Record your decision and the date you will revisit it"
---

# Six Sigma Yellow and Green Belt

This area is for knowledge workers and engineers who want a Six Sigma Yellow Belt and then a Green Belt that means something: a passed exam and an improvement project with numbers a finance partner will sign. It starts with foundations (which awarding body, eligibility, a baseline against the Body of Knowledge, software, a study calendar, an early Yellow Belt and a sponsored project), then the study and project machinery, a project for each part of DMAIC and the statistics behind it, the decisions inside a live project, the exam and the final tollgate, plans for office, plant, regulated, self-funded and time-poor candidates, and specialist work such as a second project and teaching others.

The rhythm is a short daily statistics drill, study blocks, a wrong-answer review, a project log and a gemba walk each week, a monthly timed practice exam and sponsor check-in, a weekly control chart once the fix is live, and a quarterly re-score against the Body of Knowledge. The Purchase decision, Metrics log, Meeting notes, Portfolio piece and Resume templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
