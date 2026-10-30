---
id: investment-banking.sell-side-data-room-and-qa
name: Sell-Side Data Room and Q&A
description: "A sell-side data room and Q&A system: provider choice, index and request lists, access by bidder and phase, a question log with client-approved answers, audit trails, freeze and close-out."
category: business
version: 1.0.0
tags: [investment-banking, sell-side-data-room-and-qa, knowledge-worker, analyst, associate, data-room, due-diligence, q-and-a]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - operational-checklist
    - risk-register
    - meeting-notes
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sell-Side Data Room and Q&A
          description: "Running the virtual data room and Q&A on a sale: folder structure, access levels, question logs, responses agreed with the client and audit trails."
          projects:
            - name: Data room readiness review with the client
              description: |-
                ## Purpose
                Most sale timetables slip in the data room, not the bid rounds, because nobody checked early how much of the company's paperwork exists, where it lives and who can find it. A two-hour walk through the main document categories with the client's finance lead and general counsel shows which folders will be quick, which need months, and which documents may not exist at all.

                ## Milestones
                1. A list of the twelve or so main document categories, each marked ready, findable or missing.
                2. A named owner on the client side for every category.
                3. Known gaps, such as unsigned contracts or missing board minutes, written down with a plan to fix or explain them.
                4. A realistic date for a populated first-round room agreed with the client and your deal team.

                ## Notes
                Ask what is in personal inboxes and on founders' laptops. The most important contracts are often there rather than on a shared drive.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A readiness table covering every main document category, with owners and gaps, reviewed with the client and dated."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book a two-hour readiness session with the client's finance lead and counsel"
                - "Mark each document category ready, findable or missing during the session"
                - "Write up known gaps with an owner and a fix date for each"
                - "Agree the target date for the first-round room with your vice president"
            - name: Choosing a virtual data room provider
              description: |-
                ## Purpose
                Providers differ more than their sales decks suggest on Q&A workflow, bulk upload, redaction tools, watermarking, analytics, support hours and how they price pages or users. Comparing three against the deal's real needs, a set number of bidders, two phases and perhaps foreign-language documents, avoids moving rooms halfway through a process, which is painful and visible to every bidder.

                ## Milestones
                1. The deal's requirements written as a short list: bidders, phases, languages, Q&A volume, security standards.
                2. Three providers shortlisted, including the bank's approved panel where one exists.
                3. Quotes compared on the same basis, with page, user and month charges separated.
                4. A provider chosen with the client, the engagement signed and the contract filed.

                ## Notes
                Start from the **Vendor** template. Check who pays: on many sell-side deals the client contracts with the provider directly, and that changes who approves the quote.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider chosen against written requirements, with three compared quotes and the signed engagement on file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the deal's data room requirements on one page"
                - "Ask the bank's procurement or deal support team for the approved provider list"
                - "Request quotes from three providers on the same assumptions"
                - "Record the chosen provider and the reasons in the deal file"
            - name: Data room index and folder numbering scheme
              description: |-
                ## Purpose
                Bidders' lawyers and accountants navigate by folder number, and every question, answer and disclosure reference will cite it for months. A numbered index agreed before the first upload, built around how diligence teams actually work (corporate, financial, tax, commercial, people, property, IT, legal), saves renumbering later, which breaks every reference already made.

                ## Milestones
                1. A top-level structure of eight to fourteen numbered sections agreed with deal counsel.
                2. Sub-folders defined two levels down, each with a one-line description of what belongs there.
                3. A naming rule for files, including date and a short title, written into the index.
                4. The index loaded into the provider and locked against ad hoc new folders.

                ## Notes
                Keep a placeholder folder for items to follow, so bidders can see a document is expected rather than assume it is missing.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A numbered index with descriptions and a file naming rule, approved by deal counsel and loaded before the first upload."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the index from the group's last comparable sale as a starting point"
                - "Adjust the top-level sections to this company's business and risks"
                - "Send the draft index to deal counsel for comment"
                - "Load the approved index and switch off folder creation for client users"
            - name: Document request list issued to the client
              description: |-
                ## Purpose
                A request list that mirrors the data room index, line by line, turns a vague request to send everything into a set of owned tasks the client can tick off. Issued early and tracked weekly, it is the single best predictor of whether the room is full on the day the first bidders arrive.

                ## Milestones
                1. A request list with one line per expected document, numbered to match the index.
                2. Each line given a client owner, a priority for phase one or phase two and a due date.
                3. The list walked through with the client team so every owner knows what is expected.
                4. A weekly completion percentage reported to the deal team.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A request list numbered to the index, with owners and due dates, issued to the client and tracked to a weekly completion percentage."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Build the request list in the same numbering as the data room index"
                - "Mark each line as phase one or confirmatory"
                - "Walk the client owners through their lines on a single call"
                - "Chase outstanding request list items with each owner @recurring(weekly:thu)"
            - name: Access level matrix by bidder and phase
              description: |-
                ## Purpose
                Access is where data rooms leak: a strategic competitor sees customer pricing too early, or a dropped bidder still has a login after round one. A matrix that sets, for each bidder group and phase, which folders can be viewed, printed or downloaded makes every permission decision a lookup rather than a judgement made under pressure.

                ## Milestones
                1. User groups defined: client, sell-side advisers, each bidder and each bidder's advisers.
                2. Folder permissions set for each group in each phase, including view only and no access.
                3. Restricted folders, such as customer contracts or people data, marked with who may approve release.
                4. The matrix signed off by the client and deal counsel and kept with the deal file.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off access matrix covering every user group, phase and restricted folder, matched to the provider's settings."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every user group the room will need, one per bidder"
                - "Set view, print and download rights for each group by phase"
                - "Mark the folders that need client approval before release"
                - "Check the provider's group settings against the signed matrix"
            - name: Q&A log format and question numbering rules
              description: |-
                ## Purpose
                Hundreds of questions arrive from several bidders, often duplicated, often mis-filed, and the log is the only record of what was asked and what the seller said. A log with fixed columns (number, bidder, workstream, folder reference, question, owner, draft answer, approver, status, date released) lets anyone on the team find any answer in seconds and proves later what was disclosed.

                ## Milestones
                1. Column set agreed and built into the provider's Q&A module or a master spreadsheet.
                2. A numbering rule that shows bidder and sequence, such as B3 followed by a running number.
                3. Status values defined, from received through drafted, approved and released.
                4. A test batch of ten questions run through the log end to end before launch.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A Q&A log with fixed columns, numbering and statuses, tested with ten sample questions before the room opens."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide whether the provider's Q&A module or a master spreadsheet is the record"
                - "Build the log with the agreed columns and status values"
                - "Write the numbering rule at the top of the log"
                - "Run ten sample questions through every status before launch"
            - name: Response approval route agreed with the client
              description: |-
                ## Purpose
                Every answer released to a bidder is a statement by the seller and may be relied on later in negotiations or a dispute, so who approves it matters as much as what it says. Agreeing in writing who drafts, who checks, which answers need counsel and who presses release stops answers going out on a junior's word or sitting unapproved for a week.

                ## Milestones
                1. Drafting owners named for each workstream on the client side.
                2. A rule for which answers need deal counsel review, such as anything on litigation, contracts or tax.
                3. One client approver and one deputy named, with expected turnaround times.
                4. The route written on a single page and shared with the whole deal team.

                ## Notes
                The bank coordinates and checks answers but should not be the one who decides what the seller discloses. Keep that decision with the client and its counsel.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page approval route naming drafters, reviewers, counsel triggers and a client approver, accepted by the client in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft the approval route on a single page"
                - "Ask deal counsel which answer topics must pass through them"
                - "Confirm the client approver and deputy by email"
                - "Share the final route with the deal team and the client team"
            - name: Watermark, print and download settings
              description: |-
                ## Purpose
                Settings chosen in a hurry tend to be either so tight that bidders' advisers cannot work or so loose that the whole room ends up on a laptop. Deciding watermark text, print and download rights and screen-view-only folders deliberately, with the client, balances diligence speed against how much control the seller keeps.

                ## Milestones
                1. Watermark text chosen, usually user name, company and date.
                2. Download allowed, blocked or limited for each sensitivity level.
                3. Any view-only folders tested on a bidder test account.
                4. The settings recorded next to the access matrix.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Watermark, print and download settings agreed with the client, tested on a bidder test account and recorded with the access matrix."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the sensitivity levels used in the access matrix"
                - "Agree print and download rights for each level with the client"
                - "Log in as a test bidder and try to print a view-only file"
                - "Record the final settings beside the access matrix"
            - name: Client-side data room team and folder owners
              description: |-
                ## Purpose
                The client's finance lead cannot answer HR, IT and property questions alone, and if they try, the answers slow down and get worse. A small named team, one person per workstream with a deputy, who know they will be asked to find documents and draft answers during the process, keeps the work moving when the CFO is in board meetings.

                ## Milestones
                1. One owner and one deputy named for each top-level folder.
                2. Each owner briefed on confidentiality, since most staff will not know a sale is under way.
                3. Owners given upload rights only to their own folders.
                4. A contact sheet for the client team kept in the deal file.

                ## Notes
                Agree with the client how wide the circle of people who know about the sale can be. Some owners may need a cover story or a project codename.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contact sheet naming an owner and deputy for every top-level folder, each briefed and set up with scoped upload rights."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the client which colleagues may be told about the sale"
                - "Name an owner and deputy against each top-level folder"
                - "Run a thirty-minute briefing on confidentiality and the codename"
                - "Give each owner upload rights to their own folders only"
            - name: Data room guide for bidders and their advisers
              description: |-
                ## Purpose
                Two pages sent with the first logins cuts the flood of questions about how to ask questions, where the financials are and why a folder is empty. It also sets the rules of the room in writing: one Q&A channel, no direct contact with management, numbering to quote and how updates will be announced.

                ## Milestones
                1. A two-page guide covering navigation, the Q&A process, contact rules and update notices.
                2. The guide checked against the process letter so the rules match.
                3. The guide uploaded to the top folder and attached to the welcome email.
                4. A short version for the client's own users.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page bidder guide consistent with the process letter, uploaded to the top folder and sent with the first logins."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft the guide from the group's last bidder guide"
                - "Check the contact and Q&A rules against the process letter"
                - "Upload the guide to the top folder of the room"
                - "Write the shorter client user version"
            - name: Daily Q&A triage and routing
              description: |-
                ## Purpose
                Questions that sit unrouted for two days become complaints from the bidder's lead adviser to your managing director. A fixed daily slot to sort new questions by workstream, merge duplicates, push back on out-of-scope ones and send the rest to the right client owner keeps the log moving and gives you a clear count of what is open.

                ## Milestones
                1. A fixed daily triage slot in your calendar while the room is live.
                2. Every new question tagged with workstream, folder and owner within one working day.
                3. Duplicates across bidders linked so they get one consistent answer.
                4. A twice-weekly review of anything routed but not yet drafted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Throughout the live room, every new question is tagged and routed within one working day, with duplicates linked."
                cadence: rolling
              tasks:
                - "Block a thirty-minute triage slot in your calendar"
                - "Tag and route every new question in the log @recurring(daily)"
                - "Link duplicate questions across bidders to a single draft answer"
                - "Review routed questions still waiting for a draft @recurring(weekly:mon,thu)"
            - name: Weekly Q&A status report for the client
              description: |-
                ## Purpose
                Clients rarely see the shape of the diligence until a bidder complains, and by then the answer backlog is the deal team's problem. A one-page weekly report showing questions received, answered and open by workstream and bidder, with the oldest items named, gives the client's approver a reason to clear the queue before the weekend.

                ## Milestones
                1. A one-page report layout with counts by workstream and bidder.
                2. The ten oldest open questions listed with their owner.
                3. The report sent at the same time each week.
                4. Themes in the questions noted in two or three lines for the deal team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page Q&A status report sent to the client every week the room is live, with open counts and the ten oldest items."
                cadence: rolling
              tasks:
                - "Build the one-page status report layout from the log fields"
                - "Send the weekly Q&A status report to the client approver @recurring(weekly:fri)"
                - "Add two lines on emerging question themes for the deal team"
                - "Ask the agent to summarise the week's new questions by theme before drafting the report"
            - name: Upload control and document version log
              description: |-
                ## Purpose
                When the same contract appears three times in different folders with different dates, bidders ask which is current and the seller looks disorganised. One person approving uploads, a log of every file added, replaced or withdrawn, and a rule that superseded versions stay visible but marked keeps the room clean and the record defensible.

                ## Milestones
                1. One upload approver on the bank side and one on the client side.
                2. A version log recording each file added, replaced or withdrawn, with date and reason.
                3. A rule for superseded documents, kept and marked rather than deleted.
                4. A weekly reconciliation of the provider's upload report against the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every upload, replacement and withdrawal during the process is in the version log, reconciled weekly to the provider's report."
                cadence: rolling
              tasks:
                - "Name one upload approver on each side"
                - "Set up the version log with date, file, action and reason columns"
                - "Reconcile the provider's upload report against the version log @recurring(weekly:wed)"
                - "Mark superseded files in their names instead of deleting them"
            - name: User access requests and removals log
              description: |-
                ## Purpose
                Bidders add advisers all through a process, and every new login is a person seeing confidential information who must be covered by a signed confidentiality agreement. A log of each request, who approved it, the NDA it falls under and when access ended means you can answer the client's question about who has seen the room without guessing.

                ## Milestones
                1. A log of every user added, with requesting bidder, approver and NDA reference.
                2. A rule that no login is created before the NDA or its adviser joinder is confirmed.
                3. Removals logged on the day a bidder drops out or an adviser leaves the team.
                4. A weekly check that provider users match the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Provider user lists match the access log every week, and every user ties to a confirmed confidentiality agreement."
                cadence: rolling
              tasks:
                - "Create the access log with NDA reference and approver columns"
                - "Confirm the NDA position before creating any new bidder login"
                - "Compare the provider user list with the access log @recurring(weekly:tue)"
                - "Remove users on the same day a bidder withdraws"
            - name: Bidder activity analytics review
              description: |-
                ## Purpose
                Provider reports show which bidders opened which folders and for how long, and they often tell you more about interest than the bidders' own calls do. A short weekly read of the analytics, shared carefully with the deal team, flags a bidder who has not opened the financials, or one spending all its time on a single customer contract.

                ## Milestones
                1. The provider's activity reports set up by bidder and by folder.
                2. A weekly note of two or three observations per active bidder.
                3. Unusual patterns raised with the vice president before the next bidder call.
                4. A rule agreed on what analytics may be shared with the client.

                ## Notes
                Treat activity data as a signal, not proof. Advisers often download and read offline, so low views can still mean serious work.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly analytics note per active bidder throughout the live room, with notable patterns raised before bidder calls."
                cadence: rolling
              tasks:
                - "Set up activity reports by bidder and folder in the provider"
                - "Write a short activity note for each active bidder @recurring(weekly:thu)"
                - "Agree with the vice president what analytics the client may see"
                - "Raise any bidder with no financials activity before its next call"
            - name: Open question ageing and chase list
              description: |-
                ## Purpose
                Some questions sit for weeks because the answer is awkward or the owner is busy, and those are exactly the ones bidders remember at the price negotiation. An ageing view that sorts open questions by days outstanding, with a fixed chase rule at five and ten days, brings the difficult ones to the surface while there is still time to answer them well.

                ## Milestones
                1. Days outstanding calculated for every open question in the log.
                2. A chase rule: owner reminder at five working days, approver escalation at ten.
                3. A weekly chase list sent to owners with their own items only.
                4. Questions over ten days raised with the vice president by name.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No open question exceeds ten working days without being escalated to the client approver and the vice president."
                cadence: rolling
              tasks:
                - "Add a days outstanding column to the Q&A log"
                - "Send each owner a chase list of their own open items @recurring(weekly:mon)"
                - "Escalate questions past ten working days to the client approver"
                - "Note in the log why any question is deliberately held"
            - name: Data room update notices to bidders
              description: |-
                ## Purpose
                New documents dropped into a room without notice get missed, and bidders later say they were never given them. Batched update notices, listing each new or replaced file with its folder number and sent to all bidders with access at the same time, create a clean record of what was disclosed and when, and keep bidders on an equal footing.

                ## Milestones
                1. A notice template listing file, folder number and whether new or replaced.
                2. Updates batched into set days rather than sent file by file.
                3. Each notice sent to every bidder with access to the affected folders at once.
                4. Notices filed in the room's top folder as a running record.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every upload after opening appears in a dated update notice sent to all bidders with access, filed in the room."
                cadence: rolling
              tasks:
                - "Draft the update notice template with folder numbers"
                - "Agree with the vice president which days notices go out"
                - "Send the batched update notice to all bidders with access @recurring(weekly:wed)"
                - "File each sent notice in the room's top folder"
            - name: Answer consistency check against the IM and model
              description: |-
                ## Purpose
                Any Q&A answer that gives a different revenue figure or customer count from the information memorandum or the model invites a bidder to question everything else. Checking each batch of draft answers that contain numbers against the IM, the model and earlier answers catches contradictions before release, when they are cheap to fix.

                ## Milestones
                1. A list of the key numbers and definitions bidders will ask about, with their source.
                2. Every numeric draft answer checked against the IM, the model and prior answers.
                3. Differences resolved with the client before release, or explained in the answer.
                4. A short log of corrections kept for the vice president.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every released answer containing figures has been checked against the IM, the model and earlier answers, with corrections logged."
                cadence: rolling
              tasks:
                - "Build a key figures sheet with the source for each number"
                - "Check this week's numeric draft answers against the key figures sheet @recurring(weekly:tue)"
                - "Raise any mismatch with the client's finance lead before release"
                - "Log each correction and its cause"
            - name: Weekly audit trail export and archive
              description: |-
                ## Purpose
                If a buyer later claims it was never shown something, the audit trail of who opened what and when is the seller's evidence, and providers do not always keep it in usable form for long after a room closes. Exporting the audit report and the Q&A log each week to the deal file builds that record as you go instead of scrambling for it at the end.

                ## Milestones
                1. The provider's audit report and Q&A export located and tested.
                2. A dated archive folder in the bank's deal file for each weekly export.
                3. Each export checked to open and cover the full week.
                4. Retention rules for the exports confirmed with compliance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complete weekly series of audit trail and Q&A log exports, from opening to closing, sits in the bank's deal file."
                cadence: rolling
              tasks:
                - "Find the audit report and Q&A export options in the provider"
                - "Export and file the audit trail and Q&A log @recurring(weekly:fri)"
                - "Open each export to check it covers the full week"
                - "Ask compliance how long the exports must be kept"
            - name: Data room hygiene sweep before each phase
              description: |-
                ## Purpose
                Before every new phase the room collects clutter: empty placeholders, duplicate files, documents in the wrong folder and drafts that were never meant to be uploaded. A structured sweep before each opening, by folder, with the client's owners, means each new group of bidders sees a room that looks deliberate.

                ## Milestones
                1. Empty folders either filled, marked to follow or removed from the index.
                2. Duplicates and misfiled documents corrected and logged.
                3. Drafts, internal notes and files with tracked changes removed.
                4. A signed hygiene checklist filed before the phase opens.

                ## Notes
                Start from the **Operational checklist** template. Search file contents for words like draft, privileged and internal before each phase.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A completed hygiene checklist is filed before each phase opens, with no draft, duplicate or misfiled document left in the room."
                cadence: cyclic
              tasks:
                - "Build the hygiene checklist from the index"
                - "Run the folder-by-folder hygiene sweep with client owners @recurring(monthly:12)"
                - "Search uploaded files for draft, privileged and internal"
                - "File the signed checklist before the next phase opens"
            - name: Disclosure basics for bankers in a sale agreement
              description: |-
                ## Purpose
                What goes into the data room often becomes part of the seller's disclosure against the warranties in the sale agreement, so the room is not just a reading library. Understanding, at a banker's level, how disclosure, data room references and knowledge qualifiers usually interact helps you see why counsel cares about indexing, versions and the final archive.

                ## Milestones
                1. The disclosure and warranty sections of a past agreement from your group read and annotated.
                2. A one-page note in your own words on how the data room is typically referenced.
                3. Your three questions answered by deal counsel or the group's lawyer contact.
                4. The note filed with your data room templates.

                ## Notes
                This is for understanding the work, not for forming legal views. Disclosure positions on a live deal are for the client and its counsel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note on how data room contents relate to disclosure, checked by counsel and filed with your templates."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find a signed sale agreement from a past group deal"
                - "Annotate the disclosure and data room reference clauses"
                - "Write a one-page note on how the room is referenced"
                - "Take three questions to deal counsel and record the answers"
            - name: Writing answers that are accurate and no wider than asked
              description: |-
                ## Purpose
                Good Q&A answers answer the question asked, point to the document, and stop, while weak ones volunteer opinions, forecasts or extra problems in a friendly paragraph. Practising on real questions from past deals, and comparing your drafts with what was finally released, builds the instinct an associate will otherwise spend months correcting.

                ## Milestones
                1. Twenty released questions and answers from a past deal studied.
                2. Ten of them redrafted by you and compared with the released version.
                3. A short style sheet: refer to documents, avoid forecasts, flag when an answer is not available.
                4. A monthly self-check of three of your own released drafts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal Q&A style sheet built from twenty past answers, with ten practice redrafts compared to the released versions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull twenty released answers from a closed deal's Q&A log"
                - "Redraft ten of them without looking at the released version"
                - "Write a one-page answer style sheet from the differences"
                - "Compare three of your recent drafts with the released versions @recurring(monthly:8)"
            - name: Redaction practice for contracts and people files
              description: |-
                ## Purpose
                Customer names in a contract, salaries in an employee list and personal details in a dispute file often need hiding in phase one, and badly done redaction (black boxes over live text, unredacted metadata, a missed page) is worse than none. Practising with the provider's tool and a checklist on dummy files makes the real redactions fast and safe.

                ## Milestones
                1. The provider's redaction tool, or the bank's approved one, tried on three dummy documents.
                2. A check that redacted text cannot be copied, searched or recovered from metadata.
                3. A redaction checklist covering names, prices, personal data and file properties.
                4. A rule that every redaction is checked by a second person.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three dummy documents redacted and tested as unrecoverable, with a redaction checklist and second-check rule written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Make three dummy files with names, prices and personal details"
                - "Redact them with the approved tool"
                - "Try to copy, search and inspect the properties of each redacted file"
                - "Write the redaction checklist and second-check rule"
            - name: Spotting competitively sensitive information
              description: |-
                ## Purpose
                When a bidder is a competitor, customer pricing, margins by customer, pipeline and future strategy can raise competition law concerns if shared too early or too widely. Bankers are usually first to see the documents, so recognising the categories counsel worries about lets you route them for a decision rather than upload them by habit.

                ## Milestones
                1. The categories of sensitive information your counsel or compliance team flags written down.
                2. Each category matched to the folders where it tends to appear.
                3. A routing rule: suspected sensitive files held for counsel review before upload.
                4. Two examples from a past deal reviewed with counsel.

                ## Notes
                Whether something is too sensitive to share, and with whom, is a legal judgement for competition counsel. Your job is to notice and route.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of sensitive information categories mapped to folders, with a hold-for-counsel routing rule agreed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask counsel for their list of sensitive information categories"
                - "Map each category to the folders where it usually sits"
                - "Agree a hold-for-review rule with counsel and the vice president"
                - "Review two past examples with counsel"
            - name: Personal data in the room with counsel's rules
              description: |-
                ## Purpose
                Employee lists, customer records and dispute files carry personal data, and privacy laws in many countries limit what can be shared with bidders and how. Agreeing with counsel early how personal data will be anonymised, aggregated or held back, and in which phase, avoids pulling files out of a live room.

                ## Milestones
                1. Folders likely to hold personal data identified.
                2. Counsel's approach for each recorded: anonymise, aggregate, hold to confirmatory or exclude.
                3. Employee data provided in phase one as anonymised summaries where counsel advises.
                4. A personal data check added to the upload approval step.

                ## Notes
                Rules differ by country and by where bidders are based. Follow counsel's instructions rather than a past deal's practice.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Counsel's written approach to personal data is recorded for each affected folder, and the upload step includes a personal data check."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the folders likely to contain personal data"
                - "Ask deal counsel for their approach to each folder in writing"
                - "Prepare anonymised employee summaries for phase one where advised"
                - "Add a personal data question to the upload approval step"
            - name: Provider admin console practice in a test room
              description: |-
                ## Purpose
                Learning how to bulk upload, change group permissions, export the log and freeze the room during a live process is how mistakes reach bidders. An hour in a test room, which most providers will set up free, lets you try every admin function, including the ones you will only use once, without risk.

                ## Milestones
                1. A test room set up by the provider.
                2. Bulk upload, permission changes and Q&A workflow tried end to end.
                3. Audit export and archive functions run once.
                4. A one-page cheat sheet of the steps that are not obvious.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every admin function the deal will need has been run once in a test room, with a one-page cheat sheet written."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the provider's account manager for a test room"
                - "Try bulk upload, permission changes and the Q&A workflow"
                - "Run the audit export and archive functions once"
                - "Write the cheat sheet of non-obvious steps"
            - name: Turning a red-flag question into a client conversation
              description: |-
                ## Purpose
                Some questions reveal that a bidder has found something the seller has not explained: a lost customer, a tax dispute, a key contract with a change of control clause. Spotting these early and taking them to the client as a conversation, with the vice president, rather than routing them as ordinary log items, gives the seller time to decide how to present the issue.

                ## Milestones
                1. A short list of signals that make a question a red flag.
                2. A red-flag tag in the Q&A log.
                3. Each red flag raised with the vice president within a day.
                4. A record of how each was handled with the client.

                ## Notes
                Start from the **Risk register** template to keep red flags, owners and outcomes in one place.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every question tagged as a red flag during the process has a recorded discussion with the client and an agreed handling."
                cadence: rolling
              tasks:
                - "Write five signals that make a question a red flag"
                - "Add a red-flag tag to the Q&A log"
                - "Set up a risk register for red-flag questions"
                - "Raise each new red flag with the vice president the same day"
            - name: How buyers' diligence streams use the room
              description: |-
                ## Purpose
                Behind every bid sit financial, legal, tax, commercial, IT and insurance advisers, each reading a different slice of the room and asking different kinds of questions. Knowing what each stream typically looks for, and when its report is due to the buyer, lets you predict question waves and get the right client owner ready before the questions land.

                ## Milestones
                1. A table of the main diligence streams with what each usually reads first.
                2. The folders each stream depends on marked in the index.
                3. Typical question themes per stream listed from a past deal's log.
                4. The table shared with the client team before opening.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of diligence streams, their key folders and typical question themes, built from a past log and shared with the client team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the diligence streams a typical buyer appoints"
                - "Mark the folders each stream relies on in the index"
                - "Pull common question themes per stream from a past Q&A log"
                - "Share the table with the client folder owners"
            - name: Staged release plan for phase one and confirmatory
              description: |-
                ## Purpose
                Opening everything to every bidder at once exposes the seller's most sensitive information to people who may never bid seriously, while holding too much back depresses first-round bids. A written plan for what each phase shows, and what triggers the next release, makes the trade-off a decision the client signs rather than a series of nervous one-off calls.

                ## Milestones
                1. Each folder assigned to phase one, confirmatory or a restricted later release.
                2. Triggers defined for each release, such as shortlisting or exclusivity.
                3. The plan checked against the process letter's timetable.
                4. Client sign-off recorded.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A folder-by-folder staged release plan with triggers, consistent with the timetable and signed off by the client."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Assign every folder in the index to a release phase"
                - "Write the trigger for each release"
                - "Check the plan against the process timetable"
                - "Record the client's sign-off on the plan"
            - name: Clean team arrangements for a competitor bidder
              description: |-
                ## Purpose
                When a trade competitor bids, the most sensitive files may only be shown to a ring-fenced clean team of outside advisers or named individuals under extra undertakings. Setting this up properly, with counsel, means a separate restricted folder, a named user list and a written protocol, before the competitor asks for customer contracts.

                ## Milestones
                1. Counsel's decision on whether a clean team is needed and for which bidders.
                2. A clean team protocol signed by the bidder, prepared by counsel.
                3. A restricted folder with access only for named clean team members.
                4. Clean team access tracked separately in the access log.

                ## Notes
                The protocol and what may go into the clean room are legal decisions. The bank's role is to build the access exactly as counsel specifies.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Where counsel requires one, a clean team protocol is signed and the restricted folder admits only the named members, tracked separately."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask counsel whether any bidder needs a clean team"
                - "Build the restricted folder once the protocol is signed"
                - "Grant access only to the named clean team members"
                - "Track clean team users on a separate tab of the access log"
            - name: Vendor reports and reliance letters in the room
              description: |-
                ## Purpose
                Vendor due diligence reports on financials, tax or the market save buyers time and focus their questions, but how they are released (draft or final, with or without reliance, before or after a hold-harmless letter) needs agreeing with the report providers. Getting the release mechanics right avoids a report sitting unreleased on the day bidders arrive.

                ## Milestones
                1. A list of vendor reports, their providers and expected final dates.
                2. Release terms agreed with each provider, including any non-reliance or hold-harmless letters.
                3. A dedicated folder with access tied to signed letters.
                4. A plan for releasing updated versions and noticing bidders.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every vendor report has agreed release terms and sits in a folder whose access is tied to signed provider letters."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each vendor report with provider and final date"
                - "Ask each provider for its release letters and conditions"
                - "Create the vendor report folder with letter-linked access"
                - "Plan how updated reports will be released and noticed"
            - name: Question limits and Q&A caps per bidder
              description: |-
                ## Purpose
                Without limits, one diligent bidder can send six hundred questions in a week and swamp the client, while caps that are too tight frustrate serious buyers. Choosing a cap per phase, a priority system, or a question window, and writing it into the process letter or the bidder guide, gives the team a fair basis for saying no.

                ## Milestones
                1. Expected question volume per bidder estimated from past deals.
                2. Options compared: hard cap, priority tiers, windows or no limit.
                3. The chosen approach agreed with the client and written into the bidder guide.
                4. A rule for questions over the limit.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written Q&A limit approach, agreed with the client and stated in the bidder guide, with a rule for over-limit questions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count questions per bidder in two past processes"
                - "Compare caps, priority tiers and windows"
                - "Agree the approach with the client approver"
                - "Add the limit and the over-limit rule to the bidder guide"
            - name: Handling questions sent outside the Q&A channel
              description: |-
                ## Purpose
                Bidders email management, call the CFO at the end of a meeting or ask your managing director over dinner, and an answer given that way is still a disclosure with no record. A simple rule and a polite stock reply that moves the question into the log protects the client's record and keeps bidders on equal terms.

                ## Milestones
                1. A one-line rule that all questions go through the log, stated in the bidder guide.
                2. A stock reply for client staff and bankers who are approached directly.
                3. Client management briefed on the rule.
                4. Off-channel questions logged with a note of how they arrived.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stock reply and briefing are in place, and every off-channel question received is entered in the log with its source."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a two-line stock reply for direct approaches"
                - "Brief the client's management on the one-channel rule"
                - "Add an arrival channel column to the Q&A log"
                - "Log the first off-channel question with its source"
            - name: Standard answer library from past deals
              description: |-
                ## Purpose
                Every sale gets the same opening questions about the room itself, the process, standard financial definitions and basic corporate documents. A library of approved generic answers and phrasings, stripped of client detail, lets you draft the routine third of the log in minutes and spend time on the questions that matter.

                ## Milestones
                1. Recurring generic questions identified from three past logs.
                2. Approved phrasings written without any client names or numbers.
                3. The library stored where the team can search it.
                4. The library refreshed after each deal closes.

                ## Notes
                Never copy a past client's actual answers or data into a new deal. Keep only generic wording, in line with your bank's confidentiality rules.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A searchable library of at least thirty generic Q&A phrasings with no client data, refreshed after each closed deal."
                cadence: rolling
              tasks:
                - "List generic questions that recur across three past logs"
                - "Write approved generic phrasings with no client detail"
                - "Store the library in the team's shared folder"
                - "Add new generic phrasings from live logs @recurring(monthly:20)"
            - name: Expert sessions in place of long written answers
              description: |-
                ## Purpose
                Some topics, such as an IT architecture, a tax structure or a pension scheme, produce endless written follow-ups, while a forty-minute call with the right client expert settles them. Deciding which topics suit a session, preparing the expert and minuting what was said keeps the record as clean as the written log.

                ## Milestones
                1. Topics with repeated follow-ups identified from the log.
                2. Session format agreed with the client: attendees, length, counsel present or not.
                3. Experts briefed on the questions and the rules for the call.
                4. Minutes agreed and filed, with any follow-up answers logged.

                ## Notes
                Start from the **Meeting notes** template for the minutes, and agree them with the client before anything is shared with bidders.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each expert session held has agreed minutes filed and its follow-up questions entered in the Q&A log."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the three topics with the most written follow-ups"
                - "Propose an expert session format to the client"
                - "Brief each expert on the questions and the call rules"
                - "File agreed minutes and log the follow-ups"
            - name: Opening the room to first-round bidders
              description: |-
                ## Purpose
                The day the room opens sets the tone for the whole diligence: logins that fail, empty folders or the wrong bidder seeing the wrong folder are remembered. A dated opening checklist covering hygiene, permissions, test logins, the guide and the welcome email makes the first impression one of a well-run process.

                ## Milestones
                1. The hygiene sweep and access matrix checks completed the day before.
                2. A test login for each bidder group confirmed to see the right folders only.
                3. Welcome emails with the guide prepared and checked for bidder names.
                4. All bidders given access within the same hour.

                ## Notes
                Start from the **Operational checklist** template, and keep it for the confirmatory opening too.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All first-round bidders receive access within the same hour, with test logins confirming each group sees only its folders."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Run the opening checklist the day before"
                - "Log in as a test user for each bidder group"
                - "Check each welcome email has the right bidder's name"
                - "Release access to every bidder within the same hour"
            - name: Confirmatory room for the shortlisted bidders
              description: |-
                ## Purpose
                Second-round diligence opens the folders that were held back, raises question volume sharply and usually runs to a tight deadline. Planning the confirmatory release, permissions for remaining bidders, removals for those dropped and extra client capacity for answers keeps the second round from stalling on the room.

                ## Milestones
                1. Access removed for bidders who did not progress, on the day they are told.
                2. Confirmatory folders populated, swept and checked.
                3. Permissions extended for remaining bidders, with clean team rules applied.
                4. Client answer capacity confirmed for the expected question surge.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Dropped bidders lose access the day they are told and remaining bidders reach the confirmatory folders on the planned date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List dropped bidders and schedule same-day access removal"
                - "Populate and sweep the confirmatory folders"
                - "Extend permissions for remaining bidders"
                - "Agree extra answer capacity with the client for the surge"
            - name: Q&A cut-off date and final responses
              description: |-
                ## Purpose
                Sale processes need a last date for new questions, so the seller can answer everything outstanding before final bids and the buyer cannot later say it was waiting on answers. Announcing the cut-off well ahead, clearing the backlog and sending a final status per bidder closes the Q&A cleanly.

                ## Milestones
                1. A cut-off date agreed with the client and announced to bidders in writing.
                2. All questions received before the cut-off answered or marked with a reason.
                3. A final Q&A status sent to each bidder.
                4. The closed log exported and archived.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "By final bids, every question received before the cut-off is answered or explained, with a final status sent to each bidder."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree the Q&A cut-off date with the client"
                - "Announce the cut-off to all remaining bidders in writing"
                - "Clear or explain every open question before final bids"
                - "Export and archive the closed log"
            - name: Peak-load plan for the week before final bids
              description: |-
                ## Purpose
                The last week before final bids brings the most questions, the most urgent document requests and the least client patience. A short plan, set two weeks out, covering extra drafters, a daily approval call, fast-track rules for confirmatory requests and who covers late nights, keeps the room from becoming the reason a bidder asks for more time.

                ## Milestones
                1. Extra drafters on the client and bank side named for the final week.
                2. A daily fifteen-minute approval call booked with the client approver.
                3. A fast-track rule for questions a bidder marks as bid-critical.
                4. Evening and weekend cover agreed within the deal team.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "During the final week, every bid-critical question is answered within two working days and daily approval calls are held."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name extra drafters for the final week"
                - "Book a daily fifteen-minute approval call with the client"
                - "Write the bid-critical fast-track rule"
                - "Agree evening and weekend cover in the deal team"
            - name: Data room freeze and archive copy for signing
              description: |-
                ## Purpose
                At signing, the parties usually agree that the room's contents on a set date are what was disclosed, which means freezing it and producing an archive copy, often on encrypted drives, with an agreed index. Doing this carefully, with counsel, matters because the archive may be the evidence in any later warranty claim.

                ## Milestones
                1. A freeze date and time agreed with both sides' counsel.
                2. Uploads and Q&A closed at the freeze, with a final audit export.
                3. Archive copies produced by the provider with the full index and Q&A log.
                4. The archives checked to open and delivered as counsel directs.

                ## Notes
                Start from the **Operational checklist** template. Ask the provider for its archive lead time early, as encrypted copies can take days.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The room is frozen at the agreed time and verified archive copies with index and Q&A log are delivered as counsel directs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the provider how long archive copies take"
                - "Agree the freeze date and time with both sides' counsel"
                - "Close uploads and Q&A at the freeze and run a final audit export"
                - "Open each archive copy to check it is complete before delivery"
            - name: Closing the room and confirming destruction
              description: |-
                ## Purpose
                After signing or a failed process, bidders who did not win still hold notes and downloads covered by their confidentiality agreements, and the room is still costing the client money. Removing every user, collecting the return or destruction confirmations the NDAs require and closing the provider account finishes the job properly.

                ## Milestones
                1. All bidder and adviser users removed from the room.
                2. Return or destruction confirmations requested from each losing bidder as their NDA provides.
                3. Confirmations received and filed, with any gaps chased.
                4. The provider account closed or downgraded after the final archive, and the last invoice checked.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All users are removed, every losing bidder has filed a destruction confirmation, and the provider account is closed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Remove every bidder and adviser user from the room"
                - "Send destruction confirmation requests to each losing bidder"
                - "File the confirmations and chase anything missing"
                - "Close the provider account and check the final invoice"
            - name: Your first data room as an analyst
              description: |-
                ## Purpose
                Running the room is often the first live workstream an analyst owns, and it is visible to the client, bidders and seniors every day. Breaking it into stages, from setting up the index to the freeze, with a check-in with your associate at each, turns an overwhelming list into work you can show you own.

                ## Milestones
                1. Index, access matrix and Q&A log set up and reviewed by your associate.
                2. First two weeks of live triage run with no question unrouted for more than a day.
                3. A mid-process review with your associate on what to change.
                4. The freeze and archive completed with your own checklist.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "You set up and ran the room through to freeze, with associate reviews at set-up and mid-process recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your associate for the last deal's data room files"
                - "Book a set-up review with your associate"
                - "Book a mid-process review after two weeks of live triage"
                - "Write down three lessons after the freeze"
            - name: Supervising the room as an associate
              description: |-
                ## Purpose
                As an associate you no longer run the room yourself but you answer for it, and the risk shifts to analysts releasing answers, permissions changed without approval and red flags nobody escalated. A weekly review rhythm, spot checks of answers and permissions, and a short escalation rule protect the deal without redoing the analyst's work.

                ## Milestones
                1. A weekly thirty-minute room review with the analyst.
                2. Spot checks of five released answers and two permission changes each week.
                3. An escalation rule agreed: what the analyst must bring to you the same day.
                4. Feedback given to the analyst at the mid-process point.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly room reviews with spot checks of five answers and two permission changes are held throughout the process."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree the same-day escalation rule with the analyst"
                - "Spot check five answers and two permission changes in the weekly room review @recurring(weekly:mon)"
                - "Give the analyst written mid-process feedback"
                - "Record repeat errors to raise in the team"
            - name: Vice president oversight of diligence risk
              description: |-
                ## Purpose
                A vice president sees the data room as a risk map: where bidders are digging, which answers might move price and which issues the client has not faced yet. A short weekly read of the red flags, the analytics and the oldest questions, followed by a call with the client lead, keeps surprises out of the final bids.

                ## Milestones
                1. A weekly one-page summary of red flags, activity patterns and aged questions.
                2. A weekly call with the client lead on the issues that might move price.
                3. Each issue given a handling plan: explain, fix, disclose or price.
                4. A pre-bid briefing for the managing director.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly diligence risk calls are held with the client, and every red flag has a handling plan before final bids."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the associate for a one-page weekly risk summary"
                - "Hold a diligence risk call with the client lead @recurring(weekly:thu)"
                - "Give each red flag a handling plan with an owner"
                - "Brief the managing director before final bids"
            - name: Running the room alone at a boutique
              description: |-
                ## Purpose
                At a boutique or mid-market firm there may be no deal support team, so one banker chooses the provider, builds the room, runs the log and negotiates the invoice. A lean set-up, with the provider's onboarding help, a simple log and a fixed weekly routine, makes this manageable alongside the rest of the deal.

                ## Milestones
                1. Provider onboarding and training sessions booked and attended.
                2. A lean log and access matrix built from simple templates.
                3. Provider usage and charges checked each month against the quote.
                4. A short handover note so a colleague can cover a week away.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The room runs to freeze with monthly charge checks against the quote and a handover note a colleague could use."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Book the provider's free onboarding session"
                - "Build a lean access matrix and Q&A log"
                - "Check provider usage and charges against the quote @recurring(monthly:5)"
                - "Write a one-page handover note for cover"
            - name: Data room for a client with thin records
              description: |-
                ## Purpose
                Family-owned and founder-led businesses, common in mid-market and regional deals, often have contracts on paper, board minutes that were never written and accounts held by an outside bookkeeper. Helping the client rebuild what is missing, scan what exists and explain what never existed gives bidders a room they can work with and a seller who is not embarrassed.

                ## Milestones
                1. A list of missing documents agreed with the client, split into find, recreate and explain.
                2. Paper records scanned, named and filed to the index.
                3. Explanatory notes drafted, with counsel, for documents that do not exist.
                4. A weekly call with the owner or family member leading the work.

                ## Notes
                Be patient about privacy. Owners may be uneasy about family members or long-serving staff seeing what is being collected.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every missing document is classed as found, recreated or explained, with paper records scanned and indexed before opening."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Sort the missing documents into find, recreate and explain"
                - "Arrange scanning of paper contracts and minutes"
                - "Hold a document request call with the owner @recurring(weekly:tue)"
                - "Draft explanatory notes with counsel for documents that never existed"
            - name: Carve-out data room for a division sale
              description: |-
                ## Purpose
                Selling a division means the room must show the business being sold without exposing the rest of the group, while shared contracts, shared staff and carve-out financials make the line hard to draw. Agreeing scope rules with the client and counsel, and building a filter step into every upload, keeps the parent's information out.

                ## Milestones
                1. A scope rule for shared contracts, staff and systems agreed with the client.
                2. A filter step added to upload approval to remove parent-only information.
                3. Carve-out financials and their basis of preparation placed in their own folder.
                4. Questions about the remaining group routed to a named parent contact.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written scope rule and an upload filter step are in place, and no parent-only document appears in the room at freeze."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the scope rule for shared contracts with the client"
                - "Add a parent-information filter to the upload approval step"
                - "Set up a separate folder for carve-out financials"
                - "Name a parent contact for questions about the wider group"
            - name: Cross-border and multi-language data room
              description: |-
                ## Purpose
                Selling a company with subsidiaries in several countries brings documents in several languages, local privacy rules and bidders working across time zones. Deciding which documents need translations or summaries, who certifies them, and how Q&A turnaround works across time zones prevents a foreign bidder from feeling second-class.

                ## Milestones
                1. Documents needing translation or an English summary identified by folder.
                2. Translation responsibility and cost agreed with the client.
                3. Local counsel's privacy and data transfer rules recorded per country.
                4. Q&A turnaround expectations set for each time zone.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A translation plan by folder, country privacy rules from local counsel and time zone turnaround rules are recorded before opening."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Mark the folders holding non-English documents"
                - "Agree translation responsibility and budget with the client"
                - "Ask local counsel for each country's data transfer rules"
                - "Set Q&A turnaround expectations for each time zone"
            - name: Dual-track room shared with a listing workstream
              description: |-
                ## Purpose
                In a dual-track process the same documents feed both the sale room and the listing due diligence, and the two sets of advisers ask overlapping questions with different confidentiality rules. Planning one source of truth for documents with separate rooms or permission sets, and a way to keep answers consistent across both tracks, avoids two versions of the same fact.

                ## Milestones
                1. A decision on one room with separate groups or two linked rooms.
                2. A shared document source with uploads mirrored under one version log.
                3. A consistency check between sale Q&A answers and listing diligence responses.
                4. Access rules for listing advisers agreed with counsel.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The room structure for both tracks is decided, uploads share one version log, and answers are checked across tracks."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare one room with separate groups against two linked rooms"
                - "Set up a single version log for both tracks"
                - "Ask the agent to compare sale answers with listing responses for matching topics"
                - "Agree listing advisers' access rules with counsel"
            - name: Data room post-mortem after the deal
              description: |-
                ## Purpose
                Every process teaches something about the room: which folders were empty at opening, which questions took longest and which permissions caused trouble. A short post-mortem with numbers, written while the deal is fresh, improves the group's templates and gives you evidence of your contribution at review time.

                ## Milestones
                1. Key numbers pulled: questions per bidder, average answer time, documents uploaded after opening.
                2. Three things that worked and three that did not written down.
                3. Changes proposed to the group's index, log and checklists.
                4. The post-mortem shared with the deal team and stored with your templates.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A post-mortem with Q&A statistics and template changes is shared with the deal team within a month of signing or termination."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull question counts and average answer times from the final log"
                - "Write three things that worked and three that did not"
                - "Propose changes to the group's data room templates"
                - "Share the post-mortem with the deal team"
---

# Sell-Side Data Room and Q&A

This area is for the banker who owns the virtual data room and the question log on a sale, usually an analyst or associate with a vice president watching the risk. It starts with foundations (a readiness review, the provider, the index, the request list, access levels and the answer approval route), then the daily and weekly routines that keep a live room and Q&A under control, the skills behind good answers and safe redaction, the decisions on staged release and clean teams, the dated moments from opening to freeze and close-out, variants for analysts, associates, vice presidents, boutique bankers and thin-record clients, and specialist rooms for carve-outs, cross-border and dual-track sales.

What repeats is the daily triage of new questions, a Monday and Thursday routing review, weekly status reports, access reviews, upload reconciliations and audit trail exports, with monthly upkeep of the answer library and a hygiene sweep before each phase. The **Vendor**, **Operational checklist**, **Risk register** and **Meeting notes** templates pair with choosing the provider, opening and freezing the room, tracking red flags and recording client sign-off calls. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
