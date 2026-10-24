---
id: software-engineering.continuous-integration-deployment
name: Continuous Integration & Deployment
description: "Pipelines that build, test and deploy every change on their own: required checks, artifacts built once, safe secrets, fast feedback, deploy strategies with automatic rollback, and the routines that keep it all green."
category: business
version: 1.0.0
tags: [software-engineering, continuous-integration-deployment, engineer, team, ci-cd, pipelines, deployment, devops]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - metrics-log
    - risk-register
    - operational-checklist
    - compliance-control
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Continuous Integration & Deployment
          description: "Setting up pipelines that build, test and deploy every change automatically, keeping them fast, reliable and safe to release from."
          projects:
            - name: Map of every pipeline the team runs today
              description: |-
                ## Purpose
                Before changing anything, write down what actually happens between a push and a production deploy: which jobs run, where, how long they take and which steps are still done by hand. Teams are often surprised to find a forgotten cron job deploying from a laptop or a nightly build nobody reads. An honest map turns vague complaints about slow CI into a short list of real problems.

                ## Milestones
                1. Every repository with a pipeline listed, with its CI platform, trigger events and target environments.
                2. The median and slowest duration of the main pipeline recorded from the last thirty runs.
                3. Each manual step between merge and production named, with who does it today.
                4. The three biggest pain points agreed with the team and written at the top of the map.

                ## Notes
                Pull durations from the CI platform's run history rather than memory. People remember the bad days, not the median.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A shared document lists every pipeline, its median duration and every manual step to production, with three agreed pain points."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every repository that has a pipeline file or a build job"
                - "Export the last thirty runs of the main pipeline with durations"
                - "Walk a teammate through a deploy and note every manual step"
                - "Agree the top three pain points at the next team meeting"
            - name: Choosing a CI platform the team will keep
              description: |-
                ## Purpose
                Teams that pick a CI service because a tutorial used it often find, a year later, that it cannot run their jobs on the hardware they need or that the bill has tripled. Scoring two or three hosted and self-hosted options against your real workloads, security needs and budget gives a choice you can defend and will not revisit every quarter.

                ## Milestones
                1. Requirements written down: languages, runner operating systems, concurrency, secrets handling and data residency.
                2. Three platforms shortlisted, each scored against the same criteria.
                3. One real pipeline ported to the top two candidates as a trial.
                4. A decision recorded with the cost estimate and the reasons the others lost.

                ## Notes
                Start from the **Vendor** template. Price the plan on concurrent jobs and minutes at your expected volume in a year, not today's.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written platform decision with scores for three candidates, a trial run on two of them and a twelve-month cost estimate."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the list of must-have and nice-to-have CI requirements"
                - "Shortlist three CI platforms that meet the must-haves"
                - "Port one representative pipeline to the top two candidates"
                - "Record the decision and the twelve-month cost estimate"
            - name: Build, lint and unit tests on every pull request
              description: |-
                ## Purpose
                If tests only run when someone remembers, broken code reaches the main branch and the next person to pull pays for it. A first pipeline that compiles the code, runs the linter and the unit tests on every pull request is the single change that makes the rest of this area possible. Keep it simple and fast at first, under ten minutes, and add stages later.

                ## Milestones
                1. A pipeline triggers on every pull request and every push to the main branch.
                2. Build, lint and unit test stages run and report status back to the pull request.
                3. The pipeline finishes in under ten minutes on a typical change.
                4. Failing output links straight to the error line, not a log of thousands of lines.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every pull request in the repository shows a passing or failing build, lint and unit test status within ten minutes of being opened."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the commands that build and test the project from a clean checkout"
                - "Add a pipeline file that runs those commands on pull requests"
                - "Make the job report its status back to the pull request"
                - "Time five runs and trim any step over two minutes"
            - name: Required status checks and branch protection
              description: |-
                ## Purpose
                A pipeline that can be ignored will be ignored on a busy Friday. Protecting the main branch so nothing merges without passing checks and an approving review turns the pipeline from advice into a rule, and stops force pushes from rewriting history the deploy depends on.

                ## Milestones
                1. The main branch rejects direct pushes and force pushes.
                2. Build, lint and unit test checks are required before merge.
                3. Pull requests must be up to date with the main branch, or a merge queue handles it.
                4. A documented, logged route exists for an administrator to bypass protection in an emergency.

                ## Notes
                Name required checks by their stable job name. Renaming a job silently drops the requirement on some platforms.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A test pull request with a failing check cannot be merged, and the protection settings are written in the repository's contributing guide."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Turn on branch protection for the main branch"
                - "Mark the build, lint and unit test jobs as required checks"
                - "Open a deliberately failing pull request to prove merge is blocked"
                - "Write the emergency bypass procedure in the contributing guide"
            - name: Pipeline definitions kept in the repository
              description: |-
                ## Purpose
                Jobs configured by clicking through a CI server's web interface cannot be reviewed, diffed or restored after someone changes them. Moving every job into a pipeline file in the repository means pipeline changes go through the same review as code, and you can see exactly which pipeline built any old commit.

                ## Milestones
                1. Every job previously configured in the web interface has an equivalent pipeline file.
                2. The old interface-configured jobs disabled and then removed.
                3. Changes to pipeline files require review from someone who owns the pipeline.
                4. A short comment at the top of each pipeline file explains what it does and who owns it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No job remains configured only in the CI server's interface, and every pipeline file has a named owner in the code owners file."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export the configuration of each job set up in the web interface"
                - "Rewrite each one as a pipeline file and run both side by side"
                - "Disable the old jobs once the new ones pass for a week"
                - "Add pipeline file owners to the code owners file"
            - name: Reproducible builds with pinned toolchains
              description: |-
                ## Purpose
                When the runner image updates a compiler overnight, a build that passed yesterday fails today with no code change, and nobody can reproduce it locally. Pinning language versions, base images and dependency lockfiles makes a build of the same commit produce the same result next month, which is what lets you trust a rerun.

                ## Milestones
                1. Language and tool versions declared in a version file the pipeline reads.
                2. Dependency lockfiles committed and the pipeline installs strictly from them.
                3. Container base images and third-party pipeline steps pinned to a digest or exact version.
                4. Two builds of the same commit a week apart produce matching outputs or checksums.

                ## Notes
                Pinning without a plan to update creates a different problem. Pair this with the template and action upgrade cycle further down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Rebuilding a tagged commit a week later uses identical tool versions and dependencies, confirmed by comparing the two build logs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Add a tool version file for the language runtime"
                - "Switch the install step to a strict lockfile install"
                - "Pin third-party pipeline steps to exact versions or digests"
                - "Rebuild last week's tag and compare the outputs"
            - name: Build once, promote the same artifact
              description: |-
                ## Purpose
                Rebuilding from source for each environment means the thing tested in staging is not quite the thing running in production. Building one versioned artifact per commit, storing it in an artifact registry and promoting that exact file or image from staging to production removes a whole class of surprises.

                ## Milestones
                1. Each merge to the main branch produces one artifact tagged with the commit identifier.
                2. Artifacts stored in a registry with a retention rule, not on a runner's disk.
                3. Staging and production deploys pull the same artifact by its identifier or digest.
                4. Environment differences supplied as configuration at deploy time, never baked into the build.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The production deploy log shows the same artifact digest that passed staging, for three deploys in a row."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose where versioned artifacts will be stored"
                - "Tag each build with the commit identifier and push it to the registry"
                - "Change the deploy jobs to pull by identifier instead of rebuilding"
                - "Move environment-specific values out of the build into deploy configuration"
            - name: Short-lived cloud credentials for pipelines
              description: |-
                ## Purpose
                Long-lived cloud keys pasted into CI variables are among the most common ways pipelines get breached, and they tend to outlive the person who created them. Most CI platforms can now exchange a signed identity token for short-lived cloud credentials, scoped to one repository and branch, so there is nothing permanent to leak.

                ## Milestones
                1. Every long-lived credential stored in the CI platform listed with what it grants.
                2. Identity federation set up between the CI platform and the cloud account.
                3. Deploy roles scoped to a named repository and the main branch only.
                4. The old static keys revoked and deleted from CI variables.

                ## Notes
                Secrets still needed, such as third-party API tokens, belong in the platform's secret store with masking on, never in the pipeline file.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No static cloud access key remains in any CI variable, and deploys succeed using federated credentials scoped to the main branch."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every secret and key stored in the CI platform"
                - "Set up identity federation between CI and the cloud account"
                - "Create a deploy role limited to one repository and branch"
                - "Revoke the old static keys once a federated deploy succeeds"
            - name: First automatic deploy to staging
              description: |-
                ## Purpose
                Continuous integration stops at a green tick; continuous deployment starts when a merged change lands somewhere real without anyone touching it. Deploying every merge to a staging environment automatically gives the team a place to see changes running within minutes and shakes out the deploy script long before production depends on it.

                ## Milestones
                1. Every merge to the main branch deploys to staging with no manual step.
                2. The deploy job runs a smoke test against staging and fails loudly if it breaks.
                3. Staging shows which commit is running on a status page or health endpoint.
                4. The team is told in chat when a staging deploy succeeds or fails.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten consecutive merges reached staging automatically, each followed by a passing smoke test and a chat notification."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Script the current staging deploy so it runs from one command"
                - "Call that script from the pipeline after merges to the main branch"
                - "Add a smoke test that checks the health endpoint and one key page"
                - "Send deploy results to the team chat channel"
            - name: Agreeing what a green main branch means
              description: |-
                ## Purpose
                Without a shared rule, some people merge on a red build because the failure looks unrelated, and soon nobody knows whether the main branch is deployable. A short written agreement on what must pass, who fixes a broken build and when to revert gives everyone the same reflex.

                ## Milestones
                1. A one-page agreement saying the main branch must always be deployable.
                2. The rule for broken builds written: revert within a set time if no fix is in sight.
                3. Who is allowed to retry, skip or override a failing check written down.
                4. The agreement linked from the repository readme and accepted at a team meeting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written green-branch agreement with a revert time limit is linked from the readme and was accepted at a recorded team meeting."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft the green main branch rule in one page"
                - "Propose a revert time limit for broken builds"
                - "Discuss and agree the rule at the team meeting"
                - "Link the agreement from the repository readme"
            - name: Broken main branch rota
              description: |-
                ## Purpose
                When the main branch goes red, everyone assumes someone else is looking at it, and a twenty-minute fix becomes a lost afternoon of blocked merges. A simple weekly rota names one person whose job is to notice, revert or chase the fix, so the branch rarely stays broken for long.

                ## Milestones
                1. A weekly rota published with every engineer on it.
                2. Main branch failures post to a channel the rota holder watches.
                3. Each red build gets an owner or a revert within the agreed time limit.
                4. Time spent red each week noted at handover.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over four weeks, every main branch failure had a named owner or a revert within the agreed time limit."
                cadence: rolling
              tasks:
                - "Publish the rota with a name against each week"
                - "Route main branch failure alerts to the rota channel"
                - "Hand over the rota with a note of time spent red @recurring(weekly:fri)"
            - name: Weekly pipeline health review
              description: |-
                ## Purpose
                Pipelines decay a minute at a time: a new test suite here, a slower runner there, until feedback takes forty minutes and people stop waiting for it. Fifteen minutes a week looking at duration, failure rate and queue time catches the drift while it is still cheap to fix.

                ## Milestones
                1. A dashboard or saved query shows median duration, failure rate and queue time per pipeline.
                2. Thresholds agreed for each number, such as median under twelve minutes.
                3. Any number over threshold has a ticket with an owner.
                4. Monthly medians logged so trends are visible over a year.

                ## Notes
                Start from the **Metrics log** template for the monthly numbers. Separate failures caused by code from failures caused by the pipeline itself, or the failure rate tells you nothing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly reviews held in a quarter, with monthly medians logged and every over-threshold number tied to a ticket."
                cadence: rolling
              tasks:
                - "Build a saved view of duration, failure rate and queue time"
                - "Agree a threshold for each of the three numbers"
                - "Review pipeline duration, failure rate and queue time @recurring(weekly:mon)"
                - "Log the monthly median pipeline time in the metrics log @recurring(monthly:3)"
            - name: Infrastructure failure triage for CI jobs
              description: |-
                ## Purpose
                Not every red job is a code problem: package registries time out, runners run out of disk, and a rate limit on a container registry can fail half the jobs in an hour. Sorting infrastructure failures from genuine ones, and fixing their causes, stops people from learning to click retry without reading the log.

                ## Milestones
                1. Failure categories defined: network, registry, runner resources, platform outage and code.
                2. The last fifty failures tagged by category.
                3. A narrow automatic retry added only for known transient network errors.
                4. The top infrastructure cause fixed at its source, such as a mirror or a larger disk.

                ## Notes
                Blanket retries hide real failures and double your minutes. Retry only on specific, identified error messages.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Infrastructure-caused failures fall by half over two months, measured from tagged failure records."
                cadence: rolling
              tasks:
                - "Define five failure categories for pipeline jobs"
                - "Tag the last fifty failed jobs by category"
                - "Triage jobs that failed on infrastructure errors this week @recurring(weekly:wed)"
                - "Fix the most common infrastructure cause at its source"
            - name: Self-hosted runner fleet upkeep
              description: |-
                ## Purpose
                Self-hosted runners give speed and access to private networks, but an unpatched runner image is a server with deploy rights that nobody is looking after. A monthly rebuild of the runner image and a weekly check on disk and capacity keep the fleet secure and stop slow jobs caused by full disks.

                ## Milestones
                1. The runner image defined in code and rebuilt from scratch, not patched in place.
                2. Runner hosts replaced with the new image each month.
                3. Disk, memory and queue alerts set for the fleet.
                4. Runner capacity matched to peak queue times, with the numbers recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every runner in the fleet is under thirty-one days old and no job failed for lack of disk in the last month."
                cadence: rolling
              tasks:
                - "Write down which runner hosts exist and what image each one uses"
                - "Rebuild and roll out the patched runner image @recurring(monthly:9)"
                - "Check runner disk usage and clear stale workspaces @recurring(weekly:tue)"
                - "Set alerts for full disks and long queue times"
            - name: CI secret and deploy token rotation
              description: |-
                ## Purpose
                Tokens for package registries, chat notifications and third-party APIs pile up in CI settings and rarely change, even after the people who created them leave. A rotation calendar with an owner per secret makes leaks less damaging and catches secrets that are no longer used at all.

                ## Milestones
                1. Every remaining CI secret listed with owner, purpose, scope and last rotation date.
                2. Unused secrets deleted after confirming nothing depends on them.
                3. Each secret given a rotation interval based on what it can reach.
                4. Rotation steps written for each secret so anyone on the team can do it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every CI secret has an owner and a rotation date no older than its agreed interval, checked at the end of each quarter."
                cadence: rolling
              tasks:
                - "Export the list of secrets from each CI platform and repository"
                - "Assign an owner and rotation interval to each secret"
                - "Rotate the deploy tokens due this quarter @recurring(quarterly)"
                - "Review CI secrets unused in the last ninety days @recurring(monthly:24)"
            - name: CI minutes and runner cost budget
              description: |-
                ## Purpose
                Build minutes are easy to waste: jobs that run on every push to every branch, matrices that test six versions nobody supports, and caches that never hit. A monthly look at minutes spent against a budget keeps the CI bill predictable and often finds the slow jobs at the same time.

                ## Milestones
                1. A monthly CI budget agreed in minutes or money.
                2. The five most expensive pipelines identified from billing data.
                3. Path filters or conditions added so documentation-only changes skip the full build.
                4. Monthly spend tracked against budget for a quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "CI spend stays within the agreed monthly budget for three consecutive months, with the five costliest pipelines reviewed."
                cadence: rolling
              tasks:
                - "Download last month's CI usage report"
                - "Find the five pipelines that use the most minutes"
                - "Add path filters so documentation changes skip the full build"
                - "Compare CI minutes spent against the budget @recurring(monthly:20)"
            - name: Automatic deploy log and change records
              description: |-
                ## Purpose
                When something breaks in production, the first question is what changed, and a chat history is a poor answer. Having the pipeline write a record for every deploy (who merged, which commit, which environment, start and end time) answers it in seconds and gives auditors their evidence for free.

                ## Milestones
                1. Every production deploy writes a record with commit, author, environment and time.
                2. Deploy markers appear on the main service dashboards.
                3. Records kept for at least the period your policies require.
                4. Manual deploys outside the pipeline show up as gaps in the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every production deploy in the last month has a pipeline-written record, and deploy markers appear on the main dashboard."
                cadence: rolling
              tasks:
                - "Choose where deploy records will be written"
                - "Add a pipeline step that writes the record after each deploy"
                - "Send deploy markers to the monitoring dashboard"
                - "Check every production deploy this month has a record @recurring(monthly:28)"
            - name: Shared pipeline template and action upgrades
              description: |-
                ## Purpose
                Pinned third-party steps and shared templates drift out of date, and the update that finally matters (a security fix or a platform deprecation) arrives as a broken pipeline on a deadline. A monthly upgrade pass, with automated update pull requests for pipeline dependencies, keeps the gap small.

                ## Milestones
                1. Automated update pull requests turned on for pipeline steps and shared templates.
                2. Platform deprecation notices tracked with a date for each.
                3. Updates tested on one repository before rolling to the rest.
                4. No pipeline step more than two major versions behind.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No pipeline step in any repository is more than two major versions behind, confirmed at the monthly upgrade pass."
                cadence: rolling
              tasks:
                - "Turn on automated update pull requests for pipeline dependencies"
                - "List the platform deprecation notices that apply to you"
                - "Check for new versions of shared templates and steps @recurring(monthly:14)"
                - "Roll each tested update to the remaining repositories"
            - name: Deploy freeze and change window calendar
              description: |-
                ## Purpose
                Deploying the afternoon before a public holiday or during the biggest trading week of the year is how small bugs become long weekends. A published calendar of freezes and quiet windows, enforced by the pipeline rather than by memory, lets the team plan around them and still ship urgent fixes through a known exception route.

                ## Milestones
                1. Freeze periods for the year agreed with product and support.
                2. The pipeline blocks production deploys during freezes unless an exception label is applied.
                3. The exception route names who can approve and what record is kept.
                4. The calendar shared where the whole company can see it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The year's freeze calendar is published and a test deploy during a freeze is blocked without an approved exception."
                cadence: cyclic
              tasks:
                - "Ask product and support for the year's high-risk dates"
                - "Add a freeze check step to the production deploy job"
                - "Write the exception approval route and who can use it"
                - "Publish next year's deploy freeze calendar @recurring(yearly)"
            - name: Quarterly rollback drill
              description: |-
                ## Purpose
                A rollback button nobody has pressed in six months may not work, especially after a database migration or a change to the deploy script. Rolling back a real staging deploy each quarter, and timing it, proves the path works and keeps the steps fresh in people's heads.

                ## Milestones
                1. A rollback runbook written for each deployable service.
                2. A staging rollback performed and timed each quarter.
                3. Anything that blocked a clean rollback, such as an irreversible migration, logged and fixed.
                4. Rollback time recorded and compared with the previous drill.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four rollback drills a year are recorded, each with a time to restore and any blockers ticketed."
                cadence: cyclic
              tasks:
                - "Write the rollback steps for the main service"
                - "Run a rollback drill on staging and time it @recurring(quarterly)"
                - "Ticket anything that blocked a clean rollback"
                - "Record the drill time beside the previous one"
            - name: Advanced pipeline syntax on your CI platform
              description: |-
                ## Purpose
                Most pipeline files are copied from an example and grow by accretion, because few people learn the platform's features properly. A week of focused study on conditions, matrices, reusable workflows, job outputs and concurrency controls lets you write pipelines that are shorter and easier to read.

                ## Milestones
                1. The platform's documentation on conditions, matrices and reusable components read with notes.
                2. A practice repository with one example of each feature working.
                3. Concurrency groups used so a newer push cancels an older redundant run.
                4. One real pipeline rewritten using what you learned and reviewed by a teammate.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice repository demonstrates matrices, conditions, reusable components and concurrency, and one production pipeline was rewritten with them."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read your CI platform's documentation on matrices and conditions"
                - "Create a practice repository for pipeline experiments"
                - "Add concurrency groups so new pushes cancel stale runs"
                - "Rewrite one real pipeline with reusable components"
            - name: Dependency caching that actually hits
              description: |-
                ## Purpose
                Caches with the wrong key either never hits, so every job downloads the internet, or always hits, so jobs run against stale dependencies. Learning how your platform keys, restores and evicts caches, and measuring the hit rate, often cuts minutes off every run.

                ## Milestones
                1. Cache keys based on the lockfile hash with a sensible fallback key.
                2. Cache hit rate measured over twenty runs.
                3. Dependency install time recorded before and after the change.
                4. Cache size kept within the platform's limits so useful entries are not evicted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Cache hit rate above eighty percent over twenty runs, with dependency install time cut by at least half."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Time the dependency install step on five recent runs"
                - "Key the cache on the lockfile hash with a fallback"
                - "Measure the hit rate across the next twenty runs"
                - "Write a note on how the cache keys work for the team"
            - name: Splitting test jobs across parallel runners
              description: |-
                ## Purpose
                Once a test suite passes fifteen minutes, running it on one machine is the bottleneck no cache can fix. Sharding tests across several parallel jobs, balanced by past timings rather than file count, brings feedback back under ten minutes without deleting a single test.

                ## Milestones
                1. Test timings collected per file from recent runs.
                2. Tests split across parallel jobs using timing data.
                3. The slowest shard within a few minutes of the fastest.
                4. Test results from all shards combined into one report on the pull request.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The test stage runs on at least four parallel shards whose durations differ by under three minutes, with one combined report."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Export per-file test timings from the last ten runs"
                - "Configure the test stage to run as a parallel matrix"
                - "Balance shards using the timing data"
                - "Merge shard results into one report on the pull request"
            - name: Rolling, blue-green and canary deploys compared
              description: |-
                ## Purpose
                The way a new version replaces the old one decides how many users see a bad release and how quickly you can back out. Understanding rolling updates, blue-green switches and canary releases, with their costs in spare capacity and complexity, lets you pick the right one for each service instead of using whatever the first tutorial showed.

                ## Milestones
                1. A one-page comparison of rolling, blue-green and canary covering capacity, risk and rollback speed.
                2. Each strategy tried on a test service in a sandbox environment.
                3. The current strategy of each production service written down.
                4. A recommendation per service shared with the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of three deploy strategies exists, each tried in a sandbox, with a recommended strategy recorded per production service."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-page comparison of the three strategies"
                - "Deploy a test service with a blue-green switch in a sandbox"
                - "Record which strategy each production service uses today"
                - "Share a recommendation per service with the team"
            - name: Running the pipeline locally before pushing
              description: |-
                ## Purpose
                Pushing a commit just to see whether a pipeline change works, then waiting eight minutes for a typo error, is one of the slowest loops in software. Putting the real steps in a task runner or script the pipeline calls, so the same command works on a laptop, turns most pipeline debugging into a ten-second local run.

                ## Milestones
                1. Every pipeline stage calls a named script or task, not inline shell commands.
                2. The same tasks run on a developer machine with one command.
                3. A local runner or container used to test pipeline file changes where the platform supports it.
                4. The readme explains how to run the full check locally.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every pipeline stage maps to a task a developer can run locally with one documented command."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Move inline pipeline shell commands into named tasks"
                - "Run the full set of tasks on a clean laptop checkout"
                - "Try a local runner tool for testing pipeline file changes"
                - "Document the one command that runs every check locally"
            - name: Methodical debugging of failing pipeline jobs
              description: |-
                ## Purpose
                Jobs that pass locally and fail in CI usually differ in one of a handful of ways: environment variables, file permissions, missing services, time zones or a different tool version. Learning a fixed checklist and the platform's debug tools, such as verbose logging and interactive runner sessions, turns hours of guessing into a short search.

                ## Milestones
                1. A checklist of the usual differences between laptop and runner written for the team.
                2. Debug logging and interactive runner access tried on a practice failure.
                3. Three past mystery failures traced to their root cause using the checklist.
                4. The checklist linked from the pipeline readme.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written debugging checklist exists and was used to explain three past pipeline failures, each with a recorded root cause."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the list of common laptop versus runner differences"
                - "Turn on debug logging for one practice failure"
                - "Trace three past mystery failures to a root cause"
                - "Link the checklist from the pipeline readme"
            - name: Database migrations as a gated pipeline step
              description: |-
                ## Purpose
                Deploys most often go wrong when the code and the database schema change in the wrong order, or when a migration locks a busy table mid-deploy. Running migrations as their own pipeline step, before or after the code as the change requires, with a check for locking operations, makes the order deliberate rather than accidental.

                ## Milestones
                1. Migrations run as a separate pipeline step with its own logs and status.
                2. A rule written for which changes run before the code deploy and which after.
                3. An automated check flags migrations that take long locks or cannot be reversed.
                4. A migration failure stops the deploy before new code goes out.

                ## Notes
                Schema design itself belongs with the database team's own work. This project is about when and how the pipeline runs the migration.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Migrations run as a distinct pipeline step with a lock check, and a deliberately failing migration halted a staging deploy."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Move migrations out of application start-up into a pipeline step"
                - "Write the before or after rule for schema changes"
                - "Add a check that flags long-locking migrations"
                - "Prove a failing migration halts a staging deploy"
            - name: Feature flags to separate deploy from release
              description: |-
                ## Purpose
                If every deploy also switches new behaviour on for every user, teams start batching changes and deploying less often out of fear. Wrapping unfinished work in feature flags lets code ship to production daily while the decision to show it stays with product, and turns a risky rollback into flipping a switch.

                ## Milestones
                1. A flag service or library chosen and wired into the main application.
                2. One upcoming feature shipped behind a flag and turned on for internal users first.
                3. A naming rule and an owner field required for every flag.
                4. A cleanup rule agreed: flags removed within a set number of weeks of full rollout.

                ## Notes
                Old flags are technical debt with a live switch attached. Track their age from day one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One feature reached production behind a flag before it was turned on, and every flag has an owner and a removal date."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compare two feature flag options for the main application"
                - "Ship one upcoming feature behind a flag"
                - "Turn the flag on for internal users before anyone else"
                - "Agree the naming, ownership and removal rule for flags"
            - name: Cutting pull request feedback to under ten minutes
              description: |-
                ## Purpose
                Delivery research and everyday experience agree that once feedback takes more than about ten minutes, people switch tasks and batch changes, and both quality and speed drop. A focused push using the pipeline map, caching, sharding and job ordering can bring a thirty-minute pipeline down to ten, and it is the improvement engineers notice most.

                ## Milestones
                1. Current median and slowest pull request pipeline times recorded as the baseline.
                2. The critical path of jobs drawn, showing which steps block which.
                3. Fast checks moved first so most failures appear in the first three minutes.
                4. Median pull request pipeline time under ten minutes for two consecutive weeks.

                ## Notes
                Fix the critical path, not the biggest job. A slow job running in parallel with a slower one saves nothing.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Median pull request pipeline time stays under ten minutes for two consecutive weeks, down from the recorded baseline."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Record the current median and slowest pipeline times"
                - "Draw the critical path of the pull request pipeline"
                - "Reorder jobs so lint and type checks fail first"
                - "Ask the agent to summarise the slowest steps from the last thirty run logs"
            - name: Adopting a merge queue
              description: |-
                ## Purpose
                With more than a handful of engineers merging each day, two pull requests that each pass alone can break the main branch together, and requiring everyone to rebase first creates a race. A merge queue tests each change against the latest main branch plus the changes ahead of it, which keeps the branch green without the rebase scramble.

                ## Milestones
                1. The number of main branch breaks caused by merge interactions counted for a month.
                2. Merge queue options on your platform compared for cost and speed.
                3. The queue piloted on one busy repository.
                4. A decision recorded to adopt, extend or drop the queue based on breaks and wait times.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the merge queue, based on a month's count of interaction breaks and pilot wait times."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Count main branch breaks caused by merge interactions last month"
                - "Read how merge queues work on your CI platform"
                - "Pilot the merge queue on the busiest repository"
                - "Record the decision with break counts and queue wait times"
            - name: Moving to trunk-based development
              description: |-
                ## Purpose
                Long-lived feature branches make continuous integration impossible in practice: integration happens once, painfully, at the end. Moving to short-lived branches merged at least daily, with flags for unfinished work, is a change in team habit as much as tooling, and it is worth deciding deliberately rather than drifting into.

                ## Milestones
                1. Current branch lifetimes measured from repository history.
                2. A target agreed, such as most branches merged within two days.
                3. Flags and small pull requests in place to support the target.
                4. Branch lifetime measured again after six weeks and the result discussed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Median branch lifetime is measured before and six weeks after the change, with a written team decision on the target."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Measure median branch lifetime over the last three months"
                - "Propose a branch lifetime target to the team"
                - "Agree how unfinished work will be hidden behind flags"
                - "Measure branch lifetime again after six weeks"
            - name: Preview environments for each pull request
              description: |-
                ## Purpose
                Reviewers, designers and product managers can judge a change far better by clicking it than by reading a diff, and a shared staging server is always occupied. A short-lived environment per pull request, built from the same artifact and torn down on merge, lets everyone try changes in isolation.

                ## Milestones
                1. Each pull request gets an environment with a link posted on the pull request.
                2. Preview environments use seeded test data, never production data.
                3. Environments destroyed automatically when the pull request closes.
                4. The monthly cost of preview environments known and within budget.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every open pull request has a working preview link, closed ones have no environment left, and monthly cost is recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose how preview environments will be hosted"
                - "Deploy a preview for each pull request and post the link"
                - "Seed previews with test data only"
                - "Check leftover preview environments against the cleanup job @recurring(monthly:11)"
            - name: Deciding on continuous deployment to production
              description: |-
                ## Purpose
                Some teams deploy every merge straight to production; others keep a manual approval before the final step. Neither is right everywhere, and the choice depends on test coverage, rollback speed, regulatory duties and how reversible your changes are. Writing down the risks on each side makes the decision honest instead of habitual.

                ## Milestones
                1. Preconditions listed: test coverage, automatic rollback, monitoring and on-call cover.
                2. The risks of automatic and manual approval written into a risk register.
                3. A trial period of automatic production deploys run for one low-risk service.
                4. A decision recorded per service with the conditions for revisiting it.

                ## Notes
                Start from the **Risk register** template. A manual approval that nobody actually reviews is not a control, just a delay.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision per service on automatic or approved production deploys, backed by a risk register and a trial on one service."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the preconditions for safe automatic production deploys"
                - "Fill in the risk register for both approaches"
                - "Trial automatic production deploys on one low-risk service"
                - "Record the decision for each service and when to revisit it"
            - name: Automatic rollback on failed health checks
              description: |-
                ## Purpose
                At three in the morning nobody makes a good rollback decision quickly. Having the deploy watch error rates and health checks for the first minutes after release, and roll back on its own when they cross a threshold, limits the damage of a bad deploy to minutes instead of however long it takes someone to wake up.

                ## Milestones
                1. Health signals chosen for each service, such as error rate, latency and a readiness check.
                2. Thresholds and a watch period set for the post-deploy check.
                3. The pipeline rolls back automatically and alerts the team when a threshold is crossed.
                4. A deliberately broken release in staging rolled back without human action.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deliberately faulty release in staging was rolled back automatically within the watch period, with an alert sent."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick three health signals for the main service"
                - "Set the thresholds and watch period after each deploy"
                - "Add the automatic rollback and alert step to the deploy job"
                - "Ship a deliberately broken build to staging to test it"
            - name: Hosted versus self-hosted runners
              description: |-
                ## Purpose
                Hosted runners need no upkeep but can be slow, expensive at scale and unable to reach private networks; self-hosted runners are fast and cheap per minute but become infrastructure you must patch and secure. Comparing both on your real jobs gives a decision based on numbers rather than preference.

                ## Milestones
                1. The same pipeline timed on hosted and self-hosted runners.
                2. Monthly cost of each option estimated, including engineer time for upkeep.
                3. Security implications written down, especially for public repositories.
                4. A decision recorded, possibly a mix by job type.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded runner decision with timing and monthly cost figures for both options, including upkeep hours."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Run the same pipeline on hosted and self-hosted runners"
                - "Estimate monthly cost for both, including upkeep time"
                - "Write down the security differences for each option"
                - "Record which jobs will use which kind of runner"
            - name: Shared pipeline templates instead of copies
              description: |-
                ## Purpose
                Ten repositories with ten slightly different copies of the same pipeline means a fix has to be made ten times, and usually is made twice. Extracting the common stages into a versioned shared template that each repository includes keeps them consistent while still allowing a repository to add its own steps.

                ## Milestones
                1. Common stages across repositories identified by comparing pipeline files.
                2. A versioned shared template published for build, test and deploy.
                3. Three repositories moved onto the template.
                4. A change to the template rolled out to all users with one version bump each.

                ## Notes
                Keep the template small. A template with forty options is just a second pipeline language nobody understands.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least three repositories use a versioned shared pipeline template, and one template fix reached all of them."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Compare pipeline files across repositories and list common stages"
                - "Publish a versioned shared template for those stages"
                - "Move three repositories onto the template"
                - "Ask the agent to draft the template's usage guide from the pipeline file"
            - name: Migrating off an old CI server
              description: |-
                ## Purpose
                Moving from an ageing self-managed build server to a new platform touches every repository and every deploy, and a big-bang switch usually means a week of nobody shipping. Running old and new side by side, repository by repository, with a dated cutover and a fallback, keeps delivery going throughout.

                ## Milestones
                1. Every job on the old server inventoried with an owner and a migration order.
                2. Old and new pipelines run in parallel for each repository until results match.
                3. Deploy jobs moved last, after build and test have run cleanly for two weeks.
                4. The old server switched to read-only, then decommissioned on a set date.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "All jobs run on the new platform, the old CI server is decommissioned, and no deploy was blocked for more than a day during the move."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Inventory every job on the old server with its owner"
                - "Set the migration order and a target cutover date"
                - "Run old and new pipelines in parallel for the first repository"
                - "Switch the old server to read-only after the last deploy job moves"
            - name: First production deploy of a new service
              description: |-
                ## Purpose
                New services are the cheapest moment to get the pipeline right, because each one has no users yet and no habits to change. Making the very first production release go through the full pipeline, with checks, artifact promotion and rollback in place, sets the standard for the service's whole life.

                ## Milestones
                1. The new service has build, test and deploy stages from the shared template.
                2. Staging deploys run automatically before any production deploy.
                3. Rollback tested on staging before the first production release.
                4. The first production deploy done by the pipeline, not by hand.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new service's first production release was deployed by the pipeline after a tested staging rollback."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create the new service's pipeline from the shared template"
                - "Confirm staging deploys run on every merge"
                - "Test a rollback on staging before launch"
                - "Run the first production deploy through the pipeline"
            - name: Break-glass deploy when CI is down
              description: |-
                ## Purpose
                CI platforms have outages, and one will eventually coincide with a production incident that needs a fix shipped now. A written, rehearsed procedure for deploying a reviewed artifact without the pipeline, with logging and a follow-up record, means the outage costs you minutes rather than the whole incident.

                ## Milestones
                1. A break-glass procedure written with who may use it and what is logged.
                2. Emergency credentials stored with access alerts, separate from everyday ones.
                3. The procedure rehearsed once on staging with a timer running.
                4. A follow-up step that reconciles the manual deploy with the pipeline afterwards.

                ## Notes
                Start from the **Operational checklist** template. The procedure should still deploy a known artifact, never an untested build from someone's laptop.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written break-glass procedure was rehearsed on staging within the last year, with the time taken and the log recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the break-glass deploy procedure and who may use it"
                - "Set up alerting on use of the emergency credentials"
                - "Rehearse the break-glass deploy on staging @recurring(yearly)"
                - "Add the reconciliation step for after the outage"
            - name: Preparing pipelines for a peak trading period
              description: |-
                ## Purpose
                Before a launch or the busiest season of the year, the pipeline itself becomes a risk: a slow deploy or a failed rollback during peak traffic hurts more than at any other time. Checking deploy speed, rollback, freeze rules and runner capacity a few weeks ahead gives you a quiet peak.

                ## Milestones
                1. Peak dates and the freeze window around them agreed.
                2. A full deploy and rollback timed on production-like infrastructure.
                3. Runner capacity confirmed for the burst of fixes that often follows a freeze.
                4. The hotfix route through the freeze tested end to end.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the peak, a timed deploy and rollback, a tested hotfix route and a confirmed freeze window are all recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the peak dates and freeze window with product"
                - "Time a full deploy and rollback on production-like infrastructure"
                - "Test the hotfix route through the freeze end to end"
                - "Check runner capacity for the post-freeze queue"
            - name: Change management evidence for an audit
              description: |-
                ## Purpose
                Security and compliance audits, such as SOC 2 or ISO 27001 assessments, ask you to prove that every production change was reviewed, tested and approved. If the pipeline already enforces those steps, the evidence is mostly an export; if it does not, you find out under a deadline.

                ## Milestones
                1. The auditor's change management questions mapped to pipeline controls.
                2. Branch protection, required reviews and deploy logs exported for the audit period.
                3. Any production changes made outside the pipeline explained in writing.
                4. Gaps found during preparation added to a remediation list with owners.

                ## Notes
                Start from the **Compliance control** template. Confirm with your compliance lead which period and which systems are in scope before exporting anything.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An evidence pack covering the audit period shows review, tests and approval for every production change, with gaps listed."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Ask the compliance lead for the audit period and systems in scope"
                - "Map each change management question to a pipeline control"
                - "Export branch protection settings and deploy logs for the period"
                - "List any gaps with an owner and a fix date"
            - name: CI and deploys for a solo developer
              description: |-
                ## Purpose
                Working alone, there is nobody to notice you skipped the tests, and a free tier of a hosted CI service covers almost everything a small project needs. A lean pipeline that runs tests on every push and deploys the main branch to a cheap host keeps a side project shippable on weekday evenings.

                ## Milestones
                1. A single pipeline file that tests on every push.
                2. Merges to the main branch deploy to the hosting provider automatically.
                3. Pipeline time kept under five minutes to stay within free minutes.
                4. A failed deploy sends an email or phone notification.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The project deploys automatically from the main branch, tests run on every push and the pipeline stays within the free tier."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick a hosted CI service with a free tier for your repository"
                - "Add one pipeline file that tests on every push"
                - "Connect main branch merges to an automatic deploy"
                - "Turn on notifications for failed deploys"
            - name: Learning an unfamiliar pipeline in your first weeks
              description: |-
                ## Purpose
                Joining a team, you inherit a pipeline built over years by people who may have left, and nobody explains it because everyone else is used to it. Tracing one change from pull request to production in your first fortnight, and writing down what surprised you, makes you useful quickly and often finds problems the team stopped seeing.

                ## Milestones
                1. One of your own changes followed through every pipeline stage to production.
                2. Every pipeline file in the main repository read with questions noted.
                3. A short diagram of the stages and environments drawn.
                4. Your list of surprises shared with the team for discussion.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within two weeks of joining, a diagram of the pipeline and a list of questions and surprises was shared with the team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read every pipeline file in the main repository"
                - "Follow one of your own changes through to production"
                - "Draw the stages and environments on one page"
                - "Share your list of surprises with the team"
            - name: Taking over pipeline ownership from a departing engineer
              description: |-
                ## Purpose
                Pipelines are often understood by one person, and when that person leaves, the team discovers credentials only they could rotate and jobs only they could fix. A structured handover in their last weeks moves the knowledge, access and documentation before the leaving date, not after the first failure.

                ## Milestones
                1. Every credential, runner and integration the person administers listed.
                2. Admin access granted to at least two remaining people.
                3. A recorded walkthrough of the pipeline and its known quirks.
                4. Accounts and tokens tied to the departing person replaced with team-owned ones.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Before the leaving date, two people hold admin access, a walkthrough is recorded and no pipeline token belongs to the departing person."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List everything the departing engineer administers in CI"
                - "Book a recorded walkthrough of the pipeline and its quirks"
                - "Grant admin access to two remaining team members"
                - "Replace personal tokens with team-owned service accounts"
            - name: Safe CI for contributions from forks
              description: |-
                ## Purpose
                Public repositories accept pull requests from strangers, and a pipeline that runs their code with access to secrets is an open door. Splitting untrusted builds from privileged ones, and requiring a maintainer's approval before anything with secrets runs, lets the project accept outside contributions safely.

                ## Milestones
                1. Pipelines triggered by fork pull requests run without secrets or write permissions.
                2. Privileged jobs, such as publishing previews, run only after maintainer approval.
                3. First-time contributor workflows require approval before running.
                4. The pipeline's default token permissions reduced to read-only.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A test pull request from a fork runs without access to secrets, and privileged jobs wait for maintainer approval."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check which pipeline triggers run code from forks"
                - "Remove secrets and write permissions from fork-triggered jobs"
                - "Require approval before first-time contributors' workflows run"
                - "Open a test pull request from a fork to confirm the limits"
            - name: Segregation of duties in a regulated pipeline
              description: |-
                ## Purpose
                Teams in finance, health and other regulated fields often must show that the person who wrote a change is not the only one who approved and released it. Building that rule into the pipeline, with protected environments and required approvers, satisfies the requirement without a separate ticket queue that slows everyone down.

                ## Milestones
                1. The regulatory or policy requirement written in plain language with your compliance lead.
                2. Production environments protected so an author cannot approve their own deploy.
                3. Approvals recorded with name, time and the artifact approved.
                4. A quarterly export of approvals checked for any self-approved releases.

                ## Notes
                What counts as adequate separation is your compliance team's call. This project builds what they ask for into the pipeline.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Production deploys require approval from someone other than the change author, and an export shows no self-approved releases."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the separation requirement in writing with compliance"
                - "Protect the production environment with required approvers"
                - "Block authors from approving their own deploys"
                - "Export a quarter of approvals and check for self-approval"
            - name: Signed artifacts and build provenance
              description: |-
                ## Purpose
                Software supply chain attacks target the gap between source and what runs in production. Signing each artifact in the pipeline and attaching a provenance record of which commit, workflow and runner produced it, following a framework such as SLSA, lets your deploy step refuse anything that was not built by your own pipeline.

                ## Milestones
                1. Every release artifact signed in the pipeline with keyless or managed signing.
                2. A provenance attestation attached to each artifact.
                3. The deploy step verifies signature and provenance before releasing.
                4. The SLSA level you meet today written down with the steps to the next one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Production deploys reject an unsigned test artifact, and every release artifact carries a verifiable provenance record."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the SLSA build levels and note where you stand"
                - "Add artifact signing to the release pipeline"
                - "Make the deploy step verify signatures and provenance"
                - "Verify signatures on a random production artifact @recurring(monthly:17)"
            - name: Automated canary analysis on live metrics
              description: |-
                ## Purpose
                A canary is only as good as the judgement on whether it is healthy, and eyeballing a dashboard is slow and inconsistent. Comparing the canary's error rate and latency against the baseline fleet statistically, and promoting or aborting automatically, makes progressive delivery repeatable for services with enough traffic to judge.

                ## Milestones
                1. Services with enough traffic for meaningful canary comparison identified.
                2. Comparison metrics and pass thresholds defined per service.
                3. Canary stages, for example 5, 25 and 100 percent, run with automatic promotion or abort.
                4. Canary verdicts reviewed against later incidents to tune thresholds.

                ## Notes
                Low-traffic services rarely produce a reliable canary signal. Use a blue-green switch with a smoke test for those instead.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One high-traffic service promotes or aborts canaries automatically on metrics, and an injected regression was aborted."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List services with enough traffic for canary analysis"
                - "Define comparison metrics and thresholds for the first service"
                - "Set up staged canary promotion with automatic abort"
                - "Review canaries that passed but were later rolled back @recurring(monthly:6)"
            - name: Pull-based GitOps deployment
              description: |-
                ## Purpose
                In a push model, the CI server holds credentials to every environment and the live state can drift from what the repository says. With GitOps, an agent inside each environment pulls the desired state from a repository and reconciles continuously, so the repository becomes the record of what runs and CI never needs production credentials.

                ## Milestones
                1. A deployment configuration repository holding the desired state for each environment.
                2. A reconciler running in one environment and syncing from that repository.
                3. CI changed to update the configuration repository instead of deploying directly.
                4. Drift alerts raised when the live state differs from the repository.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One environment is deployed by a pull-based reconciler, CI holds no credentials for it, and drift alerts are active."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Create a configuration repository for one environment"
                - "Install a reconciler that syncs from that repository"
                - "Change CI to open a change to the configuration repository"
                - "Review reconciler drift alerts @recurring(weekly:thu)"
            - name: Hardening runners against pipeline attacks
              description: |-
                ## Purpose
                Deploy rights, secrets and network access make a pipeline a prize for attackers through poisoned pull requests, compromised third-party steps or a persistent runner that keeps state between jobs. Ephemeral runners, least-privilege tokens and an allow-list of third-party steps close the common routes in.

                ## Milestones
                1. Runners made ephemeral so each job starts on a clean machine.
                2. Default pipeline token permissions set to the minimum, raised per job only where needed.
                3. An allow-list of approved third-party pipeline steps enforced.
                4. Runner egress limited to the registries and services jobs genuinely need.

                ## Notes
                Scanning application code for vulnerabilities is a separate job. This project protects the pipeline itself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All runners are ephemeral, token permissions default to read-only, and an allow-list blocks unapproved third-party steps."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Switch runners to a single job per machine"
                - "Set default pipeline token permissions to read-only"
                - "Publish and enforce an allow-list of third-party steps"
                - "Audit permissions granted to third-party pipeline steps @recurring(quarterly)"
---

# Continuous Integration & Deployment

This area is for engineers and teams who want every change to travel from a pull request to production through a pipeline they trust, without a person running commands by hand. It starts with the foundations (an honest map of today's pipelines, a platform choice, required checks, artifacts built once and secrets handled properly), then the weekly and monthly routines that keep pipelines green and fast, the skills behind caching, sharding and deploy strategies, the decisions about merge queues, preview environments and continuous deployment, the dated events such as a CI platform migration or an audit, the situations of solo developers, new joiners and regulated teams, and finally specialist work on provenance, canary analysis, GitOps and runner hardening.

What repeats is a weekly look at pipeline health and infrastructure failures, a broken-build rota, monthly runner patching, template updates and minutes budgets, quarterly secret rotation and rollback drills, and a yearly freeze calendar and break-glass rehearsal. The Vendor, Metrics log, Risk register, Operational checklist and Compliance control templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
