---
id: quant-finance.derivatives-pricing-models
name: Derivatives Pricing Models
description: "A tested pricing library built step by step: payoffs, closed-form references, binomial trees, Monte Carlo and finite differences, Greeks, calibration and the checks that show where each model breaks."
category: business
version: 1.0.0
tags: [quant-finance, derivatives-pricing-models, researcher, student, black-scholes, monte-carlo, finite-differences, calibration]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - meeting-notes
    - course
    - portfolio-piece
    - onboarding-30-60-90
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Derivatives Pricing Models
          description: "Learning and implementing pricing models: binomial trees, Black-Scholes and its limits, Monte Carlo, finite differences, calibration and model checks."
          projects:
            - name: Pricing library scope and first product list
              description: |-
                ## Purpose
                Most pricing projects stall because they try to cover every product at once and finish none. Writing down which contracts you will price first (say European and American vanillas, then one barrier and one Asian), which methods you will use for each, and what counts as finished gives the next six months a shape you can actually complete.

                ## Milestones
                1. A one-page scope listing four to six products in the order you will build them.
                2. Each product paired with the methods you will implement for it: closed form, tree, Monte Carlo or PDE.
                3. A definition of finished for one product, including tests and a written note on limits.
                4. Products deliberately left out recorded with the reason, so the list does not creep.

                ## Notes
                Start narrow. A European call priced correctly by three methods teaches more than ten exotics priced by one.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated scope document names the first four to six products, the methods for each and a written definition of finished."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the option types your course, thesis or desk work actually needs"
                - "Choose four to six products and order them from simplest to hardest"
                - "Pair each product with the pricing methods you will implement"
                - "Write a short definition of finished that includes tests and a limits note"
            - name: Python numerical environment for pricing work
              description: |-
                ## Purpose
                Pricing code depends on precise numerical libraries, and a result that changes when a package updates is a result you cannot defend. Setting up one pinned environment with NumPy, SciPy, a test runner and version control before writing the first pricer means every number later in the area can be reproduced on another machine.

                ## Milestones
                1. A project folder under version control with separate folders for library code, tests and notebooks.
                2. A pinned environment file that rebuilds the same package versions from scratch.
                3. A test runner installed and passing on one trivial test.
                4. A short readme saying how to rebuild the environment and run the tests.

                ## Notes
                Python is fine for learning every method here. Move a hot loop to compiled code only after profiling says it matters.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fresh clone rebuilds the pinned environment and passes the test suite on a second machine or a clean virtual environment."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the repository with folders for library code, tests and notebooks"
                - "Pin NumPy, SciPy and the test runner in an environment file"
                - "Write one trivial test and confirm the runner passes it"
                - "Update pinned package versions and rerun the full test suite @recurring(quarterly)"
            - name: Payoff function library for vanilla and exotic contracts
              description: |-
                ## Purpose
                Every pricing method needs the same payoffs, and writing them once as small tested functions stops a tree and a Monte Carlo pricer from quietly disagreeing about what a contract pays. Calls, puts, digitals, barriers and averaging payoffs written this way become the shared vocabulary the rest of the library uses.

                ## Milestones
                1. Payoff functions for call, put, cash-or-nothing digital and asset-or-nothing digital.
                2. Path-dependent payoffs for an up-and-out barrier and an arithmetic average option taking a full price path.
                3. Unit tests for each payoff at, above and below the strike, including the exact strike.
                4. All pricers in the library calling these functions rather than defining their own.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A payoff module covers at least six contract types with unit tests at the strike, above it and below it, all passing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write call and put payoff functions that accept arrays of terminal prices"
                - "Add cash-or-nothing and asset-or-nothing digital payoffs"
                - "Write path payoffs for an up-and-out barrier and an arithmetic average"
                - "Test every payoff exactly at the strike and either side of it"
            - name: Closed-form Black-Scholes reference implementation
              description: |-
                ## Purpose
                Black-Scholes is the anchor every numerical method in this area is tested against, so it has to be right to many decimal places, including for deep in and out of the money options and very short expiries. A careful reference pricer with a continuous dividend yield and analytic Greeks is the first piece of the library you will rely on daily.

                ## Milestones
                1. Call and put prices with continuous dividend yield matching published textbook values to four decimals.
                2. Analytic delta, gamma, vega, theta and rho implemented and tested against finite-difference bumps.
                3. Edge cases handled: zero volatility, expiry at zero, very deep in and out of the money strikes.
                4. A docstring stating the assumptions the formula rests on.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The reference pricer matches at least five published example values to four decimals and its analytic Greeks agree with bumped prices within a stated tolerance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Implement call and put prices with a continuous dividend yield"
                - "Add analytic delta, gamma, vega, theta and rho"
                - "Check each Greek against a small finite-difference bump"
                - "Write tests for zero volatility, zero time and extreme strikes"
            - name: Benchmark price table from published examples
              description: |-
                ## Purpose
                A pricer that only agrees with itself proves nothing. Collecting a table of trusted prices from textbooks and well-known papers (vanilla, American, barrier and Asian examples with their exact inputs) gives every method you build an outside answer to hit, and turns vague confidence into a pass or fail.

                ## Milestones
                1. At least twenty benchmark cases with full inputs, source and published price.
                2. Cases covering European, American, barrier and arithmetic Asian options.
                3. The table stored as a data file the test suite reads automatically.
                4. Each case tagged with the tolerance you expect a numerical method to reach.

                ## Notes
                Record the edition and page for every textbook value. Editions sometimes correct earlier numbers.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A benchmark file with at least twenty sourced cases across four product types is read by the test suite on every run."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect ten vanilla and American examples with inputs from your textbooks"
                - "Add barrier and Asian benchmark cases from published papers"
                - "Save the cases as a data file with source and page for each"
                - "Wire the file into the test suite with a tolerance per case"
            - name: Market conventions sheet for rates, dividends and day counts
              description: |-
                ## Purpose
                Two correct pricers can disagree in the third decimal simply because one counts days as calendar over 365 and the other as business days over 252. Writing your conventions down once (time measure, rate compounding, dividend treatment, settlement lag) removes a whole class of puzzling mismatches before they waste an afternoon.

                ## Milestones
                1. A one-page sheet stating time measure, rate compounding and dividend treatment used in the library.
                2. Helper functions for year fractions and discount factors that follow the sheet.
                3. A test showing continuous and annual compounding give the same discount factor when converted.
                4. The sheet linked from the library readme.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written conventions sheet exists and every pricer uses the shared year fraction and discount helpers it describes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide the time measure and rate compounding for the whole library"
                - "Write year fraction and discount factor helper functions"
                - "Test that converted continuous and annual rates discount identically"
                - "Link the conventions sheet from the readme"
            - name: Put-call parity and no-arbitrage bound tests
              description: |-
                ## Purpose
                Model-free relationships catch errors no benchmark table will. Put-call parity, the bounds on call prices, monotonicity in strike and convexity across strikes must hold for any sensible pricer, so testing them automatically flags a sign error or a bad boundary condition the moment it appears.

                ## Milestones
                1. Parity tests for every European pricer in the library.
                2. Tests that call prices fall with strike and are convex across a strike grid.
                3. Lower and upper price bounds checked across a grid of inputs.
                4. American prices checked to be at least their European equivalents and their intrinsic value.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Automated parity, bound, monotonicity and convexity tests run against every pricer and pass across a grid of at least 100 input combinations."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a put-call parity test that runs against every European pricer"
                - "Add monotonicity and convexity checks across a strike grid"
                - "Test that American prices never fall below European or intrinsic value"
                - "Run the checks over a randomised grid of spot, rate and volatility"
            - name: Assumptions and limits note for each pricer
              description: |-
                ## Purpose
                Every model is wrong somewhere, and the danger is forgetting where. A short note beside each pricer stating its assumptions (constant volatility, no jumps, continuous hedging, flat rates) and the inputs where its numerics degrade keeps you, a supervisor or a future employer from using it outside the range it was built for.

                ## Milestones
                1. A limits note for every pricer listing model assumptions and numerical weak spots.
                2. Input ranges tested and known to be reliable written as numbers.
                3. Known failure cases recorded with a small reproducible example.
                4. Notes stored beside the code and updated whenever a pricer changes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each pricer in the library has a limits note with assumptions, a tested input range and at least one documented failure case."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the model assumptions for the Black-Scholes reference pricer"
                - "Record the input ranges where each pricer has been tested"
                - "Add a small reproducible example for each known failure case"
                - "Make updating the limits note part of every pricer change"
            - name: Textbook and reading plan for pricing methods
              description: |-
                ## Purpose
                Derivatives literature is large and uneven, and reading three overlapping introductions wastes months. Choosing one core text for theory, one for numerical methods and one for Monte Carlo, with a chapter order matched to what you are building, keeps the reading in step with the code.

                ## Milestones
                1. One core derivatives text, one numerical methods text and one Monte Carlo text chosen.
                2. Chapters mapped to the projects in this area in the order you will need them.
                3. A reading queue with target weeks for the first three months.
                4. Progress checked each month and the plan adjusted to what was actually covered.

                ## Notes
                Start from the **Reading queue** template. Keep the stochastic calculus proofs for their own study; here, read for what you need to implement.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reading queue maps chapters from three chosen texts to the area's projects with target weeks, and is checked monthly."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick one core text, one numerical methods text and one Monte Carlo text"
                - "Map chapters to the projects you will build first"
                - "Set target weeks for the first three months of reading"
                - "Compare chapters read with the plan and adjust it @recurring(monthly:14)"
            - name: Weekly regression run of the pricing test suite
              description: |-
                ## Purpose
                Pricing libraries break quietly: a refactor in the tree code shifts American prices by a cent and nobody notices for weeks. Running the full suite, benchmarks included, on a fixed day each week and fixing failures before writing anything new keeps the library trustworthy as it grows.

                ## Milestones
                1. The full test suite, benchmark table included, run on the same day each week.
                2. A short log of each run with pass count and any failures.
                3. Every failure either fixed or recorded with an owner and a date within the week.
                4. Tolerances reviewed monthly so flaky Monte Carlo tests are fixed rather than loosened.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The suite is run weekly with a logged result, and no failing test stays unresolved for more than seven days."
                cadence: rolling
              tasks:
                - "Run the full test suite and benchmark table and log the result @recurring(weekly:mon)"
                - "Fix or record an owner for any failure the same week"
                - "Review Monte Carlo test tolerances and seed handling @recurring(monthly:3)"
                - "Remove any test that has been skipped for more than a month or restore it"
            - name: Weekly worked exercises from the core text
              description: |-
                ## Purpose
                Reading about trees and PDEs is not the same as being able to set one up under exam or interview pressure. Working three or four end-of-chapter problems each week by hand, then checking them with your own code, builds the fluency that a supervisor, examiner or interviewer will test.

                ## Milestones
                1. A fixed weekly slot of ninety minutes for exercises.
                2. Three or four problems worked by hand each week and checked against the library.
                3. Mistakes logged with the concept behind each one.
                4. Repeated mistake types turned into a revision list each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three exercises are worked and checked against code in most weeks, with a running log of mistakes and their concepts."
                cadence: rolling
              tasks:
                - "Choose this week's three or four problems from the current chapter"
                - "Work the problems by hand and check each with your code @recurring(weekly:sat)"
                - "Log each mistake with the concept it exposed"
                - "Turn repeated mistake types into a short revision list"
            - name: Monthly convergence report across pricing methods
              description: |-
                ## Purpose
                Numerical pricers are only as good as their convergence, and a method that converges slowly or oscillates gives a confident wrong answer. Pricing the same contracts each month by tree, Monte Carlo and finite differences at increasing resolution, and plotting error against effort, shows which methods are healthy and which have drifted.

                ## Milestones
                1. A fixed set of five reference contracts priced by every applicable method.
                2. Error against step count, path count or grid size plotted on log scales.
                3. Observed convergence rates compared with the theoretical rate for each method.
                4. Any method whose rate has worsened since last month flagged for investigation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A convergence report for five reference contracts is produced each month, with observed rates compared with theory and regressions flagged."
                cadence: rolling
              tasks:
                - "Choose five reference contracts with known prices"
                - "Script a convergence run for trees, Monte Carlo and finite differences"
                - "Produce the convergence plots and rate table @recurring(monthly:9)"
                - "Open an investigation note for any method whose rate has worsened"
            - name: Pricing library change log and versioned releases
              description: |-
                ## Purpose
                When a thesis chapter, a coursework submission or a desk report quotes a price, you need to know which version of the code produced it. A plain change log and a tagged version each month make every quoted number traceable and every regression easy to date.

                ## Milestones
                1. A change log file with dated entries for every change that can move a price.
                2. A version tag created each month the library changed.
                3. Every quoted price in written work recorded with the version that produced it.
                4. An annual archive of the year's versions and their benchmark results.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The change log has an entry for every price-moving change and a version tag exists for each month the library changed."
                cadence: rolling
              tasks:
                - "Start a change log file and record the current state as version one"
                - "Tag a version and summarise price-moving changes @recurring(monthly:17)"
                - "Record the version beside any price quoted in written work"
                - "Archive the year's versions with their benchmark results @recurring(yearly)"
            - name: Monthly calibration drill on fresh option quotes
              description: |-
                ## Purpose
                Calibration code that worked once on a tidy data set often fails on the next month's quotes, with stale strikes, crossed markets and missing expiries. Running the full calibration each month on a newly downloaded set of public or licensed option quotes keeps the data cleaning, the optimiser and the fit diagnostics honest.

                ## Milestones
                1. A monthly snapshot of option quotes saved with its source, time and licence terms.
                2. Cleaning rules applied and the number of quotes removed recorded.
                3. The calibration run with fit error by strike and expiry reported.
                4. Parameter values compared with last month and large jumps explained.

                ## Notes
                Use data you are licensed to use. Calibrated parameters describe a model fit, not a view on the market.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month a quote snapshot is cleaned and calibrated, with fit errors and parameter changes against the previous month recorded."
                cadence: rolling
              tasks:
                - "Download and save this month's option quote snapshot with its source"
                - "Run cleaning, calibration and fit diagnostics @recurring(monthly:22)"
                - "Compare parameters with last month and note any large jump"
                - "Record quotes removed by each cleaning rule"
            - name: Quarterly benchmark against an independent pricing library
              description: |-
                ## Purpose
                Your own benchmarks share your own blind spots. Pricing the same grid of contracts with a mature open-source library once a quarter, using identical conventions, catches differences in day counts, dividend handling or boundary treatment that internal tests would never reveal.

                ## Milestones
                1. An open-source pricing library installed in a separate environment.
                2. A grid of at least fifty contracts priced by both libraries with identical inputs.
                3. Differences above tolerance listed and each explained or fixed.
                4. The comparison result logged each quarter with the versions of both libraries.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter a grid of at least fifty contracts is compared with an independent library and every difference above tolerance is explained."
                cadence: rolling
              tasks:
                - "Install a mature open-source pricing library in its own environment"
                - "Build a fifty-contract grid with identical conventions in both libraries"
                - "Run the comparison and explain every difference above tolerance @recurring(quarterly)"
                - "Log the result with both library versions"
            - name: Monthly reading slot for pricing papers
              description: |-
                ## Purpose
                Methods in this field keep improving, from better barrier corrections to faster Fourier schemes, and the textbook will not tell you. Reading one paper or survey a month on a method you use, and writing a short note on whether it changes your implementation, keeps the library current without turning reading into a second job.

                ## Milestones
                1. A short list of journals, working paper series and authors to draw from.
                2. One paper read each month with a half-page note.
                3. Each note ending with a decision: change the code, add a test or no change.
                4. At least two improvements a year traced back to a paper.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A paper note with an implementation decision is written in most months, and at least two library changes a year cite a paper."
                cadence: rolling
              tasks:
                - "List three journals or working paper series that publish pricing methods"
                - "Read one paper and write a half-page note with a decision @recurring(monthly:5)"
                - "Add a test or an issue for any paper that suggests a change"
                - "Ask the agent to summarise the methods section of a dense paper before reading it"
            - name: Monthly Greeks accuracy spot check
              description: |-
                ## Purpose
                Prices can look right while Greeks are badly wrong, especially gamma near the strike and close to expiry or near a barrier. Checking a handful of Greeks each month against analytic values or careful bumps, in exactly those awkward regions, catches noise and instability before anyone relies on a hedge ratio from your code.

                ## Milestones
                1. A fixed set of awkward test points: at the money near expiry, near a barrier, deep out of the money.
                2. Delta, gamma and vega from each method compared with analytic or high-resolution values.
                3. Errors above tolerance logged with method and input.
                4. Any repeated Greek failure turned into a permanent regression test.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Greeks at a fixed set of awkward test points are checked monthly and any repeated failure becomes a regression test."
                cadence: rolling
              tasks:
                - "Choose six awkward test points for Greeks checks"
                - "Compare delta, gamma and vega from each method with reference values @recurring(monthly:27)"
                - "Log any error above tolerance with method and inputs"
                - "Turn repeated failures into permanent regression tests"
            - name: Cox-Ross-Rubinstein binomial tree pricer
              description: |-
                ## Purpose
                Binomial trees are where most people first see risk-neutral pricing work as code, and building one carefully teaches backward induction, discounting and convergence in one small program. A tested CRR pricer for European options that converges to Black-Scholes is the base for the American and exotic work that follows.

                ## Milestones
                1. A CRR tree pricing European calls and puts with a continuous dividend yield.
                2. Prices converging to the Black-Scholes reference as steps increase, plotted.
                3. The odd-even oscillation in convergence observed and explained in a note.
                4. A vectorised version that prices 1,000 steps in well under a second.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A CRR pricer matches Black-Scholes to three decimals at 1,000 steps, with a convergence plot and a note on oscillation."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Derive the CRR up, down and probability parameters by hand"
                - "Implement backward induction for European calls and puts"
                - "Plot price against step count beside the Black-Scholes value"
                - "Vectorise the backward step and time 1,000 steps"
            - name: American early exercise in lattice pricers
              description: |-
                ## Purpose
                Early exercise is the reason trees are still taught: it is one line of code in a lattice and hard almost everywhere else. Adding exercise checks to the tree, extracting the exercise boundary and testing against published American put values gives you a reliable American pricer and an intuition for when exercise matters.

                ## Milestones
                1. American puts and calls priced with an exercise check at every node.
                2. Prices matching published American benchmark values within tolerance.
                3. The early exercise boundary extracted and plotted against time to expiry.
                4. A note confirming that an American call with no dividends is never exercised early, shown numerically.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An American lattice pricer matches at least five published benchmark values and produces a plotted exercise boundary."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Add an exercise check at each node of the European tree"
                - "Test against the American cases in your benchmark table"
                - "Extract and plot the exercise boundary over time"
                - "Show numerically when an American call is never exercised early"
            - name: Trinomial trees and smoother lattice convergence
              description: |-
                ## Purpose
                Binomial prices zig-zag as steps increase, which makes error estimates and Greeks noisy. Building a trinomial tree and trying smoothing fixes such as the Black-Scholes correction at the last step and Richardson extrapolation shows how small changes in lattice design buy much better convergence.

                ## Milestones
                1. A trinomial pricer for European and American options.
                2. Convergence compared with CRR on the same reference contracts.
                3. Last-step smoothing and two-point Richardson extrapolation implemented and measured.
                4. A short note recommending a default lattice set-up for the library.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written comparison of CRR, trinomial, smoothed and extrapolated lattices on five reference contracts ends with a chosen default."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Implement a trinomial tree with a stable choice of probabilities"
                - "Compare its convergence with CRR on the reference contracts"
                - "Add last-step smoothing and Richardson extrapolation"
                - "Write a short note choosing the default lattice for the library"
            - name: Monte Carlo pricer with standard errors
              description: |-
                ## Purpose
                Monte Carlo is the method that scales to path dependence and many assets, but a Monte Carlo price without a standard error is only a guess. Building a European pricer that reports a confidence interval, handles seeds deliberately and shows the one over root N error rate is the base for every simulation project that follows.

                ## Milestones
                1. Terminal price simulation under geometric Brownian motion with exact sampling.
                2. Every price returned with its standard error and a 95 percent confidence interval.
                3. Error against path count plotted, confirming the square-root rate.
                4. Seed handling that makes any run exactly repeatable.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A Monte Carlo pricer returns price and standard error, its intervals contain the Black-Scholes value about 95 percent of the time over 200 repeated runs."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Simulate terminal prices under geometric Brownian motion exactly"
                - "Return the price with standard error and a confidence interval"
                - "Check interval coverage over 200 repeated runs"
                - "Plot error against path count on log scales"
            - name: Variance reduction with antithetic and control variates
              description: |-
                ## Purpose
                Halving Monte Carlo error by brute force costs four times the paths, while a good control variate can cut it by ten times for almost nothing. Implementing antithetic sampling, a control variate using the closed-form price, and measuring the variance ratio for each turns simulation from slow to practical.

                ## Milestones
                1. Antithetic sampling implemented with its variance ratio measured.
                2. A control variate using a closed-form related price, with the optimal coefficient estimated.
                3. A geometric Asian control variate applied to the arithmetic Asian option.
                4. A table of variance reduction factors per technique and product.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table reports measured variance reduction factors for antithetic and control variate methods on at least three products."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Add antithetic sampling and measure the variance ratio"
                - "Implement a control variate with an estimated optimal coefficient"
                - "Use the geometric Asian price as a control for the arithmetic Asian"
                - "Tabulate the reduction factor for each technique and product"
            - name: Path-dependent Monte Carlo for barrier and Asian options
              description: |-
                ## Purpose
                Path-dependent payoffs expose the biggest trap in simulation: monitoring a barrier only at the simulated dates misses crossings in between and overprices knock-out options. Pricing barriers and Asians on full paths, then applying a Brownian bridge or barrier shift correction, shows how discretisation error differs from sampling error.

                ## Milestones
                1. Full path simulation with a chosen number of monitoring dates.
                2. Barrier prices compared with the closed-form continuous barrier value.
                3. A Brownian bridge crossing correction implemented and its effect measured.
                4. Arithmetic Asian prices matching published benchmark values within their standard error.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Corrected barrier prices match the continuous closed form within two standard errors and Asian prices match published benchmarks."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Simulate full price paths with a configurable number of dates"
                - "Price an up-and-out call and compare with the closed form"
                - "Add a Brownian bridge crossing correction and remeasure"
                - "Check arithmetic Asian prices against the benchmark table"
            - name: Longstaff-Schwartz least squares for American options
              description: |-
                ## Purpose
                Simulation cannot see the future, so pricing early exercise by Monte Carlo needs a regression to estimate the value of continuing. Implementing Longstaff-Schwartz, choosing basis functions and comparing with your lattice American prices teaches the main tool desks use for multi-asset and path-dependent exercise.

                ## Milestones
                1. A least squares Monte Carlo pricer for an American put.
                2. Prices compared with the lattice American value across ten strikes.
                3. The effect of basis choice and regressing on in-the-money paths only measured.
                4. Low bias confirmed by pricing on fresh paths with the fitted exercise rule.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A Longstaff-Schwartz pricer matches lattice American put prices within two standard errors across ten strikes, with a basis comparison recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Simulate paths and set up the backward regression for an American put"
                - "Compare prices with the lattice pricer across ten strikes"
                - "Test two basis sets and in-the-money-only regression"
                - "Reprice on fresh paths with the fitted exercise rule"
            - name: Explicit, implicit and Crank-Nicolson finite difference solvers
              description: |-
                ## Purpose
                Finite differences solve the pricing PDE directly and give a whole grid of prices and Greeks at once. Building the three classic schemes on the same grid, and seeing the explicit scheme blow up when the time step is too large, teaches stability and accuracy in a way no textbook paragraph can.

                ## Milestones
                1. Explicit, implicit and Crank-Nicolson schemes for a European call on one grid.
                2. The explicit stability limit found by experiment and compared with theory.
                3. Second-order convergence of Crank-Nicolson confirmed on the reference contracts.
                4. Delta and gamma read off the grid and checked against analytic values.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All three schemes price a European call within a stated tolerance of Black-Scholes, with the explicit stability limit and Crank-Nicolson convergence rate recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Discretise the Black-Scholes PDE on a uniform spot and time grid"
                - "Implement explicit, implicit and Crank-Nicolson time stepping"
                - "Find the explicit stability limit by increasing the time step"
                - "Read delta and gamma from the grid and check them"
            - name: Grid design and boundary conditions for PDE pricers
              description: |-
                ## Purpose
                Most finite difference errors come from the edges, not the scheme: a spot grid that stops too early, a boundary condition that is wrong for a put, or a strike falling between nodes. Testing grid width, node placement at the strike and barrier, and boundary choices one at a time makes the PDE pricer dependable for American and barrier contracts.

                ## Milestones
                1. The effect of grid width on price measured and a default width chosen.
                2. Strike and barrier placed on grid nodes, with the accuracy gain measured.
                3. Dirichlet and linearity boundary conditions compared.
                4. American options priced by the PDE with an exercise constraint at each step.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written grid and boundary default is backed by measured errors, and the PDE pricer matches American and barrier benchmark values."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Measure price error as the spot grid upper bound changes"
                - "Align strike and barrier with grid nodes and remeasure"
                - "Compare Dirichlet and linearity boundary conditions"
                - "Add an early exercise constraint and test American prices"
            - name: Greeks by bumping, pathwise and likelihood ratio methods
              description: |-
                ## Purpose
                Bumping is easy and often wrong: too small a bump and Monte Carlo noise dominates, too large and the curvature does. Implementing bump with common random numbers, pathwise derivatives and the likelihood ratio method on the same contracts shows which estimator to trust for smooth payoffs and which for digitals and barriers.

                ## Milestones
                1. Bumped Greeks with common random numbers and a bump size study.
                2. Pathwise delta and vega for vanilla options.
                3. Likelihood ratio delta for a digital option, where pathwise fails.
                4. A table of estimator variance per method and payoff type.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table reports estimator variance for bump, pathwise and likelihood ratio Greeks on vanilla and digital payoffs."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Run a bump size study using common random numbers"
                - "Implement pathwise delta and vega for vanillas"
                - "Implement likelihood ratio delta for a digital option"
                - "Compare estimator variance across methods and payoffs"
            - name: Sobol sequences and quasi-Monte Carlo pricing
              description: |-
                ## Purpose
                Low-discrepancy sequences can make Monte Carlo converge close to one over N instead of one over root N, but only when the dimensions are ordered well and errors are estimated by randomisation. Trying Sobol points with a Brownian bridge construction on path-dependent contracts shows when the gain is real and how to keep a standard error.

                ## Milestones
                1. Scrambled Sobol points used in the European pricer with randomised error estimates.
                2. Convergence compared with plain pseudo-random sampling.
                3. Brownian bridge path construction used with Sobol points for an Asian option.
                4. A note on when quasi-Monte Carlo is worth the extra complexity.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Measured convergence for scrambled Sobol and pseudo-random sampling on two products is recorded with randomised standard errors."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Generate scrambled Sobol points from a standard numerical library"
                - "Price a European option and compare convergence with pseudo-random"
                - "Build Brownian bridge paths for an Asian option with Sobol points"
                - "Write a short note on when the gain justifies the effort"
            - name: Digital options and payoff smoothing near the strike
              description: |-
                ## Purpose
                A discontinuous payoff breaks things that work for vanillas: tree prices jump around, PDE convergence drops to first order and Monte Carlo Greeks explode. Pricing digitals by each method, then trying smoothing such as averaging the payoff over the nearest cell or Rannacher start-up steps, shows how to keep accuracy where the payoff has a cliff.

                ## Milestones
                1. Digital prices from tree, PDE and Monte Carlo compared with the closed form.
                2. The loss of convergence order measured for each method.
                3. Cell-averaged payoffs and Rannacher start-up steps applied and remeasured.
                4. A smoothing default recorded in the PDE pricer's limits note.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Convergence for digital options before and after smoothing is measured for three methods and a default is written into the limits note."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Price a cash-or-nothing digital by tree, PDE and Monte Carlo"
                - "Measure convergence order for each method"
                - "Apply cell averaging and Rannacher start-up steps"
                - "Record the chosen smoothing default in the limits note"
            - name: Choosing between tree, PDE and Monte Carlo for a product
              description: |-
                ## Purpose
                Picking a method by habit wastes time: a PDE is fast and accurate in one or two dimensions, Monte Carlo is the only practical choice for many assets, and trees remain the clearest for teaching. A decision matrix based on your own measured speed and accuracy turns that rule of thumb into a written default for each product.

                ## Milestones
                1. Speed and error measured for each method on every product in scope.
                2. A matrix scoring each method on accuracy, speed, Greeks quality and early exercise support.
                3. A default method chosen for each product, with the reason in one sentence.
                4. The defaults written into the library readme.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision matrix built from measured results names a default pricing method for every product in scope, with a reason for each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Time each method at a matched error level on every product"
                - "Score methods on accuracy, speed, Greeks and exercise support"
                - "Choose a default method per product with a one-sentence reason"
                - "Add the defaults to the library readme"
            - name: Black-Scholes limits study with real smiles
              description: |-
                ## Purpose
                Black-Scholes assumes constant volatility, no jumps and frictionless continuous trading, and a single implied volatility per strike shows how far reality departs. Backing out implied volatilities from a public quote snapshot, then listing which assumption each feature of the smile contradicts, gives you a grounded reason for every more advanced model in this area.

                ## Milestones
                1. Implied volatilities computed for one expiry across strikes from a quote snapshot.
                2. The smile or skew plotted and its shape described.
                3. Each departure linked to the Black-Scholes assumption it contradicts.
                4. A one-page note ending with which model in this area addresses each departure.

                ## Notes
                Keep the analysis about model behaviour. Surface construction and forecasting belong to volatility modelling work.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note with a plotted smile links each departure from flat volatility to a specific Black-Scholes assumption and a candidate model."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Back out implied volatilities for one expiry from a quote snapshot"
                - "Plot implied volatility against strike and describe the shape"
                - "Link each departure to the assumption it breaks"
                - "Name the model in this area that addresses each departure"
            - name: Discrete delta-hedging simulation and hedging error
              description: |-
                ## Purpose
                In theory the Black-Scholes price is the cost of a perfect hedge, which only exists with continuous rebalancing. Simulating a delta hedge rebalanced daily, weekly and with costs, and plotting the distribution of hedging profit and loss, shows exactly what the model promises and what it cannot deliver.

                ## Milestones
                1. A simulation that sells an option and hedges it at a chosen rebalancing frequency.
                2. Hedging error distributions for daily and weekly rebalancing compared.
                3. The effect of hedging with a different volatility from the one realised shown.
                4. Proportional transaction costs added and their effect on the error measured.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Hedging error distributions for at least two rebalancing frequencies, one volatility mismatch and one cost level are plotted and explained."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Simulate a short option position hedged at a fixed frequency"
                - "Compare hedging error for daily and weekly rebalancing"
                - "Hedge with a volatility different from the simulated one"
                - "Add proportional transaction costs and remeasure"
            - name: Implied volatility solver with a safe fallback
              description: |-
                ## Purpose
                Newton's method finds implied volatility in a few steps for most options and fails badly for deep out of the money strikes and short expiries where vega is tiny. A solver that uses a good starting guess, falls back to a bracketing method and reports when no solution exists is basic infrastructure for calibration and every quote you analyse.

                ## Milestones
                1. A Newton solver with an analytic starting approximation.
                2. A bracketing fallback that always converges when a solution exists.
                3. Prices outside the no-arbitrage bounds detected and reported rather than solved.
                4. Round-trip tests recovering the input volatility across a wide grid.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The solver recovers input volatility to six decimals across a grid of at least 1,000 strike and expiry combinations and flags every arbitrage-violating price."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Implement Newton iteration with an analytic starting guess"
                - "Add a bracketing fallback for low-vega cases"
                - "Detect and report prices outside no-arbitrage bounds"
                - "Run round-trip tests across a wide strike and expiry grid"
            - name: Heston model pricing and calibration
              description: |-
                ## Purpose
                Stochastic volatility is the usual first step beyond Black-Scholes, and Heston is the standard case because it has a semi-closed-form price. Implementing the Heston pricer, checking it against Monte Carlo, then calibrating its five parameters to a quote snapshot teaches calibration as an optimisation problem with all its traps.

                ## Milestones
                1. A Heston pricer using numerical integration, matching published values.
                2. The same prices reproduced by a Monte Carlo scheme that keeps variance non-negative.
                3. A calibration to one quote snapshot with fit error by strike and expiry.
                4. The sensitivity of calibrated parameters to the starting point recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The Heston pricer matches published values, agrees with Monte Carlo within two standard errors, and a calibration report shows fit errors and starting-point sensitivity."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Implement the Heston characteristic function and integration"
                - "Check prices against published values and your Monte Carlo"
                - "Calibrate to a quote snapshot and report errors by strike"
                - "Rerun calibration from five starting points and compare parameters"
            - name: Calibration objective, weights and parameter stability
              description: |-
                ## Purpose
                Calibrate the same model to the same quotes twice and you can get very different parameters, depending on whether you fit prices or volatilities, how you weight wings against the money, and what bounds you set. Testing these choices deliberately, and checking how stable parameters are from day to day, separates a usable calibration from a curve fit.

                ## Milestones
                1. Price-error and volatility-error objectives compared on one snapshot.
                2. Vega weighting and bid-ask weighting compared for the wings.
                3. Parameter bounds and any regularisation written down with reasons.
                4. Day-to-day parameter stability measured over a month of snapshots.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written calibration standard states the objective, weights and bounds chosen, backed by a month of measured parameter stability."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Calibrate one snapshot to price error and to volatility error"
                - "Compare vega weighting with bid-ask weighting"
                - "Write down bounds and regularisation with a reason for each"
                - "Measure parameter changes across a month of snapshots"
            - name: Discrete dividends in option pricing
              description: |-
                ## Purpose
                Continuous dividend yields are convenient but wrong for single stocks, where a known cash dividend drops the price on a known date and changes early exercise for American calls. Comparing the escrowed dividend approximation with an exact lattice or PDE treatment shows how large the error is for options spanning an ex-dividend date.

                ## Milestones
                1. Discrete cash dividends handled in the lattice and the PDE pricer.
                2. The escrowed dividend approximation implemented for comparison.
                3. Price differences measured for options spanning one and two dividend dates.
                4. Early exercise of American calls just before the ex-dividend date shown.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Measured price differences between exact discrete dividend handling and the escrowed approximation are recorded for at least six cases."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Add a cash dividend drop to the lattice at a set date"
                - "Implement the escrowed dividend approximation"
                - "Compare prices for options spanning one and two dividends"
                - "Show when an American call is exercised before the ex-dividend date"
            - name: Profiling and vectorising the Monte Carlo engine
              description: |-
                ## Purpose
                Slow Monte Carlo, at a minute per price, makes convergence studies and calibration impractical. Profiling first, then vectorising path generation, reusing random numbers and moving one hot loop to compiled code where it helps, typically brings run time down by an order of magnitude without touching the results.

                ## Milestones
                1. A profile showing where the current engine spends its time.
                2. Path generation vectorised with prices unchanged to the last digit for a fixed seed.
                3. Memory use controlled by simulating paths in batches.
                4. Before and after timings recorded for three reference contracts.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Timings before and after show at least a fivefold speed-up on three reference contracts with identical prices for a fixed seed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Profile the engine on three reference contracts"
                - "Vectorise path generation and confirm identical prices"
                - "Simulate in batches to bound memory use"
                - "Record before and after timings"
            - name: Pricing model presentation to a supervisor or study group
              description: |-
                ## Purpose
                Explaining a pricer out loud exposes gaps that tests miss, and a supervisor or study group will ask the questions an examiner or interviewer would. Presenting one method end to end (theory, code, convergence, limits) on a fixed date gives the work a deadline and a set of written follow-ups.

                ## Milestones
                1. A date booked with a supervisor, study group or reading group.
                2. A twenty-minute talk covering theory, code, convergence plots and limits.
                3. Questions and objections captured during the session.
                4. Follow-up actions listed and the first one completed within two weeks.

                ## Notes
                Start from the **Meeting notes** template to capture the questions.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The presentation is delivered on the booked date and a written list of questions and follow-ups exists, with the first follow-up done."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a date with your supervisor or study group"
                - "Prepare a twenty-minute talk with convergence plots and limits"
                - "Capture every question asked during the session"
                - "Complete the first follow-up within two weeks"
            - name: Coursework or thesis chapter on a pricing method
              description: |-
                ## Purpose
                Many master's and PhD students have to submit a written piece on a pricing method, and the strongest ones combine a clear derivation, a tested implementation and an honest error analysis. Planning it backwards from the submission date, with the code and results frozen well before the write-up, avoids the last-week rush that produces unchecked tables.

                ## Milestones
                1. Topic, scope and marking criteria confirmed with the supervisor or module lead.
                2. Code and results frozen and tagged three weeks before submission.
                3. A full draft with derivation, implementation, convergence and limits sections.
                4. Supervisor feedback addressed and the final version submitted on time.

                ## Notes
                Check your institution's rules on code reuse and on using AI tools before you start writing.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The piece is submitted by the deadline with tagged code, convergence results and a limits section, after one round of supervisor feedback."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Confirm topic, scope and marking criteria with your supervisor"
                - "Set dates for code freeze, first draft and submission"
                - "Tag the code and results at the freeze date"
                - "Send the full draft for feedback two weeks before submission"
            - name: Exam preparation for a derivatives pricing module
              description: |-
                ## Purpose
                Pricing exams reward speed with trees, parity arguments and Greeks by hand, not the code you have spent months on. A revision plan built from past papers, with timed attempts in the final weeks and a list of standard derivations you can reproduce cold, turns understanding into marks.

                ## Milestones
                1. Past papers and the syllabus collected and topics mapped to weeks.
                2. A list of derivations you must reproduce without notes, each practised twice.
                3. At least three past papers sat under timed conditions.
                4. Weak topics from the timed papers revised before the exam.

                ## Notes
                Start from the **Course** template to lay out the weeks to the exam.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three timed past papers are completed and marked before the exam, with every listed derivation practised at least twice."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Collect past papers and map syllabus topics to weeks"
                - "List the derivations you must reproduce without notes"
                - "Sit one timed past paper and mark it honestly @recurring(weekly:sun)"
                - "Revise the weakest topic from each marked paper"
            - name: Portfolio write-up of the pricing library
              description: |-
                ## Purpose
                Recruiters and admissions panels see many pricing projects and remember the ones with clear evidence: convergence plots, benchmark agreement and an honest list of limits. A short write-up with a link to tidy code gives you something concrete to discuss in applications and interviews.

                ## Milestones
                1. A two-page write-up covering methods, tests, convergence results and limits.
                2. The repository cleaned with a readme, a quick-start example and passing tests.
                3. Three figures chosen that show accuracy and convergence clearly.
                4. The write-up reviewed by one person who works or studies in the field.

                ## Notes
                Start from the **Portfolio piece** template. Never include code or data from an employer or a licensed data feed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A two-page write-up with three figures and a linked, documented repository has been reviewed by one person in the field."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft a two-page summary of methods, tests and limits"
                - "Choose three figures that show accuracy and convergence"
                - "Add a readme and quick-start example to the repository"
                - "Ask one practitioner or lecturer to review the write-up"
            - name: Open-source release of a pricing module
              description: |-
                ## Purpose
                Publishing even one well-tested module, such as the implied volatility solver or the barrier Monte Carlo, invites the scrutiny that finds bugs you missed and shows employers code they can read. A dated release with a licence, documentation and a plan for issues makes it a real project rather than an abandoned upload.

                ## Milestones
                1. One module chosen and separated from the rest of the library.
                2. A licence, documentation and continuous test runs in place.
                3. A first version released on a public code host by the target date.
                4. Issues and questions answered on a regular monthly slot.

                ## Notes
                Check any employment contract or university policy on intellectual property before publishing.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A licensed, documented module with automated tests is publicly released by the target date and issues are answered within a month."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Check your contract or university policy on publishing code"
                - "Choose one module and separate it with its own tests"
                - "Add a licence, documentation and automated test runs"
                - "Answer open issues and questions on the public repository @recurring(monthly:19)"
            - name: Pricing study alongside a degree and a part-time job
              description: |-
                ## Purpose
                Students juggling lectures and paid work rarely get long uninterrupted blocks, and pricing code suffers when it is written in scraps. Breaking the area into ninety-minute units, each ending with a passing test, and protecting two fixed sessions a week makes steady progress possible in a crowded timetable.

                ## Milestones
                1. Two fixed ninety-minute sessions a week placed around lectures and shifts.
                2. The next ten build steps listed as units that each end in a passing test.
                3. A short end-of-session note saying exactly where to restart.
                4. A monthly check that sessions held matches the plan, with the plan cut if not.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two weekly study sessions are held in most weeks, each ending with a passing test and a restart note."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Place two ninety-minute sessions a week around lectures and shifts"
                - "Break the next ten build steps into units that end in a passing test"
                - "Hold the midweek session and write a restart note at the end @recurring(weekly:wed)"
                - "Cut the plan if fewer than six sessions happened last month"
            - name: From physics or engineering PDEs to option pricing
              description: |-
                ## Purpose
                Researchers from physics, applied maths or engineering already know diffusion equations, finite differences and Monte Carlo, but not the financial meaning of the terms or the conventions desks use. Mapping what you know (the heat equation, boundary layers, importance sampling) onto pricing language lets you skip the basics and focus on what is genuinely new.

                ## Milestones
                1. The Black-Scholes PDE transformed to the heat equation by hand, with each step's financial meaning noted.
                2. A glossary pairing physics or engineering terms with their pricing equivalents.
                3. Gaps listed: risk-neutral measure, market conventions, calibration and hedging.
                4. One pricer from your own research toolkit adapted to price a vanilla option.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written glossary and gap list exist, and one solver from your research toolkit prices a vanilla option within tolerance of Black-Scholes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Transform the Black-Scholes PDE to the heat equation by hand"
                - "Write a glossary pairing your field's terms with pricing terms"
                - "List the finance concepts you still need to learn"
                - "Adapt one of your own solvers to price a vanilla option"
            - name: Joining a desk quant team and learning its pricing library
              description: |-
                ## Purpose
                New desk quants inherit a large pricing library with its own conventions, model choices and history, and early credibility comes from understanding it before changing it. A first ninety days spent mapping the models, running the tests and fixing one small, well-understood issue builds trust and avoids breaking prices people rely on.

                ## Milestones
                1. The library's main models, conventions and test suite mapped in personal notes.
                2. Desk prices for three products reproduced end to end from inputs.
                3. The team's model change and review process understood and written down.
                4. One small fix or test added through the normal review process.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Keep notes free of confidential data and follow your employer's information rules.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within ninety days three desk prices are reproduced end to end and one change has passed the team's normal review."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your manager which three products to reproduce first"
                - "Map the library's models, conventions and tests in your notes"
                - "Reproduce three desk prices from raw inputs"
                - "Submit one small fix or test through the team's review"
            - name: Teaching a binomial pricing tutorial
              description: |-
                ## Purpose
                Teaching assistants and postdocs are often asked to run tutorials on trees and parity, and students learn most when they build a two-step tree by hand before seeing code. A tutorial pack with a worked example, a short coding exercise and a marking guide is reusable every year and sharpens your own understanding.

                ## Milestones
                1. A one-page worked two-step tree example with full working.
                2. A coding exercise with starter code and a hidden test.
                3. A marking guide listing the common mistakes and how to score them.
                4. Feedback from the session collected and the pack revised.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A tutorial pack with worked example, coding exercise and marking guide has been used once and revised from student feedback."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a two-step tree example with full working"
                - "Prepare a coding exercise with starter code and a hidden test"
                - "Draft a marking guide listing the common mistakes"
                - "Revise the pack from the session's feedback"
            - name: Merton jump-diffusion pricer and its smile
              description: |-
                ## Purpose
                Jumps explain the steep short-dated skew that diffusion models struggle to produce. Implementing Merton's jump-diffusion as a series of Black-Scholes prices, checking it with Monte Carlo and plotting the implied smile it generates shows what jumps add and why they matter most for short expiries.

                ## Milestones
                1. A Merton pricer using the series of weighted Black-Scholes prices, with truncation error controlled.
                2. Prices confirmed by a Monte Carlo with compound Poisson jumps.
                3. Implied smiles plotted for three expiries showing how the skew flattens with time.
                4. A note comparing what jumps and stochastic volatility each explain.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The Merton series and Monte Carlo prices agree within two standard errors, and implied smiles for three expiries are plotted and explained."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Implement the Merton series with a truncation tolerance"
                - "Confirm prices with a compound Poisson Monte Carlo"
                - "Plot the implied smile for three expiries"
                - "Write a note comparing jumps with stochastic volatility"
            - name: Local volatility pricer and exotic price comparison
              description: |-
                ## Purpose
                Local volatility reproduces every vanilla price exactly, yet can price barriers and forward-start options quite differently from a stochastic volatility model fitted to the same quotes. Building a local volatility PDE pricer from a smooth input surface, then pricing a barrier under it and under Heston, shows model risk in its clearest form.

                ## Milestones
                1. A local volatility function derived from a smooth, arbitrage-free input surface.
                2. A PDE pricer that reprices the input vanillas within tolerance.
                3. A barrier option priced under local volatility and under calibrated Heston.
                4. The price gap written up as an example of model risk.

                ## Notes
                Take the input surface as given from your volatility work; the focus here is the pricer and the comparison.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The local volatility pricer reprices input vanillas within tolerance and a written comparison shows its barrier price beside Heston's."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Compute local volatility from a smooth arbitrage-free input surface"
                - "Build a PDE pricer with spot and time dependent volatility"
                - "Check that input vanillas are repriced within tolerance"
                - "Price one barrier under local volatility and Heston and write up the gap"
            - name: Fourier pricing with characteristic functions
              description: |-
                ## Purpose
                Models defined by their characteristic function, such as Heston and exponential Levy models, can be priced across a whole strike range in milliseconds with Fourier methods. Implementing Carr-Madan with the fast Fourier transform and the COS method, and comparing them with direct integration, gives you the speed calibration needs.

                ## Milestones
                1. Carr-Madan pricing with the fast Fourier transform for Black-Scholes and Heston.
                2. The COS method implemented with its truncation range chosen deliberately.
                3. Both compared with direct integration for accuracy and speed across strikes.
                4. The damping and grid parameters that matter recorded in the limits note.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Carr-Madan and COS prices match direct integration to five decimals across a strike range, with timings and parameter choices recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Implement Carr-Madan pricing with the fast Fourier transform"
                - "Implement the COS method with a chosen truncation range"
                - "Compare accuracy and speed with direct integration"
                - "Record damping and grid choices in the limits note"
            - name: Adjoint algorithmic differentiation for Monte Carlo Greeks
              description: |-
                ## Purpose
                Desks need dozens of sensitivities from one simulation, and bumping each input separately multiplies run time by the number of Greeks. Adjoint algorithmic differentiation computes all of them for a small multiple of one pricing run, and implementing it on a simple Monte Carlo pricer shows the cost saving and the pitfalls with discontinuous payoffs.

                ## Milestones
                1. A hand-written adjoint of the European Monte Carlo pricer.
                2. Adjoint Greeks matching pathwise and bumped values within standard error.
                3. Run time for all Greeks compared with bumping each input.
                4. The failure for digital payoffs shown and a smoothing fix applied.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Adjoint Greeks match pathwise values within standard error and a timing table shows their cost against bumping for at least five sensitivities."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Write the adjoint of a simple European Monte Carlo pricer by hand"
                - "Compare adjoint Greeks with pathwise and bumped values"
                - "Time all Greeks by adjoint against bumping each input"
                - "Show the digital payoff failure and apply payoff smoothing"
---

# Derivatives Pricing Models

Derivatives pricing models is where the theory of option pricing turns into code that gives the same number three different ways, for students on a quant or financial engineering course and researchers who need pricers they can trust. It starts with foundations (scope, environment, payoffs, a closed-form Black-Scholes reference and benchmark prices), then the routines that keep a library honest, the core numerical methods (trees, Monte Carlo, finite differences, Greeks), the choices and limits that decide which method fits, the presentations, exams and releases that test the work, setups for part-time students, PhD converts and new desk quants, and specialist models such as jumps, local volatility, Fourier methods and adjoint Greeks.

The rhythms are a weekly regression run and a weekly exercise session, monthly convergence, Greeks and calibration checks, a monthly reading slot and quarterly benchmarks against an independent library. The plan pairs with the Reading queue, Meeting notes, Course, Portfolio piece and Onboarding 30/60/90 templates, and it is a study and engineering plan only, never trading advice or a view on any instrument. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
