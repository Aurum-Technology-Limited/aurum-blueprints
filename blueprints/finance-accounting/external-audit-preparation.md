---
id: finance-accounting.external-audit-preparation
name: External Audit Preparation
description: "An agreed audit timetable, an owned PBC list, lead schedules and evidence kept ready all year, auditor requests handled fast, and adjustments, representations and findings closed out on time."
category: business
version: 1.0.0
tags: [finance-accounting, external-audit-preparation, enterprise, manager, nonprofit, pbc-list, audit-committee, audit-evidence]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - remediation-plan
    - vendor
    - operational-checklist
    - board-meeting
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: External Audit Preparation
          description: "Getting ready for the annual external audit: schedules, evidence, auditor requests and adjustments, so fieldwork runs smoothly for finance teams and boards."
          projects:
            - name: Audit timetable from year-end to signed opinion
              description: |-
                ## Purpose
                Auditors plan their staff months ahead, and an audit that slips past its slot can wait weeks for the team to come back. A single timetable running from year-end through interim work, fieldwork, clearance and signing, agreed with the audit partner, tells everyone in finance when their schedules are due and protects the filing deadline the law or your funders set.

                ## Milestones
                1. The financial year-end, filing deadline and board approval date written on one page.
                2. Interim, fieldwork and clearance meeting dates agreed in writing with the audit manager.
                3. An internal due date set for every schedule, at least five working days before fieldwork.
                4. The timetable shared with every finance team member and the audit committee chair.

                ## Notes
                Work backwards from the signing date, not forwards from year-end. Leave a buffer week before the board meeting for late adjustments.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page audit timetable with every phase dated, confirmed by email by the audit manager and circulated to the finance team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the year-end date, the statutory filing deadline and the board meeting date"
                - "Ask the audit manager for proposed interim, fieldwork and clearance dates"
                - "Set internal due dates for each schedule five working days before fieldwork"
                - "Send the agreed timetable to the finance team and the audit committee chair"
            - name: Engagement letter scope and responsibilities review
              description: |-
                ## Purpose
                Most disputes with auditors about fees and delays trace back to an engagement letter nobody in finance read closely. Going through it clause by clause shows exactly what the firm will audit, what management must provide, which reports are in scope, how overruns are billed and when the fee can change, so surprises are raised before signing rather than on the invoice.

                ## Milestones
                1. The engagement letter read in full and every obligation on management listed.
                2. Scope confirmed: entities, reporting framework, any grant or regulatory reports included.
                3. Fee basis, overrun terms and the triggers for extra fees noted in plain language.
                4. Questions resolved with the audit partner before the letter is signed by an authorised director.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed engagement letter on file with a one-page summary of scope, fees, overrun terms and management's obligations."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find this year's draft engagement letter and last year's signed copy"
                - "List every obligation the letter places on management and the board"
                - "Highlight clauses that let the firm charge extra for delays or extra work"
                - "Raise scope and fee questions with the audit partner before signing"
            - name: Prior year audit findings and adjustments recap
              description: |-
                ## Purpose
                Last year's audit is the best forecast of this one: the same balances tend to attract the same questions, and auditors check whether last year's points were fixed. Pulling together the management letter, the list of adjusted and unadjusted differences and the areas that took longest gives finance a short list of things to get right first.

                ## Milestones
                1. Last year's management letter, adjustments list and summary of unadjusted differences in one folder.
                2. Each finding marked as fixed, partly fixed or still open, with evidence for the fixed ones.
                3. The three balances that caused the most rework last year named.
                4. A short recap shared with the finance team before planning begins.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page recap listing every prior year finding and adjustment with its current status and the evidence that it is resolved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Retrieve last year's management letter and adjustments schedule from the audit file"
                - "Mark each prior finding as fixed, partly fixed or open"
                - "Ask the team which balances caused the most audit queries last year"
                - "Ask the agent to draft a one-page recap from the findings and statuses"
            - name: Audit evidence folder and naming convention
              description: |-
                ## Purpose
                Evidence emailed in pieces gets lost, sent twice or sent in the wrong version, and auditors then ask again. One shared folder or audit portal, structured by financial statement area with a fixed file naming rule and controlled access, means anyone in the team can find what was sent, when and by whom.

                ## Milestones
                1. One location chosen for all audit evidence: a shared drive folder or the firm's portal.
                2. Folders created per statement area, numbered to match the prepared-by-client list.
                3. A naming rule written down, for example request number, description and date.
                4. Access limited to named finance staff and the audit team, with payroll files restricted further.

                ## Notes
                If the firm uses a portal, mirror its request numbers in your own folder so you keep a copy after the portal closes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared audit folder with numbered sections, a written naming rule and an access list reviewed by the finance manager."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide whether evidence will live in a shared folder or the auditor's portal"
                - "Create one folder per financial statement area, numbered to match the request list"
                - "Write a one-line file naming rule and pin it in the top folder"
                - "Restrict payroll and personnel files to the people who need them"
            - name: Owned and dated prepared-by-client list
              description: |-
                ## Purpose
                A prepared-by-client list with no names against it is a wish list. Turning the auditor's request list into a tracker where every item has one owner, a due date and a status is the single biggest lever on how smoothly fieldwork runs, and it shows the audit manager on day one what is ready and what is coming.

                ## Milestones
                1. The auditor's full request list imported into a tracker with one row per item.
                2. Every item assigned to one named owner, not a team.
                3. A due date set for each item from the audit timetable.
                4. Status columns for not started, drafted, reviewed and sent in use.
                5. Items not applicable to the organisation agreed and closed with the auditor.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every request on the auditor's list has a single owner, a due date and a current status in one shared tracker."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the audit manager for this year's request list in spreadsheet form"
                - "Assign one named owner to each request"
                - "Set a due date for every item from the audit timetable"
                - "Agree with the auditor which requests do not apply and close them"
            - name: Single audit coordinator and request routing
              description: |-
                ## Purpose
                Requests that go straight to whoever the auditor met first produce duplicate answers, missed questions and staff interrupted all day. Naming one coordinator who receives every request, routes it to the owner and checks the reply before it goes back keeps answers consistent and gives the auditor one person to chase.

                ## Milestones
                1. One audit coordinator and one deputy named and introduced to the audit team.
                2. A rule agreed that all new requests come through the coordinator or the portal.
                3. A target response time agreed, for example two working days for standard requests.
                4. A review step in place so nothing reaches the auditor unchecked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The audit team has confirmed in writing one coordinator, one deputy and a response time target for requests."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name the audit coordinator and a deputy for absences"
                - "Email the audit manager the routing rule and the coordinator's details"
                - "Agree a standard response time for requests"
                - "Brief staff to redirect any direct auditor questions to the coordinator"
            - name: Trial balance to lead schedule mapping
              description: |-
                ## Purpose
                Lead schedules are the backbone of the audit file: each one ties a financial statement line to the trial balance and to the supporting reconciliations. Mapping every ledger account to a statement caption once, and building a lead schedule per caption with prior year comparatives, saves hours of reconciling during fieldwork and makes late journals easy to trace.

                ## Milestones
                1. Every trial balance account mapped to one financial statement caption.
                2. A lead schedule per caption showing current year, prior year and movement.
                3. Each lead schedule cross-referenced to its supporting reconciliation or listing.
                4. The mapping total agreed to the trial balance with zero difference.

                ## Notes
                Keep the mapping in a separate tab so new accounts opened during the year are caught as unmapped rather than silently dropped.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lead schedule workbook in which every trial balance account is mapped and the totals agree to the trial balance with no difference."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export the year-end trial balance with prior year comparatives"
                - "Map each account to a financial statement caption in a mapping tab"
                - "Build one lead schedule per caption with a reference to its support"
                - "Add a check cell that flags any unmapped account"
            - name: Understanding materiality and the auditor's risk focus
              description: |-
                ## Purpose
                Materiality decides how much the auditor tests and which errors they will ask you to correct, yet many finance teams never ask what it is. Learning how overall and performance materiality work, and which significant risks the firm has named for your organisation, tells you where to put preparation time and which small items not to agonise over.

                ## Milestones
                1. Overall materiality, performance materiality and the clearly trivial threshold explained in your own words.
                2. This year's figures and the benchmark used confirmed with the audit manager.
                3. The significant risks named in the audit plan listed, with the balances they affect.
                4. A note shared with the team on where preparation effort should go first.

                ## Notes
                Auditors may not share every figure, but most will explain the benchmark and the significant risks if asked at planning.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note stating this year's materiality basis and significant audit risks, confirmed with the audit manager and shared with the team."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a plain-language guide to overall and performance materiality"
                - "Ask the audit manager which benchmark and percentage they are using this year"
                - "List the significant risks from the audit plan beside the balances they touch"
                - "Write a half-page note for the team on where to focus"
            - name: Audit planning meeting with the engagement team
              description: |-
                ## Purpose
                The planning meeting is where scope, risks, timing and what the auditor needs are settled, and it is far cheaper to raise a new contract, system change or restructuring here than in week two of fieldwork. Going in with a list of the year's changes and coming out with written actions sets the whole audit up.

                ## Milestones
                1. A list of significant changes in the year sent to the auditor before the meeting.
                2. Scope, timetable, significant risks and the request list walked through in the meeting.
                3. Written actions with owners and dates circulated within two days.
                4. Any change to scope or fee confirmed in writing.

                ## Notes
                Start from the **Meeting notes** template. Include new systems, acquisitions, large contracts, restructures and key staff changes in the list of changes.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Planning meeting held, with notes and an action list sent to the audit team and finance within two working days."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List this year's significant changes in systems, contracts, people and structure"
                - "Send the list to the audit manager a week before the meeting"
                - "Hold the planning meeting and record actions with owners"
                - "Circulate the notes and confirm any scope change in writing"
            - name: Monthly audit-ready reconciliation archive
              description: |-
                ## Purpose
                Reconciliations prepared at month-end but not signed, dated and saved are the first thing auditors ask for and the hardest to recreate in March. Filing each signed balance sheet reconciliation into the audit folder every month means the year-end set is already complete and the auditor can see the review trail across the year.

                ## Milestones
                1. A list of balance sheet accounts that need a monthly reconciliation agreed.
                2. Each month's reconciliations saved with preparer and reviewer names and dates.
                3. Unreconciled differences and their explanations kept with the reconciliation.
                4. Twelve months of signed reconciliations in the folder at year-end.

                ## Notes
                The close itself belongs to your month-end routine. This project is about keeping the signed evidence where the auditor will look for it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Signed and dated reconciliations for every listed account and every month of the year are filed in the audit folder by year-end."
                cadence: rolling
              tasks:
                - "Agree the list of balance sheet accounts that need monthly reconciliations"
                - "Save each signed balance sheet reconciliation into the audit folder @recurring(monthly:8)"
                - "Note any unreconciled difference with its explanation on the reconciliation"
                - "Check reviewer sign-off is dated, not just initialled"
            - name: Quarterly balance sheet substantiation pack
              description: |-
                ## Purpose
                Quarter-end is a natural point to prove each material balance with third-party or system evidence, rather than leaving it all for year-end. A short pack of supporting documents for cash, receivables, payables, accruals and provisions each quarter shrinks the year-end request list and shows up problems while they are still small.

                ## Milestones
                1. The balances to substantiate each quarter chosen, using last year's materiality as a guide.
                2. Supporting evidence, such as statements, ageing reports and calculations, attached for each.
                3. Items over 90 days old or without support flagged for follow-up.
                4. Four quarterly packs on file by year-end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly substantiation packs on file, each covering every chosen balance with evidence and a list of followed-up exceptions."
                cadence: cyclic
              tasks:
                - "Choose the balance sheet lines to substantiate each quarter"
                - "Assemble the quarterly substantiation pack with evidence for each line @recurring(quarterly)"
                - "Flag balances without support or older than 90 days"
                - "Clear last quarter's flagged items before starting the next pack"
            - name: Weekly open request review during fieldwork
              description: |-
                ## Purpose
                During fieldwork, requests pile up faster than they are answered, and a backlog of small items can delay sign-off as surely as one big issue. A fixed weekly session with the audit senior to walk the open list, agree priorities and escalate blocked items keeps the audit on its timetable and stops surprises in the clearance meeting.

                ## Milestones
                1. A standing weekly slot agreed with the audit senior for the fieldwork period.
                2. Open requests reviewed by owner, age and whether they block a conclusion.
                3. Items older than five working days escalated to the finance manager.
                4. A short weekly status note sent to the CFO or finance director.

                ## Notes
                Pause the recurring task outside the audit window rather than deleting it, so it comes back next year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "During fieldwork, a weekly request review is held every week, and no request is more than ten working days old at clearance."
                cadence: rolling
              tasks:
                - "Book a weekly half-hour slot with the audit senior for the fieldwork weeks"
                - "Walk the open request list with the audit senior @recurring(weekly:mon)"
                - "Escalate any request older than five working days to the finance manager"
                - "Send a three-line status note to the finance director after each review"
            - name: Significant transaction memos as they happen
              description: |-
                ## Purpose
                Unusual transactions, such as a big new contract, a disposal, a settlement or a restructuring, are where auditors spend their time, and reconstructing the reasoning months later is slow and unconvincing. A short memo written in the month it happens, with the documents attached and the accounting explained, turns a long audit conversation into a quick review.

                ## Milestones
                1. A definition of a significant transaction agreed, for example above a value threshold or outside normal trade.
                2. A one-page memo format with facts, documents, accounting treatment and approver.
                3. A memo written within the month for every qualifying transaction.
                4. All memos indexed in the audit folder before planning.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every transaction meeting the agreed threshold in the year has a dated memo with supporting documents in the audit folder."
                cadence: rolling
              tasks:
                - "Agree a value threshold and list of events that count as significant"
                - "Draft a one-page memo format with facts, treatment and approver"
                - "Check the month's activity for transactions needing a memo @recurring(monthly:15)"
                - "Index finished memos in the audit folder"
            - name: Board and committee minutes file for the auditor
              description: |-
                ## Purpose
                Auditors read every board and committee minute for the year and up to signing, looking for commitments, disputes and decisions that should be in the accounts. Collecting signed minutes each month, and noting anything with a financial consequence, means you have already spotted what the auditor will ask about.

                ## Milestones
                1. A list of the boards and committees whose minutes the auditor will want.
                2. Signed minutes for each meeting filed within a month of approval.
                3. A log noting any decision with an accounting effect and the action taken.
                4. The complete set available from year-start to the expected signing date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Signed minutes for every board and committee meeting in the year are filed, with a log of decisions that affect the accounts."
                cadence: rolling
              tasks:
                - "List every board, committee and subsidiary board whose minutes count"
                - "Ask the company secretary to send approved minutes as they are signed"
                - "File new minutes and log any decision with a financial effect @recurring(monthly:20)"
                - "Check the log against the ledger before year-end"
            - name: Contracts register for audit reading
              description: |-
                ## Purpose
                Contracts drive revenue terms, commitments, guarantees and penalties, and auditors routinely ask for the significant ones. A register of contracts above a set value, with key terms and a copy filed, lets finance answer in minutes and spot clauses with accounting consequences before the auditor does.

                ## Milestones
                1. A value threshold set for contracts that go on the register.
                2. Each contract listed with counterparty, value, term, renewal and unusual clauses.
                3. A signed copy of every listed contract filed.
                4. Clauses with accounting effect, such as guarantees or penalties, flagged to the finance manager.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A current contracts register covering every contract above the threshold, with signed copies filed and accounting-relevant clauses flagged."
                cadence: rolling
              tasks:
                - "Set the value threshold for contracts that need registering"
                - "Collect signed copies of current contracts above the threshold"
                - "Add new and renewed contracts to the register @recurring(quarterly)"
                - "Flag guarantees, penalties and onerous terms to the finance manager"
            - name: Accounting estimates and judgements log
              description: |-
                ## Purpose
                Estimates such as bad debt, warranty, holiday pay, stock obsolescence and provisions are where auditors push hardest, because they cannot be vouched to an invoice. A log that records each estimate's method, inputs, the person who approved it and how last year's estimate turned out gives the auditor what they need to assess it and shows the method is applied consistently.

                ## Milestones
                1. Every material estimate listed with its method and data source.
                2. Each estimate refreshed quarterly with inputs and approver recorded.
                3. Last year's estimates compared with what actually happened.
                4. Any change of method documented with a reason before year-end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An estimates log showing method, inputs, approver and a prior year outcome comparison for every material estimate."
                cadence: rolling
              tasks:
                - "List every material accounting estimate and how each is calculated"
                - "Update each estimate's inputs and approver in the log @recurring(quarterly)"
                - "Compare last year's estimates with the actual outcome"
                - "Write up the reason for any change in method"
            - name: Legal claims and contingencies log
              description: |-
                ## Purpose
                Lawsuits, threatened claims, regulatory investigations and guarantees can all need disclosure or a provision, and auditors confirm them directly with your lawyers. Keeping a log updated with in-house or external counsel each quarter means the legal confirmation letters hold no surprises and the provision decision is already reasoned.

                ## Milestones
                1. Every open or threatened claim, investigation and guarantee listed.
                2. Each item noted with counsel's assessment of likelihood and potential amount.
                3. The list of law firms used in the year ready for auditor confirmation letters.
                4. The accounting treatment of each item agreed and documented.

                ## Notes
                The assessment of likelihood is counsel's call, not finance's. Record their view and the date they gave it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A legal matters log updated with counsel each quarter, plus a list of law firms used in the year, ready for the auditor's confirmations."
                cadence: rolling
              tasks:
                - "List open and threatened claims, investigations and guarantees"
                - "Review the legal matters log with counsel @recurring(quarterly)"
                - "Compile a list of every law firm used during the year"
                - "Record the agreed accounting treatment for each matter"
            - name: Related party declarations and register
              description: |-
                ## Purpose
                Related party transactions must be disclosed, and auditors are required to look for ones management missed. An annual declaration from every director, trustee and senior manager, matched against the supplier and customer lists, catches the board member's family firm before the auditor does.

                ## Milestones
                1. A declaration form sent to every director, trustee and key manager.
                2. All declarations returned and filed.
                3. Declared entities matched against supplier, customer and grant recipient lists.
                4. Transactions with related parties listed with amounts and balances for disclosure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Signed declarations from every director and key manager on file, and a register of related party transactions with year-end balances."
                cadence: cyclic
              tasks:
                - "Draft a short related party declaration form"
                - "Send declarations to every director, trustee and key manager @recurring(yearly)"
                - "Match declared names against supplier and customer master files"
                - "List related party transactions and balances for the notes"
            - name: Post-audit debrief and next-year plan
              description: |-
                ## Purpose
                Within a few weeks of signing, everyone remembers what went wrong; by next autumn they do not. A short debrief with the finance team and then the audit manager, turned into a list of changes for next year, is how audits get faster and cheaper year after year.

                ## Milestones
                1. An internal debrief held within a month of signing.
                2. A debrief with the audit manager covering their view of what slowed the audit.
                3. Five or fewer changes agreed for next year, each with an owner.
                4. The changes added to next year's timetable and request tracker.

                ## Notes
                Start from the **Meeting notes** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written debrief with no more than five agreed changes for next year, each owned and dated in next year's timetable."
                cadence: cyclic
              tasks:
                - "Ask each team member for the three things that slowed the audit"
                - "Hold the post-audit debrief with finance and the audit manager @recurring(yearly)"
                - "Agree up to five changes for next year with owners"
                - "Add the changes to next year's timetable and tracker"
            - name: How auditors sample, vouch and trace
              description: |-
                ## Purpose
                Knowing what the auditor will do with your listing makes it obvious what evidence they will ask for next. Learning the basics of sampling, vouching from ledger to document, tracing from document to ledger, cut-off testing and substantive analytics lets finance staff prepare the right evidence first time instead of answering follow-up after follow-up.

                ## Milestones
                1. The difference between vouching and tracing explained with one example from your own ledger.
                2. How sample sizes relate to materiality and risk understood at a basic level.
                3. Cut-off testing walked through for sales and purchases around year-end.
                4. A one-page guide written for staff on what evidence each test needs.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page staff guide explaining vouching, tracing, sampling and cut-off, each with an example from the organisation's own records."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read an introductory guide to audit sampling and substantive testing"
                - "Pick one invoice and walk it from ledger to document and back"
                - "Walk through how sales cut-off is tested in the last week of the year"
                - "Write a one-page evidence guide for the team"
            - name: Reading audit opinions and key audit matters
              description: |-
                ## Purpose
                An audit report can be clean, carry an emphasis of matter, be qualified or carry a disclaimer, and the board needs to know what each would mean before the draft arrives. Learning to read the opinion, key audit matters and going concern wording, using published reports from comparable organisations, prepares finance to explain the draft calmly.

                ## Milestones
                1. The four main opinion types explained in plain language.
                2. Three published audit reports from comparable organisations read and annotated.
                3. Key audit matters and emphasis of matter paragraphs told apart.
                4. A short briefing note for the board on what to expect in this year's report.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A briefing note for the board explaining opinion types and key audit matters, drawing on three annotated published reports."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find three published audit reports from organisations similar to yours"
                - "Annotate each report's opinion, basis and key audit matters"
                - "Note how a qualified opinion differs from an emphasis of matter"
                - "Write a one-page board briefing on what this year's report may contain"
            - name: Writing accounting position papers auditors accept
              description: |-
                ## Purpose
                When a treatment needs judgement, a clear position paper settles it far faster than a chain of emails. Learning the structure auditors expect, with the facts, the relevant standard, the options considered, the conclusion and the effect on the numbers, makes your reasoning reviewable and keeps the decision on file for future years.

                ## Milestones
                1. A position paper structure agreed: facts, issue, guidance, options, conclusion, numbers.
                2. One real judgement from this year written up in that structure.
                3. The paper reviewed by the finance director and then shared with the auditor.
                4. Auditor feedback recorded and the template adjusted.

                ## Notes
                Quote the relevant paragraph of the accounting standard you rely on, and say which framework you report under.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One completed position paper on a real judgement, reviewed internally, shared with the auditor and their response recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick this year's most judgemental accounting treatment"
                - "Write the facts and the question in one paragraph each"
                - "Set out the options, the guidance relied on and the conclusion"
                - "Share the paper with the auditor and record their response"
            - name: Full-population ledger extracts and report evidence
              description: |-
                ## Purpose
                Many audit delays start with a listing that does not agree to the trial balance or a report the auditor cannot trust. Learning to produce full-population extracts with parameters shown, totals agreed to the ledger and a screenshot of how the report was run gives the auditor information they can rely on without asking for it to be re-run.

                ## Milestones
                1. The standard reports auditors request identified in your accounting system.
                2. Each report run with its parameters and run date captured.
                3. Every extract total agreed to the trial balance before it is sent.
                4. A short how-to saved so anyone in the team can reproduce each extract.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A how-to for each standard audit extract, and every extract sent this year agrees to the trial balance with its parameters shown."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the ledger reports auditors asked for last year"
                - "Run each report and capture the parameters and run date"
                - "Agree every extract total to the trial balance"
                - "Save a short how-to for reproducing each report"
            - name: Manual journal approval trail for journal testing
              description: |-
                ## Purpose
                Manual journals are tested every year because they are how errors and fraud reach the accounts, and auditors look for who posted, who approved and whether anything was posted at odd times or by unusual users. Keeping an approval trail and support for every manual journal makes that testing quick and clean.

                ## Milestones
                1. A rule agreed that every manual journal has support and a second-person approval.
                2. A monthly listing of manual journals with poster, approver and support reference.
                3. Journals posted by senior staff, at weekends or to unusual accounts reviewed each month.
                4. A full year of manual journal listings ready for the auditor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly manual journal listings on file, each showing poster, approver and support, with unusual entries reviewed and noted."
                cadence: rolling
              tasks:
                - "Confirm the ledger can report manual journals with user and posting date"
                - "Review the month's manual journals for approval and support @recurring(monthly:12)"
                - "Note any journal posted at weekends, by senior staff or to rarely used accounts"
                - "Save each month's reviewed listing in the audit folder"
            - name: Year-on-year analytical review explanations
              description: |-
                ## Purpose
                Every auditor runs analytics on the income statement and balance sheet and asks finance to explain the movements. Preparing those explanations yourself, line by line against a threshold, with real reasons rather than restating the numbers, answers most of the auditor's questions before they are asked.

                ## Milestones
                1. A threshold agreed for which movements need an explanation, in value and percentage.
                2. Each line over the threshold explained with a business reason and supporting figure.
                3. Explanations checked by someone outside finance where the reason is operational.
                4. The completed review sent to the auditor with the lead schedules.

                ## Notes
                An explanation that says costs rose because spending increased is not an explanation. Name the contract, headcount change or price rise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A flux analysis explaining every line over the agreed threshold with a specific business reason, sent with the lead schedules."
                cadence: rolling
              tasks:
                - "Agree the value and percentage threshold for movement explanations"
                - "Prepare a quarterly year-on-year movement review against the threshold @recurring(quarterly)"
                - "Ask budget holders for the business reason behind large operational movements"
                - "Send the year-end review to the auditor with the lead schedules"
            - name: Audit season briefing for the finance team
              description: |-
                ## Purpose
                Junior staff often meet auditors with no idea what they are allowed to send, who to ask or how long they have. A one-hour briefing before fieldwork covering the timetable, the coordinator, the folder, what good evidence looks like and what never to send without review makes the whole team quicker and calmer.

                ## Milestones
                1. A short briefing deck or one-page note prepared.
                2. Every finance team member and key budget holder briefed before fieldwork.
                3. Rules on confidential data, such as payroll, shared in writing.
                4. Questions from the briefing answered and added to the note.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every finance team member has attended a pre-fieldwork briefing and received the written note on audit routines and data rules."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to draft a one-page audit season briefing from the timetable and routing rules"
                - "Add rules on what may be sent without review and what may not"
                - "Run a one-hour briefing for finance and key budget holders"
                - "Update the note with questions raised in the session"
            - name: Root-cause review of last year's audit adjustments
              description: |-
                ## Purpose
                Adjustments proposed by the auditor are a sign the numbers were wrong when handed over, and repeated ones signal a process problem. Tracing each of last year's adjustments to its cause, whether a missed accrual, a cut-off error or a misunderstood standard, and fixing that cause is the most direct way to a cleaner audit.

                ## Milestones
                1. Every adjusted and unadjusted difference from last year listed with its value.
                2. A root cause recorded for each, in one of a few categories.
                3. A process change agreed for each cause that produced more than one adjustment.
                4. The changes tested in a quarter-end close before year-end.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every prior year adjustment has a recorded root cause, and each repeated cause has a process change tested at a quarter-end."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List last year's adjusted and unadjusted differences with values"
                - "Assign a root cause category to each adjustment"
                - "Agree a process change for each repeated cause"
                - "Test the changes at the next quarter-end close"
            - name: Management letter points remediation plan
              description: |-
                ## Purpose
                Management letter points that sit unfixed reappear every year, and boards and funders notice. Turning each point into an owned, dated action with evidence of completion, and reporting progress until it is closed, shows the auditor and the audit committee that findings are taken seriously.

                ## Milestones
                1. Every open management letter point entered as an action with owner and date.
                2. Management's response to each point agreed and recorded.
                3. Progress reviewed monthly until each point is closed.
                4. Evidence of each fix filed for the auditor's follow-up next year.

                ## Notes
                Start from the **Remediation plan** template. Agree realistic dates; a missed date reported honestly is better than a point marked closed without evidence.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every management letter point has an owner, a date and a recorded status, with closure evidence filed for each point marked fixed."
                cadence: rolling
              tasks:
                - "Copy each management letter point into the remediation plan"
                - "Agree an owner, a response and a target date for each point"
                - "Review remediation progress with owners @recurring(monthly:25)"
                - "File evidence of each fix before marking it closed"
            - name: Audit fee and overrun review
              description: |-
                ## Purpose
                Fees drift upward through overrun bills and scope creep that nobody challenged at the time. Comparing this year's fee with the engagement letter, the hours the firm reports and the delays finance caused separates what you should fix internally from what you should discuss with the partner.

                ## Milestones
                1. The final fee compared with the engagement letter and last year's fee.
                2. Each overrun charge linked to its stated cause.
                3. Overruns caused by finance delays separated from scope or firm-side causes.
                4. A fee discussion held with the partner and the outcome recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written fee review comparing quote, final bill and causes of any overrun, with the outcome of the partner discussion recorded."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Collect the engagement letter fee, interim bills and the final invoice"
                - "Ask the firm for the breakdown behind any overrun charge"
                - "Compare the audit fee with the quote and last year @recurring(yearly)"
                - "Raise disputed overruns with the audit partner"
            - name: Audit firm tender and appointment
              description: |-
                ## Purpose
                Changing auditors happens because of mandatory rotation rules, growth beyond the current firm, fee or service problems, or a funder's requirement. A structured tender with a clear brief, a shortlist, presentations and scoring against the same criteria gives the board or audit committee a defensible recommendation and avoids choosing on fee alone.

                ## Milestones
                1. The reason for tendering and any rotation or regulatory requirement written down.
                2. A tender brief covering entities, framework, timetable and sector experience.
                3. Three to five firms invited and proposals scored against the same criteria.
                4. A recommendation approved by the audit committee or board and the appointment made by the proper body.

                ## Notes
                Start from the **Vendor** template for each shortlisted firm. Check independence early: a firm that provides your tax or advisory work may not be able to audit you.
              priority: low
              deadlineOffsetDays: 240
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of at least three audit firms and an approved appointment recorded in board or committee minutes."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Write down why the organisation is tendering and any rotation rule that applies"
                - "Draft a tender brief with entities, timetable and sector needs"
                - "Score each proposal against the same criteria"
                - "Present the recommendation to the audit committee or board"
            - name: Controls reliance discussion with the auditor
              description: |-
                ## Purpose
                If the auditor can rely on your controls, they can test fewer transactions, but only when the controls are designed well and leave evidence. Discussing with the audit manager which processes they might rely on, what evidence they would need and what it would save helps you decide whether investing in control evidence pays back in a shorter audit.

                ## Milestones
                1. Processes where the auditor might rely on controls listed, such as payroll or purchases.
                2. The evidence they would need for each control understood.
                3. An estimate of saved audit effort or fee discussed.
                4. A decision recorded on which processes to prepare for controls testing.

                ## Notes
                Designing the controls themselves is a separate piece of work. This project is about what the auditor would need to rely on them.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision, agreed with the audit manager, on which processes will be offered for controls reliance this year."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the audit manager whether their approach is substantive or controls based"
                - "List processes where controls testing could replace transaction testing"
                - "Find out the evidence each control would need to show"
                - "Record which processes you will prepare for reliance"
            - name: Hard close dry run before year-end
              description: |-
                ## Purpose
                Running a full year-end style close at month nine or ten, with lead schedules, estimates and substantiation, brings most of the audit work forward to a quieter time. Problems found then can be fixed before the real year-end, and some auditors will do part of their testing on the hard close numbers.

                ## Milestones
                1. A hard close month chosen and agreed with the auditor if they will test it.
                2. Lead schedules, reconciliations and estimates prepared to year-end standard for that month.
                3. Issues found during the dry run listed with owners and fix dates.
                4. Issues resolved before the real year-end.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A month nine or ten close completed to year-end standard, with every issue found logged and fixed before year-end."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose the hard close month and tell the audit manager"
                - "Prepare lead schedules and estimates to year-end standard for that month"
                - "Log every issue found with an owner and fix date"
                - "Confirm all dry run issues are closed before year-end"
            - name: Interim audit visit readiness
              description: |-
                ## Purpose
                Interim visits cover walkthroughs of key processes, controls testing and early substantive work, and they set the tone for the final audit. Having process notes, control evidence and the year-to-date ledger ready before the team arrives means the interim finishes its work and leaves less for the busy weeks after year-end.

                ## Milestones
                1. Interim scope and dates confirmed with the audit manager.
                2. Process narratives or flowcharts for revenue, purchases, payroll and cash ready.
                3. Year-to-date ledger, trial balance and requested samples available on day one.
                4. Interim findings received and actions logged before the final audit.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Interim visit completed on schedule with all requested items provided and interim findings logged with owners."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the interim dates and scope with the audit manager"
                - "Update process narratives for revenue, purchases, payroll and cash"
                - "Prepare the year-to-date trial balance and requested samples"
                - "Log interim findings and assign owners"
            - name: Year-end stock count with auditor attendance
              description: |-
                ## Purpose
                Stock is often material and auditors usually attend the count to observe it and make test counts, so a badly run count can lead to a qualified opinion that no later work can fix. Clear count instructions, prepared sheets, a cut-off freeze and an agreed date with the auditor make the count something they can rely on.

                ## Milestones
                1. Count date and sites agreed with the auditor at least a month ahead.
                2. Written count instructions issued, covering teams, tagging, recounts and damaged stock.
                3. Goods in and goods out frozen, with the last delivery and despatch documents recorded.
                4. Count sheets reconciled to the stock ledger and differences investigated.

                ## Notes
                Keep copies of the last delivery note and despatch note before the count; the auditor uses them to test cut-off.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Count completed on the agreed date with auditor attendance, and count sheets reconciled to the stock ledger with differences explained."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Agree the count date and sites with the auditor"
                - "Write count instructions covering teams, tags, recounts and damaged stock"
                - "Record the last delivery and despatch documents before the freeze"
                - "Reconcile count sheets to the stock ledger and investigate differences"
            - name: Bank, customer and supplier confirmations
              description: |-
                ## Purpose
                Third-party confirmations are some of the strongest evidence an auditor can get, and some of the slowest, because banks and customers reply in their own time. Providing contact details early, signing bank authority letters promptly and chasing non-replies keeps confirmations from being the last open item.

                ## Milestones
                1. A complete list of banks, lenders and facilities, including dormant accounts, sent to the auditor.
                2. Bank authority letters signed by authorised signatories.
                3. Customer and supplier contact details provided for the auditor's selected balances.
                4. Non-replies chased and alternative evidence prepared where confirmations do not arrive.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every bank and selected customer or supplier confirmation is either received by the auditor or covered by alternative evidence before fieldwork ends."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every bank account, loan and facility, including dormant ones"
                - "Arrange signing of the bank authority letters"
                - "Send contact details for the balances the auditor selects"
                - "Prepare invoices and receipts as alternative evidence for non-replies"
            - name: Final fieldwork readiness checklist
              description: |-
                ## Purpose
                Final fieldwork goes smoothly when the auditors walk in to a closed ledger, a signed trial balance and most of the request list already in the folder. A readiness check a week before, ticking off every prerequisite, tells you whether to start as planned or ask for a short delay, which costs far less than a stalled audit.

                ## Milestones
                1. The ledger closed and the final trial balance signed off.
                2. Draft financial statements prepared and tied to the lead schedules.
                3. At least 80 percent of request items marked sent before day one.
                4. Workspace, system access and key people's availability confirmed for the fieldwork weeks.

                ## Notes
                Start from the **Operational checklist** template. If readiness is well short a week out, tell the audit manager then, not on day one.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed readiness checklist dated one week before fieldwork, with the ledger closed and at least 80 percent of requests sent."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the ledger is closed and the trial balance is signed"
                - "Tie the draft financial statements to the lead schedules"
                - "Count the request items sent against the total"
                - "Confirm system access and key staff availability for fieldwork"
            - name: Audit clearance meeting and adjustments sign-off
              description: |-
                ## Purpose
                The clearance meeting is where the auditor sets out proposed adjustments, unadjusted differences, outstanding items and draft findings. Arriving with your own view of each proposed adjustment, and leaving with a clear list of what will be booked, what will not and why, prevents last-minute arguments in front of the board.

                ## Milestones
                1. The auditor's schedule of proposed adjustments received before the meeting.
                2. A position on each adjustment agreed internally, with reasons.
                3. Booked adjustments posted and the trial balance and statements updated.
                4. Unadjusted differences and the reasons for not booking them recorded for the representation letter.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Every proposed adjustment has a recorded decision, booked adjustments are posted and the final trial balance agrees to the statements."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the auditor for the proposed adjustments schedule two days ahead"
                - "Agree a position on each adjustment with the finance director"
                - "Post the agreed adjustments and update the statements"
                - "Record unadjusted differences with reasons"
            - name: Letter of representation review before signing
              description: |-
                ## Purpose
                Directors or trustees sign a letter confirming that information given to the auditor is complete and that judgements are reasonable, and it is a statement made personally. Checking each representation against evidence, and briefing the signatories on what they are confirming, protects them and surfaces anything that should be disclosed first.

                ## Milestones
                1. The draft representation letter received and each paragraph listed.
                2. Each representation matched to evidence or a person who can confirm it.
                3. Specific representations, such as unadjusted differences or going concern, reviewed with the finance director.
                4. Signatories briefed and the letter signed on the same date as the accounts.

                ## Notes
                If a representation cannot be supported, raise it with the auditor before signing rather than signing with reservations in your head.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A representation letter signed on the date of the accounts, with each paragraph cross-referenced to evidence in the audit file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Request the draft representation letter from the auditor"
                - "Match each paragraph to evidence or a named person"
                - "Brief the signing directors or trustees on what they confirm"
                - "Check the letter is dated the same day as the signed accounts"
            - name: Audit committee report on audit findings
              description: |-
                ## Purpose
                Boards and audit committees receive the auditor's findings report and must be able to question it. Preparing management's own short paper alongside it, covering adjustments, findings, responses and lessons, lets members focus on the judgements that matter and shows that finance owns the outcome.

                ## Milestones
                1. The auditor's findings report received at least a week before the meeting.
                2. A management paper covering adjustments, findings, responses and lessons drafted.
                3. A private session between the committee and the auditor, without management, scheduled.
                4. Committee decisions and actions minuted and added to the remediation plan.

                ## Notes
                Start from the **Board meeting** template.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Audit committee meeting held with the auditor's report and a management paper, and actions minuted and added to the remediation plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree with the auditor when the findings report will be issued"
                - "Draft a two-page management paper on adjustments and findings"
                - "Schedule a private session for the committee and the auditor"
                - "Add committee actions to the remediation plan"
            - name: Subsequent events review up to the signing date
              description: |-
                ## Purpose
                Events between year-end and signing, such as a major customer failing, a claim settling or a large asset sale, may need adjustment or disclosure. A structured review of minutes, post-year-end cash, legal updates and management accounts up to the signing date gives the auditor the evidence and the directors confidence in what they sign.

                ## Milestones
                1. Board minutes, management accounts and legal updates since year-end reviewed.
                2. Post-year-end receipts checked against year-end receivables.
                3. Each identified event classified as adjusting, disclosure only or none.
                4. A dated subsequent events memo updated on the signing day.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A subsequent events memo dated on the signing day, listing each event considered and its agreed treatment."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read board minutes and management accounts since year-end"
                - "Check cash received after year-end against year-end debtors"
                - "Classify each event found as adjusting, disclosure or none"
                - "Update the subsequent events memo on the signing day"
            - name: First statutory audit after crossing the threshold
              description: |-
                ## Purpose
                Crossing a size threshold, taking on investors or a lender's covenant, or a funder's condition can bring a first full audit to an organisation that has only had accounts prepared. The first audit is harder: opening balances must be proven, processes are untested and staff have never met an auditor. Planning for it as a project, not a busy month, avoids a qualified first opinion.

                ## Milestones
                1. The reason the audit is required, and the first year it applies, confirmed with an adviser.
                2. An audit firm appointed with enough lead time before the first year-end.
                3. Opening balances supported with evidence, including stock and fixed assets.
                4. A basic process note for each major cycle written before the interim visit.

                ## Notes
                Ask the incoming auditor how they will gain comfort over opening balances; if stock was never counted, plan a count at the first year-end at least.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An auditor appointed, opening balances supported with evidence and process notes written before the first year-end."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Confirm with your adviser why the audit is required and from which year"
                - "Shortlist audit firms with experience of first-year audits"
                - "Gather evidence for each opening balance sheet figure"
                - "Write a short process note for sales, purchases, payroll and cash"
            - name: Grant funder and nonprofit audit requirements
              description: |-
                ## Purpose
                Funders often set their own audit conditions: a grant-specific audit, an auditor's certificate on expenditure, or a requirement to follow a public sector audit regime above a spending threshold. Mapping every funder's audit requirement and building the evidence into the year stops a lost grant claim or a clawback over a missing report.

                ## Milestones
                1. Every grant agreement checked for audit, assurance or certification clauses.
                2. A list of required reports with deadline, format and who must sign.
                3. Grant expenditure evidence kept by grant and cost category through the year.
                4. Each required auditor report scoped into the engagement letter or a separate engagement.

                ## Notes
                Fund accounting itself lives elsewhere; this project is about what each funder requires the auditor to report.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register of every funder audit requirement with deadlines, each one scoped with the auditor and evidence held by grant."
                cadence: cyclic
              tasks:
                - "Read each grant agreement for audit and certification clauses"
                - "List required reports with deadline, format and signatory"
                - "Check new grant agreements for audit requirements @recurring(yearly)"
                - "Ask the auditor to scope each funder report into the engagement"
            - name: Trustee and audit committee member question list
              description: |-
                ## Purpose
                Trustees and non-executive committee members are responsible for the accounts but often unsure what to ask the auditor. A prepared question list covering independence, significant risks, judgements, management's cooperation and unadjusted differences, agreed before the planning and findings meetings, turns their oversight into something real.

                ## Milestones
                1. A question list drafted for the planning meeting and another for the findings meeting.
                2. Questions reviewed by the committee chair.
                3. Answers recorded in the committee minutes.
                4. The list kept and refined for next year's committee.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Two question lists, one for planning and one for findings, used in committee meetings with the answers minuted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the regulator or sector body's guidance for trustees on audits"
                - "Draft ten questions for the audit planning meeting"
                - "Draft ten questions for the findings meeting"
                - "Review both lists with the committee chair"
            - name: Inheriting an audit mid-cycle as a new finance lead
              description: |-
                ## Purpose
                Taking over finance between planning and fieldwork, or after a predecessor left with the audit half done, means owning commitments you did not make. A focused handover that finds the engagement letter, the request tracker, open findings and the people who know the history lets a new finance lead meet the timetable or reset it honestly.

                ## Milestones
                1. The engagement letter, timetable, request tracker and prior findings located.
                2. An introductory call held with the audit manager to agree current status.
                3. Open requests reassigned to current staff.
                4. A decision made, and communicated, to keep or reset the timetable.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Within three weeks of starting, the new finance lead has confirmed audit status with the audit manager and either kept or reset the timetable in writing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the engagement letter, timetable and request tracker"
                - "Book an introductory call with the audit manager"
                - "Reassign every open request to a current team member"
                - "Confirm in writing whether the timetable holds"
            - name: Group audit with component auditors abroad
              description: |-
                ## Purpose
                Groups with subsidiaries in several countries face a lead auditor who sends instructions to component auditors and needs their reporting back on a tight timetable. Coordinating local deadlines, reporting packs, intercompany confirmations and local statutory audits so they line up with the group timetable is its own discipline.

                ## Milestones
                1. Every component, its auditor and its scope (full, specific or review) listed.
                2. Group audit instructions received and shared with each local finance lead.
                3. Local reporting pack and intercompany confirmation deadlines aligned to the group timetable.
                4. Component clearance memos received before group clearance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A component tracker showing scope, auditor and deadlines for every entity, with all component clearance memos received before group sign-off."
                cadence: cyclic
              tasks:
                - "List every subsidiary with its auditor and audit scope"
                - "Circulate the group audit instructions to local finance leads @recurring(yearly)"
                - "Align local reporting pack deadlines to the group timetable"
                - "Track receipt of each component clearance memo"
            - name: Auditing a year with a system migration
              description: |-
                ## Purpose
                A new accounting or ERP system during the year means the auditor must test two systems and the migration between them. Keeping evidence of the data migration, the mapping of old to new accounts, balance tie-outs at cutover and access set-up in the new system avoids an expensive extra scope of work at year-end.

                ## Milestones
                1. The migration date and the systems before and after told to the auditor at planning.
                2. Cutover balances in the old and new systems agreed and signed.
                3. Old to new account mapping and data migration checks filed.
                4. Read access to the old system kept for the audit period.

                ## Notes
                Do not switch off the old system until the auditor confirms they have what they need from it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A migration evidence pack with signed cutover tie-outs and account mapping, accepted by the auditor without extra scope."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Tell the auditor the migration date and systems involved"
                - "Sign off cutover balance tie-outs between old and new systems"
                - "File the account mapping and data migration checks"
                - "Keep read access to the old system until the audit is signed"
            - name: Going concern evidence pack
              description: |-
                ## Purpose
                Going concern is assessed for at least twelve months from the date the accounts are signed, not from year-end, and auditors must conclude on it every year. A pack with a cash flow forecast for that period, sensitivities, facility headroom and covenant tests, and a board minute recording the directors' conclusion, prevents a late emphasis of matter or worse.

                ## Milestones
                1. A monthly cash forecast covering at least twelve months from the expected signing date.
                2. Downside sensitivities run and the headroom under each shown.
                3. Facility terms, renewal dates and covenant tests summarised.
                4. The directors' going concern conclusion minuted at a board meeting.

                ## Notes
                The forecast itself comes from your cash flow work; the audit asks for the assumptions, sensitivities and the board's conclusion to be written down.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A going concern pack with a forecast to at least twelve months past signing, sensitivities and a board minute recording the conclusion."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Extend the cash forecast to twelve months beyond the expected signing date"
                - "Run downside sensitivities and record the headroom"
                - "Summarise facility terms, renewal dates and covenant tests"
                - "Ask the board to minute its going concern conclusion"
            - name: Impairment and valuation model support for auditors
              description: |-
                ## Purpose
                Impairment tests, investment valuations and other models built on forecasts and discount rates are often key audit matters, and the firm may bring in its own valuation specialists. A model with documented assumptions, sources for each input, sensitivity tables and a version history lets those specialists review it rather than rebuild it.

                ## Milestones
                1. Every model the auditor will review listed with its owner.
                2. Each key assumption documented with its source and approval.
                3. Sensitivity analysis showing what change in each input would cause an impairment.
                4. A locked final version and change log provided to the auditor.

                ## Notes
                Use forecasts the board has already approved. A model built on more optimistic numbers than the budget will be challenged.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each valuation or impairment model is delivered locked, with sourced assumptions, sensitivities and a change log the auditor accepts."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List each model the auditor will review and its owner"
                - "Document every key assumption with its source"
                - "Add a sensitivity table showing the break-even change for each input"
                - "Lock the final version and attach a change log"
            - name: IT general controls evidence readiness
              description: |-
                ## Purpose
                Auditors test IT general controls over user access, system changes and operations because every system report they rely on depends on them. Keeping quarterly user access reviews, leaver removals and approved change records for the finance systems means IT findings stop appearing in the management letter year after year.

                ## Milestones
                1. The finance systems in audit scope listed with their system owners.
                2. Quarterly user access reviews completed and signed for each system.
                3. Leavers' access removal dates matched to their leaving dates.
                4. System changes in the year listed with approval and testing evidence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four signed user access reviews per in-scope system, a leaver removal check and a change log with approvals on file at year-end."
                cadence: rolling
              tasks:
                - "List finance systems in audit scope and their owners"
                - "Run and sign the user access review for each finance system @recurring(quarterly)"
                - "Match leavers' access removal dates to HR leaving dates"
                - "Keep a change log with approval and test evidence"
            - name: Auditor independence and non-audit services approvals
              description: |-
                ## Purpose
                Independence rules limit which other services an audit firm can provide, and for listed and public interest entities they also cap fees and require committee pre-approval. A register of every non-audit service bought from the firm, approved before it starts, keeps the audit committee in control and avoids a firm having to withdraw.

                ## Milestones
                1. A policy agreed on which non-audit services need committee pre-approval.
                2. Every current service from the audit firm listed with fees and approval.
                3. A pre-approval step built into purchasing for any new engagement with the firm.
                4. An annual independence confirmation received from the firm and tabled at committee.

                ## Notes
                The rules differ by country and by type of entity. Confirm with the audit partner and your adviser which apply to you.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A non-audit services register with committee approvals for every engagement, and the firm's annual independence confirmation minuted."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "List every service bought from the audit firm in the last two years"
                - "Draft a non-audit services approval policy for the audit committee"
                - "Add an approval check to purchasing for new work from the firm"
                - "Table the firm's independence confirmation at committee @recurring(yearly)"
---

# External Audit Preparation

This area is for the finance manager, controller or nonprofit finance lead who has to get an organisation through its annual external audit without losing a month to it, and for the board or trustees who receive the result. It starts with the foundations (a timetable, the engagement letter, last year's findings, an owned prepared-by-client list and lead schedules), then the year-round habits that keep evidence ready, the skills behind what auditors actually test, improvements that cut adjustments and fees, the dated moments from the stock count to the signed opinion, situations such as a first audit, a grant-funded nonprofit or a group with overseas components, and finally specialist work on going concern, impairment, IT controls and auditor independence.

What repeats is quiet and steady: a monthly reconciliation archive, significant transaction memos and minutes filing, quarterly substantiation, estimates, contracts and legal logs, a weekly open-request review while fieldwork runs, and a yearly debrief, fee review and related party round. The Meeting notes, Remediation plan, Vendor, Operational checklist and Board meeting templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
