---
id: quant-finance.quant-finance-self-study-curriculum
name: Quant Finance Self-Study Curriculum
description: "A self-study route into quantitative finance: a maths diagnostic, a twelve-month curriculum map, core textbooks, weekly problem sets, four portfolio coding projects and an evidence pack you can show an employer."
category: business
version: 1.0.0
tags: [quant-finance, quant-finance-self-study-curriculum, student, knowledge-worker, self-study, curriculum, textbooks, portfolio-projects]
author: Aurum Technology
starter_structure:
  templates:
    - development-plan
    - skills-matrix
    - reading-queue
    - habit-tracker
    - metrics-log
    - meeting-notes
    - portfolio-piece
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Quant Finance Self-Study Curriculum
          description: "A self-study plan for quantitative finance: maths prerequisites, core textbooks, coding projects, paper reading and milestones you can show an employer."
          projects:
            - name: Target quant role and study goal statement
              description: |-
                ## Purpose
                Quant research, quant trading, quant development and risk modelling need overlapping but different preparation, and a self-study plan without a target drifts into reading everything. Writing one paragraph that names the role you are aiming at, the kind of employer and a rough date gives every later choice of book, project and topic something to be measured against.

                ## Milestones
                1. One target role chosen from research, trading, development or risk, with a second choice noted.
                2. Three real job adverts for that role saved and their stated requirements listed.
                3. A goal statement of no more than 120 words naming the role, the employer type and a target date.
                4. The statement pinned at the top of your study notes.

                ## Notes
                The goal can change. The point is to choose deliberately, so that a change later is a decision rather than drift.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written goal statement names one target role, an employer type and a target date, backed by three saved job adverts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Save three job adverts for the quant role that interests you most"
                - "List every skill and qualification the three adverts ask for"
                - "Write a 120-word goal statement with role, employer type and target date"
                - "Pin the goal statement at the top of your study notes"
            - name: Maths prerequisites diagnostic
              description: |-
                ## Purpose
                Most self-taught quants either repeat material they already know or skip a gap that later stops them cold, usually in linear algebra or probability. A two-evening diagnostic across calculus, linear algebra, probability and statistics shows exactly where to start each subject and stops weeks being spent on the wrong chapter.

                ## Milestones
                1. Ten to fifteen problems per subject gathered from the end-of-chapter exercises of standard undergraduate texts.
                2. Each set attempted under a time limit without notes.
                3. Every subject rated as solid, rusty or missing in a skills grid.
                4. A starting chapter or topic recorded for each subject.

                ## Notes
                Start from the **Skills matrix** template. Be strict: a problem you could only finish by looking something up counts as rusty.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A skills grid rates calculus, linear algebra, probability and statistics as solid, rusty or missing, each with a named starting topic."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick ten problems each in calculus, linear algebra, probability and statistics"
                - "Attempt each subject's set in one timed sitting without notes"
                - "Mark your answers against worked solutions and rate each subject"
                - "Write a starting chapter for each subject in the skills grid"
            - name: Weekly study hours budget
              description: |-
                ## Purpose
                A curriculum built on twenty hours a week collapses within a month for someone who really has eight. Counting the hours you can protect, across work, family, sleep and exercise, sets the pace of everything else and makes the twelve-month map honest from the start.

                ## Milestones
                1. A typical week mapped in one-hour blocks, with fixed commitments marked.
                2. A realistic weekly study figure agreed with yourself and anyone you live with.
                3. The figure split into deep sessions of two hours or more and short review slots.
                4. The budget written into the curriculum map as its pacing assumption.

                ## Notes
                Plan on about 80 percent of the hours you think you have. Illness, travel and deadlines at work will take the rest.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written weekly study budget in hours, split into deep and short sessions, is recorded as the curriculum's pacing assumption."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Map last week hour by hour and mark every fixed commitment"
                - "Count the hours you could realistically protect for study"
                - "Agree the study hours with anyone whose time it affects"
                - "Write the weekly figure and its split at the top of the curriculum map"
            - name: Twelve-month quant curriculum map
              description: |-
                ## Purpose
                Self-study fails most often from sequencing, not effort: reading a derivatives text before probability is solid, or starting machine learning before regression makes sense. A one-page map that orders subjects into quarters, names the book for each and places the four coding projects turns a reading list into a plan you can check yourself against.

                ## Milestones
                1. Subjects ordered by dependency, from maths prerequisites to the specialist track.
                2. Each quarter assigned two or three subjects and one coding project.
                3. A primary textbook named for each subject, with chapters to cover.
                4. Checkpoints at months three, six and twelve marked on the map.
                5. The map sized to the weekly hours budget, with slack of at least two weeks per quarter.

                ## Notes
                Start from the **Development plan** template. A common order is linear algebra and probability, then statistics and numerical methods, then finance and stochastic processes, then a specialist track.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page map assigns every subject, textbook and coding project to a quarter, with three dated checkpoints and slack built in."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every subject the target role needs and draw their dependencies"
                - "Assign subjects and one coding project to each of four quarters"
                - "Name the primary textbook and chapters for every subject"
                - "Mark checkpoints at three, six and twelve months on the map"
                - "Check the total load against your weekly hours budget"
            - name: Core textbook shortlist by subject
              description: |-
                ## Purpose
                There are dozens of quant finance books and buying them all is a common way to feel productive while learning nothing. Choosing one primary and one backup text per subject, checked against what reviewers and course syllabi actually use, keeps spending low and stops the habit of switching books whenever a chapter gets hard.

                ## Milestones
                1. Two or three candidate books per subject collected from university course syllabi and practitioner reading lists.
                2. Each candidate checked for level, exercises with solutions and the edition in print.
                3. One primary and one backup book chosen per subject.
                4. The list saved with where each book will come from: library, second-hand or new.

                ## Notes
                Start from the **Reading queue** template. Books with worked solutions to exercises are worth far more to a self-learner than slightly better prose.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shortlist names one primary and one backup textbook for every subject on the map, each with a source and edition."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect reading lists from three university quant or financial maths courses"
                - "Note which books appear on more than one list for each subject"
                - "Check each candidate for exercises with solutions"
                - "Choose a primary and backup book per subject and record the source"
            - name: Python study environment set-up
              description: |-
                ## Purpose
                Every subject in the curriculum is easier when you can test an idea in code within a minute, and a broken environment is the excuse that kills evening sessions. One evening spent on a clean Python install, a project folder per subject, version control and the standard scientific libraries removes that friction for the whole year.

                ## Milestones
                1. A Python distribution installed with an environment manager.
                2. NumPy, pandas, SciPy, statsmodels, matplotlib and a notebook tool working in one environment.
                3. A study repository under version control with one folder per subject.
                4. A first notebook that downloads a free price series and plots its returns.

                ## Notes
                Pin library versions in a requirements file from day one, so a notebook from month two still runs in month eleven.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A version-controlled study repository runs a notebook that loads and plots a free price series in a pinned environment."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Install Python with an environment manager and create a study environment"
                - "Install the scientific libraries and pin their versions in a requirements file"
                - "Create a study repository with a folder per subject on the map"
                - "Write a notebook that loads a free price series and plots daily returns"
            - name: Formula sheet and study notes system
              description: |-
                ## Purpose
                Notes scattered across notebooks, margins and browser tabs are useless at interview time, when you need the derivation of a result in two minutes. A single notes structure per subject, with a running formula sheet and a page of results you could derive from memory, makes revision fast and shows you what you actually know.

                ## Milestones
                1. One notes page per subject, linked from the curriculum map.
                2. A running formula sheet per subject with each result and where it came from.
                3. A list of derivations you can reproduce unaided, kept separately from those you cannot yet.
                4. A naming rule for notes so any topic can be found in under a minute.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each subject has a linked notes page and formula sheet, and a separate list records derivations you can reproduce unaided."
                cadence: rolling
              tasks:
                - "Create a notes page for each subject on the curriculum map"
                - "Start a formula sheet per subject with the source of each result"
                - "Split derivations into those you can reproduce and those you cannot"
                - "Tidy the formula sheets and move mastered derivations across @recurring(monthly:20)"
            - name: Study budget for books, data and courses
              description: |-
                ## Purpose
                Self-study can cost almost nothing or several thousand a year, and the difference is rarely in what you learn. Setting a yearly budget for books, paid data, courses and conference or meetup costs before spending anything stops impulse purchases and forces each one to earn its place against the map.

                ## Milestones
                1. A yearly study budget figure agreed and written down.
                2. Budget split across books, data, courses, compute and events.
                3. A library card and any free university or employer resources checked first.
                4. Every purchase logged against the budget with the subject it serves.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written yearly study budget is split by category, and every study purchase is logged against it with the subject it serves."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide a yearly figure you can spend on study without strain"
                - "Split it across books, data, courses, compute and events"
                - "Check what your library, university or employer already gives you free"
                - "Compare study spend with the budget each quarter @recurring(quarterly)"
            - name: Free practice data sources
              description: |-
                ## Purpose
                Institutional databases are out of reach for most self-learners, but almost every exercise in the curriculum can be done on free daily prices, published factor returns, central bank rate series and exchange sample files. Knowing which free source fits which exercise, and its gaps such as survivorship and adjusted prices, saves hours per project and avoids learning from bad data.

                ## Milestones
                1. A list of free sources for equity prices, factor returns, rates and sample tick data.
                2. Each source's known gaps recorded, including survivorship, adjustments and history length.
                3. A local practice data set saved in a single format with a date stamp.
                4. A short loader function in the study repository for each source used.

                ## Notes
                Read each source's terms of use. Free for personal study is not the same as free to republish in a public repository.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented list of free data sources with known gaps exists, and the repository holds a dated practice data set with loader functions."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List free sources for prices, factor returns, rates and sample tick data"
                - "Note each source's survivorship, adjustment and history gaps"
                - "Save a dated practice data set and a loader for each source"
                - "Refresh the practice data set and note any source changes @recurring(monthly:3)"
            - name: Weekly study session schedule
              description: |-
                ## Purpose
                Hours protected in principle disappear unless they sit in the calendar like meetings. Fixing two or three recurring sessions with a set subject each, and planning the topics at the end of every week, turns the hours budget into actual study and removes the nightly decision about what to work on.

                ## Milestones
                1. Recurring study blocks booked in your calendar on fixed days.
                2. Each block tagged with a subject from the current quarter.
                3. A weekly planning slot where next week's topics are chosen.
                4. A simple rule for missed sessions: move once, never carry over twice.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Study blocks recur in the calendar on fixed days, each tagged with a subject, and at least 80 percent are kept over a month."
                cadence: rolling
              tasks:
                - "Book recurring study blocks in your calendar on fixed days"
                - "Tag each block with a subject from the current quarter"
                - "Hold your study blocks and note any you miss @recurring(weekly:tue,thu,sat)"
                - "Choose next week's topics for each block @recurring(weekly:sun)"
            - name: Weekly problem set routine
              description: |-
                ## Purpose
                Reading a chapter feels like progress, but interviewers and employers test whether you can solve problems with the material. Working a fixed set of exercises from the current chapters every week, and marking them against solutions, is the single habit that separates people who can use quant methods from those who recognise them.

                ## Milestones
                1. A weekly target of exercises set per active subject.
                2. Each set attempted before checking any solution.
                3. Errors logged with the reason: concept, algebra or misreading.
                4. Missed problems re-attempted a week later until correct.

                ## Notes
                Ten exercises done properly beat thirty skimmed. Mark the ones you only finished with a hint, and come back to them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly problem set is attempted and marked for each active subject, with an error log and re-attempts recorded for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Set a weekly exercise target for each active subject"
                - "Start an error log with columns for problem, cause and re-attempt date"
                - "Work and mark the week's problem set before checking solutions @recurring(weekly:sat)"
                - "Re-attempt last week's missed problems before starting new ones"
            - name: Spaced repetition deck for definitions and results
              description: |-
                ## Purpose
                Definitions, distributions, identities and the statement of key theorems fade within weeks unless reviewed, and forgetting them is what makes interview answers wobble. A flashcard deck reviewed for ten minutes a day keeps the whole curriculum available at once, at a cost small enough to keep up on the worst days.

                ## Milestones
                1. A spaced repetition tool installed with one deck per subject.
                2. Cards added for every definition and key result from finished chapters.
                3. Cards written as questions that require recall, not recognition.
                4. A daily review streak of at least thirty days.

                ## Notes
                Start from the **Habit tracker** template. Add cards the day you finish a section; batch-making them at the end of a book never happens.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A flashcard deck covers every finished chapter, and the habit tracker shows a daily review streak of at least thirty days."
                cadence: rolling
              tasks:
                - "Install a spaced repetition tool and create one deck per subject"
                - "Add cards for the definitions and results from your last finished chapter"
                - "Rewrite any card that can be answered by recognition alone"
                - "Clear the day's due cards in one ten-minute sitting @recurring(daily)"
            - name: Monthly curriculum progress review
              description: |-
                ## Purpose
                Without a review, a self-study plan slips a few weeks every quarter and nobody notices until the year is gone. Comparing the map with what you actually finished once a month, and adjusting the next month rather than the whole year, keeps the plan honest and catches a stalled subject early.

                ## Milestones
                1. Chapters, problem sets and project steps finished this month counted against the map.
                2. Hours studied compared with the weekly budget.
                3. Any subject more than two weeks behind given a named fix.
                4. Next month's targets written down in one short list.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly review note records progress against the map, hours against budget and next month's targets for at least three months running."
                cadence: rolling
              tasks:
                - "Count chapters, problem sets and project steps finished against the map @recurring(monthly:28)"
                - "Compare hours studied with the weekly budget"
                - "Name a fix for any subject more than two weeks behind"
                - "Write next month's targets as a short list in the review note"
            - name: Weekly quant paper reading slot
              description: |-
                ## Purpose
                Employers look for candidates who can read a research paper and say what is new, what is assumed and whether they believe it. One paper a week, read with a fixed set of questions and summarised in a few lines, builds that skill steadily and gives you material to talk about in interviews.

                ## Milestones
                1. A queue of classic and recent papers matched to the current quarter's subjects.
                2. A fixed summary format: question, data, method, result, doubts.
                3. One paper read and summarised each week.
                4. A running list of ideas from papers you might test in a coding project.

                ## Notes
                Rebuilding a paper's results is a separate, bigger piece of work. This slot is for reading and judging, not replicating.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve paper summaries in the fixed format exist after three months, each linked to a curriculum subject."
                cadence: rolling
              tasks:
                - "Draft a paper summary format covering question, data, method, result and doubts"
                - "Read and summarise one paper from the queue @recurring(weekly:wed)"
                - "Add two papers matched to next month's subjects to the queue @recurring(monthly:5)"
                - "Copy any testable idea into the coding project ideas list"
            - name: Quarterly curriculum reset
              description: |-
                ## Purpose
                Every three months the map meets reality: a subject took twice as long, a project grew, or the target role changed after talking to people in the industry. A half-day reset each quarter, redrawing the next quarter and pushing or cutting topics, keeps the twelve-month plan alive instead of abandoned.

                ## Milestones
                1. The past quarter's monthly reviews read together.
                2. Subjects marked as finished, carried over or dropped.
                3. The next quarter redrawn with realistic subjects and one project.
                4. The goal statement checked and updated if the target role has shifted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter ends with a written reset that marks subjects finished, carried or dropped and a redrawn plan for the next quarter."
                cadence: cyclic
              tasks:
                - "Read the last three monthly review notes in one sitting"
                - "Mark each subject on the map finished, carried over or dropped"
                - "Redraw the next quarter's subjects and project on the map @recurring(quarterly)"
                - "Reread the goal statement and update it if the role has shifted"
            - name: Study hours and topics log
              description: |-
                ## Purpose
                Memory flatters: most people overestimate their study hours by a third or more. A weekly log of hours by subject, chapters finished and problems solved gives the monthly review real numbers, and over a year becomes evidence of sustained effort you can mention to an employer.

                ## Milestones
                1. A log with columns for week, subject, hours, chapters and problems solved.
                2. Every week of study entered within two days of its end.
                3. A running total of hours per subject visible at a glance.
                4. Twelve weeks of entries with no gaps.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A study log holds twelve consecutive weekly entries with hours, chapters and problems by subject, and running totals per subject."
                cadence: rolling
              tasks:
                - "Set up a log with week, subject, hours, chapters and problems columns"
                - "Enter the week's hours, chapters and problems by subject @recurring(weekly:fri)"
                - "Add a running total of hours per subject"
                - "Compare logged hours with the budget before each monthly review"
            - name: Study partner monthly check-in
              description: |-
                ## Purpose
                Studying alone, it is easy to quietly drop a subject or let a project stall for weeks. A monthly call with another self-learner, a classmate or a mentor, where each of you shows what you finished and names next month's targets, adds just enough outside pressure to keep going.

                ## Milestones
                1. A study partner or mentor agreed, with a monthly slot in both calendars.
                2. A fixed agenda: finished work, problems stuck on, next month's targets.
                3. Notes from each check-in saved in your study notes.
                4. At least one problem from each call solved together or with a pointer from the other person.

                ## Notes
                Start from the **Meeting notes** template. Online quant forums, university societies and local meetups are good places to find a partner at a similar stage.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly check-ins with a named study partner are recorded, each with finished work and next month's targets."
                cadence: rolling
              tasks:
                - "Ask one person at a similar stage to be your monthly study partner"
                - "Agree a fixed agenda and a monthly slot in both calendars"
                - "Hold the check-in and save the notes @recurring(monthly:14)"
                - "Bring one stuck problem to each check-in"
            - name: Monthly numerical methods coding exercise
              description: |-
                ## Purpose
                Coding skill decays fast when study weeks are all reading. One small, self-contained exercise a month, such as a root finder, a random number test, a matrix decomposition or a simple solver, written with tests and checked against a library result, keeps the coding side in step with the maths.

                ## Milestones
                1. A list of twelve small numerical exercises, one per month.
                2. Each exercise written as a function with at least two tests.
                3. Results compared with a standard library implementation.
                4. Exercises committed to the study repository with a short readme line each.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The repository holds at least six monthly numerical exercises, each with tests and a comparison against a library result."
                cadence: rolling
              tasks:
                - "List twelve small numerical exercises, one for each month"
                - "Write this month's exercise with tests and a library comparison @recurring(monthly:9)"
                - "Commit the exercise with a one-line readme entry"
                - "Note any exercise that exposed a gap in the maths for the next review"
            - name: Linear algebra for quant work
              description: |-
                ## Purpose
                Covariance matrices, regressions, factor models and optimisers are all linear algebra, and shaky understanding here shows up later as code that runs but means nothing. Working through vectors, matrix decompositions, eigenvalues and positive definiteness with finance examples gives every later subject a solid base.

                ## Milestones
                1. Chapters on vector spaces, matrix products and rank finished with exercises.
                2. Eigen decomposition and singular value decomposition derived and coded on a small covariance matrix.
                3. Positive definiteness explained in your own words, with a check written in code.
                4. Principal components computed on a set of returns and the first three components interpreted.

                ## Notes
                Gilbert Strang's text and lectures are a common starting point. Pair each chapter with a return data example so the abstractions stay grounded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Linear algebra chapters are finished with marked exercises, and a notebook computes and interprets principal components of a return data set."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Start the first linear algebra chapter and its exercises"
                - "Code an eigen decomposition of a small covariance matrix"
                - "Write a positive definiteness check and test it on a broken matrix"
                - "Run principal components on a return set and interpret the first three"
            - name: Calculus and optimisation refresher
              description: |-
                ## Purpose
                Pricing, risk and portfolio work lean on multivariable calculus, Taylor expansions and constrained optimisation more than any single advanced topic. Refreshing them with quant uses in mind, such as a duration approximation or a minimum variance portfolio with Lagrange multipliers, closes the gaps the diagnostic found.

                ## Milestones
                1. Partial derivatives, gradients and Taylor expansions refreshed with exercises.
                2. Lagrange multipliers used to derive a two-asset minimum variance portfolio by hand.
                3. Convexity and the idea of a unique optimum explained in your notes.
                4. A numerical optimiser used to confirm the hand derivation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand derivation of a minimum variance portfolio using Lagrange multipliers matches a numerical optimiser result in the repository."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Work the multivariable calculus exercises the diagnostic marked rusty"
                - "Derive a two-asset minimum variance portfolio with Lagrange multipliers"
                - "Confirm the result with a numerical optimiser in a notebook"
                - "Add Taylor expansion and convexity results to the formula sheet"
            - name: Probability theory core sequence
              description: |-
                ## Purpose
                Probability is the subject every quant interview tests and every model assumes. A structured pass through random variables, conditional expectation, common distributions, limit theorems and moment generating functions, with a heavy exercise load, is the part of the curriculum most worth over-preparing.

                ## Milestones
                1. Chapters on random variables, conditional probability and expectation finished with exercises.
                2. The main discrete and continuous distributions summarised with their moments.
                3. Law of large numbers and central limit theorem demonstrated by simulation.
                4. Conditional expectation problems solved at a rate of at least four in five correct.

                ## Notes
                Timed puzzle practice for interviews belongs to its own routine. This sequence is about the theory under those puzzles.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Core probability chapters are finished, a distributions summary exists, and conditional expectation exercises score at least 80 percent."
                cadence: phased
                effort_hours_estimate: "70"
              tasks:
                - "Begin the first probability chapter and its full exercise set"
                - "Write a one-page summary of the main distributions and their moments"
                - "Simulate the central limit theorem for a skewed distribution"
                - "Score yourself on twenty conditional expectation problems"
            - name: Statistics and regression for returns
              description: |-
                ## Purpose
                Most quant mistakes are statistical: trusting a t-statistic on overlapping returns, ignoring heavy tails or reading meaning into noise. Studying estimation, hypothesis testing and linear regression with return data, rather than textbook examples, prepares you for the later finance subjects and the specialist areas that build on them.

                ## Milestones
                1. Estimation, confidence intervals and hypothesis testing chapters finished with exercises.
                2. Ordinary least squares derived in matrix form and coded from scratch.
                3. A regression of one return series on another run and its residuals checked.
                4. Notes on why serial correlation and fat tails change the usual standard errors.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A from-scratch least squares implementation matches a library result on return data, with residual diagnostics recorded."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Start the estimation and hypothesis testing chapters with exercises"
                - "Derive least squares in matrix form in your notes"
                - "Code least squares from scratch and compare with a library result"
                - "Check the residuals of a return regression and note what you see"
            - name: Numerical methods in Python
              description: |-
                ## Purpose
                Closed-form answers are rare in quant work, so you need to be comfortable with root finding, interpolation, numerical integration, random number generation and simple differential equation solvers. Learning them in Python with attention to accuracy and speed builds the toolkit the coding projects depend on.

                ## Milestones
                1. Root finding, interpolation and numerical integration implemented and tested.
                2. Random number generation and variance reduction compared on a simple integral.
                3. Vectorised and loop versions of one method timed side by side.
                4. Error against a known answer recorded for each method.

                ## Notes
                A numerical methods text with code examples saves time. Always check a method against a case with a known answer before trusting it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The repository contains tested implementations of root finding, interpolation, integration and Monte Carlo, each with recorded error against a known answer."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Implement bisection and Newton root finding with tests"
                - "Compare Monte Carlo with and without antithetic variates on a known integral"
                - "Time a vectorised version against a loop version of one method"
                - "Record the error against the known answer for each method"
            - name: Markets and instruments for career changers
              description: |-
                ## Purpose
                Maths and physics graduates often reach interviews able to price an option but unsure how a futures roll works or what a basis point of carry means. Learning instruments, market conventions, how exchanges and brokers fit together and how returns are quoted closes a gap that interviewers notice quickly.

                ## Milestones
                1. Equities, bonds, futures, options and foreign exchange each summarised in a page.
                2. Day count, quoting and settlement conventions noted for each asset class.
                3. The life of an order from submission to settlement drawn as a diagram.
                4. A glossary of fifty market terms in your notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One-page summaries exist for five asset classes, with conventions, an order lifecycle diagram and a fifty-term glossary."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write a one-page summary of how futures work, including the roll"
                - "Note day count and quoting conventions for bonds and foreign exchange"
                - "Draw the life of an order from submission to settlement"
                - "Read one market commentary piece and note any unfamiliar terms @recurring(weekly:mon)"
            - name: Stochastic processes first pass
              description: |-
                ## Purpose
                Brownian motion and the idea of risk-neutral pricing appear in almost every quant role description, but a self-learner can stall for months in a measure theory text. A first pass focused on random walks, Brownian motion, martingales and a simulation of geometric Brownian motion gives working intuition and tells you whether a deeper study is needed for your target role.

                ## Milestones
                1. Random walks and their scaling limit understood and simulated.
                2. Martingales defined and three examples written in your notes.
                3. Geometric Brownian motion simulated and compared with its lognormal distribution.
                4. A decision recorded on whether the target role needs a full stochastic calculus course.

                ## Notes
                For a quant research or derivatives target, plan a full stochastic calculus study afterwards. For many development and trading roles, this first pass is enough.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A notebook simulates random walks and geometric Brownian motion against theory, and a written decision on deeper stochastic calculus study exists."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Simulate a scaled random walk and compare it with Brownian motion"
                - "Write three examples of martingales in your notes"
                - "Simulate geometric Brownian motion and check the lognormal fit"
                - "Record whether your target role needs a full stochastic calculus course"
            - name: SQL and data wrangling for market data
              description: |-
                ## Purpose
                Joining, reshaping and cleaning time series quickly and without errors is expected in every quant role, because most of the work is data work. Practising SQL queries and pandas operations on real price and corporate action data, including the traps of time zones, missing days and adjusted prices, builds a skill every desk uses daily.

                ## Milestones
                1. A local database loaded with daily prices and a corporate actions table.
                2. Twenty practice queries written, covering joins, window functions and as-of joins.
                3. The same transformations reproduced in pandas and the results compared.
                4. A note of the five data traps you met and how you caught each one.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty SQL queries and matching pandas transformations run on a local market data set, with a written list of data traps found."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Load daily prices and a corporate actions table into a local database"
                - "Write ten queries using joins and window functions"
                - "Reproduce the same transformations in pandas and compare outputs"
                - "List each data trap you hit and how you detected it"
            - name: Reading a quant paper in one sitting
              description: |-
                ## Purpose
                Your first academic finance paper can take a week, with every second paragraph needing a lookup. Learning a deliberate reading order, from abstract and tables to method and robustness, and practising it on three well-known papers brings that down to one evening and makes the weekly reading slot sustainable.

                ## Milestones
                1. A written reading order you follow every time.
                2. Three well-known papers read using it and timed.
                3. For each paper, the main table explained in plain language.
                4. Reading time per paper at or under three hours.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three papers are read with a written reading order, each with a plain-language explanation of its main table, in three hours or less."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write your reading order from abstract and tables to method and robustness"
                - "Read a well-known factor paper using it and time yourself"
                - "Explain each paper's main table in plain language in your notes"
                - "Compare reading times across the three papers"
            - name: Returns and risk analytics library project
              description: |-
                ## Purpose
                A first coding project should be small enough to finish and useful enough to reuse. A tidy Python package that computes returns, volatility, drawdowns, rolling statistics and simple performance ratios, with tests and documentation, shows an employer clean code and becomes a tool for every later project.

                ## Milestones
                1. A package structure with functions for returns, volatility, drawdown and rolling statistics.
                2. Unit tests covering each function, including empty and missing data.
                3. A readme with installation and one worked example.
                4. Results checked against a published or hand-computed example.

                ## Notes
                Resist adding features. Ten well-tested functions say more about you than forty untested ones.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A public or shareable package computes returns, volatility, drawdown and rolling statistics, with passing tests and a readme example."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Create the package structure and a first returns function with tests"
                - "Add volatility, drawdown and rolling statistics functions with tests"
                - "Check outputs against a hand-computed example"
                - "Write a readme with installation steps and one worked example"
            - name: Option pricer with Monte Carlo and closed form
              description: |-
                ## Purpose
                Pricing a European option three ways, by closed form, binomial tree and Monte Carlo, and showing they agree, is the classic demonstration that you understand both the theory and the numerics. Doing it with tests, convergence plots and Greeks makes it a project worth discussing at interview.

                ## Milestones
                1. Black-Scholes closed-form prices and Greeks implemented and tested.
                2. A binomial tree that converges to the closed-form price, with a convergence plot.
                3. A Monte Carlo pricer with standard errors and one variance reduction method.
                4. A short write-up of where each method breaks down.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three pricing methods agree within a stated tolerance in tests, with convergence plots and a written note on each method's limits."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Implement closed-form European option prices and Greeks with tests"
                - "Build a binomial tree and plot its convergence to the closed form"
                - "Add a Monte Carlo pricer with standard errors and antithetic variates"
                - "Write a page on where each method breaks down"
            - name: Cross-sectional factor backtest project
              description: |-
                ## Purpose
                Employers want to see that you can test an idea on data without fooling yourself. A simple momentum or value sort on free data, with costs, a held-out period fixed in advance and a plain statement of how fragile the result is, shows judgement as much as code, and the honest write-up matters more than the return number.

                ## Milestones
                1. A hypothesis, test period and held-out period written down before any code.
                2. A monthly sort into portfolios with realistic transaction costs.
                3. Results on the held-out period reported whether good or bad.
                4. A list of known biases in the free data and how they affect the result.

                ## Notes
                This is a learning project, not a trading system. Expect the effect to shrink or vanish after costs and out of sample: most published effects do.
              priority: medium
              deadlineOffsetDays: 200
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A factor backtest with costs reports results on a held-out period fixed in advance, plus a written list of data biases."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the hypothesis, test period and held-out period before coding"
                - "Build a monthly portfolio sort with a transaction cost assumption"
                - "Run the held-out period once and record the result as it comes"
                - "List the free data's biases and how each could flatter the result"
            - name: Volatility forecast comparison project
              description: |-
                ## Purpose
                Forecasting volatility is one of the few areas where simple models do measurably better than guessing, which makes it a good place to practise fair model comparison. Comparing a rolling window, an exponentially weighted estimate and a GARCH-style model on the same out-of-sample period, with a proper loss function, teaches evaluation discipline you will use everywhere.

                ## Milestones
                1. Three forecasting methods implemented on the same daily return series.
                2. A realised volatility target and a loss function chosen before testing.
                3. Out-of-sample forecasts compared on the same period.
                4. A write-up stating which method did best and how confident you are.
              priority: low
              deadlineOffsetDays: 260
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three volatility forecasts are compared out of sample with a loss function chosen in advance, and the conclusion is written up."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose the return series, realised target and loss function in writing"
                - "Implement rolling, exponentially weighted and GARCH-style forecasts"
                - "Compare out-of-sample losses on the same period"
                - "Write up the winner and how sure you are of it"
            - name: Textbook-first or project-first study decision
              description: |-
                ## Purpose
                Some people learn best by finishing a book before coding, others by starting a project and pulling in theory as they hit walls. Trying each for two weeks on the same subject, and judging by problems solved rather than how it felt, settles the style for the rest of the curriculum.

                ## Milestones
                1. Two equal study periods planned, one book-led and one project-led.
                2. Problems solved and concepts explained recorded for each period.
                3. A choice made, or a mix described, with the evidence behind it.
                4. The curriculum map adjusted to the chosen style.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on study style is backed by problems solved in two equal trial periods, and the map reflects it."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Plan two equal study periods, one book-led and one project-led"
                - "Count problems solved and concepts explained in each period"
                - "Record which style worked better and why"
                - "Adjust the curriculum map to the chosen style"
            - name: Paid course or certificate versus free material
              description: |-
                ## Purpose
                Paid online programmes and certificates promise structure and a credential, but many employers in quant roles weigh projects and interview performance far more. Comparing two or three paid options against the free version of the same curriculum, on cost, structure, feedback and how your target employers view them, lets you spend only where it adds something real.

                ## Milestones
                1. Two or three paid courses or certificates shortlisted with cost and time needed.
                2. The free equivalent material identified for each.
                3. People in the target role asked how they view each credential.
                4. A buy, defer or skip decision recorded for each option.

                ## Notes
                A formal master's degree is a different decision with its own planning. This compares shorter courses and certificates only.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each shortlisted paid course has a recorded buy, defer or skip decision with cost, free alternative and practitioner views noted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Shortlist two or three paid courses or certificates with cost and hours"
                - "Find the free material that covers the same syllabus"
                - "Ask two people in your target role how they view each credential"
                - "Record a buy, defer or skip decision for each option"
            - name: Cutting topics that do not serve the target role
              description: |-
                ## Purpose
                Few fields are as wide as quant finance, which could fill a decade of study, and self-learners often keep adding topics because they are interesting. Going through the map against the goal statement and job adverts, and deferring anything that no target employer asks for, frees months for the subjects that do get tested.

                ## Milestones
                1. Every topic on the map tagged as required, useful or optional for the target role.
                2. Optional topics moved to a later list with a reason.
                3. Hours freed recorded and given to a required subject.
                4. The revised map checked by your study partner or a mentor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every topic on the map is tagged required, useful or optional, with optional topics deferred and the freed hours reassigned."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Tag each topic on the map as required, useful or optional"
                - "Move optional topics to a later list with one-line reasons"
                - "Reassign the freed hours to a required subject"
                - "Ask your study partner to challenge the revised map"
            - name: Employer-facing evidence pack
              description: |-
                ## Purpose
                Self-study counts in hiring only when someone else can see it in five minutes. An evidence pack of the four coding projects, a one-page summary of subjects and books covered, sample problem write-ups and the paper summaries gives recruiters and interviewers something concrete in place of a claim that you taught yourself.

                ## Milestones
                1. A one-page summary of subjects, books and hours studied.
                2. Each coding project presented with a two-paragraph description and a link.
                3. Three worked problem write-ups chosen to show depth.
                4. The pack reviewed by someone working in quant finance and revised.

                ## Notes
                Start from the **Portfolio piece** template. Lead with the project you can talk about longest without notes.
              priority: high
              deadlineOffsetDays: 300
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An evidence pack with a study summary, four project pages and three problem write-ups is reviewed by a practitioner and revised."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a one-page summary of subjects, books and hours studied"
                - "Write a two-paragraph description for each finished coding project"
                - "Choose three problem write-ups that show the most depth"
                - "Ask a practitioner to review the pack and note their changes"
            - name: Ninety-day curriculum checkpoint
              description: |-
                ## Purpose
                Three months in is when most self-study plans either settle into a rhythm or quietly stop. A formal checkpoint at day ninety, measuring hours, chapters, problem accuracy and the first project's state against the map, catches a failing plan while it can still be rescued.

                ## Milestones
                1. Hours, chapters and problem set accuracy measured against the first quarter's plan.
                2. The returns analytics project at least half finished.
                3. One honest paragraph on what is working and what is not.
                4. A continue, adjust or pause decision recorded with the next step.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A day-ninety checkpoint note records hours, chapters, accuracy and project state against plan, with a continue, adjust or pause decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put the day-ninety checkpoint in your calendar now"
                - "Pull hours, chapters and accuracy figures from the log"
                - "Write one paragraph on what is working and what is not"
                - "Record a continue, adjust or pause decision and the next step"
            - name: Six-month self-set mock exam
              description: |-
                ## Purpose
                Without exams, self-learners rarely find out what they can do under time pressure. A three-hour mock built from unseen textbook exercises across probability, statistics, linear algebra and pricing, sat at the six-month mark and marked strictly, shows whether the first half of the curriculum has really stuck.

                ## Milestones
                1. A mock paper of unseen exercises across four subjects, assembled by you or your study partner.
                2. The paper sat in one timed sitting without notes.
                3. Every answer marked against solutions, with scores per subject.
                4. Weak subjects scheduled for revision in the next quarter.

                ## Notes
                Ask your study partner to choose the questions so you do not unconsciously pick ones you can answer.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A timed mock paper across four subjects is sat and marked, with per-subject scores and revision scheduled for weak areas."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your study partner to assemble unseen questions across four subjects"
                - "Book a three-hour slot to sit the mock without notes"
                - "Mark every answer and record a score per subject"
                - "Schedule revision for any subject scoring under 60 percent"
            - name: Public portfolio launch on a code hosting site
              description: |-
                ## Purpose
                Repositories that only you can see do not help a job application. Cleaning up the study repository, making the finished projects public with readmes and tests passing, and linking them from your CV and professional profile turns months of study into something a recruiter can open.

                ## Milestones
                1. Each finished project in its own clean repository with a readme and passing tests.
                2. No licensed data, credentials or employer material in any repository.
                3. A profile page listing the projects with one line each.
                4. Links added to your CV and professional networking profile.

                ## Notes
                Check every commit history for data you are not allowed to publish. Rewriting history is easier before anything is public.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least three project repositories are public with readmes and passing tests, linked from your CV and professional profile."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Move each finished project into its own repository with a readme"
                - "Search every repository and its history for licensed data or credentials"
                - "Make the clean repositories public and list them on your profile page"
                - "Add the profile link to your CV and networking profile"
            - name: Presenting a study project to a meetup or reading group
              description: |-
                ## Purpose
                Explaining a project out loud to people who ask hard questions is the best rehearsal for interviews and the quickest way to find gaps. A twenty-minute talk on one of the coding projects, at a local quant meetup, a university society or an online reading group, also puts you in front of people already working in the field.

                ## Milestones
                1. A meetup, society or reading group identified and a slot agreed.
                2. A ten-slide talk covering question, method, result and limits.
                3. The talk rehearsed twice, once to a friend outside finance.
                4. Questions from the audience written down and answered in your notes.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A talk on one study project is given to an outside group, and the audience questions are recorded with your follow-up answers."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find a quant meetup, society or reading group that takes short talks"
                - "Draft ten slides covering question, method, result and limits"
                - "Rehearse the talk twice, once to someone outside finance"
                - "Write down every audience question and your answer afterwards"
            - name: Twelve-month curriculum review and next-year plan
              description: |-
                ## Purpose
                After a year of self-study, a proper stock-take is due: what you know now, what the evidence pack shows, how close you are to the target role and what the second year should focus on. A half-day review at month twelve turns the year into a clear next step, whether that is applying, specialising or changing direction.

                ## Milestones
                1. The year's hours, subjects, projects and mock results summarised on one page.
                2. Remaining gaps against the target job adverts listed.
                3. A choice made between applying now, a specialist track or a formal programme.
                4. A new twelve-month map drafted for the chosen path.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A one-page year summary, a gap list against target adverts and a recorded choice of next path exist, with a new map drafted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book a half-day at month twelve for the review"
                - "Summarise the year's hours, subjects, projects and mock scores"
                - "List the remaining gaps against your saved job adverts"
                - "Choose the next path and draft a new twelve-month map"
            - name: Self-study alongside a maths, physics or CS degree
              description: |-
                ## Purpose
                Undergraduates in quantitative subjects already cover much of the maths, so the gap is usually finance, coding style and evidence of interest. Mapping your degree modules against the curriculum, using vacations for the coding projects and term time for paper reading, adds quant preparation without hurting your grades, which employers check first.

                ## Milestones
                1. Each degree module mapped to the curriculum subjects it already covers.
                2. Finance and coding gaps listed separately from the maths.
                3. Coding projects scheduled into vacations, lighter reading into term.
                4. A university quant or finance society joined, if one exists.

                ## Notes
                Protect your grades. Most quant employers screen on degree results before they look at any side project.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A plan maps degree modules to curriculum subjects, schedules coding projects into vacations and lists remaining finance gaps."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List your degree modules and mark the curriculum subjects each covers"
                - "List the finance and coding gaps your degree leaves"
                - "Schedule coding projects into the next two vacations"
                - "Join or find your university's quant or finance society"
            - name: Study plan around a full-time job
              description: |-
                ## Purpose
                Working people studying in the evenings face tiredness, travel and busy seasons at work, and a plan built for a student will break within weeks. Fixing early morning or weekend deep sessions, keeping weekday evenings for light review and planning around known busy periods makes a two-year route sustainable rather than heroic.

                ## Milestones
                1. Work busy seasons marked on the curriculum map with lighter study targets.
                2. Deep sessions fixed at the time of day you think most clearly.
                3. Weekday evening slots kept for flashcards and reading only.
                4. A realistic timeline of eighteen to twenty-four months agreed with yourself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The curriculum map shows work busy seasons with lighter targets, fixed deep sessions and a written timeline of at least eighteen months."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark your work's busy seasons on the curriculum map"
                - "Choose the time of day you think most clearly for deep sessions"
                - "Hold two early deep sessions before work each week @recurring(weekly:mon,wed)"
                - "Stretch the timeline to a realistic eighteen to twenty-four months"
            - name: Moving into quant from software engineering
              description: |-
                ## Purpose
                Software engineers arrive with the coding, testing and systems habits many quants lack, but usually need serious work on probability, statistics and finance. Reweighting the curriculum toward maths, and choosing projects that show your engineering strengths on quant problems, makes the move credible for development and research-adjacent roles.

                ## Milestones
                1. The diagnostic results used to shift extra hours to probability and statistics.
                2. Coding projects chosen to show testing, performance and clean design.
                3. A short note on which of your engineering experiences transfer, ready for interviews.
                4. Two conversations held with engineers who made the same move.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reweighted curriculum gives extra hours to maths subjects, and notes from two conversations with engineers who moved into quant are recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Move extra weekly hours from coding topics to probability and statistics"
                - "Pick projects that show testing, performance and design"
                - "Write a note on which engineering experiences transfer to quant work"
                - "Contact two engineers who moved into quant and ask how they did it"
            - name: Moving into quant from accounting or traditional finance
              description: |-
                ## Purpose
                People from accounting, banking or investment roles know markets and instruments well, but often need the maths and coding rebuilt from a low base. Starting the curriculum earlier in the maths sequence, accepting a longer timeline and using finance knowledge as a strength in projects makes the change realistic, particularly toward risk and quantitative analyst roles.

                ## Milestones
                1. The maths diagnostic used to set an honest starting point, even if it is school level.
                2. A longer timeline written into the map, with maths given the first two quarters.
                3. One coding project chosen where your finance knowledge gives you an edge.
                4. Target roles narrowed to those where domain knowledge counts, such as risk or quantitative analysis.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A curriculum map with maths in the first two quarters, a domain-based project and a narrowed list of target roles is written down."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Retake the maths diagnostic at the level you last studied maths"
                - "Give maths the first two quarters of the curriculum map"
                - "Choose a coding project that uses your finance knowledge"
                - "Narrow your target roles to those where domain knowledge counts"
            - name: Full-time study break with a fixed budget
              description: |-
                ## Purpose
                Some career changers take six to twelve months away from work to study full time, which can work well but carries real financial risk. Planning the savings needed, a full-time weekly structure, a hard end date and a fallback plan if no offer comes keeps the break a deliberate bet rather than an open-ended gap.

                ## Milestones
                1. Living costs for the planned period calculated with a buffer of at least three months.
                2. A full-time weekly timetable that mirrors a working week.
                3. A hard end date and the point at which applications start.
                4. A fallback plan written down if no offer arrives by the end date.

                ## Notes
                Talk the money side through with a financial adviser or someone you trust before resigning. This plan organises the decision; it does not make it for you.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written study break plan states the savings needed with buffer, a full-time timetable, a hard end date and a fallback."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Calculate living costs for the break plus a three-month buffer"
                - "Draft a full-time weekly study timetable that mirrors a working week"
                - "Set a hard end date and the date applications start"
                - "Write the fallback plan if no offer arrives by the end date"
            - name: Study plan for a parent with fragmented time
              description: |-
                ## Purpose
                Parents of young children rarely get two clear hours, and plans that assume long sessions end in guilt. Breaking the curriculum into twenty to forty minute units, keeping flashcards and reading on a phone and saving one longer weekend block for coding makes steady progress possible on a parent's schedule.

                ## Milestones
                1. Each subject split into units of twenty to forty minutes.
                2. Flashcards and paper summaries available on your phone.
                3. One longer weekend block agreed with your partner or family for coding.
                4. A weekly look back that counts units done rather than hours.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The curriculum is split into short units, one weekend coding block is agreed, and four weekly unit counts are recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Split the current subject into units of twenty to forty minutes"
                - "Put the flashcard deck and paper queue on your phone"
                - "Agree one longer weekend coding block with your family"
                - "Count units finished this week and plan next week's @recurring(weekly:sun)"
            - name: Quant developer self-study track
              description: |-
                ## Purpose
                Quant developer roles test C++ and systems knowledge far more than stochastic calculus. A specialist track covering modern C++, memory and performance, data structures, concurrency and a small market data or order book project prepares you for that work, and decides early whether C++ or deeper Python is the right second focus.

                ## Milestones
                1. A decision recorded on C++ versus deeper Python, based on target job adverts.
                2. A modern C++ text worked through with exercises in the study repository.
                3. A small order book or market data parser written with tests and benchmarks.
                4. Profiling results recorded for one performance improvement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested and benchmarked order book or data parser exists in the repository, with a recorded language decision and profiling notes."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Count how many target adverts ask for C++ versus Python and decide"
                - "Work through the first chapters of a modern C++ text with exercises"
                - "Build a small order book with tests and a benchmark"
                - "Profile the order book and record one improvement"
            - name: Derivatives and pricing specialist track
              description: |-
                ## Purpose
                For a derivatives quant or pricing role, the first pass on stochastic processes is not enough: employers expect risk-neutral pricing, partial differential equation methods and calibration. A specialist track built on a standard derivatives text and a stochastic calculus text, with an implied volatility surface project, takes you to the level a desk interview probes.

                ## Milestones
                1. A standard derivatives text and a stochastic calculus text scheduled chapter by chapter.
                2. A finite difference pricer added to the option pricing project.
                3. An implied volatility surface built from free option quotes and plotted.
                4. A simple model calibrated to that surface, with fit errors recorded.

                ## Notes
                Hull for instruments and Shreve for stochastic calculus are the usual pair. Budget more time for the second than you expect.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A finite difference pricer, an implied volatility surface and a calibrated model with recorded fit errors exist in the repository."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Schedule the derivatives and stochastic calculus texts chapter by chapter"
                - "Add a finite difference pricer to the option pricing project"
                - "Build and plot an implied volatility surface from free option quotes"
                - "Calibrate a simple model to the surface and record the fit errors"
            - name: Systematic research specialist track
              description: |-
                ## Purpose
                Systematic research roles want evidence that you can run honest experiments: fixed hypotheses, held-out data, cost models and a count of every variant tried. A specialist track that extends the factor backtest into a small research programme, with a written log and no live money involved, shows that discipline, and teaches the hard lesson that most ideas fail out of sample.

                ## Milestones
                1. A research log recording every hypothesis and variant tried, with dates.
                2. Three hypotheses tested on the same framework with costs and held-out data.
                3. Results reported for all three, including the ones that failed.
                4. A written rule that no study strategy is traded with real money during the curriculum.

                ## Notes
                Treat every result as probably wrong. If you later want to trade, that needs its own risk limits, position sizing rules and a written stop rule, planned separately.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A research log records three hypotheses with every variant tried, all results including failures, and a written no-live-money rule."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Start a research log with date, hypothesis and variant columns"
                - "Write the no-live-money rule at the top of the log"
                - "Test three hypotheses on the factor framework with held-out data"
                - "Log each week's tests and variants tried @recurring(weekly:thu)"
            - name: Contributing to an open-source quant library
              description: |-
                ## Purpose
                A merged contribution to a well-used open-source library is one of the strongest signals a self-taught candidate can offer: it shows you can read other people's code, follow review and ship. Starting with documentation or a small bug, then moving to a feature, builds a public record maintainers and employers can both check.

                ## Milestones
                1. One open-source library chosen that you already use in your projects.
                2. The contribution guide read and the test suite running locally.
                3. A first documentation or small bug fix merged.
                4. A second, larger contribution discussed with maintainers and submitted.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least one pull request is merged into an open-source quant or scientific library, with a second, larger contribution submitted."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pick one library you already use and read its contribution guide"
                - "Get the library's test suite running on your machine"
                - "Submit a documentation fix or small bug fix"
                - "Scan new issues labelled for first-time contributors @recurring(monthly:17)"
---

# Quant Finance Self-Study Curriculum

This area is for students and working people teaching themselves quantitative finance without a programme to set the pace. It starts with foundations (a target role, a maths diagnostic, an hours budget, a twelve-month map, the textbook shortlist and a working Python set-up), then the weekly machinery of study sessions, problem sets, flashcards and paper reading, the core subjects from linear algebra to stochastic processes, four coding projects and the decisions about courses and scope, dated checkpoints, plans for different lives from an undergraduate to a parent studying in fragments, and finally specialist tracks for quant development, derivatives and systematic research.

The rhythms are study sessions and a problem set every week, a short daily flashcard review, a monthly progress review and coding exercise, and a quarterly reset of the whole curriculum. The Development plan, Skills matrix, Reading queue, Habit tracker, Metrics log, Meeting notes and Portfolio piece templates pair with the map, the diagnostic, the book list, the flashcard habit, the hours log, partner check-ins and the evidence pack. Nothing here is trading advice: the projects build understanding and evidence, and any strategy you study is assumed to fail out of sample until shown otherwise. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
