---
id: data-analytics.open-public-datasets
name: Open & Public Datasets
description: "Public and open datasets found, licensed, archived and cleaned for your own analysis and joined safely to internal data, plus your own data published openly with documentation, a licence and a persistent identifier."
category: business
version: 1.0.0
tags: [data-analytics, open-public-datasets, researcher, nonprofit, knowledge-worker, open-data, official-statistics, data-licensing]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - purchase-decision
    - risk-register
    - operational-checklist
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Open & Public Datasets
          description: "Finding, licensing, cleaning and combining public and open datasets to enrich internal analysis or publish data for others to use."
          projects:
            - name: Questions public data could answer for your work
              description: |-
                ## Purpose
                Most teams reach for public data in a hurry, the night before a funding bid or a board paper, and grab whatever turns up first. Listing the questions where an outside figure would genuinely help, such as the size of a market, the population a service reaches or a benchmark rate, turns that scramble into a short, ranked plan of what to find and why.

                ## Milestones
                1. A list of at least eight questions where an external figure would change a decision or a document.
                2. Each question tagged with the measure needed, the geography and the time period.
                3. Questions already answered by internal data struck off the list.
                4. The top three questions chosen for a first search, each with the decision it feeds.

                ## Notes
                Write the question before searching. People who start at a portal usually end up analysing what was easy to download rather than what they needed.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of at least eight questions, each with measure, geography and period, and three marked for a first search."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down three times this year you wished you had an outside figure"
                - "Note the measure, place and period each question needs"
                - "Strike off any question your own data already answers"
                - "Rank the rest by the decision each one would change"
                - "Revisit the question list and add new ones from recent requests @recurring(quarterly)"
            - name: Map of public data publishers in your field
              description: |-
                ## Purpose
                Public data is scattered across national statistics offices, ministries, regulators, city portals, intergovernmental bodies such as the World Bank or the UN agencies, and research repositories. A one-page map of who publishes what for your subject saves hours on every later search and shows where the authoritative version of each figure actually lives.

                ## Milestones
                1. Publishers listed under official statistics, government departments and regulators, international bodies, local portals and research repositories.
                2. Topics, geography and release format (portal, API, spreadsheet or PDF) noted for each publisher.
                3. The authoritative publisher marked for each of your top ten measures.
                4. The map saved where the whole team can find it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A shared one-page publisher map covering five publisher types, with the authoritative source marked for your top ten measures."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the publishers you already download from without thinking"
                - "Search your national statistics office's catalogue for your top three topics"
                - "Add international bodies that publish comparable figures across countries"
                - "Mark which publisher is authoritative for each of your top ten measures"
            - name: Open data licence primer for your team
              description: |-
                ## Purpose
                Free to download is not the same as free to use. Public datasets come under open licences such as CC BY, CC0 and ODbL, under government open licences, or under bespoke terms that forbid commercial use or redistribution, and the differences decide whether a figure can go in a client report, into a product or back out as a republished file. A short primer, checked by whoever handles legal questions, lets analysts answer the common cases without guessing.

                ## Milestones
                1. The licences your team meets most often listed with what each allows for use, adaptation, commercial use and redistribution.
                2. Share-alike and attribution obligations explained in plain words with one example each.
                3. A rule written for what to do when a dataset states no licence at all.
                4. The primer reviewed and dated by your legal or compliance contact.

                ## Notes
                No licence stated does not mean public domain. Treat it as all rights reserved until the publisher confirms otherwise in writing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page licence primer covering at least five licence types, reviewed and dated by your legal or compliance contact."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the licences attached to the public datasets you used last year"
                - "Read the official summaries of CC BY, CC0 and ODbL"
                - "Write one line per licence on commercial use, adaptation and redistribution"
                - "Ask your legal or compliance contact to review the primer"
            - name: Register of public datasets in use
              description: |-
                ## Purpose
                Six months after a report goes out, someone asks where a figure came from and nobody can say which edition of which table was used. A register listing every external dataset in use, with its source page, publisher, licence, version, retrieval date and internal owner, answers that question in a minute and makes licence checks and refreshes possible at all.

                ## Milestones
                1. A register with columns for name, publisher, source URL, licence, version or release date, retrieval date, owner and where it is used.
                2. Every public dataset currently feeding a report, model or dashboard entered.
                3. An owner named for each entry.
                4. A rule agreed that no new external dataset goes into use without a register row.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register with every public dataset in current use entered, each with licence, retrieval date and a named owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the register with the eight standard columns"
                - "Search shared drives and code for downloaded files and external URLs"
                - "Enter each dataset you find with its licence and retrieval date"
                - "Name an owner for every row and tell each owner"
                - "Add the register rule to the team's working agreement"
            - name: Attribution and citation standard for public data
              description: |-
                ## Purpose
                Most open licences require attribution, and readers deserve to know where a number came from, yet citations in decks and reports range from a bare logo to nothing at all. A house standard for citing datasets in charts, tables, reports and code, including publisher, title, edition, retrieval date and licence, meets the licence terms and makes every figure traceable.

                ## Milestones
                1. A citation format written for full references, chart footnotes and code comments.
                2. Worked examples for a national statistics table, an international database and a dataset with a persistent identifier.
                3. The standard built into the report and slide templates.
                4. Three recent reports checked against it and corrected.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written citation standard with three worked examples, built into the team's report and slide templates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect the citation wording required by your five most used publishers"
                - "Draft a short and a full citation format covering edition and retrieval date"
                - "Add a source footnote line to the chart and slide templates"
                - "Check three recent reports against the standard and fix the gaps"
            - name: Raw download archive with retrieval records
              description: |-
                ## Purpose
                Publishers overwrite files, move pages and revise figures without notice, so the table you analysed last spring may no longer exist in that form. Keeping every raw download untouched in a dated folder, with a small record of the source URL, retrieval time and a checksum, means any past result can be reproduced and any change in the source can be proven.

                ## Milestones
                1. An archive folder structure agreed, organised by publisher, dataset and retrieval date.
                2. A rule in force that raw files are never edited, only copied into a working area for cleaning.
                3. A retrieval record saved beside each download with URL, timestamp and checksum.
                4. Existing downloads for every register entry moved into the archive.

                ## Notes
                Storage is cheap; a lost edition is not. Keep the whole raw file even when you only need one column.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every dataset in the register has at least one untouched raw file in the dated archive with a retrieval record and checksum."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the archive folder pattern of publisher, dataset and date"
                - "Make the raw archive folder read-only for everyday users"
                - "Write a retrieval record for each existing download"
                - "Move current downloads into the archive and point working files at copies"
            - name: Fitness-for-use check before adopting a dataset
              description: |-
                ## Purpose
                A public dataset can be authoritative and still wrong for your question: a survey that excludes people living in institutions, an annual figure when you need monthly, a definition of household that differs from yours. A short check of the methodology notes, covering population, definitions, collection method, timeliness, revisions and known limits, catches the mismatch before it is baked into a model or a board paper.

                ## Milestones
                1. A checklist of eight to ten fitness questions covering coverage, definitions, method, timeliness, revisions and limits.
                2. The methodology or quality report located and read for one dataset you already use.
                3. A one-paragraph fitness note written for that dataset, including what it cannot tell you.
                4. The checklist made a required step before any new register entry.

                ## Notes
                Read the footnotes and the quality report, not just the headline table. Breaks in series and changes of definition are almost always disclosed there.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A fitness checklist exists and a written fitness note, stating what the data cannot answer, is attached to at least one register entry."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the fitness questions on one page"
                - "Find the methodology or quality report for your most used dataset"
                - "Write a fitness note for it, including its main limits"
                - "Add a fitness note column to the dataset register"
            - name: Terms of use and API access review
              description: |-
                ## Purpose
                Beyond the licence, many portals and APIs carry terms of use: rate limits, registration keys, bans on automated scraping, required attribution wording or limits on caching. Reviewing those terms for every source you pull automatically avoids a blocked key the week a report is due, and a breach of terms that could embarrass your organisation.

                ## Milestones
                1. Every automated or scheduled source listed with a link to its terms of use.
                2. Rate limits, key requirements and caching or redistribution limits noted for each.
                3. Any source whose terms your current use breaks flagged and fixed or replaced.
                4. API keys held in the team's secrets store, not in scripts or notebooks.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written terms review for every automated source, with any breach fixed and all API keys held in a secrets store."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every source your scripts or tools pull from automatically"
                - "Read and note the terms of use for each source"
                - "Move any API keys out of code into the team secrets store"
                - "Fix or replace any source whose terms your use breaks"
            - name: First enrichment with public population denominators
              description: |-
                ## Purpose
                Raw counts of customers, service users or incidents mislead when areas differ in size. Joining one internal table to official population or household estimates turns counts into rates per thousand people, the most common way public data improves internal analysis, and it surfaces the practical problems of codes, years and definitions on a small scale.

                ## Milestones
                1. One internal metric chosen that is currently reported as a raw count by area.
                2. The matching official population estimate downloaded, archived and entered in the register.
                3. Area codes matched between the two tables, with unmatched areas listed and explained.
                4. Rates per thousand calculated and compared with the raw ranking, with the differences noted.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One internal metric reported as a rate per thousand people by area, using an archived and registered official estimate, with unmatched areas explained."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick one internal metric that is reported as counts by area"
                - "Download the official population estimate for the same areas and year"
                - "Join the tables on area code and list every row that fails to match"
                - "Compare the rate ranking with the count ranking and write up what moved"
            - name: Statistical release calendar watch
              description: |-
                ## Purpose
                Official statistics are published on pre-announced dates, and analysts who learn of a new release from a colleague's email end up presenting last quarter's figures. Following the release calendars of your key publishers, with each release linked to the reports it feeds, means updates are planned rather than discovered.

                ## Milestones
                1. Release calendars subscribed to or bookmarked for each key publisher.
                2. The next six months of relevant releases listed with the reports and models each one feeds.
                3. An owner named for updating each affected output after release.
                4. A weekly check in place that has run for a full month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of the next six months of relevant releases, each linked to an affected output and owner, checked weekly for a month."
                cadence: rolling
              tasks:
                - "Subscribe to release calendar alerts from your three key publishers"
                - "List the coming releases and the outputs each one feeds"
                - "Check the week's scheduled releases and assign updates @recurring(weekly:mon)"
                - "Put each release day in the owner's calendar with the output to update"
            - name: Scheduled refresh of public sources
              description: |-
                ## Purpose
                Datasets in use go stale quietly, and the first sign is often a link that returns an error or a file whose columns have changed. A monthly refresh that re-downloads each due source into the archive, compares it with the previous copy and flags changes in structure, row counts or values keeps internal analysis current and catches moved or retired sources early.

                ## Milestones
                1. Each register entry marked with how often its source updates.
                2. A refresh routine that downloads, archives and records retrieval for every due source.
                3. A comparison step reporting changed columns, row counts and large value shifts.
                4. Broken or moved sources found and the register updated with their new locations.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every source due for update has been re-archived on schedule for three months, with structural changes reported and broken links fixed."
                cadence: rolling
              tasks:
                - "Mark each register entry with its publisher's update frequency"
                - "Write a short refresh checklist covering download, archive and compare"
                - "Run the refresh for all sources due this month @recurring(monthly:12)"
                - "Test that every source URL in the register still resolves @recurring(quarterly)"
            - name: Revision and vintage tracking for official statistics
              description: |-
                ## Purpose
                GDP, employment, population and many other official series are revised, sometimes years later, so the same quarter can carry three different values depending on when you looked. Keeping each vintage rather than overwriting it lets you explain why a chart changed, rerun an old analysis exactly and judge how far early estimates can be trusted.

                ## Milestones
                1. Series known to be revised identified among your registered datasets.
                2. Each refresh of those series saved as a new vintage with its release date.
                3. A small table of first estimate against latest estimate for your key series.
                4. A line in reports stating which vintage was used.

                ## Notes
                Some publishers keep a real-time or vintage database of past releases. Check before you build your own.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each revised series in the register has dated vintages kept for at least two releases, and reports state the vintage used."
                cadence: rolling
              tasks:
                - "Mark which registered series the publisher says are subject to revision"
                - "Check whether each publisher offers a vintage or real-time database"
                - "Save the latest release of each revised series as a dated vintage @recurring(monthly:18)"
                - "Add a vintage line to the source footnote in reports"
            - name: Monthly scan for new and changed datasets
              description: |-
                ## Purpose
                New sources appear all the time: a regulator starts publishing complaint data, a city opens an API, a research group releases a cleaned panel. A monthly half hour with the portals, newsletters and repositories that matter to your field turns chance discoveries into a steady pipeline of candidates, each logged and judged against your question list.

                ## Milestones
                1. A list of five to ten portals, newsletters and repositories to scan.
                2. A candidate log recording each promising dataset with its link and the question it might answer.
                3. At least one candidate put through the fitness check and adopted or rejected.
                4. Three monthly scans completed and logged.

                ## Notes
                Start from the **Reading queue** template for the candidate log.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly scans logged, with every candidate recorded against a question and at least one assessed for fitness."
                cadence: rolling
              tasks:
                - "Choose the portals, newsletters and repositories to scan"
                - "Set up the candidate log with link, publisher and matching question"
                - "Spend thirty minutes scanning sources and logging candidates @recurring(monthly:24)"
                - "Run the fitness check on the most promising candidate"
            - name: Known issues log for each public source
              description: |-
                ## Purpose
                Every long-used public dataset has quirks: a region recorded twice in one year, a column that switched from thousands to units, a footnote symbol that turns numbers into text. Writing each quirk down once, with the workaround, stops the next analyst losing a day to it and gives you a ready list when reporting errors back to the publisher.

                ## Milestones
                1. A known issues section added to each register entry.
                2. Every quirk the team has hit in the last year recorded with date, symptom and workaround.
                3. Publisher errata or corrections pages linked for the top sources.
                4. Each workaround in the log matched by code in the shared cleaning scripts.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each of the top ten sources has a known issues entry listing symptoms and workarounds, with a link to the publisher's corrections page."
                cadence: rolling
              tasks:
                - "Ask colleagues for every public data quirk that cost them time this year"
                - "Record each quirk with symptom, affected years and workaround"
                - "Link each top source's errata or corrections page"
                - "Read the corrections pages of your top five sources @recurring(monthly:27)"
            - name: Shared cleaning scripts for recurring sources
              description: |-
                ## Purpose
                When three analysts each clean the same labour force table in their own spreadsheet, the organisation ends up with three slightly different unemployment rates. One shared, version-controlled script per recurring source, taking the raw archived file to a tidy table, makes everyone's numbers agree and turns each refresh into a rerun rather than an afternoon of copying.

                ## Milestones
                1. The five most reused public sources chosen for scripting.
                2. A cleaning script for each, reading from the raw archive and writing a tidy output.
                3. Each script stored in version control with a short readme of its steps.
                4. Analysts working from the tidy outputs instead of private copies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Cleaning scripts for the five most reused sources run from raw archive to tidy output and are held in version control."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Find which public sources are cleaned separately by more than one person"
                - "Write the first cleaning script for the most reused source"
                - "Commit each script with a readme describing its input and output"
                - "Ask analysts to switch their reports to the tidy outputs"
            - name: Quarterly register and licence review
              description: |-
                ## Purpose
                Registers decay: datasets stop being used, owners leave, publishers change licences or retire a series. A quarterly review of every register entry, plus a yearly re-read of the licence and terms for each source, keeps the list honest and catches the rare but costly case where terms change under you.

                ## Milestones
                1. Every entry checked for current use, owner and last refresh.
                2. Unused datasets retired from the register, with their archive kept.
                3. Licence and terms re-read and confirmed for each active source in the yearly pass.
                4. Any licence change assessed for its effect on outputs already published.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter every register entry has a confirmed owner and use, and each year every active source's licence is re-read and dated."
                cadence: cyclic
              tasks:
                - "Book a quarterly review slot with the dataset owners"
                - "Review owner, use and last refresh for every register entry @recurring(quarterly)"
                - "Re-read the licence and terms for each active source @recurring(yearly)"
                - "Retire unused entries and note the date and reason"
            - name: Reporting errors back to data publishers
              description: |-
                ## Purpose
                Publishers usually fix errors when told about them clearly, and every correction helps every other user of the data. A routine for reporting confirmed problems, with the table, the cell, the evidence and a suggested fix, turns your known issues log into improvements at source and builds a relationship with the statisticians who can answer questions later.

                ## Milestones
                1. The contact route for corrections found for each top publisher.
                2. A short report format agreed: dataset, edition, location, evidence and impact.
                3. At least two confirmed issues reported.
                4. Publisher responses recorded in the known issues log.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least two confirmed data errors reported to publishers in the agreed format, with their responses logged."
                cadence: rolling
              tasks:
                - "Find the corrections or user enquiry contact for your top publishers"
                - "Pick the clearest confirmed issue from the known issues log"
                - "Write the report with dataset, edition, cell, evidence and impact"
                - "Send any queued error reports to publishers @recurring(monthly:8)"
            - name: Querying open data portal and statistical APIs
              description: |-
                ## Purpose
                Clicking through a portal and downloading a spreadsheet does not scale past a few sources. Many official publishers offer APIs, often in the SDMX standard for statistics, and most open data portals run on platforms with predictable query interfaces, so learning to request exactly the series, dimensions and periods you need makes refreshes scriptable and repeatable.

                ## Milestones
                1. The API documentation for two of your publishers read and their query structure understood.
                2. One series pulled by API with filters for geography, period and measure.
                3. The API result matched against the same figures downloaded by hand.
                4. The query saved in a script that reads its key from the secrets store.

                ## Notes
                Statistical APIs often return codes, not labels. Pull the code lists alongside the data or the output will be unreadable.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One registered series retrieved by a saved API script whose output matches the hand-downloaded figures exactly."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find whether your two main publishers offer an API and read the documentation"
                - "Pull one series by API with filters for place, period and measure"
                - "Download the same figures by hand and compare them cell by cell"
                - "Save the query as a script that reads its key from the secrets store"
            - name: Tidying published statistical tables
              description: |-
                ## Purpose
                Published tables are built for reading, not analysis: merged headers, totals mixed with detail, footnote markers and symbols for suppressed or provisional values sitting inside number columns. Practising the reshape from presentation table to one row per observation, with flags kept in their own column, is the skill that most speeds up public data work.

                ## Milestones
                1. The symbols your key publishers use for suppressed, provisional, estimated and not applicable values listed.
                2. One multi-header published table reshaped into a long tidy table.
                3. Totals and subtotals separated and checked against the detail rows.
                4. Footnote and status flags held in a separate column rather than deleted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A published multi-header table converted to a tidy long table, with totals reconciling and status flags preserved in their own column."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the special symbols used in your three most used publishers' tables"
                - "Pick a published table with merged headers and footnote markers"
                - "Reshape it to one row per area, period and measure"
                - "Check that the detail rows add up to the published totals"
            - name: Geographic codes and boundary changes
              description: |-
                ## Purpose
                Joining public data by place name fails on spelling, and joining by code fails when boundaries change between years, which they do after local government reorganisations and census rounds. Learning the code system your country uses, where its lookup and best-fit tables live, and how to move figures between boundary vintages prevents silent mismatches in every area-level join.

                ## Milestones
                1. The official geographic code system and its levels written down for your country or region.
                2. Lookup tables between levels and between boundary years located and archived.
                3. One dataset converted from an old boundary set to the current one using a published lookup.
                4. A rule recorded for which boundary year the team reports on.

                ## Notes
                Joining on names is a last resort. If you must, keep a reviewed name to code mapping and never fuzzy match silently.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One dataset moved between boundary vintages with a published lookup, and the team's reporting boundary year written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the official geographic code lookup for your country"
                - "Note which boundary year each registered dataset uses"
                - "Convert one dataset to the current boundaries with the published lookup"
                - "Agree and record the boundary year your reports will use"
            - name: Classification codes and concordance tables
              description: |-
                ## Purpose
                Industry, occupation, product, trade and country data are coded to standard classifications, and those classifications are revised every decade or so. Knowing the version in each dataset and using published concordance tables to map between versions, or between national and international systems, makes combining sources possible without inventing your own groupings.

                ## Milestones
                1. The classification and version used by each registered dataset recorded.
                2. Official concordance tables for the versions you meet located and archived.
                3. One dataset mapped from an old to a current version, with split codes handled by a stated rule.
                4. ISO country codes adopted as the join key for international data.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each registered dataset has its classification version recorded, and one has been mapped across versions using an official concordance."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Record the classification and version used in each registered dataset"
                - "Find the official concordance between the versions you meet"
                - "Map one dataset across versions and write the rule for split codes"
                - "Switch international joins to ISO country codes"
            - name: Reading margins of error in published estimates
              description: |-
                ## Purpose
                Many public figures come from samples, not counts, and the published margin of error or coefficient of variation says how far a small-area or subgroup estimate can be trusted. Learning to read these measures, and to check whether two estimates genuinely differ before saying one is higher, stops reports from ranking areas on noise.

                ## Milestones
                1. The uncertainty measures your key survey-based sources publish identified.
                2. Margins of error carried through into one internal analysis that uses survey estimates.
                3. A simple test applied to decide whether two published estimates differ.
                4. A team rule written for when an estimate is too unreliable to report.

                ## Notes
                If a publisher flags an estimate as unreliable, carry the flag into your output rather than quietly dropping it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One internal analysis shows margins of error for its survey-based figures, and a written reliability rule exists for the team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find where your survey-based sources publish margins of error"
                - "Add the margin of error beside each estimate in one existing analysis"
                - "Test whether the two areas you compare most often really differ"
                - "Write the threshold at which an estimate is marked unreliable"
            - name: Deflating, rebasing and per-head adjustments
              description: |-
                ## Purpose
                Comparing money over time without adjusting for inflation, or countries without adjusting for population and price levels, produces striking and wrong charts. Learning to deflate with an official price index, rebase a series to a chosen year, convert to per-head figures and choose between market exchange rates and purchasing power parities makes comparisons fair.

                ## Milestones
                1. The official price index chosen for deflating each kind of money series you use.
                2. One nominal series converted to real terms with the base year stated.
                3. One cross-country comparison redone per head at purchasing power parity.
                4. A note added to the team primer on which adjustment fits which question.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One series deflated with a stated base year and one comparison made per head at purchasing power parity, both documented."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose the official price index that fits your main money series"
                - "Convert one nominal series to real terms and label the base year"
                - "Redo one country comparison per head at purchasing power parity"
                - "Write a short note on which adjustment suits which question"
            - name: Extracting tables from PDFs and web pages responsibly
              description: |-
                ## Purpose
                Some of the most useful public figures are trapped in PDF annual reports or HTML pages with no download. Extracting them reliably means asking the publisher for the underlying file first, respecting robots files and terms of use, using a table extraction tool, and checking every extracted figure against the page.

                ## Milestones
                1. The publisher asked whether a machine-readable version exists.
                2. The terms of use and robots file checked before any automated collection.
                3. One PDF table extracted with a tool and every cell checked against the source.
                4. The extraction script and a capture of the source page archived together.

                ## Notes
                Scraping slowly with a clear user agent and contact address is basic courtesy. Personal data on public pages is still personal data.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One PDF or web table extracted with every cell verified, after the terms and robots file were checked and the publisher asked for a file."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Email the publisher to ask for a machine-readable version of the table"
                - "Check the site's terms of use and robots file"
                - "Extract one PDF table with a tool and check each cell by eye"
                - "Archive the script, the output and a capture of the source page"
            - name: Linking records across public registers
              description: |-
                ## Purpose
                Company, charity, land and licensing registers become far more useful when linked to each other or to your own records, for instance matching suppliers to the company register or grant recipients to the charity register. Using official identifiers first and careful name and address matching second, with a sample checked by hand, produces links you can defend.

                ## Milestones
                1. The official identifiers available in each register listed.
                2. Exact identifier matches made first and counted.
                3. Remaining records matched on standardised name and address, each with a confidence score.
                4. A random sample of 50 matches checked by hand and the error rate recorded.

                ## Notes
                Matching on names alone joins different organisations with similar names. Treat any match without an identifier as provisional until checked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A linked table between two registers with match method and confidence on every row, and a hand-checked sample error rate recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the identifiers each register publishes"
                - "Match on official identifiers first and count the hits"
                - "Ask the agent to draft name and address standardisation rules"
                - "Check a random sample of 50 matches by hand and record the error rate"
            - name: Choosing between competing sources for one measure
              description: |-
                ## Purpose
                Unemployment, population or household income for the same place and year can differ between the national statistics office, an international database and a commercial provider because of definitions, timing and modelling. Comparing the candidates side by side on definition, coverage, timeliness and revision practice, then recording one choice, ends the meetings where two decks show two numbers.

                ## Milestones
                1. Two to four candidate sources for one contested measure listed.
                2. Each compared on definition, coverage, timeliness, frequency, revision practice and licence.
                3. One source chosen as the house figure, with the reason recorded.
                4. The choice noted in the register and sent to report owners.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two sources for one contested measure, with the chosen house source and reason recorded in the register."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick the measure that most often appears with two different values"
                - "Lay out each candidate's definition, coverage and timeliness side by side"
                - "Choose the house source and write the reason in two sentences"
                - "Tell report owners which source is now standard"
            - name: Free public data versus a paid data vendor
              description: |-
                ## Purpose
                Commercial providers repackage public data, add proprietary sources and sell convenience, cleaning and support. Before signing a yearly subscription, compare what the vendor adds over the free originals in coverage, timeliness, cleaning and licence terms for your intended use, and cost the staff time the free route really takes.

                ## Milestones
                1. The need written down as measures, geography, frequency and intended use.
                2. The free public route costed in staff hours per year.
                3. Up to three vendors compared on coverage, timeliness, licence and price.
                4. A decision recorded to use public data, buy, or combine the two.

                ## Notes
                Start from the **Purchase decision** template. Check whether the vendor's licence lets you publish derived figures; many do not.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between public data and named vendors, with the free route costed in hours and each vendor's licence terms compared."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the need as measures, geography, frequency and intended use"
                - "Estimate the yearly hours the free public route would take"
                - "Request licence terms and pricing from up to three vendors"
                - "Record the decision and the reasons on the purchase decision page"
            - name: Triangulating a key figure against a second source
              description: |-
                ## Purpose
                A figure that drives a decision deserves a second look from an independent source: administrative counts against survey estimates, national figures against an international database, or your own customer data against official business counts. Large gaps usually trace to definitions or coverage, and finding the reason makes the figure safer to rely on.

                ## Milestones
                1. The three external figures your decisions lean on most identified.
                2. An independent second source found for each.
                3. Differences quantified and explained by definition, coverage or timing.
                4. Any figure with an unexplained gap flagged in the register with a caution.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three key external figures each compared with an independent source, with every gap either explained or flagged in the register."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Name the three external figures your decisions rely on most"
                - "Find an independent second source for each one"
                - "Write down the size of each gap and its likely cause"
                - "Repeat the comparison for the most important figure @recurring(quarterly)"
            - name: Coverage gaps and who public data leaves out
              description: |-
                ## Purpose
                Public datasets reflect who was counted: surveys that miss people without a fixed address, registers that exclude informal businesses, small islands and rural districts folded into larger regions. For researchers and nonprofits serving groups at the margins, writing down who each key dataset misses, and how that skews the analysis, is part of using it honestly.

                ## Milestones
                1. The populations your work serves listed.
                2. The coverage notes of each key dataset checked against that list.
                3. Missing or poorly measured groups written down with the likely direction of bias.
                4. A caveat paragraph added to reports that rely on those datasets.

                ## Notes
                Where official data is thin, community organisations sometimes hold better local counts. Ask before assuming nothing exists.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written coverage note for each key dataset naming groups missed or undercounted, reflected in a standard report caveat."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the groups your work is meant to reach"
                - "Read the coverage section of each key dataset's methodology"
                - "Write which groups are missing and how that biases results"
                - "Add a coverage caveat to the report template"
            - name: Handling suppressed and small cells in public tables
              description: |-
                ## Purpose
                Publishers hide or round small counts to protect individuals, so detailed tables arrive full of blanks, asterisks and values rounded to the nearest five. Deciding in advance how the team treats suppressed cells, whether by aggregating up, bounding them with published totals or leaving them missing, keeps analyses consistent and stops anyone treating a suppressed cell as zero.

                ## Milestones
                1. The suppression and rounding rules of your key publishers written down.
                2. Every place in current scripts where suppressed values become zero or are dropped found.
                3. A team rule chosen for each common case, with the reasoning.
                4. Scripts updated and affected outputs rerun.

                ## Notes
                Never try to recover a suppressed value by differencing published totals. It defeats the protection the publisher applied and may breach the terms of use.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rule for suppressed and rounded cells applied in every cleaning script, with no suppressed value coded as zero."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note each key publisher's suppression and rounding rules"
                - "Search the cleaning scripts for places where blanks become zeros"
                - "Write the team rule for each common suppression case"
                - "Rerun the affected outputs with the corrected handling"
            - name: Harmonised data dictionary for combined datasets
              description: |-
                ## Purpose
                Once three or four public sources are combined with internal data, nobody remembers that income means gross household income in one and net individual income in another. A single dictionary listing each combined variable with its source, definition, unit, period and the transformation applied makes the combined table usable by people who did not build it.

                ## Milestones
                1. Every variable in the main combined table listed.
                2. Source, definition, unit, reference period and transformation recorded for each.
                3. Variables with mismatched definitions marked with a warning.
                4. The dictionary stored beside the combined table and linked from the register.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dictionary covering every variable in the main combined table, with source, definition, unit, period and transformation filled in."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the column list of your main combined table"
                - "Fill in source, definition, unit and period for each column"
                - "Flag columns whose definitions differ between sources"
                - "Link the dictionary from each relevant register entry"
            - name: Requesting unpublished data from a public body
              description: |-
                ## Purpose
                Many public bodies hold more detail than they publish, and freedom of information or access to information laws in many countries give a route to ask for it. A well-scoped request, naming the dataset, fields, period and format, with an offer to accept aggregates, is far more likely to succeed than a broad one and arrives in a usable form.

                ## Milestones
                1. The publisher's catalogue checked to confirm the data is not already available.
                2. The access to information route and statutory response time noted for your country.
                3. A request drafted naming dataset, fields, period, format and acceptable aggregation.
                4. The request sent, logged and followed up until answered or refused.

                ## Notes
                Ask informally first: the statistician who compiles the table can often send a breakdown without a formal request. Expect personal data to be refused or aggregated.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A scoped data request sent to a public body, logged with its date and followed through to a recorded response."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the publisher's catalogue once more for the data you need"
                - "Ask the compiling statistician informally whether a breakdown exists"
                - "Draft a request naming fields, period, format and aggregation"
                - "Log the request date and the expected response deadline"
            - name: Deciding whether to publish an open dataset
              description: |-
                ## Purpose
                Publishing your own data, such as a nonprofit's service statistics, a research dataset or a public body's spending, can multiply its value and meet funder or journal expectations, but it carries cost and risk. A written decision covering who would use it, what it contains, the disclosure risk, the upkeep burden and who signs off settles the question before effort goes into preparing a release.

                ## Milestones
                1. The candidate dataset described with its contents, likely users and the benefit of releasing it.
                2. Funder, journal, contract and legal obligations to publish, or not to, checked.
                3. The upkeep cost of a one-off release compared with regular updates.
                4. A go or no-go recorded with the name of the person who approved it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded publish or do-not-publish decision for one dataset, covering users, obligations, risk and upkeep, signed off by a named approver."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Describe the dataset and the three groups most likely to use it"
                - "Check funder, journal and contract terms for publishing obligations"
                - "Estimate the hours for a one-off release and for regular updates"
                - "Get the decision approved and record the approver's name"
            - name: Disclosure risk check before an open release
              description: |-
                ## Purpose
                Once a dataset is public it cannot be recalled, and small counts, rare combinations of fields or free-text comments can identify individuals even after names are removed. A disclosure review before release, run with your privacy lead or data protection officer, checks for small cells, rare combinations, location and date detail and linkage with other public data, and records what was changed.

                ## Milestones
                1. Direct identifiers removed and free-text fields reviewed line by line.
                2. Small cells and rare combinations of fields found and handled by grouping, rounding or suppression.
                3. Linkage risk with other public datasets considered and written down.
                4. The privacy lead's sign-off and every change made recorded in a risk register.

                ## Notes
                Start from the **Risk register** template. When personal data is involved, take advice from your data protection officer or a privacy specialist; this check prepares for that conversation and does not replace it.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A completed disclosure review for the release, with every change recorded and a sign-off from the privacy lead before publication."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a review slot with your privacy lead or data protection officer"
                - "List every field and flag direct and indirect identifiers"
                - "Find cells below your agreed minimum count and rare field combinations"
                - "Record each change and the sign-off in the risk register"
            - name: Choosing a licence for data you publish
              description: |-
                ## Purpose
                A dataset with no licence is hard for anyone to reuse safely, and a restrictive or home-made licence puts off the very people you hoped would use it. Choosing a recognised open licence such as CC BY or CC0, or a government open licence where one applies, with your legal contact's agreement, makes reuse clear and compatible with other open data.

                ## Milestones
                1. Rights in the data checked, including any third-party data it contains.
                2. Two candidate licences compared on attribution, commercial use and compatibility.
                3. A licence chosen and approved by your legal or compliance contact.
                4. The licence name and link placed in the dataset's documentation and metadata.

                ## Notes
                If your dataset includes third-party data, you can only license what you have the right to. Check the source licences in your register first.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recognised open licence chosen for the dataset, approved by legal or compliance, and stated in its documentation and metadata."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the register for third-party data inside the dataset"
                - "Compare CC BY and CC0 against what you want users to be able to do"
                - "Get the chosen licence approved by your legal contact"
                - "Add the licence name and link to the readme and metadata"
            - name: Documentation pack for a published dataset
              description: |-
                ## Purpose
                Users of open data cannot ask you what a column means at midnight. A documentation pack with a readme, a codebook of every field, a datasheet covering why and how the data was collected and what it should not be used for, and a changelog lets strangers use the data correctly and cuts the questions you will be sent.

                ## Milestones
                1. A readme covering purpose, contents, coverage, licence and contact.
                2. A codebook listing every field with type, unit, allowed values and missing value codes.
                3. A datasheet describing collection, processing, known limits and unsuitable uses.
                4. A colleague who did not build the data able to answer five test questions from the pack alone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A readme, full codebook, datasheet and changelog exist, and a colleague answered five test questions using only the pack."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the readme with purpose, coverage, licence and contact"
                - "Ask the agent to draft a codebook from the column list, then correct it"
                - "Write the datasheet section on known limits and unsuitable uses"
                - "Give a colleague five questions to answer from the pack alone"
            - name: Repository deposit with a persistent identifier
              description: |-
                ## Purpose
                Files on a project website disappear when the site is redesigned. Depositing the dataset in a recognised repository, whether a general research repository, a subject archive or a national open data portal, gives it a persistent identifier such as a DOI, versioned releases and metadata that search engines and dataset catalogues can find.

                ## Milestones
                1. A repository chosen that fits the subject, the licence and any funder requirements.
                2. Metadata completed: title, creators, description, keywords, coverage, licence and related publications.
                3. The first version deposited with its documentation pack and a persistent identifier issued.
                4. The identifier added to reports, the website and the dataset's citation text.

                ## Notes
                Use the repository's versioning for updates rather than depositing a new record each time, so citations always point to one family of versions.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The dataset is deposited in a recognised repository with complete metadata, a persistent identifier and its documentation attached."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Shortlist repositories that fit your subject and funder rules"
                - "Complete the repository metadata form as a draft"
                - "Upload the data and documentation pack and publish version one"
                - "Add the persistent identifier to the citation text and website"
            - name: Launch of your first open data release
              description: |-
                ## Purpose
                Datasets published without any announcement are rarely found. Treating the first release as a small launch, with the files checked, a short post explaining what the data shows and how to use it, a note to the communities most likely to reuse it and someone ready to answer questions in the first fortnight, gives it a real chance of being used.

                ## Milestones
                1. A pre-release checklist passed: files open, links work, licence and documentation present, disclosure sign-off held.
                2. A short launch post written with two example uses and the citation.
                3. Five relevant networks, mailing lists or researchers told on launch day.
                4. Questions from the first two weeks answered and recurring ones added to the readme.

                ## Notes
                Start from the **Operational checklist** template for the pre-release checks.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The release passed a written pre-release checklist, a launch post went out, and first-fortnight questions were answered and fed into the readme."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build the pre-release checklist from the publishing projects"
                - "Write a launch post with two example uses and the citation"
                - "List five networks or researchers to tell on launch day"
                - "Block time to answer questions in the two weeks after launch"
            - name: Open data day or community hackathon
              description: |-
                ## Purpose
                Open data events bring analysts, developers, journalists and community groups together around public datasets, and they are one of the fastest ways to learn what people need from the data you publish or use. Taking part with a prepared challenge, or hosting a small session around your own release, produces feedback, contacts and sometimes a useful tool.

                ## Milestones
                1. An event chosen, such as the annual Open Data Day or a local civic tech meetup.
                2. A challenge prepared with a clean dataset extract, documentation and a clear question.
                3. The session run, with participants' feedback on the data recorded.
                4. Follow-up actions from the feedback added to the known issues log or release plan.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One open data event attended or hosted with a prepared challenge, and participant feedback turned into logged follow-up actions."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Look up open data and civic tech events in the next six months"
                - "Prepare a dataset extract and a one-paragraph challenge"
                - "Record every complaint or request participants make about the data"
                - "Check for upcoming open data events and decide whether to take part @recurring(yearly)"
            - name: Annual refresh of a published dataset
              description: |-
                ## Purpose
                Users drift away from a dataset that stops at the year it was first released. An annual release cycle, with fresh data processed by the same scripts, the disclosure check repeated, a new version deposited and the changelog updated, keeps it current and shows users it is maintained.

                ## Milestones
                1. The annual release month fixed and stated in the readme.
                2. New data processed with the same scripts and compared with last year for breaks.
                3. The disclosure check repeated on the new data and signed off.
                4. A new version deposited with a changelog entry and users told.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One annual release published on time as a new repository version, with a repeated disclosure sign-off and a changelog entry."
                cadence: cyclic
              tasks:
                - "Fix the release month and state it in the readme"
                - "Run the processing scripts on the new year's data and compare with last year"
                - "Repeat the disclosure check and get sign-off"
                - "Start the annual release of the published dataset @recurring(yearly)"
            - name: Report launch with a full sources appendix
              description: |-
                ## Purpose
                Reports built on public data are only as credible as their sourcing. Before a major report, briefing or evidence submission goes out, an appendix listing every external dataset with publisher, edition, retrieval date, licence and any adjustments made lets reviewers check the work and protects the organisation when a figure is challenged.

                ## Milestones
                1. Every external figure in the report traced to a register entry.
                2. A sources appendix written with publisher, edition, retrieval date, licence and adjustments.
                3. Five figures rechecked against their sources by a colleague.
                4. The analysis files for the report archived with the raw downloads they used.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The report ships with a sources appendix covering every external figure, five of which a colleague has rechecked against the source."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Highlight every external figure in the report draft"
                - "Trace each highlighted figure to its register entry"
                - "Write the sources appendix in the house citation format"
                - "Ask a colleague to recheck five figures against the original tables"
            - name: Needs assessment from public statistics for a funding bid
              description: |-
                ## Purpose
                Funders ask nonprofits to show need with evidence: how many people in the area live on low incomes, lack transport, care for a relative or fall into the group the programme serves. Building a short needs profile from official statistics for your service area, with sources cited and figures set against the national picture, makes the case stronger and is reusable across bids.

                ## Milestones
                1. The service area defined in official geographic codes.
                2. Five to eight indicators of need chosen that match the programme's purpose.
                3. Figures gathered for the area and the national comparison, each with source and date.
                4. A two-page needs profile written and saved for reuse in later bids.

                ## Notes
                Use the most recent figures but say how old they are. Funders notice a census figure presented as current.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A two-page needs profile with five to eight cited indicators for the service area against the national figure, ready for a bid."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Define the service area using official area codes"
                - "Choose five to eight indicators linked to the programme's purpose"
                - "Collect area and national figures with source and date for each"
                - "Refresh the needs profile figures when new estimates are released @recurring(yearly)"
            - name: Publishing grants or programme data openly
              description: |-
                ## Purpose
                Funders and nonprofits increasingly publish who they fund, how much and what for, and some sectors have shared data standards for it, such as 360Giving for grants or IATI for international aid. Publishing in a recognised standard makes your data comparable with others in the sector and answers transparency questions before they are asked.

                ## Milestones
                1. The relevant sector data standard identified and its required fields listed.
                2. Internal records mapped to the standard, with gaps noted.
                3. A first file published that passes the standard's validation tool.
                4. A regular publishing schedule agreed with finance or grants staff.

                ## Notes
                Grants to individuals usually need to be excluded or aggregated. Agree the rule with your privacy lead before the first file.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A grants or programme file published to the sector standard that passes its validator, with a regular update schedule agreed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find the open data standard your sector uses for grants or programme data"
                - "Map your internal fields to the standard's required fields"
                - "Run the first file through the standard's validation tool"
                - "Publish the updated grants file to the agreed standard @recurring(quarterly)"
            - name: Data availability statement and archive for a paper
              description: |-
                ## Purpose
                Journals and funders now expect a data availability statement and, often, the data and code behind a paper. For a researcher using public datasets, that means archiving the exact editions used, the cleaning code and any derived files you have the right to share, and explaining how others can obtain what you cannot redistribute.

                ## Milestones
                1. The journal's or funder's data policy read and its requirements listed.
                2. Every public dataset in the paper recorded with edition and retrieval date.
                3. Redistributable data and code deposited with a persistent identifier.
                4. A data availability statement drafted that explains access to anything not redistributable.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A deposited archive of code and shareable data with an identifier, and a data availability statement covering every dataset in the paper."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the journal's data policy and list what it requires"
                - "List every dataset in the paper with edition and retrieval date"
                - "Separate files you may redistribute from those you may not"
                - "Draft the data availability statement and check it with a co-author"
            - name: Market sizing from official business statistics
              description: |-
                ## Purpose
                Knowledge workers asked to size a market often start from a consultancy headline nobody can trace. Official business counts, turnover by industry, household spending surveys and trade statistics allow a bottom-up estimate with every assumption visible, which holds up far better when a sceptical director asks where the number came from.

                ## Milestones
                1. The market defined in terms of official industry, product or household spending classifications.
                2. Relevant counts and values gathered with source, edition and year.
                3. A bottom-up estimate built with each assumption listed separately.
                4. A range given rather than a single figure, with the most uncertain assumption named.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A bottom-up market estimate built from cited official statistics, expressed as a range with each assumption listed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the market definition using official industry or product codes"
                - "Gather business counts, turnover or spending figures for those codes"
                - "Build the estimate with each assumption on its own line"
                - "Refresh the market estimate with the latest official figures @recurring(yearly)"
            - name: Public data with no budget and no data team
              description: |-
                ## Purpose
                Small nonprofits, community groups and lone analysts often have no warehouse, no scripts and a few spare hours a month. A deliberately small set-up, with one spreadsheet register, one folder of raw downloads, three trusted sources and a monthly hour, gets most of the value of public data without pretending to be a data team.

                ## Milestones
                1. Three trusted public sources chosen for the questions that matter most.
                2. A one-tab register and a dated raw downloads folder set up.
                3. A monthly hour booked and kept for three months.
                4. One regular output, such as a quarterly area profile, produced from the set-up.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-tab register, a dated download folder and three chosen sources in use, with the monthly hour kept for three months."
                cadence: rolling
              tasks:
                - "Choose the three public sources that answer your most common questions"
                - "Set up a one-tab register and a dated downloads folder"
                - "Spend one hour updating figures and the register @recurring(monthly:5)"
                - "Produce one simple output from the refreshed figures"
            - name: Multi-country panel from international sources
              description: |-
                ## Purpose
                Cross-country research rarely finds every variable in one place, so analysts assemble panels from the World Bank, the IMF, the OECD, UN agencies and national offices. Doing it well means one country code standard, consistent units, a recorded source for every cell and a clear rule for filling or leaving gaps, so the panel can be rebuilt and defended.

                ## Milestones
                1. Variables, countries and years for the panel fixed in writing.
                2. Each variable assigned a primary and a fallback source.
                3. The panel built by script with ISO codes and a source column for every value.
                4. Missing values counted by country and year, with any filling rule documented.

                ## Notes
                Mixing sources within one variable can create jumps that look like real change. Flag every switch of source in the data.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A scripted country panel with ISO codes, a source recorded for every value and a documented rule for gaps."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the list of variables, countries and years"
                - "Assign a primary and fallback source to each variable"
                - "Build the panel by script with a source column for every value"
                - "Rebuild the panel from the latest international releases @recurring(yearly)"
            - name: Splicing a long-run series across methodology breaks
              description: |-
                ## Purpose
                Long official time series often contain breaks where a survey was redesigned, a definition changed or a base year moved. Splicing old and new segments with a stated method, using the publisher's overlap years or back-cast series where they exist, gives a continuous series without hiding that it is constructed.

                ## Milestones
                1. Every break in the series located from the methodology notes.
                2. Any official back-cast or linked series from the publisher checked first.
                3. Segments spliced with a stated method using overlap periods.
                4. The spliced series shared internally with the breaks marked and the method described.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A spliced series with every break marked, the method written down and official back-casts used where they exist."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the methodology notes and list every break in the series"
                - "Ask the publisher whether a linked or back-cast series exists"
                - "Splice the segments using overlap years and record the method"
                - "Mark the breaks on every chart that uses the series"
            - name: Validated open data package with automated checks
              description: |-
                ## Purpose
                Once a published dataset is updated regularly, manual checks start to miss things. Describing it with a machine-readable schema, such as a Frictionless Data package or a CSV schema, and running validation automatically before every release catches wrong types, missing values and broken codes before users do.

                ## Milestones
                1. A schema written for each published file with field types, constraints and allowed values.
                2. The data and schema bundled as a package with its metadata.
                3. Validation running automatically before each release.
                4. One faulty release blocked or corrected by the checks, proving they work.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each published file has a schema, and automated validation runs and must pass before every release."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a schema for the main published file"
                - "Bundle the data, schema and metadata into one package"
                - "Set validation to run automatically before each release"
                - "Introduce a deliberate error in a test copy to confirm the check catches it"
            - name: Measuring reuse and impact of your published data
              description: |-
                ## Purpose
                Funders, managers and your own future effort all depend on knowing whether anyone uses the data you publish. Tracking downloads, citations of the identifier, mentions, questions received and examples of reuse, then summarising them once a year, shows which releases matter and which can be retired.

                ## Milestones
                1. Sources of reuse evidence listed: repository statistics, citation searches, web mentions and enquiries.
                2. A reuse log started with monthly figures and named examples.
                3. A yearly summary of reuse written for funders or management.
                4. One decision taken from the evidence, such as expanding, changing or retiring a release.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A reuse log with at least six months of figures and examples, and a yearly summary that led to one recorded decision."
                cadence: rolling
              tasks:
                - "List where evidence of reuse can be found"
                - "Start a reuse log with downloads, citations and named examples"
                - "Record the month's downloads, citations and enquiries @recurring(monthly:20)"
                - "Write the yearly reuse summary and the decision it supports"
---

# Open & Public Datasets

This area is for researchers, nonprofit staff and analysts who rely on figures they did not collect, and for anyone getting ready to publish data of their own. It starts with foundations (the questions worth answering, a map of publishers, licences, a register, a raw archive and a fitness check), moves through the routines that keep external data current and traceable, the practical skills of APIs, tidy tables, codes and adjustments, and the decisions about which sources to trust, then covers the steps of an open release, dated events, situations such as bid writing or working without a data team, and specialist work like multi-country panels and validated data packages.

What repeats is a weekly release calendar check, monthly source refreshes, vintage snapshots, dataset scans, errata reads and error reports, quarterly register reviews and link checks, and yearly licence re-reads and annual releases. The Reading queue, Purchase decision, Risk register and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
