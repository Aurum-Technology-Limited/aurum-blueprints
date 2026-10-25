---
id: private-equity-vc.caribbean-private-capital-deals
name: Caribbean Private Capital Deals
description: "Caribbean private deals done with care: market and currency maps, family owner relationships, DFI co-investment, exchange controls, governance upgrades and realistic exit routes across the region."
category: business
version: 1.0.0
tags: [private-equity-vc, caribbean-private-capital-deals, knowledge-worker, founder, caribbean, family-business, development-finance, currency-risk]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - vendor
    - reading-queue
    - metrics-log
    - trip
    - meeting-notes
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Caribbean Private Capital Deals
          description: "Investing privately in Caribbean companies: family-owned targets, regional funds and development finance, currency and exit constraints, and local governance norms."
          projects:
            - name: Caribbean market map by country and currency zone
              description: |-
                ## Purpose
                Treating the Caribbean as one market is the first mistake newcomers make: Jamaica, Trinidad and Tobago, Barbados, Guyana, the Bahamas and the OECS members each have their own currency regime, regulator, legal tradition and pool of investable companies. A one-page map of where you will and will not look, with population, economy size, currency and a rough count of companies large enough for your cheque, keeps every later decision grounded.

                ## Milestones
                1. A table of at least twelve jurisdictions with population, currency, exchange regime and legal system.
                2. Each jurisdiction marked as core, opportunistic or out of scope for you.
                3. A rough count of companies above your minimum revenue in each core country, with the source noted.
                4. The map saved with your deal notes and dated.

                ## Notes
                Use statistics offices, central bank reports and IMF country reports as sources, and note the year: Caribbean data is often two or three years old.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated one-page map of at least twelve jurisdictions, each marked core, opportunistic or out of scope, with sources noted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the jurisdictions you could realistically travel to and work in this year"
                - "Pull population and GDP figures from each statistics office or the IMF"
                - "Note each country's currency and whether it is pegged, managed or floating"
                - "Mark each jurisdiction core, opportunistic or out of scope"
            - name: Personal mandate for Caribbean private deals
              description: |-
                ## Purpose
                Without a written mandate it is easy to spend six months on a hotel in one island, a distributor in another and a fintech nobody can exit. Setting out cheque size, control or minority, sectors, countries and the currency you need returns in gives you a fast, polite reason to decline most of what arrives, which matters in a small region where everyone talks.

                ## Milestones
                1. A one-page mandate covering cheque size range, ownership stake, sectors, countries and holding period.
                2. The return currency stated, with how local currency revenue fits into it.
                3. Three deal types you will not do, written as exclusions.
                4. The mandate shared with anyone who invests alongside you or refers deals to you.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page written mandate with cheque size, stake, sectors, countries, return currency and three exclusions, shared with co-investors."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the cheque size range you or your fund can genuinely commit"
                - "Decide whether you will buy control, minority stakes or both"
                - "List three sectors and three countries you will put first"
                - "Write the exclusions you will use to decline deals quickly"
                - "Reread the mandate against the past year's deals and update it @recurring(yearly)"
            - name: Legal systems and language notes for each target country
              description: |-
                ## Purpose
                Most of the English-speaking Caribbean follows common law with company statutes on Commonwealth models, but Haiti and the French territories use civil law, Suriname and the Dutch Caribbean follow Dutch-derived codes, and the Spanish-speaking neighbours differ again. Knowing which system applies, which language documents must be in and where final appeals go, whether the Privy Council, the Caribbean Court of Justice or a national court, changes how you draft, who you hire and how long disputes take.

                ## Milestones
                1. A note per core country naming its legal tradition, main company statute and final court of appeal.
                2. The working language for contracts, filings and court documents recorded.
                3. Countries where you will need translation or local-language counsel flagged.
                4. The notes checked for errors by a regional lawyer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note per core country with legal tradition, company statute, final appeal court and working language, checked by a regional lawyer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the name of the main company statute in each core country"
                - "Note whether final appeals go to the Privy Council, the CCJ or a national court"
                - "Flag countries where contracts or filings must be in French, Dutch or Spanish"
                - "Ask a regional lawyer to correct the notes in a short call"
            - name: Currency and exchange control fact sheet
              description: |-
                ## Purpose
                Currency is where Caribbean returns are most often lost. The Eastern Caribbean dollar is fixed at 2.70 to the US dollar and the Barbados and Belize dollars at two, while the Jamaican dollar floats and Trinidad and Tobago runs a managed rate with long waits for US dollars at commercial banks. A fact sheet per country covering the regime, any exchange control approvals and the practical wait for hard currency lets you price currency risk before you price the company.

                ## Milestones
                1. A sheet per core country with the regime, any peg level and the central bank's stated policy.
                2. Approvals needed to bring capital in and take dividends or sale proceeds out noted per country.
                3. A practical view of hard currency availability gathered from at least two local bankers or treasurers.
                4. Each currency risk logged with likelihood and impact.

                ## Notes
                Start from the **Risk register** template. Peg levels and rules change rarely but abruptly, so date every entry and recheck before each investment decision.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated currency sheet for every core country, with approval rules, banker views on hard currency waits and risks logged in a register."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read each central bank's published exchange rate policy statement"
                - "Note which countries require approval to remit dividends or sale proceeds"
                - "Ask two local bankers how long companies wait for US dollars today"
                - "Record each currency risk with likelihood, impact and source"
            - name: Regional capital landscape map
              description: |-
                ## Purpose
                Capital for Caribbean companies comes from a short list of sources: development finance institutions such as IDB Invest, IFC and the Caribbean Development Bank, a handful of regional private equity funds, local pension funds and insurers, family offices, commercial banks and diaspora investors. Knowing who invests what size, in which currency and on which conditions tells you who to co-invest with, who you compete with and who might buy your stake later.

                ## Milestones
                1. A list of at least twenty active providers of equity or long-term debt in the region.
                2. Each provider tagged by type, typical ticket size, currencies and countries.
                3. Five providers marked as likely co-investors and five as likely future buyers.
                4. A named contact or a route to one recorded for the ten most relevant.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A map of at least twenty capital providers tagged by type, ticket, currency and country, with contacts for the ten most relevant."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the DFIs with active Caribbean private sector programmes"
                - "Add the regional funds, pension funds and insurers that make private investments"
                - "Tag each provider by ticket size, currency and countries"
                - "Ask the agent to draft a summary table of likely co-investors and likely buyers"
            - name: Adviser bench across your core islands
              description: |-
                ## Purpose
                Each island has only a few law firms, audit firms and valuers with deal experience, and the good ones are often conflicted because they already act for the family you are buying from. Building a bench before you need it, with a primary and a backup in each core country, means a live deal does not stall for three weeks while you find counsel who is free.

                ## Milestones
                1. A primary and a backup law firm identified for each core country.
                2. Audit, tax and valuation firms with transaction experience shortlisted in each.
                3. Conflicts with likely targets and their families checked informally.
                4. Indicative rates, the responsible partner and turnaround recorded for each adviser.

                ## Notes
                Start from the **Vendor** template for each firm. Ask who will actually do the work: small firms often have one partner who handles every transaction.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every core country has a named primary and backup law firm plus shortlisted audit, tax and valuation firms, with rates recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask three regional dealmakers which firms they used on their last deal"
                - "Shortlist a primary and backup law firm for each core country"
                - "Check informally whether each firm acts for families you may approach"
                - "Record each adviser's rates, partner and typical turnaround"
                - "Confirm the bench is current and nobody key has moved firm @recurring(yearly)"
            - name: Holding structure options with tax counsel
              description: |-
                ## Purpose
                Where your investment vehicle sits, in the target's own country, in a regional treaty jurisdiction or in an international financial centre, affects withholding tax on dividends, how exit proceeds are taxed, whether DFIs can join and how the structure looks to the tax authority. The rules have shifted under international tax pressure, so the aim is a short options paper prepared with qualified tax counsel, not a structure copied from someone else's deal.

                ## Milestones
                1. Three structuring options described in plain words with their main trade-offs.
                2. Questions on withholding tax, treaty access and substance requirements answered in writing by tax counsel.
                3. Any DFI or co-investor structuring requirements noted.
                4. A preferred option recorded with the reasons and the date of the advice.

                ## Notes
                This is a record of advice you received, not advice. Economic substance rules and treaty networks have changed in several jurisdictions in recent years, so never rely on a structure diagram more than a year old.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written options paper from tax counsel covering three structures, with a preferred option, its reasons and the advice date recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the questions you need answered on dividends, exit gains and substance"
                - "Brief a regional tax adviser and ask for a short options paper"
                - "Ask any likely DFI co-investor for its jurisdiction requirements"
                - "Record the preferred option, the reasons and the advice date"
            - name: Foreign investment approvals and land licence checklist
              description: |-
                ## Purpose
                Several Caribbean countries require a licence before a non-national can hold land, or shares in a land-owning company, and sectors such as banking, insurance, telecoms and utilities need regulator consent for any change of control. A checklist per country of which approvals apply, who grants them and how long they usually take stops a signed deal from waiting months for a permission nobody planned for.

                ## Milestones
                1. Approvals listed per core country: land holding, foreign investment, sector regulator and competition authority.
                2. The issuing body and usual timeline noted for each, confirmed with local counsel.
                3. Approvals that need the seller's cooperation marked.
                4. The checklist attached to every term sheet as a conditions list.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A counsel-confirmed approvals checklist per core country with issuing bodies and timelines, attached to the standard term sheet."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask local counsel which approvals a foreign buyer needs in each core country"
                - "Check whether an alien landholding licence applies to share purchases"
                - "Record the issuing body and usual timeline for each approval"
                - "Add the approvals as conditions in your term sheet template"
            - name: Reading queue on Caribbean business and private capital
              description: |-
                ## Purpose
                Much of what matters in Caribbean deals sits in central bank financial stability reports, IMF country reports, DFI project disclosures and the annual reports of listed regional groups, not in textbooks. A monthly hour on a short reading queue builds the context that lets you ask a family owner or a DFI officer the right second question.

                ## Milestones
                1. A queue of at least fifteen sources across central banks, the IMF, DFIs and listed company reports.
                2. Five sources read and summarised in a paragraph each.
                3. A recurring reading hour in the calendar.
                4. Two insights from the reading used in a real deal conversation.

                ## Notes
                Start from the **Reading queue** template. DFI project disclosure pages are underused: they show who borrowed, how much and on what conditions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A queue of fifteen sources exists and at least five have a written paragraph summary within three months."
                cadence: rolling
              tasks:
                - "Add the latest financial stability reports from three central banks to the queue"
                - "Add DFI project disclosure pages for Caribbean investments"
                - "Read and summarise one source in a paragraph @recurring(monthly:3)"
                - "Note any company names worth a first conversation"
            - name: Family owner relationship tracker
              description: |-
                ## Purpose
                Family owners in the Caribbean rarely answer a cold email from a fund. They sell, if at all, to someone they have known for years through the chamber of commerce, their banker, church, an old school or a cousin. A tracker of owners you know, how you met, the family's succession situation and when you last spoke turns slow relationship building into something you can keep up across several islands.

                ## Milestones
                1. At least thirty owner families recorded with business, island, generation and how you know them.
                2. The succession situation noted for each: founder still running, next generation in, or no clear successor.
                3. A next contact date set for every owner.
                4. A monthly touch rhythm kept for six months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty owner families are tracked with succession notes and next contact dates, and three owners are contacted every month for six months."
                cadence: rolling
              tasks:
                - "List the family owners you already know across your core islands"
                - "Note each family's generation and succession situation"
                - "Contact three owners with no mention of a sale @recurring(monthly:12)"
                - "Record what you learned and set the next contact date"
            - name: Monthly macro and currency watch
              description: |-
                ## Purpose
                Small open economies move on a few numbers: foreign reserves in months of import cover, tourist arrivals, energy prices, the public debt ratio and IMF programme status. A short monthly check of these for your core countries warns you early of FX queues, devaluation pressure or tax changes that will hit every company you own or are about to price.

                ## Milestones
                1. A one-page watch sheet with five indicators and a trigger level per core country.
                2. Sources bookmarked: central bank releases, statistics offices and IMF reports.
                3. A monthly note written for six consecutive months.
                4. Any indicator crossing its trigger flagged to co-investors or portfolio CEOs.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The watch sheet is updated every month for six months and each crossed trigger has a dated flag sent to co-investors."
                cadence: rolling
              tasks:
                - "Choose five indicators per core country and set a trigger level for each"
                - "Update the watch sheet from central bank releases @recurring(monthly:9)"
                - "Read new IMF country reports and note anything on FX or tax @recurring(quarterly)"
                - "Send a two-line flag to co-investors when a trigger is crossed"
            - name: DFI programme and co-financing watch
              description: |-
                ## Purpose
                Development finance institutions open and close Caribbean credit lines, guarantee facilities, technical assistance funds and climate windows through the year, often with little publicity. Watching their announcements means you hear about a concessional tranche or a first-loss guarantee while you can still shape a deal around it, rather than after the money is committed elsewhere.

                ## Milestones
                1. Announcement pages and newsletters of at least five DFIs subscribed to.
                2. Each open facility logged with eligibility, size and closing date.
                3. One facility matched to a live or likely deal.
                4. A monthly scan kept up for six months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A facility log is updated monthly for six months and at least one open facility is matched to a named deal."
                cadence: rolling
              tasks:
                - "Subscribe to the news pages of five DFIs active in the Caribbean"
                - "Scan for new facilities, guarantees and technical assistance funds @recurring(monthly:20)"
                - "Log each facility with eligibility, size and closing date"
                - "Match open facilities to deals in your pipeline"
            - name: Hurricane season readiness across holdings
              description: |-
                ## Purpose
                Between June and November a single storm can close a hotel for a season, cut power to a factory for weeks or flood a distributor's warehouse, and Irma and Maria in 2017 showed how quickly a whole island economy can stop. Checking insurance, backup power, data back-ups and cash reserves before each season, with a post-storm contact plan, protects the companies and your ability to report honestly to co-investors.

                ## Milestones
                1. Property and business interruption cover confirmed for every holding, with deductibles noted.
                2. Each company's continuity plan for power, data, staff contact and cash checked.
                3. A post-storm reporting route agreed with each CEO.
                4. A short post-season review written each December.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Before each season every holding has confirmed cover, a checked continuity plan and an agreed post-storm reporting route."
                cadence: cyclic
              tasks:
                - "List each holding's insurer, cover type and deductible"
                - "Ask each CEO for their continuity plan before the season starts @recurring(yearly)"
                - "Agree how and when each CEO reports after a named storm"
                - "Write a short review of the season and what to change @recurring(yearly)"
            - name: Dividend and FX conversion log
              description: |-
                ## Purpose
                In countries where hard currency is scarce, a company can declare a dividend and still wait months to convert and send it. Logging every distribution, the date it was declared, the date US dollars were obtained, the rate and any approval needed shows co-investors the real cash yield and builds the evidence you need when pricing the next deal in that country.

                ## Milestones
                1. Every distribution since investment logged with declaration date, conversion date and rate.
                2. The average wait for conversion calculated per country.
                3. Any trapped cash and its currency shown in investor reports.
                4. The log used in the currency assumption of at least one new deal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A complete log of distributions with conversion dates and rates exists, with the average conversion wait calculated for each country."
                cadence: rolling
              tasks:
                - "Gather every dividend and fee paid by each holding since investment"
                - "Record declaration date, conversion date, rate and approvals for each"
                - "Update the log after each round of portfolio board meetings @recurring(quarterly)"
                - "Work out the average conversion wait per country"
            - name: Regional events and chamber calendar
              description: |-
                ## Purpose
                Caribbean dealmaking still runs on rooms: chamber of commerce lunches, investment forums, DFI-hosted conferences and bankers' dinners. Choosing a few each year with a clear purpose, and following up within a week, does more than attending everything and flying between islands every month.

                ## Milestones
                1. A calendar of eight to twelve events across your core countries for the year.
                2. A goal written for each event: people to meet or a question to answer.
                3. Follow-ups sent within a week of each event.
                4. A note on which events produced real conversations, used to choose next year's.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly calendar of eight to twelve events with a written goal each, and follow-ups sent within a week of every event attended."
                cadence: cyclic
              tasks:
                - "List the chamber, investment and DFI events in your core countries this year"
                - "Pick the events worth the flights and write one goal for each"
                - "Send follow-ups within a week of each event"
                - "Review which events produced real conversations @recurring(quarterly)"
            - name: Development impact reporting for DFI co-investors
              description: |-
                ## Purpose
                When a DFI co-invests, it will ask every quarter or year for jobs created, women employed, taxes paid, local suppliers used and emissions data, often in its own template. Building the data collection into each company's monthly reporting from the start avoids a scramble every reporting date and gives you a credible impact record for the next raise.

                ## Milestones
                1. The impact indicators each DFI co-investor requires listed with their definitions.
                2. Each portfolio company collecting the indicators monthly in a set format.
                3. The first full report delivered on time.
                4. Definitions reconciled where DFIs differ.

                ## Notes
                Start from the **Metrics log** template for each company's indicators. Agree definitions early: a full-time equivalent job is counted differently by different institutions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every impact report owed to DFI co-investors is submitted on time for a full year, using agreed indicator definitions."
                cadence: cyclic
              tasks:
                - "Collect each DFI co-investor's impact indicator list and definitions"
                - "Agree with each CEO who records the indicators every month"
                - "Compile and submit the impact report @recurring(quarterly)"
                - "Reconcile differing definitions in the annual report @recurring(yearly)"
            - name: Environmental and social action plan monitoring
              description: |-
                ## Purpose
                DFI money usually comes with an environmental and social action plan: fire safety in a factory, wastewater at a hotel, labour practices at a distributor, each with a deadline. Tracking progress between board meetings keeps the company within its funding agreements and catches problems, such as an unreported workplace accident, before the DFI does.

                ## Milestones
                1. Every action in each company's plan listed with an owner and deadline.
                2. Status reviewed with each company's E&S lead.
                3. Overdue items escalated to the board with a recovery date.
                4. Serious incidents reported within the window each funding agreement sets.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One tracker holds every action plan item with owner and status, reviewed each quarter, and no item is overdue without a board-agreed recovery date."
                cadence: rolling
              tasks:
                - "Copy each company's action plan items into one tracker with owners"
                - "Review status with each company's E&S lead @recurring(quarterly)"
                - "Escalate overdue items to the next board with a recovery date"
                - "Check each funding agreement for its incident reporting window"
            - name: Integrity checks on counterparties and politically exposed persons
              description: |-
                ## Purpose
                In small islands, business owners, ministers, regulators and bank directors are often related or went to school together, so politically exposed persons appear in shareholder registers more often than newcomers expect. Running integrity checks on owners, directors and major counterparties before investing, and refreshing them each year, protects you and any DFI partner from reputational and sanctions risk.

                ## Milestones
                1. Integrity checks completed on every owner, director and major counterparty of each holding.
                2. Politically exposed persons identified and the nature of the link documented.
                3. Adverse findings discussed with counsel and a decision recorded.
                4. Checks refreshed across the portfolio each year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every owner, director and major counterparty of each holding has a dated integrity check no older than twelve months."
                cadence: cyclic
              tasks:
                - "List owners, directors and top counterparties for each holding"
                - "Run integrity and sanctions screening through your provider or counsel"
                - "Document any politically exposed person and the nature of the link"
                - "Refresh the checks across the portfolio @recurring(yearly)"
            - name: Learning the IFC Performance Standards
              description: |-
                ## Purpose
                The IFC Performance Standards, eight standards running from the environmental and social management system through labour, pollution, community health, land, biodiversity, indigenous peoples and cultural heritage, are the yardstick most DFIs apply to private investments. Knowing them well enough to spot gaps on a site visit makes you a better co-investment partner and saves weeks in a DFI's appraisal.

                ## Milestones
                1. All eight standards read, with a one-paragraph note on each.
                2. The standards most relevant to regional tourism, manufacturing and agriculture identified.
                3. A site visit checklist drafted from the standards.
                4. A gap list from a real or past company reviewed with an E&S consultant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight written notes, one per standard, and a site visit checklist reviewed by an E&S consultant exist."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Download the IFC Performance Standards and their guidance notes"
                - "Write a one-paragraph note on each standard"
                - "Draft a site visit checklist for a typical regional hotel or plant"
                - "Review a gap list with an E&S consultant"
            - name: Reading family company accounts with informal records
              description: |-
                ## Purpose
                Many Caribbean family companies keep compiled rather than audited accounts, run family salaries and personal costs through the business, hold property in a separate family company and rent it back, and record some cash sales loosely. Learning to rebuild the picture from bank statements, tax filings and VAT returns, and to ask about these items without offending the owner, is a core skill before formal diligence starts.

                ## Milestones
                1. A list of the ten most common informal items in family accounts, with how to spot each.
                2. One set of real or sample accounts rebuilt from bank and VAT records.
                3. Polite wording for asking an owner about related-party items written down.
                4. Findings handed to the formal diligence advisers as questions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of ten informal account items and one rebuilt set of accounts exist, with questions passed to diligence advisers."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the related-party and owner items you have seen in family accounts"
                - "Compare reported sales with VAT returns and bank deposits for one company"
                - "Write the wording you will use to ask owners about family expenses"
                - "Turn your findings into questions for the diligence advisers"
            - name: Exchange controls in practice
              description: |-
                ## Purpose
                Where exchange controls still apply, the statute and central bank guidance set the rules, but what matters day to day is how long a commercial bank takes to process an application and which documents it wants. Learning the practical process from a treasurer and a banker, ideally by following one real application, makes your deal timetable and cash plans realistic.

                ## Milestones
                1. The application steps, documents and approving body written down for each controlled country.
                2. A treasurer at a regional company interviewed on real timelines.
                3. One real or past application followed from submission to approval.
                4. Realistic timelines added to your deal and distribution plans.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written process note per controlled country with documents and real timelines, used in at least one deal timetable."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask counsel which of your core countries still apply exchange controls"
                - "Interview a company treasurer on how long approvals really take"
                - "Write the documents a bank asks for when remitting dividends"
                - "Add realistic approval times to your deal timetable"
            - name: Caribbean stock exchanges as exit venues
              description: |-
                ## Purpose
                The Jamaica Stock Exchange's Junior Market has given smaller companies a route to listing, and the Trinidad and Tobago, Barbados, Eastern Caribbean and Bahamas exchanges each offer a domestic option, but trading is thin and a listing rarely buys out a large stake at once. Understanding listing rules, costs, liquidity and how earlier listings traded tells you whether an IPO is a real exit or a partial one.

                ## Milestones
                1. Listing requirements and indicative costs noted for each exchange in your core countries.
                2. Trading volumes and price history of five recent small listings reviewed.
                3. A view of how much of a stake each market could absorb, discussed with a local broker.
                4. New listings and delistings followed for six months.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note per exchange with listing rules, costs and a broker's view of absorbable sell-down size, plus five listings reviewed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to summarise each regional exchange's listing rules in one table"
                - "Review how five recent small listings have traded since their IPO"
                - "Ask a regional broker how large a sell-down the market could absorb"
                - "Note new listings, delistings and rights issues @recurring(monthly:15)"
            - name: Valuation in thin markets
              description: |-
                ## Purpose
                There are few listed comparables in the region, private transaction multiples are rarely published, and analysts disagree on how to reflect country risk, currency risk and illiquidity. Studying how regional valuers, DFIs and listed company analysts handle these questions lets you defend a price to a family owner and to your own committee, rather than importing a multiple from a far larger market.

                ## Milestones
                1. A set of regional listed comparables by sector, with the date of the data.
                2. Three methods for country risk and illiquidity adjustments summarised with sources.
                3. A worked example on a past or sample company showing the effect of each method.
                4. The approach reviewed with an experienced regional valuer.

                ## Notes
                This is method, not a recommended discount. Agree the approach with your valuer and committee for each deal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked comparison of three country risk methods on one company, critiqued in writing or in a call by a regional valuer."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build a list of regional listed companies by sector with current multiples"
                - "Summarise three ways analysts adjust for country and currency risk"
                - "Run the three methods on one sample company and compare the results"
                - "Ask a regional valuer to critique your approach"
            - name: Succession dynamics in multigenerational family firms
              description: |-
                ## Purpose
                Most deals with Caribbean family companies are really succession decisions: a founder in their seventies, children working abroad in Toronto, Miami or London, and cousins with small stakes and different expectations. Learning how family councils, shareholder agreements and generational handovers work helps you understand why a deal stalls and what the family needs from an investor besides a price.

                ## Milestones
                1. Three books, articles or case studies on family business succession read and noted.
                2. Conversations held with two owners who have handed over or sold.
                3. A map of the typical family stakeholder roles drawn for use in deals.
                4. Questions for a first family meeting written.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on three succession sources, two owner conversations and a written list of first-meeting questions exist."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose three case studies or articles on family business succession"
                - "Ask two owners who have handed over how the family decided"
                - "Draw the stakeholder roles you expect in a typical family company"
                - "Write the questions you will ask at a first family meeting"
            - name: CARICOM and CSME rules for cross-border growth
              description: |-
                ## Purpose
                A portfolio company expanding from Jamaica to Trinidad, or from Barbados into the OECS, meets the Caribbean Single Market and Economy rules on establishment, movement of skilled nationals, the common external tariff and rules of origin, along with each country's own exceptions. Understanding how these work in practice rather than on paper helps you judge whether a regional expansion line in a model is realistic.

                ## Milestones
                1. The CSME provisions on right of establishment, skills certificates and rules of origin summarised.
                2. Two companies that expanded across CARICOM interviewed on what actually slowed them.
                3. A checklist for testing any regional expansion assumption written.
                4. The checklist used on one real or sample business plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A CSME summary, two company interviews and an expansion checklist applied to one business plan are on file."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the CARICOM Secretariat guides on establishment and skills certificates"
                - "Interview two regional companies about their cross-border expansion"
                - "Write a checklist for testing expansion assumptions"
                - "Apply the checklist to one company's growth plan"
            - name: Deal currency and hedging decision
              description: |-
                ## Purpose
                If your investors expect US dollar returns and the company earns Jamaican or Trinidad and Tobago dollars, every point of currency movement goes straight to your returns, and long-dated hedges are often unavailable or costly in the region. Deciding before term sheets whether to price in US dollars, use dollar-linked instruments, rely on natural hedges from exports or tourism, or accept the risk and price it, makes the trade-off explicit.

                ## Milestones
                1. The target's revenue and cost currencies set out, with any natural hedge identified.
                2. Hedging or currency-linked instrument options and indicative costs gathered from two banks or a DFI.
                3. A currency assumption agreed for the model, with a downside case.
                4. The decision and its reasons recorded in the deal file.

                ## Notes
                Some DFIs offer local currency lending or currency facilities for frontier markets. Ask whether any apply before assuming no hedge exists.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The deal file records the currency approach chosen, the hedging options priced and a modelled currency downside case."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Split the target's revenue and costs by currency"
                - "Ask two banks and one DFI which currency products are available"
                - "Run the returns with a currency downside case"
                - "Record the currency decision and reasons in the deal file"
            - name: Control or minority stake for a family target
              description: |-
                ## Purpose
                Many Caribbean families will sell a minority stake for growth capital but not control, while many investors need control to fix governance or plan an exit. Comparing the two for a specific target, covering the rights a minority investor would need, what the family will accept and how an exit would happen in each case, avoids months of negotiating a deal neither side wants.

                ## Milestones
                1. The family's stated and likely goals written down after a first meeting.
                2. Control and minority options compared on governance rights, exit route and returns.
                3. The minimum minority protections you would need listed.
                4. A recommendation on structure taken to partners or co-investors.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side comparison of control and minority options for the target, with a recommendation recorded by partners or co-investors."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down what the family has said about control and why"
                - "Compare control and minority options side by side for this target"
                - "List the minimum protections you would need as a minority holder"
                - "Present the comparison to partners or co-investors"
            - name: Choosing a DFI co-investor for a deal
              description: |-
                ## Purpose
                A DFI can bring patient capital, cheaper long-term debt and standing with banks and governments, but it also brings exclusion lists, E&S conditions, integrity reviews and an appraisal that can add months to a timetable. Comparing two or three DFIs on fit, speed and conditions for a specific deal, and talking to managers who have worked with each, lets you choose with eyes open.

                ## Milestones
                1. Two or three DFIs approached with a short teaser and asked about appetite.
                2. Each DFI's ticket size, timeline, conditions and exclusion list compared.
                3. Two managers who have co-invested with each DFI consulted.
                4. A preferred DFI chosen with the reasons recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two DFIs on ticket, timeline and conditions, with the chosen partner and reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Send a short anonymised teaser to two or three DFIs"
                - "Compare their ticket size, appraisal timeline and conditions"
                - "Ask two managers about their experience co-investing with each"
                - "Record which DFI you prefer and why"
            - name: Deferred consideration for family sellers
              description: |-
                ## Purpose
                A family owner wants certainty and a fair price, while you worry that profits depend on the owner's personal relationships with suppliers, government buyers or hotel groups. Earn-outs, vendor loans and staged purchases can bridge the gap, but in small markets they often end in family disputes, so designing an option with counsel, with simple metrics and a clear dispute route, keeps the relationship intact after the cheque clears.

                ## Milestones
                1. The specific risk the deferred element is meant to cover written down.
                2. Two or three structures compared with counsel for simplicity and risk.
                3. Metrics chosen that the owner's accountant can verify without argument.
                4. A dispute resolution route agreed in principle.

                ## Notes
                Tax treatment of deferred payments differs by country, and the owner needs their own adviser.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A chosen deferred structure with verifiable metrics and an agreed dispute route is recorded in the term sheet draft."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the one risk the deferred payment is meant to cover"
                - "Ask counsel to outline two or three deferred structures"
                - "Choose metrics the owner's accountant can verify"
                - "Agree a dispute route with the owner in principle"
            - name: Governance upgrade after investing in a family company
              description: |-
                ## Purpose
                Family companies often have a board of relatives that meets rarely, no audit committee and decisions taken at the dinner table. Agreeing a governance upgrade with the family, including independent directors from the region's limited pool, a board calendar, an audit committee and a related-party policy, protects minority investors and prepares the company for a sale or listing.

                ## Milestones
                1. A board composition agreed, including at least one independent director.
                2. A board calendar, pack format and minutes routine in place.
                3. An audit committee and a related-party transactions policy approved.
                4. A yearly board evaluation completed.

                ## Notes
                Start from the national corporate governance code where one exists. The pool of experienced independent directors is small, so look across islands and in the diaspora.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The board has at least one independent director, an audit committee and an approved related-party policy within a year of investment."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the national corporate governance code in the company's country"
                - "Shortlist independent directors from across the region and the diaspora"
                - "Draft a related-party transactions policy with counsel"
                - "Review board attendance, packs and decisions with the chair @recurring(quarterly)"
            - name: Shareholder agreement priorities for Caribbean stakes
              description: |-
                ## Purpose
                With few buyers and thin markets, the shareholder agreement is often your only route out: tag and drag rights, put options, information rights, reserved matters, deadlock and dispute resolution decide whether you can ever sell. Agreeing your priority list with counsel before negotiating, including where disputes would be heard and how a put option could actually be paid in hard currency, stops you trading away the clauses that matter.

                ## Milestones
                1. A ranked list of the shareholder rights you need, with fallbacks.
                2. Counsel's view recorded on how enforceable each is in the target's jurisdiction.
                3. Governing law and dispute forum preferences agreed, with arbitration considered.
                4. The list used in the first term sheet.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ranked rights list with fallbacks and counsel's enforceability notes exists and is reflected in the first term sheet."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Rank the shareholder rights you need from must have to nice to have"
                - "Ask counsel how enforceable each right is in the target's country"
                - "Decide your preferred governing law, forum and arbitration seat"
                - "Write fallback positions for the three rights you need most"
            - name: From compiled to audited accounts
              description: |-
                ## Purpose
                Exit buyers, DFIs, banks and stock exchanges all want audited financials, ideally two or three years of them under IFRS or IFRS for SMEs, and many family companies have only compiled accounts prepared for the tax authority. Planning the move to audited accounts, the auditor, the first-year adjustments and the finance hires starts the clock on a clean financial record early in the hold.

                ## Milestones
                1. The current accounting basis and its gaps against audited IFRS reporting documented.
                2. An audit firm with the capacity to meet the timetable appointed.
                3. Opening balance and related-party adjustments agreed.
                4. The first audited accounts signed within the agreed period after year end.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The company's first set of audited financial statements is signed by the auditor within the agreed period after year end."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the finance lead what basis the current accounts are prepared on"
                - "Get proposals from two audit firms that can meet the timetable"
                - "List the opening balance and related-party adjustments expected"
                - "Plan the finance hires needed to support the first audit"
            - name: Two-island site visit trip
              description: |-
                ## Purpose
                Plant tours, store visits and supplier meetings across two islands in one week need careful planning, since many inter-island routes run only a few times a week and schedules change at short notice. A planned trip with meetings, site visits and the questions you need answered makes the visit count and shows the family you take them seriously.

                ## Milestones
                1. Flights and a buffer day booked around inter-island schedules.
                2. Meetings with owners, managers, a banker and two customers confirmed.
                3. Site visit questions and an E&S checklist prepared.
                4. A trip note with findings written within three days of returning.

                ## Notes
                Start from the **Trip** template. Build in a spare day, as delayed inter-island connections are common.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The visit happens with all planned meetings held and a written trip note filed within three days of return."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Check inter-island flight days before fixing any meetings"
                - "Confirm meetings with owners, managers, a banker and two customers"
                - "Prepare site visit questions and the E&S checklist"
                - "Write the trip note within three days of returning"
            - name: First meeting with the owner's family
              description: |-
                ## Purpose
                Before any serious deal, a Caribbean family will want to meet you, often the founder, a spouse, the children who work in the business and sometimes those who do not. Preparing for it, knowing who will be there, what each person cares about, what you will not yet say about price and how you describe your plans for staff and the family name, builds the trust that numbers cannot.

                ## Milestones
                1. Attendees and their roles in the family and business identified in advance.
                2. A short, plain description of who you are and what you would change prepared.
                3. One question for each family member written.
                4. Notes and agreed next steps recorded the same day.

                ## Notes
                Start from the **Meeting notes** template. Do not lead with price or with what you would fix.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The family meeting takes place and same-day notes with agreed next steps are filed in the deal folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your contact who from the family will attend and their roles"
                - "Prepare a plain description of who you are and your intentions"
                - "Write one question for each family member"
                - "Record notes and next steps the same day"
            - name: Preparing a deal for a DFI investment committee
              description: |-
                ## Purpose
                Development finance committees look at development impact, E&S risk, integrity and additionality as well as returns, and the investment officer needs material from you to write their paper. Supplying a clear data pack, answering appraisal questions quickly and knowing the committee date lets you hold the deal timetable you promised the seller.

                ## Milestones
                1. The committee date and the documents the DFI needs listed.
                2. A data pack covering financials, impact, E&S and integrity delivered to the officer.
                3. Every appraisal question answered within an agreed turnaround.
                4. Committee approval or conditions received and recorded.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The DFI committee decision and any conditions are recorded, with every appraisal question logged and answered."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask the investment officer for the committee date and document list"
                - "Assemble the data pack on financials, impact, E&S and integrity"
                - "Track every appraisal question and its answer in one log"
                - "Record the committee outcome and any conditions"
            - name: Closing a cross-border Caribbean deal
              description: |-
                ## Purpose
                Deals with a target in one island, a holding company in another and investors in a third can carry a dozen conditions: exchange control approval, a land holding licence, regulator consent, bank consents, DFI conditions and stamp duty. A closing checklist with an owner and date for each condition, reviewed weekly with counsel, is what gets money moved and shares registered on the planned day.

                ## Milestones
                1. A conditions precedent checklist with an owner and expected date for each item.
                2. Weekly calls with counsel in each jurisdiction held until closing.
                3. Funds flow agreed with the banks, including any currency conversion.
                4. Share transfer registered and post-closing filings made.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every condition precedent is satisfied or waived, funds are received and the share transfer is registered."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List every condition precedent with an owner and expected date"
                - "Set a weekly call with counsel in each jurisdiction until closing"
                - "Agree the funds flow and currency conversion with each bank"
                - "Confirm share transfer registration and post-closing filings"
            - name: Regional LP tour for a Caribbean fund
              description: |-
                ## Purpose
                Pension funds, insurers and family offices in Kingston, Port of Spain, Bridgetown and Nassau prefer to meet face to face and often decide after hearing what their peers think. A planned tour, with a check on what local institutions may hold in private funds, materials adapted for each country and prompt follow-up, gives a regional raise momentum.

                ## Milestones
                1. Investment rules for local pension funds and insurers in each country checked with counsel.
                2. Meetings with at least eight institutions across three countries booked.
                3. Materials adapted for local currency and regulatory questions.
                4. Follow-ups sent and each LP's stage recorded within a week.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Meetings with at least eight institutions in three countries are held and each LP's stage is recorded within a week."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Ask counsel what local pension funds and insurers may hold in private funds"
                - "Book meetings with eight institutions across three countries"
                - "Adapt the pitch for local currency and regulatory questions"
                - "Send follow-ups and record each LP's stage within a week"
            - name: Diaspora professional investing back home
              description: |-
                ## Purpose
                Many Caribbean professionals in London, New York or Toronto want to invest in companies back home but have no deal flow, no local network and a demanding day job. A phased plan, starting with small co-investments alongside a trusted regional manager or angel group, building island relationships on trips home and learning the local rules, lets you build a record without risking money you cannot afford to lose.

                ## Milestones
                1. A budget, time limit and country focus written down.
                2. Two regional managers, angel networks or syndicates vetted as partners.
                3. A first small co-investment made after reading the full documents.
                4. A year-end review of time spent, relationships made and lessons learned.

                ## Notes
                Get tax advice in both your country of residence and the investee country before investing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written budget and focus, two vetted partners and a dated year-end review exist, whether or not a first investment is made."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write your budget, time limit and country focus"
                - "Vet two regional managers or angel groups you could invest alongside"
                - "Plan relationship meetings around your next trip home"
                - "Review the year's time, relationships and lessons @recurring(yearly)"
            - name: Courting local pension funds and insurers as anchors
              description: |-
                ## Purpose
                For a first Caribbean fund, local pension funds, insurers and national insurance schemes are natural anchors because they hold local currency and need long-term assets, but their investment rules, approval committees and regulators move slowly. Mapping which institutions can invest, the limits that apply and who decides, then building relationships a year before the raise, shortens the path to a first close.

                ## Milestones
                1. A list of eligible institutions per country with assets, regulatory limits and decision makers.
                2. Introductory meetings held with the top ten.
                3. Each institution's approval steps and timeline written down.
                4. Two soft indications of interest recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An institution map with limits and decision makers exists, ten introductory meetings are held and two soft indications are recorded."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List pension funds, insurers and national schemes in each core country"
                - "Ask counsel for the regulatory limits on private fund holdings"
                - "Book introductory meetings with the top ten institutions"
                - "Record each institution's approval steps and any soft interest"
            - name: Independent sponsor deal in the region
              description: |-
                ## Purpose
                Without a fund, a Caribbean independent sponsor must find the company first and then the money, often from regional family offices, DFIs and diaspora investors who each want a different structure. Lining up two or three capital partners before signing an exclusivity letter, and agreeing your fees and promote in writing, stops a good deal collapsing for lack of equity.

                ## Milestones
                1. Three potential capital partners briefed on your mandate.
                2. Fee, promote and governance terms agreed in a short term sheet with the lead partner.
                3. A target under exclusivity with equity committed in principle.
                4. Closing reached, or the deal released with lessons recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed term sheet with a lead capital partner covering fees and promote exists before exclusivity is signed with any target."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Brief three regional family offices or DFIs on your mandate"
                - "Agree a short term sheet on fees and promote with the lead partner"
                - "Confirm equity in principle before signing exclusivity"
                - "Write the lessons whether the deal closes or not"
            - name: Family office taking direct private stakes
              description: |-
                ## Purpose
                Regional family offices and business families increasingly invest directly in neighbours' companies, often on a handshake and without the documents or monitoring an institution would insist on. A simple process for these stakes, covering an investment memo, a shareholder agreement, quarterly information and a board seat or observer, protects the family's money and relationships when a deal goes wrong.

                ## Milestones
                1. A one-page investment process agreed with the family principals.
                2. Each existing private stake reviewed for documents and information rights.
                3. Quarterly information received from every holding.
                4. The most serious gap in documents or rights fixed with counsel.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An agreed one-page process exists and every direct stake has documents on file and has sent quarterly financials."
                cadence: rolling
              tasks:
                - "List every direct private stake the family holds and the documents on file"
                - "Agree a one-page investment process with the principals"
                - "Request quarterly financials from each holding @recurring(quarterly)"
                - "Ask counsel to fix the most serious documentation gap"
            - name: DFI investment officer covering many small markets
              description: |-
                ## Purpose
                An investment officer at a development finance institution may cover ten or more Caribbean countries from Washington, Bridgetown or Kingston, with small deals that cost as much to appraise as large ones. A portfolio and pipeline routine, with monthly client calls, a country file per market and travel planned around clusters of islands, keeps the workload manageable and the clients served.

                ## Milestones
                1. Clients and pipeline deals listed by country with next actions.
                2. A country file per market with macro, regulatory and political notes.
                3. Travel planned around a cluster of islands each quarter.
                4. Monthly client calls kept for six months.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every client has a monthly call logged for six months and every market has a country file updated within the last quarter."
                cadence: rolling
              tasks:
                - "List clients and pipeline deals by country with next actions"
                - "Call each client for a short update @recurring(monthly:26)"
                - "Update the country file after each call or trip"
                - "Plan next quarter's travel around a cluster of islands"
            - name: Working on a regional conglomerate's investment team
              description: |-
                ## Purpose
                Large regional groups in food, distribution, financial services and energy are among the most active buyers of Caribbean companies, and their corporate development teams run deals with a parent board, family shareholders and listed market disclosure rules in mind. Learning how acquisitions are approved and integrated inside a group helps you move deals quickly and judge which targets fit the group's real strategy.

                ## Milestones
                1. The group's approval route, thresholds and board calendar documented.
                2. Three past acquisitions reviewed for what worked and what did not.
                3. Listed company disclosure duties on deals noted with the company secretary.
                4. A target fit test agreed with the head of strategy.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note of approval thresholds, disclosure duties and an agreed target fit test exists, plus reviews of three past deals."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map the group's approval thresholds and board calendar"
                - "Review three past acquisitions with the people who ran them"
                - "Ask the company secretary about deal disclosure duties"
                - "Agree a target fit test with the head of strategy"
            - name: Exit routes in thin regional markets
              description: |-
                ## Purpose
                Exits in the Caribbean usually come through a sale to a regional group, a sale to another fund or DFI, a management or family buyback, or a partial listing, and each depends on buyers you can count on two hands. Mapping the realistic buyers for each holding years ahead, and building the relationships and documents to suit, turns exit from hope into a plan.

                ## Milestones
                1. A list of realistic buyers by route for each holding.
                2. Contact made with the three most likely buyers for each holding.
                3. The documents each route needs, such as audited accounts, clean title and approvals, checked.
                4. The exit plan reviewed with co-investors each year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each holding has a written list of realistic buyers by route and a preferred route agreed with co-investors in the last year."
                cadence: cyclic
              tasks:
                - "List realistic buyers for each holding by exit route"
                - "Meet the three most likely buyers for each holding informally"
                - "Check what each route needs in audited accounts, title and approvals"
                - "Review the exit plan with co-investors @recurring(yearly)"
            - name: Blended finance with concessional capital
              description: |-
                ## Purpose
                Climate adaptation, renewable energy, agriculture and small business lending in the region often only work with a layer of concessional money: a first-loss tranche, a technical assistance grant or a guarantee from a DFI or climate fund. Understanding how these layers are structured and governed, and what their providers want reported, lets you put together deals that purely commercial capital will not fund.

                ## Milestones
                1. Three regional blended finance transactions studied from public disclosures.
                2. Providers of first-loss, guarantee and technical assistance funding listed with criteria.
                3. A structure outline for one real opportunity reviewed by a DFI contact.
                4. Reporting and governance duties for the concessional layer listed.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three studied transactions, a provider list and one structure outline reviewed by a DFI contact are on file."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find three regional blended finance deals in DFI disclosures"
                - "List first-loss, guarantee and technical assistance providers with criteria"
                - "Sketch a blended structure for one real opportunity"
                - "Ask a DFI contact to critique the outline"
            - name: Cross-island buy-and-build integration
              description: |-
                ## Purpose
                Combining a distributor in Barbados with others in St Lucia and Grenada sounds simple until you meet three company registries, different VAT systems, shipping between islands, separate banks and staff who have competed for years. A plan for which functions to merge, which to keep local and how cash moves between islands keeps a regional platform from becoming three companies sharing a logo.

                ## Milestones
                1. Every function classed as merge, share or keep local, with reasons.
                2. Intercompany and cash movement arrangements agreed with tax and banking advisers.
                3. One integrated reporting pack covering all islands.
                4. Key local managers retained through integration.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A function-by-function integration plan and one reporting pack covering all islands are in use, with key managers retained."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Class each function as merge, share or keep local"
                - "Ask advisers how cash and intercompany charges can move between islands"
                - "Design one reporting pack covering every island"
                - "Agree retention terms with key local managers"
            - name: Tourism and hospitality asset deals
              description: |-
                ## Purpose
                Hotels, villas, attractions and tour operators dominate deal flow in many islands, and they rise and fall with airlift, cruise schedules, the North American and European winter and the storm season. Tracking arrivals, occupancy and rate data, airline route changes and hotel brand agreements, and testing every model against a lost season, separates sound tourism deals from optimistic ones.

                ## Milestones
                1. A data set of arrivals, occupancy and room rates for your core islands.
                2. Airlift and cruise schedule changes tracked through a season.
                3. Brand and management agreement terms reviewed with counsel on one deal.
                4. A lost-season downside case built into every tourism model.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A tourism data set for core islands is refreshed each year and every tourism model on file includes a lost-season case."
                cadence: cyclic
              tasks:
                - "Collect arrivals, occupancy and rate data from the tourism authorities"
                - "Track airline route announcements for your core islands"
                - "Review one hotel management agreement with counsel"
                - "Refresh the tourism data at the end of each winter season @recurring(yearly)"
            - name: Guyana and Suriname energy economy opportunities
              description: |-
                ## Purpose
                Offshore oil production has made Guyana one of the fastest growing economies in the world, and Suriname's offshore discoveries may follow, creating demand for logistics, construction, housing, food and services. Local content legislation, fast rising costs, land title questions and capacity limits mean deals need careful local partners and a sober view of how long the boom lasts.

                ## Milestones
                1. Local content rules and any reserved sectors summarised with counsel.
                2. Ten service companies growing with the energy sector mapped.
                3. Two potential local partners met and referenced.
                4. Commodity cycle risks written for each opportunity.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A counsel-checked local content summary, a map of ten service companies and two referenced partners are on file."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the current local content legislation and its reserved sector list"
                - "Map ten service companies growing with the energy sector"
                - "Meet and reference two potential local partners"
                - "Write the commodity cycle risks for each opportunity"
            - name: Renewable energy on island grids
              description: |-
                ## Purpose
                Island electricity costs are among the highest anywhere because most grids burn imported fuel, so solar, wind, storage and geothermal projects attract DFIs and climate funds. The investment case depends on the utility's licence, the power purchase agreement, grid limits on intermittent power and the regulator's approach, which range from a vertically integrated monopoly to open procurement.

                ## Milestones
                1. Utility structure, regulator and procurement route recorded for each core island.
                2. One power purchase agreement reviewed with counsel for currency, tenor and curtailment terms.
                3. Grid limits and storage requirements discussed with the utility or regulator.
                4. A shortlist of projects that fit your mandate.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A utility and regulator note per core island, one reviewed power purchase agreement and a project shortlist are on file."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Record the utility structure and regulator for each core island"
                - "Review one power purchase agreement with counsel"
                - "Ask the regulator or utility about grid limits on intermittent power"
                - "Shortlist projects that fit your mandate"
            - name: Distressed and restructuring situations
              description: |-
                ## Purpose
                Debt restructurings, tourism collapses and currency shocks leave good Caribbean companies with the wrong balance sheet, and banks, receivers and families sometimes look for new equity. Working these situations needs insolvency counsel in the right jurisdiction, a clear view of secured creditors and their rights, and patience with processes that can run for years.

                ## Milestones
                1. Insolvency and receivership regimes summarised for your core countries with counsel.
                2. Relationships opened with two bank workout teams and two receivers.
                3. One distressed situation assessed for creditor ranking and timeline.
                4. A decision recorded to pursue or pass, with the reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A counsel-reviewed insolvency summary exists and one distressed situation has a recorded pursue or pass decision with reasons."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Ask insolvency counsel to outline the regimes in your core countries"
                - "Introduce yourself to two bank workout teams"
                - "Assess one distressed situation for creditor ranking and timeline"
                - "Record your decision to pursue or pass, with reasons"
---

# Caribbean Private Capital Deals

This area is for people putting private money into Caribbean companies, whether at a regional fund, a development finance institution, a family office or on their own account, and for founders launching a regional fund or doing deals as an independent sponsor. It runs from foundations (a market map, your mandate, currency and legal fact sheets, advisers, structures and approvals) through the operating rhythms, the skills of reading family companies and thin markets, the decisions on currency, control and partners, dated events from site visits to closings, plans for diaspora investors, fund founders, family offices and DFI officers, and finally specialist work in tourism, energy, blended finance and distressed situations.

What repeats is a monthly macro and currency watch, a DFI programme scan, owner touchpoints and a reading hour, quarterly impact reports, E&S reviews, distribution logs and board reviews, and a yearly hurricane season check, integrity refresh and exit plan review. The Risk register, Vendor, Reading queue, Metrics log, Trip and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
