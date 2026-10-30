---
id: quant-finance.portfolio-construction-optimisation
name: Portfolio Construction and Optimisation
description: "Signals turned into portfolios on purpose: a written mandate, a constraint register, baseline portfolios, a reproducible optimiser, turnover budgets, transfer coefficient tracking and checks that the solver does what you meant."
category: business
version: 1.0.0
tags: [quant-finance, portfolio-construction-optimisation, researcher, portfolio-construction, optimisation, risk-budgeting, turnover, constraints]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - operational-checklist
    - reading-queue
    - metrics-log
    - meeting-notes
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Portfolio Construction and Optimisation
          description: "Turning signals into portfolios: constrained optimisation, position limits, turnover penalties, risk budgeting and checking the optimiser does what you expect."
          projects:
            - name: Portfolio construction mandate and objective
              description: |-
                ## Purpose
                Before any optimiser runs, write down what the portfolio is trying to do: the objective (maximise risk-adjusted forecast, track a benchmark, hit a volatility target), the universe, the risk budget, gross and net exposure limits and the rebalance horizon. Without that page, every later argument about constraints becomes an argument about goals nobody agreed.

                ## Milestones
                1. A one-page mandate naming the objective function in words and in a formula.
                2. Universe, benchmark if any, volatility or tracking error budget and exposure limits written down.
                3. The rebalance horizon stated and matched to the horizon of the signals.
                4. The mandate dated and reviewed by the person who owns the capital or the risk.

                ## Notes
                Keep the objective to one sentence a portfolio manager would sign. If it needs three clauses, two of them are probably constraints.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page mandate with objective, universe, risk budget, exposure limits and rebalance horizon has been reviewed by the capital or risk owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the portfolio objective as one sentence and as a formula"
                - "List the universe, benchmark and risk budget the book runs against"
                - "State gross, net and single-name exposure limits in one table"
                - "Send the mandate to the risk or capital owner for written sign-off"
            - name: Inventory of signals, risk model and cost inputs
              description: |-
                ## Purpose
                An optimiser is only as good as the three things fed into it: expected returns, a covariance or factor risk model, and a cost estimate. Listing each input with its source, version, horizon, units and refresh time shows straight away where a stale file or a mismatched horizon could poison every portfolio.

                ## Milestones
                1. A table of every optimiser input with owner, source, version and refresh time.
                2. Each input's units and horizon recorded, such as daily returns or annualised variance.
                3. Any input with no clear owner or refresh schedule flagged.
                4. The inventory stored beside the optimiser code and linked from the mandate.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An input inventory lists every signal, risk model and cost input with owner, version, units, horizon and refresh time, and orphaned inputs are flagged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every file or table the optimiser reads on a normal run"
                - "Record the owner, version and refresh time of each input"
                - "Note the units and horizon of every expected return and risk figure"
                - "Flag inputs that have no owner and agree who will take them"
            - name: Equal-weight and signal-weighted baseline portfolios
              description: |-
                ## Purpose
                Simple portfolios are the yardstick every optimised one has to beat. Building an equal-weight version and a rank or z-score weighted version of the same signal, under the same exposure limits, tells you how much the optimiser adds after costs and gives you a fallback when it misbehaves.

                ## Milestones
                1. An equal-weight long-short or long-only baseline built from the signal.
                2. A rank or z-score weighted baseline with the same gross exposure.
                3. Both baselines run through the same cost model and rebalance schedule as the optimised book.
                4. A short note recording what each baseline returned, risked and traded over the test period.

                ## Notes
                Many teams find the optimiser beats a well-scaled heuristic by less than they assumed. That is useful to know before you spend a year tuning it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two baseline portfolios with matched exposure and costs exist, and their risk, return and turnover are recorded beside the optimised portfolio's figures."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build an equal-weight portfolio from the top and bottom signal buckets"
                - "Build a z-score weighted portfolio scaled to the same gross exposure"
                - "Run both through the shared cost model and rebalance calendar"
                - "Write a half-page note comparing baselines with the optimised book"
            - name: Hard constraint register for the optimiser
              description: |-
                ## Purpose
                Position caps, sector and country limits, gross and net bounds, restricted lists and liquidity caps often live in five places: the mandate, the prime broker agreement, compliance rules, code and someone's memory. One register stating each limit, where it comes from, whether it is hard or soft and how the code enforces it stops the optimiser from producing portfolios nobody is allowed to hold.

                ## Milestones
                1. Every limit listed with its value, source document and owner.
                2. Each limit marked as a hard constraint, a soft penalty or a post-trade check.
                3. The code location that enforces each limit recorded.
                4. Any limit enforced in code but missing from the documents, or the reverse, resolved.

                ## Notes
                Start from the **Compliance control** template. A limit that only exists as a post-trade alert is not a constraint; say so in the register.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A constraint register lists every limit with value, source, owner, enforcement type and code location, with no unresolved mismatches between documents and code."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect limits from the mandate, broker terms and compliance rules"
                - "Mark each limit as hard, soft penalty or post-trade check"
                - "Find where the code enforces each limit and note the file"
                - "Resolve every limit that appears in documents but not in code"
            - name: Choosing an optimiser library and solver
              description: |-
                ## Purpose
                Quadratic programmes with linear constraints are solved well by many tools, but integer constraints, second-order cone terms and large universes separate them quickly. Choosing a modelling layer and solver against your real problem size, constraint types, licence cost and support needs avoids a painful migration a year later.

                ## Milestones
                1. The problem written down: universe size, constraint types and any integer or cone terms.
                2. Two or three candidate libraries and solvers shortlisted with licence terms.
                3. Each candidate timed on the same three real optimisation problems.
                4. A decision recorded with the reasons and the conditions that would reopen it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written solver decision exists, backed by timing and accuracy results from three real problems on at least two candidates."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the problem size and every constraint type the book needs"
                - "Shortlist two or three solvers and note their licence terms"
                - "Time each candidate on three saved real optimisation problems"
                - "Record the chosen solver and what would make you revisit it"
            - name: Mapping signal scores to expected returns
              description: |-
                ## Purpose
                Optimisers read their alpha input as an expected return in the same units as the risk model, yet most signals arrive as ranks or z-scores. Scaling each score by volatility and information coefficient, so a forecast of one means what the optimiser thinks it means, is the step that most often explains wildly concentrated or timid portfolios.

                ## Milestones
                1. The scaling rule written down, for example score times volatility times information coefficient.
                2. Forecast units checked against the risk model's units and horizon.
                3. The cross-sectional spread of scaled forecasts compared with realised return spread.
                4. Portfolios rebuilt with the scaled forecasts and the change in concentration recorded.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A documented forecast scaling rule is in the code, units match the risk model, and the effect on concentration has been measured and recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the current rule that turns scores into expected returns"
                - "Check that forecast units and horizon match the risk model"
                - "Compare the spread of scaled forecasts with realised return spread"
                - "Rebuild one portfolio with the new scaling and note the concentration change"
            - name: Reproducible optimisation run setup
              description: |-
                ## Purpose
                If you cannot rerun last Tuesday's optimisation and get the same weights, you cannot debug it, explain it to a portfolio manager or prove a change helped. Snapshotting inputs, pinning solver versions and storing a run configuration with an ID makes every portfolio traceable back to exactly what produced it.

                ## Milestones
                1. Every run writes a configuration file, an input snapshot and a run ID.
                2. Solver and library versions pinned in the environment file.
                3. A rerun of a stored run reproduces weights within a stated tolerance.
                4. Run IDs recorded next to the trades they produced.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Any stored optimisation run can be reproduced from its run ID to within a written weight tolerance, with solver versions pinned."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Make each run save its configuration, inputs and a unique run ID"
                - "Pin the solver and library versions in the environment file"
                - "Set a weight tolerance for what counts as a matching rerun"
                - "Rerun last month's optimisation from its snapshot and compare weights @recurring(monthly:27)"
            - name: Optimiser output sanity checklist
              description: |-
                ## Purpose
                Solvers return a status of optimal for portfolios that are nonsense: every position at its cap, a sector bet nobody intended, or gross exposure double the plan because an input arrived in the wrong units. A short checklist run on every output catches these before they become trades.

                ## Milestones
                1. A checklist of ten or fewer checks covering exposures, concentration, turnover and solver status.
                2. Thresholds written for each check, such as the share of names at their cap.
                3. The checklist run on the last ten historical outputs to tune thresholds.
                4. A rule that no output reaches trading until the checklist is signed.

                ## Notes
                Start from the **Operational checklist** template. Include one check that the number of names held is within a stated range; it catches more errors than it should.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written checklist with thresholds has been tested on ten past outputs and is required before any optimised portfolio is traded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft ten checks covering exposure, concentration, turnover and status"
                - "Set a pass threshold for each check"
                - "Run the checklist on the last ten optimiser outputs"
                - "Add the sign-off rule to the rebalance run book"
            - name: Horizon and units alignment across inputs
              description: |-
                ## Purpose
                A daily covariance matrix paired with monthly alpha forecasts and a per-trade cost in basis points will produce a confident portfolio built on a unit error. Converting every input to one horizon and one set of units, and testing that conversion in code, removes the most common silent bug in portfolio construction.

                ## Milestones
                1. One reference horizon and unit convention chosen and written down.
                2. Conversion functions for returns, variances and costs written once and reused.
                3. A unit test that fails if an input arrives in the wrong scale.
                4. Risk aversion recalibrated after the conversion so the portfolio's risk is unchanged on purpose.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All optimiser inputs are converted to one documented horizon and unit system by tested shared functions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose and write down the reference horizon and units"
                - "Move all return, risk and cost conversions into one shared module"
                - "Write a test that fails on an input in the wrong scale"
                - "Recalibrate risk aversion after the conversion and record the new value"
            - name: Rebalance cycle run book
              description: |-
                ## Purpose
                Each rebalance follows the same steps: inputs refreshed, optimiser run, checklist signed, trades generated, run archived. Writing those steps down with times, owners and what to do when a step fails turns the rebalance from a ritual one person knows into a process anyone on the team can run.

                ## Milestones
                1. A run book listing each step, its owner and its cut-off time.
                2. A failure path written for missing inputs, solver failure and a checklist breach.
                3. A sign-off note filed for every rebalance.
                4. Eight consecutive rebalances run from the run book without improvisation.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive rebalances have a filed sign-off note and followed the written run book, including any failure path used."
                cadence: rolling
              tasks:
                - "Write the rebalance steps with owners and cut-off times"
                - "Add a failure path for missing inputs and solver errors"
                - "Run the rebalance from the run book and file the sign-off note @recurring(weekly:mon)"
                - "Note any step that needed improvising and update the run book"
            - name: Weekly constraint binding report
              description: |-
                ## Purpose
                Binding constraints tell you where the portfolio would go if it could, and the shadow price on each one tells you what that limit costs in forecast return. A weekly report of which limits bind and how hard shows when a constraint is doing most of the portfolio construction instead of the signal.

                ## Milestones
                1. The optimiser exports which constraints bind and their dual values on every run.
                2. A one-page weekly report ranking constraints by shadow price.
                3. Constraints that bind every week for a month flagged for review.
                4. Two or three report findings taken to the quarterly limit review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly binding report with shadow prices has been produced for eight weeks, and persistently binding constraints are listed for the quarterly review."
                cadence: rolling
              tasks:
                - "Make the optimiser save binding constraints and dual values each run"
                - "Produce the ranked binding report and file it @recurring(weekly:thu)"
                - "Flag any constraint that has bound four weeks in a row"
            - name: Monthly attribution of signal versus construction
              description: |-
                ## Purpose
                When the book underperforms, the question is whether the signal was wrong or the construction threw away a good signal. Splitting monthly results into what the unconstrained signal portfolio earned, what constraints and costs took away, and what risk model choices added gives an answer instead of an argument.

                ## Milestones
                1. An unconstrained, cost-free paper portfolio kept alongside the real one.
                2. A monthly table splitting return into signal, constraint drag, cost drag and residual.
                3. Three consecutive months of attribution with a one-line comment each.
                4. Any construction step that costs more than it saves listed for the methodology review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly attribution tables separate signal, constraint, cost and residual contributions, each with a written comment."
                cadence: rolling
              tasks:
                - "Set up the unconstrained, cost-free paper portfolio for comparison"
                - "Define the attribution buckets and how each is calculated"
                - "Run the monthly signal versus construction attribution and comment on it @recurring(monthly:8)"
                - "List construction steps that cost more than they save"
            - name: Transfer coefficient tracking
              description: |-
                ## Purpose
                The transfer coefficient, the correlation between forecast-implied active weights and the weights you actually hold, measures how much of the signal survives the constraints. Tracking it monthly shows when a new limit, a tighter turnover penalty or a mandate change has quietly diluted the research.

                ## Milestones
                1. The transfer coefficient calculation written down and coded.
                2. A monthly history of the transfer coefficient going back at least a year.
                3. A level agreed below which a construction change must be reviewed.
                4. Every drop below that level explained in a note.

                ## Notes
                Start from the **Metrics log** template. Log the date of every constraint change on the same chart so cause and effect line up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly transfer coefficient log covers at least twelve months, with a review threshold set and every breach explained."
                cadence: rolling
              tasks:
                - "Code the transfer coefficient from ideal and held active weights"
                - "Backfill twelve months of history into the metrics log"
                - "Record this month's transfer coefficient and any constraint changes @recurring(monthly:12)"
                - "Agree the review threshold with the portfolio manager"
            - name: Turnover budget and monitoring
              description: |-
                ## Purpose
                Every rebalance spends part of the edge on trading, and turnover creeps up as signals, penalties and universes change. An agreed annual turnover budget, checked weekly against realised trading, keeps the construction honest about how much of the forecast it can afford to chase.

                ## Milestones
                1. An annual one-way turnover budget agreed and written in the mandate.
                2. Realised turnover calculated the same way as the budget.
                3. A weekly comparison of realised against budgeted turnover.
                4. A rule for what happens when turnover runs above budget for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Realised turnover is compared with a written annual budget every week, and a documented action follows any month above budget."
                cadence: rolling
              tasks:
                - "Agree an annual one-way turnover budget and write it in the mandate"
                - "Calculate realised turnover the same way as the budget"
                - "Compare realised turnover with the budget run rate @recurring(weekly:fri)"
                - "Write the action to take after a month above budget"
            - name: Quarterly constraint and limit review
              description: |-
                ## Purpose
                Limits set at launch drift out of date as capital, liquidity and the universe change, and nobody revisits them until one causes a problem. A quarterly review of the constraint register, the binding report and the attribution results decides which limits stay, which loosen and which tighten, with reasons recorded.

                ## Milestones
                1. The register, binding report and attribution brought to one review each quarter.
                2. Each limit kept, changed or removed with a one-line reason.
                3. Changes approved by the risk or capital owner before going live.
                4. The register updated and dated after each review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four quarterly reviews in a year each record a keep, change or remove decision for every limit, with approvals for changes."
                cadence: cyclic
              tasks:
                - "Book the quarterly limit review with the risk owner @recurring(quarterly)"
                - "Bring the binding report and attribution to the review"
                - "Record a keep, change or remove decision for every limit"
                - "Update and date the constraint register after approval"
            - name: Optimiser change log and versioning
              description: |-
                ## Purpose
                A tweak to a penalty weight or a new constraint can change the portfolio as much as a new signal, yet these changes are rarely logged. A change log with version numbers, the reason, the expected effect and the measured effect lets you explain any shift in the book and roll back a change that did not help.

                ## Milestones
                1. A version number attached to the optimiser configuration.
                2. Every change logged with reason, expected effect and approver.
                3. The measured effect added a month after each change.
                4. A rollback procedure tested once on a past change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every optimiser configuration change in the last six months has a logged version, reason, approver and measured effect, and a rollback has been tested."
                cadence: rolling
              tasks:
                - "Add a version number to the optimiser configuration file"
                - "Log each change with its reason, expected effect and approver"
                - "Add the measured effect to last month's changes in the log @recurring(monthly:20)"
                - "Test a rollback to the previous version on a copy"
            - name: Shadow runs for construction changes
              description: |-
                ## Purpose
                Backtests of construction changes share the in-sample flattery of signal backtests. Running a proposed change in shadow next to the live method for a fixed period, with the decision rule written before it starts, shows its real effect on turnover, risk and attribution before it touches capital.

                ## Milestones
                1. A shadow portfolio running the proposed method on live inputs.
                2. The trial length and go or no-go rule written before the shadow starts.
                3. A monthly comparison of shadow and live on risk, turnover and attribution.
                4. A decision recorded at the end of the trial against the pre-written rule.

                ## Notes
                Write the stop rule too: the result that ends the trial early. Most changes that look good in a backtest show a smaller effect in shadow.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each construction change in the last year ran in shadow for its pre-set period and was accepted or rejected against its written rule."
                cadence: rolling
              tasks:
                - "Write the trial length, go rule and early stop rule for the change"
                - "Set up the shadow portfolio on the same live inputs"
                - "Compare shadow and live on risk, turnover and attribution @recurring(monthly:24)"
                - "Record the decision against the rule when the trial ends"
            - name: Solver failure and infeasibility log
              description: |-
                ## Purpose
                Infeasible problems, time-outs and solutions that only just satisfy the tolerances are early warnings that constraints conflict or inputs are broken. Logging each failure with its cause and fix turns scattered late-night incidents into a pattern you can design out.

                ## Milestones
                1. Every non-optimal solver status written to a log with the run ID.
                2. Each entry given a cause, such as conflicting limits, bad input or numerical issue.
                3. A monthly count of failures by cause.
                4. A permanent fix shipped for the most common cause.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every solver failure for six months is logged with a cause, and the most frequent cause has a shipped fix."
                cadence: rolling
              tasks:
                - "Make the optimiser write every non-optimal status to the log"
                - "Add a cause column with four or five standard categories"
                - "Count the month's solver failures by cause and note the trend @recurring(monthly:3)"
                - "Fix the most common cause and note the change in the log"
            - name: Annual portfolio construction methodology review
              description: |-
                ## Purpose
                Once a year, step back from the weekly runs and ask whether the whole construction approach still fits the signals, the capital and the market. A written review using a year of attribution, transfer coefficient and turnover data decides what to keep, what to research next and what to stop doing.

                ## Milestones
                1. A year of attribution, transfer coefficient, turnover and solver logs gathered.
                2. A written review of what helped, what cost and what was never tested.
                3. Two or three research priorities for the coming year agreed.
                4. The mandate and constraint register updated where the review calls for it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A dated annual methodology review exists with evidence, decisions and next year's research priorities, and the mandate reflects its conclusions."
                cadence: cyclic
              tasks:
                - "Book the annual methodology review and gather the year's logs @recurring(yearly)"
                - "Ask the agent to draft a summary of the year's attribution and change log"
                - "Write what helped, what cost and what was never tested"
                - "Agree next year's construction research priorities"
            - name: Mean-variance optimisation from first principles
              description: |-
                ## Purpose
                Most construction problems are variations on the Markowitz trade-off between expected return and variance, and knowing it by hand makes every library output easier to question. Deriving the unconstrained solution, the role of risk aversion and the efficient frontier, then coding a small example, gives you the intuition to spot a broken result.

                ## Milestones
                1. The unconstrained mean-variance solution derived on paper.
                2. The effect of risk aversion on weights and risk explained in your own words.
                3. A small three to ten asset example coded and checked against a library solver.
                4. One page of notes on what the derivation assumes and where those assumptions fail.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand derivation, a coded example matching a library solver, and a page of assumptions notes are filed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Derive the unconstrained mean-variance weights on paper"
                - "Code a five asset example and compare it with a library solver"
                - "Work one textbook exercise set on portfolio theory @recurring(weekly:wed)"
                - "Write a page on the assumptions behind the derivation"
            - name: Estimation error and error maximisation
              description: |-
                ## Purpose
                Unconstrained optimisers overweight the assets whose expected returns are most overestimated and whose variances are most underestimated, which is why textbook portfolios look so extreme. Working through how small input errors move weights shows why constraints, shrinkage and penalties exist at all.

                ## Milestones
                1. A simulation that perturbs expected returns by realistic error and records the weight changes.
                2. The same exercise repeated for covariance error.
                3. A chart showing weight instability against the size of input error.
                4. A short note on which construction defences address which kind of error.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A simulation of weight sensitivity to return and covariance error is coded, charted and summarised in a written note."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Simulate weights under random errors in expected returns"
                - "Repeat the simulation with errors in the covariance matrix"
                - "Chart weight instability against the size of the input error"
                - "Write which construction defence addresses each kind of error"
            - name: Shrinkage and uncertainty-set optimisation study
              description: |-
                ## Purpose
                Shrinking forecasts towards a prior, and optimising against a set of plausible inputs rather than a single estimate, are the main families of answers to estimation error. Studying both with a reading list and small coded examples lets you judge which one your problem needs and what each costs in expected return.

                ## Milestones
                1. A reading list of four to six papers or chapters on shrinkage and uncertainty sets.
                2. A coded example of forecast shrinkage towards a cross-sectional prior.
                3. A coded worst-case optimisation with an ellipsoidal uncertainty set on returns.
                4. A comparison note on turnover, concentration and out-of-sample risk for each.

                ## Notes
                Start from the **Reading queue** template. Read one survey before the original papers; the notation varies a lot between authors.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two coded examples, shrinkage and an uncertainty-set optimisation, are compared in a written note against a plain mean-variance baseline."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Build a reading queue of four to six sources on shrinkage and uncertainty sets"
                - "Code forecast shrinkage towards a cross-sectional prior"
                - "Code a worst-case optimisation with an ellipsoidal set on returns"
                - "Compare both against plain mean-variance in a one-page note"
            - name: Black-Litterman blending of views
              description: |-
                ## Purpose
                Black-Litterman starts from equilibrium or benchmark-implied returns and tilts them by views with stated confidence, which produces far calmer portfolios than raw forecasts. Implementing it once, including the confidence matrix that most people guess at, shows when it suits a signal-driven book and when it only hides the signal.

                ## Milestones
                1. Implied equilibrium returns reverse-engineered from a benchmark's weights.
                2. Two views expressed as a pick matrix with confidence levels.
                3. Posterior returns and the resulting weights compared with the prior portfolio.
                4. A note on how sensitive the result is to the confidence and tau settings.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A working Black-Litterman example with two views is coded, and its sensitivity to confidence settings is recorded in a note."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Reverse-engineer implied returns from a benchmark's weights"
                - "Write two views as a pick matrix with confidence levels"
                - "Compute posterior returns and the resulting portfolio"
                - "Vary tau and confidence and record how far the weights move"
            - name: Risk parity and risk budgeting by hand
              description: |-
                ## Purpose
                Risk budgeting allocates risk rather than capital, so each asset, factor or strategy contributes a chosen share of total volatility. Computing marginal and total risk contributions by hand, then solving for an equal risk contribution portfolio, makes risk budget reports readable and errors in them obvious.

                ## Milestones
                1. Marginal and total risk contributions computed for a small portfolio and checked to sum to total risk.
                2. An equal risk contribution portfolio solved for four to eight assets.
                3. A custom risk budget, such as 60 and 40 percent across two groups, solved and verified.
                4. A note comparing the risk budget portfolio with minimum variance and equal weight.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Risk contributions that sum to total risk, an equal risk contribution solution and a custom budget solution are coded and compared in a note."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compute marginal and total risk contributions for a small portfolio"
                - "Check the contributions sum exactly to total portfolio risk"
                - "Solve for an equal risk contribution portfolio of six assets"
                - "Solve a custom two-group risk budget and verify each share"
            - name: Convex optimisation and duality for portfolios
              description: |-
                ## Purpose
                Knowing what a quadratic or second-order cone programme is, why convexity guarantees a global answer and what a dual value means turns the solver from a black box into a tool you can reason about. A few weeks with a convex optimisation text, applied to portfolio problems, pays off every time a run is infeasible.

                ## Milestones
                1. Quadratic, linear and second-order cone programmes recognised in your own constraints.
                2. The KKT conditions written out for a long-only mean-variance problem.
                3. Dual values from a solver interpreted for two real constraints.
                4. A note on which of your constraints break convexity and how that is handled.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "KKT conditions for a long-only problem are written out, and dual values for two live constraints are interpreted in a filed note."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Classify each of your constraints as linear, quadratic or cone"
                - "Write the KKT conditions for a long-only mean-variance problem"
                - "Interpret the dual values the solver returns for two real constraints"
                - "List any constraint that breaks convexity and how it is handled"
            - name: Hierarchical and clustering-based allocation
              description: |-
                ## Purpose
                Hierarchical risk parity and related methods allocate down a tree of correlated groups without inverting a noisy covariance matrix, and they are often proposed as a fix for unstable optimisers. Implementing one and testing it fairly against mean-variance and simple baselines tells you whether it helps your universe or just looks different.

                ## Milestones
                1. A hierarchical allocation implemented from a published description.
                2. The clustering choice and linkage method documented.
                3. Out-of-sample risk and turnover compared with mean-variance and equal weight.
                4. A short decision note on whether the method earns a place in your toolkit.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hierarchical allocation is coded and compared out of sample with two baselines on risk and turnover, with a written conclusion."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Implement hierarchical risk parity from the published description"
                - "Document the distance measure and linkage method you chose"
                - "Compare out-of-sample risk and turnover with two baselines"
                - "Write whether the method earns a place in your toolkit"
            - name: Fundamental law of active management in practice
              description: |-
                ## Purpose
                The fundamental law links expected information ratio to skill, breadth and the transfer coefficient, and it is the clearest way to see what construction can and cannot add. Working the numbers for your own book shows whether more breadth, fewer constraints or better signals is the cheaper improvement.

                ## Milestones
                1. The law written out with the transfer coefficient term included.
                2. Your own information coefficient, breadth and transfer coefficient estimated.
                3. The implied information ratio compared with the realised one.
                4. A note on which lever looks cheapest to pull and why the estimate may be wrong.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked estimate of the fundamental law for your own book, compared with realised results, is filed with a written conclusion."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write out the fundamental law including the transfer coefficient"
                - "Estimate information coefficient, breadth and transfer coefficient for your book"
                - "Compare the implied information ratio with the realised figure"
                - "Note which lever looks cheapest and why the estimate might mislead"
            - name: Calibrating the turnover penalty
              description: |-
                ## Purpose
                Set too light, a turnover or cost penalty lets the optimiser trade away the edge; set too heavy, it freezes the book while the signal decays. Sweeping the penalty across a grid, on a fixed test period you do not reuse, finds the range where net results are flat and shows how sensitive the answer is.

                ## Milestones
                1. A grid of penalty values chosen and the test period fixed before running.
                2. Net return, risk and turnover recorded for each penalty value.
                3. The flat region of the net result identified, not just its peak.
                4. A penalty chosen inside the flat region and logged in the change log.

                ## Notes
                Count every grid point you run as a trial. A penalty picked from a sharp peak is usually fitted to noise.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A penalty sweep on a pre-fixed test period is recorded, and the chosen value sits inside a documented flat region of net results."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Fix the test period and penalty grid before running anything"
                - "Run the sweep and record net return, risk and turnover for each value"
                - "Mark the flat region of net results on a chart"
                - "Pick a penalty inside the flat region and log the change"
            - name: Single-period or multi-period rebalancing decision
              description: |-
                ## Purpose
                Single-period optimisers treat each rebalance as if it were the last, which overtrades signals that decay slowly and undertrades those that decay fast. Comparing a single-period method with a simple multi-period approximation, such as trading part of the way towards a target that blends current and future forecasts, decides whether the extra complexity is worth it.

                ## Milestones
                1. Signal decay half-lives estimated for each main signal.
                2. A partial-adjustment or blended-target method implemented beside the single-period one.
                3. Net results and turnover compared on the same fixed test period.
                4. A decision recorded with the conditions that would reopen it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on single-period or multi-period rebalancing is backed by a like-for-like comparison of net results and turnover."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Estimate the decay half-life of each main signal"
                - "Implement a partial-adjustment method beside the current optimiser"
                - "Compare net results and turnover on the same test period"
                - "Record the decision and what would make you revisit it"
            - name: Rebalance frequency and no-trade bands
              description: |-
                ## Purpose
                Rebalancing daily, weekly or monthly, and whether small trades are skipped inside a no-trade band, often matter as much as the optimiser itself. Testing a few frequencies and band widths against signal decay and costs gives a choice you can defend instead of the one inherited from the first prototype.

                ## Milestones
                1. Three rebalance frequencies and three band widths chosen for testing.
                2. Each combination run with the same cost model and test period.
                3. Net results, turnover and tracking against the ideal portfolio tabulated.
                4. A frequency and band chosen and written into the mandate.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table of tested frequencies and bands supports a chosen rebalance frequency and no-trade band, now written in the mandate."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose three frequencies and three band widths to test"
                - "Run each combination with the same costs and test period"
                - "Tabulate net result, turnover and distance from the ideal portfolio"
                - "Write the chosen frequency and band into the mandate"
            - name: Combining signals before or after optimisation
              description: |-
                ## Purpose
                Several signals can be blended into one forecast and optimised once, or each run as its own portfolio and the portfolios combined. Blending first usually nets offsetting trades and uses the risk budget better, while separate sleeves are easier to attribute and switch off; choosing deliberately saves a costly restructure later.

                ## Milestones
                1. Both approaches built on the same signals, risk model and costs.
                2. Turnover, net results and transfer coefficient compared.
                3. The attribution and governance trade-offs written down.
                4. A decision recorded and reflected in the mandate.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between blending signals first and combining portfolios, backed by a like-for-like comparison and a governance note."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build a blended-forecast portfolio from all current signals"
                - "Build one sleeve per signal and combine the sleeves"
                - "Compare turnover, net results and transfer coefficient"
                - "Write the attribution and governance trade-offs and decide"
            - name: Factor and beta neutrality choices
              description: |-
                ## Purpose
                Forcing a book to be beta, sector, country or style neutral removes exposures you did not mean to take, but every neutrality constraint also removes some of the signal. Deciding which exposures to neutralise exactly, which to bound and which to leave free, with the cost of each measured, keeps the portfolio's bets intentional.

                ## Milestones
                1. Current exposures to market, sectors and main style factors measured.
                2. Each exposure classed as neutralised, bounded or free with a reason.
                3. The cost of each neutrality constraint measured through its shadow price or a test.
                4. The choices written into the constraint register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every major factor and beta exposure is classed as neutralised, bounded or free, with its measured cost, in the constraint register."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure the book's exposure to market, sectors and style factors"
                - "Class each exposure as neutralised, bounded or free"
                - "Measure what each neutrality constraint costs in forecast return"
                - "Write the choices and reasons into the constraint register"
            - name: Minimum trade size, round lots and cardinality
              description: |-
                ## Purpose
                Continuous optimisers happily ask for a handful of shares or a position of a few basis points, which costs more to trade and monitor than it adds. Adding minimum trade and holding sizes, lot rounding or a cap on the number of names turns the problem into a mixed-integer one, so test the speed and quality hit before relying on it.

                ## Milestones
                1. Current tiny trades and positions counted over the last quarter.
                2. Minimum trade, minimum holding and round-lot rules written.
                3. A simple post-optimisation rounding compared with a mixed-integer formulation.
                4. Solve time and tracking error to the continuous solution recorded for both.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen approach to minimum sizes and lot rounding is backed by measured solve times and tracking against the continuous solution."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count trades and positions below a sensible minimum last quarter"
                - "Write minimum trade, minimum holding and round-lot rules"
                - "Compare post-optimisation rounding with a mixed-integer version"
                - "Record solve time and distance from the continuous solution"
            - name: Horse race of optimiser against simple heuristics
              description: |-
                ## Purpose
                Sophisticated optimisers should beat simple rules after costs by enough to justify their complexity and their failure modes. Running the live method against two or three well-scaled heuristics on the same inputs, over a period you fix in advance, gives an honest measure of what the optimiser adds.

                ## Milestones
                1. Two or three heuristics chosen, such as scaled z-scores with caps and inverse volatility weighting.
                2. A test period fixed and recorded before any run.
                3. Net results, risk, turnover and drawdown compared in one table.
                4. A written conclusion, including the option of simplifying the method.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pre-registered comparison of the optimiser against at least two heuristics, on net results, risk and turnover, ends in a written conclusion."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick two or three heuristics that use the same signals"
                - "Fix and record the test period before running anything"
                - "Tabulate net results, risk, turnover and drawdown for each method"
                - "Write the conclusion, including whether to simplify the method"
            - name: Liquidity-based position and trade caps
              description: |-
                ## Purpose
                Position caps set as a flat percentage of capital ignore that a small cap stock and a large cap stock carry very different exit risk. Tying each name's maximum position and trade size to its average daily volume, with a stated number of days to exit, keeps the book holdable when markets thin out.

                ## Milestones
                1. A rule linking maximum position and trade to average daily volume.
                2. Days to exit the full book estimated under that rule.
                3. Names where the liquidity cap binds listed and checked against the signal.
                4. The rule added to the constraint register with its data source.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Position and trade caps are set as a share of average daily volume in the constraint register, with days to exit the book estimated."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the rule tying position and trade size to daily volume"
                - "Estimate how many days it would take to exit the full book"
                - "List names where the liquidity cap binds"
                - "Refresh the volume figures used for liquidity caps @recurring(monthly:1)"
            - name: First optimised portfolio signed off for paper trading
              description: |-
                ## Purpose
                The first time a full optimised portfolio is produced from live inputs, checked, explained and approved is a milestone worth treating as an event with a date. Preparing the pack in advance, and agreeing who signs, turns it from an anxious handover into a review with a clear yes or no.

                ## Milestones
                1. A sign-off date agreed with the portfolio manager or risk owner.
                2. A pack with the portfolio, exposures, checklist results and baseline comparison.
                3. Questions from the review answered in writing.
                4. A signed decision to start paper trading, or a dated list of fixes.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first optimised portfolio from live inputs has a signed paper trading decision or a dated list of required fixes."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree a sign-off date and the people who will sign"
                - "Assemble the portfolio, exposures, checklist and baseline comparison"
                - "Answer every review question in writing"
                - "Record the signed decision or the dated list of fixes"
            - name: Optimiser migration to a new solver or library
              description: |-
                ## Purpose
                Changing solver, library or problem formulation can move weights in ways no one notices until performance differs. A planned migration with parallel runs, a tolerance for acceptable weight differences and a dated cutover keeps the change controlled and reversible.

                ## Milestones
                1. A migration plan with a parallel run period and a cutover date.
                2. A weight and exposure tolerance agreed for the parallel runs.
                3. Every parallel run within tolerance, or each difference explained.
                4. Cutover completed with the old setup kept runnable for one month.

                ## Notes
                Expect small weight differences from solver tolerances. Large ones usually mean a constraint was translated differently.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A solver or library migration completed on its planned date after parallel runs within the agreed tolerance, with the old setup still runnable."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the migration plan with a parallel period and cutover date"
                - "Agree the weight and exposure tolerance for parallel runs"
                - "Run old and new side by side and explain every difference"
                - "Cut over and keep the old setup runnable for a month"
            - name: Construction review with the portfolio manager
              description: |-
                ## Purpose
                Portfolio managers judge the construction by what they see in the book, and researchers by what they see in the code; a regular review closes that gap. Presenting attribution, binding constraints and proposed changes each quarter, and recording what was agreed, keeps construction decisions shared rather than imposed.

                ## Milestones
                1. A standing quarterly review with an agreed agenda.
                2. Attribution, binding report and proposed changes sent two days before.
                3. Decisions and owners recorded during the meeting.
                4. Agreed changes entered in the change log within a week.

                ## Notes
                Start from the **Meeting notes** template. Lead with one chart the manager already watches, then the change you are asking for.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A quarterly construction review is held with circulated papers, recorded decisions and changes logged within a week."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree the review agenda with the portfolio manager"
                - "Hold the quarterly construction review and record decisions @recurring(quarterly)"
                - "Send attribution and proposals two days before each review"
                - "Enter agreed changes in the change log within a week"
            - name: Constraint changes after a mandate amendment
              description: |-
                ## Purpose
                New investor side letters, changed prime broker terms or a revised risk budget can change several limits at once. Treating the amendment as a project, translating each clause into constraints, testing the new portfolio and dating the switch, avoids a breach on the first day the new terms apply.

                ## Milestones
                1. Each clause of the amendment translated into a named constraint change.
                2. The new constraints tested on the last ten rebalances.
                3. The effect on exposures, turnover and transfer coefficient written up.
                4. The switch date agreed and the register updated.

                ## Notes
                Ask compliance or counsel to confirm your reading of any clause that is ambiguous. Interpreting the contract is their call, not the researcher's.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every clause of a mandate amendment maps to a tested constraint change, with the switch date and updated register recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List each amended clause and the constraint it changes"
                - "Ask compliance to confirm any clause you find ambiguous"
                - "Test the new constraints on the last ten rebalances"
                - "Agree the switch date and update the constraint register"
            - name: Rebalancing through an index reconstitution
              description: |-
                ## Purpose
                Index reconstitutions and large corporate actions shift benchmark weights, liquidity and the universe in a single day, and a benchmark-aware optimiser can trade heavily into them. Preparing the universe update, testing the portfolio on the pro forma benchmark and deciding how much to trade before and after the event keeps it from becoming an unplanned turnover spike.

                ## Milestones
                1. The reconstitution date and the pro forma changes noted.
                2. The optimiser run on the pro forma benchmark and universe in advance.
                3. A plan for how trades are spread around the event, approved by the portfolio manager.
                4. Turnover and tracking error through the event recorded afterwards.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A reconstitution passed with a pre-run pro forma portfolio, an approved trading plan and recorded turnover and tracking error."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check the index provider's reconstitution calendar @recurring(quarterly)"
                - "Run the optimiser on the pro forma benchmark and universe"
                - "Agree how trades are spread around the event"
                - "Record turnover and tracking error through the event"
            - name: Inheriting an existing optimiser as a new researcher
              description: |-
                ## Purpose
                Joining a team usually means inheriting an optimiser full of penalties and constraints whose reasons have been forgotten. Spending the first weeks mapping what each term does, rerunning recent portfolios and listing open questions, before changing anything, earns trust and avoids breaking something a portfolio manager depends on.

                ## Milestones
                1. Every objective term and constraint listed with its current value.
                2. Three recent portfolios rerun and matched.
                3. The reason for each term found, or marked as unknown.
                4. A list of open questions and proposed experiments agreed with your lead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A map of every term in the inherited optimiser with reasons or unknowns, three matched reruns and an agreed question list."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List every objective term and constraint with its current value"
                - "Rerun three recent portfolios and check they match"
                - "Ask the previous owner or lead why each unexplained term exists"
                - "Agree a list of open questions and first experiments with your lead"
            - name: Long-only portfolio against a tracking error budget
              description: |-
                ## Purpose
                Long-only books against a benchmark face a different problem from hedge funds: the no-short constraint caps underweights at the benchmark weight, so most of the signal on small names cannot be expressed. Setting up the active-weight formulation, the tracking error budget and active share reporting makes these limits visible and measurable.

                ## Milestones
                1. The optimiser set up on active weights against the benchmark.
                2. A tracking error budget and active share range written into the mandate.
                3. The share of negative signal that cannot be expressed because of the no-short limit measured.
                4. Monthly ex-ante tracking error reported against budget.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A long-only book is optimised on active weights with a written tracking error budget, reported monthly with active share."
                cadence: rolling
              tasks:
                - "Recast the optimiser on active weights against the benchmark"
                - "Write the tracking error budget and active share range into the mandate"
                - "Measure how much negative signal the no-short limit blocks"
                - "Report ex-ante tracking error and active share against budget @recurring(monthly:10)"
            - name: Market-neutral long-short book construction
              description: |-
                ## Purpose
                Market-neutral books promise returns that do not depend on the market, but dollar neutral is not beta neutral, and short availability and borrow costs shape the book as much as the signal. Building in beta and dollar targets, borrow cost and locate constraints, and gross exposure limits from the start keeps the neutrality real.

                ## Milestones
                1. Dollar and beta neutrality targets with tolerances written down.
                2. Borrow cost and locate availability fed into the optimiser as inputs.
                3. Gross exposure and short concentration limits added to the register.
                4. Realised beta to the market checked against the target over a quarter.

                ## Notes
                Hard-to-borrow names can look like the best shorts in a backtest that ignores borrow costs. Include them in the cost input, not as an afterthought.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A long-short optimiser with beta and dollar targets, borrow inputs and gross limits runs, and realised beta stayed within tolerance for a quarter."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write dollar and beta neutrality targets with tolerances"
                - "Feed borrow cost and locate availability into the optimiser"
                - "Add gross exposure and short concentration limits to the register"
                - "Check realised market beta against the target after a quarter"
            - name: Futures and multi-asset allocation with contract rounding
              description: |-
                ## Purpose
                Futures books size positions in whole contracts with very different notional values, margins and roll dates, so the continuous optimiser answer has to be rounded with care. Setting volatility-scaled targets, handling rounding for small accounts and tracking margin use keeps a multi-asset allocation close to its design.

                ## Milestones
                1. Contract specifications, multipliers and margins collected for each market.
                2. Volatility-scaled target positions computed in contracts.
                3. A rounding method chosen and its tracking error to the unrounded target measured.
                4. Margin use reported as a share of capital at each rebalance.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A futures allocation produces whole-contract positions with measured rounding error and reported margin use at every rebalance."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Collect multipliers and margins for every market traded"
                - "Compute volatility-scaled target positions in contracts"
                - "Choose a rounding method and measure its tracking error"
                - "Report margin use as a share of capital at each rebalance"
            - name: From academic portfolio papers to production constraints
              description: |-
                ## Purpose
                Researchers arriving from academia know the elegant results, but published portfolios rarely carry costs, position caps, borrow limits or a rebalance calendar. Rebuilding one well-known academic method under real constraints shows how much of its reported benefit survives and teaches the habits a desk expects.

                ## Milestones
                1. One academic allocation method chosen and its paper's setup documented.
                2. The method rebuilt under your costs, caps and rebalance calendar.
                3. Results compared with the paper's and with a simple baseline.
                4. A one-page note on which assumptions mattered most.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One academic allocation method has been rebuilt under production constraints and compared with the paper and a baseline in a filed note."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Pick one academic allocation method and note its original setup"
                - "Rebuild it with your costs, caps and rebalance calendar"
                - "Compare results with the paper and with a simple baseline"
                - "Write which assumptions mattered most to the result"
            - name: Capital allocation across several strategies
              description: |-
                ## Purpose
                Once more than one strategy runs, someone has to decide how much risk each gets, and doing it by gut feel favours whichever had the best recent quarter. A strategy-level risk budget, using estimated correlations, capacity and agreed caps, set on a fixed schedule, keeps the allocation deliberate and explainable.

                ## Milestones
                1. Each strategy's volatility, capacity and correlation with the others estimated.
                2. A risk budget method agreed, with minimum and maximum shares per strategy.
                3. The first allocation set and reviewed by the capital owner.
                4. A written stop rule for cutting a strategy's allocation after a defined drawdown.

                ## Notes
                Shrink correlation estimates between strategies towards a sensible prior. Short live histories make them very noisy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Strategy allocations are set by a documented risk budget with caps and a written drawdown stop rule, and refreshed on a fixed schedule."
                cadence: cyclic
              tasks:
                - "Estimate volatility, capacity and correlation for each strategy"
                - "Agree the risk budget method and per-strategy caps"
                - "Write the drawdown stop rule for cutting a strategy's allocation"
                - "Rerun the strategy-level allocation and record changes @recurring(quarterly)"
            - name: Multi-period optimisation with cost dynamics
              description: |-
                ## Purpose
                Market impact decays over days and signals decay over weeks, so the best trade today depends on the trades planned for tomorrow. Formulating a short multi-period problem that plans a trade path over several rebalances, and testing it against single-period plus partial adjustment, is specialist work worth doing only when costs dominate the edge.

                ## Milestones
                1. A multi-period formulation written with signal decay and impact decay terms.
                2. The problem solved over a three to ten period horizon within your time budget.
                3. Net results compared with the current method on a fixed test period.
                4. A decision note covering the gain, the complexity and the failure modes.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A multi-period optimisation is formulated, solved within the time budget and compared with the current method in a written decision note."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the multi-period problem with signal and impact decay terms"
                - "Solve it over a five period horizon and record solve times"
                - "Compare net results with the current method on a fixed period"
                - "Write the decision note on gain, complexity and failure modes"
            - name: Stability testing of optimiser output
              description: |-
                ## Purpose
                If a small, plausible change in inputs flips the portfolio, its weights are telling you about noise rather than about the signal. Resampling inputs, perturbing forecasts and covariance, and measuring how much the weights and exposures move gives a stability score you can track and improve.

                ## Milestones
                1. A resampling routine that perturbs forecasts and risk inputs by realistic amounts.
                2. Weight and exposure dispersion measured across a few hundred resamples.
                3. A stability score defined and recorded for the live method.
                4. The score rerun each quarter and after any construction change.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A stability score from resampled inputs is defined, recorded for the live method and refreshed quarterly and after each construction change."
                cadence: rolling
              tasks:
                - "Write a routine that perturbs forecasts and risk inputs"
                - "Measure weight and exposure dispersion over a few hundred resamples"
                - "Define a single stability score and record today's value"
                - "Rerun the stability score on the live method @recurring(quarterly)"
            - name: Alpha and risk model alignment
              description: |-
                ## Purpose
                When a signal contains a component the risk model cannot see, the optimiser treats it as risk-free and loads up on it, producing realised risk well above forecast. Measuring the part of the alpha that lies outside the risk model's factors, and adjusting with an extra factor or a penalty, closes one of the most persistent gaps in quant books.

                ## Milestones
                1. The alpha decomposed into the part spanned by risk factors and the part outside them.
                2. Exposure to the unseen component measured in recent portfolios.
                3. An adjustment tested, such as an extra alpha factor in the risk model or a penalty.
                4. Realised against predicted risk compared before and after the adjustment.

                ## Notes
                Ask the agent to summarise the published literature on alpha alignment before you choose a fix. Several adjustments exist and they behave differently.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The share of alpha outside the risk model is measured, an adjustment is tested and its effect on realised against predicted risk is recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Regress the alpha on the risk model factors and keep the residual"
                - "Measure recent portfolios' exposure to that residual"
                - "Ask the agent to summarise published approaches to alpha alignment"
                - "Test one adjustment and compare realised with predicted risk"
            - name: Drawdown and tail-risk constrained construction
              description: |-
                ## Purpose
                Variance treats gains and losses alike and understates the damage from crashes, so some mandates also cap expected shortfall or drawdown. Formulating a conditional value at risk constraint from scenarios, and comparing the resulting book with the variance-only version, shows what tail control costs and whether it holds up out of sample.

                ## Milestones
                1. A scenario set chosen for the shortfall calculation and its source documented.
                2. A conditional value at risk constraint or objective added to a test optimiser.
                3. Tail losses, turnover and expected return compared with the variance-only book.
                4. A recommendation to the risk owner, including a written stop rule for the method.

                ## Notes
                Tail estimates rest on few observations. Treat any improvement as provisional until it holds on data the method has never seen.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scenario-based shortfall constraint is tested against the variance-only book, and a recommendation with a stop rule goes to the risk owner."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose and document the scenario set for shortfall estimates"
                - "Add a conditional value at risk constraint to a test optimiser"
                - "Compare tail losses, turnover and return with the variance-only book"
                - "Send a recommendation and stop rule to the risk owner"
---

# Portfolio Construction and Optimisation

This area is for researchers who already have signals and a risk model and now have to decide what the book actually holds: how forecasts become weights, which limits bind, how much trading each rebalance is allowed, and whether the optimiser is quietly undoing the research. It starts with foundations (a mandate, an input inventory, baseline portfolios, a constraint register and a reproducible run), moves through the rebalance and reporting machinery, the methods worth learning properly, the design decisions that change results most, dated events such as a first signed-off portfolio or a solver migration, variants for long-only, market-neutral, futures and multi-strategy books, and ends with specialist work on multi-period, tail-risk and alignment problems.

What repeats is a weekly rebalance run with a sign-off note and a constraint binding report, monthly attribution, transfer coefficient, turnover, change log, shadow run and solver failure checks, quarterly limit and robustness reviews, and a yearly methodology review. The Compliance control, Operational checklist, Reading queue, Metrics log and Meeting notes templates pair with the projects that name them. Nothing here is investment advice, and a portfolio that looks efficient in sample is still built on estimates that will be wrong out of sample, so the plan keeps limits, a turnover budget and a written stop rule for every construction change. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
