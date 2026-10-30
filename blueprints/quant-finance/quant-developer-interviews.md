---
id: quant-finance.quant-developer-interviews
name: Quant Developer Interviews
description: "A dated preparation plan for quant developer roles: a skills baseline, daily coding and weekly C++ drills, peer mocks, systems and low-latency design practice, take-home delivery, onsite loops and offer week."
category: business
version: 1.0.0
tags: [quant-finance, quant-developer-interviews, student, engineer, cpp, python, coding-interviews, low-latency]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - resume
    - reading-queue
    - habit-tracker
    - meeting-notes
    - remediation-plan
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Quant Developer Interviews
          description: "Preparing for quant developer interviews: C++ and Python depth, data structures, systems and concurrency questions, low-latency design and take-home tasks."
          projects:
            - name: Quant developer role map and target list
              description: |-
                ## Purpose
                Quant developer is a label covering very different jobs: low-latency C++ on a trading system, Python research platforms for quants, data and pipeline engineering, risk and pricing libraries at a bank. Mapping which of these you are aiming at, and listing 15 to 30 real openings by type, decides what you study, because a market data handler role and a research tooling role are not prepared for the same way.

                ## Milestones
                1. Four or five role types written down, each with the languages, topics and round formats its adverts mention.
                2. A target list of 15 to 30 openings, each tagged with its role type and application route.
                3. One primary and one secondary role type chosen, with a sentence on why.
                4. The topics that appear in most adverts for your primary type highlighted for the study plan.

                ## Notes
                Choosing between firm types on pay and culture belongs to a separate project; this one is about what the interviews will ask of you.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written target list of at least 15 openings tagged by role type, with a primary and a secondary type chosen and justified."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read ten current quant developer adverts and note the languages each names"
                - "Group the adverts into four or five role types with their common topics"
                - "Build a target list of openings tagged by role type and application route"
                - "Choose a primary and secondary role type and record the reason"
                - "Refresh the target list with new openings and closed roles @recurring(quarterly)"
            - name: Timed skills baseline across C++, Python and systems
              description: |-
                ## Purpose
                Before planning months of preparation, find out where you actually stand under interview conditions, not where you feel you stand. Two timed coding problems, a set of C++ and Python language questions, and ten operating system and networking questions, all marked honestly, give a baseline you can re-test against and stop you polishing what you already know.

                ## Milestones
                1. Two medium coding problems solved against a 40-minute timer each, with time taken and bugs noted.
                2. Twenty language questions answered from memory, split between C++ and Python, and marked against references.
                3. Ten systems questions answered aloud and scored as confident, shaky or unknown.
                4. A skills matrix scoring every topic from 1 to 5, with the three weakest marked for remediation.

                ## Notes
                Start from the **Skills matrix** template. Mark as an interviewer would: a correct answer you could not explain counts as shaky.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated skills matrix scoring every interview topic from 1 to 5, built from timed attempts, with the three weakest topics named."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set a 40-minute timer and solve one medium array or hash map problem"
                - "Answer twenty C++ and Python language questions without looking anything up"
                - "Explain ten operating system and networking questions aloud and score each"
                - "Fill in the skills matrix and mark the three weakest topics"
            - name: Dated interview pipeline and preparation calendar
              description: |-
                ## Purpose
                Trading firms and banks recruit on their own clocks: graduate and internship windows open months ahead, and experienced hires move fast once a recruiter calls. A calendar that works back from application deadlines, with study blocks, mock dates and the order you will apply in, keeps preparation ahead of the first online assessment instead of behind it.

                ## Milestones
                1. Every target opening entered with its application date, or an estimated window where none is published.
                2. Study blocks scheduled for each weak topic before the first expected online assessment.
                3. Applications ordered so practice firms come before the firms you want most.
                4. A pipeline tracker with stages from applied to offer and a column for the next action.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar and pipeline tracker exist with every target opening, its date and a next action, and study blocks booked before the first assessment."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List application opening dates for every firm on the target list"
                - "Block study time for each weak topic in the weeks before the first test"
                - "Set up a pipeline tracker with stages and a next action column"
                - "Move the calendar forward and rebook any missed study blocks @recurring(monthly:15)"
            - name: Quant developer CV built on engineering evidence
              description: |-
                ## Purpose
                Recruiters at trading firms scan for proof of systems depth: latency numbers, throughput, memory saved, languages at production level, ownership of something that ran. Rewriting the CV around three or four measurable engineering results, with the C++ and Python level stated honestly, earns the first call and gives interviewers good questions to ask.

                ## Milestones
                1. Every bullet rewritten as an action and a measurable result, such as a latency, throughput or failure rate.
                2. Languages and tools listed with an honest level, without padding the list.
                3. One page for students and graduates, two at most for experienced engineers.
                4. Each claim on the CV checked against a story you can tell for five minutes.

                ## Notes
                Start from the **Resume** template. Anything on the CV is fair game, so remove a language you could not answer ten questions on.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A CV of one or two pages in which every project bullet states a measurable engineering result and every listed skill survives a five-minute question."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect numbers for your three strongest engineering projects"
                - "Rewrite each bullet as an action plus a measured result"
                - "Cut any language or tool you could not defend for five minutes"
                - "Ask an engineer in the industry to read the CV and mark weak lines"
                - "Add new results and remove stale lines from the CV @recurring(quarterly)"
            - name: Interview-style coding environment without autocomplete
              description: |-
                ## Purpose
                Interviewers often watch you write C++ in a plain shared editor or a browser pad with no completion, no linting and sometimes no compiler. Practising in the same conditions, with a separate local setup that has sanitizers and warnings for checking afterwards, removes the shock of losing your tools on the day.

                ## Milestones
                1. A plain editor or online pad chosen for practice with completion switched off.
                2. A local build with warnings at their strictest and address and undefined behaviour sanitizers enabled for checking solutions.
                3. An online compiler explorer bookmarked for checking generated code and quick experiments.
                4. Five practice problems written in the plain editor, then compiled and checked locally.

                ## Notes
                Write the include lines and the main function from memory at least once. Candidates lose minutes on boilerplate they always let the IDE generate.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A plain practice editor and a sanitizer-enabled local build are both in use, with five problems written in the first and checked in the second."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Switch off autocomplete in a plain editor kept only for practice"
                - "Create a local build script with strict warnings and sanitizers turned on"
                - "Write five solutions in the plain editor before compiling any of them"
                - "Note every compile error the sanitizer build caught that you missed"
            - name: Question bank and error log
              description: |-
                ## Purpose
                Every question you get wrong in practice is cheaper than the same question wrong in a real round, but only if you write it down. A single bank holding the problems you have attempted, tagged by topic, with an error log saying exactly what went wrong, turns scattered practice into a record you can review and re-test.

                ## Milestones
                1. One question bank with columns for source, topic, date, time taken and result.
                2. An error log entry format: what was asked, what you did, the correct approach and the root cause.
                3. Root causes grouped into a short list, such as off-by-one, wrong data structure or language gap.
                4. At least 30 attempted questions entered from your practice so far.

                ## Notes
                Keep your own words and public problems only. Do not record or pass on questions from interviews you sat under a confidentiality agreement.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A question bank holds at least 30 tagged attempts, and every failed attempt has an error log entry with a root cause from the fixed list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the question bank with source, topic, time and result columns"
                - "Write the error log entry format with a root cause field"
                - "Enter your last 30 practice attempts with their outcomes"
                - "Group the root causes into a list of no more than eight"
            - name: Introduction and five engineering stories
              description: |-
                ## Purpose
                The first five minutes of most rounds are 'tell me about yourself' and 'walk me through a project', and engineers who ramble here lose time for the technical part. A 90-second introduction and five prepared stories, each with the hardest technical decision and a number, let you answer any project question with depth and stop on time.

                ## Milestones
                1. A 90-second introduction that ends with why quant development and why now.
                2. Five stories chosen covering performance, a hard bug, a design trade-off, a failure and working with users.
                3. Each story written with context, your decision, the alternative you rejected and the measured result.
                4. Every story told aloud to a timer and cut to under three minutes.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written 90-second introduction and five stories, each under three minutes aloud and each including a rejected alternative and a number."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a 90-second introduction and time it aloud"
                - "Pick five stories that cover performance, a bug, design, failure and users"
                - "Write the rejected alternative and the measured result for each story"
                - "Record yourself telling two stories and cut anything over three minutes"
            - name: Quant developer reading list
              description: |-
                ## Purpose
                Interview preparation sprawls without a short list: there are hundreds of C++ books and blog posts, and only a handful match what these rounds probe. A reading queue of about ten sources, covering modern C++, concurrency, computer systems, networking, Python internals and an introduction to market structure, keeps reading aimed at the interview.

                ## Milestones
                1. About ten sources chosen, at most two per topic, each linked to a skills matrix row.
                2. Each source given the chapters that matter for interviews rather than the whole book.
                3. Reading order set to match the weakest topics from the baseline.
                4. Notes for each finished source kept as questions you can answer, not summaries.

                ## Notes
                Start from the **Reading queue** template. A good default mix is one modern C++ book, one concurrency book, one computer systems text, a networking text and a short market structure primer.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reading queue of about ten sources exists, each tied to a skills matrix topic with the chapters to read and an order set by weakness."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List candidate sources for each topic on the skills matrix"
                - "Cut the list to about ten sources with at most two per topic"
                - "Mark the chapters in each source that interviewers actually probe"
                - "Order the queue so the weakest topics are read first"
            - name: Referral and recruiter contact map
              description: |-
                ## Purpose
                Referrals from engineers already at a firm move CVs past the first screen far more often than cold applications, and specialist recruiters know which teams are hiring before adverts appear. A simple map of who you know at each target firm, and which recruiters cover quant technology, makes outreach deliberate instead of awkward.

                ## Milestones
                1. Every target firm listed with any alumni, former colleagues or contacts there.
                2. Two or three specialist recruiters for quant technology identified and contacted.
                3. A short, specific message drafted for asking a contact about their team.
                4. Each contact logged with the date reached and what they said.

                ## Notes
                Ask contacts about the team and the work, not for a referral in the first message. People refer candidates who have shown real interest.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A contact map covers every target firm, at least two recruiters have been spoken to, and every outreach is logged with a date and outcome."
                cadence: rolling
              tasks:
                - "Search your alumni network and past colleagues for people at target firms"
                - "Ask the agent to draft a short note asking a contact about their team"
                - "Speak to two recruiters who place quant technology roles"
                - "Send one thoughtful note to a new contact and log it @recurring(monthly:8)"
            - name: Daily timed coding problem
              description: |-
                ## Purpose
                Speed and calm on a 30 to 45 minute coding problem come from volume under a timer, not from reading solutions. One problem a day, timed, in the language of the role, with every miss written into the error log, builds the pattern recognition online assessments reward within a few weeks.

                ## Milestones
                1. A daily slot of about 45 minutes fixed in the calendar.
                2. A problem list sorted by topic so each week covers arrays, hashing, trees, graphs, heaps and intervals.
                3. Each attempt logged in the question bank with time taken.
                4. Median solve time for medium problems tracked weekly and falling.

                ## Notes
                Start from the **Habit tracker** template. If you cannot solve it in the time, read the approach, close it and write the solution from memory the next day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least five timed problems a week are logged for eight weeks, with median medium solve time recorded each week."
                cadence: rolling
              tasks:
                - "Pick a fixed 45-minute daily slot and put it in the calendar"
                - "Sort a problem list by topic for the next four weeks"
                - "Solve one timed coding problem and log the result @recurring(daily)"
                - "Re-solve from memory any problem you could not finish yesterday"
            - name: Weekly C++ language drill
              description: |-
                ## Purpose
                C++ rounds at trading firms go below syntax: what a virtual call costs, when a move constructor runs, why a vector reallocation invalidates iterators, what the compiler does with an inline function. A weekly set of ten short language questions, answered from memory and then checked with a compiler, keeps those details sharp between topic projects.

                ## Milestones
                1. A rotating drill list covering object lifetime, value categories, templates, the standard library and undefined behaviour.
                2. Ten questions answered from memory each week, then checked against the standard or a compiler.
                3. Every wrong answer added to the error log with a two-line explanation.
                4. Drill accuracy tracked so weak themes get more questions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten C++ drill questions are answered and checked every week for at least eight weeks, with accuracy recorded by theme."
                cadence: rolling
              tasks:
                - "Write a rotating list of 40 short C++ language questions by theme"
                - "Answer ten drill questions from memory then check each in a compiler @recurring(weekly:tue)"
                - "Add every wrong answer to the error log with an explanation"
                - "Shift next week's questions towards the theme with lowest accuracy"
            - name: Weekly peer mock interview
              description: |-
                ## Purpose
                Solving a problem alone is a different skill from solving it while someone watches and asks why. A weekly 60-minute mock with a peer, taking turns as interviewer and candidate, with written feedback on communication as well as correctness, is the closest practice to the real thing and costs nothing.

                ## Milestones
                1. One or two practice partners at a similar level agreed, with a standing weekly time.
                2. A mock format fixed: 45 minutes candidate, 15 minutes feedback, roles swapped each week.
                3. A feedback sheet scoring problem understanding, approach, code, testing and communication.
                4. Eight mocks completed with feedback filed against the same five scores.

                ## Notes
                Being the interviewer teaches as much as being the candidate: you see how much clarifying questions and narrated thinking help.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly peer mocks are completed within ten weeks, each with a filed feedback sheet scoring the same five areas."
                cadence: rolling
              tasks:
                - "Ask two people at a similar level to swap weekly mocks"
                - "Write a one-page feedback sheet with five scored areas"
                - "Run a 60-minute peer mock and file the feedback sheet @recurring(weekly:sat)"
                - "Compare the last four sheets and choose one habit to change"
            - name: Weekly error log review and re-test
              description: |-
                ## Purpose
                Mistakes written down and never revisited come back on the day. A weekly 30-minute review that re-attempts three logged failures from a week or more ago, without notes, shows whether the fix stuck and moves solved items out of the log.

                ## Milestones
                1. A weekly slot of 30 minutes fixed for the review.
                2. Three logged failures re-attempted cold each week.
                3. Each re-test marked passed or failed, with passed items moved to a solved list after two passes.
                4. Root cause counts updated so the most common one is visible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three error log items are re-tested every week for eight weeks, and the count of open items is recorded weekly."
                cadence: rolling
              tasks:
                - "Mark each open error log item with the date it was last tried"
                - "Re-attempt three error log items cold and mark each result @recurring(weekly:sun)"
                - "Move items that passed twice to the solved list"
                - "Tally root causes and note the most common one this month"
            - name: Monday pipeline review
              description: |-
                ## Purpose
                Applications stall quietly: an online assessment link expires, a recruiter waits for availability, a thank-you note never goes. Ten minutes every Monday looking at every live application, its stage and its next action keeps the pipeline moving and stops deadlines arriving unannounced.

                ## Milestones
                1. Every live application visible in the tracker with stage and next action.
                2. Assessment links and their expiry dates recorded the day they arrive.
                3. Stale applications with no reply after three weeks given one polite follow-up.
                4. Closed applications marked with the stage reached and any feedback received.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pipeline tracker is reviewed every Monday, and no assessment link or recruiter request goes unanswered beyond two working days."
                cadence: rolling
              tasks:
                - "Add an expiry date column for assessment links to the tracker"
                - "Review every live application and set its next action @recurring(weekly:mon)"
                - "Send one follow-up for any application silent for three weeks"
                - "Mark closed applications with the stage reached and any feedback"
            - name: Monthly full mock loop day
              description: |-
                ## Purpose
                Final rounds often run four or five back-to-back interviews: coding, C++ depth, systems, design and behavioural. Stamina and context switching fail before knowledge does, so once a month a half-day of consecutive mocks with different partners shows how you hold up in the third and fourth hour.

                ## Milestones
                1. A monthly half-day booked with three or four different interviewers or partners.
                2. A loop plan with one coding, one language, one systems or design and one behavioural round.
                3. Scores for each round compared, with any drop in later rounds noted.
                4. One change to preparation or routine chosen after each loop day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly mock loops of at least three rounds each are completed, each with per-round scores and one recorded change."
                cadence: rolling
              tasks:
                - "Ask three people to take one round each on a shared half-day"
                - "Write the loop plan with four round types and timings"
                - "Run a back-to-back mock loop and score each round @recurring(monthly:12)"
                - "Note whether later rounds scored lower and why"
            - name: Monthly re-test against the baseline
              description: |-
                ## Purpose
                Without measuring, preparation drifts toward comfortable topics while the weak ones stay weak. Re-running a fresh version of the baseline each month, with new problems at the same difficulty and new language and systems questions, shows whether the skills matrix is really moving.

                ## Milestones
                1. A fresh set of baseline-equivalent problems and questions prepared each month.
                2. The re-test taken under the same timing as the original baseline.
                3. Skills matrix scores updated with the date and the change from last month.
                4. The study plan for the next month adjusted to the topics that did not move.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The skills matrix carries at least three monthly re-test dates with scores, and each month's study plan names the topics that did not improve."
                cadence: rolling
              tasks:
                - "Prepare a fresh set of problems at the baseline difficulty"
                - "Retake the timed baseline and update the skills matrix @recurring(monthly:20)"
                - "Compare scores with last month and list topics that did not move"
                - "Rebalance next month's study blocks toward those topics"
            - name: Debrief notes within a day of every round
              description: |-
                ## Purpose
                Memory of a real interview fades within a day, and with it the honest view of what went well, where you froze and what the interviewer pushed on. A short private debrief after every round, written the same evening, feeds the error log and prepares the next round at the same firm.

                ## Milestones
                1. A debrief template with round type, topics covered in your own words, what went well, what did not and follow-ups.
                2. A debrief written within 24 hours of every real round.
                3. Gaps from each debrief copied into the error log or the study plan.
                4. Debriefs reviewed before the next round at the same firm.

                ## Notes
                Start from the **Meeting notes** template. Keep debriefs about your own performance and topic areas; do not transcribe or share a firm's questions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every real interview round has a private debrief dated within 24 hours, and each gap it names appears in the error log or study plan."
                cadence: rolling
              tasks:
                - "Create a debrief page from the meeting notes template"
                - "Write a debrief the same evening after each interview round"
                - "Copy each gap from the debrief into the error log"
                - "Reread the debrief before the next round with that firm"
            - name: Weekly systems reading slot
              description: |-
                ## Purpose
                Systems questions about virtual memory, scheduling, sockets and caches are where many strong coders stall, because the material is learned once at university and never touched again. One fixed hour a week on a systems chapter, closed with three questions you can now answer aloud, rebuilds that knowledge steadily.

                ## Milestones
                1. A weekly hour fixed for systems reading.
                2. Chapters from the reading queue scheduled through operating systems, networking and computer architecture.
                3. Three interview-style questions written and answered aloud after each session.
                4. Systems scores on the skills matrix rising at monthly re-tests.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A systems chapter is read every week for ten weeks, each with three written questions answered aloud and logged."
                cadence: rolling
              tasks:
                - "Schedule ten systems chapters from the reading queue"
                - "Read one systems chapter and answer three questions aloud @recurring(weekly:thu)"
                - "Add each question you could not answer to the error log"
                - "Explain one chapter to a friend in five minutes without notes"
            - name: C++ object model, lifetime and move semantics
              description: |-
                ## Purpose
                Questions on constructors, destructors, copy versus move, the rule of five, value categories and copy elision appear in almost every C++ quant developer loop. Working through them until you can predict exactly which special member runs, and why, removes the most common source of hesitation in language rounds.

                ## Milestones
                1. Notes covering object lifetime, special member functions, value categories and copy elision in your own words.
                2. A small class written with logging in every special member, used to predict and confirm calls in ten scenarios.
                3. The rule of zero and rule of five explained with a resource-owning example.
                4. Twenty lifetime and move questions answered with at least 18 correct.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least 18 of 20 object lifetime and move semantics questions are answered correctly, with predictions confirmed by a logging class."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a class that prints a line from every special member function"
                - "Predict then run ten copy, move and return scenarios with the class"
                - "Implement a resource-owning class that follows the rule of five"
                - "Answer twenty lifetime and move questions and mark them"
            - name: C++ templates, constexpr and compile-time work
              description: |-
                ## Purpose
                Template metaprogramming questions separate candidates who use templates from those who understand them: deduction rules, specialisation, SFINAE versus concepts, constexpr evaluation and the cost of code bloat. Trading firms ask because compile-time work removes runtime branches on hot paths.

                ## Milestones
                1. Template argument deduction and forwarding references explained with examples.
                2. One problem solved three ways: tag dispatch, SFINAE and concepts.
                3. A constexpr lookup table built and checked to be evaluated at compile time.
                4. A short note on when compile-time techniques are worth the build time and readability cost.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One dispatch problem is implemented with tag dispatch, SFINAE and concepts, and a constexpr table is shown to be evaluated at compile time."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write out the template deduction rules for a forwarding reference"
                - "Solve one dispatch problem with tag dispatch, SFINAE and concepts"
                - "Build a constexpr lookup table and confirm it in the generated code"
                - "Write when you would avoid compile-time tricks in a team codebase"
            - name: Memory model, atomics and lock-free basics
              description: |-
                ## Purpose
                Low-latency rounds regularly ask for a single-producer single-consumer queue, and then ask why each memory order was chosen. Learning the C++ memory model, false sharing and the classic lock-free pitfalls well enough to write and defend that queue from scratch covers a large share of concurrency questions at trading firms.

                ## Milestones
                1. Acquire, release, relaxed and sequentially consistent ordering explained with a two-thread example each.
                2. A single-producer single-consumer ring buffer written from a blank file and tested under a thread sanitizer.
                3. False sharing demonstrated with a benchmark and fixed with alignment.
                4. The ABA problem and why lock-free does not mean wait-free explained aloud.

                ## Notes
                Interviewers care more about your reasoning on ordering than about clever code. Say which orderings you could weaken and what breaks if you do.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ring buffer written from scratch passes a thread sanitizer run, and each memory order in it is justified in writing."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Write one two-thread example for each of the four memory orders"
                - "Implement a ring buffer for one producer and one consumer from scratch"
                - "Benchmark a false sharing case and fix it with alignment"
                - "Rewrite the ring buffer from a blank file in under 30 minutes @recurring(monthly:3)"
            - name: Concurrency questions in C++ and Python
              description: |-
                ## Purpose
                Concurrency questions go well beyond atomics: mutexes and condition variables, deadlock and how to avoid it, thread pools, and in Python the global interpreter lock, multiprocessing and asyncio. Candidates for research platform roles are asked when Python threads help and when they do not, and C++ candidates are asked to write a correct bounded blocking queue.

                ## Milestones
                1. A bounded blocking queue written in C++ with a mutex and two condition variables, including spurious wakeup handling.
                2. Deadlock conditions listed with a lock ordering fix shown on an example.
                3. Python threads, processes and asyncio compared on a CPU-bound and an IO-bound task with timings.
                4. Ten concurrency questions answered aloud and scored.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A C++ bounded queue and a Python timing comparison of threads, processes and asyncio both exist, and eight of ten concurrency questions score as confident."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a bounded blocking queue with a mutex and condition variables"
                - "Show a deadlock on purpose and fix it with lock ordering"
                - "Time Python threads, processes and asyncio on CPU and IO tasks"
                - "Answer ten concurrency questions aloud and score each"
            - name: Python internals and NumPy memory for interviews
              description: |-
                ## Purpose
                Python questions in quant developer loops probe what happens underneath: reference counting and the garbage collector, mutable default arguments, generators, the cost of attribute lookups, and why a NumPy view and a copy behave differently. Research platform roles in particular expect you to explain why a loop is slow and how to vectorise it.

                ## Milestones
                1. Notes on object identity, reference counting, the global interpreter lock and common gotchas.
                2. Generators, iterators and context managers each written from scratch in a small example.
                3. NumPy strides, views versus copies and broadcasting demonstrated with timings.
                4. A slow pandas loop rewritten in vectorised form, with before and after timings explained.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written examples of generators, context managers and NumPy views exist, and one loop is vectorised with timings that you can explain aloud."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List ten Python gotchas and the reason each one happens"
                - "Write a generator, an iterator class and a context manager by hand"
                - "Show a NumPy view changing its parent array and explain strides"
                - "Vectorise a slow pandas loop and record the timings"
            - name: Order book implementation practice
              description: |-
                ## Purpose
                Order book questions are the trading firm version of the classic design-a-data-structure round: add, cancel and modify orders, report the best bid and offer, and match crossing orders by price and time priority. Building one in C++ and Python, and knowing the complexity of each operation under different containers, prepares you for both the live round and the take-home.

                ## Milestones
                1. A limit order book with add, cancel, modify and best price queries, tested with a scripted message sequence.
                2. Price-time priority matching added and checked against hand-worked examples.
                3. Two container choices compared, such as a balanced tree against arrays indexed by price level, with complexity and benchmark results.
                4. The design explained aloud in ten minutes, including how cancels find their order.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested order book with matching passes a scripted message test, and a written comparison of two container designs gives complexity and benchmark numbers."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write a scripted sequence of add, cancel and modify messages with expected results"
                - "Implement the book with best bid and offer queries and pass the script"
                - "Add price-time matching and check it against hand-worked examples"
                - "Rebuild the order book core from a blank file against the timer @recurring(monthly:25)"
            - name: Operating system and networking questions
              description: |-
                ## Purpose
                Interviewers at trading firms ask what happens on a page fault, how a context switch works, what a system call costs, how TCP differs from UDP multicast for market data, and what Nagle's algorithm does to latency. Preparing a bank of short, accurate spoken answers to these classic questions is the fastest way to raise the systems score.

                ## Milestones
                1. A bank of 30 systems questions covering processes, memory, scheduling, files, sockets and protocols.
                2. Each question answered in under two minutes aloud, with a written reference answer checked against a textbook.
                3. Packet flow for a UDP multicast market data feed drawn from the network card to user space.
                4. At least 25 of the 30 questions scored as confident.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least 25 of 30 operating system and networking questions are scored as confident, each with a checked written reference answer."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Write 30 systems questions grouped by processes, memory, files and networking"
                - "Draft a two-minute reference answer to each and check it against a textbook"
                - "Draw the path of a multicast packet from the network card to your code"
                - "Answer all 30 aloud in one sitting and score each"
            - name: Cache-aware algorithms and constant factors
              description: |-
                ## Purpose
                Big-O is where trading firm algorithm questions start, not where they finish: interviewers follow up with why a sorted vector beats a map for small sizes, what a cache miss costs, and how branch prediction changes a loop. Practising problems where you explain both the complexity and the memory behaviour prepares you for that second question.

                ## Milestones
                1. The memory hierarchy latencies written down to an order of magnitude from memory.
                2. Three benchmarks showing a cache-friendly structure beating a pointer-heavy one of the same complexity.
                3. A branchy loop made branchless and the benchmark difference explained.
                4. Ten algorithm problems answered with both complexity and expected cache behaviour.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three benchmark comparisons of cache-friendly against pointer-heavy structures are written up, and ten problems are answered with complexity and cache behaviour."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the approximate latency of each cache level and main memory"
                - "Benchmark a sorted vector against a node-based map for small sizes"
                - "Make one branchy loop branchless and measure the change"
                - "Explain ten past problems again adding their cache behaviour"
            - name: Linux debugging and profiling under questioning
              description: |-
                ## Purpose
                Being asked how you would find why a process is slow, or why it crashed at 3am, tests whether you have used perf, gdb, strace, valgrind and core dumps for real. Running each tool on your own code, and keeping a one-line account of what it showed, gives you true stories to tell instead of a list of tool names.

                ## Milestones
                1. A program with a deliberate hotspot profiled with a sampling profiler and the hotspot found.
                2. A crashing program debugged from a core dump with a debugger.
                3. System call tracing used to find an unexpected blocking call.
                4. A one-page account of each investigation ready to retell in an interview.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three written investigations exist, covering a profiled hotspot, a core dump and a traced system call, each retold aloud in under four minutes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Profile a program with a planted hotspot and find it"
                - "Load a core dump in a debugger and find the crashing line"
                - "Trace system calls to find a hidden blocking read"
                - "Profile one real piece of your own code and log what you found @recurring(monthly:17)"
            - name: Trading vocabulary for developers
              description: |-
                ## Purpose
                You do not need to be a trader, but an interviewer will notice if you cannot say what a limit order is, what a market data feed carries, or why a firm cares about the difference between a fill and an acknowledgement. A short glossary of instruments, order types, the order lifecycle and profit and loss basics makes design rounds and team conversations much easier.

                ## Milestones
                1. A glossary of about 40 terms covering instruments, order types, order states, market data and positions.
                2. The life of an order drawn from strategy to exchange and back, with each message named.
                3. Profit and loss and position calculated by hand for a short sequence of fills.
                4. Each term explained aloud in a sentence without notes.

                ## Notes
                This is vocabulary for building systems, not a basis for trading decisions. Nothing here is investment advice.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 40-term glossary and an order lifecycle diagram exist, and position and profit and loss for a sequence of fills are worked correctly by hand."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a glossary of 40 trading terms a developer needs"
                - "Draw an order's life from strategy to exchange and back"
                - "Work out position and profit and loss for ten example fills"
                - "Read one market structure article and add new terms @recurring(weekly:fri)"
            - name: Choosing the interview language for each role
              description: |-
                ## Purpose
                Many firms let you pick the coding language, and choosing Python for speed of writing can backfire in a C++ role where interviewers expect to see memory and types handled. Deciding per role type which language you will use for algorithm rounds, and practising accordingly, avoids switching under pressure.

                ## Milestones
                1. Each role type on the target list marked with the language its interviews expect or allow.
                2. Timed solves compared in both languages on the same five problems.
                3. A written rule for which language to use in each round type.
                4. Practice time split to match the rule.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written per-round language rule exists, backed by timed comparisons on five problems in both C++ and Python."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark each target role type with its expected interview language"
                - "Solve the same five problems in C++ and Python against a timer"
                - "Write the language rule for each round type"
                - "Ask a recruiter which language each firm prefers for coding rounds"
            - name: Closing the three weakest topics
              description: |-
                ## Purpose
                The baseline names the topics most likely to cost you an offer, and general practice will not move them on its own. A short remediation plan for each of the three weakest, with specific material, exercises and a re-test date, gives them focused hours until each scores at least 3 out of 5.

                ## Milestones
                1. Each of the three weakest topics given a written plan with material, exercises and hours.
                2. A re-test date set for each topic within eight weeks.
                3. Each topic re-tested and scored at least 3 out of 5 on the skills matrix.
                4. The next weakest topic chosen once all three pass.

                ## Notes
                Start from the **Remediation plan** template.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each of the three weakest baseline topics has a remediation plan and a dated re-test showing a score of at least 3 out of 5."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Copy the three weakest topics from the skills matrix into a plan"
                - "Choose material and ten exercises for each weak topic"
                - "Set a re-test date for each topic within eight weeks"
                - "Re-test the current weakest topic and update its score @recurring(monthly:28)"
            - name: Thinking aloud while coding
              description: |-
                ## Purpose
                Silence for ten minutes followed by working code scores worse than a clear narration that reaches the same code, because the interviewer cannot credit reasoning they never heard. Practising a fixed routine of restating the problem, asking about input and edge cases, stating the approach and complexity, then narrating while writing, makes communication automatic.

                ## Milestones
                1. A five-step narration routine written on one card.
                2. Five practice sessions recorded and played back.
                3. Silent stretches over 60 seconds counted in each recording and falling.
                4. Peer mock communication scores rising over four weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Recorded sessions show silent stretches over 60 seconds falling to one or none, and peer mock communication scores rise over four weeks."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the five-step narration routine on a card"
                - "Record yourself solving one problem while narrating"
                - "Count silent stretches over a minute in the recording"
                - "Record and review one narrated practice solve @recurring(weekly:wed)"
            - name: Production-quality code in timed tests
              description: |-
                ## Purpose
                Working code is the minimum at trading firms; reviewers also score naming, error handling, const correctness, tests and whether you thought about overflow and empty input. Building a short checklist and running it in the last five minutes of every practice problem moves you from a pass to a strong pass.

                ## Milestones
                1. A ten-point final-check list covering edge cases, overflow, naming, const and tests.
                2. The list applied to the last five minutes of 20 practice problems.
                3. Bugs found by the list counted and added to the error log.
                4. A peer reviewer scoring code quality separately from correctness in mocks.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A ten-point final-check list has been applied to 20 timed problems, with the bugs it caught logged."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a ten-point final-check list for timed code"
                - "Run the list on your last five practice solutions"
                - "Log every bug the list found that you had missed"
                - "Ask your mock partner to score code quality separately"
            - name: Sequencing applications so favourites come last
              description: |-
                ## Purpose
                Firms that move slowly and firms you care about most should not get your first, rustiest interviews. Ordering applications so two or three practice firms come first, and timing the favourites so their final rounds land after you have done at least one real loop, uses the market's own calendar to your advantage.

                ## Milestones
                1. The target list split into practice, solid and favourite groups.
                2. Typical process lengths noted for each firm from recruiters or public accounts.
                3. Application dates set so at least one practice loop finishes before a favourite's first technical round.
                4. A plan for asking a fast-moving firm for time if an early offer arrives.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every target firm is placed in a practice, solid or favourite group with a planned application date that puts at least one real loop before the favourites."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Split the target list into practice, solid and favourite groups"
                - "Note the usual process length for each firm"
                - "Set application dates so practice loops finish first"
                - "Write how you will ask for more time if an early offer arrives"
            - name: Offer comparison and negotiation preparation
              description: |-
                ## Purpose
                Quant pay is built from parts that are hard to compare: base salary, a discretionary or formula bonus, sign-on payments, deferred compensation and sometimes a non-compete period that keeps you out of the market. Laying offers out side by side and preparing questions for each recruiter lets you negotiate on facts and decide calmly.

                ## Milestones
                1. Each offer broken into base, bonus structure, sign-on, deferral, notice and restrictive covenants.
                2. Questions listed for each recruiter about anything not stated in writing.
                3. A ranked view of offers including role fit, team and learning, not only pay.
                4. A negotiation note per offer with the one or two points you will raise.

                ## Notes
                Have any non-compete, garden leave or IP clause read by an employment lawyer before signing. This project organises the comparison; it is not legal or tax advice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written side-by-side comparison of every offer exists, with open questions answered by recruiters and a decision recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Lay out every offer by base, bonus, sign-on, deferral and covenants"
                - "List the questions each recruiter still needs to answer in writing"
                - "Rank the offers on role, team, learning and pay"
                - "Book an employment lawyer to read any restrictive clauses"
            - name: Stamina and nerves for long interview days
              description: |-
                ## Purpose
                Superdays and onsite loops can run four to six hours, and performance falls with fatigue, hunger and the memory of a bad earlier round. Rehearsing a routine for the day, covering sleep, food, breaks, a reset between rounds and what to do when you blank, protects the later rounds from the earlier ones.

                ## Milestones
                1. A written routine for the night before and the day itself, including food and water.
                2. A 60-second reset routine practised between mock rounds.
                3. A phrase prepared for when you blank, such as restating the problem and trying a small example.
                4. The routine tested on at least one monthly mock loop day.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written interview day routine and reset routine exist and have been tested on at least one full mock loop."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a routine for the night before and the morning of a loop"
                - "Practise a 60-second reset between two mock rounds"
                - "Write the phrase you will use when your mind goes blank"
                - "Try the full routine on the next mock loop day"
            - name: Online assessment preparation week
              description: |-
                ## Purpose
                Online assessments are usually the first technical filter, timed and automatically scored, sometimes with C++ or systems multiple choice alongside the coding. A focused week before the first one, on the platform's own practice environment and under the exact time limit, avoids losing an application to unfamiliar tooling.

                ## Milestones
                1. The assessment format for each firm noted from the invitation and public descriptions.
                2. Three practice assessments completed on the same kind of platform under the full time limit.
                3. Input parsing and output formatting templates ready in your chosen language.
                4. A quiet slot, a reliable connection and the assessment start time booked.

                ## Notes
                Read the honesty rules in the invitation. Assessments forbid outside help, and some record your screen.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three full-length practice assessments are logged before the first real one, which is completed within its window."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the invitation and note the format and time limit"
                - "Complete three practice assessments under the full time limit"
                - "Prepare input parsing templates in your interview language"
                - "Book a quiet slot and test your connection the day before"
            - name: Take-home task delivered to production standard
              description: |-
                ## Purpose
                Take-home tasks, such as a market data parser, a small matching engine or a trade aggregation service, are marked like a pull request: structure, tests, build instructions, performance and a clear readme. Planning the time, reading the brief twice and shipping something small and correct beats a sprawling solution with no tests.

                ## Milestones
                1. The brief read twice with requirements, constraints and ambiguities listed.
                2. Clarifying questions sent to the recruiter within a day of receiving the task.
                3. A solution with unit tests, a one-command build and a readme covering design choices and trade-offs.
                4. Performance measured and stated in the readme with how it was measured.
                5. The task submitted before the deadline with a short cover note.

                ## Notes
                Keep the task and your solution private unless the firm says otherwise. Do not post it publicly or ask others to solve it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The take-home is submitted on time with tests, a one-command build and a readme stating design trade-offs and measured performance."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Read the brief twice and list every requirement and ambiguity"
                - "Email the recruiter your clarifying questions within a day"
                - "Write tests before the hot path and keep the build to one command"
                - "Write the readme with design trade-offs and measured performance"
            - name: Low-latency system design round preparation
              description: |-
                ## Purpose
                Design rounds at trading firms ask for systems such as a market data feed handler, an order gateway, a risk check in the order path or a matching engine, and they push on where the microseconds go. Preparing four standard designs, each with a diagram, the latency budget per stage and the failure handling, gives you a frame to adapt to whatever is asked.

                ## Milestones
                1. Four designs prepared: feed handler, order gateway, pre-trade risk check and matching engine.
                2. Each design drawn with components, threads, queues and a latency budget per stage.
                3. Failure cases covered for each: gaps in sequence numbers, reconnection, back pressure and restart.
                4. Each design presented in a 45-minute mock with a peer pushing on trade-offs.

                ## Notes
                Interviewers want trade-offs, not buzzwords. Say what you would measure first before claiming kernel bypass or special hardware is needed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "Four low-latency designs with diagrams, latency budgets and failure handling exist, and each has been presented in a 45-minute mock."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the four standard designs and the questions each must answer"
                - "Draw the feed handler with threads, queues and a latency budget"
                - "Write sequence gap, reconnection and restart handling for each design"
                - "Present one design in a 45-minute mock with a peer"
            - name: Onsite or final round loop preparation
              description: |-
                ## Purpose
                An onsite or final virtual loop is the decision point, often four to six interviews with engineers, a team lead and sometimes a trader or researcher. Preparing for the specific firm in the two weeks before, from its public engineering talks and stack to your questions for each interviewer, turns general readiness into a targeted performance.

                ## Milestones
                1. The loop schedule, interviewer roles and format confirmed with the recruiter.
                2. The firm's public engineering talks, papers or blog posts read and noted.
                3. Two thoughtful questions prepared for each interviewer type.
                4. A full mock loop run in the week before, matching the real format.
                5. Travel, equipment and the day routine settled two days ahead.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The final loop is attended with a confirmed schedule, a firm-specific notes page, prepared questions and a matching mock completed in the prior week."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the recruiter for the loop schedule and interviewer roles"
                - "Read the firm's public engineering talks or posts and take notes"
                - "Write two questions for each type of interviewer"
                - "Run a mock loop in the same format the week before"
            - name: Behavioural and team-fit round preparation
              description: |-
                ## Purpose
                Behavioural rounds at trading firms look for ownership, calm under production pressure, honest handling of mistakes and how you work with traders and researchers who want things yesterday. Mapping your five stories to the common prompts, and preparing an honest answer on why this firm, keeps this round from becoming the one that sinks a strong technical loop.

                ## Milestones
                1. Common behavioural prompts listed, such as a production incident, a disagreement and a deadline you missed.
                2. Each prompt mapped to one of your five stories, with gaps filled by a new story.
                3. A specific answer for why this firm and this team, written for each final round.
                4. Two behavioural mocks completed with feedback.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every common behavioural prompt maps to a prepared story, a firm-specific why answer exists, and two behavioural mocks have been completed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List ten behavioural prompts common in trading firm loops"
                - "Map each prompt to one of your prepared stories"
                - "Write a firm-specific answer to why this team"
                - "Run two behavioural mocks and note the feedback"
            - name: Offer, references and background check week
              description: |-
                ## Purpose
                Between a verbal offer and a signed contract sit references, background and education checks, sometimes regulatory forms, and a deadline that may be short. Having referees briefed, documents ready and your other processes informed means the offer week is spent deciding, not scrambling for certificates.

                ## Milestones
                1. Two or three referees agreed in advance and briefed on the role.
                2. Degree certificates, transcripts, right to work and employment history dates ready to send.
                3. Other live processes told of the offer and its deadline, and asked for their timelines.
                4. The written offer reviewed and accepted or declined before the deadline.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Referees and documents are ready before the first offer, and each offer is answered in writing before its deadline."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two or three referees now and tell them about the role"
                - "Gather certificates, transcripts and exact employment dates in one folder"
                - "Tell other live processes about the offer and its deadline"
                - "Reply to the written offer before its stated deadline"
            - name: Student internship applications for quant development
              description: |-
                ## Purpose
                Internships are the main entry route for students: many trading firms convert most of their graduate hires from interns, and applications open early in the academic year. A plan built around term dates and exam periods, with a small portfolio project and a CV built on coursework and competitions, gives a student a real chance at an internship offer.

                ## Milestones
                1. Internship opening windows for target firms recorded around your term and exam dates.
                2. One portfolio project, such as a small order book or a market data parser, finished and documented.
                3. The CV built on coursework, projects, competitions and any part-time engineering work.
                4. At least 15 internship applications submitted in the opening window.

                ## Notes
                Ask your university careers service for alumni at target firms and for mock interviews. Many students underuse both.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least 15 internship applications are submitted within the opening window, backed by a documented portfolio project."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Note each target firm's internship window beside your exam dates"
                - "Choose one portfolio project you can finish before applications open"
                - "Book a CV review and a mock interview with the careers service"
                - "Submit applications to at least 15 internships in the window"
            - name: Turning an internship into a return offer
              description: |-
                ## Purpose
                Return offers are decided on the internship project, code review behaviour and how you work with the team, often with a final conversation at the end. Agreeing clear goals in week one, asking for feedback at the halfway point and presenting the project well at the end makes the conversion decision easy for the firm.

                ## Milestones
                1. Project goals and the definition of done agreed with your mentor in the first week.
                2. A midpoint feedback conversation held, with actions written down.
                3. A final presentation of the project with results, trade-offs and what you would do next.
                4. The return offer conversation prepared, including questions on team placement.

                ## Notes
                Ask the agent to turn your weekly notes into a one-page project summary for the final presentation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Written goals, a midpoint feedback note and a final project presentation exist by the internship's last week."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree written project goals with your mentor in week one"
                - "Book a midpoint feedback conversation and record the actions"
                - "Prepare a final presentation with results and trade-offs"
                - "List your questions about team placement for the return offer"
            - name: Moving from big tech into a trading firm
              description: |-
                ## Purpose
                Engineers from large technology companies usually ace the algorithm rounds and then stumble on C++ depth, latency reasoning and why they want to work in trading. A plan that recasts your systems experience in latency and reliability terms, fills C++ gaps and prepares an honest answer about the move makes the switch credible.

                ## Milestones
                1. Your current systems work rewritten in terms of latency, throughput, reliability and ownership.
                2. C++ gaps listed against the skills matrix and given study blocks.
                3. A clear, honest answer prepared for why trading and why now.
                4. Two conversations held with engineers who made the same move.

                ## Notes
                Expect questions about working closer to the business and faster release cycles. Have a real example of shipping under pressure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rewritten experience summary, a C++ gap plan and a why-trading answer exist, and two conversations with engineers who moved are logged."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Rewrite three projects in terms of latency and reliability"
                - "List your C++ gaps and book study blocks for each"
                - "Draft your answer to why trading and test it on a friend"
                - "Ask two engineers who made the move how they prepared"
            - name: Game or embedded developer moving into low-latency trading
              description: |-
                ## Purpose
                Game engine and embedded engineers already think about frame budgets, cache lines and allocation-free hot paths, which is exactly what low-latency trading teams want. Translating that experience into trading terms, and filling the gaps in networking, concurrency and market vocabulary, turns an unusual CV into a strong one.

                ## Milestones
                1. Three examples of performance work rewritten with trading-relevant terms such as tail latency and determinism.
                2. Networking and kernel topics added to the study plan where your background is thinner.
                3. The trading vocabulary project completed before the first technical round.
                4. A short portfolio piece showing a latency-sensitive component with measured results.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three performance stories are rewritten in trading terms and a measured latency-sensitive portfolio piece exists before the first application."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Rewrite three performance stories using tail latency and determinism"
                - "Mark networking and kernel gaps on the skills matrix"
                - "Build a small latency-sensitive component and measure its tail latency"
                - "Explain how a frame budget maps to a tick-to-trade budget"
            - name: Ten-hour week plan while employed full-time
              description: |-
                ## Purpose
                Ten hours a week is what most working engineers can sustain alongside a job and a life, and a plan that pretends otherwise collapses in the second week. Splitting those hours into fixed weekday slots and one weekend block, with interviews booked around leave and quiet periods at work, keeps preparation steady for three to four months.

                ## Milestones
                1. Ten weekly hours mapped to specific slots that survive a busy work week.
                2. A minimum version of the week, about four hours, agreed for crunch weeks.
                3. Annual leave or flexible days reserved for likely final rounds.
                4. Twelve weeks of logged hours with at least ten weeks at full or minimum plan.

                ## Notes
                Keep all preparation off your employer's devices and time, and check your contract on outside work and confidentiality.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Twelve weeks of preparation hours are logged, with at least ten weeks meeting the full or minimum plan."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Map ten weekly hours to fixed slots in your calendar"
                - "Write the four-hour minimum week for crunch periods"
                - "Reserve leave days for likely final rounds"
                - "Log the hours you actually spent at the end of each week"
            - name: Reapplying after a rejection
              description: |-
                ## Purpose
                Rejection at a trading firm is common and usually not final: many firms accept reapplications after a cooling-off period of six to twelve months. Recording what stage you reached, asking politely for feedback and building a specific improvement plan before that date turns a no into a stronger second attempt.

                ## Milestones
                1. The stage reached and your own debrief recorded for each rejection.
                2. Feedback requested from the recruiter, and any received written down.
                3. The firm's reapplication period found and the earliest date noted.
                4. A targeted plan for the topics that failed, with a re-test before reapplying.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each rejection has a recorded stage, a feedback request, a reapplication date and a plan with a re-test before that date."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Record the stage reached and your debrief for the rejection"
                - "Send the recruiter a short, polite request for feedback"
                - "Find the reapplication period and note the earliest date"
                - "Write a plan for the failed topics with a re-test date"
            - name: Matching engine portfolio project
              description: |-
                ## Purpose
                One well-built project that you can talk about for 30 minutes is worth more in a quant developer loop than a long list of small ones. A matching engine with a binary protocol parser, deterministic replay, tests, a latency histogram and a design write-up gives interviewers a natural deep conversation and shows production habits.

                ## Milestones
                1. A design document covering message format, threading model and data structures.
                2. The engine built with price-time matching, a replayable input log and unit tests.
                3. Latency measured as a histogram with median and tail percentiles, and the method described.
                4. A readme and a ten-minute walkthrough you can give without notes.

                ## Notes
                Measure on a quiet machine and report the percentiles honestly. Interviewers distrust a single average latency figure.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A public or shareable matching engine repository exists with tests, deterministic replay, a latency histogram and a design readme."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write a one-page design for the message format and threading"
                - "Build matching with a replayable input log and unit tests"
                - "Measure latency as a histogram with tail percentiles"
                - "Give a ten-minute walkthrough of the project to a peer"
            - name: FPGA and hardware-adjacent interview topics
              description: |-
                ## Purpose
                Some quant developer roles sit next to hardware teams and ask about network card offload, kernel bypass, timestamping, clock synchronisation and when logic belongs in an FPGA rather than software. Knowing these topics at the level of a careful software engineer, without claiming hardware design skills you lack, opens the more specialised low-latency roles.

                ## Milestones
                1. Notes on kernel bypass, hardware timestamping and clock synchronisation in your own words.
                2. The trade-offs of software, smart network cards and FPGA logic listed for a simple risk check.
                3. Five interview questions on these topics answered aloud and checked.
                4. A clear sentence prepared on what you have and have not done hands-on.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes and a trade-off comparison exist, and five hardware-adjacent questions are answered aloud with an honest statement of hands-on experience."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read one public talk or paper on kernel bypass networking"
                - "Write notes on hardware timestamps and clock synchronisation"
                - "Compare software, smart cards and FPGA logic for a simple risk check"
                - "Write the sentence you will use about your hands-on experience"
            - name: Senior and lead quant developer interviews
              description: |-
                ## Purpose
                Senior and lead loops shift weight from puzzles toward architecture, ownership of production systems, hiring, mentoring and how you have handled incidents and trade-offs with the business. Preparing a portfolio of architectural decisions, incidents and team outcomes, with numbers, shows the judgement these roles are hired for.

                ## Milestones
                1. Three architectural decisions written up with context, options, choice and outcome.
                2. Two production incidents written up with impact, response and what changed afterwards.
                3. Examples of hiring, mentoring and raising team standards gathered with results.
                4. A senior-level design mock completed with an experienced interviewer.

                ## Notes
                Keep employer details general and confidential. Describe decisions and outcomes, never internal systems, code or data.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three architecture write-ups, two incident write-ups and a set of team leadership examples exist, and one senior design mock has been completed."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the architecture decisions you led in the last five years"
                - "Write up three decisions with options, choice and outcome"
                - "Write up two incidents with impact and what changed afterwards"
                - "Book a senior-level design mock with an experienced engineer"
---

# Quant Developer Interviews

Quant developer interviews test more than a standard software loop: C++ down to the object model and memory ordering, Python internals, data structures that hold an order book, operating system and network questions, a low-latency design round and often a take-home task marked like production code. This area is for students chasing internships and graduate roles and for working engineers moving into trading firms, banks and funds. It starts with foundations (a role map, an honest baseline, a dated pipeline, the CV and your stories), then the weekly practice machinery, the technical topics interviewers probe, improvements and decisions, the dated rounds themselves, plans for particular situations, and a few specialist tracks.

The rhythms are a daily timed coding problem, a weekly C++ drill, a weekly peer mock, a weekly error log review, a Monday pipeline review and a weekly systems reading slot, plus a monthly full mock loop and a monthly re-test against the baseline. The Skills matrix, Resume, Reading queue, Habit tracker, Meeting notes and Remediation plan templates pair with several projects. Respect every confidentiality agreement you sign: practise from public material and never share a firm's actual questions or take-home tasks. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
