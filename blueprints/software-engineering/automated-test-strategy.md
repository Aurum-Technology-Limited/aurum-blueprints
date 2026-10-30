---
id: software-engineering.automated-test-strategy
name: Automated Test Strategy
description: "A written test strategy for your codebase: what to test at unit, integration and end-to-end level, fast feedback loops, coverage that means something, and the reviews that keep the suite trusted."
category: business
version: 1.0.0
tags: [software-engineering, automated-test-strategy, engineer, team, test-pyramid, unit-testing, integration-testing, test-coverage]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - remediation-plan
    - skills-matrix
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Automated Test Strategy
          description: "Deciding what to test at which level, from unit to integration to end-to-end, so the test suite gives confidence without slowing everyone down."
          projects:
            - name: Test suite inventory by level and runtime
              description: |-
                ## Purpose
                Before anyone argues about the test pyramid, it helps to know the shape you actually have. Counting tests by level, measuring how long each level takes and noting which folders have none turns a vague feeling that the suite is slow or thin into numbers a team can plan against.

                ## Milestones
                1. Every test file in the main repository tagged as unit, integration or end-to-end.
                2. A count of tests and total runtime for each level, measured on a clean run.
                3. A list of production modules with no tests at all.
                4. The inventory saved in the repository where the team can find it.

                ## Notes
                Classify by what the test touches (memory only, a real database or network, a deployed system), not by the folder it happens to live in.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A saved inventory shows test count and runtime per level and lists every production module without tests."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Run the full suite once with timing output switched on and save the report"
                - "Tag each test folder as unit, integration or end-to-end in a spreadsheet"
                - "List production modules that no test file imports"
                - "Commit the inventory as a short document in the docs folder"
            - name: Testing strategy one-pager for the codebase
              description: |-
                ## Purpose
                Most teams test by habit, so each engineer brings the approach of their last job and the suite ends up with three styles and no agreement. A single page that says what each level is for, what must be covered before merge and what is deliberately left untested gives reviewers something to point at and new joiners something to read on day one.

                ## Milestones
                1. A draft strategy of one page covering purpose of each level, merge expectations and known exclusions.
                2. Comments gathered from at least three engineers who work in the codebase.
                3. The agreed version merged into the repository next to the README.
                4. A link to the strategy added to the pull request template.

                ## Notes
                Keep it to one page. A strategy nobody reads in five minutes will not be followed in review.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page testing strategy is merged into the repository and linked from the pull request template."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write three sentences on what unit, integration and end-to-end tests are each for here"
                - "Ask the agent to turn your notes and the suite inventory into a first one-page draft"
                - "Circulate the draft to three engineers and collect comments within a week"
                - "Merge the strategy and link it from the pull request template"
            - name: Risk map of the code that must not break
              description: |-
                ## Purpose
                Not every line deserves the same testing effort: a typo in an admin label costs nothing, a rounding error in billing costs money and trust. Mapping the flows where failure is expensive (payments, permissions, data loss, anything regulated) tells the team where thorough testing pays and where a lighter touch is fine.

                ## Milestones
                1. A list of the ten to fifteen flows where a defect would cost money, data or trust.
                2. Each flow scored for impact and likelihood of change.
                3. Current test coverage noted against every high-impact flow.
                4. The top three under-tested high-impact flows chosen for work first.

                ## Notes
                Start from the **Risk register** template. Ask support and product for the incidents customers remember; they are rarely the ones engineers expect.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk register lists at least ten flows with impact scores, current coverage and three named flows chosen for first work."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the flows where a bug would lose money, data or customer trust"
                - "Ask support which customer-facing failures came up most in the past year"
                - "Score each flow for impact and how often its code changes"
                - "Pick the three high-impact flows with the weakest tests"
            - name: Agreed definitions of unit, integration and end-to-end
              description: |-
                ## Purpose
                Teams lose hours arguing past each other because one engineer's integration test is another's unit test with a real database. Writing down, with an example from your own codebase, what counts at each level and what each is allowed to touch ends those arguments and makes the inventory and runtime budgets meaningful.

                ## Milestones
                1. A definition for each level stating what it may touch: memory, local process, real dependencies or a deployed system.
                2. One real test from the codebase linked as the example for each level.
                3. A naming or tagging rule so tooling can run each level on its own.
                4. The definitions added to the testing strategy page.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written definitions for each test level, each with a linked example test and a tagging rule, are part of the strategy page."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick one existing test you would call a clear example of each level"
                - "Write what each level may and may not touch in one sentence each"
                - "Agree a tag or file suffix that lets the runner select each level"
                - "Add the definitions and examples to the strategy page"
            - name: Test runner and framework choice per language
              description: |-
                ## Purpose
                Repositories that grew by accretion often run two or three test runners for the same language, each with its own assertion style and configuration. Choosing one runner and one assertion library per language, with a short reason, cuts configuration, makes tests readable to everyone and gives tooling one target.

                ## Milestones
                1. Every runner, assertion library and mocking library in use listed per language.
                2. Two candidates per language compared on speed, watch mode, parallel runs and editor support.
                3. One choice per language recorded with its reasons.
                4. A plan for moving or freezing tests on the runners not chosen.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names one test runner and assertion library per language, with reasons and a plan for the rest."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every test runner and mocking library in the dependency files"
                - "Time the same small suite on the two strongest candidates"
                - "Record the chosen runner per language and the reason in two sentences"
                - "Decide whether old tests move now or stay frozen until touched"
            - name: Test folder layout and naming conventions
              description: |-
                ## Purpose
                Where tests live and what they are called decides whether an engineer can find the test for a file in five seconds or five minutes. A convention for location, file names and test names, applied to new code first, makes the suite navigable and lets tooling select tests by level.

                ## Milestones
                1. A rule for where tests sit: beside the code or in a mirrored test tree.
                2. A file naming pattern that encodes the test level.
                3. A test name style that reads as a sentence about behaviour.
                4. Two existing modules moved to the convention as worked examples.

                ## Notes
                Test names like "returns zero when the basket is empty" survive refactors; names like "test calculate 2" do not.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written layout and naming convention exists and two modules have been moved to it as examples."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose between colocated tests and a mirrored test directory"
                - "Write the file name pattern that marks unit and integration tests"
                - "Rename the tests in one small module to behaviour-style names"
                - "Add the conventions to the strategy page with before and after examples"
            - name: Fast local test loop under ten seconds
              description: |-
                ## Purpose
                Engineers who wait a minute for feedback stop running tests while they work and start relying on the pipeline, which turns every small mistake into a twenty-minute round trip. Getting the unit tests for the file you are editing to rerun on save in under ten seconds changes how often people test, which matters more than any coverage target.

                ## Milestones
                1. Watch mode working for the main language, rerunning only tests related to changed files.
                2. Time from save to result measured on a typical module and under ten seconds.
                3. Slow set-up such as database or network calls removed from the unit level.
                4. A one-line command for the fast loop documented in the README.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Saving a file reruns its related unit tests in under ten seconds, measured on a typical module, with the command in the README."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Time how long the unit tests for one module take to rerun after a save"
                - "Turn on the runner's watch mode with changed-file selection"
                - "Move any unit test that opens a socket or database into the integration level"
                - "Document the fast loop command at the top of the README"
            - name: Pre-merge test gate by level
              description: |-
                ## Purpose
                Running everything on every change is slow, and running too little lets regressions through. Deciding which levels must pass before merge, which run after merge and which run nightly is a strategy call that should be written down, not left to whoever last edited the pipeline file.

                ## Milestones
                1. Each test level assigned to pre-merge, post-merge or scheduled runs, with a reason.
                2. A target time for the pre-merge gate agreed, for example under fifteen minutes.
                3. The assignment applied by whoever owns the pipeline.
                4. The gate rules written into the strategy page.

                ## Notes
                This project decides what the gate checks. Building and speeding up the pipeline itself belongs with your continuous integration work.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written gate policy assigns every test level to pre-merge, post-merge or scheduled runs and the pipeline matches it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what currently runs before merge and how long it takes"
                - "Propose which levels must pass before merge and which can wait"
                - "Agree the pre-merge time target with the team"
                - "Ask the pipeline owner to apply the agreed assignment"
            - name: Baseline suite health numbers
              description: |-
                ## Purpose
                Without a starting point, nobody can say whether a year of testing work helped. Recording five numbers today (test count per level, total runtime, pre-merge time, skipped tests and changed-line coverage) gives every later review something to compare against.

                ## Milestones
                1. A metrics log created with five suite health measures defined.
                2. Today's value recorded for each measure with the date and commit.
                3. The method for collecting each number written beside it so others can repeat it.
                4. The log linked from the strategy page.

                ## Notes
                Start from the **Metrics log** template. Pick numbers you can collect in ten minutes, or nobody will collect them again.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A metrics log holds dated baseline values for five suite health measures, each with a written collection method."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a metrics log with the five suite health measures as columns"
                - "Record today's value for each measure with the commit hash"
                - "Write the command or report used to get each number"
                - "Link the log from the testing strategy page"
            - name: Regression test with every bug fix
              description: |-
                ## Purpose
                Every bug that reaches users is proof of a missing test, and fixing it without one invites the same bug back after the next refactor. A team rule that a fix arrives with a test that fails before the change and passes after it is the cheapest way to grow a suite in the places that actually break.

                ## Milestones
                1. The rule written into the strategy page and the pull request template.
                2. Reviewers asking for the failing test on bug fix pull requests.
                3. A weekly check that recent fixes carried a regression test.
                4. Exceptions recorded with a reason when a test truly is not practical.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of bug fix pull requests show a regression test on at least nine in ten, with exceptions explained."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add a bug fix checkbox for a failing regression test to the pull request template"
                - "Explain the rule and its reason at the next team meeting"
                - "Check that last week's merged bug fixes each carried a regression test @recurring(weekly:mon)"
            - name: Monthly suite health review
              description: |-
                ## Purpose
                Suites decay quietly: runtime creeps up a few seconds a week, skipped tests accumulate, and coverage of new code slips without anyone deciding it should. Half an hour a month looking at the same five numbers catches the drift while it is still cheap to fix.

                ## Milestones
                1. The five baseline numbers updated in the metrics log each month.
                2. Any measure that moved more than ten percent explained in a sentence.
                3. One action chosen each month and given an owner.
                4. Last month's action checked off or carried forward with a reason.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The metrics log shows a monthly entry for at least six consecutive months, each with one owned action."
                cadence: rolling
              tasks:
                - "Update the five suite health numbers in the metrics log @recurring(monthly:9)"
                - "Write one sentence explaining any measure that moved more than ten percent"
                - "Pick one action for the month and name its owner"
                - "Check last month's action and close it or carry it forward"
            - name: Slowest tests sweep
              description: |-
                ## Purpose
                Usually a handful of tests account for most of the runtime: a sleep left in from debugging, a fixture that rebuilds the database, an integration test pretending to be a unit test. Sorting by duration once a month and fixing the worst few keeps the suite fast without a big rewrite project.

                ## Milestones
                1. A report of the twenty slowest tests generated from the runner.
                2. The cause of the top five written down: sleeps, set-up, wrong level or real work.
                3. At least two slow tests fixed, moved to the right level or deleted each month.
                4. Runtime saved recorded in the metrics log.

                ## Notes
                Fixed sleeps are the usual culprit. Replace them with waiting on a condition, or remove the asynchrony from the test.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each monthly sweep fixes or relocates at least two of the twenty slowest tests and logs the runtime saved."
                cadence: rolling
              tasks:
                - "Generate the list of the twenty slowest tests from the runner report @recurring(monthly:23)"
                - "Note why each of the top five is slow"
                - "Fix, move or delete two of them and open a pull request"
                - "Record the seconds saved in the metrics log"
            - name: Coverage review of changed code
              description: |-
                ## Purpose
                Line coverage across the whole repository says little, because old untested code and generated files drown the signal. Coverage of the lines changed in recent pull requests shows whether new work is being tested, which is the number a team can actually influence this month.

                ## Milestones
                1. Changed-line coverage reported on pull requests by the existing tooling.
                2. A monthly figure for changed-line coverage recorded in the metrics log.
                3. Pull requests with untested changes to high-risk flows listed and followed up.
                4. Generated code and pure configuration excluded from the measure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly changed-line coverage figure is logged and every untested change to a high-risk flow has a follow-up ticket."
                cadence: rolling
              tasks:
                - "Configure the coverage report to exclude generated and vendored files"
                - "Record last month's changed-line coverage in the metrics log @recurring(monthly:12)"
                - "List merged changes to high-risk flows that arrived without tests"
                - "Open a follow-up ticket for each untested high-risk change"
            - name: Test checklist for pull request reviewers
              description: |-
                ## Purpose
                Reviewers often skim the tests after reading the code, so tests that assert nothing, mock the thing under test or only cover the happy path slip through. A short checklist of five test questions makes the review of tests as deliberate as the review of code.

                ## Milestones
                1. A checklist of five questions about tests agreed, for example: does it fail without the change?
                2. The checklist linked from the pull request template.
                3. A weekly sample of one merged pull request checked against it.
                4. Common misses from the samples fed back to the team monthly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A five-question test checklist is linked from the pull request template and at least eight weekly samples have been checked against it."
                cadence: rolling
              tasks:
                - "Draft five questions a reviewer should ask about the tests in a pull request"
                - "Link the checklist from the pull request template"
                - "Check one merged pull request's tests against the checklist @recurring(weekly:fri)"
                - "Share the most common miss with the team at the end of the month"
            - name: Skipped and disabled test audit
              description: |-
                ## Purpose
                Skipped tests are often decisions nobody remembers making: one was turned off during an outage two years ago and the behaviour it guarded has been untested since. Listing every skip each month and either fixing, deleting or dating it stops the suite from quietly shrinking.

                ## Milestones
                1. A list of every skipped, ignored or commented-out test with its file and age.
                2. Each skip given an owner and a reason, or deleted.
                3. A rule that new skips must carry a ticket reference and an expiry date.
                4. The skip count tracked in the metrics log and falling.

                ## Notes
                Intermittently failing end-to-end tests belong with that suite's own quarantine process. This audit is about tests switched off and forgotten.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No skipped test is older than ninety days without an owner and ticket, and the skip count is lower after three months."
                cadence: rolling
              tasks:
                - "Search the codebase for skip and ignore markers and list them with dates @recurring(monthly:27)"
                - "Assign each skipped test an owner or delete it"
                - "Add the ticket and expiry rule for new skips to the strategy page"
                - "Record the skip count in the metrics log"
            - name: Test data and fixture upkeep
              description: |-
                ## Purpose
                Fixtures copied from production two years ago drift away from the real schema, so tests pass against data shapes that no longer exist. Reviewing shared fixtures each quarter, removing unused ones and checking they still match current models keeps tests honest about the data they run on.

                ## Milestones
                1. Every shared fixture file listed with the tests that use it.
                2. Unused fixtures deleted.
                3. Remaining fixtures checked against the current schema and updated.
                4. No fixture containing real customer data left in the repository.

                ## Notes
                If a fixture holds anything copied from production, replace it with generated data before anything else. Real personal data has no place in a test repository.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, unused fixtures are deleted, the rest match the current schema, and none contains real customer data."
                cadence: rolling
              tasks:
                - "List shared fixture files and the tests that load each one"
                - "Delete fixtures no test loads and check the rest against the schema @recurring(quarterly)"
                - "Search fixtures for real email addresses, names or account numbers"
                - "Replace any production-derived data with generated values"
            - name: Quarterly test strategy review with the team
              description: |-
                ## Purpose
                Strategies written once go stale as the architecture changes: a new service, a new database, a move to event-driven code. A one-hour review each quarter, using the metrics log and the escaped defect list, keeps the one-pager matching how the system is really built.

                ## Milestones
                1. A quarterly hour booked with the engineers who own the suite.
                2. The metrics trend and escaped defects reviewed together.
                3. Up to three changes to the strategy page agreed and merged.
                4. A yearly rewrite of the strategy from scratch to clear accumulated exceptions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews in a year each produce a dated change or a recorded decision that no change is needed."
                cadence: cyclic
              tasks:
                - "Book a one-hour test strategy review with the suite owners @recurring(quarterly)"
                - "Bring the metrics log and the escaped defect list to the review"
                - "Merge the agreed changes to the strategy page within a week"
                - "Rewrite the strategy page from a blank page once a year @recurring(yearly)"
            - name: Escaped defect review by test level
              description: |-
                ## Purpose
                Bugs found by users are the clearest signal of where the strategy has holes. Asking, for each escaped defect, which test level should have caught it and why it did not shows whether the gap is in unit logic, integration with real dependencies or untested user flows.

                ## Milestones
                1. Each month's production bugs listed with the level that should have caught them.
                2. A reason recorded for each miss: no test, wrong assertion, mocked away or untestable design.
                3. A pattern across three months written up, for example most misses at service boundaries.
                4. One strategy change made in response to the pattern.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of escaped defects are classified by expected level and reason, with one strategy change made in response."
                cadence: rolling
              tasks:
                - "List last month's production bugs with the level that should have caught each @recurring(monthly:4)"
                - "Record why each bug got past the existing tests"
                - "Look for a pattern across the last three months of misses"
                - "Propose one strategy change at the quarterly review"
            - name: Untested module backlog
              description: |-
                ## Purpose
                Untested code that never changes is a low priority; untested code that changes every week is where regressions come from. Keeping a ranked list of untested modules by change frequency and risk, and adding tests to one each month, steadily closes the gaps that matter.

                ## Milestones
                1. Untested modules listed with their commit count over the past six months.
                2. The list ranked by change frequency multiplied by risk.
                3. One module from the top of the list given tests each month.
                4. The list refreshed as modules gain tests or stop changing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ranked backlog of untested modules exists and at least one module from its top five gains tests each month."
                cadence: rolling
              tasks:
                - "Count commits per untested module over the past six months from version control"
                - "Rank the untested modules by change frequency and risk"
                - "Pick the top module and open a ticket to add tests @recurring(monthly:20)"
                - "Remove modules from the list once they have meaningful tests"
            - name: Unit tests that check behaviour, not implementation
              description: |-
                ## Purpose
                Tests that assert which private methods were called break on every refactor, so engineers learn to fear changing code the tests were meant to protect. Learning to test through the public interface, asserting outcomes rather than steps, gives a suite that supports refactoring instead of resisting it.

                ## Milestones
                1. Three tests in the codebase identified that break on harmless refactors.
                2. Those tests rewritten to assert outputs and observable effects only.
                3. A refactor of the code under test completed without touching the rewritten tests.
                4. A before and after example added to the strategy page.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three implementation-coupled tests are rewritten and survive a refactor of the code they cover without edits."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find a test that failed in a recent refactor even though behaviour did not change"
                - "Rewrite it to assert only the return value and visible side effects"
                - "Refactor the code under test and confirm the test still passes unchanged"
                - "Add the before and after pair to the strategy page"
            - name: Test doubles, from stubs and mocks to fakes
              description: |-
                ## Purpose
                Mocking everything makes tests fast and meaningless; mocking nothing makes them slow and fragile. Knowing the difference between a stub that returns canned data, a mock that verifies a call and a fake that behaves like a lightweight real thing lets engineers pick the right tool for each boundary.

                ## Milestones
                1. One example of a stub, a mock and a fake written in your own codebase.
                2. A rule of thumb agreed: mock only what you own at the edges, prefer fakes for stateful dependencies.
                3. Tests that mock the unit under test itself found and fixed.
                4. The guidance added to the strategy page.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written guidance on stubs, mocks and fakes, with one example of each from the codebase, is on the strategy page."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a short guide on the difference between stubs, mocks and fakes"
                - "Write an in-memory fake for one repository or client interface"
                - "Search for tests that mock the class they are supposed to be testing"
                - "Add a one-paragraph rule of thumb on test doubles to the strategy page"
            - name: Test-driven development on real tickets
              description: |-
                ## Purpose
                Test-driven development is easy to dismiss after one kata and hard to judge without trying it on real work. Using it on one ticket a week for a couple of months, and noting what changed in the design and the bug count, gives an honest view of where it helps in your codebase and where it does not.

                ## Milestones
                1. Three small katas completed to learn the red, green, refactor rhythm.
                2. One real ticket a week built test first for eight weeks.
                3. Notes kept on design changes, time taken and bugs found later.
                4. A written view on which kinds of work suit test-first here.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight tickets are built test first with notes kept, and a written view on where test-first suits this codebase is shared."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Complete one short kata using strict red, green, refactor steps"
                - "Choose this week's ticket to build test first and note the start time @recurring(weekly:tue)"
                - "Write two lines after each ticket on what changed in the design"
                - "Share a short write-up of where test-first helped after eight weeks"
            - name: Property-based testing for core logic
              description: |-
                ## Purpose
                Example-based tests only check the cases someone thought of, and bugs live in the cases nobody did: empty lists, huge numbers, unusual Unicode, values that round badly. Property-based tests generate hundreds of inputs and check a rule that must always hold, which finds edge cases in parsing, money and date logic that examples miss.

                ## Milestones
                1. A property-based testing library added for the main language.
                2. Three properties written for a core function, such as round trips or invariants.
                3. At least one real edge case found and fixed, or confidence recorded that none exist.
                4. Shrunk failing examples kept as regular regression tests.

                ## Notes
                Good first properties: encode then decode returns the original, sorting twice equals sorting once, totals never go negative.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three property-based tests cover a core function and any failing case found is kept as a regression test."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Install the property-based testing library for your main language"
                - "Write a round-trip property for one serialiser or parser"
                - "Write an invariant property for one calculation such as totals or dates"
                - "Turn any shrunk failing input into a named example test"
            - name: Integration tests against real databases in containers
              description: |-
                ## Purpose
                Tests that replace the database with a mock pass happily while the real query fails on a missing index, a case-sensitive collation or a constraint. Running integration tests against a throwaway container of the same database engine and version as production catches those failures before release.

                ## Milestones
                1. A disposable database container started by the test run, same engine and version as production.
                2. Migrations applied to it at the start of the run.
                3. Each test isolated by transaction rollback or a fresh schema.
                4. Five data access tests moved from mocks to the real engine.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Integration tests run against a containerised database matching production's engine and version, with five data access tests moved onto it."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check which database engine and version production runs"
                - "Add a test helper that starts a disposable container of that version"
                - "Apply migrations at start-up and roll back each test's transaction"
                - "Move five data access tests from mocks to the real container"
            - name: Consumer-driven contract tests between services
              description: |-
                ## Purpose
                Contract tests let each service check, in its own pipeline, that it still speaks the language its neighbours expect, without spinning up the whole system. For teams with several services or a mobile client, they replace slow cross-service end-to-end runs with fast checks that fail on the provider's side the moment a change would break a consumer.

                ## Milestones
                1. One consumer and provider pair chosen with a history of breaking changes.
                2. Consumer tests written that record the requests and responses it relies on.
                3. The provider verifying those contracts in its own test run.
                4. A breaking change attempted on purpose and caught by the provider check.

                ## Notes
                Contract tests check shape and meaning at the boundary. They do not replace a few end-to-end checks of the most valuable user flows.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One consumer and provider pair exchange verified contracts and a deliberate breaking change fails the provider's test run."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick the service pair that broke each other most often last year"
                - "Write consumer tests that record the fields the consumer actually reads"
                - "Add contract verification to the provider's test run"
                - "Rename a field on a branch and confirm the provider check fails"
            - name: Mutation testing to measure test quality
              description: |-
                ## Purpose
                Coverage shows which lines ran, not whether any assertion would notice if they were wrong. Mutation testing changes the code in small ways and checks the tests fail; the mutants that survive point straight at weak assertions in the modules you care about most.

                ## Milestones
                1. A mutation testing tool run against one high-risk module.
                2. Surviving mutants reviewed and sorted into real gaps and equivalent mutants.
                3. Tests strengthened until the mutation score of that module rises noticeably.
                4. A monthly run scheduled on the highest-risk module only.

                ## Notes
                Run it on one module, not the whole repository. Full runs are slow and the noise drowns the useful findings.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One high-risk module has a recorded mutation score before and after test improvements, with a monthly run in place."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Install a mutation testing tool and run it on one high-risk module"
                - "Review the ten surviving mutants that look most like real bugs"
                - "Add or tighten assertions until those mutants are killed"
                - "Rerun mutation testing on the highest-risk module and log the score @recurring(monthly:15)"
            - name: Snapshot and approval tests used sparingly
              description: |-
                ## Purpose
                Snapshot tests are quick to write and quick to approve without reading, so a large snapshot change often gets accepted with a bug inside it. Learning where approval tests shine (complex report output, legacy code characterisation) and where they hide problems keeps them useful rather than noise.

                ## Milestones
                1. Every snapshot test listed with the size of its stored output.
                2. Snapshots over a size limit replaced with targeted assertions.
                3. A rule agreed for when snapshot tests are acceptable.
                4. Reviewers asked to read snapshot diffs, not just approve them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A written rule for snapshot tests exists and every snapshot over the agreed size has been replaced or justified."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List snapshot files and sort them by size"
                - "Replace the three largest snapshots with assertions on what matters"
                - "Write a two-sentence rule for when snapshots are acceptable"
                - "Add a reviewer note about reading snapshot diffs to the checklist"
            - name: Testing asynchronous and time-dependent code
              description: |-
                ## Purpose
                Code that schedules jobs, retries with backoff or expires sessions is hard to test with the real clock, so tests either sleep for seconds or skip the logic entirely. Injecting a controllable clock and running async work to completion in tests makes this logic fast and checkable.

                ## Milestones
                1. Direct calls to the system clock in business logic replaced with an injected clock.
                2. A fake clock used to test one expiry or retry rule without waiting.
                3. Async work in unit tests awaited explicitly rather than with sleeps.
                4. A worked example added to the strategy page.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One expiry or retry rule is tested with a fake clock in under a second, with no sleeps in the test."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Search business logic for direct calls to the current time"
                - "Introduce a clock interface in one module and pass it in"
                - "Test one expiry rule by advancing the fake clock"
                - "Replace one sleep in an async test with an explicit await"
            - name: Rebalancing an inverted test pyramid
              description: |-
                ## Purpose
                Many suites grow top heavy: hundreds of slow end-to-end tests and few unit tests, because the first tests were written by clicking through the app. Pushing checks down to the lowest level that can catch the bug cuts runtime and makes failures point at the cause instead of a page that did not load.

                ## Milestones
                1. The twenty slowest high-level tests mapped to the logic they really check.
                2. Equivalent unit or integration tests written for at least ten of them.
                3. The redundant high-level tests deleted, keeping only those that prove a user flow works.
                4. Runtime and test counts per level compared before and after in the metrics log.

                ## Notes
                Keep a small set of high-level tests for the user flows that matter most. The goal is the right level for each check, not zero end-to-end tests.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least ten high-level tests are replaced by lower-level ones and total suite runtime has fallen, recorded in the metrics log."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List the twenty slowest high-level tests and what each one asserts"
                - "Mark which of them check logic a unit test could cover"
                - "Write the lower-level replacement for the first five"
                - "Delete the redundant high-level tests once replacements pass"
            - name: Replacing mock-heavy tests with fakes
              description: |-
                ## Purpose
                Tests with ten mock set-up lines per assertion are hard to read and pass even when the real collaborator has changed its behaviour. Building a few in-memory fakes for the most mocked interfaces shortens tests and makes them reflect how the dependency really behaves.

                ## Milestones
                1. The three most mocked interfaces in the codebase identified.
                2. An in-memory fake written for each, with its own small test against the real contract.
                3. Twenty tests moved from mocks to the fakes.
                4. Average set-up lines per test measured before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three fakes exist with their own contract tests and twenty tests have moved from mocks to them."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Count mock declarations per interface across the test folders"
                - "Write an in-memory fake for the most mocked interface"
                - "Run the same contract tests against the fake and the real implementation"
                - "Move the first ten tests from mocks to the fake"
            - name: Choosing which user flows deserve end-to-end tests
              description: |-
                ## Purpose
                End-to-end tests are the most expensive kind to write and keep running, so the strategy should name the few user flows that justify them rather than adding one per feature. A short list of five to ten user flows, chosen by revenue and risk, sets the scope the end-to-end suite is built against.

                ## Milestones
                1. Candidate user flows listed from the risk map and product analytics.
                2. Each user flow checked for whether lower-level tests could give the same confidence.
                3. A final list of five to ten user flows agreed and written into the strategy.
                4. A rule that new end-to-end tests need a user flow on the list or a stated reason.

                ## Notes
                Building and stabilising those tests is a separate piece of work. This project only decides which user flows earn a place.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The strategy page names five to ten user flows that earn end-to-end coverage, each with a reason, and a rule for adding more."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the user flows that bring in revenue or carry the most risk"
                - "Strike any user flow that unit and integration tests already cover well"
                - "Agree the final five to ten user flows with product"
                - "Write the list and the adding rule into the strategy page"
            - name: Test runtime budget per level
              description: |-
                ## Purpose
                Suites get slow one reasonable test at a time, and nobody notices until the pre-merge gate takes forty minutes. Agreeing a time budget for each level, with a check that warns when it is exceeded, turns speed into something the team defends rather than mourns.

                ## Milestones
                1. A runtime budget agreed per level, for example unit under two minutes and integration under ten.
                2. Current runtimes compared against the budgets.
                3. A warning added that reports when a level exceeds its budget.
                4. A rule for what happens when the budget is broken.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written runtime budgets per level exist and a check reports in the pipeline output whenever a level exceeds its budget."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Measure the current runtime of each test level on a clean machine"
                - "Propose a budget per level and agree it with the team"
                - "Add a check that prints a warning when a level runs over budget"
                - "Write the rule for fixing a broken budget into the strategy page"
            - name: Coverage threshold policy
              description: |-
                ## Purpose
                Setting a repository-wide coverage target invites tests written to hit a number, while no target at all lets new code ship untested. Deciding what you measure (changed lines, risk-weighted modules), what threshold applies and whether it blocks or warns settles the argument once instead of in every review.

                ## Milestones
                1. Options compared: no gate, whole-repository floor, changed-line threshold, per-module targets.
                2. A policy chosen with its threshold and whether it blocks or warns.
                3. Exclusions listed: generated code, migrations, configuration.
                4. The policy written into the strategy page and applied in tooling.

                ## Notes
                Many teams settle on a warning for changed-line coverage plus stricter expectations for high-risk modules. A hard global percentage tends to reward trivial tests.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A coverage policy naming the measure, threshold, blocking behaviour and exclusions is written and applied in tooling."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the three coverage policy options the team is choosing between"
                - "Check what changed-line coverage recent pull requests actually achieved"
                - "Agree the measure, threshold and whether it blocks merges"
                - "Configure the coverage tool with the agreed exclusions"
            - name: Test impact analysis to run only affected tests
              description: |-
                ## Purpose
                Once a suite takes more than a few minutes, running every test on every change wastes most of the time on code the change cannot reach. Selecting tests by the files and dependencies a change touches can cut feedback time sharply, but only if the selection is trusted, so it needs measuring before it gates anything.

                ## Milestones
                1. Tooling options for affected-test selection compared for your language and repository layout.
                2. Selection run in shadow mode beside the full suite for two weeks.
                3. Any failure the full suite caught and the selection missed investigated.
                4. A decision recorded on whether selected runs can replace full runs before merge.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two weeks of shadow runs compare selected and full suites, and a decision on using selection before merge is recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the affected-test selection tools that support your runner"
                - "Run selection in shadow mode next to the full suite"
                - "Log every case where the full suite failed and selection did not"
                - "Record whether selection is safe enough to gate merges"
            - name: Test data builders instead of giant fixtures
              description: |-
                ## Purpose
                Loading a 400-line fixture to check one field hides what matters about its data. Builders that create valid objects with sensible defaults, letting each test override only the fields it cares about, make tests shorter and their intent obvious.

                ## Milestones
                1. Builders written for the five most used domain objects.
                2. Each builder producing a valid object with no arguments.
                3. Twenty tests moved from shared fixtures to builders.
                4. Shared fixtures that are no longer loaded deleted.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Builders exist for five core domain objects and twenty tests use them in place of shared fixtures."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick the five domain objects that tests create most often"
                - "Write a builder for the first one with valid defaults"
                - "Rewrite five tests to use the builder and override only what they check"
                - "Delete shared fixture files no test loads any more"
            - name: Characterisation tests before a risky change
              description: |-
                ## Purpose
                Changing old code with no tests is how a small fix becomes an incident. Before touching it, characterisation tests record what the code does today, right or wrong, so any change in behaviour during the work is visible and deliberate.

                ## Milestones
                1. The code to be changed and its inputs and outputs identified.
                2. Characterisation tests capturing current behaviour for typical and edge inputs.
                3. Surprising current behaviour noted and confirmed with product before it is changed.
                4. The change made with the characterisation tests passing, or failing only where intended.

                ## Notes
                A characterisation test asserts what the code does, not what it should do. Fix wrong behaviour in a separate, visible step.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Characterisation tests for the risky code are merged before the change, and every behaviour change during the work is intentional and recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Name the risky change coming up and the code it will touch"
                - "Collect real inputs from logs or support cases to drive the tests"
                - "Write tests that assert today's outputs for those inputs"
                - "Confirm any odd behaviour with product before changing it"
            - name: Test plan for a major feature launch
              description: |-
                ## Purpose
                Big features fail at the seams: the new payment option works but the refund path was never tested, or the migration runs on staging data but not production volumes. A one-page test plan written before build starts assigns each risk to a test level and an owner, so the launch date is not the first full test.

                ## Milestones
                1. The feature's risks listed, including data migration and interaction with existing flows.
                2. Each risk assigned to a test level and an owner.
                3. The plan reviewed by product and the engineers building the feature.
                4. Every planned test merged and passing a week before launch.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A reviewed test plan maps every listed launch risk to a merged, passing test at least a week before launch."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List what could go wrong with the feature, including data and existing flows"
                - "Assign each risk a test level and an owner in a one-page plan"
                - "Review the plan with product and the feature engineers"
                - "Check off each planned test as it merges, with a week to spare before launch"
            - name: Test strategy workshop with the team
              description: |-
                ## Purpose
                Strategies written by one person are followed by one person. A two-hour workshop where the team sorts real tests into levels, argues about a few borderline cases and agrees the one-pager together builds the shared judgement that no document can.

                ## Milestones
                1. A two-hour slot booked with every engineer who writes tests in the codebase.
                2. Twenty real tests printed or shared for the team to sort by level.
                3. Disagreements captured and resolved, or parked with an owner.
                4. The agreed changes merged into the strategy page within a week.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The workshop is held with the whole team and its agreed changes are merged into the strategy page within seven days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a two-hour workshop with every engineer who works in the codebase"
                - "Pick twenty real tests, including a few borderline ones, for sorting"
                - "Run the sort and record each disagreement"
                - "Merge the agreed strategy changes within a week"
            - name: Moving the suite to a new test runner
              description: |-
                ## Purpose
                Old runners stop getting updates, block runtime upgrades and lack watch mode or parallel runs. Moving a large suite is best done in stages with both runners side by side, so the team never loses coverage and can stop halfway without a broken build.

                ## Milestones
                1. Both runners configured to run in the same pipeline.
                2. A migration order chosen, smallest and simplest test folders first.
                3. Half the suite moved and passing on the new runner.
                4. The old runner removed once every test has moved or been deleted.

                ## Notes
                Codemods can do most of the mechanical rewriting. Budget the time for the tests that relied on quirks of the old runner.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every test runs on the new runner and the old runner's dependency and configuration are removed from the repository."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Add the new runner alongside the old one in a single pipeline step"
                - "Move the smallest test folder and compare results between runners"
                - "Try a codemod on one folder and review its output by hand"
                - "Remove the old runner once its test count reaches zero"
            - name: Audit-ready test evidence for a compliance review
              description: |-
                ## Purpose
                Teams building software under health, finance or safety rules are often asked to show which tests cover which requirement and that they ran on the released version. Linking requirements to tests and keeping signed run reports per release turns an audit week of scrambling into an export.

                ## Milestones
                1. The requirements in scope for the review listed with identifiers.
                2. Each requirement linked to the tests that verify it.
                3. Test run reports stored for each release with version and date.
                4. A sample trace from requirement to passing test checked by someone outside the team.

                ## Notes
                Check the evidence format with your compliance lead or auditor early. What counts as acceptable evidence varies by regime.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every in-scope requirement traces to tests with a stored run report for the release under review, checked by someone outside the team."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask the compliance lead which requirements and releases the review covers"
                - "Tag tests with the requirement identifiers they verify"
                - "Store the test run report for each release with its version"
                - "Ask someone outside the team to trace three requirements end to end"
            - name: Lean test strategy for a solo developer or small startup
              description: |-
                ## Purpose
                When one or two people build everything, a full test pyramid is a luxury, but shipping with no tests means every release is a gamble on payment and sign-up. A lean strategy covers the few flows that would sink the business, keeps the suite under two minutes and adds tests where bugs actually appear.

                ## Milestones
                1. The three flows that would cost customers or revenue if broken named.
                2. One integration test per flow written and passing.
                3. A two-minute ceiling on the whole suite agreed with yourself.
                4. A weekly half hour set aside to add a test where the last bug was.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The three business-critical flows each have a passing integration test and the full suite runs in under two minutes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down the three flows that would hurt the business most if broken"
                - "Write one integration test for the sign-up or payment flow first"
                - "Time the whole suite and keep it under two minutes"
                - "Spend thirty minutes adding a test near the most recent bug @recurring(weekly:sat)"
            - name: Adding tests to a codebase with none
              description: |-
                ## Purpose
                Inheriting a working product with no tests at all is common after an acquisition, a contractor handover or a fast prototype that became the business. A remediation plan that starts with a test harness and characterisation tests on the riskiest flow, then adds tests with every change, makes progress without a months-long freeze.

                ## Milestones
                1. A test runner and one trivial passing test in place, running before merge.
                2. Characterisation tests around the single riskiest flow.
                3. A rule that every change adds or extends a test for the code it touches.
                4. The riskiest five flows covered after the first quarter.

                ## Notes
                Start from the **Remediation plan** template. Resist a dedicated testing month; tests written with real changes are the ones that stay maintained.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A test harness runs before merge and the five riskiest flows have tests within the deadline, recorded in a remediation plan."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Install a test runner and commit one passing test today"
                - "Ask the pipeline owner to run the suite before every merge"
                - "Write characterisation tests for the riskiest flow"
                - "Review the remediation plan and pick the next flow to cover @recurring(weekly:wed)"
            - name: Setting test expectations as a new team lead
              description: |-
                ## Purpose
                New leads inherit whatever testing culture the team has, and announcing a coverage target in week one usually breeds resentment and padded tests. Listening first, agreeing a small number of expectations with the team and checking in monthly builds habits that last beyond their own reviews.

                ## Milestones
                1. One-to-one conversations held with each engineer about what slows or worries them in testing.
                2. Three testing expectations agreed with the team, not imposed.
                3. Expectations reflected in the pull request template and strategy page.
                4. A monthly check-in on whether the expectations are helping.

                ## Notes
                Ask what the team's last painful regression was. It usually tells you more about the suite than any metric.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Three team-agreed testing expectations are written into the strategy page and reviewed in a monthly check-in for three months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask each engineer about the last regression that hurt and why tests missed it"
                - "Draft three testing expectations from what you heard"
                - "Agree the expectations with the team and add them to the strategy page"
                - "Raise the testing expectations at the team retrospective @recurring(monthly:2)"
            - name: Test strategy for a data pipeline team
              description: |-
                ## Purpose
                Data pipelines break in ways ordinary unit tests miss: a source column changes type, a join silently drops rows, a daily file arrives empty. A strategy for data work combines unit tests on transformations with data quality checks on real runs, so bad data stops before it reaches a dashboard or a model.

                ## Milestones
                1. Each transformation's pure logic covered by unit tests on small hand-made tables.
                2. Schema checks on the inputs each pipeline reads.
                3. Row count, null and uniqueness checks on key outputs after each run.
                4. A rule for whether a failed check stops the pipeline or raises a warning.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The team's main pipeline has unit tests on its transformations and schema and quality checks on inputs and outputs, with a failure rule agreed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick the pipeline whose bad output caused the most trouble last year"
                - "Write unit tests for its main transformation using tiny input tables"
                - "Add schema checks on the inputs it reads"
                - "Add row count and null checks on its key output table"
            - name: Component tests for a frontend team
              description: |-
                ## Purpose
                Frontend teams often swing between no tests and brittle snapshot tests of markup. Component tests that render a component, interact with it the way a user would and assert on what is visible give fast feedback on behaviour without a browser driving the whole app.

                ## Milestones
                1. A component testing library chosen that queries by role and visible text.
                2. Ten key components covered with interaction tests.
                3. Network calls replaced with a request mocking layer at the boundary.
                4. Pure logic moved out of components into unit-tested functions where it helps.

                ## Notes
                Query elements the way users and assistive technology find them: by role, label and text, not by class names.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten key frontend components have interaction tests that query by role or text and mock the network at the boundary."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the ten components that break or change most often"
                - "Write an interaction test for the first one that queries by role"
                - "Add a request mocking layer for network calls in component tests"
                - "Move one piece of business logic out of a component into a tested function"
            - name: Team testing skills matrix
              description: |-
                ## Purpose
                Testing knowledge is usually concentrated in one or two people, so the suite's quality depends on who reviews. A skills matrix of the techniques in this area (test doubles, integration with real dependencies, contract and property tests) shows the gaps and pairs people up to close them.

                ## Milestones
                1. A matrix listing eight testing skills against every engineer.
                2. Each person's self-rating recorded.
                3. Pairs set up so each gap is matched with someone strong in that skill.
                4. The matrix refreshed each quarter.

                ## Notes
                Start from the **Skills matrix** template. Keep it about skills, never performance: people rate honestly only when it cannot be used against them.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A testing skills matrix covers every engineer with at least three pairings made and a quarterly refresh in the calendar."
                cadence: rolling
              tasks:
                - "List eight testing skills that matter in this codebase"
                - "Ask each engineer to rate themselves on each skill"
                - "Pair three people with gaps with colleagues strong in that skill"
                - "Refresh the testing skills matrix with new self-ratings @recurring(quarterly)"
            - name: Fuzzing parsers and input handlers for correctness
              description: |-
                ## Purpose
                Code that parses files, messages or user input meets far stranger data in production than any hand-written test. Coverage-guided fuzzing throws millions of mutated inputs at a parser and reports crashes and hangs, which finds the correctness bugs that property tests and examples miss.

                ## Milestones
                1. One parser or decoder chosen with a clear input boundary.
                2. A fuzz target written with a seed corpus of real inputs.
                3. The fuzzer run for several hours and every crash triaged.
                4. Crashing inputs saved as regression tests.

                ## Notes
                Security-focused fuzzing and scanning sit with your application security testing work. Here the aim is correctness and crash-free handling of odd input.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One parser has a fuzz target that has run for several hours, with every crash fixed and kept as a regression test."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick the parser that handles the most external input"
                - "Collect twenty real input files as a seed corpus"
                - "Write the fuzz target and run it overnight"
                - "Turn each crashing input into a regression test"
            - name: Stateful property testing for complex workflows
              description: |-
                ## Purpose
                Shopping carts, account state machines and caches fail in sequences, not single calls: add, remove, add again, expire. Stateful property testing generates random sequences of operations against both the real code and a simple model, and reports the shortest sequence where they disagree.

                ## Milestones
                1. One stateful component chosen with a small set of operations.
                2. A simple model of its expected behaviour written in the test.
                3. Random operation sequences run against code and model together.
                4. Any shrunk failing sequence fixed and kept as a regression test.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A stateful property test compares one component against a model across generated sequences, with any failure kept as a regression test."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose a stateful component with four to six operations"
                - "Write a plain model of how it should behave"
                - "Configure the property library to generate operation sequences"
                - "Save the shortest failing sequence as a named test"
            - name: Test architecture for a multi-team monorepo
              description: |-
                ## Purpose
                In a monorepo shared by many teams, one team's slow or shared fixtures can stall everyone, and nobody owns the test utilities everyone imports. Clear ownership of test folders, per-package suites that run alone and a small shared testing toolkit with its own maintainers keep the suite usable as headcount grows.

                ## Milestones
                1. Every test folder mapped to an owning team.
                2. Each package's tests runnable on their own without the rest of the repository.
                3. Shared test utilities gathered into one package with named maintainers.
                4. A monthly report of suite runtime and failures by owning team.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every test folder has an owning team, packages run their tests in isolation and a monthly runtime report by team is published."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Map each test folder to an owning team in the code owners file"
                - "Find packages whose tests fail when run on their own"
                - "Move shared test helpers into one package with named maintainers"
                - "Publish suite runtime and failures by owning team @recurring(monthly:6)"
            - name: Measuring what the test suite is worth
              description: |-
                ## Purpose
                Every test has a cost in runtime, maintenance and false alarms, and some cost far more than they catch. Tracking which tests caught real defects, which only ever failed for noise and what the suite costs per year gives an experienced team the evidence to delete with confidence and invest where it pays.

                ## Milestones
                1. Test failures over a quarter classified as real defect caught, noise or environment.
                2. Tests that never caught a real defect but failed often listed for review.
                3. Suite cost estimated in engineer hours and compute per quarter.
                4. A quarterly decision on which tests to delete, move or strengthen.

                ## Notes
                Deleting a test is a legitimate outcome. A test that costs an hour a month and has never caught a bug may be worth less than the time it eats.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarterly report classifies test failures, estimates suite cost and records which tests were deleted, moved or strengthened."
                cadence: rolling
              tasks:
                - "Export last quarter's test failures from the pipeline history"
                - "Classify each failure as a real defect, noise or environment"
                - "Estimate the engineer hours and compute the suite consumed"
                - "Decide which tests to delete, move or strengthen this quarter @recurring(quarterly)"
---

# Automated Test Strategy

This area is for engineers and teams who want a test suite that tells them the truth quickly: which behaviour is checked at which level, how long feedback takes, and where the gaps are. It starts with foundations (an inventory of what you have, a one-page strategy, a risk map and shared definitions), moves through the operating routines that keep the suite healthy, then the skills worth practising, from test doubles and contract tests to property-based and mutation testing. After that come the decisions and improvements, dated events such as a feature launch or a compliance review, variants for a solo developer, a new lead, a data team or a frontend team, and the specialist work of measuring what the suite is really worth.

What repeats is a monthly suite health review, a monthly sweep of the slowest and skipped tests, a check that bug fixes arrive with regression tests, a quarterly strategy review and the escaped defect review that asks which level should have caught each bug. The Risk register, Metrics log, Remediation plan and Skills matrix templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
