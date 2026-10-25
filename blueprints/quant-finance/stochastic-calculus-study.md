---
id: quant-finance.stochastic-calculus-study
name: Stochastic Calculus Study
description: "A study plan for stochastic calculus that sticks: the probability you need first, Brownian motion, the Ito integral and Ito's lemma, Girsanov and risk-neutral pricing, and the weekly exercises, retests and exams that prove it."
category: business
version: 1.0.0
tags: [quant-finance, stochastic-calculus-study, student, researcher, ito-calculus, brownian-motion, martingales, risk-neutral-pricing]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - course
    - skills-matrix
    - meeting-notes
    - metrics-log
    - habit-tracker
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Stochastic Calculus Study
          description: "Working through stochastic calculus for finance: Brownian motion, Ito's lemma, risk-neutral pricing and the exercises that make the textbook stick."
          projects:
            - name: Prerequisite check in probability and real analysis
              description: |-
                ## Purpose
                Most people who stall at the Ito integral are really stuck on limits, convergence modes or conditional expectation, not on the stochastic part. A two-hour diagnostic on undergraduate probability, sequences and series, and basic real analysis shows which gaps to close before chapter one instead of halfway through chapter four.

                ## Milestones
                1. Twenty diagnostic questions answered closed-book across probability, analysis and linear algebra.
                2. Each question marked as solid, shaky or missing.
                3. A list of no more than five gap topics with a named source chapter for each.
                4. A decision recorded on whether to start the main text now or after a set refresher period.

                ## Notes
                Typical gaps: moment generating functions, the normal distribution's moments, dominated convergence, and the difference between almost sure and in-probability convergence.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A marked twenty-question diagnostic exists with at most five named gap topics and a written start decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect twenty past exam questions on probability and real analysis"
                - "Answer them closed-book in one sitting with a timer"
                - "Mark each answer as solid, shaky or missing"
                - "Write the five gap topics with a source chapter beside each"
            - name: Choosing one main stochastic calculus textbook
              description: |-
                ## Purpose
                Switching between four textbooks feels thorough but means relearning notation every week and never finishing any exercise set. Picking one main text that matches your goal and level, and keeping one reference beside it, gives the study a spine.

                ## Milestones
                1. Three candidate texts compared on rigour, finance focus, exercise quality and available solutions.
                2. One main text chosen and the reason written in two sentences.
                3. One reference text named for proofs or topics the main text skips.
                4. The chapters you will cover listed in order, with the ones you will skip marked.

                ## Notes
                Start from the **Reading queue** template. Common pairings: Shreve's second volume as the main text with Oksendal or Karatzas and Shreve for rigour, or Klebaner or Mikosch for a gentler start. Check whether a solutions manual or worked solutions exist before committing.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One main text and one reference text are recorded with reasons and an ordered chapter list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the preface and contents of three candidate texts"
                - "Try two exercises from chapter three of each candidate"
                - "Check which candidates have published or instructor solutions"
                - "Record the main text, the reference text and the chapter order"
            - name: Dated study plan with chapters and weekly hours
              description: |-
                ## Purpose
                Without dates, a stochastic calculus text quietly takes two years. A plan that maps chapters to weeks, budgets realistic hours and puts a checkpoint every six weeks turns a vague intention into something you can fall behind on, notice, and fix.

                ## Milestones
                1. A weekly hour budget agreed with yourself after looking at the real calendar.
                2. Each chapter assigned a start week and an end week.
                3. Checkpoint retests placed every six weeks.
                4. A buffer of at least two weeks left before any exam or deadline.

                ## Notes
                Start from the **Course** template. Most readers need eight to twelve hours a week to finish a core text in six months; plan with the hours you will really have, not the hours you wish you had.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan maps every chosen chapter to dated weeks, with weekly hours and at least three checkpoint retests."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Block your available study hours for a typical week"
                - "Estimate hours per chapter from page and exercise counts"
                - "Assign start and end weeks to every chapter"
                - "Place a checkpoint retest every six weeks in the calendar"
            - name: Notation and conventions sheet
              description: |-
                ## Purpose
                Texts disagree on whether the filtration is written with F or a script letter, whether expectations carry the measure, and how volatility and drift are named. A single sheet of your own conventions, with the main text's mapped beside the reference text's, stops silent errors when you move between sources.

                ## Milestones
                1. A one-page sheet listing symbols for measures, filtrations, expectations, Brownian motions and integrals.
                2. The main text's and reference text's conventions mapped side by side.
                3. Sign and scaling conventions for the heat equation and generators noted.
                4. The sheet pinned at the front of the exercise notebook.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page conventions sheet maps the main and reference texts' notation and sits at the front of the notebook."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every symbol used in the main text's first two chapters"
                - "Map the reference text's symbols for the same objects"
                - "Note any sign or scaling differences in generators and PDEs"
                - "Pin the finished sheet at the front of the notebook"
            - name: Measure-theoretic probability refresher
              description: |-
                ## Purpose
                Girsanov's theorem and conditional expectation only make sense once probability spaces, sigma-algebras and the Lebesgue integral feel ordinary. Working the core measure theory chapter with exercises, rather than skimming it, pays for itself every time a later proof says almost surely.

                ## Milestones
                1. Sigma-algebras, measurable functions and random variables defined from memory.
                2. Lebesgue integration and expectation as an integral explained in your own words.
                3. Monotone convergence, dominated convergence and Fatou's lemma each used in one solved exercise.
                4. Absolute continuity and the Radon-Nikodym derivative stated and illustrated with a discrete example.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least twelve measure theory exercises are written up, including one each on the three convergence theorems and Radon-Nikodym."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the main text's measure theory chapter once without stopping"
                - "Write the definitions of a sigma-algebra and a measurable function from memory"
                - "Solve one exercise using each of the three convergence theorems"
                - "Compute a Radon-Nikodym derivative for a two-state example"
            - name: Conditional expectation and filtrations workbook
              description: |-
                ## Purpose
                Conditional expectation given a sigma-algebra is the single idea that makes martingales, pricing and filtering readable, and it is where intuition from elementary probability misleads. A workbook of computed examples, from coin tosses to Gaussian vectors, builds the instinct for what is known at time t.

                ## Milestones
                1. Conditional expectation defined as a random variable and its defining property written out.
                2. The tower property, taking out what is known and independence used in worked examples.
                3. A filtration built explicitly for a three-period coin toss model.
                4. Conditional expectations computed for a jointly Gaussian pair.

                ## Notes
                The three-period coin toss model in the first volume of Shreve is the clearest place to see filtrations before the continuous case.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A workbook holds at least ten solved conditional expectation problems covering the tower property, a discrete filtration and a Gaussian case."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write the defining property of conditional expectation from memory"
                - "Build the filtration for a three-period coin toss tree by hand"
                - "Prove the tower property for the coin toss example"
                - "Compute E of X given Y for a jointly Gaussian pair"
            - name: Exercise notebook and write-up format
              description: |-
                ## Purpose
                Scrappy solutions on loose paper cannot be reviewed, searched or reused before an exam. Setting up one notebook, in LaTeX or a bound book, with a fixed layout for statement, attempt, solution and lesson makes every hour of exercises still useful a year later.

                ## Milestones
                1. One format chosen and set up, with a template page for each exercise.
                2. Each entry carrying the source, date, time taken and a one-line lesson.
                3. An index by topic at the front.
                4. The first five exercises written up in the new format.

                ## Notes
                A short LaTeX macro file for expectations, filtrations and Ito integrals saves more time than any editor choice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A notebook exists with a fixed entry template, a topic index and at least five exercises written up in that format."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose between a LaTeX notebook and a bound paper book"
                - "Create the entry template with statement, attempt, solution and lesson"
                - "Write a macro file for the symbols you use most"
                - "Write up five past exercises in the new format"
            - name: Brownian path simulation sandbox
              description: |-
                ## Purpose
                One small notebook that simulates Brownian paths lets you check a derived mean, variance or probability in seconds, which catches algebra slips that rereading never will. Keeping it minimal, a path generator, a few estimators and a plotting cell, stops it becoming a coding project that eats study time.

                ## Milestones
                1. A function that generates Brownian paths on a chosen time grid with a fixed seed.
                2. Sample mean and variance of the endpoint matching zero and t within sampling error.
                3. A plot of twenty paths and the empirical variance against time.
                4. A cell template for testing a new identity with a confidence interval.

                ## Notes
                Report every simulated estimate with its standard error; a match without one is not evidence.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A notebook generates seeded Brownian paths and reproduces the endpoint mean and variance within two standard errors."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a seeded function that returns Brownian paths on a grid"
                - "Check the endpoint mean and variance against zero and t"
                - "Plot twenty paths and the variance against time"
                - "Save a reusable cell for testing identities with standard errors"
            - name: Topic self-assessment grid
              description: |-
                ## Purpose
                Honest self-ratings on each topic, from filtrations to Feynman-Kac, show where study time should go and make progress visible across months. Rating yourself on can state, can prove and can apply separates recognising a theorem from being able to use it under exam conditions.

                ## Milestones
                1. A grid of fifteen to twenty topics from the chosen chapter list.
                2. Each topic rated on stating, proving and applying, on a one to four scale.
                3. The three weakest cells marked as the next month's focus.
                4. A date set to rerate the grid.

                ## Notes
                Start from the **Skills matrix** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A grid rates at least fifteen topics on stating, proving and applying, with three focus cells and a rerating date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List fifteen to twenty topics from your chapter plan"
                - "Rate each on stating, proving and applying from one to four"
                - "Mark the three weakest cells as next month's focus"
                - "Set a date six weeks out to rerate the grid"
            - name: Weekly problem set routine
              description: |-
                ## Purpose
                Reading a proof and producing one are different skills, and only the second survives an exam or a research problem. A fixed weekly set of six to ten exercises from the current chapter, attempted closed-book and then marked, is the core habit of the whole area.

                ## Milestones
                1. A standing weekly slot of at least three hours protected in the calendar.
                2. Each week's set chosen from the current chapter before the slot begins.
                3. Every attempt marked against solutions with a score out of ten.
                4. Scores tracked so a falling trend is visible within a month.

                ## Notes
                Choose exercises you cannot already do. A set you score ten on every week is revision, not progress.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Problem sets are attempted and marked in at least ten of any twelve consecutive weeks, with scores logged."
                cadence: rolling
              tasks:
                - "Book a three-hour weekly slot for problem sets"
                - "Pick six to ten exercises from the current chapter"
                - "Attempt the week's problem set closed-book @recurring(weekly:sat)"
                - "Mark the set against solutions and log the score @recurring(weekly:sun)"
            - name: Derivation error log
              description: |-
                ## Purpose
                Your mistakes will mostly repeat: dropping the half in Ito's lemma, forgetting the cross-variation term, confusing measures after Girsanov. Logging each error with its correct version turns them into a short personal checklist you run before handing anything in.

                ## Milestones
                1. A log with columns for date, exercise, mistake, correct step and category.
                2. At least twenty entries collected.
                3. Errors grouped into five or fewer recurring categories.
                4. A pre-submission checklist written from the top categories.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An error log holds twenty or more categorised entries and has produced a written checklist of the top recurring mistakes."
                cadence: rolling
              tasks:
                - "Create the error log with date, mistake, correction and category"
                - "Add every marked error from this week's problem set"
                - "Review error log entries from the week @recurring(weekly:fri)"
                - "Write a five-line checklist from the most common categories"
            - name: Spaced review of core identities and theorems
              description: |-
                ## Purpose
                Ito isometry, the moments of Brownian motion, the Girsanov density and the Feynman-Kac statement need to be instant, not reconstructed every time. Flashcards on a spaced repetition schedule keep sixty or so core facts available in a few minutes a day.

                ## Milestones
                1. A deck of at least forty cards covering definitions, identities and theorem statements.
                2. Each card worded so the answer is a formula or a statement you can check.
                3. Daily reviews kept for thirty days.
                4. Cards with repeated failures rewritten or split.

                ## Notes
                Make cards for statements and hypotheses, not whole proofs. A proof belongs in the notebook; the card asks which conditions it needs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A deck of forty or more cards is reviewed on at least twenty-five of any thirty consecutive days."
                cadence: rolling
              tasks:
                - "Set up a spaced repetition deck for stochastic calculus"
                - "Write the first forty cards from your chapter notes"
                - "Review the due flashcards @recurring(daily)"
                - "Add cards from the week's chapter @recurring(weekly:sun)"
            - name: Monthly closed-book retest
              description: |-
                ## Purpose
                Material that felt clear in week three is often gone by week ten. A ninety-minute closed-book test each month, mixing current and older chapters, measures what you can still do and tells you what to revisit before it compounds.

                ## Milestones
                1. A bank of retest questions drawn from every chapter covered so far.
                2. Each monthly test mixing about one third old material.
                3. Scores recorded by chapter.
                4. Any chapter scoring under half scheduled for revision the following month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ninety-minute retest is taken and scored by chapter in at least ten months of the year."
                cadence: rolling
              tasks:
                - "Build a question bank with three questions per chapter covered"
                - "Sit a ninety-minute mixed retest closed-book @recurring(monthly:27)"
                - "Record retest scores by chapter"
                - "Schedule revision for any chapter scoring under half"
            - name: Running formula and theorem sheet
              description: |-
                ## Purpose
                One sheet with every result you rely on, its hypotheses and its page reference becomes the most useful study aid you own, and many courses allow one into the exam. Updating it monthly forces you to decide what matters in each chapter.

                ## Milestones
                1. A sheet with sections for Brownian motion, martingales, Ito calculus, SDEs and measure change.
                2. Each result written with its hypotheses, not just its conclusion.
                3. Page references to the main text beside every entry.
                4. The sheet kept to two pages by removing results you no longer need to look up.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A two-page formula and theorem sheet with hypotheses and page references is updated at least monthly."
                cadence: rolling
              tasks:
                - "Start the sheet with the five results from your current chapter"
                - "Add the hypotheses for every theorem already listed"
                - "Update the formula sheet with this month's results @recurring(monthly:12)"
                - "Cut entries you can now write without looking"
            - name: Stochastic calculus study group
              description: |-
                ## Purpose
                Explaining the Ito integral to two other people exposes gaps faster than any solo reread, and a group keeps you moving through the dull weeks. A small group of three to five people, meeting weekly with one presenter and an agreed set of exercises, is enough.

                ## Milestones
                1. Three to five members agreed on the same text and pace.
                2. A weekly meeting time and a rotating presenter schedule fixed.
                3. Each session ending with the next week's exercises named.
                4. Notes from each session saved in one shared place.

                ## Notes
                Start from the **Meeting notes** template. Keep sessions to ninety minutes and spend most of it on exercises people got stuck on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The group meets in at least eight of any ten consecutive weeks, with notes and next exercises recorded each time."
                cadence: rolling
              tasks:
                - "Invite two to four people working through the same text"
                - "Agree a weekly time and a presenter rota"
                - "Run the weekly study group session @recurring(weekly:wed)"
                - "Save session notes and next week's exercises in the shared folder"
            - name: Chapter summary notes
              description: |-
                ## Purpose
                Finishing a chapter and moving straight on leaves no record of what the chapter was for. A one-page summary written closed-book at the end of each chapter, then checked against the text, is both a retrieval exercise and the revision material you will want later.

                ## Milestones
                1. A one-page summary written closed-book for each finished chapter.
                2. Each summary naming the chapter's main theorem, key technique and one worked example.
                3. Gaps found on checking against the text marked in a different colour.
                4. All summaries filed in chapter order in one place.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every finished chapter has a one-page closed-book summary with main theorem, technique, example and marked gaps."
                cadence: rolling
              tasks:
                - "Write a closed-book summary of the last chapter you finished"
                - "Check the summary against the text and mark the gaps"
                - "Tidy and file the month's chapter summaries @recurring(monthly:19)"
                - "Add one worked example to each summary"
            - name: Study hours and progress log
              description: |-
                ## Purpose
                Most self-study plans fail quietly, a missed week becomes a missed month, and nobody notices until the exam. Logging hours and chapters each week, and comparing them with the plan monthly, makes slippage visible while there is still time to adjust.

                ## Milestones
                1. A log with columns for week, hours, chapters, exercises done and retest score.
                2. Hours logged every week for at least eight weeks.
                3. A monthly comparison of actual against planned progress.
                4. Any shortfall of more than two weeks answered with a plan change.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly hours and chapters are logged for eight or more consecutive weeks, with a monthly plan comparison written."
                cadence: rolling
              tasks:
                - "Create the log with week, hours, chapters and exercises columns"
                - "Log study hours and chapters covered @recurring(weekly:mon)"
                - "Compare logged progress with the plan @recurring(monthly:3)"
                - "Adjust the plan when you fall more than two weeks behind"
            - name: Quarterly study plan reset
              description: |-
                ## Purpose
                Goals shift: an exam date moves, a thesis needs SDEs sooner, or a chapter proves twice as hard as planned. A quarterly reset looks at the progress log, the self-assessment grid and the retest scores together and rewrites the next three months.

                ## Milestones
                1. The last quarter's hours, chapters and retest scores summarised in five lines.
                2. The self-assessment grid rerated.
                3. Chapters for the next quarter confirmed, cut or reordered.
                4. One study habit kept, one dropped and one tried recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter ends with a written five-line summary, a rerated grid and a revised chapter list for the next quarter."
                cadence: cyclic
              tasks:
                - "Summarise last quarter's hours, chapters and retest scores"
                - "Rerate the topic self-assessment grid"
                - "Rewrite the chapter plan for the next three months @recurring(quarterly)"
                - "Record one habit to keep, one to drop and one to try"
            - name: Daily fifteen-minute derivation warm-up
              description: |-
                ## Purpose
                Short daily practice of a standard derivation, Ito's lemma on a power of Brownian motion or the solution of geometric Brownian motion, keeps the mechanics fluent between longer sessions. Fifteen minutes is small enough to keep on busy days and frequent enough to make the algebra automatic.

                ## Milestones
                1. A list of twenty standard derivations to rotate through.
                2. The warm-up done on at least five days a week for four weeks.
                3. Time per derivation recorded and falling.
                4. The list refreshed with harder items once the first twenty take under five minutes.

                ## Notes
                Start from the **Habit tracker** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The warm-up is logged on at least twenty of any twenty-eight days, with times recorded for each derivation."
                cadence: rolling
              tasks:
                - "List twenty standard derivations to rotate through"
                - "Do one fifteen-minute derivation from the list @recurring(daily)"
                - "Record the time each derivation takes"
                - "Replace items you finish in under five minutes with harder ones"
            - name: Brownian motion properties and construction
              description: |-
                ## Purpose
                Every later result leans on Brownian motion's defining properties: independent Gaussian increments, continuous paths, and the scaling and symmetry that follow. Working through a construction, either Levy's or the random walk limit, and proving the standard properties gives you an object you can reason about, not just a formula for its variance.

                ## Milestones
                1. The definition stated from memory with all four conditions.
                2. One construction followed through and summarised in a page.
                3. Scaling, time inversion and symmetry properties proved.
                4. Nowhere differentiability explained informally with a reference to the proof.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written proofs of three Brownian motion invariance properties and a one-page construction summary are in the notebook."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the definition of Brownian motion from memory"
                - "Follow the random walk limit or Levy construction in the text"
                - "Prove the scaling and time inversion properties"
                - "Simulate a scaled path to see the self-similarity"
            - name: Quadratic variation and why dW squared is dt
              description: |-
                ## Purpose
                The extra term in Ito's lemma comes entirely from quadratic variation, and students who only memorise the multiplication table make sign and factor errors for years. Proving that the quadratic variation of Brownian motion over an interval equals its length, and seeing it converge numerically, makes the rule obvious.

                ## Milestones
                1. Quadratic and first variation defined for a general function and for Brownian paths.
                2. The L2 convergence proof that Brownian quadratic variation equals t written out.
                3. The multiplication table for dt and dW derived from it, not memorised.
                4. Simulated sums of squared increments converging to t on finer grids.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written proof that Brownian quadratic variation equals t and a simulation showing convergence are in the notebook."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compute the first and quadratic variation of a smooth function"
                - "Write the L2 proof for Brownian quadratic variation"
                - "Derive the dt and dW multiplication rules from the result"
                - "Simulate the sum of squared increments on finer and finer grids"
            - name: Martingales, stopping times and optional stopping
              description: |-
                ## Purpose
                Martingales are the shape that fair prices take, and optional stopping is how most hitting time and gambler's ruin results are proved. Building fluency with the standard martingales of Brownian motion and the conditions under which stopping is allowed prevents the classic wrong answers.

                ## Milestones
                1. Three standard Brownian martingales verified, including the exponential martingale.
                2. Stopping times defined and five examples classified as stopping times or not.
                3. The optional stopping theorem stated with its conditions.
                4. Exit probabilities and expected exit times from an interval derived for Brownian motion with drift.

                ## Notes
                The most common error is applying optional stopping to an unbounded stopping time without checking uniform integrability. Write down which condition you are using every time.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The notebook holds proofs for three Brownian martingales and a derivation of exit probabilities from an interval using optional stopping."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Verify that W squared minus t is a martingale"
                - "Classify five random times as stopping times or not"
                - "State the optional stopping theorem with each set of conditions"
                - "Derive the probability Brownian motion with drift exits at the upper barrier"
            - name: Constructing the Ito integral from simple processes
              description: |-
                ## Purpose
                Unlike the Riemann integral, the Ito integral is defined, not discovered, and working through that definition once explains why integrands must be adapted, why the left endpoint matters and where the isometry comes from. Students who skip this step can compute but cannot tell when a computation is illegal.

                ## Milestones
                1. The integral of a simple adapted process defined and computed by hand.
                2. The Ito isometry proved for simple processes.
                3. The extension to square-integrable adapted processes summarised in a page.
                4. The integral of W against dW computed from the definition, with the left versus midpoint comparison.

                ## Notes
                Computing the integral of W dW from Riemann sums with left and with midpoint evaluation is the single best exercise for seeing why Ito and Stratonovich differ.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The notebook contains the Ito isometry proof for simple processes and the integral of W dW derived from left and midpoint sums."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Compute the Ito integral of a two-step simple process by hand"
                - "Prove the Ito isometry for simple processes"
                - "Derive the integral of W dW from left-endpoint sums"
                - "Repeat with midpoint sums and write what changed"
            - name: Ito's lemma with ten worked applications
              description: |-
                ## Purpose
                Ito's lemma is the tool you will use more than any other in the subject, and fluency only comes from applying it to many functions. Ten worked applications, from powers of Brownian motion to the log of geometric Brownian motion and time-dependent functions, make it routine.

                ## Milestones
                1. Ito's lemma stated for a function of time and an Ito process.
                2. Ten applications worked, including W cubed, exp of W, log of a GBM and a function of t and W.
                3. Each application checked by computing an expectation and comparing with simulation where possible.
                4. Three moments of Brownian motion derived using Ito's lemma rather than the Gaussian density.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten Ito's lemma applications are written up, with at least three checked against simulation within two standard errors."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Write Ito's lemma for a function of t and an Ito process"
                - "Apply it to W cubed and exp of W"
                - "Apply it to the log of geometric Brownian motion"
                - "Check three results against the simulation sandbox"
            - name: Multidimensional Ito and correlated Brownian motions
              description: |-
                ## Purpose
                Two-asset models, stochastic volatility and change of numeraire all need the multidimensional formula and the cross-variation of correlated Brownian motions. Getting comfortable with the product rule and building correlated motions from independent ones closes the gap between textbook examples and real models.

                ## Milestones
                1. The multidimensional Ito formula stated with the cross-variation terms.
                2. The Ito product rule derived and applied to a product of two GBMs.
                3. Correlated Brownian motions constructed from independent ones with a Cholesky step.
                4. Levy's characterisation stated and used to show a constructed process is a Brownian motion.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written derivations of the product rule, a correlated Brownian construction and one use of Levy's characterisation are in the notebook."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the two-dimensional Ito formula with cross-variation"
                - "Derive the Ito product rule and apply it to two GBMs"
                - "Construct two correlated Brownian motions from independent ones"
                - "Use Levy's characterisation on the constructed process"
            - name: Solving linear SDEs, GBM and Ornstein-Uhlenbeck
              description: |-
                ## Purpose
                Geometric Brownian motion and the Ornstein-Uhlenbeck process are the two SDEs you must be able to solve in your sleep, and the integrating factor technique behind them covers most linear SDEs you will meet. A worked set with explicit solutions, means, variances and stationary distributions is reusable for years.

                ## Milestones
                1. GBM solved explicitly with its mean, variance and log-normal distribution derived.
                2. The Ornstein-Uhlenbeck SDE solved with an integrating factor.
                3. The OU process's mean, variance and stationary distribution derived.
                4. A general linear SDE solved using the same technique.
                5. Existence and uniqueness conditions stated and checked for each example.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A worked solutions set covers GBM, OU and one general linear SDE, each with moments and a checked existence condition."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Solve the GBM SDE using Ito's lemma on the log"
                - "Solve the Ornstein-Uhlenbeck SDE with an integrating factor"
                - "Derive the OU stationary distribution"
                - "Check Lipschitz and growth conditions for each SDE solved"
            - name: Reflection principle and running maximum distributions
              description: |-
                ## Purpose
                Barrier options, drawdown statistics and first passage times all rest on the reflection principle, one of the most elegant arguments in the subject. Deriving the distribution of the running maximum and the first hitting time, then extending to drift with Girsanov later, builds a reusable toolkit.

                ## Milestones
                1. The reflection principle stated and its strong Markov justification explained.
                2. The distribution of the running maximum of Brownian motion derived.
                3. The density of the first hitting time of a level derived.
                4. The joint distribution of the maximum and endpoint written out.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Derivations of the running maximum distribution, first hitting time density and joint law with the endpoint are written up."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw the reflected path argument and write it out in words"
                - "Derive the distribution of the running maximum"
                - "Derive the first hitting time density by differentiation"
                - "Check the hitting probability against simulation on a fine grid"
            - name: Girsanov's theorem and change of measure
              description: |-
                ## Purpose
                Girsanov is the bridge from the real-world measure to risk-neutral pricing, and it is the theorem students most often apply without understanding. Proving the simple constant-drift case, then working examples where you identify the density, the new Brownian motion and what changes in each expectation, makes the bridge solid.

                ## Milestones
                1. The Radon-Nikodym density process written and shown to be a martingale for constant drift.
                2. Girsanov's theorem stated with the Novikov condition.
                3. Three examples worked that remove or add a drift under a new measure.
                4. An expectation under the new measure computed two ways and matched.

                ## Notes
                Write the measure on every expectation in this chapter. Most Girsanov errors are an expectation taken under the wrong measure.
              priority: high
              deadlineOffsetDays: 140
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The notebook holds a constant-drift Girsanov proof and three worked measure-change examples, one checked two ways."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Show the exponential density process is a martingale"
                - "State Girsanov's theorem with the Novikov condition"
                - "Remove the drift from Brownian motion with drift under a new measure"
                - "Compute one expectation under both measures and match them"
            - name: Martingale representation and the replication argument
              description: |-
                ## Purpose
                The martingale representation theorem is why a claim can be replicated by trading the underlying, and it is the step that turns risk-neutral expectation into a hedging strategy. Understanding its statement, its limits with more than one source of noise and how it produces a hedge ratio completes the pricing logic.

                ## Milestones
                1. The theorem stated for a Brownian filtration.
                2. The construction of a replicating portfolio from the representation written in a page.
                3. The hedge ratio for a simple claim identified from the integrand.
                4. A short note on why representation fails when the filtration has more noise than traded assets.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page replication argument from martingale representation and a written note on incomplete markets are in the notebook."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the martingale representation theorem from the text"
                - "Build the replicating portfolio argument in your own words"
                - "Identify the hedge ratio for a claim on the terminal value"
                - "Write why the argument breaks with an extra untraded noise source"
            - name: Feynman-Kac and the link to PDEs
              description: |-
                ## Purpose
                Feynman-Kac says that conditional expectations of diffusions solve parabolic PDEs, which is why the same price can be found by a martingale argument or a PDE. Deriving it, then using it both ways on a few examples, joins the probabilistic and analytic halves of the subject.

                ## Milestones
                1. The generator of a one-dimensional diffusion written for GBM and OU.
                2. The Feynman-Kac formula derived with Ito's lemma and the martingale property.
                3. A PDE solved by computing an expectation.
                4. An expectation computed by solving a PDE.
                5. The backward Kolmogorov equation identified as a special case.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A Feynman-Kac derivation and two worked examples, one in each direction, are written up in the notebook."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the generators of GBM and the OU process"
                - "Derive Feynman-Kac using Ito's lemma on the discounted expectation"
                - "Solve one PDE by computing a Gaussian expectation"
                - "Show the backward Kolmogorov equation is a special case"
            - name: Risk-neutral pricing derived three ways
              description: |-
                ## Purpose
                Deriving the Black-Scholes call price by the PDE route, the risk-neutral expectation route and a change of numeraire shows the whole subject converging on one answer. This is a theory exercise, not an implementation: the aim is that every step and every assumption is yours.

                ## Milestones
                1. The Black-Scholes PDE derived from a self-financing hedged portfolio.
                2. The call price computed as a discounted expectation under the risk-neutral measure.
                3. The same price derived using the stock as numeraire.
                4. A one-page list of every assumption used and what breaks if each fails.

                ## Notes
                Implementing and calibrating pricing models belongs with derivatives pricing study. Keep this project on paper.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Three independent derivations of the Black-Scholes call price and a one-page assumptions list are written up."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Derive the Black-Scholes PDE from a hedged portfolio"
                - "Compute the call price as a risk-neutral expectation"
                - "Rederive the price with the stock as numeraire"
                - "List every assumption and what breaks without it"
            - name: Change of numeraire and forward measures
              description: |-
                ## Purpose
                Choosing the right numeraire can turn a messy expectation into a one-line calculation, and it is the core technique in exchange options and interest rate pricing. Working the general change of numeraire result and a few examples prepares you for later rates and multi-asset study.

                ## Milestones
                1. The change of numeraire theorem stated with the density in terms of the two numeraires.
                2. The Margrabe exchange option price derived with one asset as numeraire.
                3. The T-forward measure defined using a zero-coupon bond as numeraire.
                4. A note on which numeraire simplifies which kind of payoff.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The notebook holds the change of numeraire theorem, a Margrabe derivation and a definition of the forward measure."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the density for changing from one numeraire to another"
                - "Derive the exchange option price with one asset as numeraire"
                - "Define the forward measure using a zero-coupon bond"
                - "Note which numeraire suits which payoff"
            - name: Rigour level decision for your goal
              description: |-
                ## Purpose
                How much proof you need depends on the goal: a trader-track master's student, a thesis writer on SDEs and a qualifying exam candidate each need a different mix. Deciding how much rigour your goal needs, chapter by chapter, stops you spending a month on the construction of the integral when you needed fluent calculation, or the reverse.

                ## Milestones
                1. Your goal written in one sentence with its deadline.
                2. Each chapter marked as prove, understand or apply.
                3. The decision checked against a past exam, a thesis supervisor or a job description.
                4. The chapter plan updated to match.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every planned chapter is marked prove, understand or apply, checked against an outside reference and reflected in the plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your goal and its deadline in one sentence"
                - "Mark each chapter as prove, understand or apply"
                - "Check the marks against a past exam or your supervisor's view"
                - "Update the dated study plan to match"
            - name: Fixing a passive reading habit
              description: |-
                ## Purpose
                Rereading chapters and watching lectures feels productive, but retention comes from retrieval and problems. If your log shows more reading hours than exercise hours, a four-week switch to exercises first, reading only to unblock, usually lifts retest scores quickly.

                ## Milestones
                1. The ratio of reading to exercise hours over the last month calculated from the log.
                2. A four-week rule set: attempt exercises before reading the section.
                3. Retest scores compared before and after the four weeks.
                4. The rule kept, changed or dropped based on the scores.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A four-week exercises-first trial is completed and its effect on retest scores is recorded with a keep or drop decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out last month's ratio of reading to exercise hours"
                - "Write the exercises-first rule on the front of the notebook"
                - "Compare retest scores before and after four weeks"
                - "Record whether you keep, change or drop the rule"
            - name: Rewriting three weak proofs after feedback
              description: |-
                ## Purpose
                A proof that a marker or supervisor found unclear is the best material you have, because it shows exactly how your reasoning reads to someone else. Rewriting three of them until they would pass an examiner trains the precision that qualifying exams and papers demand.

                ## Milestones
                1. Three proofs with written feedback chosen.
                2. Each gap or unjustified step identified in a sentence.
                3. Each proof rewritten with every limit, measure and condition stated.
                4. The rewrites reviewed again by the same person or a peer.

                ## Notes
                Ask the agent to list every step in your rewrite that uses a limit or interchange of expectation and integral, then check each one yourself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three proofs are rewritten after feedback and a second review confirms each has no unjustified step."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick three proofs that came back with written feedback"
                - "Write one sentence naming each gap"
                - "Rewrite each proof with every condition stated"
                - "Send the rewrites back to the reviewer or a peer"
            - name: Checking analytic results against simulation
              description: |-
                ## Purpose
                Simulation will not prove anything, but it is very good at catching a wrong answer. A standing habit of checking one derived identity a month, such as the fourth moment of Brownian motion, the Ito isometry or an exit probability, catches errors before they reach an exam script or a thesis chapter.

                ## Milestones
                1. A list of ten identities from the notebook to check.
                2. Each check reported with an estimate, a standard error and a pass or fail.
                3. Any failure traced to either the derivation or the code.
                4. The checks saved so they can be rerun after changes.

                ## Notes
                A discretised path approximates a continuous one; hitting probabilities in particular are biased on coarse grids, so refine the grid before blaming the algebra.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "At least ten identities have saved simulation checks with estimates, standard errors and recorded outcomes."
                cadence: rolling
              tasks:
                - "List ten identities from the notebook worth checking"
                - "Check the fourth moment of Brownian motion against simulation"
                - "Run one new identity check in the sandbox @recurring(monthly:22)"
                - "Trace any failed check to the derivation or the code"
            - name: Getting help on stuck points
              description: |-
                ## Purpose
                Being stuck on one exercise for three days is not perseverance, it is lost time. Deciding where help comes from, a tutor, a supervisor, office hours or a forum, and writing a precise stuck note before asking, gets you unstuck faster and makes the help better.

                ## Milestones
                1. Two sources of help identified with how and when to reach them.
                2. A rule set for when to ask, for example after ninety minutes of real effort.
                3. A stuck note format written: statement, what you tried, where it breaks.
                4. The first three stuck notes sent and resolved.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two help sources and an ask-after rule are written down, and three stuck notes have been sent and resolved."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Name two sources of help and how to reach each"
                - "Write your ask-after rule in one sentence"
                - "Draft a stuck note for the exercise blocking you now"
                - "Bring the month's stuck list to your tutor or office hours @recurring(monthly:8)"
            - name: Malliavin calculus first reading
              description: |-
                ## Purpose
                Malliavin calculus, the calculus of variations on Wiener space, shows up in sensitivity estimates and in research papers that a strong stochastic calculus student will eventually meet. A first reading of the Malliavin derivative, the Skorokhod integral and the Clark-Ocone formula is enough to follow those papers.

                ## Milestones
                1. The Malliavin derivative computed for simple functionals of Brownian motion.
                2. The duality between the derivative and the Skorokhod integral stated.
                3. The Clark-Ocone formula stated and used on one example.
                4. One applied paper read with its use of Malliavin weights summarised.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Worked Malliavin derivative examples, a Clark-Ocone application and a one-page summary of an applied paper are in the notebook."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose an introductory Malliavin text or lecture notes"
                - "Compute the Malliavin derivative of W at a fixed time"
                - "Apply the Clark-Ocone formula to W cubed at the terminal time"
                - "Summarise one applied paper's use of Malliavin weights"
            - name: Stochastic calculus course final exam
              description: |-
                ## Purpose
                A course final rewards fast, accurate technique on standard problems far more than deep understanding of one proof. Working back from the exam date with past papers, a formula sheet and timed practice turns a term of study into marks.

                ## Milestones
                1. The exam date, format and permitted materials confirmed with the course.
                2. All available past papers collected with solutions where they exist.
                3. Three past papers sat under timed conditions and marked.
                4. Weak topics from the timed papers revised in the final fortnight.
                5. The permitted formula sheet finalised two days before the exam.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three timed past papers are sat and marked and the formula sheet is final at least two days before the exam date."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Confirm the exam date, format and permitted materials"
                - "Collect every available past paper and solution"
                - "Sit three past papers under timed conditions"
                - "Revise the three weakest topics in the final fortnight"
            - name: PhD qualifying exam in stochastic processes
              description: |-
                ## Purpose
                Qualifying exams test proofs and theorem statements under pressure, often orally as well as written, and the syllabus is usually wider than any single course. Getting the reading list early, mapping it to your notes and sitting mock exams with faculty or senior students reduces the risk of a resit year.

                ## Milestones
                1. The official syllabus and reading list obtained from the department.
                2. Each syllabus topic mapped to a chapter in your notes, with gaps listed.
                3. Old qualifying papers obtained and at least two sat under timed conditions.
                4. One mock oral done with a senior student or faculty member.
                5. A final revision timetable for the last six weeks.

                ## Notes
                Ask senior students which theorems the committee likes to ask you to prove. The list is usually short and stable.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The syllabus is mapped to notes, two timed past qualifiers and one mock oral are done before the exam date."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Request the qualifying syllabus and reading list from the department"
                - "Map every syllabus topic to a chapter in your notes"
                - "Collect old qualifying papers from senior students"
                - "Arrange a mock oral with a senior student or faculty member"
            - name: Reading group presentation on a chapter
              description: |-
                ## Purpose
                Presenting a chapter to a reading group or seminar forces you to decide what its main idea is and to survive questions on every step. Preparing a forty-five-minute board talk on one theorem and its proof is one of the fastest ways to make a hard chapter yours.

                ## Milestones
                1. A chapter and main theorem chosen and agreed with the group.
                2. A board plan written with the statement, proof outline and one example.
                3. The talk rehearsed once with a timer.
                4. Questions from the session and your answers written up afterwards.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A forty-five-minute presentation is given on one theorem, with the board plan and a write-up of questions saved."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the chapter and theorem with the group organiser"
                - "Write a board plan with statement, proof outline and example"
                - "Rehearse the talk once against a forty-five-minute timer"
                - "Write up the questions asked and your answers"
            - name: Mock oral examination with a peer
              description: |-
                ## Purpose
                Explaining a derivation aloud at a whiteboard while someone interrupts is a different skill from writing it at a desk. A mock oral, where a peer picks three topics from your grid and asks you to derive and justify, shows what you only half know.

                ## Milestones
                1. A peer agreed and three topics chosen by them, not by you.
                2. Forty-five minutes of board derivations with interruptions completed.
                3. Feedback on clarity and gaps written down within a day.
                4. The two weakest moments turned into exercises for the next problem set.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A forty-five-minute mock oral is completed with written feedback and two follow-up exercises added to a problem set."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask a peer to examine you for forty-five minutes"
                - "Let the peer choose three topics from your grid"
                - "Write the feedback down within a day of the session"
                - "Add two follow-up exercises to next week's problem set"
            - name: Teaching a stochastic calculus problem class
              description: |-
                ## Purpose
                Teaching assistants and tutors learn the material twice: once to solve the problems and again to anticipate where students will go wrong. Preparing and running a problem class on Ito's lemma or Girsanov sharpens your own understanding and gives your students worked methods they can repeat.

                ## Milestones
                1. The problem sheet worked through in full before the class.
                2. The three most likely student errors predicted and noted.
                3. The class delivered with each problem solved at the board.
                4. Common errors seen in class recorded for next year's notes.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A problem class is delivered from a fully worked sheet, with predicted and actual student errors recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Solve every problem on the sheet in full"
                - "Note the three errors students are most likely to make"
                - "Plan which problems to do at the board and which to set"
                - "Record the errors you actually saw for next year"
            - name: Master's student balancing stochastic calculus with other modules
              description: |-
                ## Purpose
                On a financial engineering master's, stochastic calculus competes with programming, econometrics and recruiting, and it is usually the module that slips. A term plan that protects two fixed weekly blocks for it, ties problem sets to lecture weeks and leaves room around interview season keeps it from becoming an exam-week cram.

                ## Milestones
                1. The term's lecture schedule and assessment dates for every module in one calendar.
                2. Two fixed weekly blocks for stochastic calculus that survive recruiting weeks.
                3. Problem sets aligned to the lecture they follow.
                4. A catch-up week planned before the exam period.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A term calendar shows every module's deadlines, two protected weekly stochastic calculus blocks and a catch-up week."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Put every module's lectures and deadlines in one calendar"
                - "Block two fixed weekly sessions for stochastic calculus"
                - "Do the problem set from this week's lecture @recurring(weekly:tue)"
                - "Mark a catch-up week before the exam period"
            - name: Translating from physics or engineering notation
              description: |-
                ## Purpose
                Physicists and engineers often know Langevin equations, Fokker-Planck and white noise, but the finance literature writes the same ideas in measure-theoretic language with different conventions. A translation table and a few problems solved both ways save months of confusion for a PhD student switching fields.

                ## Milestones
                1. A table mapping white noise, Langevin and Fokker-Planck to Brownian motion, SDEs and the forward Kolmogorov equation.
                2. The Ito versus Stratonovich interpretation explained with the conversion formula.
                3. One Langevin problem solved in physics notation and again as an Ito SDE.
                4. The places where physics intuition misleads in finance noted, such as drift under different measures.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A translation table and one problem solved in both notations, including the Ito and Stratonovich conversion, are written up."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the physics terms you already know for random processes"
                - "Map each to its finance and probability counterpart"
                - "Write the Stratonovich to Ito conversion for a scalar SDE"
                - "Solve one Langevin problem in both notations"
            - name: Studying alongside a full-time quant job
              description: |-
                ## Purpose
                Researchers and developers who learn stochastic calculus on the job have less time but better motivation: a model at work they want to understand. Anchoring the study to that model, with two early-morning sessions a week and a slower chapter plan, keeps it alive through busy months.

                ## Milestones
                1. One model or paper from work chosen as the anchor for the study.
                2. The chapters that model depends on listed and prioritised.
                3. Two weekly sessions of ninety minutes kept for eight weeks.
                4. A one-page explanation of the anchor model's derivation written for a colleague.

                ## Notes
                Keep employer models and data out of personal notes. Work from the published version of the model or a textbook equivalent.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Eight weeks of twice-weekly sessions are logged and a one-page derivation of the anchor model is written."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose a published model related to your work as the anchor"
                - "List the chapters the anchor model depends on"
                - "Hold a ninety-minute early study session @recurring(weekly:thu)"
                - "Write a one-page derivation of the anchor model for a colleague"
            - name: Returning to stochastic calculus after years away
              description: |-
                ## Purpose
                Someone who passed a course five years ago usually keeps the shape of the ideas but loses the mechanics. A six-week refresher that starts with a diagnostic, then reworks only the weak chapters through exercises, rebuilds fluency faster than starting the book again from page one.

                ## Milestones
                1. A diagnostic of fifteen problems from your old course or text sat and marked.
                2. Chapters split into still fluent, rusty and forgotten.
                3. Rusty and forgotten chapters reworked with ten exercises each.
                4. A final retest scoring at least seven out of ten on the original diagnostic topics.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A diagnostic and a final retest are both marked, with the final retest at least seven out of ten across the diagnostic topics."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Find your old course notes or exam papers"
                - "Sit a fifteen-problem diagnostic closed-book"
                - "Sort chapters into fluent, rusty and forgotten"
                - "Rework ten exercises in each rusty or forgotten chapter"
            - name: Jump processes and Poisson-driven SDEs
              description: |-
                ## Purpose
                Real prices jump, and many research topics need the compensated Poisson process, compound Poisson processes and Ito's formula with jumps. Extending the continuous toolkit to jump diffusions is the natural next step once Girsanov feels routine.

                ## Milestones
                1. The Poisson and compound Poisson processes defined with their compensators.
                2. Ito's formula for a jump diffusion stated and applied to the exponential of a jump process.
                3. The Merton jump-diffusion SDE solved.
                4. Change of measure for a Poisson process worked through for one example.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Worked solutions for the compensated Poisson martingale, Ito's formula with jumps and the Merton jump-diffusion are in the notebook."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Show that the compensated Poisson process is a martingale"
                - "Write Ito's formula for a process with jumps"
                - "Solve the Merton jump-diffusion SDE"
                - "Work one change of intensity under a new measure"
            - name: Local time and Tanaka's formula
              description: |-
                ## Purpose
                Ito's lemma needs a twice differentiable function, and local time is what appears when you apply it to the absolute value of Brownian motion. Studying Tanaka's formula and local time is the specialist step that underpins work on reflected processes and some path-dependent claims.

                ## Milestones
                1. Tanaka's formula derived for the absolute value of Brownian motion.
                2. Local time defined as an occupation density and its main properties listed.
                3. Levy's theorem on the running maximum and reflected motion stated.
                4. One application written up, such as reflected Brownian motion or a stop-loss start-gain argument.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A derivation of Tanaka's formula, a definition of local time and one written application are in the notebook."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Approximate the absolute value with smooth functions and apply Ito"
                - "Derive Tanaka's formula from the limit"
                - "Write local time as an occupation density"
                - "Write up one application of local time"
            - name: Stochastic control and the Merton problem
              description: |-
                ## Purpose
                Stochastic control, through the Hamilton-Jacobi-Bellman equation, is how optimal consumption and portfolio problems are solved in continuous time. Working the Merton problem from the dynamic programming principle to the closed-form solution is a classic test of everything else in the area.

                ## Milestones
                1. The dynamic programming principle stated for a controlled diffusion.
                2. The HJB equation derived for the Merton problem with power utility.
                3. The closed-form value function and optimal control found with a guessed form.
                4. A verification argument sketched and its assumptions listed.

                ## Notes
                The Merton solution is a model result under strong assumptions, not a portfolio rule. Treat it as an exercise in technique.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A derivation of the Merton HJB equation, its closed-form solution and a sketched verification argument are written up."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "State the dynamic programming principle for a controlled diffusion"
                - "Derive the HJB equation for the Merton problem"
                - "Solve it with a power-form guess for the value function"
                - "List the assumptions the verification argument needs"
---

# Stochastic Calculus Study

Stochastic calculus is the language under every continuous-time pricing model, and most people who open the textbook stall somewhere between conditional expectation and the Ito integral. This area is for the master's student, the PhD student and the working researcher who wants to own the material rather than recognise it: it starts with foundations (a prerequisite check, one main textbook, a dated plan and a notebook for clean solutions), adds the weekly machinery of problem sets, error logs and retests, then works through Brownian motion, martingales, the Ito integral, Ito's lemma, SDEs, Girsanov, Feynman-Kac and risk-neutral pricing, followed by study decisions, exams and presentations, situations for different backgrounds, and finally jumps, local time, stochastic control and Malliavin calculus.

What repeats is a weekly problem set marked against solutions, a weekly error log review and study group, daily flashcards and a short derivation warm-up, a monthly closed-book retest and formula sheet update, and a quarterly plan reset. The Reading queue, Course, Skills matrix, Meeting notes, Metrics log and Habit tracker templates pair with the projects that name them. Nothing here is trading advice: the models are idealisations, and knowing exactly where their assumptions break is part of the study. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
