---
id: investment-banking.precedent-transactions-analysis
name: Precedent Transactions Analysis
description: "Precedent transaction tables you can defend: sourcing deals from filings, deal value bridges, LTM multiples at announcement, control premiums, relevance screening and a clearly argued valuation range."
category: business
version: 1.0.0
tags: [investment-banking, precedent-transactions-analysis, knowledge-worker, student, valuation, m-and-a, transaction-multiples, control-premium]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - reading-queue
    - development-plan
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Precedent Transactions Analysis
          description: "Building precedent transaction tables: finding deals, deal values and multiples, control premiums, relevance screening and presenting the range."
          projects:
            - name: Precedent transactions method primer
              description: |-
                ## Purpose
                Precedent analysis values a company by what buyers have actually paid for control of similar businesses, which is why its multiples usually sit above trading comps. Before building a table you should be able to explain, in two minutes and without notes, what it measures, where it is weak and how it differs from comps and a DCF.

                ## Milestones
                1. A one-page summary in your own words of what precedent multiples capture and why they include a control premium.
                2. Three known weaknesses written down: stale deals, thin disclosure on private targets and deal-specific synergies.
                3. A side-by-side note on when precedents carry more weight than trading comps and when less.
                4. The two-minute explanation practised aloud and timed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written one-page primer exists and you can deliver the two-minute explanation without notes to a colleague or study partner."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the precedents chapter of your training manual or a standard valuation textbook"
                - "Write a one-page primer on what precedent multiples capture"
                - "List three weaknesses of the method with an example of each"
                - "Explain the method aloud in two minutes and time yourself"
            - name: Standard precedent table workbook
              description: |-
                ## Purpose
                Building every table from a blank sheet wastes the first hours of each request and invites inconsistent columns. A personal workbook with fixed columns for dates, parties, consideration, equity value, enterprise value, LTM metrics, multiples, premiums and sources means the next request starts with data entry, not design.

                ## Milestones
                1. A workbook with an input tab per deal and a summary tab that pulls from the inputs.
                2. Fixed columns for announcement date, closing date, target, acquirer, buyer type, stake acquired and consideration form.
                3. Formula columns for enterprise value, EV to revenue, EV to EBITDA and implied premiums, with no hard-coded outputs.
                4. A source and footnote column on every row.
                5. The workbook checked against your firm's own precedents template so it matches house conventions.

                ## Notes
                Keep the workbook empty of client or deal-team data. It is a structure you reuse, and the deals you load into it at work stay in work systems.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reusable precedent workbook with input and summary tabs, formula-driven multiples and a source column on every row, tested on three public deals."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask for your group's existing precedents template and note its column order"
                - "Lay out the input tab with one block per deal"
                - "Build the summary tab pulling multiples and premiums from the inputs"
                - "Test the workbook on three public deals you know well"
            - name: Source hierarchy for deal data
              description: |-
                ## Purpose
                Deal databases, press releases and news articles often disagree on the price paid, and the error usually surfaces when a senior asks where a number came from. A written order of preference, with primary documents such as merger proxies, offer documents and scheme circulars at the top, settles every conflict the same way.

                ## Milestones
                1. A ranked list of sources from primary filings down to news reports.
                2. A rule for what to do when two sources disagree, including who to ask.
                3. A short guide to where each document type sits for public targets in your main markets.
                4. The hierarchy saved at the front of your precedent workbook.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written source hierarchy with a conflict rule is saved in your workbook and applied to the next table you build."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every source you have used for deal terms in the last three tables"
                - "Rank them from primary filing to news report"
                - "Write a one-line rule for resolving a conflict between two sources"
                - "Note where offer documents and circulars are published in your main markets"
            - name: Deal database screening fluency
              description: |-
                ## Purpose
                Most first drafts of a precedent list come from the firm's M&A databases, and analysts who only know the basic search miss deals filed under a parent company, a different industry code or an undisclosed value. An hour of deliberate practice on each screening function pays back on every request.

                ## Milestones
                1. Searches run by industry code, keyword in deal description and named acquirer, with results compared.
                2. A saved screen for your coverage sector with date, size and status filters.
                3. A list of the fields the database fills poorly, checked against two primary filings.
                4. A note of the database help desk or training contact.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved sector screen exists and you can name three fields in your database that need checking against filings."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a training session or work through the database's own tutorials"
                - "Run the same sector search three ways and compare the results"
                - "Save a screen for your coverage sector with date and size filters"
                - "Practise one new screening query on a live sector question @recurring(weekly:tue)"
            - name: Written screening criteria before searching
              description: |-
                ## Purpose
                Searching first and deciding relevance afterwards produces lists shaped by whatever the database returned. Agreeing criteria for sector, size band, geography, date window, stake acquired and deal status before the first search makes the table defensible and much faster to cut when a senior wants five deals instead of twenty.

                ## Milestones
                1. A one-paragraph criteria note covering sector, size, geography, date window, stake and status.
                2. The criteria confirmed with the associate or VP before searching starts.
                3. An inclusion and exclusion column in the long list that cites the criteria.
                4. Excluded deals kept on a separate tab rather than deleted.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The next precedent request starts from a written criteria note agreed with a senior, and every excluded deal cites a criterion."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a criteria note template with six headings"
                - "Agree the criteria with your associate on the next precedent request"
                - "Add an inclusion reason column to your long list tab"
                - "Move excluded deals to a separate tab with the reason noted"
            - name: Deal value bridge from offer price to enterprise value
              description: |-
                ## Purpose
                Getting from the headline price to enterprise value is where most precedent errors live: share counts at the wrong date, debt taken from the wrong balance sheet, minority interests and preferred equity forgotten. Building the bridge step by step on five real deals makes the arithmetic automatic.

                ## Milestones
                1. A bridge layout from offer price per share to equity value to enterprise value.
                2. Net debt, minority interests, preferred equity and investments in associates each handled with a stated rule.
                3. The balance sheet date used for each item recorded next to it.
                4. Five public deals bridged and checked against the values disclosed in their own filings.

                ## Notes
                When the acquirer quotes its own enterprise value, keep yours and footnote the difference rather than overwriting it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five deal bridges built from filings, each within a stated tolerance of the disclosed transaction value or with the gap explained."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Lay out a bridge from offer price to enterprise value in your workbook"
                - "Write the rule you use for each adjustment item"
                - "Bridge five public deals from their offer documents"
                - "Reconcile each result to the value the filing discloses"
            - name: LTM financials at the announcement date
              description: |-
                ## Purpose
                Multiples belong to the financials the buyer could see when it agreed the price, not to the target's latest results today. Learning to build last twelve months revenue and EBITDA from the annual report and the most recent interim before announcement stops the common error of mixing periods across rows.

                ## Milestones
                1. The LTM formula written out: latest full year plus year to date less prior year to date.
                2. LTM revenue and EBITDA built for three targets from their pre-announcement filings.
                3. Non-recurring items identified and treated consistently with your comps conventions.
                4. The LTM end date shown in its own column on the summary tab.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three LTM builds completed from pre-announcement filings, each with its period end date and adjustments listed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the LTM formula at the top of your workbook"
                - "Pull the last annual and interim reports before announcement for three targets"
                - "Build LTM revenue and EBITDA for each target"
                - "Add an LTM period end column to the summary tab"
            - name: Fully diluted shares at the offer price
              description: |-
                ## Purpose
                Options, restricted shares and convertibles that are out of the money at the old share price can be in the money at the offer price, which changes equity value. Practising the treasury stock method at the offer price, with a clear rule for convertibles, removes a quiet source of understated deal values.

                ## Milestones
                1. The treasury stock method set up to run at the offer price, not the undisturbed price.
                2. Option and award tranches taken from the latest filing before announcement.
                3. A stated rule for convertibles: converted if in the money at the offer price, otherwise treated as debt.
                4. Three targets' diluted share counts checked against the figures in their offer documents.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A diluted share calculation that runs at the offer price, tested on three targets and matching their filings or explained."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build a treasury stock method block that takes the offer price as input"
                - "Find the option and award tables in a recent target's annual report"
                - "Write your rule for convertibles and preferred shares"
                - "Check three diluted counts against the offer documents"
            - name: Footnote and source log conventions
              description: |-
                ## Purpose
                Every precedent page carries a footnote block, and seniors read it to judge whether the numbers can be trusted. A fixed set of footnote conventions for estimates, pro forma figures, currency conversion, partial stakes and rumoured values means each adjustment is explained once, in the same words, on every page.

                ## Milestones
                1. A footnote library with standard wording for the ten adjustments you make most often.
                2. A source log column recording document, page and date for each figure.
                3. Footnote markers that follow the same order on every page.
                4. The library checked by an associate for house style.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A footnote library of at least ten standard notes and a source log column are in use on your next precedent page."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect footnotes from three recent precedent pages in your group"
                - "Write standard wording for your ten most common adjustments"
                - "Add document, page and date fields to the source log"
                - "Ask an associate to check the wording against house style"
            - name: Monthly announced deal capture log
              description: |-
                ## Purpose
                Deals announced in your sector this month are next quarter's precedents, and capturing them while the press release and filings are fresh takes minutes instead of the hours it takes to reconstruct them under deadline. A monthly capture of public announcements keeps your personal library ahead of requests.

                ## Milestones
                1. A capture tab listing announcement date, parties, headline value and the documents to watch for.
                2. Every public deal in your sector above your size threshold logged within a month of announcement.
                3. Full terms added once the offer document or circular is published.
                4. A count of deals captured each month shown at the top of the tab.

                ## Notes
                Log only deals that have been publicly announced. Anything you know from inside the firm stays out of a personal library.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly captures completed, with every public sector deal above your threshold logged within a month."
                cadence: rolling
              tasks:
                - "Set a size threshold and sector definition for the capture log"
                - "Log the month's announced public deals in your sector @recurring(monthly:12)"
                - "Add full terms for deals whose offer documents have been published"
                - "Review the quarter's captures for missing filings @recurring(quarterly)"
            - name: Precedent library refresh for revised and terminated deals
              description: |-
                ## Purpose
                Announced terms change: offers get raised in competing bids, prices are cut after diligence and some deals never close. A quarterly pass over the library updates final terms, marks terminated deals and stops an abandoned offer from appearing in a pitch as if it completed.

                ## Milestones
                1. A status column with announced, completed, revised or terminated for every deal.
                2. Final terms recorded alongside original terms for revised deals.
                3. Terminated deals flagged and kept only where a footnote explains why.
                4. The date of the last refresh shown on the summary tab.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter the library shows a refresh date, and every deal has a current status with final terms where revised."
                cadence: rolling
              tasks:
                - "Add a status column and a final terms column to the library"
                - "Check status and final terms for every open deal in the library @recurring(quarterly)"
                - "Write a footnote rule for when a terminated deal may stay in a table"
                - "Record the refresh date on the summary tab"
            - name: Personal error log for precedent tables
              description: |-
                ## Purpose
                Errors in precedent tables repeat: the same stake mistake, the same missed convertible, the same currency slip. Writing down every error a reviewer catches, with its cause, and reading the log at the end of each week turns markups into a shrinking list rather than a recurring embarrassment.

                ## Milestones
                1. An error log with date, deal, error, cause and the check that would have caught it.
                2. Every precedent markup from a reviewer logged within a day.
                3. The three most frequent causes identified after a month.
                4. A check added to your personal routine for each of the top three causes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An error log with at least a month of entries, its top three causes named and a matching check added to your routine."
                cadence: rolling
              tasks:
                - "Create the error log with five columns"
                - "Log each precedent error a reviewer catches on the day it is found"
                - "Read the week's entries and note any repeated cause @recurring(weekly:fri)"
                - "Add a check for each of the three most common causes"
            - name: Sector transaction multiple benchmarks
              description: |-
                ## Purpose
                Knowing that control deals in your subsector have recently cleared at a given range of EBITDA multiples lets you sanity check a new table in seconds and answer an MD's corridor question without opening a file. A small benchmark sheet, refreshed each quarter from public deals, gives you that instinct with numbers behind it.

                ## Milestones
                1. Subsectors defined for your coverage area.
                2. Median and interquartile EV to EBITDA and EV to revenue recorded for each subsector from public deals.
                3. The number of deals behind each figure shown beside it.
                4. Four quarters of benchmarks kept so movement over time is visible.

                ## Notes
                Start from the **Metrics log** template. A benchmark from three deals is a talking point, not a range.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A benchmark sheet with medians, ranges and deal counts per subsector, refreshed for four consecutive quarters."
                cadence: cyclic
              tasks:
                - "Define four to eight subsectors for your coverage area"
                - "Calculate the first set of medians and ranges from your library"
                - "Refresh the subsector benchmarks from the quarter's completed deals @recurring(quarterly)"
                - "Note the deal count beside every benchmark"
            - name: Weekly merger document reading habit
              description: |-
                ## Purpose
                Merger proxies, offer documents and scheme circulars explain what was paid, what was excluded and why, in more detail than any database field. Reading one new document from your sector each week builds a feel for how deals are structured and disclosed that no training course gives.

                ## Milestones
                1. A queue of recent merger documents from your sector.
                2. One document read each week with the consideration, value and any unusual terms noted.
                3. Notes saved against the deal in your library.
                4. Twenty documents read within six months.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty merger documents read and annotated in your library within six months of starting."
                cadence: rolling
              tasks:
                - "Build a queue of ten recent merger documents from your sector"
                - "Read one queued merger document and note its key terms @recurring(weekly:wed)"
                - "File each set of notes against the deal in your library"
                - "Add newly published documents to the queue as you find them"
            - name: Peer cross-check of precedent tables
              description: |-
                ## Purpose
                Two analysts building tables in the same sector will make different calls on the same deal, and comparing them is the fastest way to find your blind spots. A monthly swap with a peer, each checking three rows of the other's table against filings, catches errors before a senior does.

                ## Milestones
                1. A peer agreed, in your group or a study partner, with a monthly slot.
                2. Three rows of each other's tables checked against the primary documents each month.
                3. Disagreements written down with the rule each of you applied.
                4. Any rule you change recorded in your source hierarchy or footnote library.

                ## Notes
                Swap only tables built from public information, and follow your firm's rules on sharing work product.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly cross-checks completed, with each disagreement and its resolution recorded."
                cadence: rolling
              tasks:
                - "Ask a peer to swap precedent checks once a month"
                - "Check three rows of your peer's table against filings @recurring(monthly:20)"
                - "Record each disagreement and the rule behind it"
                - "Update your conventions where the peer's rule was better"
            - name: Confidentiality boundary for a personal deal library
              description: |-
                ## Purpose
                Personal notes and libraries are useful only while they hold nothing they should not. A written rule on what can be kept (public announcements, filings and your own method notes) and a quarterly audit against it protect you from carrying client or deal-team information outside work systems, including when you change jobs.

                ## Milestones
                1. A written rule listing what a personal library may and may not contain.
                2. Your firm's policy on personal records and devices read and noted.
                3. The current library audited and any non-public item removed through work channels.
                4. A quarterly audit date set.

                ## Notes
                When unsure whether something is public, treat it as not public and ask compliance.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written content rule exists and four quarterly audits show the library holds only public information."
                cadence: rolling
              tasks:
                - "Read your firm's policy on personal records and devices"
                - "Write a one-paragraph rule for what your library may hold"
                - "Audit the library and remove anything that is not public through the proper channel"
                - "Audit the library against the written rule @recurring(quarterly)"
            - name: Currency conversion convention for cross-border deals
              description: |-
                ## Purpose
                Cross-border precedents need a consistent currency rule: deal values converted at the rate on announcement, LTM financials at the rate matching their period, or everything in local currency with multiples compared directly. Picking one convention and footnoting it stops mixed rates from distorting multiples by several turns of nothing.

                ## Milestones
                1. A written conversion convention for deal values and financials.
                2. The rate source and date recorded for each converted figure.
                3. A check that multiples are calculated from figures in the same currency.
                4. A standard footnote describing the convention.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A currency convention is written, footnoted and applied to every cross-border row in your next table."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your associate which currency convention the group uses"
                - "Write the convention in your workbook"
                - "Add rate source and date columns for converted figures"
                - "Add the standard currency footnote to your library"
            - name: Overnight precedent request checklist
              description: |-
                ## Purpose
                Late evening requests for a precedents page due by morning are where shortcuts creep in. A short checklist, from confirming the criteria to the final tie-out of the summary to the inputs, keeps the order of work fixed when you are tired and lets you hand over a page you have actually checked.

                ## Milestones
                1. A checklist of no more than fifteen steps from request to sending.
                2. Time estimates for each step so you can tell the requester when to expect the page.
                3. The checklist used on three real requests and adjusted after each.
                4. A final tie-out step comparing every summary figure to its input row.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checklist of fifteen steps or fewer, used on three real requests and revised after each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the steps you followed on your last overnight precedent request"
                - "Cut and reorder them into a checklist of fifteen steps or fewer"
                - "Add a time estimate beside each step"
                - "Review the checklist and add one lesson from recent requests @recurring(monthly:24)"
            - name: Control premium analysis for public targets
              description: |-
                ## Purpose
                Control premiums show how much above the undisturbed market price buyers paid, and clients selling a listed company ask about them in the first meeting. Learning to calculate premiums to the one-day, one-month and longer volume-weighted prices, and to the 52-week high, gives you the second half of most public precedent pages.

                ## Milestones
                1. Premium calculations set up to the one-day, one-month and three-month prices and the 52-week high.
                2. Volume-weighted averages calculated from daily price and volume data.
                3. Premiums for ten public deals calculated and compared with the figures in their offer documents.
                4. A note on why premiums differ by measurement window.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Premiums calculated across four windows for ten public deals, each reconciled to the disclosed premium or explained."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download daily price and volume data for one past target"
                - "Build premium calculations for four measurement windows"
                - "Repeat the calculation for nine more public deals"
                - "Compare your premiums with those in each offer document"
            - name: Choosing the unaffected share price date
              description: |-
                ## Purpose
                Bid rumours, leaks and approach announcements move a share price before the formal offer, and a premium measured from an inflated price understates what the buyer paid. Learning to pick the unaffected date from the announcement timeline and the price chart makes premium figures defensible.

                ## Milestones
                1. A timeline for five deals showing the first rumour, any approach announcement and the firm offer.
                2. Price charts reviewed for unusual moves before each date.
                3. An unaffected date chosen for each deal with the reason written down.
                4. Premiums recalculated from the unaffected date and compared with the naive figures.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five deals with a documented unaffected date and the difference between unaffected and naive premiums recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick five public deals where the target price moved before the offer"
                - "Build an announcement timeline for each from news and filings"
                - "Choose and justify an unaffected date for each deal"
                - "Recalculate the premiums from those dates"
            - name: Earn-outs, deferred and contingent consideration
              description: |-
                ## Purpose
                Earn-outs are common in deals for private and founder-led businesses, and treating the maximum earn-out as paid can overstate a multiple by turns. Learning to show upfront and maximum consideration separately, and to footnote the conditions, makes these rows honest.

                ## Milestones
                1. A rule for showing upfront value, deferred value and maximum contingent value.
                2. Separate multiples calculated on upfront and total potential consideration.
                3. Three deals with earn-outs worked through from their disclosures.
                4. A standard footnote describing earn-out treatment.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three earn-out deals shown with upfront and maximum multiples side by side and a standard footnote applied."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find three public announcements of deals that include an earn-out"
                - "Separate upfront, deferred and contingent amounts for each"
                - "Calculate multiples on upfront and maximum consideration"
                - "Write the standard earn-out footnote"
            - name: Minority stake and step acquisition deals
              description: |-
                ## Purpose
                Buying 30 percent of a company or taking a holding from 45 to 100 percent tells you different things about value, and both get mistaken for full control deals. Working through how to gross up a partial stake to an implied full value, and when such deals should stay out of a control table, prevents a common screening error.

                ## Milestones
                1. A rule for grossing up a stake price to an implied value for 100 percent.
                2. Criteria for when a minority or step deal belongs in a control table.
                3. Three partial-stake deals worked through with implied full values.
                4. A stake acquired column and footnote added to the template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three partial-stake deals grossed up with the method footnoted, and a written rule for their inclusion in control tables."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find three deals for minority stakes or the remaining shares of a target"
                - "Calculate the implied value for 100 percent of each"
                - "Write the rule for including or excluding partial-stake deals"
                - "Add a stake acquired column to your template"
            - name: Adjusted and run-rate EBITDA in deal announcements
              description: |-
                ## Purpose
                Buyers often quote a multiple on adjusted, pro forma or EBITDA that includes expected synergies, which can be well below the multiple on reported figures. Reconciling the announced multiple to one built from reported LTM numbers, and showing both where they differ, keeps your table consistent and lets you answer when a client cites the press figure.

                ## Milestones
                1. Five announcements collected where the quoted multiple uses adjusted or pro forma EBITDA.
                2. A reported LTM multiple built for each and compared with the announced one.
                3. The adjustments that explain each gap listed.
                4. A rule for which figure goes in the main column and which in a footnote.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five announced multiples reconciled to reported LTM multiples, with the gap explained and a column rule written."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect five announcements quoting adjusted or pro forma multiples"
                - "Build reported LTM multiples for each target"
                - "List the adjustments behind each gap"
                - "Write the rule for which multiple appears in the main column"
            - name: Sector-specific transaction metrics
              description: |-
                ## Purpose
                In many sectors buyers price deals on operating units rather than EBITDA: value per subscriber, per bed, per tonne of capacity, per megawatt or per unit of reserves. Knowing which metric your sector uses, how it is disclosed and where it breaks down is often what makes a precedents page useful to a client.

                ## Milestones
                1. The two or three operating metrics used in your sector named, with their definitions.
                2. Disclosure sources for each metric identified in recent filings.
                3. The metrics calculated for five deals in your library.
                4. A note on the situations where each metric misleads.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Sector operating metrics defined and calculated for five deals, with a written note on when each misleads."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask a senior in your group which operating metrics clients expect"
                - "Write definitions for each metric with its typical source"
                - "Calculate the metrics for five deals in your library"
                - "Record where each metric gives a misleading answer"
            - name: Financial institutions precedent multiples
              description: |-
                ## Purpose
                Banks and insurers are valued on price to book, price to tangible book and price to earnings because enterprise value has little meaning when debt is the raw material. Analysts moving into or covering financial institutions need to rebuild their precedent habits around these multiples and the regulatory capital that sits behind them.

                ## Milestones
                1. Price to book, price to tangible book and price to earnings calculated for five bank or insurer deals.
                2. Tangible book built from the balance sheet with intangibles removed.
                3. A note on why enterprise value multiples are not used for these targets.
                4. A financial institutions version of the template saved.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five financial institution deals with book and earnings multiples built from filings, in a separate template."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read your training material on valuing banks and insurers"
                - "Build tangible book value for one bank from its annual report"
                - "Calculate book and earnings multiples for five financial institution deals"
                - "Save a financial institutions version of your template"
            - name: Private target deals with thin disclosure
              description: |-
                ## Purpose
                Private targets often disclose a price but no financials, or neither, and a precedent list built only from public targets can miss most of a sector's deals. Learning where partial data hides, such as company registry accounts, buyer investor presentations and trade press, and how to label estimates, widens the list without weakening it.

                ## Milestones
                1. A list of the places private target data can be found in your main markets.
                2. Three private deals completed with sourced or clearly labelled estimated figures.
                3. An estimate flag and footnote used wherever a figure is not disclosed.
                4. A rule for when a deal without financials is listed with value only.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three private target deals completed with every estimate flagged and footnoted, and a written rule for value-only rows."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the registries and publications that cover private companies in your markets"
                - "Complete three private target rows from those sources"
                - "Flag and footnote every estimated figure"
                - "Check registries for newly filed accounts of private targets in your library @recurring(quarterly)"
            - name: Cash, stock and mixed consideration deals
              description: |-
                ## Purpose
                Stock-for-stock deals and mixed offers have a value that moves with the acquirer's share price, and collars or exchange ratio mechanics can change what was paid between announcement and closing. Learning to value consideration at announcement and to show the form of payment clearly matters because premiums in stock deals are read differently.

                ## Milestones
                1. A method for valuing share consideration at the announcement date from the exchange ratio.
                2. Mixed offers split into cash and share components per target share.
                3. Two deals with collars or caps worked through.
                4. A consideration form column and footnote added to the template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three share or mixed consideration deals valued at announcement with the consideration form shown in its own column."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Value one stock-for-stock offer at its announcement date"
                - "Split a mixed offer into cash and share components"
                - "Work through two deals with a collar or cap"
                - "Add a consideration form column to your template"
            - name: Reading the background of the merger section
              description: |-
                ## Purpose
                The background section of a merger proxy or offer document narrates the sale process: how many parties were contacted, how bids moved and why the board chose the winner. Reading these sections well tells you whether a deal was competitive, which is exactly the context a senior needs to judge whether its multiple is relevant.

                ## Milestones
                1. Five background sections read with the number of bidders and bid revisions noted.
                2. A process tag in your library: auction, negotiated or contested.
                3. A note on any deal where the process explains an unusual multiple.
                4. A short list of the phrases that signal a competitive process.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five background sections summarised and every deal in your library carries a process tag."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose five merger documents with a full background section"
                - "Note bidders, revisions and the board's stated reasons for each"
                - "Add a process tag column to your library"
                - "Write a short note where the process explains the multiple"
            - name: Relevance scoring for the long list
              description: |-
                ## Purpose
                Long lists of thirty deals get cut to eight in a meeting, and the cut is easier to defend when each deal has already been scored. A simple scoring grid for business similarity, size, geography, timing and buyer type turns relevance from an argument into a ranking you can show.

                ## Milestones
                1. Five scoring factors defined with a one-to-three scale for each.
                2. Weights agreed with the associate or VP for the current request.
                3. Every deal on the long list scored with a short reason.
                4. The short list taken from the top scores, with any override explained.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A long list scored on five factors with reasons, and a short list whose selection and overrides are documented."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Define five relevance factors and a one-to-three scale for each"
                - "Agree the weights with your associate on the next request"
                - "Score every deal on the long list with a reason"
                - "Record any deal kept or cut against its score"
            - name: Mean, median or a selected range
              description: |-
                ## Purpose
                Averages of a small, uneven set of deals can be dragged by one outlier, while a selected range relies on judgment that must be explained. Deciding in advance how your group presents the summary statistics, and when a reasoned range replaces the arithmetic, stops the debate recurring on every page.

                ## Milestones
                1. Mean, median, high and low shown for a sample table, with and without its outlier.
                2. A written view on when the median is preferred over the mean.
                3. Criteria for presenting a selected range instead of the statistics.
                4. The approach agreed with a senior and saved as a convention.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written convention on summary statistics and selected ranges, agreed with a senior and used on the next precedents page."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Calculate the statistics for a past table with and without its outlier"
                - "Write when you would use the median over the mean"
                - "Draft criteria for presenting a selected range"
                - "Agree the convention with your VP and save it"
            - name: Deal timing and the market cycle
              description: |-
                ## Purpose
                An acquisition agreed when sector trading multiples were high is not directly comparable to one agreed in a downturn. Recording the sector's trading multiple at each announcement date, and the premium of the deal multiple over it, lets you show seniors whether an old deal still says anything about today.

                ## Milestones
                1. A column recording the sector trading multiple at each deal's announcement.
                2. The deal multiple shown as a premium over that trading multiple.
                3. A note on which deals in the library were struck in unusual markets.
                4. A rule for the oldest deal date normally included.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every deal in your library has the sector trading multiple at announcement and a premium over it recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose a sector index or peer set to stand for trading multiples"
                - "Record its multiple at each deal's announcement date"
                - "Record the sector's current trading EV to EBITDA median @recurring(monthly:3)"
                - "Write a rule for the oldest deal date you include"
            - name: Strategic and sponsor buyer split
              description: |-
                ## Purpose
                Strategic buyers can often pay for synergies that financial sponsors cannot, and in some sectors the two groups pay consistently different multiples. Splitting the table by buyer type tells a seller which audience sets the top of the range and helps a senior frame the conversation with the client.

                ## Milestones
                1. A buyer type column with strategic, sponsor and sponsor-backed strategic.
                2. Summary statistics shown separately for each buyer type.
                3. A short note on whether the split shows a consistent gap in your sector.
                4. The split added as an optional view on the summary tab.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The summary tab can show statistics by buyer type, with a written note on the gap observed in your sector."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Tag every deal in your library by buyer type"
                - "Calculate statistics separately for each type"
                - "Write two sentences on what the split shows"
                - "Add the buyer type view to the summary tab"
            - name: Outlier rules for precedent tables
              description: |-
                ## Purpose
                One distressed sale at a low multiple or one trophy asset at a high one can move a small table's median. Written rules for when a deal is shown but excluded from the statistics, and how that is disclosed, protect you from being asked to remove inconvenient deals and from leaving in ones that distort the answer.

                ## Milestones
                1. A list of the situations that justify excluding a deal from statistics.
                2. A rule that excluded deals stay visible on the page, marked and footnoted.
                3. The rules tested against two past tables.
                4. The rules agreed with a senior.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written outlier rules, tested on two past tables and agreed with a senior, applied to the next page you build."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the situations where you have excluded deals before"
                - "Write a rule for marking and footnoting excluded deals"
                - "Test the rules on two past tables"
                - "Agree the rules with your VP"
            - name: Precedents page layout
              description: |-
                ## Purpose
                Seniors and clients read a precedents page in seconds: the range at the bottom, the most relevant deals near the top and the footnotes only if something looks odd. A clean layout with sorted rows, highlighted key deals and a clear summary block makes the page do its job without a verbal explanation.

                ## Milestones
                1. Rows sorted by a stated order, by date or by relevance.
                2. The most relevant deals marked consistently.
                3. A summary block showing the statistics and the selected range.
                4. The page formatted to your group's template and approved by an associate.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A precedents page in house format with sorted rows, marked key deals and a summary block, approved by an associate."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect three precedents pages your group has sent to clients"
                - "Choose a sort order and a way to mark key deals"
                - "Build a summary block for statistics and the selected range"
                - "Ask an associate to review the layout"
            - name: Implied value range from precedents
              description: |-
                ## Purpose
                The table only matters once its range is applied to the subject company to give an implied enterprise value, equity value and value per share. Building this step cleanly, with the subject's LTM figures and bridge items sourced, is what turns your precedents into the bar on the valuation summary the team presents.

                ## Milestones
                1. The selected multiple range applied to the subject's LTM EBITDA and revenue.
                2. The bridge from implied enterprise value to equity value and value per share built.
                3. The subject's figures sourced and dated in the same way as the precedent rows.
                4. The implied range handed to whoever owns the valuation summary, with a short note of the choices made.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An implied value range per share from precedents, with sourced inputs and a written note of the range choice, delivered to the deal team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the subject company's LTM figures and bridge items"
                - "Apply the selected multiple range to give implied enterprise values"
                - "Bridge to equity value and value per share"
                - "Write a three-line note explaining the range chosen"
            - name: First live precedent table on a deal
              description: |-
                ## Purpose
                Your first precedent table on a live mandate is where everything in the foundations is tested at once, under time pressure and with a senior reviewing every row. Treating it as a planned piece of work, with the criteria agreed, a checkpoint with the associate and a full tie-out, sets the standard people will expect from you.

                ## Milestones
                1. Screening criteria agreed with the associate before searching.
                2. A long list reviewed at a checkpoint before full data entry.
                3. Every row sourced, footnoted and tied out to its input.
                4. Reviewer comments logged and turned, with lessons added to your error log.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first live precedent table delivered with agreed criteria, a long list checkpoint and every reviewer comment logged."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Ask the associate for the criteria and the deadline in writing"
                - "Book a fifteen-minute long list checkpoint before full data entry"
                - "Tie out every summary figure to its input row before sending"
                - "Log the reviewer's comments in your error log"
            - name: Modelling test preparation with a precedents case
              description: |-
                ## Purpose
                Modelling tests for banking and private equity roles often hand you a target and a short list of deals and ask for an implied valuation in a fixed time. Practising timed precedent cases from public deals, with the bridge and premium steps automatic, means you spend the test on judgment rather than arithmetic.

                ## Milestones
                1. The test format confirmed with recruiters or people who have sat it.
                2. Four timed practice cases completed from public deal documents.
                3. Each case checked for errors, with time spent per step recorded.
                4. A final timed case completed inside the expected time limit.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Four timed practice cases completed and the last one finished inside the expected time with no arithmetic errors."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Ask the recruiter or past candidates what the test format is"
                - "Build a practice case from a public deal and three precedents"
                - "Complete four timed cases and record time per step"
                - "Run one final case in exam conditions"
            - name: Precedent technical questions for interviews
              description: |-
                ## Purpose
                Interviewers ask why precedent multiples are higher than comps, how you calculate a control premium and what makes a deal relevant, and a hesitant answer costs more than a wrong one. Drilling short spoken answers to twenty standard questions before a superday makes the precedent part of the technical round straightforward.

                ## Milestones
                1. Twenty precedent questions collected from interview guides and recent candidates.
                2. A written answer of three to five sentences for each.
                3. Every answer practised aloud and checked by a peer or mentor.
                4. Two mock interviews completed with precedent questions included.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Twenty written answers practised aloud and two mock interviews completed before the interview date."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect twenty precedent questions from guides and recent candidates"
                - "Write a short answer to each question"
                - "Answer two precedent questions aloud from memory @recurring(daily)"
                - "Book two mock interviews with a peer or mentor"
            - name: Defending each deal in a client discussion
              description: |-
                ## Purpose
                Clients often know deals in their sector better than the bank and will ask why one was left out or why another is relevant. A one-line crib sheet for every deal on the page, with the reason it is there and any caveat, lets the senior answer at once and makes you useful in the room.

                ## Milestones
                1. A crib sheet with one line per deal: why it is included and its main caveat.
                2. A list of notable deals excluded, each with the reason.
                3. Likely client questions anticipated and answered in a sentence each.
                4. The crib sheet given to the senior before the meeting.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A crib sheet covering every included deal and notable excluded deals is delivered to the senior before the client meeting."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one line per included deal with its reason and caveat"
                - "List notable excluded deals and why they were cut"
                - "Draft answers to the five questions the client is most likely to ask"
                - "Send the crib sheet to the senior the day before the meeting"
            - name: Year-end sector transaction review
              description: |-
                ## Purpose
                Once a year, looking back at every public deal in your sector shows how multiples, premiums, buyer mix and deal volume moved, which is exactly the content of market update pages and client conversations in the new year. A yearly review from your own library is faster and better sourced than starting from a database export.

                ## Milestones
                1. All of the year's completed and announced public deals reconciled in the library.
                2. Year-on-year changes in median multiples, premiums and buyer mix calculated.
                3. Three observations written up in plain sentences.
                4. The review filed with the year's benchmarks.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A yearly review with medians, premiums, buyer mix and three written observations, filed each year from your library."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Reconcile the year's deals in your library against a database export"
                - "Write the year's sector transaction review from the library @recurring(yearly)"
                - "Ask the agent to draft three plain observations from the year-on-year figures"
                - "File the review with the year's benchmarks"
            - name: Student self-study precedent table
              description: |-
                ## Purpose
                Students rarely get to build a real precedent table before an internship, yet interviewers notice who has. Picking a sector, collecting ten public deals from filings and building the full table yourself gives you a talking point, a test of the method and a piece of work you can explain line by line.

                ## Milestones
                1. A sector chosen with at least ten public deals in the last few years.
                2. Ten deals bridged from offer documents with LTM multiples and premiums.
                3. A one-page summary with a selected range and a paragraph explaining it.
                4. The table reviewed by a mentor, lecturer or finance society member.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A ten-deal precedent table built from public filings with a one-page summary, reviewed by someone with banking or valuation experience."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a sector with at least ten recent public deals"
                - "Find the offer documents for the first three deals"
                - "Add one new deal to your self-study table @recurring(weekly:sat)"
                - "Ask a mentor or lecturer to review the finished table"
            - name: Summer intern precedent assignment
              description: |-
                ## Purpose
                Interns are often given a precedents task in the first fortnight because it is self-contained and shows how carefully someone works. Arriving with the method rehearsed, asking the right questions at the start and checking the table before sending turns that first assignment into a reference point for the rest of the summer.

                ## Milestones
                1. Questions ready for the briefing: criteria, format, deadline and who reviews.
                2. The firm's template and databases set up on the first day of access.
                3. The table checked against your own checklist before it is sent.
                4. Feedback requested and written down within a day of sending.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first precedent assignment delivered on time after a self-check, with written feedback recorded within a day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the four questions you will ask at the assignment briefing"
                - "Set up database access and the firm's template on day one"
                - "Run your checklist on the table before sending"
                - "Ask the reviewer for feedback and write it down"
            - name: New analyst precedents competence plan
              description: |-
                ## Purpose
                New analysts in their first three months are judged quickly on whether their numbers can be trusted, and precedents are one of the first tests. A ninety-day plan that moves from method to independent tables, with a weekly note of what was practised, makes progress visible to you and to your staffer.

                ## Milestones
                1. A ninety-day plan with targets for days thirty, sixty and ninety.
                2. One table built with close supervision by day thirty.
                3. One table built independently and sent with few comments by day ninety.
                4. A review conversation with your associate at day ninety.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ninety-day plan with dated targets, weekly practice notes and an associate review held at day ninety."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write targets for days thirty, sixty and ninety"
                - "Ask your associate which upcoming request you could take on"
                - "Note one precedents skill you practised this week @recurring(weekly:mon)"
                - "Book a ninety-day review with your associate"
            - name: Associate review of an analyst's precedent table
              description: |-
                ## Purpose
                Reviewing a junior's table is a different skill from building one: you need to find the important errors fast and explain them so they do not recur. A review routine that samples rows against filings, checks the bridge logic and reads the footnotes first gets through a table in minutes and leaves the analyst better.

                ## Milestones
                1. A review routine of no more than ten checks, ordered by risk.
                2. Two or three rows sampled against primary documents on every review.
                3. Comments written so each states the problem and the rule.
                4. A short debrief with the analyst after each review.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A ten-check review routine used on three analyst tables, each followed by a debrief with the analyst."
                cadence: rolling
              tasks:
                - "Write a review routine of ten checks ordered by risk"
                - "Sample three rows against filings on the next table you review"
                - "Write each comment with the problem and the rule behind it"
                - "Hold a ten-minute debrief with the analyst after the review"
            - name: Rebuilding the library after changing sector
              description: |-
                ## Purpose
                Changing coverage group means your old precedent library is suddenly less useful and the new sector has its own metrics, buyers and disclosure habits. Rebuilding a core list of the sector's twenty most cited public deals in the first two months gives you the base every new request will draw on.

                ## Milestones
                1. The new sector's operating metrics and usual multiples confirmed with a senior.
                2. The twenty deals cited most often in the group's recent pages listed.
                3. All twenty deals rebuilt in your template from primary documents.
                4. Sector benchmarks set up from the rebuilt deals.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twenty core deals for the new sector rebuilt from primary documents and first benchmarks calculated within the deadline."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask a senior which metrics and deals the new sector relies on"
                - "List the twenty deals cited most often in recent group pages"
                - "Rebuild the deals from primary documents in your template"
                - "Set up subsector benchmarks from the rebuilt deals"
            - name: Precedents in small and Caribbean markets
              description: |-
                ## Purpose
                Small markets such as the Caribbean may see only a handful of comparable deals in a decade, many between related groups or involving state shareholdings. Widening the set to regional and emerging market deals, while stating clearly why they are relevant and where local factors differ, gives a client a range that is both honest and usable.

                ## Milestones
                1. Local deals collected from regional stock exchange announcements and company reports.
                2. A wider set of regional and emerging market deals added with a relevance note for each.
                3. Related party and state deals flagged and treated separately.
                4. A paragraph explaining the limits of the evidence on the page.

                ## Notes
                Local exchanges publish material announcements and circulars. Check each exchange's own site for what was filed.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A precedent set for a small market with local and wider deals separated, related party deals flagged and a written limits paragraph."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the stock exchanges and regulators that publish deal announcements in your region"
                - "Collect local deals from the last ten years"
                - "Scan regional exchange announcements for new deals @recurring(monthly:16)"
                - "Write a paragraph on the limits of the local evidence"
            - name: Premiums paid study across a market
              description: |-
                ## Purpose
                A study of premiums paid across all public takeovers in a market over several years answers questions a sector table cannot: how premiums differ by deal size, consideration form and buyer type. Building and maintaining one from public data is a specialist resource seniors draw on when advising listed companies.

                ## Milestones
                1. The study's scope defined: market, date range, size floor and exclusions.
                2. Premiums calculated on consistent windows for every deal in scope.
                3. Results cut by size band, consideration form and buyer type.
                4. A method note explaining the unaffected date rule and exclusions.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A premiums dataset covering every in-scope takeover with consistent windows, cuts by three factors and a method note."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Write the scope for the study in one paragraph"
                - "Export the list of in-scope takeovers and check it against exchange records"
                - "Calculate premiums on consistent windows for each deal"
                - "Add the month's completed takeovers to the premiums dataset @recurring(monthly:28)"
            - name: Distressed sale precedents
              description: |-
                ## Purpose
                Distressed acquisitions, pre-pack sales and purchases out of insolvency often show EBITDA multiples that are negative or meaningless. Building a separate set that uses revenue, asset value or recovery measures, and records the seller's situation, gives a fair view of what buyers pay when the seller has little choice.

                ## Milestones
                1. Criteria for what counts as a distressed sale in your table.
                2. Alternative measures chosen: EV to revenue, value to assets or a recovery measure.
                3. Five distressed deals built with the seller's situation described.
                4. A rule that distressed deals sit apart from normal control deals.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five distressed deals in a separate set with alternative measures and the seller's situation recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write criteria for treating a deal as a distressed sale"
                - "Choose the alternative measures for your sector"
                - "Build five distressed deals from court and company filings"
                - "Keep the distressed set on its own tab"
            - name: Synergies paid in precedent deals
              description: |-
                ## Purpose
                Synergies announced by acquirers show how much of the premium was justified by cost or revenue gains, and comparing the premium with the capitalised value of synergies shows how much went to the seller. This analysis supports seniors arguing for a higher price on a sale or testing a buyer client's bid.

                ## Milestones
                1. Announced synergies collected for ten public deals with timing and cost to achieve.
                2. Synergies capitalised on a stated, simple method and footnoted.
                3. The premium paid compared with the capitalised synergies for each deal.
                4. A short note on what share of synergies sellers captured in your sector.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten deals with announced synergies capitalised and compared with the premium paid, with a written conclusion for the sector."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the synergies announced for ten public deals"
                - "Agree a simple capitalisation method with your associate"
                - "Compare each premium with the capitalised synergies"
                - "Write a note on what share of the synergies sellers captured"
            - name: Lease accounting break in precedent multiples
              description: |-
                ## Purpose
                Lease accounting changes such as IFRS 16 moved most lease costs out of operating expenses, raising reported EBITDA and net debt, so deals before and after the change are not like for like. Adjusting older or newer deals onto one basis, and saying which, matters most in retail, airlines, healthcare and any sector with heavy lease commitments.

                ## Milestones
                1. The accounting standard each target reported under recorded in the library.
                2. A chosen basis, before or after lease capitalisation, for EBITDA and net debt.
                3. Deals on the other basis adjusted where disclosure allows, or flagged where it does not.
                4. A standard footnote explaining the basis used.

                ## Notes
                US and international standards treat leases differently in the income statement. Check the standard for each target before adjusting.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every deal in a lease-heavy table is on one stated basis or flagged, with a standard footnote applied."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Record the accounting standard and lease basis for each deal in the library"
                - "Choose the basis your group uses for EBITDA and net debt"
                - "Adjust or flag the deals on the other basis"
                - "Add the lease basis footnote to your library"
---

# Precedent Transactions Analysis

This area is for analysts, associates and students who build precedent transaction tables and need every number in them to survive a senior's markup and a client's question. It starts with the foundations (the method, a standard template, a source hierarchy, screening criteria, the deal value bridge, LTM at announcement and the footnote log), then the machinery that keeps a personal library of public deals current, the harder skills such as control premiums, earn-outs, minority stakes and sector metrics, the judgment calls on relevance, outliers and the range, dated events from a first live table to a superday, situations for interns, new analysts, reviewers and small markets, and finally specialist work on premiums studies, distressed deals, synergies and lease accounting.

What repeats is a weekly filing read and error log review, a monthly capture of newly announced deals, a peer cross-check and checklist refresh, quarterly library and benchmark updates with a confidentiality audit, and a yearly sector transaction review. The Operational checklist, Metrics log, Reading queue and Development plan templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
