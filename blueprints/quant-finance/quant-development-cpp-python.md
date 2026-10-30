---
id: quant-finance.quant-development-cpp-python
name: Quant Development (C++ and Python)
description: "Locked Python environments, a disciplined C++ toolchain, numerical reference tests, stored benchmarks and profiling habits, plus the review rota and release routine that keep a research team's quant library fast and correct."
category: business
version: 1.0.0
tags: [quant-finance, quant-development-cpp-python, engineer, cpp, python, numerical-testing, profiling, pybind11]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - remediation-plan
    - onboarding-30-60-90
    - development-plan
    - portfolio-piece
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Quant Development (C++ and Python)
          description: "Writing production-quality quant code: Python research stacks, C++ for performance, testing numerical code, profiling and code review for research teams."
          projects:
            - name: Reproducible Python research environment with locked dependencies
              description: |-
                ## Purpose
                Researchers who rerun last quarter's notebook and get a different Sharpe ratio have usually been bitten by an unpinned NumPy, pandas or SciPy upgrade, not by the market. Locking every dependency, including the BLAS build underneath NumPy, means the same commit gives the same numbers on any machine and a new joiner is productive on day one.

                ## Milestones
                1. One environment manager chosen for the team, such as a conda-style tool or a lockfile-based pip tool, and the choice written down.
                2. A lockfile committed for the research environment, with exact versions and hashes for every package.
                3. The numerical backend (OpenBLAS, MKL or Accelerate) recorded and pinned alongside the Python packages.
                4. A fresh machine rebuilt from the lockfile alone and a reference notebook giving identical output.

                ## Notes
                Pin the Python minor version too. A jump from one minor version to the next can change hash ordering, pickling and the wheels available for compiled packages.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A committed lockfile rebuilds the research environment on a clean machine and a reference notebook reproduces its stored output exactly."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the packages and versions currently installed on your research machine"
                - "Choose one environment manager and write the reason in the repository readme"
                - "Generate and commit a lockfile that pins the BLAS backend as well"
                - "Rebuild on a clean container and compare a reference notebook's output byte for byte"
            - name: C++ toolchain, compiler flags and CMake baseline
              description: |-
                ## Purpose
                Quant C++ that builds with one developer's flags and crashes with another's is a common source of results nobody can reproduce, especially when -ffast-math or a different -march slips into a release build. A single CMake baseline with agreed compilers, language standard, warning levels and optimisation flags makes debug, release and sanitizer builds behave predictably everywhere.

                ## Milestones
                1. Supported compilers and versions listed, such as one GCC and one Clang release, with the C++ standard fixed.
                2. A CMake preset file defining debug, release, release-with-debug-info and sanitizer builds.
                3. Warnings raised to a high level and treated as errors in CI, with any exceptions documented.
                4. A written decision on fast-math, target architecture and link-time optimisation for release builds.

                ## Notes
                Fast-math lets the compiler reorder floating point operations and assume no NaNs, which can silently change prices. Leave it off unless a benchmark and a reference test both justify it for one target.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A committed CMake presets file builds all four configurations with the agreed compilers, and the fast-math and architecture decisions are written in the repository."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the compilers, versions and flags each developer currently builds with"
                - "Write a CMake presets file with debug, release and sanitizer configurations"
                - "Turn warnings into errors in CI and fix or document the existing ones"
                - "Record the team decision on fast-math and target architecture flags"
            - name: Inventory of quant libraries, owners and callers
              description: |-
                ## Purpose
                Most research teams run on a few shared libraries nobody fully owns: a curve builder, a calendar module, a pricing core and a dozen utility files copied between repositories. Listing each one with its language, owner, callers and test coverage shows where a bug would do the most damage and where duplicated code is quietly giving two different answers.

                ## Milestones
                1. Every shared library and widely copied module listed with its language and repository.
                2. An owner named for each, or a gap marked where nobody owns it.
                3. The main callers of each library recorded, including production jobs and research notebooks.
                4. Duplicated implementations of the same calculation flagged for later consolidation.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table lists every shared quant library with language, owner, main callers, test coverage and any duplicate implementation flagged."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Search the repositories for modules imported by more than one project"
                - "Fill in language, owner and main callers for each library found"
                - "Mark any calculation implemented twice in different places"
                - "Refresh the library inventory and its owners @recurring(yearly)"
            - name: Continuous integration building Python and C++ together
              description: |-
                ## Purpose
                Breaks slip through when the languages are built separately: a C++ change that compiles cleanly but breaks the Python bindings, or a Python change that only works against a stale compiled extension. One pipeline that builds the C++ core, compiles the bindings, installs the package and runs both test suites on every pull request catches those breaks before a researcher does.

                ## Milestones
                1. A CI pipeline that builds the C++ core and the Python extension from the same commit.
                2. Unit tests in both languages run on every pull request, with results reported on the review.
                3. Build caching in place so a typical pull request finishes within an agreed time, such as fifteen minutes.
                4. Merging blocked when the build or either test suite fails.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every pull request triggers a combined C++ and Python build with both test suites, merges are blocked on failure and median run time is recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write down the current manual steps to build and test both languages"
                - "Create a pipeline job that builds the C++ core and the Python extension together"
                - "Add a compiler cache and measure the median pull request run time"
                - "Protect the main branch so failed builds cannot be merged"
            - name: Numerical reference test suite for core analytics
              description: |-
                ## Purpose
                Unit tests that only check code runs say nothing about whether a price, a Greek or a curve point is right. A suite of reference cases, drawn from closed-form solutions, published examples and independently computed values, gives every later port, refactor and optimisation something firm to be measured against.

                ## Milestones
                1. The ten to twenty most used analytics identified, such as option pricers, discount factors and volatility interpolation.
                2. At least three reference cases per analytic with the source of each expected value recorded.
                3. Tolerances set per case from the precision policy, not loosened until tests pass.
                4. The suite running in CI in both the Python and C++ builds.

                ## Notes
                Include edge cases on purpose: zero time to expiry, deep in or out of the money, negative rates and very small volatilities are where implementations disagree.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least ten core analytics have three or more sourced reference cases each, running in CI for both languages with documented tolerances."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List the analytics called most often by production jobs"
                - "Collect closed-form or published expected values for the first three analytics"
                - "Write the reference cases with the source of each value in a comment"
                - "Review reference tolerances and add cases for any new analytic @recurring(quarterly)"
            - name: Coding standard for numerical C++ and Python
              description: |-
                ## Purpose
                Reviews stall when every pull request reopens the same arguments about raw loops versus vectorised code, exceptions versus error codes, or where units and day counts are documented. A short standard written for numerical work, with formatter and linter settings that enforce the mechanical parts, lets reviews focus on whether the maths is right.

                ## Milestones
                1. A formatter and linter configured for each language and run automatically.
                2. Rules written for numerical specifics: units in names or types, dtype choices, error handling and input validation.
                3. Conventions agreed for array shapes, index alignment in pandas and ownership in C++.
                4. The standard kept to two pages or fewer and linked from the review template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standard of two pages or fewer covers numerical conventions in both languages, with formatter and linter settings committed and enforced in CI."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the five review comments the team repeats most often"
                - "Commit formatter and linter settings for C++ and Python"
                - "Draft the numerical conventions section and circulate it for comment"
                - "Revisit the standard with the team and remove rules nobody follows @recurring(yearly)"
            - name: Benchmark harness with stored baselines
              description: |-
                ## Purpose
                Claims that a change made the pricer faster are worthless without a fixed benchmark run the same way every time. A harness that times the key workloads on a quiet machine, stores results by commit and reports the change against a baseline turns performance from an argument into a number.

                ## Milestones
                1. Five to ten benchmark workloads chosen that mirror real use, such as a portfolio revaluation or a curve rebuild.
                2. Benchmarks run with warm-up, repeated samples and reported medians and spread.
                3. Results stored by commit, machine and build type.
                4. A comparison report showing the change against the stored baseline for any branch.

                ## Notes
                Pin the CPU frequency or use a dedicated runner where you can. Shared CI machines can vary by twenty percent between runs, which hides real regressions.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A benchmark harness runs at least five representative workloads, stores medians by commit and produces a comparison against baseline for any branch."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick five workloads that match how production and research use the library"
                - "Wrap each workload in a benchmark with warm-up and repeated timing"
                - "Store results with commit, machine and build type"
                - "Produce a first baseline report on the main branch"
            - name: Precision, dtype and tolerance policy
              description: |-
                ## Purpose
                Mixed float32 and float64 arrays, integer overflow in timestamp arithmetic and tolerances chosen to make a test go green are behind many quiet numerical bugs. One written policy on default dtypes, where lower precision is allowed, how equality is tested and what relative and absolute tolerances mean saves every engineer from inventing their own.

                ## Milestones
                1. A default floating point type fixed for analytics, with any lower-precision exceptions listed.
                2. Rules for comparing floating point results using relative and absolute tolerances.
                3. Integer and timestamp types fixed for time arithmetic, with nanosecond overflow limits noted.
                4. Test helper functions in both languages that apply the policy.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written precision policy exists and both test suites compare floating point results only through shared helpers that apply it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search the test suites for exact equality checks on floating point values"
                - "Write the default dtype and tolerance rules in one short page"
                - "Add shared comparison helpers in Python and C++"
                - "Replace the exact equality checks found in the search"
            - name: Developer workstation and remote build setup
              description: |-
                ## Purpose
                Full C++ rebuilds that take twenty minutes on a laptop push people to skip tests and avoid refactors. Deciding where builds run, whether on a powerful workstation, a remote build host or a shared cache, and documenting the setup so a new engineer can follow it, buys back hours every week.

                ## Milestones
                1. Clean and incremental build times measured on the current setup.
                2. Options compared: local hardware, remote build host, distributed compilation and shared compiler cache.
                3. One setup chosen and documented step by step.
                4. Incremental build time after a typical header change measured again on the new setup.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Build times before and after are recorded, one setup is chosen and documented, and a new engineer can follow the guide without help."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Time a clean build and an incremental build after touching a common header"
                - "Compare a remote build host with a shared compiler cache"
                - "Write the chosen setup as a step-by-step guide in the repository"
                - "Ask the next new joiner to follow the guide and note where they got stuck"
            - name: Weekly performance regression check
              description: |-
                ## Purpose
                Performance rarely collapses in one commit; it drifts by two or three percent a week until the overnight batch misses its window. Reading the benchmark trend once a week, against a written regression threshold, catches the slide while the offending change is still fresh in someone's mind.

                ## Milestones
                1. A regression threshold agreed per benchmark, such as five percent on the median.
                2. The weekly benchmark report generated automatically from the main branch.
                3. Each regression above threshold traced to a commit and assigned an owner.
                4. Baselines refreshed only after a deliberate decision, never to hide a slowdown.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly benchmark report exists for each of the last eight weeks and every regression above threshold has a named owner and an outcome."
                cadence: rolling
              tasks:
                - "Write the regression threshold for each benchmark in the harness config"
                - "Schedule the benchmark run on the main branch every Sunday night"
                - "Review the weekly benchmark report and assign any regression above threshold @recurring(weekly:mon)"
                - "Record why each accepted baseline change was made"
            - name: Monthly dependency and compiler upgrade window
              description: |-
                ## Purpose
                Teams that never upgrade end up stuck on a Python or compiler version their libraries no longer support, then face a painful jump all at once. A small monthly window to bump dependencies, rerun the reference suite and benchmarks, and either merge or record why not keeps the gap small and the risk visible.

                ## Milestones
                1. A fixed day each month reserved for dependency and toolchain updates.
                2. Each upgrade tested against the numerical reference suite and the benchmark harness.
                3. Packages that cannot be upgraded listed with the reason and a revisit date.
                4. Release notes of NumPy, pandas and the compiler skimmed for numerical behaviour changes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each of the last three months has an upgrade record listing what was bumped, the reference and benchmark results, and anything held back with a reason."
                cadence: rolling
              tasks:
                - "List the dependencies more than one major version behind"
                - "Bump dependencies on a branch and run reference tests and benchmarks @recurring(monthly:12)"
                - "Skim upstream release notes for changes to defaults and numerical behaviour"
                - "Record held-back packages with a reason and a revisit month"
            - name: Review rota for research pull requests
              description: |-
                ## Purpose
                Researchers' pull requests sit unreviewed for days when review depends on whoever happens to be free, and then get merged with a thumbs up. A named reviewer each week, with a target turnaround and a short checklist for numerical code, keeps research moving without lowering the bar on correctness and speed.

                ## Milestones
                1. A rota naming one primary reviewer from the development team each week.
                2. A turnaround target agreed, such as first comments within one working day.
                3. A review checklist covering numerics, complexity, memory and test evidence.
                4. Review turnaround measured over a month and discussed with the researchers.

                ## Notes
                This project is about developers reviewing research changes to shared code. How researchers structure their own notebooks and repositories belongs to research code quality.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A published weekly rota and review checklist exist, and median time to first review comment over the last month is recorded."
                cadence: rolling
              tasks:
                - "Publish a review rota covering the next eight weeks"
                - "Write a ten-line checklist for reviewing numerical changes"
                - "Hand over the open review queue to the next reviewer @recurring(weekly:thu)"
                - "Measure median time to first review comment for the month"
            - name: Scheduled sanitizer and static analysis runs
              description: |-
                ## Purpose
                Uninitialised memory, out-of-bounds reads and data races in C++ often produce prices that are wrong only on some machines or some days. Running address, undefined behaviour and thread sanitizers plus a static analyser on a schedule finds these before they surface as a mysterious overnight mismatch.

                ## Milestones
                1. Address and undefined behaviour sanitizer builds running the full C++ test suite.
                2. A thread sanitizer run over the multithreaded components.
                3. A static analyser such as clang-tidy run with an agreed rule set.
                4. Every new finding triaged into fix, suppress with reason, or false positive.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sanitizer and static analysis jobs run weekly, and every open finding has a triage outcome recorded within one week of appearing."
                cadence: rolling
              tasks:
                - "Add address and undefined behaviour sanitizer builds to the CI config"
                - "Run the thread sanitizer over the parallel pricing components"
                - "Triage new sanitizer and analyser findings from the scheduled run @recurring(weekly:wed)"
                - "Keep a suppressions file with a reason beside every entry"
            - name: Flaky and slow test triage
              description: |-
                ## Purpose
                Tests that fail one run in twenty teach everyone to press rerun, and soon a real numerical failure gets rerun away too. Reviewing flaky and slow tests each month, and fixing the cause rather than widening a tolerance, keeps the suite worth trusting.

                ## Milestones
                1. Test runs tracked so flaky tests are identified by failure rate, not memory.
                2. The ten slowest tests listed with their run time.
                3. Each flaky test given a cause: random seed, timing, ordering or a real bug.
                4. Fixes merged or the test quarantined with an owner and a date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly triage note lists flaky tests with causes and owners, and no test stays quarantined for more than two months."
                cadence: rolling
              tasks:
                - "Export test results from the last month of CI runs"
                - "Rank tests by failure rate and by run time"
                - "Triage flaky and slow tests and assign owners @recurring(monthly:20)"
                - "Fix the cause of the worst flaky test instead of loosening its tolerance"
            - name: Release tagging and changelog for the quant library
              description: |-
                ## Purpose
                When a production job and a research notebook both say they use the pricing library but run different commits, nobody can explain why their numbers differ. A monthly tagged release with a changelog that flags any change in numerical output gives researchers and production a shared, named version to point at.

                ## Milestones
                1. A versioning scheme chosen and written down, such as semantic versioning.
                2. A changelog with a separate section for changes that alter numerical results.
                3. Releases tagged and built as installable packages on a regular day.
                4. Production jobs and research environments recording the library version they ran with.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The last three monthly releases are tagged with changelogs, each listing any change to numerical output separately."
                cadence: cyclic
              tasks:
                - "Write the versioning rule and add it to the contributor guide"
                - "Add a numerical output changes section to the changelog"
                - "Tag a release and publish the changelog @recurring(monthly:5)"
                - "Make production jobs log the library version at start-up"
            - name: Quarterly technical debt review with researchers
              description: |-
                ## Purpose
                Debt in quant code is easy to list and hard to prioritise, because the developer sees the ugly code and the researcher sees the slow workflow. Meeting the researchers once a quarter to rank debt by how much research time it costs gets the agreed top three items funded instead of a long list nobody reads.

                ## Milestones
                1. A debt list kept in one place with a rough cost in hours lost per month.
                2. Researchers asked beforehand which slow or fragile parts cost them most.
                3. Three items ranked and agreed for the coming quarter.
                4. Last quarter's three items reviewed for whether they were done and helped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter has a recorded meeting note with three agreed debt items, owners, and an outcome for the previous quarter's three."
                cadence: cyclic
              tasks:
                - "Start a single debt list with an hours-lost estimate per item"
                - "Ask each researcher for the slowest step in their weekly workflow"
                - "Hold the debt ranking meeting and agree three items @recurring(quarterly)"
                - "Check last quarter's items were completed and measure the time saved"
            - name: Production numerics incident log
              description: |-
                ## Purpose
                Every NaN in an overnight risk run, a price that jumps after a library upgrade or a curve that fails to build on a holiday teaches something, but only if it is written down. Logging every numerical incident with cause, detection and fix shows which kinds of bug keep recurring and which tests would have caught them.

                ## Milestones
                1. A short incident template: what was wrong, how it was found, cause, fix and missing test.
                2. Every numerical incident in production recorded within two working days.
                3. Each entry linked to the test added to stop it recurring.
                4. A monthly read-through that groups incidents by cause.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every production numerical incident in the last quarter has a log entry with cause, fix and the regression test added."
                cadence: rolling
              tasks:
                - "Create the incident template in the team wiki"
                - "Back-fill the last three incidents people can remember"
                - "Group the month's incidents by cause and note any missing test @recurring(monthly:28)"
                - "Link each entry to the pull request with its regression test"
            - name: Developer support hours for researchers
              description: |-
                ## Purpose
                Researchers who cannot get quick help with a segfault, a slow groupby or a binding error either lose a day or write a workaround the developers later have to unpick. A fixed weekly slot where they can bring code problems costs a couple of hours and surfaces the library's real pain points early.

                ## Milestones
                1. A weekly support slot published, in person or by call.
                2. Each question logged in a line with the area of the library it touched.
                3. Recurring questions turned into documentation or library fixes.
                4. Attendance and themes reviewed after two months to decide whether to keep the slot.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A weekly support slot has run for at least two months with a question log, and at least two recurring questions have become docs or fixes."
                cadence: rolling
              tasks:
                - "Announce the weekly support slot and how to book it"
                - "Run the support hour and log each question in one line @recurring(weekly:tue)"
                - "Turn the most repeated question into a short how-to page"
                - "Review the question log after eight weeks"
            - name: Monthly build time and CI cost review
              description: |-
                ## Purpose
                CI minutes, cloud runners and build caches cost real money, and slow pipelines cost more in waiting engineers. Looking at build durations, cache hit rates and spend once a month shows whether the pipeline is getting slower and which jobs to split, cache or drop.

                ## Milestones
                1. Median and slowest pipeline durations recorded for the month.
                2. Compiler cache hit rate and runner spend captured.
                3. The single slowest stage identified with a proposed fix.
                4. A three-month trend kept so drift is visible.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly note records pipeline duration, cache hit rate and spend for at least three consecutive months, each naming the slowest stage."
                cadence: rolling
              tasks:
                - "Find where pipeline durations and runner spend are reported"
                - "Record duration, cache hit rate and spend for the month @recurring(monthly:26)"
                - "Name the slowest stage and propose one change to it"
                - "Plot the three-month trend in the team dashboard"
            - name: Vectorised NumPy and pandas idioms for research code
              description: |-
                ## Purpose
                Most slow research Python is slow because of row-by-row loops, apply calls and repeated reindexing, not because Python is slow. Working through broadcasting, boolean masks, groupby transforms and avoiding chained assignment lets you speed up researchers' code by an order of magnitude before anyone mentions C++.

                ## Milestones
                1. Broadcasting rules and memory views versus copies understood and written up with examples.
                2. Three loops from real research code rewritten with vectorised operations and timed.
                3. Index alignment pitfalls in pandas, such as silent NaNs after arithmetic, documented with a test.
                4. A short internal guide of idioms shared with the researchers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three real research loops are rewritten with timings before and after recorded, and a short idioms guide is published to the team."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find three loops in research code that iterate over DataFrame rows"
                - "Rewrite each with broadcasting or groupby transforms and time both versions"
                - "Write a test showing a silent NaN from misaligned indexes"
                - "Ask the agent to draft an idioms guide from your before and after examples"
            - name: Polars and Arrow for larger research data sets
              description: |-
                ## Purpose
                Daily bars for a global equity universe fit in pandas; minute bars for ten years do not, and researchers start sampling to make things run. Learning a columnar, lazily evaluated stack such as Polars over Arrow or Parquet files gives you a tested option for data sets that are too big for memory, without moving to a cluster.

                ## Milestones
                1. One real research query rewritten in Polars lazy mode and compared with the pandas version.
                2. Memory use and run time recorded for both on the same data.
                3. Differences in null handling, sorting and joins between pandas and Polars written down.
                4. A recommendation on when the team should reach for each.

                ## Notes
                Results can differ subtly between libraries on nulls and ties. Compare outputs row by row before declaring a rewrite equivalent.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of one real query in pandas and Polars records run time, memory, output differences and a recommendation for the team."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick one research query that struggles with memory in pandas"
                - "Rewrite it with Polars lazy frames reading Parquet"
                - "Compare outputs row by row and note null and tie differences"
                - "Write a half-page recommendation on when to use each library"
            - name: Numba and Cython for hot loops
              description: |-
                ## Purpose
                Some algorithms are inherently sequential, such as path-dependent payoffs, order book replays and recursive filters, and no amount of vectorising will help. Learning when Numba's just-in-time compilation is enough and when Cython or a C++ extension is the better call lets you speed up a loop without rewriting the module around it.

                ## Milestones
                1. One sequential loop compiled with Numba and timed, including first-call compile time.
                2. The same loop written in Cython and compared for speed, build complexity and debuggability.
                3. Limits recorded: unsupported types, object mode fallbacks and caching of compiled functions.
                4. A rule of thumb written for the team on choosing between them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One loop implemented in plain Python, Numba and Cython with timings and a written rule for choosing between them."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one sequential loop from the library that resists vectorising"
                - "Compile it with Numba and record compile time and steady-state time"
                - "Write the same loop in Cython and compare build and debugging effort"
                - "Write a five-line rule of thumb for the team wiki"
            - name: Modern C++ for numerical work
              description: |-
                ## Purpose
                Older-style C++, full of raw pointers, manual memory management and deep inheritance, is slow to change and easy to break. Practising value semantics, RAII, templates and concepts, spans and ranges on numerical examples gives you code that is both fast and easier for the next person to review.

                ## Milestones
                1. One textbook pricing routine rewritten in modern style with no raw owning pointers.
                2. Templates or concepts used to make one routine work for both float and double.
                3. Move semantics and copy elision checked with a small benchmark on large vectors.
                4. A one-page summary of the idioms the team will adopt.

                ## Notes
                Pick one recent C++ standard the compilers fully support and stick to it. Half-supported features cost more in build trouble than they save.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pricing routine is rewritten in modern C++ with tests passing against the reference suite, and a one-page idioms summary is shared."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose one older pricing routine with manual memory management"
                - "Rewrite it with value types, RAII and spans"
                - "Make it generic over float and double with a template or concept"
                - "Run it against the reference suite and write the idioms summary"
            - name: Python bindings with pybind11 or nanobind
              description: |-
                ## Purpose
                A fast C++ core is only useful to researchers if calling it from Python feels natural: NumPy arrays in, NumPy arrays out, sensible errors and no copies on large inputs. Learning a binding library properly, including buffer protocols, ownership and releasing the GIL, avoids the slow, crash-prone wrappers many teams live with.

                ## Milestones
                1. One C++ function exposed to Python taking and returning NumPy arrays without copying.
                2. C++ exceptions mapped to clear Python exceptions with useful messages.
                3. The GIL released around long computations and threaded calls tested.
                4. Type stubs generated so researchers get autocompletion and type checks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bound C++ function accepts and returns NumPy arrays without copying, maps exceptions, releases the GIL and ships with type stubs."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Compare pybind11 and nanobind on build time and features you need"
                - "Bind one C++ function that takes a NumPy array by reference"
                - "Map C++ exceptions to Python exceptions and test the messages"
                - "Release the GIL in the binding and test calls from several threads"
            - name: Floating point error, cancellation and summation
              description: |-
                ## Purpose
                Subtracting two nearly equal numbers, summing millions of small returns or computing a variance the naive way can lose most of a result's significant digits. Studying where floating point error comes from, and practising compensated summation and stable formulas, explains many of the small mismatches between Python and C++ results that otherwise waste days.

                ## Milestones
                1. Machine epsilon, rounding and catastrophic cancellation worked through with small examples.
                2. Naive, pairwise and compensated summation compared on a long return series.
                3. A one-pass variance computed both naively and with a stable algorithm such as Welford's.
                4. Library functions using unstable formulas listed for fixing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written examples show cancellation and summation error with measured digit loss, and a list of unstable formulas in the library is recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Work through a short numerical analysis chapter on floating point error"
                - "Compare naive and compensated summation on ten million small values"
                - "Implement a stable one-pass variance and test it against a two-pass version"
                - "Search the library for variance and difference formulas that cancel badly"
            - name: Profiling Python and C++ with sampling profilers
              description: |-
                ## Purpose
                Engineers who optimise by intuition usually speed up the part that was never slow. Learning a sampling profiler for Python such as py-spy, a native profiler such as perf, and how to read flame graphs across the Python and C++ boundary, makes every later optimisation start from evidence.

                ## Milestones
                1. One research job profiled in Python with a sampling profiler and a flame graph saved.
                2. A C++ hot path profiled with a native profiler at function and line level.
                3. Mixed Python and native stacks captured in a single profile.
                4. A short guide written on how to profile each kind of job the team runs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Flame graphs exist for one Python job and one C++ hot path, and a written profiling guide covers each kind of team workload."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Profile one slow research script with a sampling profiler"
                - "Profile a C++ benchmark with a native profiler and save the flame graph"
                - "Capture a mixed Python and native stack across the bindings"
                - "Profile one slow job a researcher reports and share the flame graph @recurring(monthly:9)"
            - name: Memory layout, cache behaviour and SIMD basics
              description: |-
                ## Purpose
                Walking memory in the wrong order can make a Monte Carlo engine run several times slower than the same maths laid out well. Understanding row versus column order, arrays of structures versus structures of arrays, cache lines and when the compiler vectorises a loop explains most of the speed differences profilers show.

                ## Milestones
                1. A loop over a large matrix timed in row and column order with the difference explained.
                2. One data structure converted from array of structures to structure of arrays and benchmarked.
                3. Compiler vectorisation reports read for a hot loop and a missed vectorisation fixed.
                4. Findings written up with numbers from your own machine.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Benchmarks on your own machine show the effect of traversal order and data layout, and one missed vectorisation is fixed and measured."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Time a matrix traversal in row and column order"
                - "Convert one path simulation structure to structure of arrays"
                - "Turn on compiler vectorisation reports for one hot loop"
                - "Write up the measured speed-ups with machine details"
            - name: Processes, threads and the GIL in research code
              description: |-
                ## Purpose
                Parameter sweeps, cross-validation folds and portfolio revaluations are embarrassingly parallel, yet many research jobs still run on one core. Knowing when to use processes, when threads help because native code releases the GIL, and how to keep random number streams independent across workers turns an overnight sweep into an hour.

                ## Milestones
                1. One parameter sweep parallelised with a process pool and timed against the serial version.
                2. A threaded version tested using a C++ function that releases the GIL.
                3. Independent random streams per worker set up and checked for reproducibility.
                4. Overheads written down: pickling, memory per process and oversubscription with BLAS threads.

                ## Notes
                Set the BLAS thread count to one inside worker processes, or eight workers each starting eight BLAS threads will fight over the cores.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One sweep runs in parallel with reproducible random streams, and timings for serial, process and thread versions are recorded with overheads explained."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick a parameter sweep that currently runs on one core"
                - "Run it with a process pool and record the speed-up"
                - "Give each worker its own spawned random stream and rerun twice"
                - "Limit BLAS threads per worker and measure the difference"
            - name: Porting a slow Python analytic into native code
              description: |-
                ## Purpose
                Once profiling shows one function dominates a job and vectorising has run out, a careful port to C++ is often worth a ten to hundred times speed-up. Doing one port end to end, with the Python version kept as the reference and both run against the same tests, sets the pattern every later port follows.

                ## Milestones
                1. A profile showing the function's share of total run time before the port.
                2. The C++ version written, bound to Python and passing the same tests as the original.
                3. Outputs compared on a large random input set within the precision policy.
                4. The speed-up measured end to end on the real job, not only the function.

                ## Notes
                Keep the Python implementation in the test suite as the reference after the port. It is the cheapest independent check you will ever have.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ported function passes the original tests, matches the Python reference on a large random input set, and the end-to-end job speed-up is recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Profile the job and record the function's share of run time"
                - "Write the C++ version and bind it to Python"
                - "Compare outputs with the Python version on ten thousand random inputs"
                - "Measure the real job's run time before and after the port"
            - name: Deciding which code moves from Python into C++ and why
              description: |-
                ## Purpose
                Without a rule, teams either rewrite everything in C++ and slow research to a crawl, or keep everything in Python until production cannot keep up. A written decision on which layers belong in which language, with the evidence that moves a component across, ends the debate one pull request at a time.

                ## Milestones
                1. The library's components listed by layer: data handling, analytics core, orchestration and reporting.
                2. Criteria written for moving a component to C++, such as share of run time, call frequency and stability of the maths.
                3. Each component assigned a language with a one-line reason.
                4. The decision agreed with the research lead and stored with the coding standard.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written language boundary lists each component, its language and reason, and the criteria for moving one, agreed with the research lead."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the library's components and which language each uses today"
                - "Write three criteria for moving a component into C++"
                - "Assign each component a language with a one-line reason"
                - "Review the boundary with the research lead and record the decision"
            - name: Choosing linear algebra, RNG and numerical libraries
              description: |-
                ## Purpose
                Writing your own matrix decomposition or random number generator is rarely a good use of time, but the choice of library sets licence terms, performance and reproducibility for years. Comparing candidates such as Eigen, a vendor BLAS, a commercial numerical library and the standard random engines on the same criteria gives the team a deliberate choice instead of an accident.

                ## Milestones
                1. Requirements written: operations needed, platforms, licence limits and reproducibility needs.
                2. Two or three candidates per need benchmarked on the team's own workloads.
                3. Licence terms checked with whoever approves software in your firm.
                4. One choice per need recorded with the reasons and the alternatives rejected.

                ## Notes
                Start from the **Purchase decision** template. Check licence terms for commercial use and redistribution before writing code against a library.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names one library per need with benchmark results, licence approval and the rejected alternatives."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the requirements for linear algebra and random number generation"
                - "Benchmark two candidates per need on a team workload"
                - "Send the licence terms to whoever approves third-party software"
                - "Record the chosen library and the rejected alternatives"
            - name: Reproducible random number scheme across the library
              description: |-
                ## Purpose
                Monte Carlo prices that change every run, or change when the number of threads changes, make it impossible to tell a bug from noise. A single scheme for seeding, spawning independent streams and logging seeds, used in both Python and C++, makes simulations repeatable while keeping streams statistically independent.

                ## Milestones
                1. Every place the library creates a random generator found and listed.
                2. One seeding and stream-spawning approach chosen for each language and documented.
                3. Global and implicit seeding removed in favour of generators passed in explicitly.
                4. A test proving a simulation gives identical results across thread counts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All random generation goes through the documented scheme, and a test shows identical Monte Carlo output for one, four and sixteen threads."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Search both codebases for global seeding and default random engines"
                - "Document one seeding and stream-spawning approach per language"
                - "Refactor generators to be passed in explicitly"
                - "Add a test that compares output across one, four and sixteen threads"
            - name: Property-based tests for pricing invariants
              description: |-
                ## Purpose
                Reference cases check a handful of points; pricing models must also obey rules everywhere, such as put-call parity, monotonicity in strike, prices within no-arbitrage bounds and Greeks matching finite differences. Property-based tests generate thousands of inputs to hunt for the corner where those rules break.

                ## Milestones
                1. Five invariants written down for the core pricers, with the inputs they should hold for.
                2. Property-based tests generating inputs within sensible ranges for each invariant.
                3. Every counterexample found either fixed or recorded as an accepted model limit.
                4. The property tests running in CI with a fixed time budget.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least five pricing invariants have property-based tests in CI, and every counterexample found has a fix or a recorded limit."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write five invariants the core pricers must satisfy"
                - "Add property-based tests with bounded input ranges"
                - "Record each counterexample and decide fix or accepted limit"
                - "Set a time budget so property tests stay fast in CI"
            - name: Packaging the quant library as binary wheels
              description: |-
                ## Purpose
                Compiling the C++ extension by hand costs each researcher an afternoon of compiler errors and leaves the team on slightly different builds. Publishing prebuilt wheels to an internal package index, for each supported platform and Python version, makes installation one command and guarantees everyone runs the same compiled code.

                ## Milestones
                1. A build backend chosen for mixed C++ and Python, such as scikit-build-core.
                2. Wheels built in CI for each supported operating system and Python version.
                3. Wheels published to an internal package index on each tagged release.
                4. Installation from the index tested in a clean environment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Tagged releases publish wheels for every supported platform and Python version to an internal index, and a clean install passes the test suite."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the platforms and Python versions researchers actually use"
                - "Move the build to a backend that drives CMake"
                - "Build wheels for each platform in CI on tagged releases"
                - "Install from the internal index in a clean container and run the tests"
            - name: Consolidating duplicated date and calendar utilities
              description: |-
                ## Purpose
                Day count conventions, business day adjustment and holiday calendars are often reimplemented in every repository, and two versions that disagree on a single holiday can shift a coupon date and a price. Consolidating them into one tested module, used from both Python and C++, removes a whole class of small, expensive mismatches.

                ## Milestones
                1. All implementations of day counts, roll conventions and holiday calendars found and listed.
                2. Differences between them tested and documented.
                3. One implementation chosen or written, with tests against published convention examples.
                4. Callers migrated and the duplicates deleted.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One date and calendar module serves both languages, its tests cover each convention used, and the duplicates are removed from all repositories."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Search all repositories for day count and holiday calendar code"
                - "Run each implementation on the same dates and list disagreements"
                - "Test the chosen module against published convention examples"
                - "Migrate callers one repository at a time and delete the duplicates"
            - name: Retiring a dead or duplicated numerical routine
              description: |-
                ## Purpose
                Old pricers, abandoned interpolation schemes and second copies of the same function stay in the library because nobody is sure who still calls them. Removing one deliberately, with usage checks and a deprecation period, shrinks what every reviewer and new joiner has to understand.

                ## Milestones
                1. One candidate routine chosen from the library inventory.
                2. Callers found across production jobs, research repositories and scheduled tasks.
                3. A deprecation warning released with a removal date announced to the researchers.
                4. The routine removed in a later release with the changelog noting it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One routine is deprecated with a warning, announced, and removed in a later tagged release noted in the changelog."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose one unused or duplicated routine from the inventory"
                - "Search production jobs and research repositories for its callers"
                - "Release a deprecation warning and announce the removal date"
                - "Remove the routine in the next release after the date"
            - name: Python or compiler major version migration
              description: |-
                ## Purpose
                Moving to a new Python minor version or a new compiler release touches every compiled extension, every pinned dependency and sometimes numerical results. Running it as a planned event, with a compatibility check, a parallel run and a cut-over date, avoids the week when nothing builds and researchers cannot work.

                ## Milestones
                1. Every dependency checked for support of the target version.
                2. The full test and reference suites passing on the new version in a parallel CI job.
                3. Production outputs compared between old and new versions on the same inputs.
                4. A cut-over date announced, completed and the old version removed from CI.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The library builds and passes all suites on the new version, production outputs match within tolerance, and cut-over happens on the announced date."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Check each pinned dependency for support of the target version"
                - "Add a parallel CI job on the new version"
                - "Compare a night of production outputs between the two versions"
                - "Announce the cut-over date to researchers and production owners"
            - name: First stable API release of the quant library
              description: |-
                ## Purpose
                Researchers hesitate to build on a library whose functions are renamed every month, and developers hesitate to change one that has no agreed public surface. Declaring a first stable release, with the public API listed and a deprecation policy, lets both sides move faster with fewer surprises.

                ## Milestones
                1. Public functions and classes listed and everything else marked internal.
                2. Names, argument orders and units reviewed for consistency before freezing.
                3. A deprecation policy written, such as two releases of warnings before removal.
                4. The stable release tagged, published and announced with documentation.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A stable release is tagged with a documented public API and a written deprecation policy, announced to all research users."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Generate a list of every symbol imported by research code"
                - "Mark the public API and move everything else behind an internal module"
                - "Write the deprecation policy into the contributor guide"
                - "Tag the stable release and send the announcement with docs"
            - name: Performance sprint on the overnight batch
              description: |-
                ## Purpose
                When the overnight risk or signal batch starts finishing close to the morning deadline, a focused two-week sprint usually finds a few large wins hiding in plain sight. Profiling the whole batch, fixing the top items and proving outputs are unchanged buys back headroom before it becomes an incident.

                ## Milestones
                1. The batch's current run time and its deadline margin recorded.
                2. A whole-batch profile identifying the five largest time consumers.
                3. Fixes merged for the top items with outputs matching within tolerance.
                4. New run time and margin recorded and shared with the batch owners.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The overnight batch's run time is reduced by an agreed target, with outputs matching the previous version within tolerance on three consecutive nights."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Record the batch run time and margin over the last ten nights"
                - "Profile a full batch run and rank the five largest consumers"
                - "Fix the top items and compare outputs with the previous night"
                - "Report the new run time and margin to the batch owners"
            - name: Production readiness review of research model code
              description: |-
                ## Purpose
                A researcher's model that works in a notebook is not ready to run unattended every night: inputs go missing, edge cases appear and nobody is watching. A structured review before promotion, covering tests, error handling, performance, logging and ownership, catches the problems while they are cheap to fix.

                ## Milestones
                1. A readiness checklist agreed with the research lead.
                2. The model's code reviewed against the checklist with gaps listed.
                3. Gaps fixed or accepted in writing with an owner.
                4. A sign-off recorded before the code runs in production.

                ## Notes
                Start from the **Operational checklist** template. Model validation of the maths itself belongs to the model risk process; this review covers the engineering.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The model has a completed readiness checklist with every gap fixed or accepted by a named owner, signed off before production use."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the readiness checklist and agree it with the research lead"
                - "Review the model code against each checklist item"
                - "List the gaps with an owner and fix or acceptance for each"
                - "Record the sign-off date before the first production run"
            - name: Post-incident review after a numerical bug reached production
              description: |-
                ## Purpose
                When a wrong price, risk number or signal has already been used, the urge is to patch it and move on. A blameless review within a week, covering how the bug was introduced, why tests missed it and how it was found, turns a costly mistake into a stronger test suite and a better review checklist.

                ## Milestones
                1. A timeline written from the change that introduced the bug to its fix.
                2. The reason each existing test or review missed it recorded.
                3. Actions agreed: new tests, checklist items or process changes, each with an owner.
                4. The actions completed and the incident log entry closed.

                ## Notes
                Start from the **Remediation plan** template. Keep the review about the system, not the person who made the change.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written review with timeline, missed-detection reasons and owned actions is completed within a week, and every action is closed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the timeline from the faulty commit to the fix"
                - "Ask the agent to draft the review summary from the timeline and logs"
                - "Agree actions with owners in a short blameless meeting"
                - "Close the incident log entry once each action is done"
            - name: First 90 days as a quant developer on a research team
              description: |-
                ## Purpose
                New quant developers are often handed a large, lightly documented codebase and a queue of requests from researchers who each think theirs is urgent. A 90-day plan that maps the library, builds relationships with the researchers and ships one visible improvement makes the first quarter count.

                ## Milestones
                1. By day 30, the build, tests and main libraries running locally and understood.
                2. By day 45, a one-to-one held with each researcher about their biggest code pain.
                3. By day 60, a first improvement merged, such as a speed-up or a missing test.
                4. By day 90, a written view of the library's three biggest risks agreed with your manager.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within 90 days, one improvement is merged, each researcher has been met, and a written three-risk view is agreed with your manager."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Build the library and run its tests on your machine"
                - "Book a half-hour with each researcher about their code pain points"
                - "Pick one small improvement to ship before day 60"
                - "Write the three biggest library risks for your day 90 check-in"
            - name: Moving from software engineering into quant development
              description: |-
                ## Purpose
                Engineers from web, games or infrastructure backgrounds bring strong code skills but often lack the finance and numerical intuition to spot a wrong answer. A structured plan to learn enough pricing, statistics and market conventions, alongside numerical computing, lets you contribute on correctness, not only on speed.

                ## Milestones
                1. Gaps listed honestly across finance basics, numerical methods and the team's asset classes.
                2. One introductory derivatives or market text and one numerical methods text worked through.
                3. A small pricing or backtest project built and tested against known results.
                4. A conversation with a researcher where you explain a model's assumptions and limits.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two texts are worked through, a small pricing project matches published results, and a written gap list shows each gap closed or scheduled."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Write a gap list across finance, numerics and your team's markets"
                - "Choose one derivatives text and one numerical methods text"
                - "Build a small pricer and test it against published examples"
                - "Ask a researcher to walk you through one model's assumptions"
            - name: Sole developer supporting a small fund's researchers
              description: |-
                ## Purpose
                At a small fund one engineer may own the research stack, the pricing code, the data pipelines and the build all at once. Deciding what to own fully, what to keep simple and what to buy, and protecting a fixed block of time for maintenance, keeps one person from becoming the single point of failure for everything.

                ## Milestones
                1. Everything you are responsible for listed, with a rough weekly time cost.
                2. Each item marked as own, simplify or buy, agreed with the fund's research lead.
                3. A fixed maintenance block protected in your week.
                4. A minimal runbook written so someone else could keep critical jobs running for a week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A responsibility list with own, simplify or buy decisions is agreed with the research lead, and a one-week cover runbook exists."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every system you own and the hours it takes each week"
                - "Mark each one own, simplify or buy and review with the research lead"
                - "Block a weekly maintenance slot in your calendar"
                - "Review the responsibility list and update the cover runbook @recurring(monthly:3)"
            - name: Leading a small quant development team
              description: |-
                ## Purpose
                Moving from writing the code to leading three or four developers means your output is now the team's throughput and the library's reliability. Setting clear ownership, a steady one-to-one rhythm and a shared view of priorities with the research lead keeps the team building the right things and growing as engineers.

                ## Milestones
                1. Each library component owned by a named developer with a backup.
                2. Regular one-to-ones running with notes and agreed actions.
                3. A monthly priorities conversation with the research lead recorded.
                4. Each developer's growth goal for the year written down and reviewed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every component has an owner and backup, one-to-ones have notes for the last two months, and each developer has a written growth goal."
                cadence: rolling
              tasks:
                - "Assign an owner and a backup to every library component"
                - "Hold one-to-ones with each developer and note actions @recurring(weekly:fri)"
                - "Meet the research lead to agree next month's priorities @recurring(monthly:16)"
                - "Write each developer's growth goal with them"
            - name: Handover pack before changing desks or employers
              description: |-
                ## Purpose
                Quant code often depends on knowledge that lives only in its author's head: why a tolerance is what it is, which job breaks on holidays, what the strange flag does. Writing a handover pack for your employer before you move on protects the team and your reputation, and keeps every line of proprietary code where it belongs.

                ## Milestones
                1. The components you own listed with their status, known issues and quirks.
                2. Undocumented operational knowledge written down, such as manual steps and holiday behaviour.
                3. A successor walked through each component with questions answered.
                4. The pack stored in the employer's systems, with no code or data taken with you.

                ## Notes
                Read your employment contract and any IP or confidentiality clauses. Code, data and documents written for an employer stay with that employer; take only your own general skills.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A handover pack covers every component you own, a successor has been walked through it, and it is stored only in the employer's systems."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List each component you own with status and known issues"
                - "Write down manual steps and quirks that are not in any document"
                - "Walk your successor through each component and note their questions"
                - "Re-read the confidentiality clauses in your contract"
            - name: Personal open-source quant code portfolio
              description: |-
                ## Purpose
                Quant developers can rarely show work code, so a hiring manager sees only a CV. A small public project written in your own time with your own resources, such as a tested option pricer with Python bindings and benchmarks, shows how you structure, test and profile code without touching anything an employer owns.

                ## Milestones
                1. A project idea chosen that uses only public methods and public data.
                2. The code written with tests against published results, CI and benchmarks.
                3. A readme explaining the design choices and measured performance.
                4. Your employment contract checked for any rules on outside projects.

                ## Notes
                Start from the **Portfolio piece** template. Never reuse employer code, data or proprietary ideas, even rewritten.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A public repository contains a tested, benchmarked quant project with CI and a design readme, built only from public methods and data."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Check your contract for rules on outside software projects"
                - "Pick a project that uses only public methods and public data"
                - "Add tests against published results and a CI pipeline"
                - "Write a readme covering design choices and benchmark numbers"
            - name: Automatic differentiation for Greeks and calibration
              description: |-
                ## Purpose
                Bumping every input to get sensitivities costs one full revaluation per risk factor, which becomes impossible for a large book or a complex calibration. Adjoint algorithmic differentiation can deliver all first-order sensitivities for a small multiple of one pricing run, but it changes how code must be written and tested.

                ## Milestones
                1. Forward and reverse mode differentiation understood on a small example.
                2. One pricer differentiated with an AD tool and Greeks compared against finite differences.
                3. Memory use and run time of the adjoint version measured against bumping.
                4. Limits documented: branches, discontinuous payoffs and third-party code the tool cannot see.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One pricer produces AD Greeks that match finite differences within tolerance, with run time and memory compared against bumping and limits documented."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Implement forward and reverse mode on a small function by hand"
                - "Apply an AD library to one pricer and compute its Greeks"
                - "Compare AD Greeks with central finite differences"
                - "Measure run time and memory against bump-and-revalue"
            - name: GPU acceleration for Monte Carlo pricing
              description: |-
                ## Purpose
                Monte Carlo pricing of path-dependent products is a natural fit for GPUs, but transfer costs, random number generation and double precision throughput decide whether it is worth it. A measured pilot on one real workload answers the question with numbers before anyone buys hardware.

                ## Milestones
                1. One Monte Carlo workload chosen and its CPU baseline recorded.
                2. A GPU version written with a parallel random number generator and checked against the CPU price.
                3. Speed-up measured end to end, including data transfer, in single and double precision.
                4. A recommendation written on whether GPUs pay for this workload.

                ## Notes
                Many consumer GPUs run double precision far slower than single. Check the hardware's double precision throughput before drawing conclusions.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A GPU pilot on one workload matches the CPU price within tolerance, records end-to-end speed-up in both precisions, and ends with a written recommendation."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Record the CPU run time for one Monte Carlo workload"
                - "Write a GPU version using a parallel random number generator"
                - "Check the GPU price against the CPU price within tolerance"
                - "Measure end-to-end speed-up in single and double precision"
            - name: Bit-reproducible results across machines and builds
              description: |-
                ## Purpose
                Regulators, auditors and model risk teams sometimes need a number reproduced exactly years later, and even researchers lose trust when a rerun differs in the eighth digit. Bit reproducibility across machines means controlling compiler flags, instruction sets, threading order, reduction order and library versions, and testing that it holds.

                ## Milestones
                1. Sources of nondeterminism listed: parallel reductions, fused multiply-add, BLAS threading and hash ordering.
                2. A reproducible build mode defined with fixed flags and deterministic reductions.
                3. A test comparing outputs bit for bit across two machines and two thread counts.
                4. The cost in speed of reproducible mode measured and recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A reproducible build mode passes a bit-for-bit comparison across two machines and two thread counts, with its speed cost recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List every source of nondeterminism in one production calculation"
                - "Define a reproducible build with fixed flags and ordered reductions"
                - "Run the bit-for-bit comparison across two machines"
                - "Rerun the cross-machine reproducibility check and log any mismatch @recurring(monthly:22)"
---

# Quant Development (C++ and Python)

Quant development is the craft of turning researchers' ideas into code that is fast, numerically trustworthy and pleasant to build on: a Python research stack that installs the same way twice, C++ where speed genuinely pays, tests that know what a correct price looks like, and profiling before anyone guesses. This area is for engineers who write and own that code for a desk, a fund or a small research team. It starts with foundations (environments, toolchain, library inventory, CI, reference tests, standards, benchmarks and precision policy), then the routines that keep the library healthy, the skills worth practising in both languages, improvements and decisions, dated events such as migrations and releases, setups for different situations, and three specialist problems.

The rhythms are a weekly benchmark check, weekly sanitizer runs, support hours and a review rota, monthly upgrade windows, releases, test triage and build cost reviews, and a quarterly debt review with the researchers. The Purchase decision, Operational checklist, Remediation plan, Onboarding 30/60/90, Development plan and Portfolio piece templates pair with several projects. Faster code is only useful when it gives the same answer, so every port, rewrite and optimisation here is checked against a reference result before it ships, and nothing here is trading or investment advice. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
