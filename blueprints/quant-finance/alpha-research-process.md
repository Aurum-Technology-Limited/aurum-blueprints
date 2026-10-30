---
id: quant-finance.alpha-research-process
name: Alpha Research Process
description: "Alpha research run as a process: a research charter, hypothesis memos, data gates, out-of-sample rules written in advance, peer review and a promotion bar every signal must clear before production."
category: business
version: 1.0.0
tags: [quant-finance, alpha-research-process, researcher, knowledge-worker, alpha-research, signal-research, stage-gates, research-process]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - meeting-notes
    - onboarding-30-60-90
    - metrics-log
    - compliance-control
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Alpha Research Process
          description: "Running alpha research as a disciplined process: hypothesis first, data checks, out-of-sample rules, a research log and a clear bar before anything reaches production."
          projects:
            - name: Research charter for your alpha programme
              description: |-
                ## Purpose
                Before any idea is tested, write down what you are looking for: asset classes, universe, holding horizon, the capacity you need and the kinds of edge you consider plausible. A one-page charter stops the research from drifting into whatever the last dataset made easy, and gives every later gate something to judge ideas against.

                ## Milestones
                1. A one-page charter naming the universe, horizon range and target capacity.
                2. Three to five admissible sources of edge listed, such as risk premia, behavioural effects or structural flows.
                3. Explicit exclusions written down, including ideas that rely on information you may not lawfully use.
                4. The charter reviewed by one person who will consume the research.

                ## Notes
                Keep it short enough to reread before every triage session. A charter that runs to ten pages will not be consulted.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page research charter with universe, horizon, capacity target and exclusions has been reviewed by a research consumer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the universe, holding horizon and target capacity in three lines"
                - "List the sources of edge you consider plausible and why"
                - "Add an exclusions section covering data and ideas you will not pursue"
                - "Ask a portfolio manager or peer to review the charter and note their comments"
            - name: Hypothesis memo template with economic rationale
              description: |-
                ## Purpose
                Ideas that start as a correlation found in the data rarely survive, while ideas that start with a reason someone else is paying you tend to last longer. A standard one-page hypothesis memo forces each idea to state the mechanism, who is on the other side, the expected sign and horizon, and what result would prove it wrong, before any data is touched.

                ## Milestones
                1. A memo template with sections for mechanism, counterparty, expected sign, horizon and falsification test.
                2. Two past ideas rewritten into the template to check it works.
                3. A rule that no backtest starts until the memo is filed and dated.
                4. The template stored where every researcher on the programme can reach it.

                ## Notes
                The falsification line matters most. If you cannot say what result would kill the idea, the idea is not ready.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A hypothesis memo template exists and at least two ideas have been written into it with a dated falsification test."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the memo headings: mechanism, counterparty, sign, horizon, falsification"
                - "Rewrite one old idea into the template and note what was missing"
                - "Rewrite a second idea and tighten any heading that stayed vague"
                - "Write the no-memo, no-backtest rule into the research charter"
            - name: Stage gates from idea to production
              description: |-
                ## Purpose
                Without named stages, research slides from an exploratory chart to a live allocation without anyone deciding it should. Defining five or six gates, each with an entry condition, an owner and an exit decision, means every idea has a known status and nobody spends a month on something that should have been stopped in week one.

                ## Milestones
                1. Five or six stages named, for example idea, memo, data check, in-sample test, out-of-sample test, incubation.
                2. An entry condition, an owner and an allowed time box written for each stage.
                3. The possible exit decisions defined for every gate: advance, revise or kill.
                4. Every current idea placed at a stage on a single board or list.

                ## Notes
                Time boxes are the part most teams skip. A stage with no time limit becomes a parking lot.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written stage-gate document defines each stage's entry condition, owner, time box and exit decisions, and every live idea sits at one stage."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the stages your last three ideas actually passed through"
                - "Write an entry condition and time box for each stage"
                - "Define advance, revise and kill outcomes for every gate"
                - "Place every open idea at its current stage on one board"
            - name: Out-of-sample rules written before testing
              description: |-
                ## Purpose
                The most expensive mistake in alpha research is looking at the test period, adjusting, and looking again until it passes. Fixing the in-sample window, the out-of-sample window and the rule for when out-of-sample data may be opened, in writing and before the first run, turns that temptation into a visible breach rather than a quiet habit.

                ## Milestones
                1. Default in-sample and out-of-sample date ranges written for each asset class you research.
                2. A rule that the out-of-sample period is opened once per idea, after the memo and in-sample result are filed.
                3. A defined response when an idea fails out of sample: kill or a new memo, never a quiet tweak.
                4. The rules added to the stage-gate document and dated.

                ## Notes
                Expect most ideas to fail here. A pass rate that looks high usually means the out-of-sample data has been seen too often.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written out-of-sample rules with fixed date ranges and a single-opening policy are dated and attached to the stage-gate document."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose default in-sample and out-of-sample ranges for each asset class"
                - "Write the single-opening rule for out-of-sample data in one paragraph"
                - "Describe what happens to an idea that fails out of sample"
                - "Attach the dated rules to the stage-gate document"
            - name: Data readiness gate for a new signal
              description: |-
                ## Purpose
                Half of the impressive early results in alpha research come from the data rather than the idea: timestamps that leak the future, coverage that changes over time or a universe that quietly excludes the losers. A short gate that every dataset must pass before the in-sample test catches these issues while they are cheap to fix.

                ## Milestones
                1. A checklist covering as-of timestamps, publication lags, coverage over time and universe membership.
                2. A required coverage chart showing how many names have data in each month of the history.
                3. A named owner who signs off each dataset before the in-sample stage starts.
                4. The gate run on the dataset behind your current lead idea.

                ## Notes
                This is the entry check for research, not a full backtest audit. Keep it to one page so it is actually run every time.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page data readiness checklist exists and has been completed and signed off for at least one live research dataset."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the data failures that have fooled you or colleagues before"
                - "Turn the list into a one-page readiness checklist"
                - "Plot coverage by month for the dataset behind your lead idea"
                - "Record who signed off the dataset and on what date"
            - name: Pre-registered test plan for each idea
              description: |-
                ## Purpose
                Choosing the metric, horizon and universe after seeing results is how a weak idea is made to look strong. A pre-registered test plan, filed with the memo, fixes which statistics count, which variants will be tried and how many, so the final result can be read against what was promised.

                ## Milestones
                1. A test plan section added to the memo: universe, horizon, primary metric and secondary metrics.
                2. A maximum number of variants stated in advance for each idea.
                3. The plan timestamped and stored where it cannot be silently edited.
                4. One completed idea compared against its plan, with any deviations listed.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every idea entering the in-sample stage has a timestamped test plan naming its primary metric and maximum variant count."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a test plan section to the hypothesis memo template"
                - "Decide the primary metric your programme will judge ideas by"
                - "Set a default maximum number of variants per idea"
                - "Compare one finished idea against its plan and list the deviations"
            - name: Promotion bar for production signals
              description: |-
                ## Purpose
                If the bar a signal must clear is decided when a promising signal is on the table, it will be set just below that signal. Agreeing the numbers in advance, covering out-of-sample strength, stability across subperiods, turnover, capacity, correlation with existing signals and a written stop rule, keeps the decision honest and fast.

                ## Milestones
                1. Minimum out-of-sample statistics agreed for promotion, with the reasoning written beside them.
                2. Limits on turnover, cost-adjusted returns and correlation to existing signals defined.
                3. A requirement that every promoted signal carries position limits, a loss limit and a written stop rule.
                4. The bar signed by the researcher and the person who will allocate to it.

                ## Notes
                Write the stop rule before promotion, never after the first drawdown. The bar is organisational, not a forecast that any signal will make money.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed promotion bar with numeric thresholds, risk limits and a mandatory stop rule exists before the next signal is proposed for production."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the statistics your last promoted signal was judged on"
                - "Propose a threshold for each and write one line of reasoning"
                - "Add position limits, a loss limit and a stop rule as required items"
                - "Get the bar signed by the researcher and the allocator"
            - name: Data snapshot and run ID convention
              description: |-
                ## Purpose
                Six months later someone will ask which data and which code produced the chart in the promotion pack, and the honest answer is often unknown. A simple convention that tags every research run with a data snapshot ID, a code version and a date makes any result traceable without building a new platform.

                ## Milestones
                1. A naming convention for data snapshots, code versions and run IDs written down.
                2. Every result chart and table labelled with its run ID.
                3. A lookup file mapping run IDs to snapshot, code version and parameters.
                4. One old result successfully reproduced from its run ID.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Research outputs carry run IDs that map to a data snapshot and code version, and one result has been reproduced from its ID alone."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-line format for run IDs including date and data snapshot"
                - "Add the run ID to the footer of your standard result charts"
                - "Start a lookup file mapping run IDs to code version and parameters"
                - "Pick one result from last month and reproduce it from its run ID"
            - name: First backlog of thirty candidate hypotheses
              description: |-
                ## Purpose
                With only three ideas in the pipeline, those three get tortured until one passes. Building an initial backlog of around thirty hypotheses, each in a single line with its mechanism, gives triage real choices and makes killing a weak idea painless.

                ## Milestones
                1. Thirty one-line hypotheses collected, each naming a mechanism.
                2. Each tagged by idea family, data needed and rough effort.
                3. Duplicates and ideas outside the charter removed.
                4. The top five marked for memo writing.

                ## Notes
                Sources worth mining include old memos, working papers, conversations with traders and the questions portfolio managers keep asking.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A backlog of at least thirty tagged one-line hypotheses exists, with five selected for memos."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down ten hypotheses from memory in one sitting"
                - "Mine old notes and working papers for ten more"
                - "Ask two traders or portfolio managers what anomalies puzzle them"
                - "Tag each idea by family, data and effort, then pick the top five"
            - name: Weekly idea triage session
              description: |-
                ## Purpose
                Ideas pile up faster than they can be tested, and without a regular decision point the loudest or newest one wins. A short weekly triage, run against the charter, decides which ideas get a memo, which wait and which are dropped, so research time follows priorities rather than mood.

                ## Milestones
                1. A fixed thirty-minute weekly slot for triage.
                2. New ideas scored on plausibility, data availability, effort and fit with the charter.
                3. A decision recorded for every idea discussed: memo, wait or drop.
                4. The backlog never holding an idea with no decision older than four weeks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Triage runs weekly and every idea in the backlog has a recorded decision no older than four weeks."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute triage slot"
                - "Agree a four-question scoring line for new ideas"
                - "Score new ideas and record memo, wait or drop for each @recurring(weekly:mon)"
                - "Clear any backlog item older than four weeks without a decision"
            - name: Monthly research pipeline review
              description: |-
                ## Purpose
                Ideas stall between stages far more often than they fail. A monthly review of the whole pipeline shows which ideas have overrun their time box, where work is waiting on data or review, and whether the mix still matches the charter, so stalled work is either unblocked or stopped.

                ## Milestones
                1. A one-page pipeline view showing every idea, its stage and days in stage.
                2. Ideas over their time box flagged with a named next action or a kill decision.
                3. Blockers listed with an owner and date.
                4. A short note filed after each review with decisions taken.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pipeline review is held monthly and no idea sits past its stage time box without a recorded decision."
                cadence: rolling
              tasks:
                - "Build a one-page pipeline view with days in stage for each idea"
                - "Review the pipeline and decide on every overrun idea @recurring(monthly:7)"
                - "Assign an owner and date to each blocker"
                - "File a three-line note of decisions after each review"
            - name: Quarterly allocation of research time
              description: |-
                ## Purpose
                Research hours are the scarcest input in the programme, and they drift towards whatever is most interesting rather than most valuable. Setting a quarterly allocation across idea families, maintenance of existing signals and exploratory work makes the trade-off explicit and lets you check at quarter end where the hours actually went.

                ## Milestones
                1. A percentage split of research time across idea families, maintenance and exploration.
                2. The reasoning for the split written against the charter.
                3. Actual hours by category compared with plan at quarter end.
                4. The next quarter's split adjusted with a recorded reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter has a written time allocation and a plan-versus-actual comparison filed at quarter end."
                cadence: cyclic
              tasks:
                - "Estimate how last quarter's research hours were really spent"
                - "Set this quarter's split across families, maintenance and exploration"
                - "Compare actual against planned hours and reset the split @recurring(quarterly)"
                - "Write one sentence on why the split changed"
            - name: Signal library with status and owner
              description: |-
                ## Purpose
                Teams regularly rediscover signals they tested two years ago, or keep running one nobody owns. A signal library listing every signal ever tested, its stage, owner, last result and current status prevents rework and gives the redundancy check something to compare against.

                ## Milestones
                1. Every signal tested in the last three years entered with a one-line description.
                2. Each entry carrying stage reached, owner, last run ID and status.
                3. Killed signals kept in the library with the reason they were stopped.
                4. Entries checked monthly so status matches reality.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A signal library covers every signal tested in the last three years, with status and owner checked within the last month."
                cadence: rolling
              tasks:
                - "List every signal you can remember testing in the last three years"
                - "Add stage reached, owner, run ID and status to each entry"
                - "Check the library against the pipeline and fix stale entries @recurring(monthly:21)"
                - "Record the kill reason for any signal stopped this month"
            - name: Weekly literature and working paper scan
              description: |-
                ## Purpose
                Working paper series, conference programmes and practitioner journals produce a steady flow of ideas, most of them already arbitraged or fragile. A fixed weekly scan, with a short note on each paper's mechanism and whether it fits the charter, feeds the backlog without turning reading into a second job.

                ## Milestones
                1. Three to five sources chosen for the weekly scan.
                2. A reading list with a one-line mechanism summary per paper.
                3. Papers that fit the charter turned into one-line hypotheses in the backlog.
                4. A running count of papers read against hypotheses generated.

                ## Notes
                Start from the **Reading queue** template. Treat published results as a starting hypothesis, not as evidence: many fail to replicate once costs and later data are added.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A weekly scan has produced a reading list with mechanism notes and at least one new backlog hypothesis per month."
                cadence: rolling
              tasks:
                - "Choose three to five working paper sources to follow"
                - "Scan new papers and note each mechanism in one line @recurring(weekly:fri)"
                - "Turn any charter-fitting paper into a backlog hypothesis"
                - "Keep a tally of papers read and ideas generated"
            - name: Peer review before results count
              description: |-
                ## Purpose
                Researchers are the worst judges of their own results, and errors in a signal are much cheaper to find before promotion than after. A rule that no result counts until a second person has checked the memo, the data gate, the code path and the out-of-sample run catches the leaks and bugs that self-review misses.

                ## Milestones
                1. A written review checklist covering memo, data gate, test plan adherence and code path.
                2. A weekly review slot where at least one pending result is checked.
                3. Reviewer name and findings recorded against each result.
                4. No result advanced past the out-of-sample gate without a signed review.

                ## Notes
                Reviewers should try to break the result, not polish it. Rotate reviewers so one person's blind spots do not become the programme's.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every result advanced past the out-of-sample gate in the last quarter has a recorded peer review with findings."
                cadence: rolling
              tasks:
                - "Write a one-page reviewer checklist"
                - "Review at least one pending result against the checklist @recurring(weekly:wed)"
                - "Record reviewer name and findings beside the result"
                - "Rotate the reviewer pairing each month"
            - name: Dead-ends register and monthly retrospective
              description: |-
                ## Purpose
                Killed ideas carry information: which mechanisms keep failing, which datasets keep disappointing and which gates catch the most problems. Keeping a register of dead ends with a short cause, and reviewing it monthly, turns failures into better triage and stops the same idea being tested again under a new name.

                ## Milestones
                1. A register entry for every killed idea, with the gate it failed and a one-line cause.
                2. Causes grouped into a short list of recurring failure types.
                3. A monthly retrospective that changes at least one triage or gate rule when a pattern appears.
                4. The register linked from the signal library.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every killed idea has a register entry with cause, and a monthly retrospective note records any rule changes made."
                cadence: rolling
              tasks:
                - "Create the register with columns for idea, gate failed and cause"
                - "Back-fill the ideas killed in the last six months"
                - "Group causes and decide one rule change if a pattern shows @recurring(monthly:28)"
                - "Link the register from the signal library"
            - name: Holdout access log and unsealing rules
              description: |-
                ## Purpose
                Holdout data is only worth something if nobody has peeked at it, and on a busy team that is impossible to know without a record. A simple access log, a named custodian and a rule for who may unseal the holdout and when, makes the last line of defence against overfitting a fact rather than a hope.

                ## Milestones
                1. A named custodian for the holdout data and its location.
                2. An access log recording every read, by whom and for which idea.
                3. A written unsealing rule tied to the promotion bar.
                4. The log reviewed quarterly and any unexplained access investigated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The holdout has a named custodian, a complete access log and a quarterly review with findings recorded."
                cadence: rolling
              tasks:
                - "Name the holdout custodian and record where the data lives"
                - "Start an access log with date, person and idea for every read"
                - "Write the unsealing rule into the promotion bar document"
                - "Review the access log and follow up any unexplained reads @recurring(quarterly)"
            - name: Research hours tracked against stage gates
              description: |-
                ## Purpose
                Knowing that an idea took three months is less useful than knowing it spent two of them waiting on data. Logging hours by idea and stage, even roughly, shows where the process is slow and which stages deserve tooling or tighter time boxes.

                ## Milestones
                1. A simple log of hours per idea per stage.
                2. Monthly totals by stage compared with the time boxes.
                3. The slowest stage identified with a likely cause.
                4. One change made to that stage and its effect checked a month later.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Hours are logged by idea and stage, and a monthly summary names the slowest stage and the change made."
                cadence: rolling
              tasks:
                - "Set up a log with columns for date, idea, stage and hours"
                - "Total hours by stage and compare with the time boxes @recurring(monthly:3)"
                - "Name the slowest stage and its likely cause"
                - "Make one change to that stage and note the date"
            - name: Writing a sharp falsifiable hypothesis
              description: |-
                ## Purpose
                Vague hypotheses such as value works in small caps cannot fail, so they cannot teach you anything. Practising the craft of stating a precise mechanism, sign, horizon and kill condition, on real ideas and with feedback, raises the quality of everything that enters the pipeline.

                ## Milestones
                1. Ten past hypotheses rewritten into precise, falsifiable form.
                2. Each rewrite checked by a peer for a clear kill condition.
                3. A short list of the vagueness patterns you fall into most often.
                4. A personal checklist added to the memo template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten hypotheses have been rewritten with peer-checked kill conditions and a personal checklist is attached to the memo template."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick ten old hypotheses and rewrite them with sign, horizon and kill condition"
                - "Ask a peer to mark any rewrite that still cannot fail"
                - "List the vagueness patterns that show up more than twice"
                - "Add a personal checklist to the memo template"
            - name: Information coefficient and decay analysis
              description: |-
                ## Purpose
                Signals are first judged by how well they rank future returns and how quickly that ranking power fades. Learning to compute and read information coefficients by horizon, their stability over time and the decay profile tells you early whether an idea suits your holding period and what turnover it implies.

                ## Milestones
                1. Rank information coefficients computed for one signal at several horizons.
                2. A rolling IC chart showing stability over time.
                3. A decay profile with an estimated half-life in days.
                4. A short note on what the decay implies for turnover and costs.

                ## Notes
                Look at the distribution of monthly ICs, not just the mean. A high average driven by two months is a warning, not a result.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One signal has IC by horizon, a rolling IC chart and a decay half-life estimate written up with turnover implications."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compute rank IC for one signal at one, five, twenty and sixty days"
                - "Plot a rolling twelve-month IC and note unstable periods"
                - "Estimate the decay half-life from the IC profile"
                - "Write a paragraph on the turnover the half-life implies"
            - name: Sources of edge in premia, behaviour and structure
              description: |-
                ## Purpose
                Durable signals usually fit one of a few families: compensation for bearing a risk, profit from systematic behavioural errors, or a structural constraint that forces some participants to trade. Studying the main examples of each, and the evidence on how they decay, makes it easier to judge whether a new idea has a reason to persist.

                ## Milestones
                1. A one-page map of risk-premium, behavioural and structural explanations with two examples each.
                2. Notes on how published examples in each family have decayed after publication.
                3. Every idea in the backlog tagged with its family or marked unexplained.
                4. A rule for how unexplained ideas are treated at triage.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written map of edge families exists and every backlog idea is tagged by family or marked unexplained."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read two survey papers on the main families of return anomalies"
                - "Write a one-page map with two examples per family"
                - "Note the evidence on post-publication decay for each family"
                - "Tag each backlog idea by family or mark it unexplained"
            - name: Turnover and capacity estimates at the research stage
              description: |-
                ## Purpose
                Many signals that look excellent before costs are untradeable at the size you need. Learning to estimate turnover, rough trading costs and capacity during research, rather than at promotion, kills these ideas early and points effort at signals that could survive contact with the market.

                ## Milestones
                1. Turnover estimated for a sample signal from its decay profile and holding rule.
                2. A simple cost assumption by liquidity bucket applied to the gross result.
                3. A capacity estimate based on participation in average daily volume.
                4. A capacity line added to the hypothesis memo template.

                ## Notes
                These are research approximations to filter ideas, not a replacement for proper transaction cost analysis before going live.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One signal has turnover, net-of-cost and capacity estimates written up, and the memo template carries a capacity line."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Estimate annual turnover for one signal from its holding rule"
                - "Apply a cost assumption per liquidity bucket to the gross result"
                - "Estimate capacity at a fixed share of average daily volume"
                - "Add a capacity line to the memo template"
            - name: Residualising a new signal against known factors
              description: |-
                ## Purpose
                Signals that are mostly a known factor in disguise add little and can double exposures you already carry. Learning to residualise against standard factors and existing signals, and to read what is left, shows whether an idea brings anything genuinely new.

                ## Milestones
                1. A list of standard factors and in-house signals to test against.
                2. One new signal residualised and its IC compared before and after.
                3. A short write-up of how much of the signal survived.
                4. A residualisation step added to the stage-gate document.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One signal has been residualised against a named factor set with before-and-after results recorded and the step added to the gates."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the factors and existing signals a new idea should be tested against"
                - "Regress one new signal on that set and keep the residual"
                - "Compare IC and decay for the raw and residual signal"
                - "Add residualisation as a required step before promotion"
            - name: Sceptical reading of a research result
              description: |-
                ## Purpose
                Most impressive backtests have a simple explanation that is not alpha. Building a checklist of the dozen common failure modes, from look-ahead in timestamps to a result carried by one sector or one year, and practising it on real results, makes you the reviewer you would want on your own work.

                ## Milestones
                1. A checklist of at least twelve failure modes with a test for each.
                2. Three past results read against the checklist with findings noted.
                3. The failure mode you miss most often identified.
                4. The checklist merged into the peer review form.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A twelve-item failure-mode checklist exists, has been applied to three past results and is part of the peer review form."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft a list of common reasons backtests mislead, then edit it"
                - "Add a quick test beside each failure mode"
                - "Read three past results against the checklist and note findings"
                - "Merge the checklist into the peer review form"
            - name: Presenting research to a portfolio manager
              description: |-
                ## Purpose
                Good research is often rejected because it was presented as a tour of the analysis rather than an answer to the questions the portfolio manager will ask. Practising a short format, covering mechanism, out-of-sample evidence, costs, overlap with the book, risks and the stop rule, gets decisions made in one meeting instead of three.

                ## Milestones
                1. A five-slide or one-page format agreed with a portfolio manager.
                2. One past result rewritten into the format.
                3. A dry run with a peer playing a sceptical allocator, with questions recorded.
                4. Answers to the hardest questions added to the format as standard sections.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A presentation format agreed with a portfolio manager exists and has been rehearsed once with recorded questions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a portfolio manager which five questions they ask of every signal"
                - "Rewrite one past result into a one-page answer to those questions"
                - "Run a dry run with a sceptical peer and note every question"
                - "Add standard sections for the hardest questions"
            - name: Redundancy check against the existing signal set
              description: |-
                ## Purpose
                Adding a signal that is highly correlated with what already runs gives the appearance of diversification without the substance. A standard redundancy check, run on every candidate before the out-of-sample gate, shows correlation of signals and of returns with the current set and saves effort on near-duplicates.

                ## Milestones
                1. A defined comparison set of live and candidate signals.
                2. Signal correlation and return correlation computed for each new candidate.
                3. A threshold above which a candidate must show what it adds.
                4. The check rerun quarterly across the whole library.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every candidate reaching the out-of-sample gate has a recorded redundancy check, and the library is rechecked each quarter."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define the comparison set of live and candidate signals"
                - "Compute signal and return correlations for the current lead candidate"
                - "Set a correlation threshold that triggers a what-it-adds note"
                - "Rerun the check across the signal library @recurring(quarterly)"
            - name: Universe and horizon choice for a new research line
              description: |-
                ## Purpose
                Opening a new research line, such as a new region or a shorter horizon, commits months of data and infrastructure work before the first idea is tested. Comparing two or three candidate lines on data cost, capacity, competition and fit with your skills before committing makes that choice deliberately.

                ## Milestones
                1. Two or three candidate research lines described in a paragraph each.
                2. Each scored on data cost, setup time, capacity, competition and skills fit.
                3. A chosen line recorded with the reason and what was rejected.
                4. A date set to revisit the choice if early results disappoint.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two research lines ends in a recorded choice with a revisit date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Describe two or three candidate research lines in a paragraph each"
                - "Score each line on data cost, setup time, capacity and competition"
                - "Record the chosen line and why the others lost"
                - "Set a date to revisit the choice"
            - name: Kill criteria and quarterly kill review
              description: |-
                ## Purpose
                Researchers rarely kill their own ideas; they let them drift. Written kill criteria for each stage, such as time box exceeded twice or out-of-sample sign reversed, and a quarterly review applying them without exception, free time for the ideas with a real chance.

                ## Milestones
                1. Kill criteria written for each stage gate.
                2. A quarterly review applying the criteria to every open idea.
                3. Killed ideas moved to the dead-ends register with a cause.
                4. The share of ideas killed each quarter recorded.

                ## Notes
                Killing an idea is a normal result, not a failure. A programme that kills almost nothing is usually not testing hard enough.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Kill criteria exist for every gate and a quarterly kill review has been held with the number of ideas killed recorded."
                cadence: cyclic
              tasks:
                - "Write two or three kill criteria for each stage gate"
                - "Apply the criteria to every open idea in a kill review @recurring(quarterly)"
                - "Move killed ideas to the dead-ends register with a cause"
                - "Record the share of ideas killed this quarter"
            - name: Research bottleneck audit
              description: |-
                ## Purpose
                When the pipeline feels slow, the instinct is to work longer hours, but the delay usually sits in one place: data requests, compute queues, waiting for review or rewriting code for each idea. A one-off audit of where time is lost points to the single change that would speed up every future idea.

                ## Milestones
                1. The last five completed or killed ideas traced from memo to decision with dates.
                2. Waiting time separated from working time at each stage.
                3. The largest bottleneck named with evidence.
                4. One fix chosen, owned and dated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An audit of five ideas names the largest bottleneck with evidence and a dated, owned fix."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Trace the last five ideas from memo to decision with dates"
                - "Mark waiting time separately from working time at each stage"
                - "Name the stage with the most waiting and the cause"
                - "Choose one fix and assign an owner and date"
            - name: Standard signal tearsheet layout
              description: |-
                ## Purpose
                When every researcher presents results differently, reviewers spend their time decoding charts instead of judging the idea. A standard tearsheet with the same panels in the same order, covering IC by horizon, decay, subperiod stability, sector and size breakdowns, costs and correlation to existing signals, makes ideas comparable at a glance.

                ## Milestones
                1. A list of required panels and their order agreed with reviewers.
                2. A tearsheet generator or template that produces the panels from a run ID.
                3. Two past signals rendered on the tearsheet for comparison.
                4. The tearsheet required at the out-of-sample gate.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standard tearsheet exists, has been produced for two past signals and is required at the out-of-sample gate."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the panels reviewers always ask for and fix their order"
                - "Build a tearsheet that renders the panels from a run ID"
                - "Render two past signals and compare them side by side"
                - "Make the tearsheet a required item at the out-of-sample gate"
            - name: Incubation rules for promoted signals
              description: |-
                ## Purpose
                Clearing the promotion bar still only means a signal has been tested on the past, and most strategies lose much of their apparent edge once live. Defining an incubation period at small size, with the comparison against research expectations, the risk limits and the conditions for scaling up or stopping all written in advance, contains the cost of being wrong.

                ## Milestones
                1. A default incubation length and starting size written down.
                2. Pass and fail conditions defined against the research expectation.
                3. Position limits, a loss limit and a stop rule attached to every incubating signal.
                4. A named person responsible for the scale-up or stop decision.

                ## Notes
                These rules organise a decision. They are not a prediction that any incubating signal will perform.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written incubation rules specify length, size, pass and fail conditions, risk limits and a decision owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set a default incubation length and starting size"
                - "Write pass and fail conditions relative to the research expectation"
                - "Attach position limits, a loss limit and a stop rule to the template"
                - "Name who decides on scale-up or stop at the end of incubation"
            - name: Revising the promotion bar after a year of results
              description: |-
                ## Purpose
                The first promotion bar is a guess. After a year, comparing what promoted signals did in incubation with what research predicted shows whether the bar is too loose, too strict or measuring the wrong things, and lets you change it on evidence rather than on the latest disappointment.

                ## Milestones
                1. Every signal promoted in the last year listed with research expectation and incubation outcome.
                2. The gap between expected and realised performance summarised.
                3. Proposed changes to thresholds written with the evidence behind each.
                4. A revised bar signed and dated, with the old version kept.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A revised promotion bar is signed with a written comparison of expected and realised results for the past year's promotions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List each promoted signal with expected and incubation results"
                - "Summarise the typical shortfall between research and live"
                - "Draft threshold changes with the evidence for each"
                - "Sign and date the revised bar and archive the old one"
            - name: First idea through every stage gate
              description: |-
                ## Purpose
                Until one idea has travelled the whole route, a process on paper is untested. Taking a single idea from memo through data gate, in-sample, out-of-sample, peer review and the promotion decision, whatever the result, reveals the gaps and frictions in the process while the stakes are low.

                ## Milestones
                1. One idea chosen and its memo and test plan filed.
                2. Each gate passed or failed with the decision recorded and dated.
                3. A list of every point where the written process was unclear or skipped.
                4. The process documents updated from that list.

                ## Notes
                A kill at any gate still counts as a complete run. The aim is to test the process, not to get a signal live.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One idea has a recorded decision at every gate it reached, and the process documents have been updated from the friction list."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Pick one idea from the top five in the backlog"
                - "File its memo and test plan with today's date"
                - "Record the decision and date at each gate it reaches"
                - "List every unclear step and update the process documents"
            - name: Research committee review of a candidate signal
              description: |-
                ## Purpose
                Taking a candidate signal to a formal review, whether a research committee or a meeting with the allocator, is where the process is tested in front of the people who decide. Preparing the tearsheet, memo, test plan adherence, redundancy check and proposed risk limits in advance turns the meeting into a decision rather than a discussion.

                ## Milestones
                1. A review pack containing memo, test plan, tearsheet, redundancy check and peer review.
                2. Proposed position limits, loss limit and stop rule included.
                3. A meeting held with a decision recorded: promote, revise or kill.
                4. Actions and owners from the meeting written up within two days.

                ## Notes
                Start from the **Meeting notes** template for the write-up.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A committee review has been held with a complete pack and a recorded promote, revise or kill decision."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Book the review meeting with the allocator and one reviewer"
                - "Assemble memo, test plan, tearsheet, redundancy check and review"
                - "Add proposed risk limits and a stop rule to the pack"
                - "Write up the decision and actions within two days"
            - name: Signal handoff to the production team
              description: |-
                ## Purpose
                Signals often degrade at handoff because the production version differs from the research version in data timing, universe or rounding. A formal handoff package, with a reference output to match and a parallel run before cut-over, means what goes live is what was tested.

                ## Milestones
                1. A handoff document covering definition, data sources, timing, universe and known limitations.
                2. A reference output file the production implementation must match.
                3. A parallel run in which production and research outputs agree within a stated tolerance.
                4. Sign-off from researcher and production owner before cut-over.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A promoted signal has a handoff document, a reference output and a parallel run within tolerance, signed by both sides."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the handoff document with definition, timing and limitations"
                - "Produce a reference output file for a fixed date range"
                - "Run production and research side by side and compare outputs"
                - "Get sign-off from the researcher and production owner"
            - name: Annual research process review
              description: |-
                ## Purpose
                Once a year the whole process deserves the same scrutiny as a signal: how many ideas entered, how many passed each gate, how promoted signals did and where time went. A yearly review using that evidence decides which gates to tighten, which to simplify and what the charter should say for the year ahead.

                ## Milestones
                1. Annual counts of ideas by stage reached and outcome.
                2. Time spent by stage and by idea family summarised.
                3. Incubation outcomes compared with research expectations.
                4. Changes to the charter, gates and bar agreed and dated.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual review document with funnel counts, time data and agreed process changes is filed each year."
                cadence: cyclic
              tasks:
                - "Pull the year's funnel counts from the pipeline and dead-ends register"
                - "Summarise time by stage from the hours log"
                - "Hold the annual process review and agree changes @recurring(yearly)"
                - "Update and redate the charter, gates and bar"
            - name: Idea generation day with traders and analysts
              description: |-
                ## Purpose
                Researchers who only talk to each other tend to recycle the same idea families. A half-day session with traders, fundamental analysts and risk staff, structured around puzzles they see in the market, refreshes the backlog with ideas grounded in how markets actually behave.

                ## Milestones
                1. A half-day booked with at least three people from outside research.
                2. Each attendee asked in advance for two market puzzles they cannot explain.
                3. Puzzles converted into one-line hypotheses during the session.
                4. New hypotheses triaged within two weeks.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An idea generation session has been held and at least ten new hypotheses entered and triaged within two weeks."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Invite three or more traders, analysts or risk staff to a half-day"
                - "Ask each to bring two market puzzles they cannot explain"
                - "Turn each puzzle into a one-line hypothesis in the session"
                - "Triage the new hypotheses within two weeks"
            - name: Solo researcher process without a team
              description: |-
                ## Purpose
                Working alone, in a small fund or on your own capital, removes the reviewer, the committee and the colleague who asks awkward questions. A solo version of the process substitutes cooling-off periods, written self-review against the checklist and a monthly outside check, so the discipline does not depend on having a team.

                ## Milestones
                1. A rule that results wait at least forty-eight hours before you judge them.
                2. Self-review done against the written checklist, not from memory.
                3. An outside reviewer, mentor or peer group engaged for monthly checks.
                4. A personal promotion bar and stop rule written and signed.

                ## Notes
                If the research is for your own money, keep risk limits small and assume the edge is smaller than the backtest says. Nothing here is advice on what to trade.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A solo process with a cooling-off rule, checklist self-review and a monthly outside check has been followed for three months."
                cadence: rolling
              tasks:
                - "Write a forty-eight-hour cooling-off rule into your process"
                - "Find one outside reviewer or peer group willing to check results"
                - "Send one result for outside review each month @recurring(monthly:14)"
                - "Write and sign a personal promotion bar and stop rule"
            - name: New researcher's first ninety days
              description: |-
                ## Purpose
                New joiners often learn the research process by watching what colleagues actually do, which is rarely what the documents say. A structured first ninety days, from reading the charter and dead-ends register to taking one small idea through the gates with a mentor, gets them productive without inheriting bad habits.

                ## Milestones
                1. A thirty-day plan covering charter, gates, signal library and dead-ends register.
                2. A sixty-day milestone of one memo and test plan reviewed by a mentor.
                3. A ninety-day milestone of one idea taken to the out-of-sample gate.
                4. Feedback from the new joiner on unclear parts of the process.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A new researcher has completed the thirty, sixty and ninety day milestones and given written feedback on the process."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Set the thirty, sixty and ninety day milestones with the new joiner"
                - "Assign a mentor and schedule fortnightly check-ins"
                - "Review the new joiner's first memo and test plan"
                - "Collect written feedback on unclear parts of the process"
            - name: Turning a fundamental thesis into a testable signal
              description: |-
                ## Purpose
                Analysts and portfolio managers often hold views, such as companies with rising inventories underperform, that have never been tested systematically. Working with a researcher to turn one thesis into a precise rule with point-in-time data, and putting it through the same gates, shows whether the view generalises beyond the examples that inspired it.

                ## Milestones
                1. One thesis written as a hypothesis memo with a measurable rule.
                2. The point-in-time data needed identified and checked through the data gate.
                3. The rule tested in-sample and out-of-sample under the standard plan.
                4. A short note on what the result means for the original thesis.

                ## Notes
                A failed test does not prove the analyst wrong about individual companies. It shows the view does not work as a mechanical rule.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One fundamental thesis has been tested as a rule through the gates and a written note records what the result means."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the thesis as a one-sentence measurable rule"
                - "Identify the point-in-time data the rule needs"
                - "Pair with a researcher to run the standard test plan"
                - "Write a note on what the result says about the thesis"
            - name: Research request intake from portfolio managers
              description: |-
                ## Purpose
                Portfolio managers and analysts regularly ask research to look into something, and without an intake route those requests either jump the queue or vanish. A short request form that captures the question, the decision it would inform and the deadline, routed through the weekly triage, gives requesters an answer on timing and keeps the pipeline honest about what it is working on.

                ## Milestones
                1. A one-page request form asking for the question, the decision it informs and the date needed.
                2. Requests entered into the backlog and triaged like any other idea.
                3. Every requester told within a week whether, when and how the question will be tested.
                4. A record of requests answered, declined and outstanding reviewed each quarter.

                ## Notes
                Some requests are better answered with a quick descriptive analysis than a full pass through the gates. Say which route a request is on so nobody mistakes a chart for a tested signal.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A request form is in use and every request in the last quarter has a recorded response within one week of submission."
                cadence: rolling
              tasks:
                - "Draft a one-page request form with question, decision and date needed"
                - "Share the form with the portfolio managers and analysts you support"
                - "Reply to each new request within a week with route and timing"
                - "List requests answered, declined and outstanding at quarter end"
            - name: Adapting academic research habits to alpha work
              description: |-
                ## Purpose
                PhD researchers bring rigour, but academic habits such as running every sensitivity variation, chasing significance on the full sample and polishing before sharing can work against a stage-gated process. Mapping which habits transfer and which to drop, and practising on one idea, shortens the adjustment from paper writing to research that has to survive out of sample.

                ## Milestones
                1. A two-column list of academic habits to keep and to change.
                2. One idea run through the gates using a pre-registered plan and variant limit.
                3. Results shared at an early, rough stage for review.
                4. A short reflection on what felt different and why.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A keep-and-change list exists and one idea has been run under a pre-registered plan with early review."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a keep-and-change list of academic research habits"
                - "Run one idea under a pre-registered plan with a variant limit"
                - "Share rough results with a reviewer before polishing"
                - "Write a half-page reflection on the differences"
            - name: Setting up the process for a small research team
              description: |-
                ## Purpose
                Leading a team of three to six, you need the process to work without you in every meeting. Rolling out the charter, gates, review rota and pipeline board, with clear roles for who triages, who reviews and who decides, makes the process the team's rather than the lead's.

                ## Milestones
                1. Roles written for triage, review, data sign-off and promotion decisions.
                2. The team walked through the charter, gates and bar in one session.
                3. A review rota and pipeline board in use by everyone.
                4. A monthly check-in on whether the process is being followed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every team member has a written process role, uses the pipeline board and the review rota, and a monthly process check is held."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write who triages, reviews, signs off data and decides promotion"
                - "Run a walkthrough session on the charter, gates and bar"
                - "Set up the review rota and shared pipeline board"
                - "Hold a process check-in with the team @recurring(monthly:17)"
            - name: Part-time research rhythm alongside a day job
              description: |-
                ## Purpose
                Researching in evenings and weekends makes it tempting to skip the slow steps and run one more variant at midnight. A part-time rhythm, with one protected weekly block, gates sized to that block and a rule that out-of-sample opening only happens on a planned day, keeps the discipline intact with limited hours.

                ## Milestones
                1. One protected weekly research block of at least three hours.
                2. Stage time boxes rescaled to the hours actually available.
                3. A rule that out-of-sample opens only on a planned, rested day.
                4. Three months of blocks logged with what was achieved in each.

                ## Notes
                Check your employment contract for rules on outside trading and research before you start.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly research block has been kept for twelve weeks with a log of outcomes and rescaled time boxes."
                cadence: rolling
              tasks:
                - "Check your employment contract for outside research or trading rules"
                - "Choose and protect one weekly research block"
                - "Work the current idea's next stage in the block @recurring(weekly:sat)"
                - "Rescale stage time boxes to your real weekly hours"
            - name: Capacity and crowding check before promotion
              description: |-
                ## Purpose
                A signal can be real and still not worth running at the size proposed, either because it cannot absorb the capital or because many others trade the same thing. A specialist check before promotion, combining capacity estimates, sensitivity to cost assumptions and indicators of crowding, sets a realistic size cap in the promotion decision.

                ## Milestones
                1. Net performance shown at several capital levels under stated cost assumptions.
                2. Sensitivity of the result to doubling the cost assumption recorded.
                3. Available crowding indicators reviewed for the signal's holdings.
                4. A size cap written into the promotion decision.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The promotion decision for a signal includes a size cap supported by capacity curves and a cost sensitivity test."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Compute net performance at three or four capital levels"
                - "Rerun with costs doubled and record the change"
                - "Review available crowding indicators for the signal's holdings"
                - "Write a size cap into the promotion decision"
            - name: Information barrier and MNPI checks in research
              description: |-
                ## Purpose
                Research that uses expert networks, channel checks, scraped data or information from colleagues on the private side can stray into material non-public information without anyone intending it. Building a compliance control into the process, with a data provenance question at the memo stage and sign-off for sensitive sources, protects the researcher and the firm.

                ## Milestones
                1. A provenance question added to the hypothesis memo and data gate.
                2. A list of source types that need compliance sign-off before use.
                3. A record of compliance decisions kept with the signal library.
                4. An annual refresher on the policy completed by everyone doing research.

                ## Notes
                Start from the **Compliance control** template. Ask your compliance or legal team how the rules apply in your jurisdiction; this project organises the control, it does not interpret the law.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The memo and data gate carry a provenance question, sensitive sources have recorded compliance sign-off, and the annual refresher is done."
                cadence: rolling
              tasks:
                - "Add a data provenance question to the memo template"
                - "Agree with compliance which source types need sign-off"
                - "Keep compliance decisions alongside the signal library entries"
                - "Complete the information barrier refresher with the team @recurring(yearly)"
            - name: Research audit trail for investor due diligence
              description: |-
                ## Purpose
                Allocators doing operational due diligence increasingly ask how ideas are researched, reviewed and approved, and a vague answer costs credibility. Assembling an audit trail from the charter, memos, test plans, review records and promotion decisions shows the process is real, without exposing the signals themselves.

                ## Milestones
                1. A process overview document describing gates, review and promotion.
                2. Redacted examples of a memo, test plan, review and decision ready to share.
                3. A monthly check that new decisions are filed with their supporting records.
                4. The pack reviewed by compliance before any external use.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A compliance-reviewed due diligence pack with a process overview and redacted examples is ready to share."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to draft a process overview from your gate documents, then edit it"
                - "Prepare redacted examples of memo, test plan, review and decision"
                - "Check new decisions are filed with their records @recurring(monthly:25)"
                - "Send the pack to compliance for review before external use"
            - name: Measuring the research funnel hit rate
              description: |-
                ## Purpose
                Knowing that one idea in twenty reaches production, and where the other nineteen fall out, is the most useful number a research programme can track. Measuring pass rates by gate, by idea family and by source turns the process into something you can improve with evidence, and keeps expectations realistic about how often ideas succeed.

                ## Milestones
                1. Pass rates recorded for each gate over the last year.
                2. Rates broken down by idea family and by idea source.
                3. A quarterly funnel chart added to the research record.
                4. One triage or sourcing change made based on the breakdown.

                ## Notes
                Start from the **Metrics log** template. A very high pass rate at the out-of-sample gate is a warning sign, not a success.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Gate pass rates by family and source are recorded quarterly and at least one change has been made because of them."
                cadence: rolling
              tasks:
                - "Count ideas entering and passing each gate over the last year"
                - "Break the pass rates down by idea family and source"
                - "Update the funnel chart and note any shift @recurring(quarterly)"
                - "Change one triage or sourcing rule based on the breakdown"
            - name: Combining weak signals as a deliberate programme
              description: |-
                ## Purpose
                Many individually weak signals, if genuinely independent, can be worth more together than one strong signal that might be overfitted. Running combination as its own research line, with its own memo, a fixed combination method chosen in advance and the same out-of-sample rules, avoids the trap of tuning weights until the combined backtest shines.

                ## Milestones
                1. A memo for the combination line naming candidate signals and the method.
                2. Combination weights fixed by a rule decided before testing.
                3. Combined results tested out of sample under the standard plan.
                4. A note on how much the combination adds over its best component.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A combination of weak signals has been tested out of sample with weights fixed in advance and a written comparison against its best component."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Write a memo naming the candidate signals and combination method"
                - "Fix the weighting rule before running any test"
                - "Run the combined signal under the standard out-of-sample plan"
                - "Compare the combination with its best single component"
            - name: Feeding live shortfall back into research
              description: |-
                ## Purpose
                Live signals almost always deliver less than their research suggested, and the size and causes of that gap are the best evidence you have about your own process. A monthly loop that compares live and expected results for each live signal, and records which research assumptions were wrong, sharpens memos, costs and the promotion bar for every future idea.

                ## Milestones
                1. A monthly comparison of live against research expectation for each live signal.
                2. Each gap attributed to a cause such as costs, timing, decay or regime.
                3. Research assumptions updated when a cause recurs.
                4. A running record of the average research-to-live shortfall.

                ## Notes
                This loop feeds research, not trading decisions. Pausing or stopping a live strategy follows its written stop rule and the monitoring process.
              priority: medium
              frontmatter:
                mode: research
                output_kind: habit
                success_criteria: "A monthly shortfall comparison is filed for each live signal and research assumptions have been updated where a cause recurred."
                cadence: rolling
              tasks:
                - "List live signals with their research expectation"
                - "Compare live against expected and attribute each gap @recurring(monthly:10)"
                - "Update cost or decay assumptions when a cause repeats"
                - "Keep a running average of the research-to-live shortfall"
---

# Alpha Research Process

This area is for researchers and the analysts and portfolio managers who work with them, anyone who wants alpha ideas to move from a hunch to a signal in production through the same disciplined steps every time. It starts with the foundations (a research charter, hypothesis memos, stage gates, out-of-sample rules and a promotion bar written before the first test), then the weekly and monthly machinery that keeps the pipeline moving, the skills that make a hypothesis worth testing, the improvements and decisions that sharpen the process, the dated events from a first full pass through the gates to a signal handoff, variants for solo, part-time, academic and team settings, and finally the specialist work of capacity, compliance, audit trails and measuring the process itself.

What repeats is a weekly idea triage, literature scan and peer review slot, a monthly pipeline review, signal library check, dead-ends retrospective and live feedback loop, a quarterly allocation of research time and kill review, and a yearly review of the whole process and the bar. The Reading queue, Meeting notes, Onboarding 30/60/90, Metrics log and Compliance control templates pair with the projects that name them. Nothing here is trading advice, and most ideas that pass a backtest still fail out of sample, which is exactly why the process exists. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
