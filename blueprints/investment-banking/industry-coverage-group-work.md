---
id: investment-banking.industry-coverage-group-work
name: Industry Coverage Group Work
description: "Sector knowledge built on purpose: a coverage universe map, company profiles, earnings and deal trackers, a weekly market update, an idea log and the habits that make you the person who knows the sector."
category: business
version: 1.0.0
tags: [investment-banking, industry-coverage-group-work, knowledge-worker, analyst, associate, sector-coverage, market-updates, idea-generation]
author: Aurum Technology
starter_structure:
  templates:
    - onboarding-30-60-90
    - reading-queue
    - meeting-notes
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Industry Coverage Group Work
          description: "Working in an industry coverage group: sector knowledge, company profiles, market updates, idea generation and knowing the clients in your sector."
          projects:
            - name: Coverage universe map for your sector
              description: |-
                ## Purpose
                Most new joiners can name the ten largest companies in their sector and almost nothing below them, which is where much of the mid-market deal flow sits. A single map of every company your group covers or could cover, split by subsector, listed or private, size band and owner type, becomes the base for every profile, screen and idea that follows.

                ## Milestones
                1. A spreadsheet listing every company in the coverage universe with subsector, country, listing status and owner type.
                2. Each company given a size band by revenue or enterprise value from public sources.
                3. Sponsor-owned, family-owned and state-owned companies flagged in their own column.
                4. The map reviewed by a senior banker in the group and gaps filled.

                ## Notes
                Ask what the group already holds before building. Many groups have an old universe file that only needs cleaning, not a new one.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A universe map of at least the top 100 sector companies by subsector, size and owner type, reviewed by a senior banker."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the group associate whether a universe file already exists"
                - "List the subsectors the group uses to divide its coverage"
                - "Fill in listing status, size band and owner type for each company"
                - "Refresh the universe map for new listings, take-privates and failures @recurring(yearly)"
            - name: First-month sector primer reading list
              description: |-
                ## Purpose
                Bankers who can explain how their sector makes money within a month of joining get pulled into client work sooner. A short, ordered reading list of two industry primers, three recent annual reports from different subsectors, one regulator overview and the group's own last sector outlook gets you there faster than reading whatever lands in the inbox.

                ## Milestones
                1. A list of eight to ten sources agreed with an associate or VP in the group.
                2. Each source read with one page of notes on drivers, risks and vocabulary.
                3. A one-page summary of how the sector makes money, written in your own words.
                4. The summary checked by a senior colleague and corrected.

                ## Notes
                Broker initiation reports are often the best primers available. Read two from different houses so you see where analysts disagree.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight or more primer sources read and a one-page sector economics summary reviewed by a senior colleague within 30 days."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask a VP for the three sources they wish they had read first"
                - "Pull two broker initiation reports on the sector from different houses"
                - "Write one page of notes after each source"
                - "Draft a one-page summary of how the sector makes money"
            - name: Sector metrics and vocabulary sheet
              description: |-
                ## Purpose
                Every sector has its own language: same-store sales, ARPU, load factor, combined ratio, reserve replacement, net interest margin. Getting one wrong in front of a client CFO costs credibility you will spend months rebuilding, so a single reference sheet of the twenty terms and metrics your sector lives by, with definitions and typical ranges, pays back on the first call.

                ## Milestones
                1. Twenty sector terms and metrics listed with plain definitions.
                2. Each metric linked to where it appears in company filings or presentations.
                3. Typical ranges noted from public sources, marked as indicative only.
                4. The sheet saved where you can open it during a call.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reference sheet of at least twenty sector metrics with definitions and filing sources, saved and in use."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect every unfamiliar term from your first three annual reports"
                - "Write a one-line definition for each in plain words"
                - "Note which page of a filing reports each metric"
                - "Ask the agent to quiz you on the sheet before your next client call"
            - name: Review of the group's last three years of deals
              description: |-
                ## Purpose
                Clients and MDs will refer to past deals as if you were there, and the group's history shows which clients trust it and which subsectors it actually wins in. Reading the announcements and final materials for every deal the group closed in the last three years gives you that shared memory in a few evenings.

                ## Milestones
                1. A list of every deal the group closed in three years, with client, type and size.
                2. The announcement and one final presentation read for the ten largest.
                3. Repeat clients and the subsectors with the most activity marked.
                4. Three questions about past deals answered by the senior banker who led them.

                ## Notes
                Use only the group's approved archive and keep any notes inside the bank's systems. Past deal materials remain confidential.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A three-year deal list for the group with repeat clients marked and the ten largest deals read in full."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the group coordinator where closed deal materials are archived"
                - "List every closed deal from the last three years with client and type"
                - "Read the announcement and final deck for the ten largest"
                - "Mark the clients that appear more than once"
            - name: Group coverage roster of bankers and clients
              description: |-
                ## Purpose
                Within a week someone will ask you who covers a company, and guessing wrong can put two MDs on the same client. A roster of which senior banker covers which client, which product partners they work with and who the analyst or associate contact is saves those mistakes and shows where your own time will be spent.

                ## Milestones
                1. Every senior banker in the group listed with the clients they cover.
                2. Product group partners noted for each major client.
                3. Clients without a named coverage banker flagged.
                4. The roster confirmed with the group head's assistant or business manager.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A roster mapping each group client to its coverage banker and product partners, confirmed by the business manager."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the business manager for the current coverage assignment list"
                - "Add the product partners each senior banker works with most"
                - "Flag clients with no named coverage banker"
                - "Send the roster to the business manager to confirm"
            - name: Sector data sources and access set-up
              description: |-
                ## Purpose
                Coverage work depends on fast access to filings, consensus estimates, deal databases, broker research and industry data, and requests for logins often take a week or more. Requesting everything in your first fortnight, and knowing which source the group trusts for which number, stops you building pages from whatever opens first.

                ## Milestones
                1. Access confirmed to the bank's market data terminal, deal database and research portal.
                2. Any sector-specific databases the group pays for identified and requested.
                3. A note of which source the group uses for consensus, deal values and share prices.
                4. Saved screens or watchlists for the coverage universe in each tool.

                ## Notes
                Do not sign up for outside data services with a work email without checking the firm's vendor and compliance rules first.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Working access to every data source the group uses, with saved watchlists for the coverage universe, within 14 days."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask an analyst which data tools the group uses daily"
                - "Submit access requests for each tool you do not yet have"
                - "Build a watchlist of the coverage universe in the market data terminal"
                - "Write down which source the group trusts for each common number"
            - name: Standard company profile one-pager
              description: |-
                ## Purpose
                Senior bankers ask for a company profile before almost every client meeting, often with an hour's notice. Agreeing one house layout for a sector profile (business description, segments, key financials, share price, ownership, management, recent news) means every profile looks the same and can be produced in thirty minutes.

                ## Milestones
                1. Three recent profiles from the group compared for common sections.
                2. A one-page layout with fixed fields and sources for each.
                3. The layout approved by an associate or VP.
                4. Two pilot profiles built on it and timed.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved profile layout with sourced fields, tested on two companies, each built in under one hour."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect three recent company profiles produced by the group"
                - "List the sections they share and the ones that vary"
                - "Draft a one-page layout with a source for every field"
                - "Build two pilot profiles and time each one"
            - name: Top twenty clients briefing file
              description: |-
                ## Purpose
                Knowing the clients in your sector means knowing their strategy, their last results, who runs the company and what the bank has done for them. A short briefing note on each of the group's twenty most important clients, kept in one file, is what you open when an MD calls from the taxi on the way to a meeting.

                ## Milestones
                1. The twenty priority clients agreed with a senior banker.
                2. A half-page note on each: strategy, recent results, management, the bank's history with them.
                3. Each note dated and its sources listed.
                4. The file stored where the whole deal team can reach it.

                ## Notes
                Keep anything the bank learned privately out of a shared file unless compliance has confirmed who may see it.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Dated half-page briefing notes on the group's twenty priority clients, refreshed each quarter."
                cadence: rolling
              tasks:
                - "Ask your VP which twenty clients matter most this year"
                - "Write a half-page note on the first five"
                - "Add the bank's recent work for each client from the deal records"
                - "Refresh the briefing notes after each earnings season @recurring(quarterly)"
            - name: Sector value chain and profit pool diagram
              description: |-
                ## Purpose
                Ideas get better when you can see where in the value chain profit sits and who is squeezed. One diagram running from raw inputs to the end customer, with typical margins at each stage and the main companies at each step, explains the sector to a new client, a product partner or yourself in a single page.

                ## Milestones
                1. The value chain drawn in five to eight stages.
                2. Typical margin ranges at each stage taken from public filings.
                3. Three to five named companies placed at each stage.
                4. Stages where consolidation or disruption is happening marked.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page value chain diagram with margins and named companies at each stage, used in at least one internal discussion."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the stages from input supplier to end customer"
                - "Pull segment margins for two companies at each stage"
                - "Place the main coverage companies on the diagram"
                - "Mark the stages where deal activity is concentrated"
            - name: Regulatory landscape note for the sector
              description: |-
                ## Purpose
                Regulation decides which deals are possible in many sectors: banking capital rules, healthcare pricing, telecom spectrum, energy licences, competition reviews. A short note of the regulators, the rules that drive strategy and the consultations under way lets you spot when a rule change will force companies to sell, merge or raise money.

                ## Milestones
                1. The main regulators for the sector listed with what each controls.
                2. Five rules or regimes that shape strategy summarised in a paragraph each.
                3. Open consultations and expected decisions listed with indicative timing.
                4. A note of where a regulatory change would create deal activity.

                ## Notes
                This is a map for idea generation, not legal analysis. Any client question about how a rule applies goes to counsel.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A regulatory note naming the sector's regulators, five key regimes and open consultations, reviewed monthly."
                cadence: rolling
              tasks:
                - "List the regulators that license or supervise companies in the sector"
                - "Summarise the five rules that most shape company strategy"
                - "Check regulator websites for new consultations and decisions @recurring(monthly:18)"
                - "Note which rule changes could prompt a sale, merger or capital raise"
            - name: Morning sector news scan
              description: |-
                ## Purpose
                Senior bankers expect the coverage team to know about a sector announcement before the client mentions it. Fifteen minutes each morning on the overnight news, filings and share price moves for the coverage universe, with anything material sent to the right banker in two lines, is the habit that builds that reputation.

                ## Milestones
                1. A fixed list of news sources and alerts for the sector set up.
                2. A fifteen-minute scan done before the first internal call each day.
                3. Material items sent to the covering banker in a short note.
                4. A month of scans without a client surprising the team with news.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A morning scan done on working days for four weeks, with material news passed to the covering banker the same morning."
                cadence: rolling
              tasks:
                - "Set up news and filing alerts for the top fifty coverage companies"
                - "Scan overnight sector news, filings and price moves for fifteen minutes @recurring(daily)"
                - "Send material items to the covering banker in two lines"
                - "Prune alerts that produced nothing useful in the last month"
            - name: Weekly sector market update pages
              description: |-
                ## Purpose
                Many coverage groups send clients or internal teams a weekly update: share price performance, valuation levels, deals announced and notable news. Doing it on a fixed day, from a template that refreshes in under two hours, turns a dreaded task into one of the best ways to learn the sector.

                ## Milestones
                1. A template for the weekly update agreed with the group.
                2. Data links that refresh prices, indices and deal lists automatically where possible.
                3. The update sent on the same day each week.
                4. Preparation time below two hours after the first month.

                ## Notes
                Every number in a client-facing update needs a source and date. Check the group's disclaimer and distribution rules before anything leaves the bank.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A weekly sector update sent on the same day for eight consecutive weeks, prepared in under two hours each time."
                cadence: rolling
              tasks:
                - "Copy the latest weekly update and list every page and data source"
                - "Prepare and send the weekly sector update @recurring(weekly:mon)"
                - "Time each update and note the slowest page"
                - "Ask an associate for one improvement after the fourth update"
            - name: Earnings season tracker and summaries
              description: |-
                ## Purpose
                Results season is when the coverage universe tells you the most in the shortest time. A tracker with every reporting date, a two-paragraph summary of each print against consensus, and a short end-of-season view of themes gives senior bankers talking points for every client call that quarter.

                ## Milestones
                1. A calendar of reporting dates for the coverage universe for the season.
                2. A two-paragraph summary filed within a day of each major print.
                3. Results set against consensus for revenue, margins and guidance.
                4. A one-page end-of-season themes note sent to the group.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every major coverage company's results summarised within one day of reporting, plus a themes note at season end."
                cadence: cyclic
              tasks:
                - "Build the reporting calendar for the coming earnings season @recurring(quarterly)"
                - "Pull consensus estimates for the ten largest companies before they report"
                - "File a two-paragraph summary within a day of each major print"
                - "Write the end-of-season themes note for the group"
            - name: Company profile library upkeep
              description: |-
                ## Purpose
                A profile that is three months old will show the wrong share price, the old CFO and last year's guidance, and someone will eventually send it to a client. Refreshing the library on a fixed day each month, starting with the clients most likely to come up, keeps every profile safe to use at short notice.

                ## Milestones
                1. All profiles held in one folder with the last refresh date in the file name.
                2. Profiles for the top twenty clients refreshed monthly.
                3. Profiles for the rest of the universe refreshed at least each quarter.
                4. Profiles for acquired or delisted companies archived.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No top-twenty client profile older than 35 days and no other profile older than one quarter."
                cadence: rolling
              tasks:
                - "Rename every profile with its last refresh date"
                - "Refresh the top twenty client profiles @recurring(monthly:12)"
                - "Archive profiles for companies acquired or delisted"
                - "Ask the agent to list profiles older than one quarter"
            - name: Sector share price performance dashboard
              description: |-
                ## Purpose
                Clients ask how their shares have done against the sector and the market, and the answer shapes whether they think about buying, selling or raising money. A dashboard of one, three and twelve month performance by subsector against the main index, refreshed each Friday, lets you answer in a minute and spot companies falling behind.

                ## Milestones
                1. Subsector baskets defined from the universe map.
                2. One, three and twelve month performance against the index for each basket.
                3. The ten best and worst performers listed each week.
                4. Notable underperformers passed to the covering banker.

                ## Notes
                Performance figures are for discussion and idea generation only. They are not views on whether anyone should buy or sell a share.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dashboard of subsector performance against the index refreshed every Friday for two months."
                cadence: rolling
              tasks:
                - "Define subsector baskets from the coverage universe map"
                - "Refresh the performance dashboard @recurring(weekly:fri)"
                - "List the ten best and worst performers each week"
                - "Flag sustained underperformers to the covering banker"
            - name: Sector deal flow log
              description: |-
                ## Purpose
                Every announced deal in your sector is a data point on who is buying, what they pay and which assets are next. Logging each one weekly with buyer, seller, size, rationale and advisers builds a record that feeds the update pages, idea meetings and the conversations where an MD asks what has traded recently.

                ## Milestones
                1. A log with fixed columns for date, buyer, target, seller, value, rationale and advisers.
                2. Every announced sector deal over a set size logged each week.
                3. Rumoured deals kept in a separate tab and marked as unconfirmed.
                4. A quarterly count of deals by subsector and buyer type.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every announced sector deal above the agreed size logged within a week, with a quarterly summary by subsector."
                cadence: rolling
              tasks:
                - "Agree the minimum deal size to log with your associate"
                - "Log the week's announced sector deals @recurring(weekly:wed)"
                - "Keep rumoured deals in a separate tab marked unconfirmed"
                - "Count deals by subsector and buyer type at quarter end"
            - name: Sector idea log and monthly idea review
              description: |-
                ## Purpose
                Ideas are the currency of a coverage group, and most of them are lost because nobody wrote them down. A shared log of every idea (who could buy whom, which company should refinance, which division could be sold) with the reasoning and a status, reviewed once a month, turns stray thoughts into a pipeline seniors can take to clients.

                ## Milestones
                1. A log with columns for idea, companies, rationale, product, source and status.
                2. At least two new ideas added by you each month.
                3. A monthly review where each idea is kept, developed or dropped.
                4. One idea turned into pages for a senior banker each quarter.

                ## Notes
                Ideas come from public information, earnings calls and sector logic. If an idea relies on something learned on a live deal, check with compliance before it goes in a shared log.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An idea log with at least two new entries from you each month and a recorded monthly review of every open idea."
                cadence: rolling
              tasks:
                - "Set up the idea log with fixed columns and a status field"
                - "Add two ideas from this week's news and results"
                - "Review every open idea with the team @recurring(monthly:20)"
                - "Turn the strongest idea into a two-page discussion draft"
            - name: Sector conference and investor day calendar
              description: |-
                ## Purpose
                Industry conferences and company investor days are where strategy shifts are announced and where senior bankers book client meetings. A calendar of the year's main events, with who is presenting and who from the group is going, stops the team missing the dates that matter and gives you time to prepare.

                ## Milestones
                1. The year's main sector conferences listed with dates and locations.
                2. Investor days and capital markets days for coverage companies added.
                3. Attending bankers noted for each event.
                4. The calendar shared with the group.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A shared calendar of the year's sector conferences and investor days, updated monthly, with attendees noted."
                cadence: rolling
              tasks:
                - "List the five biggest conferences for the sector this year"
                - "Add announced investor days from company websites"
                - "Check for newly announced sector events @recurring(monthly:3)"
                - "Ask the group who plans to attend each event"
            - name: Weekly broker research and industry report reading
              description: |-
                ## Purpose
                Equity research analysts and industry bodies publish more sector analysis each week than anyone can read, and the useful pieces get buried. Ninety minutes on a fixed afternoon, working through a short queue chosen by headline, keeps your sector view current and gives you sources to cite when building pages.

                ## Milestones
                1. A reading queue fed by research alerts and industry newsletters.
                2. Ninety minutes of reading held on the same afternoon each week.
                3. Three takeaways noted from each piece read.
                4. A month of notes reread to spot recurring themes.

                ## Notes
                Start from the **Reading queue** template. Research is shared within the bank under its own rules, so check before forwarding any report outside the group.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly reading sessions held for eight weeks with three noted takeaways per piece."
                cadence: rolling
              tasks:
                - "Set research portal alerts for the sector and the top twenty clients"
                - "Work through the reading queue for ninety minutes @recurring(weekly:tue)"
                - "Note three takeaways from each piece you finish"
                - "Reread the month's notes and list the themes that recur"
            - name: Management and board changes tracker
              description: |-
                ## Purpose
                A new CEO or CFO is one of the strongest signals that a company will change strategy, sell assets or raise money in the next eighteen months. Tracking senior appointments and departures across the coverage universe each month gives the group a reason to call and an early read on who will be making decisions.

                ## Milestones
                1. A tracker of CEO, CFO, chair and strategy head for each priority company.
                2. Changes logged monthly from announcements and filings.
                3. Each new appointment's background noted in a line.
                4. New appointments passed to the covering banker with a suggested reason to call.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A monthly updated tracker of senior management for priority companies, with every change passed to the covering banker."
                cadence: rolling
              tasks:
                - "List the CEO, CFO and chair of each top fifty company"
                - "Log senior appointments and departures from the month's announcements @recurring(monthly:25)"
                - "Write a one-line background for each new appointee"
                - "Send new appointments to the covering banker"
            - name: Reading a sector annual report in two hours
              description: |-
                ## Purpose
                Annual reports run to two hundred pages and a coverage analyst needs the twenty that matter: segment data, the strategy section, risk factors, debt maturities, major shareholders and the notes that hide one-off items. Practising a fixed reading order on three reports makes you fast enough to brief a senior banker the same afternoon.

                ## Milestones
                1. A written reading order for annual reports in the sector.
                2. Three reports read in under two hours each using it.
                3. A one-page brief written from each report.
                4. The briefs checked by an associate for anything missed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three sector annual reports read in under two hours each, with one-page briefs reviewed by an associate."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask an associate which sections they read first in an annual report"
                - "Write your reading order on a single page"
                - "Read one report against the clock and write the brief"
                - "Repeat with two more reports from different subsectors"
            - name: Sector value drivers and what moves multiples
              description: |-
                ## Purpose
                Knowing the metrics is not the same as knowing which ones investors pay for. Working out why some companies in the sector trade at a premium (growth, margin, recurring revenue, balance sheet, regulatory position) lets you explain a client's valuation in their own terms and spot when a deal could change it.

                ## Milestones
                1. Five value drivers for the sector identified from research and investor presentations.
                2. Premium and discount companies compared on each driver.
                3. A one-page explanation of why the gap exists.
                4. The explanation discussed with a senior banker and refined.

                ## Notes
                Keep this to sector logic. The comps model itself belongs with whoever owns trading comparables in the group.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note naming five sector value drivers and explaining premium and discount companies, reviewed by a senior banker."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the metrics investor presentations in the sector lead with"
                - "Pick three premium and three discount companies from the latest update"
                - "Compare them on growth, margin, revenue quality and balance sheet"
                - "Draft a one-page explanation of the valuation gap"
            - name: Writing a two-paragraph earnings summary
              description: |-
                ## Purpose
                Senior bankers read results summaries on their phone between meetings, so a page of numbers is wasted. Learning to write two paragraphs (what happened against expectations, what management said about the future and what it means for the bank) is a skill you will use every quarter for the rest of your career.

                ## Milestones
                1. Three good summaries from colleagues collected as models.
                2. A fixed structure for the two paragraphs written down.
                3. Five practice summaries written within an hour of each results release.
                4. Feedback from a VP on clarity and length taken in.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five earnings summaries of under 200 words each written within an hour of release, with VP feedback recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Save three summaries from colleagues that seniors praised"
                - "Write down the two-paragraph structure you will follow"
                - "Write a practice summary within an hour of the next results release"
                - "Ask a VP which of your summaries was most useful and why"
            - name: Sector themes slide that holds up
              description: |-
                ## Purpose
                Almost every client meeting opens with the bank's view of the sector, usually a single slide of four or five themes. Building one that is specific to this year, backed by numbers and linked to what clients could do about each theme, is harder than it looks and is noticed by MDs.

                ## Milestones
                1. Eight candidate themes drawn from results, research and deal flow.
                2. The list cut to four or five, each backed by a number and a source.
                3. A so-what line for each theme naming a possible client action.
                4. The slide used in a real meeting book.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sector themes slide with four or five sourced themes and client actions, used in at least one meeting book."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List eight themes from the last earnings season and deal log"
                - "Find one number and source to back each theme"
                - "Cut the list to five and add a client action line to each"
                - "Ask an MD to mark up the draft slide"
            - name: Expert and industry contact calls done properly
              description: |-
                ## Purpose
                Talking to people who work in the sector, through the bank's approved expert network or your own industry contacts, explains what filings cannot: how buyers choose suppliers, where prices are heading, which competitors are struggling. Doing it inside the compliance rules and with a prepared question list makes each call worth the hour.

                ## Milestones
                1. The bank's rules on expert calls and industry contacts read and understood.
                2. A question list prepared for each call.
                3. Three calls held and notes filed where the rules require.
                4. Insights from the calls reflected in one sector piece.

                ## Notes
                Start from the **Meeting notes** template for each call. Never ask a contact for confidential information about their employer or its clients, and stop the call if they offer it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three expert or industry calls held within the bank's rules, with notes filed and insights used in a sector piece."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the bank's policy on expert networks and industry contacts"
                - "Write ten questions on a sector topic you cannot answer from filings"
                - "Book the first call through the approved channel"
                - "File the call notes and note what changed in your view"
            - name: Case studies of five recent sector deals
              description: |-
                ## Purpose
                Understanding why deals in your sector happened (the strategic logic, the price, the structure, how the market reacted) is how coverage bankers learn to spot the next one. Five short case studies of recent announced deals, built from public documents, train the pattern recognition that idea generation depends on.

                ## Milestones
                1. Five announced deals from the last two years chosen across different subsectors and buyer types.
                2. A one-page case study for each covering rationale, price, structure and share price reaction.
                3. Common patterns across the five written up in a paragraph.
                4. The case studies discussed with a senior banker.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five one-page deal case studies built from public documents, with a written summary of common patterns."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick five recent deals from the sector deal log"
                - "Read each announcement, investor presentation and analyst reaction"
                - "Write a one-page case study for each deal"
                - "Summarise the patterns that repeat across the five"
            - name: Sponsor-owned assets and hold periods map
              description: |-
                ## Purpose
                Private equity firms usually sell within four to seven years of buying, which makes sponsor-owned companies in your sector some of the most predictable future deals. A map of each sponsor-owned asset, when it was bought and by which fund vintage, tells the group which owners are likely to be thinking about an exit soon.

                ## Milestones
                1. Every sponsor-owned company in the universe listed with owner and acquisition date.
                2. Hold periods calculated and assets past four years flagged.
                3. Fund vintage noted where public, to show pressure to return capital.
                4. The flagged list shared with coverage bankers and the sponsors group.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A list of sponsor-owned sector companies with hold periods, refreshed quarterly and shared with the sponsors group."
                cadence: rolling
              tasks:
                - "Filter the universe map for sponsor-owned companies"
                - "Add acquisition date and owning fund for each from the deal database"
                - "Flag assets held for more than four years"
                - "Refresh hold periods and new sponsor deals @recurring(quarterly)"
            - name: Choosing a subsector to become known for
              description: |-
                ## Purpose
                Broad sector knowledge gets you staffed; being the person who knows one subsector best gets you remembered and, later, gets you client relationships. Choosing a subsector on purpose, by deal activity, the group's gaps and your own interest, gives your next two years of reading and ideas a direction.

                ## Milestones
                1. Three candidate subsectors compared on deal count, group coverage and your interest.
                2. The group's existing specialists in each identified.
                3. A choice made and discussed with your staffer or mentor.
                4. A short plan for the first six months in the chosen subsector.

                ## Notes
                Pick a subsector with steady deal flow and no dominant junior specialist already in the group, rather than the fashionable one.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen subsector, recorded with the reasons and a six-month plan, discussed with a mentor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count deals by subsector from the last two years of the deal log"
                - "Ask your mentor which subsectors the group lacks depth in"
                - "Score three candidates on activity, gaps and interest"
                - "Write the choice and a six-month plan in one page"
            - name: Cutting the weekly update to under ninety minutes
              description: |-
                ## Purpose
                Weekly updates often grow a page every time someone asks a question and never shrink, until they eat half a Monday. Auditing which pages anyone reads, automating the data refresh and cutting the rest can halve the time and make the update better.

                ## Milestones
                1. Time spent on each page of the update measured for two weeks.
                2. Recipients asked which pages they use.
                3. Unused pages cut and data pages linked to live sources.
                4. Preparation time below ninety minutes for four weeks running.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Weekly update preparation time below ninety minutes for four consecutive weeks, with unused pages removed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Time each page of the next two weekly updates"
                - "Ask three regular readers which pages they actually use"
                - "Link price and index pages to a refreshable data sheet"
                - "Agree the cuts with your associate before removing pages"
            - name: Idea screening criteria for the group
              description: |-
                ## Purpose
                Without agreed criteria, idea meetings become a list of things someone read about. A short set of tests (is there a plausible buyer or seller, can they afford it, is there a trigger, does the bank have a relationship) lets the group spend senior time only on ideas that could become mandates.

                ## Milestones
                1. Five screening tests drafted from past ideas that did and did not lead to work.
                2. The tests agreed with a VP or MD.
                3. Every open idea in the log scored against them.
                4. Ideas below the bar parked with a reason.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Five agreed idea screening tests, with every open idea in the log scored and low scorers parked with reasons."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask an MD what made their last three won ideas work"
                - "Draft five screening tests in one sentence each"
                - "Score every open idea in the log against the tests"
                - "Park low-scoring ideas with a one-line reason"
            - name: Sector screening model for deal signals
              description: |-
                ## Purpose
                Some deal signals can be found in the numbers: high debt against earnings, a share price well below peers, a large cash pile, a conglomerate discount, a falling credit rating. A simple screen across the coverage universe, rerun each month, surfaces companies worth an idea conversation before the news does.

                ## Milestones
                1. Five or six signals chosen and defined with thresholds.
                2. A screen built across the universe using the group's data sources.
                3. The first run reviewed and ten companies picked for a closer look.
                4. Monthly reruns feeding the idea log.

                ## Notes
                Signals are prompts for a conversation, never a conclusion about a company. Check the restricted list before any screen output goes into client materials.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A screening model across the coverage universe rerun monthly, with flagged companies entered in the idea log."
                cadence: rolling
              tasks:
                - "Choose five signals and write the threshold for each"
                - "Build the screen in a spreadsheet linked to the data terminal"
                - "Review the first run and pick ten companies to look at"
                - "Rerun the screen and add flagged companies to the idea log @recurring(monthly:28)"
            - name: Tiering the sector universe by deal likelihood
              description: |-
                ## Purpose
                No coverage team can watch three hundred companies equally. Putting each company into one of three tiers by how likely it is to do a deal in the next two years, and which product it would need, focuses profiles, alerts and ideas where they are most likely to pay off.

                ## Milestones
                1. Tier definitions agreed with the group.
                2. Each company in the universe given a tier and a likely product.
                3. Alerts and profile refresh frequency set by tier.
                4. Tiers revisited each quarter as signals change.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every company in the universe map assigned a tier and likely product, reviewed each quarter."
                cadence: rolling
              tasks:
                - "Draft three tier definitions and share them with a VP"
                - "Assign a tier and likely product to each company"
                - "Set alert and refresh frequency by tier"
                - "Revisit tiers using the screen and deal log @recurring(quarterly)"
            - name: Shared sector knowledge base for the group
              description: |-
                ## Purpose
                When an analyst leaves, their sector notes, profiles and half-built ideas often leave with them. A shared, organised folder or wiki for the group, with an owner for each section, keeps the knowledge in the team and halves the time a new joiner needs to get useful.

                ## Milestones
                1. A folder structure agreed for primers, profiles, updates, deal log and ideas.
                2. Existing material moved in and duplicates removed.
                3. An owner named for each section.
                4. A monthly tidy where outdated material is archived.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A shared sector knowledge base with named section owners and a monthly tidy recorded for three months."
                cadence: rolling
              tasks:
                - "Propose a folder structure to the group associate"
                - "Move existing sector material in and remove duplicates"
                - "Name an owner for each section"
                - "Archive outdated material in the knowledge base @recurring(monthly:8)"
            - name: Working rhythm with product group partners
              description: |-
                ## Purpose
                Coverage bankers bring the client and the sector view; M&A, equity, debt and leveraged finance colleagues bring the product. A fixed monthly exchange with your product partners on sector ideas, market windows and recent deals makes joint pitches faster and stops ideas stalling between teams.

                ## Milestones
                1. A named contact in each product group that serves your sector.
                2. A short monthly call or note exchanging ideas and market conditions.
                3. Joint ideas tracked in the idea log with both owners named.
                4. One joint idea taken to a senior banker each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly exchanges with each main product group held for three months, with joint ideas logged and owners named."
                cadence: rolling
              tasks:
                - "Ask your VP for the product group contacts you should know"
                - "Introduce yourself to each with a short note on the sector"
                - "Hold the monthly ideas exchange with product partners @recurring(monthly:15)"
                - "Log joint ideas with both owners named"
            - name: Preparing for a major sector conference
              description: |-
                ## Purpose
                At the main industry conference senior bankers may see a dozen clients in two days, and each meeting needs a current profile, talking points and a follow-up. Preparing a briefing pack for every booked meeting a week ahead, and logging follow-ups the same evening, is what makes the trip worth the cost.

                ## Milestones
                1. The list of booked client meetings confirmed with senior bankers.
                2. A one-page briefing for each meeting ready a week before.
                3. Sector themes and recent deals summarised for the team in one page.
                4. Follow-ups logged within a day of each meeting.

                ## Notes
                Start from the **Meeting notes** template for the follow-up log. Note any information shared in meetings that might be inside information and raise it with compliance.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A briefing page for every booked conference meeting delivered a week ahead, with follow-ups logged within a day."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the attending bankers for their booked meeting list"
                - "Build a one-page briefing for each meeting"
                - "Write a one-page sector themes summary for the team"
                - "Log every follow-up within a day of each meeting"
            - name: Annual sector outlook publication
              description: |-
                ## Purpose
                Many groups publish or present a year-ahead view of their sector each January, and it becomes the backbone of client conversations for months. Starting the outlook in November, from the year's deal log, earnings themes and regulatory note, avoids a December scramble and gives you authorship of something senior bankers will quote.

                ## Milestones
                1. A draft structure agreed with the senior banker who owns the outlook.
                2. Year-in-review data pulled from the deal log and performance dashboard.
                3. Five themes for the coming year drafted with sources.
                4. The final outlook approved and delivered on the agreed date.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The annual sector outlook delivered on the agreed date, with year-in-review data and five sourced themes."
                cadence: cyclic
              tasks:
                - "Ask which senior banker owns the annual sector outlook"
                - "Start the year-ahead sector outlook draft @recurring(yearly)"
                - "Pull the year's deal counts and performance data"
                - "Draft five themes for the coming year with a source for each"
            - name: Investor day attendance and write-up
              description: |-
                ## Purpose
                When a client or major sector company holds an investor day, it often announces new targets, a portfolio review or a capital plan, which are signals of future deals. Attending or watching the webcast and writing up the targets and strategic changes within a day gives the coverage banker a reason to call while the news is fresh.

                ## Milestones
                1. The investor day presentation downloaded and read before the event.
                2. The event attended in person or by webcast.
                3. A one-page write-up of new targets, strategy changes and capital plans.
                4. The write-up sent to the covering banker within a day.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A one-page investor day write-up sent to the covering banker within one working day of the event."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Register for the next investor day webcast in the coverage universe"
                - "Read the previous targets so you can spot what changed"
                - "Watch the event and note new targets and strategy changes"
                - "Send the one-page write-up to the covering banker"
            - name: Sector teach-in for new joiners and product partners
              description: |-
                ## Purpose
                Product bankers, new analysts and summer interns staffed on your sector usually arrive knowing little about it. A one-hour teach-in covering how the sector makes money, the main companies, recent deals and the vocabulary, given by you, saves the group repeated explanations and marks you as a sector resource.

                ## Milestones
                1. A ten-slide teach-in built from the primer, value chain and deal log.
                2. The session held for at least five colleagues.
                3. Questions from the session collected and answered in a follow-up note.
                4. The slides saved in the knowledge base for reuse.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A one-hour sector teach-in delivered to at least five colleagues, with slides saved and questions answered."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Offer the group head a sector teach-in for the next intake"
                - "Build ten slides from the primer, value chain and deal log"
                - "Hold the session and collect every question asked"
                - "Send a follow-up note answering the open questions"
            - name: First sector update presented to the group
              description: |-
                ## Purpose
                Presenting the sector update at the group's weekly meeting is often the first time senior bankers hear a new analyst speak. Five well-prepared minutes on the week's moves, deals and one idea leave an impression that shapes staffing for months, so it is worth rehearsing.

                ## Milestones
                1. The date of your first slot confirmed.
                2. Five minutes of content drafted: moves, deals, one idea.
                3. A rehearsal held with an analyst or associate.
                4. The update presented and feedback asked for afterwards.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A five-minute sector update presented at the group meeting, with feedback from a senior banker recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the associate when your first update slot is"
                - "Draft five minutes on moves, deals and one idea"
                - "Rehearse with a peer and cut anything over time"
                - "Ask a VP afterwards for one thing to improve"
            - name: Same-day briefing after a sector shock
              description: |-
                ## Purpose
                A surprise mega-merger, a regulatory ruling or a commodity price collapse sends every client to the phone, and the bank that calls first with a clear view wins attention. Having a one-page rapid briefing format ready, and practising it once, means you can deliver it within hours rather than days.

                ## Milestones
                1. A one-page rapid briefing format agreed with a VP.
                2. A practice briefing written on a recent sector event within four hours.
                3. A list of the clients most affected by each kind of shock.
                4. The format saved where the whole team can use it.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A rapid briefing format agreed and tested once, with a practice briefing written within four hours of a real event."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a one-page rapid briefing layout"
                - "Pick a recent sector event and write a briefing against the clock"
                - "List which clients each kind of shock would affect most"
                - "Ask the agent to stress-test the briefing for missing angles"
            - name: First ninety days in a new coverage group
              description: |-
                ## Purpose
                Analysts joining a coverage group are judged quickly on whether they know the sector and the clients, often while also staffed on live deals. A ninety-day plan that sets sector learning, client knowledge and first contributions month by month keeps the sector work moving when deal hours take over.

                ## Milestones
                1. A thirty, sixty and ninety day plan written and shared with your staffer.
                2. The universe map, primer and client roster done by day thirty.
                3. The first weekly update and earnings summaries delivered by day sixty.
                4. Two ideas in the log and a review conversation held by day ninety.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Protect two short slots a week for sector work even on heavy deal weeks.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A ninety-day plan delivered, with universe map, first updates and two logged ideas complete and reviewed with your staffer."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write your thirty, sixty and ninety day goals on one page"
                - "Share the plan with your staffer or associate"
                - "Block two short sector work slots in your calendar each week"
                - "Book a ninety-day review with your VP"
            - name: Switching sectors as a lateral hire
              description: |-
                ## Purpose
                Laterals arriving from another bank or another sector are expected to perform at their title within weeks, but their sector knowledge starts near zero. A compressed plan that puts your deal skills to work while you build the new sector's vocabulary, client list and deal history lets you contribute without bluffing.

                ## Milestones
                1. The differences between your old and new sector written down: metrics, buyers, regulation.
                2. The new group's top clients and recent deals learned in the first month.
                3. A sector reading plan for the first quarter in place.
                4. One piece of sector work delivered that draws on both sectors.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within ninety days, a written old-versus-new sector comparison, the top clients learned and one sector piece delivered."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List the metrics and vocabulary that differ from your old sector"
                - "Ask the group head which ten clients you must know first"
                - "Read the group's last three years of sector updates"
                - "Offer one piece of work that uses your old sector knowledge"
            - name: Moving from a product group into coverage
              description: |-
                ## Purpose
                Bankers who move from M&A, ECM or leveraged finance into a coverage group already know how deals work but now need to think in clients and years, not processes and weeks. Planning the shift (sector knowledge, client relationships, idea generation) lets you keep your product strength while building the coverage habits.

                ## Milestones
                1. The coverage habits you do not yet have listed against your product skills.
                2. Sector foundations from this area completed in the first two months.
                3. A set of clients agreed with your new MD to learn in depth.
                4. First ideas logged that combine your product knowledge and the sector.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Sector foundations complete within sixty days, an agreed client list in place and at least two product-led ideas logged."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down which coverage habits you lack against your product skills"
                - "Agree with your new MD which clients to learn in depth"
                - "Work through the sector foundation projects in order"
                - "Log two ideas that use your product background"
            - name: Associate ownership of the group's sector materials
              description: |-
                ## Purpose
                Associates often inherit responsibility for the group's sector materials: the weekly update, the profiles, the earnings summaries and the idea log, produced by analysts who change every year. Setting standards, a review rhythm and clear ownership keeps quality high and stops the materials collapsing each time an analyst moves on.

                ## Milestones
                1. An inventory of every standing sector material and its current owner.
                2. A written standard for each: format, sources, frequency.
                3. A weekly review of analyst output in a fixed slot.
                4. A handover note for each material kept current.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every standing sector material has a named owner, a written standard and a handover note, with weekly reviews held for two months."
                cadence: rolling
              tasks:
                - "List every standing sector material and who produces it"
                - "Write a short standard for each covering format and sources"
                - "Review analysts' sector output in a fixed weekly slot @recurring(weekly:thu)"
                - "Ask each owner to write a handover note for their material"
            - name: Covering a broad sector alone at a smaller bank
              description: |-
                ## Purpose
                At a boutique or a regional bank one analyst or associate may cover an entire sector, or several, with no shared update or research desk. Choosing what to track closely and what to watch lightly, and building simple tools that one person can keep current, stops the work becoming impossible.

                ## Milestones
                1. The companies and subsectors that matter most to your bank's clients identified.
                2. A light version of the update, profiles and deal log one person can keep.
                3. Free and paid sources compared and the essentials chosen.
                4. A weekly time budget for sector work agreed with your manager.

                ## Notes
                Smaller banks often lack paid databases. Company filings, exchange announcements and industry association data cover most of what a sector view needs.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-person sector toolkit in use for two months within an agreed weekly time budget."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your manager which companies matter most to the bank's clients"
                - "Decide which subsectors to track closely and which lightly"
                - "Build a one-tab deal log and a short profile layout"
                - "Agree a weekly time budget for sector work"
            - name: Catching up on the sector after extended leave
              description: |-
                ## Purpose
                Coming back from parental leave, sick leave or a long secondment means returning to a sector that has moved: new deals, new management, a different set of themes. A structured two-week catch-up gets you briefed on what changed so you are useful on day one rather than nodding along.

                ## Milestones
                1. The deal log, earnings summaries and updates from your absence gathered.
                2. A one-page list of what changed: deals, management moves, results, regulation.
                3. Catch-up conversations held with two colleagues.
                4. Your top client profiles and the sector themes slide refreshed.

                ## Notes
                Ask for a lighter staffing load in the first fortnight so the catch-up actually happens.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of sector changes during your absence written and discussed with two colleagues within two weeks of return."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect the updates and earnings notes from the months you missed"
                - "Write a one-page list of what changed"
                - "Book catch-up coffees with two colleagues in the group"
                - "Refresh the top twenty client briefing notes before your first client call"
            - name: Sector-specific valuation conventions playbook
              description: |-
                ## Purpose
                Some sectors are valued in ways general training never covers: price to book and capital ratios for banks, reserves and commodity price decks for oil and gas, net asset value and funds from operations for real estate, pipeline value for biotech, subscriber economics for telecom. A playbook of how your sector is really valued keeps every page you build in the language clients and investors use.

                ## Milestones
                1. The main valuation methods investors use for the sector listed.
                2. Each method explained with the inputs it needs and where they come from.
                3. Common mistakes noted for each, from colleagues and research.
                4. The playbook reviewed by a senior banker in the group.

                ## Notes
                Keep the playbook about conventions and inputs. Valuation conclusions on live work go through the deal team and the bank's review process.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written playbook of the sector's valuation conventions with inputs and common mistakes, reviewed by a senior banker."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask a VP which valuation methods your sector relies on"
                - "Collect two broker reports that show each method in use"
                - "Write each method's inputs and common mistakes"
                - "Send the playbook to a senior banker for review"
            - name: Consolidation thesis for a fragmented subsector
              description: |-
                ## Purpose
                Fragmented subsectors, with many small companies and no clear leader, are among the richest sources of repeat mandates for a coverage group. A written thesis on why consolidation makes sense, who could lead it and which targets fit gives senior bankers a story to take to strategic buyers and sponsors.

                ## Milestones
                1. A fragmented subsector chosen with evidence of its fragmentation.
                2. The case for consolidation written: scale benefits, cost savings, customer demand.
                3. Possible consolidators and a target list built from public information.
                4. The thesis presented to a senior banker and a next step agreed.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written consolidation thesis with named consolidators and targets, presented to a senior banker with a next step agreed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick a subsector where the top five hold a small share of revenue"
                - "Write the case for why consolidation would create value"
                - "Build a target list from the universe map and private company sources"
                - "Present the thesis to a senior banker"
            - name: Thematic white paper on a sector shift
              description: |-
                ## Purpose
                Structural changes such as electrification, digital distribution, an ageing population or new capital rules reshape sectors over a decade and drive waves of deals. Writing a thematic paper on one shift, with data, case studies and the implications for clients, is the kind of senior-quality work that builds a personal reputation in the sector.

                ## Milestones
                1. One structural shift chosen and its scope agreed with a senior banker.
                2. Data on the size and pace of the shift gathered from public sources.
                3. Three company case studies showing winners and losers.
                4. A finished paper approved for internal or client use.

                ## Notes
                Any paper going to clients needs the bank's publication review. Keep it framed as an industry view, not research on individual shares.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A thematic paper with data, three case studies and client implications approved for internal or client distribution."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List three structural shifts affecting the sector and pick one"
                - "Agree the scope and audience with a senior banker"
                - "Gather data on the size and pace of the shift"
                - "Ask the agent to draft an outline from your notes and case studies"
            - name: Sector view for a senior banker's origination pitch
              description: |-
                ## Purpose
                As you move toward VP, the sector work changes from producing materials to shaping the argument a senior banker takes into a boardroom. Building the sector framing for one real origination pitch, from themes to the specific action the client should consider, is practice for owning the sector story yourself.

                ## Milestones
                1. One upcoming senior client meeting chosen with the MD.
                2. The sector framing drafted: themes, peer moves and the client's position.
                3. A recommended action and its rationale written in a paragraph.
                4. Feedback from the MD after the meeting recorded.

                ## Notes
                Your part is the sector argument. The coverage plan, mandate tracking and fee discussion belong to the client relationship owner.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The sector framing for one real senior client meeting delivered, with MD feedback recorded after the meeting."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask an MD for an upcoming client meeting you could frame"
                - "Draft the sector themes and peer moves that apply to the client"
                - "Write the recommended action and why now"
                - "Debrief with the MD after the meeting"
---

# Industry Coverage Group Work

Coverage groups are paid to know a sector better than anyone the client meets that week: the companies, the owners, the numbers that matter, the deals that just happened and the ones that should happen next. This area starts with foundations (a universe map, a primer, the metrics sheet, the group's own deal history, the client roster and your data set-up), then the operating routines that keep sector knowledge current, the skills of reading, summarising and speaking about the sector, the improvements that sharpen idea generation, the dated events, variants for new analysts, laterals, product bankers and associates, and specialist work such as consolidation theses and sector white papers.

What repeats is the morning news scan, a Monday sector update, Tuesday research reading, a Wednesday deal log and a Friday performance dashboard, with monthly upkeep of profiles, the idea log, management moves, the conference calendar and the screening model, and a quarterly earnings season cycle. The **Onboarding 30/60/90**, **Reading queue** and **Meeting notes** templates pair with your first months in the group, the research routine and conference meetings. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
