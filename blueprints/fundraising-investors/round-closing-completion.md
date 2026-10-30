---
id: fundraising-investors.round-closing-completion
name: Round Closing & Completion
description: "A closing run like a project: timeline, checklist and counsel in place, conditions and signatures tracked, approvals and funds flow handled, shares issued and every filing and post-completion promise kept."
category: business
version: 1.0.0
tags: [fundraising-investors, round-closing-completion, founder, manager, closing, completion, legal-documents, share-issue]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - vendor
    - meeting-notes
    - risk-register
    - board-meeting
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Round Closing & Completion
          description: "Getting from signed term sheet to money in the bank: legal documents, signatures, conditions, share issues and filings."
          projects:
            - name: Closing timeline from signed term sheet to funds received
              description: |-
                ## Purpose
                Most rounds take longer to close than founders expect, and the slippage usually comes from steps nobody put on a calendar: a shareholder consent, a foreign investor's identity checks, a board that only meets monthly. A timeline counted back from the date the money is needed, with every dependency on it, turns a vague hope of closing next month into a date both sets of lawyers can work to.

                ## Milestones
                1. A target completion date agreed with the lead investor and written at the top of the timeline.
                2. Every step from first drafts to funds received placed on the timeline with an owner and a dependency.
                3. The critical path marked, with the three steps most likely to slip named.
                4. The timeline shared with company counsel, investor counsel and the board.

                ## Notes
                Build in at least a week of slack before any hard cash deadline. Investor counsel's first draft alone often takes one to two weeks after the term sheet is signed.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated closing timeline with owners and dependencies, agreed with the lead investor and both counsel, exists within ten days of term sheet signature."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the date the company actually needs the money and why"
                - "Ask the lead investor which steps their investment committee and counsel still need"
                - "Lay out every closing step backwards from the target completion date"
                - "Mark the critical path and share the timeline with both sets of counsel"
            - name: Master closing checklist with owners and dates
              description: |-
                ## Purpose
                A closing checklist is the single list of every document, approval, certificate and deliverable the round needs, and it is the document lawyers on both sides work from. Owning a copy yourself, rather than waiting for counsel to circulate theirs, means you can see what is blocked on the company and fix it before it holds up completion.

                ## Milestones
                1. A checklist listing every closing document, approval and deliverable, each with a responsible party.
                2. Status, due date and signatories recorded against every line.
                3. The company's own items separated out so the founders can see what is theirs to do.
                4. The checklist reconciled against counsel's version at least once a week until completion.

                ## Notes
                Start from the **Operational checklist** template. Ask counsel for their closing checklist on day one and build yours from it rather than inventing a parallel list.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A closing checklist with an owner, status and due date on every line is shared with both counsel and matches their version."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask company counsel for their current closing checklist"
                - "Create the master checklist from the operational checklist template"
                - "Add an owner, due date and signatory column to every line"
                - "Highlight the items only the company can deliver and assign each one"
            - name: Engaging company counsel for the closing
              description: |-
                ## Purpose
                Company counsel drafts or reviews every closing document, runs the checklist and protects the company and its founders, so the choice and the scope of their engagement shape the whole closing. Agreeing the scope, the fee estimate and the named people before investor counsel's first draft arrives avoids a slow start and an unpleasant invoice.

                ## Milestones
                1. Two or three firms with recent venture closings at this stage compared.
                2. An engagement letter signed with a clear scope, fee estimate and named partner and associate.
                3. Counsel briefed on the signed term sheet, the cap table and any known issues.
                4. A single point of contact and a response time agreed for the closing period.

                ## Notes
                Start from the **Vendor** template. A firm that closes many rounds at your stage will usually be faster and cheaper overall than a generalist with a lower hourly rate.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An engagement letter with company counsel is signed, naming the scope, fee estimate and the people who will run the closing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two founders who closed a similar round which firm they used"
                - "Request a fee estimate and scope from two or three firms"
                - "Sign the engagement letter with the firm you chose"
                - "Send counsel the signed term sheet, cap table and known issues list"
            - name: Closing deal team and decision rights
              description: |-
                ## Purpose
                Closings stall when nobody knows who can approve a drafting point at nine in the evening or who chases the angel who has not signed. Naming the deal team on the company side, and writing down which points the CEO can concede alone and which go to the co-founders or board, keeps the documents moving without anyone exceeding their authority.

                ## Milestones
                1. A named deal lead, document owner and signature chaser on the company side.
                2. A short list of points the deal lead can agree alone and points that need co-founder or board sign-off.
                3. Contact details for every adviser and investor counsel in one place.
                4. The decision rights note shared with counsel so they know whose instructions to follow.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page deal team note naming roles, contacts and decision rights is shared with company counsel before the first long-form draft arrives."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name the company's deal lead, document owner and signature chaser"
                - "List the drafting points the deal lead may agree without asking anyone"
                - "Collect contact details for every adviser and counsel on the deal"
                - "Send the deal team note to company counsel"
            - name: Signatory and authority map for every document
              description: |-
                ## Purpose
                Every document in the closing set needs the right person to sign it in the right capacity: a director for the company, each founder personally, an authorised signatory for each fund. A map of who signs what, in which capacity and how, prevents the most common last-day problem, which is a signature page signed by the wrong person or missing a witness.

                ## Milestones
                1. Every closing document listed with the signatories it needs and their capacity.
                2. Any power of attorney or authorised signatory evidence requested from investors.
                3. Travel, holidays and time zones for each signatory checked against the target completion date.
                4. The map agreed with company counsel.

                ## Notes
                Directors who will be travelling around completion can often sign in advance, with pages held in escrow by counsel until release. Ask early.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signatory map covering every closing document, with capacity and availability for each signatory, is agreed with company counsel."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every closing document and who must sign each one"
                - "Ask each signatory for dates they are travelling or unavailable"
                - "Ask investor counsel which funds need a power of attorney or signatory evidence"
                - "Re-check the signatory map whenever directors or officers change @recurring(yearly)"
            - name: Corporate housekeeping before the long-form documents
              description: |-
                ## Purpose
                Diligence often turns up old problems: a share issue never filed, missing board minutes, an option grant made without authority, an IP assignment never signed by a contractor. Fixing these before investor counsel finds them keeps the warranties honest, shortens the disclosure letter and stops them becoming conditions to completion.

                ## Milestones
                1. Statutory registers, minute book and past filings checked against the share history.
                2. A list of defects agreed with company counsel, each with a fix and an owner.
                3. Missing filings made, missing minutes ratified and missing IP assignments signed.
                4. Anything that cannot be fixed before completion flagged for the disclosure letter.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every housekeeping defect counsel identified is either fixed or written up for disclosure before the long-form documents are agreed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask counsel to compare the statutory registers with the share history"
                - "List every missing filing, minute and IP assignment found"
                - "Agree a fix and an owner for each defect with counsel"
                - "Get contractor and founder IP assignments signed where they are missing"
            - name: Capitalisation schedule for the subscription agreement
              description: |-
                ## Purpose
                The share capital table attached to the subscription or share purchase agreement is something the company warrants is true, and errors in it are among the commonest causes of post-completion claims and awkward conversations. Agreeing one schedule, reconciled to the register, the option ledger and every convertible, before the documents are signed protects the founders personally.

                ## Milestones
                1. The pre-completion share capital reconciled to the statutory register share by share.
                2. Options, warrants, SAFEs and notes included with the counts counsel will use.
                3. The post-completion position agreed with the lead investor's counsel.
                4. One final version of the schedule attached to the agreement and the cap table updated to match.

                ## Notes
                Never let two versions of the capitalisation schedule circulate. Name one person, usually company counsel, as its keeper.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single capitalisation schedule, reconciled to the register and agreed by both counsel, is attached to the signed subscription agreement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Send counsel the current cap table and the full option ledger"
                - "Check every holding on the schedule against the statutory register"
                - "Confirm the SAFE and note conversion numbers with the holders' figures"
                - "Agree the final post-completion schedule with investor counsel"
            - name: Bank account readiness for the incoming investment
              description: |-
                ## Purpose
                A large incoming payment can trigger the company's bank to hold funds while it runs its own checks on the source of money, and a bank letter with account details is often a closing document in its own right. Preparing the bank for the round, and knowing how foreign currency will arrive, avoids money sitting in limbo on completion day.

                ## Milestones
                1. The bank told the expected amount, currency, senders and timing of the investment.
                2. A signed bank letter or verified account details ready for the funds flow memo.
                3. Any limit on incoming amounts or currency conversion confirmed with the bank.
                4. A plan for where funds sit after receipt, agreed with the finance lead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The bank has confirmed in writing it expects the investment and the verified account details are on file for the funds flow."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Tell your relationship manager the expected amount, senders and timing"
                - "Ask the bank whether it needs source of funds evidence for the round"
                - "Request a bank letter confirming account details on letterhead"
                - "Check how foreign currency payments will be converted and credited"
            - name: Twice-weekly closing call with both sets of counsel
              description: |-
                ## Purpose
                Long gaps between conversations are where closings lose days: a question sits unanswered over a weekend and the timeline slips. A short standing call with company counsel and investor counsel twice a week, working through the checklist, keeps every open point owned and dated until the money arrives.

                ## Milestones
                1. A standing thirty-minute call in both counsels' calendars until completion.
                2. Each call working from the current checklist and open questions log.
                3. Actions from every call written down with an owner and a date.
                4. Calls stopped only once funds are received and the closing bible is issued.

                ## Notes
                Start from the **Meeting notes** template. Keep calls short; drafting happens between them, not on them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twice-weekly call with both counsel is held through the closing period, each with dated actions recorded."
                cadence: rolling
              tasks:
                - "Send both counsel a standing invitation for a thirty-minute call"
                - "Run the closing call from the checklist and open questions log @recurring(weekly:mon,thu)"
                - "Write up actions with owners and dates from the meeting notes template"
            - name: Drafting turn log and version control
              description: |-
                ## Purpose
                Three people editing a shareholders' agreement in separate copies is how agreed points get lost and old wording creeps back into the signing version. A turn log recording who holds the pen on each document, which version is current and what changed in each turn makes it obvious which draft is live.

                ## Milestones
                1. A closing folder with one subfolder per document and a superseded folder.
                2. A naming convention with document, version number, date and who turned it.
                3. A turn log showing who holds the pen on each document and when it is due back.
                4. Every draft compared against the previous turn before it is accepted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every closing document has a current version in the folder, with the turn log showing its holder and due date at every point of the closing."
                cadence: rolling
              tasks:
                - "Create the closing folder with a subfolder per document"
                - "Agree a file naming convention with both counsel"
                - "Run a comparison against the previous turn before accepting any draft"
                - "Archive superseded drafts and update who holds the pen @recurring(weekly:fri)"
            - name: Signature page tracker
              description: |-
                ## Purpose
                Signature pages are the last thing anyone thinks about and the first thing that delays completion: an angel on holiday, a fund that needs two signatories, a witness missing from a deed. A tracker with every page, every signatory and its status turns the final week from a scramble into a routine chase.

                ## Milestones
                1. Every signature page listed against its signatory and document.
                2. Signing method recorded for each: e-signature, wet ink or deed with witness.
                3. Pages released to escrow with counsel recorded as they come in.
                4. No signature page outstanding by the day before target completion.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A signature tracker showing every page and its status is kept until all pages are held by counsel, with none outstanding the day before completion."
                cadence: rolling
              tasks:
                - "List every signature page with its signatory and signing method"
                - "Confirm with counsel which pages need a witness or wet ink"
                - "Send each signatory a short list of the pages still owed @recurring(weekly:wed)"
                - "Mark each page as held in escrow when counsel confirms receipt"
            - name: Conditions precedent tracker
              description: |-
                ## Purpose
                Conditions precedent are the things that must be true or delivered before investors are obliged to pay: approvals, waivers, consents, certificates, new service agreements, sometimes a regulatory clearance. Tracking each one with evidence and a date shows exactly what still stands between the company and its money, and which conditions might need to be waived or deferred.

                ## Milestones
                1. Every condition precedent from the agreement listed with owner and evidence required.
                2. Status and expected date recorded for each condition.
                3. Conditions at risk raised with the lead investor early, with a proposed waiver or deferral.
                4. Evidence for every satisfied condition filed in the closing folder.

                ## Notes
                A condition that cannot be met by completion is often turned into a condition subsequent: a promise to deliver it after the money arrives. Agree that with counsel rather than assuming it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every condition precedent is shown as satisfied, waived in writing or deferred by agreement, with evidence filed, before completion."
                cadence: rolling
              tasks:
                - "Copy every condition precedent from the latest draft agreement into a tracker"
                - "Name the owner and the evidence needed for each condition"
                - "Update the status and expected date of every condition @recurring(weekly:tue)"
                - "Raise any condition at risk with the lead investor and counsel @priority(high)"
            - name: Investor onboarding and identity checks
              description: |-
                ## Purpose
                Before an investor's money can be accepted, the company, its bank and sometimes counsel need identity documents, source of funds information, tax forms and correct registered names and addresses. Collecting these early, through one pack sent to every investor, prevents the familiar last-week delay of an angel whose passport scan is out of date.

                ## Milestones
                1. One onboarding pack listing every document and form each type of investor must provide.
                2. The pack sent to every investor as soon as their allocation is confirmed.
                3. A tracker showing each investor's documents as received, checked or missing.
                4. Every investor fully onboarded before the funds flow memo is finalised.

                ## Notes
                Ask counsel what identity and anti-money-laundering checks apply to the company and its bank in your country, and keep the documents securely with limited access.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every investor in the round has a complete onboarding record, checked and filed, before the funds flow memo is signed off."
                cadence: rolling
              tasks:
                - "Ask counsel and the bank which identity documents each investor must provide"
                - "Write one onboarding pack and send it to every confirmed investor"
                - "Track each investor's documents as received, checked or missing"
                - "Chase any investor whose onboarding pack is incomplete @recurring(weekly:thu)"
            - name: Closing risk register
              description: |-
                ## Purpose
                Closing risks are usually visible weeks in advance: a lead whose fund is near the end of its investment period, a key customer contract with a change of control clause, a co-founder unhappy with new vesting. Writing them down, rating them and naming a response for each turns vague worry into actions the deal team can take.

                ## Milestones
                1. A register of the risks to completion, each rated for likelihood and impact.
                2. A named response and owner for every high-rated risk.
                3. The register reviewed weekly and closed risks marked with their outcome.
                4. Any risk that could stop the round shared with the board.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A closing risk register is reviewed every week until completion, with a response and owner for each high-rated risk."
                cadence: rolling
              tasks:
                - "Create the closing risk register from the risk register template"
                - "List the five risks most likely to delay or stop completion"
                - "Agree a response and owner for each high-rated risk"
                - "Review the register and re-rate each open risk @recurring(weekly:mon)"
            - name: Open questions log between the legal teams
              description: |-
                ## Purpose
                Questions from investor counsel arrive in emails, mark-ups and calls, and the ones that get lost are the ones that come back as reasons to delay. A single log of every open question, who must answer it and by when, gives both teams the same view and makes the closing call a fifteen-minute review rather than an hour of searching inboxes.

                ## Milestones
                1. One shared log of open questions with source, owner and due date.
                2. Every question from mark-ups and emails copied into the log within a day.
                3. Answered questions marked with the answer and where it was recorded.
                4. No question older than a week without an owner and a date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared open questions log is kept through the closing, with no question older than seven days lacking an owner and a due date."
                cadence: rolling
              tasks:
                - "Set up a shared open questions log with both counsel"
                - "Copy every outstanding question from the latest mark-ups into the log"
                - "Clear or reassign the open questions log @recurring(weekly:tue,fri)"
                - "Record each answer and where it is reflected in the documents"
            - name: Friday closing status note to the lead and board
              description: |-
                ## Purpose
                Investors and directors who hear nothing for a fortnight assume the worst, and a lead who feels uninformed is slower to help when something needs their weight. A short Friday note covering where each document stands, what is blocked and what is needed from whom keeps everyone aligned and surfaces problems while there is time to fix them.

                ## Milestones
                1. A fixed five-line format: target date, documents, conditions, signatures, asks.
                2. A note sent every Friday from the term sheet to completion.
                3. Specific asks of the lead or directors named in each note.
                4. A final note sent on completion confirming funds received.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A status note in the agreed format is sent to the lead investor and board every Friday until completion is confirmed."
                cadence: rolling
              tasks:
                - "Agree the five-line status note format with the lead investor"
                - "Ask the agent to draft the note from the checklist and tracker updates"
                - "Send the closing status note to the lead and board @recurring(weekly:fri)"
            - name: Post-completion obligations calendar
              description: |-
                ## Purpose
                Completion is not the end of the paperwork: there are filings with deadlines counted from the share issue, conditions subsequent the company promised to deliver, new insurance, information rights and consent matters that now apply. A calendar built from the signed documents means none of these is missed in the relief of having closed.

                ## Milestones
                1. Every post-completion obligation in the signed documents listed with its deadline.
                2. Each obligation given an owner and a calendar entry.
                3. Conditions subsequent delivered and the evidence sent to the lead investor.
                4. The calendar reviewed monthly in the first year after completion.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every post-completion obligation from the signed documents is on a calendar with an owner, and all first-year deadlines are met."
                cadence: cyclic
              tasks:
                - "Ask counsel for a list of every post-completion obligation in the signed documents"
                - "Put each obligation and its deadline into the calendar with an owner"
                - "Check the obligations list for anything due this month @recurring(monthly:12)"
                - "Confirm annual investor deliverables such as audited accounts are scheduled @recurring(yearly)"
            - name: The long-form document set explained
              description: |-
                ## Purpose
                First-time founders often sign a term sheet without knowing that five to ten documents follow it, each doing a different job: a subscription or share purchase agreement, a shareholders' or investor rights agreement, new articles or a restated charter, board and shareholder resolutions, a disclosure letter and side letters. Knowing what each document is for makes every mark-up quicker to read and every question to counsel sharper.

                ## Milestones
                1. Each document in your round's closing set named with its purpose in a sentence.
                2. Which documents bind the company, the founders personally and the investors noted.
                3. The term sheet clauses mapped to the document that will implement each one.
                4. The summary checked with company counsel.

                ## Notes
                Published model document sets from venture associations in several countries are a good way to see what standard looks like. Ask counsel which set your documents follow.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note naming every document in the closing set, its purpose and who it binds, has been checked by company counsel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask counsel for the list of documents in this round's closing set"
                - "Ask the agent to summarise the purpose of each document in plain words"
                - "Map each term sheet clause to the document that implements it"
                - "Check the summary with counsel and correct anything they flag"
            - name: Reading the subscription or share purchase agreement
              description: |-
                ## Purpose
                Whether it is called a subscription agreement, an investment agreement or a stock purchase agreement, this is the contract under which investors pay and the company issues shares, and it holds the warranties, conditions and completion mechanics. Reading it clause by clause once, with counsel's explanation, means founders know what they are promising and when the money becomes payable.

                ## Milestones
                1. The definitions, subscription, conditions, completion and warranty sections located.
                2. The amount, price per share and number of shares checked against the term sheet.
                3. The completion mechanics written as a short sequence of who does what.
                4. Questions on any clause you do not understand answered by counsel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A clause-by-clause note of the subscription agreement, with completion mechanics and all founder questions answered by counsel."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the definitions and subscription clauses in the latest draft"
                - "Check the amount, price per share and share count against the term sheet"
                - "Write the completion mechanics as a numbered sequence"
                - "Send counsel the clauses you want explained"
            - name: Warranties, disclosure and founder liability caps
              description: |-
                ## Purpose
                Warranties are statements of fact about the company that investors rely on, and in many markets founders give some of them personally. Understanding how warranties, the disclosure letter and liability caps fit together lets founders see what they are personally exposed to and what to ask counsel to negotiate.

                ## Milestones
                1. The difference between company and founder warranties understood and written down.
                2. How disclosure against a warranty removes liability for that matter explained in your own words.
                3. The caps, time limits and thresholds in your draft listed.
                4. Your questions on personal exposure answered by counsel.

                ## Notes
                This project is about understanding the structure. Whether a particular cap or warranty is acceptable is a judgement for your own lawyer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note of the warranty structure, disclosure and the caps in your draft, with personal exposure questions answered by counsel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find which warranties in the draft are given by founders personally"
                - "List the liability caps, time limits and thresholds in the draft"
                - "Write how disclosure works in two or three sentences"
                - "Ask counsel what your personal exposure would be in a worst case"
            - name: How the new articles put the term sheet into effect
              description: |-
                ## Purpose
                Term sheets describe preferences, anti-dilution, vetoes and transfer rules in a page; the new articles of association or restated charter turn them into binding share rights that can only be changed by shareholder vote. Checking that the constitutional document says what the term sheet agreed, and nothing more, is one of the highest-value hours a founder spends in a closing.

                ## Milestones
                1. The share classes, preference, anti-dilution and conversion clauses located in the draft.
                2. Each one compared with the equivalent term sheet wording.
                3. Any right that appears in the articles but not the term sheet flagged.
                4. Flagged points resolved with counsel before the shareholder resolution is circulated.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every share right in the draft articles or charter is traced to a term sheet clause, with any extra right resolved with counsel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the share class rights section in the draft articles or charter"
                - "Compare the preference and anti-dilution wording with the term sheet"
                - "Flag any investor right that was not in the term sheet"
                - "Resolve each flagged point with counsel"
            - name: Shareholders' agreement terms that apply after completion
              description: |-
                ## Purpose
                Many of the clauses that affect daily life after the round sit in the shareholders' or investor rights agreement: consent matters needing investor approval, information rights, pre-emption on new shares, transfer restrictions and founder covenants. Knowing which ones bite, and putting them into a short operating summary, stops the company accidentally breaching its own agreement six months later.

                ## Milestones
                1. Consent matters listed in plain words with who must approve each.
                2. Information rights listed with frequency and recipients.
                3. Founder restrictive covenants and leaver terms summarised.
                4. A one-page operating summary shared with the management team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page operating summary of consent matters, information rights and founder covenants is shared with the management team after completion."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every consent matter in the agreement and who approves it"
                - "Note the information rights, their frequency and recipients"
                - "Write a one-page operating summary for the management team"
                - "Check the consent matters list before any major decision is taken @recurring(quarterly)"
            - name: Signing formalities for deeds, witnesses and e-signatures
              description: |-
                ## Purpose
                Not every document can be signed the same way: some must be executed as deeds, some need a witness physically present, some investors' jurisdictions need notarisation or an apostille, and some funds will not accept e-signatures at all. Learning the formalities your round needs, early, avoids re-signing pages in the last week.

                ## Milestones
                1. Each closing document marked as simple signature, deed or notarised.
                2. Witness requirements and acceptable e-signature methods confirmed with counsel.
                3. Overseas signatories who need notarisation or an apostille identified.
                4. A one-page signing guide sent to every signatory.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A signing guide covering execution method, witness and notarisation needs for every document is sent to all signatories before signing begins."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask counsel which documents must be signed as deeds"
                - "Confirm which e-signature methods counsel and each fund accept"
                - "Identify signatories who need a notary or apostille"
                - "Write and send a one-page signing guide to every signatory"
            - name: Simultaneous or split signing and completion
              description: |-
                ## Purpose
                Some rounds sign and complete on the same day; others sign the agreement first and complete later, once conditions such as a regulatory clearance or a third-party consent are met. Understanding the two routes, and which one your round is using, explains what investors are committed to between the two dates and what the company must not do in the gap.

                ## Milestones
                1. The difference between signing and completion written in your own words.
                2. Your round's route confirmed with counsel and written on the timeline.
                3. For a split, the restrictions on the company between signing and completion listed.
                4. The long-stop date and what happens if it passes noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "The round's signing route is confirmed with counsel and recorded on the timeline, with any interim restrictions and long-stop date listed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask counsel whether this round will sign and complete on the same day"
                - "Write down the gap restrictions if signing and completion are split"
                - "Note the long-stop date and the consequence of missing it"
                - "Add both dates to the closing timeline"
            - name: Term sheet conformity review of the long-form drafts
              description: |-
                ## Purpose
                Drafts drift: an investor-friendly default from a precedent document, a veto that was never discussed, a vesting clause slightly harsher than agreed. A line-by-line comparison of the long-form drafts against the signed term sheet, done by the founders as well as counsel, catches the drift before it is signed into the company's constitution.

                ## Milestones
                1. A table with each term sheet clause beside the corresponding long-form wording.
                2. Every difference marked as matching, acceptable, or to be pushed back.
                3. Push-back points sent to counsel with the term sheet wording quoted.
                4. Every push-back point resolved before the signing versions are circulated.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A conformity table covering every term sheet clause is completed and every push-back point resolved before signing versions circulate."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to lay out each term sheet clause beside the matching long-form wording"
                - "Mark each difference as matching, acceptable or to push back"
                - "Send counsel the push-back points with the term sheet wording quoted"
                - "Confirm every push-back point is reflected in the next turn"
            - name: Disclosure letter and disclosure bundle
              description: |-
                ## Purpose
                Anything not fairly disclosed against the warranties is a potential claim, so the disclosure letter is the founders' main protection. Building it methodically, warranty by warranty, with supporting documents in a numbered bundle, is slow work that is far cheaper than a dispute after completion.

                ## Milestones
                1. Every warranty read and any exception noted with the facts.
                2. General and specific disclosures drafted with company counsel.
                3. A numbered disclosure bundle cross-referenced from the letter.
                4. The final letter and bundle delivered and acknowledged before signing.

                ## Notes
                Disclose too much rather than too little, and be specific. A vague general disclosure is often not accepted as fair disclosure.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A disclosure letter covering every warranty exception, with a cross-referenced bundle, is delivered to investors before signing."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Read every warranty with the co-founders and note possible exceptions"
                - "Gather the documents that support each disclosure"
                - "Draft the specific disclosures with company counsel"
                - "Number the disclosure bundle and cross-reference it from the letter"
            - name: Negotiating warranty limits with counsel
              description: |-
                ## Purpose
                Investors ask for warranties to be given by the company and often the founders, and the first draft usually has high or no caps and long time limits. Agreeing with counsel which limits to ask for, such as a founder cap tied to salary or a short claims period, and taking a clear position, protects founders without stalling the closing.

                ## Milestones
                1. The warranty limits in investor counsel's draft listed.
                2. Counsel's view of usual limits for this stage and market recorded.
                3. A founders' position on caps, time limits and thresholds agreed.
                4. The final limits in the signed agreement recorded in the closing summary.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The founders' position on warranty caps, time limits and thresholds is agreed with counsel and the final outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the caps, time limits and thresholds in the current draft"
                - "Ask counsel what limits are usual for this stage and market"
                - "Agree the founders' position on each limit"
                - "Record the final limits agreed in the closing summary"
            - name: Executed side letters and obligations log
              description: |-
                ## Purpose
                Side letters give individual investors rights outside the main documents: extra information, a board observer seat, a pro rata guarantee, a most favoured nation promise. Once the terms are agreed, each letter has to be drafted, signed at completion and then honoured, and the company needs one place showing what it has promised to whom.

                ## Milestones
                1. Every side letter request collected with the agreed position.
                2. Each letter drafted by counsel and checked for conflict with the main documents.
                3. All side letters signed at completion and filed in the closing folder.
                4. An obligations log showing each promise, its holder and when it applies.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every side letter is signed and filed at completion, and an obligations log lists each promise and its holder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect every side letter request with the position agreed"
                - "Ask counsel to check each letter against the main documents"
                - "Create an obligations log listing each promise and its holder"
                - "Check side letter obligations are being met @recurring(quarterly)"
            - name: Pre-emption waivers and existing investor consents
              description: |-
                ## Purpose
                Existing shareholders often have pre-emption rights over new shares and consent rights over a new round, and an issue made without the right waivers can be challenged. Identifying every holder whose waiver or consent is needed, and collecting them early, is one of the steps most often left until it is late.

                ## Milestones
                1. Pre-emption and consent rights in the current articles and agreements listed.
                2. Every holder whose waiver or consent is needed identified with the thresholds.
                3. Waiver and consent forms sent with a clear explanation and deadline.
                4. Signed waivers and consents filed and the condition marked satisfied.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every pre-emption waiver and consent the round needs is signed and filed before completion."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask counsel which pre-emption and consent rights apply to this round"
                - "List every holder whose waiver or consent is required"
                - "Send the waiver and consent forms with a short explanation @priority(high)"
                - "File every signed waiver and mark the condition satisfied"
            - name: Third-party consents from lenders, landlords and key contracts
              description: |-
                ## Purpose
                Loan agreements, venture debt facilities, leases, grant agreements and some customer contracts restrict issuing new shares or changes in control, or require notice. Reviewing them before completion, and getting consents or giving notice in time, prevents a successful round from triggering a default elsewhere.

                ## Milestones
                1. Loan, grant, lease and key customer contracts checked for share issue or control clauses.
                2. Every contract needing consent or notice listed with its deadline.
                3. Consent requests or notices sent with the counterparties' contact named.
                4. Written consents filed in the closing folder.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every contract requiring consent or notice for the round has a written consent or a notice sent, filed before completion."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the company's loans, grants, leases and largest customer contracts"
                - "Ask counsel to check each for share issue or change of control clauses"
                - "Send consent requests or notices to each counterparty that needs one"
                - "File every written consent in the closing folder"
            - name: Funds flow memo and wire fraud checks
              description: |-
                ## Purpose
                Wire fraud during closings is common and costly: a spoofed email with changed bank details can redirect an investor's whole cheque. A funds flow memo stating who pays what to which account, with bank details confirmed by phone on a known number and never changed by email, protects the round at its most exposed moment.

                ## Milestones
                1. A funds flow memo listing each investor, amount, currency and receiving account.
                2. Fees to be paid from proceeds, such as investor counsel's, shown separately.
                3. Bank details confirmed to every investor by a call on a known number.
                4. Each receipt matched to the memo and confirmed in writing to the investor.

                ## Notes
                Agree a rule that bank details never change by email. If anyone receives new details, stop and call a number you already had.
              priority: high
              deadlineOffsetDays: 40
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off funds flow memo exists, bank details are verbally confirmed with every investor, and every receipt is matched to it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the funds flow memo with each investor's amount and currency"
                - "Agree in writing that bank details will never be changed by email"
                - "Call each investor on a known number to confirm the account details"
                - "Match each receipt to the memo and confirm it to the investor"
            - name: Closing certificates, good standing and legal opinions
              description: |-
                ## Purpose
                Formal deliverables are usually required at completion: a certificate that warranties are still true, an officer's or secretary's certificate attaching resolutions, evidence of good standing from the registry, and sometimes a legal opinion. Knowing which are needed and preparing them before completion day avoids a last-minute scramble for a registry certificate.

                ## Milestones
                1. Every completion certificate and deliverable listed from the agreement.
                2. Good standing evidence requested from the registry within the dates required.
                3. Certificates drafted by counsel and reviewed by the signing officer.
                4. All deliverables held by counsel ready for release on completion.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every completion certificate and good standing document the agreement requires is held by counsel before completion day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every certificate and deliverable required at completion"
                - "Request good standing evidence from the company registry"
                - "Review each certificate before the officer signs it"
                - "Confirm with counsel that all deliverables are held for release"
            - name: Founder service agreements and IP assignments at completion
              description: |-
                ## Purpose
                Rounds commonly require founders to sign new service agreements, restrictive covenants and confirmatory IP assignments at completion, and sometimes to re-vest part of their shares. These are personal documents with long consequences, so founders should read them separately from the company documents and, where the interests differ, take their own advice.

                ## Milestones
                1. Every personal document each founder must sign listed.
                2. Salary, notice, covenants and leaver terms in each agreement summarised.
                3. Any founder vesting changes checked against the term sheet.
                4. Each founder confident they understand their documents, with independent advice taken where needed.

                ## Notes
                Company counsel acts for the company. A founder with concerns about their own service agreement or vesting may need separate advice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each founder has reviewed and signed their service agreement and IP assignment, with vesting matching the term sheet."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every personal document each founder must sign"
                - "Summarise notice, covenants and leaver terms for each founder"
                - "Check any founder re-vesting against the term sheet wording"
                - "Decide with each founder whether they need independent advice"
            - name: Closing legal costs tracked against the cap
              description: |-
                ## Purpose
                Legal costs in a priced round can run well past the estimate when drafts go through many turns, and investor counsel's fees are often paid by the company out of the proceeds up to an agreed cap. Tracking work in progress weekly and checking final invoices against the engagement letter and the cap avoids a surprise at completion.

                ## Milestones
                1. The fee estimate and investor counsel cap written in the closing summary.
                2. Work in progress requested from company counsel each fortnight.
                3. Any expected overrun raised and agreed before the work is done.
                4. Final invoices checked against the estimate and the cap before payment.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Both counsels' final invoices are checked against the estimate and cap before payment, with any overrun agreed in advance."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the fee estimate and investor counsel cap in the closing summary"
                - "Ask company counsel for work in progress every two weeks"
                - "Raise any expected overrun before the extra work starts"
                - "Check final invoices against the estimate and cap"
            - name: Board meeting approving the round
              description: |-
                ## Purpose
                Directors must approve the issue of new shares, the documents and usually the call for shareholder approval, and the minutes or written resolution become closing documents. Preparing the board paper, the resolutions and a clear explanation of the terms lets directors approve quickly and with the information they are entitled to.

                ## Milestones
                1. Board resolutions drafted by counsel covering every approval the round needs.
                2. A board paper summarising terms, dilution and any director conflicts.
                3. The meeting held or written resolution signed with the right quorum.
                4. Signed minutes or resolutions filed with the closing documents.

                ## Notes
                Start from the **Board meeting** template. Directors who are also investors in the round may need to declare an interest; ask counsel how to handle it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Board approval of the round is given by meeting or written resolution, and signed minutes are filed with the closing documents."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask counsel to draft the board resolutions for the round"
                - "Write a short board paper on the terms and dilution"
                - "Hold the board meeting or circulate the written resolution"
                - "File the signed minutes with the closing documents"
            - name: Shareholder approvals for the round
              description: |-
                ## Purpose
                Depending on the company's constitution and the law where it is incorporated, shareholders may need to approve new articles, authorise the directors to issue shares, disapply pre-emption or approve the round as a consent matter. Getting the resolutions, thresholds and voters right, and the signatures in early, removes one of the most common last-week blockers.

                ## Milestones
                1. Every shareholder approval the round needs listed with its threshold.
                2. Written resolutions or a meeting notice prepared by counsel.
                3. Votes or signatures collected above the required threshold.
                4. Passed resolutions filed and the conditions marked satisfied.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every shareholder resolution the round requires is passed above its threshold and filed before completion."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask counsel which shareholder approvals the round needs and their thresholds"
                - "Check which shareholders together reach each threshold"
                - "Circulate the written resolutions with a one-paragraph explanation"
                - "File the passed resolutions and update the conditions tracker"
            - name: Completion day run sheet
              description: |-
                ## Purpose
                Completion day itself can be a single email from counsel or a long day of releasing signatures, receiving funds in several currencies and issuing shares in a set order. A run sheet with the sequence, who confirms each step and a contact for every investor makes the day calm and leaves a clear record of what happened when.

                ## Milestones
                1. The completion sequence agreed with both counsel, step by step.
                2. A named person and phone number for each investor and adviser on the day.
                3. Each step confirmed in writing as it happens.
                4. A completion confirmation sent to every party when the last step is done.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Completion is run from an agreed run sheet, with every step confirmed in writing and a completion notice sent to all parties."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the completion sequence with both counsel"
                - "Collect a day-of contact for every investor and adviser"
                - "Confirm each step in writing as it completes"
                - "Send the completion confirmation to every party"
            - name: Share issue, certificates and register entries on completion
              description: |-
                ## Purpose
                Until the shares are allotted, entered in the register and evidenced, investors have paid but do not hold what they bought. Issuing shares promptly after funds are received, with certificates or notices sent and the register updated, is both a legal duty in most places and the first impression the company gives its new shareholders.

                ## Milestones
                1. Shares allotted by the directors on receipt of funds.
                2. The register of members or stock ledger updated with each new holder.
                3. Share certificates or holding notices sent to every investor.
                4. Any converted SAFEs or notes cancelled and the holders notified.
              priority: high
              deadlineOffsetDays: 50
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All new shares are entered in the register and every investor holds a certificate or notice within the period counsel advises after completion."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm with counsel the allotment wording and timing after funds arrive"
                - "Update the register of members with every new holding"
                - "Send share certificates or holding notices to each investor"
                - "Cancel converted instruments and notify their holders"
            - name: Post-completion filing pack and deadlines
              description: |-
                ## Purpose
                Registries and securities regulators set short deadlines for filings after a round: a return of allotment, new articles and special resolutions, changes to people with significant control, and in some countries a securities notice such as a Form D in the US or a stamp duty return. Building the filing pack from the closing documents with each deadline counted from completion stops the round ending in late filing penalties.

                ## Milestones
                1. Every filing triggered by the round listed with its deadline and authority.
                2. Each filing prepared by counsel or the company secretary and checked.
                3. Every filing submitted and its acknowledgement saved.
                4. Public registry records checked to show the new share capital and articles.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every filing triggered by the round is made before its deadline, with acknowledgements saved and the public record checked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask counsel for every filing the round triggers and its deadline"
                - "Prepare or review each filing before submission"
                - "Save every filing acknowledgement in the closing folder"
                - "Check the next annual registry confirmation shows the new shareholders @recurring(yearly)"
            - name: Round announcement and team briefing after funds clear
              description: |-
                ## Purpose
                Announcing before the money has cleared is a risk founders regret when a closing slips or an investor drops out. Planning the team briefing, the investor quotes and the public announcement for after funds are received, with the lead's approval of wording, gives the round its moment without exposing the company.

                ## Milestones
                1. A rule agreed that nothing is announced before funds are received.
                2. The team briefing written, covering what changes and what does not.
                3. Announcement wording and quotes approved by the lead investor.
                4. The team told first, then customers and the public.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The team is briefed and the round announced only after funds are received, using wording the lead investor approved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree with the lead that nothing is announced before funds clear"
                - "Write the team briefing on what the round changes"
                - "Send the announcement draft to the lead investor for approval"
                - "Brief the team before the public announcement goes out"
            - name: Closing bible issued to every party
              description: |-
                ## Purpose
                Six months later someone will need the signed shareholders' agreement, and the version in an email thread may not be the signed one. A closing bible, the full set of executed documents with an index, issued to the company and investors after completion, is the authoritative record for diligence in the next round and for any question about what was agreed.

                ## Milestones
                1. Every executed document collected from counsel with all signature pages attached.
                2. An index listing each document, its date and parties.
                3. The bible issued to the company, its board and every investor who is entitled to it.
                4. A master copy saved where the next round's data room can draw on it.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An indexed closing bible of every executed document is issued to all entitled parties within ninety days of completion."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask counsel when the closing bible will be compiled"
                - "Check every executed document has complete signature pages"
                - "Save the master copy with its index in the company's records"
                - "Add any later amendment or waiver to the closing bible @recurring(quarterly)"
            - name: First priced round closing for a first-time founder
              description: |-
                ## Purpose
                Your first priced round can feel like being handed a stack of documents in a language you half speak while still running the company. Splitting the closing into four phases, learning the documents, fixing the company's records, negotiating the drafts and completing, with protected time each week, gets you through without losing the business in the process.

                ## Milestones
                1. Four phases on the calendar with a target date for each.
                2. Three hours a week blocked for closing work, separate from customer and team time.
                3. An experienced founder or adviser available for one call in each phase.
                4. The round completed with every phase's checklist done.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A first priced round completes with four phases planned and run, and at least one adviser call held in each phase."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Block three hours a week for closing work in your calendar"
                - "Ask a founder who closed a priced round to be your sounding board"
                - "Set a target date for each of the four phases"
                - "Book a call with your sounding board at the start of each phase"
            - name: Running the closing as the finance lead
              description: |-
                ## Purpose
                Finance leads are often asked to run the closing while still doing payroll, month-end and the board pack, and they become the person every lawyer emails. Treating the closing as a service to the founders and board, with clear scope, a handover of routine finance work and a daily hour ring-fenced for the deal, keeps both the round and the books on time.

                ## Milestones
                1. The finance lead's closing scope agreed with the CEO in writing.
                2. Routine finance tasks for the closing period delegated or deferred.
                3. Cash received reconciled to signed commitments throughout the close.
                4. A handover note at completion covering filings, registers and obligations.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The closing completes with month-end delivered on time, cash reconciled to commitments and a written handover note."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree the closing scope and decision limits with the CEO"
                - "Delegate or defer routine finance tasks for the closing period"
                - "Reconcile cash received against signed commitments @recurring(weekly:thu)"
                - "Write a handover note covering filings, registers and obligations"
            - name: Closing a round with many small angel investors
              description: |-
                ## Purpose
                Twenty angels at small cheques each means twenty sets of identity checks, twenty signature pages and twenty people who can delay completion by being on holiday. A nominee or special purpose vehicle, a simple signing platform, or a separate later closing for slower angels can each make the round manageable; the right choice is one to agree with counsel and the lead.

                ## Milestones
                1. Every angel listed with allocation, onboarding status and signing method.
                2. A decision on direct holdings, a nominee or a special purpose vehicle, agreed with counsel.
                3. A deadline after which slow angels move to a later closing.
                4. Every angel either completed or moved to a later closing by agreement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every angel in the round has either completed or been moved to a later closing by a deadline agreed with the lead."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every angel with allocation and onboarding status"
                - "Ask counsel to compare direct holdings with a nominee structure"
                - "Set the deadline for angels to join the main completion"
                - "Send angels a short closing status note @recurring(weekly:mon)"
            - name: Cross-border investors on the register
              description: |-
                ## Purpose
                Overseas investors bring extra closing steps: identity checks against foreign documents, notarised signatures, currency conversion, tax forms, and in some sectors and countries a foreign investment screening notification before shares can be issued. Mapping these per investor at the start, with counsel in each relevant country, keeps the slowest investor off the critical path.

                ## Milestones
                1. Each overseas investor listed with country, entity type and currency.
                2. Any foreign investment screening or sector regulator notice identified by counsel.
                3. Notarisation, tax form and currency steps scheduled per investor.
                4. Every overseas investor's funds received and shares issued.

                ## Notes
                Foreign investment screening rules vary widely and can make completion conditional on clearance. Ask counsel early whether your sector is covered.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every overseas investor completes with screening, tax and currency steps documented and their shares issued."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List each overseas investor with country, entity and currency"
                - "Ask counsel whether any foreign investment screening applies"
                - "Schedule notarisation and tax form steps for each overseas investor"
                - "Confirm each overseas investor's funds and share issue"
            - name: Rescuing a stalled closing
              description: |-
                ## Purpose
                Stalled closings usually share a cause: a lead waiting on its investment committee, an issue in diligence nobody wants to raise, or a document the parties have stopped negotiating. Diagnosing which it is, talking directly to the lead partner rather than through counsel, and agreeing a new dated plan often restarts a deal that was drifting towards failure.

                ## Milestones
                1. The real reason for the stall identified and written down.
                2. A direct conversation held with the lead partner.
                3. A revised timeline with new dates agreed by both sides.
                4. A fallback plan drafted in case the round does not complete, shared with the board.

                ## Notes
                Check runway against the revised timeline. If the round might fail, the board needs to know before cash becomes the problem.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A revised closing timeline agreed with the lead partner, plus a written fallback plan shared with the board."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down when the closing stalled and what changed at that point"
                - "Call the lead partner directly to ask what is holding it up"
                - "Agree a revised timeline with dated steps"
                - "Draft a fallback plan and share it with the board"
            - name: Second closing within the same round
              description: |-
                ## Purpose
                When some investors cannot complete with the lead, many agreements allow a second or later closing on the same terms within a set window. Running it properly means checking the window and cap in the agreement, getting accession deeds signed, repeating onboarding and filings, and keeping the main investors informed.

                ## Milestones
                1. The later closing window, maximum amount and conditions confirmed in the agreement.
                2. Each later investor signed up by accession deed or joinder.
                3. Funds received, shares issued and filings repeated for the later closing.
                4. Main investors told of the later closing and the updated capitalisation.
              priority: low
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A later closing completes within the agreed window, with accession deeds signed, shares issued and filings made."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the later closing window and maximum amount in the agreement"
                - "Send each later investor the accession deed and onboarding pack"
                - "Repeat the share issue and filings for the later closing"
                - "Check whether the later closing window is still open @recurring(monthly:20)"
            - name: Administering later tranche completions
              description: |-
                ## Purpose
                Tranched rounds pay part of the investment at completion and the rest when agreed milestones are reached, and each later tranche is a mini closing with its own evidence, notice and share issue. Tracking milestone evidence monthly and preparing each tranche notice in advance makes sure the company receives money it has earned without argument.

                ## Milestones
                1. Each tranche's milestone, evidence and notice process listed from the agreement.
                2. Milestone progress tracked monthly with evidence filed.
                3. Tranche notices sent with evidence when milestones are met.
                4. Funds received and shares issued for each tranche.

                ## Notes
                Milestone definitions written loosely in the documents become disputes later. Keep evidence that matches the exact wording.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every tranche whose milestone is met is called with evidence matching the agreement, and its funds received and shares issued."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Copy each tranche milestone and its exact wording into a tracker"
                - "File evidence against each milestone as it is achieved"
                - "Check progress against the next tranche milestone @recurring(monthly:5)"
                - "Send the tranche notice with evidence when a milestone is met"
            - name: Holding company flip completed before the round closes
              description: |-
                ## Purpose
                Some lead investors require the company to sit under a new holding company in a different jurisdiction before they will invest, which means a share exchange, new registers and tax and legal advice in two countries. Running the flip as its own workstream on the critical path, with its own conditions and deadlines, stops it from delaying the round it was meant to enable.

                ## Milestones
                1. The new holding structure and jurisdictions confirmed with counsel and tax advisers.
                2. A share exchange plan with every existing holder's new shares calculated.
                3. Every existing holder signed up to the exchange.
                4. The flip completed and registers in both entities updated before round completion.

                ## Notes
                Tax consequences for founders and existing holders vary by country. Get written tax advice before agreeing to a flip.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The holding company flip is completed with every existing holder exchanged and both registers updated before the round completes."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the lead investor why the flip is required and where"
                - "Get written tax advice for founders and existing holders"
                - "Calculate every holder's shares in the new holding company"
                - "Add the flip steps to the closing timeline's critical path"
            - name: Closing retrospective and reusable playbook
              description: |-
                ## Purpose
                Each round closes faster than the last if the company keeps what it learned: which steps slipped, which documents needed fixing, which investors were slow and why. A retrospective within a month of completion, turned into a playbook of checklists and timings, makes the next round or extension quicker and cheaper to close.

                ## Milestones
                1. A retrospective held with the deal team and company counsel.
                2. Actual timings compared with the original closing timeline.
                3. A playbook of checklists, templates and lessons saved for the next round.
                4. Housekeeping fixes that would help next time put on the calendar.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A closing playbook with actual timings and lessons is saved within a month of completion and reviewed before the next round."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Hold a one-hour retrospective with the deal team and counsel"
                - "Compare actual timings with the original closing timeline"
                - "Ask the agent to draft a playbook from the retrospective notes"
                - "Review the closing playbook before the next round or extension @recurring(yearly)"
---

# Round Closing & Completion

This area is for founders and finance leads who have a signed term sheet and now have to turn it into money in the bank, usually in four to ten weeks of documents, approvals and chasing. It starts with the foundations (a closing timeline, a master checklist, company counsel, signatories, housekeeping, the capitalisation schedule and a bank ready to receive funds), then the weekly machinery of a live closing, the documents and signing rules worth understanding, the decisions inside the long-form drafts, the dated events from board approval to filings, variants for first-time founders, finance leads, angel-heavy rounds, overseas investors, stalled deals and second closings, and finally tranches, holding company flips and a playbook for next time.

What repeats during a closing is a twice-weekly call with both sets of counsel, a Tuesday conditions update, a Wednesday signature chase, a Thursday onboarding check and a Friday status note, with a monthly post-completion obligations check, quarterly side letter and consent matter reviews and a yearly playbook refresh once the round has closed. The Operational checklist, Vendor, Meeting notes, Risk register and Board meeting templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
