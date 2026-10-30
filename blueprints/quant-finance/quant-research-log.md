---
id: quant-finance.quant-research-log
name: Quant Research Log
description: "A research log that holds up: one entry format, IDs for ideas and runs, data and code versions beside every result, decision records, and the weekly, monthly and quarterly reviews that keep it searchable and repeatable."
category: business
version: 1.0.0
tags: [quant-finance, quant-research-log, researcher, research-log, lab-notebook, reproducibility, provenance, documentation]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - meeting-notes
    - onboarding-30-60-90
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Quant Research Log
          description: "Keeping a record of every idea and test: hypotheses, data versions, results, dead ends and decisions, so the work can be reviewed and repeated."
          projects:
            - name: Choosing the tool for your research log
              description: |-
                ## Purpose
                Research notes scattered across notebooks, chat threads and a paper pad cannot be searched, linked or backed up together. Picking one home for the log, whether a plain text folder under version control, a wiki or an electronic lab notebook, decides how easily you can find a result from last spring and how much friction each entry costs. Settle it once, against criteria you write down first, so you are not migrating every few months.

                ## Milestones
                1. Five criteria written down: full-text search, version history, linking to code and files, offline access and export to an open format.
                2. Three candidate tools tried for one real entry each.
                3. One tool chosen, with the reason and the rejected options recorded.
                4. Your employer's rules on where research notes may be stored checked against the choice.

                ## Notes
                Start from the **Purchase decision** template. Prefer a tool that exports to plain text or Markdown: a log you cannot get out of a product will eventually be lost with it.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One research log tool is chosen against five written criteria, with the rejected options and the employer storage check recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the five criteria your log tool must meet"
                - "Try three candidate tools by writing one real entry in each"
                - "Check with your manager or compliance where research notes may be stored"
                - "Record the chosen tool, the reason and the options you rejected"
            - name: Standard entry template for research log entries
              description: |-
                ## Purpose
                Entries written from a blank page drift: one has the hypothesis but no data version, the next has a chart with no conclusion. A short fixed template, with question, setup, data and code references, result, interpretation and next step, makes every entry complete by default and makes old entries readable at a glance.

                ## Milestones
                1. A template with no more than eight headed fields, each with a one-line prompt.
                2. Required and optional fields marked, so a two-minute entry is still valid.
                3. The template used for ten consecutive entries without skipping a required field.
                4. One change made to the template after those ten entries, with the reason noted.

                ## Notes
                Keep the template short enough to fill in at the end of a tired day. If a field is empty in most entries, drop it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated entry template of eight fields or fewer has been used for ten consecutive log entries with every required field filled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the template fields: question, setup, data, code, result, interpretation, next step"
                - "Mark which fields are required for every entry"
                - "Save the template where a new entry can be started in one click"
                - "Review the first ten entries and adjust one field that did not work"
            - name: Identifier scheme for ideas, experiments and runs
              description: |-
                ## Purpose
                Without stable IDs, "the momentum test from March" could mean any of six runs, and a chart in a slide cannot be traced back to anything. A simple scheme with an idea ID, an experiment ID under it and a run ID for each execution lets every number, figure and decision point to exactly one source.

                ## Milestones
                1. A written format for idea, experiment and run IDs, short enough to type in a filename.
                2. IDs that sort by date and never get reused, even after a run is deleted.
                3. Run IDs stamped automatically into output files and figure footers.
                4. Every entry from the last month relabelled with the new IDs.

                ## Notes
                A date prefix plus a short counter, such as 2026-03-014, works well and needs no central service. Never encode results or status in the ID: those change, IDs must not.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written ID scheme is in use and every run from the last month carries a unique run ID in its log entry and output files."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the format for idea, experiment and run IDs on one page"
                - "Add a helper that generates the next run ID and writes it into outputs"
                - "Relabel last month's entries and result folders with the new IDs"
                - "Put the run ID in the footer of every saved figure"
            - name: Data version recorded beside every result
              description: |-
                ## Purpose
                Sharpe ratios mean little if you cannot say which vendor file, which snapshot date and which universe filter produced it, and vendors restate history more often than most researchers notice. Recording the data version in every entry is what lets a result be repeated, or a change in it explained, after the data has moved on.

                ## Milestones
                1. A list of every data source the research uses, each with how its version is identified.
                2. A data version field in the entry template, filled for every result.
                3. Snapshot dates or file hashes written automatically by the research code.
                4. One old result traced back to its exact data version as a test.

                ## Notes
                A vendor name is not a version. Record the snapshot date, file hash or database tag, plus any filters applied before the test.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every log entry with a result from the last 30 days names the exact data snapshot or hash used, and one older result has been traced to its data version."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every data source you used in the last three months"
                - "Note how each source's version can be identified: snapshot date, hash or tag"
                - "Make the research code print the data version into its output"
                - "Trace one result from last quarter back to its exact data snapshot"
            - name: Code commit and environment captured with each run
              description: |-
                ## Purpose
                Results produced from uncommitted notebook cells cannot be reproduced, and a library upgrade can quietly change a number by a few basis points. Capturing the commit hash, a dirty flag and the package versions with every run takes seconds once automated and saves days when a result has to be defended.

                ## Milestones
                1. Every run writes its commit hash, a flag for uncommitted changes and the main package versions.
                2. Runs from a dirty working tree marked as exploratory in the log.
                3. An environment file saved for each major research line.
                4. One past run re-executed from its recorded commit and environment.

                ## Notes
                Agree with yourself that a result from a dirty tree can be logged but never quoted.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each run from the last two weeks has a commit hash, dirty flag and package versions in its log entry, and one past run has been re-executed from that record."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Add a function that records commit hash, dirty flag and package versions"
                - "Call it at the start of every research script and notebook"
                - "Mark runs from uncommitted code as exploratory in their entries"
                - "Re-run one recent result from its recorded commit and compare the numbers"
            - name: Backfilling the log from scattered notes
              description: |-
                ## Purpose
                Most researchers starting a proper log already have a year of work in notebooks, emails and slide decks, and the useful conclusions in there are slowly being forgotten. A short, bounded backfill pulls the important threads into the new log, with honest notes on what can no longer be reproduced, instead of trying to rebuild everything.

                ## Milestones
                1. An inventory of where past research notes live, with a rough count of threads.
                2. The ten most important past threads given one summary entry each in the new format.
                3. Each backfilled entry marked with what is reproducible and what is reconstructed from memory.
                4. Old notes left in place with a pointer from the log, not deleted.

                ## Notes
                Set a hard limit, such as ten threads or eight hours. A backfill that tries to be complete never finishes.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten past research threads have summary entries in the new log, each marked as reproducible or reconstructed, within the eight-hour budget."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every place your past research notes are kept"
                - "Pick the ten past threads you are most likely to be asked about"
                - "Write one summary entry per thread, marking what is reconstructed"
                - "Add a pointer from each entry to the original notes"
            - name: Tag vocabulary for searching the log
              description: |-
                ## Purpose
                Free-form tags turn into "mom", "momentum" and "tsmom" for the same thing within a month, and search stops working. A controlled list of perhaps thirty tags covering asset class, signal family, data source and entry type keeps the log searchable as it grows past a few hundred entries.

                ## Milestones
                1. A tag list of thirty or fewer, grouped by asset class, signal family, data source and entry type.
                2. Each tag defined in one line, with synonyms that should map to it.
                3. Existing entries retagged to the controlled list.
                4. A quarterly check that merges stray tags back into the list.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of no more than thirty defined tags is in use and no entry in the log carries a tag outside it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export every tag currently used in the log with its count"
                - "Group them into asset class, signal family, data source and entry type"
                - "Write a one-line definition for each kept tag and retag the rest"
                - "Merge stray tags back into the controlled list @recurring(quarterly)"
            - name: Decision record format for research calls
              description: |-
                ## Purpose
                Six months on, nobody remembers why a signal was shelved, why the universe excluded small caps or who agreed the cost assumption. A one-paragraph decision record, with the question, options, evidence by run ID, the call, who made it and when to revisit, turns verbal agreements into something reviewable.

                ## Milestones
                1. A decision record format with question, options, evidence, decision, owner and revisit date.
                2. Decision records filed in the log with their own entry type and tag.
                3. The last five significant research calls written up retrospectively.
                4. A monthly look at decisions whose revisit date has passed.

                ## Notes
                Evidence should cite run IDs, not describe charts from memory. A decision with no evidence cited is still worth recording, as long as it says so.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five research decisions are recorded in the log in the standard format, each citing run IDs and carrying a revisit date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the decision record format as a six-field block"
                - "Write up the last five research calls you made or agreed to"
                - "Link each decision to the run IDs it relied on"
                - "Review decisions whose revisit date has passed @recurring(monthly:27)"
            - name: Storage, backup and access rules for the log
              description: |-
                ## Purpose
                Kept on one laptop, a research log is one spilled coffee from gone, and a log in the wrong place can breach an employer's information policy. Writing down where it lives, who can read it, how it is backed up and how long it is kept protects both the work and you.

                ## Milestones
                1. The log's storage location confirmed as approved for research material.
                2. Read and write access listed by person or group.
                3. An automatic backup to a second location running daily.
                4. Retention expectations from your employer or your own policy written at the top of the log.

                ## Notes
                At a firm, the log is almost always firm property. Keep it on firm systems, and never copy it to personal storage.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The log sits in an approved location with a written access list, a daily automatic backup and a stated retention rule."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm with IT or compliance that the log location is approved"
                - "List who has read and write access to the log"
                - "Set up an automatic daily backup to a second location"
                - "Write the access and retention rules at the top of the log"
            - name: Results folder layout linked from the log
              description: |-
                ## Purpose
                Entries that say "see chart" without a path are dead links waiting to happen. A fixed folder layout keyed by run ID, with figures, tables and raw outputs in predictable places, means every entry can point to its evidence and every file can be traced back to its entry.

                ## Milestones
                1. One folder per run ID holding figures, tables, parameters and a short readme.
                2. Every log entry linking to its run folder by relative path.
                3. Large raw outputs stored separately with a pointer from the run folder.
                4. Orphaned result folders from the last quarter matched to entries or archived.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every run from the last month has a folder named by its run ID, linked from its log entry, and no unexplained result folders remain."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the folder layout for a single run on half a page"
                - "Make the research code create the run folder and readme automatically"
                - "Link each recent entry to its run folder"
                - "Match or archive result folders that have no log entry"
            - name: End-of-session log entry habit
              description: |-
                ## Purpose
                Most lost research is lost in the gap between finishing a run and the next morning, when the reasoning has already faded. Five minutes at the end of every research session, writing what you ran, what you saw and what you will try next, is the single habit that makes the rest of the log work.

                ## Milestones
                1. A fixed point in the day, such as before closing the laptop, for the entry.
                2. An entry written on at least four of every five research days for a month.
                3. Each entry ending with a concrete next step.
                4. Missed days counted in the weekly review without guilt or backfilling from memory.

                ## Notes
                Start from the **Metrics log** template to tally days logged. A three-line entry written today beats a perfect one written on Friday.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Log entries exist for at least 80 percent of research days over a rolling four-week window, each ending with a next step."
                cadence: rolling
              tasks:
                - "Choose the moment in your day when the entry gets written"
                - "Write what you ran, what you saw and the next step @recurring(daily)"
                - "Count logged and missed research days in the weekly review"
                - "Set a calendar reminder fifteen minutes before your usual finish"
            - name: Weekly log review and open-question sweep
              description: |-
                ## Purpose
                Entries written in a hurry leave loose ends: a puzzling number, a check promised and never done, a result waiting for a decision. Thirty minutes each Friday reading the week's entries catches those while you still remember the context, and turns the log from a diary into a working tool.

                ## Milestones
                1. A thirty-minute slot booked at the end of each research week.
                2. Each week's entries reread, with missing fields filled while memory is fresh.
                3. Open questions moved to the open questions list with an owner.
                4. A three-line weekly summary entry written.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly summary entry exists for each of the last eight research weeks, with open questions transferred to the open questions list."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute review slot at the end of the week"
                - "Reread the week's entries and write a three-line summary @recurring(weekly:fri)"
                - "Fill any missing data or code version fields while you still remember"
                - "Move unresolved questions to the open questions list"
            - name: Monthly index page for the log
              description: |-
                ## Purpose
                After a year the log holds hundreds of entries, and scrolling is no way to find the thread that matters. A monthly index page listing the threads touched, the key results by run ID and the decisions made gives a table of contents that a reviewer or new colleague can read in five minutes.

                ## Milestones
                1. One index page per month with threads, key results and decisions.
                2. Each line linking to the relevant entries and run IDs.
                3. Threads that went quiet that month marked as paused or stopped.
                4. Twelve monthly pages rolled into the yearly archive.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An index page exists for each of the last three months, listing every active thread, its key run IDs and any decisions taken."
                cadence: rolling
              tasks:
                - "Create the index page format with threads, results and decisions"
                - "Write last month's index page from the weekly summaries @recurring(monthly:3)"
                - "Mark each quiet thread as paused or stopped"
                - "Link every line on the index to its entries"
            - name: Quarterly reproducibility spot check
              description: |-
                ## Purpose
                A log can look complete and still fail the one test that counts: can a result be rebuilt from what is written? Once a quarter, pick two results at random and try to reproduce them using only the log, the recorded data version and the recorded commit. The gaps you find tell you exactly which field or habit to fix.

                ## Milestones
                1. Two results chosen at random from the quarter's entries.
                2. Each rerun from the recorded data and code alone, without asking anyone.
                3. Differences in the numbers explained or recorded as unexplained.
                4. One fix to the template or tooling made from what failed.

                ## Notes
                Choose at random, not the results you are proudest of. A log that only reproduces its favourite results is not reproducible.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter two randomly chosen results are rerun from the log alone, with matching numbers or an explained difference recorded."
                cadence: cyclic
              tasks:
                - "Pick two run IDs at random from the last quarter's entries"
                - "Rerun both from the recorded data version and commit @recurring(quarterly)"
                - "Record whether the numbers matched and explain any difference"
                - "Change one field or tool to close the biggest gap found"
            - name: Open questions list kept with the log
              description: |-
                ## Purpose
                Every research week throws up questions that are not worth answering today but will bite later: why the signal weakens in one sector, whether a data gap in 2011 matters. A single dated list of open questions, each linked to the entry that raised it, stops them vanishing into old entries.

                ## Milestones
                1. One open questions page, each item dated and linked to its source entry.
                2. Each question given an owner and a rough size.
                3. Answered questions closed with a link to the answering entry.
                4. Questions older than six months either answered, reworded or dropped with a reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The open questions list has no item older than six months without a recorded decision, and every closed item links to its answer."
                cadence: rolling
              tasks:
                - "Create the open questions page with date, source entry, owner and size"
                - "Pick one open question to work on this week @recurring(weekly:tue)"
                - "Close answered questions with a link to the answering entry"
                - "Drop or reword questions older than six months with a reason"
            - name: Experiment status board drawn from the log
              description: |-
                ## Purpose
                When several threads run at once, it is easy to lose track of which tests are queued, running, waiting for review or finished. A small board with one line per experiment, its ID and its status, updated from the log each Monday, shows the state of the research at a glance and makes standups shorter.

                ## Milestones
                1. A board with columns for queued, running, in review, done and stopped.
                2. Every experiment ID in the log on the board exactly once.
                3. Status changes reflected in a log entry, not only on the board.
                4. Experiments stuck in one column for over a month flagged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The status board lists every open experiment ID with a status that matches its latest log entry, checked each Monday."
                cadence: rolling
              tasks:
                - "Set up the board with queued, running, in review, done and stopped"
                - "Add every open experiment ID from the log"
                - "Update the board from the last week's entries @recurring(weekly:mon)"
                - "Flag any experiment that has sat in one column for a month"
            - name: Monthly backup restore test
              description: |-
                ## Purpose
                Untested backups are a hope, not a safeguard. Restoring the log and one recent run folder to a scratch location once a month proves the copy is complete and readable, and catches a broken sync job before it costs a year of notes.

                ## Milestones
                1. A scratch location where the restore can be tested safely.
                2. The full log and one run folder restored and opened.
                3. The newest entry in the restore compared with the live log.
                4. Each test result written in one line in the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A restore test is recorded each month, with the restored copy's newest entry no more than one day behind the live log."
                cadence: rolling
              tasks:
                - "Choose a scratch location for restore tests"
                - "Restore the log and one run folder and open both @recurring(monthly:19)"
                - "Compare the newest restored entry with the live log"
                - "Fix the backup job the same day if the restore was incomplete"
            - name: Monthly hygiene pass on incomplete entries
              description: |-
                ## Purpose
                Even with a template, some entries end up with no data version, no conclusion or a broken link to a figure. A short monthly pass that lists incomplete entries and fixes what can still be fixed keeps the log's quality from eroding quietly, and shows which fields are routinely skipped.

                ## Milestones
                1. A simple query or checklist that finds entries missing required fields.
                2. Incomplete entries from the last month fixed or marked as unrecoverable.
                3. Broken links to run folders repaired.
                4. The most often skipped field noted for the next template review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's hygiene pass leaves no entry from the previous month with a missing required field that is not marked unrecoverable."
                cadence: rolling
              tasks:
                - "Write a query or checklist that flags missing required fields"
                - "Fix or mark last month's incomplete entries @recurring(monthly:11)"
                - "Repair broken links to figures and run folders"
                - "Note which field was skipped most often this month"
            - name: Quarterly read-back of old entries
              description: |-
                ## Purpose
                Ideas dropped for lack of data, time or a tool often become workable a year later, and old conclusions sometimes look wrong in the light of newer results. Rereading one older quarter of the log every three months resurfaces those threads and checks whether past interpretations still stand.

                ## Milestones
                1. One past quarter's entries reread in a single sitting.
                2. Conclusions that no longer hold marked with a dated note, not edited away.
                3. Up to three dropped ideas added back to the open questions list.
                4. A short read-back entry recording what was found.

                ## Notes
                Never rewrite an old entry to match what you now believe. Add a dated note beneath it, so the record of what you thought at the time survives.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A read-back entry is written each quarter, covering one older quarter, with any superseded conclusions annotated in place."
                cadence: cyclic
              tasks:
                - "Choose the oldest quarter you have not yet reread"
                - "Reread that quarter and annotate superseded conclusions @recurring(quarterly)"
                - "Add up to three revived ideas to the open questions list"
                - "Write a read-back entry summarising what you found"
            - name: Yearly log archive and new volume
              description: |-
                ## Purpose
                Log files or wiki spaces that grow for five years become slow to search and hard to export. Closing each year as a read-only volume, with its index and a checksum, and starting a fresh volume keeps the working log fast while the history stays intact and findable.

                ## Milestones
                1. The year's entries, indexes and run folder pointers frozen as a read-only volume.
                2. A checksum or export of the volume stored with the backups.
                3. Open threads and questions carried into the new volume with links back.
                4. The archive's location recorded at the top of the new volume.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each completed year exists as a read-only log volume with an export and checksum, and the new volume links back to it."
                cadence: cyclic
              tasks:
                - "Decide the date each year when the log volume closes"
                - "Freeze the year's volume and store its export and checksum @recurring(yearly)"
                - "Carry open threads and questions into the new volume"
                - "Write the archive location at the top of the new volume"
            - name: Writing entries a colleague can follow
              description: |-
                ## Purpose
                An entry that reads "tried the fix, better" is useful to nobody, including you in three months. Learning to write short entries that state the question, the exact change, the comparison and the conclusion in plain sentences is a skill, and it improves fastest by having someone else try to follow your entries cold.

                ## Milestones
                1. Five recent entries rewritten so each states question, change, comparison and conclusion.
                2. A colleague asked to follow two entries without any explanation from you.
                3. Every point where they got stuck noted and fixed.
                4. Three personal writing rules for entries written at the top of the log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A colleague has followed two entries without help, and three written entry rules based on their feedback sit at the top of the log."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick five recent entries and rewrite them with an explicit question and conclusion"
                - "Ask a colleague to follow two entries without your help"
                - "Note every place they got stuck and fix it"
                - "Write three rules for your own entries at the top of the log"
            - name: Recording null and negative results in full
              description: |-
                ## Purpose
                Failed tests are the bulk of quant research, and they are the entries most often skipped or written as a single line. A null result written with the same care as a success, with the setup, data, cost assumptions and the size of the effect that was ruled out, stops you and your colleagues rerunning the same dead idea next year.

                ## Milestones
                1. A short addition to the template for null results: what effect size was ruled out and under what setup.
                2. Every failed test in the last month written up to that standard.
                3. Null results tagged so a search for a signal family returns them.
                4. One idea you were about to retest found already logged as a null result.

                ## Notes
                Say what the test could and could not detect. A null on two years of daily data rules out far less than a null on twenty.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every failed test from the last month has a full entry stating setup, data version and the effect size ruled out, tagged as a null result."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add a null result section to the entry template"
                - "Rewrite last month's failed tests to the new standard"
                - "Tag every null result so it appears in signal family searches"
                - "Search the log for nulls before starting your next new test"
            - name: Figures and tables that make sense months later
              description: |-
                ## Purpose
                Cumulative return charts with no axis units, no cost assumption and no run ID are uninterpretable by the time anyone looks at them again. A small set of conventions for log figures and tables, with titles, units, sample period, cost setting and run ID on every one, makes the visual evidence in the log trustworthy.

                ## Milestones
                1. A one-page figure convention covering title, units, sample period, costs and run ID.
                2. A plotting helper that applies the convention by default.
                3. Every figure in the last month's entries checked against the convention.
                4. Tables saved as data files alongside the images, not only as screenshots.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A written figure convention exists, a plotting helper applies it, and every figure in the last month's entries shows sample period, cost setting and run ID."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the figure convention on one page"
                - "Build a plotting helper that stamps sample period, costs and run ID"
                - "Check last month's figures against the convention"
                - "Save each logged table as a data file next to its image"
            - name: Recording uncertainty alongside every number
              description: |-
                ## Purpose
                A Sharpe ratio of 1.2 on four years of data and one on twenty years are very different claims, yet both look the same in a log. Getting into the habit of writing the sample length, the number of variants tried and a standard error or interval beside headline numbers keeps the log honest about how much any one result can bear.

                ## Milestones
                1. A convention for reporting a headline number with sample length and an interval.
                2. The number of variants tried in the thread recorded beside each headline result.
                3. Ten recent headline results restated with their uncertainty.
                4. A note at the top of the log explaining the convention to readers.

                ## Notes
                This is about recording, not testing. Counting trials and deflating results properly belongs to your overfitting controls; the log just has to carry the numbers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten recent headline results in the log carry sample length, variant count and an interval, following a written convention."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the convention for reporting headline numbers with uncertainty"
                - "Restate ten recent headline results with sample length and an interval"
                - "Add the variant count to each of those entries"
                - "Explain the convention in a short note at the top of the log"
            - name: Lab notebook practice from experimental science
              description: |-
                ## Purpose
                Laboratory scientists have kept dated, append-only notebooks for generations because patents, audits and replication depend on them. Reading a short guide to good notebook practice and adopting three of its rules, such as never deleting, dating every correction and recording the plan before the result, gives your log the same standing.

                ## Milestones
                1. One guide to laboratory or electronic notebook practice read.
                2. Three rules adopted and written into the log's front page.
                3. Corrections made as dated additions, never silent edits, for a month.
                4. A short entry comparing your log with the practices in the guide.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three notebook practice rules from a named guide are written into the log, and a month of corrections follow the dated-addition rule."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find a published guide to laboratory or electronic notebook practice"
                - "Read it and pick three rules that fit quant research"
                - "Write those rules on the front page of your log"
                - "Make every correction this month as a dated addition"
            - name: Writing down why each parameter was chosen
              description: |-
                ## Purpose
                Lookback windows, thresholds and rebalancing days are where research quietly bends to fit the data, and the reason for each choice is gone within weeks. Recording, at the time, why a parameter has the value it does, whether from theory, convention, a prior paper or a sweep, makes later review of the research far more honest.

                ## Milestones
                1. A parameter table in each experiment entry with value, source of the choice and date.
                2. Choices made after looking at results clearly marked as such.
                3. Parameter tables written for the three active research threads.
                4. One reviewer able to tell from the table which parameters were fitted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each active research thread has a parameter table stating the value, reason and date for every parameter, with post-result choices marked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add a parameter table to the experiment entry template"
                - "Fill it for the three active research threads"
                - "Mark every parameter that was set after seeing results"
                - "Ask a reviewer whether the table shows which values were fitted"
            - name: Logging conversations and verbal agreements
              description: |-
                ## Purpose
                Some of the most consequential research choices are made in corridor chats and quick calls with a portfolio manager or data engineer, and none of it is written anywhere. A habit of a short dated note after each such conversation, linked to the thread it affects, keeps the log complete and avoids later disagreements about what was agreed.

                ## Milestones
                1. A short conversation note format: who, date, thread, what was said, what was agreed.
                2. Notes written within a day for every research conversation that changed a plan.
                3. Each note linked from the affected thread's entries.
                4. Agreements that need confirming sent back to the other person in writing.

                ## Notes
                Start from the **Meeting notes** template for longer sessions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every research conversation that changed a plan in the last month has a dated note in the log linked to the affected thread."
                cadence: rolling
              tasks:
                - "Create the conversation note format in the log"
                - "Write up any research conversations from the past week @recurring(weekly:thu)"
                - "Link each note from the thread it affects"
                - "Confirm in writing any agreement that changes a test or data choice"
            - name: Thread summary for a research line
              description: |-
                ## Purpose
                Research lines that have run for three months can hold forty entries, and nobody will read forty entries before a review. A two-page summary that walks through the question, what was tried, what failed, what held up and what is still open, with run IDs throughout, is the bridge between the raw log and any meeting or write-up.

                ## Milestones
                1. One active thread chosen and every entry in it gathered.
                2. A first draft of the summary produced from the entries.
                3. Every claim in the summary checked against the run ID it cites.
                4. The summary filed in the log and linked from the thread's entries.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page summary of one research thread is in the log, with every claim checked against a cited run ID."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather every entry for one active research thread"
                - "Ask the agent to draft a two-page summary from those entries"
                - "Check every claim in the draft against the run ID it cites"
                - "File the summary and link it from the thread's entries"
            - name: Audit of the log against three months of work
              description: |-
                ## Purpose
                Before tuning the log, find out how far it actually matches what you did. Comparing three months of commits, job runs and calendar entries with the log shows which work never reached it, which entries are thin, and where the effort of logging should go next.

                ## Milestones
                1. A list of research activity from commits, job history and calendar for three months.
                2. Each activity matched to a log entry or marked as missing.
                3. A percentage of activity covered by the log.
                4. Three fixes chosen from the biggest gaps.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written audit states the share of three months of research activity covered by the log and names three fixes for the largest gaps."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export three months of commits and job run history"
                - "Match each piece of activity to a log entry or mark it missing"
                - "Work out the share of activity the log covers"
                - "Choose three fixes for the biggest gaps"
            - name: Automatic capture of run metadata into the log
              description: |-
                ## Purpose
                Every field typed by hand is a field that will be skipped on a busy day. Having each run write its ID, start time, data version, commit, parameters and headline metrics straight into a draft log entry leaves you only the parts a machine cannot write: the question and the interpretation.

                ## Milestones
                1. A run hook that writes a draft entry with ID, time, data version, commit and parameters.
                2. Headline metrics appended to the draft when the run finishes.
                3. Draft entries clearly marked until a human adds the interpretation.
                4. Manual typing per entry cut to the question, interpretation and next step.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every research run now creates a draft log entry with ID, data version, commit, parameters and headline metrics without manual typing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the fields a run can fill in by itself"
                - "Write a run hook that creates a draft entry with those fields"
                - "Append headline metrics to the draft when the run ends"
                - "Mark drafts until the interpretation has been written"
            - name: Linking log entries to code reviews and tickets
              description: |-
                ## Purpose
                The log says why, the code review says what changed, and a ticket says who asked for it, yet the three rarely point to each other. Two-way links between entries, pull requests and tickets mean a reviewer of code can find the research reason, and a reader of the log can see the exact change.

                ## Milestones
                1. A convention for citing run IDs in commit messages and pull requests.
                2. Log entries linking to the pull requests they depend on.
                3. Tickets for research requests linking to the thread's entries.
                4. Ten recent changes checked for links in both directions.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten recent research code changes link to their log entries and the entries link back, following a written convention."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the convention for citing run IDs in commits and pull requests"
                - "Add pull request links to entries from the last month"
                - "Link open research tickets to their threads in the log"
                - "Check ten recent changes for links both ways"
            - name: Five-minute search test for past results
              description: |-
                ## Purpose
                The real measure of a log is whether you can find a result when someone asks for it in a meeting. Setting yourself ten questions about past work, then timing how long the log takes to answer each, shows whether tags, indexes and IDs are doing their job.

                ## Milestones
                1. Ten specific questions written about past results, decisions and data.
                2. Each answered from the log alone, with the time taken recorded.
                3. Questions taking over five minutes traced to a missing tag, index line or link.
                4. The test repeated each quarter with fresh questions.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least eight of ten questions about past results are answered from the log within five minutes each, with times recorded."
                cadence: cyclic
              tasks:
                - "Write ten specific questions about past research results"
                - "Answer each from the log and time it @recurring(quarterly)"
                - "Trace each slow search to the missing tag, index line or link"
                - "Fix the cause of the slowest search the same week"
            - name: Retention rules for raw outputs and intermediates
              description: |-
                ## Purpose
                Run folders full of intermediate files fill disks and hide the outputs that matter, but deleting them blindly can make a result impossible to defend. Clear rules on what is kept forever, what is kept for a period and what can be regenerated keep storage in check without breaking the log's links.

                ## Milestones
                1. Three retention classes defined: keep forever, keep for a set period, regenerable.
                2. Each output type in a run folder assigned to a class.
                3. Employer retention requirements checked and reflected in the rules.
                4. A yearly clean-up that follows the rules and records what was removed.

                ## Notes
                Anything quoted in a decision, presentation or investor document belongs in the keep-forever class.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written retention rules assign every run output type to one of three classes and match the employer's stated requirements."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the output types your runs produce"
                - "Assign each type to keep forever, keep for a period or regenerable"
                - "Check the rules against your employer's retention requirements"
                - "Run the clean-up and log what was removed @recurring(yearly)"
            - name: Entry templates for recurring experiment types
              description: |-
                ## Purpose
                Parameter sweeps, data quality checks, cost sensitivity runs and signal comparisons recur constantly, and each needs slightly different fields. A short template per type, built on the main entry format, makes these entries quicker to write and easier to compare across threads.

                ## Milestones
                1. The four most common experiment types in your log identified.
                2. A variant template for each, with its extra fields.
                3. Each variant used at least twice and adjusted once.
                4. The variants listed on the log's front page.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four experiment-type templates exist, each used at least twice, and are listed on the log's front page."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count the experiment types in the last three months of entries"
                - "Write a variant template for the four most common"
                - "Use each variant twice and adjust it once"
                - "List the variants on the log's front page"
            - name: What never goes in the research log
              description: |-
                ## Purpose
                Vendor passwords, client positions or a tip from a company insider turn the log into a compliance problem the moment anyone reads it. Agreeing a short exclusion list with your compliance team, and checking the log against it, keeps the log safe to share with reviewers and auditors.

                ## Milestones
                1. An exclusion list agreed with compliance: credentials, client data, personal data and anything that could be material non-public information.
                2. The exclusion list written on the front page of the log.
                3. A search of the existing log for credentials and client names.
                4. Any problem entries reported to compliance and handled as they direct.

                ## Notes
                If you are unsure whether something belongs in the log, ask compliance before writing it down, not after.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A compliance-agreed exclusion list is on the log's front page and a recorded search of the log found no excluded material left unhandled."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft an exclusion list for the log and send it to compliance"
                - "Write the agreed list on the log's front page"
                - "Search the log for credentials, client names and personal data"
                - "Report any problem entries to compliance and follow their direction"
            - name: Reproducing a six-month-old result from the log alone
              description: |-
                ## Purpose
                Nothing proves the whole system works end to end like a dated challenge. Pick a result from about six months ago that mattered to a decision, set aside a day, and rebuild it using only the log, the archived data and the recorded code. Whatever goes wrong is the most valuable feedback the log will ever get.

                ## Milestones
                1. A result tied to a past decision chosen and its run ID located.
                2. The data version, code commit and environment restored from the record.
                3. The result rebuilt, with any difference from the original quantified.
                4. A write-up entry listing every gap met and the fix for each.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A result from about six months ago has been rebuilt from the log alone, with any numerical difference quantified and every gap recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose a six-month-old result that fed into a decision"
                - "Block a full day in the calendar for the rebuild"
                - "Restore the recorded data version, commit and environment"
                - "Write up the differences found and the fix for each gap"
            - name: Log-backed pack for a research review meeting
              description: |-
                ## Purpose
                Review meetings go badly when the slides cannot answer "which run is that?" or "what else did you try?". Building the pack for your next review directly from log entries, with run IDs on every chart and an appendix listing every variant tried in the thread, makes the meeting about the research rather than its provenance.

                ## Milestones
                1. The review date and the threads to present confirmed.
                2. Every chart and number in the pack carrying a run ID from the log.
                3. An appendix listing all variants tried in each thread, including failures.
                4. Questions and decisions from the meeting logged within a day.

                ## Notes
                Start from the **Meeting notes** template for the follow-up entry.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A review pack is delivered with a run ID on every figure and a variants appendix, and the meeting's decisions are logged within one day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the review date and which threads you will present"
                - "Pull each figure from the log with its run ID shown"
                - "Build an appendix of every variant tried, failures included"
                - "Log the questions and decisions within a day of the meeting"
            - name: Handing over a research thread to a colleague
              description: |-
                ## Purpose
                Threads change hands when people move desks, take leave or leave the firm, and a handover done from memory loses most of what was learned. Preparing a handover from the log, with a thread summary, open questions, the data and code to start from and a walkthrough session, lets the next researcher pick up in days rather than weeks.

                ## Milestones
                1. A handover entry with summary, current state, open questions and known traps.
                2. The latest data version, commit and run folder named for the next owner.
                3. A one-hour walkthrough held with the new owner.
                4. The new owner's first log entry on the thread written after the walkthrough.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A handover entry exists and the new owner has written their first entry on the thread after a recorded walkthrough."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the handover entry: summary, state, open questions and traps"
                - "Name the latest data version, commit and run folder for the next owner"
                - "Hold a one-hour walkthrough with the new owner"
                - "Ask the new owner to write their first entry on the thread"
            - name: Year-end research log retrospective
              description: |-
                ## Purpose
                A year of entries says more about how you research than any self-assessment: how many threads started, how many reached a decision, how long null results took to accept and where time went. A half-day retrospective each year turns the log into evidence for the next year's plan and your own review.

                ## Milestones
                1. Counts of threads started, decided, stopped and still open for the year.
                2. The three threads that took longest to reach a decision, with the reason.
                3. Two changes to how you log or research for the coming year.
                4. A retrospective entry filed at the front of the new volume.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly retrospective entry gives thread counts by outcome, names the three slowest threads and commits to two changes."
                cadence: cyclic
              tasks:
                - "Count threads started, decided, stopped and open from the monthly indexes"
                - "Find the three threads that took longest to reach a decision"
                - "Write the retrospective with two changes for next year @recurring(yearly)"
                - "File the retrospective at the front of the new log volume"
            - name: Answering an audit or due diligence request from the log
              description: |-
                ## Purpose
                Investors, model risk teams and auditors increasingly ask to see how a strategy was researched, not only how it performed. Rehearsing the answer before anyone asks, by assembling the trail for one live strategy from first idea to approval, shows whether the log can stand up to that scrutiny and what has to be fixed first.

                ## Milestones
                1. One live or recently approved strategy chosen as the rehearsal case.
                2. The trail from first idea entry to approval decision assembled with run IDs.
                3. Gaps in the trail listed, with any that cannot be closed stated honestly.
                4. The pack reviewed by compliance or model risk for what may be shared externally.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A research trail pack for one strategy runs from first idea to approval with run IDs throughout and has been reviewed by compliance or model risk."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose one live or approved strategy for the rehearsal"
                - "Assemble its trail from the first idea entry to the approval decision"
                - "List the gaps and state plainly which cannot be closed"
                - "Ask compliance or model risk what in the pack may be shared externally"
            - name: Research log habits for a new joiner's first month
              description: |-
                ## Purpose
                Joining a quant team means learning its data, code and conventions at once, and the log is often the last thing anyone explains. Starting your log on day one, adopting the team's format, and writing entries even for onboarding exercises gives you a record of how the systems work and shows your manager how you think.

                ## Milestones
                1. The team's existing log conventions found and read in the first week.
                2. A personal log started on day one in the team's format.
                3. An entry for every onboarding exercise and every system you learned to use.
                4. A first-month summary entry shared with your manager.

                ## Notes
                Start from the **Onboarding 30/60/90** template and link it from the log.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log in the team's format has entries for every research day of the first month and a summary entry has been shared with your manager."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your manager where the team's log conventions are written"
                - "Start your log on the first day in the team's format"
                - "Write an entry for each onboarding exercise and system learned"
                - "Share a first-month summary entry with your manager @priority(medium)"
            - name: Solo researcher log without a reviewer
              description: |-
                ## Purpose
                Independent researchers and those on small desks have nobody to ask "which data did you use?", so the log has to do the reviewer's job. Building in a weekly self-review against a short checklist, and reading entries as a sceptical stranger would, catches the shortcuts a colleague would have caught.

                ## Milestones
                1. A five-question self-review checklist: data version, code, variants tried, costs and conclusion.
                2. Each week's entries checked against it.
                3. Failed checks fixed or marked in the entry.
                4. An outside reader, such as a former colleague, asked to review one thread a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly self-review checks are recorded for eight consecutive weeks and one thread a year is read by an outside reviewer."
                cadence: rolling
              tasks:
                - "Write the five-question self-review checklist"
                - "Check the week's entries against the checklist @recurring(weekly:wed)"
                - "Fix or mark every entry that fails a check"
                - "Ask a trusted outside reader to review one thread this year"
            - name: Shared log conventions for a research pod
              description: |-
                ## Purpose
                When three or four researchers each keep a log their own way, nobody can read anyone else's and cross-thread lessons are lost. Agreeing one shared format, ID scheme, tag list and review rhythm for the pod, written in a short conventions page, makes the logs a common asset rather than private diaries.

                ## Milestones
                1. One conventions page covering format, IDs, tags, storage and review rhythm.
                2. Every pod member's last month of entries converted or tagged to the shared standard.
                3. A monthly pod check of whether the conventions still fit.
                4. Changes to the conventions recorded as dated decisions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pod conventions page is agreed by every member, their recent entries follow it, and a monthly check is on the calendar."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect one sample entry from each pod member"
                - "Draft a single conventions page and agree it in a pod meeting"
                - "Convert or tag each member's last month of entries"
                - "Check in the pod meeting whether the conventions still fit @recurring(monthly:24)"
            - name: Carrying PhD notebook habits into quant work
              description: |-
                ## Purpose
                Former PhD students and postdocs often arrive with strong notebook habits built around experiments or derivations that run for months. Quant research moves faster, uses shared data that changes underneath you and ends in decisions rather than papers, so some habits transfer directly and others need changing.

                ## Milestones
                1. Your existing notebook habits listed, good and bad.
                2. Each habit marked as keep, adapt or drop for quant work.
                3. Data versioning and decision records added where the old habits had none.
                4. A short entry recording the changes after one month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written keep, adapt or drop list of your academic notebook habits exists and a one-month entry records the changes made."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the notebook habits you used during your doctorate or postdoc"
                - "Mark each as keep, adapt or drop for quant research"
                - "Add data versioning and decision records to your routine"
                - "Write an entry after one month recording what changed"
            - name: Restarting a thread after leave or a long break
              description: |-
                ## Purpose
                Coming back to a research line after parental leave, a sabbatical or a long project elsewhere is where a good log pays off most. A structured restart, reading the thread's summary and last entries, checking whether the data and code have moved on, and writing a restart entry, turns a confused fortnight into two days.

                ## Milestones
                1. The thread's summary, last ten entries and open questions reread.
                2. Changes to data versions and shared code since the break listed.
                3. The last recorded result rerun on current data and code.
                4. A restart entry with the current state and the next three steps.
              priority: low
              deadlineOffsetDays: 21
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A restart entry records the rerun of the last result on current data and code and sets out the next three steps."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Reread the thread summary, last ten entries and open questions"
                - "List the data and shared code changes since you left"
                - "Rerun the last recorded result on current data and code"
                - "Write a restart entry with the next three steps"
            - name: Short-session log for part-time research
              description: |-
                ## Purpose
                Researchers working evenings or around a teaching load get ninety minutes at a time, and the first twenty are often spent remembering where they were. A start-of-session read of the last entry and an end-of-session note of exactly where to resume gives short sessions the continuity of full days.

                ## Milestones
                1. A two-line resume note format: where you stopped, what to do first next time.
                2. Each session starting with the last resume note and ending with a new one.
                3. Average warm-up time per session estimated before and after.
                4. Threads paused for over a month marked so they are not half-remembered.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every part-time research session for a month starts from a resume note and ends with a new one, with warm-up time recorded before and after."
                cadence: rolling
              tasks:
                - "Write the two-line resume note format"
                - "Start each session by reading the last resume note"
                - "End each session with where to start next time"
                - "Estimate your warm-up time before and after a month"
            - name: Lineage from raw data to every reported number
              description: |-
                ## Purpose
                Experienced researchers get asked where a single number in a presentation came from, and the honest answer often needs five steps: raw file, cleaning, universe filter, signal run, portfolio simulation. Recording that lineage as linked run IDs, so any reported number can be walked back to raw inputs, is what makes a research record defensible.

                ## Milestones
                1. Every pipeline step given its own run ID with inputs and outputs recorded.
                2. Each run entry naming the run IDs it consumed.
                3. One headline number traced back to raw data through the chain.
                4. A simple lineage view, even a hand-drawn diagram, for one strategy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One reported headline number can be walked back through linked run IDs to the raw data files that produced it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the pipeline steps from raw data to a reported number"
                - "Make each step record the run IDs it consumed"
                - "Trace one headline number back to its raw inputs"
                - "Draw the lineage for one strategy and file it in the log"
            - name: Log entries as model validation evidence
              description: |-
                ## Purpose
                Model validators and model risk teams ask for development evidence: assumptions, alternatives considered, testing and known limits. Where your log already holds that, a well-indexed extract saves weeks; where it does not, knowing the gaps early lets you fill them while the work is fresh.

                ## Milestones
                1. The evidence your validators expect listed from their documentation standard.
                2. Each item mapped to log entries and run IDs for one model.
                3. Missing items written up now, while the work is still recent.
                4. A quarterly check that new models are being logged with this mapping in mind.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "For one model, every item in the validators' evidence list maps to log entries or a written gap, and the extract has been accepted by the validation team."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the model risk team for their documentation standard"
                - "Map each required item to entries and run IDs for one model"
                - "Write up any missing evidence while the work is recent"
                - "Check new models are logged against the mapping @recurring(quarterly)"
            - name: Research throughput measured from the log
              description: |-
                ## Purpose
                With a year of structured entries, the log can answer questions about your research process that intuition gets wrong: how long ideas take to reach a decision, what share are stopped at the data stage, how much time goes to infrastructure. A few simple measures, reviewed quarterly, show where effort is leaking.

                ## Milestones
                1. Three measures defined: time from idea to decision, stop rate by stage and hours by activity.
                2. The measures computed from the last year of entries.
                3. One change to how you work chosen from the results.
                4. The measures recomputed each quarter to see whether the change helped.

                ## Notes
                Start from the **Metrics log** template. These measures describe your process, not the quality of any single idea, so do not use them to rank people.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three throughput measures are computed from a year of log entries each quarter, and one process change is tracked against them."
                cadence: cyclic
              tasks:
                - "Define the three throughput measures in one paragraph"
                - "Compute them from the last year of entries"
                - "Choose one process change based on the results"
                - "Recompute the measures and compare @recurring(quarterly)"
            - name: Querying years of log entries as structured data
              description: |-
                ## Purpose
                Once entries carry consistent fields, the log stops being only prose and becomes a data set: every test of a signal family, every data version in use when a result changed, every parameter ever tried. Exporting the structured fields to a table you can query turns questions that took an afternoon into a minute.

                ## Milestones
                1. The structured fields in your entries listed and checked for consistency.
                2. An export of all entries to a table with one row per run.
                3. Five saved queries answering questions you are often asked.
                4. The export refreshed automatically when entries change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All log entries export to a queryable table with one row per run, and five saved queries return correct answers for known cases."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the structured fields your entries carry"
                - "Write an export that produces one row per run"
                - "Save five queries for questions you are often asked"
                - "Test each query against a case where you know the answer"
---

# Quant Research Log

This area is for quant researchers who want every idea, test, dead end and decision written down well enough that a colleague, a validator or their own future self can follow it and repeat it. It starts with the foundations (the tool, the entry template, an ID scheme, data and code versions recorded beside every result, decision records and safe storage), then the daily, weekly, monthly and quarterly routines that keep the log alive, the writing skills that make entries useful months later, the improvements that cut the effort of logging, dated events such as reproducing an old result or handing over a thread, variants for new joiners, solo researchers, pods and former PhD students, and finally the specialist work of lineage, validation evidence and querying years of entries.

What repeats is a short end-of-session entry each research day, a weekly review of open questions and experiment status, a monthly index page, hygiene pass and backup restore test, a quarterly reproducibility spot check and read-back of old entries, and a yearly archive and retrospective. The Purchase decision, Metrics log, Meeting notes and Onboarding 30/60/90 templates pair with the projects that name them. The log records research, it does not make it right: most strategies that look good in a log still fail out of sample, and the log is how you find out which ones and why. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
