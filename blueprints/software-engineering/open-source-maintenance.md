---
id: software-engineering.open-source-maintenance
name: Open Source Maintenance
description: "A healthy repository with clear licence, docs and policies, weekly triage and review rhythms, predictable releases, safer supply chains and the boundaries that keep a maintainer going for years."
category: business
version: 1.0.0
tags: [software-engineering, open-source-maintenance, engineer, researcher, open-source, triage, releases, maintainer-burnout]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - risk-register
    - metrics-log
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Open Source Maintenance
          description: "Maintaining an open source project, triaging issues, reviewing contributions, cutting releases and avoiding burnout as a maintainer."
          projects:
            - name: Repository health audit for maintainers
              description: |-
                ## Purpose
                Before adding rules or rituals, look at the repository the way a stranger arriving from a search result would. Counting open issues by age, unanswered pull requests, missing community files and the date of the last release tells you which of the projects below matter first, and gives a baseline to compare against in six months.

                ## Milestones
                1. Open issues and pull requests counted and grouped by age: under a month, one to six months, older.
                2. The presence of a README, licence, contributing guide, code of conduct and security policy checked off.
                3. The date of the last release and the last merged outside contribution recorded.
                4. A one-page audit note listing the three worst gaps, saved in the project's maintainer notes.

                ## Notes
                Most code forges show a community profile or health checklist for each repository. Start there, then add the age counts it does not show.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An audit note records issue and pull request counts by age, missing community files, the last release date and the three worst gaps."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open the repository's community profile page and note what is missing"
                - "Count open issues and pull requests older than six months"
                - "Record the date of the last release and last outside contribution"
                - "Write the three worst gaps into a maintainer notes file"
            - name: Maintainer time budget and boundaries
              description: |-
                ## Purpose
                Unpaid maintainers rarely burn out from one huge task; they burn out from answering every notification within the hour. Deciding how many hours a week the project gets, when you are off, and how quickly users can expect a reply turns an open-ended obligation into a job with edges.

                ## Milestones
                1. A weekly hours figure chosen and written down, for example three hours across two sessions.
                2. Notification settings changed so the forge only emails mentions and review requests.
                3. Expected response times stated in the README or contributing guide.
                4. Four weeks of actual maintainer hours logged against the budget.

                ## Notes
                Publishing a response time like a week for new issues sets expectations and makes silence feel normal rather than rude.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly hours budget and response time expectation are published, and four weeks of hours are logged against the budget."
                cadence: rolling
              tasks:
                - "Decide how many hours a week the project gets and write it down"
                - "Turn off forge email notifications except mentions and review requests"
                - "Add an expected response time sentence to the contributing guide"
                - "Log the hours you spent on the project this week @recurring(weekly:sun)"
            - name: Licence choice recorded in the repository
              description: |-
                ## Purpose
                Code without a licence is, in most countries, not legally reusable, so serious users and companies quietly walk away. Choosing a recognised open source licence, putting the full text in a LICENSE file and stating it in the package metadata makes the terms clear to people and to the scanners their employers run.

                ## Milestones
                1. Permissive and copyleft options compared against what you want users and companies to be able to do.
                2. A recognised licence chosen, using its standard SPDX identifier.
                3. The full licence text committed in a LICENSE file at the repository root.
                4. The SPDX identifier set in the package manifest and shown in the README.

                ## Notes
                This is an organisational step, not legal advice. If an employer, university or existing contributors may own part of the code, check with them or a lawyer before changing an existing licence.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A LICENSE file with a recognised licence is at the repository root and its SPDX identifier appears in the package manifest."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List what you want users and companies to be allowed to do with the code"
                - "Compare two permissive and one copyleft licence against that list"
                - "Commit the chosen licence text as LICENSE at the repository root"
                - "Set the SPDX identifier in the package manifest"
            - name: Project scope and non-goals statement
              description: |-
                ## Purpose
                Most maintainer arguments are really about scope: someone wants a feature the project was never meant to have. A short written statement of what the project does, who it is for and what it deliberately will not do gives you something to point at instead of relitigating each request.

                ## Milestones
                1. One paragraph stating the problem the project solves and for whom.
                2. Five or more explicit non-goals written down, such as a GUI or support for end-of-life runtimes.
                3. The statement published in the README or a dedicated scope page.
                4. Three recently declined or stalled requests checked against it to confirm it would have helped.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published scope statement lists the project's purpose, audience and at least five non-goals."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one paragraph on what problem the project solves and for whom"
                - "List at least five things the project will deliberately not do"
                - "Publish the statement in the README under a scope heading"
                - "Test it against three recent feature requests"
            - name: README that answers a newcomer's first questions
              description: |-
                ## Purpose
                A visitor decides within a minute whether to try the project, and most READMEs answer the author's questions rather than theirs. Rewriting it to cover what it is, why to use it, how to install, a ten-line example and where to get help converts more visitors into users and cuts repeat questions in the tracker.

                ## Milestones
                1. A one-sentence description at the top that someone outside the field understands.
                2. Install instructions tested by copying them into a clean environment.
                3. A minimal working example under fifteen lines that runs as written.
                4. Status badges trimmed to the few that mean something, such as CI and latest version.
                5. Links to docs, the support channel and the contributing guide near the end.

                ## Notes
                Ask someone who has never used the project to read it and tell you the first thing they would try. Their answer is the real test.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The README has a one-sentence description, tested install steps, a runnable example under fifteen lines and links to help and contributing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Rewrite the first sentence so someone outside the field understands it"
                - "Run the install instructions in a fresh container and fix any that fail"
                - "Replace the usage section with one example under fifteen lines"
                - "Ask a newcomer to read it and note the first question they ask"
            - name: Contributing guide with a working local setup
              description: |-
                ## Purpose
                Outside contributors give up when the tests will not run on their machine, and you never hear about it. A CONTRIBUTING file that takes someone from clone to passing tests, explains the branch and commit conventions and says what makes a pull request easy to merge turns drive-by interest into actual patches.

                ## Milestones
                1. Clone, install, build and test commands listed in order and verified on a clean machine.
                2. Branch naming, commit message and sign-off expectations explained in a few lines.
                3. A short list of what reviewers look for: tests, changelog entry, docs.
                4. The guide linked from the README and the pull request template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A CONTRIBUTING file takes a new contributor from clone to passing tests on a clean machine and is linked from the README."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the clone to passing tests commands in order"
                - "Run them in a fresh container and fix every step that breaks"
                - "Add three lines on branch names and commit messages"
                - "Link the guide from the README and the pull request template"
            - name: Code of conduct with a named enforcement contact
              description: |-
                ## Purpose
                A code of conduct that lists no contact is decoration; when something goes wrong, nobody knows who to tell. Adopting a widely used code, naming who receives reports and deciding in advance how you will respond means a bad interaction is handled calmly instead of improvised in public.

                ## Milestones
                1. A widely used code of conduct adopted rather than a custom one written from scratch.
                2. A private reporting address or form named, with at least one person behind it.
                3. A short private note of response steps: acknowledge, gather facts, decide, record.
                4. The code linked from the README, contributing guide and discussion board.

                ## Notes
                If you are the only maintainer, say who reports go to when the report is about you, even if that is a trusted person outside the project.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A code of conduct file names a private reporting contact and is linked from the README and contributing guide."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a widely used code of conduct and add it to the repository"
                - "Set up a private reporting address that reaches at least one person"
                - "Write a four-step private note on how reports will be handled"
                - "Link the code from the README and the contributing guide"
            - name: Issue and pull request templates
              description: |-
                ## Purpose
                Half of all bug reports arrive without a version number, and you spend the first reply asking for it. Issue forms for bugs and feature requests, plus a pull request template with a short checklist, collect the facts up front and make the triage hour about decisions rather than questions.

                ## Milestones
                1. A bug report form asking for version, runtime, operating system, steps and expected versus actual result.
                2. A feature request form asking for the problem first and the proposed solution second.
                3. Blank issues disabled or redirected, with questions sent to the discussion board.
                4. A pull request template with a three-item checklist: tests, docs, changelog.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Bug and feature issue forms and a pull request template with a checklist are live, and blank issues are redirected."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a bug report form with required version and steps fields"
                - "Write a feature request form that asks for the problem first"
                - "Point blank issues and questions to the discussion board"
                - "Add a pull request template with a three-item checklist"
            - name: Issue label scheme for triage
              description: |-
                ## Purpose
                Forty colourful labels that nobody applies consistently are worse than six that everyone uses. A small scheme covering type, status and priority, with one label meaning needs triage, lets you filter the tracker into a work queue and lets contributors find something to pick up.

                ## Milestones
                1. Existing labels exported and counted by how often each is used.
                2. A scheme of no more than fifteen labels covering type, status, priority and good first issue.
                3. Unused labels deleted and duplicates merged.
                4. New issues labelled needs triage automatically by the issue forms.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The repository uses at most fifteen labels covering type, status and priority, and new issues arrive labelled needs triage."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every current label and how many open issues use it"
                - "Draft a scheme of no more than fifteen labels"
                - "Merge duplicates and delete labels no issue uses"
                - "Make the issue forms apply needs triage automatically"
            - name: Security policy and private reporting channel
              description: |-
                ## Purpose
                When a researcher finds a vulnerability in your library, the worst outcome is a public issue titled with the exploit. A SECURITY file naming supported versions and a private way to report, such as the forge's private vulnerability reporting, gives them a better option and gives you time to fix before disclosure.

                ## Milestones
                1. Private vulnerability reporting enabled on the repository, or a monitored security address published.
                2. A SECURITY file listing which versions receive security fixes.
                3. A response time commitment stated, for example acknowledgement within seven days.
                4. A test report sent through the channel to confirm it reaches a maintainer.

                ## Notes
                Do not promise response times you cannot keep on your own. A realistic week beats an ambitious day that you miss.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A SECURITY file lists supported versions and a private reporting channel that a test report has reached."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Enable private vulnerability reporting in the repository settings"
                - "Write a SECURITY file naming the supported versions"
                - "Send a test report and confirm a maintainer receives it"
                - "Recheck the supported versions table in the security policy @recurring(yearly)"
            - name: Weekly issue triage hour
              description: |-
                ## Purpose
                Issues that sit unlabelled for a month tell users the project is dead, even when you are merging code daily. One protected hour a week to label, ask for missing details, close duplicates and pick the few worth doing keeps the tracker readable without letting it take over your evenings.

                ## Milestones
                1. A fixed weekly slot in the calendar for triage, guarded like a meeting.
                2. Every new issue labelled or answered within one triage cycle.
                3. Saved replies written for the five most common responses.
                4. The needs triage count at zero at the end of four consecutive sessions.

                ## Notes
                Triage is deciding, not fixing. If an issue takes more than five minutes, label it and move on.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The needs triage label count reaches zero at the end of four consecutive weekly sessions."
                cadence: rolling
              tasks:
                - "Book a recurring one-hour triage slot in your calendar"
                - "Write saved replies for duplicates, missing info and out of scope"
                - "Label, answer or close every issue tagged needs triage @recurring(weekly:tue)"
                - "Note any issue that needs a second maintainer's view"
            - name: Pull request review queue rhythm
              description: |-
                ## Purpose
                A contributor who waits six weeks for a first comment rarely sends a second patch. A weekly review pass, oldest first, that gives every open pull request at least a first response keeps contributors engaged even when you cannot merge everything quickly.

                ## Milestones
                1. Open pull requests sorted by age with the oldest unreviewed one identified.
                2. A first response on every pull request within ten days of opening.
                3. Pull requests that will not be merged closed with a reason and thanks.
                4. Median time to first response measured over a month and noted.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open pull request has a first maintainer response within ten days, measured across one month."
                cadence: rolling
              tasks:
                - "Sort open pull requests by age and find the oldest without a review"
                - "Give every pull request older than a week a first response @recurring(weekly:thu)"
                - "Close pull requests you will not merge with a reason and thanks"
                - "Record the median time to first response for the month"
            - name: Stale issue and pull request policy
              description: |-
                ## Purpose
                Stale bots that close real bugs after thirty days anger users, yet a tracker with nine hundred open issues hides the ones that matter. A written policy, applied by hand or with a gentle bot, on what counts as stale and how it is closed keeps the list honest without punishing people for your slowness.

                ## Milestones
                1. Stale defined in writing, for example waiting on the reporter for sixty days.
                2. Issues waiting on maintainers exempted from automatic closing.
                3. A polite closing message that says how to reopen.
                4. The backlog older than a year reviewed once and either closed or relabelled.

                ## Notes
                Only close issues that are waiting on the reporter. Closing an issue because you have not got to it just moves the problem out of sight.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written stale policy is in the contributing guide and the issue backlog older than a year has been reviewed once."
                cadence: rolling
              tasks:
                - "Write what counts as stale into the contributing guide"
                - "Draft a closing message that explains how to reopen"
                - "Close issues waiting on the reporter past the stale limit @recurring(monthly:9)"
                - "Review every issue older than a year in one sitting"
            - name: Predictable release cadence and checklist
              description: |-
                ## Purpose
                Users plan upgrades around releases, and a project that ships whenever the maintainer remembers leaves fixes sitting on the main branch for months. A regular cadence with a written checklist for version bump, changelog, tag, publish and announcement makes each release a thirty-minute routine rather than an anxious afternoon.

                ## Milestones
                1. A release cadence chosen and published, such as monthly when there are unreleased changes.
                2. A release checklist written with every step from version bump to announcement.
                3. Three releases cut using only the checklist.
                4. The checklist updated after each release with anything that was missed.

                ## Notes
                Start from the **Operational checklist** template. Skipping a month with nothing to ship is fine; saying so in the discussion board is better.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive releases are cut on the published cadence using the written checklist."
                cadence: cyclic
              tasks:
                - "Write the release steps from version bump to announcement"
                - "Publish the release cadence in the README"
                - "Cut a release if main has unreleased changes @recurring(monthly:15)"
                - "Add anything you missed to the checklist after each release"
            - name: Changelog built from merged pull requests
              description: |-
                ## Purpose
                Writing a changelog from memory on release day misses half the changes and credits nobody. Asking each pull request to add its own entry under an unreleased heading, or generating notes from labelled pull requests, means the changelog is finished before you tag.

                ## Milestones
                1. A CHANGELOG file with an unreleased section and headings for added, changed, fixed and removed.
                2. Contributors asked to add an entry in the pull request template.
                3. Contributor names or handles credited against their entries.
                4. The last two releases backfilled so the history is complete.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A CHANGELOG with an unreleased section exists, the pull request template asks for an entry and the last two releases are backfilled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a CHANGELOG with an unreleased section and four headings"
                - "Add a changelog entry line to the pull request template"
                - "Backfill the last two releases from the merged pull request list"
                - "Decide whether to generate notes from pull request labels instead"
            - name: Support questions routed to the discussion board
              description: |-
                ## Purpose
                How-do-I questions in the issue tracker bury real bugs and get answered in private where nobody else learns from them. Moving support to a discussion board or forum, and answering the best questions in the docs, builds a searchable record and lets experienced users help each other.

                ## Milestones
                1. A discussion board or forum enabled with categories for questions, ideas and show and tell.
                2. Issue forms redirecting questions to the board.
                3. Answered threads marked as answered so search finds them.
                4. Two frequent questions turned into documentation pages.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Questions go to a discussion board with categories, and at least two frequent questions have become documentation pages."
                cadence: rolling
              tasks:
                - "Enable the discussion board with three categories"
                - "Transfer open question issues to the board"
                - "Answer or mark unanswered threads from the past week @recurring(weekly:fri)"
                - "Turn the most repeated question into a docs page"
            - name: Contributor CI matrix upkeep
              description: |-
                ## Purpose
                Test matrices still running against a runtime that reached end of life last year waste minutes on every pull request and miss the version users actually run. Reviewing the supported runtime and operating system matrix monthly keeps CI meaningful and makes the supported versions statement true.

                ## Milestones
                1. The current CI matrix listed against each runtime's official end-of-life dates.
                2. Versions past end of life removed and the newest stable release added.
                3. Supported versions in the README matching the matrix.
                4. Average CI duration for a pull request recorded before and after the change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The CI matrix and the README's supported versions match, with no end-of-life runtimes in the matrix."
                cadence: rolling
              tasks:
                - "List each runtime in the CI matrix with its end-of-life date"
                - "Check runtime end-of-life dates against the CI matrix @recurring(monthly:22)"
                - "Update the supported versions section of the README to match"
                - "Record the average CI duration for a pull request"
            - name: Quarterly roadmap and milestone grooming
              description: |-
                ## Purpose
                Users and would-be contributors want to know what is coming, and you need a reason to say not now. A short public roadmap of three to five themes, backed by forge milestones, reviewed each quarter, shows direction without promising dates you cannot keep.

                ## Milestones
                1. Three to five themes for the next two quarters written in a ROADMAP file or pinned discussion.
                2. Issues assigned to a milestone for the next release only.
                3. Milestones older than a quarter closed or emptied.
                4. Roadmap changes explained in a short post each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A public roadmap of three to five themes is reviewed and reposted each quarter, with only the next release's milestone populated."
                cadence: cyclic
              tasks:
                - "Write three to five roadmap themes for the next two quarters"
                - "Move issues out of milestones beyond the next release"
                - "Review the roadmap and post a short update @recurring(quarterly)"
                - "Close milestones that are older than a quarter"
            - name: Monthly maintainer energy check-in
              description: |-
                ## Purpose
                Burnout creeps in as resentment toward notifications long before you notice it. A five-minute monthly check, rating energy, noting what drained you and choosing one thing to drop or delegate, gives early warning and a habit of adjusting before quitting feels like the only option.

                ## Milestones
                1. A private note with a monthly energy score from one to five and one sentence on why.
                2. The tasks that drained you most listed over three months.
                3. One drain removed, automated or delegated each quarter.
                4. A personal rule written for what you will do if the score is two or below twice in a row.

                ## Notes
                Taking a public break is allowed. A pinned note saying you are away for a month costs nothing and stops people pinging.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of energy scores are logged and at least one draining task has been dropped or delegated."
                cadence: rolling
              tasks:
                - "Create a private note for monthly energy scores"
                - "Rate your energy and name the biggest drain this month @recurring(monthly:27)"
                - "Pick one draining task to drop, automate or delegate"
                - "Write your rule for what happens after two low months"
            - name: Testing against major downstream dependents
              description: |-
                ## Purpose
                The bug reports that hurt most come from a popular project that depends on you and broke after your release. Identifying the five largest dependents and running their test suites against your main branch before releasing catches breaking changes while they are still cheap to fix.

                ## Milestones
                1. The five most used dependents identified from the forge's dependents graph or the package registry.
                2. A script or CI job that installs your main branch into each and runs its tests.
                3. Results reviewed before each release, with failures traced to a cause.
                4. A maintainer contact noted for each dependent for advance warnings.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A job runs the test suites of five major dependents against the main branch and is checked before every release."
                cadence: rolling
              tasks:
                - "Find your five most used dependents in the registry"
                - "Write a job that runs their tests against your main branch"
                - "Review dependent test results before the next release @recurring(monthly:4)"
                - "Note a maintainer contact for each dependent"
            - name: Reviewing first-time contributions kindly and firmly
              description: |-
                ## Purpose
                First pull requests are often someone's first open source contribution anywhere, and a curt review can end it. Learning to separate must-fix from nice-to-have, label nitpicks as optional and push small fixes yourself makes newcomers return while still keeping quality high.

                ## Milestones
                1. A personal review checklist splitting blocking issues from suggestions.
                2. Comments labelled with a prefix such as nit or optional where they do not block.
                3. Small fixes pushed directly to contributor branches, with permission, instead of a fifth review round.
                4. Five first-time contributions reviewed using the approach and the outcome noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five first-time contributions are reviewed using a written blocking versus optional checklist, with outcomes recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a review checklist with blocking and optional columns"
                - "Reread your last three reviews and mark comments that were only nits"
                - "Thank the contributor in the first line of every first review"
                - "Track whether five first-time contributors open a second pull request"
            - name: Declining feature requests with a clear reason
              description: |-
                ## Purpose
                Every feature you accept is code you maintain for years, often alone. Practising a short, warm refusal that names the reason, points to the scope statement and suggests an alternative such as a plugin or fork protects the project without making users feel dismissed.

                ## Milestones
                1. Three saved replies for out of scope, too costly to maintain and better as a plugin.
                2. Five pending feature requests answered with a decision rather than left open.
                3. An extension point or plugin hook documented for the most common class of request.
                4. No angry follow-ups on the declined requests after two weeks, or the lesson noted if there were.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five pending feature requests are answered with a decision using saved replies, and one extension point is documented."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft three saved replies for the common reasons to decline"
                - "Answer five old feature requests with a clear yes or no"
                - "Document one extension point for requests you keep declining"
                - "Note how each declined requester responded"
            - name: Semantic versioning and deprecation practice
              description: |-
                ## Purpose
                Users pin versions on the promise that a minor release will not break them, so one accidental breaking change in a patch release costs trust across every dependent. Learning what your public API actually is, and how to deprecate with a warning one release before removal, makes version numbers mean what they claim.

                ## Milestones
                1. The public API written down: exported modules, functions, flags and config keys.
                2. The semantic versioning rules read and applied to the last five releases to check for mistakes.
                3. A deprecation policy written, such as warn for one minor release before removal in the next major.
                4. Deprecation warnings added for anything already planned for removal.

                ## Notes
                Pre-1.0 projects still benefit from a stated policy. Say what 0.x minor bumps mean for your project.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The public API and a written deprecation policy are published, and the last five releases are checked against semantic versioning rules."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List everything that counts as the public API"
                - "Check the last five releases for breaking changes in minor or patch bumps"
                - "Write a deprecation policy into the contributing guide"
                - "Add warnings for features already planned for removal"
            - name: Asking for minimal reproductions
              description: |-
                ## Purpose
                Bug reports that say it does not work, followed by a three-hundred-line log, are puzzles rather than tasks. Learning to ask for, and show how to build, a minimal reproduction in a small repository or online sandbox moves the effort of isolation to the person who has the bug and often reveals it was not your bug at all.

                ## Milestones
                1. A reproduction template repository or sandbox link created for the project.
                2. A saved reply explaining what a minimal reproduction is and linking the template.
                3. Ten bug reports handled with a reproduction request and the hit rate noted.
                4. A label for needs reproduction applied and included in the stale policy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reproduction template and saved reply exist, and ten bug reports have been handled with a reproduction request."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Create a minimal reproduction template repository for the project"
                - "Write a saved reply that links the template"
                - "Add a needs reproduction label"
                - "Track how many of the next ten requests get a reproduction back"
            - name: Licence compatibility basics for incoming code
              description: |-
                ## Purpose
                Copying is the quiet risk: a helpful contributor who pastes a function from a copyleft project into your permissive library can create a problem that outlives everyone involved. Knowing the common compatibility patterns and when to ask where code came from lets you catch it in review and know when to seek proper advice.

                ## Milestones
                1. The common compatibility patterns between permissive, weak copyleft and strong copyleft licences noted.
                2. A review habit of asking about copied or vendored code.
                3. Vendored files in the repository listed with their original licences.
                4. A note on when to stop and ask a lawyer or your foundation.

                ## Notes
                This builds awareness, not legal judgement. When a real question arises, ask a lawyer or the foundation's legal contact.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every vendored file in the repository is listed with its original licence, and a review habit for copied code is written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a plain guide to licence compatibility from a recognised source"
                - "List every vendored or copied file and its original licence"
                - "Add a pull request template question about copied code"
                - "Write a note on when to ask a lawyer"
            - name: Writing release notes users actually read
              description: |-
                ## Purpose
                Changelogs list every commit; release notes tell a busy user whether to upgrade today and what will break. Practising notes that lead with breaking changes and upgrade steps, then highlights, then the full list, cuts the wave of issues that follows every release.

                ## Milestones
                1. A release notes structure written: breaking changes, upgrade steps, highlights, full changelog link.
                2. The next two releases published with notes in that structure.
                3. Contributors thanked by name in each set of notes.
                4. Post-release issue volume compared with previous releases.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two releases are published with notes that lead with breaking changes and upgrade steps and thank contributors by name."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a release notes structure that starts with breaking changes"
                - "Ask the agent to draft notes from the changelog for your review"
                - "Thank every contributor by name in the notes"
                - "Compare issue volume in the week after release with the last one"
            - name: Mentoring a regular contributor toward commit rights
              description: |-
                ## Purpose
                The contributor who has sent five good pull requests is the most likely future maintainer, but only if someone invites them further in. A deliberate plan, moving from reviewing others' pull requests to triage rights to merge rights over a few months, grows the team without risking the main branch.

                ## Milestones
                1. One regular contributor asked whether they would like more responsibility.
                2. Triage permissions granted and their first month of labelling reviewed together.
                3. Their reviews of other pull requests checked against your own judgement on five cases.
                4. Merge rights granted, or a clear next step agreed, after three months.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A regular contributor has triage rights and, after three months, either merge rights or a written next step."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Message your most regular contributor to ask about more involvement"
                - "Grant triage permissions and agree a monthly catch-up"
                - "Review five of their pull request reviews with them"
                - "Decide on merge rights at the three-month mark"
            - name: Good first issue pipeline
              description: |-
                ## Purpose
                Labelling something good first issue and leaving it vague sends newcomers into a wall. Writing a handful of genuinely small issues each month, with the file to change, the expected behaviour and a hint, gives new contributors a real route in and fills the queue for contribution events.

                ## Milestones
                1. Five issues written with the file location, expected behaviour and a hint.
                2. Each labelled good first issue and kept free of maintainer assignment.
                3. A comment rule stating how to claim one and how long the claim lasts.
                4. At least two completed by first-time contributors.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least five well-specified good first issues are open and two have been completed by first-time contributors."
                cadence: rolling
              tasks:
                - "Write five small issues naming the file and the expected change"
                - "Add a claiming rule to the contributing guide"
                - "Write two new good first issues from your backlog @recurring(monthly:12)"
                - "Thank and point each finisher toward a slightly larger issue"
            - name: Documentation site and versioned docs choice
              description: |-
                ## Purpose
                Once the README passes a few screens, users need search, navigation and docs that match the version they installed. Choosing a static documentation generator and hosting, with docs built from the repository on each release, keeps docs and code in step and lets contributors fix docs in the same pull request.

                ## Milestones
                1. Two or three documentation generators compared on versioning, search, hosting and the language you write in.
                2. One chosen and a skeleton site building from the repository.
                3. Docs published automatically on each release with a version selector.
                4. Existing README sections moved or linked so there is one source of truth.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documentation site builds from the repository on each release with a version selector and replaces duplicated README content."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compare three documentation generators on versioning and search"
                - "Build a skeleton docs site from the repository"
                - "Add a CI step that publishes docs on each release"
                - "Move long README sections into the docs site"
            - name: Funding model for the project
              description: |-
                ## Purpose
                Money will not fix a burnt-out maintainer, but it can pay for CI minutes, a security audit or a few protected hours a month. Comparing sponsorship platforms, fiscal hosts, grants and paid support against how much admin each creates helps you pick one route and say clearly what the money funds.

                ## Milestones
                1. Annual project costs listed: hosting, domains, CI, signing certificates and your time.
                2. Sponsorships, a fiscal host, grants and paid support compared on income potential and admin.
                3. One route chosen and set up, with a funding file in the repository.
                4. A public note of what the money is spent on.

                ## Notes
                Tax and employment treatment of project income varies by country. Check with an accountant before taking regular payments, especially alongside a salaried job.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One funding route is set up with a funding file in the repository and a public note of what the money pays for."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the project's annual costs including your time"
                - "Compare sponsorship, a fiscal host, grants and paid support"
                - "Add a funding file and a sponsor link to the README"
                - "Post a short update on income and spending @recurring(quarterly)"
            - name: Written governance model
              description: |-
                ## Purpose
                Projects run on unwritten rules until the day two maintainers disagree and nobody knows who decides. A short GOVERNANCE file saying who holds which rights, how decisions are made, how people join and leave, and what happens if the lead disappears prevents that day from splitting the project.

                ## Milestones
                1. The current reality written down: who can merge, release and change settings.
                2. A decision process chosen, such as lazy consensus with the lead as tie breaker.
                3. Joining and stepping down rules written for maintainers.
                4. A GOVERNANCE file merged after every current maintainer has commented.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A GOVERNANCE file covering rights, decision making, joining and stepping down is merged with every maintainer's agreement."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List who currently holds merge, release and admin rights"
                - "Draft a decision process and a tie-break rule"
                - "Write how maintainers join and step down"
                - "Open the GOVERNANCE file as a pull request for maintainer comment"
            - name: DCO or contributor licence agreement decision
              description: |-
                ## Purpose
                Some projects ask contributors to sign a contributor licence agreement, others only ask for a sign-off line under the Developer Certificate of Origin, and many ask for nothing. Choosing deliberately, considering future relicensing, company contributors and the friction for newcomers, settles a question that is very hard to change later.

                ## Milestones
                1. The options noted: nothing beyond the licence, DCO sign-off, or a CLA.
                2. The trade-offs for your project written down, including any employer or foundation requirement.
                3. A choice recorded and explained in the contributing guide.
                4. A check added to CI if sign-off or CLA is required.

                ## Notes
                This is a governance and process decision. Questions about rights assignment or relicensing belong with a lawyer or your foundation.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between no agreement, DCO sign-off or a CLA is in the contributing guide, with a CI check if one is required."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the DCO text and one widely used CLA"
                - "Ask your employer or foundation whether either is required"
                - "Record the choice and reasoning in the contributing guide"
                - "Add a sign-off or CLA check to CI if you chose one"
            - name: Second maintainer with release rights
              description: |-
                ## Purpose
                If you are the only person who can publish to the package registry, the project's bus factor is one, and a holiday or illness freezes every fix. Giving a trusted second person registry, repository admin and domain access, and having them cut a real release, means the project survives your absence.

                ## Milestones
                1. A trusted second person agreed, from the contributors or a peer maintainer.
                2. Registry publish rights, repository admin and domain or docs hosting access granted.
                3. A release cut end to end by the second maintainer using the checklist.
                4. Recovery steps for each account stored where both of you can reach them.

                ## Notes
                Share access through each platform's own team or owner features, never by sharing one account's password.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A second person holds publish, admin and hosting rights and has cut one release end to end without help."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every account needed to release, host docs and own the domain"
                - "Invite a trusted second maintainer to each as a co-owner"
                - "Have them cut the next release while you only watch"
                - "Ask the co-maintainer to cut a release on their own @recurring(quarterly)"
            - name: Automated release publishing with trusted publishing
              description: |-
                ## Purpose
                Publishing from a laptop with a long-lived registry token is how many supply chain compromises start. Moving publishing into CI with short-lived trusted publishing credentials and build provenance, triggered only by a tag, removes the token from your machine and shows users exactly where each package was built.

                ## Milestones
                1. A release workflow that builds and publishes only when a version tag is pushed.
                2. Trusted publishing or OIDC configured with the package registry where it is supported.
                3. Long-lived publish tokens revoked from personal machines and CI secrets.
                4. Provenance or signatures attached to a published release and verified once.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Releases publish from CI on a version tag with trusted publishing, and no long-lived publish tokens remain."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check whether your registry supports trusted publishing"
                - "Write a workflow that publishes only on a version tag"
                - "Revoke long-lived publish tokens from your machine and CI"
                - "Verify the provenance on the next published release"
            - name: Moving the repository to an organisation account
              description: |-
                ## Purpose
                Projects under a personal account are tied to one person's login, and transferring later breaks links and confuses users. Moving the project to an organisation, with at least two owners, makes room for co-maintainers and separates the project's identity from yours.

                ## Milestones
                1. An organisation created with a name matching the project.
                2. At least two owners added to the organisation.
                3. The repository transferred, with redirects checked and registry metadata updated.
                4. Badges, docs links and package homepage URLs pointing at the new location.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The repository lives under an organisation with at least two owners, and all registry and docs links point to it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create an organisation named after the project"
                - "Add a second owner before transferring anything"
                - "Transfer the repository and test the old URL redirects"
                - "Update registry metadata, badges and docs links"
            - name: First stable 1.0 release
              description: |-
                ## Purpose
                Staying on 0.x forever tells companies the project is not ready, even when it is running in production for thousands. Planning a 1.0 means freezing the public API, clearing breaking changes you have been putting off and publishing a support statement, so the version finally matches the reality.

                ## Milestones
                1. Every pending breaking change either done before 1.0 or dropped.
                2. The public API documented and frozen under semantic versioning.
                3. A release candidate published and tested by at least three users or dependents.
                4. 1.0 released with notes explaining the stability promise and support window.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Version 1.0 is published after a release candidate tested by at least three users, with a written stability promise."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List every breaking change you have been deferring"
                - "Open a 1.0 milestone with only those changes in it"
                - "Publish a release candidate and ask three users to test it"
                - "Write the stability promise for the 1.0 release notes"
            - name: Major version migration guide and release
              description: |-
                ## Purpose
                Breaking changes without a clear migration path split your users between versions for years. A migration guide with before and after examples, a codemod or upgrade script where practical and a published support window for the old major lets people upgrade on their own schedule.

                ## Milestones
                1. Every breaking change listed with a before and after code example.
                2. A codemod or automated upgrade step written for the most common change, if feasible.
                3. A support window for the previous major published, such as security fixes for twelve months.
                4. The major released with the guide linked from the release notes and the README.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The major version ships with a migration guide covering every breaking change and a published support window for the old major."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List every breaking change with a before and after example"
                - "Write a codemod for the change that affects most users"
                - "Publish the support window for the previous major"
                - "Ask two dependents to try the migration guide before release"
            - name: Contribution month preparation
              description: |-
                ## Purpose
                Contribution drives bring a burst of newcomers, and with them a burst of low-effort pull requests if you are not ready. Preparing labelled issues, a clear opt-in label and extra review time beforehand turns the month into a recruiting event rather than a spam cleanup.

                ## Milestones
                1. The event's participation rules read and the repository opted in or not, deliberately.
                2. Ten or more scoped issues labelled for the event.
                3. Review time blocked in your calendar for each week of the month.
                4. A short retrospective listing new contributors who returned afterwards.

                ## Notes
                It is fine to opt out. If you join, a pinned note explaining that unscoped pull requests will be closed saves arguments.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Ten scoped issues are ready before the event and a retrospective counts the new contributors who returned."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Read the event's rules and decide whether to opt in"
                - "Label ten scoped issues for the event"
                - "Block review time for each week of the event month"
                - "Write a short retrospective on who returned afterwards"
            - name: Conference talk or workshop about the project
              description: |-
                ## Purpose
                Talks at a meetup or conference reach users who will never read your README and are the most reliable way to find co-maintainers. Submitting a proposal, building a demo that cannot fail on stage and recording the talk turns months of quiet work into visible credit.

                ## Milestones
                1. Two or three events chosen whose audience uses the project's language or field.
                2. A talk proposal submitted with a clear title and three takeaways.
                3. A demo rehearsed offline with a recorded fallback.
                4. Slides and recording linked from the README or docs after the event.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A talk about the project is delivered at a meetup or conference and the slides or recording are linked from the docs."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Shortlist three events whose audience uses the project"
                - "Write a proposal with a title and three takeaways"
                - "Record a fallback video of the live demo"
                - "Link the slides and recording from the docs"
            - name: Annual maintainer report and contributor thanks
              description: |-
                ## Purpose
                Twelve months of releases, fixes and contributors go unnoticed unless someone writes it down, and that record helps with funding, job applications and your own motivation. A yearly post covering releases, contributor numbers, highlights and plans, naming every contributor, closes the year properly.

                ## Milestones
                1. Releases, merged pull requests and new contributors counted for the year.
                2. Every contributor listed by name or handle.
                3. Highlights, lowlights and next year's themes written in a short post.
                4. The post published and shared with sponsors and dependents.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A yearly report with release and contributor counts, a full contributor list and next year's themes is published."
                cadence: cyclic
              tasks:
                - "Count releases, merged pull requests and new contributors for the year"
                - "Ask the agent to compile the contributor list from merged pull requests"
                - "Write and publish the annual maintainer report @recurring(yearly)"
                - "Share the report with sponsors and major dependents"
            - name: Releasing research code alongside a paper
              description: |-
                ## Purpose
                Reviewers and readers increasingly expect the code behind a paper, and a repository with no environment file or data instructions cannot reproduce a single figure. Preparing a tagged release with pinned dependencies, a script per figure, a citation file and an archived snapshot with a persistent identifier makes the work citable and reusable.

                ## Milestones
                1. Dependencies pinned in an environment or lock file and tested on a clean machine.
                2. A script or notebook that regenerates each figure and table in the paper.
                3. A CITATION file added so the forge and reference managers show how to cite it.
                4. A tagged release archived with a persistent identifier, cited in the paper.

                ## Notes
                Check your institution's and funder's policy on code release and licensing before submission. Some require specific repositories or licences.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A tagged release with pinned dependencies, per-figure scripts and a CITATION file is archived with a persistent identifier cited in the paper."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Check your institution and funder rules on code release"
                - "Pin dependencies and rerun the analysis on a clean machine"
                - "Write one script per figure and table in the paper"
                - "Add a CITATION file and archive a tagged release"
            - name: Research software sustainability past the grant
              description: |-
                ## Purpose
                Research tools often gain a user community just as the grant that paid for them ends and the postdoc who wrote them moves on. Writing down who maintains it next, what support level users can expect and which funding or community routes exist keeps a useful tool alive, or lets it end honestly.

                ## Milestones
                1. Current users identified through citations, downloads and issue authors.
                2. A maintenance statement published: active, maintenance only or archived, with dates.
                3. At least one co-maintainer outside your lab or a research software engineering group approached.
                4. Follow-on funding options such as software sustainability grants listed with deadlines.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A maintenance statement with a support level is published and at least one co-maintainer or funding route is pursued."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List users from citations, downloads and issue authors"
                - "Publish a maintenance status statement in the README"
                - "Contact one research software engineering group about co-maintenance"
                - "Review the maintenance statement and funding options @recurring(yearly)"
            - name: Maintaining open source alongside a day job
              description: |-
                ## Purpose
                Many employment contracts say something about code written outside work, and finding out after a dispute is painful. Reading your agreement, asking for written permission or an exception, and keeping project work on your own equipment and time protects both the project and your job.

                ## Milestones
                1. The intellectual property and outside activity clauses of your employment agreement read.
                2. Written confirmation from your employer that the project is yours, or an approved arrangement.
                3. Project work kept on personal accounts, equipment and hours, or the agreed alternative.
                4. Commit email and signing keys separated from work identities.

                ## Notes
                This is organisational, not legal advice. If the clauses are unclear, ask your employer's legal team or your own lawyer before relying on them.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written employer confirmation or an approved arrangement covering the project is on file, and work and personal identities are separated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find and read the IP clauses in your employment agreement"
                - "Email your manager or legal team asking for written confirmation"
                - "Set a personal commit email for the project repository"
                - "Store the confirmation somewhere you will find it later"
            - name: Company-sponsored project with outside contributors
              description: |-
                ## Purpose
                When a company opens a repository, outside contributors notice quickly if internal discussion decides everything and their pull requests wait behind sprint priorities. Agreeing internally who reviews outside work, which decisions happen in public and how roadmap changes are announced makes the project credible to the community it hopes to attract.

                ## Milestones
                1. A named team member responsible for outside pull requests each week.
                2. A rule that design decisions affecting users are discussed in public issues.
                3. Outside pull request response times tracked separately from internal ones.
                4. A public note explaining how the company and community share decision making.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A named reviewer for outside pull requests is in place and their response time is tracked for two months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree with the team who reviews outside pull requests each week"
                - "Write the rule for which decisions are made in public"
                - "Report outside versus internal pull request response times"
                - "Publish a note on how decisions are shared with the community"
            - name: Adopting an abandoned or unmaintained project
              description: |-
                ## Purpose
                When a library you depend on goes quiet, forking is easy but taking over the name and the users is not. Contacting the original maintainer, agreeing a handover or a clearly named fork, and publishing your intentions avoids splitting the community and confusing users about which version is safe.

                ## Milestones
                1. The original maintainer contacted through two channels, with a reasonable wait for a reply.
                2. Either a handover of repository and registry rights or a clearly named fork agreed.
                3. A pinned issue explaining the new maintenance situation.
                4. The first maintenance release published with a clear note of what changed.

                ## Notes
                Most package registries have a published process for requesting an abandoned package name. Follow it rather than registering a confusingly similar one.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A handover or clearly named fork is agreed, announced in a pinned issue and followed by a first maintenance release."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Contact the original maintainer by issue and by email"
                - "Read the registry's process for abandoned package names"
                - "Pin an issue explaining the new maintenance plan"
                - "Publish a first maintenance release with clear notes"
            - name: Handing over or archiving a project responsibly
              description: |-
                ## Purpose
                Stepping back is a normal part of maintaining, but a project that silently stops leaves users unpatched and guessing. Deciding between handing it to new maintainers, putting it in maintenance only mode or archiving it, and announcing that clearly, lets you leave without guilt and lets users plan.

                ## Milestones
                1. A decision recorded: hand over, maintenance only or archive.
                2. If handing over, the successor given all rights and the handover announced.
                3. If archiving, a final release with a README notice and suggested alternatives.
                4. Your own access removed or reduced once the transition is complete.

                ## Notes
                Announce at least a month ahead where possible so dependents can plan. Archiving is a responsible outcome, not a failure.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A hand-over, maintenance only or archive decision is announced publicly and carried out, with access updated."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down whether to hand over, freeze or archive and why"
                - "Post an announcement at least a month before the change"
                - "Transfer rights or publish a final release with a README notice"
                - "Remove your own access once the transition is done"
            - name: Coordinated vulnerability disclosure and advisory
              description: |-
                ## Purpose
                Real vulnerability reports start a clock, and handling one for the first time under pressure leads to leaked details or a fix nobody knows to install. Rehearsing the full path, from private advisory and fix in a private fork to a CVE identifier, coordinated release and public advisory, makes the real one calm.

                ## Milestones
                1. A written disclosure process from acknowledgement to public advisory, with target timings.
                2. A private advisory and private fork created once as a dry run.
                3. The route for requesting a CVE identifier through your forge or a CVE numbering authority noted.
                4. The process run for real, or a full tabletop rehearsal completed and logged.

                ## Notes
                Credit the reporter in the advisory unless they ask not to be named.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written disclosure process exists and has been exercised end to end in a dry run or a real advisory."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the disclosure steps from acknowledgement to public advisory"
                - "Create a draft private security advisory as a dry run"
                - "Find out how your forge requests CVE identifiers"
                - "Rehearse the disclosure process with a fake report @recurring(yearly)"
            - name: Supply chain hardening of the release process
              description: |-
                ## Purpose
                Attackers increasingly target maintainers' accounts and workflows rather than the code itself. Enforcing two-factor authentication for every maintainer, protecting the main branch, pinning CI actions to commit hashes and limiting workflow permissions closes the most common routes into your users' builds.

                ## Milestones
                1. Two-factor authentication required for every member with write access and for registry accounts.
                2. Branch protection requiring review and passing checks on the main branch.
                3. Third-party CI actions pinned to commit hashes and workflow token permissions set to read by default.
                4. An automated supply chain score run and its top three findings fixed.

                ## Notes
                Start from the **Risk register** template to track each finding and its owner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two-factor is enforced, main is protected, actions are pinned and the top three supply chain scorecard findings are fixed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Require two-factor authentication for every member with write access"
                - "Turn on branch protection with required reviews and checks"
                - "Pin third-party CI actions to commit hashes"
                - "Audit maintainer access, tokens and two-factor status @recurring(quarterly)"
            - name: Usage signals from downloads and dependents
              description: |-
                ## Purpose
                Download counts are inflated by CI mirrors and bots, yet funders and employers still ask how many people use the project. Tracking a few signals together each month, such as registry downloads, dependent repositories, distinct issue authors and citations for research code, gives an honest picture and shows which versions people still run.

                ## Milestones
                1. Four signals chosen and their sources noted.
                2. A monthly log started with the first three months filled in.
                3. Version adoption checked to see how many users are still on old majors.
                4. A short note written on what the signals mean and their known distortions.

                ## Notes
                Start from the **Metrics log** template. A drop in downloads after a CI cache change is not a drop in users.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly usage log with four named signals has three months of entries and a note on their distortions."
                cadence: rolling
              tasks:
                - "Choose four usage signals and note where each comes from"
                - "Record this month's downloads, dependents and issue authors @recurring(monthly:6)"
                - "Check how many users are still on the previous major"
                - "Write a note on what distorts each signal"
            - name: Maintainer team roles and decision rights
              description: |-
                ## Purpose
                Once a project has four or five maintainers, everyone doing everything means some things are done twice and security reports are done by nobody. Defining roles such as release manager, triage lead and security contact, with a rotation and a written decision rights table, scales the team without adding meetings.

                ## Milestones
                1. The recurring maintainer jobs listed with how often each happens.
                2. Each job assigned an owner and a backup, with a rotation where it helps.
                3. A decision rights table saying who decides on merges, releases, security and governance changes.
                4. The roles published in the GOVERNANCE file and reviewed after six months.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every recurring maintainer job has an owner and backup, and a decision rights table is published in the GOVERNANCE file."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every recurring maintainer job and how often it happens"
                - "Assign an owner and a backup to each job"
                - "Draft a decision rights table for merges, releases and security"
                - "Publish the roles in the GOVERNANCE file"
---

# Open Source Maintenance

This area is for engineers and researchers who look after an open source project, whether it has three stars or three thousand dependents, and who want the work to feel manageable rather than endless. It starts with the foundations (a repository health audit, a time budget, the licence, scope, README, contributing guide, code of conduct, templates, labels and a security policy), then the operating rhythms of triage, review, releases and support, the skills of reviewing, declining and versioning well, the decisions about funding, governance and a second maintainer, dated events such as a 1.0 or a major version, the situations a researcher, a day-job maintainer or a company team face, and finally specialist work on vulnerability disclosure, supply chain hardening and maintainer team roles.

What repeats is a weekly triage hour, a weekly review pass and a weekly look at the discussion board, monthly stale sweeps, releases, CI matrix checks, dependent testing and an energy check-in, quarterly roadmap and security reviews, and a yearly maintainer report. The Operational checklist, Risk register and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
