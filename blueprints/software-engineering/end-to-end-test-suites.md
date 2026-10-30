---
id: software-engineering.end-to-end-test-suites
name: End-to-End Test Suites
description: "A browser and API test suite built around your real user flows, with stable selectors and seeded data, a weekly flake triage, quarantine rules and run-time budgets that keep the team trusting a red build."
category: business
version: 1.0.0
tags: [software-engineering, end-to-end-test-suites, engineer, team, browser-testing, flaky-tests, test-automation, regression]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - remediation-plan
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: End-to-End Test Suites
          description: "Building and maintaining browser and API tests that exercise full user journeys, and taming flaky tests before they erode trust."
          projects:
            - name: Critical user flow inventory
              description: |-
                ## Purpose
                Most suites grow by accident, one test per bug, until nobody can say which flows are covered and which are not. Listing the ten to twenty flows that would cost real money or trust if they broke, such as sign-up, login, checkout, password reset and the core action of the product, gives every later test a reason to exist and a priority order.

                ## Milestones
                1. A list of the critical flows, each written as a one-line user goal with a start and end state.
                2. Each flow ranked by business impact, agreed with the product owner.
                3. Existing tests mapped against the list, with uncovered flows marked.
                4. The inventory stored in the repository next to the tests, not in a slide deck.

                ## Notes
                Pull the flows from analytics, support tickets and the last few incidents, not from memory. A flow that nobody uses does not belong at the top, however complex it is.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ranked inventory of critical flows lives in the repository, with every existing end-to-end test mapped to one of them or flagged as unmapped."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the five flows that would trigger an incident call if they broke"
                - "Pull the most used flows from product analytics for the last ninety days"
                - "Rank the flows by business impact with the product owner"
                - "Map every existing end-to-end spec to a flow in the inventory"
                - "Revisit the inventory against features shipped this quarter @recurring(quarterly)"
            - name: Choosing an end-to-end test framework
              description: |-
                ## Purpose
                Framework choice decides how tests wait for the page, which browsers they reach, how they run in parallel and what you get when they fail. Comparing two or three candidates, for example Playwright, Cypress and a WebDriver-based runner, against your own app on the same three flows beats choosing from blog posts.

                ## Milestones
                1. Five or six criteria written down: browser coverage, auto-waiting, parallelism, debugging artefacts, language fit and licence cost.
                2. The same three flows spiked in each shortlisted framework.
                3. Run time, flake count over twenty runs and lines of code recorded for each spike.
                4. A decision record naming the chosen framework and why the others lost.

                ## Notes
                Run each spike at least twenty times before judging stability. A framework that passes once on your laptop has told you almost nothing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision record names one framework, with the run time and flake results of each spiked candidate attached."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the browsers and devices your users actually run, from analytics"
                - "Shortlist two or three frameworks that cover those browsers"
                - "Spike login, search and checkout in each candidate"
                - "Run each spike twenty times and record failures and duration"
                - "Write the decision record and share it with the team for comments"
            - name: First smoke test against a deployed build
              description: |-
                ## Purpose
                One small test that loads the app, logs in and checks the home screen, running against a real deployed build, proves the whole chain works: browser, network, auth and test data. Getting that single test green and repeatable is worth more in week one than twenty tests that only pass on localhost.

                ## Milestones
                1. One smoke test that opens the app, signs in and asserts a visible element on the landing screen.
                2. The test passing ten times in a row against the shared test environment.
                3. The base URL and credentials read from configuration, not hard-coded.
                4. The command to run it written in the project README.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A smoke test runs green ten consecutive times against a deployed environment using configured base URL and credentials."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Install the chosen framework in the repository and run its example test"
                - "Write a test that signs in and checks the landing screen heading"
                - "Move the base URL and test credentials into environment configuration"
                - "Run the smoke test ten times in a loop and fix anything that wobbles"
            - name: Test environment and configuration profiles
              description: |-
                ## Purpose
                Tests that silently point at the wrong environment either hide bugs or, worse, create junk data in production. Defining named profiles for local, preview, staging and any production-safe checks, each with its own base URL, timeouts and allowed actions, makes the target of every run explicit.

                ## Milestones
                1. Named configuration profiles for each environment the suite may run against.
                2. A guard that refuses to run destructive flows when the target looks like production.
                3. Timeouts and retries set per profile rather than scattered through tests.
                4. The active profile printed at the top of every run log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every suite run prints its target profile, and a destructive spec fails fast when pointed at a production URL."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every environment the suite has ever been pointed at"
                - "Create one configuration profile per environment with its base URL"
                - "Add a check that blocks write flows against production hostnames"
                - "Print the active profile and target URL at the start of each run"
            - name: Test accounts and seeded data strategy
              description: |-
                ## Purpose
                Shared test accounts that every spec logs into are the commonest cause of tests that pass alone and fail together. Deciding how data is created, whether by seeding scripts, API factories or per-test accounts, and how it is torn down, removes a whole class of flakiness before it starts.

                ## Milestones
                1. A written rule for where test data comes from: seed script, API factory or fixture snapshot.
                2. A factory that creates a fresh user with the role a test needs in under two seconds.
                3. No spec that depends on data another spec created.
                4. Test accounts and seed values stored in project fixtures, never real customer data.

                ## Notes
                Never copy production records into test environments to save time. Synthetic data with realistic shapes is safer and easier to reset.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Specs create their own users and records through a factory, and the suite passes when run in random order."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find every hard-coded test account and record id in the suite"
                - "Write an API factory that creates a user with a given role"
                - "Switch three of the busiest specs to factory-created users"
                - "Run the suite in random order to expose hidden data dependencies"
            - name: Stable selector convention with test ids
              description: |-
                ## Purpose
                Selectors built on CSS classes, nth-child positions or generated markup break every time a designer touches the page. Agreeing that tests find elements by accessible role and name first, and by a dedicated test id attribute where that fails, makes UI refactors stop breaking the suite.

                ## Milestones
                1. A one-page selector guide: role and label first, test id second, text third, CSS never.
                2. Test id attributes added to the twenty elements the critical flows touch most.
                3. A lint rule or review checklist item that flags new class-based selectors.
                4. Front-end engineers briefed on why the attributes must survive refactors.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A selector guide is merged, and no spec in the critical flows locates an element by CSS class or position."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search the suite for selectors that use classes or nth-child"
                - "Write the selector guide and add it to the test folder README"
                - "Add test id attributes to the elements used by the top three flows"
                - "Agree with front-end reviewers to keep test ids during refactors"
            - name: End-to-end job in the delivery pipeline
              description: |-
                ## Purpose
                Tests that only run on someone's laptop are documentation, not protection. Adding a headless end-to-end job that runs on every merge to the main branch, with browsers installed from a pinned image, turns the suite into a gate the whole team relies on.

                ## Milestones
                1. A headless end-to-end job running on every merge to the main branch.
                2. Browsers and runner pinned to exact versions through a container image or lock file.
                3. Failure artefacts uploaded and linked from the job summary.
                4. The job's median duration recorded as the starting baseline.

                ## Notes
                Keep the pipeline platform itself out of scope here; this project is only the end-to-end job and what it needs to run reliably.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The end-to-end job runs on every main-branch merge with pinned browser versions, and its median duration is recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose a container image that ships the browsers your runner needs"
                - "Add the headless end-to-end job to the main-branch pipeline"
                - "Upload traces and screenshots from failed runs as job artefacts"
                - "Record the median duration of the first ten pipeline runs"
            - name: Failure artefacts that explain themselves
              description: |-
                ## Purpose
                A red build that only says 'element not found' sends someone to rerun it locally for half an hour. Capturing a trace, a screenshot at the point of failure, the browser console and failed network calls means most failures can be diagnosed from the report in five minutes.

                ## Milestones
                1. Traces or videos captured on first retry or on failure, not on every passing test.
                2. Browser console errors and failed network requests attached to each failed test.
                3. A link from the pipeline summary straight to the failing test's artefacts.
                4. Artefact retention set so storage costs stay predictable.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every failed test in the pipeline links to a trace, screenshot, console log and network log, retained for a set number of days."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Turn on trace capture for failed tests in the runner configuration"
                - "Attach browser console output to the test report on failure"
                - "Link the failing test's artefacts from the pipeline summary"
                - "Set an artefact retention period and note the monthly storage cost"
            - name: Weekly flaky test triage
              description: |-
                ## Purpose
                Flaky tests rarely get fixed by accident: they get retried, ignored and eventually deleted, and the team learns that red means nothing. A thirty-minute weekly triage that looks at every test which failed and then passed on the same commit keeps flakiness visible and owned.

                ## Milestones
                1. A list of every test that flipped between pass and fail on one commit in the last seven days.
                2. Each flaky test assigned an owner and a likely cause category.
                3. Tests that flaked three weeks running moved to quarantine.
                4. A running count of open flaky tests kept from week to week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A triage note exists for each week, listing flaky tests, their owners and causes, with the open count trending down over a quarter."
                cadence: rolling
              tasks:
                - "Export last week's tests that failed then passed on the same commit @recurring(weekly:tue)"
                - "Assign each flaky test an owner and a cause category in the triage note"
                - "Move any test flaky for three weeks running into quarantine"
                - "Post the open flaky test count to the team channel @recurring(weekly:fri)"
            - name: Quarantine lane with expiry dates
              description: |-
                ## Purpose
                Deleting a flaky test loses coverage, and leaving it in the gate trains people to rerun until green. A quarantine lane runs known-flaky tests outside the blocking job, with each entry carrying an owner and an expiry date, so coverage survives while the fix is found.

                ## Milestones
                1. A tag or folder that runs quarantined tests in a separate, non-blocking job.
                2. Every quarantined test carrying an owner, a linked ticket and an expiry date.
                3. A rule that expired entries are fixed, rewritten or deleted, never extended twice.
                4. The quarantine list reviewed at the start of each month.

                ## Notes
                Cap the lane. If more than about five percent of the suite is quarantined, the problem is the suite design, not individual tests.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Quarantined tests run in a non-blocking job, each with an owner and expiry, and no entry has been extended more than once."
                cadence: rolling
              tasks:
                - "Create a quarantine tag that the blocking job skips"
                - "Add a non-blocking pipeline job that runs only quarantined tests"
                - "Review quarantine entries against their expiry dates @recurring(monthly:3)"
            - name: Nightly full regression run
              description: |-
                ## Purpose
                The blocking job on each merge should be quick, which means some flows only run occasionally. A nightly run of the whole suite across every supported browser against staging catches the slower regressions, and a short morning check means nobody starts the day building on a broken main branch.

                ## Milestones
                1. A scheduled nightly job running the full suite on all supported browsers.
                2. Results posted to the team channel before the working day starts.
                3. A named person each week who reads the nightly result first.
                4. Failures from the nightly run turned into tickets the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A nightly full regression runs on every supported browser, and every failure has a ticket opened the same working day."
                cadence: rolling
              tasks:
                - "Schedule the full suite to run nightly against staging"
                - "Post the nightly summary to the team chat channel automatically"
                - "Read the nightly result and ticket any new failure @recurring(weekly:mon,thu)"
            - name: Suite run time budget
              description: |-
                ## Purpose
                End-to-end suites slow down a few seconds at a time until the merge gate takes forty minutes and people stop waiting for it. Setting a budget, for example ten minutes for the blocking job, and checking it monthly makes slowness a decision rather than a drift.

                ## Milestones
                1. A written run time budget for the blocking job and for the nightly run.
                2. A monthly report of median and slowest-decile run times.
                3. The ten slowest specs listed with their durations.
                4. A fix or a deliberate move to nightly for any spec that pushes the job over budget.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The blocking end-to-end job stays within its written budget for three consecutive months, with a monthly duration report on file."
                cadence: rolling
              tasks:
                - "Agree a run time budget for the blocking job with the team"
                - "Pull median and slowest-decile job durations for the month @recurring(monthly:12)"
                - "List the ten slowest specs and pick one to speed up"
            - name: Flake rate log per test
              description: |-
                ## Purpose
                Without numbers, flaky test arguments become opinions about whose test is worse. Logging each test's flake rate, failures that pass on retry divided by runs, gives a ranked list to work from and shows whether the weekly triage is actually winning.

                ## Milestones
                1. Runner results exported in a machine-readable format from every pipeline run.
                2. A per-test flake rate calculated over a rolling thirty-day window.
                3. The suite-wide flake rate recorded once a month in a log.
                4. A target flake rate agreed with the team, such as under one percent of runs.

                ## Notes
                Start from the **Metrics log** template. Count retried passes as flakes; a retry that saved the build still cost trust.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A monthly log shows the suite flake rate and the ten flakiest tests for at least three consecutive months."
                cadence: rolling
              tasks:
                - "Switch the runner to emit JUnit XML or JSON results in the pipeline"
                - "Write a script that computes per-test flake rate over thirty days"
                - "Record the suite flake rate and top ten flakiest tests @recurring(monthly:26)"
            - name: Spec ownership map
              description: |-
                ## Purpose
                Nobody fixes a failing test that has no owner: it gets rerun, skipped and forgotten. Mapping every spec folder to the team that owns the flow, and routing failures to them automatically, means the right people see the right red builds without a central QA bottleneck.

                ## Milestones
                1. Every spec folder mapped to an owning team in a code owners file or equivalent.
                2. Failure notifications routed to the owning team's channel.
                3. Orphaned specs from departed teams reassigned or deleted.
                4. Ownership reviewed whenever a team is reorganised.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every spec folder has a named owning team, and failure alerts go to that team's channel rather than a shared one."
                cadence: rolling
              tasks:
                - "List spec folders that have no clear owning team"
                - "Add owning teams for every spec folder to the code owners file"
                - "Route failure notifications to each owning team's channel"
                - "Check the ownership map against the current team list @recurring(quarterly)"
            - name: Test environment reset and data cleanup
              description: |-
                ## Purpose
                Shared test environments fill with thousands of half-created orders and users until searches time out and lists paginate differently from last week. A scheduled cleanup and a known-good reset path keep the environment in a state the tests expect.

                ## Milestones
                1. A script that deletes records created by test runs older than a set age.
                2. A reset path that restores the environment's reference data from a known snapshot.
                3. Test-created records marked with a recognisable prefix or flag.
                4. The cleanup job running on a schedule and reporting how much it removed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A scheduled cleanup removes aged test records weekly, and the environment can be reset to reference data in under thirty minutes."
                cadence: rolling
              tasks:
                - "Mark every record the factories create with a test prefix"
                - "Write a cleanup script that deletes prefixed records older than seven days"
                - "Check the cleanup job's last report for errors or growth @recurring(weekly:fri)"
                - "Document the steps to restore reference data from the snapshot"
            - name: Monthly prune of low-value flows
              description: |-
                ## Purpose
                Every end-to-end test costs minutes on every run and attention on every failure, so a test that duplicates a lower-level check or covers a retired feature is pure cost. Pruning a few each month keeps the suite lean enough that people still run it.

                ## Milestones
                1. Specs covering retired or hidden features removed.
                2. Specs that only check logic already covered by unit or integration tests pushed down or deleted.
                3. Each removal noted with a reason in the change description.
                4. The suite's spec count and run time compared month on month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least one prune change is merged each month with a reason for every removed spec, and suite run time does not grow quarter on quarter."
                cadence: rolling
              tasks:
                - "Pick three specs and check whether a lower-level test already covers them @recurring(monthly:18)"
                - "Remove specs for features behind permanently disabled flags"
                - "Note the spec count and run time after each prune"
            - name: Release-gate smoke pack
              description: |-
                ## Purpose
                Right after a production deploy is the moment a short, read-only check of the most critical flows pays for itself. A smoke pack of five to eight flows that runs in under five minutes against the new release, with a clear rollback trigger, turns release confidence from hope into evidence.

                ## Milestones
                1. Five to eight read-only or safely reversible flows chosen for the smoke pack.
                2. The pack running automatically after every production deploy.
                3. A written rule for what a smoke failure triggers: rollback, hold or page.
                4. The pack's run time kept under five minutes.

                ## Notes
                Start from the **Operational checklist** template for the human steps around the pack. Keep payment and email flows in sandbox mode or use dedicated production test accounts agreed with the business.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A smoke pack runs after every production deploy in under five minutes, with a written rollback trigger the release owner follows."
                cadence: rolling
              tasks:
                - "Choose five to eight flows that are safe to run in production"
                - "Wire the smoke pack to run after each production deploy"
                - "Write the rule for when a smoke failure triggers a rollback"
                - "Check the smoke pack history for slow or skipped runs @recurring(monthly:8)"
            - name: Runner and browser version upkeep
              description: |-
                ## Purpose
                Test runners and browsers move fast, and a suite pinned to an eighteen-month-old version eventually breaks all at once when the pipeline image is retired. Upgrading on a steady quarterly schedule keeps each jump small and the release notes readable.

                ## Milestones
                1. Current runner, browser and driver versions recorded in one place.
                2. Each quarterly upgrade run on a branch with the full suite passing twice.
                3. Deprecation warnings from the runner logged and cleared.
                4. Upgrade notes kept for anything that changed test behaviour.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The runner and browsers are never more than one quarter behind their latest stable release, with upgrade notes kept for each bump."
                cadence: cyclic
              tasks:
                - "Record the current runner, browser and driver versions in the README"
                - "Upgrade the runner and browsers on a branch and run the suite twice @recurring(quarterly)"
                - "Clear the deprecation warnings printed by the latest run"
            - name: Auto-waiting assertions instead of fixed sleeps
              description: |-
                ## Purpose
                A fixed two-second sleep is either too long, wasting time on every run, or too short, failing on a slow day. Learning how your framework's web-first assertions and auto-waiting work, and replacing sleeps with waits on a visible state, is the single biggest stability improvement most suites can make.

                ## Milestones
                1. The framework's waiting and retrying assertion model understood and summarised in a page of notes.
                2. Every fixed sleep in the suite counted.
                3. Sleeps replaced with assertions on a visible state or a network response in the critical flows.
                4. A review rule that rejects new fixed sleeps.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The critical flows contain no fixed sleeps, and a review rule or lint check blocks new ones."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the framework's documentation section on auto-waiting and assertions"
                - "Count every hard sleep or wait-for-timeout call in the suite"
                - "Rewrite the sleeps in the login and checkout flows as state assertions"
                - "Add a lint rule that fails on new hard-coded waits"
            - name: Page object and screen model patterns
              description: |-
                ## Purpose
                When one button label changes and thirty specs fail, the selectors were copied instead of shared. Learning page objects, or lighter screen and component models, and applying them to the busiest screens gives one place to fix each change without hiding the test's intent behind layers of abstraction.

                ## Milestones
                1. Two patterns compared on one screen: classic page objects and small component helpers.
                2. A chosen pattern written up with a short example.
                3. The five most used screens modelled with the chosen pattern.
                4. Specs still reading as user steps, with assertions kept in the spec rather than the model.

                ## Notes
                Resist deep inheritance trees of page classes. Plain functions per screen are often easier to read and change.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written pattern guide exists and the five most used screens are modelled with it, with assertions left in the specs."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Count how many specs repeat the same login and navigation selectors"
                - "Model the login screen two ways and compare readability with a colleague"
                - "Write the chosen pattern into the suite README with an example"
                - "Refactor the five busiest screens to the chosen pattern"
            - name: Network interception and stubbing at the browser
              description: |-
                ## Purpose
                Some flows depend on things you cannot control in a test environment: a slow recommendation service, a third-party map or an error that only happens under load. Learning to intercept and stub specific network calls lets you test those states deliberately, while knowing when stubbing turns an end-to-end test into something less.

                ## Milestones
                1. Interception of a single request demonstrated, returning a canned response.
                2. Error and slow-response states tested for one critical flow.
                3. A written rule for which services may be stubbed and which must stay real.
                4. Stubbed tests labelled so readers know they are not fully end to end.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least two error or slow states are covered by stubbed tests, and a written rule says which dependencies may be stubbed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Stub one third-party call in a spike test and assert the fallback UI"
                - "Simulate a server error on checkout and check the error message"
                - "Write the rule for which services may be stubbed"
                - "Tag stubbed specs so reports show them separately"
            - name: API-level tests for multi-service flows
              description: |-
                ## Purpose
                Not every full flow needs a browser: an order that moves through payment, fulfilment and notification can be driven through public APIs in a fraction of the time. Building API-level tests for flows with little UI logic gives full-system coverage that runs in seconds and fails with clearer messages.

                ## Milestones
                1. Two or three flows identified where the browser adds little beyond the API.
                2. API tests written that chain real calls across services from start to finish.
                3. Assertions on final state checked through the public API, not the database.
                4. API flows running in the same pipeline job and report as browser flows.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "At least two multi-service flows are covered by API-level tests that run in under a minute each and appear in the main suite report."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick a flow where the UI only submits a form and shows a result"
                - "Write the flow as a chain of real API calls with an HTTP client"
                - "Assert the final order state through the public read endpoint"
                - "Add the API flows to the suite's main report"
            - name: Programmatic login and stored sessions
              description: |-
                ## Purpose
                Logging in through the UI before every test adds ten to twenty seconds per spec and exercises the login page hundreds of times for no extra confidence. Logging in once through the API or a setup project, storing the session, and reusing it keeps one real login test and removes the rest of the cost.

                ## Milestones
                1. One dedicated spec that still logs in through the real UI.
                2. A setup step that authenticates through the API and saves session state per role.
                3. All other specs starting from stored sessions.
                4. The run time saving measured and recorded.

                ## Notes
                Keep stored session files out of version control and out of published artefacts, since they work as live credentials for the test environment.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "All specs except one dedicated login test start from a stored session, and the run time saving is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Time how long UI login takes across the whole suite"
                - "Write a setup step that authenticates through the API for each role"
                - "Switch specs to reuse the stored session for their role"
                - "Add the session files to the ignore list and artefact exclusions"
            - name: Debugging a failure from its trace
              description: |-
                ## Purpose
                Engineers who cannot read a trace file reach for rerun, and a rerun that passes teaches nothing. Practising on three real past failures, stepping through actions, snapshots, console and network in the trace viewer, builds the habit of diagnosing first and rerunning never.

                ## Milestones
                1. Three past failures chosen, each with a trace or video available.
                2. The root cause of each identified from the artefacts alone.
                3. A one-page guide on reading traces added to the suite README.
                4. The guide walked through with at least two colleagues.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three past failures are diagnosed from traces alone, and a trace-reading guide is in the README and has been shown to two colleagues."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Download traces from three recent failed pipeline runs"
                - "Step through each trace and write the root cause in one sentence"
                - "Write a one-page guide to reading traces for the README"
                - "Walk two colleagues through the guide on a real failure"
            - name: Parallel-safe test isolation
              description: |-
                ## Purpose
                Tests that pass in sequence but fail with four workers are sharing something: a user, a cart, a feature flag or a global setting. Learning the isolation rules, one browser context per test, no shared mutable records and no order dependence, is what makes parallel runs possible at all.

                ## Milestones
                1. Each test running in its own browser context with no shared cookies or storage.
                2. Shared mutable records such as carts and settings replaced with per-test data.
                3. The suite passing with tests shuffled and run on four or more workers.
                4. A short isolation checklist added to the review guide.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The full suite passes three times in a row with randomised order on at least four parallel workers."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Run the suite with four workers and list tests that newly fail"
                - "Find the shared record or setting behind each new failure"
                - "Replace shared state with per-test data from the factories"
                - "Add the isolation checklist to the code review guide"
            - name: Sharding the suite across machines
              description: |-
                ## Purpose
                Once a single machine with parallel workers cannot keep the suite inside its budget, splitting it into shards across several pipeline machines is the next step. Done well, with balanced shards and merged reports, it can cut a thirty-minute run to eight without deleting a test.

                ## Milestones
                1. Shard count chosen from the run time budget and per-machine cost.
                2. Shards balanced by historical duration rather than file count.
                3. Reports from all shards merged into one result and one artefact set.
                4. Run time and pipeline cost compared before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The suite runs on balanced shards with one merged report, and the before and after run time and cost are recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Work out the shard count needed to meet the run time budget"
                - "Configure the pipeline to split the suite across that many machines"
                - "Merge shard reports into a single report and artefact set"
                - "Compare run time and pipeline minutes before and after sharding"
            - name: Migrating from Selenium WebDriver to a modern runner
              description: |-
                ## Purpose
                Older WebDriver suites often carry years of explicit waits, custom retry wrappers and driver version pain. Migrating flow by flow to a runner with auto-waiting and built-in tracing usually cuts flakiness sharply, but only if the old and new suites run side by side until the new one has earned trust.

                ## Milestones
                1. A migration order set by flow priority, critical flows first.
                2. Old and new versions of each migrated flow running in parallel for two weeks.
                3. Old specs deleted only after the new ones have matched or beaten their stability.
                4. Custom wait and retry helpers from the old suite retired.

                ## Notes
                Do not translate tests line by line. Rewrite each flow from its user goal, using the new runner's waiting model.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every critical flow runs on the new runner with a lower flake rate than its old version, and the old suite is switched off."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "List the old suite's flows in migration order by priority"
                - "Rewrite the first critical flow in the new runner from its user goal"
                - "Run old and new versions side by side for two weeks and compare flakes"
                - "Delete each old spec once its replacement has matched its stability"
            - name: Visual regression snapshots for key screens
              description: |-
                ## Purpose
                Functional tests pass happily while a layout bug pushes the buy button off screen. Deciding whether to add screenshot comparison, for which screens, at which viewports and with what tolerance, prevents both missed visual bugs and a flood of meaningless pixel diffs.

                ## Milestones
                1. Five to ten screens chosen where a visual break would hurt users.
                2. Dynamic content such as dates, avatars and adverts masked or frozen.
                3. Baselines generated in the same container image the pipeline uses.
                4. A written process for reviewing and approving changed baselines.

                ## Notes
                Generate baselines in the pipeline's own image. Fonts render differently across operating systems, and laptop baselines will fail on every run.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision is recorded on visual testing, and if adopted, at least five screens have stable baselines with a baseline approval process."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose five screens where a layout break would block a purchase or sign-up"
                - "Mask dates, avatars and other dynamic regions in the snapshots"
                - "Generate baselines inside the pipeline container image"
                - "Write how changed baselines are reviewed and approved"
            - name: Retry policy and its limits
              description: |-
                ## Purpose
                Automatic retries hide real intermittent bugs as easily as they hide test flakiness, and some race conditions in tests are race conditions in the product. Agreeing a retry policy, how many, where, and that every retried pass is logged as a flake, keeps retries as a safety net rather than a cover-up.

                ## Milestones
                1. A written retry count for the blocking job, the nightly run and local runs.
                2. Retried passes reported separately from clean passes.
                3. A rule that any test passing only on retry three times in a week goes to triage.
                4. One recent retried failure checked to confirm it was not a product bug.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A retry policy is written and merged into the runner configuration, and retried passes appear separately in every report."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the current retry settings in local and pipeline configuration"
                - "Agree retry counts per run type with the team"
                - "Report retried passes separately from clean passes"
                - "Investigate one recent retried failure as a possible product bug"
            - name: Cross-browser and device coverage matrix
              description: |-
                ## Purpose
                Running every test on every browser and viewport multiplies cost without multiplying confidence. A matrix that runs the full suite on the main browser and a smaller set of flows on the others, chosen from real usage data, keeps coverage honest and the bill sensible.

                ## Milestones
                1. Browser, engine and viewport usage share pulled from analytics.
                2. A matrix that says which flows run on which browser and viewport.
                3. Mobile viewport and touch emulation covering the top mobile flows.
                4. The matrix revisited when usage shifts by more than a few percent.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A coverage matrix based on real usage data is written and implemented, with a review date recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull browser and viewport usage from analytics for the last quarter"
                - "Draft the matrix of flows against browsers and viewports"
                - "Configure runner projects for each browser and viewport in the matrix"
                - "Set a date to revisit the matrix against fresh usage data"
            - name: Root cause study of the ten flakiest tests
              description: |-
                ## Purpose
                Flaky tests cluster around a few causes: timing assumptions, shared data, animations, third-party scripts and genuine product races. Studying the ten flakiest tests together, and classifying each cause, usually shows that two or three fixes to helpers or data remove most of the flakiness at once.

                ## Milestones
                1. The ten flakiest tests taken from the flake rate log.
                2. A root cause written for each, with evidence from traces.
                3. Causes grouped, with the two or three shared ones named.
                4. Fixes for shared causes merged and the flake rate rechecked a month later.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written study classifies the causes of the ten flakiest tests, and the suite flake rate a month after the fixes is lower than before."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Take the ten flakiest tests from the last thirty days of results"
                - "Write a root cause with trace evidence for each test"
                - "Ask the agent to group the written root causes into shared categories"
                - "Recheck the suite flake rate a month after the fixes land"
            - name: API setup for slow UI preconditions
              description: |-
                ## Purpose
                Spending ninety seconds clicking through sign-up, catalogue and checkout just to get an order to cancel is how suites become slow. Moving preconditions to API calls or fixtures, and keeping the browser for the step under test, can halve suite time while each flow is still covered once through the UI.

                ## Milestones
                1. Specs ranked by time spent on setup versus the step being tested.
                2. API or fixture helpers for the most common preconditions.
                3. The top ten setup-heavy specs switched to API setup.
                4. Each precondition flow still covered by at least one full UI test.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ten most setup-heavy specs use API setup, the suite run time saving is recorded, and every precondition flow keeps one UI test."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Measure setup time against tested-step time for each spec"
                - "Write API helpers for the three most repeated preconditions"
                - "Switch the ten most setup-heavy specs to the API helpers"
                - "Confirm each precondition still has one full UI flow test"
            - name: Pre-launch end-to-end sign-off for a major release
              description: |-
                ## Purpose
                A redesign, a new checkout or a platform migration deserves more than the usual merge gate. A dated sign-off, with new flows written before launch, a full run on every supported browser and a named person who signs, gives the release owner evidence rather than reassurance.

                ## Milestones
                1. New and changed flows for the release written and passing two weeks before launch.
                2. A full run on every browser in the coverage matrix against the release candidate.
                3. Open failures listed with an accept, fix or block decision for each.
                4. A signed note from the test owner shared with the release owner.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A sign-off note covering the full browser matrix and every open failure is delivered to the release owner before launch day."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List the flows the release adds or changes with the product owner"
                - "Write the new flow tests two weeks before the launch date"
                - "Run the full matrix against the release candidate build"
                - "Write the sign-off note with a decision on each open failure"
            - name: Flake fix week for the team
              description: |-
                ## Purpose
                Some flakiness is too tangled to fix in the margins of feature work. A focused week, booked in advance, with a ranked list of flaky tests and shared causes, lets a team clear months of accumulated distrust and come out with a measurably quieter pipeline.

                ## Milestones
                1. A week agreed with the manager and product owner at least a month ahead.
                2. A ranked list of flaky tests and shared causes ready on day one.
                3. Each engineer owning a set of tests with a fix or delete decision by the end.
                4. Flake rate measured the week before and the month after.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The fix week happens on its booked dates, and the suite flake rate a month later is recorded alongside the week-before figure."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Propose fix week dates to the manager and product owner"
                - "Prepare the ranked flaky test list for day one"
                - "Split the list between engineers by flow ownership"
                - "Compare the flake rate before the week and one month after"
            - name: Quarterly end-to-end suite health review
              description: |-
                ## Purpose
                Weekly triage handles individual tests, but nobody steps back to ask whether the suite is still shaped right. A quarterly hour looking at coverage against the flow inventory, flake rate, run time and cost, with two or three decisions recorded, keeps the suite pointed at what matters now.

                ## Milestones
                1. Coverage, flake rate, run time and pipeline cost gathered for the quarter.
                2. Uncovered flows from the inventory listed.
                3. Two or three decisions recorded, such as flows to add, prune or move to nightly.
                4. Last quarter's decisions checked for follow-through.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A review note each quarter records coverage, flake rate, run time, cost and two or three decisions with owners."
                cadence: cyclic
              tasks:
                - "Book the quarterly suite health review with the test owners @recurring(quarterly)"
                - "Gather coverage, flake rate, run time and pipeline cost for the quarter"
                - "Record two or three decisions with owners and check last quarter's"
            - name: Test-writing workshop for product engineers
              description: |-
                ## Purpose
                Suites stay healthy when the engineers who change features also change the tests, and that only happens when they know how. A two-hour workshop where product engineers write one real flow test, using the team's selectors, factories and patterns, removes the fear and the bottleneck.

                ## Milestones
                1. A starter exercise prepared on a real but simple flow.
                2. The workshop held with each attendee writing and running one test.
                3. Questions and stumbling points collected and added to the README.
                4. Each attendee's test merged within a week.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A workshop is held, every attendee has a merged flow test within a week, and common questions are added to the README."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick a simple real flow with no test yet for the exercise"
                - "Prepare a starter branch with fixtures and a page model ready"
                - "Run the two-hour workshop with each attendee writing one test"
                - "Add the questions people asked to the suite README"
            - name: Payment sandbox flows before a checkout launch
              description: |-
                ## Purpose
                Checkout is where real money and real trust meet, and payment providers offer sandbox modes and published test cards for exactly this reason. Covering successful payment, declined cards, strong customer authentication challenges and refunds in sandbox before a checkout launch catches the failures customers would otherwise find.

                ## Milestones
                1. The payment provider's sandbox configured in the test environment with test keys only.
                2. Flows covering success, decline, authentication challenge and refund.
                3. Webhook-driven states, such as order confirmed, asserted after payment.
                4. All payment flows passing on the release candidate before launch.

                ## Notes
                Use only the provider's published test card numbers and sandbox keys, kept in the pipeline's secret store. Never run payment flows with live keys.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Success, decline, authentication challenge and refund flows pass in the provider sandbox on the release candidate before checkout launch."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the test environment uses sandbox keys from the secret store"
                - "Look up the provider's published test cards for decline and challenge cases"
                - "Write tests for success, decline, challenge and refund"
                - "Assert the order confirmation state that follows the payment webhook"
            - name: Solo engineer starting end-to-end tests on a young product
              description: |-
                ## Purpose
                Founder-engineers and the only developer on a small team cannot maintain two hundred browser tests alongside everything else. Five to eight flow tests that cover sign-up, the core action and payment, running on every deploy, catch the breakages that lose customers without becoming a second job.

                ## Milestones
                1. Five to eight flows chosen, each one a reason customers pay.
                2. Those flows passing on every deploy in under five minutes.
                3. A rule that a new test is added only after a bug escapes in that flow.
                4. Total weekly upkeep time noted after the first month.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five to eight core flow tests run on every deploy in under five minutes, with weekly upkeep time recorded after one month."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the five actions a paying customer must be able to complete"
                - "Turn each action into one flow test using a generated test account"
                - "Run the flows on every deploy and keep them under five minutes"
                - "Note how long the tests took to look after in the first month"
            - name: Inheriting a failing, abandoned suite
              description: |-
                ## Purpose
                Many engineers join a team to find a suite that has been red for months, skipped in the pipeline and trusted by nobody. Triage first, deciding what to keep, fix or delete, then restoring a small green core, is faster and safer than either ignoring it or rewriting it all at once.

                ## Milestones
                1. Every spec classified as keep and fix, rewrite or delete.
                2. A green core of the most critical flows running in the pipeline again.
                3. Deleted specs listed with reasons so the coverage gap is known.
                4. A dated plan for bringing the rewrite list back.

                ## Notes
                Start from the **Remediation plan** template. Ask the people who wrote the suite, if they are still around, which tests they never trusted.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every inherited spec has a keep, rewrite or delete decision, and a green core of critical flows runs in the pipeline again."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Run the whole inherited suite once and record pass, fail and skip counts"
                - "Classify every spec as keep and fix, rewrite or delete"
                - "Restore the critical flow specs to green and re-enable them in the pipeline"
                - "Write the dated plan for the rewrite list"
            - name: Product teams owning their own flow tests
              description: |-
                ## Purpose
                When one test specialist owns every end-to-end test, that person becomes the bottleneck for every release. Moving ownership to the product teams that change the features, with the specialist as coach and guardian of patterns, spreads the load and puts fixes in the hands of the people who broke things.

                ## Milestones
                1. A working agreement: changing a flow means updating its test in the same pull request.
                2. Each product team owning the specs for its flows, recorded in the ownership map.
                3. The specialist reviewing patterns and helpers rather than writing every test.
                4. Time from a flow change to an updated test measured over a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Product teams update flow tests in the same pull request as feature changes for a full quarter, confirmed by a review of merged changes."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draft the working agreement on updating tests with feature changes"
                - "Agree the agreement with each product team lead"
                - "Add a pull request template line asking whether flows changed"
                - "Sample merged feature changes for missing test updates @recurring(monthly:21)"
            - name: Turning manual regression scripts into automated flows
              description: |-
                ## Purpose
                Testers and QA analysts who run a forty-page manual regression before each release hold the best map of what users really do. Converting those scripts into automated flows, starting with the most repeated and most tedious, frees their time for exploratory testing that automation cannot do.

                ## Milestones
                1. Manual scripts ranked by frequency of run and time taken.
                2. The top ten converted to automated flows with the same expected results.
                3. Manual steps that cannot be automated kept in a short residual checklist.
                4. Manual regression time per release measured before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The ten most run manual scripts are automated, and manual regression time per release is shown to have dropped."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Collect every manual regression script with its run time"
                - "Rank scripts by how often they are run and how long they take"
                - "Automate the top ten, keeping each script's expected results"
                - "Measure manual regression time on the next two releases"
            - name: End-to-end runs on per-change preview environments
              description: |-
                ## Purpose
                If end-to-end tests only run after merge, broken flows land on the main branch before anyone notices. Running a fast subset against a preview environment built for each pull request moves the feedback to where the change is still cheap to fix.

                ## Milestones
                1. Preview environments available for each pull request with seeded data.
                2. A fast subset of flows running against each preview in under ten minutes.
                3. Results posted on the pull request with links to artefacts.
                4. Preview environments torn down after merge to control cost.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each pull request gets a preview environment with a flow subset run under ten minutes and results posted on the pull request."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Check whether the platform can create a preview environment per pull request"
                - "Seed each preview with the reference data the flows need"
                - "Run the fast flow subset against the preview and post results"
                - "Confirm previews are destroyed after merge"
            - name: Role and tenant flows for a multi-tenant product
              description: |-
                ## Purpose
                In business software, the same screen behaves differently for an admin, a member and a read-only guest, and data must never leak between customer accounts. Flow tests that run the key flows per role and check that one tenant cannot see another's records catch the bugs with the highest cost.

                ## Milestones
                1. A matrix of roles against critical flows with the expected outcome for each.
                2. Stored sessions or factories for each role in two separate test tenants.
                3. Negative tests confirming forbidden actions are blocked in the UI and the API.
                4. Cross-tenant access tests on the most sensitive records.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every role in the matrix has passing flow tests, including negative tests, and cross-tenant access is tested on the most sensitive records."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Draw the matrix of roles against critical flows and expected outcomes"
                - "Create two test tenants with a user for each role"
                - "Write negative tests for actions each role must not perform"
                - "Test that one tenant cannot open the other tenant's records by URL"
            - name: Email, SMS and one-time code flows
              description: |-
                ## Purpose
                Sign-up confirmation, password reset and two-factor codes are critical flows that leave the browser, which is why so many suites skip them. Using a test inbox service or a capture server in the test environment lets the suite read the message, follow the link or enter the code like a real user.

                ## Milestones
                1. A test mail and SMS capture set up for the test environment only.
                2. Password reset tested end to end, including following the emailed link.
                3. One-time code entry tested for sign-in with two-factor authentication.
                4. Message content checked for the right link, name and expiry wording.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Password reset and two-factor sign-in flows run end to end through captured email and SMS in the test environment."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose a capture server or test inbox service for the test environment"
                - "Route test environment email and SMS to the capture service"
                - "Write the password reset flow that follows the emailed link"
                - "Write the two-factor sign-in flow that reads the captured code"
            - name: Accessibility checks inside flow tests
              description: |-
                ## Purpose
                Automated accessibility scanners catch only part of the problems, but running one on each screen a flow already visits costs almost nothing. Adding scans at key steps, and keyboard-only runs of the most important flows, stops regressions such as missing labels and unreachable buttons from shipping unnoticed.

                ## Milestones
                1. An accessibility scanning library added to the suite.
                2. Scans run at key steps of the critical flows with known issues baselined.
                3. Keyboard-only versions of sign-up and checkout passing.
                4. New serious violations failing the build.

                ## Notes
                Automated scans complement, not replace, testing with assistive technology and disabled users.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Critical flows run accessibility scans that fail on new serious violations, and keyboard-only sign-up and checkout pass."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Add an accessibility scanning library to the test dependencies"
                - "Scan each screen in the sign-up and checkout flows"
                - "Baseline existing issues and fail only on new serious ones"
                - "Write keyboard-only versions of sign-up and checkout"
                - "Review the baselined accessibility issues for any that can now be fixed @recurring(monthly:5)"
            - name: Synthetic flows against production
              description: |-
                ## Purpose
                Some failures only exist in production: a misconfigured CDN, an expired certificate or a third-party outage. Running two or three safe, read-mostly flows against production every few minutes, using dedicated synthetic accounts, finds them before customers do and reuses code the team already maintains.

                ## Milestones
                1. Two or three production-safe flows chosen and agreed with the service owners.
                2. Dedicated synthetic accounts flagged so they are excluded from analytics and billing.
                3. Flows scheduled from more than one region with alerts on repeated failure.
                4. A runbook entry for what to check when a synthetic flow fails.

                ## Notes
                Alert on two or three consecutive failures, not one, or the synthetic checks become a new source of noise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two or more production-safe synthetic flows run on a schedule from multiple regions, with alerts and a runbook entry in place."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree with service owners which flows are safe to run in production"
                - "Create synthetic accounts flagged out of analytics and billing"
                - "Schedule the flows from two regions with alerting on repeat failures"
                - "Write the runbook entry for a failed synthetic flow"
                - "Review synthetic flow failure history for noise @recurring(monthly:15)"
            - name: Third-party widgets, OAuth and file transfer edge cases
              description: |-
                ## Purpose
                Embedded payment iframes, sign-in with an external identity provider, file uploads and downloads are where end-to-end tests most often get skipped as too hard. Learning the framework's handling of frames, popups and file events, and deciding where to use the provider's test tenant, closes the gaps that are most likely to break silently.

                ## Milestones
                1. Iframe interaction demonstrated on one embedded widget.
                2. External sign-in tested against the identity provider's development tenant, or deliberately stubbed with the decision recorded.
                3. File upload and download flows asserting on file name, size and content.
                4. Each approach written up in the suite README.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Iframe, external sign-in and file transfer flows are each covered or deliberately stubbed, with the approach documented in the README."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a test that fills a field inside an embedded iframe"
                - "Decide whether external sign-in uses a development tenant or a stub"
                - "Test an upload and a download, asserting on the downloaded file"
                - "Write up each technique in the suite README"
            - name: Test impact selection for faster feedback
              description: |-
                ## Purpose
                On large products, running every flow for a change to one settings screen wastes time and pipeline minutes. Mapping flows to the code areas they exercise, and running only the affected subset on pull requests while the nightly run keeps full coverage, cuts feedback time without blind spots.

                ## Milestones
                1. Each flow tagged with the code areas or services it depends on.
                2. Pull request runs selecting flows from the changed paths.
                3. A safety rule that runs the full suite when shared code or configuration changes.
                4. Escaped failures tracked to confirm selection is not missing regressions.

                ## Notes
                Start with coarse mapping by folder or service. Coverage-based selection is precise but costly to maintain; earn it only if coarse mapping proves too blunt.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Pull request runs select flows by changed paths, the nightly runs everything, and no regression escaped selection over a month of tracking."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Tag each flow with the services or folders it depends on"
                - "Select flows from changed paths in pull request runs"
                - "Force a full run when shared code or configuration changes"
                - "Log any failure the nightly caught that selection skipped"
            - name: Mutation checks on the flow suite
              description: |-
                ## Purpose
                Green suites can still prove little if their assertions are weak, checking that a page loaded rather than that the order total is right. Deliberately breaking the product in controlled ways, such as changing a price calculation or hiding a confirmation, and seeing which tests catch it, measures what the suite really protects.

                ## Milestones
                1. Eight to ten deliberate faults planted on a branch, one per critical flow.
                2. Each fault recorded as caught or missed by the suite.
                3. Weak assertions strengthened for every missed fault.
                4. The exercise repeated after six months with fresh faults.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A record shows which of eight or more planted faults the suite caught, and every missed fault has a strengthened assertion merged."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Plant one realistic fault per critical flow on a throwaway branch"
                - "Run the suite and record which faults were caught"
                - "Strengthen the assertions that let a fault through"
                - "Book a repeat of the exercise in six months"
            - name: End-to-end testing cost and value review
              description: |-
                ## Purpose
                Browser suites consume pipeline minutes, test environment hosting, third-party test services and engineer time, and the total is rarely added up. Comparing that cost with the incidents and escaped bugs the suite caught gives an evidence-based answer when someone asks whether to invest more or cut back.

                ## Milestones
                1. Annual cost added up: pipeline minutes, environments, services and estimated upkeep hours.
                2. Bugs caught by the suite before release counted from tickets and pipeline history.
                3. Escaped bugs in covered flows listed.
                4. A short recommendation written to invest, hold or cut, with reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page review sets annual suite cost beside bugs caught and escaped, ending in a recorded invest, hold or cut decision."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Add up last year's pipeline minutes and environment costs for the suite"
                - "Count bugs the suite caught before release from ticket history"
                - "List escaped bugs that hit flows the suite covers"
                - "Write the invest, hold or cut recommendation and share it @recurring(yearly)"
---

# End-to-End Test Suites

End-to-end tests are the slowest, most expensive and most convincing tests you own: one green run says a real person can sign up, pay and get what they came for. This area is for engineers and teams who write and keep those browser and API flows, starting with foundations (which flows matter, which framework, test data and selectors), then the operating machinery that keeps the suite trusted, the skills that make tests stable, decisions about speed and coverage, dated release moments, situations such as inheriting a broken suite, and specialist work like email codes, synthetic checks and test impact selection.

The rhythm is weekly flake triage, a nightly full regression, a monthly look at run time, ownership and pruning, and a quarterly review of runner and browser versions. The **Metrics log** template suits the flake rate record, the **Operational checklist** template suits the release-gate smoke pack, and the **Remediation plan** template suits a suite you have inherited in poor shape. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
