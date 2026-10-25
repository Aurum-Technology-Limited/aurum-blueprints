---
id: investment-banking.coordinating-deal-advisers
name: Coordinating Deal Advisers
description: "The banker's control tower for a deal's other advisers: a working group list, clear scopes, a live workstream list, all-party calls that end in actions, disciplined document turns and adviser fees tracked against budget."
category: business
version: 1.0.0
tags: [investment-banking, coordinating-deal-advisers, knowledge-worker, analyst, associate, workstream-list, adviser-fees, deal-management]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - risk-register
    - vendor
    - operational-checklist
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Coordinating Deal Advisers
          description: "Coordinating lawyers, accountants and other advisers on a deal: workstream lists, all-party calls, document turns and tracking adviser fees."
          projects:
            - name: Deal working group list with every adviser
              description: |-
                ## Purpose
                Every all-party email, call invite and document circulation on a deal is only as good as the working group list behind it, and a stale list is how a draft reaches someone who has left the deal or misses the tax partner entirely. Building one list with every firm, role, email, mobile and out-of-hours cover in the first week gives the whole deal a single source of who is who.

                ## Milestones
                1. One working group list covering the client, the bank, each law firm, the accountants, tax advisers and every specialist adviser.
                2. Each person shown with firm, role, email, mobile and a named deputy for nights and weekends.
                3. The list circulated to all parties with a request to correct their own entries within two days.
                4. A dated master version saved in the deal folder with a change log.

                ## Notes
                Keep the client's internal team on the list but mark who may see which documents. On a sale, the buyer-side advisers belong on a separate list.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated working group list covering every firm on the deal, confirmed by each firm and saved as the master version."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull every adviser name and email from the engagement letters and kick-off invites"
                - "Add mobile numbers and a named out-of-hours deputy for each firm"
                - "Circulate the draft list and ask each firm to correct its own entries"
                - "Save the confirmed list as the dated master in the deal folder"
            - name: Adviser scope map showing who does what
              description: |-
                ## Purpose
                When two firms both think the other is reviewing the pension scheme, or both bill for the same tax structuring memo, the client pays twice or gets nothing. A one-page map of each adviser's agreed scope, drawn from their engagement letters, shows the gaps and overlaps before the first invoice and gives the deal team an answer when anyone asks who owns a question.

                ## Milestones
                1. Each adviser's scope summarised in two or three lines from its signed engagement letter.
                2. Every major deal topic (legal, financial, tax, commercial, IT, pensions, insurance, regulatory) matched to exactly one owning firm.
                3. Gaps and overlaps listed and raised with the client's deal lead.
                4. The agreed scope map shared with all advisers as the reference for who answers what.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page scope map assigning every deal topic to one adviser, with gaps and overlaps resolved by the client in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the deal topics that need an owner down one side of a page"
                - "Summarise each adviser's scope from its engagement letter"
                - "Mark every topic with no owner or with two owners"
                - "Take the gaps and overlaps to the client's deal lead for a decision"
            - name: Master workstream list with owners and dates
              description: |-
                ## Purpose
                Think of the workstream list as the deal's single table of every deliverable, owner and due date across all advisers, and on a well-run deal it is the first thing everyone opens on Monday. Setting it up properly at the start, with the timetable's key dates and each firm's deliverables, means progress is measured against the same list rather than against everyone's memory.

                ## Milestones
                1. A workstream list grouped by legal, financial, tax, commercial, regulatory and process items.
                2. Every line with one named owner, a due date and a status from an agreed short set.
                3. Dependencies between items marked, such as tax structuring before the share purchase agreement draft.
                4. The first version reviewed by your vice president and sent to the working group.

                ## Notes
                Keep statuses to four or five words that mean the same thing to everyone, such as not started, in progress, with client, done. Colour without a key confuses people.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A workstream list with one owner, date and status for every deliverable, circulated to the working group."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Copy the key dates from the deal timetable into a new workstream list"
                - "Add each adviser's deliverables with one named owner per line"
                - "Mark the items that cannot start until another item finishes"
                - "Send the first version to your vice president for review"
            - name: Engagement letter check for each adviser
              description: |-
                ## Purpose
                The client engages its lawyers and accountants directly, but the bank is often asked whether the scope, fee basis, caps and reliance terms make sense for the deal. Reading each letter against the scope map before work starts catches the missing workstream, the uncapped hourly rate or the reliance clause that will block a lender later.

                ## Milestones
                1. Every adviser engagement letter collected in signed or near-final form.
                2. Scope, fee basis, cap, expenses policy, liability cap and reliance terms noted for each in one table.
                3. Points that look inconsistent with the scope map or the deal budget raised with the client.
                4. The client's decision on each point recorded, with any revised letter filed.

                ## Notes
                The bank comments as adviser to the client and does not negotiate another firm's letter on its behalf. Legal terms in the letters are for the client's general counsel to judge.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of every adviser's scope and fee terms, with each issue raised and the client's decision recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the client's deal lead for every signed or draft adviser engagement letter"
                - "Note scope, fee basis, caps and reliance terms for each in one table"
                - "Flag any letter that conflicts with the scope map or the budget"
                - "Record the client's decision on each flagged point"
            - name: Adviser fee budget by firm and phase
              description: |-
                ## Purpose
                Clients judge a deal partly on what it cost, and adviser fees can easily run to several percent of a mid-market deal value if nobody watches them. A budget split by firm and by phase (preparation, diligence, negotiation, signing, closing) gives the client a number to approve and gives the deal team an early warning when one firm runs hot.

                ## Milestones
                1. Each adviser's estimate collected and split across the phases of the deal.
                2. A total budget with a contingency line agreed with the client's finance lead.
                3. Fee bases noted for each firm: fixed, capped, hourly or success-linked.
                4. The approved budget saved as the baseline for monthly tracking.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A client-approved adviser fee budget by firm and phase, with contingency, saved as the tracking baseline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each adviser for a fee estimate split by deal phase"
                - "Add the estimates to one budget with a contingency line"
                - "Review the budget with the client's finance lead"
                - "Save the approved version as the baseline for tracking"
            - name: Document naming and version control protocol
              description: |-
                ## Purpose
                Deal documents pass through five or six firms, each with its own document management system and numbering, and nothing wastes a night like a team marking up version 7 when version 9 is live. A short protocol for file names, version numbers, blacklines against the last circulated draft and who holds the pen on each document prevents that from the first turn.

                ## Milestones
                1. A naming format agreed covering document, drafting firm, version and date.
                2. One named pen holder for each main document recorded in the workstream list.
                3. A rule that every circulated draft comes with a blackline against the last circulated version.
                4. The protocol sent to the working group and followed on the first document turn.

                ## Notes
                Lawyers will keep their internal document numbers, so put them in the file name rather than fighting them.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written naming and version protocol with a pen holder for each main document, circulated and used on the first turn."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a file naming format with document, firm, version and date"
                - "Agree the pen holder for each main document with deal counsel"
                - "Write the blackline rule into the protocol in one sentence"
                - "Send the protocol to the working group before the first turn"
            - name: Codenames and confidential distribution lists
              description: |-
                ## Purpose
                Using a deal codename in every subject line and a short set of distribution lists stops sensitive drafts going to people who should not see them, such as a target's management on a buy-side price discussion. Setting both up early is cheaper than recalling an email after it has been read.

                ## Milestones
                1. A codename for the deal and for each party agreed and used in all file names and subject lines.
                2. Separate distribution lists for the full working group, the core client team and the bank only.
                3. A rule for which list each document type goes to, written in the protocol.
                4. Every adviser confirmed as using the codenames in its own correspondence.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Codenames and three named distribution lists in use, with a written rule for which documents go to which list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree codenames for the deal and each party with your vice president"
                - "Set up full, core client and bank-only distribution lists"
                - "Write which document types go to which list"
                - "Ask each adviser to confirm it uses the codenames"
            - name: Conflict and independence confirmations from advisers
              description: |-
                ## Purpose
                Any law firm that acted for a bidder last year or an accounting firm that audits the target can create a conflict that surfaces at the worst moment, sometimes forcing a firm off the deal mid-process. Asking each adviser for written confirmation that it has cleared conflicts, and logging the answer, protects the client and the timetable.

                ## Milestones
                1. Each adviser asked in writing to confirm conflict clearance for this deal and these counterparties.
                2. Written confirmations filed for every firm.
                3. Any disclosed relationship or ethical wall noted and passed to the client's general counsel.
                4. A reminder set to recheck when new bidders or counterparties join.

                ## Notes
                Whether a disclosed relationship is acceptable is a call for the client and its lawyers, not the bank.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Written conflict confirmations from every adviser filed, with any disclosed relationship passed to the client's counsel."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Email each adviser asking for written conflict clearance on named parties"
                - "File each confirmation in the deal compliance folder"
                - "Pass any disclosed relationship to the client's general counsel"
                - "Recheck conflicts when a new counterparty enters the process"
            - name: All-party kick-off meeting
              description: |-
                ## Purpose
                The kick-off is the one meeting where every adviser hears the same timetable, scope boundaries, protocols and escalation route at the same time. Run well, it saves weeks of side emails; run as a round of introductions, it wastes the only moment everyone is paying attention.

                ## Milestones
                1. An agenda covering deal rationale, timetable, scope map, workstream list, protocols and fee reporting.
                2. Pre-reads sent two days ahead to the full working group.
                3. The meeting held with every firm represented by its lead.
                4. Actions and decisions circulated within 24 hours.

                ## Notes
                Start from the **Meeting notes** template. Ask the client's senior sponsor to open the meeting for five minutes: advisers take the timetable more seriously when the client says it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kick-off held with every firm's lead present and minutes with owners and dates circulated within one day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the kick-off agenda and agree it with your vice president"
                - "Send pre-reads to the working group two days ahead"
                - "Ask the client sponsor to open the meeting"
                - "Circulate actions and decisions the day after the meeting"
            - name: Weekly all-party call that ends in actions
              description: |-
                ## Purpose
                Most deals run on a weekly all-party call, and the difference between a useful one and an hour of status recitals is an agenda built from the workstream list and minutes that go out the same day. Running it to a fixed shape keeps every adviser honest about dates without the deal team chasing each firm separately.

                ## Milestones
                1. A standing slot and dial-in agreed with every firm.
                2. An agenda built from overdue and at-risk workstream items sent the day before.
                3. Minutes listing decisions and actions, each with owner and date, circulated the same day.
                4. Calls held to 45 minutes or less, with detailed topics moved to smaller calls.

                ## Notes
                Start from the **Meeting notes** template. Walk the agenda by exception: only items that are late, at risk or need a decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every weekly all-party call has an agenda sent the day before and minutes with owners and dates circulated the same day."
                cadence: rolling
              tasks:
                - "Book a standing weekly all-party slot with every firm"
                - "Send the exception-based agenda the day before the call @recurring(weekly:mon)"
                - "Circulate minutes with owners and dates the same day"
                - "Move any topic over ten minutes to a separate smaller call"
            - name: Workstream list refresh routine
              description: |-
                ## Purpose
                Updated only before the weekly call, a workstream list is wrong for six days out of seven. A fixed midweek refresh, where each owner confirms status and the deal team marks anything overdue, keeps the list trustworthy enough that seniors stop asking for separate updates.

                ## Milestones
                1. A weekly refresh day agreed and announced to the working group.
                2. Each owner confirming the status of their own lines by a set time.
                3. Overdue and at-risk items highlighted and sent to your vice president.
                4. A dated copy of each week's list kept so slippage can be shown later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The workstream list is refreshed every week with owner-confirmed statuses and a dated copy filed each time."
                cadence: rolling
              tasks:
                - "Ask each owner to confirm their workstream lines by midday @recurring(weekly:wed)"
                - "Highlight overdue and at-risk lines for your vice president"
                - "Save a dated copy of the week's list in the deal folder"
                - "Remove or merge lines that are duplicated or no longer relevant"
            - name: Document turn tracker for live drafts
              description: |-
                ## Purpose
                Any live deal may have a share purchase agreement, disclosure letter, tax deed, transitional services agreement and board papers all in turns between firms. A tracker showing which version is live, who holds the pen, who owes comments and by when stops documents sitting in an inbox for a week unnoticed.

                ## Milestones
                1. Every live document listed with current version, pen holder and comments owed.
                2. A target turnaround agreed for each document, such as 48 hours for comments.
                3. Any document that has not moved in five working days escalated.
                4. The tracker attached to the weekly all-party call agenda.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker shows the live version, pen holder and comments owed for every document, with stalled drafts escalated within five working days."
                cadence: rolling
              tasks:
                - "List every live draft with version, pen holder and comments owed"
                - "Agree a target turnaround for comments on each document"
                - "Check which drafts have not moved since the last check @recurring(weekly:tue,fri)"
                - "Escalate any document stalled for five working days"
            - name: Cross-adviser open issues list
              description: |-
                ## Purpose
                Issues raised in diligence, drafting and structuring often need two or three firms to resolve, and they fall through the gaps between the lawyers' issues list and the accountants' report. One open issues list across all advisers, with an owner and a proposed resolution for each, gives the client a single view of what could still move price or terms.

                ## Milestones
                1. Every open issue from diligence, drafting and structuring logged in one list.
                2. Each issue with a lead adviser, a proposed resolution route and a severity.
                3. Issues needing a client decision grouped for the client's deal lead.
                4. Closed issues marked with how they were resolved and in which document.

                ## Notes
                Start from the **Risk register** template. Severity should reflect value or deal certainty, not how loudly a firm raised it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One open issues list across all advisers, reviewed weekly, with every issue owned and every closed issue showing where it was resolved."
                cadence: rolling
              tasks:
                - "Copy open issues from each adviser's lists into one register"
                - "Assign a lead adviser and severity to each issue"
                - "Review the list and send client decisions needed to the deal lead @recurring(weekly:thu)"
                - "Record the document and clause where each closed issue was resolved"
            - name: Adviser fee accrual and invoice tracker
              description: |-
                ## Purpose
                Fee overruns are rarely a surprise to the adviser, only to the client, because nobody asked for work in progress figures until the final bill. A monthly request for accrued fees from each firm, set against the approved budget, turns a closing argument into a series of small conversations.

                ## Milestones
                1. Each firm asked for a monthly figure for fees accrued but not yet billed.
                2. Accruals and invoices entered against the budget by firm and phase.
                3. Any firm above 80 percent of its phase budget flagged to the client.
                4. Invoices matched to engagement letter terms before the client pays.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly accruals and invoices for every adviser recorded against budget, with any firm above 80 percent of a phase budget flagged."
                cadence: rolling
              tasks:
                - "Ask each adviser for fees accrued to date @recurring(monthly:12)"
                - "Enter accruals and invoices against the budget by phase"
                - "Flag any firm above 80 percent of its phase budget"
                - "Check new invoices against engagement letter rates and caps"
            - name: Monthly adviser fee report to the client
              description: |-
                ## Purpose
                Finance directors on the client side want one page each month showing what every adviser has cost so far, what is forecast to completion and where the risk is. Sending it on a fixed date builds trust in the bank's grip on the deal and gives the client the material to push back on a firm early.

                ## Milestones
                1. A one-page fee report format agreed with the client's finance lead.
                2. Spend to date, forecast to completion and variance shown for each firm.
                3. A short comment on each variance above an agreed threshold.
                4. The report sent on the same day each month for the life of the deal.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-page fee report with spend, forecast and variance for every adviser is sent to the client on the same day each month."
                cadence: rolling
              tasks:
                - "Agree the one-page fee report layout with the client's finance lead"
                - "Send the monthly fee report to the client @recurring(monthly:26)"
                - "Write one line explaining each variance above the threshold"
                - "File each month's report beside the budget baseline"
            - name: Information request list across diligence advisers
              description: |-
                ## Purpose
                Financial, tax, legal and commercial advisers each send their own request lists, and a client's finance team that receives the same question four ways stops answering any of them. Merging requests into one numbered list with one owner per question cuts the load on management and makes response times measurable.

                ## Milestones
                1. Every adviser's request list merged into one numbered list.
                2. Duplicate and overlapping questions combined, with the requesting firms noted.
                3. One client owner and target date set for each request.
                4. A weekly response rate reported to the deal team.

                ## Notes
                On a sale, this list sits upstream of the data room Q&A; keep it to preparation and vendor diligence requests.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A single merged request list with one owner per question and a weekly response rate reported to the deal team."
                cadence: rolling
              tasks:
                - "Collect every adviser's information request list in one folder"
                - "Ask the agent to merge the lists and flag duplicate questions"
                - "Assign a client owner and target date to each request"
                - "Chase client owners whose requests are overdue @recurring(weekly:tue)"
                - "Report the percentage of requests answered @recurring(weekly:fri)"
            - name: Consolidating client comments for advisers
              description: |-
                ## Purpose
                Clients often send comments on a draft from the chief executive, the finance director and the general counsel separately, sometimes contradicting each other. Consolidating them into one marked-up set, with conflicts resolved by the client before anything goes to the drafting firm, saves a turn and spares the lawyers from guessing.

                ## Milestones
                1. A rule agreed with the client that comments come through one person or are consolidated by the bank.
                2. A comment table recording who said what on each clause.
                3. Contradicting comments resolved by the client's deal lead in writing.
                4. One consolidated markup sent to the pen holder with the table attached.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every client markup reaches the drafting firm as one consolidated set, with contradictions resolved by the client beforehand."
                cadence: rolling
              tasks:
                - "Agree with the client who sends consolidated comments"
                - "Build a table of comments by clause and by commenter"
                - "Send contradicting comments to the client's deal lead to resolve"
                - "Pass one consolidated markup to the pen holder"
            - name: Adviser deliverables calendar
              description: |-
                ## Purpose
                Diligence reports, structure papers, draft agreements and board papers all have due dates, but they live in separate firms' plans. One calendar of every adviser deliverable for the next six weeks shows clashes, such as the red flag report landing the day the client's finance team is closing its year end.

                ## Milestones
                1. Every adviser deliverable for the next six weeks on one calendar view.
                2. Client review time blocked after each major deliverable.
                3. Clashes with client holidays, board dates and year end flagged.
                4. The calendar rolled forward each week and attached to the call pack.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A six-week calendar of all adviser deliverables with client review time and clashes marked, rolled forward weekly."
                cadence: rolling
              tasks:
                - "Put every adviser deliverable for the next six weeks on one calendar"
                - "Block client review time after each major report or draft"
                - "Mark clashes with client holidays, board dates and year end"
                - "Roll the calendar forward one week @recurring(weekly:mon)"
            - name: Reading an adviser engagement letter
              description: |-
                ## Purpose
                Junior bankers are asked to comment on law firm and accounting firm engagement letters without ever being shown what matters in one. Learning to read scope, exclusions, fee basis, caps, assumptions and reliance terms means you can spot the clause that will cause a fee dispute or block a lender from relying on a report.

                ## Milestones
                1. Three past engagement letters from different adviser types read with notes on each section.
                2. A one-page checklist of the terms a banker should check.
                3. The checklist reviewed by an associate or vice president.
                4. The checklist used on the next live letter.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reviewed one-page engagement letter checklist, used on at least one live adviser letter."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find three past adviser engagement letters in the precedent bank"
                - "Note scope, exclusions, fee basis, caps and reliance terms in each"
                - "Write a one-page checklist of terms to check"
                - "Ask an associate to review the checklist"
            - name: Legal workstreams on an M&A deal
              description: |-
                ## Purpose
                Bankers who know what the lawyers are actually doing (legal diligence, the purchase agreement, disclosure, ancillary agreements, regulatory filings, employment and pensions) can ask better questions and spot when a workstream is behind. A short study of the legal side, built around a real precedent deal, closes that gap.

                ## Milestones
                1. The main legal workstreams of a precedent deal listed with what each produces.
                2. The order in which those documents usually get drafted and agreed written down.
                3. Questions about the legal process put to deal counsel on a live deal.
                4. A one-page note filed for the next junior on the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note of legal workstreams and their order on an M&A deal, checked with deal counsel."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick a closed precedent deal and open its legal document list"
                - "List each legal workstream and the document it produces"
                - "Ask deal counsel to walk you through their usual drafting order"
                - "Write a one-page note and save it in the team's training folder"
            - name: Financial and tax due diligence scopes
              description: |-
                ## Purpose
                Quality of earnings, net debt, working capital, tax exposures and structuring are all accounting adviser territory, and the bank's valuation depends on what they find. Understanding what a financial and tax diligence scope normally covers, and what it excludes, lets you check the scope letter and use the report properly.

                ## Milestones
                1. Two past financial diligence reports read with notes on each section.
                2. A list of what was in and out of scope for each.
                3. The link between each section and a banker's valuation or price adjustment written down.
                4. Questions on a live scope discussed with the accounting adviser's manager.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes linking each section of a financial and tax diligence scope to a valuation or price point, discussed with an accounting adviser."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the contents pages of two past financial diligence reports"
                - "List what each report covered and excluded"
                - "Note how each section feeds valuation or price adjustments"
                - "Ask the accounting adviser's manager three questions on the live scope"
            - name: Running an efficient all-party call
              description: |-
                ## Purpose
                Chairing a call with twenty people from six firms is a skill: keeping senior lawyers to time, moving detail offline and getting a clear owner for every action without sounding junior. Practising it deliberately, with feedback, turns a dreaded hour into the meeting that makes you visible to the client.

                ## Milestones
                1. Three calls chaired with a written agenda and a hard stop.
                2. Feedback asked from your vice president after each.
                3. Two specific habits changed, such as summarising each action aloud before moving on.
                4. A short personal chairing checklist written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three all-party calls chaired with senior feedback after each and a written chairing checklist."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your vice president if you can chair the next all-party call"
                - "Prepare a timed agenda with a hard stop"
                - "Read each action and owner aloud before moving on"
                - "Ask for two pieces of feedback after the call"
            - name: Reading blacklines and turning documents fast
              description: |-
                ## Purpose
                Once a draft comes back at 11pm with forty pages of changes, the banker's job is to spot what moved on price, structure, conditions and timetable and tell the client by morning. Learning to read a blackline quickly, separating commercial points from drafting, is one of the most valued habits on a deal team.

                ## Milestones
                1. A method for reading a blackline: price and payment first, then conditions, warranties, covenants and drafting.
                2. Two live blacklines summarised in a one-page commercial points note.
                3. Each note checked by your associate against the document.
                4. The method written down as a personal checklist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two blackline summaries checked by an associate and a written personal reading method."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the order in which you will read a blackline"
                - "Summarise the commercial changes in the next blackline in one page"
                - "Ask your associate to check the summary against the document"
                - "Keep the reading order as a checklist in your notes"
            - name: Reliance letters and hold-harmless letters
              description: |-
                ## Purpose
                Lenders, buyers and insurers often need to rely on diligence reports they did not commission, and access comes through reliance or hold-harmless letters with their own caps and conditions. Knowing how these letters work, and when to ask for them, prevents a financing being held up by a missing signature.

                ## Milestones
                1. The difference between a reliance letter and a hold-harmless or non-reliance letter written in plain words.
                2. The parties likely to need reliance on this deal listed.
                3. Each adviser's standard approach to reliance noted from its engagement letter.
                4. Requests for reliance raised early with the client and its counsel.

                ## Notes
                Liability terms in these letters are for the parties' lawyers to agree. The bank's role is to know who needs them and when.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note of which parties need reliance on which reports, with each request raised with the client before it delays the timetable."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a plain-words note on reliance versus hold-harmless letters"
                - "List the lenders, bidders and insurers who may need reliance"
                - "Check each adviser's engagement letter for its reliance terms"
                - "Raise reliance needs with the client's counsel"
            - name: Writing a clear adviser status email
              description: |-
                ## Purpose
                Often the weekly status email from the bank is what the client's chief executive actually reads, so it has to say what moved, what is late, what decisions are needed and what the next week holds, in under a page. Practising a fixed shape makes it fast to write and hard to misread.

                ## Milestones
                1. A fixed four-part structure agreed: progress, at risk, decisions needed, next week.
                2. Two status emails drafted and edited by your associate.
                3. A version under 300 words that still names owners and dates.
                4. The shape saved as a reusable draft.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reusable status email shape under 300 words, edited by an associate and used on two weeks of a live deal."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a status email in four parts from this week's workstream list"
                - "Cut the draft to under 300 words"
                - "Ask your associate to edit it before it goes"
                - "Save the shape as a reusable draft"
            - name: Working with specialist advisers
              description: |-
                ## Purpose
                Insurance brokers, pension actuaries, environmental consultants, IT and cyber reviewers, property surveyors and forensic accountants each work to their own timetable and language, and they are the advisers most often brought in late. Knowing what each does and how long it takes means they are booked before they become the critical path.

                ## Milestones
                1. A list of specialist advisers typically needed for this deal type, with what each delivers.
                2. Typical lead times for each noted from past deals or the advisers themselves.
                3. The specialists this deal needs agreed with the client.
                4. Each specialist added to the working group list and scope map.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of the specialist advisers this deal needs, with lead times, agreed with the client and added to the scope map."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the specialist advisers used on three past deals of this type"
                - "Note what each delivers and its usual lead time"
                - "Agree with the client which specialists this deal needs"
                - "Add each chosen specialist to the scope map"
            - name: Choosing a vendor due diligence provider
              description: |-
                ## Purpose
                On a sale, vendor due diligence can speed up bidders and protect value, but the choice of firm, scope and fee is the client's and the bank is expected to run a fair comparison. A short, structured selection with two or three firms quoting on the same scope gives the client a defensible choice in two weeks.

                ## Milestones
                1. A written scope covering financial, tax and any commercial or IT diligence needed.
                2. Two or three firms asked to propose against the same scope and timetable.
                3. Proposals compared on team, sector experience, fee, timetable and reliance terms.
                4. The client's choice recorded with the reasons.

                ## Notes
                Start from the **Vendor** template. Check that the chosen firm will give bidders and lenders reliance on acceptable terms before the client signs.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A vendor diligence provider chosen by the client from at least two proposals scored on the same criteria, with reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a one-page vendor diligence scope with the client"
                - "Invite two or three firms to propose against it"
                - "Score the proposals on team, experience, fee, timing and reliance"
                - "Record the client's choice and reasons"
            - name: Comparing adviser fee structures
              description: |-
                ## Purpose
                Fixed fees, capped fees, discounted hourly rates and fees with a success element each move risk between client and adviser differently, especially if the deal stalls or fails. Laying out what the client would pay under each structure in three scenarios (completes on time, completes late, aborts) makes the choice concrete.

                ## Milestones
                1. The fee structures on offer from each adviser listed.
                2. Cost under each structure estimated for completion on time, late completion and abort.
                3. The result presented to the client's finance lead on one page.
                4. The client's preferred structure for each adviser recorded.

                ## Notes
                Abort fees are where structures differ most. Ask every firm for its abort position in writing.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page comparison of each adviser's fee options across three deal outcomes, with the client's choice recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each adviser for its fee options including an abort position"
                - "Estimate the cost under each option in three deal outcomes"
                - "Summarise the comparison on one page for the finance lead"
                - "Record the structure the client chooses for each firm"
            - name: Removing duplicated scope between advisers
              description: |-
                ## Purpose
                Midway through a deal, the scope map often drifts: the commercial adviser starts reviewing customer contracts, the lawyers begin analysing working capital. Reviewing actual work against agreed scope at the halfway point stops double billing and conflicting conclusions in two reports.

                ## Milestones
                1. Each adviser's current work compared with the scope map.
                2. Overlaps listed with the cost and the risk of conflicting findings.
                3. The client agreeing which firm keeps each overlapping item.
                4. The revised scope map and any scope change letters filed.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A mid-deal scope review with every overlap allocated to one firm by the client and the scope map updated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each adviser for a short list of work in progress"
                - "Compare the lists with the agreed scope map"
                - "Take each overlap to the client with a recommended owner"
                - "Update the scope map and file any scope change letters"
            - name: Deciding when to bring in a W&I insurance broker
              description: |-
                ## Purpose
                Warranty and indemnity insurance can change how a purchase agreement is negotiated, but underwriters need diligence reports and drafts in time to quote, so a late broker means a squeezed timetable or a worse policy. Deciding early whether the deal will use it, and when the broker joins, keeps it from becoming the last item before signing.

                ## Milestones
                1. The client and its counsel asked whether W&I insurance is likely to be part of the deal.
                2. Broker lead times for quotes and underwriting noted.
                3. A date for the broker to join set in the workstream list.
                4. The broker added to the working group list and given access to the right reports.

                ## Notes
                Whether to insure, and on what terms, is for the client and its lawyers. The bank's job is the timetable and the information flow.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded client decision on W&I insurance with a broker join date in the workstream list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the client's counsel whether W&I insurance is likely on this deal"
                - "Ask a broker for typical quote and underwriting lead times"
                - "Set a broker join date in the workstream list"
                - "Add the broker to the working group list once engaged"
            - name: Moving document turns to a shared drafting platform
              description: |-
                ## Purpose
                Email turns with attachments create version chaos once more than three firms comment on a document. Moving the main agreements to a shared platform or a single document management workspace, with access controls, can cut a day off each turn, but only if every firm agrees and the client's confidentiality rules allow it.

                ## Milestones
                1. The current turn process mapped with time lost at each step.
                2. Platform options checked against the client's and the bank's confidentiality and compliance rules.
                3. All drafting firms agreeing to the switch and a cut-over date.
                4. The first document turned on the new platform without a version error.

                ## Notes
                Check with your compliance team before putting deal documents on any platform the bank has not approved.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded decision on the drafting platform, cleared by compliance, with the first document turned on it or the reason for staying on email."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Map the current email turn and where time is lost"
                - "Ask your compliance team which drafting platforms are approved"
                - "Agree a cut-over date with every drafting firm"
                - "Turn one document on the new platform and check for errors"
            - name: Escalating an underperforming adviser
              description: |-
                ## Purpose
                When one firm keeps missing dates or sends juniors to calls where partners are needed, the whole timetable suffers and the bank is blamed. A calm, documented escalation, first to the firm's lead partner and then through the client, fixes most problems without a public row.

                ## Milestones
                1. Missed dates and quality issues listed with evidence from the workstream list.
                2. A private conversation held between your vice president and the firm's lead partner.
                3. Agreed improvements and dates confirmed in writing.
                4. The client informed and the outcome recorded, including any change of team.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A documented escalation with agreed fixes and dates, and the client informed of the outcome."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the firm's missed dates and quality issues with evidence"
                - "Brief your vice president and ask them to call the lead partner"
                - "Confirm the agreed fixes and dates by email"
                - "Tell the client's deal lead what was agreed"
            - name: Handling an adviser fee overrun
              description: |-
                ## Purpose
                An adviser tells you it will exceed its cap because the deal ran two months longer than planned, and the client expects the bank to have a view. Separating genuine scope change from inefficiency, with the engagement letter and the workstream history in hand, gives the client a fair basis to agree or push back.

                ## Milestones
                1. The adviser's overrun request and reasons received in writing.
                2. The request compared with the engagement letter scope and the deal history.
                3. A short note to the client separating scope change, timetable delay and inefficiency.
                4. The client's decision and any revised fee terms filed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written note to the client on each fee overrun request, with the client's decision and any revised terms filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the adviser to put the overrun and its reasons in writing"
                - "Check the request against the engagement letter and deal history"
                - "Write a note separating scope change, delay and inefficiency"
                - "File the client's decision and any revised fee letter"
            - name: Diligence findings readout session
              description: |-
                ## Purpose
                Diligence reports land in a rush and clients rarely read all four hundred pages, so the readout where each adviser presents its key findings is where price and terms are really shaped. Organising it so every firm presents in the same format, with findings linked to valuation and the purchase agreement, makes it a decision meeting rather than a lecture.

                ## Milestones
                1. A readout date set after all main reports are due, with client decision-makers available.
                2. Each adviser asked for a five-slide summary in a common format.
                3. Findings mapped to price, structure, warranties or conditions in one table.
                4. The client's decisions on each key finding recorded after the session.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A readout held with every diligence adviser presenting in one format and the client's decisions on key findings recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Fix the readout date with the client's decision-makers"
                - "Send each adviser a common five-slide summary format"
                - "Map each finding to price, structure, warranties or conditions"
                - "Record the client's decision on each key finding"
            - name: SPA drafting session with both sides' counsel
              description: |-
                ## Purpose
                One full-day drafting session, with both legal teams and the commercial leads in one room or call, can close more points than a fortnight of email turns. Preparing the issues list, sequencing the agenda and making sure the right decision-makers attend is the bank's contribution.

                ## Milestones
                1. An issues list agreed with counsel, ordered by commercial importance.
                2. Attendees with authority to concede points confirmed on both sides.
                3. The session held with a running record of points agreed and open.
                4. A revised issues list and next draft date circulated the next morning.

                ## Notes
                Put price, payment mechanics and liability caps early in the day while senior people are fresh.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A drafting session held with decision-makers present and a revised issues list circulated the next morning."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the issues list and its order with deal counsel"
                - "Confirm attendees with authority to concede points"
                - "Keep a running record of points agreed and still open"
                - "Circulate the revised issues list the next morning"
            - name: Red flag findings briefing for the client board
              description: |-
                ## Purpose
                Boards approving a deal want to know what the advisers found and what has been done about it, without wading through reports. A short briefing paper and meeting, agreed with each adviser for accuracy, gives directors the comfort they need and protects the advisers from being misquoted.

                ## Milestones
                1. A briefing paper summarising red flag findings from each adviser and the mitigation for each.
                2. Each adviser confirming its section is accurate.
                3. The paper sent to the board secretary with the board pack deadline met.
                4. Board questions recorded and answered by the right adviser.

                ## Notes
                Start from the **Meeting notes** template for the board questions. Never paraphrase a legal or tax finding without the adviser's sign-off.
              priority: medium
              deadlineOffsetDays: 50
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A red flag briefing paper with every adviser's section signed off, delivered by the board pack deadline and board questions answered."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the board secretary for the board pack deadline"
                - "Draft a red flag summary with mitigation for each finding"
                - "Get each adviser to sign off its section"
                - "Log board questions and route each to the right adviser"
            - name: Signing week adviser run sheet
              description: |-
                ## Purpose
                Signing week compresses every adviser's last turns, sign-offs, board approvals and signature pages into a few days. A run sheet showing each document's final turn, approvals needed and who must be available when keeps signing night from turning into a hunt for a missing partner.

                ## Milestones
                1. Every document to be signed listed with final turn time, approver and signatory.
                2. Each adviser's availability, including evenings, confirmed for the week.
                3. Signature page process agreed with counsel.
                4. Signing held on the planned day with no document missing.

                ## Notes
                Start from the **Operational checklist** template. Closing mechanics after signing belong in a separate closing checklist.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signing week run sheet covering every document and approver, with signing completed on the planned day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every signing document with final turn time and signatory"
                - "Confirm each adviser's evening availability for signing week"
                - "Agree the signature page process with counsel"
                - "Run a daily signing week check with all firms @recurring(daily)"
            - name: Post-deal adviser debrief
              description: |-
                ## Purpose
                Lessons from a deal fade within a month, and the same coordination problems repeat with the same firms on the next one. A short debrief with the client and the advisers, covering what worked, what slipped and what each firm would do differently, feeds the bank's own adviser notes.

                ## Milestones
                1. A debrief held within four weeks of signing or closing.
                2. Three things that worked and three that did not recorded.
                3. Notes on each adviser's team, responsiveness and quality filed for future deals.
                4. One change to the bank's coordination templates made as a result.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A debrief held within four weeks of the deal with lessons recorded and one template change made."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a 45-minute debrief within four weeks of signing"
                - "Ask each firm for one thing that worked and one that did not"
                - "File notes on each adviser for future deals"
                - "Change one coordination template based on the debrief"
            - name: Final adviser fee reconciliation
              description: |-
                ## Purpose
                Deal completion brings the client a stack of final invoices, often with success fees, expenses and disbursements that were never in the budget. Reconciling each against its engagement letter and the approved budget before the client pays is the bank's last service on the coordination side.

                ## Milestones
                1. Final invoices from every adviser collected.
                2. Each invoice checked against engagement letter terms, caps and agreed overruns.
                3. Queries raised with firms and resolved in writing.
                4. A final fee summary against budget sent to the client's finance lead.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every final adviser invoice reconciled to its terms and a final fee summary against budget sent to the client."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask every adviser for its final invoice and expense detail"
                - "Check each invoice against terms, caps and agreed overruns"
                - "Raise any query with the firm in writing"
                - "Send the final fee summary against budget to the client"
            - name: Analyst's first deal as working group keeper
              description: |-
                ## Purpose
                First-year analysts usually inherit the working group list, the call invites and the minutes, and those jobs are judged harshly when they go wrong. Treating them as a small system, with a checklist and a daily ten-minute slot, turns a chore into a way of learning every workstream on the deal.

                ## Milestones
                1. A checklist of the analyst's coordination duties agreed with the associate.
                2. A daily ten-minute slot for list updates, invites and minutes.
                3. One month without a wrong recipient or missed invite.
                4. A note of what you learned about each workstream from the minutes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of coordination duties with no wrong recipient or missed invite, and a written note on each workstream."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your associate which coordination duties are yours"
                - "Block ten minutes each morning for list updates and invites @recurring(daily)"
                - "Check every external email's recipients against the distribution list"
                - "Write two lines on each workstream after each call"
            - name: Associate as day-to-day adviser coordinator
              description: |-
                ## Purpose
                Associates are usually the person other advisers call first, and the job is to keep the timetable moving without escalating everything to the vice president. Setting out how you will run the advisers (a weekly rhythm, decision rights, when to escalate) makes the role sustainable across two or three live deals.

                ## Milestones
                1. Decision rights agreed with your vice president: what you decide, what you flag.
                2. A weekly coordination rhythm written down and shared with the analyst.
                3. A direct relationship with each firm's day-to-day lead.
                4. One month in which no adviser goes above you without you knowing first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written decision rights and a weekly rhythm, with one month of coordination and no surprise escalations."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree with your vice president what you can decide alone"
                - "Write the weekly coordination rhythm and share it with the analyst"
                - "Have a short call with each firm's day-to-day lead"
                - "Send your vice president a Friday note of adviser issues @recurring(weekly:fri)"
            - name: Vice president managing senior adviser relationships
              description: |-
                ## Purpose
                At vice president level the coordination job shifts to the lead partners: agreeing positions before all-party calls, settling disputes between firms and keeping senior lawyers aligned with the client's priorities. Regular one-to-one contact with each lead partner prevents the friction that slows a deal in its last month.

                ## Milestones
                1. A short call with each adviser's lead partner every fortnight.
                2. Points of friction between firms resolved before they reach the client.
                3. Positions pre-agreed with counsel before each major negotiation.
                4. The client's sponsor told of any senior adviser issue within a day.

                ## Notes
                Start from the **Meeting notes** template to keep a short record of each partner call.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fortnightly calls held with every lead partner and each inter-firm dispute resolved or escalated to the client within a day."
                cadence: rolling
              tasks:
                - "List the lead partner at each adviser and their preferred contact time"
                - "Hold a short call with each lead partner @recurring(monthly:4)"
                - "Hold a second partner round mid-month @recurring(monthly:18)"
                - "Pre-agree positions with counsel before each negotiation session"
            - name: Boutique team coordinating with a small deal team
              description: |-
                ## Purpose
                In a boutique or regional bank, two bankers may coordinate the same number of advisers that a large bank staffs with five. Choosing what to delegate to deal counsel, what to keep and which tools to share keeps the coordination load from swallowing the actual advisory work.

                ## Milestones
                1. The coordination tasks listed and split between the bank, deal counsel and the client.
                2. Deal counsel agreeing to run the conditions and document lists.
                3. One shared workstream list used by all firms instead of separate ones.
                4. Weekly hours spent on coordination measured and below an agreed limit.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split of coordination tasks between bank, counsel and client, with weekly coordination hours tracked against a limit."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every coordination task the bank currently does"
                - "Ask deal counsel which lists they will run"
                - "Move every firm onto one shared workstream list"
                - "Record hours spent on coordination for two weeks"
            - name: Client-side deal lead running their own advisers
              description: |-
                ## Purpose
                Corporate development leads and finance directors on a deal without a bank, or with a bank on a narrow brief, have to coordinate lawyers and accountants personally while doing a day job. A lean set of tools (one adviser list, one workstream list, one weekly call, one fee tracker) gives control without a full deal team.

                ## Milestones
                1. One list of every adviser with scope and fee basis.
                2. A workstream list owned by you and updated weekly.
                3. A 30-minute weekly call with adviser leads.
                4. A fee tracker reviewed monthly with your finance team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An adviser list, weekly workstream list, weekly call and monthly fee tracker in place for the life of the deal."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every adviser on the deal with scope and fee basis"
                - "Set up a simple workstream list you will update yourself"
                - "Book a 30-minute weekly call with adviser leads"
                - "Review adviser fees with your finance team @recurring(monthly:20)"
            - name: Handing over deal coordination before leave
              description: |-
                ## Purpose
                Deals do not pause for holidays, illness or a parent's leave, and a handover written the night before leaving misses the side agreements and soft promises that matter. A one-page handover with live documents, open issues, adviser contacts and client sensitivities lets a colleague pick up without losing a week.

                ## Milestones
                1. A one-page handover covering live drafts, open issues, deadlines and adviser contacts.
                2. Client and adviser sensitivities written down plainly.
                3. A 30-minute walkthrough held with the colleague covering.
                4. Advisers and the client told who is covering and from when.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page handover walked through with the covering colleague, and every adviser told who is covering."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to draft a handover from the workstream and issues lists"
                - "Add client and adviser sensitivities in plain words"
                - "Walk your covering colleague through the handover"
                - "Email the working group with the cover arrangements"
            - name: Local counsel coordination across jurisdictions
              description: |-
                ## Purpose
                A deal touching five countries can have a lead law firm plus local counsel in each, all working on different holidays, time zones and drafting habits. Running local counsel through the lead firm, with one questionnaire and one reporting format, keeps the bank from managing twenty lawyers directly.

                ## Milestones
                1. Every jurisdiction listed with its local counsel and the lead firm's coordinating partner.
                2. One local diligence questionnaire and report format agreed by the lead firm.
                3. Local holidays and time zones shown on the deliverables calendar.
                4. Local reports received in the common format and summarised by the lead firm.

                ## Notes
                Regulatory approvals and foreign investment filings in each country are a separate workstream; this project is about running the advisers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Local counsel in every jurisdiction reporting in one format through the lead firm, with local calendars on the deliverables calendar."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List each jurisdiction with its local counsel"
                - "Ask the lead firm to issue one questionnaire and report format"
                - "Add local holidays and time zones to the deliverables calendar"
                - "Check each local report arrives in the common format"
            - name: Dual-track sale and IPO adviser coordination
              description: |-
                ## Purpose
                Running a dual track means running a sale process and an IPO preparation at the same time, which can double the advisers: reporting accountants and capital markets counsel alongside M&A counsel and diligence providers. Coordinating both tracks so documents and diligence are shared where possible saves the client months of duplicated work.

                ## Milestones
                1. A combined scope map covering advisers on both tracks.
                2. Diligence and documents that can serve both tracks identified and agreed.
                3. One workstream list with a track marker on each line.
                4. Fee budgets split by track so the client can see the cost of keeping both open.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A combined scope map, one workstream list marked by track and a fee budget split by track, agreed with the client."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map every adviser on the sale and IPO tracks on one page"
                - "Agree which diligence and documents can serve both tracks"
                - "Add a track marker to every workstream list line"
                - "Split the fee budget by track for the client"
            - name: Co-advising alongside another bank
              description: |-
                ## Purpose
                If a client appoints two banks, or a bank works with a regional partner firm, the advisers receive instructions from two places unless the banks agree who leads coordination. Settling roles, a single workstream list and a joint position before each all-party call avoids confusing the client and its lawyers.

                ## Milestones
                1. A written split of roles between the two banks agreed by both and the client.
                2. One bank named as lead coordinator for the other advisers.
                3. A short bank-only call before each all-party call.
                4. One workstream list and one set of minutes for the deal.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written role split between the co-advising banks, with one lead coordinator, one workstream list and one set of minutes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page role split between the two banks"
                - "Agree which bank coordinates the other advisers"
                - "Set a bank-only call before each all-party call"
                - "Merge any duplicate lists into one workstream list"
            - name: Adviser panel notes for future deals
              description: |-
                ## Purpose
                Over several deals a banker builds a feel for which partners answer at midnight, which accounting teams deliver on time and which specialists overpromise, but that knowledge usually stays in one head. A short, factual record per firm and partner, updated after each deal, makes future recommendations to clients faster and fairer.

                ## Milestones
                1. A note per adviser firm covering deal types, key people, timeliness and fee behaviour.
                2. Entries kept factual and tied to specific deals.
                3. The record updated after each deal debrief.
                4. The record used to shortlist advisers on the next mandate.

                ## Notes
                Keep the notes professional and factual: they may be read by colleagues and should never contain client confidential information.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A factual note per adviser firm, updated after each deal and used on at least one shortlist."
                cadence: cyclic
              tasks:
                - "Start a note for each adviser firm you worked with this year"
                - "Record key people, timeliness and fee behaviour per deal"
                - "Update the notes after each deal debrief"
                - "Review the notes before every new mandate @recurring(quarterly)"
            - name: Reusable deal coordination toolkit
              description: |-
                ## Purpose
                Experienced deal leads arrive at a kick-off with a working group list, workstream list, scope map, protocol, fee tracker and call agenda already built, and spend the first week on substance instead of formats. Turning the best versions from past deals into a clean, client-neutral toolkit is how a team makes good coordination the default.

                ## Milestones
                1. The best version of each coordination document chosen from past deals.
                2. All client and deal details removed.
                3. Short instructions added to each template.
                4. The toolkit shared with the team and used on the next new deal.

                ## Notes
                Strip every codename, client name and number before saving anything to a shared folder.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A client-neutral toolkit of at least six coordination templates, shared with the team and used on a new deal."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the best working group list, workstream list and scope map from past deals"
                - "Remove every client name, codename and figure"
                - "Add three lines of instructions to each template"
                - "Share the toolkit with your team"
---

# Coordinating Deal Advisers

On most deals the bank is the only party that sees every workstream at once, so the lawyers, accountants, tax advisers, brokers and specialists look to the deal team to say what is due, who owns it and what it is costing the client. This area starts with foundations (the working group list, a scope map of every adviser, the workstream list, engagement letter checks, a fee budget and a drafting protocol), then the weekly machinery of all-party calls, document turns, open issues and fee tracking, the skills behind reading engagement letters, legal and diligence scopes and blacklines, decisions on choosing and managing advisers, dated events from kick-off to the final fee reconciliation, variants for analysts, associates, vice presidents, boutique teams and client-side deal leads, and specialist coordination across jurisdictions, dual tracks and co-advising banks.

What repeats is a Monday all-party call, Tuesday and Friday document turn checks, a Wednesday workstream list refresh, a Thursday open issues review and mid-month and month-end fee updates to the client. The **Meeting notes**, **Risk register**, **Vendor** and **Operational checklist** templates pair with the all-party call, the cross-adviser issues list, choosing a diligence provider and signing week. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
