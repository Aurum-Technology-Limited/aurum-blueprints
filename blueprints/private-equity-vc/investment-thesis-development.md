---
id: private-equity-vc.investment-thesis-development
name: Investment Thesis Development
description: "A written sector thesis before you chase deals: market maps, target lists, the hypotheses that must hold, expert calls, kill criteria and a yearly refresh that keeps conviction honest."
category: business
version: 1.0.0
tags: [private-equity-vc, investment-thesis-development, knowledge-worker, founder, sector-thesis, market-mapping, expert-calls, private-equity]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - purchase-decision
    - trip
    - risk-register
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Investment Thesis Development
          description: "Writing an industry or theme thesis before chasing deals: market maps, target lists, what has to be true, expert calls and refreshing the thesis each year."
          projects:
            - name: Choosing the sector for your first thesis
              description: |-
                ## Purpose
                Most theses fail because the sector was picked for being fashionable rather than for fitting the fund and the author. Scoring three to five candidate sectors against fragmentation, deal count in your size band, your own edge and the fund mandate gives you one sector you can defend in a partner meeting and live with for a year.

                ## Milestones
                1. A long list of five candidate sectors or sub-sectors, each described in one line.
                2. Every candidate scored on the same six criteria, with the evidence for each score noted.
                3. One sector chosen and the reasons for dropping the others written in a paragraph.
                4. The choice agreed with the partner or co-founder who will sponsor the thesis.

                ## Notes
                Your edge counts as a criterion: prior operating experience, a network of owners or a language can matter more than market growth.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One sector is chosen from a scored long list of at least five, with the reasons recorded and the sponsoring partner's agreement noted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down five sectors you could plausibly build a thesis around"
                - "Agree six scoring criteria, including fund fit and your own edge"
                - "Score each sector and note the evidence behind every score"
                - "Book thirty minutes with your sponsoring partner to agree the choice"
            - name: One-page thesis format
              description: |-
                ## Purpose
                Forty-slide theses are never reread, while a single page forces you to say what you believe and why. Fixing the format once (the claim, why now, the hypotheses, the target profile, the kill criteria and the open questions) means every later version is comparable with the last.

                ## Milestones
                1. A one-page layout with fixed headings saved as the master for every thesis.
                2. A worked first draft on that page for your chosen sector, however rough.
                3. A version number and date at the top so changes can be traced.
                4. Feedback from one colleague on whether the page reads in five minutes.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned one-page thesis exists with all six fixed headings filled in, and one colleague has read it and given written feedback."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the six headings every thesis page will carry"
                - "Draft the first version for your sector in a single sitting"
                - "Add a version number and date line to the top of the page"
                - "Ask a colleague to read it in five minutes and say what is unclear"
            - name: Thesis research workspace and source library
              description: |-
                ## Purpose
                Thesis evidence arrives from reports, call notes, filings, trade press and conference decks, and it scatters across inboxes within a month. A single workspace with a folder per hypothesis and a source log with dates lets you show where every claim came from when a partner asks.

                ## Milestones
                1. One workspace with folders for sources, call notes, maps, target lists and versions.
                2. A source log listing each document, its date, its origin and the hypothesis it informs.
                3. A naming convention for files that sorts by date.
                4. Existing material moved in and logged.

                ## Notes
                Keep anything received under a confidentiality agreement in a separate, access-controlled folder and note the agreement against it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All thesis material sits in one workspace, and the source log has an entry with date and origin for every document in it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the workspace with one folder per hypothesis plus maps and versions"
                - "Start a source log with date, origin and linked hypothesis columns"
                - "Move existing reports and notes in and log each one"
                - "File new sources into the log on the first working day @recurring(monthly:3)"
            - name: Fund mandate fit check for the thesis
              description: |-
                ## Purpose
                Building a beautiful thesis about companies the fund cannot buy wastes a year. Checking the sector against the fund's cheque size, EBITDA or revenue range, geography, control requirements and any excluded activities in the LPA before research begins avoids building conviction in deals the committee will reject on mandate alone.

                ## Milestones
                1. The fund's investable size range, geography and control terms written beside the thesis.
                2. Any sector exclusions or concentration limits in the fund documents checked with whoever owns compliance.
                3. An estimate of how many companies in the sector fall inside the size band.
                4. A clear pass or adjust verdict recorded on the thesis page.

                ## Notes
                Read the mandate from the fund documents or ask compliance; do not rely on memory of what the fund usually does.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The thesis page records the fund's size band, geography and exclusions, an estimated count of companies in band, and a pass or adjust verdict."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the fund's size range, geography and control terms onto the thesis page"
                - "Ask compliance whether the sector touches any exclusion or limit"
                - "Estimate how many companies in the sector sit inside the size band"
                - "Record a pass or adjust verdict with one line of reasoning"
            - name: Defining the investable universe
              description: |-
                ## Purpose
                Vague boundaries such as healthcare services or industrial technology make market sizing and target lists impossible to check. Defining the universe by activity codes, customer type, revenue model and size band tells everyone exactly which companies are in and which are adjacent.

                ## Milestones
                1. A written definition of the universe using activity codes and plain-language inclusions.
                2. A list of adjacent segments explicitly excluded, with the reason for each.
                3. Size bands set in revenue or EBITDA to match the fund mandate.
                4. Three example companies that are clearly in and three that are clearly out.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A universe definition with activity codes, exclusions, size bands and six worked examples is attached to the thesis page."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up the industry classification codes that cover your sector"
                - "Write which segments are in and which adjacent ones are out"
                - "Set revenue or EBITDA bands that match the fund mandate"
                - "Name three companies clearly inside and three clearly outside the line"
            - name: What has to be true, the hypothesis list
              description: |-
                ## Purpose
                Every thesis is only as good as the beliefs it rests on, and most of them are never written down. Listing the five to eight things that must hold for a deal in this sector to return the fund's target, each phrased so evidence could prove it wrong, turns a hunch into a research plan.

                ## Milestones
                1. Five to eight hypotheses, each a single falsifiable sentence.
                2. For each one, the evidence that would confirm it and the evidence that would break it.
                3. Hypotheses ranked by how much of the return depends on them.
                4. A named source or method for testing each of the top three.

                ## Notes
                Good hypotheses are specific: customers renew at above 90 percent because switching takes a regulatory re-approval, not customers are sticky.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The thesis carries five to eight falsifiable hypotheses, each with confirming and breaking evidence defined and a test method for the top three."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write every belief the thesis depends on as one sentence"
                - "Cut the list to the five to eight that matter most for returns"
                - "Note what evidence would confirm and what would break each one"
                - "Pick a test method for each of the top three hypotheses"
            - name: Kill criteria written before the research
              description: |-
                ## Purpose
                Once you have spent three months on a sector, almost any finding can be explained away. Writing down in advance the findings that would make you abandon the thesis (margin compression, a regulatory change, too few targets in band) protects you from your own sunk cost.

                ## Milestones
                1. Three to five kill criteria, each tied to a measurable threshold.
                2. The criteria dated and shared with the sponsoring partner before research starts.
                3. A place on the thesis page where each criterion shows as clear, at risk or triggered.
                4. A quarterly check of every criterion against the latest evidence.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Dated kill criteria with numeric thresholds were shared with the sponsor before research began, and each is reviewed every quarter."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three to five findings that would end the thesis"
                - "Attach a measurable threshold to each kill criterion"
                - "Send the dated criteria to your sponsoring partner"
                - "Mark each kill criterion clear, at risk or triggered @recurring(quarterly)"
            - name: Desk research baseline for the sector
              description: |-
                ## Purpose
                Before calling a single expert you should know what the published record says, or you will spend expensive calls on facts available for free. A two-week desk sprint through industry reports, listed company filings, trade association data and the trade press gives you a baseline and a sharper set of questions.

                ## Milestones
                1. Ten or more sources read and logged, including at least three listed company annual reports.
                2. A two-page summary of size, growth, structure and margins as the public record shows them.
                3. Gaps and contradictions between sources listed.
                4. A question list for the first expert calls built from those gaps.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-page desk baseline citing at least ten logged sources exists, along with a question list drawn from its gaps."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Download the latest annual reports of three listed companies in the sector"
                - "Find the trade association's most recent market statistics"
                - "Ask the agent to summarise the sources into size, growth, structure and margins"
                - "Write the gaps and contradictions you found as expert call questions"
            - name: Precedent deals log for the sector
              description: |-
                ## Purpose
                Past transactions tell you who else believes in the sector, what multiples were paid and which sponsors are already building platforms. A log of announced deals over the last five to ten years, from press releases and public databases, shows whether you are early, crowded or late.

                ## Milestones
                1. A log of announced deals with date, target, buyer, buyer type and any disclosed value.
                2. Active sponsors in the sector identified with their known platforms.
                3. A short note on what the deal pattern says about timing and competition.
                4. The log refreshed every quarter with new announcements.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A precedent log of at least fifteen announced deals with buyer types is attached to the thesis and refreshed each quarter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Search public deal announcements in the sector for the last five years"
                - "Record each deal's date, target, buyer, buyer type and disclosed value"
                - "List sponsors that already own a platform in the sector"
                - "Add newly announced sector deals to the log @recurring(quarterly)"
            - name: Weekly thesis reading and signal log
              description: |-
                ## Purpose
                Conviction decays or hardens through small signals: a price increase announced by a market leader, a new entrant, a hiring freeze at a key customer. A protected hour each week to read and log those signals against the hypotheses keeps the thesis current between formal reviews.

                ## Milestones
                1. A standing weekly hour in the calendar for thesis reading.
                2. A signal log with date, source, signal and the hypothesis it touches.
                3. At least one logged signal a week for a quarter.
                4. Signals that cut against the thesis flagged for the monthly review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The signal log shows at least twelve dated entries a quarter, each linked to a hypothesis, with contrary signals flagged."
                cadence: rolling
              tasks:
                - "Block one hour a week in the calendar for thesis reading"
                - "Set up the signal log with date, source, signal and hypothesis columns"
                - "Read trade press and log any signal against a hypothesis @recurring(weekly:tue)"
                - "Flag signals that contradict the thesis for the monthly review"
            - name: Friday regulatory and news watch
              description: |-
                ## Purpose
                Regulation, reimbursement rules, tariffs and licensing changes can make or break a sector thesis overnight. A short Friday scan of the regulator's announcements, consultations and the main policy newsletters means you hear about a change from your own watch, not from a seller's adviser.

                ## Milestones
                1. The regulators, standards bodies and policy sources for the sector listed.
                2. Alerts or newsletter subscriptions set up for each.
                3. A Friday scan completed and any relevant item logged.
                4. Open consultations that affect the thesis noted with their closing dates.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of sector regulators and policy sources exists with alerts set, and the watch log has a Friday entry for most weeks of the quarter."
                cadence: rolling
              tasks:
                - "List the regulators and policy sources that govern the sector"
                - "Subscribe to alerts or newsletters from each of them"
                - "Scan the week's regulatory and policy news and log what matters @recurring(weekly:fri)"
                - "Note open consultations with their closing dates"
            - name: Monthly evidence review against the hypotheses
              description: |-
                ## Purpose
                Evidence piles up in the signal log and call notes but rarely gets weighed. A monthly session that scores each hypothesis as strengthened, unchanged or weakened, with the evidence named, turns research into a visible shift in conviction that a partner can follow.

                ## Milestones
                1. A monthly review slot fixed in the calendar.
                2. Each hypothesis scored strengthened, unchanged or weakened, citing the evidence.
                3. The thesis page updated with a dated change note when a score moves.
                4. Three consecutive monthly reviews completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly reviews are recorded, each scoring every hypothesis with cited evidence and a dated change note."
                cadence: rolling
              tasks:
                - "Book a recurring monthly ninety-minute review slot"
                - "Score every hypothesis against the month's evidence @recurring(monthly:12)"
                - "Write a dated change note on the thesis page when a score moves"
                - "Move any weakened hypothesis to the top of next month's research plan"
            - name: Expert call programme
              description: |-
                ## Purpose
                Former executives, customers, suppliers and consultants know things no report prints, but ad hoc calls produce anecdotes rather than evidence. A planned programme of one or two calls a month, each aimed at a named hypothesis with a written guide, builds a body of testimony you can cite.

                ## Milestones
                1. A target list of expert profiles mapped to the hypotheses they can test.
                2. A reusable call guide with core questions and hypothesis-specific sections.
                3. Notes from each call filed with the hypothesis it informed.
                4. At least six calls completed across customers, competitors and suppliers.

                ## Notes
                Start from the **Meeting notes** template for each call. Follow your firm's compliance rules on expert networks and never ask a current employee for confidential information.
              priority: high
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "At least six expert calls across three viewpoints are logged, each with notes filed against a named hypothesis."
                cadence: rolling
              tasks:
                - "Map the expert profiles you need to the hypotheses they can test"
                - "Draft a call guide with core and hypothesis-specific questions"
                - "Schedule and run an expert call aimed at one open hypothesis @recurring(monthly:8)"
                - "File each call note against the hypothesis it informed"
            - name: Market map upkeep
              description: |-
                ## Purpose
                Market maps that were right in January are wrong by summer: companies are acquired, new ones appear and segments merge. Refreshing the map every quarter, with ownership and approximate size for each company, keeps it useful as the thesis's picture of who is where.

                ## Milestones
                1. A market map grouped by segment, with each company's ownership type marked.
                2. Approximate revenue or headcount bands added where public data allows.
                3. Sponsor-owned companies and recent exits highlighted.
                4. A dated version saved after each quarterly refresh.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated market map showing segment, ownership type and size band for each company is refreshed at least once every quarter."
                cadence: cyclic
              tasks:
                - "Lay out the market map by segment from the universe definition"
                - "Mark each company as founder, family, sponsor, corporate or listed owned"
                - "Refresh ownership, new entrants and exits on the map @recurring(quarterly)"
                - "Save a dated copy of the map after each refresh"
            - name: Thesis target list upkeep
              description: |-
                ## Purpose
                The target list is where the thesis meets real companies: the businesses that fit the profile you described. Keeping it current monthly, with why each company fits and what you still need to know, gives the sourcing effort a clear, thesis-driven starting point instead of a list of names.

                ## Milestones
                1. A target list of companies inside the universe and size band.
                2. A one-line fit rationale and the open questions against each name.
                3. A tier for each target based on fit with the hypotheses.
                4. Monthly additions and removals recorded with the reason.

                ## Notes
                This list says which companies fit the thesis and why. Outreach, intermediary coverage and the pipeline itself belong in your sourcing and CRM work.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A tiered target list of at least thirty companies carries a fit rationale for each name and a monthly change record."
                cadence: rolling
              tasks:
                - "Pull every company inside the size band from the market map"
                - "Write one line on why each company fits the thesis"
                - "Tier the list by fit with the top three hypotheses"
                - "Add, remove and re-tier targets with a reason for each change @recurring(monthly:20)"
            - name: Conviction score tracker
              description: |-
                ## Purpose
                Partners want to know whether you believe the thesis more or less than last quarter, and a gut answer is not useful. A single conviction score from one to five, recorded monthly with the reason, makes changes in belief visible and shows when a thesis is drifting without anyone saying so.

                ## Milestones
                1. A scale from one to five with a written meaning for each level.
                2. A monthly score recorded with a one-sentence reason.
                3. A simple chart of the score over time on the thesis page.
                4. Any two-point move discussed with the sponsoring partner.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The thesis page shows at least six monthly conviction scores with reasons, and every two-point move has a recorded partner discussion."
                cadence: rolling
              tasks:
                - "Define what each level from one to five means for this thesis"
                - "Record the conviction score and a one-line reason @recurring(monthly:26)"
                - "Chart the score history on the thesis page"
                - "Raise any two-point move with your sponsoring partner"
            - name: Quarterly thesis review with the partners
              description: |-
                ## Purpose
                Left with only its author as reader, a thesis becomes a private conviction rather than a firm strategy. A thirty-minute quarterly slot in the partner meeting, using the one-page thesis and the evidence log, gives the senior team a chance to challenge, redirect or stop the work before more time goes in.

                ## Milestones
                1. A standing quarterly slot agreed in the partner meeting agenda.
                2. The latest one-page thesis and hypothesis scores circulated two days before.
                3. Decisions from the review recorded: continue, redirect or stop.
                4. Actions from the review assigned with owners.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter's partner review has a circulated pre-read and a recorded decision of continue, redirect or stop with owned actions."
                cadence: cyclic
              tasks:
                - "Ask for a standing thesis slot on the quarterly partner agenda"
                - "Circulate the one-page thesis and hypothesis scores two days ahead @recurring(quarterly)"
                - "Record the review decision and the reasoning behind it"
                - "Assign each action from the review an owner and a date"
            - name: Annual thesis refresh
              description: |-
                ## Purpose
                Markets move, rates change and the fund's own portfolio shifts, so a thesis left alone for a year quietly goes stale. A full refresh each year rebuilds the hypotheses, sizing, map and target list from current evidence and ends with an explicit decision to renew, rewrite or retire the thesis.

                ## Milestones
                1. Every hypothesis re-tested against the past year's evidence.
                2. Market sizing, map and precedent log updated to the current year.
                3. A redline showing what changed from last year's thesis.
                4. A recorded decision to renew, rewrite or retire, agreed with the partners.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A refreshed thesis with a redline against last year and a recorded renew, rewrite or retire decision is completed every twelve months."
                cadence: cyclic
                effort_hours_estimate: "20"
              tasks:
                - "Book two working days for the annual thesis refresh @recurring(yearly)"
                - "Re-test every hypothesis against the year's evidence log"
                - "Produce a redline against last year's thesis page"
                - "Put a renew, rewrite or retire recommendation to the partners"
            - name: Managing several theses at once
              description: |-
                ## Purpose
                Once you hold two or three theses, the risk is spreading time evenly across all of them while none reaches conviction. A quarterly ranking that sets each thesis as active, watching or parked, with hours allocated, keeps effort on the one most likely to produce a deal.

                ## Milestones
                1. A single list of every thesis you hold with its conviction score.
                2. Each thesis labelled active, watching or parked.
                3. A rough split of weekly research hours across the active theses.
                4. The ranking reviewed each quarter and changes noted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A ranked list of all theses with status and hour allocation exists and has a dated quarterly review entry."
                cadence: cyclic
              tasks:
                - "List every thesis you hold with its latest conviction score"
                - "Label each thesis active, watching or parked"
                - "Split your weekly research hours across the active theses"
                - "Re-rank theses and adjust the hour split @recurring(quarterly)"
            - name: Market sizing for a thesis
              description: |-
                ## Purpose
                Committee members distrust a single headline market size taken from a report. Building the number two ways, top-down from published totals and bottom-up from the count of buyers times what they spend, and reconciling the gap, gives a size you can defend and shows where the uncertainty sits.

                ## Milestones
                1. A top-down estimate with each source and assumption shown.
                2. A bottom-up estimate built from customer counts and spend per customer.
                3. The gap between the two explained in writing.
                4. A served market figure for the segments the thesis targets.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sizing workbook shows top-down and bottom-up estimates, an explained gap and a served market figure for the target segments."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build the top-down estimate from two published market totals"
                - "Count the customers in the segment and estimate spend per customer"
                - "Compare the two numbers and write why they differ"
                - "Narrow the total to the segments your thesis actually targets"
            - name: Value chain and profit pool mapping
              description: |-
                ## Purpose
                Growth in a sector says little about where the money is made. Mapping the value chain from inputs to end customer and estimating margins at each step shows which links capture the profit, which are squeezed and where a buyer of a mid-sized company can actually earn a return.

                ## Milestones
                1. A diagram of the value chain with each step and its typical players.
                2. An estimated margin range for each step from listed comparables or expert input.
                3. The profit pool by step shown as a share of the total.
                4. A note on where the thesis targets sit and whether that link gains or loses share.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A value chain diagram with margin ranges and profit pool shares for every step is attached to the thesis, with the target link identified."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Sketch the value chain from raw inputs to the end customer"
                - "Find margin ranges for each step from listed companies"
                - "Estimate each step's share of the total profit pool"
                - "Mark where your targets sit and whether that share is growing"
            - name: Industry structure and fragmentation analysis
              description: |-
                ## Purpose
                Buyout returns in the lower and middle market often come from consolidating fragmented sectors, but fragmentation has to be measured, not assumed. Working out the top players' combined share, barriers to entry, buyer and supplier power and why the sector has stayed fragmented tells you whether consolidation is a real opportunity.

                ## Milestones
                1. Combined market share of the top five and top ten players estimated.
                2. Entry barriers, switching costs and buyer and supplier power each assessed in a paragraph.
                3. The reasons the sector has stayed fragmented written down.
                4. A view on whether those reasons are weakening.

                ## Notes
                Some sectors stay fragmented for good reasons, such as local service delivery or owner relationships, that a buyer cannot change.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A structure note with top-five and top-ten share estimates, assessed forces and the reasons for fragmentation is on file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate the combined share of the top five and top ten players"
                - "Assess entry barriers, switching costs and buyer power"
                - "Write down why the sector has stayed fragmented so far"
                - "Decide whether those reasons are getting weaker or stronger"
            - name: Running expert calls that produce evidence
              description: |-
                ## Purpose
                A badly run expert call drifts into war stories and yields nothing quotable. Practising a tight structure (context in two minutes, open questions, numbers on request, the one question only they can answer) makes every hour you pay for return something you can use against a hypothesis.

                ## Milestones
                1. A standard call structure with timings written down.
                2. A set of opening, probing and closing questions that work across experts.
                3. Three calls reviewed afterwards for what produced evidence and what did not.
                4. The call guide revised from those reviews.

                ## Notes
                Ask for ranges and examples rather than opinions: what did prices do in the last two renewals, not do you think prices are rising.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written call structure exists, three completed calls have post-call reviews, and the guide has been revised at least once."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a call structure with timings for each section"
                - "Draft opening, probing and closing questions that work for any expert"
                - "Review your last three calls for which questions produced numbers"
                - "Revise the call guide from what the reviews showed"
            - name: Unit economics of a typical target
              description: |-
                ## Purpose
                Being right about the market and wrong about the business model is a common way for a thesis to fail. Building the unit economics of a typical company in the target profile (price per unit or contract, cost to serve, gross margin, customer acquisition cost and lifetime) shows what a buyer would actually own.

                ## Milestones
                1. A simple model of revenue per customer or site and the cost to serve it.
                2. Gross and contribution margin ranges checked with at least two experts.
                3. The main drivers that move margin identified.
                4. A view of which levers an owner could realistically pull.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A unit economics model for a typical target exists with margin ranges validated by two experts and the main drivers listed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the unit that best describes the business, such as site or contract"
                - "Estimate revenue and cost to serve for one typical unit"
                - "Check the margin ranges with two experts from the call programme"
                - "List the three drivers that move unit margin most"
            - name: Telling secular trends from cycles
              description: |-
                ## Purpose
                Many sector theses are written at the top of a cycle and mistake a good few years for a structural shift. Separating the drivers that will persist for a decade (demographics, regulation, technology adoption) from those that rise and fall with rates or commodity prices keeps the thesis honest about what an exit buyer will pay for.

                ## Milestones
                1. Every growth driver in the thesis listed.
                2. Each driver tagged secular, cyclical or uncertain, with the evidence for the tag.
                3. Sector revenue or margins over at least one full past cycle reviewed.
                4. The thesis rewritten to rest mainly on the secular drivers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every growth driver is tagged secular, cyclical or uncertain with evidence, and sector data over a full past cycle is attached."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every driver of growth the thesis relies on"
                - "Tag each driver secular, cyclical or uncertain"
                - "Pull sector revenue or margin data covering a full past cycle"
                - "Rewrite the why-now section around the secular drivers"
            - name: Writing a thesis a partner reads in five minutes
              description: |-
                ## Purpose
                Partners read dozens of documents a week and give a thesis about five minutes. Learning to lead with the claim, put the numbers that matter in the first paragraph and cut every sentence that does not change a decision is what gets a thesis discussed rather than filed.

                ## Milestones
                1. The current thesis rewritten with the claim and the key numbers in the first paragraph.
                2. Word count cut by at least a third without losing a hypothesis.
                3. Two senior readers asked to state the thesis back after five minutes.
                4. The gaps between what they said and what you meant fixed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A rewritten thesis at least a third shorter has been read by two senior colleagues who could state its claim back correctly."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Rewrite the opening paragraph to state the claim and two key numbers"
                - "Cut every sentence that would not change an investment decision"
                - "Ask two senior readers to summarise the thesis after five minutes"
                - "Fix whatever they misread or missed"
            - name: Reading private sectors through listed comparables
              description: |-
                ## Purpose
                Private companies publish little, but listed peers report growth, margins, segment data and management commentary every quarter. Building a small set of listed comparables and reading their results with the thesis in mind gives you a running proxy for the private market and a check on valuation assumptions.

                ## Milestones
                1. Five to eight listed companies chosen as comparables, with the reason for each.
                2. Their growth, margins and valuation multiples tabulated.
                3. Segment disclosures that match your universe identified.
                4. Earnings call themes relevant to the hypotheses noted each reporting season.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparables table of five to eight listed peers with growth, margins and multiples is on file, with segment matches identified."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose five to eight listed peers and note why each is comparable"
                - "Tabulate their growth, margins and trading multiples"
                - "Find segment disclosures that match your universe"
                - "Read the latest earnings call transcripts for thesis-relevant themes"
            - name: Red team review of the thesis
              description: |-
                ## Purpose
                The author of a thesis is the worst person to find its holes. Asking two colleagues to argue the opposite case for an hour, with the hypotheses and evidence in front of them, surfaces the weaknesses before a seller's adviser or the investment committee does.

                ## Milestones
                1. Two colleagues who were not involved agree to play the red team.
                2. They receive the thesis and evidence log a week ahead.
                3. A one-hour session held where they argue against every hypothesis.
                4. The three strongest objections written up with your response or a research action.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A red team session has been held, and the three strongest objections are written up, each with a response or a research action."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two uninvolved colleagues to argue against the thesis"
                - "Send them the thesis and evidence log a week in advance"
                - "Run a one-hour session where they attack each hypothesis"
                - "Write up the three strongest objections and your answer to each"
            - name: Choosing an expert network or research provider
              description: |-
                ## Purpose
                Expert networks, transcript libraries and market data subscriptions can each cost a material share of a small fund's research budget. Comparing two or three on coverage in your sector, price per call or seat, compliance controls and contract terms before signing avoids paying for breadth you will not use.

                ## Milestones
                1. Your research needs written down: expected calls per quarter, sectors and data types.
                2. Two or three providers compared on coverage, price, compliance and contract length.
                3. A trial call or sample transcript taken from each shortlisted provider.
                4. A provider chosen and the decision recorded with the cost.

                ## Notes
                Start from the **Purchase decision** template. Have compliance review the provider's expert screening process before you sign.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider is chosen from a comparison of at least two on coverage, price and compliance, with the annual cost recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Estimate how many calls and transcripts you need per quarter"
                - "Compare two or three providers on sector coverage and price"
                - "Take a trial call or sample transcript from each shortlisted provider"
                - "Review usage against the contract before renewal @recurring(yearly)"
            - name: Platform or consolidation thesis shape
              description: |-
                ## Purpose
                Standalone deals and platform-plus-add-on strategies need different evidence, and a thesis should say which it points to. Deciding which shape the thesis takes, and checking the target count, typical add-on size and integration difficulty that a buy-and-build shape would need, sets the research agenda for everything after.

                ## Milestones
                1. The thesis shape chosen: standalone, platform with add-ons, or either.
                2. For a platform shape, the number of plausible add-ons in the size band estimated.
                3. The integration difficulty in the sector assessed from expert input.
                4. The choice and its reasons written into the thesis page.

                ## Notes
                This is a thesis-level choice. Running the actual add-on programme after an acquisition is separate work.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The thesis page states its shape, and a platform shape is supported by an add-on count estimate and an integration assessment."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide whether the thesis is standalone, platform or either"
                - "Count plausible add-ons in the size band from the market map"
                - "Ask two experts how hard integration is in this sector"
                - "Write the chosen shape and its reasons onto the thesis page"
            - name: Retiring or parking a thesis
              description: |-
                ## Purpose
                Theses rarely die cleanly: they linger on the list, absorbing an hour here and there, because stopping feels like admitting a mistake. A deliberate retire or park decision, with a short memo on what was learned and what would bring the thesis back, frees time and keeps the knowledge.

                ## Milestones
                1. A clear trigger identified: a kill criterion hit, falling conviction or a partner decision.
                2. A one-page memo on what the thesis got right, what it got wrong and what was learned.
                3. Conditions that would reopen the thesis written down.
                4. The thesis marked parked or retired and its research hours reallocated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A retire or park memo exists with lessons, reopening conditions and the reallocation of research hours recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name the trigger that makes this thesis a candidate to stop"
                - "Write a one-page memo on what was right, wrong and learned"
                - "List the conditions that would reopen the thesis"
                - "Move the freed research hours to the next active thesis"
            - name: Turning the thesis into screening criteria
              description: |-
                ## Purpose
                When a teaser arrives in the sector, the thesis should answer most of the first-look questions already. Translating the hypotheses and target profile into a short set of screening criteria (size, customer mix, margin floor, revenue model) means the deal team can apply the thesis quickly and consistently.

                ## Milestones
                1. Six to ten screening criteria derived from the thesis, each with a threshold.
                2. Each criterion linked back to the hypothesis it comes from.
                3. The criteria tested against three past teasers in the sector.
                4. The final criteria handed to whoever runs first-look screening.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six to ten thesis-derived screening criteria with thresholds have been tested on three past teasers and handed to the screening owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Turn each hypothesis into a screening criterion with a threshold"
                - "Link every criterion back to its source hypothesis"
                - "Test the criteria on three past teasers in the sector"
                - "Hand the criteria to the person who runs first-look screening"
            - name: Regulatory and policy risk map
              description: |-
                ## Purpose
                In regulated sectors such as healthcare, education, energy or financial services, policy is often the single biggest risk to returns. Mapping each rule that affects revenue or cost, who sets it, when it next changes and how exposed a typical target would be, makes that risk explicit and reviewable.

                ## Milestones
                1. Each rule, licence or reimbursement scheme that affects revenue or cost listed.
                2. The body that sets each one and its review or renewal timing noted.
                3. Exposure of a typical target rated high, medium or low for each item.
                4. The map reviewed with a specialist adviser and their comments recorded.

                ## Notes
                Start from the **Risk register** template. This map organises questions for your advisers; it is not a legal or regulatory opinion.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk register lists each relevant rule with its setter, timing and exposure rating, with a specialist adviser's comments attached."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every rule, licence or scheme that touches revenue or cost"
                - "Note who sets each one and when it is next reviewed"
                - "Rate how exposed a typical target is to each item"
                - "Review the map against the latest regulatory changes @recurring(quarterly)"
            - name: Lookback on past sponsor investments in the sector
              description: |-
                ## Purpose
                Other sponsors have already run your thesis, and their exits are partly visible in press releases, listed buyers' filings and fund reports. Studying what happened to ten past sponsor-backed companies in the sector, how long they were held and who bought them, gives you base rates rather than hope.

                ## Milestones
                1. Ten past sponsor-backed companies in the sector identified.
                2. Holding period, exit route and buyer type found for each where public.
                3. Patterns noted: common exit buyers, typical holds, deals that went wrong.
                4. The implications for the thesis's exit assumptions written down.

                ## Notes
                Use only public sources and treat disclosed figures as indicative. Never present another firm's returns as fact without a source.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A lookback table of ten sponsor-backed companies with holds, exit routes and buyer types is attached, with implications for exit assumptions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find ten past sponsor-backed companies in the sector"
                - "Record the holding period, exit route and buyer for each"
                - "Note which ones struggled and what public sources say went wrong"
                - "Write what the patterns mean for your exit assumptions"
            - name: Exit buyer map for the thesis
              description: |-
                ## Purpose
                Until you know who buys the company in five years and why they would pay more than you did, a thesis is only half written. Mapping likely strategic acquirers, larger sponsors and listing routes, with what each looks for, tests whether the thesis builds the kind of business someone will want.

                ## Milestones
                1. A list of likely strategic acquirers with their recent acquisition activity.
                2. Larger sponsors with platforms in the sector identified as secondary buyers.
                3. The listing route assessed as realistic or not for a company of target size.
                4. What each buyer type values written beside it and tied back to the hypotheses.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An exit buyer map naming strategic, sponsor and listing routes with what each values is attached to the thesis."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List strategic acquirers active in the sector in recent years"
                - "Identify larger sponsors that could buy a company of your target size"
                - "Judge whether a listing is a realistic exit at that size"
                - "Note what each buyer type pays for and tie it to a hypothesis"
            - name: Industry conference week for thesis testing
              description: |-
                ## Purpose
                A sector's main trade show puts customers, suppliers, owners and analysts in one building for three days. Going with a written list of hypotheses to test and people to meet, rather than collecting badges and brochures, can compress months of research into a week.

                ## Milestones
                1. The one conference that matters most for the sector chosen and booked.
                2. A list of hypotheses to test and twelve people or stands to visit.
                3. Notes taken against each hypothesis during the event.
                4. A debrief within three days updating hypothesis scores and the market map.

                ## Notes
                Start from the **Trip** template. Exhibitor lists are often published weeks ahead and make a good starting point for the map.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A debrief written within three days of the conference updates the hypothesis scores and adds new companies to the market map."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Pick the one trade show that matters most for the sector"
                - "Download the exhibitor list and match names to the market map"
                - "Write the hypotheses to test and twelve people to meet"
                - "Write the debrief within three days of getting back"
            - name: Presenting the thesis to the partnership
              description: |-
                ## Purpose
                The moment a thesis becomes firm strategy is the session where the partners agree to spend time and money on it. Preparing a short presentation, a pre-read and answers to the five hardest questions turns months of research into a decision on resources: who works on it and what the sourcing push looks like.

                ## Milestones
                1. A pre-read of no more than three pages circulated a week ahead.
                2. A twenty-minute presentation with time left for challenge.
                3. Written answers prepared for the five hardest likely questions.
                4. A recorded decision on resources, time allocation and next steps.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The thesis has been presented to the partners with a pre-read, and a decision on resources and next steps is recorded in the minutes."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask for a thesis session on the partnership calendar"
                - "Write a three-page pre-read from the one-page thesis and evidence"
                - "Draft answers to the five hardest questions you expect"
                - "Record the partners' decision on resources and next steps"
            - name: Site visits inside the sector
              description: |-
                ## Purpose
                Spending a morning at a customer's operation, a distributor's depot or a business that is not for sale shows how the work is really done and what customers complain about. Two or three visits ground the thesis in operations rather than slides.

                ## Milestones
                1. Two or three hosts found among experts, customers or friendly owners.
                2. A short list of observations to look for at each visit, tied to hypotheses.
                3. Visit notes written the same day.
                4. Any hypothesis the visits changed updated on the thesis page.

                ## Notes
                Be clear with hosts that this is research. If a visit turns into a deal conversation, hand it to whoever owns sourcing and follow your firm's rules.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Notes from at least two site visits are filed the same day, with any changed hypothesis updated on the thesis page."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask three contacts whether they would host a half-day visit"
                - "Write what you want to observe at each visit and why"
                - "Write up visit notes on the same day as each visit"
                - "Update the hypotheses the visits changed"
            - name: Annual sector day with the deal team
              description: |-
                ## Purpose
                Once a year the deal team, operating partners and a couple of outside experts should spend a day on each core thesis together. A sector day with expert panels, a review of the map and a debate on the hypotheses spreads knowledge beyond the author and sets the year's research priorities.

                ## Milestones
                1. A date set and two outside experts invited.
                2. Agenda covering the map, hypotheses, expert sessions and a debate.
                3. The day held with notes taken by a named person.
                4. Research priorities for the coming year agreed and recorded.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A sector day is held each year with outside experts, and the agreed research priorities for the next year are recorded."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "Pick a date for the sector day and invite two outside experts @recurring(yearly)"
                - "Build an agenda around the map, the hypotheses and a debate"
                - "Name a note-taker for the day"
                - "Record the research priorities agreed for the coming year"
            - name: Publishing a public version of the thesis
              description: |-
                ## Purpose
                A well-argued public piece on a sector, stripped of anything confidential, tells owners, advisers and experts what you believe and invites them to call. Writing a short article or white paper once a year also forces you to explain the thesis clearly to people who do not share your assumptions.

                ## Milestones
                1. A list of what can and cannot be said publicly, agreed with compliance.
                2. A draft of 1,200 to 2,000 words built from the public parts of the thesis.
                3. The draft reviewed by a partner and by compliance.
                4. The piece published and responses from readers logged.

                ## Notes
                Nothing from confidential calls, data room material or live deals goes into a public piece. Marketing rules for fund managers may apply; check with compliance.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A public thesis piece cleared by compliance has been published, and reader responses are logged."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Agree with compliance what can be said publicly about the sector"
                - "Draft a public sector piece from the non-confidential thesis @recurring(yearly)"
                - "Send the draft for partner and compliance review"
                - "Log the calls and emails the piece prompts"
            - name: Associate's first thesis assignment
              description: |-
                ## Purpose
                Associates are often handed a sector with little more than build a thesis on it, and the first one sets their reputation for judgement. Agreeing the scope, the deliverable and check-in points with the sponsoring partner at the start, then hitting them, shows you can run research without being chased.

                ## Milestones
                1. Scope, deliverable and deadline agreed with the sponsoring partner in writing.
                2. Check-ins fixed at the hypothesis list, the first expert calls and the draft thesis.
                3. A draft one-page thesis delivered on time.
                4. Partner feedback recorded and a revised version delivered.

                ## Notes
                Ask early what the partner already believes about the sector. A thesis that ignores the sponsor's view without saying so rarely lands.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A first thesis is delivered by the agreed date after three scheduled check-ins, and a revised version reflects the partner's recorded feedback."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Email the partner a three-line scope, deliverable and deadline to confirm"
                - "Ask the partner what they already believe about the sector"
                - "Put the three check-in meetings in both calendars"
                - "Deliver the draft and record the feedback for the revision"
            - name: Thesis for an independent sponsor or searcher
              description: |-
                ## Purpose
                Without a fund behind you, a thesis is what convinces capital partners and owners that you are a serious buyer in a specific sector. A focused thesis on a niche where you have real experience, sized for the companies you can actually buy, becomes the core of every capital partner conversation.

                ## Milestones
                1. A niche chosen where your experience or network gives a visible edge.
                2. The thesis sized for the deal sizes your capital partners typically fund.
                3. A short capital partner version of the thesis, two pages at most.
                4. Feedback from three prospective capital partners recorded.

                ## Notes
                Fundraising, fee and promote terms are separate work. This project is about the sector argument itself.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A two-page thesis for a niche sized to your capital partners exists, with recorded feedback from three prospective capital partners."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the niches where your experience gives you a visible edge"
                - "Check the deal sizes your likely capital partners usually fund"
                - "Write a two-page capital partner version of the thesis"
                - "Ask three prospective capital partners for candid feedback"
            - name: Strategy thesis for an emerging manager's first fund
              description: |-
                ## Purpose
                LPs backing a first-time fund are buying a strategy as much as a team, and a fuzzy sector focus is one of the most common reasons they pass. Turning your sector work into a clear fund-level thesis, with why this niche, why now and why you, gives the PPM and the pitch a spine.

                ## Milestones
                1. A fund-level thesis paragraph covering niche, timing and edge.
                2. Evidence for each claim drawn from your sector research and past deals.
                3. The thesis tested with three LPs or LP advisers in informal conversations.
                4. A final version agreed for use in the PPM and pitch materials.

                ## Notes
                Fund documents need fund counsel. Statements about track record or expected outcomes must follow the marketing rules that apply to you.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fund-level thesis backed by cited evidence has been tested with three LPs or advisers and agreed for the PPM and pitch."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write one paragraph covering the niche, why now and why you"
                - "Attach the evidence behind each claim from your research"
                - "Test the thesis informally with three LPs or LP advisers"
                - "Agree the final wording with your co-founders and fund counsel"
            - name: Turning operating experience into a thesis
              description: |-
                ## Purpose
                Founders and executives moving into investing often know one industry deeply but have never written that knowledge down as an investor would. Converting what you saw from inside (cost structures, buyer behaviour, where companies stall) into explicit hypotheses makes your operating years a visible edge rather than an anecdote.

                ## Milestones
                1. A list of ten things you know about the industry that outsiders usually get wrong.
                2. Each one turned into a hypothesis an investor could test.
                3. Your claims checked against public data so they are not just your old company's view.
                4. A one-page thesis that a fund partner can read without industry background.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page thesis built from ten operating insights, each checked against public data, has been read by a fund partner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write ten things about your industry that outsiders get wrong"
                - "Turn each one into a hypothesis an investor could test"
                - "Check each claim against public data beyond your old employer"
                - "Ask a fund partner to read the one-page result cold"
            - name: Venture theme thesis around a technology shift
              description: |-
                ## Purpose
                Venture theses are built on a shift that makes new companies possible, and the hard question is timing. Writing out the enabling change, the adoption curve so far, the bottleneck that is about to clear and the types of company that win in each phase gives a venture theme its why now.

                ## Milestones
                1. The enabling change described in a paragraph with dated milestones.
                2. Adoption evidence so far gathered from public data and practitioner calls.
                3. The current bottleneck and the signs it is clearing named.
                4. Company archetypes that could win in each phase listed.

                ## Notes
                Keep the theme at thesis level. Tracking specific inbound startups and sources sits in your venture deal flow work.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A venture theme thesis names the enabling change, adoption evidence, the current bottleneck and company archetypes for each phase."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Describe the enabling technology change with dated milestones"
                - "Gather adoption evidence from public data and three practitioners"
                - "Name the bottleneck that holds adoption back today"
                - "List the company archetypes that win at each phase"
            - name: Contrarian thesis on an out-of-favour sector
              description: |-
                ## Purpose
                Some of the best entry prices come in sectors everyone has given up on, but contrarian is only valuable if you know why the crowd is wrong. Stating the consensus view, the evidence it rests on and the specific change that would make it wrong gives a contrarian thesis discipline rather than bravado.

                ## Milestones
                1. The consensus view on the sector written in its strongest form.
                2. The evidence the consensus rests on listed and tested.
                3. The specific change that would prove the consensus wrong, with a way to see it coming.
                4. A quarterly check on whether that change is appearing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A contrarian thesis states the consensus, tests its evidence, names a measurable trigger, and has a quarterly trigger check on record."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the consensus view of the sector as strongly as you can"
                - "List and test the evidence the consensus relies on"
                - "Name the measurable change that would prove the consensus wrong"
                - "Check whether the trigger change is appearing @recurring(quarterly)"
            - name: Cross-sector thematic thesis
              description: |-
                ## Purpose
                Themes such as an ageing population, energy transition, reshoring or the outsourcing of compliance cut across several industries and can point to sectors nobody on the team covers. Building a thematic thesis that traces one driver through every industry it touches finds the niches where the theme bites hardest and the targets are buyable.

                ## Milestones
                1. The theme defined with the data that shows it is real and lasting.
                2. Six to ten industries the theme touches listed with the mechanism for each.
                3. The two or three niches where the effect is strongest and targets are in band chosen.
                4. A short sector thesis started for the top niche.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A thematic thesis traces one driver through at least six industries and selects the two or three niches to pursue, with one sector thesis started."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write the theme and the data showing it will last"
                - "List the industries the theme touches and how it affects each"
                - "Choose the niches where the effect is strongest and targets fit"
                - "Start a one-page sector thesis for the top niche"
            - name: Second-order effects and adjacency map
              description: |-
                ## Purpose
                Obvious beneficiaries of a trend are usually priced accordingly, while suppliers, service providers and enablers one step away are not. Mapping the second-order effects of your thesis, who sells to the winners and who is hurt, often surfaces a better place to invest than the original sector.

                ## Milestones
                1. The first-order winners and losers of the thesis listed.
                2. Their suppliers, service providers and channels mapped one step out.
                3. Each adjacency rated on fit with the fund mandate and evidence strength.
                4. One adjacency chosen for a short follow-up thesis or explicitly dropped.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An adjacency map one step out from the core thesis rates each adjacency, and one is chosen for follow-up or explicitly dropped."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List who wins and who loses if the thesis is right"
                - "Map the suppliers and service providers of the winners"
                - "Rate each adjacency on mandate fit and evidence"
                - "Choose one adjacency to follow up or record why none fit"
            - name: Thesis post-mortem against deal outcomes
              description: |-
                ## Purpose
                Deal outcomes are the real test of a thesis, and almost nobody goes back to check what happened to the deals it produced. Comparing the original hypotheses with what diligence found and how the investment performed shows which kinds of beliefs you get right and which you consistently overrate.

                ## Milestones
                1. Each past thesis linked to the deals it led to, including the ones lost or passed.
                2. Every original hypothesis marked right, wrong or untested, with the evidence.
                3. Patterns across theses summarised in a page.
                4. Changes to your thesis method recorded and applied to the current thesis.

                ## Notes
                Keep the post-mortem about your own reasoning. Use internal deal results only as your firm's policy allows.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A post-mortem marks every original hypothesis of at least one past thesis right, wrong or untested, with method changes recorded."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Link each past thesis to the deals it produced, won or lost"
                - "Mark every original hypothesis right, wrong or untested"
                - "Run a post-mortem on any thesis with a closed deal or exit @recurring(yearly)"
                - "Write the method changes and apply them to the current thesis"
            - name: Thesis library for the firm
              description: |-
                ## Purpose
                Theses written by people who later leave tend to vanish with their laptops, and the next associate starts the same sector from zero. A shared library holding every thesis version, map and post-mortem, with a named owner for each, turns individual research into an asset the firm keeps.

                ## Milestones
                1. A shared library structure with one folder per thesis and a status index.
                2. Every current and past thesis filed with its versions and owner.
                3. Access rules agreed so confidential material stays restricted.
                4. A one-paragraph guide for new joiners on how to use the library.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A shared thesis library indexes every current and past thesis with owner and status, with access rules and a joiner guide in place."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set up a shared folder per thesis with a status index"
                - "Collect and file every current and past thesis with its owner"
                - "Agree access rules for confidential material with compliance"
                - "Write a one-paragraph guide for new joiners"
---

# Investment Thesis Development

Investment thesis development is the work you do before the teasers arrive: picking a sector or theme, mapping it, writing down what has to be true for a deal there to make money, and testing that with experts, data and people who run the businesses. The projects start with foundations (choosing the sector, the one-page format, the universe and the kill criteria), move through the operating rhythm and the analytical skills, then cover decisions, dated events, variants for associates, sponsors, searchers and emerging managers, and the specialist work of contrarian, cross-sector and post-mortem theses.

What repeats is a weekly reading and signal log, a news watch on Fridays, monthly evidence reviews, expert calls and target list upkeep, quarterly market map and partner reviews, and a full thesis refresh each year. The Meeting notes template suits expert calls, Purchase decision suits choosing a research provider, Trip suits a conference week and Risk register suits the regulatory map. Everything here is organisational: it records your own reasoning and never stands in for legal, tax or regulatory advice. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
