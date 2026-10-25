---
id: quant-finance.backtesting-engine-build
name: Backtesting Engine Build
description: "A written spec, a clear architecture choice, a tested core for orders, fills and accounting, corporate actions and cost models, and golden tests that prove the engine reproduces known results."
category: business
version: 1.0.0
tags: [quant-finance, backtesting-engine-build, engineer, researcher, event-driven, fill-models, corporate-actions, simulation-testing]
author: Aurum Technology
starter_structure:
  templates:
    - product-spec
    - purchase-decision
    - operational-checklist
    - risk-register
    - meeting-notes
    - portfolio-piece
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Backtesting Engine Build
          description: "Building a backtesting engine: event-driven or vectorised design, corporate actions, cost and fill models, reproducible runs and tests against known results."
          projects:
            - name: Requirements spec for the backtesting engine
              description: |-
                ## Purpose
                Engines built without a written scope tend to grow every feature at once and finish none, then quietly disagree with each other in edge cases. One spec naming the asset classes, bar or tick resolution, order types, cost models, run time budget and who will use the engine settles most later arguments before the first line of code.

                ## Milestones
                1. A spec listing supported asset classes, data resolutions and order types, with anything out of scope named explicitly.
                2. Performance targets written as numbers, such as ten years of daily data for 3,000 symbols in under a minute.
                3. The researchers who will use the engine named, with the three questions each needs it to answer.
                4. The spec reviewed by one researcher and one engineer and saved in the engine repository.

                ## Notes
                Start from the **Product spec** template. Writing down what the engine will not do in version one is as useful as the feature list.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reviewed spec with scope, out-of-scope items, numeric performance targets and named users is committed to the engine repository."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the asset classes and data resolutions the first version must handle"
                - "Ask two intended users which questions the engine must answer for them"
                - "Write numeric run time and memory targets for a typical study"
                - "Get the spec reviewed by a researcher and an engineer before coding"
            - name: Build, buy or open-source engine decision
              description: |-
                ## Purpose
                Writing a backtester from scratch is a well-known way to spend a year rebuilding what an open-source library or a vendor platform already does, yet existing tools can hide fill and accounting assumptions you cannot change. Scoring the realistic options against the spec makes the choice deliberate, and the reasons are on record when someone asks later.

                ## Milestones
                1. Three to five candidates scored, including at least one open-source library, one commercial platform and building in-house.
                2. Each candidate tested against the same small reference strategy from the spec.
                3. Licence terms, maintenance activity and the ability to change fill and cost logic recorded for each.
                4. A written decision with the main reason and the conditions that would reopen it.

                ## Notes
                Start from the **Purchase decision** template. A hybrid is common: an open-source event loop with in-house fill, cost and accounting modules.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between building, buying or adopting an open-source engine, backed by a scored comparison of at least three options on the same test strategy."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Shortlist three to five engines or frameworks that could meet the spec"
                - "Run the same simple reference strategy on the top two candidates"
                - "Check each licence and how recently each project was maintained"
                - "Write the decision with the conditions that would make you revisit it"
            - name: Event-driven or vectorised architecture choice
              description: |-
                ## Purpose
                Vectorised engines run a daily cross-sectional study in seconds but struggle with path-dependent logic such as stops, partial fills and cash constraints, while event-driven engines model those faithfully at a large cost in speed. Picking the core design, or a deliberate split between a fast research mode and a detailed simulation mode, shapes every module that follows.

                ## Milestones
                1. The strategies in scope classified by whether they depend on the path of fills and cash.
                2. A short prototype of the same strategy in both styles, timed and compared for identical results.
                3. An architecture decision record stating the chosen design and what it gives up.
                4. Rules written for when a study must move from the fast mode to the detailed mode, if both exist.

                ## Notes
                If both modes exist, make one of the golden tests require them to agree on a simple strategy. Silent divergence between modes is a classic engine bug.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An architecture decision record is committed, backed by a timed prototype of one strategy in both styles with matching results."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Sort the in-scope strategies into path-dependent and path-independent"
                - "Prototype one moving average strategy in vectorised and event-driven style"
                - "Time both prototypes and confirm their trade lists match"
                - "Write the architecture decision record with the trade-offs accepted"
            - name: Core domain model for orders, fills and positions
              description: |-
                ## Purpose
                Most engine bugs trace back to a vague data model: an order that is also a fill, a position that forgets its average cost, a cash balance updated in two places. Defining the core types, their states and who may change them gives every later module a stable contract and makes accounting errors easy to spot.

                ## Milestones
                1. Types defined for instrument, order, fill, position, cash and portfolio, each with its required fields and units.
                2. An order state machine drawn, covering new, partially filled, filled, cancelled and rejected.
                3. One module named as the only place allowed to change positions and cash.
                4. Unit tests covering every allowed and forbidden order state transition.

                ## Notes
                Store quantities as signed integers of the instrument's lot or contract unit, and prices in a stated currency and precision. Mixed units are a quiet source of wrong P and L.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Core types and an order state machine exist in code with tests for every transition, and only one module can change positions and cash."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Sketch the order life cycle states on one page"
                - "Define instrument, order, fill and position types with units in the field names"
                - "Route every position and cash change through a single ledger module"
                - "Write tests that try each forbidden order state change"
            - name: Simulation clock and event queue design
              description: |-
                ## Purpose
                Look-ahead bias inside an engine usually comes from the clock, not the strategy: a signal computed on the close and filled at that same close, or two events at the same timestamp processed in an unlucky order. A single simulation clock with a documented ordering rule for simultaneous events removes a whole class of errors.

                ## Milestones
                1. One clock object that every component reads time from, with no direct calls to the system time.
                2. A written ordering rule for events sharing a timestamp, such as market data before signals before orders.
                3. A configurable delay between signal and earliest possible fill.
                4. Tests showing a strategy cannot see a bar before its timestamp has passed.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All engine components read time from one clock, simultaneous events follow a documented order, and a test proves no strategy sees data before its timestamp."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Search the code for direct calls to the system time and list them"
                - "Write the ordering rule for events with the same timestamp"
                - "Add a signal to fill delay setting with a sensible default"
                - "Write a test that fails if a strategy reads a bar early"
            - name: Point-in-time data handler interface
              description: |-
                ## Purpose
                The engine should ask for data as of a moment, never for a whole table it could peek ahead in. Designing the data handler so a strategy can only request what was known at the current simulated time keeps the point-in-time promise in the engine itself rather than in each researcher's memory.

                ## Milestones
                1. A data handler interface whose every read takes the simulation time as an argument.
                2. Adapters written for the bar, fundamental and reference data sources in the spec.
                3. Reporting lags and publication times honoured for slow data such as fundamentals.
                4. A test that requests future data and confirms the handler refuses or returns nothing.

                ## Notes
                Keep vendor quirks inside adapters. The strategy layer should never know which vendor a column came from.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every data read in the engine goes through a handler keyed by simulation time, with a passing test that future data cannot be retrieved."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write the data handler interface with simulation time on every read"
                - "Build an adapter for the main daily bar source"
                - "Add publication lag handling for fundamental data"
                - "Write a test that tries to read tomorrow's bar and expects a refusal"
            - name: Pinned environment and continuous integration for the engine
              description: |-
                ## Purpose
                A backtest that gives a different answer after a library upgrade is worse than no backtest, because nobody notices. Pinning every dependency, building the engine in a clean container and running the test suite on every change means a result from six months ago can be rebuilt exactly.

                ## Milestones
                1. A lock file pinning every direct and indirect dependency to an exact version.
                2. A container or environment recipe that builds the engine from scratch.
                3. Continuous integration running unit and golden tests on every pull request.
                4. Merges blocked when any golden test result changes without an approved update.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The engine builds from a pinned recipe in a clean environment and continuous integration blocks merges when unit or golden tests fail."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Generate a lock file with exact versions for every dependency"
                - "Write a container recipe that builds the engine from a clean base"
                - "Set continuous integration to run the full test suite on each pull request"
                - "Protect the main branch so failing golden tests block a merge"
            - name: Hand-computed golden test cases
              description: |-
                ## Purpose
                An engine can only be trusted if it reproduces answers worked out independently, by hand or in a spreadsheet, for cases small enough to check line by line. A dozen golden cases covering a buy and hold, a round trip with costs, a split, a dividend and a short position catch most accounting and timing bugs the day they appear.

                ## Milestones
                1. At least twelve tiny scenarios with every trade, cash balance and P and L figure computed outside the engine.
                2. Cases covering costs, a stock split, a cash dividend, a short sale and a partially filled order.
                3. Each case stored as input data plus expected output in the test suite.
                4. The engine passing every golden case to the cent or tick.

                ## Notes
                Keep each case to five bars or fewer. If a reviewer cannot recompute it in ten minutes, it is too big to be a golden case.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least twelve hand-computed scenarios, including costs, a split, a dividend and a short, pass exactly in the engine's test suite."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Work out a five-bar buy and hold with one commission in a spreadsheet"
                - "Add golden cases for a split, a dividend and a short sale"
                - "Store each case as input files plus expected trades and balances"
                - "Run the engine against every case and fix each mismatch"
            - name: Portfolio accounting ledger with daily reconciliation
              description: |-
                ## Purpose
                Equity curves are only as good as the bookkeeping under them. A double-entry style ledger where every fill, fee, dividend and financing charge is a journal line, and where cash plus positions at market always equals starting capital plus P and L, makes accounting bugs fail loudly instead of drifting.

                ## Milestones
                1. Every cash movement recorded as a ledger entry with a type, amount, currency and timestamp.
                2. A reconciliation check that runs at each simulated day end and stops the run on any mismatch.
                3. Realised and unrealised P and L reported separately and adding up to the total.
                4. A ledger export that a reviewer can open in a spreadsheet.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every backtest produces a ledger that reconciles cash, positions and P and L at each simulated day end, and any mismatch halts the run."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List every type of cash movement the engine must record"
                - "Write the ledger entry type and the day-end reconciliation check"
                - "Make a reconciliation mismatch stop the run with a clear message"
                - "Export one run's ledger and check it by hand in a spreadsheet"
            - name: Run configuration files and run identifiers
              description: |-
                ## Purpose
                Six weeks after a run, the question is always which data, which parameters and which engine version produced the chart in the slide. Driving every run from a configuration file and stamping each result with a run identifier, code commit and data snapshot hash answers that question in seconds.

                ## Milestones
                1. A configuration schema covering strategy, parameters, universe, dates, cost model and data snapshot.
                2. Every run writing a manifest with run identifier, code commit, configuration hash and data hash.
                3. A command that re-runs any past result from its manifest alone.
                4. Configurations validated before a run starts, with clear errors for missing fields.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every engine run writes a manifest with commit, configuration and data hashes, and any past run can be reproduced from its manifest with one command."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the configuration schema with every field a run needs"
                - "Write the run manifest with commit, configuration hash and data hash"
                - "Add a replay command that rebuilds a run from its manifest"
                - "Reject configurations with missing or unknown fields before the run"
            - name: Golden and regression test report routine
              description: |-
                ## Purpose
                Tests that run but are never read do little. A short weekly read of the regression report, which compares a fixed set of reference strategies against stored results, spots slow drift such as a changed rounding rule before researchers build conclusions on it.

                ## Milestones
                1. A fixed suite of five to ten reference strategies with stored expected metrics and trade lists.
                2. A nightly job that runs the suite and writes a one-page diff report.
                3. Every unexplained difference turned into a ticket with an owner.
                4. A record of approved result changes with the reason for each.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A nightly regression report exists for the reference suite, and every unexplained difference over the last quarter has a ticket with an owner."
                cadence: rolling
              tasks:
                - "Choose five reference strategies that exercise different engine paths"
                - "Schedule a nightly run that writes a diff against stored results"
                - "Read the regression diff and open a ticket for any change @recurring(weekly:mon)"
                - "Log every approved change to expected results with its reason"
            - name: Engine release and versioning routine
              description: |-
                ## Purpose
                Anyone reading an old study needs to know which engine version produced a result and what changed between versions. A predictable monthly release with semantic version numbers, release notes and a list of result-changing fixes keeps old studies interpretable and stops silent behaviour changes.

                ## Milestones
                1. A versioning rule that marks any change to simulated results as a minor or major version.
                2. A release checklist covering tests, benchmark, notes and tagging.
                3. Release notes that list result-changing fixes separately from new features.
                4. Researchers notified of each release with the notes attached.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly tagged releases exist with notes that separate result-changing fixes from features, and each run manifest records the engine version used."
                cadence: rolling
              tasks:
                - "Write the versioning rule for changes that alter results"
                - "Build the release checklist from tests to tag"
                - "Cut a release with notes and tell the researchers @recurring(monthly:12)"
                - "Ask the agent to draft release notes from the merged pull requests"
            - name: Weekly engine issue triage
              description: |-
                ## Purpose
                Bug reports from researchers pile up quickly and the dangerous ones, those that change results, look the same as cosmetic requests in a queue. Thirty minutes each week sorting issues by whether they affect simulated numbers keeps the serious fixes first.

                ## Milestones
                1. An issue template asking for the run manifest, the expected result and the observed result.
                2. Labels separating result-affecting bugs from performance, usability and feature requests.
                3. Result-affecting bugs given a target fix time and an owner at triage.
                4. No result-affecting bug left without an owner for more than a week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open result-affecting engine issue has an owner and a target date, and the queue is triaged at least weekly."
                cadence: rolling
              tasks:
                - "Create an issue template that asks for the run manifest"
                - "Add labels for result-affecting, performance and feature issues"
                - "Triage new engine issues and assign owners @recurring(weekly:thu)"
                - "Warn affected researchers when a bug may have changed past results"
            - name: Monthly engine performance benchmark
              description: |-
                ## Purpose
                Run time creeps up one convenient feature at a time until a parameter sweep takes a weekend. Benchmarking a fixed workload every month, against the targets in the spec, catches slowdowns while the cause is still one recent change rather than a year of them.

                ## Milestones
                1. A fixed benchmark workload covering a daily cross-section, an intraday study and a parameter sweep.
                2. Run time and peak memory recorded for each release.
                3. A chart of benchmark history kept with the release notes.
                4. Any slowdown over an agreed threshold, such as 20%, investigated before the next release.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A benchmark history of run time and memory exists for each release, and every slowdown beyond the agreed threshold has a recorded cause."
                cadence: rolling
              tasks:
                - "Define three fixed benchmark workloads with their data snapshots"
                - "Run the benchmark and record time and memory @recurring(monthly:20)"
                - "Set the slowdown threshold that triggers an investigation"
                - "Plot benchmark history across releases"
            - name: Shadow replay of live fills through the engine
              description: |-
                ## Purpose
                Where a strategy already trades, its real orders and fills are the best test the engine will ever get. Replaying a week of live decisions through the engine and comparing simulated fills, costs and positions with the broker's records shows exactly where the fill and cost models are optimistic.

                ## Milestones
                1. A replay mode that feeds recorded live signals into the engine with the same timestamps.
                2. A comparison of simulated against actual fill prices, quantities and fees per order.
                3. Slippage gaps summarised by instrument, time of day and order size.
                4. Fill or cost model changes proposed from the gaps, with before and after replay results.

                ## Notes
                This is about calibrating the engine. Watching production strategies day to day belongs to live monitoring.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter has a replay report comparing simulated with actual fills, with any model change justified by before and after results."
                cadence: rolling
              tasks:
                - "Export one week of live orders and fills from the broker records"
                - "Build a replay mode that feeds recorded signals at their real timestamps"
                - "Replay last week's live orders and compare the fills @recurring(weekly:fri)"
                - "Write the quarterly fill model calibration report @recurring(quarterly)"
            - name: Monthly dependency and numerical library update
              description: |-
                ## Purpose
                Numerical libraries change defaults between versions, such as how missing values are skipped or how dates are parsed, and a quiet upgrade can shift every result. Updating on a fixed monthly day, on a branch, with the golden and regression suites as the gate, keeps the engine current without surprises.

                ## Milestones
                1. A monthly branch that updates dependencies and runs every test.
                2. Changelogs of the core numerical and date libraries read for changed defaults.
                3. Any result change traced to a specific library change before merging.
                4. Security advisories for dependencies checked and recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Dependencies are updated monthly on a branch, and no update merges while a golden or regression result change is unexplained."
                cadence: rolling
              tasks:
                - "Open the monthly dependency update branch and run all tests @recurring(monthly:5)"
                - "Read the changelogs of the array, dataframe and date libraries"
                - "Trace any changed result to the library change that caused it"
                - "Check dependency security advisories before merging"
            - name: Known limitations register for the engine
              description: |-
                ## Purpose
                Every engine simplifies something: no queue position, constant spreads, no borrow recalls, daily financing. Writing those limits down, with the kind of strategy each one flatters, lets researchers judge which results need extra caution and gives reviewers a list to check against.

                ## Milestones
                1. A register listing each simplification, the strategies it affects and the likely direction of the error.
                2. Each limitation rated for how much it could change a typical result.
                3. The register linked from the engine documentation and the tear sheet footer.
                4. Entries closed or updated as features are added.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A limitations register with affected strategy types and error direction is linked from the tear sheet and reviewed each quarter."
                cadence: rolling
              tasks:
                - "List every simplification in the fill, cost and financing models"
                - "Note which strategy types each limitation flatters"
                - "Link the register from every generated tear sheet"
                - "Review and update the limitations register @recurring(quarterly)"
            - name: Data contract tests on each new data delivery
              description: |-
                ## Purpose
                The engine assumes things about its inputs: sorted timestamps, no duplicate bars, prices in the stated currency, adjustment factors present. Contract tests that run on every new data snapshot stop a broken delivery from turning into a week of wrong backtests.

                ## Milestones
                1. A list of the input assumptions the engine relies on, written as testable rules.
                2. Contract tests that run automatically when a new data snapshot is registered.
                3. A failed contract blocking the snapshot from being used in runs.
                4. A monthly summary of contract failures sent to whoever manages the data.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No data snapshot can be used by the engine until its contract tests pass, and a monthly summary of failures exists."
                cadence: rolling
              tasks:
                - "Write down every assumption the engine makes about its input data"
                - "Turn each assumption into an automated contract test"
                - "Block snapshots that fail any contract test from being used"
                - "Send the data contract failure summary to the data owner @recurring(monthly:8)"
            - name: Feedback loop with researchers using the engine
              description: |-
                ## Purpose
                Engine teams that never sit with their users build features nobody asked for and miss the workaround every researcher uses to avoid a slow path. A standing monthly conversation and a short quarterly survey keep the roadmap tied to the questions people are trying to answer.

                ## Milestones
                1. A list of active engine users with the studies each is running.
                2. A monthly half-hour session where one researcher shows how they use the engine.
                3. A quarterly survey on speed, correctness concerns and missing features.
                4. The roadmap updated from feedback, with each change traced to a request.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "One researcher session is held each month and the engine roadmap shows which items came from user feedback."
                cadence: rolling
              tasks:
                - "List current engine users and what each is studying"
                - "Sit with one researcher while they run a study @recurring(monthly:26)"
                - "Send a five-question survey on speed and correctness @recurring(quarterly)"
                - "Update the roadmap and note the request behind each item"
            - name: Studying open-source backtester designs
              description: |-
                ## Purpose
                Several open-source backtesting frameworks have years of bug reports showing exactly where engines go wrong: dividend handling, order of operations at the open, partial fills. Reading two or three of them closely, with a note for each design choice, saves rediscovering those lessons the hard way.

                ## Milestones
                1. Two or three open-source engines chosen, covering at least one event-driven and one vectorised design.
                2. Notes on how each handles the clock, fills, costs and corporate actions.
                3. A list of their closed bugs that would also apply to your design.
                4. Three design choices adopted or rejected, with reasons recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes on at least two open-source engines exist, with a list of their past bugs checked against your own design."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Pick two open-source engines with different core designs"
                - "Read one engine module and note its design choices @recurring(weekly:wed)"
                - "Search their closed issues for fill, dividend and timing bugs"
                - "Record which design choices you will copy and which you will avoid"
            - name: Prices, ticks and floating point in simulation
              description: |-
                ## Purpose
                Binary floating point cannot represent most decimal prices exactly, so sums of thousands of fills drift and limit orders at a price can fail to match by a hair. Learning where to use integer ticks, fixed decimals or tolerances, and applying it consistently, removes a class of baffling one-cent bugs.

                ## Milestones
                1. A short note on how floating point error arises in price and cash sums.
                2. A chosen representation for prices, quantities and cash, written into the coding standard.
                3. Tick size rounding implemented for each instrument's price increment.
                4. Tests showing limit order matching and cash totals behave exactly at tick boundaries.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A documented representation for prices and cash is used across the engine, with tests passing at tick boundaries for limit matches and cash totals."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Reproduce a floating point price comparison failure in a short script"
                - "Choose integer ticks or fixed decimals for prices and cash"
                - "Round every simulated price to the instrument's tick size"
                - "Add tests for limit order matches exactly at the limit price"
            - name: Vectorised backtesting without look-ahead
              description: |-
                ## Purpose
                Array code makes look-ahead easy: one shift in the wrong direction or a rolling window that includes the current bar and the result becomes fiction. Practising the standard patterns for lagging signals, aligning returns and applying rebalance schedules builds the habit before it matters.

                ## Milestones
                1. A worked notebook showing the correct lag between signal, position and return.
                2. Three common look-ahead mistakes reproduced deliberately and their inflated results recorded.
                3. Helper functions for lagging and aligning series added to the engine's fast mode.
                4. A test that inserts a planted future signal and confirms the helpers ignore it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Lag and alignment helpers exist in the fast mode with a test proving a planted future signal produces no profit."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a notebook showing signal, position and return alignment"
                - "Reproduce the wrong-shift mistake and record the inflated Sharpe ratio"
                - "Add lag and align helpers to the fast research mode"
                - "Test that a planted future signal earns nothing through the helpers"
            - name: Profiling and speeding up the engine hot loop
              description: |-
                ## Purpose
                Most engine time is spent in a small inner loop, and guessing which part is slow wastes days. Profiling a realistic run, then fixing the largest cost first, whether it is per-event object creation, a dataframe lookup or logging, often cuts run time several fold without touching correctness.

                ## Milestones
                1. A profile of a realistic run with the top ten functions by time recorded.
                2. The largest single cost fixed and the golden tests still passing.
                3. Before and after timings recorded against the benchmark workload.
                4. A short note on which optimisations were rejected because they risked correctness.

                ## Notes
                Only move code to a compiled language once profiling shows the hot loop, and keep a reference Python version for tests.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A profile of a realistic run is recorded and at least one hot spot fix shows a measured speed-up with all golden tests passing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Profile one realistic backtest and save the top ten functions"
                - "Fix the single largest cost and rerun the golden tests"
                - "Record before and after timings on the benchmark workload"
                - "Note any speed-up rejected because it risked wrong results"
            - name: Property-based tests for accounting invariants
              description: |-
                ## Purpose
                Golden cases check a handful of known paths, but random sequences of orders, fills, splits and dividends find the combinations nobody thought to write down. Property-based tests that assert invariants, such as cash plus positions always reconciling, catch the bugs that only appear on the thousandth odd sequence.

                ## Milestones
                1. A list of invariants the ledger must always satisfy.
                2. Random generators for orders, fills, prices and corporate actions.
                3. Property tests running in continuous integration with a fixed seed and a nightly random seed.
                4. Every failure the tests find reduced to a minimal case and added as a golden test.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Property tests for at least five ledger invariants run in continuous integration, and every failure found has become a golden case."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down five invariants the ledger must never break"
                - "Build random generators for orders, fills and corporate actions"
                - "Run property tests nightly with a fresh random seed"
                - "Turn each failure found into a minimal golden case"
            - name: Trading calendars, sessions and time zones
              description: |-
                ## Purpose
                Half-day sessions, exchange holidays, daylight saving shifts and instruments trading across midnight break naive date logic. Building the engine on proper exchange calendars with time zone aware timestamps keeps daily bars, rebalances and intraday fills on the right day.

                ## Milestones
                1. Exchange calendars loaded for every market in scope, including early closes.
                2. All timestamps stored in one reference time zone with conversions at the edges.
                3. Rebalance schedules expressed in trading days, not calendar days.
                4. Tests for a daylight saving change, a holiday and a half-day session.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The engine uses exchange calendars for every market in scope, and tests pass for a holiday, a half day and a daylight saving change."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every exchange in scope and where its calendar comes from"
                - "Store all engine timestamps in one reference time zone"
                - "Add tests for a holiday, a half day and a clock change"
                - "Load next year's exchange holidays into the calendars @recurring(yearly)"
            - name: Deterministic runs with seeded randomness
              description: |-
                ## Purpose
                Random fill models, Monte Carlo cost noise and parallel workers make it easy for the same configuration to produce two different answers. Seeding every random source from the run configuration and controlling ordering in parallel code makes any run repeatable bit for bit.

                ## Milestones
                1. Every random number source in the engine identified and drawn from one seeded generator.
                2. The seed stored in the run manifest.
                3. Parallel runs producing identical results regardless of worker count.
                4. A test that runs the same configuration twice and compares outputs exactly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two runs of the same configuration produce identical outputs, including when run with different numbers of parallel workers."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Search the engine for every call that draws a random number"
                - "Route all randomness through one generator seeded from the configuration"
                - "Run one configuration on one and on eight workers and compare outputs"
                - "Add a test that fails if two identical runs differ"
            - name: Corporate actions engine for splits, dividends and symbol changes
              description: |-
                ## Purpose
                Splits, reverse splits, cash and stock dividends, spin-offs, mergers and ticker changes all alter positions and cash, and adjusting only the price series hides what really happened to a holding. Applying corporate actions as events in the engine keeps share counts, cash and P and L true to what a holder experienced.

                ## Milestones
                1. Corporate action types in scope listed with the ledger effect of each.
                2. Splits and cash dividends applied as events that change share counts and cash on the right dates.
                3. Symbol changes and delistings handled without losing the position history.
                4. Golden tests covering a split, a reverse split, a dividend and a delisting.

                ## Notes
                Use ex-dates for entitlement and pay dates for cash. Mixing them is one of the most common engine errors.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Splits, dividends, symbol changes and delistings are applied as engine events with golden tests for each type."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List each corporate action type and its effect on shares and cash"
                - "Apply splits and cash dividends as dated engine events"
                - "Handle delistings with a defined final price and cash settlement"
                - "Spot check corporate actions applied in last month's runs @recurring(monthly:17)"
            - name: Pluggable fill model with partial fills and volume caps
              description: |-
                ## Purpose
                Filling every order in full at the close price is the default that makes the most backtests look better than reality. A pluggable fill model, with options for next bar open, volume participation caps, partial fills and limit order touch rules, lets each study choose a stated assumption rather than inherit a flattering one.

                ## Milestones
                1. A fill model interface that strategies select by name in the configuration.
                2. Models implemented for next bar open, bar VWAP proxy and a participation-capped fill.
                3. Partial fills and unfilled remainders carried forward or cancelled by rule.
                4. Golden tests showing each model's fills on the same small order set.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least three fill models are selectable by configuration, partial fills are supported, and each model has golden tests on a shared order set."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Define the fill model interface and its configuration name"
                - "Implement next bar open and participation-capped fills"
                - "Carry partial fill remainders forward or cancel them by rule"
                - "Write golden tests comparing each model on the same orders"
            - name: Pluggable transaction cost model module
              description: |-
                ## Purpose
                Commissions, exchange fees, spreads, market impact and taxes on trades differ by market and by size, and a single basis point guess hides most of that. A cost module with separate, configurable components lets researchers plug in a cost model from the trading desk and see which component eats the return.

                ## Milestones
                1. Cost components separated into commission, fees, half spread, impact and transaction taxes.
                2. Each component configurable per market and instrument type.
                3. Every fill in the ledger carrying its cost broken down by component.
                4. A tear sheet panel showing total cost by component over the run.

                ## Notes
                Take impact parameters from the people who measure trading costs, not from the strategy author. The engine's job is to apply them faithfully.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each simulated fill records its cost by component, components are configurable per market, and the tear sheet shows cost by component."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Split the current cost logic into separate components"
                - "Make each cost component configurable per market"
                - "Store the cost breakdown on every ledger fill entry"
                - "Add a cost by component panel to the tear sheet"
            - name: Order types for limit, stop and auction orders
              description: |-
                ## Purpose
                Strategies that rely on limit entries, protective stops or closing auction orders cannot be simulated honestly with market orders alone. Adding each order type with clear trigger and fill rules, and documenting the simplifications, lets those strategies be tested without hand-written workarounds in strategy code.

                ## Milestones
                1. Limit, stop, stop limit, market on open and market on close orders implemented.
                2. Trigger and fill rules documented for each, including gaps through a stop price.
                3. Time in force options such as day and good until cancelled supported.
                4. Golden tests for a gap through a stop and a limit touched but not traded through.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five order types and two time in force options are implemented with documented rules and golden tests for gap and touch cases."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write the trigger and fill rule for each order type on one page"
                - "Implement stop orders including the gap through case"
                - "Add market on open and market on close order handling"
                - "Test a limit order that is touched but never traded through"
            - name: Futures roll and continuous contract handling
              description: |-
                ## Purpose
                Backtesting futures on a back-adjusted continuous series is fine for signals but wrong for P and L, margin and position sizes. Having the engine hold real contracts and roll them on a stated rule, with roll costs charged, makes futures results reflect what an account would actually have held.

                ## Milestones
                1. A roll rule per contract family, such as a fixed number of days before expiry or by open interest.
                2. The engine holding individual contracts and generating roll trades with costs.
                3. Contract multipliers, tick values and currencies applied to P and L.
                4. A comparison of continuous series P and L against contract-level P and L on one market.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The engine simulates individual futures contracts with rule-based rolls and roll costs, verified against a continuous series on one market."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Write the roll rule for each contract family in scope"
                - "Generate roll trades with costs from the rule"
                - "Apply multipliers and tick values to contract P and L"
                - "Check roll dates against the exchange expiry calendar @recurring(quarterly)"
            - name: Multi-currency accounting and FX conversion
              description: |-
                ## Purpose
                Portfolios trading in several currencies have cash balances in each, and converting everything to a base currency at the wrong time or rate creates phantom gains. Keeping cash per currency in the ledger and converting with point-in-time rates makes international results believable.

                ## Milestones
                1. Cash held per currency in the ledger, with a stated base currency for reporting.
                2. Point-in-time FX rates applied at a documented fixing time.
                3. Currency P and L reported separately from asset P and L.
                4. A golden test with a foreign stock bought, held through a rate move and sold.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ledger holds cash per currency, converts with point-in-time rates, and reports currency P and L separately, verified by a golden test."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Change the ledger to hold a cash balance per currency"
                - "Choose and document the FX fixing time the engine uses"
                - "Report currency P and L separately on the tear sheet"
                - "Compare engine FX rates with a second source @recurring(monthly:22)"
            - name: Short borrow, financing and margin accounting
              description: |-
                ## Purpose
                Long and short strategies that ignore borrow fees, hard-to-borrow lists, cash interest and margin requirements can show returns no account could earn. Modelling financing and margin in the ledger, and refusing trades that exceed available margin, turns an idealised curve into one a broker would recognise.

                ## Milestones
                1. Borrow fees charged daily on short positions from a configurable rate table.
                2. Interest paid and charged on cash balances at stated rates.
                3. A margin requirement checked before each order, with orders rejected when exceeded.
                4. A golden test showing a short held for a month with fees and interest.

                ## Notes
                The engine models gearing so results are honest. It is not a judgement that using borrowed money is sensible for any particular strategy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Borrow fees, cash interest and margin checks are applied in the ledger, with a golden test for a month-long short position."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Add a configurable borrow rate table for short positions"
                - "Charge and pay interest on daily cash balances"
                - "Reject orders that would exceed the margin requirement"
                - "Write a golden test for a short held one month"
            - name: Risk limits, position sizing and stop rule module
              description: |-
                ## Purpose
                Every research engine should make the risk rules of a strategy explicit, not leave them buried in strategy code where they are easy to drop. A module that applies position limits, a sizing rule and a written stop rule to every run means each result shows what the strategy did under the rules it would have to live with, remembering that most strategies fail out of sample.

                ## Milestones
                1. Maximum position, gross exposure and daily loss limits set in the run configuration.
                2. A position sizing rule, such as volatility-scaled sizing, selectable by name.
                3. A stop rule that halts the simulated strategy after a stated drawdown, with the halt shown on the tear sheet.
                4. A log of every limit breach and rejected order produced with each run.

                ## Notes
                The limits here are placeholders the strategy owner sets and agrees with whoever oversees risk. The engine only enforces them.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every run applies configured position limits, a named sizing rule and a drawdown stop rule, and outputs a log of breaches and rejected orders."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Add position, exposure and daily loss limits to the configuration"
                - "Implement a volatility-scaled sizing rule selectable by name"
                - "Halt the simulated strategy when the drawdown stop rule triggers"
                - "Write every breach and rejected order to a per-run log"
            - name: Parallel parameter sweeps on a job runner
              description: |-
                ## Purpose
                Researchers will run hundreds of variants whether or not the engine makes it easy, so it should make it safe: every variant logged, every result tied to a manifest, and the count of trials visible. A job runner that fans out sweeps across cores or machines does both, and makes the true number of tries hard to forget.

                ## Milestones
                1. A sweep definition format listing parameters and their ranges.
                2. Jobs distributed across workers with each result stored under its own run identifier.
                3. A sweep summary showing the total number of variants tried.
                4. Failed jobs retried or reported without corrupting the result store.

                ## Notes
                Show the variant count on every sweep summary. Counting trials and judging them belongs to the research process; the engine's job is to record them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Sweeps run in parallel with one manifest per variant and a summary stating the total number of variants tried."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Define a sweep file format for parameter ranges"
                - "Run sweep jobs across workers with one manifest each"
                - "Print the total variant count on every sweep summary"
                - "Clear out stale and failed sweep jobs @recurring(monthly:28)"
            - name: Results store and standard tear sheet output
              description: |-
                ## Purpose
                When every researcher plots results their own way, comparisons between studies become arguments about charts. A results store keyed by run identifier, plus one standard tear sheet with returns, drawdowns, turnover, costs, exposures and the limitations footer, makes any two runs comparable at a glance.

                ## Milestones
                1. Run outputs stored by run identifier in a columnar format with the manifest beside them.
                2. A standard tear sheet with equity, drawdown, turnover, cost breakdown and exposure panels.
                3. A comparison view placing two or more runs side by side.
                4. A retention rule for old run results.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every run is stored by identifier with its manifest and produces the standard tear sheet, and two runs can be compared in one view."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose a columnar storage format and folder layout for results"
                - "Build the standard tear sheet panels from stored results"
                - "Add a side by side comparison of two runs"
                - "Archive results past the retention rule @recurring(quarterly)"
            - name: Moving a notebook prototype into the engine
              description: |-
                ## Purpose
                Many strategies start as a notebook with its own quick backtest loop, and the numbers rarely survive the move into a proper engine. Porting one prototype deliberately, and explaining every difference in result, both tests the engine and shows researchers what their notebook was getting wrong.

                ## Milestones
                1. One notebook strategy chosen and its original results saved.
                2. The strategy rewritten as an engine strategy with the same parameters.
                3. Every difference in trades or returns explained, such as timing, costs or corporate actions.
                4. A short porting guide written for other researchers.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One notebook strategy runs in the engine with every difference from the original explained, and a porting guide is published."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Save the notebook's original trade list and metrics"
                - "Rewrite the strategy using the engine's strategy interface"
                - "Explain each difference between notebook and engine results"
                - "Ask the agent to turn your porting notes into a short guide"
            - name: First end-to-end run on a reference strategy
              description: |-
                ## Purpose
                Until a complete strategy runs from configuration to tear sheet, the engine is a set of tested parts. A first end-to-end run on a simple, well-understood reference such as a monthly rebalanced moving average rule proves the parts work together and gives a baseline every later release must reproduce.

                ## Milestones
                1. A reference strategy chosen that exercises data, signals, orders, fills, costs and corporate actions.
                2. A full run from configuration to tear sheet with no manual steps.
                3. The ledger reconciled and the trade list spot checked by hand for five trades.
                4. The run added to the regression suite as a permanent reference.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A reference strategy runs end to end from configuration to tear sheet, five trades are hand-checked, and the run is in the regression suite."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick a reference strategy that touches every engine module"
                - "Run it from configuration to tear sheet without manual steps"
                - "Hand check five trades against the raw data"
                - "Add the run to the regression suite"
            - name: Cross-check against a second backtesting tool
              description: |-
                ## Purpose
                Two independently written engines rarely make the same mistake. Running a simple strategy in your engine and in a second tool, with identical data and cost assumptions, and reconciling the trade lists exposes subtle timing and accounting differences that golden tests alone can miss.

                ## Milestones
                1. A second tool chosen and configured with the same data snapshot and costs.
                2. One strategy run in both with trade lists exported.
                3. Every trade-level difference explained as a bug in one tool or a documented convention.
                4. Final returns matching within a stated tolerance after conventions are aligned.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One strategy's trade list matches a second tool's after aligning documented conventions, with returns within a stated tolerance."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose a second tool and load the same data snapshot into it"
                - "Run the same strategy in both with matching cost settings"
                - "Diff the two trade lists and explain each difference"
                - "Record the conventions that differ between the two tools"
            - name: Version 1.0 engine sign-off review
              description: |-
                ## Purpose
                Declaring the engine ready for research decisions deserves a dated review, not a gradual drift into use. A sign-off meeting that walks through the spec, golden tests, cross-checks, benchmarks and the limitations register makes the first release a clear line, and records what was knowingly left out.

                ## Milestones
                1. A sign-off pack with spec coverage, test results, benchmark numbers and the limitations register.
                2. A review held with at least one researcher and one engineer who did not build the engine.
                3. Open blocking issues listed with owners, or confirmed as none.
                4. Version 1.0 tagged and announced with its known limitations.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A sign-off review is held with independent reviewers, its outcome recorded, and version 1.0 tagged with its limitations published."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book the sign-off review with two people who did not build the engine"
                - "Assemble the pack of tests, benchmarks and the limitations register"
                - "Record each blocking issue raised with an owner"
                - "Tag and announce version 1.0 with its known limitations"
            - name: Engine demo and handover session for researchers
              description: |-
                ## Purpose
                Most researchers will keep using their own scripts unless they see the engine answer a question they care about, quickly. A live demo using one of their real studies, followed by a hands-on session, is usually what moves a team from curiosity to daily use.

                ## Milestones
                1. One researcher's current study chosen and run in the engine ahead of the session.
                2. A one-hour demo covering configuration, running, the tear sheet and the limitations register.
                3. A hands-on half hour where each attendee runs a provided example.
                4. Questions and requests from the session added to the issue queue.

                ## Notes
                Start from the **Meeting notes** template to capture the requests.
              priority: low
              deadlineOffsetDays: 200
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A demo and hands-on session is held for researchers, each attendee completes an example run, and their requests are in the issue queue."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask one researcher for a current study to rebuild in the engine"
                - "Prepare a runnable example each attendee can complete in thirty minutes"
                - "Hold the demo and hands-on session"
                - "Log every request raised in the engine issue queue"
            - name: Post-incident review of a backtest bug
              description: |-
                ## Purpose
                Sooner or later a bug in the engine will be found to have flattered results someone relied on. A blameless review within a week, covering what was affected, how it was found and which test would have caught it, turns an embarrassing moment into a permanent safeguard.

                ## Milestones
                1. The list of runs and decisions affected by the bug identified from run manifests.
                2. Affected researchers told what changed and by roughly how much.
                3. A root cause and the missing test written up in one page.
                4. A new golden or property test added that fails on the old code.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A one-page review names the affected runs, the root cause and the new test, and that test fails on the pre-fix code."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find every run affected by the bug from the run manifests"
                - "Tell the affected researchers what changed"
                - "Write the one-page root cause review"
                - "Add a test that fails on the code before the fix"
            - name: Minimal engine for a solo personal researcher
              description: |-
                ## Purpose
                Someone testing ideas for their own small account does not need a team's engine, but does need the same honesty: next bar fills, real costs, corporate actions and a written stop rule. Building a small, well-tested engine in a weekend or two, then paper trading before any money, keeps a home setup from fooling its own author.

                ## Milestones
                1. A single-file or small-package engine with next bar fills and per-trade costs.
                2. Five golden tests including a split and a dividend passing.
                3. Risk limits, a sizing rule and a stop rule written into every run's configuration.
                4. A rule written down that no strategy goes live before a paper trading period.

                ## Notes
                Only use money you can afford to lose, and expect most strategies to fail out of sample. A home engine is for learning and testing, not a signal to trade.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A small personal engine passes five golden tests and every run configuration includes position limits, a sizing rule and a stop rule."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write the smallest engine that fills on the next bar with costs"
                - "Add golden tests for a split and a dividend"
                - "Put position limits and a stop rule in the default configuration"
                - "Run the golden tests before each weekend research session @recurring(weekly:sat)"
            - name: Researcher guide to extending the engine safely
              description: |-
                ## Purpose
                Researchers often need a new signal input, cost tweak or order rule faster than the engine team can deliver it, and quick patches are where bugs enter. A short guide and a set of extension points, such as custom data adapters and strategy hooks, let researchers add what they need without touching the ledger or the clock.

                ## Milestones
                1. Extension points documented for data adapters, signals, sizing rules and cost components.
                2. A worked example of adding a custom cost component with its tests.
                3. Rules stating which modules researchers must not change without engine review.
                4. A pull request checklist for researcher contributions.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "An extension guide with a worked example and a contribution checklist is published, and protected modules are listed in it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the extension points researchers can use safely"
                - "Write a worked example adding a custom cost component"
                - "Mark the ledger and clock modules as review required"
                - "Publish a pull request checklist for researcher changes"
            - name: Inheriting a legacy backtester on a new team
              description: |-
                ## Purpose
                Joining a team often means owning an engine whose author has left, with results everyone relies on and tests nobody trusts. Mapping how it really works, pinning its current outputs as regression baselines and listing its risks before changing anything protects the team's past research while you learn.

                ## Milestones
                1. A diagram of the legacy engine's main modules and data flow.
                2. Current outputs for five to ten key studies pinned as regression baselines.
                3. A risk list of untested areas, undocumented assumptions and fragile dependencies.
                4. A ninety-day plan agreed with the team lead for the first changes.

                ## Notes
                Change nothing that alters results until the baselines are pinned. The first job is to be able to tell when you break something.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The legacy engine has a module diagram, pinned baselines for at least five studies and a risk list, with a ninety-day plan agreed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the team which studies depend most on the legacy engine"
                - "Pin current outputs for those studies as regression baselines"
                - "Draw the module and data flow diagram from the code"
                - "Agree a ninety-day change plan with the team lead"
            - name: Student backtesting engine as a portfolio project
              description: |-
                ## Purpose
                For a student aiming at quant developer or researcher roles, a small engine with real tests says more than another strategy notebook with a big Sharpe ratio. A clean repository with an event loop, a ledger, golden tests and an honest write-up of its limits gives interviewers something concrete to probe.

                ## Milestones
                1. A public repository with an event loop, ledger, fill model and cost model.
                2. Golden and property tests running in continuous integration.
                3. A README explaining the design choices and the known limitations.
                4. A two-minute verbal walkthrough of the design practised for interviews.

                ## Notes
                Start from the **Portfolio piece** template. Leave performance claims out of the README; interviewers care about the engineering and the honesty.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A public engine repository with passing tests in continuous integration and a README covering design and limitations is linked from your CV."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Create the repository with a README stating scope and limits"
                - "Build the event loop, ledger and a next bar fill model"
                - "Add golden tests and continuous integration"
                - "Practise a two-minute design walkthrough out loud"
            - name: Order book replay simulator for intraday strategies
              description: |-
                ## Purpose
                Intraday and passive strategies depend on queue position, partial fills and the book moving away, which bar data cannot show. A replay simulator that rebuilds the order book from message data and estimates queue position for simulated orders is specialist work, and the only way to test such strategies with any realism.

                ## Milestones
                1. An order book rebuilt from message data and checked against exchange snapshots.
                2. Simulated orders placed in the queue with a stated queue position model.
                3. Fills generated only when the book trades through the simulated order's place in the queue.
                4. A validation comparing simulated passive fill rates with any available real fill records.

                ## Notes
                Simulated orders cannot change the real book's history, so large passive orders still look better than they would. Record that limitation in the register.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A replay simulator rebuilds books that match exchange snapshots and fills simulated orders using a documented queue position model."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Rebuild one day's order book from message data"
                - "Compare the rebuilt book with exchange snapshots at fixed times"
                - "Implement a queue position model for simulated orders"
                - "Validate passive fill rates against real fill records if any exist"
            - name: Shared strategy code path for backtest and live
              description: |-
                ## Purpose
                When a strategy is written once for the backtester and again for production, the two versions drift and the backtest stops describing what trades. Running the same strategy code in both, with only the clock, data feed and order gateway swapped, closes the most common gap between research and live results.

                ## Milestones
                1. Clock, data and order gateway interfaces that both the engine and the live system implement.
                2. One strategy running unchanged in backtest, paper and live modes.
                3. A daily check that the live decisions match a backtest replay of the same day.
                4. Any mode-specific code isolated behind the interfaces and listed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one strategy runs unchanged in backtest and paper modes, and a replay of a live day reproduces its decisions."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Define clock, data and order gateway interfaces shared by both modes"
                - "Run one strategy unchanged in backtest and paper modes"
                - "Replay a paper trading day in the engine and compare decisions"
                - "List every remaining piece of mode-specific code"
            - name: Options and multi-leg instrument support
              description: |-
                ## Purpose
                Options add expiries, exercise and assignment, multipliers, wide spreads and positions made of several legs that must be costed and margined together. Extending the engine for them is advanced work, worth doing only once the equity and futures core is trusted, and it needs its own golden tests for every life cycle event.

                ## Milestones
                1. Option instruments modelled with strike, expiry, type, style and multiplier.
                2. Expiry, exercise and assignment applied as engine events with cash and stock effects.
                3. Multi-leg orders filled and costed as one package with a stated spread assumption.
                4. Golden tests for an expiry in the money, an early assignment and a two-leg spread.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The engine handles option expiry, exercise and assignment and multi-leg fills, with golden tests for each life cycle event."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Add strike, expiry, style and multiplier to the instrument model"
                - "Apply expiry and assignment as dated engine events"
                - "Fill and cost a two-leg order as one package"
                - "Write golden tests for expiry, assignment and a spread"
            - name: Latency and data delay simulation
              description: |-
                ## Purpose
                Any signal that only works if orders arrive the instant data does is not a strategy, it is a timing artefact. Adding configurable data, decision and order latencies to the engine, and showing how results change as they grow, tells researchers how much speed an idea quietly assumes.

                ## Milestones
                1. Separate configurable delays for data arrival, strategy decision and order arrival.
                2. Fills priced at the market state after the total delay.
                3. A standard latency sweep showing results at several delay settings.
                4. Default delays agreed for each data resolution and written into the configuration.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Data, decision and order delays are configurable, fills use the post-delay market state, and a latency sweep is part of the standard output."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Add separate data, decision and order delay settings"
                - "Price fills at the market state after the total delay"
                - "Build a latency sweep with four delay settings"
                - "Agree default delays for daily, minute and tick studies"
---

# Backtesting Engine Build

This area is for engineers and researchers who build, extend or inherit the software that turns a strategy idea into a simulated track record. It runs from foundations (a requirements spec, the build or buy call, the architecture choice, the domain model, the clock, the data handler, golden tests and the accounting ledger), through the routines that keep the engine trustworthy, the skills behind fast and deterministic simulation, the features that make results realistic, the dated milestones of a first release, setups for a solo builder, a researcher, a new team member and a student, and specialist work on order book replay, shared live code and options.

The rhythms are a weekly look at the regression report and the issue queue, monthly releases, benchmarks, dependency updates, data contract and corporate action checks, and quarterly reviews of known limitations and live replay. An engine that reports a result is not a reason to trade it: most strategies fail out of sample, so the engine enforces risk limits, a position sizing rule and a written stop rule, and none of this is trading or investment advice. It pairs with the Product spec, Purchase decision, Operational checklist, Risk register, Meeting notes and Portfolio piece templates. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
