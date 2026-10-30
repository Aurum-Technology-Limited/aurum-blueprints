---
id: quant-finance.overfitting-and-multiple-testing
name: Overfitting and Multiple Testing
description: "A trial ledger, a sealed holdout, deflated Sharpe ratios, purged cross-validation and a written evidence bar, so the strategies you promote are less likely to be noise you selected."
category: business
version: 1.0.0
tags: [quant-finance, overfitting-and-multiple-testing, researcher, backtest-overfitting, deflated-sharpe, cross-validation, false-discovery, holdout]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - reading-queue
    - meeting-notes
    - risk-register
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Overfitting and Multiple Testing
          description: "Controlling overfitting in strategy research: counting trials, deflated performance measures, cross-validation for time series and holding back data you never touch."
          projects:
            - name: Overfitting exposure audit of current research
              description: |-
                ## Purpose
                Before adding any new control, find out how exposed your existing work already is. Most researchers cannot say how many variants sit behind their best backtest, which data has already been looked at, or which parameters were tuned by eye. A one-page audit of the live candidate list turns a vague worry into a ranked set of specific problems to fix first.

                ## Milestones
                1. Every strategy currently under consideration listed with its headline backtest statistic and data period.
                2. For each one, an honest estimate of variants tried, parameters tuned and periods inspected.
                3. Each candidate scored low, medium or high for overfitting exposure with a one-line reason.
                4. The three highest-exposure candidates named as the first to re-test under the controls in this area.

                ## Notes
                Estimate generously. If you cannot remember how many variants you ran, assume it was more than you think; that instinct is usually right.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated audit lists every live candidate with an estimated trial count, an exposure score and the three to re-test first."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every strategy you currently consider promising, with its headline Sharpe"
                - "Estimate the number of variants run behind each one from notebooks and logs"
                - "Score each candidate low, medium or high for overfitting exposure"
                - "Pick the three highest-exposure candidates to re-test first"
            - name: Trial ledger set-up for every backtest run
              description: |-
                ## Purpose
                Every multiple-testing correction needs one number you probably do not have: how many trials were run. A ledger that records each backtest configuration automatically, with its parameters, data window and result, gives you that number for free from now on and makes later deflation honest rather than guessed.

                ## Milestones
                1. A ledger table or file defined with fields for run id, strategy family, parameters, data window, date and headline statistics.
                2. The backtest code writing one ledger row per run without manual steps.
                3. Failed and abandoned runs recorded as well as successful ones.
                4. A query that returns the trial count and the distribution of results for any strategy family.

                ## Notes
                Start from the **Metrics log** template if you want a manual version while the automatic hook is being built. The automatic hook matters more: manual ledgers drift within weeks.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Running any backtest adds a ledger row automatically, and the trial count for a strategy family can be retrieved with one query."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define the ledger fields, including the returns series location for each run"
                - "Add a hook to the backtest runner that writes a row on every run"
                - "Make sure crashed and abandoned runs still leave a row"
                - "Write the query that counts trials and summarises results per family"
            - name: Sealed holdout period and universe
              description: |-
                ## Purpose
                A holdout only protects you if it has never been seen, and data that has been peeked at once is no longer out of sample. Choosing a final period, and ideally a slice of instruments, that no research query may touch until a strategy is ready for its final test gives you one genuinely fresh look per idea.

                ## Milestones
                1. A holdout period and, where the universe allows, a set of held-out instruments chosen and written down with reasons.
                2. Research data loaders changed so the holdout cannot be read by default.
                3. A written rule for who may open the holdout, when, and how often per strategy.
                4. A record of any past contact with the holdout data, so its cleanliness is known.

                ## Notes
                The most recent data is the most tempting to look at and often the most relevant, so many teams hold back the latest one to two years. Decide the length before you know which choice flatters your current ideas.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The holdout period and instruments are documented, blocked in the data loaders by default, and governed by a written access rule."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose the holdout period length before checking how current ideas perform in it"
                - "Block the holdout in the default research data loader"
                - "Write the access rule for opening the holdout and who signs it off"
                - "Record every past occasion the holdout data was viewed or used"
            - name: Research degrees of freedom inventory
              description: |-
                ## Purpose
                Overfitting rarely comes from one big parameter sweep. It comes from dozens of quiet choices: the universe filter, the rebalance day, the lookback, the winsorisation level, the start date. Listing every choice a strategy family allows shows how large the hidden search space really is and which choices deserve to be fixed in advance.

                ## Milestones
                1. Every tunable choice in one strategy family listed, including data cleaning and universe rules.
                2. Each choice tagged as fixed by theory, fixed by convention or genuinely searched.
                3. An estimate of the total configuration space if every searched choice were varied.
                4. At least three choices moved from searched to fixed, with the reason recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written inventory of choices for one strategy family, each tagged, with at least three choices now fixed in advance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk through one strategy's code and list every hard-coded or tunable choice"
                - "Tag each choice as theory, convention or searched"
                - "Multiply out the searched choices to size the configuration space"
                - "Fix at least three searched choices and note why"
            - name: Pre-registration form for strategy hypotheses
              description: |-
                ## Purpose
                Writing down the hypothesis, the test, the parameters and the pass mark before running anything is the cheapest overfitting control there is. A short form that takes ten minutes per idea separates the test you planned from the twenty you ran afterwards, and gives reviewers something to hold the result against.

                ## Milestones
                1. A one-page form with fields for economic rationale, signal definition, parameters, data window, test statistic and pass mark.
                2. A rule that a backtest only counts as confirmatory if its form was dated before the run.
                3. The form stored where the trial ledger can link to it.
                4. Two current ideas pre-registered using the form.

                ## Notes
                Exploratory work is still allowed. The point is to label it as exploratory, so nobody later presents a fished result as a planned test.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pre-registration form exists, is linked from the trial ledger, and has been used for at least two ideas before their first run."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the pre-registration fields on one page"
                - "Add a ledger field linking each run to its pre-registration"
                - "Write the rule separating confirmatory runs from exploratory ones"
                - "Pre-register two ideas you plan to test this month"
            - name: Written evidence bar before a result counts
              description: |-
                ## Purpose
                Without an agreed bar, every promising backtest becomes a negotiation, and the bar quietly drops when you are excited. Writing the minimum evidence a strategy needs before it moves forward, set before you look at the next result, protects you from your own enthusiasm.

                ## Milestones
                1. A minimum data length, minimum number of independent bets and minimum deflated Sharpe or adjusted t-statistic written down.
                2. Required checks listed: parameter sensitivity, sub-period stability, cost stress and the holdout test.
                3. A rule that any candidate failing one check goes back to research rather than forward with a caveat.
                4. The bar signed off by a colleague or mentor, or dated and filed if you work alone.

                ## Notes
                Agree the bar with whoever owns risk where you work. If the strategy will ever trade, the bar should also require a written initial size, a loss limit and a stop rule that retires it without debate.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated evidence bar names numeric thresholds and required checks, and has been applied to at least one current candidate."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write minimum data length and number of independent bets for a valid test"
                - "Set the minimum deflated or adjusted statistic a candidate must clear"
                - "List the checks every candidate must pass before moving forward"
                - "Apply the bar to one current candidate and record the outcome"
            - name: Choosing an error rate policy, FWER or FDR
              description: |-
                ## Purpose
                Controlling the family-wise error rate keeps the chance of any false discovery low but can bury real signals, while controlling the false discovery rate accepts some false positives in exchange for power. Which suits you depends on whether one bad strategy is costly or whether you run a broad book of small bets. Making this choice once stops you switching methods to get the answer you want.

                ## Milestones
                1. The difference between family-wise and false discovery control written in your own words with one worked example.
                2. The cost of a false discovery in your setting compared with the cost of a missed signal.
                3. A chosen policy, with the specific procedure (for example Holm or Benjamini-Hochberg) and the target rate.
                4. The policy added to your evidence bar document.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the error rate concept, the procedure and the target level used for all future candidate families."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a half-page comparison of family-wise and false discovery control"
                - "Estimate what one false strategy would cost against one missed real signal"
                - "Choose the procedure and target rate and write down why"
                - "Add the policy to the evidence bar document"
            - name: Random signal baseline for your backtester
              description: |-
                ## Purpose
                Seeing what pure noise looks like in your own setup is humbling and useful. Running a few thousand random or shuffled signals through the same backtester, universe and costs shows the best Sharpe ratio luck alone produces at your trial counts, which is the number every real result has to beat.

                ## Milestones
                1. A generator of random signals that match the turnover and holding period of your real strategies.
                2. At least one thousand random runs through the unchanged backtester.
                3. The distribution of Sharpe ratios and the maximum observed saved as a chart and a table.
                4. The best random result written beside your current best real result.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A saved distribution of at least one thousand random-signal backtests, with its maximum compared against your best real candidate."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a random signal generator matched to your typical turnover"
                - "Run one thousand random signals through the unchanged backtester"
                - "Chart the Sharpe distribution and note its maximum"
                - "Compare that maximum with your best current real candidate"
            - name: Core reading on backtest overfitting
              description: |-
                ## Purpose
                Roughly a dozen papers cover most of what this area relies on: data snooping and the reality check, multiple testing in factor research, the deflated Sharpe ratio, the probability of backtest overfitting and purged cross-validation. Reading them in a sensible order, with notes on the assumptions each one makes, saves you from applying a correction where it does not fit.

                ## Milestones
                1. A reading list of eight to twelve core papers and book chapters in a chosen order.
                2. A half-page note on each one: the problem, the method, the assumptions and the limits.
                3. A one-page map showing which method answers which question.
                4. At least two methods from the list chosen to implement next.

                ## Notes
                Start from the **Reading queue** template. Good starting authors include White, Hansen, Romano and Wolf, Harvey, Liu and Zhu, and Bailey and Lopez de Prado.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on at least eight core papers exist, plus a one-page map linking each method to the question it answers."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Build the reading list and put it in reading order"
                - "Read one paper and write its half-page note @recurring(weekly:sun)"
                - "Draw the one-page map of methods against questions"
                - "Choose the two methods to implement first"
            - name: Monthly trial count reconciliation
              description: |-
                ## Purpose
                Ledgers only help if their counts are believed. Once a month, checking the ledger against notebooks, scheduler logs and scratch folders catches runs that slipped past the hook, and keeps the number you feed into deflation honest.

                ## Milestones
                1. A monthly comparison of ledger rows against backtest scheduler or job logs.
                2. Any unlogged runs added with a note on how they escaped.
                3. Trial counts per strategy family updated and dated.
                4. The hook fixed for any gap found twice.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every month ends with a dated reconciliation note and updated trial counts per strategy family."
                cadence: rolling
              tasks:
                - "Reconcile the ledger against job logs and notebooks @recurring(monthly:9)"
                - "Add any unlogged runs with a note on the cause"
                - "Update the trial count for each strategy family"
                - "Fix the logging hook for any repeated gap"
            - name: Quarterly holdout seal audit
              description: |-
                ## Purpose
                Holdouts leak quietly: a colleague plots the recent year, a data refresh extends the research window, or a summary statistic gets computed over the full history. A quarterly check of loader settings, access records and recent queries tells you whether the holdout is still fresh or needs to be redefined.

                ## Milestones
                1. Loader defaults confirmed to still exclude the holdout period and instruments.
                2. Every holdout opening since the last audit matched to an approved final test.
                3. Any unapproved contact recorded, with the affected strategies marked as compromised.
                4. A decision on whether to roll the holdout forward recorded.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter produces a dated audit confirming the holdout is sealed, or naming what leaked and which strategies are affected."
                cadence: rolling
              tasks:
                - "Audit loader settings and holdout access records @recurring(quarterly)"
                - "Match each holdout opening to an approved final test"
                - "Mark strategies touched by unapproved contact as compromised"
                - "Record whether the holdout needs rolling forward"
            - name: Weekly overfitting check in research review
              description: |-
                ## Purpose
                Overfitting is easiest to catch in the week it happens, before a result hardens into a belief. A short fixed set of questions at the end of each research week (how many variants, what changed after seeing results, was the holdout touched) keeps the discipline alive without a separate meeting.

                ## Milestones
                1. A checklist of five questions written and kept beside the weekly research notes.
                2. Each week's notes ending with the checklist answered.
                3. Any result that changed after seeing data flagged as exploratory.
                4. A monthly glance at the answers to spot habits forming.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least eleven of every twelve research weeks end with the five-question checklist answered in the notes."
                cadence: rolling
              tasks:
                - "Write the five-question overfitting checklist"
                - "Answer the checklist at the end of the research week @recurring(weekly:fri)"
                - "Relabel any result tuned after seeing data as exploratory"
                - "Note any question you keep answering badly"
            - name: Effective number of independent trials estimate
              description: |-
                ## Purpose
                A thousand backtests of near-identical variants are not a thousand independent trials, and treating them as such over-corrects. Clustering the ledger's return series by correlation each month gives an effective trial count, which is the number deflated Sharpe ratios and similar corrections actually need.

                ## Milestones
                1. A script that clusters ledger return series by correlation and reports the number of clusters.
                2. The clustering method and threshold written down so the estimate is repeatable.
                3. An effective trial count recorded per strategy family each month.
                4. The variance of Sharpe ratios across clusters saved alongside the count.

                ## Notes
                Report both the raw and effective counts. A reviewer should be able to see how much the clustering reduced the number and judge whether that was fair.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month the log shows raw and effective trial counts per strategy family, from a documented clustering method."
                cadence: rolling
              tasks:
                - "Write the clustering script for ledger return series"
                - "Document the correlation threshold and linkage method used"
                - "Refresh effective trial counts per family @recurring(monthly:17)"
                - "Save the cross-cluster Sharpe variance with each count"
            - name: Post-promotion decay ledger
              description: |-
                ## Purpose
                The best evidence of how much your process overfits is what happened to the strategies you already promoted. Comparing each one's results after promotion with its research backtest, every quarter, gives you your own empirical haircut, which is more convincing than any published rule of thumb.

                ## Milestones
                1. Every promoted strategy listed with its research Sharpe, promotion date and post-promotion results.
                2. The ratio of post-promotion to research performance computed for each.
                3. A running median haircut across all promoted strategies.
                4. The haircut fed back into the evidence bar when it moves materially.

                ## Notes
                Expect the haircut to be large. A median retention of half the research Sharpe or less is common, and that is information, not failure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly table shows research and post-promotion performance for every promoted strategy and a median haircut."
                cadence: rolling
              tasks:
                - "List every promoted strategy with research and promotion dates"
                - "Update post-promotion results and the haircut ratio @recurring(quarterly)"
                - "Recompute the median haircut across all promoted strategies"
                - "Raise the evidence bar if the haircut has worsened"
            - name: Parameter sensitivity report for every candidate
              description: |-
                ## Purpose
                A strategy whose performance collapses when the lookback moves from 20 to 22 days has found a coincidence, not an effect. A standard report showing performance across a grid of neighbouring parameters, produced for every candidate before review, makes knife-edge optima visible at a glance.

                ## Milestones
                1. A report generator that varies each searched parameter around its chosen value.
                2. Heat maps or tables of the headline statistic across the grid.
                3. A rule for what counts as a stable plateau versus an isolated peak.
                4. The report attached to every candidate entering review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No candidate enters review without a sensitivity report, and each report states whether the optimum sits on a plateau."
                cadence: rolling
              tasks:
                - "Build the sensitivity report generator for one strategy family"
                - "Write the plateau rule in one paragraph"
                - "Check this month's candidates all have reports @recurring(monthly:26)"
                - "Send back any candidate whose optimum is an isolated peak"
            - name: Weekly pre-registration habit
              description: |-
                ## Purpose
                Leaving a pre-registration form unused is worse than none, because it gives false comfort. Making Monday the day you pre-register whatever you plan to test that week turns the form into a habit and keeps confirmatory and exploratory work clearly separated.

                ## Milestones
                1. Monday planning includes filling a form for each planned test.
                2. Every confirmatory run in the ledger linked to a form dated before it.
                3. A monthly count of confirmatory against exploratory runs.
                4. Ideas that were never pre-registered labelled exploratory in all write-ups.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over any quarter, every run labelled confirmatory links to a pre-registration form dated before the run."
                cadence: rolling
              tasks:
                - "Pre-register this week's planned tests @recurring(weekly:mon)"
                - "Link each confirmatory run in the ledger to its form"
                - "Count confirmatory against exploratory runs at month end"
                - "Relabel unregistered results as exploratory in write-ups"
            - name: Quarterly review of the research search space
              description: |-
                ## Purpose
                Search spaces grow without anyone deciding to grow them: a new filter here, an extra lookback there. Revisiting the degrees of freedom inventory each quarter catches the creep and asks whether the extra choices bought anything except a better-looking backtest.

                ## Milestones
                1. The inventory compared with current code for each active strategy family.
                2. New choices added since last quarter listed with who added them and why.
                3. Choices that never changed the conclusion removed or fixed.
                4. The configuration space size recorded quarter on quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter has a dated note listing new choices, removed choices and the configuration space size per family."
                cadence: rolling
              tasks:
                - "Compare the inventory with current strategy code @recurring(quarterly)"
                - "List choices added since the last review"
                - "Fix or remove choices that never changed a conclusion"
                - "Record the configuration space size for each family"
            - name: Peer red-team of a promising result
              description: |-
                ## Purpose
                The person who found a result is the worst placed to break it. Handing a candidate to a colleague each month with the brief to make it fail, through other periods, universes, cost assumptions or simpler explanations, finds the weaknesses before capital or reputation does.

                ## Milestones
                1. A red-team brief listing what the reviewer receives: code, ledger extract, pre-registration and sensitivity report.
                2. A named reviewer and a fixed two-week window for each review.
                3. Findings written up with each one marked fatal, fixable or noted.
                4. The candidate's status updated based on the findings.

                ## Notes
                Offer to red-team their work in return. Reciprocal reviews are easier to keep going than favours.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "One candidate a month goes through a red-team review with written findings classed fatal, fixable or noted."
                cadence: rolling
              tasks:
                - "Write the red-team brief and the package a reviewer receives"
                - "Hand one candidate to a reviewer for red-teaming @recurring(monthly:12)"
                - "Write up findings as fatal, fixable or noted"
                - "Update the candidate's status after the review"
            - name: Deflated Sharpe ratio worked by hand
              description: |-
                ## Purpose
                The deflated Sharpe ratio adjusts for the number of trials, their variance, the track length and non-normal returns, and it is easy to misuse as a black box. Computing it step by step on one of your own candidates, then checking against a library, makes clear which inputs move it most and which you are likely to get wrong.

                ## Milestones
                1. The formula written out with each input explained in plain words.
                2. One candidate's deflated Sharpe computed in a notebook from first principles.
                3. The result matched against an independent implementation.
                4. A short note on which input changes the answer most for your data.

                ## Notes
                The trial count and the variance of Sharpe ratios across trials come from your ledger and the effective trial estimate. Skewness and kurtosis come from the candidate's own returns.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A notebook computes one candidate's deflated Sharpe from first principles and matches an independent implementation to two decimal places."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write out the deflated Sharpe formula with each input named"
                - "Pull the trial count and Sharpe variance for one family from the ledger"
                - "Compute the deflated Sharpe in a notebook step by step"
                - "Check the result against an independent implementation"
            - name: Probability of backtest overfitting with CSCV
              description: |-
                ## Purpose
                Combinatorially symmetric cross-validation asks how often the configuration that looked best in sample ranks below median out of sample. Implementing it on a real parameter sweep gives a single, interpretable number for how much your selection process is choosing noise.

                ## Milestones
                1. The method's steps written out: splitting into blocks, forming combinations, ranking in and out of sample.
                2. An implementation run on one of your own parameter sweeps.
                3. The probability of backtest overfitting and the logit distribution saved.
                4. A note on how the result changes with the number of blocks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A working CSCV implementation reports the probability of backtest overfitting for one real sweep, with sensitivity to block count noted."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Summarise the CSCV procedure in your own words"
                - "Build the performance matrix from one parameter sweep in the ledger"
                - "Implement CSCV and compute the overfitting probability"
                - "Rerun with different block counts and note the effect"
            - name: Purged and embargoed k-fold cross-validation
              description: |-
                ## Purpose
                Standard k-fold cross-validation leaks information in financial data because labels overlap in time and returns are serially correlated. Purging training observations whose labels overlap the test fold, and embargoing a gap after it, is the minimum fix, and building it once means every later model evaluation starts honest.

                ## Milestones
                1. A clear written explanation of why plain k-fold leaks with overlapping labels.
                2. A splitter that purges overlapping observations and applies a configurable embargo.
                3. A test showing no training label overlaps any test label in time.
                4. One model's score compared under plain and purged folds.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A purged and embargoed splitter passes an overlap test and has been used to compare one model against plain k-fold."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a paragraph on how label overlap leaks across folds"
                - "Implement a splitter with purging and a configurable embargo"
                - "Write a unit test that fails if any train and test labels overlap"
                - "Compare one model's score under plain and purged folds"
            - name: Combinatorial purged cross-validation paths
              description: |-
                ## Purpose
                Walk-forward testing gives one historical path, so a lucky or unlucky sequence decides the verdict. Combinatorial purged cross-validation builds many backtest paths from the same data, giving a distribution of outcomes rather than a single number, which is far harder to overfit to.

                ## Milestones
                1. The number of groups and test groups chosen and the resulting number of paths computed.
                2. An implementation that produces every path with purging and embargo applied.
                3. The distribution of Sharpe ratios across paths for one candidate saved.
                4. The walk-forward result placed within that distribution.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One candidate has a saved distribution of results across all combinatorial paths, with its walk-forward result located within it."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose group counts and work out how many paths they produce"
                - "Extend the purged splitter to generate all combinatorial paths"
                - "Run one candidate across every path and save the results"
                - "Mark where the walk-forward result falls in the distribution"
            - name: Reality check and SPA tests on a strategy family
              description: |-
                ## Purpose
                White's reality check and Hansen's superior predictive ability test ask whether the best of many strategies beats a benchmark once the search is accounted for. Running them on one family from your ledger, using a stationary bootstrap, shows how a data-snooping-aware test changes the verdict on your favourite variant.

                ## Milestones
                1. The null hypothesis and benchmark for the test written down.
                2. A stationary bootstrap of relative performance implemented with a documented block length choice.
                3. Reality check and SPA p-values computed for one strategy family.
                4. The best variant's naive p-value set beside the adjusted ones.

                ## Notes
                The Romano and Wolf stepwise version goes further and tells you which strategies, not just whether any, beat the benchmark. Add it once the basic test works.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One strategy family has naive, reality check and SPA p-values recorded side by side with the bootstrap settings documented."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Define the benchmark and null hypothesis for one family"
                - "Implement a stationary bootstrap of relative performance"
                - "Compute reality check and SPA p-values for the family"
                - "Write a paragraph comparing naive and adjusted p-values"
            - name: Holm and Benjamini-Hochberg on candidate signals
              description: |-
                ## Purpose
                Simple corrections are often enough, and many researchers skip them because the fancier methods feel more serious. Applying Bonferroni, Holm and Benjamini-Hochberg to the same set of candidate signals shows how many survive each and builds intuition for how strict each approach is.

                ## Milestones
                1. A set of at least twenty candidate signals with their raw p-values or t-statistics.
                2. Survivors listed under Bonferroni, Holm and Benjamini-Hochberg.
                3. A note on how dependence between signals affects each method.
                4. The procedure named in your error rate policy applied as the standard.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table shows which of at least twenty candidate signals survive each of the three corrections, with a note on dependence."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Collect raw test statistics for at least twenty candidate signals"
                - "Apply Bonferroni, Holm and Benjamini-Hochberg to the set"
                - "Tabulate which signals survive each correction"
                - "Note how correlated signals change each method's behaviour"
            - name: Rank stability of variants across sub-periods
              description: |-
                ## Purpose
                If the variant that ranks first in one half of the data ranks fortieth in the other, the search has found luck. Checking how stable the ranking of a parameter sweep is across non-overlapping sub-periods is a quick, intuitive overfitting test that needs no special library and catches problems before the heavier methods are run.

                ## Milestones
                1. One parameter sweep split into at least three non-overlapping sub-periods chosen before looking at results.
                2. Variants ranked by the headline statistic within each sub-period.
                3. Rank correlations between sub-periods computed and saved.
                4. A note recording whether the chosen variant stays in the top group in every sub-period.

                ## Notes
                Low rank correlation does not prove the whole family is noise, but it does mean picking the single best variant is not justified by the data.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One sweep has rank correlations across at least three sub-periods recorded, with the chosen variant's position in each noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Split one parameter sweep into three non-overlapping sub-periods"
                - "Rank every variant by Sharpe within each sub-period"
                - "Compute rank correlations between each pair of sub-periods"
                - "Note where the chosen variant ranks in each sub-period"
            - name: Minimum backtest and track record length
              description: |-
                ## Purpose
                Short histories can produce high Sharpe ratios almost by accident once enough configurations are tried. Learning to compute the minimum backtest length for a given number of trials, and the minimum track record length to trust an observed Sharpe, tells you when a result is simply too short to mean anything.

                ## Milestones
                1. Both quantities defined in plain words with their key inputs.
                2. Minimum backtest length computed for your typical trial counts.
                3. Minimum track record length computed for two current candidates.
                4. Any candidate with too little history flagged in its review notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note gives minimum backtest length for your usual trial counts and minimum track record length for two named candidates."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write plain definitions of both minimum length measures"
                - "Compute minimum backtest length at your typical trial counts"
                - "Compute minimum track record length for two candidates"
                - "Flag any candidate whose history falls short"
            - name: Walk-forward design with nested optimisation
              description: |-
                ## Purpose
                Walk-forward testing is only out of sample if every choice, including which parameters to search and how, is made inside each training window. Designing a nested set-up, where tuning happens inside the window and the outer test never feeds back, removes the most common leak in walk-forward results.

                ## Milestones
                1. A diagram of training, validation and test windows with their lengths.
                2. Tuning moved entirely inside each training window in the code.
                3. A check that no outer test result influences any later choice.
                4. One candidate rerun under the nested design and compared with the old result.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A nested walk-forward set-up is in code with a documented window diagram, and one candidate has been rerun under it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw the window diagram with training, validation and test lengths"
                - "Move parameter tuning inside each training window"
                - "Add a check that outer test results never feed back"
                - "Rerun one candidate and compare with its previous walk-forward result"
            - name: Haircut Sharpe ratios on the candidate list
              description: |-
                ## Purpose
                Once you can deflate a Sharpe ratio, the candidate list should show deflated numbers, not raw ones. Re-scoring every candidate with its trial count and a multiple-testing haircut often reorders the list and makes the shortlist conversation much shorter.

                ## Milestones
                1. Every candidate's raw Sharpe, trial count and effective trial count in one table.
                2. Deflated or haircut Sharpe computed for each.
                3. The list re-ranked by the adjusted figure.
                4. Candidates now below the evidence bar moved back to research.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The candidate list shows raw and adjusted Sharpe for every entry, re-ranked, with sub-bar candidates moved back to research."
                cadence: rolling
              tasks:
                - "Put raw Sharpe and trial counts for all candidates in one table"
                - "Compute the adjusted Sharpe for each candidate"
                - "Refresh the adjusted ranking of all candidates @recurring(quarterly)"
                - "Move candidates below the evidence bar back to research"
            - name: Cutting the parameter count of one strategy
              description: |-
                ## Purpose
                Every free parameter is another chance to fit noise. Taking an existing strategy and replacing tuned parameters with fixed, theory-based or averaged values usually costs a little in-sample performance and buys a lot of credibility out of sample.

                ## Milestones
                1. One strategy chosen and its free parameters listed with current values.
                2. Each parameter either fixed by a stated rationale or replaced by an average over a sensible range.
                3. The simplified strategy's in-sample and cross-validated results compared with the original.
                4. A decision recorded on which version goes forward.

                ## Notes
                A drop in in-sample Sharpe after simplifying is expected. Judge the change on cross-validated and sensitivity results, not the in-sample figure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One strategy has at least half its free parameters fixed or averaged, with a recorded comparison and a decision on which version proceeds."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick one strategy and list its free parameters"
                - "Fix or average each parameter and note the rationale"
                - "Compare cross-validated results of the original and simplified versions"
                - "Record which version goes forward and why"
            - name: Walk-forward or CPCV as the default test
              description: |-
                ## Purpose
                Running both methods on everything doubles the work, and choosing the method after seeing results is itself a form of snooping. Comparing them on a few past candidates, then fixing one as your default confirmatory test, removes a choice you would otherwise make case by case.

                ## Milestones
                1. Three past candidates run under both walk-forward and combinatorial purged cross-validation.
                2. Differences in conclusions and run time recorded.
                3. A default method chosen with the situations where the other is allowed written down.
                4. The choice added to the evidence bar.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the default confirmatory test, based on a comparison across three past candidates."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose three past candidates with known outcomes"
                - "Run each under walk-forward and combinatorial purged cross-validation"
                - "Compare conclusions and run times in a short table"
                - "Write the default method into the evidence bar"
            - name: Reconstructing trial counts for past research
              description: |-
                ## Purpose
                Old results presented without trial counts cannot be deflated, so they either get trusted too much or thrown away. Rebuilding approximate counts from version control, notebook history and old output folders lets you put historic work on the same footing as new work.

                ## Milestones
                1. Sources for past runs identified: commit history, notebook checkpoints, output folders and scheduler logs.
                2. Approximate trial counts reconstructed for each past strategy family.
                3. Each reconstructed count marked with a confidence level.
                4. Historic candidates re-scored with the reconstructed counts.

                ## Notes
                Ask the agent to summarise commit messages and notebook diffs by strategy family; that is often the quickest way to an approximate count.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every past strategy family has a reconstructed trial count with a confidence level, and historic candidates are re-scored."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every place old backtest runs might have left a trace"
                - "Ask the agent to summarise commit history by strategy family"
                - "Estimate a trial count and confidence level for each family"
                - "Re-score historic candidates with the reconstructed counts"
            - name: Parameter averaging instead of a single optimum
              description: |-
                ## Purpose
                Picking the single best parameter set maximises in-sample luck. Averaging signals or positions across a neighbourhood of reasonable parameters spreads that bet, usually narrows the gap between research and live results, and removes the incentive to keep searching for the top cell.

                ## Milestones
                1. A neighbourhood of parameter sets chosen before looking at their individual results.
                2. An averaged version of the strategy built from that neighbourhood.
                3. Cross-validated results of the averaged and single-optimum versions compared.
                4. A rule written on when to average rather than choose.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One strategy has an averaged version built from a pre-chosen parameter neighbourhood, compared with the single optimum under cross-validation."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the parameter neighbourhood before viewing individual results"
                - "Build the averaged signal across the neighbourhood"
                - "Compare averaged and single-optimum versions under cross-validation"
                - "Write the rule for when averaging is the default"
            - name: Selection bias audit of universe and filters
              description: |-
                ## Purpose
                Some of the strongest overfitting happens before any signal is computed: dropping a sector that hurt results, starting the sample after a bad year, or excluding instruments with messy data that happened to lose. Auditing each universe and filter decision for whether it was made before or after seeing performance exposes this quiet selection.

                ## Milestones
                1. Every universe rule, exclusion and sample start date listed for one strategy family.
                2. Each decision dated relative to the first performance result.
                3. Results recomputed with post-result decisions reversed.
                4. Any decision that materially flattered results either justified in writing or undone.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One strategy family has every universe and filter decision dated and tested, with flattering post-result choices justified or reversed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every universe rule, exclusion and start date for one family"
                - "Date each decision against the first performance result"
                - "Rerun results with post-result decisions reversed"
                - "Justify in writing or undo any choice that flattered results"
            - name: Raising the t-statistic hurdle for new factors
              description: |-
                ## Purpose
                Hundreds of published factors were found by thousands of researchers searching the same data, so a t-statistic of two no longer means much. Setting your own higher hurdle for new factor candidates, grounded in the multiple-testing literature and your own trial counts, stops you adding to the factor zoo.

                ## Milestones
                1. The main arguments for a higher hurdle summarised from the factor multiple-testing literature.
                2. Your own effective trial count for factor research estimated.
                3. A hurdle chosen and justified in a paragraph.
                4. Existing factor candidates re-checked against the new hurdle.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written factor hurdle with its justification exists, and every current factor candidate has been checked against it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Summarise the case for higher hurdles in half a page"
                - "Estimate your effective trial count for factor research"
                - "Choose and justify the hurdle in one paragraph"
                - "Re-check every current factor candidate against the hurdle"
            - name: Opening the holdout for a final candidate test
              description: |-
                ## Purpose
                Unsealing the holdout is a one-time event per strategy and should be treated like one. Fixing the exact test, statistic and pass mark in writing beforehand, running it once and accepting the answer is the only way the holdout delivers what it promised.

                ## Milestones
                1. A written final test plan: candidate version, statistic, pass mark and who runs it.
                2. The candidate's code frozen and its hash recorded.
                3. The holdout test run once and the result recorded unchanged.
                4. A pass or fail decision recorded with no retuning afterwards.

                ## Notes
                If the candidate fails, it fails. Retuning and re-testing on the same holdout turns it into in-sample data, and you then need a new holdout for every later test of that idea.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One holdout test was run once on frozen code against a pre-written pass mark, and the decision was recorded without retuning."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the final test plan with statistic and pass mark"
                - "Freeze the candidate code and record its hash"
                - "Run the holdout test once and save the raw output"
                - "Record the pass or fail decision and log the holdout opening"
            - name: Pre-promotion overfitting review meeting
              description: |-
                ## Purpose
                Before a strategy goes to paper trading or capital, one meeting should look only at whether the result could be the product of search. Bringing the trial ledger extract, deflated figures, sensitivity report, red-team findings and holdout result to a fixed agenda makes the decision explicit and recorded.

                ## Milestones
                1. A standard review pack defined and assembled for one candidate.
                2. The meeting held with at least one person who did not do the research.
                3. A go, no-go or more-work decision recorded with reasons.
                4. For a go, the initial size limit, loss limit and written stop rule agreed with whoever owns risk.

                ## Notes
                Start from the **Meeting notes** template. A go here is permission to test further with small, limited risk, never a forecast that the strategy will work.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A review meeting is held with a full pack, and a recorded decision includes a size limit, loss limit and stop rule for any go."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define the review pack contents in a checklist"
                - "Assemble the pack for the next candidate"
                - "Hold the review with someone outside the research"
                - "Record the decision and, for a go, the size limit and stop rule"
            - name: Research seminar with multiple-testing disclosure
              description: |-
                ## Purpose
                Presenting a result to colleagues is when overfitting is most often hidden, because the slide shows the winner and not the search. Giving one talk that discloses trial counts, the selection process and adjusted statistics alongside the headline sets a standard for how your results are presented from then on.

                ## Milestones
                1. A talk drafted with a slide on trials run, how the winner was chosen and adjusted statistics.
                2. The sensitivity report and one failed variant included, not only the winner.
                3. The talk given and questions noted.
                4. A disclosure slide template saved for future presentations.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A seminar is given that shows trial counts and adjusted statistics, and a reusable disclosure slide is saved."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a slot in a team research seminar or reading group"
                - "Draft the disclosure slide with trials, selection and adjusted figures"
                - "Include one failed variant and the sensitivity report"
                - "Save the disclosure slide as a template after the talk"
            - name: Year-end audit of trials and promotions
              description: |-
                ## Purpose
                Twelve months of research is enough data to judge the process itself. Once a year, totalling trials run, ideas pre-registered, holdout tests opened, promotions made and how promoted strategies have since performed shows whether the controls are working or have become rituals.

                ## Milestones
                1. Annual totals of trials, effective trials, pre-registrations and holdout openings.
                2. Every promotion listed with its post-promotion haircut.
                3. Three controls that worked and two that slipped named with evidence.
                4. Changes for next year written into the evidence bar and policy.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A dated annual audit gives the year's totals, every promotion's haircut and specific changes to next year's controls."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Pull the year's totals from the ledger and holdout log"
                - "Run the year-end audit of trials and promotions @recurring(yearly)"
                - "Name the controls that worked and those that slipped"
                - "Write next year's changes into the evidence bar"
            - name: Overfitting section of a model validation pack
              description: |-
                ## Purpose
                Validators and model risk reviewers increasingly ask how a strategy was selected, not just how it performs. Preparing a clear section on trial counts, the selection procedure, cross-validation design and adjusted statistics, in advance of review, turns a hostile question into a quick sign-off.

                ## Milestones
                1. The questions a validator is likely to ask about selection and search listed.
                2. A section drafted covering trials, selection, cross-validation, holdout and adjusted figures.
                3. Supporting evidence linked: ledger extract, sensitivity report, holdout record.
                4. The section reviewed by a colleague before it goes to validation.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written overfitting section with linked evidence is ready for one model's validation and has been reviewed by a colleague."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the selection and search questions a validator will ask"
                - "Draft the section on trials, selection and cross-validation"
                - "Link the ledger extract, sensitivity report and holdout record"
                - "Ask a colleague to review the section before submission"
            - name: Overfitting controls for a solo researcher
              description: |-
                ## Purpose
                Working alone, at home or in a small shop, removes the colleague who would otherwise ask how many things you tried. A solo set of controls replaces that colleague with written rules, a weekly self-review and an outside reader you send a result to before you believe it.

                ## Milestones
                1. A short written rule set covering the ledger, pre-registration, holdout and evidence bar for one person.
                2. A weekly self-review slot held for at least two months.
                3. One outside reader, such as a former colleague or online research group, agreed to review a result each month.
                4. A monthly note of what the outside reader challenged.

                ## Notes
                Personal capital is the strongest pull towards overfitting, because you want the strategy to work. Keep size small, keep a written loss limit, and remember most strategies fail out of sample.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written solo rule set is in use, with weekly self-reviews and a monthly outside review logged for two months running."
                cadence: rolling
              tasks:
                - "Write the solo rule set on one page"
                - "Hold the weekly self-review of trials and holdout contact @recurring(weekly:wed)"
                - "Agree an outside reader for monthly result reviews"
                - "Send one result to the outside reader @recurring(monthly:28)"
            - name: Academic statistics habits translated for quant work
              description: |-
                ## Purpose
                PhDs arrive knowing hypothesis tests, but academic norms (one dataset, a p-value under five percent, a published result) map badly onto a research desk where thousands of variants run on the same history. Translating what you know into the finance setting avoids the classic first-year mistake of presenting a fished result with academic confidence.

                ## Milestones
                1. A list of academic habits that carry over and those that do not, written from your own field.
                2. The key differences noted: serial correlation, overlapping labels, non-stationarity, shared data across researchers.
                3. One past academic analysis reworked with trial counting and a time-series split.
                4. A one-page personal standard for presenting results in your first quant role.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page personal standard exists, based on a written list of habits and one reworked past analysis."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the testing habits from your field that you rely on"
                - "Mark which habits break under serial correlation and shared data"
                - "Rework one past analysis with trial counts and a time-series split"
                - "Write your one-page standard for presenting results"
            - name: Team trial counting policy for a research pod
              description: |-
                ## Purpose
                When several researchers search the same data, each one's trial count understates the real search, and nobody owns the total. A lead who sets a shared ledger, a shared holdout and a common evidence bar gives the pod one honest number and one standard for promotion.

                ## Milestones
                1. A shared ledger and holdout agreed for the whole pod.
                2. A written policy covering logging, pre-registration, holdout access and the evidence bar.
                3. Each researcher walked through the policy and their questions answered.
                4. A monthly pod-level trial and promotion summary circulated.

                ## Notes
                Keep the policy to two pages. Researchers follow short rules that save them arguments in review and ignore long ones.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A two-page pod policy is agreed, every researcher has been walked through it, and a monthly pod summary is circulated."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft the two-page pod policy on trials and holdouts"
                - "Move every researcher onto the shared ledger"
                - "Walk each researcher through the policy one to one"
                - "Circulate the pod trial and promotion summary @recurring(monthly:3)"
            - name: Overfitting controls when history is short
              description: |-
                ## Purpose
                New markets, new instruments and young asset classes offer a few years of data at most, which makes a separate holdout and long cross-validation feel impossible. Adapting the controls, through stricter priors, fewer parameters, cross-market tests and synthetic data, keeps the discipline when the usual tools run out of data.

                ## Milestones
                1. The available history and number of independent observations stated plainly.
                2. Minimum track record length computed to show what the data can and cannot support.
                3. A reduced-parameter version and a cross-market or cross-instrument test planned.
                4. A written note on what evidence would be needed before any real capital.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note states the history available, the minimum track record length and the adapted controls planned for one short-history idea."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Count the independent observations your short history really offers"
                - "Compute the minimum track record length for your target Sharpe"
                - "Plan a reduced-parameter version and a cross-market test"
                - "Write what evidence would justify any real capital"
            - name: Hyperparameter search accounting for ML models
              description: |-
                ## Purpose
                Tuning a machine learning model over hundreds of hyperparameter settings means running hundreds of trials, even if the notebook shows one final score. Logging every search configuration to the trial ledger and reporting the selection-adjusted result keeps ML research under the same discipline as rule-based strategies.

                ## Milestones
                1. The hyperparameter search tool configured to write every configuration to the trial ledger.
                2. Search budgets fixed in advance per model family.
                3. The final model's score reported alongside the number of configurations searched.
                4. A monthly check that no search ran outside the ledger.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every hyperparameter search writes to the ledger with a fixed budget, and each reported model states how many configurations were searched."
                cadence: rolling
              tasks:
                - "Connect the hyperparameter search tool to the trial ledger"
                - "Set a search budget for each model family before running"
                - "Report configurations searched beside every final score"
                - "Check for searches run outside the ledger @recurring(monthly:14)"
            - name: Data snooping across a shared research database
              description: |-
                ## Purpose
                When a whole team, or a whole industry, mines the same dataset, results found independently are not independent. Estimating how much prior search has touched a shared dataset, including published work, adjusts your expectations for any new discovery made in it.

                ## Milestones
                1. The datasets your team shares listed with how long and how widely each has been mined.
                2. Known published or internal findings on each dataset gathered.
                3. A rough prior search count or adjustment chosen per dataset.
                4. The adjustment applied to new candidates from heavily mined datasets.

                ## Notes
                Start from the **Risk register** template to keep each heavily mined dataset as a standing risk, with its adjustment and owner.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each shared dataset has a recorded prior search estimate and adjustment, applied to new candidates drawn from it."
                cadence: rolling
              tasks:
                - "List shared datasets with how long each has been mined"
                - "Gather known findings already published on each dataset"
                - "Choose a prior search adjustment for each dataset"
                - "Review dataset adjustments against new findings @recurring(quarterly)"
            - name: Synthetic market paths to test your selection process
              description: |-
                ## Purpose
                You cannot know how often your process picks a false strategy on real data, because the truth is unknown. On synthetic data with planted signals of known strength and pure noise elsewhere, you can measure exactly how often your full pipeline selects noise, which tests the process rather than any one strategy.

                ## Milestones
                1. A generator of synthetic return paths with realistic volatility clustering and fat tails.
                2. A known number of genuine signals planted among many null signals.
                3. Your full selection pipeline run end to end on the synthetic data.
                4. The rates of true and false selections recorded.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A synthetic test reports how many planted and how many null signals your full pipeline selected."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a synthetic return model with clustering and fat tails"
                - "Plant a known number of genuine signals among null ones"
                - "Run your full selection pipeline on the synthetic data"
                - "Record true and false selection rates in a short report"
            - name: Bayesian shrinkage of backtest Sharpe ratios
              description: |-
                ## Purpose
                Bayesian methods treat each backtest Sharpe as a noisy estimate drawn from a population of mostly weak strategies, and shrinks it towards a sceptical prior. Building a simple hierarchical model over your ledger gives shrunk estimates that rank candidates more sensibly than raw numbers or a single correction.

                ## Milestones
                1. A prior for strategy Sharpe ratios chosen and justified, informed by your decay ledger.
                2. A hierarchical or empirical Bayes model fitted across one strategy family.
                3. Shrunk Sharpe estimates produced for each candidate in the family.
                4. Shrunk and deflated rankings compared.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One strategy family has shrunk Sharpe estimates from a documented prior, compared with its deflated ranking."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose a sceptical prior using your decay ledger"
                - "Fit an empirical Bayes model across one strategy family"
                - "Produce shrunk Sharpe estimates for each candidate"
                - "Revisit the prior against the latest decay figures @recurring(yearly)"
            - name: Expected maximum Sharpe under the null for your pipeline
              description: |-
                ## Purpose
                Even with no skill, the best of many trials has a positive expected Sharpe, and the number grows with the trial count. Simulating the expected maximum Sharpe for your actual trial counts and Sharpe variance gives a living threshold, specific to your research, that any real result must beat.

                ## Milestones
                1. The analytical approximation for the expected maximum Sharpe of independent trials written out.
                2. A simulation using your effective trial counts and observed variance.
                3. The analytical and simulated thresholds compared.
                4. The threshold added to each family's ledger summary.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each strategy family's ledger summary shows a simulated expected maximum Sharpe under the null at its current trial count."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write out the approximation for the expected maximum Sharpe"
                - "Simulate the null maximum with your effective trial counts"
                - "Compare analytical and simulated thresholds"
                - "Add the threshold to each family's ledger summary"
            - name: Estimating the false discovery rate of your pipeline
              description: |-
                ## Purpose
                Perhaps the most honest question a senior researcher can ask is what share of the strategies they promote are false. Combining the synthetic pipeline test, the decay ledger and the trial ledger into a periodic estimate gives a number to manage the research process by, rather than arguing strategy by strategy.

                ## Milestones
                1. A method chosen to combine synthetic selection rates with real post-promotion decay.
                2. A first estimate of the share of promoted strategies that are false, with a range.
                3. The estimate refreshed each quarter as promotions accumulate.
                4. One change to the evidence bar or process made in response.

                ## Notes
                Present this as a range with its assumptions, not a single figure. The value is in the trend and in what changes when you tighten a control.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarterly estimate of the pipeline false discovery rate exists with a range, and at least one process change has been made in response."
                cadence: rolling
              tasks:
                - "Choose how to combine synthetic selection rates with real decay"
                - "Produce the first false discovery estimate with a range"
                - "Refresh the pipeline false discovery estimate @recurring(quarterly)"
                - "Make one process change based on the estimate"
            - name: Written overfitting policy for your research practice
              description: |-
                ## Purpose
                Everything in this area works better written down as one document that a new colleague, a reviewer or a future you can read in ten minutes. An internal policy note covering trial counting, holdouts, cross-validation design, error rate control and the evidence bar becomes the reference that settles disputes and onboards people.

                ## Milestones
                1. A policy note of no more than four pages covering every control used.
                2. Each section linked to the tools and logs that put it into practice.
                3. The note reviewed by a peer or senior researcher.
                4. A version number and annual review date on the front page.

                ## Notes
                Ask the agent to draft a first version from your evidence bar, error rate policy and pod policy, then cut it down hard.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A versioned policy note of four pages or fewer, linked to working tools and reviewed by a peer, is filed with a review date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft the policy from your existing documents"
                - "Cut the draft to four pages and link each control to its tool"
                - "Ask a peer or senior researcher to review the note"
                - "Add a version number and annual review date"
---

# Overfitting and Multiple Testing

This area is for researchers who run many backtests and want an honest answer to one question: how much of this result is the strategy, and how much is the search that found it? It starts with foundations (counting trials, sealing a holdout, writing an evidence bar), moves through the standing machinery and the statistics (deflated Sharpe ratios, probability of backtest overfitting, purged and combinatorial cross-validation, reality check style tests), then the decisions, review events, situations such as solo research or scarce data, and finally the specialist work of measuring the false discovery rate of your whole pipeline.

The rhythms are a weekly pre-registration and review, monthly trial reconciliation and effective-trial estimates, and quarterly holdout seal audits and decay checks against what was promoted. The Metrics log, Reading queue, Meeting notes and Risk register templates pair with the ledger, the study list, promotion reviews and the overfitting risks you carry. Nothing here is trading advice, and most strategies that look good in research fail out of sample, which is the whole reason this area exists. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
