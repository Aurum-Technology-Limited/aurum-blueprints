---
id: real-estate-development.property-acquisition-due-diligence
name: Property Acquisition Due Diligence
description: "Check a property before you are committed: scope, timetable and advisers, then title, searches, planning, surveys, environmental reports, leases and contracts, with a findings register that drives the price."
category: business
version: 1.0.0
tags: [real-estate-development, property-acquisition-due-diligence, founder, small-business, title, surveys, environmental, leases]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - vendor
    - meeting-notes
    - operational-checklist
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Property Acquisition Due Diligence
          description: "Checking a property before buying: title, surveys, environmental reports, planning history, building condition, leases and service contracts."
          projects:
            - name: Desktop checks before making an offer
              description: |-
                ## Purpose
                An hour with public maps, the land registry and the planning portal often reveals a flood zone, a refused application or a title held by three relatives before you spend anything on advisers. Doing these checks before the offer goes in lets you price known problems now rather than retrade later, which sellers resent.

                ## Milestones
                1. The title register and title plan for the property obtained, or the deed reference noted where titles are unregistered.
                2. Flood, ground and historic land use maps checked for the site and its immediate surroundings.
                3. The planning history for the site and its neighbours read back at least ten years.
                4. A one-page desktop note listing anything that changes the offer price or terms.

                ## Notes
                Desktop checks never replace formal searches or a survey. They tell you which questions to ask and which advisers you will need.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated one-page desktop note covering title, flood, planning history and past land use exists before any offer is submitted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the title register and title plan for the target property"
                - "Check the public flood and ground hazard maps for the site"
                - "Read the planning portal history for the site and adjoining plots"
                - "Write a one-page desktop note with the points that affect your offer"
            - name: Due diligence scope by property type
              description: |-
                ## Purpose
                A vacant warehouse, a let parade of shops and a block of flats each need different checks, and paying for every report on every deal wastes money while missing the one that matters. Writing a scope for the property in front of you says which workstreams are essential, which are optional and who owns each, before the clock starts.

                ## Milestones
                1. The property type, tenure and occupancy recorded in a sentence at the top of the scope.
                2. Each workstream marked essential, optional or not needed: title, searches, planning, building, environmental, leases, contracts, insurance.
                3. An owner named for each essential workstream, whether an adviser or yourself.
                4. The scope agreed with your solicitor and any lender before instructions go out.

                ## Notes
                A lender will often insist on a valuation, a report on title and sometimes a building survey or environmental report. Ask what they need first so you do not pay twice.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written scope marks every diligence workstream essential, optional or not needed, names an owner for each essential one, and is agreed with your solicitor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record the property type, tenure and current occupancy in one sentence"
                - "Mark each diligence workstream essential, optional or not needed"
                - "Ask your lender which reports they require and in what form"
                - "Send the draft scope to your solicitor for comment"
            - name: Diligence timetable and exclusivity period
              description: |-
                ## Purpose
                Most failed purchases fail on time, not on findings: the environmental report lands the day before exclusivity ends, or the search results arrive after the exchange date. A backwards-planned timetable from the target exchange date shows when every report must be ordered and when you lose the right to walk away or renegotiate.

                ## Milestones
                1. The exclusivity end date, target exchange date and target completion date written down.
                2. Every essential report placed on the timetable with its order date and expected return date.
                3. A buffer of at least five working days left between the last report and the exchange date.
                4. The timetable shared with your solicitor, surveyor and lender.

                ## Notes
                If the seller will not grant exclusivity, ask for a cost undertaking or a longer timetable instead. Either is a better protection than none.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A timetable shows order and return dates for every essential report, ending at least five working days before the agreed exchange date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the exclusivity end, exchange and completion target dates"
                - "Ask each adviser how long their report takes from instruction"
                - "Plan backwards from exchange to set each report's order date"
                - "Share the timetable with every adviser and the lender"
            - name: Adviser bench for property due diligence
              description: |-
                ## Purpose
                Waiting until a deal is agreed to find a property solicitor, a building surveyor and an environmental consultant costs days you do not have. A bench of named advisers, with fee quotes and turnaround times already known, means instructions go out within a day of heads of terms.

                ## Milestones
                1. At least one property solicitor or attorney, building surveyor and environmental consultant named with contact details.
                2. Indicative fees and turnaround times recorded for a typical deal of your size.
                3. Professional indemnity cover and any regulator membership confirmed for each adviser.
                4. A second option noted for each role in case the first is conflicted or busy.

                ## Notes
                Start from the **Vendor** template, one page per adviser. Ask about conflicts early: a small market often means the seller's adviser is your first choice too.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Named first and second choice advisers for legal, building survey and environmental work, each with fees, turnaround and insurance confirmed, are recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the three diligence roles you need filled before your next offer"
                - "Ask two firms per role for a fee range and typical turnaround"
                - "Confirm each bench adviser's indemnity cover and regulator status @recurring(yearly)"
                - "Record first and second choice advisers on one page per role"
            - name: Diligence budget and abort cost limit
              description: |-
                ## Purpose
                Legal fees, surveys, searches and environmental reports can reach a meaningful share of the deposit, and all of it is lost if the deal falls away. Setting a diligence budget and a written limit on what you will spend before exchange stops sunk costs from pushing you into a purchase you should have dropped.

                ## Milestones
                1. A line-by-line diligence budget for the deal with quotes or estimates per adviser.
                2. An abort cost limit written down: the most you will spend before you have certainty.
                3. Report orders sequenced so the cheap, deal-killing checks come first.
                4. The budget approved by any partner or investor who shares the cost.

                ## Notes
                Order the title review and desktop environmental screen before the full building survey. If either ends the deal, you have saved the largest fee.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A diligence budget with an abort cost limit is written, sequenced cheapest deal-killer first, and approved by everyone sharing the cost."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect fee quotes for each essential diligence workstream"
                - "Write the maximum you will spend before exchange as one number"
                - "Order the workstreams so the cheapest deal-killing checks run first"
                - "Send the budget to any partner sharing the abort costs"
            - name: Seller information request list
              description: |-
                ## Purpose
                Sellers and their agents release documents slowly unless they are asked precisely, once, in writing. A standard request list covering title deeds, leases, service contracts, certificates, plans and utility bills, sent the day heads of terms are signed, sets the pace of the whole diligence period.

                ## Milestones
                1. A request list grouped by workstream: title, planning, building, environmental, leases, contracts, insurance, utilities.
                2. Each item worded so the seller can tell when it is complete, such as all leases with every licence and side letter.
                3. The list sent to the seller's solicitor and agent with a requested return date.
                4. Each returned item ticked off with its date of receipt.

                ## Notes
                Ask for operating costs and utility bills for the last three years. They expose plant problems and service charge disputes that surveys miss.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A grouped seller information request list is sent within two working days of heads of terms, with a return date and a receipt log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft the request list grouped by diligence workstream"
                - "Word each item so completeness can be checked"
                - "Send the list to the seller's solicitor and agent with a return date"
                - "Log the date each requested item arrives"
            - name: Deal-breaker criteria written before diligence
              description: |-
                ## Purpose
                Once you have spent money and told people about a deal, almost any problem starts to look manageable. Writing the findings that would make you walk away, before the first report arrives, gives you a test that excitement cannot quietly rewrite.

                ## Milestones
                1. Five to ten deal-breakers written in plain words, such as no legal access, contamination needing remediation or unlawful current use.
                2. Each deal-breaker linked to the workstream that would reveal it.
                3. A separate list of issues that justify a price change rather than a walk away.
                4. The criteria shared with any partner so the decision is not yours alone.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated list of at least five walk-away findings and a separate list of price-change findings exists before the first diligence report is received."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the findings that would make you walk away from this deal"
                - "Link each deal-breaker to the report that would reveal it"
                - "List the issues that should change the price instead"
                - "Share both lists with your partner or investor"
            - name: Diligence findings register
              description: |-
                ## Purpose
                Findings arrive from five advisers in five formats, and the important one is often a single line on page forty of a survey. One register, with each finding's source, severity, cost estimate and proposed action, turns a pile of reports into the list you negotiate from.

                ## Milestones
                1. A register with columns for finding, source report, severity, estimated cost, proposed action and owner.
                2. Every report received so far read and its findings entered.
                3. Each finding classed as deal-breaker, price issue, condition of purchase or noted only.
                4. A total of estimated costs that feeds the price discussion.

                ## Notes
                Start from the **Risk register** template. Record the page reference for each finding so your solicitor can find it fast.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A findings register lists every finding from every report with source page, severity, cost estimate and proposed action."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up the register columns for source, severity, cost and action"
                - "Enter the findings from every report received so far"
                - "Class each finding as deal-breaker, price issue, condition or noted"
                - "Total the estimated costs of the price-issue findings"
            - name: Property document index and data room folders
              description: |-
                ## Purpose
                After completion you will need the same leases, certificates and plans for the lender, the insurer, the managing agent and the eventual buyer. A folder structure and document index set up at the start of diligence keeps the evidence in one place and makes your own future sale much faster.

                ## Milestones
                1. A folder structure that mirrors the diligence workstreams.
                2. A naming rule for files, such as date, document type and unit.
                3. An index listing every document received, its date and whether it is a copy or an original.
                4. Access granted to each adviser for only the folders they need.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared folder structure and document index list every diligence document by workstream, date and original or copy status."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create one folder per diligence workstream"
                - "Agree a file naming rule and write it in the index header"
                - "Index every document received so far with date and status"
                - "Give each adviser access to the folders they need"
            - name: Weekly diligence progress call with advisers
              description: |-
                ## Purpose
                Advisers working in parallel rarely talk to each other, so the surveyor's note about an extension never reaches the solicitor checking planning. A short weekly call during a live deal joins the workstreams up, surfaces delays early and gives everyone the same picture of what is outstanding.

                ## Milestones
                1. A standing weekly slot agreed with the solicitor, surveyor and any other active adviser.
                2. A fixed agenda: report status, new findings, outstanding seller information, dates at risk.
                3. Notes circulated within a day with owners and dates against each action.
                4. Every call held until exchange or a decision to withdraw.

                ## Notes
                Start from the **Meeting notes** template. Thirty minutes is enough if the findings register is updated before the call.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "During each live deal a weekly adviser call is held with notes circulated within one working day listing owners and dates for every action."
                cadence: rolling
              tasks:
                - "Agree a standing weekly slot with each active adviser"
                - "Hold the weekly diligence call and circulate notes @recurring(weekly:tue)"
                - "Update the findings register before each call"
                - "Flag any date at risk to the seller's solicitor the same day"
            - name: Outstanding seller information chase
              description: |-
                ## Purpose
                Every week a key document stays with the seller is a week less to read it before exchange. A twice-weekly chase of outstanding items, sent through your solicitor where that is the agreed route, keeps the pressure polite but constant and creates a record if the timetable has to move.

                ## Milestones
                1. An outstanding items list drawn from the seller information request log.
                2. A chase sent twice a week naming each missing item and the date it was first requested.
                3. Items outstanding for more than ten working days escalated to the seller's agent.
                4. A written record of delays the seller has caused, ready for any timetable discussion.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "During a live deal a chase of outstanding seller items goes out twice a week, and anything older than ten working days is escalated in writing."
                cadence: rolling
              tasks:
                - "Pull the outstanding items from the request log"
                - "Send the outstanding seller information chase @recurring(weekly:mon,thu)"
                - "Escalate any item older than ten working days to the agent @recurring(weekly:fri)"
                - "Keep a dated record of delays caused by the seller"
            - name: Diligence spend against budget
              description: |-
                ## Purpose
                Variations creep in quietly: an extra drainage survey here, a second lease review there. Comparing committed and invoiced diligence costs against budget each week means you approve each overrun on purpose and know your exact exposure if the deal fails.

                ## Milestones
                1. A spend sheet with budget, committed, invoiced and remaining for each adviser.
                2. Every new instruction or fee variation logged before it is approved.
                3. A weekly total compared with the abort cost limit.
                4. A note to partners whenever committed spend passes three quarters of the limit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A spend sheet is updated weekly during each live deal, and partners are told in writing when committed spend passes three quarters of the abort limit."
                cadence: rolling
              tasks:
                - "Set up a spend sheet with budget, committed, invoiced and remaining"
                - "Update diligence spend against the abort limit @recurring(weekly:fri)"
                - "Reconcile adviser invoices against their quotes @recurring(monthly:28)"
                - "Tell partners when committed spend passes three quarters of the limit"
            - name: Key dates diary during exclusivity
              description: |-
                ## Purpose
                Exclusivity expiry, deposit deadlines, lender offer expiry and search validity dates all sit in different documents. A single diary of key dates, reviewed every Monday of a live deal, prevents the quiet lapse that hands the seller the right to sell to someone else.

                ## Milestones
                1. Every contractual and practical date for the deal entered in one diary.
                2. A reminder set five working days before each date.
                3. A Monday review of the coming fortnight during every live deal.
                4. Any extension agreed with the seller confirmed in writing and entered.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All deal dates sit in one diary with five-day reminders, reviewed every Monday, and every extension is confirmed in writing."
                cadence: rolling
              tasks:
                - "Enter every contractual date for the deal in one diary"
                - "Set a reminder five working days before each date"
                - "Review the next fortnight of deal dates @recurring(weekly:mon)"
                - "Check search validity and lender offer expiry dates @recurring(weekly:thu)"
                - "Confirm any agreed extension in writing through your solicitor"
            - name: Midweek findings triage
              description: |-
                ## Purpose
                Findings left unread for a week become findings discovered the day before exchange. A short midweek triage of everything that has arrived, classed against your deal-breaker list, means questions go back to the seller while there is still time for answers.

                ## Milestones
                1. Every report and seller reply received that week read and entered in the findings register.
                2. Each new finding classed against the deal-breaker and price-issue lists.
                3. Follow-up questions sent to the right adviser or to the seller the same day.
                4. Any new deal-breaker reported to partners within a day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "During a live deal all new findings are triaged each Wednesday, with follow-up questions sent the same day and deal-breakers reported within one day."
                cadence: rolling
              tasks:
                - "Triage new reports and seller replies into the register @recurring(weekly:wed)"
                - "Class each new finding against your deal-breaker list"
                - "Send follow-up questions to the adviser or seller the same day"
                - "Report any new deal-breaker to partners within a day"
            - name: Standard diligence checklist upkeep
              description: |-
                ## Purpose
                Your own checklist, grown from each deal, is the cheapest expertise you will ever buy: the drainage question you missed once never gets missed again. Reviewing it each quarter, with additions from recent deals and changes in local rules, keeps it short enough to use and complete enough to trust.

                ## Milestones
                1. A master checklist covering every workstream, with notes on when each item applies.
                2. Lessons from each completed or abandoned deal added within a month.
                3. Items that never apply to your property types removed.
                4. A version date at the top of the checklist.

                ## Notes
                Start from the **Operational checklist** template. Keep property-type variants as short appendices rather than separate lists.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated master diligence checklist is reviewed each quarter, with lessons from every recent deal added and unused items removed."
                cadence: cyclic
              tasks:
                - "Copy your current diligence steps into one master checklist"
                - "Review the master diligence checklist against recent deals @recurring(quarterly)"
                - "Note any new rule affecting property checks in your target markets @recurring(monthly:24)"
                - "Date the checklist each time it changes"
            - name: Acquisition diligence lessons log
              description: |-
                ## Purpose
                Every purchase teaches something the reports did not: the boiler the survey passed that failed in the first winter, the lease side letter nobody disclosed. Logging what surprised you after each deal, and reviewing the log each quarter, turns hindsight into better instructions next time.

                ## Milestones
                1. One entry per deal with the surprises found after completion or withdrawal.
                2. Each surprise traced to the report or question that should have caught it.
                3. A change made to the checklist or adviser instructions for each lesson.
                4. A quarterly review of the log against open deals.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Each completed or abandoned deal has a lessons entry tracing surprises to their missed check, reviewed quarterly with a checklist change recorded for each."
                cadence: rolling
              tasks:
                - "Write a lessons entry for your most recent purchase or withdrawal"
                - "Trace each surprise to the report that should have caught it"
                - "Review the lessons log against open deals @recurring(quarterly)"
                - "Ask the agent to summarise recurring themes across the log"
            - name: Yearly adviser panel review
              description: |-
                ## Purpose
                Advisers who were sharp on your first deal can become slow once you are a regular client, and fees drift. A yearly review of each adviser's turnaround, accuracy and cost, against what actually happened on your deals, tells you who to keep, who to brief harder and who to replace.

                ## Milestones
                1. Turnaround, fees and missed issues recorded for each adviser across the year's deals.
                2. Each adviser scored on the same three or four criteria.
                3. A conversation held with any adviser whose score fell.
                4. The bench updated with any change of first or second choice.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each adviser is scored once a year on turnaround, fees and accuracy, and the bench records the keep, brief or replace decision."
                cadence: cyclic
              tasks:
                - "Gather invoices and report dates for each adviser's work this year"
                - "Score each adviser on the diligence panel @recurring(yearly)"
                - "Raise any falling score directly with the adviser"
                - "Update first and second choices on the adviser bench"
            - name: Post-completion follow-up actions
              description: |-
                ## Purpose
                Some diligence findings are only fixed after completion: a title rectification, a retention to release once works are done, a certificate the seller promised to send. A tracker of these actions, swept monthly, stops undertakings from expiring and money from staying held against problems already solved.

                ## Milestones
                1. Every post-completion undertaking, retention and outstanding certificate listed with its due date.
                2. An owner named for each action, usually your solicitor or managing agent.
                3. A monthly sweep that chases anything overdue.
                4. Each action closed with the evidence filed in the document index.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All post-completion undertakings and retentions are tracked with due dates and owners, swept monthly until each is closed with evidence filed."
                cadence: rolling
              tasks:
                - "List every undertaking and retention from your last completion"
                - "Sweep the post-completion actions and chase overdue items @recurring(monthly:12)"
                - "File the closing evidence for each action in the document index"
                - "Ask your solicitor to confirm which undertakings remain open @recurring(quarterly)"
            - name: Reading a title register and title plan
              description: |-
                ## Purpose
                The title register tells you who owns the property, what it benefits from and what burdens it carries, and the plan shows where the boundaries really are. Learning to read both yourself means you can spot a missing right of way or a restriction on sale before paying a lawyer to explain it.

                ## Milestones
                1. The property, proprietorship and charges sections of a register explained in your own notes.
                2. Two practice registers read, with each entry's effect summarised in a sentence.
                3. A title plan compared against a site plan and any discrepancy noted.
                4. A list of the entries that always go to your solicitor for interpretation.

                ## Notes
                Registration systems differ between countries and some land is unregistered. Learn the structure of your own system and leave legal conclusions to your solicitor or attorney.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two practice title registers are summarised entry by entry and a title plan is checked against a site plan, with discrepancies recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find a guide to the sections of a title register in your jurisdiction"
                - "Summarise each entry on two practice registers in a sentence"
                - "Lay a title plan over a site plan and mark any mismatch"
                - "List the entry types you will always refer to your solicitor"
            - name: Reading a report on title
              description: |-
                ## Purpose
                Your solicitor's report on title is the document you rely on when you exchange, yet many buyers skim it for the word satisfactory. Knowing how it is structured, what the assumptions and exclusions mean and which points need a decision from you lets you ask the right questions before signing.

                ## Milestones
                1. The usual sections of a report on title listed with what each covers.
                2. The assumptions and exclusions in a sample report read and their effect noted.
                3. A short list of points in the report that require a buyer decision.
                4. Three questions you will ask your solicitor on every report.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note covers the sections, assumptions and exclusions of a sample report on title and lists three standing questions for your solicitor."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your solicitor for an anonymised sample report on title"
                - "Note what each section of the sample report covers"
                - "Read the assumptions and exclusions and write their effect"
                - "Write three questions to ask on every future report"
            - name: Easements, covenants and rights of way basics
              description: |-
                ## Purpose
                One restrictive covenant against trade use or a neighbour's right to drive across your yard can matter more than the building itself. Understanding the common types of rights and burdens, and how they affect use, access and redevelopment, tells you which entries to worry about and which are historical noise.

                ## Milestones
                1. Notes on the difference between rights benefiting the property and burdens on it.
                2. Common covenant types listed with the uses or works each can prevent.
                3. The ways covenants can be released, modified or insured, as your solicitor describes them.
                4. Two real examples from past deals or case notes summarised.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note explains common easements and covenants, how each affects use and redevelopment, and summarises two worked examples."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read an introductory guide to easements and covenants"
                - "List common covenant types and what each can prevent"
                - "Ask your solicitor how covenants are usually released or insured"
                - "Read one published case or practice note on covenants @recurring(monthly:8)"
            - name: Reading a building survey report
              description: |-
                ## Purpose
                Building surveys are long, cautious and full of recommendations to investigate further, which makes the expensive items easy to miss. Learning to pull out the defects, their urgency and the suggested costs means you can turn a sixty-page report into the five lines that change your price.

                ## Milestones
                1. The structure of a building survey report understood: scope, limitations, elements, summary.
                2. A sample report reduced to its defects with urgency and cost.
                3. The difference between a defect and a further investigation recommendation noted.
                4. A habit of reading the limitations section before the summary.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sample building survey is reduced to a one-page list of defects with urgency and cost, with its limitations noted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Get a sample building survey report from your surveyor"
                - "Read the scope and limitations sections first"
                - "Reduce the report to defects with urgency and estimated cost"
                - "Separate defects from further investigation recommendations"
            - name: Reading a Phase I environmental assessment
              description: |-
                ## Purpose
                Phase I environmental site assessments review past uses, records and a site walkover to judge whether contamination is likely, and their conclusions drive whether you need intrusive testing. Understanding how one is built and what its risk ratings mean lets you question the consultant and brief your lender with confidence.

                ## Milestones
                1. The sections of a Phase I report understood: history, setting, walkover, conceptual site model, conclusions.
                2. The risk rating scale in a sample report explained in your notes.
                3. The recommendations in a sample report listed with their likely cost.
                4. A note on which findings typically trigger a Phase II investigation.

                ## Notes
                Standards and names differ by country. Ask your consultant which standard their report follows.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note explains the structure and risk ratings of a sample Phase I report and lists the findings that typically lead to a Phase II."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your environmental consultant for a sample Phase I report"
                - "Note what each section and the site model show"
                - "Explain the report's risk rating scale in your own words"
                - "List the findings that would usually lead to intrusive testing"
            - name: Reading leases for acquisition diligence
              description: |-
                ## Purpose
                Commercial leases set the income you are buying, and a break clause, a rent review assumption or a full repairing obligation that is not really full can change the value more than any defect. A fixed method for reading each lease turns a stack of documents into a schedule you can trust.

                ## Milestones
                1. A lease summary sheet with term, rent, reviews, breaks, repair, service charge, alienation and use.
                2. Two sample leases summarised on the sheet and checked by your solicitor.
                3. The common ways leases shift costs back to the landlord noted.
                4. A rule that licences, side letters and deeds of variation are read with every lease.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lease summary sheet exists, two sample leases are summarised on it, and your solicitor has confirmed both summaries."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a one-page lease summary sheet with the key terms"
                - "Summarise two sample leases on the sheet"
                - "Ask your solicitor to check both summaries"
                - "Note the clauses that move repair or service costs to the landlord"
            - name: Reading service charge accounts and budgets
              description: |-
                ## Purpose
                On multi-let buildings, costs the landlord cannot recover from tenants come straight off your income, and disputes over past service charges transfer with the building. Reading the budgets, year-end accounts and reconciliations for the last few years shows how much leaks and whether tenants are likely to challenge.

                ## Milestones
                1. Three years of service charge budgets and year-end accounts obtained and compared.
                2. Irrecoverable costs identified and totalled per year.
                3. Open disputes, arrears and unreconciled years listed.
                4. Questions for the seller's managing agent written and sent.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three years of service charge accounts are compared, irrecoverable costs totalled per year, and open disputes listed with questions sent to the managing agent."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Request three years of service charge budgets and year-end accounts"
                - "Compare budget against actual for each year"
                - "Total the costs that could not be recovered from tenants"
                - "Send the managing agent your questions on disputes and arrears"
            - name: Title and boundary investigation
              description: |-
                ## Purpose
                Buying something other than what you think, a strip of land missing, a garage on someone else's title or an access road owned by a third party, is one of the costliest and least fixable diligence failures. A full title review with a boundary check on site confirms the seller owns everything they are selling and that you can reach it.

                ## Milestones
                1. All titles and deeds making up the property identified and reviewed by your solicitor.
                2. Boundaries on the title plan walked on site and any mismatch photographed.
                3. Legal access to a public road confirmed for vehicles and services.
                4. Charges, restrictions and third-party rights listed with how each is dealt with on completion.

                ## Notes
                Where the title plan and the fences disagree, ask your solicitor whether a boundary survey, a correction of the register or title insurance is the right fix.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Your solicitor confirms in writing that the seller owns all land being sold, that legal access exists, and how each charge and restriction will be dealt with."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your solicitor to list every title and deed in the sale"
                - "Walk the boundaries with the title plan and photograph any mismatch"
                - "Confirm legal access to a public road for vehicles and services"
                - "Record how each charge and restriction will be cleared on completion"
            - name: Local authority and utility searches
              description: |-
                ## Purpose
                Searches tell you what public bodies know about a property: road adoption, planning notices, enforcement, drainage connections and nearby schemes. Ordering the right set early, and reading the results rather than filing them, often reveals a compulsory purchase line or an unadopted road that changes the deal.

                ## Milestones
                1. The search set agreed with your solicitor for the property's location and type.
                2. Searches ordered within the first week of diligence.
                3. Results read and any adverse entry entered in the findings register.
                4. Follow-up enquiries raised with the relevant authority for each adverse entry.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "All agreed searches are back, each adverse entry is in the findings register, and follow-up enquiries have been raised for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree the search set with your solicitor for this location"
                - "Order the searches in the first week of diligence"
                - "Enter each adverse search entry in the findings register"
                - "Raise follow-up enquiries with the relevant authority"
            - name: Planning history and lawful use check
              description: |-
                ## Purpose
                Offices in daily use may only have permission as a warehouse, and an extension may never have been approved. Checking the planning history, conditions and any enforcement record confirms that the current use and buildings are lawful, so the income you are buying cannot be stopped by the authority.

                ## Milestones
                1. Every planning permission, refusal and appeal for the site listed with dates.
                2. Conditions on the relevant permissions checked for compliance, especially use and hours conditions.
                3. The current use and all built extensions matched to a permission or lawful use certificate.
                4. Any gap referred to a planning consultant or your solicitor for a view on risk and remedy.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each current use and built element is matched to a permission or lawful use evidence, and any gap has a written view from a planning professional."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every planning permission, refusal and appeal for the site"
                - "Check compliance with use and hours conditions"
                - "Match the current use and each extension to a permission"
                - "Refer any gap to a planning consultant for a view"
            - name: Building control approvals and certificates
              description: |-
                ## Purpose
                Works done without building regulation approval can block a sale, a mortgage or an insurance claim years later. Collecting completion certificates for structural works, extensions, fit-outs and installations such as electrics and gas shows which works are signed off and which need regularising.

                ## Milestones
                1. A list of significant works carried out on the property, drawn from surveys, permissions and the seller.
                2. A completion certificate or equivalent sign-off obtained or confirmed missing for each.
                3. Electrical, gas and lift certificates collected with their dates.
                4. A plan for each missing sign-off: regularisation, indemnity insurance or price adjustment.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every significant work on the property has a sign-off on file or a recorded plan for regularisation, indemnity or price adjustment."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List significant works from surveys, permissions and seller replies"
                - "Request the completion certificate for each listed work"
                - "Collect current electrical, gas and lift certificates"
                - "Record a plan for each missing sign-off"
            - name: Building condition survey
              description: |-
                ## Purpose
                The condition survey prices what the building will cost you over the next five to ten years: roof, structure, facade, windows and common parts. Briefing the surveyor on your plans for the building, rather than asking for a generic report, gets a survey that answers the questions your price depends on.

                ## Milestones
                1. A written brief to the surveyor covering your intended use, hold period and areas of concern.
                2. Full access arranged to roofs, voids, plant rooms and a sample of let units.
                3. A report received with defects, urgency ratings and costed repairs over a set period.
                4. Each costed defect entered in the findings register.

                ## Notes
                Ask for costs split between those landlords can recover through the service charge and those they cannot. It changes the price discussion.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A condition survey written to your brief gives costed defects over a stated period, and every costed item is in the findings register."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a survey brief covering use, hold period and concerns"
                - "Arrange access to roofs, voids, plant rooms and sample units"
                - "Ask for costs split into recoverable and non-recoverable"
                - "Enter each costed defect in the findings register"
            - name: Mechanical and electrical plant survey
              description: |-
                ## Purpose
                Boilers, chillers, lifts and electrical switchgear are expensive, slow to replace and often near the end of their lives in older buildings. A specialist plant survey gives the remaining life and replacement cost of each item, which is often the largest hidden capital cost in a commercial purchase.

                ## Milestones
                1. An asset list of major plant with make, age and location.
                2. Maintenance records and service contracts for each item reviewed.
                3. Remaining life and replacement cost estimated by a services engineer.
                4. Any plant failing current safety or efficiency rules flagged in the findings register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A plant survey lists each major item with age, remaining life and replacement cost, and non-compliant plant is flagged in the findings register."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the seller for a list of major plant and its maintenance records"
                - "Instruct a services engineer to inspect the main plant"
                - "Record remaining life and replacement cost for each item"
                - "Flag any plant that fails current safety or efficiency rules"
            - name: Phase I environmental site assessment
              description: |-
                ## Purpose
                Lenders often need an environmental report, and contamination liability can attach to an owner who never caused it. Commissioning a Phase I assessment early, before the expensive surveys, tells you whether past uses such as fuel storage, dry cleaning or manufacturing create a risk that needs testing or insurance.

                ## Milestones
                1. A Phase I assessment instructed to a standard your lender accepts.
                2. Past uses of the site and neighbouring land summarised from the report.
                3. The overall risk rating and recommendations recorded in the findings register.
                4. A decision noted on whether further investigation is needed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A Phase I report acceptable to your lender is received within three weeks, and its risk rating and recommendations are in the findings register with a decision on further work."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm which environmental report standard your lender accepts"
                - "Instruct the Phase I assessment in the first week of diligence"
                - "Summarise past uses of the site and its neighbours"
                - "Record the risk rating and whether further investigation is needed"
            - name: Fire, asbestos and statutory compliance records
              description: |-
                ## Purpose
                As the new owner you inherit the duty to manage asbestos, fire safety and other statutory inspections from completion day. Checking that the asbestos register, fire risk assessment and inspection certificates exist and are current shows the cost of catching up and whether the seller has been running the building safely.

                ## Milestones
                1. An asbestos register or management survey obtained, or its absence recorded.
                2. The current fire risk assessment read and its open actions listed.
                3. Statutory inspection certificates collected, such as lifts, pressure systems and water hygiene.
                4. The cost of closing compliance gaps estimated and entered in the findings register.

                ## Notes
                Requirements differ by jurisdiction and building type. Ask your surveyor or a fire safety adviser which inspections apply to this property.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The asbestos register, fire risk assessment and statutory certificates are on file or recorded as missing, with the cost of closing gaps in the findings register."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Request the asbestos register and the current fire risk assessment"
                - "List the open actions in the fire risk assessment"
                - "Collect lift, pressure system and water hygiene certificates"
                - "Estimate the cost of closing each compliance gap"
            - name: Tenancy schedule audit against leases
              description: |-
                ## Purpose
                The seller's tenancy schedule is a summary prepared to sell the building, and errors in it rarely favour the buyer. Checking each line against the signed lease, licences and side letters confirms the rent, break dates, deposits and incentives you are paying for before they become your problem.

                ## Milestones
                1. Every line of the tenancy schedule matched to a signed lease and its supporting documents.
                2. Differences in rent, term, breaks, review dates or deposits listed.
                3. Rent-free periods, capital contributions and other outstanding incentives identified.
                4. A corrected schedule agreed with the seller or the price adjusted for the differences.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every tenancy schedule line is reconciled to signed documents, all differences and outstanding incentives are listed, and a corrected schedule is agreed with the seller."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Match each schedule line to its signed lease and side letters"
                - "List differences in rent, term, breaks and deposits"
                - "Identify outstanding rent-free periods and incentives"
                - "Send the corrected schedule to the seller for agreement"
            - name: Service contracts and supplier agreements review
              description: |-
                ## Purpose
                Cleaning, security, lift maintenance and energy contracts may pass to you on completion, some with long notice periods or automatic renewals. Reviewing each one tells you which to keep, which to end before completion and what you will be paying from the first day.

                ## Milestones
                1. A list of every service, maintenance and supply contract with cost, term and notice period.
                2. Each contract marked keep, terminate before completion or renegotiate.
                3. Termination notices served by the seller where you need them ended.
                4. Contracts that transfer novated or assigned with the seller's cooperation agreed in the contract.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every service and supply contract is listed with term and notice, each is marked keep, terminate or renegotiate, and the seller's obligations are written into the contract."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each service and supply contract with cost, term and notice"
                - "Mark each contract keep, terminate or renegotiate"
                - "Ask the seller to serve notice on the contracts you will not keep"
                - "Agree in the sale contract how the kept contracts transfer"
            - name: Insurance history and reinstatement value
              description: |-
                ## Purpose
                Past flood or subsidence claims can make a building expensive or impossible to insure, and an out-of-date reinstatement value leaves you underinsured from day one. Checking the claims record and getting a current rebuild cost before exchange avoids discovering either problem at your first renewal.

                ## Milestones
                1. Five years of claims history obtained from the seller or their broker.
                2. Any claims for flood, subsidence, fire or escape of water reviewed with your broker.
                3. A current reinstatement cost assessment obtained.
                4. Indicative terms from at least two insurers recorded before exchange.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five years of claims history and a current reinstatement value are on file, with indicative terms from two insurers recorded before exchange."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Request five years of claims history from the seller"
                - "Review any flood or subsidence claims with your broker"
                - "Review the reinstatement value with your broker before each renewal @recurring(yearly)"
                - "Get indicative terms from two insurers before exchange"
            - name: Flood risk and ground conditions check
              description: |-
                ## Purpose
                Flooding, mining, sinkholes, soft ground and coastal erosion are site risks that no amount of building repair can fix. A focused check of official flood mapping, ground reports and any history of movement tells you whether the risk is priced in, insurable and acceptable to your lender.

                ## Milestones
                1. Official flood risk for river, surface water and coastal sources recorded.
                2. Ground stability risks such as mining, subsidence or soft ground checked from available reports.
                3. Any visible signs of movement or past flooding noted from the site visit and the survey.
                4. A view recorded on insurability and lender acceptance.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Flood and ground risks for the site are recorded from official sources and the site visit, with a written view on insurability and lender acceptance."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record the official flood risk from each source for the site"
                - "Check ground stability reports for mining or subsidence"
                - "Note any signs of movement or flooding seen on the site visit"
                - "Ask your broker and lender whether the risks are acceptable"
            - name: Phase II environmental investigation decision
              description: |-
                ## Purpose
                When a Phase I recommends intrusive testing, you must choose between paying for soil and groundwater sampling, buying insurance, asking the seller to test or walking away, often within days. Deciding against written criteria, with the consultant's cost and time estimate in hand, avoids both panic and wishful thinking.

                ## Milestones
                1. The Phase I recommendations and the specific concern behind each set out.
                2. Options costed: Phase II testing, environmental insurance, seller-funded testing, price reduction or withdrawal.
                3. The timetable effect of each option checked against exclusivity.
                4. A decision recorded with the reasons and agreed with your lender.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on Phase II testing, insurance, price or withdrawal is recorded with costs, timetable effect and lender agreement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the consultant what each Phase I concern would need to resolve"
                - "Cost testing, insurance, seller testing and withdrawal side by side"
                - "Check each option's effect on the exclusivity date"
                - "Record the decision and confirm it with your lender"
            - name: Title indemnity insurance or fix decision
              description: |-
                ## Purpose
                Many title and planning defects can be covered by an indemnity policy for a modest premium, but a policy is not a cure and some lenders or future buyers will not accept it. Weighing insurance against rectification, a price change or a seller undertaking, defect by defect, gives you a reasoned choice instead of the quickest one.

                ## Milestones
                1. Each title or planning defect suitable for indemnity listed with your solicitor.
                2. Quotes obtained and policy terms checked for exclusions and contacts that would void cover.
                3. Rectification, seller undertaking and price options compared for each defect.
                4. The chosen route recorded and accepted by your lender.

                ## Notes
                Most indemnity policies are voided if you contact the party who could enforce the defect. Agree with your solicitor who may be approached before anyone makes a call.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "For each title or planning defect a route is chosen among indemnity, rectification, undertaking or price, with policy terms checked and lender acceptance recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List with your solicitor each defect suitable for indemnity cover"
                - "Get indemnity quotes and read the exclusions"
                - "Compare indemnity with rectification, undertaking and price change"
                - "Record the chosen route and confirm lender acceptance"
            - name: Price change, retention or walk away
              description: |-
                ## Purpose
                At the end of diligence the findings register holds a total cost, and the question becomes how to put it to the seller: a lower price, a retention held back from the price, works by the seller before completion or withdrawal. Making that call from the register and your deal-breaker list, with costs evidenced by reports, makes the negotiation credible.

                ## Milestones
                1. Price-issue findings totalled with the report evidence for each.
                2. Any deal-breaker findings checked against the list you wrote before diligence.
                3. The ask chosen: price reduction, retention, seller works or withdrawal, with the reasons.
                4. The proposal sent to the seller through your agent or solicitor with the supporting evidence.

                ## Notes
                Sellers accept a smaller, evidenced reduction far more readily than a large round number. Lead with the three biggest costed items.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to renegotiate, retain, require works or withdraw is made from the findings register and sent to the seller with evidence before exclusivity ends."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total the price-issue findings with their report evidence"
                - "Check every finding against your deal-breaker list"
                - "Choose between price reduction, retention, seller works or withdrawal"
                - "Ask the agent to draft the evidence summary for the seller"
            - name: Site inspection day with the survey team
              description: |-
                ## Purpose
                Surveyors, engineers and environmental consultants each need access, and a single coordinated inspection day saves fees, seller goodwill and tenant disruption. Planning it properly, with keys, roof access, tenant notice and a walk of the boundaries, gets everyone what they need in one visit.

                ## Milestones
                1. A date agreed with the seller, the occupiers and each adviser.
                2. Access arranged to roofs, plant rooms, voids, vacant units and a sample of let units.
                3. Tenants notified through the seller in line with their leases.
                4. Your own notes and photographs taken of the boundaries, neighbours and anything the advisers raised on the day.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A coordinated inspection day is held with all needed advisers and access, and your own notes and photographs are filed the same day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree an inspection date with the seller and each adviser"
                - "Ask the seller to arrange keys, roof access and tenant notice"
                - "Walk the boundaries and neighbours during the inspection"
                - "File your notes and photographs the same evening"
            - name: Diligence sign-off before exchange
              description: |-
                ## Purpose
                Exchange is usually the point of no return, so every workstream needs a clear answer before you sign. A short sign-off pack, with each adviser's conclusion, the open findings and how each is handled in the contract or price, lets you and any partner commit on evidence rather than momentum.

                ## Milestones
                1. Written conclusions received from each adviser on their workstream.
                2. Every open finding shown with its agreed treatment: price, retention, contract clause, insurance or accepted.
                3. Partners or investors given the pack at least two working days before exchange.
                4. A signed or emailed go decision recorded from each decision maker.
              priority: high
              deadlineOffsetDays: 50
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A sign-off pack with every adviser's conclusion and the treatment of each open finding is approved in writing by each decision maker before exchange."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each adviser for a written conclusion on their workstream"
                - "List every open finding with its agreed treatment"
                - "Send the pack to partners two working days before exchange"
                - "Record each decision maker's go or no-go in writing"
            - name: Pre-completion searches and final checks
              description: |-
                ## Purpose
                Between exchange and completion things can still change: a new charge registered, a tenant leaving, an insurance policy lapsing. Final checks in the days before completion confirm nothing has moved, that the property is insured from the moment risk passes and that the keys and documents will be ready.

                ## Milestones
                1. Pre-completion title and company searches carried out by your solicitor.
                2. Insurance in place from the date risk passes to you.
                3. Tenant occupation and arrears confirmed as at the latest date available.
                4. A completion day list of keys, codes, original documents and meter readings agreed with the seller.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Pre-completion searches are clear, insurance runs from the date risk passes, and an agreed completion day handover list is in place."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your solicitor to run pre-completion searches"
                - "Confirm insurance starts on the date risk passes"
                - "Get updated occupation and arrears figures from the seller"
                - "Agree a handover list of keys, codes, documents and meter readings"
            - name: Lender valuation and report on title alignment
              description: |-
                ## Purpose
                Lenders instruct their own valuer and rely on your solicitor's report on title, and any gap between their findings and yours can delay drawdown at the last moment. Feeding your diligence findings to the valuer and lender early, and checking their conditions against what you know, keeps the loan and the purchase on the same timetable.

                ## Milestones
                1. Key diligence findings shared with the lender's valuer before the inspection.
                2. The valuation report read and any difference from your own findings explained.
                3. Lender conditions precedent listed and matched to diligence outputs.
                4. The lender's confirmation that the report on title is acceptable received before exchange.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every lender condition precedent is matched to a diligence output, and the lender has accepted the report on title before exchange."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Send your main diligence findings to the lender's valuer"
                - "Compare the valuation report with your own findings"
                - "Match each lender condition to a diligence output"
                - "Confirm the lender accepts the report on title"
            - name: Owner-occupier buying its own business premises
              description: |-
                ## Purpose
                Small businesses buying its own shop, workshop or office often skip diligence because the owners already know the building as tenants. Familiarity hides the things a tenant never sees, such as title restrictions, roof condition and the landlord's compliance gaps, which become the business's problem the day it completes.

                ## Milestones
                1. The checks a tenant would never have seen listed: title, planning, structure, roof, compliance.
                2. Any existing lease and its dilapidations position reviewed for how it ends on purchase.
                3. The purchase vehicle confirmed with your accountant, whether the trading company, a separate company or the owners personally.
                4. A proportionate diligence scope agreed with your solicitor and surveyor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A proportionate diligence scope for buying your own premises is agreed with your solicitor, with the purchase vehicle confirmed by your accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the checks you never saw as a tenant"
                - "Ask your solicitor how your current lease ends on purchase"
                - "Ask your accountant which entity should own the premises"
                - "Agree a proportionate diligence scope with your advisers"
            - name: Diligence on a property in another country
              description: |-
                ## Purpose
                Buying abroad means a different title system, unfamiliar searches, advisers you have never met and site visits measured in flights. A remote diligence plan with a local lawyer independent of the seller, a trusted surveyor and a fixed reporting format means you can rely on the work without living there.

                ## Milestones
                1. A local lawyer appointed who acts only for you and confirms they have no link to the seller or agent.
                2. The local title, search and survey system explained in a one-page note.
                3. A reporting format agreed so every adviser reports in the same structure and language.
                4. At least one in-person visit, or a recorded video walk of every room, roof and boundary.

                ## Notes
                Foreign ownership rules, currency controls and taxes vary widely. Ask your local lawyer and a cross-border tax adviser before you commit any deposit.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A remote diligence plan names an independent local lawyer and surveyor, explains the local system on one page and includes a recorded or in-person walk of the whole property."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask two local lawyers to confirm they have no link to the seller"
                - "Write a one-page note on the local title and search system"
                - "Agree one reporting format with every overseas adviser"
                - "Book a site visit or a recorded video walk of the property"
            - name: Running diligence alongside a full-time job
              description: |-
                ## Purpose
                Many first property businesses are built by founders who still have a day job, and diligence windows do not wait for evenings. Setting up the work so advisers can progress without you, with fixed decision slots and clear delegation, keeps the deal moving while protecting both the job and the purchase.

                ## Milestones
                1. Two fixed weekly slots set aside for diligence decisions and calls.
                2. Your solicitor or a project manager authorised to chase the seller and coordinate advisers.
                3. Decisions that must be yours separated from those you delegate, in writing.
                4. A plan for the inspection day and exchange that does not clash with work commitments.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two weekly decision slots are set, delegated authority is written down, and inspection and exchange dates are cleared with your employer."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Block two weekly slots for diligence decisions"
                - "Write down which decisions you will delegate and to whom"
                - "Ask your solicitor to coordinate the seller and other advisers"
                - "Book leave for the inspection day and exchange"
            - name: Former industrial site diligence
              description: |-
                ## Purpose
                Old factories, depots and filling stations can carry contamination, buried tanks and demolition hazards that cost more than the land is worth. Buying one safely needs intrusive investigation, a remediation estimate and a clear allocation of environmental liability in the contract, all before you are committed.

                ## Milestones
                1. A historic use timeline for the site from maps, records and the Phase I report.
                2. Intrusive investigation scoped and completed by a qualified consultant.
                3. A remediation strategy and cost range agreed with the consultant and the regulator's likely expectations noted.
                4. Environmental liability allocation, indemnities or insurance agreed in the contract with your solicitor.

                ## Notes
                Liability rules for contaminated land differ by jurisdiction and can attach to owners as well as polluters. Take specialist legal advice before exchange.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Intrusive investigation, a costed remediation strategy and a contract clause or policy allocating environmental liability are all in place before exchange."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Build a timeline of historic site uses from maps and records"
                - "Scope intrusive investigation with an environmental consultant"
                - "Get a remediation strategy and cost range in writing"
                - "Agree environmental liability terms with your solicitor"
            - name: Listed and heritage building diligence
              description: |-
                ## Purpose
                Heritage protection limits what you can change, requires consent for many works and can leave you with liability for unauthorised alterations made by past owners. Diligence that checks the listing, past consents and the cost of conservation-grade repairs keeps a beautiful building from becoming an unworkable one.

                ## Milestones
                1. The heritage listing or protection status and its description obtained.
                2. Past alterations matched to the required heritage consents, with gaps listed.
                3. A conservation-experienced surveyor's report on condition and repair specification.
                4. Your plans for the building tested with a heritage consultant for likely consent.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Protection status, past consents, conservation repair costs and a heritage consultant's view on your intended works are all recorded before exchange."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Obtain the listing or protection description for the building"
                - "Match each past alteration to its heritage consent"
                - "Instruct a surveyor with conservation experience"
                - "Test your plans with a heritage consultant"
            - name: Portfolio purchase diligence with sampling
              description: |-
                ## Purpose
                When buying ten or fifty properties at once, full diligence on every one is too slow and too expensive, yet a single bad title can sink a lender's security. A risk-based approach with full checks on the most valuable and riskiest assets and sampling on the rest, agreed with your lender, keeps the timetable without hiding problems.

                ## Milestones
                1. Every asset ranked by value and risk, with the top tier marked for full diligence.
                2. A sampling rule agreed with your lender for the remaining assets.
                3. A portfolio findings register showing results by asset and in total.
                4. Warranties or price mechanisms in the contract covering assets not fully checked.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A lender-agreed sampling rule is applied across the portfolio, with a findings register by asset and contract protection for assets not fully checked."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Rank every asset in the portfolio by value and risk"
                - "Agree a sampling rule for lower-tier assets with your lender"
                - "Set up a findings register with one tab per asset"
                - "Ask your solicitor for warranties covering unchecked assets"
---

# Property Acquisition Due Diligence

Due diligence is the window between an agreed price and a binding contract when you find out what you are really buying: who owns it, what it may be used for, what condition it is in, what the ground holds and what the leases and contracts commit you to. This area is for founders and small business owners buying property as a business, whether a first shop with flats above or a multi-let industrial estate. It starts with foundations such as desktop checks, scope, timetable, advisers, budget and a findings register, moves through the weekly machinery of a live diligence period, then the skills of reading title, surveys, environmental reports and leases, the workstreams themselves, the decisions on price and insurance, the dated moments before exchange and completion, situations for different buyers and the specialist work of contaminated, listed and portfolio purchases.

During a live deal the rhythms are a weekly adviser call, a chase of outstanding seller information twice a week, a weekly look at diligence spend and key dates, and a midweek triage of new findings; between deals there is a quarterly refresh of your checklist and lessons log, a monthly sweep of post-completion actions and a yearly review of your adviser panel. Risk register suits the findings register, Vendor suits the adviser bench, Meeting notes suits the weekly call and Operational checklist suits the standard checklist. None of this is legal, surveying, environmental or tax advice: rely on your solicitor or attorney, surveyor and specialist consultants for their conclusions, and make the project about asking, recording and deciding. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
