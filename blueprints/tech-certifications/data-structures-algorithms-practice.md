---
id: tech-certifications.data-structures-algorithms-practice
name: Data Structures and Algorithms Practice
description: "A tracked route back to fluent data structures and algorithms: a problem log, complexity analysis, each core structure built from scratch, graphs, trees and dynamic programming by pattern, spaced review and timed checkpoints."
category: personal
version: 1.0.0
tags: [tech-certifications, data-structures-algorithms-practice, engineer, student, algorithms, data-structures, complexity, dynamic-programming]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - reading-queue
    - habit-tracker
    - metrics-log
    - remediation-plan
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Data Structures and Algorithms Practice
          description: "Rebuilding data structures and algorithms knowledge for interviews: arrays, graphs, trees, dynamic programming and complexity analysis, tracked problem by problem."
          projects:
            - name: Problem log with tags, outcomes and review dates
              description: |-
                ## Purpose
                Solving two hundred problems and remembering forty of them is the usual result of practising without records. A single log, one row per attempt, with the topic, pattern, time taken, whether you needed a hint and when to look at it again, turns scattered practice into evidence you can sort and review. Every other project in this area reads from it.

                ## Milestones
                1. A spreadsheet or table with columns for date, problem, source, topic, pattern, minutes, outcome, hint used, complexity and next review date.
                2. Outcome codes agreed and written at the top: solved clean, solved slow, solved with hint, failed.
                3. The last ten problems you remember solving entered, even roughly.
                4. A filter or view that shows every row whose review date is today or earlier.

                ## Notes
                Keep the log in one place you can open on your phone. A log that lives only on one laptop stops being filled in the first week you travel.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A problem log with the agreed columns and outcome codes exists, holds at least ten rows and has a working due-for-review view."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the problem log with the ten columns listed in the milestones"
                - "Write the four outcome codes at the top of the sheet"
                - "Enter the last ten problems you can remember solving"
                - "Build a view filtered to rows due for review today or earlier"
                - "Export a backup copy of the problem log @recurring(monthly:3)"
            - name: Topic baseline across the core syllabus
              description: |-
                ## Purpose
                Before choosing what to study, rate yourself honestly on the fifteen or so topics that make up a standard algorithms syllabus, from arrays and hashing to graphs and dynamic programming. A two-hour baseline, one easy and one medium problem per weak-looking topic, replaces vague unease with a ranked list of gaps. Repeat it each quarter and the change is visible.

                ## Milestones
                1. A list of core topics written out: arrays and strings, hashing, linked lists, stacks and queues, binary search, sorting, trees, heaps, graphs, shortest paths, union-find, backtracking, dynamic programming, greedy and bit manipulation.
                2. Each topic rated from 1 to 4 for recall, implementation and problem solving.
                3. At least one problem attempted in every topic rated 2 or below, with the result in the problem log.
                4. The three weakest topics marked as the first study priorities.

                ## Notes
                Start from the **Skills matrix** template. Rate implementation separately from recognition: many people can name Dijkstra's algorithm and cannot write it without notes.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated skills matrix rates every core topic on three dimensions, backed by logged attempts, with three priority topics named."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy the fifteen core topics into a skills matrix"
                - "Rate recall, implementation and problem solving for each topic"
                - "Attempt one easy problem in every topic you rated 2 or below"
                - "Mark the three weakest topics as first priorities"
            - name: Big-O and complexity analysis refresher
              description: |-
                ## Purpose
                Stating complexity correctly is half the credit on most algorithm questions, and it is the skill people bluff most often. Working through time and space analysis for loops, recursion, amortised operations and the common recurrences gives you a method instead of a guess. It also makes every later topic faster, because you can tell early whether an approach is fast enough.

                ## Milestones
                1. Big-O, Big-Omega and Big-Theta defined in your own words with one example each.
                2. Twenty code snippets analysed for time and space, including nested loops with dependent bounds.
                3. The master theorem applied to merge sort, binary search and one unbalanced recurrence.
                4. Amortised cost explained for a dynamic array append and a hash table resize.
                5. A one-page table of input sizes against the complexity each one can usually afford.

                ## Notes
                Remember to count the space used by recursion: a depth-first search on a long chain can use linear stack space even when the code allocates nothing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty snippets have written time and space analyses checked against a reference, and the input size table is saved in the area."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the definitions of Big-O, Big-Omega and Big-Theta from memory"
                - "Analyse twenty short snippets for time and space, then check each"
                - "Apply the master theorem to three recurrences"
                - "Work out the amortised cost of dynamic array appends by hand"
                - "Draw up the input size against affordable complexity table"
            - name: One reference text and one problem bank
              description: |-
                ## Purpose
                Switching between five courses and three problem sites is the commonest way to stall. Choosing one textbook or written course for explanations and one problem bank for practice, and sticking with both for at least three months, keeps your notes and progress in one shape. The choice matters less than the commitment.

                ## Milestones
                1. Two or three candidate texts compared on clarity, exercises and whether they include proofs.
                2. Two problem banks compared on topic tags, editorial quality and whether solutions can be checked in your language.
                3. One text and one bank chosen, with the reason written in a sentence.
                4. The chapters that map to your three priority topics listed in reading order.

                ## Notes
                Start from the **Reading queue** template. A classic algorithms textbook and a curated list on a large online judge is a sensible default for most people.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One reference text and one problem bank are chosen and recorded, with priority chapters queued in order."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List two or three candidate texts and read a sample chapter of each"
                - "Compare two problem banks on tags, editorials and language support"
                - "Record the chosen text and bank with one sentence of reasoning"
                - "Queue the chapters for your three priority topics in reading order"
            - name: Tested implementation repository
              description: |-
                ## Purpose
                Writing a heap or a union-find once, from scratch, with tests, teaches more than reading about it ten times. A single repository where every structure and algorithm you build lives beside its unit tests becomes your personal reference, and it shows where your understanding is shaky because the tests fail. It is also something you can point to when someone asks what you have been doing.

                ## Milestones
                1. A repository with one folder per topic and a test runner that works with a single command.
                2. A short readme listing every structure and algorithm with its complexity.
                3. The first three implementations committed with tests that cover empty input, one element and duplicates.
                4. A habit of committing at least once a week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A repository with a one-command test runner holds at least three tested implementations and a readme listing their complexities."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the repository with one folder per core topic"
                - "Set up a test runner that runs every test with one command"
                - "Commit dynamic array, stack and queue implementations with tests"
                - "Push the week's implementations and update the readme @recurring(weekly:fri)"
            - name: Study timetable sized to real hours
              description: |-
                ## Purpose
                Plans built on the hours you wish you had collapse by week three. Counting the hours you actually have, then placing fixed study blocks in them, sets a pace you can keep for months. Five honest hours a week beats fifteen planned and four delivered.

                ## Milestones
                1. One ordinary week tracked to find the hours genuinely free for study.
                2. Weekly study hours agreed as a number, with the days and times they fall on.
                3. Blocks split between new topics, problem practice and review in a stated ratio.
                4. The timetable placed in your calendar as repeating events.
                5. A monthly check of planned against actual hours in place.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A weekly study timetable with a stated hour total and split sits in your calendar, with a monthly comparison against actual hours."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note how you spend your free time for one ordinary week"
                - "Decide your weekly study hours and the days they fall on"
                - "Add the study blocks to your calendar as repeating events"
                - "Compare planned and actual study hours for the month @recurring(monthly:7)"
            - name: Standard library containers in your language
              description: |-
                ## Purpose
                Half the speed of a strong solver comes from knowing exactly which built-in structure to reach for and what each operation costs. A one-page sheet of your language's lists, maps, sets, deques, heaps and sorted containers, with complexities and the gotchas, removes hesitation from every problem. It also catches costly surprises, such as removing from the front of an ordinary list.

                ## Milestones
                1. Each built-in container listed with the cost of insert, delete, lookup and iteration.
                2. The heap, deque and ordered map or sorted list equivalents identified, or their absence noted.
                3. Gotchas recorded: mutation during iteration, default recursion limits, integer overflow and sort stability.
                4. Every entry tested in a short script rather than copied from memory.

                ## Notes
                If your language has no built-in balanced tree or sorted map, note the standard workaround now rather than discovering it under time pressure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested one-page container sheet lists the cost of the main operations for every built-in structure and at least four gotchas."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every built-in container your language offers"
                - "Look up and note the cost of insert, delete and lookup for each"
                - "Write a script that exercises each container and its edge cases"
                - "Add the recursion limit and overflow behaviour to the sheet"
            - name: Twenty-problem diagnostic set
              description: |-
                ## Purpose
                Self-ratings flatter. A fixed set of twenty mixed problems, two from each major topic at easy and medium level, solved under a timer without hints, gives a hard baseline score you can repeat later. Keep the set private and unchanged so the comparison means something.

                ## Milestones
                1. Twenty problems chosen, two per topic, and saved as a fixed list.
                2. All twenty attempted with a 30-minute limit each and no hints.
                3. Each result logged with time, outcome code and the reason for any failure.
                4. A baseline score and per-topic result written at the top of the list.
                5. A date set to repeat the same set.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Twenty fixed diagnostic problems are attempted under time, logged, and summarised as a dated score with a repeat date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick two easy or medium problems for each of ten major topics"
                - "Save the twenty problems as a fixed list you will not change"
                - "Attempt each with a 30-minute timer and no hints"
                - "Write the baseline score and the date to repeat the set"
            - name: Depth target and finish date
              description: |-
                ## Purpose
                How far to go depends on why you are here: a graduate screening test, a senior engineering loop and a competitive programming rating need very different depth. Writing down the goal, the date it matters by and which topics are in or out of scope stops you studying segment trees for a role that will never ask. Review it if the goal changes.

                ## Milestones
                1. The reason for this study written in one sentence, with the date it matters by.
                2. Each core topic marked as essential, useful or out of scope for that goal.
                3. A target difficulty level stated, such as most mediums solved within 30 minutes.
                4. The date and target shared with anyone holding you to it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written goal names the date, the target difficulty and the in-scope topics, and has been shared with one other person."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write one sentence on why you are studying and the date it matters"
                - "Mark each core topic as essential, useful or out of scope"
                - "State the difficulty level you want to reach by that date"
                - "Share the goal and date with one person who will ask about it"
            - name: Spaced review of solved problems
              description: |-
                ## Purpose
                Problems solved once are forgotten within weeks unless you meet them again. Re-solving logged problems from a blank editor at growing intervals, three days, a week, a month, is what turns individual solutions into recognised patterns. Ten minutes per problem is enough when it goes well; when it does not, the interval resets.

                ## Milestones
                1. A review schedule written into the problem log: 3, 7, 21 and 60 days after a successful solve.
                2. Two short review sessions a week held for a month.
                3. Every review logged with its outcome and a new review date.
                4. Problems failed at review reset to the shortest interval.

                ## Notes
                Re-solve from a blank editor, not by reading your old code. Reading feels like remembering and is not.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The problem log shows two review sessions a week for at least four consecutive weeks, each with outcomes and new review dates."
                cadence: rolling
              tasks:
                - "Add the four review intervals to the problem log as a formula"
                - "Re-solve the problems due for review from a blank editor @recurring(weekly:tue,sat)"
                - "Reset any problem you fail at review to the three-day interval"
            - name: Weekly topic block rotation
              description: |-
                ## Purpose
                Practising only random problems leaves gaps; practising one topic for a month lets the others decay. A weekly rotation, one focus topic studied and drilled each week while review covers the rest, gives depth without losing breadth. Order the rotation by your baseline, weakest first.

                ## Milestones
                1. A rotation of core topics written in order, weakest first.
                2. Each week's block includes reading, one implementation and five to eight problems on the topic.
                3. A short note at the end of each week on what stuck and what did not.
                4. The rotation re-ordered after each quarterly re-baseline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive weeks each show a named focus topic, one implementation and at least five logged problems on that topic."
                cadence: cyclic
              tasks:
                - "Write the topic rotation in order, weakest topic first"
                - "Start the week's topic block with the reading and one implementation @recurring(weekly:mon)"
                - "Write a three-line note on what stuck at the end of each block"
            - name: One problem a day habit
              description: |-
                ## Purpose
                Daily contact keeps patterns warm far better than a five-hour weekend session. One problem a day from the current topic, capped at 45 minutes before you read the editorial, builds a streak that adds up to more than three hundred problems a year. Missing a day is fine; missing two is when habits break.

                ## Milestones
                1. A fixed time of day chosen for the daily problem.
                2. A 45-minute cap agreed before reading any hint or editorial.
                3. Thirty problems logged in the first five weeks.
                4. A streak record kept, with a rule to never miss two days running.

                ## Notes
                Start from the **Habit tracker** template. On busy days a single easy review problem counts; the point is the contact, not the difficulty.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The habit tracker shows at least 30 logged daily problems in the first five weeks with no gap longer than one day."
                cadence: rolling
              tasks:
                - "Choose a fixed time of day for the daily problem"
                - "Solve one problem from the current topic list @recurring(daily)"
                - "Log the outcome and minutes before closing the editor"
            - name: Monthly mixed-topic checkpoint
              description: |-
                ## Purpose
                Topic practice tells you the answer is a graph before you start, which real questions never do. A monthly set of six unlabelled problems drawn from every topic tests recognition, the skill that actually fails under pressure. The score trend over months is the clearest sign of progress you will get.

                ## Milestones
                1. A method for drawing six unlabelled problems you have not seen, across at least four topics.
                2. The set attempted in one sitting with a fixed total time.
                3. Each problem logged with whether you identified the right pattern within five minutes.
                4. A running score table kept month to month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly checkpoints are completed and logged, each with a pattern-recognition score and a total score in one table."
                cadence: cyclic
              tasks:
                - "Ask the agent to pick six unseen problems across four topics without showing their tags"
                - "Sit the mixed checkpoint set in one timed session @recurring(monthly:14)"
                - "Record pattern recognition and solve results in the score table"
            - name: Weekly error review and mistake taxonomy
              description: |-
                ## Purpose
                The same five mistakes cause most failures: off-by-one bounds, unhandled empty input, wrong data structure, misread constraints and overflow. Tagging every failed or slow attempt with its cause and reviewing the counts weekly shows which habit to fix. Fixing one recurring mistake is worth more than twenty new problems.

                ## Milestones
                1. A list of mistake categories added to the problem log as a column.
                2. Every failed or slow attempt from the week tagged with a cause.
                3. A weekly count by category, with the top cause named.
                4. One personal checklist line written for each frequent cause, read before submitting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly reviews name a top mistake category, and a pre-submit checklist of at least four lines exists."
                cadence: rolling
              tasks:
                - "Add a mistake cause column to the problem log"
                - "Tag the week's failed and slow attempts and count them by cause @recurring(weekly:sun)"
                - "Write one pre-submit checklist line for the most common cause"
            - name: Weekly contest and upsolving
              description: |-
                ## Purpose
                Online judges run weekly contests with fresh problems, a clock and a ranking, which is the closest free thing to real pressure on unseen material. Entering regularly, then upsolving the problems you could not finish within two days, builds speed and exposes the topics you avoid. The rating is a by-product; the upsolve is where the learning is.

                ## Milestones
                1. One contest platform chosen and an account set up.
                2. Four contests entered in the first six weeks.
                3. Every unsolved contest problem upsolved within two days and logged.
                4. A note of solved count and rank kept for each contest.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four contests entered within six weeks, with every unsolved problem upsolved and logged within two days of each contest."
                cadence: rolling
              tasks:
                - "Choose a contest platform and find its weekly contest time"
                - "Enter the weekly online contest @recurring(weekly:sun)"
                - "Upsolve the contest problems you did not finish @recurring(weekly:tue)"
            - name: Monthly progress report from the log
              description: |-
                ## Purpose
                Feeling stuck is common even when the numbers say otherwise. A short monthly summary of problems solved, clean-solve rate by topic, median time on mediums and review success rate turns the log into a picture of what is improving and what is not. It is also the input to deciding next month's rotation.

                ## Milestones
                1. Five metrics chosen and defined: problems solved, clean-solve rate, median medium time, review success rate and hours studied.
                2. The first month's figures calculated from the log.
                3. A one-paragraph comment on the biggest change and the biggest gap.
                4. Next month's focus adjusted in the topic rotation.

                ## Notes
                Start from the **Metrics log** template. Clean-solve rate on reviews is the most honest single figure; raw problem counts reward rushing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly reports exist with the same five metrics and a written comment, and each led to a recorded rotation change or a decision to keep it."
                cadence: cyclic
              tasks:
                - "Define the five monthly metrics at the top of a metrics log"
                - "Calculate the month's figures from the problem log @recurring(monthly:28)"
                - "Write a one-paragraph comment and adjust next month's rotation"
            - name: Quarterly re-baseline and diagnostic repeat
              description: |-
                ## Purpose
                Every three months, repeat the skills matrix and the twenty-problem diagnostic set exactly as before. The comparison shows which topics have moved and which only feel familiar, and it is the right moment to re-order the rotation or change the goal. Without it, study plans drift toward the topics you already enjoy.

                ## Milestones
                1. The skills matrix re-rated without looking at the previous scores.
                2. The diagnostic set repeated under the same time limits.
                3. Old and new results set side by side by topic.
                4. The topic rotation and priority list updated from the comparison.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated comparison shows previous and current skills ratings and diagnostic scores by topic, with the rotation updated to match."
                cadence: cyclic
              tasks:
                - "Re-rate the skills matrix and repeat the diagnostic set @recurring(quarterly)"
                - "Set the old and new results side by side by topic"
                - "Re-order the topic rotation from the comparison"
            - name: Flashcards for invariants and templates
              description: |-
                ## Purpose
                Some things are worth memorising outright: the loop invariant for binary search, the shape of a monotonic stack, the relaxation step in Dijkstra's algorithm, the union by rank rule. A small flashcard deck reviewed for ten minutes a day keeps these at your fingertips so problem time goes on the problem. Keep cards short; one fact per card.

                ## Milestones
                1. A flashcard app or paper box set up with spaced repetition.
                2. Forty cards written covering invariants, recurrences and code templates from your topics.
                3. Ten minutes of review done on most days for a month.
                4. Cards you always get right retired and new ones added from each topic block.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A deck of at least forty cards exists and the app shows review on at least twenty days of the last month."
                cadence: rolling
              tasks:
                - "Set up a spaced repetition flashcard deck for algorithms"
                - "Write forty cards on invariants, recurrences and templates"
                - "Review the due algorithm flashcards @recurring(daily)"
                - "Add three cards at the end of each topic block"
            - name: Arrays, strings, two pointers and sliding windows
              description: |-
                ## Purpose
                A large share of screening questions are array or string problems that become linear once you see the right pointer pattern. Working through prefix sums, two pointers from both ends, fast and slow pointers and fixed and variable sliding windows gives you a toolkit for the most common question type. Getting these clean early pays off in every later topic.

                ## Milestones
                1. Prefix sums, two pointers and sliding windows each explained with a worked example in your notes.
                2. Ten problems solved per pattern and logged.
                3. In-place techniques practised: reversal, partitioning and rotation.
                4. Every solution analysed for time and space and the analysis checked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Thirty logged array and string problems cover all three patterns, with at least 70 percent solved without hints."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a worked example of a variable-size sliding window in your notes"
                - "Solve ten prefix sum and two pointer problems"
                - "Solve ten fixed and variable sliding window problems"
                - "Practise in-place reversal and partitioning on three problems"
            - name: Hashing, counting and lookup problems
              description: |-
                ## Purpose
                Hash maps turn quadratic searches into linear ones, and knowing when to trade memory for time is a core judgement. This project covers frequency counting, complement lookup, grouping by canonical keys and the cost of hashing itself, including collisions and worst cases. It also asks you to build a simple hash table so the average-case claims stop being magic.

                ## Milestones
                1. A hash table with chaining built and tested in the implementation repository.
                2. Fifteen problems solved across counting, complement lookup and grouping.
                3. Average and worst-case costs explained, with what causes the worst case.
                4. Three problems solved twice, once with a hash map and once without, and the trade-off noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tested hash table is committed and fifteen hashing problems are logged, three with a written comparison of two approaches."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build a hash table with chaining and resize, with tests"
                - "Solve fifteen counting, lookup and grouping problems"
                - "Write a short note on what causes worst-case hashing"
                - "Solve three problems with and without a hash map and compare"
            - name: Linked lists built from scratch
              description: |-
                ## Purpose
                Linked list questions test pointer discipline more than cleverness, and they punish anyone who has not drawn the nodes on paper. Building singly and doubly linked lists, then solving reversal, merge, cycle detection and the classic cache built from a list and a map, makes pointer manipulation routine. Sentinel nodes alone remove most edge-case bugs.

                ## Milestones
                1. Singly and doubly linked lists implemented with insert, delete and search, plus tests.
                2. Iterative and recursive reversal both written without notes.
                3. Cycle detection with fast and slow pointers explained and implemented.
                4. A least recently used cache built from a hash map and a doubly linked list.
                5. Ten linked list problems logged.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Tested singly and doubly linked lists and an LRU cache are committed, and ten linked list problems are logged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Implement a singly linked list with a sentinel node and tests"
                - "Write iterative and recursive reversal from memory"
                - "Build an LRU cache from a hash map and doubly linked list"
                - "Solve ten linked list problems and log each"
            - name: Stacks, queues and monotonic stacks
              description: |-
                ## Purpose
                Stacks quietly solve bracket matching, expression parsing, undo and every next greater element problem, while queues drive breadth-first search and scheduling. The monotonic stack and deque are the patterns most people miss, and they turn several quadratic problems linear. This project builds each from scratch and drills the patterns.

                ## Milestones
                1. Stack, queue and circular buffer implemented and tested.
                2. A monotonic stack template written and used on five next greater or smaller problems.
                3. A monotonic deque used for a sliding window maximum.
                4. Two expression evaluation problems solved with an explicit stack.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Tested stack, queue and circular buffer implementations are committed and at least eight stack or deque pattern problems are logged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Implement a stack, a queue and a circular buffer with tests"
                - "Write the monotonic stack template in your notes"
                - "Solve five next greater or smaller element problems"
                - "Solve sliding window maximum with a monotonic deque"
            - name: Binary search, including search on the answer
              description: |-
                ## Purpose
                Binary search is simple to describe and notoriously easy to get wrong at the boundaries. Learning one invariant-based template, then applying it to sorted arrays, rotated arrays and search over a range of possible answers, removes the off-by-one guesswork for good. Search on the answer is the version that surprises people in harder questions.

                ## Milestones
                1. One binary search template written with its loop invariant stated in a comment.
                2. Lower bound and upper bound variants implemented and tested on duplicates.
                3. Five problems on rotated or partially sorted arrays solved.
                4. Five search-on-the-answer problems solved, such as minimum capacity or smallest divisor.

                ## Notes
                Write the invariant first, then the loop. If you cannot say what is true of the left and right bounds at every step, the code will fail on a two-element input.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tested binary search template with stated invariant exists and ten logged problems include five search-on-the-answer problems."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write one binary search template with its invariant in a comment"
                - "Test lower and upper bound variants on arrays with duplicates"
                - "Solve five rotated or partially sorted array problems"
                - "Solve five search-on-the-answer problems"
            - name: Sorting algorithms implemented and compared
              description: |-
                ## Purpose
                Few questions ask you to write a sort, but many depend on knowing what sorting costs, which sorts are stable and when counting or bucket sort beats comparison sorting. Implementing insertion, merge, quick and heap sort, then timing them on different inputs, makes those facts something you have seen rather than recited. Quickselect comes almost free once quicksort works.

                ## Milestones
                1. Insertion, merge, quick and heap sort implemented with tests on empty, sorted, reversed and duplicate-heavy input.
                2. A timing table comparing them on four input shapes.
                3. Stability and in-place properties recorded for each.
                4. Counting sort and quickselect implemented and used on one problem each.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six tested sorting and selection algorithms are committed with a timing table and a note of stability and space for each."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Implement insertion, merge, quick and heap sort with shared tests"
                - "Time each sort on random, sorted, reversed and duplicate-heavy input"
                - "Record stability and extra space for each algorithm"
                - "Implement quickselect and use it on a kth largest problem"
            - name: Binary trees and binary search trees
              description: |-
                ## Purpose
                Trees are where recursion becomes unavoidable, and tree questions reward a clear habit: decide what each call returns and what it needs from its children. Covering the four traversals, iterative versions, height and diameter style problems, and binary search tree insert, delete and validation builds that habit. Lowest common ancestor and serialisation round off the core set.

                ## Milestones
                1. Pre-order, in-order, post-order and level-order traversals written both recursively and iteratively.
                2. A binary search tree with insert, search and delete implemented and tested.
                3. Twelve tree problems solved, including validation, diameter and lowest common ancestor.
                4. A one-line statement of what each recursive call returns written above every tree solution.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight traversal implementations and a tested binary search tree are committed, and twelve tree problems are logged."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write all four traversals recursively, then iteratively"
                - "Implement binary search tree insert, search and delete with tests"
                - "Solve twelve tree problems including diameter and lowest common ancestor"
                - "Write what each recursive call returns above every tree solution"
            - name: Heaps and priority queues
              description: |-
                ## Purpose
                Top k, merge k sorted lists, running medians and scheduling problems all reduce to a heap once you spot it. Building a binary heap from an array, including sift up, sift down and heapify in linear time, makes the library version understandable rather than mysterious. The two-heap pattern for medians is worth learning on its own.

                ## Milestones
                1. A binary min-heap implemented with push, pop, peek and linear-time heapify, plus tests.
                2. The reason heapify runs in linear time written in your notes.
                3. Eight heap problems solved, including top k, merge k lists and a running median.
                4. A note on how to get a max-heap from your language's library.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A tested binary heap is committed and eight heap problems are logged, including a two-heap running median."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Implement a binary min-heap with heapify and tests"
                - "Write a short explanation of why heapify is linear"
                - "Solve top k and merge k sorted lists with a heap"
                - "Solve running median with two heaps"
            - name: Graph representation, BFS and DFS
              description: |-
                ## Purpose
                Graph questions often hide inside grids, word ladders and dependency lists, and the first skill is seeing the graph at all. Building adjacency lists and matrices, then breadth-first and depth-first search with visited sets, connected components, cycle detection and grid traversal, covers most graph questions at medium level. Shortest path in an unweighted graph is just breadth-first search.

                ## Milestones
                1. Adjacency list and adjacency matrix builders written for directed and undirected edges.
                2. Iterative and recursive depth-first search and queue-based breadth-first search implemented.
                3. Cycle detection for directed and undirected graphs both working.
                4. Twelve graph problems solved, at least four on grids.
                5. Each problem's node and edge definition written before the code.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Tested BFS, DFS and both cycle detectors are committed and twelve graph problems are logged with written node and edge definitions."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write adjacency list builders for directed and undirected graphs"
                - "Implement BFS and iterative DFS with a visited set"
                - "Implement cycle detection for directed and undirected graphs"
                - "Solve twelve graph problems, four of them on grids"
            - name: Shortest paths and minimum spanning trees
              description: |-
                ## Purpose
                Once edges carry weights, breadth-first search is no longer enough. Dijkstra's algorithm with a heap, Bellman-Ford for negative edges, Floyd-Warshall for all pairs, and Kruskal and Prim for spanning trees form a small set that covers almost every weighted graph question. Knowing which applies, and why Dijkstra fails on negative edges, matters as much as the code.

                ## Milestones
                1. Dijkstra's algorithm implemented with a heap and tested on a graph with ties.
                2. Bellman-Ford implemented with negative cycle detection.
                3. Kruskal and Prim implemented and shown to give the same total weight.
                4. A one-page table of which algorithm to use given edge weights, graph size and query type.
                5. Eight weighted graph problems logged.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four tested weighted graph algorithms are committed with a choice table, and eight weighted graph problems are logged."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Implement Dijkstra's algorithm with a heap and tests"
                - "Implement Bellman-Ford with negative cycle detection"
                - "Implement Kruskal and Prim and compare their results"
                - "Write the shortest path algorithm choice table"
            - name: Union-find and topological ordering
              description: |-
                ## Purpose
                Two compact tools solve a surprising range of problems: union-find for connectivity that grows over time, and topological sorting for anything with dependencies, such as course schedules and build orders. Both are short to write and easy to get subtly wrong. Implementing them with path compression, union by rank and Kahn's algorithm makes them reliable.

                ## Milestones
                1. Union-find with path compression and union by rank implemented and tested.
                2. Topological sort written both with Kahn's algorithm and with depth-first search.
                3. Cycle detection in a dependency graph handled and reported.
                4. Eight problems solved across the two tools and logged.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Tested union-find and two topological sort implementations are committed, and eight related problems are logged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Implement union-find with path compression and union by rank"
                - "Implement topological sort with Kahn's algorithm"
                - "Implement topological sort with depth-first search and cycle detection"
                - "Solve four union-find and four dependency ordering problems"
            - name: Recursion and backtracking
              description: |-
                ## Purpose
                Subsets, permutations, combinations, N-queens and word search all follow one backtracking shape: choose, explore, undo. Learning that shape, plus pruning and the cost of exploring a full search tree, turns a feared topic into a fill-in-the-template exercise. It is also the bridge to dynamic programming, which starts as backtracking with memory.

                ## Milestones
                1. A backtracking template written with the choose, explore and undo steps labelled.
                2. Subsets, permutations and combinations each generated with and without duplicates in the input.
                3. Two constraint problems solved, such as N-queens and a sudoku solver.
                4. The size of the search tree estimated for each problem before coding.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A labelled backtracking template exists and ten backtracking problems are logged, each with a written search tree estimate."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the backtracking template with its three steps labelled"
                - "Generate subsets, permutations and combinations with duplicates handled"
                - "Solve N-queens and one other constraint problem"
                - "Estimate the search tree size before coding each problem"
            - name: Dynamic programming by pattern
              description: |-
                ## Purpose
                Dynamic programming is the topic most people rate lowest and the one that rewards structure most. Working through it pattern by pattern, one-dimensional sequences, grids, knapsack, longest common subsequence and interval problems, and always defining the state and recurrence in words before code, makes it learnable. Write the memoised version first, then the table, then the space-saving version.

                ## Milestones
                1. A state, recurrence, base case and answer location written in words for every DP problem attempted.
                2. Five problems solved in each of five patterns: sequences, grids, knapsack, subsequences and intervals.
                3. At least five problems converted from memoised recursion to a bottom-up table.
                4. Three tables reduced to one or two rows of storage.
                5. A one-page pattern sheet with a signature problem for each pattern.

                ## Notes
                If you cannot write the state in one plain sentence, you are not ready to write the code. Most DP bugs are a fuzzy state definition.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty-five DP problems are logged across five patterns, each with a written state and recurrence, and a pattern sheet is saved."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the state and recurrence in words for climbing stairs and house robber"
                - "Solve five problems in each of the five DP patterns"
                - "Convert five memoised solutions to bottom-up tables"
                - "Reduce three tables to one or two rows of storage"
                - "Write a pattern sheet with one signature problem per pattern"
            - name: Greedy algorithms and interval problems
              description: |-
                ## Purpose
                Greedy solutions are short and fast, and wrong more often than they look. Learning the common greedy families, interval scheduling, merging intervals, jump games and gas station style problems, alongside the exchange argument that proves a greedy choice is safe, teaches you when to trust it. Each project problem should end with either a proof sketch or a counterexample.

                ## Milestones
                1. Interval sorting, merging, insertion and meeting room problems solved.
                2. Exchange argument written out for interval scheduling.
                3. Three problems where greedy fails identified, with a counterexample for each.
                4. Ten greedy problems logged, each with a proof sketch or counterexample.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten greedy and interval problems are logged with proof sketches, and three greedy failures are documented with counterexamples."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Solve merge, insert and meeting room interval problems"
                - "Write the exchange argument for interval scheduling"
                - "Find three problems where a greedy choice fails and write the counterexample"
                - "Log each greedy problem with its proof sketch"
            - name: Bit manipulation essentials
              description: |-
                ## Purpose
                Bit tricks come from a short list that appears again and again: checking and setting bits, counting set bits, isolating the lowest set bit and using XOR to cancel pairs. Learning them in one focused week, including how your language handles negative numbers and shifts, removes a whole category of puzzle questions. Bitmasks also underpin subset enumeration later in dynamic programming.

                ## Milestones
                1. A sheet of the core bit operations with a worked example each.
                2. Your language's behaviour for negative numbers, shifts and integer width tested and noted.
                3. Eight bit manipulation problems solved, including single number and counting bits.
                4. Subsets of a small set enumerated with a bitmask loop.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A tested bit operations sheet exists, language shift behaviour is noted, and eight bit problems are logged."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the core bit operations with one example each"
                - "Test how your language shifts and stores negative integers"
                - "Solve eight bit manipulation problems"
                - "Enumerate every subset of a five-element set with a bitmask"
            - name: Rewriting your slowest accepted solutions
              description: |-
                ## Purpose
                An accepted solution that took 50 minutes or used a brute force the judge happened to allow is a weakness wearing a tick. Going back through the log for slow or barely accepted solutions, and rewriting them cleanly at the intended complexity, raises your real level faster than new problems. One rewrite a week is enough.

                ## Milestones
                1. A filtered list of accepted problems that took over 40 minutes or ran near the time limit.
                2. One rewrite done each week, from a blank editor, at the intended complexity.
                3. Old and new times and complexities recorded side by side.
                4. Ten rewrites completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten rewrites are logged with before and after times and complexities, all at or better than the intended complexity."
                cadence: rolling
              tasks:
                - "Filter the log for accepted problems that took over 40 minutes"
                - "Rewrite one slow accepted solution from a blank editor @recurring(weekly:wed)"
                - "Record old and new time and complexity side by side"
            - name: Stress testing against a brute force
              description: |-
                ## Purpose
                When a solution fails on a hidden test, guessing the edge case wastes an hour. Writing a tiny brute-force solution, a random input generator and a loop that compares the two finds the failing input in seconds. It is a standard competitive programming habit that also makes you a better tester at work.

                ## Milestones
                1. A reusable stress test script that takes a fast solution, a brute force and a generator.
                2. Random generators written for arrays, strings, trees and graphs.
                3. The script used to find the bug in three previously failed solutions.
                4. The smallest failing input for each bug recorded in the log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stress test script with four input generators is committed and has found the failing input for three logged bugs."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a stress test script that compares two solutions on random input"
                - "Add random generators for arrays, strings, trees and graphs"
                - "Use the script on three solutions that failed hidden tests"
                - "Record the smallest failing input for each bug"
            - name: Proving correctness with loop invariants
              description: |-
                ## Purpose
                Being able to say why an algorithm is correct, not just that it passed, separates real understanding from pattern matching. Writing a loop invariant or an inductive argument for ten of your own solutions, from binary search to Dijkstra's algorithm, sharpens both your reasoning and your code. Students will recognise this from coursework; engineers usually find it the fastest route to fewer bugs.

                ## Milestones
                1. Ten solutions chosen across at least five topics.
                2. A loop invariant or induction argument written for each, covering initialisation, maintenance and termination.
                3. One solution found to be wrong or fragile while writing its proof, and fixed.
                4. The arguments saved beside the code in the repository.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Ten committed solutions each have a written correctness argument covering initialisation, maintenance and termination."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose ten of your solutions across five topics"
                - "Write the invariant for your binary search template first"
                - "Write correctness arguments for the remaining nine solutions"
                - "Save each argument as a comment beside the code"
            - name: Weak topic remediation plan
              description: |-
                ## Purpose
                Every baseline throws up one topic that refuses to improve, often dynamic programming or graphs. A short, written remediation plan for that topic, with a different explanation source, easier problems than feels comfortable and a dated re-test, breaks the loop of attempting hard problems and failing them. Run it until the topic moves up a full rating.

                ## Milestones
                1. The weakest topic named with its current rating and diagnostic result.
                2. A different explanation source chosen from the one that has not worked.
                3. Fifteen easy problems on the topic solved before any medium.
                4. A re-test of the topic's diagnostic problems held on a fixed date.
                5. The topic's rating raised by at least one point.

                ## Notes
                Start from the **Remediation plan** template. Dropping to easy problems is not a step back; failing mediums repeatedly teaches very little.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written remediation plan for one topic is completed, with fifteen easy problems logged and a re-test showing a one-point rating gain."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Name the weakest topic with its current rating and result"
                - "Pick a new explanation source for that topic"
                - "Solve fifteen easy problems on the topic before any medium"
                - "Check progress on the remediation topic and adjust the plan @recurring(monthly:21)"
            - name: Curated problem list or topic-first practice
              description: |-
                ## Purpose
                Curated lists of 75 to 150 classic problems promise coverage in a fixed number of steps, while topic-first practice from your own rotation builds depth where you are weakest. Deciding which drives your practice, or how they combine, saves months of half-finishing both. Base the choice on your deadline and baseline, not on what a forum recommends.

                ## Milestones
                1. Two or three published curated lists compared on size, topic spread and overlap with your weak topics.
                2. Weeks available until your goal date counted.
                3. A decision recorded: curated list, topic rotation, or the list worked through in rotation order.
                4. The chosen list's problems added to the problem log as planned rows.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on curated list versus topic-first practice exists, with reasons tied to the goal date, and planned rows added to the log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare two or three curated problem lists on size and topic spread"
                - "Count the weeks left until your goal date"
                - "Record the decision and the reason in one paragraph"
                - "Add the chosen problems to the log as planned rows"
            - name: Timed graphs and trees exam
              description: |-
                ## Purpose
                Graphs and trees are the topics where knowing the material and producing it under time diverge most. Setting yourself a two-hour exam of four unseen problems, two on trees and two on graphs, and marking it strictly, shows whether the topic projects have really landed. Treat it like a university paper: no notes, no hints, no extra time.

                ## Milestones
                1. Four unseen problems chosen by someone else or at random from tagged lists.
                2. The exam sat in one two-hour block with no notes.
                3. Each answer marked for correctness, complexity and code clarity.
                4. Gaps found fed back into the topic rotation.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two-hour, four-problem graphs and trees exam is sat on a set date, marked, and its results logged with follow-up actions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask a friend or the agent to choose four unseen tree and graph problems"
                - "Book a quiet two-hour block in your calendar for the exam"
                - "Sit the exam with no notes and mark each answer"
                - "Add the gaps found to the topic rotation"
            - name: First rated contest result
              description: |-
                ## Purpose
                Entering your first rated contest is nerve-racking and teaches more about speed and reading carefully than weeks of untimed practice. Preparing for it, a practice virtual contest, a clear plan for which problems to try first and a calm set-up, makes the first result a fair one. Whatever the rank, the upsolve afterwards is the real outcome.

                ## Milestones
                1. One virtual contest done under real timing as a rehearsal.
                2. A contest plan written: read all problems first, solve in order of confidence, stop debugging after 15 minutes.
                3. The rated contest entered on its scheduled date.
                4. Results logged and every unsolved problem upsolved within a week.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A rated contest is entered on a recorded date after one virtual rehearsal, and all unsolved problems are upsolved within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the next rated contest at your level and note the date"
                - "Do one virtual contest under real timing"
                - "Write your three-line contest plan"
                - "Upsolve every problem you missed within a week"
            - name: Study group problem marathon day
              description: |-
                ## Purpose
                A single day where a small group works through a shared problem set, then compares approaches, exposes you to solutions you would never have found alone. Planned well, with a set, a timetable and a review session at the end, it is a fun and intense push on a topic everyone finds hard. It works in person or on a video call.

                ## Milestones
                1. Three to six people and a date agreed.
                2. A problem set of eight to twelve problems on one or two topics chosen and shared in advance.
                3. The day run with timed solving blocks and a comparison session after each.
                4. Each person's best alternative approach written up and shared.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A marathon day with at least three people is held on a set date, and written alternative approaches are shared afterwards."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Invite three to six people and agree a date"
                - "Choose eight to twelve problems on one or two topics"
                - "Draw up the day's timetable of solving and comparison blocks"
                - "Collect and share everyone's best alternative approach"
            - name: Final two-week refresh before the date
              description: |-
                ## Purpose
                The last fortnight before an interview, exam or test is for consolidation, not new topics. A planned refresh, re-solving signature problems for every pattern, reviewing the mistake checklist and the flashcard deck, and tapering the volume, lets you arrive sharp rather than tired. Plan it now so it is not improvised in a panic.

                ## Milestones
                1. One signature problem per pattern listed from the pattern sheets.
                2. The refresh days laid out with two to four re-solves a day.
                3. The mistake checklist and invariant flashcards reviewed in full.
                4. The last two days kept light, with no new problems.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A day-by-day refresh plan of signature problems is completed in the two weeks before the target date, with no new topics started."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "List one signature problem for every pattern you have studied"
                - "Lay out the refresh fortnight at two to four re-solves a day"
                - "Review the full mistake checklist and flashcard deck"
                - "Keep the last two days to light review only"
            - name: Student plan alongside an algorithms module
              description: |-
                ## Purpose
                For a student taking an algorithms or data structures module, coursework, problem sheets and an end-of-term exam already set the timetable. Mapping the module's lecture order to this area's topic projects, and using practice problems to reinforce each week's lectures, means one effort serves both the grade and later interviews. The exam proofs and the practice code then support each other.

                ## Milestones
                1. The module's lecture schedule and assessment dates copied into your calendar.
                2. Each lecture week matched to a topic project in this area.
                3. Three practice problems solved each week on that week's lecture topic.
                4. Past exam papers obtained and attempted before the exam.
                5. Assignment deadlines protected from extra practice in their final week.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The module schedule is mapped to topic projects, three problems are logged for each lecture week, and past papers are attempted before the exam."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Copy the module's lecture schedule and assessment dates into your calendar"
                - "Match each lecture week to a topic project in this area"
                - "Solve three problems on each week's lecture topic"
                - "Ask the module leader where past exam papers are kept"
            - name: Working engineer plan in 45-minute slots
              description: |-
                ## Purpose
                Engineers with a full-time job rarely get long study sessions, and evenings after a hard sprint are poor for new topics. A plan built from 45-minute slots, before work, at lunch or early evening, with new topics on the freshest slot and review in the tired ones, keeps progress steady through release weeks. Expect some weeks to drop to review only, and plan for that.

                ## Milestones
                1. Three or four 45-minute slots a week identified and protected in your calendar.
                2. New-topic work assigned to the slot when you are freshest.
                3. A minimum week defined for release crunches: two review sessions only.
                4. Eight consecutive weeks completed with at least the minimum week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks show at least the defined minimum of study slots, with new topics logged in the freshest slot."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Find three or four 45-minute slots in your working week"
                - "Assign new topics to your freshest slot and review to the rest"
                - "Write down your minimum week for release crunches"
                - "Hold the two lunchtime problem slots @recurring(weekly:tue,thu)"
            - name: Career changer route without a CS degree
              description: |-
                ## Purpose
                Bootcamp graduates and self-taught developers often write good production code but missed the theory a computer science degree drills: recursion, proofs of complexity and the less common structures. A route that adds the missing theory in a sensible order, with extra time on recursion and trees before graphs and dynamic programming, closes the gap without repeating a whole degree. It works best paired with the reference text chosen earlier.

                ## Milestones
                1. The gaps compared with a typical first and second year algorithms syllabus listed.
                2. Recursion and complexity analysis completed before any graph or DP project starts.
                3. Each topic project extended by a week of easier problems.
                4. One structure a fortnight implemented from scratch in the repository.
                5. A re-baseline showing every core topic at 2 or above.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A written gap list exists, recursion and complexity are completed first, and a re-baseline shows every core topic rated 2 or higher."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Compare what you know with a typical university algorithms syllabus"
                - "List the theory gaps in the order you will close them"
                - "Finish recursion and complexity work before starting graphs"
                - "Implement one data structure from scratch every fortnight"
            - name: Practice plan for parents with short windows
              description: |-
                ## Purpose
                Parents of young children study in fragments: a nap, a commute, the half hour after bedtime, often interrupted. A plan built on 20-minute units that can stop and resume, reviews and easy problems on a phone, and one longer weekend block for new topics, keeps progress going without pretending you have quiet evenings. Interruptions are part of the plan, not a failure of it.

                ## Milestones
                1. Two or three reliable 20-minute windows a day identified.
                2. Review problems and flashcards set up to work on a phone.
                3. One longer weekend block agreed with your partner or family for new topics.
                4. A stop-and-resume note habit: one line on where you were before every interruption.
                5. Six consecutive weeks logged with at least four short sessions each.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive weeks show at least four short sessions and one weekend block each, recorded in the problem log."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Note two or three reliable 20-minute windows in your day"
                - "Set up review problems and flashcards on your phone"
                - "Agree one weekend study block with your partner or family"
                - "Take the agreed weekend block for a new topic @recurring(weekly:sat)"
            - name: Running a weekly peer problem group
              description: |-
                ## Purpose
                Leading a small weekly group for classmates or colleagues is one of the best ways to learn the material yourself, because explaining a solution exposes every gap. This is for the student society organiser, the senior engineer helping juniors or a tutor running sessions. A fixed set each week, a short presentation rota and a shared notes page keep it running after the first enthusiastic month.

                ## Milestones
                1. Four to eight members, a weekly time and a place or call link agreed.
                2. A topic schedule for eight weeks shared with the group.
                3. A rota where one member presents a solution each week.
                4. A shared notes page holding every week's problems and approaches.
                5. Attendance tracked and the format adjusted after week four.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Eight weekly sessions are held with a shared notes page holding every week's problems and a presenter named for each."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Invite four to eight people and agree a weekly time"
                - "Draw up an eight-week topic schedule"
                - "Set up the presenter rota and a shared notes page"
                - "Post the coming session's three problems to the group @recurring(weekly:thu)"
            - name: Segment trees and Fenwick trees
              description: |-
                ## Purpose
                Range sum, range minimum and update-and-query problems are where ordinary prefix sums stop working. Fenwick trees give compact prefix queries with updates, and segment trees handle any associative operation and, with lazy propagation, range updates. These matter for competitive programming and some senior or specialist roles, and they are excellent recursion practice for everyone else.

                ## Milestones
                1. A Fenwick tree implemented with point update and prefix query, and tested against a brute force.
                2. A segment tree implemented for range sum and range minimum.
                3. Lazy propagation added for range updates and tested.
                4. Six range query problems solved and logged.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Stress-tested Fenwick and segment tree implementations, including lazy propagation, are committed and six range query problems are logged."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Implement a Fenwick tree and stress test it against a brute force"
                - "Implement a segment tree for range sum and range minimum"
                - "Add lazy propagation for range updates"
                - "Solve six range query problems"
            - name: String algorithms and tries
              description: |-
                ## Purpose
                Pattern matching, autocomplete and many hard string problems rely on a handful of specialist tools: tries, KMP prefix functions, the Z algorithm and rolling hashes. Each is short but subtle, and seeing why the naive approach is quadratic is half the lesson. Pick this up once the core topics are rated 3 or above.

                ## Milestones
                1. A trie with insert, search and prefix search implemented and tested.
                2. The KMP prefix function written and explained with a worked example.
                3. A rolling hash substring search implemented, with the collision risk noted.
                4. Eight string algorithm problems solved and logged.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Tested trie, KMP and rolling hash implementations are committed and eight string algorithm problems are logged."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Implement a trie with prefix search and tests"
                - "Write the KMP prefix function with a worked example in comments"
                - "Implement rolling hash substring search and note collision risk"
                - "Solve eight string algorithm problems"
            - name: Advanced graphs, flows and strongly connected components
              description: |-
                ## Purpose
                Beyond shortest paths lie the graph algorithms that competitive programmers and specialist roles expect: strongly connected components, bridges and articulation points, maximum flow and bipartite matching. They are rarely asked in general interviews, so tackle them only when the depth target calls for them. Implementing each once, with a clear write-up, is far more useful than memorising code you cannot explain.

                ## Milestones
                1. Strongly connected components found with Tarjan's or Kosaraju's algorithm and tested.
                2. Bridges and articulation points found on a test graph.
                3. A maximum flow algorithm implemented and used for bipartite matching.
                4. A one-page write-up explaining each algorithm in plain words.
                5. Six advanced graph problems logged.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Tested SCC, bridge and maximum flow implementations are committed with a plain-words write-up, and six advanced graph problems are logged."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Check your depth target says advanced graphs are in scope"
                - "Implement strongly connected components and test on a known graph"
                - "Implement bridges and articulation point detection"
                - "Implement maximum flow and solve one bipartite matching problem"
                - "Write a plain-words explanation of each algorithm"
---

# Data Structures and Algorithms Practice

This area is for engineers and students rebuilding real fluency in data structures and algorithms, whether for interviews, a university module or simply to stop guessing at complexity. It starts with foundations (a problem log, a topic baseline, a complexity refresher, a reference book, a tested implementation repository and a timetable), then the review and practice machinery, a run of topic projects from arrays and hashing through trees, graphs, backtracking and dynamic programming, improvements such as stress testing and proofs of correctness, dated checkpoints and contests, plans for students, working engineers, career changers, parents and study groups, and specialist work on range-query trees, string algorithms and advanced graphs.

The rhythm is one problem a day, two short spaced-review sessions and a topic block each week, a weekly error review, contest and upsolve, a monthly mixed checkpoint and progress report from the log, and a quarterly re-baseline of every topic. The Skills matrix, Reading queue, Habit tracker, Metrics log and Remediation plan templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
