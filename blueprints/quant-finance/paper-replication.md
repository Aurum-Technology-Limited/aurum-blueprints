---
id: quant-finance.paper-replication
name: Paper Replication
description: "A repeatable way to replicate published finance papers: a target sheet of every number, a written protocol and tolerances, a discrepancy log, out-of-sample tests and a write-up of what held."
category: business
version: 1.0.0
tags: [quant-finance, paper-replication, researcher, student, replication, empirical-asset-pricing, out-of-sample, reproducibility]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - meeting-notes
    - portfolio-piece
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Paper Replication
          description: "Replicating published finance papers: getting the data, matching the original results, testing out of sample, and writing up what held and what did not."
          projects:
            - name: Choosing the first paper to replicate
              description: |-
                ## Purpose
                Picking a paper that is too ambitious is the usual reason a first replication stalls in week three. A good first target has a clear method section, data you can actually get, a sample you can run on a laptop and tables with enough detail to check against. Scoring three or four candidates on those points takes an evening and saves months.

                ## Milestones
                1. Three or four candidate papers listed with their journal, year and main table to match.
                2. Each candidate scored on data access, method clarity, compute needs and table detail.
                3. One paper chosen, with a sentence on why it beat the others.
                4. The chosen paper, its online appendix and any published code saved in one folder.

                ## Notes
                Classic single-sort anomaly papers from well-known journals make good first targets because later papers report the same numbers, giving you several reference points.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One paper is chosen from a scored shortlist of at least three, with the reason written down and all its materials saved together."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List three or four papers you would like to rebuild and note their main tables"
                - "Score each one for data access, method clarity, compute needs and table detail"
                - "Check whether each paper has an online appendix or published code"
                - "Record the chosen paper and the reason it won in your replication folder"
            - name: Target sheet of every published number
              description: |-
                ## Purpose
                You cannot say a result replicated unless you know exactly which numbers you are trying to hit. Copying every coefficient, t-statistic, average return, sample count and date range from the target tables into a structured sheet turns a vague goal into a checklist and makes the later comparison mechanical rather than impressionistic.

                ## Milestones
                1. Every table and figure you intend to match listed with its page number.
                2. Each reported number entered in a sheet with its table, row, column and units.
                3. Sample period, number of firms or observations and any reported filters recorded as separate targets.
                4. A column ready for your replicated value and the difference from the original.

                ## Notes
                Include the boring numbers. Observation counts and sample means are the fastest way to find a data problem before you ever reach the headline coefficient.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A target sheet holds every number from the chosen tables, each tagged by table, row and column, with empty columns for replicated values."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Mark every table and figure in the paper you plan to match"
                - "Type each reported number into a sheet with table, row, column and units"
                - "Add the sample period and observation counts as their own target rows"
                - "Add columns for your replicated value, the difference and a status flag"
            - name: Close reading of the method section
              description: |-
                ## Purpose
                Published method sections compress months of choices into a few paragraphs, and the details that matter most often live in footnotes or the appendix. Reading the paper three times with a specific question each pass, and writing down every choice the authors made or left unstated, gives you the list of decisions your code must take.

                ## Milestones
                1. A first pass summary of the paper's claim and main test in five sentences.
                2. A list of every explicit choice: filters, breakpoints, weighting, rebalancing dates and lags.
                3. A separate list of choices the paper leaves unstated, each with your proposed default.
                4. Footnotes, appendix and any data appendix read and cross-checked against the main text.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of explicit and unstated method choices exists, each unstated one paired with a default and the reason for it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a five-sentence summary of the paper's claim and main test"
                - "List every explicit method choice, including those buried in footnotes"
                - "List each unstated choice and write the default you will use"
                - "Read the online appendix and note anything that contradicts the main text"
            - name: Variable definitions crosswalk from text to code
              description: |-
                ## Purpose
                Book-to-market, momentum, earnings surprise and size each have several published definitions, and a paper's one-line description rarely pins down which fields, dates and adjustments it used. A crosswalk that maps each variable in the paper to exact database fields and formulas is the single document that prevents most quiet mismatches.

                ## Milestones
                1. Every variable used in the target tables listed with the paper's own wording.
                2. Each variable mapped to specific database fields, a formula and a timing rule.
                3. Ambiguous variables flagged, with the alternative definitions you might test.
                4. The crosswalk saved next to the code and referenced in every script that builds a variable.

                ## Notes
                Where the paper cites an earlier paper for a definition, go and read that earlier definition rather than assuming the newer paper copied it exactly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each variable in the target tables has a documented field mapping, formula and timing rule, with ambiguous ones flagged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy the paper's wording for each variable into a crosswalk table"
                - "Map every variable to database fields, a formula and a timing rule"
                - "Look up any definition the paper borrows from an earlier paper"
                - "Flag ambiguous variables and note the alternatives worth testing"
            - name: Data requirements map for the replication
              description: |-
                ## Purpose
                Most replications fail on data, not code: the wrong database, a missing field, a shorter history or a different universe. Listing each dataset, field, frequency and date range the paper needs, with where you will get it, shows early whether the replication is feasible and which parts will need a substitute.

                ## Milestones
                1. Every dataset the paper uses named, with fields, frequency and date range needed.
                2. A source identified for each one, whether licensed, institutional or free.
                3. Gaps marked where you have no access, with a possible substitute for each.
                4. A go or adjust decision recorded on whether the replication is feasible as planned.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A data map lists each required dataset with its source or substitute, and a written feasibility decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every dataset the paper uses with fields, frequency and date range"
                - "Note where you can get each one and under what licence"
                - "Mark each gap and suggest a substitute source"
                - "Write a short go or adjust decision on feasibility"
            - name: Academic and free data access set-up
              description: |-
                ## Purpose
                Students often have more data than they realise through the university library, and researchers outside academia often have less. Confirming exactly which subscriptions, research platforms and free sources such as public factor libraries and central bank data you can use, and on what licence terms, settles the data question before any code is written.

                ## Milestones
                1. The library or data services team asked which financial databases your login covers.
                2. Access tested for each database the data map needs.
                3. Free sources such as public factor return libraries and central bank series bookmarked and tested.
                4. Licence terms for each source noted, including whether data or derived results may be shared.

                ## Notes
                Read the licence before you publish anything. Many academic subscriptions allow you to publish results but not to redistribute the underlying data, even in a replication package.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Access is confirmed for each source on the data map, with licence terms on sharing recorded for every one."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Email the library data team to ask which financial databases you can use"
                - "Log in to each database on the data map and pull a small test extract"
                - "Download one series from a public factor library to test the free route"
                - "Write down what each licence allows you to share"
            - name: Replication project skeleton and environment
              description: |-
                ## Purpose
                Six months from now you will need to rerun everything from raw data with one command, possibly on a different machine. Setting up a folder layout, a pinned environment, version control and a single run script before the first analysis keeps the replication reproducible by you and by anyone who reviews it.

                ## Milestones
                1. A repository with separate folders for raw data, intermediate data, code, output and the write-up.
                2. A pinned environment file that recreates the exact package versions.
                3. Raw data kept read-only and excluded from version control where the licence requires.
                4. One run script that rebuilds every table from raw data in order.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fresh clone plus the raw data rebuilds every output with one command in a pinned environment."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the repository with raw, intermediate, code, output and paper folders"
                - "Pin the environment with exact package versions in a lock file"
                - "Add licensed raw data paths to the ignore file"
                - "Write a run script that calls each step in order and stops on error"
            - name: Replication protocol written before running code
              description: |-
                ## Purpose
                Once you see a number that is close, it is tempting to stop, and once you see one that is far off, it is tempting to tweak until it matches. Writing down in advance which tables you will match, in what order, what you will do with unstated choices and when you will stop turns the replication into a test rather than a search.

                ## Milestones
                1. The tables and statistics to be matched listed in the order you will build them.
                2. Defaults for every unstated choice fixed in writing.
                3. A rule for what happens when a number does not match, including how many alternatives you may try.
                4. The protocol dated and committed before the first replicated number is produced.

                ## Notes
                Changes to the protocol are fine, but log each one with a date and reason so the final write-up can report them.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated protocol committed before any replicated output lists target order, defaults, a mismatch rule and a stopping point."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the tables to match in the order you will build them"
                - "Fix in writing the default for each unstated method choice"
                - "Write how many alternatives you may try when a number does not match"
                - "Commit the dated protocol before running the first analysis"
            - name: Tolerance rules for matching published results
              description: |-
                ## Purpose
                Exact agreement to the third decimal is rare even with the same data, because databases are revised and rounding differs. Deciding beforehand what counts as matched, close or failed for coefficients, t-statistics, means and counts stops you arguing with yourself later and gives readers a clear standard.

                ## Milestones
                1. A tolerance for point estimates, such as a share of the original or an absolute difference.
                2. A separate rule for t-statistics and significance, including sign and conventional thresholds.
                3. A rule for observation counts and sample means.
                4. Three labels defined, such as matched, close and not matched, with criteria for each.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written tolerance rules define matched, close and not matched for estimates, t-statistics and counts before results are compared."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a tolerance for point estimates and write it down"
                - "Set a rule for t-statistics covering sign and significance"
                - "Decide how far observation counts may differ before you investigate"
                - "Add the three status labels to the target sheet"
            - name: Contacting the original authors
              description: |-
                ## Purpose
                Authors often answer a short, specific, polite question about a definition or a filter, and some will share code. Asking after you have tried to resolve it yourself, with the exact table cell and what you got, gets far better replies than a general request and builds a contact you may cite in the write-up.

                ## Milestones
                1. Questions narrowed to two or three specific points, each tied to a table cell or sentence.
                2. Your own attempted answer and current number stated for each question.
                3. A short email sent to the corresponding author.
                4. Any reply recorded with the date and how it changed the code.

                ## Notes
                Keep the tone neutral. You are asking how something was done, not telling the author they made a mistake.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A specific question has been sent to the corresponding author and any answer is logged with its effect on the replication."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick the two or three questions you could not answer from the paper"
                - "Write your attempted answer and current number beside each question"
                - "Ask the agent to draft a short, neutral email to the corresponding author"
                - "Log the reply and any code change it led to"
            - name: Weekly replication work session
              description: |-
                ## Purpose
                Replications done in scattered evenings lose the thread, because each session starts with an hour of remembering where you were. A fixed weekly block with a short end-of-session note on what changed and what is next keeps momentum through the slow middle where nothing matches yet.

                ## Milestones
                1. A recurring block of at least two hours booked in your calendar.
                2. Each session ending with a three-line note: what changed, what is next, what is blocked.
                3. The next session starting from that note rather than from memory.
                4. Four weeks of sessions completed without a missed note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly sessions are booked and each one leaves a dated three-line note, with four consecutive weeks completed."
                cadence: rolling
              tasks:
                - "Book a recurring two-hour replication block in your calendar"
                - "Hold the replication session and write the three-line closing note @recurring(weekly:sat)"
                - "Read last week's closing note before opening any code"
                - "Count matched, close and not matched cells on the target sheet @recurring(monthly:28)"
            - name: Discrepancy log for mismatched numbers
              description: |-
                ## Purpose
                When a replicated number misses, the explanation is usually one of a few things: data vintage, a filter, timing, weighting or a coding error. Logging each discrepancy with its size, your hypotheses and what you tested keeps you from trying the same fix twice and becomes the most valuable section of the write-up.

                ## Milestones
                1. A log with fields for target cell, original value, your value, gap, hypotheses and tests run.
                2. Every number labelled not matched or close entered in the log.
                3. Each entry closed with an explanation, an accepted gap or an open question.
                4. The open entries reviewed and prioritised every week.

                ## Notes
                Write down tests that failed to explain the gap, not just the one that worked. Readers learn as much from the dead ends.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every not matched or close number has a log entry with hypotheses, tests run and a closing status."
                cadence: rolling
              tasks:
                - "Create the discrepancy log with target cell, values, gap and hypotheses fields"
                - "Enter every not matched number from the target sheet"
                - "Review open discrepancies and pick the next one to test @recurring(weekly:sun)"
                - "Close each entry with an explanation, an accepted gap or an open question"
            - name: Data vintage and extract record
              description: |-
                ## Purpose
                Commercial databases revise history: delisting returns are filled in, accounting data is restated and identifiers change. If you do not record when each extract was pulled and with what query, you will not be able to tell a code change from a data change when a number moves, and nobody else can reproduce your result.

                ## Milestones
                1. Each extract stored with its pull date, query text and row count.
                2. A checksum or summary statistics saved for every extract.
                3. A rule that new extracts never overwrite old ones.
                4. A short note in the write-up stating which vintage each table uses.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every data extract used in the replication has a stored pull date, query, row count and checksum, and none has been overwritten."
                cadence: rolling
              tasks:
                - "Save the query text and pull date beside each existing extract"
                - "Compute and store a checksum and row count for every extract"
                - "Change the download script so new pulls go to a dated folder"
                - "Check that every table in the draft names its data vintage @recurring(monthly:9)"
            - name: Pipeline of candidate papers to replicate
              description: |-
                ## Purpose
                Good replication targets turn up in reading groups, references and conference programmes, then get forgotten. A standing list with a short note on each paper's data needs and why it interests you means the next replication starts from a considered choice rather than whatever you read last.

                ## Milestones
                1. A list of candidate papers with citation, main claim and data needed.
                2. Each candidate tagged by difficulty and whether code or data is published.
                3. New candidates added each month from references, seminars and new issues.
                4. The top three candidates reviewed whenever a replication finishes.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A candidate list of at least ten papers exists, each with claim, data needs and difficulty, refreshed monthly."
                cadence: rolling
              tasks:
                - "Add five papers you have meant to replicate with their data needs"
                - "Tag each candidate by difficulty and whether code is published"
                - "Scan new journal issues and working papers for replication candidates @recurring(monthly:20)"
                - "Re-rank the top three candidates by data access and interest @recurring(quarterly)"
            - name: Monthly replication review with a peer
              description: |-
                ## Purpose
                Working alone, it is easy to accept a defensible but wrong choice because it moved a number closer. Half an hour a month walking a peer or supervisor through the target sheet and the discrepancy log catches those choices early and gives you a second reader before anything is written up.

                ## Milestones
                1. A peer, supervisor or reading group member agreed as a monthly reviewer.
                2. A standing agenda: progress against the target sheet, open discrepancies and protocol changes.
                3. Notes from each review kept with actions and owners.
                4. Every protocol change since the last review explained to the reviewer.

                ## Notes
                Start from the **Meeting notes** template for the review record.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A named reviewer meets monthly and each meeting leaves dated notes covering the target sheet, open discrepancies and protocol changes."
                cadence: rolling
              tasks:
                - "Ask a peer or supervisor to review your replication once a month"
                - "Send the target sheet and open discrepancies two days before the review @recurring(monthly:12)"
                - "Hold the review and record actions in the meeting notes"
                - "Explain every protocol change made since the last review"
            - name: Comments, corrigenda and replies watch
              description: |-
                ## Purpose
                Well-known papers attract published comments, corrections and replies that settle exactly the questions you are stuck on. Checking for them at the start and keeping an eye out during the work stops you rediscovering a known error, or missing a correction that changes the numbers you should be matching.

                ## Milestones
                1. The journal page and citation index searched for comments, replies and corrigenda.
                2. Later papers that report the same tables identified as extra reference points.
                3. Any correction applied to the target sheet with a note.
                4. A citation alert set on the paper for new work.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated search for comments and corrigenda is recorded, any corrections are applied to the target sheet and a citation alert is active."
                cadence: rolling
              tasks:
                - "Search the journal site and a citation index for comments on the paper"
                - "List later papers that re-report the same tables"
                - "Set a citation alert on the paper"
                - "Review new citing papers for corrections or failed replications @recurring(quarterly)"
                - "Check the journal page for new corrigenda or published replies @recurring(yearly)"
            - name: Quarterly rerun on the latest data vintage
              description: |-
                ## Purpose
                A replication that matched last year may not match today once the vendor revises history, and the out-of-sample extension grows each quarter. Rerunning the whole pipeline on a fresh extract and comparing against the stored results shows whether your conclusions are stable or depend on one vintage.

                ## Milestones
                1. A fresh extract pulled into a new dated folder.
                2. The full pipeline rerun with one command on the new vintage.
                3. Every replicated number compared with the previous run and changes above tolerance flagged.
                4. A short dated note on whether any conclusion changed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter the pipeline is rerun on a new vintage, with changes above tolerance listed in a dated comparison note."
                cadence: cyclic
              tasks:
                - "Pull a fresh data extract and rerun the full pipeline @recurring(quarterly)"
                - "Compare every output with the previous run and flag changes above tolerance"
                - "Write a dated note on whether any conclusion changed"
                - "Append the newest quarter to the post-sample results table @recurring(quarterly)"
            - name: Replication package tidy-up after each milestone
              description: |-
                ## Purpose
                Replication repositories decay quickly: notebooks pile up, half-finished branches linger and the run script falls behind the code. A short tidy after each matched table keeps the package in a state you could hand to a reviewer at any point, rather than facing a week of clean-up at the end.

                ## Milestones
                1. Exploratory notebooks either promoted to scripts or moved to an archive folder.
                2. The run script updated to include every step that produces a matched table.
                3. A readme that explains how to rebuild each table.
                4. A clean rebuild from raw data completed after each milestone.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "After each matched table the repository rebuilds cleanly from raw data and the readme explains how to produce every table so far."
                cadence: rolling
              tasks:
                - "Move or promote every exploratory notebook in the repository"
                - "Add the newest matched table to the run script"
                - "Update the readme with the steps for each table"
                - "Run a clean rebuild from raw data and fix anything that breaks @recurring(monthly:26)"
            - name: Portfolio sort mechanics as papers use them
              description: |-
                ## Purpose
                Much of empirical asset pricing rests on portfolio sorts, and small choices change results noticeably: exchange breakpoints versus all stocks, value or equal weighting, when portfolios rebalance and how micro-caps are handled. Working through these choices on one sort, and seeing how each moves the numbers, lets you read a paper's sort description and rebuild it correctly.

                ## Milestones
                1. One single sort built with exchange-based breakpoints and monthly value-weighted returns.
                2. The same sort rebuilt with all-stock breakpoints and equal weighting, with differences recorded.
                3. Rebalancing timing varied and its effect noted.
                4. A one-page reference of sort choices and how papers usually describe them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reference page records how breakpoints, weighting and rebalancing each changed one sort's returns, built from your own runs."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a single size sort with exchange breakpoints and value weights"
                - "Rebuild it with all-stock breakpoints and equal weights"
                - "Change the rebalancing month and record how returns move"
                - "Write a one-page reference of sort choices and their effects"
            - name: Reproducing reported standard errors
              description: |-
                ## Purpose
                Getting the coefficient right and the t-statistic wrong is common, because papers differ in Fama-MacBeth averaging, Newey-West lag choice, clustering and small-sample adjustments. Learning to reproduce the exact inference a paper reports, and to say which method it implies when it is not stated, is what separates a matched table from a nearly matched one.

                ## Milestones
                1. Fama-MacBeth estimates computed with plain and Newey-West adjusted standard errors.
                2. The effect of different lag lengths on t-statistics recorded for one regression.
                3. Clustered standard errors by firm, time and both compared for one panel regression.
                4. A note on which inference method the target paper appears to use and why.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One regression's t-statistics are reproduced under at least three inference methods, with the paper's likely method identified in writing."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Run a Fama-MacBeth regression and report plain standard errors"
                - "Add Newey-West adjustment and try three lag lengths"
                - "Compare firm, time and two-way clustered errors on one panel"
                - "Write which method the target paper most likely used"
            - name: Reading empirical asset pricing tables fluently
              description: |-
                ## Purpose
                Replicators lose days misreading a table: returns in percent per month versus annualised, alphas against which model, t-statistics in brackets or parentheses, and portfolios reported long minus short or the reverse. Practising on five well-known tables until each column's meaning is unambiguous makes the target sheet faster and more accurate.

                ## Milestones
                1. Five tables from different papers annotated column by column.
                2. Units, frequency and benchmark model identified for every reported number.
                3. Common conventions written into a personal reference note.
                4. One table read cold and explained to a peer without errors.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five tables are annotated with units, frequency and benchmark, and a reference note of table conventions exists."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick five tables from well-known papers in different sub-fields"
                - "Annotate units, frequency and benchmark model for every column"
                - "Write the conventions you found into a reference note"
                - "Explain one unfamiliar table to a peer and note where you hesitated"
            - name: Accounting data timing and look-ahead conventions
              description: |-
                ## Purpose
                Accounting variables are only known after filing, and papers handle this with lags, fiscal year alignment and point-in-time rules that are easy to get wrong. A mistake here can make a replication match the paper for the wrong reason, or miss it entirely, so learning the common conventions is worth a dedicated study.

                ## Milestones
                1. The common annual lag convention, such as matching fiscal year data to returns several months later, implemented on one variable.
                2. Quarterly data timing tested with report dates where available.
                3. The effect of shortening the lag on one sort recorded as a look-ahead check.
                4. A note on the timing rule the target paper uses, with the page reference.

                ## Notes
                If a result gets much stronger when you shorten the lag, that is a warning sign about timing, not a discovery.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One accounting variable is built under at least two timing rules, with the effect recorded and the paper's rule cited."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the timing rule the target paper states for accounting data"
                - "Build one accounting variable with the standard annual lag"
                - "Rebuild it with a shorter lag and record how results change"
                - "Test quarterly timing using report dates if your data has them"
            - name: Sample filters and delisting returns
              description: |-
                ## Purpose
                Share code filters, exchange restrictions, minimum price rules and how delisting returns are treated can each move an anomaly's return by a noticeable margin. Working through these filters one at a time and recording the observation count after each makes it far easier to match a paper's reported sample size, which is often the first clue that something differs.

                ## Milestones
                1. A filter cascade built that reports observations after each step.
                2. Delisting returns merged and the effect of including or excluding them recorded.
                3. Price and size filters applied as the paper describes.
                4. Observation counts compared with the paper's at each stage it reports.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A filter cascade with counts after each step exists and the final sample size is within your tolerance of the paper's."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a filter cascade that prints observation counts after each step"
                - "Merge delisting returns and compare results with and without them"
                - "Apply the paper's price and size filters in the stated order"
                - "Compare your counts with the paper's reported sample at each stage"
            - name: Event study replication technique
              description: |-
                ## Purpose
                Event studies around earnings announcements, index changes or corporate actions have their own set of choices: estimation windows, benchmark models, event date alignment and how overlapping events are handled. Replicating one classic event study end to end teaches those choices in a way that transfers to any later event-based paper.

                ## Milestones
                1. An event file built with clean event dates and identifiers.
                2. Abnormal returns computed against at least two benchmark models.
                3. Cumulative abnormal returns plotted for the paper's windows.
                4. Results compared with the published figure or table and gaps logged.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One published event study's main cumulative abnormal return figure is reproduced, with differences entered in the discrepancy log."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose a classic event study with a clear main figure"
                - "Build the event file and check event dates against a second source"
                - "Compute abnormal returns against two benchmark models"
                - "Plot cumulative abnormal returns and compare with the published figure"
            - name: Time series predictability regression replication
              description: |-
                ## Purpose
                Return predictability papers use overlapping long-horizon returns and persistent predictors such as valuation ratios, which inflate t-statistics and bias coefficients in ways that change the conclusion. Replicating one predictability regression and then applying the standard corrections shows how much of a famous result depends on the inference method.

                ## Milestones
                1. The paper's predictor and return series rebuilt for its sample period.
                2. Coefficients and reported t-statistics matched within tolerance.
                3. Corrections for overlapping observations and predictor persistence applied and their effect recorded.
                4. Out-of-sample forecast performance against a historical mean benchmark reported.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A predictability regression is matched, re-estimated with corrections for overlap and persistence, and tested out of sample against the historical mean."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Rebuild the predictor and return series for the paper's sample"
                - "Match the reported coefficient and t-statistic"
                - "Apply corrections for overlapping returns and predictor persistence"
                - "Compare out-of-sample forecasts with the historical mean benchmark"
            - name: Toy data checks for each replication step
              description: |-
                ## Purpose
                When the final number is off, it helps to know which step is definitely right. Running each step on a tiny hand-built dataset where you can compute the answer on paper, such as ten stocks over six months, proves the sort, merge and regression code works before real data hides the bug.

                ## Milestones
                1. A toy dataset of a few stocks and months with known answers worked out by hand.
                2. Each pipeline step run on the toy data and checked against the hand answer.
                3. Checks saved as automated tests that run with the pipeline.
                4. At least one real bug found or ruled out by the toy checks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every pipeline step has an automated test on a hand-checked toy dataset, and all tests pass before real data runs."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Build a toy dataset of ten stocks over six months"
                - "Work out the expected sort and regression results by hand"
                - "Turn each hand result into an automated test"
                - "Run the tests before every real-data rebuild"
            - name: Exact versus conceptual replication decision
              description: |-
                ## Purpose
                An exact replication uses the paper's data, sample and method to check the numbers; a conceptual one tests the same idea with different data or a fresh sample. Each answers a different question and suits a different reader, so deciding which you are doing, or in what order, shapes the protocol, the data needs and the write-up.

                ## Milestones
                1. The question each type of replication would answer written in one sentence each.
                2. Data and time requirements estimated for both.
                3. A choice made, or an order set for doing both.
                4. The protocol and write-up outline updated to match the choice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision states whether the work is exact, conceptual or both in sequence, and the protocol reflects it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the question an exact replication would answer"
                - "Write the question a conceptual replication would answer"
                - "Estimate data and time needs for each option"
                - "Record the choice and update the protocol"
            - name: Free data substitute versus licensed database test
              description: |-
                ## Purpose
                Students and independent researchers often have to choose between waiting for licensed data and using free substitutes with shorter histories or different universes. Running the core result on both, where possible, measures how much the substitute changes the answer and tells you whether conclusions from free data can be trusted.

                ## Milestones
                1. One core table built on licensed data, or on the best available source.
                2. The same table built on a free substitute.
                3. Differences in coverage, history and results recorded side by side.
                4. A decision on whether the substitute is good enough for the rest of the work.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One core table exists on both data sources with differences recorded and a written decision on the substitute."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the one table that matters most for the comparison"
                - "Build it on the licensed or best available data"
                - "Build it on the free substitute with the same code"
                - "Write down whether the substitute is good enough and why"
            - name: Out-of-sample extension after the paper's sample end
              description: |-
                ## Purpose
                The most informative test of a published result is the period after the authors stopped looking. Extending the replicated series from the paper's sample end to today, with no changes to the method, shows whether the effect persisted, weakened or vanished, and research on published anomalies suggests weakening is common.

                ## Milestones
                1. The exact replicated method frozen with no further changes.
                2. Data extended from the paper's sample end to the latest available month.
                3. Results reported separately for the original sample and the post-sample period.
                4. A plain statement of whether the effect held, weakened or disappeared after publication.

                ## Notes
                Do not adjust anything after seeing the post-sample result. If you want to try variants, label them clearly as new research.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The frozen method is run on the post-sample period, with in-sample and post-sample results reported separately and a written conclusion."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Tag the replicated code version that will stay frozen"
                - "Extend the data from the paper's sample end to the latest month"
                - "Report in-sample and post-sample results in separate columns"
                - "Write a plain conclusion on whether the effect held after publication"
            - name: International sample test of a single-market result
              description: |-
                ## Purpose
                Many results were first shown in one large market, and whether they appear elsewhere is a direct test of whether they reflect something general. Running the frozen method on two or three other markets, with their own data quirks handled carefully, is a natural conceptual replication and a strong section in any write-up.

                ## Milestones
                1. Two or three markets chosen with enough history and liquid stocks.
                2. Local data issues such as currency, thin trading and accounting standards documented.
                3. The frozen method run on each market with consistent filters.
                4. Results compared with the original market in one table.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The frozen method is run on at least two other markets, with local data issues documented and results in one comparison table."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose two or three markets with enough history and data access"
                - "List the local data issues for each market"
                - "Run the frozen method on each market"
                - "Build one table comparing every market with the original"
            - name: Published anomaly net of realistic trading costs
              description: |-
                ## Purpose
                Academic returns are usually gross of costs, and anomalies concentrated in small, illiquid stocks or with high turnover can look very different after spreads and price impact. Applying a simple, documented cost estimate to the replicated portfolios shows how much of the paper's result an actual trader could have kept.

                ## Milestones
                1. Turnover of each replicated portfolio measured.
                2. A simple cost estimate chosen and documented, such as a spread proxy by size group.
                3. Net returns reported next to gross returns for each portfolio.
                4. A statement of how much of the gross result survives costs.

                ## Notes
                This is a research estimate, not a trading plan. A result that survives modelled costs still needs far more work before anyone should trade on it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Net and gross returns are reported side by side for the replicated portfolios using a documented cost estimate and measured turnover."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure monthly turnover for each replicated portfolio"
                - "Choose and document a simple cost estimate by size group"
                - "Report net returns next to gross returns"
                - "Write how much of the gross result survives costs"
            - name: Sensitivity grid on the paper's key choices
              description: |-
                ## Purpose
                A result that holds only under one breakpoint, one weighting scheme and one sample start is fragile. Declaring a small grid of reasonable alternatives in advance, running each once and reporting all of them shows how much the conclusion depends on choices the authors had to make, without turning the replication into a search for a better number.

                ## Milestones
                1. Three to five key choices listed with two or three reasonable alternatives each.
                2. The full grid written into the protocol before any run.
                3. Every grid cell run once and reported, including the unfavourable ones.
                4. A summary of which choices the conclusion depends on.

                ## Notes
                Keep the grid small and report every cell. A large grid with only the best cells shown is the opposite of what this project is for.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A pre-declared grid of alternative choices is run in full, every cell is reported and the dependent choices are named."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List three to five key choices and their reasonable alternatives"
                - "Write the full grid into the protocol before running it"
                - "Run every cell once and save all results"
                - "Summarise which choices the conclusion depends on"
            - name: Go or stop decision on further research
              description: |-
                ## Purpose
                A finished replication tempts you to keep going indefinitely. Deciding explicitly whether the result is worth taking into new research, given how it held out of sample, after costs and across the grid, closes the replication cleanly and either hands a documented starting point to your research process or frees the time.

                ## Milestones
                1. Evidence summarised: in-sample match, post-sample result, net of costs and sensitivity.
                2. Criteria for continuing written before the decision is made.
                3. A go, stop or park decision recorded with reasons.
                4. If go, a short handover note of what new research would test.

                ## Notes
                Stopping is a good outcome. Most published effects do not survive this kind of scrutiny well enough to justify more time.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated go, stop or park decision is recorded against criteria written in advance, with a handover note if the answer is go."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the criteria for continuing before reviewing the evidence"
                - "Summarise match quality, post-sample result, costs and sensitivity"
                - "Record a go, stop or park decision with reasons"
                - "Write a handover note if the decision is go"
            - name: Replication write-up of what held and what did not
              description: |-
                ## Purpose
                Without a write-up, a replication is a folder of scripts only you understand. A short paper that lays out the target, the protocol, matched and unmatched numbers, the discrepancy explanations and the out-of-sample result is useful to your future self, a supervisor, a hiring manager and anyone else replicating the same paper.

                ## Milestones
                1. An outline with sections for target, data, protocol, results, discrepancies and extensions.
                2. A side-by-side table of original and replicated numbers with status labels.
                3. Every protocol change and unresolved discrepancy reported.
                4. A full draft read by one reviewer and revised.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete write-up with a side-by-side results table, protocol changes and discrepancy explanations has been reviewed and revised."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Draft the outline with target, data, protocol, results and extensions sections"
                - "Build the side-by-side original and replicated results table"
                - "Ask the agent to summarise the discrepancy log into a first draft section"
                - "Send the full draft to one reviewer and revise from their comments"
            - name: Presenting a replication at a reading group
              description: |-
                ## Purpose
                Explaining a replication aloud to people who know the paper exposes weak spots faster than any amount of rereading. A 20-minute talk built around the side-by-side table and the biggest discrepancy gives the group something concrete to argue with and often produces the explanation you were missing.

                ## Milestones
                1. A slot booked at a reading group, seminar or study circle.
                2. Slides covering the claim, the side-by-side table, the largest discrepancy and the post-sample result.
                3. A practice run completed within the time limit.
                4. Questions and suggestions from the session written down with follow-up actions.

                ## Notes
                Lead with the biggest discrepancy. It is the part the audience can help with.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The replication is presented to a group and the questions raised are recorded with follow-up actions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the reading group organiser for a 20-minute slot"
                - "Build slides around the side-by-side table and largest discrepancy"
                - "Rehearse once with a timer"
                - "Write down every question and suggestion after the session"
            - name: Submitting a replication for publication
              description: |-
                ## Purpose
                Several journals now publish replication studies or comments, and some working paper series welcome them. Submitting a careful replication puts it on the record, tests it against referees and can be a real publication for a student or early-career researcher, as long as the write-up meets the outlet's specific rules.

                ## Milestones
                1. Two or three suitable outlets identified, with their replication policies read.
                2. The write-up reformatted to the chosen outlet's requirements.
                3. The replication package prepared to the outlet's code and data policy.
                4. The submission sent and the date recorded.

                ## Notes
                Check whether the original authors should be informed before submission; some outlets require it and it is courteous either way.
              priority: low
              deadlineOffsetDays: 210
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A replication is submitted to an outlet whose replication policy has been read, with the submission date recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Find two or three journals or series that publish replications"
                - "Read each outlet's replication and data availability policy"
                - "Reformat the write-up and package to the chosen outlet"
                - "Submit and record the date and manuscript number"
            - name: Public replication package release
              description: |-
                ## Purpose
                Releasing code lets others check and build on your work, but licensed data usually cannot be shared, and a careless release can breach a subscription agreement. Preparing a package with code, instructions for obtaining the data and outputs only where the licence allows makes the work verifiable without creating a licensing problem.

                ## Milestones
                1. Each data source's licence checked for what may be published.
                2. Licensed raw data removed and replaced with instructions for obtaining it.
                3. A readme covering environment, data access and the run order.
                4. The package published to a public repository with a citable identifier where available.

                ## Notes
                If in doubt about a licence, ask the data provider or your library before publishing. Derived summary tables are often allowed when raw data is not, but check.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A public package with code, a readme and data access instructions is released, with each licence checked and no restricted data included."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check each data licence for what may be published"
                - "Strip licensed raw data and write instructions for obtaining it"
                - "Write the readme covering environment, data access and run order"
                - "Publish the package and record its link or identifier"
                - "Test the published package on a clean machine @recurring(yearly)"
            - name: Replication as a portfolio piece for applications
              description: |-
                ## Purpose
                For quant research roles and doctoral applications, a replication that shows careful data work, honest reporting of mismatches and an out-of-sample test says more than a list of courses. Turning the write-up into a two-page summary with a link to the code gives interviewers something specific to ask about.

                ## Milestones
                1. A two-page summary with the question, method, side-by-side results and what you learned.
                2. A link to the public code or a description of how it can be shared on request.
                3. Your own contribution and any help received stated plainly.
                4. Three likely interview questions about the work answered in notes.

                ## Notes
                Start from the **Portfolio piece** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page replication summary with a code link and prepared answers to three likely interview questions exists."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a two-page summary of question, method, results and lessons"
                - "Add the code link or say how it can be shared"
                - "State your own contribution and any help received"
                - "Write answers to three questions an interviewer would likely ask"
            - name: Master's dissertation built on a replication
              description: |-
                ## Purpose
                Many master's students in quantitative finance write a dissertation that replicates a paper and then extends it. Planning the replication and the extension against the submission date, with the supervisor agreeing the scope early, avoids the common trap of running out of time while still trying to match Table 2.

                ## Milestones
                1. The paper and the extension agreed with your supervisor in writing.
                2. A timeline that finishes the replication with at least a third of the time left for the extension.
                3. The replication chapter drafted with the side-by-side table.
                4. The extension chapter and conclusions drafted before the final month.

                ## Notes
                Agree with your supervisor what counts as an acceptable replication if some numbers do not match. A well-documented partial match is usually acceptable.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Replication and extension chapters are drafted before the final month, against a scope agreed in writing with the supervisor."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Email your supervisor a one-paragraph proposal for paper and extension"
                - "Work back from the submission date to set replication and extension deadlines"
                - "Draft the replication chapter around the side-by-side table"
                - "Check progress against the dissertation timeline @recurring(monthly:3)"
                - "Send your supervisor a short written progress note @recurring(monthly:18)"
            - name: First-year doctoral replication assignment
              description: |-
                ## Purpose
                Doctoral programmes often set a replication in the first year to teach data handling and empirical judgement before students start their own research. Treating the assignment as practice for a research workflow, not just a grade, leaves you with reusable code, data skills and often the seed of a second-year paper.

                ## Milestones
                1. The assignment brief and marking expectations clarified with the instructor.
                2. Code structured so the data cleaning steps can be reused in later work.
                3. The replication submitted with a discrepancy section.
                4. A note of any idea from the replication worth developing as your own research.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "The assignment is submitted with a discrepancy section, reusable cleaning code and a written note on possible research ideas."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the instructor how much weight goes on matching versus explaining gaps"
                - "Write data cleaning steps as functions you can reuse"
                - "Add a discrepancy section before submitting"
                - "Write down any research idea the replication suggested"
            - name: Replication on a laptop with free data only
              description: |-
                ## Purpose
                Without a university subscription or a firm's data budget, you can still replicate a surprising amount using public factor libraries, free price histories and government data. Choosing a paper that fits those sources and being honest about what the substitute data cannot show turns a constraint into a well-scoped project.

                ## Milestones
                1. A paper chosen whose main result can be tested with public data.
                2. Each free source documented with its coverage, history and known biases such as survivorship.
                3. The result replicated or tested on the free data.
                4. Limits of the free data stated plainly in the write-up.

                ## Notes
                Free price histories often cover only stocks that still exist today. That survivorship gap can flatter any result, so say so explicitly.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A result is tested using public data only, with every source's coverage and biases documented in the write-up."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the free data sources you can actually reach"
                - "Pick a paper whose main test fits those sources"
                - "Document each source's coverage, history and known biases"
                - "Write a limits section on what the free data cannot show"
            - name: Team replication in a reading group
              description: |-
                ## Purpose
                Replicating a paper as a group of three or four spreads the data work and gives built-in review, but only if the division of labour and code conventions are agreed at the start. A shared repository, one owner per table and a fortnightly merge keep the group moving together instead of producing four incompatible versions.

                ## Milestones
                1. Roles agreed: one owner per table, one for data and one for the write-up.
                2. A shared repository with agreed conventions for names, branches and reviews.
                3. Each table reviewed by someone other than its owner before it counts as matched.
                4. A joint write-up with each member's contribution stated.

                ## Notes
                Agree authorship and credit at the start, especially if the work might be submitted or used in applications.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each table has a named owner and an independent reviewer, and a joint write-up states every member's contribution."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree table owners, a data owner and a write-up owner"
                - "Set up the shared repository with naming and review conventions"
                - "Merge work and review each other's tables @recurring(weekly:wed)"
                - "Agree authorship and credit in writing"
            - name: Replicating a paper for an investment committee note
              description: |-
                ## Purpose
                Researchers at funds are often asked whether a newly circulated paper deserves attention. Replicating its core result with the firm's data, under its research and compliance rules, and summarising it in a short note gives the committee evidence rather than an abstract, and should say plainly how much survived costs and post-sample testing.

                ## Milestones
                1. The question the committee wants answered agreed in one sentence.
                2. The core result replicated with approved data and within internal research rules.
                3. Post-sample and net of cost results added.
                4. A two-page note delivered with a clear recommendation on further research or none.

                ## Notes
                Follow your firm's data, research and compliance policies. Keep the note on your firm's systems, never in a personal repository.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A two-page note on the paper's core result, including post-sample and net of cost figures, is delivered to the committee."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree with the requester the one question the note must answer"
                - "Check which internal data and tools you may use for the work"
                - "Replicate the core result and add post-sample and net of cost figures"
                - "Deliver a two-page note with a recommendation on further research"
            - name: Supervising a student replication
              description: |-
                ## Purpose
                Supervisors and teaching assistants who set replications see the same problems every year: papers that are too hard, data access discovered late and students who hide mismatches. A simple structure of paper approval, a protocol check-in and a discrepancy review at fixed points lets students learn the method and gives you something consistent to assess.

                ## Milestones
                1. A list of suitable papers with known data availability prepared for students.
                2. Checkpoints set for paper choice, protocol and first matched table.
                3. Students required to report mismatches openly, with credit given for good explanations.
                4. A short rubric for assessing replication quality shared at the start.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A paper list, three checkpoints and a rubric that rewards documented mismatches are shared with students at the start of term."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Prepare a list of papers with data you know students can access"
                - "Set dates for paper choice, protocol and first matched table"
                - "Write a rubric that rewards clear explanations of mismatches"
                - "Share the list, dates and rubric at the start of term"
            - name: Restarting a stalled replication
              description: |-
                ## Purpose
                Replications stall for ordinary reasons: a busy term, a data problem nobody could solve or a number that would not match. Coming back months later needs a deliberate restart, rebuilding the environment, rerunning from raw data and reading the discrepancy log, before deciding whether to continue, narrow the scope or write up what you have.

                ## Milestones
                1. The environment rebuilt and the pipeline rerun from raw data.
                2. The discrepancy log and last session notes read in full.
                3. A decision made to continue, narrow the scope or write up as it stands.
                4. A new short timeline set if continuing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "The pipeline reruns from raw data after the break and a dated decision to continue, narrow or write up is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Rebuild the environment from the lock file and rerun everything"
                - "Read the discrepancy log and the last session notes"
                - "Decide whether to continue, narrow the scope or write up now"
                - "Set a short new timeline if you continue"
            - name: Replicating a machine learning return prediction paper
              description: |-
                ## Purpose
                Machine learning asset pricing papers add their own replication problems: hundreds of input features, hyperparameter searches, random seeds and training windows that are rarely fully specified. Replicating one carefully, with seeds fixed and the full search recorded, shows how much of the reported performance depends on choices outside the paper's main text.

                ## Milestones
                1. The feature set rebuilt and its coverage compared with the paper's.
                2. Training, validation and test windows matched to the paper's description.
                3. Results reported across several random seeds, not just one.
                4. Out-of-sample performance compared with a simple linear benchmark.

                ## Notes
                Report the spread across seeds. A model whose ranking changes with the seed is telling you how much of the result is noise.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The paper's main out-of-sample result is replicated across at least five seeds and compared with a linear benchmark."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List every feature the paper uses and check which you can build"
                - "Match the training, validation and test windows"
                - "Run the main model across at least five random seeds"
                - "Compare results with a simple linear benchmark on the same windows"
            - name: Replicating a high-frequency result with tick data
              description: |-
                ## Purpose
                Papers built on intraday data depend on cleaning rules, time stamp precision, trade signing and the venue mix, and these change across years as markets fragment. Replicating one intraday result shows how sensitive such findings are to cleaning choices and data vintage, and whether they hold in more recent market structure.

                ## Milestones
                1. The paper's cleaning rules applied and the number of records removed at each step reported.
                2. Trade signing or quote matching method matched to the paper's.
                3. The main result reproduced on the paper's period.
                4. The same method run on a recent period and the difference explained.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One intraday result is reproduced with documented cleaning steps and rerun on a recent period with differences explained."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write down the paper's cleaning rules step by step"
                - "Apply them and report records removed at each step"
                - "Match the trade signing method the paper uses"
                - "Run the same method on a recent period and compare"
            - name: Replicating an option-implied information paper
              description: |-
                ## Purpose
                Papers using implied volatility, skew or option volume depend on option data filters, interpolation of the surface and how stale or wide quotes are removed. Replicating one shows how much those preparation steps drive the result and builds the data handling skills needed for any derivatives-based empirical work.

                ## Milestones
                1. Option data filters such as minimum price, maturity range and quote width applied as described.
                2. The implied measure rebuilt and compared with any published summary statistics.
                3. The main predictive or pricing result reproduced.
                4. The effect of two alternative filter choices recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An option-implied measure is rebuilt and the paper's main result reproduced, with the effect of two filter alternatives recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the option filters the paper applies"
                - "Rebuild the implied measure and compare its summary statistics"
                - "Reproduce the paper's main result"
                - "Test two alternative filter choices and record the effect"
            - name: Post-publication decay study across replicated anomalies
              description: |-
                ## Purpose
                After several replications you hold something more valuable than any one of them: a consistent set of results before and after publication. Pooling them in one study of how effects changed after their sample end and after publication adds your own evidence to a well-known question and sharpens your priors for every new paper.

                ## Milestones
                1. At least five replicated effects collected with consistent in-sample and post-sample returns.
                2. Sample end and publication dates recorded for each.
                3. Average change after sample end and after publication estimated.
                4. A short note comparing your findings with published decay studies.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least five replicated effects are pooled with dated pre and post-publication returns and an estimated average change."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect in-sample and post-sample returns from your past replications"
                - "Record each paper's sample end and publication date"
                - "Estimate the average change after sample end and after publication"
                - "Compare your estimate with published decay studies"
                - "Add each newly finished replication to the pooled dataset @recurring(quarterly)"
            - name: Writing a comment on a result that did not replicate
              description: |-
                ## Purpose
                Occasionally a careful replication finds a real error or a result that depends on a choice the paper did not disclose. Writing that up as a formal comment is serious work: it needs exhaustive checks, a fair account of the original and contact with the authors first, so that the record is corrected without anyone being treated unfairly.

                ## Milestones
                1. Every alternative explanation in the discrepancy log ruled out or reported.
                2. The finding confirmed by an independent rerun or a second person.
                3. The original authors contacted with your findings and given time to respond.
                4. A comment drafted that states the original claim fairly and reports your evidence precisely.

                ## Notes
                Talk to a supervisor or senior colleague before sending anything. Tone matters as much as evidence; most errors are honest.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A comment draft exists after an independent rerun and contact with the original authors, with every alternative explanation addressed."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Review every open entry in the discrepancy log for alternative explanations"
                - "Ask a second person to rerun the key result independently"
                - "Discuss the finding with a supervisor or senior colleague"
                - "Write to the original authors with your evidence before drafting the comment"
---

# Paper Replication

This area is for students and researchers who want to rebuild a published finance result from the raw data and find out whether it really stands. It starts with foundations (choosing the paper, extracting every number you will try to match, mapping the data and writing a protocol with tolerances), moves through the standing machinery of work sessions, discrepancy logs and data vintages, then the techniques papers rarely spell out (portfolio sorts, Fama-MacBeth inference, accounting lags, delisting returns), the decisions about extending a result, the write-ups and talks, situations from a master's dissertation to a firm's investment committee, and finally specialist replications of machine learning, high-frequency and option-implied papers.

The rhythms are a weekly replication session and discrepancy review, a monthly reading pipeline refill and peer check, and quarterly reruns when data vintages change. The Reading queue, Meeting notes and Portfolio piece templates pair with the candidate list, review sessions and the finished write-up. Nothing here is trading advice: published anomalies weaken after publication and most strategies fail out of sample, which is exactly what a careful replication is built to find out. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
