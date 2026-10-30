---
id: tech-certifications.take-home-technical-assignments
name: Take-Home Technical Assignments
description: "Take-home coding and design tasks handled well: a written hour cap, a starter repo and readme, scoping to the time box, tests reviewers trust, the follow-up review, and clear rules on when to decline."
category: personal
version: 1.0.0
tags: [tech-certifications, take-home-technical-assignments, engineer, take-home-assignments, code-review, readme, hiring, job-search]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - feedback-themes
    - metrics-log
    - portfolio-piece
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Take-Home Technical Assignments
          description: "Handling take-home coding and design tasks: scoping to the time box, clean code and tests, a clear readme, the follow-up review and when to decline one."
          projects:
            - name: Personal take-home policy and hour cap
              description: |-
                ## Purpose
                Most candidates decide how much time to give a take-home only after they have started it, which is how a four-hour brief turns into a lost weekend. Writing down your hour cap, what you will do for free, when you will ask to be paid and which requests you decline makes every later decision quick and consistent. Recruiters respond better to a calm, pre-set rule than to a negotiation invented on the spot.

                ## Milestones
                1. A written maximum number of unpaid hours you will give any single take-home.
                2. A short list of conditions that make you decline, such as no time estimate or work that looks like a live product feature.
                3. A one-paragraph reply you can send to ask for a shorter task, a pairing session or payment.
                4. The policy saved where you can find it the moment a brief arrives.

                ## Notes
                A cap between three and six hours is common among experienced engineers, but the right number depends on how much you want the role. Write the number down before you see the next brief, not after.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A saved policy note states your unpaid hour cap, at least three decline conditions and a ready-to-send reply asking for an alternative."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the most unpaid hours you will give one take-home"
                - "List three situations in which you will decline a take-home outright"
                - "Draft a polite reply asking for a shorter task or a paid alternative"
                - "Reread the policy and adjust the hour cap after a year of applications @recurring(yearly)"
            - name: Starter repository for take-home submissions
              description: |-
                ## Purpose
                The first hour of many take-homes goes on scaffolding: a test runner, a linter, a formatter, a build script and a sensible folder layout. A ready starter repository in your main language, with continuous integration that runs tests on every push, gives that hour back to the actual problem and makes every submission look consistent.

                ## Milestones
                1. A private starter repo in your main language with a test runner, linter and formatter configured.
                2. One passing example test and one command that runs the whole check suite.
                3. A continuous integration workflow that runs the checks on every push.
                4. A second starter for the next most likely stack, such as a web front end or a small API.

                ## Notes
                Keep the starter plain. A reviewer should see a normal project, not your personal framework. Strip anything you would have to explain.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Cloning the starter and running one command installs dependencies, runs lint and tests, and passes in under five minutes on a clean machine."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a private repo for a take-home starter in your main language"
                - "Add a test runner, linter and formatter with one command that runs all three"
                - "Add a continuous integration workflow that runs the checks on push"
                - "Bump the starter's dependencies and confirm it still passes @recurring(quarterly)"
            - name: Submission readme skeleton
              description: |-
                ## Purpose
                Reviewers often read the readme before any code, and many decide in that first minute whether the submission is careful or rushed. A skeleton with fixed sections for how to run it, what was built, assumptions, trade-offs, what was left out and how long it took means you never write the most-read file at midnight from a blank page.

                ## Milestones
                1. A readme skeleton with sections for setup, running tests, design summary, assumptions, trade-offs, omissions and time spent.
                2. Setup instructions in the skeleton tested on a clean machine or container.
                3. An example filled-in readme from a practice task kept beside the skeleton.
                4. The skeleton copied into both starter repositories.

                ## Notes
                State the time you actually spent. Reviewers tend to trust a candidate who says six hours and explains the cuts more than one who claims three hours for six hours of work.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A readme skeleton with at least seven named sections sits in each starter repo, alongside one completed example."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the questions a reviewer asks in the first five minutes of reading a submission"
                - "Write a readme skeleton with one heading per question"
                - "Fill the skeleton in once for a small practice project"
                - "Copy the skeleton into each starter repository"
            - name: Brief-reading checklist for new assignments
              description: |-
                ## Purpose
                Failed take-homes are more often a misread brief than weak code: a missed requirement, an ignored hint about what is being assessed, or an input format nobody checked. A checklist you run on every brief before writing code pulls out the explicit requirements, the implied ones, the grading hints and the open questions while there is still time to ask.

                ## Milestones
                1. A checklist covering explicit requirements, implied requirements, constraints, grading hints, deliverables and deadlines.
                2. A habit of highlighting every must, should and may in the brief.
                3. A short list of questions to send the recruiter, produced from the checklist.
                4. The checklist tried on two old or sample briefs, with misses noted.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved brief-reading checklist has been run on at least two briefs, each producing a requirement list and a question list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect two sample take-home briefs from your own inbox or public examples"
                - "Write a checklist of what to extract from any brief before coding"
                - "Run the checklist on both briefs and list what you would ask the recruiter"
                - "Add any requirement you nearly missed to the checklist"
            - name: Clarifying questions to the recruiter or hiring team
              description: |-
                ## Purpose
                Briefs are often written quickly and leave out the things that matter: how much time is really expected, which language is preferred, whether tests are assessed and whether you may use libraries. Sending three or four precise questions early shows judgement, and the answers often cut the work in half.

                ## Milestones
                1. A reusable message with five standard questions about time, language, libraries, testing and delivery format.
                2. A rule to send questions within one working day of receiving a brief.
                3. Answers saved beside the brief in your tracker.
                4. Any answer that changed your scope written into the readme assumptions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved message template with at least five clarifying questions exists, and the answers to the last brief are filed in the tracker."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write five questions you would ask about any take-home brief"
                - "Turn them into a short, friendly message you can paste and edit"
                - "Send the questions for your current or next brief within one working day"
                - "File the answers beside the brief and update your assumptions"
            - name: Time-box plan and time log for each assignment
              description: |-
                ## Purpose
                Without a plan, the hours slide into polishing the parts you enjoy while the core requirement is half done. Splitting the hour cap into blocks for reading, core logic, tests, cleanup and the readme, and logging real time against each block, keeps the submission balanced and gives you an honest number for the readme.

                ## Milestones
                1. A default split of the hour cap into named blocks, with the readme and cleanup protected.
                2. A simple log with start and stop times for each block.
                3. One practice task completed inside the plan, with overruns noted.
                4. A revised default split based on where time actually went.

                ## Notes
                Protect the last fifth of the time for tests, cleanup and the readme. That block is the one most often sacrificed and the one reviewers notice first.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A default time-box split and a completed time log from one task exist, with at least one block adjusted from the evidence."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Split your hour cap into blocks for reading, core work, tests, cleanup and readme"
                - "Set up a time log with start and stop times per block"
                - "Run one practice task inside the plan and log every block"
                - "Move time between blocks where the log shows you ran over"
            - name: Development environment that runs any stack
              description: |-
                ## Purpose
                A brief that asks for a language or database you have not touched in a year can cost two hours before the first line of code. Version managers, a container runtime and a few ready database containers mean you can switch stacks in minutes and hand reviewers a project that runs the same on their machine.

                ## Milestones
                1. Version managers installed for the languages you are likely to be asked for.
                2. A container runtime installed, with one compose file that starts common databases.
                3. A tested way to give reviewers a one-command run, such as a container or a make target.
                4. A short note of the exact versions you used, ready for the readme.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "You can start a new project in two languages and a database container from scratch in under 20 minutes, timed once."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Install version managers for your two most likely take-home languages"
                - "Write a compose file that starts a relational database and a cache"
                - "Time yourself setting up a new project in a second language"
                - "Update language runtimes and container images on your machine @recurring(monthly:5)"
            - name: Baseline practice take-home under real conditions
              description: |-
                ## Purpose
                Most engineers have no idea how long a typical four-hour brief takes them until a real one is due. Doing one public sample brief under real rules, with the clock running and the full submission at the end, gives a baseline for speed, gaps and habits before anything counts.

                ## Milestones
                1. A public sample brief chosen that resembles the roles you are applying for.
                2. The task completed inside your hour cap with a time log.
                3. A full submission produced: code, tests and readme.
                4. A short list of the three biggest gaps, such as slow setup or thin tests.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One complete practice submission with a time log and a written list of three gaps exists before the first real take-home."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick one public sample take-home brief close to your target roles"
                - "Book a block of time and complete it under your hour cap"
                - "Write the readme as if a reviewer will read it tomorrow"
                - "Note the three gaps that cost you the most time"
            - name: Take-home tracker across all applications
              description: |-
                ## Purpose
                Two or three take-homes in flight at once, each with its own deadline, contact, brief version and follow-up stage, is too much to hold in your head. One tracker row per assignment, with received date, due date, hours spent, status and outcome, stops missed deadlines and shows later which companies were worth the effort.

                ## Milestones
                1. A tracker with columns for company, role, received, due, hour estimate, hours spent, status, contact and outcome.
                2. Every current and recent take-home entered.
                3. A folder per assignment holding the brief, correspondence and submission link.
                4. Outcome and feedback recorded for every closed assignment.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every take-home from the last six months has a tracker row with dates, hours and outcome, and a matching folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a tracker with one row per take-home and the key date columns"
                - "Enter every take-home you have received in the last six months"
                - "Make a folder per assignment for the brief, emails and submission"
                - "Record outcome and any feedback when an assignment closes"
            - name: Ownership, confidentiality and repo visibility check
              description: |-
                ## Purpose
                Some briefs say the code becomes the company's, some ask you not to publish, and some quietly expect a public repo. Checking the terms before you start avoids posting a solution you agreed to keep private, or signing away code you meant to reuse. A two-minute check per brief is enough once you know what to look for.

                ## Milestones
                1. A short list of the terms to look for: ownership, publishing, confidentiality agreements and reuse.
                2. A default of private repos shared by invitation unless the brief says otherwise.
                3. Terms noted in the tracker for every current assignment.
                4. A rule that no submission is made public without the company's agreement.

                ## Notes
                This is a checklist, not legal advice. If a brief asks you to sign an agreement you do not understand, ask the company to explain it or get professional advice before signing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each tracker row shows the ownership and publishing terms for its assignment, and all submissions are private unless permitted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the four terms you will check in every brief"
                - "Check the terms of your current assignments and note them in the tracker"
                - "Set your take-home repos to private by default"
                - "Ask the company before reusing any submission in a portfolio"
            - name: Fake recruiter and malicious repo safety check
              description: |-
                ## Purpose
                Attackers posing as recruiters send developers a take-home repo whose install script or dependency runs malware on the candidate's machine, often aimed at crypto wallets and saved passwords. A short safety routine before you run anything from an unfamiliar company, plus a throwaway environment to run it in, protects your laptop and your current employer's access.

                ## Milestones
                1. A checklist for verifying a recruiter and company before opening any repo they send.
                2. A disposable virtual machine or cloud sandbox for running unfamiliar code.
                3. A habit of reading install scripts and package manifests before installing anything.
                4. A rule never to run take-home code on a work laptop or a machine with wallets or saved credentials.

                ## Notes
                Warning signs include a recruiter account a few weeks old, pressure to run the project today, obfuscated scripts and a brief that is mostly 'fix this bug in our repo'. If in doubt, ask for the task as a written brief instead.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written verification checklist and a working disposable environment exist, and no unfamiliar take-home code has been run outside it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a checklist for verifying a recruiter, the company and the role"
                - "Set up a disposable virtual machine for running code from strangers"
                - "Read the install scripts and dependency list of the next repo before running it"
                - "Remove any take-home code you have run on a work or wallet machine"
            - name: Weekly take-home pipeline review
              description: |-
                ## Purpose
                Take-homes arrive at awkward moments and deadlines collide with work and family. A fifteen-minute weekly look at the tracker, upcoming due dates and hours available that week decides which brief gets your evenings, which needs a deadline extension request and which to decline.

                ## Milestones
                1. A fixed weekly slot for the review in your calendar.
                2. Each active assignment marked go, extend or decline at every review.
                3. Hours for the week blocked in the calendar for each go assignment.
                4. Closed rows archived monthly so the tracker shows only live work.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker shows a weekly review date for at least eight consecutive weeks, with a go, extend or decline call on each active row."
                cadence: rolling
              tasks:
                - "Book a recurring fifteen-minute slot for the pipeline review"
                - "Mark each active take-home go, extend or decline and block the hours @recurring(weekly:mon)"
                - "Ask for an extension on any brief that collides with another deadline"
                - "Archive closed tracker rows and note their outcomes @recurring(monthly:3)"
            - name: Monthly practice brief rotation
              description: |-
                ## Purpose
                Skills for take-homes fade between job searches, and the first real brief after a long gap is usually the weakest. One practice brief a month, rotated across an API, a front-end task, a data processing job and a small design document, keeps your setup fast and your judgement about scope fresh.

                ## Milestones
                1. A list of at least eight public practice briefs across four kinds of task.
                2. One brief completed each month inside a shortened time box.
                3. Each practice submission kept in a private practice folder with its time log.
                4. A note after each one of the one thing that went better than last time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six practice submissions in a row, one a month across at least three task types, each with a time log."
                cadence: rolling
              tasks:
                - "Collect eight public practice briefs across APIs, front end, data and design"
                - "Complete one practice brief inside a shortened time box @recurring(monthly:9)"
                - "Save each practice submission with its time log"
                - "Note what went better than the previous practice brief"
            - name: Post-submission debrief log
              description: |-
                ## Purpose
                Feedback on take-homes is scarce and easy to forget, yet the same comments tend to come back: too few tests, unclear structure, missed requirement, over-engineered. Logging every piece of feedback and your own reflection within a day of each outcome, then reviewing themes monthly, turns rejections into a short list of fixes.

                ## Milestones
                1. A debrief entry for every submission with outcome, feedback and your own view.
                2. A request for feedback sent after every rejection.
                3. Themes grouped and counted across all debriefs.
                4. The top recurring theme turned into a change in your checklist or starter repo.

                ## Notes
                Start from the **Feedback themes** template. Ask for feedback once, politely, and accept that many companies will not give it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every closed take-home has a debrief entry, and the themes page names at least one change made because of them."
                cadence: rolling
              tasks:
                - "Write a debrief for your last submission while you remember it"
                - "Send a short request for feedback after each rejection"
                - "Group the month's feedback into themes and count them @recurring(monthly:24)"
                - "Change one checklist or starter item because of the top theme"
            - name: Reusable snippets and patterns library
              description: |-
                ## Purpose
                Certain pieces appear in take-home after take-home: input validation, a small HTTP server, config loading, logging, a CSV parser with error rows, pagination. A small library of your own tested snippets, kept current, saves an hour per assignment and keeps quality high under time pressure.

                ## Milestones
                1. A private library of at least ten snippets you have used in take-homes.
                2. Each snippet with a test and a one-line note on when to use it.
                3. Outdated snippets updated or removed monthly.
                4. Snippets organised by language and task type.

                ## Notes
                Only reuse your own code, or code with a licence that allows it, and never paste a previous company's submission into a new one.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A snippet library with ten or more tested entries exists and shows an update in each of the last three months."
                cadence: rolling
              tasks:
                - "List the pieces of code you have rewritten in more than one take-home"
                - "Save the best version of each with a small test"
                - "Review the library and remove or update stale snippets @recurring(monthly:17)"
                - "Tag each snippet by language and task type"
            - name: Pre-submission quality gate
              description: |-
                ## Purpose
                In the last half hour before submitting, people forget to delete debug output, leave a secret in a config file or ship a readme whose setup steps no longer work. A short gate run before every submission catches the embarrassing mistakes that make a reviewer stop reading.

                ## Milestones
                1. A gate checklist covering a clean clone, tests, lint, secrets, debug output, readme steps and file names.
                2. The gate run on the last practice submission, with failures fixed.
                3. A secret scanning tool run as part of the gate.
                4. The gate reviewed each quarter against your debrief themes.

                ## Notes
                Start from the **Operational checklist** template. The single most useful step is cloning your submission into a fresh folder and following your own readme exactly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written gate of at least eight checks exists and has been run and ticked on every submission since it was created."
                cadence: rolling
              tasks:
                - "Write a gate of eight checks to run before any submission"
                - "Run the gate on your most recent practice submission"
                - "Add a secret scanning step to the gate"
                - "Compare the gate with your debrief themes and add missing checks @recurring(quarterly)"
            - name: Commit history that tells the story
              description: |-
                ## Purpose
                Reviewers often open the commit history to see how you worked: one giant commit at the end looks rushed, while small, well-named commits show the order of your thinking. Practising small commits with clear messages until it is automatic makes your history an extra piece of evidence rather than a liability.

                ## Milestones
                1. A short personal guide to commit size and message style.
                2. A practice repo where each change is one focused commit.
                3. Interactive rebase used comfortably to tidy a messy branch before sharing.
                4. The last two submissions with histories you would be happy to walk through.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your last two submissions each have at least eight focused commits with descriptive messages and no commit named fix or wip."
                cadence: rolling
              tasks:
                - "Write a five-line guide to your commit size and message style"
                - "Tidy a messy practice branch with an interactive rebase"
                - "Practise one small feature in strict one-change-per-commit steps @recurring(weekly:wed)"
                - "Read the history of your last submission as a reviewer would"
            - name: Weekly testing kata
              description: |-
                ## Purpose
                Thin or missing tests are among the most common reasons take-homes are rejected, and tests are the first thing dropped when time runs short. A thirty-minute weekly kata, writing tests first for a small function or endpoint, makes testing fast enough that it survives the time box.

                ## Milestones
                1. A list of twelve small kata problems suited to test-first practice.
                2. A kata completed weekly in your main take-home language.
                3. Comfort with your test runner's fixtures, parameterised tests and mocking.
                4. Time to write a basic test suite for a small module halved from your first attempt.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten weekly katas done in a row, with the time to a passing first suite recorded and lower at the end than the start."
                cadence: rolling
              tasks:
                - "Collect twelve small kata problems for test-first practice"
                - "Do a thirty-minute test-first kata in your main language @recurring(weekly:sat)"
                - "Learn parameterised tests and fixtures in your test runner"
                - "Record how long each kata took to a passing suite"
            - name: Follow-up rhythm after submission
              description: |-
                ## Purpose
                Submissions disappear into hiring queues and a polite nudge at the right time often moves them. A steady follow-up habit, with a thank-you on submission and a check-in after a set number of days, keeps you visible without pestering and closes the loop on assignments that would otherwise stay open for weeks.

                ## Milestones
                1. A thank-you message sent with every submission, listing what is included.
                2. A follow-up date set in the tracker for each submission.
                3. Follow-ups sent on time for every open assignment.
                4. Assignments with no reply after two follow-ups marked closed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each submission in the tracker has a thank-you date and a follow-up date, and none is open past two unanswered follow-ups."
                cadence: rolling
              tasks:
                - "Write a short submission message template with links and run steps"
                - "Set a follow-up date in the tracker when you submit"
                - "Send due follow-ups and update the tracker @recurring(weekly:thu)"
                - "Close any assignment with two unanswered follow-ups"
            - name: Scoping a brief to the time box
              description: |-
                ## Purpose
                Briefs often list more than anyone could build well in the time given, partly to see what you choose. Learning to sort requirements into must, should and could, build the musts to a high standard, and state clearly what you left out is the core skill of take-home work.

                ## Milestones
                1. A habit of writing a must, should and could list before coding.
                2. Three past or practice briefs scoped this way, each in under twenty minutes.
                3. One submission where a should item was deliberately cut and explained in the readme.
                4. A short note on how you decide which items are musts.

                ## Notes
                A smaller submission that works, is tested and explains its cuts usually beats a larger one that is half finished. Reviewers want to see judgement.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three briefs have written must, should and could lists, and one submission's readme explains at least one deliberate cut."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Sort the requirements of one past brief into must, should and could"
                - "Repeat the sort on two more briefs, timing each"
                - "Write how you will explain a deliberate cut in a readme"
                - "Compare your musts with a peer's for the same brief"
            - name: Tests reviewers read first
              description: |-
                ## Purpose
                Reviewers often run the tests before anything else and read them to understand what the code is meant to do. Learning which tests matter in a small project, such as core behaviour, edge cases and one end-to-end check, and naming them so they read like a specification, makes the suite do some of your explaining for you.

                ## Milestones
                1. A rule of thumb for test coverage in a four-hour project.
                2. Test names rewritten in one practice project so they read as behaviour.
                3. Edge cases listed from the brief and each covered by a test.
                4. One end-to-end or integration test that proves the whole thing runs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One practice project has behaviour-named tests, an edge case test for each listed edge case and one end-to-end test."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the tests of two well-regarded small open-source projects"
                - "Rename the tests in one practice project to describe behaviour"
                - "List edge cases from a brief and write a test for each"
                - "Add one end-to-end test that runs the program as a user would"
            - name: Code structure for a small reviewed project
              description: |-
                ## Purpose
                Take-homes are too small for heavy architecture and too visible for one long file. Learning a few simple structures, such as separating input and output from core logic, keeping functions short and naming things plainly, makes code easy to review in twenty minutes, which is often all the time a reviewer has.

                ## Milestones
                1. Two or three default layouts for the kinds of task you get most.
                2. One practice project refactored so core logic has no input or output code in it.
                3. A list of naming and size rules you apply before submitting.
                4. A peer able to explain your practice project after ten minutes of reading.

                ## Notes
                Over-engineering is a common rejection reason. Abstractions you cannot justify in one sentence of the readme probably do not belong.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One practice project refactored to a written layout, with a peer explaining its structure correctly after ten minutes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write default layouts for an API task and a data processing task"
                - "Refactor one practice project to keep core logic free of input and output"
                - "Read a chapter on naming and small functions from a clean code book @recurring(weekly:tue)"
                - "Ask a peer to explain your project after ten minutes of reading"
            - name: Writing trade-offs and next steps
              description: |-
                ## Purpose
                The trade-offs section is where you show the judgement a reviewer cannot see in code: why this data structure, why no database, what breaks at ten times the load, what you would do with another day. Learning to write that section in short, specific sentences often decides between a pass and a strong pass.

                ## Milestones
                1. Three trade-off statements written for a practice submission, each naming the option not taken.
                2. A next steps list ordered by value, not by ease.
                3. Known limitations stated plainly, including any bug you did not fix.
                4. The section reviewed by a peer for clarity.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One submission readme has at least three trade-offs, a ranked next steps list and stated limitations, reviewed by a peer."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write three trade-offs from your last practice task with the rejected option"
                - "Rank what you would do with one more day by value"
                - "State every known limitation and bug in plain words"
                - "Ask a peer whether a reviewer could disagree with you sensibly after reading"
            - name: Input validation, errors and edge cases
              description: |-
                ## Purpose
                Many take-homes are graded by running them against inputs the brief only hinted at: empty files, malformed rows, huge numbers, missing fields, concurrent requests. Practising deliberate validation and clear error messages turns a submission that crashes on the reviewer's first odd input into one that fails gracefully.

                ## Milestones
                1. A standard list of hostile inputs to try for files, APIs and command-line tools.
                2. One practice project hardened against every item on the list.
                3. Errors reported with clear messages and the right status codes or exit codes.
                4. Validation behaviour documented in the readme.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice project passes your full hostile input list without crashing and documents its error behaviour."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a list of hostile inputs for files, APIs and command-line tools"
                - "Run your last practice project against the list and note failures"
                - "Fix each failure with validation and a clear error message"
                - "Document the error behaviour in the readme"
            - name: Front-end take-home craft
              description: |-
                ## Purpose
                Front-end briefs, such as a small search interface or a form with an API, are judged on more than appearance: state handling, loading and error states, accessibility and how it behaves on a phone. Practising those basics in one compact project prepares you for the questions front-end reviewers reliably ask.

                ## Milestones
                1. One practice interface with loading, empty and error states for every data call.
                2. Keyboard navigation and labelled controls checked with an accessibility tool.
                3. The layout checked at phone and desktop widths.
                4. Component tests for the main user flow.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One practice front end shows all three data states, passes an automated accessibility check and has tests for its main flow."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a small search interface against a public API"
                - "Add loading, empty and error states to every request"
                - "Run an accessibility checker and fix the issues it lists"
                - "Write component tests for the main user flow"
            - name: Data and analytics take-home craft
              description: |-
                ## Purpose
                Data engineering and analytics take-homes, such as cleaning a messy dataset, building a small pipeline or answering questions with SQL, are judged on reproducibility and honesty about data quality as much as on answers. Learning to package the work so a reviewer can rerun it from raw files is the skill that separates strong submissions.

                ## Milestones
                1. A practice dataset cleaned with every dropped or changed row explained.
                2. The pipeline runnable from raw files with one command.
                3. SQL or transformation steps kept in files under version control, not only in a notebook.
                4. A short findings note that states assumptions and data quality problems.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice data submission reruns from raw files with one command and includes a findings note listing data quality issues."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download a messy public dataset and list its quality problems"
                - "Clean it with scripts that log every dropped or changed row"
                - "Make the whole pipeline run from raw files with one command"
                - "Write a one-page findings note with assumptions stated"
            - name: Written design document assignments
              description: |-
                ## Purpose
                Senior roles sometimes replace coding with a written design task: describe how you would build a feature or service, in a few pages, by a deadline. Unlike a live design round, the reviewer reads it cold, so structure, diagrams and explicit assumptions carry all the weight.

                ## Milestones
                1. A document outline covering context, requirements, assumptions, design, alternatives, risks and rollout.
                2. One practice design document written to a page limit.
                3. At least one clear diagram made with a tool that exports cleanly.
                4. The document reviewed by a peer for gaps.

                ## Notes
                Stay inside the page limit if one is given. Keep a sentence on what you would ask the team, since a written task cannot ask questions back.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A practice design document within its page limit, with a diagram, an alternatives section and peer comments addressed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a design document outline you can reuse"
                - "Pick a practice prompt and write the document to a four-page limit"
                - "Draw one diagram that a reader could follow without the text"
                - "Ask a peer to list the gaps and fix the top two"
            - name: Accept, negotiate or decline a specific take-home
              description: |-
                ## Purpose
                Each brief deserves a quick, honest call against your policy: how much you want this role, how far you are in the process, how long it really looks and whether the company respects candidates' time. Scoring every new brief the same way stops you saying yes out of anxiety and no out of tiredness.

                ## Milestones
                1. A five-question scoring sheet covering interest, stage, estimated hours, fairness and alternatives.
                2. Every new brief scored within a day of arriving.
                3. The decision and reason recorded in the tracker.
                4. Decline messages sent promptly and politely when the score says no.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every brief received after this project has a recorded score, decision and reason in the tracker within a day."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write five scoring questions for any new take-home"
                - "Score your current or next brief and record the decision"
                - "Draft a courteous decline message you can reuse"
                - "Compare scores with outcomes after five decisions"
            - name: Asking for a shorter, paired or paid alternative
              description: |-
                ## Purpose
                Many companies will offer a shorter version, a live pairing session or payment if a strong candidate asks, especially for senior roles or multi-day tasks. Practising the request, with a reason and a concrete alternative, turns a take-home you would decline into one you can do on fair terms.

                ## Milestones
                1. Three request versions: shorter scope, live pairing instead, and payment for long work.
                2. A note of which alternative suits which kind of brief.
                3. At least one request sent and its response recorded.
                4. A list of companies that offered alternatives, for future reference.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three saved request messages exist, and at least one has been sent with the company's answer recorded in the tracker."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a request for a reduced scope with your reason"
                - "Write a request offering a live pairing session instead"
                - "Write a request for payment for work longer than your cap"
                - "Record each response and whether the company agreed"
            - name: Language and framework choice when the brief is open
              description: |-
                ## Purpose
                When a brief says any language, the choice still sends a signal: the company's own stack shows interest, your strongest language shows quality, and an unusual choice can confuse reviewers. Deciding in advance how you choose saves agonising and avoids picking a framework you will fight for half the time box.

                ## Milestones
                1. A default rule for choosing between the company's stack and your strongest language.
                2. A list of the companies in your pipeline with their main languages.
                3. Frameworks you will avoid in take-homes written down with reasons.
                4. The rule applied to your current or next brief.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice rule exists and the language decision for the latest brief is recorded with the rule's reasoning."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note the main language of each company in your pipeline"
                - "Write your rule for when to use their stack or your strongest language"
                - "List frameworks too heavy for a time-boxed task"
                - "Apply the rule to your next open brief"
            - name: Live demo deployment or local run only
              description: |-
                ## Purpose
                Hosted demos can impress a busy reviewer, but a live demo costs time, may cost money and adds a cloud bill or a broken link if left running. Deciding when a live deployment adds value, and having a cheap, tested way to do it and tear it down, avoids both missed chances and forgotten bills.

                ## Milestones
                1. A rule for when a live demo is worth it, such as front-end or product roles.
                2. One free or low-cost hosting route tested end to end.
                3. A teardown step and a budget alert in place for any cloud account used.
                4. Every live demo in the tracker with a date to take it down.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written demo rule, one tested hosting route and a budget alert on the account exist, with teardown dates for any live demo."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write when a hosted demo helps and when local run steps are enough"
                - "Deploy a practice project on a free or low-cost host"
                - "Set a budget alert on any cloud account used for demos"
                - "Add a teardown date to the tracker for each live demo"
            - name: AI coding assistant rules and disclosure
              description: |-
                ## Purpose
                Company rules on AI assistants in take-homes range from forbidden to expected, and reviewers increasingly ask how you used them. Knowing each company's rule, keeping a note of what the assistant did, and being ready to explain every line yourself protects your integrity and your chances in the follow-up review.

                ## Milestones
                1. The AI policy for each current assignment found in the brief or asked of the recruiter.
                2. A personal rule: you only submit code you can explain line by line.
                3. A short disclosure line ready for the readme when assistants were used.
                4. Policies rechecked each quarter, since they change often.

                ## Notes
                When the rules are unclear, ask. Assuming it is allowed and being found out in the review is far worse than a short email.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each tracker row records the company's AI policy, and every submission made with an assistant carries a disclosure line."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the AI assistant policy for each current assignment"
                - "Ask the recruiter where the brief says nothing about AI tools"
                - "Write a one-line disclosure for the readme"
                - "Recheck the AI policies of companies in your pipeline @recurring(quarterly)"
            - name: Rebuilding a rejected take-home
              description: |-
                ## Purpose
                Rejected submissions with feedback are the best practice material you will ever get, because you know exactly what fell short. Rebuilding one properly afterwards, without the time box, fixes the gap for good and can become a portfolio piece if the company's terms allow.

                ## Milestones
                1. The rejection feedback, or your own best guess, written as a fix list.
                2. The submission rebuilt in a fresh branch addressing every item.
                3. A before and after comparison in a short note.
                4. Permission confirmed before anything is made public.

                ## Notes
                Start from the **Portfolio piece** template if the terms allow you to show it. Remove the company's name and brief text unless they agree otherwise.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One rejected submission rebuilt with every fix-list item addressed and a before and after note written."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Turn the rejection feedback into a numbered fix list"
                - "Rebuild the submission in a new branch item by item"
                - "Write a short note comparing before and after"
                - "Check the company's terms before showing it anyone"
            - name: Cutting setup time across assignments
              description: |-
                ## Purpose
                Setup, the time from opening the brief to the first meaningful test passing, is pure overhead and often eats a quarter of the time box. Measuring it on every task and attacking the slowest steps, such as dependency installs, database setup or deciding on structure, buys back real hours for the work that is scored.

                ## Milestones
                1. Setup time measured for the last three tasks.
                2. The slowest setup step identified from the logs.
                3. One fix made to the starter or environment for that step.
                4. Setup time logged monthly, with the trend visible.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log shows setup time for at least five tasks, with the latest at least a third shorter than the first."
                cadence: rolling
              tasks:
                - "Work out setup time from your last three time logs"
                - "Name the single slowest setup step"
                - "Change the starter or environment to remove that step"
                - "Log setup time from the month's tasks in the metrics log @recurring(monthly:12)"
            - name: Delivering a live take-home end to end
              description: |-
                ## Purpose
                When a real brief arrives, everything in this area comes together under a deadline: the policy check, the questions, the scope list, the time-boxed build, the gate and the submission message. Running the whole sequence deliberately, once, shows what works under real pressure and what needs fixing before the next one.

                ## Milestones
                1. The brief scored, clarified and scoped within one day of arriving.
                2. The build completed inside the hour cap with a full time log.
                3. The quality gate passed and the readme finished.
                4. The submission sent before the deadline with a thank-you message, and a debrief written after.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One real take-home submitted on time, inside the hour cap, with gate, readme, time log and debrief all on file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Score and scope the brief the day it arrives"
                - "Send your clarifying questions within one working day"
                - "Build inside the time box, logging every block"
                - "Run the quality gate and send the submission with a short message"
            - name: Preparing for the code review interview
              description: |-
                ## Purpose
                Many companies follow a passed take-home with a session where engineers walk through your code, question choices and probe what you would change. Candidates who built good code still fail here by forgetting their own reasoning a week later, so rereading, listing likely questions and rehearsing answers out loud is worth a few hours.

                ## Milestones
                1. The submission reread in full within two days of the review.
                2. A list of fifteen likely questions with short answers.
                3. Weak spots in the code identified and an honest answer prepared for each.
                4. A rehearsal of the walkthrough out loud, ideally with a peer asking questions.

                ## Notes
                Admitting a weakness and explaining how you would fix it usually lands better than defending it. Reviewers are testing how you take feedback as much as the code.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written list of fifteen questions with answers and one rehearsed walkthrough completed before the review session."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Reread your submission and its readme in full"
                - "Write fifteen questions a reviewer is likely to ask"
                - "Prepare honest answers for the three weakest parts of the code"
                - "Rehearse a ten-minute walkthrough with a peer asking questions"
            - name: Extending your submission live in the review
              description: |-
                ## Purpose
                Some follow-up rounds ask you to add a feature or fix a bug in your own take-home while an interviewer watches. Practising small live extensions on your submission beforehand, with the environment ready and the tests passing, removes the fumbling that eats the first ten minutes.

                ## Milestones
                1. The submission running locally on the machine you will interview from.
                2. Three likely extensions listed, such as a new field, a filter or a rate limit.
                3. Each extension practised once in thirty minutes, with tests.
                4. Screen sharing and editor font size checked before the session.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three likely extensions practised on your submission within thirty minutes each, with the environment checked the day before."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Run the submission on the machine you will interview from"
                - "List three extensions an interviewer might ask for"
                - "Practise each extension in thirty minutes with a test"
                - "Check screen sharing and editor font size the day before"
            - name: Submission day packaging and clean-machine run
              description: |-
                ## Purpose
                The way a submission arrives matters: a repo invitation the reviewer cannot accept, a zip with a hidden folder of secrets, or a project that only runs on your laptop all cost points before the code is read. A submission day routine, ending with a run on a clean machine, makes delivery dull and reliable.

                ## Milestones
                1. Delivery format confirmed: repo invitation, zip, upload portal or platform.
                2. The project run from a clean clone or fresh container using only the readme.
                3. Build output, local config and dependency folders excluded from the package.
                4. Receipt confirmed by the recruiter or platform.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The submission ran from a clean clone using only the readme, and receipt was confirmed before the deadline."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Confirm the delivery format and who needs access"
                - "Clone the submission into a fresh folder or container and follow the readme"
                - "Remove build output, local config and dependency folders from the package"
                - "Ask the recruiter to confirm the submission arrived"
            - name: Timed project-style online assessments
              description: |-
                ## Purpose
                Some companies use proctored platforms that hand you a small codebase and a fixed window of a couple of hours to add features or fix bugs, with no chance to ask questions. Practising in that format, with an unfamiliar repo and a hard stop, builds the habit of reading code quickly and shipping the safest useful change.

                ## Milestones
                1. The platform and rules for your upcoming assessment confirmed with the recruiter.
                2. Two practice sessions on unfamiliar open-source repos with a hard time limit.
                3. A routine for the first fifteen minutes: run tests, read the structure, list tasks.
                4. The assessment completed with a short notes file explaining choices, if the platform allows.
              priority: medium
              deadlineOffsetDays: 28
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two timed practice sessions on unfamiliar repos completed before the assessment, and the assessment itself sat on schedule."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the recruiter which platform and rules the assessment uses"
                - "Pick a small unfamiliar open-source repo and a starter issue"
                - "Fix the issue inside a hard ninety-minute limit"
                - "Write your first-fifteen-minutes routine for unfamiliar code"
            - name: Paid trial project or multi-day work trial
              description: |-
                ## Purpose
                Contract roles, small companies and some senior hires use a paid trial of a few days on real or realistic work. These need terms agreed in writing first, a clear definition of done, and more communication than a normal take-home, since you are being judged as a colleague as well as a coder.

                ## Milestones
                1. Scope, payment, ownership, length and access agreed in writing before starting.
                2. A short daily update sent to your contact during the trial.
                3. Work delivered against the agreed definition of done.
                4. A closing summary of what was done, what is left and any risks.

                ## Notes
                Check whether a paid trial affects your current employment contract or visa conditions before you agree. Ask the right professional if you are unsure.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written trial agreement, daily updates for each trial day and a closing summary delivered to the company."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask for scope, payment, ownership and length in writing"
                - "Check your current employment contract for conflicts"
                - "Send a short end-of-day update on each trial day"
                - "Write a closing summary of done, outstanding and risks"
            - name: Take-homes as a new graduate or junior engineer
              description: |-
                ## Purpose
                At junior level, reviewers look for fundamentals rather than architecture: working code, sensible names, some tests, a clear readme and honest notes about what you did not know. Juniors also face more take-homes and less room to refuse them, so a plan that keeps quality steady across several at once matters.

                ## Milestones
                1. A short list of what reviewers expect at junior level, drawn from posted rubrics and mentors.
                2. Two practice submissions that meet that list completely.
                3. A realistic weekly cap on take-homes alongside study or a first job.
                4. A mentor or senior friend who has reviewed one submission.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two practice submissions meet a written junior-level checklist, and one has been reviewed by a more experienced engineer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask two working engineers what they look for in junior take-homes"
                - "Write a junior-level checklist from their answers"
                - "Complete two practice briefs against the checklist"
                - "Ask a mentor to review one submission and note their comments"
            - name: Take-homes as a senior or staff engineer
              description: |-
                ## Purpose
                Senior candidates are judged on judgement: what they chose not to build, how they reasoned about scale and operations, and how they communicated it. They also have more room to push back on long unpaid tasks, so a senior approach combines firmer limits with submissions where the readme does much of the work.

                ## Milestones
                1. A senior hour cap and a list of alternatives you will offer.
                2. A readme section on operations: monitoring, failure modes, rollout.
                3. One practice submission where the written reasoning is as strong as the code.
                4. A record of how often companies accepted your alternatives.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A senior-level readme section on operations exists, and the tracker shows how each recent alternative request was answered."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set a senior hour cap and choose the alternatives you will propose"
                - "Add an operations section to your readme skeleton"
                - "Write the reasoning for one practice task as for a staff-level review"
                - "Record how companies responded to your alternative requests"
            - name: Take-homes around children or caring duties
              description: |-
                ## Purpose
                Parents and carers rarely have a free weekend for a take-home, and a deadline set without asking can clash with school runs or a hospital visit. Planning the work in short, protected blocks, and asking for a deadline that fits your real week, keeps you in the process without burning out the household.

                ## Milestones
                1. A list of the realistic blocks you have in a typical week, with their lengths.
                2. A standard line asking for a deadline that fits those blocks.
                3. Take-home work split into tasks that fit a single short block.
                4. Agreement at home on which evenings are for take-homes during a search.

                ## Notes
                Asking for a later deadline is normal and rarely held against candidates. You do not need to explain your family situation in detail.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written weekly block plan exists, and the last take-home was submitted using only those blocks without missing its agreed deadline."
                cadence: rolling
              tasks:
                - "Map the free blocks in your typical week and their lengths"
                - "Write a line asking for a deadline that fits those blocks"
                - "Agree take-home evenings with your partner or household"
                - "Plan the coming week's take-home blocks around family commitments @recurring(weekly:sun)"
            - name: Take-homes for career changers and bootcamp graduates
              description: |-
                ## Purpose
                Career changers often hear back mainly through take-homes, since their CV has fewer obvious signals. The submission can do what the CV cannot, if it shows good habits and connects to the domain you came from, such as a finance, health or logistics angle in the readme.

                ## Milestones
                1. Two or three domains from your previous career where you can add insight.
                2. One practice submission whose readme shows domain understanding.
                3. Habits from bootcamp projects that reviewers dislike, such as missing tests, fixed.
                4. A short line for applications that points to your best practice submission.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One practice submission with tests and a domain-informed readme exists, and an application line points to it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List domains from your previous career you understand well"
                - "Choose a practice brief that touches one of those domains"
                - "Fix the bootcamp habits a reviewer would notice in your practice code"
                - "Write a line for applications that points to your best submission"
            - name: Take-homes while employed full time
              description: |-
                ## Purpose
                Doing a take-home while employed raises practical and contractual questions: whose laptop, whose time, and whether anything resembles your employer's work. Keeping take-homes strictly on personal equipment and personal time, and away from anything close to your employer's product, protects your current job.

                ## Milestones
                1. Employment contract read for clauses on outside work and intellectual property.
                2. All take-home work on a personal machine and personal accounts.
                3. A rule to decline briefs that overlap closely with your employer's product.
                4. Take-home blocks scheduled outside working hours.

                ## Notes
                This is organisational, not legal advice. If a contract clause worries you, ask an employment adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your contract's relevant clauses are noted, and the tracker confirms every current take-home is on personal equipment and outside work hours."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your employment contract for outside work and ownership clauses"
                - "Move any take-home work off your work laptop and accounts"
                - "Write a rule for briefs that overlap with your employer's product"
                - "Block take-home time outside your working hours"
            - name: Designing a fair take-home for your own team
              description: |-
                ## Purpose
                Engineers who hire eventually have to set a take-home, and a poor one wastes candidates' time and filters for free evenings rather than skill. Designing a task that takes a stated two to four hours, tests what the job actually needs and offers an alternative format makes hiring fairer and draws stronger applicants.

                ## Milestones
                1. The skills the role needs listed and matched to what the task will test.
                2. A brief with a stated time expectation, clear deliverables and the AI policy.
                3. The task piloted by two colleagues, with their real time recorded.
                4. An alternative format, such as a pairing session, offered for candidates who ask.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A take-home brief piloted by two colleagues inside its stated time, with an alternative format documented."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the skills the role needs and which the task should test"
                - "Write a brief with time expectation, deliverables and AI policy"
                - "Ask two colleagues to complete it and record their real time"
                - "Review the brief against recent candidate feedback each hiring year @recurring(yearly)"
            - name: Grading rubric and reviewer calibration
              description: |-
                ## Purpose
                Without a rubric, take-home reviews drift with each reviewer's taste and the same submission can pass with one person and fail with another. A written rubric, calibrated by having reviewers score the same submissions and discussing the gaps, makes decisions consistent and easier to explain to candidates.

                ## Milestones
                1. A rubric with four to six criteria and descriptions of each score level.
                2. Three past or sample submissions scored independently by each reviewer.
                3. Differences of more than one level discussed and the rubric wording fixed.
                4. Calibration repeated each quarter while the take-home is in use.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written rubric exists, and the last calibration shows reviewers within one level of each other on at least four of five criteria."
                cadence: cyclic
              tasks:
                - "Draft a rubric with criteria and score level descriptions"
                - "Ask each reviewer to score the same three submissions alone"
                - "Discuss gaps of more than one level and fix the rubric wording"
                - "Run a calibration round with every active reviewer @recurring(quarterly)"
            - name: Public showcase of take-home style projects
              description: |-
                ## Purpose
                Two or three public projects built to take-home standards give recruiters a sample before they set you a task, and some companies will skip their take-home if they can review existing work. A handful of polished repos, each with tests and a strong readme, can save you several assignments a year.

                ## Milestones
                1. Two or three public projects chosen to match your target roles.
                2. Each with tests, continuous integration and a full readme.
                3. A short list of links ready to offer instead of a take-home.
                4. The projects refreshed each quarter so dependencies are current.

                ## Notes
                Start from the **Portfolio piece** template for each project. Never publish a company's brief or your submission to it without permission.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two public repos with passing continuous integration and full readmes, offered to at least one company in place of a take-home."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose two project ideas that match the roles you target"
                - "Build each to your quality gate standard"
                - "Offer the links to a company as an alternative to its take-home"
                - "Update dependencies and fix failing builds in the showcase repos @recurring(quarterly)"
            - name: Infrastructure and DevOps take-homes
              description: |-
                ## Purpose
                Infrastructure briefs, such as writing infrastructure as code for a small service or a deployment pipeline, carry costs and risks a coding task does not: real cloud bills, leaked keys and resources left running. Handling them with a dedicated sandbox account, budget alerts and a tested destroy step lets you show real skill without paying for it later.

                ## Milestones
                1. A dedicated sandbox account or project used only for take-homes.
                2. Budget alerts set at a low threshold on that account.
                3. Every resource created by code, with a tested destroy command.
                4. A readme section on cost, security and how a reviewer can run it in their own account.

                ## Notes
                Never put cloud keys in the repo, even in history. Use short-lived credentials and run a secret scan before sharing.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sandbox account with budget alerts exists, and one practice infrastructure task deploys and destroys cleanly from its readme."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Create a cloud sandbox account used only for take-homes"
                - "Set a low budget alert on the sandbox account"
                - "Deploy and destroy a small practice service from code alone"
                - "Add a cost and security section to the infrastructure readme"
            - name: Mentoring others through their take-homes
              description: |-
                ## Purpose
                Experienced engineers are often asked by friends, juniors or former colleagues to look over a take-home before it goes in. Offering a structured review, with your quality gate and a few direct questions, helps them far more than general encouragement and sharpens your own eye for what reviewers notice.

                ## Milestones
                1. A short review format: run it, read the readme, check tests, give three comments.
                2. A clear rule that you comment but do not write their code.
                3. Two reviews given and the main points recorded.
                4. Your own checklist updated with anything new you spotted.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Two take-home reviews given using a written format, each with three comments recorded, and one checklist change made as a result."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a four-step format for reviewing someone else's take-home"
                - "Offer a review to one junior engineer or peer"
                - "Give three specific comments without rewriting their code"
                - "Add anything new you noticed to your own quality gate"
---

# Take-Home Technical Assignments

This area is for engineers who get sent a brief, a repo or a design prompt and a few days to return it, and who want to do it well without giving away a week of evenings. It starts with foundations (your own hour cap and decline rules, a starter repository, a readme skeleton, a brief-reading habit, a safety check on unknown repos and a tracker), then the operating routines that keep several take-homes moving, the skills reviewers actually score such as scoping, tests, structure and written trade-offs, the decisions about language, deployment and AI assistants, the submission and the follow-up review round, plans for juniors, seniors, parents, career changers and people already in a job, and specialist work such as designing and grading a fair take-home for your own team.

The rhythm is a weekly pipeline review and chase, a weekly testing kata and commit drill, a monthly practice brief, monthly toolchain and snippet upkeep, a monthly look at your debrief themes and setup times, and quarterly refreshes of the starter repo, the quality gate and any rubric you own. The Operational checklist, Feedback themes, Metrics log and Portfolio piece templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
