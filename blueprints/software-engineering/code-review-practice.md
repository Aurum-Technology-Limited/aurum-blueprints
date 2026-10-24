---
id: software-engineering.code-review-practice
name: Code Review Practice
description: "Written review guidelines, fast turnaround, small pull requests and comments that teach, plus the routines and skills that make reviews catch real problems for engineers and teams."
category: business
version: 1.0.0
tags: [software-engineering, code-review-practice, engineer, team, pull-requests, peer-review, code-quality, feedback]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - feedback-themes
    - skills-matrix
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Code Review Practice
          description: "Running code reviews that catch real problems, share knowledge and stay fast, with clear expectations for authors and reviewers alike."
          projects:
            - name: Written code review guidelines for the team
              description: |-
                ## Purpose
                Most review friction comes from unspoken expectations: one reviewer blocks on naming, another approves anything that compiles, and authors cannot tell which standard applies today. A two-page guideline that says what reviews are for, what reviewers must check, what they should leave alone and how fast to respond gives everyone the same contract. Write it with the team rather than for them, so it describes the practice you want rather than one person's preferences.

                ## Milestones
                1. A draft guideline covering purpose, scope of a review, response time, approval rules and tone.
                2. Comments on the draft gathered from every engineer who reviews regularly.
                3. A final version agreed in a team meeting and stored in the repository next to the contributing guide.
                4. A link to the guideline added to the pull request template and the onboarding notes.

                ## Notes
                Keep it short enough to reread in five minutes. A guideline nobody can recall is a guideline nobody follows.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A team-agreed review guideline of two pages or less is committed to the repository and linked from the pull request template."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect any existing review rules from the wiki, chat pins and the contributing file"
                - "Ask the agent to draft a two-page guideline from those notes and your team's stack"
                - "Circulate the draft and ask every regular reviewer for three comments"
                - "Agree the final wording in the next team meeting and commit it"
            - name: Review turnaround baseline from the last 90 days
              description: |-
                ## Purpose
                Teams usually guess their review speed, and the guess is almost always kinder than the data. Pulling time to first review, time to approval and pull request size for the last 90 days from your hosting platform gives an honest starting point. Every later change to the review process can then be judged against numbers rather than feelings.

                ## Milestones
                1. Merged pull requests from the last 90 days exported with opened, first review, approved and merged timestamps.
                2. Median and 90th percentile time to first review calculated in working hours.
                3. Lines changed per pull request summarised, with the share above 400 lines noted.
                4. The baseline figures recorded with the date range and the method used.

                ## Notes
                Start from the **Metrics log** template. Use working hours, not calendar hours, or weekends will dominate the numbers.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Median and 90th percentile time to first review and pull request size for the last 90 days are recorded with the date range and method."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the last 90 days of merged pull requests through the platform API or a reporting tool"
                - "Calculate median and 90th percentile time to first review in working hours"
                - "Summarise pull request size and the share above 400 changed lines"
                - "Record the baseline and the method so the next measurement is comparable"
            - name: Pull request template with context and test notes
              description: |-
                ## Purpose
                Reviewers waste the first ten minutes of many reviews working out why a change exists and how it was tested. A short pull request template asking for the problem, the approach, how to test it, the risk and any screenshots front-loads that context. Authors also catch their own gaps while filling it in, before anyone else has to point them out.

                ## Milestones
                1. A template with sections for why, what changed, how it was tested, risk and rollback, and screenshots.
                2. The template committed so the hosting platform fills it in on every new pull request.
                3. Ten pull requests opened with the template, and the sections nobody uses identified.
                4. A trimmed version kept, with any unused section removed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pull request template is live in the repository and at least ten pull requests have been opened with it before one round of trimming."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the questions reviewers ask most often in recent pull request threads"
                - "Write a template with why, what, testing, risk and screenshot sections"
                - "Commit the template in the location your hosting platform reads"
                - "Remove any section left blank in most of the first ten pull requests"
            - name: Code owners file and review routing
              description: |-
                ## Purpose
                When nobody in particular owns a directory, review requests go to whoever answers fastest, and the person who knows the payment logic never sees the change to it. A code owners file maps paths to the people or teams who must review them, so expertise lands where the risk is. It also shows plainly which parts of the codebase have no owner at all.

                ## Milestones
                1. A map of the main directories and services with the person or team who knows each best.
                2. A code owners file committed, using teams rather than individuals wherever possible.
                3. Unowned paths listed and each one assigned or consciously left open.
                4. Required review from code owners switched on for the protected branches.

                ## Notes
                Point owners at teams, not single people, or one holiday stalls every change in that path.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A code owners file covers every top-level path, with unowned areas listed, and owner review is required on protected branches."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the top-level directories and services in the main repository"
                - "Ask each team lead which paths their team should own"
                - "Commit the code owners file with team handles rather than individuals"
                - "Check the code owners file for people and teams that no longer exist @recurring(quarterly)"
            - name: Branch protection and required approval settings
              description: |-
                ## Purpose
                A review rule that the repository does not enforce is a suggestion, and suggestions get skipped at five o'clock on a Friday. Setting branch protection so the main branch needs an approving review, passing checks and resolved conversations makes the agreed process the default. Decide deliberately who can bypass it and how a bypass is recorded.

                ## Milestones
                1. Current protection settings on the main and release branches written down.
                2. Required approvals, dismissal of stale approvals and required conversation resolution decided.
                3. The settings applied on every protected branch.
                4. A written bypass rule naming who may override and where the reason is logged.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Main and release branches require an approving review and resolved conversations, and a written bypass rule exists."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Screenshot the current protection settings on the main and release branches"
                - "Decide whether new commits should dismiss existing approvals"
                - "Apply the agreed settings to every protected branch"
                - "Write the bypass rule and add it to the review guideline"
            - name: Severity labels for review comments
              description: |-
                ## Purpose
                Authors cannot tell a passing thought from a merge blocker when every comment reads the same, so they either argue over trivia or ignore something important. Agreeing a small set of prefixes, such as blocking, suggestion, question and nit, makes the weight of each comment explicit. Reviews get shorter because nobody has to negotiate what was meant.

                ## Milestones
                1. Four or five comment labels chosen, each with a one-line definition.
                2. A rule agreed that only blocking comments stop a merge.
                3. The labels added to the review guideline with an example of each.
                4. Two weeks of reviews checked to see whether the labels are being used.

                ## Notes
                The open Conventional Comments format is a good starting point if you do not want to invent your own.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A set of comment labels with definitions is in the review guideline and appears on most review comments within two weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick four or five comment labels and write a one-line definition of each"
                - "Agree in the team channel that only blocking comments stop a merge"
                - "Add the labels and an example of each to the review guideline"
                - "Count how many comments carried a label after two weeks"
            - name: Small pull request size agreement
              description: |-
                ## Purpose
                Review quality falls sharply once a diff passes a few hundred lines: reviewers skim, approve and hope. A team agreement on a target size, with a clear exception for generated files and mechanical renames, keeps changes small enough to read properly. It also makes changes faster to merge and easier to revert.

                ## Milestones
                1. A target size agreed, for example under 400 changed lines excluding generated code.
                2. Accepted exceptions listed, such as lockfiles, migrations of generated clients and pure renames.
                3. An automatic size label or warning added to pull requests over the target.
                4. A month of pull requests compared with the baseline share above the target.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written size target with exceptions is in the guideline, and the share of pull requests over it is measured one month later."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the share of last quarter's pull requests over 400 changed lines"
                - "Propose a size target and a list of exceptions to the team"
                - "Add a size label or warning to pull requests that exceed the target"
                - "Compare the share over target after one month with the baseline"
            - name: Author self-review before requesting review
              description: |-
                ## Purpose
                Many first-round review comments are things the author would have spotted by reading their own diff in the review tool: debug logging, a stray file, a missing test. Reading your own pull request as a reviewer would, before you request anyone, saves a round trip and protects your colleagues' attention. The habit takes five minutes and shows up immediately in shorter review threads.

                ## Milestones
                1. A personal self-review list of five checks written down.
                2. Self-review done in the review tool, not the editor, on every pull request for two weeks.
                3. Annotations left on the tricky parts of your own diff before requesting review.
                4. A note of how many first-round comments you received before and after.

                ## Notes
                Reading the diff in the same view your reviewer will use is the point. The editor hides what the reviewer sees.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pull request you open for two weeks has a self-review pass and author annotations before review is requested."
                cadence: rolling
              tasks:
                - "Write a five-item self-review list in your notes"
                - "Open your next diff in the review tool and read every line before requesting review"
                - "Leave author comments explaining the two least obvious changes"
                - "Count first-round comments on your last five pull requests for comparison"
            - name: Personal reviewer checklist
              description: |-
                ## Purpose
                Experienced reviewers rarely work from memory alone; they carry a short list of the things they have learned to look for, often from bugs they once missed. Building your own checklist, tuned to your codebase's usual failure points, makes your reviews consistent on tired days. Keep it to ten items or fewer so you actually use it.

                ## Milestones
                1. A checklist of eight to ten items drawn from recent bugs and incidents in your codebase.
                2. The checklist used on ten consecutive reviews.
                3. Items that never caught anything replaced with ones that would have.
                4. The checklist shared with the team as an example, not a rule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A personal review checklist of ten items or fewer has been used on ten consecutive reviews and revised at least once."
                cadence: rolling
              tasks:
                - "List three bugs from the last year that a reviewer could have caught"
                - "Turn each into a checklist item, then add your standing checks"
                - "Use the checklist on your next ten reviews and mark which items found something"
                - "Swap one unused checklist item for a lesson from a recent miss @recurring(monthly:4)"
            - name: Daily review queue slot
              description: |-
                ## Purpose
                Waiting for review is the largest single source of idle time in most delivery pipelines, and it grows when everyone reviews only once their own work is done. A fixed slot each day, before starting new work or straight after lunch, keeps the queue short without fragmenting your focus. Authors stop chasing and start planning around a predictable response.

                ## Milestones
                1. A daily review slot chosen and blocked in your calendar.
                2. Your queue cleared to zero or answered with a status note at each slot for two weeks.
                3. Notifications set so review requests arrive in one place rather than five.
                4. Your own time to first review checked after a month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your daily review slot is in the calendar and your personal median time to first review is under one working day after a month."
                cadence: rolling
              tasks:
                - "Block a 30 to 45 minute daily review slot in your calendar"
                - "Route all review request notifications to a single inbox or view"
                - "Clear or answer every review request waiting for you @recurring(daily)"
                - "Check your own median time to first review after one month"
            - name: Weekly stale pull request sweep
              description: |-
                ## Purpose
                Pull requests that sit for a week rot: they conflict with main, their authors lose context and the eventual review is shallower. A short weekly sweep of everything open longer than three working days, nudging, reassigning or closing each one, stops the slow pile-up. It takes fifteen minutes and is often the single most effective habit a team adopts.

                ## Milestones
                1. A saved search for pull requests open more than three working days.
                2. One named person each week responsible for the sweep.
                3. Each stale pull request nudged, reassigned, split or closed with a reason.
                4. The count of stale pull requests tracked for eight weeks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly sweep has run for eight consecutive weeks and the count of pull requests open over three working days is recorded each time."
                cadence: rolling
              tasks:
                - "Save a search for open pull requests older than three working days"
                - "Agree who runs the sweep and how the role rotates"
                - "Nudge, reassign or close every stale pull request in the saved search @recurring(weekly:mon)"
                - "Note the stale count in the team channel after each sweep"
            - name: Reviewer load balancing rotation
              description: |-
                ## Purpose
                On most teams two or three people do more than half the reviewing, usually the most senior ones, and they quietly burn out while others never learn the codebase. A light rotation or automatic assignment spreads requests, and a weekly glance at who reviewed what keeps it honest. Spreading load is also how knowledge spreads.

                ## Milestones
                1. Last month's review counts per person pulled from the platform.
                2. An assignment method chosen: round robin, load balanced or a named reviewer of the week.
                3. Automatic assignment configured for the team's review requests.
                4. A weekly check showing no one carrying more than double the team median.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Automatic reviewer assignment is on and no reviewer carries more than double the team median for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Pull last month's completed reviews per person from the platform"
                - "Choose round robin or load balanced assignment and configure it"
                - "Check this week's review counts per person and rebalance if needed @recurring(weekly:thu)"
                - "Raise any persistent imbalance in the next team retrospective"
            - name: Monthly review health numbers
              description: |-
                ## Purpose
                Without a regular look at the numbers, review speed drifts slowly enough that nobody notices until a sprint stalls. Once a month, record time to first review, time to merge, pull request size and the share of pull requests merged with no comments at all. Four numbers, ten minutes, and a trend that tells you when to act.

                ## Milestones
                1. A monthly log with four review measures and the baseline as the first row.
                2. Three consecutive months recorded.
                3. Any measure that moved more than 25 percent explained in a sentence.
                4. One action agreed whenever a measure is worse two months running.

                ## Notes
                Start from the **Metrics log** template. A rise in pull requests merged with zero comments can mean rubber stamping, not efficiency.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months of time to first review, time to merge, size and zero-comment share are logged with explanations for large moves."
                cadence: rolling
              tasks:
                - "Set up the log with the four measures and the baseline row"
                - "Record this month's four review measures in the log @recurring(monthly:9)"
                - "Write a sentence on any measure that moved more than 25 percent"
                - "Bring two months of worsening numbers to the team retrospective"
            - name: Review comment themes log
              description: |-
                ## Purpose
                The same comment written thirty times is a missing guideline, a missing test helper or a missing lint rule. Logging recurring comment themes once a month shows which lessons are not sticking and which belong in automation instead of a human's attention. It also gives new reviewers a clear picture of what this team cares about.

                ## Milestones
                1. A log of comment themes with a count and an example link for each.
                2. The top three themes identified after the first month.
                3. Each top theme assigned an outcome: guideline update, tooling, shared helper or training.
                4. Themes that drop away noted as fixed.

                ## Notes
                Start from the **Feedback themes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A themes log with counts exists and each of the current top three themes has an assigned outcome."
                cadence: rolling
              tasks:
                - "Skim the last 30 merged pull requests and tally repeated comment themes"
                - "Pick the top three themes and assign each an outcome"
                - "Update the themes log from this month's review comments @recurring(monthly:18)"
                - "Hand style-only themes to whoever owns the linter configuration"
            - name: Monthly sample audit of merged pull requests
              description: |-
                ## Purpose
                Speed numbers say nothing about whether reviews are any good. Picking five merged pull requests at random each month and rereading them with fresh eyes shows whether reviewers checked the tests, questioned the design or simply approved. The point is learning about the practice, not marking individuals.

                ## Milestones
                1. A short scoring sheet: tests examined, risk discussed, questions asked, issues found after merge.
                2. Five random merged pull requests audited each month for three months.
                3. A pattern summary shared with the team without naming people.
                4. One guideline or checklist change made from what the audits found.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fifteen randomly chosen merged pull requests have been audited over three months and at least one guideline change made from the findings."
                cadence: rolling
              tasks:
                - "Write a four-question scoring sheet for review depth"
                - "Audit five randomly chosen merged pull requests against the sheet @recurring(monthly:26)"
                - "Share an anonymised pattern summary with the team"
                - "Propose one guideline change based on three months of audits"
            - name: Escaped defect trace back to review
              description: |-
                ## Purpose
                Every bug that reaches production passed through at least one review, and asking what the reviewer could reasonably have seen is one of the best ways to sharpen the practice. Tracing each month's escaped defects back to the pull request that introduced them separates bugs no review would catch from ones a better checklist would. Keep the tone curious: the reviewer is not the cause.

                ## Milestones
                1. Last month's production bugs linked to the pull requests that introduced them.
                2. Each one classed as catchable in review, catchable by tests only, or not reasonably catchable.
                3. Catchable patterns added to the team checklist or guideline.
                4. Three months of classifications kept to show whether the catchable share is falling.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of escaped defects are linked to their pull requests and classified, with catchable patterns added to the checklist."
                cadence: rolling
              tasks:
                - "List last month's production bugs from the issue tracker"
                - "Find the pull request that introduced each one using the version history"
                - "Classify each escaped bug and add catchable patterns to the checklist @recurring(monthly:13)"
                - "Share the classification summary with the team without naming reviewers"
            - name: Quarterly review guideline refresh
              description: |-
                ## Purpose
                Guidelines written once go stale as the stack, the team and the risks change: a new framework arrives, a service gets split, people join. A quarterly half hour with the metrics, the themes log and the audit findings keeps the guideline describing what the team actually does. Remove as much as you add.

                ## Milestones
                1. Metrics, comment themes and audit findings gathered before the session.
                2. A 30-minute session held with every regular reviewer invited.
                3. The guideline updated, with at least one item removed or simplified.
                4. Changes announced in the team channel with a one-paragraph summary.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter the guideline is reviewed in a team session, updated, and the change summary posted in the team channel."
                cadence: cyclic
              tasks:
                - "Gather the latest metrics, themes log and audit summary into one page"
                - "Hold a 30-minute guideline refresh session with the reviewers @recurring(quarterly)"
                - "Commit the updated guideline with at least one removal or simplification"
                - "Post a short summary of what changed and why"
            - name: Writing review comments that are kind and specific
              description: |-
                ## Purpose
                Vague comments such as this is confusing tell the author nothing, while a wall of rewrites tells them you did not trust them to fix it. Good comments name the concern, explain the consequence, suggest a direction and ask rather than order. Practising this on your own past comments changes how reviews feel for everyone on the receiving end.

                ## Milestones
                1. Twenty of your recent review comments collected and reread.
                2. Each rewritten where needed to state the concern, the reason and a suggested direction.
                3. A personal set of opening phrases for questions, suggestions and blockers.
                4. A colleague's feedback on whether your comments read differently after a month.

                ## Notes
                Comment on the code, never the person. Write we and this function rather than you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty past comments are rewritten against a concern, reason and direction pattern, and a colleague has given feedback on your recent comments."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Collect twenty of your own review comments from the last two months"
                - "Rewrite any that lack a concern, a reason or a suggested direction"
                - "Write a short list of phrases you will use for questions and blockers"
                - "Reread five of this month's comments against the pattern @recurring(monthly:21)"
            - name: Reading an unfamiliar diff efficiently
              description: |-
                ## Purpose
                Reading a diff top to bottom in file order is the slowest way to understand it. Reviewers who start from the description, then the tests, then the entry point, and only then the supporting changes, understand intent first and spot gaps faster. This project builds that reading order into habit on real pull requests outside your usual area.

                ## Milestones
                1. A written reading order: description, tests, entry point, data changes, then the rest.
                2. Five reviews done on code outside your usual area using the order.
                3. The time each took and the issues found noted.
                4. A short note on which steps helped most, added to your checklist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five reviews on unfamiliar code are completed with a written reading order, with time and findings recorded for each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write your reading order on one card or note"
                - "Volunteer for five reviews in a part of the codebase you rarely touch"
                - "Check out the branch locally and run the tests for at least two of them"
                - "Note time taken and issues found, then keep the steps that helped"
            - name: Reviewing for correctness, edge cases and error paths
              description: |-
                ## Purpose
                Happy paths are what authors test; empty lists, nulls, time zones, retries and partial failures are where production breaks. A reviewer who habitually asks what happens when this is empty, slow or called twice catches the bugs that matter. Practise on a set of past bug-fix pull requests where you already know the answer.

                ## Milestones
                1. A list of edge-case prompts for your stack: empty, null, duplicate, concurrent, slow, unicode, time zone.
                2. Ten past bug-fix pull requests found and the original change reviewed blind.
                3. A score of how many of the real bugs you would have caught.
                4. The prompts that worked added to your reviewer checklist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten original changes behind known bugs are reviewed blind, with a recorded catch rate and the effective prompts added to your checklist."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a list of edge-case questions for your language and domain"
                - "Find ten bug-fix pull requests and locate the change that introduced each bug"
                - "Review each original change blind and note what you would have flagged"
                - "Add the questions that caught real bugs to your checklist"
            - name: Reviewing the tests in a pull request
              description: |-
                ## Purpose
                Tests are often approved with a glance at the green tick, yet a test that asserts nothing or mocks the thing under test gives false confidence for years. Learning to read tests as carefully as production code, checking that they would fail if the change were wrong, is one of the highest-value review skills. Try breaking the code and seeing whether the tests notice.

                ## Milestones
                1. A short list of test smells: no assertion, over-mocking, testing the mock, order dependence, sleeps.
                2. Five reviews where you deliberately broke the change locally to see whether tests failed.
                3. At least one weak test found and improved with the author.
                4. Test review questions added to the team guideline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five reviews include a local break-the-code check of the tests, and test review questions are added to the guideline."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a list of five test smells common in your codebase"
                - "On your next review, invert one condition locally and run the tests"
                - "Raise any test that still passes with the author as a blocking comment"
                - "Propose two test review questions for the team guideline"
            - name: Spotting risky security patterns during review
              description: |-
                ## Purpose
                Reviewers are not penetration testers, but they are the last human to see a change before it ships, and a handful of patterns cause most incidents: string-built queries, unchecked redirects, secrets in code, missing authorisation checks on a new endpoint. Knowing those patterns well enough to pause and ask, then pulling in the security owner, is the reviewer's part. Leave the deeper testing to the security programme.

                ## Milestones
                1. A one-page list of the risky patterns most relevant to your stack.
                2. The list cross-checked with whoever owns application security at your organisation.
                3. A rule in the guideline for when a reviewer must request a security review.
                4. Five reviews completed with the list open.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page risky patterns list is agreed with the security owner and the guideline names when a security review must be requested."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read your organisation's secure coding guide or a widely used top ten risks list"
                - "Write one page of the patterns that apply to your stack"
                - "Ask the security owner to correct and approve the list"
                - "Add the rule for requesting a security review to the guideline"
            - name: Reviewing database migrations safely
              description: |-
                ## Purpose
                Migrations are the one kind of change that cannot always be rolled back by reverting the commit, and a locking index build or a dropped column can take a service down. Reviewers need a specific set of questions: will it lock a large table, is it backward compatible with the running code, what happens if it fails halfway, how big is the table. Build that set once and use it on every migration.

                ## Milestones
                1. A migration review checklist covering locks, backward compatibility, data volume, rollback and timing.
                2. The checklist linked from the pull request template whenever migration files change.
                3. Three migrations reviewed with it and any gaps added.
                4. A rule agreed for which migrations need a second reviewer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A migration review checklist is linked from the template and has been used on three migrations, with a second-reviewer rule agreed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the migration problems your team has hit in the last two years"
                - "Write a checklist covering locks, compatibility, volume and rollback"
                - "Link the checklist from the template for changes touching migration files"
                - "Agree which migrations require a second reviewer with database experience"
            - name: Receiving review feedback well as an author
              description: |-
                ## Purpose
                Authors who argue every comment get fewer, shallower reviews, and authors who silently accept everything stop thinking. The useful middle is to assume good intent, ask when a comment is unclear, push back with reasons when you disagree and say thanks when a reviewer saves you from a bug. It is a skill like any other, and it shapes how your team reviews you.

                ## Milestones
                1. A personal rule for responding: acknowledge, clarify, decide, explain.
                2. Every comment on your next ten pull requests answered or resolved with a short reason.
                3. At least one disagreement taken to a short call instead of a long thread.
                4. A note of one thing you changed in your own coding from review feedback.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every review comment on ten consecutive pull requests is answered with a reason, and one change to your own practice is recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write your four-step response rule in your notes"
                - "Reply to every comment on your next ten pull requests before resolving it"
                - "Move any thread past three replies to a short call and summarise the outcome"
                - "Record one habit you changed because of review feedback"
            - name: Removing style nitpicks from human review
              description: |-
                ## Purpose
                If reviewers still comment on spacing, import order or quote style, human attention is going on work a machine does better and authors feel picked at. Finding the style comments in recent reviews and handing each one to the formatter or linter owner frees reviews for design and correctness. Then add a line to the guideline saying reviewers do not comment on anything the tools enforce.

                ## Milestones
                1. Style comments from the last 50 reviews counted and grouped.
                2. Each group handed to the formatter or linter owner as a proposed rule.
                3. A guideline line added: reviewers do not comment on anything automated checks enforce.
                4. A recount after two months showing fewer style comments.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Style comments in reviews are counted before and two months after style groups were handed to tooling, and the guideline line is in place."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Search the last 50 reviews for comments about formatting and style"
                - "Group them and send the list to whoever owns linter configuration"
                - "Add the no style comments on automated rules line to the guideline"
                - "Recount style comments two months later"
            - name: One approval or two decision
              description: |-
                ## Purpose
                Two required approvals feels safer, but on many teams the second reviewer skims because the first already looked, doubling the wait without doubling the scrutiny. One approval plus a code owner on risky paths is often both faster and safer. Make the choice with your own data rather than by default.

                ## Milestones
                1. Current approval rule and its origin written down.
                2. Turnaround and escaped defects compared for single and double approved changes, if both exist.
                3. A decision recorded: one approval, two, or two only for named paths.
                4. Branch protection updated to match, with a review date in six months.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written approval rule decision with its reasoning is recorded, branch protection matches it, and a six-month review date is set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find out when and why the current approval rule was set"
                - "Compare turnaround for single and double approved pull requests"
                - "Write the decision and reasoning in a short decision note"
                - "Update branch protection and put a six-month review in the calendar"
            - name: Stacked pull requests or a review tool change
              description: |-
                ## Purpose
                Teams that want small changes but ship features in big chunks often need stacked pull requests, where a feature arrives as a chain of small dependent reviews. Doing that well can mean a different tool or a command line helper on top of your hosting platform. Compare two or three options on a real feature before anyone commits.

                ## Milestones
                1. The problem stated: which workflows the current tool makes slow or awkward.
                2. Two or three options shortlisted, including staying as you are.
                3. One real feature delivered as a stack on the leading option.
                4. A decision recorded with cost, learning curve and the authors' verdict.

                ## Notes
                Start from the **Purchase decision** template. Staying put is a valid outcome if the trial shows the pain was elsewhere.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One real feature has been delivered as stacked pull requests on a trial option, and a written decision compares at least two options."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write down the three review workflows that feel slowest today"
                - "Shortlist two stacking tools or workflows plus the current setup"
                - "Deliver one real feature as a stack using the leading option"
                - "Record the decision with cost, effort and the authors' verdict"
            - name: Live review sessions for large changes
              description: |-
                ## Purpose
                Some changes are too big or too subtle for asynchronous comments: a new module, a tricky refactor, a concurrency fix. A 30-minute walkthrough where the author shares the screen and the reviewer asks questions can replace days of threads. Decide when the team uses one, so it is a tool rather than a fallback after a row.

                ## Milestones
                1. Criteria agreed for when a live session is offered, such as over 600 lines or a new architectural pattern.
                2. Three live sessions held and the outcomes summarised back on the pull request.
                3. Time to approval for those changes compared with similar asynchronous ones.
                4. The criteria added to the guideline.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three live review sessions are held with written summaries on the pull requests, and criteria for offering them are in the guideline."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Propose criteria for when a live review session is offered"
                - "Run the next qualifying review as a 30-minute screen share"
                - "Post a summary of decisions on the pull request after each session"
                - "Add the agreed criteria to the review guideline"
            - name: Disagreement escalation rule for reviews
              description: |-
                ## Purpose
                Twenty replies on a review thread is a meeting held badly. A simple rule, such as move to a call after three exchanges and ask a named tie-breaker if the call does not settle it, ends stand-offs without anyone losing face. Write down too that the author owns the code and may accept a non-blocking suggestion or decline it.

                ## Milestones
                1. A three-step escalation rule drafted: thread, call, tie-breaker.
                2. Tie-breakers named for each area, usually a code owner or tech lead.
                3. The rule added to the guideline and agreed by the team.
                4. The next two disagreements handled under the rule and reviewed briefly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written escalation rule with named tie-breakers is in the guideline and has been used on at least two disagreements."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the three longest review threads from last quarter and read how they ended"
                - "Draft a thread, call, tie-breaker rule with a reply limit"
                - "Name a tie-breaker for each area and add the rule to the guideline"
                - "Check how the next two disagreements went under the new rule"
            - name: Splitting a large change into reviewable pieces
              description: |-
                ## Purpose
                Big features rarely need big pull requests. Learning to slice work into preparatory refactors, new code behind a feature flag and the final wiring change lets each piece be reviewed properly and merged within a day. Practise on your next feature by planning the slices before writing code.

                ## Milestones
                1. The next feature planned as a sequence of four or more slices before coding starts.
                2. Each slice merged separately and under the team size target.
                3. Unfinished behaviour kept behind a flag until the final slice.
                4. A short retrospective on what was harder or easier than one big pull request.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One feature is delivered as at least four separately merged pull requests, each under the team size target."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the slice plan for your next feature before opening the editor"
                - "Open the preparatory refactor as its own pull request first"
                - "Keep new behaviour behind a flag until the final wiring pull request"
                - "Write three lines on what slicing changed for you and your reviewers"
            - name: Time to first review under one working day
              description: |-
                ## Purpose
                Once first responses take longer than a working day, authors start batching changes to avoid waiting, which makes pull requests bigger and reviews slower still. Setting a team target of first review within one working day, and working out what blocks it, breaks that loop. Measure against your baseline and adjust the routines, not the people.

                ## Milestones
                1. A target agreed: median first review within one working day, 90th percentile within two.
                2. The top three causes of slow first reviews identified from the baseline.
                3. One routine change tried for each cause, such as review slots or auto assignment.
                4. The target met for four consecutive weeks.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The team's median time to first review is within one working day for four consecutive weeks, measured the same way as the baseline."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree the first review target and its measurement in the team meeting"
                - "Pick the three slowest pull requests of last month and find what held them up"
                - "Try one routine change for each cause found"
                - "Post the median time to first review in the team channel @recurring(weekly:fri)"
            - name: Screenshots and recordings for interface changes
              description: |-
                ## Purpose
                Reviewers of interface work often approve code they never saw running, and visual regressions slip through. Asking authors to attach before and after screenshots, or a short recording for interactive changes, lets reviewers judge behaviour without checking out the branch. Preview deployments per pull request take this further if your platform supports them.

                ## Milestones
                1. A screenshot section in the pull request template marked required for interface changes.
                2. Guidance on what to capture: before, after, mobile width, error and empty states.
                3. Preview deployments evaluated for the main web or mobile app.
                4. Ten interface pull requests reviewed with visuals attached.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The template requires visuals for interface changes, and ten interface pull requests have been reviewed with them attached."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a required screenshot section for interface changes to the template"
                - "Write three lines on what to capture, including empty and error states"
                - "Check whether your hosting setup can create a preview deployment per pull request"
                - "Ask for visuals on the next interface pull request that arrives without them"
            - name: AI review assistant trial with guardrails
              description: |-
                ## Purpose
                Automated review assistants can summarise a diff and flag obvious issues, but they also produce confident noise and can tempt reviewers to approve on their say-so. A time-boxed trial on one repository, with rules about what the assistant may do and a count of useful versus useless comments, shows whether it earns a place. Check what your organisation allows before sending code to any outside service.

                ## Milestones
                1. Your organisation's policy on sending code to external tools confirmed in writing.
                2. One repository chosen and the assistant enabled for four weeks.
                3. Every assistant comment tallied as useful, harmless noise or wrong.
                4. A decision recorded to adopt, restrict or drop, with a rule that a human approval is always required.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A four-week trial on one repository has a tally of useful, noisy and wrong comments and a written adopt, restrict or drop decision."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Confirm with security or legal whether code may be sent to the tool"
                - "Enable the assistant on one repository for four weeks"
                - "Tally each assistant comment as useful, noise or wrong"
                - "Write the decision and state that a human approval stays mandatory"
            - name: Code review workshop for the team
              description: |-
                ## Purpose
                Few engineers were ever taught to review; they copied whoever reviewed them first. A 90-minute workshop working through three real, anonymised pull requests together, comparing what each person would comment, surfaces different standards fast and builds a shared one. Run it once with the whole team, then for each group of new joiners.

                ## Milestones
                1. Three anonymised pull requests chosen: one clean, one with a hidden bug, one too large.
                2. A 90-minute agenda with individual review time and group comparison.
                3. The workshop held with most of the team present.
                4. Three agreed takeaways added to the guideline.

                ## Notes
                Choose old pull requests where the outcome is known, so the group can check its catches against reality.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 90-minute review workshop using three real pull requests is held, and three takeaways are added to the guideline."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick three old pull requests with known outcomes and strip author names"
                - "Write a 90-minute agenda with solo review then group comparison"
                - "Book the session with the whole team at least two weeks ahead"
                - "Add the three agreed takeaways to the guideline afterwards"
            - name: Reviewer calibration session
              description: |-
                ## Purpose
                Two reviewers looking at the same change can reach opposite verdicts, and authors learn to pick the lenient one. A short calibration, where everyone reviews the same pull request independently and then compares blocking comments, shows where standards differ. Repeat it each quarter with a fresh example.

                ## Milestones
                1. One recent pull request chosen that drew mixed reactions.
                2. Each reviewer's independent comments collected before the session.
                3. Differences in what people treated as blocking discussed and resolved.
                4. Any resolved difference written into the guideline.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A calibration session compares independent reviews of one pull request, and resolved differences are written into the guideline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a recent pull request that drew mixed review reactions"
                - "Ask each reviewer to review it independently before the session"
                - "Compare blocking comments and agree where the line sits"
                - "Run a calibration session with a fresh pull request @recurring(quarterly)"
            - name: Review plan for a major launch
              description: |-
                ## Purpose
                In the fortnight before a big launch, review queues spike and the temptation is to approve anything to hit the date, exactly when mistakes cost most. Planning review capacity, named reviewers for the riskiest paths and a merge freeze rule ahead of time keeps quality from collapsing. Agree it with the release owner before the rush starts.

                ## Milestones
                1. The launch date, risky components and expected pull request volume written down.
                2. Named reviewers for each risky component with backups.
                3. A rule for what may merge in the final days and who approves exceptions.
                4. A short review of how the plan held up, two weeks after launch.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A launch review plan names reviewers for risky components and a late-merge rule, and a post-launch review of it is written."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the components most at risk in the coming launch"
                - "Name a reviewer and a backup for each risky component"
                - "Agree the late-merge rule with the release owner"
                - "Write a short note on how review held up two weeks after launch"
            - name: Annual code review experience survey
              description: |-
                ## Purpose
                Metrics show speed, but not whether people feel reviews are fair, useful or draining. A short anonymous survey once a year asks authors and reviewers what works, what hurts and what they would change. Results compared year on year show whether the practice is getting better for the humans in it.

                ## Milestones
                1. A survey of eight questions or fewer covering usefulness, fairness, speed and tone.
                2. Responses from at least 70 percent of the team.
                3. Results summarised with the top three complaints and top three strengths.
                4. Two changes committed in response and announced to the team.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An anonymous review survey reaches at least 70 percent of the team and two committed changes are announced from its results."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft eight survey questions on usefulness, fairness, speed and tone"
                - "Send the survey anonymously with a one-week window"
                - "Summarise the top three complaints and strengths"
                - "Rerun the review experience survey and compare with last year @recurring(yearly)"
            - name: Review of an inherited or handed-over codebase
              description: |-
                ## Purpose
                When a contractor, agency or departing team hands over a codebase, there is often a backlog of changes nobody reviewed and code that only one person understood. A focused review pass over the riskiest modules before you accept the hand-over finds the surprises while the previous owners can still answer questions. Agree the scope and the deadline with them in writing.

                ## Milestones
                1. The hand-over date and the people available for questions confirmed.
                2. The riskiest modules chosen: payments, authentication, data handling, anything untested.
                3. Each chosen module reviewed with findings logged.
                4. Findings discussed with the previous owners before the hand-over closes.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The riskiest modules of the handed-over codebase are reviewed and findings are discussed with the previous owners before the hand-over date."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Confirm the hand-over date and who can answer questions until then"
                - "Pick the five riskiest modules based on business impact and test coverage"
                - "Review each module and log findings in one shared list"
                - "Walk the previous owners through the findings before hand-over"
            - name: Earning review approval rights as a junior engineer
              description: |-
                ## Purpose
                Junior engineers often feel they have nothing to add to a senior colleague's pull request, so they never review and never learn. Starting with non-blocking reviews, then shadowing approvals, then approving in one area builds confidence and a track record. Agree the steps with your lead so progress is visible rather than assumed.

                ## Milestones
                1. A three-step path agreed with your lead: comment only, shadow approval, full approval in one area.
                2. Twenty comment-only reviews done, including on senior engineers' work.
                3. Ten shadow approvals where a senior reviewer confirmed or corrected your verdict.
                4. Approval rights granted for one area of the codebase.

                ## Notes
                Questions count as contributions. Asking why something works a certain way often exposes an assumption the author never checked.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "Twenty comment-only reviews and ten shadow approvals are completed, and approval rights for one area are granted."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your lead to agree a three-step path to approval rights"
                - "Add yourself as an optional reviewer on two pull requests this week"
                - "Ask a senior reviewer to look over two of your recent reviews @recurring(monthly:15)"
                - "Request approval rights for one area once the shadow approvals are done"
            - name: Setting review norms as a new tech lead
              description: |-
                ## Purpose
                A new lead inherits whatever review culture the team already has, good or bad, and the first few weeks are when changing it is easiest. Observing for two weeks, then naming two or three norms you will model and ask for, sets direction without rewriting everything. Model them yourself first: fast responses, labelled comments, small pull requests.

                ## Milestones
                1. Two weeks of observation notes on how the team currently reviews.
                2. Two or three norms chosen and explained to the team with reasons.
                3. Your own reviews and pull requests modelling those norms for a month.
                4. A check-in on the norms at the next retrospective.

                ## Notes
                Start from the **Skills matrix** template to map who can review which parts of the system.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two or three review norms are announced with reasons after two weeks of observation, and they are checked at the next retrospective."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Keep two weeks of notes on review speed, tone and size"
                - "Map who can review which parts of the system"
                - "Announce two or three review norms with the reason for each"
                - "Ask the team at the next retrospective whether the norms are helping"
            - name: Code review across time zones
              description: |-
                ## Purpose
                With teammates eight hours apart, one question and one answer can cost a full day each, and a three-round review takes a week. Distributed teams need review habits built for handoffs: richer descriptions, reviewers in overlapping hours for urgent work, and authors who answer every comment before their day ends. Design these deliberately rather than suffering them.

                ## Milestones
                1. Overlap hours for each pair of locations written down.
                2. A rule for urgent reviews to go to someone in the author's own time zone.
                3. An end-of-day habit for authors to answer every open comment.
                4. Average review rounds and elapsed days measured before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Overlap hours and an urgent review rule are documented, and elapsed days per review are measured before and after the changes."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Chart the overlapping working hours between each location"
                - "Agree that urgent reviews go to a reviewer in the author's time zone"
                - "Answer every open comment on your pull requests before signing off @recurring(weekly:wed)"
                - "Measure elapsed days per review before and after the changes"
            - name: Review practice for a solo or two-person team
              description: |-
                ## Purpose
                Solo developers and pairs of founders cannot afford a formal review process, yet still ship bugs that a second look would catch. Cold self-review the next morning, pairing on risky changes and occasional outside review from a trusted peer give most of the benefit for a fraction of the cost. Decide which changes always get a second pair of eyes.

                ## Milestones
                1. A short list of change types that always get a second look: payments, auth, data deletion, migrations.
                2. A cold self-review routine for everything else, done the next working day.
                3. A trusted peer outside the team willing to review a risky change occasionally.
                4. One month of changes handled under the routine.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written list of always-review change types exists and a weekly cold self-review has run for four weeks."
                cadence: rolling
              tasks:
                - "Write the list of change types that always get a second look"
                - "Ask a trusted peer whether they would review an occasional risky change"
                - "Reread the week's merged diffs with fresh eyes @recurring(weekly:fri)"
                - "Pair live with your co-founder on the next payments or auth change"
            - name: Introducing reviews to a team that never had them
              description: |-
                ## Purpose
                Early-stage teams often merge straight to main, and the first serious outage is usually what forces a change. Introducing reviews gradually, starting with risky paths and a generous response target, avoids the backlash of a sudden gate that slows everyone down. Explain the why in terms of fewer outages and shared knowledge, not process for its own sake.

                ## Milestones
                1. A written case for reviews tied to recent incidents or single points of knowledge.
                2. Phase one live: required review on the riskiest paths only.
                3. Phase two live after a month: required review on all changes to main.
                4. A retrospective after two months on speed and value.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Required reviews cover the riskiest paths and then all changes to main, with a retrospective held two months after the start."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a half-page case for reviews based on recent incidents"
                - "Turn on required review for the riskiest paths only"
                - "Extend required review to all changes to main after one month"
                - "Hold a retrospective on speed and value after two months"
            - name: Reviewing contributions from outside the team
              description: |-
                ## Purpose
                Pull requests from other teams, contractors or an inner-source programme arrive without shared context and often without knowing your conventions. A short contributor guide, a named point of contact and a faster first acknowledgement stop external contributions from stalling for weeks. Reviewers can then focus on fit and risk rather than explaining the basics every time.

                ## Milestones
                1. A contributor guide covering setup, conventions and what reviewers look for.
                2. A named contact who acknowledges outside pull requests within two working days.
                3. A label for outside contributions so they show up in the stale sweep.
                4. Five outside contributions reviewed under the new arrangement.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A contributor guide and a named contact are in place, and five outside contributions are acknowledged within two working days."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft a contributor guide from your review guideline and setup notes"
                - "Name a contact to acknowledge outside pull requests within two working days"
                - "Add a label for outside contributions and include it in the stale sweep"
                - "Review the next five outside contributions and note what confused the contributors"
            - name: Shadow reviewing to grow new reviewers
              description: |-
                ## Purpose
                Reviewing well is learnt by watching someone reason through a diff, not from a document. Pairing a new reviewer with an experienced one for a few reviews, where the experienced reviewer thinks aloud or comments on the new reviewer's draft comments before they are posted, passes on judgement quickly. It also widens the pool of people who can approve each area.

                ## Milestones
                1. Two or three experienced reviewers willing to host shadow sessions.
                2. Each new reviewer paired for at least four shadow reviews.
                3. Draft comments discussed before posting in at least two of those sessions.
                4. The reviewer coverage map updated as people gain approval rights.

                ## Notes
                Start from the **Skills matrix** template to see which areas have only one capable reviewer.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Each new reviewer completes four shadow reviews and the reviewer coverage map shows fewer areas with a single approver."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask two experienced reviewers to host shadow review sessions"
                - "Pair each new reviewer for four shadow reviews over a month"
                - "Discuss draft comments before posting in at least two sessions"
                - "Update the reviewer coverage map as approval rights change"
            - name: Risk-based review tiers
              description: |-
                ## Purpose
                Treating a copy change and a change to billing logic with the same review rules wastes time on one and under-protects the other. Defining two or three tiers, from light review for low-risk paths to two expert reviewers and a written test plan for critical ones, puts scrutiny where failure is expensive. Map tiers to paths so the platform can apply them automatically.

                ## Milestones
                1. Two or three review tiers defined with the checks each requires.
                2. Every critical path assigned to the top tier in the code owners file.
                3. The pull request template asking authors to state the tier and why.
                4. A three-month check that critical changes received top-tier review.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Review tiers are defined, critical paths are mapped to the top tier, and a three-month check confirms critical changes got top-tier review."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the paths where a defect would cost money, data or trust"
                - "Define two or three tiers and the checks each requires"
                - "Map critical paths to the top tier in the code owners file"
                - "Check three months of critical changes against their tier requirements"
            - name: Review evidence for audited change control
              description: |-
                ## Purpose
                Organisations under security or financial audits, such as SOC 2 or ISO 27001 attestations, must show that changes to production were reviewed by someone other than the author. Pulling that evidence by hand each audit is miserable; designing the review setup so evidence is a query away makes audits routine. Confirm the exact control wording with your compliance owner.

                ## Milestones
                1. The change management control wording obtained from the compliance owner.
                2. Branch protection, approval rules and bypass logging checked against the control.
                3. A saved query or report that lists each merged change with its approver.
                4. A quarterly sample exported and checked for self-approval or bypasses.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A saved report lists merged changes with their approvers, and a quarterly sample shows no unexplained self-approval or bypass."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Ask the compliance owner for the exact change management control wording"
                - "Check branch protection and bypass logging against that wording"
                - "Build a saved report of merged changes with author and approver"
                - "Export and check a sample of merged changes for the auditors @recurring(quarterly)"
            - name: Reviewing AI-generated code
              description: |-
                ## Purpose
                Code written with an assistant often looks fluent and plausible while hiding invented functions, outdated library calls or subtly wrong logic, and authors may understand it less well than code they typed. Reviewers need a slightly different stance: verify that the author can explain it, check every external call exists, and look harder at tests that were generated alongside. Agree how authors disclose assisted code.

                ## Milestones
                1. A team position on disclosing substantially generated code in the pull request.
                2. Extra review checks for generated code added to the guideline.
                3. A rule that the author must be able to explain any line they submit.
                4. Five generated-code reviews discussed at a retrospective.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A disclosure position and extra review checks for generated code are in the guideline, and five such reviews are discussed at a retrospective."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree whether and how authors flag substantially generated code"
                - "Add checks for invented APIs, outdated calls and generated tests to the guideline"
                - "Ask authors to explain one generated section in your next such review"
                - "Bring five generated-code reviews to the next retrospective"
            - name: Reviewing concurrency and performance-sensitive changes
              description: |-
                ## Purpose
                Race conditions, lock ordering, unbounded queries and accidental quadratic loops rarely show up in tests and almost never in a quick read. Specialist reviewers for these changes work from targeted questions, ask for benchmarks or load numbers, and sometimes rewrite a small part to prove a point. Build a short guide so the people with this expertise can be found and their questions reused.

                ## Milestones
                1. A list of change types that need a concurrency or performance reviewer.
                2. Named specialists for each, recorded in the reviewer coverage map.
                3. A one-page question set covering shared state, locking, query plans and complexity.
                4. Benchmarks or query plans attached to the next three qualifying pull requests.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A question set and named specialists exist for concurrency and performance changes, and three qualifying pull requests include benchmarks or query plans."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List change types that need a concurrency or performance reviewer"
                - "Name the specialists and add them to the reviewer coverage map"
                - "Write a one-page question set on shared state, locks and query plans"
                - "Ask for a benchmark or query plan on the next qualifying pull request"
            - name: Honest review metrics dashboard
              description: |-
                ## Purpose
                Review dashboards go wrong when they rank individuals or reward speed alone, which teaches people to rubber stamp. A team-level dashboard showing time to first review, size, review rounds and rework after merge, with no per-person leaderboard, supports improvement without gaming. Agree with the team what it shows and what it will never be used for.

                ## Milestones
                1. A list of team-level measures and a written statement of what the dashboard will not be used for.
                2. The dashboard built from platform data, refreshed automatically.
                3. The team shown the dashboard and invited to challenge each measure.
                4. Monthly use in the team retrospective for three months.

                ## Notes
                Any measure shown per person will be gamed. Keep it at team level.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A team-level review dashboard with an agreed usage statement refreshes automatically and is used in three monthly retrospectives."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the measures and a statement of what the dashboard is not for"
                - "Build the dashboard from platform data with automatic refresh"
                - "Walk the team through it and invite challenges to each measure"
                - "Open the review dashboard at the monthly team retrospective @recurring(monthly:2)"
---

# Code Review Practice

Code review is where a team decides what good looks like, one pull request at a time, and it works best when authors and reviewers know exactly what is expected of them. These projects start with the foundations (written guidelines, a turnaround baseline, templates, code owners and comment labels), move through the weekly and monthly routines that keep the queue moving, then the reviewing skills themselves, the decisions worth revisiting, team events, situations such as distributed or very small teams, and specialist work like risk-based review tiers and audit evidence.

What repeats is a daily slot for clearing your review queue, a Monday sweep of stale pull requests, a Thursday check on reviewer load, monthly looks at turnaround numbers, comment themes and a sample of merged changes, and a quarterly refresh of the guidelines. The Metrics log, Feedback themes, Skills matrix, Purchase decision and Meeting notes templates pair with the projects that need a record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
