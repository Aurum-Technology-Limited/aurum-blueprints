---
id: quant-finance.volatility-modelling
name: Volatility Modelling
description: "Volatility work you can defend: clean realised measures, an arbitrage-free implied surface, term structure and skew tracked over time, and forecasts compared on loss functions chosen before the test."
category: business
version: 1.0.0
tags: [quant-finance, volatility-modelling, researcher, realised-volatility, implied-volatility, volatility-surface, forecasting, skew]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - reading-queue
    - purchase-decision
    - meeting-notes
    - onboarding-30-60-90
    - portfolio-piece
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Volatility Modelling
          description: "Modelling and forecasting volatility: realised measures, implied volatility surfaces, term structure, skew and comparing forecasts honestly."
          projects:
            - name: Map of where volatility numbers drive decisions
              description: |-
                ## Purpose
                Estimates of volatility leak into far more places than the model owner knows: option marks, risk limits, position sizes, margin estimates and client reports. Listing each use with its horizon and the person who reads it shows which forecast needs to be good at one day, which at three months, and where a single number is being stretched to serve both.

                ## Milestones
                1. Every volatility figure in current use listed with its source, owner and reader.
                2. Each figure tagged with the decision it feeds, such as pricing, sizing, limits or reporting.
                3. The horizon and frequency each decision really needs written beside it.
                4. Uses that rely on a model built for a different horizon flagged for later projects.

                ## Notes
                Include numbers people copy from vendor screens by hand. Those are often the ones nobody has checked.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of every volatility figure in use, with its reader, decision, horizon and a flag where a model is used outside its design."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect last month's reports and screens that show a volatility figure"
                - "List each figure with its source and the person who reads it"
                - "Ask three readers which decision each figure changes for them"
                - "Flag every figure used at a horizon its model was not built for"
            - name: House conventions for volatility units and annualisation
              description: |-
                ## Purpose
                Half the arguments about whether a forecast was right are really about units: log or simple returns, 252 or 365 days, calendar or business time, variance or volatility, percent or decimal. Writing one conventions sheet before building anything stops a model from being judged against a benchmark quoted on a different basis.

                ## Milestones
                1. A one-page sheet fixing return type, annualisation factor and day count.
                2. Rules for quoting volatility versus variance and for converting between them.
                3. Calendar versus trading time treatment written down for implied and realised measures.
                4. The sheet stored where every notebook and report links to it.

                ## Notes
                Note the convention used by each external source too. Vendor implied volatilities often use a calendar-day basis that differs from your realised numbers.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A conventions sheet covering returns, annualisation, day count and quoting units, linked from every volatility notebook."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the return type and annualisation factor you use today"
                - "Check which day-count basis each data source quotes in"
                - "Draft the conversion rules between variance and volatility"
                - "Link the sheet from the top of every volatility notebook"
            - name: Clean daily price history for volatility estimates
              description: |-
                ## Purpose
                One unadjusted split or a stale closing print shows up as a huge return, and a squared return magnifies it into a volatility spike that never happened. Building a checked daily open, high, low and close history with corporate actions applied gives every realised estimator a base you can trust.

                ## Milestones
                1. Daily open, high, low and close series assembled for the instruments you study.
                2. Splits, dividends and contract rolls applied and documented.
                3. The ten largest absolute returns per instrument checked against a second source.
                4. Stale prices and zero-range days flagged in a column rather than deleted.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned daily price file where every one of the ten largest moves per instrument has been checked against a second source."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the instrument list and history start date for the study"
                - "Apply split, dividend and roll adjustments and record the method"
                - "Check the ten largest absolute returns against a second source"
                - "Flag stale and zero-range days in a separate column"
            - name: Close-to-close realised volatility baseline
              description: |-
                ## Purpose
                Before anything clever, you need the plain number: rolling close-to-close volatility over fixed windows. It is noisy and slow, but every later estimator and forecast has to beat it, and its behaviour across calm and stressed years shows how much your instruments really move.

                ## Milestones
                1. Rolling 21, 63 and 252 day close-to-close volatility computed for each instrument.
                2. Charts of each series across at least one calm and one stressed period.
                3. Summary statistics of the series recorded, including its own range and persistence.
                4. The baseline saved as the reference every later estimator is compared with.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Rolling close-to-close volatility at three windows saved for every instrument, with charts covering a calm and a stressed period."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compute rolling close-to-close volatility at 21, 63 and 252 days"
                - "Chart each series through a calm year and a stressed year"
                - "Record the range and persistence of each volatility series"
                - "Save the baseline with the data version it was built from"
            - name: Intraday sampling frequency for realised variance
              description: |-
                ## Purpose
                Realised variance built from five-second returns is dominated by bid-ask bounce, and one built from hourly returns throws away most of the information. Plotting realised variance against sampling interval for your instruments shows where noise takes over, and gives a defensible default instead of a number copied from a paper on a different market.

                ## Milestones
                1. Intraday prices for a representative month loaded with timestamps checked.
                2. A volatility signature plot of average realised variance against sampling interval.
                3. A default sampling interval chosen per instrument with the reason recorded.
                4. Subsampling or averaging across offsets tested at the chosen interval.

                ## Notes
                Liquid index futures and thinly traded single names usually need very different intervals. Do not force one number across both.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signature plot per instrument and a recorded default sampling interval with the reasoning behind it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Load one month of intraday prices and check the session times"
                - "Compute realised variance at intervals from one second to one hour"
                - "Plot the signature curve and mark where it flattens"
                - "Record the chosen interval per instrument with a sentence of reasoning"
            - name: Implied volatility extraction pipeline from option quotes
              description: |-
                ## Purpose
                Implied volatility is only as good as the quotes and the inversion behind it: crossed markets, zero bids, stale strikes and American exercise all corrupt the number. A pipeline that filters quotes, inverts mid prices and records why each point was dropped turns a messy option chain into a surface you can study day after day.

                ## Milestones
                1. Daily option snapshots captured at a fixed time with bid, ask and underlying price.
                2. Filters for crossed, zero-bid, wide and stale quotes written and logged.
                3. Mid prices inverted to implied volatility with a bracketed root finder.
                4. Every dropped quote stored with its reason so filters can be audited.

                ## Notes
                For American options on single names, decide early whether you de-Americanise prices or use a tree inversion. Mixing the two across dates breaks time series comparisons.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pipeline that produces a daily implied volatility grid and a log of every filtered quote with its reason, run on at least 20 days of data."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Fix the snapshot time and the fields captured from each option chain"
                - "Write filters for crossed, zero-bid and very wide quotes"
                - "Invert mid prices with a bracketed root finder and log failures"
                - "Run the pipeline on 20 trading days and review the dropped quotes"
            - name: Forwards, dividends and rates inputs for implied volatility
              description: |-
                ## Purpose
                Get the forward wrong by one dividend and it shifts the whole smile sideways and makes puts and calls disagree, which then looks like skew. Implying the forward from put-call parity near the money, and checking it against dividend and rate assumptions, removes the most common hidden error in an implied surface.

                ## Milestones
                1. Discount rates and dividend or borrow assumptions sourced and dated for each underlying.
                2. Forwards implied from put-call parity at near-the-money strikes for each expiry.
                3. Differences between implied and assumed forwards logged and explained.
                4. Put and call implied volatilities agreeing within a stated tolerance at the money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Forwards for every expiry implied from parity and reconciled, with put and call volatilities matching within a written tolerance at the money."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Source dated discount and dividend assumptions for each underlying"
                - "Imply forwards from put-call parity at the three nearest strikes"
                - "Compare implied and assumed forwards and log the gaps"
                - "Set a tolerance for put and call volatility disagreement at the money"
            - name: Forecast evaluation rules fixed before testing
              description: |-
                ## Purpose
                Volatility is never observed directly, so every forecast comparison depends on the proxy and the loss function, and some losses rank models wrongly when the proxy is noisy. Choosing a proxy-consistent loss such as QLIKE or mean squared error on variance, the proxy, the test window and the significance test before looking at results keeps the comparison honest.

                ## Milestones
                1. The volatility proxy chosen, such as realised variance at your sampling interval.
                2. Loss functions fixed, with a note on why they rank models consistently under a noisy proxy.
                3. Training, validation and untouched test periods dated in writing.
                4. A forecast comparison test, such as Diebold-Mariano or a model confidence set, chosen.

                ## Notes
                Write the rules in a dated file and do not edit it once the first model is tested. Changing the loss after seeing results is the most common way forecast research fools itself.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated evaluation rules file naming the proxy, losses, test periods and comparison test, written before any candidate model is scored."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read one survey on consistent loss functions for volatility forecasts"
                - "Pick the proxy and two loss functions and write why"
                - "Date the training, validation and untouched test periods"
                - "Save the rules file and note that it is frozen from today"
            - name: Benchmark volatility forecasts every model must beat
              description: |-
                ## Purpose
                Simple forecasts are hard to beat: yesterday's realised volatility, an exponentially weighted average and a HAR regression on daily, weekly and monthly realised variance often match far more complex models. Building these three, plus a GARCH(1,1) as a reference contender, sets the bar any new idea has to clear.

                ## Milestones
                1. Random walk, EWMA and HAR forecasts produced at each horizon you need.
                2. A GARCH(1,1) forecast added as a reference contender.
                3. All benchmarks scored on the frozen evaluation rules.
                4. A short table naming the benchmark to beat at each horizon.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four benchmark forecasts scored on the frozen rules at every horizon, with the benchmark to beat named per horizon."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Code the random walk and EWMA forecasts at each horizon"
                - "Fit a HAR regression on daily, weekly and monthly realised variance"
                - "Add a GARCH(1,1) forecast as a reference contender"
                - "Score all four on the frozen rules and record the winner per horizon"
            - name: Volatility model documentation file
              description: |-
                ## Purpose
                Any surface fit or forecast that only its author can explain will be switched off the day that person leaves or a validator asks a question. Keeping one living document with the data, method, parameters, known weaknesses and change history makes the model reviewable and the next upgrade faster.

                ## Milestones
                1. A document skeleton covering purpose, data, method, parameters, limits and changes.
                2. Every current model and surface method described in it.
                3. Known weaknesses listed with the situations where each one bites.
                4. A change log started, with the date and reason for each change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One documentation file describing every live volatility model, its known weaknesses and a dated change log."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create the documentation skeleton with the six standard sections"
                - "Describe the current surface method and forecast models"
                - "Ask the agent to draft a weaknesses section from your notebook comments"
                - "Start the change log with today's versions"
            - name: Daily implied volatility surface checks
              description: |-
                ## Purpose
                Surfaces break quietly: a missing expiry, a stale underlying price or a bad dividend can sit in the data for a week before someone prices off it. A short daily check of point counts, at-the-money levels against yesterday and wing behaviour catches most problems on the day they appear.

                ## Milestones
                1. A daily check list covering point counts, at-the-money moves and wing shape.
                2. Thresholds set for what counts as an unusual day-on-day change.
                3. Failures logged with the cause found.
                4. A month of daily checks completed with no unexplained failures left open.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Daily surface checks run for a month with every failure logged and explained."
                cadence: rolling
              tasks:
                - "Write the five checks the surface must pass each morning"
                - "Set day-on-day change thresholds for each expiry bucket"
                - "Run the surface checks and log any failure with its cause @recurring(daily)"
                - "Review the week's failures for a repeating cause @recurring(weekly:fri)"
            - name: Weekly realised against implied volatility monitor
              description: |-
                ## Purpose
                The gap between implied and subsequently realised volatility, the variance risk premium, is one of the most studied quantities in the field and one of the easiest to measure wrongly. Tracking it weekly at matched horizons, with the realised leg measured on your conventions, shows when markets are pricing more or less movement than arrives.

                ## Milestones
                1. Implied and later realised volatility lined up at matched horizons.
                2. The premium charted with its long-run average and range.
                3. Periods where realised exceeded implied listed with what happened.
                4. A monthly summary paragraph written from the weekly numbers.

                ## Notes
                This is a measurement, not a strategy. Selling volatility because the average premium is positive has produced some of the largest losses on record.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly chart of implied against realised volatility at matched horizons kept for at least three months, with a monthly summary."
                cadence: rolling
              tasks:
                - "Line up 30-day implied with the realised volatility that followed"
                - "Update the realised against implied chart @recurring(weekly:wed)"
                - "Write a short monthly note on the premium and any reversals @recurring(monthly:22)"
                - "List past weeks where realised exceeded implied by a wide margin"
            - name: Monthly volatility forecast scorecard
              description: |-
                ## Purpose
                Models drift: a forecast that won last year can lose quietly as the regime changes. Scoring every live forecast monthly against the benchmarks, on the frozen loss functions, shows decay early and turns model debates into a table.

                ## Milestones
                1. A scorecard listing each live forecast and benchmark by horizon.
                2. Monthly loss values and rolling twelve-month averages recorded.
                3. A rule for when a model falling behind its benchmark triggers a review.
                4. Six months of scorecards completed in sequence.

                ## Notes
                Start from the **Metrics log** template. Keep the loss functions identical to the frozen evaluation rules.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly scorecards with losses for every live forecast and benchmark, and a written review trigger."
                cadence: rolling
              tasks:
                - "Set up the scorecard with one row per model and horizon"
                - "Score last month's forecasts against the realised proxy @recurring(monthly:8)"
                - "Write the rule that triggers a review of a lagging model"
                - "Note any model behind its benchmark for three months running"
            - name: Monthly arbitrage audit of the fitted surface
              description: |-
                ## Purpose
                Smooth-looking surfaces can still allow static arbitrage: total variance falling with maturity, or negative implied densities in the wings. Auditing the fitted surface each month for calendar and butterfly violations catches fits that will misprice spreads and break local volatility work later.

                ## Milestones
                1. Calendar checks on total implied variance across expiries coded.
                2. Butterfly checks on the implied density across strikes coded.
                3. A month of fitted surfaces audited with violations counted by expiry.
                4. Each recurring violation traced to data, fit or parametrisation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly audit record counting calendar and butterfly violations on the fitted surface, with each recurring one traced to a cause."
                cadence: rolling
              tasks:
                - "Code a calendar check on total variance by strike"
                - "Code a butterfly check on the implied density"
                - "Run both checks on the month's fitted surfaces @recurring(monthly:12)"
                - "Trace each repeated violation to data, fit or parametrisation"
            - name: Weekly term structure and skew snapshot log
              description: |-
                ## Purpose
                Levels get attention, but the shape of the surface tells you more: an inverted term structure, a steepening put skew or a flattening wing often comes before a level move. Logging a few shape measures weekly builds a history you can test hypotheses against instead of relying on memory of past episodes.

                ## Milestones
                1. Shape measures defined, such as 1 to 3 month term slope, 25-delta risk reversal and butterfly.
                2. A weekly log filled with these measures for each underlying.
                3. A year of history backfilled from stored surfaces where possible.
                4. Episodes of term structure inversion listed with dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly log of term slope, risk reversal and butterfly for each underlying, with at least a year of backfilled history."
                cadence: rolling
              tasks:
                - "Define term slope, risk reversal and butterfly on delta or moneyness"
                - "Backfill a year of shape measures from stored surfaces"
                - "Record this week's term structure and skew measures @recurring(weekly:mon)"
                - "List dates when the term structure inverted"
            - name: Scheduled event calendar for volatility forecasts
              description: |-
                ## Purpose
                Earnings, central bank decisions and major data releases add known jumps to variance on known days, and a forecast that ignores them is wrong by design. Keeping a dated event calendar and an event variance estimate for each lets you add the jump explicitly rather than letting it distort the diffusive forecast.

                ## Milestones
                1. A calendar of scheduled events affecting each underlying for the next quarter.
                2. Historical event-day moves measured for each event type.
                3. Event variance added to forecasts on scheduled days.
                4. Forecasts with and without the event adjustment compared on the scorecard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A maintained event calendar and an event variance adjustment whose effect on forecast loss is recorded on the scorecard."
                cadence: rolling
              tasks:
                - "List the scheduled events for each underlying this quarter"
                - "Measure historical moves on each event type"
                - "Update the event calendar for the next month @recurring(monthly:20)"
                - "Compare forecast loss with and without event variance @recurring(quarterly)"
            - name: Quarterly re-estimation and parameter stability review
              description: |-
                ## Purpose
                Parameters that move a lot between estimations mean the model is fitting noise or the world has changed, and either way the forecasts deserve less trust. Re-estimating each quarter and charting how parameters shift tells you which models are stable enough to keep and which need a simpler form.

                ## Milestones
                1. All forecast models re-estimated on the latest data.
                2. Parameter histories charted with their standard errors.
                3. Models with unstable parameters listed with a proposed response.
                4. The review dated and entered in the change log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly record of re-estimated parameters with standard errors, unstable models listed and the change log updated."
                cadence: cyclic
              tasks:
                - "Re-estimate every forecast model on the latest data @recurring(quarterly)"
                - "Chart each parameter's history with its standard errors"
                - "List models whose parameters moved beyond two standard errors"
                - "Enter the review and its decisions in the change log"
            - name: Annual volatility model review
              description: |-
                ## Purpose
                Once a year the whole set of volatility models deserves a fresh look: what decisions they fed, how forecasts scored, what broke, and whether the data or market structure has changed under them. A written annual review stops models running for years on assumptions nobody has questioned.

                ## Milestones
                1. The year's scorecards, audits and incidents gathered in one pack.
                2. Each model rated keep, change or retire with a reason.
                3. Data source and market structure changes over the year listed.
                4. A plan for next year's model work agreed with the people who use the numbers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A dated annual review rating each volatility model keep, change or retire, with next year's plan agreed by its users."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Gather the year's scorecards, audits and incident notes"
                - "Rate each model keep, change or retire with a reason"
                - "Hold the annual volatility model review with its users @recurring(yearly)"
                - "Write next year's model work plan from the review"
            - name: Volatility data exceptions queue
              description: |-
                ## Purpose
                Bad ticks, missing expiries and failed inversions pile up, and if each is fixed by hand in a notebook the fixes are lost. A single queue of data exceptions with owners and resolutions keeps the inputs clean and shows which source causes most of the trouble.

                ## Milestones
                1. One queue holding every data exception from realised and implied pipelines.
                2. Each exception tagged with source, type and owner.
                3. Fixes applied in code or configuration, not by hand in notebooks.
                4. A count of exceptions by source reviewed every month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A queue where every data exception has a source, owner and recorded fix, with monthly counts by source."
                cadence: rolling
              tasks:
                - "Create the exceptions queue with source, type and owner fields"
                - "Move this month's known data problems into the queue"
                - "Clear or reassign open exceptions in the queue @recurring(weekly:thu)"
                - "Count exceptions by source at the end of each month"
            - name: Range-based volatility estimators compared
              description: |-
                ## Purpose
                Parkinson, Garman-Klass, Rogers-Satchell and Yang-Zhang use the high, low and open as well as the close, and can cut estimation error sharply when intraday data is not available. Implementing each and comparing them against a realised variance proxy shows which ones hold up with drift, opening gaps and your instruments' trading hours.

                ## Milestones
                1. Four range-based estimators implemented from the original formulas.
                2. Each estimator checked on simulated data with known volatility.
                3. Bias and efficiency against the realised proxy measured on real data.
                4. A recommendation recorded for when daily range estimators are good enough.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four range-based estimators implemented, validated on simulated data and compared for bias and efficiency on real data."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Implement Parkinson and Garman-Klass from the original formulas"
                - "Add Rogers-Satchell and Yang-Zhang with opening gap handling"
                - "Test all four on simulated prices with known volatility"
                - "Compare bias and efficiency against realised variance on real data"
            - name: Microstructure noise and realised kernel study
              description: |-
                ## Purpose
                At high frequency, observed prices are the efficient price plus noise, and plain realised variance grows with sampling frequency instead of converging. Working through two-scale realised variance and realised kernels on your own data shows how much noise there is and whether a noise-corrected estimator beats sparse sampling.

                ## Milestones
                1. Noise variance estimated for each instrument from first-order autocorrelation of returns.
                2. Two-scale realised variance and a realised kernel implemented.
                3. Both compared with sparse sampling on the volatility signature plot.
                4. A note recording when the noise-corrected estimator is worth its complexity.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Noise estimates per instrument and a recorded comparison of realised kernels, two-scale estimators and sparse sampling."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Estimate noise variance from return autocorrelation at tick level"
                - "Implement two-scale realised variance on one instrument"
                - "Implement a realised kernel with a standard bandwidth rule"
                - "Plot all three estimators on the signature plot and write a note"
            - name: Jumps and bipower variation in realised measures
              description: |-
                ## Purpose
                Realised variance mixes smooth diffusion with jumps, and the two forecast very differently: jumps are less persistent, so treating them as ordinary variance overstates tomorrow's volatility after a gap. Separating them with bipower variation and a jump test lets a HAR model use each part on its own terms.

                ## Milestones
                1. Bipower variation computed alongside realised variance.
                2. A daily jump test applied and significant jump days listed.
                3. Continuous and jump components fed separately into a HAR forecast.
                4. Forecast loss with and without the split recorded on the frozen rules.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Daily jump and continuous components computed and a HAR forecast using them scored against the plain HAR on the frozen rules."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compute bipower variation at your chosen sampling interval"
                - "Apply a daily jump test and list significant jump days"
                - "Fit a HAR model with separate continuous and jump terms"
                - "Score the split model against the plain HAR forecast"
            - name: Implied volatility inversion from first principles
              description: |-
                ## Purpose
                Most researchers call a library function for implied volatility and never see where it fails: deep wings, near expiry, prices below intrinsic value and flat vega. Writing your own inversion for Black-Scholes and Black-76, with a good starting guess and a bracketed solver, teaches where the number is fragile and how to report failures instead of returning garbage.

                ## Milestones
                1. Black-Scholes and Black-76 pricing and vega written and tested against a reference.
                2. An inversion using a rational initial guess and a bracketed solver.
                3. Failure cases catalogued, including prices outside no-arbitrage bounds.
                4. Your inversion matching the library to a stated tolerance across a test grid.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tested inversion that matches a reference library across a strike and maturity grid and returns a named error for every failure case."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write Black-76 pricing and vega with unit tests"
                - "Implement inversion with a rational initial guess and bracketing"
                - "Build a test grid that includes deep wings and very short expiries"
                - "List every failure case and the error your code returns"
            - name: Model-free implied variance and a VIX-style index
              description: |-
                ## Purpose
                VIX-style indices price the variance swap rate from a strip of out-of-the-money options without assuming any model, and building one for your own underlying teaches more about the surface than reading the white paper. It also gives you an implied variance series that is comparable across time and with realised variance.

                ## Milestones
                1. The published methodology for a volatility index read and summarised.
                2. Strike selection, truncation and interpolation between expiries implemented.
                3. Your index matched to the published index for a reference underlying.
                4. A daily model-free implied variance series built for your own underlyings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A self-built volatility index that tracks the published one for a reference underlying within a stated tolerance, plus a daily series for your own underlyings."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Read the exchange's volatility index methodology and note each step"
                - "Implement strike selection, truncation and the variance sum"
                - "Compare your index with the published one over a year"
                - "Update the model-free implied variance series @recurring(monthly:15)"
            - name: Smile dynamics under sticky strike and sticky delta
              description: |-
                ## Purpose
                How the smile moves when the underlying moves matters as much as its shape today, because it decides hedge ratios and how a forecast of at-the-money volatility translates to other strikes. Testing sticky strike, sticky moneyness and sticky delta on your history shows which rule describes your market, and in which regimes it changes.

                ## Milestones
                1. The three smile dynamics rules written out with what each predicts.
                2. Daily changes in implied volatility at fixed strikes and fixed moneyness measured.
                3. Each rule scored on how well it predicts the next day's smile.
                4. Results split by up and down moves and by calm and stressed periods.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recorded comparison of sticky strike, moneyness and delta on your history, split by direction and regime."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down what each smile dynamics rule predicts"
                - "Measure daily volatility changes at fixed strike and fixed moneyness"
                - "Score each rule on next-day smile prediction error"
                - "Split the results by move direction and by regime"
            - name: Reading list for volatility modelling
              description: |-
                ## Purpose
                The field has a small set of papers and books that most practitioners have read, and a long tail of work that repeats them. A short ordered reading list covering realised measures, forecasting, surface parametrisation and smile dynamics, with a one-paragraph note on each, saves months of reading in the wrong order.

                ## Milestones
                1. A list of 12 to 20 core papers and books grouped by topic.
                2. The list ordered so each item builds on the ones before it.
                3. A one-paragraph note written for each item read.
                4. At least one result from the list reproduced on your own data.

                ## Notes
                Start from the **Reading queue** template. Survey articles on realised volatility and on volatility forecasting are a good first pair.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An ordered list of at least 12 items with a note on each one read and one result reproduced on your own data."
                cadence: rolling
              tasks:
                - "List 12 core papers and books across four topics"
                - "Order the list so each item builds on earlier ones"
                - "Write a one-paragraph note after each item you finish"
                - "Pick one result to reproduce on your own data"
            - name: Asymmetric volatility response to falling prices
              description: |-
                ## Purpose
                Falling prices tend to lift volatility more than rises of the same size, and both forecasts and smile shape depend on how strong that asymmetry is. Measuring it in realised and implied data for your underlyings, and testing whether asymmetric terms improve forecasts, replaces an assumption with a number.

                ## Milestones
                1. The correlation between returns and next-period volatility changes measured.
                2. Asymmetric terms added to the HAR benchmark and to a GARCH contender.
                3. Forecast gains from asymmetry scored on the frozen rules.
                4. Differences across asset classes recorded, such as equities against currencies.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Measured return and volatility asymmetry per underlying, and a scored comparison of forecasts with and without asymmetric terms."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Measure return and next-week volatility change correlation per underlying"
                - "Add a negative return term to the HAR benchmark"
                - "Score the asymmetric forecast against the symmetric one"
                - "Compare the asymmetry across asset classes you cover"
            - name: SVI parametrisation of each expiry's smile
              description: |-
                ## Purpose
                Raw implied volatilities are noisy and gappy, and interpolating them point by point produces wiggles and arbitrage. Fitting the five-parameter SVI form to each expiry gives a smooth smile with a handful of interpretable parameters, which makes it easier to store history, compare days and spot bad data.

                ## Milestones
                1. SVI fitted per expiry with weights based on bid-ask spread or vega.
                2. Fit residuals inspected and within a stated tolerance of the quotes.
                3. Parameter constraints applied so each slice is free of butterfly arbitrage.
                4. Daily SVI parameters stored as a time series.

                ## Notes
                A good initial guess from the previous day's fit makes the optimiser far more stable than starting from scratch each time.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A daily SVI fit per expiry with residuals inside a stated tolerance, butterfly checks passing and parameters stored as a series."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Implement the raw SVI form and its total variance"
                - "Fit each expiry with spread-based weights and inspect residuals"
                - "Add constraints that keep each slice free of butterfly arbitrage"
                - "Store daily parameters and chart them over a month"
            - name: Surface-wide parametrisation choice
              description: |-
                ## Purpose
                Fitting each expiry on its own can leave calendar arbitrage between slices and unstable parameters for short or illiquid maturities. Comparing slice-by-slice SVI with a surface-wide form such as SSVI, on fit quality, stability and arbitrage, gives a recorded decision on how the whole surface is built.

                ## Milestones
                1. Slice SVI and one surface-wide form fitted on the same 60 days.
                2. Fit error, parameter stability and arbitrage counts compared in one table.
                3. Behaviour on illiquid and very short expiries checked separately.
                4. A decision recorded with the cases where the loser would be preferred.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table comparing two surface methods on fit, stability and arbitrage over 60 days, and a recorded decision with its reasoning."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Fit slice SVI and a surface-wide form on the same 60 days"
                - "Count calendar and butterfly violations for each method"
                - "Compare parameter stability on short and illiquid expiries"
                - "Record the decision and when the other method would win"
            - name: Wing extrapolation rule for illiquid strikes
              description: |-
                ## Purpose
                Beyond the last liquid strike, the surface is a guess, but that guess prices tail hedges and drives risk numbers in a crash. Choosing an extrapolation rule that respects the asymptotic limits on wing slope, and testing it against what wing quotes later did, keeps the tails from being set by an optimiser's accident.

                ## Milestones
                1. The last reliable strike defined per expiry using spread and open interest.
                2. Two or three extrapolation rules implemented within the theoretical slope limits.
                3. Each rule compared with later quotes when wing strikes became liquid.
                4. One rule chosen and written into the documentation file.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documented wing extrapolation rule chosen after comparing at least two rules against later observed wing quotes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define the last reliable strike rule using spread and open interest"
                - "Implement two extrapolation rules within the wing slope limits"
                - "Compare each rule with later quotes at those strikes"
                - "Write the chosen rule into the documentation file"
            - name: EWMA decay choice tested out of sample
              description: |-
                ## Purpose
                The half-life of an exponentially weighted volatility is usually set by habit, but the best value differs by asset and horizon, and a value tuned on the full history is in-sample by construction. Choosing it on a training period and checking it on the untouched test window gives a decay you can defend.

                ## Milestones
                1. A grid of half-lives scored on the training period at each horizon.
                2. The flatness of the loss curve noted, since a flat curve means the choice matters little.
                3. The chosen half-life checked once on the untouched test window.
                4. The decision recorded with the number of values tried.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A half-life per horizon chosen on training data, checked once on the test window, with the number of trials recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Score a grid of half-lives on the training period"
                - "Plot the loss curve and note how flat it is"
                - "Check the chosen half-life once on the untouched test window"
                - "Record the decision and the number of values tried"
            - name: Blending implied and realised volatility forecasts
              description: |-
                ## Purpose
                Implied volatility carries forward-looking information and a risk premium; realised-based forecasts carry persistence and no premium. A simple blend, with weights estimated on training data and refreshed on a schedule, often beats either alone, and testing it properly answers whether the gain is worth the extra input dependency.

                ## Milestones
                1. Implied, HAR and blended forecasts lined up at matched horizons.
                2. Blend weights estimated on the training period only.
                3. The blend scored against both inputs on the frozen rules.
                4. A refresh schedule for the weights decided and documented.

                ## Notes
                Remove or model the variance risk premium before blending, or the blend will be biased upwards.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A blended forecast scored against implied and HAR inputs on the frozen rules, with a documented weight refresh schedule."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Line up implied and HAR forecasts at a 21-day horizon"
                - "Estimate blend weights on the training period only"
                - "Score the blend against each input on the frozen rules"
                - "Re-estimate the blend weights on the latest window @recurring(quarterly)"
            - name: Overnight and weekend variance treatment
              description: |-
                ## Purpose
                Markets move between the close and the next open, and for many instruments that gap carries a large share of daily variance, while weekends carry less than three times a weekday. Deciding how overnight and non-trading days enter realised measures and forecasts removes a systematic bias that otherwise shows up as poor Monday forecasts.

                ## Milestones
                1. The share of daily variance from overnight returns measured per instrument.
                2. Weekend and holiday variance compared with ordinary weekdays.
                3. A treatment chosen, such as scaling or a separate overnight term.
                4. Forecast loss on post-weekend days compared before and after the change.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded overnight and weekend treatment, with forecast loss on post-weekend days measured before and after it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Measure the overnight share of daily variance per instrument"
                - "Compare weekend and holiday variance with ordinary weekdays"
                - "Choose a scaling rule or separate overnight term"
                - "Compare Monday forecast loss before and after the change"
            - name: Vendor surface against in-house fit comparison
              description: |-
                ## Purpose
                Buying a vendor's implied volatility surface saves months of pipeline work, but vendors make choices about forwards, filters and extrapolation that you cannot always see. Comparing a trial of vendor data with your own fit, point by point and over stressed days, shows whether to buy, build or use both with a reconciliation.

                ## Milestones
                1. A vendor trial set up covering the same underlyings and dates as your fit.
                2. Differences at the money and in the wings measured and charted.
                3. Methodology questions sent to the vendor and answers recorded.
                4. A buy, build or both decision recorded with full cost included.

                ## Notes
                Start from the **Purchase decision** template. Include licence limits on redistribution and storage, not just the price.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded buy, build or both decision backed by a point-by-point comparison over a trial period, with licence terms and full cost listed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Request a vendor trial for the same underlyings and dates"
                - "Measure differences at the money and in both wings"
                - "Send the vendor written questions on forwards and extrapolation"
                - "Record the decision with licence terms and full cost"
            - name: Forecast horizon matched to each decision
              description: |-
                ## Purpose
                Scaling a one-day forecast by the square root of time gives a poor three-month forecast, because volatility mean-reverts. Building direct forecasts at the horizons each decision needs, and comparing them with scaled short-horizon forecasts, shows how much the scaling shortcut costs.

                ## Milestones
                1. The horizons required by each decision taken from the usage map.
                2. Direct forecasts built at each required horizon.
                3. Square-root scaled forecasts compared with direct ones on the frozen rules.
                4. The horizon used for each decision recorded in the documentation file.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Direct and scaled forecasts compared at every horizon from the usage map, with the chosen horizon per decision documented."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the required horizons from the usage map"
                - "Build direct forecasts at each of those horizons"
                - "Score direct against square-root scaled forecasts"
                - "Write the horizon per decision into the documentation file"
            - name: Earnings season implied move study
              description: |-
                ## Purpose
                Ahead of an earnings season, the term structure of single-name options embeds a market estimate of the announcement move. Extracting that implied move from the expiries either side of each date, and comparing it with the moves that follow, builds a measured record of how well markets price earnings risk for your names.

                ## Milestones
                1. Earnings dates confirmed for the names in scope this season.
                2. Implied event moves extracted from the term structure before each date.
                3. Realised announcement moves recorded after each date.
                4. A season summary comparing implied and realised moves by sector.

                ## Notes
                Confirm dates close to the event. Companies move reporting dates, and a wrong date puts the event variance in the wrong expiry.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A season summary listing implied and realised earnings moves for every name in scope, grouped by sector."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm earnings dates for every name in scope"
                - "Extract the implied event move from the expiries around each date"
                - "Record realised announcement moves the day after each report"
                - "Repeat the implied against realised move summary each season @recurring(quarterly)"
            - name: Central bank meeting volatility study
              description: |-
                ## Purpose
                Rate decisions and press conferences show up as bumps in short-dated implied volatility for rates, currencies and indices. Measuring the bump before a meeting and the move after it, for one coming meeting, gives a worked example of event variance in macro instruments and a template for the next one.

                ## Milestones
                1. The meeting date and affected instruments listed.
                2. The implied variance bump measured from expiries either side of the date.
                3. The realised move over the meeting window recorded.
                4. A one-page note filed with the method reusable for the next meeting.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-page note for one central bank meeting comparing the implied variance bump with the realised move, with a reusable method."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick the next central bank meeting and the instruments affected"
                - "Measure the implied variance bump across expiries around the date"
                - "Record the realised move over the meeting window"
                - "File the note with the method written step by step"
            - name: Volatility model go-live with a parallel run
              description: |-
                ## Purpose
                Switching a surface method or forecast model in one step means nobody can tell whether a change in the numbers is the market or the model. Running old and new side by side for a fixed period, with agreed tolerances and sign-off, makes the switch a decision rather than a surprise.

                ## Milestones
                1. Old and new models running on the same inputs every day.
                2. Tolerances for acceptable differences agreed with the users.
                3. Differences outside tolerance explained in a log.
                4. Sign-off recorded and the old model retired on a dated day.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A parallel run of at least 20 trading days with every out-of-tolerance difference explained and a dated sign-off."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Set up old and new models on identical daily inputs"
                - "Agree difference tolerances with the people who use the numbers"
                - "Log and explain each difference outside tolerance"
                - "Record sign-off and the retirement date of the old model"
            - name: Forecast comparison presented at the research meeting
              description: |-
                ## Purpose
                Forecast studies only change anything once the people who use the numbers have seen them, questioned them and agreed what to do. Presenting the comparison, with the frozen rules, the scores and the limits stated plainly, turns months of work into a recorded decision.

                ## Milestones
                1. A short deck covering rules, data, contenders and scores.
                2. Limits and failure cases stated on their own slide.
                3. The meeting held with questions and answers recorded.
                4. The decision and follow-up actions sent to attendees.

                ## Notes
                Start from the **Meeting notes** template. Show the benchmark in every chart so the gain is visible in context.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The forecast comparison presented, with questions, the decision and follow-up actions recorded and sent to attendees."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the deck with rules, data, contenders and scores"
                - "Add one slide on limits and failure cases"
                - "Book the research meeting slot with the forecast users"
                - "Send the decision and actions to attendees after the meeting"
            - name: Post-mortem of a volatility spike the model missed
              description: |-
                ## Purpose
                Every forecast model eventually meets a day it got badly wrong, and that day teaches more than a year of average scores. A written post-mortem separating data, model and genuine surprise, with what would have been knowable at the time, keeps the lesson and stops an overreaction to one bad day.

                ## Milestones
                1. The spike and the forecast miss described with dates and numbers.
                2. Data, model and genuine surprise contributions separated.
                3. What was knowable beforehand listed, using only data available then.
                4. Changes proposed, or a recorded decision that no change is warranted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written post-mortem of one forecast miss separating data, model and surprise, ending in a recorded change or no-change decision."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick the largest forecast miss of the past year"
                - "Check whether the inputs on that day were clean"
                - "List what was knowable beforehand using only point-in-time data"
                - "Record a change or a no-change decision with the reason"
            - name: First 90 days as a volatility researcher on an options desk
              description: |-
                ## Purpose
                Joining an options desk means learning the house surface, its conventions and the traders' language at the same time as being expected to add something. A 90-day plan that starts with reading the existing surface code and ends with one small, measured improvement builds trust faster than a grand new model.

                ## Milestones
                1. The house surface method, conventions and data flow understood and written up.
                2. The traders' main complaints about the surface collected.
                3. One small improvement chosen, tested and agreed with the desk.
                4. A 90-day summary shared with your manager.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Respect internal confidentiality: keep your own notes on method, not copies of proprietary data.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A 90-day summary covering the surface method, desk complaints collected and one tested improvement agreed with the desk."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask for the surface documentation and the code repository"
                - "Write up the house conventions in your own words"
                - "Ask three traders what they distrust about the surface"
                - "Propose one small improvement with a test plan"
            - name: Volatility research on a solo researcher's budget
              description: |-
                ## Purpose
                Without a data budget, a solo researcher still has daily prices, published volatility indices and some free or cheap end-of-day option data. Planning the work around what that data can honestly support, and skipping what it cannot, avoids building an intraday study on data that was never good enough.

                ## Milestones
                1. Available free and low-cost data sources listed with their limits.
                2. Research questions matched to what each source can support.
                3. A monthly cost cap for data and compute written down.
                4. A first study completed using only the chosen sources.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of data sources and their limits, a monthly cost cap and one completed study using only those sources."
                cadence: rolling
              tasks:
                - "List free and low-cost price and option data with their gaps"
                - "Match each research question to a source that can support it"
                - "Write a monthly cost cap for data and compute"
                - "Check spending against the cost cap @recurring(monthly:3)"
            - name: From econometrics PhD to volatility research
              description: |-
                ## Purpose
                Researchers with an econometrics background often know GARCH theory deeply but have never handled option quotes, forwards or the conventions a desk uses. A focused plan that builds on the time series training and fills the market gaps shows employers the theory has met real data.

                ## Milestones
                1. A gap list of market knowledge compared with your current skills.
                2. One realised volatility study and one implied surface built on real data.
                3. Both written up in the format a research team would expect.
                4. Three conversations held with practitioners about the work.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One realised and one implied volatility study written up and discussed with at least three practitioners."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write a gap list of market conventions you have not used yet"
                - "Build one realised volatility forecast study on real data"
                - "Build one implied surface from end-of-day option quotes"
                - "Ask three practitioners for feedback on the write-ups"
            - name: Volatility forecasting showcase for a portfolio
              description: |-
                ## Purpose
                One clean, reproducible forecast comparison says more to a hiring manager than a list of courses. Packaging the benchmark study with frozen rules, code, data notes and an honest limits section into one readable piece gives you something concrete to discuss in interviews.

                ## Milestones
                1. A study chosen with public or shareable data only.
                2. Code that reproduces every chart from raw data in one run.
                3. A four-page write-up with rules, results and limits.
                4. The piece reviewed by one practitioner and revised.

                ## Notes
                Start from the **Portfolio piece** template. Never include an employer's data or code, even in summary form.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reproducible forecast comparison with a four-page write-up, reviewed by one practitioner and published to your portfolio."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Choose a study that uses only public or shareable data"
                - "Make the code rebuild every chart from raw data in one run"
                - "Ask the agent to tighten your four-page write-up for clarity"
                - "Ask one practitioner to review the piece"
            - name: Volatility model handover to independent validation
              description: |-
                ## Purpose
                Model validators need to rebuild your results, challenge your assumptions and see where the model breaks, and a handover that leaves out the limits delays sign-off for months. Preparing the pack the validator needs, before they ask, gets the model approved and sets up an annual revalidation.

                ## Milestones
                1. A validation pack with documentation, data, code and test results.
                2. Known limits and failure cases stated plainly.
                3. The validator able to reproduce the main results independently.
                4. Findings answered and a revalidation date agreed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A validation pack the validator reproduced independently, with every finding answered and a revalidation date set."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Assemble documentation, data versions, code and test results"
                - "Write a plain limits and failure cases section"
                - "Walk the validator through rebuilding the main results"
                - "Prepare the annual revalidation pack @recurring(yearly)"
            - name: Volatility targeting overlay research with written risk rules
              description: |-
                ## Purpose
                Scaling exposure inversely to forecast volatility is a common sizing method, but its benefit depends on forecast quality, turnover and how fast volatility jumps. Researching an overlay with risk limits, a maximum gearing cap, a position sizing rule and a written stop rule agreed in advance keeps it a disciplined study, and most such overlays look better in research than out of sample.

                ## Milestones
                1. The overlay rule written with its target, forecast input and rebalance frequency.
                2. A maximum exposure cap, a drawdown limit and a stop rule written before testing.
                3. Results measured after realistic costs on the untouched test window.
                4. A go or no-go decision recorded against the written criteria.

                ## Notes
                This is a research method, not a recommendation to trade. Any live use needs your own risk limits and, for personal money, only capital you can afford to lose.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A volatility targeting study with exposure cap, drawdown limit and stop rule written before testing, and a recorded go or no-go decision."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write the overlay rule, exposure cap and stop rule before testing"
                - "Backtest on training data with realistic costs and turnover"
                - "Run once on the untouched test window and record the result"
                - "Review the stop rule and exposure cap against live data @recurring(monthly:26)"
            - name: Rough volatility study
              description: |-
                ## Purpose
                Log realised volatility appears to behave like a fractional process with a very low Hurst exponent, and models built on that idea fit the short end of the skew with few parameters. Estimating roughness on your own realised series and testing a simple rough forecast against HAR shows whether the idea earns a place in your toolkit.

                ## Milestones
                1. The Hurst exponent of log realised volatility estimated per instrument.
                2. Sensitivity of the estimate to sampling and noise treatment checked.
                3. A simple rough volatility forecast implemented.
                4. The rough forecast scored against HAR on the frozen rules.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Hurst estimates per instrument with sensitivity checks, and a rough forecast scored against HAR on the frozen rules."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Estimate the Hurst exponent from log realised volatility increments"
                - "Check how the estimate shifts with sampling interval"
                - "Implement a simple rough volatility forecast"
                - "Score it against HAR on the frozen rules"
            - name: Local volatility extraction from the fitted surface
              description: |-
                ## Purpose
                Dupire's formula turns an arbitrage-free implied surface into a local volatility function, and the result is extremely sensitive to the smoothness of the surface. Extracting it from your fit is a hard test of surface quality and shows where local volatility dynamics disagree with the smile behaviour you measured.

                ## Milestones
                1. Local volatility computed from total implied variance on a strike and time grid.
                2. Regions of instability traced back to the surface fit.
                3. Vanilla prices repriced from local volatility and compared with the fit.
                4. Implied smile dynamics under local volatility compared with your sticky rules study.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A local volatility grid that reprices vanillas within a stated tolerance, with unstable regions traced to the surface fit."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Compute local volatility from total variance derivatives"
                - "Map regions where the result becomes unstable"
                - "Reprice vanillas by finite differences and compare with the fit"
                - "Compare implied smile dynamics with your sticky rules results"
            - name: Implied correlation from index and constituent options
              description: |-
                ## Purpose
                Index implied variance compared with constituent implied variances gives a market-implied average correlation, a measure that moves sharply in stress. Building the series carefully, with weights and dispersion in constituent quotes handled, gives a forward-looking correlation measure to study next to realised correlation.

                ## Milestones
                1. Index and constituent implied volatilities aligned at a common maturity.
                2. Index weights sourced and dated for each observation.
                3. An implied correlation series computed and charted.
                4. Implied and later realised average correlation compared.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated implied correlation series with documented weights, charted against the realised correlation that followed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Align index and constituent implied volatilities at one maturity"
                - "Source dated index weights for each observation"
                - "Compute and chart the implied correlation series"
                - "Compare it with realised average correlation that followed"
            - name: Regime-switching volatility forecasts
              description: |-
                ## Purpose
                Calm stretches in volatility last long and crisis bursts are short, and single-regime models adjust too slowly at the turns. Fitting a two-regime model and testing whether regime probabilities improve forecasts at the transitions, rather than on average, tells you whether the extra complexity pays for itself where it matters.

                ## Milestones
                1. A two-regime model fitted on the training period.
                2. Regime probabilities charted against known calm and stressed periods.
                3. Forecast loss compared with HAR on all days and on transition days.
                4. A note recording whether the gain justifies the complexity.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A regime-switching forecast scored against HAR on all days and on transition days, with a written verdict on its value."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Fit a two-regime model to log realised volatility"
                - "Chart regime probabilities against known stressed periods"
                - "Score against HAR on all days and on transition days"
                - "Write a short verdict on whether the complexity pays"
---

# Volatility Modelling

This area is for researchers who measure, model and forecast volatility, whether the output feeds an options desk, a risk system or position sizing. It starts with foundations (conventions, clean prices, a first realised baseline, intraday sampling, an implied volatility pipeline with honest forwards, and a forecast evaluation framework fixed before any model is tried), then the daily, weekly and monthly machinery of running a surface and a forecast, the estimators and smile dynamics worth learning properly, decisions on parametrisation, blending and overnight variance, dated events such as an earnings season or a model going live, variants for a new desk researcher, a solo researcher, a PhD and a validation handover, and finally specialist work on rough volatility, local volatility, implied correlation and volatility targeting.

What repeats is a daily surface check, a weekly realised against implied monitor and skew snapshot, a monthly forecast scorecard and arbitrage audit, a quarterly re-estimation review and a yearly model review. The Metrics log, Reading queue, Purchase decision, Meeting notes, Onboarding 30/60/90 and Portfolio piece templates pair with the projects that name them. A volatility forecast is an estimate with error bars, not a trading signal: nothing here is investment advice, and most volatility strategies that look good in research fail out of sample. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
