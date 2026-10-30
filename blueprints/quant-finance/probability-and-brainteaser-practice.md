---
id: quant-finance.probability-and-brainteaser-practice
name: Probability and Brainteaser Practice
description: "A practice system for probability problems and brainteasers: a timed baseline, a sourced problem bank, daily sessions with a log, topic drills from counting to martingales and monthly speed and accuracy reviews."
category: business
version: 1.0.0
tags: [quant-finance, probability-and-brainteaser-practice, student, probability, brainteasers, combinatorics, expected-value, practice-log]
author: Aurum Technology
starter_structure:
  templates:
    - habit-tracker
    - metrics-log
    - skills-matrix
    - reading-queue
    - meeting-notes
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Probability and Brainteaser Practice
          description: "Building speed and accuracy on probability problems: combinatorics, conditional probability, expected values, classic brainteasers and a daily practice log."
          projects:
            - name: Timed probability diagnostic baseline
              description: |-
                ## Purpose
                Before planning any practice you need to know where you stand: which topics you solve quickly, which you solve slowly and which you cannot start. Sitting twenty mixed problems under a fixed time limit, with no notes, gives a baseline score per topic that every later month is measured against.

                ## Milestones
                1. Twenty problems chosen across counting, conditional probability, expectation, geometric probability and classic puzzles, with answers kept hidden.
                2. The set sat in one sitting with a timer, recording minutes spent on each problem.
                3. Each answer marked right, wrong or not attempted, with the topic beside it.
                4. A baseline table of accuracy and median time per topic saved in the practice log.

                ## Notes
                Choose problems you have not seen. A baseline built from familiar questions measures memory, not skill.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A baseline table showing accuracy and median minutes for each of five topics, from one timed sitting of twenty unseen problems."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick twenty unseen problems spread across five topics and hide the answers"
                - "Sit the set in one session with a timer and no notes"
                - "Mark every answer and note the minutes each problem took"
                - "Write the per-topic accuracy and median time into the log"
            - name: Daily probability practice log set-up
              description: |-
                ## Purpose
                Without a log, practice feels busy but progress is invisible, and the same mistakes return every few weeks. One row per problem, with the source, topic, minutes, result and the idea that cracked it, turns scattered effort into data you can review and act on.

                ## Milestones
                1. A spreadsheet or notebook with columns for date, source, topic, minutes, result, key idea and error type.
                2. Topic labels fixed in a short list so filtering and counting work later.
                3. The baseline problems entered as the first twenty rows.
                4. A weekly summary row showing problems attempted, hit rate and average minutes.

                ## Notes
                Keep the log fast to fill. If one row takes more than a minute to write, cut columns until it does not.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A practice log with fixed topic labels and seven columns, holding at least the twenty baseline rows and one weekly summary."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the log with date, source, topic, minutes, result, key idea and error columns"
                - "Write the fixed list of topic labels at the top of the log"
                - "Enter the twenty baseline problems as the first rows"
                - "Total the week's rows and note the hit rate and average minutes @recurring(weekly:sun)"
            - name: Sourced problem bank of 300 questions
              description: |-
                ## Purpose
                Practising from whatever turns up online means uneven difficulty, missing topics and answers of doubtful quality. A bank of around 300 problems drawn from a few trusted books and problem sets, each tagged by topic and difficulty with a source page, lets every session start in seconds and lets you aim at weak topics on purpose.

                ## Milestones
                1. Three to five sources chosen, such as Mosteller's Fifty Challenging Problems in Probability, a probability textbook's exercises and a quant interview problem book.
                2. Around 300 problems listed with a reference to source and page rather than copied text.
                3. Every problem tagged with a topic label and a difficulty of one to three.
                4. At least twenty problems in each topic, with gaps filled from a further source.

                ## Notes
                Store references and your own solutions, not whole copied books. Mark any problem whose published answer you doubt so you check it before trusting it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bank of about 300 referenced problems, each tagged by topic and difficulty, with no topic below twenty problems."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose three to five problem sources and note what each covers best"
                - "List problems by source and page with a topic and difficulty tag"
                - "Count problems per topic and find any topic below twenty"
                - "Add problems from a further source until every topic reaches twenty"
            - name: Written solution standard for every problem
              description: |-
                ## Purpose
                Getting the right number by a lucky route teaches little, and messy working hides the step where an answer went wrong. A short standard for written solutions (define the sample space or random variable, name the method, compute, then sanity check) makes each solved problem reusable and each wrong one easy to diagnose.

                ## Milestones
                1. A five-line solution standard written on the first page of the practice notebook.
                2. Ten past solutions rewritten to the standard as worked examples.
                3. A sanity check step defined, such as a limiting case, a bound or a quick simulation.
                4. The standard followed for every problem in the following two weeks of practice.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written five-line solution standard plus ten worked examples rewritten to it, kept in the practice notebook."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the five steps of your solution standard on the notebook's first page"
                - "Rewrite ten past solutions so each follows the standard"
                - "List three sanity checks you will use, such as small cases and bounds"
                - "Check two weeks of new solutions against the standard and fix lapses"
            - name: Weekly practice timetable around coursework
              description: |-
                ## Purpose
                Students who plan practice for whenever there is spare time get almost none during deadline weeks. Fixing short sessions into the actual week, around lectures, problem sheets and part-time work, makes practice survive a busy term instead of collapsing in week four.

                ## Milestones
                1. The fixed weekly commitments (lectures, labs, work shifts, sport) written into a week grid.
                2. Five or six practice slots of twenty to thirty minutes placed in real gaps.
                3. One longer slot of sixty to ninety minutes kept for the weekly timed set.
                4. Known coursework deadlines for the term marked so lighter weeks can be planned in advance.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A weekly grid with at least five short practice slots and one long slot, plus the term's coursework deadlines marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your fixed weekly commitments into a week grid"
                - "Place five short practice slots in real gaps between them"
                - "Reserve one longer slot for the weekly timed set"
                - "Check next week's coursework deadlines and move practice slots to fit @recurring(weekly:sun)"
            - name: Error categories for wrong answers
              description: |-
                ## Purpose
                Wrong answers in probability fall into a small number of patterns: double counting, ignoring order, conditioning on the wrong event, assuming independence, arithmetic slips and misreading the question. Tagging each miss by category shows which habit to fix, which is far more useful than simply doing more problems.

                ## Milestones
                1. Six to eight error categories defined with one example each.
                2. Every wrong answer in the log so far tagged with one category.
                3. The two most common categories identified with their counts.
                4. One specific countermeasure written for each of those two, such as listing outcomes for small cases.

                ## Notes
                Careless arithmetic counts as its own category. If it tops the list, slow the final step down rather than practising harder topics.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "An error category list with counts for every logged miss and a written countermeasure for the top two categories."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write six to eight error categories with an example of each"
                - "Tag every wrong answer in the log with one category"
                - "Count the tags and name the two most common errors"
                - "Tag the week's new misses and check whether the top category is shrinking @recurring(weekly:fri)"
            - name: One-page probability formula sheet
              description: |-
                ## Purpose
                Speed depends on having the standard results ready without deriving them: binomial coefficients and their identities, Bayes' rule, the expectation and variance of common distributions, the harmonic numbers behind coupon collecting. Building your own single page, rather than downloading one, is itself practice and gives you something to recall from memory.

                ## Milestones
                1. Counting results on the sheet: permutations, combinations, multinomials and stars and bars.
                2. Bayes' rule, the law of total probability and the law of total expectation written in your own notation.
                3. Mean and variance of the Bernoulli, binomial, geometric, Poisson, uniform, exponential and normal distributions.
                4. The sheet reproduced from memory with no more than two gaps.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page formula sheet covering counting, conditioning and seven common distributions, reproduced from memory with at most two gaps."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the counting formulas you use most on one side of a page"
                - "Add Bayes' rule and the laws of total probability and expectation"
                - "Add mean and variance for seven common distributions"
                - "Rewrite the sheet from memory and add any result you missed @recurring(monthly:20)"
            - name: Speed and accuracy targets for the term
              description: |-
                ## Purpose
                Practising without a target drifts towards comfortable problems. Setting a term target for accuracy and median time per topic, grounded in your baseline, tells you when a topic is good enough and when to move effort elsewhere.

                ## Milestones
                1. A target accuracy and median time set for each topic, starting from the baseline table.
                2. Targets checked for realism, for example no more than a 20 point accuracy gain in one term.
                3. The weakest two topics named as the term's focus.
                4. The targets written at the top of the practice log with the date they were set.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Per-topic accuracy and time targets for the term, written in the log with two focus topics named."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Open the baseline table and note each topic's accuracy and time"
                - "Set a term target for accuracy and median time per topic"
                - "Name the two weakest topics as this term's focus"
                - "Write the targets and the date at the top of the log"
            - name: Monte Carlo checker for probability answers
              description: |-
                ## Purpose
                A ten-line simulation settles most arguments about whether an answer is right, and it catches the errors that feel convincing on paper, such as the boy-girl problem or overlapping events. Having a small script template ready means checking a doubtful answer takes five minutes instead of an evening.

                ## Milestones
                1. A script template in Python or a similar language that runs a trial function a million times and reports the mean with a confidence interval.
                2. Five known results reproduced with it, including Monty Hall and the expected rolls to see a six.
                3. A note on how many trials are needed for two correct decimal places.
                4. The template saved where it can be copied in under a minute.

                ## Notes
                Simulation checks an answer, it does not replace the derivation. Use it after you have committed to a number, not before.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved simulation template that reproduces five known probability results to two decimal places."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a script that repeats a trial function and prints the mean"
                - "Add a confidence interval to the printed result"
                - "Reproduce Monty Hall and four other known answers with it"
                - "Save the template in your practice folder with a short usage note"
            - name: Daily twenty-minute problem session
              description: |-
                ## Purpose
                Short daily practice beats occasional long sessions for building recall of methods, because each idea gets retrieved many times across weeks. Twenty minutes, three problems from the bank, logged before stopping, is small enough to keep through a full term.

                ## Milestones
                1. A fixed time and place for the session, such as after the first lecture or before dinner.
                2. Three problems drawn from the bank each day, weighted towards the focus topics.
                3. Every attempt logged with minutes, result and key idea.
                4. Sessions held on at least five days in each of four consecutive weeks.

                ## Notes
                Start from the **Habit tracker** template. On a bad day, one problem logged still counts; skipping entirely is what breaks the run.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Practice sessions logged on at least five days a week for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Choose a fixed daily time and place for the session"
                - "Solve three bank problems against the clock and log each one @recurring(daily)"
                - "Weight the daily draw towards your two focus topics"
                - "Mark each completed day in the habit tracker"
            - name: Saturday timed problem set
              description: |-
                ## Purpose
                Daily sessions build methods, but only a longer timed set shows whether you can switch between topics under pressure. Ten mixed problems in sixty minutes each Saturday gives a weekly score that is comparable from week to week.

                ## Milestones
                1. A fixed format: ten mixed problems, sixty minutes, no notes, simulation only after time is up.
                2. Sets drawn from the bank so no problem repeats within eight weeks.
                3. Each week's score and time per problem entered in the log.
                4. Eight weekly scores plotted so the trend is visible.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly timed sets sat in the fixed format, with scores plotted in the log."
                cadence: rolling
              tasks:
                - "Write the fixed format for the weekly set in the log"
                - "Draw ten unrepeated mixed problems from the bank"
                - "Sit the timed set and log the score and minutes per problem @recurring(weekly:sat)"
                - "Plot the weekly scores once eight weeks are logged"
            - name: Spaced review of missed problems
              description: |-
                ## Purpose
                Any problem you got wrong once is the most valuable problem in the bank, and most students never see it again. Re-solving missed problems cold after a few days, then after a few weeks, turns each mistake into a method you keep.

                ## Milestones
                1. A review queue in the log listing every missed problem with the date it was missed.
                2. Each missed problem re-solved cold after about three days and again after about three weeks.
                3. Problems solved correctly twice in a row removed from the queue.
                4. The queue kept under thirty problems by clearing the oldest first.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A review queue under thirty problems in which every miss has been re-solved at least twice before removal."
                cadence: rolling
              tasks:
                - "Copy every missed problem into a review queue with its date"
                - "Re-solve the queue's due problems cold without looking at notes @recurring(weekly:wed)"
                - "Remove problems solved correctly twice in a row"
                - "Clear the oldest problems first if the queue passes thirty"
            - name: Monthly speed and accuracy review
              description: |-
                ## Purpose
                Weekly scores bounce around with problem difficulty, so the honest picture appears only when a month of log rows is summarised by topic. A short monthly review compares each topic with its target and decides where next month's practice time goes.

                ## Milestones
                1. Accuracy and median minutes per topic calculated from the month's log rows.
                2. Each topic compared with its term target and marked on track or behind.
                3. Next month's two focus topics chosen from the results.
                4. A three-line summary of the month written at the top of the log.

                ## Notes
                Start from the **Metrics log** template. Count only first attempts; re-solves from the review queue flatter the numbers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly summaries over a year, each with per-topic accuracy and time against target and two named focus topics."
                cadence: rolling
              tasks:
                - "Filter the month's first attempts by topic"
                - "Calculate accuracy and median minutes per topic and compare with the targets @recurring(monthly:28)"
                - "Choose next month's two focus topics"
                - "Write a three-line month summary at the top of the log"
            - name: Monthly mixed-topic timed paper
              description: |-
                ## Purpose
                Re-sitting a paper in the same shape as the baseline each month shows real progress, because the conditions match. Twenty unseen problems, the same five topics and the same time limit make month-to-month scores directly comparable.

                ## Milestones
                1. A paper format matching the baseline: twenty unseen problems, five topics, the same time limit.
                2. One paper sat in each of three consecutive months.
                3. Each paper's per-topic scores set beside the baseline table.
                4. Any topic with no improvement after three papers flagged for a change of method, not just more practice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly papers sat in the baseline format, with per-topic scores compared to the baseline and stuck topics flagged."
                cadence: rolling
              tasks:
                - "Write the paper format so it matches the baseline exactly"
                - "Set aside twenty unseen problems from the bank for each month"
                - "Sit the monthly paper and compare per-topic scores with the baseline @recurring(monthly:15)"
                - "Flag any topic that has not improved after three papers"
            - name: Weekly problem swap with a study partner
              description: |-
                ## Purpose
                Solving alone, you never hear the faster route someone else found or the gap in your own argument. Swapping three problems a week with a partner, solving separately, then comparing methods for fifteen minutes, exposes you to approaches you would not have tried.

                ## Milestones
                1. A partner at a similar level agreed, with a fixed weekly time.
                2. Three problems exchanged each week that the other person has not seen.
                3. Methods compared after solving, noting any shorter route in the log.
                4. Ten swaps completed with at least five new methods recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten weekly swaps completed with a named partner and at least five new solution methods recorded in the log."
                cadence: rolling
              tasks:
                - "Ask a classmate at a similar level to swap problems weekly"
                - "Pick three problems your partner has not seen"
                - "Swap problems, solve separately and compare methods for fifteen minutes @recurring(weekly:tue)"
                - "Note any shorter route you learned in the log's key idea column"
            - name: Problem bank refresh from new sources
              description: |-
                ## Purpose
                After a few months the bank runs out of unseen problems in your strongest topics and you start recognising answers instead of solving. Adding a small batch of fresh problems each month, aimed at thin topics, keeps timed sets honest.

                ## Milestones
                1. Unseen problems counted per topic at the start of each month.
                2. Ten to twenty new problems added each month, mostly in topics with fewer than ten unseen.
                3. Each new problem tagged with topic, difficulty and source reference.
                4. Doubtful published answers checked by simulation before the problem is used in a timed set.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every topic keeps at least ten unseen problems, with a batch of new tagged problems added each month."
                cadence: rolling
              tasks:
                - "Count unseen problems per topic in the bank"
                - "Add ten to twenty tagged problems in the thinnest topics @recurring(monthly:5)"
                - "Check doubtful published answers with the simulation template"
                - "Retire problems you now recognise on sight from the timed pool"
            - name: Quarterly topic coverage audit
              description: |-
                ## Purpose
                Practice drifts towards topics you enjoy, so whole areas such as geometric probability or random walks can go untouched for months. A quarterly audit of the log against the full topic list shows what has been neglected and resets the plan.

                ## Milestones
                1. A full topic list of twelve to fifteen entries, from basic counting to martingales.
                2. Problems attempted and accuracy per topic counted for the quarter.
                3. Every topic with fewer than ten attempts named as neglected.
                4. Next quarter's plan adjusted so each neglected topic gets a set number of sessions.

                ## Notes
                Start from the **Skills matrix** template, with topics as rows and attempts, accuracy and confidence as columns.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly matrix of attempts and accuracy for every topic, with neglected topics named and given sessions in the next quarter."
                cadence: cyclic
              tasks:
                - "Write the full list of twelve to fifteen practice topics"
                - "Count each topic's attempts and accuracy for the quarter @recurring(quarterly)"
                - "Name every topic with fewer than ten attempts"
                - "Book a set number of sessions for each neglected topic next quarter"
            - name: Counting and combinatorics fundamentals drill
              description: |-
                ## Purpose
                Almost every discrete probability question is a counting question underneath, and the classic errors (counting ordered when the question is unordered, double counting overlapping cases) all start here. Drilling the multiplication principle, permutations, combinations and complementary counting until they are automatic removes the most common source of wrong answers.

                ## Milestones
                1. The difference between ordered and unordered selection, with and without replacement, explained in a worked table.
                2. Thirty counting problems solved, including committees, arrangements with restrictions and card hands.
                3. Complementary counting used on at least ten problems where direct counting is messy.
                4. Accuracy on counting problems at or above the term target for two weeks running.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Thirty counting problems logged with accuracy at or above target for two consecutive weeks."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a table of the four selection cases with one example each"
                - "Solve thirty counting problems from the bank and log them"
                - "Redo ten messy problems by counting the complement"
                - "Do five counting warm-up problems before the first lecture @recurring(weekly:mon)"
            - name: Stars and bars and occupancy problems
              description: |-
                ## Purpose
                Questions about distributing identical objects into boxes, or the number of non-negative solutions to an equation, look hard until the stars and bars picture clicks. Occupancy problems such as the expected number of empty boxes also bridge counting and expectation, so they repay a dedicated block of practice.

                ## Milestones
                1. The stars and bars formula derived from the picture for both the zero-allowed and at-least-one cases.
                2. Fifteen distribution problems solved, including bounded variants handled with inclusion-exclusion.
                3. The expected number of empty boxes when n balls go into n boxes derived with indicators.
                4. A one-paragraph note on when objects should be treated as identical or distinct.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Fifteen distribution problems logged plus a written derivation of the expected number of empty boxes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Derive stars and bars from the picture for both standard cases"
                - "Solve fifteen distribution problems including bounded variants"
                - "Derive the expected number of empty boxes using indicator variables"
                - "Write a short note on identical versus distinct objects"
            - name: Inclusion-exclusion and derangement problems
              description: |-
                ## Purpose
                Problems about at least one match, such as hat-check or secret-santa questions, are where inclusion-exclusion becomes essential and where many students stop after two terms. Working through derangements to the limit of one over e builds the full alternating-sum technique and a result that appears again and again.

                ## Milestones
                1. Inclusion-exclusion written for three sets and then for n sets in your own notation.
                2. The derangement count derived and the probability of no fixed point shown to approach one over e.
                3. Twelve at-least-one problems solved, including matching birthdays and dice faces.
                4. A short list of signals that a problem needs inclusion-exclusion rather than direct counting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written derangement derivation reaching the one over e limit plus twelve logged at-least-one problems."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write inclusion-exclusion for three sets with a Venn sketch"
                - "Derive the derangement count and its limit of one over e"
                - "Solve twelve at-least-one problems from the bank"
                - "List the wording clues that point to inclusion-exclusion"
            - name: Conditional probability and Bayes' rule set
              description: |-
                ## Purpose
                Conditional probability is where intuition fails most often: the two-child problem, false positive tests and the Monty Hall variants all trip people who answer quickly. A focused set of problems, each solved by writing the conditioning event explicitly, trains the habit of asking what exactly is known.

                ## Milestones
                1. Every problem in the set started by writing the conditioning event in words and symbols.
                2. Twenty-five problems solved, including disease-test, urn and two-child variants.
                3. Monty Hall solved with the host's rule stated, plus two variants where the host behaves differently.
                4. Tree diagrams or tables used to check at least ten of the answers.

                ## Notes
                The wording of the information matters more than the numbers. Being told at least one child is a boy and seeing a particular child who is a boy lead to different answers.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty-five conditional probability problems logged, each opening with the conditioning event written out, including three Monty Hall variants."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the conditioning event explicitly before solving each problem"
                - "Solve twenty-five conditional probability problems from the bank"
                - "Solve Monty Hall and two variants with different host rules"
                - "Check ten answers with a tree diagram or a table"
            - name: Linearity of expectation with indicator variables
              description: |-
                ## Purpose
                Linearity of expectation works even when the variables are dependent, which makes it the fastest tool for a huge class of questions: expected fixed points, expected runs, expected distinct values. Learning to see a count as a sum of indicators turns many long calculations into three lines.

                ## Milestones
                1. The rule that expectation is linear without independence stated with a counterexample showing variance is not.
                2. Expected fixed points of a random permutation and expected number of runs in coin flips derived with indicators.
                3. The coupon collector expectation derived as a sum of geometric waiting times.
                4. Twenty problems solved where indicators replace a direct distribution calculation.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty indicator-method problems logged plus written derivations of fixed points, runs and the coupon collector expectation."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write why linearity holds without independence and why variance differs"
                - "Derive expected fixed points and expected runs using indicators"
                - "Derive the coupon collector expectation from geometric waiting times"
                - "Solve twenty bank problems by writing the count as a sum of indicators"
            - name: First-step analysis for expected values
              description: |-
                ## Purpose
                Questions like the expected number of rolls to see two sixes in a row, or the chance a game ends in your favour, are solved by conditioning on what happens first and writing an equation for each state. Practising this until setting up the states is quick gives you a method for almost any waiting-time puzzle.

                ## Milestones
                1. The method written as a recipe: define states, condition on the first step, solve the linear equations.
                2. Expected rolls to see a six and to see two sixes in a row derived, giving 6 and 42.
                3. Fifteen waiting-time and win-probability problems solved by first-step analysis.
                4. Three answers checked with the simulation template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written first-step recipe, the two sixes-in-a-row derivations and fifteen logged waiting-time problems."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the first-step analysis recipe in four lines"
                - "Derive the expected rolls to see one six and two sixes in a row"
                - "Solve fifteen waiting-time problems by setting up states"
                - "Check three of the answers with the simulation template"
            - name: Geometric probability on lines, squares and circles
              description: |-
                ## Purpose
                Continuous puzzles, such as two people arriving at random within an hour or a stick broken in two random places, become area calculations once the sample space is drawn. These problems reward sketching, so a block of practice with a diagram for each builds a skill that discrete drills do not.

                ## Milestones
                1. The meeting problem solved by drawing the unit square and shading the event.
                2. The broken stick triangle probability derived, giving one quarter.
                3. Twelve problems solved on intervals, squares, triangles and discs, each with a labelled sketch.
                4. A note on how the answer changes when the breaking or choosing rule changes.

                ## Notes
                Bertrand's paradox shows that a random chord has no single answer until the method of choosing it is fixed. Always state the rule.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve geometric probability problems logged, each with a labelled sketch, including the meeting and broken stick problems."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Solve the meeting problem by shading the event on a unit square"
                - "Derive the broken stick triangle probability"
                - "Solve twelve geometric problems with a sketch for each"
                - "Note how two answers change when the choosing rule changes"
            - name: Order statistics of uniform random variables
              description: |-
                ## Purpose
                Questions about the largest, smallest or k-th of several uniform draws appear constantly in puzzles and auction-style games. Knowing that n uniforms split the interval into n plus one pieces of equal expected length answers many of them instantly, and deriving it once makes the shortcut trustworthy.

                ## Milestones
                1. The distribution of the maximum of n uniforms derived, with expectation n over n plus one.
                2. The equal expected spacings result explained with the circle argument.
                3. Ten problems solved on the maximum, minimum, range and k-th value.
                4. The expected gap between the two closest of three points worked out and checked by simulation.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written derivations of the maximum and spacing results plus ten logged order statistic problems."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Derive the distribution and expectation of the maximum of n uniforms"
                - "Write the circle argument for equal expected spacings"
                - "Solve ten order statistic problems from the bank"
                - "Check one spacing answer with the simulation template"
            - name: Symmetry arguments that shortcut calculations
              description: |-
                ## Purpose
                Some of the most elegant puzzle solutions come from noticing that two outcomes must be equally likely, as with the last passenger finding their own seat on the plane or which of two players flips the first head. Collecting symmetry arguments and practising spotting them saves minutes on problems that otherwise need long sums.

                ## Milestones
                1. Ten classic problems solved first by symmetry and then by direct calculation to confirm.
                2. The airplane seat problem explained in a short paragraph using symmetry.
                3. A list of signals that symmetry may apply, such as exchangeable players or reversible processes.
                4. Five new problems where symmetry was spotted within the first two minutes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten problems solved both by symmetry and directly, plus a written list of symmetry signals."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Solve the airplane seat problem using a symmetry argument"
                - "Confirm ten symmetry answers by direct calculation"
                - "Write the signals that suggest a symmetry shortcut"
                - "Try spotting symmetry in the first two minutes of five new problems"
            - name: Random walks and gambler's ruin problems
              description: |-
                ## Purpose
                The simple random walk sits behind many puzzles about betting until broke, reaching a target score or returning to the start. Gambler's ruin with fair and biased coins is the core result, and its first-step derivation reuses the expected value method on probabilities.

                ## Milestones
                1. Fair gambler's ruin derived: starting at i with target N, the chance of reaching N is i over N.
                2. The biased coin version derived with the ratio of probabilities.
                3. The expected duration of a fair game derived as i times N minus i.
                4. Ten random walk problems solved, including reflection principle counting questions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written derivations of fair and biased ruin and expected duration plus ten logged random walk problems."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Derive the fair gambler's ruin probability by first-step analysis"
                - "Derive the biased version and check it against the fair limit"
                - "Derive the expected duration of a fair game"
                - "Solve ten random walk problems including reflection counting"
            - name: Coin-flip pattern waiting times and Penney's game
              description: |-
                ## Purpose
                Why does HT take four flips on average while HH takes six, and why does the second player in Penney's game always have a better choice? Working through pattern waiting times builds intuition for overlap in sequences and is a favourite source of follow-up questions.

                ## Milestones
                1. Expected flips to see HH and HT derived by first-step analysis, giving 6 and 4.
                2. The overlap idea explained in a paragraph, with HTH and HHT as examples.
                3. Penney's game winning responses worked out for all eight three-flip patterns.
                4. Two results confirmed with the simulation template.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Derivations of the HH and HT waiting times and a table of Penney's game responses for all eight patterns."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Derive the expected flips to see HH and then HT"
                - "Write a paragraph explaining why overlap changes waiting times"
                - "Build the Penney's game response table for three-flip patterns"
                - "Confirm two waiting times with the simulation template"
            - name: Classic brainteaser canon in your own words
              description: |-
                ## Purpose
                Few puzzle collections stray far from a canon of a few dozen classics, and those classics come up so often that knowing them well is expected: the 100 prisoners and light bulb, the pirates sharing gold, the two envelopes, the burning ropes, the poisoned wine. Writing your own concise solution to each, and re-solving them from memory, means you understand the idea rather than recognising the answer.

                ## Milestones
                1. A canon list of thirty to forty classic puzzles drawn from two or more puzzle books.
                2. A solution of five to ten lines in your own words for each puzzle.
                3. The key idea of each puzzle named in a single phrase, such as backward induction or binary encoding.
                4. Every puzzle re-solved from memory at least once, with failures added to the review queue.

                ## Notes
                Peter Winkler's puzzle collections and Mosteller's book are common sources. Write solutions yourself rather than copying them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A canon of at least thirty puzzles, each with an own-words solution and named key idea, all re-solved from memory once."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List thirty to forty classic puzzles from two puzzle books"
                - "Write a short own-words solution and key idea for each"
                - "Re-solve two canon puzzles from memory and log the result @recurring(weekly:fri)"
                - "Add any puzzle you fail to re-solve to the review queue"
            - name: Logic puzzles without probability
              description: |-
                ## Purpose
                Many brainteaser sets mix probability with pure logic: twelve coins and a balance, hats and prisoners, river crossings, bridge and torch. These need a different habit, searching for an information argument or an invariant, so they deserve their own practice block rather than turning up as surprises.

                ## Milestones
                1. Twenty logic puzzles solved across weighing, hat, crossing and invariant types.
                2. The twelve coins in three weighings solution written in full, including the odd coin's direction.
                3. An information argument written for one weighing puzzle, showing why fewer steps cannot work.
                4. A note of the three questions to ask first on a logic puzzle, such as what is preserved at each step.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Twenty logic puzzles logged, including a full twelve-coin solution and one written lower-bound argument."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Solve the twelve coins in three weighings puzzle in full"
                - "Solve twenty logic puzzles across four types and log them"
                - "Write why one weighing puzzle cannot be done in fewer steps"
                - "Write the three opening questions you will ask on any logic puzzle"
            - name: Optimal stopping puzzles and re-roll games
              description: |-
                ## Purpose
                Games where you may stop or try again, such as rolling a die with the option to re-roll, or choosing the best candidate from a sequence, test whether you can compare the value of stopping with the value of continuing. Working through the classic cases builds the backward reasoning these questions need.

                ## Milestones
                1. The single re-roll die game solved: re-roll on 1, 2 or 3, with expected value 4.25.
                2. The two re-roll version solved by working backwards.
                3. The secretary problem's stopping rule explained and its one over e result noted.
                4. Eight stopping problems solved with the threshold rule stated for each.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Eight stopping problems logged with threshold rules, including both re-roll games and the secretary problem."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Solve the single re-roll die game and its threshold"
                - "Solve the two re-roll version by working backwards"
                - "Write the secretary problem's rule and why it gives one over e"
                - "Solve eight more stopping problems stating each threshold"
            - name: Paradox file of counterintuitive results
              description: |-
                ## Purpose
                Certain results feel wrong even after you have proved them: the birthday problem, the inspection paradox, the two envelopes, Simpson's paradox. Keeping a file with each paradox, the tempting wrong answer and the precise reason it fails protects you from the same trap in new clothes.

                ## Milestones
                1. Twelve paradoxes recorded, each with the tempting answer and the correct one.
                2. The exact step where the tempting reasoning fails written in one sentence for each.
                3. The birthday problem threshold of 23 people derived rather than quoted.
                4. Two paradoxes explained aloud to a friend without notes.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A file of twelve paradoxes, each with the tempting answer, the correct answer and the failing step."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List twelve probability paradoxes you have met or read about"
                - "Write the tempting answer and the correct one for each"
                - "Name the exact step where the tempting reasoning fails"
                - "Derive the birthday problem threshold of 23 yourself"
            - name: First-sixty-seconds routine for new problems
              description: |-
                ## Purpose
                Most lost time on a problem is spent in the first minute, rereading and wondering where to start. A fixed opening routine (restate the question, name what is random, try a tiny case, pick a method) gives you a starting move on every problem and makes timed scores rise without learning anything new.

                ## Milestones
                1. A four-step opening routine written on a card.
                2. The routine used on every problem for two weeks of daily sessions.
                3. Median time to first written step measured before and after.
                4. The routine trimmed to the steps that actually helped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Median time to first written step recorded before and after two weeks of using a written four-step opening routine."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a four-step opening routine on a card"
                - "Measure your time to the first written step on five problems"
                - "Use the routine on every problem for two weeks"
                - "Remeasure time to first step and drop steps that did not help"
            - name: Choosing a core probability textbook
              description: |-
                ## Purpose
                Puzzle books teach tricks but not the theory that lets you handle an unfamiliar problem, and working through three textbooks halfway is worse than one fully. Comparing two or three candidates against your level and time, then committing to one, gives the practice a spine.

                ## Milestones
                1. Two or three candidates shortlisted, such as Blitzstein and Hwang's Introduction to Probability, Ross's A First Course in Probability and Grimmett and Stirzaker's exercise collection.
                2. A sample chapter of each read and five exercises tried.
                3. One book chosen against level, exercise quality, availability of solutions and price.
                4. A chapter schedule for the term written into the practice timetable.

                ## Notes
                Start from the **Reading queue** template. Check your university library before buying; many hold all three.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One core probability textbook chosen after sampling two or three, with a chapter schedule for the term written down."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Shortlist two or three probability textbooks at your level"
                - "Read a sample chapter and try five exercises from each"
                - "Choose one book and note why"
                - "Write a chapter schedule for the term into your timetable"
            - name: Sanity bounds before exact answers
              description: |-
                ## Purpose
                Writing a rough range before calculating catches nonsense answers, such as a probability above one or an expected wait shorter than the minimum possible. The habit takes ten seconds per problem and is the cheapest accuracy gain available.

                ## Milestones
                1. A rule that every problem gets a written lower and upper bound before calculation.
                2. Three bounding tricks listed: trivial bounds, a simpler related problem and a limiting case.
                3. The bound written on fifty consecutive logged problems.
                4. Answers caught by the bound counted and noted in the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Bounds written before calculation on fifty consecutive logged problems, with the number of answers they caught recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add a bound column to the practice log"
                - "Write three bounding tricks on the front of your notebook"
                - "Write a bound before calculating on fifty consecutive problems"
                - "Count how many wrong answers a bound caught"
            - name: Stuck rule and hint ladder
              description: |-
                ## Purpose
                Staring at one problem for an hour feels virtuous but usually teaches less than a well-timed hint, while looking at the solution after two minutes teaches nothing. A written stuck rule with a ladder of hints (method name, first line, full solution) keeps effort productive.

                ## Milestones
                1. A time limit chosen for being stuck, such as fifteen minutes on a daily problem.
                2. A three-rung hint ladder defined, from the method's name to the full solution.
                3. The rung used recorded in the log for every problem that needed help.
                4. After a month, the share of problems solved at each rung reviewed.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written stuck time limit and three-rung hint ladder, with the rung used logged on every assisted problem for a month."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Set your stuck time limit for daily and weekly problems"
                - "Write the three rungs of your hint ladder"
                - "Add a hint rung column to the log"
                - "Review the share solved at each rung after a month"
            - name: Online probability test dress rehearsal
              description: |-
                ## Purpose
                Timed online tests leave no room for working out the format on the day, and nerves cost more points than gaps in knowledge. A full rehearsal under the same conditions (same device, same time limit, scrap paper only, a quiet room) shows how you perform when the clock is real.

                ## Milestones
                1. The likely format of the test checked from the organiser's own information, without assuming question counts.
                2. A rehearsal paper built from unseen bank problems in that format.
                3. The rehearsal sat once under full conditions and scored.
                4. Pacing lessons written down, such as when to skip and return.

                ## Notes
                Practising problems is fine; sharing or seeking the actual questions of a live assessment is not.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One full rehearsal sat under test conditions, scored, with written pacing lessons, before the real test date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the organiser's description of the test format and note it"
                - "Build a rehearsal paper of unseen problems in that format"
                - "Sit the rehearsal on the same device in a quiet room"
                - "Write three pacing lessons from the rehearsal"
            - name: Hundred-problem milestone review
              description: |-
                ## Purpose
                After the first hundred logged problems there is enough data to see whether the practice is working. A milestone review compares accuracy and speed with the baseline, checks the error categories and decides what to change for the next hundred.

                ## Milestones
                1. One hundred first attempts logged since the baseline.
                2. Accuracy and median time per topic compared with the baseline table.
                3. Error category counts compared between the first and second fifty problems.
                4. Three changes for the next hundred problems written down.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written review after one hundred logged problems comparing topic accuracy and time with the baseline and listing three changes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the log count and schedule the review at one hundred problems"
                - "Compare per-topic accuracy and time with the baseline"
                - "Compare error counts between the first and second fifty"
                - "Write three changes for the next hundred problems"
            - name: Brainteaser evening for a student society
              description: |-
                ## Purpose
                Running a puzzle evening for a maths, finance or investment society tests your understanding, because explaining a solution to a room exposes every gap. It also builds a network of people who practise the same material.

                ## Milestones
                1. A date, room and society agreed, with a sign-up count.
                2. Twelve puzzles chosen across three difficulty rounds, with your own written solutions.
                3. The evening run with teams, scoring and a solution walk-through.
                4. The puzzles and solutions shared with attendees afterwards.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A puzzle evening held for a society with twelve puzzles in three rounds and written solutions shared with attendees."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask a society committee for a date and room"
                - "Choose twelve puzzles in three difficulty rounds"
                - "Write and check a solution for every puzzle"
                - "Run the evening and send attendees the solutions"
            - name: End-of-term practice portfolio
              description: |-
                ## Purpose
                Twelve weeks of practice leave a log nobody else can read. Pulling your ten best solutions, your progress chart and a short reflection into a tidy portfolio gives you something to revise from next term and evidence of steady work for a tutor or mentor.

                ## Milestones
                1. Ten solutions chosen that show different methods, each rewritten cleanly to the solution standard.
                2. A chart of monthly accuracy and speed against the baseline.
                3. A one-page reflection on what worked and what did not.
                4. The portfolio saved as a single document.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A single portfolio document with ten clean solutions, a progress chart and a one-page reflection, completed by the end of term."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the month's best solution and mark it for the portfolio @recurring(monthly:26)"
                - "Rewrite ten chosen solutions to the solution standard"
                - "Chart monthly accuracy and speed against the baseline"
                - "Write a one-page reflection on the term's practice"
            - name: Practice route for non-maths degree students
              description: |-
                ## Purpose
                Economics, engineering and computer science students often arrive with less formal probability than maths students and feel behind on harder puzzles. A route that fills the theory gaps first, then builds puzzle fluency, avoids months of frustration on problems that need tools you have not met.

                ## Milestones
                1. A gap list made by comparing your courses with a first probability course syllabus.
                2. Missing topics, such as conditional expectation or continuous densities, learned from the chosen textbook.
                3. A gentler problem bank tier of difficulty one problems completed before mixed sets.
                4. Baseline topics re-tested after eight weeks, with gains recorded.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written gap list, the missing topics covered from a textbook and a re-test after eight weeks showing per-topic changes."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Compare your courses with a first probability course syllabus"
                - "List the topics you have never been taught"
                - "Work through the missing chapters in your chosen textbook"
                - "Re-test baseline topics after eight weeks and log the changes"
            - name: Twelve-week ramp before internship season
              description: |-
                ## Purpose
                Penultimate-year students often start practising when applications open, which is too late to build real speed. A twelve-week ramp, ending as the season begins, moves from topic drills to mixed timed sets to full papers in time.

                ## Milestones
                1. The usual opening month for internship applications in your target field noted, with the ramp start counted back twelve weeks.
                2. Weeks one to four spent on the two weakest topics and the solution standard.
                3. Weeks five to eight spent on mixed timed sets, two a week.
                4. Weeks nine to twelve spent on full papers, with the final score set against the baseline.

                ## Notes
                This plan covers the probability practice only. Applications, CVs and interview preparation belong in their own areas.
              priority: high
              deadlineOffsetDays: 84
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Twelve weeks of ramp completed in three phases, ending with a full paper scored against the baseline before applications open."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Note when applications usually open and count back twelve weeks"
                - "Plan weeks one to four around your two weakest topics"
                - "Book two mixed timed sets a week for weeks five to eight"
                - "Sit full papers in weeks nine to twelve and compare with the baseline"
            - name: Minimum routine during exam weeks
              description: |-
                ## Purpose
                University exams can wipe out practice for a month, and restarting from zero costs more than keeping a thread going. A written minimum (one problem a day, no timed sets, review queue paused) keeps the habit alive without competing with revision.

                ## Milestones
                1. Exam weeks marked in the timetable.
                2. A minimum routine written: one problem a day and nothing else.
                3. The minimum kept on most days of exam weeks.
                4. Full practice restarted within a week of the last exam, with a short timed set to check for loss.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written minimum routine kept on most days of exam weeks and full practice resumed within a week of the last exam."
                cadence: cyclic
              tasks:
                - "Mark this term's exam weeks in the practice timetable"
                - "Write your exam-week minimum routine in one line"
                - "Pause the review queue and timed sets during exams"
                - "Sit a short timed set within a week of the last exam"
            - name: Refresher fortnight after a long break
              description: |-
                ## Purpose
                After a summer job or a term away, speed fades faster than understanding. A two-week refresher (formula sheet from memory, a short baseline, then two topics a day) brings you back to your previous level quickly instead of restarting the whole plan.

                ## Milestones
                1. The formula sheet rewritten from memory and gaps filled.
                2. A ten-problem mini baseline sat and compared with your last monthly paper.
                3. Each topic revisited for one session over the fortnight, weakest first.
                4. The daily session and weekly set restarted by the end of week two.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A ten-problem mini baseline compared with the last monthly paper and the daily and weekly routines restarted within fourteen days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Rewrite the formula sheet from memory and fill the gaps"
                - "Sit a ten-problem mini baseline and compare with your last paper"
                - "Revisit one topic per session, weakest first"
                - "Restart the daily session and weekly set by day fourteen"
            - name: Running a weekly probability study group
              description: |-
                ## Purpose
                A study group of four to six students multiplies the problems you see and the methods you hear, and organising it keeps you consistent. A simple format, with one person presenting a solution each week and a shared problem list, keeps sessions focused rather than social.

                ## Milestones
                1. Four to six members agreed with a fixed weekly time and place.
                2. A shared problem list and a rotation for who presents.
                3. Ten sessions held with short notes of the methods discussed.
                4. A mid-term check with members on difficulty and format.

                ## Notes
                Start from the **Meeting notes** template for each session.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Ten study group sessions held with four or more members, each with notes of the problems and methods discussed."
                cadence: rolling
              tasks:
                - "Invite four to six classmates and agree a weekly slot"
                - "Set up a shared problem list and a presenter rotation"
                - "Run the session and write short notes of the methods @recurring(weekly:thu)"
                - "Ask members at mid-term whether difficulty and format suit them"
            - name: Generating functions for dice and sums
              description: |-
                ## Purpose
                Problems asking for the distribution of a sum of dice, or the number of ways to make change, become polynomial multiplication once generating functions are in hand. They also explain results such as Sicherman dice, and give a second method for checking hard counting answers.

                ## Milestones
                1. The probability generating function of a fair die written and squared to give the two-dice sum distribution.
                2. Sicherman dice found by factorising the generating function.
                3. Eight sum and partition problems solved with generating functions.
                4. One counting answer from an earlier drill rechecked this way.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Eight problems solved with generating functions, including the two-dice distribution and a Sicherman dice factorisation."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the generating function of a fair die and square it"
                - "Factorise it to find the Sicherman dice"
                - "Solve eight sum and partition problems with generating functions"
                - "Recheck one earlier counting answer using this method"
            - name: Martingales and optional stopping for puzzles
              description: |-
                ## Purpose
                Experienced solvers answer some waiting-time and ruin questions in two lines with a martingale, where first-step analysis needs a page. Learning to build a fair game and apply optional stopping, with its conditions, opens the hardest tier of classic puzzles, such as the expected time for the ABRACADABRA monkey.

                ## Milestones
                1. The definition of a martingale and the optional stopping conditions written in your own words.
                2. Gambler's ruin and expected duration rederived with martingales and compared with first-step results.
                3. The gambling team argument used to find pattern waiting times, matching HH at 6 and HT at 4.
                4. Five harder puzzles solved, with the stopping conditions checked for each.

                ## Notes
                Optional stopping fails without its conditions, as the doubling strategy shows. Check boundedness or integrability every time.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Martingale derivations of ruin, duration and pattern waiting times plus five harder puzzles with stopping conditions checked."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the martingale definition and optional stopping conditions"
                - "Rederive gambler's ruin and its duration with martingales"
                - "Use the gambling team argument on HH and HT waiting times"
                - "Solve five harder puzzles and check stopping conditions each time"
            - name: Markov chain absorption with transition matrices
              description: |-
                ## Purpose
                When a puzzle has many states, such as a board game, a tennis game from deuce or a frog jumping between lily pads, solving the first-step equations by hand gets slow and error-prone. Setting the problem up as an absorbing Markov chain and using the fundamental matrix handles any number of states and checks hand answers.

                ## Milestones
                1. The canonical form of an absorbing chain and the fundamental matrix written out.
                2. Absorption probabilities and expected steps computed for a tennis game from deuce.
                3. A small script that builds the matrix from a list of transitions and prints the results.
                4. Five multi-state puzzles solved and checked against hand solutions.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A working absorbing chain script plus five multi-state puzzles solved by matrix and checked against hand answers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the canonical form and fundamental matrix of an absorbing chain"
                - "Compute win probability and expected points from deuce in tennis"
                - "Write a script that builds the matrix from a list of transitions"
                - "Solve five multi-state puzzles and compare with hand solutions"
            - name: Poisson processes and exponential races
              description: |-
                ## Purpose
                Continuous-time puzzles, such as buses arriving at random, which of several light bulbs fails first or how long you wait at a stop, rely on the memoryless property and competing exponentials. These come up in advanced problem sets and are where the inspection paradox lives.

                ## Milestones
                1. The memoryless property proved and explained with a bus stop example.
                2. The minimum of independent exponentials shown to be exponential, with the winner probabilities.
                3. The inspection paradox worked through: the expected gap you arrive in is longer than the average gap.
                4. Eight continuous-time puzzles solved and two checked by simulation.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written results on memorylessness, exponential races and the inspection paradox plus eight logged continuous-time puzzles."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Prove the memoryless property of the exponential distribution"
                - "Derive the distribution and winner of an exponential race"
                - "Work through the inspection paradox with a bus timetable example"
                - "Solve eight continuous-time puzzles and simulate two of them"
            - name: Writing and verifying original brainteasers
              description: |-
                ## Purpose
                Writing your own puzzles is the real test of mastery: you must find a clean idea, remove ambiguity and know the answer is right. A small set of original problems, each verified by a second method and tried on other students, is also a strong contribution to a society or study group.

                ## Milestones
                1. Five original puzzles written, each built on one named idea such as symmetry or linearity.
                2. Every puzzle's wording checked for a second reading that changes the answer.
                3. Each answer verified by two methods, one of them simulation where possible.
                4. The puzzles tried on three other students and their feedback recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five original puzzles, each with a verified answer by two methods and feedback from three solvers recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose five ideas from the canon to build original puzzles on"
                - "Write each puzzle and hunt for an ambiguous second reading"
                - "Verify each answer by two methods including a simulation"
                - "Try the puzzles on three students and record their feedback"
---

# Probability and Brainteaser Practice

Probability puzzles reward practice far more than talent: the same few ideas (counting carefully, conditioning on the first step, linearity of expectation, symmetry) solve most of them, and speed comes from having used each idea fifty times. This area is for students building that fluency, starting with foundations (a timed baseline, a log, a sourced problem bank and a solution standard), then the practice machinery, ten topic drills, the classic brainteaser canon, changes to how you approach problems, dated milestones, plans for particular student situations and finally specialist topics such as martingales and Markov chains.

What repeats is a short daily session, a weekly timed set on Saturdays, a midweek review of missed problems, a partner swap, a monthly mixed paper and speed review, and a quarterly coverage audit. Pair the daily session with the **Habit tracker** template, the monthly numbers with **Metrics log**, the topic audit with **Skills matrix**, book choices with **Reading queue** and study group sessions with **Meeting notes**. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
