---
id: investment-banking.cross-border-m-and-a-execution
name: Cross-Border M&A Execution
description: "A banker's system for deals across borders: jurisdiction maps, merger control and foreign investment trackers, currency exposure, time zone rhythms, local advisers and negotiating well in another business culture."
category: business
version: 1.0.0
tags: [investment-banking, cross-border-m-and-a-execution, knowledge-worker, analyst, associate, cross-border, regulatory-approvals, foreign-investment]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - risk-register
    - meeting-notes
    - trip
    - operational-checklist
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cross-Border M&A Execution
          description: "Running deals across borders: regulatory approvals, foreign investment reviews, currency, time zones, local advisers and cultural differences in negotiation."
          projects:
            - name: Jurisdiction map for a cross-border deal
              description: |-
                ## Purpose
                Every cross-border deal touches more countries than the headline suggests: the buyer's home, the target's home, every country where either has meaningful sales or assets, and the places where holding companies sit. A one-page map of those jurisdictions, with what each one could require, is the document every later workstream hangs from, and it is far cheaper to build in week one than to discover a missing country a month before signing.

                ## Milestones
                1. Every jurisdiction where the buyer, the target or their holding entities have revenue, assets, employees or listings listed on one page.
                2. Each jurisdiction tagged for possible merger control, foreign investment, sector licence, takeover or employee consultation requirements.
                3. The map reviewed by the client's legal team and external counsel, with their corrections made.
                4. Jurisdictions still uncertain marked with the person responsible for confirming them.

                ## Notes
                Revenue by country is the input people forget. Ask the target and the buyer for turnover split by country early, because merger control thresholds usually run on it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page jurisdiction map with requirement tags for every relevant country, reviewed by the client's counsel."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request revenue, asset and headcount splits by country from both sides"
                - "List every jurisdiction where either party has a meaningful presence"
                - "Tag each jurisdiction with the approvals it could trigger"
                - "Send the draft map to counsel and record who confirms each open country"
            - name: Deal timeline set by the slowest approval
              description: |-
                ## Purpose
                In a domestic deal the timeline is set by the parties; across borders it is set by whichever regulator moves slowest. Building the timeline backwards from the longest plausible review, including pre-notification, possible extended phases and local holidays, gives the client a realistic long-stop date and stops the bank promising a closing that the law cannot deliver.

                ## Milestones
                1. Each required approval listed with its pre-notification, formal review and extended review periods as advised by counsel.
                2. The critical path identified, with the approval most likely to set the closing date named.
                3. Base, slow and very slow closing dates shown on a single chart.
                4. A recommended long-stop date range agreed with counsel and shared with the client.

                ## Notes
                Statutory review periods often start only when the authority declares a filing complete, which can take weeks of questions. Build that pre-filing time into the plan rather than starting the clock at submission.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A timeline chart with base, slow and very slow closing dates and a long-stop range agreed with counsel."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask counsel for the pre-notification and review periods in each jurisdiction"
                - "Draw the approvals as parallel bars and mark the longest path"
                - "Add local public holidays and summer slowdowns to each regulator's bar"
                - "Present base, slow and very slow closing dates to the deal lead"
            - name: Merger control filing analysis across jurisdictions
              description: |-
                ## Purpose
                Merger control thresholds differ by country: some use combined turnover, some local turnover of each party, some market share, and a few apply even when the target has no local subsidiary. Bankers do not make the legal call, but they supply the numbers and keep the analysis moving, so a clear filing table built with competition counsel is one of the most valuable things an analyst can own on a cross-border deal.

                ## Milestones
                1. Turnover and asset figures for both parties collected in each jurisdiction on the basis counsel specifies.
                2. A filing table showing, for each jurisdiction, whether counsel advises a filing is mandatory, voluntary or not required.
                3. Suspensory regimes, where closing must wait for clearance, flagged in the table.
                4. Overlaps between the parties' products in each market summarised for counsel's substantive review.
                5. The final table signed off by competition counsel and filed in the deal folder.

                ## Notes
                Counsel decides whether a filing is needed. Your role is accurate inputs on the basis they ask for, such as the right financial year and the right currency conversion rate.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A filing table covering every mapped jurisdiction, with counsel's view on each and suspensory regimes flagged, saved in the deal folder."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask competition counsel which turnover basis and financial year to use"
                - "Collect turnover by jurisdiction for both parties on that basis"
                - "Build the filing table with counsel's view and suspensory status per country"
                - "Summarise product overlaps by market for counsel's review"
            - name: Foreign investment screening assessment
              description: |-
                ## Purpose
                A growing number of countries review foreign acquisitions on national security or public interest grounds, and the sectors caught now reach well beyond defence into data, energy, health, semiconductors and critical infrastructure. Knowing early whether a review regime such as CFIUS in the US or the national screening regimes across Europe and Asia is likely to apply shapes the timeline, the buyer's choice of investors and the deal protections the seller will ask for.

                ## Milestones
                1. The buyer's ultimate owners and investors, including any state links, documented for counsel.
                2. The target's activities in each country checked against the sector lists counsel identifies.
                3. Each jurisdiction marked as mandatory filing, voluntary filing advisable or no filing, on counsel's advice.
                4. The likely review timeline and any foreseeable conditions added to the deal timeline.

                ## Notes
                Ownership chains matter here more than anywhere else. A minority investor two levels up the buyer's structure can change how a regulator sees the deal.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A foreign investment table for every mapped jurisdiction with counsel's filing view and an updated deal timeline."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Request the buyer's full ownership chart up to its ultimate owners"
                - "List the target's activities that could fall in a sensitive sector"
                - "Record counsel's filing view for each jurisdiction in one table"
                - "Add foreign investment review periods to the deal timeline"
            - name: Choosing local counsel in each deal country
              description: |-
                ## Purpose
                Lead counsel usually runs the deal, but the filings, notarial steps and local law questions in each country often sit with a local firm. Picking those firms deliberately, on regulator experience, responsiveness across time zones and fee basis, avoids the common situation where one slow or inexperienced local adviser holds up the whole closing.

                ## Milestones
                1. A list of countries needing local counsel, agreed with lead counsel and the client.
                2. Two candidate firms per country, each assessed on recent filings with the relevant authority, team availability and language.
                3. Fee quotes or caps obtained on the same scope for each candidate.
                4. One firm chosen per country, with the decision and the reason recorded.

                ## Notes
                Start from the **Vendor** template. Lead counsel often has a network of trusted local firms; ask for their view before running your own search.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One chosen local firm per country, with fee basis and selection reason recorded and the client's approval noted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree with lead counsel which countries need a local firm"
                - "Ask lead counsel for two recommended firms in each country"
                - "Request fee quotes from each firm on the same written scope"
                - "Record the chosen firm and the reason for each country"
            - name: Time zone operating rhythm for the deal team
              description: |-
                ## Purpose
                With a client in one region, the target in another and counsel in a third, the working day has no natural overlap, and the same two people end up taking every midnight call. Agreeing a written rhythm on day one, with core overlap hours, a turn deadline for documents and who covers each region's morning, keeps the deal moving around the clock without burning out one office.

                ## Milestones
                1. Each team member's location and working hours captured in one table.
                2. Core overlap hours identified and agreed for live calls.
                3. A document turn rule agreed, such as comments in by a set hour in the last office to close.
                4. A handover note format agreed so each region starts its day knowing what changed overnight.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page rhythm document with overlap hours, a turn deadline and a handover format, circulated to the whole deal team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every deal team member's city and normal working hours"
                - "Find the daily window when all key offices are awake"
                - "Propose a turn deadline and a handover note format to the deal lead"
                - "Circulate the agreed rhythm to the full working group list"
            - name: Currency exposure map from signing to closing
              description: |-
                ## Purpose
                When the buyer reports in one currency and pays in another, a move in the exchange rate between signing and closing can change the real price by more than the last round of negotiation did. Mapping exactly which amounts are fixed in which currency, and when each is paid, gives the client's treasury team the facts they need before deciding whether and how to hedge.

                ## Milestones
                1. Every payment in the deal listed: price, debt repayment, fees, escrow and earn-out, each with its currency and expected date.
                2. The buyer's funding sources listed by currency.
                3. The mismatch between funding currency and payment currency quantified for a range of exchange rate moves.
                4. The map sent to the client's treasury team with the dates they need for any hedging decision.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A currency exposure table with amounts, currencies, dates and a sensitivity to exchange rate moves, received by the client's treasury."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every deal payment with its currency and expected timing"
                - "List the buyer's funding sources by currency"
                - "Show the price in the buyer's currency at rates five and ten percent either side"
                - "Send the exposure map to the client's treasury contact"
            - name: Sanctions and export control screening of deal parties
              description: |-
                ## Purpose
                A buyer, a co-investor, a lender or a target customer appearing on a sanctions list can stop a deal outright, and export control rules can restrict who may see the target's technical data. Running the bank's screening early and asking the client and counsel the right questions keeps sensitive information away from people who should not receive it and avoids a late surprise.

                ## Milestones
                1. All deal parties, their owners and named co-investors submitted to the bank's compliance screening.
                2. The target's main customers, suppliers and countries of operation reviewed by counsel for sanctions exposure.
                3. Any export controlled technology identified, with data room access rules agreed.
                4. Screening results and counsel's conclusions filed with compliance.

                ## Notes
                Screening is run by compliance and judged by counsel. Never decide yourself that a name match is a false positive.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Compliance screening completed for every party and owner, with counsel's sanctions and export control view filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Send the full list of parties and owners to compliance for screening"
                - "Ask counsel to review the target's exposure to sanctioned countries"
                - "Ask the target whether any technology is subject to export controls"
                - "File the screening results with the compliance record for the deal"
            - name: Data room access rules across borders
              description: |-
                ## Purpose
                Privacy and data localisation laws in some countries restrict moving employee and customer data abroad, and competitors need clean team arrangements before they see pricing or customer lists. Setting cross-border access rules before the data room opens is much easier than pulling documents back after a buyer in another country has downloaded them.

                ## Milestones
                1. Data categories in the room classified by whether privacy or localisation rules could apply, on counsel's advice.
                2. Personal data redacted or anonymised where counsel requires it.
                3. A clean team protocol agreed for competitively sensitive documents.
                4. Access groups set up by country and role, with the rules written in the data room guide.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A data room access rule sheet covering privacy, localisation and clean team restrictions, approved by counsel before the room opens."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask counsel which countries restrict transfers of personal data abroad"
                - "Classify the planned data room folders by privacy sensitivity"
                - "Draft a clean team access group for competitively sensitive files"
                - "Write the access rules into the data room guide for bidders"
            - name: Weekly regulatory approvals tracker
              description: |-
                ## Purpose
                Ten or more approvals in parallel, each with its own clock and question rounds, is too much to hold in anyone's head. A single tracker, refreshed every Monday from counsel's updates, shows the client and the deal lead which approvals are on time, which have stopped the clock and which now set the closing date.

                ## Milestones
                1. A tracker listing each approval with status, filing date, clock start, expected decision date and owner.
                2. A traffic light rating for each approval against the deal timeline.
                3. The tracker updated weekly from counsel's reports.
                4. The approval currently on the critical path named at the top of every update.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An approvals tracker updated every Monday for the life of the deal, with the critical path approval named each week."
                cadence: rolling
              tasks:
                - "Build the tracker with one row per approval and a named owner"
                - "Collect counsel's status updates and refresh the tracker @recurring(weekly:mon)"
                - "Reconcile the tracker against the deal timeline and long-stop date @recurring(monthly:2)"
                - "Send the refreshed tracker to the deal lead with a two-line summary"
            - name: All-hands call rotation across time zones
              description: |-
                ## Purpose
                Holding the weekly call at a time that suits head office quietly punishes the team in the far time zone every week for months. Rotating the slot, keeping it to forty five minutes and sending the agenda a day ahead keeps attendance up and decisions moving, and it tells the local advisers their time is respected.

                ## Milestones
                1. Two or three call slots agreed that each put the inconvenient hour on a different region.
                2. A standing agenda: approvals, documents, open issues, next week's deadlines.
                3. Agendas sent a working day ahead and short notes sent within hours of each call.
                4. Attendance tracked so missing workstreams are followed up the same day.

                ## Notes
                Start from the **Meeting notes** template for the call notes. Keep decisions and owners at the top; nobody in a different time zone reads to the end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rotating weekly all-hands call held with an agenda sent a day ahead and notes circulated within four hours."
                cadence: rolling
              tasks:
                - "Propose three rotating call times to the deal lead"
                - "Send the all-hands agenda and dial-in to the working group @recurring(weekly:tue)"
                - "Circulate decisions and owners from the call the same day"
                - "Chase any workstream that missed the call for its update"
            - name: Exchange rate and deal value monitor
              description: |-
                ## Purpose
                Clients ask what the deal costs today in their own currency, and boards ask again before every approval meeting. Keeping a short weekly record of the relevant exchange rates, and what they mean for the price, any agreed collar and the financing, means the answer is always ready and nobody quotes a stale rate in a board paper.

                ## Milestones
                1. The source and time of day for exchange rates agreed with the client's treasury.
                2. A weekly log of rates and the resulting price in the buyer's currency.
                3. Any move beyond a threshold the client sets flagged to the deal lead the same day.
                4. Board papers and presentations checked against the latest logged rate before release.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly exchange rate log with the price in the buyer's currency, kept from signing to closing with threshold moves flagged."
                cadence: rolling
              tasks:
                - "Agree the rate source and fixing time with the client's treasury"
                - "Log closing rates and the price in the buyer's currency @recurring(weekly:fri)"
                - "Check the rates in any board paper against the log before it goes out"
                - "Review the exposure and threshold with the client's treasury @recurring(monthly:7)"
            - name: Translation and document version register
              description: |-
                ## Purpose
                Cross-border deals produce documents in two or more languages, and the translated version of the purchase agreement, the regulator filing or the employee letter can drift from the original within a single turn. A register that pairs every original with its translation, version and translator, and notes which language governs, stops a signing set going out with mismatched text.

                ## Milestones
                1. Every document requiring translation listed with original language, target language and governing language.
                2. Each translation linked to the exact version of the original it was made from.
                3. A rule that a changed original triggers a translation update, agreed with counsel.
                4. The register checked before every circulation of a signing or filing set.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register pairing every original and translated document by version, checked weekly and before every signing set."
                cadence: rolling
              tasks:
                - "List all documents that will need a translated version"
                - "Record the governing language for each document with counsel"
                - "Compare the latest originals and translations by version number @recurring(weekly:wed)"
                - "Flag any translation that lags its original to the responsible adviser"
            - name: Regulator correspondence log
              description: |-
                ## Purpose
                Regulators in different countries send questions, requests for information and clock stops through different channels and lawyers, and an answer given to one authority can be read by another. Logging every exchange in one place, with what was asked, what was answered and by when, keeps the story consistent across jurisdictions and stops deadlines being missed.

                ## Milestones
                1. One log with every regulator question, its deadline, the responsible adviser and the answer's status.
                2. Answers that touch market definition or remedies cross-checked across jurisdictions before submission.
                3. Each clock stop or restart recorded with its date.
                4. The log reviewed weekly with counsel.

                ## Notes
                Bankers often help prepare the economic and financial data behind answers. Make sure the same numbers go to every authority unless counsel decides otherwise.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A correspondence log covering every regulator exchange, reviewed weekly with counsel, with no missed response deadlines."
                cadence: rolling
              tasks:
                - "Set up the log with columns for authority, question, deadline and owner"
                - "Review open regulator questions and deadlines with counsel @recurring(weekly:thu)"
                - "Cross-check financial data in answers across all authorities"
                - "Record every clock stop and restart the day it happens"
            - name: Holiday and blackout calendar for deal countries
              description: |-
                ## Purpose
                A filing due on a national holiday, a signing planned during a month when an entire country takes its summer break, or a negotiation scheduled in a religious festival can each cost a week. A shared calendar of public holidays, regulator closures, reporting blackouts and festival periods in every deal country lets the team plan around them rather than discover them.

                ## Milestones
                1. Public holidays for every deal country added to a shared calendar for the next twelve months.
                2. Known regulator closure periods and slow seasons marked.
                3. Each party's reporting blackout periods added from their financial calendars.
                4. Major religious and cultural festivals marked where they affect working days.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared twelve-month calendar for all deal countries with holidays, closures and blackouts, refreshed monthly."
                cadence: rolling
              tasks:
                - "Add public holidays for each deal country to a shared calendar"
                - "Ask local counsel when each regulator slows down or closes"
                - "Check next month's calendar against the deal timeline @recurring(monthly:3)"
                - "Add new deal countries and roll the calendar forward @recurring(quarterly)"
            - name: Political and policy watch for deal countries
              description: |-
                ## Purpose
                Elections, new foreign investment rules, trade disputes and ministerial changes can turn a routine approval into a political one within weeks. A short weekly scan of policy news in each deal country, written up for the deal lead, gives the client early warning and time to plan its engagement with government.

                ## Milestones
                1. News sources and local adviser contacts chosen for each deal country.
                2. A weekly scan covering elections, investment policy, trade measures and sector regulation.
                3. Anything that could affect an approval written up in three lines for the deal lead.
                4. A monthly summary of the political picture added to the client update.

                ## Notes
                Start from the **Risk register** template to hold the political, regulatory and currency risks in one place with owners and triggers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: habit
                success_criteria: "A weekly policy scan for every deal country with relevant items flagged and a monthly summary in the client update."
                cadence: rolling
              tasks:
                - "Pick two reliable news sources for each deal country"
                - "Scan policy and investment news for each deal country @recurring(weekly:mon)"
                - "Write the monthly political summary for the client update @recurring(monthly:12)"
                - "Add any new political risk to the risk register with an owner"
            - name: Cross-border open issues list for the client
              description: |-
                ## Purpose
                The questions that stall cross-border deals are rarely in the purchase agreement: who signs for a foreign subsidiary, whether a local minority holder must consent, which entity employs the key managers. Keeping these on one short list reviewed with the client every week stops them drifting to the night before signing.

                ## Milestones
                1. Every cross-border issue logged with the jurisdiction, owner and date it must be resolved.
                2. Issues sorted into those blocking signing, blocking closing and post-closing.
                3. The list reviewed with the client's deal lead every week.
                4. Resolved issues kept with the resolution and its source, for the closing file.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A weekly reviewed issues list with every item owned, dated and sorted by whether it blocks signing or closing."
                cadence: rolling
              tasks:
                - "Start the issues list from the jurisdiction map and the last call notes"
                - "Review open cross-border issues with the client's deal lead @recurring(weekly:wed)"
                - "Move resolved items to the closed tab with their source"
                - "Escalate any signing blocker without an owner to the deal lead"
            - name: Local adviser scope and fee check
              description: |-
                ## Purpose
                On a deal with eight local law firms, three accountants and a translation agency, fees creep in places nobody watches until the invoices arrive at closing. A monthly check of work done against the agreed scope and fee cap in each country gives the client fair warning and keeps the bank's own advice on cost credible.

                ## Milestones
                1. Each adviser's agreed scope, fee basis and cap recorded in one table.
                2. Monthly fee estimates collected from each adviser.
                3. Any adviser approaching its cap flagged to the client with the reason.
                4. Out of scope work agreed in writing before it starts.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A monthly table of each local adviser's fees against scope and cap, with any overrun flagged to the client in advance."
                cadence: rolling
              tasks:
                - "Record each local adviser's scope, fee basis and cap in one table"
                - "Request month-to-date fee estimates from each local adviser @recurring(monthly:20)"
                - "Flag any adviser near its cap to the client with the reason"
                - "Confirm out of scope work in writing before it begins"
            - name: Cross-border lessons log
              description: |-
                ## Purpose
                Each cross-border deal teaches something specific: which authority asks the hardest questions, which local firm answered at midnight, how long a notarial signing really took. A log kept across deals turns those lessons into an edge in the next pitch and the next timeline, instead of losing them when the team disbands.

                ## Milestones
                1. A log with a row per lesson: country, topic, what happened and what to do next time.
                2. Lessons added within two weeks of each signing or closing.
                3. The log reviewed every quarter and the best lessons shared with the group.
                4. Timing data from past approvals kept so future timelines start from real experience.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A lessons log with entries from every cross-border deal you work on, reviewed quarterly and shared with the group."
                cadence: rolling
              tasks:
                - "Write five lessons from your most recent cross-border deal"
                - "Record how long each past approval actually took against its estimate"
                - "Review the log and share three lessons with the group @recurring(quarterly)"
                - "Add new lessons within two weeks of each deal milestone"
            - name: How merger control regimes differ
              description: |-
                ## Purpose
                Bankers on cross-border deals hear terms like suspensory regime, phase two, substantive test and remedies every week, and juniors who do not understand them cannot follow the timeline or explain it to a client. Learning the main differences between the large regimes, using the European Commission, the US agencies and the UK authority as examples, makes every tracker and timeline easier to build and defend.

                ## Milestones
                1. Mandatory versus voluntary and suspensory versus non-suspensory regimes explained in your own words.
                2. The usual stages of a review, from pre-notification to an in-depth phase, summarised on one page.
                3. The difference between thresholds based on turnover, assets and market share understood.
                4. Your summary checked by competition counsel or a senior banker.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of how three major merger control regimes work, checked by counsel or a senior banker."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a competition law firm's guide to merger control in three regimes"
                - "Write one page on the stages and clocks of each regime"
                - "Ask competition counsel to correct your summary"
                - "Apply the summary to the filing table on your current deal"
            - name: Foreign investment regimes in your main markets
              description: |-
                ## Purpose
                Foreign investment screening rules have widened fast and keep changing, so knowledge from two years ago may already be wrong. Building a short reference on the regimes in the four or five markets your group deals in most, refreshed each quarter, helps you spot a likely review in a pitch before the client's lawyers are even engaged.

                ## Milestones
                1. Your group's four or five most frequent deal countries agreed with a senior banker.
                2. For each, the sectors covered, whether filing is mandatory and the typical review timing noted from a reliable law firm summary.
                3. Recent rule changes in each country recorded with their dates.
                4. The reference refreshed every quarter.

                ## Notes
                Use these notes to ask better questions, not to give advice. Whether a filing is needed on a given deal is always for counsel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reference covering foreign investment regimes in at least four markets, with sources and dates, refreshed each quarter."
                cadence: rolling
              tasks:
                - "Ask a senior banker which countries the group deals in most"
                - "Summarise each country's screening regime from a law firm guide"
                - "Note recent rule changes and their effective dates"
                - "Refresh the reference against new law firm updates @recurring(quarterly)"
            - name: Country risk and currency in cross-border valuation
              description: |-
                ## Purpose
                Valuing a target in an emerging market from a buyer in a developed one raises questions a domestic DCF never asks: which currency to forecast in, how inflation differences flow into the exchange rate, and whether and how to reflect country risk. Working through these choices on a past deal makes you ready to explain them when an MD or client challenges the numbers.

                ## Milestones
                1. The difference between valuing in local currency and in the buyer's currency explained with a worked example.
                2. Common approaches to country risk premiums and their critics summarised.
                3. A past deal model reviewed to see which choices the team made and why.
                4. Your conclusions discussed with the valuation lead on your team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example showing one cash flow valued in two currencies with consistent inflation assumptions, reviewed by your valuation lead."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find a past cross-border deal model in the group's files"
                - "Note the currency, discount rate and country risk choices it made"
                - "Value one simple cash flow in both currencies with consistent inflation"
                - "Talk through your results with the team's valuation lead"
            - name: Local GAAP differences in target financials
              description: |-
                ## Purpose
                Targets reporting under local accounting rules can show EBITDA that is not comparable with peers reporting under IFRS or US GAAP, because of leases, revenue recognition, capitalised costs or pensions. Understanding the main differences, and asking the accountants for a bridge, keeps multiples honest and stops a price being set on numbers that mean something different.

                ## Milestones
                1. The target's accounting framework and auditor identified.
                2. The main differences from the buyer's framework listed with help from the diligence accountants.
                3. A bridge from reported EBITDA to a comparable basis requested and received.
                4. The valuation and comps updated to use the comparable figures, with a footnote.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An EBITDA bridge from the target's local framework to the buyer's, agreed with the diligence accountants and used in the valuation."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the target's accounting framework from its latest audited accounts"
                - "Ask the diligence accountants for the main framework differences"
                - "Request a reported to comparable EBITDA bridge"
                - "Footnote the adjustment wherever the bridged figure is used"
            - name: Public takeover rules in a foreign market
              description: |-
                ## Purpose
                Buying a listed company abroad means working under that market's takeover rules: offer timetables, mandatory bid thresholds, rules on dealing in shares and on what can be said publicly. The banker often runs the timetable and the announcements, so knowing the shape of the local code, with the UK Takeover Code or an EU market's rules as an example, avoids a public misstep that is hard to undo.

                ## Milestones
                1. The local takeover regulator and its main rule book identified.
                2. The offer timetable from announcement to settlement drawn out with local counsel.
                3. Rules on leaks, announcements and share dealing summarised for the deal team.
                4. The bank's own obligations as financial adviser under the local rules confirmed with counsel and compliance.

                ## Notes
                Some regimes put direct duties on the financial adviser, such as confirming that the buyer has the cash. Find out early whether that applies to your bank.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A timetable and one-page rule summary for the foreign takeover regime, checked by local counsel and shared with the deal team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask local counsel for their guide to the market's takeover rules"
                - "Draw the offer timetable from announcement to settlement"
                - "Summarise announcement and dealing restrictions for the deal team"
                - "Confirm the bank's adviser obligations with compliance"
            - name: Tax structuring questions for cross-border deals
              description: |-
                ## Purpose
                Withholding taxes on dividends and interest, transfer taxes, treaty access and the tax cost of moving cash home can each change what a cross-border deal is worth to the buyer. Bankers do not give tax advice, but knowing which questions to put to the tax advisers, and when, keeps the model and the structure aligned and avoids a late price discussion.

                ## Milestones
                1. A list of standard cross-border tax questions agreed with the client's tax advisers.
                2. The model's tax assumptions checked against the advisers' written views.
                3. Transfer taxes and stamp duties in each relevant country confirmed by the advisers.
                4. Any change in the advisers' view logged with its effect on value.

                ## Notes
                Tax structure is for the client and its tax advisers. Put their written view in the model's assumptions page, never your own reading of a treaty.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A question list answered in writing by the tax advisers, with the model's tax assumptions matched to their answers."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draft the cross-border tax question list for the client's tax advisers"
                - "Ask the agent to compare the model's tax inputs with the advisers' memo"
                - "Confirm transfer tax and stamp duty treatment in each country"
                - "Log any change in tax view and its effect on the valuation"
            - name: Negotiation styles across business cultures
              description: |-
                ## Purpose
                Directness, the role of hierarchy, how long relationship building takes and what silence means vary widely between business cultures, and a misread signal can sour a negotiation that the numbers support. Preparing deliberately for the counterparty's style, with advice from colleagues and local advisers who know it, is a practical skill rather than a soft extra.

                ## Milestones
                1. The counterparty's decision makers and their likely role in the negotiation identified.
                2. Notes on the business culture's norms gathered from colleagues and local advisers who have worked there.
                3. A short brief for the deal team on greetings, seniority, pace and how disagreement is expressed.
                4. After the first meeting, the brief corrected with what actually happened.

                ## Notes
                Treat cultural notes as starting hypotheses, not rules. The individuals across the table matter more than any generalisation about their country.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page culture brief for the deal team, used before the first meeting and corrected afterwards."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask two colleagues who have dealt with the counterparty's country for advice"
                - "Ask local counsel how decisions are usually made in companies like the counterparty"
                - "Write a one-page brief on pace, seniority and how disagreement is shown"
                - "Correct the brief with what you saw after the first meeting"
            - name: Working through interpreters and in a second language
              description: |-
                ## Purpose
                Negotiations held through interpreters, or in a language that is second for half the room, move slower and lose nuance, and numbers are the easiest thing to mishear. Learning how to brief an interpreter, speak in short chunks and confirm figures in writing protects the deal from misunderstandings that surface only in the documents.

                ## Milestones
                1. A briefing pack for interpreters prepared: deal terms glossary, names and key numbers.
                2. Meeting habits agreed: short sentences, one point at a time, figures written on screen.
                3. A written summary of agreed points sent in both languages after each session.
                4. Feedback from the interpreter collected after the first session.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An interpreter briefing pack and a bilingual summary sent after every negotiation session on the deal."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Build a two-language glossary of the deal's key terms and names"
                - "Send the interpreter the glossary and agenda a day before the meeting"
                - "Show every number on screen or paper rather than only saying it"
                - "Send a bilingual summary of agreed points after each session"
            - name: Employee consultation and works council processes
              description: |-
                ## Purpose
                In many countries the target's employee representatives must be informed or consulted before a binding decision, which can change when the deal can be signed and in what form. Understanding where this applies, with counsel's help, lets the bank design a signing sequence such as a put option structure and keeps the timetable honest.

                ## Milestones
                1. Countries where employee information or consultation could apply identified by counsel.
                2. The likely duration and stage at which consultation must happen in each noted.
                3. The signing structure counsel recommends, such as signing an offer before a final agreement, understood and reflected in the timeline.
                4. Employee communication materials coordinated with the consultation process.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of employee consultation requirements by country, from counsel, reflected in the deal timeline and signing plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask counsel which deal countries require employee consultation"
                - "Note when in the process each consultation must happen"
                - "Adjust the signing plan to the structure counsel recommends"
                - "Align employee messages with the consultation timetable"
            - name: Anti-bribery and local licence diligence questions
              description: |-
                ## Purpose
                Targets in some markets depend on government licences, permits and public contracts, and the way those were won can become the buyer's problem after closing. Agreeing a focused set of anti-bribery, licence and agent questions with counsel, and making sure the answers reach the valuation and the contract, protects the buyer without turning diligence into an accusation.

                ## Milestones
                1. The target's licences, permits and public contracts in each country listed with expiry and change of control terms.
                2. Use of third-party agents, distributors and intermediaries in higher risk markets identified.
                3. A question list on anti-bribery controls and past investigations agreed with counsel and sent to the target.
                4. Findings passed to counsel for the purchase agreement and to the model where they affect value.

                ## Notes
                Judging whether conduct breaks anti-bribery law is for counsel and forensic specialists. Your job is to make sure the questions are asked and the answers are followed through.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A licence register and an anti-bribery question list answered by the target, with findings handed to counsel before the binding offer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the target's licences and public contracts with change of control terms"
                - "Ask the target which agents and intermediaries it uses in each market"
                - "Agree the anti-bribery question list with counsel before sending it"
                - "Pass every finding to counsel and note any effect on value"
            - name: Deal currency and hedging decision with client treasury
              description: |-
                ## Purpose
                Whether to fix the price in the seller's currency, the buyer's currency or a mix, and whether to hedge the gap, is a client decision with real money attached. The bank's role is to lay out the options and their costs clearly and on time, so the client's treasury and board can decide before signing rather than after an adverse move.

                ## Milestones
                1. Options set out: price currency, natural hedges, forwards, options and deal contingent hedges.
                2. Indicative costs and trade-offs of each option obtained from the relevant desks or providers.
                3. The client's treasury policy and board approval needs confirmed.
                4. The client's decision recorded with the date and who made it.

                ## Notes
                The bank presents options and indicative costs; the decision belongs to the client. Keep any hedging desk discussion inside the bank's compliance rules.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written options paper on deal currency and hedging, with the client's recorded decision before signing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the currency and hedging options open to the client"
                - "Request indicative costs for each option through the proper channels"
                - "Confirm the client's treasury policy and approval route"
                - "Record the client's decision and the date it was made"
            - name: Acquisition vehicle and holding structure decision
              description: |-
                ## Purpose
                The entity that signs and pays, and where it sits, affects tax, financing, regulatory filings and how cash comes home later. Bankers coordinate the choice among the client's lawyers and tax advisers so that the model, the financing and the filings all describe the same structure.

                ## Milestones
                1. Two or three candidate structures described by the client's legal and tax advisers.
                2. Effects of each on filings, financing and the model listed side by side.
                3. The client's chosen structure recorded with the advisers' sign-off.
                4. The model, financing papers and filings updated to the chosen structure.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "One agreed acquisition structure, signed off by legal and tax advisers, used consistently in the model, financing and filings."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the client's advisers for the candidate acquisition structures"
                - "Compare each structure's effect on filings, financing and the model"
                - "Record the client's chosen structure and the advisers' sign-off"
                - "Update the model and filing drafts to the chosen structure"
            - name: Governing law and dispute forum questions
              description: |-
                ## Purpose
                Parties from different countries often each want their own law and courts, and the compromise, such as a neutral law and international arbitration, shapes how enforceable every promise in the agreement really is. Bankers do not decide it, but they need to understand the trade-offs well enough to keep the negotiation moving and explain it to the client.

                ## Milestones
                1. Each side's opening position on governing law and forum recorded.
                2. Counsel's summary of the trade-offs, including enforceability of judgments and awards, obtained.
                3. The issue placed in the negotiation plan with the client's priority.
                4. The agreed position recorded with the date it was settled.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded agreed position on governing law and dispute forum, with counsel's trade-off summary filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note each side's opening position on governing law and forum"
                - "Ask counsel for a half-page summary of the trade-offs"
                - "Agree with the client how much this point is worth in the negotiation"
                - "Record the agreed position in the issues list"
            - name: Merger control remedies strategy
              description: |-
                ## Purpose
                When the parties overlap in some markets, a regulator may only clear the deal with remedies such as selling a business line, and different authorities can want different fixes. Preparing remedy options early with counsel, including the value at stake and who could buy a divested business, protects the client's position and keeps one country's demands from surprising another.

                ## Milestones
                1. Markets with significant overlaps identified by competition counsel.
                2. Possible remedy packages described with the revenue and value each would remove.
                3. A short list of credible buyers for any divested business prepared.
                4. The client's limits on remedies agreed and reflected in the deal protections.

                ## Notes
                How far the buyer must go to obtain clearance is a negotiated term in the agreement. Make sure the remedy work and the contract position match.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A remedy options paper with value at stake and possible divestment buyers, and the client's agreed limits recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask competition counsel which markets carry the greatest risk"
                - "Estimate the revenue and value in each possible remedy package"
                - "List credible buyers for any business that may need to be sold"
                - "Record the client's limits on remedies for the negotiation"
            - name: Mitigation offer for a foreign investment review
              description: |-
                ## Purpose
                Foreign investment regulators often clear deals on conditions: ring-fenced data, local board members, supply commitments or limits on information access. Preparing a credible mitigation package with counsel before the regulator asks shows good faith, shortens the review and lets the client decide in advance what it can live with.

                ## Milestones
                1. The regulator's likely concerns listed from counsel's experience of similar deals.
                2. Mitigation measures drafted with the operational cost of each estimated by the client.
                3. The client's acceptable and unacceptable measures agreed.
                4. Any accepted commitments logged for monitoring after closing.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A mitigation package with costed measures and the client's agreed limits, ready before the regulator raises concerns."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask counsel what conditions regulators set on similar deals"
                - "Ask the client to cost each possible mitigation measure"
                - "Agree with the client which measures it will not accept"
                - "Log accepted commitments for post-closing monitoring"
            - name: Local versus home bank financing comparison
              description: |-
                ## Purpose
                Funding an acquisition in the target's currency through local lenders can match debt to cash flows, while home market lenders may offer better terms but leave a currency gap. Comparing the two on the same basis, including fees, covenants, security and time to commit, gives the client a real choice rather than the default of its usual banks.

                ## Milestones
                1. Funding need and currency split agreed with the client.
                2. Indicative terms gathered from local and home market lenders on the same term sheet basis.
                3. All-in cost, covenants, security and certainty of funds compared side by side.
                4. The client's preferred route recorded with its reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side comparison of local and home market financing on a common basis, with the client's chosen route recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the funding amount and currency split with the client"
                - "Send the same term sheet basis to local and home lenders"
                - "Compare all-in cost, covenants and security in one table"
                - "Record the client's chosen financing route and reasons"
            - name: Escrow, guarantees and payment mechanics across borders
              description: |-
                ## Purpose
                Moving a large payment between countries on closing day depends on bank cut-off times, local payment systems, escrow agents and sometimes central bank approvals or currency controls. Agreeing the mechanics early, with every bank and counsel, avoids the classic failure where the deal closes on paper but the money arrives a day late.

                ## Milestones
                1. Every cross-border payment's route, sending bank, receiving bank and cut-off time listed.
                2. Any currency control or central bank approval identified by local counsel.
                3. Escrow agent and parent guarantee arrangements agreed and documented.
                4. A test transfer or confirmation of account details completed by the client's treasury before closing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A payment mechanics sheet with routes, cut-offs and approvals for every cross-border payment, confirmed by each bank before closing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each closing payment with its sending and receiving banks"
                - "Ask each bank for its cut-off time on the closing date"
                - "Ask local counsel whether any currency control approvals apply"
                - "Confirm account details are verified by phone through the client's treasury"
            - name: Announcement plan across markets and stakeholders
              description: |-
                ## Purpose
                Stock exchanges, governments, unions, customers and press in several countries all hear about a cross-border deal at once, often in several languages and time zones. A single plan that sets the sequence, the wording in each language and who calls whom keeps the message consistent and avoids a minister or works council learning of the deal from the news.

                ## Milestones
                1. Every audience listed by country: exchanges, regulators, ministers, employees, customers and press.
                2. The sequence and timing of each communication agreed with the client and counsel.
                3. Messages approved in every required language.
                4. A call list naming who speaks to each key stakeholder and when.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An approved announcement plan with sequence, translated messages and a named call list for every country."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List all audiences for the announcement by country"
                - "Ask the agent to draft a sequence table for the client's review"
                - "Agree the order of government, employee and market communications with counsel"
                - "Build the call list with a named caller for each stakeholder"
            - name: Pre-notification meeting with a competition authority
              description: |-
                ## Purpose
                Many authorities expect informal contact before a formal filing, and a well-prepared first meeting can shorten the review by weeks. The banker often prepares the market data and the deal rationale slides, so treating this as a real event with a rehearsal and clear notes pays off.

                ## Milestones
                1. The meeting date and attendees agreed with counsel.
                2. Market share data and rationale slides prepared and checked by counsel.
                3. A rehearsal held with the client's spokespeople.
                4. Notes of the authority's questions and next steps circulated within a day.

                ## Notes
                Start from the **Meeting notes** template. Record the authority's questions verbatim where possible; they often predict the formal information requests.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pre-notification meeting held with rehearsed spokespeople and notes of the authority's questions circulated within one day."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the meeting date and attendees with competition counsel"
                - "Prepare market share and rationale slides for counsel's review"
                - "Run a rehearsal with the client's spokespeople"
                - "Circulate notes of the authority's questions within a day"
            - name: Meeting a ministry or government agency
              description: |-
                ## Purpose
                In sensitive sectors, a meeting with a ministry or investment agency can matter as much as any formal filing. Preparing who attends, what commitments the client is ready to discuss and how the deal benefits the host country turns a courtesy call into support for the approval.

                ## Milestones
                1. The right ministry or agency and its decision makers identified with local advisers.
                2. Key messages on jobs, investment and local commitments agreed with the client.
                3. Briefing notes on the officials and recent policy statements prepared.
                4. A follow-up letter sent confirming what was discussed.

                ## Notes
                Government contact can carry legal and ethical rules, including lobbying registers and anti-bribery law. Clear the plan with counsel and compliance first.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A government meeting held with agreed messages and a follow-up letter sent within three working days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask local advisers which officials should be met and in what order"
                - "Clear the meeting plan with counsel and compliance"
                - "Draft key messages on local jobs and investment with the client"
                - "Send a follow-up letter confirming what was discussed"
            - name: First negotiation trip abroad
              description: |-
                ## Purpose
                Flying a deal team to a counterparty's country for a two-day negotiation is expensive, and the value is in the face time, not the hotel. Planning travel, visas, devices, meeting rooms and local etiquette ahead of time means the team arrives rested, compliant with the bank's travel and data rules, and ready.

                ## Milestones
                1. Travel, visas and accommodation booked for the full team.
                2. Device and data rules for the destination confirmed with the bank's IT and compliance.
                3. Meeting rooms, printing and a private working room arranged near the venue.
                4. An agenda and negotiation brief shared with the team before departure.

                ## Notes
                Start from the **Trip** template. Check whether the bank requires clean devices for travel to the destination.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A negotiation trip completed with travel, device rules, rooms and briefing all in place before departure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check visa and entry requirements for each team member"
                - "Confirm the bank's device and data rules for the destination"
                - "Book a private working room near the negotiation venue"
                - "Share the agenda and negotiation brief before departure"
            - name: Multi-jurisdiction signing with notaries and powers of attorney
              description: |-
                ## Purpose
                Some countries require notarised signatures, apostilled documents or powers of attorney in a set form, and these can take days to arrange. A signing plan that knows which documents need which formality, and where each signatory will be, prevents the deal from slipping on a missing stamp.

                ## Milestones
                1. Every signing document listed with its formalities by country.
                2. Powers of attorney, board resolutions and apostilles prepared and checked by local counsel.
                3. Each signatory's location and signing method confirmed.
                4. A signing day run sheet with times in each time zone circulated.

                ## Notes
                Start from the **Operational checklist** template for the run sheet. Electronic signatures are not accepted for every document in every country; check with local counsel.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All documents signed with the required formalities in each jurisdiction on the planned signing date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List each signing document and its formalities by country"
                - "Request powers of attorney and apostilles from local counsel"
                - "Confirm where each signatory will be on signing day"
                - "Circulate a run sheet with times shown in every time zone"
            - name: Simultaneous announcement across exchanges
              description: |-
                ## Purpose
                When the buyer and target are listed on different exchanges, the announcement must reach both markets in line with each exchange's disclosure rules, usually before one market opens and after another has closed. A minute-by-minute plan agreed with counsel and the companies' investor relations teams avoids a leak window or a disclosure breach.

                ## Milestones
                1. Disclosure rules and release windows for each exchange confirmed with counsel.
                2. Release times set in every relevant time zone.
                3. Final announcements approved in every required language.
                4. Release confirmations from each exchange received and filed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Announcements released on every relevant exchange inside the planned window, with confirmations filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm each exchange's disclosure rules and release windows with counsel"
                - "Set release times in every relevant time zone"
                - "Get final approval of the announcement in each language"
                - "File the release confirmation from each exchange"
            - name: Response plan for an in-depth regulatory review
              description: |-
                ## Purpose
                If an authority opens an in-depth review, the deal faces months of information requests, economic analysis and possibly remedies, and the client's board will want a plan within days. A ready response plan, with workstreams, owners and the effect on the long-stop date, keeps the deal team steady and the client confident.

                ## Milestones
                1. The extended timetable mapped against the long-stop date.
                2. Workstreams for data requests, economic analysis and remedies set up with owners.
                3. A board briefing on the review and options prepared for the client.
                4. Weekly reporting to the client folded into the approvals tracker.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A response plan with workstreams, owners and an updated timeline delivered to the client within a week of the review opening."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map the in-depth review timetable against the long-stop date"
                - "Set up workstreams and owners for data, economics and remedies"
                - "Draft a board briefing on the review for the client"
                - "Add the in-depth review milestones to the approvals tracker"
            - name: Analyst on a first cross-border deal
              description: |-
                ## Purpose
                Your first cross-border deal as an analyst brings new trackers, unfamiliar regulators and calls at odd hours, on top of the usual model and deck work. Setting up a few habits early, such as a personal glossary, a time zone clock and a weekly check-in with the associate, makes the extra complexity manageable and shows seniors you can be trusted with more.

                ## Milestones
                1. A personal glossary of the deal's regulatory and foreign terms started.
                2. World clocks set for every deal office and the overlap hours noted.
                3. A weekly check-in with the associate on what you own.
                4. One monthly note of what you learned, kept for your review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A glossary, time zone set-up and weekly associate check-ins in place, with monthly learning notes for your review."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Start a glossary of the deal's regulatory and foreign terms"
                - "Set world clocks for every office on the deal"
                - "Agree a weekly check-in with the associate on your workstreams"
                - "Write a short note on what you learned on the deal @recurring(monthly:25)"
            - name: Associate running the regulatory workstream
              description: |-
                ## Purpose
                On many cross-border deals the associate owns the regulatory workstream for the bank: trackers, timelines, data for filings and the bridge between counsel and the client. Running it well means knowing the critical path every week, catching inconsistent data and spotting slippage before the client does.

                ## Milestones
                1. The approvals tracker, timeline and correspondence log owned and current.
                2. A weekly review with counsel on the critical path.
                3. Data packs for filings checked for consistency across jurisdictions.
                4. The analyst trained on the trackers so the workstream survives your holiday.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Regulatory trackers kept current weekly, with filing data consistent across jurisdictions and an analyst able to cover."
                cadence: rolling
              tasks:
                - "Take ownership of the approvals tracker and timeline from the analyst"
                - "Review the critical path approval with counsel @recurring(weekly:tue)"
                - "Check filing data packs for consistency across jurisdictions"
                - "Walk the analyst through the trackers so they can cover"
            - name: Vice president leading a deal with a foreign client
              description: |-
                ## Purpose
                Leading a deal for a client from another country means adapting to their decision process, their board calendar and their expectations of an adviser, while keeping the deal team aligned. A vice president who learns how the client decides and reports to them in the format they prefer earns trust far quicker than one who runs the home office playbook.

                ## Milestones
                1. The client's decision process, board dates and approval thresholds mapped.
                2. A weekly update in the format and language the client prefers.
                3. A relationship plan for the client's key people, including those in head office.
                4. Feedback from the client sought at a midpoint and acted on.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A mapped client decision process, weekly updates in the client's preferred format and recorded midpoint feedback."
                cadence: rolling
              tasks:
                - "Map the client's decision process and board calendar"
                - "Ask the client how they prefer to receive weekly updates"
                - "Send the client's weekly update in their preferred format @recurring(weekly:fri)"
                - "Ask the client for feedback halfway through the deal"
            - name: Secondment to an overseas office
              description: |-
                ## Purpose
                Six to twelve months on secondment in another office is one of the fastest ways to learn cross-border work, but it can also leave you forgotten at home. Planning the move, the work you want, the people to meet and how to stay visible to your home group gets the most from the posting.

                ## Milestones
                1. Goals for the secondment agreed with both the home and host offices.
                2. Practical arrangements for visas, housing, tax and pay confirmed with HR.
                3. A list of people to meet in the host office and region.
                4. A monthly note to your home group on deals and lessons.

                ## Notes
                Personal tax and immigration questions belong with HR and the bank's advisers. Ask them before you move, not after.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Agreed secondment goals, confirmed practical arrangements and a monthly note sent home for the length of the posting."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree secondment goals with your home and host managers"
                - "Ask HR to confirm visa, housing, tax and pay arrangements"
                - "List twenty people to meet in the host office"
                - "Send a short note on deals and lessons to your home group @recurring(monthly:15)"
            - name: Advising an emerging market acquirer buying abroad
              description: |-
                ## Purpose
                Emerging market companies buying in developed markets face extra scrutiny of its ownership and funding, sellers who may doubt its certainty of funds and regulators who want to understand its plans. Helping the client prepare for these questions, with clear evidence of funding and plans, can be the difference between being taken seriously and being dropped after the first round.

                ## Milestones
                1. The client's ownership and funding story documented clearly for sellers and regulators.
                2. Certainty of funds evidence agreed with lenders and the client.
                3. Likely regulator concerns listed with counsel.
                4. A credentials pack prepared showing the client's track record and plans.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A buyer credentials pack with ownership, funding evidence and plans, reviewed by counsel before the first approach."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Document the client's ownership chain and funding sources"
                - "Agree the certainty of funds evidence sellers will expect"
                - "Ask counsel which regulator concerns to prepare for"
                - "Draft a credentials pack on the client's track record and plans"
            - name: Working with a state-owned or sovereign counterparty
              description: |-
                ## Purpose
                State-owned companies and sovereign funds bring government approvals, political sensitivities and their own procurement or governance rules to a deal. Understanding how their decisions are made and who signs off lets the bank plan the timetable and the process around them rather than against them.

                ## Milestones
                1. The counterparty's governance, including ministry or board approvals, mapped.
                2. Any procurement or transparency rules that apply to the counterparty identified with counsel.
                3. Extra foreign investment or state aid questions flagged for counsel.
                4. The timetable adjusted for the counterparty's approval stages.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A governance and approvals map for the state-owned counterparty, with the deal timetable adjusted to it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Map the counterparty's approval chain from board to ministry"
                - "Ask counsel which procurement or transparency rules apply"
                - "Flag state aid or foreign investment questions for counsel"
                - "Add the counterparty's approval stages to the timetable"
            - name: Register of regulatory undertakings after closing
              description: |-
                ## Purpose
                Conditions accepted to win clearance, such as hold separate obligations, local jobs or data commitments, often run for years after closing and fall to people who never saw the negotiation. Handing the client a clear register of every undertaking, its owner and its reporting dates protects them from an expensive breach.

                ## Milestones
                1. Every undertaking from every jurisdiction listed with its source document.
                2. Owners in the client's business named for each undertaking.
                3. Reporting dates and expiry dates recorded.
                4. The register handed over to the client's legal team and reviewed with them each quarter for the first year.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A register of all regulatory undertakings with owners and dates, handed over to the client's legal team at closing."
                cadence: rolling
              tasks:
                - "List every undertaking given to every regulator with its source"
                - "Ask the client to name an owner for each undertaking"
                - "Record reporting and expiry dates for each undertaking"
                - "Review the register with the client's legal team @recurring(quarterly)"
---

# Cross-Border M&A Execution

Cross-border M&A is ordinary deal work with extra moving parts: two or more legal systems, regulators who answer to different ministers, a price set in one currency and paid in another, and a deal team spread across time zones and languages. This area starts with foundations (the jurisdiction map, the timeline set by the slowest approval, filing analyses, sanctions screening and currency exposure), then the operating routines that keep approvals, translations and regulators moving, the knowledge every cross-border banker needs on merger control, foreign investment, takeover rules, accounting and culture, the decisions on currency, structure and remedies, the dated events from pre-notification meetings to a multi-country signing, variants for analysts, associates, vice presidents and secondees, and specialist work with state-owned counterparties.

What repeats is mostly weekly: a Monday approvals tracker and policy scan, a Tuesday all-hands call slot that rotates the inconvenient hour, Wednesday translation and issues reviews, Thursday regulator correspondence and a Friday currency check, with monthly holiday calendar, adviser fee and political watch reviews and quarterly lessons and undertakings reviews. The **Vendor**, **Risk register**, **Meeting notes**, **Trip** and **Operational checklist** templates pair with choosing local counsel, the cross-border risks, regulator meetings, negotiating abroad and signing day. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
