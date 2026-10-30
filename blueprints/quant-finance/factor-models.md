---
id: quant-finance.factor-models
name: Factor Models
description: "A point-in-time factor library you can defend: clear definitions, cross-sectional regressions, exposure and factor return reports, crowding and regime checks, and a record of every methodology change."
category: business
version: 1.0.0
tags: [quant-finance, factor-models, researcher, knowledge-worker, equity-factors, fama-macbeth, factor-exposures, crowding]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - reading-queue
    - risk-register
    - meeting-notes
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Factor Models
          description: "Building and testing factor models: factor definitions, cross-sectional regressions, exposures, factor returns, crowding and how factors behave across regimes."
          projects:
            - name: Factor model purpose and scope statement
              description: |-
                ## Purpose
                A factor model built to explain risk looks different from one built to find return, and teams that never write down which they want end up arguing about definitions for months. A one-page scope statement fixes the question, the universe, the horizon and the users before any data is pulled.

                ## Milestones
                1. A single sentence stating whether the model is for return attribution, risk explanation, signal research or screening.
                2. The asset universe, rebalance frequency and forecast horizon written down.
                3. The named users of the output and the decisions they will make with it listed.
                4. Three things the model will deliberately not try to do recorded.

                ## Notes
                If the honest answer is all four uses, pick one to design for first and treat the others as later extensions.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed-off one-page scope statement names the model's main use, universe, horizon, users and three explicit exclusions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one sentence on what the factor model is for"
                - "List the universe, rebalance frequency and horizon you will use"
                - "Name the people who will read the output and their decisions"
                - "Record three uses the model is explicitly not built for"
            - name: Point-in-time security universe for factor tests
              description: |-
                ## Purpose
                Most impressive factor results come from a universe that quietly drops the companies that later failed. Building the universe as it stood on each historical date, with delisted names kept and listing rules applied as they were then, is the single biggest protection against survivorship bias in factor research.

                ## Milestones
                1. A monthly membership file showing which securities were in the universe on each date.
                2. Delisted and acquired companies present up to their last trading day.
                3. Liquidity and price filters applied using only data available on the formation date.
                4. A count of names per month charted and any sudden jumps explained.

                ## Notes
                Check the universe size against a published index count for a few dates. A gap of more than a few percent usually means missing delistings.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated universe file exists in which delisted names appear until their final trading day and monthly counts reconcile to an index within a stated tolerance."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pull historical index or exchange membership with start and end dates"
                - "Add delisted and acquired securities back into each month"
                - "Apply liquidity and minimum price filters as of each formation date"
                - "Chart the monthly name count and annotate every jump"
            - name: Fundamental data lag and restatement rules
              description: |-
                ## Purpose
                Book value and earnings are not known on the fiscal year end, they arrive weeks or months later and are sometimes restated. Fixing a reporting lag rule and using first-reported figures where you have them stops value and quality factors from using numbers nobody could have traded on.

                ## Milestones
                1. A written lag rule for annual and quarterly fundamentals, such as a fixed number of months after period end or the actual filing date.
                2. First-reported values used where the data source keeps them, with restated values flagged.
                3. A check showing no factor value on any date uses a filing dated after that date.
                4. The rule stored beside the factor definitions so every new factor inherits it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented lag rule is applied to every fundamental field and an automated check confirms zero look-ahead filings across the full history."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find out whether your data source stores filing dates and first-reported values"
                - "Write the lag rule for annual and quarterly fields"
                - "Run a check that flags any value used before its filing date"
                - "Save the rule beside the factor definition sheet"
            - name: Total return series with delisting returns
              description: |-
                ## Purpose
                Factor portfolios rebalance into small and distressed names, and the last month of a delisted stock can be a large loss that price-only data never shows. A clean total return series with dividends, splits and delisting returns included keeps long-short spreads honest, especially for size and value.

                ## Milestones
                1. Monthly total returns including dividends and split adjustments for every universe member.
                2. Delisting returns added where available, with a documented assumption where they are missing.
                3. Extreme returns above a set threshold reviewed by hand.
                4. A sample of twenty securities reconciled to an independent source.

                ## Notes
                Where the delisting return is missing for a performance-related delisting, many researchers substitute a fixed negative figure. Pick one convention and write it down.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A total return file covering the full universe history includes delisting returns or a documented substitute, with twenty names reconciled to a second source."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm which corporate actions your return source already adjusts for"
                - "Add delisting returns and write the rule for missing ones"
                - "Review every monthly return beyond your extreme-move threshold"
                - "Reconcile twenty random securities against a second data source"
            - name: Factor definition sheet for the first five factors
              description: |-
                ## Purpose
                Value, size, momentum, quality and low volatility each have a dozen published variants, and an undocumented choice becomes an argument the first time results disappoint. A definition sheet with the exact formula, data fields, lag, universe and sign convention for each factor is the reference everything else is built from.

                ## Milestones
                1. Five factors defined with formula, data fields, lag and sign convention.
                2. The academic or industry source each definition follows cited.
                3. Treatment of missing values and negative denominators stated for each.
                4. The sheet versioned with a date and an owner.

                ## Notes
                Keep the first five close to well-known published definitions. Novel variants come later, once you can reproduce the standard ones.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned definition sheet specifies formula, fields, lag, sign, missing-value rule and source for five factors."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the five factors and the published definition each will follow"
                - "Write the exact formula and data fields for each factor"
                - "State how missing values and negative book values are handled"
                - "Date and version the sheet and name its owner"
            - name: Benchmarking against a public factor return library
              description: |-
                ## Purpose
                Freely published factor return series, such as the long-running US and international libraries many academics use, give you an outside answer to check against. If your market, size, value and momentum returns do not correlate closely with them over the same period, something in the universe, returns or breakpoints is wrong.

                ## Milestones
                1. Your four standard factor return series built on the same breakpoint rules as the public library.
                2. Monthly correlations with the public series calculated over a common period.
                3. Any factor below your agreed correlation threshold investigated and the cause written down.
                4. The benchmark comparison saved as a chart and table you can rerun.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Correlations between your factor returns and a public library are reported for four factors, with every shortfall below the agreed threshold explained."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Download the public factor return series and note their construction rules"
                - "Rebuild the four factors using the same breakpoints and weighting"
                - "Calculate monthly correlations over the shared period"
                - "Write up the cause of any correlation below your threshold"
            - name: Standardisation and outlier treatment conventions
              description: |-
                ## Purpose
                Whether you rank, z-score or winsorise a raw characteristic changes which names drive a factor, and mixing conventions across factors makes composites meaningless. Choosing one convention, testing it on two factors and applying it everywhere removes a silent source of disagreement between researchers.

                ## Milestones
                1. Rank, z-score and winsorised z-score versions compared on two factors.
                2. One convention chosen, including the winsorisation level and whether scores are computed within sectors.
                3. The convention added to the definition sheet.
                4. Existing factors rebuilt on the chosen convention.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One standardisation and outlier rule is recorded in the definition sheet and every factor in the library is rebuilt on it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Build rank and z-score versions of the value and momentum factors"
                - "Compare factor returns and turnover across the versions"
                - "Choose the convention and the winsorisation level"
                - "Rebuild the library on the chosen convention"
            - name: Industry classification choice for neutralising factors
              description: |-
                ## Purpose
                Value tilts heavily towards a handful of industries, and an un-neutralised value factor is partly a bet on banks and energy. Choosing a classification scheme, a level of granularity and a point-in-time history for it decides how cleanly you can separate stock selection from industry bets.

                ## Milestones
                1. Two or three classification schemes compared on history depth, point-in-time availability and licence cost.
                2. A granularity chosen, balancing industry purity against groups too small to regress on.
                3. A minimum number of names per group set, with a merging rule for small groups.
                4. The choice recorded with the reasons.

                ## Notes
                A current classification mapped backwards is not point in time. Companies change industry, and that matters most for the names that matter most.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the classification scheme, level, minimum group size and merge rule, with point-in-time history confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the classification schemes you can access and their history depth"
                - "Count names per group at two granularities for a recent date"
                - "Set a minimum group size and a rule for merging small groups"
                - "Write the decision and reasons into the definition sheet"
            - name: Factor research workbook and naming conventions
              description: |-
                ## Purpose
                A factor called value in one notebook and bm_ratio in another, with three different date columns, wastes more time than any modelling mistake. Agreeing names for factors, dates and files, and one workbook structure for every new factor, makes results comparable and easy to hand to a colleague.

                ## Milestones
                1. A naming pattern for factors, versions and output files agreed.
                2. A standard workbook layout with sections for definition, coverage, returns, exposures and verdict.
                3. One existing factor moved into the new layout as the worked example.
                4. The conventions written on a single page in the research folder.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page naming convention and a workbook layout exist, with at least one factor documented in that layout."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a naming pattern for factor ids, versions and outputs"
                - "Lay out the five standard sections of a factor workbook"
                - "Move one existing factor into the new layout"
                - "Save the conventions page in the research folder"
            - name: Monthly factor return update
              description: |-
                ## Purpose
                Factor returns are only useful if they are current, checked and comparable month to month. A fixed monthly run that refreshes data, recomputes each factor's long-short and regression returns and logs them in one place turns the library into something people actually consult.

                ## Milestones
                1. A monthly run that rebuilds factor returns from fresh data on a set day.
                2. Each month's returns appended to a single log with the run date and data version.
                3. Any month where a factor moves beyond three standard deviations flagged and explained.
                4. Twelve consecutive months logged without a skipped run.

                ## Notes
                Start from the **Metrics log** template for the return log.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Factor returns are logged every month with run date and data version, and every move beyond three standard deviations has a written note."
                cadence: rolling
              tasks:
                - "Set up the factor return log with columns for each factor and data version"
                - "Run the monthly factor return rebuild and append the results @recurring(monthly:3)"
                - "Write a note on any factor move beyond three standard deviations"
                - "Archive the input data snapshot used for the run"
            - name: Monthly factor exposure report for a portfolio
              description: |-
                ## Purpose
                A portfolio manager who thinks they own quality stocks may in fact be running a large low volatility and small negative momentum tilt. A monthly exposure report, showing active exposures in standard deviation units against a benchmark, makes those bets visible before they show up as a bad month.

                ## Milestones
                1. Portfolio and benchmark exposures to each factor calculated on the same standardised scores.
                2. Active exposures shown in one table with the prior three months beside them.
                3. Any active exposure beyond an agreed band flagged.
                4. The report delivered to its readers on a fixed day each month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An exposure report with active exposures, three-month history and band breaches reaches its readers on the same day every month."
                cadence: rolling
              tasks:
                - "Agree the benchmark and the exposure bands with the report's readers"
                - "Produce and send the factor exposure report @recurring(monthly:10)"
                - "Add a one-line comment on the largest change since last month"
                - "Keep a register of band breaches and what was decided about each"
            - name: Quarterly factor definition review
              description: |-
                ## Purpose
                Data vendors change fields, accounting standards shift and someone always tweaks a factor in a hurry before a meeting. A quarterly review of the definition sheet against the code that actually runs catches drift before two versions of the same factor start circulating.

                ## Milestones
                1. Every factor's running code compared with its written definition.
                2. Any mismatch either fixed in code or recorded as a deliberate change.
                3. Vendor field changes from the quarter checked for effects on factor inputs.
                4. The review date and outcome entered in the factor change log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, every factor's code is checked against its definition and the outcome is logged with a date."
                cadence: rolling
              tasks:
                - "Compare running factor code against the definition sheet @recurring(quarterly)"
                - "Read the data vendor's change notices for the quarter"
                - "Fix or document every mismatch found"
                - "Log the review date and result in the change log"
            - name: Factor crowding watch
              description: |-
                ## Purpose
                When many funds hold the same factor portfolio, unwinds become sharp and correlated, as the quant drawdowns of past decades showed. A monthly crowding check using measures such as valuation spreads between long and short legs, pairwise correlation of the legs, short interest and holdings overlap gives early warning that a factor has become a crowded trade.

                ## Milestones
                1. Three or four crowding measures chosen and their data sources confirmed.
                2. A monthly history of each measure built back as far as the data allows.
                3. Thresholds for concern set from the historical distribution, not from intuition.
                4. Crowding readings recorded each month with a short comment.

                ## Notes
                Start from the **Risk register** template. Crowding measures are noisy and none times unwinds reliably, so treat them as context for sizing discussions, not as signals.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly crowding log covers at least three measures per major factor, with historical thresholds and a comment for every reading above them."
                cadence: rolling
              tasks:
                - "Choose three crowding measures and confirm their data sources"
                - "Build each measure's history and set percentile thresholds"
                - "Update the crowding readings and comment on any breach @recurring(monthly:17)"
            - name: Fundamentals refresh and data break check
              description: |-
                ## Purpose
                One vendor reload that shifts a field's units or drops a sector for a month can move a factor more than any real market event. A monthly check of coverage, field distributions and factor values against last month catches data breaks before they reach the return log or the exposure report.

                ## Milestones
                1. Coverage per factor per month tracked as a count and percentage of the universe.
                2. Distribution checks on key raw fields, with alerts on shifts in median or range.
                3. A comparison of each factor's scores against the prior month, flagging names that moved implausibly.
                4. Every break found recorded with its cause and fix.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Coverage and distribution checks run monthly on every factor input, and each detected data break has a recorded cause and fix."
                cadence: rolling
              tasks:
                - "Write coverage and distribution checks for the main fundamental fields"
                - "Run the data break checks after the monthly fundamentals load @recurring(monthly:24)"
                - "Record each break with its cause and the fix applied"
            - name: Factor correlation and redundancy monitor
              description: |-
                ## Purpose
                Libraries grow to forty factors that are really six, and a new quality variant that is 0.9 correlated with an old one adds noise, not information. A quarterly correlation matrix of factor returns and scores, with clusters marked, keeps the library lean and shows when two factors have started to move together.

                ## Milestones
                1. A correlation matrix of factor returns over trailing and full-history windows.
                2. A score correlation matrix for the latest date, to catch overlap in holdings.
                3. Clusters of highly correlated factors identified and a lead factor named for each.
                4. Retirement or merge proposals written for redundant factors.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter a return and score correlation matrix is produced, clusters are named and at least one keep, merge or retire decision is recorded where overlap exceeds the threshold."
                cadence: rolling
              tasks:
                - "Set the correlation threshold that marks two factors as redundant"
                - "Produce return and score correlation matrices @recurring(quarterly)"
                - "Name a lead factor for each correlated cluster"
                - "Write merge or retire proposals for redundant factors"
            - name: Weekly factor performance note
              description: |-
                ## Purpose
                Colleagues ask why momentum had a bad week long before the monthly report arrives. A short weekly note on the main factor returns, the largest moves and any obvious cause, such as a rates shock or a sector rotation, builds a running narrative that makes later regime work far easier.

                ## Milestones
                1. A fixed list of factors and a one-page format for the note.
                2. The note sent every week, even when nothing much happened.
                3. Each large move linked to a plausible market event or marked unexplained.
                4. A year of notes kept in one searchable place.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly factor note is circulated on a fixed day for at least three consecutive months, with every large move annotated."
                cadence: rolling
              tasks:
                - "Decide the factor list and the one-page format"
                - "Write and circulate the weekly factor performance note @recurring(weekly:fri)"
                - "Tag each note with the market events mentioned so it can be searched"
            - name: Annual factor model rebuild cycle
              description: |-
                ## Purpose
                Once a year the whole model deserves a fresh look: updated history, revised breakpoints, a check of each factor's out-of-sample record since it was added and a decision on what stays. Running this as a planned cycle, rather than whenever results disappoint, keeps changes deliberate and comparable year on year.

                ## Milestones
                1. The full history rebuilt on the latest data and definitions.
                2. Every factor's record since its inclusion date compared with its original backtest.
                3. A keep, modify or retire decision for each factor recorded.
                4. A new model version tagged and released with a summary of changes.

                ## Notes
                Compare post-inclusion performance with the in-sample estimate. A drop of a third to a half is common for published factors and is not by itself a reason to retire one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A yearly rebuild produces a tagged model version with a keep, modify or retire decision for every factor and a written summary of changes."
                cadence: cyclic
                effort_hours_estimate: "30"
              tasks:
                - "Schedule the annual rebuild window and tell the model's users @recurring(yearly)"
                - "Rebuild the full history on current data and definitions"
                - "Compare each factor's post-inclusion record with its original backtest"
                - "Release the new model version with a change summary"
            - name: Factor research reading queue
              description: |-
                ## Purpose
                New factor papers appear every week and most repackage something already known. A curated reading queue, with each paper tagged by the factor family it touches and a one-line verdict on whether it adds anything, keeps you current without chasing every working paper.

                ## Milestones
                1. A queue of ten papers tagged by factor family.
                2. A one-line verdict recorded for each paper read.
                3. Papers that suggest a testable change to your library moved to a test list.
                4. Two papers a month read and summarised for a year.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The reading queue holds tagged papers with a verdict on each one read, and at least two papers a month are summarised."
                cadence: rolling
              tasks:
                - "List ten factor papers you mean to read and tag each by family"
                - "Read and summarise two queued papers @recurring(monthly:12)"
                - "Move any paper with a testable idea to the factor test list"
            - name: Factor library change log and versioning
              description: |-
                ## Purpose
                Six months after a factor change nobody remembers why momentum skips a month or when the value composite gained a third component. A change log with the date, reason, author and effect on returns for every methodology change lets anyone reproduce an old result and explain a break in a chart.

                ## Milestones
                1. A change log with date, factor, change, reason, author and measured effect.
                2. Every factor tagged with a version number that appears in its outputs.
                3. Past changes reconstructed from memory and code history as far as possible.
                4. A monthly glance at the log to confirm nothing was changed without an entry.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every methodology change since the log started has an entry with reason and measured effect, and output files carry the factor version."
                cadence: rolling
              tasks:
                - "Create the change log with its six standard columns"
                - "Reconstruct past changes from code history and colleagues"
                - "Add the factor version number to every output file"
                - "Check code history against the change log for unlogged edits @recurring(monthly:28)"
            - name: Fama-MacBeth cross-sectional regressions by hand
              description: |-
                ## Purpose
                Running the two-pass procedure yourself, a cross-sectional regression each month followed by averaging the slopes, teaches more about factor premia than any library call. Coding it from scratch on your own universe, then checking against a package, shows exactly where standard errors, weighting and outliers change the answer.

                ## Milestones
                1. Monthly cross-sectional regressions of returns on lagged characteristics coded from scratch.
                2. Average slopes and their time-series standard errors reported for each characteristic.
                3. Results compared with a statistics package and any differences explained.
                4. A short write-up of how equal versus value weighting changed the estimates.

                ## Notes
                Use characteristics measured before the return month. The commonest bug is a one-month alignment error that makes everything look significant.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A from-scratch two-pass regression reproduces a package's slope estimates to within rounding, with a written note on weighting effects."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the original two-pass procedure and note each step"
                - "Code the monthly cross-sectional regressions on your universe"
                - "Average the slopes and compute their standard errors"
                - "Check the results against a package and explain the gaps"
            - name: Portfolio sorts and long-short factor spreads
              description: |-
                ## Purpose
                Sorting stocks into quantiles on a characteristic and comparing top with bottom is the most transparent way to see whether a factor works and where. Building decile and two-by-three sorts, equal and value weighted, shows whether a premium lives in the extremes, in small caps or across the whole cross-section.

                ## Milestones
                1. Decile sorts built for two factors with monthly returns per decile.
                2. Equal-weighted and value-weighted versions compared.
                3. A two-by-three size and characteristic sort built on standard breakpoints.
                4. A chart showing whether returns rise steadily across deciles or only at the ends.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Decile and two-by-three sorts exist for two factors in both weightings, with a written conclusion on where the spread comes from."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build decile portfolios on value and momentum each month"
                - "Compute equal and value weighted returns per decile"
                - "Build the two-by-three size sort on standard breakpoints"
                - "Chart decile returns and write where the spread comes from"
            - name: Time-series regressions and pricing error tests
              description: |-
                ## Purpose
                Judge a factor model by what it leaves unexplained in the returns of test portfolios. Regressing test portfolio returns on your factors, studying the intercepts and running a joint test of whether they are all zero tells you whether the model is complete or missing something.

                ## Milestones
                1. A set of test portfolios chosen, such as size and value or industry portfolios.
                2. Time-series regressions run with intercepts and their t-statistics reported.
                3. A joint test of the intercepts carried out and interpreted.
                4. Two competing factor models compared on the same test portfolios.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Intercepts and a joint zero-intercept test are reported for two factor models on the same test portfolios, with a written comparison."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose the test portfolios and download or build their returns"
                - "Run time-series regressions on your factor set"
                - "Carry out the joint test that all intercepts are zero"
                - "Compare a three-factor and a five-factor model on the results"
            - name: Characteristics versus factor loadings study
              description: |-
                ## Purpose
                Asset pricing has long debated whether returns follow a stock's characteristic, such as its book-to-price, or its estimated loading on the factor built from that characteristic. Working through the evidence and running a simple test on your own data sharpens how you interpret every exposure report you produce.

                ## Milestones
                1. The main papers on both sides of the debate summarised in a page.
                2. Stocks double-sorted on a characteristic and on its estimated loading.
                3. Returns compared across the cells and a conclusion drawn for your universe.
                4. A note on what the result means for exposure reporting.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the debate and a double-sort test on your universe exist, with a stated implication for exposure reports."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read two papers on each side of the characteristics debate"
                - "Estimate rolling loadings on the value factor for each stock"
                - "Double-sort on characteristic and loading and compare returns"
                - "Write what the result means for how you report exposures"
            - name: Mapping the factor zoo by family
              description: |-
                ## Purpose
                Hundreds of factors have been published, and many are near copies under new names. A map that groups them into a small number of families, value, momentum, profitability, investment, low risk, trading frictions and so on, shows where your library is thin and stops you rediscovering an old factor.

                ## Milestones
                1. Published factors from two or three large survey papers grouped into families.
                2. Your own library mapped onto the same families.
                3. Gaps and overcrowded families in your library identified.
                4. A short list of under-covered families to research next.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A family map of published factors covers your library, with at least two gaps named as next research targets."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the factor lists from two large survey papers"
                - "Ask the agent to draft a first grouping of the factors into families"
                - "Check the grouping by hand and map your own factors onto it"
                - "Name the two families you will research next"
            - name: Information coefficient and signal decay profile
              description: |-
                ## Purpose
                Signals that predict next month and nothing after need frequent, costly rebalancing, while a factor that decays slowly can be traded patiently. Measuring rank information coefficients at horizons from one to twelve months gives each factor a decay profile that feeds directly into rebalance and combination choices.

                ## Milestones
                1. Monthly rank information coefficients calculated for each factor at one, three, six and twelve months.
                2. Mean, volatility and hit rate of the coefficient reported per horizon.
                3. A decay chart drawn for every factor in the library.
                4. Each factor labelled fast, medium or slow decaying.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every factor has a decay chart and a fast, medium or slow label based on information coefficients at four horizons."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compute rank correlations between factor scores and forward returns"
                - "Repeat at one, three, six and twelve month horizons"
                - "Draw a decay chart for each factor"
                - "Refresh the decay profiles with the latest data @recurring(quarterly)"
            - name: Statistical factors from principal components
              description: |-
                ## Purpose
                Principal components of the return covariance find the common drivers without any view of what they are, which is a useful check on a fundamental model. Extracting components, then explaining them with your named factors, shows how much of the common variation your definitions already capture.

                ## Milestones
                1. Principal components extracted from a rolling window of stock returns.
                2. The share of variance explained by the first ten components reported.
                3. Each leading component regressed on your named factors and industries.
                4. Components your factors do not explain listed for investigation.

                ## Notes
                Components are unstable from window to window and their signs flip. Compare subspaces rather than individual components over time.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A report shows variance explained by leading components and how much of each your named factors capture, with unexplained components listed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build a clean return matrix for a rolling window"
                - "Extract the leading principal components and their variance shares"
                - "Regress each component on your named factors and industries"
                - "List the components your factors leave unexplained"
            - name: Standard errors and significance bars for factor premia
              description: |-
                ## Purpose
                Factor returns are autocorrelated and the cross-section of researchers has tried many factors, so a t-statistic of two means far less than textbooks suggest. Learning autocorrelation-adjusted standard errors and the case for higher significance bars changes which factors you treat as established.

                ## Milestones
                1. Plain and Newey-West standard errors compared for every factor premium.
                2. The argument for a higher significance bar for new factors summarised from the literature.
                3. Your library's factors sorted into those that clear the higher bar and those that do not.
                4. A house rule for the bar a new factor must clear written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each factor premium is reported with adjusted standard errors and classified against a written house significance bar."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Recompute each factor premium with Newey-West standard errors"
                - "Summarise the literature on raising the significance bar for factors"
                - "Classify your factors against the higher bar"
                - "Write the house rule a new factor must meet"
            - name: Choosing a value factor definition
              description: |-
                ## Purpose
                Book-to-price struggled for a long stretch while earnings and cash flow yields held up better, and intangible-heavy companies made book value less meaningful. Comparing single and composite value definitions on the same universe, with the same lag and weighting, leads to a documented choice instead of the default.

                ## Milestones
                1. Four value definitions built, such as book, earnings, cash flow and a composite.
                2. Returns, turnover, drawdowns and sector tilts compared side by side.
                3. Performance split by decade to see which definitions depend on one era.
                4. A choice recorded with reasons and the runner-up kept as a variant.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision memo selects one value definition after comparing four on returns, turnover, drawdown and decade splits."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Build four value definitions on the same lag and weighting"
                - "Compare returns, turnover and drawdowns in one table"
                - "Split the results by decade and by sector"
                - "Write the decision memo naming the chosen definition"
            - name: Momentum construction choices and crash exposure
              description: |-
                ## Purpose
                Standard momentum skips the latest month, but the formation window, residual versus raw returns and volatility scaling all change its behaviour, especially in the sharp rebounds that cause momentum crashes. Testing these choices together shows the trade between headline return and crash risk.

                ## Milestones
                1. Raw twelve-month, residual and volatility-scaled momentum variants built.
                2. Returns compared in normal months and in the worst rebound months.
                3. Turnover and correlation with value reported for each variant.
                4. A chosen construction recorded, with its crash behaviour stated plainly.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of momentum construction is backed by a comparison of three variants that includes their worst rebound months."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build raw, residual and volatility-scaled momentum"
                - "Identify the worst market rebound months in your history"
                - "Compare the variants in those months and overall"
                - "Record the chosen construction and its crash behaviour"
            - name: Quality factor composite design
              description: |-
                ## Purpose
                Quality means profitability to one researcher, low debt to another and earnings stability to a third, and the components do not always agree. Designing a composite from clearly defined parts, with each tested alone first, gives a quality factor you can explain and decompose when it misbehaves.

                ## Milestones
                1. Four candidate components defined, such as gross profitability, accruals, balance sheet strength and earnings stability.
                2. Each component tested alone for return, turnover and correlation with the others.
                3. A weighting scheme for the composite chosen and justified.
                4. The composite added to the definition sheet with its components listed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A quality composite with documented components and weights is in the definition sheet, backed by stand-alone tests of each component."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Define four quality components with formulas and fields"
                - "Test each component alone and record correlations"
                - "Choose and justify the composite weighting"
                - "Add the composite and its parts to the definition sheet"
            - name: Low volatility and low beta factor construction
              description: |-
                ## Purpose
                Low risk stocks have historically delivered better risk-adjusted returns than theory predicts, but a naive low volatility portfolio is a large bet on utilities and on falling interest rates. Building beta-neutral and sector-neutral versions shows how much of the effect survives once those side bets are removed.

                ## Milestones
                1. Low volatility and low beta factors built on a consistent estimation window.
                2. A beta-neutral version constructed by scaling the long and short legs.
                3. Sector and interest rate sensitivity of each version measured.
                4. A preferred construction recorded with its known side bets.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A preferred low risk factor construction is documented with measured sector and interest rate sensitivity for raw and beta-neutral versions."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Estimate volatility and beta on a fixed trailing window"
                - "Build raw and beta-neutral low risk factors"
                - "Measure each version's sector tilt and rate sensitivity"
                - "Record the preferred construction and its side bets"
            - name: Size factor and microcap exclusion decision
              description: |-
                ## Purpose
                Much of the historical size premium comes from microcaps that are expensive to trade and prone to data errors. Deciding where to cut the universe, and testing size and other factors with and without the smallest names, prevents results that depend on stocks nobody can hold.

                ## Milestones
                1. Factor returns computed with and without the smallest size bucket.
                2. The share of each factor's premium coming from microcaps measured.
                3. A market capitalisation or liquidity cut-off chosen.
                4. The cut-off applied to the universe definition and logged.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded microcap cut-off is applied to the universe, supported by a table showing each factor's premium with and without microcaps."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define the microcap bucket using exchange breakpoints"
                - "Recompute factor returns with and without microcaps"
                - "Choose the cut-off and the reason for it"
                - "Apply the cut-off and record it in the change log"
            - name: Sector-neutral versus raw factor comparison
              description: |-
                ## Purpose
                Neutralising a factor within industries removes industry bets but also removes any genuine information in industry-level differences. Running each factor raw and industry-neutral, then comparing return, risk and correlation, gives a per-factor answer instead of one blanket rule.

                ## Milestones
                1. Raw and industry-neutral versions built for every factor.
                2. Return, volatility and drawdown compared for each pair.
                3. The share of each raw factor's return explained by industry tilts measured.
                4. A neutral or raw decision recorded per factor.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each factor in the library has a recorded raw or industry-neutral decision backed by a side-by-side comparison."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build industry-neutral versions of every factor"
                - "Compare each pair on return, volatility and drawdown"
                - "Measure how much raw return comes from industry tilts"
                - "Record the decision per factor in the definition sheet"
            - name: Factor rebalance frequency and turnover study
              description: |-
                ## Purpose
                Monthly rebalancing of a slow factor such as value mostly buys turnover, while quarterly rebalancing of momentum throws away its signal. Testing each factor at several rebalance frequencies, with a simple cost assumption and a buffer rule, shows the frequency where net returns stop improving.

                ## Milestones
                1. Each factor rebuilt at monthly, quarterly and annual rebalance frequencies.
                2. Annual turnover reported for each frequency.
                3. Net returns compared under a stated, conservative cost assumption.
                4. A rebalance frequency and buffer rule chosen per factor.

                ## Notes
                Use a simple, deliberately pessimistic cost per unit of turnover here. Detailed cost modelling belongs to transaction cost work, not to this comparison.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table of turnover and net returns at three frequencies exists for each factor, with a chosen frequency and buffer rule recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Rebuild each factor at three rebalance frequencies"
                - "Report annual turnover for every version"
                - "Apply a pessimistic cost per unit of turnover"
                - "Choose a frequency and buffer rule for each factor"
            - name: Mixing versus integrating multi-factor portfolios
              description: |-
                ## Purpose
                Combining separate factor portfolios is simple and transparent, while scoring each stock on all factors at once gives higher exposure per unit of risk but is harder to explain. Building both on the same factors and comparing exposure, turnover and attribution settles which approach fits how your output is used.

                ## Milestones
                1. A mixed portfolio built from separate single-factor sleeves.
                2. An integrated portfolio built from composite stock scores.
                3. Factor exposures, turnover and return attribution compared.
                4. A decision recorded on which approach the library will use and why.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of mixed and integrated construction on the same factors ends with a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build single-factor sleeves and combine them equally"
                - "Build an integrated portfolio from composite scores"
                - "Compare exposures, turnover and attribution"
                - "Record the chosen approach and its reasons"
            - name: Factor model presentation to an investment committee
              description: |-
                ## Purpose
                An investment committee will ask what the model is for, how it was tested, what it got wrong and what would make you stop using it. Preparing a short deck that answers those questions with your own evidence, not marketing charts, is what gets a factor model adopted or a change approved.

                ## Milestones
                1. A deck of no more than twelve slides covering purpose, data, definitions, results and limits.
                2. Out-of-sample and post-publication evidence shown beside in-sample results.
                3. Three likely hard questions drafted with answers.
                4. The presentation delivered and the committee's decisions and actions recorded.

                ## Notes
                Start from the **Meeting notes** template for the session record.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The committee presentation is delivered by the deadline and its decisions and actions are recorded in meeting notes."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Book the committee slot and confirm how long you have"
                - "Draft the twelve-slide outline from purpose to limits"
                - "Write answers to the three hardest likely questions"
                - "Record the committee's decisions and follow-up actions"
            - name: Peer review of factor definitions and code
              description: |-
                ## Purpose
                Errors in factor code are easy to miss by the person who wrote them and obvious to a colleague reading cold. A structured peer review, where a second researcher rebuilds two factors from the definition sheet alone, tests whether the documentation is complete and the code matches it.

                ## Milestones
                1. A reviewer agreed and given the definition sheet and data, but not the code.
                2. Two factors independently rebuilt by the reviewer.
                3. Differences between the two builds traced to a cause.
                4. Fixes to code or documentation made and the review logged.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A colleague has independently rebuilt two factors from documentation alone and every difference has a recorded cause and fix."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask a colleague to review and agree a date"
                - "Send the definition sheet and data without the code"
                - "Compare the reviewer's builds with yours factor by factor"
                - "Log the causes of differences and the fixes made"
            - name: Year-end factor performance retrospective
              description: |-
                ## Purpose
                Looking back at a full year of factor returns, exposures and crowding readings, with the weekly notes beside them, shows which explanations held up and which were stories told after the fact. A written retrospective is also the best input to the annual rebuild.

                ## Milestones
                1. Each factor's return for the year set against its long-run average and range.
                2. The year's largest factor events listed with what was said about them at the time.
                3. Explanations that held up and those that did not marked honestly.
                4. Three lessons carried into the annual rebuild.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written year-end retrospective covers every factor's annual return, the year's main events and three lessons passed to the rebuild."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Pull the year's factor returns and the weekly notes"
                - "Write the year-end factor retrospective @recurring(yearly)"
                - "Mark which contemporary explanations held up"
                - "Pass three lessons to the annual rebuild plan"
            - name: Factor drawdown post-mortem
              description: |-
                ## Purpose
                When a factor has its worst quarter in years, the temptation is either to abandon it or to explain the loss away. A structured post-mortem that separates data errors, construction choices, crowding and genuine regime change leads to a decision made on evidence, not on the mood in the room.

                ## Milestones
                1. The drawdown measured against the factor's historical distribution of losses.
                2. Data and code checked to rule out errors.
                3. The loss decomposed by sector, size bucket and individual names.
                4. Crowding readings and market context before the drawdown reviewed.
                5. A written conclusion and a keep, change or retire decision.

                ## Notes
                Decide before reading the results what size of drawdown would trigger a review. Writing the rule after the loss invites rationalisation.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A post-mortem document decomposes the drawdown, rules out data errors and records a keep, change or retire decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Place the drawdown in the factor's historical loss distribution"
                - "Rerun the data break checks for the drawdown period"
                - "Decompose the loss by sector, size and top names"
                - "Write the conclusion and the decision"
            - name: Presenting factor research at a seminar or conference
              description: |-
                ## Purpose
                Presenting factor work to outside researchers exposes weak tests faster than any internal review, and a practitioner seminar slot is often easier to get than people think. Preparing a talk on a factor result you can share, without confidential data, builds reputation and sharpens the work.

                ## Milestones
                1. A shareable result chosen that uses public or licensed data you may present.
                2. Permission from your employer confirmed in writing if you are employed.
                3. A talk and slides prepared and rehearsed with a colleague.
                4. The talk delivered and audience challenges recorded for follow-up.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A factor research talk is delivered at an external seminar or conference with employer permission and a written list of audience challenges."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List seminars and conferences that take practitioner factor talks"
                - "Confirm in writing what your employer allows you to present"
                - "Draft and rehearse the talk with a colleague"
                - "Write up the audience challenges after the talk"
            - name: Factor tilts in your own fund holdings
              description: |-
                ## Purpose
                Someone holding a few index funds, a dividend fund and a smaller companies fund often has a stronger value or size tilt than they intended. Using the fund providers' published factor data or a simple returns regression to see those tilts helps you ask better questions of your financial adviser, without turning this into a trading decision.

                ## Milestones
                1. Every fund you hold listed with its published style or factor information.
                2. A simple regression of each fund's returns on public factor series run.
                3. The combined tilts of your holdings summarised in a short table.
                4. Questions about the tilts written down to take to a licensed adviser.

                ## Notes
                This is for understanding, not for picking funds. Any change to your holdings belongs in a conversation with a licensed adviser who knows your situation.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of estimated factor tilts covers every fund you hold, and a list of questions is ready for your adviser."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every fund you hold and find its published style data"
                - "Regress each fund's monthly returns on public factor series"
                - "Summarise the combined tilts in one table"
                - "Write the questions to take to your adviser"
                - "Rerun the fund tilt regression once a year @recurring(yearly)"
            - name: From fundamental analyst to factor researcher
              description: |-
                ## Purpose
                Fundamental analysts know accounting far better than most quants, but factor research asks for breadth over depth and statistics over stories. A structured move, turning one accounting insight you already trust into a tested factor, uses your edge while learning the cross-sectional method.

                ## Milestones
                1. One accounting signal you know well written as a precise, point-in-time formula.
                2. The signal tested with sorts and cross-sectional regressions across the full universe.
                3. Its correlation with standard factors measured to see what is genuinely new.
                4. A write-up shared with a quant colleague for critique.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One accounting-based signal has been turned into a documented factor, tested across the universe and critiqued by a quant colleague."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Choose one accounting signal you already trust from your coverage work"
                - "Write it as a formula using only point-in-time fields"
                - "Test it with decile sorts and cross-sectional regressions"
                - "Share the write-up with a quant colleague for critique"
            - name: Audit of an inherited factor library
              description: |-
                ## Purpose
                Joining a team or taking over from a departing researcher usually means inheriting factor code nobody fully understands. An audit in the first weeks, checking each factor's definition, data, lag and recent behaviour, tells you what you can trust before your name goes on the outputs.

                ## Milestones
                1. An inventory of every factor with its code location, data sources and last change date.
                2. Each factor's actual construction compared with whatever documentation exists.
                3. Look-ahead, survivorship and lag problems checked for each factor.
                4. A ranked list of fixes agreed with your manager.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An inventory and audit of every inherited factor exists, with a ranked fix list agreed with your manager."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Build an inventory of every factor and its code location"
                - "Ask the previous owner or colleagues about known quirks"
                - "Check each factor for look-ahead and survivorship problems"
                - "Agree the ranked fix list with your manager"
            - name: Turning a PhD in empirical asset pricing into practitioner factor work
              description: |-
                ## Purpose
                Academic factor papers optimise for a clean identification story, while practitioners care about implementability, capacity, correlation with what is already owned and behaviour in bad months. Reworking one chapter of your thesis to answer practitioner questions shows employers you understand the difference.

                ## Milestones
                1. One thesis result chosen and restated as a factor with a tradable definition.
                2. Turnover, capacity and correlation with standard factors added.
                3. Performance in the worst market months reported.
                4. A two-page practitioner summary written that you could share in interviews.

                ## Notes
                Check what your university and any data licence allow you to share before showing results outside academia.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A two-page practitioner summary of one thesis factor includes turnover, capacity, correlation with standard factors and worst-month behaviour."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pick the thesis result that is closest to a tradable factor"
                - "Add turnover, capacity and correlation with standard factors"
                - "Report the factor's returns in the worst market months"
                - "Write the two-page practitioner summary"
            - name: Explaining factor exposures to a portfolio manager
              description: |-
                ## Purpose
                Discretionary portfolio managers rarely want a regression table; they want to know whether their best ideas are secretly the same bet. A short monthly conversation, built around the three largest exposures and one or two named positions driving each, makes factor work useful to people who do not read the model.

                ## Milestones
                1. The portfolio manager's main questions about risk and style written down.
                2. A one-page monthly exposure summary in plain language.
                3. The positions driving each large exposure named.
                4. A standing monthly conversation in the diary with notes kept.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A plain-language exposure summary is discussed with the portfolio manager every month and notes from each conversation are kept."
                cadence: rolling
              tasks:
                - "Ask the portfolio manager what they most want to know about style risk"
                - "Draft a one-page plain-language exposure summary"
                - "Hold the monthly exposure conversation and keep notes @recurring(monthly:6)"
            - name: Factor behaviour across market regimes
              description: |-
                ## Purpose
                Value, momentum and low volatility each behave differently in recessions, rate shocks, high volatility spells and recoveries. Labelling history into a few regimes with rules fixed in advance, then measuring each factor in each regime, tells you what to expect without pretending you can call the regime in real time.

                ## Milestones
                1. Three to five regimes defined with rules fixed before looking at factor returns.
                2. Each month of history labelled using only data known at the time.
                3. Factor returns, volatility and correlations reported by regime.
                4. Findings written up with the number of observations in each regime stated.

                ## Notes
                Some regimes contain only a handful of episodes. Report how few, and treat the results as description, not forecast.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A regime report shows factor returns and correlations for each predefined regime, with episode counts and look-ahead-free labels."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write the regime rules before looking at factor returns"
                - "Label each historical month using data known at the time"
                - "Report factor returns and correlations by regime"
                - "Update regime labels and the factor table @recurring(quarterly)"
            - name: Factor timing study with a sceptical bar
              description: |-
                ## Purpose
                Timing factors by valuation spreads, momentum in factor returns or macro signals is tempting and has a poor record out of sample. Running a timing study with the stop rule, holdout period and minimum improvement written before any test protects you from mistaking noise for skill.

                ## Milestones
                1. A written plan naming the timing signals, holdout period and the improvement required to adopt any of them.
                2. Timing signals tested on the in-sample period only.
                3. The holdout period run once, with results recorded whatever they show.
                4. An adopt or reject decision made against the pre-written bar.

                ## Notes
                Expect most timing signals to fail the holdout. A clear rejection is a useful result and belongs in the change log too.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A timing study with a pre-written plan and a single holdout run ends with an adopt or reject decision against the stated bar."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the timing plan, holdout period and adoption bar"
                - "Test the timing signals on the in-sample period"
                - "Run the holdout period once and record the results"
                - "Record the adopt or reject decision against the bar"
            - name: International and emerging market factor build
              description: |-
                ## Purpose
                Factors built on one country's data do not transfer cleanly: accounting standards, reporting lags, liquidity and free float differ, and emerging markets add capital controls and thin histories. Extending the library to other regions, with country-specific lags and liquidity rules, shows which factors are global and which are local.

                ## Milestones
                1. Reporting lags and accounting differences documented for each new region.
                2. Region-specific universes built with liquidity and free float filters.
                3. Core factors rebuilt per region and compared with the home market.
                4. Factors classed as broadly global, regional or not working outside the home market.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Core factors are rebuilt for at least two non-home regions with documented lags, and each is classed as global, regional or local."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Document reporting lags and accounting quirks for each region"
                - "Build regional universes with liquidity and free float filters"
                - "Rebuild the core factors region by region"
                - "Class each factor as global, regional or local"
            - name: Style factors across asset classes
              description: |-
                ## Purpose
                Researchers have studied value, momentum, carry and defensive styles in currencies, bonds, commodities and equity indices as well as single stocks. Building simple cross-asset versions shows whether the styles in your equity library reflect something broader and how correlated they are across markets.

                ## Milestones
                1. Value, momentum and carry defined for at least two non-equity asset classes.
                2. Simple long-short returns built for each style in each asset class.
                3. Correlations of the same style across asset classes measured.
                4. A note on whether each equity factor has a cross-asset counterpart.

                ## Notes
                Futures data needs careful roll handling, and carry definitions differ by market. Keep each definition short and cite its source.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Long-short style returns exist for at least two non-equity asset classes, with cross-asset correlations reported for each style."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose two asset classes and confirm the data you can access"
                - "Write value, momentum and carry definitions for each"
                - "Build the long-short style returns"
                - "Measure the correlation of each style across asset classes"
            - name: Time-varying factor exposures and conditional betas
              description: |-
                ## Purpose
                Exposure of a stock or a fund to a factor is not fixed: it drifts with debt on the balance sheet, business mix and market conditions. Estimating conditional exposures, with rolling windows or exposures linked to observable characteristics, shows when a static model is misleading and by how much.

                ## Milestones
                1. Rolling exposures estimated for a sample of stocks and funds.
                2. A conditional model linking exposures to observable characteristics fitted.
                3. Static, rolling and conditional exposures compared on explained variance out of sample.
                4. A recommendation on when the library should report conditional exposures.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison of static, rolling and conditional exposures on out-of-sample explained variance ends with a written reporting recommendation."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Estimate rolling exposures for a sample of stocks and funds"
                - "Fit a conditional model tying exposures to characteristics"
                - "Compare the three approaches out of sample"
                - "Write the recommendation on reporting conditional exposures"
---

# Factor Models

Factor models sit underneath most systematic equity work: they explain why a portfolio moved, separate a genuine signal from a repackaged value or momentum bet, and show where a crowd has piled in. This area starts with the plumbing (a point-in-time universe, lagged fundamentals and written factor definitions), adds the monthly machinery that keeps factor returns and exposures current, then moves through the core techniques, construction choices, events such as committee presentations and post-mortems, situations for analysts, PhD researchers and inherited libraries, and finally regime, timing, international and cross-asset work.

The rhythms are a monthly factor return update, a monthly exposure report, crowding and data checks later in the month, a weekly factor note, quarterly definition and correlation reviews and a yearly rebuild. Pair the return history with the **Metrics log** template, the reading list with **Reading queue**, crowding and data risks with **Risk register** and committee sessions with **Meeting notes**. None of this is investment advice, and most published factors are weaker out of sample than in the paper that named them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
