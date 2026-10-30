---
id: tech-certifications.coding-interview-preparation
name: Coding Interview Preparation
description: "A coding interview plan that holds up: one interview language, problems by pattern, timed practice, thinking aloud, peer mock interviews, a dated pipeline and plans for students and working engineers."
category: personal
version: 1.0.0
tags: [tech-certifications, coding-interview-preparation, engineer, student, coding-interviews, leetcode-style, mock-interviews, job-search]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - remediation-plan
    - feedback-themes
    - meeting-notes
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Coding Interview Preparation
          description: "Preparing for coding interviews: choosing a language, a problem plan by pattern, timed practice, talking through solutions aloud and mock interviews with peers."
          projects:
            - name: Coding round formats at your target companies
              description: |-
                ## Purpose
                Companies run very different coding rounds: an automated online assessment, a 45-minute shared editor screen, a whiteboard session, a pair-programming exercise on a small codebase, or a debugging round. Preparing for the wrong format wastes weeks, so the first job is to write down what each company on your list actually does. Recruiters will usually tell you if you ask, and their prep emails are the most reliable source you will get.

                ## Milestones
                1. A list of up to ten target companies, each with its known coding round format, length and tool.
                2. Each company's own interview preparation page or recruiter email saved, with the date you read it.
                3. The formats grouped into the two or three you need to practise for.
                4. Any company that allows or bans a particular language noted beside its name.

                ## Notes
                Treat forum write-ups as hints, not rules. Formats change, and the recruiter's current answer beats a two-year-old post.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written table of target companies with each coding round's format, length and tool, sourced from the company or recruiter where possible."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the ten companies you most want to interview with"
                - "Read each company's published interview preparation page and save it"
                - "Ask any recruiter you are speaking with which coding format and tool they use"
                - "Group the formats into the two or three you will practise for"
            - name: Choosing one interview programming language
              description: |-
                ## Purpose
                Most candidates lose more time to syntax hesitation than to not knowing the algorithm. Picking one language for every coding round, usually the one you write fastest with a concise standard library, means every hour of practice compounds instead of being split. Python, Java, C++, JavaScript and Go are all widely accepted, but check against the formats you collected.

                ## Milestones
                1. Two candidate languages compared on your speed, standard library coverage and company acceptance.
                2. The same three problems solved in each candidate language with times recorded.
                3. One language chosen and written at the top of your practice log, with the reason.
                4. A rule recorded for when, if ever, you would use a second language.

                ## Notes
                If a role is for a specific stack, some interviewers prefer that language. Otherwise speed and clarity win over showing range.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One interview language chosen after timing the same three problems in two candidates, with the decision and reason written in the practice log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the two languages you could realistically use in an interview"
                - "Solve the same three easy problems in each and time yourself"
                - "Check none of your target companies restricts either language"
                - "Record your chosen language and the reason in your practice log"
            - name: Interview language fluency sheet
              description: |-
                ## Purpose
                Interviewers notice when you stop to remember how to sort by a key, pop from a heap or slice a string, and those pauses add up to minutes. A one-page sheet of the standard library calls you actually need in coding rounds, written by you and drilled until you no longer look at it, removes that friction. It is also the last thing worth reading on the morning of an interview.

                ## Milestones
                1. A one-page sheet covering lists, dictionaries or maps, sets, heaps, queues, sorting with custom keys and string handling.
                2. Each entry tested in a scratch file so you know it runs.
                3. Common traps noted, such as integer division, mutable defaults or off-by-one slicing.
                4. The sheet drilled until you can write every entry from memory in ten minutes.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested one-page standard library sheet for your interview language that you can reproduce from memory in ten minutes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the data structure operations you looked up in your last ten problems"
                - "Write each one as a working line of code on a single page"
                - "Run every entry in a scratch file to confirm it behaves as written"
                - "Rewrite the sheet from memory and fix whatever you forgot"
            - name: Baseline timed problem set
              description: |-
                ## Purpose
                Without a starting measurement you cannot tell whether six weeks of practice worked, and most people overestimate their speed. Solving a fixed set of eight problems, mixed easy and medium across common patterns, under a strict 30-minute limit each gives you an honest baseline. You will re-run a similar set later to compare.

                ## Milestones
                1. Eight problems chosen across at least five patterns, with the list saved so it can be repeated.
                2. Each problem attempted under a 30-minute timer with no hints.
                3. Solved, partly solved or failed recorded for each, with time taken.
                4. The two or three weakest patterns named from the results.

                ## Notes
                Do not look up the answers until all eight are done. A baseline you peeked at is not a baseline.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Eight timed problems attempted with results and times logged, and the weakest two or three patterns written down."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick eight mixed easy and medium problems across five patterns"
                - "Attempt each one under a 30-minute timer with no hints"
                - "Log the outcome and time for every problem"
                - "Name your weakest patterns from the baseline results"
            - name: Problem plan organised by pattern
              description: |-
                ## Purpose
                Grinding random problems teaches you answers; working through them by pattern teaches you to recognise which tool a new problem needs. A plan of roughly 100 to 150 problems grouped under patterns such as two pointers, sliding window, hashing, binary search, BFS and DFS, heaps, intervals, backtracking and dynamic programming gives your practice a route. Curated public lists are a fine starting point if you adapt them to your weak patterns.

                ## Milestones
                1. Fifteen to twenty patterns listed, ordered from most to least common in coding rounds.
                2. Five to eight problems assigned to each pattern, easy first.
                3. Extra problems added under the weak patterns from your baseline.
                4. The plan saved in one place with a status column for each problem.

                ## Notes
                Fewer problems understood well beat a long list skimmed. If a pattern has more than ten problems, cut it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved problem plan of 100 to 150 problems grouped under 15 to 20 patterns, each with a status column."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a curated public problem list as your starting point"
                - "Regroup its problems under fifteen to twenty named patterns"
                - "Add three extra problems to each of your weak patterns"
                - "Add a status column for unseen, solved, re-solve and confident"
            - name: Interview-like practice environment
              description: |-
                ## Purpose
                Practising with autocomplete, a debugger and instant test runs builds habits that disappear in a plain shared editor. Setting up one environment that matches your target format, such as a plain editor with syntax highlighting only, a timer and a way to write on a whiteboard or tablet, makes practice feel like the real round. It also exposes how often you rely on running code to find bugs.

                ## Milestones
                1. A plain editor or shared document configured with autocomplete and linting off.
                2. A visible countdown timer ready for every practice session.
                3. A whiteboard, paper pad or tablet available for drawing examples.
                4. At least five problems solved in this environment before any mock.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A practice setup with autocomplete off, a timer and a drawing surface, used for at least five problems."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Turn off autocomplete and linting in a separate editor profile"
                - "Put a countdown timer where you can see it while coding"
                - "Set out paper or a tablet for drawing examples by hand"
                - "Solve five problems in the new setup without running code until the end"
            - name: Dated preparation calendar to your first interview
              description: |-
                ## Purpose
                Preparation expands to fill whatever time you give it, and interviews tend to arrive in clusters. Working back from a target date for your first real coding screen, with weekly pattern goals and mock dates, turns an open-ended effort into a plan you can check. Six to twelve weeks is a common window for someone with a working programming background.

                ## Milestones
                1. A target date for the first real coding screen chosen and written down.
                2. Weekly pattern goals laid out from now to that date.
                3. Mock interview dates placed in the second half of the plan.
                4. Buffer weeks marked for illness, work deadlines or exams.

                ## Notes
                Schedule your least preferred companies first, so your best opportunities come when you are sharpest.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written calendar from today to a dated first screen, with weekly pattern goals, mock dates and at least one buffer week."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a realistic date for your first real coding screen"
                - "Count the weeks available and assign patterns to each week"
                - "Place at least four mock interview dates in the second half"
                - "Mark one buffer week for the week most likely to go wrong"
            - name: Practice log and mistake journal
              description: |-
                ## Purpose
                Unrecorded practice feels productive but leaves no trail, so you cannot see which patterns improve or which mistakes repeat. A simple log with one row per attempt, recording problem, pattern, time, outcome and the specific mistake, becomes the data behind every later decision. Writing the mistake in one sentence is the part that does the teaching.

                ## Milestones
                1. A log created with columns for date, problem, pattern, time, outcome and mistake.
                2. Baseline results entered as the first rows.
                3. A short list of mistake categories agreed, such as misread problem, wrong pattern, off-by-one, missed edge case.
                4. Every attempt for two weeks logged on the same day.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A practice log with mistake categories in place and every attempt for two consecutive weeks recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the log with date, problem, pattern, time, outcome and mistake columns"
                - "Enter your baseline problem results as the first rows"
                - "Write five mistake categories you expect to use most"
                - "Log each attempt before you close the editor"
            - name: Practice platform and mock service decision
              description: |-
                ## Purpose
                Paid problem platforms, video course bundles and paid mock interview services all compete for the same budget, and most people need far less than they buy. Deciding up front what you will pay for, with a monthly cap and a cancellation date, stops subscription creep. Free problem sites and peer mocks cover a lot of ground on their own.

                ## Milestones
                1. Free options listed first, with what each covers.
                2. Up to three paid options compared on cost, problem quality and company-tagged content.
                3. A spending cap and a cancellation reminder set for anything you buy.
                4. The decision recorded with what would make you change it.

                ## Notes
                Start from the **Purchase decision** template. Company-tagged problem lists can be useful, but they drift out of date quickly.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on paid platforms and mock services, with a monthly cap and a cancellation date for any subscription."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the free problem sites and mock options you already have access to"
                - "Compare up to three paid options on cost and what they add"
                - "Set a monthly spending cap for interview preparation"
                - "Add a cancellation reminder for any subscription you start"
            - name: Weekly pattern practice blocks
              description: |-
                ## Purpose
                Patterns stick when you meet several problems of the same kind close together, then see them again a week later. Two protected blocks a week, each working through three or four problems from the current pattern in your plan, are the core of the area. Each block ends with a two-line note on how to recognise the pattern next time.

                ## Milestones
                1. Two practice blocks of 90 minutes held in the calendar every week.
                2. Each block covering three or four problems from one pattern.
                3. A recognition note written for each pattern after its block.
                4. Status updated in the problem plan after every block.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two pattern blocks completed in at least six of the last eight weeks, with recognition notes for every pattern covered."
                cadence: rolling
              tasks:
                - "Book two recurring 90-minute practice slots in your calendar"
                - "Work three or four problems from the current pattern @recurring(weekly:mon,wed)"
                - "Write a two-line recognition note for the pattern you just practised"
                - "Update the status column in your problem plan"
            - name: Daily fifteen-minute warm-up problem
              description: |-
                ## Purpose
                Short daily contact keeps syntax and pattern recall warm between the longer blocks, and it is the habit that survives busy weeks. One easy problem or a re-solve from the log, done in fifteen minutes before work or class, is enough. Consistency matters more than difficulty here.

                ## Milestones
                1. A fixed time of day chosen for the warm-up.
                2. A queue of easy problems and re-solves ready so no time is spent choosing.
                3. Warm-ups done on at least five days a week for four weeks.
                4. Warm-up results counted in the practice log.

                ## Notes
                A streak can help, but miss a day rather than turn the warm-up into a long session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fifteen-minute warm-up completed on at least five days a week for four consecutive weeks, logged."
                cadence: rolling
              tasks:
                - "Choose the time of day your warm-up will happen"
                - "Queue ten easy problems and re-solves for the coming fortnight"
                - "Solve one warm-up problem in fifteen minutes @recurring(daily)"
            - name: Spaced re-solve queue for failed problems
              description: |-
                ## Purpose
                A problem you failed and then read the answer to feels learned, but most people cannot solve it cold a week later. Re-solving failed problems from scratch after three days, then after two weeks, is where pattern knowledge actually forms. A problem only leaves the queue when you solve it cleanly without notes.

                ## Milestones
                1. Every failed or hint-assisted problem added to a re-solve queue with a due date.
                2. First re-solve done three days later, second about two weeks later.
                3. Problems removed only after a clean unaided solve.
                4. Queue size kept under twenty by limiting new problems when it grows.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A re-solve queue in use for six weeks, with each failed problem re-attempted at least twice and the queue under twenty items."
                cadence: rolling
              tasks:
                - "Add every failed problem from this week to the re-solve queue"
                - "Re-solve the problems that are due without looking at notes @recurring(weekly:tue,sat)"
                - "Remove problems you solved cleanly on the second pass"
                - "Pause new problems for a week if the queue passes twenty"
            - name: Weekly timed session under interview conditions
              description: |-
                ## Purpose
                Solving a problem in an hour at your desk is a different skill from solving it in 35 minutes while explaining yourself. One weekly session of two unseen problems under a strict timer, talking aloud and without running code until the end, keeps your practice honest about speed. The times go in the log so trends are visible.

                ## Milestones
                1. One timed session of two unseen medium problems held every week.
                2. Each problem limited to the time your target format allows.
                3. Times and outcomes logged after every session.
                4. A trend of time per medium problem visible after six sessions.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six weekly timed sessions logged, with time per medium problem tracked across them."
                cadence: rolling
              tasks:
                - "Choose two unseen medium problems from patterns you have covered"
                - "Run a timed two-problem session out loud @recurring(weekly:sun)"
                - "Log the times and outcomes in your practice log"
            - name: Weekly mistake journal review
              description: |-
                ## Purpose
                Most failed problems fail for the same handful of reasons, and those reasons are rarely the algorithm itself. Reading back the week's mistake entries for ten minutes and counting them by category shows whether you misread problems, skip edge cases or choose the wrong pattern. The one fix you pick for next week is worth more than another five problems.

                ## Milestones
                1. The week's mistakes counted by category every week.
                2. The most frequent category named with one fix for the coming week.
                3. The fix checked at the next review.
                4. A category that stays top for three weeks escalated to the weak-pattern plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly reviews done, each naming a top mistake category and one fix, with repeat categories escalated."
                cadence: rolling
              tasks:
                - "Count the week's mistakes by category @recurring(weekly:fri)"
                - "Write one specific fix for the most common category"
                - "Check whether last week's fix reduced that mistake"
            - name: Peer mock interview exchange
              description: |-
                ## Purpose
                Nothing prepares you for being watched like being watched, and a peer who also needs practice is free. Swapping roles with a partner once a week, each taking a turn as interviewer with a problem the other has not seen, builds composure and shows you how interviewers think. A short written feedback note after each session is what makes it improve.

                ## Milestones
                1. One or two practice partners found at a similar level.
                2. A weekly swap session agreed, with each person interviewing for 45 minutes.
                3. Problems chosen by the interviewer that the candidate has not seen.
                4. Written feedback exchanged after every session on communication, approach and code.

                ## Notes
                Start from the **Meeting notes** template for feedback. Ask your partner to stay quiet unless you are truly stuck, as most real interviewers do.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least eight peer mocks completed as candidate, each with written feedback saved."
                cadence: rolling
              tasks:
                - "Ask two people at a similar level to swap weekly mock interviews"
                - "Prepare one unseen problem with hints ready for your partner"
                - "Hold a 90-minute swap mock with a partner @recurring(weekly:thu)"
                - "Save your partner's written feedback in your practice folder"
            - name: Monthly progress check against your baseline
              description: |-
                ## Purpose
                Weekly numbers are noisy, and morale tends to follow the last bad session rather than the trend. Once a month, comparing your time per medium problem, solve rate and mock feedback against the baseline gives a fairer picture. It is also the point to move the calendar if you are clearly ahead or behind.

                ## Milestones
                1. A monthly summary of solve rate and median time per medium problem.
                2. The summary compared with your baseline and last month.
                3. Patterns marked confident, improving or stuck.
                4. The preparation calendar adjusted if you are more than two weeks off plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly summaries compared with the baseline, each ending with a recorded decision to keep or adjust the calendar."
                cadence: rolling
              tasks:
                - "Work out this month's solve rate and median time per medium @recurring(monthly:5)"
                - "Mark each pattern confident, improving or stuck"
                - "Move the calendar if you are more than two weeks off plan"
            - name: Weekly online contest for speed under pressure
              description: |-
                ## Purpose
                Timed online contests put a clock and a ranking on unseen problems, which is the closest free imitation of interview pressure. Entering one a week, even if you only finish the first two problems, trains you to read fast, commit to an approach and keep going after a wrong submission. Contest-style tricks are not the goal; the steadiness is.

                ## Milestones
                1. One weekly or fortnightly contest chosen that fits your time zone.
                2. Contests entered on at least six weeks out of eight.
                3. Unsolved contest problems added to the re-solve queue.
                4. The number of problems finished per contest tracked over time.

                ## Notes
                Skip contests in the final week before an interview if a bad result would shake your confidence.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six contests entered in eight weeks, with problems finished per contest recorded and unsolved ones queued."
                cadence: rolling
              tasks:
                - "Pick a weekly online contest that runs at a time you can attend"
                - "Enter the contest and attempt at least the first two problems @recurring(weekly:sat)"
                - "Add the problems you did not finish to the re-solve queue"
            - name: Recorded think-aloud practice
              description: |-
                ## Purpose
                Interviewers score how you reason as much as whether the code works, and most people go silent exactly when they are thinking hardest. Recording yourself solving one problem a week and watching back five minutes of it shows the silences, the mumbling and the moments you jumped to code too early. It is uncomfortable once and very useful after that.

                ## Milestones
                1. One problem a week solved on video or audio while talking aloud.
                2. Five minutes of each recording watched back with notes.
                3. Silences longer than about thirty seconds counted and reduced over time.
                4. A short opening script for the first two minutes of any problem refined from the recordings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six weekly think-aloud recordings reviewed, with silence counts noted and a refined opening script written."
                cadence: rolling
              tasks:
                - "Set up screen and audio recording on your practice machine"
                - "Record yourself solving one problem aloud @recurring(weekly:tue)"
                - "Watch five minutes back and note every long silence"
                - "Rewrite your two-minute opening script from what you saw"
            - name: Maintenance mode between job searches
              description: |-
                ## Purpose
                Once you have a job, the skill fades quickly, and the next search often starts at short notice after a reorganisation or an unexpected recruiter message. A light monthly routine of a few problems and one mock a quarter keeps you within a fortnight of interview-ready instead of ten weeks. It is the cheapest insurance in this area.

                ## Milestones
                1. A monthly session of three problems across different patterns kept on the calendar.
                2. One mock interview held each quarter.
                3. The fluency sheet re-read and updated each quarter.
                4. The problem plan trimmed to a 40-problem refresher list.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly maintenance sessions held for six months and a 40-problem refresher list saved."
                cadence: cyclic
              tasks:
                - "Trim your full problem plan to a 40-problem refresher list"
                - "Solve three refresher problems across different patterns @recurring(monthly:20)"
                - "Re-read your fluency sheet and book a mock @recurring(quarterly)"
            - name: Clarifying questions and problem restatement
              description: |-
                ## Purpose
                Candidates who start coding in the first minute often solve a slightly different problem from the one asked. A habit of restating the problem, asking about input size, duplicates, empty input, sorting and expected output, and agreeing one worked example takes two or three minutes and is something interviewers look for. Practise it until it happens without thinking.

                ## Milestones
                1. A checklist of eight to ten standard clarifying questions written.
                2. The checklist used at the start of twenty practice problems.
                3. One worked example agreed out loud before every solution.
                4. Peer mock feedback showing no misread problems for four sessions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Clarifying questions and a worked example used at the start of twenty problems, with four mocks in a row free of misread problems."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write eight to ten clarifying questions you could ask on any problem"
                - "Use the checklist out loud at the start of your next five problems"
                - "Agree a worked example before writing any code"
                - "Ask your mock partner to note whether you clarified enough"
            - name: Talking through solutions aloud
              description: |-
                ## Purpose
                A clear spoken thread lets the interviewer follow you, offer a hint at the right moment and give credit for reasoning even if the code is unfinished. The skill is learnable: narrate the approach before coding, signpost each section as you write it and summarise at the end. Practise on easy problems first so the talking is not competing with the thinking.

                ## Milestones
                1. A simple narration structure written: approach, complexity, code, test.
                2. Ten easy problems solved while narrating every step.
                3. Ten medium problems solved with narration and no long silences.
                4. Peer feedback rating your communication as clear in three mocks.

                ## Notes
                Talking aloud does not mean talking constantly. It is fine to say you need thirty seconds to think, then share what you found.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty problems solved with full narration and three peer mocks rating communication as clear."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write your four-step narration structure on a card by your desk"
                - "Narrate ten easy problems from start to finish"
                - "Move on to medium problems once easy ones feel natural"
                - "Ask for a communication score in your next three mocks"
            - name: Brute force first, then improve
              description: |-
                ## Purpose
                Freezing while hunting for the optimal answer is one of the most common ways to fail a round that was winnable. Stating a brute force solution and its complexity first, then improving it step by step with a named technique, gives the interviewer something to work with and often leads you to the better answer. The improvement ladder is a habit, not a trick.

                ## Milestones
                1. Brute force stated with complexity within the first five minutes on ten problems.
                2. The bottleneck in each brute force named before improving it.
                3. A list of common improvements kept, such as hashing, sorting first, two pointers or memoisation.
                4. At least three mocks where you moved from brute force to a better solution out loud.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Brute force and its complexity stated early on ten problems, and three mocks showing an out-loud improvement from it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "State a brute force and its complexity before anything else on ten problems"
                - "Name the bottleneck that makes the brute force slow"
                - "Keep a list of improvements that removed each bottleneck"
                - "Practise saying the transition from brute force out loud in a mock"
            - name: Stating time and space complexity out loud
              description: |-
                ## Purpose
                Almost every interviewer asks for complexity, and a hesitant or wrong answer undermines an otherwise good solution. Being able to state time and space cost for your approach before coding, and confirm it after, covers loops, recursion depth, sorting and the hidden cost of string building or slicing. This project is about saying it clearly, not deriving new theory.

                ## Milestones
                1. The complexity of every common operation in your language's standard library listed.
                2. Complexity stated before coding on fifteen consecutive practice problems.
                3. Space cost including recursion stack and output size given on each.
                4. No complexity corrections from mock partners in three sessions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Correct time and space complexity stated before coding on fifteen consecutive problems and in three mocks."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the cost of the standard library operations you use most"
                - "State time and space complexity before coding on fifteen problems"
                - "Include recursion depth and output size in every space answer"
                - "Ask mock partners to challenge your complexity answers"
            - name: Testing and dry-running code by hand
              description: |-
                ## Purpose
                In many coding rounds you cannot run your code, and interviewers watch whether you find your own bugs before they point them out. Tracing your code line by line against a small example, then checking edge cases, catches most off-by-one and boundary errors. Candidates who test without being asked stand out.

                ## Milestones
                1. A habit of tracing one normal example through the finished code.
                2. Three edge cases checked on every problem, chosen from the input type.
                3. Bugs found by your own trace recorded in the log as a separate count.
                4. Testing done without prompting in four consecutive mocks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Self-testing completed unprompted in four consecutive mocks, with self-found bugs counted in the log."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Trace one normal example through your code before declaring it done"
                - "Check three edge cases chosen from the input type"
                - "Count bugs you found yourself in a separate log column"
                - "Ask mock partners to note whether you tested unprompted"
            - name: Edge-case catalogue by input type
              description: |-
                ## Purpose
                Edge cases are predictable once you group them by input: empty and single-element arrays, duplicates, negative numbers, integer overflow, empty strings, cycles in graphs, unbalanced trees. A personal catalogue built from your own missed cases means you check the right three things quickly instead of guessing. It grows each month from the mistake journal.

                ## Milestones
                1. A catalogue started with sections for arrays, strings, numbers, linked lists, trees, graphs and intervals.
                2. Every missed edge case from the log added under its input type.
                3. The catalogue used as a check on twenty problems.
                4. Missed edge cases falling as a share of mistakes over two months.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An edge-case catalogue with seven input sections, updated monthly from the log, and a falling share of edge-case mistakes."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Create catalogue sections for the seven most common input types"
                - "Copy every missed edge case from your log into its section"
                - "Add this month's missed edge cases to the catalogue @recurring(monthly:15)"
                - "Use the catalogue as your check list on the next twenty problems"
            - name: Recovering when you are stuck
              description: |-
                ## Purpose
                Getting stuck is normal in a hard round; what interviewers judge is what you do next. A small set of moves, such as working a second example by hand, simplifying the problem, trying a different data structure, or saying aloud where you are stuck and asking a targeted question, keeps the round alive. Taking a hint well is a skill that can be practised with a partner.

                ## Milestones
                1. Five unsticking moves written on a card and memorised.
                2. Ten hard or unfamiliar problems attempted using the moves before any hint.
                3. Mock partners asked to give one hint when you are stuck, and your response noted.
                4. A record of which moves worked most often.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten unfamiliar problems attempted using written unsticking moves, with notes on which moves and hints worked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write five moves to try when you are stuck on a card"
                - "Attempt ten unfamiliar problems using the moves before any hint"
                - "Ask a mock partner to give you one hint when you stall"
                - "Record which moves got you unstuck most often"
            - name: Clean interview code habits
              description: |-
                ## Purpose
                Interviewers read your code as a sample of how you would write it at work. Clear variable names, small helper functions, early returns for edge cases and no copy-paste branches make the solution easier to follow and easier to debug under pressure. These habits cost seconds and are noticed.

                ## Milestones
                1. A short style checklist for interview code written for your language.
                2. Ten past solutions rewritten to the checklist.
                3. Helper functions used where a block would otherwise repeat.
                4. Mock feedback rating code readability as good in three sessions.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written interview code style checklist applied to ten rewrites and rated good for readability in three mocks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a six-point style checklist for interview code"
                - "Rewrite ten of your past solutions to that checklist"
                - "Ask the agent to review three rewrites for naming and structure"
                - "Ask mock partners to score readability in your next three sessions"
            - name: Debugging and code-reading rounds
              description: |-
                ## Purpose
                Some companies replace or supplement algorithm problems with a round where you read unfamiliar code, find a bug or extend a small existing program. It rewards different skills: reading before changing, forming a hypothesis, adding a print or test and explaining the fix. If any target company uses this format, practise it directly rather than hoping algorithm practice transfers.

                ## Milestones
                1. Target companies that run a debugging or code-reading round identified.
                2. Five practice exercises completed on unfamiliar code with planted bugs.
                3. A method written for reading code: entry point, data flow, then the failing path.
                4. One mock held in this format with a partner who planted the bug.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five debugging exercises and one partner mock in this format completed, with a written code-reading method."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check which target companies run a debugging or code-reading round"
                - "Ask the agent to write a small program with two planted bugs"
                - "Find and fix the bugs while explaining your reasoning aloud"
                - "Swap a planted-bug exercise with your mock partner"
            - name: Online assessment practice
              description: |-
                ## Purpose
                Automated online assessments are often the first filter, scored by hidden test cases rather than a person, and they punish slow reading and untested edge cases. Practising on the same style of platform, with a strict timer, partial-credit strategy and the habit of writing your own extra tests, raises your pass rate at the step most candidates are cut. Read each company's rules on allowed resources carefully.

                ## Milestones
                1. The assessment platforms used by your target companies identified.
                2. Three full-length practice assessments done under time limits on a similar platform.
                3. A strategy written for when to move on and when to aim for partial credit.
                4. Your own extra test cases written for every problem before submitting.

                ## Notes
                Assessments are usually monitored and have rules about outside help. Follow them; a flagged result is worse than a low one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three timed practice assessments completed on a similar platform, with a written partial-credit strategy."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find which assessment platforms your target companies use"
                - "Take the platform's own practice test to learn the interface"
                - "Complete three timed full-length practice assessments"
                - "Write your rule for when to move on to the next question"
            - name: Weak-pattern remediation plan
              description: |-
                ## Purpose
                After a few weeks the log usually shows two or three patterns that stay stuck, most often dynamic programming, graphs or backtracking. A focused plan for each, with a short explanation source, five graded problems and a re-test date, fixes them faster than more random practice. Remediation ends with a timed re-test, not a feeling.

                ## Milestones
                1. Up to three stuck patterns named from the log and monthly check.
                2. One clear explanation source chosen for each.
                3. Five graded problems solved per pattern, easy to hard.
                4. A timed re-test of each pattern passed at your target time.

                ## Notes
                Start from the **Remediation plan** template. For a full rebuild of data structures and algorithms theory, use a separate study plan; this project is about interview performance on the patterns.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each named weak pattern re-tested under time and passed at the target time, recorded in the log."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Name up to three stuck patterns from your log"
                - "Choose one clear explanation source for each pattern"
                - "Solve five graded problems for the first pattern"
                - "Schedule a timed re-test for each pattern @recurring(monthly:18)"
            - name: Mock interview service or peer mocks only
              description: |-
                ## Purpose
                Paid mocks with experienced interviewers give calibrated feedback but cost real money per session, while peer mocks are free but less reliable. Deciding how many paid sessions, if any, are worth it and when to place them, often one early to calibrate and one or two before the real loop, avoids both overspending and under-preparing.

                ## Milestones
                1. Peer mock feedback so far summarised in a paragraph.
                2. Up to three paid mock options compared on cost, interviewer background and feedback format.
                3. A decision recorded on the number of paid sessions and their timing.
                4. Any booked sessions placed on the preparation calendar.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on paid mocks with number, timing and cost, consistent with the preparation budget cap."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Summarise what your peer mock feedback says so far"
                - "Compare up to three paid mock options on cost and feedback quality"
                - "Decide how many paid sessions you will book and when"
                - "Place any booked sessions on your preparation calendar"
            - name: Cutting time per medium problem
              description: |-
                ## Purpose
                Many candidates can solve medium problems but take 45 minutes when the round allows 25 to 30 for the code. Finding where the time goes, usually choosing the approach or debugging at the end, and drilling that phase specifically brings it down. Time each phase separately for two weeks before changing anything.

                ## Milestones
                1. Two weeks of problems timed by phase: understand, plan, code, test.
                2. The slowest phase identified from the data.
                3. A targeted drill for that phase run for three weeks.
                4. Median time per medium problem reduced to your target format's limit.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Median time per medium problem at or below the target format's limit across ten logged problems."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Time each phase of your next ten medium problems separately"
                - "Find the phase that takes the longest on average"
                - "Design a short drill for that phase and run it three times a week"
                - "Re-measure median time after three weeks"
            - name: Readiness decision before booking interviews
              description: |-
                ## Purpose
                Booking too early burns opportunities that may not come back for six to twelve months, while waiting for perfect readiness means never booking. Setting readiness criteria in advance, such as solving most unseen mediums within time and passing three mocks in a row, turns the decision into a check rather than a mood.

                ## Milestones
                1. Three or four readiness criteria written before you are close to them.
                2. The criteria checked against the log and mock feedback.
                3. A decision recorded to book, delay by two weeks or rebook practice targets.
                4. Recruiters contacted or interview dates requested once ready.

                ## Notes
                Many companies apply a cooling-off period before you can reapply after a rejection. Check the policy for your top choices.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written readiness criteria checked against logged evidence, with a recorded book or delay decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three or four readiness criteria you can check from the log"
                - "Check your last month of results against the criteria"
                - "Record whether you will book now or delay by two weeks"
                - "Ask recruiters for interview dates once the criteria are met"
            - name: Mock feedback themes across sessions
              description: |-
                ## Purpose
                Single pieces of feedback are easy to dismiss; the same comment from four different partners is not. Grouping every mock note by theme, such as clarifying, pace, communication, code quality and testing, shows the two or three things that most affect how interviewers will score you. It turns feedback into a short list of changes.

                ## Milestones
                1. All mock feedback notes gathered in one place.
                2. Comments grouped under five to seven themes with counts.
                3. The top two themes chosen as focus for the next month.
                4. Themes recounted monthly to see whether they shrink.

                ## Notes
                Start from the **Feedback themes** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A themed summary of all mock feedback with counts, updated monthly, and two focus themes chosen each month."
                cadence: rolling
              tasks:
                - "Gather every mock feedback note into one document"
                - "Group comments under five to seven named themes"
                - "Recount the themes and pick two focus areas @recurring(monthly:9)"
            - name: Recruiter coding screen preparation
              description: |-
                ## Purpose
                The first live coding screen, often 45 to 60 minutes with one or two problems, decides whether you get further, and it usually arrives with a week or two of notice. A focused plan for that window, checking the format, revising the most common patterns and running two mocks in the same tool, makes the most of the time you have.

                ## Milestones
                1. Format, length, tool and language rules confirmed with the recruiter in writing.
                2. The top eight patterns revised with one problem each.
                3. Two mocks held in the same tool the company uses.
                4. Questions for the interviewer prepared for the last five minutes.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The coding screen attended after two same-tool mocks, with format confirmed in writing beforehand."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the recruiter to confirm the format, tool and language rules by email"
                - "Revise one problem from each of your top eight patterns"
                - "Book two mocks in the same editor tool the company uses"
                - "Write two questions to ask the interviewer at the end"
            - name: Online assessment invitation response
              description: |-
                ## Purpose
                Assessment links often arrive with a deadline of a few days to a week, and starting one unprepared wastes it. Treating the invitation as a short event, with a chosen slot, a quiet room, a tested setup and a warm-up beforehand, gives you your best attempt. Most invitations allow one attempt only.

                ## Milestones
                1. The invitation's deadline, length and rules read and noted.
                2. A slot booked when you are fresh and will not be interrupted.
                3. The platform's practice test completed on the same machine.
                4. The assessment taken with a warm-up problem done beforehand.
              priority: medium
              deadlineOffsetDays: 7
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The assessment completed before its deadline after a practice test on the same machine."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note the assessment deadline, length and allowed resources"
                - "Block a fresh, uninterrupted slot before the deadline"
                - "Complete the platform's practice test on the machine you will use"
                - "Solve one warm-up problem an hour before starting"
            - name: Remote coding interview setup check
              description: |-
                ## Purpose
                Lost minutes to a failing microphone, a blocked editor link or a laptop update can sink a round before the problem starts. A full rehearsal of the setup, the same machine, room, camera, headset and shared tool, two days before the interview removes the avoidable risks. Keep a phone hotspot or second device as a fallback.

                ## Milestones
                1. The interview tool link tested on the machine you will use.
                2. Camera, microphone and lighting checked in the room you will use.
                3. Notifications, updates and other apps turned off for the day.
                4. A fallback plan written for connection failure, including the recruiter's contact.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full setup rehearsal done at least two days before the interview, with a written connection fallback."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open the interview tool link on the machine you will use"
                - "Test camera, microphone and lighting in the interview room"
                - "Turn off notifications and postpone system updates for the day"
                - "Write down the recruiter's phone number as a fallback"
            - name: In-person whiteboard coding round
              description: |-
                ## Purpose
                Writing code by hand on a whiteboard changes everything about pace: no undo, no scrolling and limited space. Practising on a real whiteboard or large paper, leaving room for insertions and writing small helper functions, prepares you for onsite rounds that still use this format. The logistics of arriving early and calm matter too.

                ## Milestones
                1. Five problems solved on a physical whiteboard or large paper.
                2. A layout habit set: example in one corner, code in the centre, tests on the side.
                3. Travel, timing and what to bring checked the day before.
                4. The round attended with at least one whiteboard mock in the preceding week.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Five whiteboard practice problems and one whiteboard mock done in the week before the onsite round."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get a whiteboard or a pad of large paper for practice"
                - "Solve five problems by hand using a fixed board layout"
                - "Hold one whiteboard mock with a partner in the final week"
                - "Check travel time and what to bring the day before"
            - name: Final two weeks before a coding round
              description: |-
                ## Purpose
                Cramming new patterns in the last fortnight tends to shake confidence without adding much. A taper, shifting to re-solves of known problems, two mocks, the fluency sheet and sleep, keeps you sharp and steady. The last day before the interview should be light.

                ## Milestones
                1. New patterns stopped fourteen days before the round.
                2. Daily re-solves from the confident and improving lists.
                3. Two mocks held in the final ten days.
                4. The day before kept to one easy problem and the fluency sheet.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two-week taper followed with no new patterns, two mocks and a light final day, recorded in the log."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Mark the date fourteen days before your round on the calendar"
                - "Switch practice to re-solves of patterns you already know"
                - "Book two mocks inside the final ten days"
                - "Plan a light final day of one easy problem and the fluency sheet"
            - name: Post-interview coding round debrief
              description: |-
                ## Purpose
                Within a day you forget the exact problem, where you stalled and what the interviewer hinted. Writing a short debrief straight after every real coding round, whatever the result, feeds the mistake journal and the next company's preparation. Over several interviews it shows patterns no practice session can.

                ## Milestones
                1. A debrief written within 24 hours of each real round.
                2. The problem, your approach, where you stalled and any hints recorded.
                3. One lesson added to the mistake journal or feedback themes.
                4. Thank-you or follow-up notes sent where the company expects them.

                ## Notes
                Start from the **Meeting notes** template. Respect any confidentiality you agreed to; keep the debrief for your own use.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A debrief saved within 24 hours of every real coding round, each with one lesson carried into the log."
                cadence: rolling
              tasks:
                - "Write the problem and your approach within 24 hours of the round"
                - "Note where you stalled and any hint the interviewer gave"
                - "Carry one lesson into your mistake journal"
                - "Keep each debrief private to your own preparation folder"
            - name: Student internship coding interviews
              description: |-
                ## Purpose
                Internship recruiting often opens many months before the placement, and coding rounds fall in the middle of coursework and exams. A student plan that starts early, uses term breaks for heavier practice, and keeps to two short sessions a week during exam periods fits real student life. Many internship rounds focus on easy and medium problems, so fundamentals matter most.

                ## Milestones
                1. Application windows for target internships noted from company and university careers pages.
                2. A practice plan fitted around the term timetable and exam dates.
                3. Heavier practice weeks placed in breaks.
                4. Two mocks done with classmates or a university careers service before the first screen.

                ## Notes
                University coding clubs and careers services often run free mock interviews. Ask early, as slots fill near deadlines.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A term-aware practice plan in use and two mocks completed before the first internship coding screen."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Note internship application windows from careers pages"
                - "Fit practice sessions around your term timetable and exams"
                - "Ask the careers service or coding club about free mock interviews"
                - "Check internship application opening dates each year @recurring(yearly)"
            - name: Preparing around a full-time engineering job
              description: |-
                ## Purpose
                Working engineers have the experience but not the hours, and preparation often happens tired at the end of the day. A realistic plan of five to seven hours a week, mostly early mornings or weekends, with clear limits so the current job does not suffer, is sustainable for two to three months. Keep interview preparation off work equipment and work time.

                ## Milestones
                1. A weekly hours budget agreed with yourself and anyone you live with.
                2. Practice slots fixed at times you are reliably fresh.
                3. Interview scheduling done with leave or flexible hours planned in advance.
                4. All preparation kept on personal devices and accounts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A five to seven hour weekly plan followed for eight weeks on personal devices, with leave planned for interview days."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Set a weekly preparation hours budget you can keep"
                - "Fix practice slots at times you are reliably fresh"
                - "Review the coming week's practice slots @recurring(weekly:sun)"
                - "Plan how you will take leave for interview days"
            - name: Returning to coding interviews after years away
              description: |-
                ## Purpose
                Senior engineers who last interviewed five or ten years ago often find that the coding round has changed and their whiteboard skills have faded, even though their real work is stronger than ever. A rebuild that starts with easy problems, rebuilds speed in your interview language and accepts a slower start avoids the confidence knock of jumping straight to hard problems.

                ## Milestones
                1. Current coding round formats checked rather than assumed from last time.
                2. Twenty easy problems solved to rebuild syntax and speed.
                3. The pattern plan worked at a steady pace for six weeks.
                4. Two mocks passed before the first real screen.

                ## Notes
                Expect the first two weeks to feel slow. That is the rust, not a lack of ability.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Twenty easy problems, six weeks of pattern practice and two passed mocks logged before the first real screen."
                cadence: phased
                effort_hours_estimate: "45"
              tasks:
                - "Check how coding rounds at your target companies work today"
                - "Solve twenty easy problems in your interview language"
                - "Start the pattern plan at three problems per session"
                - "Book two mocks before accepting a real screen"
            - name: Career changer and bootcamp graduate plan
              description: |-
                ## Purpose
                People entering software from another field or a bootcamp often know frameworks well but have less grounding in the problem patterns coding rounds test. A longer plan, starting with core data structures in your interview language and moving to patterns more slowly, sets realistic expectations. Many employers outside the largest firms use lighter coding rounds, so target the list accordingly.

                ## Milestones
                1. A target list weighted toward companies with practical or lighter coding rounds.
                2. Core data structures implemented once in your interview language.
                3. The pattern plan started at easy problems only for the first month.
                4. A mentor or peer group found for weekly mocks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A weighted target list, one month of easy pattern practice and a weekly mock partner in place."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Sort your target list by how demanding each coding round is"
                - "Implement a stack, queue, hash map and binary tree once each"
                - "Work only easy problems from the pattern plan for the first month"
                - "Ask your bootcamp alumni network for a weekly mock partner"
            - name: Coding interviews in a second language
              description: |-
                ## Purpose
                Thinking aloud in a language you learned later adds load at exactly the wrong moment, and it is a common reason strong engineers underperform. Preparing the phrases you need, for restating the problem, explaining an approach, asking for clarification and buying thinking time, frees your attention for the problem. Interviewers usually value clarity over polish.

                ## Milestones
                1. A phrase sheet for each stage of a coding round written and practised aloud.
                2. Technical vocabulary for your top patterns rehearsed.
                3. Five practice problems narrated fully in the interview language.
                4. Mock partners asked to flag moments where meaning was unclear.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A phrase sheet practised aloud and five fully narrated problems, with unclear moments flagged in mocks."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write phrases for restating, explaining, asking and pausing to think"
                - "Practise the phrase sheet aloud for ten minutes @recurring(weekly:wed)"
                - "Narrate five problems fully in the interview language"
                - "Ask mock partners to flag any moment your meaning was unclear"
            - name: Preparing in short slots as a parent or carer
              description: |-
                ## Purpose
                Parents and carers rarely get a clear two-hour block, so a plan built for long sessions fails in the first week. Splitting practice into 25-minute units, one problem each, with recognition notes that let you pick up where you stopped, keeps progress steady. Timed mocks still need one protected block a week, arranged in advance.

                ## Milestones
                1. Practice broken into 25-minute single-problem units.
                2. A visible list of the next three problems so no time is lost choosing.
                3. One protected 90-minute block arranged each week for timed work or mocks.
                4. Progress tracked by units completed rather than hours.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six weeks of 25-minute practice units logged, with one protected 90-minute block held in at least five of them."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the 25-minute gaps that appear in a typical week"
                - "Keep the next three problems written on a visible list"
                - "Arrange childcare or cover for one 90-minute block each week"
                - "Count units completed in your log instead of hours"
            - name: Practical coding exercises beyond algorithms
              description: |-
                ## Purpose
                Some rounds ask you to build something small and working rather than solve a puzzle: an LRU cache, a rate limiter class, a tokenizer, a simple in-memory key value store or an iterator. These test class design, interfaces and clean state handling within 45 minutes. Practising a handful prepares you for the companies that prefer this style.

                ## Milestones
                1. Eight practical exercises listed that match your target companies.
                2. Each built from scratch under a 45-minute timer with tests.
                3. A short design statement given before coding on each.
                4. One mock held in this style with a partner.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight practical exercises built under time with tests, and one partner mock in this style completed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List eight practical build exercises relevant to your targets"
                - "Build each in 45 minutes with a few tests"
                - "State the class interface out loud before coding"
                - "Ask a partner to run one practical exercise as a mock"
            - name: Interviewing others to sharpen your own rounds
              description: |-
                ## Purpose
                Sitting on the interviewer side shows you what separates a hire from a no-hire far more clearly than any guide. Volunteering to interview for your current employer, a university club or a peer group, and writing a structured evaluation each time, sharpens your own clarifying, communication and testing habits.

                ## Milestones
                1. An interviewer role found at work, a university or a peer group.
                2. A scoring sheet used covering problem solving, communication, code and testing.
                3. Six interviews conducted with written evaluations.
                4. Three lessons for your own interviews written down.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Six interviews conducted as interviewer with written evaluations, and three lessons for your own rounds recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask about joining the interviewer pool at work or a local club"
                - "Write a four-part scoring sheet for coding interviews"
                - "Hold one practice interview as the interviewer @recurring(monthly:22)"
                - "Write three lessons for your own interviews after six sessions"
            - name: Running a coding interview practice group
              description: |-
                ## Purpose
                Four to eight people preparing together in a small group keeps everyone consistent and makes finding mock partners trivial. Organising a weekly session with a rotating problem setter, paired mocks and a shared problem list works well for university cohorts, bootcamp alumni or colleagues. The organiser usually improves the most.

                ## Milestones
                1. Four to eight members recruited with similar goals.
                2. A weekly time and online or in-person place agreed.
                3. A rota for problem setting and mock pairings in use.
                4. Attendance and member outcomes recorded over two months.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A practice group of four or more meeting weekly for eight weeks with a rota and recorded attendance."
                cadence: rolling
              tasks:
                - "Invite four to eight people preparing for similar roles"
                - "Agree a weekly time and a place or video link"
                - "Run the weekly session with paired mocks @recurring(weekly:thu)"
                - "Keep a shared rota for who sets the problem each week"
            - name: Hard-problem stamina for top-tier rounds
              description: |-
                ## Purpose
                A few companies and higher-paying roles regularly use hard problems, sometimes two in a round, where the pattern is disguised or combined. Building stamina for these means longer focused sessions on hard problems, accepting partial progress and practising how to present an incomplete but well-reasoned solution. It is only worth doing once mediums are reliably within time.

                ## Milestones
                1. Mediums confirmed reliably within time before starting.
                2. Twenty hard problems attempted with a 45-minute limit each.
                3. Combined-pattern problems identified and the combination noted.
                4. Two mocks with hard problems held, presenting partial solutions clearly.

                ## Notes
                If your targets rarely ask hard problems, spend this time on mocks instead.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty timed hard problems attempted and two hard-problem mocks completed after mediums were reliably within time."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Confirm from your log that mediums are reliably within time"
                - "Attempt twenty hard problems with a 45-minute limit"
                - "Note which patterns each hard problem combined"
                - "Practise presenting a partial solution clearly in two mocks"
---

# Coding Interview Preparation

This area is for engineers and students getting ready for the live coding round: a problem, a shared editor or whiteboard, an interviewer watching, and somewhere between 30 and 60 minutes. It starts with foundations (the formats your target companies use, one interview language, a fluency sheet, a baseline, a pattern map and a dated calendar), then the practice machinery, the skills that interviewers actually score such as clarifying, thinking aloud, complexity and testing, decisions about readiness and weak patterns, the screens, assessments and interview days themselves, plans for students, working engineers, career changers and people returning after years away, and specialist work such as interviewing others and running a practice group.

The rhythm is a short daily warm-up, pattern blocks on set weekdays, a weekly timed session, a weekly mistake review, re-solves of failed problems, a weekly peer mock and think-aloud recording, and a monthly check against your baseline. The Metrics log, Purchase decision, Remediation plan, Feedback themes and Meeting notes templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
