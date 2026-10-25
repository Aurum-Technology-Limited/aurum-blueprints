---
id: investment-banking.caribbean-corporate-finance-deals
name: Caribbean Corporate Finance Deals
description: "A banker's system for Caribbean deals: exchanges and regulators by island, currency and exchange control checks, the regional investor base, conglomerate M&A, local listings and bonds, state enterprise sales and making small deals pay."
category: business
version: 1.0.0
tags: [investment-banking, caribbean-corporate-finance-deals, knowledge-worker, caribbean, regional-m-and-a, local-stock-exchanges, state-enterprises, small-markets]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - risk-register
    - trip
    - meeting-notes
    - operational-checklist
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Caribbean Corporate Finance Deals
          description: "Corporate finance in the Caribbean: regional M&A among conglomerates, listings and bonds on local stock exchanges, state enterprise deals and small-market constraints."
          projects:
            - name: Caribbean exchanges and securities regulators map
              description: |-
                ## Purpose
                One regional deal can touch the Jamaica Stock Exchange, the Trinidad and Tobago Stock Exchange, the Barbados Stock Exchange, the Eastern Caribbean Securities Exchange, BISX in the Bahamas or the Guyana exchange, each with its own regulator, listing rules and settlement depository. A one-page map of who regulates what, which rulebook applies and where the filings go saves the first week of every mandate and stops the team assuming that what worked in Kingston works in Port of Spain.

                ## Milestones
                1. Each exchange in the region listed with its securities regulator, central depository and current rulebook link.
                2. Main and junior or secondary market boards noted for each exchange where they exist.
                3. Cross-listing arrangements between exchanges recorded, with the source for each.
                4. The map checked against each regulator's website and dated, with a review date set.

                ## Notes
                Rules change more often than people expect on small exchanges, often by circular rather than new legislation. Always date the map and link to the source rather than paraphrasing a rule from memory.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated one-page map of every regional exchange, its regulator, depository and rulebook, checked against official sources."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every exchange and securities regulator in the countries you cover"
                - "Download the current listing rules and note the version date of each"
                - "Record which exchanges allow cross-listing and how it is done"
                - "Check each entry against the regulator's website and date the map"
            - name: Currency regime and foreign exchange availability brief
              description: |-
                ## Purpose
                The Barbados and Eastern Caribbean dollars and the Bahamian dollar are pegged to the US dollar, the Jamaican dollar floats, and in some markets banks have at times rationed US dollars, so a price agreed in one currency can be hard to pay in another. A short brief on each currency your deals touch, how it is managed and how easy it really is to convert large sums, is the first thing a foreign buyer or lender will ask for.

                ## Milestones
                1. Each currency in your coverage described by regime: hard peg, managed rate or float.
                2. Recent practical experience of converting large sums recorded from treasury contacts at local banks.
                3. Any reported waiting times or allocation practices for US dollars noted with dates and sources.
                4. A one-page brief ready to attach to pitches for foreign buyers and lenders.

                ## Notes
                Ask bank treasury desks what actually happens, not only what the central bank publishes. The practical answer on conversion time is what a buyer's treasury team needs.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated one-page brief on each covered currency's regime and practical convertibility, sourced from central bank publications and treasury contacts."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every currency your current and likely deals will touch"
                - "Note each central bank's stated exchange rate regime from its website"
                - "Call two bank treasury contacts about converting large sums in practice"
                - "Write the one-page brief and date every statement in it"
            - name: Regional conglomerate and family group profiles
              description: |-
                ## Purpose
                Much of Caribbean M&A happens between a few dozen diversified groups that own banks, insurers, distribution, manufacturing and hotels across several islands, often controlled by founding families. Profiling the groups in your coverage, with who controls them, what they own, what they have bought and sold and who makes decisions, turns cold pitching into informed conversations about the deals each group is likely to do.

                ## Milestones
                1. Profiles written for the twenty most active groups in your coverage.
                2. Each profile shows controlling shareholders, main subsidiaries, listed entities and countries of operation.
                3. Acquisitions and disposals over the last ten years listed for each group.
                4. Decision makers named for each group, from chair to finance director.

                ## Notes
                Use annual reports, exchange filings and press only. Never put confidential deal information from current or past clients into a profile that others will read.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Twenty group profiles with ownership, subsidiaries, deal history and decision makers, drawn only from public sources."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose the twenty groups most active in deals across your markets"
                - "Pull the latest annual report and exchange filings for each group"
                - "Ask the agent to draft a deal history from the filings for checking"
                - "Name the chair, chief executive and finance director in each profile"
            - name: Regional institutional investor base map
              description: |-
                ## Purpose
                Local public offers and bond issues are usually decided by a short list of buyers: pension funds, national insurance or social security schemes, life insurers, unit trusts, credit unions and brokerage clients. Knowing each one's size, mandate limits, currency rules and who signs off lets you size a deal realistically and know which three calls will make or break the book.

                ## Milestones
                1. Every significant institutional investor in your markets listed with type and approximate assets from public sources.
                2. Each investor's known limits on foreign currency, single issuer and unlisted holdings noted where published.
                3. The decision maker and investment committee rhythm recorded for the top fifteen.
                4. Investors grouped by likely appetite for equity, local bonds and US dollar paper.

                ## Notes
                Investment limits for pension funds and insurers are often set by regulation and change with new rules. Confirm current limits with the investor rather than relying on an old circular.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A map of the regional investor base with size, limits, decision makers and appetite for at least fifteen institutions."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List pension, social security, insurance and unit trust investors by country"
                - "Find published asset figures and investment limits for each"
                - "Record the decision maker and committee timing for the top fifteen"
                - "Group the investors by appetite for equity, local bonds and dollar paper"
            - name: Caribbean deal precedent file
              description: |-
                ## Purpose
                Regional precedents are scarce and rarely appear in the global databases, so most banks rebuild them from scratch on each pitch. A maintained file of Caribbean acquisitions, public offers, takeover bids and bond issues, with prices, multiples where disclosed and the source document, gives you credible valuation ranges and examples a local board will recognise.

                ## Milestones
                1. At least thirty regional transactions from the last decade recorded with date, parties, size and structure.
                2. Multiples or yields shown only where the source discloses enough to calculate them.
                3. Each entry linked to the exchange notice, offer circular or annual report it came from.
                4. The file sorted by sector and deal type for quick use in pitches.

                ## Notes
                Many regional deals disclose a price but not the target's earnings. Leave the multiple blank rather than estimating it, and footnote any figure you derived.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A precedent file of at least thirty sourced regional transactions, sorted by sector and type, with derived figures footnoted."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Search exchange announcement archives for takeover bids and offer circulars"
                - "Record thirty transactions with parties, size, date and structure"
                - "Calculate multiples only where the source gives the earnings figure"
                - "Tag each deal by sector and type and link its source document"
            - name: Competition authority checklist across Caribbean states
              description: |-
                ## Purpose
                Merger control in the region is uneven: some countries have a fair trading or competition commission with merger powers, some cover mergers only in certain sectors, and the CARICOM Competition Commission handles cross-border conduct questions. A checklist of which authority might have a say in each country, prepared with counsel, tells the client early whether a filing or a conversation is needed before signing.

                ## Milestones
                1. Each country in your coverage listed with its competition or fair trading authority, if any.
                2. Counsel's view recorded on whether merger review applies generally or only in sectors such as banking or telecoms.
                3. Sector regulators with change of control powers listed alongside, from central banks to utility regulators.
                4. The checklist approved by counsel and saved for use at the start of every mandate.

                ## Notes
                This is an organising tool, not a legal opinion. Whether a filing is required is always counsel's call in each country.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A counsel-reviewed checklist naming the competition and sector authorities that could review a deal in each covered country."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the competition or fair trading authority in each covered country"
                - "Ask regional counsel which sectors carry their own change of control approvals"
                - "Add sector regulators to the checklist alongside the competition authorities"
                - "Send the checklist to counsel for review and record their changes"
            - name: Exchange control and central bank approval checklist
              description: |-
                ## Purpose
                Some Caribbean countries still require central bank permission for non-residents to buy shares, for residents to invest abroad or for dividends and sale proceeds to leave the country. Missing one of these approvals can stall a closing for weeks, so a checklist of what each jurisdiction asks for, and how long it has taken on recent deals, belongs at the front of every cross-island mandate.

                ## Milestones
                1. Exchange control rules summarised by country with links to the central bank's guidance.
                2. Approvals typically needed for share purchases, capital remittances and dividend payments listed for each.
                3. Recent approval times gathered from counsel and treasury contacts.
                4. The checklist built into the mandate kick-off pack.

                ## Notes
                Ask counsel to confirm the position on every deal. Exchange control regimes in the region have been relaxed and tightened over the years, and the published guidance can lag practice.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A checklist of exchange control approvals and recent approval times for each covered country, confirmed by counsel."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find each central bank's published guidance on exchange control"
                - "List the approvals a non-resident buyer or seller would need in each"
                - "Ask counsel how long recent approvals took in practice"
                - "Add the checklist to your mandate kick-off pack"
            - name: Local adviser bench for each island
              description: |-
                ## Purpose
                On a five-country deal you may need attorneys, auditors, valuers, registrars and brokers in every jurisdiction, and the good ones are often conflicted because they act for every major group. A bench of two or three options per role per island, with who they act for and how they bill, means you can staff a deal in a day instead of a week of calls.

                ## Milestones
                1. Two or three options per role recorded for each covered country.
                2. Known standing relationships with major groups noted to flag likely conflicts.
                3. Typical fee basis and responsiveness recorded from your own and colleagues' experience.
                4. The bench reviewed by a senior colleague and dated.

                ## Notes
                Start from the **Vendor** template. In small markets the conflict question comes first: ask early whether the firm already acts for the counterparty.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An adviser bench with at least two options per role in each covered country, conflicts noted and reviewed by a senior colleague."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the roles a regional deal usually needs in each country"
                - "Ask three colleagues which firms they rate for each role"
                - "Note which major groups each firm regularly acts for"
                - "Record fee basis and responsiveness for each firm on the bench"
            - name: Making small regional deals economic
              description: |-
                ## Purpose
                Even a deal worth a few million US dollars needs much of the same work as one fifty times larger, and the fee will not stretch to a full team for six months. Deciding up front which deals you take, how you scope them, what you charge as retainer and success fee and which work you standardise is what keeps a regional practice profitable rather than busy.

                ## Milestones
                1. A minimum deal size or fee below which you decline or refer work, agreed with your seniors.
                2. A standard scope for small deals that drops pages and workstreams the deal does not need.
                3. A fee structure with retainer, milestone and success elements written down for pitches.
                4. Reusable templates for the teaser, process letter and offer circular sections that repeat.

                ## Notes
                Clients in small markets often compare your fee with the local attorney's. Show what the retainer pays for in hours and outputs, not as a percentage alone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written minimum deal threshold, a standard small-deal scope and a fee structure agreed with your seniors."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Total the hours spent on your last three small deals"
                - "Compare each fee with the hours to find where the work did not pay"
                - "Draft a small-deal scope that cuts the pages nobody used"
                - "Agree a minimum fee and retainer structure with your seniors"
            - name: Listed subsidiary and minority shareholder check
              description: |-
                ## Purpose
                Regional groups often hold controlling stakes in listed subsidiaries on two or three exchanges, so a deal at group level can trigger takeover rules, related party approvals or minority rights several layers down. Drawing the full structure before pitching any group deal shows which entities are listed, who the minorities are and where independent directors or a shareholder vote will be needed.

                ## Milestones
                1. A structure chart showing every listed and material unlisted entity in the group, with percentages.
                2. Each listed entity's exchange, free float and largest outside holders recorded.
                3. Related party and takeover rule triggers flagged for each entity with counsel.
                4. The chart attached to the pitch and the client's legal team asked to confirm it.

                ## Notes
                Shareholder registers in small markets are often public through annual reports. The largest outside holder is frequently a pension fund whose view decides the vote.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A group structure chart with listed entities, free float, largest outside holders and counsel-flagged rule triggers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draw the group structure from the latest annual reports"
                - "Mark every listed entity with its exchange and free float"
                - "List the top outside shareholders from each listed entity's report"
                - "Ask counsel which entities would face related party or takeover rules"
            - name: Weekly regional deal and announcement scan
              description: |-
                ## Purpose
                In a small market the next mandate usually shows up first as an exchange notice, a cautionary announcement or a line in a budget speech. A short scan every Monday of the regional exchanges, central bank notices and business press keeps your precedent file, profiles and pitch ideas current without a subscription that barely covers the region.

                ## Milestones
                1. A fixed list of exchange announcement pages, regulator notices and regional business news sources bookmarked.
                2. Each Monday's findings recorded in a running log with a one-line implication.
                3. Relevant items passed to colleagues or added to the precedent file within the week.
                4. A monthly summary of the scan shared with your team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A Monday scan log with at least forty weekly entries a year and a monthly summary sent to the team."
                cadence: rolling
              tasks:
                - "Bookmark every regional exchange announcement page in one folder"
                - "Scan announcements and regional business news and log anything relevant @recurring(weekly:mon)"
                - "Send the team a one-paragraph summary of the month's regional deal news @recurring(monthly:3)"
                - "Add any new completed deal to the precedent file the same week"
            - name: Local exchange liquidity and trading tracker
              description: |-
                ## Purpose
                Thin trading shapes everything in Caribbean equity: how a public offer is priced, whether a takeover premium means anything and how long an investor needs to sell a stake. A monthly record of traded value, turnover and the number of days each stock actually traded in your sectors gives you numbers to put in front of a client instead of anecdotes.

                ## Milestones
                1. A tracker of monthly traded value and trading days for each listed company in your sectors.
                2. Free float turnover calculated for each, with the method written down.
                3. A twelve-month view ready to support pricing and premium discussions.
                4. Unusual volume spikes cross-checked against announcements.

                ## Notes
                Last traded prices can be weeks old on some exchanges. Show the date of the last trade beside any price used in valuation work.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker with twelve months of traded value, trading days and turnover for every listed company in your sectors."
                cadence: rolling
              tasks:
                - "Download monthly trading statistics from each exchange you cover"
                - "Update traded value, trading days and turnover for your sector stocks @recurring(monthly:8)"
                - "Note the date of the last trade beside each price in the tracker"
                - "Check any volume spike against that month's announcements"
            - name: Currency, reserves and sovereign rating watch
              description: |-
                ## Purpose
                Foreign exchange reserves, IMF programme reviews and sovereign rating actions move the cost of capital and the appetite of foreign buyers for a whole island at once. A monthly check of the currencies, reserve cover and rating news for your countries keeps currency sections of pitches accurate and warns you before a deal's financing assumptions go stale.

                ## Milestones
                1. A one-page dashboard with exchange rate, reserve cover and sovereign rating for each covered country.
                2. Each monthly update dated and sourced to the central bank or rating agency release.
                3. Material changes flagged to deal teams within a week.
                4. A quarterly note on which countries' conditions have improved or worsened.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated monthly dashboard of currency, reserves and ratings for every covered country, with a quarterly trend note."
                cadence: rolling
              tasks:
                - "Set up a one-page dashboard with a row for each covered country"
                - "Update exchange rates, reserve cover and rating actions from official releases @recurring(monthly:12)"
                - "Write a short note on which countries improved or worsened @recurring(quarterly)"
                - "Tell deal teams within a week when a rating or reserve figure moves sharply"
            - name: Regional client relationship calendar
              description: |-
                ## Purpose
                Senior people at regional groups expect to see their bankers in person, and with clients spread across Kingston, Port of Spain, Bridgetown, Nassau and Georgetown, meetings that are not planned do not happen. A calendar that schedules each key relationship, ties visits together into trips and records what was discussed keeps coverage steady between mandates.

                ## Milestones
                1. Key client relationships listed with a target contact frequency for each.
                2. Visits grouped into planned trips by island for the coming six months.
                3. Notes from every meeting recorded within two days with the follow-up owner.
                4. A monthly check that no key client has gone untouched for longer than its target.

                ## Notes
                Start from the **Meeting notes** template for each visit. Regional clients notice when a banker only appears with a fee proposal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every key client has a contact target, and a monthly check shows none overdue by more than a month."
                cadence: rolling
              tasks:
                - "List key client relationships with a contact frequency for each"
                - "Check which clients are overdue for contact and book the next touch @recurring(monthly:18)"
                - "Group the next quarter's visits into trips by island"
                - "Write up each meeting within two days with a follow-up owner"
            - name: Government budget and divestment pipeline watch
              description: |-
                ## Purpose
                Caribbean governments announce state share sales, bond programmes and public-private partnerships in budget speeches and IMF documents, often a year or more before an adviser is appointed. Reading each budget with a deal lens, and logging the divestments promised, gives you the earliest possible start on a request for proposals and shows which promises keep slipping.

                ## Milestones
                1. Each covered country's budget date noted in your calendar.
                2. Every announced divestment, listing or bond programme logged with the date and minister who announced it.
                3. Progress on each item checked against later announcements and procurement notices.
                4. A short annual note of the live state deal pipeline shared with your team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: habit
                success_criteria: "A pipeline log of announced state divestments and programmes for every covered country, updated after each budget."
                cadence: cyclic
              tasks:
                - "Add each covered country's budget date to your calendar"
                - "Read the budget speeches and log every divestment or bond programme @recurring(yearly)"
                - "Check procurement notices for adviser requests on logged items @recurring(quarterly)"
                - "Share a short note of the live pipeline with your team"
            - name: Disclosure calendar for listed regional clients
              description: |-
                ## Purpose
                Listed clients in the region must release results, dividend notices and material information on each exchange where they trade, and a deal in progress raises the stakes on every one of those releases. A calendar of each client's reporting dates and the rules for cautionary and material announcements on each exchange stops a leak or a missed notice from becoming a regulatory problem.

                ## Milestones
                1. Reporting and dividend dates for each listed client recorded across every exchange where it trades.
                2. Each exchange's rule on timely and cautionary announcements summarised with the source.
                3. Draft announcement wording agreed with the client and counsel before any deal milestone.
                4. A monthly check of upcoming releases against live deal timetables.

                ## Notes
                Deciding what must be disclosed and when is the client's decision with its lawyers. Your job is to make sure the timetable leaves room for it.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A calendar of reporting dates for every listed client, checked monthly against live deal timetables with no missed releases."
                cadence: rolling
              tasks:
                - "Record each listed client's reporting and dividend dates by exchange"
                - "Summarise each exchange's rule on cautionary announcements with its source"
                - "Check next month's client releases against live deal timetables @recurring(monthly:22)"
                - "Ask counsel to review draft announcements before each deal milestone"
            - name: Quarterly pension fund and insurer call cycle
              description: |-
                ## Purpose
                The institutions that decide regional offers want to hear about pipeline and market conditions before they are asked to commit, and they remember who called only when they had something to sell. A quarterly round of calls with the top investors, logged against their stated appetite, means your next book starts with warm conversations and real indications.

                ## Milestones
                1. The top fifteen investors scheduled for a call each quarter.
                2. Each call logged with stated appetite by asset type, currency and size.
                3. Appetite notes used to shape the structure of at least one live deal.
                4. Any change in an investor's limits or decision makers recorded.

                ## Notes
                Keep these conversations general when you hold inside information about a live deal. Wall-crossing follows your firm's compliance procedure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Calls logged each quarter with at least twelve of the top fifteen regional investors, with appetite recorded."
                cadence: rolling
              tasks:
                - "List the fifteen investors to call each quarter"
                - "Call the top investors about appetite by asset type and currency @recurring(quarterly)"
                - "Log each investor's stated appetite and any change in limits"
                - "Share the appetite summary with the deal team before any new offer"
            - name: Friday mandate pipeline review for a regional team
              description: |-
                ## Purpose
                Regional teams are small, so one large mandate can pull everyone away while three smaller ones quietly die. A Friday half hour on every live mandate and prospect, with the next step, owner and fee at stake, keeps the pipeline honest and helps seniors decide where scarce people go next week.

                ## Milestones
                1. A single pipeline list with stage, fee estimate, next step and owner for every mandate and prospect.
                2. A Friday review held at least forty weeks a year.
                3. Stalled items either revived with a dated action or closed.
                4. A monthly view of fees won, lost and slipped by country.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pipeline list reviewed at least forty Fridays a year, with no item older than a month without a dated next step."
                cadence: rolling
              tasks:
                - "Build one pipeline list with stage, fee, next step and owner"
                - "Review every mandate and prospect with the team @recurring(weekly:fri)"
                - "Close or revive any item with no movement for a month"
                - "Summarise fees won, lost and slipped by country @recurring(monthly:28)"
            - name: Hurricane season continuity plan for live deals
              description: |-
                ## Purpose
                From June to November a storm can close offices, ports, courts and registries on an island for days, and a public offer or closing scheduled in that window needs a plan. Agreeing each year how documents get signed, approvals get filed and the team keeps working if one island goes dark protects timetables and the people on them.

                ## Milestones
                1. Live deals with key dates between June and November listed by island.
                2. Remote signing, electronic filing and backup contacts confirmed for each registry and regulator involved.
                3. Offer and closing timetables given fallback dates agreed with counsel.
                4. Team contact and safety check arrangements shared before the season starts.

                ## Notes
                Start from the **Risk register** template. Put people first: no timetable is worth asking someone to travel into a storm warning.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A season plan with fallback dates, remote signing arrangements and team contacts, issued before June each year."
                cadence: cyclic
              tasks:
                - "List live deals with key dates in the June to November window @recurring(yearly)"
                - "Confirm which registries and regulators accept electronic filing"
                - "Agree fallback offer and closing dates with counsel"
                - "Share team contact and safety check arrangements before June"
            - name: Valuing companies in thin Caribbean markets
              description: |-
                ## Purpose
                A DCF built with a US cost of capital, or comps taken from New York listings, will not survive a regional board's first question. Learning how practitioners in the region handle country risk, small size, currency, illiquidity and stale market prices lets you build a valuation that a local pension fund trustee and a foreign buyer can both follow.

                ## Milestones
                1. Notes on two or three accepted methods for country risk and currency in cost of capital.
                2. A worked example valuing one regional company with and without illiquidity adjustments.
                3. A footnote standard for explaining every regional adjustment in a valuation page.
                4. The example reviewed by a senior colleague who has priced regional deals.

                ## Notes
                There is no single correct country risk premium. Show the method, the source and the range, and let the reviewer see what moves the answer.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked regional valuation with sourced country risk, size and illiquidity adjustments, reviewed by a senior colleague."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read two practitioner sources on country risk premiums for small economies"
                - "Value one listed regional company using local and US dollar approaches"
                - "Write a footnote standard for every regional adjustment you make"
                - "Ask a senior colleague to challenge the worked example"
            - name: Takeover rules on Caribbean exchanges
              description: |-
                ## Purpose
                Each jurisdiction has its own takeover regime, with different offer thresholds, timetables, disclosure duties and treatment of minority shareholders, and a group listed in two countries can face both. Working through the rules for your main markets, and how recent bids were run, prepares you to sketch a bid timetable before counsel bills the first hour.

                ## Milestones
                1. The takeover rules for each main market read and summarised with the source and date.
                2. Offer triggers, minimum offer periods and disclosure steps compared side by side.
                3. Two recent regional bids traced through their published documents.
                4. Your summary checked by counsel for accuracy.

                ## Notes
                Treat your summary as a guide to the right questions. Counsel confirms the rule on every live deal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A dated side-by-side summary of takeover rules for each main market, with two traced bids, checked by counsel."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Download the takeover rules or code for each of your main markets"
                - "Compare triggers, offer periods and disclosure steps in one table"
                - "Trace two recent regional bids through their offer documents"
                - "Ask counsel to check the comparison table"
            - name: How local corporate bond markets work
              description: |-
                ## Purpose
                Most Caribbean corporate debt is raised through private placements arranged by local merchant banks and brokers, often in US dollars, with a trustee and sometimes a listing for the investors' benefit. Learning how these issues are structured, documented and sold, and how they differ from a Eurobond, prepares you for the bond mandates that are far more common than equity in the region.

                ## Milestones
                1. The typical documents for a regional private placement listed with each one's purpose.
                2. The roles of arranger, trustee, registrar and paying agent understood and written down.
                3. Three recent regional issues compared on currency, tenor, security and investor base.
                4. Differences from an international bond issue summarised on one page.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide to regional bond structures with three compared issues, read and corrected by a debt colleague."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect offering documents from three recent regional bond issues"
                - "List the parties and documents and what each one does"
                - "Compare the issues on currency, tenor, security and buyers"
                - "Ask a debt colleague to correct your one-page guide"
            - name: Regional credit ratings and local scales
              description: |-
                ## Purpose
                Caribbean issuers are often rated on a Caribbean scale by a regional agency such as CariCRIS, while international agencies rate the sovereign and a few large corporates, and investors' rules may refer to either. Understanding how the scales relate and what a rating means for a local pension fund's limits lets you advise a client on whether a rating is worth the cost and time.

                ## Milestones
                1. The difference between regional and international scale ratings explained in your own words.
                2. Ratings of the sovereigns and main issuers in your markets recorded on one sheet.
                3. Investor rules that refer to ratings noted for the main institutions.
                4. A short note on when a regional issuer benefits from a rating, reviewed by a colleague.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ratings sheet for covered sovereigns and issuers and a reviewed note on when a regional rating helps an issue."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the regional agency's published rating scale and methodology"
                - "Record sovereign and main issuer ratings on one sheet"
                - "Note which investors' rules refer to ratings and which scale"
                - "Draft a note on when a rating helps a regional issuer"
            - name: Reading Caribbean conglomerate accounts
              description: |-
                ## Purpose
                Group accounts in the region combine banking, insurance, manufacturing and property in several currencies, with associates, minority interests and revaluation gains that can swamp operating profit. Learning to separate the businesses, strip out currency translation and fair value effects and rebuild clean earnings by segment is the base for every valuation and merger model you will run for these groups.

                ## Milestones
                1. Two group annual reports worked through note by note.
                2. Segment earnings rebuilt with currency translation and revaluation effects separated.
                3. Minority interests and associates traced to the parent's share of earnings.
                4. A checklist of the adjustments you made, for reuse on other groups.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Clean segment earnings rebuilt for two regional groups, with an adjustment checklist reused on a third."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Pick two diversified regional groups and download their annual reports"
                - "Rebuild segment earnings and separate currency and revaluation effects"
                - "Trace minority interests and associates to the parent's share"
                - "Write the adjustments as a reusable checklist"
            - name: Tax treaty and withholding questions in regional deals
              description: |-
                ## Purpose
                Dividends, interest and sale proceeds moving between Caribbean countries can face withholding taxes, and the CARICOM double taxation agreement and bilateral treaties change the answer depending on where the holding company sits. Knowing which questions to put to tax advisers early, and how the answers change the structure, stops a late surprise on the net price your client receives.

                ## Milestones
                1. The treaties that may apply between your main markets listed with their source.
                2. A standard set of withholding and capital gains questions written for tax advisers.
                3. One past or hypothetical regional structure walked through with a tax adviser.
                4. Tax adviser sign-off recorded as a standing step in your mandate checklist.

                ## Notes
                This is about asking the right questions on time. Tax conclusions come from qualified tax advisers in each country.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written set of tax questions for regional deals and one structure walked through with a tax adviser."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the tax treaties that may apply between your main markets"
                - "Write the standard withholding and gains questions for tax advisers"
                - "Walk one regional structure through with a tax adviser"
                - "Add tax sign-off as a step in your mandate checklist"
            - name: Financial group deals and fit and proper approvals
              description: |-
                ## Purpose
                Banks, insurers and credit institutions are a large share of Caribbean M&A, and every change of control needs the central bank or insurance regulator to approve the buyer and its directors, sometimes in several countries at once. Learning how these approvals work, what regulators ask for and how long they take is essential before you put a timetable in front of a financial group.

                ## Milestones
                1. The regulators for banks and insurers in each main market listed.
                2. The typical information requested for fit and proper and change of control approval written down.
                3. Approval times on two recent regional financial deals gathered from public sources or counsel.
                4. A template timetable for a multi-country financial group deal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of financial regulators, their approval requirements and a template timetable reviewed by counsel."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the bank and insurance regulators in each main market"
                - "Write down what each asks for in a change of control application"
                - "Find approval times from two recent regional financial deals"
                - "Draft a template timetable and ask counsel to review it"
            - name: Energy and resources deals in Trinidad and Tobago and Guyana
              description: |-
                ## Purpose
                Oil, gas and petrochemicals drive much of the deal flow in Trinidad and Tobago, and Guyana's oil sector has created new demand for services businesses, local content partnerships and infrastructure finance. Learning the structure of the sector, the role of state companies and licences, and how commodity prices feed into valuations prepares you for the mandates where most regional fees are earned.

                ## Milestones
                1. The main state energy companies, regulators and licensing bodies in both countries listed.
                2. The sector's value chain mapped from upstream to services and downstream.
                3. Local content rules in Guyana summarised from official sources.
                4. Three recent regional energy deals reviewed for structure and valuation approach.

                ## Notes
                Commodity price assumptions should come from a cited source and be shown with a range. Avoid presenting a single price deck as fact.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sector map for both countries, a local content summary and three reviewed energy deals, saved for pitches."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List state energy companies, regulators and licensing bodies in both countries"
                - "Map the sector from upstream production to services and downstream"
                - "Summarise Guyana's local content rules from the official text"
                - "Review three recent energy deals for structure and valuation"
            - name: Listing venue decision for a regional issuer
              description: |-
                ## Purpose
                Companies raising equity in the region can list on its home exchange, a junior or secondary board, cross-list on a second exchange, or look further afield, and each choice changes the investor base, costs, continuing obligations and any tax incentives. A side-by-side comparison for the client, built with counsel and the exchanges, turns a vague preference into a recorded decision.

                ## Milestones
                1. Each realistic venue compared on investor base, costs, continuing obligations and timetable.
                2. Any available listing incentives confirmed with the exchange and tax advisers as current.
                3. Expected liquidity on each venue estimated from the trading tracker.
                4. A recommendation presented and the client's decision recorded in board minutes.

                ## Notes
                Incentives such as tax holidays for junior market listings have conditions and end dates. Confirm the current terms in writing before they appear in a board paper.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A venue comparison with confirmed incentives and liquidity estimates, and the client board's decision recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every realistic listing venue for the client"
                - "Ask each exchange for its current fees, requirements and timetable"
                - "Confirm any listing incentive and its conditions with tax advisers"
                - "Present the comparison to the client board and record its decision"
            - name: Bond, bank loan or preference share decision
              description: |-
                ## Purpose
                A regional company funding an expansion can borrow from its bank, place a bond with local institutions, or issue preference shares, which regional investors have long bought for income. Comparing cost, covenants, currency, timetable and the effect on the balance sheet lets the finance director choose the instrument rather than defaulting to the last one the company used.

                ## Milestones
                1. Indicative terms gathered for a bank facility, a private placement and a preference share issue.
                2. All three compared on all-in cost, covenants, currency, tenor and timetable.
                3. Credit rating and investor limit effects noted for each option.
                4. The finance director's choice recorded with the reasons.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A three-way comparison of funding instruments on cost, terms and timetable, with the client's choice and reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask two banks and two arrangers for indicative terms"
                - "Compare the three instruments on cost, covenants, currency and tenor"
                - "Note how each option affects ratings and investor limits"
                - "Record the finance director's choice and reasons"
            - name: Deal currency and payment route decision
              description: |-
                ## Purpose
                When a Jamaican buyer acquires a Barbadian company, or a Trinidad group pays in US dollars it may struggle to source, the currency of the price and how the money moves is a negotiation in its own right. Deciding the deal currency, the payment route through correspondent banks and who carries the conversion risk, with the client's treasury, removes one of the most common late closing problems.

                ## Milestones
                1. The currencies of the price, the funding and the seller's needs set out on one page.
                2. Conversion risk and timing estimated using the currency brief and treasury input.
                3. The payment route and correspondent banks confirmed with both sides' banks.
                4. The client's decision on currency and risk allocation recorded before term sheet.

                ## Notes
                Start from the **Risk register** template. Correspondent banking relationships in the region have narrowed, so check early that the paying and receiving banks can actually transact with each other.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A recorded decision on deal currency, payment route and conversion risk allocation, confirmed with both banks before term sheet."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set out the price, funding and seller currencies on one page"
                - "Ask the client's treasury how long conversion of the sum would take"
                - "Confirm the correspondent banking route with both sides' banks"
                - "Record the agreed currency and who carries conversion risk"
            - name: Acquisition route choice for a listed regional target
              description: |-
                ## Purpose
                Buying a listed Caribbean company can be done by a takeover bid, a scheme or amalgamation, a block purchase from the controlling family followed by an offer to minorities, or a partial offer, and the takeover rules in each jurisdiction shape what is allowed. Laying the routes side by side with counsel shows the client the cost, timetable, approval thresholds and execution risk of each before anyone approaches the target.

                ## Milestones
                1. Each available route described with counsel's input for the target's jurisdiction.
                2. Shareholder approval thresholds, offer obligations and timetables compared.
                3. The likely response of the main holders, including pension funds, assessed for each route.
                4. The client's chosen route and fallback recorded.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A counsel-reviewed comparison of acquisition routes with the client's chosen route and fallback recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask counsel which acquisition routes are available in the jurisdiction"
                - "Compare approval thresholds, offer obligations and timetables"
                - "Assess how the largest holders would view each route"
                - "Record the client's chosen route and fallback"
            - name: Rights issue or private placement for a capital raise
              description: |-
                ## Purpose
                When a listed regional company needs fresh equity, it can offer new shares to all holders through a rights issue, or place them with a few institutions faster but with dilution for everyone else. Testing both against the shareholder register, the controlling family's willingness to follow and the institutions' appetite gives the board a fair basis to choose.

                ## Milestones
                1. The shareholder register analysed for who could and would take up rights.
                2. Indicative appetite gathered from institutions within your firm's wall-crossing rules.
                3. Both routes compared on timetable, cost, discount and dilution.
                4. The board's decision recorded with the reasons.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A comparison of rights issue and placement on timetable, cost and dilution, with the board's decision recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Analyse the latest shareholder register by holder type"
                - "Ask the controlling shareholder whether it would follow its rights"
                - "Compare both routes on discount, dilution, cost and timetable"
                - "Record the board's decision and reasons"
            - name: Minority buyout and delisting of a listed subsidiary
              description: |-
                ## Purpose
                Many regional groups keep subsidiaries listed for decades with a small, illiquid free float that brings costs and little benefit, and eventually ask whether to buy out the minorities and delist. Working through the price minorities would accept, the independent advice they will need, the approvals and the exchange's delisting rules lets the group decide whether the buyout is worth it.

                ## Milestones
                1. The cost of staying listed estimated against the benefit to the group.
                2. A fair price range built with premium evidence from regional precedents.
                3. Independent director, minority vote and delisting requirements confirmed with counsel.
                4. A recommendation on whether to proceed recorded by the group board.

                ## Notes
                Minority holders in small markets are often pension funds who will want an independent valuation. Plan for one from the start.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A board-recorded decision on a minority buyout, supported by a price range, listing cost estimate and confirmed approvals."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Estimate the yearly cost of keeping the subsidiary listed"
                - "Build a price range using premiums from regional precedents"
                - "Confirm minority vote and delisting rules with counsel"
                - "Present a proceed or hold recommendation to the group board"
            - name: Public offer launch on a Caribbean exchange
              description: |-
                ## Purpose
                An initial or additional public offer in the region runs on a prospectus approved by the securities regulator, an application period with brokers and often a reserved tranche for employees or key investors, followed by allotment when it is oversubscribed. Getting launch day, the application process, allotment rules and the first day of trading right is what the client and its shareholders will remember.

                ## Milestones
                1. Prospectus approval, launch date, application period and listing date fixed in a timetable agreed by all parties.
                2. Broker network, application forms and payment arrangements tested before launch.
                3. Allotment rules for oversubscription agreed with the client and published in the prospectus.
                4. Allotment completed, refunds issued and the shares admitted to trading on the planned date.

                ## Notes
                Start from the **Operational checklist** template. Refunds to oversubscribed applicants are where small offers most often draw complaints, so test the refund process as carefully as the application one.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The offer opens, allots and lists on the dates in the agreed timetable, with all refunds issued within the stated period."
                cadence: one-shot
                effort_hours_estimate: "60"
              tasks:
                - "Draft the offer timetable and circulate it to all parties"
                - "Test application forms and payment routes with two brokers"
                - "Agree the allotment rules with the client before the prospectus is final"
                - "Run a refund dry run before the application period opens"
            - name: Regional investor roadshow across three capitals
              description: |-
                ## Purpose
                Most regional offers and bonds need meetings in at least two or three of Kingston, Port of Spain, Bridgetown, Nassau or Georgetown, and inter-island flights are few and unreliable. Planning the route, the meetings and backups around the flight schedule, with a deck tuned to each market's investors, gets management in front of the right people without losing a day in an airport.

                ## Milestones
                1. Target investors in each city confirmed with meeting times.
                2. Flights, ground transport and a backup video option booked for every leg.
                3. The deck adjusted for each market's currency and investor concerns.
                4. Feedback from every meeting logged within a day for the client.

                ## Notes
                Start from the **Trip** template. Build one spare half day into the route: a cancelled regional flight can cost a whole day.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Meetings held with the target investors in each city, with feedback logged for the client within a day of each meeting."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Choose the cities and target investors for the roadshow"
                - "Check regional flight schedules and add a spare half day"
                - "Adjust the deck for each market's currency and investor concerns"
                - "Log feedback from each meeting within a day"
            - name: Extraordinary general meeting for a regional merger
              description: |-
                ## Purpose
                Mergers and amalgamations of listed regional companies usually need an extraordinary meeting of shareholders, often in more than one country, with a circular, proxies and a vote that a few institutions decide. Preparing the circular timetable, the investor engagement and the meeting day logistics with counsel and the registrar gets the resolution passed on the planned date.

                ## Milestones
                1. The circular timetable and notice period confirmed by counsel for each jurisdiction.
                2. The largest holders engaged and their voting intentions understood before the notice goes out.
                3. Proxy collection and registrar arrangements tested.
                4. The meeting held and the result announced on every exchange where the company trades.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The extraordinary meeting held on the planned date and the result announced on every relevant exchange the same day."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Ask counsel for the notice period and circular steps in each jurisdiction"
                - "Meet the largest holders before the notice is sent"
                - "Test proxy collection with the registrar"
                - "Prepare the result announcement for each exchange in advance"
            - name: Regional bond closing and listing day
              description: |-
                ## Purpose
                Closing a local bond means money from many institutions, often in two currencies, arriving on one day, with the trustee deed signed, the registrar loaded and, if listed, the exchange notified. A closing checklist run by the arranger, rehearsed the day before, avoids the classic failure of funds stuck between correspondent banks while the issuer waits.

                ## Milestones
                1. The closing checklist agreed by issuer, trustee, registrar and counsel.
                2. Every investor's settlement details and currency confirmed two days before closing.
                3. A funds flow memo approved by the issuer's finance director.
                4. Funds received, notes issued and the listing notice published on closing day.

                ## Notes
                Start from the **Operational checklist** template. Confirm cut-off times at every bank in the chain, as regional banks often have earlier wire cut-offs than the issuer expects.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All funds received, notes issued and any listing notice published on the scheduled closing date."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Draft the closing checklist and agree it with all parties"
                - "Confirm every investor's settlement details two days before closing"
                - "Ask each bank in the chain for its wire cut-off time"
                - "Get the funds flow memo signed by the finance director"
            - name: State enterprise share sale announcement and offer
              description: |-
                ## Purpose
                When a Caribbean government sells shares in a state enterprise to the public, the offer runs on a political timetable, under public scrutiny and often with tranches for citizens, employees and institutions. Preparing the announcement, the public education campaign and the offer period with the ministry and the regulator is how the sale gets done fairly and without a crisis on day one.

                ## Milestones
                1. Tranche sizes and eligibility rules for citizens, employees and institutions agreed with the ministry.
                2. A public explanation of the offer prepared in plain language and approved by the regulator.
                3. Broker capacity and application points checked for expected demand.
                4. The offer opened, closed and allotted on the published timetable.

                ## Notes
                Everything said in public will be read politically. Keep all statements factual and agreed with the ministry and the regulator before release.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The state share offer opens, closes and allots on the published timetable with tranche rules applied as announced."
                cadence: one-shot
                effort_hours_estimate: "50"
              tasks:
                - "Agree tranche sizes and eligibility rules with the ministry"
                - "Draft a plain-language explanation of the offer for the public"
                - "Check broker and application point capacity against expected demand"
                - "Publish the offer timetable once the regulator approves it"
            - name: Speaking at a regional finance conference
              description: |-
                ## Purpose
                Investment and capital markets conferences in the region are where finance directors, pension fund trustees and regulators meet in one room, and a well-judged talk or panel builds a banker's name faster than a year of cold emails. Preparing a clear, non-promotional view on a regional theme and following up with the people you meet turns one appearance into several conversations.

                ## Milestones
                1. One conference chosen and a speaking or panel slot agreed with the organisers.
                2. A talk on a regional capital markets theme cleared by your compliance team.
                3. At least ten useful contacts made and noted.
                4. Follow-up messages sent to every contact within a week.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A compliance-cleared talk delivered at one regional conference, with at least ten contacts followed up within a week."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick one regional finance conference in the next year"
                - "Offer the organisers a talk on a regional capital markets theme"
                - "Send the slides to compliance for clearance"
                - "Follow up every useful contact within a week of the event"
            - name: Analyst at a regional merchant bank or brokerage
              description: |-
                ## Purpose
                Analysts in Caribbean firms often work on a public offer, a bond and a valuation report in the same month, with less formal training and fewer templates than at a large international bank. Building your own toolkit, finding a mentor and deliberately getting reps on each deal type turns the breadth of a small firm into an advantage instead of chaos.

                ## Milestones
                1. A personal toolkit of model, offer document and valuation templates saved in one place.
                2. A senior colleague agreed as a mentor with a monthly check-in.
                3. At least one piece of work completed on equity, debt and advisory deals within a year.
                4. A list of skills still missing, with a plan to fill each.

                ## Notes
                Start from the **Meeting notes** template for mentor check-ins. Keep templates free of client data before you reuse them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A personal template toolkit, a monthly mentor check-in held for six months and work done on three deal types within a year."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Save clean versions of the best models and documents you have worked on"
                - "Ask a senior colleague to mentor you with a monthly check-in"
                - "Hold the mentor check-in and note one skill to work on next @recurring(monthly:5)"
                - "Ask your staffer for work on the deal type you have not yet done"
            - name: Returning diaspora banker joining a Caribbean firm
              description: |-
                ## Purpose
                Bankers coming home from London, New York or Toronto bring strong technical skills but often underestimate how relationships, family networks and small-market realities shape deals in the region. Planning the first six months around listening, rebuilding local networks and adapting big-market habits makes the move work for you and your new firm.

                ## Milestones
                1. A list of fifty local contacts to reconnect with, from schoolmates to former colleagues now in finance.
                2. Meetings held with the main regulators, exchanges and institutional investors in your market.
                3. Two big-market habits identified that need adapting and a plan for each.
                4. A six-month review with your new manager on how the move is going.

                ## Notes
                Allow time for practical matters such as professional registration, tax residence and moving money home, and check each with the right professional before you move.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Fifty contacts renewed, meetings held with key market institutions and a six-month review completed with your manager."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List fifty people in the local finance community to reconnect with"
                - "Book introductory meetings with the regulator, exchange and top investors"
                - "Write down two habits from your old bank that need adapting"
                - "Schedule a six-month review with your manager"
            - name: Covering the Caribbean from an international bank
              description: |-
                ## Purpose
                Bankers covering the region from Miami, New York, London or Toronto usually see the largest regional groups, the sovereigns and the international bond deals, but can miss the local politics and relationships that decide who gets the mandate. Building local partnerships, visiting often and knowing where an international bank adds value over local firms keeps coverage credible.

                ## Milestones
                1. The deal types where your bank adds value over local firms written down and agreed with your seniors.
                2. At least one local firm in each main market identified as a potential partner.
                3. A visit schedule set with at least two trips a year to each main market.
                4. Coverage results reviewed yearly against the time and travel spent.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written coverage plan with local partners, two visits a year per main market and a yearly results review."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down where your bank wins over local firms in the region"
                - "Identify a potential local partner firm in each main market"
                - "Set a schedule of two visits a year to each main market"
                - "Review mandates won against travel and time each year @recurring(yearly)"
            - name: Corporate finance in a regional accounting firm practice
              description: |-
                ## Purpose
                Many regional deals are advised by the corporate finance teams of large accounting firms, mixing valuation reports, due diligence and transaction advice with strict independence rules when the firm also audits the client. Understanding where those rules apply and how to build an M&A track record in that setting helps you grow without tripping over conflicts.

                ## Milestones
                1. The firm's independence rules for audit clients read and summarised.
                2. A list of engagement types you can and cannot take for audit clients agreed with your risk team.
                3. A personal track record of transaction work recorded deal by deal.
                4. A development conversation held on moving toward lead advisory roles.

                ## Notes
                Start from the **Meeting notes** template for the development conversation. Independence questions go to your firm's risk team every time.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A summary of independence limits agreed with the risk team and a deal-by-deal track record discussed in a development meeting."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read your firm's independence rules for audit clients"
                - "Agree with the risk team which engagements you can take"
                - "Record every transaction you work on with your role"
                - "Book a development conversation about lead advisory work"
            - name: Moving to corporate development at a regional group
              description: |-
                ## Purpose
                Diversified regional groups hire bankers into corporate development and strategy roles to run acquisitions, disposals and capital raises from inside, often with a direct line to the chair. Weighing the role, the group's deal appetite, pay and the family dynamics against staying in advisory lets you make the move with your eyes open.

                ## Milestones
                1. Two or three groups with active corporate development teams identified.
                2. Conversations held with people currently or formerly in those roles.
                3. The offer compared with your current path on pay, deal flow and progression.
                4. A decision recorded with the reasons, whatever it is.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a corporate development move, based on conversations with at least three people in those roles."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the regional groups with active corporate development teams"
                - "Speak to three people who hold or held those roles"
                - "Compare pay, deal flow and progression with staying in advisory"
                - "Write down your decision and the reasons for it"
            - name: Senior banker building a regional franchise
              description: |-
                ## Purpose
                Senior regional bankers win mandates through decades-long relationships with families, boards and ministries, and a franchise built on one or two patrons disappears when they retire. A deliberate plan for coverage across the next generation of family members, finance directors and public officials keeps the franchise alive as the region's leadership changes.

                ## Milestones
                1. Each key client mapped to current and next-generation decision makers.
                2. Introductions planned for juniors to every key relationship.
                3. A yearly review of mandates won by relationship and by generation.
                4. Succession for your own top relationships agreed with your firm.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A relationship map covering next-generation decision makers for every key client, reviewed yearly, with succession agreed."
                cadence: rolling
              tasks:
                - "Map current and next-generation decision makers at each key client"
                - "Introduce a junior colleague to one key relationship each quarter"
                - "Review mandates won by relationship and generation @recurring(yearly)"
                - "Agree succession for your top relationships with your firm"
            - name: Family group succession and partial sale
              description: |-
                ## Purpose
                Many founding families in the region reach a point where the next generation does not want to run the business, siblings want different things or estate planning calls for liquidity. Advising on a partial sale, a listing or bringing in a strategic partner means working through family governance, valuation and what each branch needs, with the family's legal and tax advisers alongside.

                ## Milestones
                1. Each family branch's goals for control, income and liquidity written down after separate conversations.
                2. Options from a minority sale to a listing compared against those goals.
                3. A valuation range prepared with sourced regional adjustments.
                4. The family's chosen route recorded and handed to its legal and tax advisers to implement.

                ## Notes
                Family dynamics often matter more than price. Meet each branch separately before presenting options to the whole family.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A documented comparison of options against each family branch's goals, with the family's chosen route recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Meet each family branch separately to understand its goals"
                - "Compare minority sale, partner and listing options against those goals"
                - "Prepare a valuation range with sourced regional adjustments"
                - "Record the family's chosen route and brief its legal and tax advisers"
            - name: State enterprise sale with citizen and employee tranches
              description: |-
                ## Purpose
                Selling a state enterprise in a small economy has to balance price against wide public ownership, fair treatment of employees, the interests of trade unions and the government's fiscal needs. Designing the structure, from the strategic partner stake to citizen and employee tranches and any loyalty or lock-up features, is specialist work that sets up the offer itself.

                ## Milestones
                1. The government's objectives on price, ownership spread and control recorded with the ministry.
                2. Structure options with strategic partner, institutional, citizen and employee tranches compared.
                3. Employee and union consultation needs identified with the ministry.
                4. A recommended structure presented to the government and its decision recorded.

                ## Notes
                Transparency rules for state sales are usually stricter than for private ones. Agree with the ministry what will be published and when before any outreach.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A structure recommendation with tranche design and consultation plan presented to the government, with its decision recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Record the government's objectives on price, ownership spread and control"
                - "Model structure options with different tranche sizes"
                - "Identify employee and union consultation needs with the ministry"
                - "Present the recommended structure and record the decision"
            - name: Deals after a sovereign or financial sector restructuring
              description: |-
                ## Purpose
                Several Caribbean economies have been through sovereign debt restructurings or the failure of large financial groups, which left investors holding exchanged bonds, frozen assets and a cautious attitude to new paper. Deals in that setting need extra work on investor confidence, legacy holdings and how restructured instruments are valued and accepted as consideration.

                ## Milestones
                1. The terms of the relevant restructuring summarised from public documents.
                2. Investors' legacy holdings and any limits on new exposure understood from conversations.
                3. Valuation of restructured instruments agreed with the client's auditors or valuers.
                4. Investor messaging prepared that addresses the restructuring directly.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A summary of the restructuring, investor positions and agreed instrument valuations used in one live or prospective deal."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the public documents on the relevant restructuring"
                - "Ask key investors how legacy holdings affect new exposure"
                - "Agree how restructured instruments will be valued with the auditors"
                - "Draft investor messaging that addresses the restructuring openly"
            - name: Reaching diaspora investors in a regional offer
              description: |-
                ## Purpose
                Diaspora communities in the UK, US and Canada often want to own shares in companies back home, but marketing a Caribbean offer to them can trigger securities laws in their countries of residence. Working out with counsel what can lawfully be offered, how residents abroad can apply and pay, and how they will hold and sell the shares lets a client widen its investor base without creating a regulatory problem overseas.

                ## Milestones
                1. Counsel's advice recorded on what marketing and sales to residents of each target country is permitted.
                2. An application and payment route for overseas investors tested with a local broker.
                3. Custody, dividend payment and resale arrangements for overseas holders explained in writing.
                4. Approved wording for any diaspora communications signed off by counsel and compliance.

                ## Notes
                When in doubt, the default is not to market abroad. Overseas residents can still apply on their own initiative where the rules allow it, but that line is for counsel to draw.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A counsel-approved note on what can be offered to diaspora investors in each target country, with a tested application route."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the countries where the client's diaspora investors mainly live"
                - "Ask counsel what marketing to residents of each country is permitted"
                - "Test an overseas application and payment route with a local broker"
                - "Get diaspora communication wording signed off by counsel and compliance"
            - name: Multi-island acquisition by a regional group
              description: |-
                ## Purpose
                A regional group buying a business with operations in six or seven islands faces a separate registry, regulator, labour law, currency and often local minority partner in each. Planning the deal country by country, with local counsel and a consolidated timetable, is the advanced version of everything in this area and the work a senior regional banker is hired for.

                ## Milestones
                1. Each country's approvals, registrations and minority partner rights listed with local counsel.
                2. A consolidated timetable showing which country sets the closing date.
                3. Price allocation by country agreed with tax and legal advisers.
                4. A closing plan for simultaneous or staged completion agreed with the client.

                ## Notes
                Local minority partners in individual islands can hold pre-emption rights that block the whole deal. Find them in the first week.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A country-by-country approvals list, consolidated timetable and agreed closing plan delivered to the client."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List approvals and minority partner rights in each country with counsel"
                - "Build one timetable and mark the country that sets closing"
                - "Agree price allocation by country with tax and legal advisers"
                - "Choose simultaneous or staged completion with the client"
---

# Caribbean Corporate Finance Deals

Corporate finance in the Caribbean is real banking at a smaller scale with its own rules: a handful of exchanges with thin trading, currencies that are pegged, managed or hard to convert, a few large pension funds and insurers who decide most offers, family conglomerates that own half the market, and governments selling shares on political timelines. This area starts with foundations (the exchange and regulator map, currency and exchange control checks, the investor base, group structures and the precedent file), then the operating routines that keep a regional banker current, the knowledge of valuation, takeover rules, local bonds and ratings that differs from the big markets, the decisions on listing venue, deal currency and acquisition route, dated events from a public offer to an extraordinary meeting, variants for analysts, returning diaspora bankers and those covering the region from abroad, and specialist work on family successions, state share sales and deals after a debt restructuring.

What repeats is a Monday regional deal scan, a Friday mandate pipeline review, monthly liquidity, currency, relationship and disclosure checks on varied days, quarterly calls with pension funds and insurers and a yearly hurricane season plan and budget watch. The **Vendor**, **Risk register**, **Trip**, **Meeting notes** and **Operational checklist** templates pair with the adviser bench, currency risks, the regional roadshow, investor calls and public offer launch day. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
