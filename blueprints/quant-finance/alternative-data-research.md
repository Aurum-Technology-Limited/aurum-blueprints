---
id: quant-finance.alternative-data-research
name: Alternative Data Research
description: "An intake register, a standard scorecard, legal and licensing checks, fixed-length vendor trials, coverage and signal tests and a written cost against value decision for every alternative data set you consider."
category: business
version: 1.0.0
tags: [quant-finance, alternative-data-research, researcher, knowledge-worker, alternative-data, data-vendors, data-licensing, nowcasting]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - risk-register
    - metrics-log
    - meeting-notes
    - purchase-decision
    - onboarding-30-60-90
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Alternative Data Research
          description: "Evaluating alternative data sets: vendor trials, coverage and history checks, legal and licensing review, signal tests and cost against value."
          projects:
            - name: Alternative data research charter and scope
              description: |-
                ## Purpose
                Without a written scope, every vendor cold call becomes a trial and the research calendar fills with data nobody can use. A one-page charter stating which strategies and horizons you serve, which data categories are in scope, who signs off on spend and which categories are off limits for privacy or compliance reasons gives you a reason to say no quickly and a standard to say yes against.

                ## Milestones
                1. A one-page charter naming the strategies, holding periods and universes the data must serve.
                2. Data categories marked as in scope, out of scope or needing compliance sign-off first.
                3. Spend approval limits and the named approver written down.
                4. The charter agreed with your research lead and compliance contact and dated.

                ## Notes
                Keep the out of scope list explicit. Precise geolocation of individuals, personal email receipts and anything scraped behind a login are common categories firms rule out entirely.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page charter listing in-scope strategies, data categories, spend approvers and excluded categories, agreed with research and compliance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the strategies and holding periods the data you buy must serve"
                - "Mark each data category as in scope, out of scope or compliance first"
                - "Write the spend limits and the person who approves each level"
                - "Review the charter with research and compliance once a year @recurring(yearly)"
            - name: Vendor and data set intake register
              description: |-
                ## Purpose
                Pitches arrive by email, at conferences and through brokers' data marketplaces, and the same panel can be offered by three resellers under three names. One register holding every data set you have heard of, with its source, category, status and the date you last spoke, stops duplicate trials and lets anyone on the team see what was already rejected and why.

                ## Milestones
                1. A register with columns for vendor, data set, category, underlying source, status, owner and last contact.
                2. Every pitch from the last twelve months entered, including the ones already declined.
                3. Resold and white-labelled data sets linked to their original source.
                4. A rule agreed that no trial starts unless the data set is in the register.

                ## Notes
                Start from the **Vendor** template for each vendor record and link them from the register.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single register lists every data set pitched in the last year with status and owner, and no trial has started without an entry."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Search your inbox for data vendor pitches from the last twelve months"
                - "Create the intake register with vendor, source, category, status and owner"
                - "Enter every pitch, including declined ones with the reason"
                - "Link resold data sets to the vendor that collects the raw data"
            - name: Standard alternative data evaluation scorecard
              description: |-
                ## Purpose
                Comparing a receipts panel with a shipping data feed is hard unless both are judged on the same questions. A scorecard covering coverage, history length, point-in-time quality, latency, legal risk, signal evidence, cost and exclusivity, each scored one to five with a written reason, makes evaluations comparable across researchers and across years.

                ## Milestones
                1. Eight scoring criteria defined, each with what a one, three and five look like.
                2. A weighting agreed for each criterion and written on the scorecard.
                3. Two past evaluations rescored on the new card as a calibration check.
                4. The scorecard stored where every evaluator can find it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scorecard with eight defined criteria and weights exists, and two past evaluations have been rescored on it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the eight scoring criteria with a one-line definition each"
                - "Describe what a score of one, three and five means for each criterion"
                - "Rescore two past evaluations to test the scale"
                - "Agree the weights with your research lead"
            - name: Legal and compliance intake checklist for new data
              description: |-
                ## Purpose
                The questions that sink a data set are rarely statistical: whether it could contain material non-public information, whether individuals consented, whether it was scraped against a site's terms, and whether the licence allows the use you intend. A checklist your compliance team has signed off, filled in before any trial data arrives, puts those questions in front of the right people at the start rather than after a model is built.

                ## Milestones
                1. A checklist covering source of the data, consent, personal data, scraping method, possible non-public information and permitted use.
                2. The checklist reviewed and approved by your compliance team or counsel.
                3. A vendor questionnaire version ready to send with every trial request.
                4. Open risks from each review logged with an owner.

                ## Notes
                Start from the **Risk register** template for open items. This checklist organises questions for compliance and counsel; it does not replace their judgement.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A compliance-approved intake checklist and vendor questionnaire exist and have been completed for every data set now on trial."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your compliance team which questions they need answered before a trial"
                - "Draft the checklist and a matching vendor questionnaire"
                - "Get the checklist approved by compliance or counsel"
                - "Recheck the checklist with compliance when rules or policy change @recurring(yearly)"
            - name: Hypothesis note before requesting a trial
              description: |-
                ## Purpose
                Vendors are happy to send a sample and let you hunt for something predictive, which is the fastest route to a false discovery. Writing one paragraph on what the data measures, which company metric it should lead, by how many days, and why the market might not already price it forces the economic link to exist before the testing starts.

                ## Milestones
                1. A hypothesis template with fields for the measured quantity, target metric, expected lead time and reason for mispricing.
                2. A completed note for each data set currently in the pipeline.
                3. Notes without a plausible economic link marked as declined in the register.
                4. The note attached to every trial request sent to a vendor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every active trial has a dated hypothesis note naming the target metric and expected lead time, written before the data arrived."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-paragraph hypothesis template with four fixed fields"
                - "Fill in a note for each data set in the current pipeline"
                - "Decline any data set where no economic link can be written"
                - "Attach the note to the next trial request you send"
            - name: Secure sandbox for trial data
              description: |-
                ## Purpose
                Trial files often land in a shared drive or a personal laptop, which breaks most trial agreements and creates a privacy problem if the data holds anything personal. A segregated storage area with named access, logged use and a deletion step at trial end keeps trials clean and makes the deletion certificate a vendor asks for easy to sign.

                ## Milestones
                1. A segregated storage location for trial data with access limited to named people.
                2. Access logging switched on and checked once.
                3. A written deletion procedure for the end of every trial.
                4. Each current trial moved into the sandbox.

                ## Notes
                Agree the set-up with your technology and information security teams rather than building it alone.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All trial data sits in one access-controlled, logged location with a written deletion procedure, and no trial files remain elsewhere."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List where every current trial file is stored today"
                - "Agree a segregated, access-controlled location with the security team"
                - "Write the deletion procedure for the end of a trial"
                - "Review who has sandbox access and remove anyone who no longer needs it @recurring(monthly:5)"
            - name: Evaluation budget and cost ceilings
              description: |-
                ## Purpose
                Alternative data prices range from a few thousand to well over a million a year, and a strong trial result makes it hard to walk away from a price you would never have agreed in advance. Setting an annual data budget and a ceiling per data set before negotiations start keeps the decision about value rather than about momentum.

                ## Milestones
                1. Current spend on every licensed data set listed with renewal dates.
                2. An annual budget for new data agreed with whoever owns the research budget.
                3. A maximum price per data set set by category and expected use.
                4. The ceilings written into the scorecard so evaluators see them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved annual new-data budget and written per-data-set price ceilings exist before the next negotiation opens."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every licensed data set with its annual cost and renewal date"
                - "Propose a new-data budget to the budget owner"
                - "Set a price ceiling for each data category you buy"
                - "Add the ceilings to the evaluation scorecard"
            - name: Entity mapping from data records to securities
              description: |-
                ## Purpose
                Raw alternative data describes merchants, apps, domains, ports or legal entities, not tickers, and a weak mapping quietly breaks every downstream test. Building a point-in-time map from the vendor's entities to listed parents, with mergers, spin-offs and brand sales dated, is usually half the work of an evaluation and worth doing once properly.

                ## Milestones
                1. The vendor's entity list matched to listed parents with a match confidence for each.
                2. Brand sales, mergers and spin-offs dated so the map holds point in time.
                3. Unmatched and ambiguous entities listed with a decision on each.
                4. A sample of fifty mappings checked by hand and the error rate recorded.

                ## Notes
                Ask whether the vendor's own ticker tags are point in time. Many are current-day mappings applied to all history.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated, point-in-time entity map covers the trial data set, with a hand-checked sample of fifty and its error rate recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Export the vendor's full entity list for the trial data set"
                - "Match entities to listed parents and record a confidence for each"
                - "Date every brand sale, merger and spin-off that changes a mapping"
                - "Hand-check fifty mappings and note the error rate"
            - name: Map of alternative data categories and their uses
              description: |-
                ## Purpose
                Card transactions, email receipts, web traffic, app usage, job postings, satellite and geolocation, shipping and customs, product reviews and text all answer different questions at different lags. Knowing the main categories, their typical biases and which company metrics each tends to track lets you route a pitch to the right test in minutes.

                ## Milestones
                1. A one-page map of ten or more categories with the metric each tracks.
                2. Typical lag, history length and main bias noted for each category.
                3. Two published case studies or papers read for three of the categories.
                4. The map shared with anyone who triages vendor pitches.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page category map covering at least ten categories with lag, history and bias notes is in use for pitch triage."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List ten alternative data categories you have seen pitched"
                - "Note the company metric, lag and main bias for each"
                - "Read two published studies on three of the categories"
                - "Share the map with the people who triage pitches"
            - name: Weekly vendor pipeline triage
              description: |-
                ## Purpose
                Pitches left unanswered for weeks turn into awkward follow-ups and lost trial slots, while answering every one in full eats the research week. A fixed half hour each week to sort new entries into decline, hold or trial request, against the charter and the category map, keeps the pipeline short and the vendor relationships polite.

                ## Milestones
                1. A weekly half-hour slot in the calendar for triage.
                2. Every new register entry given a decline, hold or trial status within a week.
                3. Short decline replies sent with a reason where useful.
                4. Eight consecutive weeks of triage completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight consecutive weeks every new pitch has a recorded status within seven days of arriving."
                cadence: rolling
              tasks:
                - "Book a recurring half hour for pipeline triage"
                - "Sort new register entries into decline, hold or trial request @recurring(weekly:tue)"
                - "Send short decline replies for anything outside the charter"
            - name: Monthly data delivery health check
              description: |-
                ## Purpose
                Licensed feeds break quietly: a file arrives late, a column is renamed, a panel shrinks after a partner leaves, or history is silently restated. A monthly check of arrival times, row counts, schema and summary statistics for every licensed data set catches these before a model trades on them.

                ## Milestones
                1. A list of checks per data set: arrival time, row count, schema, nulls and key summary statistics.
                2. Thresholds set for what counts as an anomaly.
                3. Results logged monthly with any anomaly raised with the vendor.
                4. Six months of checks completed for every licensed set.

                ## Notes
                Start from the **Metrics log** template to keep one row per data set per month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly health checks logged for every licensed data set, with each anomaly raised with the vendor."
                cadence: rolling
              tasks:
                - "Write the delivery checks and anomaly thresholds for each data set"
                - "Run the delivery health checks and log the results @recurring(monthly:9)"
                - "Raise any anomaly with the vendor in writing the same week"
            - name: Panel size and composition drift monitor
              description: |-
                ## Purpose
                Panel-based data, from card transactions to app usage, changes as the vendor gains and loses data partners, and a growing panel can look like growing sales. Tracking active panel members, their mix by region, age band or device, and normalising by panel size each month is how you tell a business trend from a sampling change.

                ## Milestones
                1. Monthly panel counts obtained from each panel vendor.
                2. Composition by the vendor's main demographic or device splits recorded.
                3. Every signal using the panel checked for normalisation by panel size.
                4. Partner gains and losses logged with their dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of panel size and composition figures are recorded for each panel data set, with every partner change dated."
                cadence: rolling
              tasks:
                - "Ask each panel vendor for monthly panel counts and composition"
                - "Record panel size and mix and flag any jump above your threshold @recurring(monthly:16)"
                - "Confirm every signal on the panel is normalised by panel size"
            - name: Licence renewal and notice date calendar
              description: |-
                ## Purpose
                Data contracts often auto-renew for a year unless notice is given sixty or ninety days ahead, and a missed notice date can commit the budget to a set nobody uses. A calendar of renewal and notice dates, with a value review booked before each notice deadline, keeps every renewal a decision rather than an accident.

                ## Milestones
                1. Every data contract's renewal date, notice period and price escalator listed.
                2. Notice deadlines entered in the calendar with a reminder a month earlier.
                3. A value review scheduled before each notice deadline.
                4. No contract renewed in the last year without a recorded decision.

                ## Notes
                Have your legal or procurement team confirm notice periods from the signed contract, not from the vendor's summary.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every data contract's notice deadline is in the calendar, and each renewal in the last twelve months has a recorded keep or cancel decision."
                cadence: cyclic
              tasks:
                - "List renewal dates, notice periods and price escalators for every contract"
                - "Check the next ninety days for notice deadlines and book reviews @recurring(monthly:3)"
                - "Ask procurement to confirm notice terms from the signed contracts"
                - "Reconcile the calendar against the contract list @recurring(yearly)"
            - name: Quarterly value review of each paid data set
              description: |-
                ## Purpose
                Paid data bought for one strong signal can quietly stop contributing as the signal decays or the strategy changes, while its invoice keeps arriving. A short quarterly review per set, covering where it is used, what it contributed and what it costs, gives the renewal decision real evidence.

                ## Milestones
                1. A one-page review format: users, models fed, measured contribution and cost.
                2. Every paid data set reviewed once a quarter.
                3. Sets with no active use flagged for cancellation at the next notice date.
                4. Review results linked from the licence calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews completed for every paid data set, each recording users, contribution and cost."
                cadence: cyclic
              tasks:
                - "Draft the one-page value review format"
                - "Review use, contribution and cost of every paid data set @recurring(quarterly)"
                - "Flag sets with no active use for the next notice date"
            - name: Vendor methodology change log
              description: |-
                ## Purpose
                Vendors re-weight panels, change their tagging model, add new sources and restate history, and they often mention it in a release note nobody reads. A log of every methodology change, with its date and whether history was restated, explains breaks in signals and is the first thing to check when a model misbehaves.

                ## Milestones
                1. Release notes and change announcements for every licensed set collected in one place.
                2. Each change logged with date, description and whether history was restated.
                3. Affected signals and models listed against each change.
                4. Vendors asked to send change notices directly to the log owner.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A change log records every vendor methodology change from the past year with dates, restatement flags and affected models."
                cadence: rolling
              tasks:
                - "Ask each vendor to add you to their methodology change notices"
                - "Log new methodology changes and the models they touch @recurring(monthly:24)"
                - "Mark whether each change restated history"
            - name: Data usage rights register
              description: |-
                ## Purpose
                Licences differ on who may use the data, for which strategies, whether derived signals survive cancellation and whether anything can be shown to clients or published. A register summarising those rights for each licensed set, checked by legal, prevents the common mistake of reusing a research licence for a production model or a client report.

                ## Milestones
                1. Permitted users, uses, derived data rights and post-termination terms summarised for every licence.
                2. Each summary checked against the contract by legal or procurement.
                3. Restricted uses flagged clearly for researchers.
                4. The register reviewed whenever a contract is signed or amended.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A legally checked usage rights summary exists for every licensed data set, including derived data and post-termination terms."
                cadence: rolling
              tasks:
                - "Summarise permitted users and uses for each licensed data set"
                - "Note what happens to derived signals if the licence ends"
                - "Ask legal to check each summary against the contract"
                - "Review the register against new and amended contracts @recurring(quarterly)"
            - name: Active trial tracker with fixed end dates
              description: |-
                ## Purpose
                Open-ended trials drift for months, annoy vendors and leave sample data lying around. A tracker showing each trial's start, agreed end, the tests still outstanding and the decision date keeps trials short and makes it obvious which ones need a push this week.

                ## Milestones
                1. Every active trial listed with start date, end date and decision owner.
                2. Outstanding tests listed per trial.
                3. Trials past their end date escalated or closed.
                4. Average trial length recorded for the last six trials.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No active trial is more than two weeks past its agreed end date, and average trial length is recorded."
                cadence: rolling
              tasks:
                - "List each active trial with its agreed end date and owner"
                - "Check the tracker for trials near or past their end date @recurring(weekly:fri)"
                - "Close or extend overdue trials in writing with the vendor"
            - name: Evaluation write-up archive including rejections
              description: |-
                ## Purpose
                Rejected data sets come back two years later under a new name or a new salesperson, and without a record the team repeats the same tests. Archiving every evaluation, including the reason for a no, the tests run and the data period used, saves weeks and lets you see whether the second pitch is genuinely different.

                ## Milestones
                1. A standard two-page write-up format for every finished evaluation.
                2. Past evaluations from the last two years written up or summarised.
                3. Each write-up linked from the intake register.
                4. A monthly check that every closed trial has its write-up.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every trial closed in the last two years has a linked write-up recording tests, data period and decision reason."
                cadence: rolling
              tasks:
                - "Create a two-page evaluation write-up format"
                - "Summarise the evaluations closed in the last two years"
                - "Confirm every trial closed this month has a write-up @recurring(monthly:28)"
            - name: Quarterly vendor relationship meetings
              description: |-
                ## Purpose
                Your vendors know about upcoming panel changes, new coverage and pricing shifts long before they appear in a contract. A quarterly meeting with each important vendor, with an agenda of coverage, methodology, client count and roadmap, keeps surprises small and puts you in line for early access to new sets.

                ## Milestones
                1. The vendors worth a quarterly meeting chosen.
                2. A standing agenda covering coverage, methodology, client count and roadmap.
                3. Notes and follow-ups recorded after each meeting.
                4. Four quarters of meetings held with each chosen vendor.

                ## Notes
                Start from the **Meeting notes** template. Ask how many clients take the data set at each meeting; it is the simplest crowding indicator you will get.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly meetings held with each key vendor, with notes and follow-ups recorded each time."
                cadence: cyclic
              tasks:
                - "Choose the vendors important enough for quarterly meetings"
                - "Write a standing agenda including client count and roadmap"
                - "Hold the quarterly meeting and record notes and follow-ups @recurring(quarterly)"
            - name: Reading a vendor data dictionary and sample file
              description: |-
                ## Purpose
                Sample files and their dictionaries hold most of the answers a sales call avoids: what one row means, which fields are modelled rather than observed, when each record was first available and how missing values are coded. Learning to read them systematically lets you spot a weak set in an afternoon instead of after a month of trial.

                ## Milestones
                1. A checklist of twelve questions to ask of any data dictionary.
                2. The unit of observation and the key fields identified for two sample files.
                3. Observed, derived and modelled fields separated.
                4. Unanswered questions sent to the vendor in writing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A twelve-question dictionary checklist exists and has been applied to two vendor samples, with open questions sent to each vendor."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write twelve questions to ask of any vendor data dictionary"
                - "Apply the questions to two sample files you already hold"
                - "Mark which fields are observed, derived or modelled"
                - "Send the vendor the questions the dictionary does not answer"
            - name: Panel bias and representativeness
              description: |-
                ## Purpose
                Consumer panels over-represent some ages, regions, income bands and devices, and the bias differs by company: a panel can track one retailer well and miss another whose customers pay in cash. Understanding how vendors weight and debias panels, and how to test representativeness against reported figures, is the core skill for transaction and usage data.

                ## Milestones
                1. The main sources of panel bias listed with an example of each.
                2. One vendor's weighting and debiasing method documented from its white paper.
                3. Panel-implied figures compared with reported results for five companies.
                4. Companies where the panel is unrepresentative listed with the reason.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of panel-implied and reported figures for five companies, with unrepresentative names and reasons recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read one panel vendor's methodology white paper end to end"
                - "List the demographic and payment biases it admits to"
                - "Compare panel-implied growth with reported growth for five companies"
                - "Note which companies the panel tracks poorly and why"
            - name: Data arrival timing and the as-of date
              description: |-
                ## Purpose
                Alternative data is often stamped with the date of the activity, not the date it reached you, and the gap can be days or weeks. Learning to separate event date, vendor processing date and your receipt date, and to align each with earnings dates and trading hours, is what keeps a lead-lag test from using data you could not have had.

                ## Milestones
                1. Event, processing and receipt dates defined for one licensed set.
                2. The typical delay between them measured from delivery logs.
                3. A rule for the earliest tradable time of each record written down.
                4. The rule applied to one existing signal and the change in results noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written as-of rule for one data set, based on measured delivery delays, has been applied to an existing signal and the effect recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the event, processing and receipt dates in one data set"
                - "Measure the delay between them from delivery logs"
                - "Write the earliest tradable time rule for each record"
                - "Rerun one signal with the rule and note what changed"
            - name: Nowcasting reported company metrics
              description: |-
                ## Purpose
                The cleanest first use of most alternative data is predicting a number the company will report, such as revenue, same-store sales or active users, before it is published. Learning to build a simple nowcast, measure its error against reported figures and compare it with the published analyst forecast gives a test that does not depend on market noise.

                ## Milestones
                1. One target metric chosen for ten companies with at least twelve reported quarters.
                2. A simple nowcast built from the data and its error measured per quarter.
                3. Nowcast error compared with the analyst forecast error for the same quarters.
                4. The quarters where the nowcast failed explained in writing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Nowcast and analyst forecast errors are compared for ten companies over at least twelve quarters, with failures explained."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose one reported metric and ten companies with long history"
                - "Build a simple nowcast from the trial data"
                - "Measure nowcast error against reported figures each quarter"
                - "Compare the error with the published analyst forecast error"
            - name: Text data basics for news, filings and transcripts
              description: |-
                ## Purpose
                Sentiment scores from news, filings and call transcripts are among the most widely sold data sets, and they vary hugely in how text is matched to companies, timestamped and scored. Knowing the basics of entity tagging, dictionary versus model scoring and novelty filtering lets you question a vendor's text product with confidence.

                ## Milestones
                1. Entity tagging, dictionary scoring, model scoring and novelty filtering explained in your own notes.
                2. One vendor's text pipeline documented from its methodology note.
                3. Fifty scored items read by hand and the score accuracy judged.
                4. Duplicated and stale stories in the feed counted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on four text processing steps exist, and fifty vendor-scored items have been read and judged by hand."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write short notes on entity tagging, scoring methods and novelty"
                - "Document one vendor's text pipeline from its methodology note"
                - "Read fifty scored items and judge whether each score is right"
                - "Count duplicate and stale stories in a week of the feed"
            - name: Geospatial and satellite data fundamentals
              description: |-
                ## Purpose
                Car park counts, crop health, oil storage and footfall from location pings all depend on resolution, revisit frequency, cloud cover and how a polygon is drawn around a site. Learning these basics tells you whether a vendor's site-level series can be trusted and how much the history is really observed rather than filled in.

                ## Milestones
                1. Resolution, revisit rate, cloud cover handling and polygon definition explained in your notes.
                2. One geospatial vendor's coverage map and gap-filling method documented.
                3. The share of observed versus imputed values measured for a sample of sites.
                4. Privacy controls on any device location data confirmed with the vendor.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The observed versus imputed share is measured for a sample of sites in one geospatial set, with its gap-filling method documented."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write notes on resolution, revisit rate and cloud cover handling"
                - "Document one vendor's coverage map and gap-filling method"
                - "Measure the share of imputed values for twenty sites"
                - "Ask how device location data is aggregated and anonymised"
            - name: Web-scraped data quality and terms of use
              description: |-
                ## Purpose
                Scraped prices, product listings, reviews and job postings are cheap to collect and easy to get wrong: sites change layout, block crawlers, personalise prices and publish terms that forbid scraping. Understanding crawl breaks, deduplication and the legal questions to raise lets you judge a vendor's scraped product and any crawler you might build yourself.

                ## Milestones
                1. Common failure modes of scraped data listed with examples: layout changes, blocking, personalisation and duplication.
                2. One scraped data set checked for crawl gaps and duplicate records.
                3. The legal questions on site terms, access methods and personal data written for counsel.
                4. Counsel's guidance on scraping recorded for future evaluations.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One scraped data set has been checked for gaps and duplicates, and counsel's written guidance on scraping is on file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the failure modes of scraped data you have seen"
                - "Check one scraped data set for crawl gaps and duplicates"
                - "Write the scraping questions you need counsel to answer"
                - "Record counsel's guidance where evaluators can find it"
            - name: Personal data, anonymisation and aggregation
              description: |-
                ## Purpose
                Many alternative data sets begin as records about people, and privacy law in most jurisdictions cares about how they were collected, whether consent covers your use and whether records can be re-identified. Learning the vocabulary of personal data, pseudonymisation, aggregation thresholds and consent chains lets you ask vendors the right questions and recognise when compliance must be involved.

                ## Milestones
                1. Personal, pseudonymised, anonymised and aggregated data defined in your notes.
                2. The re-identification risks of small cells and rare attributes understood with examples.
                3. A short set of privacy questions added to the vendor questionnaire.
                4. The questions reviewed by your privacy or compliance team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Privacy questions reviewed by your privacy or compliance team have been added to the vendor questionnaire."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read your firm's data privacy policy or a regulator's plain guide"
                - "Write definitions of personal, pseudonymised and aggregated data"
                - "Draft five privacy questions for the vendor questionnaire"
                - "Ask your privacy or compliance team to review the questions"
            - name: Coverage and history check of a trial data set
              description: |-
                ## Purpose
                Coverage of two hundred companies sounds useful until you find most of them have three years of history and half sit outside your universe. Measuring coverage against your own universe by year, sector and size, and counting gaps, tells you within days whether a trial is worth continuing.

                ## Milestones
                1. Coverage of your universe measured by year, sector and market cap band.
                2. History length per company counted and the median recorded.
                3. Gaps and breaks in each company's series listed.
                4. A continue or stop decision recorded against the scorecard.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A coverage table by year, sector and size, with median history length and gap counts, supports a recorded continue or stop decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Join the trial data to your universe using the entity map"
                - "Tabulate coverage by year, sector and size band"
                - "Count history length and series gaps for each company"
                - "Record a continue or stop decision on the scorecard"
            - name: Backfill and survivorship test on vendor history
              description: |-
                ## Purpose
                Vendors often build history after the fact, adding companies, panel members or sites that turned out to matter and dropping those that did not. Comparing the history as first delivered with later deliveries, and asking when each record was created, shows how much of the impressive back history could never have been traded.

                ## Milestones
                1. Two deliveries of the same history, months apart, compared record by record.
                2. Added, removed and revised records counted by period.
                3. The vendor asked in writing how and when the history was built.
                4. Backtest periods restricted to genuinely point-in-time data where needed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written comparison of two history deliveries quantifies added, removed and revised records, with the vendor's explanation on file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Request a second history delivery or a dated snapshot from the vendor"
                - "Compare the two deliveries record by record"
                - "Count added, removed and revised records by year"
                - "Ask the vendor in writing when the back history was created"
            - name: First signal test against reported fundamentals
              description: |-
                ## Purpose
                Testing alternative data straight against stock returns invites false discoveries, because returns are noisy and you can try many specifications. Checking first whether the data tracks the fundamental it should, such as sales growth, shipments or headcount, is a cheaper test that a genuine data set should pass easily and most weak ones fail.

                ## Milestones
                1. The fundamental target fixed in the hypothesis note before the test.
                2. Correlation or tracking error between the data and the reported fundamental measured.
                3. Results split by sector and by company size.
                4. A written verdict on whether the data tracks its target well enough to continue.

                ## Notes
                Expect most data sets to fail here or at the next step. That is the normal outcome, not a sign the process is broken.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated note reports how well the data tracks its pre-registered fundamental target, by sector and size, with a continue or stop verdict."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the fundamental target in the hypothesis note"
                - "Measure how well the data tracks reported figures"
                - "Split the results by sector and size band"
                - "Write the continue or stop verdict and log it in the register"
            - name: Incremental value over signals you already have
              description: |-
                ## Purpose
                Predicting sales well is not enough, since a data set can still add nothing, because your existing momentum, revisions or quality signals already capture the same information. Testing the new signal's contribution after controlling for what you already run is the step that separates a nice chart from something worth paying for.

                ## Milestones
                1. The existing signals to control for listed and agreed with the portfolio researcher.
                2. Correlation of the new signal with each existing one measured.
                3. Residual predictive power measured after controlling for existing signals.
                4. The number of variants tried recorded beside the result.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written result shows the new signal's residual contribution after existing signals, with the number of variants tried stated."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the existing signals the new data must beat"
                - "Measure correlation of the new signal with each one"
                - "Test residual predictive power after controlling for them"
                - "Record how many variants were tried before this result"
            - name: Build versus buy for scraped or public data
              description: |-
                ## Purpose
                Some data that vendors sell, such as job postings, product prices or government filings, can be collected in house, but the crawler, the cleaning and the legal review are ongoing costs. Comparing the full cost and risk of building against the licence price gives a clear answer instead of an engineer's enthusiasm or a vendor's discount.

                ## Milestones
                1. Build costs estimated: engineering time, infrastructure, maintenance and legal review.
                2. Buy costs listed: licence, integration and renewal escalators.
                3. Legal and reputational risks of in-house collection reviewed with counsel.
                4. A build or buy decision recorded with the reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written build versus buy comparison with three-year costs and counsel's view on collection risk ends in a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate engineering and maintenance hours for an in-house crawler"
                - "List licence and integration costs over three years"
                - "Ask counsel about the risks of collecting the data yourselves"
                - "Record the build or buy decision and the reasons"
            - name: Cost against value decision memo
              description: |-
                ## Purpose
                A data set should be bought because its expected contribution, after costs, capacity and the chance it decays, exceeds its price, not because the trial went well. A short memo setting expected value against the full cost, with the uncertainty stated plainly, is what a research head or data committee should see before any contract.

                ## Milestones
                1. Expected contribution estimated with a range, not a single number.
                2. Full cost counted: licence, engineering, storage and research time.
                3. Decay and crowding risk described with any evidence.
                4. A buy, renegotiate or decline recommendation signed by the evaluator.

                ## Notes
                Write the downside case first. A memo that only describes the upside is a sales document.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed memo with a contribution range, full costs, decay risk and a buy, renegotiate or decline recommendation is filed before any contract."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate the contribution range from the trial results"
                - "Add up licence, engineering, storage and research time costs"
                - "Describe the decay and crowding risk with evidence"
                - "Ask the agent to draft the memo from your notes, then edit it yourself"
            - name: Comparing two vendors of the same data type
              description: |-
                ## Purpose
                Card panels, web traffic and app usage are each sold by several vendors whose numbers disagree. Running both on the same companies and periods, scoring them on the same card and checking which one tracks reported figures better turns a sales contest into evidence.

                ## Milestones
                1. The same companies and periods extracted from both vendors.
                2. Both scored on the standard scorecard.
                3. Tracking of reported figures compared side by side.
                4. A choice recorded, including the price each vendor offered.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two vendors are compared on identical companies and periods with scorecards and tracking results, ending in a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree a common company list and period with both vendors"
                - "Score both data sets on the standard scorecard"
                - "Compare how well each tracks reported figures"
                - "Record the choice and each vendor's price"
            - name: Negotiating trial terms and licence pricing
              description: |-
                ## Purpose
                Trial length, how much history comes with the trial, the price structure and whether derived signals survive cancellation are all negotiable, and the first offer is rarely the last. Preparing what you need from a trial and from the licence, and agreeing walk-away points in advance, keeps negotiations short and the outcome inside budget.

                ## Milestones
                1. Required trial length and history written down before the call.
                2. Price ceiling and walk-away point agreed with the budget owner.
                3. Key licence terms listed: users, uses, derived data, exclusivity and notice periods.
                4. The negotiated terms passed to legal or procurement for drafting.

                ## Notes
                Leave contract wording to legal or procurement. Your job is to know what the research needs.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written negotiation brief with required terms and a walk-away point exists, and agreed terms reached legal within a week of the call."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the trial length and history you need"
                - "Agree the price ceiling and walk-away point with the budget owner"
                - "List the licence terms that matter for your use"
                - "Send the agreed terms to legal or procurement for drafting"
            - name: Fixed-length vendor trial run to a decision date
              description: |-
                ## Purpose
                Trials with a start date, an end date, a test plan and a decision meeting already booked are far more likely to end with a clear answer. Running one trial end to end in this shape, from the hypothesis note to the archived write-up, sets the pattern for every trial after it.

                ## Milestones
                1. Trial start, end and decision meeting dates agreed with the vendor and your lead.
                2. Coverage, fundamental and incremental value tests completed inside the trial window.
                3. The decision meeting held on the booked date.
                4. The write-up archived and the trial data deleted or licensed.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One trial completed within its agreed window, with all three tests done, a decision meeting held on the booked date and a write-up archived."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Agree trial start and end dates with the vendor in writing"
                - "Book the decision meeting before the data arrives"
                - "Complete the coverage, fundamental and incremental tests"
                - "Archive the write-up after the decision meeting"
            - name: Data committee presentation for a purchase
              description: |-
                ## Purpose
                Larger data purchases usually go to a committee of research, risk, compliance and budget holders, and a presentation that skips the legal review or the downside case gets sent back. Preparing a short deck covering the hypothesis, test results with the number of trials, legal status, cost and decay risk gets a decision in one meeting.

                ## Milestones
                1. A deck of no more than eight slides covering hypothesis, tests, legal status, cost and risks.
                2. Compliance sign-off status shown on its own slide.
                3. Likely questions listed with answers prepared.
                4. The committee's decision and any conditions recorded.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An eight-slide deck is presented to the data committee, and its decision and conditions are recorded in the register."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book the committee slot and ask what members expect to see"
                - "Build an eight-slide deck from the decision memo"
                - "Rehearse answers to the five likeliest questions"
                - "Record the committee decision and conditions in the register"
            - name: Onboarding a newly licensed data set
              description: |-
                ## Purpose
                Signing the contract is the start of the work: the feed has to be ingested, mapped, monitored and documented before any researcher can use it with confidence. A dated onboarding plan with an owner for each step stops a newly bought set from sitting unused for a quarter while its invoice runs.

                ## Milestones
                1. Production ingestion running with delivery checks in place.
                2. The entity map moved into the shared research data store.
                3. A user guide covering fields, timing rules and usage restrictions published.
                4. The data set added to the licence calendar, rights register and health check.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within sixty days of signing, the data set is ingested, mapped, documented and listed in the calendar, rights register and health check."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Name an owner for ingestion, mapping and documentation"
                - "Set up production delivery with the health checks"
                - "Publish a short user guide with timing rules and restrictions"
                - "Add the set to the calendar, rights register and health check"
            - name: Trial data deletion and certification
              description: |-
                ## Purpose
                Most trial agreements require the data and anything derived from it to be deleted when the trial ends without a purchase, and some ask for a signed certificate. Doing the deletion promptly, from the sandbox, notebooks, caches and backups, protects the firm and your reputation with vendors you may want to work with again.

                ## Milestones
                1. Every copy and derived file from the trial located, including notebooks and caches.
                2. All copies deleted following the sandbox procedure.
                3. Deletion confirmed by a second person or the technology team.
                4. The vendor's certificate signed and filed with the trial record.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All copies of a declined trial's data are deleted and confirmed by a second person, with the signed certificate filed within the contract's deadline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the trial agreement for deletion and certificate terms"
                - "Find every copy and derived file, including notebook caches"
                - "Delete them and have a second person confirm"
                - "Sign and file the deletion certificate"
            - name: Live nowcast test through one earnings season
              description: |-
                ## Purpose
                Historically accurate nowcasts can still fail live when the data arrives late, the panel shifts or the company changes how it reports. Recording your nowcast for each covered company before it reports, through a full earnings season, gives an honest out-of-sample error with no chance of hindsight.

                ## Milestones
                1. Nowcasts recorded and time-stamped before each covered company reports.
                2. Reported figures entered as each company publishes.
                3. Live error compared with the historical error from the research.
                4. A note on any company where the live result diverged and why.

                ## Notes
                Record nowcasts somewhere you cannot edit after the fact, such as a dated commit or an emailed file.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Time-stamped nowcasts for every covered company through one earnings season are compared with reported figures and with historical error."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the covered companies and their expected report dates"
                - "Record and time-stamp each nowcast before the company reports"
                - "Enter reported figures as they are published"
                - "Compare live error with the historical research error"
            - name: Annual alternative data budget round
              description: |-
                ## Purpose
                Data spend creeps up through price escalators and one-off purchases that nobody revisits. A yearly round that lists every licence with its value review, proposes cancellations and sets next year's new-data budget makes the whole portfolio of data sets a decision rather than an accumulation.

                ## Milestones
                1. Every licence listed with cost, escalator and latest value review.
                2. Cancellation candidates proposed with notice dates.
                3. Next year's budget for new data agreed.
                4. Decisions recorded and the licence calendar updated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual budget round lists every licence with its value review and ends with recorded cancellations and an agreed new-data budget."
                cadence: cyclic
              tasks:
                - "Compile every licence with cost, escalator and value review @recurring(yearly)"
                - "Propose cancellations in time for their notice dates"
                - "Agree next year's new-data budget with the budget owner"
            - name: Alternative data for a fundamental analyst
              description: |-
                ## Purpose
                Sector analysts and portfolio managers increasingly get a dashboard of web traffic or card spend for their companies without being told its limits. Learning which series matter for your sector, how far each has tracked reported numbers and when to ignore a move keeps alternative data an input to a thesis rather than a headline you overreact to.

                ## Milestones
                1. The alternative data series available for your coverage list identified.
                2. Each series' historical tracking of reported figures noted for your companies.
                3. A personal rule for when a series move is worth acting on in your research.
                4. Questions for the data team written and answered.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note for your coverage list records which series track reported figures and your written rule for when a move matters."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the data team which series cover your companies"
                - "Note how well each has tracked reported figures in the past"
                - "Write your rule for when a series move changes your view"
                - "Read the latest data team note for your sector @recurring(monthly:19)"
            - name: Low-cost alternative data for a solo researcher
              description: |-
                ## Purpose
                Independent researchers and students rarely have a data budget, but job postings, government trade and mobility statistics, app store rankings and company web pages are often free to view. Building a small, licence-checked set of free sources lets you practise the full evaluation method on real data without paying a vendor or breaking a site's terms.

                ## Milestones
                1. Five free or low-cost sources listed with their terms of use read.
                2. Sources that forbid automated collection or commercial use excluded.
                3. One source taken through coverage, timing and fundamental tests.
                4. A short write-up of what held up and what did not.

                ## Notes
                Read each source's terms before collecting anything. Free to view is not the same as free to download or use for trading research.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One free, terms-checked data source has been taken through coverage, timing and fundamental tests with a written result."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List five free sources such as official statistics and job boards"
                - "Read each source's terms and drop any that forbid your use"
                - "Run coverage, timing and fundamental tests on one source"
                - "Check your sources' terms for changes @recurring(quarterly)"
            - name: First ninety days in an alternative data role
              description: |-
                ## Purpose
                A new data scout, data strategist or alternative data researcher inherits a pile of licences, half-finished trials and vendor relationships. A ninety-day plan to learn what is licensed and used, meet the key vendors and researchers, and close or restart stalled trials earns credibility before you propose anything new.

                ## Milestones
                1. A list of every licensed and trialled data set with its owner and status by day thirty.
                2. Introductory calls with key vendors and the main internal users by day sixty.
                3. Stalled trials closed or restarted with new end dates by day ninety.
                4. A short note to your manager on three improvements you propose.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "By day ninety a full data set inventory, vendor and user meetings, resolved stalled trials and a three-point improvement note exist."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask your manager for the list of licences and live trials"
                - "Book introductory calls with the five largest data users"
                - "Close or restart every trial with no activity for a month"
                - "Send your manager three proposed improvements by day ninety"
            - name: Running data scouting for a research team
              description: |-
                ## Purpose
                On many teams one person scouts and pre-screens data for several researchers, which works only if requests and handovers are clear. Setting up a simple request form, a weekly scouting slot and a standard handover pack means researchers get screened data sets with legal status known, and the scout's time goes to the most valuable requests.

                ## Milestones
                1. A request form capturing the researcher's hypothesis, universe and deadline.
                2. A weekly scouting slot for searching marketplaces, conferences and referrals.
                3. A handover pack format: sample, dictionary answers, legal status and scorecard.
                4. Feedback from researchers on the first five handovers.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Five researcher requests have been handled through the form and handover pack, with feedback recorded on each."
                cadence: rolling
              tasks:
                - "Create a short request form for researchers"
                - "Scout marketplaces and referrals against open requests @recurring(weekly:wed)"
                - "Define the handover pack and use it for the next request"
                - "Ask each researcher for feedback after a handover"
            - name: Alternative data in an academic research paper
              description: |-
                ## Purpose
                Academics and PhD students increasingly get alternative data through vendor academic programmes, which often restrict publication, sharing and replication. Agreeing the data use terms before starting, and planning what can be published and shared, avoids a finished paper that cannot be submitted or replicated.

                ## Milestones
                1. The data use agreement read for publication, sharing and replication terms.
                2. Your institution's research office or legal team consulted on the agreement.
                3. A replication plan agreed with the vendor for referees and journals.
                4. A data availability statement drafted for the paper.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A signed data use agreement, a vendor-agreed replication plan and a draft data availability statement exist before analysis begins."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the vendor about their academic access programme terms"
                - "Have your research office review the data use agreement"
                - "Agree with the vendor how referees can access the data"
                - "Draft the data availability statement for the paper"
            - name: Paper portfolio test with position limits and a stop rule
              description: |-
                ## Purpose
                Most alternative data signals that pass historical tests fail out of sample, and the first months of live data are where that shows. Running the signal in a paper portfolio with written position size caps, a gross exposure limit and a stop rule agreed in advance gives honest evidence without risking capital, and a clear point at which to walk away.

                ## Milestones
                1. Position size caps, an exposure limit and a drawdown stop rule written before the test starts.
                2. The signal running in a paper portfolio with every trade logged.
                3. Weekly checks that limits were respected.
                4. A go, extend or stop decision recorded at the agreed end date.

                ## Notes
                This is a research test, not a trading recommendation. Any move from paper to capital follows your firm's own approval and risk process.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A paper test runs to its agreed end date under written limits and a stop rule, ending in a recorded go, extend or stop decision."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the position caps, exposure limit and stop rule before starting"
                - "Start the paper portfolio and log every simulated trade"
                - "Check positions and drawdown against the written limits @recurring(weekly:thu)"
                - "Record the go, extend or stop decision at the end date"
            - name: Crowding and decay watch on licensed data sets
              description: |-
                ## Purpose
                Data sets lose value as more funds buy them, and vendors rarely volunteer how many clients they have. Watching client counts, the signal's recent strength against its history and the speed at which prices move after data releases tells you when a once-useful set has been arbitraged away.

                ## Milestones
                1. Client count or a proxy recorded for each licensed set.
                2. Rolling signal strength tracked against its research period.
                3. Post-release price reaction measured and compared over time.
                4. A decay threshold written that triggers a value review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each licensed set has a client count, a rolling strength series and a written decay threshold, reviewed monthly for a year."
                cadence: rolling
              tasks:
                - "Ask each vendor for their client count or a range"
                - "Update rolling signal strength for each licensed set @recurring(monthly:12)"
                - "Write the decay threshold that triggers a value review"
                - "Measure the price reaction after data releases @recurring(quarterly)"
            - name: Combining several alternative data sources into one nowcast
              description: |-
                ## Purpose
                Card spend, web traffic and app usage often track the same company with different biases and lags, and a careful combination can beat each alone. Doing it well means aligning timestamps, weighting by each source's measured error and checking that the combination still works when one source drops out.

                ## Milestones
                1. Two or three sources aligned on a common as-of timetable for the same companies.
                2. Each source's historical error measured separately.
                3. A combined nowcast with weights set from the research period only.
                4. Performance checked with each source removed in turn.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A combined nowcast with research-period weights beats its best single source out of sample, with leave-one-source-out results recorded."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Choose two or three sources covering the same companies"
                - "Align them on a common as-of timetable"
                - "Set combination weights using the research period only"
                - "Rerun the nowcast with each source removed in turn"
            - name: Provenance and consent due diligence on a vendor
              description: |-
                ## Purpose
                The biggest risk in alternative data is a source that should never have been sold: personal data without valid consent, data taken in breach of a contract or information that came from a company insider. A deeper review of how the vendor collects data, its upstream agreements and its own compliance controls, done with your compliance team, is what makes a large or sensitive licence defensible.

                ## Milestones
                1. The full collection chain documented from original source to delivery.
                2. Upstream agreements and consent mechanisms described by the vendor in writing.
                3. The vendor's own compliance controls and any regulatory history reviewed.
                4. A compliance sign-off or a list of conditions recorded.

                ## Notes
                Your compliance team or counsel decides whether a source is acceptable. Your job is to gather complete answers and keep them on file.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written provenance file covering the collection chain, consent, upstream agreements and vendor controls ends in a recorded compliance decision."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the vendor to describe its full collection chain in writing"
                - "Request summaries of upstream agreements and consent mechanisms"
                - "Review the vendor's compliance controls with your compliance team"
                - "Ask the vendor to reconfirm provenance answers each year @recurring(yearly)"
---

# Alternative Data Research

Alternative data research is the work of deciding whether a card panel, a web crawl, a satellite feed or a job postings file is worth paying for, written for researchers on a desk and for analysts and data scouts who evaluate vendors without running the trading book. It starts with foundations (a charter, an intake register, a scorecard, legal intake and a secure sandbox), then the routines that keep paid data honest, the skills behind panels, timestamps, text and geospatial data, the tests and decisions that turn a trial into a yes or a no, the dated moments of trials, committees and deletions, setups for analysts, solo researchers, academics and new joiners, and a few specialist projects on provenance, crowding and combining sources.

The rhythms are a weekly pipeline triage and trial check, monthly delivery, panel drift, licence date and methodology checks, quarterly value reviews and vendor meetings, and a yearly budget round. Most data sets that look predictive in a vendor deck add nothing out of sample, so the plan puts a paper test with position limits and a written stop rule before any capital, and it pairs with the Vendor, Risk register, Metrics log, Meeting notes, Purchase decision and Onboarding 30/60/90 templates. Nothing here is trading, investment or legal advice; licensing, privacy and material non-public information questions go to your compliance team or counsel. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
