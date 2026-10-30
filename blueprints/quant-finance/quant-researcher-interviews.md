---
id: quant-finance.quant-researcher-interviews
name: Quant Researcher Interviews
description: "A dated preparation plan for quant research interviews: probability and statistics drills, research case practice, timed coding tests, a defensible CV, a thesis pitch, mocks and a pipeline tracked to the offer."
category: business
version: 1.0.0
tags: [quant-finance, quant-researcher-interviews, student, researcher, interview-prep, probability, research-case, coding-tests]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - job-application
    - resume
    - meeting-notes
    - metrics-log
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Quant Researcher Interviews
          description: "Preparing for quant research interviews: probability and statistics, research case questions, coding tests, discussing past research and questions on your thesis."
          projects:
            - name: Map of the quant research interview loop
              description: |-
                ## Purpose
                Most candidates prepare for the interview they imagine rather than the one they will sit. Quant research loops usually run from a CV screen through an online test, one or two phone or video screens, sometimes a take-home data task, and a final round mixing probability, statistics, research discussion and coding. Writing down the stages, what each tests and how long each usually takes tells you where your hours should go.

                ## Milestones
                1. Every stage of a typical research loop listed with what it tests and its usual format.
                2. Notes gathered from at least three people or published accounts of recent loops.
                3. Differences between firm types noted, such as take-home tasks at some and none at others.
                4. A one-page loop map saved where you plan your preparation.

                ## Notes
                Loops change from year to year and between graduate and experienced hire tracks. Treat any account older than two recruiting seasons as a hint, not a script.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page map of the research interview loop lists each stage, what it tests and its format, drawn from at least three recent sources."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down every interview stage you have heard of for quant research roles"
                - "Ask two people who interviewed in the last two seasons what their loop looked like"
                - "Note which stages test probability, statistics, research discussion and coding"
                - "Save the finished loop map at the top of your preparation folder"
            - name: Skills audit against the research interview syllabus
              description: |-
                ## Purpose
                Firms test a fairly stable syllabus: probability, statistics and regression, linear algebra, some time series and machine learning, data coding in Python, and your ability to discuss research. Scoring yourself from one to five on each topic, with one test question per topic to keep the score honest, turns a vague worry into a ranked list of what to study first.

                ## Milestones
                1. A list of 15 to 25 interview topics grouped under probability, statistics, maths, coding and research.
                2. Each topic scored from one to five after attempting one representative question.
                3. The five weakest topics marked as the first month's priorities.
                4. The audit dated so it can be rescored later.

                ## Notes
                Start from the **Skills matrix** template. Score after trying a question, not from memory of a course: a topic you passed three years ago is often a two today.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated skills matrix scores at least 15 interview topics from one to five, each backed by one attempted question, with the five weakest marked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the interview topics under probability, statistics, maths, coding and research"
                - "Attempt one representative question for each topic without notes"
                - "Score each topic from one to five based on how the attempt went"
                - "Mark the five weakest topics as the first month's study priorities"
            - name: Preparation calendar counted back from deadlines
              description: |-
                ## Purpose
                Graduate quant research applications often open early in the academic year and many internship places fill on a rolling basis, so preparation that starts when the first invite arrives is already late. A calendar that counts back from your target application dates fixes when each topic must be interview ready and leaves the final fortnight for mocks.

                ## Milestones
                1. Target application windows for your shortlist of firms written on one calendar.
                2. Each priority topic given a week by which it must be interview ready.
                3. Weekly hours committed and blocked in your diary.
                4. The last two weeks before the first expected interview reserved for full mocks.

                ## Notes
                Check each firm's careers page for the current season's dates. Rolling deadlines reward applying early once your CV and pitch are ready.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated calendar shows application windows, a ready-by week for every priority topic and blocked weekly study hours."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the current application dates on each target firm's careers page"
                - "Assign each priority topic a week by which it must be interview ready"
                - "Block your weekly preparation hours in your diary for the whole period"
                - "Re-plan the next four weeks against progress and new interview dates @recurring(monthly:3)"
            - name: Application pipeline tracker for research roles
              description: |-
                ## Purpose
                Ten or twenty applications with different stages, contacts, test links and response deadlines are easy to lose track of, and a missed online test link usually ends that application. One tracker with every firm, role, stage, date and next action keeps the pipeline visible and shows where conversion is breaking down.

                ## Milestones
                1. Every application entered with firm, role, date applied, stage and next action.
                2. Online test links and their expiry dates recorded the day they arrive.
                3. Contacts and referrers listed against each application.
                4. Conversion from application to screen to final round counted once a month.

                ## Notes
                Start from the **Job application** template for each live application, and keep one summary list beside them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker lists every application with its stage and next action, updated weekly, with no online test link allowed to expire unopened."
                cadence: rolling
              tasks:
                - "Create the tracker with columns for firm, role, stage, dates and next action"
                - "Enter every application already sent, including the referrer if any"
                - "Update every row's stage and next action @recurring(weekly:fri)"
                - "Count conversion from application to screen to final round each month"
            - name: CV claims you can defend line by line
              description: |-
                ## Purpose
                Research interviewers often open with your CV and pick the line you least expect, so every project, method and number on it must survive five minutes of questions. Writing a short defence for each line, with the data, method, result and what you would do differently, finds the overstated claims before an interviewer does.

                ## Milestones
                1. Every bullet on the CV listed with the data, method, result and your own contribution.
                2. Any claim you cannot explain in detail reworded or removed.
                3. Numbers on the CV checked against your own notes or published work.
                4. A one-page research CV ready to send, with a defence sheet behind it.

                ## Notes
                Start from the **Resume** template. Listing a method such as gradient boosting or Kalman filtering invites a question on how it works; only list what you can derive or explain.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page research CV is final, and every line on it has a written defence covering data, method, result and your contribution."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Copy every CV bullet into a defence sheet with space under each"
                - "Write the data, method, result and your contribution under each bullet"
                - "Reword or cut any claim you could not explain for five minutes"
                - "Ask a friend to question you on three random CV lines"
            - name: Two-minute research pitch for your best project
              description: |-
                ## Purpose
                Interviewers ask you to explain your thesis or best project to a smart non-specialist, and rambling for ten minutes signals poor research judgement. A two-minute version with the question, the data, the method, the result and its limits, followed by a five-minute technical version, gives you control of the first and most memorable part of many interviews.

                ## Milestones
                1. A written two-minute version covering question, data, method, result and limits.
                2. A five-minute technical version prepared for follow-up questions.
                3. The pitch delivered to someone outside your field who could repeat the main point.
                4. Three likely follow-up questions written with answers.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-minute and a five-minute version of your research pitch are written, timed and delivered once to a non-specialist listener."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the question, data, method, result and limits in five sentences"
                - "Time yourself delivering it and cut until it fits in two minutes"
                - "Write three follow-up questions an interviewer is likely to ask"
                - "Deliver the pitch to a new listener and note where they got lost @recurring(monthly:18)"
            - name: Coding set-up for timed online tests
              description: |-
                ## Purpose
                Online assessments run in browser editors or shared notebooks with limited libraries, and losing ten minutes to an unfamiliar editor costs a question. Practising in the same kind of environment, with the Python standard library, NumPy and pandas calls you need at your fingertips, removes that friction before it counts.

                ## Milestones
                1. The likely test platforms and their allowed languages and libraries noted.
                2. A practice account on at least one similar platform working.
                3. A one-page sheet of the pandas and NumPy calls you use most, learned rather than looked up.
                4. One full timed practice test completed in that environment.

                ## Notes
                Some tests forbid outside documentation. Practise without searching so the real test is no harder than the practice.
              priority: medium
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A practice account is set up on a similar platform and one full timed test has been completed there without outside documentation."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note which test platforms your target firms are known to use"
                - "Open a practice account on one similar platform"
                - "Write a one-page sheet of the pandas and NumPy calls you use most"
                - "Complete one full timed practice test without outside documentation"
            - name: Baseline mock interview before studying
              description: |-
                ## Purpose
                Without a baseline you cannot tell whether eight weeks of preparation moved anything. One full mock at the start, covering a probability question, a statistics question, a research discussion and a short coding task, recorded and scored on a fixed rubric, gives a starting point and often reveals that explanation, not knowledge, is the weak spot.

                ## Milestones
                1. A rubric written scoring correctness, speed, clarity of reasoning and handling of hints.
                2. One full mock completed with a partner or mentor playing interviewer.
                3. The mock scored on the rubric and the scores logged with the date.
                4. The two biggest surprises added to the skills audit.

                ## Notes
                Start from the **Metrics log** template to keep the rubric scores from this and later mocks in one place.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One full mock interview has been scored on a written rubric and the dated scores are in the progress log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a four-part rubric for correctness, speed, clarity and hint handling"
                - "Ask a partner or mentor to run a 45-minute mixed mock"
                - "Score the mock on the rubric and log the date and scores"
                - "Add the two biggest surprises to the skills audit"
            - name: Mock interview partner and study group
              description: |-
                ## Purpose
                Explaining reasoning out loud to a person who interrupts is a different skill from solving problems alone at a desk. Two or three peers on the same recruiting cycle, swapping interviewer and candidate roles, give you far more mocks than any careers service and keep you honest about the weekly plan.

                ## Milestones
                1. Two or three peers recruiting for similar roles agreed to practise together.
                2. A shared problem bank started with each member contributing questions.
                3. A standing weekly slot agreed and kept for a month.
                4. A simple rule agreed for confidentiality of questions from real interviews.

                ## Notes
                Many firms ask candidates not to share their questions. Keep the shared bank to published and invented problems.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A group of at least two peers meets weekly for a month, with a shared problem bank of published and invented questions."
                cadence: rolling
              tasks:
                - "Message three peers on the same recruiting cycle about practising together"
                - "Start a shared problem bank and add ten questions of your own"
                - "Hold the group's problem swap and role rotation @recurring(weekly:wed)"
                - "Agree in writing to keep real interview questions out of the bank"
            - name: Weekly mixed mock interview rotation
              description: |-
                ## Purpose
                Real rounds jump from a dice question to regression assumptions to your thesis inside one hour, and practising topics in isolation never trains that switching. A weekly 45-minute mixed mock, scored on the same rubric as the baseline, shows whether the gap is closing and keeps interview nerves familiar.

                ## Milestones
                1. One mixed mock held every week, alternating interviewer and candidate.
                2. Each mock scored on the baseline rubric and logged.
                3. Every missed question copied to the error log within a day.
                4. Rubric scores trending up over four consecutive weeks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A mixed mock is held and scored every week, with scores logged and every missed question added to the error log."
                cadence: rolling
              tasks:
                - "Run one 45-minute mixed mock with your partner @recurring(weekly:sat)"
                - "Score the mock on the rubric and add the scores to the log"
                - "Copy every missed or slow question into the error log"
                - "Pick next week's mock theme from the lowest rubric score"
            - name: Spoken probability sets with a timer
              description: |-
                ## Purpose
                Interviewers care as much about how you reach a probability answer as about the number, and silence while you think reads as being stuck. Solving three problems twice a week out loud, with a timer and a recording, trains you to state assumptions, set up the sample space and check the answer with a sanity bound while someone listens.

                ## Milestones
                1. Three problems solved aloud twice a week with the time taken noted.
                2. Each answer checked with a quick bound or simulation afterwards.
                3. A habit of stating assumptions before calculating visible in recordings.
                4. Median time per problem falling over a month.

                ## Notes
                This is interview delivery practice. Volume drilling of puzzles belongs in a separate brainteaser routine if you keep one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two spoken sets of three problems each are done every week for a month, with times logged and the median time falling."
                cadence: rolling
              tasks:
                - "Solve three probability problems aloud with a timer @recurring(weekly:mon,thu)"
                - "State the assumptions out loud before starting any calculation"
                - "Check each answer with a bound or a ten-line simulation"
                - "Log the time per problem and the ones that needed a hint"
            - name: Statistics and regression question bank
              description: |-
                ## Purpose
                Research interviews lean heavily on statistics: bias and variance of estimators, what happens to OLS when regressors are correlated, why a high R squared on returns is suspicious, what a p-value is not. A bank of 60 to 100 short questions with model answers in your own words, worked through five at a time, turns a semester of notes into answers you can give in thirty seconds.

                ## Milestones
                1. A bank of at least 60 statistics and regression questions with your own model answers.
                2. Each question tagged by topic and by how confidently you answered it last.
                3. Five questions answered aloud every week, weakest tags first.
                4. Every question in the bank answered confidently at least once.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A bank of at least 60 tagged statistics questions exists and five are answered aloud each week until every one has been answered confidently."
                cadence: rolling
              tasks:
                - "Write the first 20 statistics questions with model answers in your words"
                - "Tag each question by topic and by last confidence level"
                - "Answer five bank questions aloud, weakest tags first @recurring(weekly:wed)"
                - "Add five new questions after every real or mock interview"
            - name: Error log of missed interview questions
              description: |-
                ## Purpose
                The questions you missed once are the ones most likely to cost you again, in a slightly different form. Logging every miss from mocks, tests and real rounds with the right answer, the reason you missed it and a rewritten variant, then redoing the oldest entries each week, is the highest-return hour in the plan.

                ## Milestones
                1. Every missed or slow question logged within a day with the reason it was missed.
                2. Each entry carrying a variant question written by you.
                3. The oldest unresolved entries redone every week.
                4. Entries closed only after two clean attempts on separate days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every missed question from mocks and interviews is in the log within a day, and entries close only after two clean attempts."
                cadence: rolling
              tasks:
                - "Set up the log with columns for question, reason missed, variant and attempts"
                - "Add every miss from mocks, tests and real rounds within a day"
                - "Redo the five oldest open entries and their variants @recurring(weekly:sun)"
                - "Close an entry only after two clean attempts on different days"
            - name: Timed data coding practice blocks
              description: |-
                ## Purpose
                Quant research coding tests are usually less about algorithm puzzles and more about loading messy data, computing returns or rolling statistics, joining tables and avoiding look-ahead under a clock. Two timed blocks a week on data problems, with solutions reviewed for correctness and clarity, build the speed that a 60-minute test demands.

                ## Milestones
                1. Two timed data problems solved every week in a test-like editor.
                2. Each solution checked against an independent calculation or test case.
                3. A list of your recurring mistakes, such as off-by-one windows or misaligned dates.
                4. Typical solve time inside the time a real test allows.

                ## Notes
                Algorithm-heavy rounds for developer roles need a different plan. Keep this block on data manipulation and numerical code.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two timed data coding problems are completed and checked every week, with recurring mistakes listed and solve times logged."
                cadence: rolling
              tasks:
                - "Complete one timed data coding problem in a test-like editor @recurring(weekly:tue,fri)"
                - "Check each answer against an independent calculation"
                - "Add any repeated mistake to your recurring mistakes list"
                - "Read one solution written by a stronger coder and note one idea @recurring(monthly:24)"
            - name: Paper reading for interview conversations
              description: |-
                ## Purpose
                Being asked what you have read recently and why it matters is common in research rounds, and quoting only famous papers from decades ago sounds thin. Reading one recent working paper or journal article a month and writing three lines on the idea, the test and the weakness gives you fresh material and shows research taste.

                ## Milestones
                1. One recent paper read every month with a three-line summary.
                2. Each summary naming one weakness or test you would add.
                3. At least three summaries ready to discuss in any interview.
                4. One paper chosen that connects to your own research.

                ## Notes
                Pick papers with data and tests you understand. An interviewer will ask how you would check the result, not just what it found.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A summary file holds at least three recent paper summaries, each with the idea, the test and one weakness you would probe."
                cadence: rolling
              tasks:
                - "Pick one recent working paper on a topic you could discuss confidently"
                - "Read one paper and write a three-line summary with one weakness @recurring(monthly:8)"
                - "Practise a 90-second spoken version of each summary"
                - "Link one paper to your own research for the 'what are you reading' question"
            - name: Interview debrief within 24 hours
              description: |-
                ## Purpose
                Details of a real interview fade within a day, and the questions you stumbled on are exactly what the next round or the next firm will probe. A short written debrief after every interview, with questions asked, what went well, what went badly and who you met, feeds the error log and makes thank-you notes and later rounds easier.

                ## Milestones
                1. A debrief written within 24 hours of every real interview.
                2. Each debrief listing questions, your answers, misses and interviewer names.
                3. Misses copied into the error log the same day.
                4. Patterns across debriefs reviewed after every five interviews.

                ## Notes
                Start from the **Meeting notes** template. Keep debriefs private: they are for your preparation, not for sharing questions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every real interview has a private written debrief within 24 hours, with misses moved to the error log the same day."
                cadence: rolling
              tasks:
                - "Make a debrief page with sections for questions, answers, misses and people"
                - "Write the debrief within 24 hours of each interview"
                - "Copy every miss into the error log the same day"
                - "Review patterns across debriefs after every fifth interview"
            - name: Flashcards for formulas and definitions
              description: |-
                ## Purpose
                Some interview answers are pure recall: the variance of a sum, the density of a normal, the OLS estimator in matrix form, the definition of a martingale. Ten minutes a day on a spaced repetition deck keeps those facts instant, so your thinking time in the room goes on the problem rather than on remembering a formula.

                ## Milestones
                1. A deck of 100 to 200 cards built from the syllabus and the error log.
                2. Due cards reviewed every day in under fifteen minutes.
                3. Cards that fail three times rewritten or split.
                4. Recall rate on mature cards above 90 percent.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A spaced repetition deck of at least 100 cards is reviewed daily, with mature card recall above 90 percent."
                cadence: rolling
              tasks:
                - "Create a deck and add 30 formula and definition cards from the syllabus"
                - "Review the day's due flashcards in under fifteen minutes @recurring(daily)"
                - "Turn every error log entry with a recall gap into a card"
                - "Rewrite or split any card that fails three times"
            - name: Monthly progress review and audit rescore
              description: |-
                ## Purpose
                Weekly drills feel productive even when the weak topics are not moving. A monthly hour that rescores the skills audit, compares mock rubric scores and checks the calendar shows whether to keep going, shift hours to a different topic or move an application date.

                ## Milestones
                1. The skills audit rescored every month with one test question per topic.
                2. Mock rubric scores compared with the previous month.
                3. Hours for the next month moved toward the topics that did not improve.
                4. One sentence recorded on what changed and why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The skills audit is rescored monthly, mock scores compared, and next month's hours reallocated with a written reason."
                cadence: rolling
              tasks:
                - "Rescore the skills audit with one fresh question per topic @recurring(monthly:28)"
                - "Compare this month's mock rubric scores with last month's"
                - "Move next month's hours toward topics that did not improve"
                - "Write one sentence on what changed in the plan and why"
            - name: Conditional probability and Bayes under questioning
              description: |-
                ## Purpose
                Bayes questions dressed up as tests, coins of unknown bias or a trader who is right some fraction of the time appear in nearly every research loop, and interviewers follow up by changing one number. Working through the family until you can set up the tree or table aloud, and adapt when the prior or the evidence changes, makes these questions marks you collect.

                ## Milestones
                1. Twenty conditional probability problems solved with the setup written before the arithmetic.
                2. Each solved two ways, with a tree or table and with the formula.
                3. Follow-up variants answered where the prior or the evidence is changed.
                4. A short note on the common traps, such as confusing P of A given B with P of B given A.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty conditional probability problems are solved two ways each, with changed-number follow-ups answered aloud without notes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect twenty conditional probability problems from textbooks and past mocks"
                - "Solve each with a tree or table first, then with the formula"
                - "Ask your partner to change one number and answer the variant aloud"
                - "Write a half-page note on the traps you fell into"
            - name: Expected values, Markov chains and stopping problems
              description: |-
                ## Purpose
                Questions about the expected number of flips until a pattern, the chance of reaching one boundary before another, or when to stop a game test whether you can set up a recursion rather than guess. These come up constantly in research interviews, and learning the three or four standard setups, conditioning on the first step, absorbing chains and optimal stopping, covers most variants.

                ## Milestones
                1. First-step conditioning applied cleanly to at least ten expected value problems.
                2. Gambler's ruin and absorbing chain problems solved with a transition setup.
                3. Two optimal stopping problems solved and explained aloud.
                4. Each type checked once with a quick simulation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least ten expected value, absorbing chain and stopping problems are solved aloud with a recursion, each checked once by simulation."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Solve five expected waiting time problems by conditioning on the first step"
                - "Set up gambler's ruin as an absorbing chain and solve it two ways"
                - "Explain one optimal stopping problem aloud to your partner"
                - "Write a short simulation to check one answer of each type"
            - name: Regression questions interviewers ask
              description: |-
                ## Purpose
                Regression is the workhorse of quant research and interviewers probe it deeply: derive OLS, explain what heteroskedasticity does to standard errors, say what happens when you regress y on x versus x on y, interpret a coefficient after adding a correlated control. Being able to derive and explain these on a whiteboard separates research candidates from those who only call a library.

                ## Milestones
                1. OLS derived in matrix form from memory, with assumptions listed.
                2. Effects of multicollinearity, heteroskedasticity and autocorrelation explained with remedies.
                3. Omitted variable bias explained with a worked example.
                4. Ridge and lasso explained as changes to the objective, with when each helps.

                ## Notes
                Interviewers often ask what changes if you double every y or add a constant to x. Practise these quick transformation questions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "OLS can be derived from memory and five standard regression pitfalls explained aloud with a worked example each."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Derive the OLS estimator in matrix form on paper without notes"
                - "Explain multicollinearity, heteroskedasticity and autocorrelation with remedies"
                - "Work an omitted variable bias example with simulated data"
                - "Redo one regression derivation from memory on a blank page @recurring(monthly:12)"
            - name: Hypothesis tests and multiple comparisons
              description: |-
                ## Purpose
                A research interviewer who shows you a strategy with a t-statistic of 2.1 wants to hear how many ideas were tried before it. Knowing what a p-value means, how power and sample size relate, and why testing a hundred signals guarantees false discoveries is central to sounding like a researcher rather than a backtest optimiser.

                ## Milestones
                1. The definition of a p-value and a confidence interval stated precisely.
                2. Power and sample size worked through for a Sharpe ratio example.
                3. Bonferroni and false discovery rate corrections explained with when each fits.
                4. A spoken answer ready for 'how do you know this result is not luck'.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-minute spoken answer on multiple testing and false discoveries is ready, backed by worked power and correction examples."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write precise one-sentence definitions of a p-value and a confidence interval"
                - "Work out how many years of data a given Sharpe ratio needs to be significant"
                - "Explain Bonferroni and false discovery rate corrections to your partner"
                - "Rehearse your answer to 'how do you know this result is not luck'"
            - name: Time series basics for research rounds
              description: |-
                ## Purpose
                Candidates from physics, maths or machine learning often know models but not the traps specific to financial time series: non-stationary prices, autocorrelated returns at short horizons, overlapping observations and look-ahead in features. A focused pass on these lets you answer the follow-up 'and what goes wrong if you do that on returns' with confidence.

                ## Milestones
                1. Stationarity, unit roots and differencing explained with a price and returns example.
                2. Autocorrelation and its effect on standard errors explained, with a correction named.
                3. Overlapping return windows and their effect on inference explained.
                4. Three ways look-ahead creeps into features listed with how to prevent each.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Stationarity, autocorrelation, overlapping windows and look-ahead traps can each be explained aloud with an example in under two minutes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Plot a price series and its returns and explain which is stationary"
                - "Explain how autocorrelation distorts standard errors and name a correction"
                - "List three ways look-ahead enters features and how to prevent each"
                - "Answer two time series follow-ups aloud in your next mock"
            - name: Linear algebra and optimisation refresher
              description: |-
                ## Purpose
                Eigenvalues of a covariance matrix, principal components, positive definiteness, and Lagrange multipliers for a constrained portfolio come up in research rounds as quick whiteboard checks. Refreshing these with finance-flavoured examples, such as the minimum variance portfolio, means a short derivation does not eat half the interview.

                ## Milestones
                1. Eigen decomposition of a two by two covariance matrix done by hand.
                2. Principal components explained in terms of variance explained by each factor.
                3. The minimum variance portfolio derived with a Lagrange multiplier.
                4. Conditions for a matrix to be a valid covariance matrix stated.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The minimum variance portfolio and a two by two eigen decomposition are derived by hand without notes in under ten minutes each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compute the eigenvalues of a two by two covariance matrix by hand"
                - "Explain principal components to your partner using a returns example"
                - "Derive the minimum variance portfolio with a Lagrange multiplier"
                - "Write down the conditions for a valid covariance matrix"
            - name: Pandas and NumPy wrangling under time pressure
              description: |-
                ## Purpose
                Research coding tests reward fluent, correct data handling: grouped operations, rolling windows, merges on dates, pivoting and vectorising loops. A structured set of drills on these operations, each written once slowly and then repeated against the clock, makes the common patterns automatic and frees attention for the actual question.

                ## Milestones
                1. Drills written for groupby, rolling windows, date merges, pivots and resampling.
                2. Each drill completed under a time limit without looking anything up.
                3. A vectorised version written for every drill first solved with a loop.
                4. Missing data and duplicate timestamps handled explicitly in every solution.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten wrangling drills covering groupby, rolling, merges, pivots and resampling are each completed under time without documentation."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write ten drills covering groupby, rolling, date merges, pivots and resampling"
                - "Solve each drill slowly once with notes allowed"
                - "Repeat each drill against a timer without documentation"
                - "Rewrite any loop solution in vectorised form"
            - name: Machine learning questions for research roles
              description: |-
                ## Purpose
                Interviewers ask machine learning questions to see whether you understand why financial data is hard: low signal to noise, non-stationarity, leakage across time and overfitting with many features. Preparing crisp answers on bias and variance, regularisation, cross-validation for time series and when a linear model beats a deep one shows judgement rather than buzzwords.

                ## Milestones
                1. Bias and variance, regularisation and early stopping explained in plain terms.
                2. Why standard k-fold cross-validation leaks on time series explained, with an alternative.
                3. Feature importance methods and their pitfalls compared.
                4. A spoken answer ready for 'when would you not use a neural network here'.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Spoken answers on bias and variance, time series cross-validation leakage and model choice are each delivered in under two minutes in a mock."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a plain-language explanation of bias, variance and regularisation"
                - "Explain why k-fold cross-validation leaks on time series and name an alternative"
                - "Compare two feature importance methods and their failure modes"
                - "Explain one machine learning concept aloud to your partner @recurring(weekly:tue)"
            - name: Finance basics for researchers from other fields
              description: |-
                ## Purpose
                Firms hire physicists, computer scientists and statisticians for research, but still expect them to know what a return, a Sharpe ratio, a factor and a transaction cost are. Learning the vocabulary and a handful of stylised facts, such as fat tails and volatility clustering, prevents an easy question from exposing a gap that has nothing to do with ability.

                ## Milestones
                1. Simple and log returns, volatility, Sharpe ratio and drawdown defined and computed on real data.
                2. Common factors such as market, value, momentum and size explained in a sentence each.
                3. Main stylised facts of returns listed with a plot for each.
                4. Why costs and capacity limit many strategies explained in a short answer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Returns, Sharpe ratio, drawdown, four common factors and three stylised facts can each be explained and computed on a real price series."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Download a free daily price series and compute returns, volatility and drawdown"
                - "Write one sentence each on the market, value, momentum and size factors"
                - "Plot the return distribution and the autocorrelation of squared returns"
                - "Read one market summary and explain one move in research terms @recurring(weekly:sun)"
            - name: Research case question framework
              description: |-
                ## Purpose
                Open questions such as 'how would you predict next week's returns for a stock' or 'design a signal from this data set' are where research interviews are won or lost. A repeatable framework, clarify the target and horizon, check the data, propose a simple baseline, define the test and its pitfalls, then discuss costs and capacity, keeps your answer structured when the question is unfamiliar.

                ## Milestones
                1. A written six-step framework for open research questions.
                2. The framework applied to five different case prompts on paper.
                3. One spoken case answered per week with a partner.
                4. Each answer naming at least one way the idea could fail out of sample.

                ## Notes
                Interviewers reward a simple baseline and a careful test plan over an ambitious model. Always say how you would know you were fooling yourself.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written case framework has been applied to at least five prompts, with each answer naming a test plan and an out-of-sample failure mode."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a six-step framework for answering open research questions"
                - "Apply the framework on paper to five different case prompts"
                - "Practise one case question aloud with your partner @recurring(weekly:thu)"
                - "Add a failure mode and a cost check to every case answer"
            - name: Backtest critique practice
              description: |-
                ## Purpose
                A favourite research round shows you an equity curve or a results table and asks what is wrong with it. Practising on published or invented backtests, hunting for survivorship, look-ahead, missing costs, too many trials and unrealistic fills, trains the scepticism firms hire researchers for.

                ## Milestones
                1. A checklist of at least ten backtest flaws to look for.
                2. Five backtests critiqued in writing using the checklist.
                3. Each critique ranking the flaws by how much they could inflate results.
                4. A spoken two-minute critique delivered in a mock.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five backtests are critiqued in writing against a ten-point flaw checklist, and one critique is delivered aloud in a mock."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a checklist of ten flaws that inflate backtest results"
                - "Critique one published or invented backtest against the checklist @recurring(monthly:20)"
                - "Rank the flaws you find by how much they could inflate the result"
                - "Ask your partner to invent a flawed backtest for you to critique aloud"
            - name: Data take-home project delivery
              description: |-
                ## Purpose
                Some firms send a data set and a few days to find something predictive and write it up. Interviewers judge the cleanliness of the analysis, honest validation and clear writing far more than the headline number, and a rushed submission with leakage ends the process. Preparing a template workflow before the task arrives means the days go on thinking, not set-up.

                ## Milestones
                1. A template notebook and report structure ready before any take-home arrives.
                2. Data checks, a simple baseline and a held-out test included in every submission.
                3. A two-page write-up with method, results, limits and next steps.
                4. The submission sent before the deadline with code that runs from a clean start.

                ## Notes
                Never use outside help the firm has not allowed, and say plainly in the write-up what did not work. Honest limits read as strength.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A take-home is submitted on time with code that runs from a clean start and a two-page write-up covering method, held-out results and limits."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Build a template notebook with data checks, baseline and held-out test sections"
                - "Write a two-page report skeleton with method, results, limits and next steps"
                - "Do one practice take-home on a public data set within three days"
                - "Rerun the practice code from a clean environment before calling it done"
            - name: Presenting your take-home in the follow-up
              description: |-
                ## Purpose
                After a take-home, firms often ask you to walk a researcher through it and then attack your choices. Preparing a ten-minute walkthrough and answers to the obvious challenges, such as why that validation split, what if costs doubled, what would you try next, turns the follow-up into a conversation you lead.

                ## Milestones
                1. A ten-minute walkthrough of the take-home rehearsed and timed.
                2. Answers prepared for at least five likely challenges to your choices.
                3. One alternative approach you rejected, with the reason, ready to discuss.
                4. A mock follow-up held where a partner attacks the work.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A timed ten-minute walkthrough and written answers to five challenges are ready, tested in one adversarial mock before the follow-up."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Outline a ten-minute walkthrough of the take-home"
                - "Write answers to five challenges an interviewer is likely to raise"
                - "Note one approach you rejected and why"
                - "Ask your partner to attack the work in a mock follow-up"
            - name: Choosing which past project to lead with
              description: |-
                ## Purpose
                Candidates with a thesis, a summer internship and a side project often lead with the most impressive-sounding one rather than the one they can discuss most deeply. Scoring each project on your depth of ownership, relevance to research, quality of the evidence and how well it survives hard questions picks the lead story deliberately.

                ## Milestones
                1. Every candidate project listed with your specific contribution.
                2. Each scored on ownership, relevance, evidence quality and resilience under questions.
                3. One lead project and one backup chosen, with the reason written down.
                4. The CV order and the research pitch updated to match.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A lead project and a backup are chosen from a scored list, the reason is recorded and the CV and pitch reflect the choice."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every project you could discuss with your exact contribution"
                - "Score each on ownership, relevance, evidence and how it survives questions"
                - "Choose a lead project and a backup and write why"
                - "Reorder the CV and update the pitch to match the choice"
            - name: Talking about confidential past research safely
              description: |-
                ## Purpose
                Researchers moving between firms, or students who interned at one, are asked about past work they are not allowed to disclose, and oversharing is both a contract breach and a warning sign to the interviewer. Preparing a disclosure-safe version of each project, describing the problem, the kind of method and the lessons without data, parameters or results, protects you and still shows your thinking.

                ## Milestones
                1. Confidentiality terms in any employment or internship agreement reread.
                2. A safe version of each confidential project written at the level of problem, method family and lessons.
                3. A polite sentence ready for declining questions that go too far.
                4. Any doubt about what may be said checked with a lawyer or the former employer's guidance.

                ## Notes
                Never bring code, data, notebooks or results from a previous employer, even to illustrate a point. Interviewers who push for them are testing you.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each confidential project has a written disclosure-safe description and a prepared sentence for declining questions beyond it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Reread the confidentiality terms in your current or past agreements"
                - "Write a safe version of each confidential project without data or results"
                - "Prepare one polite sentence for declining a question that goes too far"
                - "Note any open question to check with a lawyer before interviews"
            - name: Recorded answer review for clearer delivery
              description: |-
                ## Purpose
                Many strong candidates lose offers on delivery: long silences, filler, jumping to equations before setting up the problem or never stating the final answer. Recording one spoken answer a month and watching it back against a short checklist fixes habits that no amount of solo study will reveal.

                ## Milestones
                1. One answer recorded every month on video or audio.
                2. Each recording reviewed against a five-point delivery checklist.
                3. One delivery habit chosen to fix in the following month.
                4. A visible improvement on the chosen habit in the next recording.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly recorded answer is reviewed against a five-point checklist, with one named habit tracked from month to month."
                cadence: rolling
              tasks:
                - "Write a five-point delivery checklist for spoken answers"
                - "Record one spoken answer and review it against the checklist @recurring(monthly:15)"
                - "Choose one delivery habit to fix next month"
                - "Ask the agent to summarise patterns across your recording notes"
            - name: Questions to ask your research interviewers
              description: |-
                ## Purpose
                The end of each round is a chance to learn how research really works there and to show you think like a researcher. Questions about how ideas move from research to production, how failed ideas are recorded, how research is reviewed and how researchers and traders work together tell you far more than questions about perks.

                ## Milestones
                1. A bank of at least ten questions about research process, review, data and team structure.
                2. Questions matched to the interviewer's likely role, such as researcher, portfolio manager or engineer.
                3. Answers to the questions recorded in each debrief.
                4. Answers compared across firms before any offer decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A bank of ten or more research process questions exists and the answers from each firm are recorded in debriefs for comparison."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write ten questions about research process, review, data and team structure"
                - "Mark which questions suit a researcher, a portfolio manager or an engineer"
                - "Record the answers in each interview debrief"
                - "Compare answers across firms before deciding on any offer"
            - name: Online assessment round preparation
              description: |-
                ## Purpose
                Online tests are usually the first filter after the CV and can mix probability multiple choice, numerical reasoning and timed coding. Two or three full practice runs in test conditions, a quiet slot booked in advance and a clear reading of the instructions turn a stressful link into a routine sitting.

                ## Milestones
                1. The test format and time limit confirmed from the invitation.
                2. Three full practice tests completed under the same time limits.
                3. A quiet two-hour slot booked before the link expires.
                4. The test completed and a short debrief written the same day.

                ## Notes
                Read the honesty rules in the invitation. Many tests record the screen and forbid outside help.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three full practice tests are done under real time limits and the online assessment is completed before its link expires, with a same-day debrief."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the invitation and note the format, time limit and expiry date"
                - "Complete three full practice tests under the same time limits"
                - "Book a quiet two-hour slot before the link expires"
                - "Write a short debrief straight after sitting the test"
            - name: First phone or video screen preparation
              description: |-
                ## Purpose
                The first screen often blends a short CV conversation with two or three quick probability or statistics questions, and a researcher decides in 30 minutes whether to invest a full round in you. Preparing your pitch, a short why-research answer and a warm-up set the morning of the call makes those 30 minutes count.

                ## Milestones
                1. The interviewer's name, role and any public work looked up.
                2. Your two-minute pitch and why-research answer rehearsed aloud.
                3. Equipment, connection and a quiet room checked the day before.
                4. A warm-up of three problems done on the morning of the screen.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The screen is held with pitch rehearsed, equipment tested the day before and a debrief written within 24 hours."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up the interviewer's role and any public research they have"
                - "Rehearse the pitch and a 60-second answer to 'why research'"
                - "Test camera, microphone, connection and a writing surface the day before"
                - "Do three warm-up problems on the morning of the screen"
            - name: Final round preparation for a research superday
              description: |-
                ## Purpose
                Final rounds stack four to six interviews in a day, often mixing probability, statistics, a research discussion, a coding exercise and a senior conversation. Stamina and consistency matter as much as peak ability, so a full-length mock day, a plan for food and breaks and a reset routine between interviews are worth preparing as seriously as the content.

                ## Milestones
                1. One full-length mock day of four interviews completed in the fortnight before.
                2. Logistics settled: travel or video set-up, timings, food and water.
                3. A one-minute reset routine practised for use between interviews.
                4. Notes written on each interviewer after the day for the debrief.

                ## Notes
                A bad interview in the morning rarely ends the day. Interviewers usually score independently, so reset and treat each room as fresh.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full four-interview mock day is completed in the fortnight before, and the final round is attended with logistics settled and a debrief written."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask your study group to run a mock day of four back-to-back interviews"
                - "Confirm travel or video set-up, timings and breaks with the recruiter"
                - "Practise a one-minute reset routine between mock interviews"
                - "Write notes on each interviewer the evening after the final round"
            - name: Research talk for a research-heavy final round
              description: |-
                ## Purpose
                Some research firms ask PhD and experienced candidates to give a 30 to 60 minute talk on their research to a room of researchers who will interrupt. A talk built for that audience, with motivation, data, method, robustness checks and honest limits, rehearsed with hostile questions, is very different from a conference talk to specialists.

                ## Milestones
                1. Talk length, audience and format confirmed with the recruiter.
                2. Slides built around question, data, method, checks and limits, with technical detail in backup slides.
                3. Two full rehearsals held with listeners told to interrupt.
                4. Answers prepared for the five hardest questions raised in rehearsal.

                ## Notes
                Avoid sensitive results from a current employer entirely. A thesis chapter or public paper is the safe choice for most talks.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A timed research talk with backup slides has had two interrupted rehearsals and written answers to the five hardest questions raised."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Confirm the talk length, audience and format with the recruiter"
                - "Build the slides around question, data, method, checks and limits"
                - "Hold two rehearsals with listeners told to interrupt"
                - "Write answers to the five hardest questions raised in rehearsal"
            - name: Internship to return offer conversion
              description: |-
                ## Purpose
                Many full-time quant research hires come from interns, and conversion usually depends on a final presentation and how the intern handled research discipline over ten or twelve weeks. Setting goals with your mentor in week one, keeping a research log and preparing the final presentation early turns the internship into the longest interview you will ever sit.

                ## Milestones
                1. Goals and the evaluation process agreed with your mentor in the first week.
                2. A research log kept throughout with ideas, tests and dead ends.
                3. Mid-point feedback asked for and acted on.
                4. The final presentation rehearsed a week early, with limits stated clearly.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written goals from week one, mid-point feedback and a final presentation rehearsed a week before the end of the internship are all in place."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your mentor in week one how interns are evaluated for return offers"
                - "Keep a research log of ideas, tests and dead ends throughout"
                - "Request mid-point feedback and note the two things to change"
                - "Rehearse the final presentation a week before it is due"
            - name: Offer decision under response deadlines
              description: |-
                ## Purpose
                Quant offers sometimes come with short response windows while other processes are still running. Knowing in advance what matters to you, such as research autonomy, team, location and pay structure, and asking politely for an extension where needed, prevents a rushed yes or a lost offer.

                ## Milestones
                1. Your top five decision criteria written and ranked before any offer arrives.
                2. Each offer recorded with its deadline, terms and answers from your interviewer questions.
                3. Extensions requested politely where other processes are near their end.
                4. A decision recorded with the reason before the deadline.

                ## Notes
                Read any non-compete or notice terms in the offer carefully and get independent legal advice on them if they are unclear.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each offer is scored against criteria ranked in advance, and a decision with its reason is recorded before the response deadline."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Rank your top five criteria for choosing between offers"
                - "Record each offer's deadline, terms and contract restrictions"
                - "Ask politely for an extension where another process is nearly finished"
                - "Write the decision and its reason before the deadline"
            - name: Undergraduate internship interview route
              description: |-
                ## Purpose
                Undergraduates recruiting for research internships compete with master's and PhD students, usually with less research to discuss and lectures and exams in the same weeks. A plan that leans on probability, statistics and coding strength, presents a course or personal project well and fits around term deadlines gives a student the best odds without wrecking grades.

                ## Milestones
                1. Internship application windows mapped against your exam and coursework calendar.
                2. One personal or course project polished enough to discuss for ten minutes.
                3. Weekly preparation hours set at a level you can keep during term.
                4. At least one mock with a student who interned at a quant firm.

                ## Notes
                Grades still matter for screens. Protect revision weeks in the calendar before adding preparation hours.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An internship plan sets weekly hours around the term calendar and one project is ready to discuss for ten minutes."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Lay internship application windows over your exam and coursework dates"
                - "Choose one course or personal project and prepare a ten-minute walkthrough"
                - "Set weekly preparation hours you can keep during term"
                - "Ask a student who interned at a quant firm for one mock"
            - name: Master's student one-year recruiting plan
              description: |-
                ## Purpose
                One-year master's programmes leave a few months between arrival and the main recruiting window, with heavy coursework running alongside. A plan that starts preparation before the programme begins, uses programme projects as interview material and books mocks with alumni makes the short window workable.

                ## Milestones
                1. Preparation started at least two months before the programme begins.
                2. Main recruiting dates mapped against the programme timetable.
                3. One programme project chosen early as interview material and documented as you go.
                4. Mocks booked with at least two alumni now in research roles.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recruiting plan maps dates against the programme timetable, names a documented programme project and lists two booked alumni mocks."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Map the main recruiting dates against your programme timetable"
                - "Pick one programme project to document as interview material"
                - "Ask the careers office for two alumni in quant research roles"
                - "Book a mock with each alumnus before the first application deadline"
            - name: PhD thesis questions from a quant panel
              description: |-
                ## Purpose
                PhD candidates are often grilled on their thesis by researchers outside the field, who probe how you chose the problem, how you know the result is real, what you would do differently and what you did yourself. Preparing for that panel, rather than a committee of specialists, means translating your contribution into evidence of research judgement.

                ## Milestones
                1. A list of twenty hard questions about your thesis written from an outsider's view.
                2. Answers prepared on problem choice, validation, failures and your own contribution.
                3. A version of the core result explained without field-specific jargon.
                4. A mock thesis grilling held with someone from a different discipline.

                ## Notes
                Interviewers often value a candid account of a failed approach. Prepare one and what it taught you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twenty outsider questions about the thesis have written answers, and one mock grilling with someone from another field has been held."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write twenty hard questions about your thesis as an outsider would ask them"
                - "Answer each on problem choice, validation, failures and your contribution"
                - "Explain the core result without any field-specific jargon"
                - "Ask a friend from another discipline to grill you for 30 minutes"
            - name: Postdoc and academic switch interview answers
              description: |-
                ## Purpose
                Anyone leaving academia is asked why they are leaving, whether they will miss publishing and how they will cope with research that cannot be shared or that must make money. Honest, specific answers prepared in advance, together with evidence of interest in markets, stop these questions from undermining strong technical rounds.

                ## Milestones
                1. A truthful two-sentence answer to why you are leaving academia.
                2. An answer on working without publishing and with commercial goals.
                3. Evidence of genuine interest in markets listed, such as a replication or a project.
                4. Answers rehearsed with someone who made the same switch.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written answers on leaving academia, working without publishing and interest in markets have been rehearsed with someone who made the switch."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a truthful two-sentence answer to why you are leaving academia"
                - "Draft an answer on working without publishing and toward commercial goals"
                - "List concrete evidence of your interest in markets"
                - "Rehearse the answers with someone who has made the same switch"
            - name: Interviewing while employed as a researcher
              description: |-
                ## Purpose
                Experienced researchers interview while holding a role with confidentiality terms, a notice period and possibly a non-compete, and colleagues usually should not know. Keeping interviews outside work hours and work systems, knowing your contract terms and preparing a clear account of your track record without disclosing proprietary detail protects both your current job and your next one.

                ## Milestones
                1. Notice period, non-compete and confidentiality terms summarised from your contract.
                2. A separate personal email and calendar used for every recruiting contact.
                3. Your track record described in disclosure-safe terms.
                4. Any contract questions taken to an employment lawyer before an offer.

                ## Notes
                Never use a work laptop, email or data for anything related to interviewing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A summary of your contract terms, a separate personal recruiting channel and a disclosure-safe track record description are all in place."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise your notice, non-compete and confidentiality terms from the contract"
                - "Move every recruiting contact to a personal email and calendar"
                - "Write a disclosure-safe description of your research track record"
                - "List contract questions to take to an employment lawyer"
            - name: Remote and cross-border interview logistics
              description: |-
                ## Purpose
                Applying to firms in other countries means interviews across time zones, shared coding pads on video and questions about work authorisation. Settling a reliable set-up, a time zone converter in every invite and a short factual answer on visa status prevents avoidable problems from colouring the interviewer's view.

                ## Milestones
                1. A quiet, well-lit space with a tested camera, microphone and backup connection.
                2. Every interview invite stored with both time zones written out.
                3. A short factual answer prepared on your work authorisation status.
                4. A whiteboard or tablet ready for drawing during video interviews.

                ## Notes
                Check official government sources or an immigration adviser for work authorisation questions rather than relying on forums.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested remote set-up, invites stored with both time zones and a written answer on work authorisation are ready before the first remote interview."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Test camera, microphone and a backup connection in your interview space"
                - "Write both time zones into every interview invite"
                - "Prepare a short factual answer on your work authorisation status"
                - "Set up a whiteboard or tablet you can show on camera"
            - name: Rejection feedback and reapplication plan
              description: |-
                ## Purpose
                Rejections are normal in quant research recruiting, even for strong candidates, and many firms accept reapplications after a waiting period. Asking for feedback, reading your debriefs for patterns and setting a dated reapplication plan with specific improvements turns a rejection into the next season's starting point.

                ## Milestones
                1. Feedback requested politely after each rejection.
                2. Common patterns across debriefs and feedback written down.
                3. Two or three specific improvements chosen for the next cycle.
                4. Reapplication dates noted for firms that allow them.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each rejection is followed by a feedback request, and a written reapplication plan names improvements and dates, reviewed quarterly."
                cadence: cyclic
              tasks:
                - "Send a short, polite request for feedback after each rejection"
                - "Write down patterns across your debriefs and any feedback"
                - "Choose two or three improvements for the next recruiting cycle"
                - "Review the reapplication plan and dates @recurring(quarterly)"
            - name: Senior researcher interview with a research agenda
              description: |-
                ## Purpose
                Senior and lead researcher interviews ask what you would build in the first year, how you would run a team's research process and how you handle ideas that fail. A written research agenda, framed without proprietary detail, with milestones, risks and how you would measure research quality, shows the leadership these roles are hired for.

                ## Milestones
                1. A one-page first-year research agenda with themes, milestones and risks.
                2. A description of how you would review research and record failed ideas.
                3. Examples of mentoring or leading research that you can discuss safely.
                4. The agenda pressure-tested with a senior peer.

                ## Notes
                Never put a former employer's signals or data in the agenda. Describe themes and process, not proprietary content.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A disclosure-safe one-page research agenda with milestones, risks and a review process has been pressure-tested by a senior peer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a one-page first-year agenda with themes, milestones and risks"
                - "Describe how you would review research and record failed ideas"
                - "List two examples of leading or mentoring research you can discuss safely"
                - "Ask a senior peer to pressure-test the agenda"
            - name: Panel answer on research integrity and risk
              description: |-
                ## Purpose
                Senior and research-heavy panels ask how you would stop a promising result from reaching production too early, what risk limits and stop rules you would want before a strategy goes live, and how you would respond if a colleague's backtest looked too good. A prepared answer grounded in out-of-sample tests, written stop rules and honest records shows the judgement that protects a firm's capital.

                ## Milestones
                1. An answer on the evidence bar a research idea must pass before production.
                2. An answer on position sizing limits and a written stop rule for a new strategy.
                3. An answer on raising concerns about a colleague's result constructively.
                4. All three rehearsed aloud in a mock with a senior listener.

                ## Notes
                Say plainly that most strategies fail out of sample. Panels distrust candidates who sound certain about returns.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Prepared answers on the production evidence bar, sizing limits with a stop rule and raising concerns have been rehearsed in a mock."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the evidence bar you would require before a strategy goes live"
                - "Describe the sizing limits and written stop rule you would want for a launch"
                - "Draft how you would raise concerns about a colleague's backtest"
                - "Ask the agent to play a sceptical panel member and challenge each answer"
---

# Quant Researcher Interviews

This area is for students and researchers preparing for quant research interviews at hedge funds, prop firms and asset managers, from a first internship screen to a senior research panel. It starts with foundations (mapping the interview loop, auditing your skills, a dated calendar, a pipeline tracker, a CV you can defend and a two-minute research pitch), then the weekly machinery of mocks, spoken probability, statistics and coding drills, then the topics interviewers return to, research case and take-home practice, the decisions about what to lead with and how to talk about confidential work, the dated rounds themselves, variants for undergraduates, master's students, PhDs, postdocs and experienced researchers, and finally senior and specialist interviews.

The rhythms are weekly mocks, spoken probability sets, statistics and coding blocks and an error log review, a daily flashcard round, and monthly paper reading, skills rescoring and recorded answer reviews. The Skills matrix, Job application, Resume, Meeting notes and Metrics log templates pair with the audit, the pipeline, the CV, interview debriefs and the progress log. Nothing here is trading advice, and no interview answer should claim a strategy works: interviewers expect you to know that most strategies fail out of sample. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
