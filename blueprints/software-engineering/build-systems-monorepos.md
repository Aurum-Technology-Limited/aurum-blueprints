---
id: software-engineering.build-systems-monorepos
name: Build Systems & Monorepos
description: "A measured build, a dependency graph you can read, a repository layout and build tool chosen on purpose, remote caching that hits, and the routines that keep a large codebase fast to build and easy to change."
category: business
version: 1.0.0
tags: [software-engineering, build-systems-monorepos, engineer, enterprise, monorepo, build-caching, dependency-graph, bazel]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - vendor
    - risk-register
    - operational-checklist
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Build Systems & Monorepos
          description: "Managing build tooling, caching and repository structure for large codebases so builds stay fast and dependencies stay understandable."
          projects:
            - name: Build time baseline across the repository
              description: |-
                ## Purpose
                Arguments about whether the build is slow go nowhere without numbers, and the numbers people quote are usually one bad afternoon. Timing a clean build, a no-op rebuild, a one-file change and the full pull request pipeline for the five most edited packages gives a baseline that every later caching, layout or tooling change can be judged against.

                ## Milestones
                1. Clean, no-op and single-file incremental build times recorded for the five most edited packages, each the median of three runs.
                2. The median and slowest pull request pipeline durations for the last 30 days pulled from the CI history.
                3. Machine type, tool version and commit recorded beside every number so the runs can be repeated.
                4. A one-page baseline shared with the team, naming the slowest step in each measurement.

                ## Notes
                Start from the **Metrics log** template. Measure on a typical engineer laptop as well as on CI: the two are often slow for completely different reasons.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A shared baseline lists clean, no-op and incremental build times for five packages plus CI pipeline medians, each with machine, version and commit recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the five packages with the most commits in the last 90 days"
                - "Time a clean, a no-op and a one-file rebuild of each, three runs apiece"
                - "Export pull request pipeline durations for the last 30 days from CI"
                - "Write up the baseline with machine, tool version and commit beside each number"
            - name: Dependency graph map and its worst hubs
              description: |-
                ## Purpose
                Most slow and fragile builds trace back to a handful of packages that everything depends on, often a utilities library that grew without anyone deciding it should. Generating the package graph and ranking packages by how many others depend on them shows where a single edit rebuilds half the repository, and where boundary work will pay first.

                ## Milestones
                1. A package level dependency graph generated from the build tool or package manager, not drawn by hand.
                2. The ten packages with the highest fan-in listed with the number of dependants each has.
                3. Every dependency cycle between packages listed.
                4. A short written reading of the graph naming the three hubs most worth splitting or slimming.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A generated package graph, a top-ten fan-in table and a list of all package cycles are saved in the repository's docs folder."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the package dependency graph with the build tool's graph command"
                - "Count reverse dependencies for each package and rank the top ten"
                - "List every cycle the graph tool reports between packages"
                - "Write a half-page note naming the three hubs to tackle first"
            - name: Monorepo or polyrepo decision record
              description: |-
                ## Purpose
                Teams often drift into a monorepo, or into forty small repositories, without ever choosing, and then pay for the downsides without collecting the benefits. Writing down the forces that matter here (atomic cross-package changes, shared tooling, access control, team autonomy, repository size, release independence) and recording a decision stops the question resurfacing at every planning meeting.

                ## Milestones
                1. The current repository count, sizes and how often changes span more than one repository written down.
                2. Six or more decision criteria agreed with the senior engineers who will live with the outcome.
                3. Each option scored against the criteria, including a hybrid of a few domain repositories.
                4. A decision record merged, with the conditions that would make the team revisit it.

                ## Notes
                Count cross-repository changes from real history before arguing. If fewer than one change in twenty spans repositories, the case for merging is weaker than it feels.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A merged decision record states the repository strategy, the scored criteria behind it and at least two explicit triggers for revisiting it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Count how many changes in the last quarter touched more than one repository"
                - "Agree six decision criteria with the senior engineers"
                - "Score monorepo, polyrepo and a hybrid against those criteria"
                - "Merge the decision record with its revisit triggers"
            - name: Choosing a build tool for the codebase
              description: |-
                ## Purpose
                Bazel, Buck2, Pants, Nx, Turborepo, Gradle and plain package manager workspaces solve different problems at very different adoption costs, and the wrong choice can cost a year. Trialling two or three candidates on a real slice of the codebase, against criteria like language support, remote caching, learning curve and editor integration, turns a fashion debate into a costed choice.

                ## Milestones
                1. Requirements written down: languages in use, repository size, need for remote caching or execution, and team appetite for learning.
                2. No more than three tools shortlisted with a one-paragraph reason each.
                3. Each shortlisted tool trialled on the same slice of three to five real packages, with build times recorded.
                4. A recommendation with the estimated migration effort in engineer weeks, agreed by the engineering lead.

                ## Notes
                Start from the **Purchase decision** template. Weigh the cost of writing and maintaining build files for every package, not just the speed on the trial slice.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written recommendation names one build tool, compares at least two trialled candidates on the same packages and gives a migration estimate in engineer weeks."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List every language, toolchain and packaging format the repository uses"
                - "Shortlist up to three build tools with a reason for each"
                - "Trial each tool on the same three to five packages and time the builds"
                - "Estimate migration effort in engineer weeks for the preferred tool"
                - "Present the recommendation to the engineering lead for sign-off"
            - name: Top-level directory layout for the monorepo
              description: |-
                ## Purpose
                Layouts decided by whoever created the first folder tend to mix applications, shared libraries, tools and generated code, and every new package lands wherever its author guesses. Agreeing a small set of top-level directories, with a rule for what belongs in each, makes ownership, visibility rules and build targets far easier to express later.

                ## Milestones
                1. Every existing top-level directory classified as application, library, tool, configuration, third-party or generated.
                2. A target layout of no more than eight top-level directories agreed, with a one-line rule for each.
                3. A move plan listing which packages relocate and in what order.
                4. The layout and its rules written in the repository's root README.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The root README documents no more than eight top-level directories with a placement rule for each, and a move plan lists every package that must relocate."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Classify every current top-level directory by what it contains"
                - "Draft a target layout with a one-line placement rule per directory"
                - "List the packages that would move and the order to move them"
                - "Add the agreed layout and rules to the root README"
            - name: Code owners covering every directory
              description: |-
                ## Purpose
                In a shared repository an unowned directory is where broken builds and stale code collect, because nobody is asked to review changes there. A code owners file that maps every directory to a team, not a person who may leave, routes reviews automatically and gives build failures somewhere to go.

                ## Milestones
                1. A list of every directory with no owner entry, produced by script.
                2. An owning team agreed for each unowned directory, with no individual names as the only owner.
                3. The code owners file merged with full coverage and required owner review switched on for protected branches.
                4. A check in the pipeline that fails when a new top-level package has no owner.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A script reports zero directories without an owning team, and the pipeline fails any change that adds an unowned package."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Run a script that lists every directory with no code owner entry"
                - "Agree an owning team for each unowned directory with the team leads"
                - "Merge the completed code owners file and require owner review"
                - "Add a pipeline check that rejects packages with no owner"
            - name: One version of each third-party library
              description: |-
                ## Purpose
                When three packages in one repository pull three versions of the same JSON or logging library, builds get bigger, behaviour differs between services and every security patch becomes three patches. Moving to a single declared version per third-party library, with a short exceptions list, makes the monorepo behave like one codebase rather than many sharing a folder.

                ## Milestones
                1. Every third-party library with more than one resolved version listed, with the packages using each.
                2. A single shared place for third-party versions created, such as a version catalogue or root manifest.
                3. Duplicates collapsed to one version for the twenty most widely used libraries.
                4. An exceptions list with an owner and a reason for every library still allowed two versions.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The twenty most used third-party libraries each resolve to one version across the repository, and every remaining duplicate is on an owned exceptions list."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every third-party library that resolves to more than one version"
                - "Create one shared file that declares third-party versions for the repository"
                - "Collapse the twenty most used libraries to a single version"
                - "Record each remaining duplicate with an owner and a reason"
            - name: Explicit build targets for every package
              description: |-
                ## Purpose
                Caching and parallelism only reach what the build tool knows about, and packages built by a shell script or an implicit glob are invisible to it. Giving each package a declared target with its real inputs and dependencies is the unglamorous step that makes affected-target builds, caching and ownership checks possible.

                ## Milestones
                1. Every package listed with whether it has a declared build target or is built by script.
                2. Declared targets written for all packages, with sources and dependencies listed explicitly.
                3. Scripts that bypassed the build tool removed or wrapped as targets.
                4. A check that fails when a new package appears without a target.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every package in the repository builds through a declared target, and a pipeline check rejects any new package that lacks one."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List packages that are built outside the build tool"
                - "Write declared targets for the first ten packages with explicit inputs"
                - "Wrap or remove each bypass script once its package has a target"
                - "Add a pipeline check that rejects packages without a target"
            - name: Build conventions guide for contributors
              description: |-
                ## Purpose
                Engineers who touch the build twice a year copy whatever target they find nearby, so one odd pattern spreads to fifty packages. A short guide with the naming rules, the standard target shapes for each language and three copy-ready examples makes the right way the easy way.

                ## Milestones
                1. Naming rules for packages and targets written in one page.
                2. A standard target shape documented for each language in the repository.
                3. Three worked examples: a library, a service and a test target.
                4. The guide linked from the root README and the pull request template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A conventions guide with naming rules, per-language target shapes and three worked examples is linked from the root README and the pull request template."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft naming rules from the current target names"
                - "Document the standard target shape for each language in use"
                - "Write worked examples for a library, a service and a test target"
                - "Link the guide from the root README and pull request template"
            - name: Weekly build health review
              description: |-
                ## Purpose
                Build speed rots a few seconds at a time: a new code generator here, a widened glob there, until the baseline is a memory. A half-hour weekly look at build durations, cache hits and the slowest actions catches regressions while the change that caused them is still a week old.

                ## Milestones
                1. A standing half-hour slot with the build owner and one rotating engineer.
                2. A fixed view of pipeline duration, cache hit rate and the ten slowest actions ready before each review.
                3. Each regression over ten percent given an owner and a ticket within the week.
                4. A monthly one-paragraph trend note posted where engineers will see it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The review has run in at least ten of the last twelve weeks, and every regression over ten percent in that time has an owner and a ticket."
                cadence: rolling
              tasks:
                - "Set up a saved view of build durations, cache hits and slowest actions"
                - "Review build health and assign owners for regressions @recurring(weekly:tue)"
                - "Post the monthly build trend note to the engineering channel @recurring(monthly:4)"
                - "Invite a different engineer to each review for a fresh view"
            - name: Cache hit rate monitoring
              description: |-
                ## Purpose
                A remote cache that quietly drops from 90 percent hits to 40 percent still looks fine from the outside, while builds take twice as long. Tracking hit rate by target type, and investigating every sharp fall, is how you find the environment variable, timestamp or absolute path that started leaking into action keys.

                ## Milestones
                1. Hit rate collected for local and CI builds separately, broken down by language or target type.
                2. A target hit rate agreed for CI builds of an unchanged main branch.
                3. An alert or dashboard flag when the rate falls more than fifteen points in a week.
                4. A log of past cache misses traced to their cause, so recurring culprits are recognised.

                ## Notes
                Start from the **Metrics log** template. Most sudden drops come from something nondeterministic entering an action: a timestamp, a hostname, an absolute path or an unpinned tool.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly cache hit rates for local and CI builds are logged for six consecutive months, and every drop over fifteen points has a recorded cause."
                cadence: rolling
              tasks:
                - "Find where the build tool reports cache hits and misses per action"
                - "Agree a target hit rate for CI builds of unchanged main"
                - "Log local and CI hit rates and note causes of any drop @recurring(monthly:9)"
                - "Set an alert for a fall of more than fifteen points in a week"
            - name: Remote cache storage and eviction upkeep
              description: |-
                ## Purpose
                Remote caches grow until someone notices the storage bill or the disk fills and every build silently misses. A monthly look at size, eviction policy and the largest artefacts keeps the cache useful and its cost predictable, and spots the one target uploading gigabytes per run.

                ## Milestones
                1. Cache size, monthly growth and storage cost recorded.
                2. An eviction policy written down, by age or least recent use, with the retention period agreed.
                3. The ten largest cached artefacts identified and each justified or excluded from upload.
                4. A disk or quota alert set well before the cache reaches its limit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Cache size and cost are recorded monthly, a written eviction policy is in force and a quota alert is set below the storage limit."
                cadence: rolling
              tasks:
                - "Record the remote cache's current size, growth and monthly cost"
                - "Write down the eviction policy and retention period in the build docs"
                - "Check cache size and the largest uploaded artefacts @recurring(monthly:17)"
                - "Set a quota alert at eighty percent of the storage limit"
            - name: Quarterly dependency graph drift check
              description: |-
                ## Purpose
                Boundaries agreed in a design meeting erode one convenient import at a time, and by the time a new cycle breaks a build it has three more relying on it. Comparing the graph each quarter with the last snapshot shows new cycles, new hubs and packages whose dependency count jumped, while they are still cheap to undo.

                ## Milestones
                1. A graph snapshot saved each quarter in a comparable format.
                2. New cycles and new edges into restricted packages listed against the last snapshot.
                3. Packages whose dependency count rose by more than a quarter flagged to their owners.
                4. Each new cycle either removed or recorded as an accepted exception.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly graph snapshots exist, and every new cycle found in them was removed or recorded as an exception."
                cadence: cyclic
              tasks:
                - "Save the current dependency graph as the first comparison snapshot"
                - "Compare the graph with last quarter and list new cycles and hubs @recurring(quarterly)"
                - "Send each owner the packages whose dependency count jumped"
                - "Record accepted cycles with a reason and a review date"
            - name: Code owners file audit
              description: |-
                ## Purpose
                Teams reorganise, rename and dissolve, and the code owners file keeps pointing at groups that no longer exist, so reviews stall and build failures go nowhere. A quarterly audit against the current team list keeps routing accurate without anyone having to notice it broke.

                ## Milestones
                1. Every owner entry checked against the current list of teams and review groups.
                2. Entries for renamed or dissolved teams reassigned to a real owner.
                3. Directories where the owning team has made no commits in a year flagged for a conversation.
                4. Audit date and changes noted in the file's change history.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter the code owners file contains no reference to a group that no longer exists, confirmed by an audit commit."
                cadence: cyclic
              tasks:
                - "Get the current list of teams and review groups from the source of truth"
                - "Check every code owners entry against the team list @recurring(quarterly)"
                - "Reassign entries for teams that were renamed or dissolved"
                - "Raise directories with no owner commits in a year with that team's lead"
            - name: Build tool and rules version upgrades
              description: |-
                ## Purpose
                Build tools and their rule sets release often, and a repository that falls three major versions behind faces a painful jump with incompatible flags and deprecated rules. Upgrading the build tool and its plugins each quarter, on a branch with the full graph built, keeps each step small and the release notes readable.

                ## Milestones
                1. Current versions of the build tool, its rule sets and plugins recorded.
                2. Release notes for the next version read and incompatible changes listed.
                3. The full repository built and tested on the upgrade branch before merging.
                4. The upgrade merged with a short note to engineers on any changed commands or flags.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The build tool and its main rule sets are never more than one minor release behind for longer than a quarter."
                cadence: cyclic
              tasks:
                - "Record the versions of the build tool, rule sets and plugins"
                - "Upgrade the build tool on a branch and build the full graph @recurring(quarterly)"
                - "List incompatible flags and deprecated rules from the release notes"
                - "Tell engineers about any command or flag that changed"
            - name: Nondeterministic build action triage
              description: |-
                ## Purpose
                An action that produces different output from the same inputs poisons caching for everything downstream and makes builds fail on one machine but not another. Triaging the actions flagged as nondeterministic or flaky every week, and fixing the cause rather than retrying, keeps cache trust high.

                ## Milestones
                1. A way to detect actions whose outputs differ across two identical builds.
                2. A weekly list of flagged actions with the owning package.
                3. Each flagged action traced to a cause such as timestamps, unordered file lists or network access.
                4. Fixes merged or tickets raised for every action on the list within two weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over a quarter, every action flagged as nondeterministic has a recorded cause and a merged fix or an open ticket within two weeks."
                cadence: rolling
              tasks:
                - "Run two identical builds and diff their output hashes to find unstable actions"
                - "Triage flagged nondeterministic actions with their owners @recurring(weekly:thu)"
                - "Note each cause, such as timestamps, file ordering or network calls"
                - "Raise a ticket for any action that cannot be fixed this week"
            - name: Repository clone and checkout size watch
              description: |-
                ## Purpose
                Forty-minute clones of a monorepo hurt every new joiner, every fresh CI runner and every laptop rebuild, and the size usually grew because someone committed binaries or a generated file. Watching clone size, file count and the largest blobs monthly stops one bad commit becoming everyone's permanent problem.

                ## Milestones
                1. Clone time, repository size and file count recorded for a fresh clone.
                2. The twenty largest blobs in history listed with the path and commit that added them.
                3. A pre-merge check that rejects files over an agreed size outside the large file store.
                4. A monthly entry showing size and file count trend.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Clone time, size and file count are logged monthly for six months, and a pre-merge size check is active."
                cadence: rolling
              tasks:
                - "Time a fresh clone and record size and file count"
                - "List the twenty largest blobs in history with their paths"
                - "Add a pre-merge check that rejects oversized files"
                - "Record clone time, size and file count for the month @recurring(monthly:23)"
            - name: Dead target and orphan package sweep
              description: |-
                ## Purpose
                Large repositories accumulate packages nothing depends on and targets nobody builds, and each one still costs analysis time, upgrade effort and confusion. A quarterly sweep for targets with no reverse dependencies and no recent changes clears space and shortens the graph.

                ## Milestones
                1. A list of targets with no reverse dependencies that are not deployable entry points.
                2. Packages with no commits in twelve months cross-checked against the first list.
                3. Owners asked to confirm keep or delete for each candidate.
                4. Confirmed dead targets removed in small reviewed changes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter a candidate list is produced and every candidate is either deleted or marked keep by its owner."
                cadence: cyclic
              tasks:
                - "Query the graph for targets with no reverse dependencies @recurring(quarterly)"
                - "Cross-check candidates against packages with no commits in a year"
                - "Ask each owner to mark candidates keep or delete"
                - "Remove confirmed dead targets in small separate changes"
            - name: Build office hours and request queue
              description: |-
                ## Purpose
                When build knowledge sits with two people, every other engineer either waits for them or hacks around the problem in their own package. A weekly open hour plus a visible request queue gives teams a predictable way to get help and gives the build owners a record of where the real pain is.

                ## Milestones
                1. A weekly one-hour slot published where anyone can bring a build problem.
                2. A request queue with labels for broken build, slow build, new target and question.
                3. A response target agreed, such as first reply within two working days.
                4. A monthly summary of request themes fed into the build roadmap.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Office hours run weekly for a quarter, the queue meets its first-reply target for nine in ten requests and monthly theme summaries exist."
                cadence: rolling
              tasks:
                - "Create a build request queue with four labels"
                - "Hold build office hours for any team that needs help @recurring(weekly:wed)"
                - "Publish the first-reply target beside the queue"
                - "Summarise request themes into the build roadmap @recurring(monthly:28)"
            - name: Querying the build graph fluently
              description: |-
                ## Purpose
                Questions like what depends on this library, why this test runs on my change, or what path links service A to package B have exact answers in the build graph, but most engineers never learn the query language. A few hours of practice with your tool's query commands replaces guesswork and long chat threads with one command.

                ## Milestones
                1. The query commands for reverse dependencies, paths between targets and affected targets learned on your build tool.
                2. Ten real questions about the repository answered by query and the commands saved.
                3. A cheat sheet of the most useful queries added to the build docs.
                4. One teammate shown how to answer their own dependency question by query.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cheat sheet of at least ten working graph queries, each answering a real question about this repository, is in the build docs."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the graph query section of your build tool's documentation"
                - "Write a query that lists every reverse dependency of one shared library"
                - "Find the dependency path between two packages that should not be linked"
                - "Add ten working queries to a cheat sheet in the build docs"
            - name: Reading a build profile and its critical path
              description: |-
                ## Purpose
                Twelve-minute builds on a 32-core machine are usually waiting on one long chain of actions, not short of cores. Learning to produce and read a build profile, and to find the critical path, shows whether to split a target, cache a step or add parallelism, before anyone buys bigger runners.

                ## Milestones
                1. A profile or trace produced for a clean build and opened in a trace viewer.
                2. The critical path identified with its five longest actions.
                3. Time spent on analysis, fetching, execution and waiting separated.
                4. One change made to shorten the critical path, with before and after timings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A profile annotated with the critical path and one merged change that shortened it, with before and after timings, are recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Generate a build profile for a clean build of the main application"
                - "Open the profile in a trace viewer and find the critical path"
                - "Split the time into analysis, fetching, execution and idle waiting"
                - "Change one critical path action and compare before and after timings"
            - name: Hermetic builds and sandboxing fundamentals
              description: |-
                ## Purpose
                A build is only cacheable and reproducible if each action sees exactly its declared inputs and nothing from the machine around it. Understanding sandboxing, declared toolchains and why reading an undeclared file or calling the network breaks correctness explains most of the strange cache misses and works-on-my-machine failures in this area.

                ## Milestones
                1. The difference between hermetic and non-hermetic actions explained in your own words with one example from the repository.
                2. Sandboxing turned on for one package and the undeclared inputs it exposed listed.
                3. Each undeclared input fixed by declaring it or removing the dependency.
                4. A short note added to the build docs on the three most common hermeticity leaks seen here.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One package builds with strict sandboxing turned on, and a note on the three most common hermeticity leaks found is in the build docs."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read your build tool's documentation on sandboxing and hermeticity"
                - "Turn on strict sandboxing for one package and run its build"
                - "List every undeclared input the sandbox exposed"
                - "Write up the three most common leaks found in this repository"
            - name: Writing a custom build rule
              description: |-
                ## Purpose
                Sooner or later the repository needs something the standard rules do not do: a code generator, an asset bundler or an internal packaging format. Writing one small custom rule or plugin, with declared inputs and outputs and a test, teaches how the build tool really works and stops teams reaching for an uncached shell script.

                ## Milestones
                1. A real need chosen that is currently handled by a shell script or manual step.
                2. A custom rule written with declared inputs, outputs and toolchain.
                3. The rule covered by a test target and documented with one usage example.
                4. The old script retired and builds using the rule hitting the cache.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A custom rule with a test and usage example replaces a script, and its outputs are served from the cache on a repeat build."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick one step currently done by an uncached shell script"
                - "Work through your build tool's guide to writing rules or plugins"
                - "Write the rule with declared inputs, outputs and toolchain"
                - "Add a test target and retire the old script"
            - name: Content-addressed caching from first principles
              description: |-
                ## Purpose
                Remote caches work by hashing an action's command, inputs and environment into a key, and every surprise hit or miss makes sense once that is clear. Working through how action keys and content-addressed storage fit together means you can reason about a cache problem rather than clearing the cache and hoping.

                ## Milestones
                1. The parts of an action key for your build tool listed: command line, input digests, environment and platform.
                2. One cache miss traced by comparing the keys of two runs of the same action.
                3. The difference between the action cache and the content store explained in a short note.
                4. A team talk or written explainer of fifteen minutes delivered.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One real cache miss is traced to the exact key difference, and a fifteen-minute explainer on action keys has been given or published."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the remote caching protocol notes for your build tool"
                - "List what goes into an action key on your setup"
                - "Diff the execution logs of two runs to trace one cache miss"
                - "Give a fifteen-minute explainer to the team"
            - name: Incremental compilation in your main language
              description: |-
                ## Purpose
                Compilers for TypeScript, Java, Kotlin, Rust, Go and C++ each decide what to recompile differently, and choices like exported types, annotation processors or giant header files can force far more work than one edit deserves. Learning how your main language's compiler handles incrementality shows which code patterns make every change expensive.

                ## Milestones
                1. How your main compiler decides what to recompile written down in a paragraph.
                2. A one-line change measured in three places: a leaf module, a widely used interface and a shared header or type file.
                3. The two code patterns in this repository that cause the widest recompilation identified.
                4. One pattern fixed in a shared module and the improvement measured.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Recompilation cost of a one-line change is measured in three locations, and one fix to a shared module shows a measured improvement."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read how your main compiler tracks changes between builds"
                - "Time a one-line change in a leaf, an interface and a shared type file"
                - "Name the two patterns causing the widest recompilation"
                - "Fix one pattern in a shared module and remeasure"
            - name: Sparse checkout and partial clone in git
              description: |-
                ## Purpose
                Engineers working on one corner of a large monorepo rarely need the other ninety percent of files on disk or the full history of every binary. Sparse checkout and partial clone cut clone and status times sharply, but they interact with build tools and editors in ways worth learning before recommending them to everyone.

                ## Milestones
                1. A partial clone with blob filtering made and its size and time compared with a full clone.
                2. Sparse checkout configured to one team's directories plus the build configuration it needs.
                3. Build, test and editor indexing confirmed working inside the sparse checkout.
                4. A short how-to with known limits added to the repository docs.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A how-to in the repository docs shows sparse checkout and partial clone working for one team, with measured clone time and size against a full clone."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Make a partial clone with a blob filter and time it"
                - "Set up a sparse checkout for one team's directories"
                - "Check that build, tests and editor indexing still work"
                - "Write a how-to with the limits you found"
            - name: Affected-target builds for pull requests
              description: |-
                ## Purpose
                Pipelines that build and test the whole repository on every pull request get slower with every package added, until a typo fix waits forty minutes. Computing which targets a change actually affects, and building only those plus their dependants, keeps pull request time roughly flat as the repository grows.

                ## Milestones
                1. The build tool's affected-target or change detection command producing a target list for a sample of real pull requests.
                2. The list checked against a full build on twenty pull requests with no missed failures.
                3. Pull request pipelines switched to affected targets, with a full build still running on main.
                4. Median pull request pipeline time compared with the baseline.

                ## Notes
                Keep a full build on main or nightly as a safety net: affected-target logic misses changes to undeclared inputs, which is one more reason to fix hermeticity.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Pull requests build only affected targets, a full build still runs on main, and median pull request pipeline time is recorded against the baseline."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Run the affected-target command on ten recent pull requests"
                - "Compare its results with full builds on twenty pull requests"
                - "Switch pull request pipelines to build only affected targets"
                - "Keep a full build running on every merge to main"
                - "Compare the new median pipeline time with the baseline"
            - name: Remote cache for engineers' local builds
              description: |-
                ## Purpose
                CI already builds most of what an engineer is about to build locally, and without a shared cache that work is repeated on every laptop. Letting local builds read from the cache CI writes to, without letting laptops write back, can turn a twenty-minute first build after a pull into two minutes.

                ## Milestones
                1. A remote cache reachable from engineer machines with read access only.
                2. CI configured as the only writer, so untrusted local results never enter the cache.
                3. Local build times after a fresh pull compared with and without the cache on three machines.
                4. Set-up steps for the cache added to the standard local configuration.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Engineers' local builds read from a CI-written remote cache by default, and measured first-build times after a pull are recorded on three machines."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Make the remote cache reachable read-only from engineer machines"
                - "Restrict cache writes to CI credentials only"
                - "Time a first build after a pull with and without the cache on three laptops"
                - "Add the cache settings to the standard local build configuration"
            - name: Breaking the largest package cycle
              description: |-
                ## Purpose
                Cycles between packages mean neither side can be built, tested or released alone, and they usually force a wide rebuild for every change in either. Picking the cycle with the most packages and breaking it, by extracting the shared piece or inverting a dependency, removes a recurring source of slow builds and confusing imports.

                ## Milestones
                1. The largest cycle chosen from the graph map, with the specific imports that close it.
                2. A plan to break it: extract a shared package, move code or invert a dependency through an interface.
                3. The cycle removed in a series of small reviewed changes.
                4. A check added so the same cycle cannot return.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The chosen cycle no longer appears in the graph, and a pipeline check fails any change that reintroduces it."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick the largest cycle and list the imports that close it"
                - "Choose to extract, move or invert and write the plan in the ticket"
                - "Break the cycle in small reviewed changes"
                - "Add a graph check that blocks the cycle from returning"
            - name: Visibility rules to enforce module boundaries
              description: |-
                ## Purpose
                Boundaries that exist only in a diagram are crossed the first time a deadline makes an internal import convenient. Declaring which packages may depend on which, through the build tool's visibility settings or a boundary linting rule, turns the architecture into something the build enforces on every change.

                ## Milestones
                1. Layers or domains agreed, such as applications, domain libraries and shared utilities, with allowed directions.
                2. Visibility or boundary rules written for every package in one domain first.
                3. Existing violations listed and either fixed or recorded with an expiry date.
                4. The rules rolled out to every domain with the check blocking new violations.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every package has declared visibility or boundary rules, and the pipeline blocks any new dependency that breaks them."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Agree the layers and the allowed dependency directions"
                - "Write visibility rules for every package in one pilot domain"
                - "List current violations and fix or record each with an expiry"
                - "Extend the rules to the remaining domains"
            - name: Splitting a catch-all common package
              description: |-
                ## Purpose
                The package called common, utils or shared tends to become a top fan-in hub, so editing a date helper rebuilds every service in the company. Splitting it into a few focused libraries with clear owners shrinks the rebuild set for most changes and makes it obvious where new code should go.

                ## Milestones
                1. The contents of the catch-all package grouped by topic with the dependants of each group.
                2. Three to six focused packages proposed, each with an owner.
                3. Code moved package by package with automated import rewrites.
                4. The original package deleted or reduced to forwarding imports with a removal date.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The catch-all package is gone or holds only forwarding imports with a removal date, and its former contents live in owned, focused packages."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Group the catch-all package's files by topic and list dependants"
                - "Propose focused packages and agree an owner for each"
                - "Move the first group and rewrite imports with a script"
                - "Set a removal date for any forwarding imports left behind"
            - name: Remote execution evaluation
              description: |-
                ## Purpose
                Once caching is working, the next step for very large builds is running actions on a shared cluster rather than the local machine, but it brings cost, network sensitivity and a new service to operate. Evaluating managed and self-hosted remote execution against your build profile tells you whether the gain is minutes or seconds before committing.

                ## Milestones
                1. The share of build time spent in parallelisable actions estimated from build profiles.
                2. Two or three options compared, including a managed service and a self-hosted cluster.
                3. A two-week trial on CI builds with timings and cost recorded.
                4. A go or no-go decision with the expected monthly cost and time saved.

                ## Notes
                Start from the **Vendor** template. Remote execution pays most for wide graphs with many independent actions and least for builds dominated by one long link step.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded go or no-go decision on remote execution compares at least two options using a two-week trial's timings and monthly cost."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Estimate parallelisable build time from three recent build profiles"
                - "Shortlist a managed service and a self-hosted option"
                - "Run a two-week trial on CI and record timings and cost"
                - "Write the go or no-go decision with the expected monthly cost"
            - name: Versioning strategy for internal packages
              description: |-
                ## Purpose
                Monorepos that publish libraries to other repositories or customers must choose between versioning every package together and versioning each independently, and mixing the two by accident produces broken releases. Choosing a strategy and the tooling that computes versions from changes makes publishing routine.

                ## Milestones
                1. Every package that is published outside the repository listed with its consumers.
                2. Fixed and independent versioning compared for this set of packages, with the choice recorded.
                3. Change notes per package captured at pull request time with a changeset or similar tool.
                4. One release of the published packages made entirely by the agreed tooling.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded versioning strategy covers every published package, and one release has been produced end to end by the chosen tooling."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every package published outside the repository and its consumers"
                - "Compare fixed and independent versioning for that set"
                - "Set up per-package change notes at pull request time"
                - "Cut one release of published packages with the new tooling"
            - name: Generated code produced inside the build graph
              description: |-
                ## Purpose
                Generated clients, protocol buffer stubs and schema types that are committed to the repository drift from their sources and bloat every diff, while generation scripts run by hand are forgotten. Generating them as build targets from the source schema keeps them correct, cacheable and out of code review.

                ## Milestones
                1. Every generated file in the repository listed with its generator and source schema.
                2. Generation moved into build targets for one generator type first.
                3. The committed generated files for that type removed and ignored.
                4. Editors and language servers confirmed to see the generated code from the build output.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one generator type runs only as a build target, with its committed outputs removed and editor support confirmed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Find every generated file and note its generator and source"
                - "Move one generator type into build targets"
                - "Delete and ignore that type's committed generated files"
                - "Check that editors resolve the generated code from build output"
            - name: Build time budgets for key targets
              description: |-
                ## Purpose
                Baselines tell you where you were, but without a limit nobody is responsible when the main service build creeps from three minutes to nine. Setting a time budget for the handful of targets engineers build most, and checking it monthly, makes regressions visible and gives the weekly review something to enforce.

                ## Milestones
                1. Five key targets chosen: the main applications and the most run test suites.
                2. A budget in minutes agreed for each, a little above current performance.
                3. Timings for each target recorded against its budget every month.
                4. Any target over budget for two months running given a ticket and an owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five key targets have written time budgets, monthly timings are logged against them, and every two-month overrun has a ticket."
                cadence: rolling
              tasks:
                - "Choose five key targets engineers build most often"
                - "Agree a minutes budget for each with their owners"
                - "Record each target's build time against its budget @recurring(monthly:14)"
                - "Open a ticket for any target over budget two months running"
            - name: Importing a repository with its history
              description: |-
                ## Purpose
                Bringing a separate repository into the monorepo is the moment teams either keep or lose years of blame, history and context, and a careless import also breaks open pull requests. Planning the import, rewriting paths into the right directory and preserving history makes the first migration a pattern the next ten can follow.

                ## Milestones
                1. One candidate repository chosen, with its owners and open pull requests listed.
                2. History rewritten into its target directory on a test branch, with blame checked on three files.
                3. Build targets and owners added for the imported code before the switch.
                4. The old repository archived read-only with a pointer to its new home.

                ## Notes
                Freeze merges to the source repository for the import window and agree in advance what happens to open pull requests.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One repository lives in the monorepo with its history intact, build targets and owners in place, and the original archived read-only."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose the first repository to import and list its open pull requests"
                - "Rewrite its history into the target directory on a test branch"
                - "Add build targets and code owners for the imported code"
                - "Archive the old repository read-only with a pointer to the new path"
            - name: Build tool cutover day
              description: |-
                ## Purpose
                Moving a whole repository from one build tool to another is usually run for weeks in parallel and then switched on a chosen day, and that day is where confidence is won or lost. Preparing the switch like a release, with a rehearsal, a rollback path and engineers told what changes, keeps one bad morning from turning the team against the new tool.

                ## Milestones
                1. Both build systems running in parallel on CI for at least two weeks with matching test results.
                2. A cutover checklist with a named owner for each step and a rollback trigger.
                3. Engineers briefed on new commands, editor set-up and where to ask for help.
                4. The switch made on the chosen day, with the old build configuration removed a fortnight later.

                ## Notes
                Start from the **Risk register** template. Choose a quiet week, never one before a major release or a holiday.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The repository builds only with the new tool after cutover day, with two weeks of matching parallel results and a rollback path documented beforehand."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Run both build tools in parallel on CI and compare test results"
                - "Write the cutover checklist with owners and a rollback trigger"
                - "Brief engineers on new commands and editor set-up"
                - "Switch on the chosen day and staff a help channel all day"
                - "Remove the old build configuration two weeks after the switch"
            - name: Repository-wide move or rename with a codemod
              description: |-
                ## Purpose
                Renaming a package, moving a directory or changing an import path across a large repository by hand produces a pull request nobody can review and a week of merge conflicts. Scripting the change as a codemod, landing it in a short window and announcing it in advance makes even a thousand-file move routine.

                ## Milestones
                1. The move or rename written as a script that can be re-run on a fresh main branch.
                2. The script run on a test branch with the full graph building and tests passing.
                3. Teams told the date, the expected conflicts and the command to rebase.
                4. The change landed in one window and the script kept for anyone rebasing old branches.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The move lands in a single announced window, the full build passes afterwards and the re-runnable script is committed for rebasing."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the rename or move as a re-runnable script"
                - "Run it on a test branch and build the full graph"
                - "Announce the date and the rebase command to every team"
                - "Land the change in one window and commit the script"
            - name: Remote cache outage drill
              description: |-
                ## Purpose
                When the remote cache goes down, some build tools fail outright, others time out on every action and a few fall back gracefully, and you want to know which before a release day. Rehearsing a cache outage shows how builds behave, how long recovery takes and what engineers should do meanwhile.

                ## Milestones
                1. Expected behaviour on cache loss written down for local and CI builds.
                2. The cache made unreachable for a test pipeline and real behaviour observed.
                3. Timeouts and fallback settings adjusted so builds degrade to local execution.
                4. A short runbook for cache outages linked from the build docs.

                ## Notes
                Start from the **Operational checklist** template. Run the drill on a test pipeline first, then on a quiet afternoon for real CI.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A drill has shown builds completing without the remote cache, and a cache outage runbook is linked from the build docs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down how builds should behave if the cache disappears"
                - "Block cache access for a test pipeline and watch what happens"
                - "Tune timeouts and fallback so builds continue locally"
                - "Publish a one-page cache outage runbook"
            - name: Yearly build system review
              description: |-
                ## Purpose
                Once a year it is worth stepping back from weekly fixes to ask whether the build tool, the repository layout and the caching setup still fit a codebase that may have doubled. Comparing this year's numbers with the baseline and writing next year's three priorities keeps build work deliberate rather than reactive.

                ## Milestones
                1. This year's build times, cache hit rates, clone size and request themes compared with last year and the baseline.
                2. Engineers surveyed with three questions on build speed and clarity.
                3. Three priorities for next year agreed, each with an owner.
                4. A short review published to engineering leadership.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A yearly review compares this year's build metrics with the baseline and names three owned priorities for the coming year."
                cadence: cyclic
              tasks:
                - "Gather the year's build metrics and request themes into one page"
                - "Run the yearly build system review with leadership @recurring(yearly)"
                - "Send engineers a three-question build survey"
                - "Agree three owned priorities for next year"
            - name: Workspace monorepo for a small team
              description: |-
                ## Purpose
                Small teams of three to ten engineers with a web app, an API and a shared types package rarely need Bazel, but a plain folder of separate projects soon fights itself over versions and scripts. Package manager workspaces plus a light task runner with local caching give most of the benefit in a day, and leave room to grow.

                ## Milestones
                1. Applications and shared packages arranged under one workspace root with one lockfile.
                2. Shared packages consumed by local reference, not published to a registry.
                3. A task runner configured to cache build, lint and test outputs per package.
                4. CI running only the packages affected by each change.

                ## Notes
                Resist adding a heavyweight build tool until the workspace setup clearly hurts. Moving up later is easier than unwinding complexity nobody asked for.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All the team's packages live in one workspace with one lockfile, cached tasks and CI that runs only affected packages."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Move applications and shared packages under one workspace root"
                - "Switch shared packages to local workspace references"
                - "Configure a task runner to cache build, lint and test per package"
                - "Make CI run only the packages a change affects"
            - name: Monorepo governance across many teams
              description: |-
                ## Purpose
                In an enterprise monorepo with dozens of teams, decisions about tooling, layout and shared rules affect everyone, and a single build team cannot make them alone or the backlog becomes a bottleneck. A small cross-team group with a written charter and a change process keeps the shared rules legitimate and the build team out of politics.

                ## Milestones
                1. A charter naming the group's members, scope and how proposals are decided.
                2. A lightweight proposal template for changes to shared build rules or layout.
                3. A regular meeting with decisions published to every engineer.
                4. The first three proposals decided through the process.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A published charter exists, the group has met each quarter for a year and at least three proposals have been decided and announced."
                cadence: rolling
              tasks:
                - "Draft a one-page charter with members, scope and decision rules"
                - "Create a short proposal template for shared build changes"
                - "Hold the quarterly governance meeting and publish decisions @recurring(quarterly)"
                - "Run the first three proposals through the process"
            - name: Inheriting a build nobody understands
              description: |-
                ## Purpose
                Taking over a repository where the build is a tangle of scripts, makefiles and tribal knowledge, and its author has left, is a common first assignment in this area. Mapping what exists before changing anything, and fixing the single most painful step first, earns the trust needed for the bigger clean-up.

                ## Milestones
                1. Every build entry point traced: scripts, makefiles, CI jobs and manual steps.
                2. A written map of what each entry point produces and who relies on it.
                3. The single most painful step chosen with the team and fixed.
                4. A ninety-day plan for the wider clean-up shared with the team.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written map of every build entry point and a ninety-day clean-up plan are shared, and one agreed pain point is fixed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Trace every script, makefile and CI job that builds something"
                - "Ask the agent to summarise the scripts into a map of what produces what"
                - "Fix the one build step the team complains about most"
                - "Share a ninety-day clean-up plan with the team"
            - name: Publishing an open source directory from the monorepo
              description: |-
                ## Purpose
                Companies often want to open source one library that lives inside a private monorepo, without exposing internal code or maintaining two copies by hand. Setting up an export with path filtering and automated syncing, and deciding how outside contributions flow back in, makes the public project sustainable.

                ## Milestones
                1. The directory checked for internal references, secrets and licence headers before export.
                2. An export job that publishes only the chosen paths to a public repository.
                3. A route for outside pull requests to be imported, reviewed and landed internally.
                4. The first public release made from the exported repository.

                ## Notes
                Get the open source and legal review your organisation requires before the first export. History often contains things the current files do not.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An automated export publishes only the chosen directory to a public repository, and one outside contribution has been imported back successfully."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Scan the directory and its history for internal references and secrets"
                - "Set up an export job that publishes only the chosen paths"
                - "Agree how outside pull requests are imported and reviewed internally"
                - "Make the first public release from the exported repository"
            - name: Merging repositories after an acquisition
              description: |-
                ## Purpose
                After an acquisition or merger, two engineering groups arrive with different repository strategies, build tools and conventions, and forcing one onto the other overnight breaks delivery for both. A staged plan that starts with shared dependencies and access, and only later unifies tooling, keeps both teams shipping.

                ## Milestones
                1. Both codebases inventoried: repositories, build tools, languages and CI systems.
                2. Access, code ownership and security controls aligned before any code moves.
                3. A staged plan agreed, with the first stage limited to shared libraries.
                4. The first stage delivered and reviewed with both teams.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A staged merge plan is agreed by both engineering leads, and its first stage, limited to shared libraries, has been delivered."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Inventory both organisations' repositories, build tools and CI"
                - "Align access and code ownership before moving any code"
                - "Agree a staged plan with both engineering leads"
                - "Deliver the shared libraries stage and review it together"
            - name: One build for a polyglot repository
              description: |-
                ## Purpose
                Polyglot repositories with Java services, Python data jobs, TypeScript front ends and a little Go usually end up with four build tools that cannot see each other, so a schema change in one language never triggers tests in another. Bringing the languages under one graph, or at least wiring their boundaries together, makes cross-language changes safe.

                ## Milestones
                1. Every language and its current build tool listed, with the cross-language dependencies between them.
                2. A decision on one graph-aware tool or a thin orchestration layer over native tools.
                3. One cross-language dependency, such as a shared schema, wired so changes trigger dependants' tests.
                4. All languages building from one top-level command.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All languages build from one top-level command, and a change to a shared cross-language schema triggers its dependants' tests in every language."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List each language, its build tool and the links between them"
                - "Choose one graph-aware tool or an orchestration layer"
                - "Wire one shared schema so changes trigger tests in every consumer"
                - "Make the whole repository build from one top-level command"
            - name: Remote execution cluster capacity and cost
              description: |-
                ## Purpose
                A self-hosted remote execution cluster is a production service in its own right: undersized, it queues builds at nine in the morning, oversized, it burns money all night. Tracking queue time, worker use and cost per build each month keeps it sized to the real shape of the working day.

                ## Milestones
                1. Queue time, worker use and cost per build recorded per hour of the day.
                2. Autoscaling rules matched to the daily peak and quiet hours.
                3. A target for maximum queue time at peak agreed with engineering leads.
                4. Monthly capacity and cost figures reported alongside build times.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly reports show peak queue time within the agreed target and cost per build tracked for six consecutive months."
                cadence: rolling
              tasks:
                - "Collect queue time and worker use by hour of the day"
                - "Match autoscaling rules to the daily peak and quiet hours"
                - "Report cluster cost per build and peak queue time @recurring(monthly:12)"
                - "Agree a peak queue time target with engineering leads"
            - name: Build event analytics warehouse
              description: |-
                ## Purpose
                Build tools can stream a detailed event for every invocation, target and action, but most organisations look only at whether CI passed. Collecting those events in a queryable store answers questions no dashboard covers, such as which team's targets cause the most cache misses or how many engineer hours a slow test costs a month.

                ## Milestones
                1. Build event streaming switched on for CI and opt-in local builds.
                2. Events landing in a queryable store with retention agreed.
                3. Five standing queries written, including engineer hours spent waiting by target.
                4. One finding from the data acted on and its effect measured.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Build events from CI are queryable with five standing queries, and one change driven by the data has a measured effect."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Turn on build event streaming for CI builds"
                - "Load events into a queryable store with agreed retention"
                - "Write five standing queries, including waiting hours by target"
                - "Review the standing queries for one change worth making @recurring(monthly:2)"
            - name: Git at very large monorepo scale
              description: |-
                ## Purpose
                Past a few million files or hundreds of thousands of commits, ordinary git commands like status and log slow to a crawl, and no build tool fixes that. Features such as filesystem monitors, commit graphs, background maintenance and virtual file system approaches keep version control responsive, and each comes with trade-offs worth measuring first.

                ## Milestones
                1. Timings for status, log, checkout and fetch recorded on a typical engineer machine.
                2. Filesystem monitor, commit graph and scheduled maintenance enabled on a trial group.
                3. The same timings recorded after a month on the trial group.
                4. A recommended configuration rolled out with a script for every engineer.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Before and after timings for four git commands are recorded on a trial group, and a recommended configuration script is rolled out."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Time git status, log, checkout and fetch on a typical machine"
                - "Enable a filesystem monitor and commit graph for a trial group"
                - "Repeat the timings after a month on the trial group"
                - "Roll out the recommended configuration as a script"
            - name: Protecting the remote cache from poisoned entries
              description: |-
                ## Purpose
                Anything that can write to the build cache can change what every engineer and every release build receives, which makes the cache a supply chain target as well as a speed tool. Limiting writes to trusted CI, separating caches by trust level and reviewing credentials regularly closes a gap many teams never think about.

                ## Milestones
                1. Every identity with write access to the cache listed.
                2. Writes restricted to trusted CI jobs on protected branches only.
                3. Release builds using a separate cache, or none, from pull request builds.
                4. Cache credentials reviewed and rotated on a set schedule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Only trusted CI on protected branches can write to the cache, release builds use a separate cache and credentials are reviewed every quarter."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every identity that can write to the build cache"
                - "Limit cache writes to CI jobs on protected branches"
                - "Give release builds their own cache, separate from pull requests"
                - "Review and rotate cache write credentials @recurring(quarterly)"
---

# Build Systems & Monorepos

This area is for engineers and platform groups who look after the build and the shape of a large codebase, from a five-person workspace repository to an enterprise monorepo with hundreds of contributors. It starts with foundations (a build time baseline, a map of the dependency graph, the monorepo or polyrepo decision, a build tool chosen on evidence, a directory layout, code owners and one version of each third-party library), then the routines that keep builds healthy, the skills behind graph queries, build profiles, hermetic actions and custom rules, the improvements that make pull requests build only what changed, the dated events like a tool cutover or a repository-wide move, the situations a small team, an acquirer or a polyglot shop meets, and finally the specialist work of remote execution, build analytics, git at scale and cache security.

What repeats is a weekly build health review, weekly flaky action triage and build office hours, monthly checks on cache hit rate, cache storage, clone size and key target budgets, quarterly sweeps of the graph, code owners, dead targets and the build tool version, and a yearly review of the whole build system. The Metrics log, Purchase decision, Vendor, Risk register and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
