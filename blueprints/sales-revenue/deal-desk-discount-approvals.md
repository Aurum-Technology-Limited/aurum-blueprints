---
id: sales-revenue.deal-desk-discount-approvals
name: Deal Desk & Discount Approvals
description: "An approval matrix and signed pricing authority, one intake route for exceptions, a weekly review board, precedent and exception logs, and the monthly leakage numbers that keep discounting fast and fair."
category: business
version: 1.0.0
tags: [sales-revenue, deal-desk-discount-approvals, enterprise, manager, team, discounting, pricing-governance, approvals]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - operational-checklist
    - compliance-control
    - onboarding-plan
    - risk-register
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Deal Desk & Discount Approvals
          description: "Running a fair, fast process for non-standard pricing, discounts and terms so deals keep moving while margins and precedents stay under control."
          projects:
            - name: Audit of the last two quarters of discounted deals
              description: |-
                ## Purpose
                Before writing any rules, find out what has actually been happening. Pulling every closed deal from the last two quarters with list price, signed price, terms and approver usually shows that a handful of sellers and approvers account for most of the discounting, and that many exceptions were never approved by anyone.

                ## Milestones
                1. A spreadsheet of every closed deal from the last two quarters with list price, net price and discount percentage.
                2. Each deal tagged with any non-standard term: payment terms, free months, liability caps, price locks or custom clauses.
                3. The approver recorded for each discount, or the deal marked unapproved where no record exists.
                4. Discount depth summarised by seller, segment, deal size and week of the quarter.
                5. Five findings written up for the people who will own the new process.

                ## Notes
                Expect gaps. Approvals buried in chat threads and personal inboxes count as unapproved for this audit, because nobody could find them during a dispute either.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-quarter discount audit covering every closed deal, with approvers identified and five written findings shared with sales and finance leadership."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export closed-won deals from the last two quarters with list and net price"
                - "Add a column for every non-standard term found in the signed paperwork"
                - "Match each discount to an approval record or mark it unapproved"
                - "Chart discount depth by seller, segment and week of the quarter"
                - "Ask the agent to draft the five findings from the summary table"
            - name: Deal desk charter and scope
              description: |-
                ## Purpose
                A deal desk without a written scope becomes either a rubber stamp or the place every awkward question goes to wait. One page that says which requests the desk handles, which it hands to legal or finance, who it serves and how fast it answers lets sellers know what to expect and lets the desk decline work that is not its job.

                ## Milestones
                1. A one-page charter naming the desk's purpose, owner and the requests it handles.
                2. A list of requests that go elsewhere, such as contract law questions to legal and credit checks to finance.
                3. Service hours and response targets stated in plain words.
                4. The charter signed off by the heads of sales and finance.
                5. The charter linked from the sales team's main resources page.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page deal desk charter, approved by the heads of sales and finance, published where every seller can find it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every type of request the desk received last quarter"
                - "Sort the list into handled here, handed to legal and handed to finance"
                - "Write the one-page charter with owner, scope and service hours"
                - "Get written sign-off from the heads of sales and finance"
                - "Publish the charter on the sales resources page"
            - name: Decision rights across sales, finance and legal
              description: |-
                ## Purpose
                Most approval delays come from nobody being sure who decides, so requests get copied to six people and answered by none. Agreeing who recommends, who approves, who must be consulted and who is only informed, for each kind of exception, ends the reply-all chains and gives every request one accountable owner.

                ## Milestones
                1. A grid of request types against sales, finance, legal, product and the deal desk.
                2. One approver named for each request type, with a named deputy for absences.
                3. Consulted and informed roles kept separate from approvers.
                4. Disagreements between functions given a written escalation route and a final decider.
                5. The grid agreed in one meeting with every function present.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A decision rights grid with one approver and one deputy per request type, agreed by sales, finance and legal in a recorded meeting."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the request types from the charter down the side of a grid"
                - "Put sales, finance, legal, product and the deal desk across the top"
                - "Name one approver and one deputy for each request type"
                - "Write down who breaks the tie when two functions disagree"
                - "Hold a single meeting to agree the grid with every function"
            - name: Discount approval matrix by deal size and depth
              description: |-
                ## Purpose
                Sellers need to know, before they talk price, how much they can give and who has to agree to more. An approval matrix that sets discount bands against deal size, with an approver in each cell, turns a negotiation into a known path and stops the habit of going straight to the most senior person who might say yes.

                ## Milestones
                1. Discount bands chosen, for example up to 10, 10 to 20, 20 to 30 and over 30 percent.
                2. Deal size tiers set from the audit, so most deals fall into the lower rows.
                3. An approver named for every cell, rising with size and depth.
                4. Separate rows for non-price terms such as payment terms and free months.
                5. Finance has confirmed the matrix protects the margin it needs.

                ## Notes
                Keep the matrix to one screen. If it needs a scroll bar, sellers will ask the desk instead of reading it, and the desk becomes the bottleneck it was meant to remove.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-screen approval matrix covering discount depth, deal size and key non-price terms, with an approver in every cell and finance sign-off recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick four discount bands that match how deals are really priced"
                - "Set deal size tiers using the distribution from the audit"
                - "Name an approver for each cell in the grid"
                - "Add rows for payment terms, free months and price locks"
                - "Review the draft matrix with finance before publishing it"
            - name: Delegation of pricing authority signed off by finance
              description: |-
                ## Purpose
                Approval rights mean little unless the people at the top have formally handed them down. A delegation of authority document, approved by the chief executive or finance director, states how much pricing authority each role holds, which makes approvals defensible in an audit and stops anyone claiming they thought they could agree it.

                ## Milestones
                1. Pricing and terms authority written per role, matching the approval matrix.
                2. Decisions that need board or chief executive approval listed separately.
                3. The document approved and dated by the finance director or chief executive.
                4. Every named approver has read and acknowledged their limit.
                5. A rule written for what happens to authority when someone changes role or leaves.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated delegation of pricing authority, approved by the finance director or chief executive and acknowledged by every named approver."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy the approval matrix limits into a delegation of authority draft"
                - "Mark the decisions that stay with the chief executive or board"
                - "Get the draft approved and dated by the finance lead"
                - "Collect a written acknowledgement from each named approver"
                - "Confirm every named approver is still in role and within limit @recurring(yearly)"
            - name: Standard terms and pre-approved fallbacks
              description: |-
                ## Purpose
                Half the requests a deal desk sees are for things the business would always agree, such as net 45 instead of net 30 or a two-week delay to the start date. Writing down the standard position on each common term, plus one fallback a seller can give without asking, takes those requests out of the queue so the desk can spend its time on the genuinely unusual.

                ## Milestones
                1. The twenty terms buyers most often ask to change listed from the audit.
                2. A standard position and one pre-approved fallback written for each.
                3. Terms that always need review, with no fallback, marked clearly.
                4. Legal and finance have confirmed every fallback.
                5. The list published next to the approval matrix.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A published list of at least fifteen common terms, each with a standard position and either a pre-approved fallback or an always-review flag."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the twenty most requested term changes from the audit"
                - "Write the standard position for each term"
                - "Propose one fallback sellers can give without approval"
                - "Get legal and finance to confirm each fallback in writing"
            - name: Deal desk request intake form
              description: |-
                ## Purpose
                Requests arriving by chat, email and corridor conversation cannot be tracked, timed or audited. One intake form, with the fields an approver actually needs, gives every request a timestamp and an owner, and the required fields stop the back-and-forth that eats a day before anyone looks at the substance.

                ## Milestones
                1. A form capturing account, deal size, term, list and proposed price, the exact exception and the business reason.
                2. Competitor, close date and what the buyer gives in return included as required fields.
                3. Each submission creating a record with a timestamp and status.
                4. Requests sent any other way politely redirected to the form.
                5. The form tested by three sellers and revised from their comments.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every deal desk request for a month arrives through one form, each with a timestamp and the required fields complete."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the questions approvers asked sellers most often last quarter"
                - "Build the form with those questions as required fields"
                - "Ask three sellers to submit a real request and note where they got stuck"
                - "Reply to off-form requests with the form link and a one-line reason"
            - name: Approval turnaround targets by request type
              description: |-
                ## Purpose
                Sellers forgive a no far more readily than a week of silence. Setting a response target for each request type, such as four working hours for a standard discount and two working days for unusual contract terms, gives the desk something to be measured against and gives sellers a date they can promise the buyer.

                ## Milestones
                1. Request types grouped into three or four speed tiers.
                2. A response target set for each tier in working hours.
                3. A clear definition of when the clock starts, pauses and stops, including time spent waiting on the seller.
                4. Targets published in the charter and on the intake form.
                5. A first month of turnaround times measured against the targets.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Published turnaround targets for every request type, with a month of measured turnaround times compared against them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Group request types into three or four speed tiers"
                - "Set a response target in working hours for each tier"
                - "Define when the clock pauses while waiting on the seller"
                - "Add the targets to the charter and the intake form"
            - name: Approval routing in the CRM
              description: |-
                ## Purpose
                When approvals live in the CRM, the record of who agreed what sits on the deal itself, and nobody has to search an inbox during a dispute or an audit. Building routing rules from the approval matrix, with approve and reject actions for each approver, makes the right path the easy one and leaves an audit trail by default.

                ## Milestones
                1. Routing rules in the CRM that mirror every cell of the approval matrix.
                2. Approvers notified with the request summary and able to approve or reject in one step.
                3. Deals blocked from closed-won until required approvals are recorded.
                4. Delegates set up for approver holidays and absence.
                5. Ten test requests routed correctly before go-live.

                ## Notes
                Build the matrix first and the automation second. Automating a muddled matrix only makes wrong approvals faster.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "CRM approval routing live for every matrix cell, with ten test requests routed correctly and closed-won blocked without required approvals."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map each matrix cell to a routing rule with your CRM administrator"
                - "Set up delegates for approver holidays and absence"
                - "Run ten test requests covering every tier of the matrix"
                - "Block closed-won on deals with missing approvals"
            - name: Morning request queue triage
              description: |-
                ## Purpose
                A queue worked in the order things happen to be noticed rewards the loudest seller rather than the deal closing soonest. A short triage pass each working morning, sorting by close date and size and chasing missing information, keeps the oldest requests from going stale and shows the desk where the day's effort should go.

                ## Milestones
                1. A queue view sorted by close date, deal size and age.
                2. Every new request checked for complete information within the first working hour.
                3. Requests missing information sent back with the specific question.
                4. No request older than its turnaround target without a written reason.
                5. A month of mornings worked through the triage routine.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a month, every request older than its turnaround target has a written reason, and incomplete requests are returned within one working hour."
                cadence: rolling
              tasks:
                - "Build a queue view sorted by close date, deal size and age"
                - "Triage the request queue and return incomplete requests @recurring(weekly:mon,tue,wed,thu,fri)"
                - "Write a reason on any request past its turnaround target"
                - "Agree with sales leadership which deals jump the queue at quarter-end"
            - name: Weekly deal review board for large or unusual deals
              description: |-
                ## Purpose
                Some requests are too big or too strange for one approver: a five-year deal with a price lock, a first sale into a new segment, a custom liability cap. A standing weekly board, with sales, finance and legal around one table and a short pre-read, decides those together and records why, so the reasoning survives when the people move on.

                ## Milestones
                1. Criteria written for which deals go to the board instead of a single approver.
                2. A standing weekly slot with named attendees from sales, finance and legal.
                3. A one-page pre-read sent a day before each meeting.
                4. Every decision and its reasoning recorded in meeting notes.
                5. Eight consecutive weekly boards held with decisions logged.

                ## Notes
                Start from the **Meeting notes** template. Cancel the board when there is nothing to decide rather than filling the slot.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Eight weekly deal review boards held, each with a pre-read sent in advance and every decision and its reasoning recorded."
                cadence: rolling
              tasks:
                - "Write the criteria that send a deal to the board"
                - "Book a standing weekly slot with sales, finance and legal"
                - "Send the board pre-read for the week's deals @recurring(weekly:wed)"
                - "Record each decision and its reasoning in the meeting notes"
            - name: Exception and approval log
              description: |-
                ## Purpose
                Every approved exception is a small promise the business will have to keep, often for years. A single log of what was approved, for which account, by whom, on what conditions and until when, is what finance uses to bill correctly, what customer success reads before a renewal, and what the desk checks before agreeing the same thing again.

                ## Milestones
                1. One log with account, exception, approver, conditions, expiry and a link to the deal.
                2. Every approval from the CRM flowing into the log, or copied in weekly.
                3. Finance and customer success given read access.
                4. The log complete for every exception approved in the last quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An exception log holding every approval from the last quarter, each with approver, conditions and expiry, readable by finance and customer success."
                cadence: rolling
              tasks:
                - "Set up the log with columns for account, exception, approver, conditions and expiry"
                - "Give finance and customer success read access to the log"
                - "Check that all of the week's approvals are in the log @recurring(weekly:fri)"
                - "Back-fill the log with last quarter's approved exceptions"
            - name: Precedent register for non-standard terms
              description: |-
                ## Purpose
                The first time a large customer gets a 90-day payment term, every seller with a large customer will ask for the same. A precedent register records each first-time concession with why it was granted and what made that deal special, so the desk can answer the next request consistently instead of reopening the argument or being quoted its own past decision.

                ## Milestones
                1. Criteria for what counts as a precedent: a first, or a term outside the standard list.
                2. Each precedent recorded with the account, the term, the reason and the conditions that justified it.
                3. The register searched before any similar request is decided.
                4. Precedents that should never be repeated marked as closed.

                ## Notes
                Write the reason as if explaining it to a seller who was refused the same term. If you cannot, the precedent was probably a mistake.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A precedent register holding every first-time concession of the last year, each with its justification, consulted before similar requests are decided."
                cadence: rolling
              tasks:
                - "Define what counts as a precedent for your business"
                - "Record last year's first-time concessions and the reason for each"
                - "Search the register before deciding any similar request"
                - "Review new precedents and mark any that must not be repeated @recurring(monthly:12)"
            - name: Monthly discount leakage report by approver
              description: |-
                ## Purpose
                Discounting rarely fails in one dramatic deal; it leaks a few points at a time across hundreds. A monthly report of discount given, broken down by segment, product, approver and matrix band, shows where money is going and whether the matrix is holding, and gives sales leadership a number to own.

                ## Milestones
                1. Average discount and total discount value calculated for the month.
                2. The figures broken down by segment, product, approver and matrix band.
                3. Deals approved above their band or with no approval flagged.
                4. A one-paragraph commentary sent to sales and finance leadership.
                5. Six consecutive monthly reports with the trend visible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly leakage reports, each sent to sales and finance leadership with a written commentary and out-of-policy deals flagged."
                cadence: rolling
              tasks:
                - "Agree with finance how list price and net price are defined"
                - "Build the leakage report from the month's closed deals @recurring(monthly:5)"
                - "Flag deals approved above their matrix band or with no approval"
                - "Ask the agent to draft the commentary from the month's figures"
            - name: Deal desk performance metrics
              description: |-
                ## Purpose
                Without numbers of its own, a desk gets blamed for every slipped deal. Tracking volume, turnaround against target, approval and rejection rates and the share of requests sent back for missing information shows whether the desk is a help or a hurdle, and points to the one fix that would help most.

                ## Milestones
                1. Five measures defined: volume, turnaround against target, approval rate, rejection rate and returned-for-information rate.
                2. Each measure recorded monthly in a metrics log.
                3. The slowest request type identified each month.
                4. One process change tried each quarter based on the numbers.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log with five desk measures recorded for six consecutive months and one numbers-led process change made each quarter."
                cadence: rolling
              tasks:
                - "Create a metrics log for the five desk measures"
                - "Record the month's desk measures in the log @recurring(monthly:9)"
                - "Name the request type with the slowest turnaround"
                - "Pick one process change to test next quarter"
            - name: Quarter-end request surge plan
              description: |-
                ## Purpose
                In many sales teams a third or more of a quarter's deal desk requests land in its last two weeks, exactly when approvers are travelling or buried. A surge plan with extended hours, backup approvers, a cut-off for complex requests and a daily status note keeps approvals moving without lowering the bar.

                ## Milestones
                1. Last quarter's request volume by week charted to size the surge.
                2. Backup approvers confirmed for the final two weeks.
                3. A cut-off date published for requests that need legal or the review board.
                4. Extended desk hours and a daily status note planned.
                5. A short review after each quarter-end recording what to change next time.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter-end runs from a checklist with backup approvers confirmed, a published cut-off date and a written review afterwards."
                cadence: cyclic
              tasks:
                - "Chart last quarter's deal desk requests by week"
                - "Run the quarter-end surge checklist three weeks before quarter close @recurring(quarterly)"
                - "Publish the cut-off date for requests needing legal or the board"
                - "Write a short review of what slowed approvals this quarter-end"
            - name: Quarterly approval matrix review
              description: |-
                ## Purpose
                Prices change, segments grow and new products launch, and a matrix set a year ago drifts away from how the business sells. Reviewing it each quarter against the leakage report and the desk metrics shows which bands send too much to senior approvers and which let too much through.

                ## Milestones
                1. Last quarter's approvals counted by matrix cell.
                2. Cells with almost no requests, or far too many, identified.
                3. Proposed changes agreed with finance and sales leadership.
                4. The updated matrix published with a dated change note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four quarterly matrix reviews in a year, each producing either a dated change note or a recorded decision to keep the matrix as it is."
                cadence: cyclic
              tasks:
                - "Count last quarter's approvals by matrix cell"
                - "Review the approval matrix with finance and sales leadership @recurring(quarterly)"
                - "Publish any change to the sales team with a dated note"
            - name: Quarterly testing of approval controls
              description: |-
                ## Purpose
                Auditors and investors increasingly ask whether discounts were approved by someone with authority, and a general belief that they were is not evidence. Testing a sample of closed deals each quarter against the matrix and the delegation document finds gaps while they are still small, and builds the evidence trail before anyone asks for it.

                ## Milestones
                1. A written control statement: every discount above the self-serve band has a recorded approval from someone with authority.
                2. A sample of 25 closed deals tested each quarter.
                3. Each failure recorded with its cause and a fix.
                4. Results shared with finance and the head of sales.

                ## Notes
                Start from the **Compliance control** template. Agree the sample size and method with finance or internal audit so the testing counts.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly tests of at least 25 closed deals each, with the cause and fix for every failure recorded and shared with finance."
                cadence: cyclic
              tasks:
                - "Write the control statement and agree it with finance"
                - "Test a sample of 25 closed deals against the matrix @recurring(quarterly)"
                - "Record the cause and fix for each failed approval"
            - name: Booking check against approved terms
              description: |-
                ## Purpose
                Approving a deal and booking it are two different moments, and what the buyer signs is not always what was approved. Comparing each signed order form with its approval before the deal is marked won catches the extra free month, the missing uplift clause or the wrong payment term before it reaches an invoice.

                ## Milestones
                1. A checklist of the fields to compare: price, term, payment terms, start date and any special clause.
                2. Every signed order form checked before closed-won.
                3. Mismatches sent back to the seller and approver within one working day.
                4. A full month with every booking checked and mismatches recorded.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a full month, every signed order form is compared with its approval before closed-won, and every mismatch is recorded and resolved."
                cadence: rolling
              tasks:
                - "Write the five-field comparison checklist"
                - "Compare signed order forms with their approvals for deals awaiting closed-won @recurring(weekly:mon)"
                - "Send any mismatch to the seller and approver the same day"
            - name: Deal desk office hours for sellers
              description: |-
                ## Purpose
                Plenty of bad requests could have been good ones if the seller had asked earlier. A weekly half-hour drop-in where sellers bring a deal before they price it lets the desk suggest a structure that will pass, cuts rejections and builds the trust that makes sellers come early rather than at the last minute.

                ## Milestones
                1. A weekly thirty-minute slot open to every seller.
                2. Each session's deals and advice noted in a line or two.
                3. Rejection rate for requests discussed in office hours compared with the rest.
                4. Twelve sessions held.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Twelve weekly office hours held, with a recorded comparison of rejection rates for requests discussed there against those that were not."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute office hours slot"
                - "Announce office hours in the sales channel with an example question"
                - "Hold deal desk office hours for sellers @recurring(weekly:tue)"
                - "Note each deal discussed and the advice given"
            - name: Reading a deal's economics in five minutes
              description: |-
                ## Purpose
                Approvers who look only at the discount percentage miss what matters more: contract length, payment timing, ramps, attached services and the cost to serve. Learning to read annual and total contract value, gross margin and payback from a deal sheet in a few minutes lets an approver say yes faster to a deep discount on a good deal and no to a shallow one on a bad deal.

                ## Milestones
                1. Annual contract value, total contract value and first-year cash explained in your own words.
                2. Gross margin and payback period worked out for three real deals.
                3. A one-page deal economics sheet the desk uses on every large request.
                4. The sheet checked by finance.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page deal economics sheet, checked by finance, completed for three real deals including margin and payback."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask finance for the margin and cost-to-serve assumptions by product"
                - "Work out annual value, total value and first-year cash for three recent deals"
                - "Calculate the payback period for the same three deals"
                - "Turn the method into a one-page deal economics sheet"
            - name: Revenue recognition effects of non-standard terms
              description: |-
                ## Purpose
                Some terms that look harmless to a seller change how and when revenue can be recognised: free months, acceptance clauses, extended payment terms, termination rights and bundled services. Learning which terms your finance team treats as sensitive, and flagging them at intake, prevents the unpleasant discovery after signature that a deal booked this quarter counts next year.

                ## Milestones
                1. A list from finance of the terms that affect revenue recognition at your company.
                2. A short plain-language note on why each one matters.
                3. Those terms flagged by a required question on the intake form.
                4. Finance reviewing flagged requests before approval.

                ## Notes
                The aim is knowing when to involve finance, not making the accounting judgement yourself. The accounting conclusion belongs to your finance team and auditors.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A finance-approved list of revenue-sensitive terms, each with a plain-language note, flagged on the intake form for finance review."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book an hour with finance to walk through revenue-sensitive terms"
                - "Write a plain-language note on each term they name"
                - "Add a required question about those terms to the intake form"
                - "Route flagged requests to finance before approval"
            - name: Price waterfall from list to pocket price
              description: |-
                ## Purpose
                The discount on the quote is only one of the ways price leaks: free months, extra seats, waived services, rebates, partner margin and payment terms all take money out too. Learning to build a waterfall from list to pocket price for a single deal shows approvers the real concession and stops a 15 percent discount hiding a 35 percent giveaway.

                ## Milestones
                1. The steps from list price to pocket price listed for your business.
                2. A waterfall built for three closed deals.
                3. The gap between quoted discount and total concession noted for each.
                4. The waterfall added to the review board pre-read for large deals.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Price waterfalls built for three closed deals showing the gap between quoted discount and total concession, with the method added to the board pre-read."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every way price leaves a deal between list and cash collected"
                - "Build a price waterfall for three closed deals"
                - "Compare quoted discount with total concession for each deal"
                - "Add the waterfall to the review board pre-read"
            - name: Saying no with an approvable alternative
              description: |-
                ## Purpose
                Flat rejections send the seller back to the buyer with nothing, and often straight to a senior leader to overrule the desk. Practising the counter-offer, such as a smaller discount for a longer term, a ramp instead of free months or a price lock in exchange for prepayment, turns most rejections into approvals of a better deal.

                ## Milestones
                1. Five common request patterns listed with an alternative structure for each.
                2. Three real rejections from last quarter rewritten as counter-offers.
                3. A rejection message format that always says what would be approved.
                4. Countered requests tracked for a month, with how many closed recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A rejection format that always offers an approvable alternative, used for a month with the close rate of those deals recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the five request patterns the desk rejects most often"
                - "Write an approvable alternative structure for each pattern"
                - "Rewrite three past rejections as counter-offers"
                - "Track for a month how many countered deals went on to close"
            - name: Writing a deal justification that gets approved
              description: |-
                ## Purpose
                Requests that say only that the customer wants a discount wait days, while requests that state what the buyer gives in return, what the competitor quoted and what happens if the deal slips get answers in hours. A five-line justification with evidence is the single skill that most speeds up approvals for a seller.

                ## Milestones
                1. A five-line format: deal context, the ask, what the buyer gives, competitive evidence and the cost of losing.
                2. Three past requests rewritten in the format.
                3. The format built into the intake form's reason field.
                4. Turnaround for well-written requests compared with the rest.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A five-line justification format built into the intake form, with turnaround for requests using it compared against those that do not."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read ten approved and ten rejected requests and note what differed"
                - "Write the five-line justification format with a worked example"
                - "Rewrite three of your own past requests in the format"
                - "Add the format as guidance text on the intake form"
            - name: Spotting terms that create hidden obligations
              description: |-
                ## Purpose
                Most-favoured-customer clauses, uncapped service credits, termination for convenience, price locks with no end date and promises about future features can cost far more over a contract's life than the discount the seller was worried about. Learning to recognise these terms in a redline or an email, and to route them to legal and finance, protects the business from commitments nobody priced.

                ## Milestones
                1. A list of ten high-risk terms with a one-line note on why each is costly.
                2. Each term mapped to who must review it: legal, finance or product.
                3. Five recent contracts read for any of the ten terms.
                4. The list taught to everyone who approves deals.

                ## Notes
                The list helps you spot and route; it does not replace legal review. Any term on it goes to your legal team before it is agreed.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ten-term hidden obligations list, reviewed by legal, used to check five recent contracts and taught to every approver."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask legal which terms they most wish sellers had flagged earlier"
                - "Write the ten-term list with a one-line reason for each"
                - "Check five recent contracts for any term on the list"
                - "Walk every approver through the list in a short session"
            - name: Teaching sellers the approval matrix
              description: |-
                ## Purpose
                Nobody follows a matrix they have never been walked through; they guess. A forty-minute session with real examples, a one-page cheat sheet and a short quiz shows each seller what they can give alone, what needs a manager and what goes to the board, and cuts the requests that should never have been raised.

                ## Milestones
                1. A forty-minute session built around six real deal examples.
                2. A one-page cheat sheet of the matrix and the standard fallbacks.
                3. Every seller and sales manager through the session or its recording.
                4. A five-question quiz passed by every seller.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every seller and sales manager has attended the matrix session or watched its recording and passed a five-question quiz."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose six real deals that show each part of the matrix"
                - "Write a one-page cheat sheet of the matrix and fallbacks"
                - "Run the session and record it for absent sellers"
                - "Send the five-question quiz and chase anyone who has not passed"
            - name: Self-serve discount band for sellers
              description: |-
                ## Purpose
                If every 5 percent discount needs a sign-off, the desk drowns in requests it always approves and the large ones wait. Letting sellers give discounts within a small band on their own authority, with its use monitored, frees the desk and managers for the deals where judgement is needed.

                ## Milestones
                1. The share of last quarter's requests approved unchanged worked out for each band.
                2. A self-serve band proposed where approvals were near automatic.
                3. The band agreed with finance and written into the matrix.
                4. Self-serve use monitored for drift towards the top of the band.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A self-serve discount band agreed with finance and in the matrix, with monthly checks of how often sellers use its top end."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count requests approved unchanged in each discount band last quarter"
                - "Propose a self-serve band based on the near-automatic approvals"
                - "Agree the band with finance and update the matrix"
                - "Check how often sellers discount at the top of the band @recurring(monthly:27)"
            - name: Fast-track scoring for low-risk requests
              description: |-
                ## Purpose
                Not every request over the self-serve band needs someone to think hard about it. A simple score built from deal size, discount depth, term length, customer history and term risk can send low-scoring requests to a one-click approval and save attention for the high scores.

                ## Milestones
                1. Five scoring factors chosen with a points range for each.
                2. The score tested on last quarter's requests against what was actually decided.
                3. A fast-track threshold set where the score and past decisions agree.
                4. Fast-tracked requests sampled monthly to check quality.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A request score tested on a quarter of past decisions, with a fast-track threshold live and a monthly sample of fast-tracked approvals checked."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick five scoring factors and give each a points range"
                - "Score last quarter's requests and compare with the real decisions"
                - "Set the fast-track threshold where the two agree"
                - "Sample ten fast-tracked approvals to check they were sound"
            - name: Conditions attached to approved discounts
              description: |-
                ## Purpose
                Giving a discount for nothing teaches the buyer to ask again at renewal. Agreeing a short menu of conditions that larger discounts must carry, such as a longer commitment, annual prepayment, a reference or case study, or a sign-by date, means every deep discount buys the business something.

                ## Milestones
                1. A menu of five or six conditions the desk can attach to an approval.
                2. A discount level above which at least one condition is required.
                3. Conditions written into the approval record and the order form.
                4. Conditions checked at booking and again at renewal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written condition menu tied to discount bands, with every approval above the threshold carrying at least one recorded condition."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the conditions finance would value in return for a discount"
                - "Set the discount level above which a condition is required"
                - "Add a conditions field to the approval record"
                - "Check that a month of large approvals each carried a condition"
            - name: Expiry dates on every approval
              description: |-
                ## Purpose
                An approval given in the first month of a quarter for a deal that closes two quarters later was given on facts that have changed. Putting an expiry on every approval, usually thirty to sixty days, stops old approvals being reused for different deals and forces a quick recheck when a deal drags on.

                ## Milestones
                1. A default expiry period agreed for each approval type.
                2. Expiry dates shown on the approval record and the quote.
                3. Expired approvals closed out and the seller told.
                4. Re-approval for unchanged deals made a one-step process.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every new approval carries an expiry date, and expired approvals are closed out monthly with the seller notified."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree a default expiry for each approval type with finance"
                - "Show expiry dates on the approval record and the quote"
                - "Close out expired approvals and tell each seller @recurring(monthly:20)"
                - "Set up one-step re-approval for deals that have not changed"
            - name: Payment terms exception policy
              description: |-
                ## Purpose
                Longer payment terms are a discount in disguise, because the business is financing the customer's cash flow. Writing a policy with finance on standard terms, what longer terms cost, monthly or quarterly billing and when a credit check is needed lets the desk approve sensible requests quickly and price the rest.

                ## Milestones
                1. Standard invoicing and payment terms written down.
                2. The cost of each extra thirty days worked out with finance.
                3. Rules for monthly or quarterly billing instead of annual upfront.
                4. A trigger for a credit check on large or long-term exceptions.
                5. The policy added to the standard terms list.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A finance-approved payment terms policy covering standard terms, the cost of extensions, billing frequency and credit check triggers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the standard invoicing and payment terms"
                - "Ask finance to put a cost on each extra thirty days of payment terms"
                - "Set rules for monthly and quarterly billing requests"
                - "Agree with finance when a credit check is required"
            - name: Free months, extended trials and ramp rules
              description: |-
                ## Purpose
                Free months and ramped pricing are popular because they feel cheaper than a discount, yet they often cost more and can complicate revenue reporting. Clear rules on how many free months are ever allowed, when a ramp beats a discount and how both appear on the order form remove a whole class of improvised requests.

                ## Milestones
                1. A maximum number of free or reduced months set by deal size.
                2. A rule for when a ramp is offered instead of a flat discount.
                3. Standard order form wording for both.
                4. Finance confirmation of how each is reported.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written rules for free months and ramps, with standard order form wording and finance confirmation of how each is reported."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count the free months and ramps granted last year and their value"
                - "Set the maximum free months by deal size"
                - "Write a rule for when to offer a ramp instead of a discount"
                - "Agree standard order form wording with legal and finance"
            - name: Shortening the approval chain
              description: |-
                ## Purpose
                Approval chains grow one cautious signature at a time until a routine discount needs four people. Mapping how many approvers each request type touches, and how long each adds, usually shows two signatures doing all the real deciding, and removing the rest can halve turnaround.

                ## Milestones
                1. Each request type mapped with every approver it passes through.
                2. Time added by each approver measured from CRM timestamps.
                3. Approvers who never change a decision identified.
                4. A shorter chain of at most two approvers for standard requests agreed.
                5. Turnaround compared for a month before and after.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A redesigned approval chain with at most two approvers for standard requests, and turnaround measured for a month before and after."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Map every approver each request type passes through"
                - "Measure the time each approver adds from CRM timestamps"
                - "List approvers who have not changed a decision in six months"
                - "Agree the shorter chain with sales and finance leadership"
            - name: Charity and education discount policy
              description: |-
                ## Purpose
                Charity and education discount requests arrive one by one and get decided by whoever is asked, so similar organisations pay very different prices. One published policy, with eligibility, the proof required and a fixed discount, makes these deals self-serve and fair.

                ## Milestones
                1. Eligible organisation types and the evidence required defined.
                2. One standard discount set for each type.
                3. The policy published for sellers and, if wanted, on the pricing page.
                4. Past exceptions reviewed for consistency at their next renewal.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published charity and education discount policy with eligibility, required evidence and one standard rate per organisation type."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List last year's charity and education deals and the discounts given"
                - "Define eligible organisation types and the evidence needed"
                - "Set one standard discount for each organisation type"
                - "Publish the policy alongside the standard terms list"
            - name: Renewal discount reset policy
              description: |-
                ## Purpose
                First-year discounts given to win a deal quietly become the permanent price unless someone decides otherwise. A policy on whether discounts carry into renewals, step down or need re-approval, applied well before each renewal, protects revenue and spares the renewal team from discovering the problem the week it is due.

                ## Milestones
                1. A rule for each discount type: carries over, steps down or needs re-approval.
                2. Every renewal in the next six months checked for legacy discounts.
                3. Customer success and account managers briefed on the rule.
                4. New approvals stating whether the discount applies beyond year one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A renewal discount policy in force, with every renewal due in the next six months checked for legacy discounts and new approvals stating their renewal treatment."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the renewal rule for each discount type"
                - "List renewals due within 120 days that carry legacy discounts @recurring(monthly:15)"
                - "Brief customer success and account managers on the rule"
                - "Add a renewal treatment field to the approval record"
            - name: Go-live of the new approval process
              description: |-
                ## Purpose
                Process changes fail when the old route stays open. Picking a go-live date, closing the chat channels and email aliases that used to take requests, moving every in-flight request into the new form and having the desk visibly available that week is what makes sellers switch.

                ## Milestones
                1. A go-live date announced at least two weeks ahead.
                2. Every in-flight request moved into the new intake form.
                3. Old request routes closed with an automatic pointer to the form.
                4. Desk staff available all day for the first week.
                5. A thirty-day check on how many requests still arrive by other routes.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On go-live all in-flight requests are in the new form and old routes are closed, and by day thirty fewer than one in twenty requests arrive another way."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose and announce a go-live date two weeks ahead"
                - "Move every in-flight request into the new intake form"
                - "Close old request channels with an automatic pointer to the form"
                - "Count requests arriving outside the form thirty days after go-live"
            - name: Grandfathering open quotes at a list price change
              description: |-
                ## Purpose
                When list prices rise, sellers rush to lock in old prices and buyers ask for the old price long after the change. Deciding in advance which open quotes keep the old price, for how long and who approves exceptions turns a price change from a free-for-all into a dated, fair cutover.

                ## Milestones
                1. Every open quote listed with its value and expected close date.
                2. A cut-off rule for which quotes keep the old price and until when.
                3. An approver named for any request beyond the cut-off.
                4. Sellers briefed a week before the price change.
                5. Old-price deals closed after the cut-off counted and reviewed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written grandfathering rule applied to every open quote at the price change, with every old-price deal after the cut-off approved and recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every open quote with value and expected close date"
                - "Write the rule for which quotes keep the old price and for how long"
                - "Brief sellers on the cut-off a week before the change"
                - "Review every old-price deal closed after the cut-off"
            - name: Fiscal year-end approval war room
              description: |-
                ## Purpose
                Year-end brings the biggest deals, the deepest discount requests and the most pressure to agree things that would never pass in the second month of the year. A planned war room, with decision makers on call, a firm line on what will not be agreed under deadline and a live tracker, protects next year's revenue while still getting this year's deals signed.

                ## Milestones
                1. Decision makers on call, with cover arranged, for the final two weeks.
                2. A written list of terms that will not be agreed under year-end pressure.
                3. A live tracker of every pending request with value and status.
                4. A daily stand-up with sales and finance in the final week.
                5. A review of every deal approved in the final fortnight, held a month after year-end.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A year-end war room run with named on-call approvers, a written list of terms ruled out and a review of every deal approved in the final fortnight."
                cadence: cyclic
              tasks:
                - "Confirm on-call approvers and their cover for the last two weeks of the year"
                - "Write the list of terms that will not be agreed under deadline"
                - "Set up a live tracker of every pending request"
                - "Review every deal approved in the final fortnight a month after year-end"
            - name: Annual pricing governance review with finance leadership
              description: |-
                ## Purpose
                Once a year, the heads of sales and finance should look together at what the deal desk approved, what it cost and what it bought. A yearly review of total discount, exception value, precedent count and win rates resets the matrix, the delegation document and the desk's priorities for the year ahead.

                ## Milestones
                1. A pack with the year's discount value, exceptions, precedents and turnaround.
                2. Win rate and deal size compared across discount bands.
                3. Decisions on matrix, authority and policy changes recorded.
                4. The desk's three priorities for next year agreed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "An annual governance review held with the heads of sales and finance, producing recorded decisions and three agreed priorities for the year."
                cadence: cyclic
              tasks:
                - "Book the annual pricing governance review with the sales and finance heads @recurring(yearly)"
                - "Ask the agent to draft the year's governance pack from the monthly reports"
                - "Record each decision on the matrix, authority and policies"
                - "Agree the desk's three priorities for next year"
            - name: Approval evidence pack for an audit or due diligence
              description: |-
                ## Purpose
                Ahead of a funding round, an acquisition or a financial audit, someone will ask for proof that a sample of discounted deals was properly approved. Preparing the evidence pack, with the delegation document, matrix versions, approval records and the exception log, within the agreed time shows the controls are real.

                ## Milestones
                1. The request scoped: which deals, which period and what counts as evidence.
                2. The matrix and delegation versions in force during the period gathered.
                3. Approval records pulled for every deal in the sample.
                4. Gaps listed honestly with the remediation already done.
                5. The pack delivered by the agreed date.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A complete approval evidence pack for the requested sample, with versions, records and documented gaps, delivered by the agreed date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the sample, the period and the evidence expected"
                - "Gather the matrix and delegation versions in force for the period"
                - "Pull the approval record for every deal in the sample"
                - "Write up any gaps with the fixes already made"
            - name: Running a deal desk of one alongside another job
              description: |-
                ## Purpose
                In a company with thirty or fifty sellers, the deal desk is often one sales operations manager or finance analyst who also does six other things. A slim version of the process, with protected weekly time, the matrix, one form and a strict rule that only real exceptions reach you, keeps approvals fast without the role swallowing the week.

                ## Milestones
                1. Two protected deal desk blocks each week in the calendar.
                2. Only the matrix, intake form and exception log in use, with everything else deferred.
                3. A named backup approver for absences.
                4. Time spent on desk work measured for a month.
                5. A case for a dedicated hire written if the time passes a set threshold.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of desk work measured inside two protected weekly blocks, with a backup approver named and a hire case written if the threshold is passed."
                cadence: phased
              tasks:
                - "Block two deal desk sessions in your calendar each week"
                - "Name a backup approver for when you are away"
                - "Log the hours spent on deal desk work this week @recurring(weekly:thu)"
                - "Write the case for a dedicated hire if desk work passes your threshold"
            - name: Approving discounts as a front-line sales manager
              description: |-
                ## Purpose
                Front-line managers usually hold the first tier of discount authority, and they are also measured on their team hitting the number, which pulls every approval towards yes. A personal routine of three questions before approving and a weekly look at your own approvals keeps your tier credible, so it is not taken away.

                ## Milestones
                1. Three questions written that you ask before every approval.
                2. Your approvals reviewed weekly against the matrix.
                3. Your team's average discount compared with other teams each month.
                4. Every request above your tier escalated with your recommendation attached.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of weekly self-reviews of your approvals, with your team's average discount compared monthly against other teams."
                cadence: rolling
              tasks:
                - "Write the three questions you will ask before approving any discount"
                - "Review your own approvals from the week against the matrix @recurring(weekly:fri)"
                - "Compare your team's average discount with other teams"
                - "Attach a written recommendation to every request you escalate"
            - name: Hiring and onboarding the first deal desk analyst
              description: |-
                ## Purpose
                Once requests regularly fill more than two days a week, a dedicated analyst pays for itself in faster approvals and recovered margin. Writing the role around the charter, hiring for commercial judgement as much as spreadsheet skill, and onboarding through real requests with a mentor gets the analyst deciding confidently within weeks.

                ## Milestones
                1. A role description built from the charter and the desk metrics.
                2. An interview exercise using three anonymised past requests.
                3. An onboarding plan covering the matrix, the logs, the economics sheet and shadowed approvals.
                4. The analyst handling standard requests alone by the end of the first month.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A deal desk analyst hired and handling standard requests alone within a month of starting, following a written onboarding plan."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the role description from the charter and the desk metrics"
                - "Build an interview exercise from three anonymised past requests"
                - "Draft the first month's onboarding plan with shadowed approvals"
                - "Hand the analyst standard requests to decide alone from week three"
            - name: Regional deal desks in a global sales team
              description: |-
                ## Purpose
                Selling across regions brings different currencies, local price lists, tax and invoicing rules, and time zones in which a request sent late in the afternoon waits a full day. Regional desks working from one shared matrix and log, with local thresholds where markets differ, give fast local answers without each region inventing its own pricing.

                ## Milestones
                1. One global matrix with regional adjustments written as exceptions to it.
                2. A follow-the-sun handover so requests move between regions overnight.
                3. A single shared exception log and precedent register.
                4. Approval and discount rates compared by region every month.
                5. A quarterly call between regional desk leads.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Regional desks working from one matrix and log, with monthly regional comparisons and an overnight handover in use."
                cadence: rolling
              tasks:
                - "Write regional thresholds as exceptions to the global matrix"
                - "Set up an overnight handover of open requests between regions"
                - "Compare approval and discount rates by region @recurring(monthly:24)"
                - "Hold a quarterly call between regional desk leads"
            - name: Channel deals with partner margin on top
              description: |-
                ## Purpose
                Deals through resellers and partners stack a partner margin on top of any customer discount, and sellers often forget the first when asking for the second. Approval rules that count the total margin given away, and a check of the partner's agreed discount tier, stop channel deals quietly selling at a loss.

                ## Milestones
                1. Partner discount tiers recorded where the desk can see them.
                2. Approval thresholds for channel deals based on total discount including partner margin.
                3. Channel requests showing partner, tier and customer discount separately.
                4. A quarter of channel approvals reviewed for total margin.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Channel approval thresholds based on total discount, with a quarter of channel approvals reviewed for combined partner and customer discount."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Get the current partner discount tiers from the channel team"
                - "Set channel approval thresholds on the total discount given"
                - "Add partner and tier fields to the intake form"
                - "Review last quarter's channel approvals for total discount"
            - name: Merging approval rules after an acquisition
              description: |-
                ## Purpose
                Two companies coming together bring two price books, two matrices and two sets of habits, and sellers on both sides will use whichever is more generous. Mapping both sets of rules, agreeing one interim matrix and a date for the single one, and honouring existing customer terms gives the combined team clear limits from the first quarter.

                ## Milestones
                1. Both companies' matrices, delegation documents and policies side by side.
                2. An interim matrix for the combined team agreed.
                3. Existing customer terms and precedents from both sides logged.
                4. A date set for one matrix, one intake form and one log.
                5. Both sales teams trained on the combined rules.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One approval matrix, intake form and exception log in use across both sales teams by the agreed date, with both companies' existing terms logged."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Lay both companies' approval rules side by side"
                - "Agree an interim matrix for the combined sales team"
                - "Log the existing customer terms and precedents from both sides"
                - "Set and announce the date for one matrix and one intake form"
            - name: Win rate and deal size by discount band
              description: |-
                ## Purpose
                Many teams believe deeper discounts win more deals, but the data often shows win rates flattening past a modest discount while margins keep falling. Analysing win rate, deal size and cycle length across discount bands, by segment, gives the desk evidence to push back on deep discounts and to approve them where they genuinely change outcomes.

                ## Milestones
                1. Two years of won and lost deals with their final proposed discount.
                2. Win rate, deal size and cycle length by discount band and segment.
                3. The point where more discount stops improving win rate identified for each segment.
                4. Findings presented to sales and finance leadership.

                ## Notes
                Lost deals often lack a recorded final price. Ask sellers to log the last proposed discount on every lost deal from now on, or the analysis will lean on won deals only.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An analysis of two years of deals showing win rate, deal size and cycle length by discount band and segment, presented to leadership and refreshed quarterly."
                cadence: cyclic
              tasks:
                - "Export two years of won and lost deals with their final proposed discount"
                - "Calculate win rate, size and cycle length by discount band"
                - "Find where extra discount stops improving win rate in each segment"
                - "Refresh the discount band analysis with the latest quarter @recurring(quarterly)"
            - name: Review standard for multi-year and ramped contracts
              description: |-
                ## Purpose
                Multi-year deals with ramps, price locks, uplift caps and early termination rights are where most long-term pricing damage is done, because the cost shows up in year three when nobody remembers the approval. A standard for how these deals are modelled and reviewed, including full-term value and the final-year price against list, lets the desk approve them with eyes open.

                ## Milestones
                1. A model showing price, discount and cash for every year of the term.
                2. Uplift caps and price lock lengths that need board review defined.
                3. Final-year price compared with list for every multi-year approval.
                4. Five recent multi-year deals reviewed against the standard.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A multi-year review model in use for every multi-year request, with five recent deals checked against the standard."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build a model showing price and cash for each year of the term"
                - "Set the uplift caps and price lock lengths that need board review"
                - "Check five recent multi-year deals against the standard"
                - "Add the final-year price to every multi-year approval record"
            - name: Risk register for non-standard commitments
              description: |-
                ## Purpose
                Individually approved exceptions add up: dozens of price locks, several most-favoured-customer clauses and a few uncapped credits can together limit what the business can do with pricing. A risk register that totals these commitments, with exposure and expiry, shows leadership the combined effect and when it ends.

                ## Milestones
                1. Every live non-standard commitment grouped by type from the exception log.
                2. Exposure estimated for each group, with expiry dates.
                3. The three largest risks given an owner and a plan.
                4. The register reviewed with finance and legal each quarter.

                ## Notes
                Start from the **Risk register** template. Ask legal to confirm how each clause type should be described before it goes to leadership.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk register totalling every live non-standard commitment by type, with owners for the three largest and a quarterly review recorded."
                cadence: rolling
              tasks:
                - "Group live non-standard commitments from the exception log by type"
                - "Estimate the exposure and expiry of each group"
                - "Give the three largest risks an owner and a plan"
                - "Review the register with finance and legal @recurring(quarterly)"
---

# Deal Desk & Discount Approvals

This area is for the people who decide whether a deal can go out at a non-standard price or on non-standard terms: deal desk analysts, sales operations and finance partners, the managers who hold first-tier authority and the sellers who need a fast answer. It runs from the foundations (an audit of past discounting, a charter, decision rights, the approval matrix and signed authority), through the weekly and monthly machinery of the desk, the skills of reading deal economics and spotting costly terms, policy decisions on payment terms, renewals and conditions, dated events such as go-live and year-end, situations from a desk of one to regional desks, and finally specialist work on win rates and long-term commitments.

What repeats is a queue triage every working morning, the weekly review board, booking check and office hours, a monthly leakage report and desk metrics, quarterly matrix reviews and controls tests, and the annual governance review. The Meeting notes, Metrics log, Operational checklist, Compliance control, Onboarding plan and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
