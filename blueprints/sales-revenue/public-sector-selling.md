---
id: sales-revenue.public-sector-selling
name: Public Sector Selling
description: "Portal registrations and an evidence pack, tender triage, budget and contract expiry calendars, scored bid writing, award and debrief routines and contract reporting for selling to government, health and education buyers."
category: business
version: 1.0.0
tags: [sales-revenue, public-sector-selling, enterprise, small-business, team, government, tenders, frameworks]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - metrics-log
    - risk-register
    - operational-checklist
    - meeting-notes
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Public Sector Selling
          description: "Selling to government, health and education buyers through frameworks, tenders and procurement rules that differ sharply from commercial sales."
          projects:
            - name: Public sector readiness check for your business
              description: |-
                ## Purpose
                Before chasing a single tender, find out whether the business can pass the basic tests public buyers apply to every supplier: two or three years of filed accounts, the right insurance levels, written policies and references from comparable customers. A half-day check against a real selection questionnaire shows which gaps take an afternoon to close and which take a year, so effort goes to bids where you can actually be considered.

                ## Milestones
                1. A selection questionnaire from a recent tender in your sector downloaded and read end to end.
                2. Every pass or fail question marked as met, fixable within a month, or a long-term gap.
                3. Insurance cover compared with the levels commonly asked for, such as employer's, public and professional liability.
                4. Three customers identified whose work resembles what public buyers would ask references for.
                5. A one-page readiness summary listing the top five gaps, each with an owner.

                ## Notes
                Low turnover is not always disqualifying. Many buyers set minimum turnover relative to the contract value, so a smaller business can still qualify for smaller lots.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A readiness summary scoring the business against one real selection questionnaire, with the five biggest gaps owned and dated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download the selection questionnaire from a recent tender in your sector"
                - "Mark each pass or fail question as met, fixable or a long-term gap"
                - "Compare your insurance cover with the levels the questionnaire asks for"
                - "Name three customers who could act as references for public work"
                - "Write the one-page readiness summary with an owner for each gap"
            - name: Priority public sector segments and buyer map
              description: |-
                ## Purpose
                Government, health and education buy very differently: a national department may buy through a handful of frameworks, a city council through its own tenders, a hospital through a purchasing group and a school often by direct quote. Choosing two or three segments where your product solves a known problem, and listing the named buyers inside them, stops the team spreading thin across every notice that looks vaguely relevant.

                ## Milestones
                1. A longlist of segments: national government, regional and local government, health, schools, colleges and universities, emergency services and arm's length bodies.
                2. Each segment scored on fit, typical contract size, buying route and competition.
                3. Two or three priority segments chosen, with the reasons written down.
                4. A named list of 30 to 100 target buying organisations in those segments.
                5. The procurement or category lead identified for at least half of them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three priority public segments chosen in writing, each with a named list of target buying organisations and known procurement contacts."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the public bodies that bought from you or a competitor last year"
                - "Score each segment on fit, contract size, buying route and competition"
                - "Pick two or three priority segments and write down why"
                - "Build a named list of target buyers inside each priority segment"
                - "Revisit the segment choices against the past year of public wins @recurring(yearly)"
            - name: Procurement routes and value thresholds in your market
              description: |-
                ## Purpose
                Depending on the estimated contract value, public buyers must follow different processes: below a lower limit they may simply ask for quotes, above it they advertise, and above the higher thresholds the full regulated procedures apply with fixed timescales. Knowing the thresholds and routes your target buyers work under tells you when a direct conversation can lead to an order and when it must go through open competition.

                ## Milestones
                1. The current value thresholds that apply to your priority buyers written down, with the official source and the date checked.
                2. A one-page summary of each route: quotes, open tender, restricted procedure, competitive negotiation and framework call-off.
                3. The usual minimum timescales for each procedure noted.
                4. The difference between national rules and one buyer's own standing orders understood through a real example.

                ## Notes
                Thresholds change, often every two years, and can differ between central government, local government and utilities. Check the official source rather than a blog post, and ask a friendly buyer how their own limits work.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A dated one-page summary of the thresholds and procedures that apply to your priority buyers, citing the official source checked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the official page listing current procurement thresholds in your country"
                - "Write down the thresholds that apply to each priority segment"
                - "Summarise each procedure and its usual timescales on one page"
                - "Read the published contract standing orders of one council or hospital"
            - name: Supplier registration on government procurement portals
              description: |-
                ## Purpose
                Most public opportunities can only be seen, or answered, through a registered account on a national or regional portal, and some registrations take weeks because they need a unique entity identifier, tax details or verified banking. Registering on the portals your priority buyers use, before a tender with a short deadline appears, removes the most avoidable reason to miss a bid.

                ## Milestones
                1. A list of the portals your priority buyers publish on, from national notice services to individual e-tendering systems.
                2. The business registered on each, with any supplier or entity number recorded.
                3. Category codes chosen so each portal's own alerts match what you sell.
                4. Logins held in the company password manager, with at least two named people able to use each one.

                ## Notes
                Some national registrations, such as SAM.gov in the US, must be renewed every year. Note the renewal date on the day you register.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The business holds active registrations on every portal its priority buyers use, with supplier numbers and two named account holders recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the e-tendering portals your top ten target buyers use"
                - "Gather the company registration, tax and bank details the portals ask for"
                - "Register on each portal and record the supplier or entity number"
                - "Choose the category codes that match what you sell"
                - "Give a second named colleague access to every portal account"
            - name: Tender alerts across national and regional portals
              description: |-
                ## Purpose
                Notices are scattered across national services, regional portals and individual buyer systems, and a keyword search that misses the buyer's wording misses the tender. Setting up alerts with the category codes and phrases buyers actually use, and routing them to one shared inbox, means nothing in your segments slips past for lack of looking.

                ## Milestones
                1. Alerts set on every portal from the registration list, using category codes and buyer wording.
                2. All alerts routed to one shared mailbox or channel rather than one person's inbox.
                3. A keyword list built from the titles of ten past tenders you would have bid on.
                4. A month of alerts reviewed and noisy keywords removed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Tender alerts on every relevant portal feed one shared inbox, tuned so that at least half the alerts in a month are worth reading."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the titles of ten past tenders you would have bid on"
                - "Build a keyword list from the wording those buyers used"
                - "Set alerts on each portal and point them all at one shared mailbox"
                - "Remove keywords that produced only irrelevant alerts after a month"
                - "Check the alert keywords still match your current offer @recurring(quarterly)"
            - name: Selection stage evidence pack
              description: |-
                ## Purpose
                Selection questionnaires ask for the same things again and again: accounts, insurance certificates, health and safety, equality, environmental and modern slavery policies, data protection, business continuity and references. Keeping a current, signed version of each in one folder turns the selection stage from a two-day scramble into an hour of attaching files.

                ## Milestones
                1. A folder holding the last two to three years of accounts and current insurance certificates.
                2. Each commonly requested policy written, approved by a director and dated.
                3. A short standard description of the company, its ownership and any group structure.
                4. Three reference contacts who have agreed to be named, with contract values and dates.
                5. An index listing every document, its owner and its expiry or review date.

                ## Notes
                Buyers increasingly ask for a carbon reduction plan or a net zero commitment. If you do not have one, plan it here rather than writing one overnight for a bid.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An indexed evidence folder holding accounts, insurance, approved policies and three agreed references, each with an owner and a review date."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Copy the last three years of accounts and insurance certificates into one folder"
                - "List the policies the last three selection questionnaires asked for"
                - "Ask the agent to draft any missing policy for a director to review"
                - "Confirm three customers are willing to be named as references"
                - "Build an index with each document's owner and review date"
            - name: Public sector rate card and pricing rules
              description: |-
                ## Purpose
                Prices in public contracts are often fixed for the term, can be disclosed through award notices or information requests, and sometimes come with a promise that no other public customer pays less. One public sector rate card with clear rules on discounts, multi-year pricing and indexation stops one aggressive bid from setting the price for every buyer who reads the award notice.

                ## Milestones
                1. A public sector rate card covering the main products and services, approved by finance.
                2. Written rules on volume discounts, multi-year terms and annual price increases.
                3. A list of existing public contracts with any most favoured customer or price parity clauses.
                4. A rule on when a bid price needs finance approval.
                5. The rate card stored where everyone who prices a bid can find it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A finance-approved public sector rate card and pricing rules exist, with every existing price parity clause listed beside them."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List current public contracts and the prices each one pays"
                - "Flag any contract with a most favoured customer or price parity clause"
                - "Draft the public rate card with discount and indexation rules"
                - "Get the rate card approved by finance and shared with the bid team"
            - name: Ethics, gifts and lobbying rules for selling to officials
              description: |-
                ## Purpose
                Hospitality that is normal with a commercial buyer can disqualify a bid or breach anti-bribery law when the buyer is a public official, and contacting evaluators during a live tender can void a submission. A short written code covering gifts, hospitality, contact during tenders, conflicts of interest, hiring former officials and any lobbying register gives sellers clear lines before they need them.

                ## Milestones
                1. The anti-bribery, lobbying and procurement integrity rules for your markets summarised with your legal adviser.
                2. A one-page code for sellers on gifts, hospitality, contact during live tenders and conflicts of interest.
                3. A gifts and hospitality register recording anything offered to or received from public officials.
                4. Everyone who sells to public buyers has read and signed the code.

                ## Notes
                Start from the **Compliance control** template. Buyers often ask for your anti-bribery policy at selection stage, so this also feeds the evidence pack. Have a lawyer check the code against the rules in each country you sell in.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed one-page code on gifts, hospitality and tender contact, a live gifts register, and signatures from everyone who sells to public buyers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your legal adviser which anti-bribery and lobbying rules apply to your markets"
                - "Write the one-page seller code on gifts, hospitality and tender contact"
                - "Set up a gifts and hospitality register for public sector contacts"
                - "Collect a signed copy of the code from each public sector seller"
                - "Run a short refresher on the code with the whole team @recurring(yearly)"
            - name: Pipeline stages mapped to the procurement timeline
              description: |-
                ## Purpose
                Commercial stages such as discovery, demo and negotiation make little sense when the buyer's process is pre-market engagement, notice published, clarifications, submission, evaluation, standstill and award. Stages that mirror procurement milestones give better forecasts, because an opportunity sitting at evaluation has a published decision date and a known field of bidders.

                ## Milestones
                1. Public sector stages defined from pre-market engagement through to contract signature.
                2. Entry and exit criteria for each stage, based on documents the buyer publishes.
                3. Fields added for procurement route, framework, notice reference and submission deadline.
                4. Every open public opportunity moved onto the new stages, with its dates checked.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every open public opportunity sits in a stage defined by a procurement milestone, with its notice reference and submission deadline in the CRM."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write out the procurement milestones every public tender passes through"
                - "Turn each milestone into a pipeline stage with entry and exit criteria"
                - "Add fields for procurement route, notice reference and submission deadline"
                - "Move every open public opportunity onto the new stages"
            - name: Security and data protection certifications buyers require
              description: |-
                ## Purpose
                Government and health buyers often treat certification as a pass or fail gate: an information security standard such as ISO 27001, a national cyber security scheme, a health data standard or hosting in a named country. Finding out which certifications your priority buyers demand, and how long each takes to achieve, decides whether you can bid this year or need to plan for next.

                ## Milestones
                1. The certifications required in the last ten tenders in your segments listed and counted.
                2. Each one marked as held, in progress or missing.
                3. A cost and timescale estimate for each missing certification.
                4. A decision recorded on which certifications to pursue and in what order.

                ## Notes
                Data residency questions come up early in health and government. Know where your data is hosted, and who can reach it from where, before the first conversation.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on which security and data certifications to pursue, based on the requirements of at least ten recent tenders in your segments."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the certifications asked for in ten recent tenders in your segments"
                - "Mark each certification as held, in progress or missing"
                - "Get cost and timescale quotes for the missing certifications"
                - "Record the decision on which certifications to pursue first"
                - "Book the surveillance audit for each certification you hold @recurring(yearly)"
            - name: Weekly tender notice triage
              description: |-
                ## Purpose
                Alerts are useless if nobody decides what to do with them. A fixed weekly half hour where the bid lead sorts every new notice into bid, watch or ignore, using written rules on fit, value, evaluation weighting and incumbency, keeps the team bidding on winnable work instead of whatever arrived most recently.

                ## Milestones
                1. Written triage rules covering fit, contract value, deadline, mandatory requirements and incumbency.
                2. A triage log recording each notice, the decision and the reason.
                3. A weekly slot held in the bid lead's calendar for triage.
                4. After a quarter, the rules adjusted using the outcomes of bids that went ahead.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every tender notice in the shared alert inbox is logged as bid, watch or ignore within seven days, with a reason recorded."
                cadence: rolling
              tasks:
                - "Write the triage rules for fit, value, deadline and incumbency"
                - "Create a triage log with notice, decision and reason columns"
                - "Triage every new notice in the shared alert inbox @recurring(weekly:mon)"
                - "Compare triage decisions with bid outcomes and adjust the rules @recurring(quarterly)"
            - name: Budget cycle and fiscal year calendar for target buyers
              description: |-
                ## Purpose
                Councils, health bodies and universities decide what they can spend months before they spend it, through annual budget rounds, capital programmes and grant allocations, and their fiscal years rarely line up with yours. A calendar of each priority buyer's year end, budget-setting meetings and published plans shows when to put a need on the table so that money exists when the tender appears.

                ## Milestones
                1. The fiscal year end recorded for every priority buyer.
                2. Budget-setting and committee meeting dates noted for the main local and education buyers.
                3. Each buyer's published strategy, capital plan and procurement pipeline saved.
                4. Account plans adjusted so early conversations happen before budgets are set.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A calendar holds the fiscal year end and budget-setting dates of every priority buyer, and times at least one early conversation per buyer each year."
                cadence: cyclic
              tasks:
                - "Record each priority buyer's fiscal year end in a shared calendar"
                - "Find the published budget and committee meeting dates for local buyers"
                - "Save each buyer's latest strategy and procurement pipeline document"
                - "Check the calendar for budget meetings due next quarter @recurring(quarterly)"
            - name: Contract expiry and re-procurement calendar
              description: |-
                ## Purpose
                Most public contracts run for a fixed term, often with optional extensions, and the next opportunity is visible years ahead in award notices and contract registers. Tracking when incumbent contracts in your segments expire lets you start conversations 12 to 18 months before the buyer writes the specification, which is when influence is still possible.

                ## Milestones
                1. Current contracts in your priority segments listed with incumbent, value, start date, end date and extension options.
                2. Each contract tagged with the date pre-market engagement is likely to start.
                3. Contracts ending within 18 months added to the pipeline at the earliest stage.
                4. An owner named for every expiring contract worth pursuing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A contract expiry calendar covers your priority segments, and every contract ending within 18 months has an owner and a pipeline entry."
                cadence: rolling
              tasks:
                - "Search published contract registers for contracts in your priority segments"
                - "Record incumbent, value, end date and extension options for each"
                - "Add contracts ending within 18 months to the pipeline"
                - "Review contracts expiring in the next 18 months and assign owners @recurring(monthly:9)"
            - name: Early market engagement tracker
              description: |-
                ## Purpose
                Buyers often publish a prior information notice, run a supplier day or issue a request for information before the tender itself, and suppliers who respond help shape requirements that are realistic for them. A tracker of these early signals, with a named person replying to each relevant one, turns the quiet months before a tender into an advantage instead of a gap.

                ## Milestones
                1. A tracker for prior information notices, requests for information, market sounding questionnaires and supplier days.
                2. An agreed approach for answering a request for information within its deadline.
                3. Every relevant early notice in your segments answered or consciously skipped.
                4. Each response linked to the expected tender in the pipeline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every relevant early market engagement notice in your segments has a logged response or a recorded reason for skipping it."
                cadence: rolling
              tasks:
                - "Set up a tracker for prior notices, information requests and supplier days"
                - "Agree who answers information requests and how quickly"
                - "Scan the portals for new early market engagement notices @recurring(weekly:thu)"
                - "Link each response to the tender it is expected to become"
            - name: Clarification question log for live tenders
              description: |-
                ## Purpose
                During a live tender every question to the buyer goes through the portal, and the answers are usually published to every bidder. Logging each question asked, each answer published and what it changes in your response stops the team missing a clarification that alters the specification, and helps you word questions that do not give your approach away.

                ## Milestones
                1. A clarification log for each live tender, with question, date asked, answer and impact.
                2. A rule that only the bid lead submits questions, through the portal, before the cut-off.
                3. Every published clarification read and its impact recorded within two working days.
                4. The final response checked against every clarification before submission.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each live tender has a clarification log in which every published answer is recorded with its impact on the response before submission."
                cadence: rolling
              tasks:
                - "Create a clarification log with question, answer and impact columns"
                - "Make the bid lead the only person who submits portal questions"
                - "Check the portal for new clarifications every second working day of a live bid"
                - "Tick off every clarification against the final response before submitting"
            - name: Award notices and competitor contract tracking
              description: |-
                ## Purpose
                Award notices must say who won, often with the contract value and sometimes the scores, which makes the public sector the one market where you can see your competitors' wins. A monthly log of awards in your segments shows who is winning, at what price and on which frameworks, and points to contracts worth targeting at the next re-tender.

                ## Milestones
                1. A log of awards in your segments for the past two years, with buyer, winner, value and term.
                2. The top five public sector competitors ranked by number and value of wins.
                3. Patterns noted, such as which frameworks or buyer types each competitor dominates.
                4. At least three contracts flagged as re-tender targets in the expiry calendar.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A contract award log covering two years of awards in your segments, updated monthly, names the top five public sector competitors."
                cadence: rolling
              tasks:
                - "Search award notices from the last two years in your segments"
                - "Log buyer, winner, value and term for each award"
                - "Rank competitors by the number and value of their public wins"
                - "Log new contract award notices in your segments @recurring(monthly:16)"
            - name: Published spending data review for named buyers
              description: |-
                ## Purpose
                Many public bodies publish every payment above a set amount, alongside their contract registers and procurement plans. Reading a buyer's spending data shows who they already pay for work like yours, how much and through which route, which is better preparation for a first meeting than any website.

                ## Milestones
                1. Spending data located for each of your top 20 buyers.
                2. Payments to you and your known competitors extracted and summarised by buyer.
                3. Each buyer's main incumbent and annual spend in your category recorded on the account.
                4. Two or three buyers with fast-growing spend in your category flagged for outreach.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Annual spend in your category and the main incumbent are recorded for each of your top 20 buyers and refreshed every quarter."
                cadence: cyclic
              tasks:
                - "Find where each of your top 20 buyers publishes its spending data"
                - "Filter the payments for your category and your known competitors"
                - "Record annual spend and the main incumbent on each account"
                - "Download the latest published spend data for your top 20 buyers @recurring(quarterly)"
            - name: Contract performance reporting to public customers
              description: |-
                ## Purpose
                Most public contracts come with key performance indicators, monthly or quarterly reports and formal review meetings, and the record built during delivery is what references and re-tenders are judged on. Reporting on time, honestly and in the buyer's format keeps the contract manager on side and creates evidence for the next bid.

                ## Milestones
                1. The KPIs, reporting format and review schedule from every public contract listed in one place.
                2. A report template for each contract, filled from your own delivery data.
                3. Monthly reports sent on the agreed date, with any missed KPI explained and a recovery action named.
                4. Notes from each quarterly review meeting stored with the contract.

                ## Notes
                Start from the **Metrics log** template for each contract's KPI history, so a re-tender answer can quote three years of figures in minutes.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every public contract's KPI report reaches the contract manager on the agreed date, with a full history of reports and review notes kept per contract."
                cadence: rolling
              tasks:
                - "List the KPIs and reporting dates written into each public contract"
                - "Build a report template for each contract from your delivery data"
                - "Send the monthly KPI report to each contract manager @recurring(monthly:5)"
                - "Prepare the pack for each quarterly contract review meeting @recurring(quarterly)"
            - name: Evidence pack refresh and certificate expiry checks
              description: |-
                ## Purpose
                An expired insurance certificate or a policy dated three years ago can fail a selection stage on its own. A short monthly check of expiry dates, and a yearly refresh of accounts and policies after the financial year end, keeps the evidence pack ready for a tender that closes in ten days.

                ## Milestones
                1. Every document in the evidence index carrying an expiry or review date.
                2. Reminders set a month before each insurance or certificate renewal.
                3. Policies reviewed and re-signed by a director at least once a year.
                4. The latest filed accounts added within a month of filing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No document in the evidence pack is past its expiry or review date at any monthly check across a full year."
                cadence: rolling
              tasks:
                - "Add an expiry or review date to every document in the evidence index"
                - "Check insurance and certificate expiry dates in the evidence pack @recurring(monthly:22)"
                - "Add the newly filed accounts and re-signed policies to the pack @recurring(yearly)"
                - "Replace any document found out of date within the same week"
            - name: Framework call-off opportunity management
              description: |-
                ## Purpose
                Winning a place on a framework earns nothing by itself: buyers still have to choose you, through a direct award or a mini-competition among the suppliers on the lot. Treating each framework as a sales channel, with its buyer guidance, catalogue listing, call-off templates and its own pipeline, is what turns an award letter into orders.

                ## Milestones
                1. Each framework you hold listed with its lots, end date, permitted buyers and call-off routes.
                2. Your catalogue or service listing complete and current on every framework.
                3. A list of eligible buyers in your segments who have used each framework before.
                4. A pipeline view showing call-off opportunities separately from open tenders.
                5. Management information returns to each framework owner submitted on time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every framework held has a current listing, a target list of eligible buyers and a separate call-off pipeline, with management returns filed on time."
                cadence: rolling
              tasks:
                - "List each framework you hold with its lots, end date and call-off routes"
                - "Check your catalogue or service listing on every framework"
                - "Identify eligible buyers who have used each framework before"
                - "Submit the management information return to each framework owner @recurring(monthly:12)"
            - name: Reading a tender pack and its evaluation method
              description: |-
                ## Purpose
                A tender pack can run to dozens of documents: instructions to bidders, specification, pricing schedule, draft contract, questionnaires and the evaluation method. Learning to read it in the right order, starting with what is pass or fail and how marks are awarded, means the bid team knows within a day what winning requires and whether it is realistic.

                ## Milestones
                1. One past tender pack read in full, in this order: instructions, evaluation method, specification, contract.
                2. A one-page bid summary with deadlines, pass or fail requirements, weightings and the scoring scale.
                3. Contract terms that would be hard to accept flagged for legal or finance review.
                4. A reusable bid summary layout saved for future tenders.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page bid summary of a real tender pack lists deadlines, pass or fail requirements, weightings and risky contract terms, and is saved as a reusable layout."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download a full tender pack from a recent notice in your segment"
                - "Read the instructions and evaluation method before the specification"
                - "Ask the agent to draft a one-page bid summary from the documents"
                - "Flag contract terms that legal or finance must review"
                - "Save the summary layout for the next tender"
            - name: Writing quality answers that score against the criteria
              description: |-
                ## Purpose
                Evaluators score each answer against a published scale, often 0 to 5 or 0 to 100, using a guide that describes what a top answer contains, and they cannot award marks for anything left unwritten. Learning to build each answer from the question, the scoring guide and the specification, with evidence and named commitments, is the single skill that moves public bids from losing to winning.

                ## Milestones
                1. The scoring guide from a past tender rewritten as a checklist of what a top answer must contain.
                2. One past answer rewritten against that checklist and within its word limit.
                3. A colleague scoring the old and new answers blind against the guide.
                4. A short house guide on structure, evidence and plain language for scored answers.

                ## Notes
                Answer in the order the question asks, use the buyer's own headings and name the evidence. Generic marketing copy tends to score in the middle of the scale at best.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A house guide for scored answers exists, tested by rewriting one past answer that a colleague scores higher against the published guide."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Turn one past tender's scoring guide into a checklist"
                - "Rewrite a past answer against the checklist and its word limit"
                - "Ask a colleague to score the old and new answers blind"
                - "Write a one-page house guide for structuring scored answers"
            - name: Social value and community benefit commitments
              description: |-
                ## Purpose
                Growing numbers of public tenders reserve a share of the marks for social value: local jobs, apprenticeships, spending with small suppliers, carbon reduction or volunteering. Commitments that are specific, measurable and actually delivered score better than broad promises, and buyers increasingly check delivery during the contract.

                ## Milestones
                1. The social value themes and measures used by your priority buyers listed.
                2. A menu of commitments the business can genuinely deliver, each with a unit cost and a measure.
                3. One past social value answer rewritten with specific numbers and dates.
                4. A reporting method agreed for commitments made in live contracts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A costed menu of measurable social value commitments exists, with reporting in place for every commitment made in a live contract."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect the social value questions from your last five tenders"
                - "List commitments the business can deliver, each with a cost and a measure"
                - "Rewrite one past social value answer with specific numbers"
                - "Report delivered social value commitments to each customer @recurring(quarterly)"
            - name: How price is scored in public tenders
              description: |-
                ## Purpose
                Price is usually turned into marks by a formula, such as scoring each bid relative to the lowest, and the shape of that formula decides whether cutting five percent wins two marks or ten. Understanding the common formulas, the checks for abnormally low bids and how quality and price weightings interact lets you set a bid price on purpose rather than out of fear.

                ## Milestones
                1. The price scoring formulas from three past tenders written out and understood.
                2. A spreadsheet that shows the marks gained for each price change under each formula.
                3. The rules on abnormally low bids, and how buyers test them, noted.
                4. A pricing rule for future bids based on the weighting and formula used.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A price scoring spreadsheet models at least three real formulas and is used to set the price on the next public bid."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Copy the price scoring formula from three past tenders"
                - "Build a spreadsheet showing marks gained for each price change"
                - "Read how buyers test a bid they suspect is abnormally low"
                - "Write a bid pricing rule tied to the weighting and formula"
            - name: Pre-market conversations that stay within fairness rules
              description: |-
                ## Purpose
                Talking to public buyers before a tender is allowed and often encouraged, but the conversation must not hand one supplier an unfair advantage, and buyers will share anything material with all bidders. Learning what you can and cannot discuss, and how to get value from a meeting the buyer must keep even-handed, lets sellers be useful early without risking exclusion later.

                ## Milestones
                1. The rules on contact before a tender, during a live tender and after award written down.
                2. A list of good questions for a pre-market meeting about the problem, constraints, budget timing and likely route.
                3. A short guide on what to send, and not send, to a buyer before a tender.
                4. Two practice pre-market meetings run with a colleague playing the buyer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written guide to buyer contact before, during and after a tender, practised in two role-played pre-market meetings."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the contact rules before, during and after a live tender"
                - "List ten questions to ask in a pre-market meeting with a buyer"
                - "Note what material you should not send a buyer before a tender"
                - "Role-play two pre-market meetings with a colleague as the buyer"
            - name: Business case material for a public budget holder
              description: |-
                ## Purpose
                A public sector champion rarely has the authority to buy alone; they need a business case that their finance team, board or committee will approve, often in a set format such as the five case model. Giving the champion ready-made material on options, costs, benefits, risks and value for money moves a need from interest to a funded line in a budget.

                ## Milestones
                1. The business case format used by one priority buyer obtained or described by the champion.
                2. Reusable sections on options appraisal, costs, benefits and risks for your product.
                3. A benefits model built on the buyer's own figures, such as staff hours or caseloads.
                4. One champion given the material, with the approval route mapped.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Reusable business case sections and a benefits model have been given to at least one public champion, with their approval route mapped."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask a champion which business case format their organisation uses"
                - "Draft reusable options, costs, benefits and risks sections"
                - "Build a benefits model that uses the buyer's own figures"
                - "Map the committee or board route the case must pass through"
            - name: Accessibility conformance statement for digital products
              description: |-
                ## Purpose
                In many countries, public bodies must buy accessible digital services and will ask for evidence against a standard such as WCAG, often as a conformance report or accessibility statement. Testing the product and publishing an honest statement, with known issues and fix dates, answers the question before it costs you a bid.

                ## Milestones
                1. The main user flows tested against the current standard by an internal tester or a specialist.
                2. A conformance report listing each criterion as supported, partly supported or not supported.
                3. A fix plan with a date for each known issue.
                4. The statement published and added to the evidence pack.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A published accessibility conformance statement, based on a test of the main user flows, with a dated fix plan for every known issue."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the main user flows a public customer would rely on"
                - "Commission or run an accessibility test of those flows"
                - "Write the conformance report criterion by criterion"
                - "Publish the statement with a dated fix plan"
            - name: Framework agreement application decision
              description: |-
                ## Purpose
                Frameworks let many public buyers purchase without running their own tender, but places on them are competed for, may reopen only every few years, and carry reporting and fee obligations. Deciding which frameworks are worth bidding for, based on how much your target buyers actually spend through them, avoids winning a place on a framework nobody in your segment uses.

                ## Milestones
                1. A list of frameworks covering your category, with owner, lots, term and next reopening date.
                2. Spend by your priority buyers through each framework estimated from published data.
                3. The fees, reporting and pricing obligations of each framework understood.
                4. A decision on which frameworks to bid for at the next opportunity, recorded with reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on which frameworks to bid for, based on estimated spend by priority buyers and each framework's obligations."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List frameworks that cover your category and their next reopening dates"
                - "Estimate how much your priority buyers spend through each one"
                - "Note each framework's fees, reporting and price obligations"
                - "Record which frameworks to bid for and why"
                - "Check framework reopening dates and lot changes @recurring(quarterly)"
            - name: Prime contractor or subcontractor decision
              description: |-
                ## Purpose
                Large public contracts are often won by a few prime contractors who then subcontract specialist work, and for a smaller supplier a place in a prime's supply chain can be faster and lower risk than bidding alone. Whether to lead, partner or sit below a prime depends, tender by tender, on the mandatory requirements, liability, financial thresholds and the terms the buyer flows down.

                ## Milestones
                1. The tender checked for turnover, insurance, accreditation and liability requirements you cannot meet alone.
                2. Three likely prime contractors identified, with their supply chain contacts.
                3. Flow-down terms, payment terms and exclusivity requests compared across primes.
                4. A decision recorded to bid as prime, as part of a group, or as a subcontractor.

                ## Notes
                Start from the **Risk register** template to log liability, payment and exclusivity risks under each option. Some countries require primes to pay subcontractors within set days, so check what the contract says.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "For the next large tender, a recorded decision to bid as prime, in a group or as subcontractor, with the risks of each option logged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check the tender for requirements you cannot meet alone"
                - "Find the supply chain contacts at three likely primes"
                - "Compare flow-down, payment and exclusivity terms from each prime"
                - "Record the decision and its main risks in the register"
            - name: Consortium bid partnership agreement
              description: |-
                ## Purpose
                When two or more suppliers bid together, the buyer will ask who leads, who is liable and how the work is split, and disagreements after award are much harder to settle. A teaming or consortium agreement signed before submission sets out roles, revenue share, exclusivity, confidentiality and what happens whether the bid wins or loses.

                ## Milestones
                1. Partner roles, scope and the lead bidder agreed in writing.
                2. Revenue split, pricing ownership and liability share set out.
                3. Exclusivity, confidentiality and non-solicitation terms agreed.
                4. The agreement reviewed by a lawyer and signed by every party before submission.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed teaming agreement covering roles, revenue split, liability and exclusivity is in place before the consortium bid is submitted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the lead bidder and each partner's scope in short heads of terms"
                - "Set out revenue split, pricing ownership and liability share"
                - "Add exclusivity and confidentiality terms for the bid"
                - "Have a lawyer review the agreement before every party signs"
            - name: Packaging an offer for below-threshold purchases
              description: |-
                ## Purpose
                Below the lower procurement threshold, many buyers can place an order after collecting a few quotes or by using a purchasing card, which takes weeks instead of months. A fixed-price starter package sized under the usual limits, with a one-page quote and standard terms, gives a public champion something they can say yes to without a tender.

                ## Milestones
                1. The quote and purchasing card limits of five priority buyers found.
                2. A fixed-price starter package designed to sit under the most common limit.
                3. A one-page quote and standard terms ready to send.
                4. Three champions offered the package as a first step.

                ## Notes
                Never suggest splitting one requirement into smaller orders to get under a threshold. Buyers are not allowed to do it, and a supplier who proposes it loses trust fast.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fixed-price starter package priced below the common quote limit, with a one-page quote, has been offered to at least three public champions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the quote and purchasing card limits of five priority buyers"
                - "Design a fixed-price starter package under the most common limit"
                - "Write a one-page quote with standard terms"
                - "Offer the package to three champions as a first step"
            - name: Cooperative purchasing contracts for local and education buyers
              description: |-
                ## Purpose
                Councils, school groups, universities and hospitals often buy through shared contracts let by purchasing consortia or cooperative purchasing organisations, which saves each of them running a tender. Finding the consortia your buyers trust, and what it takes to get onto their contracts, can open dozens of buyers through a single award.

                ## Milestones
                1. The purchasing consortia and cooperative contracts used by your priority buyers identified.
                2. Each consortium's categories, membership and next tender date recorded.
                3. Two or three consortia chosen to approach, with named contacts.
                4. Your offer registered or bid at the next opportunity.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The purchasing consortia used by priority buyers are mapped, and at least two have been approached with their next tender date recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask five priority buyers which purchasing consortia they use"
                - "Record each consortium's categories, members and next tender date"
                - "Choose two or three consortia to approach and find their contacts"
                - "Add the next consortium tender to the pipeline with an owner"
            - name: Resellers already on government contracts
              description: |-
                ## Purpose
                Some public buyers can only purchase software or hardware through an approved reseller or a framework holder, which means your best route to market may be someone else's contract. Choosing one or two resellers who already hold the right contracts, and agreeing margin, deal registration and support, can make you buyable within weeks.

                ## Milestones
                1. Resellers holding contracts your target buyers use identified.
                2. Two or three shortlisted on coverage, expected margin and public sector track record.
                3. A reseller agreement in place with deal registration and pricing rules.
                4. One joint opportunity worked through the reseller.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed agreement with at least one reseller holding a contract your target buyers use, and one joint opportunity in the pipeline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find which resellers hold contracts your target buyers use"
                - "Shortlist two or three on coverage, margin and track record"
                - "Agree deal registration and pricing rules in a reseller agreement"
                - "Work one joint opportunity through the chosen reseller"
            - name: Public buyer invoicing and e-invoicing set-up
              description: |-
                ## Purpose
                A signed public contract still pays nothing until an invoice passes the buyer's system, and a purchase order number, a specific e-invoicing network or portal and exact formatting are common requirements. Setting up invoicing for each public customer before the first bill prevents payment delays that can run to months and sour a new relationship.

                ## Milestones
                1. Invoicing requirements listed for each public customer: purchase order rules, portal or network, and format.
                2. Accounts registered on any required e-invoicing portal.
                3. A first invoice sent correctly and confirmed as received.
                4. Payment terms and an accounts payable contact recorded per customer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every public customer has documented invoicing requirements, and the first invoice to each was confirmed as received without rejection."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each public customer for its invoicing and purchase order rules"
                - "Register on any e-invoicing portal or network they require"
                - "Send the first invoice and confirm it was received"
                - "Record payment terms and an accounts payable contact per customer"
            - name: Information requests about incumbent contracts
              description: |-
                ## Purpose
                Freedom of information or public records laws in many countries let anyone request contracts, pricing schedules and performance reports from public bodies, subject to commercial exemptions. A well-framed request about an incumbent contract can reveal its scope, value and end date well ahead of a re-tender.

                ## Milestones
                1. The information access rules in your target countries, and typical response times, noted.
                2. Two or three contracts chosen where better information would change your approach.
                3. Narrow, specific requests sent to each buyer.
                4. Answers logged against each contract in the expiry calendar.

                ## Notes
                Expect pricing and anything the incumbent marked commercially sensitive to be withheld. Assume your own contracts can be requested too, and mark genuinely sensitive material when you bid.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Specific information requests sent for at least two incumbent contracts, with every response logged against the contract in the expiry calendar."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note the information access rules and response times in your markets"
                - "Pick two contracts where more information would change your approach"
                - "Write a narrow, specific request to each buyer"
                - "Log every answer against the contract in the expiry calendar"
            - name: Pilot projects that fit procurement rules
              description: |-
                ## Purpose
                Free trials and pilots can look like an unfair advantage in a later tender, or tempt a buyer towards a follow-on it cannot award without competition. Designing pilots with a clear end date, a written evaluation, a modest value under the right threshold and no promise of further work keeps the buyer comfortable and the evidence usable.

                ## Milestones
                1. A standard pilot offer with scope, duration, value and success measures.
                2. A pilot agreement stating that no follow-on contract is implied.
                3. Evaluation criteria agreed with the buyer before the pilot starts.
                4. A written pilot report the buyer can use in a business case.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standard pilot offer and agreement used for at least one public pilot, ending in a written report the buyer can cite."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a standard pilot offer with scope, duration, value and measures"
                - "Draft a pilot agreement stating no follow-on contract is implied"
                - "Agree evaluation criteria with the buyer before the pilot starts"
                - "Write the pilot report in a format the buyer can reuse"
            - name: First public tender submission
              description: |-
                ## Purpose
                The first submission is where most process mistakes happen: a missing mandatory document, an answer over the word limit, a price in the wrong schedule, or an upload left until the last hour when the portal is slow. Running the first bid with a written plan, a compliance matrix and a submission a day early teaches the whole process at the lowest risk.

                ## Milestones
                1. A bid plan with owners and internal deadlines working back from the closing date.
                2. A compliance matrix showing every mandatory requirement and where it is met.
                3. Every answer reviewed against the scoring guide and word limits.
                4. The full response uploaded and the portal receipt saved at least 24 hours before the deadline.

                ## Notes
                Start from the **Operational checklist** template for the final submission checks. Late submissions are almost always rejected, whatever the reason.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A compliant first tender response is submitted at least 24 hours before the deadline, with the portal receipt saved."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Choose one upcoming tender that passes your triage rules"
                - "Write a bid plan with owners working back from the closing date"
                - "Build a compliance matrix of every mandatory requirement"
                - "Review every answer against the scoring guide before sign-off"
                - "Upload the response a day early and save the portal receipt"
            - name: Award decision and standstill period response
              description: |-
                ## Purpose
                After evaluation, regulated procurements usually notify every bidder of the result and their scores, then pause for a standstill period before the contract is signed. What you do in those few days matters: winners prepare to mobilise without acting as if the contract is signed, and losers decide quickly whether the scoring raises questions worth asking.

                ## Milestones
                1. A response plan for award notices that covers both winning and losing.
                2. Scores and reasons in the award letter compared with your own review of the bid.
                3. Any questions to the buyer sent within the standstill period.
                4. A decision recorded on whether to take advice about the outcome.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Within the standstill period of each award notice, the scores are reviewed against the bid and a decision on questions or advice is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page plan for the days after an award notice"
                - "Compare the award scores with your own review of the bid"
                - "Send any questions to the buyer before the standstill period ends"
                - "Record whether to seek legal advice about the outcome"
            - name: Supplier debrief after every tender decision
              description: |-
                ## Purpose
                Public buyers will usually explain how your bid was scored, and sometimes how the winner's compared, if you ask promptly and politely. A debrief for every decision, won or lost, collected in one place, shows where marks keep being dropped and turns each bid into a lesson for the next one.

                ## Milestones
                1. A standard debrief request with a short list of specific questions.
                2. A debrief requested within a week of every award decision.
                3. Notes from each debrief stored with the bid documents.
                4. A quarterly summary of recurring weaknesses shared with the bid team.

                ## Notes
                Start from the **Meeting notes** template for each debrief call. Ask about your weakest scored answer first; buyers are usually most specific there.
              priority: medium
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A debrief is requested for every tender decision within a week, notes are stored with the bid, and a quarterly summary of weaknesses is shared."
                cadence: rolling
              tasks:
                - "Write a standard debrief request with five specific questions"
                - "Request a debrief within a week of every award decision"
                - "Store debrief notes alongside the bid documents"
                - "Summarise repeated weaknesses across debriefs for the bid team @recurring(quarterly)"
            - name: Government supplier day or trade show
              description: |-
                ## Purpose
                Public sector conferences and buyer-led supplier days are among the few places where procurement leads, budget holders and framework owners talk openly to suppliers. Going with a target list, booked meetings and a clear question for each buyer is what turns a stand fee and two days out of the office into pipeline.

                ## Milestones
                1. One event chosen because priority buyers attend or speak there.
                2. A list of 15 target attendees, each with a reason to meet.
                3. At least five meetings booked before the event.
                4. Every conversation logged in the CRM within two working days of returning.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One public sector event attended with at least five pre-booked buyer meetings, all logged in the CRM within two working days."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose one event where your priority buyers attend or speak"
                - "Build a list of 15 target attendees with a reason to meet each"
                - "Book at least five meetings before the event"
                - "Log every conversation in the CRM within two days of returning"
            - name: Contract mobilisation in the first ninety days after award
              description: |-
                ## Purpose
                The first three months of a public contract set the tone for its whole term: the contract manager is watching for missed dates, and early KPIs often go to a committee. A mobilisation plan with named leads, a kick-off meeting, security and data sign-offs and early reporting gives the buyer confidence and protects the reference you will need later.

                ## Milestones
                1. A mobilisation plan agreed with the buyer, with named leads on both sides.
                2. The kick-off meeting held and the contract's obligations summarised for the delivery team.
                3. Security, data protection and onboarding requirements signed off.
                4. The first KPI report delivered on time.

                ## Notes
                Hand over from the bid team properly. Every commitment in the tender response, social value included, is now a contractual obligation.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Within 90 days of award, the mobilisation plan is agreed, security and onboarding sign-offs are complete and the first KPI report has gone out on time."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Summarise every commitment in the tender response for the delivery team"
                - "Agree a mobilisation plan with named leads on both sides"
                - "Hold the kick-off meeting with the buyer's contract manager"
                - "Complete the security, data protection and onboarding sign-offs"
            - name: Year-end budget window for public buyers
              description: |-
                ## Purpose
                In the last weeks of a public fiscal year, some budget holders find money that must be committed before year end or lost, and they need suppliers who can quote, contract and invoice fast through compliant routes. Preparing ready-to-buy options through frameworks you hold or below-threshold quotes, and asking champions early about spare budget, catches orders others miss.

                ## Milestones
                1. Year-end order and invoice cut-off dates for priority buyers checked in the budget calendar.
                2. Ready-to-buy options prepared through frameworks you hold or below the quote limit.
                3. Champions asked six to eight weeks before year end about planned and spare budget.
                4. Orders placed and invoices issued within each buyer's cut-off.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each year, every priority champion is contacted at least six weeks before their fiscal year end with a ready-to-buy option through a compliant route."
                cadence: cyclic
              tasks:
                - "Note each priority buyer's year-end cut-off for orders and invoices"
                - "Prepare ready-to-buy options through frameworks or below the quote limit"
                - "Ask champions about planned and spare budget before their year end @recurring(yearly)"
                - "Issue invoices before each buyer's year-end cut-off"
            - name: Defending your contract at re-tender
              description: |-
                ## Purpose
                Being the incumbent helps less in public procurement than in commercial sales, because the buyer must run a fair competition and evaluators can only score what is in the new bid. Starting 18 months before the end date, with a performance record, documented improvements and a fresh reading of the new specification, is how incumbents avoid losing to a cheaper newcomer.

                ## Milestones
                1. A dossier of KPIs, improvements and savings delivered over the life of the contract.
                2. Known weaknesses and complaints addressed before re-procurement starts.
                3. Any pre-market engagement for the replacement contract answered.
                4. The re-tender response written as if you were a new bidder, with evidence from delivery.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "For each contract within 18 months of its end date, a performance dossier is complete and the re-tender response cites delivery evidence in every scored answer."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List public contracts you hold that end within 18 months"
                - "Compile KPIs, improvements and savings into a performance dossier"
                - "Fix known complaints before re-procurement starts"
                - "Write the re-tender response as if you were a new bidder"
            - name: Small business route into public contracts
              description: |-
                ## Purpose
                For a small business, the first public revenue usually comes from lower-value quotes, lots reserved for small suppliers, supply chain work under a prime and local buyers who welcome nearby suppliers. A focused 90-day plan around those routes, rather than large national tenders, wins the first contract and reference without the cost of a full bid team.

                ## Milestones
                1. Small business schemes, set-asides or reserved lots in your country noted.
                2. Ten lower-value or local opportunities identified across councils, schools and health bodies.
                3. Two primes approached about supply chain work.
                4. At least three quotes or small tenders submitted.
                5. A first public reference secured, or the reason it was not recorded.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within 90 days, at least three public quotes or small tenders are submitted and two primes have been approached about supply chain work."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Look up small business schemes and set-aside rules in your country"
                - "Find ten lower-value or local opportunities across councils, schools and health"
                - "Approach two primes about supply chain work"
                - "Submit at least three quotes or small tenders"
            - name: Selling to schools and school groups
              description: |-
                ## Purpose
                Schools buy in small amounts on tight budgets and an academic year cycle, and decisions often sit with a head teacher, a business manager or a central trust or district team rather than a procurement department. Planning around term dates, budget setting and the approved buying routes for schools makes outreach land when they can actually say yes.

                ## Milestones
                1. Decision makers mapped in a single school and in a multi-school group or district.
                2. The academic and budget calendar noted, including when next year's budget is set.
                3. Approved buying routes for schools identified, such as shared frameworks or district contracts.
                4. A school-sized offer and pricing tier ready.
                5. Outreach timed to avoid exam season and the first weeks of term.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A school buying map with decision makers, budget calendar and approved routes exists, and a priced school-sized offer is ready to send."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Map decision makers in a single school and a multi-school group"
                - "Note when schools set next year's budget in your country"
                - "Find the approved buying routes schools use for your category"
                - "Design a school-sized offer and pricing tier"
            - name: Selling to universities and colleges
              description: |-
                ## Purpose
                Universities and colleges combine public procurement rules with academic independence: a department head may champion you, but central procurement, IT and data protection teams decide, and many institutions buy through sector purchasing consortia. Mapping both sides and the consortium route avoids the common trap of a delighted department with no way to buy.

                ## Milestones
                1. Departmental champions and central procurement, IT and data protection contacts identified in two target institutions.
                2. The sector consortia and frameworks each institution uses recorded.
                3. Each institution's procurement thresholds and approval routes noted.
                4. An opportunity plan that runs department and central conversations in parallel.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "For two target institutions, champions and central contacts are mapped with their consortium route and thresholds, and a parallel opportunity plan is written."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Identify a departmental champion in two target institutions"
                - "Find their central procurement, IT and data protection contacts"
                - "Record the sector consortia and frameworks each institution uses"
                - "Write an opportunity plan that runs department and central conversations together"
            - name: Selling to hospitals and health systems
              description: |-
                ## Purpose
                Health buyers add clinical evidence, patient safety, information governance and often a group purchasing organisation or national supply chain body to the usual procurement rules. Preparing the clinical and data evidence early, and knowing whether a hospital buys alone, through a regional group or through a national route, saves months of approvals after a promising clinical conversation.

                ## Milestones
                1. The buying structure of your target health systems mapped: individual hospitals, regional groups and national purchasing bodies.
                2. Clinical evidence, safety and regulatory documentation for your product gathered in one place.
                3. Information governance and data protection questions answered in a standard pack.
                4. Clinical champions and procurement leads identified in three target organisations.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A health buying map, a standard clinical and information governance pack, and named champions and procurement leads in three target organisations."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Map how your target hospitals buy: alone, regionally or nationally"
                - "Gather the clinical evidence and regulatory documents for your product"
                - "Write a standard information governance and data protection pack"
                - "Identify clinical champions and procurement leads in three organisations"
            - name: Public sector team structure in an enterprise sales organisation
              description: |-
                ## Purpose
                Enterprise companies that sell to government as a sideline usually lose to specialists, because public deals need bid managers, framework management, compliance expertise and account plans that run across procurement cycles. Deciding how to organise a dedicated public sector team, its coverage and its handoffs to legal and finance makes the segment a forecastable business rather than a run of heroic bids.

                ## Milestones
                1. Current public sector revenue, pipeline and win rate measured.
                2. Roles defined: account executives, bid manager, framework manager and compliance lead.
                3. Coverage agreed by segment or buyer group, with handoffs to legal, finance and delivery.
                4. A monthly public sector pipeline review held against procurement dates.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A documented public sector team structure with defined roles and coverage is approved by sales leadership, and a monthly pipeline review is running."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Measure current public sector revenue, pipeline and win rate"
                - "Define the roles a dedicated public sector team needs"
                - "Agree coverage by segment and handoffs to legal and finance"
                - "Run the public sector pipeline review against procurement dates @recurring(monthly:26)"
            - name: Innovation procurement and challenge competitions
              description: |-
                ## Purpose
                Many governments run innovation programmes in which buyers publish a problem rather than a specification and fund staged research, prototypes and pilots, such as small business innovation research schemes. These competitions favour new products and smaller companies, and a funded phase can open a route to larger contracts without a traditional tender.

                ## Milestones
                1. The innovation procurement programmes in your markets listed with themes and deadlines.
                2. One challenge chosen where your product fits the published problem.
                3. A phase one application submitted with a clear plan, costs and success measures.
                4. The route from a funded phase to a follow-on contract understood and written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "At least one innovation challenge application is submitted with costs and measures, and the route to a follow-on contract is documented."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List innovation procurement programmes and their open challenges"
                - "Pick one challenge where your product fits the published problem"
                - "Write and submit the phase one application"
                - "Note how a funded phase can lead to a follow-on contract"
            - name: Challenging a flawed procurement decision
              description: |-
                ## Purpose
                When a tender appears to break its own rules, for example by scoring against criteria that were never published, suppliers may have a right to challenge, but the time limits are short and the relationship cost is real. Knowing in advance how to gather evidence, when to take legal advice and how to raise concerns with the buyer first lets you act within the deadlines without acting rashly.

                ## Milestones
                1. The time limits for a challenge in your main markets confirmed with a lawyer.
                2. A short internal process for gathering award letters, scores and correspondence.
                3. A template letter for raising concerns with the buyer before any formal step.
                4. A rule agreed with leadership on when the relationship cost outweighs the case.

                ## Notes
                This is a legal matter. The project organises evidence and timings; the decision to challenge belongs with your lawyer and leadership.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Challenge time limits are confirmed with a lawyer, an evidence process is written and a template concern letter is ready before it is needed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask a procurement lawyer about challenge time limits in your markets"
                - "Write a process for collecting award letters, scores and correspondence"
                - "Draft a template letter raising concerns with the buyer"
                - "Agree with leadership when a challenge is worth the relationship cost"
---

# Public Sector Selling

This area is for anyone selling to government, health and education buyers, from a small business answering its first request for quotes to an enterprise team holding a dozen frameworks. It starts with the foundations (readiness, target segments, thresholds, portal registration, the evidence pack, public pricing and ethics rules), moves through the machinery of tender triage, budget and expiry calendars, award tracking and contract reporting, then the skills of reading tender packs and writing scored answers. After that come route decisions such as frameworks, primes and consortia, dated events from a first submission to a re-tender, plays for schools, universities, hospitals and enterprise teams, and specialist work on innovation competitions and procurement challenges.

What repeats is a Monday tender triage, a Thursday scan for early market engagement, monthly expiry reviews, award logging, KPI reports and evidence checks, quarterly spending data, framework and debrief reviews, and yearly certification, ethics and year-end budget routines. The Compliance control, Metrics log, Risk register, Operational checklist and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
