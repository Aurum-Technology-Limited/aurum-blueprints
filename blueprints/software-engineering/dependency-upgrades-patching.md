---
id: software-engineering.dependency-upgrades-patching
name: Dependency Upgrades & Patching
description: "A dependency inventory, an upgrade policy, an update bot that does not drown you and the weekly, monthly and quarterly routines that keep libraries, frameworks and runtimes current and patched fast."
category: business
version: 1.0.0
tags: [software-engineering, dependency-upgrades-patching, engineer, team, dependencies, patching, vulnerabilities, upgrades]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - meeting-notes
    - risk-register
    - remediation-plan
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Dependency Upgrades & Patching
          description: "Keeping libraries, frameworks and runtimes up to date, handling breaking changes and responding quickly to vulnerable dependencies."
          projects:
            - name: Dependency inventory across every repository
              description: |-
                ## Purpose
                You cannot patch what you do not know you run, and most teams discover their real dependency list during an incident. A single inventory of every repository, its package managers, runtimes, base images and direct dependencies turns the next advisory from a day of grepping into a five-minute lookup. Build it before anything else in this area, because every later routine reads from it.

                ## Milestones
                1. Every active repository listed with its owner, language, package managers and runtime version.
                2. Direct dependencies for each repository exported from the manifests into one searchable place.
                3. Container base images and their tags recorded beside the services that use them.
                4. Archived or dead repositories marked so they stop appearing in vulnerability counts.

                ## Notes
                A spreadsheet is fine to start. Most code hosts can export a dependency graph per repository, which saves typing it by hand.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One inventory lists every active repository with owner, runtime, package managers, base image and direct dependencies, with dead repositories marked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every repository the team owns from the code host's organisation page"
                - "Export the dependency graph or manifest files for each active repository"
                - "Record runtime versions and container base image tags beside each service"
                - "Add new repositories and retire archived ones in the inventory @recurring(quarterly)"
            - name: Lockfiles committed in every repository
              description: |-
                ## Purpose
                Without a committed lockfile, two builds of the same commit can pull different versions, and a bad release upstream reaches production without anyone changing a line. Committing lockfiles everywhere makes builds reproducible, makes every version change a visible diff in review, and gives the update bot something precise to change. It is the cheapest safety step in the whole area.

                ## Milestones
                1. Each repository checked for a lockfile that matches its package manager.
                2. Missing lockfiles generated, reviewed and committed.
                3. Continuous integration installing with the frozen or locked install mode so drift fails the build.
                4. A one-line rule in the contributing guide saying lockfile changes are reviewed like code.

                ## Notes
                Libraries published for others to consume still benefit from a lockfile for their own test runs, even though consumers resolve their own versions.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active repository has a committed lockfile and its pipeline fails when the lockfile and manifest disagree."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check each repository in the inventory for a committed lockfile"
                - "Generate and commit lockfiles where they are missing"
                - "Switch pipeline installs to the frozen lockfile mode"
                - "Add a lockfile review rule to the contributing guide"
            - name: Runtime and framework end-of-life calendar
              description: |-
                ## Purpose
                Language runtimes, frameworks, databases and operating system images all publish end-of-life dates, and after that date security fixes simply stop. A calendar of every end-of-life date that touches your stack gives you a year of warning instead of a week, which is the difference between a planned upgrade and a scramble. Most teams find at least one component already past its date the first time they look.

                ## Milestones
                1. Every runtime, framework, database engine and base image in the inventory matched to its published support dates.
                2. Components already past end of life flagged and raised with the team lead.
                3. Dates for the next 18 months entered in the team calendar with a six-month warning.
                4. Each upcoming end of life assigned to a named owner.

                ## Notes
                Community sites that track end-of-life dates are a quick start, but confirm each date on the project's own release policy page.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A calendar shows the end-of-life date of every runtime, framework, database and base image in use, each with an owner and a six-month warning."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up the support policy for each runtime and framework in the inventory"
                - "Flag anything already past end of life to the team lead @priority(high)"
                - "Add each end-of-life date to the team calendar with a six-month reminder"
                - "Check the calendar for end-of-life dates in the next six months @recurring(monthly:3)"
            - name: Owners for shared libraries and internal packages
              description: |-
                ## Purpose
                Internal packages and widely shared libraries tend to belong to everyone, which means nobody upgrades them and every consumer is stuck on whatever they pin. Naming an owner for each one, with a short note on who consumes it, makes it clear who decides on a major upgrade and who tells the downstream teams. It also stops the same breaking change being worked out separately in six repositories.

                ## Milestones
                1. Every internal package and every third-party library used in three or more repositories listed.
                2. An owning engineer or team named for each one.
                3. Known consumers listed beside each package.
                4. Owners recorded in a code owners file or the inventory so the update bot can request their review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each internal package and widely shared library has a named owner and a list of consumers, recorded where review requests can use it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find libraries that appear in three or more repositories in the inventory"
                - "Ask each candidate owner to accept or hand off ownership"
                - "List the consuming repositories beside each shared package"
                - "Add owners to the code owners file so update reviews reach them"
            - name: Dependency freshness baseline in libyears
              description: |-
                ## Purpose
                Teams usually describe how out of date they are with a shrug. A libyear figure, the total age gap between the versions you run and the latest releases, plus a count of dependencies one or more majors behind, gives a number you can compare repository by repository and month by month. With a baseline you can show that the routines in this area are working, or that they are not.

                ## Milestones
                1. A libyear figure and a count of majors behind calculated for each active repository.
                2. The five most out-of-date dependencies in each repository listed.
                3. Results written into a dated log so later months can be compared.
                4. The two worst repositories named as the first targets for catch-up work.

                ## Notes
                Start from the **Metrics log** template. Treat libyears as a trend, not a target: one ancient but stable dependency can dominate the number.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated log records libyears and majors-behind counts for every active repository and names the two repositories to catch up first."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run an outdated dependencies report in the largest repository"
                - "Calculate libyears for each repository with a libyear tool or script"
                - "Record the figures and the five oldest dependencies in the metrics log"
                - "Name the two repositories most in need of catch-up work"
            - name: Written dependency upgrade policy for the team
              description: |-
                ## Purpose
                Without written rules, every update pull request becomes a fresh debate about whether it is safe to merge, and security fixes wait behind opinions. A one-page policy covering how fast each severity must be patched, which updates may merge automatically, how far behind a major is acceptable and who approves exceptions settles those debates once. Customers and auditors increasingly ask for exactly this document.

                ## Milestones
                1. Patch time targets agreed per severity, for example critical within two days and high within two weeks.
                2. Rules written for which update types may auto-merge after passing checks.
                3. A maximum lag agreed for majors and runtimes, such as no more than one major behind.
                4. An exception process with a named approver and an expiry date on every exception.
                5. The policy agreed by the team and linked from every repository's contributing guide.

                ## Notes
                Set targets the team can actually meet next month. A policy that is breached on day one stops being read.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page upgrade policy with per-severity patch targets, auto-merge rules, a maximum major lag and an exception process is agreed and linked from every repository."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to draft a one-page upgrade policy from the team's current habits"
                - "Propose patch time targets for critical, high, medium and low severities"
                - "Agree the auto-merge and exception rules at the next team meeting"
                - "Link the agreed policy from each repository's contributing guide"
            - name: Vulnerability alert routing to a named owner
              description: |-
                ## Purpose
                Security alerts from the code host or a scanner often land in an inbox nobody reads, or in a channel where everyone assumes someone else has it. Routing every dependency alert to a named owner per repository, with critical alerts paging rather than emailing, means the patch clock starts when the advisory is published, not when a customer asks. This takes an afternoon and closes one of the most common gaps.

                ## Milestones
                1. Dependency alerts switched on for every active repository.
                2. Each repository's alerts routed to its owning team rather than a shared security inbox.
                3. Critical and high alerts posted to a monitored team channel or paging tool.
                4. A test alert confirmed as arriving where the owner will see it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active repository sends dependency alerts to a named owning team, with critical and high alerts reaching a monitored channel within minutes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check which repositories have dependency alerts switched on"
                - "Turn on alerts for every active repository in the inventory"
                - "Route alerts to each owning team's channel instead of a shared inbox"
                - "Trigger or simulate one alert to confirm it reaches the owner"
            - name: Automated update bot on a pilot repository
              description: |-
                ## Purpose
                Update bots open pull requests for new versions automatically, and switched on everywhere at once they bury a team in forty pull requests on day one. Piloting on one well-tested repository for a month shows how many pull requests to expect, which groupings make sense and how well the test suite catches a bad update, before the settings spread everywhere else.

                ## Milestones
                1. An update bot enabled on one repository with good test coverage.
                2. Updates scheduled for a set weekday and grouped by ecosystem or by patch and minor.
                3. An open pull request limit set so the queue cannot exceed what the team reviews in a week.
                4. A month of results reviewed and the configuration agreed for wider rollout.

                ## Notes
                Dependabot and Renovate are the two common choices. Both read a config file committed to the repository, so changes go through review like code.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One repository has run an update bot for four weeks with scheduled, grouped pull requests and an agreed configuration ready to copy elsewhere."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick the best-tested repository in the inventory for the pilot"
                - "Commit an update bot config with a weekly schedule and grouping rules"
                - "Set an open pull request limit the team can review in a week"
                - "Review four weeks of bot pull requests and agree the shared config"
            - name: Checklist for adding a new dependency
              description: |-
                ## Purpose
                Every dependency added today is a dependency someone must upgrade for years, so the cheapest upgrade is the one you never take on. A short checklist covering maintenance activity, licence, transitive weight, install scripts and whether ten lines of your own code would do turns adding a package into a small decision rather than a reflex. It also catches abandoned or typosquatted packages before they arrive.

                ## Milestones
                1. A checklist of six to eight questions to answer before adding a dependency.
                2. Clear thresholds, such as a release in the last year and more than one maintainer.
                3. The checklist added to the pull request template for manifest changes.
                4. Three recent additions reviewed against it to test that it is practical.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A new dependency checklist is in the pull request template and has been tested against three recent additions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write six questions to answer before adding any new package"
                - "Agree minimum thresholds for maintenance activity and licence type"
                - "Add the checklist to the pull request template for manifest changes"
                - "Test the checklist against the last three dependencies added"
            - name: Weekly triage of update pull requests
              description: |-
                ## Purpose
                Update pull requests left open for weeks go stale, conflict with each other and teach the team to ignore the bot entirely. A fixed half hour each week to merge the green ones, investigate the red ones and close the ones you have decided to skip keeps the queue short and the bot trusted. A short queue also means the urgent security update stands out when it arrives.

                ## Milestones
                1. A weekly 30-minute slot booked for update triage.
                2. Every open update pull request older than two weeks either merged, fixed or closed with a reason.
                3. Failing updates turned into tickets with the failure noted.
                4. The open update queue held under ten pull requests for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No update pull request has been open longer than two weeks without a recorded decision, for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Book a recurring 30-minute triage slot in the team calendar"
                - "Merge green updates and ticket the failing ones @recurring(weekly:tue)"
                - "Close skipped updates with a one-line reason and an ignore rule"
                - "Count open update pull requests at the end of each session"
            - name: Monthly patch day for minor and patch updates
              description: |-
                ## Purpose
                For repositories without an update bot, or ecosystems the bot does not cover, updates only happen when someone remembers. A monthly patch day, worked from a short checklist, refreshes every lockfile, runs the full test suite and deploys, so the gap between you and upstream never grows past a month. Small monthly steps are far easier to debug than a year of changes at once.

                ## Milestones
                1. A patch day checklist covering update, test, deploy and verify steps.
                2. A fixed day each month agreed and protected in planning.
                3. Patch and minor updates applied and deployed in every repository on the day.
                4. Anything that failed recorded with the version that broke it.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly patch days completed with every repository's patch and minor updates deployed or a failure recorded."
                cadence: rolling
              tasks:
                - "Write the patch day checklist from update to production check"
                - "Agree a fixed patch day with the team and product lead"
                - "Apply patch and minor updates in every repository and deploy @recurring(monthly:9)"
                - "Record each failed update with the version that broke it"
            - name: Vulnerability advisory response routine
              description: |-
                ## Purpose
                When a vulnerable dependency is announced, the useful questions are always the same: do we use it, which version, is the vulnerable code reachable, is a fixed version out and who is patching. A written response routine answers them in order and tracks each advisory against the policy's time targets, so a critical advisory is handled in hours and a low one is not allowed to rot for a year.

                ## Milestones
                1. A response routine written as five ordered steps from triage to verified fix.
                2. Every open dependency advisory assigned an owner and a due date from the policy.
                3. A weekly check of new advisories against the inventory.
                4. A monthly report of advisories closed inside and outside their targets.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every dependency advisory has an owner and due date, and a monthly report shows at least 90 percent closed within the policy's targets."
                cadence: rolling
              tasks:
                - "Write the five-step advisory response routine on one page"
                - "Assign an owner and due date to every open dependency advisory"
                - "Check new advisories against the inventory @recurring(weekly:thu)"
                - "Report advisories closed inside and outside target @recurring(monthly:12)"
            - name: Quarterly major version upgrade planning
              description: |-
                ## Purpose
                Major versions carry breaking changes and never fit into a weekly triage slot, so without a plan they pile up until the gap is two or three majors and the upgrade becomes a project of its own. A quarterly session that reviews which majors have landed, estimates each and puts the most important two or three into the next quarter keeps the lag inside the policy.

                ## Milestones
                1. A list of every dependency one or more majors behind, refreshed each quarter.
                2. Each candidate upgrade estimated and given a risk note.
                3. Two or three major upgrades committed to the next quarter's plan.
                4. Last quarter's committed upgrades checked off or carried over with a reason.

                ## Notes
                Start from the **Meeting notes** template for each planning session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter ends with a written list of committed major upgrades for the next quarter and a record of last quarter's results."
                cadence: cyclic
              tasks:
                - "Pull a list of dependencies at least one major behind from the inventory"
                - "Estimate each candidate upgrade and note its main risk"
                - "Hold the major upgrade planning session @recurring(quarterly)"
                - "Add the chosen upgrades to the quarterly plan with owners"
            - name: Container base image refresh routine
              description: |-
                ## Purpose
                A container image pinned to a base tag from last year carries every operating system package vulnerability published since, even when the application code is perfectly current. Rebuilding on a refreshed base image each month, and pinning by digest so the change is visible, clears most of the scanner findings that teams otherwise spend hours triaging one by one.

                ## Milestones
                1. Every service's base image and current digest recorded.
                2. Base images pinned by digest with the update bot allowed to bump them.
                3. A monthly rebuild and redeploy of every image on the latest patched base.
                4. Image scan findings compared before and after the first refresh.

                ## Notes
                Smaller base images carry fewer packages to patch. Moving to a slim or distroless variant is a one-off change that makes every later refresh lighter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every service image has been rebuilt on a patched base within the last 35 days, pinned by digest."
                cadence: rolling
              tasks:
                - "Record each service's base image tag and digest in the inventory"
                - "Pin base images by digest and let the update bot bump them"
                - "Rebuild and redeploy every image on its refreshed base @recurring(monthly:16)"
                - "Compare image scan results before and after the first refresh"
            - name: Yearly runtime version rollover
              description: |-
                ## Purpose
                Most language runtimes now ship on a predictable yearly or twice-yearly rhythm, with long-term support releases you can plan around. Rolling every service onto the newest supported release once a year, on a date you choose, turns runtime upgrades into routine maintenance instead of an emergency triggered by an end-of-life notice.

                ## Milestones
                1. A rollover month chosen to follow the runtime's usual release date by a few months.
                2. Every service's runtime version listed with its support end date.
                3. Continuous integration running the test suite on the next runtime version as well as the current one.
                4. All services moved to the newest supported release, or an exception recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every service runs the newest supported runtime release within three months of the chosen rollover month, or has a recorded exception."
                cadence: cyclic
              tasks:
                - "Choose a rollover month a few months after the runtime's release"
                - "Add the next runtime version to the pipeline's test matrix"
                - "Start the yearly runtime rollover across all services @recurring(yearly)"
                - "Record an exception with an expiry date for any service that cannot move"
            - name: Update bot noise and grouping tuning
              description: |-
                ## Purpose
                An update bot left on default settings tends to open one pull request per package, at random times, including for development tools nobody cares about. Reviewing what it opened last month and tuning grouping, schedules, auto-merge and ignore rules keeps the useful signal and drops the noise, so engineers keep reading what the bot sends.

                ## Milestones
                1. Last month's bot pull requests counted by type, outcome and time to merge.
                2. Grouping rules set so related packages, such as a framework and its plugins, update together.
                3. Development-only updates batched into one weekly or monthly pull request.
                4. The bot configuration shared from one central preset so changes apply everywhere.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The update bot runs from one shared preset and its monthly pull request count has fallen without any security update being delayed."
                cadence: rolling
              tasks:
                - "Count last month's bot pull requests by type and outcome"
                - "Group framework packages and their plugins into single updates"
                - "Move the bot settings into one shared preset for all repositories"
                - "Review bot noise and adjust grouping rules @recurring(monthly:23)"
            - name: Monthly dependency health dashboard
              description: |-
                ## Purpose
                Freshness, open advisories and time to patch drift quietly unless someone looks. A one-screen dashboard updated monthly, showing libyears, majors behind, open advisories by severity and the oldest unpatched one, gives the team and its manager a shared picture and turns the policy targets into something people can see being met or missed.

                ## Milestones
                1. Four measures chosen: libyears, majors behind, open advisories by severity and median time to patch.
                2. A dashboard or page showing each measure per repository.
                3. The first month's figures compared with the freshness baseline.
                4. The dashboard shared in the monthly team review.

                ## Notes
                Start from the **Metrics log** template if you do not have a dashboard tool. Resist adding more measures until these four are trusted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dashboard shows four dependency health measures per repository and has been updated and shared for three consecutive months."
                cadence: rolling
              tasks:
                - "Agree the four dependency health measures with the team"
                - "Build a one-screen dashboard or page with one row per repository"
                - "Update the dashboard and note the biggest change @recurring(monthly:27)"
                - "Share the dashboard in the monthly team review"
            - name: Rotating dependency steward each week
              description: |-
                ## Purpose
                Upgrade chores that belong to the whole team are done by nobody, or always by the same conscientious person until they burn out. A weekly steward rota gives one engineer the job of watching alerts, merging routine updates and raising anything bigger, and spreads knowledge of the dependency tree across everyone instead of one head.

                ## Milestones
                1. A rota covering every engineer, one week each.
                2. A short steward guide: what to check, what to merge and what to escalate.
                3. A Monday handover note recording anything left open.
                4. Every engineer has served at least one week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A steward rota has run for eight weeks with a handover note each Monday and every engineer having served once."
                cadence: rolling
              tasks:
                - "Write a one-page steward guide covering checks, merges and escalation"
                - "Publish a rota covering every engineer on the team"
                - "Hand over the steward role with a note of open items @recurring(weekly:mon)"
                - "Ask each steward for one improvement to the guide after their week"
            - name: Vulnerability exceptions register with expiry dates
              description: |-
                ## Purpose
                Some advisories cannot be patched yet: no fix is published, the fix breaks something, or the vulnerable code is not reachable. Recording each accepted risk with a reason, a compensating control, an approver and an expiry date stops exceptions becoming permanent and gives auditors a clear answer when they ask why a known vulnerability is still present.

                ## Milestones
                1. A register with fields for advisory, repository, reason, control, approver and expiry date.
                2. Every currently ignored or dismissed advisory moved into the register.
                3. No exception longer than 90 days without a fresh review.
                4. Expired exceptions either renewed with a new reason or patched.

                ## Notes
                Start from the **Risk register** template. A dismissed alert in the scanner with no note attached is an exception nobody approved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every unpatched known vulnerability appears in the exceptions register with an approver and an expiry date no more than 90 days away."
                cadence: rolling
              tasks:
                - "List every dismissed or ignored dependency alert across repositories"
                - "Enter each one in the register with a reason and approver"
                - "Review exceptions due to expire this month @recurring(monthly:4)"
                - "Patch or renew each expired exception with a fresh reason"
            - name: Reading changelogs and migration guides well
              description: |-
                ## Purpose
                Most upgrade breakages were announced in the changelog, the release notes or the migration guide, and simply went unread. Learning to scan release notes for deprecations, behaviour changes and new defaults, and to note them before touching code, turns upgrades from trial and error into a checklist. Practise on three real upgrades from your own queue.

                ## Milestones
                1. The release notes for three pending upgrades read end to end.
                2. Breaking changes, deprecations and changed defaults listed for each.
                3. Each listed change matched to the places in your code it affects.
                4. A short note added to each upgrade pull request summarising what changed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three upgrade pull requests each carry a summary of breaking changes and deprecations taken from the upstream release notes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick three pending upgrades from the update queue"
                - "Read each release note and migration guide and list breaking changes"
                - "Search the codebase for every listed change and note the hits"
                - "Add a release note summary to each upgrade pull request"
            - name: Semantic versioning and version range syntax
              description: |-
                ## Purpose
                Caret, tilde, greater-than and exact pins mean different things in different package managers, and a misunderstood range is how a breaking release slips into a build. Learning how semantic versioning is meant to work, where projects ignore it, and what each range operator actually allows in your ecosystems makes every manifest change easier to review.

                ## Milestones
                1. The semantic versioning rules for major, minor, patch and pre-release versions explained in your own words.
                2. Each range operator in your package managers written out with an example of what it accepts.
                3. Two dependencies identified that do not follow semantic versioning in practice.
                4. Manifest ranges in one repository reviewed and corrected where they allow too much.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page cheat sheet of range operators for the team's package managers exists and one repository's ranges have been reviewed against it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the semantic versioning specification summary"
                - "Write a cheat sheet of range operators for each package manager you use"
                - "Find two dependencies known for breaking changes in minor releases"
                - "Review and tighten version ranges in one repository's manifest"
            - name: Understanding the transitive dependency tree
              description: |-
                ## Purpose
                Most of the packages in a build were never chosen by anyone on the team: they arrived as dependencies of dependencies, and that is where most advisories land. Learning to print the tree, explain why a given package is present and see which direct dependency must move to pull in a fix is the core skill behind every vulnerability response.

                ## Milestones
                1. The full dependency tree printed for one repository and its depth noted.
                2. Three transitive packages traced back to the direct dependency that pulls them in.
                3. The difference between deduplicated and duplicated versions explained.
                4. One transitive advisory resolved by upgrading the right direct dependency.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One transitive advisory has been fixed by upgrading the correct direct dependency, with the trace written up for the team."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Print the full dependency tree for one repository"
                - "Trace three transitive packages to the direct dependency that brings them"
                - "Find which direct dependency must move to fix one open transitive advisory"
                - "Write up the trace as a short how-to for the team"
            - name: Reading an advisory and judging real exposure
              description: |-
                ## Purpose
                Severity scores describe the worst case for the library, not the risk to your service. Learning to read an advisory properly, the affected versions, the vulnerable function, the preconditions, the exploit likelihood signals and whether a fix exists, lets you separate the critical that needs patching tonight from the critical in a test-only tool that can wait for patch day.

                ## Milestones
                1. The parts of an advisory explained: identifier, affected range, fixed version, severity vector and references.
                2. Base severity scores and exploit likelihood signals compared for five recent advisories.
                3. Exposure judged for each of the five against how your code uses the package.
                4. A short exposure note template agreed for future advisories.

                ## Notes
                Record your reasoning, not just the verdict. If you decide something is not exploitable, the note is what an auditor or the next engineer will rely on.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five recent advisories each have a written exposure note covering affected versions, preconditions and how your code uses the package."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick five advisories that recently affected your repositories"
                - "Note the affected range, fixed version and preconditions for each"
                - "Check how your code calls the vulnerable package in each case"
                - "Agree a short exposure note format for future advisories"
            - name: Codemods for mechanical upgrade changes
              description: |-
                ## Purpose
                Large framework upgrades often mean the same small edit in hundreds of files: a renamed import, a changed function signature, a removed option. Many projects publish codemods, and learning to run them, check their output and write a small one of your own turns a week of hand edits into an afternoon with a clean, reviewable diff.

                ## Milestones
                1. One published codemod run on a branch and its diff reviewed.
                2. The cases the codemod missed listed and fixed by hand.
                3. A small custom transform written for one repeated change in your codebase.
                4. Codemod commits kept separate from manual changes so review stays readable.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One upgrade has been applied with a published codemod and one custom transform, each in its own reviewed commit."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find whether a pending upgrade ships an official codemod"
                - "Run it on a branch and review the generated diff"
                - "Write a small custom transform for one repeated change"
                - "Commit codemod output separately from hand edits"
            - name: Bisecting a regression introduced by an upgrade
              description: |-
                ## Purpose
                Something breaks a week after a batch of updates lands, and guessing which version caused it wastes days. Learning to bisect, first across your own commits and then across the dependency's releases, pins the regression to one version and often one upstream commit, which makes the fix, the pin or the upstream bug report quick and precise.

                ## Milestones
                1. Bisect run across your own history to find the commit that changed the lockfile.
                2. The suspect dependency narrowed down to the exact release that introduced the regression.
                3. A minimal reproduction written outside your codebase.
                4. The finding recorded with a temporary pin and a link to any upstream issue.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A past or practice regression has been traced to one dependency release, with a minimal reproduction and a recorded pin or fix."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose a past upgrade regression or set up a practice one"
                - "Bisect your history to the commit that changed the lockfile"
                - "Install releases one by one to find the version that broke it"
                - "Write a minimal reproduction and record the temporary pin"
            - name: Overrides and resolutions without leaving a mess
              description: |-
                ## Purpose
                Package managers let you force a transitive dependency onto its fixed version with overrides or resolutions, even before its parent has released. Used carefully this closes an advisory in minutes; used carelessly it pins a version for years and quietly breaks the parent package. Learning when and how to override, and how to remove it later, keeps the shortcut safe.

                ## Milestones
                1. The override mechanism for each package manager in use understood and written down.
                2. One real override applied with a comment linking the advisory and the parent's tracking issue.
                3. A rule agreed that every override carries a removal condition.
                4. Existing overrides across repositories listed and each one justified or removed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every override in the team's repositories carries a comment with its reason and removal condition, and stale ones have been removed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the override or resolution docs for each package manager you use"
                - "List every existing override across the repositories"
                - "Add a reason and removal condition comment to each one kept"
                - "Remove overrides whose parent package has since released a fix"
            - name: Auto-merge rules for low-risk updates
              description: |-
                ## Purpose
                Reviewing a patch bump to a linter by hand is a poor use of an engineer. Letting the bot merge patch and minor updates to development dependencies, and patch updates to well-tested runtime dependencies, once every check passes frees review time for the updates that need judgement, provided the test suite is strong enough to catch a bad one.

                ## Milestones
                1. Update types sorted into auto-merge, review required and never auto-merge.
                2. Required checks confirmed to cover build, tests and a smoke test before auto-merge is allowed.
                3. Auto-merge enabled on the pilot repository for the agreed update types.
                4. A month of auto-merged updates reviewed for any that caused a problem.

                ## Notes
                Never auto-merge majors, runtime changes or anything in a repository without meaningful tests. A short delay before merging, such as three days after release, avoids most bad releases that get yanked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Auto-merge runs for agreed update types on at least one repository, with a month of results reviewed and no unnoticed breakage."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sort update types into auto-merge, review and never auto-merge"
                - "Confirm required checks include tests and a smoke test"
                - "Enable auto-merge with a three-day minimum release age"
                - "Review the first month of auto-merged updates for problems"
            - name: Choosing an automated dependency update tool
              description: |-
                ## Purpose
                Code hosts ship a built-in update bot, standalone tools offer much finer grouping and scheduling, and some security platforms bundle fix pull requests with scanning. Comparing two or three against the ecosystems you use, monorepo support, grouping, self-hosting and cost before rolling out widely avoids migrating every repository's config a year later.

                ## Milestones
                1. Requirements listed: ecosystems, monorepo support, grouping, scheduling, self-hosting and cost.
                2. Two or three tools scored against the same requirements.
                3. One tool trialled on the pilot repository.
                4. A decision recorded with the reasons and the runner-up.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the chosen update tool, the requirements it was scored against and the runner-up."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the ecosystems and package managers the tool must support"
                - "Score two or three update tools against the same requirements"
                - "Trial the leading tool on the pilot repository"
                - "Write up the decision with reasons and the runner-up"
            - name: Replacing an abandoned dependency
              description: |-
                ## Purpose
                Packages with no release in two years, open security reports and a maintainer who has gone quiet will eventually block an upgrade or an advisory fix. Choosing a replacement on your own schedule, comparing a maintained alternative, a fork, a platform built-in or your own small implementation, is far cheaper than doing it during an incident.

                ## Milestones
                1. Abandoned or unmaintained dependencies identified from the inventory.
                2. The riskiest one chosen, with every place it is used listed.
                3. Replacement options compared on maintenance, fit and migration effort.
                4. The replacement merged and the old package removed from every manifest.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The riskiest abandoned dependency has been replaced and removed from every manifest, with the choice of replacement recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Flag dependencies with no release in two years from the inventory"
                - "Pick the riskiest one and list every place it is used"
                - "Compare a maintained alternative, a fork and a built-in option"
                - "Migrate to the replacement and remove the old package"
            - name: Removing unused dependencies
              description: |-
                ## Purpose
                Manifests accumulate packages nobody imports any more: leftovers from a deleted feature, a tool someone tried once, a polyfill the runtime no longer needs. Each one still raises advisories and update pull requests. Removing them is the rare upgrade task that makes every later one smaller, and a quarterly check keeps them from creeping back.

                ## Milestones
                1. An unused dependency checker run in every active repository.
                2. False positives, such as plugins loaded by config, confirmed and marked.
                3. Unused packages removed and the build and tests passing.
                4. The reduction in direct and total dependency count recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active repository has been checked for unused dependencies and the confirmed ones removed, with before and after counts recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run an unused dependency checker in each active repository"
                - "Confirm false positives such as config-loaded plugins"
                - "Remove confirmed unused packages and run the full test suite"
                - "Rerun the unused dependency check across repositories @recurring(quarterly)"
            - name: Pinning strategy for applications and libraries
              description: |-
                ## Purpose
                Applications and published libraries want opposite things: an application should pin exactly and update deliberately, while a library should accept a wide range so it does not force versions on its users. Teams that apply one rule to both end up with either unreproducible deploys or libraries nobody can install. Deciding the strategy per repository type settles it.

                ## Milestones
                1. Each repository classed as a deployed application, a published library or a tool.
                2. A pinning and range rule written for each class.
                3. Update bot settings adjusted to match each class.
                4. Repositories that break the rule listed and corrected.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written pinning rule exists for applications, libraries and tools, and every repository has been checked against the rule for its class."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Class each repository as application, library or tool"
                - "Write the pinning and range rule for each class"
                - "Adjust update bot range settings to match each class"
                - "Correct repositories that break the rule for their class"
            - name: Private registry proxy and package cache
              description: |-
                ## Purpose
                Pulling every package straight from the public registry on each build means an upstream outage, a deleted package or a rate limit stops your deploys. A registry proxy that caches what you use keeps builds working, gives one place to block a known bad version and records exactly which packages entered the organisation and when.

                ## Milestones
                1. Requirements written: ecosystems, hosting, authentication and cost.
                2. A proxy or caching registry chosen and set up for one ecosystem.
                3. Builds pointed at the proxy with the public registry as its upstream.
                4. A test showing builds still succeed with the public registry blocked.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one ecosystem's builds resolve through a caching registry proxy and still succeed with the public registry blocked."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List ecosystems and build systems that would use the proxy"
                - "Choose a hosted or self-run registry proxy for the first ecosystem"
                - "Point the pipeline's package installs at the proxy"
                - "Block the public registry in a test build to confirm the cache works"
            - name: Collapsing duplicate versions of one package
              description: |-
                ## Purpose
                One repository can end up with four versions of the same utility library because different dependencies asked for different ranges. That bloats builds, multiplies advisories and causes subtle bugs when two copies of a framework both think they are in charge. Finding the worst duplicates and collapsing them to one version is a satisfying, measurable cleanup.

                ## Milestones
                1. A duplicate versions report run for each active repository.
                2. The five packages with the most copies listed.
                3. Duplicates collapsed through dedupe commands or upgrading the parents.
                4. Bundle size or install size compared before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The five most duplicated packages in the largest repository each resolve to at most two versions, with size before and after recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Run a duplicate versions report in the largest repository"
                - "List the five packages with the most installed copies"
                - "Run the package manager's dedupe and upgrade the blocking parents"
                - "Record install or bundle size before and after"
            - name: Fork, vendor or wait decision for a stuck fix
              description: |-
                ## Purpose
                Sometimes the fix you need exists as an unmerged upstream pull request, or the maintainer has declined it. Forking, vendoring a patched copy, applying a patch file at install time or waiting each carry a different long-term upgrade cost. Making the choice deliberately, with an exit plan, avoids a private fork that silently falls years behind.

                ## Milestones
                1. The stuck fix described with its upstream issue and pull request links.
                2. Fork, vendor, install-time patch and wait compared on effort and ongoing cost.
                3. One option chosen with a named owner and a condition for returning to upstream.
                4. The choice recorded where the next engineer will find it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for one stuck fix names the chosen option, its owner and the condition for returning to the upstream release."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Link the upstream issue and pull request for the stuck fix"
                - "Compare forking, vendoring, a patch file and waiting"
                - "Choose one and set the condition for returning to upstream"
                - "Record the decision in the repository's docs folder"
            - name: Zero-day drill for a core library
              description: |-
                ## Purpose
                When a critical flaw lands in a library used everywhere, the teams that cope are the ones that have already practised answering where it runs, which versions, and how fast a patched build can reach production. A tabletop drill based on a real past event tests the inventory, the alert routing and the deploy path in two hours, and every gap it finds is cheaper to fix now.

                ## Milestones
                1. A realistic scenario written around a library present in most of your services.
                2. A two-hour drill run with engineers, an on-call lead and a communications contact.
                3. Time to answer where it runs and time to a patched build recorded.
                4. Gaps found turned into tickets with owners.

                ## Notes
                Base the scenario on a well-known past incident in your ecosystem so nobody argues it could never happen.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A zero-day drill has been run, with time to find affected services and time to a patched build recorded and every gap ticketed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft a drill scenario based on a past ecosystem zero-day"
                - "Book a two-hour session with engineers and the on-call lead"
                - "Time how long it takes to list affected services and versions"
                - "Ticket every gap the drill uncovers with an owner"
            - name: Framework major version upgrade
              description: |-
                ## Purpose
                Moving the main web or application framework to a new major touches routing, configuration, testing helpers and often a dozen plugins at once. Running it as a phased project, preparing on the current major by clearing deprecation warnings, then upgrading plugins, then the framework itself, keeps each step small enough to review and roll back.

                ## Milestones
                1. The migration guide read and every breaking change mapped to your code.
                2. All deprecation warnings cleared while still on the current major.
                3. Plugins and companion packages upgraded to versions that support both majors.
                4. The framework upgraded on a branch with the full test suite passing.
                5. The upgrade deployed and monitored through one full release cycle.

                ## Notes
                Upgrade one major at a time even if you are several behind. Jumping two majors at once mixes two sets of breaking changes and makes failures hard to place.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The application runs in production on the new framework major with deprecation warnings cleared and no rollback in the first release cycle."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Read the migration guide and list every breaking change that touches your code"
                - "Turn deprecation warnings into test failures on the current major"
                - "Upgrade plugins to versions that support both majors"
                - "Upgrade the framework on a branch and deploy behind a canary"
            - name: Runtime end-of-life migration before the cut-off
              description: |-
                ## Purpose
                Once a runtime or database engine reaches end of life with services still on it, security fixes stop and cloud providers may start charging extended support fees or forcing upgrades on their own schedule. Planning the migration back from the cut-off date, with a buffer of at least two months, keeps the choice of timing yours.

                ## Milestones
                1. Every service on the ending runtime or engine listed with its owner.
                2. A migration order agreed, lowest risk first, with dates working back from the cut-off.
                3. Each service tested and deployed on the supported version.
                4. The last service migrated at least two months before the cut-off.

                ## Notes
                Start from the **Remediation plan** template.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every service on the ending runtime or engine has moved to a supported version at least two months before its end-of-life date."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List every service on the runtime or engine nearing end of life"
                - "Agree a migration order and dates working back from the cut-off"
                - "Migrate and deploy the lowest-risk service first"
                - "Confirm the last migration lands two months before the cut-off"
            - name: Catch-up sprint for a stale repository
              description: |-
                ## Purpose
                Repositories nobody has touched for a year or two can sit hundreds of versions behind, and the first person who needs to change it discovers nothing builds. A focused catch-up sprint, patches first, then minors, then one major at a time, with a deploy after each step, brings it back to a state where routine updates can take over.

                ## Milestones
                1. The repository building and its tests passing on current tooling before any upgrade.
                2. All patch and minor updates applied and deployed.
                3. Majors applied one at a time, each in its own deployed pull request.
                4. The repository added to the update bot and steward rota.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The stale repository builds, passes tests, has no dependency more than one major behind and is covered by the update bot."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Get the stale repository building and testing before changing versions"
                - "Apply and deploy all patch and minor updates together"
                - "Upgrade each major in its own pull request and deploy"
                - "Add the repository to the update bot and steward rota"
            - name: Annual dependency audit for customers and auditors
              description: |-
                ## Purpose
                Security questionnaires, compliance audits and enterprise customers increasingly ask how you manage third-party components, how fast you patch and whether you can produce a component list. Running a yearly audit against your own policy, with evidence gathered in one folder, turns those requests from a week of digging into an afternoon of sending links.

                ## Milestones
                1. Policy targets compared against the year's patch times and exceptions.
                2. Evidence gathered: policy, dashboard history, exceptions register and component lists.
                3. Gaps against the policy written up with fixes for next year.
                4. A standard answer pack prepared for security questionnaires.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A yearly audit pack holds the policy, a year of patch time evidence, the exceptions register and component lists, with gaps and fixes written up."
                cadence: cyclic
              tasks:
                - "Collect a year of patch time figures against the policy targets"
                - "Gather policy, exceptions register and component lists in one folder"
                - "Write up gaps against the policy with a fix for each"
                - "Run the annual dependency audit and refresh the answer pack @recurring(yearly)"
            - name: Patching during a release freeze
              description: |-
                ## Purpose
                Launch periods, peak trading weeks and change freezes stop ordinary updates, but a critical advisory does not wait for the freeze to end. Agreeing in advance which patches may cross a freeze, who approves them and how they are tested keeps the team from either breaking the freeze carelessly or leaving a known hole open for a month.

                ## Milestones
                1. Freeze rules agreed for which severities may still be patched.
                2. A named approver and a fast-track test path for freeze-time patches.
                3. Routine updates queued and scheduled for the first week after the freeze.
                4. The approach written into the release or change process.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written freeze rules name which advisories may be patched during a freeze, who approves them and how they are tested."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree which advisory severities may be patched during a freeze"
                - "Name the approver for freeze-time dependency patches"
                - "Define a fast-track test path for an emergency patch"
                - "Schedule queued updates for the first week after the freeze"
            - name: Dependency upkeep for a solo engineer
              description: |-
                ## Purpose
                One engineer looking after a dozen small repositories cannot run a weekly triage per repository, and without a rhythm the oldest projects quietly rot. A single weekly hour, grouped bot updates across everything, auto-merge where tests allow and a short list of repositories to archive keeps the load to something one person can actually carry.

                ## Milestones
                1. Every repository you own listed, with the ones you can archive marked.
                2. Update bot settings tuned for one grouped pull request per repository per week or month.
                3. Auto-merge enabled where tests are trustworthy.
                4. A protected weekly hour for merging updates and reading alerts.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every repository you own is archived or covered by grouped weekly updates, and the weekly upkeep hour has been kept for six weeks."
                cadence: rolling
              tasks:
                - "List every repository you own and archive the dead ones"
                - "Group bot updates into one pull request per repository"
                - "Enable auto-merge on repositories with trustworthy tests"
                - "Spend one hour merging updates and reading alerts @recurring(weekly:fri)"
            - name: Coordinated upgrade of a library shared by many teams
              description: |-
                ## Purpose
                Every consuming team has to follow when a shared logging, auth or framework library moves to a new major, and without coordination the organisation ends up supporting both majors for years. A coordinated upgrade with a published migration note, a tracker of consumers and a date for dropping the old major gets everyone across in one campaign.

                ## Milestones
                1. Every consuming repository and its owning team listed.
                2. A migration note published with the breaking changes and a worked example.
                3. A tracker showing each consumer's status, updated weekly.
                4. A date agreed for ending support for the old major, and met.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every consuming repository runs the new major of the shared library and support for the old major has ended on the agreed date."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every consumer of the shared library with its owning team"
                - "Publish a migration note with breaking changes and an example"
                - "Track each consumer's upgrade status in a shared tracker"
                - "Announce the end-of-support date for the old major"
            - name: Patching a mobile app with slow user updates
              description: |-
                ## Purpose
                Patched mobile builds still have to pass store review, and some users keep an old version for months. Mobile dependency work therefore needs its own rules: SDK and store requirement deadlines, a minimum supported version you can enforce, and a way to force an update when a vulnerable library ships inside the app.

                ## Milestones
                1. App store minimum SDK and toolchain deadlines listed for both platforms.
                2. Third-party SDKs inside the app inventoried with their versions.
                3. A minimum supported app version and a forced update mechanism in place.
                4. A plan for shipping an urgent dependency fix through store review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The app has an SDK inventory, a list of store deadlines and a working forced update mechanism tested on a real device."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every third-party SDK in the app with its version"
                - "Note the app stores' upcoming SDK and toolchain deadlines"
                - "Test the forced update mechanism on a real device"
                - "Check app store SDK and toolchain requirements @recurring(quarterly)"
            - name: Patch bulletins for customer-hosted deployments
              description: |-
                ## Purpose
                Software that customers run on their own servers is only patched when they install your update, so a fix you shipped in a day may take months to reach them. A regular patch bulletin, clear severity labels and supported version windows let customers plan upgrades, and give your support team something definite to point to when a scanner flags an old version.

                ## Milestones
                1. Supported release lines and their end dates published for customers.
                2. A patch bulletin format agreed: affected versions, severity, fixed version and steps.
                3. A distribution list or customer portal page for bulletins.
                4. The first monthly bulletin sent and acknowledged by support.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Customers can see supported release lines and have received three monthly patch bulletins in a consistent format."
                cadence: rolling
              tasks:
                - "Publish the supported release lines and their end dates"
                - "Agree the patch bulletin format with the support team"
                - "Set up the distribution list or portal page for bulletins"
                - "Send the monthly dependency patch bulletin to customers @recurring(monthly:20)"
            - name: First dependency upgrade for a new joiner
              description: |-
                ## Purpose
                Small, real upgrades are among the best first tasks for a new engineer: it touches the build, the tests, the pipeline and the deploy without needing deep domain knowledge. Preparing a few starter upgrades with a short guide gives each new joiner a merged change in their first week and teaches the team's upgrade habits from day one.

                ## Milestones
                1. Three or four low-risk upgrades labelled as good first tasks.
                2. A one-page guide to how the team upgrades, tests and deploys a dependency.
                3. A buddy named to review the new joiner's upgrade.
                4. The upgrade merged and deployed in the new joiner's first week.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The next new joiner merges and deploys a dependency upgrade in their first week using the team's upgrade guide."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Label three low-risk upgrades as good first tasks"
                - "Write a one-page guide to the team's upgrade workflow"
                - "Name a buddy to review the new joiner's upgrade"
                - "Ask the new joiner for one change to the guide afterwards"
            - name: Software bill of materials on every build
              description: |-
                ## Purpose
                A software bill of materials lists every component and version inside a build, and customers, regulators and procurement teams increasingly expect one. Generating it automatically on every release, in a standard format, means you can answer whether a given version ships a vulnerable package without rebuilding anything, including for releases from months ago.

                ## Milestones
                1. A standard SBOM format chosen for the team.
                2. SBOM generation added to the release pipeline for every service.
                3. SBOMs stored beside each release artefact for at least the support window.
                4. One past release checked against a new advisory using only its stored SBOM.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every service's release pipeline produces and stores a standard-format SBOM, and one past release has been checked against an advisory from its SBOM alone."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose the SBOM format your customers and tools accept"
                - "Add an SBOM generation step to one service's release pipeline"
                - "Store each SBOM beside its release artefact"
                - "Query a stored SBOM for a package named in a recent advisory"
            - name: Package integrity and supply chain checks
              description: |-
                ## Purpose
                Compromised maintainer accounts, typosquatted names and malicious install scripts have all pushed harmful code through ordinary updates. Checking signatures and provenance where ecosystems support them, restricting install scripts, delaying adoption of brand-new releases and watching for unexpected new maintainers closes the most common routes without slowing normal upgrades.

                ## Milestones
                1. Install scripts disabled by default with an allow list for packages that need them.
                2. Signature or provenance verification switched on where the package manager supports it.
                3. A minimum release age set so updates wait a few days before adoption.
                4. Alerts set for new maintainers or ownership changes on critical dependencies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Install scripts are allow-listed, provenance checks run where supported and updates wait a minimum release age in every repository."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find which dependencies run install scripts in each repository"
                - "Disable install scripts by default and allow-list the needed ones"
                - "Turn on signature or provenance checks where supported"
                - "Set a minimum release age in the update bot configuration"
            - name: Reachability analysis to cut advisory noise
              description: |-
                ## Purpose
                A large share of dependency advisories affect functions your code never calls. Reachability analysis, from scanner features or call graph tools, sorts findings into reachable and unreachable so patch effort goes where risk is real. It needs care: unreachable today can become reachable with the next feature, so the policy still applies, just with clearer priorities.

                ## Milestones
                1. A reachability-capable tool trialled on one repository with many open advisories.
                2. Open advisories sorted into reachable, unreachable and unknown.
                3. Reachable findings prioritised ahead of their severity order where justified.
                4. The policy updated to say how reachability changes, and does not change, patch targets.

                ## Notes
                Treat unreachable as a reason to schedule, never as a reason to ignore. Record it in the exceptions register if you defer a fix.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One repository's advisories are sorted by reachability and the upgrade policy states how reachability affects patch priority."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick the repository with the most open dependency advisories"
                - "Trial a reachability-capable tool on it"
                - "Sort open advisories into reachable, unreachable and unknown"
                - "Update the policy with how reachability affects priority"
            - name: Backporting a security fix to an old release line
              description: |-
                ## Purpose
                Customers on a supported older release need the security fix too, but the upstream fix may only exist in a newer major that your old line cannot take. Backporting means finding the minimal fixed version for that line, or patching the dependency yourself, then testing and shipping a patch release without dragging in unrelated changes.

                ## Milestones
                1. Every supported release line checked for the vulnerable dependency.
                2. The lowest fixed version compatible with each line identified, or a patch prepared.
                3. A patch release built for each affected line with only the security change.
                4. Release notes published naming the advisory and the fixed versions.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each supported release line affected by the advisory has a patch release containing only the dependency fix, with release notes naming the advisory."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Check each supported release line for the vulnerable dependency"
                - "Find the lowest fixed version that each line can take"
                - "Cut a patch release per line containing only the fix"
                - "Publish release notes naming the advisory and fixed versions"
            - name: Upstream fix for a dependency you rely on
              description: |-
                ## Purpose
                When a bug or incompatibility in a dependency blocks your upgrade, the most durable fix is the one merged upstream, which removes your workaround and helps everyone else on the same path. Contributing a well-scoped fix, with a reproduction and tests, also builds the relationship that gets your future reports taken seriously.

                ## Milestones
                1. The blocking bug reproduced minimally outside your codebase.
                2. The project's contribution guide read and an issue opened or found.
                3. A focused pull request with tests submitted upstream.
                4. Your local workaround removed once the fix is released.

                ## Notes
                Check your employer's open source contribution policy before submitting code from work time.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A fix for a dependency bug that blocked an upgrade has been submitted upstream with tests, and the local workaround is removed after release."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a minimal reproduction of the blocking dependency bug"
                - "Read the project's contribution guide and open or find the issue"
                - "Submit a focused pull request with a test for the fix"
                - "Remove the local workaround once the fixed version is released"
---

# Dependency Upgrades & Patching

Every application is mostly other people's code, and that code keeps moving: patch releases, breaking majors, runtimes reaching end of life and advisories that turn a quiet Tuesday into an emergency. These projects start with the foundations (an inventory, lockfiles, an end-of-life calendar, an upgrade policy and alert routing), move through the routines that keep updates flowing, then the skills that make upgrades safe, the decisions worth making on purpose, the dated events such as a framework major or a zero-day drill, situations from a solo maintainer to a mobile app or customer-hosted software, and specialist work like SBOMs, reachability analysis and backporting fixes.

What repeats is a Monday steward handover, a Tuesday triage of update pull requests, a Thursday advisory check, a monthly patch day, base image refresh, bot tuning, exceptions review and dashboard update, a quarterly plan for major upgrades and a yearly runtime rollover and audit. The Metrics log, Operational checklist, Meeting notes, Risk register and Remediation plan templates pair with the projects that need a record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
