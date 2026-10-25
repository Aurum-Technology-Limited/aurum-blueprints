---
id: investment-banking.signing-to-closing-workstreams
name: Signing to Closing Workstreams
description: "The period between signing and closing, run like a programme: conditions precedent and filings tracked, interim covenants respected, funds flow rehearsed, closing checklists turned and announcements ready on the day."
category: business
version: 1.0.0
tags: [investment-banking, signing-to-closing-workstreams, knowledge-worker, analyst, associate, conditions-precedent, funds-flow, closing]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - risk-register
    - meeting-notes
    - vendor
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Signing to Closing Workstreams
          description: "Taking a deal from signing to closing: conditions precedent, regulatory filings, funds flow, closing checklists and announcements."
          projects:
            - name: One-page signing to closing timetable
              description: |-
                ## Purpose
                Every adviser on a signed deal carries a different idea of when closing will happen, and the client usually believes the most optimistic one. A single page showing signing, each filing, the expected clearance windows, the shareholder vote if any, the target closing date and the long-stop date gives everyone the same picture and makes slippage visible the week it starts.

                ## Milestones
                1. A one-page timetable with every dated step from signing to closing and the long-stop date.
                2. Each date marked as fixed by the agreement, set by a regulator or estimated by the deal team.
                3. The timetable reviewed by deal counsel on both sides and by your vice president.
                4. A version shared with the client's deal lead and saved as the master copy.

                ## Notes
                Show clearance periods as ranges, not single dates. A regulator's statutory clock rarely starts on the day you file.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page timetable from signing to long-stop, reviewed by counsel and saved as the master version."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every dated obligation in the signed agreement on one sheet"
                - "Ask deal counsel for realistic clearance windows for each filing"
                - "Mark each date as contractual, regulatory or estimated"
                - "Send the draft timetable to your vice president for review"
            - name: Conditions precedent tracker from the signed agreement
              description: |-
                ## Purpose
                Closing cannot happen until each condition in the agreement is satisfied or waived, and conditions hide in schedules, side letters and financing papers as well as the main clause. Building a tracker that quotes every condition, names its owner and records the evidence that will prove it is met turns a legal clause into a list the whole team can work.

                ## Milestones
                1. Every condition precedent from the agreement, schedules and side letters listed with a clause reference.
                2. Each condition given an owner, an evidence document and a target date.
                3. Conditions that only one party can waive marked as such, as confirmed by counsel.
                4. The tracker agreed with counsel as complete before the first weekly status call.

                ## Notes
                Copy the condition wording exactly from the agreement rather than paraphrasing. A paraphrase that drops a qualifier is how a team thinks a condition is met when it is not.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tracker listing every condition precedent with clause reference, owner, evidence and date, confirmed complete by deal counsel."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the conditions clause and every schedule that refers to it"
                - "Copy each condition word for word into a tracker with its clause number"
                - "Assign an owner and the evidence document for each condition"
                - "Ask counsel to confirm the list is complete and flag waiver rights"
            - name: Closing checklist built from the transaction documents
              description: |-
                ## Purpose
                A closing checklist is the single list of every document to be signed, delivered or released at completion, and on a mid-sized deal it often runs to over a hundred lines. Building it early from the purchase agreement, financing papers and ancillary agreements, with counsel owning the legal items and the bank owning the money items, stops the last week becoming a hunt for signature pages.

                ## Milestones
                1. A checklist covering every closing deliverable named in the purchase agreement and ancillaries.
                2. Each line showing the document, the responsible party, the signatories and its current status.
                3. Bank-owned items such as the funds flow, payment instructions and release letters clearly marked.
                4. The checklist reconciled line by line with counsel's own version.

                ## Notes
                Start from the **Operational checklist** template. Counsel normally holds the master; the bank's job is to make sure the money and timing items are on it and moving.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A closing checklist reconciled with counsel's version, with every deliverable, owner and signatory listed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request the current closing checklist draft from deal counsel"
                - "Add every bank-owned item, including funds flow and payment letters"
                - "Check each deliverable named in the agreement appears on the list"
                - "Note the signatories needed for each document and their availability"
            - name: Workstream owners and sign-off matrix
              description: |-
                ## Purpose
                Between signing and closing a dozen workstreams run at once: filings, consents, financing, employee notices, systems, communications and the money. A matrix naming one owner per workstream on each side, plus who can sign off a document or a payment, saves the forty-minute call spent working out who was meant to send something.

                ## Milestones
                1. Every closing workstream listed with a named owner at the client, the counterparty and each adviser.
                2. Sign-off authority recorded for documents, announcements and payments.
                3. Holiday and travel gaps for key signatories noted against the timetable.
                4. The matrix circulated to the working group and saved with the deal list.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A matrix naming an owner and a sign-off authority for every closing workstream, circulated to the working group."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the closing workstreams from the timetable and checklist"
                - "Confirm one owner per workstream with each party's deal lead"
                - "Record who has authority to approve payments and announcements"
                - "Ask each signatory for planned leave before the target closing date"
            - name: Interim period covenants summary for the client
              description: |-
                ## Purpose
                Once the agreement is signed, the seller usually needs the buyer's consent to do things it did freely last month: hire senior staff, sign large contracts, pay dividends or take on debt. A plain summary of those restrictions for the client's management team, prepared with counsel, prevents an innocent breach that hands the buyer a bargaining chip on price or timing.

                ## Milestones
                1. A summary of each interim restriction, its threshold and the consent route, checked by counsel.
                2. The summary walked through with the client's finance and operations leads.
                3. A named person at the client responsible for spotting actions that need consent.
                4. The consent request process agreed with the counterparty's deal team.

                ## Notes
                Keep this organisational: counsel decides whether an action needs consent. Your job is to make sure the question gets asked before the action happens.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A counsel-checked summary of interim restrictions shared with the client's management, with a named consent owner recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Extract the conduct of business clause and its thresholds"
                - "Draft a one-page plain summary and send it to counsel to check"
                - "Walk the client's finance lead through the summary on a call"
                - "Agree with the counterparty how consent requests will be sent"
            - name: Long-stop date and termination rights map
              description: |-
                ## Purpose
                The long-stop date is when either side may walk away if conditions are not met, and termination rights can also turn on a regulator's decision, a financing failure or a breach. Mapping each right, who holds it and what triggers it lets the bank warn the client months ahead rather than discover the cliff edge in the final week.

                ## Milestones
                1. Every termination right listed with the party holding it and its trigger, as summarised by counsel.
                2. The long-stop date and any automatic extension mechanism shown on the timetable.
                3. Any break fees or reverse termination fees noted with their triggers.
                4. A trigger point agreed for raising an extension with the counterparty.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A map of every termination right, trigger and fee, reviewed by counsel, with an extension trigger date recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask counsel for a summary of every termination right in the agreement"
                - "Add the long-stop date and extension mechanics to the timetable"
                - "List any break or reverse termination fees with their triggers"
                - "Check days remaining to the long-stop date against open conditions @recurring(monthly:20)"
            - name: Closing deliverables register for corporate documents
              description: |-
                ## Purpose
                Officers' certificates, board minutes, resignations, share certificates, powers of attorney and good standing certificates are small documents that each need the right person, sometimes a notary and occasionally an apostille. A register of these with lead times, built in the first fortnight, catches the overseas director who needs three weeks to get a document legalised.

                ## Milestones
                1. Every corporate deliverable listed with the entity, signatory and any formalities needed.
                2. Lead times confirmed for notarisation, legalisation or registry certificates.
                3. Drafts of officers' certificates and board minutes circulated for review.
                4. A collection plan for originals or certified copies agreed with counsel.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register of every corporate closing deliverable with signatory, formalities and lead time, agreed with counsel."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the corporate deliverables from the closing checklist into a register"
                - "Ask local counsel for lead times on registry and notary documents"
                - "Flag any signatory who is overseas or travelling near closing"
                - "Agree with counsel how originals will be collected and held"
            - name: Payment instruction verification and fraud controls
              description: |-
                ## Purpose
                Closing day is the moment a fraudster most wants to send a convincing email with new bank details, and a single redirected wire can lose the full purchase price. Agreeing in advance how every payment instruction will be confirmed, by a call to a known number and never from the email itself, protects the client and the bank.

                ## Milestones
                1. Every payee on the funds flow listed with an account confirmed on headed paper.
                2. A call-back procedure agreed using phone numbers obtained independently of the instructions.
                3. A rule circulated that no change to payment details will be accepted by email alone.
                4. Small test payments arranged where the agreement and the parties allow it.

                ## Notes
                Verify through a channel you set up, not one the instruction gives you. Follow your bank's own payment controls first; this project only makes sure the deal team follows them.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written verification procedure with every payee's account confirmed by call-back to an independently sourced number."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every expected payee on the closing funds flow"
                - "Request account details on headed paper signed by an authorised person"
                - "Confirm each account by phoning a number you sourced yourself"
                - "Circulate the no changes by email rule to the working group"
            - name: Closing period mailing list and document naming rules
              description: |-
                ## Purpose
                After signing the working group often doubles as filings counsel, local lawyers, lenders' counsel and the paying agent join, and the wrong person on an email can breach confidentiality. Fixing the distribution lists, the file naming convention and the rule for marking drafts and final versions now means everyone is reading the same funds flow on closing morning.

                ## Milestones
                1. Distribution lists for each workstream approved by the client and counsel.
                2. A naming convention for drafts, executed versions and signature pages agreed.
                3. One shared location named as the home of final executed documents.
                4. Every new joiner to the working group added only after a confidentiality check.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Approved distribution lists and a written naming convention circulated, with one named location for executed documents."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft distribution lists by workstream and send them to counsel"
                - "Write a three-line file naming rule for drafts and executed copies"
                - "Agree where executed documents and signature pages will be stored"
                - "Check the confidentiality status of each new working group joiner"
            - name: Regulatory filing map by jurisdiction
              description: |-
                ## Purpose
                Competition, foreign investment and sector regulators can each hold a deal up, and the bank needs to know which filings are required, which are voluntary and which can run in parallel. Turning counsel's filing analysis into a map with each authority, its waiting period and the information it needs from the financials lets the bank plan its own data requests early.

                ## Milestones
                1. Every required and voluntary filing listed with the authority and jurisdiction, from counsel's analysis.
                2. Statutory waiting periods and any pre-notification steps shown for each.
                3. The financial data each filing needs, such as turnover by country, assigned to an owner.
                4. The map linked to the timetable so each filing's clearance window is visible.

                ## Notes
                Whether a filing is mandatory is counsel's call. The bank's value is in the turnover, market share and business data that filings need and that often sits in the bank's own model.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A filing map listing each authority, waiting period and data owner, matched to the timetable and checked by counsel."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask filings counsel for their jurisdiction analysis memo"
                - "List each filing with its authority and waiting period"
                - "Assign an owner for the turnover and market data each filing needs"
                - "Add each clearance window to the one-page timetable"
            - name: Weekly conditions status call and report
              description: |-
                ## Purpose
                Run to the same agenda each time, a short weekly call on the conditions tracker is what keeps a six-month closing period from drifting. Each owner gives the status of their conditions, blockers are named, and a one-page report goes to the client and deal team the same afternoon so nobody learns about a delay from the counterparty.

                ## Milestones
                1. A fixed thirty-minute weekly slot accepted by every workstream owner.
                2. A standing agenda covering conditions, filings, consents, financing and open issues.
                3. A one-page status report sent within two hours of each call.
                4. Actions from the previous week reviewed at the start of each call.

                ## Notes
                Start from the **Meeting notes** template for the call record. Keep the call to status and blockers; detailed drafting belongs in separate sessions.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly conditions call held with every owner and a written status report sent the same day, every week until closing."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute conditions call with all workstream owners"
                - "Send the one-page conditions status report after the call @recurring(weekly:mon)"
                - "Chase each owner with an overdue action by name @recurring(weekly:thu)"
                - "Update the conditions tracker with any new evidence received"
            - name: Regulatory filing deadlines and questions tracker
              description: |-
                ## Purpose
                Once filings are in, regulators send information requests with short deadlines, and a missed one can stop the clock or restart it. Tracking every request, its due date, who is drafting the answer and which data the bank must supply means the client's busiest people are never surprised by a regulator's deadline.

                ## Milestones
                1. Every filing date and statutory clock date logged per authority.
                2. Each information request recorded with its due date and drafting owner.
                3. Bank-supplied data answers checked against the model before release.
                4. A clearance or decision date recorded for each authority as it arrives.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker showing every filing, clock date and regulator request with owner and due date, updated weekly until clearances are received."
                cadence: rolling
              tasks:
                - "Log each filing date and the authority's clock start in the tracker"
                - "Review regulator requests and due dates with filings counsel @recurring(weekly:tue)"
                - "Check any data the bank supplies against the latest model"
                - "Record each clearance letter with its date and any conditions"
            - name: Interim covenant consent request log
              description: |-
                ## Purpose
                Consent requests from the seller to the buyer during the interim period often come in a rush: a customer contract renewal, a capital project, a key hire. A log of every request, the date sent, the buyer's answer and any conditions attached protects the client if there is later an argument about whether it ran the business properly.

                ## Milestones
                1. A log with every consent request, date, description and the buyer's response.
                2. Each request checked against the covenant summary before sending.
                3. Buyer responses saved as written confirmations, not just call notes.
                4. A clean log handed to counsel before the closing bring-down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A consent log in which every request has a date, description and written buyer response, reviewed weekly until closing."
                cadence: rolling
              tasks:
                - "Set up the consent log with columns for date, request and response"
                - "Review new and outstanding consent requests with the client @recurring(weekly:wed)"
                - "Save each written buyer consent alongside its log entry"
                - "Send the full log to counsel before the closing bring-down"
            - name: Final fortnight closing checklist turns
              description: |-
                ## Purpose
                In the last two weeks the closing checklist changes daily as signature pages arrive and documents go final, and a stale version circulating on closing morning causes real confusion. Turning the checklist every day, with changes marked and open items at the top, keeps the working group focused on the twenty items that still matter.

                ## Milestones
                1. A daily checklist turn agreed with counsel for the final two weeks.
                2. Each turn showing changes since the last version and open items first.
                3. Every outstanding item with a named chaser and expected time of delivery.
                4. A final checklist with every line marked complete or waived before release of funds.

                ## Notes
                Agree who holds the pen. Two versions of the checklist, one from the bank and one from counsel, is worse than either alone.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A closing checklist turned and circulated every working day in the final fortnight, with no open line at release of funds."
                cadence: rolling
              tasks:
                - "Agree with counsel who holds the pen on the closing checklist"
                - "Circulate the turned closing checklist with changes marked @recurring(daily)"
                - "Move open items to the top with a named chaser for each"
                - "Confirm every line is complete or waived before funds are released"
            - name: Funds flow version control and reconciliation
              description: |-
                ## Purpose
                The funds flow memo turns the purchase price into individual wires: debt payoffs, transaction fees, escrow deposits, seller proceeds and taxes. Every change to the payoff letters, fee invoices or working capital estimate must flow through, and reconciling it weekly to the model and the agreement stops a figure from one version surviving into the next.

                ## Milestones
                1. A single funds flow master with version numbers and a change log.
                2. Every line tied to a source document such as a payoff letter or invoice.
                3. Sources equal to uses, checked each time the funds flow changes.
                4. The funds flow reconciled to the purchase price mechanics in the agreement.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A version-controlled funds flow where every line ties to a source document and sources equal uses on each version."
                cadence: rolling
              tasks:
                - "Set up the funds flow master with a version number and change log"
                - "Reconcile the funds flow to the latest model and payoff letters @recurring(weekly:fri)"
                - "Link each funds flow line to its source document"
                - "Check that total sources equal total uses after every change"
            - name: Leak and market monitoring before announcement
              description: |-
                ## Purpose
                Between signing and announcement, or announcement and closing, unusual share price moves or press stories can trigger disclosure duties or unsettle employees. A short daily check of the share price, news and trading volumes for the listed parties gives the team and compliance the earliest warning if something has leaked.

                ## Milestones
                1. The listed parties and their normal trading ranges noted.
                2. A daily check of price, volume and news run during the sensitive window.
                3. An agreed route to tell compliance and counsel if anything unusual appears.
                4. A holding statement drafted and approved in case of a leak.

                ## Notes
                This is a watch for the deal team. Any disclosure decision belongs to the client, its counsel and your compliance department.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily monitoring log for the sensitive window and an approved holding statement on file before announcement."
                cadence: rolling
              tasks:
                - "Note the normal trading range for each listed party to the deal"
                - "Check share price, volume and news for the listed parties @recurring(daily)"
                - "Agree with compliance how unusual moves will be reported"
                - "Ask counsel to approve a holding statement for a leak"
            - name: Client board and management updates during the interim period
              description: |-
                ## Purpose
                Boards sign off a deal and then hear nothing for six weeks, which is exactly when questions about regulators or the share price start. Sending a short weekly note to the client deal lead and a monthly written update suitable for the board keeps confidence high and saves the bank from repeating the same briefing five times.

                ## Milestones
                1. A weekly note format agreed with the client's deal lead.
                2. A monthly board update covering conditions, filings, risks and the closing date.
                3. Every update consistent with the conditions tracker and timetable.
                4. Questions from the board logged with answers sent within two working days.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Weekly notes and a monthly board update sent through the interim period, each consistent with the tracker."
                cadence: rolling
              tasks:
                - "Agree the weekly note format with the client's deal lead"
                - "Send the client the weekly interim period note @recurring(weekly:thu)"
                - "Draft the monthly board update on conditions and timing @recurring(monthly:5)"
                - "Log board questions and send answers within two working days"
            - name: Third-party consents and change of control notices tracker
              description: |-
                ## Purpose
                Customer contracts, leases, licences and joint venture agreements often need the other side's consent or a notice on a change of control, and some of those are closing conditions while others are just commercially important. Tracking each one, its deadline and the relationship owner prevents a key customer finding out about the sale from a letter they were never warned about.

                ## Milestones
                1. Every contract needing consent or notice listed, from the diligence findings and counsel.
                2. Each marked as a closing condition, a contractual duty or a relationship courtesy.
                3. An owner and a planned contact date for each counterparty.
                4. Signed consents saved and the tracker shown as complete before closing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A consents tracker covering every contract needing consent or notice, with owners and signed consents saved before closing."
                cadence: rolling
              tasks:
                - "Pull change of control contracts from the diligence report"
                - "Mark each one as condition, duty or courtesy with counsel"
                - "Review consent responses and chase outstanding counterparties @recurring(weekly:tue)"
                - "Save each signed consent with its tracker line"
            - name: Locked box leakage and completion accounts monitoring
              description: |-
                ## Purpose
                Under a locked box the seller promises no value leaves the business after the box date except permitted items, and under completion accounts the price moves with closing working capital and debt. Either way the bank should watch the monthly management accounts during the interim period so the client knows early whether the final price will hold.

                ## Milestones
                1. The price mechanism, permitted leakage and adjustment items summarised from the agreement.
                2. Monthly management accounts reviewed against the box date or the estimate.
                3. Any payment that might count as leakage flagged to counsel.
                4. An estimated closing price adjustment shared with the client before closing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly reviews of management accounts through the interim period, with an estimated price adjustment shared before closing."
                cadence: rolling
              tasks:
                - "Summarise the price mechanism and permitted leakage items"
                - "Review the latest management accounts against the price mechanism @recurring(monthly:12)"
                - "Flag any payment that might be leakage to counsel"
                - "Send the client an estimated closing price adjustment"
            - name: Open issues list with escalation thresholds
              description: |-
                ## Purpose
                Problems between signing and closing rarely arrive as one big crisis; they arrive as a regulator question, a lender comment and a missing consent in the same week. An open issues list with an agreed rule for when something goes to the managing director and the client's chief executive keeps small issues small and big ones visible.

                ## Milestones
                1. One open issues list with owner, impact on timing and status for each item.
                2. Escalation thresholds agreed, such as any risk to the closing date or the price.
                3. Each escalated issue recorded with the decision and the person who made it.
                4. Closed issues archived with the outcome noted.

                ## Notes
                Start from the **Risk register** template. A useful threshold is anything that could move the closing date by more than a week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An open issues list reviewed weekly, with agreed escalation thresholds and every escalation decision recorded."
                cadence: rolling
              tasks:
                - "Set up the open issues list with owner, timing impact and status"
                - "Agree escalation thresholds with your vice president and the client"
                - "Review the open issues list and escalate anything over threshold @recurring(weekly:mon)"
                - "Record each escalation decision and who made it"
            - name: Reading a purchase agreement for closing mechanics
              description: |-
                ## Purpose
                Juniors read the price and the parties, then stop, yet the closing mechanics sit in clauses about conditions, deliverables, completion, adjustments and termination. Learning to read an agreement for those clauses, and to explain each one in a sentence, makes you the person who can answer the client's question on a call instead of promising to come back.

                ## Milestones
                1. The conditions, conduct, completion, adjustment and termination clauses located in one signed agreement.
                2. A one-sentence plain summary written for each of those clauses.
                3. The summaries checked by an associate or counsel for accuracy.
                4. A personal reference sheet of where these clauses usually sit in an agreement.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Plain one-sentence summaries of every closing-related clause in one agreement, checked by an associate or counsel."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose a signed agreement from a closed deal you can study"
                - "Find the conditions, conduct, completion and termination clauses"
                - "Write a one-sentence plain summary for each clause"
                - "Ask an associate to check your summaries for accuracy"
            - name: Merger control and foreign investment filing basics
              description: |-
                ## Purpose
                Bankers are asked constantly when a deal will clear, and the honest answer depends on how filing thresholds, waiting periods and phase two reviews work. Learning the general shape of these regimes, enough to ask counsel the right questions and read their memo, makes timetable conversations with clients far more credible.

                ## Milestones
                1. The general difference between mandatory, voluntary and suspensory regimes understood.
                2. Typical phase one and phase two review stages described in your own words.
                3. Two published filing decisions from different authorities read and summarised.
                4. A list of questions to ask filings counsel at the start of every deal.

                ## Notes
                Thresholds and timelines change and differ by country. Always take the current position from filings counsel, not from memory.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note on how filing regimes and review phases work, plus a question list for filings counsel, reviewed by a senior."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read a competition authority's published guide to its review process"
                - "Summarise two published filing decisions in a page each"
                - "Write down how phase one and phase two reviews differ"
                - "Draft the questions you will ask filings counsel on your next deal"
            - name: Funds flow mechanics from sources and uses to wires
              description: |-
                ## Purpose
                On paper a funds flow looks like a simple table until you have to account for debt payoffs with daily interest, fees paid on behalf of the seller, escrow deposits and withholding. Building one end to end on a past deal, from sources and uses through to each wire with its payer, payee and timing, teaches the mechanics in a way no course does.

                ## Milestones
                1. A practice funds flow built from a closed deal's agreement and payoff letters.
                2. Every wire listed with payer, payee, amount, currency and timing.
                3. Daily interest on debt payoffs and fee gross-ups handled correctly.
                4. The practice funds flow reviewed by an associate who has closed a deal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice funds flow with every wire specified and sources equal to uses, reviewed by an experienced associate."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect the agreement, payoff letters and invoices from a closed deal"
                - "Build the sources and uses table for the practice funds flow"
                - "Turn each use into a wire line with payer, payee and timing"
                - "Ask an associate to review your practice funds flow"
            - name: Locked box versus completion accounts at closing
              description: |-
                ## Purpose
                The two main price mechanisms create very different work after signing: a locked box needs leakage monitoring and a fixed price, completion accounts need an estimate at closing and a true-up afterwards. Understanding both well enough to explain them to a client is basic equipment for anyone running a closing.

                ## Milestones
                1. The steps of each mechanism written out from signing to final settlement.
                2. The main risks of each mechanism for buyer and seller listed.
                3. One deal of each type studied, with its closing work compared.
                4. A one-page explainer you could send a client, checked by a senior.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page explainer comparing locked box and completion accounts closing work, checked by a senior banker."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write out the steps of a locked box from box date to closing"
                - "Write out the steps of completion accounts from estimate to true-up"
                - "Compare the closing work on one deal of each type"
                - "Draft a one-page client explainer and ask a senior to check it"
            - name: Working capital estimate and post-closing true-up
              description: |-
                ## Purpose
                Under completion accounts the buyer pays on an estimate at closing and the price is settled weeks later against actual working capital, net debt and cash. Preparing the estimate with the client, then tracking the buyer's draft completion statement, the dispute window and final payment, is where money is quietly gained or lost after everyone has celebrated.

                ## Milestones
                1. A closing estimate of working capital and net debt prepared using the agreement's definitions.
                2. The estimate reconciled to the reference or target working capital figure.
                3. The draft completion statement received and compared to the estimate line by line.
                4. Any disputed items listed with dates under the agreement's dispute process.
                5. Final settlement amount and payment date recorded.

                ## Notes
                Use the accounting policies and definitions in the agreement, not the company's usual reporting. Disputes almost always come from that gap.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A closing estimate, a line-by-line comparison to the completion statement and a recorded final settlement amount."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Extract the working capital and net debt definitions from the agreement"
                - "Prepare the closing estimate with the client's finance team"
                - "Compare the buyer's completion statement to the estimate line by line"
                - "Diary the dispute window dates from the agreement"
            - name: Material adverse change and bring-down standards
              description: |-
                ## Purpose
                At closing each party usually confirms that its warranties are still true to some standard and that no material adverse change has happened, and the precise wording decides how much room a nervous buyer has. Understanding how these clauses work in general, and what evidence the bring-down certificate rests on, helps the bank prepare a client for the closing week.

                ## Milestones
                1. The bring-down and material adverse change clauses located in a signed agreement.
                2. The difference between bring-down standards described in your own words.
                3. The evidence behind a bring-down certificate listed for a past deal.
                4. Your notes reviewed by counsel or a senior banker.

                ## Notes
                Whether something is a material adverse change is a legal question for counsel. The bank's role is gathering the facts and showing their financial effect.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes on bring-down and material adverse change mechanics from one agreement, reviewed by counsel or a senior."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the bring-down and material adverse change clauses in an agreement"
                - "Write how the bring-down standard works in plain words"
                - "List the evidence behind a bring-down certificate on a past deal"
                - "Ask a senior to review your notes"
            - name: Escrow, holdback and paying agent arrangements
              description: |-
                ## Purpose
                Part of the price is often held back in escrow for warranty claims or price adjustments, and on deals with many sellers a paying agent distributes proceeds. Understanding how escrow agreements, release conditions and paying agent onboarding work avoids the classic closing delay: an escrow account not open because know-your-customer checks started too late.

                ## Milestones
                1. The escrow or holdback terms in the agreement summarised, including release dates.
                2. The agent's onboarding and know-your-customer requirements listed with lead times.
                3. The escrow account opened and confirmed before the funds flow is final.
                4. Release dates for escrow funds added to the post-closing calendar.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An open escrow or paying agent account confirmed before the final funds flow, with release dates diarised."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Summarise the escrow or holdback terms and release dates"
                - "Ask the agent for its onboarding checklist and lead time"
                - "Track each party's know-your-customer submission to the agent"
                - "Add every escrow release date to the post-closing calendar"
            - name: Financing conditions and certain funds at closing
              description: |-
                ## Purpose
                Where a buyer is borrowing to pay, the closing depends on the lenders funding, and the lenders have their own conditions, deliverables and notice periods. Learning how certain funds provisions, drawdown notices and lender conditions line up with the purchase agreement lets the seller's or buyer's bank spot a mismatch before it threatens closing day.

                ## Milestones
                1. The lender conditions precedent listed beside the purchase agreement conditions.
                2. Drawdown notice periods mapped onto the closing timetable.
                3. Any mismatch between lender and purchase agreement conditions flagged to counsel.
                4. Confirmation from the lenders' agent of the funding timetable for closing day.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A side-by-side table of lender and purchase agreement conditions with drawdown timing mapped and mismatches flagged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask lenders' counsel for the list of conditions to drawdown"
                - "Set lender conditions beside the purchase agreement conditions"
                - "Map drawdown notice periods onto the closing timetable"
                - "Confirm the funding timetable with the lenders' agent"
            - name: Simultaneous or split signing and closing decision
              description: |-
                ## Purpose
                Some deals sign and close on the same day, others sign first and close months later once approvals arrive. The choice affects the risk each side carries, the need for interim covenants and how the price mechanism works, so laying out the options with counsel before signing gives the client a reasoned decision rather than a default.

                ## Milestones
                1. The approvals and consents that make a gap between signing and closing necessary listed with counsel.
                2. The risks of a gap for the client set out, such as market moves and business changes.
                3. The extra work each option creates estimated in weeks.
                4. The client's decision and reasons recorded.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of simultaneous and split closing for the deal, with the client's decision and reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask counsel which approvals prevent a simultaneous signing and closing"
                - "List the risks a gap creates for the client"
                - "Estimate the timeline under each option"
                - "Record the client's choice and reasons in the deal file"
            - name: Choosing the closing date around month-end
              description: |-
                ## Purpose
                Month-end closings make completion accounts, payroll cutover and the buyer's first reporting period much simpler, while a mid-month closing can create a messy stub period. Weighing the accounting, banking and tax-calendar effects with the client's finance team, and checking bank holidays in every payment currency, picks a date that works for everyone after the event too.

                ## Milestones
                1. Finance teams on both sides asked for their preferred closing dates and why.
                2. Bank holidays checked for every currency in the funds flow.
                3. The effect of each candidate date on completion accounts and reporting noted.
                4. A target closing date and a fallback date agreed.

                ## Notes
                Tax effects of a closing date are for the client's tax advisers. Ask them before the date is fixed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target and fallback closing date agreed by both finance teams, with bank holidays checked in each payment currency."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask both finance teams for preferred closing dates"
                - "Check bank holidays in every currency on the funds flow"
                - "Ask the client's tax advisers about the candidate dates"
                - "Confirm a target and fallback closing date in writing"
            - name: Selecting an escrow or paying agent
              description: |-
                ## Purpose
                Escrow and paying agents differ on fees, onboarding speed, investment of held funds and how easily they handle many recipients. Comparing two or three on the same criteria, early enough that onboarding is not on the critical path, is an easy win for a bank running the closing.

                ## Milestones
                1. Two or three agents asked for terms on the same brief.
                2. Fees, onboarding lead time and release mechanics compared in one table.
                3. The client's and counterparty's preferred agent agreed.
                4. Engagement terms signed and onboarding started.

                ## Notes
                Start from the **Vendor** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of at least two agents on fees, lead time and mechanics, with the chosen agent engaged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-paragraph brief describing the escrow or paying need"
                - "Request terms from two or three agents"
                - "Compare fees, lead times and release mechanics in a table"
                - "Confirm the chosen agent with both parties"
            - name: Electronic signing and virtual closing set-up
              description: |-
                ## Purpose
                Most closings now happen without anyone in the same room, using electronic signatures, pre-signed pages held in escrow and a release call. Agreeing early which documents can be signed electronically, which need wet ink or a witness and how release will be confirmed avoids a courier dash on closing morning.

                ## Milestones
                1. Each closing document marked electronic, wet ink or witnessed, as advised by counsel.
                2. The electronic signing platform and signatory email addresses confirmed.
                3. A signature page escrow and release procedure agreed in writing.
                4. A test signature run completed with every signatory.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signing method recorded for every closing document and a test run completed with all signatories before closing week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask counsel which documents need wet ink or witnesses"
                - "Confirm each signatory's email address for the signing platform"
                - "Agree the signature page release procedure in writing"
                - "Run a test signature with every signatory"
            - name: Remedy and condition impact analysis
              description: |-
                ## Purpose
                When a regulator signals concerns, the parties may offer to sell a business, license a brand or accept behavioural conditions to get clearance. The bank's job is to show what each possible remedy does to value, expected cost savings and the financing, so the client and counsel can weigh them with numbers rather than instinct.

                ## Milestones
                1. Each remedy under discussion described in a sentence with counsel's input.
                2. The effect of each remedy on value, cost savings and financing estimated.
                3. Any remedy that could breach a purchase agreement threshold flagged.
                4. A short paper presented to the client's deal committee.

                ## Notes
                The negotiating strategy with the regulator belongs to the client and counsel. Keep the bank's paper to the financial effects.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A paper quantifying the value, cost saving and financing effect of each remedy option, presented to the client."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask counsel for the list of remedies under discussion"
                - "Estimate the revenue and profit affected by each remedy"
                - "Check each remedy against thresholds in the agreement"
                - "Draft a short remedies paper for the client"
            - name: Long-stop extension negotiation preparation
              description: |-
                ## Purpose
                When clearances run late the long-stop date approaches and one side may want to walk or reprice while the other wants more time. Preparing early, with the realistic new timetable, the cost of delay to each side and what might be offered for an extension, lets the client negotiate from facts rather than a deadline panic.

                ## Milestones
                1. A realistic revised timetable based on counsel's view of outstanding approvals.
                2. The cost of delay to each party estimated.
                3. Options for the extension terms listed with counsel.
                4. A recommended approach agreed with the client before the counterparty is contacted.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A revised timetable, cost of delay estimate and agreed approach recorded before the extension is raised with the counterparty."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask counsel for a revised view of approval timing"
                - "Estimate the cost of delay to each party"
                - "List extension term options with counsel"
                - "Agree the approach with the client before contacting the counterparty"
            - name: Closing lessons log across deals
              description: |-
                ## Purpose
                Every closing teaches something: the overseas registry that took four weeks, the payoff letter that came in at midnight, the bank holiday nobody checked. Keeping a short log of what went wrong and what would be done differently, reviewed each quarter, turns those lessons into a personal playbook you bring to the next deal.

                ## Milestones
                1. A lessons log with date, deal codename, issue and lesson for each entry.
                2. A short debrief held within two weeks of each closing.
                3. Recurring lessons turned into items on your standard checklist.
                4. The log reviewed and pruned every quarter.

                ## Notes
                Use codenames and keep client details out. The log is about process, not confidential deal data.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A lessons log with an entry after every closing and at least one checklist change made from it each year."
                cadence: rolling
              tasks:
                - "Start a lessons log using deal codenames only"
                - "Hold a fifteen-minute debrief within two weeks of each closing"
                - "Add repeated lessons to your standard closing checklist"
                - "Review and prune the closing lessons log @recurring(quarterly)"
            - name: Signing day announcement and communications plan
              description: |-
                ## Purpose
                On signing day the press release, stock exchange notice, employee letter, customer note and investor call all have to go out in the right order and say the same thing. Preparing a communications plan with timings, approvers and distribution for each piece means the announcement goes out cleanly and nobody learns about the deal from the wrong source.

                ## Milestones
                1. Every announcement document listed with its audience, timing and approver.
                2. Drafts consistent with each other and with the signed agreement on price and timing.
                3. Release times checked against exchange rules by counsel.
                4. A minute-by-minute sequence for announcement day agreed with the client.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All signing day communications approved and released in the agreed sequence, with release times recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every announcement document with audience and approver"
                - "Check each draft for consistency on price and expected timing"
                - "Ask counsel to confirm release times against exchange rules"
                - "Agree the announcement day sequence with the client"
            - name: Shareholder approval meeting for the transaction
              description: |-
                ## Purpose
                Some deals need a shareholder vote before closing, with a circular, a notice period, proxy solicitation and a meeting. Working the timetable backwards from the latest meeting date, and supporting the client with the financial information and investor engagement, keeps the vote from becoming the condition that holds up closing.

                ## Milestones
                1. The shareholder approval requirement and notice period confirmed by counsel.
                2. A circular timetable worked backwards from the target meeting date.
                3. The financial sections of the circular checked against the model.
                4. Proxy results tracked in the final week and the meeting result recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A shareholder meeting held to the agreed timetable, with the circular's financial sections checked and the result recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask counsel to confirm the approval requirement and notice period"
                - "Build the circular timetable back from the target meeting date"
                - "Check the circular's financial sections against the model"
                - "Track proxy returns daily in the final week"
            - name: Pre-closing dry run and funds flow rehearsal
              description: |-
                ## Purpose
                Two or three days before closing, a dry run with every party walking through the sequence of signatures, releases, drawdowns and wires, finds the problems while there is still time to fix them. It is the single most useful hour in the closing period and the one most often skipped.

                ## Milestones
                1. A dry run call booked with counsel, lenders, agents and the client two to three days before closing.
                2. Every step of the closing sequence walked through in order.
                3. The final funds flow confirmed line by line by each paying party.
                4. Actions from the dry run closed before the closing day.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dry run held with all paying and signing parties, the funds flow confirmed line by line and every action closed before closing day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book the dry run call with every signing and paying party"
                - "Walk through the closing sequence step by step on the call"
                - "Confirm each funds flow line with the party paying it"
                - "Close every dry run action before closing day"
            - name: Closing day run-of-show
              description: |-
                ## Purpose
                Closing day has a strict order: final signatures released, conditions confirmed, lenders fund, wires go out, receipts confirmed, shares transfer and the announcement follows. A run-of-show with times, owners and a contact sheet keeps the team calm when a wire is sitting in a correspondent bank at four in the afternoon.

                ## Milestones
                1. A run-of-show with each step, owner, expected time and dependency.
                2. A contact sheet with mobile numbers for every person needed on the day.
                3. Payment cut-off times confirmed for every bank and currency.
                4. Receipt of every wire confirmed and logged before closing is declared.

                ## Notes
                Start from the **Operational checklist** template. Build in a buffer before the earliest payment cut-off.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Closing completed to a written run-of-show, with every wire receipt confirmed and logged before closing was declared."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the run-of-show with step, owner and expected time"
                - "Collect mobile numbers for everyone needed on closing day"
                - "Confirm payment cut-off times with every paying bank"
                - "Log each wire receipt confirmation as it arrives"
            - name: Closing announcement and post-closing notices
              description: |-
                ## Purpose
                Completion triggers a second round of communications: the completion announcement, exchange notices, regulator notifications, lender and customer letters and internal messages. Having them drafted, approved and ready to release within an hour of completion stops the story from leaking before the client tells it.

                ## Milestones
                1. Every completion communication drafted and approved before closing day.
                2. Post-closing notices to regulators and registries listed with deadlines by counsel.
                3. Completion announcement released within the agreed window after closing.
                4. Copies of every notice sent saved in the closing record.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The completion announcement and every post-closing notice released on time, with copies saved in the closing record."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft the completion announcement with the client's communications team"
                - "Ask counsel for post-closing filing and notice deadlines"
                - "Release the completion announcement in the agreed window"
                - "Save copies of each notice sent in the closing record"
            - name: First closing as an analyst
              description: |-
                ## Purpose
                An analyst's first closing is often the first time they see the money side of a deal, and the jobs are specific: turning the checklist, updating the funds flow, chasing signature pages and logging confirmations. Knowing what is expected, and asking for a short walk-through from someone who has done it, turns a confusing week into one you are trusted with next time.

                ## Milestones
                1. A thirty-minute walk-through of the closing process from an associate who has closed a deal.
                2. Your own tasks for the closing period written down and agreed.
                3. Each document you own checked twice before it is sent.
                4. A note of what you learned saved within a week of closing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Analyst closing tasks agreed in writing, delivered without errors and a learning note saved within a week of closing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask an associate for a thirty-minute closing walk-through"
                - "Write down the closing tasks you own and agree them"
                - "Check every document you send twice against the latest versions"
                - "Save a short note of what you learned after closing"
            - name: Associate owning the closing process
              description: |-
                ## Purpose
                On most deals the associate is the bank's day-to-day owner of the closing: running the weekly call, checking the analyst's funds flow and making sure the vice president hears about problems in time. Setting up your own weekly review of every tracker, with a fixed slot, is how an associate stops anything falling between workstreams.

                ## Milestones
                1. A list of every tracker you own: conditions, consents, filings, issues and funds flow.
                2. A fixed weekly slot for reviewing all of them in one sitting.
                3. Analyst work on the funds flow and checklist reviewed before it leaves the team.
                4. A weekly summary to the vice president of anything at risk.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly review of every closing tracker held and a risk summary sent to the vice president each week until closing."
                cadence: rolling
              tasks:
                - "List every closing tracker you are responsible for"
                - "Review every tracker and send the vice president a risk summary @recurring(weekly:wed)"
                - "Check analyst funds flow changes before they are circulated"
                - "Agree with the analyst who updates which tracker"
            - name: Vice president holding the closing timetable
              description: |-
                ## Purpose
                A vice president's job in the closing period is to keep the client's confidence, protect the timetable and decide which problems need the managing director. A weekly senior checkpoint with the client's deal lead, separate from the working-level call, is where that happens.

                ## Milestones
                1. A weekly senior checkpoint booked with the client's deal lead.
                2. Escalation calls to the managing director made only against the agreed thresholds.
                3. Resource on the deal team matched to the closing workload.
                4. A closing date the client believes in, reconfirmed each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly senior checkpoint held with the client through closing, with every managing director escalation recorded."
                cadence: rolling
              tasks:
                - "Book a weekly senior checkpoint with the client's deal lead"
                - "Hold the senior checkpoint and note decisions @recurring(weekly:thu)"
                - "Check the team's capacity against the closing workload"
                - "Record every escalation to the managing director"
            - name: Boutique closing with a two-person team
              description: |-
                ## Purpose
                At a boutique there may be no separate execution team, so the same two bankers who negotiated the deal also run the checklist, the funds flow and the client updates. Deciding what to own, what to ask counsel to run and what the client's finance team can carry keeps a small team from burning out or dropping something.

                ## Milestones
                1. Each closing workstream assigned to the bank, counsel or the client in writing.
                2. A realistic weekly time budget for the closing period.
                3. Templates for the checklist, funds flow and status report ready to reuse.
                4. Cover arranged for any planned absence before closing.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split of closing workstreams between bank, counsel and client, with a weekly time budget and absence cover."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every closing workstream and propose an owner for each"
                - "Agree with counsel which workstreams they will run"
                - "Estimate the weekly hours the closing will need"
                - "Arrange cover for any absence before closing"
            - name: Client-side deal lead through closing
              description: |-
                ## Purpose
                A corporate development lead or finance director at the client has to run the closing alongside their day job, keeping the business running and the board informed. A simple personal plan for the closing period, with what to delegate, what to sign and what to report, helps them use their advisers well instead of doing their work for them.

                ## Milestones
                1. The client lead's own closing tasks separated from those the advisers own.
                2. A monthly report to the chief executive and board agreed.
                3. Internal teams briefed on what they must deliver, such as payroll or systems cutover.
                4. A post-closing plan for the first hundred days handed to the operating team.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written split of client and adviser tasks, monthly board reports sent and a handover to the operating team at closing."
                cadence: rolling
              tasks:
                - "Write down which closing tasks you own and which advisers own"
                - "Send the chief executive a monthly closing status report @recurring(monthly:25)"
                - "Brief payroll, systems and treasury teams on their closing tasks"
                - "Hand the operating team a first hundred days plan at closing"
            - name: Handing over a deal between signing and closing
              description: |-
                ## Purpose
                Bankers rotate, take leave or move groups, and a deal in the interim period passed to someone new can lose months of context in a day. A written handover covering the trackers, open issues, relationships and the things nobody has written down protects the deal and your reputation.

                ## Milestones
                1. A handover note covering every tracker, open issue and key date.
                2. A list of contacts with a sentence on each relationship.
                3. A joint call with the client to introduce the new owner.
                4. The new owner's questions answered within a week of handover.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written handover note and an introduction call with the client completed, with the new owner's questions answered within a week."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to draft a handover note from the trackers and issues list"
                - "Add a sentence on each key contact and relationship"
                - "Hold a joint call with the client to introduce the new owner"
                - "Answer the new owner's follow-up questions within a week"
            - name: Public takeover completion through a scheme of arrangement
              description: |-
                ## Purpose
                Where a public company is acquired through a court-sanctioned scheme, the closing runs through shareholder meetings, a court hearing, the court order becoming effective and delisting, each on a tightly regulated timetable. Mapping that sequence with counsel, the registrar and the exchange is specialist work that rewards early planning.

                ## Milestones
                1. The scheme timetable from document posting to effective date agreed with counsel.
                2. Registrar, exchange and court steps listed with their lead times.
                3. Settlement of consideration to shareholders planned with the receiving agent.
                4. The effective date and delisting confirmed and recorded.

                ## Notes
                Scheme procedures differ by jurisdiction. Take every procedural step from counsel and the takeover rules that apply.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A scheme timetable agreed with counsel, registrar and exchange, with the effective date and settlement recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask counsel for the scheme timetable and court dates"
                - "List registrar and exchange steps with their lead times"
                - "Plan consideration settlement with the receiving agent"
                - "Record the effective date and delisting confirmation"
            - name: Multi-country closing with local transfer documents
              description: |-
                ## Purpose
                When a group sells businesses in several countries, each local entity may need its own transfer agreement, board approvals, registry filings and payment, sometimes closing on different days. A local closing grid by country keeps the global closing from being held up by one registry that only accepts originals.

                ## Milestones
                1. A grid of every country with its local transfer documents, approvals and filings.
                2. Local counsel confirmed for each country with their lead times.
                3. Any deferred local closings and their interim arrangements agreed.
                4. Local purchase price allocations reconciled to the global funds flow.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A local closing grid by country with documents, counsel and lead times, reconciled to the global funds flow."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build a grid of local transfer documents and approvals by country"
                - "Confirm local counsel and lead times for each country"
                - "List any deferred local closings and their interim arrangements"
                - "Reconcile local price allocations to the global funds flow"
            - name: Warranty and indemnity insurance at closing
              description: |-
                ## Purpose
                Many deals now rely on warranty and indemnity insurance, and the policy usually needs a no-claims declaration at closing as well as at signing, plus the premium paid on time. Keeping the insurer's closing requirements on the checklist avoids the uncomfortable discovery that cover depends on a document nobody signed.

                ## Milestones
                1. The policy's closing requirements listed from the broker's summary.
                2. The no-claims declaration drafted and its signatory confirmed.
                3. Premium payment added to the funds flow with the right payee details.
                4. Confirmation from the broker that cover is in place at closing.

                ## Notes
                Interpretation of the policy is for the broker and counsel. The bank's job is making sure the requirements are met and paid for.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every policy closing requirement met, premium paid through the funds flow and broker confirmation of cover saved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the broker for the policy's closing requirements"
                - "Add the no-claims declaration to the closing checklist"
                - "Put the premium payment on the funds flow"
                - "Save the broker's confirmation of cover at closing"
            - name: Contingency plan for a deal that fails to close
              description: |-
                ## Purpose
                Some signed deals never close: a regulator blocks them, financing collapses or the long-stop passes. A quiet contingency plan covering termination notices, break fee collection, announcements, employee messages and the seller's options afterwards means the client is not starting from nothing on the worst day of the deal.

                ## Milestones
                1. The scenarios that could stop closing listed with their likelihood, as seen by the deal team.
                2. Steps on termination, including notices and any fees, summarised with counsel.
                3. Draft holding communications for investors and employees prepared.
                4. A short note on the client's options after termination, such as re-running the sale.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A contingency plan covering termination steps, fees, communications and next options, reviewed with the client."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the scenarios that could stop the deal closing"
                - "Ask counsel to summarise termination steps and fee mechanics"
                - "Draft holding statements for investors and employees"
                - "Outline the client's options if the deal terminates"
---

# Signing to Closing Workstreams

Signing gets the champagne, but a deal is only done when the money moves and the shares change hands, and the weeks or months in between are where bankers quietly earn their fee. This area starts with foundations (a one-page timetable, the conditions precedent tracker, the closing checklist, owners, interim covenants, the long-stop map and payment verification), then the weekly machinery that keeps conditions, filings, consents and open issues moving, the skills behind funds flows, locked boxes, working capital true-ups and bring-downs, the decisions on closing structure and timing, the dated events from the signing announcement to closing day, variants for analysts, associates, vice presidents, boutique teams and client-side deal leads, and specialist closings for schemes, multi-country completions and deals that fail.

What repeats is a Monday conditions report and Thursday chase, Tuesday filing and consent reviews, a Wednesday covenant log check, a Friday funds flow reconciliation, daily checklist turns and leak checks in the final fortnight, and monthly leakage, long-stop and board updates. The **Operational checklist**, **Risk register**, **Meeting notes** and **Vendor** templates pair with the closing checklist and run-of-show, the open issues list, the weekly conditions call and choosing an escrow or paying agent. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
