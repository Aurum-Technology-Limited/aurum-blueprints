---
id: investment-banking.fairness-opinions
name: Fairness Opinions
description: "Fairness opinions from the banker's seat: scope and conflicts, the analyses behind the fairness book, internal committee review, the opinion letter, shareholder disclosure and the deals where independence is tested hardest."
category: business
version: 1.0.0
tags: [investment-banking, fairness-opinions, knowledge-worker, fairness-opinion, special-committee, fairness-committee, proxy-disclosure, independence]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - feedback-themes
    - risk-register
    - meeting-notes
    - operational-checklist
    - development-plan
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Fairness Opinions
          description: "Preparing a fairness opinion: valuation analyses, the bank's internal committee review, disclosure in shareholder documents and independence questions."
          projects:
            - name: Scope and limits of a fairness opinion
              description: |-
                ## Purpose
                A fairness opinion says that the consideration in a deal is fair, from a financial point of view, to a defined group of holders as of a stated date, and nothing more. It is not a recommendation on how to vote, a valuation report or a view on whether a higher price was available, and juniors who blur those lines write pages the committee strikes out. Getting the boundaries straight in your first week saves rework on every engagement that follows.

                ## Milestones
                1. A one-page note naming the four elements of a standard opinion: the consideration, the holders addressed, the financial point of view and the opinion date.
                2. Three matters the opinion expressly does not cover listed, such as the merits of the business decision, the future trading price and fairness to other constituencies.
                3. The difference between a fairness opinion and a full valuation report explained in two sentences.
                4. The note checked by an associate or VP who has delivered opinions.

                ## Notes
                Read the opinion letters annexed to three recent public filings before writing the note; their wording is more precise than most training slides.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note on the scope and limits of a fairness opinion exists and has been checked by a colleague who has delivered one."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the opinion letter annexes from three recent merger proxy filings"
                - "Mark the sentences in each letter that fix scope, holders and date"
                - "Write the one-page scope and limits note in your own words"
                - "Ask an associate who has delivered an opinion to check the note"
            - name: Library of public fairness opinion disclosures
              description: |-
                ## Purpose
                Every public deal that carried an opinion leaves behind the letter, a disclosed summary of the adviser's analyses and usually a paragraph on fees and prior relationships. A library of twenty or thirty of these, tagged by deal type, gives you precedents for which analyses a committee expects, how reference ranges were shown and how conflicts were described, all from material anyone can read.

                ## Milestones
                1. At least twenty public filings with fairness opinions saved, covering cash deals, stock deals and controlling shareholder transactions.
                2. Each entry tagged with deal type, consideration form, analyses shown and fee structure disclosed.
                3. An index sheet you can filter by deal type when a new engagement starts.
                4. A yearly refresh date set for the library.

                ## Notes
                Use public documents only. Your own bank's internal fairness books stay on the bank's systems, not in a personal library.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An indexed library of at least twenty public fairness disclosures, tagged by deal type and analyses shown, is saved and filterable."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Search the securities regulator's filing system for recent merger proxies with opinions"
                - "Save twenty filings spread across cash, stock and controlling shareholder deals"
                - "Tag each filing with consideration form, analyses shown and fee disclosure"
                - "Add the past year's notable fairness disclosures to the library @recurring(yearly)"
            - name: Fairness engagement letter scope check
              description: |-
                ## Purpose
                The engagement letter fixes who the opinion is addressed to, which holders it covers, whether the bank may decline to give it, the fee and how much of that fee depends on closing. Reading those clauses against the actual deal before anyone starts the book avoids the late discovery that the letter names the full board while the special committee expects the opinion addressed to it.

                ## Milestones
                1. The addressee, the holders covered and the transaction definition confirmed against the current term sheet.
                2. The fee split between opinion delivery, announcement and completion recorded in one line.
                3. Reliance, indemnity and disclosure consent clauses flagged to the deal team and counsel.
                4. Every mismatch between the letter and the deal raised with the MD and resolved in writing.

                ## Notes
                Legal drafting belongs to the bank's lawyers and the client's counsel. Your job is to spot mismatches with the deal and route them, not to negotiate wording.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page summary of the engagement letter's scope, fee and reliance terms has been checked against the term sheet, with any mismatch resolved in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the draft engagement letter beside the current term sheet"
                - "Summarise addressee, holders covered, fee and reliance terms on one page"
                - "Send any clause that does not match the deal to the MD and counsel"
                - "File the signed letter and the summary in the engagement folder"
            - name: Relationship and conflict disclosure checklist
              description: |-
                ## Purpose
                Shareholder documents usually disclose the fees the bank earned from each party over a look-back period, any stakes it holds and any role it plays on the other side, and regulators, courts and proxy advisers read those paragraphs closely. A checklist that asks the same questions on every engagement, answered from the bank's records before committee, keeps the disclosure accurate and surfaces a buyer financing role or a large principal position while there is still time to deal with it.

                ## Milestones
                1. A checklist covering prior fees from each party and affiliates, current mandates, financing roles, principal holdings and individual relationships on the deal team.
                2. The look-back period and fee thresholds your firm uses written at the top, as confirmed by compliance.
                3. The checklist completed for the current engagement, with a source named for each answer.
                4. A draft relationship disclosure paragraph sent to counsel for review.

                ## Notes
                Answers come from conflicts and finance records, never from memory. If the bank is also financing the buyer, tell the MD on day one, not the week of signing.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A completed conflict and relationship checklist with a named source for every answer, plus a draft disclosure paragraph sent to counsel."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask compliance which look-back period and fee thresholds the firm uses"
                - "List every party and affiliate to run through the conflicts search"
                - "Collect prior fees and current roles from the bank's finance records"
                - "Draft the relationship disclosure paragraph for counsel to review"
            - name: Information request list for a fairness engagement
              description: |-
                ## Purpose
                Fairness work runs on documents the bank did not create: management projections and their approval history, the latest merger agreement draft, the capitalisation table, option and warrant schedules and any earlier third-party valuations. A standing request list sent on day one and tracked to completion stops the book being built on last quarter's share count or a superseded plan.

                ## Milestones
                1. A request list covering projections, board materials, the deal agreement, fully diluted share data, debt and cash schedules and prior valuations.
                2. Each item assigned an owner at the client and a requested date.
                3. A tracker showing received, outstanding and superseded items.
                4. Every input used in the book traced to a dated document in the tracker.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A request tracker in which every input used in the fairness book is matched to a dated source document."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Adapt a standard fairness request list to the deal's consideration form"
                - "Send the list to the client contact with owners and dates"
                - "Log each document received with its date and version number"
                - "Mark superseded documents so no one models from them"
            - name: Workplan from mandate to opinion delivery
              description: |-
                ## Purpose
                Opinions are normally delivered at the board meeting that approves signing, and the fairness committee needs a near-final book several days before that, so the real deadline sits earlier than most deal teams assume. A workplan planned backwards from the board date, with committee submission, disclosure drafting and bring-down dates on it, makes the squeeze visible in the first week rather than the last.

                ## Milestones
                1. The expected board date and the committee's submission lead time written at the top of the plan.
                2. Dates set for projections received, first draft book, internal review, committee submission and board delivery.
                3. Owners named for the book, the letter, the disclosure summary and the conflicts work.
                4. The plan shared with the MD and counsel and updated whenever the signing date moves.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated workplan from mandate to board delivery, with owners and the committee submission date, has been shared with the MD and counsel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the target board date with the deal team"
                - "Look up the fairness committee's submission lead time"
                - "Plan backwards from the board date to set every interim date"
                - "Share the workplan with the MD and counsel for comment"
            - name: Fairness committee policy summary
              description: |-
                ## Purpose
                Each bank runs its own fairness committee with its own submission forms, quorum, lead times and list of deal features that trigger a closer look, such as a controlling shareholder, an affiliated party or a fee contingent on closing. Summarising the current policy on one page means you build to the committee's expectations from the start instead of learning them from the first set of comments.

                ## Milestones
                1. The current committee policy and submission forms located and saved.
                2. Submission requirements, quorum and lead times summarised on one page.
                3. The deal features that trigger extended review listed.
                4. The summary checked against the policy once a year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of the current fairness committee policy, including lead times and escalation triggers, is saved with the policy's version date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the current fairness committee policy on the firm's intranet"
                - "Summarise submission requirements, quorum and lead times on one page"
                - "List the deal features that trigger extended committee review"
                - "Reread the committee policy and update the summary @recurring(yearly)"
            - name: Management projections reliance file
              description: |-
                ## Purpose
                Banks giving opinions generally rely on projections prepared by management and approved for the bank's use, and both the opinion letter and the disclosure say so. One file recording which case was provided, when, who approved it, how it differs from earlier plans and what questions you raised lets you answer the committee's first question without reopening the data room.

                ## Milestones
                1. Every version of the projections received logged with date, source and approving body.
                2. The case the bank was instructed to rely on confirmed in writing by the client.
                3. Differences from the prior budget, the long-range plan and analyst consensus set out in a short table.
                4. Questions raised with management about inconsistencies, and their answers, recorded.

                ## Notes
                The bank does not independently verify projections, but it should notice obvious inconsistencies and raise them. A written record of what you asked is worth more than a model comment no one reads.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reliance file holds every projection version, written confirmation of the case relied on, a comparison table and a log of questions answered by management."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Log every projection version received with date and source"
                - "Ask the client to confirm in writing which case the bank should rely on"
                - "Build a short table comparing the case with the prior budget and consensus"
                - "Record each question put to management and the answer given"
            - name: Fairness book page standards and templates
              description: |-
                ## Purpose
                Committee members read dozens of fairness books a year and notice at once when the football field uses a different share price date from the summary page. A set of house page templates, with standard footnotes for price dates, share counts and data sources, cuts formatting debates and lets the team spend review time on judgement rather than layout.

                ## Milestones
                1. Template pages for the summary of analyses, football field, trading and transaction reference ranges, DCF and premiums.
                2. Standard footnotes for price dates, fully diluted share counts and data sources written once.
                3. A one-page style note covering rounding, range presentation and labelling of management cases.
                4. The templates checked against the firm's committee expectations and saved where the team can find them.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved template set for the core fairness book pages, with standard footnotes and a one-page style note, has been used on at least one live book."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect two recent approved fairness books as layout references"
                - "Build template pages for each core analysis with standard footnotes"
                - "Write the one-page style note on rounding and range presentation"
                - "Refresh the templates against committee comments from the year @recurring(yearly)"
            - name: Weekly fairness workstream status note
              description: |-
                ## Purpose
                Fairness work often runs beside a larger sell-side or buy-side team, and it is easy for the opinion to drift until the week of signing. A short weekly note to the MD and counsel, listing documents received, open questions for management, committee timing and disclosure drafting status, keeps it moving and creates a record of when each issue was raised.

                ## Milestones
                1. A one-page status format with sections for inputs, open questions, committee timing and disclosure.
                2. The note sent every week of the engagement to the same distribution.
                3. Each open question carried until it is closed, with the date it was raised.
                4. The final note archived with the engagement file.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A status note has gone to the MD and counsel every week of the engagement, with open questions dated and carried to closure."
                cadence: rolling
              tasks:
                - "Set up the one-page status note format"
                - "Write the weekly fairness status note for the MD and counsel @recurring(weekly:mon)"
                - "Carry forward every open question with the date it was first raised"
                - "Archive the final status note with the engagement file"
            - name: Monthly read of new fairness disclosures
              description: |-
                ## Purpose
                Practice moves through public filings: a new way of presenting a contribution analysis, a fuller relationship paragraph after a court comment, a fee structure that drew a proxy adviser's attention. Reading two or three newly filed merger documents a month, and noting one thing worth copying or avoiding from each, keeps your judgement in line with the market.

                ## Milestones
                1. A reading queue of newly filed merger documents that include fairness opinions.
                2. Two or three disclosures read each month with one note per filing.
                3. Notable drafting or presentation choices added to your precedent library.
                4. A short list of practices to bring up with your team at the next engagement kickoff.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two new public fairness disclosures are read and noted each month, with notable items added to the precedent library."
                cadence: rolling
              tasks:
                - "Set up a filing alert for merger proxies and offer documents in your sector"
                - "Read two new fairness disclosures and note one point from each @recurring(monthly:9)"
                - "Add notable drafting choices to the precedent library"
                - "Raise one practice point at the next engagement kickoff"
            - name: Quarterly watch on fairness litigation and rulings
              description: |-
                ## Purpose
                Courts and regulators regularly comment on how advisers were paid, what conflicts were disclosed and whether projections were reasonable, and those comments shape what committees ask for next. A quarterly read of law firm client alerts and decision summaries, kept as a short log, means you can explain to a client why the bank wants a fuller disclosure paragraph this time.

                ## Milestones
                1. Two or three law firm alert subscriptions on M&A litigation set up.
                2. A log with one entry per notable decision: jurisdiction, issue, adviser criticism and practical lesson.
                3. The log reviewed each quarter and lessons shared with your group.
                4. Any lesson that changes your checklists reflected in them.

                ## Notes
                This is professional awareness, not legal analysis. How a ruling applies to a live deal is a question for counsel.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A litigation lessons log has a new entry each quarter and any lesson affecting the conflict or reliance checklists has been reflected in them."
                cadence: cyclic
              tasks:
                - "Subscribe to two law firm alerts covering M&A and shareholder litigation"
                - "Log notable fairness and adviser decisions from the quarter @recurring(quarterly)"
                - "Write one practical lesson per decision in plain words"
                - "Update the conflict or reliance checklist when a lesson changes practice"
            - name: Assumptions and judgement log during an engagement
              description: |-
                ## Purpose
                Every fairness book rests on dozens of small judgements: which peers were excluded, why one transaction was dropped, which discount rate range was chosen, how dilutive securities were counted. Logging each judgement with its reason as it is made, rather than reconstructing it for the committee or a later document request, keeps the book defensible and the disclosure consistent with it.

                ## Milestones
                1. A log with one line per judgement: the choice, the alternatives considered, the reason and who agreed it.
                2. The log updated whenever the model or pages change a judgement.
                3. Every judgement in the disclosure summary traceable to a log entry.
                4. The final log filed with the engagement record.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each material judgement in the final fairness book has a dated log entry with its reason and approver."
                cadence: rolling
              tasks:
                - "Create the judgement log with columns for choice, alternatives, reason and approver"
                - "Reconcile the judgement log against the latest model and pages @recurring(weekly:wed)"
                - "Check that each judgement in the disclosure draft has a log entry"
                - "File the final log with the engagement record"
            - name: Market data refresh up to the opinion date
              description: |-
                ## Purpose
                Share prices, peer multiples, consensus estimates and exchange rates move between the first draft and the board meeting, and an opinion given on stale data is a gift to anyone who later challenges it. A fixed refresh routine, with the data date shown on every page, keeps the book current and makes the final bring-down a check rather than a rebuild.

                ## Milestones
                1. A list of every market input in the book with its source and current data date.
                2. A refresh routine that updates prices, estimates and rates on set days.
                3. A change summary showing how reference ranges moved since the last refresh.
                4. All pages showing the same data date at committee submission and at delivery.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every page of the delivered book shows one consistent data date, and a change summary exists for each refresh."
                cadence: rolling
              tasks:
                - "List every market input in the book with its source and data date"
                - "Refresh prices, estimates and rates across the book @recurring(weekly:tue,thu)"
                - "Write a short change summary of reference range movements after each refresh"
                - "Check every page shows the same data date before submission"
            - name: Version control for fairness book and opinion drafts
              description: |-
                ## Purpose
                Late in an engagement the book, the opinion letter and the disclosure summary each go through several turns a day across the bank, counsel and the client. A naming convention, a single master folder and a habit of archiving superseded drafts stop the wrong version reaching the committee or, worse, the board.

                ## Milestones
                1. A file naming convention agreed with the team for book, letter and disclosure drafts.
                2. One master folder with current and superseded subfolders.
                3. Superseded drafts moved out of the current folder at the end of each week.
                4. The version sent to committee and the version delivered to the board recorded by name.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The engagement folder holds only current drafts in its main folder and records the exact versions sent to committee and delivered to the board."
                cadence: rolling
              tasks:
                - "Agree a naming convention for book, letter and disclosure drafts"
                - "Set up the master folder with current and superseded subfolders"
                - "Move superseded drafts out of the current folder @recurring(weekly:fri)"
                - "Record the committee and board versions by file name"
            - name: Post-engagement fairness debrief
              description: |-
                ## Purpose
                Once the deal signs, the fairness team scatters and the lessons scatter with it: the input that arrived late, the committee comment nobody predicted, the disclosure paragraph counsel rewrote three times. A thirty-minute debrief after each engagement, captured in a short note and reviewed quarterly, turns those lessons into changes to your checklists.

                ## Milestones
                1. A short debrief held within two weeks of signing.
                2. A note recording what went late, what the committee asked and what disclosure changed.
                3. Debrief notes reviewed each quarter for repeating themes.
                4. At least one checklist or template change made from the review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Each engagement has a debrief note within two weeks of signing, and the quarterly review has produced at least one recorded checklist change."
                cadence: cyclic
              tasks:
                - "Book a thirty-minute debrief within two weeks of signing"
                - "Write the debrief note on lateness, committee questions and disclosure changes"
                - "Review debrief notes for repeating themes @recurring(quarterly)"
                - "Change one checklist or template based on the review"
            - name: Committee comment themes register
              description: |-
                ## Purpose
                Fairness committees tend to ask the same questions in different words: why a peer was excluded, why the DCF range is so wide, whether the premiums sample is relevant, what the bank earned from the buyer. Recording each comment by theme across engagements shows which questions your books keep provoking, so the next submission answers them on the page.

                ## Milestones
                1. A register of committee comments grouped by theme, with deal type and date.
                2. The three most frequent themes identified.
                3. A pre-emptive answer page or footnote drafted for each of the top themes.
                4. The register updated after every committee meeting you attend or support.

                ## Notes
                Start from the **Feedback themes** template. Record the theme and your response, not confidential deal details.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A themes register covers every committee meeting supported, and draft answers exist for the three most frequent themes."
                cadence: rolling
              tasks:
                - "Set up the committee comment register with theme, deal type and date"
                - "Add comments from the latest committee and retag the themes @recurring(monthly:20)"
                - "Draft a pre-emptive answer for each of the top three themes"
                - "Share the top themes with analysts starting their first fairness book"
            - name: Fairness committee calendar and submission tracker
              description: |-
                ## Purpose
                Committees meet on set days or by request with fixed notice, and two live deals heading for the same week can leave one without a slot. A simple tracker of every engagement in the group, with its expected board date and committee slot, lets the VP book slots early and spot clashes a month ahead.

                ## Milestones
                1. A tracker listing every live engagement with expected board date and committee date.
                2. Committee slots requested as soon as a board date is pencilled.
                3. Clashes between engagements flagged to the VP at least three weeks ahead.
                4. Completed committee approvals recorded with date and conditions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live engagement in the group has a booked committee slot at least two weeks before its board date, recorded in the tracker."
                cadence: rolling
              tasks:
                - "Build the tracker with engagement, board date and committee slot columns"
                - "Check board dates and committee slots across live engagements @recurring(monthly:3)"
                - "Request a committee slot as soon as a board date is pencilled"
                - "Record each approval with its date and any conditions"
            - name: Choosing the analyses for the fairness book
              description: |-
                ## Purpose
                Most fairness books show a familiar set of analyses, but which ones are primary and which are shown only for reference depends on the company, the consideration and the data available. A banker who can explain why a premiums analysis is reference only for a thinly traded stock, or why a sum of the parts belongs in a conglomerate deal, earns the committee's trust quickly.

                ## Milestones
                1. A note on when each common analysis is primary, supporting or reference only, with one reason each.
                2. Five public precedents compared to see which analyses were shown for similar deals.
                3. An analysis selection memo drafted for a live or practice deal and reviewed by a VP.
                4. Standard wording ready for the disclosure explaining analyses shown for reference only.

                ## Notes
                Reference-only analyses still need a clear label in the book and the disclosure. Mixing them into the summary range without saying so is a common committee comment.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An analysis selection memo with reasons for each primary and reference analysis has been reviewed by a VP."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the analyses shown in five precedent disclosures for similar deals"
                - "Write when each analysis is primary, supporting or reference only"
                - "Draft a selection memo for a live or practice deal"
                - "Ask a VP to challenge the memo before it is used"
            - name: Trading and transaction reference ranges for fairness
              description: |-
                ## Purpose
                In a fairness book the comps and precedents are not ends in themselves but sources of a reference range that is set against the deal price, and the committee will ask how that range was chosen. Practising the step from a table of multiples to a selected range, with written reasons for the range and for any exclusions, is the skill that separates a fairness book from a valuation tear sheet.

                ## Milestones
                1. Three practice reference ranges selected from existing comps and precedent tables, each with a written rationale.
                2. Exclusions from each set listed with the reason they were left out.
                3. The selected ranges shown on a football field against the deal consideration.
                4. Wording drafted for how each range was selected, ready for the disclosure summary.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three practice reference ranges, each with a written rationale and exclusions list, have been reviewed by an associate."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Take an existing comps table and select a reference multiple range"
                - "Write two sentences on why that range and not the full spread"
                - "List every exclusion and the reason for it"
                - "Draft the disclosure wording for how the range was selected"
            - name: DCF reference range on management's projections
              description: |-
                ## Purpose
                A fairness DCF is run on the case the bank was told to rely on, not a case the bank built, and its job is to show what that case implies across a reasonable range of discount rates and terminal assumptions. Learning to present that range honestly, including when management's case implies values well above the deal price, matters because that gap is exactly what a plaintiff's expert will point to.

                ## Milestones
                1. A practice DCF run on a management case with the discount rate and terminal ranges documented.
                2. A sensitivity table showing the implied value per share across both ranges.
                3. A written explanation of where the deal price sits within the range and why.
                4. Disclosure wording drafted for the discount rate basis and terminal method.

                ## Notes
                If the implied range sits mostly above the price, say so in the book and discuss it with the MD early. Narrowing assumptions to fit the price is the mistake that does lasting damage.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice fairness DCF with documented ranges, a sensitivity table and a written explanation of the deal price's position has been reviewed by a VP."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Run a practice DCF on a management case from a public proxy"
                - "Document the discount rate and terminal value ranges with sources"
                - "Write where the deal price sits in the implied range"
                - "Draft disclosure wording for the discount rate and terminal method"
            - name: Premiums paid analysis for fairness purposes
              description: |-
                ## Purpose
                Boards like premiums analysis because it is easy to explain, and committees distrust it because the sample, the measurement dates and any leak in the share price before announcement can move the answer a long way. Building a premiums dataset you understand, and knowing when to treat it as reference only, gives you a page you can defend line by line.

                ## Milestones
                1. A premiums dataset for completed deals in a defined period, sector and size band, with selection criteria written down.
                2. Premiums measured at one day, one week and four weeks before announcement, or the unaffected date.
                3. An unaffected share price date chosen for the target, with the reason recorded.
                4. A one-page view on whether premiums should be primary or reference only for the current deal.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A premiums dataset with written selection criteria and a dated unaffected price rationale exists and has been used on at least one book."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the selection criteria for the premiums sample"
                - "Pull premiums at one day, one week and four weeks before announcement"
                - "Choose and justify the target's unaffected share price date"
                - "Add deals announced in the quarter to the premiums dataset @recurring(quarterly)"
            - name: Exchange ratio analysis in stock-for-stock deals
              description: |-
                ## Purpose
                In a stock-for-stock deal the question is whether the exchange ratio is fair, which means valuing both companies on consistent bases and showing implied ratios from each method. Contribution analysis, relative DCF and pro forma ownership all appear here, and committees look hard for inconsistent treatment of the two sides.

                ## Milestones
                1. Implied exchange ratio ranges computed from trading, DCF and contribution analyses for a practice deal.
                2. Both companies valued on the same data dates, share count basis and method choices.
                3. A summary page showing the deal ratio against each implied range.
                4. A short note on how buyer stock price risk between signing and closing is described in the letter.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice exchange ratio summary page with consistent bases for both companies has been reviewed by an associate."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick a public stock-for-stock deal with a disclosed fairness summary"
                - "Compute implied exchange ratio ranges from three methods"
                - "Check both sides use the same data dates and share count basis"
                - "Build the summary page against the deal ratio"
            - name: Valuing contingent and non-cash consideration for fairness
              description: |-
                ## Purpose
                Contingent value rights, earnouts, rollover equity and preferred securities make the consideration harder to measure, and the opinion has to say how they were treated. Working through how each is valued or described, and where the bank expresses no view, avoids a letter that quietly opines on something no one analysed.

                ## Milestones
                1. A note on common treatments for CVRs, earnouts, rollover equity and securities offered as consideration.
                2. A practice valuation of one contingent payment with probability and timing assumptions recorded.
                3. Letter wording reviewed for how such consideration is described or excluded.
                4. A checklist question added to the engagement scope check for non-cash elements.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A treatment note and one practice contingent payment valuation, with letter wording on its scope, have been reviewed by a VP."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find two public opinions that addressed contingent value rights"
                - "Write how each treated the contingent element in the letter"
                - "Value one practice earnout with recorded probability and timing assumptions"
                - "Add a non-cash consideration question to the scope checklist"
            - name: Drafting assumptions and limitations in the opinion letter
              description: |-
                ## Purpose
                Assumption paragraphs in the opinion letter say what the bank relied on, what it did not verify, which matters it leaves to other advisers and the date after which it has no duty to update. Bankers who understand why each paragraph exists can spot a missing qualification in a draft and explain the letter to a director who asks what it actually covers.

                ## Milestones
                1. A personal clause library of standard assumption, reliance and limitation paragraphs from public letters, each with a one-line purpose.
                2. Paragraphs specific to deal features such as tax treatment, regulatory approvals and non-cash consideration noted.
                3. A marked-up practice draft letter reviewed against the firm's standard form.
                4. A plain-words explanation of the letter prepared for directors.

                ## Notes
                The firm's standard form and counsel's review always govern. The clause library is for understanding, not for drafting letters outside the approved process.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A clause library with a stated purpose for each paragraph and a reviewed practice letter mark-up exist."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Copy the assumptions paragraphs from three public opinion letters"
                - "Write a one-line purpose beside each paragraph"
                - "Mark up a practice draft against the firm's standard form"
                - "Refresh the clause library against new public letters @recurring(yearly)"
            - name: Proxy summary of the financial analyses
              description: |-
                ## Purpose
                Shareholder documents usually include a summary of each analysis the adviser performed, with the ranges, key inputs and the reasons for selection, and regulators often comment on it. Drafting that summary from the book, so that every number ties and every judgement is described, is a deliverable in its own right and one of the most scrutinised pages in the document.

                ## Milestones
                1. A first draft summary prepared from the final book, covering every analysis shown to the board.
                2. Each number in the summary tied back to a page in the book.
                3. Key inputs, ranges and selection reasons described consistently with the judgement log.
                4. Comments from counsel and the committee incorporated and a final tie-out completed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A disclosure summary in which every figure ties to the delivered book has been signed off by counsel and the deal team."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the agent to draft a first disclosure summary from the book outline"
                - "Tie every number in the summary back to a page in the book"
                - "Check the selection reasons match the judgement log"
                - "Run a final tie-out after counsel's comments"
            - name: Delivering a fairness opinion orally to a board
              description: |-
                ## Purpose
                At the board meeting the MD walks directors through the analyses and then gives the opinion orally, often before the letter is signed, and directors' questions in that half hour are recorded in the minutes. Practising a ten-minute walkthrough that explains each range in plain words, and the answers to the five questions directors usually ask, is worth doing before your first time in the room.

                ## Milestones
                1. A ten-minute walkthrough script for a practice fairness book.
                2. Answers prepared for likely questions on projections, the premium, conflicts, fees and alternatives.
                3. One rehearsal delivered to a senior colleague with feedback recorded.
                4. A one-page speaking note format you can reuse.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ten-minute walkthrough has been rehearsed with a senior colleague and their feedback is recorded on a reusable speaking note."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a ten-minute walkthrough script for a practice book"
                - "List five likely director questions and draft short answers"
                - "Rehearse the walkthrough with a senior colleague"
                - "Turn the script into a one-page speaking note format"
            - name: Fixed or contingent fairness fee decision
              description: |-
                ## Purpose
                A fee that is paid whether or not the deal closes is easier to defend as independent, while a fee mostly contingent on completion is common when the bank is also the transaction adviser and is routinely disclosed and questioned. Setting out the options, the disclosure each would require and how committees and proxy advisers view them helps the MD agree terms that will read well in the filing.

                ## Milestones
                1. Fee structures in five comparable public disclosures summarised.
                2. Options set out: fixed on delivery, split between delivery and completion, or folded into the transaction fee.
                3. The disclosure wording each option would need drafted in outline.
                4. The recommended structure and reasons recorded for the MD.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A short options paper comparing fee structures with disclosure implications has been given to the MD and the chosen structure recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise fee structures disclosed in five comparable filings"
                - "Set out the fixed, split and transaction fee options side by side"
                - "Outline the disclosure wording each option would need"
                - "Record the chosen fee structure and reasons with the MD"
            - name: Whether a special committee needs a second opinion
              description: |-
                ## Purpose
                When the board's main financial adviser has a contingent fee or other ties to the deal, counsel sometimes recommends a second, independent opinion for the special committee. Laying out what a second opinion would add, its cost, its timing against the board date and the precedents for similar deals lets the committee and its counsel decide quickly.

                ## Milestones
                1. The relationships and fee terms of the existing adviser summarised from the conflict checklist.
                2. Precedent deals of a similar kind checked for whether a second opinion was obtained.
                3. Cost and timetable for a second opinion estimated against the board date.
                4. The committee's decision and reasons recorded in its minutes or a file note.

                ## Notes
                Whether a second opinion is advisable is ultimately a question for the committee and its counsel. Your paper sets out facts and options.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A factual options paper on a second opinion has gone to the committee's counsel and the committee's decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the existing adviser's relationships and fee terms"
                - "Check precedent deals for second opinions in similar situations"
                - "Estimate the cost and timetable against the board date"
                - "Send the options paper to the committee's counsel"
            - name: Relying on management's case or asking for another
              description: |-
                ## Purpose
                Sometimes the projections provided look stale, conflict with recent results or were prepared by managers who will roll equity into the buyer. Deciding whether to rely on them as provided, ask for an updated case or show an alternative case at the board's direction is a real judgement with disclosure consequences, and it should be made deliberately rather than by default.

                ## Milestones
                1. Specific concerns about the case written down with supporting data, such as recent results against plan.
                2. The options set out: rely as provided, request an update, or show a board-directed alternative case.
                3. The disclosure consequences of each option noted with counsel.
                4. The decision and the instruction received from the board or committee recorded in writing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written record exists of the concerns about the projections, the options considered and the board or committee instruction on which case to use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down each concern about the case with supporting data"
                - "Compare year-to-date results against the plan for the same period"
                - "Set out the options and their disclosure consequences with counsel"
                - "Record the board or committee instruction on which case to use"
            - name: Choosing the opinion date and bring-down approach
              description: |-
                ## Purpose
                Opinions speak as of a date, usually the day the board approves signing, but signing can slip, terms can change overnight and some deals need a bring-down letter at a later date. Agreeing in advance what triggers a fresh opinion, what counts as an immaterial change and how the market data will be refreshed avoids an argument at midnight.

                ## Milestones
                1. The expected opinion date and the circumstances that would move it written down.
                2. Changes that would require committee re-approval listed, such as a price change or a new form of consideration.
                3. A bring-down procedure agreed with the MD if the merger agreement or offer document requires one.
                4. The approach confirmed with the committee secretary.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note fixes the opinion date, the triggers for re-approval and the bring-down procedure, confirmed with the committee secretary."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask counsel whether the deal documents call for a bring-down"
                - "List the term changes that would need committee re-approval"
                - "Agree the bring-down procedure and data refresh with the MD"
                - "Confirm the approach with the committee secretary"
            - name: Fairness book checking protocol
              description: |-
                ## Purpose
                An error in a fairness book can end up in a public filing and then in a complaint, which makes checking more than good manners. A written protocol, covering share count, price dates, footnotes, ties between pages and between book and disclosure, with a named second checker, catches the errors that a tired author misses.

                ## Milestones
                1. A written checking protocol listing the specific checks for each page type.
                2. A second checker named for every book before committee submission.
                3. A log of errors found on each book, by type.
                4. The protocol revised after any error that reached committee or the client.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written protocol is used on every book before committee submission, with a named second checker and an error log."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the checks for each page type in the book"
                - "Add ties between book pages and the disclosure summary"
                - "Name a second checker for the next book"
                - "Log every error found by type"
            - name: Defining the holders the opinion addresses
              description: |-
                ## Purpose
                An opinion is fair to someone: all common holders, holders other than a controlling shareholder or rollover participants, one class of a dual-class company or the company itself in an asset sale. Getting that definition right with counsel, before the analyses are built, determines which consideration you measure and which holders you leave out on purpose.

                ## Milestones
                1. The capital structure mapped, including classes, controllers, rollover participants and preferred holders.
                2. The proposed holder definition agreed with counsel and the client.
                3. The analyses checked to make sure they measure the consideration those holders receive.
                4. The definition used identically in the letter, the book and the disclosure.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One agreed holder definition appears word for word in the letter, the book and the disclosure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Map share classes, controllers and rollover participants"
                - "Propose the holder definition to counsel"
                - "Check each analysis measures what those holders receive"
                - "Search the letter, book and disclosure for inconsistent wording"
            - name: Pre-committee issues memo
              description: |-
                ## Purpose
                Committees move faster when the hard points are put in front of them rather than discovered: a DCF range mostly above the price, a large fee from the buyer last year, projections revised down a month before signing. A two-page memo naming each issue, its effect and how the book handles it shortens the meeting and shows the team saw it first.

                ## Milestones
                1. Every known sensitive point listed with its effect on the opinion.
                2. Each issue paired with how the book and letter address it.
                3. The memo reviewed by the MD before submission.
                4. Committee responses to each issue recorded after the meeting.

                ## Notes
                Start from the **Risk register** template. A memo that hides an issue the committee later finds costs more credibility than the issue itself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page issues memo reviewed by the MD accompanies the committee submission, and committee responses are recorded against it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every sensitive point in the book and the conflicts work"
                - "Write how the book and letter address each one"
                - "Ask the MD to review the memo before submission"
                - "Record the committee's response to each issue"
            - name: Fairness committee meeting preparation
              description: |-
                ## Purpose
                The committee meeting is where senior bankers who are not on the deal test the analyses, the conflicts and the letter, and they can withhold approval or attach conditions. Arriving with a final draft book, the letter, the conflict checklist, the issues memo and answers to the obvious questions turns a difficult hour into a short one.

                ## Milestones
                1. The submission pack sent within the committee's lead time: book, letter, conflict checklist and issues memo.
                2. Likely committee questions listed with short answers agreed with the MD.
                3. A note-taker named and the attendee list confirmed.
                4. Approval and any conditions recorded, with each condition closed before delivery.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Committee approval is recorded before the board meeting, with every condition attached to it documented as closed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Assemble the submission pack against the committee's checklist"
                - "List likely committee questions and agree answers with the MD"
                - "Send the pack within the committee's lead time @priority(high)"
                - "Record the approval and close each condition attached to it"
            - name: Board meeting at which the opinion is delivered
              description: |-
                ## Purpose
                Directors rely on the opinion as one input into approving the deal, and what was presented and asked in the meeting becomes part of the record that courts and shareholders may later examine. Preparing the board version of the book, the speaking notes and the follow-up of any question that could not be answered on the spot makes the delivery clean and the record accurate.

                ## Milestones
                1. The board book finalised to match the committee-approved version, with data dates updated.
                2. Speaking notes for the MD agreed and rehearsed.
                3. Questions asked and answers given noted for counsel's minutes.
                4. Any open question followed up in writing before signing.

                ## Notes
                Start from the **Meeting notes** template. Counsel keeps the minutes; your notes help them get the financial discussion right.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The opinion has been delivered at the board meeting from a book matching the approved version, with questions and follow-ups recorded and sent to counsel."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare the board book with the committee-approved version page by page"
                - "Rehearse the speaking notes with the MD"
                - "Note each director question and the answer given"
                - "Send written follow-ups on open questions before signing"
            - name: Signing-night opinion letter delivery
              description: |-
                ## Purpose
                Merger agreements are often signed late at night after last-minute changes, and the signed opinion letter has to match the final terms, carry the right date and be released only with committee sign-off. A short operational checklist for the night stops a letter going out against a superseded price or with the wrong holder definition.

                ## Milestones
                1. Final deal terms checked against the letter's description of the transaction.
                2. Committee sign-off confirmed for the final terms, or re-approval obtained if they changed.
                3. The signed letter dated and delivered to the named addressee.
                4. The delivered letter and the final book archived together.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The signed opinion letter matches the final agreement terms, carries committee sign-off and is archived with the final book."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build the signing-night checklist for the letter"
                - "Check the final agreement terms against the letter's description"
                - "Confirm committee sign-off covers the final terms"
                - "Archive the signed letter with the final book"
            - name: Shareholder document filing and regulator comments
              description: |-
                ## Purpose
                After signing, the opinion and the summary of analyses go into the shareholder document, and the securities regulator may return comments asking for more detail on projections, fees or how ranges were chosen. Turning those comments quickly and consistently, with every change tied back to the book, keeps the filing timetable and the bank's disclosure accurate.

                ## Milestones
                1. The bank's consent to inclusion of the letter and summary given through the approved process.
                2. Regulator comments on the financial sections logged with owners and dates.
                3. Responses drafted, tied to the book and agreed with counsel.
                4. The final filed disclosure archived with the engagement file.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every regulator comment on the financial adviser sections has a logged response agreed with counsel, and the filed disclosure is archived."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the consent process for including the letter and summary"
                - "Log each regulator comment on the financial sections"
                - "Draft responses tied back to book pages"
                - "Archive the final filed disclosure with the engagement"
            - name: Shareholder vote and proxy adviser questions
              description: |-
                ## Purpose
                Ahead of the vote, proxy advisers and large holders sometimes question the adviser's fees, conflicts or the gap between the DCF range and the price, and the client will want help answering. Preparing a short factual briefing, limited to what has been disclosed, lets the client respond without the bank saying anything new or inconsistent.

                ## Milestones
                1. Likely questions on fees, conflicts and analyses listed from proxy adviser reports and holder letters.
                2. Answers drafted using disclosed information only and agreed with counsel.
                3. Requests for the bank to speak directly to holders routed to compliance and counsel.
                4. The vote result and any follow-up recorded.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A briefing limited to disclosed information has been agreed with counsel and given to the client before the vote."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the proxy adviser reports for comments on the opinion"
                - "List likely holder questions on fees, conflicts and analyses"
                - "Draft answers using disclosed information only"
                - "Route any request for direct holder contact to compliance"
            - name: Document requests and deposition support after a deal
              description: |-
                ## Purpose
                Deals carrying fairness opinions are sometimes followed by shareholder suits or appraisal claims, and the bank's documents and witnesses may be requested. When that happens, the work is led by the bank's litigation counsel, and the banker's job is to locate the record, preserve it and prepare factually with counsel, not to explain or reconstruct anything alone.

                ## Milestones
                1. Any litigation hold notice read and acknowledged, and the engagement files preserved.
                2. The engagement record located: books, drafts, judgement log, committee materials and correspondence.
                3. A chronology prepared with counsel from the record.
                4. Preparation sessions attended as counsel arranges them.

                ## Notes
                Do not discuss the case with anyone outside counsel's instructions, and do not edit or tidy any file once a hold is in place.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The engagement record is preserved and handed to counsel, a chronology is agreed with them and every preparation session counsel requested has been attended."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Acknowledge the litigation hold notice the day it arrives"
                - "Locate every book, draft, log and committee paper for counsel"
                - "Build a factual chronology from the record with counsel"
                - "Attend each preparation session counsel arranges"
            - name: First fairness engagement as an analyst
              description: |-
                ## Purpose
                Analysts usually meet fairness work as an extra workstream on a sale or merger, with a different set of rules from the pitch and process work around it: reliance on management's case, a committee to satisfy and a public disclosure at the end. Treating the first engagement as a structured learning plan, with weekly notes on what changed and why, makes the second one twice as fast.

                ## Milestones
                1. A development plan for the engagement agreed with your associate.
                2. Weekly learning notes kept for the length of the engagement.
                3. Each page you built checked against the protocol before handover.
                4. A short end-of-engagement review with your associate recorded.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A development plan, weekly learning notes and a recorded end-of-engagement review exist for your first fairness engagement."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree a development plan for the engagement with your associate"
                - "Write a short note on what changed in the book and why @recurring(weekly:thu)"
                - "Run the checking protocol on each page before handing it over"
                - "Hold an end-of-engagement review with your associate"
            - name: Associate running the fairness workstream
              description: |-
                ## Purpose
                On most engagements the associate owns the book, the analyst's work, the conflict checklist and the interface with counsel, while the MD owns the client and the committee. Running the workstream well means setting the plan, catching inconsistencies before the VP does and making sure nothing reaches the committee without a second check.

                ## Milestones
                1. Workplan, request tracker and judgement log set up in the first week.
                2. Analyst tasks assigned with clear checks and deadlines.
                3. Every draft reviewed by you before it goes to the VP or MD.
                4. Committee submission delivered on time with all supporting papers.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The committee submission went in on time with book, letter, conflict checklist and issues memo, each reviewed by the associate first."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Set up the workplan, request tracker and judgement log"
                - "Assign analyst pages with checks and deadlines"
                - "Review every draft before it goes up to the VP"
                - "Deliver the committee submission within the lead time"
            - name: Serving on the fairness opinion committee
              description: |-
                ## Purpose
                Senior bankers asked to join the committee review other teams' deals, and the role carries real responsibility for the firm's name on public documents. Preparing for each meeting by reading the pack, testing the conflict checklist and writing your questions in advance makes your review consistent and the committee's record stronger.

                ## Milestones
                1. The committee's terms of reference and your obligations read and understood.
                2. A personal review checklist for packs covering analyses, conflicts, letter and disclosure.
                3. Written questions prepared before each meeting.
                4. Conditions you raised tracked to closure.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "For every committee meeting attended, written questions were prepared in advance and any condition you raised is recorded as closed."
                cadence: rolling
              tasks:
                - "Read the committee terms of reference and your obligations"
                - "Build a personal review checklist for submission packs"
                - "Review open conditions and upcoming committee packs @recurring(monthly:14)"
                - "Write your questions before each meeting"
            - name: Advising a special committee in a controlling shareholder deal
              description: |-
                ## Purpose
                When a controlling shareholder buys out the minority, the special committee's independent adviser is under close watch: independence, negotiating role, access to management and the range presented will all be examined. Setting up the engagement so the committee, not the controller, directs the work, and so every interaction with management is recorded, protects both the committee and the bank.

                ## Milestones
                1. Independence confirmed in writing, including relationships with the controller and its affiliates.
                2. A protocol agreed with committee counsel for contacting management and the controller.
                3. Projections sourced and their preparation checked for controller influence.
                4. Negotiation updates and the final opinion delivered to the committee, with a record of each step.

                ## Notes
                Committee counsel leads on process and legal standards. Your record of who asked for what, and when, matters as much as the analyses.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Written independence confirmation, an agreed contact protocol and a dated record of every committee update exist alongside the delivered opinion."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Confirm in writing that the bank has no disqualifying ties to the controller"
                - "Agree a management contact protocol with committee counsel"
                - "Ask who prepared the projections and whether the controller reviewed them"
                - "Log each committee update with date and attendees"
            - name: Opinion when the bank is also the deal adviser
              description: |-
                ## Purpose
                Most opinions are given by the bank already advising on the sale, which means a fee that largely depends on closing and a team that wants the deal done. Managing that position well means early disclosure, a firm separation between the advocacy and the opinion review, and a committee that sees the conflict before it sees the numbers.

                ## Milestones
                1. The transaction fee and its contingent portion disclosed in the conflict checklist and the draft disclosure.
                2. The committee briefed on the dual role at submission.
                3. Board materials distinguishing advocacy pages from the fairness analyses.
                4. The client told whether a second independent opinion has been considered, with counsel.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The dual role and contingent fee are set out in the committee submission and the draft disclosure, and the board book separates process pages from fairness analyses."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Record the transaction fee and its contingent portion in the checklist"
                - "Brief the committee on the dual role in the submission memo"
                - "Separate process advocacy pages from fairness analyses in the board book"
                - "Discuss a possible second opinion with the client's counsel"
            - name: Fairness-only mandates at an independent boutique
              description: |-
                ## Purpose
                Boutiques without lending or trading businesses are often hired precisely to give a conflict-free opinion, usually for a fixed fee and on a short timetable. Building that business means a clear independence statement, a fast and reliable process and relationships with the deal lawyers who recommend second advisers to special committees.

                ## Milestones
                1. A one-page independence and capability statement for counsel and committees.
                2. A standard timetable and fixed fee range for fairness-only work.
                3. A list of deal lawyers and committee chairs who recommend second advisers.
                4. Regular contact with that list logged, with mandates won and lost recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "An independence statement, a standard timetable and a contact log with mandates won and lost are in use and updated monthly."
                cadence: rolling
              tasks:
                - "Draft a one-page independence and capability statement"
                - "Write the standard timetable for a fairness-only engagement"
                - "List deal lawyers who recommend second advisers to committees"
                - "Contact two names on the list and log mandates won or lost @recurring(monthly:25)"
            - name: Fairness in management buyouts and going-private deals
              description: |-
                ## Purpose
                Going-private deals led by management or a sponsor with management often mean that the people who prepared the projections are also on the buying side. These deals call for extra care on where the projections came from, how the process was run and how rollover equity and management incentives are treated in the opinion.

                ## Milestones
                1. The authorship and review history of the projections documented.
                2. Rollover equity, new management incentives and any side arrangements identified and excluded or described in the letter.
                3. The holder definition agreed to exclude buying-side participants where counsel advises.
                4. Process facts, such as a market check or go-shop, summarised for the committee.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The fairness file records who prepared the projections, how management arrangements were treated and which holders the opinion addresses, all agreed with counsel."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Document who prepared and reviewed the projections"
                - "List rollover equity and management incentive arrangements"
                - "Agree the holder definition with counsel"
                - "Summarise process facts for the committee submission"
            - name: Solvency and surplus opinions alongside a fairness opinion
              description: |-
                ## Purpose
                Leveraged recapitalisations, large special dividends and some buyouts may also need a solvency or capital surplus opinion, which asks different questions from fairness: can the company pay its debts as they fall due after the deal, and does it have the surplus to make the distribution. Knowing how these differ, who usually gives them and when they are required helps you scope the work correctly and refer it on.

                ## Milestones
                1. A note setting out the questions a solvency opinion and a surplus opinion each answer.
                2. The deal features that typically call for one listed.
                3. Two public examples read to see how they were described.
                4. A referral list of firms that give solvency opinions, if your bank does not.

                ## Notes
                The legal tests behind these opinions vary by jurisdiction and are for counsel. Your note is about scope and timing, not the tests themselves.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note distinguishing solvency, surplus and fairness opinions, with typical triggers and two public examples, is saved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the questions solvency and surplus opinions each answer"
                - "List deal features that usually trigger one"
                - "Read two public examples and note how they were described"
                - "Build a referral list of firms that give solvency opinions"
            - name: Cross-border independent adviser opinions and formal valuations
              description: |-
                ## Purpose
                Outside the US, the equivalent of a fairness opinion takes different forms: an independent adviser's advice to a target board under a takeover code, an independent financial adviser letter in a circular, or a formal valuation required for related-party deals in some markets. Mapping the forms in the markets you cover, and the independence rules each sets, stops a US-style letter being offered where a different document is required.

                ## Milestones
                1. The markets you cover listed with the form of independent advice each requires, for example under the UK Takeover Code or Canadian minority protection rules.
                2. Independence tests and disclosure rules for each noted from the regulator's published material.
                3. Local counsel contacts recorded for each market.
                4. A yearly check for rule changes scheduled.

                ## Notes
                Rules change and differ by market, including smaller regional exchanges. Confirm every requirement with local counsel on each deal.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A market-by-market map of required independent advice forms, independence tests and local counsel contacts is saved and dated."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the markets you cover and the takeover or listing rules in each"
                - "Note the required form of independent advice and its independence tests"
                - "Record a local counsel contact for each market"
                - "Check for changes to takeover and minority protection rules @recurring(yearly)"
            - name: Fairness opinions on SPAC and de-SPAC mergers
              description: |-
                ## Purpose
                SPAC boards have often merged without an opinion, but heightened attention to sponsor conflicts, dilution from sponsor shares and warrants and the reliability of target projections has made opinions more common. Understanding how dilution, redemptions and sponsor economics enter the analysis lets you scope these engagements properly if one comes to your group.

                ## Milestones
                1. A note on the sponsor, warrant and redemption features that affect value per share.
                2. Three public de-SPAC filings with opinions read for how dilution was treated.
                3. A practice pro forma value per share calculated across redemption scenarios.
                4. A scope checklist for a de-SPAC fairness engagement drafted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A de-SPAC scope checklist and a practice value per share across redemption scenarios have been reviewed by a VP."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read three public de-SPAC filings that included opinions"
                - "Note how each treated sponsor shares, warrants and redemptions"
                - "Calculate a practice value per share across redemption scenarios"
                - "Draft a scope checklist for a de-SPAC fairness engagement"
---

# Fairness Opinions

This area is for bankers who prepare and deliver fairness opinions: the analysts building the book, the associates and VPs running the workstream, the MDs who stand up in the boardroom and the senior bankers who sit on the fairness committee. It starts with foundations (the scope and limits of an opinion, the engagement letter, conflict disclosure, the projections you rely on and a workplan that hits the board date), moves to the routines that keep an engagement and your precedent knowledge current, then the analytical and drafting skills, the judgement calls on fees, second opinions and opinion dates, the dated events from committee to signing night to the shareholder vote, variants for each seat on the deal team, and finally specialist work on going-private deals, solvency opinions, cross-border independent adviser rules and SPAC mergers.

What repeats is a weekly status note and data refresh during a live engagement, a monthly read of new public fairness disclosures, a monthly committee calendar check, a quarterly watch on court decisions and fairness litigation, and yearly refreshes of your precedent library and drafting clauses. The Reading queue, Feedback themes, Risk register, Meeting notes, Operational checklist and Development plan templates pair with the projects that name them. Client data and the bank's internal fairness books stay on the bank's systems; these projects hold your own method, checklists and public material, and legal or regulatory questions go to counsel and compliance. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
