---
id: quant-finance.rates-and-credit-modelling
name: Rates and Credit Modelling
description: "Curves you can defend and credit models you can explain: conventions and quotes checked, single and multi-curve builds, duration and key rate risk, short-rate and hazard models, spread measures and a record of every change."
category: business
version: 1.0.0
tags: [quant-finance, rates-and-credit-modelling, researcher, yield-curve, short-rate-models, credit-spreads, cds, duration]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - reading-queue
    - meeting-notes
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Rates and Credit Modelling
          description: "Modelling interest rates and credit: yield curve construction, short-rate models, duration and convexity, default probabilities and spread analysis."
          projects:
            - name: Rates and credit model scope statement
              description: |-
                ## Purpose
                A curve built for marking a swap book, one built for relative value research and one built for a balance sheet risk report make different trade-offs on smoothness, speed and instrument choice. Writing down which question your models answer, for which currencies and instruments, stops months of rework when a second user turns up with different needs.

                ## Milestones
                1. One sentence stating the main use: valuation, risk, research or reporting.
                2. The currencies, tenors and instrument types in scope listed.
                3. The users of the output and the decisions they make with it named.
                4. Three things the models will deliberately not cover recorded.

                ## Notes
                If the honest answer is every use, design for the strictest one first, which is usually valuation, and treat the rest as views on the same curves.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page scope statement names the main use, currencies, instruments, users and three explicit exclusions, and has been read by one user."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one sentence on what your rates and credit models are for"
                - "List the currencies, tenors and instrument types in scope"
                - "Name each user of the output and the decision they make with it"
                - "Record three things the models will not try to do"
            - name: Day count, calendar and business day convention library
              description: |-
                ## Purpose
                Half the pricing differences between two systems turn out to be an Actual/360 leg treated as Actual/365 or a holiday calendar missing one date. A single tested module for day counts, holiday calendars and roll conventions, checked against published examples, removes that whole class of error before any curve is built.

                ## Milestones
                1. Day count fractions implemented for every convention your instruments use.
                2. Holiday calendars sourced for each currency in scope, with joint calendars where legs need them.
                3. Modified following, following and end-of-month roll rules implemented and tested.
                4. A test file of worked examples from a published convention guide that passes in full.

                ## Notes
                Never hard-code holidays from memory. Take them from a maintained source and record the version, because exchanges and central banks add one-off closures.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A convention module passes a test file of at least twenty published day count and date roll examples across every currency in scope."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every day count and roll convention your instruments use"
                - "Find a published guide with worked day count examples"
                - "Implement the conventions and write one test per worked example"
                - "Record the source and version of each holiday calendar"
            - name: Instrument reference data for bonds, swaps and CDS
              description: |-
                ## Purpose
                No curve or spread model is better than its description of each instrument: coupon frequency, first coupon date, settlement lag, fixing index, notional schedule, seniority and restructuring clause. Holding these as clean reference records, rather than scattered across spreadsheets, lets every model read the same terms and makes errors visible.

                ## Milestones
                1. A reference schema covering bonds, deposits, futures, swaps and CDS contracts.
                2. Every instrument used in curve building entered with its full terms.
                3. Missing or conflicting fields flagged by an automatic check.
                4. A named owner and source recorded for each field.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every instrument feeding a curve has a complete reference record that passes the missing field check, with a named source per field."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft the reference fields needed for each instrument type"
                - "Load the instruments currently used in your curve builds"
                - "Write a check that flags blank or conflicting terms"
                - "Note the source document for coupon, schedule and seniority fields"
            - name: Market quote snapshot and close time conventions
              description: |-
                ## Purpose
                Mixing a futures settlement price taken at one time with swap quotes from two hours later builds a curve that never existed. Fixing a snapshot time per currency, storing every quote with its timestamp and source, and keeping bid, ask and mid separately makes each curve reproducible on any past date.

                ## Milestones
                1. A snapshot time agreed for each currency and written in the methodology.
                2. Every stored quote carrying instrument, timestamp, source and side.
                3. Stale quotes older than a set threshold flagged automatically.
                4. Any past day's curve inputs retrievable in one query.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Curve inputs for any of the last thirty business days can be retrieved with timestamps and sources, and stale quotes are flagged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick and record a snapshot time for each currency in scope"
                - "Store quotes with timestamp, source and bid, ask or mid"
                - "Set a staleness threshold and flag quotes that exceed it"
                - "Rebuild last Friday's curve inputs from storage as a test"
            - name: Bond price, yield and accrued interest calculator
              description: |-
                ## Purpose
                Clean price, dirty price, accrued interest and yield to maturity look simple until an odd first coupon, an ex-dividend period or a settlement over a weekend appears. A calculator checked against prices and yields published by an exchange or debt office gives a trusted base for every spread and duration number later in this area.

                ## Milestones
                1. Clean and dirty price, accrued interest and yield computed for fixed coupon bonds.
                2. Odd first and last coupons and ex-coupon periods handled.
                3. Results matching published yields for ten bonds to within a stated tolerance.
                4. Known limits of the calculator written at the top of the code.

                ## Notes
                Check your yield convention against the market's: some quote semi-annual compounding, some annual, and some use a street convention that differs from the true yield.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The calculator reproduces published yields for ten government bonds, including one with an odd coupon, within a tolerance written in the test file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Download published prices and yields for ten government bonds"
                - "Implement accrued interest, clean and dirty price and yield"
                - "Add handling for odd coupons and ex-coupon periods"
                - "Compare against the published figures and record the differences"
            - name: Discount factor, zero and forward rate conversion toolkit
              description: |-
                ## Purpose
                Every curve can be expressed as discount factors, zero rates under several compounding rules, or forward rates, and confusion between them causes quiet errors in risk reports. A small toolkit that converts in both directions, with round-trip tests, means you never again hand-convert a continuously compounded rate in a spreadsheet.

                ## Milestones
                1. Conversions between discount factors, zero rates and forwards implemented.
                2. Simple, annual, semi-annual and continuous compounding supported.
                3. Round-trip tests that return the input to machine precision.
                4. A one-page note explaining which representation each downstream user expects.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Round-trip conversion tests pass for every compounding rule, and a note maps each downstream user to the representation they expect."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the conversion formulas for each compounding rule on one page"
                - "Implement discount factor to zero and forward conversions"
                - "Add round-trip tests for every compounding rule"
                - "Ask each downstream user which curve representation they read"
            - name: Bootstrapped single curve from deposits, futures and swaps
              description: |-
                ## Purpose
                Bootstrapping a curve by hand, instrument by instrument, is how most rates quants first understand why the short end, the futures strip and the swap section behave differently. Building one single curve for one currency, and repricing every input to zero, gives the reference implementation that later multi-curve work is checked against.

                ## Milestones
                1. Deposit, futures or short-dated instruments and swap quotes chosen for one currency.
                2. Discount factors solved instrument by instrument in maturity order.
                3. Every input instrument repricing to its quote within a set tolerance.
                4. A chart of zero and one-month forward rates with any kinks explained.

                ## Notes
                Futures need a convexity adjustment before they are used as forwards. Start with a simple published approximation and note it as a known limit.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single curve for one currency reprices all input instruments within a stated tolerance, with forward rate kinks charted and explained."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose the instrument set for one currency and record why"
                - "Bootstrap discount factors in maturity order"
                - "Reprice every input and log the residual for each"
                - "Chart forward rates and write a sentence on each kink"
            - name: Multi-curve build with overnight rate discounting
              description: |-
                ## Purpose
                Since collateralised swaps moved to discounting at overnight rates, a single curve cannot price both the discounting and the projection of term rates correctly. Separating the discount curve from one or more projection curves, and solving them together, is the standard set-up for any modern rates model and the first thing an interviewer or reviewer will check.

                ## Milestones
                1. An overnight discount curve built from overnight index swap quotes.
                2. Projection curves for each index tenor in scope solved with that discount curve.
                3. Basis swaps between tenors repricing within tolerance.
                4. Differences against the single curve build explained in a short note.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Discount and projection curves reprice overnight index swaps, term swaps and basis swaps within tolerance, with the gap to the single curve explained."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List the overnight index swaps and basis swaps you will use"
                - "Build the overnight discount curve and reprice its inputs"
                - "Solve projection curves against the new discount curve"
                - "Write a note comparing swap values with the single curve build"
            - name: Rates and credit model inventory register
              description: |-
                ## Purpose
                After a year most researchers have a dozen curve builds, pricers and calibration scripts, and nobody can say which version produced last quarter's numbers. A short register of every model, its owner, inputs, version and known limits is the cheapest form of model governance and saves hours whenever someone asks where a number came from.

                ## Milestones
                1. Every curve, pricer and credit model listed with its purpose and owner.
                2. Inputs, version and last test date recorded for each.
                3. Known limits and approximations written in one line per model.
                4. Retired models marked rather than deleted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register lists every model in use with owner, version, inputs, last test date and known limits, reviewed at least once a quarter."
                cadence: rolling
              tasks:
                - "List every curve, pricer and credit script you currently run"
                - "Add owner, version, inputs and last test date for each"
                - "Write one line of known limits per model"
                - "Review the inventory and mark retired models @recurring(quarterly)"
            - name: Twice-weekly curve build and sanity check
              description: |-
                ## Purpose
                Curves break quietly: a quote source changes a ticker, a holiday is missed, a futures contract rolls. Running the build on a fixed rhythm and checking a short list of sanity rules (repricing residuals, forward rate jumps, day-on-day moves against market news) catches errors while they are still easy to trace.

                ## Milestones
                1. A written list of five to eight sanity rules for every curve.
                2. The build and checks running on a fixed schedule.
                3. Every failed check logged with cause and fix.
                4. A month without an unexplained failure.

                ## Notes
                A day-on-day move far larger than the news suggests is more often a data error than a market event. Check the input before believing the curve.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Curves are built and checked twice a week for three months, with every failed check logged alongside its cause and fix."
                cadence: rolling
              tasks:
                - "Write the sanity rules every curve build must pass"
                - "Run the curve build and sanity checks @recurring(weekly:mon,thu)"
                - "Log each failed check with its cause and the fix applied"
                - "Compare large day-on-day moves with that day's market news"
            - name: Curve fit residual and outlier monitor
              description: |-
                ## Purpose
                For a fitted government bond curve, the residual on each bond tells you either that the model is too stiff or that one bond is genuinely rich or cheap for reasons such as a futures delivery or a repo squeeze. Tracking residuals over time separates persistent model error from short-lived bond-specific effects.

                ## Milestones
                1. Residuals for every bond in the fit stored each week.
                2. Bonds with residuals beyond a set threshold flagged.
                3. A note on each flagged bond giving a likely cause.
                4. Persistent residual patterns by maturity fed back into the curve methodology.

                ## Notes
                Start from the **Metrics log** template to keep the weekly residual summary in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly residual log covers at least twelve weeks, with every bond beyond the threshold annotated with a likely cause."
                cadence: rolling
              tasks:
                - "Set a residual threshold in basis points for flagging bonds"
                - "Store fitted residuals and flag outliers @recurring(weekly:tue)"
                - "Write a likely cause beside each flagged bond"
                - "Chart average residual by maturity bucket @recurring(monthly:12)"
            - name: Monthly repricing test against independent quotes
              description: |-
                ## Purpose
                Repricing the curve's own inputs only proves the solver converged. Pricing instruments that were not used in the build, such as off-the-run swaps, forward-starting swaps or bonds, against independent quotes is what shows the curve is right between its nodes.

                ## Milestones
                1. A test set of instruments not used in the curve build chosen.
                2. Independent quotes for the test set gathered from a second source.
                3. Pricing differences recorded each month against a tolerance.
                4. Any breach investigated and the outcome written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Out-of-build instruments are repriced monthly for six months, with every breach of tolerance investigated and its outcome recorded."
                cadence: rolling
              tasks:
                - "Pick ten instruments that are not inputs to the curve build"
                - "Find a second quote source for those instruments"
                - "Reprice the test set and record differences @recurring(monthly:5)"
                - "Write up the cause of any difference beyond tolerance"
            - name: Credit spread and CDS curve data refresh
              description: |-
                ## Purpose
                Credit curves go stale faster than rates curves: single-name CDS quotes thin out, bonds are called, issuers are downgraded and reference entities merge. A monthly refresh of issuer mappings, quote coverage and recovery assumptions keeps spread and hazard models fed with the names you think they hold.

                ## Milestones
                1. Issuer to bond and CDS reference entity mappings checked.
                2. Names with thin or missing quotes listed with a fallback rule.
                3. Corporate events such as mergers, calls and defaults applied.
                4. A coverage count by sector and rating recorded each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly refresh notes for six months show issuer mappings checked, thin names handled by a written rule and coverage counts recorded."
                cadence: rolling
              tasks:
                - "Write the fallback rule for issuers with thin or missing quotes"
                - "Check issuer mappings and apply corporate events @recurring(monthly:8)"
                - "Record quote coverage by sector and rating"
                - "Review recovery rate assumptions by seniority @recurring(quarterly)"
            - name: Pricer regression tests and change log
              description: |-
                ## Purpose
                Even a small change to an interpolation setting or a holiday calendar can move hundreds of valuations by a fraction of a basis point, which is enough to break a reconciliation. A fixed regression portfolio, rerun before every change, plus a dated log of what changed and why, makes every difference explainable.

                ## Milestones
                1. A regression portfolio of swaps, bonds and CDS with stored reference values.
                2. Regression tests run automatically before any change is merged.
                3. A change log entry for every methodology or code change.
                4. Expected value changes signed off before reference values are updated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every change in the last three months has a log entry and a regression run, and no reference value changed without written sign-off."
                cadence: rolling
              tasks:
                - "Choose thirty instruments for the regression portfolio"
                - "Store their reference values with the code version that produced them"
                - "Run the regression suite before merging any pricer change"
                - "Review the change log for unexplained value moves @recurring(monthly:20)"
            - name: Short-rate model calibration stability tracker
              description: |-
                ## Purpose
                Short-rate models whose mean reversion parameter swings from one month to the next give unstable hedge ratios even when prices fit well. Tracking calibrated parameters and fit errors over time shows whether the model is genuinely capturing the market or just bending to fit each day's quotes.

                ## Milestones
                1. Calibrated parameters and fit errors stored for every calibration date.
                2. A chart of each parameter over at least six months.
                3. A written threshold for a parameter jump that triggers a review.
                4. Every triggered review recorded with its conclusion.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of calibrated parameters are charted, a jump threshold is written, and every jump beyond it has a recorded review."
                cadence: rolling
              tasks:
                - "Store parameters and fit errors from each calibration run"
                - "Set a jump threshold for each parameter and write it down"
                - "Chart parameter history and flag jumps @recurring(monthly:15)"
                - "Compare the calibration instrument set with last quarter @recurring(quarterly)"
            - name: Policy meeting and data release calendar for curves
              description: |-
                ## Purpose
                Overnight rates step at central bank meetings, not smoothly, and the short end of a curve built without meeting dates will smear those steps into odd forwards. Keeping a calendar of policy meetings and major data releases per currency lets the curve place nodes at the right dates and explains sudden moves in the checks.

                ## Milestones
                1. Policy meeting dates for each currency in scope listed for the next year.
                2. Major data releases that move the short end noted.
                3. Curve nodes aligned with meeting dates where the methodology uses them.
                4. The calendar refreshed when central banks publish new dates.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A calendar holds the next twelve months of policy meetings for every currency in scope and is refreshed at least once a quarter."
                cadence: rolling
              tasks:
                - "Collect the published policy meeting dates for each currency"
                - "Add the data releases that most often move short-dated rates"
                - "Check the calendar against central bank websites @recurring(quarterly)"
                - "Load next year's published meeting dates @recurring(yearly)"
            - name: Rates and credit reading queue
              description: |-
                ## Purpose
                The field has a small canon (standard texts on interest rate modelling, credit risk and fixed income analytics) plus a steady stream of papers on multi-curve methods, benchmark reform and credit spreads. A short queue with one paper or chapter a month, and a paragraph of notes each, builds depth without turning into an unread pile.

                ## Milestones
                1. A queue of at least eight books, chapters or papers, ordered by priority.
                2. One item read and summarised each month.
                3. Each summary noting one idea to test in your own models.
                4. At least one idea from the queue tried in code.

                ## Notes
                Start from the **Reading queue** template. Prefer working the examples in a chapter over reading three more papers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six summaries exist, each with an idea to test, and at least one idea has been tried in code with the result recorded."
                cadence: rolling
              tasks:
                - "List eight texts or papers on rates and credit to read"
                - "Order the queue by what your current work needs first"
                - "Read one item and write a paragraph of notes @recurring(monthly:25)"
                - "Pick one idea from your notes to test in code"
            - name: Annual curve and credit model review cycle
              description: |-
                ## Purpose
                Markets change under a model: instruments become illiquid, benchmarks are replaced and a credit market that once had dozens of quoted names may now have a handful. A yearly review of each model's inputs, assumptions and performance against the scope statement keeps the toolkit honest and gives a natural point to retire what no longer earns its place.

                ## Milestones
                1. Each model in the inventory reviewed against its stated purpose.
                2. Input instrument liquidity checked and changes proposed where needed.
                3. Assumptions and approximations confirmed or revised.
                4. A dated review summary with actions and owners.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A dated annual review summary covers every model in the inventory, with actions, owners and target dates."
                cadence: cyclic
              tasks:
                - "Pick the month for the annual review and block the time"
                - "Run the annual review of every curve and credit model @recurring(yearly)"
                - "Check liquidity of each curve's input instruments"
                - "Write the review summary with actions and owners"
            - name: Duration, DV01 and convexity by formula and by bump
              description: |-
                ## Purpose
                Modified duration, DV01 and convexity can be computed from closed-form formulas or by bumping the curve and repricing, and the two only agree when you understand exactly which rate was bumped. Working both ways for a bond, a swap and a portfolio builds the intuition every later risk report depends on.

                ## Milestones
                1. Macaulay and modified duration, DV01 and convexity computed by formula for three bonds.
                2. The same measures computed by parallel bumps of the curve.
                3. Differences between the two methods explained in writing.
                4. A second-order price approximation tested against full repricing for a large rate move.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Formula and bump results for three bonds and a swap agree within stated tolerances, and every remaining difference is explained."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compute duration and convexity by formula for three bonds"
                - "Bump the curve by one basis point and reprice the same bonds"
                - "Repeat the comparison for a vanilla swap"
                - "Test the duration and convexity approximation for a 100 basis point move"
            - name: Key rate durations and bucketed risk report
              description: |-
                ## Purpose
                Parallel duration hides the risk that matters most in practice: exposure to a steepening or flattening of the curve. Bucketing sensitivity by tenor, either by key rate bumps or by bumping the input instruments, produces the report traders, risk managers and portfolio managers actually read.

                ## Milestones
                1. Key tenors for each currency chosen and recorded.
                2. Bucketed sensitivities computed for a test portfolio by two methods.
                3. Bucket totals reconciling to parallel DV01 within tolerance.
                4. A one-page report layout agreed with one reader.

                ## Notes
                Bumping zero rates and bumping par instrument quotes give different bucket profiles. Pick one, state it on the report and keep it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bucketed risk report for a test portfolio reconciles to parallel DV01 and has been reviewed by one intended reader."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the key tenors for each currency in scope"
                - "Compute bucketed risk by zero rate bumps and par quote bumps"
                - "Reconcile bucket totals to parallel DV01"
                - "Show the draft report to one reader and note their changes"
            - name: Choosing a curve interpolation method
              description: |-
                ## Purpose
                Linear on zero rates, log-linear on discount factors, monotone convex and splines each trade smooth forwards against local behaviour and hedge stability. Comparing them on the same inputs, by forward smoothness, locality of risk and repricing of off-node instruments, turns a default left in someone's code into a recorded decision.

                ## Milestones
                1. Four interpolation schemes implemented on the same curve inputs.
                2. Forward curves charted side by side.
                3. Locality tested by bumping one input and measuring how far risk spreads.
                4. A choice recorded with its reasons and known weaknesses.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the chosen interpolation method, with forward smoothness, locality and off-node repricing compared across four schemes."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Implement four interpolation schemes on one set of inputs"
                - "Chart the forward curves from each scheme on one page"
                - "Bump a single input and measure how far risk spreads"
                - "Write down the chosen method and its known weaknesses"
            - name: Nelson-Siegel-Svensson fit to a government curve
              description: |-
                ## Purpose
                Parametric curves such as Nelson-Siegel and Svensson are what many central banks publish and what researchers use for smooth government curves with few parameters. Fitting one to real bond prices, and comparing it with a published fit, teaches the practical problems: parameter instability, sensitivity to starting values and which bonds to exclude.

                ## Milestones
                1. A bond universe chosen with written exclusion rules for short and special bonds.
                2. Nelson-Siegel and Svensson fits estimated on several dates.
                3. Fitted yields compared with a published central bank curve.
                4. Parameter stability across dates charted and discussed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Fits on at least five dates are compared with a published curve, with yield differences and parameter stability documented."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Download a published parametric government curve for comparison"
                - "Write exclusion rules for bonds you will leave out of the fit"
                - "Fit Nelson-Siegel and Svensson curves on five dates"
                - "Chart fitted parameters across dates and note instability"
            - name: Principal components of yield curve changes
              description: |-
                ## Purpose
                Daily yield curve changes are dominated by three patterns that look like level, slope and curvature, and knowing their shape and share of variance is basic vocabulary for any rates researcher. Running the decomposition yourself, on different periods, also shows how much those patterns shift when policy rates sit near zero or move fast.

                ## Milestones
                1. Daily changes for a fixed set of tenors assembled for at least ten years.
                2. Principal components and explained variance computed.
                3. Loadings charted and labelled.
                4. The decomposition repeated on two contrasting sub-periods with differences noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note shows loadings and explained variance for the full sample and two sub-periods, with the differences described."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Assemble daily yields for eight tenors over ten years"
                - "Compute principal components of daily yield changes"
                - "Chart the first three loadings and label them"
                - "Repeat for a low-rate and a fast-hiking period and compare"
            - name: Vasicek and CIR short-rate models implemented
              description: |-
                ## Purpose
                The Vasicek and Cox-Ingersoll-Ross models are where most people first see mean reversion, closed-form bond prices and the trade-off between tractability and realism, including negative rates in one and not the other. Implementing both, checking closed forms against simulation and fitting them to a curve shows clearly why practitioners moved to models that fit today's curve exactly.

                ## Milestones
                1. Closed-form zero coupon bond prices implemented for both models.
                2. Monte Carlo prices matching the closed forms within simulation error.
                3. Both models fitted to one day's curve, with fit errors recorded.
                4. A short note on where each model fails to match the market.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Closed-form and simulated bond prices agree for both models, and a note records fit errors and limitations against a real curve."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write out the Vasicek and CIR bond price formulas from a textbook"
                - "Implement closed-form bond prices for both models"
                - "Check closed forms against Monte Carlo simulation"
                - "Fit both models to one day's curve and record the errors"
            - name: Hull-White calibration to caps and swaptions
              description: |-
                ## Purpose
                The one-factor Hull-White model fits today's curve by construction and is still widely used for callable bonds and simple exotics, but its volatility parameters must be calibrated to caps or swaptions. Working through a calibration, and seeing which instruments it can and cannot fit at once, is the practical lesson in model choice that textbooks skip.

                ## Milestones
                1. A trinomial tree or analytic pricer for the model implemented.
                2. Calibration to a set of swaption or cap quotes completed.
                3. Fit errors by expiry and tenor tabulated.
                4. A written view on which calibration set suits which product.

                ## Notes
                Calibrating to co-terminal swaptions suits a Bermudan with the same final maturity. Calibrating to the whole grid usually fits nothing well.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A calibration report tabulates fit errors by expiry and tenor for two calibration sets and states which suits which product."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect one day's swaption or cap volatility quotes"
                - "Implement the pricer and check it on a zero coupon bond"
                - "Calibrate to co-terminal and to diagonal swaption sets"
                - "Tabulate fit errors and write which set suits which product"
            - name: Merton structural model and distance to default
              description: |-
                ## Purpose
                Structural models treat equity as an option on a firm's assets and turn equity prices and volatility into a default probability. Building a Merton-style model for a handful of listed issuers, and comparing its output with their bond or CDS spreads, shows both the appeal of the idea and why model spreads for short maturities are often far too low.

                ## Milestones
                1. Asset value and volatility solved from equity data for five issuers.
                2. Distance to default and model default probabilities computed.
                3. Model spreads compared with observed bond or CDS spreads.
                4. The short-maturity spread gap explained in a note.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Model default probabilities and spreads for five issuers are compared with market spreads, with the short-maturity gap explained."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick five listed issuers with traded bonds or CDS"
                - "Gather equity value, equity volatility and debt for each"
                - "Solve for asset value and volatility and compute distance to default"
                - "Compare model spreads with market spreads by maturity"
            - name: Hazard rate curves bootstrapped from CDS spreads
              description: |-
                ## Purpose
                Reduced-form credit models describe default as a random event with an intensity, and the CDS market quotes exactly the information needed to back that intensity out by tenor. Bootstrapping a piecewise hazard curve, with a stated recovery assumption, is the core building block for pricing any credit-sensitive instrument.

                ## Milestones
                1. CDS quotes for one issuer across standard tenors gathered.
                2. Piecewise constant hazard rates bootstrapped with a fixed recovery.
                3. Every input CDS repricing to zero value within tolerance.
                4. Survival probabilities charted and sensitivity to the recovery assumption shown.

                ## Notes
                Modern CDS trade with a fixed coupon and an upfront payment. Convert quotes consistently before bootstrapping, using a published standard model as your check.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A hazard curve for one issuer reprices all input CDS within tolerance, and survival curves under three recovery assumptions are charted."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Gather CDS quotes for one issuer across standard tenors"
                - "Convert upfront and running quotes to a consistent basis"
                - "Bootstrap the hazard curve and reprice every input contract"
                - "Chart survival probabilities under three recovery assumptions"
            - name: Spread measures compared on the same bonds
              description: |-
                ## Purpose
                G-spread, I-spread, asset swap spread, Z-spread and option-adjusted spread answer different questions, and research that mixes them across issuers produces nonsense comparisons. Computing all of them on the same small set of bonds, and writing a one-line definition of each, sets the vocabulary for every spread study that follows.

                ## Milestones
                1. Five spread measures computed for ten bonds on one date.
                2. A one-line definition and intended use written for each measure.
                3. Bonds where the measures disagree most identified and explained.
                4. A house rule for which measure each kind of study uses.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of five spread measures for ten bonds exists, with definitions, explained disagreements and a written rule on which to use when."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick ten bonds across maturities and issuers"
                - "Compute G, I, asset swap, Z and option-adjusted spreads"
                - "Explain the three largest disagreements between measures"
                - "Write the rule for which spread each study type uses"
            - name: Recovery rate assumption review
              description: |-
                ## Purpose
                Fixed recovery by seniority is the default in most credit models, but the assumption moves default probabilities a long way and real recoveries vary by sector and by cycle. Reviewing what your models assume against published recovery studies, and recording the choice, makes a hidden parameter visible.

                ## Milestones
                1. Recovery assumptions used by each credit model listed.
                2. Published recovery statistics by seniority and sector summarised.
                3. Model sensitivity to a ten point recovery change measured.
                4. A recorded decision on default recoveries, with its source.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision note states the recovery assumption by seniority, cites its source and shows the sensitivity of key outputs."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the recovery assumption in every credit model you run"
                - "Summarise published recovery statistics by seniority"
                - "Measure output sensitivity to a ten point recovery change"
                - "Record the chosen assumption and its source"
            - name: Choosing a rates and credit analytics library
              description: |-
                ## Purpose
                Writing every bootstrapper and pricer from scratch is a fine way to learn and a poor way to run production work. Comparing an open-source library, a commercial package and your own code on the same test cases (coverage, accuracy, speed, licence and maintenance) gives a decision you can defend to a manager or a reviewer.

                ## Milestones
                1. Three options shortlisted, including keeping your own code.
                2. The same twenty test cases run on each option.
                3. Licence terms, support and maintenance effort compared.
                4. A decision recorded with a review date.

                ## Notes
                Start from the **Purchase decision** template. An open-source library still needs someone who understands its conventions well enough to spot a wrong default.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record compares three options on twenty shared test cases, licence and maintenance, and names the choice and review date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Shortlist three library options including your own code"
                - "Run the same twenty test cases on each option"
                - "Compare licence, support and maintenance effort"
                - "Record the decision with a date to revisit it"
            - name: Benchmark rate transition and fallback mapping
              description: |-
                ## Purpose
                Many older contracts and data histories still reference term interbank rates that have been replaced by overnight risk-free rates, with fallback spreads and conventions set by industry protocols. Mapping which of your instruments, histories and models still assume the old benchmarks, and how fallbacks apply, avoids silent errors in long backtests and legacy valuations.

                ## Milestones
                1. Every instrument and data series referencing a replaced benchmark listed.
                2. The applicable fallback rate, spread adjustment and convention recorded for each.
                3. Historical series spliced with the method and date written down.
                4. Remaining open questions passed to the legal or operations owner.

                ## Notes
                How a fallback applies to a specific contract is a legal question. Record the published protocol terms and leave contract interpretation to the right professional.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A mapping lists every legacy benchmark reference with its fallback terms and splice method, and open questions have a named owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Search your instruments and data for replaced benchmark references"
                - "Record the published fallback rate and spread for each"
                - "Document how historical series were spliced and on what date"
                - "Send open contract questions to the legal or operations owner"
            - name: Callable bond model choice and option-adjusted spread
              description: |-
                ## Purpose
                Callable bond spreads depend heavily on the rates model and volatility used to value the call, so two desks can quote very different option-adjusted spreads for the same bond. Comparing a lattice model under two volatility assumptions, and recording which you use, keeps callable spreads comparable across your research.

                ## Milestones
                1. A lattice pricer for callable bonds checked against a non-callable case.
                2. Option-adjusted spreads computed for five callable bonds under two volatility settings.
                3. The spread sensitivity to volatility tabulated.
                4. A house convention for callable bond spreads written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A note tabulates option-adjusted spreads for five callable bonds under two volatility settings and states the house convention."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Check the lattice pricer reproduces a straight bond price"
                - "Price five callable bonds and solve for option-adjusted spread"
                - "Repeat under a second volatility assumption"
                - "Write down the convention you will use for callable spreads"
            - name: Curve methodology presentation to a model review committee
              description: |-
                ## Purpose
                Before a curve or credit model is used for official numbers, a review committee or senior quant will want to see the instruments, interpolation, calibration, tests and known limits on a few slides. Preparing that presentation forces the methodology into a form someone else can challenge, and the questions are the most useful feedback you will get.

                ## Milestones
                1. A methodology document of under ten pages covering inputs, method, tests and limits.
                2. Slides prepared with repricing and regression test evidence.
                3. Expected questions listed with prepared answers.
                4. Committee decisions and actions recorded after the session.

                ## Notes
                Start from the **Meeting notes** template to capture the questions asked and the actions agreed.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The methodology is presented on a dated session, and the committee's decision and actions are recorded with owners."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the reviewer what format and evidence they expect"
                - "Write the methodology document covering inputs, tests and limits"
                - "Ask the agent to draft likely reviewer questions from the document"
                - "Record the committee's decision and actions with owners"
            - name: Peer review of a credit model before sign-off
              description: |-
                ## Purpose
                Credit models hide judgement in places that are easy to miss: recovery, the treatment of upfront quotes, issuer mapping and what happens when quotes go missing. A structured peer review by a colleague, with a written checklist and a short report, catches these before the model's output is relied on.

                ## Milestones
                1. A review checklist covering data, assumptions, code and tests.
                2. A reviewer agreed and given the code, data and documentation.
                3. Findings recorded with severity and agreed fixes.
                4. Fixes made and confirmed by the reviewer.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A peer review report lists findings by severity, and every high-severity finding is fixed and confirmed by the reviewer."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft the review checklist for data, assumptions, code and tests"
                - "Agree a reviewer and a review date"
                - "Package the code, data snapshot and documentation for the reviewer"
                - "Log each finding with severity and the agreed fix"
            - name: Rates or credit research seminar talk
              description: |-
                ## Purpose
                Presenting a piece of rates or credit work at an internal seminar, a university workshop or a practitioner conference builds reputation and sharpens the work, because a room of specialists will find the weakest assumption in minutes. Choosing one finished study and preparing it properly is better than presenting three half-finished ones.

                ## Milestones
                1. One finished study chosen and a venue identified.
                2. An abstract submitted or a slot agreed.
                3. A twenty-minute talk rehearsed twice with timing checked.
                4. Questions from the audience written up with follow-ups.

                ## Notes
                Check what you may share. Anything built on an employer's data or code needs clearance before it leaves the building.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A talk on one finished rates or credit study is given at a named venue, with audience questions and follow-ups recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick one finished study and list three possible venues"
                - "Check with your employer what results and code you may share"
                - "Submit an abstract or agree a speaking slot"
                - "Rehearse the talk twice against a timer"
            - name: Year-end rates and credit model retrospective
              description: |-
                ## Purpose
                Each year leaves lessons that fade by February: a curve that broke during a policy surprise, a credit name whose quotes vanished, a calibration that never stabilised. A short retrospective at year end, drawing on the change log and failed checks, turns those incidents into improvements for next year's work.

                ## Milestones
                1. The year's failed checks, change log entries and incidents gathered.
                2. The three most costly problems identified with root causes.
                3. Improvements for next year chosen and added to the plan.
                4. A one-page retrospective filed with the model inventory.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A one-page retrospective names the year's three most costly problems, their root causes and the improvements chosen for next year."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Gather the year's failed checks and change log entries"
                - "Hold the year-end model retrospective @recurring(yearly)"
                - "Identify the three most costly problems and their root causes"
                - "Add the chosen improvements to next year's plan"
            - name: From equity quant to rates desk quant
              description: |-
                ## Purpose
                Researchers moving from equities to rates find that the statistics transfer but the instruments, conventions and vocabulary do not, and that a rates desk cares far more about curves, hedging and exact repricing than about cross-sectional signals. A focused plan for the first few months, built around curves, swaps and risk, shortens the period of being quietly lost in meetings.

                ## Milestones
                1. A glossary of fifty rates terms with your own one-line definitions.
                2. A swap priced and its risk computed end to end in your own code.
                3. A morning curve commentary read and explained back to a colleague.
                4. A list of the desk's main products and the model each one uses.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within four months a glossary, an end-to-end swap pricer with risk and a product to model map exist and have been checked by a colleague."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Start a glossary and add every unfamiliar term from this week"
                - "Price a vanilla swap end to end in your own code"
                - "Ask a desk colleague to map the main products to their models"
                - "Explain one morning curve commentary back to a colleague"
            - name: Applied maths PhD into credit modelling
              description: |-
                ## Purpose
                Mathematicians and physicists usually find the credit models themselves easy and the market realities hard: sparse quotes, recovery conventions, documentation clauses and the gap between a clean hazard model and how a credit desk actually marks a name. A plan that pairs the theory you already have with hands-on work on real quotes and a practitioner's view helps a PhD become useful quickly.

                ## Milestones
                1. The core reduced-form and structural models mapped to your existing mathematics.
                2. A hazard curve built from real CDS quotes for three issuers.
                3. A conversation with a credit practitioner about how names are marked when quotes are thin.
                4. A short note on three gaps between the textbook and desk practice.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Hazard curves for three issuers are built from real quotes, and a note records three textbook to practice gaps confirmed by a practitioner."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the credit models and the maths from your PhD they rely on"
                - "Build hazard curves for three issuers from real quotes"
                - "Arrange a conversation with a credit practitioner"
                - "Write up three gaps between the textbook and desk practice"
            - name: Audit of inherited curve-building code
              description: |-
                ## Purpose
                Inheriting a colleague's curve builder, often a mix of scripts, spreadsheets and undocumented overrides, is common when someone leaves or a team merges. A structured audit (what it builds, from which inputs, with which conventions and manual tweaks) makes it safe to run and shows what to fix first.

                ## Milestones
                1. Every curve the code builds listed with its inputs and conventions.
                2. Hard-coded overrides and manual adjustments found and documented.
                3. Outputs reproduced from scratch for one past date.
                4. A ranked list of fixes agreed with whoever relies on the output.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An audit report lists each curve, its inputs, conventions and overrides, reproduces one past date and ranks fixes agreed with users."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List every curve the inherited code produces"
                - "Search the code and spreadsheets for hard-coded overrides"
                - "Reproduce one past date's curves from the stored inputs"
                - "Agree a ranked fix list with the people who use the output"
            - name: Spread analysis support for a credit analyst
              description: |-
                ## Purpose
                Fundamental credit analysts often want quick, consistent numbers: where an issuer trades against its sector curve, how its spread moved after results, how its CDS compares with its bonds. A light weekly service with a fixed format gives the analyst what they need and gives you a steady view of how spread models are used.

                ## Milestones
                1. The analyst's top questions and issuers agreed.
                2. A fixed one-page spread summary format in place.
                3. Summaries delivered on a weekly rhythm.
                4. Feedback gathered after one quarter and the format adjusted.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The analyst receives a weekly spread summary in an agreed format for one quarter and has given recorded feedback."
                cadence: rolling
              tasks:
                - "Ask the analyst for their top five questions and issuers"
                - "Design a one-page spread summary format with them"
                - "Send the weekly spread summary to the analyst @recurring(weekly:wed)"
                - "Ask for feedback after one quarter and adjust the format"
            - name: Interest rate risk report for a balance sheet team
              description: |-
                ## Purpose
                Bank treasury and risk teams measure interest rate risk in the banking book differently from a trading desk: repricing gaps, earnings sensitivity and the economic value of equity under prescribed shocks, often with behavioural assumptions for deposits and prepayments. Building the report for such a team means learning their regulator-driven definitions and making every assumption visible.

                ## Milestones
                1. The team's required measures and shock scenarios listed from their policy documents.
                2. Behavioural assumptions for deposits and prepayments recorded with owners.
                3. A monthly report producing gap, earnings and economic value measures.
                4. Results reconciled with the previous method before switching over.

                ## Notes
                Regulatory definitions and shock sizes vary by jurisdiction and change. Take them from the team's current policy and their regulator's published rules, not from memory.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A monthly balance sheet rate risk report runs for three months, with assumptions owned and results reconciled to the previous method."
                cadence: rolling
              tasks:
                - "Read the team's rate risk policy and list the required measures"
                - "Record each behavioural assumption with its owner"
                - "Produce the balance sheet rate risk report @recurring(monthly:10)"
                - "Reconcile the first three reports with the previous method"
            - name: Government curve for a thin bond market
              description: |-
                ## Purpose
                Researchers working on smaller and emerging bond markets, including many Caribbean, African and Latin American issuers, face curves built from a handful of infrequently traded bonds with no liquid swap market. Designing a curve method for sparse and stale prices, with explicit rules for which trades and quotes to trust, makes research on those markets possible and honest about its limits.

                ## Milestones
                1. All available prices, auction results and trades for one market collected.
                2. Rules written for stale prices, small trades and auction yields.
                3. A parametric curve fitted with uncertainty bands shown.
                4. Limits of the curve stated plainly for anyone using it.

                ## Notes
                In thin markets the published auction yield is often the most reliable point you have. Record its date beside every point on the curve.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A curve for one thin market is published internally with its data rules, uncertainty bands and written limits."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect auction results, trades and quotes for one market"
                - "Write rules for stale prices, small trades and auctions"
                - "Fit a parametric curve and estimate uncertainty bands"
                - "Write a short statement of the curve's limits"
            - name: Two-factor and forward market model study
              description: |-
                ## Purpose
                One-factor models move the whole curve together, so they cannot price products that depend on how different rates decorrelate. Studying a two-factor short-rate model and a forward market model, and comparing their implied correlations with historical ones, prepares you for spread options, curve products and the models senior rates quants maintain.

                ## Milestones
                1. A two-factor short-rate model implemented and fitted to today's curve.
                2. A simple forward market model simulated for a set of forward rates.
                3. Model-implied correlations between tenors compared with history.
                4. A note on which products need more than one factor.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note compares implied and historical tenor correlations for two models and lists the products that need more than one factor."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose a two-factor model and a textbook forward market model"
                - "Implement and fit the two-factor model to today's curve"
                - "Simulate forward rates and measure correlations between tenors"
                - "Compare implied correlations with historical ones"
            - name: Inflation-linked curve with seasonality
              description: |-
                ## Purpose
                Inflation-linked bonds and inflation swaps imply a curve of expected index levels, but monthly price indices carry strong seasonal patterns and an indexation lag that a naive fit ignores. Building an inflation curve with an explicit seasonality adjustment and the correct lag shows how breakeven inflation is really constructed.

                ## Milestones
                1. Inflation swap or linker quotes and index history gathered for one market.
                2. The indexation lag and interpolation rule taken from the instrument documentation.
                3. A seasonality adjustment estimated from index history.
                4. The curve repricing its inputs, with breakevens charted.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inflation curve with documented lag and seasonality reprices its inputs within tolerance, and breakevens by tenor are charted."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read the indexation rules in one linker's documentation"
                - "Gather inflation swap quotes and price index history"
                - "Estimate monthly seasonal factors from the index history"
                - "Build the curve and chart breakeven inflation by tenor"
            - name: Cross-currency basis and collateral currency discounting
              description: |-
                ## Purpose
                Swaps collateralised in a different currency are discounted on a curve that reflects the cross-currency basis, which can be large and volatile in stress. Building cross-currency curves and showing how valuation changes with collateral currency is advanced but increasingly expected of anyone who builds discount curves for more than one currency.

                ## Milestones
                1. Cross-currency basis swap quotes gathered for one currency pair.
                2. A foreign discount curve built consistent with the basis and FX forwards.
                3. One swap valued under two collateral currencies.
                4. The valuation difference explained and its sensitivity to the basis shown.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A swap is valued under two collateral currencies using basis-consistent curves, with the difference and basis sensitivity documented."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Gather cross-currency basis and FX forward quotes for one pair"
                - "Build the basis-consistent foreign discount curve"
                - "Value one swap under two collateral currencies"
                - "Measure valuation sensitivity to a shift in the basis"
            - name: Counterparty exposure simulation for a swap portfolio
              description: |-
                ## Purpose
                Credit valuation adjustment combines the rates and credit halves of this area: simulate future swap values, take the positive exposure and weight it by the counterparty's default probability. A small simulation for a test portfolio, with netting and collateral switched on and off, shows where the numbers come from before you meet a production system.

                ## Milestones
                1. Future curve scenarios simulated with a calibrated short-rate model.
                2. Expected positive exposure profiles computed for a test portfolio.
                3. Netting and simple collateral effects shown separately.
                4. A credit valuation adjustment computed with a hazard curve and recovery assumption.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Exposure profiles and a credit valuation adjustment for a test portfolio are computed, with netting and collateral effects shown separately."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Define a test portfolio of five swaps with one counterparty"
                - "Simulate future curves and revalue the portfolio on each path"
                - "Compute exposure profiles with and without netting"
                - "Combine exposure with a hazard curve to estimate the adjustment"
            - name: Portfolio credit loss distribution with a one-factor copula
              description: |-
                ## Purpose
                Default correlation drives the tail of any credit portfolio's loss distribution, and the one-factor Gaussian copula remains the standard teaching model despite its famous failures in tranche pricing. Building it, then varying correlation and recovery, makes clear how strongly portfolio credit results depend on assumptions that are hard to observe.

                ## Milestones
                1. A one-factor copula loss simulation for a portfolio of fifty names.
                2. The loss distribution charted at three correlation levels.
                3. Expected loss and a tail loss measure tabulated for each setting.
                4. A note on the model's known weaknesses and what practitioners use instead.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Loss distributions at three correlation levels are charted with expected and tail losses, and the model's weaknesses are written down."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Set up a test portfolio of fifty names with hazard rates"
                - "Simulate losses under a one-factor Gaussian copula"
                - "Chart the loss distribution at three correlation levels"
                - "Write a note on the model's weaknesses in stressed markets"
            - name: Credit spread decomposition into default and liquidity parts
              description: |-
                ## Purpose
                Observed corporate bond spreads are usually much wider than expected default losses alone would justify, and the rest is a mix of risk premium, liquidity and tax effects. Studying how published research separates these parts, using CDS-bond basis and liquidity measures on your own sample, is a demanding piece of specialist credit research.

                ## Milestones
                1. Three published approaches to spread decomposition summarised.
                2. Bond spreads, CDS spreads and a liquidity measure assembled for one sample.
                3. One decomposition method replicated on that sample.
                4. Results and their sensitivity to the method written up.

                ## Notes
                Results depend strongly on the liquidity measure chosen. Report two measures side by side rather than one headline number.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One published decomposition method is replicated on a bond sample, with results under two liquidity measures written up."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Summarise three papers on spread decomposition in a page each"
                - "Assemble bond spreads, CDS spreads and liquidity measures"
                - "Replicate one decomposition method on your sample"
                - "Write up results under two liquidity measures"
            - name: Credit rating transition matrix estimation
              description: |-
                ## Purpose
                Rating transition matrices link credit ratings to default and migration probabilities over a horizon, and they feed portfolio credit models, stress tests and expected loss estimates. Estimating one from rating history by cohort and by duration methods, and comparing it with published agency studies, shows how much the method and the period chosen matter.

                ## Milestones
                1. Rating histories for a sample of issuers assembled with withdrawals handled.
                2. One-year transition matrices estimated by cohort and duration methods.
                3. Results compared with a published agency study.
                4. Differences between periods and methods explained.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Cohort and duration transition matrices are estimated and compared with a published study, with period and method differences explained."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Assemble rating histories and decide how to treat withdrawn ratings"
                - "Estimate a one-year matrix with the cohort method"
                - "Estimate the same matrix with the duration method"
                - "Compare both with a published agency transition study"
            - name: Swaption volatility cube for rates model calibration
              description: |-
                ## Purpose
                Calibrating any rates model beyond the simplest needs a clean grid of swaption volatilities by expiry, tenor and strike, and the market quotes it in more than one convention. Assembling and cleaning a cube, with an explicit choice of normal or lognormal quoting and a smile interpolation, gives every calibration in this area a consistent input.

                ## Milestones
                1. Swaption quotes gathered across expiries, tenors and strikes.
                2. Quotes converted to one volatility convention with the method recorded.
                3. Gaps filled with a stated smile interpolation.
                4. The cube stored by date and used in one calibration.

                ## Notes
                Normal volatility quoting became standard in many markets when rates were near zero. Record the convention on every stored quote.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated swaption volatility cube in one convention, with documented gap filling, feeds at least one rates model calibration."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Gather swaption quotes across expiries, tenors and strikes"
                - "Convert quotes to one volatility convention and record how"
                - "Fill gaps using a smile interpolation and note the method"
                - "Use the cube in one Hull-White or two-factor calibration"
---

# Rates and Credit Modelling

Rates and credit modelling is mostly careful plumbing with a little elegant maths on top: a curve built from the wrong day count or a stale quote will mislead every price and risk number that sits on it. This area starts with the foundations (scope, conventions, reference data, quote snapshots, a bond calculator and the first single and multi-curve builds), adds the routines that keep curves and credit inputs honest, then works through duration and convexity, interpolation, short-rate and hazard rate models, spread measures and model decisions, events such as model review committees, situations for researchers moving in from equities, PhDs, bank risk teams and thin bond markets, and finally inflation, cross-currency, counterparty and portfolio credit work.

The rhythms are a curve build and sanity check twice a week, weekly residual checks, monthly repricing, credit data, calibration and change log reviews, a quarterly look at the model inventory and the policy calendar, and a yearly model review and retrospective. Pair the residual history with the **Metrics log** template, the reading list with **Reading queue**, committee sessions with **Meeting notes** and the analytics library choice with **Purchase decision**. Everything here is method and organisation, not investment or trading advice, and a model that fits history neatly can still be wrong tomorrow. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
