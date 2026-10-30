---
id: quant-finance.tick-data-storage-and-cleaning
name: Tick Data Storage and Cleaning
description: "A canonical tick schema, one timestamp policy, a partitioned columnar store with tested backups, written cleaning rules for bad ticks, gaps and corrections, and queries researchers can trust."
category: business
version: 1.0.0
tags: [quant-finance, tick-data-storage-and-cleaning, engineer, tick-data, data-quality, timestamps, parquet, time-series-database]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - remediation-plan
    - onboarding-30-60-90
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Tick Data Storage and Cleaning
          description: "Storing and cleaning high-frequency data: file formats and databases, bad ticks, timestamps and time zones, compression and fast research queries."
          projects:
            - name: Inventory of tick data sets and their sources
              description: |-
                ## Purpose
                Most tick stores grow by accident: a vendor dump on one drive, a capture process on another, a colleague's cleaned copy somewhere in between. Listing every data set with its source, venues, date range, size, format and owner shows what you actually hold, which copies are duplicates and which ones research quietly depends on.

                ## Milestones
                1. A table of every tick data set with source, venues, instruments, start and end dates, size and format.
                2. An owner named for each data set, including the ones nobody wanted to claim.
                3. Duplicate and orphaned copies marked for consolidation or removal.
                4. The data sets that live research depends on flagged as critical.

                ## Notes
                Measure sizes with a disk usage command rather than guessing. Estimates are usually wrong by a factor of two or more.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated inventory lists every tick data set with source, coverage, size, format and owner, and the critical ones are flagged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every drive, bucket and database that holds tick data"
                - "Record source, venues, date range, size and format for each data set"
                - "Ask colleagues which data sets their current research reads"
                - "Mark duplicate and orphaned copies for a consolidation decision"
            - name: Canonical schema for trades, quotes and book updates
              description: |-
                ## Purpose
                Every vendor and exchange names fields differently, scales prices differently and packs flags in its own way, so research code fills up with per-source special cases. A single canonical schema for trades, top-of-book quotes and book updates, with types, units and nullability fixed, lets every loader translate once and every query read the same columns.

                ## Milestones
                1. Separate record layouts written for trades, quotes and book update messages.
                2. Price stored as a scaled integer or decimal with the tick size recorded, never as an unexamined float.
                3. Size, side, venue, condition flags and sequence number defined with types and units.
                4. Every current source mapped to the schema in a translation table.

                ## Notes
                Keep the source's original fields in the raw layer. The canonical schema is a translation, not a replacement, and you will need the originals when a mapping turns out to be wrong.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned schema document defines trade, quote and book update records with types and units, and every current source has a field mapping to it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect the field lists from every current source side by side"
                - "Decide the price representation and how tick size is stored"
                - "Write the trade, quote and book update layouts with types and units"
                - "Map each source's fields to the canonical columns in one table"
            - name: Timestamp and time zone policy
              description: |-
                ## Purpose
                A tick can carry three or four times: the exchange's matching time, the feed's send time, your receive time and a vendor's own stamp, each at a different precision and often in local exchange time. Writing down which one is primary, storing it in UTC at nanosecond resolution, and keeping the others as named columns removes the most common silent error in intraday research.

                ## Milestones
                1. Every timestamp a source provides listed with its meaning, precision and time zone.
                2. One primary event time chosen and stored as UTC nanoseconds since the epoch.
                3. Receive and capture times kept as separate, clearly named columns.
                4. The policy written up and linked from the schema document.

                ## Notes
                Never store local exchange time without the zone. Daylight saving changes turn it into a duplicate or missing hour twice a year.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written timestamp policy names the primary event time, stores it as UTC nanoseconds and defines every secondary time column."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each source's timestamps with their meaning and precision"
                - "Choose the primary event time and write down why"
                - "Name the secondary time columns and their units"
                - "Add the policy to the schema document and share it with researchers"
            - name: Partitioning scheme for the tick store
              description: |-
                ## Purpose
                How files or tables are split decides whether a query for one symbol on one day reads a megabyte or a terabyte. Choosing a partition key (usually date, then venue or symbol bucket) from the queries researchers really run keeps scans small, makes reloading a bad day safe and stops a single directory holding a million tiny files.

                ## Milestones
                1. The ten most common research queries written down with their filters.
                2. A partition key and directory or table layout chosen to match those filters.
                3. A target file size range set, so partitions are neither tiny nor enormous.
                4. One month of data laid out in the new scheme and timed against the old one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A documented partition layout, chosen from real query patterns, has one month of data loaded and a recorded speed comparison with the previous layout."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the queries researchers ran most often last month"
                - "Sketch two candidate partition layouts and their file counts"
                - "Load one month into the preferred layout"
                - "Time the common queries on old and new layouts and record the results"
            - name: Choosing a file format for tick archives
              description: |-
                ## Purpose
                Flat CSV is easy to read and expensive to store and scan, while columnar formats such as Parquet, in-memory formats such as Arrow, older containers such as HDF5 and custom binary layouts each trade compression, speed, tooling and longevity differently. Testing two or three on your own data, rather than on a blog benchmark, gives a format decision you can defend for years.

                ## Milestones
                1. Two or three candidate formats chosen with a reason for each.
                2. The same week of trades and quotes written in every candidate format.
                3. Size on disk, write time and three typical read times recorded for each.
                4. A format chosen, with the library versions and settings written down.

                ## Notes
                Start from the **Purchase decision** template. Weight long-term readability heavily: a format only one library can open is a liability in ten years.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded format decision is backed by size, write and read timings on one week of your own data in each candidate format."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick a representative week of trades and quotes as the test set"
                - "Write the test week in each candidate format with default settings"
                - "Time a single-symbol read, a full-day scan and a filtered aggregate"
                - "Record the chosen format, library version and compression settings"
            - name: Choosing a time-series database for tick queries
              description: |-
                ## Purpose
                Files on disk work well for batch research, but interactive questions, as-of joins and many concurrent users can justify a column-oriented time-series database. Comparing a short list on licence cost, as-of join support, ingest speed, memory needs and the team's skills avoids buying a system nobody can run, or running files long after they stopped coping.

                ## Milestones
                1. A list of the questions files on disk answer too slowly today.
                2. Three options shortlisted, including staying with files plus an embedded query engine.
                3. Each option tested on one month of data with the same five queries.
                4. A decision recorded with cost, operating effort and an exit route.

                ## Notes
                Start from the **Purchase decision** template. Check licence terms for production and commercial use before any trial data goes in.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision compares three options on the same five queries over one month of data, with licence cost and operating effort stated."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write down the five queries that are too slow on files today"
                - "Shortlist three options including an embedded engine over files"
                - "Load one month into each option and run the five queries"
                - "Record the decision with cost, effort to run and how you would leave"
            - name: Raw, cleaned and derived data layers
              description: |-
                ## Purpose
                Cleaning tick data in place destroys the evidence you need when a filter turns out to be wrong. Separating an immutable raw layer, a cleaned layer produced by versioned rules and a derived layer of bars and features means any cleaned number can be traced back to the original message and rebuilt after a rule change.

                ## Milestones
                1. Three storage zones defined, with raw marked write-once and read-only to research.
                2. Each cleaned partition tagged with the rule set version that produced it.
                3. Derived data sets recording which cleaned version they were built from.
                4. One day rebuilt end to end from raw to derived to prove the chain works.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Raw, cleaned and derived zones exist with raw locked against writes, and one day has been rebuilt from raw with matching results."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Create the raw, cleaned and derived zones with separate permissions"
                - "Lock the raw zone so only the ingest process can write to it"
                - "Add a rule set version tag to every cleaned partition"
                - "Rebuild one full day from raw and compare it with the current copy"
            - name: Data dictionary for every tick field
              description: |-
                ## Purpose
                Researchers misread fields more often than they find bad data: a size in lots read as shares, a condition flag read as a side, a sequence number assumed to be global. A data dictionary giving each field's meaning, unit, allowed values and source quirks answers those questions once, in writing, instead of in chat every week.

                ## Milestones
                1. Every canonical field described with meaning, type, unit and allowed values.
                2. Known source quirks noted against the fields they affect.
                3. Condition and flag codes decoded in a lookup table.
                4. The dictionary published where researchers already look for documentation.

                ## Notes
                Ask the agent to draft first descriptions from the schema and the vendor specifications, then correct every line by hand. Drafts get unit details wrong.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published dictionary covers every canonical field with unit and allowed values, plus a decoded table of condition codes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft field descriptions from the schema and specifications"
                - "Correct each draft entry against the source documentation"
                - "Build the lookup table for condition and flag codes"
                - "Review new fields and changed codes in the dictionary @recurring(quarterly)"
            - name: Storage capacity and cost baseline
              description: |-
                ## Purpose
                Full order book data for a few busy venues can add terabytes a month, and cloud storage, egress and query charges grow quietly with it. Measuring current size, daily growth and monthly cost by data set gives a forecast you can plan hardware or budget around, before a disk fills on a holiday.

                ## Milestones
                1. Current size recorded per data set and per storage tier.
                2. Average and peak daily growth measured over the last three months.
                3. Monthly storage, egress and query costs listed by data set.
                4. A twelve-month forecast with the date each volume would fill.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline sheet shows size, daily growth and monthly cost per data set, with a twelve-month forecast and projected fill dates."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Measure the current size of each data set on each tier"
                - "Work out average and peak daily growth from the last three months"
                - "Pull storage, egress and query charges from the last three bills"
                - "Project growth twelve months ahead and note the fill dates"
            - name: Backup and restore plan for the tick archive
              description: |-
                ## Purpose
                Raw tick history captured yourself cannot be bought back, and vendor history often costs as much to reload as to buy. A written plan stating what is copied where, how often, how long a full restore takes and who can run it turns a lost disk or a bad delete from a crisis into a routine afternoon.

                ## Milestones
                1. Data sets ranked by how hard they are to replace.
                2. At least two copies of irreplaceable raw data, one in a separate location.
                3. Checksums stored with every backed-up partition.
                4. A first full restore of one data set completed and timed.

                ## Notes
                Start from the **Operational checklist** template. Snapshots on the same storage system are not a backup; a bad script or a failed array takes both.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written backup plan exists, irreplaceable raw data has two checksummed copies in separate locations, and one full restore has been timed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Rank each data set by how hard it would be to replace"
                - "Set up a second copy of raw captures in a separate location"
                - "Store a checksum file alongside every backed-up partition"
                - "Restore one full data set to a scratch area and time it"
            - name: Daily ingest completeness check
              description: |-
                ## Purpose
                A capture process that drops one venue for an afternoon, or a vendor file that arrives half written, usually goes unnoticed until a backtest looks strange weeks later. Comparing each day's load against expected symbols, sessions and message counts the morning after catches gaps while they can still be refilled from the source.

                ## Milestones
                1. An expected-volume table per venue and data type built from recent history.
                2. A report flagging any symbol, venue or session below its expected count.
                3. An owner and a fix recorded for every flagged gap.
                4. Four consecutive weeks with every flag closed within two trading days.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A completeness report runs every trading day, and four straight weeks show every flagged gap closed or explained within two trading days."
                cadence: rolling
              tasks:
                - "Build the expected message count table from the last sixty trading days"
                - "Write the report that flags symbols and venues below expected volume"
                - "Read the completeness report and assign each flag an owner @recurring(daily)"
                - "Review the week's ingest failures and their causes @recurring(weekly:fri)"
            - name: Bad tick filter rule set
              description: |-
                ## Purpose
                Fat-finger prints, prices off by a factor of ten, zero sizes and stale quotes sit in every feed, and each team invents its own filters inconsistently. One versioned rule set, with each rule's threshold, its reason and the share of ticks it removes, makes cleaning repeatable and easy to question.

                ## Milestones
                1. Each filter written as a named rule with threshold and reason.
                2. The rule set stored in version control with a change log.
                3. Removal rates per rule reported for every cleaned day.
                4. Monthly removal rates compared, with any jump investigated.

                ## Notes
                Flag rather than delete wherever possible. A removed tick cannot be argued about later; a flagged one can be included or excluded per study.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A versioned rule set lists each filter with threshold and reason, and every cleaned day reports how many ticks each rule flagged."
                cadence: rolling
              tasks:
                - "Write each existing filter as a named rule with threshold and reason"
                - "Commit the rule set with a change log entry for each rule"
                - "Add per-rule flag counts to the daily cleaning output"
                - "Compare this month's flag rates per rule with last month's @recurring(monthly:9)"
            - name: Weekly data quality scorecard
              description: |-
                ## Purpose
                Quality problems reach researchers one complaint at a time, which hides trends such as a venue's error rate creeping up. A one-page weekly scorecard of completeness, flag rates, late files, open incidents and query failures gives a single number trail to discuss and shows whether the store is improving.

                ## Milestones
                1. Five or six measures chosen, each with a definition and a target.
                2. A first scorecard produced from last week's data.
                3. Eight weeks of scorecards kept in one log.
                4. Any measure off target for two weeks running turned into a fix.

                ## Notes
                Start from the **Metrics log** template. Keep the measures stable for at least a quarter so trends mean something.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly scorecards are logged with the same measures, and every measure off target twice in a row has a recorded fix."
                cadence: rolling
              tasks:
                - "Choose five quality measures and write a target for each"
                - "Produce the first scorecard from last week's completeness and flag data"
                - "Publish the weekly data quality scorecard to the research channel @recurring(weekly:mon)"
                - "Open a fix for any measure off target two weeks running"
            - name: Exchange calendar and session hours table
              description: |-
                ## Purpose
                Completeness checks, bar building and session filters all depend on knowing when each venue was open: holidays, half days, auction times and the occasional unscheduled closure. A maintained calendar table, sourced from venue notices and kept historical, stops a holiday from looking like a missing day and a half day from looking like a crash in volume.

                ## Milestones
                1. A table of trading days, session times and auction windows for every venue held.
                2. Historical changes to session hours recorded with their effective dates.
                3. Half days and unscheduled closures marked.
                4. Completeness checks and bar builders reading from this one table.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A single historical calendar table covers every venue held, including session changes and closures, and all checks and bar builders read from it."
                cadence: rolling
              tasks:
                - "Load the published holiday and session calendars for each venue"
                - "Record past changes to session hours with effective dates"
                - "Check venue notices for new holidays and session changes @recurring(monthly:3)"
                - "Load next year's holiday calendars once venues publish them @recurring(yearly)"
            - name: Instrument identifier map in the tick store
              description: |-
                ## Purpose
                Ticker symbols get reused, renamed and moved between venues, so a query by symbol alone can splice two different companies together. Keeping a dated mapping from each stored symbol to a permanent internal instrument identifier, and querying through it, makes multi-year tick history line up with the right instrument on every date.

                ## Milestones
                1. A permanent internal identifier assigned to every instrument in the store.
                2. A mapping table of symbol, venue and identifier with valid-from and valid-to dates.
                3. Research query helpers resolving symbols through the map by date.
                4. Known symbol reuse cases tested and returning the right instrument.

                ## Notes
                Where reference data comes from is a sourcing question; this project is about applying it consistently inside the store.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every stored symbol resolves through a dated identifier map, and at least three known symbol reuse cases return the correct instrument."
                cadence: rolling
              tasks:
                - "Assign a permanent internal identifier to each stored instrument"
                - "Build the dated symbol to identifier mapping table"
                - "Test three known cases of symbol reuse against the map"
                - "Apply the month's symbol changes and listings to the map @recurring(monthly:12)"
            - name: Monthly restore drill
              description: |-
                ## Purpose
                Backups fail silently: a credential expires, a path changes, a checksum job stops running. Restoring one randomly chosen partition every month and comparing it with the live copy proves the backups are real and keeps the restore steps fresh in the head of whoever is on call.

                ## Milestones
                1. A written restore procedure anyone on the team can follow.
                2. One random partition restored and checksum-compared each month.
                3. Restore time and any failures recorded in a drill log.
                4. Six consecutive months of successful drills logged.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The drill log shows six consecutive monthly restores of a random partition, each with a matching checksum and a recorded restore time."
                cadence: rolling
              tasks:
                - "Write the restore procedure as numbered steps"
                - "Restore a randomly chosen partition and compare its checksum @recurring(monthly:21)"
                - "Record the restore time and any problems in the drill log"
                - "Fix and retest any step that failed before the next drill"
            - name: Storage growth, compaction and query speed review
              description: |-
                ## Purpose
                Tick stores degrade gradually: small files pile up from intraday writes, compression settings drift, and a query that took two seconds now takes forty. A monthly look at growth against forecast, file counts per partition and timings for a fixed set of benchmark queries catches the slowdown before researchers start building private copies.

                ## Milestones
                1. A fixed set of five benchmark queries with recorded baseline timings.
                2. A compaction job merging small files into the target size range.
                3. Monthly growth compared with the capacity forecast.
                4. Any benchmark query twice as slow as baseline investigated and explained.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Benchmark query timings, file counts and growth against forecast are logged each month, and any query twice as slow as baseline has a recorded cause."
                cadence: rolling
              tasks:
                - "Pick five benchmark queries and record their baseline timings"
                - "Schedule compaction for partitions above the small-file threshold"
                - "Run the benchmark queries and compare growth with forecast @recurring(monthly:14)"
                - "Investigate any benchmark query that has doubled in run time"
            - name: Capture host clock synchronisation log
              description: |-
                ## Purpose
                If you record your own feeds, the receive timestamp is only as good as the capture host's clock, and an unsynchronised server can drift milliseconds in a day. Logging the offset reported by the time synchronisation service, with an alert threshold, tells you which periods of capture data have trustworthy receive times and which do not.

                ## Milestones
                1. The time synchronisation source and protocol documented for each capture host.
                2. Clock offset sampled and stored alongside the capture data.
                3. An alert threshold set for offsets above your tolerance.
                4. Periods above tolerance flagged in the data so research can exclude them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every capture host logs clock offset continuously, and every period above the agreed tolerance is flagged in the stored data."
                cadence: rolling
              tasks:
                - "Document the time source and protocol on each capture host"
                - "Store sampled clock offsets beside the capture files"
                - "Set an alert for offsets above your written tolerance"
                - "Review the week's clock offset log and flag bad periods @recurring(weekly:wed)"
            - name: Data incident log and post-mortems
              description: |-
                ## Purpose
                When a researcher finds a bad day, the fix usually happens in a hurry and the lesson is lost. A short incident log recording what was wrong, which data sets and studies it touched, how it was found and what check now prevents it builds the case for better tooling and warns anyone whose results used the bad data.

                ## Milestones
                1. An incident log with fields for impact, detection, cause and prevention.
                2. Affected researchers told which date ranges and data sets to rerun.
                3. A short post-mortem written for any incident touching more than one study.
                4. A new automated check added for each repeated cause.

                ## Notes
                Start from the **Remediation plan** template for any incident that needs a multi-week fix.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every data incident is logged with impact and cause, affected users are notified, and each repeated cause has a new automated check."
                cadence: rolling
              tasks:
                - "Set up the incident log with impact, detection, cause and prevention fields"
                - "Log the last three data problems you remember from memory and chat history"
                - "Notify affected researchers with the exact date ranges to rerun"
                - "Review the quarter's incidents for repeated causes @recurring(quarterly)"
            - name: Quarterly audit of cleaned data against raw
              description: |-
                ## Purpose
                Over time cleaning rules accumulate exceptions, and the cleaned layer can drift from what the rules actually say. Sampling a handful of days each quarter and rebuilding them from raw with the current rule set, then comparing row by row with what is stored, shows whether the cleaned layer is still what everyone believes it is.

                ## Milestones
                1. Five sample days chosen each quarter, including one volatile day.
                2. Each sample rebuilt from raw with the current rule set.
                3. Row counts and value differences between rebuilt and stored copies recorded.
                4. Any unexplained difference traced to a cause and fixed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Each quarter five rebuilt sample days match the stored cleaned layer, or every difference is explained and logged."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Pick five sample days including one with unusually high volume"
                - "Rebuild the cleaned audit days from raw with the current rule set @recurring(quarterly)"
                - "Compare row counts and values with the stored cleaned copies"
                - "Log the cause of every difference and the fix applied"
            - name: Columnar storage internals study
              description: |-
                ## Purpose
                Knowing why a Parquet query is fast or slow means understanding row groups, column chunks, dictionary and run-length encoding, statistics and predicate pushdown. A focused study with small experiments on your own tick files turns tuning from trial and error into reasoned choices about row group size, sort order and encoding.

                ## Milestones
                1. Notes on row groups, pages, encodings and column statistics in your own words.
                2. File metadata of one tick partition inspected and explained line by line.
                3. Three row group sizes tested on the same day of data, with read timings.
                4. A sort order chosen for quotes that improves filtered reads, with evidence.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes explain the format internals, and a timing table for three row group sizes and two sort orders on your data supports a recorded choice."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the format specification sections on row groups and encodings"
                - "Inspect the metadata of one of your partitions with a format tool"
                - "Rewrite one day at three row group sizes and time a filtered read"
                - "Test sorting quotes by symbol then time and record the effect"
            - name: Compression techniques for tick data
              description: |-
                ## Purpose
                Tick data compresses unusually well because consecutive timestamps and prices change by small amounts, which is why delta encoding, bit packing and codecs such as zstd and lz4 can shrink it many times over. Learning how each works, and measuring them on your columns, lets you cut storage and scan time without guessing.

                ## Milestones
                1. Delta, delta-of-delta and dictionary encoding explained with a worked example on timestamps.
                2. Two general codecs compared on the same columns at several levels.
                3. Compression ratio and decompression speed tabulated per column type.
                4. Default codec and level chosen for each layer of the store.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of compression ratio and decompression speed per column type and codec supports a recorded default for each storage layer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Work through delta encoding by hand on twenty real timestamps"
                - "Compress one day's columns with two codecs at three levels each"
                - "Tabulate ratio and decompression speed by column type"
                - "Write the chosen codec and level for raw, cleaned and derived layers"
            - name: Order book reconstruction from incremental feeds
              description: |-
                ## Purpose
                Depth feeds send adds, modifies, cancels and executions rather than whole books, so a single missed message corrupts every level after it. Building a book from an incremental feed, with sequence checks, snapshot recovery and a comparison against published snapshots, is the skill that separates trustworthy depth data from plausible-looking noise.

                ## Milestones
                1. The feed's message types and book update rules summarised from its specification.
                2. A book builder replaying one symbol for one day without errors.
                3. Sequence gaps detected and recovered from the next snapshot.
                4. Rebuilt top of book matching the feed's own top-of-book data within tolerance.

                ## Notes
                Start with a quiet symbol. Busy ones hide logic errors in sheer volume.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A book builder replays a full day for one symbol with gap recovery, and its top of book matches the feed's own quotes within a stated tolerance."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Summarise the feed's add, modify, cancel and execute rules on one page"
                - "Replay one quiet symbol for one day through a simple book builder"
                - "Add sequence gap detection and snapshot recovery"
                - "Compare the rebuilt top of book with the feed's quote messages"
            - name: As-of joins between trades and quotes
              description: |-
                ## Purpose
                Attaching the prevailing quote to each trade sounds simple, but it depends on which timestamp you join on, whether quotes and trades are reported with different delays, and what happens at the open or after a halt. Practising as-of joins on real data, and measuring how results move with a few milliseconds of offset, builds the judgement researchers rely on you for.

                ## Milestones
                1. An as-of join of trades to the last quote before each trade working on one day.
                2. Join results compared at zero offset and at two small offsets.
                3. Rules written for trades with no prior quote, such as those at the open.
                4. A tested helper function other people can call.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A tested as-of join helper exists, with documented handling of missing quotes and a recorded comparison of results at three time offsets."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Join one day of trades to the prior quote by event time"
                - "Rerun the join with two small time offsets and compare matched quotes"
                - "Write the rule for trades with no prior quote"
                - "Wrap the join in a helper with tests and a short usage note"
            - name: Reading exchange feed specifications
              description: |-
                ## Purpose
                Every feed specification hides storage-relevant detail: whether sequence numbers are per channel or per session, how prices are scaled, which messages are sent only at the open, and how test symbols are marked. Reading two specifications end to end and turning them into loader rules prevents months of wrong assumptions.

                ## Milestones
                1. Two feed specifications read in full, with questions noted as you go.
                2. Message types relevant to storage listed for each feed.
                3. Price scaling, sequence and session rules copied into loader notes.
                4. Test and dummy instruments identified so loaders can exclude them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Loader notes for two feeds list message types, price scaling, sequence rules and test instruments, each traced to a section of the specification."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download the current specification for the two feeds you hold most of"
                - "Read each one fully and note every storage-relevant rule"
                - "Copy price scaling and sequence rules into the loader notes"
                - "List the test instruments each feed sends and exclude them"
            - name: Time zone, daylight saving and leap second drills
              description: |-
                ## Purpose
                Time bugs cluster around the edges: a venue in a zone that changes clocks on a different weekend from yours, a session that crosses midnight UTC, or a leap second in an older data set. Working through a set of deliberate edge-case exercises on your own pipeline finds these before a researcher does.

                ## Milestones
                1. A list of edge cases for every venue held, including mismatched daylight saving weeks.
                2. Each edge case tested with a known input and expected output.
                3. Sessions crossing midnight UTC assigned to the correct trading date.
                4. Failing cases fixed and added to the automated test suite.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every listed time edge case has an automated test with a known expected output, and all tests pass on the current pipeline."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the daylight saving dates for every venue zone for the last five years"
                - "Write test inputs for mismatched clock change weeks"
                - "Test the trading date assignment for sessions crossing midnight UTC"
                - "Add every failing case to the automated test suite after fixing it"
            - name: Fast vectorised cleaning in Python
              description: |-
                ## Purpose
                Row-by-row loops over a billion ticks take hours, while vectorised operations in a dataframe library or an embedded query engine take minutes. Rewriting your slowest cleaning step with columnar operations, lazy evaluation and streaming by partition, and measuring memory as well as time, teaches the habits that keep the pipeline usable as data grows.

                ## Milestones
                1. The slowest cleaning step profiled for time and peak memory.
                2. The step rewritten with vectorised or lazy columnar operations.
                3. Outputs of old and new versions proven identical on three days.
                4. Time and memory before and after recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "The slowest cleaning step has a vectorised replacement that produces identical output on three test days, with before and after timings recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Profile the cleaning pipeline and find its slowest step"
                - "Rewrite that step with vectorised or lazy columnar operations"
                - "Compare old and new outputs on three days row by row"
                - "Record run time and peak memory before and after"
            - name: Statistical outlier filters for ticks
              description: |-
                ## Purpose
                Fixed price bands miss bad ticks in quiet stocks and remove real moves in volatile ones. Studying neighbourhood filters, which compare each price with a rolling median and a scale measure such as the median absolute deviation, and testing their window and threshold choices on labelled examples, gives filters that adapt to each instrument.

                ## Milestones
                1. Two or three published filtering approaches summarised in your own notes.
                2. A labelled set of known bad and known good ticks assembled.
                3. Window and threshold combinations scored on the labelled set.
                4. A chosen setting adopted into the rule set with its scores recorded.

                ## Notes
                Test on real stress days. A filter tuned only on calm days will strip out the most interesting data.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A labelled tick set scores at least four window and threshold combinations, and the chosen one is in the rule set with its false positive rate recorded."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Summarise two published tick filtering methods in your notes"
                - "Label one hundred known bad and one hundred known good ticks"
                - "Score four window and threshold combinations on the labelled set"
                - "Adopt the best setting into the rule set with its scores"
            - name: Duplicate and out-of-sequence tick detection
              description: |-
                ## Purpose
                Feed failovers, reconnects and overlapping vendor files all create duplicate messages, while multicast feeds can deliver packets out of order. Detecting both using sequence numbers, and a content hash where there are none, stops trades being double-counted in volume and bars being built from misordered prices.

                ## Milestones
                1. A duplicate key defined per source, using sequence numbers where available.
                2. Duplicates flagged and counted per day and per source.
                3. Out-of-sequence messages reordered by sequence number in the cleaned layer.
                4. Days where duplicates exceed a threshold raised as incidents.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every source has a defined duplicate key, duplicates and reorderings are counted daily, and days above threshold appear in the incident log."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Define the duplicate key for each source and write it down"
                - "Count duplicates per day across the last month of data"
                - "Reorder out-of-sequence messages by sequence number in cleaning"
                - "Set the duplicate threshold that raises an incident"
            - name: Gap detection and backfill procedure
              description: |-
                ## Purpose
                Silent gaps in tick history are worse than obvious errors, because research treats silence as a quiet market. Defining what counts as a gap per venue, detecting them across the full history, and having a written procedure for refilling from a vendor or a secondary capture means every hole is either filled or explicitly marked.

                ## Milestones
                1. Gap definitions per venue, using sequence breaks and abnormal silence.
                2. A full history scan producing a list of every gap found.
                3. A backfill procedure written for each source of replacement data.
                4. Unfillable gaps marked in the data so research can skip them.

                ## Notes
                Record where each backfilled range came from. Mixed sources in one day can carry different timestamps and conditions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A history-wide gap list exists, each gap is filled with its source recorded or marked as unfillable, and a written backfill procedure covers every source."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Define a gap for each venue by sequence break or abnormal silence"
                - "Scan the full history and list every gap found"
                - "Write the backfill steps for each replacement source"
                - "Mark unfillable gaps with a flag research queries can read"
            - name: Crossed and locked quote handling policy
              description: |-
                ## Purpose
                Quotes where the bid is at or above the ask appear for real reasons, such as fragmented venues, slow feeds and auctions, as well as through data errors. A written policy for when to keep, flag or drop them, applied the same way everywhere, stops one researcher's spread statistics disagreeing with another's on the same data.

                ## Milestones
                1. Crossed and locked quote rates measured per venue and time of day.
                2. Legitimate causes separated from data errors on sample cases.
                3. A keep, flag or drop rule written for each case.
                4. The rule implemented in cleaning and noted in the dictionary.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written policy covers each crossed and locked quote case with a keep, flag or drop rule, and cleaning output reports how many quotes each rule touched."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure crossed and locked quote rates by venue and hour"
                - "Inspect twenty sample cases and note the likely cause of each"
                - "Write a keep, flag or drop rule for each cause"
                - "Implement the rules and add them to the data dictionary"
            - name: Trade corrections, cancels and condition codes
              description: |-
                ## Purpose
                Trades are cancelled, corrected and reported late, and condition codes mark prints that should not set a price, such as out-of-sequence reports, average price trades and odd lots. Applying corrections and decoding conditions consistently is the difference between a last-price series that is right and one that jumps on prints no participant could have traded.

                ## Milestones
                1. Every condition code in your sources decoded and classed as price-setting or not.
                2. Cancel and correction messages applied to the trades they amend.
                3. A cleaned last-price series built only from eligible trades.
                4. New or changed codes picked up from exchange notices.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All condition codes are classified, cancels and corrections are applied in the cleaned layer, and the eligible-trade price series is documented."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Export every distinct condition code found in the last year"
                - "Classify each code as price-setting or not, with its source"
                - "Apply cancel and correction messages to the trades they amend"
                - "Check exchange notices for new or changed condition codes @recurring(monthly:6)"
            - name: Auction and off-exchange prints flagging
              description: |-
                ## Purpose
                Opening and closing auction prints, off-exchange reports and block trades behave differently from continuous trading, and mixing them in can distort intraday volume curves and volatility. Flagging each print by trading phase and reporting type lets research include or exclude them deliberately rather than by accident.

                ## Milestones
                1. Trading phase recorded for every trade: auction, continuous, or after hours.
                2. Off-exchange and reported trades flagged separately from lit trades.
                3. Volume shares by phase and reporting type summarised for sample days.
                4. Query helpers offering phase filters with sensible defaults.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every stored trade carries a trading phase and reporting type flag, and query helpers expose filters for both."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Map each source's auction and reporting indicators to phase flags"
                - "Add phase and reporting type columns to the cleaned trades"
                - "Summarise volume shares by phase for five sample days"
                - "Add phase filters to the research query helpers"
            - name: Reproducible bar building from cleaned ticks
              description: |-
                ## Purpose
                Most research reads bars, not ticks, and two people building one-minute bars from the same ticks often get different answers because of boundary rules, eligible trades and empty intervals. A single bar builder with written conventions for time, volume and dollar bars, versioned alongside the cleaning rules, gives everyone the same derived data.

                ## Milestones
                1. Bar boundary, empty-interval and eligible-trade rules written down.
                2. Time, volume and dollar bars produced by one shared builder.
                3. Each bar data set tagged with builder and cleaning rule versions.
                4. Bars for one day checked by hand against the underlying ticks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One shared builder produces time, volume and dollar bars under written conventions, each output is version-tagged, and one day is hand-checked."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the conventions for bar boundaries and empty intervals"
                - "Build time, volume and dollar bars from one shared function"
                - "Tag each bar output with builder and cleaning versions"
                - "Hand-check ten bars from one day against the ticks behind them"
            - name: Migrating CSV archives to columnar files
              description: |-
                ## Purpose
                Years of gzipped CSV files are slow to scan, ambiguous about types and expensive to keep. A planned migration to the chosen columnar format, done in batches with row counts and checksums compared at each step, can cut storage and scan time sharply while proving nothing was lost on the way.

                ## Milestones
                1. A migration order set, starting with the data sets research reads most.
                2. A conversion job that records row counts in and out for every file.
                3. Each converted batch verified before the next starts.
                4. Original CSV files kept until the converted copies have passed a restore drill.

                ## Notes
                Parse types explicitly. Letting a library infer types from CSV is how leading zeros, large integers and timestamps get mangled.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every planned CSV data set is converted with matching row counts per file, and originals are retired only after a successful restore of the converted copies."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Rank the CSV data sets by how often research reads them"
                - "Write the conversion job with explicit types and row count logging"
                - "Convert and verify the first batch before starting the next"
                - "Restore converted copies once before retiring the original files"
            - name: Hot, warm and cold storage tiers
              description: |-
                ## Purpose
                Researchers read the last year far more often than the last decade, yet many stores keep everything on the fastest, most expensive disks. Defining tiers by age and access, with automatic movement between them and a known retrieval time for cold data, cuts cost without making old history unreachable.

                ## Milestones
                1. Access frequency measured by data age over the last quarter.
                2. Hot, warm and cold tiers defined with age cut-offs and retrieval times.
                3. A job moving partitions between tiers on schedule.
                4. Retrieval of one cold partition tested and timed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Tiers are defined with age cut-offs, partitions move on schedule, and one cold retrieval has been timed and documented."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Measure read frequency by data age from query logs"
                - "Write the tier definitions with cut-offs and retrieval times"
                - "Move partitions older than the hot window to the next tier @recurring(quarterly)"
                - "Retrieve one cold partition and record how long it took"
            - name: Query helpers for researchers
              description: |-
                ## Purpose
                When every researcher writes their own file-reading code, each one handles time zones, identifiers and flags slightly differently. A small, documented set of helpers for loading trades, quotes, bars and as-of joins by instrument and date, with the cleaning version as a parameter, makes the right way the easy way.

                ## Milestones
                1. The five most common data requests turned into helper functions.
                2. Helpers resolving identifiers and time zones through the store's own tables.
                3. A cleaning version parameter with a pinned default.
                4. Usage examples published and two researchers using the helpers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five documented helpers cover the most common requests with a cleaning version parameter, and at least two researchers use them in current work."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask three researchers for the data requests they write most often"
                - "Write helpers for the five most common requests"
                - "Add a cleaning version parameter with a pinned default"
                - "Publish usage examples and walk two researchers through them"
            - name: Feed format change cutover
              description: |-
                ## Purpose
                Exchanges and vendors change message formats, add fields and retire old feeds, usually with a few months of notice and a test environment. Treating each change as a dated cutover, with parallel capture, a comparison window and a recorded switch date, keeps the history continuous across the change.

                ## Milestones
                1. The change notice read and every affected loader and field listed.
                2. The new format captured or loaded in parallel with the old one.
                3. A comparison window showing matching counts and prices between the two.
                4. The switch date recorded in the schema change log and the dictionary.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new format runs in parallel for an agreed window with matching counts and prices, and the switch date is in the schema change log."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List every loader and field the change notice affects"
                - "Set up parallel capture or loading of the new format"
                - "Compare message counts and prices between old and new each day"
                - "Record the switch date in the schema change log"
            - name: Daylight saving transition checks
              description: |-
                ## Purpose
                Twice a year, clocks change in some venue zones and not others, and for a week or two the gap between, say, a European and a North American session shifts by an hour. A short checklist run in the days around each change confirms the calendar, the session filters and the bar boundaries all moved correctly.

                ## Milestones
                1. The coming transition dates listed for every venue zone held.
                2. Session filters and bar boundaries checked on the first day after each change.
                3. Completeness counts for the transition days compared with normal days.
                4. Any problem fixed and added to the time edge case tests.

                ## Notes
                Start from the **Operational checklist** template, and reuse it every spring and autumn.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "For each clock change, a completed checklist confirms session filters, bar boundaries and completeness counts were correct on the first day after."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "List the next clock change dates for every venue zone held"
                - "Check session filters on the first trading day after the change"
                - "Compare transition day message counts with a normal week"
                - "Add any problem found to the time edge case tests"
            - name: Annual archive integrity audit
              description: |-
                ## Purpose
                Bit rot, partial writes and forgotten manual edits are rare per file but near certain across millions of partitions over years. Once a year, recomputing checksums across the whole archive, checking every partition against the inventory and confirming permissions on the raw layer shows the archive is still complete and untouched.

                ## Milestones
                1. Checksums recomputed for every partition and compared with stored values.
                2. Every partition reconciled against the data set inventory.
                3. Write permissions on the raw layer confirmed as ingest-only.
                4. An audit report filed with every mismatch and its resolution.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A yearly audit report shows checksums verified for every partition, inventory reconciled and raw-layer permissions confirmed, with all mismatches resolved."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Run the full archive integrity audit and checksum comparison @recurring(yearly)"
                - "Reconcile every partition with the data set inventory"
                - "Confirm only the ingest process can write to the raw layer"
                - "File the audit report with each mismatch and how it was resolved"
            - name: Loading a multi-year history backfill
              description: |-
                ## Purpose
                A newly licensed history, often years of data delivered on drives or in a bucket, is the largest single load most tick stores ever take. Planning it as a project, with a test load, a throughput estimate, staged verification and a cut-over to research, avoids a half-loaded archive that nobody is sure about.

                ## Milestones
                1. A one-week sample loaded and checked against the vendor's stated counts.
                2. Throughput measured and a full load schedule estimated.
                3. The full history loaded in batches, each verified before the next.
                4. Research told when the data is ready, with any known gaps listed.

                ## Notes
                Licence and purchase terms belong to sourcing. Before loading, confirm the licence allows the storage location and users you plan.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The full history is loaded with each batch verified against vendor counts, and a release note listing known gaps has gone to research."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Load a one-week sample and compare counts with the vendor's manifest"
                - "Measure load throughput and estimate the full schedule"
                - "Load the history in batches and verify each before continuing"
                - "Send research a release note with coverage and known gaps"
            - name: Market stress day data review
              description: |-
                ## Purpose
                On extreme days message rates can run many times normal, feeds fall behind, venues halt and correct trades in bulk, and capture processes are most likely to drop data. Reviewing the stored data for a recent stress day, and comparing it with venue statistics, shows whether your pipeline holds up exactly when research cares most.

                ## Milestones
                1. A recent high-volume day chosen and its venue statistics gathered.
                2. Stored message counts compared with venue-published totals.
                3. Halts, bulk corrections and feed delays on the day identified in the data.
                4. Weaknesses found written up with fixes scheduled.
              priority: medium
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A written review of one stress day compares stored counts with venue totals, identifies halts and corrections, and schedules a fix for each weakness."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a recent stress day and collect the venues' published statistics"
                - "Compare stored trade and quote counts with venue totals"
                - "Find halts, bulk corrections and capture delays in the stored data"
                - "Write up each weakness with a scheduled fix"
            - name: Tick store on a single workstation
              description: |-
                ## Purpose
                Working alone at home, a researcher or engineer rarely needs a cluster: a fast local drive, columnar files partitioned by date and an embedded query engine handle years of data for a modest universe. Setting this up deliberately, with a simple backup to an external drive, gives a capable private store without the cost or upkeep of a server.

                ## Milestones
                1. A storage budget set for the drive size and the data you plan to keep.
                2. Columnar files partitioned by date on a dedicated local drive.
                3. An embedded query engine answering the common queries in seconds.
                4. New partitions copied to an external drive on a fixed day each month.

                ## Notes
                Check your data licence allows personal storage and use. Keep any data from an employer completely separate, and never bring it home.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dedicated local drive holds partitioned columnar tick files, common queries run in seconds, and a monthly external copy is logged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set the storage budget and the instruments you will keep"
                - "Lay out columnar files partitioned by date on a dedicated drive"
                - "Time three common queries with an embedded query engine"
                - "Copy new partitions to the external backup drive @recurring(monthly:25)"
            - name: Recording your own crypto exchange feed
              description: |-
                ## Purpose
                Many crypto venues publish free real-time trade and book streams, which makes them a common first capture project for an individual engineer. Recording one reliably means handling disconnects, snapshot and update sequencing, rate limits and storage rotation, and learning quickly that a stream with silent gaps is worse than no stream.

                ## Milestones
                1. One venue's trade and book streams captured to daily files.
                2. Reconnects logged and each disconnect window recorded as a gap.
                3. Book updates checked against the venue's sequence numbers.
                4. A week of capture with every gap listed and explained.

                ## Notes
                Read the venue's terms on storing and redistributing its data. This is a data project, not a reason to trade.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One week of trade and book capture from a single venue is stored in daily files, with every disconnect recorded as a gap."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the venue's stream documentation and data terms"
                - "Write a capture process that rotates files daily"
                - "Log every reconnect and record its window as a gap"
                - "Check yesterday's capture files for gaps and sequence breaks @recurring(daily)"
            - name: First 90 days as a market data engineer
              description: |-
                ## Purpose
                Joining a desk as the person responsible for tick data means inheriting pipelines, unwritten rules and researchers with strong opinions. A structured first 90 days, listening first, mapping the data flows, then fixing one visible pain point, earns trust before you propose bigger changes to a store others depend on.

                ## Milestones
                1. Every researcher and trader who reads tick data met and their pain points noted.
                2. A diagram of current data flows from source to research query.
                3. One visible pain point fixed and announced by day 60.
                4. A ranked improvement plan agreed with your manager by day 90.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Change nothing in production cleaning rules during the first month.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "By day 90 a data flow diagram, a fixed pain point and a ranked improvement plan agreed with your manager all exist."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List everyone who reads tick data and book short meetings"
                - "Draw the current flow from each source to research queries"
                - "Choose one visible pain point to fix before day 60"
                - "Write the ranked improvement plan and review it with your manager"
            - name: Handing over a tick pipeline when you leave
              description: |-
                ## Purpose
                When the person who built the tick store leaves, undocumented cron jobs, credentials and cleaning exceptions leave with them. A proper handover, with a runbook, a walk-through of every job, a list of known problems and supervised runs by your successor, protects the colleagues who rely on it and your own professional reputation.

                ## Milestones
                1. A runbook covering every scheduled job, its inputs, outputs and failure modes.
                2. Known problems and open incidents listed with context.
                3. Your successor running the daily checks while you watch.
                4. Access and credentials transferred through the proper process, with nothing kept.

                ## Notes
                Take no data, code or credentials with you. Follow your contract and your employer's leaving process.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A runbook and known-problems list are handed over, your successor has run a week of daily checks, and all access has been transferred."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List every scheduled job with its inputs, outputs and failure modes"
                - "Write the known problems and open incidents with context"
                - "Watch your successor run a week of daily checks"
                - "Transfer access through the formal process and confirm it in writing"
            - name: Data request intake for researchers
              description: |-
                ## Purpose
                As the tick data owner you become a service to researchers, and ad hoc requests in chat crowd out planned work and get forgotten. A simple intake, stating what data, which dates, what deadline and why, with a weekly triage, makes requests visible, sets fair expectations and shows which recurring needs deserve a helper or a new data set.

                ## Milestones
                1. A short request form or channel with required fields.
                2. Every open request listed with owner, status and expected date.
                3. A weekly triage that orders requests by need and effort.
                4. Requests asked for three or more times turned into self-service helpers.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "All data requests go through one intake with status visible, triage happens weekly, and at least one repeated request has become a self-service helper."
                cadence: rolling
              tasks:
                - "Create the request form with data, dates, deadline and purpose fields"
                - "Move every open chat request into the intake list"
                - "Triage open data requests by need and effort @recurring(weekly:thu)"
                - "Turn the most repeated request into a self-service helper"
            - name: Cross-venue timestamp alignment
              description: |-
                ## Purpose
                Comparing prices across venues at millisecond or finer resolution requires knowing how each venue's clock, each feed's delay and each capture location distort the order of events. Measuring offsets between sources for the same instrument, and recording correction estimates with their uncertainty, lets lead-lag research say what the data can and cannot support.

                ## Milestones
                1. Pairs of sources quoting the same instrument identified for comparison.
                2. Offsets between their timestamps estimated on sample days.
                3. Correction estimates stored with uncertainty and the method used.
                4. A note for researchers stating the finest timing the data supports.

                ## Notes
                Report the uncertainty, not just the point estimate. A correction smaller than its error band is not worth applying.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Offset estimates with uncertainty exist for each compared source pair, and a published note states the finest timing resolution the data supports."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose three instruments quoted on more than one source"
                - "Estimate timestamp offsets between sources on five sample days"
                - "Store each correction estimate with its uncertainty and method"
                - "Compare cross-venue offsets with the previous month's estimates @recurring(monthly:18)"
            - name: Full depth order book storage at scale
              description: |-
                ## Purpose
                Order-by-order data for active venues can run to billions of messages a day, and storing it so a researcher can rebuild any book at any moment needs a different design from trades and quotes. Combining periodic book snapshots with the message stream, choosing the snapshot interval from query needs, keeps rebuild times short without storing every book state.

                ## Milestones
                1. Daily message volumes and storage needs measured for each depth feed.
                2. A snapshot interval chosen from measured rebuild times.
                3. Snapshots and messages stored so a rebuild starts from the nearest snapshot.
                4. Rebuilding any book state in a target time demonstrated on a busy symbol.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Snapshots plus messages are stored for each depth feed, and any book state on a busy symbol can be rebuilt within the documented target time."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Measure daily message volume and size for each depth feed"
                - "Time book rebuilds from snapshots at three different intervals"
                - "Store snapshots beside the message stream at the chosen interval"
                - "Demonstrate a book rebuild at a random time on a busy symbol"
            - name: Bitemporal store for late corrections
              description: |-
                ## Purpose
                Vendors and venues resend corrected history, and overwriting it means an old backtest can no longer be reproduced. Recording two times for every row, when the event happened and when you learned of it, lets research ask for the data as it was known on any date, which is what point-in-time testing at tick level really requires.

                ## Milestones
                1. Knowledge time added to the schema beside event time.
                2. Corrections stored as new versions rather than overwrites.
                3. Queries able to return data as known on a chosen date.
                4. One past backtest reproduced exactly using the as-known view.

                ## Notes
                Storage grows with every correction batch, so measure correction volumes first and decide how far back versions are kept.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Corrections are stored as dated versions, and one earlier backtest has been reproduced exactly from the as-known-on-date view."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Measure how many rows past correction batches have changed"
                - "Add a knowledge time column and version corrected rows"
                - "Write the query that returns data as known on a chosen date"
                - "Reproduce one past backtest from the as-known view"
---

# Tick Data Storage and Cleaning

Tick data storage and cleaning is the plumbing under every intraday result: where trades, quotes and book updates live, how their timestamps are defined, and which rules decide that a print is bad. It is written for the engineer who owns that plumbing, alone on a workstation or on a desk, and runs from foundations (an inventory, a schema, a timestamp policy, the storage layout and format, raw and cleaned layers, backups) through the daily and monthly routines that keep the store honest, the skills behind columnar storage, compression and book rebuilding, the cleaning decisions for duplicates, gaps, crossed quotes and corrections, dated events such as feed changes and large backfills, situations from a solo setup to a handover, and a few specialist builds.

The rhythms are a daily ingest completeness check, a weekly quality scorecard and clock review, monthly restore drills, filter reviews and storage checks, and quarterly audits of cleaning rules against raw data. Clean data does not make a strategy work, and nothing here is trading advice; it pairs with the Purchase decision, Operational checklist, Metrics log, Remediation plan and Onboarding 30/60/90 templates. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
