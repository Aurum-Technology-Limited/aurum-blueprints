---
id: real-estate-development.reit-financial-analysis
name: REIT Financial Analysis
description: "A working REIT analyst's kit: FFO and AFFO you can reconcile, a NAV model with sourced cap rates, balance sheet scorecards, sector comparisons and an earnings season routine that holds up."
category: business
version: 1.0.0
tags: [real-estate-development, reit-financial-analysis, knowledge-worker, ffo, affo, net-asset-value, listed-property, equity-research]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - board-meeting
    - onboarding-30-60-90
    - one-on-one
    - risk-register
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: REIT Financial Analysis
          description: "Analysing listed REITs as an analyst: FFO and AFFO, net asset value, occupancy and lease data, balance sheet strength and comparing property sectors."
          projects:
            - name: REIT filing and disclosure library
              description: |-
                ## Purpose
                REIT analysis runs on documents that sit in different places: annual and quarterly reports, supplemental packages, investor presentations, debt prospectuses and proxy statements. A library with one folder per company and a fixed naming rule means that when results land at 7am you open the right supplemental in seconds instead of hunting the investor relations site.

                ## Milestones
                1. One folder per covered REIT, each with the same subfolders for filings, supplementals, presentations, debt and governance.
                2. The last eight quarters of supplementals and the last three annual reports saved for every company.
                3. A file naming rule of company, period and document type applied to every file.
                4. Investor relations email alerts set up for every company in coverage.

                ## Notes
                Save the supplemental as published, never only your extracted numbers. Companies restate definitions, and the original is the only proof of what was reported at the time.

                Before you start: this plan is general information to help you organise your own affairs. It is not legal advice. Rules differ between countries and change often, so check decisions that matter with a qualified lawyer or the official authority in the country concerned.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every covered REIT has a folder holding eight quarters of supplementals and three annual reports, named to one rule, with IR alerts active."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the folder structure and file naming rule on one page"
                - "Download the last eight supplementals for your first three REITs"
                - "Sign up for investor relations email alerts for every covered company"
                - "Save the latest debt prospectus and proxy statement for each REIT"
            - name: Coverage universe and property sector map
              description: |-
                ## Purpose
                Before comparing anything you need to know who sits in which bucket: office, retail, industrial, residential, healthcare, self-storage, data centres, towers, net lease, diversified and mortgage REITs. A map of the universe by sector, size, geography and listing venue shows which peer groups are deep enough to compare and which companies are really hybrids that need their own treatment.

                ## Milestones
                1. A list of every REIT in your market or mandate with sector, market value, geography and index membership.
                2. Each company assigned one primary sector and, where relevant, a secondary one.
                3. Peer groups of at least four companies defined for each sector you cover.
                4. Hybrids and outliers flagged with a sentence on why they do not fit a peer group cleanly.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated universe table assigns every REIT in scope to a sector and peer group, with hybrids flagged and explained."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the constituent list of the main REIT index for your market"
                - "Assign a primary sector to each company from its own segment reporting"
                - "Group the companies into peer sets of four or more by sector"
                - "Write one line on each company that does not fit a single sector"
            - name: FFO reconciliation from net income
              description: |-
                ## Purpose
                Funds from operations starts from net income and adds back real estate depreciation, gains and losses on property sales and impairments, but companies apply the industry definition with their own adjustments on top. Rebuilding reported FFO from the income statement for one REIT, line by line, is how you learn which adjustments are standard and which ones management has chosen to make the number look better.

                ## Milestones
                1. The standard industry FFO definition for your market written out in your own words.
                2. Reported FFO for one REIT rebuilt from net income for the last four quarters.
                3. Every gap between your figure and the reported figure traced to a named adjustment.
                4. Company-specific adjustments listed separately as core or adjusted FFO items.

                ## Notes
                Industry bodies publish the FFO definition, for example Nareit in the United States and EPRA earnings in Europe. Use the body's current wording, not a summary from memory.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Four quarters of reported FFO for one REIT are rebuilt from net income, with every difference traced to a named adjustment."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download the current FFO definition from your market's REIT industry body"
                - "Rebuild one quarter of FFO from net income for a REIT you know well"
                - "Trace each difference to the company's own reconciliation table"
                - "Repeat the rebuild for the other three quarters and note any drift"
            - name: House AFFO definition for every REIT
              description: |-
                ## Purpose
                AFFO has no standard definition, so two companies with the same property cash flow can report very different numbers depending on how they treat straight-line rent, maintenance capex, leasing costs and stock compensation. Writing one house definition and applying it to every REIT, whatever the company reports, is what makes payout ratios and AFFO multiples comparable across a peer group.

                ## Milestones
                1. A written AFFO definition listing each deduction from FFO and the source line for it.
                2. A rule for estimating maintenance capex where the company does not disclose it.
                3. House AFFO calculated for every REIT in one peer group for the last four quarters.
                4. A table showing reported AFFO, house AFFO and the gap for each company.

                ## Notes
                Treat recurring leasing commissions and tenant improvements as real costs. Companies that leave them out of AFFO usually have the biggest gap to house numbers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written house AFFO definition has been applied to one full peer group, with a reported versus house AFFO table for four quarters."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every deduction your house AFFO makes from FFO"
                - "Write the fallback rule for undisclosed maintenance capex"
                - "Calculate house AFFO for one peer group over four quarters"
                - "Tabulate reported against house AFFO and flag gaps above five percent"
            - name: Standard REIT data template
              description: |-
                ## Purpose
                If every company's numbers go into a differently shaped spreadsheet, peer comparison becomes a reformatting exercise every quarter. A single template with the same rows for income, FFO bridge, portfolio statistics, leasing, debt and share count lets you drop in a new REIT in an afternoon and roll every model forward the same way.

                ## Milestones
                1. One template with fixed tabs for income, FFO and AFFO bridge, portfolio, leasing, debt and capital.
                2. Every input cell sourced to a page or table in the filing, in a source column.
                3. Three REITs populated in the template for the last eight quarters.
                4. A check row on each tab that flags when totals do not tie to the reported figures.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three REITs are populated in one shared template for eight quarters, with sourced inputs and passing check rows."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Sketch the tab list and row headings on one sheet"
                - "Add a source column beside every input row"
                - "Populate the template for your most familiar REIT first"
                - "Build tie-out checks against reported FFO and total debt"
            - name: Supplemental package reading checklist
              description: |-
                ## Purpose
                Supplementals can run to sixty pages, and the useful signals hide in footnotes: a change in the same-store pool, a new definition of occupancy, a tenant moved off the watchlist. A checklist of what to read and in what order turns the first hour after results from skimming into a repeatable pass that catches definition changes before they reach your model.

                ## Milestones
                1. A checklist of at least 25 items covering guidance, same-store results, leasing, development, debt and definitions.
                2. A marked order of reading for the first 30 minutes after a release.
                3. The checklist tested on two past supplementals and items added for what it missed.
                4. A short list of definition changes found in the last two years for your coverage.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checklist of 25 or more items, tested on two past supplementals, sits in the coverage library with a reading order."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the ten numbers you check first after any REIT result"
                - "Add footnote and definition checks for same-store pool and occupancy"
                - "Run the checklist on two supplementals from last year"
                - "Store the checklist in the library beside the data template"
            - name: NAV model skeleton with sourced cap rates
              description: |-
                ## Purpose
                Net asset value is the listed analyst's bridge to the private market: forward NOI by segment capitalised at a market cap rate, plus land and development at cost or value, less debt and other liabilities. Building one clean NAV skeleton with a cited cap rate for each segment means you can say what the share price implies and defend the private market value you set against it.

                ## Milestones
                1. A NAV layout with segment NOI, cap rate, gross asset value, other assets, debt and share count.
                2. A forward NOI figure per segment tied to the latest reported quarter.
                3. Each segment cap rate cited to a transaction, an appraisal or a broker survey.
                4. NAV per share calculated for one REIT, with the premium or discount to the share price.

                ## Notes
                Keep the cap rate source and date beside the number. A NAV with unsourced cap rates is an opinion dressed as a model.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A NAV per share for one REIT is calculated from segment NOI and cited cap rates, with the premium or discount stated."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Lay out the NAV rows from segment NOI down to NAV per share"
                - "Annualise the latest quarter's NOI by segment with known adjustments"
                - "Find one cited cap rate source for each segment"
                - "Calculate the premium or discount to the current share price"
            - name: Balance sheet strength scorecard
              description: |-
                ## Purpose
                REITs pay out most of their earnings, so growth and survival depend on access to debt and equity, and the balance sheet decides who can buy when prices fall. A scorecard of net debt to EBITDA, loan to value, interest cover, fixed rate share, unencumbered assets, weighted maturity and liquidity, scored the same way for every company, shows quickly who is exposed when rates rise.

                ## Milestones
                1. A list of eight to ten balance sheet measures with a written formula for each.
                2. Thresholds set for strong, adequate and stretched on every measure.
                3. Every REIT in one peer group scored from the latest filings.
                4. Credit ratings and covenant levels recorded beside each score where disclosed.
                5. The scorecard refreshed after each quarter's results.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One peer group is scored on at least eight written balance sheet measures, with thresholds, ratings and covenant levels recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the formula for each balance sheet measure on one tab"
                - "Set strong, adequate and stretched thresholds for every measure"
                - "Score one peer group from the latest quarter's filings"
                - "Refresh the scores after each reporting season @recurring(quarterly)"
            - name: First peer comparison table for one sector
              description: |-
                ## Purpose
                Most REIT questions are relative: is this company cheap against its peers, and is the gap earned by lower growth or a weaker balance sheet. A single table for one sector, with multiples, growth, payout, gearing and portfolio quality side by side, is the first thing a portfolio manager will ask for and the frame for every note you write.

                ## Milestones
                1. One sector chosen with at least five listed peers.
                2. P/FFO, P/AFFO, implied cap rate, premium or discount to NAV and dividend yield shown for each.
                3. Same-store NOI growth, payout ratio, net debt to EBITDA and occupancy alongside.
                4. Peer averages and medians calculated, with each company's gap to the median.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table for one sector of five or more peers shows multiples, growth, payout and gearing, with gaps to the median."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the sector with the deepest peer group in your coverage"
                - "Pull share prices and house AFFO into one comparison tab"
                - "Add growth, payout and gearing columns from the data template"
                - "Calculate medians and highlight the biggest gaps in both directions"
            - name: Quarterly earnings season routine
              description: |-
                ## Purpose
                Results for a whole sector often land inside two weeks, and an analyst without a routine ends the season with half-updated models and notes that came out a day late. A fixed sequence of calendar, preview, first read, call, model update and note for every company makes the busiest weeks of the quarter predictable.

                ## Milestones
                1. A reporting calendar with every covered company's release and call date.
                2. A same-day first read template filled for each company within hours of release.
                3. Every model updated within three working days of the release.
                4. A season wrap note comparing the peer group's results and guidance changes.

                ## Notes
                Write the first read before the call, then mark what the call changed. It keeps you honest about what you actually expected.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter every covered REIT has a first read, an updated model within three working days and a place in the season wrap note."
                cadence: cyclic
              tasks:
                - "Put every company's release and call date into one calendar @recurring(quarterly)"
                - "Prepare the first read template for each company the week before"
                - "Update each model within three working days of its release"
                - "Write the season wrap note when the last company has reported"
            - name: Earnings call and guidance log
              description: |-
                ## Purpose
                Management teams repeat themselves, revise guidance and sometimes quietly drop a target they made a fuss about a year earlier. A running log of what each team said on guidance, leasing, acquisitions, development and capital, with the date, lets you hold them to it and spot when the tone changes before the numbers do.

                ## Milestones
                1. A log with columns for company, date, topic, statement and your note.
                2. The last four calls for each covered REIT entered from transcripts.
                3. Guidance ranges for FFO, same-store NOI and capital spend tracked quarter by quarter.
                4. A flag on every statement later contradicted by results.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarters of calls for each covered REIT are logged with guidance ranges and flags on contradicted statements."
                cadence: rolling
              tasks:
                - "Set up the call log with company, date, topic and statement columns"
                - "Enter the last four calls for your largest holding from transcripts"
                - "Add each new call's guidance changes within a day @recurring(quarterly)"
                - "Ask the agent to summarise guidance changes across four calls for one REIT"
            - name: Monthly REIT valuation multiples refresh
              description: |-
                ## Purpose
                Share prices move every day but the useful question is whether the relative picture has shifted. Refreshing P/FFO, P/AFFO, implied cap rate, NAV premium or discount and dividend yield for the whole coverage once a month, and keeping the history, shows when a sector or company has moved outside its usual range.

                ## Milestones
                1. A multiples sheet covering every REIT in scope, refreshed from month-end prices.
                2. At least twelve months of history kept for each multiple.
                3. A ten-year or longest available range noted for each sector's average multiple.
                4. Companies outside one standard deviation of their own history flagged each month.

                ## Notes
                Start from the **Metrics log** template. Use consensus or house estimates consistently, and note which one each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive month-end multiples snapshots exist for the full coverage, with outliers flagged each month."
                cadence: rolling
              tasks:
                - "Create the multiples sheet with a dated column per month"
                - "Pull month-end prices and refresh every multiple @recurring(monthly:8)"
                - "Flag companies outside their own historical range"
                - "Write two lines on what moved most this month"
            - name: Debt maturity and refinancing watch
              description: |-
                ## Purpose
                Picture a REIT with a cheap 3 percent bond maturing next year faces a jump in interest cost that consensus FFO may not yet show. Tracking every covered company's maturities, coupons and likely refinancing rate quarter by quarter shows where earnings will be squeezed and who may need to sell assets or issue equity.

                ## Milestones
                1. A maturity ladder for each REIT showing debt due in each of the next five years.
                2. The weighted average coupon on maturing debt beside an estimate of today's refinancing rate.
                3. An estimated FFO per share impact of refinancing for the next two years.
                4. Companies with more than 20 percent of debt maturing within two years flagged.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every covered REIT has a five-year maturity ladder and an estimated two-year refinancing impact on FFO per share, refreshed each quarter."
                cadence: rolling
              tasks:
                - "Build a maturity ladder from the debt note for your largest holding"
                - "Estimate today's refinancing rate for each company's debt type"
                - "Calculate the FFO per share impact of refinancing over two years"
                - "Roll the ladders forward after each quarter's filings @recurring(quarterly)"
            - name: Private market transaction evidence log
              description: |-
                ## Purpose
                Your NAV is only as current as the cap rates in it, and appraisal-based figures lag the market by months. A log of reported property transactions by sector and region, with price, cap rate, buyer type and date, gives you evidence to move NAV cap rates before the companies' own valuations catch up.

                ## Milestones
                1. A log with sector, region, price, cap rate, buyer, seller and date columns.
                2. At least five transactions per covered sector entered from the last year.
                3. A median cap rate by sector and quarter calculated from the log.
                4. NAV cap rates compared with the log's medians and any gap above 25 basis points explained.

                ## Notes
                Start from the **Metrics log** template. Reported cap rates mix in-place and forward NOI, so record which one the source used.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log holds at least five dated transactions per covered sector, and NAV cap rates are reconciled to its medians."
                cadence: rolling
              tasks:
                - "Set up the transaction log with a column for in-place or forward NOI"
                - "Enter five recent transactions for each sector you cover"
                - "Add new deals from broker reports and press releases @recurring(monthly:15)"
                - "Compare sector medians with your NAV cap rates"
            - name: Interest rate and credit spread monitor
              description: |-
                ## Purpose
                REIT shares often trade on government bond yields and credit spreads before they trade on property news. A short weekly check of the ten-year yield, REIT bond spreads and the sector's dividend yield spread to bonds keeps you aware of the backdrop every discussion with a portfolio manager starts from.

                ## Milestones
                1. A sheet with weekly ten-year government yield, investment grade REIT spreads and sector dividend yields.
                2. A year of weekly history backfilled.
                3. The spread between REIT dividend yields and bond yields charted by sector.
                4. A one-line weekly note of any move larger than 15 basis points.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A year of weekly rate and spread data is held and a one-line note is written for every week with a move above 15 basis points."
                cadence: rolling
              tasks:
                - "Choose the bond and spread series you will track"
                - "Backfill one year of weekly data into the monitor"
                - "Record yields and spreads every Monday morning @recurring(weekly:mon)"
                - "Chart the dividend yield spread to bonds by sector"
            - name: Capital raises and corporate actions tracker
              description: |-
                ## Purpose
                Equity issuance below NAV, at-the-market programmes, buybacks, asset sales and dividend changes tell you what management really thinks the shares are worth. Logging every capital action across coverage, with the price against your NAV, builds a record of which teams create value per share and which ones grow for its own sake.

                ## Milestones
                1. A tracker with company, date, action type, size, price and price as a share of NAV.
                2. Two years of capital actions entered for every covered REIT.
                3. A per-company count of issuance above and below NAV.
                4. A short note on each management team's capital allocation record.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two years of capital actions are logged for every covered REIT, each priced against NAV, with a written note per management team."
                cadence: rolling
              tasks:
                - "Set up the tracker with price as a share of NAV"
                - "Enter two years of issuance, buybacks and asset sales from filings"
                - "Log new capital actions from press releases @recurring(monthly:22)"
                - "Write a capital allocation note for each management team"
            - name: Model housekeeping and version control
              description: |-
                ## Purpose
                Models grow by accretion: a hard-coded override from last year's results, a share count nobody updated after an issue, a broken link to the debt tab. A monthly housekeeping pass with a checklist and dated versions stops small errors compounding into a wrong number in a published note.

                ## Milestones
                1. A housekeeping checklist covering share count, hard codes, links, check rows and date stamps.
                2. Every model saved with a dated version and a change note.
                3. Hard-coded overrides listed on a tab with the reason for each.
                4. No model in coverage older than one quarter's actuals.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every covered model carries a dated version, a change note and an override tab, and none is more than one quarter behind actuals."
                cadence: rolling
              tasks:
                - "Write a ten-line housekeeping checklist for every model"
                - "Add an override tab to your three largest models"
                - "Run the housekeeping checklist on every model @recurring(monthly:27)"
                - "Archive superseded versions with a dated change note"
            - name: Dividend coverage and payout tracker
              description: |-
                ## Purpose
                REITs must distribute most of their taxable income, but the dividend is paid from cash, and a payout above AFFO for several quarters usually ends in a cut. Tracking dividends against house AFFO for every company, and noting retained cash after dividends, shows who funds growth internally and whose dividend depends on asset sales or new capital.

                ## Milestones
                1. Dividend per share and house AFFO per share tracked quarterly for every covered REIT.
                2. Payout ratio on house AFFO calculated for each of the last eight quarters.
                3. Retained cash after dividends estimated for the last full year.
                4. Companies paying above 100 percent of house AFFO for two quarters flagged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight quarters of payout on house AFFO are tracked for every covered REIT, with sustained payouts above 100 percent flagged."
                cadence: rolling
              tasks:
                - "Pull eight quarters of dividends per share for each REIT"
                - "Calculate payout on house AFFO rather than reported AFFO"
                - "Update payout and retained cash after results @recurring(quarterly)"
                - "Flag any company paying out more than it earns for two quarters"
            - name: Yearly coverage and thesis review
              description: |-
                ## Purpose
                Theses go stale quietly: the development pipeline that was the reason to own a company is finished, or a sector you ignored has become a third of the index. A yearly review of every covered REIT's thesis, the coverage list itself and the peer groups keeps your time spent on the companies and questions that matter now.

                ## Milestones
                1. A one-paragraph thesis for every covered REIT, rewritten from scratch rather than edited.
                2. Each thesis marked as intact, changed or broken against last year's version.
                3. Coverage additions and drops agreed with your manager or team.
                4. Peer groups and the universe map updated for listings, mergers and delistings.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every covered REIT has a rewritten thesis marked intact, changed or broken, and coverage changes are agreed and recorded."
                cadence: cyclic
              tasks:
                - "Book a half day for the coverage review @recurring(yearly)"
                - "Rewrite each company's thesis without looking at last year's"
                - "Compare old and new theses and mark each one"
                - "Agree coverage additions and drops with your manager"
            - name: REIT accounting quirks that move the numbers
              description: |-
                ## Purpose
                Straight-line rent, above and below market lease amortisation, capitalised interest on development, fair value against cost accounting and lease incentive treatment can each shift reported earnings by several percent. Learning where each appears in the accounts, and how it flows through FFO and AFFO, is what lets you explain a company's numbers rather than just copy them.

                ## Milestones
                1. A one-page explainer for each of six accounting items, with where it appears in the filings.
                2. Each item located in the accounts of two covered REITs with the amounts noted.
                3. The effect of each item on FFO and on house AFFO written down.
                4. Differences between fair value and cost accounting regimes summarised for your markets.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six accounting items are explained on one page each and located with amounts in two covered REITs' accounts."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the six accounting items you most often see in REIT reconciliations"
                - "Find straight-line rent and lease amortisation in one REIT's cash flow statement"
                - "Locate capitalised interest in a developer REIT's notes"
                - "Write the FFO and AFFO effect of each item in one line"
            - name: Same-store NOI definitions and pitfalls
              description: |-
                ## Purpose
                Same-store NOI growth is the cleanest read on organic performance, until a company changes which properties are in the pool, moves redevelopments out or adds lease termination fees. Learning the definitions company by company, and how to rebuild a like-for-like figure, stops you rewarding a team for a flattering pool selection.

                ## Milestones
                1. Each covered REIT's same-store pool definition copied from its filings.
                2. Pool size as a share of total NOI recorded for each company.
                3. Pool changes over the last four quarters noted with their effect on growth.
                4. A rebuilt like-for-like growth figure for one company that changed its pool.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Pool definitions and pool share of NOI are recorded for every covered REIT, with one rebuilt like-for-like figure."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Copy the same-store pool definition from each covered REIT's supplemental"
                - "Record the pool's share of total NOI for each company"
                - "Find one company that changed its pool in the last year"
                - "Rebuild that company's growth on the old pool definition"
            - name: Lease data, WALT and re-leasing spreads
              description: |-
                ## Purpose
                Lease expiry profiles, weighted average lease term, re-leasing spreads and mark-to-market of in-place rents tell you how much future growth is already contracted and how much depends on the market. Learning to read the leasing tables in a supplemental, and the gaps in what companies choose to disclose, is the core skill behind any rent growth forecast.

                ## Milestones
                1. A note on how each covered REIT defines WALT, occupancy and re-leasing spread.
                2. Lease expiries for the next five years tabulated by company as a share of rent.
                3. Re-leasing spreads for the last eight quarters, split cash and straight-line where disclosed.
                4. An estimated mark-to-market on in-place rents for one company, with the sources used.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five-year expiry tables and eight quarters of re-leasing spreads are held for every covered REIT, with one mark-to-market estimate."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Note how each company defines occupancy, leased and committed"
                - "Tabulate five years of lease expiries by share of rent"
                - "Split re-leasing spreads into cash and straight-line where disclosed"
                - "Estimate mark-to-market on in-place rents for one company"
            - name: Implied cap rate from the share price
              description: |-
                ## Purpose
                The implied cap rate turns a share price into the language of property: forward NOI divided by the enterprise value less non-income assets. Learning to calculate it consistently lets you say whether the market is pricing a portfolio above or below where similar buildings trade privately, which is often the most useful single number in a REIT discussion.

                ## Milestones
                1. A written formula for implied cap rate, including treatment of development, land and joint ventures.
                2. Implied cap rates calculated for one peer group from current prices.
                3. Each company's implied cap rate compared with your NAV cap rate and private transaction medians.
                4. A short explanation of the three largest gaps.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Implied cap rates for one peer group are calculated to a written formula and compared with NAV and transaction cap rates."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the implied cap rate formula with your treatment of non-income assets"
                - "Calculate implied cap rates for one peer group at today's prices"
                - "Set them beside your NAV and transaction log cap rates"
                - "Explain the three biggest gaps in a short paragraph"
            - name: Development pipelines and yield on cost
              description: |-
                ## Purpose
                Development can add value per share when the yield on cost sits well above market cap rates, but it ties up capital, carries capitalised interest and can mask weak earnings. Learning to read a REIT's development schedule, track spend to complete and compare stabilised yields with what was promised tells you how much of the growth story is real.

                ## Milestones
                1. The development schedule for every developer REIT in coverage tabulated by project.
                2. Total cost, spend to date, spend to complete and target yield recorded per project.
                3. Spend to complete compared with available liquidity for each company.
                4. Delivered projects' achieved yields compared with the original targets.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Development schedules are tabulated for every developer REIT, with spend to complete against liquidity and achieved against target yields."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Tabulate one company's development schedule by project"
                - "Calculate spend to complete against its undrawn credit and cash"
                - "Find three delivered projects and their original target yields"
                - "Compare achieved yields with the targets and note the gap"
            - name: Joint ventures and unconsolidated interests
              description: |-
                ## Purpose
                Many REITs own part of their portfolio through joint ventures with pension funds or sovereign investors, and the accounts may show these as one line or consolidate them with a minority interest. Learning to pull out the REIT's share of JV NOI, debt and fees is necessary for a NAV and a gearing figure that reflect what shareholders actually own.

                ## Milestones
                1. Each covered REIT's JV and unconsolidated interests listed with ownership shares.
                2. The REIT's pro rata share of JV NOI and debt calculated for the latest quarter.
                3. Fees earned from JV partners separated from property income.
                4. NAV and net debt to EBITDA restated on a pro rata basis for one company.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Pro rata JV NOI and debt are calculated for every covered REIT that uses JVs, and one NAV is restated on that basis."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every JV and ownership share from one REIT's notes"
                - "Calculate the pro rata share of JV NOI and debt"
                - "Separate fee income from JV partners in the income statement"
                - "Restate NAV and gearing on a pro rata basis"
            - name: REIT regimes and distribution rules by market
              description: |-
                ## Purpose
                REIT status rests on rules about income sources, asset tests and minimum distributions that differ by country, and breaking them has real consequences for the company. Knowing the outline of each regime in your coverage explains why payout ratios cluster where they do and why some companies hold taxable subsidiaries or pay scrip dividends.

                ## Milestones
                1. A one-page outline of the REIT regime for each market you cover, from official or industry body sources.
                2. Minimum distribution and asset or income test requirements noted for each market.
                3. Each covered REIT's use of taxable subsidiaries or scrip dividends recorded.
                4. Open questions listed for your tax or compliance colleagues rather than answered by guesswork.

                ## Notes
                This is organisational knowledge for analysis, not tax advice. Check details against the tax authority's guidance or the industry body, and take questions to a tax professional.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An outline of each covered market's REIT regime is written from official sources, with every covered REIT's use of subsidiaries or scrip recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the official or industry body summary of each covered REIT regime"
                - "Note the minimum distribution and asset tests for each market"
                - "Record which covered REITs use taxable subsidiaries or scrip dividends"
                - "List open questions for your tax or compliance colleagues"
            - name: Internal versus external management structures
              description: |-
                ## Purpose
                Externally managed REITs pay a manager fees on assets, acquisitions and sometimes performance, which can reward growth over returns per share. Learning to read management agreements and calculate the total fee load against an internally managed peer's overhead shows what shareholders really pay for management and where incentives point.

                ## Milestones
                1. Each covered REIT classed as internally or externally managed.
                2. Fee terms for every external manager summarised from the management agreement.
                3. Total management cost as a share of gross assets compared across internal and external peers.
                4. Termination and internalisation terms noted for each externally managed company.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Management cost as a share of gross assets is compared for internal and external peers, with fee and termination terms summarised."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Class every covered REIT as internally or externally managed"
                - "Summarise one external manager's fee terms from the agreement"
                - "Compare total management cost as a share of gross assets"
                - "Note termination and internalisation terms for each external manager"
            - name: Choosing a REIT data provider
              description: |-
                ## Purpose
                Data platforms differ in how they define FFO, how fast they load supplementals, whether they hold property-level and transaction data, and what they cost per seat. Comparing two or three against the questions you actually ask each week stops you paying for a terminal you only use for share prices, or rebuilding by hand what a better tool already holds.

                ## Milestones
                1. A list of the ten data questions you answer most often.
                2. Two or three providers trialled against the same ten questions.
                3. Each provider scored on coverage, definitions, speed after results, export and cost.
                4. A decision recorded with the reason and a date to review it.

                ## Notes
                Start from the **Purchase decision** template. Check that any provider's FFO matches the company's reported figure before trusting its history.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three providers are scored on the same ten questions and a decision is recorded with a review date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the ten data questions you answer most often"
                - "Request trials from two or three providers"
                - "Score each trial on coverage, definitions, speed, export and cost"
                - "Record the choice and the date to review it"
            - name: Framework for comparing property sectors
              description: |-
                ## Purpose
                Comparing a data centre REIT with a shopping centre REIT on P/FFO alone hides differences in lease length, capex intensity, supply risk and growth. A written framework that scores each sector on demand drivers, supply, lease structure, capex, tenant credit and pricing power gives a consistent basis for sector discussions without turning into a prediction.

                ## Milestones
                1. Six to eight scoring factors defined with what high and low look like for each.
                2. Every covered sector scored with a sentence of evidence per factor.
                3. Sector multiples set beside the scores to show where pricing and fundamentals diverge.
                4. The framework reviewed by a colleague and their challenges recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every covered sector is scored on six to eight written factors with evidence, beside its multiples, and peer reviewed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Define six to eight sector scoring factors on one page"
                - "Score each covered sector with one sentence of evidence per factor"
                - "Set sector average multiples beside the scores"
                - "Ask a colleague to challenge the scoring and record their points"
            - name: NAV sensitivity grid
              description: |-
                ## Purpose
                One NAV figure invites false precision, when a 25 basis point move in cap rates can shift NAV per share by more than the stated discount. A grid of NAV per share against cap rate and NOI changes shows how much of a company's apparent discount survives reasonable disagreement about the inputs.

                ## Milestones
                1. A two-way grid of NAV per share across cap rate and NOI changes for each covered REIT.
                2. Cap rate steps of 25 basis points and NOI steps of 2.5 percent agreed as the standard.
                3. The share price marked on each grid to show which combinations it implies.
                4. The grid included in every NAV you send out.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every covered REIT's NAV carries a two-way cap rate and NOI grid with the current share price marked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add a cap rate by NOI data table to one NAV model"
                - "Set the standard steps for cap rate and NOI changes"
                - "Mark the cells closest to the current share price"
                - "Copy the grid into every other NAV model in coverage"
            - name: Normalising AFFO across peers
              description: |-
                ## Purpose
                Even with a house definition, peers disclose capex differently: one splits maintenance from value-add, another lumps everything into redevelopment. Normalising AFFO with a capex per square foot or per unit benchmark, and showing the adjustment openly, makes payout and multiple comparisons hold up when a portfolio manager asks why your number differs from the company's.

                ## Milestones
                1. Recurring capex per square foot or per unit calculated for every disclosing peer.
                2. A sector benchmark set from the disclosing peers' median.
                3. The benchmark applied to companies with incomplete capex disclosure.
                4. A reconciliation from reported AFFO to normalised AFFO shown for each peer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Normalised AFFO for one peer group is reconciled to reported AFFO, using a capex benchmark set from disclosing peers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Calculate recurring capex per unit for each peer that discloses it"
                - "Set the sector benchmark from the median"
                - "Apply the benchmark to peers with thin disclosure"
                - "Show the reconciliation from reported to normalised AFFO"
            - name: Cost of capital and investment spread test
              description: |-
                ## Purpose
                A REIT creates value per share from acquisitions only when the yield it buys at exceeds its cost of capital, and that cost rises when the shares trade at a discount to NAV. Estimating each company's blended cost of debt and equity, and comparing it with recent acquisition and development yields, shows who can grow accretively and who is shrinking value by staying busy.

                ## Milestones
                1. A written method for cost of equity, cost of debt and their blend for a REIT.
                2. Blended cost of capital estimated for every covered company.
                3. Recent acquisition cap rates and development yields set beside each estimate.
                4. Companies buying below their cost of capital flagged with the evidence.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Blended cost of capital is estimated to a written method for every covered REIT and compared with its recent investment yields."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write your method for REIT cost of equity and cost of debt"
                - "Estimate blended cost of capital for each covered company"
                - "List each company's acquisitions and yields from the last year"
                - "Flag any company investing below its cost of capital"
            - name: Recurring capex estimates where disclosure is thin
              description: |-
                ## Purpose
                Older office and retail portfolios can need heavy tenant improvements and leasing commissions just to stand still, and companies that report little detail tend to understate it. Building an estimate from building age, lease expiries and peer benchmarks, and checking it against cash flow statement spend, gives you a defensible capex figure for AFFO and NAV.

                ## Milestones
                1. Total property capex from the cash flow statement split as far as the notes allow.
                2. An estimate of recurring capex from lease expiries times typical incentive cost.
                3. Building age and condition comments from filings and presentations recorded.
                4. A final recurring capex figure with its range written into the AFFO model.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A recurring capex estimate with a stated range is built for each thinly disclosing REIT and written into its AFFO model."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Split total property capex from the cash flow statement and notes"
                - "Estimate leasing capex from next year's expiries and typical incentives"
                - "Record building age and condition comments from presentations"
                - "Write the final estimate and range into the AFFO model"
            - name: AFFO multiple and dividend discount cross-check
              description: |-
                ## Purpose
                NAV says what the buildings are worth; an earnings-based valuation says what the cash stream is worth to a shareholder. Cross-checking NAV against a target AFFO multiple and a simple dividend discount model, and explaining where they disagree, gives you a range rather than a single number to defend in front of a portfolio manager.

                ## Milestones
                1. An AFFO multiple valuation based on the peer median and the company's growth gap.
                2. A dividend discount model with a stated growth rate and cost of equity.
                3. NAV, multiple and dividend discount values shown side by side for one REIT.
                4. A paragraph explaining the spread between the three methods.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One REIT is valued by NAV, AFFO multiple and dividend discount side by side, with a written explanation of the spread."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set a target AFFO multiple from the peer median and growth gap"
                - "Build a simple dividend discount model with stated inputs"
                - "Show the three values side by side for one REIT"
                - "Write a paragraph on why the three methods disagree"
            - name: Initiation report on a new REIT
              description: |-
                ## Purpose
                Starting coverage of a REIT is the moment you build everything properly: a full model, a NAV, a balance sheet view, peer comparisons and a written thesis with risks. A dated initiation plan with stages keeps the work from sprawling over months and gives your manager or portfolio manager a clear date to expect it.

                ## Milestones
                1. A company populated in the data template for at least eight quarters.
                2. FFO, house AFFO, NAV and balance sheet score completed and reviewed.
                3. A thesis, key risks and valuation range written up.
                4. The report reviewed by a colleague and cleared by compliance where your role requires it.
                5. The initiation delivered on the agreed date.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An initiation with model, NAV, balance sheet score, thesis and risks is reviewed and delivered by the agreed date."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Agree the initiation date and scope with your manager"
                - "Populate the data template with eight quarters of history"
                - "Build the NAV and balance sheet score before writing a word"
                - "Send the draft for peer review two weeks before the date"
            - name: Investor day and property tour preparation
              description: |-
                ## Purpose
                Investor days and property tours are the rare chance to see the buildings, meet the operating team and test claims you have only read in a supplemental. Arriving with a list of what to verify and what to ask, and writing up within a day, turns a pleasant tour into evidence for your NAV and leasing assumptions.

                ## Milestones
                1. A question list of at least ten items tied to specific numbers in your model.
                2. A list of physical checks for the assets on the tour: vacancy, condition, competing supply.
                3. Notes written up within 24 hours, with model assumptions changed or confirmed.
                4. Any information you suspect is not public raised with compliance before it is used.

                ## Notes
                Hold only what management says publicly. If something sounds like inside information, stop, note it and speak to compliance before acting on it.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written tour note with ten or more answered questions and model changes is completed within 24 hours of the event."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write ten questions tied to specific numbers in your model"
                - "List the physical checks for each asset on the tour"
                - "Write up notes and model changes within a day of the event"
                - "Raise anything that may not be public with compliance"
            - name: Earnings preview note ahead of results
              description: |-
                ## Purpose
                Writing a preview forces you to commit to expectations for FFO, same-store NOI, leasing and guidance before the company reports, which makes the result readable in minutes rather than hours. It also shows the people you work for that you saw a miss or a beat coming rather than explaining it afterwards.

                ## Milestones
                1. House estimates for FFO, same-store NOI, occupancy and guidance set against consensus.
                2. Three things to watch named for each company.
                3. The preview delivered at least two working days before the first release.
                4. Actual results scored against the preview after the season.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A preview with house estimates against consensus and three watch points per company is delivered two working days before results."
                cadence: cyclic
              tasks:
                - "Pull consensus estimates for every company in the peer group"
                - "Write the preview two working days before the first release @recurring(quarterly)"
                - "Name three things to watch for each company"
                - "Score results against the preview once the season ends"
            - name: Presenting a REIT view to the investment committee
              description: |-
                ## Purpose
                An investment committee wants the thesis, the valuation range, the balance sheet risk and what would make you wrong, in fifteen minutes and on a few pages. Preparing the pack, rehearsing the hard questions and recording the decision and its conditions turns months of analysis into an outcome someone can act on.

                ## Milestones
                1. A pack of no more than six pages: thesis, valuation range, balance sheet, peers, risks and what would change the view.
                2. Ten hard questions written and answered in rehearsal with a colleague.
                3. The committee's decision and any conditions recorded the same day.
                4. Follow-up items given owners and dates.

                ## Notes
                Start from the **Board meeting** template. Lead with what would make you wrong; committees trust analysts who name their own risks.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pack of six pages or fewer is presented, and the committee's decision, conditions and follow-up owners are recorded that day."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Draft the six-page pack outline from your latest model"
                - "Write ten hard questions and your answers"
                - "Rehearse with a colleague who plays the sceptic"
                - "Record the decision, conditions and follow-ups the same day"
            - name: Analysing an announced REIT merger or take-private
              description: |-
                ## Purpose
                When a REIT agrees to merge or be bought, the questions change overnight: offer price against NAV, the implied cap rate the buyer is paying, financing, deal conditions and what it means for the remaining peers' valuations. A structured analysis completed within days of the announcement turns the deal into private market evidence for the whole sector.

                ## Milestones
                1. Offer price set against your NAV, the undisturbed price and the trading range.
                2. The implied cap rate the buyer is paying calculated and added to the transaction log.
                3. Financing, conditions and timetable summarised from the announcement documents.
                4. Read-across to peers' NAVs and implied cap rates written up.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Within a week of announcement, a note sets the offer against NAV, records the implied cap rate and states read-across to peers."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Compare the offer with your NAV and the undisturbed share price"
                - "Calculate the implied cap rate from the offer"
                - "Summarise financing, conditions and timetable from the announcement"
                - "Write the read-across for the remaining peers"
            - name: First 90 days as a REIT research associate
              description: |-
                ## Purpose
                New associates inherit models, a coverage list and a senior analyst's expectations all at once, usually weeks before an earnings season. A 30, 60 and 90 day plan that sequences learning the models, owning a peer group and writing a first note gets you trusted with real work faster than waiting to be told.

                ## Milestones
                1. By day 30, every inherited model opened, traced and its quirks listed.
                2. By day 60, one peer group's data and multiples owned and updated without help.
                3. By day 90, a first note or preview written and published or sent internally.
                4. A review with your senior analyst at each stage, with feedback recorded.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Ask early which numbers your senior analyst checks first; that is where your errors will be noticed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "By day 90 the associate owns one peer group's data and has written a first note, with three recorded reviews."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask your senior analyst which three numbers they check first"
                - "Trace every inherited model and list its quirks"
                - "Take over one peer group's monthly multiples refresh"
                - "Book review conversations at day 30, 60 and 90"
            - name: Moving from direct property into listed REITs
              description: |-
                ## Purpose
                Valuers, asset managers and underwriters who move into listed REIT analysis know buildings well but are new to share counts, consensus, quarterly reporting and the speed of a share price. A short plan to learn the listed side, while using your property knowledge as an edge, avoids the common trap of producing excellent NAVs and missing what moves the shares.

                ## Milestones
                1. The differences between direct and listed analysis written as a list of ten points.
                2. FFO, AFFO and implied cap rate calculated for three REITs without help.
                3. One earnings season followed in full with notes on what moved each share price.
                4. A note written that uses direct property knowledge to challenge a consensus view.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three REITs are analysed on FFO, AFFO and implied cap rate, one season is followed in full and one consensus-challenging note is written."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List ten ways listed analysis differs from direct property work"
                - "Calculate FFO and AFFO for three REITs from their filings"
                - "Follow one earnings season and note what moved each share"
                - "Write one note that draws on your property experience"
            - name: Generalist analyst picking up REIT coverage
              description: |-
                ## Purpose
                Generalist equity analysts handed REITs often value them on earnings per share and price to book, which mislead because of depreciation and fair value accounting. Learning the handful of sector conventions, and which generalist habits to drop, lets you speak the language of REIT investors within a season rather than a year.

                ## Milestones
                1. A list of generalist metrics that mislead for REITs, with the REIT equivalent beside each.
                2. FFO, AFFO and NAV built for the two largest companies in your new coverage.
                3. A conversation held with a specialist REIT analyst or investor and notes kept.
                4. Your first REIT note reviewed for sector conventions before it goes out.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "FFO, AFFO and NAV are built for two REITs and a first note is reviewed for sector conventions before release."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the generalist metrics that mislead for REITs"
                - "Build FFO, AFFO and NAV for your two largest REITs"
                - "Arrange a conversation with a specialist REIT analyst"
                - "Ask a specialist to review your first REIT note"
            - name: REIT stock pitch case study for interviews
              description: |-
                ## Purpose
                Interviews for REIT research and real estate securities roles usually ask for a pitch: thesis, NAV, AFFO multiple, balance sheet and risks on a company you choose. A prepared case study on one REIT, built from public filings and rehearsed against hard questions, shows you can do the job rather than describe it.

                ## Milestones
                1. One REIT chosen that you can explain in two minutes.
                2. A NAV, house AFFO and balance sheet score built from public filings.
                3. A two-page written pitch with thesis, valuation range and three risks.
                4. Three mock interviews completed and the weakest answers rewritten.

                ## Notes
                Present the case as analysis, not a recommendation to buy. Interviewers care about reasoning and risks far more than whether you picked a winner.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page REIT case study with NAV, AFFO and balance sheet score has been rehearsed in three mock interviews."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick one REIT you can explain in two minutes"
                - "Build its NAV, AFFO and balance sheet score from public filings"
                - "Write the two-page pitch with three named risks"
                - "Run three mock interviews and rewrite the weakest answers"
            - name: Covering REITs across several national regimes
              description: |-
                ## Purpose
                Global and regional mandates put US REITs, UK and European REITs, Singapore and Hong Kong trusts, Japanese J-REITs and Australian trusts in one portfolio, each with different accounting, reporting frequency and management structures. A comparison sheet that adjusts the main metrics to a common basis keeps cross-border comparisons from being apples against oranges.

                ## Milestones
                1. A table of each regime's reporting frequency, accounting basis, earnings measure and typical structure.
                2. A common-basis adjustment for earnings, NAV and gearing written for each regime.
                3. Five companies from different regimes compared on the common basis.
                4. Currency and hedging treatment noted for every cross-border comparison.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Five REITs from different regimes are compared on a written common basis for earnings, NAV and gearing, with currency treatment noted."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Tabulate reporting frequency and accounting basis for each regime"
                - "Write the common-basis adjustment for earnings, NAV and gearing"
                - "Compare five companies from different regimes on that basis"
                - "Ask the agent to draft a summary of each regime's earnings measure for checking"
            - name: Mentoring a junior analyst on REIT models
              description: |-
                ## Purpose
                Junior analysts learn REIT work fastest by building, being checked and fixing, not by reading. A weekly half hour that walks one part of the model at a time, from the FFO bridge to NAV, with their own work reviewed, builds a colleague who can cover your peer group when you are away.

                ## Milestones
                1. A sequence of eight sessions covering FFO, AFFO, leasing, debt, NAV, multiples, previews and notes.
                2. Each session paired with a small exercise on a real covered REIT.
                3. The junior's exercises reviewed with written feedback.
                4. The junior covering one company's quarterly update unaided by the end.

                ## Notes
                Start from the **1:1** template. Let them find the error before you point at it; the habit of checking is the real lesson.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Eight sessions with reviewed exercises are completed, and the junior updates one covered REIT's model unaided."
                cadence: rolling
              tasks:
                - "Write the eight-session sequence on one page"
                - "Set the first exercise on rebuilding one quarter's FFO"
                - "Hold the weekly mentoring session @recurring(weekly:thu)"
                - "Hand the junior one company's quarterly update"
            - name: Mortgage REIT book value and spread analysis
              description: |-
                ## Purpose
                Mortgage REITs own loans or mortgage securities rather than buildings, so FFO and NAV give way to book value, net interest spread, hedging and repo funding. Learning their own measures, and tracking book value per share between quarters from disclosed estimates, prevents equity REIT habits producing nonsense for this part of the universe.

                ## Milestones
                1. The main mortgage REIT measures written out: book value, net interest spread, distributable earnings and economic return.
                2. Book value per share history tracked for every covered mortgage REIT.
                3. Funding mix, repo and hedging positions summarised from the latest filings.
                4. Dividend coverage measured on distributable earnings for each company.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Book value per share history, funding and hedging summaries and dividend coverage on distributable earnings are held for every covered mortgage REIT."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the definitions of the main mortgage REIT measures"
                - "Track book value per share history for each mortgage REIT"
                - "Summarise funding mix and hedges from the latest filing"
                - "Record intra-quarter book value estimates where published @recurring(monthly:12)"
            - name: Specialised REIT metrics for towers, data centres and healthcare
              description: |-
                ## Purpose
                Tower, data centre and healthcare REITs earn much of their income from contracts and operations that look little like a standard lease: tenancy ratios, power capacity, operator rent coverage and operating partnership income. Building the extra metrics each subsector needs into your template stops these companies being forced into a framework that misprices them.

                ## Milestones
                1. The subsector-specific metrics listed for towers, data centres and healthcare REITs.
                2. Those metrics added as extra rows to the data template for each relevant company.
                3. Operator rent coverage tracked for every healthcare REIT that discloses it.
                4. A note on which standard REIT metrics mislead for each subsector.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Subsector metrics for towers, data centres and healthcare are added to the template and populated for every relevant covered REIT."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the extra metrics each subsector's companies disclose"
                - "Add the subsector rows to the data template"
                - "Track operator rent coverage for each healthcare REIT"
                - "Write which standard metrics mislead for each subsector"
            - name: Balance sheet stress test for a rate and value shock
              description: |-
                ## Purpose
                Covenants on loan to value and interest cover can be breached by a fall in property values and a rise in rates together, long before the company says anything. Stressing each balance sheet with a cap rate rise and a refinancing rate jump, and measuring headroom to covenants, identifies who would need to sell assets or raise equity in a downturn.

                ## Milestones
                1. Two or three stress scenarios defined with cap rate and interest rate moves.
                2. Loan to value, interest cover and unencumbered asset ratios recalculated under each scenario.
                3. Headroom to disclosed covenants measured for every covered REIT.
                4. Companies with less than ten percent headroom in the severe case flagged and written up.

                ## Notes
                Start from the **Risk register** template. Use the covenant definitions in the debt documents, not the company's headline ratios.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every covered REIT's covenant headroom is measured under two or three written stress scenarios, with low-headroom cases written up."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Define two or three stress scenarios with cap rate and rate moves"
                - "Pull covenant definitions from each REIT's debt documents"
                - "Recalculate the covenant ratios under each scenario"
                - "Write up every company with thin headroom in the severe case"
            - name: Estimate accuracy scorecard
              description: |-
                ## Purpose
                Every analyst believes their forecasts are better than consensus; few keep the record. Scoring your FFO and same-store NOI estimates against actuals each quarter, and against consensus, shows where your models are systematically biased and which assumptions deserve more work.

                ## Milestones
                1. House and consensus estimates for FFO and same-store NOI stored before each release.
                2. Errors against actuals recorded per company and per quarter.
                3. A bias check showing whether you are persistently high or low by company or sector.
                4. One modelling change made each year in response to the record.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarters of house and consensus errors against actuals are recorded, with a bias check and one resulting model change."
                cadence: rolling
              tasks:
                - "Save house and consensus estimates before each release"
                - "Record forecast errors after every results season @recurring(quarterly)"
                - "Check for persistent bias by company and sector"
                - "Make one modelling change based on the record"
            - name: Climate and energy data in REIT disclosures
              description: |-
                ## Purpose
                Physical climate risk, energy ratings and decarbonisation capex are starting to show up in REIT valuations through insurance costs, tenant demand and obsolescence. Reading each company's sustainability disclosure for the numbers that matter, and noting where the data is missing, lets you reflect these costs in AFFO and NAV instead of treating them as a separate report.

                ## Milestones
                1. The energy rating mix, flood or storm exposure and decarbonisation capex plans collected for each covered REIT.
                2. Companies' disclosures scored for completeness against a short list of data points.
                3. An estimate of decarbonisation capex added to the recurring capex view where material.
                4. Insurance cost trends noted for portfolios in exposed regions.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Energy, exposure and decarbonisation capex data are collected and scored for completeness for every covered REIT, with material capex added to AFFO."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the short list of climate and energy data points you need"
                - "Collect those data points from each REIT's sustainability report"
                - "Add material decarbonisation capex to the recurring capex view"
                - "Review disclosures after each annual report cycle @recurring(yearly)"
---

# REIT Financial Analysis

Listed REITs report like ordinary companies but are valued like property portfolios, and the analyst's job is to translate between the two: from net income to FFO and AFFO, from rent rolls and cap rates to net asset value, and from debt notes to a view on balance sheet strength. This area is for analysts on the buy side or sell side, and for anyone picking up REIT coverage for the first time. It starts with a filing library, a coverage map, house definitions of FFO and AFFO, a data template and a NAV skeleton, then moves through the recurring machinery of earnings seasons and valuation refreshes, the accounting and lease skills behind the numbers, decisions about data, normalisation and cost of capital, dated moments such as initiations and investor days, situations for analysts changing seat, and specialist work on mortgage REITs, specialised sectors and stress tests.

The rhythms are a weekly rates and spreads check, monthly refreshes of multiples, transaction evidence, capital raises and model housekeeping, a quarterly earnings season with previews, debt and dividend reviews, and a yearly coverage and thesis review. The Purchase decision template suits choosing a data provider, Metrics log suits the multiples and evidence records, Risk register suits stress tests, Board meeting suits an investment committee, Onboarding 30/60/90 suits a new seat and 1:1 suits mentoring a junior. None of this is investment, tax or legal advice: it organises analysis, and your compliance team and the right professionals settle anything regulated. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
