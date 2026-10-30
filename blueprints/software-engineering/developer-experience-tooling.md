---
id: software-engineering.developer-experience-tooling
name: Developer Experience Tooling
description: "A one-command local setup, pinned toolchains, a doctor script, fast feedback loops and the routines that keep engineers solving problems instead of fighting their machines."
category: business
version: 1.0.0
tags: [software-engineering, developer-experience-tooling, engineer, team, local-setup, dev-environment, scripts, feedback-loop]
author: Aurum Technology
starter_structure:
  templates:
    - feedback-themes
    - operational-checklist
    - metrics-log
    - purchase-decision
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Developer Experience Tooling
          description: "Improving local setup, build speed, scripts and tooling so engineers spend time solving problems rather than fighting their environment."
          projects:
            - name: Developer friction survey of the team
              description: |-
                ## Purpose
                Before changing any tooling, find out where the time actually goes, because the loudest complaint is rarely the most expensive one. A short survey asking each engineer for their three worst daily annoyances and a rough minutes-lost estimate produces a ranked list that every later project in this area can be judged against.

                ## Milestones
                1. A survey of no more than eight questions sent to every engineer, including minutes lost per week to each named problem.
                2. At least two thirds of the team responded.
                3. Answers grouped into themes such as setup, build speed, flaky local tests and unclear scripts.
                4. A ranked list of the top five friction points, each with an estimated weekly team cost in hours, shared with the team.

                ## Notes
                Start from the **Feedback themes** template. Ask for minutes lost, not satisfaction scores: a number turns a grumble into a priority.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of the top five friction points, each with an estimated weekly hours cost, is shared with the whole team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft eight survey questions that ask for minutes lost per week"
                - "Send the survey to every engineer with a one-week deadline"
                - "Group the answers into themes and total the estimated hours"
                - "Share the top five friction points with the team"
            - name: Timed setup on a clean machine
              description: |-
                ## Purpose
                Nobody knows how long setup really takes until someone does it from nothing and writes down every stall. Timing a fresh setup on a wiped laptop or a new user account, following only the written instructions, gives the baseline number that the bootstrap script, the docs and onboarding all need.

                ## Milestones
                1. A clean machine or user account prepared with nothing installed beyond the operating system.
                2. The documented setup followed literally, with every step timed.
                3. Each stall, missing step or wrong instruction logged with the minutes it cost.
                4. A total time from first instruction to the app running locally recorded as the baseline.

                ## Notes
                Ask someone other than the author of the instructions to do this. The author fills gaps from memory without noticing.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A recorded baseline time from a clean machine to the app running locally, with every stall listed and timed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a fresh user account or virtual machine with no tools installed"
                - "Follow the written setup steps literally while timing each one"
                - "Log every missing step, wrong command and stall with minutes lost"
                - "Record the total time to a running app as the setup baseline"
            - name: One-command local setup script
              description: |-
                ## Purpose
                A README with twenty manual steps decays the moment a version changes, while a script is either working or visibly broken. Turning the setup steps into a single idempotent command that installs dependencies, creates config and starts the app takes the clean-machine baseline from hours to minutes.

                ## Milestones
                1. A single setup command that installs language runtimes, dependencies and local config from a fresh clone.
                2. The script safe to run twice, skipping what is already done rather than failing.
                3. Clear progress messages and a plain error that names the failing step and what to try next.
                4. A clean-machine run timed again and compared with the original baseline.

                ## Notes
                Make the script check before it installs. A setup script that wipes someone's existing database the second time it runs will not be trusted again.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fresh clone reaches a running app with one command, and a second run completes without errors or side effects."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List every manual step from the clean-machine run in order"
                - "Write the setup script so each step checks before it acts"
                - "Add a clear error message that names the failing step"
                - "Time a fresh-clone run and compare it with the baseline"
            - name: Pinned runtime versions with a version manager
              description: |-
                ## Purpose
                Half of all works-on-my-machine bugs come from one engineer on a different runtime version than CI. Committing a version file that a version manager such as asdf, mise, nvm or pyenv reads automatically means every clone switches to the right Node, Python, Go or Ruby the moment someone enters the directory.

                ## Milestones
                1. One version manager chosen for the team, with a short reason recorded.
                2. A version file committed in every active repository, matching the CI runtime exactly.
                3. Shell integration documented so the version switches on entering the directory.
                4. CI reading the same version file, so local and pipeline cannot drift apart.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active repository has a committed runtime version file that both developer machines and CI read."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare the runtime versions on three laptops against CI"
                - "Choose one version manager and note why in the README"
                - "Commit a version file to each active repository"
                - "Point the CI runtime setup at the same version file"
            - name: Local environment variables and secrets template
              description: |-
                ## Purpose
                New engineers often spend a morning hunting for the twelve environment variables the app needs, then paste real production keys into a file that gets committed. A committed example file with safe defaults, plus a script that fetches development secrets from the team's secret manager, fixes both problems at once.

                ## Milestones
                1. Every environment variable the app reads listed in a committed example file, with a one-line comment on each.
                2. Safe local defaults filled in wherever no real secret is needed.
                3. Development-only secrets fetched by a script from the secret manager, never shared in chat.
                4. The real local env file listed in the ignore file and a secret scanner run on history.

                ## Notes
                Use separate development credentials with narrow permissions. A laptop is lost more often than a server is breached.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A committed example env file covers every variable the app reads, and development secrets arrive by script from the secret manager."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search the code for every environment variable the app reads"
                - "Write an example env file with a comment and safe default for each"
                - "Add a script that pulls development secrets from the secret manager"
                - "Confirm the real env file is ignored and scan history for leaked keys"
            - name: Standard task runner command vocabulary
              description: |-
                ## Purpose
                Every repo inventing its own commands means engineers switching projects have to read package files and shell history to find out how to start anything. Agreeing a small set of verbs, such as setup, dev, test, lint and reset, exposed through one task runner like make, just or the package manager's scripts, makes every repository feel familiar on day one.

                ## Milestones
                1. A list of six to eight standard command names agreed by the team, each with a one-line meaning.
                2. One task runner chosen and present in every active repository.
                3. Each repository answering the standard commands, even if some print that a step does not apply.
                4. A help command that lists available tasks with descriptions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active repository answers the same agreed set of task commands, with a help command listing them."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the commands each repository uses to set up, run and test"
                - "Agree six to eight standard verbs and their meanings with the team"
                - "Add a task runner file with those verbs to each repository"
                - "Add a help task that prints every available command"
            - name: Local databases and queues in containers
              description: |-
                ## Purpose
                Installing Postgres, Redis and a message broker natively on every laptop leads to version drift and clashing ports. Defining local backing services in a compose file pinned to the production major versions lets anyone start or throw away the whole stack with one command.

                ## Milestones
                1. A compose file defining every backing service the app needs, pinned to the same major versions as production.
                2. Named volumes so data survives restarts, and a documented command to wipe them.
                3. Ports chosen to avoid clashing with common natively installed services.
                4. Health checks so the app waits for services to be ready instead of failing on start.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One command starts every backing service at production major versions, with health checks and a documented wipe command."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every database, cache and queue the app connects to locally"
                - "Write a compose file pinned to the production major versions"
                - "Add health checks and wait for them in the dev command"
                - "Document the commands to start, stop and wipe local services"
            - name: Seed data and local database reset
              description: |-
                ## Purpose
                An empty local database means every engineer hand-crafts test users and orders, and nobody can reproduce what a colleague sees. A seed script that builds a realistic, anonymised dataset in under a minute, and a reset command that restores it, makes bugs reproducible and demos painless.

                ## Milestones
                1. A seed script that creates representative users, accounts and records covering the main screens.
                2. No real customer data in the seed, with any production-derived values anonymised.
                3. A reset command that drops, migrates and reseeds in under a minute.
                4. Named seed accounts for common roles, such as admin, regular user and suspended user, documented.

                ## Notes
                Copying a production snapshot to laptops is a data protection risk. Generate data instead, even if it looks less real.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reset command rebuilds the local database with anonymised seed data and documented role accounts in under a minute."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the screens and states an engineer needs data to see"
                - "Write a seed script that generates those records without real customer data"
                - "Add a reset command that drops, migrates and reseeds"
                - "Document the seed accounts for each common role"
            - name: Doctor command for broken environments
              description: |-
                ## Purpose
                Most setup support questions are the same ten problems: wrong runtime, a port already in use, a stale lockfile, a missing secret. A doctor command that checks each of these and prints a fix lets engineers diagnose themselves in seconds rather than waiting for the one person who remembers.

                ## Milestones
                1. The ten most common environment failures listed from support threads.
                2. A doctor command that checks each one and prints a pass or a specific fix.
                3. The command run first in the support channel's pinned guidance.
                4. A new check added whenever a novel setup failure is diagnosed by hand.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A doctor command checks at least ten known failure causes and prints a fix for each failing one."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Read the last three months of setup support threads for repeat problems"
                - "Write a check and suggested fix for each of the top ten"
                - "Pin the doctor command at the top of the support channel"
                - "Add a check for the next failure someone diagnoses by hand"
            - name: Monthly developer experience pulse
              description: |-
                ## Purpose
                Once-a-year surveys cannot tell you whether last month's tooling change helped. One or two questions each month, such as how many minutes the environment cost you this week, give a trend line that shows whether the friction list is shrinking.

                ## Milestones
                1. Two fixed pulse questions agreed so answers stay comparable month to month.
                2. The pulse sent on the same day each month and kept under a minute to answer.
                3. Results plotted as a trend with tooling changes marked on it.
                4. Any jump in reported friction followed up within the same week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive months of pulse results are plotted on one trend line with tooling changes marked."
                cadence: rolling
              tasks:
                - "Choose two pulse questions you will keep unchanged for a year"
                - "Send the developer experience pulse to the team @recurring(monthly:12)"
                - "Add the month's results to the trend chart with any tooling changes marked"
                - "Follow up with anyone who reports a sharp rise in friction"
            - name: Weekly friction log triage
              description: |-
                ## Purpose
                Papercuts are forgotten by the time anyone asks about them, so they never get fixed. A shared friction log where engineers drop a one-line note the moment something wastes their time, triaged weekly into fix now, ticket or ignore, turns irritation into a steady stream of small fixes.

                ## Milestones
                1. A shared friction log with a one-line format: what happened, minutes lost, where.
                2. The log linked from the team channel and the README so adding to it takes seconds.
                3. A weekly triage that sorts each new entry into fix now, ticket or ignore.
                4. At least one friction item closed every week, with the fix noted against the entry.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The friction log is triaged every week and at least one entry is closed with a recorded fix each week."
                cadence: rolling
              tasks:
                - "Create a shared friction log with columns for problem, minutes and location"
                - "Link the friction log from the team channel and the README"
                - "Triage new friction log entries into fix, ticket or ignore @recurring(weekly:wed)"
                - "Close one small friction item and note the fix against it"
            - name: Local build and test timing record
              description: |-
                ## Purpose
                Cold build, incremental rebuild and full local test run times creep up a few seconds a month until a change that used to take ten seconds to see takes a minute. Recording the same four timings on the same reference machine each month catches the creep while the cause is still one recent commit.

                ## Milestones
                1. Four timings defined: cold build, incremental rebuild after a one-line change, app start, and full local test run.
                2. A reference machine and exact commands written down so timings are comparable.
                3. Monthly timings logged with the commit they were taken at.
                4. Any timing that grows by more than 20 percent in a month investigated and explained.

                ## Notes
                Start from the **Metrics log** template. Close other apps and run each timing three times, keeping the median.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four local timings are logged monthly against a commit, and any rise above 20 percent has a written explanation."
                cadence: rolling
              tasks:
                - "Write down the four timing commands and the reference machine"
                - "Take this month's cold build, rebuild, start and test timings @recurring(monthly:19)"
                - "Compare the timings with last month and flag rises above 20 percent"
                - "Bisect the commits behind any flagged rise"
            - name: Quarterly clean-machine setup rehearsal
              description: |-
                ## Purpose
                Setup scripts that worked in January quietly break when a base image, a package mirror or an operating system update changes. Rehearsing the full setup on a fresh virtual machine every quarter finds the breakage before the next new joiner does, on their first morning.

                ## Milestones
                1. A fresh virtual machine or new user account image kept ready for rehearsals.
                2. The setup run from clone to running app each quarter, with the time recorded.
                3. Every failure fixed in the script or docs before the rehearsal is marked done.
                4. A rotation so a different engineer runs it each quarter.

                ## Notes
                Start from the **Operational checklist** template so each rehearsal follows the same steps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four rehearsals a year complete from clone to running app on a fresh machine, each with time and fixes recorded."
                cadence: cyclic
              tasks:
                - "Prepare a reusable fresh virtual machine image for setup rehearsals"
                - "Run the full setup on a fresh machine and record the time @recurring(quarterly)"
                - "Fix every failure found before closing the rehearsal"
                - "Name the engineer who will run the next rehearsal"
            - name: Dev container base image refresh
              description: |-
                ## Purpose
                A development container or base image that nobody touches for a year ends up with an old operating system, expired certificates and tools that no longer match CI. Rebuilding it on a schedule from pinned, updated inputs keeps local environments current without surprise breakage on a deadline day.

                ## Milestones
                1. The base image's inputs listed: operating system release, system packages and preinstalled CLIs.
                2. A quarterly rebuild with updated versions tested against the main repositories.
                3. The new image tagged with a date and the previous tag kept for rollback.
                4. Engineers told what changed in two or three lines.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The dev container base image is rebuilt and tagged each quarter, with the previous tag kept and a change note sent."
                cadence: cyclic
              tasks:
                - "List the operating system, packages and CLIs baked into the image"
                - "Rebuild the base image with updated versions and test it @recurring(quarterly)"
                - "Tag the new image with the date and keep the previous tag"
                - "Post a three-line change note to the team channel"
            - name: Scripts folder review and pruning
              description: |-
                ## Purpose
                Every repository grows a scripts folder full of one-off fixes, half-working migrations and things whose author left two years ago. Reviewing it each quarter, deleting the dead, documenting the living and promoting the useful into the task runner keeps people from running something dangerous by accident.

                ## Milestones
                1. Every script in the folder listed with its last change date and author.
                2. Each script marked keep, promote to a task, or delete.
                3. Kept scripts given a header comment saying what they do and whether they are safe to rerun.
                4. Dead scripts deleted in a single reviewed change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every script in each scripts folder has a header comment or has been deleted, reviewed each quarter."
                cadence: cyclic
              tasks:
                - "List every script with its last change date and author"
                - "Review the scripts folder and mark each keep, promote or delete @recurring(quarterly)"
                - "Add a purpose and rerun-safety header to each kept script"
                - "Delete dead scripts in one reviewed pull request"
            - name: Weekly tooling office hours
              description: |-
                ## Purpose
                Engineers sit on tooling problems for days because asking feels like interrupting someone busy. A standing half hour each week where anyone can bring a broken setup, a slow command or a question about the scripts makes asking normal and surfaces the problems the friction log misses.

                ## Milestones
                1. A fixed weekly half-hour slot in the team calendar with a joining link.
                2. A short notes page logging who came, what they brought and what was fixed.
                3. Recurring questions turned into a doc fix, a doctor check or a friction log entry.
                4. The slot cancelled for the week only when nobody signed up in advance.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Office hours run weekly with notes, and every repeated question has produced a doc fix or doctor check."
                cadence: rolling
              tasks:
                - "Book a recurring half-hour slot and post the link to the team"
                - "Host tooling office hours and note what was raised @recurring(weekly:thu)"
                - "Turn any question asked twice into a doc fix or doctor check"
                - "Share a short monthly summary of what office hours fixed"
            - name: Tooling support channel rota
              description: |-
                ## Purpose
                When nobody owns the help channel, questions go unanswered or the same senior engineer answers all of them and gets nothing else done. A weekly rota naming who watches the tooling channel shares the load, sets an answer-time expectation and teaches more people how the environment works.

                ## Milestones
                1. A rota of at least four engineers, each covering one week at a time.
                2. An agreed expectation, such as a first reply within half a working day.
                3. A handover note at the end of each week listing open threads.
                4. Answered questions linked into the docs or doctor command where they belong.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A named engineer covers the tooling channel every week, and each week ends with a written handover of open threads."
                cadence: rolling
              tasks:
                - "Ask four or more engineers to join the support rota"
                - "Post who is covering the tooling channel this week @recurring(weekly:mon)"
                - "Write a handover note listing open threads at the end of your week"
                - "Link each answered question into the right doc or doctor check"
            - name: Laptop disk and cache hygiene
              description: |-
                ## Purpose
                Container images, package caches, build output and old node_modules folders can fill a 500 GB disk without anyone noticing until a build fails with no space left. A monthly ten-minute clean-up of the known hoarders keeps builds fast and stops the panic on a release afternoon.

                ## Milestones
                1. The biggest disk users on your machine identified with a disk usage tool.
                2. A short clean-up script that prunes unused container images, volumes and package caches.
                3. At least 20 percent of the disk free after each clean-up.
                4. Anything irreplaceable, like local database volumes you still need, excluded from the script.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The machine keeps at least 20 percent free disk space after a monthly clean-up script run."
                cadence: rolling
              tasks:
                - "Run a disk usage tool and note the five biggest folders"
                - "Write a clean-up script for container images, caches and build output"
                - "Run the disk clean-up script and check free space @recurring(monthly:3)"
                - "Exclude any local data volumes you still need from the script"
            - name: Shell scripts that work on other people's machines
              description: |-
                ## Purpose
                Scripts that run on their author's Mac often fail on a colleague's Linux box or in CI because of a different sed, a missing tool or an unquoted path with a space. Learning a handful of defensive habits, strict mode, quoting, dependency checks and portable commands, makes team scripts trustworthy.

                ## Milestones
                1. Strict mode, quoting and exit codes understood well enough to explain to a colleague.
                2. One existing team script rewritten with a dependency check and clear errors.
                3. The rewritten script tested on both macOS and Linux.
                4. A rule of thumb recorded for when a script should become a small program in a real language instead.

                ## Notes
                GNU and BSD versions of sed, date and grep differ. Either avoid the differences or check which one is present.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One team script is rewritten with strict mode, quoting and dependency checks, and runs cleanly on macOS and Linux."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a guide to shell strict mode and safe quoting"
                - "Pick the team script that fails most often on other machines"
                - "Rewrite it with a dependency check and clear error messages"
                - "Test the rewritten script on macOS and Linux"
            - name: Profiling a slow local rebuild
              description: |-
                ## Purpose
                Faced with a slow edit, rebuild and refresh loop, most people guess at the cause and tweak the wrong setting. Learning to profile the dev build itself, with the bundler's or compiler's timing output, shows which plugin, type check or file watcher eats the seconds.

                ## Milestones
                1. The build tool's profiling or timing flag found and run on an incremental rebuild.
                2. The three slowest steps identified with their share of the total time.
                3. One change made to the slowest step and the before and after times recorded.
                4. A short note written for the team on how to profile the dev build.

                ## Notes
                Profile the incremental rebuild, not the cold build. Engineers feel the rebuild a hundred times a day and the cold build once.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The three slowest steps of the local incremental rebuild are identified, and one is improved with measured before and after times."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the profiling or timing flag for your dev build tool"
                - "Profile an incremental rebuild after a one-line change"
                - "Change the slowest step and time the rebuild again"
                - "Write a half-page note on profiling the dev build"
            - name: Editor and terminal fluency practice
              description: |-
                ## Purpose
                Small hesitations, reaching for the mouse to find a file or retyping a long command, add up to real time across a working week. Practising one editor or terminal technique a week, such as fuzzy file search, multi-cursor edits, go to definition or reverse history search, compounds over a quarter.

                ## Milestones
                1. A list of ten techniques you do not use yet in your editor and shell.
                2. One technique practised each week until it is automatic.
                3. Your editor's keybindings and settings saved in version control.
                4. A short show-and-tell of the three most useful techniques given to the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Ten new editor or shell techniques are practised over a quarter, with the top three shown to the team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List ten editor and shell techniques you do not use yet"
                - "Practise one new editor or terminal technique this week @recurring(weekly:fri)"
                - "Save your keybindings and editor settings in version control"
                - "Show the team your three most useful techniques"
            - name: Debugger set up for the main app
              description: |-
                ## Purpose
                Many engineers fall back on print statements because attaching a debugger to the real app was never configured and feels like a fight. A checked-in debug configuration for the server, the browser client and the test runner means breakpoints work on the first try for everyone.

                ## Milestones
                1. A debug configuration committed for the main server process.
                2. Browser or client-side debugging working with source maps.
                3. Breakpoints working inside a single test run from the editor.
                4. A short guide on attaching to a running container or remote process.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Committed debug configurations let any engineer hit a breakpoint in the server, the client and a single test on first try."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set a breakpoint in the server and get it to stop there"
                - "Commit the working debug configuration for the server process"
                - "Get client debugging working with source maps"
                - "Add a debug configuration for running a single test"
            - name: Git tooling beyond the basics
              description: |-
                ## Purpose
                Engineers who only know commit, pull and push lose time to messy histories, stashed work they forget and switching branches mid-task. Learning worktrees, interactive rebase, bisect and a few well-chosen aliases makes juggling a hotfix and a feature branch at the same time routine.

                ## Milestones
                1. A second worktree used to fix something on main without stashing feature work.
                2. An interactive rebase used to tidy a branch before review.
                3. Git bisect used to find the commit that introduced a real bug.
                4. Five useful aliases or config settings shared with the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Worktrees, interactive rebase and bisect have each been used on real work, and five git aliases are shared with the team."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Create a second worktree for a quick fix on main"
                - "Tidy a feature branch with an interactive rebase"
                - "Use git bisect to find when a known bug appeared"
                - "Share five git aliases or settings in the team channel"
            - name: Writing a small internal command line tool
              description: |-
                ## Purpose
                Some team workflows have outgrown a shell script: they need arguments, help text, confirmations and tests. Building one small internal CLI in the team's main language, with proper argument parsing and a dry-run flag, teaches the patterns every later internal tool will reuse.

                ## Milestones
                1. One repetitive team workflow chosen that currently needs several manual commands.
                2. A CLI with subcommands, help text and a dry-run flag for anything that changes data.
                3. Tests covering argument parsing and the main paths.
                4. The tool installable with one command and listed in the task runner help.

                ## Notes
                Add a dry-run flag and a confirmation prompt to anything that deletes or writes to shared systems.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "An internal CLI with help text, a dry-run flag and tests replaces one multi-step manual workflow."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Pick one workflow that needs several manual commands today"
                - "Choose an argument-parsing library in the team's main language"
                - "Build the CLI with help text and a dry-run flag"
                - "Write tests for the argument parsing and main paths"
            - name: Dotfiles in version control
              description: |-
                ## Purpose
                Rebuilding your shell, editor and git configuration from memory on a new laptop costs a day and never quite comes out the same. Keeping dotfiles in a repository with an install script makes a new machine feel like yours within an hour, and makes it easy to share a good setting with a colleague.

                ## Milestones
                1. Shell, editor, git and terminal configuration collected into one repository.
                2. An install script that links or copies them into place on a new machine.
                3. No secrets, tokens or work hostnames committed.
                4. A monthly habit of committing whatever you changed since the last sync.

                ## Notes
                Keep anything with tokens in a separate, uncommitted local file that your config sources if it exists.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A dotfiles repository with an install script restores your shell, editor and git setup on a fresh machine within an hour."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Copy your shell, editor and git config files into a new repository"
                - "Write an install script that links them into place"
                - "Search the repository for tokens and work hostnames before pushing"
                - "Commit any config changes made this month @recurring(monthly:28)"
            - name: Dev containers or native setup decision
              description: |-
                ## Purpose
                Development containers make environments identical but can be slow on some laptops, awkward with editors and heavy on battery, while native setups are fast but drift. Testing both on the main repository with real timings lets the team choose deliberately instead of following whoever last wrote a blog post.

                ## Milestones
                1. The main repository set up both natively and in a development container on the same machine.
                2. Rebuild time, test run time, editor responsiveness and battery use compared side by side.
                3. Two engineers on different operating systems trying each option for a week.
                4. A decision recorded with the reasons and what would make the team revisit it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on containers or native setup exists, backed by side-by-side timings from at least two operating systems."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Set up the main repository natively and in a dev container"
                - "Time rebuilds and test runs in both setups"
                - "Ask two engineers on different systems to try each for a week"
                - "Record the decision and the conditions for revisiting it"
            - name: Hot reload for the main app
              description: |-
                ## Purpose
                If seeing a one-line change means restarting the server and clicking back to the right screen, engineers test less and batch more. Getting hot module reload or fast automatic restart working for the main app, with state preserved where possible, brings the change-to-see loop under two seconds.

                ## Milestones
                1. The current change-to-see time measured for a one-line server change and a one-line UI change.
                2. Hot reload or automatic restart configured for both.
                3. File watching tuned to ignore build output and dependency folders.
                4. Both loops measured again and under two seconds, or the remaining blocker written down.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-line server or UI change is visible in the running app in under two seconds, measured and recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Time how long a one-line UI and server change takes to appear"
                - "Configure hot reload or automatic restart for each"
                - "Exclude build output and dependency folders from the file watcher"
                - "Measure the loop again and record the result"
            - name: Fast targeted test runs from the editor
              description: |-
                ## Purpose
                Running the full suite to check one function trains engineers to stop running tests locally. Setting up watch mode, run-only-changed and single-test commands that work from the editor and the terminal turns local testing into a reflex instead of a coffee break.

                ## Milestones
                1. A watch mode that reruns only tests related to changed files.
                2. A single command to run one test file or one named test.
                3. Editor integration that runs the test under the cursor.
                4. Each of these documented in the task runner help.

                ## Notes
                This is about the runner's ergonomics, not which tests to write. Keep the conversation about test levels in the testing strategy work.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Watch mode, single-test commands and run-test-under-cursor all work and are listed in the task runner help."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Configure the test runner's watch mode to run only related tests"
                - "Add a task for running one file or one named test"
                - "Set up the editor to run the test under the cursor"
                - "Document all three in the task runner help"
            - name: Faster local test database
              description: |-
                ## Purpose
                Integration tests that rebuild the schema for every file can make the local suite crawl. Techniques like a template database cloned per run, transactions rolled back after each test, or an in-memory data directory for the test container often cut minutes from every local run.

                ## Milestones
                1. The share of local test time spent on database setup measured.
                2. One technique chosen, such as template cloning or per-test transaction rollback.
                3. The change applied and the local suite timed again.
                4. Any test that relied on leftover data from another test fixed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Local database setup time in the test suite is measured before and after, with a recorded reduction."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure how much of the local test run is database setup"
                - "Choose between template cloning and transaction rollback"
                - "Apply the change and time the local suite again"
                - "Fix tests that depended on data left by other tests"
            - name: Cloud development environments evaluation
              description: |-
                ## Purpose
                Hosted development workspaces promise new engineers coding in minutes and no more laptop drift, but they cost per hour and depend on a good connection. A two-week trial with real work on the main repository shows whether the gain justifies the bill for your team.

                ## Milestones
                1. Two or three hosted workspace options shortlisted with pricing per engineer.
                2. A workspace configuration for the main repository built for the leading option.
                3. Three engineers using it for real work for two weeks and noting latency, cost and gaps.
                4. A decision recorded to adopt, adopt for some uses such as onboarding, or decline.

                ## Notes
                Start from the **Purchase decision** template. Test on the slowest connection anyone on the team works from, not the office network.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded adopt, partial or decline decision on hosted workspaces, based on a two-week trial by three engineers."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Shortlist hosted workspace options with per-engineer pricing"
                - "Build a workspace configuration for the main repository"
                - "Ask three engineers to use it for two weeks and log issues"
                - "Record the decision with the expected monthly cost"
            - name: README setup steps replaced with scripts
              description: |-
                ## Purpose
                Every manual step left in a README is a step someone will skip, mistype or run in the wrong order. Going through the setup and contributing docs line by line and replacing each command block with a task runner call shrinks the docs to the things only a human can decide.

                ## Milestones
                1. Every command in the setup docs listed with whether a script already covers it.
                2. Each uncovered command moved into the setup script or a named task.
                3. The README rewritten to point at tasks instead of raw commands.
                4. A clean-machine run following the new README completed without help.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The setup section of the README contains no raw multi-step command blocks, only task calls, and a clean run succeeds from it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every command block in the setup and contributing docs"
                - "Move each uncovered command into a named task"
                - "Rewrite the README to call tasks instead of raw commands"
                - "Ask a colleague to follow the new README on a clean machine"
            - name: Local stubs for third-party APIs
              description: |-
                ## Purpose
                When local development depends on a payment provider's sandbox, an email service and a partner API, one outage or rate limit stops the whole team. Local stub servers or recorded responses for each external dependency let engineers work offline and reproduce awkward responses on demand.

                ## Milestones
                1. Every external API the app calls during local development listed.
                2. A stub server or recorded responses for the three most used, started by the dev command.
                3. A switch in config to use the real sandbox when needed.
                4. Error and timeout responses available in the stubs for testing failure handling.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The app runs locally with no network access to third parties, using stubs that can also return errors and timeouts."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every external API the app calls when running locally"
                - "Build or record stubs for the three most used services"
                - "Add a config switch between stubs and the real sandbox"
                - "Add error and timeout responses to each stub"
            - name: Local HTTPS and stable dev hostnames
              description: |-
                ## Purpose
                Cookies, OAuth callbacks and service workers often behave differently on plain localhost, so bugs only appear in staging. Running the local app on trusted HTTPS with stable hostnames, using a local certificate authority tool and names under the reserved localhost domain, makes local behave like production.

                ## Milestones
                1. A locally trusted certificate created with a tool that installs its own local authority.
                2. Stable hostnames for each local service under a reserved development domain.
                3. OAuth callback and cookie settings working on the local hostnames.
                4. The steps folded into the setup script.

                ## Notes
                Never share or commit the local certificate authority's private key. Each machine should generate its own.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The app runs locally over trusted HTTPS on stable hostnames, with sign-in callbacks working, set up by the setup script."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Install a local certificate tool and create a trusted certificate"
                - "Choose stable hostnames for each local service"
                - "Update OAuth callback and cookie settings for those hostnames"
                - "Add the certificate and hostname steps to the setup script"
            - name: ARM and Intel compatibility in local images
              description: |-
                ## Purpose
                Teams with a mix of ARM and Intel laptops hit slow emulated containers, native modules that will not build and images published for one architecture only. Auditing every local image and native dependency for both architectures removes a class of problems that otherwise looks random.

                ## Milestones
                1. Every container image used locally checked for both ARM and Intel variants.
                2. Images missing a native variant replaced, rebuilt multi-architecture or flagged.
                3. Native dependencies that fail to build on one architecture listed with workarounds.
                4. Local start time compared on an ARM and an Intel machine.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every local container image has a native variant for both ARM and Intel, or a documented workaround."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every image the local stack pulls with its supported architectures"
                - "Replace or rebuild images that lack a native variant"
                - "Record native dependencies that fail on one architecture"
                - "Compare local start time on an ARM and an Intel laptop"
            - name: Papercut fix-it day
              description: |-
                ## Purpose
                The friction log fills with small items that never win against feature work in planning. A single protected day where the whole team works only on tooling papercuts clears dozens of them at once and shows everyone that the complaints are heard.

                ## Milestones
                1. A date agreed with the team's manager and protected from meetings.
                2. A list of small friction items, each under half a day, prepared in advance.
                3. Each engineer pairing up on items, with fixes merged the same day.
                4. A count of items closed and estimated weekly minutes saved shared afterwards.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fix-it day is held, with the number of friction items closed and minutes saved per week reported to the team."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree a fix-it date with the manager and block the calendar"
                - "Pick friction log items small enough to finish in half a day"
                - "Pair engineers up on items on the day"
                - "Report items closed and minutes saved per week afterwards"
            - name: Team laptop refresh migration
              description: |-
                ## Purpose
                New laptop batches cost every engineer a day or more rebuilding their environment, often in the same week. Planning the refresh, with the setup script rehearsed on the new hardware first and a staggered handover, keeps delivery going and tests the tooling at scale.

                ## Milestones
                1. The setup script run on one new laptop before the rest are handed out.
                2. Hardware-specific issues, such as architecture or operating system version, fixed in advance.
                3. Handover staggered so no more than a third of the team migrates in one week.
                4. Each engineer's migration time recorded and the slowest steps fixed for next time.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every engineer is on the new laptop, migrations were staggered, and each migration time is recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Run the setup script on one new laptop before the rollout"
                - "Fix any hardware-specific setup issues found"
                - "Schedule the handovers so a third of the team migrates per week"
                - "Record each engineer's migration time and fix the slowest steps"
            - name: Version manager switch-over for the team
              description: |-
                ## Purpose
                Moving the team from several overlapping version managers to one, or from an old tool to a faster one, breaks shells and editors if it happens piecemeal. A dated switch-over with a migration script, a fallback and a support window makes it a single tidy afternoon.

                ## Milestones
                1. The target version manager confirmed and tested on each operating system the team uses.
                2. A migration script that installs the new tool and removes the old shell hooks.
                3. A switch-over date announced with a support window that afternoon.
                4. Every engineer confirmed on the new tool and the old version files removed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On the announced date every engineer moves to the single version manager, with old hooks and files removed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Test the target version manager on every operating system in use"
                - "Write a migration script that removes the old shell hooks"
                - "Announce the switch-over date and support window"
                - "Check every engineer is on the new tool and remove old version files"
            - name: Friction survey results readout
              description: |-
                ## Purpose
                Surveys that disappear into a spreadsheet teach people not to answer the next one. A short readout meeting that shows the top themes, what will be fixed this quarter and what will not, and why, turns the survey into a commitment the team can hold you to.

                ## Milestones
                1. Survey themes summarised on one page with response counts and estimated hours lost.
                2. Three fixes committed for the quarter, each with an owner.
                3. Items deliberately not being fixed listed with a reason.
                4. A 30-minute readout held and the page shared afterwards.

                ## Notes
                Start from the **Feedback themes** template, the same one the survey used, so themes line up.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A readout is held showing three owned fixes for the quarter and the items not being fixed, with reasons."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the survey themes on one page with hours lost"
                - "Pick three fixes for the quarter and name an owner for each"
                - "List the items you will not fix and why"
                - "Hold a 30-minute readout and share the page"
            - name: Annual developer tooling retrospective
              description: |-
                ## Purpose
                Tooling choices made two years ago for a smaller team or an older stack quietly become the source of the friction. Once a year, looking back at the pulse trend, the timing record and the friction log shows which tools paid off, which to retire and where to spend next year's effort.

                ## Milestones
                1. The year's pulse trend, timing record and closed friction items gathered in one place.
                2. Each major tool marked keep, improve or retire.
                3. Three priorities for next year agreed with the team.
                4. Last year's priorities checked and the outcome recorded honestly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly retrospective document marks each major tool keep, improve or retire and names three priorities."
                cadence: cyclic
              tasks:
                - "Gather the year's pulse, timing and friction log data"
                - "Run the annual developer tooling retrospective @recurring(yearly)"
                - "Mark each major tool keep, improve or retire"
                - "Agree three tooling priorities for next year"
            - name: Solo developer's personal tooling kit
              description: |-
                ## Purpose
                Working alone, there is no one to ask when the environment breaks, and every hour fixing tooling is an hour not shipping. A deliberately small personal kit, one version manager, one task runner, a backed-up dotfiles repository and a setup script per project, keeps a solo engineer moving.

                ## Milestones
                1. Tools trimmed to one version manager, one task runner and one editor setup.
                2. Each active personal project startable with a single command.
                3. Dotfiles and project setup scripts backed up off the laptop.
                4. A monthly check that backups ran and each project still starts.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active personal project starts with one command, and dotfiles and setup scripts are backed up off the laptop."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Remove duplicate tools until one of each kind remains"
                - "Add a single start command to each active personal project"
                - "Back up dotfiles and setup scripts to a remote repository"
                - "Check backups ran and each project still starts @recurring(monthly:8)"
            - name: Isolated environments for client codebases
              description: |-
                ## Purpose
                A contractor or consultant moving between client repositories risks one client's runtime, credentials or global packages leaking into another's. Isolating each client in its own container, user profile or workspace keeps versions, secrets and git identities separate.

                ## Milestones
                1. Each client's work isolated in its own container, workspace or user profile.
                2. A separate git identity and signing key per client where they require it.
                3. Client credentials kept in separate vaults or profiles, never in shared shell history.
                4. An offboarding checklist that removes a client's code and credentials when the contract ends.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Each client has an isolated environment, its own git identity and credentials, and an offboarding checklist."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose containers, workspaces or user profiles for client isolation"
                - "Set a separate git identity for each client repository"
                - "Move client credentials into separate vault profiles"
                - "Write an offboarding checklist for when a contract ends"
            - name: Windows engineers in a macOS-first team
              description: |-
                ## Purpose
                When the scripts assume macOS, the one or two engineers on Windows quietly spend hours translating commands. Making the setup work under WSL or a dev container, and testing it on Windows as part of the rehearsal, gives them the same one-command start as everyone else.

                ## Milestones
                1. Every setup and task script run on a Windows machine and failures listed.
                2. A supported Windows route chosen, such as WSL or a development container.
                3. Line ending, path and file watching issues fixed for that route.
                4. Windows added to the quarterly clean-machine rehearsal.

                ## Notes
                Keep the repository inside the Linux file system under WSL. File watching and builds across the boundary are much slower.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A Windows engineer reaches a running app with the same one setup command, via a documented supported route."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Run every setup and task script on a Windows machine"
                - "Choose WSL or a dev container as the supported Windows route"
                - "Fix line ending, path and file watching problems"
                - "Add Windows to the quarterly setup rehearsal"
            - name: Small team with no tooling owner
              description: |-
                ## Purpose
                In a team of three to six engineers, tooling belongs to everyone and so to no one, and the setup rots until a new hire exposes it. Naming a part-time tooling owner, with an hour or two a week and a clear remit, keeps the basics working without creating a platform team.

                ## Milestones
                1. A tooling owner named, with an agreed weekly time allowance.
                2. A short remit written: setup script, task runner, doctor command and friction log.
                3. The owner rotating every six months so knowledge spreads.
                4. A one-line monthly update from the owner on what changed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A named tooling owner with a written remit and weekly time allowance exists, with a six-month rotation date set."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree with the team who owns tooling for the next six months"
                - "Write a five-line remit for the tooling owner"
                - "Protect one to two hours a week in the owner's calendar"
                - "Set the date for the next ownership rotation"
            - name: Setup for slow or metered connections
              description: |-
                ## Purpose
                Engineers working from home on patchy broadband, a mobile hotspot or an island connection with expensive data can lose an afternoon to a multi-gigabyte install. Measuring how much the setup downloads and adding offline-friendly options, such as a package cache or slimmer images, makes the environment usable anywhere.

                ## Milestones
                1. The total download size of a fresh setup measured.
                2. The largest downloads identified, such as images, SDKs and package installs.
                3. Slimmer images, partial clones or a local package cache adopted to cut the total.
                4. The app confirmed to start offline once setup has completed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The fresh setup download size is measured and reduced, and the app starts with the network disconnected after setup."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure how much data a fresh setup downloads"
                - "List the five largest downloads in the setup"
                - "Switch to slimmer images or partial clones where possible"
                - "Disconnect the network and confirm the app still starts"
            - name: New lead inheriting a painful dev environment
              description: |-
                ## Purpose
                Taking over a team with a notoriously painful environment gives a new lead a short window to show that things will improve. A 30-day plan that times the setup, collects friction, fixes three visible problems and commits to a next step builds credibility before larger changes.

                ## Milestones
                1. A clean-machine setup timed personally in the first week.
                2. Five engineers asked individually about their worst daily friction.
                3. Three visible papercuts fixed within 30 days.
                4. A written next-quarter tooling plan shared with the team.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within 30 days three papercuts are fixed and a written next-quarter tooling plan is shared with the team."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Time a clean setup yourself in your first week"
                - "Ask five engineers about their worst daily friction"
                - "Fix three visible papercuts within the month"
                - "Share a next-quarter tooling plan with the team"
            - name: Opt-in local build telemetry
              description: |-
                ## Purpose
                Survey answers say builds feel slow; telemetry says how slow, for whom, and since when. An opt-in wrapper that records local command durations and failures, with no code or file names, shows which machines and commands suffer most and proves whether a fix worked.

                ## Milestones
                1. An agreed list of what is collected: command name, duration, exit code, operating system and architecture only.
                2. Telemetry off by default and enabled with a single documented opt-in.
                3. A dashboard of median and slowest durations for each standard command.
                4. A monthly look at the dashboard, with the worst regression turned into a friction log entry.

                ## Notes
                Be transparent about what is collected and never record arguments, file paths or code. Engineers will switch it off the moment it feels like surveillance.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An opt-in telemetry wrapper reports duration and exit codes for standard commands to a dashboard reviewed monthly."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write down exactly which fields telemetry may collect"
                - "Build an opt-in wrapper around the standard task commands"
                - "Create a dashboard of median and slowest durations per command"
                - "Review the local telemetry dashboard for regressions @recurring(monthly:15)"
            - name: AI coding assistant setup with team guardrails
              description: |-
                ## Purpose
                AI coding assistants work far better when they know the repository's commands, conventions and no-go areas, and far worse when every engineer configures them differently. A committed context file, an agreed list of allowed actions and a periodic review keep assistant output consistent and safe.

                ## Milestones
                1. A context file committed to the main repository listing build, test and lint commands and key conventions.
                2. An agreed list of what assistants may run unattended and what needs a human.
                3. Directories with secrets or generated code excluded from assistant context.
                4. A quarterly review of the context file against how the repository has changed.

                ## Notes
                Ask the agent to draft the first context file from the README and task runner, then edit it by hand. Check your organisation's policy on which code may be sent to external services.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A committed assistant context file and a written allowed-actions list exist, reviewed each quarter."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft a context file from the README and task runner"
                - "Agree which commands assistants may run without a human"
                - "Exclude secret and generated directories from assistant context"
                - "Review the assistant context file against the repository @recurring(quarterly)"
            - name: Internal tooling repository with releases
              description: |-
                ## Purpose
                Copy-pasted scripts across ten repositories drift apart within months. Moving shared developer tools, such as the doctor command, setup helpers and the internal CLI, into one versioned repository with tests and releases lets every project pick up fixes by bumping a version.

                ## Milestones
                1. Shared scripts and tools identified across repositories and moved into one tooling repository.
                2. Tests and a release process with version numbers and a changelog.
                3. Consuming repositories pinned to a released version.
                4. A monthly release cut whenever there are merged changes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Shared developer tools live in one tested, versioned repository, and every consumer pins a released version."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find scripts copied across more than one repository"
                - "Move them into a single tooling repository with tests"
                - "Pin each consuming repository to a released version"
                - "Cut a tooling release if changes have merged @recurring(monthly:22)"
            - name: Code generators for repetitive boilerplate
              description: |-
                ## Purpose
                Adding a new endpoint, component or database migration often means copying an old one and editing six files, with mistakes each time. A small generator inside the repository that produces the files from a template, with tests and wiring included, makes the right pattern the easiest one.

                ## Milestones
                1. The three most copied file patterns in the repository identified.
                2. A generator command that creates each pattern with tests and wiring in place.
                3. Generated output reviewed by the team and matched to current conventions.
                4. Generators kept current whenever the underlying pattern changes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Generators exist for the three most copied file patterns, each producing code with tests that passes review unchanged."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find the three file patterns engineers copy most often"
                - "Write a generator template for the most common pattern"
                - "Ask two engineers to review the generated output"
                - "Add the generators to the task runner help"
            - name: Business case for developer experience investment
              description: |-
                ## Purpose
                Tooling work loses to features in planning because its value is invisible on a roadmap. Turning the friction survey, timing record and telemetry into hours lost per engineer per week, multiplied by team size and loaded cost, gives managers a number they can weigh against a feature.

                ## Milestones
                1. Hours lost per engineer per week estimated from at least two data sources.
                2. A yearly team cost calculated using the loaded hourly cost finance provides.
                3. Three proposed investments, each with expected hours saved and effort to build.
                4. A one-page case presented to the engineering manager and a decision recorded.

                ## Notes
                Use conservative estimates and show your working. An inflated number gets the whole case dismissed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page case with hours lost, yearly cost and three costed investments is presented and the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull hours-lost figures from the survey and timing record"
                - "Ask finance for a loaded hourly cost per engineer"
                - "Cost three proposed tooling investments against hours saved"
                - "Present the one-page case and record the decision"
---

# Developer Experience Tooling

This area is for engineers and teams who lose hours every week to broken setups, slow rebuilds and scripts only one person understands. It starts with the foundations (a friction survey, a timed clean-machine setup, a one-command bootstrap, pinned toolchains, local services, seed data and a doctor command), then the routines that stop the environment rotting, the skills behind good scripts, debuggers, editors and git, the decisions about containers, hot reload, cloud workspaces and local stubs, the dated events like a papercut fix-it day and a laptop refresh, the situations a solo developer, a contractor, a Windows user or a new lead faces, and finally the specialist work of measuring and funding developer experience.

What repeats is a weekly friction log triage, weekly office hours and a support rota, a monthly pulse question and local timing record, monthly disk and dotfile upkeep, a quarterly clean-machine rehearsal and scripts folder review, and a yearly tooling retrospective. The Feedback themes, Operational checklist, Metrics log and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
