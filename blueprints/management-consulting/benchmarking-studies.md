---
id: management-consulting.benchmarking-studies
name: Benchmarking Studies
description: "A working method for client benchmarks: the decision it serves, a defensible peer set, defined metrics, clean collection and normalisation, gaps shown honestly and false comparisons caught before the readout."
category: business
version: 1.0.0
tags: [management-consulting, benchmarking-studies, knowledge-worker, benchmarking, peer-group, normalisation, kpi, gap-analysis]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Benchmarking Studies
          description: "Running benchmarking for a client: choosing peers and metrics, data collection, normalisation, presenting gaps and avoiding false comparisons."
          projects:
            - name: The decision a benchmark has to inform
              description: |-
                ## Purpose
                A benchmark commissioned because the chief executive asked how we compare will produce forty charts and no action. Writing down the one or two decisions the numbers must inform, such as whether to restructure the finance function or where to set next year's cost target, tells you which metrics matter, how precise they need to be and when the study can stop.

                ## Milestones
                1. The sponsor's decision written in one sentence, with the date it will be taken.
                2. Three to six metrics that would genuinely move that decision, and none that would not.
                3. The precision needed for each metric stated, for example plus or minus ten percent is good enough.
                4. The written decision statement confirmed by the sponsor by email.

                ## Notes
                If the sponsor cannot name a decision, propose one. A benchmark with no decision attached is usually a reassurance exercise, and it is better to know that before scoping the data collection.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-sentence decision statement and a list of no more than six metrics tied to it, confirmed by the sponsor in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the sponsor which decision the benchmark results will feed and when"
                - "Draft the decision statement in one sentence and send it for comment"
                - "List candidate metrics and strike out any that would not change the decision"
                - "Agree the precision each remaining metric needs"
            - name: Peer group selection criteria and shortlist
              description: |-
                ## Purpose
                Clients often hand you a list of the companies they admire or resent, which is a list of rivals, not a peer group. Setting explicit criteria first (size band, business model, geography, channel mix, ownership) and scoring candidates against them gives a set of eight to fifteen peers you can defend when someone asks why a competitor was left out.

                ## Milestones
                1. Four to six selection criteria written down, each with a threshold or band.
                2. A long list of at least twenty candidates scored against every criterion.
                3. A shortlist of eight to fifteen peers, with a sentence on why each is in.
                4. The client's own suggested peers either included or excluded with a stated reason.
                5. The peer set signed off by the sponsor before any data is collected.

                ## Notes
                Keep a reserve list of three or four peers. Some will refuse to take part or turn out to have unusable data, and swapping in a reserve is much easier than reopening the whole debate.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed-off peer set of eight to fifteen organisations, each scored against the written criteria, plus a named reserve list."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write four to six peer selection criteria with a band for each"
                - "Build a long list of twenty candidates from industry lists and filings"
                - "Score every candidate against the criteria in a single table"
                - "Present the shortlist and reserve list to the sponsor for sign-off"
            - name: Metric dictionary with definitions and boundaries
              description: |-
                ## Purpose
                Finance cost as a percentage of revenue means nothing until you know whether it includes payroll processing, internal audit, shared service charges and outsourced bookkeeping. A metric dictionary that pins down numerator, denominator, inclusions, exclusions and period for every metric is what stops participants answering different questions under the same heading.

                ## Milestones
                1. Every metric in scope given a formula, unit and reporting period.
                2. Inclusions and exclusions listed for each cost or headcount boundary.
                3. Three worked examples showing how tricky cases should be classified.
                4. The dictionary tested on the client's own data before it goes to any participant.
                5. A version number and change log at the top of the dictionary.

                ## Notes
                Reuse a recognised process classification framework for functional boundaries where one exists in the industry, so participants recognise the categories rather than learning yours.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned metric dictionary covering every in-scope metric with formula, boundaries and worked examples, tested on the client's data."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every metric in scope with a draft formula and unit"
                - "Write inclusions and exclusions for each cost and headcount boundary"
                - "Add three worked examples for the cases participants usually misclassify"
                - "Fill the dictionary with the client's own numbers to test it"
            - name: Benchmark data source map
              description: |-
                ## Purpose
                Every metric can be sourced in several ways: annual reports and regulatory filings, industry association surveys, commercial databases, your firm's past studies, or a fresh questionnaire to participants. Mapping each metric to its best and fallback source early shows where the study will be quick, where it will need primary collection and where the honest answer is that comparable data does not exist.

                ## Milestones
                1. Each metric linked to a primary source and a fallback source.
                2. Every source rated for coverage of the peer set, recency and definitional fit.
                3. Metrics with no credible source flagged and raised with the sponsor.
                4. An estimate of collection effort per source in days.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A source map that gives every in-scope metric a primary and fallback source with coverage and recency ratings, and flags any metric without one."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List public, commercial, internal and survey sources for each metric"
                - "Check how many of the peers each source actually covers"
                - "Rate each source for recency and fit with the metric dictionary"
                - "Flag metrics with no credible source in a note to the sponsor"
            - name: Client baseline for every benchmarked metric
              description: |-
                ## Purpose
                Teams spend weeks gathering peer data and then discover the client's own number is the least reliable figure on the chart. Building the client baseline first, using exactly the same dictionary participants will use, exposes allocation questions and missing data while there is still time to fix them.

                ## Milestones
                1. The client's value for every metric calculated from source systems, not from a board pack.
                2. Each figure traced to a named report, ledger extract or headcount file.
                3. Allocation choices such as shared services or group recharges written down.
                4. The baseline reviewed and accepted by the client's finance or function lead.

                ## Notes
                Ask for the raw extract rather than a summarised figure. Summaries usually follow management definitions, which are rarely the benchmark definitions.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A client baseline for every in-scope metric, each value traced to a source file and accepted in writing by the client's function lead."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Request raw extracts for each metric from the client's finance team"
                - "Recalculate every metric strictly to the dictionary definitions"
                - "Write down each allocation choice and who agreed it"
                - "Walk the function lead through the baseline and record their acceptance"
            - name: Benchmark scope, timeline and sponsor agreement
              description: |-
                ## Purpose
                Benchmarks slip because participant data arrives late and nobody planned for it. A one-page plan with the peer count, metrics, collection window, validation round and readout date, agreed with the sponsor at the start, gives you a basis for saying no to new metrics in week four and for reporting slippage honestly.

                ## Milestones
                1. A one-page plan covering metrics, peers, phases and the readout date.
                2. A collection window with a firm cut-off after which late data is excluded.
                3. A validation round and buffer week built into the timeline.
                4. The plan agreed with the sponsor and saved with the engagement records.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page benchmark plan with a data cut-off date and readout date, agreed by the sponsor in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the one-page plan with phases, cut-off and readout dates"
                - "Add a buffer week before the readout for late validation queries"
                - "Agree the rule for handling data that arrives after the cut-off"
                - "Send the plan to the sponsor and file their confirmation"
            - name: Confidentiality and competition guardrails for peer data
              description: |-
                ## Purpose
                Collecting cost, price or salary data from competitors can create real competition law exposure, and a leaked participant figure ends a firm's benchmarking business. Agreeing the guardrails before any data arrives (aggregation thresholds, anonymisation, historical rather than forward data, who can see raw submissions) protects participants, the client and you.

                ## Milestones
                1. Your firm's legal or risk team consulted on the study design.
                2. A minimum number of contributors per reported figure agreed, so no single peer can be identified.
                3. Rules written for who can access raw participant submissions and where they are stored.
                4. Forward-looking prices and plans excluded from the data request.
                5. The guardrails recorded in a risk register and shared with the team.

                ## Notes
                Start from the **Risk register** template. This is an organisational checklist, not legal advice: competition rules differ by country, so take the study design to your firm's counsel.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written guardrails covering aggregation thresholds, access to raw data and excluded data types, reviewed by legal or risk and logged in the risk register."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a short review of the study design with legal or risk"
                - "Agree the minimum number of contributors behind each reported figure"
                - "Set up restricted storage for raw participant submissions"
                - "Remove any forward-looking price or plan questions from the request"
            - name: Master benchmark dataset structure
              description: |-
                ## Purpose
                When every analyst keeps peer numbers in their own tab, the readout ends up with three versions of the median. One long-format dataset, with a row per peer, metric and year plus columns for source, raw value, adjusted value and flags, gives a single place to calculate from and an audit trail for every number on every chart.

                ## Milestones
                1. A long-format table with peer, metric, period, raw value, adjusted value, source and flag columns.
                2. Anonymised peer codes used in place of names wherever charts will be built.
                3. Calculations for medians and quartiles driven only from the master table.
                4. A single owner named for loading and changing data.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One master dataset with source and flag columns feeds every benchmark chart, and a named owner controls changes to it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set out the master table columns and agree them with the team"
                - "Assign anonymised codes to every peer and keep the key separately"
                - "Point every summary calculation at the master table only"
                - "Name the dataset owner and tell the team who it is"
            - name: Fiscal year and period alignment rules
              description: |-
                ## Purpose
                Peers with year ends in March, June and December are not describing the same twelve months, and in a year of high inflation or a shock that gap can be bigger than the performance difference you are measuring. Setting a rule for period alignment up front, such as nearest year end or calendarised trailing twelve months, avoids arguing about it once the charts exist.

                ## Milestones
                1. Each peer's financial year end recorded in the master dataset.
                2. A written rule for aligning periods, with the reason for choosing it.
                3. Peers needing calendarisation identified and the method applied consistently.
                4. The alignment rule stated in the footnotes of every affected chart.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written period alignment rule applied to every peer, with each peer's year end recorded and the rule footnoted on affected charts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record the financial year end of every peer"
                - "Choose between nearest year end and trailing twelve months"
                - "Apply the chosen method to every peer that needs it"
                - "Draft the standard footnote that explains the rule"
            - name: Weekly data collection status routine
              description: |-
                ## Purpose
                Data collection is where benchmarking timelines die, usually without anyone noticing until the cut-off. A Monday status check showing which peers have submitted, which are partial and which have gone silent keeps the team chasing the right people and gives the sponsor an honest picture of coverage.

                ## Milestones
                1. A status grid of peers against metrics, marked received, partial or missing.
                2. Coverage per metric shown as a count of peers with usable data.
                3. A named owner for chasing each missing participant.
                4. The grid updated every Monday throughout the collection window.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The collection status grid is updated every Monday of the collection window, with coverage counts per metric and a named chaser per missing peer."
                cadence: rolling
              tasks:
                - "Build the peer by metric status grid from the master dataset"
                - "Update the status grid and coverage counts @recurring(weekly:mon)"
                - "Assign a chaser to each participant marked missing"
                - "Flag any metric that falls below the agreed minimum coverage"
            - name: Participant questionnaire chasing rhythm
              description: |-
                ## Purpose
                Participants in a survey benchmark are doing you a favour, and their questionnaire sits behind everything else in their week. Polite, scheduled reminders that make the next step tiny (a call to walk through two questions, a pre-filled template) recover far more submissions than one desperate email the day before the cut-off.

                ## Milestones
                1. A reminder sequence written: friendly nudge, offer of help, final notice.
                2. Each participant's contact and their preferred channel recorded.
                3. Submissions logged on the day they arrive, with a thank-you sent.
                4. The final response rate recorded against the number invited.

                ## Notes
                Offering participants their own position against the anonymised peer set is the strongest reason they will give you, so say what they will receive in every reminder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every invited participant receives scheduled reminders until submission or the cut-off, and the final response rate is recorded."
                cadence: rolling
              tasks:
                - "Write the three reminder messages in the sequence"
                - "Send reminders to participants who have not yet submitted @recurring(weekly:tue)"
                - "Offer a short call to anyone stuck on a question @recurring(weekly:fri)"
                - "Log each submission and send a thank-you the same day"
            - name: Data validation query log
              description: |-
                ## Purpose
                Submitted benchmark data is wrong more often than people expect: headcount in full-time equivalents in one place and heads in another, costs in thousands where you asked for units, a missing outsourcing contract. A validation log with automatic checks and a query back to the participant for each anomaly turns raw submissions into numbers you can stand behind.

                ## Milestones
                1. Standard checks defined: totals that tie, ratios inside plausible ranges, year-on-year movements.
                2. Every submission run through the checks on the day it arrives.
                3. Each anomaly logged as a query with the participant's answer recorded.
                4. No figure used in a chart while its query remains open.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every submission passes the standard checks or has a logged query with a recorded answer before it is used in any chart."
                cadence: rolling
              tasks:
                - "Write the standard validation checks for each metric"
                - "Run new submissions through the checks and log any anomalies"
                - "Send open validation queries to participants @recurring(weekly:wed)"
                - "Mark resolved queries and release the data to the master table"
            - name: Normalisation decisions log
              description: |-
                ## Purpose
                Every benchmark involves dozens of small judgements: excluding a one-off restructuring charge, converting part-time staff to full-time equivalents, adjusting for an outsourced call centre. Writing each decision down with its reason and its effect on the result means you can answer a challenge in the readout and repeat the method next year.

                ## Milestones
                1. A log with columns for peer, metric, adjustment, reason, effect and approver.
                2. Every adjustment to raw data entered before the adjusted value is used.
                3. The total effect of adjustments on each metric's median calculated.
                4. The log reviewed by the manager before the readout deck is drafted.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every adjustment to raw benchmark data appears in the log with a reason and effect, and the manager has reviewed the log before the readout."
                cadence: rolling
              tasks:
                - "Set up the normalisation log with reason and effect columns"
                - "Review the week's adjustments with a second team member @recurring(weekly:thu)"
                - "Calculate how much the adjustments move each median"
                - "Take the log to the manager review before deck drafting starts"
            - name: Friday sponsor note on emerging gaps
              description: |-
                ## Purpose
                Sponsors who see the first big gap in the final readout tend to fight it, because it arrives as a surprise in front of their peers. A short Friday note on what the data is starting to show, with clear caveats on coverage, lets the sponsor absorb difficult findings early and tell you which explanations to test.

                ## Milestones
                1. A standard five-line note: coverage, early signals, caveats, questions, next week.
                2. The note sent every Friday of the study.
                3. Sponsor reactions and suggested explanations recorded for testing.
                4. No figure sent in a note that has an open validation query.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A short sponsor note goes out every Friday of the study, and sponsor responses are logged as hypotheses to test."
                cadence: rolling
              tasks:
                - "Draft the five-line note format and agree it with the manager"
                - "Send the weekly note on coverage and early signals @recurring(weekly:fri)"
                - "Log the sponsor's explanations as hypotheses to test"
                - "Check that every figure in the note has passed validation"
            - name: Benchmark source citation register
              description: |-
                ## Purpose
                Six months after a study, someone will ask where the top-quartile figure on slide twelve came from, and an analyst who has since rolled off is the only person who knew. A citation register that ties every external figure to its document, page, date accessed and licence terms makes the work reusable and defensible.

                ## Milestones
                1. A register with document, page or table, date accessed and licence restrictions.
                2. Every external figure in the master dataset linked to a register entry.
                3. Licence limits on commercial data checked before figures go into client deliverables.
                4. The register archived with the engagement files at close.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every external figure in the dataset links to a citation register entry with document, location, access date and licence terms."
                cadence: rolling
              tasks:
                - "Create the citation register with licence and access date columns"
                - "Link new external figures to register entries @recurring(weekly:wed)"
                - "Check licence terms before commercial data appears in a deliverable"
                - "Archive the register with the engagement files at close"
            - name: Outlier review before any median is shown
              description: |-
                ## Purpose
                One peer with an unusual business model can drag an average so far that the client looks either brilliant or broken. Reviewing outliers every week of the analysis phase, deciding case by case whether each is an error, a different business or a genuine leader, keeps the summary statistics honest and gives you the stories behind the extremes.

                ## Milestones
                1. A rule for flagging outliers, such as values beyond the interquartile fences.
                2. Each flagged value classified as error, structural difference or genuine performance.
                3. Errors corrected through the validation log and structural differences footnoted.
                4. Medians and quartiles preferred over means wherever outliers remain.

                ## Notes
                Never quietly drop a genuine top performer because it makes the gap look large. That peer is often the most useful part of the study.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every flagged outlier is classified and either corrected, footnoted or retained with a stated reason before summary statistics are shown."
                cadence: rolling
              tasks:
                - "Write the outlier flagging rule for the study"
                - "Classify the week's flagged outliers with the team @recurring(weekly:tue)"
                - "Footnote each structural difference that stays in the data"
                - "Switch any remaining averages on the charts to medians"
            - name: Industry benchmark reading habit
              description: |-
                ## Purpose
                Experienced benchmarkers can tell within seconds whether a number looks plausible, because they have seen dozens of studies in the sector. Reading one industry survey, association report or published benchmark each month, and noting the headline ranges, builds that instinct and a ready source list for the next study.

                ## Milestones
                1. A list of the main associations, surveys and annual studies in your sectors.
                2. One report read each month and its headline ranges noted.
                3. A short note per report on its sample, definitions and weaknesses.
                4. A quarterly scan for new or discontinued studies.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least ten industry benchmark reports read in a year, each with a note on sample, definitions and headline ranges."
                cadence: rolling
              tasks:
                - "List the main benchmark publishers in the sectors you work in"
                - "Read one benchmark report and note its ranges and sample @recurring(monthly:12)"
                - "Scan for new or discontinued industry studies @recurring(quarterly)"
                - "File each reading note where the team can search it"
            - name: Yearly benchmark refresh for a returning client
              description: |-
                ## Purpose
                Clients who adopt a benchmark as a target want it refreshed each year, and a refresh that changes definitions or peers quietly makes progress impossible to read. Running the refresh as a repeat cycle, with the same dictionary and a controlled list of changes, shows real movement and keeps the client's trust in the trend.

                ## Milestones
                1. Last year's dictionary, peer set and normalisation log retrieved.
                2. Any changes to peers or definitions listed, with restated prior-year figures.
                3. The refresh data collected against the same cut-off discipline as the original.
                4. Year-on-year movement shown for the client and the peer median.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A refreshed benchmark using last year's definitions, with any changes listed and prior-year figures restated for comparison."
                cadence: cyclic
              tasks:
                - "Retrieve last year's dictionary, peer list and normalisation log"
                - "Contact the client about the annual benchmark refresh @recurring(yearly)"
                - "List every change to peers or definitions and restate the prior year"
                - "Show the client's movement against the peer median"
            - name: Quarterly peer metrics watchlist
              description: |-
                ## Purpose
                Public peers report every quarter, and a client who has accepted a benchmark gap will ask whether the gap is closing. A light watchlist of five to eight metrics from peers' filings and results presentations keeps the comparison current between full studies and spots peers that have changed shape through acquisitions or disposals.

                ## Milestones
                1. Five to eight metrics chosen that can be read from public results.
                2. A watchlist covering every listed peer, refreshed after each reporting season.
                3. Acquisitions, disposals and restatements noted against the affected peer.
                4. A one-paragraph update ready to send the client after each season.

                ## Notes
                Start from the **Metrics log** template, with one row per peer and quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The watchlist is refreshed after every reporting season for each listed peer, with corporate changes noted and a short client update drafted."
                cadence: rolling
              tasks:
                - "Choose the metrics that can be read from public quarterly results"
                - "Refresh the watchlist from peers' latest results @recurring(quarterly)"
                - "Check peers for acquisitions, disposals or restatements @recurring(monthly:20)"
                - "Draft a one-paragraph update for the client after each season"
            - name: Normalisation methods for size, scale and currency
              description: |-
                ## Purpose
                Raw totals are almost never comparable across peers of different size, so nearly every benchmark divides by something: revenue, employees, units shipped, square metres, customers. Learning which denominator suits which metric, and how to treat currency and price level differences, is the core technical skill of the work.

                ## Milestones
                1. A reference note on common denominators and when each misleads.
                2. Market rate, average rate and purchasing power conversion compared on one worked example.
                3. Two ratios recalculated with an alternative denominator to see how rankings change.
                4. A default normalisation choice written for each metric family you use.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal reference note listing a default denominator for each metric family, with a worked currency conversion example."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the denominators used in your last two benchmarks"
                - "Convert one peer's costs using three currency methods and compare"
                - "Recalculate two ratios with a different denominator and note rank changes"
                - "Write your default normalisation choice for each metric family"
            - name: Reading annual reports and segment notes for peer data
              description: |-
                ## Purpose
                Most competitive benchmarks rely on published accounts, and the useful numbers are rarely on the income statement: they sit in segment notes, employee disclosures, operating reviews and investor presentations. Practising how to extract and reconcile them quickly, including spotting where definitions differ between companies, saves days on every study.

                ## Milestones
                1. Three peer annual reports worked through for headcount, segment and cost disclosures.
                2. A checklist of where each common metric is usually disclosed.
                3. Differences in segment definitions between peers noted in a table.
                4. One reconciliation from segment figures back to group totals completed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A disclosure checklist built from three annual reports, plus one segment-to-group reconciliation completed and checked."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Download the latest annual reports for three peers in one sector"
                - "Find headcount, segment and cost disclosures in each report"
                - "Practise extracting peer data from one annual report @recurring(monthly:8)"
                - "Reconcile one company's segment figures to its group totals"
            - name: Quartiles, medians and small-sample statistics
              description: |-
                ## Purpose
                Nine peers give a top quartile of just two companies, and a gap to it can move by a third if one participant restates. Understanding how quartiles are calculated, how sample size affects them and when to show ranges instead of points stops you presenting false precision to a board.

                ## Milestones
                1. The main quartile calculation methods compared on the same small dataset.
                2. The effect of adding or removing one peer on the quartiles shown on a worked example.
                3. A rule of thumb written for the minimum sample behind any quartile you show.
                4. A preferred way to present ranges when the sample is small.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example showing quartile sensitivity to one peer, and a written minimum sample rule for showing quartiles."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Calculate quartiles for a nine-peer dataset with two different methods"
                - "Remove one peer and record how far each quartile moves"
                - "Write your minimum sample rule for showing a quartile"
                - "Sketch a range chart for a metric with a small sample"
            - name: Functional cost benchmarks and activity definitions
              description: |-
                ## Purpose
                Benchmarking support functions such as finance, HR, IT or procurement depends on mapping people and costs to activities, because one company's finance team runs payroll and another's does not. Learning how to allocate full-time equivalents and spend to a standard activity list is what makes functional cost per revenue figures comparable.

                ## Milestones
                1. A standard activity list chosen for one function, from a recognised framework where possible.
                2. A sample allocation of a client team's full-time equivalents across activities.
                3. Rules written for splitting roles that cover several activities.
                4. Outsourced and offshore costs placed in the same activity structure.

                ## Notes
                People estimate their own time badly. Allocate by role and confirm with team leads, rather than asking every individual to fill in a timesheet.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed activity allocation for one function, including outsourced costs and written split rules for mixed roles."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick a standard activity list for one support function"
                - "Allocate a sample team's roles across the activities"
                - "Write rules for splitting roles that cover several activities"
                - "Map outsourced contracts into the same activity structure"
            - name: Benchmark questionnaire design
              description: |-
                ## Purpose
                Long questionnaires with vague questions get late, partial and inconsistent answers. Designing the questionnaire around the metric dictionary, with definitions next to each question, units fixed, validation built in and nothing asked that will not be used, raises both response rates and data quality.

                ## Milestones
                1. Every question traced to a metric in the dictionary, with orphans removed.
                2. Definitions and units shown beside each question rather than in an appendix.
                3. Built-in checks such as totals that must sum and ranges that warn.
                4. The questionnaire piloted with one friendly participant and revised.
                5. Completion time measured during the pilot and stated in the invitation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A piloted questionnaire in which every question maps to a dictionary metric, with inline definitions, built-in checks and a measured completion time."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Map every draft question to a metric in the dictionary"
                - "Delete questions that do not feed any metric"
                - "Add inline definitions, fixed units and sum checks"
                - "Pilot the questionnaire with one participant and time it"
            - name: Gap charts that show position honestly
              description: |-
                ## Purpose
                Benchmark charts persuade through design choices: a truncated axis, a ranked bar chart without the peer count, a top-quartile line drawn from three companies. Learning the standard formats (ranked bars with the client highlighted, quartile ranges, gap waterfalls) and the footnotes they need makes your exhibits clear without overstating anything.

                ## Milestones
                1. Three formats practised on one metric: ranked bar, quartile range and gap waterfall.
                2. A footnote standard covering sample size, period, source and adjustments.
                3. Axis rules written, including when a zero baseline is required.
                4. One draft exhibit reviewed by a colleague for anything that overstates the gap.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three chart formats built for the same metric, a written footnote standard, and one exhibit peer-reviewed for overstatement."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draw one metric as a ranked bar, a quartile range and a waterfall"
                - "Write the standard footnote for sample, period, source and adjustments"
                - "Set your rule for when a chart axis must start at zero"
                - "Ask a colleague to review one exhibit for overstatement"
            - name: Industry KPI standards and their quirks
              description: |-
                ## Purpose
                Many sectors have published standard measures, such as overall equipment effectiveness in manufacturing, cost per occupied bed in healthcare or cost to income in banking, and each has quirks that trip up outsiders. Learning the standard definitions for the sectors you serve means your benchmarks match how clients already talk about performance.

                ## Milestones
                1. The standard KPIs listed for two sectors you work in.
                2. Each KPI's official definition and the common variations noted.
                3. Known traps written down, such as differences in what counts as planned downtime.
                4. A one-page sector KPI sheet you can share with new team members.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page KPI sheet for each of two sectors, giving standard definitions, common variations and known traps."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the standard KPIs used in two of your sectors"
                - "Note each KPI's official definition and common variations"
                - "Study one sector KPI and its known traps @recurring(monthly:24)"
                - "Turn your notes into a one-page sheet for the team"
            - name: Choosing a commercial benchmark database
              description: |-
                ## Purpose
                Commercial benchmark providers can save weeks of collection, but their peer samples, definitions and licence terms vary enormously, and some will not let you show figures in a client deliverable. Comparing two or three providers against the study's actual metrics and peers gives a decision based on fit, not on the sales demonstration.

                ## Milestones
                1. Two or three providers shortlisted against the study's metrics and sectors.
                2. Each provider's sample size, definitions and recency checked for your peer set.
                3. Licence terms read for client use, attribution and data retention.
                4. A recommendation recorded with cost, fit and restrictions.

                ## Notes
                Start from the **Purchase decision** template. Ask each provider for the sample size behind a specific metric in your sector, not their total database size.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between at least two benchmark data providers, scored on peer coverage, definitional fit, recency, licence terms and cost."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist three providers covering the study's sector"
                - "Ask each for the sample size behind two of your key metrics"
                - "Read each licence for client use and attribution limits"
                - "Write up the recommendation with cost and restrictions"
            - name: Choosing the benchmarking type for the question
              description: |-
                ## Purpose
                Internal benchmarking across a client's own sites, competitive benchmarking against rivals, functional benchmarking against other industries and best-practice studies each answer different questions and need different data. Choosing deliberately avoids the common trap of running a competitive study when the real opportunity is the spread between the client's own plants or branches.

                ## Milestones
                1. The four main benchmarking types written out with the questions each answers.
                2. The client's decision matched to the most suitable type or combination.
                3. Data availability and confidentiality checked for the chosen type.
                4. The choice and the reason recorded in the study plan.

                ## Notes
                Internal benchmarks are underused. The data is easier to get, the definitions are already shared, and the best site gives a target nobody can call unrealistic.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The study plan states which benchmarking type was chosen, which decision it serves and why the alternatives were rejected."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the questions internal, competitive, functional and best-practice studies answer"
                - "Match the sponsor's decision to the best-fitting type"
                - "Check whether data exists for the chosen type"
                - "Record the choice and rejected options in the study plan"
            - name: Like-for-like adjustment for business mix
              description: |-
                ## Purpose
                A retailer with more city-centre stores, a bank with more business customers or a manufacturer with more custom products will look expensive on simple ratios even when it is efficient. Adjusting for mix, by segmenting the comparison or reweighting peers to the client's mix, is often the difference between a fair finding and one the client rightly rejects.

                ## Milestones
                1. The mix drivers that most affect each key metric identified.
                2. The client's and peers' mix measured on those drivers where data allows.
                3. A segmented or reweighted comparison built for the most affected metric.
                4. The unadjusted and adjusted gaps shown side by side with the method stated.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "At least one key metric shown both unadjusted and mix-adjusted, with the drivers and method written in the methodology note."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the mix differences the client will raise as objections"
                - "Measure client and peer mix on the two biggest drivers"
                - "Rebuild the most affected metric on a like-for-like basis"
                - "Show adjusted and unadjusted gaps on the same page"
            - name: Sizing the value of closing each gap
              description: |-
                ## Purpose
                Stated as four percentage points of revenue, a cost gap is easy to nod at and ignore. Restated in money, with a range for closing to the median and to the top quartile, it becomes a decision. Sizing the value at stake, carefully and with ranges, is how a benchmark turns into a target the client can choose to adopt.

                ## Milestones
                1. The gap to median and top quartile converted into money for each key metric.
                2. A low, central and high estimate showing the effect of data uncertainty.
                3. Gaps that are structural or unachievable separated from those that are addressable.
                4. The sized gaps reviewed with the client's finance lead before the readout.

                ## Notes
                Present the value as an indication of opportunity, not a commitment. Turning the gap into a delivery plan is a separate piece of work.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each key gap is sized in money with a low, central and high range, split into addressable and structural, and reviewed by the client's finance lead."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Convert each key gap to money at median and top quartile"
                - "Build a low, central and high range for each estimate"
                - "Separate structural gaps from addressable ones"
                - "Review the sized gaps with the client's finance lead"
            - name: Driver trees for the three largest gaps
              description: |-
                ## Purpose
                Saying the client is in the bottom quartile on maintenance cost per unit invites the question of why, and a benchmark without an answer to that gets filed. Breaking the three largest gaps into their drivers, such as volume, price, productivity and mix, shows whether the gap comes from paying more, doing more or doing it less efficiently.

                ## Milestones
                1. The three largest addressable gaps chosen for decomposition.
                2. A driver tree for each, with the client and peer median shown at every level.
                3. The driver responsible for most of each gap identified.
                4. A short list of questions for client managers about each main driver.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Driver trees for the three largest gaps, each showing client against peer median at every level and naming the dominant driver."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the three largest addressable gaps"
                - "Draw a driver tree for each from the metric dictionary"
                - "Fill each level with client and peer median values"
                - "Write the questions for client managers on each main driver"
            - name: Fallback plan when the peer sample is too thin
              description: |-
                ## Purpose
                Participants drop out, and sometimes a niche client simply has no close peers. Deciding in advance what you will do when coverage falls below the threshold (widen the criteria, use an adjacent sector, switch to internal or historical comparison, or report a range rather than quartiles) prevents a rushed and weak result at the end.

                ## Milestones
                1. A minimum peer count agreed for each metric.
                2. Fallback options ranked for each metric that might fall short.
                3. The sponsor told in advance how thin metrics will be presented.
                4. Fallback choices recorded in the methodology note when used.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every metric has an agreed minimum peer count and a ranked fallback, and the sponsor has been told how thin metrics will be shown."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set a minimum peer count for each metric"
                - "Rank the fallback options for metrics at risk of falling short"
                - "Explain to the sponsor how thin metrics will be presented"
                - "Record any fallback used in the methodology note"
            - name: Reconciling the benchmark with management's own view
              description: |-
                ## Purpose
                Managers usually have their own comparison, from a conference talk, a former employer or a supplier's claims, and if yours disagrees they will trust theirs. Finding those internal reference points early and reconciling them explicitly, showing why the numbers differ, turns a likely objection into evidence that your work is careful.

                ## Milestones
                1. The comparisons managers already quote collected in one list.
                2. Each traced to its source and definition where possible.
                3. Differences from your benchmark explained by definition, sample or period.
                4. A reconciliation page ready for the readout appendix.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A reconciliation page that lists every comparison management already quotes and explains each difference from the benchmark."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask function heads which external comparisons they already use"
                - "Trace each comparison to its source and definition"
                - "Explain each difference by definition, sample or period"
                - "Draft the reconciliation page for the appendix"
            - name: Launching the data request to participants
              description: |-
                ## Purpose
                The invitation is the moment participants decide whether to bother, and a confusing pack guarantees partial returns. Launching with a short letter from a senior sponsor, the questionnaire, the dictionary, a named contact, the cut-off date and a clear statement of what participants receive in return gets the collection off to a strong start.

                ## Milestones
                1. An invitation letter signed by a senior sponsor or partner.
                2. A pack containing questionnaire, definitions, confidentiality terms and the cut-off date.
                3. A named contact and a short briefing call offered to every participant.
                4. Every invitation sent on the planned day and logged in the status grid.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every participant receives the complete pack on the planned launch day, with a named contact and briefing call offered, and the sends are logged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft the invitation letter from the study plan"
                - "Assemble the questionnaire, definitions and confidentiality terms into one pack"
                - "Book two open briefing calls for participants in the first week"
                - "Send every invitation on launch day and log it in the status grid"
            - name: Validation workshop with client function heads
              description: |-
                ## Purpose
                Function heads who first see the benchmark in the final readout tend to attack the data instead of discussing the gaps. A working session a week or two before, walking them through their own baseline, the peer definitions and the emerging gaps, catches real errors and turns potential critics into people who have already accepted the numbers.

                ## Milestones
                1. An agenda covering baseline, definitions, emerging gaps and open questions.
                2. Each function head's challenges recorded with an owner and response date.
                3. Corrections fed into the validation and normalisation logs.
                4. A short follow-up note confirming what changed and what stands.

                ## Notes
                Start from the **Meeting notes** template. Show anonymised peer codes only, even to the client's own managers.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A validation workshop held before the readout, with every challenge logged, owned and answered in a follow-up note."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the validation session with the relevant function heads"
                - "Prepare a pack of baselines, definitions and emerging gaps"
                - "Record each challenge with an owner and answer date"
                - "Send the follow-up note on what changed and what stands"
            - name: Benchmark results readout to the leadership team
              description: |-
                ## Purpose
                The readout is where a benchmark becomes either a target or a filed report. Leading with the decision it was commissioned for, showing the few gaps that matter with sample sizes visible, and having the adjustments and reconciliations ready in the appendix lets the leadership team argue about what to do rather than whether the numbers are right.

                ## Milestones
                1. A deck that opens with the decision and the answer the benchmark gives.
                2. No more than five main gaps shown, each with sample size and adjustments footnoted.
                3. An appendix with the methodology note, reconciliation page and peer criteria.
                4. A dry run with the sponsor completed before the meeting.
                5. Decisions and requested follow-up recorded and sent within two working days.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The readout is delivered with methodology appendix, the leadership team's decisions are recorded and the note is sent within two working days."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draft the opening page with the decision and the benchmark's answer"
                - "Cut the main section to the five gaps that matter most"
                - "Run the deck through with the sponsor before the meeting"
                - "Send the recorded decisions and follow-ups within two working days"
            - name: Participant feedback reports for contributing peers
              description: |-
                ## Purpose
                Participants gave their data in exchange for seeing where they stand, and the promised report often arrives late or never, which kills next year's response rate. Producing a short individual report for each participant, showing their position against the anonymised set, keeps the promise and builds the panel for future studies.

                ## Milestones
                1. A standard participant report format with their values and anonymised peer ranges.
                2. Each report checked so no other participant can be identified.
                3. Reports sent within the promised window after the client readout.
                4. Feedback and willingness to take part next time recorded for each participant.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every contributing participant receives an individual, anonymised position report within the promised window, and their willingness to return is recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Design the one-page participant report format"
                - "Generate a report for each participant from the master dataset"
                - "Check every report against the aggregation thresholds"
                - "Send the reports and record each participant's response"
            - name: Participant roundtable on the benchmark findings
              description: |-
                ## Purpose
                In consortium or association benchmarks, a meeting where participants discuss the aggregate findings is often what they value most and what brings them back. Running it carefully, with only aggregated results, a competition law briefing and a facilitator keeping talk away from prices and plans, delivers that value without creating risk.

                ## Milestones
                1. An agenda limited to aggregate findings and practices, reviewed by legal or risk.
                2. A short opening statement on what may and may not be discussed.
                3. Minutes taken and reviewed before circulation.
                4. Topics participants want measured next year recorded.

                ## Notes
                Keep the rule simple in the room: historical, aggregated, practices yes; prices, margins, plans and customers no.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A roundtable held on an agenda reviewed by legal or risk, with an opening conduct statement, reviewed minutes and next year's topics recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the roundtable agenda around aggregate findings only"
                - "Have the agenda and opening statement reviewed by legal or risk"
                - "Assign a minute-taker and review the minutes before circulation"
                - "Collect topics participants want measured next year"
            - name: First benchmarking study as an analyst
              description: |-
                ## Purpose
                Analysts on a benchmark usually own the dataset, the validation queries and the charts, which is where the study is won or lost but rarely where anyone explains what good looks like. Setting yourself a few standards on day one, such as every number traced, every adjustment logged and every chart footnoted, makes you the person managers trust with the data.

                ## Milestones
                1. The metric dictionary and study plan read and questions raised in the first two days.
                2. A personal checklist for loading, checking and charting data.
                3. Every number you produce traceable to a source or log entry.
                4. Feedback from the manager asked for at the midpoint and at the end.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal data checklist used throughout the study and feedback requested from the manager at both midpoint and close."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the dictionary and study plan and list your questions"
                - "Write your own checklist for loading, checking and charting data"
                - "Ask the manager for midpoint feedback on the dataset"
                - "Note three lessons for your next benchmark at the end"
            - name: Leading a benchmark as engagement manager
              description: |-
                ## Purpose
                The manager of a benchmark has to hold the line on definitions, peers and the cut-off while the sponsor keeps asking for one more metric and the partner wants a striking headline. Planning your own role (where you review, what you will refuse, when you escalate) keeps the study defensible without losing the client.

                ## Milestones
                1. Review points set for dictionary, peer set, normalisation log and readout deck.
                2. A change rule agreed with the sponsor for new metrics after launch.
                3. A weekly check of coverage against the agreed minimum.
                4. A short post-study review with the team on what to repeat and change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four review points held as planned, a change rule agreed with the sponsor, and a post-study review recorded with the team."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Put review points for the four key artefacts in the plan"
                - "Agree with the sponsor how new metric requests will be handled"
                - "Check coverage against the minimum in each weekly team meeting"
                - "Run a thirty-minute post-study review with the team"
            - name: Benchmarking from an in-house strategy team
              description: |-
                ## Purpose
                Strategy and performance teams inside companies run benchmarks with no consortium, limited budget and colleagues who know exactly which peers they would like to beat. Working from public data, industry associations and internal site comparisons, with the same discipline on definitions, produces numbers the executive team will act on.

                ## Milestones
                1. The internal decision and executive owner for the benchmark named.
                2. Public and association sources mapped for the chosen metrics.
                3. An internal comparison across sites, regions or business units added where possible.
                4. Findings presented with the limits of public data stated plainly.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An in-house benchmark presented to its executive owner, combining public and internal comparisons, with the limits of public data stated."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Name the executive owner and decision for the internal benchmark"
                - "Map public and association sources for each metric"
                - "Add a comparison across your own sites or business units"
                - "Write a limits paragraph for the findings pack"
            - name: Benchmarking as an independent without a firm database
              description: |-
                ## Purpose
                Independent consultants lose the firm's benchmark database the day they leave, and clients still expect a comparison. Building a small personal set of public sources, association memberships and anonymised data from your own past work (where contracts allow) gives you credible comparisons without misusing anything you took from your former firm.

                ## Milestones
                1. A list of public and association sources for your niche.
                2. Contracts checked for what past client data you may reuse in anonymised form.
                3. A small reference dataset built only from data you are entitled to use.
                4. A standard method paragraph you can paste into proposals.

                ## Notes
                Never reuse benchmark data from a former employer. It is almost always the firm's confidential property.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reference dataset built only from public sources and data you are contractually entitled to reuse, with a standard method paragraph for proposals."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List public and association sources in your niche"
                - "Check past client contracts for rights to reuse anonymised data"
                - "Refresh public figures in your reference dataset @recurring(quarterly)"
                - "Write a method paragraph you can reuse in proposals"
            - name: Benchmarking public bodies and agencies
              description: |-
                ## Purpose
                Comparing ministries, councils, hospitals or utilities raises issues commercial benchmarks rarely face: different statutory duties, published data that becomes headline news, and politicians who will quote the bottom of a league table. Designing the comparison with service scope, population needs and publication in mind keeps it fair and usable.

                ## Milestones
                1. Each body's statutory duties and service scope compared before metrics are chosen.
                2. Adjustments for population, geography or demand need defined.
                3. Rules agreed with the sponsor for how and whether named results are published.
                4. Results presented as ranges or bands where a league table would mislead.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A public sector benchmark with service scope compared, need adjustments defined and a publication rule agreed before results are shared."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Compare the statutory duties and services of each body"
                - "Define adjustments for population, geography or demand"
                - "Agree the publication rule with the sponsor in writing"
                - "Choose bands or ranges for any metric unfit for a league table"
            - name: Rapid benchmark inside a due diligence timetable
              description: |-
                ## Purpose
                In a commercial or operational due diligence there may be ten days and no access to peers, yet the investor wants to know if the target's margins and costs are credible. A rapid benchmark built from filings, the data room and a few expert checks, with confidence levels marked on every figure, answers the question without pretending to precision.

                ## Milestones
                1. Five to eight metrics chosen that bear directly on the investment case.
                2. Peer figures gathered from filings and existing sources within three days.
                3. Each figure marked high, medium or low confidence.
                4. A two-page summary of where the target sits and what that implies for the plan.

                ## Notes
                Keep the target's data room material out of any reusable dataset. It belongs to that diligence only.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A two-page rapid benchmark for the diligence team, with every figure confidence-rated, delivered inside the diligence timetable."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Choose the metrics that bear on the investment case"
                - "Pull peer figures from filings within the first three days"
                - "Mark every figure with a confidence level"
                - "Write the two-page summary for the diligence team"
            - name: Designing a recurring consortium benchmark
              description: |-
                ## Purpose
                Run each year for a group of participating organisations, often through an industry body, a benchmark becomes valuable as the panel grows and definitions stay stable. Designing it as a long-term product (governance, a stable core metric set, a rotating topic module, participant rules) is very different from a one-off client study.

                ## Milestones
                1. A governance group of participants agreed with a terms of reference.
                2. A stable core metric set and one rotating topic module defined.
                3. Participation rules covering data supply, confidentiality and access to results.
                4. A yearly calendar from invitation to results meeting.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A consortium design with a governance group, core and rotating metric sets, participation rules and a yearly calendar, agreed by participants."
                cadence: cyclic
                effort_hours_estimate: "40"
              tasks:
                - "Draft terms of reference for the participant governance group"
                - "Split the metric set into a stable core and a rotating module"
                - "Write participation rules for data, confidentiality and results access"
                - "Open the consortium planning cycle with the governance group @recurring(yearly)"
            - name: Cross-country benchmarks with labour and price differences
              description: |-
                ## Purpose
                Comparing operations across countries mixes performance with wage levels, exchange rates, regulation and working hours. Separating volume measures (hours, full-time equivalents, units) from cost measures, and adjusting costs for local price and wage levels, shows whether a site is efficient or merely in a cheaper country.

                ## Milestones
                1. Each metric split into a volume measure and a cost measure.
                2. A wage or price level adjustment chosen and sourced for each country.
                3. Differences in working hours and statutory leave reflected in full-time equivalents.
                4. Results shown both in local terms and on the adjusted basis.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A cross-country benchmark showing volume and cost measures separately, with wage or price adjustments sourced for each country."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Separate each metric into a volume and a cost measure"
                - "Source a wage or price level index for each country"
                - "Adjust full-time equivalents for local working hours"
                - "Show adjusted and local results on the same exhibit"
            - name: Regression adjustment for scale effects
              description: |-
                ## Purpose
                Simple ratios assume costs scale in a straight line with size, but most functions have fixed costs and economies of scale, so small peers look worse than they are. Fitting a simple regression of cost against a size driver, and comparing each peer with its expected value, gives a fairer view when the peer set spans a wide size range.

                ## Milestones
                1. A size driver chosen and plotted against cost for the whole peer set.
                2. A simple regression fitted and its fit and sample size reported.
                3. The client's actual value compared with the predicted value at its size.
                4. The method explained in plain words in the methodology note.

                ## Notes
                With fewer than about fifteen peers, treat the regression as a sense check rather than the headline. Show the scatter so readers can judge it themselves.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A scatter and regression of cost against size for the peer set, with the client's actual versus expected value and the method explained."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Plot cost against a size driver for every peer"
                - "Fit a simple regression and record its fit and sample"
                - "Compare the client's actual value with its expected value"
                - "Explain the method in two plain sentences for the note"
            - name: IT spend and technology benchmark
              description: |-
                ## Purpose
                Technology spend is one of the hardest areas to benchmark, because it hides in business budgets, cloud subscriptions, capitalised projects and outsourced contracts. Building a full picture of run and change spend across the organisation before comparing with peers stops the client looking cheap only because half its technology is paid for elsewhere.

                ## Milestones
                1. Technology spend gathered from the IT budget, business units, capital projects and contracts.
                2. Spend split into run and change, and by tower such as infrastructure, applications and end-user services.
                3. Peer figures matched to the same split and boundaries.
                4. Hidden or shadow spend shown separately in the findings.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A technology benchmark built on full spend including business-unit and capitalised spend, split into run and change and by tower, with shadow spend shown."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect technology spend from IT, business units and capital projects"
                - "Split the spend into run and change and by tower"
                - "Match peer data to the same split and boundaries"
                - "Show shadow spend as a separate line in the findings"
            - name: Customer experience benchmark with mystery shopping
              description: |-
                ## Purpose
                Some of the most useful benchmarks measure what customers experience, such as response times, quote accuracy or the number of steps to open an account, which no annual report discloses. A structured mystery shopping or test-transaction programme across the client and its rivals gives comparable, first-hand evidence, provided the scenarios and scoring are fixed in advance.

                ## Milestones
                1. Four to six customer scenarios and a scoring sheet fixed before any test.
                2. The same number of tests run against the client and each rival.
                3. Results scored by two people independently and differences resolved.
                4. Findings presented by step in the customer process, not just as an overall score.

                ## Notes
                Stay within the law and the rivals' terms of use: test as an ordinary customer would, never misrepresent yourself to obtain confidential information, and check the design with legal or risk.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An equal number of scripted tests completed against the client and each rival, double-scored, with findings shown by customer process step."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Write four to six customer scenarios and the scoring sheet"
                - "Check the test design with legal or risk"
                - "Run an equal number of tests on the client and each rival"
                - "Double-score the results and resolve differences"
            - name: Methodology note that survives challenge
              description: |-
                ## Purpose
                Benchmarks that set targets or inform restructuring get challenged later, sometimes by unions, regulators or a new chief executive. A short methodology note covering peer selection, definitions, sources, adjustments, sample sizes and limitations, written as the study runs rather than at the end, lets anyone check the work years later.

                ## Milestones
                1. A note covering purpose, peers, definitions, sources, adjustments, statistics and limits.
                2. Each section drawn from the live logs rather than rewritten from memory.
                3. Limitations written plainly, including metrics with thin samples.
                4. The note reviewed by someone outside the team and archived with the dataset.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A methodology note covering peers, definitions, sources, adjustments, sample sizes and limitations, reviewed outside the team and archived."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set out the note's sections at the start of the study"
                - "Ask the agent to summarise the normalisation log for the note"
                - "Write the limitations section, naming every thin metric"
                - "Have someone outside the team review the note before archiving"
---

# Benchmarking Studies

Benchmarking looks simple and goes wrong quietly: the wrong peers, a metric that means three different things in three companies, or a gap that disappears once you adjust for business mix. This area starts with foundations (the decision the benchmark serves, peer selection, a metric dictionary, sources, the client baseline and confidentiality guardrails), then the operating routines that run during collection and validation, skills such as normalisation, quartile statistics and survey design, decisions about data sources and adjustments, the dated events from data launch to readout, variants for analysts, managers, in-house teams, independents and public bodies, and finally specialist work such as consortium benchmarks, regression adjustment and methodology notes that survive challenge.

During a study the rhythm is a Monday collection status check, twice-weekly participant chasing, midweek validation and outlier reviews and a Friday note to the sponsor, with monthly and quarterly upkeep of your reading, peer watchlist and public data, and a yearly refresh for returning clients. The Risk register, Metrics log, Purchase decision and Meeting notes templates pair with the confidentiality guardrails, the peer watchlist, the commercial database choice and the validation workshop. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
